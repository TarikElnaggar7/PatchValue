import {
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  myForm: FormGroup;
  private _selected: any;

  @Input()
  set player(value: any) {
    this._selected = value;
  }

  get player(): any {
    return this._selected;
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.myForm = this.formBuilder.group({
      childInput: [null],
    });
  }

  g() {
    this.myForm.controls['childInput'].setValue(this.tarikInput);
  }
}
