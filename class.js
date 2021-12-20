
class actions{   // 클래스는 호이스팅이 이루어지지 않는 것 처럼 동작함
    vs(pokemon){  // 그러므로 부모 클래스는 자식 클래스보다 먼저 정의되어야함
        let myInfo = this.info; 
        let enermyInfo = pokemon.info;

        let mySpeed = myInfo.stats.speed;
        let enermySpeed = enermyInfo.stats.speed;

        let firstAttack = mySpeed > enermySpeed ? this : pokemon;
        let lastAttack = mySpeed > enermySpeed ? pokemon : this;
         
        let round = 0;
        while(firstAttack.info.stats.hp>0 && lastAttack.info.stats.hp > 0){
            console.log(`Round ${++round}`)
            if(lastAttack.defense(firstAttack.attack())<=0)
            break;
            firstAttack.defense(lastAttack.attack())<=0
        }
    }

    viewInfo = ()=>{
       console.log('%c ', `font-size:100px; background:url(${this.info.sprites.front_shiny}) no-repeat center;` , this.info);
    }
}

class pokemon extends actions{
    info = {};
    constructor(id){    // 생성자
        super();        // 상속받은 자식 클래스에 명시적인 생성자가 존재할 경우 반드시 super를 호출해야 한다
        var url = this.ajaxCall(id);
        url.then(({data})=>{
            this.infoImport(data);     
        });
    }

    infoImport(data){   // 클래스 내에 정의된 함수는 prototype 내에 정의된다
        this.info = {
            name : data.name,
            stats : {},
            types : {},
            sprites : data.sprites
        };

        this.info.stats = data.stats.reduce((statComplete, statReduce) =>{
            return {
                ...statComplete,
                [statReduce.stat.name]: statReduce.base_stat
            }
        },{})

        this.info.types = data.types.reduce((typeComplete, typeReduce, index) =>{
            return {
                ...typeComplete,
                [typeReduce.slot]: typeReduce.type.name
            }
        },{})
    }


    attack = ()=>{
        let {attack, 'special-attack':spAttack} = this.info.stats;
        console.log(`${this.info.name} Attack!!`);
        let returnValue = attack>spAttack ? {type : 'atk', value : attack}:{type : 'spk', value : spAttack}
        
        return returnValue
    }

    defense = ({type, value})=>{
        let {defense, 'special-defense':spDefense, hp} = this.info.stats;
        let damage = 0;
        if(type == 'atk'){
            damage = value - defense;
        }else if(type == 'spk'){
            damage = value - spDefense;
        }
        damage = damage <= 0 ? 1 : damage;
        hp = hp - damage;

        this.info.stats.hp = hp;

        console.log(`${this.info.name} hit! : ${damage}`);
        console.log(`${this.info.name} remaining hp ${hp}`);
        if(hp <= 0)console.log(`${this.info.name} is down ㅠㅠ`)

        return hp;
    }

    infoFn = ()=>{
        this.viewInfo();
    }

    fnthis = function(){
        console.log(this);
    }

    awthis = ()=>{
        console.log(this);
    }
}

pokemon.prototype.ajaxCall = function(id){  // 클래스는 호이스팅이 이루어지지 않으므로 클래스 선언 후 프로토타입을 입력해야한다
    return axios.get('https://pokeapi.co/api/v2/pokemon/'+id)
}


let poke1 = new pokemon(1);
let poke2 = new pokemon(2);
let poke3 = new pokemon(3);
let poke4 = new pokemon(4);
let poke5 = new pokemon(5);
let poke6 = new pokemon(6);
let action = new actions();

setTimeout(() => {
    poke1.fnthis();
    poke1.awthis();


    poke1.vs(poke2);
    try{
        action.vs(poke3);
    }catch(e){
        console.log(e);
    }
    
    poke3.infoFn();
    poke4.infoFn();
    action.vs.call(poke3,poke4);
    poke6.infoFn();
}, 100);