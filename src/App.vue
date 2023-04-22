<template>
  <RouterView/>
</template>

<script setup>
import { onMounted } from 'vue';
import { AuthenApi } from './api/AuthenApi';
import { useAuthenStore } from './stores/authen';
import { useQuasar } from 'quasar'

const { getUserDataByAuth } = AuthenApi();
const authenStore = useAuthenStore();
const $q = useQuasar()
$q.dark.set(false)
onMounted(() => {
  fetchUserData();
});
const fetchUserData = async () => {
  const respone = await getUserDataByAuth();
  console.log("App.vue > getUserDataByAuth", respone);
  if (respone && respone.userData) {
    authenStore.setAuthen(respone.userData);
  }
};
</script>

<style>

</style>
