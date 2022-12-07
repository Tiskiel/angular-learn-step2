import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/shared/models/link.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  listeLien : Link[] = [
    {title : "Home", url : "home"},
    {title : "Demo", children :  [
      {title : "Bindings", url : "demo/demo1"},
      {title : "Pipes", url : "demo/demo2"},
      {title : "Directives", url : "demo/demo3"},
    ]},
    {title : "Exercices", children : [
      {title : "Chronomètre", url : "exercice/exo1"}
    ]}
  ]
  constructor() { }

  ngOnInit(): void {
  }

  switchChildrenVisible(index : number) {
    this.listeLien[index].isChildrenVisible = !this.listeLien[index].isChildrenVisible
  }

}
