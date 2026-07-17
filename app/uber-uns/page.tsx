import UberUnsPageContent from '@/components/uber-uns-page-content';
import client from '@/tina/__generated__/client';

export default async function UberUns() {
  const res = await client.queries.page({ relativePath: 'uberUns.json' });
  return <UberUnsPageContent data={res.data} query={res.query} variables={res.variables} />;
}
