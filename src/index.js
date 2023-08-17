import Notiflix from 'notiflix';
import { fetchImages } from './images-api';

fetchImages().catch(onFetchError);

function onFetchError(error) {
  console.log(error);

  Notiflix.Notify.failure(
    'Sorry, there are no images matching your search query. Please try again.',
    {
      position: 'center-center',
      timeout: 5000,
      width: '400px',
      fontSize: '24px',
    }
  );
}
