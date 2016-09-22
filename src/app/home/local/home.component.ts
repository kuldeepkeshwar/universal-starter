import {Component,  OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
/**
 * Created by kuldeepkeshwar on 18/09/16.
 */
@Component({
  selector: 'local-home',
  template: require('./home.component.html'),
  styles:[require('./home.component.scss')]
})
export class Home implements OnInit{
constructor(private route: ActivatedRoute){}
  ngOnInit() {
    this.route.data.forEach((data)=>{
      console.log(data);
    });
  }
}
