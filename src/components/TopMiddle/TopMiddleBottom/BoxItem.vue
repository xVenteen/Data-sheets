<template>
    <div class="main_top_middle_bottom_item">
        <div class="main_top_middle_bottom_title">
            {{ props.title }}
        </div>
        <div class="main_top_middle_bottom_main">
            <slot></slot>
        </div>
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
.main_top_middle_bottom_item {
    width: 49%;
    height: 100%;
    background: url('../../../assets/main_top_bottom.png') no-repeat;
    background-size: 100% 100%;

    .main_top_middle_bottom_title {
        font-size: .8vw;
        text-align: start;
        color: #0EFCFF;
        padding-top: 0.3vw;
        margin: .5vw 0 0 1vw;
    }

    .main_top_middle_bottom_main {
        height: 90%;
    }
}
</style>