<template>
  <q-layout view="hHh Lpr lfr">
    <q-header
      reveal
      :class=classnav
      height-hint="98"
    >
      <q-toolbar>
        <!-- <q-btn class="mobile-only" dense flat round icon="menu" @click="toggleLeftDrawer" /> -->

        <q-toolbar-title>
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar> -->
          <p class="text-weight-bolder q-py-md text-h4">YEARBOOKS</p>
        </q-toolbar-title>
        <q-item-section side>
                <q-toggle v-model="blueModel"/>
              </q-item-section>
        <div class="desktop-only">
          <q-avatar icon="person" color="accent" text-color="white" />
          <q-avatar
            class="q-mx-sm"
            icon="person"
            color="accent"
            text-color="white"
          />
          <q-avatar icon="personadd" color="accent" text-color="white" />
        </div>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>

      <q-tabs v-model="tab" align="left">
        <q-route-tab exact name="book" to="/" label="BOOKS" />
        <q-route-tab exact name="authors" to="/testpage" label="AUTHORS" />
        <q-route-tab exact name="abount" to="/pv" label="ABOUNT" />
      </q-tabs>
      <div class="q-mt-lg" style="border-bottom: 3px solid"></div>
      <!-- <p>s</p> -->
    </q-header>

    <!-- <q-drawer v-model="leftDrawerOpen" side="left" overlay bordered> -->
    <!-- drawer content -->
    <!-- </q-drawer> -->

    <q-drawer
      dark
      v-model="rightDrawerOpen"
      side="right"
      overlay
      behavior="desktop"
      bordered
    >
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref,onMounted,watch } from "vue";
import { YearbookApi } from "src/api/YearbookApi";
import { useQuasar } from 'quasar'
const classnav = ref("header bg-primary text-secondary q-pt-md");
const leftDrawerOpen = ref(false);
const rightDrawerOpen = ref(false);
const tab = ref("book");
const blueModel=  ref(false);
const $q = useQuasar();
const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
};
watch(blueModel, async (newValue) => {
        console.log(`count is: ${newValue}`)
        if(newValue == false){

          classnav.value = "header bg-primary text-secondary q-pt-md"
        }
        else{
          classnav.value = "header bg-dark text-warning q-pt-md"
        }
        $q.dark.toggle(blueModel.value)
      })

</script>

<style scoped></style>
