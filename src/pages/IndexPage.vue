<template>
  <q-page class="q-pa-md">
    <div>
       <template v-if="show">{{ "title : " + title  }}
      </template>

       <p>count : {{count}} </p>

       <p v-if="count<=100">Status ok</p>
       <p v-else-if="count <= 200"> Status Danger</p>
       <p v-else> Status Inerror</p>




       <div>
        {{ inputNo }}
        <q-input filled v-model="inputNo" label="input" type="Number"> 
           <template v-slot:prepend>
            <q-icon :name="biHeartbreak" />
          </template>
        </q-input>
       </div>
       <q-btn flat style="" color="purple-8" :label="plusBtnName" :icon="biFileArrowUpFill" @click="increse(1)" class="text-capitalize"/>
       <q-btn flat style="" 
       color="purple-8" 
       :icon="biFileArrowDownFill"
       :label="minusBtnName"
       class="q-ml-mdtext-capitalize text-capitalize  " 
       @click="decrese(1)"
       />

       <q-btn :label="show ? 'Hide' : 'Show'" @click="show = !show"/>
       

       <p>Icon</p>
       <div class="q-gutter-md">
        <q-icon :name="biFileArrowDownFill"></q-icon>
        <q-icon :name="biGoogle"></q-icon>
        <q-icon :name="biHeartbreak"></q-icon>
        <q-icon :name="biXbox"></q-icon>
        <!-- อะไรก็ตามที่มาใส่ในตัว property ที่เป็นตัวแปลมาจาก script ให้ใส่ : ก่อนใส่ -->
       </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { biFileArrowDownFill, biGoogle, biHeartbreak, biXbox,biFileArrowUpFill } from '@quasar/extras/bootstrap-icons';
import { laBedSolid } from "@quasar/extras/line-awesome";
const title = ref('Welcome to my world');
const count = ref(0);
const divId = ref('divIconID');
const plusBtnName = ref("Increse");
const minusBtnName = ref("Minus");
const inputNo = ref();
const show = ref(true);
const no = ref(0);

onMounted(() => {
  console.log("onMounted");
});

onUnmounted(() => {
  console.log("onUnmounted");
});

console.log("welcome", title.value);
//ต้องการเข้าถึงค่าของ js ให้ใช้ .value

const increse = (ni) => {
  count.value = count.value + ni;
};

// const increse = () => {
//   if (inputNo.value && inputNo.value > 0) {
//     count.value = parseInt(count.value) + parseInt(inputNo.value);
//   }
// };

const decrese = (ni) => {
  count.value = count.value - ni;
};

// const decrese = (no = 0) => {
//   count.value = count.value - no;
// };

watch(count, async (newVal, oldVal) => {
  console.log("count changed from ", oldVal, newVal);
  if (newVal > 10) {
    console.log('value greater than 10');
  }
});
// เอาไว้ใช้เช็คคนเปลี่ยน password ในโปรเจค
</script>

<style scoped>

</style>
