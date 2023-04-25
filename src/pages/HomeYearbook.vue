<template>
  <q-page>
    <div class="box-bg" id="Home">
      <img class="dimmed fit q-mt-lg" src="../assets/รวมปก.png" />
    </div>

    <div class="q-gutter-xs row justify-center">
      <q-btn
        flat
        :class="sel ? 'show' : 'hide'"
        color="secondary"
        @click="toggleTrue"
        label="new"
      />
      <q-select outlined v-model="Year" :options="options" color="secondary" />
      <q-btn
        flat
        :class="sel ? 'hide' : 'show'"
        color="secondary"
        @click="toggleFalse"
        label="old"
      />
    </div>

    <section v-for="(item, index) in majorList" :key="index">
      <p class="text-h6">
        {{ item.name }}
      </p>
      <section v-if="item.classle.length" class="q-pl-xl">
        <div class="q-gutter-xl row q-mb-xl">
          <q-card
            v-for="(subitems, subindex) in item.classle"
            :key="subindex"
            class="my-card col-sm-3 col-10"
          >
            <q-img :src="subitems.picture.path"> </q-img>

            <p class="q-mt-md row justify-center">
              {{ subitems.class }}
            </p>
          </q-card>
        </div>
      </section>
      <section v-else class="q-ml-xl">ไม่มีข้อมูล</section>
    </section>
    <!-- <div class="grainer-to-page"></div> -->
    <!-- ------------------------------------------yearbook------------------------------------------------- -->

    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
    >
      <img srcset="../assets/เด็กถือป้าย-removebg-preview.png 2000w" />

      <!-- <q-btn fab icon="keyboard_arrow_up" color="accent" /> -->
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
import { ref, onMounted, watch, computed } from "vue";
import { useRouter } from "vue-router";
import { scroll } from "quasar";
import { YearbookApi } from "src/api/YearbookApi";
import { list } from "postcss";
import { LocalStorage } from "quasar";

const Year = ref([LocalStorage.getItem("year")]);
const slide = ref(1);
const { MajorList, YearList } = YearbookApi();
const loading = ref(false);
const yearsList = ref([]);
const majorList = ref([]);
const routet = useRouter();
const sel = ref(true);
const order = ref([LocalStorage.getItem("order")]);
const List = ref([]);
const options = ref([]);
onMounted(async () => {
  fetchYears();
  fetchMajor();
});

const toggleTrue = () => {
  sel.value = true;
  order.value = "asc";
  // console.log(order.value);

  console.log(sel.value);
};
const toggleFalse = () => {
  sel.value = false;
  order.value = "desc";

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
    yearsList.value.forEach((item) => {
      options.value.push(item.year_yearbook);
    });
  }

  // console.log("YearList", respone.dataList)
  // console.log("yearlist",yearsList.value)
  // console.log(options)
};

const fetchMajor = async () => {
  loading.value = true;
  const respone = await MajorList(Year.value, order.value);
  loading.value = false;
  if (respone) {
    majorList.value = respone.dataList;
  }

  console.log("majorList", respone);
};
watch(Year, async (newVal, oldVal) => {
  LocalStorage.set("year", newVal);
  // console.log("order",order.value);
  fetchMajor();
});
watch(order, async (newVal, oldVal) => {
  LocalStorage.set("order", newVal);
  console.log("order", order.value);
  fetchMajor();
});
</script>

<style scoped>
.show {
  border: 1px solid;
}
</style>
