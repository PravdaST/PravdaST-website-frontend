import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: 'Симона Христова',
      rating: 5,
      text: 'Най-доброто кафе в София! Работя тук всеки ден - отличен WiFi, уютна атмосфера и страхотно кафе. Персоналът винаги е любезен и запомнят какво пия.',
      date: '18 дек 2024',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      drinks: ['Флет уайт', 'Авокадо тост'],
      verified: true,
      workingHere: true
    },
    {
      id: 2,
      name: 'Георги Петков',
      rating: 5,
      text: 'Перфектното място за срещи с клиенти. Професионална обстановка, отличен звук за видео разговори и няма проблеми с интернета.',
      date: '16 дек 2024',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      drinks: ['Капучино класик'],
      verified: true,
      businessMeeting: true
    },
    {
      id: 3,
      name: 'Мария Иванова',
      rating: 5,
      text: 'Обожавам техния домашен чийзкейк! Идвам тук всеки уикенд с приятелките си. Теrasaтa e прекрасна през лятото.',
      date: '14 дек 2024',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      drinks: ['Чийзкейк', 'Лимонада с мента'],
      verified: true,
      weekend: true
    },
    {
      id: 4,
      name: 'Владимир Стоянов',
      rating: 4,
      text: 'Добро място за работа. Единствено понякога е малко шумно, но общо взето препоръчвам за дигитални номади.',
      date: '12 дек 2024',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150',
      drinks: ['Студено кафе'],
      verified: true,
      workingHere: true
    },
    {
      id: 5,
      name: 'Елена Димитрова',
      rating: 5,
      text: 'Страхотно обслужване и най-добрият бранч в София! Авокадо тостът е невероятен. Задължително ще се върна.',
      date: '10 дек 2024',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150',
      drinks: ['Авокадо тост', 'Капучино'],
      verified: true,
      brunch: true
    },
    {
      id: 6,
      name: 'Стефан Георгиев',
      rating: 5,
      text: 'Бърза доставка и кафето пристигна все още горещо! Много съм доволен от онлайн поръчката.',
      date: '8 дек 2024',
      image: 'https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=150',
      drinks: ['2x Капучино', 'Брауни'],
      verified: true,
      delivery: true
    }
  ];

  const stats = [
    { label: 'Google Rating', value: '4.8', icon: 'Star', color: 'text-yellow-600' },
    { label: 'Общо отзива', value: '264', icon: 'MessageSquare', color: 'text-blue-600' },
    { label: 'За работа', value: '89%', icon: 'Laptop', color: 'text-green-600' },
    { label: 'Връщат се', value: '92%', icon: 'Repeat', color: 'text-purple-600' }
  ];

  const reviewCategories = [
    { name: 'Работно място', count: 156, icon: 'Laptop', color: 'bg-blue-100 text-blue-800' },
    { name: 'Уикенд', count: 89, icon: 'Calendar', color: 'bg-green-100 text-green-800' },
    { name: 'Доставка', count: 67, icon: 'Truck', color: 'bg-orange-100 text-orange-800' },
    { name: 'Бизнес срещи', count: 43, icon: 'Briefcase', color: 'bg-purple-100 text-purple-800' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Отзиви от клиенти
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Над 260 автентични отзива от доволни посетители
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats?.map((stat, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Icon name={stat?.icon} size={32} className={stat?.color} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat?.value}</div>
              <div className="text-sm text-gray-600">{stat?.label}</div>
            </div>
          ))}
        </div>

        {/* Review Categories */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {reviewCategories?.map((category, index) => (
            <div key={index} className="text-center">
              <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${category?.color}`}>
                <Icon name={category?.icon} size={16} />
                <span className="text-sm font-medium">{category?.name}</span>
                <span className="text-xs">({category?.count})</span>
              </div>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews?.map((review) => (
            <div key={review?.id} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              {/* Header */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative">
                  <Image
                    src={review?.image}
                    alt={review?.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {review?.verified && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Icon name="Check" size={12} className="text-white" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{review?.name}</h4>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
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
                    <span className="text-sm text-gray-500">{review?.date}</span>
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                {review?.text}
              </p>

              {/* Category Badge */}
              <div className="mb-4">
                {review?.workingHere && (
                  <span className="inline-flex items-center space-x-1 px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                    <Icon name="Laptop" size={12} />
                    <span>Работно място</span>
                  </span>
                )}
                {review?.businessMeeting && (
                  <span className="inline-flex items-center space-x-1 px-3 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                    <Icon name="Briefcase" size={12} />
                    <span>Бизнес среща</span>
                  </span>
                )}
                {review?.weekend && (
                  <span className="inline-flex items-center space-x-1 px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                    <Icon name="Calendar" size={12} />
                    <span>Уикенд</span>
                  </span>
                )}
                {review?.delivery && (
                  <span className="inline-flex items-center space-x-1 px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">
                    <Icon name="Truck" size={12} />
                    <span>Доставка</span>
                  </span>
                )}
                {review?.brunch && (
                  <span className="inline-flex items-center space-x-1 px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">
                    <Icon name="Coffee" size={12} />
                    <span>Бранч</span>
                  </span>
                )}
              </div>

              {/* Drinks Mentioned */}
              {review?.drinks && review?.drinks?.length > 0 && (
                <div className="border-t pt-4">
                  <p className="text-xs text-gray-500 mb-2">Поръчани продукти:</p>
                  <div className="flex flex-wrap gap-2">
                    {review?.drinks?.map((drink, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-orange-50 text-orange-600 text-xs rounded-lg font-medium"
                      >
                        {drink}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Loyalty Program Section */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-12 text-center mb-16">
          <Icon name="Gift" size={64} className="text-orange-600 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Програма за лоялност
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Купете 9 кафета, получете 10-то безплатно!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white rounded-xl p-6">
              <Icon name="Coffee" size={32} className="text-orange-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Събирайте точки</h4>
              <p className="text-sm text-gray-600">
                1 точка за всяко купено кафе или напитка
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6">
              <Icon name="Zap" size={32} className="text-orange-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Бързо натрупване</h4>
              <p className="text-sm text-gray-600">
                Двойни точки в петък и събота
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6">
              <Icon name="Heart" size={32} className="text-orange-600 mx-auto mb-4" />
              <h4 className="font-bold text-gray-900 mb-2">Специални оферти</h4>
              <p className="text-sm text-gray-600">
                Ексклузивни отстъпки за лоялни клиенти
              </p>
            </div>
          </div>

          <button className="px-8 py-3 bg-orange-600 text-white rounded-xl font-bold hover:bg-orange-700 transition-smooth">
            Регистрирай се сега
          </button>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white border-2 border-gray-100 rounded-2xl p-12 shadow-lg max-w-4xl mx-auto">
            <Icon name="MessageSquare" size={64} className="text-orange-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Споделете вашето мнение
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Вашият отзив е важен за нас и помага на другите да открият своето място за кафе
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="px-8 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-smooth flex items-center space-x-2"
              >
                <Icon name="Star" size={20} />
                <span>Google Reviews</span>
              </a>
              <a
                href="#"
                className="px-8 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition-smooth flex items-center space-x-2"
              >
                <Icon name="Facebook" size={20} />
                <span>Facebook</span>
              </a>
              <a
                href="#"
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-smooth flex items-center space-x-2"
              >
                <Icon name="Instagram" size={20} />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;