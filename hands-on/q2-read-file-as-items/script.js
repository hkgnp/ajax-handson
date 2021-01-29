document.querySelector('#load-btn').addEventListener('click', () => {
  (async () => {
    let response = await axios.get('items.txt');

    splitResponse = response.data.split(',');
    console.log(splitResponse);

    for (let f in splitResponse) {
      document.querySelector('#content').innerHTML += `
      <li>${splitResponse[f]}</li>
      `;
    }
  })();
});
