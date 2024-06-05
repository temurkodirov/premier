<script setup>

import CarouselBanner from "@/components/home/carousel-banner.vue";
</script>

<template>
  <section class=" container mt-3">
    <div class="row">

      <div class="col-lg-3">
        <div class="border rounded shadow p-3">
          <ul class="font-18 my-sidebar" style="font-size: 18px">
            <li class="d-flex align-items-center justify-content-between">
              <router-link to="/" class="d-flex align-items-center">
                <img height="45" width="45" src="https://api.uskunalar.uz/media/category_image/drinks.svg">
                <span class="ms-2"> Qurulish va qurulish mollarini ishlab chiqarish uskunalari</span>
              </router-link>  <i class="ti-angle-right"></i>
            </li>
            <li class="d-flex align-items-center justify-content-between">
              <router-link to="/" class="d-flex align-items-center">
                <img height="45" width="45" src="https://api.uskunalar.uz/media/category_image/drinks.svg">
                <span class="ms-2"> Non va qandolat biznesi uchun uskunalar </span>
              </router-link>  <i class="ti-angle-right"></i>
            </li>
            <li class="d-flex align-items-center justify-content-between">
              <router-link to="/" class="d-flex align-items-center">
                <img height="45" width="45" src="https://api.uskunalar.uz/media/category_image/drinks.svg">
                <span class="ms-2">Oziq ovqat sanoati</span>
              </router-link>  <i class="ti-angle-right"></i>
            </li>

            <li class="d-flex align-items-center justify-content-between">
              <router-link to="/" class="d-flex align-items-center">
                <img height="45" width="45" src="https://api.uskunalar.uz/media/category_image/drinks.svg">
                <span class="ms-2">Yog'ochni qayta ishlash va mebel ishlab chiqarish </span>
              </router-link>  <i class="ti-angle-right"></i>
            </li>
            <li class="d-flex align-items-center justify-content-between">
              <router-link to="/" class="d-flex align-items-center">
                <img height="45" width="45" src="https://api.uskunalar.uz/media/category_image/drinks.svg">
                <span class="ms-2"> Maxsus tehnikalar </span>
              </router-link>  <i class="ti-angle-right"></i>
            </li>
            <li class="d-flex align-items-center justify-content-between">
              <router-link to="/" class="d-flex align-items-center">
                <img height="45" width="45" src="https://api.uskunalar.uz/media/category_image/drinks.svg">
                <span class="ms-2"> Qadoqlash uskunalari </span>
              </router-link>  <i class="ti-angle-right"></i>
            </li>
            <li class="d-flex align-items-center justify-content-between">
              <router-link to="/" class="d-flex align-items-center">
                <img height="45" width="45" src="https://api.uskunalar.uz/media/category_image/drinks.svg">
                <span class="ms-2"> Qog'ozni qayta ishlash sanoati </span>
              </router-link>  <i class="ti-angle-right"></i>
            </li>
            <li class="d-flex align-items-center justify-content-between">
              <router-link to="/" class="d-flex align-items-center">
                <img height="45" width="45" src="https://api.uskunalar.uz/media/category_image/drinks.svg">
                <span class="ms-2"> Sut mahsulotlarini qayta ishlash sanoati </span>
              </router-link>  <i class="ti-angle-right"></i>
            </li>
            <li class="d-flex align-items-center justify-content-between">
              <router-link to="/" class="d-flex align-items-center">
                <img height="45" width="45" src="https://api.uskunalar.uz/media/category_image/drinks.svg">
                <span class="ms-2"> Qandolatchilik mahsulotlarini qayta ishlab chiqarish </span>
              </router-link>  <i class="ti-angle-right"></i>
            </li>
            <li class="d-flex align-items-center justify-content-between">
              <router-link to="/" class="d-flex align-items-center">
                <img height="45" width="45" src="https://api.uskunalar.uz/media/category_image/drinks.svg">
                <span class="ms-2"> Un tegirmonlari </span>
              </router-link>  <i class="ti-angle-right"></i>
            </li>
            <li class="d-flex align-items-center justify-content-between">
              <router-link to="/" class="d-flex align-items-center">
                <img height="45" width="45" src="https://api.uskunalar.uz/media/category_image/drinks.svg">
                <span class="ms-2"> Gazli va gazsiz ichimliklar sanoati </span>
              </router-link>  <i class="ti-angle-right"></i>
            </li>
            <li class="d-flex align-items-center justify-content-between">
              <router-link to="/" class="d-flex align-items-center">
                <img height="45" width="45" src="https://api.uskunalar.uz/media/category_image/drinks.svg">
                <span class="ms-2"> Gidravlik presslar </span>
              </router-link>  <i class="ti-angle-right"></i>
            </li>
            <li class="d-flex align-items-center justify-content-between">
              <router-link to="/" class="d-flex align-items-center">
                <img height="45" width="45" src="https://api.uskunalar.uz/media/category_image/drinks.svg">
                <span class="ms-2"> Metalni qayta ishlash sanoati </span>
              </router-link>  <i class="ti-angle-right"></i>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-9">

        <carousel-banner></carousel-banner>
      </div>
    </div>

    <!-- Single Slider -->

    <!--/ End Single Slider -->
  </section>
</template>

<style scoped>
.font-18 {
  font-size: 18px;
}
.my-sidebar {
  height: 500px;
  overflow-y: scroll;
}
.my-sidebar li {
  padding: 7px 0;
}
</style>