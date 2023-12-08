import axios from "axios";
import { LoginFormType } from "../../entities/loginForm/types.ts";

const baseURL = "https://172.20.10.3:3000";

export class Api {
  public static readonly axios = axios.create({
    baseURL: baseURL,
  });

  public static async login(data: LoginFormType) {
    try {
      const response = await Api.axios.get("/auth/login", { data });

      return response.data;
    } catch (e) {
      console.error(e);
    }
  }
}
