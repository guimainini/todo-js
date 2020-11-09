import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todosList = new TodoList();

todosList.todos.forEach(todo => crearTodoHtml (todo));
//todosList.todos.forEach( crearTodoHtml ; // es lo mismo

console.log( 'todos', todosList.todos );