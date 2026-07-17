import { TempFullService } from '@/lib/data';
import ServicesPageContent from '@/components/services-page-content';
import client from '@/tina/__generated__/client';

export default async function ServicesPageTemplate({ pageData }: { pageData: TempFullService }) {
  const res = await client.queries.page({ relativePath: `leistungen/${pageData.value}.json` });
  return (
    <ServicesPageContent
      data={res.data}
      query={res.query}
      variables={res.variables}
      pageData={pageData}
    />
  );
}
