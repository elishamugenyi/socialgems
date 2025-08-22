'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useState } from 'react';

interface TipTapEditorProps {
  content: string;
  onChange: (content: string) => void;
  placeholder?: string;
  className?: string;
}

const TipTapEditor = ({ content, onChange, placeholder = 'Start writing...', className = '' }: TipTapEditorProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    onFocus: () => setIsFocused(true),
    onBlur: () => setIsFocused(false),
    immediatelyRender: false,
  });

  if (!editor) {
    return null;
  }

  return (
    <div className={`border rounded-lg ${isFocused ? 'border-gold ring-2 ring-gold/20' : 'border-gray-300'} ${className}`}>
      {/* Toolbar */}
      <div className="flex flex-wrap gap-1 p-2 border-b bg-gray-50 rounded-t-lg">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded hover:bg-gray-200 ${editor.isActive('bold') ? 'bg-gold text-white' : 'text-gray-700'}`}
          title="Bold"
        >
          <strong>B</strong>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded hover:bg-gray-200 ${editor.isActive('italic') ? 'bg-gold text-white' : 'text-gray-700'}`}
          title="Italic"
        >
          <em>I</em>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`p-2 rounded hover:bg-gray-200 ${editor.isActive('underline') ? 'bg-gold text-white' : 'text-gray-700'}`}
          title="Underline"
        >
          <u>U</u>
        </button>
        <div className="w-px h-6 bg-gray-300 mx-1"></div>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`p-2 rounded hover:bg-gray-200 ${editor.isActive('heading', { level: 1 }) ? 'bg-gold text-white' : 'text-gray-700'}`}
          title="Heading 1"
        >
          H1
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`p-2 rounded hover:bg-gray-200 ${editor.isActive('heading', { level: 2 }) ? 'bg-gold text-white' : 'text-gray-700'}`}
          title="Heading 2"
        >
          H2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`p-2 rounded hover:bg-gray-200 ${editor.isActive('heading', { level: 3 }) ? 'bg-gold text-white' : 'text-gray-700'}`}
          title="Heading 3"
        >
          H3
        </button>
        <div className="w-px h-6 bg-gray-300 mx-1"></div>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded hover:bg-gray-200 ${editor.isActive('bulletList') ? 'bg-gold text-white' : 'text-gray-700'}`}
          title="Bullet List"
        >
          •
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded hover:bg-gray-200 ${editor.isActive('orderedList') ? 'bg-gold text-white' : 'text-gray-700'}`}
          title="Numbered List"
        >
          1.
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`p-2 rounded hover:bg-gray-200 ${editor.isActive('blockquote') ? 'bg-gold text-white' : 'text-gray-700'}`}
          title="Quote"
        >
          "
        </button>
        <button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className="p-2 rounded hover:bg-gray-200 text-gray-700"
          title="Horizontal Rule"
        >
          —
        </button>
      </div>

      {/* Editor Content */}
      <div className="p-3">
        <EditorContent 
          editor={editor} 
          className="min-h-[120px] prose max-w-none focus:outline-none text-black"
        />
        {!content && (
          <div className="absolute top-16 left-3 text-black pointer-events-none">
            {placeholder}
          </div>
        )}
      </div>
    </div>
  );
};

export default TipTapEditor;
