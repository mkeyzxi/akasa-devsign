"use client";

import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import { useMemo } from "react";

export default function BlockNoteRenderer({ content }: { content: string }) {
  const blocks = useMemo(() => {
    try {
      if (content && content !== "[]") {
        return JSON.parse(content);
      }
    } catch (e) {
      console.error("Failed to parse content");
    }
    return undefined;
  }, [content]);

  const editor = useCreateBlockNote({
    initialContent: blocks,
  });

  return (
    <div className="prose prose-invert max-w-none">
      <BlockNoteView editor={editor} editable={false} theme="light" />
    </div>
  );
}
