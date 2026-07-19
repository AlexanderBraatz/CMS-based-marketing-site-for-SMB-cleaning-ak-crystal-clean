import UberUnsPageContent from '@/components/uber-uns-page-content';
import client from '@/tina/__generated__/client';

export default async function UberUns() {
  const [res, globalRes] = await Promise.all([
    client.queries.page({ relativePath: 'uberUns.json' }),
    client.queries.global({ relativePath: 'index.json' }),
  ]);

  return (
    <UberUnsPageContent
      data={res.data}
      query={res.query}
      variables={res.variables}
      global={{ data: globalRes.data, query: globalRes.query, variables: globalRes.variables }}
    />
  );
}
