import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AnalyticsSubscriptionServiceBase } from "./base/analyticsSubscription.service.base";

@Injectable()
export class AnalyticsSubscriptionService extends AnalyticsSubscriptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
