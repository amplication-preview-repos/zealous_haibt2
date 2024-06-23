import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AnalyticsProfessionalResolverBase } from "./base/analyticsProfessional.resolver.base";
import { AnalyticsProfessional } from "./base/AnalyticsProfessional";
import { AnalyticsProfessionalService } from "./analyticsProfessional.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AnalyticsProfessional)
export class AnalyticsProfessionalResolver extends AnalyticsProfessionalResolverBase {
  constructor(
    protected readonly service: AnalyticsProfessionalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
