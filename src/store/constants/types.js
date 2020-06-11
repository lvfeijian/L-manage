const types = [
    'SET_TOKEN',//设置token和account
    'DEL_TOKEN',//删除token和account

    //main界面
    'GET_MENU_LIST',//获取左侧导航数据

    //home模块
    'GET_USER_LIST',//获取数据列表数据
    'CHANGE_CURRENT_PAGE',//改变页码
    'CHANGE_PAGE_SIZE',//改变每页的数据个数
    'ADD_USER_LIST',//添加用户

    //orchard模块
    'GET_ROLE_LIST',//获取角色列表
]
const typesObj = {}
types.forEach(type => typesObj[type] = type)
export default typesObj