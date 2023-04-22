<template>
  <q-page class="q-pa-md">
      <q-card class="my-card bg-purple text-white">
            <q-toolbar class="bg-purple text-white shadow-2 rounded-borders">
        <q-btn flat label="List Page" />
        <q-space />
        <q-tabs v-model="tab" shrink>
          <q-tab name="tab1" label="Tab 1" @click="showfrom = true"/>
        </q-tabs>
      </q-toolbar>


  <template v-if="showfrom">
    <q-form @submit="onSubmit" class="q-gutter-md">
        <q-card-section>
          <div class="text-h6">From Input</div>
          <div class="row">
          <div class="col-12 col-md-4">
              <q-input standout="bg-teal text-white" v-model="text" label="ID" :rules="[val => !!val || 'เติมช่องว่างด้วย!!']"/>
          </div>
          <div class="col-12 col-md-4"></div>
          <div class="col-12 col-md-4"></div>
          </div>
        <q-card-actions>
          <q-btn flat type="submit">Submit</q-btn>
          <q-btn flat @click="showfrom=false">Close</q-btn>
        </q-card-actions>
        </q-card-section>
        </q-form>
   </template>





          <q-card-section>
            <div class="text-h3">object</div>
            <q-list bordered separator>
               <q-item v-for="(item, index) in list2" :key="index">
                 <q-item-section>
                  ID : {{ item.id }} <br>
                  Code : {{ item.code }} <br>
                  Name : {{ item.name }}
                </q-item-section>
                <p>
                      <q-btn label="EDIT" flat></q-btn>
                      <q-btn label="Delete" flat></q-btn>
                </p>
               </q-item>
            </q-list>
          </q-card-section>
<!-- เอามาใช้กับช่อง เพิ่มแอดหรือหรือบล็อกuser -->
      </q-card>
<router-link to="/directory{{  }}"/>


  </q-page>
</template>

<script setup>
import { ref, computed } from "vue";
const showfrom = ref(false);
const item = ref({
  id: "",
  name: "",
  code: "",
});

const list = ref(["A", "B", "C", "D"]);

// const url = ref([
//   {
//   id: 1,
//   name: "ninja",
//     code: "556",
//   path:
// }
// ])
const list2 = ref([
  {
    id: 1,
    name: "ninja",
    code:"001",
  },
    {
    id: 2,
    name: "Fah",
    code: "002",
  },
    {
    id: 3,
    name: "najhin",
    code: "003",
  },
])
</script>

<style>
</style>