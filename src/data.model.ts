import { Observable, of } from 'rxjs';

export interface DummyData {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
}

export const dummyDataObs$: Observable<DummyData[]> = of(
  [...Array(500).keys()].map((index) => ({
    id: index,
    firstName: `firstName_${index}`,
    lastName: `lastName_${index}`,
    age: 18 + (index % 12),
  }))
);
