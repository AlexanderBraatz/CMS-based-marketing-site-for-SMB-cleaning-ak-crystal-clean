import { getServiceByValue } from '@/lib/data';
import { notFound } from 'next/navigation';
import ServicesPageTemplate from '../services-page-template';

export default function Unterhaltsreinigung() {
  const pageData = getServiceByValue('unterhaltsreinigung');
  if (!pageData) notFound();
  return <ServicesPageTemplate pageData={pageData} />;
}
