import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"; // Using react-icons for social media icons

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Platform Description */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-white mb-4">
              Music Mastery
            </h3>
            <p className="text-sm leading-relaxed">
              Unlock your musical potential with our expert-led courses. From
              beginner to advanced, we offer lessons in guitar, piano, vocals,
              and more. Join our community and start your journey today!
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm hover:text-cyan-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="text-sm hover:text-cyan-400 transition-colors"
                >
                  Our Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm hover:text-cyan-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm hover:text-cyan-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Email: support@musicmastery.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Music Lane, Melody City, USA</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <FaFacebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <FaTwitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <FaInstagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <FaYoutube size={24} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Music Mastery. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;