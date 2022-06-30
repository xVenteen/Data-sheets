/*
 * 监听div
 */

import { debounce } from "./debounce"
import elementResizeDetectorMaker from 'element-resize-detector'
export function divListen(div, chart) {
    // let that = this
    return new Promise(() => {
        let erd = elementResizeDetectorMaker();
        erd.listenTo(document.getElementById(div), debounce(async () => {
            chart && chart.resize();
        }));
    })
}
