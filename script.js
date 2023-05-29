function exe1() {
    let a, b, c, d, aux
    let conta = 1
    let conta2 = 1

    while (conta2 <= 5){
        a = Number(prompt("Informe A"))
        b = Number(prompt("Informe B"))
        c = Number(prompt("Informe C"))
        d = Number(prompt("Informe D"))
        let conta = 1
        while (conta <= 3) {
            if (a > b){
                aux = a;
                a = b;
                b = aux;
            }
            if (b > c){
                aux = b;
                b = c;
                c = aux;
            }
            if (c > d){
                aux = c;
                c = d;
                d = aux;
            }
            conta++
        }
        conta2++
        document.getElementById("saida").innerHTML = `Forma crescente: ${a}, ${b}, ${c}, ${d}\nOrdem decrescente: ${d}, ${c}, ${b}, ${a}`
    }
}


function exe2(){
    let preco = 5.0; let qtde = 120; 
    const desconto = 200;
    let saida = "<table border='1'> <tr> <th> Preço </th> <th> Qtde </th> <th> Desconto </th> <th> Lucro </th> </tr>"
    while (preco >= 1){
        lucro = (preco * qtde) - desconto
        saida += `<tr> <td> ${preco} </td> <td> ${qtde} </td> <td> ${desconto} </td> <td> ${lucro} </td> </tr>`
        preco = preco - 0.50
        qtde = qtde + 26

    }
    saida += "</table>"
    document.getElementById("saida").innerHTML = saida
}

function exe3(){
    let idade;
    let f1 = 0; 
    let f2 = 0; 
    let f3 = 0; 
    let f4 = 0; 
    let f5 = 0;

    let conta = 1

    while (conta <= 8){
        idade = Number(prompt(`informe a idade ${conta}`))
        if ((idade >=0) && (idade <= 15)){
            f1++
        }
        else if ((idade >= 16) && (idade <= 30)){
            f2++
        }
        else if((idade >= 31) && (idade <= 45)){
            f3++
        }
        else if ((idade >= 46) && (idade <= 60)){
            f4++
        }
        else if (idade > 60){
            f5++
        }
        conta++ //conta = conta + 1
    }
    document.getElementById("saida").innerHTML = `FX1: ${f1} FX2: ${f2} FX3: ${f3} FX4: ${f4} FX5: ${f5}`
    document.getElementById("saida2").innerHTML = `% FX1: ${f1 / 8 * 100} % FX5: ${f5 / 8 * 100}`
}

function exe4(){
    let numero = Number(prompt("informe o número"))
    let conta = 0
    let resultado
    let saida = ""
    while (conta <= 10){
        resultado = (numero * conta)
        saida = saida + `\n${numero} x ${conta} = ${resultado}`
        conta++
    }
    document.getElementById("saida").innerHTML = saida
}

function exe5(){
    let conta1 = 0
    let saida = ""
    let resultado

    while (conta1 <= 10){
        let conta2 = 0
        while (conta2 <= 10){
            resultado = (conta1 * conta2)
            saida = saida + `\n${conta1} x ${conta2} = ${resultado}`
            conta2++
        }
        conta1++
    }
    document.getElementById("saida").innerHTML = saida
}

function exe6(){
    let totalVista = 0
    let totalPrazo = 0
    let total = 0
    let valorParcela = 0
    let cont = 1
    
    while (cont <= 3){
        let codigo =  prompt("Informe o código:").toUpperCase()
        let valor = Number(prompt("Informe o valor:"))

        if (codigo == "V"){
            totalVista += valor
        }
        else if (codigo == "P"){
            totalPrazo += valor
        }
        else{
            alert('Código inválido, valor não será considerado')
            continue
        }
        cont++
    }
    total = (totalVista + totalPrazo)
    valorParcela = (totalPrazo / 3)
    alert(`À Vista: ${totalVista}\nA Prazo: ${totalPrazo}\nTotal: ${total}\nParcelas: ${valorParcela.toFixed(2)}`)
}

function exe7() {
    let cont = 1;
    let idade, peso, altura;
    let idade50 = 0;
    let peso40 = 0;
    let qtdeAltura = 0;
    let somaAltura = 0;

    while (cont <= 5){
        idade = Number(prompt("Digite a idade: "))
        altura = Number(prompt("Informe a altura: "))
        peso = Number(prompt("Informe o peso: "))

        if (idade > 50){
            idade50++
        }
        if((idade >= 10) && (idade <= 20)){
            qtdeAltura++
            somaAltura += altura
        }
        if (peso < 40){
            peso40++
        }
        cont++
    }
}

function exe8(){
    let idade, altura, peso, olhos, cabelos;
    let item1 = 0; let conta;
    let item2soma = 0; let item2conta = 0;
    let item3 = 0; let item4 = 0;

    for (conta = 1; conta <= 6; conta++){
        idade = Number(prompt('Informe a idade'))
        altura = Number(prompt('Informe a altura'))
        peso = Number(prompt('Informe a peso'))
        olhos = Number(prompt('Informe a olhos(A, P, V e C)').toUpperCase())
        cabelos = Number(prompt('Informe a cabelos (P, C L e R)').toUpperCase())

        if ((idade > 50) && (peso < 60)){
            item1++
        }

        if (altura <= 1.50){
            item2conta++
            item2soma = item2soma + idade
        }

        if (olhos == 'A'){
            item3++
        }

        if ((cabelos == 'R') && (olhos != 'A')){
            item4++
        }
    }
    alert(`Valor do item 1: ${item1}`)
    alert(`Valor do item 2: ${item2soma/item2conta}`)
    alert(`Valor do item 3: ${item3 / 6 * 100}`)
    alert(`Valor do item 4: ${item4}`)
}

