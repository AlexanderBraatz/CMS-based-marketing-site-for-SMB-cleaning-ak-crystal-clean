import { getServiceByValue } from '@/lib/data';
import { notFound } from 'next/navigation';
import ServicesPageTemplate from '../services-page-template';

export default async function GlassUndFassaden() {
  const pageData = getServiceByValue('glass-und-fassaden');
  if (!pageData) notFound();
  return <ServicesPageTemplate pageData={pageData} />;
}
