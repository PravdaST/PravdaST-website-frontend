import React from 'react';
import Icon from '../../../components/AppIcon';

const ProblemSolutionSection = () => {
  const problemMetrics = [
    { label: 'Загубени клиенти', value: '-60%', icon: 'TrendingDown' },
    { label: 'Онлайн видимост', value: '0%', icon: 'EyeOff' },
    { label: 'Конкурентност', value: 'Ниска', icon: 'AlertTriangle' }
  ];

  const solutionMetrics = [
    { label: 'Нови клиенти', value: '+40%', icon: 'TrendingUp' },
    { label: 'Онлайн присъствие', value: '100%', icon: 'Eye' },
    { label: 'Конкурентност', value: 'Висока', icon: 'Award' }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-red-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-text-primary mb-6">
            Вашият бизнес без сайт губи клиенти всеки ден
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Докато вашите конкуренти привличат клиенти онлайн, вие губите възможности за продажби
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Problem Card */}
          <div className="bg-white rounded-2xl shadow-elevation-2 p-8 border-l-4 border-error">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="XCircle" size={40} className="text-error" />
              </div>
              <h3 className="text-2xl font-bold text-error mb-2">
                БЕЗ САЙТ = БЕЗ КЛИЕНТИ
              </h3>
              <p className="text-text-secondary">
                Какво губите всеки ден без онлайн присъствие
              </p>
            </div>

            <div className="space-y-6">
              {problemMetrics?.map((metric, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon name={metric?.icon} size={24} className="text-error" />
                    <span className="font-medium text-text-primary">{metric?.label}</span>
                  </div>
                  <span className="text-xl font-bold text-error">{metric?.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-red-100 rounded-lg">
              <p className="text-sm text-error font-medium text-center">
                <Icon name="AlertCircle" size={16} className="inline mr-2" />
                Всеки ден без сайт = загубени 5-10 потенциални клиента
              </p>
            </div>
          </div>

          {/* Solution Card */}
          <div className="bg-white rounded-2xl shadow-elevation-2 p-8 border-l-4 border-success">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" size={40} className="text-success" />
              </div>
              <h3 className="text-2xl font-bold text-success mb-2">
                МИНИ-САЙТ = УСПЕХ
              </h3>
              <p className="text-text-secondary">
                Как нашите клиенти трансформират бизнеса си
              </p>
            </div>

            <div className="space-y-6">
              {solutionMetrics?.map((metric, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon name={metric?.icon} size={24} className="text-success" />
                    <span className="font-medium text-text-primary">{metric?.label}</span>
                  </div>
                  <span className="text-xl font-bold text-success">{metric?.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-green-100 rounded-lg">
              <p className="text-sm text-success font-medium text-center">
                <Icon name="CheckCircle" size={16} className="inline mr-2" />
                Средно 8-12 нови клиента месечно след стартиране
              </p>
            </div>
          </div>
        </div>

        {/* Transformation Arrow */}
        <div className="flex justify-center my-12">
          <div className="bg-primary text-white px-6 py-3 rounded-full font-bold text-lg shadow-elevation-2">
            <Icon name="ArrowRight" size={24} className="inline mr-2" />
            ТРАНСФОРМАЦИЯ ЗА 24 ЧАСА
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;