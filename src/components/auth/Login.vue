<template>
<div class="hold-transition login-page">
  <div class="login-box">
    <div class="login-logo">
      <a href="/login">
        <b>Welcome</b>
      </a>
    </div>
    <!-- /.login-logo -->
    <div class="card">
      <div class="card-body login-card-body">
        <form action="/login" method="post">
          <div class="input-group mb-3">
            <input type="email" class="form-control" placeholder="Email" />
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-envelope"></span>
              </div>
            </div>
          </div>
          <div class="input-group mb-3">
            <input type="password" class="form-control" placeholder="Password" />
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-lock"></span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <button type="submit" @click.prevent="login" class="btn btn-primary btn-block">Sign In</button>
            </div>
          </div>
        </form>
      </div>
      <!-- /.login-card-body -->
    </div>
  </div>
  <!-- /.login-box -->
</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
      login(){
          this.$router.push('/admin/dashboard')
      },
  },
};
</script>
<style scoped>
.login-page{
    background-image: url('../../assets/img/login.jpg');
    background-size: cover;
}
</style>