import { useUserInfoStore } from "../../entities/userInfo/store.ts";
import { Navigate } from "react-router-dom";

export const MainPage = () => {
  const isLoggedIn = useUserInfoStore((state) => state.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to={"/auth/login"} />;
  }

  return <div>главная</div>;
};
