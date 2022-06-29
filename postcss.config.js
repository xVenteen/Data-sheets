module.exports = {
    plugins: {
        autoprefixer: {
            overrideBrowserslist: [
                "Android 4.1",
                "iOS 7.1",
                "Chrome > 31",
                "ff > 31",
                "ie >= 8",
                "last 10 versions", // 所有主流浏览器最近10版本用
            ],
            grid: true,
        },
        'postcss-pxtorem': {
            rootValue: 96,/* 设计稿的宽度 / 320 * 16  ,我这里的屏幕宽度是1921px */
            propList: ['*'],
            unitPrecision: 5,
            minPixelValue: 12
        }
    }
}
