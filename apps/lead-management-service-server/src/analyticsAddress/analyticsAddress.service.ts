import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AnalyticsAddressServiceBase } from "./base/analyticsAddress.service.base";

@Injectable()
export class AnalyticsAddressService extends AnalyticsAddressServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
