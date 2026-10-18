'use client';
import React from 'react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { AppointmentProvider, useAppointmentModal } from '@/context/appointment-context';
import { ScrollProgressBar } from '@/components/ui/scroll-animation';

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { openAppointmentModal } = useAppointmentModal();

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] selection:bg-blue-100 selection:text-blue-900">
      <ScrollProgressBar />
      <Header onOpenAppointmentModal={() => openAppointmentModal()} />
      <main className="flex-1">{children}</main>
      <Footer onOpenAppointmentModal={() => openAppointmentModal()} />
    </div>
  );
}

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppointmentProvider>
      <LayoutContent>{children}</LayoutContent>
    </AppointmentProvider>
  );
}
