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
let favs = $className("isFav"); // list
let notFavs = $className("isNotFav"); // list

function clearHTML0() {
  $("body").innerHTML = "";
  nav.ADD();
  mainCont1.ADD();
}

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
    isFav: true,
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
function watchData() {
  // let searchBar = $('#search_bar');
  // let top_bar = $('.top_bar');
  // new NewToDoc('.top_bar','datalist',)

  clearHTML0();
  putPosters();
}

function sleep(delay) {
  // from ms to s
  delay *= 1000;
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
  {
  }
}

function fav(i, fact) {
  if (fact == true) {
    return "<p class='isFav' id='animeList[" + i + "][4]'>Remove Fav</p>";
  } else {
    return "<p class='isNotFav' id='animeList[" + i + "][4]'>Add to Fav</p>";
  }
}
function listenToFavs() {
  let posters = $className("poster");
  for (let i = 0; i < posters.length; i++) {
    posters[i].addEventListener("click", (e) => {
      let clicked = e.target;
      // check if it's the add to fav btn
      if (clicked.classList.contains("isFav")) {
        clicked.classList.remove("isFav");
        clicked.classList.add("isNotFav");
        clicked.innerText = "Add To Fav";
      } else if (clicked.classList.contains("isNotFav")) {
        clicked.classList.remove("isNotFav");
        clicked.classList.add("isFav");
        clicked.innerText = "Remove Fav";
      }
      // after every click on add To Fav or Remove Fav, Fav lists will update
      updateFavs();
    });

  }
}

function updateFavs() {
  favs = $className("isFav");
  notFavs = $className("isNotFav"); 
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
    // $id("animeList[0][4]").addEventListener("click", (event) => {
    //   alert(animeListObj[0]["name"]);
    // });
    listenToFavs();
  });
}

running();
