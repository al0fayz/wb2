<template>
    <div>
        <Navbar />
        <SidebarAdmin />
        <Footer />
    </div>
</template>
<script>
import Footer from '../../layout/Footer.vue';
import Navbar from '../../layout/Navbar.vue';
import SidebarAdmin from '../../layout/SidebarAdmin.vue';

export default {
    data(){
        return{

        }
    },
    created(){

    },
    components:{
        Footer,
        Navbar,
        SidebarAdmin,
    }
}
</script>