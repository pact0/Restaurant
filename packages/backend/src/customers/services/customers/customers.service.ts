import { Injectable } from "@nestjs/common";
import { CreateCustomerDto } from "src/customers/dtos/CreteCustomers.dto";
import { Customer } from "../../../../../common/models/Customer";

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: "TEST",
      name: "ASDASD",
    },

    {
      id: 2,
      email: "TEST",
      name: "fdskjfjsdklfjdksfksldf",
    },
  ];

  getAllCustomers() {
    return this.customers;
  }

  findCustomer(id: number) {
    return this.customers.find((user) => {
      return user.id === id;
    });
  }

  createCustomer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
  }
}
