<template>
    <div class="proposal">
        <div class="proposal__container">
            <!-- TODO: Сделать валидацию -->
            <!-- TODO: Убрать срочность -->
            <div class="proposal__title">Сделать заявку</div>
            <form action="" class="proposal__form">
                <label for="name">Название проблемы</label><input v-model="proposalName" name="name" placeholder="Введите название вашей проблемы" class="proposal__phone" type="text">
                <UISelect @typing-event="changeCategoryValue" optionName="Выберите категорию" :options="[{name: 'Сантехник'}, {name: 'Your mother'}, {name: 'Artem'}]"/>
                <label for="phone">Ваш номер</label><input v-model="mobilePhone" name="phone" placeholder="Введите ваш номер телефона" class="proposal__phone" type="tel">
                <!-- <label class="proposal__radio-label">Срочность</label>
                <div class="proposal__radio">
                    <input name="picky-snicky" type="radio" id="yes" :value="true" v-model="isPicked">
                    <label style="font-weight: 400; font-size: 16px; color: #000;" for="yes">Срочно</label>
                    <br>
                    <input name="picky-snicky" type="radio" id="no" :value="false" v-model="isPicked">
                    <label style="font-weight: 400; font-size: 16px; color: #000;" for="no">Не срочно</label>
                </div> -->
                <label style="margin-top: 0.5em;" for="description">Описание проблемы</label>
                <textarea v-model="textareaText" class="proposal__text" placeholder="Опишите своб проблему" name="description" id="description" cols="30" rows="10" style="resize: none"></textarea>
                <button class="proposal__button" type="submit" @click.prevent="sendProposal">Отправить</button>
            </form>
            <br>


            <!-- <div class="">{{ categoryValue.name }}</div>
            <div class="">{{ isPicked }}</div>
            <div class="">{{ mobilePhone }}</div>
            <div class="">{{ textareaText }}</div> -->
        </div>
    </div>
</template>

<script setup>
import UISelect from '../components/UI/UISelect.vue';
import { ref } from 'vue';

const categoryValue = ref(null)
const mobilePhone = ref('')
const textareaText = ref('')
const proposalName = ref('')

// functions
const changeCategoryValue = (e, value) => {
    categoryValue.value = value
}

const sendProposal = () => {
    // TODO: Помернять название атрибутов под ДБ
    console.log(JSON.stringify({categoryValue: categoryValue.value, isPicked: isPicked.value, mobilePhone: mobilePhone.value, textareaText: textareaText.value}))
}

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
        margin-top: .5em;
        font-weight: 700;
        font-size: 70px;
        line-height: 1.2;
        margin-bottom: .5em;
        text-align: center;
    }
    &__form {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }
    &__phone {
        font-size: 16px;
        color: #000;
        border-radius: .25em;
        padding: 1em 1em;
        background-color: #fff;
        width: 500px;
        border: 1px solid #000;
    }
    &__text {
        border: 1px solid #000;
        border-radius: .5em;
        font-size: 16px;
        padding: 1em 1em;
    }
    &__button {
        margin: 0 0 1em 0;
        font-family: 'Open Sans', sans-serif;
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
            background-color: transparent;
        }
        max-width: 150px;
    }
    & label {
        color: #4a47ff;
        font-size: 18px;
        font-family: 'Open Sans', sans-serif;
        font-weight: 500;
    }
    &__radio {
        display: flex;
        gap: .5em;
    }
}

textarea {
    &::placeholder {
        color: #5a5a5a6d;
    }
    &::-webkit-input-placeholder       {opacity: 1; transition: opacity 0.3s ease;}
    &::-moz-placeholder                {opacity: 1; transition: opacity 0.3s ease;}
    &:-moz-placeholder                 {opacity: 1; transition: opacity 0.3s ease;}
    &:-ms-input-placeholder            {opacity: 1; transition: opacity 0.3s ease;}
    &:focus::-webkit-input-placeholder {opacity: 0; transition: opacity 0.3s ease;}
    &:focus::-moz-placeholder          {opacity: 0; transition: opacity 0.3s ease;}
    &:focus:-moz-placeholder           {opacity: 0; transition: opacity 0.3s ease;}
    &:focus:-ms-input-placeholder      {opacity: 0; transition: opacity 0.3s ease;}
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