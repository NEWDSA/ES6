var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange=state_Change;
xmlhttp.open('GET','baidu.com',ture); //默认是异步
xmlhttp.send(null);

function state_change(){
    /**
     * 0:请求未初始化，还没有调用 open()。
     * 1:请求已经建立，但是还没有方送，还没有调用 send()。
     * 2:请求已发送，正在处理中(通常现在可以从响应中获取内容)。
     * 3:请求在处理中；通常响应中已有部分数据可用了，没有全部完成
     * 4:响应已完成；您可以获取并使用服务器的响应了.
     */
    if(xmlhttp.readyState ==4){
        if(xmlhttp.status==200){
            // do something ...
        }else{
            alert('Problem retrieving XML data')
        }
    }
    if(xmlhttp.readyState ==2){
        if(xmlhttp.status==200){
            // do something ...
        }else{
            alert('Problem retrieving XML data')
        }
    }
}