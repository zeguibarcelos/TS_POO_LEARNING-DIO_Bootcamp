
let multiplos = 0
let N = 5
let numeros = new Array(N)
		
for(let j=0 ; j<N; j++){
    numeros[j] = j}
    

for (let i = 2; i < 6; i++) {
    numeros.forEach(numero => {
      console.log(numero)
        if(numero%2 == 0) {
            multiplos++
        }
    })
    //print(multiplos);
    multiplos = 0
}