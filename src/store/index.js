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
            axios.get('../namelist.json')
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