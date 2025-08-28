import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const GallerySection = ({ onImageClick }) => {
  const galleryImages = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Нова прическа за лятото',
      description: 'Свеж летен лук с модерно подстригване и балеаж техника',
      category: 'hair',
      beforeAfter: true
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Хидратираща терапия',
      description: 'Преди и след интензивна хидратираща терапия за лице',
      category: 'cosmetics',
      beforeAfter: true
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/3997962/pexels-photo-3997962.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Френски маникюр',
      description: 'Класически френски маникюр с гел лак',
      category: 'nails',
      beforeAfter: false
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Вечерна прическа',
      description: 'Елегантна вечерна прическа за специален повод',
      category: 'hair',
      beforeAfter: false
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/3985363/pexels-photo-3985363.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Почистване на лице',
      description: 'Резултат от дълбоко почистване и детокс терапия',
      category: 'cosmetics',
      beforeAfter: true
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Релаксиращ масаж',
      description: 'Спокойна атмосфера за релаксиращ масаж',
      category: 'massage',
      beforeAfter: false
    },
    {
      id: 7,
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Цветно боядисване',
      description: 'Смела трансформация с ярки цветове',
      category: 'hair',
      beforeAfter: true
    },
    {
      id: 8,
      image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Дизайн на нокти',
      description: 'Артистичен нейл арт дизайн',
      category: 'nails',
      beforeAfter: false
    }
  ];

  const categories = [
    { id: 'all', name: 'Всички', icon: 'Grid3X3' },
    { id: 'hair', name: 'Фризьорство', icon: 'Scissors' },
    { id: 'cosmetics', name: 'Козметика', icon: 'Sparkles' },
    { id: 'nails', name: 'Маникюр', icon: 'Hand' },
    { id: 'massage', name: 'Масаж', icon: 'Waves' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Camera" size={16} />
            <span>Нашата работа</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Галерия с наши работи
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Вижте нашите най-добри трансформации и се вдъхновете за вашия нов стил. 
            Всяка снимка разказва история за красотата и професионализма.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories?.map((category) => (
            <button
              key={category?.id}
              className="flex items-center space-x-2 px-6 py-3 bg-white text-gray-700 rounded-full hover:bg-pink-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg font-medium"
            >
              <Icon name={category?.icon} size={16} />
              <span>{category?.name}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages?.map((item) => (
            <div
              key={item?.id}
              onClick={() => onImageClick(item)}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item?.image}
                  alt={item?.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Before/After Badge */}
                {item?.beforeAfter && (
                  <div className="absolute top-4 left-4 bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    Преди/След
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                  {categories?.find(cat => cat?.id === item?.category)?.name}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg mb-2">{item?.title}</h3>
                  <p className="text-white/90 text-sm mb-4">{item?.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)]?.map((_, i) => (
                        <Icon 
                          key={i}
                          name="Star" 
                          size={14} 
                          className="text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-2 text-white/80 text-sm">
                      <Icon name="Eye" size={16} />
                      <span>Разгледай</span>
                    </div>
                  </div>
                </div>

                {/* Hover Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Icon name="ZoomIn" size={24} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Искате да видите повече от нашата работа?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Icon name="Instagram" size={20} />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Icon name="Facebook" size={20} />
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;