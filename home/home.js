function $(_classList) {
  return document.querySelector(_classList);
}
function $id(_classList) {
  return document.getElementById(_classList);
}
function $className(_classList) {
  return document.getElementsByClassName(_classList);
}
function _make(tag) {
  return document.createElement(tag);
}
class NewToDoc {
  constructor(container, tag, _classList, _innerHTML) {
    this.container = container;
    this.tag = tag;
    this._classList = _classList;
    this._innerHTML = _innerHTML;
  }

  ADD() {
    let F = $(this.container);
    let S = _make(this.tag);
    S.classList.add(this._classList);
    S.innerHTML = this._innerHTML;
    F.appendChild(S);
  }
  CLEAR() {
    let F = $(this.container);
    F.style.display = "none";
  }
  HIDE() {
    let F = $(this.container);
    let S = $(this.tag);
    S.style.display = "none";
  }

  SHOW() {
    let F = $(this.container);
    let S = $(this.tag);
    S.style.display = "block";
  }
  REMOVE(){
    let F = $(this.container);
    let S = $(this.tag);
    S.remove()
  }
}
// ******************** vars
let nav = new NewToDoc(
  "body",
  "nav",
  "top-bar",
  '<h1>Watch</h1><input type="text" placeholder="Search anime here" id="search_bar" list="animes"><img src="../tools/graphics/heart-solid.svg" alt="Favourits" class="fav_heart fav">'
);
let mainCont0 = new NewToDoc("body", "div", "main_cont0", "");
let mainCont1 = new NewToDoc("body", "div", "main_cont1", "");
let mainCont2 = new NewToDoc("body", "div", "main_cont2", "");


let favs = $className("isFav"); // list of html elements
let notFavs = $className("isNotFav"); // list of html elements
let favList;
let favWindowOpened = false

let animeListObj = [
  {
    name: "Demon slayer",
    img: "demon_slayer.jpg",
    class: "kimetsu_no_yaiba_btn",
    type: "Series",
    isFav: true,
  },
  {
    name: "Made in Abyss",
    img: "made_in_abyss_1.jpg",
    class: "made_in_abyss_btn",
    type: "Series",
    isFav: true,
  },
  {
    name: "Made in Abyss Movie",
    img: "made_in_abyss_movie.jpg",
    class: "made_in_abyss_movie_btn",
    type: "Movie",
    isFav: false,
  },
  {
    name: "Vinland Saga",
    img: "vinland_saga.jpg",
    class: "vinland_saga_btn",
    type: "Series",
    isFav: false,
  },
  {
    name: "Violet Evergarden",
    img: "violet_evergarden.jpg",
    class: "violet_evergarden_btn",
    type: "Series",
    isFav: false,
  },
  {
    name: "Mushoku Tensei",
    img: "mushoku_tensei.jpg",
    class: "mushoku_tensei_btn",
    type: "Series",
    isFav: false,
  },
  {
    name: "Re:Zero kara Hajimeru",
    img: "re_zero.jpg",
    class: "re_zero_btn",
    type: "Series",
    isFav: false,
  },
  {
    name: "Takt Op. Destiny",
    img: "takt_op_destiny.jpg",
    class: "takt_op_destiny_btn",
    type: "Series",
    isFav: false,
  },
  {
    name: "Owari no Seraph",
    img: "owari_no_seraph.jpg",
    class: "owari_no_seraph_btn",
    type: "Series",
    isFav: false,
  },
  {
    name: "Fate/Zero",
    img: "fate_zero.jpg",
    class: "fate_zero_btn",
    type: "Series",
    isFav: false,
  },
  {
    name: "The Stranger by the Beach",
    img: "the_stranger_by_the_beach.jpg",
    class: "the_stranger_by_the_beach_btn",
    type: "Movie",
    isFav: false,
  },
  {
    name: "White Snake 2 Green Snake",
    img: "white_snake_2_green_snake.jpg",
    class: "white_snake_2_green_snake_btn",
    type: "Movie",
    isFav: false,
  },
  {
    name: "Ciao Alberto",
    img: "ciao_alberto.jpg",
    class: "ciao_alberto_btn",
    type: "Movie",
    isFav: false,
  },
  {
    name: "Away",
    img: "away.jpg",
    class: "away_btn",
    type: "Movie",
    isFav: false,
  },
  {
    name: "The Stranger by the Beach",
    img: "the_stranger_by_the_beach.jpg",
    class: "the_stranger_by_the_beach_btn",
    type: "Movie",
    isFav: false,
  },
];
function putPosters() {
  for (let i = 0; i < animeListObj.length; i++) {
    let span = new NewToDoc(
      ".main_cont1",
      "span",
      "poster",
      `<img src="../img/anime/${animeListObj[i]["img"]}" alt="${
        animeListObj[i]["name"]
      }" class="${animeListObj[i]["class"]}"><h1>${
        animeListObj[i]["name"]
      }</h1><p>${animeListObj[i]["type"]}</p>${fav(
        i,
        animeListObj[i]["isFav"]
      )}`
    );
    span.ADD();
  }
}
function fillFavList() {
  favList = $(".main_cont2");
  favList.innerHTML = "";
  favs = $className("isFav");
  let howManyFavs = favs.length;
  for (let i = 0; i < howManyFavs; i++) {
    let favSpan = favs[i].parentElement;
    // making a clone of  every fav anime poster
    let copyOfPoster = favSpan.cloneNode(true);
    favList.append(copyOfPoster);
  }
  if (favList.innerHTML == "") {
    favList.innerHTML += "<h1 class='empty-fav'>add an anime</h1>";
  }
}
function watchData() {
  $("body").innerHTML = "";
  nav.ADD();
  mainCont1.ADD();
  putPosters();
  listenToSpans();
  listenToHeart();
}

