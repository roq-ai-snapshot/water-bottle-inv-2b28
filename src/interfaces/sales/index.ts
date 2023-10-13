import { UserInterface } from 'interfaces/user';
import { InventoryInterface } from 'interfaces/inventory';
import { GetQueryInterface } from 'interfaces';

export interface SalesInterface {
  id?: string;
  user_id: string;
  inventory_id: string;
  quantity: number;
  total_price: number;
  payment_status: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  inventory?: InventoryInterface;
  _count?: {};
}

export interface SalesGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  inventory_id?: string;
  payment_status?: string;
}
