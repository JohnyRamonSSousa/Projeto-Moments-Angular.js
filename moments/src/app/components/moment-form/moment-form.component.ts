import { Component, OnInit, Input } from '@angular/core';

import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent implements OnInit {
  @Input() btnText!: string;

  momentForm!: FormGroup

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log("enviar")
  }

}
