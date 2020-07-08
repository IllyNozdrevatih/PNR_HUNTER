<template>
    <v-card>
        <h3>{{ item.title }}</h3>
        <img 
        v-if="item.url"
        :src="item.images.downsized.url"
        >
    </v-card>
</template>

<script>
export default {
    name: 'Item',
    props: ['item']
}
</script>

<style lang="scss">
    .v-sheet.v-card {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;    
        padding: 5px;  
        display: flex;
        flex-flow: column;

        h3 {
            margin-bottom: 3px;
        }
        img {
            max-width: 100%;
            width: auto;
            height: auto;
        }
    }
</style>