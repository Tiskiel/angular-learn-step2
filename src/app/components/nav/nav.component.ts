import { Component, Input, OnInit } from '@angular/core';
import { Link } from 'src/app/shared/models/link.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() listeLien!: Link[]

  constructor() { }

  ngOnInit(): void {
  }

  switchChildrenVisible(index: number) {
    this.listeLien[index].isChildrenVisible = !this.listeLien[index].isChildrenVisible
  }



}
