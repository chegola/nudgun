/* tslint:disable max-line-length */
import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { take, map } from 'rxjs/operators';
import { ServiceProviderService } from 'app/entities/service-provider/service-provider.service';
import { IServiceProvider, ServiceProvider } from 'app/shared/model/service-provider.model';

describe('Service Tests', () => {
    describe('ServiceProvider Service', () => {
        let injector: TestBed;
        let service: ServiceProviderService;
        let httpMock: HttpTestingController;
        let elemDefault: IServiceProvider;
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule]
            });
            injector = getTestBed();
            service = injector.get(ServiceProviderService);
            httpMock = injector.get(HttpTestingController);

            elemDefault = new ServiceProvider(
                0,
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                'AAAAAAA',
                false,
                false,
                'AAAAAAA',
                'AAAAAAA'
            );
        });

        describe('Service methods', async () => {
            it('should find an element', async () => {
                const returnedFromService = Object.assign({}, elemDefault);
                service
                    .find(123)
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: elemDefault }));

                const req = httpMock.expectOne({ method: 'GET' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should create a ServiceProvider', async () => {
                const returnedFromService = Object.assign(
                    {
                        id: 0
                    },
                    elemDefault
                );
                const expected = Object.assign({}, returnedFromService);
                service
                    .create(new ServiceProvider(null))
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: expected }));
                const req = httpMock.expectOne({ method: 'POST' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should update a ServiceProvider', async () => {
                const returnedFromService = Object.assign(
                    {
                        name: 'BBBBBB',
                        profile_pic: 'BBBBBB',
                        services: 'BBBBBB',
                        openHour: 'BBBBBB',
                        address: 'BBBBBB',
                        phone: 'BBBBBB',
                        email: 'BBBBBB',
                        facebook: 'BBBBBB',
                        instragram: 'BBBBBB',
                        acceptCreditCard: true,
                        parkingAvailable: true,
                        description: 'BBBBBB',
                        priceRange: 'BBBBBB'
                    },
                    elemDefault
                );

                const expected = Object.assign({}, returnedFromService);
                service
                    .update(expected)
                    .pipe(take(1))
                    .subscribe(resp => expect(resp).toMatchObject({ body: expected }));
                const req = httpMock.expectOne({ method: 'PUT' });
                req.flush(JSON.stringify(returnedFromService));
            });

            it('should return a list of ServiceProvider', async () => {
                const returnedFromService = Object.assign(
                    {
                        name: 'BBBBBB',
                        profile_pic: 'BBBBBB',
                        services: 'BBBBBB',
                        openHour: 'BBBBBB',
                        address: 'BBBBBB',
                        phone: 'BBBBBB',
                        email: 'BBBBBB',
                        facebook: 'BBBBBB',
                        instragram: 'BBBBBB',
                        acceptCreditCard: true,
                        parkingAvailable: true,
                        description: 'BBBBBB',
                        priceRange: 'BBBBBB'
                    },
                    elemDefault
                );
                const expected = Object.assign({}, returnedFromService);
                service
                    .query(expected)
                    .pipe(
                        take(1),
                        map(resp => resp.body)
                    )
                    .subscribe(body => expect(body).toContainEqual(expected));
                const req = httpMock.expectOne({ method: 'GET' });
                req.flush(JSON.stringify([returnedFromService]));
                httpMock.verify();
            });

            it('should delete a ServiceProvider', async () => {
                const rxPromise = service.delete(123).subscribe(resp => expect(resp.ok));

                const req = httpMock.expectOne({ method: 'DELETE' });
                req.flush({ status: 200 });
            });
        });

        afterEach(() => {
            httpMock.verify();
        });
    });
});
