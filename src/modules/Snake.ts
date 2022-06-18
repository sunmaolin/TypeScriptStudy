// 定义蛇
class Snake{

    // 蛇的容器
    element: HTMLElement;
    // 蛇头的元素
    head: HTMLElement;
    // 蛇的身体(包括蛇头)
    bodies: HTMLCollection;


    constructor(){
        this.element = document.getElementById('snake');
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = document.getElementById('snake').getElementsByTagName('div');
    }

    // 获取蛇的坐标(蛇头坐标)
    get X(){
        return this.head.offsetLeft;
    }

    get Y(){
        return this.head.offsetTop;
    }

    // 设置蛇头的坐标
    set X(value){
        // X值的合法范围0-299
        if(value < 0  || value > 299){
            throw new Error('蛇撞墙了!');
        }

        // 移动身体
        this.moveBody();

        this.head.style.left = value + 'px';
    }

    set Y(value){
        // Y值的合法范围0-299
        if(value < 0  || value > 299){
            throw new Error('蛇撞墙了!');
        }

        // 移动身体
        this.moveBody();
        
        this.head.style.top = value + 'px';
    }

    // 蛇增加身体的方法
    addBody(){
        this.element.insertAdjacentHTML('beforeend','<div></div>');
    }

    // 移动蛇的身体
    moveBody(){
        for(let i = this.bodies.length - 1; i > 0; i--){
            // 获取前边身体的位置
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

            // 将值设置到当前身体上
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }



}

export default Snake;