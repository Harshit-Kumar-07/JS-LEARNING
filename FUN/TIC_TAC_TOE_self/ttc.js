let player1=true;
        let player2=false;

        let counter = 0
        let Xwon = false;
        let Owon = false;

        let matrix = [['','',''],['','',''],['','','']]
        function isANS(matrix){
            if( matrix[0][0]=='X' && matrix[0][1]=='X' && matrix[0][2]=='X')return 'X';
            if( matrix[1][0]=='X' && matrix[1][1]=='X' && matrix[1][2]=='X')return 'X';
            if( matrix[2][0]=='X' && matrix[2][1]=='X' && matrix[2][2]=='X')return 'X';

            if( matrix[0][0]=='X' && matrix[1][0]=='X' && matrix[2][0]=='X')return 'X';
            if( matrix[0][1]=='X' && matrix[1][1]=='X' && matrix[2][1]=='X')return 'X';
            if( matrix[0][2]=='X' && matrix[1][2]=='X' && matrix[2][2]=='X')return 'X';

            if( matrix[0][0]=='X' && matrix[1][1]=='X' && matrix[2][2]=='X')return 'X';
            if( matrix[0][2]=='X' && matrix[1][1]=='X' && matrix[2][0]=='X')return 'X';

            if (matrix[0][0] == 'O' && matrix[0][1] == 'O' && matrix[0][2] == 'O') return 'O';
            if (matrix[1][0] == 'O' && matrix[1][1] == 'O' && matrix[1][2] == 'O') return 'O';
            if (matrix[2][0] == 'O' && matrix[2][1] == 'O' && matrix[2][2] == 'O') return 'O';

            if (matrix[0][0] == 'O' && matrix[1][0] == 'O' && matrix[2][0] == 'O') return 'O';
            if (matrix[0][1] == 'O' && matrix[1][1] == 'O' && matrix[2][1] == 'O') return 'O';
            if (matrix[0][2] == 'O' && matrix[1][2] == 'O' && matrix[2][2] == 'O') return 'O';

            if (matrix[0][0] == 'O' && matrix[1][1] == 'O' && matrix[2][2] == 'O') return 'O';
            if (matrix[0][2] == 'O' && matrix[1][1] == 'O' && matrix[2][0] == 'O') return 'O';
            
            return null;
        }

        let box = document.getElementById('main_box');
        box.addEventListener('click',function(e){

            // not filling an already filled box
            if (e.target.innerHTML != '')return;
            
            

                let row = parseInt(e.target.id[3])
                let col = parseInt(e.target.id[4])

                

                if(player1 ){                    
                    e.target.innerHTML = 'X'
                    matrix[row][col] = 'X'
                    counter++;
                    if(isANS(matrix)=='X'){
                        document.getElementById('message').innerHTML = 'Player X WON'
                        Xwon = true;
                        return;
                    }
                    player1=false;
                    player2=true;
                     // Check for tie
        if (counter == 9) {
            document.getElementById('message').innerHTML = "It's a tie";
            return;
        }
                    document.getElementById('message').innerHTML = 'Player O turn'
                }
                

                else if(player2){                    
                    e.target.innerHTML = 'O'
                    matrix[row][col] = 'O'
                    counter++;
                    if(isANS(matrix)=='O'){
                        document.getElementById('message').innerHTML = 'Player O WON'
                        Owon = true;
                        return;
                    }
                    player1=true;
                    player2=false;  
                     // Check for tie
        if (counter == 9) {
            document.getElementById('message').innerHTML = "It's a tie";
            return;
        }
                    document.getElementById('message').innerHTML = 'Player X turn' 
                }

        })

        