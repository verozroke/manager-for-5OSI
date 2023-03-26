<template>
    <div class="hero">
        <div class="hero__overlay">
            <div class="hero__container">
                <div class="hero__title">Добро пожаловать!</div>
                <div class="hero__subtitle">Добро пожаловать на сайт нашей компании, которая предоставляет квартирные услуги высочайшего качества!</div>
                <RouterLink :to="isAuth ?  {name: 'Profile'} : {name: 'Login'}" class="hero__button">Начать</RouterLink >
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted } from 'vue';
import { ref } from 'vue';

const isAuth = ref(false)

onMounted(async function() {
        const response = await axios.get('http://localhost:3010/api/user/', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        })
        if(!(response.data.success !== undefined)) {
            isAuth.value = true
        }
        
})
</script>

<style lang="scss" scoped>
.hero {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
    background-image: url('../img/hero-bg.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    &__container {
        font-family: 'Open Sans', sans-serif;
        height: 100vh;
        width: 100vh;
        display: flex;
        letter-spacing: 1px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
    }
    &__overlay {
        backdrop-filter: blur(3px);
        background-color: rgba($color: #000000, $alpha: 0.5);
    }
    &__title {
        font-weight: 700;
        font-size: 68px;
        line-height: 1.2;
        margin-bottom: .5em;
        text-align: center;
    }
    &__subtitle {
        width: 800px;
        font-weight: 300;
        line-height: 1.2;
        font-size: 34px;
        margin-bottom: 1em;
        text-align: center;
    }
    &__button {
        cursor: pointer;
        font-family: 'Open Sans', sans-serif;
        color: #fff;
        border-radius: .75em;
        border: 2px solid #4a47ff;
        background-color: #4a47ff;
        padding: .75em 1.5em;
        letter-spacing: .5px;
        font-size: 22px;
        font-weight: 700;
        transition: .4s;
        &:hover {
            transition: .4s;
            background-color: #3b38c9;
            border: 2px solid #3b38c9;
        }
    }

}

</style>