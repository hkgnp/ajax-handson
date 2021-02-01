let url = 'https://randomuser.me/api/?results=10';

document.querySelector('#load-btn').addEventListener('click', () => {
  (async () => {
    let response = await axios.get(url);
    let randomUsers = response.data.results;
    console.log(randomUsers);

    for (let u of randomUsers) {
      document.querySelector('#users').innerHTML += `
      <p style = 'border: 1px solid black'>
      <li><b>First Name:</b> ${u.name.first}</li>
      <li><b>Last Name:</b> ${u.name.last}</li>
      <li><b>City:</b> ${u.location.city}</li>
      <li><b>Photo:</b> <img src=${u.picture.thumbnail} alt='thumbnail'></li>
      </p>
      `;
    }
  })();
});
