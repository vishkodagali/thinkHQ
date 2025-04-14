'use client';

import CreativityBlock from './creativityBlock';
import BlackBox from './BlackBox';

export default function QuoteVisualBlock() {
  return (
    <section className="w-full flex flex-col items-center bg-zinc-100 relative overflow-hidden">
      {/* 🎨 3D Model Section */}
      <div className="w-full flex justify-center z-10">
        <div className="w-full max-w-[82.75rem] h-[41.5625rem]">
          <CreativityBlock />
        </div>
      </div>

      {/* 🖤 Black Quote Section (blur handled internally) */}
      <div className="w-full -mt-8 z-20">
        <BlackBox />
      </div>
    </section>
  );
}
