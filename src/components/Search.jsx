import { useForm } from 'react-hook-form'

const Search = ({addTodo})=>{
    const { register, handleSubmit, reset, fromState:{errors}} = useForm();

    return (
        <div className="todo-search">
            <form action="" onSubmit={handleSubmit((data)=>{
                addTodo(data);
                reset();
            })}>
            <input type="text" id="task" placeholder="Enter Todo" {...register("task", {required},)} />
            <button>Add</button>
            </form>
            {errors.task?.type == "required" && <small>This field is required</small>}
        </div>
    )
}

export default Search;