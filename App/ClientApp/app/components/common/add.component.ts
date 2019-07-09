import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Patient } from '../../models/patient';

@Component({
    selector: 'addPatient',
    templateUrl: 'add.component.html',
    styles: [`
        .content-row {
            margin-bottom: 20px;
            &:last-child {
                margin-bottom: 0;
            }
        }
        button + button {
            margin-left: 10px;
        }
    `],
    providers: [DataService]
})
export class AddPatientsComponent implements OnInit {
    patient: Patient = new Patient();
    patients: Patient[];
    
    constructor(private dataService: DataService) { }

    ngOnInit() {}
    loadPatients() {
        this.dataService.getPatients()
            .subscribe((data: Patient[]) => this.patients = data);
    }
    save() {
        debugger;
        this.dataService.createPatient(this.patient)
            .subscribe((data: Patient[]) => this.patients = data);
    }
    validDate() {
        return this.patient.birthDate > new Date('1800');
    }
}