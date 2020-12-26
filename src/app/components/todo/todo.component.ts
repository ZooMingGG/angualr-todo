import { TodosService } from './../../services/todos.service';
import { Component, Input, OnDestroy } from '@angular/core';
import { Todo } from 'src/app/services/todos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnDestroy {

  @Input() todo: Todo;

  deleteSub: Subscription;
  updateSub: Subscription;

  constructor(private todosService: TodosService) { }

  ngOnDestroy(): void {
    try {
      this.deleteSub.unsubscribe();
      this.updateSub.unsubscribe();
    } catch (err) {}
  }

  deleteTodo(id: number): void {
    this.deleteSub = this.todosService.deleteTodo(id).subscribe(() => {
      this.todosService.todos = this.todosService.todos.filter((todo: Todo) => todo.id !== id);
    });
  }

  updateTodo(id: number, completed: boolean): void {
    this.updateSub = this.todosService.updateTodo(id, completed).subscribe(() => {
      const todo = this.todosService.todos.find((todo: Todo) => todo.id === id);
      const todoIdx = this.todosService.todos.findIndex((todo: Todo) => todo.id === id);

      todo.completed = completed;

      this.todosService.todos[todoIdx] = todo;
    });
  }
}
