// Adaptasi action form sesuai parameter MikroTik (dst/redirect); fallback ke /login
(function(){
  try {
    var params = new URLSearchParams(window.location.search);
    var form = document.getElementById('hotspotForm');
    if(!form) return;
    var dest = null;
    if(params.has('dst')) dest = params.get('dst');
    else if(params.has('redirect')) dest = params.get('redirect');
    else if(params.has('url')) dest = params.get('url');
    if(dest && typeof dest === 'string' && dest.length < 2048 && (dest.startsWith('http://') || dest.startsWith('https://'))) {
      form.action = dest;
    } else {
      form.action = '/login';
    }
  } catch(e){}

  // UX: fokus ke field pertama di mobile saat halaman tampil
  (function(){
    var u = navigator.userAgent || '';
    var isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(u);
    if(isMobile){
      var first = document.getElementById('username');
      if(first) setTimeout(function(){ try{ first.focus(); }catch(e){} },400);
    }
  })();
})();