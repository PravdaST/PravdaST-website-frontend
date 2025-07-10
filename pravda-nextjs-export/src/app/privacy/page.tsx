
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Политика за поверителност - Pravda Agency',
  description: 'Политика за поверителност и защита на личните данни в Pravda Agency. GDPR съвместимост и условия за обработка на данни.',
  robots: 'noindex, follow'
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Политика за <span className="text-[#ECB628]">поверителност</span>
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="text-slate-300 space-y-8">
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Общи положения</h2>
                <p>
                  Настоящата политика за поверителност описва как Pravda Agency ЕООД събира, използва и защитава личните данни на потребителите и клиентите си в съответствие с GDPR и българското законодателство.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Събирани данни</h2>
                <p>Ние събираме следните видове данни:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Идентификационни данни:</strong> име, email, телефон</li>
                  <li><strong>Бизнес данни:</strong> компания, позиция, уебсайт</li>
                  <li><strong>Технически данни:</strong> IP адрес, браузър, устройство</li>
                  <li><strong>Данни за използването:</strong> страници, време на посещение</li>
                  <li><strong>Комуникационни данни:</strong> съобщения, разговори</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Начини на събиране</h2>
                <p>Данните се събират чрез:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Контактни форми на уебсайта</li>
                  <li>Email комуникация</li>
                  <li>Телефонни разговори</li>
                  <li>Google Analytics и Klaviyo</li>
                  <li>Cookies и подобни технологии</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Цели на обработката</h2>
                <p>Обработваме данните за:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Предоставяне на SEO и маркетингови услуги</li>
                  <li>Комуникация с клиенти и потенциални клиенти</li>
                  <li>Подобряване на нашите услуги</li>
                  <li>Маркетинг и реклама (със съгласие)</li>
                  <li>Изпълнение на законови задължения</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Правно основание</h2>
                <p>Обработваме данните на база:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Съгласие:</strong> за маркетингови съобщения</li>
                  <li><strong>Договор:</strong> за изпълнение на услуги</li>
                  <li><strong>Законен интерес:</strong> за подобряване на услугите</li>
                  <li><strong>Законно задължение:</strong> за данъчни цели</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Споделяне на данни</h2>
                <p>Данните могат да бъдат споделени с:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Доставчици на услуги:</strong> Google, Klaviyo, Vercel</li>
                  <li><strong>Правни консултанти:</strong> при необходимост</li>
                  <li><strong>Държавни органи:</strong> при законово изискване</li>
                </ul>
                <p className="mt-4">
                  Не продаваме данни на трети лица за комерсиални цели.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Съхранение на данни</h2>
                <p>
                  Данните се съхраняват докато са необходими за целите на обработката или според законовите изисквания - минимум 5 години за данъчни цели.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Вашите права</h2>
                <p>Имате право да:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Получите информация за обработката</li>
                  <li>Получите копие от данните си</li>
                  <li>Поправите неточни данни</li>
                  <li>Заличите данните си (при определени условия)</li>
                  <li>Ограничите обработката</li>
                  <li>Прехвърлите данните си</li>
                  <li>Възразите срещу обработката</li>
                  <li>Оттеглите съгласието си</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Cookies</h2>
                <p>
                  Използваме cookies за аналитика (Google Analytics), маркетинг (Klaviyo) и подобряване на потребителското изживяване. Можете да управлявате cookies от настройките на браузъра си.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Сигурност</h2>
                <p>
                  Прилагаме технически и организационни мерки за защита на данните включително криптиране, контрол на достъпа и редовни backup копия.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">11. Промени в политиката</h2>
                <p>
                  Политиката може да бъде променяна. Значими промени ще бъдат съобщени чрез email или уведомление на сайта.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">12. Контакт</h2>
                <p>
                  За въпроси относно обработката на данни се свържете с нас на:
                </p>
                <div className="bg-slate-800/50 rounded-lg border border-slate-700 p-6 mt-4">
                  <p><strong>Email:</strong> privacy@pravdagency.eu</p>
                  <p><strong>Телефон:</strong> +359 XXX XXX XXX</p>
                  <p><strong>Адрес:</strong> София, България</p>
                  <p><strong>Длъжностно лице по защита на данните:</strong> info@pravdagency.eu</p>
                </div>
              </section>

              <div className="mt-12 p-6 bg-slate-800/50 rounded-lg border border-slate-700">
                <p className="text-sm text-slate-400">
                  <strong>Последна актуализация:</strong> Януари 2025<br/>
                  Имате право да подадете жалба в Комисията за защита на личните данни (КЗЛД) ако смятате, че правата ви са нарушени.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
