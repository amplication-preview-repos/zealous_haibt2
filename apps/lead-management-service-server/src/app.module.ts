import { Module } from "@nestjs/common";
import { RoleModule } from "./role/role.module";
import { CompanyModule } from "./company/company.module";
import { LeadModule } from "./lead/lead.module";
import { AddressModule } from "./address/address.module";
import { UserModule } from "./user/user.module";
import { SubscriptionModule } from "./subscription/subscription.module";
import { ProfessionalModule } from "./professional/professional.module";
import { BusinessModule } from "./business/business.module";
import { ProspectModule } from "./prospect/prospect.module";
import { TaskModule } from "./task/task.module";
import { AnalyticsRoleModule } from "./analyticsRole/analyticsRole.module";
import { AnalyticsProfessionalModule } from "./analyticsProfessional/analyticsProfessional.module";
import { AnalyticsLeadModule } from "./analyticsLead/analyticsLead.module";
import { AnalyticsProspectModule } from "./analyticsProspect/analyticsProspect.module";
import { AnalyticsUserModule } from "./analyticsUser/analyticsUser.module";
import { AnalyticsCompanyModule } from "./analyticsCompany/analyticsCompany.module";
import { AnalyticsTaskModule } from "./analyticsTask/analyticsTask.module";
import { AnalyticsBusinessModule } from "./analyticsBusiness/analyticsBusiness.module";
import { AnalyticsSubscriptionModule } from "./analyticsSubscription/analyticsSubscription.module";
import { AnalyticsAddressModule } from "./analyticsAddress/analyticsAddress.module";
import { AnalyticsModuleModule } from "./AnalyticsModule/analyticsmodule.module";
import { LeadManagementModuleModule } from "./LeadManagementModule/leadmanagementmodule.module";
import { TaskManagementModuleModule } from "./TaskManagementModule/taskmanagementmodule.module";
import { UserManagementModuleModule } from "./UserManagementModule/usermanagementmodule.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    RoleModule,
    CompanyModule,
    LeadModule,
    AddressModule,
    UserModule,
    SubscriptionModule,
    ProfessionalModule,
    BusinessModule,
    ProspectModule,
    TaskModule,
    AnalyticsRoleModule,
    AnalyticsProfessionalModule,
    AnalyticsLeadModule,
    AnalyticsProspectModule,
    AnalyticsUserModule,
    AnalyticsCompanyModule,
    AnalyticsTaskModule,
    AnalyticsBusinessModule,
    AnalyticsSubscriptionModule,
    AnalyticsAddressModule,
    AnalyticsModuleModule,
    LeadManagementModuleModule,
    TaskManagementModuleModule,
    UserManagementModuleModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
