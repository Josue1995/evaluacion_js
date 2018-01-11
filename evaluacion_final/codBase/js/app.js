var op = "", n1 = "0", n2="0", ban = false;
var r = 0
function resultado(){

  if(Number.isNaN(n2) || n2 == "0"){
    n2 = 0
  }
  if(Number.isNaN(n1) || n1 == "0"){
    n1 = 0
  }

  if(Number.isInteger(n1)){
    n1 = Number.parseInt(n1, 10)
  }else {
    if (n1 != 0) {
      n1 = Number.parseFloat(n1, 10)
    }
  }



  if(Number.isInteger(n2)){
    n2 = Number.parseInt(n2, 10)
  }else {
    if(n2 != 0){
        n2 = Number.parseFloat(n2, 10)
    }
    }



  switch (op) {
    case "+":
    r = n1 + n2
    if(Number.isInteger(r)){
        document.getElementById("display").innerHTML = r
        n1 = document.getElementById("display").innerHTML
    }else {
      document.getElementById("display").innerHTML = r.toPrecision(8)
      n1 = document.getElementById("display").innerHTML
    }

      break;
    case "-":
    r = n1 - n2

    if(Number.isInteger(r)){
        document.getElementById("display").innerHTML = r
        n1 = document.getElementById("display").innerHTML
    }else {
      document.getElementById("display").innerHTML = r.toPrecision(8)
      n1 = document.getElementById("display").innerHTML
    }
      break;
    case "*":
    r = n1 * n2

    if(Number.isInteger(r)){
        document.getElementById("display").innerHTML = r
        n1 = document.getElementById("display").innerHTML
    }else {
      document.getElementById("display").innerHTML = r.toPrecision(8)
      n1 = document.getElementById("display").innerHTML
    }
      break;
    case "/":
    r = n1 / n2

    if(Number.isInteger(r)){
        document.getElementById("display").innerHTML = r
        n1 = document.getElementById("display").innerHTML
    }else {
      document.getElementById("display").innerHTML = r.toPrecision(8)
      n1 = document.getElementById("display").innerHTML
    }
      break;
  }
}

