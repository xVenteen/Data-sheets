<template>
    <div class="main_top_middle_main">
        <div class="main_top_middle_num_title">{{ props.title }}</div>
        <div class="main_top_middle_num">
            <div class="num_box_item">
                0
            </div>
            <div class="num_box_item">
                0
            </div>
            <div class="num_box_item">
                0
            </div>
            <div class="num_box_item">
                0
            </div>
            <div class="num_box_item">
                0
            </div>
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
.main_top_middle_main {
    display: flex;
    width: 100%;
    height: 27%;

    .main_top_middle_num_title {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #0EFCFF;
        font-size: 1.5vw;
        margin-left: 13%;
        width: 18%;
    }

    .main_top_middle_num {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 40%;
        height: 100%;

        .num_box_item {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 17%;
            height: 91%;
            font-size: 2vw;
            font-weight: bold;
            color: #0EFCFF;
            background: url('../../assets/center_num.png') no-repeat;
            background-size: 100% 100%;
        }
    }
}
</style>