<template>
    <div class="statistics">
        <div class="statistics__container">
            <div class="statistics__title">Заявки жителей {{  }}</div>
            <div class="statistics__subtitle">Здесь находяться заявки оставленные жителями</div>
            <div class="statistics__components">
                <div class="name"></div>
                <div class="category"></div>
                <div class="description"></div>
                <div class="currentStatus"></div>
                <div class="phoneNumber"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
import axios from 'axios';
const router = useRouter()

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
        
})



</script>

<style lang="scss" scoped>
.statistics__container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
.statistics__container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
.statistics__title {
        margin-top: .5em;
        font-weight: 700;
        font-size: 70px;
        line-height: 1.2;
        margin-bottom: .5em;
        text-align: center;
    }
    .statistics__subtitle {
        margin-top: .5em;
        font-weight: 400;
        font-size: 30px;
        line-height: 1.2;
        margin-bottom: .5em;
        text-align: center;
    }
    .statistics__components{
        display: flex;
        flex-direction: column;
        gap: 2em;
        margin: 0 0 4em 0;
    }
    .name{
        font-weight: 700;
        font-size: 70px;
    }
    .category{
        font-weight: 700;
        font-size: 70px;
    }
    .description{
        font-weight: 500;
        font-size: 50px;
    }
    .currentStatus{
        font-weight: 200;
        font-size: 24px;
    }
    .phoneNumber{
        font-weight: 200;
        font-size: 24px;
    }
</style>