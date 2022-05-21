const KEY = '25723466-237a46130ce218f798049a33b';

async function fetchImages({ query, page }) {
  const respons = await fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );
  const parsedRespons = await respons.json();
  return parsedRespons;
}

export default fetchImages;
