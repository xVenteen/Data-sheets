<template>
    <TopSideBox title="下线资源数据展示">
        <Echarts echartsId="hostofflinres" eWidth="100%" eHeight="100%" :options="eOptionsCurve"
            style="font-size: .7vw">
        </Echarts>
    </TopSideBox>
</template>

<script setup>
// import * as echarts from "echarts";
import { reactive } from 'vue'
import TopSideBox from '../../components/TopSideBox.vue';
import Echarts from '../../components/echarts/echarts.vue';
const eOptionsCurve = reactive(
    {
        tooltip: {
            trigger: 'item'
        },
        color: ['#2e8cff', '#fd9133', '#37d2d4', '#19ca88'],
        legend: {
            top: '17%',
            right: 0,
            orient: 'center',
            textStyle: {
                color: '#ffffff',
                fontSize: '8px'
            },
            itemHeight: 11,
            itemWidth: 11,
            itemGap: 10
            // bottom: 0,
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['80%'],

                // avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    scaleSize: 12,
                },
                labelLine: {
                    show: false
                },
                center: ['20%', '55%'],
                data: [
                    { value: 1048, name: '进程' },
                    { value: 735, name: '端口' },
                    { value: 580, name: '文件防篡改' },
                    { value: 484, name: 'DOCKER容器' },
                ]
            }
        ]
    }
)
</script>

<style lang='scss' scoped>
</style>