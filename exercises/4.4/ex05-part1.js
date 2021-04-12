let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};
let infob = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};
for (let key in info && infob) {
  if (infob[key] === info.recorrente) {
    console.log('Ambas recorrentes');
  } else {
    console.log(info[key] + ' e ' + infob[key]);
  }
}  
