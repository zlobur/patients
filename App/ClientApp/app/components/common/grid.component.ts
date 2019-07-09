import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Patient } from '../../models/patient';

@Component({
    selector: 'grid',
    template: `
        <kendo-grid [data]="gridData" [height]="410">
            <kendo-grid-column field="firstName" title="Имя" width="250">
            </kendo-grid-column>
            <kendo-grid-column field="lastName" title="Фамилия" width="250">
            </kendo-grid-column>
            <kendo-grid-column field="birthDate" title="Дата рождения" width="250">
            </kendo-grid-column>
        </kendo-grid>
    `,
    providers: [DataService]
})
export class GridComponent implements OnInit {
    public gridData: Patient[];

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.loadPatients();
    }

    loadPatients() {
        this.dataService.getPatients()
            .subscribe((data: Patient[]) => this.gridData = data);
    }
}


