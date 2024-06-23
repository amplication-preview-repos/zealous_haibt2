import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AnalyticsUserServiceBase } from "./base/analyticsUser.service.base";

@Injectable()
export class AnalyticsUserService extends AnalyticsUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
