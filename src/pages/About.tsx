
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/ui/section-title';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gray-50 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="About GoChess"
              subtitle="Your premier chess coaching platform for students and tutors alike"
              center
            />
          </div>
        </div>

        {/* Mission and Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-700 mb-4">
                  At GoChess, our mission is to democratize access to quality chess education. We believe that chess is not just a game but a powerful tool for developing critical thinking, strategic planning, and mental discipline.
                </p>
                <p className="text-gray-700">
                  We aim to create a nurturing environment where students of all levels can learn, practice, and excel in chess under the guidance of verified coaches who are passionate about the game and skilled in teaching.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-gray-700 mb-4">
                  We envision a world where chess is recognized and utilized as an educational tool in schools and communities worldwide. We see GoChess as a catalyst for this change, bringing chess into the mainstream of educational activities.
                </p>
                <p className="text-gray-700">
                  Our vision is to build the most comprehensive and accessible chess coaching platform that serves students, tutors, and institutions with equal effectiveness and excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Our Core Values"
              subtitle="The principles that guide everything we do at GoChess"
              center
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We are committed to providing the highest quality chess education through rigorous standards and continuous improvement.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
                <p className="text-gray-600">
                  We believe chess education should be available to everyone, regardless of location, age, or background.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                <p className="text-gray-600">
                  We operate with honesty, transparency, and ethical conduct in all our interactions with students, tutors, and partners.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We continuously seek new and better ways to teach chess, embracing technology and creative teaching methods.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionTitle
              title="Our Story"
              subtitle="How GoChess came to be and where we're headed"
              center
            />
            <div className="max-w-3xl mx-auto mt-8">
              <p className="text-gray-700 mb-4">
                GoChess was founded in 2023 by a group of chess enthusiasts and educational experts who recognized the need for a structured, accessible platform for chess education in India and beyond.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a small initiative to connect chess tutors with students has quickly grown into a comprehensive platform that serves individual learners, competitive players, and educational institutions.
              </p>
              <p className="text-gray-700 mb-4">
                Today, GoChess is proud to host a community of verified tutors and dedicated students who share a passion for the game of chess. Our programs have been carefully designed to cater to different skill levels and goals, ensuring that everyone can find their path to chess mastery.
              </p>
              <p className="text-gray-700">
                As we look to the future, we are excited about expanding our offerings, incorporating new technologies, and reaching more students across the globe. We are committed to our mission of making quality chess education accessible to all and contributing to the growth of chess as an educational tool.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
