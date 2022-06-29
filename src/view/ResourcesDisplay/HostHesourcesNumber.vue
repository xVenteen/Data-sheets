<template>
    <TopSideBox title="基础资源展示">
        <div class="basic-row">
            <TopTag v-for="data in datas.frist" :num="data.num" :title="data.title" :box-width="data.boxWidth"
                :bgc-color="data.bgcColor"></TopTag>
        </div>
        <div class="basic-row">
            <TopTag v-for="data in datas.secend" :num="data.num" :title="data.title" :box-width="data.boxWidth"
                :bgc-color="data.bgcColor"></TopTag>
        </div>

    </TopSideBox>
</template>

<script setup>
import TopSideBox from '../../components/TopSideBox.vue';
import TopTag from '../../components/TopTag.vue'
import { reactive } from 'vue';
const datas = reactive({
    frist: [
        {
            num: "8",
            title: "主机数量",
            boxWidth: '49%',
            bgcColor: "#37D2D4"
        },
        {
            num: "3",
            title: "服务接口",
            boxWidth: '49%',
            bgcColor: "#19CA88"
        }

    ],
    secend: [

        {
            num: "0",
            title: "文件防篡改",
            boxWidth: '32%',
            bgcColor: "#858FF8"
        },
        {
            num: "1",
            title: "日志文件",
            boxWidth: '32%',
            bgcColor: "#2E8CFF"
        },
        {
            num: "1",
            title: "DOCKER容器",
            boxWidth: '32%',
            bgcColor: "#FD9133"
        }
    ]
})
</script>

<style lang='scss' scoped>
.basic-row {
    display: flex;
    justify-content: space-between;
    height: 48%;
}
</style>