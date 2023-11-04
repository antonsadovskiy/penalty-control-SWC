import {
  Button,
  IconButton,
  InputAdornment,
  Link,
  TextField,
} from "@mui/material";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  LoginFormType,
  loginFormSchema,
} from "../../../entities/loginForm/types.ts";
import { zodResolver } from "@hookform/resolvers/zod";

export const LoginPage = () => {
  const [isShowPass, setIsShowPass] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit: SubmitHandler<LoginFormType> = (data) => console.log(data);

  const forgotPassHandler = useCallback(() => {
    navigate("/auth/register");
  }, [navigate]);

  const setIsShowPassHandler = useCallback(() => {
    setIsShowPass(!isShowPass);
  }, [isShowPass, setIsShowPass]);

  return (
    <div>
      <div className={styles.loginContainer}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div>Авторизация</div>
          <div className={styles.login}>
            <TextField
              label={"Логин"}
              fullWidth
              size={"small"}
              {...register("login")}
              error={!!errors.login}
            />
            {errors.login && (
              <span className={styles.warning}>{errors.login.message}</span>
            )}
          </div>
          <div className={styles.pass}>
            <TextField
              label={"Пароль"}
              fullWidth
              size={"small"}
              type={isShowPass ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={setIsShowPassHandler}>
                      {isShowPass ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              {...register("password")}
              error={!!errors.password}
            />
            {errors.password && (
              <span className={styles.warning}>{errors.password.message}</span>
            )}
          </div>
          <div className={styles.btnContainer}>
            <div className={styles.forgotPass}>
              <Link onClick={forgotPassHandler} className={styles.link}>
                Забыли пароль?
              </Link>
            </div>
            <div className={styles.btn}>
              <Button type={"submit"} variant={"contained"} fullWidth>
                Войти
              </Button>
            </div>
          </div>
        </form>
      </div>
      <div className={styles.overlay} />
    </div>
  );
};
