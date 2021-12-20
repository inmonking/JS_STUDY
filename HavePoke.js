class HavePoke{
    info = {};
    myInfo = {};
    constructor(allPokeInfo, data){
        this.info = allPokeInfo.getPokeInfo(data.id).info;
        this.myInfo = {
            level : data.level,
            hp : Math.floor((this.info.stats.hp * 2 + 31)*(data.level/100) + data.level),
            attack : Math.floor(((this.info.stats.attack * 2 + 31)*(data.level/100)+5)),
            defense : Math.floor(((this.info.stats.defense * 2 + 31)*(data.level/100)+5)),
            'special-attack' : Math.floor(((this.info.stats['special-attack'] * 2 + 31)*(data.level/100)+5)),
            'special-defense' : Math.floor(((this.info.stats['special-defense'] * 2 + 31)*(data.level/100)+5)),
            speed : Math.floor(((this.info.stats.speed * 2 + 31)*(data.level/100)+5))
        }
    }
}
