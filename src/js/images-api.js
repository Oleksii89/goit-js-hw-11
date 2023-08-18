import axios from 'axios';
const API_KEY = '38828352-a415a8248b03313c93049703f';

const BASE_URL = 'https://pixabay.com/api/';

async function fetchImages(query, page) {
  const params = new URLSearchParams({
    q: 'yellow+flowers',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
  });

  const response = await axios.get(`${BASE_URL}?key=${API_KEY}&${params}`);
  return response.data;
}

export { fetchImages };
