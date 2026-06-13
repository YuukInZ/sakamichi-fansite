// ===== よるこの推しランキング =====

const MEMBERS = [
    {
        rank: 1, name: "林瑠奈", group: "nogizaka", groupName: "乃木坂46", gen: "4期生",
        birth: "2003年10月2日", hometown: "神奈川県",
        note: "乃木坂46 4期生。透明感のある歌声と表現力でファンを魅了。",
        img: "assets/images/hayashi_runa.jpg", cheer: 5, debut: "2018年8月19日",
        points: ["透明感のある歌声", "落ち着いた雰囲気", "MCでの天然発言"],
        songs: [{ title: "I see…", type: "under" }, { title: "ジャンピングジョーカーフラッシュ", type: "unit" }],
        relations: [{ name: "弓木奈於", type: "同期" }]
    },
    {
        rank: 2, name: "五百城茉央", group: "nogizaka", groupName: "乃木坂46", gen: "5期生",
        birth: "2005年7月29日", hometown: "兵庫県",
        note: "乃木坂46 5期生。5期生で最長身、癒し系の雰囲気が魅力。",
        img: "assets/images/ioki_mao.jpg", cheer: 5, debut: "2022年2月23日",
        points: ["圧倒的な透明感", "癒し系雰囲気", "ポカポカした性格"],
        songs: [{ title: "絶望の一秒前", type: "under" }, { title: "バンドエイド剥がすような別れ方", type: "under" }],
        relations: [{ name: "中西アルノ", type: "同期" }]
    },
    {
        rank: 3, name: "中西アルノ", group: "nogizaka", groupName: "乃木坂46", gen: "5期生",
        birth: "2003年3月17日", hometown: "千葉県",
        note: "乃木坂46 5期生。独特な雰囲気とステージでの魅力が光る。",
        img: "assets/images/nakanishi_aruno.jpg", cheer: 5, debut: "2022年2月23日",
        points: ["アーティスティックな感覚", "独特な世界観", "モデルとしての表現力"],
        songs: [{ title: "絶望の一秒前", type: "under" }, { title: "いつかできるから今日できる", type: "選抜" }],
        relations: [{ name: "五百城茉央", type: "同期" }]
    },
    {
        rank: 4, name: "的野美青", group: "sakurazaka", groupName: "櫻坂46", gen: "3期生",
        birth: "2006年11月8日", hometown: "福岡県",
        note: "櫻坂46 3期生。お披露目時からフロント列を務める逸材。",
        img: "assets/images/matono_mio.jpg", cheer: 4, debut: "2023年1月5日",
        points: ["圧倒的な存在感", "ダンスのキレ", "福岡弁の可愛さ"],
        songs: [{ title: "桜月", type: "選抜" }, { title: "心の花", type: "unit" }],
        relations: [{ name: "山田桃実", type: "後輩" }]
    },
    {
        rank: 5, name: "弓木奈於", group: "nogizaka", groupName: "乃木坂46", gen: "4期生",
        birth: "1999年2月3日", hometown: "京都府",
        note: "乃木坂46 4期生。京都出身。大人な魅力と歌唱力が武器。",
        img: "assets/images/yumiki_nao.jpg", cheer: 4, debut: "2018年8月19日",
        points: ["京都弁の可愛さ", "大人な雰囲気", "歌唱力"],
        songs: [{ title: "I see…", type: "under" }, { title: "僕は僕を好きになる", type: "選抜" }],
        relations: [{ name: "林瑠奈", type: "同期" }]
    },
    {
        rank: 6, name: "高橋未来虹", group: "hinatazaka", groupName: "日向坂46", gen: "3期生",
        birth: "2003年2月17日", hometown: "東京都",
        note: "日向坂46 3期生。笑顔が素敵で多才なメンバー。",
        img: "assets/images/takahashi_mikuni.jpg", cheer: 4, debut: "2021年8月7日",
        points: ["眩しい笑顔", "多才な才能", "ポジティブな性格"],
        songs: [{ title: "僕なんか", type: "選抜" }, { title: "アザトカワイイ", type: "unit" }],
        relations: [{ name: "正源司陽子", type: "後輩" }]
    },
    {
        rank: 7, name: "正源司陽子", group: "hinatazaka", groupName: "日向坂46", gen: "4期生",
        birth: "2007年2月14日", hometown: "兵庫県",
        note: "日向坂46 4期生。兵庫県芦屋市出身。元気いっぱいの最年少。",
        img: "assets/images/shogenji_yoko.jpg", cheer: 4, debut: "2024年3月5日",
        points: ["無邪気な笑顔", "元気いっぱい", "若さと可能性"],
        songs: [{ title: "君はハニーデュー", type: "選抜" }],
        relations: [{ name: "海邉朱莉", type: "同じ日の誕生日" }]
    },
    {
        rank: 8, name: "海邉朱莉", group: "nogizaka", groupName: "乃木坂46", gen: "6期生",
        birth: "2007年2月14日", hometown: "兵庫県",
        note: "乃木坂46 6期生。正源司陽子と同じ2月14日生まれ。",
        img: "assets/images/kaibe_akari.jpg", cheer: 3, debut: "2025年2月19日",
        points: ["驚異的な若さ", "兵庫県出身", "新鮮な魅力"],
        songs: [], relations: [{ name: "正源司陽子", type: "同じ日の誕生日" }]
    },
    {
        rank: 9, name: "瀬戸口心月", group: "nogizaka", groupName: "乃木坂46", gen: "6期生",
        birth: "2005年7月16日", hometown: "鹿児島県",
        note: "乃木坂46 6期生。南国鹿児島出身の新星。",
        img: "assets/images/setoguchi_mitsuki.jpg", cheer: 3, debut: "2025年2月19日",
        points: ["南国の明るさ", "鹿児島弁の魅力", "新しい可能性"],
        songs: [], relations: []
    },
    {
        rank: 10, name: "山田桃実", group: "sakurazaka", groupName: "櫻坂46", gen: "4期生",
        birth: "2008年7月20日", hometown: "岡山県",
        note: "櫻坂46 4期生。岡山県出身の16歳の新星。",
        img: "assets/images/yamada_momomi.jpg", cheer: 3, debut: "2025年4月14日",
        points: ["最年少の可能性", "岡山県のご当地感", "成長を見守る楽しさ"],
        songs: [], relations: [{ name: "的野美青", type: "先輩" }]
    },
];

