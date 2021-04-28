export interface NewUser {
  firstname?: string

  lastname?: string

  email: string

  username: string

  password: string
}

export class User {
  username!: string
  email!: string
}
