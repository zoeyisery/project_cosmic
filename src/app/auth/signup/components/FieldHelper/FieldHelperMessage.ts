export const FieldHelperMessage: Record<string, Record<string, string>> = {
  name: {
    required: "이름을 입력해주세요.",
    minLength: "이름은 2자 이상이어야 합니다.",
  },
  email: {
    required: "이메일을 입력해주세요.",
    invalid: "올바른 이메일 형식이 아닙니다.",
  },
  password: {
    required: "비밀번호를 입력해주세요.",
    minLength: "비밀번호는 8자 이상이어야 합니다.",
    weak: "비밀번호에 숫자, 특수문자를 포함해야 합니다.",
  },
  confirmPassword: {
    required: "비밀번호를 다시 입력해주세요.",
    notMatch: "비밀번호가 일치하지 않습니다.",
  },
};
