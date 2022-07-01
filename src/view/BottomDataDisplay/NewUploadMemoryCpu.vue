<template>
    <BottomBottomMiddleBox title="最新上报内存%、CPU%">
        <Echarts echartsId="newupmemorycpu" eWidth="100%" eHeight="100%" :options="eOptionsCurve">
        </Echarts>
    </BottomBottomMiddleBox>
</template>

<script setup>
import { reactive } from 'vue'
import BottomBottomMiddleBox from '../../components/BottomBottomMiddleBox.vue';
import Echarts from '../../components/echarts/echarts.vue';
const eOptionsCurve = reactive(
    {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['内存', 'CPU'],
            textStyle: {
                color: '#ffffff',
                fontSize: '8px'
            },
            itemHeight: 10,
            itemWidth: 10,
            itemGap: 10
        },
        grid: {
            top: '35%',
            left: '3%',
            right: '7%',
            bottom: '1%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['10.0.3.69', '10.0.3.69', '10.0.3.72', '10.0.3.73', '192.168.1.6', '10.0.4.17'],
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    color: 'rgb(255,255,255,0.8)',
                    fontSize: '8px'
                },
            },

        ],
        yAxis: [
            {
                type: 'value',
                name: '单位  %',
                axisLabel: {
                    fontSize: '8px'
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgb(255,255,255,0.8)',
                        fontSize: '8px',
                    }
                },
                nameTextStyle: {
                    fontSize: '8px'
                },
                splitLine: {
                    lineStyle: {

                        color: 'rgb(255,255,255,0.3)'
                    }
                }
            }
        ],
        series: [

            {
                name: '内存',
                type: 'bar',
                data: [41.31, 59, 17.32, 30.68, 12.86, 45.45],
                barWidth: '25%',
                itemStyle: {
                    normal: {
                        color: '#2e8cff'
                    }
                }
            },
            {
                name: 'CPU',
                type: 'bar',
                data: [3, 7.42, 6.77, 2, 0, 0],
                barWidth: '25%',
                itemStyle: {
                    normal: {
                        color: '#38eb70'
                    }
                }
            }
        ]
    }
)
</script>

<style lang='scss' scoped>
</style>