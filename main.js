const grid = document.querySelector('#container');

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
                console.log(e);
                currCol.style.backgroundColor = 'orange'
            });
        }
        grid.append(currRow);
    }
}


drawGrid(16,16);