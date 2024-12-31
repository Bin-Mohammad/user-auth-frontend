import React from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const RichTextEditor: React.FC = () => {


    
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World!</p>',
  });

  return (
    <div className="editor-container border p-4 rounded-md">
      <EditorContent editor={editor} />
    </div>
  );
};

export default RichTextEditor;
