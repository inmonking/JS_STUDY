class User{
    name = '지우'
    Item = {}
    Poke = []
    Money = 10000
    constructor(){

    }

    buyItem = (item)=>{
        this.Money -= item.cost;
        this.ItemCount = (this.Item[item.id]||0).count + 1
        this.buiedItem = {
            [item.id] : {
                ...item,
                count : this.ItemCount
            }
        }
        this.Item = {
            ...this.Item,
            ...this.buiedItem
        }
    }
}