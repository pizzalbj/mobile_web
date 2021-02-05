// 加密的key暴露在js中，服务端返回？还是再加密
const CONSTANT_CRYTOJS = {
    CRYPTO_KEY: "1234567890000000", // 密钥 十六位
    CRYPTO_IV: "1234567890000000" // 密钥偏移量 十六位
}

export { CONSTANT_CRYTOJS }