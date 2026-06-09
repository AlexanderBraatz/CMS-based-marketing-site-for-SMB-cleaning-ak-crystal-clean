import React from 'react';
// @ts-expect-error  next-video virtual import with query params
import LogoVideo from '@/videos/logo-video-horizontal-trimed-3xshort-and-trim-off-end.mp4?thumbnailTime=9';
import BackgroundVideo from 'next-video/background-video';

export default function HeroVideo() {
  return (
    <div className="flex justify-end">
      <div className="after:bg-theme-color-image-drop relative h-[300px] w-[441px] after:absolute after:top-2 after:left-2 after:-z-10 after:h-[300px] after:w-[441px] after:rounded-tl-[80px] after:rounded-br-[80px] after:content-['']">
        <div className="border-theme-color-image-border bg-theme-color-image-drop relative z-20 h-full w-full overflow-clip rounded-tl-[80px] rounded-br-[80px] border [&_.next-video-bg]:h-full [&_.next-video-bg]:w-full [&_.next-video-bg]:origin-center [&_.next-video-bg]:scale-150 [&_.next-video-bg-poster]:h-full [&_.next-video-bg-poster]:w-full [&_.next-video-bg-video]:h-full [&_.next-video-bg-video]:w-full">
          <BackgroundVideo src={LogoVideo} loop={false} className="h-full w-full" />
        </div>
      </div>
    </div>
  );
}
