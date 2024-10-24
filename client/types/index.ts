import { Icons } from '@/components/icons';

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
  label?: string;
  description?: string;
  children?: NavItem[];
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;

export interface MenuItem {
  id: string;
  name: string;
  price: number;
}

export interface OrderSliceInitialState {
  order: MenuItem[];
  openModalConfirmationOrder: boolean;
  orderData: {
    orderItem: MenuItem[];
    shippingOptions: string;
    address: {
      googleMapAddress: string;
      longitude: number;
      latitude: number;
      additionalAddress: string;
    };
    schedule: Date | null;
    paymentMethod: string;
  };
}

export interface DocumentItemProps extends MenuItem {
  isSelected: boolean;
}

export interface IOrderDocument {
  documentSelected: Array<string>;
  studentNo: string;
  selectedSchedule: Date | null;
  deliveryOptionsId: string;
  paymentOptionsId: string;
  address?: string;
  additionalAddress?: string;
  longitude?: string | number;
  latitude?: string | number;
}
