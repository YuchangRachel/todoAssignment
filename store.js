import Vue from 'vue';
import { seedData } from './seed.js';

export const store = {
	state: {
		seedData
	},
	getActiveCourse() {
		return this.state.seedData.find((course) => course.active)
	},
	setActiveCourse(courseId) {
		this.state.seedData.map((courseObj) => {
			courseObj.id === courseId ? courseObj.active = true : courseObj.active = false;
		})
	},
	submitTodo(todoDescription) {
		const activeCourse = this.getActiveCourse();
		activeCourse.todos.push({
			description: todoDescription,
			done: false,
			edit: false
		})
	},
	editTodo(todo){
		const activeCourse = this.getActiveCourse();
		const index = activeCourse.todos.findIndex(function(element){
			return todo = element;
		})
	},
	deleteTodo(id, todo){
		this.setActiveCourse(id)
		const activeCourse=this.getActiveCourse();
		const index = activeCourse.todos.indexOf(todo);
		if(index===-1)
			return; 
		activeCourse.todos.splice(index,1)
	}
}
