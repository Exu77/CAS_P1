!function(){var l=Handlebars.template,a=Handlebars.templates=Handlebars.templates||{};a.detail=l({compiler:[7,">= 4.0.0"],main:function(l,a,t,e,n){var s,o=null!=a?a:l.nullContext||{},i=t.helperMissing,r=l.escapeExpression;return'<div class="pair">\r\n    <div class="label">Titel</div>\r\n    <input class="input detail-title" type="text" value="'+r((s=null!=(s=t.title||(null!=a?a.title:a))?s:i,"function"==typeof s?s.call(o,{name:"title",hash:{},data:n}):s))+'">\r\n</div>\r\n\r\n<div class="pair">\r\n    <div class="label">Beschreibung</div>\r\n    <textarea class="input detail-content">'+r((s=null!=(s=t.content||(null!=a?a.content:a))?s:i,"function"==typeof s?s.call(o,{name:"content",hash:{},data:n}):s))+'</textarea>\r\n</div>\r\n\r\n<div class="pair">\r\n    <div class="label">Wichtigkeit</div>\r\n    <div class="detail-importance">\r\n        <i class="fa fa-bolt bolt" aria-hidden="true" onclick="setBoltClass(\'active\', 0)"\r\n           onmouseover="setBoltClass(\'hover\', 0)" onmouseleave="setBoltClass(\'hover\', -1)"></i>\r\n        <i class="fa fa-bolt bolt"a ria-hidden="true" onclick="setBoltClass(\'active\', 1)"\r\n           onmouseover="setBoltClass(\'hover\', 1)" onmouseleave="setBoltClass(\'hover\', -1)"></i>\r\n        <i class="fa fa-bolt bolt" aria-hidden="true" onclick="setBoltClass(\'active\', 2)"\r\n           onmouseover="setBoltClass(\'hover\', 2)" onmouseleave="setBoltClass(\'hover\', -1)"></i>\r\n        <i class="fa fa-bolt bolt" aria-hidden="true" onclick="setBoltClass(\'active\', 3)"\r\n           onmouseover="setBoltClass(\'hover\', 3)" onmouseleave="setBoltClass(\'hover\', -1)"></i>\r\n        <i class="fa fa-bolt bolt" aria-hidden="true" onclick="setBoltClass(\'active\', 4)"\r\n           onmouseover="setBoltClass(\'hover\', 4)" onmouseleave="setBoltClass(\'hover\', -1)"></i>\r\n    </div>\r\n</div>\r\n\r\n<div class="pair">\r\n    <div class="label">Erledigt bis</div>\r\n    <input class="input detail-target-date" type="date" value="'+r((s=null!=(s=t.targetDate||(null!=a?a.targetDate:a))?s:i,"function"==typeof s?s.call(o,{name:"targetDate",hash:{},data:n}):s))+'">\r\n</div>'},useData:!0}),a.list=l({1:function(l,a,t,e,n){var s,o,i=null!=a?a:l.nullContext||{},r=t.helperMissing,c="function",d=l.escapeExpression;return'<table id="'+d((o=null!=(o=t.id||(null!=a?a.id:a))?o:r,typeof o===c?o.call(i,{name:"id",hash:{},data:n}):o))+'" class="list-entry-tab">\r\n        <tr>\r\n            <td class="col1">\r\n                <div>'+d((t.fromNow||a&&a.fromNow||r).call(i,null!=a?a.targetDate:a,{name:"fromNow",hash:{},data:n}))+'</div>\r\n            </td>\r\n            <td class="col2">\r\n                <div class="title-importance">\r\n                    <div>'+d((o=null!=(o=t.title||(null!=a?a.title:a))?o:r,typeof o===c?o.call(i,{name:"title",hash:{},data:n}):o))+'</div>\r\n                    <div class="importance">\r\n                        <i class="fa fa-bolt bolt '+d((t.getBoltClass||a&&a.getBoltClass||r).call(i,null!=a?a.importance:a,0,{name:"getBoltClass",hash:{},data:n}))+'"></i>\r\n                        <i class="fa fa-bolt bolt '+d((t.getBoltClass||a&&a.getBoltClass||r).call(i,null!=a?a.importance:a,1,{name:"getBoltClass",hash:{},data:n}))+'"></i>\r\n                        <i class="fa fa-bolt bolt '+d((t.getBoltClass||a&&a.getBoltClass||r).call(i,null!=a?a.importance:a,2,{name:"getBoltClass",hash:{},data:n}))+'"></i>\r\n                        <i class="fa fa-bolt bolt '+d((t.getBoltClass||a&&a.getBoltClass||r).call(i,null!=a?a.importance:a,3,{name:"getBoltClass",hash:{},data:n}))+'"></i>\r\n                        <i class="fa fa-bolt bolt '+d((t.getBoltClass||a&&a.getBoltClass||r).call(i,null!=a?a.importance:a,4,{name:"getBoltClass",hash:{},data:n}))+'"></i>\r\n                    </div>\r\n                </div>\r\n            </td>\r\n            <td  class="col3" rowspan="2">\r\n                <button onclick="modifyNote(\''+d((o=null!=(o=t.id||(null!=a?a.id:a))?o:r,typeof o===c?o.call(i,{name:"id",hash:{},data:n}):o))+'\')">Bearbeiten</button>\r\n            </td>\r\n        </tr>\r\n        <tr class="col1">\r\n            <td>\r\n                <div>\r\n                    <input id="finCheck" onchange="setFinished(\''+d((o=null!=(o=t.id||(null!=a?a.id:a))?o:r,typeof o===c?o.call(i,{name:"id",hash:{},data:n}):o))+'\')" type="checkbox" '+(null!=(s=t.if.call(i,null!=a?a.done:a,{name:"if",hash:{},fn:l.program(2,n,0),inverse:l.noop,data:n}))?s:"")+">\r\n                    <div>Abgeschlossen</div>\r\n"+(null!=(s=t.if.call(i,null!=a?a.done:a,{name:"if",hash:{},fn:l.program(4,n,0),inverse:l.noop,data:n}))?s:"")+'                </div>\r\n            </td>\r\n            <td class="col2">\r\n                <textarea>'+d((o=null!=(o=t.content||(null!=a?a.content:a))?o:r,typeof o===c?o.call(i,{name:"content",hash:{},data:n}):o))+"</textarea>\r\n            </td>\r\n        </tr>\r\n</table>\r\n"},2:function(l,a,t,e,n){return"checked"},4:function(l,a,t,e,n){return'                        <div class="finish-date">['+l.escapeExpression((t.fromNow||a&&a.fromNow||t.helperMissing).call(null!=a?a:l.nullContext||{},null!=a?a.finishDate:a,{name:"fromNow",hash:{},data:n}))+"]</div>\r\n"},compiler:[7,">= 4.0.0"],main:function(l,a,t,e,n){var s;return null!=(s=t.each.call(null!=a?a:l.nullContext||{},null!=a?a.notes:a,{name:"each",hash:{},fn:l.program(1,n,0),inverse:l.noop,data:n}))?s:""},useData:!0})}();
