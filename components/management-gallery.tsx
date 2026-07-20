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
  if (!section) return null;

  const members = [
    {
      image: section.image1,
      name: section.name1,
      role: section.role1,
      imageField: 'image1' as const,
      nameField: 'name1' as const,
      roleField: 'role1' as const,
    },
    {
      image: section.image2,
      name: section.name2,
      role: section.role2,
      imageField: 'image2' as const,
      nameField: 'name2' as const,
      roleField: 'role2' as const,
    },
    {
      image: section.image3,
      name: section.name3,
      role: section.role3,
      imageField: 'image3' as const,
      nameField: 'name3' as const,
      roleField: 'role3' as const,
    },
    {
      image: section.image4,
      name: section.name4,
      role: section.role4,
      imageField: 'image4' as const,
      nameField: 'name4' as const,
      roleField: 'role4' as const,
    },
  ].filter((member) => member.image);

  return (
    <motion.div {...getFadeInUpAtAmount(0)} className="px-[5%]">
      <h3
        data-tina-field={tinaField(section, 'heading')}
        className="font-cooper-hewitt mb-5 text-[32px] leading-tight font-semibold tracking-tight opacity-80"
      >
        {section.heading}
      </h3>

      <div className="1xs:grid-cols-[repeat(auto-fit,minmax(225px,1fr))] 1xs:gap-5 grid w-full grid-cols-[225px] gap-15">
        {members.map((member) => (
          <div key={member.nameField} className="flex flex-col gap-5">
            <TallImageDrop
              src={member.image!}
              dropIsOnLeft={true}
              sizes={MANAGEMENT_GALLERY_IMAGE_SIZES}
              tinaField={tinaField(section, member.imageField)}
            />
            <div className="flex flex-col gap-1">
              <p
                data-tina-field={tinaField(section, member.nameField)}
                className="font-instrument-sans text-xl font-semibold"
              >
                {member.name}
              </p>
              <p
                data-tina-field={tinaField(section, member.roleField)}
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
