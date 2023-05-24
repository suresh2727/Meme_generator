const generateMemeBtn = document.querySelector(".meme_generator .generate_meme_btn");
const memeImage = document.querySelector(".meme_generator img");
const memeTitle = document.querySelector(".meme_generator .meme_title");
const memeAuthor = document.querySelector(".meme_generator .meme_author");
const memeUps = document.querySelector(".meme_generator .meme_ups");

const updateDetails = (url,title,author,ups) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeUps.innerHTML = `UpVoted: ${ups}`;
    memeAuthor.innerHTML =`Meme by: ${author}`;
}

const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((Response) => Response.json())
    .then((data)=>{
        updateDetails(data.url, data.title , data.author , data.ups);
    });

};

generateMemeBtn.addEventListener("click" , generateMeme);