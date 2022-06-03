import { Component, OnInit } from '@angular/core';
import {faPencil} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
faPencil=faPencil;

  constructor() { }

  ngOnInit(): void {
  }

}
