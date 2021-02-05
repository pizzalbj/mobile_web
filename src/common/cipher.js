// https://www.cnblogs.com/tommymarc/archive/2004/01/13/13187435.html

import CryptoJS from "crypto-js";
import { CONSTANT_CRYTOJS } from "../constant";

var key = CryptoJS.enc.Utf8.parse(CONSTANT_CRYTOJS.CRYPTO_KEY);
var iv = CryptoJS.enc.Utf8.parse(CONSTANT_CRYTOJS.CRYPTO_IV);

// 编码
function utf8_to_b64(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
}

// 解码
function b64_to_utf8(str) {
    return decodeURIComponent(escape(window.atob(str)));
}

// aes加密
function encrypt(word) {
    let encrypted = "";
    if (typeof word == "string") {
        const srcs = CryptoJS.enc.Utf8.parse(word);
        encrypted = CryptoJS.AES.encrypt(srcs, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
    } else if (typeof word == "object") {
        // 对象格式的转成json字符串
        const data = JSON.stringify(word);
        const srcs = CryptoJS.enc.Utf8.parse(data);
        encrypted = CryptoJS.AES.encrypt(srcs, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
    }
    return encrypted.ciphertext.toString();
}

// aes解密
function decrypt(word) {
    const encryptedHexStr = CryptoJS.enc.Hex.parse(word);
    const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    const decrypt = CryptoJS.AES.decrypt(srcs, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
}

export { utf8_to_b64, b64_to_utf8, encrypt, decrypt }