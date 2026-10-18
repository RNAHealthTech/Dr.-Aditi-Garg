'use client';

import React, { createContext, useContext, useState } from 'react';
import AppointmentModal from '@/components/appointment-modal';

interface AppointmentContextType {
  openAppointmentModal: (preselectedConcern?: string, defaultClinic?: 'sgrh' | 'shivasha') => void;
  closeAppointmentModal: () => void;
  isModalOpen: boolean;
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined);

export const AppointmentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [concern, setConcern] = useState('');
  const [initialClinic, setInitialClinic] = useState<'sgrh' | 'shivasha'>('sgrh');

  const openAppointmentModal = (preselectedConcern = '', defaultClinic: 'sgrh' | 'shivasha' = 'sgrh') => {
    setConcern(preselectedConcern);
    setInitialClinic(defaultClinic);
    setIsOpen(true);
  };

  const closeAppointmentModal = () => {
    setIsOpen(false);
  };

  return (
    <AppointmentContext.Provider
      value={{
        openAppointmentModal,
        closeAppointmentModal,
        isModalOpen: isOpen,
      }}
    >
      {children}
      <AppointmentModal
        isOpen={isOpen}
        onClose={closeAppointmentModal}
        preselectedConcern={concern}
        defaultClinic={initialClinic}
      />
    </AppointmentContext.Provider>
  );
};

export const useAppointmentModal = () => {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error('useAppointmentModal must be used within an AppointmentProvider');
  }
  return context;
};
