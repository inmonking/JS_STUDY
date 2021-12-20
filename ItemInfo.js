class ItemInfo{
    name = ''
    cost = 0
    text = ''
    type = ''
    infoData = {}
    constructor(data){
        this.name = data.name
        this.cost = data.cost
        this.text = data.text
        this.type = data.type
        this.infoData = data.infoData
    }
}