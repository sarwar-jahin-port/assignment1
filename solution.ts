type inputType = string | number | boolean;

const formatValue = (value: inputType) : inputType | undefined => {
  if(typeof value === "string"){
    return value.toUpperCase();
  }
  else if(typeof value === "number"){
    return value * 10;
  }
  else if(typeof value === "boolean"){
    return !value;
  }
  return undefined;
}

const result = formatValue("hello");
const result2 = formatValue(5);
const result3 = formatValue(true);

type lengthInputType = string | any[];

const getLength = (value: lengthInputType) : number => {
    return value.length;
}

const lengthResult = getLength('typescript');
const lengthResult2 = getLength([10, 20, 30, 40]);
 
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

const person1 = new Person('John Doe', 30);

const person2 = new Person('Alice', 25);

type itemType = {
    title: string;
    rating: number;
}

const filterByRating = (items: itemType[]) : itemType[] | [] => {
    return items.filter(item => item.rating >=4);
}

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

const filterActiveUsers = (users: User[]) : User[] | [] => {
    return users.filter(user => user.isActive);
}

const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (book: Book): string => {
    const {title, author, publishedYear, isAvailable} = book;

    return `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${isAvailable ? "Yes" : "No"}`;
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

type arrayType = string | number;
const getUniqueValues = (arr1: arrayType[], arr2: arrayType[]) : arrayType[] | [] => {
    const length1:number = arr1.length;
    const length2:number = arr2.length;
    const ans: arrayType[] = [];
    ans.push(arr1[0]);

    for(let j=0; j<length1; j++){
        let found: boolean = false;
        for(let i=0; i<ans.length; i++){
            if(ans[i] === arr1[j]){
                found = true;
                break;
            }        
        }
        if(!found){
            ans.push(arr1[j]);
        }
    }

    for(let j=0; j<length2; j++){
        let found: boolean = false;
        for(let i=0; i<ans.length; i++){
            if(ans[i] === arr2[j]){
                found = true;
                break;
            }        
        }
        if(!found){
            ans.push(arr2[j]);
        }
    }

    return ans;
} 

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

interface IProduct {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

const calculateTotalPrice = (products: IProduct[]): number => {
    const totalPrice: number = products.reduce((total, product) => total + ((product.quantity * product.price) * (100 - (product.discount || 0))/100), 0)
    return totalPrice;
}

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];
