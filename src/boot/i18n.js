import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
import messages from 'src/i18n'
import { useMeta, LocalStorage } from "quasar";
import { app_locale_key } from 'src/utils/config';

export default boot(({ app }) => {
  let appLocale = LocalStorage.getItem(app_locale_key)
  const i18n = createI18n({
    locale: appLocale ,
    globalInjection: true,
    messages,
    legacy: false,
  })

  // Set i18n instance on app
  app.use(i18n)
})
