<template>
    <div class="container mt-4">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{{product.name}}</h5>
                <h6 class="card-subtitle mb-2 text-muted">$ {{product.price}}</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <router-link :to="`/edit_product/${product.id}`" >Edit </router-link>
                <a @click="single_products_delete" class="card-link">Delete</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            product:{}
        }
    },
    methods :{
        async single_products(){
            const res = await this.callApi('get',`product/${this.$route.params.id}`)
            if(res.status == 200){
                this.product = res.data
            }
        },


         async single_products_delete(){
            if(!confirm("Are you sure to delete this Product")){
                return;
            }
            let ob = {
                id:this.product.id
            }
            const res = await this.callApi('post','delete_product',ob)
            if(res.status == 200){
                this.i(' Product have been successfully Deleted!')
                this.$router.push(`/`)
            }
        }

        
        
    },
    created(){
        //console.log(this.$route)
        this.single_products();
    }
}
</script>