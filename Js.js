const euro = document.getElementById('euro')
const dollar = document.getElementById('dollar')
const kronor = document.getElementById('kronor')
const pound = document.getElementById('pound')

euro.addEventListener('input', euroTOdollarTOkronorTOpound);
function euroTOdollarTOkronorTOpound () {
    const eu = parseInt(euro.value);
    console.log(eu+10)
    const dl = 1.11*eu;
    const kr = eu*11.02;
    const pd = eu*0.89;
    dollar.value = dl;
    kronor.value = kr;
    pound.value = pd;

}


dollar.addEventListener('input', dollarTOeuroTOkronorTOpound);
function dollarTOeuroTOkronorTOpound () {
    const dl = parseInt(dollar.value);
    const eu = dl*0.90;
    const kr = dl*9.89;
    const pd = eu*0.8;
    euro.value = eu;
    kronor.value = kr;
    pound.value = pd;

}



kronor.addEventListener('input', kronorTOeuroTOdollarTOpound);
function kronorTOeuroTOdollarTOpound () {
    const kr = parseInt(kronor.value);
    const eu = kr*0.091;
    const dl = kr*0.10;
    const pd = kr*0.081;
    euro.value = eu;
    dollar.value = dl;
    pound.value = pd;

}



pound.addEventListener('input', poundTOeuroTOdollarTOkronor);
function poundTOeuroTOdollarTOkronor () {
    const pd = parseInt(pound.value);
    const eu = pd*1.12;
    const dl = pd*1.25;
    const kr = pd*12.33;
    euro.value = eu;
    dollar.value = dl;
    kronor.value = kr;

}


function main(){
    euroTOdollarTOkronorTOpound();
    dollarTOeuroTOkronorTOpound();
    kronorTOeuroTOdollarTOpound();
    poundTOeuroTOdollarTOkronor();
}
main();