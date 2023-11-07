const URL = 'https://icanhazdadjoke.com/';

const result = document.querySelector('.result');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => renderJoke());

async function renderJoke() {
  result.textContent = 'Loading...';
  try {
    const response = await fetch(URL, {
      headers: { Accept: 'application/json', 'User-Agent': 'learning app' },
    });
    if (response.ok === false) throw new Error('URL problem');
    const content = await response.json();
    result.textContent = content.joke;
  } catch (err) {
    result.textContent = `il y a une erreur: ${err.message}`;
  }
}

renderJoke();
