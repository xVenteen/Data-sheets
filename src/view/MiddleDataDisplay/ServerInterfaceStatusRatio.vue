<template>
    <BottomTopBox title="服务接口状态占比">
        <Echarts echartsId="serverinterfacestatusratio" eWidth="100%" eHeight="120%" :options="eOptionsCurve"
            style="font-size: .7vw">
        </Echarts>
    </BottomTopBox>
</template>

<script setup>
import BottomTopBox from '../../components/BottomTopBox.vue';
import Echarts from '../../components/echarts/echarts.vue';
import { reactive } from 'vue';
const eOptionsCurve = reactive(
    {
        tooltip: {
            trigger: 'item'
        },
        color: ['#38eb70', '#2e8cff', '#0efcff', '#858ff8', '#fd9133', '#f7e270'],
        legend: {
            top: '38%',
            left: '10%',
            bottom: '0',
            orient: 'center',
            textStyle: {
                color: '#ffffff',
                fontSize: '8px'
            },
            itemHeight: 14,
            itemWidth: 14,
            itemGap: 10
            // bottom: 0,
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['62%', '72%'],

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
                center: ['68%', '56%'],
                data: [
                    { value: 1048, name: '200', selected: true },
                    { value: 735, name: '404' },
                    { value: 580, name: '400' },
                    { value: 484, name: '500' },
                    { value: 300, name: '403' },
                    { value: 200, name: '其他' }
                ]
            }
        ]
    }
)
</script>

<style lang='scss' scoped>
</style>