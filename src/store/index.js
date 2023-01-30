import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state: {
        allBoyz:[]
    },
    mutations: {
        mutationsGetAllBoyz(state,payload){
            state.allBoyz = payload
        }

    },
    actions: {
        getAllBoyz(context){
            axios.get('https://raw.githubusercontent.com/lienyun/20221016-atomboyz/c5f674518de49fea6d53ab4087f85d7acfc75c05/public/namelist.json')
            .then((res) => {
                context.commit('mutationsGetAllBoyz',res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }
})

export default store