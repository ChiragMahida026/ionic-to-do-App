import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {
  taskName;
  taskObject;
  constructor(
    public modelCtrl: ModalController,
    public todoService: TodoService
  ) {}

  ngOnInit() {
    // this.taskObject.push("work")
  }
  async AddTask() {
    // multi filed add here
    this.taskObject = { taskName: this.taskName };
    // multi object store // let uid = this.taskName + this.taskName
    let uid = this.taskName;
    if (uid) {
      await this.todoService.addTask(uid, this.taskObject);
    } else {
      console.log('cant save empty task');
    }
    this.dismiss();
  }

  async dismiss() {
    await this.modelCtrl.dismiss(this.taskObject);
  }
}
