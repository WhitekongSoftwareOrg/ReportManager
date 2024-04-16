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

import { AnyType } from '../model/anyType';
import { ListResponseReportState } from '../model/listResponseReportState';
import { ReportState } from '../model/reportState';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ReportStatesService {

    protected basePath = 'https://ceteckpiapp.grupoceteck.com:44348';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        // if (basePath) {
        //     this.basePath = basePath;
        // }
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
     * @param reportStateId 
     * @param reportStateName 
     * @param reportStateState 
     * @param reportStateDeleted 
     * @param reportId 
     * @param reportStateDateFile 
     * @param reportStateLastMod 
     * @param reportStateModNotes 
     * @param reportStateType 
     * @param reportStateAttachedFileName 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiReportStatesGet(skip?: number, take?: number, orderBy?: string, orderDirection?: string, reportStateId?: number, reportStateName?: string, reportStateState?: number, reportStateDeleted?: AnyType, reportId?: number, reportStateDateFile?: Date, reportStateLastMod?: Date, reportStateModNotes?: string, reportStateType?: number, reportStateAttachedFileName?: string, observe?: 'body', reportProgress?: boolean): Observable<ListResponseReportState>;
    public apiReportStatesGet(skip?: number, take?: number, orderBy?: string, orderDirection?: string, reportStateId?: number, reportStateName?: string, reportStateState?: number, reportStateDeleted?: AnyType, reportId?: number, reportStateDateFile?: Date, reportStateLastMod?: Date, reportStateModNotes?: string, reportStateType?: number, reportStateAttachedFileName?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ListResponseReportState>>;
    public apiReportStatesGet(skip?: number, take?: number, orderBy?: string, orderDirection?: string, reportStateId?: number, reportStateName?: string, reportStateState?: number, reportStateDeleted?: AnyType, reportId?: number, reportStateDateFile?: Date, reportStateLastMod?: Date, reportStateModNotes?: string, reportStateType?: number, reportStateAttachedFileName?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ListResponseReportState>>;
    public apiReportStatesGet(skip?: number, take?: number, orderBy?: string, orderDirection?: string, reportStateId?: number, reportStateName?: string, reportStateState?: number, reportStateDeleted?: AnyType, reportId?: number, reportStateDateFile?: Date, reportStateLastMod?: Date, reportStateModNotes?: string, reportStateType?: number, reportStateAttachedFileName?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {















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
        if (reportStateId !== undefined && reportStateId !== null) {
            queryParameters = queryParameters.set('reportStateId', <any>reportStateId);
        }
        if (reportStateName !== undefined && reportStateName !== null) {
            queryParameters = queryParameters.set('reportStateName', <any>reportStateName);
        }
        if (reportStateState !== undefined && reportStateState !== null) {
            queryParameters = queryParameters.set('reportStateState', <any>reportStateState);
        }
        if (reportStateDeleted !== undefined && reportStateDeleted !== null) {
            queryParameters = queryParameters.set('reportStateDeleted', <any>reportStateDeleted);
        }
        if (reportId !== undefined && reportId !== null) {
            queryParameters = queryParameters.set('reportId', <any>reportId);
        }
        if (reportStateDateFile !== undefined && reportStateDateFile !== null) {
            queryParameters = queryParameters.set('reportStateDateFile', <any>reportStateDateFile.toISOString());
        }
        if (reportStateLastMod !== undefined && reportStateLastMod !== null) {
            queryParameters = queryParameters.set('reportStateLastMod', <any>reportStateLastMod.toISOString());
        }
        if (reportStateModNotes !== undefined && reportStateModNotes !== null) {
            queryParameters = queryParameters.set('reportStateModNotes', <any>reportStateModNotes);
        }
        if (reportStateType !== undefined && reportStateType !== null) {
            queryParameters = queryParameters.set('reportStateType', <any>reportStateType);
        }
        if (reportStateAttachedFileName !== undefined && reportStateAttachedFileName !== null) {
            queryParameters = queryParameters.set('reportStateAttachedFileName', <any>reportStateAttachedFileName);
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

        return this.httpClient.request<ListResponseReportState>('get',`${this.basePath}/api/ReportStates`,
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
    public apiReportStatesIdDelete(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiReportStatesIdDelete(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiReportStatesIdDelete(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiReportStatesIdDelete(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling apiReportStatesIdDelete.');
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

        return this.httpClient.request<any>('delete',`${this.basePath}/api/ReportStates/${encodeURIComponent(String(id))}`,
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
    public apiReportStatesIdGet(id: number, observe?: 'body', reportProgress?: boolean): Observable<ReportState>;
    public apiReportStatesIdGet(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ReportState>>;
    public apiReportStatesIdGet(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ReportState>>;
    public apiReportStatesIdGet(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling apiReportStatesIdGet.');
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

        return this.httpClient.request<ReportState>('get',`${this.basePath}/api/ReportStates/${encodeURIComponent(String(id))}`,
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
    public apiReportStatesIdPut(id: number, body?: ReportState, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiReportStatesIdPut(id: number, body?: ReportState, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiReportStatesIdPut(id: number, body?: ReportState, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiReportStatesIdPut(id: number, body?: ReportState, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling apiReportStatesIdPut.');
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

        return this.httpClient.request<any>('put',`${this.basePath}/api/ReportStates/${encodeURIComponent(String(id))}`,
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
    public apiReportStatesPost(body?: ReportState, observe?: 'body', reportProgress?: boolean): Observable<ReportState>;
    public apiReportStatesPost(body?: ReportState, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ReportState>>;
    public apiReportStatesPost(body?: ReportState, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ReportState>>;
    public apiReportStatesPost(body?: ReportState, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.request<ReportState>('post',`${this.basePath}/api/ReportStates`,
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
    public apiReportStatesRemoveByIdsPut(body?: Array<number>, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiReportStatesRemoveByIdsPut(body?: Array<number>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiReportStatesRemoveByIdsPut(body?: Array<number>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiReportStatesRemoveByIdsPut(body?: Array<number>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


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

        return this.httpClient.request<any>('put',`${this.basePath}/api/ReportStates/removeByIds`,
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
