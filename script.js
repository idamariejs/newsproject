// Our variables
const key = "cbd50efb00544d279580888d45d1eaaf"
const url = `https://newsapi.org/v2/everything?q="visual management"&language=en&sortBy=publishedAt&apiKey=${key}`

const url2 = `https://newsapi.org/v2/everything?q=+digital+transformation+production&language=en&sortBy=publishedAt&apiKey=${key}`

// Our main function
const recievedNews = (newsdata) => {

	// For each article object from the API, we create a new div in HTML.
    newsdata.articles.forEach((article) => {
      // Check if urlToImage is not null ie no image
      if(article.urlToImage) {
					//Here we create and add html elements to our html file
					document.querySelector(".allNews").innerHTML +=
            `<div class="news">
            <a href="${article.url}" target="_blank"><img src="${article.urlToImage}"/></a>
            <h2><a href="${article.url}" target="_blank">${article.title}</a></h2>
            <p class="uppercase">${article.source.name}</p>
            <p>${article.description}</p>
            <button class="readMore">Read more</button>
            </div>`
          }
    })
}

const recievedNews2 = (newsdata) => {

	// For each article object from the API, we create a new div in HTML.
    newsdata.articles.forEach((article) => {
      // Check if urlToImage is not null ie no image
      if(article.urlToImage) {
					//Here we create and add html elements to our html file
					document.querySelector(".allNews2").innerHTML +=
            `<div class="news">
            <a href="${article.url}" target="_blank"><img src="${article.urlToImage}"/></a>
            <h2><a href="${article.url}" target="_blank">${article.title}</a></h2>
            <p class="uppercase">${article.source.name}</p>
            <p>${article.description}</p>
            <button class="readMore">Read more</button>
            </div>`
          }
    })
}


//Fetch is a built in function in Javascript, it gets the data from the API and tranforms it into Javascript objects – JSON data.
fetch(url)
  .then(response => response.json())
  .then(recievedNews)

fetch(url2)
    .then(response => response.json())
    .then(recievedNews2)
