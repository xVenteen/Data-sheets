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
        <SystemTypeQuantityRatio></SystemTypeQuantityRatio>
      </div>
      <div class="main_top_side">
        <HostHesourcesNumber></HostHesourcesNumber>
        <HostOfflineResources></HostOfflineResources>
      </div>
    </div>
    <div class="main_middle">
      <MiddleGroup></MiddleGroup>
    </div>
    <div class="main_bottom">
      <div class="main_bottom_top">
        <MessageListLeft></MessageListLeft>
        <ServerInterfaceStatusRatio></ServerInterfaceStatusRatio>
        <MessageListRight></MessageListRight>
      </div>
      <div class="main_bottom_bottom">
        <HostWaringRatio></HostWaringRatio>
        <AllHost10MimeStatus></AllHost10MimeStatus>
        <NewUploadMemoryCpu></NewUploadMemoryCpu>
        <NewUploadDatas></NewUploadDatas>
      </div>
    </div>
  </div>
</template>

<script setup>
import TopMiddleTittle from '../components/TopMiddle/TopMiddleTittle.vue'
import TopMiddleMain from '../components/TopMiddle/TopMiddleMain.vue'
import MiddleGroup from '../components/MiddleGroup.vue';

import BasicResourcesDisplay from './TopDataDisplay/BasicResourcesDisplay.vue'
import HostHesourcesNumber from './TopDataDisplay/HostHesourcesNumber.vue'
import OfflineResources from './TopDataDisplay/OfflineResources.vue'
import HostOfflineResources from './TopDataDisplay/HostOfflineResources.vue'
import SystemTypeQuantityRatio from './TopDataDisplay/TopMiddleBottomData/TopMiddleBottomData.vue'
import ServerInterfaceStatusRatio from './MiddleDataDisplay/ServerInterfaceStatusRatio.vue';
import MessageListLeft from './MiddleDataDisplay/MessageListLeft.vue';
import MessageListRight from './MiddleDataDisplay/MessageListRight.vue';
import HostWaringRatio from './BottomDataDisplay/HostWaringRatio.vue'
import AllHost10MimeStatus from './BottomDataDisplay/AllHost10MimeStatus.vue';
import NewUploadMemoryCpu from './BottomDataDisplay/NewUploadMemoryCpu.vue';
import NewUploadDatas from './BottomDataDisplay/NewUploadDatas.vue';

</script>

<style lang='scss'>
body {
  position: relative;
  margin: 0;
  padding: 0;
  // background-color: #1d2b56;
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