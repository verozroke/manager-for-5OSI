<script setup>
import HeaderVue from '@components/HeaderVue.vue'
import FooterVue from './components/FooterVue.vue';
import BotMessageIcon from './components/UI/BotMessageIcon.vue';

</script>

<template>
    <!-- Завертсать -->
    <div class="wrapper">
        <BotMessageIcon/>
        <HeaderVue/>
        <div class="main">
            <RouterView v-slot="{ Component }">
                <transition name="route" mode="out-in">
                    <component :is="Component"></component>
                </transition>
            </RouterView>
        </div>
        <FooterVue/>
    </div>
</template>

<style lang="scss">

.main {
    flex: 1 1 auto;;
}

.wrapper {
    display: flex;
    flex-direction: column;
    overflow: clip;
    min-height: 100vh;
    background-color: #fff;
}

[class*="__container"] {
    max-width: 1200px;
    margin: 0 auto;
    font-family: 'Noto Sans', sans-serif;
    font-size: 16px;
    color: #000;
    font-weight: 400;
    font-style: normal;   
}


.route {
    &-enter-from {
        opacity: 0;
        transform: translateX(100px);
    }
    &-enter-active {
        transition: all .3s ease-out
    }
    &-leave-to {
        opacity: 0;
        transform: translateX(-100px);
    }
    &-leave-active {
        transition: all .3s ease-in;
    }
}
</style>
