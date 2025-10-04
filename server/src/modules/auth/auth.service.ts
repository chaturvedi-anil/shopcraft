import ErrorHandler from "../../utils/error-handler";
import { comparePassword, hashPassword } from "../../utils/hash";
import { signToken } from "../../utils/jwt";
import { SignupProp, SigninProp } from "./auth.controller";
import * as authRepository from "./auth.repository";

export const signupUser = async (reqBody: SignupProp) => {
  const { name, email, password } = reqBody;
  const isUserExisting = await authRepository.findUserByEmail(email);

  if (isUserExisting) {
    throw new ErrorHandler(`User with ${email} email already exists`, 400);
  }

  const hashedPassword = await hashPassword(password);

  const user = await authRepository.createUser({
    ...reqBody,
    password: hashedPassword,
  });

  const token = signToken({ id: user.id, email: user.email });
  return { user, token };
};

export const singinUser = async (reqBody: SigninProp) => {
  const { email, password } = reqBody;
  const isUserExist = await authRepository.findUserByEmailWithPassword(email);

  if (!isUserExist) {
    throw new ErrorHandler(`Invalid email or password`, 401);
  }

  const isPasswordCorrect = comparePassword(password, isUserExist.password);

  if (!isPasswordCorrect) {
    throw new ErrorHandler(`Invalid email or password`, 401);
  }

  const token = signToken({ id: isUserExist.id, email: isUserExist.email });
  return { token };
};

export const getMe = async (email: string) => {
  const user = await authRepository.findUserByEmail(email);
  return user;
};
