import axios from 'axios';

const instance = axios.create({
  baseURl: '...' //THE API (clould function ) URL
});

export default instance;
