<template>
  <div class="box-background">
    <div class="grainer">
    </div>
    <div class="container">
      <p style="font-size: 20px;color: white;">{{ major }} {{ Year }}</p>
      <center><q-icon :name="biCaretDownFill" class="t-p" @click="scrollBehavior"/></center>
    </div>
  </div>
      <div style="width: 100vw;background-color: rgb(46, 46, 46);margin-top: 0px;position: absolute;">
        <div class="box-directory">
        <div class="header">
          <h5 class="text-weight-medium">{{ major }} {{ Year }}</h5>
        </div>
        <div class="box-img-in" id="proflie">

          <div v-for="(item, index) in profileList" :key="index">
            <div v-if="item.status == 'confirm'">
              <q-card @click="proflie(item.id)" class="my-card" >
                <img src="src/assets/images.png" style="width: 250px;height: 350px;">
                   <div class="absolute-bottom text-h6 text-weight-medium text-center">
                          {{ item.fullname }}
                       </div>
              </q-card>
              </div>
          </div>

         <div v-for="(subitems, subindex) in profileList" :key="subindex" >
           <div v-if="authenStore.auth.rolesText == 'Dev' && subitems.status != 'confirm'">
              <q-card @click="proflie(subitems.id)" class="my-card1">
                <img :src=subitems.img style="width: 250px;height: 350px;">
                     <div class="absolute-bottom text-h6 text-weight-medium text-center">
                        {{ subitems.fullname }}
                     </div>
              </q-card>
              <q-btn push color="primary" label="ยืนยัน" style="margin-top: 15px;margin-left: 30px;" @click="ComfirmProfile(subitems.id)"/>
              <q-btn push color="red" label="ลบ" style="margin-top: 15px;margin-left: 15px;" @click="onDelete(subindex)"/>
            </div>
         </div>
         
         <div v-if="authenStore.auth.rolesText == 'User' && card == true">
          <q-card @click="proflie(0)" class="my-card1">
                       <div class="absolute-center text-h6 text-weight-medium text-center text-white">
                          <q-icon :name="biPlusCircle" size="xl"/>
                       </div>
          </q-card>
        </div>

        </div>
        
        </div>
      </div>
</template>

<script setup>
import { biBellFill, biBrightnessHighFill, biBoxArrowRight, biCaretDownFill, biPerson,biPlusCircle } from '@quasar/extras/bootstrap-icons';
import { ref, onMounted, onUnmounted, watch, onBeforeUnmount } from "vue";
import { useRouter, useRoute } from "vue-router";
import { QSpinnerDots, scroll,useQuasar } from 'quasar'
import { defineComponent } from 'vue'
import { ProfileApi } from 'src/api/ProfileApi';
import { useAuthenStore } from "src/stores/authen";

const authenStore = useAuthenStore();
const Year = ref();
const major = ref();
const router = useRouter();
const route = useRoute();
const $q = useQuasar();
const classId = ref();
const profileList = ref([]);
const {DirectoryListByYearbook, DirectoryComfirm, DirectoryDelete } = ProfileApi();
const loading = ref(false)
const card = ref(true);
let timer

onMounted(async () => {
  if (route.params.classId && route.params.year){
    classId.value = route.params.classId
    Year.value = route.params.year
    major.value = route.params.namemajor
  }
  if (classId.value && Year.value) {
    fetchDirectoryData();
    console.log("data",authenStore.auth)
  }
})

const proflie = (id) => {
  if (id === 0) {
    router.push(`/proflie/create/${id}`);
  } else {
    router.push(`/proflie/${id}`)
  }
  // ใส่เป็น path ของ profile ที่คนสร้าง
}


const scrollBehavior = () => {
  // window.scroll({ top: 1300, behavior: "smooth"});
  const el = document.getElementById("proflie");
  el.scrollIntoView({ behavior: "smooth", });
}

onBeforeUnmount(() => {
  if (timer !== void 0) {
    clearTimeout(timer)
    $q.loading.hide()
  }
})



const onDelete =(subindex)=> {
  $q.dialog({
    title: 'Are you sure?',
    ok: {
      push: true,
      label: "ลบ",
      color: 'negative'
    },
    cancel: {
      push: true,
      color: 'grey',
      label: "ยกเลิก"
    },
    persistent: true
  }).onOk(() => {
    // console.log('>>>> OK')
    deleteProcess(subindex);
  }).onCancel(() => {
    // console.log('>>>> Cancel')
  }).onDismiss(() => {
    // console.log('I am triggered on both OK and Cancel')
  })
}

const fetchDirectoryData = async () => {
  loading.value = true
  const respone = await DirectoryListByYearbook(classId.value)
  loading.value = false
  if (respone) {
    profileList.value = respone.dataList;
    console.log(profileList)
    //forEach คือการ สับ ตัวอาเรย์ออกมาเป็นตัวย่อยๆ
    profileList.value.forEach(element => {
      if (element.created_by == authenStore.auth.id) {
        card.value = false;
      }
    });
  }
}

const ComfirmProfile = async (id) => {
  showLoading();
  const respone = await DirectoryComfirm(id)
  if (respone) {
    console.log("comfirm?", respone)
    fetchDirectoryData();
    hideLoading();
  }
}

const showLoading = () => {
  $q.loading.show({
    message: 'กำลังดำเนินการ...',
    spinner: QSpinnerDots,
    spinnerColor: 'red'
  })
}
const hideLoading = () => {
    timer = setTimeout(() => {
      $q.loading.hide()
      timer = void 0
      refreshData();
    }, 2000)
}

const deleteProcess = async (subindex) => {
  showLoading();
  const item = profileList.value[subindex];
  if (item) {
    const respone = await DirectoryDelete(item.id);
    console.log("delete data", respone);
    if (respone) {
      hideLoading();
    }
  }
}

const refreshData = () => {
  profileList.value = [];
  fetchDirectoryData();
}

</script>

<style scoped>

.box-background{
  background-image: url(../assets/mountain_people_ocean_shore_walk_loneliness_116605_1920x1080.jpg);
  position: relative;
  /* width: 1519.5px; */
  width: 100vw;
  height: 92vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
}

.grainer{
  background-image: linear-gradient(to top,rgb(0, 0, 0),rgba(0, 0, 0, 0),rgba(255, 255, 255, 0));
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.container{
  position: absolute;
  margin-top: 600px;
}

.t-p {
  color: white;
  font-size: 20px;
  margin-bottom: -20px;
  margin-top: -40px;
}

.t-p:hover{
  cursor: pointer;
  transform: translateY(-2px);
}

.header{
  color: white;
  margin-top: 50px; 
}

.box-img-in{
  margin-left: 25px;
  margin-top: 30px;
  width: 1470px;
  padding-top: 10px;
  padding-bottom: 70px;
  display: flex;
  padding-left: 30px;
  flex-wrap: wrap;
}

.box-directory{
  text-align: center;
}

.my-card{
  width: 250px;
  height: 350px;
  margin-left: 30px;
}

.my-card:hover{
  cursor: pointer;
  transform: scale(0.99);
  opacity: 0.9;
  
}

.my-card1:hover{
  cursor: pointer;
  transform: scale(0.99);
  opacity: 0.7;
}

.my-card1{
  width: 250px;
  height: 350px;
  margin-left: 30px;
  background-color: rgb(0, 0, 0) ;
  opacity: 0.5;
}
</style>