'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { 
  ArrowLeft, 
  Coffee, 
  Calendar, 
  Camera, 
  Share2, 
  MapPin, 
  Phone, 
  Clock, 
  Wifi,
  Map, 
  Instagram,
  Facebook,
  QrCode,
  Star,
  Heart,
  X
} from 'lucide-react';

interface CafeData {
  name: string;
  specialty: string;
  location: string;
}

interface MenuItem {
  name: string;
  price: string;
  image: string;
  description?: string;
}

interface MenuCategories {
  [key: string]: MenuItem[];
}

interface Testimonial {
  name: string;
  cafe: string;
  text: string;
  increase: string;
  metric: string;
}

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
}

const CafeTemplateDemoPage: React.FC = () => {
  const router = useRouter();
  const [cafeData, setCafeData] = useState<CafeData>({
    name: "Вашето Кафене",
    specialty: "Specialty Coffee",
    location: "София",
  });

  const [activeFeature, setActiveFeature] = useState<string>("qr-menu");
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("кафе");

  const menuCategories: MenuCategories = {
    кафе: [
      {
        name: "Капучино",
        price: "4.50 лв",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300",
        description: "Класическо капучино с млечна пяна",
      },
      {
        name: "Латте",
        price: "4.80 лв",
        image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=300",
        description: "Кремообразно кафе с топло мляко",
      },
      {
        name: "Еспресо",
        price: "3.20 лв",
        image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=300",
        description: "Силно еспресо с богат аромат",
      },
      {
        name: "Флат Уайт",
        price: "5.20 лв",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300",
        description: "Австралийски стил кафе",
      },
    ],
    чай: [
      {
        name: "Ърл Грей",
        price: "3.50 лв",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300",
        description: "Класически английски чай",
      },
      {
        name: "Зелен чай",
        price: "3.80 лв",
        image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=300",
        description: "Антиоксидантен зелен чай",
      },
      {
        name: "Билков чай",
        price: "4.00 лв",
        image: "https://images.unsplash.com/photo-1594736797933-d0401ba669dc?w=300",
        description: "Микс от билки за релаксация",
      },
      {
        name: "Матча Латте",
        price: "6.50 лв",
        image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=300",
        description: "Японски матча с мляко",
      },
    ],
    сладкиши: [
      {
        name: "Чийзкейк",
        price: "6.50 лв",
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=300",
        description: "Кремообразен чийзкейк с горски плодове",
      },
      {
        name: "Браунис",
        price: "5.50 лв",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300",
        description: "Шоколадов браунис с орехи",
      },
      {
        name: "Круасан",
        price: "4.20 лв",
        image: "https://images.unsplash.com/photo-1555507036-ab794f4afe5c?w=300",
        description: "Френски бутер круасан",
      },
      {
        name: "Мъфин",
        price: "4.80 лв",
        image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=300",
        description: "Домашен мъфин с боровинки",
      },
    ],
    сезонни: [
      {
        name: "Коледен латте",
        price: "5.80 лв",
        image: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?w=300",
        description: "Празничен латте с канела и ванилия",
      },
      {
        name: "Студено брю",
        price: "4.50 лв",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300",
        description: "Студено екстрактирано кафе",
      },
    ],
  };

  const handleDataUpdate = (field: keyof CafeData, value: string): void => {
    setCafeData((prev) => ({ ...prev, [field]: value }));
  };

  const testimonials: Testimonial[] = [
    {
      name: "Петя Димитрова",
      cafe: 'Кафене "Утринно слънце"',
      text: "След като получихме цифровото меню, продажбите на специалните напитки се увеличиха с 60%. Клиентите харесват да виждат снимки на кафетата!",
      increase: "+60%",
      metric: "ръст на специални напитки",
    },
    {
      name: "Стефан Николов",
      cafe: "Coffee Corner",
      text: "Програмата за лоялност е невероятна! Връщащите се клиенти се увеличиха двойно за един месец.",
      increase: "+120%",
      metric: "връщащи се клиенти",
    },
  ];

  const features: Feature[] = [
    {
      id: "qr-menu",
      title: "QR Меню за Кафе",
      description: "Дигитално меню с кафета, чайове и сладкиши",
      icon: "Coffee",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
    {
      id: "loyalty",
      title: "Програма за Лоялност",
      description: "Система за точки и награди за клиенти",
      icon: "Star",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      id: "gallery",
      title: "Галерия и Атмосфера",
      description: "Показване на уютната атмосфера и напитки",
      icon: "Camera",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      id: "social",
      title: "Социални Мрежи",
      description: "Instagram интеграция с клиентски снимки",
      icon: "Share2",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
    },
  ];

  const getIcon = (iconName: string, size: number = 24, className: string = '') => {
    const props = { size, className };
    switch (iconName) {
      case 'Coffee': return <Coffee {...props} />;
      case 'Star': return <Star {...props} />;
      case 'Camera': return <Camera {...props} />;
      case 'Share2': return <Share2 {...props} />;
      default: return <Coffee {...props} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => router.push('/campaigns/landing-page')}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Назад към началната страница</span>
            </button>
            <div className="text-sm text-gray-500">Демо за кафенета</div>
          </div>
        </div>
      </div>

      {/* Customization Panel */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Демо Кафене Темплейт
            </h1>
            <p className="text-xl text-amber-100">
              Персонализирайте демото с данните на вашето кафене
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div>
              <label className="block text-sm font-medium text-amber-100 mb-2">
                Име на кафенето
              </label>
              <input
                type="text"
                value={cafeData.name}
                onChange={(e) => handleDataUpdate("name", e.target.value)}
                className="w-full px-4 py-3 rounded-lg text-gray-900 bg-white/95 backdrop-blur-sm border-0 focus:ring-2 focus:ring-white/30"
                placeholder="Въведете име на кафенето"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-amber-100 mb-2">
                Специалност
              </label>
              <input
                type="text"
                value={cafeData.specialty}
                onChange={(e) => handleDataUpdate("specialty", e.target.value)}
                className="w-full px-4 py-3 rounded-lg text-gray-900 bg-white/95 backdrop-blur-sm border-0 focus:ring-2 focus:ring-white/30"
                placeholder="Specialty Coffee, Домашни сладкиши, и др."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-amber-100 mb-2">
                Локация
              </label>
              <input
                type="text"
                value={cafeData.location}
                onChange={(e) => handleDataUpdate("location", e.target.value)}
                className="w-full px-4 py-3 rounded-lg text-gray-900 bg-white/95 backdrop-blur-sm border-0 focus:ring-2 focus:ring-white/30"
                placeholder="София, Пловдив, и др."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Cafe Template Preview */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mock Cafe Website */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            {/* Hero Section */}
            <div className="relative h-96 bg-gradient-to-r from-amber-900 to-orange-800">
              <Image
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800"
                alt="Cafe atmosphere"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                    {cafeData.name}
                  </h1>
                  <p className="text-xl mb-6">
                    {cafeData.specialty} • {cafeData.location}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => setMenuVisible(true)}
                      className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Coffee size={20} />
                      <span>Виж нашето меню</span>
                    </button>
                    <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                      Програма за лоялност
                    </button>
                  </div>
                </div>
              </div>

              {/* Interactive Hotspots */}
              <div className="absolute top-4 right-4 animate-pulse">
                <div
                  className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => setMenuVisible(true)}
                >
                  <QrCode size={24} color="white" />
                </div>
              </div>
            </div>

            {/* Navigation & Gallery Preview */}
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Нашите специалитети
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {[
                      {
                        name: "Капучино",
                        price: "4.50 лв",
                        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300",
                      },
                      {
                        name: "Латте Арт",
                        price: "4.80 лв",
                        image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=300",
                      },
                      {
                        name: "Чийзкейк",
                        price: "6.50 лв",
                        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=300",
                      },
                      {
                        name: "Матча Латте",
                        price: "6.50 лв",
                        image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=300",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                      >
                        <div className="relative h-32">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-gray-900">
                            {item.name}
                          </h3>
                          <p className="text-amber-600 font-bold">
                            {item.price}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Контакти
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-center space-x-3">
                      <MapPin size={16} className="text-amber-600" />
                      <span>{cafeData.location}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone size={16} className="text-amber-600" />
                      <span>+359 888 456 789</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock size={16} className="text-amber-600" />
                      <span>Пон-Нед: 07:00-22:00</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Wifi size={16} className="text-amber-600" />
                      <span>Безплатен WiFi</span>
                    </div>
                  </div>

                  {/* Mock Google Maps */}
                  <div className="mt-4 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <Map size={24} className="mx-auto mb-2" />
                      <span className="text-sm">Google Maps</span>
                    </div>
                  </div>

                  {/* Social Media Preview */}
                  <div className="mt-4">
                    <h4 className="font-medium text-gray-900 mb-2">
                      Последвайте ни
                    </h4>
                    <div className="flex space-x-3">
                      <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                        <Instagram size={16} className="text-pink-600" />
                      </div>
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Facebook size={16} className="text-blue-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Showcase */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Функционалности специално за кафенета
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Интерактивни демонстрации на всички функции, които ще получите
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`p-6 rounded-xl border-2 transition-all text-left ${
                  activeFeature === feature.id
                    ? "border-amber-500 bg-amber-50"
                    : "border-gray-200 bg-white hover:border-gray-300"
                }`}
              >
                <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                  {getIcon(feature.icon, 24, feature.color)}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </button>
            ))}
          </div>

          {/* Feature Demonstrations */}
          <div className="bg-gray-50 rounded-2xl p-8">
            {activeFeature === "qr-menu" && (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  QR Меню за Кафе
                </h3>
                <div className="bg-white rounded-xl p-8 max-w-2xl mx-auto">
                  <div
                    className="w-32 h-32 bg-gray-200 rounded-xl mx-auto mb-6 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors"
                    onClick={() => setMenuVisible(true)}
                  >
                    <div className="text-center">
                      <QrCode size={48} className="text-gray-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Кликни за меню</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Клиентите сканират QR кода и виждат цялото меню с кафета,
                    чайове и сладкиши
                  </p>
                </div>
              </div>
            )}

            {activeFeature === "loyalty" && (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Програма за Лоялност
                </h3>
                <div className="bg-white rounded-xl p-8 max-w-2xl mx-auto">
                  <div className="mb-6">
                    <div className="w-24 h-24 bg-purple-100 rounded-full mx-auto flex items-center justify-center mb-4">
                      <Star size={32} className="text-purple-600" />
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900 mb-2">
                        8 / 10 кафета
                      </div>
                      <div className="text-sm text-gray-600 mb-4">
                        До безплатно кафе остават 2 кафета
                      </div>
                      <div className="flex justify-center space-x-1">
                        {[...Array(10)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              i < 8 ? "bg-purple-600 text-white" : "bg-gray-200"
                            }`}
                          >
                            <Coffee size={16} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Всяко 10-то кафе е безплатно! Клиентите натрупват точки
                    автоматично
                  </p>
                </div>
              </div>
            )}

            {activeFeature === "gallery" && (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Галерия и Атмосфера
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                  {[
                    "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=300",
                    "https://images.unsplash.com/photo-1559496417-e7f25cb247cd?w=300",
                    "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300",
                    "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=300",
                  ].map((imageSrc, index) => (
                    <div
                      key={index}
                      className="relative aspect-square rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer"
                    >
                      <Image
                        src={imageSrc}
                        alt={`Cafe ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 mt-6">
                  Покажете уютната атмосфера и красивите кафета
                </p>
              </div>
            )}

            {activeFeature === "social" && (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Социални Мрежи
                </h3>
                <div className="bg-white rounded-xl p-8 max-w-2xl mx-auto">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      {
                        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=200",
                        likes: "47",
                      },
                      {
                        image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=200",
                        likes: "32",
                      },
                      {
                        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=200",
                        likes: "28",
                      },
                      {
                        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=200",
                        likes: "19",
                      },
                    ].map((post, index) => (
                      <div
                        key={index}
                        className="relative rounded-lg overflow-hidden"
                      >
                        <div className="relative h-32">
                          <Image
                            src={post.image}
                            alt={`Post ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, 25vw"
                          />
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 rounded-full px-2 py-1 flex items-center space-x-1">
                          <Heart size={12} className="text-white" />
                          <span className="text-xs text-white">
                            {post.likes}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-600">
                    Автоматично показване на клиентски снимки от Instagram
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="py-16 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Резултати от български кафенета
            </h2>
            <p className="text-xl text-amber-100">
              Реални данни от нашите клиенти
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="text-4xl font-bold mb-2">+65%</div>
              <div className="text-amber-100">Ръст на продажби</div>
              <div className="text-sm text-amber-200 mt-2">
                Средно увеличение при клиенти с QR меню
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="text-4xl font-bold mb-2">92%</div>
              <div className="text-amber-100">
                Активни в програма за лоялност
              </div>
              <div className="text-sm text-amber-200 mt-2">
                Процент клиенти използващи точките
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="text-4xl font-bold mb-2">4.8★</div>
              <div className="text-amber-100">Google Reviews рейтинг</div>
              <div className="text-sm text-amber-200 mt-2">
                Средна оценка на нашите клиенти
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Какво казват нашите клиенти
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Coffee size={20} className="text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {testimonial.cafe}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-amber-600">
                          {testimonial.increase}
                        </div>
                        <div className="text-xs text-gray-600">
                          {testimonial.metric}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Conversion Section */}
      <div className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Готови ли сте да увеличите продажбите на вашето кафене?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Присъединете се към 80+ успешни кафенета в България
          </p>

          <div className="bg-gray-800 rounded-xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Име на кафенето *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Въведете име"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Телефон *
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="+359..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Локация *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Град"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-amber-700 transition-colors">
              Поръчай сега за 249лв
            </button>
            <button className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-amber-600 hover:text-white transition-colors">
              Безплатна консултация
            </button>
          </div>
        </div>
      </div>

      {/* QR Menu Modal */}
      {menuVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-hidden">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">
                {cafeData.name} - Меню
              </h2>
              <button
                onClick={() => setMenuVisible(false)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Category Tabs */}
            <div className="flex border-b border-gray-200 overflow-x-auto">
              {Object.keys(menuCategories).map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex-none py-3 px-4 text-sm font-medium capitalize whitespace-nowrap ${
                    selectedCategory === category
                      ? "text-amber-600 border-b-2 border-amber-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Menu Items */}
            <div className="p-4 max-h-96 overflow-y-auto">
              <div className="space-y-4">
                {menuCategories[selectedCategory]?.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="relative w-16 h-16">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded-lg"
                        sizes="64px"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.name}</h3>
                      <p className="text-xs text-gray-600 mb-1">
                        {item.description}
                      </p>
                      <p className="text-amber-600 font-bold">{item.price}</p>
                    </div>
                    <button className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-amber-700 transition-colors">
                      Поръчай
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CafeTemplateDemoPage;