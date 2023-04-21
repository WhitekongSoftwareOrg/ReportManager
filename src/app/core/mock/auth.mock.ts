import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MockAuthService {
  MOCK_TOKEN = '1234567890';
}
