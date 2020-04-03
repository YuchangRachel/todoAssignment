<template>
<div class="columns">
  <div class="column is-three-fifths">
	<div v-if="todo.edit">
	<input type="text" v-model="todo.description" @blur="todo.edit = false" @keyup.enter="editTodo(todo)">
	</div>
	<div v-else>
    <label class="checkbox">
      <input type="checkbox" v-model="todo.done"> <span :class="{done: todo.done}">{{todo.description}}</span>
    </label>
	</div>
  </div>
  <div class="column has-text-right">
    <!-- Edit and Delete icons/link go here -->
	<span class="icon">
	<i class="fa fa-trash has-text-danger" @click="deleteTodo(course.id, todo)"></i>
	</span>
	<span class="icon">
	<i class="fa fa-edit has-text-info" @click="todo.edit = true"></i>
	</span>
  </div>
</div>
</template>


<script>
  import { store } from '../store.js';
  export default {
      name: 'CourseTodo',
      data () {
          return {
          }
      },
      props: ['todo', 'course'],
      methods: {
        toggleTodo (courseId, description) {
          store.toggleTodo(courseId, description )
        },
		editTodo(todo){
			this.todo.edit = false;
			store.editTodo(todo);
		},
		deleteTodo(courseId, todo){
			store.deleteTodo(courseId, todo)
		}
      }
  }
</script>

<style>
.fa-trash {
    color: red;
}
.done {
  text-decoration: line-through;
}
.icon {
cursor: pointer;
}
</style>
