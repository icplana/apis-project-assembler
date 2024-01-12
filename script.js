const dogsUrl = "https://dog.ceo/api/breeds/image/random/10";
const catsUrl = "https://api.thecatapi.com/v1/images/search?limit=10";

document.getElementById("dog-title").addEventListener("click", fetchDogsPictures)

function fetchDogsPictures(){
    fetch(dogsUrl)
    .then(response =>response.json())
    .then((data)=>showDogsPictures(data))

}
function showDogsPictures(data){
    const dogsDiv = document.getElementById("divDogs");
    data.message.forEach((data)=>{
       const img = document.createElement("img");
       img.src = data;
       img.classList.add("dog-img");
       dogsDiv.appendChild(img);
    })
}
