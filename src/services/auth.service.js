import axios from 'axios';
import { config } from '../config/config';

const API_URL = config.API_URL;
console.log(API_URL, process.env.API_URL)
class AuthService {
  login(user) {
    return axios
      .post(API_URL + '/api/v2/login', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        console.log(response)
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }
}

export default new AuthService();
