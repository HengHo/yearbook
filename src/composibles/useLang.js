import { watch } from "vue";
import { LocalStorage } from "quasar";
import { useI18n } from "vue-i18n";
import { app_locale_key } from "src/utils/config";
export const useLang = () => {
  const { t, locale } = useI18n();
  const localeList = [
    { text: t("thaiLanguge"), locale: "th" },
    { text: t("englishlanguge"), locale: "en" },
  ]; 

  watch(locale, async (newVal, oldVal) => {
    console.log("local change from", oldVal, newVal);
    LocalStorage.set(app_locale_key, newVal);
  });

  return {
    localeList,
    t,
    locale,
  };
};
