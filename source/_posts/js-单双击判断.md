---
    title: 单双击判断
    date: 2017-09-03 20:33:39
    tags: js
---
**单双击区别**
```bash
var flag = true;
var	first = 0;
var f_value='';
var second = 0;
var s_value='';
myChart.on('click', function (params) {
	isclick(params);
});
function isclick(p){
	var date = new Date();
	var pa_name=p.name;
	var one = date.getTime();
	if(flag){
		first = one;
		f_value=pa_name;
		flag = false;
	} else {
		second = one;
		s_value=pa_name;
		flag = false;
	}
	var end = 0 ;
	if(second > first){
		end = second - first ;
		if(end < 500  && (f_value==s_value)){//双击
			var param={
				  		code:p.data.code,
				  		name:p.data.name,
				  		value:p.data.value
				  }
			var result_indate=getfdate();
			mui.openWindow({url:'dspzPage.jhtml?IsRefresh=false&token='+initialData.token+'&clientflag='+initialData.clientflag+'&openid='+initialData.openid+'&rowid='+param.code+'&ftdate='+initialData.ftdate+'&indate='+result_indate+'&c_date=1&c_type=1&datarowname='+param.name+'&provence='});

		}else{
			first=one;
			f_value=pa_name;
			second='';
			s_value='';
			return;
		}
	}
}
```