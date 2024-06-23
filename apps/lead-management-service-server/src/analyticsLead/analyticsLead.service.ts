import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AnalyticsLeadServiceBase } from "./base/analyticsLead.service.base";

@Injectable()
export class AnalyticsLeadService extends AnalyticsLeadServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
