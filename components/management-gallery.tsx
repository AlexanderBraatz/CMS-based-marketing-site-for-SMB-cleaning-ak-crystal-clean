'use client';

import React from 'react';
import { motion } from 'motion/react';
import { getFadeInUpAtAmount } from '@/animations/motion';
import TallImageDrop from './utility-components/image-tall-drop-left';
import { PageAboutManagementGallery } from '@/tina/__generated__/types';
import { tinaField } from 'tinacms/dist/react';

const MANAGEMENT_GALLERY_IMAGE_SIZES = '225px';

type ManagementGalleryProps = {
  section?: PageAboutManagementGallery | null;
};

export default function ManagementGallery({ section }: ManagementGalleryProps) {
  const heading = section?.heading ?? 'Management';
  const members = [
    {
      image: section?.image1,
      name: section?.name1 ?? 'Mehmet Akca',
      role: section?.role1 ?? 'Geschäftsführer',
      imageField: 'image1' as const,
      nameField: 'name1' as const,
      roleField: 'role1' as const,
    },
    {
      image: section?.image2,
      name: section?.name2 ?? 'Olga Akca-Klug',
      role: section?.role2 ?? 'Personalmanagement',
      imageField: 'image2' as const,
      nameField: 'name2' as const,
      roleField: 'role2' as const,
    },
    {
      image: section?.image3,
      name: section?.name3 ?? 'Leo Klug',
      role: section?.role3 ?? 'Bereichsleitung Glasreinigung',
      imageField: 'image3' as const,
      nameField: 'name3' as const,
      roleField: 'role3' as const,
    },
    {
      image: section?.image4,
      name: section?.name4 ?? 'Reiner Klix',
      role: section?.role4 ?? 'Gebäudereinigungsmeister',
      imageField: 'image4' as const,
      nameField: 'name4' as const,
      roleField: 'role4' as const,
    },
  ].filter((member) => member.image);

  return (
    <motion.div {...getFadeInUpAtAmount(0)} className="px-[5%]">
      <h3
        data-tina-field={section ? tinaField(section, 'heading') : undefined}
        className="font-cooper-hewitt mb-5 text-[32px] leading-tight font-semibold tracking-tight opacity-80"
      >
        {heading}
      </h3>

      <div className="1xs:grid-cols-[repeat(auto-fit,minmax(225px,1fr))] 1xs:gap-5 grid w-full grid-cols-[225px] gap-15">
        {members.map((member) => (
          <div key={member.nameField} className="flex flex-col gap-5">
            <TallImageDrop
              src={member.image!}
              dropIsOnLeft={true}
              sizes={MANAGEMENT_GALLERY_IMAGE_SIZES}
              tinaField={section ? tinaField(section, member.imageField) : undefined}
            />
            <div className="flex flex-col gap-1">
              <p
                data-tina-field={section ? tinaField(section, member.nameField) : undefined}
                className="font-instrument-sans text-xl font-semibold"
              >
                {member.name}
              </p>
              <p
                data-tina-field={section ? tinaField(section, member.roleField) : undefined}
                className="font-instrument-sans tracking-tight"
              >
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
