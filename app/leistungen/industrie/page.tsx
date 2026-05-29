import { getServiceByValue } from '@/lib/data';
import { notFound } from 'next/navigation';
import ServicesPageTemplate from '../services-page-template';

export default function Industrie() {
  const pageData = getServiceByValue('industrie');
  if (!pageData) notFound();
  return <ServicesPageTemplate pageData={pageData} />;
}
