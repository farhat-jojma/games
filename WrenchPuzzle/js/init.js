var a0_0x3dd953 = a0_0x29e9;
(function (_0x5014a8, _0x1bbf8f) {
  var _0xb2e8fa = a0_0x29e9,
    _0x158c79 = _0x5014a8();
  while (!![]) {
    try {
      var _0x5ecffd =
        (parseInt(_0xb2e8fa(0x25e)) / 0x1) *
          (parseInt(_0xb2e8fa(0x24d)) / 0x2) +
        -parseInt(_0xb2e8fa(0x27b)) / 0x3 +
        parseInt(_0xb2e8fa(0x1af)) / 0x4 +
        (parseInt(_0xb2e8fa(0x20f)) / 0x5) *
          (-parseInt(_0xb2e8fa(0x2db)) / 0x6) +
        -parseInt(_0xb2e8fa(0x1d3)) / 0x7 +
        parseInt(_0xb2e8fa(0x206)) / 0x8 +
        (parseInt(_0xb2e8fa(0x2a8)) / 0x9) * (parseInt(_0xb2e8fa(0x207)) / 0xa);
      if (_0x5ecffd === _0x1bbf8f) break;
      else _0x158c79["push"](_0x158c79["shift"]());
    } catch (_0x127e64) {
      _0x158c79["push"](_0x158c79["shift"]());
    }
  }
})(a0_0x3344, 0x99c96);
var stage,
  canvasW = 0x0,
  canvasH = 0x0;
function initGameCanvas(_0x3eeae5, _0x1287f7) {
  var _0x9ddb33 = a0_0x29e9;
  const _0x35e36e = document["getElementById"](_0x9ddb33(0x2e6));
  (_0x35e36e[_0x9ddb33(0x272)] = _0x3eeae5),
    (_0x35e36e[_0x9ddb33(0x2e3)] = _0x1287f7),
    (canvasW = _0x3eeae5),
    (canvasH = _0x1287f7),
    (stage = new createjs[_0x9ddb33(0x1e7)](_0x9ddb33(0x2e6), {
      antialias: !![],
    })),
    createjs[_0x9ddb33(0x284)][_0x9ddb33(0x276)](stage),
    stage[_0x9ddb33(0x226)](0x14),
    (stage[_0x9ddb33(0x29c)] = !![]),
    (createjs[_0x9ddb33(0x1ce)][_0x9ddb33(0x205)] = 0x3c),
    createjs[_0x9ddb33(0x1ce)][_0x9ddb33(0x2c9)](_0x9ddb33(0x235), tick);
}
var safeZoneGuide = ![],
  canvasContainer,
  mainContainer,
  gameContainer,
  resultContainer,
  exitContainer,
  optionsContainer,
  shareContainer,
  shareSaveContainer,
  socialContainer,
  guideline,
  bg,
  bgP,
  logo,
  logoP,
  itemExit,
  itemExitP,
  popTitleTxt,
  popDescTxt,
  buttonConfirm,
  buttonCancel,
  itemResult,
  itemResultP,
  buttonContinue,
  resultTitleTxt,
  resultDescTxt,
  buttonShare,
  buttonSave,
  buttonSettings,
  buttonFullscreen,
  buttonSoundOn,
  buttonSoundOff,
  buttonMusicOn,
  buttonMusicOff,
  buttonExit,
  resultTitleOutlineTxt,
  resultDescOutlineTxt,
  resultShareTxt,
  resultShareOutlineTxt,
  popTitleOutlineTxt,
  popDescOutlineTxt;
$[a0_0x3dd953(0x22e)] = {};
var levelContainer,
  stageContainer,
  editContainer,
  wrenchContainer,
  nutContainer,
  nutBgContainer,
  stageDisplayContainer,
  statusContainer,
  buttonStart,
  selectLevelTitleTxt,
  buttonLevelArrowL,
  buttonLevelArrowR,
  itemStage,
  stageTxt,
  itemStatus,
  statusTxt,
  touchScreen;
