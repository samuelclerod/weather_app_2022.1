const weatherForm = document.querySelector('#weatherForm');
const search = document.querySelector('#weatherForm input');
const baseURL = 'http://localhost:3333/weather'

weatherForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const location = search.value;
  fetch(`${baseURL}?location=${location}`)
    .then(res => {
      res.json().then(data => console.log(data))
    })
    .catch(err => {
      console.log(err);
    });
})