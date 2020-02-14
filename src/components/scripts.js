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

    module.exports = [
      circleFunction,
      squareFunction,
      // circleSquare,
      // blockPage
    ];
