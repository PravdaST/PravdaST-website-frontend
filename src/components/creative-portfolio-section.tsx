"use client";

import { useState } from "react";
import { Play, Eye, TrendingUp } from "lucide-react";

// Portfolio/Gallery Section for showing creative works
export function CreativePortfolioSection() {
  const portfolioItems = [
    {
      id: 1,
      title: "E-commerce UGC Campaign",
      category: "UGC Videos",
      description: "Серия от автентични видеа с клиенти",
      results: "+340% конверсия",
      image: "/public-objects/portfolio/ugc-campaign-1.jpg", // Will use object storage
      type: "video"
    },
    {
      id: 2, 
      title: "Fashion Brand Carousel",
      category: "Карусели",
      description: "Интерактивен carousel за модна марка",
      results: "+250% engagement",
      image: "/public-objects/portfolio/carousel-fashion.jpg",
      type: "carousel"
    },
    {
      id: 3,
      title: "Restaurant Social Media",
      category: "Video Content", 
      description: "Апетитни видеа за ресторант",
      results: "+180% повече резервации",
      image: "/public-objects/portfolio/restaurant-video.jpg",
      type: "video"
    },
    {
      id: 4,
      title: "Beauty Transformation",
      category: "UGC Videos",
      description: "Преди/след трансформации",
      results: "+420% продажби",
      image: "/public-objects/portfolio/beauty-transformation.jpg",
      type: "video"
    },
    {
      id: 5,
      title: "Tech Product Launch",
      category: "Карусели",
      description: "Образователен carousel за нов продукт",
      results: "+300% click-rate",
      image: "/public-objects/portfolio/tech-carousel.jpg",
      type: "carousel"
    },
    {
      id: 6,
      title: "Fitness Motivation",
      category: "Video Content",
      description: "Мотивационни видеа за фитнес",
      results: "+200% членства",
      image: "/public-objects/portfolio/fitness-content.jpg",
      type: "video"
    }
  ];

  const categories = ["Всички", "UGC Videos", "Карусели", "Video Content"];
  const [selectedCategory, setSelectedCategory] = useState("Всички");

  const filteredItems = selectedCategory === "Всички" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-green-400/20 rounded-3xl blur-2xl"></div>
            <h2 className="relative text-3xl md:text-5xl font-bold text-gray-900 px-8 py-4">
              Нашите{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
                Реални Резултати
              </span>
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12">
            Вижте как създаваме креативи, които генерират милиони лева продажби за нашите клиенти. 
            Всеки проект е базиран на данни и психология на потребителите.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-yellow-400 to-green-400 text-black shadow-lg"
                    : "bg-white text-gray-600 hover:text-gray-900 hover:shadow-md border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              {/* Image/Video Preview */}
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Play Button for Videos */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                      <Play size={24} className="text-white ml-1" />
                    </div>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  {item.category}
                </div>

                {/* Results Badge */}
                <div className="absolute top-4 right-4 bg-green-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-bold">
                  {item.results}
                </div>

                {/* Placeholder for actual image */}
                <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl mb-2">
                      {item.type === "video" ? "🎥" : "🎨"}
                    </div>
                    <div className="text-sm opacity-80">Качете изображение тук</div>
                    <div className="text-xs opacity-60 mt-1">Използвайте Object Storage панела</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-green-600">
                    <TrendingUp size={16} className="mr-2" />
                    <span className="text-sm font-semibold">{item.results}</span>
                  </div>
                  <button className="text-yellow-600 hover:text-yellow-700 font-medium text-sm flex items-center">
                    Виж повече
                    <Eye size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-yellow-50 via-white to-green-50 rounded-3xl p-12 border border-yellow-200">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Готови за Подобни Резултати?
          </h3>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Всеки от тези креативи е създаден с нашата доказана методология. 
            Получете своя персонализиран план за креативи, които ще работят точно за вашия бизнес.
          </p>
          <button 
            onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-yellow-400 to-green-400 text-black font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105"
          >
            Искам Моите Креативи Сега
          </button>
        </div>
      </div>
    </section>
  );
}