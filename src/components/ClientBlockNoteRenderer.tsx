"use client";

import dynamic from "next/dynamic";

const BlockNoteRenderer = dynamic(() => import("./BlockNoteRenderer"), { ssr: false });

export default function ClientBlockNoteRenderer({ content }: { content: string }) {
  return <BlockNoteRenderer content={content} />;
}
