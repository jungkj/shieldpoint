import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
      <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
        ShieldPoint
        <span className="text-blue-600"> Risk Assessment</span>
      </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Transform your risk and control self-assessment process with our intelligent platform.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <Link href="/shieldpoint/register" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
            Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        
        </div>
      </div>
    </div>
  );
}