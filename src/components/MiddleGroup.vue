<template>
    <div class="main_middle_group">
        <div v-for="data in props.dataGroup" class="main_middle_group_item">
            <div class="data_title">{{ data.itemTitle }}</div>
            <div class="data_num">{{ data.dataNum }}</div>
        </div>
    </div>

</template>

<script setup>
import { defineProps, reactive } from 'vue';
const props = defineProps({
    dataGroup: {
        type: Object,
        default: [{ itemTitle: '标题', dataNum: '00.00' }, { itemTitle: '标题', dataNum: '00.00' }, { itemTitle: '标题', dataNum: '00.00' }, { itemTitle: '标题', dataNum: '00.00' }, { itemTitle: '标题', dataNum: '00.00' }],
        required: false
    },

})

// const dataGroup = reactive([{ itemTitle: '标题', dataNum: '00.00' }, { itemTitle: '标题', dataNum: '00.00' }, { itemTitle: '标题', dataNum: '00.00' }, { itemTitle: '标题', dataNum: '00.00' }, { itemTitle: '标题', dataNum: '00.00' }])

</script>

<style lang='scss' scoped>
.main_middle_group {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    .main_middle_group_item {
        width: 18.5%;
        height: 100%;
        background: rgba(11, 76, 151, 0.10);
        background: url("../assets/main_middle.png") no-repeat;
        background-size: 100% 100%;
        box-shadow: 1px 2px 10px 1px rgb(14 252 255 / 53%), inset 5px 4px 100px 1px rgb(14 252 255 / 34%);

        .data_title {
            height: .75vw;
            font-size: .75vw;
            color: #0EFCFF;
            text-indent: 0.8vw;
            padding-top: 0.5vw;
        }

        .data_num {
            width: 100%;
            height: 1.4vw;
            font-size: 1.4vw;
            font-weight: bold;
            color: white;
            text-align: center;
            letter-spacing: .2vw;
            margin-top: -0.5vw;
        }
    }
}
</style>