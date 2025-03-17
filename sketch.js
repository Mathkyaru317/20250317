let angle = 0;
let segments = [];
let leftSegments = [];
let rightSegments = [];
let farRightSegments = [];
let extraRightSegments = [];
let moreRightSegments = [];
let extraLeftSegments = [];
let moreLeftSegments = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('pointer-events', 'none'); // 禁止點擊事件
  for (let i = 0; i < 40; i++) { // 增加段數
    segments.push({ x: windowWidth / 2, y: windowHeight - i * 10 }); // 調整間距
    leftSegments.push({ x: windowWidth / 4, y: windowHeight - i * 10 }); // 左邊水草
    rightSegments.push({ x: (3 * windowWidth) / 4, y: windowHeight - i * 10 }); // 右邊水草
    farRightSegments.push({ x: (7 * windowWidth) / 8, y: windowHeight - i * 10 }); // 最右邊水草
    extraRightSegments.push({ x: (15 * windowWidth) / 16, y: windowHeight - i * 10 }); // 額外右邊水草
    moreRightSegments.push({ x: (31 * windowWidth) / 32, y: windowHeight - i * 10 }); // 更多右邊水草
    extraLeftSegments.push({ x: windowWidth / 8, y: windowHeight - i * 10 }); // 額外左邊水草
    moreLeftSegments.push({ x: windowWidth / 16, y: windowHeight - i * 10 }); // 更多左邊水草
  }
}

function draw() {
  clear(); // 設置背景為透明

  // 中間水草
  stroke(randomColor(150)); // 隨機顏色，增加透明度
  strokeWeight(60); // 增加線條粗細
  let head = segments[0];
  head.x = windowWidth / 2 + 50 * sin(angle);
  angle += 0.1; // 增加波動頻率

  for (let i = segments.length - 1; i > 0; i--) {
    segments[i].x = segments[i - 1].x;
  }

  for (let i = 0; i < segments.length - 1; i++) {
    line(segments[i].x, segments[i].y, segments[i + 1].x, segments[i + 1].y);
  }

  // 左邊水草
  stroke(randomColor(150)); // 隨機顏色，增加透明度
  let leftHead = leftSegments[0];
  leftHead.x = windowWidth / 4 + 50 * sin(angle);

  for (let i = leftSegments.length - 1; i > 0; i--) {
    leftSegments[i].x = leftSegments[i - 1].x;
  }

  for (let i = 0; i < leftSegments.length - 1; i++) {
    line(leftSegments[i].x, leftSegments[i].y, leftSegments[i + 1].x, leftSegments[i + 1].y);
  }

  // 額外左邊水草
  stroke(randomColor(150)); // 隨機顏色，增加透明度
  let extraLeftHead = extraLeftSegments[0];
  extraLeftHead.x = windowWidth / 8 + 50 * sin(angle);

  for (let i = extraLeftSegments.length - 1; i > 0; i--) {
    extraLeftSegments[i].x = extraLeftSegments[i - 1].x;
  }

  for (let i = 0; i < extraLeftSegments.length - 1; i++) {
    line(extraLeftSegments[i].x, extraLeftSegments[i].y, extraLeftSegments[i + 1].x, extraLeftSegments[i + 1].y);
  }

  // 更多左邊水草
  stroke(randomColor(150)); // 隨機顏色，增加透明度
  let moreLeftHead = moreLeftSegments[0];
  moreLeftHead.x = windowWidth / 16 + 50 * sin(angle);

  for (let i = moreLeftSegments.length - 1; i > 0; i--) {
    moreLeftSegments[i].x = moreLeftSegments[i - 1].x;
  }

  for (let i = 0; i < moreLeftSegments.length - 1; i++) {
    line(moreLeftSegments[i].x, moreLeftSegments[i].y, moreLeftSegments[i + 1].x, moreLeftSegments[i + 1].y);
  }

  // 右邊水草
  stroke(randomColor(150)); // 隨機顏色，增加透明度
  let rightHead = rightSegments[0];
  rightHead.x = (3 * windowWidth) / 4 + 50 * sin(angle);

  for (let i = rightSegments.length - 1; i > 0; i--) {
    rightSegments[i].x = rightSegments[i - 1].x;
  }

  for (let i = 0; i < rightSegments.length - 1; i++) {
    line(rightSegments[i].x, rightSegments[i].y, rightSegments[i + 1].x, rightSegments[i + 1].y);
  }

  // 最右邊水草
  stroke(randomColor(150)); // 隨機顏色，增加透明度
  let farRightHead = farRightSegments[0];
  farRightHead.x = (7 * windowWidth) / 8 + 50 * sin(angle);

  for (let i = farRightSegments.length - 1; i > 0; i--) {
    farRightSegments[i].x = farRightSegments[i - 1].x;
  }

  for (let i = 0; i < farRightSegments.length - 1; i++) {
    line(farRightSegments[i].x, farRightSegments[i].y, farRightSegments[i + 1].x, farRightSegments[i + 1].y);
  }

  // 額外右邊水草
  stroke(randomColor(150)); // 隨機顏色，增加透明度
  let extraRightHead = extraRightSegments[0];
  extraRightHead.x = (15 * windowWidth) / 16 + 50 * sin(angle);

  for (let i = extraRightSegments.length - 1; i > 0; i--) {
    extraRightSegments[i].x = extraRightSegments[i - 1].x;
  }

  for (let i = 0; i < extraRightSegments.length - 1; i++) {
    line(extraRightSegments[i].x, extraRightSegments[i].y, extraRightSegments[i + 1].x, extraRightSegments[i + 1].y);
  }

  // 更多右邊水草
  stroke(randomColor(150)); // 隨機顏色，增加透明度
  let moreRightHead = moreRightSegments[0];
  moreRightHead.x = (31 * windowWidth) / 32 + 50 * sin(angle);

  for (let i = moreRightSegments.length - 1; i > 0; i--) {
    moreRightSegments[i].x = moreRightSegments[i - 1].x;
  }

  for (let i = 0; i < moreRightSegments.length - 1; i++) {
    line(moreRightSegments[i].x, moreRightSegments[i].y, moreRightSegments[i + 1].x, moreRightSegments[i + 1].y);
  }
}

function randomColor(alpha) {
  return color(random(255), random(255), random(255), alpha);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  segments = [];
  leftSegments = [];
  rightSegments = [];
  farRightSegments = [];
  extraRightSegments = [];
  moreRightSegments = [];
  extraLeftSegments = [];
  moreLeftSegments = [];
  for (let i = 0; i < 40; i++) { // 增加段數
    segments.push({ x: windowWidth / 2, y: windowHeight - i * 10 }); // 調整間距
    leftSegments.push({ x: windowWidth / 4, y: windowHeight - i * 10 }); // 左邊水草
    rightSegments.push({ x: (3 * windowWidth) / 4, y: windowHeight - i * 10 }); // 右邊水草
    farRightSegments.push({ x: (7 * windowWidth) / 8, y: windowHeight - i * 10 }); // 最右邊水草
    extraRightSegments.push({ x: (15 * windowWidth) / 16, y: windowHeight - i * 10 }); // 額外右邊水草
    moreRightSegments.push({ x: (31 * windowWidth) / 32, y: windowHeight - i * 10 }); // 更多右邊水草
    extraLeftSegments.push({ x: windowWidth / 8, y: windowHeight - i * 10 }); // 額外左邊水草
    moreLeftSegments.push({ x: windowWidth / 16, y: windowHeight - i * 10 }); // 更多左邊水草
  }
}
