
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Общи условия - Pravda Agency',
  description: 'Общи условия за ползване на услугите на Pravda Agency. Условия за SEO, продажбени и клиентски системи.',
  robots: 'noindex, follow'
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Общи <span className="text-[#ECB628]">условия</span>
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="text-slate-300 space-y-8">
              
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Общи положения</h2>
                <p>
                  Настоящите общи условия регулират отношенията между Pravda Agency ЕООД и клиентите при предоставяне на SEO услуги, продажбени системи и клиентски решения.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Услуги</h2>
                <p>
                  Pravda Agency предоставя следните услуги:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>SEO Struktor™ - инженерни SEO системи</li>
                  <li>Clientomat - автоматизирани продажбени системи</li>
                  <li>Trendlab - анализ на пазарни тенденции</li>
                  <li>Консултантски услуги по дигитален маркетинг</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Задължения на клиента</h2>
                <p>Клиентът се задължава да:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Предостави точна и пълна информация</li>
                  <li>Заплати договорените суми в срок</li>
                  <li>Следва препоръките на Pravda Agency</li>
                  <li>Информира за промени в бизнеса си</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Задължения на Pravda Agency</h2>
                <p>Pravda Agency се задължава да:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Предостави качествени услуги според договорените условия</li>
                  <li>Спазва конфиденциалността на клиентската информация</li>
                  <li>Предоставя редовни отчети за напредъка</li>
                  <li>Консултира клиента при възникнали въпроси</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Плащания и такси</h2>
                <p>
                  Всички цени са в български левове с включен ДДС. Плащанията се извършват авансово или според договорения график. При забавяне на плащането се начисляват лихви според ЗЗД.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Гаранции и отговорност</h2>
                <p>
                  Pravda Agency гарантира качеството на процесите, но не може да гарантира конкретни резултати поради зависимостта от външни фактори. Отговорността се ограничава до стойността на платените суми.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Прекратяване на договора</h2>
                <p>
                  Договорът може да бъде прекратен от всяка от страните с 30-дневно предизвестие. При едностранно прекратяване от страна на клиента, заплатените суми не се възстановяват.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Конфиденциалност</h2>
                <p>
                  Pravda Agency се задължава да пази в тайна цялата информация, получена от клиента, и да не я разкрива на трети лица без писмено съгласие.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Спорове</h2>
                <p>
                  Всички спорове се решават чрез преговори. При невъзможност за споразумение, спорът се решава от компетентния български съд.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Приложимо право</h2>
                <p>
                  Настоящите условия се регулират от българското законодателство. Промени в условията влизат в сила след публикуване на сайта.
                </p>
              </section>

              <div className="mt-12 p-6 bg-slate-800/50 rounded-lg border border-slate-700">
                <p className="text-sm text-slate-400">
                  <strong>Последна актуализация:</strong> Януари 2025<br/>
                  <strong>Контакт:</strong> info@pravdagency.eu<br/>
                  <strong>Адрес:</strong> София, България
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
  title: 'Общи условия | Pravda Agency',
  description: '📋 Общи условия за ползване на услугите на Pravda Agency. Правила и условия за партньорство и сътрудничество.',
  robots: 'noindex, nofollow',
};

export default function TermsPage() {
  return (
    <>
      <EnhancedSEO 
        title="Общи условия | Pravda Agency"
        description="📋 Общи условия за ползване на услугите на Pravda Agency. Правила и условия за партньорство и сътрудничество."
        canonical="https://www.pravdagency.eu/terms/"
        robots="noindex, nofollow"
      />
      
      <div className="min-h-screen pt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto prose prose-invert">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Общи условия
            </h1>
            
            <div className="text-slate-300 space-y-8 text-lg leading-relaxed">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Обща информация</h2>
                <p>
                  Тези общи условия регулират ползването на услугите, предоставяни от Pravda Agency. С използването на нашите услуги вие се съгласявате с тези условия.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. Услуги</h2>
                <p>
                  Pravda Agency предоставя професионални дигитални маркетинг услуги, включително:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>SEO оптимизация и консултиране</li>
                  <li>Разработка на маркетингови стратегии</li>
                  <li>Дигитален маркетинг и реклама</li>
                  <li>Анализ и отчетност</li>
                  <li>Консултиране по бизнес развитие</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. Договорни условия</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Всички услуги се предоставят въз основа на писмен договор</li>
                  <li>Сроковете за изпълнение се определят индивидуално</li>
                  <li>Плащанията се извършват според договорените условия</li>
                  <li>Промени в обхвата на работа се съгласуват допълнително</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Задължения на клиента</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Предоставяне на необходимата информация и материали</li>
                  <li>Своевременно плащане на договорените суми</li>
                  <li>Сътрудничество в процеса на изпълнение</li>
                  <li>Спазване на авторските права и законите</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Задължения на агенцията</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Професионално изпълнение на услугите</li>
                  <li>Спазване на договорените срокове</li>
                  <li>Поддържане на конфиденциалност</li>
                  <li>Редовна комуникация и отчетност</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Интелектуална собственост</h2>
                <p>
                  Всички материали, създадени в рамките на проекта, са собственост на клиента след пълното заплащане на договорената сума, освен ако не е договорено друго.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Отговорност</h2>
                <p>
                  Pravda Agency не носи отговорност за:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Промени в алгоритмите на търсачките</li>
                  <li>Действия на трети страни</li>
                  <li>Технически проблеми извън нашия контрол</li>
                  <li>Загуби, произтичащи от неспазване на нашите препоръки</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">8. Прекратяване</h2>
                <p>
                  Договорът може да бъде прекратен от всяка страна с писмено уведомление съгласно договорените условия.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">9. Приложимо право</h2>
                <p>
                  Тези условия се регулират от българското законодателство. Всички спорове се решават в компетентните български съдилища.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">10. Контакт</h2>
                <div className="bg-slate-800 p-4 rounded-lg">
                  <p><strong>Pravda Agency</strong></p>
                  <p>Адрес: ул. Дебър №58, Варна, България</p>
                  <p>Имейл: contact@pravdagency.eu</p>
                  <p>Телефон: +359 879 282 299</p>
                </div>
              </section>

              <section>
                <p className="text-sm text-slate-400 mt-8">
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
