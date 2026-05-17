const LECTURES=[{id:1,title:"Эволюция сетевых технологий: от Интернета людей к Интернету вещей",desc:"История Интернета: от ARPA и Джозефа Ликлайдера до современных IoT-сетей",file:"pdf/lectures/1 лекция.pdf"},{id:2,title:"Архитектура Интернета вещей",desc:"Четырёхуровневая модель IoT: конечные устройства, ПО, сети, облако",file:"pdf/lectures/2 лекция.pdf"},{id:3,title:"Цифровая экосистема и безопасность Интернета вещей",desc:"Экосистема IoT как сеть физических устройств, объединяющая технологии, ПО и инфраструктуру",file:"pdf/lectures/3 лекция.pdf"},{id:4,title:"Основы работы с микроконтроллерными системами сбора данных",desc:"Структура IoT: система сбора данных, сетевое взаимодействие, хранение и управление",file:"pdf/lectures/4 лекция.pdf"},{id:5,title:"База IoT: Микрокомпьютер и платформа Arduino",desc:"Семейство Arduino, разновидности микроконтроллеров, открытая лицензия",file:"pdf/lectures/5 лекция.pdf"},{id:6,title:"Компонентная база: датчики, сенсоры и исполнительные устройства",desc:"Роль датчиков в IoT, типы сенсоров, потребительский и промышленный IoT",file:"pdf/lectures/6 лекция.pdf"},{id:7,title:"Области применения, достоинства и недостатки IoT. Перспективы развития технологии",desc:"Применение IoT, платформы Arduino/Raspberry Pi, эволюция и перспективы",file:"pdf/lectures/7 лекция.pdf"}];
const LABS=[{id:1,title:"Установка и настройка Arduino IDE",desc:"Установка Arduino IDE, запуск ознакомительной программы",file:"pdf/labs/1 лаба.pdf"},{id:2,title:"Знакомство с ESP32",desc:"Программирование микроконтроллера, управление светодиодом",file:"pdf/labs/2 лаба.pdf"},{id:3,title:"Умное освещение (I2C)",desc:"Управление через шину I2C, сборка стенда на MGBOT",file:"pdf/labs/3 лаба.pdf"},{id:4,title:"Wi-Fi метеостанция",desc:"Настройка беспроводной метеостанции на микроконтроллере",file:"pdf/labs/4 лаба.pdf"},{id:5,title:"Кодовый замок с сигнализацией",desc:"Алгоритм кодового замка с защитой от перебора",file:"pdf/labs/5 лаба.pdf"},{id:6,title:"Telegram-бот для оповещения",desc:"Передача данных через Telegram-бота, система оповещения",file:"pdf/labs/6 лаба.pdf"},{id:7,title:"Межмашинное взаимодействие по MQTT",desc:"Передача данных по MQTT, система автопроветривания",file:"pdf/labs/7 лаба.pdf"},{id:8,title:"Система автоматического полива",desc:"Автополив с мониторингом и управлением по MQTT",file:"pdf/labs/8 лаба.pdf"}];
const ALL_QUESTIONS=[
{id:1,type:"s",q:"Целью дисциплины «Аппаратно-программные комплексы Интернета вещей» является:",o:["Изучение только протоколов беспроводной связи","Формирование системы знаний, умений и навыков по проектированию, разработке и эксплуатации IoT","Изучение разработок мобильных приложений","Освоение теории управления общим механизмом"],a:1},
{id:3,type:"s",q:"Предмет дисциплины «Аппаратно-программные комплексы Интернета вещей» включает:",o:["Разработку мобильных приложений для Android","Проектирование и реализацию аппаратно-программных комплексов IoT для мониторинга и автоматизации","Тестирование алгоритмов на десктопных компьютерах","Проектирование робототехнических систем"],a:1},
{id:4,type:"s",q:"Какой из следующих пунктов входит в задачи дисциплины?",o:["Изучение методов эксплуатации мобильных сетей","Формирование навыков разработки ПО для микроконтроллеров и одноплатных компьютеров","Освоение основ квантовых вычислений","Изучение архитектуры традиционных телекоммуникационных сетей"],a:1},
{id:5,type:"s",q:"Кто из перечисленных учёных предложил идею объединения компьютеров в единую сеть?",o:["Винтон Серф","Джозеф Ликлайдер","Алан Тьюринг","Тим Бернерс-Ли"],a:1},
{id:8,type:"s",q:"В отличие от традиционных информационных технологий, система Интернета вещей:",o:["Использует только облачные платформы","Сочетает множество разнородных технологий","Функционирует автономно без подключения к сети","Предполагает использование только аналоговых датчиков"],a:1},
{id:9,type:"s",q:"Сколько основных уровней выделяют в архитектуре IoT в предложенной модели?",o:["Три","Четыре","Пять","Два"],a:1},
{id:11,type:"s",q:"К какому виду сетей относится технология ZigBee?",o:["WPAN (Wireless Personal Area Network)","LAN (Local Area Network)","WAN (Wide Area Network)","MAN (Metropolitan Area Network)"],a:0},
{id:14,type:"s",q:"К какой области относится специалист, который разрабатывает датчики и источники питания для IoT?",o:["Физика","Сетевые технологии","Машинное обучение","Облачные сервисы"],a:0},
{id:17,type:"s",q:"Какая из платформ является базовой для разработки IoT-решений?",o:["Arduino","Intel Core i5","Android OS","IBM Watson"],a:0},
{id:18,type:"s",q:"Что из перечисленного представляет собой аналоговый датчик?",o:["Обычный ртутный термометр","Цифровой термометр с дисплеем","Микроконтроллер Arduino","Веб-камера"],a:0},
{id:20,type:"s",q:"Укажите протокол, относящийся к WPAN (Wireless Personal Area Network):",o:["LoRaWAN","ZigBee","Ethernet"],a:1},
{id:25,type:"s",q:"Как называется архитектурная классификация IoT по уровням взаимодействия?",o:["Логическая модель","Трёхуровневая модель","Гибридная модель","Двухуровневая модель"],a:1},
{id:27,type:"s",q:"Что из перечисленного не относится к уровню коммуникаций IoT?",o:["Протокол MQTT","Спутниковая связь","LoRaWAN","Wi-Fi"],a:0},
{id:28,type:"s",q:"Какая сеть, используемая в IoT, предназначена для передачи данных на большие расстояния при низкой скорости?",o:["LoRaWAN","Ethernet","Bluetooth","Wi-Fi"],a:0},
{id:29,type:"s",q:"Что из перечисленного относится к микрокомпьютерным платформам для IoT?",o:["Raspberry Pi","Arduino Uno","Intel Pentium 4","Суперкомпьютер"],a:0},
{id:30,type:"s",q:"К какому уровню архитектуры IoT относится облачная платформа?",o:["Конечные устройства","ПО устройств","Коммуникации","Платформа (облако)"],a:3},
{id:31,type:"s",q:"Какой пример одноплатного компьютера упоминается в тексте программы?",o:["Raspberry Pi","Arduino Nano","Intel Atom","ARM Cortex"],a:0},
{id:35,type:"s",q:"Что обеспечивает готовность IoT-системы к дальнейшей масштабируемости?",o:["Выбор оборудования с учетом будущих подключений","Использование статических IP-адресов","Программирование без драйверов","Привязка к конкретному поставщику"],a:0},
{id:38,type:"s",q:"Перечислите одно преимущество Интернета вещей, упомянутое в лекциях:",o:["Автоматизация процессов","Полная безопасность","Отсутствие необходимости протоколов","Постоянное участие человека"],a:0},
{id:40,type:"s",q:"Что означает аббревиатура «IoT» в контексте данной дисциплины?",o:["Протокол беспроводной связи","Интернет вещей","Процессор микрокомпьютера","Технология искусственного интеллекта"],a:1},
{id:41,type:"s",q:"Какой компонент IoT-системы отвечает за непосредственное воздействие на физическую среду?",o:["Датчик","Исполнительное устройство (актуатор)","Облачный сервер","Пользовательский интерфейс"],a:1},
{id:44,type:"s",q:"Как называется платформа для создания IoT-устройств на базе микроконтроллеров?",o:["Мониторинг окружающей среды","Управление процессами","Создание компьютерных игр","Автоматизация процессов"],a:1},
{id:47,type:"s",q:"Какая из перечисленных технологий является низкоскоростной глобальной сетью для IoT?",o:["Wi-Fi","LoRaWAN","Ethernet","Bluetooth"],a:1},
{id:48,type:"s",q:"Какой компонент отвечает за сбор данных с датчиков и начальную обработку на периферийном уровне IoT?",o:["Облачная платформа","Устройство (микроконтроллер)","Сотовая сеть","Коммутатор"],a:1},
{id:50,type:"s",q:"На каком уровне IoT осуществляется первичное преобразование сигнала с датчика в цифровой вид?",o:["Конечные устройства","Программное обеспечение устройств","Сети","Платформа"],a:0},
{id:51,type:"s",q:"Как называется уровень, обеспечивающий взаимодействие IoT-устройств между собой и с облаком?",o:["Программное (ПО) устройств","Уровень платформы","Уровень сети (коммуникаций)","Конечные устройства"],a:2},
{id:52,type:"s",q:"Что из перечисленного является типом протокола передачи данных в IoT?",o:["FTP","TCP","NB-IoT","SMTP"],a:2},
{id:59,type:"s",q:"Какая модель данных предполагается при работе с IoT согласно содержанию дисциплины?",o:["Нет общей модели данных","Трёхуровневая модель IoT","Иерархическая модель данных","Четырёхуровневая модель данных"],a:1},
{id:2,type:"m",q:"Какие из перечисленных протоколов упоминаются в задачах дисциплины?",o:["MQTT","LoRaWAN","NB-IoT","FTP","HTTP"],a:[0,1,2]},
{id:6,type:"m",q:"Какие проблемы развития компьютерных сетей в 1960-х годах упоминаются в тексте?",o:["Несовместимость разных сетей","Низкая устойчивость сети","Высокая скорость передачи данных","Избыточное покрытие сети","Высокая стоимость передачи"],a:[0,1]},
{id:15,type:"m",q:"Какие специалисты входят в экосистему IoT согласно тексту?",o:["Инженеры встраиваемых систем","IoT-бизнес-аналитики","Сетевые инженеры","DevOps-инженеры","Аналитики данных","Химики"],a:[0,2,3,4]},
{id:23,type:"m",q:"Какие устройства в IoT обычно оснащают датчиками для сбора данных?",o:["Умный холодильник","Печатная машинка","Метеостанция","Умный фонарный столб"],a:[0,2,3]},
{id:33,type:"m",q:"Какие характеристики относятся к облачной платформе IoT?",o:["Обработка данных из облака","Первичная обработка на устройстве","Хранение и анализ больших объемов данных","Сбор данных с датчиков"],a:[0,2]},
{id:36,type:"m",q:"Какие факторы упоминаются при выборе технических решений для IoT?",o:["Надёжность","Энергоэффективность","Минимальная стоимость","Графический интерфейс"],a:[0,1,2]},
{id:45,type:"m",q:"Какие направления применения IoT упоминаются в программе?",o:["Мониторинг окружающей среды","Управление процессами","Создание компьютерных игр","Автоматизация процессов"],a:[0,1,3]},
{id:53,type:"m",q:"Что включает в себя программа дисциплины согласно документу?",o:["Лекции по архитектуре IoT","Практические занятия по программированию микроконтроллеров","Изучение общих принципов кибербезопасности","Задачи мониторинга и автоматизации"],a:[0,1,3]},
{id:57,type:"m",q:"Какие критерии перечислены для выбора IoT-решений в тексте?",o:["Энергоэффективность","Масштабируемость","Низкая стоимость","Скорость разработки"],a:[0,1,2]},
{id:10,type:"ma",q:"Установите соответствие между уровнями архитектуры IoT и их описаниями:",l:["Конечные устройства","Программное обеспечение устройств","Сети (коммуникации)","Платформа (облако)"],r:["Облачные сервисы и аналитика","Сбор и первичная обработка данных","Датчики и исполнительные механизмы","Сотовая связь, Wi-Fi, LPWAN"],a:[2,1,3,0]},
{id:12,type:"ma",q:"Установите соответствие между технологиями беспроводной связи и категориями IoT-сетей:",l:["ZigBee","Wi-Fi 802.11","LoRaWAN","NB-IoT"],r:["WPAN","LAN","WAN","LPWAN"],a:[0,1,2,3]},
{id:16,type:"ma",q:"Установите соответствие между уровнем архитектуры IoT и его основным назначением:",l:["Конечные устройства","ПО устройств","Сети (коммуникации)","Платформа (облако)"],r:["Обеспечивает взаимодействие со средой (датчики и приводы)","Управляет устройствами и собирает данные","Обеспечивает передачу данных по каналам связи","Выполняет хранение и анализ данных"],a:[0,1,2,3]},
{id:22,type:"ma",q:"Установите соответствие между типом датчика и его характеристикой:",l:["Аналоговый датчик","Цифровой датчик"],r:["Выдаёт непрерывный аналоговый сигнал","Обладает встроенным преобразователем, выдаёт дискретные данные"],a:[0,1]},
{id:34,type:"ma",q:"Установите соответствие между специалистом и его ролью в IoT:",l:["Инженер-машинист","Сетевой инженер","Data-аналитик","Физик-электронщик"],r:["Разработка механизмов и приводов","Настройка беспроводных протоколов","Обработка данных от датчиков","Создание датчиков и источников питания"],a:[0,1,2,3]},
{id:42,type:"ma",q:"Установите соответствие между компонентом IoT и его функцией:",l:["Датчик","Исполнительное устройство","Микроконтроллер","Источник питания"],r:["Преобразует физическую величину в сигнал","Оказывает физическое воздействие на среду","Обрабатывает данные и управляет устройствами","Обеспечивает энергией устройства"],a:[0,1,2,3]},
{id:46,type:"ma",q:"Установите соответствие между термином и его описанием:",l:["LPWAN","MQTT","Arduino","RFID"],r:["Низкоскоростная глобальная сеть для IoT","Лёгкий протокол обмена сообщениями в IoT","Аппаратно-программная платформа (микрокомпьютер)","Технология бесконтактной идентификации"],a:[0,1,2,3]},
{id:7,type:"o",q:"Расположите в хронологическом порядке следующие события:",i:["Создание агентства ARPA","Предложение Ликлайдером концепции глобальной сети","Разработка технологии Ethernet"],a:[0,1,2]},
{id:13,type:"o",q:"Упорядочите этапы эволюции технологий IoT:",i:["Появление сети ARPANET","Массовое распространение Wi-Fi","Внедрение технологии LoRaWAN"],a:[0,1,2]},
{id:43,type:"o",q:"Расположите этапы обработки данных в IoT-устройстве в правильной последовательности:",i:["Сбор данных датчиком","Первичная обработка данных на устройстве","Передача данных в облако","Анализ данных в облачной платформе"],a:[0,1,2,3]},
{id:55,type:"o",q:"Упорядочите этапы работы IoT-устройства:",i:["Сбор данных датчиком","Первичная обработка на устройстве","Передача данных по сети","Анализ данных в облаке"],a:[0,1,2,3]},
{id:19,type:"sh",q:"Что необходимо для преобразования аналогового сигнала датчика в цифровой вид?",a:"Внешний (аналогово-цифровой) преобразователь"},
{id:21,type:"sh",q:"Укажите одну из мер безопасности, упомянутых в тексте:",a:"Использование защищённых протоколов (TLS, DTLS)"},
{id:24,type:"sh",q:"Укажите один пример микротехнологии, связанной с IoT:",a:"Микроэлектромеханические системы (МЭМС)"},
{id:26,type:"sh",q:"Что включает уровень «Конечные устройства» в архитектуре IoT?",a:"Объекты с датчиками и приводами, образующие «вещи»"},
{id:32,type:"sh",q:"Как называются сети с низкой скоростью передачи, предназначенные для IoT?",a:"LPWAN (низкоскоростная глобальная сеть)"},
{id:37,type:"sh",q:"Как называется уровень в IoT, отвечающий за хранение и обработку данных централизованно?",a:"Облачная платформа (облачные вычисления)"},
{id:39,type:"sh",q:"Укажите одно из направлений применения IoT, упомянутое в программе:",a:"Автоматизация производственных и мониторинговых процессов"},
{id:49,type:"sh",q:"Приведите пример среды, в которой может работать микроконтроллер:",a:"RTOS (операционная система реального времени)"},
{id:54,type:"sh",q:"Назовите один компонент элементной базы IoT, ответственный за накопление энергии:",a:"Аккумулятор (батарея)"},
{id:58,type:"sh",q:"Что позволяет интеграция периферийных устройств в IoT-систему?",a:"Сбор данных с датчиков"},
{id:60,type:"sh",q:"Перечислите один из ключевых результатов обучения по дисциплине:",a:"Знание архитектуры IoT-систем"},
];

