class HavePoke{
    info = {}
    myInfo = {}
    score = 0
    captureEventScript = [
        '앗! 몬스터가 볼에서 튀어 나왔다',
        '안돼! 몬스터가 볼에서 튀어 나왔다!',
        '아깝다! 다 잡은 줄 알았는데!'
    ]
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
            'capture_rate' : this.info.capture_rate
        }
        this.score = this.myInfo.hp
                + this.myInfo.attack
                + this.myInfo.defense
                + this.myInfo['special-attack']
                + this.myInfo['special-defense']
                + this.myInfo.speed
    }

    capture = (userBallData, user)=>{
        userBallData.count--    // 선택된 볼 1개 소모
        var {infoData} = userBallData
        console.log(this.myInfo['capture_rate']);
        var captureCalc = (3*this.myInfo.hp - 2 * (this.myInfo.hp*0.5))/(3*this.myInfo.hp)*this.myInfo['capture_rate']*infoData.catchRate
        var captureEncount = 65536 * Math.pow((captureCalc/255),0.1875)
        var randomEncount = [
            Math.floor(Math.random() * 100000 % 65536 + 1)
            ,Math.floor(Math.random() * 100000 % 65536 + 1)
            ,Math.floor(Math.random() * 100000 % 65536 + 1)
            ,Math.floor(Math.random() * 100000 % 65536 + 1)
        ]
        randomEncount.sort((a,b)=>{
            if(a > b) return 1;
            if(a === b) return 0;
            if(a < b) return -1;
        });

        console.log(captureEncount)
        console.log(randomEncount)
        var captureCount = randomEncount.filter((e)=>e<=captureEncount).length;
        if(captureCount<4){
            window.systemLog(`실패!`)
            window.systemLog(this.captureEventScript[captureCount-1])
        }else{
            window.systemLog(`${this.info.name}를 잡았다!`)
            window.stateUpdate({now:'captureSuccess', capturePoke : this})
        }
    }
}
