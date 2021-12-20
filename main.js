var store
var user

var checkState = systemState = { // 시스템값은 이곳에서 변경
    now : 'none'
};

var updateState;

store = new Store();
user = new User();

(async () => {
    (function(){    // 시스템 기본 셋팅 파트
        allPokeInfo = new AllPokeInfo();
        
    })();
    setTimeout(() => {
        console.log('system ready');
        setInterval(()=>{
            if(stateCheck()){
                updateStateCheck();
                switch (checkState.now) {
                    case 'none':
                        stateUpdate({now:'poke_catch', popup_poke:randomPoke()});
                        break;
                    case 'poke_catch':
                        console.log('야생의 '+systemState.popup_poke.info.name+'이 나타났다!');
                        break;
                    case 'store':
                        console.log('보유금액 : ' + user.Money);
                        store.buyItem(0,user)
                        break;
                    default:

                        break;
                }
            }

        },1000)
    }, 1000);    
})()

randomPoke = () => {
    randomId = Math.floor(Math.random()*10000%151+1);
    return new HavePoke(allPokeInfo,{id:randomId,level:55});
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