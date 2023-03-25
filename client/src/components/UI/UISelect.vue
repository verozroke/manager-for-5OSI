<template>
    <label class="option__label">{{ optionName }}</label>
    <select class="option__select" v-model="selectedOption">
        <option style="color: rgba(0, 0, 0, .3)" value="" disabled hidden>{{ optionName }}</option>
        <option v-for="option in options" :key="option.name" :value="option">{{option.name}}</option>
    </select>
</template>

<script setup>
import { ref } from 'vue';


const selectedOption = ref('')

const props = defineProps({
    optionName: String,
    options: Array
})


</script>

<style lang="scss" scoped>
.option {
    &__label {

    }
    &__select {
        font-size: 17px;
        color: #000;
        border-radius: .25em;
        padding: 1em 1em;
        background-color: #fff;
        width: 600px;
        border: 1px solid #000;
        background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png) no-repeat right;
        -webkit-appearance: none;
        background-position-x: 550px;
    }
}

</style>