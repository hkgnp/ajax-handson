document.querySelector('#load-btn').addEventListener('click', () => {
  (async () => {
    let response1 = await axios.get('https://anapioficeandfire.com/api/books/');
    let books = response1.data;

    for (let j = 0; j < books.length; j++) {
      async function test() {
        let povApiArray = books[0].povCharacters;
        for (let i = 0; i < povApiArray.length; i++) {
          let povHTML;
          let povAPI = povApiArray[i];
          let response2 = await axios.get(povAPI);
          let povData = response2.data.name;
          console.log(povData);
        }
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
        <ul>${test()}</ul>
      </p>
      `;
    }
  })();
});
