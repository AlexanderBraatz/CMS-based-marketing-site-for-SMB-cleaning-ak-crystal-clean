import LeistungenPageContent from '@/components/leistungen-page-content';
import client from '@/tina/__generated__/client';

export default async function Leistungen() {
  const [res, globalRes] = await Promise.all([
    client.queries.page({ relativePath: 'leistungen.json' }),
    client.queries.global({ relativePath: 'index.json' }),
  ]);

  return (
    <LeistungenPageContent
      data={res.data}
      query={res.query}
      variables={res.variables}
      global={{ data: globalRes.data, query: globalRes.query, variables: globalRes.variables }}
    />
  );
}
