import React from 'react';

import {useState, useEffect} from 'react';



function mapTodosToComponent(todoObj) {
 return <ToDo key={todoObj._id} text={todoObj.text} />;
}

function ToDoWebsite (props) {
  const [todos, updateTodos] = useState([]);
  const [todoText, updateTodoText] = useState('');
useEffect(() => {
 (async () => {
      const res = await fetch('/http://jsonplaceholder.typicode.com/todos', {
        method: 'GET',
        credentials: 'same-origin'
      });

      const responseObj = await res.json();
      updateTodos(responseObj.todos);
    })();

  }, []);



  const saveTodo = async e => {
    if(todoText === '') {
      return;
    }

 const res = await fetch('http://jsonplaceholder.typicode.com/todos', {
 method: 'POST',
credentials: 'same-origin',
 headers: {
 'content-type': 'application/json',
 accept: 'application/json'
},
 body: JSON.stringify({
 todoText
 })
});

  const resBody = await res.json();
 if(resBody.success === false) {
 console.log('Operation failed!');
 return;
}

updateTodoText('');
 const getRes = await fetch('/http://jsonplaceholder.typicode.com/todos', {
 method: 'GET',
 credentials: 'same-origin'
});
 const responseObj = await getRes.json();
updateTodos(responseObj.todos);
 };
return (
 <div className="container todo-website">
  <div className="row new-todo-container">
<div className="col-9">

    

          <div className="col-3">

            <button className="btn btn-primary" onClick={saveTodo}>Save ToDo</button>

          </div>

    </div>

        <div className="row">

          {

            todos.map(mapTodosToComponent)

          }

        </div>

      </div>

    </div>

  );

};



export default ToDoWebsite;