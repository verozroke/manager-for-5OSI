<template>
    <div class="profile">
        <div class="profile__container">
            <div class="profile__info">
                <div class="profile__name">Имя: {{ userName }}</div>
                <div class="profile__adress">Адрес: {{ userCity }}, {{ userRescom }}</div>
            </div>
            <div class="profile__title">Ваши заявки:</div>
            <ul class="profile__proposals">
                <li class="profile__proposal" :key="proposal.id" v-for="proposal in proposalList">
                    <ProposalPost 
                        :proposal-name="proposal.name" 
                        :category-name="proposal.category"
                        :proposal-description="proposal.description"
                        :proposal-status="proposal.currentStatus"
                    />
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import ProposalPost from '../components/UI/ProposalPost.vue';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
import axios from 'axios';
const router = useRouter()
const userName = ref('')
const userCity = ref('')
const userRescom = ref('')
const proposalList = ref([])



let user = {}

onMounted(async function() {
        const response = await axios.get('http://localhost:3010/api/user/', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        })
        if(response.data.success !== undefined) {
            router.push({name: 'Login'})
        }
        user = response.data 
        userName.value = user.name
        const city = await axios.get(`http://localhost:3010/api/city/city/${user.city_id}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        
        userCity.value = city.data.name
        const rescom = await axios.get(`http://localhost:3010/api/rescom/rescom/${user.rescom_id}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        userRescom.value = rescom.data.name

        const list = await axios.get(`http://localhost:3010/api/proposal/byUser/${user.id}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        proposalList.value = list.data
})



// Почему тут реакт?!
// const User = ({match}) => {
//     const {login} = match.params;
//     const [user, setUser] = useState(null);
//     const [posts, setPosts] = useState([]);
//     useEffect(() => {
//         axios({
//             url: url + "/api/post/getPosts/" + login
//         }).then((res) => {
//             if(res.data && res.data.success){
//                 setUser(res.data.user);
//                 setPosts(res.data.posts)
//             }
//         })
//     }, [login])}
</script>
  
<style lang="scss" scoped>
    .profile{
        &__container{
            font-family: 'Open Sans', sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        &__info{
            margin-top: .5em;
            font-weight: 700;
            font-size: 70px;
            line-height: 1.2;
            margin-bottom: .5em;
            text-align: center;
        }
        &__name{
            font-weight: 700;
            font-size: 70px;
            color: #4a47ff;
            line-height: 1.2;
            margin-bottom: .5em;
            text-align: center;
        }
        &__adress{
            width: 800px;
            font-weight: 300;
            line-height: 1.2;
            font-size: 34px;
            color: #4a47ff;
            margin-bottom: 1em;
            text-align: center;
        }
        &__title{
            width: 400px;
            font-weight: 350;
            line-height: 1.5;
            font-size: 34px;
            color: #4a47ff;
            text-align: center;
        }
        &__proposals {
            display: flex;
            flex-direction: column;
            gap: 1em;
            width: 600px;
            height: auto;
            margin: 2em 0 4em 0;
        }
    }
</style>