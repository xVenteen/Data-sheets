<template>
    <div class="main_top_side_item">
        <div class="main_top_side_title">
            {{ props.title }}
        </div>
        <div class="main_top_side_main">
            <slot></slot>
        </div>

    </div>
</template>


<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    title: {
        type: String,
        default: '标题',
        required: false
    }
})

</script>

<style lang='scss' scoped>
.main_top_side_item {
    width: 100%;
    height: 48%;
    background: url("../assets/main_top_left.png") no-repeat;
    background-size: 100% 100%;

    .main_top_side_title {
        text-align: center;
        color: #0EFCFF;
        font-size: .75vw;
        padding-top: .2vw;

    }

    .main_top_side_main {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 92%;
        height: 71%;
        margin: auto;
        margin-top: 3%;
        color: white;
    }
}
</style>