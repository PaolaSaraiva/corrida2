const vencedor = document.getElementById("vencedor")


function gerarNumero(min, max) {
    return Math.random() * (max - min) + min
}

function fazerCorridas(numeroVoltas) {
    const carrinhoDoPedro=gerarcarrinho()
    const carrinhoDaEdna=gerarcarrinho()
    const carrinhoDoJuca=gerarcarrinho()

    let voltasganhaspedro = 0;
    let voltasganhasedna = 0;
    let voltasganhasjuca = 0;
  
    for (let i = 0; i < numeroVoltas; i++) {
      let velocidadePedro = gerarNumero(carrinhoDoPedro.velocidadeMinima, carrinhoDoPedro.velocidadeMaxima);
      velocidadePedro = velocidadePedro - velocidadePedro * carrinhoDoPedro.derrapagem;
  
      console.log(
        "Volta de Pedro nº - " +
          (i + 1) +
          " - Velocidade: " +
          parseInt(velocidadePedro)
      );
  
      let velocidadeedna =gerarNumero(carrinhoDaEdna.velocidadeMinima, carrinhoDaEdna.velocidadeMaxima);
      velocidadeedna = velocidadeedna - velocidadeedna * carrinhoDaEdna.derrapagem;
  
      console.log(
        "Volta de Edna nº - " +
          (i + 1) +
          " - Velocidade: " +
          parseInt(velocidadeedna)
      );
  
      let velocidadejuca =gerarNumero(carrinhoDoJuca.velocidadeMinima, carrinhoDoJuca.velocidadeMaxima);
      velocidadejuca = velocidadejuca - velocidadejuca * carrinhoDoJuca.derrapagem;
  
      console.log(
        "Volta de Juca nº - " +
          (i + 1) +
          " - Velocidade: " +
          parseInt(velocidadejuca)
      );
  
      if (velocidadePedro > velocidadeedna && velocidadePedro > velocidadejuca) {
        voltasganhaspedro++;
      }
  
      if (velocidadeedna > velocidadePedro && velocidadeedna > velocidadejuca) {
        voltasganhasedna++;
      }
  
      if (velocidadejuca > velocidadeedna && velocidadejuca > velocidadePedro) {
        voltasganhasjuca++;
      }
    }
    if (voltasganhaspedro > voltasganhasedna && voltasganhaspedro > voltasganhasjuca) {
        console.log(
            "Pedro venceu a corrida"
        ) 
        vencedor.innerHTML = "Pedro venceu a corrida"
    }
    if (voltasganhasedna > voltasganhaspedro && voltasganhasedna > voltasganhasjuca) {
      console.log(
          "Edna venceu a corrida"
      )
      vencedor.innerHTML = "Edna venceu a corrida"
    }
    if (voltasganhasjuca > voltasganhasedna && voltasganhasjuca > voltasganhaspedro) {
      console.log(
          "Juca venceu a corrida"
      )
      vencedor.innerHTML = "Juca venceu a corrida"
    }
}
function gerarcarrinho(){
    const raridade=gerarNumero(0, 100)
    if (raridade>35){
        return {
            velocidadeMaxima: gerarNumero (180,200),
            velocidadeMinima: gerarNumero (110,130),
            derrapagem: gerarNumero (0.03,0.04)

        }
    }
    else if (raridade<=35 && raridade>5){
        return {
            velocidadeMaxima: gerarNumero (195,215),
            velocidadeMinima: gerarNumero (125,145),
            derrapagem: gerarNumero (0.02,0.03)
        }
    }
    else {
        return {
            velocidadeMaxima: gerarNumero (210,230),
            velocidadeMinima: gerarNumero (140,160),
            derrapagem: gerarNumero (0.01,0.0175)
        }
    }
}