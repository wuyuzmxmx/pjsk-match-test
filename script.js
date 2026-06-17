const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const characters = [
  { id: "ichika", name: "星乃一歌", unit: "Leo/need", color: "#33aaee", image: "https://pjsekai.sega.jp/assets/data/webp/character/unite01/ichika/now/img.png.webp", traits: ["沉稳", "重情义", "可靠"], description: "你像一歌一样，会把重要的人放在心上。你不一定声量最大，但会用稳定、诚恳的方式守住大家共同的节奏。" },
  { id: "saki", name: "天马咲希", unit: "Leo/need", color: "#ffdd45", image: "https://pjsekai.sega.jp/assets/data/webp/character/unite01/saki/now/img.png.webp", traits: ["开朗", "主动", "珍惜当下"], description: "你像咲希一样，擅长把日常变成闪闪发光的事件。你会主动靠近喜欢的人，也很珍惜来之不易的相聚。" },
  { id: "honami", name: "望月穗波", unit: "Leo/need", color: "#ee6666", image: "https://pjsekai.sega.jp/assets/data/webp/character/unite01/honami/now/img.png.webp", traits: ["温柔", "照顾型", "细腻"], description: "你像穗波一样，能敏锐察觉周围人的情绪。你温柔、负责，但也需要记得把自己的心情放到同样重要的位置。" },
  { id: "shiho", name: "日野森志步", unit: "Leo/need", color: "#bbdd22", image: "https://pjsekai.sega.jp/assets/data/webp/character/unite01/shiho/now/img.png.webp", traits: ["专业", "克制", "目标感"], description: "你像志步一样，对喜欢的事有很高标准。你不爱绕弯子，更愿意用实力和行动证明自己的认真。" },
  { id: "minori", name: "花里实乃理", unit: "MORE MORE JUMP!", color: "#ffccaa", image: "https://pjsekai.sega.jp/assets/data/webp/character/unite02/minori/now/img.png.webp", traits: ["乐观", "努力", "憧憬"], description: "你像实乃理一样，相信努力会让憧憬更近一点。就算还没站到聚光灯中央，你也能靠热情继续往前跑。" },
  { id: "haruka", name: "桐谷遥", unit: "MORE MORE JUMP!", color: "#99ccff", image: "https://pjsekai.sega.jp/assets/data/webp/character/unite02/haruka/now/img.png.webp", traits: ["清爽", "自律", "专业"], description: "你像遥一样，有让人安心的专业感。你擅长控制节奏，也常把责任和期待放在自己肩上。" },
  { id: "airi", name: "桃井爱莉", unit: "MORE MORE JUMP!", color: "#ffaacc", image: "https://pjsekai.sega.jp/assets/data/webp/character/unite02/airi/now/img.png.webp", traits: ["坦率", "照亮他人", "行动派"], description: "你像爱莉一样，嘴上直接，心里热。你能迅速看见问题，也愿意为了同伴把气氛重新撑起来。" },
  { id: "shizuku", name: "日野森雫", unit: "MORE MORE JUMP!", color: "#99eedd", image: "https://pjsekai.sega.jp/assets/data/webp/character/unite02/shizuku/now/img.png.webp", traits: ["优雅", "天然", "包容"], description: "你像雫一样，有柔和而独特的存在感。你待人真诚，常用自己的步调让紧绷的空气慢慢放松。" },
  { id: "kohane", name: "小豆泽心羽", unit: "Vivid BAD SQUAD", color: "#ff6699", image: "https://pjsekai.sega.jp/assets/data/webp/character/unite03/kohane/now/img.png.webp", traits: ["成长型", "勇敢", "真诚"], description: "你像心羽一样，看似安静，却能在关键时刻爆发惊人的勇气。你会因为遇见热爱的事而迅速成长。" },
  { id: "an", name: "白石杏", unit: "Vivid BAD SQUAD", color: "#00bbdd", image: "https://pjsekai.sega.jp/assets/data/webp/character/unite03/an/now/img.png.webp", traits: ["爽朗", "带队", "热血"], description: "你像杏一样，喜欢直接面对挑战。你有感染别人的热量，也很适合成为把大家带上舞台的人。" },
  { id: "akito", name: "东云彰人", unit: "Vivid BAD SQUAD", color: "#ff7722", image: "https://pjsekai.sega.jp/assets/data/webp/character/unite03/akito/now/img.png.webp", traits: ["胜负欲", "现实感", "韧性"], description: "你像彰人一样，清楚成功不是靠漂亮话。你会咬牙练到能赢为止，也讨厌半吊子的热情。" },
  { id: "toya", name: "青柳冬弥", unit: "Vivid BAD SQUAD", color: "#0077dd", image: "https://pjsekai.sega.jp/assets/data/webp/character/unite03/toya/now/img.png.webp", traits: ["冷静", "真挚", "探索自我"], description: "你像冬弥一样，外表冷静，内里认真。你会谨慎选择道路，一旦确认心意，就会稳稳地走下去。" },
  { id: "tsukasa", name: "天马司", unit: "Wonderlands x Showtime", color: "#ffbb00", image: "https://pjsekai.sega.jp/assets/data/webp/character/unite04/tsukasa/now/img.png.webp", traits: ["自信", "戏剧感", "鼓舞"], description: "你像司一样，天生适合站到最显眼的位置。你相信笑容和掌声的力量，也愿意用夸张的方式点燃现场。" },
  { id: "emu", name: "凤笑梦", unit: "Wonderlands x Showtime", color: "#ff66bb", image: "https://pjsekai.sega.jp/assets/data/webp/character/unite04/emu/now/img.png.webp", traits: ["元气", "直觉", "快乐制造"], description: "你像笑梦一样，会把快乐当成认真要完成的事。你直觉敏锐，擅长用简单真诚的方式让人重新笑出来。" },
  { id: "nene", name: "草薙宁宁", unit: "Wonderlands x Showtime", color: "#33dd99", image: "https://pjsekai.sega.jp/assets/data/webp/character/unite04/nene/now/img.png.webp", traits: ["内向", "毒舌", "实力派"], description: "你像宁宁一样，不喜欢无意义的社交消耗，却对真正热爱的表演极其认真。你的锋利常常来自害羞和高标准。" },
  { id: "rui", name: "神代类", unit: "Wonderlands x Showtime", color: "#bb88ff", image: "https://pjsekai.sega.jp/assets/data/webp/character/unite04/rui/now/img.png.webp", traits: ["创意", "实验精神", "观察力"], description: "你像类一样，脑内总有出人意料的方案。你享受创造，也愿意为了独一无二的舞台承担复杂的设计。" },
  { id: "kanade", name: "宵崎奏", unit: "Nightcord at 25:00", color: "#bbccff", image: "https://pjsekai.sega.jp/assets/data/webp/character/unite05/kanade/now/img.png.webp", traits: ["救赎感", "专注", "温静"], description: "你像奏一样，会把无法说出口的心情写进作品。你温柔而执着，希望自己的创作能真正抵达某个人。" },
  { id: "mafuyu", name: "朝比奈真冬", unit: "Nightcord at 25:00", color: "#8888cc", image: "https://pjsekai.sega.jp/assets/data/webp/character/unite05/mafuyu/now/img.png.webp", traits: ["压抑", "高完成度", "寻找自我"], description: "你像真冬一样，习惯把事情做到别人期待的样子。你很强，但真正的课题是找到属于自己的声音。" },
  { id: "ena", name: "东云绘名", unit: "Nightcord at 25:00", color: "#ccaa88", image: "https://pjsekai.sega.jp/assets/data/webp/character/unite05/ena/now/img.png.webp", traits: ["敏感", "不服输", "表达欲"], description: "你像绘名一样，渴望被看见，也害怕不够好。正因为敏感，你对作品和评价都有格外真实的反应。" },
  { id: "mizuki", name: "晓山瑞希", unit: "Nightcord at 25:00", color: "#ddaacc", image: "https://pjsekai.sega.jp/assets/data/webp/character/unite05/mizuki/now/img.png.webp", traits: ["自由", "审美", "隐藏脆弱"], description: "你像瑞希一样，重视可爱、自由和自我选择。你擅长让气氛变轻，也会把真正脆弱的部分保护得很深。" }
];

