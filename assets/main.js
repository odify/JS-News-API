// SIMPLE JS NEWS API 
// https://newsapi.org

function myFunx() {
  document.getElementById("content").innerHTML = "";
  console.log("content");
  fetch(
    `http://newsapi.org/v2/everything?q=bitcoin&from=2020-04-26&sortBy=publishedAt&apiKey=f6a267260a564dc08d40a90e1a8be145`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.articles);
      let test = "unknown";
      for (let elt of data.articles) {
        console.log(elt);
        document.getElementById("content").innerHTML += `
             <article>
             <img src="${elt.urlToImage}">
               <h1>${elt.title}</h1>
               <p>${elt.content}</p>
               <p>${elt.author == null ? test : elt.author}</p>
               <p>${elt.publishedAt}</p>
               <a href=${elt.url == null ? test : elt.url}></a>
             </article> `
      }
    });
}


function myFuny() {
  document.getElementById("content").innerHTML = "";
  console.log("content");
  fetch(
    `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f6a267260a564dc08d40a90e1a8be145`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.articles);
      let test = "unknown";
      for (let elt of data.articles) {
        console.log(elt);
        document.getElementById("content").innerHTML += `
               <article>
               <img src="${elt.urlToImage}">
               <h1>${elt.title}</h1>
               <p>${elt.content}</p>
               <p>${elt.author == null ? test : elt.author}</p>
               <p>${elt.publishedAt}</p>
               <a href=${elt.url == null ? test : elt.url}></a>
               </article> `
      }
    });
}



function myFunz() {
  document.getElementById("content").innerHTML = "";
  console.log("content");
  fetch(
    `http://newsapi.org/v2/top-headlines?country=de&category=sports&apiKey=f6a267260a564dc08d40a90e1a8be145`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.articles);
      let test = "unknown";
      for (let elt of data.articles) {
        console.log(elt);
        document.getElementById("content").innerHTML += `
               <article>
               <img src="${elt.urlToImage}">
               <h1>${elt.title}</h1>
               <p>${elt.content}</p>
               <p>${elt.author == null ? test : elt.author}</p>
               <p>${elt.publishedAt}</p>
               <a href=${elt.url == null ? test : elt.url}></a>
               </article> `
      }
    });
}

