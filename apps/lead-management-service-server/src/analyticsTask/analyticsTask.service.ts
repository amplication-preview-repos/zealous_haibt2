import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AnalyticsTaskServiceBase } from "./base/analyticsTask.service.base";

@Injectable()
export class AnalyticsTaskService extends AnalyticsTaskServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