const questions = [
  { tag: "舞台能量", title: "朋友临时喊你上台帮忙，你第一反应是？", options: [["先观察流程，确认我能稳住场面", ["ichika", "haruka", "toya", "kanade"]], ["太好了，终于轮到我发光了", ["saki", "tsukasa", "an", "emu"]], ["有点紧张，但我想试试看", ["minori", "kohane", "honami", "nene"]], ["先问清标准，我不想做半成品", ["shiho", "akito", "ena", "mafuyu"]]] },
  { tag: "社交节奏", title: "新的小组合作刚开始，你通常会？", options: [["把大家的想法整理成可执行步骤", ["ichika", "haruka", "shiho", "toya"]], ["主动破冰，让气氛先热起来", ["saki", "minori", "an", "tsukasa"]], ["照顾没开口的人，慢慢把话接住", ["honami", "shizuku", "kohane", "kanade"]], ["提出一个不太寻常但很有趣的方向", ["rui", "mizuki", "emu", "nene"]]] },
  { tag: "压力反应", title: "计划突然失败时，你更像哪种状态？", options: [["安静下来，把能救的部分先救回来", ["ichika", "honami", "toya", "kanade"]], ["立刻重组方案，不能就这样输掉", ["shiho", "akito", "airi", "haruka"]], ["先鼓励大家，情绪不能散", ["saki", "minori", "an", "tsukasa"]], ["换个角度，说不定能变成新节目", ["emu", "rui", "mizuki", "shizuku"]]] },
  { tag: "创作动机", title: "你最想通过作品传达什么？", options: [["把重要的人重新连接起来", ["ichika", "saki", "honami", "kanade"]], ["让人相信明天可以更闪亮", ["minori", "haruka", "airi", "shizuku"]], ["证明自己真的能站上更高处", ["kohane", "an", "akito", "toya"]], ["让别人看见一个独特的世界", ["tsukasa", "emu", "nene", "rui"]]] },
  { tag: "自我表达", title: "被误解时，你会怎么做？", options: [["慢慢解释，尽量不让关系变糟", ["honami", "shizuku", "ichika", "kohane"]], ["直接说清楚，我不喜欢拖着", ["shiho", "airi", "akito", "ena"]], ["用行动证明，比争辩更有用", ["haruka", "toya", "kanade", "mafuyu"]], ["先笑着带过，真正的部分以后再说", ["saki", "emu", "mizuki", "rui"]]] },
  { tag: "目标感", title: "面对长期目标，你最依赖什么？", options: [["稳定练习和日复一日的积累", ["ichika", "haruka", "shiho", "toya"]], ["憧憬和热情，它们会推着我走", ["saki", "minori", "kohane", "tsukasa"]], ["同伴的存在，让我不想放弃", ["honami", "an", "emu", "kanade"]], ["不服输，我想看看自己能到哪里", ["akito", "ena", "nene", "mafuyu"]]] },
  { tag: "审美偏好", title: "如果布置一个舞台，你会优先考虑？", options: [["灯光和音乐要服务情绪", ["ichika", "kanade", "toya", "mafuyu"]], ["明亮、元气、让人马上笑出来", ["saki", "minori", "emu", "tsukasa"]], ["视觉冲击和节奏感要够强", ["an", "akito", "airi", "shiho"]], ["机关、反差和让人记住的细节", ["rui", "nene", "mizuki", "shizuku"]]] },
  { tag: "同伴关系", title: "朋友陷入低落，你会？", options: [["陪在旁边，不逼对方马上变好", ["honami", "kanade", "shizuku", "ichika"]], ["拉对方去做点开心的事", ["saki", "emu", "minori", "an"]], ["指出问题，但也帮忙想解法", ["airi", "shiho", "akito", "haruka"]], ["用自己的方式绕开沉重气氛", ["mizuki", "rui", "tsukasa", "nene"]]] },
  { tag: "冲突处理", title: "意见不合时，你更倾向于？", options: [["先听完，再找共同点", ["ichika", "honami", "toya", "shizuku"]], ["说重点，问题越早摊开越好", ["shiho", "airi", "akito", "ena"]], ["让大家重新想起目标是什么", ["haruka", "kanade", "an", "tsukasa"]], ["换一种玩法，让僵局松动", ["saki", "emu", "rui", "mizuki"]]] },
  { tag: "个人节奏", title: "休息日你最想怎么过？", options: [["安静补能，听歌或整理东西", ["ichika", "toya", "kanade", "mafuyu"]], ["和朋友出门，把今天过得很满", ["saki", "minori", "an", "emu"]], ["练习、复盘、把欠的进度补上", ["haruka", "shiho", "akito", "nene"]], ["做点漂亮或有创意的小东西", ["shizuku", "rui", "ena", "mizuki"]]] },
  { tag: "被看见", title: "你希望别人怎样评价你？", options: [["可靠，关键时刻可以交给我", ["ichika", "honami", "haruka", "toya"]], ["有感染力，和我在一起会变开心", ["saki", "minori", "an", "emu"]], ["实力强，付出能被认真看见", ["shiho", "akito", "nene", "ena"]], ["独特，有自己的审美和世界", ["shizuku", "tsukasa", "rui", "mizuki"]]] },
  { tag: "选择道路", title: "当别人替你安排好了“正确答案”，你会？", options: [["先完成该做的，再寻找自己的空间", ["haruka", "mafuyu", "toya", "ichika"]], ["认真想想那是不是我真正想要的", ["kohane", "kanade", "mizuki", "shizuku"]], ["如果不喜欢，就靠实力走出新路", ["shiho", "akito", "ena", "airi"]], ["把它改造成属于我的舞台", ["saki", "tsukasa", "emu", "rui"]]] },
  { tag: "团队定位", title: "团队里最适合你的角色是？", options: [["稳定核心，负责把大家拉回节奏", ["ichika", "honami", "haruka", "kanade"]], ["气氛发动机，负责点亮现场", ["saki", "minori", "an", "emu"]], ["质量把关，负责让成果变强", ["shiho", "akito", "nene", "mafuyu"]], ["创意策划，负责做出记忆点", ["tsukasa", "rui", "mizuki", "shizuku"]]] },
  { tag: "失败之后", title: "被狠狠打击后，你会最先想到？", options: [["哪里还能调整，下一次别再犯", ["shiho", "akito", "haruka", "airi"]], ["我是不是让谁失望了", ["honami", "kanade", "mafuyu", "ena"]], ["虽然难过，但还想再来一次", ["minori", "kohane", "saki", "tsukasa"]], ["先消化情绪，再把它变成作品", ["ichika", "toya", "nene", "mizuki"]]] },
  { tag: "真实自我", title: "你最害怕哪种感觉？", options: [["重要的人渐渐疏远", ["ichika", "saki", "honami", "kanade"]], ["努力了却没人认可", ["minori", "akito", "ena", "nene"]], ["不能按自己的心意选择", ["toya", "mafuyu", "mizuki", "kohane"]], ["快乐和梦想被说成幼稚", ["tsukasa", "emu", "rui", "an"]]] },
  { tag: "表达方式", title: "喜欢一个作品时，你通常会？", options: [["反复听，慢慢品细节", ["ichika", "toya", "kanade", "mafuyu"]], ["立刻分享给朋友", ["saki", "minori", "an", "emu"]], ["研究它为什么好，想学到手", ["haruka", "shiho", "akito", "nene"]], ["被灵感点燃，想做自己的版本", ["airi", "tsukasa", "rui", "mizuki"]]] },
  { tag: "细节偏好", title: "准备演出时，你最在意？", options: [["情绪是否真诚", ["ichika", "honami", "kanade", "kohane"]], ["流程是否专业稳定", ["haruka", "shiho", "toya", "mafuyu"]], ["现场能不能燃起来", ["saki", "an", "akito", "tsukasa"]], ["观众会不会记住那个瞬间", ["emu", "nene", "rui", "mizuki"]]] },
  { tag: "沟通习惯", title: "群聊讨论到半夜，你会？", options: [["把结论整理出来，让大家早点休息", ["honami", "ichika", "haruka", "toya"]], ["越聊越精神，点子越来越多", ["saki", "emu", "rui", "tsukasa"]], ["提醒大家别跑题，先解决核心问题", ["shiho", "akito", "airi", "nene"]], ["默默看着，必要时发一句关键话", ["kanade", "mafuyu", "mizuki", "kohane"]]] },
  { tag: "成长方式", title: "你最容易被哪种人带动？", options: [["温柔但坚定地相信我的人", ["honami", "kanade", "kohane", "minori"]], ["目标清楚、行动力强的人", ["haruka", "shiho", "akito", "an"]], ["能把世界变有趣的人", ["saki", "tsukasa", "emu", "rui"]], ["理解复杂心情、不急着评判的人", ["ichika", "toya", "ena", "mizuki"]]] },
  { tag: "舞台口号", title: "选一句最像你的舞台宣言。", options: [["把没说出口的心情，唱给你听", ["ichika", "kanade", "mafuyu", "ena"]], ["今天也要比昨天更闪亮", ["saki", "minori", "haruka", "airi"]], ["我会赢，用真正的实力", ["shiho", "an", "akito", "toya"]], ["让所有人都忘不掉这一幕", ["tsukasa", "emu", "nene", "rui"]]] },
  { tag: "面对夸奖", title: "别人认真夸你时，你会？", options: [["有点害羞，但会记很久", ["ichika", "kohane", "honami", "nene"]], ["开心到想继续做得更好", ["saki", "minori", "emu", "tsukasa"]], ["表面冷静，心里重新确认目标", ["haruka", "shiho", "toya", "mafuyu"]], ["一边高兴一边怀疑自己还不够", ["airi", "akito", "ena", "mizuki"]]] },
  { tag: "灵感来源", title: "你的灵感最常来自哪里？", options: [["和朋友共同经历的瞬间", ["ichika", "saki", "honami", "an"]], ["想成为更好的自己的愿望", ["minori", "haruka", "kohane", "akito"]], ["心里难以整理的情绪", ["kanade", "mafuyu", "ena", "mizuki"]], ["奇怪但迷人的脑洞和画面", ["shizuku", "tsukasa", "emu", "rui"]]] },
  { tag: "责任感", title: "你承担责任时最像哪种模式？", options: [["默默扛住，不想让别人担心", ["honami", "kanade", "mafuyu", "toya"]], ["把大家叫起来，我们一起解决", ["saki", "an", "airi", "tsukasa"]], ["严格要求自己，也严格要求成果", ["haruka", "shiho", "akito", "nene"]], ["用轻松表情挡住压力", ["minori", "emu", "mizuki", "rui"]]] },
  { tag: "边界感", title: "需要拒绝别人时，你会？", options: [["尽量温和地说明原因", ["ichika", "honami", "shizuku", "kohane"]], ["直说不行，但会给替代方案", ["airi", "shiho", "akito", "haruka"]], ["先忍一下，之后再慢慢处理", ["kanade", "mafuyu", "ena", "toya"]], ["用玩笑化解，再把边界放清楚", ["saki", "tsukasa", "emu", "mizuki"]]] },
  { tag: "秘密心事", title: "真正重要的烦恼，你通常会？", options: [["找最信任的人小声说", ["ichika", "honami", "kohane", "toya"]], ["先装作没事，等撑不住再说", ["saki", "haruka", "mafuyu", "mizuki"]], ["转化成练习或作品", ["shiho", "akito", "kanade", "ena"]], ["用热闹和创意把它包起来", ["minori", "emu", "tsukasa", "rui"]]] },
  { tag: "竞争心", title: "看到很强的对手，你会？", options: [["佩服，同时想知道差距在哪里", ["haruka", "toya", "nene", "kanade"]], ["燃起来，下一次一定要赢", ["shiho", "an", "akito", "tsukasa"]], ["有点害怕，但也想追上去", ["minori", "kohane", "ena", "ichika"]], ["想和对方做出更有趣的化学反应", ["saki", "emu", "rui", "mizuki"]]] },
  { tag: "日常气质", title: "别人最常说你给人的感觉是？", options: [["安静可靠", ["ichika", "honami", "toya", "kanade"]], ["明亮好相处", ["saki", "minori", "an", "emu"]], ["认真有距离感", ["haruka", "shiho", "akito", "mafuyu"]], ["特别、有自己的节奏", ["shizuku", "nene", "rui", "mizuki"]]] },
  { tag: "情绪色彩", title: "如果把你最近的心情做成一首歌，它会更接近？", options: [["夜里慢慢亮起的一束光", ["ichika", "kanade", "mafuyu", "toya"]], ["放学路上突然变灿烂的副歌", ["saki", "minori", "honami", "shizuku"]], ["街头节拍里不服输的鼓点", ["shiho", "an", "akito", "kohane"]], ["游乐园开场前的奇妙倒计时", ["tsukasa", "emu", "rui", "mizuki"]]] },
  { tag: "关键选择", title: "如果只能保留一种能力，你会选？", options: [["让重要的人安心的能力", ["honami", "ichika", "shizuku", "kanade"]], ["把梦想坚持到底的能力", ["minori", "haruka", "kohane", "akito"]], ["让舞台瞬间沸腾的能力", ["saki", "an", "tsukasa", "emu"]], ["把内心世界做成作品的能力", ["toya", "nene", "rui", "mizuki"]]] },
  { tag: "结尾题", title: "测试结束后，你最想收到哪句话？", options: [["你一直都很努力，我看见了", ["minori", "akito", "ena", "kanade"]], ["和你在一起，世界会亮起来", ["saki", "an", "emu", "tsukasa"]], ["你不用变成别人期待的样子", ["toya", "mafuyu", "mizuki", "kohane"]], ["你很可靠，也可以偶尔依靠别人", ["ichika", "honami", "haruka", "shiho"]]] }
];

