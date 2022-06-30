//防抖
export function debounce(fn, t = 100) {
    let lastTime;
    return function () {
        clearTimeout(lastTime);
        const [that, args] = [this, arguments];
        lastTime = setTimeout(() => {
            fn.apply(that, args);
        }, t);
    }
}