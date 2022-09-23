import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';
import { TodoService } from '../todo.service';
import { UpdateTaskPage } from '../update-task/update-task.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  todoList = [];

  constructor(
    public modelCtrl: ModalController,
    public todoService: TodoService
  ) {
    this.getAllTask();
  }

  // ionic g page addNewTask
  async addTask() {
    const model = await this.modelCtrl.create({
      component: AddNewTaskPage,
    });

    model.onDidDismiss().then((newTaskObj) => {
      this.getAllTask();
    });

    return await model.present();
  }

  getAllTask() {
    this.todoList = this.todoService.getAllTasks();
    console.log(this.todoService.getAllTasks());
  }

  async delete(key) {
    // this.todoList.splice(index, 1);
    this.todoService.deleteTask(key);
    this.getAllTask();
  }

  async update(selectedTask) {
    const modal = await this.modelCtrl.create({
      component: UpdateTaskPage,
      componentProps: { task: selectedTask },
    });

    modal.onDidDismiss().then(() => {
      this.getAllTask();
    });
    return await modal.present();
  }
}
