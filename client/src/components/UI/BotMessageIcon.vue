<template>
    <div @click="chatVyzyvalka" class="bot-message">
        <img src="../../img/icons/message.png" alt="" class="bot-message__logo">
    </div>
</template>

<script setup>

const chatVyzyvalka = () => {
    // TODO: CHAT BOT 
}

</script>

<style lang="scss" scoped>
.bot-message {
    position: fixed;
    height: 75px;
    width: 75px;
    background-color: #ff9600;
    z-index: 10000;
    bottom: 1em;
    right: 1em;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(.2em .2em .5em rgba(255,150,0, 0.8));
    transition: .4s;
    &:hover {
        filter: drop-shadow(.1em 0em .2em rgba(255,150,0, 0.8));
        transition: .4s;
    }
    &__logo {
        padding-top: 5px;
        height: 45px;
        width: 40px;
        & img {
            height:40px;
            width: 40px;
        }
    }
}


</style>