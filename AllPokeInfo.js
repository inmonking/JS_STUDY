class AllPokeInfo{
    pokeList = []
    constructor(){
        for(var i = 1; i < 152; i++){
            this.pokeList.push(new PokeInfo(i))
        }
    }

    getPokeInfo(id){
        return this.pokeList[id-1];
    }
}