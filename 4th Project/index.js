
// console.log(right);
// console.log(left);


function rps() {
    let right = Math.floor(Math.random() * 3) + 1;
    let left = Math.floor(Math.random() * 3) + 1;

    if(right === 1) {
    document.getElementById('right').src = 'images/right - rock.png';
    } else if(right === 2) {
        document.getElementById('right').src = 'images/right - paper.png';
    } else if(right === 3) {
        document.getElementById('right').src = 'images/right - scissor.png';
    }

    if(left === 1) {
        document.getElementById('left').src = 'images/left - rock.png';
    } else if(left === 2) {
        document.getElementById('left').src = 'images/left - paper.png';
    } else if(left === 3) {
        document.getElementById('left').src = 'images/left - scissor.png';
    }

    if(right === 1 && left === 1) {
        document.getElementById('result').textContent = 'Tie!';
    } else if(right === 1 && left === 2) {
        document.getElementById('result').textContent = 'P1 Wins!';
    } else if(right === 1 && left === 3) {
        document.getElementById('result').textContent = 'P2 Wins!';
    } else if(right === 2 && left === 1) {
        document.getElementById('result').textContent = 'P2 Wins!';
    } else if(right === 2 && left === 2) {
        document.getElementById('result').textContent = 'Tie!';
    } else if(right === 2 && left === 3) {
        document.getElementById('result').textContent = 'P1 Wins!';
    } else if(right === 3 && left === 1) {
        document.getElementById('result').textContent = 'P1 Wins!';
    } else if(right === 3 && left === 2) {
        document.getElementById('result').textContent = 'P2 Wins!';
    } else if(right === 3 && left === 3) {
        document.getElementById('result').textContent = 'Tie!';
    }

}