var Calculadora = {
  init : function(){
    this.teclas()
  },

  teclas : function(){
    var teclado = document.querySelectorAll("img[class *= tecla ]")
    var aux = teclado
    for (var i = 0; i < teclado.length; i++) {
      switch (teclado[i]) {
        case teclado[0]:
        teclado[0].addEventListener('mousedown', function(event){
          var tecla = document.getElementById("on")
          tecla.style.width= "21.50%"
          tecla.style.margin = "0.50%"
          tecla.style.marginBottom = "-0.50%"
          tecla.style.marginRight = "0%"
          var dis = document.getElementById("display").innerHTML = "0"
          n1 = "0"
          n2 = "0"
          op = ""
          aux = false
        })
        teclado[0].addEventListener('mouseup', function(event){
          var tecla = document.getElementById("on")
          tecla.style.width = "22%"
          tecla.style.margin = "0%"


        })
          break;
        case teclado[1]:
        teclado[1].addEventListener('mousedown', function(event){
          var tecla = document.getElementById("sign")
          tecla.style.width= "21.50%"
          tecla.style.margin = "0.50%"
          tecla.style.marginBottom = "-0.50%"
          tecla.style.marginRight = "0%"
          var dis = document.getElementById("display").innerHTML
          if(dis == "0"){
            dis = document.getElementById("display"). innerHTML = "0"
          }else{
            if(dis[0] != "-"){
              var aux = "-" + dis
              var sign = document.getElementById("display").innerHTML = aux
              if(op == ""){
                n1 = aux
              }else {
                n2 = aux

              }
            }else {
              var aux = ""
              for (var i = 1; i < dis.length; i++) {
                aux = aux + dis[i]
              }
              if(op == ""){
                n1 = aux
              }else {
                n2 = aux
              }
              document.getElementById("display").innerHTML = aux
            }

          }

        })
        teclado[1].addEventListener('mouseup', function(event){
          var tecla = document.getElementById("sign")
          tecla.style.width = "22%"
          tecla.style.margin = "0%"
        })
          break;
        case teclado[2]:
        teclado[2].addEventListener('mousedown', function(event){
          var tecla = document.getElementById("raiz")
          tecla.style.width= "21.50%"
          tecla.style.margin = "0.50%"
          tecla.style.marginBottom = "-0.50%"
          tecla.style.marginRight = "0%"
        })
        teclado[2].addEventListener('mouseup', function(event){
          var tecla = document.getElementById("raiz")
          tecla.style.width = "22%"
          tecla.style.margin = "0%"
        })
          break;
        case teclado[3]:
        teclado[3].addEventListener('mousedown', function(event){
          var tecla = document.getElementById("dividido")
          tecla.style.width= "21.50%"
          tecla.style.margin = "0.50%"
          tecla.style.marginBottom = "-0.50%"
          tecla.style.marginRight = "0%"
          var num = document.getElementById("display").innerHTML
          if(num == "0"){
            n1 = "0"
          }
          op = "/"

          document.getElementById("display").innerHTML = ""
        })
        teclado[3].addEventListener('mouseup', function(event){
          var tecla = document.getElementById("dividido")
          tecla.style.width = "22%"
          tecla.style.margin = "0%"

        })
          break;
        case teclado[4]:
        teclado[4].addEventListener('mousedown', function(event){
          var tecla = document.getElementById("7")
          tecla.style.width= "21.50%"
          tecla.style.margin = "0.50%"
          tecla.style.marginBottom = "-0.50%"
          tecla.style.marginRight = "0%"
          var num = document.getElementById("display").innerHTML
          if(num == "0"){
            document.getElementById("display").innerHTML = "7"
            if(op == ""){
              n1 = "7"
            }
          }else{
            var aux = document.getElementById("display").innerHTML
            if(aux.length < 8){
            var valor = aux + "7"
            document.getElementById("display").innerHTML = valor
            if(op == ""){
              n1 = valor
            }else{
              n2 = valor
            }
          }
          }
        })
        teclado[4].addEventListener('mouseup', function(event){
          var tecla = document.getElementById("7")
          tecla.style.width = "22%"
          tecla.style.margin = "0%"
        })
          break;
        case teclado[5]:
        teclado[5].addEventListener('mousedown', function(event){
          var tecla = document.getElementById("8")
          tecla.style.width= "21.50%"
          tecla.style.margin = "0.50%"
          tecla.style.marginBottom = "-0.50%"
          tecla.style.marginRight = "0%"
          var num = document.getElementById("display").innerHTML
          if(num == "0"){
            document.getElementById("display").innerHTML = "8"
            if(op == ""){
              n1 = "8"
            }
          }else{
            var aux = document.getElementById("display").innerHTML
            if(aux.length < 8){
            var valor = aux + "8"
            document.getElementById("display").innerHTML = valor
            if(op == ""){
              n1 = valor
            }else {
                n2 = valor
            }
          }
          }
        })
        teclado[5].addEventListener('mouseup', function(event){
          var tecla = document.getElementById("8")
          tecla.style.width = "22%"
          tecla.style.margin = "0%"
        })
          break;
        case teclado[6]:
        teclado[6].addEventListener('mousedown', function(event){
          var tecla = document.getElementById("9")
          tecla.style.width= "21.50%"
          tecla.style.margin = "0.50%"
          tecla.style.marginBottom = "-0.50%"
          tecla.style.marginRight = "0%"
          var num = document.getElementById("display").innerHTML
          if(num == "0"){
            document.getElementById("display").innerHTML = "9"
            if(op == ""){
              n1 = "9"
            }
          }else{
            var aux = document.getElementById("display").innerHTML
            if(aux.length < 8){
            var valor = aux + "9"
            document.getElementById("display").innerHTML = valor
            if(op == ""){
              n1 = valor
            }else {
                n2 = valor
            }
          }
          }
        })
        teclado[6].addEventListener('mouseup', function(event){
          var tecla = document.getElementById("9")
          tecla.style.width = "22%"
          tecla.style.margin = "0%"
        })
          break;
        case teclado[7]:
        teclado[7].addEventListener('mousedown', function(event){
          var tecla = document.getElementById("por")
          tecla.style.width= "21.50%"
          tecla.style.margin = "0.50%"
          tecla.style.marginBottom = "-0.50%"
          tecla.style.marginRight = "0%"
          var num = document.getElementById("display").innerHTML
          if(num == "0"){
            n1 = "0"
          }
          op = "*"

          document.getElementById("display").innerHTML = ""
        })
        teclado[7].addEventListener('mouseup', function(event){
          var tecla = document.getElementById("por")
          tecla.style.width = "22%"
          tecla.style.margin = "0%"
        })
          break;
        case teclado[8]:
        teclado[8].addEventListener('mousedown', function(event){
          var tecla = document.getElementById("4")
          tecla.style.width= "21.50%"
          tecla.style.margin = "0.50%"
          tecla.style.marginBottom = "-0.50%"
          tecla.style.marginRight = "0%"
          var num = document.getElementById("display").innerHTML
          if(num == "0"){
            document.getElementById("display").innerHTML = "4"
            if(op == ""){
              n1 = "4"
            }
          }else{
            var aux = document.getElementById("display").innerHTML
            if(aux.length < 8){
            var valor = aux + "4"
            document.getElementById("display").innerHTML = valor
            if(op == ""){
              n1 = valor
            }else {
                n2 = valor
            }
          }
          }
        })
        teclado[8].addEventListener('mouseup', function(event){
          var tecla = document.getElementById("4")
          tecla.style.width = "22%"
          tecla.style.margin = "0%"
        })
          break;
        case teclado[9]:
        teclado[9].addEventListener('mousedown', function(event){
          var tecla = document.getElementById("5")
          tecla.style.width= "21.50%"
          tecla.style.margin = "0.50%"
          tecla.style.marginBottom = "-0.50%"
          tecla.style.marginRight = "0%"
          var num = document.getElementById("display").innerHTML
          if(num == "0"){
            document.getElementById("display").innerHTML = "5"
            if(op == ""){
              n1 = "5"
            }
          }else{
            var aux = document.getElementById("display").innerHTML
            if(aux.length < 8){
            var valor = aux + "5"
            document.getElementById("display").innerHTML = valor
            if(op == ""){
              n1 = valor
            }else {
                n2 = valor
            }
          }
          }
        })
        teclado[9].addEventListener('mouseup', function(event){
          var tecla = document.getElementById("5")
          tecla.style.width = "22%"
          tecla.style.margin = "0%"
        })
          break;
        case teclado[10]:
        teclado[10].addEventListener('mousedown', function(event){
          var tecla = document.getElementById("6")
          tecla.style.width= "21.50%"
          tecla.style.margin = "0.50%"
          tecla.style.marginBottom = "-0.50%"
          tecla.style.marginRight = "0%"
          var num = document.getElementById("display").innerHTML
          if(num == "0"){
            document.getElementById("display").innerHTML = "6"
            if(op == ""){
              n1 = "6"
            }
          }else{
            var aux = document.getElementById("display").innerHTML
            if(aux.length < 8){
            var valor = aux + "6"
            document.getElementById("display").innerHTML = valor
            if(op == ""){
              n1 = valor
            }else {
                n2 = valor
            }
          }
          }
        })
        teclado[10].addEventListener('mouseup', function(event){
          var tecla = document.getElementById("6")
          tecla.style.width = "22%"
          tecla.style.margin = "0%"
        })
          break;
        case teclado[11]:
        teclado[11].addEventListener('mousedown', function(event){
          var tecla = document.getElementById("menos")
          tecla.style.width= "21.50%"
          tecla.style.margin = "0.50%"
          tecla.style.marginBottom = "-0.50%"
          tecla.style.marginRight = "0%"
          var num = document.getElementById("display").innerHTML
          if(num == "0"){
            n1 = "0"
          }
          op = "-"
          document.getElementById("display").innerHTML = ""
        })
        teclado[11].addEventListener('mouseup', function(event){
          var tecla = document.getElementById("menos")
          tecla.style.width = "22%"
          tecla.style.margin = "0%"
        })
          break;
        case teclado[12]:
        teclado[12].addEventListener('mousedown', function(event){
          var tecla = document.getElementById("1")
          tecla.style.width = "28.50%"
          tecla.style.margin =  "0.50%"
          tecla.style.marginBottom = "-0.50%"
          tecla.style.marginRight = "0.50%"
          tecla.style.marginLeft = "0%"
          var num = document.getElementById("display").innerHTML
          if(num == "0"){
            document.getElementById("display").innerHTML = "1"
            if(op == ""){
              n1 = "1"
            }
          }else{
            var aux = document.getElementById("display").innerHTML
            if(aux.length < 8){
            var valor = aux + "1"
            document.getElementById("display").innerHTML = valor
            if(op == ""){
              n1 = valor
            }else {
                n2 = valor
            }
          }
          }
        })
        teclado[12].addEventListener('mouseup', function(event){
          var tecla = document.getElementById("1")
          tecla.style.width = "29%"
          tecla.style.margin = "0%"

        })
          break;
        case teclado[13]:
        teclado[13].addEventListener('mousedown', function(event){
          var tecla = document.getElementById("2")
          tecla.style.width = "28.50%"
          tecla.style.margin =  "0.50%"
          tecla.style.marginBottom = "-0.50%"
          tecla.style.marginRight = "0.50%"
          tecla.style.marginLeft = "0%"
          var num = document.getElementById("display").innerHTML
          if(num == "0"){
            document.getElementById("display").innerHTML = "2"
            if(op == ""){
              n1 = "2"
            }
          }else{
            var aux = document.getElementById("display").innerHTML
            if(aux.length < 8){
            var valor = aux + "2"
            document.getElementById("display").innerHTML = valor
            if(op == ""){
              n1 = valor
            }else {
                n2 = valor
            }
          }
          }
        })
        teclado[13].addEventListener('mouseup', function(event){
          var tecla = document.getElementById("2")
          tecla.style.width = "29%"
          tecla.style.margin = "0%"

        })
          break;
        case teclado[14]:
        teclado[14].addEventListener('mousedown', function(event){
          var tecla = document.getElementById("3")
          tecla.style.width = "28.50%"
          tecla.style.margin =  "0.50%"
          tecla.style.marginBottom = "-0.50%"
          tecla.style.marginRight = "0.50%"
          tecla.style.marginLeft = "0%"
          var num = document.getElementById("display").innerHTML
          if(num == "0"){
            document.getElementById("display").innerHTML = "3"
            if(op == ""){
              n1 = "3"
            }
          }else{
            var aux = document.getElementById("display").innerHTML
            if(aux.length < 8){
            var valor = aux + "3"
            document.getElementById("display").innerHTML = valor
            if(op == ""){
              n1 = valor
            }else {
                n2 = valor
            }
          }
          }
        })
        teclado[14].addEventListener('mouseup', function(event){
          var tecla = document.getElementById("3")
          tecla.style.width = "29%"
          tecla.style.margin = "0%"

        })
          break;
        case teclado[15]:
        teclado[15].addEventListener('mousedown', function(event){
          var tecla = document.getElementById("0")
          tecla.style.width = "28.50%"
          tecla.style.margin =  "0.50%"
          tecla.style.marginBottom = "-0.50%"
          tecla.style.marginRight = "0.50%"
          tecla.style.marginLeft = "0%"
          var num = document.getElementById("display").innerHTML
          if(num == "0"){
            document.getElementById("display").innerHTML = "0"
            if(op == ""){
              n1 = "0"
            }
          }else {
            var aux = document.getElementById("display").innerHTML
            if(aux.length < 8){
              var valor = aux + "0"
              document.getElementById("display").innerHTML = valor
              if( op == ""){
                n1 = valor
              }else {
                  n2 = valor
              }
            }

          }
        })
        teclado[15].addEventListener('mouseup', function(event){
          var tecla = document.getElementById("0")
          tecla.style.width = "29%"
          tecla.style.margin = "0%"
        })

          break;
        case teclado[16]:
        teclado[16].addEventListener('mousedown', function(event){
          var tecla = document.getElementById("punto")
          tecla.style.width = "28.50%"
          tecla.style.margin =  "0.50%"
          tecla.style.marginBottom = "-0.50%"
          tecla.style.marginRight = "0.50%"
          tecla.style.marginLeft = "0%"
          var aux = document.getElementById("display").innerHTML;
          var ban = true;
          for (var i = 0; i < aux.length; i++) {
            if(aux[i] == "."){
              ban = false
            }
          }
          if (ban) {
            var num = document.getElementById("display").innerHTML
            document.getElementById("display").innerHTML = num + "."

            if( op == ""){
              n1 = num + "."
            }else {
                n2 = num + "."

            }
          }
        })
        teclado[16].addEventListener('mouseup', function(event){
          var tecla = document.getElementById("punto")
          tecla.style.width = "29%"
          tecla.style.margin = "0%"
        })

          break;
        case teclado[17]:
        teclado[17].addEventListener('mousedown', function(event){
          var tecla = document.getElementById("igual")
          tecla.style.width = "28.50%"
          tecla.style.margin =  "0.50%"
          tecla.style.marginBottom = "-0.50%"
          tecla.style.marginRight = "0.50%"
          tecla.style.marginLeft = "0%"
          resultado()
        })
        teclado[17].addEventListener('mouseup', function(event){
          var tecla = document.getElementById("igual")
          tecla.style.width = "29%"
          tecla.style.margin = "0%"
        })
          break;

        case teclado[18]:
        teclado[18].addEventListener('mousedown', function(event){
          var tecla = document.getElementById("mas")
          tecla.style.width = "89.50%"
          var num = document.getElementById("display").innerHTML
          if(num == "0"){
            n1 = "0"
          }
          op = "+"
          document.getElementById("display").innerHTML = ""
        })
        teclado[18].addEventListener('mouseup', function(event){
          var tecla = document.getElementById("mas")
          tecla.style.width = "90%"
        })
          break;

    }
  }
},
}

Calculadora.init()
