import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RoleList } from "./role/RoleList";
import { RoleCreate } from "./role/RoleCreate";
import { RoleEdit } from "./role/RoleEdit";
import { RoleShow } from "./role/RoleShow";
import { CompanyList } from "./company/CompanyList";
import { CompanyCreate } from "./company/CompanyCreate";
import { CompanyEdit } from "./company/CompanyEdit";
import { CompanyShow } from "./company/CompanyShow";
import { LeadList } from "./lead/LeadList";
import { LeadCreate } from "./lead/LeadCreate";
import { LeadEdit } from "./lead/LeadEdit";
import { LeadShow } from "./lead/LeadShow";
import { AddressList } from "./address/AddressList";
import { AddressCreate } from "./address/AddressCreate";
import { AddressEdit } from "./address/AddressEdit";
import { AddressShow } from "./address/AddressShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { SubscriptionList } from "./subscription/SubscriptionList";
import { SubscriptionCreate } from "./subscription/SubscriptionCreate";
import { SubscriptionEdit } from "./subscription/SubscriptionEdit";
import { SubscriptionShow } from "./subscription/SubscriptionShow";
import { ProfessionalList } from "./professional/ProfessionalList";
import { ProfessionalCreate } from "./professional/ProfessionalCreate";
import { ProfessionalEdit } from "./professional/ProfessionalEdit";
import { ProfessionalShow } from "./professional/ProfessionalShow";
import { BusinessList } from "./business/BusinessList";
import { BusinessCreate } from "./business/BusinessCreate";
import { BusinessEdit } from "./business/BusinessEdit";
import { BusinessShow } from "./business/BusinessShow";
import { ProspectList } from "./prospect/ProspectList";
import { ProspectCreate } from "./prospect/ProspectCreate";
import { ProspectEdit } from "./prospect/ProspectEdit";
import { ProspectShow } from "./prospect/ProspectShow";
import { TaskList } from "./task/TaskList";
import { TaskCreate } from "./task/TaskCreate";
import { TaskEdit } from "./task/TaskEdit";
import { TaskShow } from "./task/TaskShow";
import { AnalyticsRoleList } from "./analyticsRole/AnalyticsRoleList";
import { AnalyticsRoleCreate } from "./analyticsRole/AnalyticsRoleCreate";
import { AnalyticsRoleEdit } from "./analyticsRole/AnalyticsRoleEdit";
import { AnalyticsRoleShow } from "./analyticsRole/AnalyticsRoleShow";
import { AnalyticsProfessionalList } from "./analyticsProfessional/AnalyticsProfessionalList";
import { AnalyticsProfessionalCreate } from "./analyticsProfessional/AnalyticsProfessionalCreate";
import { AnalyticsProfessionalEdit } from "./analyticsProfessional/AnalyticsProfessionalEdit";
import { AnalyticsProfessionalShow } from "./analyticsProfessional/AnalyticsProfessionalShow";
import { AnalyticsLeadList } from "./analyticsLead/AnalyticsLeadList";
import { AnalyticsLeadCreate } from "./analyticsLead/AnalyticsLeadCreate";
import { AnalyticsLeadEdit } from "./analyticsLead/AnalyticsLeadEdit";
import { AnalyticsLeadShow } from "./analyticsLead/AnalyticsLeadShow";
import { AnalyticsProspectList } from "./analyticsProspect/AnalyticsProspectList";
import { AnalyticsProspectCreate } from "./analyticsProspect/AnalyticsProspectCreate";
import { AnalyticsProspectEdit } from "./analyticsProspect/AnalyticsProspectEdit";
import { AnalyticsProspectShow } from "./analyticsProspect/AnalyticsProspectShow";
import { AnalyticsUserList } from "./analyticsUser/AnalyticsUserList";
import { AnalyticsUserCreate } from "./analyticsUser/AnalyticsUserCreate";
import { AnalyticsUserEdit } from "./analyticsUser/AnalyticsUserEdit";
import { AnalyticsUserShow } from "./analyticsUser/AnalyticsUserShow";
import { AnalyticsCompanyList } from "./analyticsCompany/AnalyticsCompanyList";
import { AnalyticsCompanyCreate } from "./analyticsCompany/AnalyticsCompanyCreate";
import { AnalyticsCompanyEdit } from "./analyticsCompany/AnalyticsCompanyEdit";
import { AnalyticsCompanyShow } from "./analyticsCompany/AnalyticsCompanyShow";
import { AnalyticsTaskList } from "./analyticsTask/AnalyticsTaskList";
import { AnalyticsTaskCreate } from "./analyticsTask/AnalyticsTaskCreate";
import { AnalyticsTaskEdit } from "./analyticsTask/AnalyticsTaskEdit";
import { AnalyticsTaskShow } from "./analyticsTask/AnalyticsTaskShow";
import { AnalyticsBusinessList } from "./analyticsBusiness/AnalyticsBusinessList";
import { AnalyticsBusinessCreate } from "./analyticsBusiness/AnalyticsBusinessCreate";
import { AnalyticsBusinessEdit } from "./analyticsBusiness/AnalyticsBusinessEdit";
import { AnalyticsBusinessShow } from "./analyticsBusiness/AnalyticsBusinessShow";
import { AnalyticsSubscriptionList } from "./analyticsSubscription/AnalyticsSubscriptionList";
import { AnalyticsSubscriptionCreate } from "./analyticsSubscription/AnalyticsSubscriptionCreate";
import { AnalyticsSubscriptionEdit } from "./analyticsSubscription/AnalyticsSubscriptionEdit";
import { AnalyticsSubscriptionShow } from "./analyticsSubscription/AnalyticsSubscriptionShow";
import { AnalyticsAddressList } from "./analyticsAddress/AnalyticsAddressList";
import { AnalyticsAddressCreate } from "./analyticsAddress/AnalyticsAddressCreate";
import { AnalyticsAddressEdit } from "./analyticsAddress/AnalyticsAddressEdit";
import { AnalyticsAddressShow } from "./analyticsAddress/AnalyticsAddressShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Lead Management Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Role"
          list={RoleList}
          edit={RoleEdit}
          create={RoleCreate}
          show={RoleShow}
        />
        <Resource
          name="Company"
          list={CompanyList}
          edit={CompanyEdit}
          create={CompanyCreate}
          show={CompanyShow}
        />
        <Resource
          name="Lead"
          list={LeadList}
          edit={LeadEdit}
          create={LeadCreate}
          show={LeadShow}
        />
        <Resource
          name="Address"
          list={AddressList}
          edit={AddressEdit}
          create={AddressCreate}
          show={AddressShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Subscription"
          list={SubscriptionList}
          edit={SubscriptionEdit}
          create={SubscriptionCreate}
          show={SubscriptionShow}
        />
        <Resource
          name="Professional"
          list={ProfessionalList}
          edit={ProfessionalEdit}
          create={ProfessionalCreate}
          show={ProfessionalShow}
        />
        <Resource
          name="Business"
          list={BusinessList}
          edit={BusinessEdit}
          create={BusinessCreate}
          show={BusinessShow}
        />
        <Resource
          name="Prospect"
          list={ProspectList}
          edit={ProspectEdit}
          create={ProspectCreate}
          show={ProspectShow}
        />
        <Resource
          name="Task"
          list={TaskList}
          edit={TaskEdit}
          create={TaskCreate}
          show={TaskShow}
        />
        <Resource
          name="AnalyticsRole"
          list={AnalyticsRoleList}
          edit={AnalyticsRoleEdit}
          create={AnalyticsRoleCreate}
          show={AnalyticsRoleShow}
        />
        <Resource
          name="AnalyticsProfessional"
          list={AnalyticsProfessionalList}
          edit={AnalyticsProfessionalEdit}
          create={AnalyticsProfessionalCreate}
          show={AnalyticsProfessionalShow}
        />
        <Resource
          name="AnalyticsLead"
          list={AnalyticsLeadList}
          edit={AnalyticsLeadEdit}
          create={AnalyticsLeadCreate}
          show={AnalyticsLeadShow}
        />
        <Resource
          name="AnalyticsProspect"
          list={AnalyticsProspectList}
          edit={AnalyticsProspectEdit}
          create={AnalyticsProspectCreate}
          show={AnalyticsProspectShow}
        />
        <Resource
          name="AnalyticsUser"
          list={AnalyticsUserList}
          edit={AnalyticsUserEdit}
          create={AnalyticsUserCreate}
          show={AnalyticsUserShow}
        />
        <Resource
          name="AnalyticsCompany"
          list={AnalyticsCompanyList}
          edit={AnalyticsCompanyEdit}
          create={AnalyticsCompanyCreate}
          show={AnalyticsCompanyShow}
        />
        <Resource
          name="AnalyticsTask"
          list={AnalyticsTaskList}
          edit={AnalyticsTaskEdit}
          create={AnalyticsTaskCreate}
          show={AnalyticsTaskShow}
        />
        <Resource
          name="AnalyticsBusiness"
          list={AnalyticsBusinessList}
          edit={AnalyticsBusinessEdit}
          create={AnalyticsBusinessCreate}
          show={AnalyticsBusinessShow}
        />
        <Resource
          name="AnalyticsSubscription"
          list={AnalyticsSubscriptionList}
          edit={AnalyticsSubscriptionEdit}
          create={AnalyticsSubscriptionCreate}
          show={AnalyticsSubscriptionShow}
        />
        <Resource
          name="AnalyticsAddress"
          list={AnalyticsAddressList}
          edit={AnalyticsAddressEdit}
          create={AnalyticsAddressCreate}
          show={AnalyticsAddressShow}
        />
      </Admin>
    </div>
  );
};

export default App;
