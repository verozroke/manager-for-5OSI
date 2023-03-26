<template>
    <div class="news">
        <div class="news__container">
            <div class="news__title">Новое объявление</div>
            <form class="news__form" action="">
                <div class="form-group">
                    <label for="name">Название объявления</label>
                    <input name="name" id="name" placeholder="Введите ваше название" v-model="newsTitle" type="text" class="form-control">
                </div>
                <div class="form-group">
                    <label for="description">Описание объявления</label>
                    <input name="description" id="description" placeholder="Введите ваше описание" v-model="newsDescription" type="text" class="form-control">
                </div>
                <div class="form-group">
                    <label for="phone_number">Номер контакта обратной связи</label>
                    <input name="phone_number" id="phone_number" placeholder="Введите номер контакта связи" v-model="newsPhoneNumber" type="text" class="form-control">
                </div>
                <div class="news__submit" @click.prevent="sendData">Сделать объявление</div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
import axios from 'axios';
const router = useRouter()
const newsTitle = ref('')
const newsDescription =  ref('')
const newsPhoneNumber =  ref('')

let admin = {}

onMounted(async function() {
        const response = await axios.get('http://localhost:3010/api/admin/', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        })
        if(response.data.success !== undefined) {
            router.push({name: 'Login'})
        }
        admin = response.data
})




const sendData = async () => {
    console.log('sdsd');
    const rescom = await axios.get(`http://localhost:3010/api/rescom/rescom/${admin.rescom_id}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const news = {
        title: newsTitle.value,
        description: newsDescription.value,
        phone_number: newsPhoneNumber.value,
    }
    rescom.data.news.push(news)
    const data = await axios.put(`http://localhost:3010/api/admin/news/${rescom._id}`, rescom.data.news, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
    console.log(data)
}

</script>

<style lang="scss" scoped>

.news {
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
    &__submit {
        text-align: center;
        margin: 1em 0 1em 0;
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
        // max-width: 220px;
    }
    &__form {
        gap: 2em;
    }
    
}
.form {
    display: flex;
    flex-direction: column;
    align-items: center;
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