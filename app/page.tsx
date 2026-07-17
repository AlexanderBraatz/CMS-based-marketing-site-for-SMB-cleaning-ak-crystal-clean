import HomePageContent from '@/components/home-page-content';
import client from '@/tina/__generated__/client';

export default async function Home() {
  const res = await client.queries.page({ relativePath: 'homePage.json' });
  return <HomePageContent data={res.data} query={res.query} variables={res.variables} />;
}
