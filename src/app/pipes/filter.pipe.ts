import { Todo } from 'src/app/services/todos.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filterStr: string): Todo[] {
    if (filterStr === '') {
      return todos;
    } else {
      return todos.filter(todo => todo.text.toLowerCase().includes(filterStr.toLocaleLowerCase()));
    }
  }

}
