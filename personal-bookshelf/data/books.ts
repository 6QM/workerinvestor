export type ShelfCategory =
  | "thinking"
  | "work-capital"
  | "writing"
  | "assets"
  | "ai-engineering"
  | "life-time";

export type Shelf = {
  id: ShelfCategory;
  label: string;
  labelZh: string;
};

export type Book = {
  id: string;
  title: string;
  author: string;
  year: number;
  category: ShelfCategory;
  cover: string | null;
  color: string;
  rating: number | null;
  takeaway: string;
  noteUrl: string;
};

export const shelves: Shelf[] = [
  {
    id: "thinking",
    label: "Build my thinking system",
    labelZh: "训练我的判断力"
  },
  {
    id: "work-capital",
    label: "Understand work and capital",
    labelZh: "理解工作、工资与资本"
  },
  {
    id: "writing",
    label: "Get better at writing",
    labelZh: "提升写作与表达"
  },
  {
    id: "assets",
    label: "Learn to own assets",
    labelZh: "建立长期投资底仓"
  },
  {
    id: "ai-engineering",
    label: "Build with AI and engineering",
    labelZh: "进入 AI 与工程创造"
  },
  {
    id: "life-time",
    label: "Understand life, time and death",
    labelZh: "理解生命、时间与死亡"
  }
];

