<template>
    <div class="register">
        <div class="register__container">
            <div class="register__title">Регистрация</div>
            <form @submit.prevent="handlerSubmit" action="">
                <div class="form-group">
                    <label for="login">Логин</label>
                    <input name="login" id="login" placeholder="Введите ваш логин" v-model="userLogin" type="text" class="form-control">
                </div>
                <div class="form-group">
                    <label for="name">Имя</label>
                    <input name="name" id="name" placeholder="Введите ваше имя" v-model="userName" type="text" class="form-control">
                </div>
                <div class="form-group">
                    <label for="adress">Ваш адрес</label>
                    <input name="adress" id="adress" placeholder="Город / Район / Улица / Дом / Номер кв." v-model="userAdress" type="text" class="form-control">
                    <div class="address-example">Пример: Астана, Есиль, Туркестан, 30, 52</div>
                </div>
                <div class="form-group">
                    <label for="password">Пароль</label>
                    <input name="password" id="password" autocomplete="on" placeholder="Введите ваш пароль" v-model="password" type="password" class="form-control">
                </div>
                <div class="form-group">
                    <label for="passwordConfirm">Подтверждение пароля</label>
                    <input name="passwordConfirm" id="passwordConfirm" autocomplete="on" placeholder="Подтверждение пароля" v-model="passwordConfirm" type="password" class="form-control">
                </div>
                <button type="submit" class="form-submit-btn">Зарегистрироваться</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue';

const userLogin = ref('')
const userName = ref('')
const userAdress = ref('')
const password = ref('')
const passwordConfirm = ref('')


const handlerSubmit = () => {
    if(password.value !== passwordConfirm.value) {
        return
    }
    const dataSend = {
        login:  userLogin.value,
        // name: userName.value,
        // adress: userAdress.value,
        password: password.value,

    }
    // axios.post('http://localhost:3010/api/user/register', data)
    //     .then(res => {
    //         console.log(res.data)
    //     }).catch(err => {
    //         console.log(err)
    //     })
    axios.post('http://localhost:3010/api/user/register', dataSend, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
}

</script>

<style lang="scss" scoped>
.register {
    &__container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    &__title {
        margin-top: .5em;
        font-weight: 700;
        font-size: 70px;
        line-height: 1.2;
        margin-bottom: .5em;
        text-align: center;
    }
    & form {
        display: flex;
        flex-direction: column;
        width: 500px;
        gap: 1em;
        align-items: center;
    }
}

.form {
    &-group {
        display: flex;
        flex-direction: column;
        gap: .5em;
        & input {
            font-size: 16px;
            color: #000;
            border-radius: .25em;
            padding: 1em 1em;
            background-color: #fff;
            width: 500px;
            border: 1px solid #000;
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
        & label {
            color: #4a47ff;
            font-size: 18px;
            font-family: 'Open Sans', sans-serif;
            font-weight: 500;
        }
        
    }
    &-submit-btn {
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
        max-width: 220px;
    }
}
</style>