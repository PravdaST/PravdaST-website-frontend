import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const RestaurantTemplateDemo = () => {
  const [activeTab, setActiveTab] = useState('menu');
  const [selectedCategory, setSelectedCategory] = useState('appetizers');
  const [previewMode, setPreviewMode] = useState('desktop');

  const menuCategories = [
    {
      id: 'appetizers',
      name: 'Предястия',
      icon: 'Sparkles',
      items: [
        {
          name: 'Шопска салата',
          description: 'Традиционна българска салата с домати, краставици, лук, чушки и сирене',
          price: '12.90 лв',
          image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300',
          popular: true
        },
        {
          name: 'Тарама',
          description: 'Класическа тарама с маслини и пресен хляб',
          price: '8.50 лв',
          image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=300'
        },
        {
          name: 'Мезе плато',
          description: 'Асорти от български деликатеси - луканка, сирене, маслини, лютеница',
          price: '18.90 лв',
          image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?w=300',
          recommended: true
        }
      ]
    },
    {
      id: 'mains',
      name: 'Основни ястия',
      icon: 'UtensilsCrossed',
      items: [
        {
          name: 'Свинско бонфиле',
          description: 'Пържено свинско бонфиле с гарнитура от гриловани зеленчуци',
          price: '24.90 лв',
          image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300',
          popular: true
        },
        {
          name: 'Пилешко филе',
          description: 'Мариновано пилешко филе с билки и пресни салати',
          price: '19.90 лв',
          image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300'
        },
        {
          name: 'Телешка пържола',
          description: 'Сочна телешка пържола с картофени дюни и зелена салата',
          price: '28.90 лв',
          image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300',
          recommended: true
        }
      ]
    },
    {
      id: 'desserts',
      name: 'Десерти',
      icon: 'Cookie',
      items: [
        {
          name: 'Тирамису',
          description: 'Класически италиански десерт с маскарпоне и кафе',
          price: '8.90 лв',
          image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300',
          popular: true
        },
        {
          name: 'Крем карамел',
          description: 'Домашен крем карамел с ванилия',
          price: '6.50 лв',
          image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300'
        }
      ]
    }
  ];

  const restaurantInfo = {
    name: 'Ресторант "Старата къща"',
    tagline: 'Автентична българска кухня',
    description: 'Добре дошли в най-уютното място в града, където традицията среща модерността. Нашите ястия са приготвени с любов от най-свежите съставки.',
    phone: '+359 88 123 4567',
    address: 'ул. Витоша 15, София 1000',
    workingHours: 'Всеки ден: 10:00 - 23:00',
    features: [
      { icon: 'QrCode', title: 'QR Меню', description: 'Сканирайте и поръчайте' },
      { icon: 'Calendar', title: 'Резервации', description: 'Запазете си маса онлайн' },
      { icon: 'Camera', title: 'Галерия', description: 'Разгледайте нашите ястия' },
      { icon: 'MapPin', title: 'Локация', description: 'Намерете ни лесно' }
    ]
  };

  const tabs = [
    { id: 'menu', name: 'Меню', icon: 'UtensilsCrossed' },
    { id: 'about', name: 'За нас', icon: 'Info' },
    { id: 'gallery', name: 'Галерия', icon: 'Camera' },
    { id: 'contact', name: 'Контакти', icon: 'Phone' }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400',
    'https://images.unsplash.com/photo-1559329007-40df8c867b95?w=400',
    'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=400',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400',
    'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=400'
  ];

  const renderMenuContent = () => (
    <div className="space-y-6">
      {/* Category Selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {menuCategories?.map((category) => (
          <button
            key={category?.id}
            onClick={() => setSelectedCategory(category?.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
              selectedCategory === category?.id
                ? 'bg-red-500 text-white' :'bg-red-50 text-red-600 hover:bg-red-100'
            }`}
          >
            <Icon name={category?.icon} size={16} />
            <span className="font-medium">{category?.name}</span>
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="space-y-4">
        {menuCategories?.find(cat => cat?.id === selectedCategory)?.items?.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl overflow-hidden conversion-shadow hover:shadow-lg transition-shadow">
            <div className="flex">
              <div className="w-24 h-24 flex-shrink-0">
                <Image
                  src={item?.image}
                  alt={item?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-bold text-foreground">{item?.name}</h4>
                      {item?.popular && (
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                          Популярно
                        </span>
                      )}
                      {item?.recommended && (
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                          Препоръчва се
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
                      {item?.description}
                    </p>
                  </div>
                  <div className="ml-4 text-right">
                    <div className="text-lg font-bold text-red-600">{item?.price}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAboutContent = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 conversion-shadow">
        <h3 className="text-xl font-bold text-foreground mb-4">Нашата история</h3>
        <p className="text-muted-foreground leading-relaxed mb-4">
          {restaurantInfo?.description}
        </p>
        <p className="text-muted-foreground leading-relaxed">
          С над 15 години опит в ресторантьорството, ние сме се посветили на създаването на 
          незабравими кулинарни преживявания за нашите гости. Всяко ястие е приготвено с внимание 
          към детайла и страст към българската кухня.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {restaurantInfo?.features?.map((feature, index) => (
          <div key={index} className="bg-white rounded-xl p-4 conversion-shadow text-center">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Icon name={feature?.icon} size={24} className="text-red-600" />
            </div>
            <h4 className="font-bold text-foreground mb-1">{feature?.title}</h4>
            <p className="text-sm text-muted-foreground">{feature?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderGalleryContent = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {galleryImages?.map((image, index) => (
        <div key={index} className="relative aspect-square rounded-xl overflow-hidden conversion-shadow hover:shadow-lg transition-shadow cursor-pointer group">
          <Image
            src={image}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <Icon name="Expand" size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      ))}
    </div>
  );

  const renderContactContent = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 conversion-shadow">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <Icon name="Phone" size={20} className="text-red-600" />
            </div>
            <div>
              <div className="font-medium text-foreground">Телефон</div>
              <div className="text-muted-foreground">{restaurantInfo?.phone}</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <Icon name="MapPin" size={20} className="text-red-600" />
            </div>
            <div>
              <div className="font-medium text-foreground">Адрес</div>
              <div className="text-muted-foreground">{restaurantInfo?.address}</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <Icon name="Clock" size={20} className="text-red-600" />
            </div>
            <div>
              <div className="font-medium text-foreground">Работно време</div>
              <div className="text-muted-foreground">{restaurantInfo?.workingHours}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button 
          fullWidth 
          className="bg-green-500 hover:bg-green-600 text-white font-semibold"
          iconName="Phone"
          iconPosition="left"
        >
          Обади се
        </Button>
        <Button 
          variant="outline" 
          fullWidth 
          className="border-red-500 text-red-600 hover:bg-red-50 font-semibold"
          iconName="MapPin"
          iconPosition="left"
        >
          Виж карта
        </Button>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'menu': return renderMenuContent();
      case 'about': return renderAboutContent();
      case 'gallery': return renderGalleryContent();
      case 'contact': return renderContactContent();
      default: return renderMenuContent();
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ресторантски <span className="text-red-600">темплейт</span> - Демо
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Вижте как ще изглежда вашият ресторантски мини-сайт с всички функции
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Preview Controls */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-6 conversion-shadow sticky top-8">
              <h3 className="text-lg font-bold text-foreground mb-4">Преглед настройки</h3>
              
              {/* Device Toggle */}
              <div className="mb-6">
                <div className="text-sm font-medium text-foreground mb-2">Устройство</div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setPreviewMode('desktop')}
                    className={`flex-1 p-2 rounded-lg transition-colors ${
                      previewMode === 'desktop' ? 'bg-red-500 text-white' : 'bg-red-50 text-red-600 hover:bg-red-100'
                    }`}
                  >
                    <Icon name="Monitor" size={16} className="mx-auto" />
                  </button>
                  <button
                    onClick={() => setPreviewMode('mobile')}
                    className={`flex-1 p-2 rounded-lg transition-colors ${
                      previewMode === 'mobile' ? 'bg-red-500 text-white' : 'bg-red-50 text-red-600 hover:bg-red-100'
                    }`}
                  >
                    <Icon name="Smartphone" size={16} className="mx-auto" />
                  </button>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                <div className="text-sm font-medium text-foreground mb-2">Включени функции:</div>
                {['QR Code меню система', 'Онлайн резервации', 'Галерия с ястия', 'Контактна информация', 'Мобилен дизайн', 'SEO оптимизация']?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="CheckCircle" size={16} className="text-green-500" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-6 pt-6 border-t border-muted">
                <Button 
                  fullWidth 
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold mb-3"
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  Започни сега
                </Button>
                <div className="text-center">
                  <span className="text-2xl font-bold text-red-600">299 лв</span>
                  <div className="text-xs text-muted-foreground">еднократна такса</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Preview */}
          <div className="lg:col-span-9">
            <div className={`mx-auto transition-all duration-300 ${
              previewMode === 'mobile' ? 'max-w-sm' : 'max-w-4xl'
            }`}>
              <div className="bg-white rounded-3xl overflow-hidden conversion-shadow">
                {/* Mock Device Frame */}
                <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2">
                  {previewMode === 'desktop' ? (
                    <>
                      <div className="flex space-x-1">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-muted-foreground">
                        staratakashta.mini-sites.bg
                      </div>
                    </>
                  ) : (
                    <div className="flex-1 text-center">
                      <div className="w-16 h-1 bg-gray-300 rounded-full mx-auto"></div>
                    </div>
                  )}
                </div>

                {/* Website Content */}
                <div className="bg-gradient-to-br from-red-500 to-orange-500 px-6 py-8 text-white text-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="UtensilsCrossed" size={32} color="white" />
                  </div>
                  <h1 className="text-2xl font-bold mb-2">{restaurantInfo?.name}</h1>
                  <p className="text-white/90 mb-4">{restaurantInfo?.tagline}</p>
                  
                  {/* QR Code Mockup */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-xs mx-auto">
                    <div className="w-20 h-20 bg-white rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <Icon name="QrCode" size={32} className="text-red-500" />
                    </div>
                    <div className="text-sm">Сканирайте за меню</div>
                  </div>
                </div>

                {/* Navigation Tabs */}
                <div className="bg-white border-b border-muted">
                  <div className="flex overflow-x-auto">
                    {tabs?.map((tab) => (
                      <button
                        key={tab?.id}
                        onClick={() => setActiveTab(tab?.id)}
                        className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${
                          activeTab === tab?.id
                            ? 'border-red-500 text-red-600 bg-red-50' :'border-transparent text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        <Icon name={tab?.icon} size={16} />
                        <span className="font-medium text-sm">{tab?.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tab Content */}
                <div className="p-6 bg-muted min-h-[400px]">
                  {renderTabContent()}
                </div>

                {/* Footer */}
                <div className="bg-white px-6 py-4 border-t border-muted">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Button 
                        size="sm"
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold"
                        iconName="Calendar"
                        iconPosition="left"
                      >
                        Резервация
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-red-500 text-red-600 hover:bg-red-50 font-semibold"
                        iconName="Phone"
                        iconPosition="left"
                      >
                        Обади се
                      </Button>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-foreground">{restaurantInfo?.phone}</div>
                      <div className="text-xs text-muted-foreground">10:00 - 23:00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Highlight */}
        <div className="mt-20 bg-white rounded-3xl p-8 conversion-shadow">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Всичко необходимо за вашия ресторант
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Нашият ресторантски темплейт включва всички функции, които са нужни за успешен онлайн бизнес
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'QrCode',
                title: 'QR Меню система',
                description: 'Клиентите сканират QR код и виждат менюто директно на телефона си'
              },
              {
                icon: 'Calendar',
                title: 'Онлайн резервации',
                description: 'Лесна система за резервация на маси директно от сайта'
              },
              {
                icon: 'Camera',
                title: 'Галерия с ястия',
                description: 'Покажете най-добрите си ястия с професионални снимки'
              },
              {
                icon: 'Smartphone',
                title: 'Мобилен дизайн',
                description: 'Перфектен изглед на всички устройства - телефон, таблет, компютър'
              }
            ]?.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature?.icon} size={32} className="text-red-600" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{feature?.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature?.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white font-bold px-12 mr-4"
              iconName="ArrowRight"
              iconPosition="right"
            >
              Създай мой ресторантски сайт
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-red-500 text-red-600 hover:bg-red-50 font-semibold px-8"
              iconName="Eye"
              iconPosition="left"
            >
              Виж други темплейти
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantTemplateDemo;