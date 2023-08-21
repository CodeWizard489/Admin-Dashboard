import { Injectable, OnInit, Signal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

interface endpoint {
  agent: agent;
  id: number;
  name: string;
  status: string;
  lastUpdate: string;
  version: string;
  tag: string[];
  organisationUnit: string;
  kunde: string;
  betriebsystem: string;
}

interface agent {
  id: string;
  setupId: string;
  version: string;
  zuletztGesehen: string;
  letztesUpdate: string;
  analystSession: string;
  stopMalware: boolean;
  response: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class EndpointDataService {
  data :Signal< endpoint[] | undefined>;
  constructor(private httpClient: HttpClient) {
    
 this.test$ = this.fetchData()
 this.data = toSignal<endpoint[]>(this.test$)
}

test$!: Observable<endpoint[]>
  tmp = 1;

  agent: agent = {
    id: 'as9f89gh8ad9gh7s8d7g8d7f897gs8a9sj132423',
    setupId: '24hjkh23h5hkj9jh08h7gjoihfoigu9090',
    version: '20230124_1155',
    zuletztGesehen: '24.01.2023, 13:09:02',
    letztesUpdate: '01.01.2000, 01:00:03',
    analystSession: 'Inaktiv',
    stopMalware: true,
    response: true,
  };

  getEndpoint(id: number) {
    for (const element of this.data()!) {
      if (element.id === id) return element;
    }
    return undefined;
  }

  fetchData() {
    const url = "http://localhost:3000/endpoints"
    return this.httpClient.get<endpoint[]>(url, {});
  }

}

//   data = signal<endpoint[]>([
//     {
//       agent: structuredClone(this.agent),
//       id: this.tmp++,
//       name: 'Simon',
//       status: 'online',
//       lastUpdate: '01',
//       version: '1.0.1',
//       tag: ['hello', 'test'],
//       organisationUnit: '1412',
//       kunde: 'Google',
//       betriebsystem: 'Windows XP',
//     },
//     {
//       agent: structuredClone(this.agent),
//       id: this.tmp++,
//       name: 'Simon',
//       status: 'online',
//       lastUpdate: '02',
//       version: '1.0.1',
//       tag: ['hello'],
//       organisationUnit: '1412',
//       kunde: 'Google',
//       betriebsystem: 'Windows XP',
//     },
//     {
//       agent: structuredClone(this.agent),
//       id: this.tmp++,
//       name: 'Simon',
//       status: 'online',
//       lastUpdate: '03',
//       version: '1.0.1',
//       tag: ['hello'],
//       organisationUnit: '1412',
//       kunde: 'Google',
//       betriebsystem: 'Windows XP',
//     },
//     {
//       agent: structuredClone(this.agent),
//       id: this.tmp++,
//       name: 'Simon',
//       status: 'online',
//       lastUpdate: '04',
//       version: '1.0.1',
//       tag: ['hello'],
//       organisationUnit: '1412',
//       kunde: 'Google',
//       betriebsystem: 'Windows XP',
//     },
//     {
//       agent: structuredClone(this.agent),
//       id: this.tmp++,
//       name: 'Simon',
//       status: 'online',
//       lastUpdate: '05',
//       version: '1.0.1',
//       tag: ['hello'],
//       organisationUnit: '1412',
//       kunde: 'Google',
//       betriebsystem: 'Windows XP',
//     },
//     {
//       agent: structuredClone(this.agent),
//       id: this.tmp++,
//       name: 'Simon',
//       status: 'online',
//       lastUpdate: '06',
//       version: '1.0.1',
//       tag: ['hello'],
//       organisationUnit: '1412',
//       kunde: 'Google',
//       betriebsystem: 'Windows XP',
//     },
//     {
//       agent: structuredClone(this.agent),
//       id: this.tmp++,
//       name: 'Simon',
//       status: 'online',
//       lastUpdate: '07',
//       version: '1.0.1',
//       tag: ['hello'],
//       organisationUnit: '1412',
//       kunde: 'Google',
//       betriebsystem: 'Windows XP',
//     },
//     {
//       agent: structuredClone(this.agent),
//       id: this.tmp++,
//       name: 'Simon',
//       status: 'online',
//       lastUpdate: '08',
//       version: '1.0.1',
//       tag: ['hello'],
//       organisationUnit: '1412',
//       kunde: 'Google',
//       betriebsystem: 'Windows XP',
//     },
//     {
//       agent: structuredClone(this.agent),
//       id: this.tmp++,
//       name: 'Simon',
//       status: 'online',
//       lastUpdate: '09',
//       version: '1.0.1',
//       tag: ['hello'],
//       organisationUnit: '1412',
//       kunde: 'Google',
//       betriebsystem: 'Windows XP',
//     },
//     {
//       agent: structuredClone(this.agent),
//       id: this.tmp++,
//       name: 'Simon',
//       status: 'online',
//       lastUpdate: '10',
//       version: '1.0.1',
//       tag: ['hello'],
//       organisationUnit: '1412',
//       kunde: 'Google',
//       betriebsystem: 'Windows XP',
//     },
//     {
//       agent: structuredClone(this.agent),
//       id: this.tmp++,
//       name: 'Simon',
//       status: 'online',
//       lastUpdate: '11',
//       version: '1.0.1',
//       tag: ['hello'],
//       organisationUnit: '1412',
//       kunde: 'Google',
//       betriebsystem: 'Windows XP',
//     },
//     {
//       agent: structuredClone(this.agent),
//       id: this.tmp++,
//       name: 'Simon',
//       status: 'online',
//       lastUpdate: '12',
//       version: '1.0.1',
//       tag: ['hello'],
//       organisationUnit: '1412',
//       kunde: 'Google',
//       betriebsystem: 'Windows XP',
//     },
//     {
//       agent: structuredClone(this.agent),
//       id: this.tmp++,
//       name: 'Simon',
//       status: 'online',
//       lastUpdate: '13',
//       version: '1.0.1',
//       tag: ['hello'],
//       organisationUnit: '1412',
//       kunde: 'Google',
//       betriebsystem: 'Windows XP',
//     },
//     {
//       agent: structuredClone(this.agent),
//       id: this.tmp++,
//       name: 'Simon',
//       status: 'online',
//       lastUpdate: '14',
//       version: '1.0.1',
//       tag: ['hello'],
//       organisationUnit: '1412',
//       kunde: 'Google',
//       betriebsystem: 'Windows XP',
//     },
//     {
//       agent: structuredClone(this.agent),
//       id: this.tmp++,
//       name: 'Simon',
//       status: 'online',
//       lastUpdate: '15',
//       version: '1.0.1',
//       tag: ['hello'],
//       organisationUnit: '1412',
//       kunde: 'Google',
//       betriebsystem: 'Windows XP',
//     },
//     {
//       agent: structuredClone(this.agent),
//       id: this.tmp++,
//       name: 'Simon',
//       status: 'online',
//       lastUpdate: '16',
//       version: '1.0.1',
//       tag: ['hello'],
//       organisationUnit: '1412',
//       kunde: 'Google',
//       betriebsystem: 'Windows XP',
//     },
//     {
//       agent: structuredClone(this.agent),
//       id: this.tmp++,
//       name: 'Simon',
//       status: 'online',
//       lastUpdate: '17',
//       version: '1.0.1',
//       tag: ['hello'],
//       organisationUnit: '1412',
//       kunde: 'Google',
//       betriebsystem: 'Windows XP',
//     },
//     {
//       agent: structuredClone(this.agent),
//       id: this.tmp++,
//       name: 'Simon',
//       status: 'online',
//       lastUpdate: '18',
//       version: '1.0.1',
//       tag: ['hello'],
//       organisationUnit: '1412',
//       kunde: 'Google',
//       betriebsystem: 'Windows XP',
//     },
//     {
//       agent: structuredClone(this.agent),
//       id: this.tmp++,
//       name: 'Simon',
//       status: 'online',
//       lastUpdate: '19',
//       version: '1.0.1',
//       tag: ['hello'],
//       organisationUnit: '1412',
//       kunde: 'Google',
//       betriebsystem: 'Windows XP',
//     },
//     {
//       agent: structuredClone(this.agent),
//       id: this.tmp++,
//       name: 'Simon',
//       status: 'online',
//       lastUpdate: '20',
//       version: '1.0.1',
//       tag: ['hello'],
//       organisationUnit: '1412',
//       kunde: 'Google',
//       betriebsystem: 'Windows XP',
//     },
//     {
//       agent: structuredClone(this.agent),
//       id: this.tmp++,
//       name: 'Simon',
//       status: 'online',
//       lastUpdate: '21',
//       version: '1.0.1',
//       tag: ['hello'],
//       organisationUnit: '1412',
//       kunde: 'Google',
//       betriebsystem: 'Windows XP',
//     },
//     {
//       agent: structuredClone(this.agent),
//       id: this.tmp++,
//       name: 'Simon',
//       status: 'online',
//       lastUpdate: '22',
//       version: '1.0.1',
//       tag: ['hello'],
//       organisationUnit: '1412',
//       kunde: 'Google',
//       betriebsystem: 'Windows XP',
//     },
//     {
//       agent: structuredClone(this.agent),
//       id: this.tmp++,
//       name: 'Simon',
//       status: 'online',
//       lastUpdate: '23',
//       version: '1.0.1',
//       tag: ['hello'],
//       organisationUnit: '1412',
//       kunde: 'Google',
//       betriebsystem: 'Windows XP',
//     },
//     {
//       agent: structuredClone(this.agent),
//       id: this.tmp++,
//       name: 'Simon',
//       status: 'online',
//       lastUpdate: '24',
//       version: '1.0.1',
//       tag: ['hello'],
//       organisationUnit: '1412',
//       kunde: 'Google',
//       betriebsystem: 'Windows XP',
//     },
//     {
//       agent: structuredClone(this.agent),
//       id: this.tmp++,
//       name: 'Simon',
//       status: 'online',
//       lastUpdate: '25',
//       version: '1.0.1',
//       tag: ['hello'],
//       organisationUnit: '1412',
//       kunde: 'Google',
//       betriebsystem: 'Windows XP',
//     },
//     {
//       agent: structuredClone(this.agent),
//       id: this.tmp++,
//       name: 'Simon',
//       status: 'online',
//       lastUpdate: '26',
//       version: '1.0.1',
//       tag: ['hello'],
//       organisationUnit: '1412',
//       kunde: 'Google',
//       betriebsystem: 'Windows XP',
//     },
//     {
//       agent: structuredClone(this.agent),
//       id: this.tmp++,
//       name: 'Simon',
//       status: 'online',
//       lastUpdate: '27',
//       version: '1.0.1',
//       tag: ['hello'],
//       organisationUnit: '1412',
//       kunde: 'Google',
//       betriebsystem: 'Windows XP',
//     },
//     {
//       agent: structuredClone(this.agent),
//       id: this.tmp++,
//       name: 'Simon',
//       status: 'online',
//       lastUpdate: '28',
//       version: '1.0.1',
//       tag: ['hello'],
//       organisationUnit: '1412',
//       kunde: 'Google',
//       betriebsystem: 'Windows XP',
//     },
//   ]);
// }
