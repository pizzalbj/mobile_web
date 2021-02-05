const hosts = {
    master: {
        /* 线上环境 */
        api: "https://mbb.yayayuer.cn",
    },
    testing: {
        /* 测试环境 */
        api: "https://testing.yayayuer.com"
    },
    dev: {
        /* 本地环境 */
        api: "http://localhost:4000"
        //api: "http://192.168.0.6:4000"
    }
}

function getHost() {
    // return 'master'
    // return 'testing'
    return 'dev'
}

module.exports = {
    env: getHost(),
    host: hosts[getHost()].api
}