const scores = Object.fromEntries(characters.map((character) => [character.id, 0]));
const answers = [];
let currentQuestion = 0;

const quizCard = document.querySelector("#quizCard");
const questionTitle = document.querySelector("#questionTitle");
const questionTag = document.querySelector("#questionTag");
const questionCount = document.querySelector("#questionCount");
const optionGrid = document.querySelector("#optionGrid");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const prevBtn = document.querySelector("#prevBtn");
const restartBtn = document.querySelector("#restartBtn");
const retakeBtn = document.querySelector("#retakeBtn");
const resultSection = document.querySelector("#result");
const resultName = document.querySelector("#resultName");
const resultUnit = document.querySelector("#resultUnit");
const resultDescription = document.querySelector("#resultDescription");
const resultTraits = document.querySelector("#resultTraits");
const resultImage = document.querySelector("#resultImage");
const topMatches = document.querySelector("#topMatches");
const characterGrid = document.querySelector("#characterGrid");
const filterBar = document.querySelector("#filterBar");

function resetScores() {
  Object.keys(scores).forEach((key) => {
    scores[key] = 0;
  });
  answers.forEach((answer) => {
    if (!answer) return;
    answer.ids.forEach((id) => {
      scores[id] += 1;
    });
  });
}

function renderQuestion() {
  const question = questions[currentQuestion];
  questionTitle.textContent = question.title;
  questionTag.textContent = question.tag;
  questionCount.textContent = String(currentQuestion + 1).padStart(2, "0");
  progressText.textContent = `第 ${currentQuestion + 1} / ${questions.length} 题`;
  progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  prevBtn.disabled = currentQuestion === 0;

  optionGrid.innerHTML = "";
  question.options.forEach(([label, ids], index) => {
    const button = document.createElement("button");
    button.className = "option-button";
    button.type = "button";
    button.innerHTML = `<span>${String.fromCharCode(65 + index)}</span><strong>${label}</strong>`;
    if (answers[currentQuestion]?.index === index) {
      button.classList.add("is-selected");
    }
    button.addEventListener("click", () => chooseOption(index, ids));
    optionGrid.appendChild(button);
  });

  quizCard.classList.remove("is-swapping");
  window.requestAnimationFrame(() => quizCard.classList.add("is-ready"));
}

