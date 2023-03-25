<template>
    <RouterLink :to="{name: link}" class="button">
        <slot/>
    </RouterLink>
</template> 

<script setup>

const props = defineProps({
    link: String,
})

</script>

<style lang="scss" scoped>
.button {

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
}
</style>