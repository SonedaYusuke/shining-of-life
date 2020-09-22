let pupilElements = document.getElementsByClassName("inochi__pupil");
let pupilInfos = [];

const init = (elements) => {
  const dataArray = [];
  Array.from(elements, (element) => {
    element.setAttribute("style", `left: 0px; top: $0px`); //初期化
    const clientRect = element.getBoundingClientRect();
    dataArray.push({
      element,
      x: clientRect.x,
      y: clientRect.y,
      width: clientRect.width,
      height: clientRect.height,
    });
  });
  return dataArray;
};

const calcPos = (mouse, elePos, eleWidth) => {
  if (mouse - elePos > eleWidth * 1.5) {
    return eleWidth;
  } else if (mouse - elePos <= 0.5 * eleWidth) {
    return 0;
  } else {
    return mouse - elePos - eleWidth * 0.5;
  }
};

window.addEventListener("resize", () => {
  pupilInfos = init(pupilElements);
});

window.addEventListener("load", () => {
  pupilInfos = init(pupilElements);
  window.addEventListener("mousemove", (e) => {
    Array.from(pupilInfos, (pupilData) => {
      const posX = calcPos(e.clientX, pupilData.x, pupilData.width);
      const posY = calcPos(e.clientY, pupilData.y, pupilData.height);
      pupilData.element.setAttribute("style", `left: ${posX}px; top: ${posY}px`);
    });
  });
});
