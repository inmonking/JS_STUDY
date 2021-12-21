class CaptureRate extends PokeInfo{
    constructor(pokeInfo){
        super();
        this.pokeInfo = pokeInfo
    }

    infoImport(data){
        this.info = {...this.pokeInfo.info, capture_rate : data.capture_rate};
    }

    ajaxCall = function(id){
        return axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    }

    getInfo = async ()=>{
        await this.pokeInfo.getInfo()
        var url = this.ajaxCall(this.pokeInfo.id);
        await url.then(({data})=>{
            this.infoImport(data);     
        });
    }
}