var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Patient } from '../../models/patient';
var AddPatientsComponent = /** @class */ (function () {
    function AddPatientsComponent(dataService) {
        this.dataService = dataService;
        this.patient = new Patient();
    }
    AddPatientsComponent.prototype.ngOnInit = function () { };
    AddPatientsComponent.prototype.loadPatients = function () {
        var _this = this;
        this.dataService.getPatients()
            .subscribe(function (data) { return _this.patients = data; });
    };
    AddPatientsComponent.prototype.save = function () {
        var _this = this;
        debugger;
        this.dataService.createPatient(this.patient)
            .subscribe(function (data) { return _this.patients = data; });
    };
    AddPatientsComponent.prototype.validDate = function () {
        return this.patient.birthDate > new Date('1800');
    };
    AddPatientsComponent = __decorate([
        Component({
            selector: 'addPatient',
            templateUrl: 'add.component.html',
            styles: ["\n        .content-row {\n            margin-bottom: 20px;\n            &:last-child {\n                margin-bottom: 0;\n            }\n        }\n        button + button {\n            margin-left: 10px;\n        }\n    "],
            providers: [DataService]
        }),
        __metadata("design:paramtypes", [DataService])
    ], AddPatientsComponent);
    return AddPatientsComponent;
}());
export { AddPatientsComponent };
//# sourceMappingURL=add.component.js.map