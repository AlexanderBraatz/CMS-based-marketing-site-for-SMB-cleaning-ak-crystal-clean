import { getServiceByValue } from '@/lib/data';
import { notFound } from 'next/navigation';
import ServicesPageTemplate from '../services-page-template';

export default function Entruempelung() {
  const pageData = getServiceByValue('entruempelung');
  if (!pageData) notFound();
  return <ServicesPageTemplate pageData={pageData} />;
}
