document.querySelector('#load-users-btn').addEventListener('click', () => {
  (async () => {
    let response = await axios.get('users.json');
    let users = response.data.users;

    for (let u of users) {
      document.querySelector('#all-users').innerHTML += `
        <p class='user'>
        First Name: ${u.firstName}
        <br/>
        Last Name: ${u.lastName}
        <br/>
        Email: ${u.emailAddress}
        </p>
        `;
    }
  })();
});

document.querySelector('#search-btn').addEventListener('click', () => {
  (async () => {
    let response = await axios.get('users.json');
    let users = response.data.users;
    let searchBox = document.querySelector('#search');

    for (let u of users) {
      if (searchBox.value == u.userId) {
        document.querySelector('#all-users').innerHTML = `
      <p class='user'>
      First Name: ${u.firstName}
      <br/>
      Last Name: ${u.lastName}
      <br/>
      Email: ${u.emailAddress}
      </p>
      `;
      }
    }
  })();
});
