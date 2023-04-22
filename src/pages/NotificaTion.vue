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

        <h4 style="height: 0;margin-bottom: -55px;margin-left: 20px;color: white;">การแจ้งเตือน</h4>
        <q-item class="card-admin" v-for="(item, index) in dataList" :key="index">
          <div>
            <q-avatar style="width: 70px;height: 70px;margin-top: 20px;">
              <img :src='item.yearbook.path_img'>
            </q-avatar>
            <q-item-section style="display: inline;margin-left: 18px;font-size: 20px;color: white;">{{ item.userabout.username }} ได้เพิ่มข้อมูลของตนเอง บน {{item.yearbook.class}} {{ item.yearbook.major }}</q-item-section>
            <p style="margin-left: 89px;margin-top: -30px;color: white;">รอการยืนยัน</p>
            <p style="font-size: 10px;margin-left: 90px;color: darkgrey;position: absolute;margin-top: -5px;">{{item.yearbook.created_date}}</p>
          </div>
        </q-item>

        <!-------------------------------------------------------------  ------------------------------------------------------------->

        <!-- <div class="card-admin">
          <div>
            <q-avatar style="width: 70px;height: 70px;margin-top: 20px;">
              <img src="https://cdn.quasar.dev/img/avatar.png">
            </q-avatar>
            <p style="display: inline;margin-left: 18px;font-size: 20px;color: white;">user2  ได้เพิ่มข้อมูลของตนเอง บน ปวส.2/2 สาขาการโรงแรม</p>
            <p style="margin-left: 89px;margin-top: -30px;color: white;">รอการยืนยัน</p>
            <p style="font-size: 10px;margin-left: 90px;color: darkgrey;position: absolute;margin-top: -5px;">6/3/66 เวลา 10.31</p>
          </div>
        </div> -->

        <!--------------------------------------------------------  ------------------------------------------------------------------>

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

const item = ref([
  {
    id: "",
    created_by: "",
    yearbook_id: "",
    userabout: {
      id: "",
      stucode: null,
      username: "",
      email: "",
      image: null,
      picture: {
        path: "",
        x: "",
        xx: "",
        xxx: ""
      },
      userRoles: [
        ""
      ],
    },
    yearbook: {
      id: "",
      path_img: "",
      class: "",
      major: "",
      created_by: "",
      created_date: "",
      year_yearbook: ""
    }
  },
]);


const dataList = ref([
  {
    id: 9,
    created_by: "14",
    yearbook_id: "5",
    userabout: {
      id: 14,
      stucode: null,
      username: "admin12345",
      email: "1@1.com",
      image: null,
      picture: {
        path: "http://localhost/test01/data/img/default.jpg",
        x: "http://localhost/test01/data/img/default_x.jpg",
        xx: "http://localhost/test01/data/img/default_xx.jpg",
        xxx: "http://localhost/test01/data/img/default_xxx.jpg"
      },
      userRoles: [
        "1"
      ],
    },
    yearbook: {
      id: 7,
      path_img: "https://thumbs.dreamstime.com/b/admin-sign-laptop-icon-stock-vector-166205404.jpg",
      class: "ปวส.2/1",
      major: "Accounting",
      created_by: "3",
      created_date: "2023-03-14 03:40:59",
      year_yearbook: "2015"
    }
  },
  {
    id: 10,
    created_by: "14",
    yearbook_id: "5",
    userabout: {
      id: 14,
      stucode: null,
      username: "ninja",
      email: "1@1.com",
      image: null,
      picture: {
        path: "http://localhost/test01/data/img/default.jpg",
        x: "http://localhost/test01/data/img/default_x.jpg",
        xx: "http://localhost/test01/data/img/default_xx.jpg",
        xxx: "http://localhost/test01/data/img/default_xxx.jpg"
      },
      userRoles: [
        "1"
      ],
    },
    yearbook: {
      id: 8,
      path_img: "https://scontent.xx.fbcdn.net/v/t39.30808-6/321435748_559625962676207_2927067257312365897_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFbgFkxZeH0jjt70OlZa4Wj7Ypy71UFjZntinLvVQWNmao4twUIjtT9PxYatgB4FolNfDZw2YXQMlbyV8kJqPTG&_nc_ohc=QUZ6SOWvZmsAX-FNgf_&_nc_ht=scontent.fbkk5-7.fna&oh=00_AfAnSzJKpjsZwP94EU3pJHrloU-JmIfL3yu-MmKPmGtnIg&oe=6421E4F9&_nc_fr=fbkk5c07",
      class: "ปวส.1/2",
      major: "IT",
      created_by: "3",
      created_date: "2023-11-14 03:40:59",
      year_yearbook: "2015"
    },
  },
    {
    id: 11,
    created_by: "14",
    yearbook_id: "5",
    userabout: {
      id: 14,
      stucode: null,
      username: "Pymmie",
      email: "1@1.com",
      image: null,
      picture: {
        path: "http://localhost/test01/data/img/default.jpg",
        x: "http://localhost/test01/data/img/default_x.jpg",
        xx: "http://localhost/test01/data/img/default_xx.jpg",
        xxx: "http://localhost/test01/data/img/default_xxx.jpg"
      },
      userRoles: [
        "1"
      ],
    },
    yearbook: {
      id: 9,
      path_img: "https://scontent.xx.fbcdn.net/v/t39.30808-6/337233971_892117511885251_327646470754353990_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEXP8AKk4Gqek9MmBUSuJOhDr2kT2mTPLsOvaRPaZM8u_g_UvuvE4fqnJpamA_qNZsJ9dj02oYZNAWu4UfhN9rH&_nc_ohc=hxzThnrNzz0AX_2mL_8&_nc_ht=scontent.fbkk5-7.fna&oh=00_AfD0hBSYBrTSS7wpkyF4QRhs8gitdwgd2NtRH6eANnZtSg&oe=642324A3&_nc_fr=fbkk5c07",
      class: "ปวส.1/2",
      major: "IT",
      created_by: "3",
      created_date: "2023-11-14 03:40:59",
      year_yearbook: "2015"
    },
  },
]);

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
  padding: 0px 0px 10px 10px;
  border-radius: 30px;
  background-color: rgb(83, 83, 83);
  margin-bottom: -95px;
}
.card-admin:hover{
  background-color: rgb(96, 96, 96);
  border: 2px solid rgb(96, 96, 96);
  cursor: pointer;
}
</style>