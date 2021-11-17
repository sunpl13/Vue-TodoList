<template>
  <div id="app">
    <TodoHeader/>
    <TodoInput/>
    <TodoList/>
    <TodoFooter/>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
   
  name: 'App',
 components : {
   TodoHeader,
   TodoInput,
   TodoList,
   TodoFooter
 },

}
</script>

<style>
#app {
  width: 300px;
  height: 600px;
  margin:  0 auto;
}
</style>
