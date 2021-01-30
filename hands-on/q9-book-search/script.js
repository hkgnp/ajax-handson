let url = 'https://openlibrary.org/search.json';

let search = document.querySelector('#booktitle');

document.querySelector('#submit').addEventListener('click', () => {
  (async () => {
    let response = await axios.get(url, {
      params: {
        title: search.value,
      },
    });

    let results = response.data.docs;
    console.log(results);

    if (results.length != 0) {
      for (let r of results) {
        document.querySelector('#results').innerHTML += `
              <p style="border: 1px solid black">
              <li>${r.title}</li>
              <li>${r.author_name}</li>
              </p>
              `;
      }
    } else {
      document.querySelector('#results').innerHTML = `No results found.`;
    }
  })();
});
