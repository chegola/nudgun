import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IServiceProvider } from 'app/shared/model/service-provider.model';

@Component({
    selector: 'jhi-service-provider-detail',
    templateUrl: './service-provider-detail.component.html'
})
export class ServiceProviderDetailComponent implements OnInit {
    serviceProvider: IServiceProvider;

    constructor(protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ serviceProvider }) => {
            this.serviceProvider = serviceProvider;
        });
    }

    previousState() {
        window.history.back();
    }
}
