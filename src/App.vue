<template>
  <router-view v-slot="{ Component, route }">
    <transition
      name="fade"
      mode="out-in"
      :enter-active-class="route.meta.enterClass"
      :leave-active-class="route.meta.leaveClass"
    >
      <component :is="Component"
    /></transition>
  </router-view>
</template>

<script>
import AOS from "aos";

export default {
  mounted() {
    AOS.init({
      once: false,
      duration: 600,
      easing: "ease-out-sine",
    });
  },
};
</script>

<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
</style>
