'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';
import { DocumentUploadForm } from './DocumentUploadForm';
import { TrustDocument } from '@/types/document';

interface DocumentUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUploadSuccess: (doc: TrustDocument) => void;
}

export const DocumentUploadModal: React.FC<DocumentUploadModalProps> = ({
  isOpen,
  onClose,
  onUploadSuccess
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Upload New Trust Document">
      <DocumentUploadForm onClose={onClose} onUploadSuccess={onUploadSuccess} />
    </Modal>
  );
};
