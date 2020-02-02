import axios from 'axios';

const url = 'http://localhost:3333';

export async function login({ email, password }) {
  try {
    const response = await axios.post(`${url}/login`, { email, password });
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
