import React from 'react'
class Hello extends React.Component{
    
    constructor(){
        super()
        this.state = {
            name: "Rifa"
        }
    }
    changeMsg() {
        this.setState({
            name: "yasi"
        },()=> console.log("ca",this.state.name)) 
        console.log(this.state.name)
    }
    render(){
        return <>
            <h1>Hello {this.state.name}</h1>
            <button onClick={()=> this.changeMsg()}>Change</button>
        </>
    }
}

export default Hello
