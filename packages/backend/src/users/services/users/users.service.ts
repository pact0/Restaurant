import { Injectable } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { SerializedUser } from "src/users/types/SerializedUser";
import { User } from "../../../../../common/models/User";

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: "aaa",
      password: "bbb",
    },

    {
      username: "bbb",
      password: "ccc",
    },

    {
      username: "ccc",
      password: "ddd",
    },
  ];

  getUsers() {
    return this.users.map((user) => {
      plainToClass(SerializedUser,user);
    });
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => {
      return user.username === username;
    });
  }
}