const DEFAULT={viewedLectures:[],completedLabs:[],theme:"light"};
function loadState(){
  try{
    const raw=localStorage.getItem("iot_course_state");
    if(raw){const s=JSON.parse(raw);return{viewedLectures:s.viewedLectures||[],completedLabs:s.completedLabs||[],theme:s.theme||"light"}}
  }catch(e){}
  return{...DEFAULT};
}
function saveState(){
  try{localStorage.setItem("iot_course_state",JSON.stringify(state))}catch(e){}
}
let state=loadState();

// Theme
function applyTheme(t){
  document.documentElement.classList.toggle("dark",t==="dark");
  document.getElementById("themeToggle").textContent=t==="dark"?"☀️":"🌙";
}
applyTheme(state.theme);
document.getElementById("themeToggle").addEventListener("click",()=>{
  state.theme=state.theme==="dark"?"light":"dark";
  applyTheme(state.theme);saveState();updateProgress();
});

// Toast
let toastTimer=null;
function showToast(msg){
  const t=document.getElementById("toast");
  t.textContent=msg;t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>t.classList.remove("show"),2500);
}

// Navigation
const SECTIONS=["home","lectures","labs","viewer","test"];
function showSection(name,elem){
  document.querySelectorAll(".section").forEach(s=>s.classList.remove("active"));
  document.querySelectorAll(".nav-center a").forEach(a=>a.classList.remove("active"));
  const sec=document.getElementById("sec-"+name);
  if(sec)sec.classList.add("active");
  const navLink=document.querySelector(`.nav-center a[data-nav="${name}"]`);
  if(navLink)navLink.classList.add("active");
  const hamburger=document.getElementById("hamburger");
  const navCenter=document.getElementById("navCenter");
  hamburger.classList.remove("open");navCenter.classList.remove("open");
  window.scrollTo({top:0,behavior:"smooth"});
}
document.querySelectorAll(".nav-center a, .nav-logo").forEach(a=>{
  a.addEventListener("click",e=>{
    e.preventDefault();
    const nav=a.dataset.nav||"home";
    if(nav==="test"){showTestSection();return;}
    showSection(nav);
  });
});

