<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link to="/" class="nav-link"   >
                        Home <span class="sr-only">(current)</span>
                    </router-link>
                </li>
                <li class="nav-item active">
                    <router-link to="/add_product" class="nav-link"   >
                        Add Product <span class="sr-only">(current)</span>
                    </router-link>
                </li>
                <li class="nav-item">
                     <router-link to="/about" class="nav-link"   >
                        About 
                    </router-link>
                </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>


export default {
  
  created(){
     
  },

}
</script>