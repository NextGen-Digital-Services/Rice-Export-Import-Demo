'use client';

import { useState } from 'react';

export function useUpload() {
  const [isUploading, setIsUploading] = useState(false);

  const processFile = (file: File): Promise<{ url: string; sizeFormatted: string; fileType: 'PDF' | 'IMAGE' | 'DOCX' }> => {
    setIsUploading(true);
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setIsUploading(false);
        const result = e.target?.result as string;
        const sizeMb = (file.size / (1024 * 1024)).toFixed(1);
        const sizeFormatted = file.size > 1024 * 1024 ? `${sizeMb} MB` : `${Math.round(file.size / 1024)} KB`;

        let fileType: 'PDF' | 'IMAGE' | 'DOCX' = 'PDF';
        if (file.type.includes('image')) fileType = 'IMAGE';
        else if (file.type.includes('word') || file.name.endsWith('.docx')) fileType = 'DOCX';

        resolve({
          url: result,
          sizeFormatted,
          fileType
        });
      };
      reader.onerror = () => {
        setIsUploading(false);
        reject(new Error('Failed to read file'));
      };
      reader.readAsDataURL(file);
    });
  };

  return { processFile, isUploading };
}
