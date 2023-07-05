function buscar(){
    fetch('https://www.omdbapi.com/?apikey=e6881c1&t=Pretty+woman')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("img1").src = data.Poster
        document.getElementById("genero1").innerHTML= data.Genre
        document.getElementById("plot1").innerHTML= data.Plot
        document.getElementById("actors1").innerHTML= data.Actors
    });

    fetch('https://www.omdbapi.com/?apikey=e6881c1&t=Toy Story')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("img2").src = data.Poster
        document.getElementById("genero2").innerHTML= data.Genre
        document.getElementById("plot2").innerHTML= data.Plot
        document.getElementById("actors2").innerHTML= data.Actors
    });

    
    fetch('https://www.omdbapi.com/?apikey=e6881c1&t=monsters+inc')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("img3").src = data.Poster
        document.getElementById("genero3").innerHTML= data.Genre
        document.getElementById("plot3").innerHTML= data.Plot
        document.getElementById("actors3").innerHTML= data.Actors
    });

    
    fetch('https://www.omdbapi.com/?apikey=e6881c1&t=Cinema Paradiso')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("img4").src = data.Poster
        document.getElementById("genero4").innerHTML= data.Genre
        document.getElementById("plot4").innerHTML= data.Plot
        document.getElementById("actors4").innerHTML= data.Actors
    });
}

/*
completa("https://www.omdbapi.com/?apikey=5ab2d3&t=The Godfather","1","1","Primer Premio","Aclamada por la Crítica")
{"Title":"Pretty Woman"
,"Year":"1990"
,"Rated":"R","Released":"23 Mar 1990",
"Runtime":"119 min","Genre":"Comedy, Romance"
,"Director":"Garry Marshall","Writer":"J.F. Lawton",
"Actors":"Richard Gere, Julia Roberts, Jason Alexander","Plot":"A man in a legal but hurtful business needs an escort for some social events, and hires a beautiful prostitute he meets... only to fall in love.","Language":"English","Country":"United States","Awards":"Nominated for 1 Oscar. 8 wins & 11 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BNjk2ODQzNDYxNV5BMl5BanBnXkFtZTgwMTcyNDg4NjE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.1/10"},{"Source":"Rotten Tomatoes","Value":"64%"},{"Source":"Metacritic","Value":"51/100"}],"Metascore":"51","imdbRating":"7.1","imdbVotes":"337,783","imdbID":"tt0100405","Type":"movie","DVD":"30 Aug 2005","BoxOffice":"$178,406,268","Production":"N/A","Website":"N/A","Response":"True"}
*/