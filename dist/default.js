/* Simple Analytics - Privacy friend analytics (docs.simpleanalytics.com/script) */

!function(s){if(s){var r,n,e="https://",c=e+"api.simpleanalytics.io/post",t=s.console;try{function h(e){t&&t.warn&&t.warn("Simple Analytics: "+e)}var u,l=s.navigator,p=s.location,d=s.document,f=l.userAgent,a=s.dispatchEvent,m="Not sending requests ",i=d.querySelector('script[src="https://cdn.simpleanalytics.io/hello.js"]'),v=i?i.getAttribute("data-mode"):null;if(-1<f.search(/(bot|spider|crawl)/gi))return h(m+"because user agent is a robot");function o(e){var t=p.protocol+"//"+p.hostname+p.pathname;if("hash"===v&&p.hash&&(t+=p.hash.split("?")[0]),u!==t){if(u=t,"visibilityState"in d&&"prerender"===d.visibilityState)return h(m+"when prerender");if("doNotTrack"in l&&"1"===l.doNotTrack)return h(m+"when doNotTrack is enabled");if("localhost"===p.hostname||"file:"===p.protocol)return h(m+"from localhost");var r=p.search.match(/[?&](utm_source|source|ref)=([^?&]+)/gi),n=r?r.map(function(e){return e.split("=")[1]}):[],a={url:t};f&&(a.ua=f),n&&n[0]&&(a.urlReferrer=n[0]),d.referrer&&!e&&(a.referrer=d.referrer),s.innerWidth&&(a.width=s.innerWidth);try{a.timezone=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(o){}var i=new XMLHttpRequest;i.open("POST",c,!0),i.setRequestHeader("Content-Type","text/plain; charset=UTF-8"),i.send(JSON.stringify(a))}}var g=s.history;if((g?g.pushState:null)&&Event&&a){g.pushState=(n=g[r="pushState"],function(){var e=n.apply(this,arguments),t=new Event(r);return t.arguments=arguments,a(t),e}),s.addEventListener("pushState",function(){o(!0)})}"hash"===v&&"onhashchange"in s&&(s.onhashchange=function(){o(!0)}),o()}catch(w){t&&t.error&&t.error(w);var y=c+".gif";w&&w.message&&(y=y+"?error="+encodeURIComponent(w.message)),(new Image).src=y}}}(window);