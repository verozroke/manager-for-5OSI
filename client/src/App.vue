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
    font-family: 'Open Sans', sans-serif;
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

body {
	overflow: overlay;
}


::-webkit-scrollbar {
	width: 13px;
	
	background-color: transparent;
	&-track {
		background-color: transparent;
		margin-block: .5em;
	}
	&-thumb {
		background-color: rgba(47, 47, 47, 0.836);
		border-radius: 100vw;
		transition: .4s;
		border: 4px solid rgba(0, 0, 0, 0);
		background-clip: padding-box;
		&:hover {
			background-color: rgb(28, 28, 28);
			transition: .4s;
		}
	}
	
}
</style>
