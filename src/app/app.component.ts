import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product} from './product' 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 /*myform:FormGroup;
  products: Product[]=[];
  constructor(){
    this.myform=new FormGroup({
      pname:new FormControl(null,[Validators.required]),
      pbrand:new FormControl(null,[Validators.required]),
      pprice:new FormControl(null,[Validators.required,Validators.pattern('[0-9]+')])
    });
  }

  store(){
    this.products.push(new Product(this.myform.value.pname,this.myform.value.pbrand,this.myform.value.pprice));
    console.log(this.products) 
    //this.myform.reset();
  }

  get pname(){
    return this.myform.get('pname');
  }

  get pbrand(){
    return this.myform.get('pbrand');
  }

  get pprice(){
    return this.myform.get('pprice');
  }*/
ProductTitle:string="SAMSUNG";
ProductPrice:number=12000;
Stock:number=5;

}
 


