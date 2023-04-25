<template>
  <q-layout view="hHh Lpr lfr">
    <q-header reveal :class="classnav" height-hint="98">
      <q-toolbar>
        <!-- <q-btn class="mobile-only" dense flat round icon="menu" @click="toggleLeftDrawer" /> -->

        <q-toolbar-title>
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar> -->
          <p class="text-weight-bolder q-py-md text-h4">{{ t("studentlist") }}</p>
        </q-toolbar-title>
        <q-item-section side>
          <q-toggle v-model="blueModel" />
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
      v-model="rightDrawerOpen"
      side="right"
      overlay
      behavior="desktop"
      bordered
    >
      <!-- drawer content -->
      <div class="row justify-center q-ma-lg">
        <q-avatar size="10rem">
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
      </div>
      <div>
        <div class="text-center text-h5">1234</div>
        <p class="text-center q-my-sm" style="line-height: 1px">user</p>
      </div>
      <div class="q-pa-md">
        <q-btn-group spread>
          <q-btn color="purple" label="sign In" />
          <q-btn color="purple" label="sign Out" />
        </q-btn-group>
      </div>

      <!-- </q-item> -->
      <q-separator inset spaced />
      <q-item-label header>Setting</q-item-label>
      <q-item clickable v-close-popup tabindex="0">
        <q-item-section avatar>
          <q-avatar :icon="mode" :color="colordark" text-color="white" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Theme</q-item-label>
          <q-item-label caption>moon</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle v-model="blueModel" />
        </q-item-section>
      </q-item>
      <q-item clickable v-close-popup tabindex="0">
        <q-item-section avatar>
          <q-avatar icon="translate" :color="colordark" text-color="white" />
        </q-item-section>
        <q-item-section @click="lang()">
          <q-item-label>Translate</q-item-label>
          <q-item-label caption>english</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="info" />
        </q-item-section>
      </q-item>
      <q-item clickable v-close-popup tabindex="0">
        <q-item-section avatar>
          <q-avatar icon="personadd" :color="colordark" text-color="white" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Add Admin</q-item-label>
          <q-item-label caption>February 22, 2016</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="info" />
        </q-item-section>
      </q-item>
      <q-item clickable v-close-popup tabindex="0">
        <q-item-section avatar>
          <q-avatar icon="block" :color="colordark" text-color="white" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Block User</q-item-label>
          <q-item-label caption>February 22, 2016</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="info" />
        </q-item-section>
      </q-item>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { YearbookApi } from "src/api/YearbookApi";
import { useQuasar } from "quasar";
import { useLang } from "src/composibles/useLang";

const { localeList, t, locale } = useLang();
const classnav = ref("header bg-primary text-secondary q-pt-md");
const leftDrawerOpen = ref(false);
const rightDrawerOpen = ref(false);
const tab = ref("book");
const colordark = ref();
const mode = ref();
const blueModel = ref(false);
const $q = useQuasar();
const i18 = ref();
const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
};
const lang = () => {
  i18.value = !i18.value;
};
watch(blueModel, async (newValue) => {
  console.log(`count is: ${newValue}`);
  if (newValue == false) {
    classnav.value = "header bg-primary text-secondary q-pt-md";
    colordark.value = "accent";
    mode.value = "sunny";
    
  } else {
    classnav.value = "header bg-dark text-warning q-pt-md";
    colordark.value = "warning";
    mode.value = "bedtime";
  }
  localStorage.setItem("theme",blueModel.value)
  $q.dark.toggle(localStorage.getItem("theme"));
});
watch(i18, async (newValue) => {
  console.log("i18n", i18.value);
  if(i18.value == true){
    locale.value = "th"
    console.log(locale.value)
  }else{
    locale.value ="en";
    console.log(locale.value)
  }
});
</script>

<style >
@media screen and (max-width: 600px) {
    body {
 
      padding-inline: 1%;
      width: 100%;
    }
    .header{
        padding-inline: 1%;
    }
  }
  
  @media screen and (min-width: 600px) {
    body {
   
      padding-inline: 14%;
  
    }
    .header{
        padding-inline: 14%;
    }
  }
</style>
