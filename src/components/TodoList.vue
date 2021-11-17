<template lang="">
    <div class = "list">
        <ul>
            <li v-for="item in todolist" :key="item.id" class="items" @click="done(item.id)">
                <div>
                <span v-if="item.checked">✓</span>
                <span v-else></span>
                {{item.title}}
                </div>
                <div>
                <button @click="deleted(item.id)">삭제</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {

    computed: {
        todolist() {
            return this.$store.state.todolist
        }
    },
    methods: {
        done : function(id) {
            this.$store.commit("checkToggle", id)
        },
        deleted : function(id) {
            this.$store.commit("delete",id)
        }
    },
}
</script>
<style>
    ul {
        list-style: none;
        padding: 0;
    }
    li {
        justify-content: space-between;
    }
    li button {
        margin-right: 20px;
    }
    span{
        margin-right: 10px;
    }
    .items {
        display: flex;
        border: 1px solid none;
    }
</style>