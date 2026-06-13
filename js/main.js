// ===== 坂道推し — 重构版 =====

// 成员数据（带头像URL）
const MEMBERS = [
    {
        rank: 1, name: "林瑠奈", group: "nogizaka", groupName: "乃木坂46", gen: "4期生",
        birth: "2003年10月2日", hometown: "神奈川县",
        note: "乃木坂46 4期生，以清澈嗓音和出色表现力著称。",
        img: "https://n46db.com/pictures/profilepics/hayashi_runa.jpg",
        cheer: 5
    },
    {
        rank: 2, name: "五百城茉央", group: "nogizaka", groupName: "乃木坂46", gen: "5期生",
        birth: "2005年7月29日", hometown: "兵库县",
        note: "乃木坂46 5期生，5期生中身高最高，散发温暖治愈氛围。",
        img: "https://n46db.com/pictures/profilepics/ioki_mao.jpg",
        cheer: 5
    },
    {
        rank: 3, name: "中西アルノ", group: "nogizaka", groupName: "乃木坂46", gen: "5期生",
        birth: "2003年3月17日", hometown: "千叶县",
        note: "乃木坂46 5期生，以独特气质和舞台魅力吸引众多粉丝。",
        img: "https://n46db.com/pictures/profilepics/nakanishi_aruno.jpg",
        cheer: 5
    },
    {
        rank: 4, name: "的野美青", group: "sakurazaka", groupName: "樱坂46", gen: "3期生",
        birth: "2006年11月8日", hometown: "福冈县",
        note: "樱坂46 3期生，福冈出身，初披露即担任前排站位。",
        img: "",
        cheer: 4
    },
    {
        rank: 5, name: "弓木奈於", group: "nogizaka", groupName: "乃木坂46", gen: "4期生",
        birth: "1999年2月3日", hometown: "京都府",
        note: "乃木坂46 4期生，京都出身，以成熟魅力和扎实唱功见长。",
        img: "https://n46db.com/pictures/profilepics/yumiki_nao.jpg",
        cheer: 4
    },
    {
        rank: 6, name: "高桥未来虹", group: "hinatazaka", groupName: "日向坂46", gen: "3期生",
        birth: "2003年2月17日", hometown: "东京都",
        note: "日向坂46 3期生，东京出身，以阳光笑容和多才多艺深受喜爱。",
        img: "",
        cheer: 4
    },
    {
        rank: 7, name: "正源司阳子", group: "hinatazaka", groupName: "日向坂46", gen: "4期生",
        birth: "2007年2月14日", hometown: "兵库县",
        note: "日向坂46 4期生，兵库县芦屋市出身，活泼元气的 youngest。",
        img: "",
        cheer: 4
    },
    {
        rank: 8, name: "海边朱莉", group: "nogizaka", groupName: "乃木坂46", gen: "6期生",
        birth: "2007年2月14日", hometown: "兵库县",
        note: "乃木坂46 6期生，兵库县出身，与正源司阳子同天生日。",
        img: "https://n46db.com/pictures/profilepics/kaibe_akari.jpg",
        cheer: 3
    },
    {
        rank: 9, name: "濑户口心月", group: "nogizaka", groupName: "乃木坂46", gen: "6期生",
        birth: "2005年7月16日", hometown: "鹿儿岛县",
        note: "乃木坂46 6期生，鹿儿岛出身，带着南国阳光气息的新星。",
        img: "https://n46db.com/pictures/profilepics/setoguchi_mitsuki.jpg",
        cheer: 3
    },
    {
        rank: 10, name: "山田桃实", group: "sakurazaka", groupName: "樱坂46", gen: "4期生",
        birth: "2008年7月20日", hometown: "冈山县",
        note: "樱坂46 4期生，冈山县出身，16岁入团的新生代。",
        img: "",
        cheer: 3
    },
];

const GROUP_CLASS = { nogizaka: "nogi", sakurazaka: "saku", hinatazaka: "hina" };

