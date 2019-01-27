import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';

import { IServiceProvider } from 'app/shared/model/service-provider.model';
import { ServiceProviderService } from './service-provider.service';

@Component({
    selector: 'jhi-service-provider-update',
    templateUrl: './nu-service-provider-update.component.html'
})
export class ServiceProviderUpdateComponent implements OnInit {
    serviceProvider: IServiceProvider;
    isSaving: boolean;
    serviceStart: string;
    serviceEnd: string;

    constructor(protected serviceProviderService: ServiceProviderService, protected activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ serviceProvider }) => {
            this.serviceProvider = serviceProvider;
            this.serviceStart =
                this.serviceProvider.serviceStart != null ? this.serviceProvider.serviceStart.format(DATE_TIME_FORMAT) : null;
            this.serviceEnd = this.serviceProvider.serviceEnd != null ? this.serviceProvider.serviceEnd.format(DATE_TIME_FORMAT) : null;
        });
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        this.serviceProvider.serviceStart = this.serviceStart != null ? moment(this.serviceStart, DATE_TIME_FORMAT) : null;
        this.serviceProvider.serviceEnd = this.serviceEnd != null ? moment(this.serviceEnd, DATE_TIME_FORMAT) : null;
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

    onParkingAvailableChange() {
        this.serviceProvider.parkingAvailable = !this.serviceProvider.parkingAvailable;
    }

    onAcceptCreditCardChange() {
        this.serviceProvider.acceptCreditCard = !this.serviceProvider.acceptCreditCard;
    }
}
