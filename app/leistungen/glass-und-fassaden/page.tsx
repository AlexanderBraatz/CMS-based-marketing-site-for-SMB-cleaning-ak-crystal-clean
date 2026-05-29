import { SERVICE_OPTIONS } from '@/lib/data';
import React from 'react';
import ServicesPageTemplate from '../services-page-template';

export default function GlassUndFassaden() {
  return <ServicesPageTemplate pageData={SERVICE_OPTIONS[0]} />;
}
