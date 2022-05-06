function fazPost(url, body) {
    console.log("Body=", body)

}


function cadastraUsuario() {
    event.preventDefault()
    let url = "http://127.0.0.1:5000/cadastra/usuario"
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let telefone = document.getElementById("telefone").value
    let endereco = document.getElementById("endereco").value
    let profissao = document.getElementById("profissao").value
    let curriculo = document.getElementById("curriculo").value
    

    console.log(nome)
    console.log(email)
    console.log(telefone)
    console.log(endereco)
    console.log(profissao)
    console.log(curriculo)

    body = {
        "name": nome,
        "email": email,
        "telephone": telefone,
        "address": endereco,
        "profession": profissao,
        "curriculum": curriculo
    }
    
    alert('Tudo certo! Recebemos seus dados!')

    fazPost(url, body)
}

