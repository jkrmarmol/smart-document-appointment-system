import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { buttonVariants } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { Payment } from '@/constants/data';
import { searchParamsCache } from '@/lib/searchparams';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import PaymentTable from '../payment-tables';
import { fetchPayment } from '@/server/payment';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Payment', link: '/dashboard/payment' }
];

type TDocumentListingPage = {};

export default async function PaymentListingPage({}: TDocumentListingPage) {
  // Showcasing the use of search params cache in nested RSCs
  const page = searchParamsCache.get('page');
  const search = searchParamsCache.get('q');
  const pageLimit = searchParamsCache.get('limit');

  const {
    totalPayment,
    payment
  }: {
    payment: Payment[];
    totalPayment: number;
  } = await fetchPayment({ page, search, limit: pageLimit });

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Payment (${totalPayment})`}
            description="Manage documents (Server side table functionalities.)"
          />

          <Link href={'/dashboard/payment/new'} className={cn(buttonVariants({ variant: 'default' }))}>
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />
        <PaymentTable data={payment} totalData={totalPayment} />
      </div>
    </PageContainer>
  );
}
