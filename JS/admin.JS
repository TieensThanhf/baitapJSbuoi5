function kiemTra() {
    var diem_mon1 = parseFloat(document.getElementById("diem_mon1").value);
    var diem_mon2 = parseFloat(document.getElementById("diem_mon2").value);
    var diem_mon3 = parseFloat(document.getElementById("diem_mon3").value);
    var khu_vuc = document.getElementById("khu_vuc").value;
    var doi_tuong = parseInt(document.getElementById("doi_tuong").value);
    var diem_uu_tien = 0;
    if (khu_vuc == "A") {
        diem_uu_tien += 2;
    } else if (khu_vuc == "B") {
        diem_uu_tien += 1;
    } else if (khu_vuc == "C") {
        diem_uu_tien += 0.5;
    }
    if (doi_tuong == 1) {
        diem_uu_tien += 2.5;
    } else if (doi_tuong == 2 ) {
        diem_uu_tien += 1.5;
    } else if(doi_tuong == 3){
        diem_uu_tien += 1;
    }
    var tong_diem = diem_mon1 + diem_mon2 + diem_mon3 + diem_uu_tien;
    if (tong_diem >= 15 && diem_mon1 >= 1 && diem_mon2 >= 1 && diem_mon3 >= 1) {
        document.getElementById("ket_qua").innerHTML = "Chúc mừng, bạn đã trúng tuyển với tổng điểm là " + tong_diem.toFixed(2);
    } else {
        document.getElementById("ket_qua").innerHTML = "Rất tiếc, bạn không trúng tuyển";
    }
}