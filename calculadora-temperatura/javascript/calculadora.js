function calcularTemperatura(tempOrigem, tempDestino,
  temperatura) {
  //Definindo constantes para ficar melhor de visualizar
  const celsius = 1
  const kelvin = 2
  const Fahrenheit = 3
  //Definindo as variáveis
  var resultado = temperatura
  //Celsius
  if (tempOrigem == celsius) {
    if (tempDestino == kelvin) {
      resultado = temperatura + 273
    } else if (tempDestino == Fahrenheit) {
      resultado = (9 * temperatura + 160) / 5
    }
    //Kelvin
  } else if (tempOrigem == kelvin) {
    if (tempDestino == celsius) {
      resultado = temperatura - 273
    } else if (tempDestino == Fahrenheit) {
      resultado = (temperatura - 273) * 9 / 5 + 32
    }
    //Fahrenheit
  } else {
    if (tempDestino == celsius) {
      resultado = (temperatura - 32) * 5 / 9
    } else if (tempDestino == kelvin) {
      resultado = ((temperatura - 32) * 5) / 9 + 273
    }
  }
  return resultado
}

$("#limpar").click(() => {
  $("#tempOrigem").val("")
  $("#tempDestino").val("0.00")
  $("input[name=tipotempOrigem][value='1']").prop('checked', true)
  $("input[name=tipotempDestino][value='1']").prop('checked', true)
})
$("#calcular").click(()=>{
  let tpTempOrigem=$("input[name=tipotempOrigem]:checked").val()
  let tpTempDestino=$("input[name=tipotempDestino]:checked").val()
  let temp=+$("#tempOrigem").val()
  let tempResult=calcularTemperatura(tpTempOrigem,
                                tpTempDestino,temp)
  $("#tempDestino").val(tempResult)
})