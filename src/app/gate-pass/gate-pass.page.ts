import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-gate-pass',
  templateUrl: './gate-pass.page.html',
  styleUrls: ['./gate-pass.page.scss'],
})
export class GatePassPage implements OnInit {
  myForm: FormGroup;
  submitted = false;
  isGroup: boolean = false;

  @ViewChild('multiSelect') multiSelect;
  public loadContent: boolean = false;
  public data = [];
  public settings = {};
  public selectedItems = [];
  public UserData: any = JSON.parse(localStorage.getItem('user'));

  public Purpose = [
    'Paper Presentation',
    'Symposium',
    'Project',
    'Sports',
    'Sick',
    'Personal',
    'Others',
  ];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private api: ApiService,
    private toaster: ToastrService
  ) {}

  ngOnInit() {
    console.log(this.UserData);
    
    this.api
      .Post(this.api.POST_URL.GET_STUDENTS, {
        department: this.UserData.department,
        semester: this.UserData.semester,
      })
      .subscribe((res: any) => {
        if (res.status === 'success') {
          console.log(res);
          this.data = res.students;
        } else {
          this.toaster.error(res.status);
        }
      });

    this.settings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      enableCheckAll: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      limitSelection: -1,
      clearSearchFilter: true,
      maxHeight: 197,
      itemsShowLimit: 3,
      searchPlaceholderText: 'Search Name....',
      noDataAvailablePlaceholderText: 'No Data Available',
      closeDropDownOnSelection: false,
      showSelectedItemsAtTop: false,
      defaultOpen: false,
    };

    this.myForm = this.formBuilder.group({
      type: ['true', Validators.required],
      purpose: ['', Validators.required],
      reason: ['', Validators.required],
      // students: ['', Validators.required],
    });
  }

  check(e) {
    console.log(e.target.value);
    if (e.target.value === 'false') {
      this.isGroup = true;
      this.myForm.addControl(
        'students',
        new FormControl('', Validators.required)
      );
    } else if (e.target.value === 'true') {
      this.isGroup = false;
      this.myForm.removeControl('students');
    }
  }

  public onFilterChange(item: any) {
    console.log(item);
  }
  public onDropDownClose(item: any) {
    console.log(item);
  }

  public onItemSelect(item: any) {
    console.log(item);
  }
  public onDeSelect(item: any) {
    console.log(item);
  }

  public onSelectAll(items: any) {
    console.log(items);
  }
  public onDeSelectAll(items: any) {
    console.log(items);
  }

  get f() {
    return this.myForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.myForm.invalid) {
      return;
    } else {
      console.log(this.myForm.value);

      let payload = {
        user_id: this.UserData.id,
        form_type: 'gate pass',
        description: JSON.stringify(this.myForm.value),
        status: 'PFI',
        requested_at: Date.now(),
      }

      this.api.Post(this.api.POST_URL.REQUEST, payload).subscribe((data:any)=>{
        if(data.status === 'success'){
          this.toaster.success(data.message);
          this.router.navigate(['/home']);
        }else{
          this.toaster.error(data.message);
        }
      })
    }
  }
}
