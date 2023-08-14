import { useEffect, useState } from "react";
import "./css/ListTodoComponent.css";
import { retrieveTodosByUsername, deleteTodoById } from "./api/TodoApiService";
import {useNavigate} from "react-router-dom";
import { useAuth } from "./security/AuthContext";

export default function ListTodoComponent() {
  const [todos, setTodos] = useState([]);
  const [messageStatus, setMessageStatus] = useState(null);
  const authContext = useAuth();
  const username = authContext.username;
  const navigate = useNavigate();
  function refeshTodos() {
    retrieveTodosByUsername(username)
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => refeshTodos(), []);

  function deleteTodo(username, id) {
    deleteTodoById(username, id).then(() => {
      refeshTodos();
      successfulResponse(`Delete of todo with id = ${id} successfully !`);
    });
  }

  function getTodoDetail(id) {
    //navigate to TodoComponent
    navigate(`/users/todos/${id}`)
  }

  function successfulResponse(message) {
    console.log();
    setMessageStatus(message);
  }

  return (
    <div className="ListTodoComponent">
      <h1>Things you want to do</h1>
      {messageStatus && (
        <div className="alert alert-info p-0" role="alert">
          {messageStatus}
        </div>
      )}
      <div>
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th>DESCRIPTION</th>
              <th>COMPLETED?</th>
              <th>TARGET DATE</th>
              <th>DELETE</th>
              <th>UPDATE</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                <td>{todo.targetDate.toString()}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => deleteTodo(todo.username, todo.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => getTodoDetail(todo.id)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