function exe9(){
    let idade, peso, altura
    let cont

}

function exe10(){
    let numero = Number(prompt('Informe um número'))
    let resto = 0

    for (let conta = 1; ((conta <= numero) && (resto<=2)); conta++){
        if (numero % conta == 0){
            resto++
        }
    }
    if (resto == 2){
        alert('É primo')
    } 
    else{
        alert('não é primo')
    }
}

function exe20(){
    let opcao;
    let nota1;
    let nota2;

    let peso1;
    let peso2;

    let novanota1;
    let novanota2;

    let ma;
    let mp

    do {
        opcao = Number(prompt("\n1. Média aritmética \n2. Média ponderada \n3. Sair"))

        switch (opcao){
            case 1:
                nota1 = Number(prompt("Informe a Nota 1"))
                nota2 = Number(prompt("Informe a Nota 2"))
                ma = (nota1 + nota2) / 2

                alert(`Média Aritmética ${ma}`)
                break
            case 2:
                nota1 = Number(prompt("Informe a Nota 1"))
                peso1 = Number(prompt("Digite o Peso da Nota 1"))
                nota2 = Number(prompt("Informe a Nota 2"))
                peso2 = Number(prompt("Digite o peso da Nota 2"))

                if (peso1 + peso2 != 0){
                    novanota1 = (nota1 * peso1)
                    novanota2 = (nota2 * peso2)
    
                    mp = (novanota1 + novanota2) / (peso1 + peso2)
    
                    alert(`Média Ponderada ${mp}`)
                }
                else{
                    alert("Divisão por 0")
                }
                break
            case 3:
                alert("Programa será encerrado")
                break
            default:
                alert("Opção Inválida!")
        }
    }
    while(opcao != 3)
}

function exe21(){
    let candidato1 = 0;
    let candidato2 = 0;
    let candidato3 = 0;
    let candidato4 = 0;
    let votoN = 0;
    let votoB = 0;
    let totalVotos;
    let opcao;

    do {
        opcao = Number(prompt("Informe para qual candidato quer votar:\n1 - Candidato 1\n2 - Candidato 2\n3 - Candidato 3\n4 - Candidato 4\n5 - para NULO\n6 - voto em BRANCO\n"))

        switch(opcao){
            case 1:
                candidato1++
                break
            case 2:
                candidato2++
                break
            case 3:
                candidato3++
                break
            case 4:
                candidato4++
                break
            case 5:
                votoN++
                break
            case 6:
                votoB++
                break
            default:
                continue
        }
        
    }
    while (opcao != 0)

    totalVotos = (candidato1 + candidato2 + candidato3 + candidato4)

    alert(`Total de votos para cada candidato:\nCandidato 1: ${candidato1}\nCandidato 2: ${candidato2}\nCandidato 3: ${candidato3}\nCandidato 4: ${candidato4}`)

    alert(`Total de votos NULOS: ${votoN}`)
    
    alert(`Total de votos em BRANCO: ${votoB}`)
    
    alert(`Porcentagem de votos NULOS sobre o total de votos: ${(votoN / totalVotos) * 100}%`)
    
    alert(`Porcentagem de votos em BRANCO sobre o total de votos: ${(votoB / totalVotos) * 100}%`)
}

function exe23(){
    let opcao;
    let salario = 0;
    let novo = 0 ;
    let ferias;
    let meses;
    let decimoT = 0;

    do{
        opcao = Number(prompt("Escolha uma das opções: \n1 - Novo Salário\n2 - Férias\n3 - Décimo Terceiro"))

        switch (opcao){
            case 1:
                salario = prompt("Informe o salário: ")
                if ((salario >= 0) && (salario < 210)){
                    novo = (salario + ((salario * 15) / 100))
                }
                else if ((salario >= 210) && (salario <= 600)){
                    novo = (salario + ((salario * 10) / 100))
                }
                else if(salario > 600){
                    novo = (salario + ((salario * 5) / 100))
                }
                else{
                    alert('Salário negativo')
                    break
                }
                alert(`Novo salário: ${novo}`)
                break

            case 2:
                salario = prompt("Informe o salário: ")
                ferias = (salario - ((salario * 1) / 3))

                alert(`Valor das ferias: ${ferias}`)
                break

            case 3:
                salario = prompt("Informe o salário: ")
                meses = prompt("Informe os meses trabalhados: ")
                if ((meses >= 0) && (meses <= 12)){
                    decimoT = ((salario * (meses / 12)))

                    alert(`Decimo Terceiro: ${decimoT}`)
                    break
                }
            default:
                alert("Opção inválida")
                continue
        }
    }
    while(opcao != 4)
}