function chooseOption(index, ids) {
  answers[currentQuestion] = { index, ids };
  resetScores();

  document.querySelectorAll(".option-button").forEach((button, buttonIndex) => {
    button.classList.toggle("is-selected", buttonIndex === index);
  });

  window.setTimeout(() => {
    if (currentQuestion < questions.length - 1) {
      currentQuestion += 1;
      transitionQuestion();
    } else {
      showResult();
    }
  }, prefersReducedMotion ? 40 : 260);
}

function transitionQuestion() {
  quizCard.classList.add("is-swapping");
  window.setTimeout(renderQuestion, prefersReducedMotion ? 0 : 180);
}

function showResult() {
  const ranked = [...characters].sort((a, b) => scores[b.id] - scores[a.id]);
  const winner = ranked[0];
  resultName.textContent = winner.name;
  resultUnit.textContent = winner.unit;
  resultDescription.textContent = winner.description;
  resultImage.src = winner.image;
  resultImage.alt = `${winner.name} 角色视觉`;
  resultSection.hidden = false;
  resultSection.classList.add("is-visible");
  resultTraits.innerHTML = winner.traits.map((trait) => `<span>${trait}</span>`).join("");
  topMatches.innerHTML = ranked.slice(0, 3).map((character, index) => `
    <article style="--accent:${character.color}">
      <span>TOP ${index + 1}</span>
      <strong>${character.name}</strong>
      <small>${character.unit} · ${scores[character.id]} 分</small>
    </article>
  `).join("");
  burstConfetti(winner.color);
  resultSection.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
}

