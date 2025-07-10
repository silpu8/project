import { Mountain, Building, Mail, Phone, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Mountain className="h-6 w-6 text-ladakh-blue" />
              <span className="text-xl font-bold">Discover India</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your gateway to exploring the magnificent regions of Ladakh and Karnataka, 
              offering authentic cultural experiences and unforgettable adventures.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-ladakh-blue">Ladakh</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-ladakh-blue transition-colors">Monasteries</a></li>
              <li><a href="#" className="hover:text-ladakh-blue transition-colors">Pangong Lake</a></li>
              <li><a href="#" className="hover:text-ladakh-blue transition-colors">Nubra Valley</a></li>
              <li><a href="#" className="hover:text-ladakh-blue transition-colors">Trekking</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-karnataka-orange">Karnataka</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-karnataka-orange transition-colors">Hampi</a></li>
              <li><a href="#" className="hover:text-karnataka-orange transition-colors">Mysore Palace</a></li>
              <li><a href="#" className="hover:text-karnataka-orange transition-colors">Badami Caves</a></li>
              <li><a href="#" className="hover:text-karnataka-orange transition-colors">Belur & Halebidu</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@discoverindia.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Discover India. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
