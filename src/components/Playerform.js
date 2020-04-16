import React from "react"

class Playerform extends React.Component{
   
  handleSubmit(e){
        e.preventDefault()
        this.props.player(e.target.player.value) 
    }

    render(){
    return(
    
        <form onSubmit={(e)=> this.handleSubmit(e)}>
            <label>
                <input type="radio" name="player" value="X" />
                Player X
            </label>
            <label>
                <input type="radio" name="player" value="O" />
                Player O  
            </label>
            <button type="submit">Submit</button>
            <br/>          
        </form>
         

    )
    }
}

export default Playerform