<template>
  <h1>Todo Page</h1>
  <p>list of todos:</p>
  
  <input @keypress.enter="addTodo" type="text" name="todo input" v-model="inputText" placeholder="Add a new todo" />
  <button @click="addTodo">add</button>

  <div>
    {{ todos }}
  </div>

  <div>
    <ul style="list-style-type: none;">
      <li v-for="todo in todos" :key="'todo-'+todo.id" :id="'todo-'+todo.id">
        <div>
          <input type="checkbox" :checked="todo.completed"/>
          {{ todo.title }}
          <button @click="deleteTodo(todo.id)">delete</button>
        </div>
      </li>
    </ul>
  </div>

  <div>
    {{ status }}
  </div>

</template>

<script setup>  
  import { ref } from 'vue'
  // Reactive variable for todos
  var todo_list = await useFetch('/api/getTodos', {
    method: 'GET'
  });
  const todos = ref(todo_list.data.value.results); // Initialize with fetched todos or empty array 
  var inputText = ref('');
  var debugVal = ref('Debugging is enabled');
  var status = ref('void'); // Reactive variable for status message

  async function addTodo() {
    var existingTodo = '';

    if (inputText.value.trim() === '') {
      alert('Please enter a todo item.');
    } else if (todos.value.some(todo => todo.title === inputText.value)) {
      alert('This todo already exists.');
    } else {
      todos.value.push({ id: todos.value.length + 1, title: inputText.value});
      inputText.value = ''; // Clear the input field after adding a todo
    }
    if (existingTodo) {
      alert(`Todo "${existingTodo}" already exists.`);
    }

    status = await useFetch('/api/addTodo', {
      method: 'POST',
      body: { text: inputText.value }
    })

  }
  function deleteTodo(id) {
    todos.value = todos.value.filter(todo => todo.id !== id);
  }

</script>