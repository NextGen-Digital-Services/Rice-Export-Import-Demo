'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { IMAGES } from '@/data/images';
import { Tabs } from '@/components/ui/Tabs';
import { Modal } from '@/components/ui/Modal';
import { ZoomIn } from 'lucide-react';

const GALLERY_ITEMS = [
  { id: '1', title: 'Golden Basmati Harvest', category: 'Farms', img: IMAGES.hero.paddyField },
  { id: '2', title: 'Paddy Farm Irrigation', category: 'Farms', img: IMAGES.journey.farm },
  { id: '3', title: 'Bühler Sortex Mill Line', category: 'Mill', img: IMAGES.journey.milling },
  { id: '4', title: 'Optical Color Sorting Machine', category: 'Mill', img: IMAGES.infrastructure.sortex },
  { id: '5', title: 'Grain Moisture & Length Lab', category: 'Quality Lab', img: IMAGES.journey.quality },
  { id: '6', title: 'Non-Woven Bags Warehouse', category: 'Packaging', img: IMAGES.journey.packaging },
  { id: '7', title: 'Climate Controlled Storage Silos', category: 'Packaging', img: IMAGES.infrastructure.silo },
  { id: '8', title: 'Container Ship Ocean Loading', category: 'Shipments', img: IMAGES.hero.shipmentPort },
  { id: '9', title: 'Seaport Container Clearance', category: 'Shipments', img: IMAGES.journey.logistics }
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  const categories = ['All', 'Farms', 'Mill', 'Quality Lab', 'Packaging', 'Shipments'];

  const filtered = activeTab === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  return (
    <div className="space-y-12 py-12 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-[0.3em] font-bold text-gold">Visual Showcase</span>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-basil">Infrastructure & Facility Gallery</h1>
        <p className="text-xs text-charcoal/70 leading-relaxed">
          Take a visual tour through our paddy farms, Sortex rice mills, ISO quality testing labs, automated packaging lines, and container port logistics.
        </p>
      </div>

      <div className="flex justify-center">
        <Tabs tabs={categories} activeTab={activeTab} onChange={setActiveTab} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className="group relative h-64 w-full border border-sand bg-cream overflow-hidden cursor-pointer"
          >
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="400px"
            />
            <div className="absolute inset-0 bg-basil-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-ivory">
              <span className="text-[10px] uppercase font-bold text-gold tracking-widest">{item.category}</span>
              <h3 className="font-serif text-lg font-bold">{item.title}</h3>
              <ZoomIn className="w-5 h-5 text-gold absolute top-4 right-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)} title={selectedImage.title}>
          <div className="space-y-4">
            <div className="relative h-96 w-full border border-gold/30">
              <Image src={selectedImage.img} alt={selectedImage.title} fill className="object-cover" sizes="600px" />
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-gold uppercase">{selectedImage.category}</span>
              <span className="text-charcoal/60">Taxvi Global Official Media</span>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
