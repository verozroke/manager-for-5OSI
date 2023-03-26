<template>
    <div class="post">
        <div class="post__title">Название проблемы: {{ proposalName }}</div>
        <div class="post__category">Категория: {{ categoryName }}</div>
        <div class="post__description">Описание проблемы: {{ proposalDescription }}</div>
        <div class="post__status">Статус: {{ proposalStatus }}</div>
    </div>
</template>

<script setup>

const props = defineProps({
    proposalName: String,
    categoryName: String,
    proposalDescription: String,
    proposalStatus: String,
})


</script>

<style lang="scss" scoped>
.post {
    font-family: 'Open Sans', sans-serif;
    // border: 1px solid #000;
    width: 600px;
    background-color: #fff;
    height: auto;
    color: #000;
    padding: 1em 1em;
    display: flex;
    filter: drop-shadow(.3em .3em .3em rgba(0, 0, 0, 0.33));
    flex-direction: column;
    justify-content: center;
    gap: .5em;
    align-items: left;
    &__title {
        font-size: 20px;
        font-weight: 700;
    }
}

</style>