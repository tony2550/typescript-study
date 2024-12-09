const a: number = 5;
const b: string = '5';
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: any = true;

// function add(x: number, y: number): number {
//     return x + y;
// }
// const add: (x: number, y: number) => number = (x, y) => x + y;
// const obj: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 };

// type alias
const addOne: (x: number, y: number) => number = (x, y) => x + y;

// interface 로 함수 만들기
interface Add {
    (x: number, y: number): number;
}

const add: Add = (x, y) => x + y;

// Array 타이핑
const arr: string[] = ['123', '456'];
const arr2: Array<number> = [123, 456]; // 제네릭
const arr3: [number, number, string] = [123, 456, 'awawa']; // 이것은 튜플

// 객체 타이핑
const obj: { lat: number; lon: number } = { lat: 27.5, lon: 120.3 };

// 이러한 것도 가능하다
const oh: true = true;
