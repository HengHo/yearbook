<template>
  <q-layout view="hHh Lpr fFf">

    <div v-if="authenStore.auth.rolesText == 'Dev'">
    <q-header  class="bg-black text-white" style="position: fixed;height: 70px;">
      <q-toolbar class="row items-start justify-between">
        <img src="../assets/udvc-logo.png" style="width: 150px;height: 150px;" class="q-mr-xl col-gt-sm-1">
        <div class="home-admin-notification gt-sm self-start cod-md-6 offset-md-5" style="display: flex;flex-direction: row;padding-top: 30px;font-size: 20px;">
          <router-link to="/" class="a q-mx-md" >Home</router-link>
          <p class="admin q-mr-md">admin
            <q-menu anchor="top middle" self="bottom middle">
              <q-item clickable v-close-popup >
               <q-item-section style="color:green;text-align: center;" @click="tofrom('add')">ADD</q-item-section>
              </q-item>
              <q-separator style="width: 60px;margin-left: 7px;"/>
                 <q-item clickable v-close-popup>
                   <q-item-section style="color: red;" @click="tofrom()">BLOCK</q-item-section>
                 </q-item>
             </q-menu>
            </p>
          <q-btn round icon="notifications" style="transform: translateY(-10px);" @click="alerta('/confirm/notification')">
          <q-badge floating color="red" transparent rounded style="transform: translateX(-5px) translateY(5px);overflow: hidden;font-size: 3px;border-radius: 50%;">3</q-badge>
        </q-btn>
        </div>
        <div class="theme-user gt-sm self-start cod-md-6 offset-md-2" style="display: flex;flex-direction: row;padding-top: 30px;font-size: 20px;">
          <q-icon :name="biBrightnessHighFill" class="icon"></q-icon>
          <p class="p q-mx-md text-center">{{authenStore.auth.username}}</p>
          <q-icon :name="biBoxArrowRight" class="icon-out" @click="logoutComfirm"></q-icon>

          <!-------------------------- Dropdown -------------------------------------------->

          <q-btn-dropdown :dropdown-icon="biCaretDownFill" style="transform: translateY(-4px);width: 0px;height: 0;margin-left: 10px;margin-right: 205px;" >
            <q-list>
              <div class="form-user" style="width: 350px;height: 350px;background-color: white;color: black;border-radius:50px;position: relative;">
                <q-avatar rounded size="100px" font-size="82px" color="black" text-color="white"  class="q-mx-xl" style="border-radius: 10px;position: absolute;"><img :src=authenStore.auth.picture.path></q-avatar>
                <!-- รูป avater รอ blinding ด้วยวิธีการ :src="" -->
                <h4 class="nameuser text-weight-medium">{{ authenStore.auth.username }}</h4>
                <p class="p1">{{ authenStore.auth.rolesText }}</p>
                <q-btn flat style="color: black;width: 80%;font-size: 20px;border-bottom: 2px solid gray;margin-left: 35px;margin-top: 70px;" label="Change password" to="/comfirmemail"/>
                <q-btn flat style="color: black;width: 80%;font-size: 20px;border-bottom: 2px solid gray;margin-left: 35px;" label="edit profile" class="q-my-md" to="/editinfo"/>
                <q-btn flat style="color: red;width: 80%;font-size: 20px;margin-left: 35px;" label="sign out" @click="logoutComfirm"/>
              </div>
            </q-list>
          </q-btn-dropdown>
          </div>

          <!-- ----------------------------------------------- if low --------------------------------------------->
          <div class="self-start q-pt-lg ">
            <q-btn flat @click="drawer =!drawer" round dense icon="menu" class="lt-md"/>
             <q-drawer
          v-model="drawer"
          :width="205"
          :breakpoint="600"
          overlay
          bordered
        >
          <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
            <q-list padding>

              <q-item active clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="inbox" />
                </q-item-section>
                <q-item-section>
                  Home
                </q-item-section>
              </q-item>

              <q-item active clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="star" />
                </q-item-section>

                <q-item-section>
                  Add
                </q-item-section>
              </q-item>

              <q-item active clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="send" />
                </q-item-section>

                <q-item-section>
                  Block
                </q-item-section>
              </q-item>

              <q-item active clickable v-ripple>
                <q-item-section avatar>
                  <q-icon name="drafts" />
                </q-item-section>

                <q-item-section>
                  Notification
                </q-item-section>
              </q-item>

              <q-item active clickable v-ripple>
                    <q-btn flat style="color: black;border-bottom: 2px solid gray;  " to="comfirmemail">Change password</q-btn>
                </q-item>

                <q-item active clickable v-ripple>
                      <q-btn flat style="color: black;border-bottom: 2px solid gray;width: 170px;" class="q-my-md " to="editinfo">Edit proflie</q-btn>
                  </q-item>

                  <q-item active clickable v-ripple>
                        <q-btn flat style="color: red;width: 170px;" @click="logoutComfirm">sign out</q-btn>
                    </q-item>

            </q-list>
          </q-scroll-area>

          <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
            <div class="absolute-bottom bg-transparent">
              <q-avatar size="56px" class="q-mb-sm">
                <img :src=authenStore.auth.picture.path>
              </q-avatar>
              <div class="text-weight-bold">{{authenStore.auth.username}}</div>
              <div>{{authenStore.auth.rolesText}}</div>
            </div>
          </q-img>
        </q-drawer>
          </div>
          </q-toolbar>
      </q-header>
      </div>

