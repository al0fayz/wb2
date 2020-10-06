<template>
    <footer class="main-footer">
        <strong>Copyright &copy; {{ year }} <a href="#">Website Builder</a></strong>
        <div class="float-right d-none d-sm-inline-block">
        <b>Version</b> 2.0
        </div>
  </footer>
</template>
<script>
export default {
    data(){
        return{
            year : '2020'
        }
    },
    created(){
        
    }
}
</script>