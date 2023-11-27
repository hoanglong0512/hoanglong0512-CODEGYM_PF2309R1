/**
 * Sở giao thông cần theo dõi việc đăng ký xe của người dân.
 * Dựa vào dung tích xylanh của xe, sở giao thông sẽ tính
 * mức thuế phải đóng trước bạ khi mua xe như sau:
 * 
 * - Dưới 100cc, 1% giá trị của xe
 * - Từ 100 đến 200 cc, 3% giá trị của xe
 * - Trên 20cc, 5% giá trị của xe
 * 
 * Hãy thiết kế class `Vehicle` với các thông tin như sau:
 * - Thuộc tính: tên chủ xe, loại xe, dung tích, trị giá
 * - Constructor khởi tạo các thuộc tính thông qua params
 * - Hàm tính giá trị thuế trước bạ dựa vào dung tích xylanh
 * - Hàm showInfo in ra các thông tin của xe: tên chủ xe,
 * loại xe, dung tích, trị giá, thuế phải nộp
 * 
 * Khởi tạo các đối tượng Vehicle và in ra các thông tin
 * tương ứng của các đội tượng được khởi tạo
 */

class Vehicle {
    constructor(chuXe, loaiXe, dungTich, triGia) {
        this.chuXe = chuXe;
        this.loaiXe = loaiXe;
        this.dungTich = dungTich;
        this.triGia = triGia;
    }
    tinhThue() {
        if (this.dungTich < 100) {
            return 0.01 * this.triGia;
        } else if (this.dungTich > 200) {
            return 0.05 * this.triGia;
        } else {
            return 0.03 * this.triGia;
        }
    }

    showInfo() {
        var thue = this.tinhThue();
        console.log(`
        Chủ xe: ${this.chuXe}
        Loại xe: ${this.loaiXe}
        Dung tích: ${this.dungTich} cc
        Trị giá: ${this.triGia} VNĐ
        Thuế: ${thue} VNĐ
        `);
    }
}

var Vehicle1 = new Vehicle('Nuyễn Văn A', 'Cup', 50, 15000000);
var Vehicle2 = new Vehicle('Nguyễn Văn B', 'Wave A', 110, 20000000);

Vehicle1.showInfo();
Vehicle2.showInfo();