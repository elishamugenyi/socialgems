'use client'
import Image from "next/image";
import Link from "next/link";
import ComingSoonModal from "./components/comingSoonModal"; // Import the modal
import Navbar from "./components/navbar"
import Footer from "./components/footer";
import { useState } from 'react';
import { warnOptionHasBeenMovedOutOfExperimental } from "next/dist/server/config";

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  return (
    <div className="min-h-screen flex flex-col relative bg-white">

      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center py-20 px-4 md:px-8">
        <Image src="/SG-web-banner.jpg" alt="Hero Image" layout="fill" className="w-full z-0 object-cover rounded-md" />
        {/* Overlay Text and Call to Action */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/30 z-10">
          <h1 className="text-2xl text-gold md:text-5xl font-bold mt-8">
            We Are Social Gems
          </h1>
          <p className="text-lg text-gold font-bold md:text-lg mt-10 max-w-2xl px4">
            The Largest influencer marketplace where businesses and influencers connect. Download our app now to get started!
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <button
              onClick={handleOpenModal}
              className="hover:opacity-80"
            >
              <Image
                src="/Google-play-store.svg" // Replace with your Google Play logo path
                alt="Download on Google Play"
                width={150}
                height={50}
                className="hover:opacity-80 rounded-md"
              />
            </button>

            <button
              onClick={handleOpenModal}
              className="hover:opacity-80"
            >
              <Image
                src="/App-store.svg" // Replace with your App Store logo path
                alt="Download on the App Store"
                width={150}
                height={50}
                className="hover:opacity-80 transition-opacity rounded-md"
              />
            </button>
             {/* Coming Soon Modal */}
            <ComingSoonModal isOpen={isModalOpen} onClose={handleCloseModal} />
          </div>
         
        
        </div>

      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          {/* First Section */}
          <div className="mb-12 flex flex-col md:flex-row items items-start gap-8">
            <h3 className="text-black text-xl font-bold mb-4 flex-1 text-yellow-800">
              WHERE INFLUENCE MEETS OPPORTUNITY
            </h3>
            <div className="flex-1 flex-col md:flex-row md:items-center gap-4">
              <p className="text-black text-lg max-w-2xl mx-auto mb-6">
                We're simplifying influencer marketing, helping businesses 
                connect with the right creators while enabling influencers 
                to earn from their content effortlessly.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Link hidden href="/signup" className="px-6 py-2 bg-gold text-black rounded-md hover:bg-black hover:text-gold hover:border hover:border-black">
                  FOR INFLUENCERS
                </Link>
                <Link hidden href="/influencers" className="px-6 py-2 ml-4 bg-white text-black border border-black rounded-md hover:bg-gold hover:text-black">
                  FOR BRANDS
                </Link>
              </div>
            </div>
          </div>

          {/* Second Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Connect Section */}
            <div className="text-center bg-white p-6 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.3)]">
              {/* Icon with Gold Background */}
              <div className="flex items-center justify-center w-12 h-12 bg-gold rounded-full mx-auto mb-4">
                <Image
                  src="/connect.webp" // Replace with your icon path
                  alt="Connect Icon"
                  width={24}
                  height={24}
                  className="text-white"
                />
              </div>
              <h4 className="text-black text-xl font-bold mb-4">CONNECT</h4>
              <p className="text-black">
                We bridge the gap between businesses and diverse talented influencers. No endless searching; just the perfect match.
              </p>
            </div>

            {/* Inspire Section */}
            <div className="text-center bg-white p-6 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.3)]">
              {/* Icon with Darker Gold Background */}
              <div className="flex items-center justify-center w-12 h-12 bg-amber-600 rounded-full mx-auto mb-4">
                <Image
                  src="/inspire.webp" // Replace with your icon path
                  alt="Inspire Icon"
                  width={24}
                  height={24}
                  className="text-white"
                />
              </div>
              <h4 className="text-black text-xl font-bold mb-4">INSPIRE</h4>
              <p className="text-black">
                We empower creators to build thriving careers and reach their full potential.
              </p>
            </div>

            {/* Glow Section */}
            <div className="text-center bg-white p-6 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.3)]">
              {/* Icon with Brown Background */}
              <div className="flex items-center justify-center w-12 h-12 bg-brown rounded-full mx-auto mb-4">
                <Image
                  src="/glow.webp" // Replace with your icon path
                  alt="Glow Icon"
                  width={24}
                  height={24}
                  className="text-white"
                />
              </div>
              <h4 className="text-black text-xl font-bold mb-4">GLOW</h4>
              <p className="text-black">
                With cutting-edge technology and smart insights, we help both businesses and influencers shine.
              </p>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="text-center">
            <div className="flex gap-4">
              <Link hidden href="/influencers" className="px-6 py-2 text-black rounded-md border border-black hover:bg-black hover:text-white">
                FOR INFLUENCERS
              </Link>
              <Link hidden href="/signup" className="px-6 py-2 text-black rounded-md hover:bg-black hover:text-white">
                FOR BRANDS <span className="ml-2">&gt;</span>
              </Link>
            </div>
          </div>

          {/* Fouth Section */}
          <div className="mb-12 mt-10 flex flex-col md:flex-row items items-start gap 8 rounded-2xl overflow-hidden transition-all durations-300 hover:shadow-xl hover:scale-105 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
            <div className="flex-1 ml-10">
              <h2 className="text-black text-3xl font-bold mt-20 gap-20 text-yellow-500">
                OUR APPROACH
              </h2>
              <p className="text-black text-lg gpa-20 mt-10">
                Social Gems streamlines influencer marketing, 
                harnessing cutting-edge tech and real-time data 
                to connect brands and creators with precision. 
                Our marketplace opens doors for businesses and 
                influencers of all sizes, fostering seamless, 
                transparent collaborations that drive meaningful 
                results.
              </p>
              {/* Call to Action Buttons */}
              <div className="flex gap-4 mt-8 animate-gradient-x">
                <button
                  onClick={handleOpenModal}
                  className="hover:opacity-80"
                >
                  <Image
                    src="/Google-play-store.svg" // Replace with your Google Play logo path
                    alt="Download on Google Play"
                    width={150}
                    height={50}
                    className="hover:opacity-80 rounded-md"
                  />
                </button>

                <button
                  onClick={handleOpenModal}
                  className="hover:opacity-80"
                >
                  <Image
                    src="/App-store.svg" // Replace with your App Store logo path
                    alt="Download on the App Store"
                    width={150}
                    height={50}
                    className="hover:opacity-80 rounded-md"
                  />
                </button>
              </div>
            </div>
            <div className="flex-1 ml-20">
              <Image src="/approach-pic.webp" alt="Match Making" width={450} height={422} className="mt-4 rounded-md"/>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex justify-center py-12 px-4 sm:px-8 bg-gradient-to-r from-gold to-brown rounded-2xl shadow-lg mb-10 mx-4 sm:mx-10 ml-20 mr-10">
        <div className="text-center max-w-2xl w-full">
          {/* Title with Emoji */}
          <h3 className="text-xl sm:text-3xl font-bold text-black mb-4">
            Ready To Make Waves Together ✨
          </h3>

          {/* Description */}
          <p className="text-black text-base sm:text-lg mb-6">
            Let's Talk
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/signup"
                className="px-4 sm:px-6 py-2 bg-white text-black rounded-full hover:bg-black hover:text-white transition-colors text-sm sm:text-base"
              >
                FOR BRANDS
              </Link>
              <Link
                href="/influencers"
                className="px-4 sm:px-6 py-2 bg-black text-white rounded-full border border-white hover:bg-brown hover:text-white transition-colors text-sm sm:text-base"
              >
                FOR INFLUENCERS
              </Link>
          </div>

          {/* Decorative Cubes */}
          <div className="mt-8 flex justify-center gap-2">
            <div className="w-4 h-4 bg-white rounded-lg transform rotate-45"></div>
            <div className="w-4 h-4 bg-white rounded-lg transform rotate-45"></div>
            <div className="w-4 h-4 bg-white rounded-lg transform rotate-45"></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
