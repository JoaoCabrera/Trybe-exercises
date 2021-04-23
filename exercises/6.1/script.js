let allStates = ['Acre',  
'Alagoas', 
'Amapá', 
'Amazonas', 
'Bahia', 
'Ceará', 
'Espírito Santo', 
'Goiás', 
'Maranhão', 
'Mato Grosso', 
'Mato Grosso do Sul', 
'Minas Gerais', 
'Pará', 
'Paraíba', 
'Paraná', 
'Pernambuco', 
'Piauí', 
'Rio de Janeiro', 
'Rio Grande do Norte', 
'Rio Grande do Sul', 
'Rondônia', 
'Roraima', 
'Santa Catarina', 
'São Paulo', 
'Sergipe', 
'Tocantins', 
'Distrito Federal']

function options () {
  let select = document.getElementById('input-state');
  for (let i = 0; i < allStates.length; i += 1) {
    let state = allStates[i];
    let option = document.createElement('option');
    option.innerText = state;
    option.value = state
    select.appendChild(option);
  }
}
options();

