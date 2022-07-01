<template>
    <div class="datalist">
        <ul>
            <li v-for="message in data.messages">
                <div class="message">{{ message.msg }}</div>
                <div class="timer">{{ message.timer }}</div>
            </li>

        </ul>
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
    width: 90%;
    height: 80%;
    font-size: .7vw;
    color: white;
    margin-top: 10%;

    ul {
        display: flex;
        flex-direction: column-reverse;
        width: 100%;
        height: 100%;
        overflow: hidden;

        li {
            display: flex;
            justify-content: space-between;
            list-style-type: none;
            margin: 1.1% 0;
        }
    }
}
</style>