<template lang="">
    <div>
        <button @click="allDelete">Clear All!</button>
    </div>
</template>
<script>
export default {
    methods: {
        allDelete: function() {
            this.$store.commit('allDelete')
        }
    },
}
</script>
<style lang="">
    
</style>