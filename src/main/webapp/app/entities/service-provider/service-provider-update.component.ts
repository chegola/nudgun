import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from 'app/shared/constants/input.constants';

import { IServiceProvider } from 'app/shared/model/service-provider.model';
import { ServiceProviderService } from './service-provider.service';
import { GeoJson, IGeometry } from 'app/shared/geometry/map';

interface IAddress {
    long_name: string;
    short_name: string;
    types: string[];
}
interface IAddressComponent {
    address_components: IAddress[];
    formatted_address: string;
    geometry: { location: any };
}

interface IGeoResult {
    results: IAddressComponent[];
    status: string;
    error_message: string;
}

@Component({
    selector: 'jhi-service-provider-update',
    templateUrl: './nu-service-provider-update.component.html',
    styleUrls: ['map.css']
})
export class ServiceProviderUpdateComponent implements OnInit {
    private geoResults: Observable<IGeoResult>;
    private addresses: IGeoResult;

    serviceProvider: IServiceProvider;
    isSaving: boolean;
    serviceStart: string;
    serviceEnd: string;
    geoPosition: any;
    lat: number;
    lng: number;

    constructor(
        protected serviceProviderService: ServiceProviderService,
        protected activatedRoute: ActivatedRoute,
        protected http: HttpClient
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ serviceProvider }) => {
            this.serviceProvider = serviceProvider;
            this.serviceStart =
                this.serviceProvider.serviceStart != null ? this.serviceProvider.serviceStart.format(DATE_TIME_FORMAT) : null;
            this.serviceEnd = this.serviceProvider.serviceEnd != null ? this.serviceProvider.serviceEnd.format(DATE_TIME_FORMAT) : null;

            if (!this.serviceProvider.location) {
                this.getCurrentLocation();
            } else {
                this.lat = this.serviceProvider.location.coordinates[0];
                this.lng = this.serviceProvider.location.coordinates[1];
            }
        });
    }

    private getCurrentLocation(): void {
        this.getCurrentPosition().then(
            // able to get current position from browser
            () => {
                this.lat = this.geoPosition.coords.latitude;
                this.lng = this.geoPosition.coords.longitude;
                this.serviceProvider.location = this.createPoint(this.lat, this.lng);
            },
            // unable to get current position from browser, default to where???
            () => {
                this.lat = 13.7799939;
                this.lng = 100.6132358;
                this.serviceProvider.location = this.createPoint(this.lat, this.lng);
            }
        );
    }
    private createPoint(lat: number, lng: number): IGeometry {
        const coordinates = [];
        coordinates.push(this.lat);
        coordinates.push(this.lng);

        const geoJson = new GeoJson(coordinates);
        return geoJson.geometry;
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

    private getCurrentPosition() {
        return new Promise((resolve, reject) => {
            if (window.navigator && window.navigator.geolocation) {
                window.navigator.geolocation.getCurrentPosition(
                    position => {
                        this.geoPosition = position;
                        // console.log(position);
                        resolve();
                    },
                    error => {
                        switch (error.code) {
                            case 1:
                                console.log('Permission Denied');
                                break;
                            case 2:
                                console.log('Position Unavailable');
                                break;
                            case 3:
                                console.log('Timeout');
                                break;
                        }
                        reject();
                    }
                );
            }
        });
    }

    onMapClick(event) {
        this.geoResults = this.http.get<IGeoResult>(
            'https://maps.googleapis.com/maps/api/geocode/json?latlng=' +
                event.coords.lat +
                ',' +
                event.coords.lng +
                '&key=AIzaSyDtxSjVVNJcmDNv5ikwzUO7zV0L_fMYsvI&language=th'
        );
        this.geoResults.subscribe((result: IGeoResult) => {
            this.addresses = result;
            if (this.addresses.status !== 'OK') {
                this.serviceProvider.address = 'Error: ' + this.addresses.error_message + ', กรุณาคลิกบนแผนที่อีกครั้ง.';
                this.lat = 0;
                this.lng = 0;
            } else if (this.addresses.results[1].formatted_address) {
                this.serviceProvider.address = this.addresses.results[1].formatted_address;
                this.lat = this.addresses.results[1].geometry.location.lat;
                this.lng = this.addresses.results[1].geometry.location.lng;
            } else {
                this.serviceProvider.address = 'Could not get address from map, please manually fill by yourself.';
                this.lat = 0;
                this.lng = 0;
            }
        });
    }
}
