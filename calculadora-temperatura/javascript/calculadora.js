$("#limpar").click(() => {
  $("#tempOrigem").val("")
  $("#tempDestino").val("0.00")
  $("input[name=tipotempOrigem][value='1']").prop('checked', true)
  $("input[name=tipotempDestino][value='1']").prop('checked', true)
})