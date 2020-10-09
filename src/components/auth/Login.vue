<template>
<div class="hold-transition login-page">
  <div class="login-box">
    <div class="login-logo">
      <a href="/">
        <b>Welcome</b>
      </a>
    </div>
    <!-- /.login-logo -->
    <div class="card">
      <div class="card-body login-card-body">
        <form name="form-login">
          <div class="input-group mb-3">
              <input v-model="user.email" type="email" class="form-control" placeholder="Email" />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
          </div>
          <div class="input-group mb-3">
              <input v-model="user.password" type="password" class="form-control" placeholder="Password" />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
          </div>
          <div class="row">
            <div class="col-12">
              <button type="submit" @click.prevent="handleLogin" class="btn btn-primary btn-block" :disabled="run">Login</button>
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
import User from '../../models/user';
export default {
  data() {
    return {
      run: false,
      user: new User('', ''),
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/admin/dashboard');
    }
  },
  methods: {
    handleLogin() {
      this.run = true;
      this.$store.dispatch('auth/login', this.user).then(
        (res) => {
          console.log(res)

          this.$router.push('/admin/dashboard');
        },
        error => {
          this.run = false;
          console.log(error)
        }
      );
      this.run = false;
    }
  },
};
</script>
<style scoped>
.login-page{
    background-image: url('../../assets/img/login.jpg');
    background-size: cover;
}
</style>