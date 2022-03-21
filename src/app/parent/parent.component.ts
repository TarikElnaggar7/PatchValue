import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
const response = {
  name: 22,
  password: 80,
  childInput: 77,
};

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  myForm: FormGroup;
  tarik: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.myForm = this.formBuilder.group({
      name: [null],
      password: [null],
    });
  }

  getData() {
    this.myForm.patchValue(response);
  }
}
