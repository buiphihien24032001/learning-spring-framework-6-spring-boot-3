<%@ include file="common/header.jspf" %>
<div>
    <%@ include file="common/navigation.jspf" %>
</div>
<div class="container">
    <div>Welcome ${name} to Todos Page</div>
    <hr>
    <h1>Your Todos</h1>
    <table class="table">
        <thead>
            <tr>
                <th>Description</th>
                <th>Target Date</th>
                <th>Is Done ?</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <c:forEach items="${todos}" var="todo" >
                <tr>
                    <td>${todo.description}</td>
                    <td>${todo.targetDate}</td>
                    <td>${todo.isDone}</td>
                    <td> <a href="delete-todo?id=${todo.id}" class="btn btn-danger">Delete </a></td>
                    <td> <a href="update-todo?id=${todo.id}" class="btn btn-primary">Update </a></td>
                </tr>
            </c:forEach>
        </tbody>
    </table>
    <hr>
    <a href="add-todo" class="btn btn-success">Add Todo</a>
</div>
<%@ include file="common/footer.jspf" %>