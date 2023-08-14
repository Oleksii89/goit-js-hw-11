import axios from 'axios';
const API_KEY = '38828352-a415a8248b03313c93049703f';
axios.defaults.headers.common['x-api-key'] = API_KEY;

const BASE_URL = 'https://pixabay.com/api/';
const new_url =
  'https://pixabay.com/api/?key=38828352-a415a8248b03313c93049703f&q=yellow+flowers&image_type=photo';

function fetchImages() {
  //   return axios.get(`${new_url}`).then(resp => {
  //     console.log(resp);
  //   });
  return fetch(`${new_url}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    console.log(resp.json());
  });
}

fetchImages();
