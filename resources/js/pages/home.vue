<template>
    <div class="container">
        <h1>All Products</h1>
        <table class="table table-dark">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Category</th>
                <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in products" :key="index">
                    <th scope="row">{{index+1}}</th>
                    <td>
                        {{item.id}}
                    </td>
                    <td>
                        <router-link :to="`/product/${item.id}`"  >{{item.name}} </router-link>
                     </td>
                     <td>{{item.category}}</td>
                    <td>{{item.price}}</td>
                </tr>
            </tbody>
            </table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            products:[]
        }
    },
    methods:{
        async all_products(){
            const res = await this.callApi('get','all_product')
            if(res.status == 200){
                this.products = res.data
            }
        }
    },
    created(){
        this.all_products();
    }
}
</script>