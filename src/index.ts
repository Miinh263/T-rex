import "../src/css/index.css";
const dino = document.getElementById("dino");
function jump() {
  if (dino.classList.toString != jump) {
    // thêm một class cho dino là jump
    dino.classList.add("jump");
    //hàm setTimeout chỉ định thực thi một hàm sau một khoảng thời gian nhất định
    setTimeout(function () {
      // xóa class jump từ dino
      dino.classList.remove("jump");
    }, 300);
  }
}
document.addEventListener("keydown", function (event) {
  jump();
});
