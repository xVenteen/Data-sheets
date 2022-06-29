<template>
    <div class="main_bottom_bottom_side_box">
        <div class="title">{{ props.title }}</div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    title: {
        type: String,
        default: "标题",
        required: false
    },
})
</script>

<style lang='scss' scoped>
.main_bottom_bottom_side_box {
    width: 17.3%;
    height: 100%;
    background: url("../assets/main_bottom_bottom.png") no-repeat;
    background-size: 100% 100%;

    .title {
        font-size: .8vw;
        text-align: center;
        color: #0EFCFF;
        padding-top: 0.3vw;
    }
}
</style>