import type { Metadata } from 'next';
import { EnhancedSEO } from '@/components/seo/EnhancedSEO';

export const metadata: Metadata = {
  title: 'Политика за поверителност | Pravda Agency',
  description: '🔒 Политика за поверителност на Pravda Agency. Как обработваме и защитаваме вашите лични данни в съответствие с GDPR.',
  robots: 'noindex, nofollow',
};

export default function PrivacyPage() {
  return (
    <>
      <EnhancedSEO 
        title="Политика за поверителност | Pravda Agency"
        description="🔒 Политика за поверителност на Pravda Agency. Как обработваме и защитаваме вашите лични данни в съответствие с GDPR."
        canonical="https://www.pravdagency.eu/privacy/"
        robots="noindex, nofollow"
      />
      
      <div className="min-h-screen pt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto prose prose-invert">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Политика за поверителност
            </h1>
            
            <div className="text-slate-300 space-y-8 text-lg leading-relaxed">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Обща информация</h2>
                <p>
                  Pravda Agency се ангажира да защитава поверителността и сигурността на личните данни на нашите клиенти и потребители. Тази политика обяснява как събираме, използваме и защитаваме вашата информация в съответствие с Общия регламент за защита на данните (GDPR).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. Какви данни събираме</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Име и контактна информация</li>
                  <li>Имейл адрес и телефонен номер</li>
                  <li>Информация за компанията</li>
                  <li>Данни за използването на уебсайта</li>
                  <li>Cookies и технически данни</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. Как използваме данните</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>За предоставяне на нашите услуги</li>
                  <li>За комуникация с клиенти</li>
                  <li>За подобряване на нашите услуги</li>
                  <li>За маркетингови цели (с ваше съгласие)</li>
                  <li>За спазване на законови изисквания</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Споделяне на данни</h2>
                <p>
                  Не споделяме вашите лични данни с трети страни, освен когато това е необходимо за предоставяне на нашите услуги или когато сме задължени по закон.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Вашите права</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Право на достъп до вашите данни</li>
                  <li>Право на корекция на неточни данни</li>
                  <li>Право на изтриване</li>
                  <li>Право на ограничаване на обработката</li>
                  <li>Право на преносимост на данните</li>
                  <li>Право на възражение</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Сигурност на данните</h2>
                <p>
                  Прилагаме подходящи технически и организационни мерки за защита на вашите лични данни срещу неоторизиран достъп, промяна, разкриване или унищожаване.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Cookies</h2>
                <p>
                  Използваме cookies за подобряване на функционалността на нашия уебсайт и анализиране на трафика. Можете да управлявате cookie настройките във вашия браузър.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">8. Контакт</h2>
                <p>
                  За въпроси относно тази политика за поверителност, моля свържете се с нас:
                </p>
                <div className="bg-slate-800 p-4 rounded-lg mt-4">
                  <p><strong>Pravda Agency</strong></p>
                  <p>Адрес: ул. Дебър №58, Варна, България</p>
                  <p>Имейл: contact@pravdagency.eu</p>
                  <p>Телефон: +359 879 282 299</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">9. Промени в политиката</h2>
                <p>
                  Запазваме си правото да актуализираме тази политика за поверителност. Всички промени ще бъдат публикувани на тази страница.
                </p>
                <p className="text-sm text-slate-400 mt-4">
                  Последна актуализация: януари 2025
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
