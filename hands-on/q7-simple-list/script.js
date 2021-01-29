document.querySelector('#load-btn').addEventListener('click', () => {
  (async () => {
    let response1 = await axios.get('https://anapioficeandfire.com/api/books/');
    let books = response1.data;

    for (let b of books) {
      async function getPOV(b) {
        for (let eachPOV of b.povCharacters) {
          let response2 = await axios.get(eachPOV);
          let povData = response2.data.name;
          console.log(povData);
          document.querySelector('#ul').innerHTML = povData;
        }
      }

      // function test() {
      //   x = j + 1;
      //   return `<li>${x}</li>`;
      // }

      document.querySelector('#content').innerHTML += `
      <p>
        <li>Title: ${b.name}</li>
        <li>Number of Pages: ${b.numberOfPages}</li>
        <li>POV Characters:</li>
        <ul id="ul">${getPOV(b)}</ul>
      </p>
      `;
    }
  })();
});
