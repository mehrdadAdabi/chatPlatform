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
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const RegiterForm = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [registerUser, setRegisterUser] = useState({
    email: "",
    name: "",
    family: "",
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
                value={registerUser.email}
                type="email"
                {...register("email", {
                  required: "Email is required",
                })}
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
            <section className={style.nameAndFamily}>
              <InputContainer>
                <InputField
                  type="text"
                  {...register("firstName", {
                    required: "firstName is required",
                  })}
                  className={registerUser.name.length > 0 ? style.focuse : ""}
                  value={registerUser.name}
                  onChange={(e) => {
                    setRegisterUser((elm) => ({
                      ...elm,
                      name: e.target.value,
                    }));
                  }}
                />
                <InputLabel>FirstName</InputLabel>
              </InputContainer>
              <InputContainer>
                <InputField
                  type="text"
                  {...register("lastName", {
                    required: "lastName is required",
                  })}
                  className={registerUser.family.length > 0 ? style.focuse : ""}
                  value={registerUser.family}
                  onChange={(e) => {
                    setRegisterUser((elm) => ({
                      ...elm,
                      family: e.target.value,
                    }));
                  }}
                />
                <InputLabel>LastName</InputLabel>
              </InputContainer>
            </section>
            <InputContainer>
              <InputField
                type="password"
                {...register("password", {
                  required: "Passsword is required",
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
            <Button>CreateAccount</Button>
            <div className={style.haveAccount}>
              <span>Already have Account!</span>
              <a href="/login">Login</a>
            </div>
          </form>
        </div>
      </ThemeProvider>
    </>
  );
};

export default RegiterForm;
