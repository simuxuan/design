//形状 颜色 坐标
function Position(x,y) {
  this.x=x;
  this.y=y;
}

function Color(color) {
    this.color=color;
}
// 分离变化，将位置和颜色分离不互相影响，通过Ball类链接起来
function Ball(x,y,color) {
    this.position=new Position(x,y);
    this.color=new Color(color);
}
  
Ball.prototype.draw=function () {
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.arc(this.position.x,this.position.y,100,0,2*Math.PI);
  ctx.fillStyle = this.color.color;
  ctx.fill();
}
new Ball(300,300,'red').draw();