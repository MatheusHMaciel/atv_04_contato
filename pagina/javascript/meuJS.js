$("#menu-mobile").click(()=>{
  $("#menu-slide").toggleClass("show")
})

$("#nome, #email, #telefone, #mensagem").change(()=>{
  let nome=$("#nome").val()
  let email=$("#email").val()
  let telefone=$("#telefone").val()
  let mensagem=$("#mensagem").val()
  //Se todos estirem preenchidos removemos o atributo desabilitado
  if (nome!=="" && email!=="" && 
      telefone!=="" && mensagem!==""){
    $("#enviar").removeAttr("disabled")
  }else {
    $("#enviar").attr("disabled",true)
  }
})