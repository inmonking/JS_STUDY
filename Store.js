class Store{
    ItemList = []
    constructor(){
        this.addItem({
            id:0,
            name:'몬스터볼',
            cost:200,
            text:'포켓몬 포획을 시도합니다',
            type:'monsterball',
            infoData:{
                catchRate: 10
            }
        })
        this.addItem({
            id:1,
            name:'슈퍼볼',
            cost:200,
            text:'포켓몬 포획을 시도합니다, 확률이 조금 더 높습니다',
            type:'monsterball',
            infoData:{
                catchRate: 30
            }
        })
        this.addItem({
            id:2,
            name:'하이퍼볼',
            cost:200,
            text:'포켓몬 포획을 시도합니다, 매우 높습니다',
            type:'monsterball',
            infoData:{
                catchRate: 50
            }
        })
    }

    addItem = (data)=>{
        this.ItemList.push(data);
    }

    buyItem = (id,user)=>{
        this.item = this.ItemList[id];
        if(user.Money>=this.item.cost){
            console.log(`${user.name} 가 아이템 ${this.item.name}을 구매합니다.`)
            user.buyItem(this.item)
        }
    }
}