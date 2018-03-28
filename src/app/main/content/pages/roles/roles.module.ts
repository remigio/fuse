import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FuseSharedModule } from '@fuse/shared.module';

import { RolesComponent } from './roles.component';

const routes = [
    {
        path     : 'roles',
        component: RolesComponent
    }
];

@NgModule({
    declarations: [
        RolesComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        FuseSharedModule
    ]
})
export class RolesModule
{
}
