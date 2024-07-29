import axios from "axios";
const url = 'https://api.spacexdata.com/v4/launches/latest';

axios.get(url)
  .then(response => {
    console.log('Latest SpaceX Launch Data:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
