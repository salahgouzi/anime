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