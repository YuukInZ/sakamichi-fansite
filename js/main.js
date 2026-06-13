// ===== 坂道推 - Main JS =====

// 成员数据库（示例数据）
const MEMBERS_DB = {
  nogizaka: [
    { name: "遠藤さくら", gen: "4期" }, { name: "賀喜遥香", gen: "4期" },
    { name: "山下美月", gen: "3期" }, { name: "与田祐希", gen: "3期" },
    { name: "久保史緒里", gen: "3期" }, { name: "田村真佑", gen: "4期" },
    { name: "筒井あやめ", gen: "4期" }, { name: "早川聖来", gen: "4期" },
    { name: "林瑠奈", gen: "4期" }, { name: "柴田柚菜", gen: "3期" },
    { name: "五百城茉央", gen: "5期" }, { name: "井上和", gen: "5期" },
    { name: "菅原咲月", gen: "5期" }, { name: "中西アルノ", gen: "5期" },
    { name: "一ノ瀬美空", gen: "5期" }, { name: "川崎桜", gen: "5期" },
  ],
  sakurazaka: [
    { name: "森田ひかる", gen: "2期" }, { name: "山崎天", gen: "2期" },
    { name: "田村保乃", gen: "2期" }, { name: "藤吉夏鈴", gen: "2期" },
    { name: "守屋麗奈", gen: "2期" }, { name: "増本綺良", gen: "2期" },
    { name: "井上梨名", gen: "2期" }, { name: "武元唯衣", gen: "2期" },
    { name: "大園玲", gen: "2期" }, { name: "松田里奈", gen: "2期" },
    { name: "谷口愛季", gen: "3期" }, { name: "中嶋優月", gen: "3期" },
    { name: "的野美青", gen: "3期" }, { name: "石森璃花", gen: "3期" },
    { name: "小田倉麗奈", gen: "3期" }, { name: "村山美羽", gen: "3期" },
  ],
  hinatazaka: [
    { name: "加藤史帆", gen: "1期" }, { name: "齊藤京子", gen: "1期" },
    { name: "佐々木久美", gen: "1期" }, { name: "佐々木美玲", gen: "1期" },
    { name: "高瀬愛奈", gen: "1期" }, { name: "東村芽依", gen: "1期" },
    { name: "金村美玖", gen: "1期" }, { name: "河田陽菜", gen: "2期" },
    { name: "小坂菜緒", gen: "2期" }, { name: "富田鈴花", gen: "2期" },
    { name: "丹生明里", gen: "2期" }, { name: "濱岸ひより", gen: "2期" },
    { name: "松田好花", gen: "2期" }, { name: "上村Hiyori", gen: "3期" },
    { name: "高橋未来虹", gen: "3期" }, { name: "森本茉莉", gen: "3期" },
  ]
};

const GROUP_INFO = {
  nogizaka: { name: "乃木坂46", color: "#9b59b6", class: "nogi" },
  sakurazaka: { name: "樱坂46", color: "#ff69b4", class: "saku" },
  hinatazaka: { name: "日向坂46", color: "#87ceeb", class: "hina" }
};

// ===== DOM =====
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ===== Storage =====
function getOshi() {
  try { return JSON.parse(localStorage.getItem("sakamichi-oshi") || "[]"); }
  catch { return []; }
}
function setOshi(data) {
  localStorage.setItem("sakamichi-oshi", JSON.stringify(data));
}
function getChecks() {
  const today = new Date().toDateString();
  const saved = JSON.parse(localStorage.getItem("sakamichi-checks") || "{}");
  if (saved.date !== today) return { date: today, items: {} };
  return saved;
}
function setChecks(data) {
  localStorage.setItem("sakamichi-checks", JSON.stringify(data));
}
function getFirstDay() {
  return localStorage.getItem("sakamichi-first-day") || (() => {
    const d = new Date().toISOString();
    localStorage.setItem("sakamichi-first-day", d);
    return d;
  })();
}

// ===== Toast =====
function showToast(msg) {
  const toast = $("#toast");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

// ===== 我推登记 =====
let currentGroup = "nogizaka";
let cheerLevel = 3;

function initOshiForm() {
  $$(".group-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      $$(".group-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentGroup = btn.dataset.group;
      $("#member-name").value = "";
      $("#suggestions").classList.remove("show");
    });
  });

  const meterBtns = $$(".meter-btn");
  meterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      meterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      cheerLevel = parseInt(btn.dataset.val);
      $("#cheer-fill").style.width = (cheerLevel * 20) + "%";
    });
  });
  // 默认选中第3个
  if (meterBtns[2]) meterBtns[2].click();

  // 搜索建议
  const nameInput = $("#member-name");
  const suggestionsEl = $("#suggestions");

  nameInput.addEventListener("input", () => {
    const val = nameInput.value.trim();
    if (val.length < 1) {
      suggestionsEl.classList.remove("show");
      return;
    }
    const members = MEMBERS_DB[currentGroup] || [];
    const matched = members.filter(m => m.name.includes(val) || m.gen.includes(val));
    if (matched.length === 0) {
      suggestionsEl.classList.remove("show");
      return;
    }
    suggestionsEl.innerHTML = matched.map(m => `
      <div class="suggestion-item" data-name="${m.name}">
        ${m.name}<span class="suggestion-group">${m.gen}</span>
      </div>
    `).join("");
    suggestionsEl.classList.add("show");

    suggestionsEl.querySelectorAll(".suggestion-item").forEach(item => {
      item.addEventListener("click", () => {
        nameInput.value = item.dataset.name;
        suggestionsEl.classList.remove("show");
      });
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".form-group")) {
      suggestionsEl.classList.remove("show");
    }
  });

  // 提交
  $("#add-oshi").addEventListener("click", () => {
    const name = $("#member-name").value.trim();
    if (!name) { showToast("请输入成员名"); return; }

    const oshi = getOshi();
    const existing = oshi.find(o => o.name === name);
    if (existing) { showToast(`${name} 已登记过了`); return; }

    oshi.push({
      id: Date.now(),
      name,
      group: currentGroup,
      cheer: cheerLevel,
      memo: $("#oshi-memo").value.trim(),
      date: new Date().toLocaleDateString("zh-CN")
    });
    setOshi(oshi);
    showToast(`已登记 ${name}`);

    // 重置
    $("#member-name").value = "";
    $("#oshi-memo").value = "";
    $("#suggestions").classList.remove("show");
    renderOshiList();
    updateStats();
  });
}

