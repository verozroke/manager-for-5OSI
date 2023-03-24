<template>
    <div class="hero">
        <div class="hero__overlay">
            <div class="hero__container">
                <div class="hero__title">Добро пожаловать!</div>
                <div class="hero__subtitle">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium est, enim explicabo dolorem obcaecati vel voluptate. Quia impedit architecto facilis.</div>
                <UIButton>
                    Начать
                </UIButton>
            </div>
        </div>
    </div>
</template>

<script setup>
import UIButton from '../components/UI/UIButton.vue';


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
        height: 41em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    &__overlay {
        backdrop-filter: blur(3px);
        background-color: rgba($color: #000000, $alpha: 0.3);
    }

}

</style>