// Hamburger
document.getElementById("hamburger").addEventListener("click",()=>{
  document.getElementById("navCenter").classList.toggle("open");
  document.getElementById("hamburger").classList.toggle("open");
});

// Hero counter animation
function animateCounters(){
  document.querySelectorAll(".stat-num[data-count]").forEach(el=>{
    const target=parseInt(el.dataset.count);
    const dur=1500;const start=performance.now();
    function tick(now){
      const t=Math.min((now-start)/dur,1);
      el.textContent=Math.floor(t*target);
      if(t<1)requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}
document.getElementById("startBtn").addEventListener("click",()=>{
  showSection("lectures");updateProgress();
});

// Progress
function calcProgress(){
  const lViewed=state.viewedLectures.length;
  const lDone=state.completedLabs.length;
  const total=15; // 7 lectures + 8 labs
  return Math.round(((lViewed+lDone)/total)*100);
}
function updateProgress(){
  const p=calcProgress();
  document.getElementById("progressFill").style.width=p+"%";
  document.getElementById("progressText").textContent=p+"%";
  document.getElementById("lockProgressFill").style.width=p+"%";
  document.getElementById("lockProgressText").textContent=p+"%";
  const allDone=state.viewedLectures.length===7&&state.completedLabs.length===8;
  document.getElementById("nav-test").style.opacity=allDone?"1":"0.5";
}
updateProgress();

// Generate cards
function genCard(item,type,done){
  const isLec=type==="lecture";
  const doneKey=isLec?"viewedLectures":"completedLabs";
  const doneArr=isLec?state.viewedLectures:state.completedLabs;
  const isDone=doneArr.includes(item.id);
  const icon=isLec?"📖":"🔧";
  return '<div class="card'+(isDone?" done":"")+'" data-id="'+item.id+'" data-type="'+type+'">'+
    '<div class="card-icon">'+icon+'</div>'+
    '<div class="card-num">'+(isLec?"Лекция ":"Лаб. ")+item.id+'</div>'+
    '<div class="card-title">'+item.title+'</div>'+
    '<div class="card-desc">'+item.desc+'</div>'+
    '<div class="card-status" data-action="toggle">'+(isDone?"✅":"⭕")+'</div></div>';
}
function renderCards(){
  const lg=document.getElementById("lecturesGrid");
  lg.innerHTML=LECTURES.map(l=>genCard(l,"lecture")).join("");
  const lb=document.getElementById("labsGrid");
  lb.innerHTML=LABS.map(l=>genCard(l,"lab")).join("");
}
renderCards();

// Card click handlers
document.addEventListener("click",e=>{
  const status=e.target.closest(".card-status");
  if(status){
    e.stopPropagation();
    const card=status.closest(".card");
    const id=parseInt(card.dataset.id);
    const type=card.dataset.type;
    const isLec=type==="lecture";
    const key=isLec?"viewedLectures":"completedLabs";
    const arr=isLec?state.viewedLectures:state.completedLabs;
    const idx=arr.indexOf(id);
    if(idx>-1){arr.splice(idx,1)}else{arr.push(id)}
    saveState();updateProgress();renderCards();
    const msg=idx>-1?"Снято с отметки":"Отмечено как пройденное";
    showToast(msg);
    return;
  }
  const card=e.target.closest(".card");
  if(card){
    const id=parseInt(card.dataset.id);
    const type=card.dataset.type;
    openViewer(id,type);
  }
});

// PDF Viewer
const FLOW_ORDER=[];
LECTURES.forEach(l=>{FLOW_ORDER.push({id:l.id,type:"lecture",title:l.title,file:l.file})});
LABS.forEach(l=>{FLOW_ORDER.push({id:l.id,type:"lab",title:l.title,file:l.file})});
// Sort flow: L1,L1b1,L2,L2b2,...,L7,L7b7,L8b8
const sortedFlow=[];
let li=0,bi=0;
while(li<7||bi<8){
  if(li<7){sortedFlow.push(FLOW_ORDER[li]);li++}
  if(bi<8){sortedFlow.push(FLOW_ORDER[7+bi]);bi++}
}
let currentViewerIdx=-1;

function openViewer(id,type){
  // Find in flow
  let idx=-1;
  for(let i=0;i<sortedFlow.length;i++){
    const f=sortedFlow[i];
    if(f.type===type&&f.id===id){idx=i;break}
  }
  if(idx===-1){showToast("Файл не найден");return}
  currentViewerIdx=idx;
  showSection("viewer");
  loadPdf(idx);
}

function loadPdf(idx){
  const item=sortedFlow[idx];
  if(!item){showToast("Файл не найден");return}
  document.getElementById("viewerTitle").textContent=item.title;
  document.getElementById("viewerBreadcrumb").textContent=(item.type==="lecture"?"Лекция ":"Лаб. ")+item.id;
  document.getElementById("viewerOpen").onclick=(e)=>{e.preventDefault();window.open(item.file,"_blank")};

  // Auto-mark as viewed
  if(item.type==="lecture"&&!state.viewedLectures.includes(item.id)){
    state.viewedLectures.push(item.id);saveState();updateProgress();renderCards();
  }
  if(item.type==="lab"&&!state.completedLabs.includes(item.id)){
    state.completedLabs.push(item.id);saveState();updateProgress();renderCards();
  }

  const container=document.getElementById("viewerPages");
  container.innerHTML="";
  const loading=document.getElementById("viewerLoading");
  loading.style.display="flex";

  const ctx=document.getElementById("viewerContainer");
  ctx.style.minHeight="400px";

  loading.style.display="none";
  ctx.style.minHeight="auto";
  const embed=document.createElement("embed");
  embed.src=item.file;
  embed.type="application/pdf";
  embed.style.width="100%";
  embed.style.height="80vh";
  embed.style.borderRadius="8px";
  container.appendChild(embed);
  embed.onerror=function(){
    container.innerHTML='<p style="padding:40px;text-align:center;color:var(--text2)">Не удалось отобразить PDF. <a href="'+item.file+'" target="_blank">Открыть в новой вкладке</a></p>';
  };
  updateViewerPosition();
  renderViewerSidebar();
}

function renderViewerSidebar(){
  const currentItem=sortedFlow[currentViewerIdx];
  // Lectures sidebar
  const lectList=document.getElementById("sidebarLectureList");
  lectList.innerHTML="";
  LECTURES.forEach(l=>{
    const el=document.createElement("div");
    el.className="sidebar-item"+(currentItem&&currentItem.type==="lecture"&&currentItem.id===l.id?" active":"");
    el.textContent="\u041B\u0435\u043A\u0446\u0438\u044F "+l.id+". "+l.title;
    el.addEventListener("click",()=>openViewer(l.id,"lecture"));
    lectList.appendChild(el);
  });
  // Labs sidebar
  const labList=document.getElementById("sidebarLabList");
  labList.innerHTML="";
  LABS.forEach(l=>{
    const el=document.createElement("div");
    el.className="sidebar-item"+(currentItem&&currentItem.type==="lab"&&currentItem.id===l.id?" active":"");
    el.textContent="\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430 "+l.id+". "+l.title;
    el.addEventListener("click",()=>openViewer(l.id,"lab"));
    labList.appendChild(el);
  });
}

function updateViewerPosition(){
  const item=sortedFlow[currentViewerIdx];
  if(!item){document.getElementById("viewerPosition").textContent="";return}
  document.getElementById("viewerPosition").textContent="";
  document.getElementById("viewerPrev").style.display=currentViewerIdx>0?"":"none";
  document.getElementById("viewerNext").style.display=currentViewerIdx<sortedFlow.length-1?"":"none";
}

document.getElementById("viewerBack").addEventListener("click",()=>{
  const item=sortedFlow[currentViewerIdx];
  if(item&&item.type==="lecture"){showSection("lectures")}
  else{showSection("labs")}
});

document.getElementById("viewerPrev").addEventListener("click",()=>{
  if(currentViewerIdx>0){loadPdf(--currentViewerIdx);window.scrollTo({top:0,behavior:"smooth"})}
});
document.getElementById("viewerNext").addEventListener("click",()=>{
  if(currentViewerIdx<sortedFlow.length-1){loadPdf(++currentViewerIdx);window.scrollTo({top:0,behavior:"smooth"})}
});

document.querySelectorAll(".sidebar-toggle").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const side=document.getElementById(btn.dataset.sidebar);
    side.classList.toggle("collapsed");
    btn.textContent=side.classList.contains("collapsed")?"▶":"◀";
  });
});

