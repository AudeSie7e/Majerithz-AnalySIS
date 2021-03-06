import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IAssetSubType } from 'app/shared/model/asset-sub-type.model';

type EntityResponseType = HttpResponse<IAssetSubType>;
type EntityArrayResponseType = HttpResponse<IAssetSubType[]>;

@Injectable({ providedIn: 'root' })
export class AssetSubTypeService {
    private resourceUrl = SERVER_API_URL + 'api/asset-sub-types';

    constructor(private http: HttpClient) {}

    create(assetSubType: IAssetSubType): Observable<EntityResponseType> {
        return this.http.post<IAssetSubType>(this.resourceUrl, assetSubType, { observe: 'response' });
    }

    update(assetSubType: IAssetSubType): Observable<EntityResponseType> {
        return this.http.put<IAssetSubType>(this.resourceUrl, assetSubType, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IAssetSubType>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IAssetSubType[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
