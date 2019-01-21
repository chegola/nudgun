import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { NudgunServiceProviderModule } from './service-provider/service-provider.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        NudgunServiceProviderModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NudgunEntityModule {}
