import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  myForm: FormGroup;
  @Input() tarik: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.myForm.valueChanges.subscribe((x) => {
      this.myForm.controls['childInput'].setValue(this.tarik);
    });
  }

  initForm() {
    this.myForm = this.formBuilder.group({
      childInput: ['x'],
    });
  }
}
