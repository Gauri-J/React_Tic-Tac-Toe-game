import React, {Component} from 'react';
import './App.css';
import Playerform from './components/Playerform';

class App extends Component{
  state={
      board: Array(9).fill(null),
      player:null,
      winner:null,
      count:0
    }
  

handleClick(index){
  if(this.state.player && !this.state.winner){
    if(this.state.board[index]===null){
      let newboard = this.state.board
      newboard[index]= this.state.player
      const playerupdate = this.state.player==="X" ? "O" : "X"
      this.setState({
      board: newboard,
      player: playerupdate
      })
    }
    
    this.checkWinner()
  }
  
}

checkWinner(){
  
  const winlist=[
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ]

  for(let i=0; i<winlist.length; i++){
    const [a,b,c] = winlist[i]

    
    if(this.state.board[a]!==null && this.state.board[a]===this.state.board[b]  && this.state.board[a]===this.state.board[c]){
      alert("Winner is"+ this.state.player);
      this.setState({winner:this.state.player})
    }    
  }

 
 //logic for tie case
  if(this.state.count===9 && this.state.winner===null)
     alert("It's a Tie")
    
   this.state.count++   
   
      
}

setPlayer(player){
  this.setState({player:player})
}

  render(){
    /*fill the board array with div boxes */
  const ticboard = this.state.board.map((box,index) => 
    <div className="box" key={index} onClick={()=> this.handleClick(index)}>
      {box}
    </div>
  )

    return(
      <div className="container">
        <h1>Tic Tac Toe</h1>
        <Playerform player={(e)=> this.setPlayer(e)}/>
        <div className="board">
          {ticboard}
        </div>
      </div>
    )
  }
}

export default App;
