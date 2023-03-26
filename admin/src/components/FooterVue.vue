<template>
<footer class="footer-distributed">


    <div class="footer-left">

        <p class="footer-links">
            <RouterLink style="color: #000" :to="{name: 'Home'}" class="link-1">Домой</RouterLink>
            <!-- <template v-if="isAuth">
              <RouterLink style="color: #000" :to="{name: 'Services'}" >Контакты услуг</RouterLink>
              <RouterLink style="color: #000" :to="{name: 'Proposal'}" >Отправить заявку</RouterLink>
              <RouterLink style="color: #000" :to="{name: 'News'}" >Лента новостей</RouterLink>
            </template> -->
            <RouterLink  style="color: #000" :to="{name: 'News'}">Сделать объявление</RouterLink>
            <RouterLink  style="color: #000" :to="{name: 'Statistics'}">Заявки</RouterLink>
        </p>

        <p>Serve Corp. &copy; 2023</p>
    </div>
    <div class="footer-right">

        <a href="https://www.instagram.com/askattrionis/" target="_blank"><img src="../img/icons/media.png" class="media"></a>
        <a href="https://www.instagram.com/s0mebodhi/" target="_blank"><img src="../img/icons/media.png" class="media"></a>
        <a href="https://www.instagram.com/alphacen7auri/" target="_blank"><img src="../img/icons/media.png" class="media"></a>
        <a href="https://www.instagram.com/dzhdknv/" target="_blank"><img src="../img/icons/media.png" class="media"></a>

    </div>
</footer>
</template>

<script setup>
import axios from 'axios';
import { onMounted } from 'vue';
import { ref } from 'vue';
const isAuth = ref(false)

// onMounted(async function() {
//         const response = await axios.get('http://localhost:3010/api/user/', {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer ' + localStorage.getItem('token'),
//             }
//         })
//         if(!(response.data.success !== undefined)) {
//             isAuth.value = true
//         }
        
// })

</script>

<style lang="scss" scoped>

.media {
    height: 20px;
    width: 20px;
}
.footer-distributed {
  background-color: #fff;
  filter: drop-shadow(0em -.2em .2em rgba(0, 0, 0, 0.33));
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font: normal 16px sans-serif;
  padding: 45px 50px;
  z-index: 9999;
  display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer-distributed .footer-left p {
  color: #8f9296;
  font-size: 14px;
  margin: 0;
}
/* Footer links */

.footer-distributed p.footer-links {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin: 0 0 10px;
  padding: 0;
  transition: .4s;
}

.footer-distributed p.footer-links  {
  display: inline-block;
  line-height: 1.8;
  text-decoration: none;
  color: inherit;
  transition: ease .25s;
}

.footer-distributed .footer-links a:before {
  content: "·";
  font-size: 20px;
  left: 0;
  color: #fff;
  display: inline-block;
  padding-right: 5px;
}

.footer-distributed .footer-links .link-1:before {
  content: none;
}

.footer-distributed .footer-right {
    display: flex;
  float: right;
  margin-top: 6px;
  max-width: 180px;
}

.footer-distributed .footer-right a {
display: flex;
justify-content: center; 
align-items: center;   
  width: 35px;
  height: 35px;
  background-color: #33383b;
  border-radius: 2px;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  line-height: 35px;
  margin-left: 3px;
  transition:all .25s;
}

.footer-distributed .footer-right a:hover{transform:scale(1.1); -webkit-transform:scale(1.1);}

.footer-distributed p.footer-links a:hover{
    color: #4a47ff;
    transition: .4s;
}

/* Media Queries */

@media (max-width: 600px) {
  .footer-distributed .footer-left, .footer-distributed .footer-right {
    text-align: center;
  }
  .footer-distributed .footer-right {
    float: none;
    margin: 0 auto 20px;
  }
  .footer-distributed .footer-left p.footer-links {
    line-height: 1.8;
  }
}
</style>