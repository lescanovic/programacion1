export default class Area_de_trapecio {
    bs;
    bi;
    a;


    constructor (){}


    calculo(){
        const area = (Number(this.bs) + Number(this.bi)/2)*this.a
        return area

    }
}