// Test System
let testQuestions=[];
let testAnswers={};
let testTimerInterval=null;
let testTimeLeft=45*60;
let testCurrentIdx=0;
const TEST_COUNT=30;

function showTestSection(){
  const allDone=state.viewedLectures.length===7&&state.completedLabs.length===8;
  document.getElementById("testLocked").style.display=allDone?"none":"block";
  document.getElementById("testReady").style.display=allDone?"block":"none";
  document.getElementById("testActive").style.display="none";
  document.getElementById("testResults").style.display="none";
  updateProgress();
  showSection("test");
}

// Lock progress animation
function animLockProgress(){
  const p=calcProgress();
  const fill=document.getElementById("lockProgressFill");
  fill.style.transition="none";
  fill.style.width="0%";
  setTimeout(()=>{
    fill.style.transition="width 1.2s cubic-bezier(.22,1,.36,1)";
    fill.style.width=p+"%";
  },100);
}

document.getElementById("testStartBtn").addEventListener("click",startTest);
document.getElementById("testSubmitBtn").addEventListener("click",submitTest);
document.getElementById("testRetryBtn").addEventListener("click",()=>{
  document.getElementById("testResults").style.display="none";
  document.getElementById("testReview").style.display="none";
  document.getElementById("reviewList").innerHTML="";
  testResultsData=null;
  showTestSection();
});

