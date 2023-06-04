function media(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var media = (num1 + num2)/2 ;

    if(media >= 7)
     if(media==10)
      alert("Uau! Aprovado com exito");
     else
      alert("Parabens, aprovado! Media "+media);
    else
     alert("Reprovado!")

   }