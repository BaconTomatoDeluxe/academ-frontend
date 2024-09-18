'use client';

import { build } from '@/lib/api/builder';
import basicInstance from '../instances/basicInstance';
import withRefresh from '../instances/withRefresh';

export const apiSignup = build<SignupRequest, string>(basicInstance, 'POST', '/api/signup');
export const apiDuplicateName = build<DupNameRequest, unknown>(withRefresh, 'GET', '/api/signup/check-username');
export const apiLogin = build<LoginRequest, { accessToken: JWT; refreshToken: JWT | null }>(
  basicInstance,
  'POST',
  '/api/login',
  {
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
  },
);
export const apiLogout = build<Record<string, never>, null>(withRefresh, 'POST', '/api/logout');
export const apiSendEmail = build<ReqeustSendCode, unknown>(basicInstance, 'GET', '/api/signup/send-email');
export const apiCheckEmail = build<CheckEmailReqeust, unknown>(basicInstance, 'GET', '/api/signup/check-email');
export const apiResetPassword = build<ResetPwReq, unknown>(withRefresh, 'POST', '/api/login/reset-password');
export const apiCheckLogin = build<Record<string, never>, SimpleCheckLogin>(withRefresh, 'GET', '/api/check-login');
