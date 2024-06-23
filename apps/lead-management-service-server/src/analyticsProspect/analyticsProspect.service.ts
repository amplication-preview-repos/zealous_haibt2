import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AnalyticsProspectServiceBase } from "./base/analyticsProspect.service.base";

@Injectable()
export class AnalyticsProspectService extends AnalyticsProspectServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
