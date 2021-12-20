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
            speed : Math.floor(((this.info.stats.speed * 2 + 31)*(data.level/100)+5)),
            'capture_rate' : 25
        }
    }

    capture = ({infoData})=>{
        console.log(this.myInfo['capture_rate']);
        var captureCurrent = (3*this.myInfo.hp - 2 * this.myInfo.hp)/(3*this.myInfo.hp)*this.myInfo['capture_rate']*infoData.catchRate
        var captureCurrent2 = 65536 * Math.pow((captureCurrent/255),0.1875)
        var randomIncount = [
            Math.floor(Math.random() * 100000 % 65536 + 1)
            ,Math.random() * 100000 % 65536 + 1
            ,Math.random() * 100000 % 65536 + 1
            ,Math.random() * 100000 % 65536 + 1
        ]
        console.log(captureCurrent);
        console.log(captureCurrent2);
        console.log(randomIncount);
    }
}
