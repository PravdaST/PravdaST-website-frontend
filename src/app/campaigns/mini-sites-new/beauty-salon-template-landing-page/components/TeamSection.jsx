import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Мария Петрова',
      role: 'Главен фризьор',
      specialties: ['Подстригване', 'Боядисване', 'Прически'],
      experience: '8 години опит',
      image: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      description: 'Мария е сертифициран фризьор с международни курсове в Париж и Милано.',
      certifications: ['L\'Oréal Professional', 'Wella Professionals', 'Schwarzkopf'],
      social: {
        instagram: '@maria_stylist_bg',
        phone: '+359888123456'
      }
    },
    {
      id: 2,
      name: 'Анна Иванова',
      role: 'Козметик',
      specialties: ['Почистване на лице', 'Антиейдж терапия', 'Хидратация'],
      experience: '6 години опит',
      image: 'https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      description: 'Анна специализира в коректирането на проблемна кожа и антиейдж терапии.',
      certifications: ['CIDESCO', 'Dermalogica', 'Babor'],
      social: {
        instagram: '@anna_beauty_expert',
        phone: '+359888234567'
      }
    },
    {
      id: 3,
      name: 'Елена Георгиева',
      role: 'Нейл техник',
      specialties: ['Маникюр', 'Педикюр', 'Нейл арт'],
      experience: '4 години опит',
      image: 'https://images.pexels.com/photos/3985363/pexels-photo-3985363.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      description: 'Елена е експерт в най-новите техники за дизайн на нокти и дълготрайни покрития.',
      certifications: ['OPI Certified', 'Gelish Pro', 'Young Nails'],
      social: {
        instagram: '@elena_nails_art',
        phone: '+359888345678'
      }
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Users" size={16} />
            <span>Нашия екип</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Запознайте се с експертите
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Нашият екип от професионалисти с международни сертификати и 
            многогодишен опит ще се погрижи за вашата красота.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers?.map((member) => (
            <div
              key={member?.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Member Photo */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member?.image}
                  alt={member?.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay with Social Links */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Social Links */}
                <div className="absolute bottom-6 left-6 right-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <a
                        href={`https://instagram.com/${member?.social?.instagram?.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition-colors duration-300"
                      >
                        <Icon name="Instagram" size={18} />
                      </a>
                      <a
                        href={`tel:${member?.social?.phone}`}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition-colors duration-300"
                      >
                        <Icon name="Phone" size={18} />
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                      <span className="text-white font-medium">{member?.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Experience Badge */}
                <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {member?.experience}
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member?.name}</h3>
                <p className="text-pink-600 font-medium mb-3">{member?.role}</p>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member?.description}</p>

                {/* Specialties */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Специализации:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member?.specialties?.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded-full font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Сертификати:</h4>
                  <div className="space-y-1">
                    {member?.certifications?.map((cert, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Award" size={14} className="text-pink-600" />
                        <span className="text-xs text-gray-600">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 px-4 py-2 bg-pink-600 text-white rounded-lg font-medium hover:bg-pink-700 transition-smooth text-sm flex items-center justify-center space-x-2">
                    <Icon name="Calendar" size={16} />
                    <span>Запази час</span>
                  </button>
                  <button className="px-4 py-2 border border-pink-600 text-pink-600 rounded-lg font-medium hover:bg-pink-50 transition-smooth text-sm">
                    <Icon name="MessageCircle" size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-pink-600 mb-2">3</div>
                <div className="text-gray-600 font-medium">Експерта</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-pink-600 mb-2">15+</div>
                <div className="text-gray-600 font-medium">Сертификата</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-pink-600 mb-2">500+</div>
                <div className="text-gray-600 font-medium">Доволни клиенти</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-pink-600 mb-2">4.9</div>
                <div className="text-gray-600 font-medium">Средна оценка</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;