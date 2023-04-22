<template>
  <q-page class="q-pd-md">
    <q-card>
          <q-toolbar class="bg-purple text-white">
        <q-btn flat round dense icon="assignment_ind" />
        <q-toolbar-title>
          {{ t("studentlist") }}
        </q-toolbar-title>
        <q-btn flat round dense :icon=biSearch class="q-mr-xs">
          <q-tooltip>
            {{ t('search') }}
          </q-tooltip>
        </q-btn>
        <q-btn flat round dense :icon=biPlus>
          <q-tooltip>
            {{ t('add' )}}
          </q-tooltip>
        </q-btn>
      </q-toolbar>

      <q-card-section>
        <q-spinner-clock v-if="loding === true" color="brown" />

        <q-markup-table>
          <thead>
            <tr>
              <th class="text-left"></th>
              <th class="text-left">Code</th>
              <th class="text-right">name</th>
              <th class="text-right">surname</th>
              <th class="text-right">date</th>
              <th class="text-right">tool</th>
            </tr>
          </thead>
          <tbody>
              <tr >
                <td>
                <q-avatar size="125px">
        <img>
      </q-avatar>
      </td>
                <td class="text-left"></td>
                <td class="text-right"></td>
                <td class="text-right"></td>
                <td class="text-right"></td>
                <td>
                  <q-btn :icon="biPencilFill" flat>
                    <!-- <q-btn :icon="biPencilFill" flat :to="'/student-form/'+item.id"></q-btn> -->
                    <q-tooltip>
                      EDIT
                    </q-tooltip>
                  </q-btn>
                  <q-btn :icon="biTrash2" flat>
                    <q-tooltip>
                      DELETE
                    </q-tooltip>
                  </q-btn>
                </td>
              </tr>
            </tbody>
        </q-markup-table>
              <div class="q-pa-lg flex flex-center">
          <q-pagination v-model="currentPage" :max="totalPage"/>
        </div>
      </q-card-section>

    </q-card>
    </q-page>
</template>

<script setup>
import { useLang } from "src/composibles/useLang";
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useMeta } from "quasar";
import { biSearch, biPlus, biPencilFill, biTrash2 } from '@quasar/extras/bootstrap-icons';
import StudentApi from 'src/api/StudentApi'
import { useRoute } from "vue-router";

const { getStudentList } = StudentApi();
const { t } = useLang();
useMeta({ title: t("studentlist") });
const dataListstu = ref({})
const loding = ref(false)
const currentPage = ref(1);
const recordPerPage = ref(3)
const totalPage = ref(0)
const route = useRoute();

onMounted(async () => {
  fetchList();
  console.log()
})

const asyncFunc = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("timeout");
      resolve(true);
    }, 3000);
  })
}

const fetchList = async () => {
  loding.value = true;
  const response = await getStudentList({
    page: currentPage.value,//method: "GET",
    perPage: recordPerPage.value ,//url: "/student",
  });
  loding.value = false;
  if (response) {
    dataListstu.value = response.dataList;
    // dataListstu.value.push(...response.dataList);
    totalPage.value = response.appPagination;
  }

  console.log("response", response);
};
// สร้าง method เพื่อรับ api key ของ back-end

async function fecfa() {
// ใส่ async ไว้ข้างหน้าในกรณีใช้ฟังก์ชัน
}

watch(currentPage, async (newVal, oldVal) => {
  fetchList();
  console.log("currentPage chage ", newVal);
});

</script>

<style>

</style>