function startTest(){
  // Pick 30 random questions
  const shuffled=[...ALL_QUESTIONS].sort(()=>Math.random()-0.5);
  testQuestions=shuffled.slice(0,TEST_COUNT);
  testAnswers={};
  testTimeLeft=45*60;
  testCurrentIdx=0;
  document.getElementById("testReady").style.display="none";
  document.getElementById("testActive").style.display="block";
  document.getElementById("testResults").style.display="none";
  showTestQuestion(0);
  startTimer();
  updateTestDots();
}

function startTimer(){
  clearInterval(testTimerInterval);
  updateTimerDisplay();
  testTimerInterval=setInterval(()=>{
    testTimeLeft--;
    updateTimerDisplay();
    if(testTimeLeft<=0){clearInterval(testTimerInterval);submitTest();}
  },1000);
}

function updateTimerDisplay(){
  const m=Math.floor(testTimeLeft/60);
  const s=testTimeLeft%60;
  document.getElementById("testTimer").textContent=String(m).padStart(2,"0")+":"+String(s).padStart(2,"0");
  // Update ring
  const total=45*60;
  const pct=testTimeLeft/total;
  const circ=163.36;
  const fg=document.getElementById("timerFg");
  fg.style.strokeDashoffset=circ*(1-pct);
  fg.classList.toggle("warning",testTimeLeft<300);
}

