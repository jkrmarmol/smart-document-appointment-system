import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { buttonVariants } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { searchParamsCache } from '@/lib/searchparams';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import DeliveryTable from '../delivery-tables';
import { fetchDelivery } from '@/server/delivery';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Delivery', link: '/dashboard/delivery' }
];

type TDocumentListingPage = {};

export default async function DeliveryListingPage({}: TDocumentListingPage) {
  const page = searchParamsCache.get('page');
  const search = searchParamsCache.get('q');
  const pageLimit = searchParamsCache.get('limit');

  const filters = {
    page,
    limit: pageLimit,
    ...(search && { search })
  };

  const { totalDeliveryOptions, deliveryOptions } = await fetchDelivery(filters);

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Delivery Options (${totalDeliveryOptions})`}
            description="Manage delivery options (Server side table functionalities.)"
          />

          <Link href={'/dashboard/delivery/new'} className={cn(buttonVariants({ variant: 'default' }))}>
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />
        <DeliveryTable data={deliveryOptions} totalData={totalDeliveryOptions} />
      </div>
    </PageContainer>
  );
}
