const types = [
    'SET_TOKEN',//设置token和account
    'DEL_TOKEN',//删除token和account
    'SET_PROGRESS',
    'GET_WELCOME',//欢迎页面的数据
]
const typesObj = {}
types.forEach(type => typesObj[type] = type)
export default typesObj