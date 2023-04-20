import axios from 'axios';



const BASE_URL = 'https://pixabay.com';
const API_KEY = '33021124-e3386d60ac1ab8b465ffa3402';

export const fetchData = (query, page, perPage) => {
  return axios
    .get(
      `${BASE_URL}/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
    )
    .then(response => response.data)
    .catch(error => console.log(error));
};

// export const fetchData = (query, page, perPage) => {
//   return axios
//     .get(
//       `${BASE_URL}/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
//     )
//     .then(response => response.data);
// };

// const API_KEY = '31369835-3fa2149de848f1cb6ffd48aa5';
// const BASE_URL = 'https://pixabay.com';