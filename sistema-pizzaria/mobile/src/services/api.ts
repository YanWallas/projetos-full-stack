import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://localhost:3333'
  baseURL: 'http://192.168.0.11:3333'
  //baseURL: 'http://192.168.87.102:3333'
})

export { api };