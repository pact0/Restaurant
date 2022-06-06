import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Res,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { Response } from "express";
import { CreateCustomerDto } from "src/customers/dtos/CreteCustomers.dto";
import { CustomersService } from "src/customers/services/customers/customers.service";

@Controller("customers")
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get(":id")
  getCustomer(@Param("id", ParseIntPipe) id: number, @Res() res: Response) {
    const customer = this.customersService.findCustomer(id);
    if (customer) {
      res.send(customer);
    } else {
      res.status(400).send({ msg: "Customer not found." });
    }
  }

  @Get("")
  getAllCustomers() {
    return this.customersService.getAllCustomers();
  }

  @Get("/search/:id")
  searchCustomerById(@Param("id", ParseIntPipe) id: number) {
    const customer = this.customersService.findCustomer(id);

    if (customer) return customer;
    else throw new HttpException("Customer Not Found!", HttpStatus.NOT_FOUND);
  }

  @Post("create")
  @UsePipes(ValidationPipe)
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    this.customersService.createCustomer(createCustomerDto);
  }
}
