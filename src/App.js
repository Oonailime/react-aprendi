import React, {Component} from 'react'
import Table from './Table2'
import Form from './Form'


class App extends Component {
  removerAluno = (index)=>{
    const{alunos} = this.state
    this.setState(
      {
        alunos:alunos.filter((aluno,i)=>{
          return i!= index
        })
      }
    )
  }
  handleSubmit =(alunoDisc)=>{
    this.setState({
      alunos:[...this.state.alunos,alunoDisc]
    })
  }

  state ={
  
    alunos: [ ]
  }
  render(){
    const{alunos}=this.state
  
  
    return (
      <div className="container">
        <h1 className='text-center'>Alunos</h1>
        <Table alunos = {alunos}
        removerAluno={this.removerAluno}/>
        <Form handleSubmit={this.handleSubmit}/>
        
      </div>
    );
  }  

} export default App;
