import { useState } from "react"

function App() {

  const [todos, setTodos]= useState([{
    id:1,
    title:"go get a job",
    description:"go do it"
  }, {
    id:1,
    title:"go get a job",
    description:"go do it"
  },{
    id:1,
    title:"go get a job",
    description:"go do it"
  }])

  function addTodo(){
    setTodos([...todos,{
      id:4,
      title: Math.random(),
      description: Math.random()
    }])

    // const newTodos= [];
    // for(const i=0;i<todos.length;i++){
    //   newTodos.push(todos[i]);
    // }
    // newTodos.push({
    //   id:4,
    //   title: Math.random(),
    //   description: Math.description()
    // })
    // setTodos[newTodos];
  }

  return (
    <div>
      
      {/* {todos.map( todo => <Todo title={todo.title} description={todo.description}></Todo>)}  */}
      <button onClick={addTodo}>Add a Todo</button>
      
      {todos.map(function(todo){
        return <Todo title={todo.title} description={todo.description}></Todo>
        
      })}
      

    </div>
  )
}

function Todo({title, description}){
  return <div>
    <h1>{title}</h1>
    <h4>{description}</h4>
  </div>




}



export default App