function getRankClass(rank) {
    if (rank === 1) return "gold";
    if (rank === 2) return "silver";
    if (rank === 3) return "bronze";
    return "normal";
}

function avatarStyle(m) {
    if (m.img) return `background-image:url('${m.img}')`;
    const gc = GROUP_CLASS[m.group];
    const initials = { nogi: "林", saku: "野", hina: "橋" };
    return "";
}

function getInitial(m) {
    return m.name.charAt(0);
}

// ===== Toast =====
function showToast(msg) {
    const t = document.getElementById("toast");
    t.textContent = msg;
    t.classList.add("show");
    setTimeout(() => t.classList.remove("show"), 2500);
}

// ===== 渲染 TOP3 =====
function renderTop3() {
    const el = document.getElementById("rank-top3");
    if (!el) return;
    const top3 = MEMBERS.filter(m => m.rank <= 3);
    // 排序: #2, #1, #3（中间大）
    const order = [top3.find(m => m.rank === 2), top3.find(m => m.rank === 1), top3.find(m => m.rank === 3)];
    
    el.innerHTML = order.map((m, i) => {
        const gc = GROUP_CLASS[m.group];
        const rc = getRankClass(m.rank);
        const isFirst = m.rank === 1;
        const imgHtml = m.img
            ? `<div class="top3-avatar ${gc} has-img" style="background-image:url('${m.img}')"></div>`
            : `<div class="top3-avatar ${gc}">${getInitial(m)}</div>`;
        return `
            <div class="top3-card ${isFirst ? 'first' : ''}" data-group="${m.group}">
                <div class="top3-rank ${rc}">${isFirst ? '👑' : ''} #${m.rank}</div>
                ${imgHtml}
                <div class="top3-name">${m.name}</div>
                <div class="top3-group">${m.groupName} · ${m.gen}</div>
            </div>
        `;
    }).join("");
}

// ===== 渲染排名列表 =====
function renderRanking() {
    const el = document.getElementById("rank-list");
    if (!el) return;
    const rest = MEMBERS.filter(m => m.rank > 3);
    
    el.innerHTML = rest.map(m => {
        const gc = GROUP_CLASS[m.group];
        const rc = getRankClass(m.rank);
        const imgHtml = m.img
            ? `<div class="rank-avatar ${gc} has-img" style="background-image:url('${m.img}')"></div>`
            : `<div class="rank-avatar ${gc}">${getInitial(m)}</div>`;
        return `
            <div class="rank-card" data-group="${m.group}">
                <div class="rank-num ${rc}">#${m.rank}</div>
                ${imgHtml}
                <div class="rank-info">
                    <div class="rank-name">${m.name}
                        <span class="rank-tag ${gc}">${m.groupName} · ${m.gen}</span>
                    </div>
                    <div class="rank-detail">
                        <span><span class="dot"></span>${m.birth}</span>
                        <span><span class="dot"></span>${m.hometown}出身</span>
                    </div>
                </div>
                <div class="rank-like" onclick="cheerMember(${m.rank})">♡</div>
            </div>
        `;
    }).join("");
}

function cheerMember(rank) {
    const m = MEMBERS.find(x => x.rank === rank);
    if (m) {
        m.cheer = Math.min(5, m.cheer + 1);
        showToast(`${m.name} の応援度が上がった！♡`);
        renderCheer();
    }
}

// ===== 渲染图鉴 =====
function renderGallery() {
    const el = document.getElementById("gallery-grid");
    if (!el) return;
    el.innerHTML = MEMBERS.map(m => {
        const gc = GROUP_CLASS[m.group];
        const imgHtml = m.img
            ? `<div class="g-avatar ${gc} has-img" style="background-image:url('${m.img}')"></div>`
            : `<div class="g-avatar ${gc}">${getInitial(m)}</div>`;
        return `
            <div class="gallery-card" data-group="${m.group}">
                ${imgHtml}
                <div class="g-name">${m.name}</div>
                <div class="g-group">${m.groupName} ${m.gen}</div>
            </div>
        `;
    }).join("");
    
    // 筛选
    document.querySelectorAll(".g-filter").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".g-filter").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const filter = btn.dataset.filter;
            document.querySelectorAll(".gallery-card").forEach(card => {
                card.classList.toggle("hidden", filter !== "all" && card.dataset.group !== filter);
            });
        });
    });
}

