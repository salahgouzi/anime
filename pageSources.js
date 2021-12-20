class accessToDocument{
	constructor(container,tag,_classList,_innerHTML,){
        this.container = container;
        this._classList = _classList;
        this._innerHTML=_innerHTML;
        this.tag = tag;
        
  }
	
  ADD(){
  	let father = document.querySelector('.'+ `${this.container}`);
    let san = document.createElement(`${this.tag}`);
    san.classList.add(this._classList);
    san.innerHTML = this._innerHTML;
    father.appendChild(san);
    }
    
    REMOVE() {
        
    }

}
let alo;
export default  alo = [
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

function fromArrToJSON(animes){
myStr = ""
myStr += ("[");
for (let i = 0; i < animes.length; i++) {
    let anime = animes[i];
    myStr += (`{"name": "${anime[0]}","img": "${anime[1]}","class": "${anime[2]}","type": "${anime[3]}","isFav": ${anime[4]}}`);
    if (i != animes.length -1){
      myStr+=","
    }
}
myStr += ("]");
return JSON.parse(myStr)
}


