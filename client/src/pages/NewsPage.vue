<template>
    <div class="news">
        <div class="news__container">
            <div class="news__title">Новости {{ userRescom }}</div>
            <div class="news__subtitle">Здесь мы публикуем все новости {{ userRescom }}, а так же важную и актуальную информацию!</div>
            <div class="news__list">{{ userNews }}</div>
        </div>
    </div>
</template>
  
<script setup>

</script>
  
<style lang="scss" scoped>
.news{
        &__container{
            font-family: 'Open Sans', sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        &__title{
            margin-top: .5em;
            font-weight: 700;
            font-size: 70px;
            color: #4a47ff;
            line-height: 1.2;
            margin-bottom: .5em;
            text-align: center;
        }
        &__subtitle{
            font-weight: 500;
            font-size: 30px;
            color: #000000;
            line-height: 1.2;
            margin-bottom: .5em;
            text-align: center;
        }
    }
</style>