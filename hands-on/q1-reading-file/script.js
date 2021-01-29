document.querySelector('#load-btn').addEventListener('click', () => {
  (async () => {
    let response = await axios.get('contact.txt');
    document.querySelector('#content').innerHTML = response.data;
  })();
});
