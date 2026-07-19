import JobsPageContent from '@/components/jobs-page-content';
import client from '@/tina/__generated__/client';

export default async function Jobs() {
  const [res, globalRes] = await Promise.all([
    client.queries.page({ relativePath: 'jobs.json' }),
    client.queries.global({ relativePath: 'index.json' }),
  ]);

  return (
    <JobsPageContent
      data={res.data}
      query={res.query}
      variables={res.variables}
      global={{ data: globalRes.data, query: globalRes.query, variables: globalRes.variables }}
    />
  );
}
