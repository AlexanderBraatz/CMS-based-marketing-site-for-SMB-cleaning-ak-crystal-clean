export type CaptchaData =
  | {
      success: true;
      challenge_ts: string;
      hostname: string;
      score: number;
      action: string;
    }
  | {
      success: false;
      'error-codes': ErrorCodes[];
    };

type ErrorCodes =
  | 'missing-input-secret'
  | 'invalid-input-secret'
  | 'missing-input-response'
  | 'invalid-input-response'
  | 'bad-request'
  | 'timeout-on-duplicate';

export async function verifyCaptchaToken(token: string): Promise<CaptchaData | null> {
  const secretKey = process.env.CAPTCHA_SECRET_KEY;

  if (!secretKey) {
    throw new Error('No CAPTCHA_SECRET_KEY found');
  }

  const url = new URL('https://www.google.com/recaptcha/api/siteverify');
  url.searchParams.append('secret', secretKey);
  url.searchParams.append('response', token);

  try {
    const res = await fetch(url, { method: 'POST' });
    if (!res.ok) {
      return null;
    }
    return (await res.json()) as CaptchaData;
  } catch (error) {
    console.error('[captcha] siteverify failed', error);
    return null;
  }
}
