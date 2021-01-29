let url = 'https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand';

document.querySelector('#random').addEventListener('click', () => {
  (async () => {
    let response = await axios.get(url);
    let quotes = response.data;

    // Set Random Number for quoteOfTheDay
    let i = Math.floor(Math.random() * 10);

    let quoteOfTheDay = quotes[i]['content']['rendered'];
    document.querySelector('#quote').innerHTML = quoteOfTheDay;
  })();
});
