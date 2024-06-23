import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AnalyticsBusinessServiceBase } from "./base/analyticsBusiness.service.base";

@Injectable()
export class AnalyticsBusinessService extends AnalyticsBusinessServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
