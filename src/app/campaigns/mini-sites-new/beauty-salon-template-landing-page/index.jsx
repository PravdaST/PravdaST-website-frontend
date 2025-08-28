import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Header from '../../components/ui/Header';
import Footer from '../landing-page/components/Footer';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import TeamSection from './components/TeamSection';
import BookingSection from './components/BookingSection';
import ReviewsSection from './components/ReviewsSection';
import LocationSection from './components/LocationSection';

const BeautySalonTemplateLandingPage = () => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleBookService = (service = null) => {
    setSelectedService(service);
    setShowBookingModal(true);
  };

  const handleViewServices = () => {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowGalleryModal(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Demo Notice Banner */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-4 text-center">
        <div className="flex items-center justify-center space-x-2 max-w-4xl mx-auto">
          <Icon name="Eye" size={20} />
          <span className="font-medium">
            Това е демо темплейт за салони красота - Покажете на клиентите си как ще изглежда техният сайт
          </span>
          <Link 
            to="/" 
            className="ml-4 px-4 py-1 bg-white/20 rounded-lg hover:bg-white/30 transition-smooth text-sm font-medium"
          >
            Назад към Rocket
          </Link>
        </div>
      </div>
      <Header />
      <main>
        <HeroSection 
          onBookService={handleBookService}
          onViewServices={handleViewServices}
        />

        <ServicesSection 
          onBookService={handleBookService}
        />

        <GallerySection 
          onImageClick={handleImageClick}
        />

        <TeamSection />

        <BookingSection 
          onBookService={handleBookService}
        />

        <ReviewsSection />

        <LocationSection />
      </main>
      <Footer />
      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                {selectedService ? `Запази час - ${selectedService?.name}` : 'Запази час'}
              </h3>
              <button
                onClick={() => setShowBookingModal(false)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-smooth"
              >
                <Icon name="X" size={20} />
              </button>
            </div>
            
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={32} className="text-pink-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Обадете се директно</h4>
              <p className="text-gray-600 mb-4">За най-бързо записване</p>
              
              <a
                href="tel:+359888456789"
                className="text-3xl font-bold text-pink-600 hover:text-pink-700 transition-smooth block mb-4"
              >
                0888 456 789
              </a>
              
              <p className="text-sm text-gray-500 mb-6">
                Работим: Вторник-Събота, 9:00-19:00
              </p>
            </div>

            <div className="border-t pt-6">
              <h5 className="font-semibold mb-3">Или запазете онлайн:</h5>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Име и фамилия"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                  <option value="">Изберете услуга</option>
                  <option>Подстригване - 35 лв</option>
                  <option>Боядисване - 85 лв</option>
                  <option>Прическа - 45 лв</option>
                  <option>Почистване на лице - 60 лв</option>
                  <option>Маникюр - 25 лв</option>
                  <option>Педикюр - 35 лв</option>
                  <option>Масаж - 80 лв</option>
                </select>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                    <option>Час</option>
                    <option>9:00</option>
                    <option>10:00</option>
                    <option>11:00</option>
                    <option>12:00</option>
                    <option>14:00</option>
                    <option>15:00</option>
                    <option>16:00</option>
                    <option>17:00</option>
                    <option>18:00</option>
                  </select>
                </div>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                  <option>Предпочитан специалист</option>
                  <option>Мария Петрова</option>
                  <option>Анна Иванова</option>
                  <option>Елена Георгиева</option>
                  <option>Без предпочитание</option>
                </select>
              </div>
              
              <div className="flex space-x-3 mt-6">
                <button
                  onClick={() => setShowBookingModal(false)}
                  className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-smooth"
                >
                  Отказ
                </button>
                <button
                  onClick={() => {
                    setShowBookingModal(false);
                    // In real implementation, this would submit the booking
                  }}
                  className="flex-1 py-3 bg-pink-600 text-white rounded-lg font-medium hover:bg-pink-700 transition-smooth"
                >
                  Запази час
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Gallery Modal */}
      {showGalleryModal && selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setShowGalleryModal(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-smooth z-10"
            >
              <Icon name="X" size={24} className="text-white" />
            </button>
            
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="relative">
                <Image
                  src={selectedImage?.image}
                  alt={selectedImage?.title}
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage?.title}</h3>
                <p className="text-gray-600 mb-4">{selectedImage?.description}</p>
                {selectedImage?.beforeAfter && (
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Преди/След трансформация</span>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)]?.map((_, i) => (
                        <Icon 
                          key={i}
                          name="Star" 
                          size={16} 
                          className="text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BeautySalonTemplateLandingPage;