function fav(i, fact) {
  if (fact == true) {
    return "<p class='isFav' id='animeList[" + i + "][4]'>Remove Fav</p>";
  } else {
    return "<p class='isNotFav' id='animeList[" + i + "][4]'>Add to Fav</p>";
  }
}

function listenToSpans() {
  function toggleFav(clicked) {
    if (clicked.classList.contains("isFav")) {
      clicked.classList.remove("isFav");
      clicked.classList.add("isNotFav");
      clicked.innerText = "Add To Fav";
    } else if (clicked.classList.contains("isNotFav")) {
      clicked.classList.remove("isNotFav");
      clicked.classList.add("isFav");
      clicked.innerText = "Remove Fav";
    }
  }
  let posters = $className("poster");
  for (let i = 0; i < posters.length; i++) {
    posters[i].addEventListener("click", (e) => {
      let clicked = e.target;
      // check if it's the add to fav btn
      toggleFav(clicked);
    });
  }
}

function listenToHeart() {
  let heart = $(".fav_heart ");
  heart.addEventListener("click", (e) => {
    fillFavList();
    mainCont1.HIDE();
    heart.src = "../tools/graphics/close-red.svg";
    heart.classList.add("close-btn");
    heart.classList.remove("fav_heart");
    favWindowOpened = true
  });
  mainCont2.ADD()
}

function listenToClose(){
  let closeBtn = $(".close-btn");
  closeBtn.addEventListener("click", () => {
    closeBtn.src = "../tools/graphics/heart-solid.svg";
    closeBtn.classList.remove("close-btn");
    closeBtn.classList.add("fav_heart");
    mainCont2.HIDE();
    mainCont1.SHOW();
    favWindowOpened = false
  });
}

// *****************start
function running() {
  nav.ADD();
  mainCont0.ADD();
  new NewToDoc(
    ".main_cont0",
    "div",
    "alert",
    'For more Experience press F11 key</br><button id="ok_btn">Start</button>'
  ).ADD();

  $("#ok_btn").addEventListener("click", (event) => {
    watchData();
  });
  $("#ok_btn").click();
  document.onclick = () => {  favWindowOpened? listenToClose(): listenToHeart()}
}

running();
