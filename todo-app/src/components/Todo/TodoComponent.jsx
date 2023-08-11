import { useState, useEffect } from "react";
import { retrieveTodo } from "./api/TodoApiService";
import { useParams, useNavigate } from "react-router-dom";
import "./css/TodoComponent.css";

export default function TodoComponent() {
  const { username, id } = useParams();
  const [todo, setTodo] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle the state value when the checkbox is clicked
  };

  useEffect(() => {
    refeshTodoDetail();
  });
  function refeshTodoDetail() {
    retrieveTodo(username, id)
      .then((response) => {
        setTodo(response.data);
      })
      .catch((error) => console.log(error));
  }

  function backTodoList() {
    //navigate to TodoComponent
    navigate(`/todos`);
  }
  return (
    <div className="TodoDetail">
      <form className="formDetail">
        <div className="row">
          <label className="col-sm-4 col-form-label">Description</label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="inputDescription"
              defaultValue={todo?.description || ""}
            />
          </div>
        </div>
        <div className="row">
          <label className="col-sm-4 col-form-label">Target Date</label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="targetDate"
              defaultValue={todo?.targetDate || ""}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <label className="form-check-label" htmlFor="gridCheck1">
              is Done ?
            </label>
          </div>
          <div className="col-sm-8 ">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck1"
                checked={todo?.done || false}
                onChange={handleCheckboxChange}
              />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-success my-3">
          Update
        </button>
        <button type="" className="btn btn-warning mx-1" onClick={backTodoList}>
          Back
        </button>
      </form>
    </div>
  );
}
