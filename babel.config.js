module.exports = {
  // presets: 预先调整
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    // babel-plugin-import 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式
    // 配置 style: true 则在项目编译阶段，可以对引入的 antd 样式文件进行编译，从而可以压缩打包尺寸；而配置style: "css", 则直接引入经过打包后的 antd 样式文件
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
