'use client';

import React, { useState } from 'react';
import { useData } from '@/context/DataContext';
import { DocumentUploadModal } from '@/components/admin/DocumentUploadModal';
import { Table } from '@/components/ui/Table';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { Plus, Eye, EyeOff, Trash2, Download, Search, FileText } from 'lucide-react';
import { formatDate } from '@/lib/utils';
import { TrustDocument } from '@/types/document';

export default function AdminDocumentsPage() {
  const { documents, addDocument, toggleDocumentPublic, deleteDocument } = useData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = documents.filter(
    (d) =>
      d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.issuedBy.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl font-bold text-basil">Trust Document Manager</h1>
          <p className="text-xs text-charcoal/60">
            Upload APEDA, FSSAI, ISO, HACCP & Lab reports. Toggle visibility to instantly display on the public Trust Center.
          </p>
        </div>
        <Button variant="gold" onClick={() => setIsModalOpen(true)} className="gap-2">
          <Plus className="w-4 h-4" /> Upload New Document
        </Button>
      </div>

      <div className="bg-ivory border border-sand p-6 space-y-4">
        <div className="flex justify-between items-center gap-4">
          <div className="relative w-full sm:w-72">
            <Input
              placeholder="Search documents by title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Search className="w-4 h-4 text-charcoal/40 absolute left-3 top-3" />
          </div>
          <span className="text-xs text-charcoal/60 font-mono">
            {documents.length} Total Documents ({documents.filter((d) => d.isPublic).length} Public)
          </span>
        </div>

        <Table headers={['Document Title', 'Category', 'Issuing Authority', 'Size / Type', 'Uploaded Date', 'Public Trust Center', 'Actions']}>
          {filtered.map((doc) => (
            <tr key={doc.id} className="hover:bg-cream/60 text-xs">
              <td className="px-4 py-3 font-bold text-basil">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-gold shrink-0" />
                  <span>{doc.title}</span>
                </div>
              </td>
              <td className="px-4 py-3"><Badge variant="gold">{doc.category}</Badge></td>
              <td className="px-4 py-3">{doc.issuedBy}</td>
              <td className="px-4 py-3 font-mono">{doc.fileType} • {doc.fileSize}</td>
              <td className="px-4 py-3">{formatDate(doc.uploadedAt)}</td>
              <td className="px-4 py-3">
                <button
                  onClick={() => toggleDocumentPublic(doc.id)}
                  className={`flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold uppercase transition-colors cursor-pointer ${
                    doc.isPublic ? 'bg-basil text-ivory' : 'bg-sand text-charcoal/60'
                  }`}
                >
                  {doc.isPublic ? <Eye className="w-3.5 h-3.5 text-gold" /> : <EyeOff className="w-3.5 h-3.5" />}
                  <span>{doc.isPublic ? 'Visible' : 'Hidden'}</span>
                </button>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <a href={doc.fileUrl} target="_blank" rel="noopener noreferrer" className="p-1 text-basil hover:text-gold">
                    <Download className="w-4 h-4" />
                  </a>
                  <button onClick={() => deleteDocument(doc.id)} className="p-1 text-charcoal/40 hover:text-terracotta">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </Table>
      </div>

      <DocumentUploadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUploadSuccess={(newDoc) => addDocument(newDoc)}
      />
    </div>
  );
}
