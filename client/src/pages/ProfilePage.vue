<template>
    <div class="profile">
        <div class="profile__container">
            <div class="profile__info">
                <div class="name">Name: {{ userName }}</div>
                <div class="adress">Adress: {{ userCity }}</div>
            </div>
            <div class="prop_h1">Ваши заявки:</div>
            <div class="proposals"> {{ userProposals }} </div>
        </div>
    </div>
</template>
  
<script setup>
import axios from 'axios'
import { ref } from 'vue';

const userName = ref('')
const userCity = ref('')

const User = ({match}) => {
    const {login} = match.params;
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios({
            url: url + "/api/post/getPosts/" + login
        }).then((res) => {
            if(res.data && res.data.success){
                setUser(res.data.user);
                setPosts(res.data.posts)
            }
        })
    }, [login])}
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
        .name{
            font-weight: 700;
            font-size: 70px;
            color: #4a47ff;
            line-height: 1.2;
            margin-bottom: .5em;
            text-align: center;
        }
        .adress{
            width: 800px;
            font-weight: 300;
            line-height: 1.2;
            font-size: 34px;
            color: #4a47ff;
            margin-bottom: 1em;
            text-align: center;
        }
        .prop_h1{
            width: 400px;
            font-weight: 350;
            line-height: 1.5;
            font-size: 34px;
            color: #4a47ff;
            margin-bottom: 1em;
            text-align: center;
        }
    }
</style>