import { PaymentViewPage } from '@/sections/payment/views';
import { fetchPaymentById } from '@/server/payment';

export const metadata = {
  title: 'Dashboard : Payment View'
};

export default async function Page({ params }: { params: { paymentId: string } }) {
  const paymentId = params.paymentId;
  if (paymentId === 'new') {
    return <PaymentViewPage />;
  }
  try {
    const data = await fetchPaymentById(paymentId);
    return <PaymentViewPage {...data} />;
  } catch (error) {
    console.error('Failed to fetch document:', error);
    return <div>Error loading payment.</div>;
  }
}
