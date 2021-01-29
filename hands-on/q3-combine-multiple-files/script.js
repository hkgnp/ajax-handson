document.querySelector('#load-btn').addEventListener('click', () => {
  (async () => {
    let response1 = await axios.get('file1.txt');
    let response2 = await axios.get('file2.txt');

    document.querySelector('#content').innerHTML = `${response1.data}

${response2.data}`;
  })();
});
