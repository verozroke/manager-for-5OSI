<template>
    <div class="news">
        <div class="news__container">
            <div class="news__title">Новости {{ userRescom }}!</div>
            <div class="news__subtitle">Здесь мы публикуем все новости {{ userRescom }}, а так же важную и актуальную информацию!</div>
            <ul class="news__list">
                <li class="news__el" v-for="news in rescomNews"><PostNews :title="news.title" :description="news.description" :phoneNumber="news.phoneNumber"/></li>
            </ul>
        </div>
    </div>
</template>
  
<script setup>
import PostNews from '@components/UI/PostNews.vue'
import { ref } from 'vue';
const userRescom = ref('Атамура')
const rescomNews = [
    {title: 'Сломалась проводка', description: 'Блаблаблаблабла', phoneNumber: '88005553535'},
    {title: 'Артем пидор', description: 'Блаблаблаблабла2', phoneNumber: '88005553535'},
]

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
        }
    }
</style>