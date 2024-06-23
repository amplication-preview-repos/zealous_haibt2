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
  Prospect as PrismaProspect,
  Business as PrismaBusiness,
  Lead as PrismaLead,
  Professional as PrismaProfessional,
  User as PrismaUser,
} from "@prisma/client";

export class ProspectServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ProspectCountArgs, "select">): Promise<number> {
    return this.prisma.prospect.count(args);
  }

  async prospects(
    args: Prisma.ProspectFindManyArgs
  ): Promise<PrismaProspect[]> {
    return this.prisma.prospect.findMany(args);
  }
  async prospect(
    args: Prisma.ProspectFindUniqueArgs
  ): Promise<PrismaProspect | null> {
    return this.prisma.prospect.findUnique(args);
  }
  async createProspect(
    args: Prisma.ProspectCreateArgs
  ): Promise<PrismaProspect> {
    return this.prisma.prospect.create(args);
  }
  async updateProspect(
    args: Prisma.ProspectUpdateArgs
  ): Promise<PrismaProspect> {
    return this.prisma.prospect.update(args);
  }
  async deleteProspect(
    args: Prisma.ProspectDeleteArgs
  ): Promise<PrismaProspect> {
    return this.prisma.prospect.delete(args);
  }

  async getBusiness(parentId: string): Promise<PrismaBusiness | null> {
    return this.prisma.prospect
      .findUnique({
        where: { id: parentId },
      })
      .business();
  }

  async getLead(parentId: string): Promise<PrismaLead | null> {
    return this.prisma.prospect
      .findUnique({
        where: { id: parentId },
      })
      .lead();
  }

  async getProfessional(parentId: string): Promise<PrismaProfessional | null> {
    return this.prisma.prospect
      .findUnique({
        where: { id: parentId },
      })
      .professional();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.prospect
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
