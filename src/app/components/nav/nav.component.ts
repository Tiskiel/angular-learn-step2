import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/shared/models/link.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  listeLien : Link[] = [
    {title : "Home", url : "home"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