const GROUP_CLASS = { nogizaka: "nogi", sakurazaka: "saku", hinatazaka: "hina" };
const GROUP_COLORS = { nogizaka: "#9b59b6", sakurazaka: "#ff69b4", hinatazaka: "#87ceeb" };

function getRankClass(rank) {
    if (rank === 1) return "gold";
    if (rank === 2) return "silver";
    if (rank === 3) return "bronze";
    return "normal";
}

function getInitial(m) { return m.name.charAt(0); }

// ===== Toast =====
function showToast(msg) {
    const t = document.getElementById("toast");
    t.textContent = msg;
    t.classList.add("show");
    setTimeout(() => t.classList.remove("show"), 2500);
}

// ===== TOP3 =====
function renderTop3() {
    const el = document.getElementById("rank-top3");
    if (!el) return;
    const top3 = MEMBERS.filter(m => m.rank <= 3);
    const order = [top3.find(m => m.rank === 2), top3.find(m => m.rank === 1), top3.find(m => m.rank === 3)];
    
    el.innerHTML = order.map((m) => {
        const gc = GROUP_CLASS[m.group];
        const rc = getRankClass(m.rank);
        const isFirst = m.rank === 1;
        return `
            <div class="top3-card ${isFirst ? 'first' : ''}" data-group="${m.group}" onclick="openModal(${m.rank})">
                <div class="top3-rank ${rc}">${isFirst ? '👑' : ''} #${m.rank}</div>
                <div class="top3-avatar ${gc} has-img" style="background-image:url('${m.img}')"></div>
                <div class="top3-name">${m.name}</div>
                <div class="top3-group">${m.groupName} · ${m.gen}</div>
            </div>
        `;
    }).join("");
}

