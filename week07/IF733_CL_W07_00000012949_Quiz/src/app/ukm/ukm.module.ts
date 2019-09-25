import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UkmPage } from './ukm.page';
import {UkmRoutingModule} from "./ukm-routing.module";

const routes: Routes = [
    {
        path: '',
        component: UkmPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        UkmRoutingModule,
        RouterModule.forChild(routes)
    ],
    declarations: [UkmPage]
})
export class UkmPageModule {}
