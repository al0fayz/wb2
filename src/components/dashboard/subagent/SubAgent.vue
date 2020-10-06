<template>
    <div>
        <div class="hold-transition sidebar-mini layout-fixed">
            <div class="wrapper">
                <Navbar />
                <SidebarSubAgent />
                <div class="content-wrapper">
                    <router-view />
                </div>
                <Footer />
            </div>
        </div>
    </div>
</template>
<script>
import Footer from '../../layout/Footer.vue';
import Navbar from '../../layout/Navbar.vue';
import SidebarSubAgent from '../../layout/SidebarSubAgent.vue';

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
        SidebarSubAgent,
    }
}
</script>