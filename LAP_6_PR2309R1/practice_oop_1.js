/**
 * Hãy tạo một lớp `Rectangle` gồm có:
 * - Thuộc tính: chiều dài, chiều rộng hình chữ nhật
 * - Constructor nhận vào các thông tin khởi tạo thuộc tính
 * - Phương thức tính diện tích, chu vi
 * - Phương thức showInfo() log ra các thông tin dài, rộng,
 * diện tích, chu vi
 * 
 * Tạo ra các object hình chữ nhật từ Class Rectangle và
 * in ra thông tin của các object vừa tạo
 */

class Rectangle {
    constructor(chieuDai, chieuRong){
        this.chieuDai = chieuDai;
        this.chieuRong = chieuRong;
    }
    chuVi(){
        return this.chieuDai * this.chieuRong;
    }
    dienTich(){
        return 2 * (this.chieuDai * this.chieuRong);
    }
    showInfo(){
        console.log(`
            Chiều dài HCN là: ${this.chieuDai}
            Chiều rộng HCN là: ${this.chieuRong}
            Chu vi HCN là: ${this.chuVi()}
            Diện tích HCN là: ${this.dienTich()}
        `);
    }
}

let result = new Rectangle(30, 50);
result.showInfo();