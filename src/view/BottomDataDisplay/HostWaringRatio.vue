<template>
    <BottomBottomSideBox title="主机资源告警占比">
        <Echarts echartsId="hostwaringratio" eWidth="100%" eHeight="112%" :options="eOptionsCurve">
        </Echarts>
    </BottomBottomSideBox>
</template>

<script setup>
// import * as echarts from "echarts";
import { reactive } from 'vue'
import BottomBottomSideBox from '../../components/BottomBottomSideBox.vue'
import Echarts from '../../components/echarts/echarts.vue';
const eOptionsCurve = reactive({
    title: {
        text: 'Basic Radar Chart',
        show: false
    },
    grid: {
        show: false,
        top: '1%',
        right: '5%',
        bottom: '1%',
        left: '1%'
    },
    radar: {
        splitArea: {
            show: false,
            color: 'rgb(225,225,225,1)'
        },
        name: { //修改indicator文字的颜色
            textStyle: {
                color: "#11e4f1",
                fontSize: '9px'
            }
        },
        axisLine: {
            lineStyle: {
                width: 0.5,
                color: 'rgba(225,225,225,.4)',
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                width: 0.5,
                color: 'rgba(225,225,225,.4)', // 设置网格线的颜色
            },
        },
        radius: 55,
        // shape: 'circle',
        indicator: [
            { name: '主机下线警告', max: 100 },
            { name: '内存警告', max: 100 },
            { name: 'CPU警告', max: 100 },
            { name: '传输速率警告', max: 100 },
            { name: '磁盘警告', max: 100 },
            { name: '系统负载(5分钟)', max: 100 }
        ],
        center: ['49%', '52%']
    },
    series: [
        {
            name: 'Budget vs spending',
            type: 'radar',
            symbol: "none",
            data: [
                {
                    value: [42, 30, 100, 35, 50, 18],
                    name: 'Allocated Budget',
                    itemStyle: { //该数值区域样式设置
                        normal: {
                            // color: 'rgb(255,225,0,.3)', //背景颜色，还需设置areaStyle
                            lineStyle: {
                                color: 'rgb(0,0,0,1)', //边框颜色
                            },
                        },
                    },
                }
            ]
        },

    ]
})
</script>

<style lang='scss' scoped>
</style>