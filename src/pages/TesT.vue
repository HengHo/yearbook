<template>
 <div id="app" class="container mx-auto pt-12" >
  <div class="box shadow-box" v-for="item in dataLists" :key="item.id">
    <h5 class="text ">
      {{ item.name }} {{ item.surname }}(#{{ item.id }})
    </h5>
    <p class="description">
      student code: {{ item.std_code }}<br>
      birth day: {{ item.birth_date }}
    </p>
  </div>

  <!-- <q-spinner-dots color="primary" size="40px" v-if=dataLists.length v-intersection="handleScrolledToBottom"></q-spinner-dots> -->
        <div class="row justify-center q-my-md" v-if='dataLists.length' v-intersection="handleScrolledToBottom">
          <q-spinner-dots v-if="loding === false" color="primary" size="40px" />
        </div>
 </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import StudentApi from 'src/api/StudentApi'

const { getStudentList } = StudentApi();

const dataLists = ref([]);
const currentPage = ref(1);
const recordPerPage = ref(2);
const totalPage = ref(0)
const loding = ref(false);

onMounted(async () => {
  fetch();
})

// const fetch = async () => {
//   let dataList = await axios.get(`http://localhost/php-rest-api/student?page=1`)

//   dataList.value = dataList.data.dataList;
// }

const fetch = async () => {
  const response = await getStudentList({
    page: currentPage.value,//method: "GET", 
    perPage: recordPerPage.value,
  });
  if (response) {
    // dataLists.value = response.dataList;
    dataLists.value.push(...response.dataList);
    totalPage.value = response.appPagination;
  };
}

const handleScrolledToBottom = (isVisible) => {
setTimeout(()=>{
    loding.value = true
    if (!isVisible) { return }
    if (currentPage.value >= totalPage.value) { return }

    currentPage.value++
    recordPerPage.value = 2
    fetch();
  console.log("timeout");
  loding.value = false;
  },2000)
};


</script> 

<style scoped>
.container{
  display: flex;
  align-items: center;
  flex-direction: column;
}
.box{
  background-color: rgb(209, 110, 255);
  border: 3px solid black;
  box-shadow: 5px 5px 10px 0px rgb(80, 0, 96);
  padding: 0 0 0 25px;
  width: 1000px;
  margin: 10px 0 10px 0;
}
 .description{
  margin-bottom: 20px;
 }
</style>
