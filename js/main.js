// ===== 坂道推榜 TOP10 =====

const MEMBERS = [
    {
        rank: 1,
        name: "林瑠奈",
        group: "nogizaka",
        groupName: "乃木坂46",
        gen: "4期生",
        birth: "2003年10月2日",
        hometown: "神奈川县",
        note: "乃木坂46 4期生，以清澈嗓音和出色表现力著称。",
    },
    {
        rank: 2,
        name: "五百城茉央",
        group: "nogizaka",
        groupName: "乃木坂46",
        gen: "5期生",
        birth: "2005年7月29日",
        hometown: "兵库县",
        note: "乃木坂46 5期生，5期生中身高最高，散发温暖治愈氛围。",
    },
    {
        rank: 3,
        name: "中西アルノ",
        group: "nogizaka",
        groupName: "乃木坂46",
        gen: "5期生",
        birth: "2003年3月17日",
        hometown: "千叶县",
        note: "乃木坂46 5期生，以独特气质和舞台魅力吸引众多粉丝。",
    },
    {
        rank: 4,
        name: "弓木奈於",
        group: "nogizaka",
        groupName: "乃木坂46",
        gen: "4期生",
        birth: "1999年2月3日",
        hometown: "京都府",
        note: "乃木坂46 4期生，京都出身，以成熟魅力和扎实唱功见长。",
    },
    {
        rank: 5,
        name: "的野美青",
        group: "sakurazaka",
        groupName: "樱坂46",
        gen: "3期生",
        birth: "2006年11月8日",
        hometown: "福冈县",
        note: "樱坂46 3期生，福冈出身，初披露即担任前排站位。",
    },
    {
        rank: 6,
        name: "濑户口心月",
        group: "nogizaka",
        groupName: "乃木坂46",
        gen: "6期生",
        birth: "2005年7月16日",
        hometown: "鹿儿岛县",
        note: "乃木坂46 6期生，鹿儿岛出身，带着南国阳光气息的新星。",
    },
    {
        rank: 7,
        name: "高桥未来虹",
        group: "hinatazaka",
        groupName: "日向坂46",
        gen: "3期生",
        birth: "2003年2月17日",
        hometown: "东京都",
        note: "日向坂46 3期生，东京出身，以阳光笑容和多才多艺深受喜爱。",
    },
    {
        rank: 8,
        name: "正源司阳子",
        group: "hinatazaka",
        groupName: "日向坂46",
        gen: "4期生",
        birth: "2007年2月14日",
        hometown: "兵库县",
        note: "日向坂46 4期生，兵库县芦屋市出身，活泼元气的 youngest。",
    },
    {
        rank: 9,
        name: "海边朱莉",
        group: "nogizaka",
        groupName: "乃木坂46",
        gen: "6期生",
        birth: "2007年2月14日",
        hometown: "兵库县",
        note: "乃木坂46 6期生，兵库县出身，与正源司阳子同天生日（2月14日）。",
    },
    {
        rank: 10,
        name: "山田桃实",
        group: "sakurazaka",
        groupName: "樱坂46",
        gen: "4期生",
        birth: "2008年7月20日",
        hometown: "冈山县",
        note: "樱坂46 4期生，冈山县出身，16岁入团的新生代。",
    },
];

const GROUP_CLASS = {
    nogizaka: "nogi",
    sakurazaka: "saku",
    hinatazaka: "hina",
};

function getRankClass(rank) {
    if (rank === 1) return "top1";
    if (rank === 2) return "top2";
    if (rank === 3) return "top3";
    return "normal";
}

function renderRanking() {
    const list = document.getElementById("rank-list");
    if (!list) return;

    list.innerHTML = MEMBERS.map((m) => {
        const gClass = GROUP_CLASS[m.group] || "nogi";
        const rankClass = getRankClass(m.rank);
        return `
            <div class="rank-item" data-group="${m.group}" onclick="toggleExpand(this)">
                <div class="rank-number ${rankClass}">#${m.rank}</div>
                <div class="rank-avatar ${gClass}">${m.name.charAt(0)}</div>
                <div class="rank-info">
                    <div class="rank-name">
                        ${m.name}
                        <span class="rank-tag ${gClass}">${m.groupName} · ${m.gen}</span>
                    </div>
                    <div class="rank-details">
                        <span class="rank-detail"><span class="dot"></span> ${m.birth}</span>
                        <span class="rank-detail"><span class="dot"></span> ${m.hometown}出身</span>
                    </div>
                </div>
                <div class="rank-rank-change up">♡</div>
                <div class="rank-detail-expand">
                    <div class="expand-note">${m.note}</div>
                </div>
            </div>
        `;
    }).join("");
}

function toggleExpand(el) {
    el.classList.toggle("expanded");
}

// 初始化
document.addEventListener("DOMContentLoaded", () => {
    renderRanking();
});
