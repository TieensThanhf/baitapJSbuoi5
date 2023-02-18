var tinhTienBtn = document.getElementById('tinh-tien-btn');
var ketQuaDiv = document.getElementById('ket-qua');

tinhTienBtn.addEventListener('click', function() {
  var maKh = document.getElementById('ma-kh').value;
  var loaiKh = document.getElementById('loai-kh').value;
  var soKetNoi = document.getElementById('so-ket-noi').value ? parseInt(document.getElementById('so-ket-noi').value) : 0;
  var soKenhCaoCap = parseInt(document.getElementById('so-kenh-cao-cap').value);
  var phiXuLyHoaDon = 0;
  var phiDichVuCoBan = 0;
  var tienThueKenhCaoCap = 0;
  var tongTien = 0;
  
  if (loaiKh === 'nha-dan') {
    phiXuLyHoaDon = 4.5;
    phiDichVuCoBan = 20.5;
    tienThueKenhCaoCap = soKenhCaoCap * 7.5;
  } else {
    phiXuLyHoaDon = 15;
    phiDichVuCoBan = soKetNoi < 10 ? soKetNoi * 7.5 : 75 + (soKetNoi - 10) * 13;
    tienThueKenhCaoCap = soKenhCaoCap * 50;
  }
  
  tongTien = phiXuLyHoaDon + phiDichVuCoBan + tienThueKenhCaoCap;
  
  ketQuaDiv.innerHTML = "Mã khách hàng: " + maKh + "<br>Loại khách hàng: " + (loaiKh === 'nha-dan' ? 'Nhà dân' : 'Doanh nghiệp') + "<br>Số kết nối: " + soKetNoi + "<br>Số kênh cao cấp: " + soKenhCaoCap + "<br>Tổng tiền: " + tongTien.toFixed(2) + "$";
});
