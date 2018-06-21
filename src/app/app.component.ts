import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  bools: Array<boolean> = [true, false];
  nums: Array<number> = [1, 2.5, 5];
  strs: Array<string> = ['hi', 'there'];
  test: object = {
    id: 2,
    name: 'test'
  };
  user: object = {
    id: 2,
    name: 'user'
  };
  objs: Array<object> = [this.test, this.user];
  types: Array<any> = [this.bools, this.nums, this.strs, this.objs];
  ngOnInit() {

  }
  getTypeof(types) {
    return typeof types;
  }
}
