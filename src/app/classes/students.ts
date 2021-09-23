export class Students {
    id: string;
    name: string;
    grade: number;
    email: string;
    age: number;
    phone: string;
    gender: string;

    constructor(id: string, n: string, g: number, e: string, a: number, ph: string, s: string) {
        this.id = id;
        this.name = n;
        this.grade = g;
        this.email = e;
        this.age = a;
        this.phone = ph;
        this.gender = s;
    }
}

