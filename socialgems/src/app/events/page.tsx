'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { FaCalendarAlt, FaMapMarkerAlt, FaUser, FaUsers, FaClock, FaPhone, FaEnvelope, FaArrowUp } from 'react-icons/fa';

interface Event {
  id: number;
  title: string;
  event_date: string;
  event_time: string;
  host: string;
  location: string;
  description: string;
  image_url: string;
  recurring: string;
  created_at: string;
}

interface ReservationForm {
  full_name: string;
  email: string;
  phone_number: string;
  group_size: number;
  special_requests: string;
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const [reservationForm, setReservationForm] = useState<ReservationForm>({
    full_name: '',
    email: '',
    phone_number: '',
    group_size: 1,
    special_requests: ''
  });
  const [reservationLoading, setReservationLoading] = useState(false);
  const [reservationSuccess, setReservationSuccess] = useState<string | null>(null);
  const [reservationError, setReservationError] = useState<string | null>(null);

  // State for processed events
  const [currentEvents, setCurrentEvents] = useState<Event[]>([]);
  const [pastEvents, setPastEvents] = useState<Event[]>([]);
  const [closestEvent, setClosestEvent] = useState<Event | null>(null);

  // Rotating hero images
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const heroImages = ['/hero1.jpg', '/hero2.jpg', '/hero3.jpg'];

