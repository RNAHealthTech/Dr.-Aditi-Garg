'use client';
import React, { useState } from 'react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import AppointmentModal from '@/components/appointment-modal';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedConcern, setSelectedConcern] = useState('');

  const handleOpenModal = (concern: string = '') => {
    setSelectedConcern(concern);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfdfc] selection:bg-teal-200 selection:text-[#0e4e50]">
      <Header onOpenAppointmentModal={() => handleOpenModal()} />
      <main className="flex-1">{children}</main>
      <Footer />
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        preselectedConcern={selectedConcern}
      />
    </div>
  );
}
