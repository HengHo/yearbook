<template>
  <q-layout view="hHh Lpr fFf">

        <q-page-container>
            <q-img src="src/assets/simon-berger-twukN12EN7c-unsplash.jpg" style="height: 100%;object-fit: cover;object-position: center;" class="window-height window-width">
              <div class="absolute-right relative-position" style="width: 500px;">
               <router-view v-slot="{ Component }">
                   <transition name="slide-down" mode="out-in">
                         <component :is="Component"/>
                   </transition>
              </router-view>
               </div>
            </q-img>
      </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { biPersonCircle } from '@quasar/extras/bootstrap-icons';
import { useRouter } from "vue-router";

const router = useRouter();

</script>

<style>

.slide-down-enter-from,
.slide-down-leave-to{
  opacity: 0;
  transform: translateY(300px);
}

.slide-down-enter-active,
.slide-down-leave-active{
  transition: 0.5s ease-out;
}
</style>