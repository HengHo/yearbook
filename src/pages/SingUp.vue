<template>
  <q-layout view="hHh Lpr lFf">
    <q-page-container class="bg-light-page">
      <q-page padding class="row items-center justify-center">
        <div class="row full-width">
          <div class="col-md-8 offset-md-2 col-xs-12 q-pl-md q-pr-md q-pt-sm">
            <div v-if="action === 'signUp'" class="q-pa-md gt-xs">
              <q-stepper
                v-model="step"
                ref="stepper"
                alternative-labels
                active-color="secondary"
                done-color="accent"
                animated
              >
                <q-step
                  :name="1"
                  title="Select campaign settings"
                  icon="settings"
                  :done="step > 1"
                >
                  <q-card flat class="bg-white text-black">
                    <div class="row">
                      <div class="col-md-6 col-xs-12 q-pa-md">
                        <q-img
                          placeholder-src="../assets/รวมปก.png"
                          src="../assets/รวมปก.png"
                          spinner-color="white"
                        ></q-img>
                      </div>
                      <div class="col-md-6 col-xs-12 col-sm-12">
                        <div class="q-pa-md">
                          <div
                            class="text-h5 q-pb-md text-secondary text-center text-weight-bolder"
                          >
                            Yearbooks
                          </div>
                          <q-form
                            @submit="onSubmit"
                            @reset="onReset"
                            class="q-gutter-md"
                          >
                            <q-input
                              filled
                              v-model="user"
                              label="Username"
                              lazy-rules
                              :rules="[
                                (val) =>
                                  (val && val.length > 0) ||
                                  'Please type Username',
                              ]"
                            />
                            <q-input
                              filled
                              v-model="user"
                              label="Username"
                              lazy-rules
                              :rules="[
                                (val) =>
                                  (val && val.length > 0) ||
                                  'Please type Username',
                              ]"
                            />
                            <q-input
                              filled
                              v-model="user"
                              label="Username"
                              lazy-rules
                              :rules="[
                                (val) =>
                                  (val && val.length > 0) ||
                                  'Please type Username',
                              ]"
                            />
                            <q-input
                              filled
                              type="password"
                              v-model="password"
                              label="Password"
                              lazy-rules
                              :rules="[
                                (val) =>
                                  (val !== null && val !== '') ||
                                  'Please type your password',
                                (val) =>
                                  (val && val.length > 7) ||
                                  'Please >8เดี๋ยวไปใส่i18n',
                              ]"
                            />
                            <!-- <div>
                        <q-btn label="Login" type="submit" color="secondary" />
                        <q-btn
                          label="Reset"
                          type="reset"
                          color="secondary"
                          flat
                          class="q-ml-sm"
                        />
                      </div> -->
                          </q-form>
                        </div>
                      </div>
                    </div>
                  </q-card>
                </q-step>

                <q-step
                  :name="2"
                  title="Create an ad group"
                  caption="Optional"
                  icon="create_new_folder"
                  :done="step > 2"
                >
                  <div class="col-md-6 col-xs-12">
                    <div class="q-pa-md">
                      <div
                        class="text-h5 q-pb-md text-secondary text-center text-weight-bolder"
                      >
                        Yearbooks
                      </div>
                      <q-form
                        @submit="onSubmit"
                        @reset="onReset"
                        class="q-gutter-md"
                      >
                        <q-input
                          filled
                          v-model="user"
                          label="Username"
                          lazy-rules
                          :rules="[
                            (val) =>
                              (val && val.length > 0) || 'Please type Username',
                          ]"
                        />
                        <q-input
                          filled
                          type="password"
                          v-model="password"
                          label="Password"
                          lazy-rules
                          :rules="[
                            (val) =>
                              (val !== null && val !== '') ||
                              'Please type your password',
                            (val) =>
                              (val && val.length > 7) ||
                              'Please >8เดี๋ยวไปใส่i18n',
                          ]"
                        />
                        <div>
                          <q-btn
                            label="Login"
                            type="submit"
                            color="secondary"
                          />
                          <q-btn
                            label="Reset"
                            type="reset"
                            color="secondary"
                            flat
                            class="q-ml-sm"
                          />
                        </div>
                      </q-form>
                    </div>
                  </div>
                </q-step>

                <q-step :name="3" title="Create an ad" icon="add_comment">
                  ยินดีต้อนรับเดี๋ยวไปทำแปลภาษา
                </q-step>

                <template v-slot:navigation>
                  <q-stepper-navigation>
                    <q-btn
                      @click="$refs.stepper.next()"
                      color="secondary"
                      :label="step === 3 ? 'Finish' : 'Continue'"
                    />
                    <q-btn
                      v-if="step > 1"
                      flat
                      color="secondary"
                      @click="$refs.stepper.previous()"
                      label="Back"
                      class="q-ml-sm"
                    />
                  </q-stepper-navigation>
                </template>
              </q-stepper>
            </div>

            <!-- ------------------------------------SIGN-IN----------------------------------------------- -->
            <q-card
              v-if="action == 'signin'"
              flat
              class="bg-white text-black"
            >
              <div class="row">
                <div class="col-md-6 col-xs-12 q-pa-md">
                  <q-img
                    placeholder-src="../assets/รวมปก.png"
                    src="../assets/รวมปก.png"
                    spinner-color="white"
                  ></q-img>
                </div>
                <div class="col-md-6 col-xs-12">
                  <div class="q-pa-md">
                    <div
                      class="text-h5 q-pb-md text-secondary text-center text-weight-bolder"
                    >
                      Yearbooks
                    </div>
                    <q-form
                      @submit="onSubmit"
                      @reset="onReset"
                      class="q-gutter-md"
                    >
                      <q-input
                        filled
                        v-model="user"
                        label="Username"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val && val.length > 0) || 'Please type Username',
                        ]"
                      />
                      <q-input
                        filled
                        type="password"
                        v-model="password"
                        label="Password"
                        lazy-rules
                        :rules="[
                          (val) =>
                            (val !== null && val !== '') ||
                            'Please type your password',
                          (val) =>
                            (val && val.length > 7) ||
                            'Please >8เดี๋ยวไปใส่i18n',
                        ]"
                      />
                      <div>
                        <q-btn label="Login" type="submit" color="secondary" />
                        <q-btn
                          label="Reset"
                          type="reset"
                          color="secondary"
                          flat
                          class="q-ml-sm"
                        />
                      </div>
                    </q-form>
                  </div>
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup>
import { useRouter, useRoute } from "vue-router";
import { useQuasar } from "quasar";
import { ref, onMounted } from "vue";
import { AuthenApi } from "src/api/AuthenApi";
import { useAuthenStore } from "src/stores/authen";

const authenStore = useAuthenStore();
const { loginProcess } = AuthenApi();
const router = useRouter();
const $q = useQuasar();
const user = ref("");
const password = ref("");
const route = useRoute();
const action = ref();
const step = ref(1);
onMounted(async () => {
  if (route.params.action) {
    action.value = route.params.action;
    console.log("action", action.value);
  }
});
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
    }, 500);
  } else if (respone && respone.message) {
    $q.notify({
      message: "เข้าสู่ระบบไม่สำเร็จ",
    });
  }
};

const onReset = () => {
  (user.value = null), (password.value = null);
};
</script>
