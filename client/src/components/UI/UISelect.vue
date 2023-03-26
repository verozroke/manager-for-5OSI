<template>
    <label class="option__label">{{ optionName }}</label>
    <select :disabled="disabled" @change="$emit('typingEvent', $event, selectedOption)" class="option__select" v-model="selectedOption">
        <option style="color: rgba(0, 0, 0, .3)" value="" disabled hidden>{{ optionName }}</option>
        <option v-for="option in options" :key="option.name" :value="option">{{option.name}}</option>
    </select>
</template>

<script setup>
import { ref } from 'vue';

const emits = defineEmits(['typingEvent'])


const selectedOption = ref('')

const props = defineProps({
    optionName: String,
    options: Array,
    disabled: Boolean,
})


</script>

<style lang="scss" scoped>
.option {
    &__label {
        color: #4a47ff;
        font-family: 'Open Sans', sans-serif;
        font-weight: 500;
        font-size: 18px;
    }
    &__select {
        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
        color: #000;
        border-radius: .25em;
        padding: 1em 1em;
        background-color: #fff;
        width: 500px;
        border: 1px solid #000;
        background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png) no-repeat right;
        -webkit-appearance: none;
        background-position-x: 460px;
    }
}

</style>