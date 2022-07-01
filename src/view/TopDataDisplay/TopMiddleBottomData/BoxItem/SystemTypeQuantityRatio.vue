<template>
<BoxItem title="系统类型数量占比">
<Echarts echartsId="systemtypequantityratio" eWidth="100%" eHeight="85%" :options="eOptionsCurve" style="font-size: .7vw">
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
  color:['#38eb70','#2e8cff','#0efcff','#858ff8','#fd9133','#f7e270'],
  legend: {
    top: '4%',
    left:'50%',
    // bottom:,
    orient: 'center',
    textStyle:{
        color:'#ffffff',
        fontSize:'8px'
    },
    itemHeight:14,
    itemWidth:14,
    itemGap:10
    // bottom: 0,
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['60%', '63%'],
      
      // avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        scaleSize:12,
      },
      labelLine: {
        show: false
      },
      center:['25%','45%'],
      data: [
        { value: 1048, name: 'windows', selected: true },
        { value: 735, name: 'centos'},
        { value: 580, name: 'redhat' },
        { value: 484, name: 'ubuntu' },
        { value: 300, name: 'debian' },
        {value:200,name:'其他Linux' }
      ]
    }
  ]
}
)
</script>

<style lang='scss' scoped>

</style>