// ===== Ranking List =====
function renderRanking() {
    const el = document.getElementById("rank-list");
    if (!el) return;
    const rest = MEMBERS.filter(m => m.rank > 3);
    
    el.innerHTML = rest.map(m => {
        const gc = GROUP_CLASS[m.group];
        const rc = getRankClass(m.rank);
        return `
            <div class="rank-card" data-group="${m.group}" onclick="openModal(${m.rank})">
                <div class="rank-num ${rc}">#${m.rank}</div>
                <div class="rank-avatar ${gc} has-img" style="background-image:url('${m.img}')"></div>
                <div class="rank-info">
                    <div class="rank-name">${m.name}
                        <span class="rank-tag ${gc}">${m.groupName} · ${m.gen}</span>
                    </div>
                    <div class="rank-detail">
                        <span><span class="dot"></span>${m.birth}</span>
                        <span><span class="dot"></span>${m.hometown}出身</span>
                    </div>
                </div>
                <div class="rank-like" onclick="event.stopPropagation(); cheerMember(${m.rank})">♡</div>
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
        renderChart();
    }
}

// ===== Gallery =====
function renderGallery() {
    const el = document.getElementById("gallery-grid");
    if (!el) return;
    el.innerHTML = MEMBERS.map(m => {
        const gc = GROUP_CLASS[m.group];
        return `
            <div class="gallery-card" data-group="${m.group}" onclick="openModal(${m.rank})">
                <div class="g-avatar ${gc} has-img" style="background-image:url('${m.img}')"></div>
                <div class="g-name">${m.name}</div>
                <div class="g-group">${m.groupName} ${m.gen}</div>
            </div>
        `;
    }).join("");
    
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

// ===== Cheer Panel =====
function renderCheer() {
    const el = document.getElementById("cheer-cards");
    if (!el) return;
    
    el.innerHTML = MEMBERS.map(m => {
        const gc = GROUP_CLASS[m.group];
        const pct = (m.cheer / 5) * 100;
        return `
            <div class="cheer-card" data-rank="${m.rank}">
                <div class="cheer-card-header">
                    <div class="cheer-avatar ${gc} has-img" style="background-image:url('${m.img}')"></div>
                    <div class="cheer-info">
                        <h4>${m.name}</h4>
                        <span>${m.groupName} · ${m.gen}</span>
                    </div>
                </div>
                <div class="cheer-bar">
                    <div class="cheer-fill" style="width:${pct}%"></div>
                </div>
                <div class="cheer-btns">
                    ${[1,2,3,4,5].map(i => `<button class="cheer-btn ${i <= m.cheer ? 'active' : ''}" onclick="event.stopPropagation(); setCheer(${m.rank}, ${i})">${'♡'.repeat(i)}</button>`).join('')}
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
        renderChart();
    }
}

// ===== Countdown =====
function renderCountdown() {
    const el = document.getElementById("countdown-card");
    if (!el) return;
    
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

// ===== Member Modal =====
function openModal(rank) {
    const m = MEMBERS.find(x => x.rank === rank);
    if (!m) return;
    const gc = GROUP_CLASS[m.group];
    
    const pointsHtml = m.points.map(p => `<span class="modal-point">${p}</span>`).join('');
    
    const songsHtml = m.songs.length > 0
        ? m.songs.map(s => `
            <div class="modal-song">
                <span class="song-title">${s.title}</span>
                <span class="song-type ${s.type === '選抜' ? 'type-senbatsu' : 'type-under'}">${s.type}</span>
            </div>
        `).join('')
        : '<span class="modal-empty">まだ登録されていません</span>';
    
    const relationsHtml = m.relations.length > 0
        ? m.relations.map(r => `<span class="modal-relation"><strong>${r.name}</strong> · ${r.type}</span>`).join('')
        : '<span class="modal-empty">まだ登録されていません</span>';
    
    const content = document.getElementById("modal-content");
    content.innerHTML = `
        <div class="modal-header">
            <div class="modal-avatar ${gc}" style="background-image:url('${m.img}')"></div>
            <div class="modal-meta">
                <h2>${m.name}</h2>
                <div class="modal-sub">${m.groupName} · ${m.gen}</div>
                <div class="modal-tags">
                    <span class="modal-tag">${m.birth}</span>
                    <span class="modal-tag">${m.hometown}出身</span>
                    <span class="modal-tag">${m.debut}入団</span>
                </div>
            </div>
        </div>
        <div class="modal-body-inner">
            <p class="modal-note">${m.note}</p>
            
            <h3 class="modal-section-title">推しポイント</h3>
            <div class="modal-points">${pointsHtml}</div>
            
            <h3 class="modal-section-title">推し曲</h3>
            <div class="modal-songs">${songsHtml}</div>
            
            <h3 class="modal-section-title">関係</h3>
            <div class="modal-relations">${relationsHtml}</div>
        </div>
    `;
    
    document.getElementById("modal-overlay").classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById("modal-overlay").classList.remove("show");
    document.body.style.overflow = "";
}

// ===== Birthday Calendar =====
function renderCalendar() {
    const el = document.getElementById("calendar-wrap");
    if (!el) return;
    
    const months = ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
    
    const byMonth = {};
    MEMBERS.forEach(m => {
        const match = m.birth.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
        if (!match) return;
        const month = parseInt(match[2]);
        if (!byMonth[month]) byMonth[month] = [];
        byMonth[month].push(m);
    });
    
    el.innerHTML = months.map((name, i) => {
        const month = i + 1;
        const members = byMonth[month] || [];
        const membersHtml = members.map(m => {
            const day = m.birth.match(/(\d{1,2})日$/)[1];
            const gc = GROUP_CLASS[m.group];
            return `<span class="cal-member ${gc}">${day}日 ${m.name}</span>`;
        }).join('');
        
        const today = new Date();
        const isCurrentMonth = today.getMonth() + 1 === month;
        
        return `
            <div class="cal-month ${isCurrentMonth ? 'current' : ''}">
                <div class="cal-month-title">${name}</div>
                <div class="cal-members">${membersHtml || '<span class="cal-empty">—</span>'}</div>
            </div>
        `;
    }).join('');
}

// ===== Chart.js =====
function renderChart() {
    const canvas = document.getElementById("cheerChart");
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    
    if (window._chartInstance) {
        window._chartInstance.destroy();
    }
    
    window._chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: MEMBERS.map(m => m.name),
            datasets: [{
                label: '応援度',
                data: MEMBERS.map(m => m.cheer),
                backgroundColor: MEMBERS.map(m => GROUP_COLORS[m.group] + 'cc'),
                borderColor: MEMBERS.map(m => GROUP_COLORS[m.group]),
                borderWidth: 2,
                borderRadius: 8,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#1a1a2e',
                    titleColor: '#f5f5f7',
                    bodyColor: '#9090a8',
                    borderColor: 'rgba(255,255,255,0.05)',
                    borderWidth: 1,
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 5,
                    grid: { color: 'rgba(255,255,255,0.03)' },
                    ticks: { color: '#5a5a70', font: { family: 'Outfit' } }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#9090a8', font: { size: 11, family: 'Noto Sans JP' } }
                }
            }
        }
    });
}

