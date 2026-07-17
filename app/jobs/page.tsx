import JobsPageContent from '@/components/jobs-page-content';
import client from '@/tina/__generated__/client';

export default async function Jobs() {
  const res = await client.queries.page({ relativePath: 'jobs.json' });
  return <JobsPageContent data={res.data} query={res.query} variables={res.variables} />;
}
