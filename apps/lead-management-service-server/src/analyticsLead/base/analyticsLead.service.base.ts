/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, AnalyticsLead as PrismaAnalyticsLead } from "@prisma/client";

export class AnalyticsLeadServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AnalyticsLeadCountArgs, "select">
  ): Promise<number> {
    return this.prisma.analyticsLead.count(args);
  }

  async analyticsLeads(
    args: Prisma.AnalyticsLeadFindManyArgs
  ): Promise<PrismaAnalyticsLead[]> {
    return this.prisma.analyticsLead.findMany(args);
  }
  async analyticsLead(
    args: Prisma.AnalyticsLeadFindUniqueArgs
  ): Promise<PrismaAnalyticsLead | null> {
    return this.prisma.analyticsLead.findUnique(args);
  }
  async createAnalyticsLead(
    args: Prisma.AnalyticsLeadCreateArgs
  ): Promise<PrismaAnalyticsLead> {
    return this.prisma.analyticsLead.create(args);
  }
  async updateAnalyticsLead(
    args: Prisma.AnalyticsLeadUpdateArgs
  ): Promise<PrismaAnalyticsLead> {
    return this.prisma.analyticsLead.update(args);
  }
  async deleteAnalyticsLead(
    args: Prisma.AnalyticsLeadDeleteArgs
  ): Promise<PrismaAnalyticsLead> {
    return this.prisma.analyticsLead.delete(args);
  }
}
