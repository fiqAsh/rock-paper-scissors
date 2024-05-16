let score= JSON.parse(localStorage.getItem('score')) || {win:0,lose:0,draw:0}

      
      
      function game(playermove){
        const computermove= pickcompmove()

        let result=''

        if (playermove==='rock'){
          if (computermove==='rock'){
            result='draw'
          }
          else if (computermove==='paper'){
            result='lose'
          }
          else if (computermove==='scissors'){
            result='win'
          }
        }
        else if(playermove==='paper'){
          if (computermove==='rock'){
            result='win'
          }
          else if (computermove==='paper'){
            result='draw'
          }
          else if (computermove==='scissors'){
            result='lose'
          }
        }
        else if (playermove==='scissors'){
          if (computermove==='rock'){
            result='lose'
          }
          else if(computermove==='paper'){
            result='win'
          }
          else if (computermove==='scissors'){
            result='draw'
          }
        }
        if (result==='win'){
          score.win+=1;
        }
        else if (result==='lose'){
          score.lose+=1;
        }
        else if (result==='draw'){
          score.draw+=1
        }
       
        updatescore();
        updateresult();
        function updateresult(){
        document.querySelector('.js-moves').innerHTML=`you 
        <img src="rps icon/${playermove}-emoji.png" class="move-icon"> computer <img src="rps icon/${computermove}-emoji.png" class="move-icon"> .`;
        document.querySelector('.js-result').innerHTML=`you ${result}`;
      }
        
      }
      function updatescore(){
          localStorage.setItem('score', JSON.stringify(score));
          document.querySelector('.js-score').innerHTML=`wins ${score.win} draw ${score.draw} lose ${score.lose}`;
        }
        
      

      function pickcompmove(){
        const randomNumber= Math.random();
        let computermove= ''
        if (randomNumber >0 && randomNumber<1/3){
          computermove = 'rock'
        }
        else if (randomNumber >= 1/3 && randomNumber <2/3){
          computermove = 'paper'
        }
        else if (randomNumber >=2/3 && randomNumber <1){
          computermove= 'scissors'
        }
        return computermove
      }
