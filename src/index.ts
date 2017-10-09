
interface Person {
  firstName: string;
  lastName: string;
}

class Student {
  fullName: string;
  constructor(public firstName: string, public lastName: string) {
    this.fullName = this.firstName + this.lastName;
  }
}

function sayHello(student: Person) {
  console.log(student.firstName + student.lastName + " 你好");
}
const user = { firstName: "蒋", lastName: "勇" };
sayHello(user);
