import { Component, DoCheck, OnInit } from '@angular/core'
import { TitleStrategy } from '@angular/router'

//Interface
import { TaskList } from '../../model/task-list'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements DoCheck {
  //

  public taskList: Array<TaskList> = JSON.parse(
    localStorage.getItem('list') || '[]',
  )

  constructor() {}

  ngDoCheck(): void {
    this.setLocalStorage()
  }

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1)
  }

  public deleteAllTaskList() {
    const confirm = window.confirm('Deseja realmente deletar tudo?')
    if (confirm) this.taskList = []
  }

  public setEmitTaskList(event: string) {
    this.taskList.push({ task: event, checked: false })
  }

  public validationInput(event: string, index: number) {
    if (event.length === 0) {
      setTimeout(() => {
        this.deleteItemTaskList(index)
      }, 3000)
    }
  }

  public setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort(
        (first, last) => Number(first.checked) - Number(last.checked),
      )
      localStorage.setItem('list', JSON.stringify(this.taskList))
    }
  }
}
