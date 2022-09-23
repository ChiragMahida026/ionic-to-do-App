import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.page.html',
  styleUrls: ['./update-task.page.scss'],
})
export class UpdateTaskPage implements OnInit {
  @Input() task;
  taskName;
  taskObject = {};
  constructor(
    public modelCtrl: ModalController,
    public todoService: TodoService
  ) {}

  ngOnInit() {
    console.log(this.task);
    this.taskName = this.task.value.taskName;
  }

  async dismiss() {
    await this.modelCtrl.dismiss();
  }
  async update() {
    this.taskObject = { taskName: this.taskName };
    let uid = this.task.key;

    await this.todoService.updateTask(uid, this.taskObject);
    this.dismiss();
  }
}
