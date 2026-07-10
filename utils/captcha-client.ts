const CAPTCHA_TIMEOUT_MS = 10_000;

export async function getCaptchaToken(): Promise<string | null> {
  const siteKey = process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY;

  if (!siteKey) {
    return null;
  }

  if (typeof window === 'undefined' || typeof grecaptcha === 'undefined') {
    return null;
  }

  try {
    const tokenPromise = new Promise<string | null>((resolve, reject) => {
      grecaptcha.ready(async () => {
        try {
          const token = await grecaptcha.execute(siteKey, { action: 'contact' });
          resolve(token);
        } catch (error) {
          reject(error);
        }
      });
    });

    const timeoutPromise = new Promise<null>((resolve) => {
      setTimeout(() => resolve(null), CAPTCHA_TIMEOUT_MS);
    });

    return await Promise.race([tokenPromise, timeoutPromise]);
  } catch {
    return null;
  }
}
