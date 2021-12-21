var systemState = { // 시스템값은 이곳에서 변경
    state:{
        now : 'none'
        ,ballData : {}
        ,
        set ball(value){
            this.ballData = value
            UIDraw()
        },
        get ball(){
            return this.ballData
        }
    }
};

var state = new Proxy(systemState,{
    get: function(obj,prop){
        return obj.state
    },
    set: function(target, key, value){
        thisState = target[key]
        for(var localkey in value){
            thisState[localkey] = value[localkey]
        }
        SystemEvent[value.now]()
        UIDraw()
    }
});