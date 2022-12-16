import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit{


  constructor() { }

  ngOnInit(): void {
     $(function(){
  
      var body=$("body")
      var sidebar=$(".sidebar")
      var toggle=$(".switch")
      $(".toggle-switch").click(function(){
        body.toggleClass("dark")
        $(".switch").toggleClass("dark")
      })

  
     })
  }

}
  

