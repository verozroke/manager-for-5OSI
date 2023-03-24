<template>
    <div class="header">
        <div class="header__container">
            <div class="header__logo-box">
                <div class="header__logo">
                    <img src="@img/icons/logo.png" alt="Logo">
                </div>
                <div class="header__logo-title">Serve</div>
            </div>
            <ul class="header__nav">
                <RouterLink :to="{name: 'Home'}">
                    <li class="header__link">Домой</li>
                </RouterLink>
                <RouterLink :to="{name: 'Rent'}">
                    <li class="header__link">Моя кварплата</li>
                </RouterLink>
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
    &__container {
        display: flex;
        min-height: 75px;
        align-items: center;
        gap: 2em;
    }
    &__logo-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 120px;
        width: 120px;
        font-size: 20px;
        font-weight: 700;
    }
    &__logo {
        height: 50px;
        width: 50px;
        & img {
            height: 50px;
            width: 50px;
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