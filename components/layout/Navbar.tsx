import { Shield } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">ShieldPoint</span>
          </div>
          <div className="flex space-x-4">
            <Link href="/features" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Pricing
            </Link>
            <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}