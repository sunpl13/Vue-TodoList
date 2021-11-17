<template lang="">
    <div>
        <input placeholder="할 일을 입력하세요." v-model="todo"/>
        <button @click="create">추가하기</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            todo : "",
            id : this.$store.state.id
        }
    },
    methods: {
        //생성
        create() {
            this.$store.commit("add", this.todo);
            this.todo = ""
        }
    },
}
</script>
<style lang="">
    
</style>