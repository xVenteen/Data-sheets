<template>
    <div class="datalist">
        <div class="list">
            <transition-group tag="ul">
                <li v-for="message in data.messages" :key="message">
                    <div class="message">{{ message.msg }}</div>
                    <div class="timer">{{ message.timer }}</div>
                </li>
            </transition-group>
        </div>

    </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue';
const data = reactive(
    {
        messages: [
            {
                msg: '2',
                timer: '2022-07-01 14:56:47'
            },
            {
                msg: '数通设备PING超时告警：101.34.81.144(3楼HP打印机)',
                timer: '2022-07-01 14:56:47'
            },
            {
                msg: '1',
                timer: '2022-07-01 14:56:47'
            },
            {
                msg: '188888',
                timer: '2022-07-01 14:56:47'
            },
        ]
    }
)
let timer = ref(null)

onMounted(() => {
    timer.value = setInterval(() => {
        setTimeout(() => {
            data.messages.push({
                msg: '44(3楼HP打印机)',
                timer: '2022-07-01 14:56:47'
            })
            if (data.messages.length >= 6)
                data.messages.shift()
        }, 1)
    }, 2000)
}),
    onUnmounted(() => {
        clearInterval(timer.value)
    })


</script>

<style lang='scss' scoped>
.datalist {
    width: 100%;
    height: 80%;
    font-size: .7vw;
    color: white;
    margin-top: 10%;

    .list {
        width: 100%;
        height: 120%;
        overflow: hidden;

        ul {
            display: flex;
            flex-direction: column;
            width: 90%;
            height: 90%;

            li {

                display: flex;
                justify-content: space-between;
                list-style-type: none;
                margin: 1.1% 0;
            }

            .v-enter,
            .v-leave-to {
                opacity: 0;
                transform: translateY(-70px);
                transition: transform 0.1s ease;

                li {
                    display: flex;
                    justify-content: space-between;
                    list-style-type: none;
                    margin: 1.1% 0;
                }
            }

            // .v-enter-active,
            // .v-leave-active {
            //     transition: all 0.2s ease // transition: all 0.6s ease;
            // }

            .v-move {
                /*下面的 .v-move和.v-leave-active 配合使用，能够实现列表后续的元素渐渐飘上来的效果*/
                transition: all 0.6s ease;
            }

            .v-leave-active {
                position: absolute;
                // display: flex;
                // justify-content: space-between;
            }
        }
    }

}
</style>