import { Breadcrumbs } from '@/components/breadcrumbs';
import { ScrollArea } from '@/components/ui/scroll-area';
import PaymentForm from '../payment-form';
import { Payment } from '@/constants/data';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Payment', link: '/dashboard/payment' },
  { title: 'Create', link: '/dashboard/payment/create' }
];

export default function PaymentViewPage(data: Partial<Payment>) {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-8">
        <Breadcrumbs items={breadcrumbItems} />
        <PaymentForm {...data} />
      </div>
    </ScrollArea>
  );
}