($["select"] = {}), ($[a0_0x3dd953(0x285)] = {});
function buildGameCanvas() {
  var _0x508a47 = a0_0x3dd953;
  (canvasContainer = new createjs[_0x508a47(0x1d4)]()),
    (mainContainer = new createjs[_0x508a47(0x1d4)]()),
    (gameContainer = new createjs[_0x508a47(0x1d4)]()),
    (exitContainer = new createjs[_0x508a47(0x1d4)]()),
    (resultContainer = new createjs[_0x508a47(0x1d4)]()),
    (shareContainer = new createjs[_0x508a47(0x1d4)]()),
    (shareSaveContainer = new createjs[_0x508a47(0x1d4)]()),
    (socialContainer = new createjs[_0x508a47(0x1d4)]()),
    (levelContainer = new createjs["Container"]()),
    (stageContainer = new createjs[_0x508a47(0x1d4)]()),
    (editContainer = new createjs[_0x508a47(0x1d4)]()),
    (wrenchContainer = new createjs[_0x508a47(0x1d4)]()),
    (nutContainer = new createjs[_0x508a47(0x1d4)]()),
    (nutBgContainer = new createjs["Container"]()),
    (stageDisplayContainer = new createjs[_0x508a47(0x1d4)]()),
    (statusContainer = new createjs[_0x508a47(0x1d4)]()),
    (bg = new createjs[_0x508a47(0x2ce)](
      loader[_0x508a47(0x2f1)](_0x508a47(0x1d7))
    )),
    (bgP = new createjs[_0x508a47(0x2ce)](
      loader[_0x508a47(0x2f1)](_0x508a47(0x29a))
    )),
    (logo = new createjs[_0x508a47(0x2ce)](
      loader["getResult"](_0x508a47(0x2d8))
    )),
    (logoP = new createjs[_0x508a47(0x2ce)](
      loader[_0x508a47(0x2f1)](_0x508a47(0x208))
    )),
    (buttonStart = new createjs["Bitmap"](
      loader[_0x508a47(0x2f1)]("buttonStart")
    )),
    centerReg(buttonStart);
  var _0x56addb = {
      sX: 0x0,
      sY: 0x0,
      x: 0x0,
      y: 0x0,
      space: 0x5,
      size: 0x50,
      count: 0x0,
    },
    _0x276d7b =
      (selectData[_0x508a47(0x2cd)] - 0x1) * _0x56addb[_0x508a47(0x238)];
  _0x276d7b +=
    (selectData[_0x508a47(0x2cd)] - 0x1) * _0x56addb[_0x508a47(0x203)];
  var _0x58b249 =
    (selectData[_0x508a47(0x1f9)] - 0x1) * _0x56addb[_0x508a47(0x238)];
  (_0x58b249 += (selectData["row"] - 0x1) * _0x56addb[_0x508a47(0x203)]),
    (_0x56addb["sX"] = -(_0x276d7b / 0x2)),
    (_0x56addb["sY"] = -(_0x58b249 / 0x2)),
    (_0x56addb["y"] = _0x56addb["sY"]);
  for (
    var _0x3e8712 = 0x0;
    _0x3e8712 < selectData[_0x508a47(0x1f9)];
    _0x3e8712++
  ) {
    _0x56addb["x"] = _0x56addb["sX"];
    for (
      var _0x3f9f10 = 0x0;
      _0x3f9f10 < selectData[_0x508a47(0x2cd)];
      _0x3f9f10++
    ) {
      ($[_0x508a47(0x285)][_0x3e8712 + "_" + _0x3f9f10] = new createjs[
        _0x508a47(0x2ce)
      ](loader[_0x508a47(0x2f1)]("itemLevelLock"))),
        centerReg($[_0x508a47(0x285)][_0x3e8712 + "_" + _0x3f9f10]),
        ($["level"][_0x3e8712 + "_" + _0x3f9f10]["x"] = _0x56addb["x"]),
        ($["level"][_0x3e8712 + "_" + _0x3f9f10]["y"] = _0x56addb["y"]),
        ($[_0x508a47(0x285)][_0x3e8712 + _0x508a47(0x293) + _0x3f9f10] =
          new createjs[_0x508a47(0x2ce)](
            loader[_0x508a47(0x2f1)](_0x508a47(0x210))
          )),
        centerReg($["level"][_0x3e8712 + _0x508a47(0x293) + _0x3f9f10]),
        ($[_0x508a47(0x285)][_0x3e8712 + _0x508a47(0x293) + _0x3f9f10]["x"] =
          _0x56addb["x"]),
        ($["level"][_0x3e8712 + _0x508a47(0x293) + _0x3f9f10]["y"] =
          _0x56addb["y"]),
        ($[_0x508a47(0x285)][_0x3e8712 + "_text_" + _0x3f9f10] = new createjs[
          "Text"
        ]()),
        ($[_0x508a47(0x285)][_0x3e8712 + "_text_" + _0x3f9f10][
          _0x508a47(0x2cc)
        ] = _0x508a47(0x1de)),
        ($[_0x508a47(0x285)][_0x3e8712 + _0x508a47(0x2b4) + _0x3f9f10][
          "color"
        ] = "#1A2028"),
        ($[_0x508a47(0x285)][_0x3e8712 + _0x508a47(0x2b4) + _0x3f9f10][
          _0x508a47(0x2a7)
        ] = "center"),
        ($[_0x508a47(0x285)][_0x3e8712 + "_text_" + _0x3f9f10][
          _0x508a47(0x259)
        ] = _0x508a47(0x2bf)),
        ($[_0x508a47(0x285)][_0x3e8712 + "_text_" + _0x3f9f10]["x"] =
          _0x56addb["x"]),
        ($[_0x508a47(0x285)][_0x3e8712 + _0x508a47(0x2b4) + _0x3f9f10]["y"] =
          _0x56addb["y"] + 0x8),
        ($[_0x508a47(0x285)][_0x3e8712 + "_text_" + _0x3f9f10][
          _0x508a47(0x2e1)
        ] = new createjs[_0x508a47(0x256)](
          new createjs[_0x508a47(0x294)]()
            [_0x508a47(0x2d6)]("#000")
            ["drawRect"](0x0, 0x0, 0x0, 0x0)
        )),
        ($[_0x508a47(0x285)][_0x3e8712 + "_unlock_" + _0x3f9f10][
          _0x508a47(0x1bc)
        ] = $[_0x508a47(0x285)][_0x3e8712 + _0x508a47(0x2b4) + _0x3f9f10]),
        levelContainer[_0x508a47(0x1e9)](
          $["level"][_0x3e8712 + "_" + _0x3f9f10],
          $["level"][_0x3e8712 + "_unlock_" + _0x3f9f10],
          $[_0x508a47(0x285)][_0x3e8712 + "_text_" + _0x3f9f10]
        ),
        (_0x56addb["x"] += _0x56addb["size"] + _0x56addb[_0x508a47(0x203)]),
        _0x56addb[_0x508a47(0x1c9)]++;
    }
    _0x56addb["y"] += _0x56addb[_0x508a47(0x238)] + _0x56addb[_0x508a47(0x203)];
  }
  (selectLevelTitleTxt = new createjs[_0x508a47(0x2ee)]()),
    (selectLevelTitleTxt[_0x508a47(0x2cc)] = _0x508a47(0x1de)),
    (selectLevelTitleTxt[_0x508a47(0x1b9)] = "#fff"),
    (selectLevelTitleTxt["textAlign"] = _0x508a47(0x297)),
    (selectLevelTitleTxt[_0x508a47(0x259)] = _0x508a47(0x2bf)),
    (selectLevelTitleTxt[_0x508a47(0x1bc)] = textStrings[_0x508a47(0x20d)]),
    (buttonLevelArrowL = new createjs[_0x508a47(0x2ce)](
      loader["getResult"](_0x508a47(0x1e1))
    )),
    centerReg(buttonLevelArrowL),
    (buttonLevelArrowL[_0x508a47(0x1f8)] = -0x1),
    (buttonLevelArrowR = new createjs["Bitmap"](
      loader[_0x508a47(0x2f1)]("buttonArrow")
    )),
    centerReg(buttonLevelArrowR),
    (buttonLevelArrowL["x"] = -0x10e),
    (buttonLevelArrowR["x"] = 0x10e),
    levelContainer["addChild"](
      selectLevelTitleTxt,
      buttonLevelArrowL,
      buttonLevelArrowR
    ),
    stageContainer[_0x508a47(0x1e9)](
      editContainer,
      nutBgContainer,
      wrenchContainer,
      nutContainer
    ),
    (itemStage = new createjs[_0x508a47(0x2ce)](
      loader[_0x508a47(0x2f1)](_0x508a47(0x2bd))
    )),
    centerReg(itemStage),
    (stageTxt = new createjs[_0x508a47(0x2ee)]()),
    (stageTxt["font"] = _0x508a47(0x28b)),
    (stageTxt[_0x508a47(0x1b9)] = _0x508a47(0x28e)),
    (stageTxt[_0x508a47(0x2a7)] = _0x508a47(0x297)),
    (stageTxt[_0x508a47(0x259)] = _0x508a47(0x2bf)),
    (stageTxt["y"] = 0x5),
    stageDisplayContainer["addChild"](itemStage, stageTxt),
    (itemStatus = new createjs[_0x508a47(0x2ce)](
      loader[_0x508a47(0x2f1)](_0x508a47(0x25b))
    )),
    centerReg(itemStatus),
    (statusTxt = new createjs[_0x508a47(0x2ee)]()),
    (statusTxt[_0x508a47(0x2cc)] = "22px\x20designerregular"),
    (statusTxt[_0x508a47(0x1b9)] = _0x508a47(0x23e)),
    (statusTxt["textAlign"] = _0x508a47(0x297)),
    (statusTxt[_0x508a47(0x259)] = "alphabetic"),
    (statusTxt["y"] = 0x7),
    statusContainer[_0x508a47(0x1e9)](itemStatus, statusTxt),
    (touchScreen = new createjs["Shape"]()),
    (touchScreen[_0x508a47(0x2e1)] = new createjs[_0x508a47(0x256)](
      new createjs["Graphics"]()
        [_0x508a47(0x2d6)](_0x508a47(0x1ee))
        ["drawRect"](
          -(landscapeSize["w"] / 0x2),
          -(portraitSize["h"] / 0x2),
          landscapeSize["w"],
          portraitSize["h"]
        )
    )),
    (itemResult = new createjs[_0x508a47(0x2ce)](
      loader[_0x508a47(0x2f1)](_0x508a47(0x24a))
    )),
    centerReg(itemResult),
    (itemResultP = new createjs[_0x508a47(0x2ce)](
      loader[_0x508a47(0x2f1)](_0x508a47(0x274))
    )),
    centerReg(itemResultP),
    (buttonContinue = new createjs[_0x508a47(0x2ce)](
      loader[_0x508a47(0x2f1)]("buttonContinue")
    )),
    centerReg(buttonContinue),
    (resultTitleTxt = new createjs["Text"]()),
    (resultTitleTxt[_0x508a47(0x2cc)] = _0x508a47(0x1ba)),
    (resultTitleTxt[_0x508a47(0x1b9)] = "#1A2028"),
    (resultTitleTxt[_0x508a47(0x2a7)] = _0x508a47(0x297)),
    (resultTitleTxt[_0x508a47(0x259)] = _0x508a47(0x2bf)),
    (resultTitleTxt[_0x508a47(0x1bc)] = textStrings[_0x508a47(0x2ba)]),
    (resultTitleOutlineTxt = new createjs[_0x508a47(0x2ee)]()),
    (resultTitleOutlineTxt["font"] = _0x508a47(0x1ba)),
    (resultTitleOutlineTxt["color"] = _0x508a47(0x1ee)),
    (resultTitleOutlineTxt[_0x508a47(0x2a7)] = _0x508a47(0x297)),
    (resultTitleOutlineTxt[_0x508a47(0x259)] = _0x508a47(0x2bf)),
    (resultTitleOutlineTxt[_0x508a47(0x2cb)] = 0x6),
    (resultTitleOutlineTxt[_0x508a47(0x1bc)] = textStrings[_0x508a47(0x2ba)]),
    (resultDescTxt = new createjs[_0x508a47(0x2ee)]()),
    (resultDescTxt["font"] = _0x508a47(0x1a4)),
    (resultDescTxt[_0x508a47(0x27f)] = 0x23),
    (resultDescTxt["color"] = _0x508a47(0x1c7)),
    (resultDescTxt[_0x508a47(0x2a7)] = _0x508a47(0x297)),
    (resultDescTxt[_0x508a47(0x259)] = "alphabetic"),
    (resultDescTxt[_0x508a47(0x1bc)] = ""),
    (resultDescOutlineTxt = new createjs[_0x508a47(0x2ee)]()),
    (resultDescOutlineTxt[_0x508a47(0x2cc)] = "45px\x20designerregular"),
    (resultDescOutlineTxt[_0x508a47(0x27f)] = 0x23),
    (resultDescOutlineTxt[_0x508a47(0x1b9)] = _0x508a47(0x1ee)),
    (resultDescOutlineTxt[_0x508a47(0x2a7)] = _0x508a47(0x297)),
    (resultDescOutlineTxt[_0x508a47(0x259)] = "alphabetic"),
    (resultDescOutlineTxt[_0x508a47(0x2cb)] = 0x8),
    (resultTitleTxt["y"] = resultTitleOutlineTxt["y"] = -0x8c),
    (resultDescTxt["y"] = resultDescOutlineTxt["y"] = -0x32),
    (buttonContinue["y"] = 0x8c),
    (resultShareTxt = new createjs["Text"]()),
    (resultShareTxt[_0x508a47(0x2cc)] = _0x508a47(0x1db)),
    (resultShareTxt[_0x508a47(0x1b9)] = _0x508a47(0x28e)),
    (resultShareTxt[_0x508a47(0x2a7)] = _0x508a47(0x297)),
    (resultShareTxt[_0x508a47(0x259)] = "alphabetic"),
    (resultShareTxt[_0x508a47(0x1bc)] = textStrings[_0x508a47(0x22e)]),
    (resultShareOutlineTxt = new createjs[_0x508a47(0x2ee)]()),
    (resultShareOutlineTxt["font"] = "25px\x20designerregular"),
    (resultShareOutlineTxt[_0x508a47(0x1b9)] = _0x508a47(0x1ee)),
    (resultShareOutlineTxt[_0x508a47(0x2a7)] = _0x508a47(0x297)),
    (resultShareOutlineTxt[_0x508a47(0x259)] = "alphabetic"),
    (resultShareOutlineTxt["outline"] = 0x4),
    (resultShareOutlineTxt[_0x508a47(0x1bc)] = textStrings["share"]),
    (shareContainer["y"] = shareSaveContainer["y"] = 0x0),
    (socialContainer["scale"] = 0.8),
    (socialContainer[_0x508a47(0x2c1)] = ![]),
    shareContainer[_0x508a47(0x1e9)](
      resultShareOutlineTxt,
      resultShareTxt,
      socialContainer
    ),
    (resultTitleOutlineTxt[_0x508a47(0x2c1)] = ![]),
    (resultDescOutlineTxt["visible"] = ![]),
    (resultShareOutlineTxt["visible"] = ![]);
  if (shareSettings[_0x508a47(0x276)]) {
    (buttonShare = new createjs["Bitmap"](
      loader[_0x508a47(0x2f1)](_0x508a47(0x1cf))
    )),
      centerReg(buttonShare);
    var _0x2147c6 = { x: 0x0, y: 0x28, spaceX: 0x41 };
    _0x2147c6["x"] = -(
      ((shareSettings[_0x508a47(0x1b2)][_0x508a47(0x2a5)] - 0x1) *
        _0x2147c6["spaceX"]) /
      0x2
    );
    for (
      let _0x57a05c = 0x0;
      _0x57a05c < shareSettings[_0x508a47(0x1b2)]["length"];
      _0x57a05c++
    ) {
      var _0x3b479a = shareSettings[_0x508a47(0x1b2)][_0x57a05c],
        _0x3f585a =
          String(_0x3b479a[0x0])["toUpperCase"]() +
          String(_0x3b479a)[_0x508a47(0x236)](0x1);
      ($[_0x508a47(0x22e)][_0x508a47(0x1fe) + _0x57a05c] = new createjs[
        "Bitmap"
      ](loader[_0x508a47(0x2f1)](_0x508a47(0x1fe) + _0x3f585a))),
        ($[_0x508a47(0x22e)][_0x508a47(0x1fe) + _0x57a05c][_0x508a47(0x2a2)] =
          _0x3b479a),
        centerReg($[_0x508a47(0x22e)]["button" + _0x57a05c]),
        ($[_0x508a47(0x22e)][_0x508a47(0x1fe) + _0x57a05c]["x"] =
          _0x2147c6["x"]),
        ($[_0x508a47(0x22e)][_0x508a47(0x1fe) + _0x57a05c]["y"] =
          _0x2147c6["y"]),
        socialContainer[_0x508a47(0x1e9)](
          $["share"][_0x508a47(0x1fe) + _0x57a05c]
        ),
        (_0x2147c6["x"] += _0x2147c6[_0x508a47(0x298)]);
    }
    (buttonShare["y"] = buttonShare["image"][_0x508a47(0x228)] / 0x2 + 0xa),
      shareContainer[_0x508a47(0x1e9)](buttonShare);
  }
  typeof toggleScoreboardSave == "function" &&
    ((buttonSave = new createjs["Bitmap"](
      loader["getResult"](_0x508a47(0x217))
    )),
    centerReg(buttonSave),
    (buttonSave["y"] = buttonSave["image"]["naturalHeight"] / 0x2 + 0xa),
    shareSaveContainer[_0x508a47(0x1e9)](buttonSave)),
    (buttonFullscreen = new createjs[_0x508a47(0x2ce)](
      loader[_0x508a47(0x2f1)](_0x508a47(0x245))
    )),
    centerReg(buttonFullscreen),
    (buttonSoundOn = new createjs[_0x508a47(0x2ce)](
      loader[_0x508a47(0x2f1)](_0x508a47(0x2c2))
    )),
    centerReg(buttonSoundOn),
    (buttonSoundOff = new createjs[_0x508a47(0x2ce)](
      loader[_0x508a47(0x2f1)]("buttonSoundOff")
    )),
    centerReg(buttonSoundOff),
    (buttonSoundOn["visible"] = ![]),
    (buttonMusicOn = new createjs[_0x508a47(0x2ce)](
      loader[_0x508a47(0x2f1)](_0x508a47(0x2b3))
    )),
    centerReg(buttonMusicOn),
    (buttonMusicOff = new createjs[_0x508a47(0x2ce)](
      loader[_0x508a47(0x2f1)]("buttonMusicOff")
    )),
    centerReg(buttonMusicOff),
    (buttonMusicOn[_0x508a47(0x2c1)] = ![]),
    (buttonExit = new createjs["Bitmap"](
      loader["getResult"](_0x508a47(0x2b8))
    )),
    centerReg(buttonExit),
    (buttonSettings = new createjs[_0x508a47(0x2ce)](
      loader["getResult"](_0x508a47(0x2f4))
    )),
    centerReg(buttonSettings),
    createHitarea(buttonFullscreen),
    createHitarea(buttonSoundOn),
    createHitarea(buttonSoundOff),
    createHitarea(buttonMusicOn),
    createHitarea(buttonMusicOff),
    createHitarea(buttonExit),
    createHitarea(buttonSettings),
    (optionsContainer = new createjs[_0x508a47(0x1d4)]()),
    optionsContainer[_0x508a47(0x1e9)](
      buttonFullscreen,
      buttonSoundOn,
      buttonSoundOff,
      buttonMusicOn,
      buttonMusicOff,
      buttonExit
    ),
    (optionsContainer["visible"] = ![]),
    (itemExit = new createjs["Bitmap"](
      loader[_0x508a47(0x2f1)](_0x508a47(0x2d0))
    )),
    (itemExitP = new createjs["Bitmap"](loader[_0x508a47(0x2f1)]("itemExitP"))),
    centerReg(itemExit),
    centerReg(itemExitP),
    (buttonConfirm = new createjs[_0x508a47(0x2ce)](
      loader[_0x508a47(0x2f1)](_0x508a47(0x1df))
    )),
    centerReg(buttonConfirm),
    (buttonCancel = new createjs[_0x508a47(0x2ce)](
      loader["getResult"](_0x508a47(0x1d8))
    )),
    centerReg(buttonCancel),
    (popTitleTxt = new createjs[_0x508a47(0x2ee)]()),
    (popTitleTxt[_0x508a47(0x2cc)] = _0x508a47(0x1ba)),
    (popTitleTxt[_0x508a47(0x1b9)] = "#1A2028"),
    (popTitleTxt[_0x508a47(0x2a7)] = _0x508a47(0x297)),
    (popTitleTxt[_0x508a47(0x259)] = "alphabetic"),
    (popTitleTxt[_0x508a47(0x1bc)] = textStrings[_0x508a47(0x29f)]),
    (popTitleOutlineTxt = new createjs[_0x508a47(0x2ee)]()),
    (popTitleOutlineTxt["font"] = _0x508a47(0x1ba)),
    (popTitleOutlineTxt[_0x508a47(0x1b9)] = _0x508a47(0x1ee)),
    (popTitleOutlineTxt["textAlign"] = _0x508a47(0x297)),
    (popTitleOutlineTxt[_0x508a47(0x259)] = _0x508a47(0x2bf)),
    (popTitleOutlineTxt[_0x508a47(0x2cb)] = 0x6),
    (popTitleOutlineTxt[_0x508a47(0x1bc)] = textStrings[_0x508a47(0x29f)]),
    (popDescTxt = new createjs[_0x508a47(0x2ee)]()),
    (popDescTxt[_0x508a47(0x2cc)] = _0x508a47(0x28b)),
    (popDescTxt[_0x508a47(0x27f)] = 0x1a),
    (popDescTxt["color"] = _0x508a47(0x28e)),
    (popDescTxt[_0x508a47(0x2a7)] = _0x508a47(0x297)),
    (popDescTxt["textBaseline"] = "alphabetic"),
    (popDescTxt[_0x508a47(0x1bc)] = textStrings[_0x508a47(0x241)]),
    (popDescOutlineTxt = new createjs[_0x508a47(0x2ee)]()),
    (popDescOutlineTxt[_0x508a47(0x2cc)] = _0x508a47(0x28b)),
    (popDescOutlineTxt[_0x508a47(0x27f)] = 0x1a),
    (popDescOutlineTxt[_0x508a47(0x1b9)] = _0x508a47(0x1ee)),
    (popDescOutlineTxt["textAlign"] = _0x508a47(0x297)),
    (popDescOutlineTxt["textBaseline"] = "alphabetic"),
    (popDescOutlineTxt[_0x508a47(0x2cb)] = 0x4),
    (popDescOutlineTxt[_0x508a47(0x1bc)] = textStrings[_0x508a47(0x241)]),
    (popTitleTxt["y"] = popTitleOutlineTxt["y"] = -0x8c),
    (popDescTxt["y"] = popDescOutlineTxt["y"] = -0x46),
    (buttonConfirm["x"] = 0x0),
    (buttonConfirm["y"] = 0x3c),
    (buttonCancel["x"] = 0x0),
    (buttonCancel["y"] = 0x8c),
    exitContainer[_0x508a47(0x1e9)](
      itemExit,
      itemExitP,
      popTitleOutlineTxt,
      popTitleTxt,
      popDescOutlineTxt,
      popDescTxt,
      buttonConfirm,
      buttonCancel
    ),
    (exitContainer[_0x508a47(0x2c1)] = ![]),
    (popTitleOutlineTxt["visible"] = ![]),
    (popDescOutlineTxt[_0x508a47(0x2c1)] = ![]),
    mainContainer["addChild"](logo, logoP, buttonStart),
    gameContainer[_0x508a47(0x1e9)](
      touchScreen,
      stageContainer,
      stageDisplayContainer,
      statusContainer
    ),
    resultContainer[_0x508a47(0x1e9)](
      itemResult,
      itemResultP,
      buttonContinue,
      resultTitleOutlineTxt,
      resultTitleTxt,
      resultDescOutlineTxt,
      resultDescTxt,
      shareContainer,
      shareSaveContainer
    ),
    canvasContainer[_0x508a47(0x1e9)](
      bg,
      bgP,
      mainContainer,
      levelContainer,
      gameContainer,
      resultContainer,
      exitContainer,
      optionsContainer,
      buttonSettings,
      guideline
    ),
    stage[_0x508a47(0x1e9)](canvasContainer),
    changeViewport(viewport[_0x508a47(0x1f3)]),
    resizeGameFunc();
}
function changeViewport(_0x48aea5) {
  _0x48aea5
    ? ((stageW = landscapeSize["w"]),
      (stageH = landscapeSize["h"]),
      (contentW = landscapeSize["cW"]),
      (contentH = landscapeSize["cH"]))
    : ((stageW = portraitSize["w"]),
      (stageH = portraitSize["h"]),
      (contentW = portraitSize["cW"]),
      (contentH = portraitSize["cH"])),
    (canvasW = stageW),
    (canvasH = stageH),
    changeCanvasViewport();
}
function changeCanvasViewport() {
  var _0x48c24d = a0_0x3dd953;
  canvasContainer != undefined &&
    ((stage[_0x48c24d(0x1f8)] = stage[_0x48c24d(0x221)] = dpr),
    safeZoneGuide &&
      guideline[_0x48c24d(0x243)]
        [_0x48c24d(0x21d)]()
        [_0x48c24d(0x21e)](0x2)
        [_0x48c24d(0x2ed)](_0x48c24d(0x1e6))
        ["drawRect"](
          (stageW - contentW) / 0x2,
          (stageH - contentH) / 0x2,
          contentW,
          contentH
        ),
    (exitContainer["x"] = canvasW / 0x2),
    (exitContainer["y"] = canvasH / 0x2),
    (resultContainer["x"] = canvasW / 0x2),
    (resultContainer["y"] = canvasH / 0x2),
    viewport[_0x48c24d(0x1f3)]
      ? ((bg[_0x48c24d(0x2c1)] = !![]),
        (bgP["visible"] = ![]),
        (logo[_0x48c24d(0x2c1)] = !![]),
        (logoP[_0x48c24d(0x2c1)] = ![]),
        (buttonStart["x"] = canvasW / 0x2),
        (buttonStart["y"] = (canvasH / 0x64) * 0x4a),
        (levelContainer["x"] = canvasW / 0x2),
        (levelContainer["y"] = canvasH / 0x2),
        (selectLevelTitleTxt["y"] = -((canvasH / 0x64) * 0x1b)),
        (itemResult[_0x48c24d(0x2c1)] = !![]),
        (itemResultP[_0x48c24d(0x2c1)] = ![]),
        (itemExit["visible"] = !![]),
        (itemExitP[_0x48c24d(0x2c1)] = ![]))
      : ((bg[_0x48c24d(0x2c1)] = ![]),
        (bgP[_0x48c24d(0x2c1)] = !![]),
        (logo[_0x48c24d(0x2c1)] = ![]),
        (logoP[_0x48c24d(0x2c1)] = !![]),
        (buttonStart["x"] = canvasW / 0x2),
        (buttonStart["y"] = (canvasH / 0x64) * 0x41),
        (levelContainer["x"] = canvasW / 0x2),
        (levelContainer["y"] = canvasH / 0x2),
        (selectLevelTitleTxt["y"] = -((canvasH / 0x64) * 0x12)),
        (itemResult[_0x48c24d(0x2c1)] = ![]),
        (itemResultP[_0x48c24d(0x2c1)] = !![]),
        (itemExit["visible"] = ![]),
        (itemExitP[_0x48c24d(0x2c1)] = !![])));
}
function resizeCanvas() {
  var _0x43561d = a0_0x3dd953;
  if (canvasContainer != undefined) {
    (buttonSettings["x"] = canvasW - offset["x"] - 0x32),
      (buttonSettings["y"] = offset["y"] + 0x2d);
    var _0x1fc10f = 0x3c,
      _0x24829d = 0x0;
    (buttonSoundOn["x"] = buttonSoundOff["x"] = buttonSettings["x"]),
      (buttonSoundOn["y"] = buttonSoundOff["y"] =
        buttonSettings["y"] + _0x1fc10f),
      (buttonSoundOn["x"] = buttonSoundOff["x"]),
      (buttonSoundOn["y"] = buttonSoundOff["y"] =
        buttonSettings["y"] + _0x1fc10f),
      typeof buttonMusicOn != _0x43561d(0x2c4)
        ? ((buttonMusicOn["x"] = buttonMusicOff["x"] = buttonSettings["x"]),
          (buttonMusicOn["y"] = buttonMusicOff["y"] =
            buttonSettings["y"] + _0x1fc10f * 0x2),
          (buttonMusicOn["x"] = buttonMusicOff["x"]),
          (buttonMusicOn["y"] = buttonMusicOff["y"] =
            buttonSettings["y"] + _0x1fc10f * 0x2),
          (_0x24829d = 0x2))
        : (_0x24829d = 0x1),
      (buttonFullscreen["x"] = buttonSettings["x"]),
      (buttonFullscreen["y"] =
        buttonSettings["y"] + _0x1fc10f * (_0x24829d + 0x1)),
      curPage == _0x43561d(0x1c8) || curPage == _0x43561d(0x1ac)
        ? ((buttonExit[_0x43561d(0x2c1)] = ![]),
          (buttonFullscreen["x"] = buttonSettings["x"]),
          (buttonFullscreen["y"] =
            buttonSettings["y"] + _0x1fc10f * (_0x24829d + 0x1)))
        : ((buttonExit[_0x43561d(0x2c1)] = !![]),
          (buttonExit["x"] = buttonSettings["x"]),
          (buttonExit["y"] =
            buttonSettings["y"] + _0x1fc10f * (_0x24829d + 0x2))),
      resizePuzzle();
  }
}
function removeGameCanvas() {
  var _0x5c061c = a0_0x3dd953;
  (stage[_0x5c061c(0x28d)] = !![]),
    stage["removeAllChildren"](),
    stage[_0x5c061c(0x2c8)](),
    createjs[_0x5c061c(0x1ce)]["removeEventListener"](_0x5c061c(0x235), tick),
    createjs["Ticker"]["removeEventListener"](_0x5c061c(0x235), stage);
}
function tick(_0x35099c) {
  updateGame(_0x35099c), stage["update"](_0x35099c);
}
function centerReg(_0x28b774) {
  var _0x42c5c8 = a0_0x3dd953;
  if (_0x28b774[_0x42c5c8(0x2e2)] == undefined) return;
  (_0x28b774[_0x42c5c8(0x254)] =
    _0x28b774[_0x42c5c8(0x2e2)][_0x42c5c8(0x23d)] / 0x2),
    (_0x28b774[_0x42c5c8(0x22a)] = _0x28b774["image"][_0x42c5c8(0x228)] / 0x2);
}
function createHitarea(_0x430517) {
  var _0x5be6f0 = a0_0x3dd953;
  _0x430517[_0x5be6f0(0x2e1)] = new createjs[_0x5be6f0(0x256)](
    new createjs[_0x5be6f0(0x294)]()
      [_0x5be6f0(0x2d6)](_0x5be6f0(0x1ee))
      [_0x5be6f0(0x2d5)](
        0x0,
        0x0,
        _0x430517[_0x5be6f0(0x2e2)][_0x5be6f0(0x23d)],
        _0x430517[_0x5be6f0(0x2e2)][_0x5be6f0(0x228)]
      )
  );
}
const wrenchSettings = [
    {
      short: {
        src: a0_0x3dd953(0x291),
        width: 0x69,
        height: 0x18,
        regX: 0x10,
        regY: 0x12,
      },
      medium: {
        src: a0_0x3dd953(0x222),
        width: 0x87,
        height: 0x18,
        regX: 0x10,
        regY: 0x12,
      },
      long: {
        src: "assets/item_wrench_01_c.png",
        width: 0xb8,
        height: 0x18,
        regX: 0x10,
        regY: 0x12,
      },
    },
    {
      short: {
        src: a0_0x3dd953(0x227),
        width: 0x69,
        height: 0x18,
        regX: 0x10,
        regY: 0x12,
      },
      medium: {
        src: a0_0x3dd953(0x29b),
        width: 0x87,
        height: 0x18,
        regX: 0x10,
        regY: 0x12,
      },
      long: {
        src: a0_0x3dd953(0x1a8),
        width: 0xb8,
        height: 0x18,
        regX: 0x10,
        regY: 0x12,
      },
    },
    {
      short: {
        src: a0_0x3dd953(0x275),
        width: 0x69,
        height: 0x18,
        regX: 0x10,
        regY: 0x12,
      },
      medium: {
        src: a0_0x3dd953(0x1f5),
        width: 0x87,
        height: 0x18,
        regX: 0x10,
        regY: 0x12,
      },
      long: {
        src: a0_0x3dd953(0x216),
        width: 0xb8,
        height: 0x18,
        regX: 0x10,
        regY: 0x12,
      },
    },
  ],
  gameSettings = { randomDesign: !![], rotateSpeed: 0x1 },
  textStrings = {
    selectStage: "SELECT\x20STAGE",
    stage: "STAGE\x20[NUMBER]",
    complete: a0_0x3dd953(0x244),
    exitTitle: a0_0x3dd953(0x1e2),
    exitMessage: a0_0x3dd953(0x1f0),
    share: "SHARE\x20YOUR\x20SCORE:",
    resultTitle: a0_0x3dd953(0x1b0),
    resultDesc: "STAGE\x20[NUMBER]",
  },
  shareSettings = {
    enable: false,
    options: [
      "facebook",
      a0_0x3dd953(0x23b),
      a0_0x3dd953(0x2b2),
      a0_0x3dd953(0x22b),
      a0_0x3dd953(0x21f),
      a0_0x3dd953(0x1d0),
    ],
    shareTitle:
      "Highscore\x20on\x20Wrench\x20Puzzle\x20game\x20is\x20stage\x20[SCORE]",
    shareText: a0_0x3dd953(0x27e),
    customScore: !![],
    gtag: !![],
  };
