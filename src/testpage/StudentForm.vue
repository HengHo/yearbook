<template>
  <q-page class="q-pa-md">
    <q-card>
      <q-spinner v-if="loading == true" color="primary" size="3em" />
      <template v-else>
        <q-card-section v-if="entityItem">
          <q-form @submit="onSubmit" class="q-gutter-md">
            <div class="row">
              <div class="col-12 col-md-4 q-pa-md">
                <q-input filled v-model="entityItem.std_code" label="Student code" />
              </div>
              <div class="col-12 col-md-4 q-pa-md">
                <q-input filled v-model="entityItem.name" label="Student name" />
              </div>
              <div class="col-12 col-md-4 q-pa-md">
                <q-input filled v-model="entityItem.surname" label="Student surname" />
              </div>
              <div class="col-12 col-md-4 q-pa-md">
                <q-input filled v-model="entityItem.birth_date" label="Student birth_date" />
              </div>
            </div>
            <q-card-actions>
              <q-btn flat type="submit">{{ t("okay") }}</q-btn>
              <q-btn flat to="/student">{{ t("cancel") }}</q-btn>
            </q-card-actions>
          </q-form>
        </q-card-section>
        <q-card-section v-else>
          <q-banner rounded class="bg-purple-8 text-white">
            We can't find your saved recipes until you sign in.

            <template v-slot:action>
              <q-btn flat color="white" label="Continue as a Guest" />
              <q-btn flat color="white" label="Sign in" />
            </template>
          </q-banner>
        </q-card-section>
      </template>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import { useMeta } from "quasar";
import { useLang } from "src/composibles/useLang";
import StudentApi  from "src/api/StudentApi";
import { useRoute } from "vue-router";
const route = useRoute();
const { t } = useLang();
const { getOne } = StudentApi();
useMeta({ title: "Student form" });

const studentId = ref();
const entityItem = ref();
const loading = ref(false);
onMounted(() => {
  if (route.params.studentId) {
    studentId.value = route.params.studentId;
  }

  if (studentId.value) {
    fethData();
  }
  console.log("get studentId ", studentId.value);
});

const fethData = async () => {
  loading.value = true;
  const respone = await getOne(studentId.value);
  loading.value = false;
  console.log("fethData", respone);
  if (respone) {
    entityItem.value = respone.entity;
  }
};
const onSubmit = () => {
  console.log("onSubmit", entityItem.value);
};
</script>