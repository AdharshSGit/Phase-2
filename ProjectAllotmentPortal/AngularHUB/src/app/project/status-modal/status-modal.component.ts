import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeProject } from 'src/app/Data/EmployeeProject';
import { DataService } from 'src/app/Data/data.service';


interface Status
{
  key: string;
  value: number;
}

@Component({
  selector: 'app-status-modal',
  templateUrl: './status-modal.component.html',
  styleUrls: ['./status-modal.component.css']
})
export class StatusModalComponent{

  action:string;
  local_data:any;
  statusform : any;
  Id : number;
  status : string;

  StatusList: Array<Status> = [
    { key: 'Allocated', value: 1 },
    { key: 'Waiting for Allocation', value: 2 }
  ]
  empStatus : EmployeeProject = new EmployeeProject();

  constructor(
    public dialogRef: MatDialogRef<StatusModalComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Status, private form: FormBuilder,
                        private dataservice : DataService ) {

      console.log(data);
      this.local_data = {...data};
      this.action = this.local_data.action;
      this.Id = this.local_data.EmployeeStream_Id;
      console.log(this.local_data.EmployeeStream_Id);
     }

     ngOnInit(){
      this.statusform = this.form.group({    
        statusid: ['',Validators.required]   // will use the property in html page  
        })  
        
      
    }

  doAction(){
    this.empStatus.StatusInfo = this.statusform.get('statusid').value.key;
    this.status = this.empStatus.StatusInfo;
    console.log(this.empStatus.StatusInfo);
    console.log(this.local_data.StatusInfo);
    this.dataservice.UpdateEmployeeProjStatus(this.Id,this.status).subscribe();
    console.log(this.local_data);
    this.dialogRef.close();
    
    
 
  }
 
  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}