<template>
    <div class="main_bottom_top_item">
        <div class="data_list_title">{{ props.title }}</div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    title: {
        type: String,
        default: "标题",
        required: false
    }
})

</script>

<style lang='scss' scoped>
.main_bottom_top_item {
    width: 32%;
    height: 100%;
    background: url("../assets/main_bottom_top1.png") no-repeat;
    background-size: 100% 100%;

    .data_list_title {
        z-index: 80;
        width: 100%;
        margin-top: 2.6vh;
        font-size: .8vw;
        color: white;
        text-indent: 3.2vw;
    }
}
</style>