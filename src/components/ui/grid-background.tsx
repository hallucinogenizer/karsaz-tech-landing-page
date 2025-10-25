"use client";

export default function GridBackground() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black">
      <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
    </div>
  );
}

