<template>
    <div class="hero">
        <div class="hero__overlay">
            <div class="hero__container">
                <div class="hero__title">Добро пожаловать!</div>
                <div class="hero__subtitle">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab ullam inventore facere nobis dolorem quaerat, doloremque aut blanditiis debitis in labore neque nesciunt minima dolores dolore nihil assumenda quos eum placeat autem ipsa asperiores omnis. Consequuntur autem odio quis velit?</div>
                <button class="hero__button">Начать</button>
            </div>
        </div>
    </div>
</template>

<script setup>

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
        color: #fff;
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
    &__title {
        font-weight: 700;
        font-size: 70px;
        text-align: center;
        margin: 0 0 .25em 0;
    }
    &__subtitle {
        font-weight: 300;
        width: 700px;
        font-size: 25px;
        text-align: center;
        margin: 0 0 1em 0;
    }
    &__button {
        font-family: 'Open Sans', sans-serif;
        color: #fff;
        border-radius: .75em;
        border: 2px solid #4a47ff;
        background-color: #4a47ff;
        padding: .75em 1.5em;
        letter-spacing: .5px;
        font-size: 20px;
        font-weight: 700;
        transition: .4s;
        &:hover {
            background-color: #3835c7;
            transition: .4s;
            border: 2px solid #3835c7;
        }
    }


}

</style>