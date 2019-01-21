import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IServiceProvider } from 'app/shared/model/service-provider.model';
import { ServiceProviderService } from './service-provider.service';

@Component({
    selector: 'jhi-service-provider-update',
    templateUrl: './service-provider-update.component.html'
})
export class ServiceProviderUpdateComponent implements OnInit {
    serviceProvider: IServiceProvider;
    isSaving: boolean;

    constructor(protected serviceProviderService: ServiceProviderService, protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ serviceProvider }) => {
            this.serviceProvider = serviceProvider;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.serviceProvider.id !== undefined) {
            this.subscribeToSaveResponse(this.serviceProviderService.update(this.serviceProvider));
        } else {
            this.subscribeToSaveResponse(this.serviceProviderService.create(this.serviceProvider));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<IServiceProvider>>) {
        result.subscribe((res: HttpResponse<IServiceProvider>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    protected onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError() {
        this.isSaving = false;
    }
}
