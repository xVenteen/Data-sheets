<template>
    <div class="main_top_middle_bottom">
        <BoxItem></BoxItem>
        <BoxItem></BoxItem>
    </div>
</template>

<script setup>
import BoxItem from './BoxItem.vue';

</script>

<style lang='scss' scoped>
.main_top_middle_bottom {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 49.8%;
}
</style>