import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//stroe 생성
const store = new Vuex.Store({
  state: {
    todolist: [],
    id:0
  },
mutations: {
  //리스트 생성
  add(state, todo) {
    state.todolist.push({title: todo, id: state.id, checked : false})
    state.id++
    console.log(state.todolist);
  },
  //리스트 삭제
  delete(state, id) {
    state.todolist = state.todolist.filter((item) => item.id !== id)
  },
  //리스트 수정
  update(state, id, newTitle) {
    state.todolist = state.todolist.map((item) => ({
      ...item,
      title : item.id === id ? newTitle : item.title
    }))
  },
  //완료 토글
  checkToggle(state, id) {
state.todolist = state.todolist.map((item) => ({
  ...item,
  checked : item.id === id ? !item.checked : item.checked
}))
console.log(state.todolist);
  },

  allDelete(state) {
    state.todolist = []
  }
}
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
