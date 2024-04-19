import { useEffect, useState } from 'react'
import Search from './components/Search'

function App() {
  const [todos, setTodos] = useState([]);
  const [errors,setErrors] = useState("");
  useEffect(()=>{
    axios.get("http://127.0.0.1:8000/todos")
    .then(res => setTodos(res.data))
    .catch(err=> setErrors(err.message))
  },[])

  // add todo function
  const addTodo = (data) => {
    const originalTodos = [...todos]
    setTodos( [ ...todos, data={...data, id:parseInt(todos[todos.length-1].id) + 1, status:"Active"}] )
    axios.post("http://127.0.0.1:8000/todos",data)
    .then(res => setTodos([...todos, res.data]))
    .catch(err => {
      setErrors(err.message)
      setTodos(originalTodos)
    })
  }

  const filterTodo = (cat_value) => {
    setTodos(todos.filter((todo) => todo.status == cat_value))
  }
  return (
    <div className="todo-container">
      <Search addTodo={addTodo}/>
      <Filter filterTodo={filterTodo}/>
    </div>
  )
}

export default App
