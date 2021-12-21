class Store{
    ItemList = []
    constructor(){
        this.addItem({
            id:0,
            name:'몬스터볼',
            cost:200,
            text:'야생 포켓몬에게 던져서 잡기 위한 볼. 캡슐식으로 되어 있다.',
            type:'monsterball',
            infoData:{
                catchRate: 1
            }
        })
        this.addItem({
            id:1,
            name:'슈퍼볼',
            cost:200,
            text:'몬스터볼보다도 더욱 포켓몬을 잡기 쉬워진 약간 성능이 좋은 볼.',
            type:'monsterball',
            infoData:{
                catchRate: 1.5
            }
        })
        this.addItem({
            id:2,
            name:'하이퍼볼',
            cost:200,
            text:'수퍼볼보다도 더욱 포켓몬을 잡기 쉬워진 매우 성능이 좋은 볼.',
            type:'monsterball',
            infoData:{
                catchRate: 2.0
            }
        })
    }

    // 상점 판매 목록 추가
    addItem = (data)=>{
        this.ItemList.push(data);
    }

    // 아이템 id와 사용자 객체를 받음
    // 사용자가 지닌 돈보다 아이템 가격이 더 낮은 경우 구매에 성공
    buyItem = (id,user)=>{
        this.item = this.ItemList[id];
        if(user.Money>=this.item.cost){
            window.systemLog(`아이템 ${this.item.name}을 구매합니다.`);
            user.buyItem(this.item)
        }else{
            window.systemLog(`돈이 부족합니다!`)
        }
    }
}