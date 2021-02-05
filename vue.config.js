var path = require('path');

// 全局 CLI 配置
// https://cli.vuejs.org/zh/config/#%E5%85%A8%E5%B1%80-cli-%E9%85%8D%E7%BD%AE
module.exports = {
    // 部署应用包时的基本URL
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录
    outputDir: 'dist',
    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    assetsDir: '',
    css: {
        // 如果想在 JavaScript 中作为 CSS Modules 导入 CSS 或其它预处理文件，该文件应该以 .module.(css|less|sass|scss|styl) 结尾
        // 如果你想去掉文件名中的 .module，可以设置 vue.config.js 中的 css.requireModuleExtension 为 false
        requireModuleExtension: true,  // false 会导致vant-ui样式不出来
        // 给 sass-loader 传递选项
        loaderOptions: {
            sass: {
                // 定义颜色变量 向所有 Sass/Less 样式传入共享的全局变量！！注意不是全局样式
                // @/ 是 src/ 的别名
                additionalData: `@import "~@/assets/css/variables.scss";`
            },
            postcss: {
                plugins: [
                    // vant是px的，转换成rem，并且1rem=16px。系统使用rem为单位。
                    // TODO: vant使用px为单位，按照固定的1rem=16px来转换，但是实际上在不同的手机上并不是都是1rem=16px的，how to solve it 
                    require('postcss-plugin-px2rem')({
                        // 成功把 vant 的 .van-button--normal 的 font-size: 14px 转换成 0.875rem。
                        // 但是只能转换 class 的 px，不能转换 style 的 px。
                        // TODO: how to solve it ?
                        rootValue: 16,
                        // exclude(排斥): 默认 false。可以（reg）利用正则表达式排除某些文件夹，例如 /(node_modules)/ or /(node_modules\/vant)/。
                        exclude: false,
                        //（布尔值）允许在媒体查询中转换px。
                        mediaQuery: false,
                        // 设置要替换的最小像素值(3px会被转rem)。默认0
                        minPixelValue: 3
                    })
                ]
            }
        }
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        host: '0.0.0.0',
        compress: true,
        port: 9000
    },
    configureWebpack: {
        performance: {
            hints: 'warning',
            // 入口起点的最大体积 整数类型（以字节为单位）
            maxEntrypointSize: 50000000,
            // 生成文件的最大体积 整数类型（以字节为单位 300k）
            maxAssetSize: 30000000,
            // 只给出 js 文件的性能提示
            assetFilter: function (assetFilename) {
                return assetFilename.endsWith('.js')
            }
        }
    }
}