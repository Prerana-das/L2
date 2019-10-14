<template>
    <div class="container">
        <form v-on:submit.prevent>
            <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" class="form-control" v-model="form.name" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" >
            </div>
            <div class="form-group">
                <label for="exampleInputEmail2">Category</label>
                <input type="text" class="form-control" v-model="form.category" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="" >
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Price</label>
                <input type="number" class="form-control" v-model="form.price" id="exampleInputPassword1" placeholder="" >
            </div>
            
            <button type="submit" class="btn btn-primary" @click="formSubmit">Submit</button>
            </form>
    </div>
</template>
<script>
export default {
    data(){
        return{
            form:{
                name:'',
                category:'',
                price:'',
            }
        }
    },
    methods:{
        async formSubmit(){
            if(this.form.name == '') return this.i("Product Name is Empty!")
            if(this.form.category == '') return this.i("Product Category is empty!")
            if(this.form.price == '') return this.i("Product Price is Empty!")

            const res = await this.callApi('post','add_product',this.form)
            if(res.status == 201){
                this.s(' Product have been successfully added!')
                this.$router.push('/')
            }
            else{
                this.swr()
            }

        },
    }
}
</script>