import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

import { Observable } from 'rxjs';
import { LoaderService } from './loader.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    private activeRequests = 0;

    constructor(private loaderService: LoaderService) { }

    intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        if (this.activeRequests === 0) {
            this.loaderService.show();
        }

        this.activeRequests++;

        return next.handle(req).pipe(
            finalize(() => {
                this.activeRequests--;

                if (this.activeRequests === 0) {
                    this.loaderService.hide();
                }
            })
        );
    }
}
