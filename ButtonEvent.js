ButtonEvent = {
    init : ()=>{
        document.getElementById('capture').addEventListener('click',()=>{
            stateUpdate({now:'capture'})
        });
        document.getElementById('escape').addEventListener('click',()=>{
            stateUpdate({now:'none'})
        });
    },    
    selectBall : function(ballId){
        var ball = user.Item[ballId];
        if(ball == null){
            systemLog('볼을 먼저 구매해야 합니다!')
        }else{
            window.stateUpdate({now:'ballChange', ball : user.Item[ballId]});
        }
    },
    buyItem : function(itemId){
        window.stateUpdate({now:'buyItem', buyItemId : itemId});
    }
}