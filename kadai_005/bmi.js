// 体重（kg）と身長（cm）を変数に代入
const weight = 65;   // 体重: 65kg
const height = 170;  // 身長: 170cm

// 身長をメートルに変換
const heightInMeters = height / 100;

// BMI = 体重(kg) ÷ 身長(m)²
const bmi = weight / (heightInMeters * heightInMeters);

// 結果を表示
document.write("BMI: " + bmi.toFixed(2));
