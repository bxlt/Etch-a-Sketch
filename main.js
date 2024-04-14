const grid = document.querySelector('#container');
const drawBtn = document.querySelector('#generate');
const GRIDMAX = 100;
const GRIDSIZE = 500;
let CURRSIZE = 16;

function drawGrid(row,col,randomColor=false,){
    let currW = GRIDSIZE/row +'px';
    CURRSIZE = row;
    for (let i =0;i<row;i++){
        let currRow = document.createElement('div');
        currRow.classList.add('row')
        for(let j=0;j<col;j++){
            let currCol = document.createElement('div');
            currCol.classList.add('col');
            currCol.style.width = currW;
            currCol.style.height = currW;
            currRow.append(currCol);
    
            //add hover eventlistener
            currCol.addEventListener('mouseover',(e)=>{
                //console.log(e);
                currCol.style.backgroundColor = 'orange';
                if(randomColor){
                    currCol.style.backgroundColor =getRandomColor();
                }
            });
        }
        grid.append(currRow);
    }
}

function emptyGrid(){
    grid.replaceChildren();
}

function checkNum(num){
    let res = false;
    if(num!=NaN&& num>0&&num<=GRIDMAX){
        res=true;
    }
    return res;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function changeColor(){
    drawGrid(CURRSIZE,CURRSIZE,true);
  }


drawBtn.addEventListener('click', ()=>{
    let newWidth = Number(prompt("enter new Width"));
   

    if(checkNum(newWidth)){
        emptyGrid();
        drawGrid(newWidth,newWidth);
    }else{
        alert("Grid width and height range is from 1 to 100");
    }
})




//create 16x16 grid by loop
//drawGrid(CURRSIZE,CURRSIZE);

changeColor()