export const books: Book[] = [
  {
    "id": "book-2018-01",
    "title": "苏东坡传",
    "author": "(CN) 林语堂",
    "year": 2018,
    "category": "life-time",
    "cover": "/covers/69mike/sudong.jpg",
    "color": "#8b4513",
    "rating": null,
    "takeaway": "从 69mike 书架导入的生命、时间与文学阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2018"
  },
  {
    "id": "book-2018-02",
    "title": "人间失格",
    "author": "(JP) 太宰治",
    "year": 2018,
    "category": "life-time",
    "cover": "/covers/69mike/renjian.jpg",
    "color": "#191970",
    "rating": null,
    "takeaway": "从 69mike 书架导入的生命、时间与文学阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2018"
  },
  {
    "id": "book-2018-03",
    "title": "人生",
    "author": "(CN) 路遥",
    "year": 2018,
    "category": "life-time",
    "cover": "/covers/69mike/rensheng.jpg",
    "color": "#006400",
    "rating": null,
    "takeaway": "从 69mike 书架导入的生命、时间与文学阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2018"
  },
  {
    "id": "book-2018-04",
    "title": "万万没有想到",
    "author": "(CN) 万维钢",
    "year": 2018,
    "category": "thinking",
    "cover": "/covers/69mike/wanwan.jpg",
    "color": "#daa520",
    "rating": null,
    "takeaway": "从 69mike 书架导入的判断力阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2018"
  },
  {
    "id": "book-2018-05",
    "title": "房思琪的初恋乐园",
    "author": "(CN) 李奕含",
    "year": 2018,
    "category": "life-time",
    "cover": "/covers/69mike/fangsiqi.jpg",
    "color": "crimson",
    "rating": null,
    "takeaway": "从 69mike 书架导入的生命、时间与文学阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2018"
  },
  {
    "id": "book-2018-06",
    "title": "娱乐至死",
    "author": "(US) 尼尔·波兹曼",
    "year": 2018,
    "category": "thinking",
    "cover": "/covers/69mike/yule.jpg",
    "color": "purple",
    "rating": null,
    "takeaway": "从 69mike 书架导入的判断力阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2018"
  },
  {
    "id": "book-2018-07",
    "title": "我们生活在巨大的差距里",
    "author": "(CN) 余华",
    "year": 2018,
    "category": "work-capital",
    "cover": "/covers/69mike/women.jpg",
    "color": "teal",
    "rating": null,
    "takeaway": "从 69mike 书架导入的工作、组织与资本阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2018"
  },
  {
    "id": "book-2018-08",
    "title": "小王子",
    "author": "(FR) 圣埃克苏佩里",
    "year": 2018,
    "category": "life-time",
    "cover": "/covers/69mike/xiao.jpg",
    "color": "orange",
    "rating": null,
    "takeaway": "从 69mike 书架导入的生命、时间与文学阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2018"
  },
  {
    "id": "book-2018-09",
    "title": "动物农场",
    "author": "(UK) 乔治·奥威尔",
    "year": 2018,
    "category": "thinking",
    "cover": "/covers/69mike/dongwu.jpg",
    "color": "green",
    "rating": null,
    "takeaway": "从 69mike 书架导入的判断力阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2018"
  },
  {
    "id": "book-2018-10",
    "title": "情人",
    "author": "(FR) 玛格丽特·杜拉斯",
    "year": 2018,
    "category": "life-time",
    "cover": "/covers/69mike/qingren.jpg",
    "color": "pink",
    "rating": null,
    "takeaway": "从 69mike 书架导入的生命、时间与文学阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2018"
  },
  {
    "id": "book-2018-11",
    "title": "阿城精选集",
    "author": "(CN) 阿城",
    "year": 2018,
    "category": "life-time",
    "cover": "/covers/69mike/acheng.jpg",
    "color": "brown",
    "rating": null,
    "takeaway": "从 69mike 书架导入的生命、时间与文学阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2018"
  },
  {
    "id": "book-2018-12",
    "title": "活出生命的意义",
    "author": "(US) 维多克·弗兰克尔",
    "year": 2018,
    "category": "life-time",
    "cover": "/covers/69mike/huochu.jpg",
    "color": "darkred",
    "rating": null,
    "takeaway": "从 69mike 书架导入的生命、时间与文学阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2018"
  },
  {
    "id": "book-2018-13",
    "title": "小狗钱钱1",
    "author": "(DE) 舍费尔",
    "year": 2018,
    "category": "assets",
    "cover": "/covers/69mike/xiaogou1.jpg",
    "color": "#ff0",
    "rating": null,
    "takeaway": "从 69mike 书架导入的资产与长期主义阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2018"
  },
  {
    "id": "book-2018-14",
    "title": "小狗钱钱2",
    "author": "(DE) 舍费尔",
    "year": 2018,
    "category": "assets",
    "cover": "/covers/69mike/xiaogou2.jpg",
    "color": "#add8e6",
    "rating": null,
    "takeaway": "从 69mike 书架导入的资产与长期主义阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2018"
  },
  {
    "id": "book-2018-15",
    "title": "活着",
    "author": "(CN) 余华",
    "year": 2018,
    "category": "life-time",
    "cover": "/covers/69mike/huozhe.jpg",
    "color": "#00008b",
    "rating": null,
    "takeaway": "从 69mike 书架导入的生命、时间与文学阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2018"
  },
  {
    "id": "book-2018-16",
    "title": "了不起的盖茨比",
    "author": "(US) 斯科特·菲兹杰拉德",
    "year": 2018,
    "category": "life-time",
    "cover": "/covers/69mike/liaobuqi.jpg",
    "color": "gold",
    "rating": null,
    "takeaway": "从 69mike 书架导入的生命、时间与文学阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2018"
  },
  {
    "id": "book-2018-17",
    "title": "七堂极简物理课",
    "author": "(IT) 卡洛·罗韦利",
    "year": 2018,
    "category": "ai-engineering",
    "cover": "/covers/69mike/qitang.jpg",
    "color": "olive",
    "rating": null,
    "takeaway": "从 69mike 书架导入的科学、工程与创造阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2018"
  },
  {
    "id": "book-2019-18",
    "title": "英语阅读，看这本就够了",
    "author": "(KR) 李善玉",
    "year": 2019,
    "category": "writing",
    "cover": null,
    "color": "#daa520",
    "rating": null,
    "takeaway": "从 69mike 书架导入的写作与语言阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2019"
  },
  {
    "id": "book-2019-19",
    "title": "大学之路",
    "author": "(CN) 吴军",
    "year": 2019,
    "category": "ai-engineering",
    "cover": null,
    "color": "#708090",
    "rating": null,
    "takeaway": "从 69mike 书架导入的科学、工程与创造阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2019"
  },
  {
    "id": "book-2019-20",
    "title": "孤独的质数",
    "author": "(IT) 保罗·乔尔达诺",
    "year": 2019,
    "category": "life-time",
    "cover": null,
    "color": "navy",
    "rating": null,
    "takeaway": "从 69mike 书架导入的生命、时间与文学阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2019"
  },
  {
    "id": "book-2019-21",
    "title": "特斯拉自传",
    "author": "(US) 尼古拉·特斯拉",
    "year": 2019,
    "category": "ai-engineering",
    "cover": null,
    "color": "silver",
    "rating": null,
    "takeaway": "从 69mike 书架导入的科学、工程与创造阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2019"
  },
  {
    "id": "book-2019-22",
    "title": "时间管理",
    "author": "(US) 吉姆·兰德尔",
    "year": 2019,
    "category": "life-time",
    "cover": null,
    "color": "lime",
    "rating": null,
    "takeaway": "从 69mike 书架导入的生命、时间与文学阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2019"
  },
  {
    "id": "book-2019-23",
    "title": "现在的泪，都是当年脑子进的水",
    "author": "(CN) 马兴华",
    "year": 2019,
    "category": "thinking",
    "cover": null,
    "color": "cyan",
    "rating": null,
    "takeaway": "从 69mike 书架导入的判断力阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2019"
  },
  {
    "id": "book-2019-24",
    "title": "把你的词汇用起来",
    "author": "(CN) 伍军仪",
    "year": 2019,
    "category": "writing",
    "cover": null,
    "color": "salmon",
    "rating": null,
    "takeaway": "从 69mike 书架导入的写作与语言阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2019"
  },
  {
    "id": "book-2019-25",
    "title": "一本书读懂财报",
    "author": "(CN) 肖星",
    "year": 2019,
    "category": "assets",
    "cover": null,
    "color": "plum",
    "rating": null,
    "takeaway": "从 69mike 书架导入的资产与长期主义阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2019"
  },
  {
    "id": "book-2019-26",
    "title": "万物简史",
    "author": "(US) 比尔·布莱森",
    "year": 2019,
    "category": "ai-engineering",
    "cover": null,
    "color": "khaki",
    "rating": null,
    "takeaway": "从 69mike 书架导入的科学、工程与创造阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2019"
  },
  {
    "id": "book-2019-27",
    "title": "优秀到不能被忽略",
    "author": "(US) 卡尔·纽波特",
    "year": 2019,
    "category": "work-capital",
    "cover": null,
    "color": "#40e0d0",
    "rating": null,
    "takeaway": "从 69mike 书架导入的工作、组织与资本阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2019"
  },
  {
    "id": "book-2019-28",
    "title": "自省之书",
    "author": "(FR) 让-雅克·卢梭",
    "year": 2019,
    "category": "thinking",
    "cover": null,
    "color": "orchid",
    "rating": null,
    "takeaway": "从 69mike 书架导入的判断力阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2019"
  },
  {
    "id": "book-2019-29",
    "title": "论人类不平等的起源和基础",
    "author": "(FR) 让-雅克·卢梭",
    "year": 2019,
    "category": "thinking",
    "cover": null,
    "color": "tan",
    "rating": null,
    "takeaway": "从 69mike 书架导入的判断力阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2019"
  },
  {
    "id": "book-2019-30",
    "title": "终身学习",
    "author": "(US) 丹·苏利文",
    "year": 2019,
    "category": "work-capital",
    "cover": null,
    "color": "coral",
    "rating": null,
    "takeaway": "从 69mike 书架导入的工作、组织与资本阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2019"
  },
  {
    "id": "book-2019-31",
    "title": "送你一颗子弹",
    "author": "(CN) 刘瑜",
    "year": 2019,
    "category": "writing",
    "cover": null,
    "color": "#4682b4",
    "rating": null,
    "takeaway": "从 69mike 书架导入的写作与语言阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2019"
  },
  {
    "id": "book-2020-32",
    "title": "管道的故事",
    "author": "(US) 贝克·哈吉斯",
    "year": 2020,
    "category": "assets",
    "cover": "/covers/69mike/guandao.jpg",
    "color": "peru",
    "rating": null,
    "takeaway": "从 69mike 书架导入的资产与长期主义阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2020"
  },
  {
    "id": "book-2020-33",
    "title": "富爸爸穷爸爸",
    "author": "(US) 罗伯特·T·清崎",
    "year": 2020,
    "category": "assets",
    "cover": "/covers/69mike/richdad.jpg",
    "color": "#ff8c00",
    "rating": null,
    "takeaway": "从 69mike 书架导入的资产与长期主义阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2020"
  },
  {
    "id": "book-2020-34",
    "title": "致成长路上的你",
    "author": "中国高等教育学会",
    "year": 2020,
    "category": "ai-engineering",
    "cover": "/covers/69mike/2020_university_lecture_2016.jpg",
    "color": "#b22222",
    "rating": null,
    "takeaway": "从 69mike 书架导入的科学、工程与创造阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2020"
  },
  {
    "id": "book-2021-35",
    "title": "把时间当作朋友",
    "author": "(CN)李笑来",
    "year": 2021,
    "category": "life-time",
    "cover": "/covers/69mike/2021_time_friends.jpg",
    "color": "#008b8b",
    "rating": null,
    "takeaway": "从 69mike 书架导入的生命、时间与文学阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2021"
  },
  {
    "id": "book-2021-36",
    "title": "时间管理秘籍每天十分钟",
    "author": "(US) Michal Stawicki",
    "year": 2021,
    "category": "life-time",
    "cover": "/covers/69mike/2021_time_10minutes.jpg",
    "color": "#2e8b57",
    "rating": null,
    "takeaway": "从 69mike 书架导入的生命、时间与文学阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2021"
  },
  {
    "id": "book-2021-37",
    "title": "20岁，光阴不再来",
    "author": "(US) 梅格·杰伊",
    "year": 2021,
    "category": "life-time",
    "cover": "/covers/69mike/2021_20s_time_will_not_come_again.jpg",
    "color": "gold",
    "rating": null,
    "takeaway": "从 69mike 书架导入的生命、时间与文学阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2021"
  },
  {
    "id": "book-2021-38",
    "title": "洛克菲勒写给儿子的38封信",
    "author": "(US) 约翰·D·洛克菲勒",
    "year": 2021,
    "category": "work-capital",
    "cover": "/covers/69mike/2021_38_letters_Rockefeller.jpg",
    "color": "indigo",
    "rating": null,
    "takeaway": "从 69mike 书架导入的工作、组织与资本阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2021"
  },
  {
    "id": "book-2021-39",
    "title": "我生命里的光",
    "author": "(JP) 中村修二",
    "year": 2021,
    "category": "ai-engineering",
    "cover": "/covers/69mike/2021_life_light.jpg",
    "color": "#d2691e",
    "rating": null,
    "takeaway": "从 69mike 书架导入的科学、工程与创造阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2021"
  },
  {
    "id": "book-2021-40",
    "title": "在轮下",
    "author": "(GM) 赫尔曼·黑塞",
    "year": 2021,
    "category": "life-time",
    "cover": "/covers/69mike/2021_under_the_wheel.jpg",
    "color": "#483d8b",
    "rating": null,
    "takeaway": "从 69mike 书架导入的生命、时间与文学阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2021"
  },
  {
    "id": "book-2022-41",
    "title": "知道做到",
    "author": "(US) 肯·布兰佳",
    "year": 2022,
    "category": "thinking",
    "cover": "/covers/69mike/2022_know_can_do.jpg",
    "color": "#556b2f",
    "rating": null,
    "takeaway": "从 69mike 书架导入的判断力阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2022"
  },
  {
    "id": "book-2023-42",
    "title": "The Art of Doing Science and Engineering",
    "author": "(US) Hamming",
    "year": 2023,
    "category": "ai-engineering",
    "cover": "/covers/69mike/2023_the_art_doing_science_and_engineering.jpg",
    "color": "#4682b4",
    "rating": null,
    "takeaway": "从 69mike 书架导入的科学、工程与创造阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2023"
  },
  {
    "id": "book-2023-43",
    "title": "On Writing Well",
    "author": "(US) William Zinsser",
    "year": 2023,
    "category": "writing",
    "cover": "/covers/69mike/2023_on_writing_well.jpg",
    "color": "#daa520",
    "rating": null,
    "takeaway": "从 69mike 书架导入的写作与语言阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2023"
  },
  {
    "id": "book-2023-44",
    "title": "清单革命",
    "author": "(US) Atul Gawande",
    "year": 2023,
    "category": "thinking",
    "cover": "/covers/69mike/2023_checklist.jpg",
    "color": "#228b22",
    "rating": null,
    "takeaway": "从 69mike 书架导入的判断力阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2023"
  },
  {
    "id": "book-2023-45",
    "title": "Fortune's Formula",
    "author": "(US) William Poundstone",
    "year": 2023,
    "category": "assets",
    "cover": "/covers/69mike/2023_fortunes_formula.jpg",
    "color": "#b8860b",
    "rating": null,
    "takeaway": "从 69mike 书架导入的资产与长期主义阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2023"
  },
  {
    "id": "book-2024-46",
    "title": "Beyond Feelings",
    "author": "(US) Vincent Ruggiero",
    "year": 2024,
    "category": "thinking",
    "cover": "/covers/69mike/2024_beyondfeelings.jpg",
    "color": "#add8e6",
    "rating": null,
    "takeaway": "从 69mike 书架导入的判断力阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2024"
  },
  {
    "id": "book-2024-47",
    "title": "苏世民：我的经验与教训",
    "author": "(US) 斯蒂芬·A·施瓦茨曼",
    "year": 2024,
    "category": "work-capital",
    "cover": "/covers/69mike/2024_sushimin.jpg",
    "color": "#006400",
    "rating": null,
    "takeaway": "从 69mike 书架导入的工作、组织与资本阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2024"
  },
  {
    "id": "book-2024-48",
    "title": "Atomic Habits",
    "author": "(US) James Clear",
    "year": 2024,
    "category": "thinking",
    "cover": "/covers/69mike/2024_atomichabits.jpg",
    "color": "orange",
    "rating": null,
    "takeaway": "从 69mike 书架导入的判断力阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2024"
  },
  {
    "id": "book-2024-49",
    "title": "How to Read a Book",
    "author": "(US) Mortimer J. Adler, Charles Van Doren",
    "year": 2024,
    "category": "thinking",
    "cover": "/covers/69mike/2024_howtoreadabook.jpg",
    "color": "navy",
    "rating": null,
    "takeaway": "从 69mike 书架导入的判断力阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2024"
  },
  {
    "id": "book-2024-50",
    "title": "人人都能用英语",
    "author": "(中) 李笑来",
    "year": 2024,
    "category": "writing",
    "cover": "/covers/69mike/2024_renrendouneng.jpg",
    "color": "red",
    "rating": null,
    "takeaway": "从 69mike 书架导入的写作与语言阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2024"
  },
  {
    "id": "book-2024-51",
    "title": "The Elements of Style",
    "author": "(US) William Strunk Jr., E.B. White",
    "year": 2024,
    "category": "writing",
    "cover": "/covers/69mike/2024_elementsofstyle.jpg",
    "color": "gray",
    "rating": null,
    "takeaway": "从 69mike 书架导入的写作与语言阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2024"
  },
  {
    "id": "book-2024-52",
    "title": "向学习英语者讲话",
    "author": "(中) 葛传椝",
    "year": 2024,
    "category": "writing",
    "cover": "/covers/69mike/2024_gechuanhua_english_learning.jpg",
    "color": "brown",
    "rating": null,
    "takeaway": "从 69mike 书架导入的写作与语言阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2024"
  },
  {
    "id": "book-2024-53",
    "title": "纳瓦尔宝典",
    "author": "(US) Eric Jorgenson",
    "year": 2024,
    "category": "assets",
    "cover": "/covers/69mike/2024_navalalmanack.jpg",
    "color": "teal",
    "rating": null,
    "takeaway": "从 69mike 书架导入的资产与长期主义阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2024"
  },
  {
    "id": "book-2024-54",
    "title": "COBUILD English Grammar",
    "author": "(US) Collins COBUILD",
    "year": 2024,
    "category": "writing",
    "cover": "/covers/69mike/2024_cobuild_english_grammar.jpg",
    "color": "#483d8b",
    "rating": null,
    "takeaway": "从 69mike 书架导入的写作与语言阅读记录，待补一句话收获。",
    "noteUrl": "https://69mike.com/bookshelf/#2024"
  }
];
