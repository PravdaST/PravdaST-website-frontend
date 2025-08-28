import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const BusinessCategorySelector = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: 'restaurant',
      title: 'Ресторанти',
      icon: 'UtensilsCrossed',
      gradient: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400',
      description: 'Професионални менюта с QR кодове за бърза поръчка',
      features: [
        'QR меню система',
        'Онлайн резервации', 
        'Галерия с ястия',
        'Контакти и локация'
      ],
      stats: {
        clients: '150+',
        increase: '+45%',
        time: '24ч'
      },
      successStory: `"След като получихме мини-сайта, поръчките се увеличиха с 45% за първия месец. Клиентите обожават QR менюто!" - Иван Петров, Ресторант "Старата къща"`
    },
    {
      id: 'cafe',
      title: 'Кафенета',
      icon: 'Coffee',
      gradient: 'from-amber-600 to-yellow-500',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-600',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400',
      description: 'Уютна атмосфера и лесно поръчване за вашите клиенти',
      features: [
        'Дигитално меню',
        'Програма за лоялност',
        'Социални мрежи',
        'Работно време'
      ],
      stats: {
        clients: '80+',
        increase: '+38%',
        time: '24ч'
      },
      successStory: `"Младите хора харесват да сканират QR кода вместо да чакат меню. Продажбите ни се увеличиха значително!" - Мария Георгиева, Кафе "Аромат"`
    },
    {
      id: 'services',
      title: 'Услуги',
      icon: 'Wrench',
      gradient: 'from-blue-600 to-cyan-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400',
      description: 'Покажете вашите услуги и цени професионално',
      features: [
        'Каталог услуги',
        'Онлайн записване',
        'Преди/След галерия',
        'Клиентски отзиви'
      ],
      stats: {
        clients: '120+',
        increase: '+42%',
        time: '24ч'
      },
      successStory: `"Клиентите вече могат да видят всичките ни услуги и цени онлайн. Записванията се удвоиха!" - Георги Стоянов, Автосервиз "Експерт"`
    },
    {
      id: 'beauty',
      title: 'Красота',
      icon: 'Scissors',
      gradient: 'from-pink-500 to-purple-500',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400',
      description: 'Елегантно представяне на вашите козметични услуги',
      features: [
        'Портфолио работи',
        'Онлайн записване',
        'Ценоразпис услуги',
        'Екип специалисти'
      ],
      stats: {
        clients: '90+',
        increase: '+40%',
        time: '24ч'
      },
      successStory: `"Сайтът ни помогна да привлечем нови клиенти. Особено харесват галерията с нашите работи!" - Елена Димитрова, Салон "Красота"`
    }
  ];

  const handleCategoryHover = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleCategoryLeave = () => {
    setSelectedCategory(null);
  };

  const handleCategoryClick = (categoryId) => {
    if (categoryId === 'restaurant') {
      navigate('/restaurant-template-demo-page');
    }
  };

  const handleViewExamples = (categoryId, e) => {
    e?.stopPropagation();
    if (categoryId === 'restaurant') {
      navigate('/restaurant-template-demo-page');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-muted via-white to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Изберете вашия <span className="text-accent">бизнес тип</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Всеки мини-сайт е оптимизиран специално за вашата индустрия
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories?.map((category) => (
            <div
              key={category?.id}
              onMouseEnter={() => handleCategoryHover(category?.id)}
              onMouseLeave={handleCategoryLeave}
              onClick={() => handleCategoryClick(category?.id)}
              className={`group relative bg-white rounded-3xl overflow-hidden conversion-shadow hover:shadow-xl transition-all duration-500 cursor-pointer ${
                selectedCategory === category?.id ? 'scale-105 ring-2 ring-accent' : 'hover:scale-102'
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={category?.image}
                  alt={category?.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category?.gradient} opacity-80`}></div>
                
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Icon name={category?.icon} size={24} color="white" />
                </div>

                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                  <div className="text-white text-sm font-semibold">{category?.stats?.clients} клиенти</div>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{category?.title}</h3>
                  <p className="text-white/90 text-sm">{category?.description}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-3 mb-6">
                  {category?.features?.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${category?.iconColor?.replace('text-', 'bg-')}`}></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className={`text-lg font-bold ${category?.iconColor}`}>{category?.stats?.increase}</div>
                    <div className="text-xs text-muted-foreground">ръст</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-lg font-bold ${category?.iconColor}`}>{category?.stats?.time}</div>
                    <div className="text-xs text-muted-foreground">готов</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-lg font-bold ${category?.iconColor}`}>299лв</div>
                    <div className="text-xs text-muted-foreground">цена</div>
                  </div>
                </div>

                <button 
                  onClick={(e) => handleViewExamples(category?.id, e)}
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedCategory === category?.id
                      ? `bg-gradient-to-r ${category?.gradient} text-white`
                      : `${category?.bgColor} ${category?.iconColor} hover:bg-opacity-80`
                  }`}
                >
                  Виж примери
                </button>
              </div>

              <div className={`absolute inset-0 bg-white rounded-3xl transition-all duration-500 ${
                selectedCategory === category?.id 
                  ? 'opacity-100 visible translate-y-0' :'opacity-0 invisible translate-y-4 pointer-events-none'
              }`}>
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 ${category?.bgColor} rounded-xl flex items-center justify-center`}>
                      <Icon name={category?.icon} size={24} className={category?.iconColor} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{category?.title}</h3>
                      <p className="text-sm text-muted-foreground">Специализирани решения</p>
                    </div>
                  </div>

                  <div className={`${category?.bgColor} rounded-xl p-4 mb-6 flex-1`}>
                    <div className="flex items-start space-x-2 mb-3">
                      <Icon name="Quote" size={16} className={category?.iconColor} />
                      <h4 className="font-semibold text-foreground text-sm">Успешна история</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {category?.successStory}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <button className={`w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r ${category?.gradient} hover:opacity-90 transition-opacity`}>
                      Започни сега
                    </button>
                    <button 
                      onClick={(e) => handleViewExamples(category?.id, e)}
                      className={`w-full py-2 rounded-xl font-medium ${category?.iconColor} ${category?.bgColor} hover:bg-opacity-80 transition-colors`}
                    >
                      Виж демо
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 conversion-shadow max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Не виждате вашия бизнес тип?
            </h3>
            <p className="text-muted-foreground mb-6">
              Създаваме персонализирани мини-сайтове за всякакъв вид бизнес. 
              Свържете се с нас за безплатна консултация.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-accent text-accent-foreground rounded-xl font-semibold hover:bg-accent/90 transition-colors">
                Безплатна консултация
              </button>
              <button className="px-8 py-3 border border-muted-foreground text-muted-foreground rounded-xl font-semibold hover:bg-muted transition-colors">
                Вижте всички примери
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessCategorySelector;