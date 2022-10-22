import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://kenzie-todolist.herokuapp.com/api',
});
