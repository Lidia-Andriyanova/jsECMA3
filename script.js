// Задание 1 -----------------------------------------------------------------------------
// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:
// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).
// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).

console.log('Задание 1 --------------------');

class Employee {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`Name: ${this.name}`);
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name);
        this.department = department;
    }    
    displayInfo() {
        console.log(`Name: ${this.name}
Department: ${this.department}`);
    }
}

const employee = new Employee('John Smith');
employee.displayInfo();
// Вывод:
// Name: John Smith

const manager = new Manager('Jane Doe', 'Sales');
manager.displayInfo();
// Вывод:
// Name: Jane Doe
// Department: Sales


// Задание 2 -----------------------------------------------------------------------------
// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:
// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

console.log('Задание 2 --------------------');

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Order {
    constructor(orderNumber) {
        this.orderNumber = orderNumber;
        this.products = [];
        this.totalPrice = 0;
    }
    addProduct(product) {
        this.products.push(product);
        this.totalPrice += product.price;
    }
    getTotalPrice()  {
        return this.totalPrice;
    }
}

const order = new Order(12345);

const product1 = new Product('Phone', 500);
order.addProduct(product1);

const product2 = new Product('Headphones', 100);
order.addProduct(product2);

console.log(order.getTotalPrice()); // Вывод: 600


// Задание 3 -----------------------------------------------------------------------------
// Создать класс "Студент", который имеет приватные свойства "имя", "возраст" и "средний балл". 
// Класс должен иметь методы для установки и получения значений свойств, а также метод для вывода информации о студенте.

console.log('Задание 3 --------------------');

class Student {
    _name = '';
    _age = 0;
    _averageGrade = 0;

    setName(value) {
        if (value === '') throw new Error("Имя не заполнено");
        this._name = value;        
    }

    setAge(value) {
        if (value <= 16) throw new Error("Возвраст ниже 16 лет");
        this._age = value;        
    }

    setAverageGrade(value) {
        if (value <0 ) throw new Error("Рейтинг не может быть отрицательным");
        this._averageGrade = value;        
    }    

    displayInfo() {
        console.log(`Студент: ${this._name}
Возраст: ${this._age}
Рейтинг: ${this._averageGrade}`);
    }
}

const student = new Student();
student.setName('Питер Паркер');
student.setAge(20);
student.setAverageGrade(85);
student.displayInfo();
