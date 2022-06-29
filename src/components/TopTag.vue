<template>
    <div class="top-tag" :style="{ width: props.boxWidth, backgroundColor: props.bgcColor }">
        <span class="data-view">{{ props.num }}</span>
        <p class="title-view">{{ props.title }}</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    num: {
        type: String,
        default: '26',
        required: false
    },
    title: {
        type: String,
        default: '主机数量',
        required: false
    },
    boxWidth: {
        type: String,
        default: '32%',
        required: false
    },
    bgcColor: {
        type: String,
        default: '#37D2D4',
        required: false
    }
})
</script>

<style lang='scss' scoped>
.top-tag {
    height: 100%;
    width: 32%;
    text-align: center;
    font-size: 12px;

    .data-view {
        display: inline-block;
        margin-top: 0.3vw;
        text-indent: 0vw;
        font-size: .7vw;
        // transform: scale(0.9);
    }

    .title-view {
        margin: 0;
        transform: scale(0.77);
    }
}
</style>