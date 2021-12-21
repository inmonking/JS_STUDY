var store
var user
var stagingPoke

store = new Store();
user = new User();

supplyItem = ()=>{
    user.Item = {0:{...store.ItemList['0'],count:5}}
}

UIDraw = ()=>{
    for(var key in user.Item){
        ele = document.getElementById('ball'+key)
        ele.innerHTML = user.Item[key].count
    }
    document.getElementById('money').innerHTML = user.Money
    if(state.state.ball.name != null)
    document.getElementById('selectedBall').innerHTML = state.state.ball.name
    var html = ''
    user.Poke.forEach(poke => {
        html = html+`<img src='${poke.info.sprites.front_default}'>`
    });
    document.getElementById('capturePoke').innerHTML = html
    document.getElementById('myScore').innerHTML = user.score
}

systemLog = (str)=>{
    log = document.getElementById('Log')
    log.innerHTML = `${log.innerHTML}<div>${str}</div>`
    log.scrollTop = log.scrollHeight
}

stateUpdate = (data) =>{
    state.state = {
        ...state.state,
        ...data
    }
}

(async () => {
    allPokeInfo = new AllPokeInfo();
    UIDraw();
    ButtonEvent.init();
    supplyItem();
    setTimeout(() => {
        console.log('system ready');
        stateUpdate({now:'none'})
    }, 1000);    
})()