$[a0_0x3dd953(0x25a)] = { enable: ![] };
const playerData = { score: 0x0 },
  gameData = {
    paused: !![],
    levelIndex: 0x0,
    complete: ![],
    levelCompleted: 0x1,
    fallingObjects: [],
  },
  tweenData = { score: 0x0, tweenScore: 0x0 },
  gravityData = { animate: ![], gravity: 0.5, drag: 0.99, range: 0x64 },
  selectData = { page: 0x0, total: 0x1, max: 0x14, column: 0x5, row: 0x4 },
  cookieName = a0_0x3dd953(0x2a0);
function retrieveLevelData() {
  var _0x5ef8ea = a0_0x3dd953,
    _0x553d03 = Cookies[_0x5ef8ea(0x1a9)](cookieName);
  _0x553d03 != undefined &&
    ((gameData[_0x5ef8ea(0x1ca)] = Number(_0x553d03)),
    (gameData[_0x5ef8ea(0x1ca)] =
      gameData[_0x5ef8ea(0x1ca)] >= levelSettings[_0x5ef8ea(0x2a5)]
        ? levelSettings[_0x5ef8ea(0x2a5)]
        : gameData["levelCompleted"]),
    findSelectPage(gameData["levelCompleted"]));
}
function saveLevelData() {
  var _0x272de1 = a0_0x3dd953;
  Number(gameData[_0x272de1(0x2f3)]) >= gameData[_0x272de1(0x1ca)] &&
    ((gameData["levelCompleted"] = Number(gameData[_0x272de1(0x2f3)]) + 0x1),
    (gameData[_0x272de1(0x1ca)] =
      gameData[_0x272de1(0x1ca)] >= levelSettings[_0x272de1(0x2a5)]
        ? levelSettings["length"]
        : gameData["levelCompleted"]),
    Cookies[_0x272de1(0x278)](cookieName, gameData[_0x272de1(0x1ca)], {
      expires: 0x168,
    }));
}
function buildGameButton() {
  var _0xea9787 = a0_0x3dd953;
  $(window)["focus"](function () {
    var _0x15de69 = a0_0x29e9;
    !buttonSoundOn[_0x15de69(0x2c1)] && toggleSoundInMute(![]),
      typeof buttonMusicOn != _0x15de69(0x2c4) &&
        !buttonMusicOn[_0x15de69(0x2c1)] &&
        toggleMusicInMute(![]);
  }),
    $(window)[_0xea9787(0x246)](function () {
      var _0x3e53e9 = _0xea9787;
      !buttonSoundOn[_0x3e53e9(0x2c1)] && toggleSoundInMute(!![]),
        typeof buttonMusicOn != "undefined" &&
          !buttonMusicOn["visible"] &&
          toggleMusicInMute(!![]);
    });
  if (isDesktop) {
  }
  audioOn &&
    (muteSoundOn && toggleSoundMute(!![]),
    muteMusicOn && toggleMusicMute(!![]));
  (buttonStart[_0xea9787(0x2ae)] = _0xea9787(0x26d)),
    buttonStart[_0xea9787(0x2c9)](_0xea9787(0x2ea), function (_0x472586) {
      var _0x1d1ab7 = _0xea9787;
      playSound("soundButton"), goPage(_0x1d1ab7(0x285));
    }),
    (buttonLevelArrowL[_0xea9787(0x2ae)] = _0xea9787(0x26d)),
    buttonLevelArrowL[_0xea9787(0x2c9)](_0xea9787(0x2ea), function (_0x49da27) {
      playSound("soundButton"), toggleSelect(![]);
    }),
    (buttonLevelArrowR[_0xea9787(0x2ae)] = "pointer"),
    buttonLevelArrowR[_0xea9787(0x2c9)](_0xea9787(0x2ea), function (_0x5c7c83) {
      var _0xd57921 = _0xea9787;
      playSound(_0xd57921(0x2cf)), toggleSelect(!![]);
    }),
    itemExit[_0xea9787(0x2c9)](_0xea9787(0x2ea), function (_0x287659) {});
  if (shareSettings["enable"]) {
    (buttonShare[_0xea9787(0x2ae)] = _0xea9787(0x26d)),
      buttonShare[_0xea9787(0x2c9)]("click", function (_0x241d56) {
        var _0x1dcb58 = _0xea9787;
        playSound(_0x1dcb58(0x2cf)), toggleSocialShare(!![]);
      });
    for (
      let _0x1ae0ee = 0x0;
      _0x1ae0ee < shareSettings["options"][_0xea9787(0x2a5)];
      _0x1ae0ee++
    ) {
      ($[_0xea9787(0x22e)][_0xea9787(0x1fe) + _0x1ae0ee][_0xea9787(0x2ae)] =
        _0xea9787(0x26d)),
        $[_0xea9787(0x22e)][_0xea9787(0x1fe) + _0x1ae0ee][_0xea9787(0x2c9)](
          "click",
          function (_0x4c1984) {
            var _0x49bbde = _0xea9787;
            shareLinks(
              _0x4c1984[_0x49bbde(0x1a3)][_0x49bbde(0x2a2)],
              addCommas(playerData[_0x49bbde(0x299)])
            );
          }
        );
    }
  }
  (buttonContinue["cursor"] = _0xea9787(0x26d)),
    buttonContinue[_0xea9787(0x2c9)]("click", function (_0x557af2) {
      var _0x5a0849 = _0xea9787;
      playSound(_0x5a0849(0x2cf)), goPage(_0x5a0849(0x285));
    }),
    (buttonSoundOff[_0xea9787(0x2ae)] = _0xea9787(0x26d)),
    buttonSoundOff[_0xea9787(0x2c9)](_0xea9787(0x2ea), function (_0x4a5161) {
      toggleSoundMute(!![]);
    }),
    (buttonSoundOn[_0xea9787(0x2ae)] = _0xea9787(0x26d)),
    buttonSoundOn[_0xea9787(0x2c9)](_0xea9787(0x2ea), function (_0x50c66f) {
      toggleSoundMute(![]);
    }),
    typeof buttonMusicOff != _0xea9787(0x2c4) &&
      ((buttonMusicOff[_0xea9787(0x2ae)] = _0xea9787(0x26d)),
      buttonMusicOff["addEventListener"](
        _0xea9787(0x2ea),
        function (_0x1021b5) {
          toggleMusicMute(!![]);
        }
      )),
    typeof buttonMusicOn != "undefined" &&
      ((buttonMusicOn[_0xea9787(0x2ae)] = _0xea9787(0x26d)),
      buttonMusicOn[_0xea9787(0x2c9)](_0xea9787(0x2ea), function (_0x3776e1) {
        toggleMusicMute(![]);
      })),
    (buttonFullscreen[_0xea9787(0x2ae)] = "pointer"),
    buttonFullscreen[_0xea9787(0x2c9)](_0xea9787(0x2ea), function (_0xf6bda5) {
      toggleFullScreen();
    }),
    (buttonExit[_0xea9787(0x2ae)] = _0xea9787(0x26d)),
    buttonExit[_0xea9787(0x2c9)](_0xea9787(0x2ea), function (_0x24a26f) {
      togglePop(!![]), toggleOptions(![]);
    }),
    (buttonSettings["cursor"] = _0xea9787(0x26d)),
    buttonSettings[_0xea9787(0x2c9)](_0xea9787(0x2ea), function (_0x38ae9b) {
      toggleOptions();
    }),
    (buttonConfirm[_0xea9787(0x2ae)] = _0xea9787(0x26d)),
    buttonConfirm["addEventListener"](_0xea9787(0x2ea), function (_0x4f9a86) {
      var _0x5a475d = _0xea9787;
      playSound("soundButton"),
        togglePop(![]),
        stopGame(),
        goPage(_0x5a475d(0x1c8));
    }),
    (buttonCancel[_0xea9787(0x2ae)] = _0xea9787(0x26d)),
    buttonCancel[_0xea9787(0x2c9)](_0xea9787(0x2ea), function (_0x1a7c09) {
      var _0x422cbb = _0xea9787;
      playSound(_0x422cbb(0x2cf)), togglePop(![]);
    }),
    buildSelectLevel();
}
function buildSelectLevel() {
  var _0x32c70b = a0_0x3dd953;
  selectData[_0x32c70b(0x1c3)] =
    levelSettings["length"] / selectData[_0x32c70b(0x2dc)];
  String(selectData["total"])[_0x32c70b(0x267)](".") > -0x1 &&
    (selectData["total"] =
      Math[_0x32c70b(0x229)](selectData[_0x32c70b(0x1c3)]) + 0x1);
  toggleSelect(![]);
  for (
    var _0x429c9e = 0x0;
    _0x429c9e < selectData[_0x32c70b(0x1f9)];
    _0x429c9e++
  ) {
    for (
      var _0x1303d5 = 0x0;
      _0x1303d5 < selectData[_0x32c70b(0x2cd)];
      _0x1303d5++
    ) {
      ($[_0x32c70b(0x285)][_0x429c9e + _0x32c70b(0x293) + _0x1303d5][
        _0x32c70b(0x2ae)
      ] = "pointer"),
        $[_0x32c70b(0x285)][_0x429c9e + _0x32c70b(0x293) + _0x1303d5][
          "addEventListener"
        ](_0x32c70b(0x2ea), function (_0x197e8c) {
          var _0x7bb356 = _0x32c70b;
          (gameData[_0x7bb356(0x2f3)] =
            Number(_0x197e8c[_0x7bb356(0x1a3)]["text"][_0x7bb356(0x1bc)]) -
            0x1),
            playSound(_0x7bb356(0x2cf)),
            goPage(_0x7bb356(0x219));
        });
    }
  }
}
function toggleSelect(_0x16cbe5) {
  var _0x5a45ff = a0_0x3dd953;
  _0x16cbe5
    ? (selectData[_0x5a45ff(0x249)]++,
      (selectData["page"] =
        selectData["page"] > selectData[_0x5a45ff(0x1c3)]
          ? selectData["total"]
          : selectData[_0x5a45ff(0x249)]))
    : (selectData[_0x5a45ff(0x249)]--,
      (selectData[_0x5a45ff(0x249)] =
        selectData[_0x5a45ff(0x249)] < 0x1
          ? 0x1
          : selectData[_0x5a45ff(0x249)])),
    selectPage(selectData[_0x5a45ff(0x249)]);
}
function selectPage(_0x1e8a98) {
  var _0xd9b4a = a0_0x3dd953;
  (selectData[_0xd9b4a(0x249)] = _0x1e8a98),
    (selectData[_0xd9b4a(0x249)] =
      selectData[_0xd9b4a(0x249)] < 0x1 ? 0x1 : selectData[_0xd9b4a(0x249)]);
  var _0x2c7ced = (selectData["page"] - 0x1) * selectData[_0xd9b4a(0x2dc)];
  for (
    var _0x118f19 = 0x0;
    _0x118f19 < selectData[_0xd9b4a(0x1f9)];
    _0x118f19++
  ) {
    for (
      var _0x2f0e9e = 0x0;
      _0x2f0e9e < selectData[_0xd9b4a(0x2cd)];
      _0x2f0e9e++
    ) {
      ($[_0xd9b4a(0x285)][_0x118f19 + _0xd9b4a(0x293) + _0x2f0e9e][
        _0xd9b4a(0x2c1)
      ] = ![]),
        _0x2c7ced < levelSettings[_0xd9b4a(0x2a5)]
          ? (($[_0xd9b4a(0x285)][_0x118f19 + _0xd9b4a(0x2b4) + _0x2f0e9e][
              _0xd9b4a(0x1bc)
            ] = _0x2c7ced + 0x1),
            ($[_0xd9b4a(0x285)][_0x118f19 + _0xd9b4a(0x293) + _0x2f0e9e][
              _0xd9b4a(0x1bc)
            ]["visible"] = !![]),
            ($[_0xd9b4a(0x285)][_0x118f19 + "_" + _0x2f0e9e][_0xd9b4a(0x2c1)] =
              !![]))
          : (($[_0xd9b4a(0x285)][_0x118f19 + "_" + _0x2f0e9e]["visible"] = ![]),
            ($[_0xd9b4a(0x285)][_0x118f19 + _0xd9b4a(0x293) + _0x2f0e9e][
              _0xd9b4a(0x1bc)
            ][_0xd9b4a(0x2c1)] = ![])),
        _0x2c7ced < gameData[_0xd9b4a(0x1ca)]
          ? gameData[_0xd9b4a(0x1ff)] &&
            gameData[_0xd9b4a(0x2f3)] + 0x1 ==
              $[_0xd9b4a(0x285)][_0x118f19 + _0xd9b4a(0x2b4) + _0x2f0e9e][
                _0xd9b4a(0x1bc)
              ]
            ? unlockLevelTween(_0x118f19, _0x2f0e9e)
            : ($["level"][_0x118f19 + _0xd9b4a(0x293) + _0x2f0e9e]["visible"] =
                !![])
          : ($[_0xd9b4a(0x285)][_0x118f19 + "_text_" + _0x2f0e9e]["text"] = ""),
        _0x2c7ced++;
    }
  }
  selectData[_0xd9b4a(0x249)] == 0x1
    ? (buttonLevelArrowL[_0xd9b4a(0x2c1)] = ![])
    : (buttonLevelArrowL["visible"] = !![]),
    selectData[_0xd9b4a(0x249)] == selectData[_0xd9b4a(0x1c3)] ||
    selectData[_0xd9b4a(0x1c3)] == 0x1
      ? (buttonLevelArrowR[_0xd9b4a(0x2c1)] = ![])
      : (buttonLevelArrowR["visible"] = !![]);
}
function unlockLevelTween(_0x5959d7, _0x31905b) {
  var _0x4d24f6 = a0_0x3dd953;
  (gameData[_0x4d24f6(0x1ff)] = ![]),
    ($[_0x4d24f6(0x285)][_0x5959d7 + _0x4d24f6(0x293) + _0x31905b]["visible"] =
      !![]),
    ($[_0x4d24f6(0x285)][_0x5959d7 + _0x4d24f6(0x293) + _0x31905b][
      _0x4d24f6(0x26e)
    ] = 0x0),
    ($["level"][_0x5959d7 + _0x4d24f6(0x2b4) + _0x31905b][
      _0x4d24f6(0x26e)
    ] = 0x0),
    TweenMax["to"](
      $[_0x4d24f6(0x285)][_0x5959d7 + _0x4d24f6(0x293) + _0x31905b],
      0.5,
      {
        delay: 0.5,
        alpha: 0x1,
        scaleX: 1.2,
        scaleY: 1.2,
        overwrite: !![],
        onStart: function () {
          var _0x59737e = _0x4d24f6;
          playSound(_0x59737e(0x20a));
        },
        onComplete: function () {
          var _0x1c9e11 = _0x4d24f6;
          TweenMax["to"](
            $[_0x1c9e11(0x285)][_0x5959d7 + "_unlock_" + _0x31905b],
            0.5,
            { scaleX: 0x1, scaleY: 0x1, overwrite: !![] }
          );
        },
      }
    ),
    TweenMax["to"](
      $[_0x4d24f6(0x285)][_0x5959d7 + _0x4d24f6(0x2b4) + _0x31905b],
      0.5,
      { delay: 0.5, alpha: 0x1, overwrite: !![] }
    );
}
function findSelectPage(_0x51099b) {
  var _0x24b868 = a0_0x3dd953;
  for (var _0x574d23 = 0x0; _0x574d23 < 0xa; _0x574d23++) {
    var _0x3ba411 = (_0x574d23 + 0x1) * selectData[_0x24b868(0x2dc)];
    _0x51099b <= _0x3ba411 &&
      ((selectData[_0x24b868(0x249)] = _0x574d23 + 0x1), (_0x574d23 = 0xa));
  }
}
function toggleSocialShare(_0x592eb5) {
  var _0x16bcae = a0_0x3dd953;
  if (!shareSettings["enable"]) return;
  (buttonShare["visible"] = _0x592eb5 == !![] ? ![] : !![]),
    (shareSaveContainer[_0x16bcae(0x2c1)] = _0x592eb5 == !![] ? ![] : !![]),
    (socialContainer[_0x16bcae(0x2c1)] = _0x592eb5),
    _0x592eb5 &&
      typeof buttonSave !== "undefined" &&
      TweenMax["to"](buttonShare, 0x3, {
        overwrite: !![],
        onComplete: toggleSocialShare,
        onCompleteParams: [![]],
      });
}
function a0_0x3344() {
  var _0xf4b2ba = [
    "Graphics",
    "cos",
    "src",
    "center",
    "spaceX",
    "score",
    "backgroundP",
    "assets/item_wrench_02_b.png",
    "mouseMoveOutside",
    "wrenchLong",
    "assets/button_save.png",
    "exitTitle",
    "wrenchpuzzle2025",
    "removeAllEventListeners",
    "shareOption",
    "atan2",
    "show",
    "length",
    "drawCircle",
    "textAlign",
    "63rULwAl",
    "webkitFullscreenElement",
    "removeAllChildren",
    "assets/item_exit_p.png",
    "xspeed",
    "https://www.facebook.com/sharer/sharer.php?u=",
    "cursor",
    "push",
    "layers",
    "alternateExtensions",
    "whatsapp",
    "buttonMusicOn",
    "_text_",
    "abs",
    "navigator",
    "volume",
    "buttonExit",
    "To\x20install\x20the\x20game\x20just\x20upload\x20folder\x20\x27game\x27\x20to\x20your\x20server.\x20The\x20game\x20won\x27t\x20run\x20locally\x20with\x20some\x20browser\x20like\x20Chrome\x20due\x20to\x20some\x20security\x20mode.",
    "resultTitle",
    "webkitRequestFullscreen",
    "assets/button_confirm.png",
    "itemStage",
    "assets/item_status.png",
    "alphabetic",
    "design",
    "visible",
    "buttonSoundOn",
    "#canvasHolder",
    "undefined",
    "assets/background_p.png",
    "short",
    "fadeIn",
    "update",
    "addEventListener",
    "substring",
    "outline",
    "font",
    "column",
    "Bitmap",
    "soundButton",
    "itemExit",
    "hitTest",
    "#mainLoader",
    "[SCORE]",
    "randomDesign",
    "drawRect",
    "beginFill",
    "group",
    "logo",
    "itemLevelLock",
    "assets/button_arrow.png",
    "419598FWToAF",
    "max",
    "animate",
    "customScore",
    "assets/sounds/sound_wrench.ogg",
    "assets/item_result_p.png",
    "hitArea",
    "image",
    "height",
    "assets/logo.png",
    "paused",
    "gameCanvas",
    "assets/item_nut_2.png",
    "href",
    "There\x20was\x20an\x20error\x20while\x20trying\x20to\x20resume\x20the\x20SoundJS\x20Web\x20Audio\x20context...",
    "click",
    "function",
    "oriRotate",
    "beginStroke",
    "Text",
    "WebAudioPlugin",
    "share.php?title=",
    "getResult",
    "assets/sounds/music_main.ogg",
    "levelIndex",
    "buttonSettings",
    "rotateSpeed",
    "fadeOut",
    "shape",
    "target",
    "45px\x20designerregular",
    "wrenchIndex",
    "html",
    "buttonReddit",
    "assets/item_wrench_02_c.png",
    "get",
    "location",
    "wrenches",
    "result",
    "resultDesc",
    "mozCancelFullScreen",
    "1997504wgwgzg",
    "COMPLETE",
    "#rotateHolder",
    "options",
    "assets/sounds/sound_nut.ogg",
    "sound",
    "https://twitter.com/intent/tweet?text=",
    "replace",
    "documentElement",
    "assets/button_exit.png",
    "color",
    "34px\x20designerregular",
    "mobile",
    "text",
    "resume",
    "assets/item_nut_bg.png",
    "splice",
    "[NUMBER]",
    "assets/sounds/sound_hit.ogg",
    "assets/item_exit.png",
    "total",
    "facebook",
    "assets/button_start.png",
    "split",
    "#0f3d68",
    "main",
    "count",
    "levelCompleted",
    "userAgent",
    "assets/item_nut.png",
    "webkitExitFullscreen",
    "Ticker",
    "buttonShare",
    "linkedin",
    "stop",
    "https://t.me/share/url?url=",
    "8380911jMPzHu",
    "Container",
    "sin",
    "rotation",
    "background",
    "buttonCancel",
    "option",
    "musicMain",
    "20px\x20designerregular",
    "&text=",
    "stage",
    "30px\x20designerregular",
    "buttonConfirm",
    "scrollTop",
    "buttonArrow",
    "EXIT\x20GAME",
    "#notSupportHolder",
    "top",
    "tablet",
    "red",
    "Stage",
    "buttonLinkedin",
    "addChild",
    "msExitFullscreen",
    "gravity",
    "itemNut2",
    "wrenchShort",
    "#000",
    "soundHit",
    "ARE\x20YOU\x20SURE\x0aYOU\x20WANT\x20TO\x0aQUIT\x20GAME?",
    "assets/button_music_off.png",
    "protocol",
    "isLandscape",
    "defaultVol",
    "assets/item_wrench_03_b.png",
    "assets/sounds/sound_result.ogg",
    "soundNut",
    "scaleX",
    "row",
    "msRequestFullscreen",
    "itemExitP",
    "assets/button_music_on.png",
    "assets/item_level.png",
    "button",
    "revealLevel",
    "innerHeight",
    "https://api.whatsapp.com/send?text=",
    "exitFullscreen",
    "space",
    "assets/item_stage.png",
    "framerate",
    "4716280MhKABM",
    "3246250zCikdq",
    "logoP",
    "shareText",
    "soundUnlock",
    "itemNutBg",
    "Sound",
    "selectStage",
    "assets/button_continue.png",
    "85RYussx",
    "itemLevel",
    "soundResult",
    "medium",
    "mozRequestFullScreen",
    "complete",
    "assets/background.png",
    "assets/item_wrench_03_c.png",
    "buttonSave",
    "range",
    "game",
    "random",
    "item",
    "resize",
    "clear",
    "setStrokeStyle",
    "reddit",
    "assets/social/button_linkedin.png",
    "scaleY",
    "assets/item_wrench_01_b.png",
    "gtag",
    "fullscreenElement",
    "canvas",
    "enableMouseOver",
    "assets/item_wrench_02_a.png",
    "naturalHeight",
    "floor",
    "regY",
    "telegram",
    ".mobileRotate",
    "error\x20",
    "share",
    "layer",
    "play",
    "localToLocal",
    "assets/item_result.png",
    "fallingObjects",
    "event",
    "tick",
    "slice",
    "share.jpg",
    "size",
    "active",
    "requestFullscreen",
    "twitter",
    "substr",
    "naturalWidth",
    "#fff",
    "soundWrench",
    "reverse",
    "exitMessage",
    "%20",
    "graphics",
    "STAGE\x20[NUMBER]\x20COMPLETE",
    "buttonFullscreen",
    "blur",
    "buttonTwitter",
    "assets/social/button_twitter.png",
    "page",
    "itemResult",
    "soundComplete",
    "assets/social/button_telegram.png",
    "2ORAUsd",
    "killAll",
    "yspeed",
    "musicGame",
    "fileload",
    "left",
    "itemNut",
    "regX",
    "pow",
    "Shape",
    "style",
    "getContext",
    "textBaseline",
    "editor",
    "itemStatus",
    "state",
    "type",
    "757489KhUlmk",
    "currentTarget",
    "nut",
    "&thumb=",
    "hide",
    "buttonSoundOff",
    "assets/button_share.png",
    "assets/social/button_reddit.png",
    "assets/logo_p.png",
    "indexOf",
    "assets/sounds/sound_unlock.ogg",
    "tweenTimeline",
    "innerWidth",
    "assets/button_sound_on.png",
    "open",
    "pointer",
    "alpha",
    "long",
    "drag",
    "round",
    "width",
    "assets/button_cancel.png",
    "itemResultP",
    "assets/item_wrench_03_a.png",
    "enable",
    "progress",
    "set",
    "error",
    "installPlugin",
    "3308193IgESUv",
    "buttonTelegram",
    "assets/social/button_facebook.png",
    "Stage\x20[SCORE]\x20is\x20mine\x20new\x20highscore\x20on\x20Wrench\x20Puzzle\x20game!\x20Try\x20it\x20now!",
    "lineHeight",
    "msFullscreenElement",
    "devicePixelRatio",
    "css",
    "context",
    "Touch",
    "level",
    "log",
    "soundStart",
    "assets/social/button_whatsapp.png",
    "shareTitle",
    "hits",
    "22px\x20designerregular",
    "&url=",
    "autoClear",
    "#1A2028",
    "over",
    "levelNum",
    "assets/item_wrench_01_a.png",
    "orientationchange",
    "_unlock_",
  ];
  a0_0x3344 = function () {
    return _0xf4b2ba;
  };
  return a0_0x3344();
}
function positionShareButtons() {
  var _0x342538 = a0_0x3dd953;
  if (!shareSettings[_0x342538(0x276)]) return;
  typeof buttonShare !== "undefined" &&
    typeof buttonSave !== _0x342538(0x2c4) &&
    (buttonSave[_0x342538(0x2c1)]
      ? ((buttonShare["x"] = -(
          buttonShare[_0x342538(0x2e2)][_0x342538(0x23d)] / 0x2 +
          0x5
        )),
        (buttonSave["x"] =
          buttonShare[_0x342538(0x2e2)][_0x342538(0x23d)] / 0x2 + 0x5))
      : (buttonShare["x"] = 0x0));
}
function togglePop(_0x47cc40) {
  var _0xa591ee = a0_0x3dd953;
  exitContainer[_0xa591ee(0x2c1)] = _0x47cc40;
}
var curPage = "";
function goPage(_0x2a15b4) {
  var _0x22dea5 = a0_0x3dd953;
  (curPage = _0x2a15b4),
    (mainContainer["visible"] = ![]),
    (levelContainer["visible"] = ![]),
    (gameContainer[_0x22dea5(0x2c1)] = ![]),
    (resultContainer[_0x22dea5(0x2c1)] = ![]),
    togglePop(![]),
    toggleOptions(![]);
  var _0x500707 = null;
  switch (_0x2a15b4) {
    case "main":
      (_0x500707 = mainContainer),
        stopMusicLoop(_0x22dea5(0x250)),
        playMusicLoop("musicMain");
      break;
    case _0x22dea5(0x285):
      (_0x500707 = levelContainer), selectPage(selectData[_0x22dea5(0x249)]);
      break;
    case _0x22dea5(0x219):
      _0x500707 = gameContainer;
      !$[_0x22dea5(0x25a)][_0x22dea5(0x276)] &&
        (stopMusicLoop(_0x22dea5(0x1da)), playMusicLoop(_0x22dea5(0x250)));
      startGame();
      break;
    case "result":
      (_0x500707 = resultContainer),
        stopGame(),
        playSound(_0x22dea5(0x211)),
        toggleSocialShare(![]),
        (playerData[_0x22dea5(0x299)] = gameData[_0x22dea5(0x290)]),
        (resultDescTxt[_0x22dea5(0x1bc)] = textStrings[_0x22dea5(0x1ad)][
          "replace"
        ](_0x22dea5(0x1c0), gameData[_0x22dea5(0x2f3)])),
        saveGame(playerData[_0x22dea5(0x299)]);
      break;
  }
  _0x500707 != null &&
    ((_0x500707[_0x22dea5(0x2c1)] = !![]),
    (_0x500707[_0x22dea5(0x26e)] = 0x0),
    TweenMax["to"](_0x500707, 0.5, { alpha: 0x1, overwrite: !![] })),
    resizeCanvas();
}
function startGame() {
  var _0x5077f7 = a0_0x3dd953;
  (gameData[_0x5077f7(0x2e5)] = ![]),
    (playerData[_0x5077f7(0x299)] = 0x0),
    (statusContainer["alpha"] = 0x0),
    (gravityData[_0x5077f7(0x2dd)] = !![]),
    (gameData[_0x5077f7(0x233)] = []),
    playSound(_0x5077f7(0x287)),
    prepareStage();
}
function resizePuzzle() {
  (stageContainer["x"] = canvasW / 0x2),
    (stageContainer["y"] = canvasH / 0x2),
    (stageDisplayContainer["x"] = offset["x"] + 0x82),
    (stageDisplayContainer["y"] = offset["y"] + 0x32),
    (statusContainer["x"] = canvasW / 0x2),
    (statusContainer["y"] = canvasH / 0x2),
    (touchScreen["x"] = canvasW / 0x2),
    (touchScreen["y"] = canvasH / 0x2);
}
function stopGame() {
  var _0x288b92 = a0_0x3dd953;
  (gameData["paused"] = !![]),
    (gravityData["animate"] = ![]),
    TweenMax[_0x288b92(0x24e)](![], !![], ![]);
}
function saveGame(_0x5b0b8c) {
  var _0x825e5 = a0_0x3dd953;
  typeof toggleScoreboardSave == _0x825e5(0x2eb) &&
    (($["scoreData"][_0x825e5(0x299)] = _0x5b0b8c),
    typeof type != _0x825e5(0x2c4) && ($["scoreData"][_0x825e5(0x25d)] = type),
    toggleScoreboardSave(!![]));
}
function prepareStage() {
  var _0x2d311c = a0_0x3dd953;
  (gameData[_0x2d311c(0x28f)] = ![]),
    (gameData[_0x2d311c(0x1ab)] = []),
    wrenchContainer[_0x2d311c(0x2aa)](),
    nutContainer[_0x2d311c(0x2aa)](),
    nutBgContainer["removeAllChildren"]();
  for (
    var _0x6e7345 = 0x0;
    _0x6e7345 <
    levelSettings[gameData[_0x2d311c(0x2f3)]]["wrenches"][_0x2d311c(0x2a5)];
    _0x6e7345++
  ) {
    var _0xb60ba2 =
      levelSettings[gameData["levelIndex"]]["wrenches"][_0x6e7345];
    createWrench(
      _0xb60ba2["x"],
      _0xb60ba2["y"],
      _0xb60ba2[_0x2d311c(0x1d6)],
      _0xb60ba2[_0x2d311c(0x25d)],
      _0xb60ba2["design"],
      0x0,
      -0x1
    );
  }
  for (
    var _0x6e7345 = 0x0;
    _0x6e7345 <
    levelSettings[gameData[_0x2d311c(0x2f3)]][_0x2d311c(0x2b0)]["length"];
    _0x6e7345++
  ) {
    var _0xb60ba2 =
        levelSettings[gameData["levelIndex"]][_0x2d311c(0x2b0)][_0x6e7345],
      _0xcd133a = gameData[_0x2d311c(0x1ab)][_0xb60ba2[_0x2d311c(0x2d7)]],
      _0x4f6278 =
        gameData["wrenches"][_0xb60ba2[_0x2d311c(0x2d7)]]["hits"][
          gameData[_0x2d311c(0x1ab)][_0xb60ba2[_0x2d311c(0x2d7)]][
            _0x2d311c(0x28a)
          ][_0x2d311c(0x2a5)] - 0x1
        ],
      _0x40467a = _0xcd133a[_0x2d311c(0x231)](
        _0x4f6278["x"],
        _0x4f6278["y"],
        wrenchContainer
      );
    createWrench(
      _0x40467a["x"],
      _0x40467a["y"],
      _0xb60ba2[_0x2d311c(0x1d6)],
      _0xb60ba2[_0x2d311c(0x25d)],
      _0xb60ba2[_0x2d311c(0x2c0)],
      0x1,
      _0xb60ba2[_0x2d311c(0x2d7)]
    );
  }
  stageTxt[_0x2d311c(0x1bc)] = textStrings[_0x2d311c(0x1dd)]["replace"](
    _0x2d311c(0x1c0),
    gameData[_0x2d311c(0x2f3)] + 0x1
  );
}
function createWrench(
  _0x263dd6,
  _0x3c78c1,
  _0x341a0e,
  _0x12c139,
  _0x1d85f2,
  _0x15a958,
  _0x4b8865
) {
  var _0x1e108b = a0_0x3dd953,
    _0x18933b = !![];
  $["editor"]["enable"] &&
    edit[_0x1e108b(0x1d9)] != _0x1e108b(0x230) &&
    (_0x18933b = ![]);
  _0x18933b &&
    gameSettings[_0x1e108b(0x2d4)] &&
    (_0x1d85f2 = Math[_0x1e108b(0x229)](
      Math[_0x1e108b(0x21a)]() * wrenchSettings[_0x1e108b(0x2a5)]
    ));
  var _0x53931d = _0x1e108b(0x1ed) + _0x1d85f2,
    _0x3409b5 = wrenchSettings[_0x1d85f2][_0x1e108b(0x2c6)][_0x1e108b(0x254)],
    _0x1d70d7 = wrenchSettings[_0x1d85f2][_0x1e108b(0x2c6)][_0x1e108b(0x22a)],
    _0x15290a = wrenchSettings[_0x1d85f2]["short"][_0x1e108b(0x272)],
    _0x26094f = wrenchSettings[_0x1d85f2][_0x1e108b(0x2c6)][_0x1e108b(0x2e3)];
  if (_0x12c139 == 0x1)
    (_0x53931d = "wrenchMedium" + _0x1d85f2),
      (_0x3409b5 = wrenchSettings[_0x1d85f2]["medium"][_0x1e108b(0x254)]),
      (_0x1d70d7 =
        wrenchSettings[_0x1d85f2][_0x1e108b(0x212)][_0x1e108b(0x22a)]),
      (_0x15290a =
        wrenchSettings[_0x1d85f2][_0x1e108b(0x212)][_0x1e108b(0x272)]),
      (_0x26094f =
        wrenchSettings[_0x1d85f2][_0x1e108b(0x212)][_0x1e108b(0x2e3)]);
  else
    _0x12c139 == 0x2 &&
      ((_0x53931d = "wrenchLong" + _0x1d85f2),
      (_0x3409b5 =
        wrenchSettings[_0x1d85f2][_0x1e108b(0x26f)][_0x1e108b(0x254)]),
      (_0x1d70d7 =
        wrenchSettings[_0x1d85f2][_0x1e108b(0x26f)][_0x1e108b(0x22a)]),
      (_0x15290a = wrenchSettings[_0x1d85f2][_0x1e108b(0x26f)]["width"]),
      (_0x26094f = wrenchSettings[_0x1d85f2][_0x1e108b(0x26f)]["height"]));
  var _0x4c9154 = new createjs[_0x1e108b(0x1d4)](),
    _0x4281c4 = new createjs[_0x1e108b(0x2ce)](
      loader[_0x1e108b(0x2f1)](_0x53931d)
    );
  (_0x4281c4[_0x1e108b(0x254)] = _0x3409b5),
    (_0x4281c4[_0x1e108b(0x22a)] = _0x1d70d7),
    _0x4c9154[_0x1e108b(0x1e9)](_0x4281c4);
  var _0x2f7d15 = 0x3;
  if (_0x12c139 == 0x1) _0x2f7d15 = 0x4;
  else _0x12c139 == 0x2 && (_0x2f7d15 = 0x5);
  var _0x172e07 = new createjs[_0x1e108b(0x256)]();
  _0x172e07[_0x1e108b(0x243)]
    [_0x1e108b(0x2d6)]("red")
    ["drawRect"](0x0, 0x0, _0x15290a, _0x26094f),
    (_0x172e07[_0x1e108b(0x26e)] = 0x0),
    (_0x172e07["regX"] =
      _0x3409b5 -
      (_0x4281c4[_0x1e108b(0x2e2)]["naturalWidth"] - _0x15290a) / 0x2),
    (_0x172e07[_0x1e108b(0x22a)] =
      _0x1d70d7 -
      (_0x4281c4[_0x1e108b(0x2e2)]["naturalHeight"] - _0x26094f) / 0x2),
    _0x4c9154[_0x1e108b(0x1e9)](_0x172e07),
    (_0x4c9154[_0x1e108b(0x239)] = !![]),
    (_0x4c9154["x"] = _0x263dd6),
    (_0x4c9154["y"] = _0x3c78c1),
    (_0x4c9154[_0x1e108b(0x1d6)] = _0x4c9154[_0x1e108b(0x2ec)] = _0x341a0e),
    (_0x4c9154[_0x1e108b(0x1a2)] = _0x172e07),
    (_0x4c9154[_0x1e108b(0x28a)] = []),
    (_0x4c9154[_0x1e108b(0x22f)] = _0x15a958),
    (_0x4c9154[_0x1e108b(0x2d7)] = _0x4b8865),
    (_0x4c9154["wrenchIndex"] = gameData[_0x1e108b(0x1ab)][_0x1e108b(0x2a5)]);
  var _0x448a52 = new createjs[_0x1e108b(0x2ce)](
    loader[_0x1e108b(0x2f1)](_0x1e108b(0x20b))
  );
  centerReg(_0x448a52),
    (_0x448a52["x"] = _0x263dd6),
    (_0x448a52["y"] = _0x3c78c1);
  var _0x1a93ae = _0x1e108b(0x253);
  _0x15a958 == 0x1 && (_0x1a93ae = _0x1e108b(0x1ec));
  var _0x1df6fb = new createjs[_0x1e108b(0x2ce)](
    loader["getResult"](_0x1a93ae)
  );
  centerReg(_0x1df6fb),
    (_0x1df6fb["x"] = _0x263dd6),
    (_0x1df6fb["y"] = _0x3c78c1),
    (_0x1df6fb[_0x1e108b(0x1d6)] = _0x341a0e),
    (_0x4c9154["nut"] = _0x1df6fb),
    nutContainer[_0x1e108b(0x1e9)](_0x1df6fb),
    nutBgContainer[_0x1e108b(0x1e9)](_0x448a52);
  var _0x1333b9 = {
    x: 0x0,
    y: 0x0,
    space: (_0x15290a - _0x3409b5 * 0x2) / (_0x2f7d15 - 0x1),
  };
  _0x4c9154[_0x1e108b(0x203)] = _0x1333b9[_0x1e108b(0x203)];
  for (var _0x3505c7 = 0x0; _0x3505c7 < _0x2f7d15; _0x3505c7++) {
    var _0x5a34af = new createjs[_0x1e108b(0x256)]();
    _0x5a34af["graphics"]
      [_0x1e108b(0x2d6)]("#fff")
      [_0x1e108b(0x2a6)](0x0, 0x0, _0x26094f / 0x2),
      (_0x5a34af["x"] = _0x1333b9["x"]),
      (_0x5a34af["y"] = _0x1333b9["y"]),
      (_0x5a34af[_0x1e108b(0x26e)] = 0x0),
      (_0x1333b9["x"] += _0x1333b9[_0x1e108b(0x203)]),
      _0x4c9154[_0x1e108b(0x1e9)](_0x5a34af),
      _0x4c9154[_0x1e108b(0x28a)][_0x1e108b(0x2af)](_0x5a34af);
  }
  (_0x4c9154[_0x1e108b(0x2ae)] = _0x1e108b(0x26d)),
    _0x18933b &&
      _0x4c9154[_0x1e108b(0x2c9)](_0x1e108b(0x2ea), function (_0x4449de) {
        var _0x1fc111 = _0x1e108b;
        rotateWrench(_0x4449de[_0x1fc111(0x25f)]);
      }),
    wrenchContainer["addChild"](_0x4c9154),
    gameData[_0x1e108b(0x1ab)][_0x1e108b(0x2af)](_0x4c9154);
}
function rotateWrench(_0x578ff3) {
  var _0xbd09f6 = a0_0x3dd953;
  if (_0x578ff3[_0xbd09f6(0x1d6)] != _0x578ff3[_0xbd09f6(0x2ec)]) return;
  var _0x33e115 = !![];
  for (
    var _0xf3ce79 = 0x0;
    _0xf3ce79 < gameData[_0xbd09f6(0x1ab)][_0xbd09f6(0x2a5)];
    _0xf3ce79++
  ) {
    var _0x2040e5 = gameData["wrenches"][_0xf3ce79];
    _0x2040e5[_0xbd09f6(0x239)] &&
      _0x2040e5[_0xbd09f6(0x2d7)] == _0x578ff3[_0xbd09f6(0x1a5)] &&
      ((_0x33e115 = ![]),
      (_0xf3ce79 = gameData[_0xbd09f6(0x1ab)][_0xbd09f6(0x2a5)]));
  }
  playSound(_0xbd09f6(0x23f));
  if (_0x33e115) {
    var _0x4c948 = _0x578ff3[_0xbd09f6(0x2ec)] - 0x168;
    _0x578ff3[_0xbd09f6(0x269)] = TweenMax["to"](
      _0x578ff3,
      gameSettings[_0xbd09f6(0x2f5)],
      {
        rotation: _0x4c948,
        ease: Sine["easeOut"],
        overwrite: !![],
        onUpdate: function () {
          var _0x5a3b05 = _0xbd09f6;
          _0x578ff3[_0x5a3b05(0x260)][_0x5a3b05(0x1d6)] =
            _0x578ff3[_0x5a3b05(0x1d6)];
          for (
            var _0x36d230 = 0x0;
            _0x36d230 < _0x578ff3[_0x5a3b05(0x28a)][_0x5a3b05(0x2a5)];
            _0x36d230++
          ) {
            var _0x22d618 = _0x578ff3[_0x5a3b05(0x28a)][_0x36d230];
            for (
              var _0xceb865 = 0x0;
              _0xceb865 < gameData[_0x5a3b05(0x1ab)][_0x5a3b05(0x2a5)];
              _0xceb865++
            ) {
              if (
                _0x578ff3 != gameData[_0x5a3b05(0x1ab)][_0xceb865] &&
                gameData["wrenches"][_0xceb865][_0x5a3b05(0x239)] &&
                _0x578ff3[_0x5a3b05(0x22f)] ==
                  gameData["wrenches"][_0xceb865]["layer"]
              ) {
                var _0x45dc20 = gameData[_0x5a3b05(0x1ab)][_0xceb865],
                  _0x532fa7 = _0x578ff3[_0x5a3b05(0x231)](
                    _0x22d618["x"],
                    _0x22d618["y"],
                    _0x45dc20
                  );
                _0x45dc20["shape"][_0x5a3b05(0x2d1)](
                  _0x532fa7["x"],
                  _0x532fa7["y"]
                ) &&
                  (playSound(_0x5a3b05(0x1ef)),
                  _0x578ff3[_0x5a3b05(0x269)][_0x5a3b05(0x240)]());
              }
            }
          }
        },
        onComplete: function () {
          var _0x35ab35 = _0xbd09f6;
          playSound(_0x35ab35(0x1f7)),
            (_0x578ff3[_0x35ab35(0x239)] = ![]),
            animateObjectFalling(_0x578ff3),
            animateObjectFalling(_0x578ff3[_0x35ab35(0x260)]),
            checkGameOver();
        },
      }
    );
  } else {
    var _0x4c948 = _0x578ff3[_0xbd09f6(0x2ec)] - 0x3;
    _0x578ff3[_0xbd09f6(0x269)] = TweenMax["to"](
      _0x578ff3,
      gameSettings["rotateSpeed"] / 0x8,
      {
        rotation: _0x4c948,
        ease: Sine["easeOut"],
        overwrite: !![],
        onComplete: function () {
          var _0x1241b1 = _0xbd09f6;
          playSound(_0x1241b1(0x1ef)),
            _0x578ff3[_0x1241b1(0x269)][_0x1241b1(0x240)]();
        },
      }
    );
  }
}
function checkGameOver() {
  var _0x43e61b = a0_0x3dd953,
    _0x35d2fc = 0x0;
  for (
    var _0x2b1a1b = 0x0;
    _0x2b1a1b < gameData[_0x43e61b(0x1ab)][_0x43e61b(0x2a5)];
    _0x2b1a1b++
  ) {
    var _0x1fea6a = gameData[_0x43e61b(0x1ab)][_0x2b1a1b];
    !_0x1fea6a["active"] && _0x35d2fc++;
  }
  _0x35d2fc == gameData[_0x43e61b(0x1ab)]["length"] && endGame();
}
function endGame() {
  var _0x2220e2 = a0_0x3dd953;
  if (gameData[_0x2220e2(0x28f)]) return;
  (gameData[_0x2220e2(0x28f)] = !![]),
    (statusTxt[_0x2220e2(0x1bc)] = textStrings[_0x2220e2(0x214)][
      _0x2220e2(0x1b6)
    ]("[NUMBER]", gameData[_0x2220e2(0x2f3)] + 0x1)),
    playSound("soundComplete");
  if (!$[_0x2220e2(0x25a)][_0x2220e2(0x276)]) {
    (gameData["revealLevel"] = ![]), gameData[_0x2220e2(0x2f3)]++;
    gameData["levelIndex"] >= gameData["levelCompleted"] &&
      gameData[_0x2220e2(0x2f3)] < levelSettings[_0x2220e2(0x2a5)] &&
      (gameData[_0x2220e2(0x1ff)] = !![]);
    var _0x211beb = gameData[_0x2220e2(0x2f3)] + 0x1;
    (_0x211beb =
      _0x211beb > levelSettings[_0x2220e2(0x2a5)]
        ? levelSettings[_0x2220e2(0x2a5)]
        : _0x211beb),
      findSelectPage(_0x211beb),
      saveLevelData(),
      (statusContainer[_0x2220e2(0x26e)] = 0x0),
      TweenMax["to"](statusContainer, 0.5, { alpha: 0x1, overwrite: !![] }),
      TweenMax["to"](gameContainer, 0x2, {
        overwrite: !![],
        onComplete: function () {
          var _0x509d6b = _0x2220e2;
          goPage(_0x509d6b(0x1ac));
        },
      });
  }
}
function animateObjectFalling(_0x3bca50) {
  var _0x2edc61 = a0_0x3dd953;
  (_0x3bca50[_0x2edc61(0x2ac)] = randomIntFromInterval(-0x1, 0x1)),
    (_0x3bca50[_0x2edc61(0x24f)] = randomIntFromInterval(0.5, 0x1)),
    gameData["fallingObjects"][_0x2edc61(0x2af)](_0x3bca50);
}
function loopFallingObjects() {
  var _0x5344ef = a0_0x3dd953;
  if (!gravityData[_0x5344ef(0x2dd)]) return;
  for (
    var _0x459c08 = 0x0;
    _0x459c08 < gameData[_0x5344ef(0x233)]["length"];
    _0x459c08++
  ) {
    var _0x5b42a0 = gameData[_0x5344ef(0x233)][_0x459c08];
    (_0x5b42a0["y"] = _0x5b42a0["y"] + _0x5b42a0[_0x5344ef(0x24f)]),
      (_0x5b42a0["x"] = _0x5b42a0["x"] + _0x5b42a0[_0x5344ef(0x2ac)]),
      (_0x5b42a0["rotation"] =
        _0x5b42a0[_0x5344ef(0x1d6)] + _0x5b42a0[_0x5344ef(0x2ac)]),
      (_0x5b42a0[_0x5344ef(0x24f)] =
        _0x5b42a0[_0x5344ef(0x24f)] * gravityData[_0x5344ef(0x270)] +
        gravityData[_0x5344ef(0x1eb)]),
      (_0x5b42a0[_0x5344ef(0x2ac)] =
        _0x5b42a0[_0x5344ef(0x2ac)] * gravityData[_0x5344ef(0x270)]),
      _0x5b42a0["y"] > canvasH + gravityData[_0x5344ef(0x218)] * 0x2 &&
        gameData["fallingObjects"][_0x5344ef(0x1bf)](_0x459c08, 0x1);
  }
}
function updateGame(_0x56c263) {
  var _0x5043ea = a0_0x3dd953;
  !gameData[_0x5043ea(0x2e5)] && loopFallingObjects();
}
function millisecondsToTimeGame(_0x400230) {
  var _0x147430 = a0_0x3dd953,
    _0x3f4b2a = _0x400230 % 0x3e8,
    _0x143435 = Math[_0x147430(0x229)]((_0x400230 / 0x3e8) % 0x3c),
    _0x450bce = Math[_0x147430(0x229)]((_0x400230 / (0x3c * 0x3e8)) % 0x3c);
  return (
    _0x143435 < 0xa && (_0x143435 = "0" + _0x143435),
    _0x450bce < 0xa && (_0x450bce = "0" + _0x450bce),
    _0x450bce + ":" + _0x143435
  );
}
function toggleOptions(_0x30f4ee) {
  var _0x199320 = a0_0x3dd953;
  optionsContainer[_0x199320(0x2c1)]
    ? (optionsContainer["visible"] = ![])
    : (optionsContainer[_0x199320(0x2c1)] = !![]),
    _0x30f4ee != undefined && (optionsContainer[_0x199320(0x2c1)] = _0x30f4ee);
}
function toggleSoundMute(_0x2f3473) {
  var _0x655756 = a0_0x3dd953;
  (buttonSoundOff[_0x655756(0x2c1)] = buttonSoundOn[_0x655756(0x2c1)] = ![]),
    toggleSoundInMute(_0x2f3473),
    _0x2f3473
      ? (buttonSoundOn["visible"] = !![])
      : (buttonSoundOff[_0x655756(0x2c1)] = !![]);
}
function toggleMusicMute(_0x25d135) {
  var _0x125a77 = a0_0x3dd953;
  (buttonMusicOff[_0x125a77(0x2c1)] = buttonMusicOn[_0x125a77(0x2c1)] = ![]),
    toggleMusicInMute(_0x25d135),
    _0x25d135
      ? (buttonMusicOn[_0x125a77(0x2c1)] = !![])
      : (buttonMusicOff[_0x125a77(0x2c1)] = !![]);
}
function toggleFullScreen() {
  var _0x4e0c2c = a0_0x3dd953;
  if (
    !document[_0x4e0c2c(0x224)] &&
    !document["mozFullScreenElement"] &&
    !document[_0x4e0c2c(0x2a9)] &&
    !document[_0x4e0c2c(0x280)]
  ) {
    if (document[_0x4e0c2c(0x1b7)][_0x4e0c2c(0x23a)])
      document[_0x4e0c2c(0x1b7)][_0x4e0c2c(0x23a)]();
    else {
      if (document[_0x4e0c2c(0x1b7)][_0x4e0c2c(0x1fa)])
        document[_0x4e0c2c(0x1b7)][_0x4e0c2c(0x1fa)]();
      else {
        if (document[_0x4e0c2c(0x1b7)][_0x4e0c2c(0x213)])
          document[_0x4e0c2c(0x1b7)]["mozRequestFullScreen"]();
        else
          document["documentElement"][_0x4e0c2c(0x2bb)] &&
            document["documentElement"]["webkitRequestFullscreen"](
              Element["ALLOW_KEYBOARD_INPUT"]
            );
      }
    }
  } else {
    if (document[_0x4e0c2c(0x202)]) document[_0x4e0c2c(0x202)]();
    else {
      if (document["msExitFullscreen"]) document[_0x4e0c2c(0x1ea)]();
      else {
        if (document[_0x4e0c2c(0x1ae)]) document[_0x4e0c2c(0x1ae)]();
        else document[_0x4e0c2c(0x1cd)] && document[_0x4e0c2c(0x1cd)]();
      }
    }
  }
}
function shareLinks(_0x46f0b9, _0xef6996) {
  var _0x538ece = a0_0x3dd953;
  shareSettings[_0x538ece(0x223)] &&
    gtag(_0x538ece(0x234), _0x538ece(0x2ea), {
      event_category: _0x538ece(0x22e),
      event_label: _0x46f0b9,
    });
  var _0x300a94 = location[_0x538ece(0x2e8)];
  _0x300a94 = encodeURIComponent(
    _0x300a94[_0x538ece(0x2ca)](0x0, _0x300a94["lastIndexOf"]("/") + 0x1)
  );
  var _0x487639 = shareSettings[_0x538ece(0x289)][_0x538ece(0x1b6)](
      _0x538ece(0x2d3),
      _0xef6996
    ),
    _0x48e4d4 = shareSettings[_0x538ece(0x209)][_0x538ece(0x1b6)](
      _0x538ece(0x2d3),
      _0xef6996
    ),
    _0x468e35 = "";
  if (_0x46f0b9 == _0x538ece(0x1c4))
    shareSettings[_0x538ece(0x2de)]
      ? ((_0x300a94 = decodeURIComponent(_0x300a94)),
        (_0x468e35 =
          _0x538ece(0x2ad) +
          encodeURIComponent(
            _0x300a94 +
              _0x538ece(0x2f0) +
              _0x487639 +
              _0x538ece(0x28c) +
              _0x300a94 +
              _0x538ece(0x261) +
              _0x300a94 +
              _0x538ece(0x237)
          )))
      : (_0x468e35 =
          "https://www.facebook.com/sharer/sharer.php?u=" + _0x300a94);
  else {
    if (_0x46f0b9 == _0x538ece(0x23b))
      _0x468e35 = _0x538ece(0x1b5) + _0x48e4d4 + "&url=" + _0x300a94;
    else {
      if (_0x46f0b9 == "whatsapp")
        _0x468e35 = _0x538ece(0x201) + _0x48e4d4 + _0x538ece(0x242) + _0x300a94;
      else {
        if (_0x46f0b9 == _0x538ece(0x22b))
          _0x468e35 =
            _0x538ece(0x1d2) + _0x300a94 + _0x538ece(0x1dc) + _0x48e4d4;
        else {
          if (_0x46f0b9 == "reddit")
            _0x468e35 =
              "https://www.reddit.com/submit?url=" +
              _0x300a94 +
              "&title=" +
              _0x48e4d4;
          else
            _0x46f0b9 == _0x538ece(0x1d0) &&
              (_0x468e35 =
                "https://www.linkedin.com/sharing/share-offsite/?url=" +
                _0x300a94);
        }
      }
    }
  }
  window[_0x538ece(0x26c)](_0x468e35);
}
var stageWidth,
  stageHeight = 0x0,
  isLoaded = ![];
