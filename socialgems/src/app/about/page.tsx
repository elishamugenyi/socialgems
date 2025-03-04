import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex flex-col md:flex-row md:text-left items-center justify-center text-center bg-white overflow-hidden px-4 sm:px-6 md:px-12">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-gold to-brown rounded-b-3xl z-0 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
          {/* Hero Content */}
          <div className="relative z-10 text-white container mx-auto flex flex-col md:flex-row items-center justify-between h-full w-full">
            {/* Text Content */}
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-darkgold">Engage with customers through creators they trust</h1>
              <p className="text-lg sm:text-xl">
                Discover the story behind Social Gems and our mission to connect brands with influencers.
              </p>
            </div>

            {/* Image */}
            <div className="flex justify-center md:justify-end w-full sm:w-auto h-full">
              <Image 
                src="/Hannifah-about.webp" 
                alt="about" 
                width={407} 
                height={600} 
                className="rounded-md transform hover:scale-105 transition-transform duration-300 w-full sm:w-auto max-w-[300px] md:max-w-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="flex-1 py-12 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Mission Section */}
          <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-brown mb-4">Our Story</h2>
            <p className="text-black text-lg">
              Social Gems was founded on the insight 
              that everyday social media users hold 
              untapped value. While many have engaged 
              followers, their influence is not fully tapped, 
              and businesses struggle to connect with the right 
              audience. Social Gems bridges this gap, transforming 
              organic social sharing into a powerful tool that connects
              businesses with authentic influence. We’re redefining 
              influence and making marketing more human, trusted, 
              and effective.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-brown mb-4">Our Mission</h2>
            <p className="text-black text-lg">
              At Social Gems, we aim to bridge the gap between brands and influencers by providing a platform that fosters authentic collaborations. Our mission is to empower creators and businesses to achieve their goals through meaningful partnerships.
            </p>
          </div>

          {/* Team Section */}
          <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-brown mb-4">Our Team</h2>

            {/* Rest of the Team Members (Bottom Row) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Team Member 3 */}
              <div className="text-center">
                <Image
                  src="/social-gems-web-eve.jpg" // Replace with your image path
                  alt="Team Leader 2"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-black">Evelyn Luganda:</h3>
                <p className="text-brown">Project Manager</p>
              </div>
              <div className="text-center">
                <Image
                  src="/social-gems-web-christine.jpg" // Replace with your image path
                  alt="Team Member 3"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-black">Nampeera Christine</h3>
                <p className="text-brown">Brand/Influencer Recruitment Specialist</p>
              </div>

              {/* Team Member 2 */}
              <div className="text-center">
                <Image
                  src="/barbra.jpg" // Replace with your image path
                  alt="Team Member 4"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-black">Ampaire Babra</h3>
                <p className="text-brown">Copywriter/Digital Marketer</p>
              </div>

              {/* Team Member 5 */}
              <div className="text-center">
                <Image
                  src="/social-gems-web-leinah.jpg" // Replace with your image path
                  alt="Team Member 5"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-black">Leinah Nabukenya</h3>
                <p className="text-brown">Digital Marketer</p>
              </div>

              {/* Team Member 6 */}
              <div className="text-center">
                  <Image
                    src="/social-gems-web-martha.jpg" // Replace with your image path
                    alt="Team Member 6"
                    width={150}
                    height={150}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-black">Martha Twesime</h3>
                  <p className="text-brown">Sales Associate</p>
              </div>

              {/* Team Member 5 */}
              <div className="text-center">
                <Image
                  src="/social-gems-web-hanie.jpg" // Replace with your image path
                  alt="Team Member 7"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-black">Hanifah Wanyana</h3>
                <p className="text-brown">Brand Relationships Associate</p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-brown mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Value 1 */}
              <div className="text-center">
                <div className="bg-gold p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-black mb-2">Authenticity</h3>
                  <p className="text-black">
                    We believe in genuine connections that drive real results.
                  </p>
                </div>
              </div>

              {/* Value 2 */}
              <div className="text-center">
                <div className="bg-gold p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-black mb-2">Innovation</h3>
                  <p className="text-black">
                    We constantly innovate to provide the best solutions for our users.
                  </p>
                </div>
              </div>

              {/* Value 3 */}
              <div className="text-center">
                <div className="bg-gold p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-black mb-2">Empowerment</h3>
                  <p className="text-black">
                    We empower creators and brands to achieve their full potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}