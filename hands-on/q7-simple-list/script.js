document.querySelector('#load-btn').addEventListener('click', () => {
  (async () => {
    let response1 = await axios.get('https://anapioficeandfire.com/api/books/');
    let books = response1.data;

    for (let j = 0; j < books.length; j++) {
      let povApiArray = books[j].povCharacters;
      let povNamesArray = [];

      for (let i = 0; i < povApiArray.length; i++) {
        let povAPI = povApiArray[i];
        let response2 = await axios.get(povAPI);
        console.log(response2.data.name);

        povNamesArray.push(response2.data.name);
      }

      // function test() {
      //   x = j + 1;
      //   return `<li>${x}</li>`;
      // }

      document.querySelector('#content').innerHTML += `
      <p>
        <li>Title: ${books[j].name}</li>
        <li>Number of Pages: ${books[j].numberOfPages}</li>
        <li>POV Characters:</li>
        <ul>${povNamesArray}</ul>
      </p>
      `;
    }
  })();
});
