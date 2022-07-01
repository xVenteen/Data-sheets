<template>
    <BottomBottomSideBox title="最新上报进程数、连续天数、运行天数">
        <Echarts echartsId="newuploaddatas" eWidth="100%" eHeight="112%" :options="eOptionsCurve">
        </Echarts>
    </BottomBottomSideBox>
</template>

<script setup>
// import * as echarts from "echarts";
import { reactive } from 'vue'
import BottomBottomSideBox from '../../components/BottomBottomSideBox.vue'
import Echarts from '../../components/echarts/echarts.vue';
const eOptionsCurve = reactive({
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // Use axis to trigger tooltip
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
        }
    },

    grid: {
        top: '12%',
        left: '3%',
        right: '0',
        bottom: '5%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false,
        },

    },
    yAxis: {
        type: 'category',
        data: ['10.0.3.69', '10.0.3.68', '10.0.3.72', '10.0.3.73', '192.168.1.6', '10.1.4.17'],
        axisLabel: {
            color: 'rgb(255,255,255,0.8)',
            fontSize: '8px',
            // position: "left",
            margin: 10,
            textStyle: {
                align: 'right',
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },

    },
    series: [
        {
            name: '进程数量',
            type: 'bar',
            stack: 'total',
            barWidth: 8,
            label: {   //设置柱状图上显示  对应值
                show: true,
                color: '#fff',
                fontSize: '6',
                formatter: (params) => {
                    return params.value[params.encode.y[0]];
                },
            },
            emphasis: {
                focus: 'series'
            },
            data: [77, 49, 38, 133, 213, 113],
            itemStyle: {
                normal: {
                    color: '#fd9133'
                }
            }
        },
        {
            name: '连续数量',
            type: 'bar',
            stack: 'total',
            barWidth: 8,
            label: {   //设置柱状图上显示  对应值
                show: true,
                color: '#fff',
                fontSize: '6',
                formatter: (params) => {
                    return params.value[params.encode.y[0]];
                },
            },
            emphasis: {
                focus: 'series'
            },
            data: [97, 132, 101, 46, 230, 89,],
            itemStyle: {
                normal: {
                    color: '#2e8cff'
                }
            }
        },
        {
            name: '运行天数',
            type: 'bar',
            stack: 'total',
            barWidth: 8,
            label: {   //设置柱状图上显示  对应值
                show: true,
                color: '#fff',
                fontSize: '6',
                formatter: (params) => {
                    return params.value[params.encode.y[0]];
                },
            },
            emphasis: {
                focus: 'series'
            },
            data: [12, 32, 0, 94, 90, 10],
            itemStyle: {
                normal: {
                    color: '#0efcff'
                }
            }
        }
    ]
})
</script>

<style lang='scss' scoped>
</style>