import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

// 游戏控制器
class GameControl{

    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    // 移动方向
    direction: string;
    // 游戏是否结束
    isLive: boolean = true;

    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
    }

    // 初始化游戏
    init(){
        // 绑定键盘按下的事件
        document.addEventListener('keydown',this.keydownHandler.bind(this));
        this.run();
    }

    // 键盘事件
    keydownHandler(event: KeyboardEvent){
        this.direction = event.key;
    }

    // 控制蛇移动
    run(){

        // 获取蛇的坐标
        let X = this.snake.X;
        let Y = this.snake.Y;

        switch (this.direction){
            case 'ArrowUp':
                Y -= 10;
                break;
            case 'ArrowDown':
                Y += 10;
                break;
            case 'ArrowLeft':
                X -= 10;
                break;
            case 'ArrowRight':
                X += 10;
                break;
        }

        // 判断食物是否吃到
        this.checkEat(X,Y);

        try{
            this.snake.X = X;
            this.snake.Y = Y;
        }catch(e){
            // 出现异常
            alert(e.message);
            this.isLive = false;
        }        

        // 开启定时调用
        this.isLive && setTimeout(this.run.bind(this),300 - (this.scorePanel.level - 1) * 30);

    }

    // 检查是否吃到食物
    checkEat(X: number, Y: number){
        if(X == this.food.X && Y == this.food.Y){
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody();
        }
    }

}

export default GameControl;