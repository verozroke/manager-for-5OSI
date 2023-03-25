<template>
    <div class="services">
        <div class="services__container">
            <div class="services__title">Контакты услуг</div>
            <div class="services__text">Мы не предоставляем квартирные услуги напрямую, но можем помочь вам связаться с государственными служащими, которые специализируются на ремонте и обслуживании квартир.
<br><br>
Наша компания предоставляет контактную информацию профессионалов, которые могут помочь вам с устранением любых проблем, связанных с сантехникой, электрикой, установкой и ремонтом бытовой техники, дверей и окон, а также с установкой и ремонтом кондиционеров.
<br><br>
Мы гарантируем, что наши партнеры обладают высоким уровнем опыта и мастерства и готовы помочь вам с решением любых проблем в кратчайшие сроки.
<br><br>
<b style="color: #000;">В таблице ниже вы можете увидеть полную контактную информацию</b>, и следовательно, получить дополнительную консультацию по нуждающимся вами вопросам.</div>
            <div class="services__box">
                <div class="services__subtitle">Просим вас ознакомиться:</div>
                <div class="services__table">
                    <!-- row of attributes -->
                    <ul class="services__attributes-row">
                        <!-- elemets of attributes (column names) -->
                        <li class="services__attribute">
                            <div class="services__attribute-text">Специалисты</div>
                        </li>
                        <li class="services__attribute" style="border-left: 3px solid #c9c9c9a5; border-right: 3px solid #c9c9c9a5;">
                            <div class="services__attribute-text">Номер телефона</div>
                        </li>
                        <li class="services__attribute">
                            <div class="services__attribute-text">График работы</div>
                        </li>
                    </ul>
                    <!-- TODO: FETCH DATA FROM DB -->
                    <ul v-for="row in data" :key="row.name" class="services__row">
                        <li class="services__element">
                            <div class="services__text">{{ row.name }}</div>
                        </li>
                        <li class="services__element" style="border-left: 3px solid #c9c9c9a5; border-right: 3px solid #c9c9c9a5;">
                            <div class="services__text">{{ row.phoneNumber }}</div>
                        </li>
                        <li class="services__element">
                            <div class="services__text">{{ row.schedule }}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>


// just mockas
const data = [
    {name: 'Сантехник', phoneNumber: '87474461966', schedule: '7:00 - 8:00'},
    {name: 'Вахтерша', phoneNumber: '87777777777', schedule: '5:00 - 10:00'},
    {name: 'Охранник Боря', phoneNumber: '8696969696', schedule: '0:00 - 23:59'},
]
</script>

<style lang="scss" scoped>

.services {
    &__container {
        font-family: 'Open Sans', sans-serif;
        
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &__title {
        margin-top: .5em;
        font-weight: 700;
        font-size: 70px;
        line-height: 1.2;
        margin-bottom: .5em;
        text-align: center;
    }
    &__text {
        color: #000000a5;
        font-size: 20px;
        text-align: justify;
        line-height: 1.2;
    }
    &__box {
        margin-top: 2em;
        width: 100%;
    }
    &__subtitle {
        line-height: 1.2;
        font-size: 20px;
        margin-bottom: 1em;
    }
    &__table {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-bottom: 4em;
    }
    &__attributes-row {
        width: 100%;
        display: flex;
        border-bottom: 3px solid #c9c9c9a5;
    }
    &__attribute {
        background-color: #f8f8f8;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 33.333%;
        &-text {
            text-align: center;
            font-family: 'Open Sans', sans-serif;
            font-size: 20px;
            font-weight: 700;
        }
    }
    &__row {
        display: flex;
        width: 100%;
    }
    &__element {
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 33.333%;
        &-text {

        }
    }
}

</style>