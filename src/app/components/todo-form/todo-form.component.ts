import { TodosService, Todo } from './../../services/todos.service';
import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnDestroy {

  @Input() loading: boolean;
  @Output() filter: EventEmitter<string> = new EventEmitter<string>();

  public text = '';
  public filterStr = '';
  public sub: Subscription;

  constructor(private todosService: TodosService) {}

  ngOnDestroy(): void {
    try {
      this.sub.unsubscribe();
    } catch (err) {}
  }

  addTodo(): void {
    if (this.text.trim() !== '' && !this.loading) {
      this.sub = this.todosService.addTodo({
        text: this.text,
        completed: false,
        date: new Date()
      }).subscribe((todo: Todo) => this.todosService.todos.push(todo));

      this.text = '';
    }
  }

  changeHandler(): void {
    this.filter.emit(this.filterStr);
  }
}
