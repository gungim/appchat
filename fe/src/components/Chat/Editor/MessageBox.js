import React, { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';

function MessageBox() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const onChange = (editorState) => {
    setEditorState(editorState);
  };

  const onUnderlineClick = () => {
    onChange(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'));
  };

  const onBoldClick = () => {
    onChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  };

  const onItalicClick = () => {
    onChange(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
  };
  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onChange(newState);
      return true;
    }
    return false;
  };

  return (
    <div>
      <Editor
        editorState={editorState}
        handleKeyCommand={handleKeyCommand}
        onChange={onChange}
        placeholder="Hãy viết gì đó ở đây"
      />
      <div>
        <button onClick={onBoldClick}>
          <b>B</b>
        </button>
        <button onClick={onItalicClick}>
          <i>I</i>
        </button>
        <button onClick={onUnderlineClick}>
          <em>U</em>
        </button>
      </div>
    </div>
  );
}

export default MessageBox;
