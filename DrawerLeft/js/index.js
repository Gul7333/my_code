const button = document.querySelector("button");
const img = document.querySelector("img");

    const imageUrl = 'https://thispersondoesnotexist.com';
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
async function getImg() {
    button.textContent = "Loading..";
    button.disabled = true;
    img.classList.toggle("flip-img");
img.src = ""
try {
const response = await fetch(proxyUrl + imageUrl)
const blob = await response.blob()
let url = URL.createObjectURL(blob)
      img.src = url
  img.onload = () => {
        button.disabled = false;
        button.textContent = "Get Image";
        img.classList.toggle("flip-img");
    };
}  catch (err) {
  console.log(err)
}
    // after img is loaded
    
  
}
getImg();
button.addEventListener("click", getImg);
// downloading

function download_Img(e) {
    // const article = e.target.closest("article");
    // const image = article.querySelector("img");
   

    

}
document.querySelector("#download").onclick = download_Img;
