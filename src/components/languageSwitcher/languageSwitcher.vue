<script setup>
import {ref, onMounted} from "vue";
import {useI18n} from "vue-i18n";

const {t, locale} = useI18n({useScope: 'global'})

const switchLanguage = useI18n();
const language = ref('uz');

const setLanguage = (lang) => {
  const langMap = {
    'uz': 'uz',
    'en': 'en',
    'ru': 'ru'
  };
  if (langMap[lang]) {
    const localeValue = langMap[lang];
    locale.value = localeValue;
    language.value = localeValue;
  }
};

onMounted(() => {
  const lang = localStorage.getItem('language');
  if (lang) {
    language.value = lang;
    setLanguage(lang);
  }
});
</script>

<template>

  <a href="#" >
    <span class="flex" v-if="language === 'uz'" @click="setLanguage('ru')">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" class="las la-language md:text-xl text-base text-white" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2.25a.75.75 0 01.75.75v1.506a49.38 49.38 0 015.343.371.75.75 0 11-.186 1.489c-.66-.083-1.323-.151-1.99-.206a18.67 18.67 0 01-2.969 6.323c.317.384.65.753.998 1.107a.75.75 0 11-1.07 1.052A18.902 18.902 0 019 13.687a18.823 18.823 0 01-5.656 4.482.75.75 0 11-.688-1.333 17.323 17.323 0 005.396-4.353A18.72 18.72 0 015.89 8.598a.75.75 0 011.388-.568A17.21 17.21 0 009 11.224a17.17 17.17 0 002.391-5.165 48.038 48.038 0 00-8.298.307.75.75 0 01-.186-1.489 49.159 49.159 0 015.343-.371V3A.75.75 0 019 2.25zM15.75 9a.75.75 0 01.68.433l5.25 11.25a.75.75 0 01-1.36.634l-1.198-2.567h-6.744l-1.198 2.567a.75.75 0 01-1.36-.634l5.25-11.25A.75.75 0 0115.75 9zm-2.672 8.25h5.344l-2.672-5.726-2.672 5.726z" clip-rule="evenodd"></path></svg>
      <span class="me-1"> UZ </span>

    </span>
    <span class="flex" v-else-if="language === 'ru'" @click="setLanguage('uz')">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" class="las la-language md:text-xl text-base text-white" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2.25a.75.75 0 01.75.75v1.506a49.38 49.38 0 015.343.371.75.75 0 11-.186 1.489c-.66-.083-1.323-.151-1.99-.206a18.67 18.67 0 01-2.969 6.323c.317.384.65.753.998 1.107a.75.75 0 11-1.07 1.052A18.902 18.902 0 019 13.687a18.823 18.823 0 01-5.656 4.482.75.75 0 11-.688-1.333 17.323 17.323 0 005.396-4.353A18.72 18.72 0 015.89 8.598a.75.75 0 011.388-.568A17.21 17.21 0 009 11.224a17.17 17.17 0 002.391-5.165 48.038 48.038 0 00-8.298.307.75.75 0 01-.186-1.489 49.159 49.159 0 015.343-.371V3A.75.75 0 019 2.25zM15.75 9a.75.75 0 01.68.433l5.25 11.25a.75.75 0 01-1.36.634l-1.198-2.567h-6.744l-1.198 2.567a.75.75 0 01-1.36-.634l5.25-11.25A.75.75 0 0115.75 9zm-2.672 8.25h5.344l-2.672-5.726-2.672 5.726z" clip-rule="evenodd"></path></svg>
      <span class="me-1"> RU </span>
    </span>
</a>


</template>

<style scoped>
/* Add your scoped styles here */
</style>
