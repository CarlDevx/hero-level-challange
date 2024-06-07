export default class Hero{
    constructor(heroName = "", heroLevel = 0){
        this.heroName = heroName;
        this.heroLevel = heroLevel;
    }
    getHeroLevel(){
        if (this.heroLevel < 1000){
            return "Ferro";
        }
        else if(this.heroLevel > 1000 && this.heroLevel <= 2000){
            return "Bronze";
        }
        else if(this.heroLevel > 2000 && this.heroLevel <= 5000){
            return "Prata";
        }
        else if(this.heroLevel > 5000 && this.heroLevel <= 7000){
            return "Ouro";
        }
        else if(this.heroLevel > 7000 && this.heroLevel <= 8000){
            return "Platina";
        }
        else if(this.heroLevel > 8000 && this.heroLevel <= 9000){
            return "Assendente";
        }
        else if(this.heroLevel > 9000 && this.heroLevel <= 10000){
            return "Imortal";
        }
        else{
            return "Radiante";
        }
    }
}