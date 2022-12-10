
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        var hostname = window.location.hostname;
        //////

        const cookies = document.cookie.split('; '); // 배열로 반환
        const expiration = 'Sat, 01 Jan 1972 00:00:00 GMT';

        // 반목문 순회하면서 쿠키 전체 삭제
        if (document.cookie) {
            for (i = 0; i < cookies.length; i++) {
                document.cookie = cookies[i].split('=')[0] + '=; expires=' + expiration + "; domain=." + hostname;
            }
            
        }
        ///////

        var date = new Date();
	    date.setTime(date.getTime() + 10*24*60*60*1000);
        document.cookie = 'igneous' + '=' + '' + ';expires=' + date.toUTCString() + '; domain=.' + hostname + '; path=/';
        document.cookie = 'ipb_member_id' + '=' + '' + ';expires=' + date.toUTCString() + '; domain=.' + hostname + '; path=/';
        document.cookie = 'ipb_pass_hash' + '=' + '' + ';expires=' + date.toUTCString() + '; domain=.' + hostname + '; path=/';

        window.location.reload();

        sendResponse({ farewell: "goodbye" });
    }
);