import { LoginPage } from "../../pages/auth/login";
import { Layout } from "../layout";
import { Route, Routes } from "react-router-dom";
import { RegisterPage } from "../../pages/auth/register";

export const App = () => {
  return (
    <Routes>
      <Route path={`/`} element={<Layout />}>
        <Route path={`/auth/login`} element={<LoginPage />} index />
        <Route path={`/auth/register`} element={<RegisterPage />} index />

        <Route path={`/main`} element={<div>главная</div>} index />
        <Route path={`/law`} element={<div>законодательство</div>} />
        <Route path={`/contacts`} element={<div>контакты</div>} />
        <Route path={`/me`} element={<div>лк</div>} />
      </Route>
    </Routes>
  );
};
