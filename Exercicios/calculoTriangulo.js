// Escreva     um     programa que leia     as     medidas     dos     lados     de     um     triângulo     e    escreva    se    ele    é    Equilátero,    Isósceles    ou  Escaleno. 
// Sendo    que:    
// − Triângulo    Equilátero:    possui    os    3    lados    iguais.
// − Triângulo    Isóscele:    possui    2    lados    iguais.
// − Triângulo    Escaleno:    possui    3    lados    diferentes.




//entrada de dados
// = informar as 3 medidas de um triangulo

//processamento
// = verificar se o triangulo tem os 3 lados igual ou 2 lados iguais ou os 3 lados diferentes
// = para isso temos que utilizar os operadores lógicos && || ! 

//saida de dados
// = informar se o triangulo é equilátero, escaleno ou isócele
// = motrar a saída do programa na console
function verificarTriangulo() {

 const
    ladoA = Number(window.prompt('Valor do lado 1:')),
    ladoB = Number(window.prompt('Valor do lado 2:')),
    ladoC = Number(window.prompt('Valor do lado 3:'));


if (ladoA == ladoB && ladoB == ladoC) {
  
  alert("O triângulo é Equilátero pois tem as 3 medidas iguais!");
} else if (ladoA == ladoB || ladoB == ladoC || ladoA == ladoC) {
 
  alert("O triângulo é Isóscele pois tem pelo menos 2 lados iguais!");
} else {
    
  alert("O triângulo é Escaleno pois possui todos os lados diferentes!");
}

}