function showTestQuestion(idx){
  testCurrentIdx=idx;
  const q=testQuestions[idx];
  if(!q)return;
  // Hide all question type containers
  ["testOptions","testMatching","testOrdering","testShort"].forEach(id=>{
    document.getElementById(id).style.display="none";
  });
  // Type label
  const typeLabels={s:"Один вариант",m:"Несколько вариантов",ma:"Сопоставление",o:"Порядок",sh:"Краткий ответ"};
  document.getElementById("testType").textContent=typeLabels[q.type]||"Вопрос";
  document.getElementById("testQuestion").textContent=(idx+1)+". "+q.q;
  document.getElementById("testExtra").innerHTML="";

  // Progress
  const answered=Object.keys(testAnswers).length;
  document.getElementById("testProgressFill").style.width=((idx+1)/TEST_COUNT*100)+"%";
  document.getElementById("testProgressText").textContent="Вопрос "+(idx+1)+" из "+TEST_COUNT;

  // Nav buttons
  document.getElementById("testPrevBtn").style.display=idx>0?"":"none";
  document.getElementById("testNextBtn").textContent=idx<TEST_COUNT-1?"Далее →":"Завершить →";
  updateTestDots();

  if(q.type==="s"||q.type==="m"){
    showChoiceQuestion(q);
  } else if(q.type==="ma"){
    showMatchingQuestion(q);
  } else if(q.type==="o"){
    showOrderingQuestion(q);
  } else if(q.type==="sh"){
    showShortQuestion(q);
  }
}

// Choice (single/multiple)
function showChoiceQuestion(q){
  const container=document.getElementById("testOptions");
  container.style.display="block";
  const saved=testAnswers[q.id]||(q.type==="m"?[]:null);
  container.innerHTML=q.o.map((opt,i)=>{
    const label=String.fromCharCode(97+i);
    const sel=q.type==="m"?(saved&&saved.includes(i)?"selected":""):(saved===i?"selected":"");
    return '<div class="test-opt '+sel+'" data-idx="'+i+'"><span class="opt-label">'+label+')</span><span>'+opt+'</span></div>';
  }).join("");
  container.querySelectorAll(".test-opt").forEach(el=>{
    el.addEventListener("click",()=>{
      const i=parseInt(el.dataset.idx);
      if(q.type==="m"){
        el.classList.toggle("selected");
        const arr=testAnswers[q.id]||[];
        const idx=arr.indexOf(i);
        if(idx>-1){arr.splice(idx,1)}else{arr.push(i)}
        testAnswers[q.id]=arr;
        // Re-sort
        testAnswers[q.id].sort((a,b)=>a-b);
      } else {
        container.querySelectorAll(".test-opt").forEach(o=>o.classList.remove("selected"));
        el.classList.add("selected");
        testAnswers[q.id]=i;
      }
      updateTestDots();
    });
  });
}

// Matching
function showMatchingQuestion(q){
  const container=document.getElementById("testMatching");
  container.style.display="block";
  const left=document.getElementById("matchingLeft");
  const right=document.getElementById("matchingRight");
  const pairs=document.getElementById("matchingPairs");
  const saved=testAnswers[q.id]||[];
  left.innerHTML=q.l.map((txt,i)=>{
    const paired=saved[i]!==undefined;
    return '<div class="match-item'+(paired?" paired":"")+'" data-side="l" data-idx="'+i+'">'+txt+'</div>';
  }).join("");
  right.innerHTML=q.r.map((txt,i)=>{
    const used=Object.values(saved).includes(i);
    return '<div class="match-item'+(used?" used":"")+'" data-side="r" data-idx="'+i+'">'+txt+'</div>';
  }).join("");
  pairs.innerHTML=saved.map((ri,li)=>{
    if(ri===undefined)return "";
    return '<span class="match-pair">'+q.l[li]+" → "+q.r[ri]+' <span style="cursor:pointer;opacity:.6" data-unpair="'+li+'">✕</span></span>';
  }).join("");

  let selecting=null;
  container.querySelectorAll(".match-item[data-side]").forEach(el=>{
    el.addEventListener("click",()=>{
      const side=el.dataset.side;
      const i=parseInt(el.dataset.idx);
      if(side==="l"){
        if(saved[i]!==undefined)return; // already paired
        container.querySelectorAll(".match-item.active").forEach(e=>e.classList.remove("active"));
        el.classList.add("active");
        selecting=i;
      } else {
        if(selecting===null)return;
        if(Object.values(saved).includes(i))return; // already used
        const arr=testAnswers[q.id]||[];
        arr[selecting]=i;
        testAnswers[q.id]=arr;
        selecting=null;
        showMatchingQuestion(q);
      }
      updateTestDots();
    });
  });
  container.querySelectorAll("[data-unpair]").forEach(el=>{
    el.addEventListener("click",e=>{
      e.stopPropagation();
      const li=parseInt(el.dataset.unpair);
      const arr=testAnswers[q.id]||[];
      delete arr[li];
      testAnswers[q.id]=arr;
      showMatchingQuestion(q);
      updateTestDots();
    });
  });
}

