Registry.require(["promise","helper","asker"],function(){var f=Registry.get("promise"),h=Registry.get("helper"),k=Registry.get("asker"),c=!1,b=null,g=function(){var a=f(),b=function(){c?window.setTimeout(b,50):a.resolve()};b();return a.promise()},d={permContentSettings:"contentSettings",permDownloads:"downloads",clear:function(){c&&console.log("perm: clear, but locked");b=null},get:function(){var a=f();b={};c=!0;rea.permissions.getAll(function(e){h.each(e.permissions,function(a,e){b[a]=!0});c=!1;
a.resolve()});return a.promise()},has:function(a){return g().then(function(){return b?!!b[a]:d.get().then(function(){return d.has(a)})})},ask:function(a,e,c){var d=f();rea.permissions.supported?k.askForPermission(a,e,c).done(function(c){c.granted&&(b||(b={}),b[a]=!0);d.resolve(c.granted)}):d.resolve(!1);return d.promise()},remove:function(a){return g().then(function(){var e=f();rea.permissions.supported?(c=!0,rea.permissions.remove({permissions:[a]},function(d){c=!1;b&&(b[a]=!1);e.resolve(d)})):e.resolve(!0);
return e.promise()})}};Registry.register("permission","5260",d)});
