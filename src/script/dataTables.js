if($.fn.dataTable) {
	$.extend($.fn.dataTable.defaults, {
		dom: "<'row'<'col-sm-10'tr>><'row'<'col-sm-4'i><'col-sm-6'p>>",
		renderer: 'bootstrap',
		ordering: false,
		searching: false,
		bLengthChange: false,
		language: {
			"sProcessing": "处理中...",
			"sLengthMenu": "每页 _MENU_ 项记录",
			"sZeroRecords": "没有记录",
			"sInfo": "第 _START_ 至 _END_ 项记录，共 _TOTAL_ 项",
			"sInfoEmpty": "显示第 0 至 0 项记录，共 0 项",
			"sInfoFiltered": "(由 _MAX_ 项记录过滤)",
			"sInfoPostFix": "",
			"sSearch": "搜索:",
			"sUrl": "",
			"sEmptyTable": "暂无数据",
			"sLoadingRecords": "载入中...",
			"sInfoThousands": ",",
			"oPaginate": {
				"sFirst": "首页",
				"sPrevious": "上页",
				"sNext": "下页",
				"sLast": "末页"
			},
			"oAria": {
				"sSortAscending": ": 以升序排列此列",
				"sSortDescending": ": 以降序排列此列"
			}
		}
	});
}

dataTables =  {
	details: function(element) {
		var $element = $(element);
		var $details = $('.detail-container', $element);
		$.each($details, function(index) {
			var $this = $(this);
			var $button = $('.buttons', $this).mouseover(function() {
				$detailBox.show();
			}).mouseout(function() {
				$detailBox.hide();
			});
			var $detailBox = $('.detail-box', $this);
		});
		$element.dataTable();
	}
}