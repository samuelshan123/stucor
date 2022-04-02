import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

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
public Purpose=["Paper Presentation","Symposium","Project","Sports","Sick","Personal","Others"];
  constructor(private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit() {

    this.data = [
      { item_id: 1, item_text: 'Ashik' },
      { item_id: 2, item_text: 'Bibin' },
      { item_id: 3, item_text: 'Jerry' },
      { item_id: 4, item_text: 'Samuel' },
      { item_id: 5, item_text: 'sahaya anish' },
    ];
    // setting and support i18n
    this.settings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
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

  check(e){
    console.log(e.target.value); 
    if (e.target.value==='false') {
      this.isGroup =true
      this.myForm.addControl('students',new FormControl('',Validators.required));
    } else if(e.target.value==='true') {
      this.isGroup =false
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

  get f() { return this.myForm.controls; }

  onSubmit() {
      this.submitted = true;
      if (this.myForm.invalid) {
          return;
      }else{
     console.log(this.myForm.value);
         
  
        }
  
    }
  }