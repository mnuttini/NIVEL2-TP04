function ConstructorAutos(peso, patente) {
    this.peso = peso;
    this.patente = patente;
}

function ConstructorCamiones(pesoMax) {
    this.pesoMax = pesoMax;
}

var limiteAutos = Math.round(Math.random() * 10);
var listaAutos = []

for (var i = 0; i <= limiteAutos; i++) {
    var pesoAuto = Math.round(Math.random() * 100);
    var patenteAuto = Math.round(Math.random() * 10000);
    listaAutos.push(new ConstructorAutos(pesoAuto, patenteAuto));
}

var miCAmion = new ConstructorCamiones(120);

function subirAutos(arrayDeAutos, camionActual) {
    var autosEnCamion = {
        pesoActualCamion: 0,
        cantidadDeAutos: 0,
        patentesDeAutos: []
    }

    for (elementos in arrayDeAutos) {
        //console.log(arrayDeAutos[elementos]);
        var autoActual = arrayDeAutos[elementos]
        var pesoEstimado = autosEnCamion.pesoActualCamion + autoActual.peso
        if (pesoEstimado <= camionActual.pesoMax) {
            autosEnCamion.patentesDeAutos.push(autoActual.patente);
            autosEnCamion.cantidadDeAutos++;
            autosEnCamion.pesoActualCamion += autoActual.peso;
        }


    }
    return autosEnCamion;

}


//console.log(subirAutos(listaAutos, miCAmion));