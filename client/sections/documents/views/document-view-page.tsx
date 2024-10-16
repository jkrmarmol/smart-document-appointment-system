import { Breadcrumbs } from '@/components/breadcrumbs';
import { ScrollArea } from '@/components/ui/scroll-area';
import DocumentsForm from '../documents-form';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Documents', link: '/dashboard/documents' },
  { title: 'Create', link: '/dashboard/documents/create' }
];

export default function DocumentViewPage() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-8">
        <Breadcrumbs items={breadcrumbItems} />
        <DocumentsForm />
      </div>
    </ScrollArea>
  );
}
