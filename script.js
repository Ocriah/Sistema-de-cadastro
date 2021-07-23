const form = document.getElementById('form')

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let nascimento = document.getElementById('nascimento').value;
    let telefone = document.getElementById('telefone').value;
    let endereco = document.getElementById('endereco').value;
    let data = {
        nome,
        email,
        nascimento,
        telefone,
        endereco,
    }
    
    let convertData =JSON.stringify(data);

    localStorage.setItem('lead', convertData)

    })

   /* let data = JSON.parse(localStorage.getItem('data') || '[]')

    data.push(
        {
            nomeCad: nome.value,
            emailCad: email.value,
            nascimentoCad: nascimento.value,
            telefoneCad: telefone.value,
           enderecoCad: endereco.value,

    })*/

    const form2 = document.getElementById('form2')

form2.addEventListener('submit', (e) =>{
    e.preventDefault();
    let nomeP = document.getElementById('nomeP').value;
    let tipo = document.getElementById('tipo').value;
    let codigo = document.getElementById('codigo').value;
    let quantidade = document.getElementById('quantidade').value;
    let descricao = document.getElementById('descricao').value;
    let dataProduto = {
        nomeP,
        tipo,
        codigo,
        quantidade,
        descricao,
    }
    
    let convertDataProduto =JSON.stringify(dataProduto);

    localStorage.setItem('lead', convertDataProduto)
    
    })
//function cadastrar(){
  //  if(nome && email && nascimento && telefone && endereco){
//let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

//listaUser.push(
//{
//    nomeCad: nome.value,
    //emailCad: email.value,
    //nascimentoCad: nascimento.value,
    //telefoneCad: telefone.value,
   // enderecoCad: endereco.value,

//}
//)
//}