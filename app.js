const form = document.querySelector("#form");
const btn = document.querySelector("input[type='button']")
const giphyContainer = document.querySelector("#giphycontainer")

async function giphySearch(val){
    const response = await axios.get("https://api.giphy.com/v1/gifs/search",{params: {q: val, api_key: '88UDsFkyrTWFND9domoDl1rSvj99Baas'}});
   console.log(response);
    prependGif(response);
    
}

form.addEventListener("submit", function(e){
    e.preventDefault();
    giphySearch(document.querySelector("#giphysearch").value)
    form.reset();
});

btn.addEventListener("click", function(e){
    e.preventDefault();
    while(giphyContainer.firstChild){
        giphyContainer.removeChild(giphyContainer.lastChild);
    }
       
})

function prependGif(response){
    const random = Math.floor(Math.random() * (response.data.data.length));
    const newGiphy = document.createElement("div");
    const giphyImg = document.createElement("img");
    giphyImg.src = response.data.data[random].images.fixed_height.url;
    newGiphy.classList.add("giphy");
   // newGiphy.style.backgroundImage = `"url('${response.data.data[random].embed_url}')"`;
    giphyContainer.prepend(newGiphy);
    newGiphy.append(giphyImg);
}