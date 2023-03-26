<template>
    <div class="post">
        <div class="post__title">{{ title }}</div>
        <div class="post__description">{{ description }}</div>
        <div class="post__phone-number"><b>Номер связи:</b> {{ phoneNumber }}</div>
    </div>
</template>

<script setup>

const props = defineProps({
    title: String,
    description: String,
    phoneNumber: String,
})

</script>

<style lang="scss" scoped>
.post {
    font-family: 'Open Sans', sans-serif;
    // border: 1px solid #000;
    width: 700px;
    background-color: #fff;
    height: 100px;
    color: #000;
    padding: 1em 1em;
    display: flex;
    filter: drop-shadow(.3em .3em .3em rgba(0, 0, 0, 0.33));
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    &__title {
        font-size: 20px;
        font-weight: 700;
    }
    &__description {
        font-size: 17px;
    }
}
</style>