  // Modal state for gallery
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [selectedGalleryImages, setSelectedGalleryImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Grouped gallery images (3,3,3,2)
  const galleryGroups = [
    ['/Gem1.jpg', '/Gem2.jpg', '/Gem3.jpg'],
    ['/Gem4.jpg', '/Gem5.jpg', '/Gem6.jpg'],
    ['/Gem7.jpg', '/Gem8.jpg', '/Gem9.jpg'],
    ['/Gem10.jpg', '/Gem11.jpg']
  ];

  // Fetch events on component mount
  useEffect(() => {
    fetchEvents();
  }, []);

  // Rotate hero every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Process events when events state changes
  useEffect(() => {
    if (events.length > 0) {
      const currentDate = new Date();
      const current = events.filter(event => new Date(event.event_date) >= currentDate);
      const past = events.filter(event => new Date(event.event_date) < currentDate);
      
      setCurrentEvents(current);
      setPastEvents(past);
      setClosestEvent(current.length > 0 ? current[0] : null);
      
      //console.log('Current date:', currentDate);
      //console.log('All events:', events);
      //console.log('Current events:', current);
      //console.log('Past events:', past);
      //console.log('Closest event:', current.length > 0 ? current[0] : null);
    }
  }, [events]);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/create_event');
      const data = await response.json();
      
      //console.log('API Response:', data);
      
      if (data.success) {
        setEvents(data.events);
        //console.log('Events set:', data.events);
      } else {
        setError('Failed to fetch events');
        console.error('API Error:', data.error);
      }
    } catch (error) {
      setError('Error fetching events');
      console.error('Fetch Error:', error);
    } finally {
      setLoading(false);
    }
  };

  // Countdown timer effect
  useEffect(() => {
    if (!closestEvent) return;

    const updateTimer = () => {
      const now = new Date().getTime();
      
      // Fix date parsing - event_date is already a full ISO string
      let eventDate: number;
      
      if (closestEvent.event_date) {
        // Parse the event_date (which includes timezone info)
        const eventDateTime = new Date(closestEvent.event_date);
        
        // If event_time exists, override the time portion
        if (closestEvent.event_time) {
          const [hours, minutes, seconds] = closestEvent.event_time.split(':').map(Number);
          eventDateTime.setHours(hours, minutes, seconds || 0, 0);
        }
        
        eventDate = eventDateTime.getTime();
      } else {
        eventDate = now; // Fallback
      }
      
      const distance = eventDate - now;

      // Debug logging
      //console.log('Current time:', new Date(now));
      //console.log('Event date (original):', closestEvent.event_date);
      //console.log('Event time (original):', closestEvent.event_time);
      //console.log('Event date (parsed):', new Date(eventDate));
      //console.log('Time difference (ms):', distance);
      //console.log('Time difference (days):', distance / (1000 * 60 * 60 * 24));
      //console.log('Closest event data:', closestEvent);

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update DOM elements
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        //console.log('DOM elements found:', { daysEl, hoursEl, minutesEl, secondsEl });

        if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
        if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
        if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
        if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
      } else {
        // Event has passed
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (daysEl) daysEl.textContent = '00';
        if (hoursEl) hoursEl.textContent = '00';
        if (minutesEl) minutesEl.textContent = '00';
        if (secondsEl) secondsEl.textContent = '00';
      }
    };

    // Wait a bit for DOM to be ready, then update timer
    const initialTimer = setTimeout(updateTimer, 100);

    // Update timer every second
    const timerInterval = setInterval(updateTimer, 1000);

    // Cleanup timer interval and initial timer
    return () => {
      clearTimeout(initialTimer);
      clearInterval(timerInterval);
    };
  }, [closestEvent]);

  const openReservationModal = (event: Event) => {
    setSelectedEvent(event);
    setIsReservationModalOpen(true);
    setReservationForm({
      full_name: '',
      email: '',
      phone_number: '',
      group_size: 1,
      special_requests: ''
    });
    setReservationSuccess(null);
    setReservationError(null);
  };

  const closeReservationModal = () => {
    setIsReservationModalOpen(false);
    setSelectedEvent(null);
  };

  const handleReservationInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setReservationForm(prev => ({
      ...prev,
      [name]: name === 'group_size' ? parseInt(value) : value
    }));
  };

  const handleReservationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedEvent) return;

    try {
      setReservationLoading(true);
      setReservationError(null);

      const response = await fetch('/api/reserve_event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...reservationForm,
          event_id: selectedEvent.id
        }),
      });

      const data = await response.json();

      if (data.success) {
        setReservationSuccess('Reservation submitted successfully!');
        setTimeout(() => {
          closeReservationModal();
        }, 2000);
      } else {
        setReservationError(data.error || 'Failed to submit reservation');
      }
    } catch (error) {
      setReservationError('Error submitting reservation');
    } finally {
      setReservationLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatShortDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  const formatYear = (dateString: string) => {
    const date = new Date(dateString);
    return date.getFullYear().toString();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gold"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="text-red-500 text-xl mb-4">Error loading events</div>
            <button 
              onClick={fetchEvents}
              className="bg-gold text-black px-6 py-2 rounded-lg hover:bg-gold/90"
            >
              Try Again
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-screen min-h-[600px] overflow-hidden">
        {heroImages.map((src, idx) => (
          <Image
            key={src}
            src={src}
            alt="Events Hero"
            fill
            className={`object-cover object-center transition-opacity duration-1000 ${idx === currentHeroIndex ? 'opacity-100' : 'opacity-0'}`}
            priority={idx === 0}
          />
        ))}
        {/* Softer overlay to keep image color visible */}
        <div className="absolute inset-0 bg-black/25"></div>
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
            <h2 className="text-xl md:text-7xl font-bold max-w-3xl mx-auto px-4 mb-6">Join us for exciting events and experiences</h2>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-16">
        {closestEvent ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Event Details - Left (Increased Width) */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Next Event</h2>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Event Image */}
                <div className="relative h-80">
                  {closestEvent.image_url ? (
                    <Image
                      src={closestEvent.image_url}
                      alt={closestEvent.title}
                      fill
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-2">🎉</div>
                        <p className="text-gray-500 font-medium">Event Image</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Event Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{closestEvent.title}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                      <FaCalendarAlt className="text-gold mr-3" />
                      <span className="font-medium">{formatDate(closestEvent.event_date)}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <FaClock className="text-gold mr-3" />
                      <span className="font-medium">{closestEvent.event_time || '12:00'}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <FaUser className="text-gold mr-3" />
                      <span className="font-medium">Hosted by {closestEvent.host}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <FaMapMarkerAlt className="text-gold mr-3" />
                      <span className="font-medium">{closestEvent.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <div 
                      className="text-gray-700 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: closestEvent.description }}
                    />
                  </div>
                </div>
              </div>

              {/* Gallery Section - Below Event Details */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Event Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Sample gallery images - you can replace these with actual event images */}
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/web-event-main.jpg"
                      alt="Event Gallery 1"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/Gemsconnect2.jpg"
                      alt="Event Gallery 2"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src="/web-event-main.jpg"
                      alt="Event Gallery 3"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Countdown Timer - Right (Fixed/Static) */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                {closestEvent ? (
                  <div className="bg-black text-white rounded-2xl shadow-xl p-6">
                    <h2 className="text-2xl font-bold text-center mb-6">Next Event</h2>
                    
                    {/* Event Details */}
                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-gold mb-2">{closestEvent.title}</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center">
                            <FaMapMarkerAlt className="text-gold mr-2" />
                            <span>{closestEvent.location}</span>
                          </div>
                          <div className="flex items-center">
                            <FaClock className="text-gold mr-2" />
                            <span>{closestEvent.event_time || '12:00'}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Countdown Timer */}
                    <div className="text-center">
                      <h4 className="text-lg font-semibold mb-4">Countdown to Event</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gray-800 rounded-lg p-3">
                          <div className="text-2xl font-bold text-gold" id="days">00</div>
                          <div className="text-xs text-gray-300">Days</div>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-3">
                          <div className="text-2xl font-bold text-gold" id="hours">00</div>
                          <div className="text-xs text-gray-300">Hours</div>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-3">
                          <div className="text-2xl font-bold text-gold" id="minutes">00</div>
                          <div className="text-xs text-gray-300">Minutes</div>
                        </div>
                        <div className="bg-gray-800 rounded-lg p-3">
                          <div className="text-2xl font-bold text-gold" id="seconds">00</div>
                          <div className="text-xs text-gray-300">Seconds</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-black text-white rounded-2xl shadow-xl p-6 text-center">
                    <div className="text-6xl mb-4">📅</div>
                    <h3 className="text-xl font-semibold mb-2">No Upcoming Events</h3>
                    <p className="text-gray-300">Check back soon!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📅</div>
            <h3 className="text-2xl font-semibold text-gray-600 mb-2">No Upcoming Events</h3>
            <p className="text-gray-500">Check back soon for new events!</p>
          </div>
        )}
      </div>

      {/* Gallery Section - Gem Connect Event */}
      <div className="mt-16">
        <div className="container mx-auto px-4">
          {/* Header and text content above gallery */}
          <div id="gen-connect-overview" className="text-left mb-8 font-sans">
            <h3 className="text-lg font-semibold text-gray-600 mb-2 font-sans">Gallery From Gen Connect Event</h3>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-sans">Gen Connect — Highlights</h2>
            <p className="text-gray-700 max-w-4xl mb-6 font-sans leading-relaxed">
              Gen Connect brought creators and communities together for a vibrant day of conversation,
              collaboration, and creativity. From intimate networking moments to powerful panel discussions, the
              energy was electric throughout. From creators and brands discovering new opportunities, to stories shared on the mic and off the stage.
            </p>
            
            <p className="text-gray-700 max-w-4xl font-sans leading-relaxed">
              Visit the moments below in the gallery— each tile opens a mini-gallery. More videos and photos are
              on the way. Thank you for being part of the story.
            </p>
          </div>

          {/* Gallery tiles - horizontal on desktop, vertical on mobile */}
          <div className="flex flex-col md:flex-row gap-4 justify-center overflow-x-auto md:mr-40 pb-4">
            {galleryGroups.map((images, index) => (
              <div
                key={index}
                className="relative w-full md:w-[300px] h-[300px] md:h-[400px] rounded-lg overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex-shrink-0"
                onClick={() => { setSelectedGalleryImages(images); setCurrentImageIndex(0); setIsGalleryModalOpen(true); }}
              >
                <Image
                  src={images[0]}
                  alt={`Event Gallery Tile ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Past Events Section - White Background */}
      {pastEvents.length > 0 && (
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
              Past Events
            </h2>
            
            <div className="space-y-8">
              {pastEvents.map((event) => (
                <div key={event.id} className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg">
                  {event.image_url ? (
                    <Image
                      src={event.image_url}
                      alt={event.title}
                      fill
                      className="object-cover object-center"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-2">📸</div>
                        <p className="text-gray-500 font-medium">Event Image</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Event Button - Centered with New Date Format */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button 
                      className="border-4 border-white text-white font-bold px-8 py-4 rounded-lg bg-transparent hover:bg-white hover:text-black transition-all duration-300 min-w-[120px]"
                      onClick={() => {
                        const el = document.getElementById('gen-connect-overview');
                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }}
                    >
                      <span className="font-bold text-white hover:text-black">
                        {new Date(event.event_date).getDate()}.{new Date(event.event_date).getMonth() + 1}.{new Date(event.event_date).getFullYear()}
                      </span>
                    </button>
                  </div>

                  {/* Event Title Overlay - Centered with spacing from button */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black">
                    <h3 className="text-white font-bold text-xl md:text-2xl text-center">
                      {event.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-white border-2 border-gray-300 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 z-40"
      >
        <FaArrowUp className="text-gray-600 text-xl" />
      </button>

      {/* Gallery Modal */}
      {isGalleryModalOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-2 md:p-4" onClick={() => setIsGalleryModalOpen(false)}>
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
            {/* Close */}
            <button
              onClick={() => setIsGalleryModalOpen(false)}
              className="absolute top-2 right-2 z-10 bg-black/70 text-white rounded-full p-2 hover:bg-black/90 text-xl"
            >
              ✕
            </button>

            {/* Main Image Container */}
            <div className="flex-1 flex items-center justify-center min-h-0">
              <div className="relative w-full h-full max-w-full max-h-full">
                <Image
                  src={selectedGalleryImages[currentImageIndex]}
                  alt={`Gallery ${currentImageIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                />
              </div>
            </div>

            {/* Navigation */}
            {selectedGalleryImages.length > 1 && (
              <>
                <button
                  onClick={() => setCurrentImageIndex((p) => (p - 1 + selectedGalleryImages.length) % selectedGalleryImages.length)}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/70 text-white rounded-full p-2 md:p-3 hover:bg-black/90 text-xl md:text-2xl"
                >
                  ‹
                </button>
                <button
                  onClick={() => setCurrentImageIndex((p) => (p + 1) % selectedGalleryImages.length)}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/70 text-white rounded-full p-2 md:p-3 hover:bg-black/90 text-xl md:text-2xl"
                >
                  ›
                </button>
              </>
            )}

            {/* Thumbnails */}
            {selectedGalleryImages.length > 1 && (
              <div className="flex justify-center mt-2 md:mt-4 gap-1 md:gap-2 overflow-x-auto pb-2">
                {selectedGalleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-md overflow-hidden border-2 flex-shrink-0 ${idx === currentImageIndex ? 'border-white' : 'border-gray-400'}`}
                  >
                    <Image 
                      src={img} 
                      alt={`Thumb ${idx + 1}`} 
                      width={64} 
                      height={64} 
                      className="w-full h-full object-cover" 
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