$(function () {
  var _0x44eb67 = a0_0x3dd953,
    _0xfa08c3 = function () {
      var _0x5e8056 = a0_0x29e9;
      try {
        createjs[_0x5e8056(0x2ef)][_0x5e8056(0x283)][_0x5e8056(0x25c)] ===
          "suspended" &&
          (createjs[_0x5e8056(0x2ef)][_0x5e8056(0x283)][_0x5e8056(0x1bd)](),
          window["removeEventListener"]("click", _0xfa08c3));
      } catch (_0xaf9b76) {
        console[_0x5e8056(0x279)](_0x5e8056(0x2e9)),
          console["error"](_0xaf9b76);
      }
    };
  window[_0x44eb67(0x2c9)](_0x44eb67(0x2ea), _0xfa08c3),
    window[_0x44eb67(0x1aa)][_0x44eb67(0x1f2)][_0x44eb67(0x23c)](0x0, 0x4) ===
      "file" && alert(_0x44eb67(0x2b9)),
    $(window)[_0x44eb67(0x21c)](function () {
      resizeLoaderFunc();
    }),
    resizeLoaderFunc(),
    checkBrowser();
});
function resizeLoaderFunc() {
  var _0x1d3e80 = a0_0x3dd953;
  (stageWidth = $(window)["width"]()),
    (stageHeight = $(window)["height"]()),
    $(_0x1d3e80(0x2d2))[_0x1d3e80(0x282)](
      _0x1d3e80(0x252),
      checkContentWidth($(_0x1d3e80(0x2d2)))
    ),
    $("#mainLoader")[_0x1d3e80(0x282)](
      "top",
      checkContentHeight($(_0x1d3e80(0x2d2)))
    ),
    $(_0x1d3e80(0x1e3))[_0x1d3e80(0x282)](
      _0x1d3e80(0x252),
      checkContentWidth($(_0x1d3e80(0x2d2)))
    ),
    $(_0x1d3e80(0x1e3))[_0x1d3e80(0x282)](
      _0x1d3e80(0x1e4),
      checkContentHeight($(_0x1d3e80(0x2d2)))
    );
}
var browserSupport = ![],
  isMobile,
  isTablet,
  isDesktop;
