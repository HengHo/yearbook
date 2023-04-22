<template>
  <q-page>
    <div class="box-bg" id="Home">
      <img class="dimmed fit q-mt-lg" src="../assets/ปก.jpg" />
    </div>

    <div class="q-gutter-xs row justify-center">
      <q-btn
        flat
        :class="sel ? 'show' : 'hide'"
        color="secondary"
        @click="toggleTrue"
        label="new"
      />
      <q-btn
        flat
        :class="sel ? 'hide' : 'show'"
        color="secondary"
        @click="toggleFalse"
        label="old"
      />
    </div>

    <section v-for="(item, index) in yearsList" :key="index">
      <p class="text-h6">
        {{ item.year_yearbook }}
      </p>
      <section v-for="(item, index) in majorList" :key="index" class="q-pl-xl">
        <p>
          {{ item.name }}
        </p>
        <div class="q-gutter-xl row q-mb-xl">
          <q-card v-for="(subitems, subindex) in item.classle" :key="subindex"  class="my-card col-3">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
              
            </q-img>
            <p class="row justify-center">{{ subitems.class}}{{ subitems.major }}</p>
          </q-card>
          
        </div>
      </section>
      <p></p>
    </section>
    <!-- <div class="grainer-to-page"></div> -->
    <!-- ------------------------------------------yearbook------------------------------------------------- -->
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <q-btn fab icon="keyboard_arrow_up" color="accent" />
    </q-page-scroller>
  </q-page>
</template>

<script setup>
import {
  biBellFill,
  biBrightnessHighFill,
  biBoxArrowRight,
  biCaretDownFill,
  biPerson,
} from "@quasar/extras/bootstrap-icons";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { scroll } from "quasar";
import { YearbookApi } from "src/api/YearbookApi";
import { list } from "postcss";

const Year = ref([]);
const slide = ref(1);
const { MajorList, YearList } = YearbookApi();
const loading = ref(false);
const yearsList = ref([]);
const majorList = ref([]);
const routet = useRouter();
const sel = ref(true);
const List = ref([]);

onMounted(async () => {
  fetchYears();
  fetchMajor();
  
});

const toggleTrue = () => {
  sel.value = true;
  console.log(sel.value);
};
const toggleFalse = () => {
  sel.value = false;
  console.log(sel.value);
};

// const fetchData = (value) => {
//   Year.value = value;
//   if (Year.value) {
//     loading.value = true;
//     fetchMajor();
//     loading.value = false;
//   }
// };

const fetchYears = async () => {
  loading.value = true;
  const respone = await YearList();
  loading.value = false;
  if (respone) {
    yearsList.value = respone.dataList;
    // Year.value = yearsList.value.year_yearbook
    console.log("year",yearsList.value);
    for(let y of yearsList.value){
      console.log('aaaa',y.year_yearbook)
      let numb = Number(y.year_yearbook)
      const test = await MajorList( numb) 
      if(test){
        console.log("test",test)
        List.value = test.dataList
        console.log("List",List.value._rawValue);
      }
    }
  }

  // console.log("YearList", respone);
};

const fetchMajor = async () => {
  loading.value = true;
  Year.value.forEach(item => {
    console.log("ttt",item)
  })
  loading.value = false;
  // if (respone) {
  //   majorList.value = respone.dataList;
  // }

  // console.log("majorList", respone);
  // console.log("year",Year.value)
};
// watch(Year, async (newVal, oldVal) => {
//   console.log("count changed from ", oldVal, newVal);
//   if (newVal > 10) {
//     console.log('value greater than 10');
//   }
// });
</script>

<style scoped>
.show {
  border: 1px solid;
}
</style>
