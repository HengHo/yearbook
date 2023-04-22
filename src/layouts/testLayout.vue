<template>
  <q-layout view="hHh lpR fff">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title class="q-ma-md row">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <section class="desktop-only q-ml-md text-h6">Heng Ho test</section>
        </q-toolbar-title>
        <q-icon class="q-px-xs" name="notifications" />

        <q-btn-dropdown stretch flat label="Ratchanon Ho">
          <q-list>
            <q-item-label header>Account</q-item-label>
            <q-item clickable v-close-popup tabindex="0">
              <q-item-section avatar>
                <q-avatar icon="person" color="secondary" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="ellipsis">Ratchanon Ho</q-item-label>
                <q-item-label caption>Role</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="edit" />
              </q-item-section>
            </q-item>
            <!-- <q-item clickable v-close-popup tabindex="0"> -->

            <div class="q-px-md">
              <q-btn-group spread>
                <q-btn color="purple" label="sign In"  />
                <q-btn color="purple" label="sign Out"  />
              </q-btn-group>
            </div>

            <!-- </q-item> -->
            <q-separator inset spaced />
            <q-item-label header>Setting</q-item-label>
            <q-item clickable v-close-popup tabindex="0">
              <q-item-section avatar>
                <q-avatar icon="bedtime" color="primary" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Theme</q-item-label>
                <q-item-label caption>moon</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-toggle v-model="blueModel"/>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup tabindex="0">
              <q-item-section avatar>
                <q-avatar icon="translate" color="primary" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Translate</q-item-label>
                <q-item-label caption>english</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="info" />
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup tabindex="0">
              <q-item-section avatar>
                <q-avatar icon="personadd" color="primary" text-color="white" />
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
                <q-avatar icon="block" color="primary" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Block User</q-item-label>
                <q-item-label caption>February 22, 2016</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="info" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script setup>
import { ref,watch  } from "vue";
import { useQuasar } from 'quasar'
const blueModel=  ref('');

// const pinkModel = ref("Agreed")
// const greenModel = ref(42)
// const redModel = ref(true)

    const $q = useQuasar();
  // console.log(blueModel.value);
// const modedark = (blueModel.value) => {
// set status
// $q.dark.toggle(blueModel.value) // or false or "auto"
// };

  watch(blueModel, async (newValue) => {
        console.log(`count is: ${newValue}`)
        $q.dark.toggle(blueModel.value)
      })

</script>
