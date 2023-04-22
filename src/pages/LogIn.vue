<template>
  <q-page>
  <div class="from-box-login">
    <q-form style="width: 480px;display: flex;flex-direction: column;align-items: center;height: 100vh;" @submit="onSubmit">
      <!-- <ErrorAlert :error-msg="authError" @clearError="clearError"/> -->
      <!-- Form ไว้ submit ข้อมูลเช็ค DB ด้วย post -->
                <p class="text-h1 q-mt-xl text-weight-bold">Sign in</p>
                <q-icon :name="biPersonCircle"  size="200px" class="q-mt-md"/>
                <q-input rounded outlined v-model="user" label="Email" type="text" bg-color="grey" color="black" class="q-my-md" dense style="width: 250px;" :rules="[(val) => !!val || 'Email is required']"/>
                <q-input rounded outlined  v-model="password" type="password" label="Password" bg-color="grey" color="black" class="" dense style="width: 250px;" :rules="[(val) => !!val || 'Password is required']"/>
                <router-link to="/comfirmemail" class="forget q-my-xs text-weight-bold">Forget Password</router-link>
                <!--goto ComfirmEmail page-->
                <q-btn push color="primary" label="Login" type="submit" style="width: 150px;margin-top: 30px;"/>
                <!-- นำข้อมูลไปเทียบใน DB -->

                <div class="absolute-bottom-right q-mb-md q-mr-sm" style="font-size: 20px;">
                <p style="display: inline;font-size:;">Don't have an account?</p><router-link to="/signin/register" class="link-signup q-ml-sm">Sign up!</router-link>
                </div>
    </q-form>
    </div>
    </q-page>
</template>

<script setup>
import { biPersonCircle } from '@quasar/extras/bootstrap-icons';
import { useRouter } from "vue-router";
import { useQuasar } from 'quasar';
import { ref } from 'vue';    
import { AuthenApi } from 'src/api/AuthenApi';
import { useAuthenStore } from 'src/stores/authen';
import ComfirmEmail from './ComfirmEmail.vue';

const authenStore = useAuthenStore();
const { loginProcess } = AuthenApi();
const router = useRouter();
const $q = useQuasar();

const user = ref("")
const password = ref("")

// const user = user_rdch();
const onSubmit = async () => {
  const respone = await loginProcess({
    _u: user.value,
    _p: password.value,
  });
  console.log("loginProcess", respone);

  if (respone && respone.userData && respone.userData.apiKey) {
    authenStore.setAuthen(respone.userData);
    $q.notify({
      message: respone.userData.email,
      avatar: respone.userData.picture.path,
    });
    setTimeout(() => {
      window.location.replace("/");
    }, 500)
  } else if(respone && respone.message){
    $q.notify({
      message: "เข้าสู่ระบบไม่สำเร็จ",
    });
  }
};



</script>

<style scoped>
.forget{
  color: blue;
  text-decoration: none;
}

.forget:hover{
  color: aqua;
}
.link-signup{
  text-decoration: none;
  color: blue;
  cursor: pointer;
}
.link-signup:hover{
color: red;
}

</style>