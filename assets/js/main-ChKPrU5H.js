(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();var y=()=>{const e=document.querySelector(".header__burger"),r=document.querySelector(".header__nav"),o=document.querySelectorAll(".nav__link, .header__btn");if(!e||!r)return;const t=(s=!1)=>{const a=s?!1:!r.classList.contains("is-open");e.classList.toggle("is-open",a),r.classList.toggle("is-open",a),document.body.classList.toggle("disable-scroll",a),e.setAttribute("aria-expanded",String(a))};e.addEventListener("click",()=>t()),o.forEach(s=>{s.addEventListener("click",()=>t(!0))}),document.addEventListener("keydown",s=>{s.key==="Escape"&&r.classList.contains("is-open")&&t(!0)}),window.addEventListener("resize",()=>{window.innerWidth>992&&r.classList.contains("is-open")&&t(!0)})},_=()=>{const e=document.querySelector("[data-trainers-list]"),r=document.querySelector("[data-trainers-prev]"),o=document.querySelector("[data-trainers-next]"),t=document.querySelector("[data-trainers-scrollbar]"),s=document.querySelector("[data-trainers-drag]");if(!e||!r||!o)return;const a=()=>{const i=e.scrollWidth-e.clientWidth,d=e.scrollLeft;if(r.disabled=d<=2,o.disabled=d>=i-2,t&&s&&i>0){const l=e.clientWidth/e.scrollWidth,b=Math.max(l*100,20),m=d/i,g=t.clientWidth-t.clientWidth*b/100;s.style.width=`${b}%`,s.style.transform=`translateX(${m*g}px)`}},n=()=>{const i=e.querySelector(".trainers__item"),d=parseFloat(getComputedStyle(e).gap)||0;return i?i.offsetWidth+d:300};r.addEventListener("click",()=>{e.scrollBy({left:-n(),behavior:"smooth"})}),o.addEventListener("click",()=>{e.scrollBy({left:n(),behavior:"smooth"})}),e.addEventListener("scroll",a),window.addEventListener("resize",a),a()},E=()=>{const e=document.querySelectorAll("[data-modal-target]"),r=document.querySelectorAll("[data-modal]");if(!r.length)return;const o=()=>{r.forEach(t=>t.classList.remove("is-open")),document.body.classList.remove("disable-scroll")};e.forEach(t=>{t.addEventListener("click",()=>{const s=t.dataset.modalTarget,a=document.querySelector(`[data-modal="${s}"]`);a&&(a.classList.add("is-open"),document.body.classList.add("disable-scroll"))})}),r.forEach(t=>{t.querySelector("[data-modal-close]")?.addEventListener("click",o),t.addEventListener("click",l=>{l.target===t&&o()});const s=t.querySelectorAll("[data-tab-btn]"),a=t.querySelectorAll("[data-tab-panel]"),n=t.querySelector("[data-tabs-trigger]"),i=t.querySelector("[data-tabs-current]"),d=t.querySelector(".tabs__nav");n?.addEventListener("click",()=>{n.classList.toggle("is-open"),d?.classList.toggle("is-dropdown-open")}),s.forEach(l=>{l.addEventListener("click",()=>{if(l.disabled)return;const b=l.dataset.tabBtn;s.forEach(m=>m.classList.remove("is-active")),a.forEach(m=>m.classList.remove("is-active")),l.classList.add("is-active"),t.querySelector(`[data-tab-panel="${b}"]`)?.classList.add("is-active"),i&&(i.textContent=l.textContent.trim()),n?.classList.remove("is-open"),d?.classList.remove("is-dropdown-open")})})}),document.addEventListener("keydown",t=>{t.key==="Escape"&&o()})},S={"trainer-1":{name:"Ирина Лайм",post:"преподаватель по робототехнике",img:"src/assets/images/trainer-1.jpg",socials:{facebook:"https://facebook.com",instagram:"https://instagram.com"},tabs:{education:`
        <p class="tabs__text">
          Сентябрь 2005 — Июнь 2010<br>
          Университет ИТМО<br>
          Факультет: Систем управления и робототехники<br>
          Специальность: Робототехника и мехатроника<br>
          Форма обучения: Очная
        </p>
        <h4 class="tabs__subtitle">Курсы и тренинги</h4>
        <p class="tabs__text">
          Март 2019 — Май 2019<br>
          Повышение квалификации «Методика преподавания образовательной робототехники»
        </p>
      `,experience:`
        <p class="tabs__text">
          Более 8 лет преподавания робототехники и конструирования для детей начальной школы. Руководитель кружка юных инженеров.
        </p>
      `,awards:`
        <p class="tabs__text">
          Победитель всероссийского конкурса педагогов дополнительного образования «Сердце отдаю детям» (2021).
        </p>
      `}},"trainer-2":{name:"Марина Орлова",post:"преподаватель по робототехнике",img:"src/assets/images/trainer-2.jpg",socials:{facebook:"https://facebook.com",instagram:"https://instagram.com"},tabs:{education:`
        <p class="tabs__text">
          Сентябрь 1995 — Июнь 2000<br>
          Санкт-Петербургский политехнический университет Петра Великого<br>
          Факультет: Компьютерных наук и технологий<br>
          Специальность: Математика и компьютерные науки<br>
          Форма обучения: Очная
        </p>
        <h4 class="tabs__subtitle">Курсы и тренинги</h4>
        <p class="tabs__text">
          Ноябрь 2020 — Февраль 2021<br>
          Программа дополнительного образования «3D Моделирование»<br>
          Место проведения: Институт дополнительного образования «Политех»
        </p>
      `,experience:`
        <p class="tabs__text">
          Преподаватель высшей категории. Стаж работы с детьми младшего школьного возраста — 12 лет.
        </p>
      `,awards:null}},"trainer-3":{name:"Максим Петров",post:"преподаватель по программированию",img:"src/assets/images/trainer-3.jpg",socials:{facebook:"https://facebook.com",instagram:"https://instagram.com"},tabs:{education:`
        <p class="tabs__text">
          Сентябрь 2011 — Июнь 2016<br>
          Санкт-Петербургский государственный университет (СПбГУ)<br>
          Факультет: Прикладной математики — процессов управления
        </p>
      `,experience:`
        <p class="tabs__text">
          Разработчик образовательных программ на Scratch и Python для школьников 6–12 лет.
        </p>
      `,awards:null}},"trainer-4":{name:"Константин Назаров",post:"преподаватель по робототехнике",img:"src/assets/images/trainer-4.jpg",socials:{facebook:"https://facebook.com",instagram:"https://instagram.com"},tabs:{education:`
        <p class="tabs__text">
          Сентябрь 2008 — Июнь 2013<br>
          БГТУ «ВОЕНМЕХ» им. Д.Ф. Устинова<br>
          Специальность: Мехатроника и робототехника
        </p>
      `,experience:`
        <p class="tabs__text">
          Тренер команд-призёров региональных соревнований по робототехнике.
        </p>
      `,awards:`
        <p class="tabs__text">Благодарность Комитета по образованию за подготовку призёров олимпиады.</p>
      `}},"trainer-5":{name:"Лиза Весенняя",post:"преподаватель по программированию",img:"src/assets/images/trainer-5.jpg",socials:{facebook:"https://facebook.com",instagram:"https://instagram.com"},tabs:{education:`
        <p class="tabs__text">
          Сентябрь 2014 — Июнь 2019<br>
          РГПУ им. А. И. Герцена<br>
          Факультет: Информационных технологий
        </p>
      `,experience:`
        <p class="tabs__text">
          Методист онлайн-курсов по алгоритмике и визуальному программированию для начальной школы.
        </p>
      `,awards:null}}},x={facebook:'<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/></svg>',instagram:'<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/></svg>'},q=()=>{const e=document.querySelector("[data-trainer-modal]"),r=document.querySelectorAll("[data-trainer-id]");if(!e||!r.length)return;const o=e.querySelector("[data-modal-close]"),t=e.querySelector("[data-modal-img]"),s=e.querySelector("[data-modal-name]"),a=e.querySelector("[data-modal-post]"),n=e.querySelector("[data-modal-socials]"),i=e.querySelector("[data-modal-content]"),d=e.querySelectorAll("[data-tab-btn]"),l=e.querySelector("[data-tabs-trigger]"),b=e.querySelector("[data-tabs-current]"),m=e.querySelector(".tabs__nav");let g=null;const h=c=>{g&&(d.forEach(u=>{const p=u.dataset.tabBtn===c;u.classList.toggle("is-active",p),p&&b&&(b.textContent=u.textContent.trim())}),i.innerHTML=g.tabs[c]||"",i.scrollTop=0)},L=c=>{const u=S[c];u&&(g=u,t.src=u.img,t.alt=u.name,s.textContent=u.name,a.textContent=u.post,n.innerHTML=Object.entries(u.socials||{}).map(([p,v])=>`
        <li>
          <a href="${v}" class="modal__social-link" aria-label="${p}" target="_blank" rel="noopener">
            ${x[p]||""}
          </a>
        </li>
      `).join(""),d.forEach(p=>{const v=p.dataset.tabBtn;p.disabled=!u.tabs[v]}),h("education"),l?.classList.remove("is-open"),m?.classList.remove("is-dropdown-open"),e.classList.add("is-open"),e.setAttribute("aria-hidden","false"),document.body.classList.add("disable-scroll"))},f=()=>{e.classList.remove("is-open"),e.setAttribute("aria-hidden","true"),document.body.classList.remove("disable-scroll")};r.forEach(c=>{c.addEventListener("click",()=>L(c.dataset.trainerId))}),d.forEach(c=>{c.addEventListener("click",()=>{c.disabled||(h(c.dataset.tabBtn),l?.classList.remove("is-open"),m?.classList.remove("is-dropdown-open"))})}),l?.addEventListener("click",()=>{l.classList.toggle("is-open"),m?.classList.toggle("is-dropdown-open")}),o?.addEventListener("click",f),e.addEventListener("click",c=>{c.target===e&&f()}),document.addEventListener("keydown",c=>{c.key==="Escape"&&e.classList.contains("is-open")&&f()})},k=()=>{const e=document.querySelector("[data-order-form]");if(!e)return;const r=e.querySelectorAll(".form__input"),o=e.querySelector(".form__btn");r.forEach(t=>{t.addEventListener("input",()=>{t.classList.remove("is-invalid")})}),e.addEventListener("submit",t=>{t.preventDefault();let s=!0;if(r.forEach(n=>{const i=n.value.trim();i?n.type==="email"&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i)&&(n.classList.add("is-invalid"),s=!1):(n.classList.add("is-invalid"),s=!1)}),!s)return;const a=o.textContent;o.textContent="Заявка отправлена!",o.disabled=!0,e.reset(),setTimeout(()=>{o.textContent=a,o.disabled=!1},3e3)})};document.addEventListener("DOMContentLoaded",()=>{y(),_(),E(),q(),k()});

//# sourceMappingURL=main-ChKPrU5H.js.map