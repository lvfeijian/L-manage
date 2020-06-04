const types = [
    'SET_TOKEN',//设置token和account
    'DEL_TOKEN',//删除token和account
    'SET_PROGRESS',
    'GET_WELCOME',//欢迎页面的数据
    'GET_WELCOME_CHART',//欢迎界面的charts数据
    'GET_MASSIFLIST',//果园列表的数据
    'ADD_GARDEN_DATA',//添加果园
    'GET_GARDEN_LIST',//通过id获取果园数据
]
const typesObj = {}
types.forEach(type => typesObj[type] = type)
export default typesObj