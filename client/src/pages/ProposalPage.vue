<template>
    <div class="proposal">
        <div class="proposal__container">
            <div class="proposal__title">Сделать заявку</div>
            <form action="" class="proposal__form">
                <UISelect optionName="Выберите категорию" :options="[{name: 'Сантехник'}, {name: 'Your mother'}, {name: 'Artem'}]"/>
                <label for="phone">Ваш номер</label><input v-model="mobilePhone" name="phone" placeholder="Введите ваш номер телефона" class="proposal__phone" type="tel">
                <div class="proposal__radio-label">Срочная ли у вас проблема?</div>
                <div>
                    <input name="picky-snicky" type="radio" id="yes" :value="true" v-model="isPicked">
                    <label for="yes">Да</label>
                    <br>
                    <input name="picky-snicky" type="radio" id="no" :value="false" v-model="isPicked">
                    <label for="no">Нет</label>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import UISelect from '../components/UI/UISelect.vue';
import { ref } from 'vue';


const isPicked = ref(null)
const mobilePhone = ref('')

</script>

<style lang="scss" scoped>

.proposal {
    &__container {
        font-family: 'Open Sans', sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    &__title {
        font-weight: 700;
        font-size: 70px;
        line-height: 1.2;
        margin-bottom: .5em;
        text-align: center;
    }
    &__form {
        display: flex;
        flex-direction: column;
    }
    &__phone {
        font-size: 17px;
        color: #000;
        border-radius: .25em;
        padding: 1em 1em;
        background-color: #fff;
        width: 600px;
        border: 1px solid #000;
    }
}



input[type="tel"]::placeholder {
    color: #5a5a5a6d;
}

input::-webkit-input-placeholder       {opacity: 1; transition: opacity 0.3s ease;}
input::-moz-placeholder                {opacity: 1; transition: opacity 0.3s ease;}
input:-moz-placeholder                 {opacity: 1; transition: opacity 0.3s ease;}
input:-ms-input-placeholder            {opacity: 1; transition: opacity 0.3s ease;}
input:focus::-webkit-input-placeholder {opacity: 0; transition: opacity 0.3s ease;}
input:focus::-moz-placeholder          {opacity: 0; transition: opacity 0.3s ease;}
input:focus:-moz-placeholder           {opacity: 0; transition: opacity 0.3s ease;}
input:focus:-ms-input-placeholder      {opacity: 0; transition: opacity 0.3s ease;}

</style>