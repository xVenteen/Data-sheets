<template>
    <BottomBottomMiddleBox title="所有主机最近10分钟状态">
        <Echarts echartsId="allhost10minestatus" eWidth="100%" eHeight="100%" :options="eOptionsCurve">
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
            data: ['最高', '平均', '最低'],
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
                data: ['CPU%', '内存%', '磁盘%', '负载(5分钟)', '负载(15分钟)'],
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
                name: '最高',
                type: 'bar',
                data: [99.26, 85, 71.58, 11.24, 5.84],
                barWidth: '10%',
                itemStyle: {
                    normal: {
                        color: '#0efcff'
                    }
                }
            },
            {
                name: '平均',
                type: 'bar',
                data: [22.28, 57.4, 44.1453, 6.23, 3.27],
                itemStyle: {
                    normal: {
                        color: '#fd9133'
                    }
                }
            },
            {
                name: '最低',
                type: 'bar',
                data: [0, 12.86, 6.77, 0, 0],
                itemStyle: {
                    normal: {
                        color: '#2e8cff'
                    }
                }
            }
        ]
    }
)
</script>

<style lang='scss' scoped>
</style>