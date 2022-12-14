"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMobileOrPhone = exports.isUUID = exports.isEmail = void 0;
function isEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
exports.isEmail = isEmail;
function isUUID(uuid) {
    const pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return pattern.test(uuid);
}
exports.isUUID = isUUID;
function isMobileOrPhone(value) {
    const phones = {
        'en-US': /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,
        'de-DE': /^(\+?49[ \.\-])?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
        'el-GR': /^(\+?30)?(69\d{8})$/,
        'en-AU': /^(\+?61|0)4\d{8}$/,
        'en-GB': /^(\+?44|0)7\d{9}$/,
        'en-HK': /^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,
        'en-IN': /^(\+?91|0)?[789]\d{9}$/,
        'en-NZ': /^(\+?64|0)2\d{7,9}$/,
        'en-ZA': /^(\+?27|0)\d{9}$/,
        'en-ZM': /^(\+?26)?09[567]\d{7}$/,
        'es-ES': /^(\+?34)?(6\d{1}|7[1234])\d{7}$/,
        'es-PA': /^(\+?507)\s?(6{1})(\d{3})\-?(\d{4})$/,
        'fi-FI': /^(\+?358|0)\s?(4(0|1|2|4|5)?|50)\s?(\d\s?){4,8}\d$/,
        'fr-FR': /^(\+?33|0)[67]\d{8}$/,
        'nb-NO': /^(\+?47)?[49]\d{7}$/,
        'nn-NO': /^(\+?47)?[49]\d{7}$/,
        'pt-BR': /^(\+?55|0)\-?[1-9]{2}\-?[2-9]{1}\d{3,4}\-?\d{4}$/,
        'pt-PT': /^(\+?351)?9[1236]\d{7}$/,
        'ru-RU': /^(\+?7|8)?9\d{9}$/,
        'vi-VN': /^(\+?84|0)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/,
        'zh-CN': /^(\+?0?86\-?)?((13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7})$/,
        'zh-TW': /^(\+?886\-?|0)?9\d{8}$/,
    };
    return Object.keys(phones).find((locale) => phones[locale].test(value))
        ? true
        : false;
}
exports.isMobileOrPhone = isMobileOrPhone;
//# sourceMappingURL=validator.util.js.map