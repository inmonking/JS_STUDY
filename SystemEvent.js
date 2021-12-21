SystemEvent = {
    none: () => { stateUpdate({ now: 'pokePopup', popup_poke: SystemEvent.randomPoke() }); },
    pokePopup: () => { 
        stage = document.getElementById('stagingPoke')
        stagingPoke = state['get'].popup_poke;
        stage.src = stagingPoke.info.sprites.front_default
        document.getElementById('pokeLevel').innerHTML = stagingPoke.myInfo.level
        document.getElementById('pokeScore').innerHTML = stagingPoke.score
        systemLog(`야생의 ${stagingPoke.info.name}이 나타났다!`);
    },
    store: () => {
        console.log('보유금액 : ' + user.Money);
        store.buyItem(0, user)
    },
    capture: () => {
        ballId = state['get'].ball.id
        if (user.Item[ballId] != null && user.Item[ballId].count>0) {
            stagingPoke.capture(user.Item[ballId], user)
        } else {
            systemLog(`볼이 먼저 선택되어야 합니다!`)
        }
    },
    ballChange: () => {
        systemLog(`${state['get'].ball.name}을 선택 하였다!`)
    },
    randomPoke: (id) => {
        if(id==null)
        id = Math.floor(Math.random()*10000%151+1);
        level = Math.floor(Math.random()*10000%55+1)
        return new HavePoke(allPokeInfo,{id:id,level:level});
    },
    buyItem: () => {
       store.buyItem(state['get'].buyItemId,user);
    },
    captureSuccess : ()=>{
        user.Poke.push(state['get'].capturePoke)
        user.score += state['get'].capturePoke.score
        stateUpdate({ now: 'none'})
    }
}