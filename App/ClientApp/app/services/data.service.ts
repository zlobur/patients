import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../models/patient';

@Injectable()
export class DataService {

    private url = "/api/patients";

    constructor(private http: HttpClient) {}

    getPatients() {
        return this.http.get(this.url)
    }

    createPatient(patient: Patient) {
        return this.http.post(this.url, patient);
    }
}