import HomePageContent from '@/components/home-page-content';
import client from '@/tina/__generated__/client';

export default async function Home() {
  const [res, globalRes] = await Promise.all([
    client.queries.page({ relativePath: 'homePage.json' }),
    client.queries.global({ relativePath: 'index.json' }),
  ]);

  return (
    <HomePageContent
      data={res.data}
      query={res.query}
      variables={res.variables}
      global={{ data: globalRes.data, query: globalRes.query, variables: globalRes.variables }}
    />
  );
}
