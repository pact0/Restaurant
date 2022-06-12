import { HttpException } from "@nestjs/common/exceptions/http.exception";
import { NestMiddleware, HttpStatus, Injectable } from "@nestjs/common";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import { SECRET } from "../config";
import { UserService } from "./user.service";

interface IUserRequest extends Request {
  user: any;
  headers:any;
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  async use(req: IUserRequest, res: Response, next: NextFunction) {
    const authHeaders = req.headers.authorization;
    if (authHeaders && (authHeaders as string).split(" ")[1]) {
      const token = (authHeaders as string).split(" ")[1];
      const decoded: any = jwt.verify(token, SECRET);
      const user = await this.userService.findById(decoded.id);

      if (!user) {
        throw new HttpException("User not found.", HttpStatus.UNAUTHORIZED);
      }

      req.user = user.user;
      next();
    } else {
      throw new HttpException("Not authorized.", HttpStatus.UNAUTHORIZED);
    }
  }
}
