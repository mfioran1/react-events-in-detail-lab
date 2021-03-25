import React from 'react' 

class CoordinatesButton extends React.Component {
    
   handleClick = (e) => {
       let mouseXY = [e.clientX, e.clientY]
       this.props.onReceiveCoordinates(mouseXY)
   }
    
    render(){
        return(
        <div>
            <button onClick={this.handleClick}>Coordinate button</button>
        </div>
        )
    }
}
export default CoordinatesButton