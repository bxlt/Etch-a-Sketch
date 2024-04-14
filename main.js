const grid = document.querySelector('#container');
const drawBtn = document.querySelector('#generate');
const GRIDMAX = 100;
//create 16x16 grid by loop

function drawGrid(row,col){
    for (let i =0;i<row;i++){
        let currRow = document.createElement('div');
        currRow.classList.add('row')
        for(let j=0;j<col;j++){
            let currCol = document.createElement('div');
            currCol.classList.add('col');
            currRow.append(currCol);
    
            //add hover eventlistener
            currCol.addEventListener('mouseover',(e)=>{
                //console.log(e);
                currCol.style.backgroundColor = 'orange'
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

drawBtn.addEventListener('click', ()=>{
    let newWidth = Number(prompt("enter new Width"));
    let newHeight = Number(prompt('enter new height'));

    if(checkNum(newWidth)&&checkNum(newHeight)){
        emptyGrid();
        drawGrid(newHeight,newWidth);
    }else{
        alert("Grid width and height range is from 1 to 100");
    }
})


drawGrid(16,16);



