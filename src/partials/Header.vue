<template>
  <header class="absolute w-full z-30">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-20">
        <!-- Site branding -->
        <div class="shrink-0 mr-4">
          <!-- Logo -->
          <router-link to="/" class="block" aria-label="Cruip">
            <Logo />
          </router-link>
        </div>

        <!-- Desktop navigation -->
        <nav class="md:flex md:grow">
          <!-- Desktop sign in links -->
          <ul class="flex grow justify-end flex-wrap items-center">
            <!-- <li>
              <router-link
                to="/about"
                class="text-gray-300 hover:text-gray-200 px-4 py-2 flex items-center transition duration-150 ease-in-out"
                >About us</router-link
              >
            </li> -->
            <li>
              <button
                v-scroll-to="'#cta'"
                class="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3"
              >
                Get a free quote
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import Dropdown from "./../utils/Dropdown.vue";
import Logo from "./../utils/Logo.vue";

export default {
  name: "Header",
  components: {
    Dropdown,
    Logo,
  },
  data: function () {
    return {
      mobileNavOpen: false,
    };
  },
  mounted() {
    document.addEventListener("click", this.clickOutside);
    document.addEventListener("keydown", this.keyPress);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.clickOutside);
    document.removeEventListener("keydown", this.keyPress);
  },
};
</script>
