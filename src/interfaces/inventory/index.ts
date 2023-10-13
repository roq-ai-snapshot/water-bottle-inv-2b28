import { SalesInterface } from 'interfaces/sales';
import { SupplyChainInterface } from 'interfaces/supply-chain';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface InventoryInterface {
  id?: string;
  water_bottle_type: string;
  quantity: number;
  company_id: string;
  minimum_stock_level: number;
  maximum_stock_level: number;
  created_at?: any;
  updated_at?: any;
  sales?: SalesInterface[];
  supply_chain?: SupplyChainInterface[];
  company?: CompanyInterface;
  _count?: {
    sales?: number;
    supply_chain?: number;
  };
}

export interface InventoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  water_bottle_type?: string;
  company_id?: string;
}
