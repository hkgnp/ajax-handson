document.querySelector('#load-image-btn').addEventListener('click', () => {
  (async () => {
    let response = await axios.get('artwork.json');

    let artWork = response.data;
    console.log(artWork.image_url);

    document.querySelector('#artwork').innerHTML = `
        <h1>${artWork.title}</h1>
        <img class='${artWork.class}' src = '${artWork.image_url}'/>
        `;
  })();
});
