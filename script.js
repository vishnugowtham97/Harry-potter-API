// Fetch data from Harry Potter API
fetch("https://hp-api.onrender.com/api/characters")
  .then(response => response.json())
  .then(data => {
    const characters = document.getElementById("characters");
    // Loop through data and create a card for each character
    data.forEach(character => {
      const card = document.createElement("div");
      card.className = "card mb-4";
      card.innerHTML = `
        <img src="${character.image}" class="card-img-top" alt="${character.name}">
        <div class="card-body">
          <h5 class="card-title">${character.name}</h5><hr/>
          <p class="card-text"><b>Gender:</b> ${character.gender}</p>
          <p class="card-text"><b>House:</b> ${character.house}</p>
          <p class="card-text"><b>Ancestry:</b> ${character.ancestry}</p>
          <p class="card-text"><b>wand:</b> ${character.wand.core}</p>
        </div>
      `;
      
      characters.appendChild(card); 
      
    });
  })
  .catch(error => console.error(error));
