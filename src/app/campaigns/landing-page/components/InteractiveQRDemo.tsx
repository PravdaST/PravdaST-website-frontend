"use client";

import React, { useState } from 'react';
import { QrCode, Smartphone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InteractiveQRDemo = () => {
  const [isScanned, setIsScanned] = useState(false);

  return (
    <section id="demo" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Вижте как работи QR менюто
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Интерактивна демонстрация на възможностите на дигиталното меню
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* QR Code Demo */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-8 rounded-3xl shadow-xl">
              <div className="bg-white p-8 rounded-2xl mb-6">
                <div 
                  className="w-48 h-48 mx-auto bg-gray-900 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105"
                  onClick={() => setIsScanned(!isScanned)}
                >
                  <QrCode className="w-32 h-32 text-white" />
                </div>
              </div>
              
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">QR Код за меню</h3>
                <p className="text-white/90">Кликнете за да "сканирате"</p>
              </div>
            </div>
          </div>

          {/* Mobile Preview */}
          <div className="text-center">
            <div className="inline-block">
              <div className="bg-gray-900 p-2 rounded-3xl shadow-2xl">
                <div className="bg-white rounded-2xl p-6 w-80 h-96 overflow-hidden">
                  {!isScanned ? (
                    <div className="flex flex-col items-center justify-center h-full">
                      <Smartphone className="w-16 h-16 text-gray-400 mb-4" />
                      <p className="text-gray-500 text-center">
                        Сканирайте QR кода за да видите менюто
                      </p>
                    </div>
                  ) : (
                    <div className="h-full">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-gray-900">
                          Ресторант "Вкус"
                        </h3>
                        <span className="text-yellow-500 text-sm font-medium">
                          ⭐ 4.8
                        </span>
                      </div>

                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <div>
                            <h4 className="font-semibold text-gray-900">Пица Маргарита</h4>
                            <p className="text-sm text-gray-600">Моцарела, домати, босилек</p>
                          </div>
                          <span className="font-bold text-yellow-600">18лв</span>
                        </div>

                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <div>
                            <h4 className="font-semibold text-gray-900">Салата Цезар</h4>
                            <p className="text-sm text-gray-600">Пилешко, пармезан, сос</p>
                          </div>
                          <span className="font-bold text-yellow-600">16лв</span>
                        </div>

                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <div>
                            <h4 className="font-semibold text-gray-900">Паста Карбонара</h4>
                            <p className="text-sm text-gray-600">Бекон, яйце, сирене</p>
                          </div>
                          <span className="font-bold text-yellow-600">22лв</span>
                        </div>
                      </div>

                      <div className="mt-6">
                        <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                          Поръчай сега
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Row */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Мгновено</h3>
            <p className="text-gray-600">Клиентите виждат менюто за 3 секунди</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Мобилно</h3>
            <p className="text-gray-600">Работи на всеки телефон без приложения</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💫</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Впечатляващо</h3>
            <p className="text-gray-600">Модерен и професионален изглед</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveQRDemo;