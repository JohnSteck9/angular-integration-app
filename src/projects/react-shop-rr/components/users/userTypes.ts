export interface IUser {
    id?: number,
    nickname: string,
    email: string,
    password: string,
    confirmPassword?: string,
}

export interface IUserForm {
    nickname: string,
    email: string,
    password: string,
    confirmPassword: string,
    terms: boolean,
}

export enum EUserFormInputNames {
    Nickname = 'nickname',
    Email = 'email',
    Password = 'password',
    ConfirmPassword = 'confirmPassword',
    Terms = 'terms',
}

export interface IUserDTO {
    id: number,
    name: string,
    username: string,
    email: string,
    address: IUserAddress,
    phone: string,
    website: string,
    company: IUserCompany,
}

export interface IUserCompany {
    name: string,
    catchPhrase: string,
    bs: string,
}

export interface IUserGeo {
    lat: string,
    lng: string,
}

export interface IUserAddress {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: IUserGeo,
}
