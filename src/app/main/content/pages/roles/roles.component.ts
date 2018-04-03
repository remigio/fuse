import { Component, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { DataSource } from '@angular/cdk/collections';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';

import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';


@Component({
    selector   : 'fuse-roles',
    templateUrl: './roles.component.html',
    styleUrls  : ['./roles.component.scss'],
    animations : fuseAnimations
})

export class RolesComponent {

    displayedColumns = ['descrizione', 'elimina', 'vista','aggiorna','crea'];
    dataSource: MatTableDataSource<RoleData>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;



    constructor(
        private httpClient: HttpClient
    )
    {
        const roles: RoleData[] = [];
        this.dataSource = new MatTableDataSource(roles);

        this.httpClient.get('http://80.22.246.138:50480/api/ruolis').subscribe((data: any) => {
            for ( let i = 0; i < data['hydra:member'].length; i++ ){
                roles.push(createNewRole(data['hydra:member'][i]));
            }
        });

    }
    ngAfterViewInit()
    {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(filterValue: string)
    {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }
}

function createNewRole(data): RoleData
{
    return {
        codruolo : data.codruolo,
        descrizione : data.descrizione,
        elimina : data.elimina,
        vista : data.vista,
        aggiorna : data.aggiorna,
        crea : data.crea
    };
}

export interface RoleData
{
    codruolo: number;
    descrizione: string;
    elimina: boolean;
    vista: boolean;
    aggiorna: boolean;
    crea: boolean;
}

