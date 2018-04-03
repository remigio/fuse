import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdkTableModule } from '@angular/cdk/table';

import { MatButtonModule, MatChipsModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatRippleModule, MatSelectModule, MatSortModule, MatTableModule, MatTabsModule } from '@angular/material';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';

import { FuseOperatoriComponent } from './operatori.component';
import { OperatoriService } from './operatori.service';

const routes: Routes = [
    {
        path     : 'operatori',
        component: FuseOperatoriComponent,
        resolve  : {
            data: OperatoriService
        }
    }
];

@NgModule({
    declarations: [
        FuseOperatoriComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        CdkTableModule,
        MatButtonModule,
        MatChipsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatRippleModule,
        MatSelectModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,

        NgxChartsModule,
        

        FuseSharedModule,
        FuseWidgetModule,
    ],
    providers   : [
        OperatoriService
    ]
})
export class FuseOperatoriModule
{
}
