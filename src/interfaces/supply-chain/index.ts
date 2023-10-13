import { InventoryInterface } from 'interfaces/inventory';
import { GetQueryInterface } from 'interfaces';

export interface SupplyChainInterface {
  id?: string;
  inventory_id: string;
  supplier_name: string;
  delivery_date: any;
  quantity: number;
  status: string;
  created_at?: any;
  updated_at?: any;

  inventory?: InventoryInterface;
  _count?: {};
}

export interface SupplyChainGetQueryInterface extends GetQueryInterface {
  id?: string;
  inventory_id?: string;
  supplier_name?: string;
  status?: string;
}
