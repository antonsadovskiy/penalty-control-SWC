import { LoginPage } from "../../pages/auth/login";
import { Layout } from "../layout";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route path={`/`} element={<Layout />}>
        <Route path={`/auth/login`} element={<LoginPage />} index />
      </Route>
    </Routes>
  );
};