function checkBrowser() {
  var _0x2d72d6 = a0_0x3dd953;
  if (typeof MobileDetect === _0x2d72d6(0x2eb)) {
    var _0x535bb2 = new MobileDetect(
      window[_0x2d72d6(0x2b6)][_0x2d72d6(0x1cb)]
    );
    (isMobile = _0x535bb2[_0x2d72d6(0x1bb)]()),
      (isTablet = _0x535bb2[_0x2d72d6(0x1e5)]()),
      isMobile == null && isTablet == null && (isDesktop = !![]);
  }
  var _0x7cf7b7 = document["createElement"](_0x2d72d6(0x225));
  _0x7cf7b7[_0x2d72d6(0x258)] && (browserSupport = !![]),
    browserSupport
      ? !isLoaded && ((isLoaded = !![]), initPreload())
      : $(_0x2d72d6(0x1e3))["show"]();
}
const levelSettings = [
  {
    wrenches: [
      { x: 0x15, y: -0x2c, rotation: 0x6e, type: 0x0, design: 0x0 },
      { x: -0x5c, y: 0x34, rotation: 0x14, type: 0x2, design: 0x0 },
    ],
    layers: [],
  },
  {
    wrenches: [
      { x: 0x9, y: 0x97, rotation: 0xf0, type: 0x1, design: 0x0 },
      { x: -0xf, y: -0x92, rotation: 0x3c, type: 0x1, design: 0x0 },
      { x: -0xc, y: 0x1, rotation: 0x0, type: 0x0, design: 0x0 },
    ],
    layers: [],
  },
  {
    wrenches: [
      { x: -0x21, y: -0x54, rotation: 0x1b, type: 0x0, design: 0x0 },
      { x: -0x34, y: 0x26, rotation: 0x0, type: 0x0, design: 0x0 },
      { x: 0x4e, y: -0x19, rotation: 0x5a, type: 0x0, design: 0x0 },
    ],
    layers: [],
  },
  {
    wrenches: [
      { x: -0x4b, y: 0x36, rotation: 0x0, type: 0x2, design: 0x0 },
      { x: 0x49, y: -0x42, rotation: 0x8c, type: 0x1, design: 0x0 },
      { x: -0x33, y: -0x67, rotation: 0x3c, type: 0x0, design: 0x0 },
    ],
    layers: [],
  },
  {
    wrenches: [
      { x: 0x5f, y: 0x9, rotation: 0xbe, type: 0x0, design: 0x0 },
      { x: 0x23, y: 0x78, rotation: 0x118, type: 0x0, design: 0x0 },
      { x: -0x27, y: -0x90, rotation: 0x1e, type: 0x1, design: 0x0 },
      { x: -0x6c, y: 0x17, rotation: 0x122, type: 0x1, design: 0x0 },
    ],
    layers: [],
  },
  {
    wrenches: [
      { x: -0x4c, y: -0x88, rotation: 0x146, type: 0x0, design: 0x0 },
      { x: 0x51, y: -0x3b, rotation: 0x5a, type: 0x0, design: 0x0 },
      { x: -0x27, y: -0x2, rotation: 0x38, type: 0x1, design: 0x0 },
      { x: -0x3e, y: 0x9e, rotation: 0x0, type: 0x2, design: 0x0 },
    ],
    layers: [],
  },
  {
    wrenches: [
      { x: -0x5d, y: 0x5f, rotation: 0x13a, type: 0x0, design: 0x0 },
      { x: -0x6d, y: -0x21, rotation: 0x14e, type: 0x1, design: 0x0 },
      { x: -0x1f, y: -0xc2, rotation: 0x2a, type: 0x2, design: 0x0 },
      { x: 0x6a, y: 0x1d, rotation: 0x142, type: 0x2, design: 0x0 },
      { x: -0x11, y: 0xd7, rotation: 0x105, type: 0x1, design: 0x0 },
    ],
    layers: [],
  },
  {
    wrenches: [
      { x: 0x78, y: -0x9e, rotation: 0xa0, type: 0x0, design: 0x0 },
      { x: -0x15, y: -0xd5, rotation: 0x47, type: 0x2, design: 0x0 },
      { x: 0x34, y: 0xe, rotation: 0xcc, type: 0x0, design: 0x0 },
      { x: -0x5b, y: 0xe, rotation: 0x3a, type: 0x1, design: 0x0 },
      { x: 0x15, y: 0x68, rotation: 0x55, type: 0x1, design: 0x0 },
      { x: -0xa3, y: 0x8e, rotation: 0x2b, type: 0x2, design: 0x0 },
    ],
    layers: [],
  },
  {
    wrenches: [
      { x: 0x31, y: -0x94, rotation: 0x9a, type: 0x0, design: 0x0 },
      { x: -0x54, y: -0x81, rotation: 0x39, type: 0x0, design: 0x0 },
      { x: 0x98, y: -0x11, rotation: 0xea, type: 0x0, design: 0x0 },
      { x: 0x4b, y: 0x54, rotation: 0x133, type: 0x0, design: 0x0 },
      { x: 0x12, y: 0xb4, rotation: 0x112, type: 0x0, design: 0x0 },
      { x: -0x35, y: -0x4, rotation: 0x7a, type: 0x0, design: 0x0 },
    ],
    layers: [],
  },
  {
    wrenches: [
      { x: -0x4b, y: -0x1, rotation: 0x0, type: 0x2, design: 0x0 },
      { x: 0x5, y: 0xc4, rotation: 0x10d, type: 0x2, design: 0x0 },
      { x: -0x1, y: -0xbf, rotation: 0x59, type: 0x2, design: 0x0 },
      { x: -0x83, y: 0x7f, rotation: 0x0, type: 0x0, design: 0x0 },
      { x: -0x74, y: -0x97, rotation: 0x59, type: 0x0, design: 0x0 },
      { x: 0x76, y: -0x61, rotation: 0x142, type: 0x0, design: 0x0 },
    ],
    layers: [
      { rotation: 0xa, type: 0x0, design: 0x0, group: 0x4 },
      { rotation: 0x1e, type: 0x0, design: 0x0, group: 0x5 },
    ],
  },
  {
    wrenches: [
      { x: -0x6, y: 0x10, rotation: 0x12, type: 0x0, design: 0x0 },
      { x: -0x16, y: -0x80, rotation: 0x51, type: 0x1, design: 0x0 },
      { x: -0x98, y: -0x14, rotation: 0x150, type: 0x1, design: 0x0 },
      { x: 0x7f, y: -0x5d, rotation: 0x5c, type: 0x2, design: 0x0 },
      { x: -0x64, y: 0x95, rotation: 0x15a, type: 0x2, design: 0x0 },
    ],
    layers: [],
  },
  {
    wrenches: [
      { x: -0x7d, y: 0x34, rotation: 0x140, type: 0x0, design: 0x0 },
      { x: 0x53, y: -0x2f, rotation: 0x60, type: 0x0, design: 0x0 },
      { x: 0xb1, y: 0x23, rotation: 0x61, type: 0x0, design: 0x0 },
      { x: -0x30, y: 0xb2, rotation: 0xda, type: 0x1, design: 0x0 },
      { x: 0xa8, y: 0xaa, rotation: 0xcd, type: 0x2, design: 0x0 },
      { x: -0x70, y: -0x8d, rotation: 0x32, type: 0x2, design: 0x0 },
      { x: 0x3b, y: -0xb8, rotation: 0x7d, type: 0x1, design: 0x0 },
    ],
    layers: [],
  },
  {
    wrenches: [
      { x: 0x3, y: -0xc8, rotation: 0x5b, type: 0x2, design: 0x0 },
      { x: -0x4c, y: -0x4, rotation: 0x0, type: 0x2, design: 0x0 },
      { x: 0x2, y: 0xcd, rotation: 0x10f, type: 0x2, design: 0x0 },
      { x: 0x7a, y: -0x7a, rotation: 0x13e, type: 0x0, design: 0x0 },
      { x: -0x67, y: -0x96, rotation: 0x5a, type: 0x0, design: 0x0 },
      { x: -0x84, y: 0x92, rotation: 0x0, type: 0x0, design: 0x0 },
    ],
    layers: [],
  },
  {
    wrenches: [
      { x: -0x67, y: -0x9a, rotation: 0x5a, type: 0x0, design: 0x0 },
      { x: 0x12, y: -0xd0, rotation: 0x5a, type: 0x2, design: 0x0 },
      { x: -0x56, y: -0x1, rotation: 0x0, type: 0x2, design: 0x0 },
      { x: -0x9, y: 0x6b, rotation: 0x14a, type: 0x0, design: 0x0 },
      { x: -0x46, y: 0xd0, rotation: 0x9a, type: 0x0, design: 0x0 },
      { x: 0x4c, y: 0xe8, rotation: 0x11f, type: 0x2, design: 0x0 },
    ],
    layers: [],
  },
  {
    wrenches: [
      { x: -0x36, y: 0x2, rotation: 0x0, type: 0x0, design: 0x0 },
      { x: -0x2c, y: -0x9d, rotation: 0x23, type: 0x0, design: 0x0 },
      { x: 0x55, y: -0x4a, rotation: 0x5b, type: 0x0, design: 0x0 },
      { x: -0x36, y: 0x6b, rotation: 0x5b, type: 0x2, design: 0x0 },
    ],
    layers: [
      { rotation: -0x14, type: 0x0, design: 0x0, group: 0x1 },
      { rotation: 0x28, type: 0x0, design: 0x0, group: 0x2 },
    ],
  },
  {
    wrenches: [
      { x: -0x5f, y: -0xc0, rotation: 0x46, type: 0x0, design: 0x0 },
      { x: 0x90, y: -0x65, rotation: 0x138, type: 0x0, design: 0x0 },
      { x: 0x8, y: -0x37, rotation: 0x7a, type: 0x1, design: 0x0 },
      { x: -0x84, y: 0x5, rotation: 0xfe, type: 0x1, design: 0x0 },
      { x: -0x78, y: 0x7f, rotation: 0xe1, type: 0x1, design: 0x0 },
      { x: 0x54, y: 0x35, rotation: 0x3e, type: 0x0, design: 0x0 },
      { x: -0x27, y: 0xf5, rotation: 0x123, type: 0x2, design: 0x0 },
    ],
    layers: [],
  },
  {
    wrenches: [
      { x: 0x1e, y: -0x4e, rotation: 0xb3, type: 0x0, design: 0x0 },
      { x: 0x5a, y: -0xb3, rotation: 0xb4, type: 0x1, design: 0x0 },
      { x: -0x58, y: -0xb5, rotation: 0x5a, type: 0x2, design: 0x0 },
      { x: -0x56, y: 0x1a, rotation: 0x0, type: 0x2, design: 0x0 },
      { x: 0x38, y: 0xbc, rotation: 0x123, type: 0x2, design: 0x0 },
    ],
    layers: [],
  },
  {
    wrenches: [
      { x: -0xe, y: -0xc2, rotation: 0x142, type: 0x0, design: 0x0 },
      { x: -0x83, y: -0x21, rotation: 0x126, type: 0x0, design: 0x0 },
      { x: -0xe, y: -0x66, rotation: 0x16, type: 0x2, design: 0x0 },
      { x: -0x26, y: 0x74, rotation: 0x12c, type: 0x2, design: 0x0 },
      { x: -0xa7, y: 0xed, rotation: 0x0, type: 0x2, design: 0x0 },
      { x: 0x57, y: 0xb0, rotation: 0x2f, type: 0x1, design: 0x0 },
    ],
    layers: [],
  },
  {
    wrenches: [
      { x: 0x1e, y: -0xb5, rotation: 0x0, type: 0x0, design: 0x0 },
      { x: 0x1f, y: -0x4f, rotation: 0x59, type: 0x0, design: 0x0 },
      { x: -0x55, y: -0x68, rotation: 0x20, type: 0x0, design: 0x0 },
      { x: 0x21, y: 0x68, rotation: 0x14e, type: 0x0, design: 0x0 },
      { x: -0x54, y: -0x7, rotation: 0x2d, type: 0x0, design: 0x0 },
      { x: -0x49, y: 0x6b, rotation: 0x5a, type: 0x2, design: 0x0 },
    ],
    layers: [],
  },
  {
    wrenches: [
      { x: -0x38, y: -0xa2, rotation: 0x5a, type: 0x0, design: 0x0 },
      { x: 0x40, y: -0xcc, rotation: 0x5a, type: 0x2, design: 0x0 },
      { x: -0x33, y: 0x4, rotation: 0x0, type: 0x2, design: 0x0 },
      { x: 0x25, y: 0x74, rotation: 0x138, type: 0x0, design: 0x0 },
      { x: 0x63, y: 0xe9, rotation: 0x124, type: 0x2, design: 0x0 },
      { x: -0x2b, y: 0xd0, rotation: 0x8c, type: 0x0, design: 0x0 },
    ],
    layers: [
      { rotation: 0x28, type: 0x0, design: 0x0, group: 0x0 },
      { rotation: 0x14, type: 0x0, design: 0x0, group: 0x3 },
    ],
  },
  {
    wrenches: [
      { x: -0x65, y: -0x62, rotation: 0x91, type: 0x0, design: 0x0 },
      { x: 0x55, y: -0x97, rotation: 0x7a, type: 0x2, design: 0x0 },
      { x: -0x63, y: 0x38, rotation: 0x22, type: 0x1, design: 0x0 },
      { x: 0x95, y: -0xd, rotation: 0x8a, type: 0x1, design: 0x0 },
      { x: 0x4c, y: 0x9a, rotation: 0xf, type: 0x1, design: 0x0 },
    ],
    layers: [],
  },
  {
    wrenches: [
      { x: 0x18, y: -0xbc, rotation: 0x75, type: 0x0, design: 0x0 },
      { x: -0x5b, y: 0xb6, rotation: 0x1b, type: 0x0, design: 0x0 },
      { x: -0x40, y: -0x57, rotation: 0x9c, type: 0x0, design: 0x0 },
      { x: 0x56, y: -0x4d, rotation: 0x1a, type: 0x1, design: 0x0 },
      { x: -0x2, y: 0x6, rotation: 0x5b, type: 0x2, design: 0x0 },
    ],
    layers: [],
  },
  {
    wrenches: [
      { x: 0x7, y: -0x9b, rotation: 0x5a, type: 0x0, design: 0x0 },
      { x: -0x5e, y: -0x49, rotation: 0x145, type: 0x0, design: 0x0 },
      { x: 0x98, y: -0x95, rotation: 0x5a, type: 0x2, design: 0x0 },
      { x: 0x32, y: 0x2, rotation: 0x5a, type: 0x0, design: 0x0 },
      { x: -0x35, y: 0x46, rotation: 0x2d, type: 0x1, design: 0x0 },
      { x: -0x5d, y: 0xd9, rotation: 0x0, type: 0x2, design: 0x0 },
    ],
    layers: [],
  },
  {
    wrenches: [
      { x: -0x10, y: -0xaa, rotation: 0x147, type: 0x0, design: 0x0 },
      { x: -0x54, y: -0x1b, rotation: 0x70, type: 0x0, design: 0x0 },
      { x: 0xa6, y: 0xb7, rotation: 0x36, type: 0x1, design: 0x0 },
      { x: 0x8, y: -0x44, rotation: 0x1a, type: 0x2, design: 0x0 },
      { x: 0x7, y: 0x98, rotation: 0x125, type: 0x2, design: 0x0 },
      { x: -0x86, y: 0xfb, rotation: 0x0, type: 0x2, design: 0x0 },
    ],
    layers: [
      { rotation: -0x32, type: 0x0, design: 0x0, group: 0x5 },
      { rotation: 0x0, type: 0x0, design: 0x0, group: 0x1 },
      { rotation: 0x3c, type: 0x0, design: 0x0, group: 0x4 },
    ],
  },
  {
    wrenches: [
      { x: -0x14, y: -0x77, rotation: 0x0, type: 0x0, design: 0x0 },
      { x: 0x73, y: -0x4f, rotation: 0x93, type: 0x0, design: 0x0 },
      { x: -0x35, y: 0x32, rotation: 0x118, type: 0x1, design: 0x0 },
      { x: 0xc5, y: 0x77, rotation: 0xd4, type: 0x2, design: 0x0 },
    ],
    layers: [],
  },
  {
    wrenches: [
      { x: 0xe, y: -0x7e, rotation: 0xa4, type: 0x0, design: 0x0 },
      { x: 0x86, y: -0x42, rotation: 0xbf, type: 0x0, design: 0x0 },
      { x: -0x5b, y: 0x2, rotation: 0x3b, type: 0x0, design: 0x0 },
      { x: -0x53, y: -0xa9, rotation: 0xe3, type: 0x0, design: 0x0 },
      { x: -0x4e, y: 0xae, rotation: 0xf1, type: 0x0, design: 0x0 },
      { x: 0x82, y: 0xd5, rotation: 0xc6, type: 0x0, design: 0x0 },
      { x: -0x6, y: 0x58, rotation: 0x9, type: 0x1, design: 0x0 },
      { x: 0xae, y: 0x31, rotation: 0x12f, type: 0x1, design: 0x0 },
    ],
    layers: [],
  },
  {
    wrenches: [
      { x: 0x24, y: -0xad, rotation: 0x168, type: 0x0, design: 0x0 },
      { x: -0x35, y: -0x5f, rotation: 0x18, type: 0x0, design: 0x0 },
      { x: 0x47, y: -0x46, rotation: 0x59, type: 0x0, design: 0x0 },
      { x: 0x4e, y: 0x6b, rotation: 0x14e, type: 0x0, design: 0x0 },
      { x: -0x3a, y: 0x1b, rotation: 0x27, type: 0x0, design: 0x0 },
      { x: -0x36, y: 0x83, rotation: 0x5a, type: 0x2, design: 0x0 },
    ],
    layers: [
      { rotation: 0x28, type: 0x0, design: 0x0, group: 0x0 },
      { rotation: -0x1e, type: 0x0, design: 0x0, group: 0x1 },
      { rotation: 0x50, type: 0x0, design: 0x0, group: 0x4 },
    ],
  },
  {
    wrenches: [
      { x: -0x92, y: -0x62, rotation: 0x13e, type: 0x0, design: 0x0 },
      { x: 0x7, y: -0xa1, rotation: 0x22, type: 0x0, design: 0x0 },
      { x: 0x90, y: -0x6f, rotation: 0x78, type: 0x0, design: 0x0 },
      { x: -0x76, y: 0x7f, rotation: 0x13b, type: 0x0, design: 0x0 },
      { x: 0xbd, y: 0x6b, rotation: 0xa0, type: 0x0, design: 0x0 },
      { x: 0x18, y: 0xc0, rotation: 0x10e, type: 0x1, design: 0x0 },
      { x: -0x17, y: -0x1, rotation: 0xb3, type: 0x2, design: 0x0 },
    ],
    layers: [],
  },
  {
    wrenches: [
      { x: -0x2a, y: -0x7d, rotation: 0x144, type: 0x0, design: 0x0 },
      { x: 0x55, y: 0x6c, rotation: 0x5a, type: 0x0, design: 0x0 },
      { x: -0x4e, y: 0x9c, rotation: 0x10f, type: 0x2, design: 0x0 },
      { x: -0x4e, y: -0x26, rotation: 0x0, type: 0x2, design: 0x0 },
      { x: 0x4e, y: -0xef, rotation: 0x5a, type: 0x2, design: 0x0 },
      { x: 0x97, y: 0x2b, rotation: 0x0, type: 0x1, design: 0x0 },
    ],
    layers: [],
  },
  {
    wrenches: [
      { x: -0x79, y: -0x7e, rotation: 0x142, type: 0x0, design: 0x0 },
      { x: -0x4, y: -0xd7, rotation: 0x5a, type: 0x0, design: 0x0 },
      { x: 0x92, y: -0xc5, rotation: 0x5a, type: 0x2, design: 0x0 },
      { x: 0x23, y: -0x18, rotation: 0x59, type: 0x0, design: 0x0 },
      { x: -0x47, y: 0x34, rotation: 0x27, type: 0x0, design: 0x0 },
      { x: -0x5f, y: 0xbe, rotation: 0x0, type: 0x2, design: 0x0 },
    ],
    layers: [
      { rotation: 0x32, type: 0x0, design: 0x0, group: 0x1 },
      { rotation: -0x1e, type: 0x0, design: 0x0, group: 0x2 },
      { rotation: 0x5a, type: 0x2, design: 0x0, group: 0x4 },
    ],
  },
  {
    wrenches: [
      { x: -0x81, y: -0x56, rotation: 0x119, type: 0x0, design: 0x0 },
      { x: -0x91, y: 0xf, rotation: 0xdc, type: 0x0, design: 0x0 },
      { x: -0x7e, y: 0x6c, rotation: 0x12a, type: 0x0, design: 0x0 },
      { x: -0x11, y: 0xa3, rotation: 0xcb, type: 0x0, design: 0x0 },
      { x: 0x8c, y: 0x5c, rotation: 0x101, type: 0x0, design: 0x0 },
      { x: 0xa1, y: -0x34, rotation: 0xe0, type: 0x0, design: 0x0 },
      { x: 0x52, y: 0xdc, rotation: 0x9d, type: 0x0, design: 0x0 },
      { x: 0x7c, y: -0xd1, rotation: 0x83, type: 0x1, design: 0x0 },
      { x: 0x14, y: -0x3a, rotation: 0xf0, type: 0x2, design: 0x0 },
    ],
    layers: [],
  },
  {
    wrenches: [
      { x: 0x5d, y: -0x95, rotation: 0x9d, type: 0x0, design: 0x0 },
      { x: 0x1e, y: -0xde, rotation: 0xa4, type: 0x1, design: 0x0 },
      { x: -0x5, y: 0xfd, rotation: 0x146, type: 0x0, design: 0x0 },
      { x: 0x5e, y: 0xc5, rotation: 0x12c, type: 0x1, design: 0x0 },
      { x: 0xc4, y: 0x1c, rotation: 0xfd, type: 0x0, design: 0x0 },
      { x: -0xa9, y: 0x2a, rotation: 0x11c, type: 0x1, design: 0x0 },
      { x: -0x23, y: -0x5a, rotation: 0xc4, type: 0x2, design: 0x0 },
      { x: 0x9, y: 0x50, rotation: 0x8c, type: 0x2, design: 0x0 },
      { x: 0x1c, y: -0xe, rotation: 0x140, type: 0x0, design: 0x0 },
    ],
    layers: [],
  },
  {
    wrenches: [
      { x: 0x6c, y: 0xc, rotation: 0xab, type: 0x0, design: 0x0 },
      { x: -0x17, y: 0x2a, rotation: 0xd8, type: 0x0, design: 0x0 },
      { x: -0xc0, y: 0x81, rotation: 0x14b, type: 0x0, design: 0x0 },
      { x: -0x4e, y: 0xf3, rotation: 0x131, type: 0x1, design: 0x0 },
      { x: 0x61, y: 0xcf, rotation: 0x125, type: 0x2, design: 0x0 },
      { x: -0x99, y: -0xb, rotation: 0x12d, type: 0x1, design: 0x0 },
      { x: -0x3, y: -0x5b, rotation: 0x14a, type: 0x1, design: 0x0 },
      { x: 0x91, y: -0xc3, rotation: 0x57, type: 0x1, design: 0x0 },
      { x: -0x16, y: -0xe4, rotation: 0x20, type: 0x1, design: 0x0 },
      { x: -0xac, y: -0x90, rotation: 0x14b, type: 0x1, design: 0x0 },
    ],
    layers: [],
  },
  {
    wrenches: [
      { x: -0x83, y: 0x6e, rotation: 0x16, type: 0x0, design: 0x0 },
      { x: 0x23, y: 0xf8, rotation: 0x121, type: 0x2, design: 0x0 },
      { x: 0x9f, y: 0x58, rotation: 0xf7, type: 0x0, design: 0x0 },
      { x: 0xb8, y: -0x20, rotation: 0x103, type: 0x0, design: 0x0 },
      { x: 0x37, y: 0x4, rotation: 0x97, type: 0x1, design: 0x0 },
      { x: 0x8b, y: -0x91, rotation: 0x95, type: 0x0, design: 0x0 },
      { x: 0x0, y: -0x82, rotation: 0x60, type: 0x1, design: 0x0 },
      { x: -0x73, y: 0xf, rotation: 0xd9, type: 0x1, design: 0x0 },
      { x: -0x8f, y: -0xce, rotation: 0x44, type: 0x1, design: 0x0 },
      { x: 0x7f, y: -0xfd, rotation: 0xa1, type: 0x2, design: 0x0 },
    ],
    layers: [],
  },
  {
    wrenches: [
      { x: -0x46, y: 0xe0, rotation: 0x12d, type: 0x0, design: 0x0 },
      { x: 0x2e, y: 0x97, rotation: 0xf2, type: 0x1, design: 0x0 },
      { x: 0xd6, y: 0xa5, rotation: 0xca, type: 0x1, design: 0x0 },
      { x: -0x57, y: 0x77, rotation: 0xd7, type: 0x0, design: 0x0 },
      { x: 0x8, y: -0x2a, rotation: 0xeb, type: 0x0, design: 0x0 },
      { x: 0x102, y: -0x90, rotation: 0x3b, type: 0x0, design: 0x0 },
      { x: 0x86, y: 0x30, rotation: 0x122, type: 0x2, design: 0x0 },
      { x: 0x89, y: -0xdd, rotation: 0xf, type: 0x1, design: 0x0 },
      { x: -0xa7, y: -0xe2, rotation: 0x6c, type: 0x0, design: 0x0 },
      { x: -0xc0, y: -0x2f, rotation: 0xee, type: 0x0, design: 0x0 },
      { x: -0x5c, y: -0x7b, rotation: 0x132, type: 0x2, design: 0x0 },
    ],
    layers: [],
  },
  {
    wrenches: [
      { x: -0x69, y: -0x21, rotation: 0x0, type: 0x2, design: 0x0 },
      { x: 0x8, y: 0xa9, rotation: 0x10e, type: 0x2, design: 0x0 },
      { x: 0x8, y: -0xe1, rotation: 0x5a, type: 0x2, design: 0x0 },
      { x: -0x88, y: 0x5c, rotation: 0x0, type: 0x0, design: 0x0 },
      { x: -0x25, y: 0x103, rotation: 0x0, type: 0x0, design: 0x0 },
      { x: 0x77, y: 0x34, rotation: 0x0, type: 0x0, design: 0x0 },
      { x: 0x54, y: 0xe2, rotation: 0x59, type: 0x0, design: 0x0 },
      { x: 0x6e, y: -0x8d, rotation: 0x14a, type: 0x0, design: 0x0 },
      { x: -0xa1, y: -0x7c, rotation: 0x21, type: 0x0, design: 0x0 },
      { x: -0x66, y: -0xf9, rotation: 0x58, type: 0x0, design: 0x0 },
    ],
    layers: [],
  },
  {
    wrenches: [
      { x: -0x2c, y: -0x7e, rotation: 0x13d, type: 0x0, design: 0x0 },
      { x: 0x57, y: -0x42, rotation: 0x59, type: 0x0, design: 0x0 },
      { x: -0x20, y: -0x19, rotation: 0x37, type: 0x1, design: 0x0 },
      { x: -0x3d, y: 0x89, rotation: 0x0, type: 0x2, design: 0x0 },
    ],
    layers: [
      { rotation: 0x5a, type: 0x2, design: 0x0, group: 0x0 },
      { rotation: -0x28, type: 0x0, design: 0x0, group: 0x2 },
      { rotation: 0x28, type: 0x1, design: 0x0, group: 0x3 },
    ],
  },
  {
    wrenches: [
      { x: 0x7b, y: -0xa4, rotation: 0xb4, type: 0x1, design: 0x0 },
      { x: -0x24, y: -0xa5, rotation: 0x5a, type: 0x2, design: 0x0 },
      { x: 0x60, y: -0x46, rotation: 0xb4, type: 0x0, design: 0x0 },
      { x: -0x24, y: 0x27, rotation: 0x0, type: 0x2, design: 0x0 },
      { x: 0x73, y: 0xbf, rotation: 0x134, type: 0x2, design: 0x0 },
      { x: -0x4b, y: 0xcb, rotation: 0x5b, type: 0x2, design: 0x0 },
    ],
    layers: [
      { rotation: 0x5a, type: 0x0, design: 0x0, group: 0x2 },
      { rotation: 0x5a, type: 0x2, design: 0x0, group: 0x3 },
    ],
  },
];
function initPreload() {
  var _0x167834 = a0_0x3dd953;
  toggleLoader(!![]),
    checkMobileEvent(),
    $(window)["resize"](function () {
      clearTimeout(resizeTimer),
        (resizeTimer = setTimeout(checkMobileOrientation, 0x3e8));
    }),
    resizeGameFunc(),
    (loader = new createjs["LoadQueue"](![])),
    (manifest = [
      { src: _0x167834(0x215), id: _0x167834(0x1d7) },
      { src: _0x167834(0x2c5), id: _0x167834(0x29a) },
      { src: _0x167834(0x2e4), id: _0x167834(0x2d8) },
      { src: _0x167834(0x266), id: _0x167834(0x208) },
      { src: _0x167834(0x1c5), id: "buttonStart" },
      { src: _0x167834(0x2da), id: _0x167834(0x1e1) },
      { src: _0x167834(0x1fd), id: _0x167834(0x210) },
      { src: "assets/item_level_lock.png", id: _0x167834(0x2d9) },
      { src: _0x167834(0x1be), id: _0x167834(0x20b) },
      { src: _0x167834(0x1cc), id: "itemNut" },
      { src: _0x167834(0x2e7), id: "itemNut2" },
      { src: _0x167834(0x204), id: _0x167834(0x2bd) },
      { src: _0x167834(0x2be), id: _0x167834(0x25b) },
      { src: _0x167834(0x264), id: _0x167834(0x1cf) },
      { src: _0x167834(0x29e), id: _0x167834(0x217) },
      { src: _0x167834(0x27d), id: "buttonFacebook" },
      { src: _0x167834(0x248), id: _0x167834(0x247) },
      { src: _0x167834(0x288), id: "buttonWhatsapp" },
      { src: _0x167834(0x24c), id: _0x167834(0x27c) },
      { src: _0x167834(0x265), id: _0x167834(0x1a7) },
      { src: _0x167834(0x220), id: _0x167834(0x1e8) },
      { src: _0x167834(0x20e), id: "buttonContinue" },
      { src: _0x167834(0x232), id: _0x167834(0x24a) },
      { src: _0x167834(0x2e0), id: _0x167834(0x274) },
      { src: _0x167834(0x1c2), id: _0x167834(0x2d0) },
      { src: _0x167834(0x2ab), id: _0x167834(0x1fb) },
      { src: _0x167834(0x2bc), id: _0x167834(0x1df) },
      { src: _0x167834(0x273), id: _0x167834(0x1d8) },
      { src: "assets/button_fullscreen.png", id: _0x167834(0x245) },
      { src: _0x167834(0x26b), id: _0x167834(0x2c2) },
      { src: "assets/button_sound_off.png", id: _0x167834(0x263) },
      { src: _0x167834(0x1fc), id: "buttonMusicOn" },
      { src: _0x167834(0x1f1), id: "buttonMusicOff" },
      { src: _0x167834(0x1b8), id: _0x167834(0x2b8) },
      { src: "assets/button_settings.png", id: _0x167834(0x2f4) },
    ]);
  for (
    let _0x141c08 = 0x0;
    _0x141c08 < wrenchSettings[_0x167834(0x2a5)];
    _0x141c08++
  ) {
    manifest[_0x167834(0x2af)]({
      src: wrenchSettings[_0x141c08][_0x167834(0x2c6)]["src"],
      id: _0x167834(0x1ed) + _0x141c08,
    }),
      manifest[_0x167834(0x2af)]({
        src: wrenchSettings[_0x141c08][_0x167834(0x212)][_0x167834(0x296)],
        id: "wrenchMedium" + _0x141c08,
      }),
      manifest["push"]({
        src: wrenchSettings[_0x141c08]["long"]["src"],
        id: _0x167834(0x29d) + _0x141c08,
      });
  }
  typeof addScoreboardAssets == _0x167834(0x2eb) && addScoreboardAssets(),
    (audioOn = !![]),
    !isDesktop
      ? !enableMobileAudio && (audioOn = ![])
      : !enableDesktopAudio && (audioOn = ![]),
    audioOn &&
      (manifest[_0x167834(0x2af)]({
        src: "assets/sounds/sound_click.ogg",
        id: _0x167834(0x2cf),
      }),
      manifest[_0x167834(0x2af)]({
        src: "assets/sounds/sound_start.ogg",
        id: _0x167834(0x287),
      }),
      manifest["push"]({ src: _0x167834(0x1f6), id: _0x167834(0x211) }),
      manifest[_0x167834(0x2af)]({
        src: _0x167834(0x268),
        id: _0x167834(0x20a),
      }),
      manifest[_0x167834(0x2af)]({
        src: _0x167834(0x1b3),
        id: _0x167834(0x1f7),
      }),
      manifest[_0x167834(0x2af)]({ src: _0x167834(0x2df), id: "soundWrench" }),
      manifest[_0x167834(0x2af)]({
        src: _0x167834(0x1c1),
        id: _0x167834(0x1ef),
      }),
      manifest[_0x167834(0x2af)]({
        src: "assets/sounds/sound_complete.ogg",
        id: _0x167834(0x24b),
      }),
      manifest[_0x167834(0x2af)]({ src: _0x167834(0x2f2), id: "musicMain" }),
      manifest[_0x167834(0x2af)]({
        src: "assets/sounds/music_game.ogg",
        id: _0x167834(0x250),
      }),
      (createjs[_0x167834(0x20c)][_0x167834(0x2b1)] = ["mp3"]),
      loader[_0x167834(0x27a)](createjs[_0x167834(0x20c)])),
    loader["addEventListener"](_0x167834(0x214), handleComplete),
    loader[_0x167834(0x2c9)](_0x167834(0x251), fileComplete),
    loader[_0x167834(0x2c9)](_0x167834(0x279), handleFileError),
    loader["on"](_0x167834(0x277), handleProgress, this),
    loader["loadManifest"](manifest);
}
function fileComplete(_0x5aa1e3) {
  var _0x5d3cb4 = a0_0x3dd953,
    _0x927298 = _0x5aa1e3[_0x5d3cb4(0x21b)];
}
function handleFileError(_0x473d0f) {
  var _0x1ba0dd = a0_0x3dd953;
  console[_0x1ba0dd(0x286)](_0x1ba0dd(0x22d), _0x473d0f);
}
function handleProgress() {
  var _0x3acbe8 = a0_0x3dd953;
  $("#mainLoader\x20span")[_0x3acbe8(0x1a6)](
    Math[_0x3acbe8(0x271)]((loader["progress"] / 0x1) * 0x64) + "%"
  );
}
function handleComplete() {
  toggleLoader(![]), initMain();
}
function toggleLoader(_0x45b603) {
  var _0x448069 = a0_0x3dd953;
  _0x45b603 ? $(_0x448069(0x2d2))["show"]() : $(_0x448069(0x2d2))["hide"]();
}
var stageW = 0x500,
  stageH = 0x2d0,
  contentW = 0x488,
  contentH = 0x280;
