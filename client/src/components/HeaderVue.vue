<template>
    <div class="header">
        <div class="header__container">
            <RouterLink :to="{name: 'Home'}" class="header__logo-box">
                <div class="header__logo">
                    <img src="@img/icons/logo.png" alt="Logo">
                </div>
                <div class="header__logo-title">Serve</div>
            </RouterLink>
            <ul class="header__nav">
                <RouterLink :to="{name: 'Home'}">
                    <li class="header__link">Домой</li>
                </RouterLink>
                <!-- <RouterLink :to="{name: 'Rent'}">
                    <li class="header__link">Моя кварплата</li>
                </RouterLink> -->
                <RouterLink :to="{name: 'Services'}">
                    <li class="header__link">Контакты услуг</li>
                </RouterLink>
                <RouterLink :to="{name: 'Proposal'}">
                    <li class="header__link">Сделать заявку</li>
                </RouterLink>
            </ul>
            <!-- <button class="header__button">Войти</button> -->
            <UIButton link="Home">Войти</UIButton>
        </div>
    </div>
</template>

<script setup>
import UIButton from '@components/UI/UIButton.vue';


</script>

<style lang="scss" scoped>

.header {
    position: sticky;
    top: 0;
    width: 100%;
    min-height: 75px;
    background-color: #fff;
    filter: drop-shadow(0em .3em .3em rgba(0, 0, 0, 0.33));
    &__container {
        font-family: 'Open Sans', sans-serif;
        display: flex;
        min-height: 75px;
        align-items: center;
        gap: 2em;
    }
    &__logo-box {
        color: #29abe2;
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 110px;
        width: 110px;
        font-size: 20px;
        font-weight: 700;
    }
    &__logo {
        height: 50px;
        width: 41px;
        & img {
            height: 50px;
            width: 41px;
        }
    }
    &__nav {
        display: flex;
        flex: 1 1 auto;
        align-items: center;
        gap: 1em;
    }
    &__link {
        color: #000;
        transition: .2s;
        &:hover {
            color: #4a47ff;
            transition: .2s;
        }
    }
    &__button {
        font-family: 'Noto Sans', sans-serif;
        color: #fff;
        border-radius: .75em;
        border: 2px solid #4a47ff;
        background-color: #4a47ff;
        padding: .75em 1.5em;
        letter-spacing: .5px;
        font-size: 15px;
        font-weight: 700;
        transition: .4s;
        &:hover {
            transition: .4s;
            color: #4a47ff;
            background-color: #fff;
        }
    }
}

</style>