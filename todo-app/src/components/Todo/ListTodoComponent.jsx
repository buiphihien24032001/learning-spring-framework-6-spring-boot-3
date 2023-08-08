

export default function ListTodoComponent() {

    const today = new Date();
    const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDay())
    const todos = [
        {id: 1, description: 'Learn AWS', done: false, targetDate: targetDate},
        {id: 2, description: 'Learn Fullstack developer', done: false, targetDate: targetDate},
        {id: 3, description: 'Learn SQL Server', done: false, targetDate: targetDate},
        {id: 4, description: 'Learn Spring boot Apllication', done: false, targetDate: targetDate}
    ]

    return (
        <div className="ListTodoComponent">
            <h1>Things you want to do</h1>
            <div>
                <table className="table table-success table-striped">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>DESCRIPTION</td>
                            <td>COMPLETED?</td>
                            <td>TARGET DATE</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toDateString()}</td>
                                    </tr>
                                )
                            )
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}