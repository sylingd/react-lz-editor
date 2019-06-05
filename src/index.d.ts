import * as React from 'react';
import Draft from 'draft-js';
import { UploadProps } from 'antd/lib/upload/Upload';

declare namespace ReactLzEditor {
  export interface EditorConcistProps {
    lang?: string;
    wrapperClass?: string;
    disabled?: boolean;
    active?: boolean;
    importContent?: string;
    cbReceiver: (content: string) => void;
    undoRedo?: boolean;
    removeStyle?: boolean;
    pasteNoStyle?: boolean;
    blockStyle?: boolean;
    alignment?: boolean;
    inlineStyle?: boolean;
    color?: boolean;
    image?: boolean;
    video?: boolean;
    audio?: boolean;
    urls?: boolean;
    autoSave?: boolean;
    fullScreen?: boolean;
    readOnly?: boolean;
    editorProps?: Draft.EditorProps;
    uploadConfig?: {
      QINIU_URL: string;
      QINIU_IMG_TOKEN_URL: string;
      QINIU_PFOP: {
        url: string;
      },
      QINIU_VIDEO_TOKEN_URL: string;
      QINIU_FILE_TOKEN_URL: string;
      QINIU_DOMAIN_IMG_URL: string;
      QINIU_DOMAIN_VIDEO_URL: string;
      QINIU_DOMAIN_FILE_URL: string;
    },
    uploadProps?: UploadProps;
    convertFormat?: 'html' | 'markdown' | 'raw';
  }

  export class EditorConcist extends React.Component<EditorConcistProps, any> {
  }
}

import Editor = ReactLzEditor.EditorConcist;

export { Editor as LzEditor };
export default Editor;