<!---------------------------------------------------------------------   -------------------------------------------------------------->

      <div v-else-if="authenStore.auth.rolesText == 'User'">
      <q-header  class="bg-black text-white" style="position: fixed;height: 70px;">
        <q-toolbar class="row items-start justify-between">
          <img src="../assets/udvc-logo.png" style="width: 150px;height: 150px;" class="q-mr-xl col-gt-sm-1">
          <div class="home-admin-notification gt-sm self-start cod-md-6 offset-md-6" style="display: flex;flex-direction: row;padding-top: 30px;font-size: 20px;transform: translateY(-6px);">
            <router-link to="/" class="a q-mx-md">Home</router-link>
            <!-- <p class="q-mr-md">admin</p>
            <q-icon :name="biBellFill" class="icon"></q-icon> -->
          </div>
          <div class="theme-user gt-sm self-start cod-md-6 offset-md-1" style="display: flex;flex-direction: row;padding-top: 25px;font-size: 20px;margin-left: 220px;">
            <q-icon :name="biBrightnessHighFill" class="icon"></q-icon>
            <p class="p q-mx-md text-center">{{authenStore.auth.username}}</p>
            <q-icon :name="biBoxArrowRight" class="icon-out" @click="logoutComfirm"></q-icon>

          <!-------------------------- Dropdown -------------------------------------------->

            <q-btn-dropdown :dropdown-icon="biCaretDownFill" style="transform: translateY(-4px);width: 0px;height: 0;margin-left: 10px;" >
              <q-list>
                <div class="form-user" style="width: 350px;height: 350px;background-color: white;color: black;border-radius:50px;position: relative;">
                  <q-avatar rounded size="100px" font-size="82px" color="black" text-color="white"  class="q-mx-xl" style="border-radius: 10px;position: absolute;"><img :src=authenStore.auth.picture.path></q-avatar>
                  <!-- รูป avater รอ blinding ด้วยวิธีการ :src="" -->
                  <h4 class="nameuser text-weight-medium text-no-wrap">pongsatorn </h4>
                  <p class="p1">{{ authenStore.auth.rolesText }}</p>
                  <q-btn flat style="color: black;width: 80%;font-size: 20px;border-bottom: 2px solid gray;margin-left: 35px;margin-top: 70px;" label="Change password" to="/comfirmemail" />
                  <q-btn flat style="color: black;width: 80%;font-size: 20px;border-bottom: 2px solid gray;margin-left: 35px;" label="edit profile" class="q-my-md" to="/editinfo" />
                  <q-btn flat style="color: red;width: 80%;font-size: 20px;margin-left: 35px;" label="sign out" @click="logoutComfirm"/>
                </div>
              </q-list>
            </q-btn-dropdown>
          </div>

          <!-- ----------------------------------------------- if low --------------------------------------------->
          <div class="self-start q-pt-lg ">
              <q-btn flat @click="drawer = !drawer" round dense icon="menu" class="lt-md"/>
               <q-drawer
            v-model="drawer"
            :width="205"
            :breakpoint="600"
            overlay
            bordered
          >
            <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
              <q-list padding>

                <q-item active clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon name="inbox" />
                  </q-item-section>
                  <q-item-section>
                    Home
                  </q-item-section>
                </q-item>

                <q-item active clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon name="star" />
                  </q-item-section>

                  <q-item-section>
                    Add
                  </q-item-section>
                </q-item>

                <q-item active clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon name="send" />
                  </q-item-section>

                  <q-item-section>
                    Block
                  </q-item-section>
                </q-item>

                <q-item active clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon name="drafts" />
                  </q-item-section>

                  <q-item-section>
                    Notification
                  </q-item-section>
                </q-item>

                <q-item active clickable v-ripple>
                      <q-btn flat style="color: black;border-bottom: 2px solid gray;  " to="comfirmemail">Change password</q-btn>
                  </q-item>

                  <q-item active clickable v-ripple>
                        <q-btn flat style="color: black;border-bottom: 2px solid gray;width: 170px;" class="q-my-md " to="editinfo">Edit proflie</q-btn>
                    </q-item>

                    <q-item active clickable v-ripple>
                          <q-btn flat style="color: red;width: 170px;" @click="logoutComfirm">sign out</q-btn>
                      </q-item>

              </q-list>
            </q-scroll-area>

            <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
              <div class="absolute-bottom bg-transparent">
                <q-avatar size="56px" class="q-mb-sm">
                  <img :src=authenStore.auth.picture.path>
                </q-avatar>
                <div class="text-weight-bold">{{ authenStore.auth.username }}</div>
                <div>{{ authenStore.auth.rolesText }}</div>
              </div>
            </q-img>
          </q-drawer>
            </div>
          </q-toolbar>
        </q-header>
        </div>

