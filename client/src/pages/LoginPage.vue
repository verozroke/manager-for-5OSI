<template>
  <div class="login">
    <div class="login__container">
            <div class="login__title">Вход</div>
            <form @submit.prevent="handlerSubmit" action="">
                <div class="form-group">
                    <label for="login">Логин</label>
                    <input name="login" id="login" placeholder="Введите ваш логин" v-model="userLogin" type="text" class="form-control">
                </div>
                <div class="form-group">
                    <label for="password">Пароль</label>
                    <input name="password" id="password" autocomplete="on" placeholder="Введите ваш пароль" v-model="password" type="password" class="form-control">
                </div>
                <button type="submit" class="form-submit-btn">Войти</button>
            </form>
        </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue';
import router from '../routes';

const userLogin = ref('')
const password = ref('')



const handlerSubmit = async () => {
  const body = {
    login: userLogin.value,
    password: password.value,
  }
  try {
    axios.post('http://localhost:3010/api/user/login', body, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
        localStorage.setItem('token', res.data.token)
        // router.push({path: '/'});
        window.location.href = "/manager-for-5OSI/#/"
    })
  } catch(e) {
    console.log(e)
  }

}



</script>

<style lang="scss" scoped>
.login {
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