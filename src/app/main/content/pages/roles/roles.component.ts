import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';

@Component({
    selector   : 'fuse-roles',
    templateUrl: './roles.component.html',
    styleUrls  : ['./roles.component.scss'],
    animations : fuseAnimations
})
export class RolesComponent implements OnInit {
    private data: any;
    
    constructor(
        private httpClient: HttpClient,
        private fuseConfig: FuseConfigService
    )
    {
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar   : 'none',
                footer    : 'none'
            }
        });
    }
    
    ngOnInit() {
        this.httpClient.get('http://80.22.246.138:50480/api/ruolis').subscribe((data: any) => {
            this.data = data;
        });
    }    
}
