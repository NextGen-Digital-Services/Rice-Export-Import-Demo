'use client';

import React from 'react';
import { FileText, Download, ExternalLink, ShieldCheck } from 'lucide-react';
import { TrustDocument } from '@/types/document';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { formatDate } from '@/lib/utils';

interface DocumentCardProps {
  document: TrustDocument;
}

export const DocumentCard: React.FC<DocumentCardProps> = ({ document }) => {
  const handleView = () => {
    window.open(document.fileUrl, '_blank');
  };

  const handleDownload = () => {
    const a = window.document.createElement('a');
    a.href = document.fileUrl;
    a.download = `${document.title.replace(/\s+/g, '_')}.${document.fileType.toLowerCase()}`;
    a.click();
  };

  return (
    <div className="bg-ivory border border-sand p-6 flex flex-col justify-between hover:border-gold/60 transition-all duration-300 shadow-sm hover:shadow-md">
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="p-3 bg-cream border border-sand text-basil">
            <FileText className="w-6 h-6 text-gold-dark" />
          </div>
          <Badge variant="gold">{document.category}</Badge>
        </div>

        <h3 className="font-serif text-lg font-bold text-basil mb-2 leading-snug">
          {document.title}
        </h3>
        <p className="text-xs text-charcoal/70 mb-4 line-clamp-2 leading-relaxed">
          {document.description}
        </p>

        <div className="bg-cream/60 p-3 border border-sand/40 space-y-1 text-[11px] text-charcoal/80 mb-4">
          <div className="flex justify-between">
            <span className="text-charcoal/50">Issued By:</span>
            <span className="font-semibold text-basil">{document.issuedBy}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-charcoal/50">Issue Date:</span>
            <span>{formatDate(document.issueDate)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-charcoal/50">Format / Size:</span>
            <span className="font-bold text-gold-dark">{document.fileType} • {document.fileSize}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 pt-2">
        <Button variant="outline" size="sm" className="flex-1 gap-1.5" onClick={handleView}>
          <ExternalLink className="w-3.5 h-3.5" /> View
        </Button>
        <Button variant="gold" size="sm" className="flex-1 gap-1.5" onClick={handleDownload}>
          <Download className="w-3.5 h-3.5" /> Download
        </Button>
      </div>
    </div>
  );
};
