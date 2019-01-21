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

const ENTITY_STATES = [...serviceProviderRoute, ...serviceProviderPopupRoute];

@NgModule({
    imports: [NudgunSharedModule, RouterModule.forChild(ENTITY_STATES)],
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
