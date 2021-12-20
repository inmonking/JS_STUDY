class PokeInfo{
    info = {};
    constructor(id){    // 생성자
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

    ajaxCall = function(id){
        return axios.get('https://pokeapi.co/api/v2/pokemon/'+id)
    }
}