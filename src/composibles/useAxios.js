import { api } from "boot/axios";
import { LocalStorage } from "quasar";
import { app_locale_key, authenKey } from "src/utils/config";
export const useAxios = () => {
  const appLocale = LocalStorage.getItem(app_locale_key);
  const callApi = (
    req = {
      method: undefined,//POST, GET, PUT, DELETE อันนี้ที่ method รับค่า
      url: undefined,
      body: undefined,//{} ท็อปเจ็ค 
      baseUrl: undefined,
      contentType: "application/json",
    }
  ) => {
    return new Promise((resolve, reject) => {
      console.log(`api ${api.defaults.baseURL}${req.url}`);

      api.defaults.headers["apiClient"] = "default";
      api.defaults.headers["X-Locale"] = appLocale ? appLocale : "th";
      api.defaults.headers.Authorization = `Bearer ${LocalStorage.getItem(
        authenKey
      )}`;
      if (req.baseUrl) {
        api.defaults.baseURL = req.baseUrl;
      }
      if (req.contentType) {
        api.defaults.headers["Content-Type"] = req.contentType;
      } else {
        api.defaults.headers["Content-Type"] = "application/json";
      }
      api({
        method: req.method,
        url: req.url,
        data: req.body ? req.body : undefined,
      })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.message);
        });
    });

  };
  return {
    callApi,
  };
};
