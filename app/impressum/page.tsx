import type { Metadata } from 'next';
import ImpressumPageContent from '@/components/impressum-page-content';
import client from '@/tina/__generated__/client';

export const metadata: Metadata = {
  title: 'Impressum | AK Crystal Clean',
  description: 'Impressum der AK Crystal Clean GMBH',
};

export default async function ImpressumPage() {
  const res = await client.queries.page({ relativePath: 'impressum.json' });

  return <ImpressumPageContent data={res.data} query={res.query} variables={res.variables} />;
}
