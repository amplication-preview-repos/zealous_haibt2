import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AnalyticsProfessionalServiceBase } from "./base/analyticsProfessional.service.base";

@Injectable()
export class AnalyticsProfessionalService extends AnalyticsProfessionalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
