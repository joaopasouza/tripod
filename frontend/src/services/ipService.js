import axios from 'axios';

const url = 'https://api.ipify.org?format=json';

export async function getIpAddress() {
  try {
    const { data } = await axios.get(url);
    return [data, null];
  } catch (error) {
    return [null, error];
  }
}
