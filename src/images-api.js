import axios from 'axios';
const API_KEY = '38828352-a415a8248b03313c93049703f';
// axios.defaults.headers.common['x-api-key'] = API_KEY;

const BASE_URL = 'https://pixabay.com/api/';
const NEW_URL =
  'https://pixabay.com/api/?key=38828352-a415a8248b03313c93049703f&q=yellow+flowers&image_type=photo';

function fetchImages() {
  const params = new URLSearchParams({
    q: 'yellow+flowers',
    image_type: 'photo',
    // orientation: 'horizontal',
    // safesearch: true,
  });
  // return axios.get(`${BASE_URL}?${params}`).then(resp => {
  //   console.log(resp);
  // });
  return axios
    .get(
      `https://pixabay.com/api/?key=38828352-a415a8248b03313c93049703f&q=yellow+flowers&image_type=photo&orientation=horizontal&safesearch=true`
    )
    .then(resp => {
      console.log(resp);
    });
  // return fetch(`${NEW_URL}`).then(resp => {
  //   if (!resp.ok) {
  //     throw new Error(resp.statusText);
  //   }
  //   console.log(resp.json());
  // });
}

// async function fetchImages() {
//   const response = await axios.get(
//     `$https://pixabay.com/api/?key=38828352-a415a8248b03313c93049703f&q=yellow+flowers&image_type=photo`
//   );
//   console.log(response.data);
// }
fetchImages().catch(error => {
  console.log(error);
});
