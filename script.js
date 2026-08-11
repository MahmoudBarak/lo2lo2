const $ = (s) => document.querySelector(s);

const startBtn = $("#startBtn");
const welcome = $("#welcome");
const envelopePage = $("#envelopePage");
const envelope = $("#envelope");
const letterPage = $("#letterPage");
const gallery = $("#gallery");
const end = $("#end");
const typing = $("#typing");
const music = $("#music");
const hearts = $("#hearts");

const message = `أنا آسف لو كنت قولت كلام غلط...

بس أنا قولت من دافع حبي وغيرتي عليكي.

حقك عليا.

يمكن طريقتي كانت غلط، بس عمري ما كان قصدي أزعلك.

بموت فيكي وبعشقك ❤️❤️`;

let started = false;

function startMusic(){
  music.volume = 0.45;
  const p = music.play();
  if(p) p.catch(() => {
    // بعض المتصفحات قد تمنع التشغيل، لكن هنا الضغط كان من المستخدم.
  });
}

startBtn.addEventListener("click", () => {
  startMusic(); // يبدأ مع ضغطة "افتحي الرسالة"
  welcome.classList.add("hidden");
  envelopePage.classList.remove("hidden");
});

function openEnvelope(){
  if(started) return;
  started = true;
  envelope.classList.add("open");

  setTimeout(() => {
    envelopePage.classList.add("hidden");
    letterPage.classList.remove("hidden");
    gallery.classList.remove("hidden");
    end.classList.remove("hidden");
    typeMessage();
    window.scrollTo({top:0, behavior:"smooth"});
  }, 900);
}

envelope.addEventListener("click", openEnvelope);
envelope.addEventListener("keydown", e => {
  if(e.key === "Enter" || e.key === " ") openEnvelope();
});

let i = 0;
function typeMessage(){
  if(i >= message.length) return;
  typing.textContent += message[i++];
  setTimeout(typeMessage, 48);
}

function createHeart(){
  const h = document.createElement("span");
  h.className = "float-heart";
  h.textContent = Math.random() > .25 ? "❤" : "♥";
  h.style.left = `${Math.random()*100}vw`;
  h.style.fontSize = `${14 + Math.random()*20}px`;
  h.style.animationDuration = `${6 + Math.random()*5}s`;
  hearts.appendChild(h);
  setTimeout(() => h.remove(), 12000);
}
setInterval(createHeart, 500);

// سحب الصور باللمس يعمل تلقائيًا من المتصفح.
// التمرير التلقائي متوقف حتى تفضل الصور مريحة على الموبايل.
