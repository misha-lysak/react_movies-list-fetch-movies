(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,,,,,,,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),l=a(7),r=a.n(l),c=(a(15),a(3)),m=(a(16),a(17),a(18),function(e){var t=e.title,a=e.description,i=void 0===a?"":a,l=e.imgUrl,r=e.imdbUrl;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:l,alt:"Film logo"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-48x48"},n.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-8"},t))),n.a.createElement("div",{className:"content"},i,n.a.createElement("br",null),n.a.createElement("a",{href:r},"IMDB"))))}),s=function(e){var t=e.movies,a=void 0===t?[]:t;return n.a.createElement("div",{className:"movies"},a.map((function(e){return n.a.createElement(m,Object.assign({key:e.imdbId},e))})))},o=a(9),d=a(5),u=a.n(d),p=a(8),h=(a(20),a(1)),g=function(e){var t=e.addMovieHandler,a=Object(i.useState)(""),l=Object(c.a)(a,2),r=l[0],s=l[1],d=Object(i.useState)(null),g=Object(c.a)(d,2),b=g[0],v=g[1],f=function(){var e=Object(p.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=v,e.next=3,t=r,fetch("".concat("http://www.omdbapi.com/?apikey=e2844a57&t=").concat(t)).then((function(e){return e.json()}));case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}var t}),e)})));return function(){return e.apply(this,arguments)}}();return n.a.createElement(n.a.Fragment,null,n.a.createElement("form",{className:"find-movie"},n.a.createElement("div",{className:"field"},n.a.createElement("label",{className:"label",htmlFor:"movie-title"},"Movie title"),n.a.createElement("div",{className:"control"},n.a.createElement("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input is-danger",value:r,onChange:function(e){return s(e.target.value)}})),!b&&n.a.createElement("p",{className:"help is-danger"},"Can't find a movie with such a title")),n.a.createElement("div",{className:"field is-grouped"},n.a.createElement("div",{className:"control"},n.a.createElement("button",{type:"button",className:"button is-light",onClick:function(){return v(f())}},"Find a movie")),n.a.createElement("div",{className:"control"},n.a.createElement("button",{type:"button",className:"button is-primary",onClick:function(){var e={title:b.Title,description:b.Plot,imgUrl:b.Poster,imdbUrl:"https://www.imdb.com/title/".concat(b.imdbID,"/"),imdbId:b.imdbID};h.some((function(t){return t.imdbId===e.imdbId}))||(t([].concat(Object(o.a)(h),[e])),h.push(e),s(""))}},"Add to the list")))),b&&"True"===b.Response&&n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"title"},"Preview"),n.a.createElement(m,{title:b.Title,description:b.Plot,imgUrl:b.Poster,imdbUrl:"https://www.imdb.com/title/".concat(b.imdbID,"/")})))},b=function(){var e=Object(i.useState)(h),t=Object(c.a)(e,2),a=t[0],l=t[1];return n.a.createElement("div",{className:"page"},n.a.createElement("div",{className:"page-content"},n.a.createElement(s,{movies:a})),n.a.createElement("div",{className:"sidebar"},n.a.createElement(g,{addMovieHandler:function(e){l(e)}})))};r.a.render(n.a.createElement(b,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.cd21af4e.chunk.js.map