<template>
    <div @click="chatVyzyvalka" class="bot-message">
        <div class="bot-message__logo"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-message-2" width="40" height="40" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 9h8"></path><path d="M8 13h6"></path><path d="M9 18h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3l-3 -3z"></path></svg></div>
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
    bottom: 2em;
    right: 2em;
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
        padding-top: 2px;
        height: 45px;
        width: 40px;
        & svg {
            color: #ffffff;
        }
    }
}


</style>