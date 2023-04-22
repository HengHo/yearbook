<template>
  <q-page>
    <div class="bg">
      <q-form @submit.prevent="onsubmit">
      <div class="custom-motto" style="margin-top: 140px;">
        <img src="src/assets/images.png"
          style="position: absolute;transform: translateX(90px);width: 250px;height: 450px;">
        <q-icon :name="biGear" class="icon" v-if="authenStore.auth.rolesText === 'Dev'">
          <q-menu v-model="showing">
            <q-list style="min-width: 100px">
              <hr style="width: 70%;position: absolute;margin-left: 13px;transform: translateY(-6px);">
              <q-item clickable v-close-popup>
                <q-item-section style="color: red;font-size: 20px;">Delete</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-icon>

        <!---------------------------------------------------------- - ---------------------------------------------------------->

        <q-icon :name="biGear" class="icon"
          v-if="authenStore.auth.rolesText === 'User' && authenStore.auth.id == profileId">
          <q-menu v-model="showing">
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section style="color: green;font-size: 20px;" @click="goto">Edit</q-item-section>
              </q-item>
              <hr style="width: 70%;position: absolute;margin-left: 13px;transform: translateY(-6px);">
              <q-item clickable v-close-popup>
                <q-item-section style="color: red;font-size: 20px;">Delete</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-icon>
        <!------------------------------------------------------------  ------------------------------------------------------------------------------->

        <div class="in-box">
          <div class="text">
            <div>
            <q-input standout v-model="profile.motto"/>
            </div>
            <p style="color: white;padding-left: 85%;padding-top: 100px;font-size: 20px;" class="text-weight-bold"><q-input standout v-model="profile.fullname"/></p>
          </div>
        </div>
      </div>
      <div class="info">
        <div class="row">
        <div class="col self-center q-mr-sm"> ชื่อ-นามสกุล : </div>
        <q-input standout v-model="profile.fullname" bg-color="grey"  dense />
        </div>
        <div class="row q-my-sm">
        <div class="col self-center q-mr-sm"> ชื่อเล่น : </div>
        <q-input standout v-model="profile.nickname" bg-color="grey"  dense />
        </div>
        <div class="row">
        <div class="col self-center q-mr-sm"> วันเกิด : </div>
        <q-input standout v-model="profile.birth" bg-color="grey"  dense />
        </div>
        <div class="row q-my-sm">
        <div class="col self-center q-mr-sm"> วันที่เข้ารับการศึกษา : </div>
        <q-input standout v-model="profile.admission" bg-color="grey"  dense />
        </div>
        <div class="row">
        <div class="col self-center q-mr-sm"> วันที่จบการศึกษา : </div>
        <q-input standout v-model="profile.graduation" bg-color="grey"  dense />
        </div>
      </div>

      <div class="info_icon">
        <q-icon style="color: white;text-decoration: none;"><img
            src="https://img.icons8.com/office/480/null/facebook-new.png" style="width: 30px;height: 30px;" /> : </q-icon><q-input standout v-model="profile.facebook" bg-color="grey"  dense />
        <q-icon style="color: white;text-decoration: none;"><img
            src="https://img.icons8.com/fluency/240/null/instagram-new.png" style="width: 30px;height: 30px;" /> : </q-icon><q-input standout v-model="profile.instagram" bg-color="grey"  dense />
        <q-icon style="color: white;text-decoration: none;"><img
            src="https://img.icons8.com/plasticine/100/null/phone.png" style="width: 30px;height: 30px;" /> : </q-icon><q-input standout v-model="profile.phone" bg-color="grey"  dense />
      </div>
      <q-btn label="ยืนยัน" type="submit"></q-btn>
      </q-form>
    </div>
  </q-page>
</template>

<script setup>
import { biBellFill, biBrightnessHighFill, biBoxArrowRight, biCaretDownFill, biPerson, biGear, biCursorFill } from '@quasar/extras/bootstrap-icons';
import { ref, onMounted, onUnmounted, watch, onBeforeUnmount } from 'vue';
import { fabFacebook } from '@quasar/extras/fontawesome-v6';
import { useRouter, useRoute } from "vue-router";
import { useAuthenStore } from "src/stores/authen";
import { ProfileApi } from 'src/api/ProfileApi';

const text = ref('');
const router = useRouter();
const authenStore = useAuthenStore();
const { DirectoryReadOne } = ProfileApi();
const route = useRoute();
const profile = ref({
  id: null,
  birth: "",
  fullname: "",
  nickname: "",
  motto: "",
  img: "",
  admission: "",
  graduation: "",
  phone: "",
  facebook: "",
  instagram: "",
})
console.log("input",profile)
const profileId = ref("")
const action = ref("")

const goto = (ni) => {
  router.push(`/proflie/edit/${ni}`)
}

onMounted(async () => {
  if (route.params.profileId) {
    profileId.value = route.params.profileId;
  }
  if (route.params.action) {
    action.value = route.params.action;
  }
  
  if (profileId.value && action.value == "edit") {
    fetchOneData();
  }
})

const fetchOneData = async () => {
  const respone = await DirectoryReadOne(profileId.value)
  if (respone) {
    profile.value = respone.entity
    console.log("data motto", respone)
  }
}
</script>

<style scoped>
.bg {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vw;
  background-color: rgb(46, 46, 46);
}

.in-box {
  width: 1200px;
  height: 400px;
  background-color: gray;
}

.text {
  text-align: center;
  padding-top: 130px;
  padding-left: 150px;
}

.icon {
  color: white;
  margin-left: 1150px;
  margin-bottom: 10px;
  font-size: 30px;
  background: transparent;
}

.icon:hover {
  cursor: pointer;
  transform: rotate(90deg);
  transition: transform 1s;
}

.comment-css {
  display: flex;
  margin-top: 60px;
}

.info {
  color: white;
  margin-top: 30px;
}

.comment {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  background-color: gray;
  width: 1200px;
  height: 900px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
}

.info_icon {
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
}

.submit:hover {
  cursor: pointer;
}</style>