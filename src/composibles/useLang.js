import { useI18n } from "vue-i18n";
import { watch } from "vue"
import { useMeta, LocalStorage } from "quasar";
import { app_locale_key } from 'src/utils/config';


export const useLang = () => {
  const { t, locale } = useI18n();
  const localeList = [
    { text: t("thailanguge"), locale: 'th' },
    { text: t("englishlanguge"), locale: 'en' },
  ]

  const changeLocale = () => {
    locale.value = "";
  }
  watch(locale, async (newVal, oldVal) => {
    console.log("locale changed from ", oldVal, newVal);
    LocalStorage.set(app_locale_key, newVal);
  });
  
  return {
    localeList,
    t,
    locale,
  };
};
