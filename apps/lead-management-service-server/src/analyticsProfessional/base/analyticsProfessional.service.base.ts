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
  AnalyticsProfessional as PrismaAnalyticsProfessional,
} from "@prisma/client";

export class AnalyticsProfessionalServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AnalyticsProfessionalCountArgs, "select">
  ): Promise<number> {
    return this.prisma.analyticsProfessional.count(args);
  }

  async analyticsProfessionals(
    args: Prisma.AnalyticsProfessionalFindManyArgs
  ): Promise<PrismaAnalyticsProfessional[]> {
    return this.prisma.analyticsProfessional.findMany(args);
  }
  async analyticsProfessional(
    args: Prisma.AnalyticsProfessionalFindUniqueArgs
  ): Promise<PrismaAnalyticsProfessional | null> {
    return this.prisma.analyticsProfessional.findUnique(args);
  }
  async createAnalyticsProfessional(
    args: Prisma.AnalyticsProfessionalCreateArgs
  ): Promise<PrismaAnalyticsProfessional> {
    return this.prisma.analyticsProfessional.create(args);
  }
  async updateAnalyticsProfessional(
    args: Prisma.AnalyticsProfessionalUpdateArgs
  ): Promise<PrismaAnalyticsProfessional> {
    return this.prisma.analyticsProfessional.update(args);
  }
  async deleteAnalyticsProfessional(
    args: Prisma.AnalyticsProfessionalDeleteArgs
  ): Promise<PrismaAnalyticsProfessional> {
    return this.prisma.analyticsProfessional.delete(args);
  }
}
