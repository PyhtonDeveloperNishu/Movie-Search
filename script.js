// let  apiKey = "11ac0bd2";

// console.log(apiUrl);

let search = document.querySelector(".search");
let imgCon = document.querySelector(".imgCon");

// search.addEventListener('click',(e)=>{
//     e.preventDefault();
//     let query = search.querySelector('input').value;
//     console.log(query);
//     getMovie(query);

// });

// async function getMovie(query){
//     let req = await fetch(`http://www.omdbapi.com/?t=${query}&apikey=11ac0bd2`);
//     let  movie = await req.json();
//     console.log(movie);
//     makeImages(movie);

// }

function makeImages(movie){
    let src = movie.Poster;
    const  img = document.createElement('img');
    img.src=src;
    imgCon.appendChild(img)
}

console.log("logging");
console.log(search);
let timerId;

search.addEventListener("input", (e) => {
    const value = e.target.value;
    if(timerId){
        clearTimeout(timerId);
    }
    
    timerId = setTimeout(() => {
        renderData(value);
    }, 3000);
});

async function renderData(query) {
    imgCon.innerHTML = "";
    console.log("inside render function");
  try {
      let req = await fetch(`http://www.omdbapi.com/?t=${query}&apikey=11ac0bd2`);
      let movie = await req.json();
      makeImages(movie);
    //   console.log(movie);
    
  } catch (error) {
    console.log(error);
  }

}

renderData("hello brother");
renderData("batman");
renderData("raja");
renderData("harry poter");
renderData("stree");
renderData("bahubali");

// defuncing fun

// function myDebounceFunc(func, delay){
//     let timer;

//     return function(){
//         if(timer) clearTimeout(timer);
//         timer = setTimeout(()=>{
//             func();
//         },delay)
//     }
// }
// let bettDeb = myDebounceFunc(getMovie,2000);
