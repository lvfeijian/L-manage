/**
 * 邮箱
 * @param {*} s
 */
export function isEmail(s) {
    return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}

/**
 * 手机号码
 * @param {*} s
 */
export function isMobile(s) {
    return /^((\+?86)|(\(\+86\)))?(1[3-9][0-9]{9})$/.test(s)
}
/**
 * 正整数
 * @param {*} s
 */
export function isInt(s) {
    return /^\d+(?=\.{0,1}\d+$|$)/.test(s)
}

/**
 * 电话号码
 * @param {*} s
 */
export function isPhone(s) {
    return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
}

/**
 * 密码
 * @param {*} s
 */
export function isPassword(s) {
    return /^(?=.*[a-z])(?=.*\d)[^]{6,12}$/.test(s)
}