<template>
  <div class="main_con">
    <div class="main_top">
      <div class="main_top_side">
        <BasicResourcesDisplay></BasicResourcesDisplay>
        <OfflineResources></OfflineResources>
      </div>
      <div class="main_top_middle">
        <TopMiddleTittle></TopMiddleTittle>
        <TopMiddleMain></TopMiddleMain>
        <TopMiddleBottom></TopMiddleBottom>
      </div>
      <div class="main_top_side">
        <HostHesourcesNumber></HostHesourcesNumber>
        <TopSideBox></TopSideBox>
      </div>
    </div>
    <div class="main_middle">
      <MiddleGroup></MiddleGroup>
    </div>
    <div class="main_bottom">
      <div class="main_bottom_top">
        <BottomTopBox></BottomTopBox>
        <BottomTopBox></BottomTopBox>
        <BottomTopBox></BottomTopBox>
      </div>
      <div class="main_bottom_bottom">
        <BottomBottomSideBox></BottomBottomSideBox>
        <BottomBottomMiddleBox></BottomBottomMiddleBox>
        <BottomBottomMiddleBox></BottomBottomMiddleBox>
        <BottomBottomSideBox></BottomBottomSideBox>
      </div>
    </div>
  </div>
</template>

<script setup>
import TopSideBox from '../components/TopSideBox.vue';
import TopMiddleTittle from '../components/TopMiddle/TopMiddleTittle.vue'
import TopMiddleMain from '../components/TopMiddle/TopMiddleMain.vue'
import TopMiddleBottom from '../components/TopMiddle/TopMiddleBottom/TopMiddleBottom.vue'
import MiddleGroup from '../components/MiddleGroup.vue';
import BottomTopBox from '../components/BottomTopBox.vue';
import BottomBottomSideBox from '../components/BottomBottomSideBox.vue';
import BottomBottomMiddleBox from '../components/BottomBottomMiddleBox.vue';

import BasicResourcesDisplay from './ResourcesDisplay/BasicResourcesDisplay.vue'
import HostHesourcesNumber from './ResourcesDisplay/HostHesourcesNumber.vue'
import OfflineResources from './ResourcesDisplay/OfflineResources.vue'

</script>

<style lang='scss'>
body {
  margin: 0;
  padding: 0;
  background-color: #1d2b56;
  width: 100vw;
  height: 100vh;
}

// div {
//   border: 1px solid white;
// }

.main_con {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px auto;
  width: 97vw;
  height: 97vh;

  .main_top {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 37%;

    .main_top_side {
      width: 17.3%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .main_top_middle {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      // justify-content: space-between;
      align-items: center;
      width: 63%;
      height: 100%;
    }
  }

  .main_middle {
    width: 100%;
    height: 7.1%;
    margin-top: 0.6%;
  }

  .main_bottom {
    height: 55.9%;
    width: 100%;
    margin-top: 1.5%;

    .main_bottom_top {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 36.5%;
    }

    .main_bottom_bottom {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 54%;
      margin-top: 1.5%;

    }
  }
}
</style>