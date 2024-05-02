import { RawSignupPicUrl, RawSignupSchema, Signup } from '@schemas/signup.schema';
import logger from '../logger';

export const reformSignup = (data: RawSignupPicUrl): [Signup, Error] => {
  const { error } = RawSignupSchema.validate(data);
  if (error) {
    logger.error('회원 가입 필요 데이터 유효성 검사 실패', error);
    return [null, error];
  }

  return [
    {
      user: {
        nickname: data.nickname,
        email: data.email,
        password: data.password,
        password_check: data.password_check,
        gender: data.gender as 'Male' | 'Female',
        picture_url: data.picture_url,
        birth: data.birth,
      },
      address: data.address,
      preference: {
        gender: data.prefer_gender as 'Male' | 'Female' | 'Neutral',
        distance: Number(data.distance),
        start_age: Number(data.start_age),
        end_age: Number(data.end_age),
      },
      user_tag: {
        tags: data.tags.split(',').map((s) => Number(s)),
      },
    },
    null,
  ];
};
