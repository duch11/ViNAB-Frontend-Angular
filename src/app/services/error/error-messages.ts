import { Alert } from "../../model/alert.interface";

export const ERROR_TYPE_SUCCESS = "success";
export const ERROR_TYPE_WARNING = "warning";
export const ERROR_TYPE_DANGER = "danger";

export const EMAIL_MIN_LENGTH = 8;
export const PASS_MIN_LENGTH = 6;
export const NAME_MIN_LENGTH = 2;

export const EMAIL_INVALID: Alert = { type: ERROR_TYPE_WARNING,
  message: "Email not valid! Needs to be at least "
    + EMAIL_MIN_LENGTH + " characters long!" };

export const PASSWORD_INVALID: Alert = { type: ERROR_TYPE_WARNING,
  message: "Password not valid! Needs to be at least "
    + PASS_MIN_LENGTH + " characters long!"};

export const NAME_INVALID: Alert = { type: ERROR_TYPE_WARNING,
  message: "Name not valid! Needs to be at least "
    + NAME_MIN_LENGTH + " characters long!"  };

export const USER_CREATED: Alert = { type: ERROR_TYPE_SUCCESS,
  message: "User created!" };

export const LOGIN_INVALID: Alert = { type: ERROR_TYPE_DANGER,
  message: "Wrong Email or password. try my@email.com and 123456" };

export const LOGIN_VALID: Alert = { type: ERROR_TYPE_SUCCESS,
message: "Welcome, you've been logged in!" };