import { Breadcrumbs } from '@/components/breadcrumbs';
import { ScrollArea } from '@/components/ui/scroll-area';
import DeliveryForm from '../delivery-form';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Delivery', link: '/dashboard/delivery' },
  { title: 'Create', link: '/dashboard/delivery/create' }
];

export default function DeliveryViewPage() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-8">
        <Breadcrumbs items={breadcrumbItems} />
        <DeliveryForm />
      </div>
    </ScrollArea>
  );
}
