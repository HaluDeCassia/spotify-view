(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(46)},23:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),i=a.n(c),o=(a(23),a(10)),s=a(11),l=a(15),m=a(12),p=a(16),u=a(13),d=a.n(u),f=a(14),h=a.n(f),E=function(){return r.a.createElement("header",null,r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement("a",{href:"/",className:"brand-logo center"},r.a.createElement("i",{className:"fab fa-spotify"}),"Spotify View"))))},v=function(e){var t=e.link,a=e.name,n=e.open,c=e.img;return r.a.createElement("div",{className:"col s12 m6 l4"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image waves-effect waves-block waves-light"},r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{height:"300",width:"300",className:"activator",alt:a,src:c}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"card-title activator grey-text text-darken-4"},a)),r.a.createElement("p",null,r.a.createElement("a",{href:n},"Abrir no Spotify")))))};v.propTypes={artists:h.a.array};var w=function(e){var t=e.artists;return r.a.createElement("div",{className:"App"},r.a.createElement(E,null),r.a.createElement("main",{className:"main"},r.a.createElement("div",{className:"row container"},t.map(function(e){return r.a.createElement(v,Object.assign({key:e.id},e))}))))},g=(a(45),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={artists:[]},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://api.spotify.com/v1/artists?ids=".concat(["0TcVnvKse98awlZxtUKIOk","11irmEzISytQwB3G8uhC5E","2UhA8yc1DpFfkutXq5lMah"]),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer BQCPiAF81W5U7yGN9Rhp7N3acp7opTxYlFOMTVhlgOhKuiphwZkkp7QoXg_ZCeCczaRkvDn-ktEPy6gZXEDs95XpTUdZuj_dQjFqE54O6TcWtjCsiVaekc-dLFQaa3ViFGDEEtO_TKQAXNdrj7wCw5vF4EJ1lNRyYMtVLYVpULYcY1klQyLz-Bx2Kp2FDFK5cz0xQWg1WQSF3rPzsUHFjEec9q7BJFYCsEkMO8MRRMiCjfwXMveOpz4Vg25X29xtSf3yfQdJ7w9OfncX9tx3olswsa53-BLBoQg"}}).then(function(t){return e.setState({artists:t.data.artists.map(function(e,t){return{id:t,img:e.images[1].url,name:e.name,link:e.external_urls.spotify,open:e.uri}})}),!0}).catch(function(e){return console.log(e),!1})}},{key:"render",value:function(){return r.a.createElement(w,this.state)}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.8cb5776c.chunk.js.map