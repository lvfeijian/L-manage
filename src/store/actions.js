import types from '@/store/constants/types'
import axios from '@/lib/ajax'

export default{
   [types.GET_MENU_LIST](context){
       axios({
           method:'get',
           url:'menus'
       }).then(res => {
           console.log(res.data);
           if(res.meta.status === 200){
            context.commit(types.GET_MENU_LIST,res.data)
           }
       })
   }
}