// ===== Songs =====
function renderSongs() {
    const el = document.getElementById("songs-grid");
    if (!el) return;
    
    const allSongs = [];
    MEMBERS.forEach(m => {
        m.songs.forEach(s => {
            allSongs.push({ member: m, ...s });
        });
    });
    
    el.innerHTML = allSongs.map(s => {
        const gc = GROUP_CLASS[s.member.group];
        return `
            <div class="song-card">
                <div class="song-member">
                    <div class="song-avatar ${gc} has-img" style="background-image:url('${s.member.img}')"></div>
                    <span>${s.member.name}</span>
                </div>
                <div class="song-title-main">${s.title}</div>
                <span class="song-tag ${s.type === '選抜' ? 'type-senbatsu' : 'type-under'}">${s.type}</span>
            </div>
        `;
    }).join('');
}

// ===== Activity Log =====
function loadActivities() {
    try {
        const raw = localStorage.getItem("yoruko-activities");
        return raw ? JSON.parse(raw) : [];
    } catch { return []; }
}

function saveActivities(acts) {
    localStorage.setItem("yoruko-activities", JSON.stringify(acts));
}

function initActivitySelect() {
    const sel = document.getElementById("act-member");
    if (!sel || sel.children.length > 1) return;
    MEMBERS.forEach(m => {
        const opt = document.createElement("option");
        opt.value = m.name;
        opt.textContent = m.name;
        sel.appendChild(opt);
    });
}

