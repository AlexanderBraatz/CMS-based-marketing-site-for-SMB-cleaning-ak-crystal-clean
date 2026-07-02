export type ContactActionState =
  | { status: 'idle' }
  | { status: 'success' }
  | { status: 'validation_error'; fieldErrors: Record<string, string>; formError?: string }
  | { status: 'send_error'; formError: string };

export const initialContactActionState: ContactActionState = { status: 'idle' };
