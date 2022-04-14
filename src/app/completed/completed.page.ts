import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/api.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.page.html',
  styleUrls: ['./completed.page.scss'],
})
export class CompletedPage implements OnInit {
  public userData: any = JSON.parse(localStorage.getItem('user'));
  public Data: any = [];
  Role = localStorage.getItem('role');
  Requests: any = [];

  constructor(
    private api: ApiService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private toaster: ToastrService,
    private dataService: DataService
  ) {}

  ngOnInit() {
    var payload;
    if (this.Role == 'in-charge') {
      payload = {
        department: this.userData.department,
        semester: this.userData.semester,
        role: this.Role,
      };
      this.completedRequests(payload);
    } else if (this.Role === 'hod') {
      payload = { department: this.userData.department, role: this.Role };
      this.completedRequests(payload);
    } else if (this.Role === 'student') {
      payload = { id: this.userData.id, role: this.Role };
      //hod accepted
      this.api
        .Post(this.api.POST_URL.COMPLETED, payload)
        .subscribe((res: any) => {
          if (res.status == 'success') {
            for (let i = 0; i < res.data.length; i++) {
              let details = {
                id: res.data[i].id,
                status: res.data[i].status,
                request_id: res.data[i].request_id,
                name: res.data[i].name,
                regno: res.data[i].regno,
                department: res.data[i].department,
                semester: res.data[i].semester,
                year: res.data[i].year,
                description: JSON.parse(res.data[i].description),
                hactioned_at: res.data[i].hactioned_at,
                form_type: res.data[i].form_type,
              };
              this.Data.push(details);
              console.log(details);
  
              console.log(this.Requests);
            }
          } else {
            // this.toaster.error(res.message);
          }
        });
    }
  }

  completedRequests(payload) {
    this.api
      .Post(this.api.POST_URL.COMPLETED, payload)
      .subscribe((res: any) => {
        if (res.status == 'success') {
          console.log(res);

          this.spinner.hide();

          for (let i = 0; i < res.data.length; i++) {
            let details = {
              id: res.data[i].id,
              request_id: res.data[i].request_id,
              name: res.data[i].name,
              regno: res.data[i].regno,
              department: res.data[i].department,
              semester: res.data[i].semester,
              year: res.data[i].year,
              description: JSON.parse(res.data[i].description),
              requested_at: res.data[i].requested_at,
              form_type: res.data[i].form_type,
            };
            this.Requests.push(details);
            console.log(details);

            console.log(this.Requests);
          }
        }
      });
  }

  viewData(data){
    this.dataService.inprocessData = data;
    this.router.navigate(['/completed-forms']);

  }
}