// Ordering
function showOrderingQuestion(q){
  const container=document.getElementById("testOrdering");
  container.style.display="block";
  const list=document.getElementById("orderingList");
  const saved=testAnswers[q.id]||null;
  const items=saved?[...saved]:q.i.map((_,i)=>i);
  renderOrderingList(list,q,items);

  // Click to move up
  list.querySelectorAll(".order-item").forEach(el=>{
    el.addEventListener("click",(e)=>{
      if(e.target.closest(".order-handle"))return;
      const pos=parseInt(el.dataset.pos);
      if(pos===0)return;
      const arr=testAnswers[q.id]||q.i.map((_,i)=>i);
      [arr[pos-1],arr[pos]]=[arr[pos],arr[pos-1]];
      testAnswers[q.id]=arr;
      showOrderingQuestion(q);
      updateTestDots();
    });
  });

  // Drag and drop
  let dragEl=null;
  list.addEventListener("dragstart",(e)=>{
    dragEl=e.target.closest(".order-item");
    if(!dragEl)return;
    dragEl.classList.add("dragging");
    e.dataTransfer.effectAllowed="move";
    e.dataTransfer.setData("text/plain",dragEl.dataset.pos);
  });
  list.addEventListener("dragend",()=>{
    list.querySelectorAll(".order-item").forEach(el=>el.classList.remove("dragging","drag-over"));
    dragEl=null;
  });
  list.addEventListener("dragover",(e)=>{
    e.preventDefault();
    const target=e.target.closest(".order-item");
    if(!target||target===dragEl)return;
    list.querySelectorAll(".order-item").forEach(el=>el.classList.remove("drag-over"));
    target.classList.add("drag-over");
  });
  list.addEventListener("dragleave",(e)=>{
    const target=e.target.closest(".order-item");
    if(target)target.classList.remove("drag-over");
  });
  list.addEventListener("drop",(e)=>{
    e.preventDefault();
    const target=e.target.closest(".order-item");
    if(!target||target===dragEl)return;
    const fromPos=parseInt(dragEl.dataset.pos);
    const toPos=parseInt(target.dataset.pos);
    const arr=testAnswers[q.id]||q.i.map((_,i)=>i);
    const [moved]=arr.splice(fromPos,1);
    arr.splice(toPos,0,moved);
    testAnswers[q.id]=arr;
    showOrderingQuestion(q);
    updateTestDots();
  });
}

function renderOrderingList(list,q,items){
  list.innerHTML=items.map((idx,i)=>{
    return '<div class="order-item" data-pos="'+i+'" draggable="true"><span class="order-handle">⠿</span><span class="order-idx">'+(i+1)+'.</span><span>'+q.i[idx]+'</span></div>';
  }).join("");
}

// Short answer
function showShortQuestion(q){
  const container=document.getElementById("testShort");
  container.style.display="block";
  const input=document.getElementById("shortInput");
  input.value=testAnswers[q.id]||"";
  input.oninput=()=>{
    testAnswers[q.id]=input.value.trim();
    updateTestDots();
  };
}

// Nav
document.getElementById("testPrevBtn").addEventListener("click",()=>{
  if(testCurrentIdx>0)showTestQuestion(testCurrentIdx-1);
});
document.getElementById("testNextBtn").addEventListener("click",()=>{
  if(testCurrentIdx<TEST_COUNT-1){
    showTestQuestion(testCurrentIdx+1);
  } else {
    submitTest();
  }
});

function updateTestDots(){
  const container=document.getElementById("testDots");
  container.innerHTML=testQuestions.map((q,i)=>{
    const answered=testAnswers[q.id]!==undefined&&testAnswers[q.id]!==null&&testAnswers[q.id]!=="";
    const cls=i===testCurrentIdx?"active":answered?"answered":"";
    return '<span class="test-dot '+cls+'" data-idx="'+i+'"></span>';
  }).join("");
  container.querySelectorAll(".test-dot").forEach(el=>{
    el.addEventListener("click",()=>showTestQuestion(parseInt(el.dataset.idx)));
  });
}

let testResultsData=null;

function checkAnswer(q,user){
  if(user===undefined||user===null||user==="")return false;
  if(q.type==="s")return user===q.a;
  if(q.type==="m")return JSON.stringify([...user].sort())===JSON.stringify([...q.a].sort());
  if(q.type==="ma"){
    const cleanUser=[];
    for(let li=0;li<q.l.length;li++)cleanUser.push(user[li]!==undefined?user[li]:-1);
    return JSON.stringify(cleanUser)===JSON.stringify([...q.a]);
  }
  if(q.type==="o")return JSON.stringify(user)===JSON.stringify(q.a);
  if(q.type==="sh"){
    const ua=user.toLowerCase().trim().replace(/[^а-яa-z0-9\s]/gi,"");
    const aa=q.a.toLowerCase().trim().replace(/[^а-яa-z0-9\s]/gi,"");
    const keywords=aa.split(/[\s,]+/).filter(w=>w.length>2);
    const matchCount=keywords.filter(k=>ua.includes(k)).length;
    return matchCount>=Math.max(1,keywords.length-1);
  }
  return false;
}

