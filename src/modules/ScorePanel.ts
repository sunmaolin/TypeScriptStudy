// 定义记分牌
class ScorePanel{

    // 不用指定类型。TS会自己判断
    score = 0;
    level = 1;

    scoreEle:HTMLElement;
    levelEle:HTMLElement;

    // 最大等级
    maxLevel: number;
    // 每加多少分升级
    upScore: number;

    // 默认maxLevel,upScore为10
    constructor(maxLevel: number = 10,upScore: number = 10){
        this.scoreEle = document.getElementById('score');
        this.levelEle = document.getElementById('level');
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    // 每次增加一分
    addScore(){
        this.scoreEle.innerHTML = ++this.score + '';
        // 十分升一级
        if(this.score % this.upScore === 0){
            this.levelUp();
        }
    }

    // 等级提升
    levelUp(){
        if(this.level < this.maxLevel){
            this.levelEle.innerHTML = ++this.level + '';
        }else{
            this.levelEle.innerHTML = "MAX";
        }
    }

}

export default ScorePanel;