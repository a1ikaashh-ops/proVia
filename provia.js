
var T={
ru:{app:"Provia",tag:"Профессиональное сообщество Кыргызстана",login:"Вход",phone:"Номер телефона",email:"Электронная почта",code:"Получить код",codeph:"Код из SMS (в демо — любой)",enter:"Войти",sphere:"Выберите сферу",region:"Выберите регион",spec:"Выберите специальность",allR:"Все регионы",allS:"Все специальности",allRs:"Общий чат: все регионы",allSs:"Общий чат: все специальности",rooms:"Чаты",ai:"ИИ-помощник",type:"Написать сообщение…",tr:"Перевести",orig:"Оригинал",rep:"Пожаловаться",blk:"Заблокировать",you:"Вы",reported:"Жалоба отправлена модераторам",hidden:"Сообщение скрыто до проверки модератором",spam:"Сообщение заблокировано автофильтром (спам или запрещённые слова)",blocked:"Пользователь заблокирован, его сообщения скрыты",online:"участников",aiNote:"Личный помощник виден только вам и не вмешивается в общие чаты. В демо ответы заготовленные; в рабочей версии здесь будет настоящий ИИ.",sum:"Кратко пересказать чат",trn:"Перевести текст",imp:"Улучшить текст",ask:"Спросите что угодно по вашей специальности…",back:"Назад",fwdTo:"Переслать в…",fwdFrom:"Переслано от",fwded:"Переслано",self:"Чат с самим собой",selfHint:"Сохраняйте сюда мысли, ссылки и посты из чатов (кнопка «закладка»)",selfSub:"Ваши мысли, ссылки и сохранённые посты",savedSelf:"Сохранено в чат с самим собой",pop:"Популярное сейчас",ana:"На основе ваших просмотров и лайков",home:"Главная",dm:"Личные",aiS:"ИИ",hi:"Здравствуйте",liked:"Понравившиеся посты",hist:"История просмотров",dmPh:"Сообщение…",write:"Написать",dmAuto:"Спасибо за сообщение! (демо-ответ)",prof:"Профиль",nick:"Никнейм",myspec:"Специальность",exp:"Опыт работы (лет)",about:"О себе",save:"Сохранить",saved:"Профиль сохранён",years:"лет опыта",notset:"Не указано",modinfo:"Модерация: автофильтр, жалобы, блокировка"},
ky:{app:"Provia",tag:"Кыргызстандын кесиптик жамааты",login:"Кирүү",phone:"Телефон номери",email:"Электрондук почта",code:"Код алуу",codeph:"SMS код (демодо — каалаган)",enter:"Кирүү",sphere:"Тармакты тандаңыз",region:"Аймакты тандаңыз",spec:"Адистикти тандаңыз",allR:"Бардык аймактар",allS:"Бардык адистиктер",allRs:"Жалпы чат: бардык аймактар",allSs:"Жалпы чат: бардык адистиктер",rooms:"Чаттар",ai:"ЖИ-жардамчы",type:"Билдирүү жазуу…",tr:"Которуу",orig:"Оригинал",rep:"Даттануу",blk:"Бөгөттөө",you:"Сиз",reported:"Даттануу модераторлорго жөнөтүлдү",hidden:"Билдирүү модератор текшергенге чейин жашырылды",spam:"Билдирүү автофильтр менен бөгөттөлдү (спам же тыюу салынган сөздөр)",blocked:"Колдонуучу бөгөттөлдү, анын билдирүүлөрү жашырылды",online:"катышуучу",aiNote:"Жеке жардамчы сизге гана көрүнөт жана жалпы чаттарга аралашпайт. Демодо жооптор даяр; иш жүзүндөгү версияда чыныгы ЖИ болот.",sum:"Чатты кыскача айтып берүү",trn:"Текстти которуу",imp:"Текстти жакшыртуу",ask:"Адистигиңиз боюнча каалаган суроо бериңиз…",back:"Артка",fwdTo:"Жөнөтүү…",fwdFrom:"Жөнөтүлгөн:",fwded:"Жөнөтүлдү",self:"Өзүм менен чат",selfHint:"Бул жерге ой-пикирлериңизди, шилтемелерди жана чаттардагы постторду (закладка) сактаңыз",selfSub:"Ой-пикирлер, шилтемелер жана сакталган посттор",savedSelf:"Өзүм менен чатка сакталды",pop:"Азыр популярдуу",ana:"Көргөн жана жаккан постторуңуз боюнча",home:"Башкы бет",dm:"Жеке",aiS:"ЖИ",hi:"Саламатсызбы",liked:"Жаккан посттор",hist:"Көрүү тарыхы",dmPh:"Билдирүү…",write:"Жазуу",dmAuto:"Билдирүү үчүн рахмат! (демо жооп)",prof:"Профиль",nick:"Лакап ат",myspec:"Адистик",exp:"Иш тажрыйбасы (жыл)",about:"Өзүм жөнүндө",save:"Сактоо",saved:"Профиль сакталды",years:"жыл тажрыйба",notset:"Көрсөтүлгөн эмес",modinfo:"Модерация: автофильтр, даттануу, бөгөттөө"}};
var ICONS={user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/>',users:'<circle cx="9" cy="8" r="3.5"/><path d="M2 20c0-3.9 3.1-7 7-7s7 3.1 7 7M16 4.5a3.5 3.5 0 010 7M18 14c2.4.8 4 3.2 4 6"/>',code:'<path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>',med:'<rect x="3" y="3" width="18" height="18" rx="5"/><path d="M12 8v8M8 12h8"/>',book:'<path d="M4 4.5A2.5 2.5 0 016.5 2H20v17H6.5A2.5 2.5 0 004 21.5zM4 21.5v-17"/>',build:'<path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6"/>',brief:'<rect x="3" y="7" width="18" height="13" rx="3"/><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18"/>',leaf:'<path d="M20 4C9 4 4 9 4 16c0 2 .5 3 1 4 1-5 4-8 9-10-4 3-6 6-7 11 8 0 13-5 13-17z"/>',pin:'<path d="M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',flame:'<path d="M12 22c4 0 7-2.8 7-7 0-3-2-5-3-7-1 2-2 3-3 3 0-3-1-6-4-9 0 5-4 7-4 13 0 4 3 7 7 7z"/>',heart:'<path d="M12 21s-8-5.2-8-11a4.5 4.5 0 018-2.8A4.5 4.5 0 0120 10c0 5.8-8 11-8 11z"/>',reply:'<path d="M9 14L4 9l5-5"/><path d="M4 9h10a6 6 0 016 6v3"/>',fwd:'<path d="M15 14l5-5-5-5"/><path d="M20 9H10a6 6 0 00-6 6v3"/>',mark:'<path d="M6 3h12v18l-6-4-6 4z"/>',send:'<path d="M21 3L10 14M21 3l-7 18-4-7-7-4z"/>',back:'<path d="M15 5l-7 7 7 7"/>',close:'<path d="M6 6l12 12M18 6L6 18"/>',flag:'<path d="M5 21V4M5 4h12l-2 4 2 4H5"/>',ban:'<circle cx="12" cy="12" r="9"/><path d="M5.6 5.6l12.8 12.8"/>',home:'<path d="M3 11l9-8 9 8M5 9.5V21h14V9.5"/>',chat:'<path d="M21 12a8 8 0 01-11.6 7.1L4 20l1-4.6A8 8 0 1121 12z"/>',mail:'<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3 8l9 6 9-6"/>',spark:'<path d="M12 3l2 5.5L19.5 10 14 12l-2 5.5L10 12 4.5 10 10 8.5z"/><path d="M19 16v4M17 18h4"/>',shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>',mountain:'<path d="M3 20l6-10 4 6 3-4 5 8z"/>',star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',bolt:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'};
function ic(n,z,f){z=z||18;return '<svg class="i" viewBox="0 0 24 24" width="'+z+'" height="'+z+'" fill="'+(f?"currentColor":"none")+'" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"'+(f?' style="color:var(--ac)"':'')+'>'+(ICONS[n]||ICONS.user)+'</svg>'}
var SPH=[
{e:"code",ru:"IT и технологии",ky:"IT жана технологиялар",s:[["Frontend","Frontend"],["Backend","Backend"],["Дизайн UX/UI","UX/UI дизайн"],["Тестирование","Тестирование"]]},
{e:"med",ru:"Медицина",ky:"Медицина",s:[["Терапия","Терапия"],["Педиатрия","Педиатрия"],["Хирургия","Хирургия"],["Медсёстры","Медайымдар"]]},
{e:"book",ru:"Образование",ky:"Билим берүү",s:[["Школьные учителя","Мектеп мугалимдери"],["Преподаватели вузов","ЖОЖ окутуучулары"],["Репетиторы","Репетиторлор"]]},
{e:"build",ru:"Строительство",ky:"Курулуш",s:[["Архитекторы","Архитекторлор"],["Инженеры","Инженерлер"],["Прорабы","Прорабдар"]]},
{e:"brief",ru:"Бизнес и финансы",ky:"Бизнес жана финансы",s:[["Бухгалтерия","Бухгалтерия"],["Маркетинг","Маркетинг"],["Предприниматели","Ишкерлер"]]},
{e:"leaf",ru:"Сельское хозяйство",ky:"Айыл чарба",s:[["Растениеводство","Өсүмдүк өстүрүү"],["Животноводство","Мал чарбасы"],["Фермеры","Фермерлер"]]}];
var REG=[["Бишкек","Бишкек"],["Ош","Ош"],["Чуйская область","Чүй облусу"],["Иссык-Кульская область","Ысык-Көл облусу"],["Нарынская область","Нарын облусу"],["Таласская область","Талас облусу"],["Джалал-Абадская область","Жалал-Абад облусу"],["Баткенская область","Баткен облусу"]];
var BAD=["спам","казино","ставки","casino","1xbet","өзүн өзү өлтүр"];
var SEED=[
["Айгуль","Коллеги, подскажите, где лучше проходить курсы повышения квалификации?","Кесиптеш, квалификацияны жогорулатуу курстарын кайдан өтсө жакшы?"],
["Бакыт","Я проходил в Бишкеке, рекомендую. Есть онлайн-формат.","Мен Бишкекте өткөм, сунуштайм. Онлайн форматы да бар."],
["Нургуль","Могу поделиться программой, напишу вечером.","Программаны бөлүшө алам, кечинде жазам."]];
var AVS=["user","code","med","book","build","leaf","brief","mountain","star","bolt"];
var OTH={"Айгуль":{av:"book",spec:"2|0",exp:8,about:"Учу детей и люблю делиться материалами."},"Бакыт":{av:"brief",spec:"4|1",exp:5,about:"Маркетолог из Бишкека, помогаю малому бизнесу."},"Нургуль":{av:"code",spec:"0|2",exp:3,about:"Дизайнер интерфейсов, пишу и по-кыргызски."}};
var S={lang:"ru",user:null,mode:"phone",sp:null,rg:null,sc:null,tab:"rooms",view:null,hist:[],likes:{},dms:{"Айгуль":[{me:false,t:"Привет! Видела ваш пост, давайте обсудим."}]},dmWith:null,prof:{av:"user",nick:"",spec:"",exp:"",about:""},msgs:{},aiMsgs:[],tr:{},rep:{},blk:{}};
function t(k){return T[S.lang][k]}
function nm(a){return a[S.lang==="ru"?0:1]}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function key(){return S.sp+"|"+S.rg+"|"+S.sc}
function toast(m){var e=document.getElementById("toast");e.textContent=m;e.className="on";clearTimeout(toast.h);toast.h=setTimeout(function(){e.className=""},2200)}
function head(title,back){return '<header>'+(back?'<button class="ic" data-a="back" aria-label="'+t("back")+'">'+ic("back",22)+'</button>':'')+'<h1>'+title+'</h1><button class="lang" data-a="lang">'+(S.lang==="ru"?"RU → КЫР":"КЫР → RU")+'</button></header>'}
function item(a,i,e,sub,cls){return '<button class="item '+(cls||"")+'" data-a="'+a+'" data-i="'+i+'">'+(e?'<span class="e">'+(ICONS[e]?ic(e,22):e)+'</span>':'')+'<span><b>'+sub[0]+'</b>'+(sub[1]?'<div class="s">'+sub[1]+'</div>':'')+'</span></button>'}
function seedRoom(k){if(!S.msgs[k])S.msgs[k]=SEED.map(function(s,i){return{id:i,u:s[0],ru:s[1],ky:s[2],me:false,l:[12,5,3][i]}})}
function render(){
var h="",a=document.getElementById("app");
if(!S.user){
h=head(t("app"),false)+'<main><div class="logo">'+ic("chat",34)+'</div><h2>'+t("login")+'</h2><div class="crumb">'+t("tag")+'</div><div class="seg"><button data-a="mode" data-i="phone" class="'+(S.mode==="phone"?"on":"")+'">'+t("phone")+'</button><button data-a="mode" data-i="email" class="'+(S.mode==="email"?"on":"")+'">'+t("email")+'</button></div>'
+'<input id="id" '+(S.mode==="phone"?'type="tel" placeholder="+996 ___ ___ ___"':'type="email" placeholder="name@mail.kg"')+'><button class="pri" data-a="code">'+t("code")+'</button><input id="cd" inputmode="numeric" placeholder="'+t("codeph")+'"><button class="pri" data-a="enter">'+t("enter")+'</button><div class="note">'+ic("shield",16)+' '+t("modinfo")+'</div></main>';
}else if(S.fwd){h=fwdView()
}else if(S.view){h=otherView(S.view)
}else if(S.tab==="home"){h=homeView()
}else if(S.tab==="dm"){h=dmView()
}else if(S.tab==="prof"){h=profView()
}else if(S.tab==="ai"){
h=head(t("ai"),false)+'<main><div class="note">'+t("aiNote")+'</div><div class="chips"><button data-a="aiq" data-i="sum">'+t("sum")+'</button><button data-a="aiq" data-i="trn">'+t("trn")+'</button><button data-a="aiq" data-i="imp">'+t("imp")+'</button></div><div class="msgs">'
+S.aiMsgs.map(function(m){return '<div class="m '+(m.me?"me":"")+'">'+esc(m.t)+'</div>'}).join("")+'</div><div class="send"><input id="ai" placeholder="'+t("ask")+'"><button data-a="aisend">'+ic("send",20)+'</button></div></main>'+tabs();
}else if(S.sp===null){
h=head(t("sphere"),false)+'<main>'+SPH.map(function(s,i){return item("sp",i,s.e,[nm([s.ru,s.ky])])}).join("")+'</main>'+tabs();
}else if(S.rg===null){
h=head(t("region"),true)+'<main><div class="crumb">'+ic(SPH[S.sp].e,15)+" "+nm([SPH[S.sp].ru,SPH[S.sp].ky])+'</div>'+REG.map(function(r,i){return item("rg",i,"pin",[nm(r)])}).join("")+item("rg","all","globe",[t("allRs")],"all")+'</main>'+tabs();
}else if(S.sc===null){
h=head(t("spec"),true)+'<main><div class="crumb">'+ic(SPH[S.sp].e,15)+" "+nm([SPH[S.sp].ru,SPH[S.sp].ky])+" · "+rgName()+'</div>'+SPH[S.sp].s.map(function(r,i){return item("sc",i,"target",[nm(r)])}).join("")+item("sc","all","globe",[t("allSs")],"all")+'</main>'+tabs();
}else{
var k=key();seedRoom(k);
h=head(scName(),true)+'<main><div class="crumb">'+ic(SPH[S.sp].e,15)+" "+nm([SPH[S.sp].ru,SPH[S.sp].ky])+" · "+rgName()+" · "+ic("users",15)+" "+(120+S.msgs[k].length*7)+" "+t("online")+'</div><div class="msgs">'
+S.msgs[k].map(function(m){
var id=k+m.id;
if(S.blk[m.u])return '<div class="m bad">'+t("blocked")+'</div>';
if(S.rep[id])return '<div class="m bad">'+t("hidden")+'</div>';
if(m.bad)return '<div class="m bad">'+t("spam")+'</div>';
var txt=m.me?m.ru:m[S.lang],other=S.lang==="ru"?"ky":"ru",shown=S.tr[id];
return '<div class="m '+(m.me?"me":"")+'"><div class="n">'+(m.me?(ic(S.prof.av,16)+" "+(S.prof.nick?esc(S.prof.nick):t("you"))):'<button class="nk" data-a="view" data-i="'+esc(m.u)+'">'+(OTH[m.u]?ic(OTH[m.u].av,16):"")+" "+esc(m.u)+'</button>')+'</div>'+qline(m)+esc(txt)
+(shown?'<div class="tr">'+ic("globe",14)+' '+esc(m.me?"(автоперевод ИИ / ИИ автокотормо)":m[other])+'</div>':'')
+'<div class="a"><button data-a="like" data-i="'+id+'">'+ic("heart",16,S.likes[id])+" "+((m.l||0)+(S.likes[id]?1:0))+'</button><button data-a="rply" data-i="'+id+'">'+ic("reply",14)+'</button><button data-a="fw" data-i="'+id+'">'+ic("fwd",14)+'</button><button data-a="note" data-i="'+id+'">'+ic("mark",14)+'</button><button data-a="tr" data-i="'+id+'">'+ic("globe",14)+' '+(shown?t("orig"):t("tr"))+'</button>'+(m.me?'':'<button data-a="rep" data-i="'+id+'">'+ic("flag",14)+' '+t("rep")+'</button><button data-a="blk" data-i="'+esc(m.u)+'">'+ic("ban",14)+' '+t("blk")+'</button>')+'</div></div>'}).join("")
+'</div><div class="send">'+rbar("room:"+k)+'<input id="msg" placeholder="'+t("type")+'"><button data-a="send">'+ic("send",20)+'</button></div></main>'+tabs();
}
a.innerHTML=h;
var inp=a.querySelector("#msg");if(inp)inp.onkeydown=function(e){if(e.key==="Enter")act("send")};
var ai=a.querySelector("#ai");if(ai)ai.onkeydown=function(e){if(e.key==="Enter")act("aisend")};var dd=a.querySelector("#dm");if(dd)dd.onkeydown=function(e){if(e.key==="Enter")act("dmsend")};
window.scrollTo(0,document.body.scrollHeight>600&&((S.tab==="rooms"&&S.sc!==null)||S.tab==="ai"||(S.tab==="dm"&&S.dmWith))?document.body.scrollHeight:0);
}
function readForm(){var n=document.getElementById("pn");if(!n)return;S.prof.nick=n.value.trim();S.prof.spec=document.getElementById("ps").value;S.prof.exp=document.getElementById("pe").value;S.prof.about=document.getElementById("pa").value.trim()}
function specLabel(v){if(!v)return t("notset");var a=v.split("|"),s=SPH[a[0]];return ic(s.e,15)+" "+nm([s.ru,s.ky])+" · "+nm(s.s[a[1]])}
function profView(){var p=S.prof,o=SPH.map(function(s,i){return '<optgroup label="'+nm([s.ru,s.ky])+'">'+s.s.map(function(x,j){var v=i+"|"+j;return '<option value="'+v+'"'+(p.spec===v?" selected":"")+'>'+nm(x)+'</option>'}).join("")+'</optgroup>'}).join("");
return head(t("prof"),false)+'<main><div class="av">'+ic(p.av,48)+'</div><div class="avs">'+AVS.map(function(e){return '<button data-a="av" data-i="'+e+'" class="'+(p.av===e?"on":"")+'">'+ic(e,22)+'</button>'}).join("")+'</div><label>'+t("nick")+'</label><input id="pn" maxlength="24" value="'+esc(p.nick)+'" placeholder="@nickname"><label>'+t("myspec")+'</label><select id="ps"><option value="">'+t("notset")+'</option>'+o+'</select><label>'+t("exp")+'</label><input id="pe" type="number" min="0" max="60" value="'+esc(p.exp)+'"><label>'+t("about")+'</label><textarea id="pa" rows="4" maxlength="300">'+esc(p.about)+'</textarea><button class="pri" data-a="save">'+t("save")+'</button></main>'+tabs()}
function otherView(u){var o=OTH[u]||{av:"user",spec:"",exp:"",about:""};return head(esc(u),true)+'<main><div class="av">'+ic(o.av,48)+'</div><h2 style="text-align:center">'+esc(u)+'</h2><div class="pv"><b>'+t("myspec")+'</b><br>'+specLabel(o.spec)+'</div><div class="pv"><b>'+t("exp")+'</b><br>'+o.exp+' '+t("years")+'</div><div class="pv"><b>'+t("about")+'</b><br>'+esc(o.about)+'</div><button class="pri" data-a="dmopen" data-i="'+esc(u)+'">'+ic("mail",16)+' '+t("write")+'</button></main>'+tabs()}
function tabs(){var L=[["home","home",t("home")],["rooms","chat",t("rooms")],["dm","mail",t("dm")],["prof","user",t("prof")],["ai","spark",t("aiS")]];return '<div class="tabs">'+L.map(function(x){return '<button data-a="tab" data-i="'+x[0]+'" class="'+(S.tab===x[0]?"on":"")+'"><span>'+ic(x[1],22)+'</span>'+x[2]+'</button>'}).join("")+'</div>'}
function addHist(e){var s=JSON.stringify(e);S.hist=S.hist.filter(function(x){return JSON.stringify(x)!==s});S.hist.unshift(e);S.hist=S.hist.slice(0,8)}
function findMsg(id){var r=null;Object.keys(S.msgs).forEach(function(k){S.msgs[k].forEach(function(m){if(k+m.id===id)r={k:k,m:m}})});return r}
function roomLabel(r){var s=SPH[r.sp];return ic(s.e,15)+" "+(r.sc==="all"?t("allS"):nm(s.s[r.sc]))+" · "+(r.rg==="all"?t("allR"):nm(REG[r.rg]))}
function kRoom(k){var p=k.split("|");return{sp:+p[0],rg:p[1]==="all"?"all":+p[1],sc:p[2]==="all"?"all":+p[2]}}
function inHist(r){return S.hist.some(function(x){return x.t==="r"&&x.sp===r.sp&&x.rg===r.rg&&x.sc===r.sc})}
var POPP=[{r:{sp:0,rg:"all",sc:"all"},u:"Бакыт",l:86,ru:"Какие языки программирования сейчас востребованы? Делюсь наблюдениями",ky:"Азыр кайсы программалоо тилдери суроо-талапка ээ? Байкоолорум менен бөлүшөм"},{r:{sp:1,rg:0,sc:"all"},u:"Айгуль",l:64,ru:"Чек-лист для приёма пациентов: как ничего не упустить",ky:"Бейтапты кабыл алуу чек-листи: эч нерени калтырбоо үчүн"},{r:{sp:2,rg:"all",sc:"all"},u:"Нургуль",l:51,ru:"Как мотивировать учеников после каникул: мой опыт",ky:"Каникулдан кийин окуучуларды кантип шыктандыруу: менин тажрыйбам"},{r:{sp:4,rg:1,sc:"all"},u:"Бакыт",l:47,ru:"Как вести учёт в малом бизнесе: простые правила",ky:"Чакан бизнестеги эсепти кантип жүргүзүү: жөнөкөй эрежелер"}];
var POPR=[[{sp:0,rg:"all",sc:"all"},1240],[{sp:1,rg:"all",sc:"all"},980],[{sp:2,rg:0,sc:"all"},610]];
function gk(r){return r.sp+","+r.rg+","+r.sc}
function analysis(){var sc={},sph={},on=S.hist.length>0;
function add(sp,c,w){sph[sp]=(sph[sp]||0)+w;if(c!=="all"){var k=sp+"|"+c;sc[k]=(sc[k]||0)+w}}
S.hist.forEach(function(x){if(x.t==="r")add(x.sp,x.sc,1)});
Object.keys(S.msgs).forEach(function(k){S.msgs[k].forEach(function(m){if(S.likes[k+m.id]){on=true;var r=kRoom(k);add(r.sp,r.sc,3)}})});
if(!on)return null;
if(S.prof.spec){var a=S.prof.spec.split("|");add(+a[0],+a[1],2)}
var tops=Object.keys(sph).sort(function(a,b){return sph[b]-sph[a]});if(!tops.length)return null;
var top=+tops[0],o=[];
Object.keys(sc).sort(function(a,b){return sc[b]-sc[a]}).slice(0,2).forEach(function(k){var p=k.split("|");o.push({sp:+p[0],rg:"all",sc:+p[1]})});
o.push({sp:top,rg:"all",sc:"all"});
SPH[top].s.forEach(function(x,j){o.push({sp:top,rg:"all",sc:j})});
var seen={},rooms=o.filter(function(r){var g=gk(r);if(seen[g]||inHist(r))return false;seen[g]=1;return true}).slice(0,4);
var ppl=Object.keys(OTH).filter(function(u){return +OTH[u].spec.split("|")[0]===top}).slice(0,2);
return{rooms:rooms,ppl:ppl}}
function homeView(){var an=analysis(),h=head(t("home"),false)+'<main><h2>'+t("hi")+(S.prof.nick?", "+esc(S.prof.nick):"")+'!</h2>';
if(an&&(an.rooms.length||an.ppl.length)){h+='<div class="h3">'+t("ana")+'</div>'+an.rooms.map(function(r){return item("goto",gk(r),"search",[roomLabel(r)])}).join("")+an.ppl.map(function(u){return item("view",esc(u),OTH[u].av,[esc(u),specLabel(OTH[u].spec)])}).join("")}
h+='<div class="h3">'+t("pop")+'</div>'+POPR.map(function(x){return item("goto",gk(x[0]),"flame",[roomLabel(x[0]),ic("users",14)+" "+x[1]])}).join("")+POPP.map(function(x){return item("goto",gk(x.r),"heart",[esc(x[S.lang]),esc(x.u)+" · "+ic("heart",12)+" "+x.l+" · "+roomLabel(x.r)])}).join("");
var lk=[];Object.keys(S.msgs).forEach(function(k){S.msgs[k].forEach(function(m){if(S.likes[k+m.id])lk.push({k:k,m:m})})});
if(lk.length)h+='<div class="h3">'+t("liked")+'</div>'+lk.map(function(x){var m=x.m,tx=m.me?m.ru:m[S.lang];return item("goto",x.k.replace(/\|/g,","),"heart",[esc(tx.length>70?tx.slice(0,70)+"…":tx),esc(m.me?t("you"):m.u)+" · "+roomLabel(kRoom(x.k))])}).join("");
if(S.hist.length)h+='<div class="h3">'+t("hist")+'</div>'+S.hist.map(function(x){if(x.t==="r")return item("goto",gk(x),"clock",[roomLabel(x)]);var o=OTH[x.u]||{av:"user",spec:""};return item("view",esc(x.u),o.av,[esc(x.u),specLabel(o.spec)])}).join("");
return h+'</main>'+tabs()}
function dmView(){if(S.dmWith){var u=S.dmWith,self=u==="__self",l=S.dms[u]||[];return head(self?t("self"):(OTH[u]?ic(OTH[u].av,20):ic("user",20))+" "+esc(u),true)+'<main>'+(self&&!l.length?'<div class="note">'+t("selfHint")+'</div>':'')+'<div class="msgs">'+l.map(function(m,i){var ref="d:"+u+":"+i;return '<div class="m '+(m.me?"me":"")+'">'+qline(m)+esc(m.t)+'<div class="a"><button data-a="rply" data-i="'+ref+'">'+ic("reply",14)+'</button><button data-a="fw" data-i="'+ref+'">'+ic("fwd",14)+'</button></div></div>'}).join("")+'</div><div class="send">'+rbar("dm:"+u)+'<input id="dm" placeholder="'+t("dmPh")+'"><button data-a="dmsend">'+ic("send",20)+'</button></div></main>'+tabs()}
var names=["__self"].concat(Object.keys(OTH));Object.keys(S.dms).forEach(function(n){if(names.indexOf(n)<0)names.push(n)});
return head(t("dm"),false)+'<main>'+names.map(function(n){var l=S.dms[n]||[],last=l.length?l[l.length-1].t:"";last=last.length>50?last.slice(0,50)+"…":last;if(n==="__self")return item("dmopen","__self","mark",[t("self"),esc(last)||t("selfSub")]);return item("dmopen",esc(n),OTH[n]?OTH[n].av:"user",[esc(n),esc(last)])}).join("")+'</main>'+tabs()}
function mine(){return S.prof.nick||t("you")}
function rf(c){return S.reply&&S.reply.ctx===c?{u:S.reply.u,t:S.reply.t}:undefined}
function rbar(c){return S.reply&&S.reply.ctx===c?'<div class="rbar"><span>'+ic("reply",14)+' <b>'+esc(S.reply.u)+'</b>: '+esc(S.reply.t)+'</span><button class="ic" data-a="rcancel">'+ic("close",16)+'</button></div>':''}
function qline(m){return (m.f?'<div class="q">'+ic("fwd",14)+' '+t("fwdFrom")+' '+esc(m.f)+'</div>':'')+(m.r?'<div class="q">'+ic("reply",14)+' <b>'+esc(m.r.u)+'</b>: '+esc(m.r.t)+'</div>':'')}
function getRef(i){if(i.indexOf("d:")===0){var p=i.split(":"),m=S.dms[p[1]][+p[2]];return{u:m.me?mine():p[1],t:m.t,f:m.f,ctx:"dm:"+p[1]}}var f=findMsg(i);if(!f)return null;var m2=f.m;return{u:m2.me?mine():m2.u,t:m2.me?m2.ru:m2[S.lang],f:m2.f,ctx:"room:"+f.k}}
function fwdView(){var names=["__self"].concat(Object.keys(OTH));Object.keys(S.dms).forEach(function(n){if(names.indexOf(n)<0)names.push(n)});
return head(t("fwdTo"),true)+'<main><div class="pv"><div class="crumb">'+esc(S.fwd.f)+'</div>'+esc(S.fwd.t)+'</div>'+names.map(function(n){return n==="__self"?item("fto","d:__self","mark",[t("self")]):item("fto","d:"+esc(n),OTH[n]?OTH[n].av:"user",[esc(n)])}).join("")+S.hist.filter(function(x){return x.t==="r"}).map(function(x){return item("fto","r:"+gk(x),"chat",[roomLabel(x)])}).join("")+'</main>'+tabs()}
function rgName(){return S.rg==="all"?t("allR"):nm(REG[S.rg])}
function scName(){return S.sc==="all"?t("allS"):nm(SPH[S.sp].s[S.sc])}
function act(a,i){
if(a==="lang"){readForm();S.lang=S.lang==="ru"?"ky":"ru"}
else if(a==="mode"){S.mode=i}
else if(a==="code"){toast("SMS / Email")}
else if(a==="enter"){S.user={name:"Вы"};S.tab="home"}
else if(a==="sp"){S.sp=+i}
else if(a==="rg"){S.rg=i==="all"?"all":+i}
else if(a==="sc"){S.sc=i==="all"?"all":+i;addHist({t:"r",sp:S.sp,rg:S.rg,sc:S.sc})}
else if(a==="back"){if(S.fwd)S.fwd=null;else if(S.dmWith)S.dmWith=null;else if(S.view)S.view=null;else if(S.sc!==null)S.sc=null;else if(S.rg!==null)S.rg=null;else S.sp=null}
else if(a==="tab"){readForm();S.tab=i;S.view=null;S.dmWith=null}else if(a==="view"){S.view=i;addHist({t:"u",u:i})}
else if(a==="like"){S.likes[i]=!S.likes[i]}
else if(a==="note"){var f=findMsg(i);if(f){S.dms.__self=S.dms.__self||[];S.dms.__self.push({me:true,t:f.m.me?f.m.ru:f.m[S.lang]});toast(t("savedSelf"))}}
else if(a==="goto"){var p=i.split(",");S.tab="rooms";S.view=null;S.sp=+p[0];S.rg=p[1]==="all"?"all":+p[1];S.sc=p[2]==="all"?"all":+p[2];addHist({t:"r",sp:S.sp,rg:S.rg,sc:S.sc})}
else if(a==="dmopen"){S.dmWith=i;S.view=null;S.tab="dm"}
else if(a==="rply"){var g2=getRef(i);if(g2)S.reply={ctx:g2.ctx,u:g2.u,t:g2.t.length>80?g2.t.slice(0,80)+"…":g2.t}}
else if(a==="rcancel"){S.reply=null}
else if(a==="fw"){var g=getRef(i);if(g)S.fwd={t:g.t,f:g.f||g.u}}
else if(a==="fto"){var fw=S.fwd,pt=i.slice(2);if(i[0]==="d"){S.dms[pt]=S.dms[pt]||[];S.dms[pt].push({me:true,t:fw.t,f:fw.f})}else{var rr=pt.split(","),kk=rr[0]+"|"+rr[1]+"|"+rr[2];seedRoom(kk);var ll=S.msgs[kk];ll.push({id:ll.length,u:"me",ru:fw.t,ky:fw.t,me:true,f:fw.f})}S.fwd=null;toast(t("fwded"))}
else if(a==="dmsend"){var e3=document.getElementById("dm"),v2=e3&&e3.value.trim();if(!v2)return;var u2=S.dmWith;S.dms[u2]=S.dms[u2]||[];if(BAD.some(function(w){return v2.toLowerCase().indexOf(w)>-1})){toast(t("spam"));return}S.dms[u2].push({me:true,t:v2,r:rf("dm:"+u2)});S.reply=null;if(u2!=="__self")setTimeout(function(){S.dms[u2].push({me:false,t:t("dmAuto")});if(S.dmWith===u2)render()},1000)}
else if(a==="av"){readForm();S.prof.av=i}else if(a==="save"){readForm();toast(t("saved"))}
else if(a==="tr"){S.tr[i]=!S.tr[i]}
else if(a==="rep"){S.rep[i]=true;toast(t("reported"))}
else if(a==="blk"){S.blk[i]=true;toast(t("blocked"))}
else if(a==="send"){var el=document.getElementById("msg"),v=el&&el.value.trim();if(!v)return;var l=S.msgs[key()],bad=BAD.some(function(w){return v.toLowerCase().indexOf(w)>-1});l.push({id:l.length,u:"me",ru:v,ky:v,me:true,bad:bad,r:rf("room:"+key())});S.reply=null;if(bad)toast(t("spam"))}
else if(a==="aisend"){var e2=document.getElementById("ai"),q=e2&&e2.value.trim();if(!q)return;S.aiMsgs.push({me:true,t:q});S.aiMsgs.push({me:false,t:aiAns(q)})}
else if(a==="aiq"){S.aiMsgs.push({me:true,t:t(i)});S.aiMsgs.push({me:false,t:aiAns(i)})}
render();
}
function aiAns(q){var ru=S.lang==="ru";
if(q==="sum")return ru?"Кратко: участники обсуждают курсы повышения квалификации. Бакыт рекомендует очные курсы в Бишкеке с онлайн-форматом, Нургуль вечером пришлёт программу. (демо)":"Кыскача: катышуучулар квалификация жогорулатуу курстарын талкуулап жатат. Бакыт Бишкектеги онлайн форматтуу курстарды сунуштайт, Нургуль кечинде программаны жөнөтөт. (демо)";
if(q==="trn")return ru?"Вставьте текст в сообщение, и я переведу его между русским и кыргызским. (демо)":"Текстти билдирүүгө жапшырыңыз, мен орусча-кыргызча которуп берем. (демо)";
if(q==="imp")return ru?"Отправьте черновик, и я сделаю его чётче и вежливее. (демо)":"Черновикти жөнөтүңүз, мен аны так жана сылык кылам. (демо)";
return ru?"Это демо-ответ. В рабочей версии здесь отвечает настоящий ИИ с учётом вашей сферы и специальности. Ваш вопрос: «"+q+"»":"Бул демо жооп. Иш жүзүндөгү версияда сиздин тармагыңызга ылайык чыныгы ЖИ жооп берет. Суроо: «"+q+"»"}
document.getElementById("app").addEventListener("click",function(e){var b=e.target.closest("[data-a]");if(b)act(b.getAttribute("data-a"),b.getAttribute("data-i"))});
render();
(function(){var l=document.getElementById("lens"),x=innerWidth/2,y=innerHeight/2,tx=x,ty=y,run=0;
function loop(){x+=(tx-x)*.12;y+=(ty-y)*.12;l.style.setProperty("--mx",x+"px");l.style.setProperty("--my",y+"px");if(Math.abs(tx-x)+Math.abs(ty-y)>.5)requestAnimationFrame(loop);else run=0}
addEventListener("pointermove",function(e){tx=e.clientX;ty=e.clientY;if(!l.classList.contains("on")){x=tx;y=ty}l.classList.add("on");if(!run){run=1;requestAnimationFrame(loop)}});
document.addEventListener("pointerleave",function(){l.classList.remove("on")});
addEventListener("pointerup",function(e){if(e.pointerType==="touch")l.classList.remove("on")});
})();
