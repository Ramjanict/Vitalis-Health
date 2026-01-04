export type LoginPayload = {
  email: string;
  password: string;
};

// login response type

export type LoginTokens = {
  accessToken: string;
  refreshToken: string;
};

export type LoginResponseData = {
  message: string;
  tokens: LoginTokens;
  userId: string;
};

export type LoginResponseInner = {
  success: boolean;
  message: string;
  data: LoginResponseData;
};

export type LoginApiResponse = {
  data: LoginResponseInner;
  timestamp: string;
  path: string;
  success: boolean;
};
