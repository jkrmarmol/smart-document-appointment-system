import { DeliveryViewPage } from '@/sections/delivery/views';
import { fetchDeliveryById } from '@/server/delivery';

export const metadata = {
  title: 'Dashboard : Delivery Options View'
};

export default async function Page({ params }: { params: { deliveryId: string } }) {
  const deliveryId = params.deliveryId;
  if (deliveryId === 'new') {
    return <DeliveryViewPage />;
  }
  try {
    const data = await fetchDeliveryById(deliveryId);
    return <DeliveryViewPage {...data} />;
  } catch (error) {
    console.error('Failed to fetch delivery options:', error);
    return <div>Error loading delivery options.</div>;
  }
}
