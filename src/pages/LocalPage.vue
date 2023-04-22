<template>
  <q-page class="q-pa-md">

    <q-card>
      <q-card-section>
      <div class="text-h6">
        {{ t("appName") }}
      </div>
      <div class="text-h1">
        {{ t("welcome",{name: t("appName") }) }}
      </div>
      </q-card-section>
      <q-card-section>
        <p>current locale : {{  locale }}</p>
      </q-card-section>
      <q-card-section>
              <q-select
          filled
          v-model="locale"
          :options="localeList"
          option-value="locale"
          option-label="text"
          emit-value
          map-options
          style="min-width: 250px; max-width: 300px"
        />

        <q-btn :label='t("add")'></q-btn>
        <!-- options คือตัว อาเรย์ที่เก็บเอาไว้ -->
        <!-- value คือ เมื่อเลือกแล้วจะให้เป็นค่าอะไร เหมือนเอาไว้เก็บค่าใส่ตัวแปรนี้
        label คือ ที่อยากให้มันแสดงออกมาในตัว select -->
      </q-card-section>
    </q-card>

    
  </q-page>
</template>

<script setup>
import { useMeta, } from "quasar";
import { useLang } from "src/composibles/useLang";

useMeta({ title: 'I18N Page' });
const { localeList, t, locale } = useLang();
</script>

<style>

</style>