import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FirebaseService } from "../services/firebase.service";
import { take, takeUntil } from "rxjs/operators";
import { IUserInfo } from "./user.interface";
import { Subject } from "rxjs";
import { Router } from "@angular/router";

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {

    userForm: FormGroup;
    userInfo: IUserInfo;

    private readonly destroy$ = new Subject();

    constructor(
        private readonly firebaseService: FirebaseService,
        private readonly router: Router
    ) { }

    ngOnInit() {
        this.initForm();
        this.userForm.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(formData => {
            this.userInfo = {
                fullName: formData.fullName,
                mobileNo: formData.mobileNo,
                description: formData.description,
                gender: formData.gender,
                selectedCourse: formData.selectedCourse,
            }
        })
    }

    initForm() {
        this.userForm = new FormGroup({
            fullName: new FormControl('', Validators.required),
            mobileNo: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
            gender: new FormControl('', Validators.required),
            selectedCourse: new FormControl('', Validators.required),
        })
    }


    sumbitForm() {
        console.log(this.userForm);
        this.firebaseService.createUserInfo(this.userInfo);
        this.router.navigate(['/confirmation', this.userInfo.selectedCourse]);
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}