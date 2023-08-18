import Notiflix from 'notiflix';
import { fetchImages } from './images-api';

const refs = {
  gallery: document.querySelector('.gallery '),
  loadMore: document.querySelector('.js-load-more'),
};

let query = '';
let page = 1;

fetchImages()
  .then(response => {
    refs.gallery.insertAdjacentHTML('beforeend', createMarkup(response.hits));
    // console.log(createMarkup(response.hits));
    console.log(response);
  })
  .catch(onFetchError);

function createMarkup(arr) {
  return arr
    .map(
      ({
        webformatURL,
        id,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<a class="gallery__link" href="${largeImageURL}">
          <div class="gallery-item" id="${id}">
            <img class="gallery-item__img" src="${webformatURL}" alt="${tags}" loading="lazy" />
            <div class="info">
              <p class="info-item"><b>Likes</b>${likes}</p>
              <p class="info-item"><b>Views</b>${views}</p>
              <p class="info-item"><b>Comments</b>${comments}</p>
              <p class="info-item"><b>Downloads</b>${downloads}</p>
            </div>
          </div>
        </a>`;
      }
    )
    .join('');
}

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
