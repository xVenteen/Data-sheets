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
            num: "26",
            title: "主机数量",
            boxWidth: '32%',
            bgcColor: "#37D2D4"
        },
        {
            num: "5",
            title: "服务接口",
            boxWidth: '32%',
            bgcColor: "#19CA88"
        },
        {
            num: "2",
            title: "数据源",
            boxWidth: '32%',
            bgcColor: "#858FF8"
        }
    ],
    secend: [
        {
            num: "8",
            title: "数据表",
            boxWidth: '24%',
            bgcColor: "#FD9133"
        },
        {
            num: "9",
            title: "PING",
            boxWidth: '24%',
            bgcColor: "#F6D10E"
        },
        {
            num: "1",
            title: "SNMP",
            boxWidth: '24%',
            bgcColor: "#2E8CFF"
        },
        {
            num: "23",
            title: "下发指令",
            boxWidth: '24%',
            bgcColor: "#F6580E"
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