<!---------------------------------------------------------------------   -------------------------------------------------------------->

        <div v-else>
        <q-header  class="bg-black text-white" style="position: fixed;height: 70px;">
          <q-toolbar class="row items-start justify-between">
            <img src="../assets/udvc-logo.png" style="width: 150px;height: 150px;" class="q-mr-xl col-gt-sm-1">
            <div class="home-admin-notification gt-sm self-start cod-md-6 offset-md-6" style="display: flex;flex-direction: row;padding-top: 30px;font-size: 20px;">
              <router-link to="/" class="a q-mx-md">Home</router-link>
              <!-- <p class="q-mr-md">admin</p>
              <q-icon :name="biBellFill" class="icon"></q-icon> -->
            </div>
            <div class="theme-user gt-sm self-start cod-md-6 offset-md-2" style="display: flex;flex-direction: row;padding-top: 25px;font-size: 20px;">
              <q-icon :name="biBrightnessHighFill" class="icon"></q-icon>
              <p class="p q-mx-md text-center">guest</p>
              <!-- <q-icon :name="biBoxArrowRight" class="icon"></q-icon> -->

          <!-------------------------- Dropdown -------------------------------------------->

              <q-btn-dropdown :dropdown-icon="biCaretDownFill" style="transform: translateY(-4px);width: 0px;height: 0;margin-left: 10px;margin-right: 205px;" >
                <q-list>
                  <div class="form-user" style="width: 350px;height: 300px;background-color: white;color: black;position: relative;">
                    <q-avatar rounded size="100px" font-size="82px" color="black" text-color="white"  class="q-mx-xl" style="border-radius: 10px;position: absolute;"><img src="https://cdn-icons-png.flaticon.com/512/3088/3088765.png"></q-avatar>
                    <!-- รูป avater รอ blinding ด้วยวิธีการ :src="" -->
                    <h4 class="nameuser text-weight-medium">guest</h4>
                    <p class="p1">guest</p>
                    <!-- <q-btn flat style="color: black;width: 80%;font-size: 20px;border-bottom: 2px solid gray;margin-left: 35px;margin-top: 70px;" label="Change password" /> -->
                    <q-btn flat style="color: green;width: 80%;font-size: 20px;border-bottom: 2px solid gray;margin-left: 35px;margin-top: 70px;" label="Sign in" class="q-my-md" @click="signin"/>
                    <q-btn flat style="color: blue;width: 80%;font-size: 20px;margin-left: 35px;" @click="signup" label="Sign up" />
                  </div>
                </q-list>
              </q-btn-dropdown>
            </div>
            <!-- ----------------------------------------------- if low --------------------------------------------->
            <div class="self-start q-pt-lg ">
              <q-btn flat @click="drawer = !drawer" round dense icon="menu" class="lt-md"/>
               <q-drawer
            v-model="drawer"
            :width="205"
            :breakpoint="600"
            overlay
            bordered
          >
            <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
              <q-list padding>

                <q-item active clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon name="inbox" />
                  </q-item-section>
                  <q-item-section>
                    Home
                  </q-item-section>
                </q-item>

                <q-item clickable v-ripple>
                      <q-btn flat style="color: green;width: 170px;border-bottom: 2px solid gray;" class="q-mt-md" @click="signin">sign in</q-btn>
                  </q-item>

                  <q-item clickable v-ripple>
                        <q-btn flat style="color: blue;width: 170px;" @click="signup">sign up</q-btn>
                    </q-item>

              </q-list>
            </q-scroll-area>

            <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
              <div class="absolute-bottom bg-transparent">
                <q-avatar size="56px" class="q-mb-sm">
                  <img :src=authenStore.auth.picture.path>
                </q-avatar>
                <div class="text-weight-bold">{{ authenStore.auth.username }}</div>
                <div>{{ authenStore.auth.rolesText }}</div>
              </div>
            </q-img>
          </q-drawer>
            </div>
            </q-toolbar>
          </q-header>
          </div>
          <!-- <q-icon :name="biCaretDownFill" class="icon q-mx-md"></q-icon> -->
          <!-- <div v-else-if="stana === 'user'" style="display: flex;align-items: center;margin-top: 3px;"></div> -->

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { biBellFill,biBrightnessHighFill,biBoxArrowRight,biCaretDownFill,biPerson } from '@quasar/extras/bootstrap-icons';
import { ref } from 'vue';
import { useRouter } from "vue-router";
import { useAuthenStore } from "src/stores/authen";
import { AuthenApi } from "src/api/AuthenApi";
import { useQuasar } from "quasar";
const $q = useQuasar();
const { userLogout } = AuthenApi();
const authenStore = useAuthenStore();
const router = useRouter();
const drawer = ref(false)