// ===== 渲染我推列表 =====
function renderOshiList() {
  const oshi = getOshi();
  const list = $("#oshi-list");
  const empty = $("#oshi-empty");

  if (oshi.length === 0) {
    list.style.display = "none";
    empty.style.display = "block";
    return;
  }
  list.style.display = "grid";
  empty.style.display = "none";

  list.innerHTML = oshi.map(o => {
    const gi = GROUP_INFO[o.group] || GROUP_INFO.nogizaka;
    const hearts = "♡".repeat(o.cheer);
    const memo = o.memo ? `<div class="oshi-memo">${o.memo}</div>` : "";
    return `
      <div class="oshi-card" data-id="${o.id}">
        <button class="oshi-delete" onclick="deleteOshi(${o.id})">×</button>
        <div class="oshi-card-header">
          <div class="oshi-avatar ${gi.class}">${o.name.charAt(0)}</div>
          <div>
            <div class="oshi-name">${o.name}<span class="oshi-group-tag" style="color:${gi.color}">${gi.name}</span></div>
            <div class="oshi-chevron">${o.gen || ""}</div>
          </div>
        </div>
        ${memo}
        <div class="oshi-stats">
          <span class="oshi-hearts">${hearts}</span>
          <span class="oshi-date">${o.date}</span>
        </div>
      </div>
    `;
  }).join("");
}

function deleteOshi(id) {
  if (!confirm("确定要删除吗？")) return;
  const oshi = getOshi().filter(o => o.id !== id);
  setOshi(oshi);
  renderOshiList();
  updateStats();
  showToast("已删除");
}

// ===== 成员图鉴 =====
function renderMembers() {
  const grid = $("#members-grid");
  let allMembers = [];
  Object.entries(MEMBERS_DB).forEach(([group, members]) => {
    members.forEach(m => allMembers.push({ ...m, group }));
  });

  grid.innerHTML = allMembers.map(m => {
    const gi = GROUP_INFO[m.group];
    return `
      <div class="member-card" data-group="${m.group}">
        <div class="member-avatar ${gi.class}">${m.name.charAt(0)}</div>
        <div class="member-name">${m.name}</div>
        <div class="member-group">${gi.name} ${m.gen}</div>
      </div>
    `;
  }).join("");

  // 筛选
  $$(".filter-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      $$(".filter-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const filter = tab.dataset.filter;
      $$(".member-card").forEach(card => {
        if (filter === "all" || card.dataset.group === filter) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });

  // 点击加入我推
  $$(".member-card").forEach(card => {
    card.addEventListener("click", () => {
      const name = card.querySelector(".member-name").textContent;
      const group = card.dataset.group;
      currentGroup = group;
      $$(".group-btn").forEach(b => {
        b.classList.toggle("active", b.dataset.group === group);
      });
      $("#member-name").value = name;
      // 滚动到表单
      $("#oshi").scrollIntoView({ behavior: "smooth" });
      showToast(`已选择 ${name}，点击"登记"即可`);
    });
  });
}

// ===== 统计 =====
function updateStats() {
  const oshi = getOshi();
  $("#stat-count").textContent = oshi.length;
  $("#stat-cheer").textContent = oshi.reduce((s, o) => s + (o.cheer || 0), 0);

  const firstDay = new Date(getFirstDay());
  const days = Math.max(1, Math.floor((Date.now() - firstDay.getTime()) / (1000 * 60 * 60 * 24)) + 1);
  $("#stat-days").textContent = days;
}

// ===== 打卡 =====
function initChecks() {
  const checks = getChecks();
  $$(".check-item input").forEach(cb => {
    const key = cb.dataset.check;
    cb.checked = !!checks.items[key];
    cb.addEventListener("change", () => {
      const data = getChecks();
      data.items[key] = cb.checked;
      setChecks(data);
      updateProgress();
    });
  });
  updateProgress();
}

function updateProgress() {
  const data = getChecks();
  const total = $$(".check-item input").length;
  const done = Object.values(data.items).filter(Boolean).length;
  const pct = total > 0 ? (done / total) * 100 : 0;
  $("#activity-fill").style.width = pct + "%";
  $("#activity-text").textContent = `${done}/${total}`;
}

// ===== 导航高亮 =====
function initNav() {
  const navLinks = $$(".nav-link");
  const sections = ["#home", "#oshi", "#members", "#stats"];

  window.addEventListener("scroll", () => {
    let current = "#home";
    sections.forEach(sel => {
      const el = $(sel);
      if (el && window.scrollY >= el.offsetTop - 200) {
        current = sel;
      }
    });
    navLinks.forEach(a => {
      a.classList.toggle("active", a.getAttribute("href") === current);
    });
  });

  // 移动端菜单
  $(".menu-toggle")?.addEventListener("click", () => {
    $(".nav-links")?.classList.toggle("show");
  });
}

// ===== 初始化 =====
document.addEventListener("DOMContentLoaded", () => {
  initOshiForm();
  renderOshiList();
  renderMembers();
  updateStats();
  initChecks();
  initNav();
});
