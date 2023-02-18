function tinhThue() {
  var tongthunhap = document.getElementById("tongthunhap").value;
  var songuoiphuthuoc = document.getElementById("songuoiphuthuoc").value;
  var thunhapchithue = tongthunhap - 4000000 - songuoiphuthuoc * 1600000;
  var thue = 0;
  
  if (thunhapchithue <= 0) {
    thue = 0;
  } else if (thunhapchithue <= 60000000) {
    thue = thunhapchithue * 0.05;
  } else if (thunhapchithue <= 120000000 && thunhapchithue > 60000000 ) {
    thue = thunhapchithue * 0.1;
  } else if (thunhapchithue <= 210000000 && thunhapchithue > 120000000) {
    thue =  thunhapchithue * 0.15;
  } else if (thunhapchithue <= 384000000 && thunhapchithue > 210000000) {
    thue = thunhapchithue * 0.2;
  } else if (thunhapchithue <= 624000000 && thunhapchithue > 384000000) {
    thue = thunhapchithue * 0.25;
  } else if (thunhapchithue <= 960000000 && thunhapchithue > 624000000) {
    thue = thunhapchithue * 0.3;
  } else if(thunhapchithue > 960000000){
    thue = thunhapchithue * 0.35;
  }
  
  document.getElementById("ketqua").innerHTML = "Thuế thu nhập cá nhân phải trả: " + thue.toLocaleString() + " VNĐ";
}