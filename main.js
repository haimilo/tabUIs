// Bước 1 lắng nghe click lên các tabs

// Đây là kiểu viết để viết gọn cho document.querySelector
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Lấy ra các elments của tab-item
const tabs = document.querySelectorAll('.tab-item');
const panes = document.querySelectorAll('.tab-pane');

// Làm phần lines
const tabsAcitve = document.querySelector('.tab-item.active')
const line = document.querySelector('.tabs .line');
console.log([line]);

// Kiểm tra xem có lấy thành công không?
// console.log(tabs, panes);

// Lắng nghe sự kiện click lên các tabs
tabs.forEach(function (tabs, index) {
    var pane = panes[index];
    tabs.onclick = function () {
        // Kiểm tra xem có click vào đc k
        // console.log(this);
        // Kiểm tra xem tabs có tabs nào có active không?
        var checkActiveForTab =
            document.querySelector('.tab-item.active');
        // Nếu có thì remove đi
        checkActiveForTab.classList.remove('active');
        // Lặp qua phần lines
        line.style.width = tabs.offsetWidth + 'px';
        line.style.left = tabs.offsetLeft + 'px';
        // Làm tương tự với panes
        var checkActiveForPane =
            document.querySelector('.tab-pane.active')
        checkActiveForPane.classList.remove('active');
        // Sau khi click thì chuyển đổi class active lên tabs đó
        this.classList.add('active');
        pane.classList.add('active');
    };
});