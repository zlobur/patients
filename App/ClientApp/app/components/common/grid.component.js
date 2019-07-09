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
var GridComponent = /** @class */ (function () {
    function GridComponent(dataService) {
        this.dataService = dataService;
    }
    GridComponent.prototype.ngOnInit = function () {
        this.loadPatients();
    };
    GridComponent.prototype.loadPatients = function () {
        var _this = this;
        this.dataService.getPatients()
            .subscribe(function (data) { return _this.gridData = data; });
    };
    GridComponent = __decorate([
        Component({
            selector: 'grid',
            template: "\n        <kendo-grid [data]=\"gridData\" [height]=\"410\">\n            <kendo-grid-column field=\"firstName\" title=\"\u0418\u043C\u044F\" width=\"250\">\n            </kendo-grid-column>\n            <kendo-grid-column field=\"lastName\" title=\"\u0424\u0430\u043C\u0438\u043B\u0438\u044F\" width=\"250\">\n            </kendo-grid-column>\n            <kendo-grid-column field=\"birthDate\" title=\"\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F\" width=\"250\">\n            </kendo-grid-column>\n        </kendo-grid>\n    ",
            providers: [DataService]
        }),
        __metadata("design:paramtypes", [DataService])
    ], GridComponent);
    return GridComponent;
}());
export { GridComponent };
//# sourceMappingURL=grid.component.js.map