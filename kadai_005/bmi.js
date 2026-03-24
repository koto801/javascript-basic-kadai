function calculateBMI() {
  // 入力値を変数に代入
  const weight = parseFloat(document.getElementById("weight").value); // 体重 (kg)
  const height = parseFloat(document.getElementById("height").value); // 身長 (cm)

  // 入力チェック
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("体重と身長を正しく入力してください");
    return;
  }

  // 身長をメートルに変換
  const heightInMeters = height / 100;

  // BMI（体格指数）を計算して変数に代入
  // BMI = 体重(kg) ÷ 身長(m)²
  const bmi = weight / (heightInMeters * heightInMeters);

  // BMI判定
  let category;
  if (bmi < 18.5) {
    category = "低体重（痩せ型）";
  } else if (bmi < 25) {
    category = "普通体重（標準）";
  } else if (bmi < 30) {
    category = "肥満（1度）";
  } else {
    category = "肥満（2度以上）";
  }

  // バーの幅を計算（BMI 10〜40 の範囲を 0〜100% にマッピング）
  const barPercent = Math.min(Math.max((bmi - 10) / 30 * 100, 0), 100);

  // 結果を画面に表示
  document.getElementById("bmiValue").textContent = bmi.toFixed(2);
  document.getElementById("bmiCategory").textContent = category;
  document.getElementById("barFill").style.width = barPercent + "%";
  document.getElementById("detail").innerHTML =
    "体重: <span>" + weight + " kg</span> &nbsp;／&nbsp; 身長: <span>" + height + " cm</span>";

  // 結果エリアを表示
  const resultEl = document.getElementById("result");
  resultEl.classList.remove("show");
  void resultEl.offsetWidth; // アニメーションリセット
  resultEl.classList.add("show");

  // コンソールにも出力
  console.log("体重: " + weight + "kg");
  console.log("身長: " + height + "cm");
  console.log("BMI: " + bmi.toFixed(2) + "（" + category + "）");
}
