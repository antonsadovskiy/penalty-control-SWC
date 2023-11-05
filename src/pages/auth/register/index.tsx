import styles from "../auth.module.css";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  IconButton,
  InputAdornment,
  Link,
  TextField,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  registerFormSchema,
  RegisterFormType,
} from "../../../entities/registerForm/types.ts";

export const RegisterPage = () => {
  const [isShowPass, setIsShowPass] = useState(false);
  const [isShowConfirmPass, setIsShowConfirmPass] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormType>({
    resolver: zodResolver(registerFormSchema),
  });

  const onSubmit: SubmitHandler<RegisterFormType> = (data) => console.log(data);

  const alreadyHaveAccountHandler = useCallback(() => {
    navigate("/auth/login");
  }, [navigate]);

  const setIsShowPassHandler = useCallback(() => {
    setIsShowPass(!isShowPass);
  }, [isShowPass, setIsShowPass]);

  const setIsShowConfirmPassHandler = useCallback(() => {
    setIsShowConfirmPass(!isShowConfirmPass);
  }, [isShowConfirmPass, setIsShowConfirmPass]);

  return (
    <div>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div>Регистрация</div>
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
          <div className={styles.pass}>
            <TextField
              label={"Подтвердите пароль"}
              fullWidth
              size={"small"}
              type={isShowConfirmPass ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={setIsShowConfirmPassHandler}>
                      {isShowConfirmPass ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              {...register("confirmPassword")}
              error={!!errors.password}
            />
            {errors.confirmPassword && (
              <span className={styles.warning}>
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
          <div className={styles.btnContainer}>
            <div className={styles.forgotPass}>
              <Link onClick={alreadyHaveAccountHandler} className={styles.link}>
                Уже есть аккаунт?
              </Link>
            </div>
            <div className={styles.btn}>
              <Button type={"submit"} variant={"contained"} fullWidth>
                Зарегистрироваться
              </Button>
            </div>
          </div>
        </form>
      </div>
      <div className={styles.overlay} />
    </div>
  );
};
