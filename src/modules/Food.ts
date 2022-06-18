// 定义食物类
class Food{

    // 定义属性表示食物对应的元素
    element: HTMLElement;

    constructor(){
        // 获取食物element
        this.element = document.getElementById('food');
    }

    // 获取食物X轴坐标
    get X(){
        return this.element.offsetLeft;
    }

    // 获取食物Y轴坐标
    get Y(){
        return this.element.offsetTop;
    }

    // 修改食物位置
    change(){
        // 生成随机位置，蛇移动每一步是10，所以食物的位置必须0或10的倍数
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;

        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }

}

export default Food;