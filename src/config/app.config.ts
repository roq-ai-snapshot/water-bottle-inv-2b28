interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Inventory Manager', 'Sales Representative', 'Supply Chain Analyst', 'Customer'],
  tenantName: 'Company',
  applicationName: 'water bottle inventory management application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View company information',
    'View inventory',
    'View sales',
    'View supply chain information',
    'View customer information',
  ],
  ownerAbilities: [
    'Manage user data',
    'Manage company data',
    'Manage inventory',
    'Manage sales',
    'Manage supply chain',
    'Manage customer data',
  ],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/10a34830-2421-4d6f-b249-2d0fbb9fa41b',
};
