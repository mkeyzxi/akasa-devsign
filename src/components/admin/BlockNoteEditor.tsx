"use client";

import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import { useEffect, useState } from "react";

export default function BlockNoteEditor({ 
  initialContent, 
  onChange 
}: { 
  initialContent: string; 
  onChange: (content: string) => void;
}) {
  const [initialBlocks, setInitialBlocks] = useState<any[] | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      if (initialContent && initialContent !== "[]") {
        setInitialBlocks(JSON.parse(initialContent));
      }
    } catch (e) {
      console.error("Failed to parse initial content");
    } finally {
      setLoading(false);
    }
  }, [initialContent]);

  const editor = useCreateBlockNote({
    initialContent: initialBlocks,
  });

  if (loading) {
    return <div className="p-4 text-text-secondary">Loading editor...</div>;
  }

  return (
    <div className="min-h-[400px]">
      <BlockNoteView 
        editor={editor} 
        onChange={() => {
          const blocks = editor.document;
          onChange(JSON.stringify(blocks));
        }}
      />
    </div>
  );
}
