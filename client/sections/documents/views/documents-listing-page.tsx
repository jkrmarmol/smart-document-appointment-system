import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { buttonVariants } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { Document } from '@/constants/data';
import { searchParamsCache } from '@/lib/searchparams';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import DocumentsTable from '../documents-tables';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Documents', link: '/dashboard/documents' }
];

type TDocumentListingPage = {};

export default async function DocumentsListingPage({}: TDocumentListingPage) {
  // Showcasing the use of search params cache in nested RSCs
  const page = searchParamsCache.get('page');
  const search = searchParamsCache.get('q');
  const gender = searchParamsCache.get('gender');
  const pageLimit = searchParamsCache.get('limit');

  const filters = {
    page,
    limit: pageLimit,
    ...(search && { search }),
    ...(gender && { genders: gender })
  };

  // mock api call
  const data = {
    total_users: 12,
    users: [
      {
        id: 'ksjdfhiygsdf',
        name: 'Summary of Grades',
        price: 12.99,
        dayBeforeRelease: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
  };
  const filteredDocuments = data.users.filter((user) => {
    if (
      filters.search &&
      !user.name.toLowerCase().includes(filters.search.toLowerCase())
    ) {
      return false;
    }
    return true;
  });
  const totalData = data.users.length;
  const document: Document[] = filteredDocuments;

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Documents (${totalData})`}
            description="Manage documents (Server side table functionalities.)"
          />

          <Link
            href={'/dashboard/documents/new'}
            className={cn(buttonVariants({ variant: 'default' }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />
        <DocumentsTable data={document} totalData={totalData} />
      </div>
    </PageContainer>
  );
}
