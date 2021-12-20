var store
var user
var stagingPoke

var checkState = systemState = { // 시스템값은 이곳에서 변경
    now : 'none'
};

var updateState;

store = new Store();
user = new User();

supplyItem = ()=>{
    user.Item = {0:{...store.ItemList['0'],count:5}}
}

itemUIInfo = ()=>{
    for(var key in user.Item){
        ele = document.getElementById('ball'+key)
        ele.innerHTML = user.Item[key].count
    }
    document.getElementById('money').innerHTML = user.Money
}

poke_catch = ()=>{
    stage = document.getElementById('stagingPoke')
    stagingPoke = systemState.popup_poke;
    stage.src = stagingPoke.info.sprites.front_default
    systemLog(`야생의 ${stagingPoke.info.name}이 나타났다!`);
}
randomPoke = (id) => {
    if(id==null)
    id = Math.floor(Math.random()*10000%151+1);
    return new HavePoke(allPokeInfo,{id:id,level:55});
}

stateCheck = () =>{
    if(checkState === systemState){
        return false;
    }else{
        checkState = systemState
        return true;
    }
}

stateUpdate = (data) =>{
    systemState = {
        ...systemState,
        ...data
    }
    updateState = {
        ...data
    }
}

updateStateCheck = () =>{
    for(var key in updateState){
    }
}

systemLog = (str)=>{
    log = document.getElementById('Log')
    log.innerHTML = `${log.innerHTML}<div>${str}</div>`
    log.scrollTop = log.scrollHeight
}

(async () => {
    allPokeInfo = new AllPokeInfo();
    itemUIInfo();
    ButtonEvent.init();
    supplyItem();
    setTimeout(() => {
        console.log('system ready');
        stateUpdate({now:'none'})
        setInterval(()=>{
            if(stateCheck()){
                updateStateCheck();
                itemUIInfo();
                SystemEvent[checkState.now]()
            }
        },300)
    }, 1000);    
})()

