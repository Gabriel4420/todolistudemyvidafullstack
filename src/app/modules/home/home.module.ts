import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './components/header/header.component'
import { TodoButtonDeleteAllComponent } from './components/todo-button-delete-all/todo-button-delete-all.component'
import { TodoInputAddItensComponent } from './components/todo-input-add-itens/todo-input-add-itens.component'
import { TodolistComponent } from './components/todolist/todolist.component'
import { HomeComponent } from './pages/home/home.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    HeaderComponent,
    TodoButtonDeleteAllComponent,
    TodoInputAddItensComponent,
    TodolistComponent,
    HomeComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [HomeComponent],
})
export class HomeModule {}
