// 타입 추론 적극 활용하기
// 타입은 정확하게 하는 것이 중요함!
// 1. 타입 추론을 최대한 활용하기
// 2. 타입은 최대한 좁게 적어라

// '5'라는 타입으로 선언!
const aa = '5';

// 괜한 손찌검으로 타입을 더욱 부정확하게 만든 경우
// '5'라는 타입인데 string이라는 더욱 넓은 범위의 부정확한 타입을 선언
const aano: string = '5';

// 타입추론을 잘해주는 TS
// 매개변수 값은 타이핑이 꼭 필요하다
function addChu(x: number, y: number) {
    return x + y;
}

// 하지만 리턴값은 타입스크립트가 추론해준다.
const result = addChu(1, 2);

// 튜플 타입 추론시에는 타이핑 해줄 것
// 타입스크립트가 추론을 명확하게 해주지 않음
const arrTu: [number, number, string] = [123, 32, 'aaa'];

// 객체 타입 추론
const obj2 = { lat: 12.3, lon: 32.4 };
