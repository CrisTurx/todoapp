import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { EditTodoDialogComponent } from './edit-todo-dialog/edit-todo-dialog.component';

import { MatDialogModule } from '@angular/material/dialog';
import { ToolTipDirective } from './shared/tool-tip.directive';



@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    EditTodoDialogComponent,
    ToolTipDirective,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