function restartQuiz() {
  answers.length = 0;
  currentQuestion = 0;
  resetScores();
  resultSection.hidden = true;
  renderQuestion();
  document.querySelector("#quiz").scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
}

prevBtn.addEventListener("click", () => {
  if (currentQuestion === 0) return;
  currentQuestion -= 1;
  transitionQuestion();
});

restartBtn.addEventListener("click", restartQuiz);
retakeBtn.addEventListener("click", restartQuiz);

function renderCharacters(unit = "all") {
  const list = unit === "all" ? characters : characters.filter((character) => character.unit === unit);
  characterGrid.innerHTML = list.map((character) => `
    <article class="character-card" style="--accent:${character.color}">
      <div class="character-portrait">
        <img src="${character.image}" alt="${character.name} 角色视觉" loading="lazy">
      </div>
      <div>
        <span>${character.unit}</span>
        <h3>${character.name}</h3>
        <p>${character.traits.join(" / ")}</p>
      </div>
    </article>
  `).join("");
}

filterBar.addEventListener("click", (event) => {
  const button = event.target.closest("[data-unit]");
  if (!button) return;
  document.querySelectorAll(".filter-chip").forEach((chip) => chip.classList.toggle("is-active", chip === button));
  renderCharacters(button.dataset.unit);
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

document.querySelectorAll("[data-reveal]").forEach((section) => revealObserver.observe(section));

const canvas = document.querySelector("#sparkCanvas");
const context = canvas.getContext("2d");
const particles = [];
const confetti = [];

function resizeCanvas() {
  const ratio = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * ratio;
  canvas.height = window.innerHeight * ratio;
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function seedParticles() {
  particles.length = 0;
  const count = window.innerWidth < 700 ? 32 : 72;
  for (let index = 0; index < count; index += 1) {
    particles.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: 1 + Math.random() * 2.8,
      speed: 0.18 + Math.random() * 0.45,
      hue: Math.random() * 360,
      alpha: 0.22 + Math.random() * 0.55
    });
  }
}

function burstConfetti(color) {
  if (prefersReducedMotion) return;
  for (let index = 0; index < 90; index += 1) {
    confetti.push({
      x: window.innerWidth / 2,
      y: window.innerHeight * 0.28,
      vx: -5 + Math.random() * 10,
      vy: -7 + Math.random() * 7,
      size: 5 + Math.random() * 8,
      rotation: Math.random() * Math.PI,
      color: Math.random() > 0.45 ? color : ["#33d6ff", "#ff66cc", "#ffe25d", "#9dff80"][Math.floor(Math.random() * 4)],
      life: 80 + Math.random() * 50
    });
  }
}

function draw() {
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  particles.forEach((particle) => {
    context.globalAlpha = particle.alpha;
    context.fillStyle = `hsl(${particle.hue} 92% 68%)`;
    context.beginPath();
    context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    context.fill();
    particle.y -= particle.speed;
    particle.x += Math.sin((particle.y + particle.hue) * 0.01) * 0.22;
    if (particle.y < -10) {
      particle.y = window.innerHeight + 10;
      particle.x = Math.random() * window.innerWidth;
    }
  });

  confetti.forEach((piece, index) => {
    context.save();
    context.globalAlpha = Math.max(piece.life / 100, 0);
    context.translate(piece.x, piece.y);
    context.rotate(piece.rotation);
    context.fillStyle = piece.color;
    context.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size * 0.58);
    context.restore();
    piece.x += piece.vx;
    piece.y += piece.vy;
    piece.vy += 0.18;
    piece.rotation += 0.12;
    piece.life -= 1;
    if (piece.life <= 0) confetti.splice(index, 1);
  });

  context.globalAlpha = 1;
  window.requestAnimationFrame(draw);
}

document.querySelectorAll("img").forEach((image) => {
  image.addEventListener("error", () => image.closest(".character-card, .result-art")?.classList.add("image-missing"));
});

resizeCanvas();
seedParticles();
renderQuestion();
renderCharacters();
if (!prefersReducedMotion) draw();
window.addEventListener("resize", () => {
  resizeCanvas();
  seedParticles();
});
