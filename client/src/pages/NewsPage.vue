<template>
    <div class="news">
        <div class="news__container">
            <div class="news__title">Новости {{ userRescom }}!</div>
            <div class="news__subtitle">Здесь мы публикуем все новости {{ userRescom }}, а так же важную и актуальную информацию!</div>
            <ul class="news__list">
                <li class="news__el" :key="news._id" v-for="news in rescomNews"><PostNews :title="news.title" :description="news.description" :phoneNumber="news.phone_number"/></li>
            </ul>
        </div>
    </div>
</template>
  
<script setup>
import PostNews from '@components/UI/PostNews.vue'
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
import axios from 'axios';
const router = useRouter()

let user = {}

onMounted(async function() {
        const response = await axios.get('http://localhost:3010/api/user/', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        })
        if(response.data.success !== undefined) {
            router.push({name: 'Login'})
        }
        user = response.data
        const newsData = await axios.get(`http://localhost:3010/api/rescom/news/${user.rescom_id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        })
        const rescom = await axios.get(`http://localhost:3010/api/rescom/rescom/${user.rescom_id}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        userRescom.value = rescom.data.name
        console.log(newsData)
        rescomNews.value = newsData.data.news
})

const userRescom = ref('')
const rescomNews = ref([])

</script>
  
<style lang="scss" scoped>
.news{
        &__container{
            font-family: 'Open Sans', sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        &__title{
            margin-top: .5em;
            font-weight: 700;
            font-size: 70px;
            color: #4a47ff;
            line-height: 1.2;
            margin-bottom: .5em;
            text-align: center;
        }
        &__subtitle{
            width: 700px;
            font-weight: 500;
            font-size: 30px;
            color: #000000;
            line-height: 1.2;
            margin-bottom: .5em;
            text-align: center;
        }
        &__list {
            display: flex;
            flex-direction: column;
            gap: 2em;
            margin: 0 0 4em 0;
        }
    }
</style>