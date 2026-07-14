import { getServiceByValue } from '@/lib/data';
import { notFound } from 'next/navigation';
import ServicesPageTemplate from '../services-page-template';

export default async function SolarUndDach() {
  const pageData = getServiceByValue('solar-und-dach');
  if (!pageData) notFound();
  return <ServicesPageTemplate pageData={pageData} />;
}
