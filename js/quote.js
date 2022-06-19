const quote = [
  {
    korean:
      "지식만으로는 사람으로 성장할 수 없다. 사람은 마음이 성장해야 한다.",
    japanese: "負けたら終わりじゃなくて、辞めたら終わりなんだ。",
  },
  {
    korean:
      "세상의 어려운 일은 언제나 쉬운 데서 일어나고, 큰일은 언제나 작은 데서 시작된다.",
    japanese:
      "自分の運命は自分でコントロールすべきだ。さもないと、誰かにコントロールされてしまう。",
  },
  {
    korean: "늘 갈망하고 우직하게 나아가라.",
    japanese: "夢見ることができれば、それは実現できる。",
  },
  {
    korean: "모든 단점은, 장점이 될 수 있다.",
    japanese: "チャレンジして失敗を怖れるよりも、何もしないことを怖れろ。",
  },
  {
    korean: "열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다.",
    japanese:
      "凧が一番高く上がるのは、風に向かっている時である。風に流されている時ではない。",
  },
  {
    korean: "지옥을 겪고 있다면 계속 겪어 나가라.",
    japanese: "努力の対価は、償還することなしでは、決して消えない。",
  },
  {
    korean: "나는 내가 더 노력할수록 운이 더 좋아진다는 걸 발견했다.",
    japanese: "できると思うにせよ、できないと思うにせよ、そのとおになる。",
  },
  {
    korean: "성공은 매일 반복한 작은 노력들의 합이다.",
    japanese: "何事も成功するまでは不可能に思えるものである。",
  },
  {
    korean: "패배의 공포가 승리의 짜릿함보다 커지게 하지 마라.",
    japanese: "人に勝つより自分に勝て。",
  },
  {
    korean:
      "사람들이 인생에서 실패하는 가장 큰 이유는 친구, 가족, 이웃들의 말을 듣기 때문이다.",
    japanese: "チャンスは貯金できない。",
  },
  {
    korean:
      "성공이란 절대 실수를 하지 않는 게 아니라 같은 실수를 두 번 하지 않는 것에 있다.",
    japanese: "敗北を味を知ってこそ、最も甘美な勝利が味わえる。",
  },
  {
    korean:
      "성공하려면 당신을 찾아오는 모든 도전을 다 받아들여야 한다. 마음에 드는 것만 골라 받을 수는 없다.",
    japanese: "完璧を目指すよりまず終わらせろ。",
  },
  {
    korean:
      "세상에서 가장 중요한 일들 대부분은 아무도 도와주지 않을 때에도 계속 노력한 사람들에 의해 이루어졌다.",
    japanese: "汗で溺れた者はいない。",
  },
  {
    korean: "당신이 할 수 없는 일이 할 수 있는 일에 지장을 주게 하지 마라.",
    japanese: "自己弁解は、敗北の前兆である。いや、すでに敗北の姿である。",
  },
];

const quoteLen = quote.length;

const quoteText = document.querySelector(".quote-box__text");
const quoteLanBtn = document.querySelector(".quote-box__language");

let switchLan = false;

function createQuote() {
  const RANDOM_NUMBER = Math.floor(Math.random() * quoteLen);

  if (switchLan) {
    quoteText.innerText = quote[RANDOM_NUMBER].japanese;
  } else {
    quoteText.innerText = quote[RANDOM_NUMBER].korean;
  }
}

function changeQuoteLanguage(event) {
  event.preventDefault();

  if (switchLan) {
    switchLan = false;
  } else {
    switchLan = true;
  }
  createQuote();
}

createQuote();

quoteText.addEventListener("click", createQuote);
quoteLanBtn.addEventListener("click", changeQuoteLanguage);