const viewport = { isLandscape: !![] },
  landscapeSize = { w: stageW, h: stageH, cW: contentW, cH: contentH },
  portraitSize = { w: 0x2d0, h: 0x500, cW: 0x280, cH: 0x438 };
function initMain() {
  var _0x4ecc50 = a0_0x3dd953;
  isDesktop && $(_0x4ecc50(0x2c3))[_0x4ecc50(0x2a4)](),
    initGameCanvas(stageW, stageH),
    buildGameCanvas(),
    buildGameButton(),
    typeof buildScoreBoardCanvas == _0x4ecc50(0x2eb) && buildScoreBoardCanvas(),
    $[_0x4ecc50(0x25a)][_0x4ecc50(0x276)]
      ? (loadEditPage(), goPage("game"))
      : (retrieveLevelData(), goPage(_0x4ecc50(0x1c8))),
    checkMobileOrientation(),
    resizeCanvas();
}
var windowW = (windowH = 0x0),
  scalePercent = 0x0;
const dpr = window[a0_0x3dd953(0x281)] || 0x1,
  offset = { x: 0x0, y: 0x0, left: 0x0, top: 0x0 };
function resizeGameFunc() {
  setTimeout(function () {
    var _0x2ce59f = a0_0x29e9;
    $(_0x2ce59f(0x22c))[_0x2ce59f(0x282)](
      _0x2ce59f(0x252),
      checkContentWidth($(_0x2ce59f(0x22c)))
    ),
      $(_0x2ce59f(0x22c))["css"](
        _0x2ce59f(0x1e4),
        checkContentHeight($(_0x2ce59f(0x22c)))
      ),
      (windowW = window[_0x2ce59f(0x26a)]),
      (windowH = window[_0x2ce59f(0x200)]),
      (scalePercent = Math["min"](windowW / contentW, windowH / contentH)),
      (scalePercent = scalePercent > 0x1 ? 0x1 : scalePercent);
    windowW > stageW &&
      windowH > stageH &&
      windowW > stageW &&
      ((scalePercent = windowW / stageW),
      stageH * scalePercent > windowH && (scalePercent = windowH / stageH));
    const _0x25cc12 = stageW * scalePercent,
      _0x33fe11 = stageH * scalePercent;
    (offset["left"] = 0x0), (offset[_0x2ce59f(0x1e4)] = 0x0);
    _0x25cc12 > windowW
      ? (offset[_0x2ce59f(0x252)] = -(_0x25cc12 - windowW))
      : (offset[_0x2ce59f(0x252)] = windowW - _0x25cc12);
    _0x33fe11 > windowH
      ? (offset["top"] = -(_0x33fe11 - windowH))
      : (offset[_0x2ce59f(0x1e4)] = windowH - _0x33fe11);
    (offset["x"] = 0x0), (offset["y"] = 0x0);
    offset[_0x2ce59f(0x252)] < 0x0 &&
      (offset["x"] = Math[_0x2ce59f(0x2b5)](
        offset[_0x2ce59f(0x252)] / scalePercent / 0x2
      ));
    offset[_0x2ce59f(0x1e4)] < 0x0 &&
      (offset["y"] = Math[_0x2ce59f(0x2b5)](
        offset[_0x2ce59f(0x1e4)] / scalePercent / 0x2
      ));
    const _0x174e63 = document["getElementById"](_0x2ce59f(0x2e6)),
      _0x106947 = _0x174e63["getContext"]("2d");
    (_0x174e63[_0x2ce59f(0x257)][_0x2ce59f(0x272)] = _0x25cc12 + "px"),
      (_0x174e63[_0x2ce59f(0x257)]["height"] = _0x33fe11 + "px"),
      (_0x174e63["style"][_0x2ce59f(0x252)] =
        offset[_0x2ce59f(0x252)] / 0x2 + "px"),
      (_0x174e63["style"][_0x2ce59f(0x1e4)] =
        offset[_0x2ce59f(0x1e4)] / 0x2 + "px"),
      (_0x174e63[_0x2ce59f(0x272)] = stageW * dpr),
      (_0x174e63[_0x2ce59f(0x2e3)] = stageH * dpr),
      $(window)[_0x2ce59f(0x1e0)](0x0),
      resizeCanvas(),
      typeof resizeScore == _0x2ce59f(0x2eb) && resizeScore();
  }, 0x64);
}
var resizeTimer;
function checkMobileEvent() {
  var _0x43635e = a0_0x3dd953;
  !isDesktop &&
    ($(window)
      ["off"]("orientationchange")
      ["on"](_0x43635e(0x292), function (_0x1aea5e) {
        var _0x441df9 = _0x43635e;
        $(_0x441df9(0x2c3))[_0x441df9(0x262)](),
          $(_0x441df9(0x1b1))["hide"](),
          clearTimeout(resizeTimer),
          (resizeTimer = setTimeout(checkMobileOrientation, 0x3e8));
      }),
    checkMobileOrientation());
}
function checkMobileOrientation() {
  var _0x36103e = a0_0x3dd953,
    _0x251de3 = ![];
  window[_0x36103e(0x26a)] > window[_0x36103e(0x200)] && (_0x251de3 = !![]),
    $[_0x36103e(0x25a)][_0x36103e(0x276)]
      ? (viewport[_0x36103e(0x1f3)] = edit[_0x36103e(0x1f3)])
      : (viewport[_0x36103e(0x1f3)] = _0x251de3),
    changeViewport(viewport[_0x36103e(0x1f3)]),
    resizeGameFunc(),
    $(_0x36103e(0x2c3))[_0x36103e(0x2a4)]();
}
function toggleRotate(_0x189ba9) {
  var _0x15e9dc = a0_0x3dd953;
  _0x189ba9
    ? $(_0x15e9dc(0x1b1))[_0x15e9dc(0x2c7)]()
    : $("#rotateHolder")[_0x15e9dc(0x2f6)](),
    resizeGameFunc();
}
function checkContentHeight(_0x590783) {
  var _0x4c0120 = a0_0x3dd953,
    _0x29e74e = $(window)["height"](),
    _0x24b949 = _0x29e74e / 0x2 - _0x590783[_0x4c0120(0x2e3)]() / 0x2;
  return _0x24b949;
}
function checkContentWidth(_0x1eaa35) {
  var _0x352ef2 = a0_0x3dd953,
    _0x526730 = $(window)[_0x352ef2(0x272)](),
    _0x3aa078 = _0x526730 / 0x2 - _0x1eaa35[_0x352ef2(0x272)]() / 0x2;
  return _0x3aa078;
}
function shuffle(_0x13f900) {
  var _0x580b4b = a0_0x3dd953,
    _0x59a542 = _0x13f900[_0x580b4b(0x2a5)],
    _0x12050a,
    _0x500587;
  while (0x0 !== _0x59a542) {
    (_0x500587 = Math["floor"](Math[_0x580b4b(0x21a)]() * _0x59a542)),
      (_0x59a542 -= 0x1),
      (_0x12050a = _0x13f900[_0x59a542]),
      (_0x13f900[_0x59a542] = _0x13f900[_0x500587]),
      (_0x13f900[_0x500587] = _0x12050a);
  }
  return _0x13f900;
}
function randomBoolean() {
  var _0x4ccd12 = a0_0x3dd953;
  return Math[_0x4ccd12(0x21a)]() < 0.5;
}
function getDistance(_0x3f33cd, _0x2cdbeb, _0x854b6a, _0x16bc32) {
  var _0x584d63 = a0_0x3dd953,
    _0x1f2215 = Math["sqrt"](
      Math[_0x584d63(0x255)](_0x3f33cd - _0x854b6a, 0x2) +
        Math[_0x584d63(0x255)](_0x2cdbeb - _0x16bc32, 0x2)
    );
  return _0x1f2215;
}
function randomIntFromInterval(_0x3f3c25, _0x4ac432) {
  var _0x1e8ccc = a0_0x3dd953;
  return Math[_0x1e8ccc(0x229)](
    Math[_0x1e8ccc(0x21a)]() * (_0x4ac432 - _0x3f3c25 + 0x1) + _0x3f3c25
  );
}
function addCommas(_0x12f8d3) {
  var _0xf4e584 = a0_0x3dd953;
  (_0x12f8d3 += ""),
    (x = _0x12f8d3[_0xf4e584(0x1c6)](".")),
    (x1 = x[0x0]),
    (x2 = x[_0xf4e584(0x2a5)] > 0x1 ? "." + x[0x1] : "");
  var _0x2dd51f = /(\d+)(\d{3})/;
  while (_0x2dd51f["test"](x1)) {
    x1 = x1[_0xf4e584(0x1b6)](_0x2dd51f, "$1" + "," + "$2");
  }
  return x1 + x2;
}
function isEven(_0x3c84a1) {
  return _0x3c84a1 % 0x2 == 0x0;
}
function getAnglePosition(_0x3d6d72, _0xd6d908, _0x3b562b, _0xf908e2) {
  var _0x53aae9 = a0_0x3dd953,
    _0xe8bb9 = { x: 0x0, y: 0x0 };
  return (
    (_0xe8bb9["x"] =
      _0x3d6d72 +
      _0x3b562b * Math[_0x53aae9(0x295)]((_0xf908e2 * Math["PI"]) / 0xb4)),
    (_0xe8bb9["y"] =
      _0xd6d908 +
      _0x3b562b * Math[_0x53aae9(0x1d5)]((_0xf908e2 * Math["PI"]) / 0xb4)),
    _0xe8bb9
  );
}
function a0_0x29e9(_0x1ea7d2, _0x1edcc0) {
  var _0x334423 = a0_0x3344();
  return (
    (a0_0x29e9 = function (_0x29e98e, _0x35ca4d) {
      _0x29e98e = _0x29e98e - 0x1a2;
      var _0x5acda8 = _0x334423[_0x29e98e];
      return _0x5acda8;
    }),
    a0_0x29e9(_0x1ea7d2, _0x1edcc0)
  );
}
function getDirection(_0x11f6eb, _0x3af4e6, _0x489699, _0x34830d) {
  var _0x501c0b = a0_0x3dd953,
    _0x1da0a2 = 0xb4 / Math["PI"],
    _0x1dbb76 =
      -Math[_0x501c0b(0x2a3)](_0x489699 - _0x11f6eb, _0x34830d - _0x3af4e6) *
      _0x1da0a2;
  return Math[_0x501c0b(0x271)](_0x1dbb76 + 0x5a);
}
function swapArray(_0x433cbe, _0x42ed23, _0x3532a9) {
  var _0x152a8a = _0x433cbe[_0x42ed23];
  (_0x433cbe[_0x42ed23] = _0x433cbe[_0x3532a9]),
    (_0x433cbe[_0x3532a9] = _0x152a8a);
}
const enableDesktopAudio = !![],
  enableMobileAudio = !![],
  muteSoundOn = ![],
  muteMusicOn = ![];
