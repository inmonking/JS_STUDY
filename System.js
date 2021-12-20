

class System{
    store
    user
    stagingPoke
    systemState
    checkState = { // 시스템값은 이곳에서 변경
        now : 'none'
    };
    systemState = this.checkState
    updateState;
    
    store = new Store();
    user = new User();

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
        this.systemState = {
            ...this.systemState,
            ...data
        }
        this.updateState = {
            ...data
        }
    }

    updateStateCheck = () =>{
        for(var key in this.updateState){
        }
    }

    systemLog = (str)=>{
        log = document.getElementById('Log')
        log.innerHTML = `${log.innerHTML}<div>${str}</div>`
        log.scrollTop = log.scrollHeight
    }

    itemUIInfo = ()=>{
        for(var key in this.user.Item){
            ele = document.getElementById('ball'+key)
            ele.innerHTML = user.Item[key].count
        }
        document.getElementById('money').innerHTML = this.user.Money
    }

    poke_catch = ()=>{
        stage = document.getElementById('stagingPoke')
        stagingPoke = systemState.popup_poke;
        stage.src = stagingPoke.info.sprites.front_default
        systemLog(`야생의 ${stagingPoke.info.name}이 나타났다!`);
    }
}