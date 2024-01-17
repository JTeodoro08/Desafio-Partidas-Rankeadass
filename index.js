// Calculadora de Jogos Rankeados

// Variável chamando função nivel do Herói!
let vitórias = nivelDeHeroi(129, 14);

// Função classificação do Herói!
classificação();

// Vitórias e derrotas
function nivelDeHeroi(vitórias, derrotas) {
    return vitórias - derrotas
}
function classificação(){
    if(vitórias < 0){
        console.log("Levante-se Soldade e lute pela sua imortalidade!")
    }else if(vitórias < 11){
        console.log(`Grande Herói, você tem saldo de ${vitórias} ${Plural('vitoria', 'vitorias', vitórias)} e está no nível de "Ferro"`);
    }else if (vitórias > 10 && vitórias < 21) {
        console.log(`Grande Herói, Você tem saldo de ${vitórias} vitórias e está no nível de "Bronze"`);
    } else if (vitórias > 20 && vitórias < 51) {
        console.log(`Grande Herói, Você tem saldo de ${vitórias} vitórias e está no nível de "Prata"`);
    } else if (vitórias > 50 && vitórias < 81) {
        console.log(`Grande Herói, Você tem saldo de ${vitórias} vitórias  e está no nível de "Ouro"`);
    } else if (vitórias > 80 && vitórias < 91) {
        console.log(`grande Herói, Você tem saldo de ${vitórias} vitorias e está no nível de "Diamente"`);
    } else if (vitórias > 90 && vitórias < 101) {
        console.log(`Grande Herói, Você tem saldo de ${vitórias} vitorias e está no nível de "Lendário"`);
    } else if (vitórias > 100) {
        console.log(`Grande Herói, Você tem saldo de ${vitórias} vitorias e está no nível de "IMORTAL"`);
    }
 } 
    function Plural(singular, plural, count) {
         return count > 1 ? plural : singular;
    }

