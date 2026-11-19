const pessoas = [
    {
        id: 1,
        nome: "Thiago Ferreira",
        veiculo: "I30 rebaixadão",
        moto: "S1000"
    },
    {
        id: 2,
        nome: "Lucas",
        veiculo: "Chevetão",
        moto: "Kawasaki Ninja 300"
    },
    {
        id: 3,
        nome: "Kimberly",
        veiculo: "Opala do Flamengo",
        moto: "BIZ 110"
    },
    {
        id: 4,
        nome: "Pedro",
        veiculo: "Viatura do PCC",
        moto: "ROCAM do CV"
    },
    {
        id: 5,
        nome: "Maik",
        veiculo: "Corsa dos veloses e furiosos",
        moto: "Shineray 180"
    }
]

// guarda qual será o id do próximo cadastro
let proximoId = pessoas.length + 1

const formulario = document.getElementById("formCarPerson")
const campoNome = document.getElementById("nome")
const campoVeiculos = document.getElementById("veiculo")
const campoMotos = document.getElementById("motos")
const corpoTabela = document.getElementById("corpoTabela")

function exibir() {
    corpoTabela.innerHTML = ""

    for (let i = 0; i < pessoas.length; i++) {
        const pessoa = pessoas[i]

        corpoTabela.innerHTML += `
            <tr>
                <td>${pessoa.id}</td>
                <td>${pessoa.nome}</td>
                <td>${pessoa.veiculo || "-"}</td>
                <td>${pessoa.moto || "-"}</td>
            </tr>
        `
    }
}

exibir()

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault()

    const pessoa = {
        id: proximoId,
        nome: campoNome.value.trim(),
        veiculo: campoVeiculos.value.trim(),
        moto: campoMotos.value.trim()
    }

    if (pessoa.nome === "") {
        return
    }

    pessoas.push(pessoa)
    proximoId++

    exibir()

    formulario.reset()
    campoNome.focus()
})