import { Todo, TodosService } from './services/todos.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public loading: boolean;
  public sub: Subscription;
  public filterStr = '';

  constructor(public todosService: TodosService) { }

  ngOnInit(): void {
    this.loading = true;

    this.sub = this.todosService.getTodos().subscribe((todos: Todo[]) => {
      this.todosService.todos = [...todos];
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    try {
      this.sub.unsubscribe();
    } catch (err) {}
  }

  onFilter(filterStr: string): void {
    this.filterStr = filterStr;
  }
}
