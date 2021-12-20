SystemEvent = {
    none: () => { stateUpdate({ now: 'poke_catch', popup_poke: randomPoke() }); },
    poke_catch: () => { poke_catch() },
    store: () => {
        console.log('보유금액 : ' + user.Money);
        store.buyItem(0, user)
    },
    capture: () => {
        if (checkState.ball == null) {
            systemLog(`볼이 먼저 선택되어야 합니다!`)
        } else {
            stagingPoke.capture(systemState.ball)
        }
    },
    ballChange: () => { }
}