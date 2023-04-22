<template>
  <q-page>
  <div class="from-box-register" >
    <q-form style="width: 480px;display: flex;flex-direction: column;align-items: center;height: 100vh;" @submit.prevent="Saveinfo">
      <!-- Form ไว้ submit ข้อมูลส่ง DB ด้วย post -->
      <!-- <ul class="alert alert-warning" v-if="Object.keys(this.errorList).length > 0">
      <li class="mb-0 ms-3" v-for="(error, index) in this.errorList" :key="index">
        {{ error[0] }}
      </li>
    </ul> -->
                  <p class="text-h1 q-mt-xl text-weight-bold">Sign up</p>
                  <q-icon :name="biPersonCircle"  size="200px" class="q-mt-md"/>
                  <q-input rounded outlined type="text" v-model="model.entity.username" label="Fullname" bg-color="grey" color="black" class="q-mt-md" dense style="width: 250px;" :rules="[(val) => !!val || 'Name is required']"/>
                  <q-input rounded outlined type="text" v-model="model.entity.stucode" label="Student_ID" bg-color="grey" color="black"  dense style="width: 250px;" :rules="[(val) => !!val || 'Std_code is required']"/>
                  <q-input rounded outlined type="Email" v-model="model.entity.email" label="Email" bg-color="grey" color="black"  dense style="width: 250px;" :rules="[(val) => !!val || 'Email is required']"/>
                  <q-input rounded outlined type="text" v-model="model.entity.password" label="Password" bg-color="grey" color="black"  dense style="width: 250px;" :rules="[(val) => !!val || 'Password is required']"/>
                  <!-- <router-link to="/comfirm-email" class="forget q-my-xs">Forget Password</router-link> -->
                  <!--goto ComfirmEmail page-->
                  <q-btn push color="primary" label="Sign up!" type="submit"  style="width: 150px;margin-top: 10px;"/>

                  <div class="absolute-bottom-right q-mb-md q-mr-sm" style="font-size: 20px;">
                  <p style="display: inline;font-size:;">have an account?</p><router-link to="/signin/" class="link-signin q-ml-sm">Sign in!</router-link>
                  </div>
                  </q-form>
                  </div>
  </q-page>
</template>

<script setup>
import { biPersonCircle } from '@quasar/extras/bootstrap-icons';
import { useRouter } from "vue-router";
import { ref } from 'vue';
import { AuthenApi } from 'src/api/AuthenApi';
import { useQuasar } from 'quasar';


const router = useRouter();
const { registerUser } = AuthenApi();
const $q = useQuasar();

// const result = ref([]);
// const std_code = ref('')
// const name = ref('')
// const surname = ref('')
// const birth_date = ref('')
// const image_name = ref('')
// const errorList = '';
const model = ref({
  entity: {
    stucode: '',
    username: '',
    email: '',
    password: '',
  }
});

console.log(model)
const Login = () => {
  router.push("/signin/");
};

const Saveinfo = async () => {
  const dataSent = await registerUser(model.value.entity )
  if (dataSent) {
        $q.notify({
      message: "Register Success",
    });
    setTimeout(() => {
      window.location.replace("/#/signin");
    }, 500)
  }

  // axios.post('http://localhost/php-rest-api/student', model.value.entity)
  //   .then(res => {

  //     console.log(res)
  //     alert(res.data.message);

  //     model.value.entity = {
  //       std_code: '',
  //       name: '',
  //       surname: '',
  //       birth_date: '',
  //       image_name: ''
  //     }
  //   })
  //   .catch(function () {
  //     if (error.response) {

      //   if (error.response.status == 422) {
      //     mythis.errorList.value = error.response.data.errors;
      //   }
      // } else if (error.request) {
      //   console.log(error.request);
      // } else {
      //   console.log('error',error.message)
//       }
//     });
}

// const SignUp = async (result) => {
//   let respone = await signUp({
//     std_code: stu_id.value,
//     name: username.value,
//     surname: email.value,
//     birth_date: email.value
//   });
  
//   console.warn(username.value, stu_id.value, email.value, password.value,)

//   if (respone) {
//     const data = respone.entity;
//     result.value.push(data);
//     username.value = "";
//     stu_id.value = "";
//     email.value = "";
//     password.value = "";
//   }; 
// }
</script>

<style scoped>
.link-signin{
  text-decoration: none;
  color: blue;
  cursor: pointer;
}
.link-signin:hover{
color: red;
}

</style>