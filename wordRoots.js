// 初中英语词根学习系统 - 词根数据库
// 每个词根包含15-25个派生单词

const wordRoots = {
  // ==================== 动作类 ====================
  act: {
    root: "act",
    meaning: "做，行动",
    category: "动作",
    origin: "拉丁语 agere",
    words: [
      { word: "act", meaning: "行动", example: "We must act quickly." },
      { word: "action", meaning: "行动，行为", example: "Actions speak louder than words." },
      { word: "active", meaning: "积极的，活跃的", example: "She is an active student." },
      { word: "activity", meaning: "活动", example: "Sports activity is good for health." },
      { word: "actor", meaning: "演员", example: "The actor performed well." },
      { word: "actress", meaning: "女演员", example: "She wants to be an actress." },
      { word: "actual", meaning: "实际的，真实的", example: "What is the actual situation?" },
      { word: "exactly", meaning: "精确地", example: "Tell me exactly what happened." },
      { word: "interact", meaning: "互相作用", example: "Students interact with each other." },
      { word: "react", meaning: "反应", example: "How did he react to the news?" },
      { word: "enact", meaning: "制定，颁布", example: "The law was enacted last year." },
      { word: "overact", meaning: "表演过火", example: "Don't overact in the play." },
      { word: "transact", meaning: "交易", example: "We transact business online." },
      { word: "activate", meaning: "激活", example: "Click to activate the account." },
      { word: "reaction", meaning: "反应", example: "What was her reaction?" }
    ]
  },
  
  dict: {
    root: "dict",
    meaning: "说，断言",
    category: "动作",
    origin: "拉丁语 dicere",
    words: [
      { word: "dictate", meaning: "口述，听写", example: "The teacher dictates the text." },
      { word: "dictation", meaning: "听写", example: "We have a dictation today." },
      { word: "dictionary", meaning: "词典", example: "Look it up in the dictionary." },
      { word: "predict", meaning: "预测", example: "I predict it will rain." },
      { word: "prediction", meaning: "预测", example: "The weather prediction is accurate." },
      { word: "contradict", meaning: "反驳，矛盾", example: "Don't contradict your parents." },
      { word: "indicate", meaning: "表明，暗示", example: "The sign indicates the way." },
      { word: "indication", meaning: "迹象，暗示", example: "There is no indication of trouble." },
      { word: "dedicate", meaning: "奉献，致力于", example: "She dedicates her time to study." },
      { word: "addict", meaning: "使上瘾", example: "Don't get addicted to games." },
      { word: "addiction", meaning: "上瘾", example: "Gaming addiction is a problem." },
      { word: "jurisdiction", meaning: "管辖权", example: "This is under local jurisdiction." },
      { word: "dictator", meaning: "独裁者", example: "The dictator made all decisions." },
      { word: "verdict", meaning: "裁决，判决", example: "The jury gave their verdict." },
      { word: "predictable", meaning: "可预测的", example: "The ending was predictable." }
    ]
  },
  
  scrib: {
    root: "scrib/script",
    meaning: "写",
    category: "动作",
    origin: "拉丁语 scribere",
    words: [
      { word: "describe", meaning: "描述", example: "Describe the picture please." },
      { word: "description", meaning: "描述", example: "Give a detailed description." },
      { word: "prescribe", meaning: "开处方", example: "The doctor prescribes medicine." },
      { word: "prescription", meaning: "处方", example: "Show me your prescription." },
      { word: "subscribe", meaning: "订阅", example: "Subscribe to our channel." },
      { word: "subscription", meaning: "订阅", example: "Cancel my subscription." },
      { word: "script", meaning: "剧本，脚本", example: "Learn your script." },
      { word: "manuscript", meaning: "手稿", example: "The ancient manuscript is valuable." },
      { word: "postscript", meaning: "附言", example: "Add a postscript to the letter." },
      { word: "transcript", meaning: " transcript", example: "Get a transcript of the meeting." },
      { word: "inscribe", meaning: "题写，刻写", example: "Inscribe your name here." },
      { word: "scribble", meaning: "潦草书写", example: "Don't scribble in your notebook." },
      { word: "ascribe", meaning: "归因于", example: "Ascribe the success to hard work." },
      { word: "circumscribe", meaning: "限制", example: "Time circumscribes our options." },
      { word: "conscribe", meaning: "征召", example: "Soldiers were conscribed into the army." }
    ]
  },
  
  port: {
    root: "port",
    meaning: "拿，运",
    category: "动作",
    origin: "拉丁语 portare",
    words: [
      { word: "portable", meaning: "便携式的", example: "This is a portable computer." },
      { word: "transport", meaning: "运输", example: "Transport goods by truck." },
      { word: "transportation", meaning: "交通，运输", example: "Public transportation is convenient." },
      { word: "import", meaning: "进口", example: "China imports many goods." },
      { word: "export", meaning: "出口", example: "We export rice to other countries." },
      { word: "report", meaning: "报告", example: "Write a report about your trip." },
      { word: "reporter", meaning: "记者", example: "The reporter interviewed the star." },
      { word: "passport", meaning: "护照", example: "Bring your passport." },
      { word: "opportunity", meaning: "机会", example: "This is a good opportunity." },
      { word: "importance", meaning: "重要性", example: "Understand the importance of English." },
      { word: "important", meaning: "重要的", example: "This is important." },
      { word: "support", meaning: "支持", example: "I support your idea." },
      { word: "supporter", meaning: "支持者", example: "He is a fan supporter." },
      { word: "comport", meaning: "举止，行为", example: "Comport yourself with dignity." },
      { word: "deport", meaning: "驱逐出境", example: "The criminal was deported." },
      { word: "portfolio", meaning: "作品集", example: "Show me your portfolio." }
    ]
  },
  
  mit: {
    root: "mit/miss",
    meaning: "发送，放出",
    category: "动作",
    origin: "拉丁语 mittere",
    words: [
      { word: "permit", meaning: "允许", example: "Smoking is not permitted." },
      { word: "permission", meaning: "允许，许可", example: "Ask for permission first." },
      { word: "submit", meaning: "提交", example: "Submit your homework on time." },
      { word: "transmit", meaning: "传输，传播", example: "Transmit the signal." },
      { word: "transmission", meaning: "传输", example: "Data transmission is fast." },
      { word: "admit", meaning: "承认，允许进入", example: "Admit your mistake." },
      { word: "admission", meaning: "承认，入场费", example: "Admission is free." },
      { word: "commit", meaning: "犯（罪），承诺", example: "Commit a crime." },
      { word: "committee", meaning: "委员会", example: "The committee made a decision." },
      { word: "emit", meaning: "发出，散发", example: "Cars emit smoke." },
      { word: "omit", meaning: "省略，删除", example: "Omit this paragraph." },
      { word: "premit", meaning: "预先送出", example: "Premit the samples." },
      { word: "remit", meaning: "汇款", example: "Remit money to your family." },
      { word: "intermit", meaning: "中断", example: "The rain will intermit soon." },
      { word: "missile", meaning: "导弹", example: "The missile was launched." }
    ]
  },
  
  pend: {
    root: "pend",
    meaning: "悬挂，支付",
    category: "动作",
    origin: "拉丁语 pendere",
    words: [
      { word: "suspend", meaning: "暂停，悬挂", example: "The game was suspended." },
      { word: "suspense", meaning: "悬念", example: "The movie is full of suspense." },
      { word: "spending", meaning: "花费，开支", example: "Control your spending." },
      { word: "spend", meaning: "花费", example: "I spend money on books." },
      { word: "expense", meaning: "费用", example: "Travel expense is high." },
      { word: "expensive", meaning: "昂贵的", example: "This bag is expensive." },
      { word: "inexpensive", meaning: "便宜的", example: "Buy an inexpensive watch." },
      { word: "depend", meaning: "依赖", example: "Don't depend on others." },
      { word: "dependent", meaning: "依赖的", example: "He is still dependent on his parents." },
      { word: "independence", meaning: "独立", example: "Independence Day is celebrated." },
      { word: "independent", meaning: "独立的", example: "She is an independent woman." },
      { word: "appendix", meaning: "附录，阑尾", example: "See the appendix." },
      { word: "impend", meaning: "即将发生", example: "Danger impends over us." },
      { word: "expend", meaning: "花费，消耗", example: "Expend all your energy." },
      { word: "pension", meaning: "养老金", example: "Retirees get a pension." }
    ]
  },
  
  tend: {
    root: "tend/tens",
    meaning: "伸展，趋向",
    category: "动作",
    origin: "拉丁语 tendere",
    words: [
      { word: "tend", meaning: "趋向，照顾", example: "She tends to be late." },
      { word: "trend", meaning: "趋势", example: "The trend is changing." },
      { word: "extend", meaning: "延伸，扩大", example: "Extend your arms." },
      { word: "extension", meaning: "延伸，延期", example: "Get an extension." },
      { word: "extent", meaning: "程度，范围", example: "To some extent, I agree." },
      { word: "intend", meaning: "打算", example: "I intend to study hard." },
      { word: "intention", meaning: "意图", example: "What is your intention?" },
      { word: "tense", meaning: "紧张的，时态", example: "He is very tense." },
      { word: "tension", meaning: "紧张，张力", example: "Reduce the tension." },
      { word: "intense", meaning: "强烈的", example: "The heat is intense." },
      { word: "intensity", meaning: "强度", example: "The intensity of light." },
      { word: "pretend", meaning: "假装", example: "Don't pretend to be sick." },
      { word: "contend", meaning: "竞争，争论", example: "Contend for the prize." },
      { word: "distend", meaning: "扩张，膨胀", example: "His stomach began to distend." },
      { word: "portend", meaning: "预示", example: "This event portends trouble." }
    ]
  },
  
  rupt: {
    root: "rupt",
    meaning: "断裂",
    category: "动作",
    origin: "拉丁语 rumpere",
    words: [
      { word: "interrupt", meaning: "打断", example: "Don't interrupt while I'm speaking." },
      { word: "interruption", meaning: "打断，中断", example: "Sorry for the interruption." },
      { word: "erupt", meaning: "爆发", example: "The volcano erupts." },
      { word: "eruption", meaning: "爆发", example: "The eruption was massive." },
      { word: "bankrupt", meaning: "破产的", example: "The company went bankrupt." },
      { word: "bankruptcy", meaning: "破产", example: "He declared bankruptcy." },
      { word: "corrupt", meaning: "腐败的", example: "Corrupt officials must be punished." },
      { word: "corruption", meaning: "腐败", example: "Fight against corruption." },
      { word: "disrupt", meaning: "中断，破坏", example: "Disrupt the traffic." },
      { word: "disruption", meaning: "中断", example: "The disruption caused delays." },
      { word: "abrupt", meaning: "突然的", example: "The abrupt stop surprised us." },
      { word: "abruptly", meaning: "突然地", example: "He stopped abruptly." },
      { word: "rupture", meaning: "破裂", example: "The pipe suffered a rupture." },
      { word: "incorruptible", meaning: "廉洁的", example: "An incorruptible judge." },
      { word: "corruptly", meaning: "腐败地", example: "He acted corruptly." }
    ]
  },
  
  claim: {
    root: "claim",
    meaning: "呼喊，声称",
    category: "动作",
    origin: "拉丁语 clamare",
    words: [
      { word: "claim", meaning: "声称，要求", example: "Don't claim without evidence." },
      { word: "proclaim", meaning: "宣布，声明", example: "Proclaim the good news." },
      { word: "proclamation", meaning: "宣布", example: "Issue a proclamation." },
      { word: "exclaim", meaning: "呼喊，惊叫", example: "She couldn't help but exclaim." },
      { word: "exclamation", meaning: "呼喊", example: "An exclamation mark (!)" },
      { word: "reclaim", meaning: "收回，要求归还", example: "Reclaim your rights." },
      { word: "declaim", meaning: "慷慨陈词", example: "He declaimed against violence." },
      { word: "declaration", meaning: "宣言，声明", example: "Sign the declaration." },
      { word: "declare", meaning: "宣布", example: "Declare war." },
      { word: "acclaim", meaning: "欢呼，称赞", example: "The song received acclaim." },
      { word: "acclamation", meaning: "欢呼", example: "The team won by acclamation." },
      { word: "disclaim", meaning: "否认，拒绝", example: "Disclaim responsibility." },
      { word: "disclaimer", meaning: "免责声明", example: "Read the disclaimer." },
      { word: "clamor", meaning: "喧嚷", example: "The clamor of the crowd." },
      { word: "clamorous", meaning: "喧闹的", example: "A clamorous protest." }
    ]
  },
  
  flu: {
    root: "flu",
    meaning: "流动",
    category: "动作",
    origin: "拉丁语 fluere",
    words: [
      { word: "fluent", meaning: "流利的", example: "She speaks fluent English." },
      { word: "fluency", meaning: "流利", example: "Develop your fluency." },
      { word: "influence", meaning: "影响", example: "Music influences people." },
      { word: "influential", meaning: "有影响力的", example: "He is an influential person." },
      { word: "fluid", meaning: "液体，流体的", example: "Water is a fluid." },
      { word: "flush", meaning: "冲洗，脸红", example: "Flush the toilet." },
      { word: "flute", meaning: "长笛", example: "Play the flute." },
      { word: "confluence", meaning: "汇合", example: "A confluence of rivers." },
      { word: "confluent", meaning: "汇合的", example: "Confluent streams." },
      { word: "effluent", meaning: "污水", example: "Treat the effluent." },
      { word: "refluent", meaning: "倒流的", example: "Refluent tide." },
      { word: "superfluous", meaning: "多余的", example: "Remove superfluous words." },
      { word: "flutter", meaning: "飘动", example: "The flag flutters." },
      { word: "flurry", meaning: "一阵风雪", example: "A flurry of snow." },
      { word: "influx", meaning: "流入", example: "An influx of tourists." }
    ]
  },
  
  ject: {
    root: "ject",
    meaning: "投掷，抛",
    category: "动作",
    origin: "拉丁语 jacere",
    words: [
      { word: "inject", meaning: "注射", example: "Inject the medicine." },
      { word: "injection", meaning: "注射", example: "Get an injection." },
      { word: "project", meaning: "项目，投射", example: "Finish the project." },
      { word: "projector", meaning: "投影仪", example: "Use the projector." },
      { word: "reject", meaning: "拒绝", example: "Don't reject my idea." },
      { word: "rejection", meaning: "拒绝", example: "Face the rejection." },
      { word: "subject", meaning: "主题，学科", example: "What's the subject?" },
      { word: "object", meaning: "物体，对象，反对", example: "What is this object?" },
      { word: "objective", meaning: "客观的，目标", example: "My objective is clear." },
      { word: "objection", meaning: "反对", example: "I have no objection." },
      { word: "interject", meaning: "插话", example: "Don't interject." },
      { word: "conjecture", meaning: "推测", example: "Make a conjecture." },
      { word: "deject", meaning: "使沮丧", example: "Don't be dejected." },
      { word: "dejection", meaning: "沮丧", example: "Feel dejection." },
      { word: "trajectory", meaning: "轨道，弹道", example: "The missile's trajectory." }
    ]
  },
  
  mov: {
    root: "mov/mot",
    meaning: "移动",
    category: "动作",
    origin: "拉丁语 movere",
    words: [
      { word: "move", meaning: "移动", example: "Move to the left." },
      { word: "movement", meaning: "移动，运动", example: "The movement of the earth." },
      { word: "movie", meaning: "电影", example: "Watch a movie." },
      { word: "remove", meaning: "移除", example: "Remove the stain." },
      { word: "motor", meaning: "发动机", example: "Start the motor." },
      { word: "motion", meaning: "运动", example: "The motion of waves." },
      { word: "motivate", meaning: "激励", example: "Motivate your team." },
      { word: "motivation", meaning: "动力", example: "Lack of motivation." },
      { word: "emotion", meaning: "情感", example: "Express your emotion." },
      { word: "emotional", meaning: "情感的", example: "An emotional moment." },
      { word: "promote", meaning: "促进，提升", example: "Promote friendship." },
      { word: "promotion", meaning: "提升，促销", example: "Get a promotion." },
      { word: "remote", meaning: "遥远的，遥控器", example: "In a remote area." },
      { word: "moblie", meaning: "移动的", example: "A mobile phone." },
      { word: "immovable", meaning: "不可移动的", example: "An immovable object." }
    ]
  },
  
  rect: {
    root: "rect",
    meaning: "直的，正确",
    category: "动作",
    origin: "拉丁语 regere",
    words: [
      { word: "correct", meaning: "正确的", example: "This is correct." },
      { word: "correctly", meaning: "正确地", example: "Spell it correctly." },
      { word: "incorrect", meaning: "不正确的", example: "The answer is incorrect." },
      { word: "direct", meaning: "直接的", example: "Take the direct route." },
      { word: "direction", meaning: "方向", example: "Which direction?" },
      { word: "director", meaning: "导演，主管", example: "The movie director." },
      { word: "erect", meaning: "竖立的，建立", example: "Erect a building." },
      { word: "rectify", meaning: "纠正", example: "Rectify the mistake." },
      { word: "rectangle", meaning: "矩形", example: "Draw a rectangle." },
      { word: "rectitude", meaning: "正直", example: "Show rectitude." },
      { word: "indirect", meaning: "间接的", example: "An indirect answer." },
      { word: "insect", meaning: "昆虫", example: "An insect has six legs." },
      { word: "resurrect", meaning: "复活", example: "Resurrect the old tradition." },
      { word: "section", meaning: "部分，章节", example: "Read section 3." },
      { word: "sector", meaning: "部门，扇形", example: "The private sector." }
    ]
  },
  
  spect: {
    root: "spect",
    meaning: "看",
    category: "动作",
    origin: "拉丁语 specere",
    words: [
      { word: "see", meaning: "看见", example: "I can see the bird." },
      { word: "look", meaning: "看", example: "Look at the board." },
      { word: "spectator", meaning: "观众", example: "The spectators cheered." },
      { word: "spectacle", meaning: "景象，表演", example: "A spectacular view." },
      { word: "spectacular", meaning: "壮观的", example: "A spectacular show." },
      { word: "inspect", meaning: "检查", example: "Inspect the product." },
      { word: "inspection", meaning: "检查", example: "Pass the inspection." },
      { word: "inspector", meaning: "检查员", example: "The inspector arrived." },
      { word: "respect", meaning: "尊重", example: "Respect your parents." },
      { word: "respectful", meaning: "恭敬的", example: "Be respectful." },
      { word: "respective", meaning: "各自的", example: "Go to your respective seats." },
      { word: "suspect", meaning: "怀疑", example: "Don't suspect others." },
      { word: "expect", meaning: "期待", example: "I expect success." },
      { word: "expectation", meaning: "期待", example: "Meet the expectation." },
      { word: "aspect", meaning: "方面", example: "Consider every aspect." }
    ]
  },
  
  struct: {
    root: "struct",
    meaning: "建造",
    category: "动作",
    origin: "拉丁语 struere",
    words: [
      { word: "structure", meaning: "结构", example: "The structure of the building." },
      { word: "construct", meaning: "建造", example: "Construct a bridge." },
      { word: "construction", meaning: "建设", example: "The construction is fast." },
      { word: "destruct", meaning: "破坏", example: "Destruct the evidence." },
      { word: "destruction", meaning: "破坏", example: "Environmental destruction." },
      { word: "destructive", meaning: "破坏性的", example: "A destructive storm." },
      { word: "instruct", meaning: "指导", example: "Instruct the students." },
      { word: "instruction", meaning: "指令", example: "Follow the instructions." },
      { word: "instructor", meaning: "教练", example: "The driving instructor." },
      { word: "obstruct", meaning: "阻碍", example: "Don't obstruct the traffic." },
      { word: "obstruction", meaning: "阻碍物", example: "Remove the obstruction." },
      { word: "superstructure", meaning: "上层建筑", example: "The superstructure of the ship." },
      { word: "infrastructure", meaning: "基础设施", example: "Improve infrastructure." },
      { word: "restructure", meaning: "重组", example: "Restructure the company." },
      { word: "substructure", meaning: "基础，下部结构", example: "The substructure of the bridge." }
    ]
  },
  
  tract: {
    root: "tract",
    meaning: "拉，抽",
    category: "动作",
    origin: "拉丁语 trahere",
    words: [
      { word: "tractor", meaning: "拖拉机", example: "The tractor works in the field." },
      { word: "attract", meaning: "吸引", example: "Attract attention." },
      { word: "attraction", meaning: "吸引力", example: "The main attraction." },
      { word: "attractive", meaning: "有吸引力的", example: "She is attractive." },
      { word: "distract", meaning: "使分心", example: "Don't distract the driver." },
      { word: "distraction", meaning: "分心", example: "Study without distraction." },
      { word: "extract", meaning: "提取", example: "Extract juice from fruit." },
      { word: "extraction", meaning: "提取", example: "Oil extraction." },
      { word: "contract", meaning: "合同", example: "Sign a contract." },
      { word: "protract", meaning: "延长", example: "Don't protract the meeting." },
      { word: "retract", meaning: "收回", example: "Retract your statement." },
      { word: "subtract", meaning: "减去", example: "Subtract 5 from 10." },
      { word: "subtraction", meaning: "减法", example: "Learn subtraction." },
      { word: "traction", meaning: "牵引", example: "The wheel lost traction." },
      { word: "portray", meaning: "描绘", example: "Portray a character." }
    ]
  },
  
  vert: {
    root: "vert/vers",
    meaning: "转，翻转",
    category: "动作",
    origin: "拉丁语 vertere",
    words: [
      { word: "turn", meaning: "转", example: "Turn left." },
      { word: "reverse", meaning: "反转", example: "Reverse the car." },
      { word: "universe", meaning: "宇宙", example: "Explore the universe." },
      { word: "universal", meaning: "普遍的", example: "A universal truth." },
      { word: "university", meaning: "大学", example: "Go to university." },
      { word: "convert", meaning: "转换", example: "Convert water to ice." },
      { word: "conversation", meaning: "对话", example: "Have a conversation." },
      { word: "diverse", meaning: "多样的", example: "Diverse cultures." },
      { word: "diversity", meaning: "多样性", example: "Cultural diversity." },
      { word: "divert", meaning: "转向，娱乐", example: "Divert traffic." },
      { word: "adverse", meaning: "不利的", example: "Adverse weather." },
      { word: "advertise", meaning: "做广告", example: "Advertise a product." },
      { word: "advertisement", meaning: "广告", example: "Watch an advertisement." },
      { word: "controversy", meaning: "争议", example: "Cause controversy." },
      { word: "controversial", meaning: "有争议的", example: "A controversial topic." }
    ]
  },
  
  vis: {
    root: "vis/vid",
    meaning: "看",
    category: "动作",
    origin: "拉丁语 videre",
    words: [
      { word: "see", meaning: "看见", example: "I can see clearly." },
      { word: "visit", meaning: "参观，访问", example: "Visit the museum." },
      { word: "visitor", meaning: "访客", example: "Welcome the visitors." },
      { word: "visa", meaning: "签证", example: "Apply for a visa." },
      { word: "video", meaning: "视频", example: "Watch a video." },
      { word: "vision", meaning: "视力，视野", example: "Good vision." },
      { word: "television", meaning: "电视", example: "Watch television." },
      { word: "visible", meaning: "可见的", example: "The star is visible." },
      { word: "invisible", meaning: "看不见的", example: "An invisible man." },
      { word: "advice", meaning: "建议", example: "Take my advice." },
      { word: "advise", meaning: "建议", example: "I advise you to go." },
      { word: "supervise", meaning: "监督", example: "Supervise the work." },
      { word: "supervisor", meaning: "监督者", example: "Ask your supervisor." },
      { word: "revise", meaning: "复习，修改", example: "Revise your lesson." },
      { word: "revision", meaning: "复习", example: "Do revision before the test." }
    ]
  },

  // ==================== 人物类 ====================
  anthrop: {
    root: "anthrop",
    meaning: "人类",
    category: "人物",
    origin: "希腊语 anthropos",
    words: [
      { word: "anthropology", meaning: "人类学", example: "Study anthropology." },
      { word: "anthropologist", meaning: "人类学家", example: "The anthropologist researched ancient humans." },
      { word: "anthropoid", meaning: "像人类的", example: "An anthropoid ape." },
      { word: "anthropocentric", meaning: "人类中心的", example: "An anthropocentric view." },
      { word: "misanthrope", meaning: "厌世者", example: "He became a misanthrope." },
      { word: "misanthropy", meaning: "厌世", example: "Misanthropy is rare." },
      { word: "philanthropist", meaning: "慈善家", example: "The philanthropist donated money." },
      { word: "philanthropy", meaning: "慈善", example: "Practice philanthropy." },
      { word: "anthropography", meaning: "人类分布学", example: "Anthropography studies human distribution." },
      { word: "anthropometry", meaning: "人体测量学", example: "Use anthropometry." },
      { word: "anthropophobia", meaning: "人群恐惧", example: "She suffers from anthropophobia." },
      { word: "anthropogenesis", meaning: "人类起源", example: "Study anthropogenesis." },
      { word: "anthropomorphic", meaning: "人形化的", example: "Anthropomorphic characters." },
      { word: "anthropathia", meaning: "人类情感", example: "Anthropathia describes human feelings." },
      { word: "panthropology", meaning: "泛人类学", example: "Panthropology covers all human studies." }
    ]
  },
  
  manu: {
    root: "manu",
    meaning: "手",
    category: "人物",
    origin: "拉丁语 manus",
    words: [
      { word: "manual", meaning: "手工的，手册", example: "Read the manual." },
      { word: "manufacture", meaning: "制造", example: "Manufacture cars." },
      { word: "manufacturer", meaning: "制造商", example: "The manufacturer is Japanese." },
      { word: "manuscript", meaning: "手稿", example: "An ancient manuscript." },
      { word: "manoeuvre", meaning: "操纵", example: "Manoeuvre the car." },
      { word: "manacle", meaning: "手铐", example: "Put on the manacles." },
      { word: "manage", meaning: "管理", example: "Manage a team." },
      { word: "manager", meaning: "经理", example: "The store manager." },
      { word: "management", meaning: "管理", example: "Time management." },
      { word: "manifest", meaning: "显示，表明", example: "Manifest your dream." },
      { word: "manipulate", meaning: "操纵", example: "Don't manipulate others." },
      { word: "manipulation", meaning: "操纵", example: "Media manipulation." },
      { word: "maintain", meaning: "维持，保持", example: "Maintain good health." },
      { word: "manumit", meaning: "解放（奴隶）", example: "Manumit the slaves." },
      { word: "emancipate", meaning: "解放", example: "Emancipate the serfs." }
    ]
  },
  
  ped: {
    root: "ped",
    meaning: "脚，足",
    category: "人物",
    origin: "希腊语 pes/podos",
    words: [
      { word: "pedestrian", meaning: "行人", example: "Pedestrians use the sidewalk." },
      { word: "pedal", meaning: "踏板", example: "Press the pedal." },
      { word: "pedestrianize", meaning: " pedestrianize", example: "Pedestrianize the street." },
      { word: "expedition", meaning: "远征", example: "Join an expedition." },
      { word: "impede", meaning: "阻碍", example: "Don't impede progress." },
      { word: "impediment", meaning: "障碍", example: "A speech impediment." },
      word: "centipede", meaning: "蜈蚣", example: "A centipede has many legs." },
      { word: "millipede", meaning: "千足虫", example: "A millipede curls up." },
      { word: "pedicure", meaning: "足疗", example: "Get a pedicure." },
      { word: "pedometer", meaning: "计步器", example: "Use a pedometer." },
      { word: "biped", meaning: "两足动物", example: "Humans are bipeds." },
      { word: "quadruped", meaning: "四足动物", example: "Dogs are quadrupeds." },
      { word: "antipedagogic", meaning: "反教育的", example: "An antipedagogic approach." },
      { word: "expedite", meaning: "加快", example: "Expedite the process." },
      { word: "expeditious", meaning: "迅速效率的", example: "An expeditious response." }
    ]
  },
  
  phon: {
    root: "phon",
    meaning: "声音",
    category: "人物",
    origin: "希腊语 phone",
    words: [
      { word: "phone", meaning: "电话", example: "Call me on the phone." },
      { word: "telephone", meaning: "电话", example: "Pick up the telephone." },
      { word: "microphone", meaning: "麦克风", example: "Speak into the microphone." },
      { word: "phonics", meaning: "语音学", example: "Learn phonics." },
      { word: "phonetic", meaning: "语音的", example: "Phonetic spelling." },
      { word: "phonograph", meaning: "留声机", example: "An old phonograph." },
      { word: "symphony", meaning: "交响乐", example: "Play in the symphony." },
      { word: "synchronous", meaning: "同步的", example: "Synchronous learning." },
      { word: "euphonious", meaning: "悦耳的", example: "Euphonious music." },
      { word: "cacophony", meaning: "刺耳的声音", example: "A cacophony of sounds." },
      { word: "dysphonia", meaning: "发声困难", example: "Suffer from dysphonia." },
      { word: "aphonia", meaning: "失声", example: "Aphonia after a cold." },
      { word: "phoneme", meaning: "音素", example: "The phoneme /k/." },
      { word: "phonology", meaning: "音韵学", example: "Study phonology." },
      { word: "videophone", meaning: "可视电话", example: "Use a videophone." }
    ]
  },
  
  corp: {
    root: "corp",
    meaning: "身体，团体",
    category: "人物",
    origin: "拉丁语 corpus",
    words: [
      { word: "corporate", meaning: "公司的", example: "Corporate culture." },
      { word: "corporation", meaning: "公司", example: "A large corporation." },
      { word: "corpse", meaning: "尸体", example: "The corpse was buried." },
      { word: "corps", meaning: "军团", example: "The diplomatic corps." },
      { word: "corpus", meaning: "文集，语料库", example: "A corpus of data." },
      { word: "incorporate", meaning: "合并，包含", example: "Incorporate new ideas." },
      { word: "corporeal", meaning: "肉体的，有形的", example: "Corporeal needs." },
      { word: "incorporeal", meaning: "无形体的", example: "Incorporeal beings." },
      { word: "corpuscle", meaning: "血球", example: "Red corpuscles." },
      { word: "corporal", meaning: "肉体的", example: "Corporal punishment." },
      { word: "corpulence", meaning: "肥胖", example: "Excessive corpulence." },
      { word: "corpus delicti", meaning: "犯罪事实", example: "Establish the corpus delicti." },
      { word: "Hippocor", meaning: "人造词", example: "Hippocor is a made-up word." },
      { word: "corporatize", meaning: "企业化", example: "Corporatize the industry." },
      { word: "corpseflower", meaning: "尸花", example: "The corpseflower smells bad." }
    ]
  },
  
  gen: {
    root: "gen",
    meaning: "出生，种类",
    category: "人物",
    origin: "希腊语 genos",
    words: [
      { word: "generate", meaning: "产生", example: "Generate electricity." },
      { word: "generation", meaning: "一代", example: "The younger generation." },
      { word: "generator", meaning: "发电机", example: "Start the generator." },
      { word: "general", meaning: "一般的，普遍的", example: "A general rule." },
      { word: "genetic", meaning: "遗传的", example: "Genetic information." },
      { word: "genius", meaning: "天才", example: "He is a genius." },
      { word: "genuine", meaning: "真正的", example: "A genuine diamond." },
      { word: "homogeneous", meaning: "同质的", example: "A homogeneous group." },
      { word: "heterogeneous", meaning: "异质的", example: "A heterogeneous mixture." },
      { word: "oxygen", meaning: "氧气", example: "We need oxygen." },
      { word: "hydrogen", meaning: "氢气", example: "Hydrogen is light." },
      { word: "nitrogen", meaning: "氮气", example: "Nitrogen in the air." },
      { word: "genesis", meaning: "起源", example: "The genesis of life." },
      { word: "progeny", meaning: "后代", example: "The progeny of animals." },
      { word: "progenitor", meaning: "祖先", example: "The progenitor of the family." }
    ]
  },
  
  liter: {
    root: "liter",
    meaning: "文字，字母",
    category: "人物",
    origin: "拉丁语 littera",
    words: [
      { word: "literacy", meaning: "识字", example: "Promote literacy." },
      { word: "literate", meaning: "识字的", example: "She is literate." },
      { word: "illiterate", meaning: "文盲的", example: "Help the illiterate." },
      { word: "literature", meaning: "文学", example: "English literature." },
      { word: "literal", meaning: "字面的", example: "The literal meaning." },
      { word: "literally", meaning: "字面上", example: "I literally means literally." },
      { word: "alliterate", meaning: "押头韵", example: "Alliterate in poetry." },
      { word: "obliterate", meaning: "抹去", example: "Obliterate the evidence." },
      { word: "transliterate", meaning: "音译", example: "Transliterate Chinese names." },
      { word: "literatus", meaning: "文人", example: "A literatus writes well." },
      { word: "literary", meaning: "文学的", example: "Literary works." },
      { word: "preliterate", meaning: "文字出现前的", example: "Preliterate societies." },
      { word: "postliterate", meaning: "后文字时代的", example: "Postliterate culture." },
      { word: "literation", meaning: "用字母表示", example: "Literation of sounds." },
      { word: "illiteracy", meaning: "文盲", example: "Fight illiteracy." }
    ]
  },
  
  path: {
    root: "path",
    meaning: "感情，疾病",
    category: "人物",
    origin: "希腊语 pathos",
    words: [
      { word: "sympathy", meaning: "同情", example: "Feel sympathy." },
      { word: "sympathize", meaning: "同情", example: "Sympathize with others." },
      { word: "pathetic", meaning: "可怜的", example: "A pathetic sight." },
      { word: "antipathy", meaning: "反感", example: "Show antipathy." },
      { word: "apathy", meaning: "冷漠", example: "Political apathy." },
      { word: "apathetic", meaning: "冷漠的", example: "Apathetic students." },
      { word: "empathy", meaning: "同理心", example: "Show empathy." },
      { word: "empathic", meaning: "有同理心的", example: "An empathic response." },
      { word: "pathology", meaning: "病理学", example: "Study pathology." },
      { word: "pathologist", meaning: "病理学家", example: "The pathologist examined the tissue." },
      { word: "pathogen", meaning: "病原体", example: "A dangerous pathogen." },
      { word: "pathogenic", meaning: "致病的", example: "Pathogenic bacteria." },
      { word: "psychopath", meaning: "精神病患者", example: "The movie features a psychopath." },
      { word: "sociopath", meaning: "反社会者", example: "A sociopath lacks empathy." },
      { word: "homeopathy", meaning: "顺势疗法", example: "Try homeopathy." }
    ]
  },
  
  popul: {
    root: "popul",
    meaning: "人民",
    category: "人物",
    origin: "拉丁语 populus",
    words: [
      { word: "population", meaning: "人口", example: "The population grows." },
      { word: "popular", meaning: "流行的，受欢迎的", example: "A popular song." },
      { word: "popularity", meaning: "受欢迎", example: "Gain popularity." },
      { word: "populate", meaning: "居住于", example: "Populate the area." },
      { word: "populous", meaning: "人口稠密的", example: "A populous city." },
      { word: "depopulate", meaning: "使人口减少", example: "War depopulated the region." },
      { word: "overpopulate", meaning: "使人口过剩", example: "Overpopulate the earth." },
      { word: "underpopulate", meaning: "人口稀少", example: "Underpopulate rural areas." },
      { word: "repopulate", meaning: "重新居住", example: "Repopulate the island." },
      { word: "populationist", meaning: "人口控制论者", example: "A populationist supports population control." },
      { word: "populace", meaning: "平民", example: "The general populace." },
      { word: "populism", meaning: "民粹主义", example: "Rise of populism." },
      { word: "populist", meaning: "民粹主义者", example: "A populist leader." },
      { word: "populuxe", meaning: "Popularlyluxe", example: "Populuxe describes popular luxury." },
      { word: "pop culture", meaning: "流行文化", example: "Follow pop culture." }
    ]
  },
  
  soc: {
    root: "soc",
    meaning: "社会，伴随",
    category: "人物",
    origin: "拉丁语 socius",
    words: [
      { word: "social", meaning: "社会的", example: "Social media." },
      { word: "society", meaning: "社会", example: "Human society." },
      { word: "sociology", meaning: "社会学", example: "Study sociology." },
      { word: "sociologist", meaning: "社会学家", example: "The sociologist researched social behavior." },
      { word: "associate", meaning: "联系，伙伴", example: "Associate with good friends." },
      { word: "association", meaning: "协会", example: "Join an association." },
      { word: "socialize", meaning: "社交", example: "Socialize with classmates." },
      { word: "socialism", meaning: "社会主义", example: "Believe in socialism." },
      { word: "socialist", meaning: "社会主义者", example: "He is a socialist." },
      { word: "sociable", meaning: "好社交的", example: "She is very sociable." },
      { word: "unsociable", meaning: "不合群的", example: "An unsociable person." },
      { word: "consociate", meaning: "联合的", example: "Consociate groups." },
      { word: "consociation", meaning: "联合", example: "A consociation of nations." },
      { word: "dissociate", meaning: "分离", example: "Dissociate yourself from bad habits." },
      { word: "dissociation", meaning: "分离", example: "Chemical dissociation." }
    ]
  },
  
  spec: {
    root: "spec",
    meaning: "看",
    category: "人物",
    origin: "拉丁语 specere",
    words: [
      { word: "special", meaning: "特别的", example: "A special gift." },
      { word: "specialist", meaning: "专家", example: "A medical specialist." },
      { word: "specialty", meaning: "专业", example: "Her specialty is art." },
      { word: "especially", meaning: "尤其", example: "I like music, especially pop." },
      { word: "specimen", meaning: "样本", example: "A specimen of blood." },
      { word: "specific", meaning: "具体的", example: "Give a specific answer." },
      { word: "specify", meaning: "指定", example: "Specify the requirements." },
      { word: "specification", meaning: "规格", example: "Read the specifications." },
      { word: "specious", meaning: "华而不实的", example: "A specious argument." },
      { word: "auspicious", meaning: "吉祥的", example: "An auspicious start." },
      { word: "circumspect", meaning: "谨慎的", example: "Be circumspect." },
      { word: "conspicuous", meaning: "显眼的", example: "Make it conspicuous." },
      { word: "despicable", meaning: "卑鄙的", example: "Despicable behavior." },
      { word: "espial", meaning: "发现", example: "The espial of the thief." },
      { word: "inspective", meaning: "检查的", example: "An inspective look." }
    ]
  },
  
  strat: {
    root: "strat",
    meaning: "军队，层次",
    category: "人物",
    origin: "拉丁语 stratum",
    words: [
      { word: "strategy", meaning: "策略", example: "A good strategy." },
      { word: "strategic", meaning: "战略的", example: "Strategic planning." },
      { word: "strategist", meaning: "战略家", example: "A military strategist." },
      { word: "stratum", meaning: "地层，社会阶层", example: "Social strata." },
      { word: "stratify", meaning: "分层", example: "Stratify the data." },
      { word: "stratification", meaning: "分层", example: "Social stratification." },
      { word: "substrate", meaning: "底层", example: "The substrate of the paint." },
      { word: "prostrate", meaning: "俯卧的", example: "Lie prostrate." },
      { word: "strate", meaning: "层面", example: "A geological strate." },
      { word: "stratic", meaning: "层次的", example: "Stratic analysis." },
      { word: "strath", meaning: "宽谷", example: "A strath in Scotland." },
      { word: "estrade", meaning: "讲台", example: "Stand on the estrade." },
      { word: "strato", meaning: "层云", example: "Strato clouds." },
      { word: "stratosphere", meaning: "平流层", example: "Fly in the stratosphere." },
      { word: "strategy", meaning: "战略", example: "Develop a strategy." }
    ]
  },

  // ==================== 状态类 ====================
  bio: {
    root: "bio",
    meaning: "生命",
    category: "状态",
    origin: "希腊语 bios",
    words: [
      { word: "biology", meaning: "生物学", example: "Study biology." },
      { word: "biologist", meaning: "生物学家", example: "The biologist studied plants." },
      { word: "biography", meaning: "传记", example: "Read a biography." },
      { word: "autobiography", meaning: "自传", example: "Write an autobiography." },
      { word: "biotech", meaning: "生物技术", example: "Work in biotech." },
      { word: "antibiotic", meaning: "抗生素", example: "Take antibiotics." },
      { word: "symbiosis", meaning: "共生", example: "Symbiosis in nature." },
      { word: "biochemistry", meaning: "生物化学", example: "Study biochemistry." },
      { word: "biodegradable", meaning: "可生物降解的", example: "Use biodegradable materials." },
      { word: "biodiversity", meaning: "生物多样性", example: "Protect biodiversity." },
      { word: "biography", meaning: " biography", example: "A biography of Einstein." },
      { word: "biopsy", meaning: "活检", example: "Do a biopsy." },
      { word: "biometric", meaning: "生物识别的", example: "Biometric security." },
      { word: "biosphere", meaning: "生物圈", example: "Protect the biosphere." },
      { word: "microbe", meaning: "微生物", example: "A microscopic microbe." }
    ]
  },
  
  chron: {
    root: "chron",
    meaning: "时间",
    category: "状态",
    origin: "希腊语 chronos",
    words: [
      { word: "chronology", meaning: "年代学", example: "Study chronology." },
      { word: "chronological", meaning: "按时间顺序的", example: "Put events in chronological order." },
      { word: "chronic", meaning: "慢性的", example: "Chronic disease." },
      { word: "synchronize", meaning: "同步", example: "Synchronize your watch." },
      { word: "synchronous", meaning: "同步的", example: "Synchronous communication." },
      { word: "anachronism", meaning: "时代错误", example: "An anachronism in the film." },
      { word: "chronicle", meaning: "编年史", example: "Read the chronicle." },
      { word: "chronometer", meaning: "精密计时器", example: "Use a chronometer." },
      { word: "chronograph", meaning: "计时器", example: "A precise chronograph." },
      { word: "isochronous", meaning: "等时的", example: "Isochronous rhythm." },
      { word: "diachronic", meaning: "历时的", example: "Diachronic linguistics." },
      { word: "metachronous", meaning: "异时的", example: "Metachronous events." },
      { word: "parachronism", meaning: "笔误", example: "A parachronism in history." },
      { word: "chronophobia", meaning: "时间恐惧", example: "Suffer from chronophobia." },
      { word: "chronometer", meaning: "天文钟", example: "A marine chronometer." }
    ]
  },
  
  magn: {
    root: "magn",
    meaning: "大",
    category: "状态",
    origin: "拉丁语 magnus",
    words: [
      { word: "magnificent", meaning: "壮丽的", example: "A magnificent view." },
      { word: "magnify", meaning: "放大", example: "Magnify the image." },
      { word: "magnifier", meaning: "放大镜", example: "Use a magnifier." },
      { word: "magnification", meaning: "放大倍数", example: "Increase magnification." },
      { word: "magnitude", meaning: "大小，重要", example: "The magnitude of the event." },
      { word: "magnate", meaning: "大亨", example: "A business magnate." },
      { word: "magnanimous", meaning: "宽宏大量的", example: "A magnanimous person." },
      { word: "magnum", meaning: "大酒瓶", example: "A magnum of wine." },
      { word: "major", meaning: "较大的，主要的", example: "A major city." },
      { word: "majority", meaning: "多数", example: "The majority agrees." },
      { word: "mayor", meaning: "市长", example: "The mayor of the city." },
      { word: "master", meaning: "主人，大师", example: "A master painter." },
      { word: "masterpiece", meaning: "杰作", example: "This painting is a masterpiece." },
      { word: "mastiff", meaning: "大獒犬", example: "A large mastiff." },
      { word: "magniloquent", meaning: "夸张的", example: "Magniloquent language." }
    ]
  },
  
  sens: {
    root: "sens",
    meaning: "感觉",
    category: "状态",
    origin: "拉丁语 sentire",
    words: [
      { word: "sense", meaning: "感觉", example: "Six senses." },
      { word: "sensitive", meaning: "敏感的", example: "Be sensitive to feelings." },
      { word: "sensitivity", meaning: "敏感性", example: "Show sensitivity." },
      { word: "senseless", meaning: "无意义的", example: "Senseless violence." },
      { word: "sensation", meaning: "感觉，轰动", example: "A great sensation." },
      { word: "sensational", meaning: "轰动的", example: "A sensational story." },
      { word: "consensus", meaning: "共识", example: "Reach a consensus." },
      { word: "consent", meaning: "同意", example: "Get consent." },
      { word: "resent", meaning: "愤恨", example: "Resent the unfairness." },
      { word: "resentment", meaning: "愤恨", example: "Hold no resentment." },
      { word: "nonsense", meaning: "胡说", example: "Stop the nonsense." },
      { word: "sensual", meaning: "感官的", example: "Sensual pleasure." },
      { word: "sensuous", meaning: "给感官快乐的", example: "Sensuous music." },
      { word: "insensible", meaning: "无感觉的", example: "Insensible to pain." },
      { word: "desensitize", meaning: "使麻木", example: "Desensitize the patient." }
    ]
  },
  
  fort: {
    root: "fort",
    meaning: "强，力量",
    category: "状态",
    origin: "拉丁语 fortis",
    words: [
      { word: "fortune", meaning: "财富，运气", example: "Good fortune." },
      { word: "fortunate", meaning: "幸运的", example: "Be fortunate." },
      { word: "unfortunately", meaning: "不幸地", example: "Unfortunately, no." },
      { word: "fortress", meaning: "堡垒", example: "Attack the fortress." },
      { word: "fortify", meaning: "加强", example: "Fortify the walls." },
      { word: "fortification", meaning: "防御工事", example: "Build fortifications." },
      { word: "effort", meaning: "努力", example: "Make an effort." },
      { word: "force", meaning: "力量", example: "The force of nature." },
      { word: "forceful", meaning: "有力的", example: "A forceful argument." },
      { word: "enforce", meaning: "执行", example: "Enforce the law." },
      { word: "reinforce", meaning: "加强", example: "Reinforce the troops." },
      { word: "comfort", meaning: "安慰", example: "Give comfort." },
      { word: "comfortable", meaning: "舒适的", example: "A comfortable chair." },
      { word: "discomfort", meaning: "不适", example: "Feel discomfort." },
      { word: "perforce", meaning: "必然地", example: "Perforce, he must go." }
    ]
  },
  
  form: {
    root: "form",
    meaning: "形式，形状",
    category: "状态",
    origin: "拉丁语 forma",
    words: [
      { word: "form", meaning: "形式", example: "Fill out the form." },
      { word: "formal", meaning: "正式的", example: "A formal meeting." },
      { word: "informal", meaning: "非正式的", example: "An informal talk." },
      { word: "formality", meaning: "正式手续", example: "Complete the formalities." },
      { word: "transform", meaning: "改变", example: "Transform your life." },
      { word: "transformation", meaning: "转变", example: "A personal transformation." },
      { word: "uniform", meaning: "制服", example: "Wear a uniform." },
      { word: "formula", meaning: "公式", example: "The formula for success." },
      { word: "formulate", meaning: "制定", example: "Formulate a plan." },
      { word: "reform", meaning: "改革", example: "Reform the system." },
      { word: "perform", meaning: "表演，执行", example: "Perform well." },
      { word: "performance", meaning: "表演", example: "A great performance." },
      { word: "conform", meaning: "遵守，顺应", example: "Conform to rules." },
      { word: "deform", meaning: "使变形", example: "Heat can deform plastic." },
      { word: "formation", meaning: "形成", example: "Word formation." }
    ]
  },
  
  nat: {
    root: "nat",
    meaning: "出生，天性",
    category: "状态",
    origin: "拉丁语 nasci",
    words: [
      { word: "native", meaning: "本地的", example: "A native speaker." },
      { word: "natural", meaning: "自然的", example: "Natural beauty." },
      { word: "nature", meaning: "自然", example: "Nature is beautiful." },
      { word: "nation", meaning: "国家", example: "My nation." },
      { word: "national", meaning: "国家的", example: "National flag." },
      { word: "international", meaning: "国际的", example: "International travel." },
      { word: "native", meaning: " native", example: "Native land." },
      { word: "innate", meaning: "先天的", example: "Innate ability." },
      { word: "prenatal", meaning: "产前的", example: "Prenatal care." },
      { word: "neonate", meaning: "新生儿", example: "Care for the neonate." },
      { word: "cognate", meaning: "同源的", example: "Cognate words." },
      { word: "naive", meaning: "天真的", example: "A naive question." },
      { word: "renaissance", meaning: "文艺复兴", example: "The Renaissance period." },
      { word: "nativity", meaning: "出生，耶稣诞生", example: "The nativity play." },
      { word: "denature", meaning: "使变性", example: "Denature the protein." }
    ]
  },
  
  nov: {
    root: "nov",
    meaning: "新",
    category: "状态",
    origin: "拉丁语 novus",
    words: [
      { word: "novel", meaning: "小说，新奇的", example: "Read a novel." },
      { word: "novelty", meaning: "新奇", example: "The novelty wears off." },
      { word: "innovate", meaning: "创新", example: "Innovate constantly." },
      { word: "innovation", meaning: "创新", example: "Technological innovation." },
      { word: "innovative", meaning: "创新的", example: "An innovative idea." },
      { word: "innovator", meaning: "创新者", example: "A young innovator." },
      { word: "renovate", meaning: "翻新", example: "Renovate the house." },
      { word: "renovation", meaning: "翻新", example: "Home renovation." },
      { word: "nova", meaning: "新星", example: "A supernova." },
      { word: "novice", meaning: "新手", example: "A novice driver." },
      { word: "novation", meaning: "更新", example: "Contract novation." },
      { word: "neonate", meaning: "新生儿", example: "Care for the neonate." },
      { word: "novelist", meaning: "小说家", example: "The novelist wrote many books." },
      { word: "novella", meaning: "中篇小说", example: "Read a novella." },
      { word: "supernova", meaning: "超新星", example: "A spectacular supernova." }
    ]
  },

  // ==================== 情感类 ====================
  am: {
    root: "am",
    meaning: "爱",
    category: "情感",
    origin: "拉丁语 amare",
    words: [
      { word: "amateur", meaning: "业余爱好者", example: "An amateur photographer." },
      { word: "amorous", meaning: "多情的", example: "Amorous feelings." },
      { word: "amour", meaning: "恋情", example: "A secret amour." },
      { word: "enemy", meaning: "敌人", example: "Don't make an enemy." },
      { word: "enmity", meaning: "敌意", example: "End the enmity." },
      { word: "amiable", meaning: "和蔼的", example: "An amiable person." },
      { word: "amicable", meaning: "友好的", example: "An amicable divorce." },
      { word: "amity", meaning: "友好", example: "Live in amity." },
      { word: "amour-propre", meaning: "自尊", example: "Protect your amour-propre." },
      { word: "paramour", meaning: "情人", example: "A secret paramour." },
      { word: "amative", meaning: "爱情的", example: "Amative behavior." },
      { word: "amativeness", meaning: "多情", example: "Show amativeness." },
      { word: "inamorata", meaning: "情人（女）", example: "His inamorata." },
      { word: "inamorato", meaning: "情人（男）", example: "Her inamorato." },
      { word: "amoretto", meaning: "小爱神", example: "Paint an amoretto." }
    ]
  },
  
  phob: {
    root: "phob",
    meaning: "恐惧",
    category: "情感",
    origin: "希腊语 phobos",
    words: [
      { word: "phobia", meaning: "恐惧症", example: "I have a phobia." },
      { word: "hydrophobia", meaning: "恐水症", example: "A dog with hydrophobia." },
      { word: "claustrophobia", meaning: "幽闭恐惧症", example: "Suffer from claustrophobia." },
      { word: "agoraphobia", meaning: "广场恐惧症", example: "Affects agoraphobia patients." },
      { word: "acrophobia", meaning: "恐高症", example: "Acrophobia prevents climbing." },
      { word: "arachnophobia", meaning: "蜘蛛恐惧症", example: "Many have arachnophobia." },
      { word: "xenophobia", meaning: "仇外", example: "Fight xenophobia." },
      { word: "homophobia", meaning: "恐同", example: "Condemn homophobia." },
      { word: "technophobia", meaning: "技术恐惧症", example: "Technophobia in older people." },
      { word: "sociophobia", meaning: "社交恐惧", example: "Overcome sociophobia." },
      { word: "mysophobia", meaning: "洁癖", example: "Mysophobia causes anxiety." },
      { word: "erythrophobia", meaning: "脸红恐惧", example: "Erythrophobia is embarrassing." },
      { word: "phobiac", meaning: "恐惧症患者", example: "The phobiac avoided heights." },
      { word: "phobophobia", meaning: "恐惧症恐惧", example: "A fear of fears." },
      { word: "neophobia", meaning: "新奇事物恐惧", example: "Neophobia in children." }
    ]
  },
  
  phil: {
    root: "phil",
    meaning: "爱",
    category: "情感",
    origin: "希腊语 philein",
    words: [
      { word: "philosophy", meaning: "哲学", example: "Study philosophy." },
      { word: "philosopher", meaning: "哲学家", example: "A Greek philosopher." },
      { word: "philanthropist", meaning: "慈善家", example: "A generous philanthropist." },
      { word: "philanthropy", meaning: "慈善", example: "Practice philanthropy." },
      { word: "Philadelphia", meaning: "费城（友爱之城）", example: "Philadelphia is a city." },
      { word: "philatelist", meaning: "集邮家", example: "The philatelist collected stamps." },
      { word: "philharmonic", meaning: "爱乐的", example: "The philharmonic orchestra." },
      { word: "philogynist", meaning: "爱女人者", example: "A philogynist loves women." },
      { word: "philology", meaning: "语文学", example: "Study philology." },
      { word: "philosophical", meaning: "哲学的", example: "A philosophical approach." },
      { word: "philtre", meaning: "春药", example: "A love philtre." },
      { word: "Anglophile", meaning: "亲英者", example: "An Anglophile loves Britain." },
      { word: "Francophile", meaning: "亲法者", example: "A Francophile admires France." },
      { word: "bibliophile", meaning: "爱书者", example: "A bibliophile collects books." },
      { word: "philosophize", meaning: "哲学思考", example: "Philosophize about life." }
    ]
  },
  
  cred: {
    root: "cred",
    meaning: "相信",
    category: "情感",
    origin: "拉丁语 credere",
    words: [
      { word: "credit", meaning: "信用，功劳", example: "Give credit." },
      { word: "credible", meaning: "可信的", example: "A credible source." },
      { word: "incredible", meaning: "难以置信的", example: "An incredible story." },
      { word: "credibility", meaning: "可信度", example: "Build credibility." },
      { word: "accredit", meaning: "归因于", example: "Accredit the success to hard work." },
      { word: "accreditation", meaning: "认证", example: "School accreditation." },
      { word: "credential", meaning: "资格证书", example: "Show your credentials." },
      { word: "creditor", meaning: "债权人", example: "Pay the creditor." },
      { word: "discredit", meaning: "败坏名声", example: "Discredit the witness." },
      { word: "credulous", meaning: "轻信的", example: "A credulous person." },
      { word: "incredulous", meaning: "怀疑的", example: "Be incredulous." },
      { word: "credence", meaning: "相信", example: "Give credence to rumors." },
      { word: "creed", meaning: "信条", example: "Follow your creed." },
      { word: "discreet", meaning: "谨慎的", example: "Be discreet." },
      { word: "discrete", meaning: "离散的", example: "Discrete units." }
    ]
  },

  // ==================== 自然类 ====================
  geo: {
    root: "geo",
    meaning: "地球，土地",
    category: "自然",
    origin: "希腊语 ge",
    words: [
      { word: "geography", meaning: "地理", example: "Study geography." },
      { word: "geographer", meaning: "地理学家", example: "The geographer explored the area." },
      { word: "geology", meaning: "地质学", example: "Study geology." },
      { word: "geologist", meaning: "地质学家", example: "The geologist examined rocks." },
      { word: "geometry", meaning: "几何", example: "Learn geometry." },
      { word: "geometric", meaning: "几何的", example: "Geometric patterns." },
      { word: "geothermal", meaning: "地热的", example: "Geothermal energy." },
      { word: "geophysics", meaning: "地球物理学", example: "Study geophysics." },
      { word: "geocentric", meaning: "以地球为中心的", example: "A geocentric view." },
      { word: "geostationary", meaning: "地球同步的", example: "A geostationary satellite." },
      { word: "geography", meaning: "geography", example: "Geography of China." },
      { word: "geopark", meaning: "地质公园", example: "Visit a geopark." },
      { word: "geocode", meaning: "地理编码", example: "Geocode the address." },
      { word: "geotag", meaning: "地理标签", example: "Add a geotag to photos." },
      { word: "apogee", meaning: "远地点", example: "The apogee of the orbit." }
    ]
  },
  
  aqua: {
    root: "aqua",
    meaning: "水",
    category: "自然",
    origin: "拉丁语 aqua",
    words: [
      { word: "aquatic", meaning: "水生的", example: "Aquatic plants." },
      { word: "aquarium", meaning: "水族馆", example: "Visit the aquarium." },
      { word: "aqueduct", meaning: "水渠", example: "An ancient aqueduct." },
      { word: "aquifer", meaning: "含水层", example: "The aquifer is deep." },
      { word: "aqua", meaning: "水", example: "Aqua is Latin for water." },
      { word: "subaqueous", meaning: "水下的", example: "Subaqueous plants." },
      { word: "superaquatic", meaning: "水上的", example: "Superaquatic birds." },
      { word: "aquaculture", meaning: "水产养殖", example: "Practice aquaculture." },
      { word: "aquanaut", meaning: "潜水员", example: "An aquanaut explored the deep." },
      { word: "aquaplane", meaning: "滑水板", example: "Ride an aquaplane." },
      { word: "aquaregia", meaning: "王水", example: "Use aquaregia in labs." },
      { word: "aquaticize", meaning: "使成水状", example: "Aquaticize the solution." },
      { word: "aquatone", meaning: "水彩画", example: "Paint an aquatone." },
      { word: "aquatherapy", meaning: "水疗法", example: "Try aquatherapy." },
      { word: "semiacqua", meaning: "半水生", example: "Semiacqua plants." }
    ]
  },
  
  thermo: {
    root: "thermo",
    meaning: "热",
    category: "自然",
    origin: "希腊语 thermos",
    words: [
      { word: "thermometer", meaning: "温度计", example: "Read the thermometer." },
      { word: "thermostat", meaning: "恒温器", example: "Set the thermostat." },
      { word: "thermos", meaning: "保温瓶", example: "Bring a thermos." },
      { word: "thermal", meaning: "热的", example: "Thermal energy." },
      { word: "thermocouple", meaning: "热电偶", example: "Use a thermocouple." },
      { word: "thermodynamics", meaning: "热力学", example: "Study thermodynamics." },
      { word: "thermophilic", meaning: "嗜热的", example: "Thermophilic bacteria." },
      { word: "thermocline", meaning: "温度跃变层", example: "The thermocline in the ocean." },
      { word: "thermosphere", meaning: "热层", example: "The thermosphere is high." },
      { word: "geothermal", meaning: "地热的", example: "Geothermal power." },
      { word: "thermistor", meaning: "热敏电阻", example: "A thermistor measures temperature." },
      { word: "thermionic", meaning: "热离子的", example: "Thermionic emission." },
      { word: "thermoreceptor", meaning: "热感受器", example: "Thermoreceptors in skin." },
      { word: "thermogenic", meaning: "产热的", example: "Thermogenic foods." },
      { word: "thermolysis", meaning: "热分解", example: "Thermolysis in chemistry." }
    ]
  },
  
  aero: {
    root: "aero",
    meaning: "空气",
    category: "自然",
    origin: "希腊语 aer",
    words: [
      { word: "air", meaning: "空气", example: "Fresh air." },
      { word: "airplane", meaning: "飞机", example: "Take an airplane." },
      { word: "aeroplane", meaning: "飞机", example: "An aeroplane flies." },
      { word: "airport", meaning: "机场", example: "Go to the airport." },
      { word: "aerial", meaning: "空中的", example: "An aerial view." },
      { word: "aerospace", meaning: "航空航天", example: "Work in aerospace." },
      { word: "aerobics", meaning: "有氧运动", example: "Do aerobics." },
      { word: "anaerobic", meaning: "厌氧的", example: "Anaerobic exercise." },
      { word: "aerodrome", meaning: "小型机场", example: "Land at the aerodrome." },
      { word: "aerodynamics", meaning: "空气动力学", example: "Study aerodynamics." },
      { word: "aeronautics", meaning: "航空学", example: "Learn aeronautics." },
      { word: "aerostatics", meaning: "气体静力学", example: "Aerostatics studies gases at rest." },
      { word: "aerogel", meaning: "气凝胶", example: "Aerogel is very light." },
      { word: "aerophagy", meaning: "吞气症", example: "Aerophagy causes bloating." },
      { word: "aerophyte", meaning: "气生植物", example: "An aerophyte grows on air." }
    ]
  },
  
  cosm: {
    root: "cosm",
    meaning: "宇宙，秩序",
    category: "自然",
    origin: "希腊语 kosmos",
    words: [
      { word: "cosmic", meaning: "宇宙的", example: "Cosmic rays." },
      { word: "cosmos", meaning: "宇宙", example: "Explore the cosmos." },
      { word: "cosmology", meaning: "宇宙学", example: "Study cosmology." },
      { word: "cosmopolitan", meaning: "世界性的", example: "A cosmopolitan city." },
      { word: "cosmonaut", meaning: "宇航员（俄）", example: "A Russian cosmonaut." },
      { word: "microcosm", meaning: "微观世界", example: "A microcosm of society." },
      { word: "macrocosm", meaning: "宏观世界", example: "The macrocosm and microcosm." },
      { word: "cosmicize", meaning: "宇宙化", example: "Cosmicize your thinking." },
      { word: "cosmism", meaning: "宇宙论", example: "Philosophical cosmism." },
      { word: "cosmetology", meaning: "美容学", example: "Study cosmetology." },
      { word: "cosmetic", meaning: "化妆品", example: "Use cosmetics." },
      { word: "cosmic microwave", meaning: "宇宙微波", example: "Cosmic microwave background." },
      { word: "cosmographic", meaning: "宇宙志的", example: "Cosmographic mapping." },
      { word: "cosmogonist", meaning: "宇宙进化论者", example: "The cosmogonist explained origins." },
      { word: "cosmorama", meaning: "世界全景", example: "View a cosmorama." }
    ]
  },
  
  hydr: {
    root: "hydr",
    meaning: "水",
    category: "自然",
    origin: "希腊语 hydor",
    words: [
      { word: "hydrogen", meaning: "氢气", example: "Hydrogen is light." },
      { word: "hydroelectric", meaning: "水力发电的", example: "Hydroelectric power." },
      { word: "hydrant", meaning: "消防栓", example: "The hydrant is red." },
      { word: "hydrangea", meaning: "绣球花", example: "Grow hydrangeas." },
      { word: "hydraulic", meaning: "水力的", example: "Hydraulic press." },
      { word: "hydroxide", meaning: "氢氧化物", example: "Sodium hydroxide." },
      { word: "hydrophobia", meaning: "恐水症", example: "Hydrophobia affects rabid animals." },
      { word: "dehydrate", meaning: "脱水", example: "Don't dehydrate." },
      { word: "hydrated", meaning: "水合的", example: "Stay hydrated." },
      { word: "hydration", meaning: "水合作用", example: "Proper hydration is important." },
      { word: "hydrotherapy", meaning: "水疗法", example: "Try hydrotherapy." },
      { word: "hydroponics", meaning: "水培", example: "Grow plants with hydroponics." },
      { word: "hydroscope", meaning: "湿度仪", example: "Use a hydroscope." },
      { word: "hydroplane", meaning: "水面飞机", example: "A hydroplane on water." },
      { word: "hydrozoan", meaning: "水螅", example: "A hydrozoan is a small predator." }
    ]
  },

  // ==================== 前缀类 ====================
  un: {
    root: "un-",
    meaning: "不，非",
    category: "前缀",
    origin: " Anglo-Saxon",
    words: [
      { word: "unhappy", meaning: "不快乐的", example: "She looks unhappy." },
      { word: "unfair", meaning: "不公平的", example: "That's unfair." },
      { word: "unkind", meaning: "不友善的", example: "Don't be unkind." },
      { word: "unusual", meaning: "不寻常的", example: "An unusual event." },
      { word: "unable", meaning: "不能的", example: "I am unable to go." },
      { word: "uncertain", meaning: "不确定的", example: "The result is uncertain." },
      { word: "unclear", meaning: "不清楚的", example: "It's unclear." },
      { word: "untie", meaning: "解开", example: "Untie the rope." },
      { word: "unlock", meaning: "解锁", example: "Unlock the door." },
      { word: "undo", meaning: "撤销", example: "Undo the mistake." },
      { word: "unfold", meaning: "展开", example: "Unfold the paper." },
      { word: "unpack", meaning: "打开行李", example: "Unpack your bags." },
      { word: "unwrap", meaning: "打开", example: "Unwrap the gift." },
      { word: "unzip", meaning: "拉开拉链", example: "Unzip your jacket." },
      { word: "uncover", meaning: "发现", example: "Uncover the truth." }
    ]
  },
  
  in: {
    root: "in-/im-",
    meaning: "不，非",
    category: "前缀",
    origin: "拉丁语",
    words: [
      { word: "inactive", meaning: "不活跃的", example: "An inactive student." },
      { word: "incorrect", meaning: "不正确的", example: "The answer is incorrect." },
      { word: "incomplete", meaning: "不完整的", example: "An incomplete task." },
      { word: "indirect", meaning: "间接的", example: "An indirect route." },
      { word: "independent", meaning: "独立的", example: "An independent woman." },
      { word: "invisible", meaning: "看不见的", example: "Invisible ink." },
      { word: "impossible", meaning: "不可能的", example: "Nothing is impossible." },
      { word: "impolite", meaning: "不礼貌的", example: "It's impolite to stare." },
      { word: "immature", meaning: "不成熟的", example: "Immature behavior." },
      { word: "imperfect", meaning: "不完美的", example: "Nobody is perfect." },
      { word: "illegal", meaning: "非法的", example: "Illegal activities." },
      { word: "illogical", meaning: "不合逻辑的", example: "An illogical argument." },
      { word: "irregular", meaning: "不规则的", example: "Irregular verbs." },
      { word: "irresponsible", meaning: "不负责任的", example: "Irresponsible behavior." },
      { word: "inedible", meaning: "不可食用的", example: "This food is inedible." }
    ]
  },
  
  dis: {
    root: "dis-",
    meaning: "否定，相反",
    category: "前缀",
    origin: "拉丁语",
    words: [
      { word: "disagree", meaning: "不同意", example: "I disagree with you." },
      { word: "disappear", meaning: "消失", example: "The sun will disappear." },
      { word: "disappoint", meaning: "使失望", example: "Don't disappoint me." },
      { word: "dislike", meaning: "不喜欢", example: "I dislike seafood." },
      { word: "dishonest", meaning: "不诚实的", example: "A dishonest person." },
      { word: "disconnect", meaning: "断开连接", example: "Disconnect the cable." },
      { word: "disadvantage", meaning: "缺点", example: "The disadvantage is clear." },
      { word: "disallow", meaning: "不允许", example: "Disallow the claim." },
      { word: "disappear", meaning: "disappear", example: "Disappear from sight." },
      { word: "disassemble", meaning: "拆开", example: "Disassemble the machine." },
      { word: "disapprove", meaning: "不赞成", example: "Disapprove of the plan." },
      { word: "disbelieve", meaning: "不相信", example: "Disbelieve the rumor." },
      { word: "disconnect", meaning: "disconnect", example: "Disconnect power." },
      { word: "discontinue", meaning: "停止", example: "Discontinue the product." },
      { word: "discourage", meaning: "使气馁", example: "Don't discourage him." }
    ]
  },
  
  re: {
    root: "re-",
    meaning: "再，重复",
    category: "前缀",
    origin: "拉丁语",
    words: [
      { word: "return", meaning: "返回", example: "Return home." },
      { word: "repeat", meaning: "重复", example: "Repeat after me." },
      { word: "review", meaning: "复习，评论", example: "Review your lessons." },
      { word: "rethink", meaning: "重新考虑", example: "Rethink your decision." },
      { word: "rewrite", meaning: "重写", example: "Rewrite the essay." },
      { word: "rebuild", meaning: "重建", example: "Rebuild the house." },
      { word: "restart", meaning: "重新开始", example: "Restart the computer." },
      { word: "replace", meaning: "替换", example: "Replace the battery." },
      { word: "recall", meaning: "召回，记得", example: "Recall the product." },
      { word: "recover", meaning: "恢复", example: "Recover from illness." },
      { word: "recycle", meaning: "回收利用", example: "Recycle paper." },
      { word: "reappear", meaning: "重新出现", example: "The sun will reappear." },
      { word: "reassemble", meaning: "重新组装", example: "Reassemble the parts." },
      { word: "reconsider", meaning: "重新考虑", example: "Reconsider your choice." },
      { word: "redesign", meaning: "重新设计", example: "Redesign the logo." }
    ]
  },
  
  pre: {
    root: "pre-",
    meaning: "之前，预先",
    category: "前缀",
    origin: "拉丁语",
    words: [
      { word: "preview", meaning: "预览", example: "Preview the movie." },
      { word: "predict", meaning: "预测", example: "Predict the future." },
      { word: "prepare", meaning: "准备", example: "Prepare for the exam." },
      { word: "preheat", meaning: "预热", example: "Preheat the oven." },
      { word: "preschool", meaning: "学前的", example: "Preschool education." },
      { word: "prehistoric", meaning: "史前的", example: "Prehistoric times." },
      { word: "precede", meaning: "先于", example: "The accident preceded the rain." },
      { word: "precious", meaning: "珍贵的", example: "Precious memories." },
      { word: "precise", meaning: "精确的", example: "Be precise." },
      { word: "conclude", meaning: "总结", example: "Conclude the meeting." },
      { word: "preface", meaning: "前言", example: "Write a preface." },
      { word: "precaution", meaning: "预防措施", example: "Take precaution." },
      { word: "prefer", meaning: "更喜欢", example: "I prefer tea." },
      { word: "preference", meaning: "偏好", example: "What's your preference?" },
      { word: "prejudice", meaning: "偏见", example: "Overcome prejudice." }
    ]
  },
  
  super: {
    root: "super-",
    meaning: "超级，超过",
    category: "前缀",
    origin: "拉丁语",
    words: [
      { word: "superman", meaning: "超人", example: "Like a superman." },
      { word: "supermarket", meaning: "超市", example: "Shop at the supermarket." },
      { word: "superstar", meaning: "超级明星", example: "A Hollywood superstar." },
      { word: "supernatural", meaning: "超自然的", example: "Supernatural powers." },
      { word: "superb", meaning: "极好的", example: "A superb performance." },
      { word: "superior", meaning: "更好的", example: "Superior quality." },
      { word: "supreme", meaning: "最高的", example: "The Supreme Court." },
      { word: "supervise", meaning: "监督", example: "Supervise the work." },
      { word: "superficial", meaning: "表面的", example: "A superficial view." },
      { word: "superfluous", meaning: "多余的", example: "Superfluous words." },
      { word: "supersonic", meaning: "超音速的", example: "A supersonic jet." },
      { word: "superhighway", meaning: "超级公路", example: "Information superhighway." },
      { word: "supernova", meaning: "超新星", example: "A dying star becomes a supernova." },
      { word: "supercharge", meaning: "增压", example: "Supercharge the engine." },
      { word: "superimpose", meaning: "叠加", example: "Superimpose one image on another." }
    ]
  },
  
  trans: {
    root: "trans-",
    meaning: "跨越，转移",
    category: "前缀",
    origin: "拉丁语",
    words: [
      { word: "translate", meaning: "翻译", example: "Translate English to Chinese." },
      { word: "translation", meaning: "翻译", example: "A good translation." },
      { word: "transplant", meaning: "移植", example: "Transplant the tree." },
      { word: "transport", meaning: "运输", example: "Transport goods." },
      { word: "transform", meaning: "改变", example: "Transform your life." },
      { word: "transmit", meaning: "传输", example: "Transmit data." },
      { word: "transparent", meaning: "透明的", example: "Glass is transparent." },
      { word: "transverse", meaning: "横向的", example: "A transverse wave." },
      { word: "transcontinental", meaning: "横贯大陆的", example: "A transcontinental railroad." },
      { word: "transatlantic", meaning: "横跨大西洋的", example: "A transatlantic flight." },
      { word: "transit", meaning: "运输，转变", example: "Public transit." },
      { word: "transition", meaning: "过渡", example: "A smooth transition." },
      { word: "transient", meaning: "短暂的", example: "Transient joy." },
      { word: "transistor", meaning: "晶体管", example: "A computer transistor." },
      { word: "transcribe", meaning: "转录", example: "Transcribe the recording." }
    ]
  },
  
  com: {
    root: "com-/con-/col-",
    meaning: "一起，共同",
    category: "前缀",
    origin: "拉丁语",
    words: [
      { word: "combine", meaning: "结合", example: "Combine the ingredients." },
      { word: "complete", meaning: "完成", example: "Complete the task." },
      { word: "connect", meaning: "连接", example: "Connect the wires." },
      { word: "collect", meaning: "收集", example: "Collect stamps." },
      { word: "collaborate", meaning: "合作", example: "Collaborate with others." },
      { word: "compile", meaning: "编译，汇编", example: "Compile the data." },
      { word: "compose", meaning: "组成，作曲", example: "Compose music." },
      { word: "compress", meaning: "压缩", example: "Compress the file." },
      { word: "concentrate", meaning: "集中", example: "Concentrate on study." },
      { word: "confident", meaning: "自信的", example: "Be confident." },
      { word: "conclude", meaning: "总结", example: "Conclude the report." },
      { word: "conduct", meaning: "传导，引导", example: "Conduct an experiment." },
      { word: "confront", meaning: "面对", example: "Confront the problem." },
      { word: "congress", meaning: "国会", example: "Congress passed the law." },
      { word: "conserve", meaning: "保护，保存", example: "Conserve energy." }
    ]
  },
  
  de: {
    root: "de-",
    meaning: "向下，相反，除去",
    category: "前缀",
    origin: "拉丁语",
    words: [
      { word: "decrease", meaning: "减少", example: "Decrease the speed." },
      { word: "descend", meaning: "下降", example: "Descend the mountain." },
      { word: "decline", meaning: "下降，拒绝", example: "Decline the offer." },
      { word: "depress", meaning: "按下，使沮丧", example: "Don't depress the button." },
      { word: "depress", meaning: "depress", example: "The news depressed him." },
      { word: "defend", meaning: "防御", example: "Defend your country." },
      { word: "depend", meaning: "依赖", example: "Depend on yourself." },
      { word: "deny", meaning: "否认", example: "Deny the accusation." },
      { word: "decode", meaning: "解码", example: "Decode the message." },
      { word: "decompose", meaning: "分解", example: "Decompose the waste." },
      { word: "defrost", meaning: "除霜", example: "Defrost the freezer." },
      { word: "deice", meaning: "除冰", example: "Deice the windshield." },
      { word: "dethrone", meaning: "废黜", example: "Dethrone the king." },
      { word: "detrain", meaning: "下火车", example: "Detrain at the station." },
      { word: "deplane", meaning: "下飞机", example: "Deplane safely." }
    ]
  },
  
  ex: {
    root: "ex-",
    meaning: "向外，以前",
    category: "前缀",
    origin: "拉丁语",
    words: [
      { word: "exit", meaning: "出口", example: "Find the exit." },
      { word: "export", meaning: "出口", example: "Export goods." },
      { word: "expand", meaning: "扩张", example: "Expand your business." },
      { word: "exchange", meaning: "交换", example: "Exchange ideas." },
      { word: "exclude", meaning: "排除", example: "Exclude the option." },
      { word: "excuse", meaning: "原谅", example: "Excuse me." },
      { word: "exhale", meaning: "呼气", example: "Exhale slowly." },
      { word: "expose", meaning: "暴露", example: "Expose to sunlight." },
      { word: "express", meaning: "表达", example: "Express your feelings." },
      { word: "extend", meaning: "延伸", example: "Extend your hand." },
      { word: "exceed", meaning: "超过", example: "Exceed expectations." },
      { word: "except", meaning: "除了", example: "Everyone except Tom." },
      { word: "exclaim", meaning: "呼喊", example: "Exclaim in surprise." },
      { word: "exclude", meaning: "exclude", example: "Exclude from the list." },
      { word: "ex-president", meaning: "前总统", example: "The ex-president gave a speech." }
    ]
  },
  
  pro: {
    root: "pro-",
    meaning: "向前，赞成",
    category: "前缀",
    origin: "拉丁语/希腊语",
    words: [
      { word: "promote", meaning: "促进，提升", example: "Promote friendship." },
      { word: "progress", meaning: "进步", example: "Make progress." },
      { word: "project", meaning: "项目", example: "Complete the project." },
      { word: "program", meaning: "程序，计划", example: "TV program." },
      { word: "promise", meaning: "承诺", example: "Keep your promise." },
      { word: "propose", meaning: "建议，求婚", example: "Propose a plan." },
      { word: "protect", meaning: "保护", example: "Protect the environment." },
      { word: "professor", meaning: "教授", example: "The professor teaches well." },
      { word: "profile", meaning: "轮廓，简介", example: "Your social media profile." },
      { word: "program", meaning: "program", example: "Write a program." },
      { word: "projectile", meaning: "抛射物", example: "A projectile motion." },
      { word: "prolong", meaning: "延长", example: "Prolong the meeting." },
      { word: "prominent", meaning: "突出的", example: "A prominent scientist." },
      { word: "proclaim", meaning: "宣布", example: "Proclaim the winner." },
      { word: "procure", meaning: "获得", example: "Procure the supplies." }
    ]
  }
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
  module.exports = wordRoots;
}
