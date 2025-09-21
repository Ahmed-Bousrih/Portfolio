import { createI18n } from 'vue-i18n';
import type { Messages } from './locales';
import en from './locales/en.json';
import fr from './locales/fr.json';
import pl from './locales/pl.json';
import de from './locales/de.json';

const messages: Messages = { en, fr, pl, de };

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages
});
export default i18n;