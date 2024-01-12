const dogsUrl = "https://dog.ceo/api/breeds/image/random/10";
const catsUrl = "https://api.thecatapi.com/v1/images/search?limit=10";

document.getElementById("dog-title").addEventListener("click", fetchDogsPictures)

function fetchDogsPictures(){
    fetch(dogsUrl)
    .then(response =>response.json())
    .then((data)=>showDogsPictures(data))

}
function showDogsPictures(data){

    cleanCatsDiv()
    cleanDogsDiv()
    
    const dogsDiv = document.getElementById("divDogs");
    data.message.forEach((data)=>{
       const img = document.createElement("img");
       img.src = data;
       img.classList.add("dog-img");
       dogsDiv.appendChild(img);
    })
}



const h2Cats = document.querySelector('.cats')


const dogDiv = document.querySelector('.dogDiv')
const catDiv = document.querySelector('.catDiv')

const cleanDogsDiv = () => {
    dogDiv.innerHTML = ''
}

const cleanCatsDiv = () => {
    catDiv.innerHTML = ''
}

const getCatsData = async () => {

    try {
        
        const response = await fetch(catsUrl)
        const data = await response.json()

        return data
    } catch (error) {
        console.error(error)
    }
}

const printCats = async () => {

    cleanCatsDiv()
    cleanDogsDiv()
    
    const data = await getCatsData()

    const HTMLFragment = document.createDocumentFragment()

    data.forEach( each => {
        const newImg = document.createElement('img')
        newImg.classList.add('catImg')
        newImg.src = each.url 

        HTMLFragment.appendChild(newImg)

    })

    catDiv.appendChild(HTMLFragment)


}

h2Cats.addEventListener('click', printCats)


