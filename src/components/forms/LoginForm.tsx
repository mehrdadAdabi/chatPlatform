import { ThemeProvider } from "styled-components";
import {
  Button,
  InputContainer,
  InputField,
  InputLabel,
  theme,
} from "../../utilities/styles";
import { useState } from "react";
import style from "./index.module.scss";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  // const [isFocused, setIsFocused] = useState(false);
  const [registerUser, setRegisterUser] = useState({
    email: "",
    password: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (event: any) => {
    // event.preventDefault();
    console.log(event);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="conatiner">
          <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
              <InputField
                // onFocus={handleFocus}
                // onBlur={handleBlur}
                {...register("email", {
                  required: "Email is required",
                })}
                value={registerUser.email}
                type="email"
                className={registerUser.email.length > 0 ? style.focuse : ""}
                onChange={(e) => {
                  setRegisterUser((elm) => ({
                    ...elm,
                    email: e.target.value,
                  }));
                }}
              />
              <InputLabel>Email</InputLabel>
            </InputContainer>
            <InputContainer>
              <InputField
                type="password"
                {...register("password", {
                  required: "Password is required",
                })}
                className={registerUser.password.length > 0 ? style.focuse : ""}
                value={registerUser.password}
                onChange={(e) => {
                  setRegisterUser((elm) => ({
                    ...elm,
                    password: e.target.value,
                  }));
                }}
              />
              <InputLabel>Password</InputLabel>
            </InputContainer>
            <Button>Submit</Button>
          </form>
        </div>
      </ThemeProvider>
    </>
  );
};

export default LoginForm;
