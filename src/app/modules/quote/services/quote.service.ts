import { Injectable } from '@angular/core';

@Injectable()
export class QuoteService {
    constructor() { }
    getNewGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    setDataToStorage(key:string,data:any){
        localStorage.setItem(key,data);
    }
    getDataFromStorage(key:string){
        if(localStorage.getItem(key))
            localStorage.getItem(key);
    }
}