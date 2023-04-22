<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->
    <q-btn round flat :label=locale >
              <q-menu>
            <q-list style="min-width: 100px">
              <q-item  v-for="(item, index) in localeList" :key="index" clickable v-close-popup @click="locale = item.locale">
                <q-item-section> {{item.text}} </q-item-section>
                <q-item-section v-if="item.locale === locale"><q-icon color="primary" name="bluetooth" /></q-item-section>
              </q-item>
            </q-list>
          </q-menu>
    </q-btn>

      <q-page-container>
        <router-view />
      </q-page-container>

  </q-layout>
</template>
<script setup>
import { useLang } from 'src/composibles/useLang';
const { localeList, t, locale } = useLang();
</script>
