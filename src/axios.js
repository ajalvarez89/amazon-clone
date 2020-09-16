import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001/e-clone-ad8a2/us-central1/api' //THE API (clould function ) URL
});

export default instance;
