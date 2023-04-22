<template>
  <q-page>
     <div class="box-bg" id="Home">
          <img class="back-img" src="../assets/group-diverse-people-having-business-meeting.jpg">
             <div class="grainer">
                   <div class="contain">
                     <div class="paragrap">
          <h1 class="text-weight-bolder " > &nbsp;&nbsp;Now</h1>
          <h2> that you've graduated follow dreams <br> </h2>
          <h2> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;And </h2> <br>
          <h1 class="text-weight-bolder"> &nbsp;Make</h1>
          <p> them come true with all of</p>
          <h1 class="text-weight-bolder"> your might.</h1>
                     </div>
                   </div>
                        <center><q-icon :name="biCaretDownFill" class="t-p" @click="scrollBehavior"/></center>
             </div>
     </div>

            <div class="grainer-to-page" ></div>
            <!-- ------------------------------------------yearbook------------------------------------------------- -->
            <div style="width: 1519px;height: 130vh;background-color: rgb(46, 46, 46);mix-blend-mode: color;position: absolute;transform: translateY(-20px);" id="yearbook">

              <div class="years" style="display: flex;justify-content: center;margin-top: 130px;">
              <h3 style="color: white;margin-top:0px;display: inline;">Yearbook {{ Year }}
                <!-- ตรง yearbook 2013 ใส่เป็น {{ item }} -->
                <q-btn flat :icon="biCaretDownFill" style="color: white;">
                   <q-menu anchor="bottom left" self="top left" style="width: 200px;height: 180px;">
                    <p style="color: black;font-size: 15px;padding-left: 15px;">-Year-</p>
                      <q-item clickable dense v-close-popup v-for="(item, index) in yearsList" :key="index">
                           <q-item-section @click="change(item.year_yearbook)">{{item.year_yearbook}}</q-item-section>
                      </q-item>
                   </q-menu>
                 </q-btn>
                 </h3>
               </div>

               <div class="select-proflie">
                <div class="box-select">
      <q-carousel swipeable animated arrows v-model="slide" infinite style="border-radius: 10px;background-color: white;height: 90vh;">
        <q-carousel-slide v-for="(item, index) in majorList" :key="index" :name='item.id'  class="carou" value='item.id'>
          <div class="textbox"><h5 style="color: white;" class="headmajor text-weight-bold text-center" >{{ item.name }}</h5></div>
          <router-link v-for="(subitems, subindex) in item.classle" 
          :key="subindex" 
          :to="`/directory/${subitems.year_yearbook}/${item.name}/${subitems.id}`" class="link">
          <q-btn class="box-photo">{{ subitems.class}}{{ subitems.major }}</q-btn></router-link>
          <!-- <img :src='subitem.img'> -->
        </q-carousel-slide> 
        </q-carousel>
                </div>
               </div>
             </div>

  </q-page>
</template>

<script setup>
import { biBellFill, biBrightnessHighFill, biBoxArrowRight, biCaretDownFill, biPerson } from '@quasar/extras/bootstrap-icons';
import { ref, onMounted } from 'vue';
import { useRouter } from "vue-router";
import { scroll } from 'quasar'
import { YearbookApi } from 'src/api/YearbookApi';

let Year = ref(2017);
const slide = ref(1);
const { getScrollTarget, setScrollPosition } = scroll
const { MajorList, YearList } = YearbookApi();
const loading = ref(false)
const yearsList = ref([])
const majorList = ref([])

const scrollBehavior = () => {
  // window.scroll({ top: 1300, behavior: "smooth"});
  const el = document.getElementById("yearbook");
  el.scrollIntoView({ behavior: "smooth",});
}

onMounted(async () => {
  fetchYears();
  fetchMajor();
});
// function MoveTo() {
//   let to = this.yearbook ? this.$ref.description.offsetTop - 0 : 1300;

//   window.scroll({
//     top: to,
//     behavior: "smooth",
//   });
// };


const change = (value) => {
  Year.value = value;
  if (Year.value) {
    loading.value = true;
    fetchMajor();
    loading.value = false;
  }
}

const fetchYears = async () => {
  loading.value = true;
  const respone = await YearList();
  loading.value = false;
  if (respone) {
    yearsList.value = respone.dataList;
  }

  console.log("YearList", respone)
};

const fetchMajor = async () => {
  loading.value = true;
  const respone = await MajorList(Year.value);
  loading.value = false;
  if (respone) {
    majorList.value = respone.dataList;
  }

  console.log("majorList", respone)
};


</script>

<style scoped>

.back-img{
  display:block;
  width: 1519px;
}

.grainer{
  background-image: linear-gradient(to top,rgb(0, 0, 0),rgba(21, 21, 21, 0.547),rgba(0, 0, 0, 0.244));
  width: 1519px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.box-bg{
  position: relative;
}

.grainer-to-page{
background-image: linear-gradient(to bottom,rgb(0, 0, 0),rgb(0, 0, 0),rgb(0, 0, 0),rgb(46, 46, 46));
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 1519px;
  height: 400px;
  mix-blend-mode: color;
}

.paragrap h1,
p{
  display: inline;
  font-size: 63px;
  letter-spacing: 2px;
  color: white;
}

.paragrap h2{
  font-size: 30px;
  letter-spacing: 2px;
  text-decoration: none;
  display: inline;
  color: white;
}

.paragrap{
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    display: inline;
}

.contain {  
  padding: 257px 150px;
  margin-top: -80px;
  margin-left: 50px;
}

.t-p {
  margin-top: -400px;
  color: white;
  font-size: 80px;
  margin-left: 50px;
}

.t-p:hover{
  cursor: pointer;
  transform: translateY(-2px);
}

.select-proflie{
  display: flex;
  align-items: center;
  flex-direction: column;
}

.box-select{
  width: 1450px;
}

.box-photo{
  width: 300px;
  height: 250px;
  background-color: rgb(227, 224, 230);
  margin-left: 45px;
  margin-top:50px;
}

.box-photo:hover{
  opacity: 0.7s;
  background-color: rgb(19, 19, 19);
}


.carou{
  display: flex;
  flex-wrap: wrap;
 background-color: rgb(29, 29, 29);
}

.link{
  height: 0px;
}

.textbox{
  position: absolute;
  transform: translateY(-50px) translateX(370px);
  margin-left: 45px;
  width: 600px;
}
</style>