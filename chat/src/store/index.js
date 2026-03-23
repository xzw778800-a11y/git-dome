import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chatList:[
      {data:"我是chat01",type:"chat01"},
      {data:"我是chat02",type:"chat02"}
    ]
  },
  getters: {
    getChatList(state){
      return state.chatList
    }
  },
  mutations: {
    add(state,myValue){
      state.chatList.push(myValue)
    },
    
  },
  actions: {
  },
  modules: {
  }
})
