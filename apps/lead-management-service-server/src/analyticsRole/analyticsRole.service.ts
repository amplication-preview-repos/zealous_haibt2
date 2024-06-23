import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AnalyticsRoleServiceBase } from "./base/analyticsRole.service.base";

@Injectable()
export class AnalyticsRoleService extends AnalyticsRoleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
