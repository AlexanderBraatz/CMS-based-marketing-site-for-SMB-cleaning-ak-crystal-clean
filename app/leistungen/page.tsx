import LeistungenPageContent from '@/components/leistungen-page-content';
import client from '@/tina/__generated__/client';

export default async function Leistungen() {
  const res = await client.queries.page({ relativePath: 'leistungen.json' });
  return <LeistungenPageContent data={res.data} query={res.query} variables={res.variables} />;
}
