import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#422006] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Toubkal Climbers</h3>
            <p className="text-gray-400">
              Professional climbing guides offering unforgettable adventures in the Atlas Mountains of Morocco.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="flex items-center"><Phone className="h-5 w-5 mr-2" /> +212 600112233</p>
              <p className="flex items-center"><Mail className="h-5 w-5 mr-2" /> info@toubkalclimbers.com</p>
              <p className="flex items-center"><MapPin className="h-5 w-5 mr-2" /> Imlil, Atlas Mountains, Morocco</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="hover:text-gray-400"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="hover:text-gray-400"><Twitter className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Toubkal Climbers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}