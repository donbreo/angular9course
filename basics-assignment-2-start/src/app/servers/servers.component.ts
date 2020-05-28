import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
	userName = "username";
	buttonDisableFlag = false;
  constructor() {
	if (this.userName === "")
{
this.buttonDisableFlag = true;
}
 }

  ngOnInit(): void {
  }
onInputClick(){
		this.userName = '';
		// this.userName = (<HTMLInputElement>event.target).value;
		// if(this.userName === "") {
			this.buttonDisableFlag = true;
		// 	}
	
	}

onUpdateUserName(event: any){
	console.log(event);
	this.userName = (<HTMLInputElement>event.target).value;
	if ((<HTMLInputElement>event.target).value === ""){this.buttonDisableFlag = true;}
else {this.buttonDisableFlag = false;}
	}
}
