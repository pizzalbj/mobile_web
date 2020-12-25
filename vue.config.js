// 全局 CLI 配置
// https://cli.vuejs.org/zh/config/#%E5%85%A8%E5%B1%80-cli-%E9%85%8D%E7%BD%AE
module.exports = {
    // 部署应用包时的基本URL
    publicPath: '/',
    // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录
    outputDir: 'dist',
    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    assetsDir: '',
    css: {
        // 如果想在 JavaScript 中作为 CSS Modules 导入 CSS 或其它预处理文件，该文件应该以 .module.(css|less|sass|scss|styl) 结尾
        // 如果你想去掉文件名中的 .module，可以设置 vue.config.js 中的 css.requireModuleExtension 为 false
        requireModuleExtension: false,
        // 给 sass-loader 传递选项
        loaderOptions: {
            sass: {
                // 定义颜色变量 向所有 Sass/Less 样式传入共享的全局变量！！注意不是全局样式
                // @/ 是 src/ 的别名
                additionalData: `@import "~@/assets/css/variables.scss";`
            }
        }
    }
}