function postActivity() {
    const memberSel = document.getElementById("act-member");
    const typeSel = document.getElementById("act-type");
    const dateEl = document.getElementById("act-date");
    const noteEl = document.getElementById("act-note");
    
    const member = memberSel.value;
    const type = typeSel.value;
    const date = dateEl.value;
    const note = noteEl.value.trim();
    
    if (!member) { showToast("推しメンを選んでね"); return; }
    if (!date) { showToast("日付を選んでね"); return; }
    
    const acts = loadActivities();
    acts.push({ member, type, date, note });
    saveActivities(acts);
    
    memberSel.value = "";
    dateEl.value = "";
    noteEl.value = "";
    renderActivities();
    showToast("イベントを記録しました！");
}

function renderActivities() {
    const el = document.getElementById("activity-list");
    if (!el) return;
    
    const acts = loadActivities();
    if (acts.length === 0) {
        el.innerHTML = '<div class="wall-empty">まだイベントが登録されていません</div>';
        return;
    }
    
    el.innerHTML = acts.slice().reverse().map(act => {
        const m = MEMBERS.find(x => x.name === act.member);
        const gc = m ? GROUP_CLASS[m.group] : 'nogi';
        const img = m ? `style="background-image:url('${m.img}')"` : '';
        return `
            <div class="activity-item">
                <div class="activity-avatar ${gc} has-img" ${img}></div>
                <div class="activity-body">
                    <div class="activity-header">
                        <span class="activity-name">${act.member}</span>
                        <span class="activity-type">${act.type}</span>
                    </div>
                    <div class="activity-date">${act.date}</div>
                    ${act.note ? `<div class="activity-note">${escapeHtml(act.note)}</div>` : ''}
                </div>
            </div>
        `;
    }).join('');
}

// ===== Gacha =====
let gachaSpinning = false;

function rollGacha() {
    if (gachaSpinning) return;
    
    const display = document.getElementById("gacha-display");
    const label = display.querySelector(".gacha-label");
    
    gachaSpinning = true;
    label.textContent = "回転中…";
    
    let spins = 0;
    const maxSpins = 15;
    const interval = setInterval(() => {
        const random = MEMBERS[Math.floor(Math.random() * MEMBERS.length)];
        const gc = GROUP_CLASS[random.group];
        display.innerHTML = `
            <div class="gacha-avatar ${gc} has-img" style="background-image:url('${random.img}')"></div>
            <div class="gacha-label">${random.name}</div>
        `;
        spins++;
        
        if (spins >= maxSpins) {
            clearInterval(interval);
            const result = MEMBERS[Math.floor(Math.random() * MEMBERS.length)];
            const rgc = GROUP_CLASS[result.group];
            display.innerHTML = `
                <div class="gacha-avatar ${rgc} has-img" style="background-image:url('${result.img}')"></div>
                <div class="gacha-label">${result.name}</div>
            `;
            showToast(`おめでとう！ ${result.name} が当選！`);
            gachaSpinning = false;
        }
    }, 100);
}

