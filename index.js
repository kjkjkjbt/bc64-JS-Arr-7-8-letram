// ---------bài tập ARRAY- js BUỔI 7+8---------------

/* Cho người dùng nhập vào các số nguyên và lưu trữ trong mảng.
Thiết kế layout cho người dùng chọn thực hiện các chức năng bên dưới:
1. Tổng các số dương trong mảng.
2. Đếm có bao nhiêu số dương trong mảng.*/

// ------------------------------------

document.getElementById('btn1').onclick=
function sumPositive() {
    var input = document.getElementById("soDuong").value;
    var arr = input.split(",");
    var sum = 0;
    var count = 0;
    var min = Number.MAX_SAFE_INTEGER;
    var minPositive = Number.MAX_SAFE_INTEGER;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += parseInt(arr[i]);
        count++;
        if (arr[i] < minPositive) {
          minPositive = arr[i];
        }
      }
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    document.getElementById("kq1").innerHTML = "Tổng các số dương trong mảng là: " + sum + "<br>Số lượng số dương trong mảng là: " + count + "<br>Số nhỏ nhất trong mảng là: " + min + "<br>Số dương nhỏ nhất trong mảng là: " + minPositive;
  }

  if (lastEven == -1) {
    kq1 += "<br>Mảng không có giá trị chẵn.";
  } else {
    kq1 += "<br>Số chẵn cuối cùng trong mảng là: " + lastEven;
  }
  kq1 += "<br>Tổng các số dương trong mảng: "
  + sum;
  kq1 += "<br>Số lượng số dương trong mảng: " + count;
  kq1 += "<br>Số nguyên lớn nhất trong mảng: " + max
  + "<br>Số nguyên nhỏ nhất trong mảng: " + min;
 
  
  // document.getElementById ('swap1').onclick = function() {
  //   var swap1 = prompt("Nhập vào vị trí thứ nhất muốn đổi chỗ giá trị:");
  //   var swap2 = prompt("Nhập vào vị trí thứ hai muốn đổi chỗ giá trị:");
  //   if (swap1 >= 0 && swap1 < arr.length && swap2 >= 0 && swap2 < arr.length) {
  //     var temp = arr[swap1];
  //     arr[swap1] = arr[swap2];
  //     arr[swap2] = temp;
  //     arr.sort(function(a, b){return a - b});
  //     document.getElementById("result").innerHTML += "<br>Mảng sau khi đổi chỗ 2 giá trị theo vị trí và sắp xếp tăng dần: " + arr;
  //   }
  // }
  
//   document.getElementById("btn2").innerHTML = result;
//   function swapArrayElements(arr, index1, index2) {
//     [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
//     return arr;
// }

// var arr = getValueUser ();

// console.log(`Original array: ${arr}`);
// console.log(`Swapping elements at index ${index1} and ${index2}...`);
// console.log(`New array: ${swapArrayElements(arr, index1, index2)}`);

document.getElementById('btn2').onclick= function() {
  const arr = getValueUser ()
  // arr[0] arr[2]
  var soA = document.getElementById('swap1').value * 1;
  var soB = document.getElementById('swap2').value * 1;
  var swap = arr[soA];
  arr[soA] = arr[soB]; // arr[2] = arr[5]
  arr[soB] = swap;
  // hoán đổi 2 số do nguoi dung nhap
}


document.getElementById('result').innerHTML='đổi chỗ 2 giá trị trong mảng '+ swap ;




KiemTraSNT(int n),
{
    if (n < 2)
        return false;
    for (int i = 2; i <= sqrt(n); i++)
        if (n % i == 0)
            return false;
    return true;
}

int SNTDauTien(int a[], int n)
{
    for (int i = 0; i < n; i++)
        if (KiemTraSNT(a[i]))
            return a[i];
    return -1;
}

int main()
{
    int a[] = { 4, 6, 8, 9, 10, 11, 12 };
    int n = sizeof(a) / sizeof(a[0]);
    int snt = SNTDauTien(a, n);
    if (snt == -1)
        cout << "Khong co so nguyen to trong mang" << endl;
    else
        cout << "So nguyen to dau tien trong mang la: " << snt << endl;
    return 0;
}