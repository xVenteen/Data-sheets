<template>
    <div class="main_top_middle_bottom">
        <SystemTypeQuantityRatio></SystemTypeQuantityRatio>
        <WaringRatio></WaringRatio>
    </div>
</template>

<script setup>
import SystemTypeQuantityRatio from './BoxItem/SystemTypeQuantityRatio.vue';
import WaringRatio from './BoxItem/WaringRatio.vue';
</script>

<style lang='scss' scoped>
.main_top_middle_bottom {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 49.8%;
}
</style>