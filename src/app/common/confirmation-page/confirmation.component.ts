import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-confirm',
    templateUrl: './confirmation.component.html'
})
export class ConfirmationComponent implements OnInit {
 courseName: string;

 constructor(private readonly activatedRoute: ActivatedRoute) {}

 ngOnInit() {
     this.courseName = this.activatedRoute.snapshot.params['courseName'];
 }
}