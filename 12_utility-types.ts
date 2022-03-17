interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

let products: Product[] = [
  { id: 1, name: '참치김밥', price: 3000, brand: '김가네', stock: 3 },
];

function displayProduct(productInfo: { id: 1; name: '참치김밥'; price: 3000 }) {
  // ...
}

// #1 - Partial - 파셜(Partial) 타입은 특정 타입의 부분 집합을 만족하는 타입을 정의
type UpdateProduct = Partial<Product>;
function updateProductItem(productItem: Partial<Product>) {}

interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

//#1
// type UserProfileUpdate = {
//   username?: UserProfile['username'];
//   email?: UserProfile['email'];
//   profilePhotoUrl?: UserProfile['profilePhotoUrl'];
// };

//#2
// type UserProfileUpdate = {
//   [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p];
// };

// type UserProfileKeys = keyof UserProfile;

//#3

type UserProfileUpdate = {
  [p in keyof UserProfile]?: UserProfile[p];
};

//#4 partial
type Subset<T> = {
  [p in keyof T]?: T[p];
};

// Pick
// type PickFewThings<T, K extends keyof T> = {
//   [P in K]: T[P];
// }

// const productName: PickFewThings<Product, 'name'> = {

// }
// const productNameWithPrice: PickFewThings<Product, 'name' | 'price'> = {

// }

type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>;
function displayProductDetail(ShoppingItem: ShoppingItem) {}

// Omit - 특정 타입에서 지정된 속성만 제거하고 사용
interface AddressBook {
  name: string;
  phone: number;
  address: string;
  company: string;
}
const phoneBook: Omit<AddressBook, 'address'> = {
  name: '재택근무',
  phone: 12342223333,
  company: '내 방',
};
const chingtao: Omit<AddressBook, 'address' | 'company'> = {
  name: '중국집',
  phone: 44455557777,
};
