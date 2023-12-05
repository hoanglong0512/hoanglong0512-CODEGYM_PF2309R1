$(function () {
    $.validator.setDefaults({
      submitHandler: function () {
        let user_id = document.getElementById("user_id").value;
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        addUser(user_id, name, email, password);
      }
    });
    $('#quickForm').validate({
      rules: {
        user_id: {
          required: true,
        },
        name: {
          required: true,
        },
        email: {
          required: true,
          email: true,
        },
        password: {
          required: true,
          minlength: 5
        },
      },
      messages: {
        user_id: {
          required: "Vui lòng nhập ID nhân viên",
        },
        name: {
          required: "Vui lòng nhập tên nhân viên",
        },
        email: {
          required: "Vui lòng nhận email",
          email: "Vui lòng nhập đúng định dạng email"
        },
        password: {
          required: "Vui lòng nhập mật khẩu",
          minlength: "Mật khẩu nhập lớn hơn 5 kí tự"
        },
      },
      errorElement: 'span',
      errorPlacement: function (error, element) {
        error.addClass('invalid-feedback');
        element.closest('.form-group').append(error);
      },
      highlight: function (element, errorClass, validClass) {
        $(element).addClass('is-invalid');
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
      }
    });
});

class user {
  constructor(user_id , name, email, password, created_at) {
    this.user_id = user_id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.created_at = created_at;
  }

  checkId() {
    let result = true;
    for (let i in userArray) {
      // kiểm tra email
      let user = userArray[i];
      if (user.user_id == this.user_id) {
        result = false;
        break;
      }
    }
    return result;
  }

  checkEmail() {
    let result = true;
    for (let i in userArray) {
      // kiểm tra email
      let user = userArray[i];
      if (user.email == this.email) {
        result = false;
        break;
      }
    }
    return result;
  }
}

let userArray = [];

function addUser(user_id, name, email, password) {
  // thoi gian tao nhan vien
  let currentDate = new Date();
  let created_at = formatDateVN(currentDate);
  // create new User to array
  let newUser = new user(user_id, name, email, password, created_at);

  if (newUser.checkEmail() && newUser.checkId()) {
    userArray.push(newUser);

    // thong bao
    Toast.fire({
      icon: 'success',
      title: 'Tạo nhân viên thành công!'
    });

    // cập nhập bảng
    updateUserTable(userArray);
  } else {
    Toast.fire({
      icon: 'warning',
      title: `Email ${email} hoặc ID ${user_id} đã tồn tại!`
    });
  }
}

function updateUser() {
  let user_id = document.getElementById("user_id").value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  for (let i in userArray) {
      let user = userArray[i];
      if (user.user_id == user_id) {
          user.name = name;
          user.email = email;
          user.password = password;
          // thong bao
          Toast.fire({
            icon: 'success',
            title: 'Sửa nhân viên thành công!'
          });

          // cập nhập bảng
          updateUserTable(userArray);
          break;
      }
  }
}

function removeUser(index) {
  if(confirm("Bạn có chắc chắn xóa nhân viên không?") == true){
    // xóa nhân viên
    userArray.splice(index, 1);

    // thông báo
    Toast.fire({
      icon: 'success',
      title: 'Xóa nhân viên thành công!'
    });

    // cập nhập bảng
    updateUserTable(userArray);
  }else{
    Toast.fire({
      icon: 'error',
      title: 'Xóa nhân viên không thành công.'
    });
  }
}

// update user table based on data array
function updateUserTable(data) {
  // delete old tbody
  $("#body-user-table").empty();

  // Get the tbody
  let tbody = document.getElementById('body-user-table');

  // add data row
  for (let i in data) {
      let user = data[i];
      newRowElem = document.createElement("tr");
      let infor1 = document.createElement("td");
      let infor2 = document.createElement("td");
      let infor3 = document.createElement("td");
      let infor4 = document.createElement("td");
      let infor5 = document.createElement("td");

      infor1.innerText = user.user_id;
      infor2.innerText = user.name;
      infor3.innerText = user.email;
      infor4.innerText = user.created_at;
      infor5.innerHTML = `<a href="javascript:;" onclick="removeUser('${i}')" title="Xóa nhân viên" class="ml-1 text-danger"><i class="fa fa-trash-alt"></i></a>`;

      newRowElem.appendChild(infor1);
      newRowElem.appendChild(infor2);
      newRowElem.appendChild(infor3);
      newRowElem.appendChild(infor4);
      newRowElem.appendChild(infor5);

      // append row to table
      tbody.appendChild(newRowElem);
  }
}

function searchUser() {
  let searchID = document.getElementById("table_search").value;
  let content = document.getElementById("content-search");

  for (let i in userArray) {
      let user = userArray[i];
      if (user.user_id == searchID) {
          $('#modal-default').modal('show');
          content.innerHTML = `<div class="card-body">
          <dl class="row">
          <dt class="col-sm-4">ID nhân viên</dt>
          <dd class="col-sm-8">${user.user_id}</dd>
          <dt class="col-sm-4">Tên nhân viên</dt>
          <dd class="col-sm-8">${user.name}</dd>
          <dt class="col-sm-4">Email</dt>
          <dd class="col-sm-8">${user.email}</dd>
          <dt class="col-sm-4">Ngày tạo</dt>
          <dd class="col-sm-8">${user.created_at}</dd>
          </dl>
          </div>`
          break;
      }
  }
}

function formatDateVN(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}