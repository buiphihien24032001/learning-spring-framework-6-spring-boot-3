import { useState, useEffect } from "react";
import { retrieveTodo, updateTodo, createTodo } from "./api/TodoApiService";
import { useParams, useNavigate } from "react-router-dom";
import "./css/TodoComponent.css";
import { useAuth } from "./security/AuthContext";
import "react-datepicker/dist/react-datepicker.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import moment from "moment/moment";

export default function TodoComponent() {
  const { id } = useParams();
  const authContex = useAuth();
  const username = authContex.username;
  const [description, setDescription] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [targetDate, setTargetDate] = useState("");
  const navigate = useNavigate();
  const handleCheckboxChange = () => {
    setIsDone(!isDone); // Toggle the state value when the checkbox is clicked
  };

  useEffect(() => refeshTodoDetail(), []);
  function refeshTodoDetail() {
    if (id !== -1) {
      retrieveTodo(username, id)
        .then((response) => {
          setDescription(response.data.description);
          setTargetDate(response.data.targetDate);
          setIsDone(response.data.done);
        })
        .catch((error) => console.log(error));
    }
  }

  function backTodoList() {
    //navigate to TodoComponent
    navigate(`/todos`);
  }

  function onSubmit(values) {
    console.log(values);
    const todo = {
      id: id,
      username: username,
      description: values.description,
      targetDate: values.targetDate,
      done: values.isDone,
    };
    if (id === -1) {
      createTodo(username, todo)
        .then((response) => {
          console.log(response);
          //navigate to TodoComponent
          navigate(`/todos`);
        })
        .catch((error) => console.log(error));
    } else {
      updateTodo(username, id, todo)
        .then((response) => {
          console.log(response);
          //navigate to TodoComponent
          navigate(`/todos`);
        })
        .catch((error) => console.log(error));
    }
  }

  function validate(values) {
    const targetDate = new Date(values.targetDate);
    let errors = {};
    if (values.description.length < 5) {
      errors.description = "Enter description atleast 5 characters";
    }
    if (
      targetDate === null ||
      targetDate === "" ||
      !moment(targetDate).isValid
    ) {
      errors.targetDate = "Enter a target date";
    }
    console.log(values);
    return errors;
  }

  return (
    <div className="TodoDetail">
      <Formik
        initialValues={{ description, targetDate, isDone, id, username }}
        enableReinitialize={true}
        onSubmit={onSubmit}
        validate={validate}
        //Only validate when submit
        validateOnBlur={false}
        validateOnChange={false}
      >
        {(props) => (
          <Form className="formDetail">
            <ErrorMessage
              name="description"
              component="div"
              className="alert alert-warning"
            />
            <ErrorMessage
              name="targetDate"
              component="div"
              className="alert alert-warning"
            />
            <fieldset className="row">
              <label className="col-sm-4 col-form-label">Description</label>
              <div className="col-sm-8">
                <Field
                  type="text"
                  className="form-control"
                  name="description"
                />
              </div>
            </fieldset>
            <fieldset className="row">
              <label className="col-sm-4 col-form-label">Target Date</label>
              <div className="col-sm-8">
                <Field type="date" className="form-control" name="targetDate" />
              </div>
            </fieldset>
            <fieldset className="row">
              <div className="col-sm-4">
                <label className="form-check-label" htmlFor="gridCheck1">
                  is Done ?
                </label>
              </div>
              <div className="col-sm-8 ">
                <div className="form-check">
                  <Field
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck1"
                    name="isDone"
                    onChange={handleCheckboxChange}
                  />
                </div>
              </div>
            </fieldset>
            <button type="submit" className="btn btn-success my-3">
              Save
            </button>
            <button
              type=""
              className="btn btn-warning mx-1"
              onClick={backTodoList}
            >
              Back
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
