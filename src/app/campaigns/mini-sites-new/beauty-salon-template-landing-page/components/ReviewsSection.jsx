import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: 'Десислава Петкова',
      service: 'Боядисване и подстригване',
      rating: 5,
      date: '15 декември 2024',
      text: 'Невероятно съм доволна от резултата! Мария ме консултира много професионално и ми направи точно прическата, която исках. Салонът е много чист и модерен, атмосферата е релаксираща. Определено ще се върна отново!',
      image: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=100',
      verified: true
    },
    {
      id: 2,
      name: 'Анелия Стоянова',
      service: 'Почистване на лице',
      rating: 5,
      date: '12 декември 2024',
      text: 'Анна е изключителен козметик! Кожата ми изглежда перфектно след терапията. Използва качествени продукти и работи много внимателно. Салонът е безупречно чист и персоналът е много любезен.',
      image: 'https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=100',
      verified: true
    },
    {
      id: 3,
      name: 'Мария Димитрова',
      service: 'Маникюр с гел лак',
      rating: 5,
      date: '10 декември 2024',
      text: 'Елена е истинска художничка! Направи ми най-красивия маникюр, който съм имала. Гел лакът издържа вече 3 седмици без да се обели. Работи много прецизно и внимателно към детайлите.',
      image: 'https://images.pexels.com/photos/3985363/pexels-photo-3985363.jpeg?auto=compress&cs=tinysrgb&w=100',
      verified: true
    },
    {
      id: 4,
      name: 'Галина Иванова',
      service: 'Релаксиращ масаж',
      rating: 5,
      date: '8 декември 2024',
      text: 'Масажът беше точно това, от което се нуждаех след дългия работен ден. Масажистката беше много професионална и внимателна. Излязох от салона като нов човек - напълно отпуснат и енергичен.',
      image: 'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=100',
      verified: true
    },
    {
      id: 5,
      name: 'Цветелина Георгиева',
      service: 'Прическа за сватба',
      rating: 5,
      date: '5 декември 2024',
      text: 'Мария направи невероятна сватбена прическа! Издържа цялата нощ без да се развали. Всички гости питаха кой е направил прическата. Благодаря за перфектния ден на сватбата ми!',
      image: 'https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?auto=compress&cs=tinysrgb&w=100',
      verified: true
    },
    {
      id: 6,
      name: 'Елена Николова',
      service: 'Антицелулитен масаж',
      rating: 4,
      date: '3 декември 2024',
      text: 'Посещавам салона вече 2 месеца за антицелулитен масаж. Резултатите са видими - кожата ми е по-стегната и гладка. Масажистката е много професионална и дава полезни съвети за домашна грижа.',
      image: 'https://images.pexels.com/photos/3757953/pexels-photo-3757953.jpeg?auto=compress&cs=tinysrgb&w=100',
      verified: true
    }
  ];

  const overallStats = {
    totalReviews: 127,
    averageRating: 4.9,
    ratingDistribution: [
      { stars: 5, count: 98, percentage: 77 },
      { stars: 4, count: 23, percentage: 18 },
      { stars: 3, count: 4, percentage: 3 },
      { stars: 2, count: 2, percentage: 2 },
      { stars: 1, count: 0, percentage: 0 }
    ]
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="MessageCircle" size={16} />
            <span>Отзиви на клиенти</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Какво казват нашите клиенти
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Прочетете реалните отзиви от доволни клиенти, които са избрали нашите услуги 
            и са споделили своя опит с нас.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Overall Stats */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 sticky top-8">
              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-pink-600 mb-2">
                  {overallStats?.averageRating}
                </div>
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {[...Array(5)]?.map((_, i) => (
                    <Icon 
                      key={i}
                      name="Star" 
                      size={20} 
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 font-medium">
                  {overallStats?.totalReviews} отзива
                </p>
              </div>

              {/* Rating Distribution */}
              <div className="space-y-3">
                {overallStats?.ratingDistribution?.map((item) => (
                  <div key={item?.stars} className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1 w-12">
                      <span className="text-sm font-medium">{item?.stars}</span>
                      <Icon name="Star" size={14} className="text-yellow-400 fill-current" />
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-pink-600 h-full rounded-full transition-all duration-500"
                        style={{ width: `${item?.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 w-8">{item?.count}</span>
                  </div>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="mt-8 pt-8 border-t border-pink-200">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Shield" size={20} className="text-green-600" />
                    <span className="text-sm text-gray-700">Верифицирани отзиви</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Award" size={20} className="text-pink-600" />
                    <span className="text-sm text-gray-700">Топ оценен салон</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Users" size={20} className="text-blue-600" />
                    <span className="text-sm text-gray-700">500+ клиенти</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {reviews?.map((review) => (
                <div
                  key={review?.id}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Review Header */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="relative">
                      <Image
                        src={review?.image}
                        alt={review?.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      {review?.verified && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                          <Icon name="Check" size={12} className="text-white" />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-gray-900">{review?.name}</h4>
                        <span className="text-sm text-gray-500">{review?.date}</span>
                      </div>
                      <p className="text-sm text-pink-600 font-medium mb-2">{review?.service}</p>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)]?.map((_, i) => (
                          <Icon 
                            key={i}
                            name="Star" 
                            size={16} 
                            className={`${
                              i < review?.rating 
                                ? 'text-yellow-400 fill-current' :'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 leading-relaxed mb-4">{review?.text}</p>

                  {/* Review Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <button className="flex items-center space-x-1 hover:text-pink-600 transition-smooth">
                        <Icon name="ThumbsUp" size={16} />
                        <span>Полезно</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-pink-600 transition-smooth">
                        <Icon name="MessageCircle" size={16} />
                        <span>Отговори</span>
                      </button>
                    </div>
                    
                    {review?.verified && (
                      <div className="flex items-center space-x-1 text-green-600 text-sm">
                        <Icon name="Shield" size={16} />
                        <span>Потвърден клиент</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="px-8 py-3 border border-pink-600 text-pink-600 rounded-full font-medium hover:bg-pink-50 transition-smooth">
                Виж всички отзиви
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Станете част от нашите доволни клиенти
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Запазете час днес и се убедете защо повече от 500 клиенти са избрали нашия салон 
              за своята красота и релаксация.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-pink-600 text-white rounded-2xl font-semibold hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <Icon name="Calendar" size={20} />
                <span>ЗАПАЗИ ЧАС</span>
              </button>
              <button className="px-8 py-4 bg-white text-pink-600 rounded-2xl font-semibold border-2 border-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                <Icon name="Phone" size={20} />
                <span>ОБАДИ СЕ</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;