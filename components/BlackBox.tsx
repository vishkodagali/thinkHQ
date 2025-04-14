'use client';

export default function BlackBox() {
  return (
    <section className="relative w-full bg-[#1A1A1A] h-[60.625rem] overflow-hidden ">
      {/* 🔳 Content */}
      <div className="relative z-20 max-w-[93.3125rem] mx-auto px-6 sm:px-12 py-20 flex flex-col lg:flex-row items-center justify-between gap-12 ">
        
        {/* ✒️ Left Quote */}
        <div className="w-full lg:w-[528px] text-[#F4F7E0] text-4xl leading-[56px] font-eb-garamond italic text-right">
          We delve deep into understanding who they are, what motivates them,
          what challenges they face and how complex systems and forces are
          shaping them.
        </div>

        {/* ⬇️ Arrow */}
        <div className="hidden lg:block">
          <svg
            className="w-[15px] h-[680px]"
            viewBox="0 0 16 680"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.29292 679.707C7.68345 680.098 8.31661 680.098 8.70714 679.707L15.0711 673.343C15.4616 672.953 15.4616 672.319 15.0711 671.929C14.6806 671.538 14.0474 671.538 13.6569 671.929L8.00003 677.586L2.34318 671.929C1.95265 671.538 1.31949 671.538 0.928962 671.929C0.538437 672.319 0.538437 672.953 0.928962 673.343L7.29292 679.707ZM7 0L7 679H9V0H7Z"
              fill="#F4F7E0"
            />
          </svg>
        </div>

        {/* 📝 Right Paragraph */}
        <div className="w-full lg:w-[522px] text-[#F4F7E0] text-xl font-light font-open-sans leading-7">
          Our distinctive approach fosters collaboration with people from all
          walks of life to truly find the real creative answers to some of
          life’s most challenging and important questions. Anchoring ourselves
          in the principles of respect, diversity and empathy helps us get
          there.
        </div>
      </div>
    </section>
  );
}
