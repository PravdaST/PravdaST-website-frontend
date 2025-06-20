// Опростен test script за връзка със Strapi
const STRAPI_URL = 'http://127.0.0.1:1337';
const API_TOKEN = '076d680706abf17d1baeb8c86597c6f006aa82537b94726eb219d12caa056b729554866dc5408827d6d027a8bc7330a125788f8048574eaa38daea1a586ecf5f728bb6d294509d68c26b3c8574811c7c632b32d90096d2250d55e1da7fbcb1f75f92d4ba6b07e3121078003fa7cfe982b79965ddb074c001591714ed7057ea7b';

async function testConnection() {
  console.log('Тествам връзката със Strapi...');
  
  try {
    const response = await fetch(`${STRAPI_URL}/api`, {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    console.log('Response status:', response.status);
    const data = await response.json();
    console.log('Response data:', data);
    
    if (response.status === 404) {
      console.log('✅ Strapi работи! (404 е нормално за /api endpoint)');
      return true;
    } else if (response.ok) {
      console.log('✅ Strapi работи успешно!');
      return true;
    } else {
      console.log('❌ Strapi отговори с грешка:', data);
      return false;
    }
  } catch (error) {
    console.log('❌ Не мога да се свържа със Strapi:', error.message);
    console.log('\nВъзможни причини:');
    console.log('1. Strapi не е стартиран');
    console.log('2. Работи на различен порт');
    console.log('3. Firewall блокира връзката');
    return false;
  }
}

testConnection();