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
  AnalyticsAddress as PrismaAnalyticsAddress,
} from "@prisma/client";

export class AnalyticsAddressServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AnalyticsAddressCountArgs, "select">
  ): Promise<number> {
    return this.prisma.analyticsAddress.count(args);
  }

  async analyticsAddresses(
    args: Prisma.AnalyticsAddressFindManyArgs
  ): Promise<PrismaAnalyticsAddress[]> {
    return this.prisma.analyticsAddress.findMany(args);
  }
  async analyticsAddress(
    args: Prisma.AnalyticsAddressFindUniqueArgs
  ): Promise<PrismaAnalyticsAddress | null> {
    return this.prisma.analyticsAddress.findUnique(args);
  }
  async createAnalyticsAddress(
    args: Prisma.AnalyticsAddressCreateArgs
  ): Promise<PrismaAnalyticsAddress> {
    return this.prisma.analyticsAddress.create(args);
  }
  async updateAnalyticsAddress(
    args: Prisma.AnalyticsAddressUpdateArgs
  ): Promise<PrismaAnalyticsAddress> {
    return this.prisma.analyticsAddress.update(args);
  }
  async deleteAnalyticsAddress(
    args: Prisma.AnalyticsAddressDeleteArgs
  ): Promise<PrismaAnalyticsAddress> {
    return this.prisma.analyticsAddress.delete(args);
  }
}
