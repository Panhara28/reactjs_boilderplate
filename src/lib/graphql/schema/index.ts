// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace schema {
  export interface Query {
    me?: User | null;
  }

  export interface User {
    displayName?: string | null,
    phoneNumber?: string | null,
    picture?: string | null,
    createdAt?: string | null,
    role?: Role | null
  }
  
  export interface Role {
    id?: number | 0;
    roleName?: string | null;
  }
}