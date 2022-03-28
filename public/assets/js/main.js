const weatherForm = document.querySelector('#weatherForm');
const search = document.querySelector('#weatherForm input');
const baseURL = 'http://localhost:3333/weather'
const snackSuccess = document.querySelector("#success");
const snackError = document.querySelector("#error");

const hideMessages = () => {
  snackSuccess.setAttribute("style", "display: none;");
  snackError.setAttribute("style", "display: none;");
}

const isLoading = (loading) => {
  let display = 'none';
  if (loading) {
    display = 'block'
  }
  document.querySelector('.loading').setAttribute("style", `display: ${display};`);
}

const onSuccess = (data) => {
  isLoading(false);
  const {
    address: location,
    temperature,
    feelslike,
    error
  } = data;
  if (error) {
    return onError(data);
  }
  const msg = `Em ${location} faz ${temperature} graus celsius 
  com sensação de ${feelslike}.`;
  snackSuccess.innerHTML = `<p>${msg}</p>`;
  snackSuccess.setAttribute("style", "display: block;");

}

const onError = (err) => {
  isLoading(false)
  console.log(err);
  snackError.innerHTML = `<p>${err.error}</p>`;
  snackError.setAttribute("style", "display: block;");
}

weatherForm.addEventListener('submit', (event) => {
  event.preventDefault();
  isLoading(true);
  hideMessages()
  const location = search.value;
  fetch(`${baseURL}?location=${location}`)
    .then(res => res.json().then(data => onSuccess(data)))
    .catch(err => onError(err));
})