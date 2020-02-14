let array=[]
function circleFunction(e, canvas) {

  let ctx = canvas.getContext("2d");
  ctx.clearRect(0,0,canvas.width, canvas.height)
  ctx.globalCompositeOperation = 'xor';
  array.push({x:e.clientX,y:e.clientY})

  if (array.length > 100) {
    array.shift()
  }

  array.forEach((item, i) => {
    ctx.beginPath();
    ctx.arc(item.x, item.y, 50, 0, 2 * Math.PI);
    ctx.stroke();
  });

}

function squareFunction(e, canvas) {
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0,0,canvas.width, canvas.height)
  ctx.globalCompositeOperation = 'xor';
  array.push({x:e.clientX,y:e.clientY})

  if (array.length > 500) {
    array.shift()
  }

  array.forEach((item, i) => {
    ctx.beginPath();
    ctx.rect(item.x-25, item.y-25, 50, 50);
    ctx.fill();
  });

}

function circleSquare(e, canvas) {
  let ctx = canvas.getContext("2d");
  ctx.globalCompositeOperation = 'xor';

  ctx.clearRect(0,0,canvas.width, canvas.height)

  function resetSquare() {
    array[0]={
      x: Math.floor(Math.random() * window.innerWidth) + 10,
      y: Math.floor(Math.random() * window.innerHeight) + 10
    }

    array[2]=array[2]?array[2]+1:1

    console.log(array[2])
  }

  if (array.length === 0){
    resetSquare()
  }
  if (e.clientY+50 >= array[0].y-25){
    if (e.clientY-50 <= array[0].y+25){
      if (e.clientX+50 >= array[0].x-25){
        if (e.clientX-50 <= array[0].x+25){
          resetSquare()
        }
      }
    }
  }

  ctx.beginPath();
  ctx.font = "30px Arial";
  ctx.fillText(array[2], canvas.width/2, canvas.height/3);
  ctx.closePath()
  ctx.beginPath();
  ctx.fillStyle='black'
  ctx.arc(e.clientX, e.clientY, 50, 0, 360);
  ctx.fill();
  ctx.closePath()
  ctx.beginPath();
  ctx.fillStyle='red'
  ctx.rect(array[0].x, array[0].y, 50, 50);
  ctx.fill();
  ctx.closePath()
}

module.exports = [
  circleFunction,
  squareFunction,
  circleSquare,
  // blockPage
];
