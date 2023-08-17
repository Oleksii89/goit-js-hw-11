import axios from 'axios';
const API_KEY = '38828352-a415a8248b03313c93049703f';

const BASE_URL = 'https://pixabay.com/api/';

async function fetchImages() {
  const params = new URLSearchParams({
    q: 'yellow+flowers',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const response = await axios
    .get(`${BASE_URL}?key=${API_KEY}&${params}`)
    .then(response => {
      // return response.data;
      console.log(response.data);
    });
}

export { fetchImages };
