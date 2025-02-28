'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from '@/contexts/AuthContext';
import TopBar from '../components/TopBar';
import ProtectedRoute from '@/contexts/ProtectedRoute';
import { Analytics } from "@vercel/analytics/react"
// import { PostHogProvider } from '@/contexts/PostHogContext';
// import { PostHogErrorBoundary } from '@/components/PostHogErrorBoundary';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics mode="auto" />
        {/* <PostHogErrorBoundary>
          <PostHogProvider> */}
            <AuthProvider>   
                <ProtectedRoute>
                  <TopBar />    
                  <main>{children}</main>
                </ProtectedRoute>
            </AuthProvider>
          {/* </PostHogProvider>
        </PostHogErrorBoundary> */}
      </body>
    </html>
  );
}
