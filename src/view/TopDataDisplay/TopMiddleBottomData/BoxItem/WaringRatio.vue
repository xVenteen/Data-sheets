<template>
    <BoxItem title="主机及资源告警次数最高占比">
        <Echarts echartsId="waringratio" eWidth="100%" eHeight="90%" :options="eOptionsCurve" style="font-size: .7vw">
        </Echarts>
    </BoxItem>
</template>

<script setup>
import BoxItem from '../../../../components/TopMiddle/TopMiddleBottom/BoxItem.vue';
import Echarts from '../../../../components/echarts/echarts.vue';
import { reactive } from 'vue';
const eOptionsCurve = reactive(
    {
        tooltip: {
            trigger: 'item'
        },
        color: ['#38eb70', '#2e8cff', '#0efcff', '#858ff8', '#fd9133', '#f7e270'],
        legend: {
            top: '6%',
            right: 50,
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
                radius: ['60%', '80%'],

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
                center: ['25%', '45%'],
                data: [
                    { value: 1048, name: '10.0.4.17(演示机)' },
                    { value: 735, name: '10.0.3.68(并行计算)' },
                    { value: 580, name: '192.1668.1.24(资源备份)' },
                    { value: 484, name: '10.0.3.69(静态资源)' },
                    { value: 300, name: '10.0.3.66(中央存贮)' },
                    { value: 200, name: '192.168.1.23(AI)' }
                ]
            }
        ]
    }
)
</script>

<style lang='scss' scoped>
</style>