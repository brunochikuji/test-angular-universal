import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertiesService } from '../services/properties.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'property-page',
    templateUrl: './property-detail.component.html',
    styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

    property: any = {};

    constructor(
        private _properties: PropertiesService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.params.pluck('code')
            .map((s: string) => s.replace(/.html$/, '')).subscribe(code => {
                this._properties.getProperty(code).subscribe(property => {
                    this.property = property;
                });
            });
    }

}
