class AllPokeInfo{
    pokeList = []
    constructor(){
        for(var i = 1; i < 152; i++){
            this.info = new CaptureRate(new PokeInfo(i))
            this.info.getInfo()
            this.pokeList.push(this.info)
        }
    }

    getPokeInfo(id){
        return this.pokeList[id-1];
    }
}