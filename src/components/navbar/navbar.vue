<script setup>

import LanguageSwitcher from "@/components/languageSwitcher/languageSwitcher.vue";
</script>

<template>

  <header class="header shop">
    <!-- Topbar -->
    <div class="topbar">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-md-12 col-12">
            <!-- Top Left -->
            <div class="top-left">
              <ul class="list-main">
                <li><a target="_blank" href="tel:+998901708888"><i class="ti-headphone-alt"></i> +99890-370-370-3 </a> </li>
                <li><a target="_blank" href="https://t.me/+998903703703"> <i class="fa-brands fa-telegram"></i> {{$t("contact-via-telegram")}}  </a></li>
              </ul>
            </div>
            <!--/ End Top Left -->
          </div>
          <div class="col-lg-7 col-md-12 col-12">
            <!-- Top Right -->
            <div class="right-content">
              <ul class="list-main">
                <li>
                  <a data-bs-toggle="modal" data-bs-target="#exampleModal" href="#" type="button">
                    <i class="ti-location-pin"></i> {{ $t("address-store") }}
                  </a>
                </li>
              </ul>
                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" style="height: 200px; width: 500px;">
                      <div class="modal-content">
                        <div class="modal-header">
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <ul class="modal-location">
                            <li class="modal-location-item">
                              <a target="_blank" href="https://yandex.com/navi?whatshere%5Bpoint%5D=69.21019933662474%2C41.2704654709965&whatshere%5Bzoom%5D=19.548315&ll=69.21021325552218%2C41.27047245624129&z=19.548315&si=78gemc4d9xux15ye481znb3tmw">
                                <i class="fa fa-location-arrow"></i> <span class="ms-2">   {{$t("tashkent-branch")}}</span>
                              </a>
                            </li>
                            <li class="modal-location-item">
                              <a target="_blank" href="https://yandex.com/navi?whatshere%5Bpoint%5D=69.21019933662474%2C41.2704654709965&whatshere%5Bzoom%5D=19.548315&ll=69.21021325552218%2C41.27047245624129&z=19.548315&si=78gemc4d9xux15ye481znb3tmw">
                                <i class="fa fa-location-arrow"></i> <span class="ms-2">  {{$t("andijan-branch")}}</span>
                              </a>
                            </li>

                          </ul>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">ok</button>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
            <!-- End Top Right -->
          </div>
        </div>
      </div>
    </div>

    <!-- End Topbar -->
    <div class="middle-inner">
      <div class="container">
        <div class="row">
          <div class="col-lg-2 col-md-2 col-12">
            <!-- Logo -->
            <div class="logo">
              <a href="../../../simple/index.html"><img src="../../assets/images/logo.png" alt="logo"></a>
            </div>
            <!--/ End Logo -->
            <!-- Search Form -->
            <div class="search-top">
              <div class="top-search"><a href="#"><i class="ti-search"></i></a></div>
              <!-- Search Form -->
              <div class="search-top">
                <form class="search-form">
                  <input type="text" :placeholder="$t('search-product')" name="search">
                  <button value="search" type="submit"><i class="ti-search"></i></button>
                </form>
              </div>
              <!--/ End Search Form -->
            </div>
            <!--/ End Search Form -->
            <div class="mobile-nav"></div>
          </div>
          <div class="col-lg-8 col-md-7 col-12">
            <div class="search-bar-top">
              <div class="search-bar">
                <form class="p-0 m-0">
                  <input name="search" :placeholder="$t('search-product')" type="search">
                  <button class="btnn"><i class="ti-search"></i></button>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-3 col-12">
            <div class="right-bar">
              <!-- Search Form -->

              <div class="sinlge-bar shopping">
                <a href="#" class="single-icon">
                  <i class="ti-shopping-cart"></i>
                  <span class="total-count">2</span>
                </a>
                <!-- Shopping Item -->
                <div class="shopping-item">
                  <div class="dropdown-cart-header">
                    <span>2 Items</span>
                    <a href="#">View Cart</a>
                  </div>
                  <ul class="shopping-list">
                    <li>
                      <a href="#" class="remove" title="Remove this item"><i class="fa fa-remove"></i></a>
                      <a class="cart-img" href="#"><img src="https://placehold.co/600x600" alt="#"></a>
                      <h4><a href="#">Woman Ring</a></h4>
                      <p class="quantity">1x - <span class="amount">$99.00</span></p>
                    </li>
                    <li>
                      <a href="#" class="remove" title="Remove this item"><i class="fa fa-remove"></i></a>
                      <a class="cart-img" href="#"><img src="https://placehold.co/70x70" alt="#"></a>
                      <h4><a href="#">Woman Necklace</a></h4>
                      <p class="quantity">1x - <span class="amount">$35.00</span></p>
                    </li>
                    <li>
                      <a href="#" class="remove" title="Remove this item"><i class="fa fa-remove"></i></a>
                      <a class="cart-img" href="#"><img src="https://placehold.co/70x70" alt="#"></a>
                      <h4><a href="#">Woman Necklace</a></h4>
                      <p class="quantity">1x - <span class="amount">$35.00</span></p>
                    </li>
                    <li>
                      <a href="#" class="remove" title="Remove this item"><i class="fa fa-remove"></i></a>
                      <a class="cart-img" href="#"><img src="https://placehold.co/70x70" alt="#"></a>
                      <h4><a href="#">Woman Necklace</a></h4>
                      <p class="quantity">1x - <span class="amount">$35.00</span></p>
                    </li>
                    <li>
                      <a href="#" class="remove" title="Remove this item"><i class="fa fa-remove"></i></a>
                      <a class="cart-img" href="#"><img src="https://placehold.co/70x70" alt="#"></a>
                      <h4><a href="#">Woman Necklace</a></h4>
                      <p class="quantity">1x - <span class="amount">$35.00</span></p>
                    </li>
                  </ul>
                  <div class="bottom">
                    <div class="total">
                      <span>Total</span>
                      <span class="total-amount">$134.00</span>
                    </div>
                    <a href="../../../simple/checkout.html" class="btn animate">Checkout</a>
                  </div>
                </div>
                <!--/ End Shopping Item -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Header Inner -->
    <div class="header-inner">
      <div class="container">
        <div class="cat-nav-head">
          <div class="row">
            <div class="col-lg-3">
              <div class="all-category">
                <h3 class="cat-heading">
                  <i class="fa fa-bars"></i>
                  {{$t('catalog')}}
                </h3>

              </div>
            </div>
            <div class="col-lg-9 col-12">
              <div class="menu-area">
                <!-- Main Menu -->
                <nav class="navbar navbar-expand-lg">
                  <div class="navbar-collapse">
                    <div class="nav-inner">
                      <ul class="nav main-menu menu navbar-nav">
                        <li class="active">
                          <router-link to="/" >{{$t('home-navbar')}} </router-link>
                        </li>
                        <li>
                          <router-link to="/" >{{$t('products')}} </router-link>
                        </li>
                        <li>
                          <router-link to="/" >{{$t('services')}} </router-link>
                        </li>
                        <li>
                          <router-link to="/" >{{$t('blog')}} </router-link>
                        </li>

                        <li><a href="../../../simple/contact.html"> {{$t("navbar-contact-us")}} </a></li>
                        <li><language-switcher></language-switcher></li>
                      </ul>
                    </div>
                  </div>
                </nav>
                <!--/ End Main Menu -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/ End Header Inner -->
  </header>

</template>

<style scoped>
.nav li a {
  height: 64px;
}
</style>