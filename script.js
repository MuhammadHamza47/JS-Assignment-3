(async function(){
    const response = await fetch("./data.json");
    const data = await response.json();

    const genElement = document.getElementById("genre")
    const yearElement = document.getElementById("year")
    const langElement = document.getElementById("languages")
    const ratingElement = document.getElementById("rating")
    const btnElement = document.getElementById("searchBtn")

    function displaySearchResults (results) {
        listElem.innerHTML = "";
        results.forEach(function (movies) {
          const li = document.createElement("li");
          const listItem = `
              <h2 class="title">${recipe.title}</h2>
              <div class="description">${recipe.description}</div>
          `;
          li.innerHTML = movies.title;
         
          listElem.appendChild(li);
        })
      }

      function search(){
        const query = genElement.value;
        const results = data.filter(function (movies){
            return (movies.title.tolowerCase().includes(query) && movies.genres.toString().includes(genres) && 
            movies.
        )})
        displaySearchResults(results);
      }
      btnElement.addEventListener("click", search);
})()