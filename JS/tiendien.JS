function calculate() {
    var name = document.getElementById('name').value;
    var kw = parseInt(document.getElementById('kw').value);
    var total = 0;
  
    if (kw <= 50) {
      total = kw * 500;
    } else if (kw <= 100) {
      total = 50 * 500 + (kw - 50) * 650;
    } else if (kw <= 150) {
      total = 50 * 500 + 50 * 650 + (kw - 100) * 850;
    } else {
      total = 50 * 500 + 50 * 650 + 50 * 850 + (kw - 150) * 1000;
    }
    
    document.getElementById('result').innerHTML = "Họ tên: " + name + " <br> Số KW tiêu thụ: " + kw + " <br> Tổng tiền: " + total.toLocaleString() + " VNĐ";
  }