let heros = [
    ["Axel", 300],["Mandy",2500],["Josuah", 5090],["Orph",10000],["Ioz",13048]
];
let levels = ["Ferro","Bronze","Prata", "Ouro","Platina", "Assendente","Imortal", "Radiante"];


for (let i = 0; i < heros.length; i++){
    if (heros[i][1] < 1000){
        console.log(`O Heroi ${heros[i][0]} está no nivel ${levels[0]}`);
    }
    else if(heros[i][1] > 1000 && heros[i][1] <= 2000){
        console.log(`O Heroi ${heros[i][0]} está no nivel ${levels[1]}`);
    }
    else if( heros[i][1] > 2000 && heros[i][1] <= 5000){
        console.log(`O Heroi ${heros[i][0]} está no nivel ${levels[2]}`);
    }
    else if( heros[i][1] > 5000 && heros[i][1] <= 7000){
        console.log(`O Heroi ${heros[i][0]} está no nivel ${levels[3]}`);
    }
    else if( heros[i][1] > 7000 && heros[i][1] <= 8000){
        console.log(`O Heroi ${heros[i][0]} está no nivel ${levels[4]}`);
    }
    else if( heros[i][1] > 8000 && heros[i][1] <= 9000){
        console.log(`O Heroi ${heros[i][0]} está no nivel ${levels[5]}`);
    }
    else if( heros[i][1] > 9000 && heros[i][1] <= 10000){
        console.log(`O Heroi ${heros[i][0]} está no nivel ${levels[6]}`);
    }
    else{
        console.log(`O Heroi ${heros[i][0]} está no nivel ${levels[7]}`);
    }
}