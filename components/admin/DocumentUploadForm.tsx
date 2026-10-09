'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { useUpload } from '@/hooks/useUpload';
import { UploadCloud } from 'lucide-react';
import { DocumentCategory, TrustDocument } from '@/types/document';

interface DocumentUploadFormProps {
  onClose: () => void;
  onUploadSuccess: (doc: TrustDocument) => void;
}

export const DocumentUploadForm: React.FC<DocumentUploadFormProps> = ({ onClose, onUploadSuccess }) => {
  const { processFile, isUploading } = useUpload();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<DocumentCategory>('Export Licences');
  const [issuedBy, setIssuedBy] = useState('');
  const [description, setDescription] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile || !title || !issuedBy) {
      alert('Please fill all required fields and select a document file.');
      return;
    }

    try {
      const processed = await processFile(selectedFile);
      const newDoc: TrustDocument = {
        id: 'doc-' + Date.now(),
        title,
        category,
        description: description || 'Official verification document for Taxvi Global trade operations.',
        fileType: processed.fileType,
        fileSize: processed.sizeFormatted,
        fileUrl: processed.url,
        issuedBy,
        issueDate: new Date().toISOString().split('T')[0],
        isPublic,
        uploadedAt: new Date().toISOString().split('T')[0]
      };

      onUploadSuccess(newDoc);
      onClose();
    } catch (err) {
      alert('Failed to upload file.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleFileDrop}
        className="border-2 border-dashed border-gold/60 p-6 bg-cream text-center space-y-2 relative hover:border-gold transition-colors"
      >
        <UploadCloud className="w-8 h-8 text-gold mx-auto" />
        <p className="text-xs font-bold text-basil">
          {selectedFile ? `Selected: ${selectedFile.name}` : 'Drag & Drop document file here or browse'}
        </p>
        <span className="text-[10px] text-charcoal/60 block">Supports PDF, DOCX, PNG, JPG (Up to 15MB)</span>
        <input
          type="file"
          onChange={(e) => e.target.files?.[0] && setSelectedFile(e.target.files[0])}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
      </div>

      <Input
        label="Document Title *"
        required
        placeholder="e.g. APEDA RCMC Renewal Certificate 2026"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Select
          label="Category *"
          value={category}
          onChange={(e) => setCategory(e.target.value as DocumentCategory)}
          options={[
            { label: 'Export Licences', value: 'Export Licences' },
            { label: 'Company Registration', value: 'Company Registration' },
            { label: 'Quality & Food Safety', value: 'Quality & Food Safety' },
            { label: 'Financial & Banking', value: 'Financial & Banking' },
            { label: 'Product Catalogues', value: 'Product Catalogues' },
            { label: 'Lab Test Reports', value: 'Lab Test Reports' }
          ]}
        />
        <Input
          label="Issuing Authority *"
          required
          placeholder="e.g. APEDA / FSSAI / SGS"
          value={issuedBy}
          onChange={(e) => setIssuedBy(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-[11px] font-semibold uppercase tracking-wider text-charcoal/80 mb-1">
          Brief Summary / Scope
        </label>
        <textarea
          rows={2}
          placeholder="Explain what this document verifies..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 bg-ivory border border-sand text-xs text-charcoal focus:border-gold rounded-none"
        />
      </div>

      <div className="flex items-center gap-2 pt-1">
        <input
          type="checkbox"
          id="isPublic"
          checked={isPublic}
          onChange={(e) => setIsPublic(e.target.checked)}
          className="w-4 h-4 accent-gold cursor-pointer"
        />
        <label htmlFor="isPublic" className="text-xs text-basil font-medium cursor-pointer">
          Publish immediately to Public Trust Center page
        </label>
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t border-sand">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit" variant="gold" disabled={isUploading}>
          {isUploading ? 'Processing File...' : 'Upload & Publish Document'}
        </Button>
      </div>
    </form>
  );
};
