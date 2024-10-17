import { Breadcrumbs } from '@/components/breadcrumbs';
import { ScrollArea } from '@/components/ui/scroll-area';
import DeliveryForm from '../delivery-form';
import { Delivery } from '@/constants/data';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Delivery', link: '/dashboard/delivery' },
  { title: 'Create', link: '/dashboard/delivery/create' }
];

export default function DeliveryViewPage(data: Partial<Delivery>) {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-8">
        <Breadcrumbs items={breadcrumbItems} />
        <DeliveryForm {...data} />
      </div>
    </ScrollArea>
  );
}