console.log("MainLayout > user auth data", authenStore.auth);


const logoutComfirm = async () => {
  $q.dialog({
    title: "Yearbook",
    message: "Do you want to logout?",
    cancel: true,
    ok: {
      label: "okey",
      flat: true,
      outline: true,
      color: "positive",
    },
    cancel: {
      label: "cancel",
      flat: true,
      color: "negative"
    },
  })
    .onOk(() => {
      console.log("OK");
      logoutProcess();
    })
    .onCancel(() => {
      console.log("cancel")
    });
};
const logoutProcess = async () => {
  const respone = await userLogout();
  console.log("userLogout", respone);
  if (respone && respone.status) {
    authenStore.logout();
    $q.notify({
      message: "ออกไปได้แล้วโง้ย",
    });

    setTimeout(() => {
      authenStore.logout();
      window.location.replace("/")
    }, 500)
  }
}



// const status = () => {
//   // เป็นการเช็คสเตตัสว่าเป็น user guest หรือ admin
//   stana.value = ref("user");
//   return

// };

const signin = () => {
  router.push("/signin/")
}

const signup = () => {
  router.push("/signin/register")
}

const tofrom = (to) => {
  if (to === 'add') {
    router.push("/confirm/addadmin");
  }
  else {
    router.push("/confirm/blockuser");
  }
}
// const out = () => {
//   stana.value = "";
//   return{
//     stana
//   }
// }

const alerta = (nu) => {
  router.push(nu)
}

</script>

<style scoped>

.icon,
.icon-out{
  margin-top: 4px;
}

.icon-out:hover{
  cursor: pointer;
}
.nameuser{
  margin-left: 180px;
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 25px;
}

.p1{
  margin-left: 182px;
  margin-top: -40px;
  font-size: 20px;
  color: red;

}

.a{
  text-decoration: none;
  color: white;
}

.a:hover{
  transform: scale(1.05);
}

.admin:hover{
  cursor: pointer;
  transform: scale(1.05);
}

.p{
  width: 120px;
  overflow: hidden;
  display: inline;
  text-overflow: ellipsis;
}

</style>