var audioOn,
  soundMute = ![],
  musicMute = ![];
$[a0_0x3dd953(0x1b4)] = {};
var soundID = 0x0,
  soundPushArr = [],
  soundLoopPushArr = [],
  musicPushArr = [];
function playSound(_0x5b529f, _0x814ef) {
  var _0x18172f = a0_0x3dd953;
  if (audioOn) {
    var _0x31ab7f = soundID;
    soundPushArr[_0x18172f(0x2af)](_0x31ab7f), soundID++;
    var _0x383ea7 = _0x814ef == undefined ? 0x1 : _0x814ef;
    ($[_0x18172f(0x1b4)][_0x31ab7f] =
      createjs[_0x18172f(0x20c)]["play"](_0x5b529f)),
      ($[_0x18172f(0x1b4)][_0x31ab7f]["defaultVol"] = _0x383ea7),
      setSoundVolume(_0x31ab7f),
      $[_0x18172f(0x1b4)][_0x31ab7f][_0x18172f(0x2a1)](),
      $[_0x18172f(0x1b4)][_0x31ab7f][_0x18172f(0x2c9)]("complete", function () {
        var _0x2cbb83 = _0x18172f,
          _0x2fc72f = soundPushArr[_0x2cbb83(0x267)](_0x31ab7f);
        _0x2fc72f != -0x1 && soundPushArr[_0x2cbb83(0x1bf)](_0x2fc72f, 0x1);
      });
  }
}
function playSoundLoop(_0x529d66) {
  var _0x46ba3d = a0_0x3dd953;
  audioOn &&
    $[_0x46ba3d(0x1b4)][_0x529d66] == null &&
    (soundLoopPushArr[_0x46ba3d(0x2af)](_0x529d66),
    ($["sound"][_0x529d66] = createjs[_0x46ba3d(0x20c)]["play"](_0x529d66)),
    ($[_0x46ba3d(0x1b4)][_0x529d66]["defaultVol"] = 0x1),
    setSoundLoopVolume(_0x529d66),
    $["sound"][_0x529d66]["removeAllEventListeners"](),
    $[_0x46ba3d(0x1b4)][_0x529d66]["addEventListener"]("complete", function () {
      var _0x7160d3 = _0x46ba3d;
      $[_0x7160d3(0x1b4)][_0x529d66][_0x7160d3(0x230)]();
    }));
}
function toggleSoundLoop(_0x6e555d, _0x5414dc) {
  var _0x4e2de9 = a0_0x3dd953;
  audioOn &&
    $[_0x4e2de9(0x1b4)][_0x6e555d] != null &&
    (_0x5414dc
      ? $[_0x4e2de9(0x1b4)][_0x6e555d]["play"]()
      : ($[_0x4e2de9(0x1b4)][_0x6e555d][_0x4e2de9(0x2e5)] = !![]));
}
function stopSoundLoop(_0x40fdda) {
  var _0x166a5d = a0_0x3dd953;
  if (audioOn) {
    if ($["sound"][_0x40fdda] != null) {
      $[_0x166a5d(0x1b4)][_0x40fdda][_0x166a5d(0x1d1)](),
        ($["sound"][_0x40fdda] = null);
      var _0x92d98d = soundLoopPushArr["indexOf"](_0x40fdda);
      _0x92d98d != -0x1 && soundLoopPushArr[_0x166a5d(0x1bf)](_0x92d98d, 0x1);
    }
  }
}
function playMusicLoop(_0x3e260d) {
  var _0x9008e2 = a0_0x3dd953;
  audioOn &&
    $[_0x9008e2(0x1b4)][_0x3e260d] == null &&
    (musicPushArr["push"](_0x3e260d),
    ($[_0x9008e2(0x1b4)][_0x3e260d] =
      createjs[_0x9008e2(0x20c)][_0x9008e2(0x230)](_0x3e260d)),
    ($[_0x9008e2(0x1b4)][_0x3e260d][_0x9008e2(0x1f4)] = 0x1),
    setMusicVolume(_0x3e260d),
    $[_0x9008e2(0x1b4)][_0x3e260d]["removeAllEventListeners"](),
    $[_0x9008e2(0x1b4)][_0x3e260d][_0x9008e2(0x2c9)](
      _0x9008e2(0x214),
      function () {
        var _0x33072c = _0x9008e2;
        $[_0x33072c(0x1b4)][_0x3e260d]["play"]();
      }
    ));
}
function toggleMusicLoop(_0x3fd290, _0x1732a7) {
  var _0xf4a824 = a0_0x3dd953;
  audioOn &&
    $[_0xf4a824(0x1b4)][_0x3fd290] != null &&
    (_0x1732a7
      ? $["sound"][_0x3fd290][_0xf4a824(0x230)]()
      : ($[_0xf4a824(0x1b4)][_0x3fd290][_0xf4a824(0x2e5)] = !![]));
}
function stopMusicLoop(_0x2b3bed) {
  var _0x5256a4 = a0_0x3dd953;
  if (audioOn) {
    if ($[_0x5256a4(0x1b4)][_0x2b3bed] != null) {
      $[_0x5256a4(0x1b4)][_0x2b3bed]["stop"](),
        ($[_0x5256a4(0x1b4)][_0x2b3bed] = null);
      var _0xb4b5c3 = musicPushArr[_0x5256a4(0x267)](_0x2b3bed);
      _0xb4b5c3 != -0x1 && musicPushArr[_0x5256a4(0x1bf)](_0xb4b5c3, 0x1);
    }
  }
}
function stopSound() {
  var _0x3114e8 = a0_0x3dd953;
  createjs[_0x3114e8(0x20c)]["stop"]();
}
function toggleSoundInMute(_0x39256c) {
  var _0x2e4f8b = a0_0x3dd953;
  if (audioOn) {
    soundMute = _0x39256c;
    for (var _0x1e5edb = 0x0; _0x1e5edb < soundPushArr["length"]; _0x1e5edb++) {
      setSoundVolume(soundPushArr[_0x1e5edb]);
    }
    for (
      var _0x1e5edb = 0x0;
      _0x1e5edb < soundLoopPushArr[_0x2e4f8b(0x2a5)];
      _0x1e5edb++
    ) {
      setSoundLoopVolume(soundLoopPushArr[_0x1e5edb]);
    }
  }
}
function toggleMusicInMute(_0x4b72ed) {
  var _0x3c3a30 = a0_0x3dd953;
  if (audioOn) {
    musicMute = _0x4b72ed;
    for (
      var _0x364d2c = 0x0;
      _0x364d2c < musicPushArr[_0x3c3a30(0x2a5)];
      _0x364d2c++
    ) {
      setMusicVolume(musicPushArr[_0x364d2c]);
    }
  }
}
function setSoundVolume(_0x24c778, _0x374708) {
  var _0x1d329e = a0_0x3dd953;
  if (audioOn) {
    var _0x52a14f = soundPushArr[_0x1d329e(0x267)](_0x24c778);
    if (_0x52a14f != -0x1) {
      var _0x220278 =
          _0x374708 == undefined
            ? $[_0x1d329e(0x1b4)][soundPushArr[_0x52a14f]][_0x1d329e(0x1f4)]
            : _0x374708,
        _0x2eda9b = soundMute == ![] ? _0x220278 : 0x0;
      ($[_0x1d329e(0x1b4)][soundPushArr[_0x52a14f]][_0x1d329e(0x2b7)] =
        _0x2eda9b),
        ($[_0x1d329e(0x1b4)][soundPushArr[_0x52a14f]][_0x1d329e(0x1f4)] =
          _0x220278);
    }
  }
}
function setSoundLoopVolume(_0x54b9c3, _0x4a1055) {
  var _0x15585d = a0_0x3dd953;
  if (audioOn) {
    var _0x47ff6a = soundLoopPushArr[_0x15585d(0x267)](_0x54b9c3);
    if (_0x47ff6a != -0x1) {
      var _0x3b93f7 =
          _0x4a1055 == undefined
            ? $[_0x15585d(0x1b4)][soundLoopPushArr[_0x47ff6a]][_0x15585d(0x1f4)]
            : _0x4a1055,
        _0x763bc9 = soundMute == ![] ? _0x3b93f7 : 0x0;
      ($["sound"][soundLoopPushArr[_0x47ff6a]][_0x15585d(0x2b7)] = _0x763bc9),
        ($[_0x15585d(0x1b4)][soundLoopPushArr[_0x47ff6a]]["defaultVol"] =
          _0x3b93f7);
    }
  }
}
function setMusicVolume(_0x2ee6a9, _0x407b78) {
  var _0x191ee4 = a0_0x3dd953;
  if (audioOn) {
    var _0x4e8375 = musicPushArr[_0x191ee4(0x267)](_0x2ee6a9);
    if (_0x4e8375 != -0x1) {
      var _0x14499a =
          _0x407b78 == undefined
            ? $[_0x191ee4(0x1b4)][musicPushArr[_0x4e8375]][_0x191ee4(0x1f4)]
            : _0x407b78,
        _0x5ed329 = musicMute == ![] ? _0x14499a : 0x0;
      ($[_0x191ee4(0x1b4)][musicPushArr[_0x4e8375]]["volume"] = _0x5ed329),
        ($[_0x191ee4(0x1b4)][musicPushArr[_0x4e8375]][_0x191ee4(0x1f4)] =
          _0x14499a);
    }
  }
}
