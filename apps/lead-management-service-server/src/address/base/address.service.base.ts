/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Address as PrismaAddress,
  Business as PrismaBusiness,
  Lead as PrismaLead,
} from "@prisma/client";

export class AddressServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AddressCountArgs, "select">): Promise<number> {
    return this.prisma.address.count(args);
  }

  async addresses(args: Prisma.AddressFindManyArgs): Promise<PrismaAddress[]> {
    return this.prisma.address.findMany(args);
  }
  async address(
    args: Prisma.AddressFindUniqueArgs
  ): Promise<PrismaAddress | null> {
    return this.prisma.address.findUnique(args);
  }
  async createAddress(args: Prisma.AddressCreateArgs): Promise<PrismaAddress> {
    return this.prisma.address.create(args);
  }
  async updateAddress(args: Prisma.AddressUpdateArgs): Promise<PrismaAddress> {
    return this.prisma.address.update(args);
  }
  async deleteAddress(args: Prisma.AddressDeleteArgs): Promise<PrismaAddress> {
    return this.prisma.address.delete(args);
  }

  async findBusinesses(
    parentId: string,
    args: Prisma.BusinessFindManyArgs
  ): Promise<PrismaBusiness[]> {
    return this.prisma.address
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .businesses(args);
  }

  async findLeads(
    parentId: string,
    args: Prisma.LeadFindManyArgs
  ): Promise<PrismaLead[]> {
    return this.prisma.address
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .leads(args);
  }
}