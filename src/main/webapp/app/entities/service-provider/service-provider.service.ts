import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IServiceProvider } from 'app/shared/model/service-provider.model';

type EntityResponseType = HttpResponse<IServiceProvider>;
type EntityArrayResponseType = HttpResponse<IServiceProvider[]>;

@Injectable({ providedIn: 'root' })
export class ServiceProviderService {
    public resourceUrl = SERVER_API_URL + 'api/service-providers';

    constructor(protected http: HttpClient) {}

    create(serviceProvider: IServiceProvider): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(serviceProvider);
        return this.http
            .post<IServiceProvider>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    update(serviceProvider: IServiceProvider): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(serviceProvider);
        return this.http
            .put<IServiceProvider>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http
            .get<IServiceProvider>(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http
            .get<IServiceProvider[]>(this.resourceUrl, { params: options, observe: 'response' })
            .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    protected convertDateFromClient(serviceProvider: IServiceProvider): IServiceProvider {
        const copy: IServiceProvider = Object.assign({}, serviceProvider, {
            serviceHour:
                serviceProvider.serviceHour != null && serviceProvider.serviceHour.isValid() ? serviceProvider.serviceHour.toJSON() : null
        });
        return copy;
    }

    protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
        if (res.body) {
            res.body.serviceHour = res.body.serviceHour != null ? moment(res.body.serviceHour) : null;
        }
        return res;
    }

    protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
        if (res.body) {
            res.body.forEach((serviceProvider: IServiceProvider) => {
                serviceProvider.serviceHour = serviceProvider.serviceHour != null ? moment(serviceProvider.serviceHour) : null;
            });
        }
        return res;
    }
}
