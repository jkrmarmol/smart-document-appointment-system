import { DocumentViewPage } from '@/sections/documents/views';

export const metadata = {
  title: 'Dashboard : Employee View'
};

export default function Page({ params }: { params: { documentId: string } }) {
  const { documentId } = params;
  return <DocumentViewPage documentId={documentId} />;
}
