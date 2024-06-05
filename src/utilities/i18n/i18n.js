import uz from '@/utilities/i18n/languages/uz.json';
import en from '@/utilities/i18n/languages/en.json';
import ru from '@/utilities/i18n/languages/ru.json';
import { createI18n } from "vue-i18n";


function getSavedLanguage() {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'uz';
}

const i18n = createI18n({
    legacy: false,
    locale: getSavedLanguage(),
    fallbackLocale: 'uz',
    messages: {
        uz: uz,
        en: en,
        ru: ru
    }
});





export default i18n;
