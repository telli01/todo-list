<template>
  <h1>Todo Page</h1>
  <p>list of todos:</p>
  
  <input type="text" name="todo input" v-model="inputText" placeholder="Add a new todo" />
  <button @click="addTodo">add</button>

  <div>
    {{ todos }}
  </div>

  <ul style="list-style-type: none;">
    <li v-for="todo in todos" :key="todo.id" :id="todo.id">
      <input type="checkbox" :checked="true"/>
      {{ todo.text }}
    </li>
  </ul>
</template>

<script setup>  
  import { ref } from 'vue'
  // Reactive variable for todos
  const todos = ref([
    { id: 1, text: 'Learn Vue.js'},
    { id: 2, text: 'Build a Todo App'},
    { id: 3, text: 'Deploy the App'}
  ]);
  var inputText = ref('');

  function addTodo() {
    if (inputText.value.trim() === '') {
      alert('Please enter a todo item.');
    } else {
      todos.value.push({ id: todos.value.length + 1, text: inputText.value});
      inputText.value = ''; // Clear the input field after adding a todo
    }
  }

</script>