// ===== 渲染应援面板 =====
function renderCheer() {
    const el = document.getElementById("cheer-cards");
    if (!el) return;
    
    el.innerHTML = MEMBERS.map(m => {
        const gc = GROUP_CLASS[m.group];
        const imgHtml = m.img
            ? `<div class="cheer-avatar ${gc} has-img" style="background-image:url('${m.img}')"></div>`
            : `<div class="cheer-avatar ${gc}">${getInitial(m)}</div>`;
        const pct = (m.cheer / 5) * 100;
        return `
            <div class="cheer-card" data-rank="${m.rank}">
                <div class="cheer-card-header">
                    ${imgHtml}
                    <div class="cheer-info">
                        <h4>${m.name}</h4>
                        <span>${m.groupName} · ${m.gen}</span>
                    </div>
                </div>
                <div class="cheer-bar">
                    <div class="cheer-fill" style="width:${pct}%"></div>
                </div>
                <div class="cheer-btns">
                    ${[1,2,3,4,5].map(i => `<button class="cheer-btn ${i <= m.cheer ? 'active' : ''}" onclick="setCheer(${m.rank}, ${i})">${'♡'.repeat(i)}</button>`).join('')}
                </div>
            </div>
        `;
    }).join("");
}

function setCheer(rank, level) {
    const m = MEMBERS.find(x => x.rank === rank);
    if (m) {
        m.cheer = level;
        showToast(`${m.name} の応援度: ${'♡'.repeat(level)}`);
        renderCheer();
    }
}

// ===== 倒计时 =====
function renderCountdown() {
    const el = document.getElementById("countdown-card");
    if (!el) return;
    
    // 计算下一个生日
    const now = new Date();
    const currentYear = now.getFullYear();
    const birthdays = MEMBERS.map(m => {
        const match = m.birth.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
        if (!match) return null;
        const [, y, mo, d] = match.map(Number);
        let date = new Date(currentYear, mo - 1, d);
        if (date < now) date = new Date(currentYear + 1, mo - 1, d);
        return { member: m, date };
    }).filter(Boolean);
    
    birthdays.sort((a, b) => a.date - b.date);
    const next = birthdays[0];
    if (!next) return;
    
    const updateTimer = () => {
        const diff = next.date - new Date();
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        
        el.innerHTML = `
            <div class="countdown-name">${next.member.name}</div>
            <div class="countdown-date">次のお誕生日まで: ${next.date.getFullYear()}年${next.date.getMonth()+1}月${next.date.getDate()}日</div>
            <div class="countdown-timer">
                <div class="timer-unit"><span class="timer-num">${days}</span><div class="timer-label">日</div></div>
                <div class="timer-unit"><span class="timer-num">${hours}</span><div class="timer-label">時間</div></div>
                <div class="timer-unit"><span class="timer-num">${mins}</span><div class="timer-label">分</div></div>
            </div>
        `;
    };
    
    updateTimer();
    setInterval(updateTimer, 60000);
}

// ===== 导航高亮 =====
function initNav() {
    const links = document.querySelectorAll(".nav-link");
    const sections = ["#home", "#gallery", "#cheer", "#about"];
    window.addEventListener("scroll", () => {
        let current = "#home";
        sections.forEach(sel => {
            const el = document.querySelector(sel);
            if (el && window.scrollY >= el.offsetTop - 200) current = sel;
        });
        links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === current));
    });
}

// ===== 初始化 =====
document.addEventListener("DOMContentLoaded", () => {
    renderTop3();
    renderRanking();
    renderGallery();
    renderCheer();
    renderCountdown();
    initNav();
});
