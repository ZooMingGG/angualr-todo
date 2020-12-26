import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoComponent } from './components/todo/todo.component';
import { FilterPipe } from './pipes/filter.pipe';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoComponent,
    FilterPipe,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
