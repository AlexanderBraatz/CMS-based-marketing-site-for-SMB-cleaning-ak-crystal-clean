import { getServiceByValue } from '@/lib/data';
import { notFound } from 'next/navigation';
import ServicesPageTemplate from '../services-page-template';

export default async function Hausmeisterdienst() {
  const pageData = getServiceByValue('hausmeisterdienst');
  if (!pageData) notFound();
  return <ServicesPageTemplate pageData={pageData} />;
}