// ===== Message Wall (Fixed) =====
function loadWallMessages() {
    try {
        const raw = localStorage.getItem("yoruko-wall");
        return raw ? JSON.parse(raw) : [];
    } catch { return []; }
}

function saveWallMessages(msgs) {
    localStorage.setItem("yoruko-wall", JSON.stringify(msgs));
}

function renderWall() {
    const select = document.getElementById("wall-member");
    const list = document.getElementById("wall-list");
    if (!select || !list) return;
    
    // Populate select (only once)
    if (select.children.length <= 1) {
        MEMBERS.forEach(m => {
            const opt = document.createElement("option");
            opt.value = m.name;
            opt.textContent = m.name;
            select.appendChild(opt);
        });
    }
    
    // Render messages
    const msgs = loadWallMessages();
    if (msgs.length === 0) {
        list.innerHTML = '<div class="wall-empty">まだメッセージがありません。最初のメッセージを送ってね！</div>';
        return;
    }
    
    list.innerHTML = msgs.slice().reverse().map(msg => {
        const m = MEMBERS.find(x => x.name === msg.member);
        const gc = m ? GROUP_CLASS[m.group] : 'nogi';
        const img = m ? `style="background-image:url('${m.img}')"` : '';
        return `
            <div class="wall-msg">
                <div class="wall-msg-avatar ${gc} has-img" ${img}></div>
                <div class="wall-msg-body">
                    <div class="wall-msg-header">
                        <span class="wall-msg-name">${escapeHtml(msg.fanname || '名無しファン')}</span>
                        <span class="wall-msg-arrow">→</span>
                        <span class="wall-msg-target">${msg.member}</span>
                        <span class="wall-msg-time">${msg.time}</span>
                    </div>
                    <div class="wall-msg-text">${escapeHtml(msg.text)}</div>
                </div>
            </div>
        `;
    }).join('');
}

function postWall() {
    const fannameEl = document.getElementById("wall-fanname");
    const memberSel = document.getElementById("wall-member");
    const textEl = document.getElementById("wall-text");
    
    const fanname = fannameEl.value.trim() || "名無しファン";
    const member = memberSel.value;
    const text = textEl.value.trim();
    
    if (!member) { showToast("推しメンを選んでね"); return; }
    if (!text) { showToast("メッセージを書いてね"); return; }
    
    const msgs = loadWallMessages();
    msgs.push({
        fanname,
        member,
        text,
        time: new Date().toLocaleString('ja-JP', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
    });
    
    saveWallMessages(msgs);
    textEl.value = "";
    renderWall();
    showToast("メッセージを送信しました！");
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===== Nav Highlight =====
function initNav() {
    const links = document.querySelectorAll(".nav-link");
    const sections = ["#home", "#gallery-cheer", "#countdown-calendar", "#chart-songs", "#activity-gacha", "#wall", "#about"];
    window.addEventListener("scroll", () => {
        let current = "#home";
        sections.forEach(sel => {
            const el = document.querySelector(sel);
            if (el && window.scrollY >= el.offsetTop - 200) current = sel;
        });
        links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === current));
    });
}

// ===== Init =====
document.addEventListener("DOMContentLoaded", () => {
    renderTop3();
    renderRanking();
    renderGallery();
    renderCheer();
    renderCountdown();
    renderCalendar();
    renderChart();
    renderSongs();
    renderActivities();
    initActivitySelect();
    renderWall();
    initNav();
});
