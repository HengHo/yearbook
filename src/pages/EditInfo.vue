<template>
  <q-page>
    <div class="bg">
      <div class="from">
        <q-btn type="flie" :icon="biPersonCircle" size="100px" style="margin-left: 190px;" rounded flat></q-btn>
            <p style="margin-left: 70px;font-size: 30px;transform: translateY(20px);"><q-icon :name="biPeopleFill"/></p>
            <q-input outlined dense v-model="text" style="width: 520px;padding-left: 120px;margin-top: -32px;"/>
            <p style="margin-left: 70px;font-size: 30px;transform: translateY(15px);"><q-icon :name="biEnvelopePaper"/></p>
            <q-input outlined dense v-model="text" style="width: 520px;padding-left: 120px;margin-top: -42px;"/>
            <q-btn push color="primary" label="confirm" style="transform: translateY(70px) translateX(250px);" to="/"/>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { biEnvelope, biSearch, biPlus, biPencilFill, biTrash2, biKey,biPeopleFill,biEnvelopePaper,biPersonCircle,biPlusCircleFill   } from '@quasar/extras/bootstrap-icons'
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