// 스택(Stack) 자료구조 구현
class Stack<T> {
  private items: T[] = [];

  // 스택에 원소 추가
  push(element: T): void {
    this.items.push(element);
  }

  // 스택에서 원소 제거 및 반환
  pop(): T | undefined {
    return this.items.pop();
  }

  // 스택의 맨 위 원소 확인 (제거하지 않음)
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  // 스택이 비어있는지 확인
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // 스택의 크기 반환
  size(): number {
    return this.items.length;
  }

  // 스택의 모든 원소 출력
  print(): void {
    console.log(this.items.toString());
  }

  // 스택 비우기
  clear(): void {
    this.items = [];
  }
}

// 스택 사용 예제
const stack = new Stack<number>();

console.log("=== 스택 예제 ===");
console.log("push(10), push(20), push(30) 실행");
stack.push(10);
stack.push(20);
stack.push(30);

console.log("스택 상태:");
stack.print(); // 10,20,30

console.log("peek():", stack.peek()); // 30
console.log("size():", stack.size()); // 3

console.log("pop():", stack.pop()); // 30
console.log("pop():", stack.pop()); // 20

console.log("스택 상태:");
stack.print(); // 10

console.log("isEmpty():", stack.isEmpty()); // false

stack.pop();
console.log("마지막 원소 제거 후 isEmpty():", stack.isEmpty()); // true
