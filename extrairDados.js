var pagina = "<html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br></body></html>";


// NOME DAS CIDADES AVALIADAS
var cidades;
cidades = pagina.split("*");

var cidade1;
cidade1 = cidades[1];
console.log(cidade1);

var cidade2;
cidade2 = cidades[3];

var cidade3;
cidade3 = cidades[5];

alert(` As cidades Avaliadas são: ${cidade1}, ${cidade2} e ${cidade3}.`);





// conteúdo do roteiro A de cada cidade avaliada.
// roteiroSaoPaulo
var roteiros;
roteiros = pagina.split("#");

var roteiroSaoPaulo;
roteiroSaoPaulo = roteiros[1].split("<br>");

var roteiroSaoPauloA;
roteiroSaoPauloA = roteiroSaoPaulo[1];

// roteiroLasVegas

var roteiroLasVegas;
roteiroLasVegas = roteiros[4].split("<br>");

var roteiroLasVegasA;
roteiroLasVegasA = roteiroLasVegas[1];


//RoteiroMoscou

var roteiroMoscou;
roteiroMoscou = roteiros[7].split("<br>");

var roteiroMoscouA;
roteiroMoscouA = roteiroMoscou[1];

alert(`  ${cidade1} tem como Roteiro A: ${roteiroSaoPauloA}`);
alert(`  ${cidade2} tem como Roteiro A: ${roteiroLasVegasA}`);
alert(`  ${cidade3} tem como Roteiro A: ${roteiroMoscouA}`);



// Numero de itens Roteiro A São Paulo 
var itensRoteiroASaoPaulo;
itensRoteiroASaoPaulo= roteiroSaoPauloA.split(';').length;
alert(` ${cidade1} possui ${itensRoteiroASaoPaulo} destinos no roteiro A` );
// Numero Itens Las Vegas
var itensRoteiroALasVegas;
itensRoteiroALasVegas= roteiroLasVegasA.split(';').length;
alert(` ${cidade2} possui ${itensRoteiroALasVegas} destinos no roteiro A` );

// Numero de itens Moscou
var itensRoteiroAMoscou;
itensRoteiroAMoscou= roteiroMoscouA.split(';').length;
alert(` ${cidade3} possui ${itensRoteiroAMoscou} destinos no roteiro A` );



// O nome dos pontos turísticos localizados no bairro Centro da cidade de São Paulo.


var roteiroSaoPauloB;
roteiroSaoPauloB = roteiros[2].split("<br>")[1];
 console.log(roteiroSaoPauloB);



alert(`Pontos Turisticos no centro de ${cidade1}:${roteiroSaoPauloB}.`);



// O nome dos pontos turísticos localizados no bairro Downtown na cidade de Las Vegas.



var roteiroBLasVegas;
roteiroBLasVegas = roteiros[5].split("<br>")[1];
console.log(roteiroBLasVegas);


alert((` Pontos Turisticos no bairro DownTown em ${cidade2}: ${roteiroBLasVegas}`));







