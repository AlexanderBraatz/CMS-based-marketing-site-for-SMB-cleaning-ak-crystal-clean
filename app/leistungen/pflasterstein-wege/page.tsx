import { getServiceByValue } from '@/lib/data';
import { notFound } from 'next/navigation';
import ServicesPageTemplate from '../services-page-template';

export default function PflastersteinWege() {
  const pageData = getServiceByValue('pflasterstein-wege');
  if (!pageData) notFound();
  return <ServicesPageTemplate pageData={pageData} />;
}
