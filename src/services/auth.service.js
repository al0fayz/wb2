import axios from 'axios';

const API_URL = process.env.VUE_APP_API_URL;

class AuthService {
  login(user) {
    return axios
      .post(API_URL + '/api/login', {
        username: user.username,
        password: user.password
      })
      .then((res) => {
        if (res.data.auth && res.data.user) {
          localStorage.setItem('user', JSON.stringify(res.data));
        }

        return res.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }
}

export default new AuthService();
