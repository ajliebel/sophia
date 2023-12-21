import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-references-dialog',
  templateUrl: './references-dialog.component.html',
  styleUrls: ['./references-dialog.component.css']
})
export class ReferencesDialogComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit")
    // Access nativeElement here
    if (this.dialog) {
      // Safely access this.myElement.nativeElement
      const nativeElement = this.dialog.nativeElement;
      // ...
    }
  }

  selectedReference: string = 'default';

  @ViewChild('dialog') dialog: ElementRef;

  closeDialogWithSelection() {
    this.dialog.nativeElement.style.display = 'none';
    // You can also use jQuery or JavaScript to hide the dialog if you prefer.
    // Then, return the selected country to the calling component.
  }

}

