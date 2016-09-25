Registry.require(["crcrc","helper"],function(){var l=Registry.get("helper"),x=Registry.get("crcrc").cr,g=Registry.get("crcrc").crc,c={};Registry.register("layout/default/tabview","5260",{create:function(p,m,f){var a=l.filter(p,/[0-9a-zA-Z]/g);p=!1;void 0==f&&(f={tv:"tv",tv_table:"tv_table",tr_tabs:"tr_tabs",tr_content:"tr_content",td_content:"td_content",td_tabs:"td_tabs",tv_tabs_fill:"tv_tabs_fill",tv_tabs_table:"tv_tabs_table",tv_tabs_align:"tv_tabs_align",tv_contents:"tv_contents",
tv_tab_selected:"tv_tab tv_selected",tv_tab_close:"tv_tab_close",tv_tab:"tv_tab",tv_content:"tv_content"});var y=g("div",f.tv,"main"+a),u=g("table",f.tv_table+" noborder","main_table"+a);u.inserted?p=!0:(c[a]={},c[a].g_entries={},c[a].g_selectedId=null);var z=g("tr",f.tr_tabs,"tabs"+m.id+a),A=g("td",f.td_tabs,"pages"+a),B=g("div",f.tv_tabs_fill,"tv_tabs_fill"+a),C=g("div",f.tv_tabs_table,"tv_tabs_table"+a),q=g("div",f.tv_tabs_align,"tv_tabs_align"+a),D=g("tr",f.tr_content,"content"+m.id+a),E=g("td",
f.td_content,"content"+a),F=g("div",f.tv_contents,"tv_content"+a);C.appendChild(q);B.appendChild(C);A.appendChild(B);z.appendChild(A);u.appendChild(z);E.appendChild(F);D.appendChild(E);u.appendChild(D);y.appendChild(u);m.appendChild(y);var G=function(a,c,b){c?a.setAttribute("style",b?l.staticVars.visible_move:l.staticVars.visible):a.setAttribute("style",b?l.staticVars.invisible_move:l.staticVars.invisible);a.setAttribute("vis",c.toString())},H=function(d,e){var b=d.getId();c[a].g_entries[b]&&e!=c[a].g_entries[b].visible&&
(c[a].g_entries[b].visible=e,G(c[a].g_entries[b].tab,e))},v=function(a,c){a&&G(a.content,c,!1)},J=function(d){for(var e=Object.keys(c[a].g_entries),b,h=0;b=e[h];h++)if(b=c[a].g_entries[b],b.tab.id==d.id)return b;return null},w=function(d){if(null===d)return null;for(var e=Object.keys(c[a].g_entries),b,h=0;b=e[h];h++)if(b=c[a].g_entries[b],b.entry.getId()==d)return b.entry;return null},K=function(d){if(d.getId()!=c[a].g_selectedId){var e=d.getId();c[a].g_selectedId&&v(c[a].g_entries[c[a].g_selectedId],
!1);Object.keys(c[a].g_entries).forEach(function(b){b=c[a].g_entries[b];b.entry.getId()==e?b.visible?b.selected||(b.tab.setAttribute("class",f.tv_tab_selected),v(b,!0),b.selected=!0):console.log("tv: WARN: tab selected but not visible!"):b.selected&&(b.tab.setAttribute("class",f.tv_tab),v(b,!1),b.selected=!1)});c[a].g_selectedId=e}},I=function(d){d.hide();d=d.getId();if(d=c[a].g_entries[d]){d.tab.parentNode.removeChild(d.tab);d.content.parentNode.removeChild(d.content);a:{d=d.tab;for(var e=Object.keys(c[a].g_entries),
b,h=0;b=e[h];h++)if(c[a].g_entries[b].tab.id==d.id){d=b;break a}d=null}d&&delete c[a].g_entries[d]}else console.log("tv: WARN: tab not part of tabview!")};m=null;p?m=c[a].tv:(m={getTabById:w,getSelectedTab:function(){return w(c[a].g_selectedId)},getNextTab:function(d){var e=$(q).find("div[tvid]"),b;c[a].g_selectedId&&e.each(function(d,f){b||$(f).attr("tvid")===c[a].g_selectedId&&(b=$(e.get(d+1)).attr("tvid"))});return w(b||e.first().attr("tvid"))},getPreviousTab:function(d){var e=$(q).find("div[tvid]"),
b;c[a].g_selectedId&&e.each(function(d,f){b||$(f).attr("tvid")===c[a].g_selectedId&&(b=$(e.get(d-1)).attr("tvid"))});return w(b||e.last().attr("tvid"))},removeTab:I,appendTab:function(a,c,b,f,g){return this.insertTab(void 0,a,c,b,f,g)},insertTab:function(d,e,b,h,m,l){null===d&&(d=q.firstChild);var n="tab_"+e,k=x("div",n,"content"+a),r=void 0!==k.inserted&&1==k.inserted,p=x("div",n,"head_text"+a);b.appendChild(p);l&&(n=g("div",f.tv_tab_close,n,"tv_close"+a,"tab_close"),n.inserted||n.addEventListener("click",
function(){l()}),n.innerHTML="&#215;",b.appendChild(n));if(r){if(r=J(k))return r.entry;console.log("tv: WARN: old tab, but not in tabs collection!")}var t,r=function(a){""!=a.target.className&&a.target.className==f.tv_tab_close||t.select()};k.setAttribute("tvid",e);k.addEventListener("click",r);b.addEventListener("click",r);k.setAttribute("name","tabview_tab"+a);k.setAttribute("class",f.tv_tab);k.appendChild(b);d?q.insertBefore(k,d):q.appendChild(k);h.setAttribute("name","tabview_content"+a);h.setAttribute("class",
f.tv_content);F.appendChild(h);t={getId:function(){return e},isVisible:function(){return"true"==k.getAttribute("vis")},isSelected:function(){return c[a].g_selectedId==this.getId()},remove:function(){I(this)},hide:function(){var b=this.getId(),d=b==c[a].g_selectedId;c[a].g_entries[b]?H(this,!1):console.log("tv: WARN: tab not part of tabview!");if(d){var d=b=null,e;for(e in c[a].g_entries)c[a].g_entries[e].visible&&(b=c[a].g_entries[e],d||b.closable||(d=b));b.closable||(b=d);b?b.entry.select():(c[a].g_selectedId=
null,console.log("tv: WARN: selected tab set, but entry collection empty!"))}},show:function(){var b=this.getId();c[a].g_entries[b]?H(this,!0):console.log("tv: WARN: tab not part of tabview!")},select:function(){K(this);m&&m()},setHeading:function(a){b.firstChild.textContent=a},close:function(){l&&l()}};c[a].g_entries[e]={entry:t,tab:k,content:h,closable:null!=l};v(c[a].g_entries[e],!1);t.show();return t}},c[a].tv=m);return m}})});
