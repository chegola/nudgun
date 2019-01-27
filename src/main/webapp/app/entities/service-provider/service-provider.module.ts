import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NudgunSharedModule } from 'app/shared';
import {
    ServiceProviderComponent,
    ServiceProviderDetailComponent,
    ServiceProviderUpdateComponent,
    ServiceProviderDeletePopupComponent,
    ServiceProviderDeleteDialogComponent,
    serviceProviderRoute,
    serviceProviderPopupRoute
} from './';
import { AgmCoreModule } from '@agm/core';
const ENTITY_STATES = [...serviceProviderRoute, ...serviceProviderPopupRoute];

@NgModule({
    imports: [
        NudgunSharedModule,
        RouterModule.forChild(ENTITY_STATES),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDtxSjVVNJcmDNv5ikwzUO7zV0L_fMYsvI'
        })
    ],
    declarations: [
        ServiceProviderComponent,
        ServiceProviderDetailComponent,
        ServiceProviderUpdateComponent,
        ServiceProviderDeleteDialogComponent,
        ServiceProviderDeletePopupComponent
    ],
    entryComponents: [
        ServiceProviderComponent,
        ServiceProviderUpdateComponent,
        ServiceProviderDeleteDialogComponent,
        ServiceProviderDeletePopupComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NudgunServiceProviderModule {}
