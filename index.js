async function display(){
    let name=document.getElementById("search").value
    let URL=await fetch(`https://search.imdbot.workers.dev/?q=${name}`)
let res = await URL.json()
const card = document.getElementById("card");

// Iterate over each object in the res array
(res.description).forEach((obj) => {
  // Create a new div element
  const div = document.createElement("div");

  // Set the innerHTML property of the div element to the HTML content
  div.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${obj["#IMG_POSTER"]}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${obj["#AKA"]}</h5>
        <p class="card-text">Released on ${obj["#YEAR"]} and the imdb is ${obj["#IMDB_ID"]} </p>
        <a href="${obj["#IMDB_URL"]}" class="btn btn-primary">Go</a>
      </div>
    </div>
  `;

  // Append the div element to the card element
  card.appendChild(div);
});

console.log(res.description)
}
// #AKA

// #IMG_POSTER

// #YEAR

// #IMDB_ID
//#IMDB_URL

