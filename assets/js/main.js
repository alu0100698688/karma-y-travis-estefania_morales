
(function(exports){
    function main(){
        var result;
        var salida=0;
        var temp = original.value;
        var unidades = "[aA-zZ]+";
        var medida = XRegExp('(?<valor> [ ]?[-+]?([0-9]+)(e[-+]?[0-9]+)?[ ]*)  # valor \n'+
                             '(?<medidaIni>([a-z]+)[ ]?) # medidaIni \n' +
                             '(?<opcional> (to)?) # opcional \n'+
                             '(?<medidaFin> [ ]*([a-z]+)$) # medidaFin','xi');


         var match = XRegExp.exec(temp, medida);
         if (match) {
           var num = match[1];
           var medidaInicial = match[5].toLowerCase();
           var medidaFinal = match[9].toLowerCase();
           num = parseFloat(num);
           var est = new Estrategia(num, medidaInicial[0]);

            var m = est[unidad.medida]();

            var medidaConversion = m.convertir(medidaFinal[0]);
            converted.innerHTML = medidaConversion.getNumero()+' '+medidaConversion.getUnidad();



        }else{
            converted.innerHTML = "ERROR! Formato incorrecto inténtelo con 32f to C, 12e10k f";
        }

    }

  exports.main = main;
})(this);
