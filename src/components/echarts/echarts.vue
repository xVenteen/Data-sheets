<template>
    <div class="echart">
        <div :id="props.echartsId" :style="{ width: props.eWidth, height: props.eHeight }"></div>
    </div>
</template>

<script setup>
import * as echarts from "echarts";
import { watch, ref, nextTick, onMounted, onUnmounted, defineProps } from 'vue'
import { divListen } from "../../utils/divListen"
const props = defineProps({
    echartsId: {
        type: String,
        default: "aechart",
        required: false
    },
    eWidth: {
        type: String,
        default: "100%",
        required: false
    },
    eHeight: {
        type: String,
        default: "100%",
        required: false
    },
    theme: {
        type: String,
        default: "",
        required: false
    },
    options: {
        type: String,
        default: {},
        required: false
    },
})
const echart = echarts
let docEcharts = ref()
onMounted(() => {
    initChart()
})

onUnmounted(() => {
    echart.dispose;
});

const initChart = () => {
    nextTick(() => {
        const chart = echart.init(document.getElementById(props.echartsId), props.theme);
        docEcharts.value = chart
        divListen(props.echartsId, chart, this)
        // 把配置和数据放这里
        chart && chart.clear();
        props.options && chart.setOption(props.options, true);
        // 监听数据变化后重置数据
        watch(props.options,
            () => {
                chart && chart.clear();
                props.options && chart.setOption(props.options, true)
            }
        )
    })
}
</script>

<style lang='scss' scoped>
.echart {
    width: 100%;
    height: 100%;
}
</style>