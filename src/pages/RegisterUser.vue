<template>
    <q-layout view="hHh Lpr lFf">
      <q-page-container class="bg-light-page">
        <q-page padding class="row items-center justify-center">
          <div class="row full-width">
            <div class="col-md-8 offset-md-2 col-xs-12 q-pl-md q-pr-md q-pt-sm">
              <q-card flat class="bg-white text-black">
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
                        class="text-h5 q-pb-md text-secondary text-center text-weight-bolder "
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
                          v-model="name"
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
                              (val > 0 && val < 100) || 'Please type a real age',
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
  <script>
  export default {
    data() {
      return {
        name: null,
        password: null,
      };
    },
    methods: {
      onSubmit() {
        console.log("click submit");
      },
      onReset() {
        this.name = null;
        this.password = null;
      },
    },
  };
  </script>