const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';

async function buscarInformacoes(){
    const res = await fetch(url);
    const dados = res.json();
    console.log(dados);
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto');


    const pessoasConectadas = dados.total_pessoas_conectadas / 1e9;
    const pessoasNoMundo = dados.total_pessoas_mundo / 1e9;
    const horas = parseInt(dados.tempo_medio); 
    const minutos = Math.round((dados.tempo_medio - horas)*60);
    const porcentagemConectada = ((pessoasConectadas/pessoasNoMundo)*100).toFixed(2);

    paragrafo.innerHTML = `Você sabia que o mundo tem <span> ${pessoasNoMundo}</span> de pessoas e que 
    aproximadamente <span>${pessoasConectadas}</span> estão conectadas em alguma 
    rede social e passam em media <span>${horas}</span> horas e <span>${minutos}</span> minutos conectadas. 
    <br> isso significa que aproximadamente ${porcentagemConectada}% pessoas estão conectadas em alguma rede social.`;     
}
 buscarInformacoes();
