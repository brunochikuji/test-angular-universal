import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '../services/properties.service';

@Component({
    selector: 'properties-page',
    templateUrl: './properties.component.html',
    // styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

    properties: any = [];

    constructor(
        private _properties: PropertiesService
    ) { }

    ngOnInit() {
        this._properties.getProperties().subscribe(
            properties => this.properties = properties);
    }

}
