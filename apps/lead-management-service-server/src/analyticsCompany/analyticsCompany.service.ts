import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AnalyticsCompanyServiceBase } from "./base/analyticsCompany.service.base";

@Injectable()
export class AnalyticsCompanyService extends AnalyticsCompanyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
