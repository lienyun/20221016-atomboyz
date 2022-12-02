import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state: {
        allBoyz:[]
    },
    mutations: {
        mutationsGetAllBoyz(state,payload){
            console.log('mutations run!')
            state.allBoyz = payload
        }

    },
    actions: {
        getAllBoyz(context){
            axios.get('https://raw.githubusercontent.com/lienyun/20221016-atomboyz/gh-pages/namelist.json')
            .then((res) => {
                console.log('actions',res.data)
                context.commit('mutationsGetAllBoyz',res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }
})

export default store