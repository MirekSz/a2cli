/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {UserService} from './user.service';
import {Http, ConnectionBackend, RequestOptions, BaseRequestOptions, HttpModule} from "@angular/http";

describe('UserService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            // providers: [UserService, {provide: Http, userClass: {}}]
            providers: [UserService]
        });
    });
    let service: UserService = null;
    beforeEach(inject([UserService], (userService: UserService) => {
        service = userService;
    }));


    it('should ...', () => {
        expect(service).toBeTruthy();
    });

    it('should get users...', (done) => {
        service.getUsers().subscribe((data) => {
            expect(data.length).toBeGreaterThan(0);
            done();
        })
    });
});
