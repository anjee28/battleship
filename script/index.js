let gameBoard = (() => {
    const A = []
    return A
  })()

let ships = (() => {
    const A = []
    return A
  })()
  

function newShip (name,length,orientation,isPositioned,hitTimes,isSunk) {

    const gameBoardPosition = function(x) {
        
        if (this.isPositioned) {
            console.log('Already Positined');
        }
        else {
            for (i = x; i < x + this.length; i++) {
                gameBoard[i] = this.name
            }
            this.isPositioned = true;
        }
    }

    const hit = function(index) {
        
        if (this.isSunk) {
            console.log(this.name + ' has already been sunk');
        }
        
        else {
            gameBoard[index] = 'X';
            this.hitTimes++
            if(this.hitTimes >= length) {
                this.isSunk = true;
            }
        }

    }

    const ship = {
        name,
        length,
        orientation,
        isPositioned,
        hitTimes,
        isSunk,
        gameBoardPosition,
        hit,
       
    }
  
    return ship
  }

for (i = 0; i < 100 ; i++) {
    gameBoard[i] = 0;
}

const carrierPlayer = newShip('Carrier',5,'horzontal',false,0,false);
carrierPlayer.gameBoardPosition(0);
console.log(gameBoard);
carrierPlayer.hit(0);
console.log(gameBoard);
carrierPlayer.hit(1);
console.log(gameBoard);
carrierPlayer.hit(2);
console.log(gameBoard);
carrierPlayer.hit(3);
console.log(gameBoard);
carrierPlayer.hit(4);
console.log(gameBoard);
carrierPlayer.hit(5);
console.log(gameBoard);
/*
carrier
battleshipA
battleshipB
destroyer
submarine
patrolBoatA
patrolBoatB
patrolBoatC
*/
