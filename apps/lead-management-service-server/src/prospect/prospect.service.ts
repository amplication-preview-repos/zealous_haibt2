import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProspectServiceBase } from "./base/prospect.service.base";

@Injectable()
export class ProspectService extends ProspectServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
