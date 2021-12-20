class User{
    name = '지우'
    Item = {}
    Poke = []
    Money = 10000
    constructor(){

    }

    buyItem = (item)=>{
        this.Money -= item.cost;
        try{
            this.ItemCount = this.Item[item.id].count + 1
        }catch(e){
            this.ItemCount = 1
        }
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
        
        delete this.buiedItem;
        delete this.ItemCount;
    }
}