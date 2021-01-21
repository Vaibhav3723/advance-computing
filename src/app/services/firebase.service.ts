import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { userInfo } from "../users/user-info";

@Injectable({
    providedIn: 'root'
})

export class FirebaseService {

    private dbPath = '/users';

    usersRef: AngularFireList<userInfo>=null;

    constructor(private db: AngularFireDatabase) {
        this.usersRef = db.list(this.dbPath);
    }

    createUserInfo(userInfo: userInfo) {
        this.usersRef.push(userInfo);
    }

    updateUserInfo(key: string, value: any): Promise<void> {
        return this.usersRef.update(key, value);
    }

    deleteUserInfo(key: string): Promise<void> {
        return this.usersRef.remove(key);
    }

    getUsersList(): AngularFireList<userInfo> {
        return this.usersRef;
    }

    deleteAll(): Promise<void> {
        return this.usersRef.remove();
    }

}