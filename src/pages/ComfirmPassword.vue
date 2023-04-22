<template>
  <q-page>
    <div class="bg">
      <div class="from">
                <q-icon :name="biKey" size="300px" style="margin-left: 125px;"></q-icon>
          <p style="text-align: center;font-size: 20px;">password</p>
          <p style="display: inline;margin-left: 40px;font-size: 15px;">password :</p>
          <q-input outlined dense v-model="text" style="width: 520px;padding-left: 120px;margin-top: -32px;"/>
          <p style="margin-left: -15px;font-size: 15px;transform: translateY(34px);">confirm password :</p>
          <q-input outlined dense v-model="text" style="width: 520px;padding-left: 120px;margin-top: -12px;"/>
          <q-btn push color="primary" label="confirm" style="transform: translateY(70px) translateX(450px);" to="/signin"/>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { biEnvelope, biSearch, biPlus, biPencilFill, biTrash2,biKey } from '@quasar/extras/bootstrap-icons'
import { useLang } from "src/composibles/useLang";
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useMeta } from "quasar";
import StudentApi from 'src/api/StudentApi'
import { useRoute } from "vue-router";

</script>

<style scoped>
.bg {
  display: flex;
  justify-content: center;
  width: 100vw;
  background-color: rgb(46, 46, 46);
  overflow: hidden;
}

.from {
  width: 600px;
  height: 600px;
  margin-top: 60px;
  margin-bottom: 60px;
  background-color: rgb(255, 255, 255);
  border-radius: 40px;
  padding: 20px 20px 20px 20px;
  transform: translateY(-30px);
}
</style>