import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: 'Мария Петрова',
      rating: 5,
      text: 'Изумителна кухня! Мусаката е най-добрата, която съм яла. Атмосферата е много уютна, а персоналът - изключително любезен. Определено ще се върнем!',
      date: '15 дек 2024',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
      dishes: ['Мусака', 'Шопска салата'],
      verified: true
    },
    {
      id: 2,
      name: 'Стоян Иванов',
      rating: 5,
      text: 'Страхотно място за семейни вечери! Децата обожават пълнените чушки, а аз не мога да устоя на свинската пържола. Цените са много разумни.',
      date: '12 дек 2024',
      image: 'https://images.pexels.com/photos/1484801/pexels-photo-1484801.jpeg?auto=compress&cs=tinysrgb&w=150',
      dishes: ['Свинска пържола', 'Пълнени чушки'],
      verified: true
    },
    {
      id: 3,
      name: 'Анна Димитрова',
      rating: 5,
      text: 'Отлична българска кухня в центъра на София! QR менюто е много удобно. Препоръчвам таратора и трилецето - божествени са!',
      date: '10 дек 2024',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      dishes: ['Таратор', 'Трилеце'],
      verified: true
    },
    {
      id: 4,
      name: 'Петър Георгиев',
      rating: 4,
      text: 'Много добра храна и обслужване. Малко шумно в пиковите часове, но си заслужава. Резервирах маса онлайн - много удобно!',
      date: '8 дек 2024',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150',
      dishes: ['Лютеница с пърленка'],
      verified: true
    },
    {
      id: 5,
      name: 'Елена Стоянова',
      rating: 5,
      text: 'Бях с приятели от чужбина и те бяха впечатлени! Автентична българска атмосфера, вкусна храна и отлично обслужване. Браво!',
      date: '5 дек 2024',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150',
      dishes: ['Цялото меню'],
      verified: true
    },
    {
      id: 6,
      name: 'Николай Тодоров',
      rating: 5,
      text: 'От години идваме тук за семейни празници. Качеството се пази, а новото дигитално меню е страхотна идея. Поздравления!',
      date: '3 дек 2024',
      image: 'https://images.pexels.com/photos/1379636/pexels-photo-1379636.jpeg?auto=compress&cs=tinysrgb&w=150',
      dishes: ['Овчарска салата', 'Айрян'],
      verified: true
    }
  ];

  const stats = [
    { label: 'Общ рейтинг', value: '4.9', icon: 'Star' },
    { label: 'Общо отзива', value: '387', icon: 'MessageSquare' },
    { label: 'Препоръчват', value: '98%', icon: 'ThumbsUp' },
    { label: 'Връщат се', value: '94%', icon: 'Repeat' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Какво казват клиентите
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Над 380 автентични отзива от доволни гости
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats?.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name={stat?.icon} size={32} className="text-red-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat?.value}</div>
              <div className="text-sm text-gray-600">{stat?.label}</div>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews?.map((review) => (
            <div key={review?.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
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

              {/* Dishes Mentioned */}
              {review?.dishes && review?.dishes?.length > 0 && (
                <div className="border-t pt-4">
                  <p className="text-xs text-gray-500 mb-2">Споменати ястия:</p>
                  <div className="flex flex-wrap gap-2">
                    {review?.dishes?.map((dish, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-red-50 text-red-600 text-xs rounded-lg font-medium"
                      >
                        {dish}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-12 shadow-lg max-w-4xl mx-auto">
            <Icon name="MessageSquare" size={64} className="text-red-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Споделете вашето мнение
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Вашият отзив е важен за нас и помага на други гости да направят избор
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="px-8 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-smooth flex items-center space-x-2"
              >
                <Icon name="Facebook" size={20} />
                <span>Отзив във Facebook</span>
              </a>
              <a
                href="#"
                className="px-8 py-3 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition-smooth flex items-center space-x-2"
              >
                <Icon name="Star" size={20} />
                <span>Google Reviews</span>
              </a>
              <a
                href="#"
                className="px-8 py-3 bg-orange-500 text-white rounded-xl font-medium hover:bg-orange-600 transition-smooth flex items-center space-x-2"
              >
                <Icon name="MessageCircle" size={20} />
                <span>TripAdvisor</span>
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={16} className="text-green-500" />
                  <span>Верифицирани отзиви</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} className="text-blue-500" />
                  <span>Отговаряме в рамките на ден</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Award" size={16} className="text-yellow-500" />
                  <span>Топ 10 ресторанта в София</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;