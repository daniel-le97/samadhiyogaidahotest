import { AppState } from "../AppState";
import { router } from "../router";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";

class AccountService {
  async getAccount() {
    try {
      const res = await api.get("/account");
      AppState.account = res.data;
    } catch (err) {
      router.push({ name: "Home" });
      logger.error("HAVE YOU STARTED YOUR SERVER YET???", err);
    }
  }
}

export const accountService = new AccountService();
