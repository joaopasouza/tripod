import axios from 'axios';

const url = 'http://localhost:3333';

export async function login({ email, password }) {
  try {
    const response = await axios.post(`${url}/login`, { email, password });
    return [response.data, null];
  } catch (error) {
    return [null, error];
  }
}

export async function create(data) {
  try {
    const response = await axios.post(`${url}/register`, data);
    return [response.data, null];
  } catch (error) {
    return [null, error];
  }
}
