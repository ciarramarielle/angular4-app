import { TestBed, inject } from '@angular/core/testing';

// Testing HTTP and mocking backend
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { DataService } from './data.service';

fdescribe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],      
      providers: [
        DataService,
        { provide: XHRBackend, useClass: MockBackend }        
      ]
    });
  });

  it('should be created', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));

  describe('getChampionsStatic()', () => {
    it('should return an array of champions', inject([DataService, XHRBackend], (dataService, mockBackend) => {
      const mockResponse = {
        data: [
          {
            "MonkeyKing": {
                "image": {
                    "full": "MonkeyKing.png",
                    "group": "champion",
                    "sprite": "champion2.png",
                    "h": 48,
                    "w": 48,
                    "y": 48,
                    "x": 48
                },
                "title": "the Monkey King",
                "id": 62,
                "key": "MonkeyKing",
                "name": "Wukong"
            }
          }
        ]
      };

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
          // This looks like it's just returning as is, while my service
          //  processes the data first... 
        })));
      });

      dataService.getChampionsStatic().subscribe((champions) => {
        expect(champions[0]).toEqual(mockResponse.data[0]);
      });
    }))
  })
});