function formatUserAnswer(q,user){
  if(user===undefined||user===null||user==="")return "<em>нет ответа</em>";
  if(q.type==="s")return q.o[user];
  if(q.type==="m")return user.map(i=>q.o[i]).join(", ");
  if(q.type==="ma")return q.l.map((l,i)=>user[i]!==undefined?l+" \u2192 "+q.r[user[i]]:l+" \u2192 ?").join("; ");
  if(q.type==="o")return q.i.map((_,i)=>q.i[user[i]]).join(" \u2192 ");
  if(q.type==="sh")return user;
  return String(user);
}

function formatCorrectAnswer(q){
  if(q.type==="s")return q.o[q.a];
  if(q.type==="m")return q.a.map(i=>q.o[i]).join(", ");
  if(q.type==="ma")return q.l.map((l,i)=>l+" \u2192 "+q.r[q.a[i]]).join("; ");
  if(q.type==="o")return q.a.map(i=>q.i[i]).join(" \u2192 ");
  if(q.type==="sh")return q.a;
  return String(q.a);
}

function submitTest(){
  clearInterval(testTimerInterval);
  const timeTaken=45*60-testTimeLeft;
  let correct=0;
  const total=testQuestions.length;
  const results=[];

  testQuestions.forEach(q=>{
    const user=testAnswers[q.id];
    const isCorrect=checkAnswer(q,user);
    if(isCorrect)correct++;
    results.push({q,user,isCorrect});
  });

  testResultsData=results;

  const wrong=total-correct;
  const pct=Math.round((correct/total)*100);
  const mins=Math.floor(timeTaken/60);
  const secs=timeTaken%60;

  document.getElementById("testActive").style.display="none";
  document.getElementById("testResults").style.display="block";
  document.getElementById("testReview").style.display="none";
  document.getElementById("reviewList").innerHTML="";
  document.getElementById("testReviewToggle").textContent="\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0440\u0430\u0437\u0431\u043E\u0440 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 \u25BE";
  document.getElementById("resultCorrect").textContent=correct;
  document.getElementById("resultWrong").textContent=wrong;
  document.getElementById("resultPercent").textContent=pct+"%";
  document.getElementById("resultTime").textContent=mins+":"+String(secs).padStart(2,"0");
  document.getElementById("resultScore").textContent="\u041E\u0446\u0435\u043D\u043A\u0430: "+correct+" / "+total;

  // Animate results
  document.querySelectorAll(".result-num").forEach(el=>{
    const val=el.textContent;
    if(val.includes("%")){
      const target=parseInt(val);
      el.textContent="0%";
      animNum(el,target,"%",1000);
    } else if(val.includes(":")){
      // skip time
    } else {
      const target=parseInt(val);
      el.textContent="0";
      animNum(el,target,"",800);
    }
  });
}

document.getElementById("testReviewToggle").addEventListener("click",function(){
  const rev=document.getElementById("testReview");
  if(rev.style.display==="block"){
    rev.style.display="none";
    this.textContent="\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0440\u0430\u0437\u0431\u043E\u0440 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 \u25BE";
  } else {
    if(!document.getElementById("reviewList").hasChildNodes())renderReview();
    rev.style.display="block";
    this.textContent="\u0421\u043A\u0440\u044B\u0442\u044C \u0440\u0430\u0437\u0431\u043E\u0440 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 \u25B2";
  }
});

function renderReview(){
  const list=document.getElementById("reviewList");
  const typeLabels={s:"\u041E\u0434\u0438\u043D \u0432\u0430\u0440\u0438\u0430\u043D\u0442",m:"\u041D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u043E\u0432",ma:"\u0421\u043E\u043F\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435",o:"\u041F\u043E\u0440\u044F\u0434\u043E\u043A",sh:"\u041A\u0440\u0430\u0442\u043A\u0438\u0439 \u043E\u0442\u0432\u0435\u0442"};
  list.innerHTML=testResultsData.map((r,i)=>{
    const userStr=formatUserAnswer(r.q,r.user);
    const correctStr=formatCorrectAnswer(r.q);
    const cls=r.isCorrect?"correct":"wrong";
    const icon=r.isCorrect?"\u2714":"\u2718";
    const details=r.isCorrect?'<div class="review-answer correct">\u0412\u0430\u0448 \u043E\u0442\u0432\u0435\u0442: '+userStr+'</div>'
      :'<div class="review-answer wrong">\u0412\u0430\u0448 \u043E\u0442\u0432\u0435\u0442: '+userStr+'</div><div class="review-answer correct">\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0442: '+correctStr+'</div>';
    return '<div class="review-item '+cls+'"><div class="review-header"><span class="review-num">'+(i+1)+'.</span><span class="review-type">'+typeLabels[r.q.type]+'</span><span class="review-status">'+icon+'</span></div><div class="review-question">'+r.q.q+'</div>'+details+'</div>';
  }).join("");
}

function animNum(el,target,suffix,dur){
  const start=performance.now();
  function tick(now){
    const t=Math.min((now-start)/dur,1);
    el.textContent=Math.floor(t*target)+suffix;
    if(t<1)requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

// Init
function init(){
  animateCounters();
  // Check if test should be auto-shown
  updateProgress();
  // Listen for section visibility to trigger lock animation
  const observer=new MutationObserver(()=>{
    if(document.getElementById("sec-test").classList.contains("active")){
      animLockProgress();
    }
  });
  observer.observe(document.getElementById("sec-test"),{attributes:true,attributeFilter:["class"]});
}

document.addEventListener("DOMContentLoaded",init);
// Also run init if DOM already loaded
if(document.readyState!=="loading")init();
