const url = 'https://skogfghrpsiaibzbjgne.supabase.co/rest/v1/pokemon-table';
const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2dmZ2hycHNpYWliemJqZ25lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3OTk1MDEsImV4cCI6MjA4MDM3NTUwMX0.Oli4Picy3nPZlxj0KUycXEyI2fu4AXiYJoKzg9TUh0Q';

async function fetchPokemonData() {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'apikey': apiKey,
        }
    });
    const data = await response.json();
    createPokemonCard(data);
}
function createPokemonCard(pokemon) {
    pokemon.forEach(element => {
        const display = document.getElementById('display');
        display.innerHTML += `
        <div col class="col mb-4">
        <div class="card border-4" style="width: 18rem;">
  <img src="${element.img_url}" class="card-img-top" alt="${element.name}">
  <div class="card-body">
    <h5 class="card-title fw-bold">${element.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   </div>
  </div>
</div>`;
    });
}