<template>
    <TopSideBox title="下线资源数据展示">
        <Echarts echartsId="offlinres" eWidth="100%" eHeight="100%" :options="eOptionsCurve" style="font-size: .7vw">
        </Echarts>
    </TopSideBox>
</template>

<script setup>
import * as echarts from "echarts";
import { reactive } from 'vue'
import TopSideBox from '../../components/TopSideBox.vue';
import Echarts from '../../components/echarts/echarts.vue';
const eOptionsCurve = reactive({
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        top: "1%",
        left: '-5%',
        right: '20%',
        bottom: '-20%',
        containLabel: true
    },
    xAxis: {
        show: false,
        type: 'value',
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        scale: true,
        splitNumber: 5,
        data: ['SNMP', 'PING', '数据源', '服务接口', '主机'],
        axisLabel: {
            color: '#ffffff',
            fontSize: '6px',
            // position: "left",
            margin: 40,
            textStyle: {
                align: 'left',

            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    series: [
        {
            type: 'bar',
            barWidth: 10,
            data: [120, 200, 150, 80, 70],
            barWidth: 4,
            label: {   //设置柱状图上显示  对应值
                show: true,
                color: '#fff',
                fontSize: '6',
                formatter: (params) => {
                    return params.value[params.encode.y[0]];
                },
            },
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        distance: 20,
                        // position: 'right',
                        position: ['200', '-2'],
                        textStyle: {
                            color: 'rgb(56,225,225)'
                        }
                    },
                    barBorderRadius: [5, 5, 5, 5],// 设置柱状图圆角（顺时针左上，右上，右下，左下）
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,
                        [{ offset: 0, color: 'rgba(99,253,247,0.1)' },
                        { offset: 1, color: 'rgba(99,253,247,1)' }])
                },

            },
        },
    ]
})

</script>

<style lang='scss' scoped>
</style>

