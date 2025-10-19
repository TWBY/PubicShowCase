import './Component/Header.js';
import './Component/Card.js';

console.log('使用本地作品集資料：portfolio.json');

// 從本地 JSON 檔案載入作品集資料
fetch('./portfolio.json')
  .then(response => {
    if (!response.ok) throw new Error('無法載入作品集檔案');
    return response.json();
  })
  .then(items => {
    if (!Array.isArray(items)) {
      document.getElementById('api-data').textContent = '資料格式錯誤';
      return;
    }
    const container = document.getElementById('api-data');
    container.innerHTML = '';
    items.forEach((item, index) => {
      const card = document.createElement('gallery-card');
      card.setAttribute('index', (index + 1).toString());
      card.setAttribute('name', item.name);
      card.setAttribute('brief', item.brief);
      card.setAttribute('link', item.link);
      container.appendChild(card);
    });
  })
  .catch(error => {
    document.getElementById('api-data').textContent = '載入失敗: ' + error.message;
  });

