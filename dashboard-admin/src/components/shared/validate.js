export const validate = (data, type) => {
  const errors = {};

  if (!data.email) {
    errors.email = "وارد کردن ایمیل ضروری است";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "آدرس ایمیل نامعتبر است!";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = " وارد کردن رمز ضروری است";
  } else if (data.password.length < 6) {
    errors.password = "رمز شما باید بیشتر از 6 کاراکتر داشته باشد";
  } else {
    delete errors.password;
  }

  if (type === "signup") {
    if (!data.name.trim()) {
      errors.name = " وارد کردن نام کاربری ضروری است";
    } else {
      delete errors.name;
    }

    if (!data.confirmPassword) {
      errors.confirmPassword = "رمزتان را تایید کنید";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "رمز مطابقت ندارد";
    } else {
      delete errors.confirmPassword;
    }

    if (data.isAccepted) {
      delete errors.isAccepted;
    } else {
      errors.isAccepted = "باید قوانین ما را بپذیرید";
    }
  }

  return errors;
};
