<template>
  <q-page>
    <div class="bg">
      <div class="from">
        <center><q-input dark standout v-model="text" input-class="text-right" class="q-ml-md" bg-color="white"
            style="width: 600px;">
            <template v-slot:append>
              <q-icon v-if="text === ''" name="search" color="black" />
              <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
            </template>
          </q-input></center>

        <!---------------------------------------------------- -------------------------------------------------------->

        <div class="card-admin">
          <div>
            <q-avatar style="width: 70px;height: 70px;margin-top: 20px;">
              <img src="https://cdn.quasar.dev/img/avatar.png">
            </q-avatar>
            <p style="display: inline;margin-left: 18px;font-size: 20px;">นาย user1</p>
            <p style="margin-left: 89px;margin-top: -30px;">รหัส 65300000001</p>
          </div>
          <div>
            <q-btn v-if="show" label="BLOCK" rounded color="red" style="height: 120px;" @click="show = false" />
            <q-btn v-else label="UNBLOCk" rounded style="height: 120px;background-color: rgb(171, 171, 171);color: white;" @click="show = true" />
          </div>
        </div>

        <!-------------------------------------------------------------  ------------------------------------------------------------->

        <div class="card-admin">
          <div>
            <q-avatar style="width: 70px;height: 70px;margin-top: 20px;">
              <img src="https://cdn.quasar.dev/img/avatar.png">
            </q-avatar>
            <p style="display: inline;margin-left: 18px;font-size: 20px;">นาย user2</p>
            <p style="margin-left: 89px;margin-top: -30px;">รหัส 653000000002</p>
          </div>
          <div>
            <q-btn v-if="show1" label="BLOCK" rounded color="red" style="height: 120px;" @click="show1 = false" />
            <q-btn v-else label="UNBLOCK" rounded  style="height: 120px;background-color: rgb(171, 171, 171);color: white;" @click="show1 = true" />
          </div>
        </div>

        <!--------------------------------------------------------  ------------------------------------------------------------------>

        <div class="card-admin">
            <div>
              <q-avatar style="width: 70px;height: 70px;margin-top: 20px;">
                <img src="https://cdn.quasar.dev/img/avatar.png">
              </q-avatar>
              <p style="display: inline;margin-left: 18px;font-size: 20px;">นาย user3</p>
              <p style="margin-left: 89px;margin-top: -30px;">รหัส 653000000003</p>
            </div>
            <div>
              <q-btn v-if="show2" label="BLOCK" rounded color="red" style="height: 120px;" @click="show2 = false" />
              <q-btn v-else label="UNBLOCK" rounded  style="height: 120px;background-color: rgb(171, 171, 171);color: white;" @click="show2 = true" />
            </div>
          </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const text = ref('')
const show = ref('ture')
const show1 = ref('ture')
const show2 = ref('ture')


</script>

<style scoped>
.bg {
  display: flex;
  justify-content: center;
  width: 100vw;
  background-color: rgb(46, 46, 46);
  overflow: hidden;
}

.from {
  width: 1000px;
  height: 600px;
  margin-top: 100px;
  background-color: gray;
  border-radius: 40px;
  padding: 20px 20px 20px 20px;
  transform: translateY(30px);
}

.card-admin {
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 2px solid rgb(72, 72, 72);
  padding: 0px 0px 0px 10px;
  border-radius: 30px;
  background-color: rgb(83, 83, 83);
  margin-bottom: -95px;
}
</style>