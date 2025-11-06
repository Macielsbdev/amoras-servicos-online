// src/components/Layout.tsx
import React from 'react';
import Header from './Header'; 

interface LayoutProps {
  children: React.ReactNode;
}


export default function Layout({ children }: LayoutProps) {
  return (
    
    <div className="min-h-screen bg-gradient-to-r from-purple-700 via-purple-800 to-pink-600"> 
      
      <Header /> 
      
     
      <main className="pt-20"> 
        {children}
      </main>
    </div>
  );
}