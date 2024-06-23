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
  AnalyticsProspect as PrismaAnalyticsProspect,
} from "@prisma/client";

export class AnalyticsProspectServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AnalyticsProspectCountArgs, "select">
  ): Promise<number> {
    return this.prisma.analyticsProspect.count(args);
  }

  async analyticsProspects(
    args: Prisma.AnalyticsProspectFindManyArgs
  ): Promise<PrismaAnalyticsProspect[]> {
    return this.prisma.analyticsProspect.findMany(args);
  }
  async analyticsProspect(
    args: Prisma.AnalyticsProspectFindUniqueArgs
  ): Promise<PrismaAnalyticsProspect | null> {
    return this.prisma.analyticsProspect.findUnique(args);
  }
  async createAnalyticsProspect(
    args: Prisma.AnalyticsProspectCreateArgs
  ): Promise<PrismaAnalyticsProspect> {
    return this.prisma.analyticsProspect.create(args);
  }
  async updateAnalyticsProspect(
    args: Prisma.AnalyticsProspectUpdateArgs
  ): Promise<PrismaAnalyticsProspect> {
    return this.prisma.analyticsProspect.update(args);
  }
  async deleteAnalyticsProspect(
    args: Prisma.AnalyticsProspectDeleteArgs
  ): Promise<PrismaAnalyticsProspect> {
    return this.prisma.analyticsProspect.delete(args);
  }
}