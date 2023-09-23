import React, { Component } from "react"

class Form extends Component{
handleChange=(event)=>{
    const{name,value}= event.target
    this.setState({
        [name]:value,
    })
}
submitForm=()=>{
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
}

initialState={
nome: '',
turma: '',
}
state = this.initialState

render(){
    const{nome,turma}= this.state;
    return(
        <form>
            <label htmlFor="nome">Nome</label>
            <input type="text" name="nome" id="nome" value={nome} onChange={this.handleChange}/>
            <label htmlFor="Turma">Turma</label>
            <input type="text" name="turma" id="turma" value={turma} onChange={this.handleChange}/>
            <input type="button" value="Adicionar" onClick={this.submitForm}/>
        </form>
    )
}
}
export default Form


