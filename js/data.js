
// datatable score board
$(document).ready( function () {
  $('#score-board').DataTable({
    "processing": true,
    "responsive": true,
    "deferRender": true,
    "ajax": {
      "url": "http://5bb8ef65b6ed2c0014d47508.mockapi.io/Ok/tennis",
      "dataSrc": ""
    },
    "columns": [
      { 
        "data": "rank",
        "render": function(data, type, row) {
          return (
            `${row.rank}`
          );
        },
      },
      { 
        "data": "name",
        "render": function(data, type, row) {
          return (
            `<a title="Nhấp để xem chi tiết" href="chi-tiet-thanh-vien.html">
              <img src=${row.avatar}/> ${row.name}
            </a>`
          );
        },
      },
      { 
        "data": "score",
        "render": function(data, type, row) {
          return (
            `${row.score}`
          );
        },
      },
      { 
        "data": "money",
        "render": function(data, type, row) {
          return (
            `${row.money}`
          );
        },
      },
      { 
        "data": "winLost",
        "render": function(data, type, row) {
          return (
            `${row.win} / ${row.lose}`
          );
        },
      },
      { 
        "data": "count",
        "render": function(data, type, row) {
          return (
            `${row.count}`
          );
        },
      },

    ],
    "language": {
      "processing": "Đang tải",
      "lengthMenu": "Hiển thị _MENU_ thành viên",
      "emptyTable":     "Không có dữ liệu nào trong bảng",
      "loadingRecords": "Đang tải...",
      "zeroRecords": "Không có thành viên nào được tìm thấy",
      "info": "Hiển thị _START_ đến _END_ trong _TOTAL_ thành viên",
      "infoEmpty": "Không có thành viên nào có sẵn",
      "infoFiltered": "(Lọc từ _MAX_ thành viên)",
      "search": "Tìm kiếm:",
      "paginate": {
          "first":      "Đầu",
          "last":       "Cuối",
          "next":       "Sau",
          "previous":   "Trước"
      },
    },
    "order": [[ 0, "asc" ]],
    "pagingType": "full_numbers",
    "lengthMenu": [[25, 50, 100, -1], [25, 50, 100, "Tất cả"]]
  });
});
//end


// datatable member
$(document).ready( function () {
  $('#member').DataTable({
    "processing": true,
    "responsive": true,
    "ajax": {
      "url": "http://5bb8ef65b6ed2c0014d47508.mockapi.io/Ok/member",
      "dataSrc": ""
    },
    "columns": [
      { 
        "data": "name",
        "render": function(data, type, row) {
          return (
            `<a title="Nhấp để xem chi tiết" href="chi-tiet-thanh-vien.html">
              <img src=${row.avatar}/> ${row.name}
            </a>`
          );
        },
      },
      { 
        "data": "gender",
        "render": function(data, type, row) {
          return (
            `${row.gender}`
          );
        },
      },
      { 
        "data": "birthday",
        "render": function(data, type, row) {
          return (
            `${row.birthday}`
          );
        },
      },
      { 
        "data": "rank",
        "render": function(data, type, row) {
          return (
            `${row.rank}`
          );
        },
      },
      { 
        "data": "date",
        "render": function(data, type, row) {
          return (
            `${row.date}`
          );
        },
      },
      { 
        "data": "count",
        "render": function(data, type, row) {
          return (
            `${row.count}`
          );
        },
      },

    ],
    "language": {
      "processing": "Đang tải",
      "lengthMenu": "Hiển thị _MENU_ thành viên",
      "emptyTable":     "Không có dữ liệu nào trong bảng",
      "loadingRecords": "Đang tải...",
      "zeroRecords": "Không có thành viên nào được tìm thấy",
      "info": "Hiển thị _START_ đến _END_ trong _TOTAL_ thành viên",
      "infoEmpty": "Không có thành viên nào có sẵn",
      "infoFiltered": "(Lọc từ _MAX_ thành viên)",
      "search": "Tìm kiếm:",
      "paginate": {
          "first":      "Đầu",
          "last":       "Cuối",
          "next":       "Sau",
          "previous":   "Trước"
      },
    },
    "order": [[ 0, "asc" ]],
    "pagingType": "full_numbers",
    "lengthMenu": [[25, 50, 100, -1], [25, 50, 100, "Tất cả"]]
  });
});
//end
