/**
 * Demo API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { Periodicity } from '../model/periodicity';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class PeriodicitiesService {

    protected basePath = '/';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * 
     * @param skip 
     * @param take 
     * @param orderBy 
     * @param orderDirection 
     * @param periodicityId 
     * @param periodicityName 
     * @param periodicityDescription 
     * @param periodicityType 
     * @param periodicityQuantity 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiPeriodicitiesGet(skip?: number, take?: number, orderBy?: string, orderDirection?: string, periodicityId?: number, periodicityName?: string, periodicityDescription?: string, periodicityType?: number, periodicityQuantity?: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Periodicity>>;
    public apiPeriodicitiesGet(skip?: number, take?: number, orderBy?: string, orderDirection?: string, periodicityId?: number, periodicityName?: string, periodicityDescription?: string, periodicityType?: number, periodicityQuantity?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Periodicity>>>;
    public apiPeriodicitiesGet(skip?: number, take?: number, orderBy?: string, orderDirection?: string, periodicityId?: number, periodicityName?: string, periodicityDescription?: string, periodicityType?: number, periodicityQuantity?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Periodicity>>>;
    public apiPeriodicitiesGet(skip?: number, take?: number, orderBy?: string, orderDirection?: string, periodicityId?: number, periodicityName?: string, periodicityDescription?: string, periodicityType?: number, periodicityQuantity?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {










        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (skip !== undefined && skip !== null) {
            queryParameters = queryParameters.set('skip', <any>skip);
        }
        if (take !== undefined && take !== null) {
            queryParameters = queryParameters.set('take', <any>take);
        }
        if (orderBy !== undefined && orderBy !== null) {
            queryParameters = queryParameters.set('orderBy', <any>orderBy);
        }
        if (orderDirection !== undefined && orderDirection !== null) {
            queryParameters = queryParameters.set('orderDirection', <any>orderDirection);
        }
        if (periodicityId !== undefined && periodicityId !== null) {
            queryParameters = queryParameters.set('periodicityId', <any>periodicityId);
        }
        if (periodicityName !== undefined && periodicityName !== null) {
            queryParameters = queryParameters.set('periodicityName', <any>periodicityName);
        }
        if (periodicityDescription !== undefined && periodicityDescription !== null) {
            queryParameters = queryParameters.set('periodicityDescription', <any>periodicityDescription);
        }
        if (periodicityType !== undefined && periodicityType !== null) {
            queryParameters = queryParameters.set('periodicityType', <any>periodicityType);
        }
        if (periodicityQuantity !== undefined && periodicityQuantity !== null) {
            queryParameters = queryParameters.set('periodicityQuantity', <any>periodicityQuantity);
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<Periodicity>>('get',`${this.basePath}/api/Periodicities`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiPeriodicitiesIdDelete(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiPeriodicitiesIdDelete(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiPeriodicitiesIdDelete(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiPeriodicitiesIdDelete(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling apiPeriodicitiesIdDelete.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('delete',`${this.basePath}/api/Periodicities/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiPeriodicitiesIdGet(id: number, observe?: 'body', reportProgress?: boolean): Observable<Periodicity>;
    public apiPeriodicitiesIdGet(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Periodicity>>;
    public apiPeriodicitiesIdGet(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Periodicity>>;
    public apiPeriodicitiesIdGet(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling apiPeriodicitiesIdGet.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Periodicity>('get',`${this.basePath}/api/Periodicities/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param id 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiPeriodicitiesIdPut(id: number, body?: Periodicity, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiPeriodicitiesIdPut(id: number, body?: Periodicity, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiPeriodicitiesIdPut(id: number, body?: Periodicity, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiPeriodicitiesIdPut(id: number, body?: Periodicity, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling apiPeriodicitiesIdPut.');
        }


        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('put',`${this.basePath}/api/Periodicities/${encodeURIComponent(String(id))}`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiPeriodicitiesPost(body?: Periodicity, observe?: 'body', reportProgress?: boolean): Observable<Periodicity>;
    public apiPeriodicitiesPost(body?: Periodicity, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Periodicity>>;
    public apiPeriodicitiesPost(body?: Periodicity, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Periodicity>>;
    public apiPeriodicitiesPost(body?: Periodicity, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<Periodicity>('post',`${this.basePath}/api/Periodicities`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
