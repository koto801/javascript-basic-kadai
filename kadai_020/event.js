// HTML要素を定数に代入
const textElement = document.getElementById('text');
const btnElement = document.getElementById('btn');

// ボタンクリック時のイベント処理
btnElement.addEventListener('click', function() {
  textElement.textContent = 'ボタンがクリックされました';
});
