import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface Todo {
  text: string;
  completed: boolean;
  date: Date;
  id?: number | string;
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  public todos: Todo[] = [];

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('http://localhost:3000/todos').pipe(delay(3000));
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>('http://localhost:3000/todos', todo);
  }

  deleteTodo(id: number): Observable<Todo> {
    return this.http.delete<Todo>(`http://localhost:3000/todos/${id}`);
  }

  updateTodo(id: number, completed: boolean): Observable<Todo> {
    return this.http.patch<Todo>(`http://localhost:3000/todos/${id}`, {completed});
  }
}
