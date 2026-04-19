'use strict'

import produtos from "./produtos.json" with { type: "json" }

function criarCardProduto(produto){
    const card = document.createElement("div")
    card.className = "card"

    const foto = document.createElement("img")
    foto.className = "foto"
    foto.src = `./img/${produto.imagem}`
    foto.alt = `Foto de ${produto.nome}`

    const nome = document.createElement("h3")
    nome.textContent = produto.nome

    const descricao = document.createElement("p")
    descricao.textContent = produto.descricao

    const valor = document.createElement("div")
    valor.className = "price"
    valor.textContent = produto.preco

    const estrelas = document.createElement("span")
    estrelas.textContent = descobrirNivelEstrelas(produto.classificacao)

    const tipo = document.createElement("img")
    tipo.className = "selo"

    if(produto.categoria == "Informática"){
        tipo.src = `./img/icone-informatica.png`
        tipo.alt = `Tipo produto informatica`

        card.append(tipo, foto, nome, descricao, valor, estrelas)

        document.getElementById("informatica").appendChild(card)
    }else{
        tipo.src = `./img/icone-eletronico.png`
        tipo.alt = `Tipo produto informatica`

        card.append(tipo, foto, nome, descricao, valor, estrelas)

        document.getElementById("eletronicos").appendChild(card)
    }
}

function descobrirNivelEstrelas(nivel){
    let result

    if(nivel == 1){
        result = "★☆☆☆☆"
    }else if(nivel == 2){
        result = "★★☆☆☆"
    }else if(nivel == 3){
        result = "★★★☆☆"
    }else if(nivel == 4){
        result = "★★★★☆"
    }else if(nivel == 5){
        result = "★★★★★"
    }else{
        result = "☆☆☆☆☆"
    }

    return result
}

function estruturarProduto(){
    produtos.forEach(function(objeto){
        let result = {
            "nome": objeto.nome,
            "descricao": objeto.descricao,
            "preco": objeto.preco,
            "imagem": objeto.imagem,
            "categoria": objeto.categoria,
            "classificacao": objeto.classificacao
        }
        
        criarCardProduto(result)
    })
}

estruturarProduto()