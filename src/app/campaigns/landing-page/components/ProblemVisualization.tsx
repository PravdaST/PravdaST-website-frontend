"use client";

import React from 'react';
import { TrendingDown, Clock, Users, AlertTriangle } from 'lucide-react';

const ProblemVisualization = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Проблемът с традиционните менюта
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            В днешно време клиентите очакват бърз и лесен начин за поръчване. 
            Старите методи ви струват пари всеки ден.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Problems */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-red-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Бавно обслужване
                </h3>
                <p className="text-gray-600">
                  Клиентите чакат по 10-15 минути само за да получат меню и да направят поръчка.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-red-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Загубени продажби
                </h3>
                <p className="text-gray-600">
                  40% от клиентите си тръгват без да поръчат заради бавното обслужване.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-red-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Презатоварен персонал
                </h3>
                <p className="text-gray-600">
                  Сервитьорите прекарват повече време в обяснения отколкото в продажби.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Грешки в поръчките
                </h3>
                <p className="text-gray-600">
                  Човешката грешка води до неправилни поръчки и недоволни клиенти.
                </p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="text-center">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="text-6xl mb-4">😞</div>
              <div className="text-red-600 font-bold text-2xl mb-4">
                -40% продажби
              </div>
              <p className="text-gray-600">
                без дигитално меню решение
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemVisualization;