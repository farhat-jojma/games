var a0_0x45d961 = a0_0x42f1;
(function(_0x4fc163, _0x3dcc10) {
    var _0x486d8c = a0_0x42f1,
        _0x4af7a9 = _0x4fc163();
    while (!![]) {
        try {
            var _0x22df67 = parseInt(_0x486d8c(0x306)) / 0x1 * (-parseInt(_0x486d8c(0x11d)) / 0x2) + -parseInt(_0x486d8c(0x13a)) / 0x3 + -parseInt(_0x486d8c(0x2c8)) / 0x4 + -parseInt(_0x486d8c(0x1d8)) / 0x5 + parseInt(_0x486d8c(0x39e)) / 0x6 * (-parseInt(_0x486d8c(0x40f)) / 0x7) + -parseInt(_0x486d8c(0x229)) / 0x8 * (parseInt(_0x486d8c(0x216)) / 0x9) + parseInt(_0x486d8c(0x310)) / 0xa * (parseInt(_0x486d8c(0x334)) / 0xb);
            if (_0x22df67 === _0x3dcc10) break;
            else _0x4af7a9['push'](_0x4af7a9['shift']());
        } catch (_0x3b9b5b) {
            _0x4af7a9['push'](_0x4af7a9['shift']());
        }
    }
}(a0_0x52da, 0x27413));
var stage, canvasW = 0x0,
    canvasH = 0x0;

function initGameCanvas(_0x252e18, _0x43dc58) {
    var _0x21235c = a0_0x42f1;
    const _0x1de757 = document['getElementById'](_0x21235c(0x36a));
    _0x1de757[_0x21235c(0x34f)] = _0x252e18, _0x1de757[_0x21235c(0x3e8)] = _0x43dc58, canvasW = _0x252e18, canvasH = _0x43dc58, stage = new createjs[(_0x21235c(0x385))](_0x21235c(0x36a), {
        'antialias': !![]
    }), createjs[_0x21235c(0x197)][_0x21235c(0x30b)](stage), stage[_0x21235c(0x170)](0x14), stage['mouseMoveOutside'] = !![], createjs['Ticker'][_0x21235c(0x1dd)] = 0x3c, createjs[_0x21235c(0x398)]['addEventListener']('tick', tick);
}
var safeZoneGuide = ![],
    canvasContainer, mainContainer, gameContainer, resultContainer, exitContainer, optionsContainer, shareContainer, shareSaveContainer, socialContainer, guideline, bg, bgP, logo, logoP, itemExit, itemExitP, popTitleTxt, popDescTxt, buttonConfirm, buttonCancel, itemResult, itemResultP, buttonContinue, resultTitleTxt, resultDescTxt, buttonShare, buttonSave, resultTitleOutlineTxt, resultDescOutlineTxt, resultShareTxt, resultShareOutlineTxt, popTitleOutlineTxt, popDescOutlineTxt, buttonSettings, buttonFullscreen, buttonSoundOn, buttonSoundOff, buttonMusicOn, buttonMusicOff, buttonExit;
$[a0_0x45d961(0x125)] = {};
var buttonLocalContainer, cardsOptionsContainer, cardsOptionsListContainer, cardsOptionsTutorialContainer, statusContainer, guideContainer, cardScoreContainer, cardScoreListContainer, cardsContainer, cardsPlayContainer, cardsPlayersContainer, colorsContainer, buttonPlay, buttonLocal, buttonOnline, itemOptions, optionsTitleTxt, itemPlayerNumbers, totalPlayersTxt, buttonPlayersL, buttonPlayersR, itemPoints, pointsTxt, buttonPointsL, buttonPointsR, itemType, typeTxt, buttonTypeL, buttonTypeR, themeContainer, buttonThemeL, buttonThemeR, buttonNext, buttonStart, buttonTutorial, buttonTutorialL, buttonTutorialR, buttonBack, tutorialTitleTxt, tutorialPageTxt, _default, colorSpriteData, itemColors, itemFrozen, itemColorBg, colorSelectTxt, colorsInnerContainer, itemStatus, itemStatusLong, statusTxt, statusPlayerTxt, statusIconContainer, itemScore, itemScoreTopMask, itemScoreTop, roundStatusTxt, itemInstruction, guideTxt, roomContainer, nameContainer, gameLogsTxt;
$[a0_0x45d961(0x278)] = {}, $[a0_0x45d961(0x3fe)] = {}, $['colors'] = {}, $[a0_0x45d961(0x103)] = {};

function buildGameCanvas() {
    var _0x25f311 = a0_0x45d961;
    canvasContainer = new createjs[(_0x25f311(0x309))](), mainContainer = new createjs['Container'](), gameContainer = new createjs[(_0x25f311(0x309))](), exitContainer = new createjs[(_0x25f311(0x309))](), resultContainer = new createjs['Container'](), shareContainer = new createjs[(_0x25f311(0x309))](), shareSaveContainer = new createjs[(_0x25f311(0x309))](), socialContainer = new createjs[(_0x25f311(0x309))](), buttonLocalContainer = new createjs[(_0x25f311(0x309))](), cardsOptionsContainer = new createjs[(_0x25f311(0x309))](), cardsOptionsListContainer = new createjs[(_0x25f311(0x309))](), cardsOptionsTutorialContainer = new createjs[(_0x25f311(0x309))](), statusContainer = new createjs[(_0x25f311(0x309))](), guideContainer = new createjs[(_0x25f311(0x309))](), cardScoreContainer = new createjs[(_0x25f311(0x309))](), cardScoreListContainer = new createjs[(_0x25f311(0x309))](), cardsContainer = new createjs['Container'](), cardsPlayContainer = new createjs[(_0x25f311(0x309))](), cardsPlayersContainer = new createjs[(_0x25f311(0x309))](), colorsContainer = new createjs[(_0x25f311(0x309))](), bg = new createjs[(_0x25f311(0x228))](loader[_0x25f311(0x207)](_0x25f311(0x1ac))), bgP = new createjs['Bitmap'](loader[_0x25f311(0x207)](_0x25f311(0x12e))), logo = new createjs['Bitmap'](loader['getResult'](_0x25f311(0x2d6))), logoP = new createjs[(_0x25f311(0x228))](loader['getResult']('logoP')), buttonPlay = new createjs['Bitmap'](loader['getResult']('buttonPlay')), centerReg(buttonPlay), buttonLocal = new createjs['Bitmap'](loader[_0x25f311(0x207)]('buttonLocal')), centerReg(buttonLocal), buttonOnline = new createjs['Bitmap'](loader[_0x25f311(0x207)]('buttonOnline')), centerReg(buttonOnline), itemOptions = new createjs['Bitmap'](loader[_0x25f311(0x207)](_0x25f311(0x3c5))), centerReg(itemOptions), optionsTitleTxt = new createjs[(_0x25f311(0x3a4))](), optionsTitleTxt[_0x25f311(0x15c)] = _0x25f311(0x403), optionsTitleTxt[_0x25f311(0x384)] = _0x25f311(0x3ff), optionsTitleTxt[_0x25f311(0x3e2)] = _0x25f311(0x177), optionsTitleTxt[_0x25f311(0x2c4)] = _0x25f311(0x3a8), optionsTitleTxt[_0x25f311(0x290)] = textStrings['optionsTitle'], optionsTitleTxt['y'] = -0x96, itemPlayerNumbers = new createjs[(_0x25f311(0x228))](loader['getResult'](_0x25f311(0x26e))), centerReg(itemPlayerNumbers), totalPlayersTxt = new createjs['Text'](), totalPlayersTxt[_0x25f311(0x15c)] = '28px\x20bpreplaybold', totalPlayersTxt['color'] = _0x25f311(0x1de), totalPlayersTxt[_0x25f311(0x3e2)] = 'center', totalPlayersTxt['textBaseline'] = _0x25f311(0x2db), buttonPlayersL = new createjs[(_0x25f311(0x228))](loader[_0x25f311(0x207)](_0x25f311(0x2d2))), centerReg(buttonPlayersL), buttonPlayersR = new createjs[(_0x25f311(0x228))](loader['getResult'](_0x25f311(0x1e5))), centerReg(buttonPlayersR), itemPoints = new createjs['Bitmap'](loader[_0x25f311(0x207)](_0x25f311(0x26e))), centerReg(itemPoints), pointsTxt = new createjs[(_0x25f311(0x3a4))](), pointsTxt[_0x25f311(0x15c)] = _0x25f311(0x1c8), pointsTxt[_0x25f311(0x384)] = _0x25f311(0x1de), pointsTxt[_0x25f311(0x3e2)] = _0x25f311(0x177), pointsTxt[_0x25f311(0x2c4)] = 'middle', buttonPointsL = new createjs[(_0x25f311(0x228))](loader[_0x25f311(0x207)](_0x25f311(0x2d2))), centerReg(buttonPointsL), buttonPointsR = new createjs['Bitmap'](loader['getResult']('buttonArrowRight')), centerReg(buttonPointsR), itemType = new createjs[(_0x25f311(0x228))](loader[_0x25f311(0x207)](_0x25f311(0x26e))), centerReg(itemType), typeTxt = new createjs[(_0x25f311(0x3a4))](), typeTxt['font'] = _0x25f311(0x1c8), typeTxt[_0x25f311(0x384)] = _0x25f311(0x1de), typeTxt[_0x25f311(0x3e2)] = _0x25f311(0x177), typeTxt['textBaseline'] = _0x25f311(0x2db), buttonTypeL = new createjs[(_0x25f311(0x228))](loader[_0x25f311(0x207)](_0x25f311(0x2d2))), centerReg(buttonTypeL), buttonTypeR = new createjs[(_0x25f311(0x228))](loader[_0x25f311(0x207)](_0x25f311(0x1e5))), centerReg(buttonTypeR), themeContainer = new createjs['Container'](), buttonThemeL = new createjs['Bitmap'](loader[_0x25f311(0x207)](_0x25f311(0x2d2))), centerReg(buttonThemeL), buttonThemeR = new createjs[(_0x25f311(0x228))](loader[_0x25f311(0x207)](_0x25f311(0x1e5))), centerReg(buttonThemeR), buttonNext = new createjs['Bitmap'](loader[_0x25f311(0x207)](_0x25f311(0x2e8))), centerReg(buttonNext), buttonStart = new createjs['Bitmap'](loader[_0x25f311(0x207)](_0x25f311(0x1e6))), centerReg(buttonStart), buttonTutorial = new createjs['Bitmap'](loader['getResult'](_0x25f311(0x39a))), centerReg(buttonTutorial), itemPlayerNumbers['y'] = buttonPlayersL['y'] = buttonPlayersR['y'] = -0x5a, totalPlayersTxt['y'] = -0x5a, itemPoints['y'] = buttonPointsL['y'] = buttonPointsR['y'] = -0x5, pointsTxt['y'] = -0x5, itemType['y'] = buttonTypeL['y'] = buttonTypeR['y'] = 0x50, typeTxt['y'] = 0x50, buttonPlayersL['x'] = buttonPointsL['x'] = buttonTypeL['x'] = -0xbe, buttonPlayersR['x'] = buttonPointsR['x'] = buttonTypeR['x'] = 0xbe, buttonThemeL['x'] = -0x78, buttonThemeR['x'] = 0x78, buttonNext['y'] = buttonStart['y'] = buttonTutorial['y'] = 0xb4, buttonNext['x'] = buttonStart['x'] = -0x32, buttonTutorial['x'] = 0x8c, buttonTutorialL = new createjs['Bitmap'](loader[_0x25f311(0x207)](_0x25f311(0x2d2))), centerReg(buttonTutorialL), buttonTutorialR = new createjs[(_0x25f311(0x228))](loader['getResult']('buttonArrowRight')), centerReg(buttonTutorialR), buttonTutorialL['x'] = -0x10e, buttonTutorialR['x'] = 0x10e, buttonBack = new createjs['Bitmap'](loader[_0x25f311(0x207)](_0x25f311(0x26d))), centerReg(buttonBack), buttonBack['y'] = 0xb4, tutorialTitleTxt = new createjs[(_0x25f311(0x3a4))](), tutorialTitleTxt['font'] = _0x25f311(0x3dd), tutorialTitleTxt[_0x25f311(0x384)] = _0x25f311(0x3ff), tutorialTitleTxt[_0x25f311(0x3e2)] = _0x25f311(0x2d4), tutorialTitleTxt[_0x25f311(0x2c4)] = 'alphabetic', tutorialTitleTxt[_0x25f311(0x290)] = textStrings[_0x25f311(0x35d)], tutorialTitleTxt['y'] = -0x96, tutorialTitleTxt['x'] = -0xdc, tutorialPageTxt = new createjs[(_0x25f311(0x3a4))](), tutorialPageTxt['font'] = _0x25f311(0x3dd), tutorialPageTxt['color'] = _0x25f311(0x3ff), tutorialPageTxt['textAlign'] = _0x25f311(0x321), tutorialPageTxt[_0x25f311(0x2c4)] = 'alphabetic', tutorialPageTxt['y'] = -0x96, tutorialPageTxt['x'] = 0xdc, cardsOptionsTutorialContainer[_0x25f311(0x27b)](tutorialTitleTxt, tutorialPageTxt, buttonBack, buttonTutorialL, buttonTutorialR);
    for (var _0x155699 = 0x0; _0x155699 < 0xf; _0x155699++) {
        $[_0x25f311(0x278)][_0x155699] = new createjs[(_0x25f311(0x228))](loader[_0x25f311(0x207)](_0x25f311(0x339) + (_0x155699 + 0x1))), centerReg($[_0x25f311(0x278)][_0x155699]), cardsOptionsTutorialContainer[_0x25f311(0x27b)]($['tutorial'][_0x155699]);
    }
    cardsOptionsListContainer[_0x25f311(0x27b)](optionsTitleTxt, itemPlayerNumbers, totalPlayersTxt, buttonPlayersL, buttonPlayersR, itemPoints, pointsTxt, buttonPointsL, buttonPointsR, itemType, typeTxt, buttonTypeL, buttonTypeR, themeContainer, buttonThemeL, buttonThemeR, buttonStart, buttonTutorial, buttonNext), cardsOptionsContainer[_0x25f311(0x27b)](itemOptions, cardsOptionsListContainer, cardsOptionsTutorialContainer);
    var _0x6ae9dc = 0x64,
        _0x1a44db = 0x64,
        _0x383ccf = _0x6ae9dc / 0x2,
        _0x4f30ca = _0x1a44db / 0x2,
        _0x34130f = 0x9,
        _0x2fe8f9 = {
            'animate': {
                'frames': [0x0, 0x1, 0x2, 0x3],
                'speed': 0x1
            }
        };
    _default = _0x25f311(0x356);
    var _0x38d635 = {
        'regX': _0x383ccf,
        'regY': _0x4f30ca,
        'height': _0x1a44db,
        'width': _0x6ae9dc,
        'count': _0x34130f
    };
    colorSpriteData = new createjs['SpriteSheet']({
        'images': [loader[_0x25f311(0x207)](_0x25f311(0x32f))[_0x25f311(0x265)]],
        'frames': _0x38d635,
        'animations': _0x2fe8f9
    }), itemColors = new createjs[(_0x25f311(0x18e))](colorSpriteData, _0x25f311(0x356)), itemColors[_0x25f311(0x1dd)] = 0x14, itemColors[_0x25f311(0x1c2)] = itemColors[_0x25f311(0x38e)] = 0.7, itemFrozen = new createjs[(_0x25f311(0x228))](loader[_0x25f311(0x207)](_0x25f311(0x12a))), centerReg(itemFrozen), itemFrozen[_0x25f311(0x1c2)] = itemFrozen['scaleY'] = 0.7, itemColorBg = new createjs[(_0x25f311(0x228))](loader[_0x25f311(0x207)](_0x25f311(0x225))), centerReg(itemColorBg), colorSelectTxt = new createjs['Text'](), colorSelectTxt[_0x25f311(0x15c)] = _0x25f311(0x3ae), colorSelectTxt[_0x25f311(0x384)] = '#fff', colorSelectTxt[_0x25f311(0x3e2)] = _0x25f311(0x177), colorSelectTxt['textBaseline'] = _0x25f311(0x3a8), colorSelectTxt['y'] = 0x7f, colorSelectTxt[_0x25f311(0x290)] = _0x25f311(0x40e), colorsInnerContainer = new createjs['Container'](), colorsInnerContainer['y'] = -0x14, colorsContainer[_0x25f311(0x27b)](itemColorBg, colorsInnerContainer, colorSelectTxt);
    for (var _0x155699 = 0x0; _0x155699 < 0x4; _0x155699++) {
        $['colors'][_0x155699] = new createjs[(_0x25f311(0x18e))](colorSpriteData, _0x25f311(0x356)), $[_0x25f311(0x13c)][_0x155699][_0x25f311(0x1dd)] = 0x14, $[_0x25f311(0x13c)][_0x155699][_0x25f311(0x18f)](_0x155699), colorsInnerContainer[_0x25f311(0x27b)]($[_0x25f311(0x13c)][_0x155699]);
    }
    $['colors'][0x0]['x'] = $[_0x25f311(0x13c)][0x2]['x'] = -0x37, $['colors'][0x1]['x'] = $[_0x25f311(0x13c)][0x3]['x'] = 0x37, $[_0x25f311(0x13c)][0x0]['y'] = $[_0x25f311(0x13c)][0x1]['y'] = -0x37, $[_0x25f311(0x13c)][0x2]['y'] = $[_0x25f311(0x13c)][0x3]['y'] = 0x37, itemStatus = new createjs['Bitmap'](loader[_0x25f311(0x207)](_0x25f311(0x3ac))), centerReg(itemStatus), itemStatusLong = new createjs[(_0x25f311(0x228))](loader[_0x25f311(0x207)]('itemStatusLong')), centerReg(itemStatusLong), statusTxt = new createjs[(_0x25f311(0x3a4))](), statusTxt[_0x25f311(0x15c)] = _0x25f311(0x10a), statusTxt[_0x25f311(0x384)] = _0x25f311(0x3ff), statusTxt[_0x25f311(0x3e2)] = _0x25f311(0x177), statusTxt['textBaseline'] = _0x25f311(0x2db), statusTxt['y'] = 0x10, statusPlayerTxt = new createjs['Text'](), statusPlayerTxt[_0x25f311(0x15c)] = '26px\x20bpreplaybold', statusPlayerTxt[_0x25f311(0x384)] = _0x25f311(0x3ff), statusPlayerTxt[_0x25f311(0x3e2)] = _0x25f311(0x177), statusPlayerTxt[_0x25f311(0x2c4)] = _0x25f311(0x2db), statusPlayerTxt['y'] = -0x18, statusIconContainer = new createjs[(_0x25f311(0x309))](), statusIconContainer['y'] = -0xf, statusContainer[_0x25f311(0x27b)](itemStatus, itemStatusLong, statusTxt, statusPlayerTxt, statusIconContainer), itemScore = new createjs[(_0x25f311(0x228))](loader[_0x25f311(0x207)](_0x25f311(0x260))), centerReg(itemScore), itemScoreTopMask = new createjs[(_0x25f311(0x2b9))](), itemScoreTopMask[_0x25f311(0x3d1)][_0x25f311(0x226)](_0x25f311(0x11f))[_0x25f311(0x2a7)](-0xc8, -0xc8, 0x190, 0x12c), itemScoreTop = new createjs[(_0x25f311(0x228))](loader[_0x25f311(0x207)]('itemScoreTop')), centerReg(itemScoreTop), itemScoreTop[_0x25f311(0x325)] = 0x0, itemScoreTop[_0x25f311(0x381)] = itemScoreTopMask, roundStatusTxt = new createjs[(_0x25f311(0x3a4))](), roundStatusTxt[_0x25f311(0x15c)] = '25px\x20bpreplaybold', roundStatusTxt[_0x25f311(0x384)] = '#fff', roundStatusTxt[_0x25f311(0x3e2)] = 'center', roundStatusTxt[_0x25f311(0x2c4)] = 'alphabetic', roundStatusTxt['y'] = 0x61, cardScoreContainer[_0x25f311(0x27b)](itemScoreTop, itemScore, roundStatusTxt, cardScoreListContainer), itemInstruction = new createjs[(_0x25f311(0x228))](loader[_0x25f311(0x207)]('itemInstruction')), centerReg(itemInstruction), guideTxt = new createjs[(_0x25f311(0x3a4))](), guideTxt['font'] = _0x25f311(0x1e0), guideTxt[_0x25f311(0x384)] = _0x25f311(0x3ff), guideTxt[_0x25f311(0x3e2)] = _0x25f311(0x177), guideTxt[_0x25f311(0x2c4)] = 'middle', guideTxt['y'] = -0x3, guideContainer['addChild'](itemInstruction, guideTxt), itemResult = new createjs[(_0x25f311(0x228))](loader[_0x25f311(0x207)](_0x25f311(0x32d))), itemResultP = new createjs[(_0x25f311(0x228))](loader[_0x25f311(0x207)](_0x25f311(0x2b5))), buttonContinue = new createjs['Bitmap'](loader[_0x25f311(0x207)](_0x25f311(0x3b0))), centerReg(buttonContinue), resultShareTxt = new createjs[(_0x25f311(0x3a4))](), resultShareTxt[_0x25f311(0x15c)] = _0x25f311(0x10a), resultShareTxt[_0x25f311(0x384)] = _0x25f311(0x3ff), resultShareTxt[_0x25f311(0x3e2)] = _0x25f311(0x177), resultShareTxt[_0x25f311(0x2c4)] = _0x25f311(0x3a8), resultShareTxt[_0x25f311(0x290)] = textStrings[_0x25f311(0x125)], resultTitleTxt = new createjs[(_0x25f311(0x3a4))](), resultTitleTxt['font'] = '60px\x20bpreplaybold', resultTitleTxt[_0x25f311(0x384)] = '#fff', resultTitleTxt[_0x25f311(0x3e2)] = _0x25f311(0x177), resultTitleTxt[_0x25f311(0x2c4)] = _0x25f311(0x3a8), resultTitleTxt[_0x25f311(0x290)] = textStrings[_0x25f311(0x169)], resultDescTxt = new createjs['Text'](), resultDescTxt['font'] = '75px\x20bpreplaybold', resultDescTxt[_0x25f311(0x331)] = 0x23, resultDescTxt['color'] = _0x25f311(0x23b), resultDescTxt[_0x25f311(0x3e2)] = _0x25f311(0x177), resultDescTxt[_0x25f311(0x2c4)] = 'alphabetic', resultDescTxt[_0x25f311(0x290)] = '', socialContainer[_0x25f311(0x3ab)] = ![], socialContainer[_0x25f311(0x131)] = 0.9, shareContainer[_0x25f311(0x27b)](resultShareTxt, socialContainer);
    if (shareSettings[_0x25f311(0x30b)]) {
        buttonShare = new createjs[(_0x25f311(0x228))](loader[_0x25f311(0x207)](_0x25f311(0x171))), centerReg(buttonShare);
        var _0x2eaab7 = {
            'x': 0x0,
            'y': 0x2d,
            'spaceX': 0x41
        };
        _0x2eaab7['x'] = -((shareSettings['options'][_0x25f311(0x2ee)] - 0x1) * _0x2eaab7[_0x25f311(0x160)] / 0x2);
        for (let _0x27b4b1 = 0x0; _0x27b4b1 < shareSettings[_0x25f311(0x3e6)]['length']; _0x27b4b1++) {
            var _0x4c0c92 = shareSettings[_0x25f311(0x3e6)][_0x27b4b1],
                _0x2814de = String(_0x4c0c92[0x0])[_0x25f311(0x210)]() + String(_0x4c0c92)[_0x25f311(0x153)](0x1);
            $[_0x25f311(0x125)][_0x25f311(0x243) + _0x27b4b1] = new createjs[(_0x25f311(0x228))](loader['getResult'](_0x25f311(0x243) + _0x2814de)), $[_0x25f311(0x125)][_0x25f311(0x243) + _0x27b4b1][_0x25f311(0x297)] = _0x4c0c92, centerReg($[_0x25f311(0x125)][_0x25f311(0x243) + _0x27b4b1]), $[_0x25f311(0x125)][_0x25f311(0x243) + _0x27b4b1]['x'] = _0x2eaab7['x'], $['share'][_0x25f311(0x243) + _0x27b4b1]['y'] = _0x2eaab7['y'], socialContainer[_0x25f311(0x27b)]($[_0x25f311(0x125)]['button' + _0x27b4b1]), _0x2eaab7['x'] += _0x2eaab7[_0x25f311(0x160)];
        }
        buttonShare['y'] = buttonShare[_0x25f311(0x16b)][_0x25f311(0x188)] / 0x2 + 0xa, shareContainer[_0x25f311(0x27b)](buttonShare);
    }
    typeof toggleScoreboardSave == _0x25f311(0x1a8) && (buttonSave = new createjs[(_0x25f311(0x228))](loader['getResult'](_0x25f311(0x390))), centerReg(buttonSave), buttonSave['y'] = buttonSave['image'][_0x25f311(0x188)] / 0x2 + 0xa, shareSaveContainer[_0x25f311(0x27b)](buttonSave)), buttonFullscreen = new createjs[(_0x25f311(0x228))](loader[_0x25f311(0x207)]('buttonFullscreen')), centerReg(buttonFullscreen), buttonSoundOn = new createjs['Bitmap'](loader['getResult'](_0x25f311(0x2ba))), centerReg(buttonSoundOn), buttonSoundOff = new createjs[(_0x25f311(0x228))](loader[_0x25f311(0x207)]('buttonSoundOff')), centerReg(buttonSoundOff), buttonSoundOn[_0x25f311(0x3ab)] = ![], buttonMusicOn = new createjs[(_0x25f311(0x228))](loader['getResult'](_0x25f311(0x185))), centerReg(buttonMusicOn), buttonMusicOff = new createjs[(_0x25f311(0x228))](loader['getResult'](_0x25f311(0x117))), centerReg(buttonMusicOff), buttonMusicOn[_0x25f311(0x3ab)] = ![], buttonExit = new createjs['Bitmap'](loader['getResult'](_0x25f311(0x238))), centerReg(buttonExit), buttonSettings = new createjs['Bitmap'](loader[_0x25f311(0x207)]('buttonSettings')), centerReg(buttonSettings), createHitarea(buttonFullscreen), createHitarea(buttonSoundOn), createHitarea(buttonSoundOff), createHitarea(buttonExit), createHitarea(buttonSettings), optionsContainer = new createjs[(_0x25f311(0x309))](), optionsContainer[_0x25f311(0x27b)](buttonFullscreen, buttonSoundOn, buttonSoundOff, buttonMusicOn, buttonMusicOff, buttonExit), optionsContainer[_0x25f311(0x3ab)] = ![], itemExit = new createjs[(_0x25f311(0x228))](loader[_0x25f311(0x207)](_0x25f311(0x32d))), itemExitP = new createjs['Bitmap'](loader[_0x25f311(0x207)](_0x25f311(0x2b5))), buttonConfirm = new createjs['Bitmap'](loader[_0x25f311(0x207)]('buttonConfirm')), centerReg(buttonConfirm), buttonCancel = new createjs['Bitmap'](loader[_0x25f311(0x207)](_0x25f311(0x3bb))), centerReg(buttonCancel), popTitleTxt = new createjs[(_0x25f311(0x3a4))](), popTitleTxt[_0x25f311(0x15c)] = '60px\x20bpreplaybold', popTitleTxt[_0x25f311(0x384)] = _0x25f311(0x3ff), popTitleTxt[_0x25f311(0x3e2)] = _0x25f311(0x177), popTitleTxt['textBaseline'] = _0x25f311(0x3a8), popTitleTxt[_0x25f311(0x290)] = textStrings[_0x25f311(0x179)], popDescTxt = new createjs['Text'](), popDescTxt[_0x25f311(0x15c)] = _0x25f311(0x3dd), popDescTxt[_0x25f311(0x331)] = 0x32, popDescTxt['color'] = _0x25f311(0x3ff), popDescTxt[_0x25f311(0x3e2)] = _0x25f311(0x177), popDescTxt['textBaseline'] = _0x25f311(0x3a8), popDescTxt['text'] = textStrings[_0x25f311(0x383)], exitContainer[_0x25f311(0x27b)](itemExit, itemExitP, popTitleTxt, popDescTxt, buttonConfirm, buttonCancel), exitContainer[_0x25f311(0x3ab)] = ![], guideline = new createjs[(_0x25f311(0x2b9))](), roomContainer = new createjs[(_0x25f311(0x309))](), nameContainer = new createjs['Container'](), gameLogsTxt = new createjs['Text'](), gameLogsTxt[_0x25f311(0x15c)] = _0x25f311(0x10a), gameLogsTxt[_0x25f311(0x384)] = '#fff', gameLogsTxt[_0x25f311(0x3e2)] = _0x25f311(0x177), gameLogsTxt['textBaseline'] = _0x25f311(0x3a8), gameLogsTxt['text'] = '', buttonLocalContainer[_0x25f311(0x27b)](buttonLocal, buttonOnline), mainContainer[_0x25f311(0x27b)](logo, logoP, buttonPlay, buttonLocalContainer), cardsContainer['addChild'](cardsPlayContainer), gameContainer['addChild'](cardsPlayersContainer, itemColors, itemFrozen, cardsContainer, colorsContainer, statusContainer, guideContainer, cardScoreContainer), resultContainer['addChild'](itemResult, itemResultP, buttonContinue, resultTitleTxt, resultDescTxt, shareContainer, shareSaveContainer), canvasContainer[_0x25f311(0x27b)](bg, bgP, mainContainer, nameContainer, roomContainer, cardsOptionsContainer, gameContainer, gameLogsTxt, resultContainer, exitContainer, optionsContainer, buttonSettings, guideline), stage['addChild'](canvasContainer), changeViewport(viewport[_0x25f311(0x3ea)]), resizeGameFunc();
}

function changeViewport(_0x4095fa) {
    _0x4095fa ? (stageW = landscapeSize['w'], stageH = landscapeSize['h'], contentW = landscapeSize['cW'], contentH = landscapeSize['cH']) : (stageW = portraitSize['w'], stageH = portraitSize['h'], contentW = portraitSize['cW'], contentH = portraitSize['cH']), canvasW = stageW, canvasH = stageH, changeCanvasViewport();
}

function changeCanvasViewport() {
    var _0x38288d = a0_0x45d961;
    canvasContainer != undefined && (stage[_0x38288d(0x1c2)] = stage[_0x38288d(0x38e)] = dpr, safeZoneGuide && guideline[_0x38288d(0x3d1)][_0x38288d(0x274)]()[_0x38288d(0x2d8)](0x2)['beginStroke'](_0x38288d(0x11f))[_0x38288d(0x2a7)]((stageW - contentW) / 0x2, (stageH - contentH) / 0x2, contentW, contentH), cardsContainer['x'] = canvasW / 0x2, cardsContainer['y'] = canvasH / 0x2, cardsOptionsContainer['x'] = canvasW / 0x2, cardsOptionsContainer['y'] = canvasH / 0x2, viewport[_0x38288d(0x3ea)] ? (bg[_0x38288d(0x3ab)] = !![], bgP[_0x38288d(0x3ab)] = ![], logo[_0x38288d(0x3ab)] = !![], logoP[_0x38288d(0x3ab)] = ![], buttonPlay['x'] = canvasW / 0x2, buttonPlay['y'] = canvasH / 0x64 * 0x4b, buttonLocal['x'] = canvasW / 0x2 - 0x8c, buttonLocal['y'] = canvasH / 0x64 * 0x4b, buttonOnline['x'] = canvasW / 0x2 + 0x8c, buttonOnline['y'] = canvasH / 0x64 * 0x4b, itemResult['visible'] = !![], itemResultP['visible'] = ![], buttonContinue['x'] = canvasW / 0x2, buttonContinue['y'] = canvasH / 0x64 * 0x44, shareContainer['x'] = shareSaveContainer['x'] = canvasW / 0x2, shareContainer['y'] = shareSaveContainer['y'] = canvasH / 0x64 * 0x35, resultTitleTxt['x'] = canvasW / 0x2, resultTitleTxt['y'] = canvasH / 0x64 * 0x25, resultDescTxt['x'] = canvasW / 0x2, resultDescTxt['y'] = canvasH / 0x64 * 0x30, itemExit[_0x38288d(0x3ab)] = !![], itemExitP[_0x38288d(0x3ab)] = ![], buttonConfirm['x'] = canvasW / 0x2 - 0x8c, buttonConfirm['y'] = canvasH / 0x64 * 0x44, buttonCancel['x'] = canvasW / 0x2 + 0x8c, buttonCancel['y'] = canvasH / 0x64 * 0x44, popTitleTxt['x'] = canvasW / 0x2, popTitleTxt['y'] = canvasH / 0x64 * 0x25, popDescTxt['x'] = canvasW / 0x2, popDescTxt['y'] = canvasH / 0x64 * 0x2d, $('#roomWrapper')[_0x38288d(0x2c7)]('forPortrait'), $('#notificationHolder')['removeClass'](_0x38288d(0x201)), $(_0x38288d(0x2fe))[_0x38288d(0x3d7)](_0x38288d(0x192), 0xa), $(_0x38288d(0x3f8))['attr'](_0x38288d(0x192), 0xa), $(_0x38288d(0x2e3))[_0x38288d(0x3d7)]('rows', 0xa)) : (cardsContainer['x'] = canvasW / 0x2, cardsContainer['y'] = canvasH / 0x64 * 0x32, bg['visible'] = ![], bgP[_0x38288d(0x3ab)] = !![], logo['visible'] = ![], logoP[_0x38288d(0x3ab)] = !![], buttonPlay['x'] = canvasW / 0x2, buttonPlay['y'] = canvasH / 0x64 * 0x49, buttonLocal['x'] = canvasW / 0x2, buttonLocal['y'] = canvasH / 0x64 * 0x49, buttonOnline['x'] = canvasW / 0x2, buttonOnline['y'] = canvasH / 0x64 * 0x53, itemResult[_0x38288d(0x3ab)] = ![], itemResultP[_0x38288d(0x3ab)] = !![], buttonContinue['x'] = canvasW / 0x2, buttonContinue['y'] = canvasH / 0x64 * 0x40, shareContainer['x'] = shareSaveContainer['x'] = canvasW / 0x2, shareContainer['y'] = shareSaveContainer['y'] = canvasH / 0x64 * 0x34, resultTitleTxt['x'] = canvasW / 0x2, resultTitleTxt['y'] = canvasH / 0x64 * 0x28, resultDescTxt['x'] = canvasW / 0x2, resultDescTxt['y'] = canvasH / 0x64 * 0x30, itemExit['visible'] = ![], itemExitP[_0x38288d(0x3ab)] = !![], buttonConfirm['x'] = canvasW / 0x2 - 0x82, buttonConfirm['y'] = canvasH / 0x64 * 0x40, buttonCancel['x'] = canvasW / 0x2 + 0x82, buttonCancel['y'] = canvasH / 0x64 * 0x40, popTitleTxt['x'] = canvasW / 0x2, popTitleTxt['y'] = canvasH / 0x64 * 0x28, popDescTxt['x'] = canvasW / 0x2, popDescTxt['y'] = canvasH / 0x64 * 0x30, $(_0x38288d(0x3fb))[_0x38288d(0x1d0)](_0x38288d(0x201)), $(_0x38288d(0x21e))[_0x38288d(0x1d0)](_0x38288d(0x201)), $('#roomlists')['attr'](_0x38288d(0x192), 0x8), $('#namelists')['attr'](_0x38288d(0x192), 0x8), $(_0x38288d(0x2e3))['attr'](_0x38288d(0x253), 0x6)));
}

function resizeCanvas() {
    var _0x23d5a1 = a0_0x45d961;
    if (canvasContainer != undefined) {
        buttonSettings['x'] = canvasW - offset['x'] - 0x32, buttonSettings['y'] = offset['y'] + 0x2d;
        var _0x3cfc7e = 0x41,
            _0x22b7d3 = 0x0;
        buttonSoundOn['x'] = buttonSoundOff['x'] = buttonSettings['x'], buttonSoundOn['y'] = buttonSoundOff['y'] = buttonSettings['y'] + _0x3cfc7e, buttonSoundOn['x'] = buttonSoundOff['x'], buttonSoundOn['y'] = buttonSoundOff['y'] = buttonSettings['y'] + _0x3cfc7e, typeof buttonMusicOn != _0x23d5a1(0x1ec) ? (buttonMusicOn['x'] = buttonMusicOff['x'] = buttonSettings['x'], buttonMusicOn['y'] = buttonMusicOff['y'] = buttonSettings['y'] + _0x3cfc7e * 0x2, buttonMusicOn['x'] = buttonMusicOff['x'], buttonMusicOn['y'] = buttonMusicOff['y'] = buttonSettings['y'] + _0x3cfc7e * 0x2, _0x22b7d3 = 0x2) : _0x22b7d3 = 0x1, buttonFullscreen['x'] = buttonSettings['x'], buttonFullscreen['y'] = buttonSettings['y'] + _0x3cfc7e * (_0x22b7d3 + 0x1), curPage == 'main' || curPage == 'result' ? (buttonExit[_0x23d5a1(0x3ab)] = ![], buttonFullscreen['x'] = buttonSettings['x'], buttonFullscreen['y'] = buttonSettings['y'] + _0x3cfc7e * (_0x22b7d3 + 0x1)) : (buttonExit[_0x23d5a1(0x3ab)] = !![], buttonExit['x'] = buttonSettings['x'], buttonExit['y'] = buttonSettings['y'] + _0x3cfc7e * (_0x22b7d3 + 0x2)), resizeGameLayout(), resizeSocketLog();
    }
}

function removeGameCanvas() {
    var _0x2f3304 = a0_0x45d961;
    stage[_0x2f3304(0x298)] = !![], stage[_0x2f3304(0x17b)](), stage[_0x2f3304(0x2e0)](), createjs['Ticker']['removeEventListener'](_0x2f3304(0x196), tick), createjs['Ticker'][_0x2f3304(0x282)](_0x2f3304(0x196), stage);
}

function tick(_0x2532b0) {
    var _0x3505bb = a0_0x45d961;
    updateGame(), stage[_0x3505bb(0x2e0)](_0x2532b0);
}

function centerReg(_0x4f5f61) {
    var _0x4a2d88 = a0_0x45d961;
    _0x4f5f61[_0x4a2d88(0x3b4)] = _0x4f5f61[_0x4a2d88(0x16b)]['naturalWidth'] / 0x2, _0x4f5f61[_0x4a2d88(0x325)] = _0x4f5f61[_0x4a2d88(0x16b)][_0x4a2d88(0x188)] / 0x2;
}

function createHitarea(_0x309579) {
    var _0x1855fa = a0_0x45d961;
    _0x309579['hitArea'] = new createjs[(_0x1855fa(0x2b9))](new createjs['Graphics']()[_0x1855fa(0x226)](_0x1855fa(0x3de))[_0x1855fa(0x2a7)](0x0, 0x0, _0x309579['image'][_0x1855fa(0x2b2)], _0x309579[_0x1855fa(0x16b)]['naturalHeight']));
}
const themes_arr = [{
        'front': a0_0x45d961(0x377),
        'highlight': a0_0x45d961(0x354),
        'shadow': a0_0x45d961(0x3a7),
        'eliminated': a0_0x45d961(0x148),
        'red': {
            'background': a0_0x45d961(0x194),
            'numbers': [a0_0x45d961(0x36e), a0_0x45d961(0x370), a0_0x45d961(0x101), 'assets/themes1/theme_red_3.png', a0_0x45d961(0x40d), 'assets/themes1/theme_red_5.png', a0_0x45d961(0x3a1), a0_0x45d961(0x213), 'assets/themes1/theme_red_8.png', a0_0x45d961(0x22d)],
            'actions': [a0_0x45d961(0x3f0), 'assets/themes1/theme_red_reverse.png', 'assets/themes1/theme_red_skip.png']
        },
        'yellow': {
            'background': a0_0x45d961(0x259),
            'numbers': [a0_0x45d961(0x10c), a0_0x45d961(0x17f), 'assets/themes1/theme_yellow_2.png', a0_0x45d961(0x1ce), a0_0x45d961(0x2fc), 'assets/themes1/theme_yellow_5.png', a0_0x45d961(0x223), a0_0x45d961(0x3b5), a0_0x45d961(0x401), a0_0x45d961(0x327)],
            'actions': ['assets/themes1/theme_yellow_draw.png', a0_0x45d961(0x2a0), a0_0x45d961(0x35b)]
        },
        'blue': {
            'background': a0_0x45d961(0x33b),
            'numbers': [a0_0x45d961(0x400), a0_0x45d961(0x163), a0_0x45d961(0x32e), a0_0x45d961(0x209), a0_0x45d961(0x121), a0_0x45d961(0x10f), a0_0x45d961(0x112), a0_0x45d961(0x17a), a0_0x45d961(0x22b), a0_0x45d961(0x394)],
            'actions': ['assets/themes1/theme_blue_draw.png', a0_0x45d961(0x2d9), 'assets/themes1/theme_blue_skip.png']
        },
        'green': {
            'background': a0_0x45d961(0x26f),
            'numbers': ['assets/themes1/theme_green_0.png', a0_0x45d961(0x21a), a0_0x45d961(0x358), a0_0x45d961(0x391), a0_0x45d961(0x330), a0_0x45d961(0x1c3), a0_0x45d961(0x23f), a0_0x45d961(0x350), a0_0x45d961(0x25e), a0_0x45d961(0x236)],
            'actions': ['assets/themes1/theme_green_draw.png', a0_0x45d961(0x2a2), a0_0x45d961(0x19f)]
        },
        'wilds': ['assets/themes1/theme_wild.png', a0_0x45d961(0x269)],
        'specials': [a0_0x45d961(0x2d1), a0_0x45d961(0x11a), 'assets/themes1/theme_devildeal.png', a0_0x45d961(0x25f), a0_0x45d961(0x38b), 'assets/themes1/theme_eliminatedplayer.png', a0_0x45d961(0x3f4)]
    }, {
        'front': a0_0x45d961(0x1a1),
        'highlight': a0_0x45d961(0x1d4),
        'shadow': a0_0x45d961(0x3f3),
        'eliminated': a0_0x45d961(0x176),
        'red': {
            'background': a0_0x45d961(0x14b),
            'numbers': [a0_0x45d961(0x248), a0_0x45d961(0x2ec), a0_0x45d961(0x317), 'assets/themes2/theme_red_3.png', 'assets/themes2/theme_red_4.png', a0_0x45d961(0x373), a0_0x45d961(0x20a), a0_0x45d961(0x17e), a0_0x45d961(0x162), a0_0x45d961(0x13e)],
            'actions': [a0_0x45d961(0x27a), 'assets/themes2/theme_red_reverse.png', 'assets/themes2/theme_red_skip.png']
        },
        'yellow': {
            'background': 'assets/themes2/theme_yellow_bg.png',
            'numbers': [a0_0x45d961(0x34b), a0_0x45d961(0x13f), 'assets/themes2/theme_yellow_2.png', a0_0x45d961(0x312), a0_0x45d961(0x1fa), 'assets/themes2/theme_yellow_5.png', a0_0x45d961(0x31b), a0_0x45d961(0x3db), a0_0x45d961(0x271), 'assets/themes2/theme_yellow_9.png'],
            'actions': [a0_0x45d961(0x152), a0_0x45d961(0x2c3), a0_0x45d961(0x22c)]
        },
        'blue': {
            'background': 'assets/themes2/theme_blue_bg.png',
            'numbers': [a0_0x45d961(0x378), 'assets/themes2/theme_blue_1.png', a0_0x45d961(0x227), a0_0x45d961(0x37b), 'assets/themes2/theme_blue_4.png', 'assets/themes2/theme_blue_5.png', a0_0x45d961(0x277), a0_0x45d961(0x1f7), a0_0x45d961(0x251), a0_0x45d961(0x1d9)],
            'actions': [a0_0x45d961(0x12d), a0_0x45d961(0x14a), a0_0x45d961(0x303)]
        },
        'green': {
            'background': 'assets/themes2/theme_green_bg.png',
            'numbers': ['assets/themes2/theme_green_0.png', a0_0x45d961(0x256), 'assets/themes2/theme_green_2.png', a0_0x45d961(0x1d2), 'assets/themes2/theme_green_4.png', a0_0x45d961(0x3a9), a0_0x45d961(0x11e), a0_0x45d961(0x30f), 'assets/themes2/theme_green_8.png', a0_0x45d961(0x124)],
            'actions': [a0_0x45d961(0x19d), a0_0x45d961(0x2ef), a0_0x45d961(0x2da)]
        },
        'wilds': [a0_0x45d961(0x181), 'assets/themes2/theme_wilddraw.png'],
        'specials': [a0_0x45d961(0x21f), a0_0x45d961(0x20c), a0_0x45d961(0x2e2), 'assets/themes2/theme_charity.png', a0_0x45d961(0x409), a0_0x45d961(0x38c), 'assets/themes2/theme_frozencolor.png']
    }, {
        'front': a0_0x45d961(0x2eb),
        'highlight': a0_0x45d961(0x407),
        'shadow': a0_0x45d961(0x10d),
        'eliminated': 'assets/themes3/theme_eliminated.png',
        'red': {
            'background': a0_0x45d961(0x183),
            'numbers': ['assets/themes3/theme_red_0.png', 'assets/themes3/theme_red_1.png', a0_0x45d961(0x364), a0_0x45d961(0x345), a0_0x45d961(0x1aa), a0_0x45d961(0x106), a0_0x45d961(0x3c2), a0_0x45d961(0x3a2), 'assets/themes3/theme_red_8.png', 'assets/themes3/theme_red_9.png'],
            'actions': [a0_0x45d961(0x3c0), a0_0x45d961(0x19c), a0_0x45d961(0x242)]
        },
        'yellow': {
            'background': a0_0x45d961(0x315),
            'numbers': ['assets/themes3/theme_yellow_0.png', 'assets/themes3/theme_yellow_1.png', a0_0x45d961(0x2d7), a0_0x45d961(0x361), a0_0x45d961(0x1f0), a0_0x45d961(0x2cc), 'assets/themes3/theme_yellow_6.png', a0_0x45d961(0x12f), a0_0x45d961(0x1fc), a0_0x45d961(0x21c)],
            'actions': [a0_0x45d961(0x3ad), a0_0x45d961(0x187), a0_0x45d961(0x254)]
        },
        'blue': {
            'background': 'assets/themes3/theme_blue_bg.png',
            'numbers': [a0_0x45d961(0x3cb), a0_0x45d961(0x13d), a0_0x45d961(0x411), a0_0x45d961(0x1e3), a0_0x45d961(0x186), a0_0x45d961(0x3b7), a0_0x45d961(0x109), a0_0x45d961(0x2be), a0_0x45d961(0x318), a0_0x45d961(0x376)],
            'actions': [a0_0x45d961(0x24d), a0_0x45d961(0x3fa), a0_0x45d961(0x3e3)]
        },
        'green': {
            'background': 'assets/themes3/theme_green_bg.png',
            'numbers': [a0_0x45d961(0x29b), a0_0x45d961(0x3f2), 'assets/themes3/theme_green_2.png', a0_0x45d961(0x3e1), 'assets/themes3/theme_green_4.png', a0_0x45d961(0x1a9), a0_0x45d961(0x2c9), a0_0x45d961(0x142), 'assets/themes3/theme_green_8.png', a0_0x45d961(0x29a)],
            'actions': ['assets/themes3/theme_green_draw.png', a0_0x45d961(0x333), a0_0x45d961(0x119)]
        },
        'wilds': [a0_0x45d961(0x267), a0_0x45d961(0x300)],
        'specials': [a0_0x45d961(0x32b), a0_0x45d961(0x151), 'assets/themes3/theme_devildeal.png', a0_0x45d961(0x3cc), 'assets/themes3/theme_targeteddraw2.png', a0_0x45d961(0x108), a0_0x45d961(0x393)]
    }],
    cards_arr = {
        'numbers': [0x0, 0x1, 0x1, 0x2, 0x2, 0x3, 0x3, 0x4, 0x4, 0x5, 0x5, 0x6, 0x6, 0x7, 0x7, 0x8, 0x8, 0x9, 0x9],
        'actions': [{
            'type': a0_0x45d961(0x264),
            'point': 0x14,
            'image': a0_0x45d961(0x200),
            'text': a0_0x45d961(0x107)
        }, {
            'type': a0_0x45d961(0x220),
            'point': 0x14,
            'image': 'assets/icon_reverse.png',
            'text': a0_0x45d961(0x38a)
        }, {
            'type': 'skip',
            'point': 0x14,
            'image': a0_0x45d961(0x36b),
            'text': a0_0x45d961(0x2a8)
        }],
        'wilds': [{
            'type': a0_0x45d961(0x215),
            'point': 0x32,
            'image': 'assets/icon_wild.png',
            'text': a0_0x45d961(0x351)
        }, {
            'type': a0_0x45d961(0x221),
            'point': 0x32,
            'image': 'assets/icon_wilddraw4.png',
            'text': a0_0x45d961(0x3d6)
        }],
        'specials': [{
            'type': a0_0x45d961(0x357),
            'point': 0x32,
            'image': a0_0x45d961(0x322),
            'text': 'REVEAL\x20PLAYER\x20CARDS'
        }, {
            'type': a0_0x45d961(0x369),
            'point': 0x32,
            'image': a0_0x45d961(0x353),
            'text': a0_0x45d961(0x270)
        }, {
            'type': a0_0x45d961(0x11b),
            'point': 0x32,
            'image': a0_0x45d961(0x1ea),
            'text': 'REVERSE,\x20SKIP\x20AND\x20DRAW\x202\x20CARDS'
        }, {
            'type': a0_0x45d961(0x304),
            'point': 0x32,
            'image': 'assets/icon_charity.png',
            'text': 'HADN\x202\x20CARDS\x20TO\x20TARGETED\x20PLAYER'
        }, {
            'type': a0_0x45d961(0x36d),
            'point': 0x32,
            'image': a0_0x45d961(0x33c),
            'text': a0_0x45d961(0x2cd)
        }, {
            'type': a0_0x45d961(0x2a3),
            'point': 0x32,
            'image': a0_0x45d961(0x16d),
            'text': 'ELIMINATE\x20PLAYER'
        }, {
            'type': 'frozencolor',
            'point': 0x32,
            'image': 'assets/icon_frozencolor.png',
            'text': a0_0x45d961(0x273)
        }],
        'otherActions': []
    },
    gameSettings = {
        'cardW': 0x64,
        'cardH': 0x96,
        'cardSpace': 0x32,
        'cardShadowX': 0x5,
        'cardShadowY': 0x5,
        'cardMoveSpeed': 0.2,
        'cardDealSpeed': 0.2,
        'cardFlipSpeed': 0.2,
        'aiThinkSpeed': 1.5,
        'playerCards': 0x7,
        'penaltyCards': 0x2,
        'lastCardCallTimer': 0x1,
        'points': [0x64, 0xc8, 0x12c, 0x190, 0x1f4]
    },
    textStrings = {
        'optionsTitle': a0_0x45d961(0x372),
        'tutorialTitle': a0_0x45d961(0x25a),
        'totalPlayers': a0_0x45d961(0x198),
        'goalPoint': a0_0x45d961(0x268),
        'modes': [a0_0x45d961(0x311), a0_0x45d961(0x246)],
        'playerName': a0_0x45d961(0x147),
        'playerScore': a0_0x45d961(0x190),
        'playerPenalty': a0_0x45d961(0x2c1),
        'userPickColor': a0_0x45d961(0x2bb),
        'playerPickColor': 'PICKING\x20COLORS',
        'playerTarget': a0_0x45d961(0x279),
        'playerTargeting': a0_0x45d961(0x2b0),
        'selectCards': a0_0x45d961(0x31a),
        'selectingCards': a0_0x45d961(0x110),
        'emptyCards': a0_0x45d961(0x35e),
        'noMorePlayers': a0_0x45d961(0x280),
        'noCardsLeft': a0_0x45d961(0x3fd),
        'drawDrough': a0_0x45d961(0x332),
        'playerWon': a0_0x45d961(0x1c1),
        'playerRoundWin': 'YOU\x20WIN\x20THIS\x20ROUND',
        'playerRoundLose': a0_0x45d961(0x1a6),
        'goalPointTitle': a0_0x45d961(0x3b9),
        'playerScoreAdd': a0_0x45d961(0x1b3),
        'userWin': a0_0x45d961(0x32c),
        'playerWin': '[NAME]\x20WIN\x20THE\x20GAME',
        'exitTitle': a0_0x45d961(0x24e),
        'exitMessage': a0_0x45d961(0x3bf),
        'share': a0_0x45d961(0x157),
        'resultTitle': a0_0x45d961(0x31d),
        'resultDesc': a0_0x45d961(0x190)
    },
    shareSettings = {
        'enable': !![],
        'options': [a0_0x45d961(0x39f), a0_0x45d961(0x37d), a0_0x45d961(0x2f4), a0_0x45d961(0x19b), 'reddit', a0_0x45d961(0x2ce)],
        'shareTitle': a0_0x45d961(0x20f),
        'shareText': a0_0x45d961(0x3f5),
        'customScore': !![],
        'gtag': !![]
    };
$['editor'] = {
    'enable': ![]
};
const playerData = {
        'score': 0x0,
        'scores': []
    },
    gameData = {
        'paused': !![],
        'colors': [a0_0x45d961(0x11f), 'blue', a0_0x45d961(0x1d6), a0_0x45d961(0x3cd)],
        'moving': ![],
        'player': 0x0,
        'players': 0x0,
        'pointIndex': 0x0,
        'themeIndex': 0x0,
        'drawing': ![],
        'ai': !![],
        'complete': ![],
        'names': []
    },
    tweenData = {
        'score': 0x0,
        'tweenScore': 0x0
    };

function buildGameButton() {
    var _0x53d9ed = a0_0x45d961;
    $(window)[_0x53d9ed(0x158)](function() {
        var _0xb92eb6 = _0x53d9ed;
        !buttonSoundOn['visible'] && toggleSoundInMute(![]), typeof buttonMusicOn != 'undefined' && (!buttonMusicOn[_0xb92eb6(0x3ab)] && toggleMusicInMute(![]));
    }), $(window)[_0x53d9ed(0x37c)](function() {
        var _0x174c39 = _0x53d9ed;
        !buttonSoundOn[_0x174c39(0x3ab)] && toggleSoundInMute(!![]), typeof buttonMusicOn != _0x174c39(0x1ec) && (!buttonMusicOn[_0x174c39(0x3ab)] && toggleMusicInMute(!![]));
    });
    audioOn && (muteSoundOn && toggleSoundMute(!![]), muteMusicOn && toggleMusicMute(!![]));
    buttonPlay[_0x53d9ed(0x2b8)] = 'pointer', buttonPlay['addEventListener'](_0x53d9ed(0x167), function(_0x234e88) {
        var _0x53b210 = _0x53d9ed;
        playSound(_0x53b210(0x3c9)), typeof initSocket == 'function' && multiplayerSettings[_0x53b210(0x30b)] ? multiplayerSettings['localPlay'] ? toggleMainButton('local') : checkQuickGameMode() : goPage(_0x53b210(0x3e6));
    }), buttonLocal[_0x53d9ed(0x2b8)] = 'pointer', buttonLocal['addEventListener'](_0x53d9ed(0x167), function(_0x5453b9) {
        var _0x1ee46b = _0x53d9ed;
        playSound(_0x1ee46b(0x3c9)), socketData[_0x1ee46b(0x3d3)] = ![], goPage(_0x1ee46b(0x3e6));
    }), buttonOnline[_0x53d9ed(0x2b8)] = _0x53d9ed(0x392), buttonOnline[_0x53d9ed(0x3dc)](_0x53d9ed(0x167), function(_0x7b7ef8) {
        var _0x3bc9c5 = _0x53d9ed;
        playSound(_0x3bc9c5(0x3c9)), checkQuickGameMode();
    }), buttonPlayersL[_0x53d9ed(0x2b8)] = _0x53d9ed(0x392), buttonPlayersL[_0x53d9ed(0x3dc)](_0x53d9ed(0x167), function(_0x2b2a86) {
        var _0x42ef24 = _0x53d9ed;
        playSound(_0x42ef24(0x3c9)), toggleTotalPlayers(![]);
    }), buttonPlayersR[_0x53d9ed(0x2b8)] = _0x53d9ed(0x392), buttonPlayersR[_0x53d9ed(0x3dc)](_0x53d9ed(0x167), function(_0x2404bd) {
        playSound('soundButton'), toggleTotalPlayers(!![]);
    }), buttonPointsL['cursor'] = _0x53d9ed(0x392), buttonPointsL[_0x53d9ed(0x3dc)](_0x53d9ed(0x167), function(_0x5daea7) {
        var _0x299480 = _0x53d9ed;
        playSound(_0x299480(0x3c9)), togglePoints(![]);
    }), buttonPointsR[_0x53d9ed(0x2b8)] = _0x53d9ed(0x392), buttonPointsR['addEventListener'](_0x53d9ed(0x167), function(_0x5c816a) {
        var _0x4831dc = _0x53d9ed;
        playSound(_0x4831dc(0x3c9)), togglePoints(!![]);
    }), buttonTypeL[_0x53d9ed(0x2b8)] = _0x53d9ed(0x392), buttonTypeL[_0x53d9ed(0x3dc)](_0x53d9ed(0x167), function(_0x4d18c3) {
        playSound('soundButton'), toggleGameType(![]);
    }), buttonTypeR['cursor'] = 'pointer', buttonTypeR[_0x53d9ed(0x3dc)](_0x53d9ed(0x167), function(_0x47e7cb) {
        playSound('soundButton'), toggleGameType(!![]);
    }), buttonThemeL[_0x53d9ed(0x2b8)] = _0x53d9ed(0x392), buttonThemeL[_0x53d9ed(0x3dc)](_0x53d9ed(0x167), function(_0x2ad54e) {
        var _0x5f324e = _0x53d9ed;
        playSound(_0x5f324e(0x3c9)), toggleTheme(![]);
    }), buttonThemeR[_0x53d9ed(0x2b8)] = _0x53d9ed(0x392), buttonThemeR[_0x53d9ed(0x3dc)](_0x53d9ed(0x167), function(_0x2c996d) {
        var _0x5433e5 = _0x53d9ed;
        playSound(_0x5433e5(0x3c9)), toggleTheme(!![]);
    }), buttonTutorialL[_0x53d9ed(0x2b8)] = _0x53d9ed(0x392), buttonTutorialL[_0x53d9ed(0x3dc)](_0x53d9ed(0x167), function(_0xdbf187) {
        var _0x2d922c = _0x53d9ed;
        playSound(_0x2d922c(0x3c9)), toggleTutorial(![]);
    }), buttonTutorialR['cursor'] = _0x53d9ed(0x392), buttonTutorialR['addEventListener'](_0x53d9ed(0x167), function(_0x545cde) {
        var _0x4be956 = _0x53d9ed;
        playSound(_0x4be956(0x3c9)), toggleTutorial(!![]);
    }), buttonNext[_0x53d9ed(0x2b8)] = _0x53d9ed(0x392), buttonNext[_0x53d9ed(0x3dc)](_0x53d9ed(0x167), function(_0x2bbe76) {
        playSound('soundButton'), toggleCardsOptions(0x2);
    }), buttonTutorial[_0x53d9ed(0x2b8)] = _0x53d9ed(0x392), buttonTutorial[_0x53d9ed(0x3dc)](_0x53d9ed(0x167), function(_0x205732) {
        var _0x3e5df2 = _0x53d9ed;
        playSound(_0x3e5df2(0x3c9)), toggleCardsOptions(0x3);
    }), buttonBack[_0x53d9ed(0x2b8)] = _0x53d9ed(0x392), buttonBack['addEventListener'](_0x53d9ed(0x167), function(_0x3497fe) {
        var _0x41f946 = _0x53d9ed;
        playSound(_0x41f946(0x3c9)), toggleCardsOptions(gameData[_0x41f946(0x14d)]);
    }), buttonStart[_0x53d9ed(0x2b8)] = _0x53d9ed(0x392), buttonStart[_0x53d9ed(0x3dc)](_0x53d9ed(0x167), function(_0x413850) {
        var _0x4c709d = _0x53d9ed;
        playSound(_0x4c709d(0x3c9)), typeof initSocket == _0x4c709d(0x1a8) && multiplayerSettings[_0x4c709d(0x30b)] && socketData[_0x4c709d(0x3d3)] ? postSocketUpdate(_0x4c709d(0x1fb)) : goPage('game');
    }), itemExit[_0x53d9ed(0x3dc)](_0x53d9ed(0x167), function(_0x353ce8) {});
    if (shareSettings[_0x53d9ed(0x30b)]) {
        buttonShare[_0x53d9ed(0x2b8)] = 'pointer', buttonShare[_0x53d9ed(0x3dc)](_0x53d9ed(0x167), function(_0x48e890) {
            var _0x134b9d = _0x53d9ed;
            playSound(_0x134b9d(0x3c9)), toggleSocialShare(!![]);
        });
        for (let _0x34f52f = 0x0; _0x34f52f < shareSettings[_0x53d9ed(0x3e6)]['length']; _0x34f52f++) {
            $[_0x53d9ed(0x125)][_0x53d9ed(0x243) + _0x34f52f][_0x53d9ed(0x2b8)] = _0x53d9ed(0x392), $[_0x53d9ed(0x125)][_0x53d9ed(0x243) + _0x34f52f]['addEventListener'](_0x53d9ed(0x167), function(_0x1cde5b) {
                var _0x25180b = _0x53d9ed;
                shareLinks(_0x1cde5b[_0x25180b(0x1bb)][_0x25180b(0x297)], addCommas(playerData['score']));
            });
        }
    }
    buttonContinue[_0x53d9ed(0x2b8)] = _0x53d9ed(0x392), buttonContinue[_0x53d9ed(0x3dc)]('click', function(_0x305da1) {
        var _0x5ed370 = _0x53d9ed;
        playSound(_0x5ed370(0x3c9)), typeof initSocket == 'function' && multiplayerSettings['enable'] && socketData['online'] && multiplayerSettings[_0x5ed370(0x319)] ? (goPage(_0x5ed370(0x261)), $(_0x5ed370(0x2fe))['val'](socketData['lastRoom']), joinSocketRoom()) : goPage(_0x5ed370(0x2ed));
    }), buttonSoundOff[_0x53d9ed(0x2b8)] = _0x53d9ed(0x392), buttonSoundOff[_0x53d9ed(0x3dc)](_0x53d9ed(0x167), function(_0x46c7a2) {
        toggleSoundMute(!![]);
    }), buttonSoundOn[_0x53d9ed(0x2b8)] = _0x53d9ed(0x392), buttonSoundOn[_0x53d9ed(0x3dc)]('click', function(_0x19f60c) {
        toggleSoundMute(![]);
    });
    typeof buttonMusicOff != _0x53d9ed(0x1ec) && (buttonMusicOff[_0x53d9ed(0x2b8)] = _0x53d9ed(0x392), buttonMusicOff[_0x53d9ed(0x3dc)](_0x53d9ed(0x167), function(_0x5ca7da) {
        toggleMusicMute(!![]);
    }));
    typeof buttonMusicOn != _0x53d9ed(0x1ec) && (buttonMusicOn[_0x53d9ed(0x2b8)] = _0x53d9ed(0x392), buttonMusicOn[_0x53d9ed(0x3dc)](_0x53d9ed(0x167), function(_0x281303) {
        toggleMusicMute(![]);
    }));
    buttonFullscreen[_0x53d9ed(0x2b8)] = _0x53d9ed(0x392), buttonFullscreen[_0x53d9ed(0x3dc)](_0x53d9ed(0x167), function(_0x58f588) {
        toggleFullScreen();
    }), buttonExit[_0x53d9ed(0x2b8)] = 'pointer', buttonExit[_0x53d9ed(0x3dc)]('click', function(_0x3a0dee) {
        togglePop(!![]), toggleOptions();
    }), buttonSettings[_0x53d9ed(0x2b8)] = _0x53d9ed(0x392), buttonSettings[_0x53d9ed(0x3dc)]('click', function(_0x2db6a2) {
        toggleOptions();
    }), buttonConfirm[_0x53d9ed(0x2b8)] = _0x53d9ed(0x392), buttonConfirm['addEventListener'](_0x53d9ed(0x167), function(_0x4b9001) {
        var _0x561b02 = _0x53d9ed;
        playSound(_0x561b02(0x3c9)), togglePop(![]), stopSound();;
        stopGame(), goPage(_0x561b02(0x2ed)), typeof initSocket == 'function' && multiplayerSettings['enable'] && socketData[_0x561b02(0x3d3)] && exitSocketRoom();
    }), buttonCancel[_0x53d9ed(0x2b8)] = 'pointer', buttonCancel[_0x53d9ed(0x3dc)](_0x53d9ed(0x167), function(_0x44d370) {
        playSound('soundButton'), togglePop(![]);
    }), window[_0x53d9ed(0x3dc)](_0x53d9ed(0x37c), function() {
        var _0x3c437f = _0x53d9ed;
        TweenMax[_0x3c437f(0x29f)][_0x3c437f(0x1ab)](![]);
    }, ![]), window[_0x53d9ed(0x3dc)]('focus', function() {
        var _0x192b42 = _0x53d9ed;
        TweenMax[_0x192b42(0x29f)]['useRAF'](!![]);
    }, ![]);
    for (var _0x360399 = 0x0; _0x360399 < 0x4; _0x360399++) {
        $[_0x53d9ed(0x13c)][_0x360399][_0x53d9ed(0x287)] = _0x360399, $[_0x53d9ed(0x13c)][_0x360399][_0x53d9ed(0x2b8)] = 'pointer', $[_0x53d9ed(0x13c)][_0x360399][_0x53d9ed(0x3dc)](_0x53d9ed(0x167), function(_0x4b1e2e) {
            var _0x279818 = _0x53d9ed,
                _0xaaf209 = checkIsPlayer(gameData['player']);
            _0xaaf209 && (typeof initSocket == 'function' && multiplayerSettings[_0x279818(0x30b)] && socketData[_0x279818(0x3d3)] && postSocketUpdate(_0x279818(0x23c), gameData[_0x279818(0x13c)][_0x4b1e2e[_0x279818(0x1bb)][_0x279818(0x287)]], !![]), gameData['match']['value'] = 0x0, gameData[_0x279818(0x1d1)][_0x279818(0x384)] = gameData[_0x279818(0x13c)][_0x4b1e2e[_0x279818(0x1bb)]['colorIndex']], toggleColors(![]), getMatchDetail(), checkRoundEnd());
        });
    }
    gameData[_0x53d9ed(0x1e1)] = {
        'maxPlayers': 0x4,
        'minPlayers': 0x2,
        'special': ![],
        'point': 0x14
    }, gameData[_0x53d9ed(0x3fe)] = gameData[_0x53d9ed(0x1e1)][_0x53d9ed(0x2b1)], gameData[_0x53d9ed(0x2dc)] = 0x0, gameData['themeIndex'] = 0x0, gameData['lastThemeIndex'] = -0x1, gameData[_0x53d9ed(0x14d)] = 0x1, gameData[_0x53d9ed(0x278)] = 0x1, displayCardsOptions();
}

function checkIsPlayer(_0xfbc740) {
    var _0x33eba4 = a0_0x45d961,
        _0x31dba9 = ![];
    return typeof initSocket == _0x33eba4(0x1a8) && multiplayerSettings['enable'] && socketData['online'] ? _0xfbc740 == socketData[_0x33eba4(0x368)] && (_0x31dba9 = !![]) : _0xfbc740 == 0x0 && (_0x31dba9 = !![]), _0x31dba9;
}

function toggleMainButton(_0x5f2884) {
    var _0x1142c2 = a0_0x45d961;
    typeof initSocket == _0x1142c2(0x1a8) && multiplayerSettings[_0x1142c2(0x30b)] && (gameLogsTxt[_0x1142c2(0x3ab)] = !![], gameLogsTxt[_0x1142c2(0x290)] = '');
    buttonPlay[_0x1142c2(0x3ab)] = ![], buttonLocalContainer[_0x1142c2(0x3ab)] = ![];
    if (_0x5f2884 == _0x1142c2(0x1b4)) buttonPlay['visible'] = !![];
    else _0x5f2884 == _0x1142c2(0x1a0) && (buttonLocalContainer[_0x1142c2(0x3ab)] = !![]);
}

function checkQuickGameMode() {
    var _0x1fdf68 = a0_0x45d961;
    socketData[_0x1fdf68(0x3d3)] = !![], !multiplayerSettings['enterName'] ? (buttonPlay[_0x1fdf68(0x3ab)] = ![], buttonLocalContainer['visible'] = ![], addSocketRandomUser()) : goPage(_0x1fdf68(0x389));
}

function toggleTotalPlayers(_0x52efce) {
    var _0x32c5d1 = a0_0x45d961;
    _0x52efce ? (gameData['players']++, gameData['players'] = gameData[_0x32c5d1(0x3fe)] > gameData[_0x32c5d1(0x1e1)][_0x32c5d1(0x26c)] ? gameData[_0x32c5d1(0x1e1)][_0x32c5d1(0x26c)] : gameData['players']) : (gameData['players']--, gameData[_0x32c5d1(0x3fe)] = gameData[_0x32c5d1(0x3fe)] < gameData[_0x32c5d1(0x1e1)]['minPlayers'] ? gameData[_0x32c5d1(0x1e1)][_0x32c5d1(0x2b1)] : gameData[_0x32c5d1(0x3fe)]), updateCardsOption();
}

function togglePoints(_0x24f5c3) {
    var _0x1c4055 = a0_0x45d961;
    _0x24f5c3 ? (gameData[_0x1c4055(0x2dc)]++, gameData[_0x1c4055(0x2dc)] = gameData[_0x1c4055(0x2dc)] > gameSettings[_0x1c4055(0x2aa)][_0x1c4055(0x2ee)] - 0x1 ? gameSettings[_0x1c4055(0x2aa)]['length'] - 0x1 : gameData['pointIndex']) : (gameData[_0x1c4055(0x2dc)]--, gameData[_0x1c4055(0x2dc)] = gameData[_0x1c4055(0x2dc)] < 0x0 ? 0x0 : gameData[_0x1c4055(0x2dc)]), updateCardsOption();
}

function toggleGameType(_0x4d6cb2) {
    gameData['fourcolors']['special'] = _0x4d6cb2, updateCardsOption();
}

function toggleTheme(_0x481bb9) {
    var _0x42d249 = a0_0x45d961;
    _0x481bb9 ? (gameData[_0x42d249(0x24f)]++, gameData[_0x42d249(0x24f)] = gameData[_0x42d249(0x24f)] > themes_arr[_0x42d249(0x2ee)] - 0x1 ? themes_arr[_0x42d249(0x2ee)] - 0x1 : gameData[_0x42d249(0x24f)]) : (gameData['themeIndex']--, gameData[_0x42d249(0x24f)] = gameData['themeIndex'] < 0x0 ? 0x0 : gameData[_0x42d249(0x24f)]), updateCardsOption();
}

function updateCardsOption() {
    var _0x2b312b = a0_0x45d961;
    displayCardsOptions(), typeof initSocket == _0x2b312b(0x1a8) && multiplayerSettings[_0x2b312b(0x30b)] && socketData['online'] && (socketData[_0x2b312b(0x367)] && postSocketUpdate(_0x2b312b(0x159), {
        'pointIndex': gameData[_0x2b312b(0x2dc)],
        'special': gameData['fourcolors'][_0x2b312b(0x208)],
        'themeIndex': gameData[_0x2b312b(0x24f)],
        'option': gameData[_0x2b312b(0x14d)]
    }, !![]));
}

function displayCardsOptions() {
    var _0x5c10cc = a0_0x45d961;
    totalPlayersTxt['text'] = textStrings['totalPlayers'][_0x5c10cc(0x3d4)](_0x5c10cc(0x1bc), gameData[_0x5c10cc(0x3fe)]), pointsTxt[_0x5c10cc(0x290)] = textStrings[_0x5c10cc(0x39c)][_0x5c10cc(0x3d4)](_0x5c10cc(0x1bc), gameSettings[_0x5c10cc(0x2aa)][gameData['pointIndex']]), typeTxt['text'] = gameData[_0x5c10cc(0x1e1)][_0x5c10cc(0x208)] == !![] ? textStrings[_0x5c10cc(0x35c)][0x1] : textStrings[_0x5c10cc(0x35c)][0x0], gameData[_0x5c10cc(0x1e1)][_0x5c10cc(0x320)] = gameSettings[_0x5c10cc(0x2aa)][gameData['pointIndex']], gameData[_0x5c10cc(0x1f5)] != gameData[_0x5c10cc(0x24f)] && (buildCards(), gameData[_0x5c10cc(0x1f5)] = gameData[_0x5c10cc(0x24f)], themeContainer[_0x5c10cc(0x17b)](), shuffle(gameData[_0x5c10cc(0x103)]), gameData[_0x5c10cc(0x2f6)] = gameData[_0x5c10cc(0x103)][0x0]['frontContainer'][_0x5c10cc(0x323)](!![]), gameData[_0x5c10cc(0x399)] = gameData[_0x5c10cc(0x103)][0x0][_0x5c10cc(0x3d8)][_0x5c10cc(0x323)](!![]), themeContainer[_0x5c10cc(0x27b)](gameData[_0x5c10cc(0x2f6)], gameData[_0x5c10cc(0x399)]), flipOptionCard());
}

function flipOptionCard() {
    var _0x41cff8 = a0_0x45d961;
    curPage == 'options' && playSound(_0x41cff8(0x20b));
    gameData[_0x41cff8(0x2f6)]['visible'] = gameData['cardContent'][_0x41cff8(0x3ab)] = !![], gameData[_0x41cff8(0x2f6)]['scaleX'] = gameData[_0x41cff8(0x2f6)][_0x41cff8(0x38e)] = gameData[_0x41cff8(0x399)][_0x41cff8(0x1c2)] = gameData['cardContent'][_0x41cff8(0x38e)] = 1.3, gameData[_0x41cff8(0x399)]['scaleX'] = 0x0;
    var _0xed47bb = gameSettings['cardFlipSpeed'];
    TweenMax['to'](gameData[_0x41cff8(0x2f6)], _0xed47bb, {
        'delay': _0xed47bb,
        'scaleX': 0x0
    }), TweenMax['to'](gameData['cardContent'], _0xed47bb, {
        'delay': _0xed47bb * 0x2,
        'scaleX': 1.3
    });
}

function toggleCardsOptions(_0x3216f7) {
    var _0x30b030 = a0_0x45d961;
    itemPlayerNumbers[_0x30b030(0x3ab)] = ![], totalPlayersTxt[_0x30b030(0x3ab)] = ![], buttonPlayersL[_0x30b030(0x3ab)] = ![], buttonPlayersR['visible'] = ![], itemPoints[_0x30b030(0x3ab)] = ![], pointsTxt[_0x30b030(0x3ab)] = ![], buttonPointsL[_0x30b030(0x3ab)] = ![], buttonPointsR[_0x30b030(0x3ab)] = ![], itemType[_0x30b030(0x3ab)] = ![], typeTxt['visible'] = ![], buttonTypeL['visible'] = ![], buttonTypeR[_0x30b030(0x3ab)] = ![], themeContainer[_0x30b030(0x3ab)] = ![], buttonThemeL[_0x30b030(0x3ab)] = ![], buttonThemeR[_0x30b030(0x3ab)] = ![], buttonNext[_0x30b030(0x3ab)] = ![], buttonStart['visible'] = ![], buttonTutorial[_0x30b030(0x3ab)] = ![], cardsOptionsListContainer[_0x30b030(0x3ab)] = ![], buttonTutorialL[_0x30b030(0x3ab)] = ![], buttonTutorialR[_0x30b030(0x3ab)] = ![], buttonBack[_0x30b030(0x3ab)] = ![], cardsOptionsTutorialContainer['visible'] = ![];
    if (_0x3216f7 == 0x1) gameData[_0x30b030(0x14d)] = 0x1, cardsOptionsListContainer[_0x30b030(0x3ab)] = !![], itemPlayerNumbers['visible'] = !![], totalPlayersTxt[_0x30b030(0x3ab)] = !![], buttonPlayersL[_0x30b030(0x3ab)] = !![], buttonPlayersR[_0x30b030(0x3ab)] = !![], itemPoints['visible'] = !![], pointsTxt[_0x30b030(0x3ab)] = !![], buttonPointsL[_0x30b030(0x3ab)] = !![], buttonPointsR[_0x30b030(0x3ab)] = !![], itemType[_0x30b030(0x3ab)] = !![], typeTxt['visible'] = !![], buttonTypeL['visible'] = !![], buttonTypeR[_0x30b030(0x3ab)] = !![], buttonNext[_0x30b030(0x3ab)] = !![], buttonTutorial[_0x30b030(0x3ab)] = !![], typeof initSocket == _0x30b030(0x1a8) && multiplayerSettings[_0x30b030(0x30b)] && socketData[_0x30b030(0x3d3)] && (buttonPlayersL[_0x30b030(0x3ab)] = ![], buttonPlayersR['visible'] = ![], !socketData[_0x30b030(0x367)] && (buttonPointsL['visible'] = ![], buttonPointsR[_0x30b030(0x3ab)] = ![], buttonTypeL[_0x30b030(0x3ab)] = ![], buttonTypeR[_0x30b030(0x3ab)] = ![], buttonNext[_0x30b030(0x3ab)] = ![], buttonTutorial[_0x30b030(0x3ab)] = ![]));
    else {
        if (_0x3216f7 == 0x2) gameData[_0x30b030(0x14d)] = 0x2, cardsOptionsListContainer[_0x30b030(0x3ab)] = !![], themeContainer[_0x30b030(0x3ab)] = !![], buttonThemeL['visible'] = !![], buttonThemeR[_0x30b030(0x3ab)] = !![], buttonStart[_0x30b030(0x3ab)] = !![], buttonTutorial['visible'] = !![], typeof initSocket == _0x30b030(0x1a8) && multiplayerSettings[_0x30b030(0x30b)] && socketData[_0x30b030(0x3d3)] && (!socketData['host'] && (buttonThemeL[_0x30b030(0x3ab)] = ![], buttonThemeR[_0x30b030(0x3ab)] = ![], buttonStart[_0x30b030(0x3ab)] = ![], buttonTutorial[_0x30b030(0x3ab)] = ![])), flipOptionCard();
        else _0x3216f7 == 0x3 && (cardsOptionsTutorialContainer[_0x30b030(0x3ab)] = !![], buttonTutorialL[_0x30b030(0x3ab)] = !![], buttonTutorialR[_0x30b030(0x3ab)] = !![], buttonBack[_0x30b030(0x3ab)] = !![], displayTutorial());
    }
    updateCardsOption(), resizeGameLayout();
}

function toggleTutorial(_0x459521) {
    var _0x3f28f8 = a0_0x45d961;
    _0x459521 ? (gameData[_0x3f28f8(0x278)]++, gameData[_0x3f28f8(0x278)] = gameData[_0x3f28f8(0x278)] > 0xf ? 0xf : gameData['tutorial']) : (gameData[_0x3f28f8(0x278)]--, gameData[_0x3f28f8(0x278)] = gameData[_0x3f28f8(0x278)] < 0x1 ? 0x1 : gameData[_0x3f28f8(0x278)]), displayTutorial();
}

function displayTutorial() {
    var _0x11b8c2 = a0_0x45d961;
    for (var _0x1d8d96 = 0x0; _0x1d8d96 < 0xf; _0x1d8d96++) {
        $[_0x11b8c2(0x278)][_0x1d8d96][_0x11b8c2(0x3ab)] = ![];
    }
    $[_0x11b8c2(0x278)][gameData[_0x11b8c2(0x278)] - 0x1]['visible'] = !![], tutorialPageTxt['text'] = gameData[_0x11b8c2(0x278)] + _0x11b8c2(0x28c), buttonTutorialL[_0x11b8c2(0x3ab)] = !![], buttonTutorialR[_0x11b8c2(0x3ab)] = !![], gameData[_0x11b8c2(0x278)] == 0x1 && (buttonTutorialL['visible'] = ![]), gameData[_0x11b8c2(0x278)] == 0xf && (buttonTutorialR[_0x11b8c2(0x3ab)] = ![]);
}

function resizeSocketLog() {
    var _0x13b366 = a0_0x45d961;
    if (curPage == 'main') viewport[_0x13b366(0x3ea)] ? (gameLogsTxt['x'] = canvasW / 0x2, gameLogsTxt['y'] = canvasH / 0x64 * 0x4b) : (gameLogsTxt['x'] = canvasW / 0x2, gameLogsTxt['y'] = canvasH / 0x64 * 0x4b);
    else curPage == 'options' && (viewport[_0x13b366(0x3ea)] ? (gameLogsTxt['x'] = canvasW / 0x2, gameLogsTxt['y'] = canvasH / 0x64 * 0x46) : (gameLogsTxt['x'] = canvasW / 0x2, gameLogsTxt['y'] = canvasH / 0x64 * 0x41));
}

function toggleSocialShare(_0x2ecea5) {
    var _0xac9947 = a0_0x45d961;
    if (!shareSettings[_0xac9947(0x30b)]) return;
    buttonShare[_0xac9947(0x3ab)] = _0x2ecea5 == !![] ? ![] : !![], shareSaveContainer[_0xac9947(0x3ab)] = _0x2ecea5 == !![] ? ![] : !![], socialContainer[_0xac9947(0x3ab)] = _0x2ecea5, _0x2ecea5 && (typeof buttonSave !== _0xac9947(0x1ec) && TweenMax['to'](buttonShare, 0x3, {
        'overwrite': !![],
        'onComplete': toggleSocialShare,
        'onCompleteParams': [![]]
    }));
}

function positionShareButtons() {
    var _0x14f107 = a0_0x45d961;
    if (!shareSettings['enable']) return;
    typeof buttonShare !== 'undefined' && (typeof buttonSave !== _0x14f107(0x1ec) && (buttonSave[_0x14f107(0x3ab)] ? (buttonShare['x'] = -(buttonShare[_0x14f107(0x16b)][_0x14f107(0x2b2)] / 0x2 + 0x5), buttonSave['x'] = buttonShare[_0x14f107(0x16b)][_0x14f107(0x2b2)] / 0x2 + 0x5) : buttonShare['x'] = 0x0));
}

function togglePop(_0x199145) {
    var _0x257ea8 = a0_0x45d961;
    exitContainer[_0x257ea8(0x3ab)] = _0x199145, typeof initSocket == _0x257ea8(0x1a8) && multiplayerSettings[_0x257ea8(0x30b)] && socketData[_0x257ea8(0x3d3)] && ((curPage == 'name' || curPage == _0x257ea8(0x261)) && (_0x199145 ? $('#roomWrapper')[_0x257ea8(0x2f9)]() : $(_0x257ea8(0x3fb))[_0x257ea8(0x33f)]()));
}
var curPage = '';

function goPage(_0x4cf921) {
    var _0x3e3b0a = a0_0x45d961;
    curPage = _0x4cf921, $('#roomWrapper')[_0x3e3b0a(0x2f9)](), $(_0x3e3b0a(0x2fb))[_0x3e3b0a(0x2f9)](), gameLogsTxt[_0x3e3b0a(0x3ab)] = ![], mainContainer[_0x3e3b0a(0x3ab)] = ![], nameContainer['visible'] = ![], roomContainer[_0x3e3b0a(0x3ab)] = ![], cardsOptionsContainer[_0x3e3b0a(0x3ab)] = ![], gameContainer[_0x3e3b0a(0x3ab)] = ![], resultContainer[_0x3e3b0a(0x3ab)] = ![], togglePop(![]), toggleOptions(![]);
    var _0x1d7ee1 = null;
    switch (_0x4cf921) {
        case _0x3e3b0a(0x2ed):
            _0x1d7ee1 = mainContainer;
            typeof initSocket == _0x3e3b0a(0x1a8) && multiplayerSettings[_0x3e3b0a(0x30b)] && (socketData[_0x3e3b0a(0x3d3)] = ![]);
            toggleMainButton(_0x3e3b0a(0x1b4)), playMusicLoop(_0x3e3b0a(0x178));
            break;
        case 'name':
            _0x1d7ee1 = nameContainer, $(_0x3e3b0a(0x3fb))['show'](), $(_0x3e3b0a(0xfa))[_0x3e3b0a(0x33f)](), $(_0x3e3b0a(0x113))['html'](''), $('#enterName')[_0x3e3b0a(0x33f)]();
            break;
        case _0x3e3b0a(0x261):
            _0x1d7ee1 = roomContainer, $('#roomWrapper')[_0x3e3b0a(0x33f)](), $(_0x3e3b0a(0x1a4))[_0x3e3b0a(0x33f)](), switchSocketRoomContent('lists');
            break;
        case _0x3e3b0a(0x3e6):
            _0x1d7ee1 = cardsOptionsContainer, toggleCardsOptions(0x1);
            break;
        case _0x3e3b0a(0x18c):
            _0x1d7ee1 = gameContainer, playMusicLoop(_0x3e3b0a(0x20e)), stopMusicLoop(_0x3e3b0a(0x178)), startGame();
            break;
        case _0x3e3b0a(0x25b):
            _0x1d7ee1 = resultContainer, stopGame(), toggleSocialShare(![]), playMusicLoop(_0x3e3b0a(0x178)), stopMusicLoop(_0x3e3b0a(0x20e)), playSound(_0x3e3b0a(0x410)), tweenData['tweenScore'] = 0x0;
            typeof initSocket == _0x3e3b0a(0x1a8) && multiplayerSettings[_0x3e3b0a(0x30b)] && socketData[_0x3e3b0a(0x3d3)] ? (playerData[_0x3e3b0a(0x102)] = playerData[_0x3e3b0a(0x1af)][socketData[_0x3e3b0a(0x368)]], socketData[_0x3e3b0a(0x367)] ? postSocketCloseRoom() : exitSocketRoom()) : playerData['score'] = playerData[_0x3e3b0a(0x1af)][0x0];
            tweenData[_0x3e3b0a(0x193)] = 0x0, TweenMax['to'](tweenData, 0.5, {
                'tweenScore': playerData[_0x3e3b0a(0x102)],
                'overwrite': !![],
                'onUpdate': function() {
                    var _0x2aa62c = _0x3e3b0a;
                    resultDescTxt['text'] = textStrings[_0x2aa62c(0x1e9)][_0x2aa62c(0x3d4)]('[NUMBER]', addCommas(Math['floor'](tweenData[_0x2aa62c(0x193)])));
                }
            }), saveGame(playerData['score']);
            break;
    }
    _0x1d7ee1 != null && (_0x1d7ee1[_0x3e3b0a(0x3ab)] = !![], _0x1d7ee1[_0x3e3b0a(0x1ff)] = 0x0, TweenMax['to'](_0x1d7ee1, 0.5, {
        'alpha': 0x1,
        'overwrite': !![]
    })), resizeCanvas();
}

function startGame() {
    var _0x35886f = a0_0x45d961;
    gameData['paused'] = ![], playerData[_0x35886f(0x1af)] = [];
    for (var _0x484f8a = 0x0; _0x484f8a < gameData[_0x35886f(0x3fe)]; _0x484f8a++) {
        playerData[_0x35886f(0x1af)][_0x35886f(0x175)](0x0);
    }
    startCards();
}

function startCards() {
    var _0x4c8077 = a0_0x45d961;
    itemColors[_0x4c8077(0x1ff)] = 0x0, itemFrozen['alpha'] = 0x0, statusContainer[_0x4c8077(0x1ff)] = 0x0, guideContainer['alpha'] = 0x0, toggleRoundScore(![]), toggleColors(![]), prepareCards(), gameData[_0x4c8077(0x1cc)] = gameData[_0x4c8077(0x3fe)], typeof initSocket == _0x4c8077(0x1a8) && multiplayerSettings[_0x4c8077(0x30b)] && socketData[_0x4c8077(0x3d3)] ? (gameData['ai'] = ![], postSocketUpdate(_0x4c8077(0x2fa), socketData[_0x4c8077(0x368)])) : (gameData['ai'] = !![], preparePlayers());
}

function stopGame() {
    var _0x387285 = a0_0x45d961;
    gameData[_0x387285(0x2d3)] = !![], TweenMax[_0x387285(0x27e)](![], !![], ![]);
}

function saveGame(_0x562896) {
    var _0x48a49b = a0_0x45d961;
    typeof toggleScoreboardSave == _0x48a49b(0x1a8) && ($['scoreData'][_0x48a49b(0x102)] = _0x562896, typeof type != _0x48a49b(0x1ec) && ($[_0x48a49b(0x2c0)][_0x48a49b(0x245)] = type), toggleScoreboardSave(!![]));
}

function resizeGameLayout() {
    var _0x428dc9 = a0_0x45d961;
    if (curPage == _0x428dc9(0x18c)) {
        statusContainer['x'] = cardScoreContainer['x'] = colorsContainer['x'] = canvasW / 0x2, statusContainer['y'] = cardScoreContainer['y'] = colorsContainer['y'] = canvasH / 0x2, guideContainer['x'] = canvasW / 0x2, guideContainer['y'] = canvasH / 0x64 * 0x3c, itemColors['x'] = itemFrozen['x'] = canvasW / 0x2 + 0x96, itemColors['y'] = itemFrozen['y'] = canvasH / 0x2;
        if (!gameData['prepared']) return;
        var _0x2a9366 = [{
            'x': canvasW / 0x2,
            'y': canvasH / 0x64 * 0x52,
            'horizontal': !![],
            'dir': _0x428dc9(0x2d5)
        }, {
            'x': canvasW / 0x2,
            'y': canvasH / 0x64 * 0x12,
            'horizontal': !![],
            'dir': _0x428dc9(0x1ad)
        }, {
            'x': canvasW / 0x64 * 0xe,
            'y': canvasH / 0x2,
            'horizontal': ![],
            'dir': 'left'
        }, {
            'x': canvasW / 0x64 * 0x56,
            'y': canvasH / 0x2,
            'horizontal': ![],
            'dir': _0x428dc9(0x321)
        }];
        !viewport[_0x428dc9(0x3ea)] && (itemColors['x'] = itemFrozen['x'] = canvasW / 0x2, itemColors['y'] = itemFrozen['y'] = canvasH / 0x2 - 0x78, _0x2a9366 = [{
            'x': canvasW / 0x2,
            'y': canvasH / 0x64 * 0x54,
            'horizontal': !![],
            'dir': _0x428dc9(0x2d5)
        }, {
            'x': canvasW / 0x2,
            'y': canvasH / 0x64 * 0x10,
            'horizontal': !![],
            'dir': 'top'
        }, {
            'x': canvasW / 0x64 * 0x11,
            'y': canvasH / 0x2,
            'horizontal': ![],
            'dir': _0x428dc9(0x2d4)
        }, {
            'x': canvasW / 0x64 * 0x53,
            'y': canvasH / 0x2,
            'horizontal': ![],
            'dir': 'right'
        }]);
        var _0x1d5975 = [];
        gameData[_0x428dc9(0x3fe)] == 0x2 ? _0x1d5975 = [0x0, 0x1] : _0x1d5975 = [0x0, 0x2, 0x1, 0x3];
        for (var _0xde21b6 = 0x0; _0xde21b6 < gameData[_0x428dc9(0x3fe)]; _0xde21b6++) {
            var _0x1775cf = gameData[_0x428dc9(0x116)][_0xde21b6];
            $[_0x428dc9(0x3fe)][_0x1775cf]['x'] = _0x2a9366[_0x1d5975[_0xde21b6]]['x'], $[_0x428dc9(0x3fe)][_0x1775cf]['y'] = _0x2a9366[_0x1d5975[_0xde21b6]]['y'], $[_0x428dc9(0x3fe)][_0x1775cf][_0x428dc9(0x3b1)] = _0x2a9366[_0x1d5975[_0xde21b6]][_0x428dc9(0x3b1)], $[_0x428dc9(0x3fe)][_0x1775cf]['horizontal'] = _0x2a9366[_0x1d5975[_0xde21b6]]['horizontal'];
        }
        checkPlayerCardsAnimation();
    }
}

function buildCards() {
    var _0x265d20 = a0_0x45d961;
    cardsPlayContainer[_0x265d20(0x17b)](), gameData[_0x265d20(0x18a)] = [], gameData[_0x265d20(0x173)] = [], gameData[_0x265d20(0x34e)] = [], gameData['excludeMatch'] = [], gameData[_0x265d20(0x231)] = [], gameData['cards'] = [], gameData['cardNum'] = 0x0;
    for (var _0x1bd90e = 0x0; _0x1bd90e < gameData['colors'][_0x265d20(0x2ee)]; _0x1bd90e++) {
        for (var _0x1130d0 = 0x0; _0x1130d0 < cards_arr[_0x265d20(0x1a3)][_0x265d20(0x2ee)]; _0x1130d0++) {
            var _0x267996 = cards_arr[_0x265d20(0x1a3)][_0x1130d0],
                _0x4d0002 = createCard(_0x265d20(0x3e4) + gameData['themeIndex'] + '_' + gameData[_0x265d20(0x13c)][_0x1bd90e] + '_' + _0x267996, gameData[_0x265d20(0x13c)][_0x1bd90e]);
            _0x4d0002[_0x265d20(0x340)] = _0x265d20(0x2bc), _0x4d0002['cardColor'] = gameData[_0x265d20(0x13c)][_0x1bd90e], _0x4d0002[_0x265d20(0x2f0)] = _0x267996, _0x4d0002[_0x265d20(0x20d)] = _0x267996;
        }
        for (var _0x41a71f = 0x0; _0x41a71f < 0x2; _0x41a71f++) {
            for (var _0x1130d0 = 0x0; _0x1130d0 < cards_arr[_0x265d20(0x2e5)][_0x265d20(0x2ee)]; _0x1130d0++) {
                var _0x4d0002 = createCard(_0x265d20(0x16f) + gameData[_0x265d20(0x24f)] + '_' + gameData['colors'][_0x1bd90e] + '_' + _0x1130d0, gameData[_0x265d20(0x13c)][_0x1bd90e]);
                _0x4d0002[_0x265d20(0x340)] = cards_arr[_0x265d20(0x2e5)][_0x1130d0][_0x265d20(0x245)], _0x4d0002['cardColor'] = gameData['colors'][_0x1bd90e], _0x4d0002[_0x265d20(0x2f0)] = '', _0x4d0002[_0x265d20(0x20d)] = cards_arr[_0x265d20(0x2e5)][_0x1130d0][_0x265d20(0x320)], gameData['actionArr'][_0x265d20(0x175)](cards_arr[_0x265d20(0x2e5)][_0x1130d0][_0x265d20(0x245)]);
            }
        }
        for (var _0x1130d0 = 0x0; _0x1130d0 < cards_arr[_0x265d20(0x25c)]['length']; _0x1130d0++) {
            var _0x4d0002 = createCard('cardWilds' + gameData[_0x265d20(0x24f)] + '_' + _0x1130d0, '');
            _0x4d0002[_0x265d20(0x340)] = cards_arr[_0x265d20(0x25c)][_0x1130d0][_0x265d20(0x245)], _0x4d0002['cardColor'] = '', _0x4d0002[_0x265d20(0x2f0)] = '', _0x4d0002['cardPoint'] = cards_arr[_0x265d20(0x25c)][_0x1130d0][_0x265d20(0x320)], gameData[_0x265d20(0x173)][_0x265d20(0x175)](cards_arr[_0x265d20(0x25c)][_0x1130d0][_0x265d20(0x245)]), gameData[_0x265d20(0x249)]['push'](cards_arr['wilds'][_0x1130d0][_0x265d20(0x245)]), cards_arr[_0x265d20(0x25c)][_0x1130d0]['type'] == _0x265d20(0x221) && gameData[_0x265d20(0x231)]['push'](cards_arr[_0x265d20(0x25c)][_0x1130d0][_0x265d20(0x245)]);
        }
    }
    if (gameData[_0x265d20(0x1e1)][_0x265d20(0x208)])
        for (var _0x1130d0 = 0x0; _0x1130d0 < cards_arr['specials'][_0x265d20(0x2ee)]; _0x1130d0++) {
            var _0x4d0002 = createCard(_0x265d20(0x296) + gameData['themeIndex'] + '_' + _0x1130d0, '');
            _0x4d0002[_0x265d20(0x340)] = cards_arr[_0x265d20(0x37f)][_0x1130d0][_0x265d20(0x245)], _0x4d0002['cardColor'] = '', _0x4d0002['cardValue'] = '', _0x4d0002[_0x265d20(0x20d)] = cards_arr[_0x265d20(0x37f)][_0x1130d0][_0x265d20(0x320)], gameData['specialArr'][_0x265d20(0x175)](cards_arr[_0x265d20(0x37f)][_0x1130d0][_0x265d20(0x245)]), gameData[_0x265d20(0x249)][_0x265d20(0x175)](cards_arr[_0x265d20(0x37f)][_0x1130d0]['type']), gameData[_0x265d20(0x231)][_0x265d20(0x175)](cards_arr['specials'][_0x1130d0][_0x265d20(0x245)]);
        }
    gameData[_0x265d20(0x18a)] = removeDuplicates(gameData[_0x265d20(0x18a)]), gameData['wildArr'] = removeDuplicates(gameData[_0x265d20(0x173)]), gameData['specialArr'] = removeDuplicates(gameData[_0x265d20(0x34e)]), gameData[_0x265d20(0x249)] = removeDuplicates(gameData[_0x265d20(0x249)]);
}

function a0_0x52da() {
    var _0x161273 = ['playerWin', 'item', 'highlight', 'drawRect', 'SKIP\x20TURN', 'playerName', 'points', 'itemInstruction', 'min', 'assets/item_frozen.png', 'assets/logo_p.png', 'penaltyCards', 'TARGETING\x20PLAYERS', 'minPlayers', 'naturalWidth', 'random', 'css', 'itemPopP', 'playerTarget', 'playerPenalty', 'cursor', 'Shape', 'buttonSoundOn', 'PICK\x20COLORS', 'number', 'discard', 'assets/themes3/theme_blue_7.png', 'setChildIndex', 'scoreData', 'PENALTY\x202\x20CARDS', 'assets/button_music_off.png', 'assets/themes2/theme_yellow_reverse.png', 'textBaseline', 'playerIndex', 'played', 'removeClass', '13488QDzGkL', 'assets/themes3/theme_green_6.png', 'buttonTwitter', '&url=', 'assets/themes3/theme_yellow_5.png', 'DRAW\x202\x20CARDS\x20TO\x20TARGETED\x20PLAYER', 'linkedin', 'killTweensOf', '#mainLoader\x20span', 'assets/themes1/theme_truesight.png', 'buttonArrowLeft', 'paused', 'left', 'bottom', 'logo', 'assets/themes3/theme_yellow_2.png', 'setStrokeStyle', 'assets/themes1/theme_blue_reverse.png', 'assets/themes2/theme_green_skip.png', 'middle', 'pointIndex', 'assets/sounds/sound_winner.ogg', 'lastIndexOf', 'buttonLinkedin', 'update', 'playerScoreAdd', 'assets/themes2/theme_devildeal.png', '#roomLogs', 'swap', 'actions', 'aiThinkSpeed', 'assets/button_music_on.png', 'buttonNext', 'assets/item_tutorial_15.png', 'data', 'assets/themes3/theme_front.png', 'assets/themes2/theme_red_1.png', 'main', 'length', 'assets/themes2/theme_green_reverse.png', 'cardValue', '.resizeFont', 'webkitRequestFullscreen', '&text=', 'whatsapp', 'cardBg', 'cardFront', 'globalToLocal', 'itemTutorial8', 'hide', 'ready', '#roomWrapper\x20.innerContent', 'assets/themes1/theme_yellow_4.png', '[NAME]', '#roomlists', 'goalPointTitle', 'assets/themes3/theme_wilddraw.png', 'soundPoint', 'assets/button_call.png', 'assets/themes2/theme_blue_skip.png', 'charity', 'assets/item_status.png', '130TEvcMx', 'share.jpg', 'itemTutorial13', 'Container', 'assets/background_p.png', 'enable', 'reverseTurn', 'playerPickColor', 'obj', 'assets/themes2/theme_green_7.png', '4965110QmzchB', 'CLASSIC', 'assets/themes2/theme_yellow_3.png', 'targetPlayer', '[SCORE]', 'assets/themes3/theme_yellow_bg.png', 'context', 'assets/themes2/theme_red_2.png', 'assets/themes3/theme_blue_8.png', 'rejoinRoom', 'SELECT\x20TWO\x20CARDS', 'assets/themes2/theme_yellow_6.png', 'cardY', 'GAME\x20OVER', 'ALLOW_KEYBOARD_INPUT', 'assets/button_next.png', 'point', 'right', 'assets/icon_truesight.png', 'clone', 'draw3', 'regY', 'assets/button_called.png', 'assets/themes1/theme_yellow_9.png', 'drawCount', 'drawCard', 'mozFullScreenElement', 'assets/themes3/theme_truesight.png', 'YOU\x20WIN\x20THE\x20GAME', 'itemPop', 'assets/themes1/theme_blue_2.png', 'itemColors', 'assets/themes1/theme_green_4.png', 'lineHeight', 'DRAW\x20DROUGH', 'assets/themes3/theme_green_reverse.png', '22ZCCShn', '23px\x20bpreplaybold', 'maxW', 'lastPlayerIndex', 'atan2', 'itemTutorial', 'assets/item_skip.png', 'assets/themes1/theme_blue_bg.png', 'assets/icon_targeteddraw2.png', 'webkitFullscreenElement', 'cardColor', 'show', 'cardType', 'buttonAim', 'getMeasuredWidth', 'cardDealSpeed', 'cardShadow', 'assets/themes3/theme_red_3.png', 'giveCard', 'queue', 'play', 'itemArrowL', 'assets/button_sound_off.png', 'assets/themes2/theme_yellow_0.png', 'total', 'filter', 'specialArr', 'width', 'assets/themes1/theme_green_7.png', 'WILD\x20CARD', 'soundEliminated', 'assets/icon_oneforme.png', 'assets/themes1/theme_highlight.png', 'calltimer', 'animate', 'truesight', 'assets/themes1/theme_green_2.png', 'player', 'soundAction', 'assets/themes1/theme_yellow_skip.png', 'modes', 'tutorialTitle', 'NO\x20CARDS\x20LEFT', 'numChildren', 'soundColor', 'assets/themes3/theme_yellow_3.png', 'substring', 'playerTargeting', 'assets/themes3/theme_red_2.png', 'splice', 'volume', 'host', 'gameIndex', 'oneforme', 'gameCanvas', 'assets/icon_skip.png', 'assets/sounds/sound_color.ogg', 'targeteddraw2', 'assets/themes1/theme_red_0.png', 'documentElement', 'assets/themes1/theme_red_1.png', 'itemStatusLong', 'OPTIONS', 'assets/themes2/theme_red_5.png', 'roundMax', 'share.php?title=', 'assets/themes3/theme_blue_9.png', 'assets/themes1/theme_front.png', 'assets/themes2/theme_blue_0.png', 'frontContainer', 'https://www.reddit.com/submit?url=', 'assets/themes2/theme_blue_3.png', 'blur', 'twitter', 'names', 'specials', 'aim', 'mask', 'cardShadowY', 'exitMessage', 'color', 'Stage', 'emptycards', 'open', 'assets/sounds/sound_direction_reverse.ogg', 'name', 'REVERSE\x20TURN', 'assets/themes1/theme_targeteddraw2.png', 'assets/themes2/theme_eliminatedplayer.png', 'add50points', 'scaleY', 'soundCall', 'buttonSave', 'assets/themes1/theme_green_3.png', 'pointer', 'assets/themes3/theme_frozencolor.png', 'assets/themes1/theme_blue_9.png', 'soundDirection', 'cardactioncomplete', 'playerWon', 'Ticker', 'cardContent', 'buttonTutorial', 'resize', 'goalPoint', 'stats', '28824CNLUeS', 'facebook', 'oriX', 'assets/themes1/theme_red_6.png', 'assets/themes3/theme_red_7.png', 'possible', 'Text', 'assets/social/button_telegram.png', 'assets/social/button_reddit.png', 'assets/themes1/theme_shadow.png', 'alphabetic', 'assets/themes2/theme_green_5.png', 'startX', 'visible', 'itemStatus', 'assets/themes3/theme_yellow_draw.png', '26px\x20bpreplaybold', 'cardSpecials', 'buttonContinue', 'dir', 'assets/item_tutorial_4.png', 'userAgent', 'regX', 'assets/themes1/theme_yellow_7.png', '&thumb=', 'assets/themes3/theme_blue_5.png', 'split', 'GOAL\x20POINT\x20([NUMBER]PTS)', 'assets/sounds/sound_card_flip.ogg', 'buttonCancel', 'itemTutorial6', 'assets/item_target.png', 'targetPlayerAim', 'Are\x20you\x20sure\x20you\x20want\x0ato\x20quit\x20game?', 'assets/themes3/theme_red_draw.png', 'count', 'assets/themes3/theme_red_6.png', 'assets/social/button_facebook.png', 'complete', 'itemOptions', 'mp3', 'stop', 'buttonCall', 'soundButton', 'cardW', 'assets/themes3/theme_blue_0.png', 'assets/themes3/theme_charity.png', 'green', 'lastCardCallTimer', 'buttonPlay', 'innerWidth', 'graphics', 'assets/button_continue.png', 'online', 'replace', 'cardOtherActions', 'DRAW\x204\x20CARDS', 'attr', 'contentContainer', 'assets/sounds/music_main.ogg', 'fileload', 'assets/themes2/theme_yellow_7.png', 'addEventListener', '40px\x20bpreplaybold', '#000', 'cardFlipSpeed', 'abs', 'assets/themes3/theme_green_3.png', 'textAlign', 'assets/themes3/theme_blue_skip.png', 'cardNumbers', 'drawDrough', 'options', 'animating', 'height', 'buttonCalled', 'isLandscape', 'itemTarget', 'soundTarget', 'penalty', 'shuffledrawcards', 'shufflehandcards', 'assets/themes1/theme_red_draw.png', 'exitFullscreen', 'assets/themes3/theme_green_1.png', 'assets/themes2/theme_shadow.png', 'assets/themes1/theme_frozencolor.png', '[SCORE]PTS\x20is\x20mine\x20new\x20highscore\x20on\x20Four\x20Colors\x20game!\x20Try\x20it\x20now!', 'tablet', 'assets/item_score_divide.png', '#namelists', 'nomoreplayers', 'assets/themes3/theme_blue_reverse.png', '#roomWrapper', 'removeAllEventListeners', 'NO\x20CARDS\x20ARE\x20LEFT\x20TO\x20DRAW', 'players', '#fff', 'assets/themes1/theme_blue_0.png', 'assets/themes1/theme_yellow_8.png', 'buttonSettings', '60px\x20bpreplaybold', 'itemScoreDivide', 'itemArrow', 'assets/item_tutorial_5.png', 'assets/themes3/theme_highlight.png', 'assets/button_plus.png', 'assets/themes2/theme_targeteddraw2.png', 'WebAudioPlugin', 'scrollTop', 'deal', 'assets/themes1/theme_red_4.png', 'PICK\x20YOUR', '343rsuMCJ', 'soundResult', 'assets/themes3/theme_blue_2.png', '#roomWrapper\x20.nameContent', 'lastCardType', 'soundDirectionReverse', 'frozenPick', '.mobileRotate', 'pow', 'assets/button_aim.png', 'assets/themes1/theme_red_2.png', 'score', 'cards', 'off', 'assets/button_sound_on.png', 'assets/themes3/theme_red_5.png', 'DRAW\x202\x20CARDS', 'assets/themes3/theme_eliminatedplayer.png', 'assets/themes3/theme_blue_6.png', '25px\x20bpreplaybold', 'reverseCount', 'assets/themes1/theme_yellow_0.png', 'assets/themes3/theme_shadow.png', 'index', 'assets/themes1/theme_blue_5.png', 'SELECTING\x20TWO\x20CARDS', 'cardShadowX', 'assets/themes1/theme_blue_6.png', '#roomWrapper\x20.fontNameError', 'frozenReset', 'wildaction', 'seq', 'buttonMusicOff', 'assets/logo.png', 'assets/themes3/theme_green_skip.png', 'assets/themes1/theme_oneforme.png', 'devildeal', 'drawCardsTotal', '802aJaBHo', 'assets/themes2/theme_green_6.png', 'red', 'data-fontsize', 'assets/themes1/theme_blue_4.png', 'buttonPlus', 'itemPlayerLine', 'assets/themes2/theme_green_9.png', 'share', 'buttonOnline', 'horizontal', 'requestFullscreen', 'cardNum', 'itemFrozen', 'itemArrowR', 'turn', 'assets/themes2/theme_blue_draw.png', 'backgroundP', 'assets/themes3/theme_yellow_7.png', 'soundColorPick', 'scale', 'resultcomplete', 'html', 'mobile', 'playerScore', 'assets/item_colors.png', 'cardHighlight', '%20', 'front', '440553VLDlXI', 'getContext', 'colors', 'assets/themes3/theme_blue_1.png', 'assets/themes2/theme_red_9.png', 'assets/themes2/theme_yellow_1.png', 'selectcards', 'frozenSkip', 'assets/themes3/theme_green_7.png', '#notSupportHolder', 'itemTutorial5', 'cardIndex', 'msRequestFullscreen', 'PLAYER\x20[NUMBER]', 'assets/themes1/theme_eliminated.png', 'frozenColor', 'assets/themes2/theme_blue_reverse.png', 'assets/themes2/theme_red_bg.png', 'action', 'lastOption', 'mozCancelFullScreen', '#mainLoader', 'scoreX', 'assets/themes3/theme_oneforme.png', 'assets/themes2/theme_yellow_draw.png', 'slice', 'assets/sounds/sound_direction.ogg', 'assets/button_share.png', 'cardCover', 'SHARE\x20YOUR\x20SCORE:', 'focus', 'updateoptions', 'targetDrawCard', 'font-size', 'font', 'assets/social/button_whatsapp.png', 'buttonLocal', 'protocol', 'spaceX', 'state', 'assets/themes2/theme_red_8.png', 'assets/themes1/theme_blue_1.png', 'currentTarget', 'To\x20install\x20the\x20game\x20just\x20upload\x20folder\x20\x27game\x27\x20to\x20your\x20server.\x20The\x20game\x20won\x27t\x20run\x20locally\x20with\x20some\x20browser\x20like\x20Chrome\x20due\x20to\x20some\x20security\x20mode.', 'cardH', 'click', 'called', 'resultTitle', 'assets/item_score_top.png', 'image', 'alternateExtensions', 'assets/icon_eliminatedplayer.png', 'devicePixelRatio', 'cardActions', 'enableMouseOver', 'buttonShare', 'frozencolor', 'wildArr', 'cardMoveSpeed', 'push', 'assets/themes2/theme_eliminated.png', 'center', 'musicMain', 'exitTitle', 'assets/themes1/theme_blue_7.png', 'removeAllChildren', '18px\x20bpreplaybold', 'href', 'assets/themes2/theme_red_7.png', 'assets/themes1/theme_yellow_1.png', 'titleSpace', 'assets/themes2/theme_wild.png', 'itemTutorial15', 'assets/themes3/theme_red_bg.png', 'drawplayercard', 'buttonMusicOn', 'assets/themes3/theme_blue_4.png', 'assets/themes3/theme_yellow_reverse.png', 'naturalHeight', 'playerRoundWin', 'actionArr', 'callIndex', 'game', 'shuffle', 'Sprite', 'gotoAndStop', '[NUMBER]PTS', 'webkitExitFullscreen', 'size', 'tweenScore', 'assets/themes1/theme_red_bg.png', 'defaultVol', 'tick', 'Touch', '[NUMBER]\x20PLAYERS', 'spaceY', 'soundFreeze', 'telegram', 'assets/themes3/theme_red_reverse.png', 'assets/themes2/theme_green_draw.png', 'soundCardDeal', 'assets/themes1/theme_green_skip.png', 'local', 'assets/themes2/theme_front.png', 'sort', 'numbers', '#roomWrapper\x20.roomContent', '22px\x20bpreplaybold', 'YOU\x20LOSE\x20THIS\x20ROUND', 'sin', 'function', 'assets/themes3/theme_green_5.png', 'assets/themes3/theme_red_4.png', 'useRAF', 'background', 'top', 'startY', 'scores', 'soundCardShuffle', 'itemTutorial2', 'arrow', '\x20(+[NUMBER]PTS)', 'default', 'assets/item_score.png', 'active', 'assets/sounds/sound_round.ogg', 'msExitFullscreen', 'sound', 'assets/item_player_line.png', 'target', '[NUMBER]', 'logoP', 'removePlayer', 'call', 'totalCards', '\x20WON', 'scaleX', 'assets/themes1/theme_green_5.png', 'indexOf', 'fadeIn', 'eliminated', 'each', '28px\x20bpreplaybold', 'assets/item_tutorial_14.png', 'pickColors', 'cardWilds', 'activePlayers', 'test', 'assets/themes1/theme_yellow_3.png', 'assets/sounds/sound_freeze.ogg', 'addClass', 'match', 'assets/themes2/theme_green_3.png', 'floor', 'assets/themes2/theme_highlight.png', 'soundWinner', 'yellow', 'content', '1335680hYtIIR', 'assets/themes2/theme_blue_9.png', 'assets/button_fullscreen.png', 'https://twitter.com/intent/tweet?text=', 'soundAlert', 'framerate', '#DD0E0E', 'assets/item_tutorial_2.png', '20px\x20bpreplaybold', 'fourcolors', 'givecard', 'assets/themes3/theme_blue_3.png', 'assets/sounds/sound_card_deal.ogg', 'buttonArrowRight', 'buttonStart', 'assets/button_back.png', 'assets/item_pop_p.png', 'resultDesc', 'assets/icon_devildeal.png', 'userPickColor', 'undefined', 'assets/button_save.png', 'assets/item_arrow.png', 'playerRoundLose', 'assets/themes3/theme_yellow_4.png', '#canvasHolder', 'cardDeal', 'cardSpace', 'https://t.me/share/url?url=', 'lastThemeIndex', 'navigator', 'assets/themes2/theme_blue_7.png', 'targetDrawCards', 'draw', 'assets/themes2/theme_yellow_4.png', 'start', 'assets/themes3/theme_yellow_8.png', 'assets/sounds/sound_card_draw.ogg', 'assets/sounds/sound_alert.ogg', 'alpha', 'assets/icon_draw2.png', 'forPortrait', 'animation', 'lastColor', 'rotation', 'assets/sounds/sound_card_shuffle.ogg', 'nocards', 'getResult', 'special', 'assets/themes1/theme_blue_3.png', 'assets/themes2/theme_red_6.png', 'soundCardFlip', 'assets/themes2/theme_oneforme.png', 'cardPoint', 'musicGame', 'Highscore\x20on\x20Four\x20Colors\x20is\x20[SCORE]PTS', 'toUpperCase', 'giveCards', 'Sound', 'assets/themes1/theme_red_7.png', 'suspended', 'wild', '270gLTzjF', 'prepared', 'itemTutorial14', 'itemTutorial10', 'assets/themes1/theme_green_1.png', 'mozRequestFullScreen', 'assets/themes3/theme_yellow_9.png', 'loopColors', '#notificationHolder', 'assets/themes2/theme_truesight.png', 'reverse', 'wilddraw4', 'maxH', 'assets/themes1/theme_yellow_6.png', 'addPoints', 'itemColorBg', 'beginFill', 'assets/themes2/theme_blue_2.png', 'Bitmap', '33960yHFgMD', 'assets/button_online.png', 'assets/themes1/theme_blue_8.png', 'assets/themes2/theme_yellow_skip.png', 'assets/themes1/theme_red_9.png', 'itemTutorial4', 'editor', 'playerCards', 'excludeFirst', 'cos', 'assets/item_tutorial_11.png', 'buttonFacebook', 'userWin', 'assets/themes1/theme_green_9.png', 'oriY', 'buttonExit', 'revealCard', 'targetaim', '#FF7F0B', 'choosecolor', 'customScore', 'style', 'assets/themes1/theme_green_6.png', 'playerLine', 'itemTutorial11', 'assets/themes3/theme_red_skip.png', 'button', 'soundCardDraw', 'type', 'SPECIAL', '#rotateHolder', 'assets/themes2/theme_red_0.png', 'excludeMatch', 'skip', 'assets/sounds/sound_warning.ogg', 'assets/item_tutorial_6.png', 'assets/themes3/theme_blue_draw.png', 'EXIT\x20GAME', 'themeIndex', 'round', 'assets/themes2/theme_blue_8.png', 'assets/sounds/sound_action.ogg', 'rows', 'assets/themes3/theme_yellow_skip.png', 'itemSkip', 'assets/themes2/theme_green_1.png', 'loseTurn', 'otherActions', 'assets/themes1/theme_yellow_bg.png', 'HOW\x20TO\x20PLAY?', 'result', 'wilds', 'itemEliminated', 'assets/themes1/theme_green_8.png', 'assets/themes1/theme_charity.png', 'itemScore', 'room', 'assets/sounds/sound_call.ogg', 'buttonSoundOff', 'draw2', 'src', 'targeteddraw3', 'assets/themes3/theme_wild.png', 'GOAL\x20[NUMBER]PTS', 'assets/themes1/theme_wilddraw.png', 'resume', 'assets/item_tutorial_7.png', 'maxPlayers', 'buttonBack', 'itemNumber', 'assets/themes1/theme_green_bg.png', 'DRAW\x201\x20CARD', 'assets/themes2/theme_yellow_8.png', 'assets/item_color_bg.png', 'FROZEN\x20COLOR\x20FOR\x20A\x20TURN', 'clear', 'innerHeight', 'assets/sounds/sound_result.ogg', 'assets/themes2/theme_blue_6.png', 'tutorial', 'TARGET\x20A\x20PLAYER', 'assets/themes2/theme_red_draw.png', 'addChild', 'shareTitle', 'sqrt', 'killAll', 'itsatrap', 'NO\x20MORE\x20PLAYERS', 'substr', 'removeEventListener', 'progress', 'fullscreenElement', 'assets/button_play.png', 'error\x20', 'colorIndex', 'assets/item_tutorial_3.png', 'itemTutorial1', 'drawCardsCount', 'shadow', '/15', 'gap', 'itemTutorial7', 'assets/sounds/sound_target.ogg', 'text', 'continuePlay', 'drawCards', 'cardX', 'shareText', 'gtag', 'cardSpecial', 'shareOption', 'autoClear', 'value', 'assets/themes3/theme_green_9.png', 'assets/themes3/theme_green_0.png', 'px\x20bpreplaybold', 'status', 'soundWarning', 'ticker', 'assets/themes1/theme_yellow_reverse.png', 'assets/button_local.png', 'assets/themes1/theme_green_reverse.png', 'eliminatedplayer'];
    a0_0x52da = function() {
        return _0x161273;
    };
    return a0_0x52da();
}

function prepareCards() {
    var _0x3aa6d6 = a0_0x45d961;
    gameData['prepared'] = ![], gameData['complete'] = ![], gameData[_0x3aa6d6(0x1f9)] = [], gameData['discard'] = [], gameData[_0x3aa6d6(0x116)] = [], gameData['cardIndex'] = 0x0, gameData[_0x3aa6d6(0x40c)] = {
        'status': ![],
        'animation': ![],
        'cards': [],
        'cardIndex': 0x0
    }, gameData[_0x3aa6d6(0x1d1)] = {
        'count': 0x0,
        'type': '',
        'color': '',
        'lastColor': '',
        'value': '',
        'active': !![]
    }, gameData['loopColors'] = {
        'possible': [],
        'color': 0x0,
        'index': 0x0,
        'round': 0x0,
        'roundMax': 0x2
    }, gameData[_0x3aa6d6(0x12c)] = {
        'action': ![],
        'animating': ![],
        'reverse': ![],
        'reverseTurn': ![],
        'reverseCount': 0x0,
        'skip': ![],
        'highlight': ![],
        'played': ![],
        'pickColors': ![],
        'drawCount': 0x0,
        'drawCards': 0x0,
        'drawCardsTotal': 0x0,
        'drawCardsCount': 0x0,
        'drawCard': ![],
        'loseTurn': ![],
        'continuePlay': ![],
        'penalty': ![],
        'penaltyCards': 0x0,
        'revealCard': ![],
        'targetPlayerAim': ![],
        'targetPlayer': ![],
        'targetDrawCards': 0x0,
        'targetDrawCard': ![],
        'giveCards': 0x0,
        'giveCard': ![],
        'removePlayer': ![],
        'frozenPick': ![],
        'frozenColor': ![],
        'frozenReset': -0x1,
        'frozenSkip': ![],
        'addPoints': 0x0,
        'lastCardType': '',
        'shuffle': ![],
        'playerCards': [],
        'swap': ![],
        'queue': []
    };
    if (typeof initSocket == _0x3aa6d6(0x1a8) && multiplayerSettings[_0x3aa6d6(0x30b)] && socketData['online']) {
        var _0x17209c = socketData['gameIndex'];
        for (var _0x34b8b3 = 0x0; _0x34b8b3 < gameData['players']; _0x34b8b3++) {
            gameData['seq']['push'](_0x17209c), _0x17209c++, _0x17209c = _0x17209c > gameData['players'] - 0x1 ? 0x0 : _0x17209c;
        }
    } else
        for (var _0x34b8b3 = 0x0; _0x34b8b3 < gameData['players']; _0x34b8b3++) {
            gameData[_0x3aa6d6(0x116)]['push'](_0x34b8b3);
        }
    playSound(_0x3aa6d6(0x1b0)), buildCards(), shuffle(gameData[_0x3aa6d6(0x103)]);
}

function createCard(_0x57987c, _0x2b4c4c) {
    var _0x3a6902 = a0_0x45d961;
    $[_0x3a6902(0x103)][_0x3a6902(0x139) + gameData[_0x3a6902(0x129)]] = new createjs[(_0x3a6902(0x309))](), $['cards']['content' + gameData['cardNum']] = new createjs[(_0x3a6902(0x309))](), $[_0x3a6902(0x103)][gameData['cardNum']] = new createjs['Container'](), $[_0x3a6902(0x103)][gameData[_0x3a6902(0x129)]][_0x3a6902(0x379)] = $[_0x3a6902(0x103)][_0x3a6902(0x139) + gameData['cardNum']], $['cards'][gameData[_0x3a6902(0x129)]][_0x3a6902(0x3d8)] = $[_0x3a6902(0x103)][_0x3a6902(0x1d7) + gameData[_0x3a6902(0x129)]], $[_0x3a6902(0x103)][gameData[_0x3a6902(0x129)]][_0x3a6902(0x3d8)]['visible'] = ![], $[_0x3a6902(0x103)][gameData[_0x3a6902(0x129)]]['addChild']($[_0x3a6902(0x103)][gameData['cardNum']]['frontContainer'], $[_0x3a6902(0x103)][gameData[_0x3a6902(0x129)]][_0x3a6902(0x3d8)]), $[_0x3a6902(0x103)][gameData[_0x3a6902(0x129)]][_0x3a6902(0x145)] = gameData[_0x3a6902(0x129)], $['cards'][gameData[_0x3a6902(0x129)]][_0x3a6902(0x1f2)] = ![], $['cards'][gameData[_0x3a6902(0x129)]]['addEventListener'](_0x3a6902(0x167), function(_0x3e3fa6) {
        var _0x519f57 = _0x3a6902;
        if (!gameData[_0x519f57(0x12c)][_0x519f57(0x14c)]) return;
        if (gameData[_0x519f57(0x12c)][_0x519f57(0x3e7)]) return;
        if (gameData[_0x519f57(0x12c)][_0x519f57(0x2c6)]) return;
        var _0x5d665f = checkIsPlayer(gameData[_0x519f57(0x359)]);
        if (_0x5d665f) {
            if (gameData[_0x519f57(0x12c)][_0x519f57(0x346)]) typeof initSocket == _0x519f57(0x1a8) && multiplayerSettings['enable'] && socketData[_0x519f57(0x3d3)] && postSocketUpdate('wildaction', {
                'card': _0x519f57(0x1e2),
                'cardData': _0x3e3fa6[_0x519f57(0x164)][_0x519f57(0x145)]
            }, !![]), giveCardToPlayer(_0x3e3fa6[_0x519f57(0x164)]['cardIndex']);
            else {
                if (gameData[_0x519f57(0x12c)][_0x519f57(0x329)] && _0x3e3fa6[_0x519f57(0x164)]['x'] < 0x0 && !_0x3e3fa6[_0x519f57(0x164)][_0x519f57(0x1f2)]) gameData[_0x519f57(0x12c)][_0x519f57(0x328)]++, typeof initSocket == _0x519f57(0x1a8) && multiplayerSettings[_0x519f57(0x30b)] && socketData[_0x519f57(0x3d3)] && postSocketUpdate(_0x519f57(0x115), {
                    'card': _0x519f57(0x184),
                    'cardData': gameData[_0x519f57(0x12c)]['drawCount']
                }, !![]), drawPlayerCard(![]);
                else _0x3e3fa6[_0x519f57(0x164)][_0x519f57(0x1f2)] && (checkMatchCard(_0x3e3fa6[_0x519f57(0x164)]['cardIndex']) && (typeof initSocket == 'function' && multiplayerSettings[_0x519f57(0x30b)] && socketData[_0x519f57(0x3d3)] && postSocketUpdate(_0x519f57(0x115), {
                    'card': 'discardplayercard',
                    'cardData': _0x3e3fa6[_0x519f57(0x164)][_0x519f57(0x145)]
                }, !![]), discardPlayerCard(_0x3e3fa6[_0x519f57(0x164)][_0x519f57(0x145)], ![])));
            }
        }
    });
    var _0x1df46f = new createjs[(_0x3a6902(0x228))](loader['getResult'](_0x3a6902(0x156) + gameData[_0x3a6902(0x24f)]));
    centerReg(_0x1df46f), $[_0x3a6902(0x103)][gameData[_0x3a6902(0x129)]][_0x3a6902(0x379)][_0x3a6902(0x27b)](_0x1df46f);
    if (_0x2b4c4c != '') {
        var _0x59cb52 = new createjs[(_0x3a6902(0x228))](loader[_0x3a6902(0x207)](_0x3a6902(0x2f5) + gameData[_0x3a6902(0x24f)] + '_' + _0x2b4c4c));
        centerReg(_0x59cb52), $['cards'][gameData[_0x3a6902(0x129)]]['contentContainer']['addChild'](_0x59cb52);
    }
    var _0x2d7f43 = new createjs[(_0x3a6902(0x228))](loader[_0x3a6902(0x207)](_0x57987c));
    centerReg(_0x2d7f43), $[_0x3a6902(0x103)][gameData[_0x3a6902(0x129)]][_0x3a6902(0x3d8)]['addChild'](_0x2d7f43), $[_0x3a6902(0x103)][_0x3a6902(0x2a6) + gameData[_0x3a6902(0x129)]] = new createjs[(_0x3a6902(0x228))](loader[_0x3a6902(0x207)](_0x3a6902(0x137) + gameData[_0x3a6902(0x24f)])), centerReg($['cards'][_0x3a6902(0x2a6) + gameData[_0x3a6902(0x129)]]), $[_0x3a6902(0x103)][_0x3a6902(0x1c6) + gameData[_0x3a6902(0x129)]] = new createjs[(_0x3a6902(0x228))](loader[_0x3a6902(0x207)]('cardEliminated' + gameData[_0x3a6902(0x24f)])), centerReg($[_0x3a6902(0x103)][_0x3a6902(0x1c6) + gameData['cardNum']]), $[_0x3a6902(0x103)][_0x3a6902(0x28b) + gameData[_0x3a6902(0x129)]] = new createjs[(_0x3a6902(0x228))](loader[_0x3a6902(0x207)]('cardShadow' + gameData['themeIndex'])), centerReg($[_0x3a6902(0x103)][_0x3a6902(0x28b) + gameData[_0x3a6902(0x129)]]), $[_0x3a6902(0x103)]['highlight' + gameData[_0x3a6902(0x129)]][_0x3a6902(0x3ab)] = ![], $[_0x3a6902(0x103)][_0x3a6902(0x1c6) + gameData['cardNum']]['visible'] = ![], $[_0x3a6902(0x103)][gameData[_0x3a6902(0x129)]][_0x3a6902(0x2a6)] = $[_0x3a6902(0x103)][_0x3a6902(0x2a6) + gameData[_0x3a6902(0x129)]], $[_0x3a6902(0x103)][gameData[_0x3a6902(0x129)]][_0x3a6902(0x1c6)] = $[_0x3a6902(0x103)][_0x3a6902(0x1c6) + gameData[_0x3a6902(0x129)]], $[_0x3a6902(0x103)][gameData[_0x3a6902(0x129)]][_0x3a6902(0x28b)] = $[_0x3a6902(0x103)]['shadow' + gameData[_0x3a6902(0x129)]];
    var _0xe011e7 = $['cards'][gameData[_0x3a6902(0x129)]];
    return cardsPlayContainer[_0x3a6902(0x27b)]($[_0x3a6902(0x103)]['shadow' + gameData[_0x3a6902(0x129)]], $[_0x3a6902(0x103)][gameData[_0x3a6902(0x129)]], $['cards'][_0x3a6902(0x2a6) + gameData[_0x3a6902(0x129)]], $[_0x3a6902(0x103)][_0x3a6902(0x1c6) + gameData[_0x3a6902(0x129)]]), gameData[_0x3a6902(0x103)][_0x3a6902(0x175)]($[_0x3a6902(0x103)][gameData[_0x3a6902(0x129)]]), gameData[_0x3a6902(0x129)]++, _0xe011e7;
}

function toggleCardAction(_0x3bed35, _0x361f21) {
    var _0x146018 = a0_0x45d961;
    _0x361f21 ? _0x3bed35[_0x146018(0x2b8)] = _0x146018(0x392) : _0x3bed35[_0x146018(0x2b8)] = null;
}

function highlightCard(_0x1c2304, _0x2a3469) {
    var _0x2af89c = a0_0x45d961;
    _0x2a3469 ? (_0x1c2304[_0x2af89c(0x2a6)][_0x2af89c(0x3ab)] = !![], animateBlink(_0x1c2304[_0x2af89c(0x2a6)])) : (_0x1c2304[_0x2af89c(0x2a6)][_0x2af89c(0x3ab)] = ![], killAnimateBlink(_0x1c2304['highlight']));
}

function discardPlayerCard(_0x503633, _0x357116) {
    var _0x4ec4e9 = a0_0x45d961;
    gameData['turn'][_0x4ec4e9(0x2c6)] = !![], gameData[_0x4ec4e9(0x1d1)][_0x4ec4e9(0x3c1)]++;
    var _0xa9e936 = $[_0x4ec4e9(0x3fe)][gameData[_0x4ec4e9(0x359)]]['cards'][_0x4ec4e9(0x1c4)](_0x503633);
    for (var _0x2508b5 = 0x0; _0x2508b5 < $[_0x4ec4e9(0x3fe)][gameData['player']][_0x4ec4e9(0x103)]['length']; _0x2508b5++) {
        highlightCard($[_0x4ec4e9(0x103)][$[_0x4ec4e9(0x3fe)][gameData['player']][_0x4ec4e9(0x103)][_0x2508b5]], ![]);
    }
    $[_0x4ec4e9(0x3fe)][gameData[_0x4ec4e9(0x359)]][_0x4ec4e9(0x103)][_0x4ec4e9(0x365)](_0xa9e936, 0x1), positionPlayerCards(gameData[_0x4ec4e9(0x359)], !![]), showDiscardCard(_0x503633, _0x357116);
}

function preparePlayers() {
    var _0x50a9e8 = a0_0x45d961;
    cardsPlayersContainer[_0x50a9e8(0x17b)]();
    var _0x360668 = gameSettings[_0x50a9e8(0x230)];
    for (var _0x58c46f = 0x0; _0x58c46f < gameData[_0x50a9e8(0x3fe)]; _0x58c46f++) {
        $[_0x50a9e8(0x3fe)][_0x58c46f] = new createjs['Container'](), $[_0x50a9e8(0x3fe)][_0x58c46f][_0x50a9e8(0x103)] = [], $['players'][_0x58c46f][_0x50a9e8(0x102)] = 0x0, $['players'][_0x58c46f][_0x50a9e8(0x2c5)] = _0x58c46f, $['players'][_0x58c46f][_0x50a9e8(0x1b6)] = !![];
        for (var _0x591126 = 0x0; _0x591126 < _0x360668; _0x591126++) {
            var _0x54733c = gameData[_0x50a9e8(0x103)][gameData[_0x50a9e8(0x145)]][_0x50a9e8(0x145)];
            $[_0x50a9e8(0x3fe)][_0x58c46f]['cards'][_0x50a9e8(0x175)](_0x54733c), gameData['cardIndex']++;
        }
        $[_0x50a9e8(0x3fe)][_0x50a9e8(0x39d) + _0x58c46f] = new createjs[(_0x50a9e8(0x309))]();
        var _0x2d92df = new createjs['Bitmap'](loader['getResult'](_0x50a9e8(0x123)));
        centerReg(_0x2d92df);
        var _0x14c654 = new createjs[(_0x50a9e8(0x3a4))]();
        _0x14c654[_0x50a9e8(0x15c)] = _0x50a9e8(0x17c), _0x14c654[_0x50a9e8(0x384)] = '#fff', _0x14c654[_0x50a9e8(0x3e2)] = 'left', _0x14c654[_0x50a9e8(0x2c4)] = 'middle', _0x14c654[_0x50a9e8(0x290)] = textStrings[_0x50a9e8(0x2a9)][_0x50a9e8(0x3d4)](_0x50a9e8(0x1bc), _0x58c46f + 0x1);
        typeof initSocket == _0x50a9e8(0x1a8) && multiplayerSettings[_0x50a9e8(0x30b)] && socketData[_0x50a9e8(0x3d3)] && (_0x14c654[_0x50a9e8(0x290)] = gameData[_0x50a9e8(0x37e)][_0x58c46f]);
        var _0x4dd519 = new createjs['Text']();
        _0x4dd519['font'] = _0x50a9e8(0x1a5), _0x4dd519[_0x50a9e8(0x384)] = '#fff', _0x4dd519[_0x50a9e8(0x3e2)] = _0x50a9e8(0x321), _0x4dd519['textBaseline'] = _0x50a9e8(0x2db), _0x4dd519[_0x50a9e8(0x290)] = textStrings[_0x50a9e8(0x135)][_0x50a9e8(0x3d4)](_0x50a9e8(0x1bc), playerData[_0x50a9e8(0x1af)][_0x58c46f]), $[_0x50a9e8(0x3fe)][_0x50a9e8(0x39d) + _0x58c46f][_0x50a9e8(0x240)] = _0x2d92df, $[_0x50a9e8(0x3fe)][_0x50a9e8(0x39d) + _0x58c46f]['playerName'] = _0x14c654, $[_0x50a9e8(0x3fe)]['stats' + _0x58c46f][_0x50a9e8(0x135)] = _0x4dd519, $[_0x50a9e8(0x3fe)][_0x50a9e8(0x39d) + _0x58c46f][_0x50a9e8(0x3ab)] = ![], $[_0x50a9e8(0x3fe)]['stats' + _0x58c46f][_0x50a9e8(0x27b)](_0x2d92df, _0x14c654, _0x4dd519), $[_0x50a9e8(0x3fe)][_0x50a9e8(0x1bf) + _0x58c46f] = new createjs[(_0x50a9e8(0x228))](loader[_0x50a9e8(0x207)]('buttonCall')), $[_0x50a9e8(0x3fe)][_0x50a9e8(0x1bf) + _0x58c46f][_0x50a9e8(0x3ab)] = ![], $['players'][_0x50a9e8(0x168) + _0x58c46f] = new createjs[(_0x50a9e8(0x228))](loader[_0x50a9e8(0x207)](_0x50a9e8(0x3e9))), $['players'][_0x50a9e8(0x168) + _0x58c46f][_0x50a9e8(0x3ab)] = ![], centerReg($[_0x50a9e8(0x3fe)]['call' + _0x58c46f]), centerReg($[_0x50a9e8(0x3fe)]['called' + _0x58c46f]), $[_0x50a9e8(0x3fe)][_0x50a9e8(0x1bf) + _0x58c46f][_0x50a9e8(0x18b)] = _0x58c46f, $[_0x50a9e8(0x3fe)][_0x50a9e8(0x1bf) + _0x58c46f]['cursor'] = _0x50a9e8(0x392), $[_0x50a9e8(0x3fe)][_0x50a9e8(0x1bf) + _0x58c46f][_0x50a9e8(0x3dc)](_0x50a9e8(0x167), function(_0xa2d56b) {
            var _0xb62fb7 = _0x50a9e8;
            $[_0xb62fb7(0x3fe)][_0xa2d56b[_0xb62fb7(0x1bb)]['callIndex']][_0xb62fb7(0x103)][_0xb62fb7(0x2ee)] == 0x1 && (typeof initSocket == _0xb62fb7(0x1a8) && multiplayerSettings[_0xb62fb7(0x30b)] && socketData[_0xb62fb7(0x3d3)] && postSocketUpdate(_0xb62fb7(0x168), socketData[_0xb62fb7(0x368)], !![]), playSound(_0xb62fb7(0x38f)), $[_0xb62fb7(0x3fe)][_0xb62fb7(0x168) + _0xa2d56b['target']['callIndex']][_0xb62fb7(0x3ab)] = !![], animateFocus($[_0xb62fb7(0x3fe)][_0xb62fb7(0x168) + _0xa2d56b[_0xb62fb7(0x1bb)][_0xb62fb7(0x18b)]]));
        }), $['players']['aim' + _0x58c46f] = new createjs[(_0x50a9e8(0x228))](loader[_0x50a9e8(0x207)](_0x50a9e8(0x341))), $[_0x50a9e8(0x3fe)][_0x50a9e8(0x380) + _0x58c46f][_0x50a9e8(0x3ab)] = ![], centerReg($[_0x50a9e8(0x3fe)][_0x50a9e8(0x380) + _0x58c46f]), $[_0x50a9e8(0x3fe)][_0x50a9e8(0x380) + _0x58c46f][_0x50a9e8(0x2c5)] = _0x58c46f, $['players'][_0x50a9e8(0x380) + _0x58c46f][_0x50a9e8(0x2b8)] = _0x50a9e8(0x392), $[_0x50a9e8(0x3fe)]['aim' + _0x58c46f]['addEventListener'](_0x50a9e8(0x167), function(_0x5b9265) {
            var _0x33cbb5 = _0x50a9e8,
                _0x27fc55 = checkIsPlayer(gameData[_0x33cbb5(0x359)]);
            if (_0x27fc55) {
                playSound(_0x33cbb5(0x38f));
                typeof initSocket == _0x33cbb5(0x1a8) && multiplayerSettings[_0x33cbb5(0x30b)] && socketData[_0x33cbb5(0x3d3)] && postSocketUpdate(_0x33cbb5(0x23a), _0x5b9265[_0x33cbb5(0x1bb)][_0x33cbb5(0x2c5)], !![]);
                toggleTargetIcon(_0x5b9265['target'][_0x33cbb5(0x2c5)]);
                if (gameData[_0x33cbb5(0x12c)][_0x33cbb5(0x2e4)]) swapPlayerCards(_0x5b9265['target'][_0x33cbb5(0x2c5)]);
                else {
                    if (gameData['turn'][_0x33cbb5(0x239)]) revealPlayerCards(_0x5b9265[_0x33cbb5(0x1bb)][_0x33cbb5(0x2c5)]);
                    else {
                        if (gameData['turn']['giveCard']) choosePlayerCards(_0x5b9265['target'][_0x33cbb5(0x2c5)]);
                        else gameData['turn']['removePlayer'] ? removePlayers(_0x5b9265[_0x33cbb5(0x1bb)][_0x33cbb5(0x2c5)]) : targetedPlayerDraw(_0x5b9265[_0x33cbb5(0x1bb)]['playerIndex']);
                    }
                }
            }
        }), $[_0x50a9e8(0x3fe)][_0x50a9e8(0x1b2) + _0x58c46f] = new createjs[(_0x50a9e8(0x309))]();
        var _0xd337fa = new createjs[(_0x50a9e8(0x228))](loader[_0x50a9e8(0x207)](_0x50a9e8(0x405)));
        centerReg(_0xd337fa);
        var _0x53963a = new createjs[(_0x50a9e8(0x228))](loader[_0x50a9e8(0x207)](_0x50a9e8(0x405)));
        centerReg(_0x53963a), _0x53963a[_0x50a9e8(0x3ab)] = ![], _0x53963a[_0x50a9e8(0x1c2)] = -0x1, $[_0x50a9e8(0x3fe)][_0x50a9e8(0x1b2) + _0x58c46f][_0x50a9e8(0x349)] = _0xd337fa, $[_0x50a9e8(0x3fe)]['arrow' + _0x58c46f][_0x50a9e8(0x12b)] = _0x53963a, $[_0x50a9e8(0x3fe)]['arrow' + _0x58c46f][_0x50a9e8(0x27b)](_0xd337fa, _0x53963a), $['players'][_0x50a9e8(0x1b2) + _0x58c46f][_0x50a9e8(0x3ab)] = ![], $[_0x50a9e8(0x3fe)][_0x50a9e8(0x1bb) + _0x58c46f] = new createjs[(_0x50a9e8(0x228))](loader['getResult'](_0x50a9e8(0x3eb))), $[_0x50a9e8(0x3fe)][_0x50a9e8(0x1bb) + _0x58c46f][_0x50a9e8(0x3ab)] = ![], centerReg($[_0x50a9e8(0x3fe)]['target' + _0x58c46f]), $[_0x50a9e8(0x3fe)]['skip' + _0x58c46f] = new createjs[(_0x50a9e8(0x228))](loader['getResult']('itemSkip')), $[_0x50a9e8(0x3fe)]['skip' + _0x58c46f][_0x50a9e8(0x3ab)] = ![], centerReg($[_0x50a9e8(0x3fe)][_0x50a9e8(0x24a) + _0x58c46f]), $[_0x50a9e8(0x3fe)]['eliminated' + _0x58c46f] = new createjs['Bitmap'](loader[_0x50a9e8(0x207)](_0x50a9e8(0x25d))), $[_0x50a9e8(0x3fe)][_0x50a9e8(0x1c6) + _0x58c46f][_0x50a9e8(0x3ab)] = ![], centerReg($[_0x50a9e8(0x3fe)][_0x50a9e8(0x1c6) + _0x58c46f]), cardsPlayersContainer[_0x50a9e8(0x27b)]($['players'][_0x58c46f], $[_0x50a9e8(0x3fe)][_0x50a9e8(0x39d) + _0x58c46f], $['players'][_0x50a9e8(0x1bf) + _0x58c46f], $[_0x50a9e8(0x3fe)]['called' + _0x58c46f], $[_0x50a9e8(0x3fe)]['aim' + _0x58c46f], $['players'][_0x50a9e8(0x24a) + _0x58c46f], $['players'][_0x50a9e8(0x1bb) + _0x58c46f], $[_0x50a9e8(0x3fe)][_0x50a9e8(0x1c6) + _0x58c46f], $[_0x50a9e8(0x3fe)][_0x50a9e8(0x1b2) + _0x58c46f]);
    }
    for (var _0x58c46f = gameData[_0x50a9e8(0x145)]; _0x58c46f < gameData[_0x50a9e8(0x103)][_0x50a9e8(0x2ee)]; _0x58c46f++) {
        var _0x54733c = gameData['cards'][_0x58c46f][_0x50a9e8(0x145)];
        gameData[_0x50a9e8(0x1f9)][_0x50a9e8(0x175)](_0x54733c);
    }
    gameData[_0x50a9e8(0x217)] = !![], resizeGameLayout(), TweenMax['to'](cardsContainer, 0.5, {
        'overwrite': !![],
        'onComplete': function() {
            var _0x439118 = _0x50a9e8;
            gameData[_0x439118(0x40c)][_0x439118(0x29d)] = !![], gameData[_0x439118(0x40c)][_0x439118(0x202)] = !![], checkPlayerCardsAnimation();
        }
    });
}

function checkPlayerCardsAnimation() {
    var _0x3c8bb2 = a0_0x45d961;
    if (gameData[_0x3c8bb2(0x40c)][_0x3c8bb2(0x202)]) {
        gameData['deal'][_0x3c8bb2(0x103)] = [], gameData[_0x3c8bb2(0x40c)][_0x3c8bb2(0x145)] = 0x0;
        for (var _0x3c7d55 = 0x0; _0x3c7d55 < gameSettings[_0x3c8bb2(0x230)]; _0x3c7d55++) {
            for (var _0x45099d = 0x0; _0x45099d < gameData[_0x3c8bb2(0x3fe)]; _0x45099d++) {
                var _0xf6440 = $[_0x3c8bb2(0x103)][$[_0x3c8bb2(0x3fe)][_0x45099d][_0x3c8bb2(0x103)][_0x3c7d55]];
                _0xf6440[_0x3c8bb2(0x1f2)] = ![], gameData['deal']['cards'][_0x3c8bb2(0x175)]({
                    'card': _0xf6440,
                    'player': _0x45099d
                }), gameData[_0x3c8bb2(0x40c)]['total']++;
            }
        }
        dealPlayerCard();
    } else
        for (var _0x3c7d55 = 0x0; _0x3c7d55 < gameData['players']; _0x3c7d55++) {
            positionPlayerCards(_0x3c7d55, gameData[_0x3c8bb2(0x40c)][_0x3c8bb2(0x29d)]);
        }
    gameData['drawing'] && toggleDrawPiles(!![]);
}

function dealPlayerCard() {
    var _0x4932d1 = a0_0x45d961,
        _0x3e5c37 = gameData['deal']['cards'][gameData[_0x4932d1(0x40c)][_0x4932d1(0x145)]]['card'],
        _0xef34b2 = gameData[_0x4932d1(0x40c)][_0x4932d1(0x103)][gameData[_0x4932d1(0x40c)][_0x4932d1(0x145)]][_0x4932d1(0x359)],
        _0x45205c = getPlayerCardPosition(_0xef34b2);
    setCardDepth(_0x3e5c37), _0x3e5c37[_0x4932d1(0x3a0)] = $[_0x4932d1(0x3fe)][_0xef34b2][_0x4932d1(0x293)], _0x3e5c37['oriY'] = $['players'][_0xef34b2][_0x4932d1(0x31c)];
    if (_0x45205c['horizontal']) var _0x8501f6 = $[_0x4932d1(0x3fe)][_0xef34b2][_0x4932d1(0x3b1)] == _0x4932d1(0x2d5) ? 0x0 : 0xb4;
    else var _0x8501f6 = $['players'][_0xef34b2][_0x4932d1(0x3b1)] == _0x4932d1(0x321) ? -0x5a : 0x5a;
    var _0x3265e9 = gameSettings[_0x4932d1(0x343)];
    TweenMax['to'](_0x3e5c37, _0x3265e9, {
        'x': _0x3e5c37[_0x4932d1(0x3a0)],
        'y': _0x3e5c37[_0x4932d1(0x237)],
        'rotation': _0x8501f6,
        'scaleX': 0x1,
        'scaleY': 0x1,
        'overwrite': !![],
        'onStart': function() {
            var _0x813809 = _0x4932d1;
            _0x3e5c37[_0x813809(0x1f2)] = !![], playSound(_0x813809(0x19e));
        },
        'onComplete': dealPlayerCardComplete,
        'onCompleteParams': [_0xef34b2, _0x3e5c37]
    });
}

function dealPlayerCardComplete(_0x1dad21, _0x14d139) {
    var _0x1b46bf = a0_0x45d961,
        _0x9660c5 = checkIsPlayer(_0x1dad21);
    _0x9660c5 && (toggleCardAction(_0x14d139, !![]), flipCard(_0x14d139)), positionPlayerCards(_0x1dad21, !![]), gameData['deal'][_0x1b46bf(0x145)]++, gameData[_0x1b46bf(0x40c)][_0x1b46bf(0x145)] < gameData[_0x1b46bf(0x40c)][_0x1b46bf(0x103)][_0x1b46bf(0x2ee)] ? dealPlayerCard() : gameData[_0x1b46bf(0x40c)][_0x1b46bf(0x202)] && (gameData['deal'][_0x1b46bf(0x202)] = ![], showDrawCard(!![]));
}

function getPlayerCardPosition(_0xb117a8) {
    var _0x4ba6fb = a0_0x45d961,
        _0x2bef82 = $[_0x4ba6fb(0x3fe)][_0xb117a8]['horizontal'],
        _0x4be6f6 = cardsPlayContainer[_0x4ba6fb(0x2f7)]($[_0x4ba6fb(0x3fe)][_0xb117a8]['x'] * dpr, $[_0x4ba6fb(0x3fe)][_0xb117a8]['y'] * dpr),
        _0x4dac8b = {
            'horizontal': _0x2bef82,
            'x': 0x0,
            'y': 0x0,
            'startX': 0x0,
            'startY': 0x0,
            'w': 0x0,
            'h': 0x0,
            'maxW': 0x1f4,
            'maxH': 0x12c,
            'gap': 0x0,
            'cardSpace': gameSettings[_0x4ba6fb(0x1f3)],
            'totalCards': 0x0
        };
    !viewport['isLandscape'] && (_0x4dac8b[_0x4ba6fb(0x336)] = 0x12c, _0x4dac8b[_0x4ba6fb(0x222)] = 0x1f4);
    for (var _0x1abe18 = 0x0; _0x1abe18 < $[_0x4ba6fb(0x3fe)][_0xb117a8][_0x4ba6fb(0x103)][_0x4ba6fb(0x2ee)]; _0x1abe18++) {
        var _0x3055a7 = $[_0x4ba6fb(0x103)][$[_0x4ba6fb(0x3fe)][_0xb117a8][_0x4ba6fb(0x103)][_0x1abe18]];
        _0x3055a7['cardDeal'] && _0x4dac8b[_0x4ba6fb(0x1c0)]++;
    }
    return _0x4dac8b['totalCards'] > 0x0 && (_0x4dac8b[_0x4ba6fb(0x1c0)] = _0x4dac8b[_0x4ba6fb(0x1c0)] - 0x1), _0x4dac8b[_0x4ba6fb(0x127)] ? (_0x4dac8b['w'] = _0x4dac8b[_0x4ba6fb(0x1c0)] * _0x4dac8b['cardSpace'], _0x4dac8b[_0x4ba6fb(0x28d)] = _0x4dac8b[_0x4ba6fb(0x1f3)], _0x4dac8b['w'] > _0x4dac8b['maxW'] && (_0x4dac8b['w'] = _0x4dac8b[_0x4ba6fb(0x336)], _0x4dac8b[_0x4ba6fb(0x28d)] = _0x4dac8b[_0x4ba6fb(0x336)] / _0x4dac8b[_0x4ba6fb(0x1c0)]), _0x4dac8b['x'] = _0x4dac8b[_0x4ba6fb(0x3aa)] = _0x4be6f6['x'] - _0x4dac8b['w'] / 0x2, _0x4dac8b['y'] = _0x4dac8b[_0x4ba6fb(0x1ae)] = _0x4be6f6['y']) : (_0x4dac8b['h'] = _0x4dac8b[_0x4ba6fb(0x1c0)] * _0x4dac8b['cardSpace'], _0x4dac8b[_0x4ba6fb(0x28d)] = _0x4dac8b[_0x4ba6fb(0x1f3)], _0x4dac8b['h'] > _0x4dac8b[_0x4ba6fb(0x222)] && (_0x4dac8b['h'] = _0x4dac8b[_0x4ba6fb(0x222)], _0x4dac8b[_0x4ba6fb(0x28d)] = _0x4dac8b['maxH'] / _0x4dac8b['totalCards']), _0x4dac8b['x'] = _0x4dac8b[_0x4ba6fb(0x3aa)] = _0x4be6f6['x'], _0x4dac8b['y'] = _0x4dac8b[_0x4ba6fb(0x1ae)] = _0x4be6f6['y'] - _0x4dac8b['h'] / 0x2), _0x4dac8b;
}

function toggleColors(_0x3f05f4) {
    var _0x3c3ef5 = a0_0x45d961;
    colorsContainer[_0x3c3ef5(0x3ab)] = _0x3f05f4;
    if (_0x3f05f4) {
        var _0x4d44c8 = ![],
            _0x42d4a7 = ![];
        typeof initSocket == 'function' && multiplayerSettings[_0x3c3ef5(0x30b)] && socketData[_0x3c3ef5(0x3d3)] ? (_0x4d44c8 = !![], gameData[_0x3c3ef5(0x359)] == socketData[_0x3c3ef5(0x368)] && (_0x42d4a7 = !![])) : gameData[_0x3c3ef5(0x359)] == 0x0 && (_0x4d44c8 = !![], _0x42d4a7 = !![]);
        if (_0x4d44c8) {
            for (var _0x3d6537 = 0x0; _0x3d6537 < 0x4; _0x3d6537++) {
                $[_0x3c3ef5(0x13c)][_0x3d6537]['gotoAndStop'](_0x3d6537);
            }
            _0x42d4a7 ? colorSelectTxt[_0x3c3ef5(0x290)] = textStrings[_0x3c3ef5(0x1eb)] : colorSelectTxt[_0x3c3ef5(0x290)] = textStrings['playerPickColor'];
        } else {
            colorSelectTxt[_0x3c3ef5(0x290)] = textStrings[_0x3c3ef5(0x30d)][_0x3c3ef5(0x3d4)](_0x3c3ef5(0x2fd), $[_0x3c3ef5(0x3fe)][_0x3c3ef5(0x39d) + gameData[_0x3c3ef5(0x359)]][_0x3c3ef5(0x2a9)][_0x3c3ef5(0x290)]), gameData['loopColors'][_0x3c3ef5(0x250)] = 0x0, gameData[_0x3c3ef5(0x21d)]['possible'] = [];
            for (var _0x3d6537 = 0x0; _0x3d6537 < $[_0x3c3ef5(0x3fe)][gameData[_0x3c3ef5(0x359)]][_0x3c3ef5(0x103)][_0x3c3ef5(0x2ee)]; _0x3d6537++) {
                var _0xf6de9e = $[_0x3c3ef5(0x3fe)][gameData[_0x3c3ef5(0x359)]][_0x3c3ef5(0x103)][_0x3d6537];
                $['cards'][_0xf6de9e][_0x3c3ef5(0x33e)] != '' && gameData[_0x3c3ef5(0x21d)]['possible'][_0x3c3ef5(0x175)]($['cards'][_0xf6de9e][_0x3c3ef5(0x33e)]);
            }
            if (gameData[_0x3c3ef5(0x21d)][_0x3c3ef5(0x3a3)][_0x3c3ef5(0x2ee)] > 0x0) shuffle(gameData['loopColors'][_0x3c3ef5(0x3a3)]), gameData[_0x3c3ef5(0x21d)]['color'] = gameData['colors'][_0x3c3ef5(0x1c4)](gameData[_0x3c3ef5(0x21d)]['possible'][0x0]);
            else {
                var _0x4d1851 = Math[_0x3c3ef5(0x1d3)](Math[_0x3c3ef5(0x2b3)]() * gameData['loopColors'][_0x3c3ef5(0x2ee)]);
                gameData[_0x3c3ef5(0x21d)]['color'] = _0x4d1851;
            }
            loopAutoColors();
        }
    }
}

function loopAutoColors() {
    var _0x35b110 = a0_0x45d961;
    playSound('soundColorPick');
    for (var _0x2e315b = 0x0; _0x2e315b < 0x4; _0x2e315b++) {
        $[_0x35b110(0x13c)][_0x2e315b]['gotoAndStop'](_0x2e315b + 0x4);
    }
    $[_0x35b110(0x13c)][gameData[_0x35b110(0x21d)]['index']][_0x35b110(0x18f)](gameData[_0x35b110(0x21d)][_0x35b110(0x10e)]);
    var _0x407848 = !![];
    gameData['loopColors']['round'] > gameData['loopColors'][_0x35b110(0x374)] && (gameData['loopColors'][_0x35b110(0x10e)] == gameData[_0x35b110(0x21d)][_0x35b110(0x384)] && (_0x407848 = ![], TweenMax['to'](cardsContainer, 0x1, {
        'overwrite': !![],
        'onComplete': function() {
            var _0x3eacb7 = _0x35b110;
            gameData[_0x3eacb7(0x1d1)]['value'] = 0x0, gameData[_0x3eacb7(0x1d1)][_0x3eacb7(0x384)] = gameData[_0x3eacb7(0x13c)][gameData[_0x3eacb7(0x21d)][_0x3eacb7(0x10e)]], toggleColors(![]), getMatchDetail(), checkRoundEnd();
        }
    }))), _0x407848 && (gameData[_0x35b110(0x21d)][_0x35b110(0x10e)]++, gameData[_0x35b110(0x21d)]['index'] > gameData[_0x35b110(0x13c)][_0x35b110(0x2ee)] - 0x1 && (gameData[_0x35b110(0x21d)][_0x35b110(0x10e)] = 0x0, gameData['loopColors'][_0x35b110(0x250)]++), TweenMax['to'](cardsContainer, 0.1, {
        'overwrite': !![],
        'onComplete': loopAutoColors
    }));
}

function revealPlayerCards(_0x5867da) {
    var _0x4709b5 = a0_0x45d961;
    gameData[_0x4709b5(0x12c)][_0x4709b5(0x239)] = ![], toggleTargetPlayers(![]);
    var _0x1e531b = checkIsPlayer(_0x5867da);
    if (!_0x1e531b)
        for (var _0x223e85 = 0x0; _0x223e85 < $[_0x4709b5(0x3fe)][_0x5867da][_0x4709b5(0x103)]['length']; _0x223e85++) {
            var _0x5e2cdd = $[_0x4709b5(0x103)][$[_0x4709b5(0x3fe)][_0x5867da][_0x4709b5(0x103)][_0x223e85]];
            flipCard(_0x5e2cdd);
        }
    TweenMax['to'](cardsContainer, 0x3, {
        'overwrite': !![],
        'onComplete': function() {
            var _0x1b09f3 = _0x4709b5;
            if (!_0x1e531b)
                for (var _0x224457 = 0x0; _0x224457 < $[_0x1b09f3(0x3fe)][_0x5867da]['cards']['length']; _0x224457++) {
                    var _0x2186b7 = $[_0x1b09f3(0x103)][$[_0x1b09f3(0x3fe)][_0x5867da][_0x1b09f3(0x103)][_0x224457]];
                    flipCardCover(_0x2186b7);
                }
            toggleTargetIcon(), checkRoundEnd();
        }
    });
}

function choosePlayerCards(_0x1697ac) {
    var _0x522350 = a0_0x45d961;
    gameData[_0x522350(0x313)] = _0x1697ac, toggleTargetPlayers(![]), showGameGuide('selectcards'), gameData[_0x522350(0x12c)][_0x522350(0x14c)] = !![], gameData[_0x522350(0x12c)][_0x522350(0x2c6)] = ![];
    var _0x2c0664 = checkIsPlayer(_0x1697ac);
    if (!_0x2c0664)
        for (var _0x2952de = 0x0; _0x2952de < $['players'][gameData[_0x522350(0x359)]]['cards']['length']; _0x2952de++) {
            var _0x4270c2 = $[_0x522350(0x3fe)][gameData[_0x522350(0x359)]][_0x522350(0x103)][_0x2952de];
            highlightCard($[_0x522350(0x103)][_0x4270c2], !![]);
        }
}

function removePlayers(_0x4244c1) {
    var _0x22e01e = a0_0x45d961;
    gameData[_0x22e01e(0x12c)][_0x22e01e(0x1be)] = ![], toggleTargetPlayers(![]), toggleTargetIcon(), $[_0x22e01e(0x3fe)][_0x4244c1][_0x22e01e(0x1b6)] = ![], $[_0x22e01e(0x3fe)][_0x22e01e(0x168) + _0x4244c1][_0x22e01e(0x3ab)] = ![], $[_0x22e01e(0x3fe)]['call' + _0x4244c1][_0x22e01e(0x3ab)] = ![], $[_0x22e01e(0x3fe)]['eliminated' + _0x4244c1][_0x22e01e(0x3ab)] = !![], animateFocus($[_0x22e01e(0x3fe)]['eliminated' + _0x4244c1]);
    for (var _0xa474ba = 0x0; _0xa474ba < $[_0x22e01e(0x3fe)][_0x4244c1][_0x22e01e(0x103)]['length']; _0xa474ba++) {
        var _0x38de6a = $[_0x22e01e(0x3fe)][_0x4244c1][_0x22e01e(0x103)][_0xa474ba];
        $[_0x22e01e(0x103)][_0x38de6a][_0x22e01e(0x1c6)][_0x22e01e(0x3ab)] = !![];
    }
    playSound(_0x22e01e(0x352)), gameData[_0x22e01e(0x1cc)]--, checkRoundEnd();
}

function targetedPlayerDraw(_0xba3b32) {
    var _0x517436 = a0_0x45d961;
    toggleTargetPlayers(![]), toggleTargetIcon(), gameData[_0x517436(0x359)] = _0xba3b32, nextPlayerTurn(![]);
}

function giveCardToPlayer(_0x315127) {
    var _0x125dae = a0_0x45d961;
    gameData['turn']['giveCards']--;
    var _0x410ed9 = $['players'][gameData['player']]['cards'][_0x125dae(0x1c4)](_0x315127);
    $[_0x125dae(0x3fe)][gameData[_0x125dae(0x359)]]['cards'][_0x125dae(0x365)](_0x410ed9, 0x1), $['players'][gameData[_0x125dae(0x313)]][_0x125dae(0x103)][_0x125dae(0x175)](_0x315127);
    var _0x4d249b = ![],
        _0x10d4ff = ![];
    typeof initSocket == _0x125dae(0x1a8) && multiplayerSettings[_0x125dae(0x30b)] && socketData['online'] ? (gameData[_0x125dae(0x359)] == socketData['gameIndex'] && (_0x4d249b = !![]), gameData['targetPlayer'] == socketData[_0x125dae(0x368)] && (_0x10d4ff = !![])) : (gameData[_0x125dae(0x359)] == 0x0 && (_0x4d249b = !![]), _0x10d4ff = ![]);
    var _0x185398 = $[_0x125dae(0x103)][_0x315127];
    _0x4d249b && highlightCard(_0x185398, ![]);
    _0x10d4ff ? flipCard(_0x185398) : flipCardCover(_0x185398);
    positionPlayerCards(gameData['player'], !![]), positionPlayerCards(gameData[_0x125dae(0x313)], !![]);
    if (gameData[_0x125dae(0x12c)][_0x125dae(0x211)] == 0x0 || $['players'][gameData[_0x125dae(0x359)]][_0x125dae(0x103)][_0x125dae(0x2ee)] == 0x0) {
        for (var _0x45f7c7 = 0x0; _0x45f7c7 < $['players'][gameData[_0x125dae(0x359)]][_0x125dae(0x103)][_0x125dae(0x2ee)]; _0x45f7c7++) {
            var _0x315127 = $[_0x125dae(0x3fe)][gameData['player']][_0x125dae(0x103)][_0x45f7c7];
            highlightCard($[_0x125dae(0x103)][_0x315127], ![]);
        }
        toggleTargetIcon(), showGameGuide(), gameData[_0x125dae(0x12c)]['giveCard'] = ![], gameData[_0x125dae(0x12c)][_0x125dae(0x14c)] = ![], gameData[_0x125dae(0x12c)]['played'] = !![], checkRoundEnd();
    }
}

function autoGiveCardToPlayer() {
    var _0x346182 = a0_0x45d961,
        _0x269140 = $[_0x346182(0x3fe)][gameData[_0x346182(0x359)]][_0x346182(0x103)][_0x346182(0x153)]();
    shuffle(_0x269140);
    var _0x33082c = _0x269140[0x0];
    gameData['turn'][_0x346182(0x211)]--;
    var _0x5cb3a7 = $[_0x346182(0x3fe)][gameData[_0x346182(0x359)]][_0x346182(0x103)][_0x346182(0x1c4)](_0x33082c);
    $[_0x346182(0x3fe)][gameData[_0x346182(0x359)]][_0x346182(0x103)][_0x346182(0x365)](_0x5cb3a7, 0x1), $['players'][gameData['targetPlayer']][_0x346182(0x103)][_0x346182(0x175)](_0x33082c), $[_0x346182(0x3fe)][_0x346182(0x168) + gameData[_0x346182(0x313)]]['visible'] = ![];
    var _0x167336 = checkIsPlayer(gameData['targetPlayer']);
    if (_0x167336) {
        var _0x31ac6d = $[_0x346182(0x103)][_0x33082c];
        flipCard(_0x31ac6d);
    }
    playSound(_0x346182(0x19e)), positionPlayerCards(gameData['player'], !![]), positionPlayerCards(gameData['targetPlayer'], !![]), TweenMax['to'](cardsContainer, 0.2, {
        'overwrite': !![],
        'onComplete': function() {
            var _0x2be9d5 = _0x346182;
            if (gameData[_0x2be9d5(0x12c)][_0x2be9d5(0x211)] == 0x0 || $[_0x2be9d5(0x3fe)][gameData[_0x2be9d5(0x359)]][_0x2be9d5(0x103)][_0x2be9d5(0x2ee)] == 0x0) {
                for (var _0x40d434 = 0x0; _0x40d434 < $[_0x2be9d5(0x3fe)][gameData[_0x2be9d5(0x359)]]['cards'][_0x2be9d5(0x2ee)]; _0x40d434++) {
                    var _0x39fce0 = $['players'][gameData[_0x2be9d5(0x359)]]['cards'][_0x40d434];
                    highlightCard($[_0x2be9d5(0x103)][_0x39fce0], ![]);
                }
                toggleTargetIcon(), showGameGuide(), gameData[_0x2be9d5(0x12c)]['giveCard'] = ![], gameData['turn'][_0x2be9d5(0x14c)] = ![], gameData[_0x2be9d5(0x12c)][_0x2be9d5(0x2c6)] = !![], checkRoundEnd();
            } else autoGiveCardToPlayer();
        }
    });
}

function swapPlayerCards(_0x4b0838) {
    var _0x35c13b = a0_0x45d961;
    gameData[_0x35c13b(0x12c)]['swap'] = ![], toggleTargetPlayers(![]), toggleTargetIcon();
    var _0x4a1188 = $[_0x35c13b(0x3fe)][_0x4b0838][_0x35c13b(0x103)][_0x35c13b(0x153)](),
        _0x207087 = $[_0x35c13b(0x3fe)][gameData['player']][_0x35c13b(0x103)]['slice']();
    $[_0x35c13b(0x3fe)][_0x4b0838][_0x35c13b(0x103)] = _0x207087, $[_0x35c13b(0x3fe)][gameData[_0x35c13b(0x359)]][_0x35c13b(0x103)] = _0x4a1188;
    for (var _0x505bca = 0x0; _0x505bca < $['players'][_0x4b0838][_0x35c13b(0x103)][_0x35c13b(0x2ee)]; _0x505bca++) {
        var _0x5d90b1 = $['cards'][$['players'][_0x4b0838]['cards'][_0x505bca]],
            _0x4eb658 = checkIsPlayer(_0x4b0838);
        _0x4eb658 ? flipCard(_0x5d90b1) : flipCardCover(_0x5d90b1);
    }
    for (var _0x505bca = 0x0; _0x505bca < $['players'][gameData[_0x35c13b(0x359)]]['cards'][_0x35c13b(0x2ee)]; _0x505bca++) {
        var _0x5d90b1 = $[_0x35c13b(0x103)][$[_0x35c13b(0x3fe)][gameData['player']][_0x35c13b(0x103)][_0x505bca]],
            _0x4eb658 = checkIsPlayer(gameData[_0x35c13b(0x359)]);
        _0x4eb658 ? flipCard(_0x5d90b1) : flipCardCover(_0x5d90b1);
    }
    positionPlayerCards(_0x4b0838, !![]), positionPlayerCards(gameData[_0x35c13b(0x359)], !![]), checkRoundEnd();
}

function toggleTargetIcon(_0x36bdfd) {
    var _0x22945a = a0_0x45d961;
    _0x36bdfd != undefined ? (playSound('soundTarget'), gameData[_0x22945a(0x337)] = _0x36bdfd, $[_0x22945a(0x3fe)][_0x22945a(0x1bb) + _0x36bdfd][_0x22945a(0x3ab)] = !![], $[_0x22945a(0x3fe)][_0x22945a(0x1bf) + _0x36bdfd][_0x22945a(0x1ff)] = 0x0, $[_0x22945a(0x3fe)][_0x22945a(0x168) + _0x36bdfd][_0x22945a(0x1ff)] = 0x0, $[_0x22945a(0x3fe)]['target' + _0x36bdfd][_0x22945a(0x1ff)] = 0x0, $[_0x22945a(0x3fe)][_0x22945a(0x1bb) + _0x36bdfd][_0x22945a(0x1c2)] = $[_0x22945a(0x3fe)]['target' + _0x36bdfd]['scaleY'] = 0x3, TweenMax['to']($[_0x22945a(0x3fe)][_0x22945a(0x1bb) + _0x36bdfd], 0.5, {
        'alpha': 0x1,
        'scaleX': 0x1,
        'scaleY': 0x1,
        'overwrite': !![]
    })) : ($['players'][_0x22945a(0x1bb) + gameData['lastPlayerIndex']][_0x22945a(0x3ab)] = ![], $[_0x22945a(0x3fe)][_0x22945a(0x1bf) + gameData[_0x22945a(0x337)]]['alpha'] = 0x1, $[_0x22945a(0x3fe)][_0x22945a(0x168) + gameData['lastPlayerIndex']]['alpha'] = 0x1);
}

function toggleTargetPlayers(_0x1629ab) {
    var _0x529d2d = a0_0x45d961;
    for (var _0x5e103d = 0x0; _0x5e103d < gameData[_0x529d2d(0x3fe)]; _0x5e103d++) {
        killAnimateBlink($['players']['aim' + _0x5e103d]), $[_0x529d2d(0x3fe)]['aim' + _0x5e103d][_0x529d2d(0x3ab)] = ![], $[_0x529d2d(0x3fe)][_0x529d2d(0x1bf) + _0x5e103d]['alpha'] = 0x1, $['players'][_0x529d2d(0x168) + _0x5e103d][_0x529d2d(0x1ff)] = 0x1;
    }
    if (_0x1629ab) {
        var _0x3abe82 = ![];
        typeof initSocket == _0x529d2d(0x1a8) && multiplayerSettings['enable'] && socketData['online'] ? _0x3abe82 = !![] : gameData[_0x529d2d(0x359)] == 0x0 && (_0x3abe82 = !![]);
        showGameGuide('targetplayer');
        for (var _0x5e103d = 0x0; _0x5e103d < gameData[_0x529d2d(0x3fe)]; _0x5e103d++) {
            _0x5e103d != gameData['player'] && $[_0x529d2d(0x3fe)][_0x5e103d][_0x529d2d(0x1b6)] && ($[_0x529d2d(0x3fe)][_0x529d2d(0x1bf) + _0x5e103d][_0x529d2d(0x1ff)] = 0x0, $[_0x529d2d(0x3fe)][_0x529d2d(0x168) + _0x5e103d]['alpha'] = 0x0, $[_0x529d2d(0x3fe)][_0x529d2d(0x380) + _0x5e103d][_0x529d2d(0x3ab)] = !![], animateBlink($[_0x529d2d(0x3fe)][_0x529d2d(0x380) + _0x5e103d]));
        }
        if (!_0x3abe82) {
            var _0x5eb5b0 = [];
            for (var _0x5e103d = 0x0; _0x5e103d < gameData[_0x529d2d(0x3fe)]; _0x5e103d++) {
                _0x5e103d != gameData[_0x529d2d(0x359)] && $['players'][_0x5e103d][_0x529d2d(0x1b6)] && _0x5eb5b0['push']({
                    'index': _0x5e103d,
                    'cards': $[_0x529d2d(0x3fe)][_0x5e103d][_0x529d2d(0x103)]['length']
                });
            }
            sortOnObject(_0x5eb5b0, _0x529d2d(0x103), ![]), toggleTargetPlayers(![]), toggleTargetIcon(_0x5eb5b0[0x0]['index']), TweenMax['to'](cardsContainer, gameSettings['aiThinkSpeed'], {
                'overwrite': !![],
                'onComplete': function() {
                    var _0x5726f7 = _0x529d2d;
                    if (gameData[_0x5726f7(0x12c)][_0x5726f7(0x2e4)]) swapPlayerCards(_0x5eb5b0[0x0][_0x5726f7(0x10e)]);
                    else {
                        if (gameData[_0x5726f7(0x12c)][_0x5726f7(0x239)]) gameData['turn']['revealCard'] = ![], toggleTargetIcon(), checkRoundEnd();
                        else {
                            if (gameData[_0x5726f7(0x12c)][_0x5726f7(0x346)]) gameData[_0x5726f7(0x313)] = _0x5eb5b0[0x0][_0x5726f7(0x10e)], autoGiveCardToPlayer();
                            else gameData[_0x5726f7(0x12c)][_0x5726f7(0x1be)] ? removePlayers(_0x5eb5b0[0x0][_0x5726f7(0x10e)]) : targetedPlayerDraw(_0x5eb5b0[0x0][_0x5726f7(0x10e)]);
                        }
                    }
                }
            });
        }
    } else showGameGuide();
}

function positionPlayerCards(_0xeecb17, _0xb37cd0) {
    var _0x31a2ba = a0_0x45d961,
        _0x317368 = getPlayerCardPosition(_0xeecb17);
    for (var _0x1e02bb = 0x0; _0x1e02bb < $['players'][_0xeecb17][_0x31a2ba(0x103)][_0x31a2ba(0x2ee)]; _0x1e02bb++) {
        $[_0x31a2ba(0x3fe)][_0xeecb17][_0x31a2ba(0x293)] = _0x317368['x'], $[_0x31a2ba(0x3fe)][_0xeecb17]['cardY'] = _0x317368['y'];
        var _0x4610b6 = $['cards'][$[_0x31a2ba(0x3fe)][_0xeecb17]['cards'][_0x1e02bb]];
        if (_0x4610b6[_0x31a2ba(0x1f2)]) {
            _0x4610b6[_0x31a2ba(0x3a0)] = _0x317368['x'], _0x4610b6[_0x31a2ba(0x237)] = _0x317368['y'];
            if (_0x317368[_0x31a2ba(0x127)]) {
                var _0x28d64e = $[_0x31a2ba(0x3fe)][_0xeecb17]['dir'] == 'bottom' ? 0x0 : 0xb4;
                _0x317368['x'] += _0x317368[_0x31a2ba(0x28d)];
            } else {
                var _0x28d64e = $[_0x31a2ba(0x3fe)][_0xeecb17][_0x31a2ba(0x3b1)] == 'right' ? -0x5a : 0x5a;
                _0x317368['y'] += _0x317368[_0x31a2ba(0x28d)];
            }
            if (_0xb37cd0) {
                setCardDepth(_0x4610b6);
                var _0x397851 = gameSettings[_0x31a2ba(0x174)];
                TweenMax['to'](_0x4610b6, _0x397851, {
                    'x': _0x4610b6[_0x31a2ba(0x3a0)],
                    'y': _0x4610b6[_0x31a2ba(0x237)],
                    'rotation': _0x28d64e,
                    'scaleX': 0x1,
                    'scaleY': 0x1,
                    'overwrite': !![]
                });
            }
        }
    }
    var _0x1eed7b = gameSettings[_0x31a2ba(0x3ca)] / 0x2 + 0xf,
        _0x1dd446 = gameSettings[_0x31a2ba(0x166)] / 0x2 + 0xf,
        _0x186bcf = 0x14;
    $[_0x31a2ba(0x3fe)][_0x31a2ba(0x39d) + _0xeecb17][_0x31a2ba(0x2a9)]['y'] = $[_0x31a2ba(0x3fe)]['stats' + _0xeecb17]['playerScore']['y'] = -0xc, $[_0x31a2ba(0x3fe)]['stats' + _0xeecb17][_0x31a2ba(0x2a9)]['x'] = -0x96, $[_0x31a2ba(0x3fe)][_0x31a2ba(0x39d) + _0xeecb17][_0x31a2ba(0x135)]['x'] = 0x96, $[_0x31a2ba(0x3fe)][_0x31a2ba(0x39d) + _0xeecb17][_0x31a2ba(0x2a9)]['textAlign'] = _0x31a2ba(0x2d4), $[_0x31a2ba(0x3fe)][_0x31a2ba(0x39d) + _0xeecb17]['playerScore']['textAlign'] = 'right';
    var _0x49e003 = 0x1c2,
        _0x27adad = 0xfa;
    !viewport[_0x31a2ba(0x3ea)] && (_0x49e003 = 0xfa, _0x27adad = 0x15e);
    if ($[_0x31a2ba(0x3fe)][_0xeecb17][_0x31a2ba(0x3b1)] == _0x31a2ba(0x2d5)) $[_0x31a2ba(0x3fe)][_0x31a2ba(0x39d) + _0xeecb17][_0x31a2ba(0x204)] = 0x0, $['players']['stats' + _0xeecb17]['x'] = $[_0x31a2ba(0x3fe)][_0xeecb17]['x'], $['players'][_0x31a2ba(0x39d) + _0xeecb17]['y'] = $['players'][_0xeecb17]['y'] - _0x1dd446, $[_0x31a2ba(0x3fe)][_0x31a2ba(0x1bf) + _0xeecb17]['x'] = $[_0x31a2ba(0x3fe)][_0xeecb17]['x'], $[_0x31a2ba(0x3fe)][_0x31a2ba(0x1bf) + _0xeecb17]['y'] = $[_0x31a2ba(0x3fe)][_0xeecb17]['y'] - (_0x1dd446 + _0x186bcf), $[_0x31a2ba(0x3fe)][_0x31a2ba(0x1b2) + _0xeecb17]['x'] = $['players'][_0xeecb17]['x'] - _0x49e003, $['players'][_0x31a2ba(0x1b2) + _0xeecb17]['y'] = $[_0x31a2ba(0x3fe)][_0xeecb17]['y'], $['players'][_0x31a2ba(0x1b2) + _0xeecb17][_0x31a2ba(0x204)] = 0x0;
    else {
        if ($['players'][_0xeecb17][_0x31a2ba(0x3b1)] == _0x31a2ba(0x1ad)) $[_0x31a2ba(0x3fe)]['stats' + _0xeecb17][_0x31a2ba(0x204)] = 0x0, $[_0x31a2ba(0x3fe)][_0x31a2ba(0x39d) + _0xeecb17]['x'] = $[_0x31a2ba(0x3fe)][_0xeecb17]['x'], $[_0x31a2ba(0x3fe)][_0x31a2ba(0x39d) + _0xeecb17]['y'] = $[_0x31a2ba(0x3fe)][_0xeecb17]['y'] + _0x1dd446, $['players'][_0x31a2ba(0x1bf) + _0xeecb17]['x'] = $[_0x31a2ba(0x3fe)][_0xeecb17]['x'], $[_0x31a2ba(0x3fe)][_0x31a2ba(0x1bf) + _0xeecb17]['y'] = $['players'][_0xeecb17]['y'] + (_0x1dd446 + _0x186bcf), $['players']['stats' + _0xeecb17][_0x31a2ba(0x2a9)]['y'] = $['players'][_0x31a2ba(0x39d) + _0xeecb17][_0x31a2ba(0x135)]['y'] = 0x10, $[_0x31a2ba(0x3fe)]['stats' + _0xeecb17][_0x31a2ba(0x2a9)]['x'] = 0x96, $[_0x31a2ba(0x3fe)][_0x31a2ba(0x39d) + _0xeecb17][_0x31a2ba(0x135)]['x'] = -0x96, $[_0x31a2ba(0x3fe)][_0x31a2ba(0x39d) + _0xeecb17][_0x31a2ba(0x2a9)]['textAlign'] = 'right', $[_0x31a2ba(0x3fe)][_0x31a2ba(0x39d) + _0xeecb17][_0x31a2ba(0x135)][_0x31a2ba(0x3e2)] = _0x31a2ba(0x2d4), $[_0x31a2ba(0x3fe)]['arrow' + _0xeecb17]['x'] = $[_0x31a2ba(0x3fe)][_0xeecb17]['x'] + _0x49e003, $[_0x31a2ba(0x3fe)]['arrow' + _0xeecb17]['y'] = $[_0x31a2ba(0x3fe)][_0xeecb17]['y'], $[_0x31a2ba(0x3fe)][_0x31a2ba(0x1b2) + _0xeecb17]['rotation'] = 0xb4;
        else {
            if ($[_0x31a2ba(0x3fe)][_0xeecb17][_0x31a2ba(0x3b1)] == _0x31a2ba(0x2d4)) $[_0x31a2ba(0x3fe)][_0x31a2ba(0x39d) + _0xeecb17][_0x31a2ba(0x204)] = 0x5a, $['players'][_0x31a2ba(0x39d) + _0xeecb17]['x'] = $[_0x31a2ba(0x3fe)][_0xeecb17]['x'] + _0x1dd446, $[_0x31a2ba(0x3fe)][_0x31a2ba(0x39d) + _0xeecb17]['y'] = $[_0x31a2ba(0x3fe)][_0xeecb17]['y'], $['players'][_0x31a2ba(0x1bf) + _0xeecb17]['x'] = $[_0x31a2ba(0x3fe)][_0xeecb17]['x'] + (_0x1dd446 + _0x186bcf), $['players']['call' + _0xeecb17]['y'] = $[_0x31a2ba(0x3fe)][_0xeecb17]['y'], $[_0x31a2ba(0x3fe)][_0x31a2ba(0x1b2) + _0xeecb17]['x'] = $[_0x31a2ba(0x3fe)][_0xeecb17]['x'], $[_0x31a2ba(0x3fe)][_0x31a2ba(0x1b2) + _0xeecb17]['y'] = $[_0x31a2ba(0x3fe)][_0xeecb17]['y'] - _0x27adad, $[_0x31a2ba(0x3fe)][_0x31a2ba(0x1b2) + _0xeecb17]['rotation'] = 0x5a;
            else $['players'][_0xeecb17][_0x31a2ba(0x3b1)] == _0x31a2ba(0x321) && ($[_0x31a2ba(0x3fe)][_0x31a2ba(0x39d) + _0xeecb17][_0x31a2ba(0x204)] = -0x5a, $[_0x31a2ba(0x3fe)][_0x31a2ba(0x39d) + _0xeecb17]['x'] = $[_0x31a2ba(0x3fe)][_0xeecb17]['x'] - _0x1dd446, $[_0x31a2ba(0x3fe)]['stats' + _0xeecb17]['y'] = $[_0x31a2ba(0x3fe)][_0xeecb17]['y'], $[_0x31a2ba(0x3fe)]['call' + _0xeecb17]['x'] = $[_0x31a2ba(0x3fe)][_0xeecb17]['x'] - (_0x1dd446 + _0x186bcf), $[_0x31a2ba(0x3fe)]['call' + _0xeecb17]['y'] = $['players'][_0xeecb17]['y'], $[_0x31a2ba(0x3fe)][_0x31a2ba(0x1b2) + _0xeecb17]['x'] = $[_0x31a2ba(0x3fe)][_0xeecb17]['x'], $['players'][_0x31a2ba(0x1b2) + _0xeecb17]['y'] = $[_0x31a2ba(0x3fe)][_0xeecb17]['y'] + _0x27adad, $['players'][_0x31a2ba(0x1b2) + _0xeecb17]['rotation'] = -0x5a);
        }
    }
    $[_0x31a2ba(0x3fe)][_0x31a2ba(0x168) + _0xeecb17]['x'] = $['players']['aim' + _0xeecb17]['x'] = $['players'][_0x31a2ba(0x1bb) + _0xeecb17]['x'] = $[_0x31a2ba(0x3fe)][_0x31a2ba(0x24a) + _0xeecb17]['x'] = $[_0x31a2ba(0x3fe)][_0x31a2ba(0x1c6) + _0xeecb17]['x'] = $[_0x31a2ba(0x3fe)][_0x31a2ba(0x1bf) + _0xeecb17]['x'], $[_0x31a2ba(0x3fe)]['called' + _0xeecb17]['y'] = $[_0x31a2ba(0x3fe)][_0x31a2ba(0x380) + _0xeecb17]['y'] = $[_0x31a2ba(0x3fe)]['target' + _0xeecb17]['y'] = $[_0x31a2ba(0x3fe)][_0x31a2ba(0x24a) + _0xeecb17]['y'] = $[_0x31a2ba(0x3fe)][_0x31a2ba(0x1c6) + _0xeecb17]['y'] = $[_0x31a2ba(0x3fe)]['call' + _0xeecb17]['y'];
}

function flipCard(_0x2eb91c) {
    var _0x2369b3 = a0_0x45d961;
    playSound(_0x2369b3(0x20b)), _0x2eb91c[_0x2369b3(0x3d8)][_0x2369b3(0x3ab)] = !![], _0x2eb91c['contentContainer'][_0x2369b3(0x1c2)] = 0x0;
    var _0x571bca = gameSettings[_0x2369b3(0x3df)];
    TweenMax['to'](_0x2eb91c['frontContainer'], _0x571bca, {
        'scaleX': 0x0
    }), TweenMax['to'](_0x2eb91c[_0x2369b3(0x3d8)], _0x571bca, {
        'delay': _0x571bca,
        'scaleX': 0x1
    }), TweenMax['to'](_0x2eb91c['shadow'], _0x571bca, {
        'scaleX': 0x0
    }), TweenMax['to'](_0x2eb91c[_0x2369b3(0x28b)], _0x571bca, {
        'delay': _0x571bca,
        'scaleX': 0x1
    });
}

function a0_0x42f1(_0x25acf5, _0x50eb38) {
    var _0x52da42 = a0_0x52da();
    return a0_0x42f1 = function(_0x42f19b, _0x129ffe) {
        _0x42f19b = _0x42f19b - 0xfa;
        var _0x387b8c = _0x52da42[_0x42f19b];
        return _0x387b8c;
    }, a0_0x42f1(_0x25acf5, _0x50eb38);
}

function flipCardCover(_0x5e4f7a) {
    var _0x3cddd0 = a0_0x45d961;
    playSound(_0x3cddd0(0x20b)), _0x5e4f7a[_0x3cddd0(0x379)][_0x3cddd0(0x3ab)] = !![], _0x5e4f7a[_0x3cddd0(0x379)][_0x3cddd0(0x1c2)] = 0x0;
    var _0x339e6d = gameSettings[_0x3cddd0(0x3df)];
    TweenMax['to'](_0x5e4f7a[_0x3cddd0(0x3d8)], _0x339e6d, {
        'scaleX': 0x0
    }), TweenMax['to'](_0x5e4f7a[_0x3cddd0(0x379)], _0x339e6d, {
        'delay': _0x339e6d,
        'scaleX': 0x1
    }), TweenMax['to'](_0x5e4f7a[_0x3cddd0(0x28b)], _0x339e6d, {
        'scaleX': 0x0
    }), TweenMax['to'](_0x5e4f7a[_0x3cddd0(0x28b)], _0x339e6d, {
        'delay': _0x339e6d,
        'scaleX': 0x1
    });
}

function showDrawCard(_0x36f99d) {
    var _0x479a38 = a0_0x45d961;
    if (gameData[_0x479a38(0x1f9)][_0x479a38(0x2ee)] > 0x1) {
        var _0x252970 = gameSettings['cardW'],
            _0x585c6d = gameSettings[_0x479a38(0x174)],
            _0x2390f4 = gameData[_0x479a38(0x1f9)][0x0];
        _0x36f99d && gameData[_0x479a38(0x1f9)][_0x479a38(0x365)](0x0, 0x1);
        for (var _0x4f3169 = 0x0; _0x4f3169 < gameData[_0x479a38(0x1f9)][_0x479a38(0x2ee)]; _0x4f3169++) {
            var _0x92dfb9 = $[_0x479a38(0x103)][gameData[_0x479a38(0x1f9)][_0x4f3169]];
            _0x4f3169 == 0x0 ? (_0x92dfb9[_0x479a38(0x379)][_0x479a38(0x1c2)] = 0x1, _0x92dfb9['frontContainer'][_0x479a38(0x3ab)] = !![], _0x92dfb9[_0x479a38(0x3d8)][_0x479a38(0x3ab)] = ![], _0x92dfb9[_0x479a38(0x3ab)] = !![], setCardDepth(_0x92dfb9)) : _0x92dfb9[_0x479a38(0x3ab)] = ![], TweenMax['to'](_0x92dfb9, _0x585c6d, {
                'x': -(_0x252970 / 0x2),
                'overwrite': !![]
            });
        }
        if (_0x36f99d) showDiscardCard(_0x2390f4, !![]);
        else {
            var _0x3af48b = gameData[_0x479a38(0x2bd)][gameData[_0x479a38(0x2bd)][_0x479a38(0x2ee)] - 0x1],
                _0x92dfb9 = $['cards'][_0x3af48b];
            setCardDepth(_0x92dfb9);
        }
    } else {
        var _0x13dae6 = ![];
        for (var _0xa5ead = 0x0; _0xa5ead < gameData['discard'][_0x479a38(0x2ee)] - 0x2; _0xa5ead++) {
            _0x13dae6 = !![], gameData[_0x479a38(0x1f9)][_0x479a38(0x175)](gameData[_0x479a38(0x2bd)][_0xa5ead]);
        }
        for (var _0xa5ead = 0x0; _0xa5ead < gameData['discard'][_0x479a38(0x2ee)] - 0x2; _0xa5ead++) {
            gameData['discard'][_0x479a38(0x365)](_0xa5ead, 0x1), _0xa5ead--;
        }
        _0x13dae6 ? (shuffle(gameData[_0x479a38(0x1f9)]), typeof initSocket == _0x479a38(0x1a8) && multiplayerSettings[_0x479a38(0x30b)] && socketData['online'] ? postSocketUpdate(_0x479a38(0x3ee), socketData['gameIndex']) : showDrawCard(_0x36f99d)) : (gameData[_0x479a38(0x3c4)] = !![], showGameStatus(_0x479a38(0x206)));
    }
}

function setCardDepth(_0x2535e0) {
    var _0x3c214 = a0_0x45d961;
    cardsPlayContainer['setChildIndex'](_0x2535e0[_0x3c214(0x28b)], cardsPlayContainer[_0x3c214(0x35f)] - 0x1), cardsPlayContainer[_0x3c214(0x2bf)](_0x2535e0, cardsPlayContainer[_0x3c214(0x35f)] - 0x1), cardsPlayContainer['setChildIndex'](_0x2535e0[_0x3c214(0x2a6)], cardsPlayContainer[_0x3c214(0x35f)] - 0x1), cardsPlayContainer[_0x3c214(0x2bf)](_0x2535e0[_0x3c214(0x1c6)], cardsPlayContainer[_0x3c214(0x35f)] - 0x1);
}

function showDiscardCard(_0x2464c6, _0x232ee3) {
    var _0x4c0e75 = a0_0x45d961,
        _0x30cdf1 = gameSettings[_0x4c0e75(0x3ca)],
        _0x45ee2c = gameSettings[_0x4c0e75(0x174)];
    gameData['discard'][_0x4c0e75(0x175)](_0x2464c6);
    var _0x58a547 = gameData[_0x4c0e75(0x2bd)][gameData[_0x4c0e75(0x2bd)][_0x4c0e75(0x2ee)] - 0x1],
        _0x28c969 = $[_0x4c0e75(0x103)][_0x58a547];
    _0x28c969[_0x4c0e75(0x1f2)] = ![], toggleCardAction(_0x28c969, ![]), setCardDepth(_0x28c969), _0x232ee3 && flipCard(_0x28c969), playSound(_0x4c0e75(0x19e)), TweenMax['to'](_0x28c969, _0x45ee2c, {
        'x': _0x30cdf1 / 0x2,
        'y': 0x0,
        'rotation': 0x0,
        'overwrite': !![],
        'onComplete': showDiscardCardComplete,
        'onCompleteParams': [_0x28c969]
    }), getMatchDetail();
}

function showDiscardCardComplete(_0x57d1e1) {
    var _0x4b272b = a0_0x45d961,
        _0x571313 = !![];
    if (gameData[_0x4b272b(0x1d1)][_0x4b272b(0x3c1)] == 0x0) {
        for (var _0x2ada17 = 0x0; _0x2ada17 < gameData[_0x4b272b(0x3fe)]; _0x2ada17++) {
            $['players'][_0x4b272b(0x39d) + _0x2ada17]['visible'] = !![], $[_0x4b272b(0x3fe)][_0x4b272b(0x1b2) + _0x2ada17][_0x4b272b(0x3ab)] = !![];
        }
        typeof initSocket == _0x4b272b(0x1a8) && multiplayerSettings[_0x4b272b(0x30b)] && socketData[_0x4b272b(0x3d3)] ? $['players'][_0x4b272b(0x1bf) + socketData[_0x4b272b(0x368)]][_0x4b272b(0x3ab)] = !![] : $[_0x4b272b(0x3fe)][_0x4b272b(0x1bf) + 0x0][_0x4b272b(0x3ab)] = !![], itemColors[_0x4b272b(0x1ff)] = 0x1, gameData['excludeFirst'][_0x4b272b(0x1c4)](_0x57d1e1['cardType']) != -0x1 ? (_0x571313 = ![], showDrawCard(!![])) : (toggleArrowTurn(), displayPlayerTurn());
    }
    _0x571313 && checkDiscardCard(_0x57d1e1[_0x4b272b(0x340)]);
}

function checkDiscardCard(_0x752dbd) {
    var _0x8f9df3 = a0_0x45d961;
    gameData['turn'][_0x8f9df3(0xfb)] = _0x752dbd, gameData[_0x8f9df3(0x12c)][_0x8f9df3(0x11c)] = 0x0;
    if ($[_0x8f9df3(0x3fe)][gameData['player']][_0x8f9df3(0x103)][_0x8f9df3(0x2ee)] == 0x0) highlightPlayer(![]), showGameStatus(_0x8f9df3(0x386));
    else {
        if (gameData[_0x8f9df3(0x1cc)] == 0x1) highlightPlayer(![]), showGameStatus(_0x8f9df3(0x3f9));
        else {
            if (_0x752dbd == _0x8f9df3(0x264)) gameData['turn']['drawCards'] = gameData[_0x8f9df3(0x12c)][_0x8f9df3(0x11c)] = 0x2, showGameStatus(_0x752dbd);
            else {
                if (_0x752dbd == 'draw3') gameData['turn']['drawCards'] = gameData[_0x8f9df3(0x12c)]['drawCardsTotal'] = 0x3, showGameStatus(_0x752dbd);
                else {
                    if (_0x752dbd == _0x8f9df3(0x220)) gameData['turn'][_0x8f9df3(0x30c)] = !![], gameData[_0x8f9df3(0x1cc)] == 0x2 ? gameData['turn']['reverseCount'] = 0x1 : gameData['match']['count'] == 0x0 ? gameData['turn'][_0x8f9df3(0x10b)] = 0x1 : gameData[_0x8f9df3(0x12c)][_0x8f9df3(0x10b)] = 0x2, showGameStatus(_0x752dbd);
                    else {
                        if (_0x752dbd == _0x8f9df3(0x24a)) gameData['turn'][_0x8f9df3(0x24a)] = !![], togglePlayerSkip(!![], !![]), showGameStatus(_0x752dbd);
                        else {
                            if (_0x752dbd == _0x8f9df3(0x215)) gameData[_0x8f9df3(0x12c)]['pickColors'] = !![], showGameStatus(_0x752dbd);
                            else {
                                if (_0x752dbd == _0x8f9df3(0x221)) gameData[_0x8f9df3(0x12c)][_0x8f9df3(0x1ca)] = !![], gameData['turn'][_0x8f9df3(0x292)] = gameData[_0x8f9df3(0x12c)][_0x8f9df3(0x11c)] = 0x4, showGameStatus(_0x752dbd);
                                else {
                                    if (_0x752dbd == _0x8f9df3(0x357)) gameData[_0x8f9df3(0x12c)][_0x8f9df3(0x239)] = !![], gameData['turn']['targetPlayerAim'] = !![], showGameStatus(_0x752dbd);
                                    else {
                                        if (_0x752dbd == _0x8f9df3(0x369)) gameData[_0x8f9df3(0x12c)][_0x8f9df3(0x313)] = gameData[_0x8f9df3(0x359)], gameData['turn']['targetDrawCards'] = 0x1, gameData[_0x8f9df3(0x12c)]['targetDrawCard'] = !![], showGameStatus(_0x752dbd);
                                        else {
                                            if (_0x752dbd == _0x8f9df3(0x11b)) {
                                                var _0xbbdde0 = {
                                                    'action': _0x8f9df3(0x220),
                                                    'data': [{
                                                        'obj': _0x8f9df3(0x30c),
                                                        'value': !![]
                                                    }, {
                                                        'obj': _0x8f9df3(0x10b),
                                                        'value': 0x2
                                                    }]
                                                };
                                                gameData['turn']['queue'][_0x8f9df3(0x175)](_0xbbdde0);
                                                var _0xbbdde0 = {
                                                    'action': _0x8f9df3(0x24a),
                                                    'data': []
                                                };
                                                gameData[_0x8f9df3(0x12c)]['queue'][_0x8f9df3(0x175)](_0xbbdde0);
                                                var _0xbbdde0 = {
                                                    'action': _0x8f9df3(0x264),
                                                    'data': [{
                                                        'obj': _0x8f9df3(0x1f8),
                                                        'value': 0x2
                                                    }, {
                                                        'obj': 'targetDrawCard',
                                                        'value': !![]
                                                    }, {
                                                        'obj': _0x8f9df3(0x2c6),
                                                        'value': !![]
                                                    }]
                                                };
                                                gameData['turn'][_0x8f9df3(0x347)]['push'](_0xbbdde0), showGameStatus(_0x752dbd);
                                            } else {
                                                if (_0x752dbd == _0x8f9df3(0x304)) gameData[_0x8f9df3(0x12c)][_0x8f9df3(0x3be)] = !![], gameData[_0x8f9df3(0x12c)][_0x8f9df3(0x211)] = 0x2, gameData[_0x8f9df3(0x12c)][_0x8f9df3(0x346)] = !![], showGameStatus(_0x752dbd);
                                                else {
                                                    if (_0x752dbd == 'targeteddraw2') {
                                                        gameData['turn'][_0x8f9df3(0x3be)] = !![];
                                                        var _0xbbdde0 = {
                                                            'action': _0x8f9df3(0x264),
                                                            'data': [{
                                                                'obj': _0x8f9df3(0x1f8),
                                                                'value': 0x2
                                                            }, {
                                                                'obj': _0x8f9df3(0x15a),
                                                                'value': !![]
                                                            }, {
                                                                'obj': 'continuePlay',
                                                                'value': !![]
                                                            }]
                                                        };
                                                        gameData['turn'][_0x8f9df3(0x347)][_0x8f9df3(0x175)](_0xbbdde0), showGameStatus(_0x752dbd);
                                                    } else {
                                                        if (_0x752dbd == _0x8f9df3(0x2a3)) gameData[_0x8f9df3(0x12c)]['targetPlayerAim'] = !![], gameData[_0x8f9df3(0x12c)][_0x8f9df3(0x1be)] = !![], showGameStatus(_0x752dbd);
                                                        else {
                                                            if (_0x752dbd == _0x8f9df3(0x172)) gameData['turn']['pickColors'] = !![], gameData['turn']['frozenPick'] = !![], gameData[_0x8f9df3(0x12c)][_0x8f9df3(0x141)] = !![], gameData[_0x8f9df3(0x12c)][_0x8f9df3(0x114)] = gameData['player'], showGameStatus(_0x752dbd);
                                                            else {
                                                                if (_0x752dbd == _0x8f9df3(0x38d)) gameData[_0x8f9df3(0x12c)][_0x8f9df3(0x224)] = 0x32, showGameStatus(_0x752dbd);
                                                                else {
                                                                    if (_0x752dbd == _0x8f9df3(0x266)) {
                                                                        gameData['turn'][_0x8f9df3(0x3be)] = !![];
                                                                        var _0xbbdde0 = {
                                                                            'action': 'draw3',
                                                                            'data': [{
                                                                                'obj': 'targetDrawCards',
                                                                                'value': 0x3
                                                                            }, {
                                                                                'obj': _0x8f9df3(0x15a),
                                                                                'value': !![]
                                                                            }, {
                                                                                'obj': _0x8f9df3(0x291),
                                                                                'value': !![]
                                                                            }]
                                                                        };
                                                                        gameData[_0x8f9df3(0x12c)][_0x8f9df3(0x347)][_0x8f9df3(0x175)](_0xbbdde0), showGameStatus(_0x752dbd);
                                                                    } else {
                                                                        if (_0x752dbd == _0x8f9df3(0x3ef)) gameData[_0x8f9df3(0x12c)]['shuffle'] = !![], showGameStatus(_0x752dbd);
                                                                        else {
                                                                            if (_0x752dbd == 'swapcards') gameData['turn']['targetPlayerAim'] = !![], gameData['turn'][_0x8f9df3(0x2e4)] = !![], showGameStatus(_0x752dbd);
                                                                            else _0x752dbd == _0x8f9df3(0x27f) ? (gameData[_0x8f9df3(0x12c)][_0x8f9df3(0x313)] = gameData[_0x8f9df3(0x359)], gameData[_0x8f9df3(0x12c)][_0x8f9df3(0x1f8)] = 0x4, gameData[_0x8f9df3(0x12c)][_0x8f9df3(0x15a)] = !![], showGameStatus(_0x752dbd)) : checkRoundEnd();
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function drawPlayerCard(_0x3319a9) {
    var _0x4bb646 = a0_0x45d961;
    gameData['turn'][_0x4bb646(0x3e7)] = !![], $['players'][_0x4bb646(0x168) + gameData[_0x4bb646(0x359)]][_0x4bb646(0x3ab)] = ![];
    _0x3319a9 && (gameData[_0x4bb646(0x12c)]['penalty'] ? gameData['turn'][_0x4bb646(0x2af)] > 0x0 && gameData[_0x4bb646(0x12c)][_0x4bb646(0x2af)]-- : gameData[_0x4bb646(0x12c)][_0x4bb646(0x292)] > 0x0 && gameData[_0x4bb646(0x12c)][_0x4bb646(0x292)]--);
    var _0x3033a6 = gameData[_0x4bb646(0x1f9)][0x0];
    gameData[_0x4bb646(0x1f9)]['splice'](0x0, 0x1), showDrawCard(![]), $[_0x4bb646(0x3fe)][gameData[_0x4bb646(0x359)]][_0x4bb646(0x103)]['push'](_0x3033a6);
    var _0x4da515 = $['cards'][_0x3033a6],
        _0x4e6b1b = gameData[_0x4bb646(0x359)],
        _0x27f0a8 = getPlayerCardPosition(_0x4e6b1b);
    setCardDepth(_0x4da515), highlightCard(_0x4da515, ![]), _0x4da515[_0x4bb646(0x3a0)] = $[_0x4bb646(0x3fe)][_0x4e6b1b][_0x4bb646(0x293)], _0x4da515[_0x4bb646(0x237)] = $[_0x4bb646(0x3fe)][_0x4e6b1b][_0x4bb646(0x31c)];
    if (_0x27f0a8[_0x4bb646(0x127)]) var _0x1866fd = $[_0x4bb646(0x3fe)][_0x4e6b1b][_0x4bb646(0x3b1)] == _0x4bb646(0x2d5) ? 0x0 : 0xb4;
    else var _0x1866fd = $[_0x4bb646(0x3fe)][_0x4e6b1b][_0x4bb646(0x3b1)] == 'right' ? -0x5a : 0x5a;
    var _0x286ffe = gameSettings[_0x4bb646(0x343)];
    TweenMax['to'](_0x4da515, _0x286ffe, {
        'x': _0x4da515[_0x4bb646(0x3a0)],
        'y': _0x4da515[_0x4bb646(0x237)],
        'rotation': _0x1866fd,
        'scaleX': 0x1,
        'scaleY': 0x1,
        'overwrite': !![],
        'onStart': function() {
            var _0x3d6c4a = _0x4bb646;
            _0x4da515['cardDeal'] = !![], playSound(_0x3d6c4a(0x19e));
        },
        'onComplete': drawPlayerCardComplete,
        'onCompleteParams': [_0x4e6b1b, _0x4da515]
    });
}

function drawPlayerCardComplete(_0x4b4bf3, _0x4aa4e9) {
    var _0x2e5418 = a0_0x45d961;
    gameData[_0x2e5418(0x12c)]['animating'] = ![];
    var _0x14e59e = ![];
    typeof initSocket == _0x2e5418(0x1a8) && multiplayerSettings[_0x2e5418(0x30b)] && socketData[_0x2e5418(0x3d3)] ? _0x4b4bf3 == socketData[_0x2e5418(0x368)] && (_0x14e59e = !![]) : _0x4b4bf3 == 0x0 && (_0x14e59e = !![]), _0x14e59e && (toggleCardAction(_0x4aa4e9, !![]), flipCard(_0x4aa4e9)), positionPlayerCards(_0x4b4bf3, !![]), loopCardAction();
}

function getMatchDetail() {
    var _0x3b73fb = a0_0x45d961,
        _0x1a254b = gameData[_0x3b73fb(0x2bd)][gameData[_0x3b73fb(0x2bd)][_0x3b73fb(0x2ee)] - 0x1],
        _0x265a6d = $[_0x3b73fb(0x103)][_0x1a254b];
    gameData['match'][_0x3b73fb(0x245)] = _0x265a6d[_0x3b73fb(0x340)];
    gameData['excludeMatch'][_0x3b73fb(0x1c4)](_0x265a6d['cardType']) == -0x1 && (gameData[_0x3b73fb(0x1d1)][_0x3b73fb(0x384)] = _0x265a6d[_0x3b73fb(0x33e)], gameData[_0x3b73fb(0x1d1)][_0x3b73fb(0x299)] = _0x265a6d['cardValue']);
    var _0x272d63 = gameData[_0x3b73fb(0x12c)][_0x3b73fb(0x149)];
    gameData[_0x3b73fb(0x12c)][_0x3b73fb(0xfd)] && (_0x272d63 = ![], gameData['turn'][_0x3b73fb(0xfd)] = ![], gameData['turn'][_0x3b73fb(0x149)] = !![], itemFrozen[_0x3b73fb(0x1ff)] = 0x1, playSound('soundFreeze'), animateFocus(itemFrozen)), gameData[_0x3b73fb(0x1d1)][_0x3b73fb(0x203)] != gameData['match'][_0x3b73fb(0x384)] && !_0x272d63 && (playSound('soundColor'), gameData[_0x3b73fb(0x1d1)][_0x3b73fb(0x203)] = gameData['match'][_0x3b73fb(0x384)], itemColors[_0x3b73fb(0x18f)](gameData[_0x3b73fb(0x13c)][_0x3b73fb(0x1c4)](gameData[_0x3b73fb(0x1d1)][_0x3b73fb(0x384)])), TweenMax['to'](itemColors, 0.2, {
        'scaleX': 0x1,
        'scaleY': 0x1,
        'overwrite': !![],
        'onComplete': function() {
            TweenMax['to'](itemColors, 0.2, {
                'scaleX': 0.7,
                'scaleY': 0.7,
                'overwrite': !![]
            });
        }
    }));
}

function tryAIMove(_0x388251) {
    var _0xfdee19 = a0_0x45d961;
    if (!gameData['ai']) return;
    if (gameData['turn'][_0xfdee19(0x257)]) checkRoundEnd();
    else {
        var _0x17dde0 = gameData[_0xfdee19(0x12c)][_0xfdee19(0x328)] > 0x0 ? 0.2 : gameSettings[_0xfdee19(0x2e6)];
        _0x388251['length'] > 0x0 ? TweenMax['to']($[_0xfdee19(0x3fe)][gameData[_0xfdee19(0x359)]], _0x17dde0, {
            'overwrite': !![],
            'onComplete': function() {
                shuffle(_0x388251), discardPlayerCard(_0x388251[0x0], !![]);
            }
        }) : gameData[_0xfdee19(0x12c)][_0xfdee19(0x328)] >= 0x1 ? checkRoundEnd() : TweenMax['to']($[_0xfdee19(0x3fe)][gameData[_0xfdee19(0x359)]], _0x17dde0, {
            'overwrite': !![],
            'onComplete': function() {
                var _0x13fc82 = _0xfdee19;
                gameData['turn'][_0x13fc82(0x328)]++, drawPlayerCard(![]);
            }
        });
    }
}

function displayPlayerTurn() {
    var _0x862c11 = a0_0x45d961;
    gameData[_0x862c11(0x1d1)][_0x862c11(0x1b6)] = !![], gameData['turn'][_0x862c11(0x2a6)] = !![], gameData['turn'][_0x862c11(0x2c6)] = ![], gameData[_0x862c11(0x12c)]['drawCount'] = 0x0, gameData[_0x862c11(0x12c)][_0x862c11(0x28a)] = 0x0, gameData[_0x862c11(0x12c)][_0x862c11(0x329)] = ![], gameData[_0x862c11(0x12c)][_0x862c11(0x257)] = ![], gameData[_0x862c11(0x12c)][_0x862c11(0x291)] = ![], gameData[_0x862c11(0x12c)][_0x862c11(0x3ed)] = ![];
    var _0x35f2b0 = ![];
    if (gameData['turn'][_0x862c11(0x347)][_0x862c11(0x2ee)] > 0x0) {
        for (var _0x2e1cc4 = 0x0; _0x2e1cc4 < gameData[_0x862c11(0x12c)][_0x862c11(0x347)][0x0][_0x862c11(0x2ea)][_0x862c11(0x2ee)]; _0x2e1cc4++) {
            gameData[_0x862c11(0x12c)][gameData['turn'][_0x862c11(0x347)][0x0][_0x862c11(0x2ea)][_0x2e1cc4][_0x862c11(0x30e)]] = gameData[_0x862c11(0x12c)][_0x862c11(0x347)][0x0][_0x862c11(0x2ea)][_0x2e1cc4][_0x862c11(0x299)];
        }
        if (gameData[_0x862c11(0x12c)]['queue'][0x0][_0x862c11(0x14c)] == _0x862c11(0x264)) gameData[_0x862c11(0x12c)]['targetPlayer'] = gameData[_0x862c11(0x359)];
        else {
            if (gameData[_0x862c11(0x12c)][_0x862c11(0x347)][0x0]['action'] == _0x862c11(0x324)) gameData[_0x862c11(0x12c)][_0x862c11(0x313)] = gameData[_0x862c11(0x359)];
            else gameData[_0x862c11(0x12c)][_0x862c11(0x347)][0x0][_0x862c11(0x14c)] == _0x862c11(0x24a) && togglePlayerSkip(!![], ![]);
        }
        showGameStatus(gameData[_0x862c11(0x12c)]['queue'][0x0][_0x862c11(0x14c)]), gameData['turn'][_0x862c11(0x347)][_0x862c11(0x365)](0x0, 0x1), _0x35f2b0 = !![];
    }!_0x35f2b0 && (gameData['turn'][_0x862c11(0x292)] > 0x0 && (gameData[_0x862c11(0x12c)][_0x862c11(0x2a6)] = ![], gameData['turn'][_0x862c11(0x2c6)] = !![]), loopCardAction()), gameData[_0x862c11(0x12c)][_0x862c11(0x2a6)] && highlightPlayer(!![]), !gameData[_0x862c11(0x12c)][_0x862c11(0x2c6)] && (!_0x35f2b0 && (typeof initSocket == _0x862c11(0x1a8) && multiplayerSettings[_0x862c11(0x30b)] && socketData['online'] ? postSocketUpdate(_0x862c11(0x396), socketData['gameIndex']) : playerReadyAction()));
}

function playerReadyAction() {
    var _0x228b65 = a0_0x45d961,
        _0x248d7f = checkIsPlayer(gameData[_0x228b65(0x359)]);
    _0x248d7f && TweenMax['to']($[_0x228b65(0x3fe)][gameData[_0x228b65(0x359)]], 0x1, {
        'overwrite': !![],
        'onComplete': function() {
            var _0x43f27a = _0x228b65;
            gameData[_0x43f27a(0x12c)][_0x43f27a(0x14c)] = !![];
        }
    });
}

function loopCardAction() {
    var _0x3923ef = a0_0x45d961;
    if (gameData[_0x3923ef(0x3c4)]) return;
    if (gameData[_0x3923ef(0x12c)][_0x3923ef(0x2af)] > 0x0) drawPlayerCard(!![]);
    else {
        if (gameData[_0x3923ef(0x12c)][_0x3923ef(0x292)] > 0x0 && !gameData['turn'][_0x3923ef(0x3ed)]) gameData[_0x3923ef(0x12c)]['drawCardsCount']++, drawPlayerCard(!![]);
        else {
            gameData['turn'][_0x3923ef(0x28a)] == gameData[_0x3923ef(0x12c)][_0x3923ef(0x11c)] && gameData[_0x3923ef(0x12c)][_0x3923ef(0x11c)] != 0x0 && (gameData[_0x3923ef(0x12c)]['continuePlay'] ? (gameData[_0x3923ef(0x12c)][_0x3923ef(0x14c)] = !![], gameData[_0x3923ef(0x12c)][_0x3923ef(0x291)] = ![]) : gameData[_0x3923ef(0x12c)][_0x3923ef(0x257)] = !![]);
            if (!gameData['turn']['played']) {
                var _0x44d217 = checkPossibleCard(gameData[_0x3923ef(0x359)]),
                    _0x19cd42 = checkIsPlayer(gameData[_0x3923ef(0x359)]);
                if (_0x19cd42) {
                    if (gameData[_0x3923ef(0x12c)][_0x3923ef(0x257)]) gameData['turn'][_0x3923ef(0x329)] = ![], checkRoundEnd();
                    else {
                        if (_0x44d217[_0x3923ef(0x2ee)] > 0x0) {
                            for (var _0x4a3661 = 0x0; _0x4a3661 < _0x44d217['length']; _0x4a3661++) {
                                highlightCard($['cards'][_0x44d217[_0x4a3661]], !![]);
                            }
                            gameData[_0x3923ef(0x12c)]['drawCard'] = ![];
                        } else {
                            if (gameData[_0x3923ef(0x12c)][_0x3923ef(0x328)] >= 0x1) gameData[_0x3923ef(0x12c)]['drawCard'] = ![], gameData['match'][_0x3923ef(0x1b6)] = ![], checkRoundEnd();
                            else {
                                gameData[_0x3923ef(0x12c)][_0x3923ef(0x329)] = !![];
                                var _0x14608d = $['cards'][gameData[_0x3923ef(0x1f9)][0x0]];
                                toggleCardAction(_0x14608d, !![]), highlightCard(_0x14608d, !![]);
                            }
                        }
                    }
                } else {
                    if (typeof initSocket == 'function' && multiplayerSettings[_0x3923ef(0x30b)] && socketData[_0x3923ef(0x3d3)]) {
                        if (gameData['turn']['loseTurn']) checkRoundEnd();
                        else gameData[_0x3923ef(0x12c)][_0x3923ef(0x328)] >= 0x1 && _0x44d217[_0x3923ef(0x2ee)] == 0x0 && (gameData[_0x3923ef(0x12c)]['drawCard'] = ![], gameData['match'][_0x3923ef(0x1b6)] = ![], checkRoundEnd());
                    } else tryAIMove(_0x44d217);
                }
            } else checkRoundEnd();
        }
    }
}

function checkPossibleCard(_0x4b4630) {
    var _0x486303 = a0_0x45d961,
        _0x375d8b = [];
    for (var _0x20b7aa = 0x0; _0x20b7aa < $['players'][_0x4b4630][_0x486303(0x103)]['length']; _0x20b7aa++) {
        checkMatchCard($[_0x486303(0x3fe)][_0x4b4630][_0x486303(0x103)][_0x20b7aa]) && _0x375d8b[_0x486303(0x175)]($['players'][_0x4b4630][_0x486303(0x103)][_0x20b7aa]);
    }
    return _0x375d8b;
}

function checkMatchCard(_0x452786) {
    var _0x4d01de = a0_0x45d961,
        _0x322813 = ![],
        _0x18b612 = $[_0x4d01de(0x103)][_0x452786];
    if (gameData[_0x4d01de(0x34e)][_0x4d01de(0x1c4)](_0x18b612['cardType']) != -0x1) _0x322813 = !![];
    else {
        if (gameData[_0x4d01de(0x173)]['indexOf'](_0x18b612[_0x4d01de(0x340)]) != -0x1) _0x322813 = !![];
        else {
            if (gameData[_0x4d01de(0x1d1)][_0x4d01de(0x384)] == _0x18b612[_0x4d01de(0x33e)] && gameData[_0x4d01de(0x18a)]['indexOf'](_0x18b612[_0x4d01de(0x340)]) != -0x1) _0x322813 = !![];
            else {
                if (gameData[_0x4d01de(0x1d1)][_0x4d01de(0x245)] == _0x18b612[_0x4d01de(0x340)] && gameData[_0x4d01de(0x18a)]['indexOf'](_0x18b612[_0x4d01de(0x340)]) != -0x1) _0x322813 = !![];
                else {
                    if (gameData[_0x4d01de(0x1d1)][_0x4d01de(0x384)] == _0x18b612['cardColor']) _0x322813 = !![];
                    else gameData[_0x4d01de(0x1d1)]['value'] != '' && gameData[_0x4d01de(0x1d1)][_0x4d01de(0x299)] == _0x18b612['cardValue'] && (_0x322813 = !![]);
                }
            }
        }
    }
    return _0x322813;
}

function highlightPlayer(_0x423853) {
    var _0x42ab4a = a0_0x45d961;
    for (var _0x4d812d = 0x0; _0x4d812d < gameData[_0x42ab4a(0x3fe)]; _0x4d812d++) {
        TweenMax['to']($[_0x42ab4a(0x3fe)][_0x42ab4a(0x39d) + _0x4d812d][_0x42ab4a(0x2a9)], 0.2, {
            'alpha': 0x1,
            'overwrite': !![]
        }), $[_0x42ab4a(0x3fe)][_0x42ab4a(0x39d) + _0x4d812d][_0x42ab4a(0x1ff)] = 0.5;
    }
    _0x423853 && (playSound('soundAlert'), animatePlayerFocus($[_0x42ab4a(0x3fe)]['stats' + gameData[_0x42ab4a(0x359)]]), animateBlink($['players'][_0x42ab4a(0x39d) + gameData['player']][_0x42ab4a(0x2a9)]), $[_0x42ab4a(0x3fe)][_0x42ab4a(0x39d) + gameData['player']][_0x42ab4a(0x1ff)] = 0x1);
}

function animatePlayerFocus(_0x25cfdc) {
    TweenMax['to'](_0x25cfdc, 0.2, {
        'delay': 0.5,
        'scaleX': 1.3,
        'scaleY': 1.3,
        'ease': Sine['easeIn'],
        'overwrite': !![],
        'onComplete': function() {
            TweenMax['to'](_0x25cfdc, 0.2, {
                'scaleX': 0x1,
                'scaleY': 0x1,
                'ease': Sine['easeOut'],
                'overwrite': !![]
            });
        }
    });
}

function animateFocus(_0x5a4696) {
    TweenMax['to'](_0x5a4696, 0.2, {
        'scaleX': 1.3,
        'scaleY': 1.3,
        'overwrite': !![],
        'onComplete': function() {
            TweenMax['to'](_0x5a4696, 0.2, {
                'scaleX': 0x1,
                'scaleY': 0x1,
                'overwrite': !![]
            });
        }
    });
}

function animateBlink(_0x395824, _0x1c81a7) {
    var _0x53a524 = a0_0x45d961,
        _0x397ef0 = _0x1c81a7 == undefined ? 0.5 : _0x1c81a7;
    _0x395824['visible'] = !![], _0x395824[_0x53a524(0x1ff)] = _0x397ef0, TweenMax['to'](_0x395824, 0.3, {
        'alpha': 0x1,
        'overwrite': !![],
        'onComplete': function() {
            TweenMax['to'](_0x395824, 0.3, {
                'alpha': _0x397ef0,
                'overwrite': !![],
                'onComplete': animateBlink,
                'onCompleteParams': [_0x395824, _0x1c81a7]
            });
        }
    });
}

function killAnimateBlink(_0x341863) {
    var _0x20a646 = a0_0x45d961;
    _0x341863[_0x20a646(0x3ab)] = ![], TweenMax[_0x20a646(0x2cf)](_0x341863);
}

function checkRoundEnd() {
    var _0xa1823a = a0_0x45d961;
    gameData[_0xa1823a(0x12c)][_0xa1823a(0x14c)] = ![], togglePlayerSkip(![]);
    if ($[_0xa1823a(0x3fe)][gameData[_0xa1823a(0x359)]][_0xa1823a(0x103)][_0xa1823a(0x2ee)] == 0x0) highlightPlayer(![]), showGameStatus(_0xa1823a(0x386));
    else {
        if (gameData[_0xa1823a(0x1cc)] == 0x1) highlightPlayer(![]), showGameStatus(_0xa1823a(0x3f9));
        else {
            if (gameData[_0xa1823a(0x12c)]['addPoints'] > 0x0) tweenData[_0xa1823a(0x193)] = playerData[_0xa1823a(0x1af)][gameData[_0xa1823a(0x359)]], playerData[_0xa1823a(0x1af)][gameData[_0xa1823a(0x359)]] += gameData[_0xa1823a(0x12c)][_0xa1823a(0x224)], gameData[_0xa1823a(0x12c)]['addPoints'] = 0x0, TweenMax['to'](tweenData, 0.5, {
                'tweenScore': playerData[_0xa1823a(0x1af)][gameData[_0xa1823a(0x359)]],
                'overwrite': !![],
                'onUpdate': function() {
                    var _0x448bd8 = _0xa1823a;
                    $['players'][_0x448bd8(0x39d) + gameData[_0x448bd8(0x359)]][_0x448bd8(0x135)]['text'] = textStrings[_0x448bd8(0x135)][_0x448bd8(0x3d4)](_0x448bd8(0x1bc), Math['round'](tweenData[_0x448bd8(0x193)]));
                },
                'onComplete': function() {
                    TweenMax['to'](cardsContainer, 0x1, {
                        'overwrite': !![],
                        'onComplete': function() {
                            checkRoundEnd();
                        }
                    });
                }
            });
            else {
                if (gameData[_0xa1823a(0x12c)]['shuffle']) {
                    gameData['turn'][_0xa1823a(0x18d)] = ![], gameData[_0xa1823a(0x12c)][_0xa1823a(0x230)] = [];
                    for (var _0x424b66 = 0x0; _0x424b66 < gameData[_0xa1823a(0x3fe)]; _0x424b66++) {
                        if ($[_0xa1823a(0x3fe)][_0x424b66][_0xa1823a(0x1b6)])
                            for (var _0x546639 = 0x0; _0x546639 < $[_0xa1823a(0x3fe)][_0x424b66][_0xa1823a(0x103)][_0xa1823a(0x2ee)]; _0x546639++) {
                                gameData['turn'][_0xa1823a(0x230)][_0xa1823a(0x175)]($['players'][_0x424b66][_0xa1823a(0x103)][_0x546639]);
                            }
                    }
                    shuffle(gameData['turn']['playerCards']), typeof initSocket == 'function' && multiplayerSettings['enable'] && socketData[_0xa1823a(0x3d3)] ? postSocketUpdate('shuffleplayercards', {
                        'index': socketData[_0xa1823a(0x368)],
                        'allCards': gameData[_0xa1823a(0x12c)][_0xa1823a(0x230)]
                    }) : shufflePlayerCards(gameData[_0xa1823a(0x12c)][_0xa1823a(0x230)]);
                } else {
                    if (gameData[_0xa1823a(0x12c)]['targetDrawCard'] && gameData[_0xa1823a(0x12c)][_0xa1823a(0x313)] == gameData[_0xa1823a(0x359)]) gameData[_0xa1823a(0x12c)][_0xa1823a(0x15a)] = ![], gameData['turn']['drawCards'] = gameData[_0xa1823a(0x12c)]['drawCardsTotal'] = gameData['turn'][_0xa1823a(0x1f8)], loopCardAction();
                    else {
                        if (gameData[_0xa1823a(0x12c)][_0xa1823a(0x1ca)]) itemFrozen[_0xa1823a(0x1ff)] = 0x0, gameData[_0xa1823a(0x12c)][_0xa1823a(0x149)] = ![], gameData[_0xa1823a(0x12c)][_0xa1823a(0x114)] = -0x1, gameData[_0xa1823a(0x12c)]['pickColors'] = ![], toggleColors(!![]);
                        else {
                            if (gameData['turn'][_0xa1823a(0x3be)]) gameData['turn'][_0xa1823a(0x3be)] = ![], toggleTargetPlayers(!![]);
                            else {
                                if (gameData[_0xa1823a(0x1d1)][_0xa1823a(0x3c1)] == 0x0 && gameData[_0xa1823a(0x1d1)][_0xa1823a(0x1b6)]) gameData[_0xa1823a(0x12c)][_0xa1823a(0x328)] > 0x0 || gameData[_0xa1823a(0x12c)][_0xa1823a(0x257)] ? nextPlayerTurn(!![]) : nextPlayerTurn(![]);
                                else {
                                    if (gameData[_0xa1823a(0x12c)][_0xa1823a(0x141)]) gameData[_0xa1823a(0x12c)][_0xa1823a(0x141)] = ![], nextPlayerTurn(!![]);
                                    else {
                                        if (typeof initSocket == _0xa1823a(0x1a8) && multiplayerSettings[_0xa1823a(0x30b)] && socketData['online']) {
                                            if ($[_0xa1823a(0x3fe)][gameData[_0xa1823a(0x359)]][_0xa1823a(0x103)][_0xa1823a(0x2ee)] == 0x1) {
                                                if ($[_0xa1823a(0x3fe)]['called' + gameData[_0xa1823a(0x359)]][_0xa1823a(0x3ab)]) nextPlayerTurn(!![]);
                                                else {
                                                    var _0x7a817a = checkIsPlayer(gameData[_0xa1823a(0x359)]);
                                                    _0x7a817a && TweenMax['to'](cardsContainer, gameSettings[_0xa1823a(0x3ce)], {
                                                        'overwrite': !![],
                                                        'onComplete': function() {
                                                            var _0x3c4480 = _0xa1823a;
                                                            typeof initSocket == 'function' && multiplayerSettings['enable'] && socketData[_0x3c4480(0x3d3)] ? postSocketUpdate(_0x3c4480(0x355), socketData[_0x3c4480(0x368)]) : checkCallPenalty();
                                                        }
                                                    });
                                                }
                                            } else nextPlayerTurn(!![]);
                                        } else gameData[_0xa1823a(0x359)] != 0x0 ? ($['players'][gameData[_0xa1823a(0x359)]]['cards'][_0xa1823a(0x2ee)] == 0x1 && (playSound(_0xa1823a(0x38f)), $[_0xa1823a(0x3fe)][_0xa1823a(0x168) + gameData[_0xa1823a(0x359)]]['visible'] = !![], animateFocus($['players'][_0xa1823a(0x168) + gameData[_0xa1823a(0x359)]])), nextPlayerTurn(!![])) : $['players'][gameData[_0xa1823a(0x359)]][_0xa1823a(0x103)][_0xa1823a(0x2ee)] == 0x1 ? $[_0xa1823a(0x3fe)]['called' + gameData['player']][_0xa1823a(0x3ab)] ? nextPlayerTurn(!![]) : TweenMax['to'](cardsContainer, gameSettings[_0xa1823a(0x3ce)], {
                                            'overwrite': !![],
                                            'onComplete': function() {
                                                checkCallPenalty();
                                            }
                                        }) : nextPlayerTurn(!![]);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function shufflePlayerCards(_0x1e5deb) {
    var _0x59dae2 = a0_0x45d961,
        _0x7a7fb = [];
    for (var _0x19a9f6 = 0x0; _0x19a9f6 < gameData[_0x59dae2(0x3fe)]; _0x19a9f6++) {
        var _0x38ba29 = $[_0x59dae2(0x3fe)][_0x19a9f6][_0x59dae2(0x103)]['length'];
        $['players'][_0x19a9f6][_0x59dae2(0x1b6)] && ($[_0x59dae2(0x3fe)][_0x19a9f6][_0x59dae2(0x103)]['length'] = 0x0), _0x7a7fb[_0x59dae2(0x175)]({
            'index': _0x19a9f6,
            'totalCards': _0x38ba29
        });
    }
    var _0x37f593 = 0x0;
    for (var _0x19a9f6 = 0x0; _0x19a9f6 < gameData[_0x59dae2(0x3fe)]; _0x19a9f6++) {
        if ($[_0x59dae2(0x3fe)][_0x19a9f6]['active']) {
            for (var _0x32053b = 0x0; _0x32053b < _0x7a7fb[_0x19a9f6][_0x59dae2(0x1c0)]; _0x32053b++) {
                var _0x22d540 = _0x1e5deb[_0x37f593];
                $[_0x59dae2(0x3fe)][_0x19a9f6][_0x59dae2(0x103)][_0x59dae2(0x175)](_0x22d540);
                var _0x446afb = $[_0x59dae2(0x103)][_0x22d540],
                    _0x3fe2a0 = checkIsPlayer(_0x19a9f6);
                _0x3fe2a0 ? flipCard(_0x446afb) : flipCardCover(_0x446afb), _0x37f593++;
            }
            positionPlayerCards(_0x19a9f6, !![]);
        }
    }
    TweenMax['to'](cardsContainer, 0x1, {
        'overwrite': !![],
        'onComplete': function() {
            checkRoundEnd();
        }
    });
}

function updatePlayerScore(_0x356399) {
    var _0x5e468c = a0_0x45d961;
    tweenData[_0x5e468c(0x193)] = playerData['scores'][_0x356399], playerData['scores'][_0x356399] += gameData['turn'][_0x5e468c(0x224)], gameData['turn'][_0x5e468c(0x224)] = 0x0, TweenMax['to'](tweenData, 0.5, {
        'tweenScore': playerData[_0x5e468c(0x1af)][_0x356399],
        'overwrite': !![],
        'onUpdate': function() {
            var _0x230e56 = _0x5e468c;
            $[_0x230e56(0x3fe)][_0x230e56(0x39d) + _0x356399]['playerScore'][_0x230e56(0x290)] = textStrings[_0x230e56(0x135)]['replace'](_0x230e56(0x1bc), Math[_0x230e56(0x250)](tweenData[_0x230e56(0x193)]));
        }
    });
}

function checkCallPenalty() {
    var _0x456bb0 = a0_0x45d961;
    $[_0x456bb0(0x3fe)][_0x456bb0(0x168) + gameData[_0x456bb0(0x359)]][_0x456bb0(0x3ab)] ? nextPlayerTurn(!![]) : (gameData[_0x456bb0(0x12c)][_0x456bb0(0x3ed)] = !![], gameData[_0x456bb0(0x12c)][_0x456bb0(0x2af)] = 0x2, showGameStatus(_0x456bb0(0x3ed)), animateFocus($[_0x456bb0(0x3fe)][_0x456bb0(0x1bf) + gameData[_0x456bb0(0x359)]]));
}

function nextPlayerTurn(_0xeba6d6) {
    var _0x3f5420 = a0_0x45d961;
    _0xeba6d6 && (gameData[_0x3f5420(0x359)] = findNextPlayer(gameData['player']), gameData[_0x3f5420(0x12c)][_0x3f5420(0xfb)] = '');
    gameData[_0x3f5420(0x12c)][_0x3f5420(0x149)] && gameData[_0x3f5420(0x359)] == gameData[_0x3f5420(0x12c)][_0x3f5420(0x114)] && (itemFrozen['alpha'] = 0x0, gameData[_0x3f5420(0x12c)][_0x3f5420(0x149)] = ![]);
    if (!$[_0x3f5420(0x3fe)][gameData[_0x3f5420(0x359)]][_0x3f5420(0x1b6)]) {
        nextPlayerTurn(!![]);
        return;
    } else {
        if (gameData[_0x3f5420(0x12c)][_0x3f5420(0x24a)]) {
            gameData['turn'][_0x3f5420(0x24a)] = ![], nextPlayerTurn(!![]);
            return;
        } else {
            if (gameData['turn'][_0x3f5420(0x30c)]) {
                gameData[_0x3f5420(0x12c)][_0x3f5420(0x10b)]--;
                if (gameData[_0x3f5420(0x3fe)] == 0x2) {}
                gameData[_0x3f5420(0x12c)][_0x3f5420(0x220)] = gameData[_0x3f5420(0x12c)]['reverse'] == !![] ? ![] : !![], gameData[_0x3f5420(0x12c)][_0x3f5420(0x30c)] = ![], toggleArrowTurn(), nextPlayerTurn(!![]);
                return;
            } else {
                if (gameData[_0x3f5420(0x12c)][_0x3f5420(0x10b)] > 0x0) {
                    gameData[_0x3f5420(0x12c)][_0x3f5420(0x10b)]--, nextPlayerTurn(!![]);
                    return;
                }
            }
        }
    }
    displayPlayerTurn();
}

function findNextPlayer(_0x5afe1c) {
    var _0x251b6a = a0_0x45d961;
    return !gameData[_0x251b6a(0x12c)][_0x251b6a(0x220)] ? (_0x5afe1c++, _0x5afe1c = _0x5afe1c > gameData[_0x251b6a(0x3fe)] - 0x1 ? 0x0 : _0x5afe1c) : (_0x5afe1c--, _0x5afe1c = _0x5afe1c < 0x0 ? gameData[_0x251b6a(0x3fe)] - 0x1 : _0x5afe1c), _0x5afe1c;
}

function togglePlayerSkip(_0x1950d9, _0x162481) {
    var _0x59db32 = a0_0x45d961,
        _0x3a6aaf = gameData['player'];
    _0x1950d9 ? gameData['match'][_0x59db32(0x3c1)] != 0x0 && _0x162481 && (_0x3a6aaf = findNextPlayer(gameData[_0x59db32(0x359)])) : _0x3a6aaf = -0x1;
    for (var _0x38fcdc = 0x0; _0x38fcdc < gameData['players']; _0x38fcdc++) {
        $[_0x59db32(0x3fe)]['skip' + _0x38fcdc]['visible'] = ![], $['players'][_0x59db32(0x1bf) + _0x38fcdc]['alpha'] = 0x1, $[_0x59db32(0x3fe)][_0x59db32(0x168) + _0x38fcdc][_0x59db32(0x1ff)] = 0x1, _0x3a6aaf == _0x38fcdc && ($[_0x59db32(0x3fe)]['skip' + _0x38fcdc][_0x59db32(0x3ab)] = !![], $[_0x59db32(0x3fe)][_0x59db32(0x1bf) + _0x38fcdc][_0x59db32(0x1ff)] = 0x0, $['players'][_0x59db32(0x168) + _0x38fcdc]['alpha'] = 0x0);
    }
}

function toggleArrowTurn() {
    var _0xbcf8f0 = a0_0x45d961;
    for (var _0x3d7573 = 0x0; _0x3d7573 < gameData['players']; _0x3d7573++) {
        $[_0xbcf8f0(0x3fe)][_0xbcf8f0(0x1b2) + _0x3d7573][_0xbcf8f0(0x349)][_0xbcf8f0(0x3ab)] = ![], $[_0xbcf8f0(0x3fe)]['arrow' + _0x3d7573]['itemArrowR'][_0xbcf8f0(0x3ab)] = ![], !gameData['turn']['reverse'] ? ($[_0xbcf8f0(0x3fe)]['arrow' + _0x3d7573][_0xbcf8f0(0x349)][_0xbcf8f0(0x204)] = -0x5a, $[_0xbcf8f0(0x3fe)]['arrow' + _0x3d7573][_0xbcf8f0(0x349)][_0xbcf8f0(0x3ab)] = !![], TweenMax['to']($[_0xbcf8f0(0x3fe)][_0xbcf8f0(0x1b2) + _0x3d7573][_0xbcf8f0(0x349)], 0.5, {
            'rotation': 0x0,
            'overwrite': !![]
        }), playSound(_0xbcf8f0(0x395))) : ($[_0xbcf8f0(0x3fe)][_0xbcf8f0(0x1b2) + _0x3d7573][_0xbcf8f0(0x12b)][_0xbcf8f0(0x204)] = 0xb4, $[_0xbcf8f0(0x3fe)]['arrow' + _0x3d7573]['itemArrowR'][_0xbcf8f0(0x3ab)] = !![], TweenMax['to']($['players'][_0xbcf8f0(0x1b2) + _0x3d7573][_0xbcf8f0(0x12b)], 0.5, {
            'rotation': 0x5a,
            'overwrite': !![]
        }), playSound(_0xbcf8f0(0xfc)));
    }
}

function updateGame() {
    var _0x1220e2 = a0_0x45d961;
    if (!gameData['paused'])
        for (var _0x41d170 = 0x0; _0x41d170 < gameData[_0x1220e2(0x103)][_0x1220e2(0x2ee)]; _0x41d170++) {
            var _0x10111a = gameData[_0x1220e2(0x103)][_0x41d170];
            _0x10111a[_0x1220e2(0x2a6)]['x'] = _0x10111a['x'], _0x10111a[_0x1220e2(0x2a6)]['y'] = _0x10111a['y'], _0x10111a[_0x1220e2(0x2a6)][_0x1220e2(0x204)] = _0x10111a[_0x1220e2(0x204)], _0x10111a[_0x1220e2(0x1c6)]['x'] = _0x10111a['x'], _0x10111a[_0x1220e2(0x1c6)]['y'] = _0x10111a['y'], _0x10111a[_0x1220e2(0x1c6)]['rotation'] = _0x10111a[_0x1220e2(0x204)], _0x10111a[_0x1220e2(0x28b)]['x'] = _0x10111a['x'] + gameSettings[_0x1220e2(0x111)], _0x10111a[_0x1220e2(0x28b)]['y'] = _0x10111a['y'] + gameSettings[_0x1220e2(0x382)], _0x10111a[_0x1220e2(0x28b)][_0x1220e2(0x204)] = _0x10111a[_0x1220e2(0x204)], _0x10111a[_0x1220e2(0x28b)]['visible'] = _0x10111a['visible'];
        }
}

function showGameStatus(_0x11b22f) {
    var _0x2c81d9 = a0_0x45d961,
        _0x3cbf7c = 0x0,
        _0x4989fc = 0x1,
        _0x3bbadd = _0x2c81d9(0x1dc);
    statusPlayerTxt['text'] = $['players']['stats' + gameData[_0x2c81d9(0x359)]][_0x2c81d9(0x2a9)][_0x2c81d9(0x290)], statusIconContainer[_0x2c81d9(0x17b)](), statusTxt[_0x2c81d9(0x15c)] = _0x2c81d9(0x10a), itemStatus['visible'] = !![], itemStatusLong[_0x2c81d9(0x3ab)] = ![];
    if (_0x11b22f == 'penalty') _0x3bbadd = _0x2c81d9(0x29e), _0x3cbf7c = 0.5, statusTxt[_0x2c81d9(0x290)] = textStrings[_0x2c81d9(0x2b7)], TweenMax['to'](cardsContainer, 0x2, {
        'overwrite': !![],
        'onComplete': function() {
            loopCardAction();
        }
    });
    else {
        if (_0x11b22f == _0x2c81d9(0x386)) _0x3bbadd = _0x2c81d9(0x1d5), _0x3cbf7c = 0x1, statusTxt['text'] = textStrings['emptyCards'], statusPlayerTxt[_0x2c81d9(0x290)] = statusPlayerTxt[_0x2c81d9(0x290)] + textStrings[_0x2c81d9(0x397)], TweenMax['to'](cardsContainer, 0x3, {
            'overwrite': !![],
            'onComplete': function() {
                toggleRoundScore(!![], !![]);
            }
        });
        else {
            if (_0x11b22f == _0x2c81d9(0x3f9)) _0x3bbadd = _0x2c81d9(0x1d5), _0x3cbf7c = 0x1, statusTxt[_0x2c81d9(0x290)] = textStrings['noMorePlayers'], statusPlayerTxt[_0x2c81d9(0x290)] = statusPlayerTxt['text'] + textStrings['playerWon'], TweenMax['to'](cardsContainer, 0x3, {
                'overwrite': !![],
                'onComplete': function() {
                    toggleRoundScore(!![], !![]);
                }
            });
            else {
                if (_0x11b22f == _0x2c81d9(0x206)) _0x3bbadd = _0x2c81d9(0x1d5), _0x3cbf7c = 0x1, statusTxt[_0x2c81d9(0x290)] = textStrings['noCardsLeft'], statusPlayerTxt[_0x2c81d9(0x290)] = textStrings[_0x2c81d9(0x3e5)], TweenMax['to'](cardsContainer, 0x3, {
                    'overwrite': !![],
                    'onComplete': function() {
                        toggleRoundScore(!![], ![]);
                    }
                });
                else {
                    _0x3bbadd = 'soundAction', _0x3cbf7c = 0.5, _0x4989fc = 0x1, statusTxt['text'] = findCardText(_0x11b22f), statusPlayerTxt['text'] = '';
                    for (var _0x4f2ee3 = 0x0; _0x4f2ee3 < $[_0x2c81d9(0x3fe)][gameData[_0x2c81d9(0x359)]][_0x2c81d9(0x103)][_0x2c81d9(0x2ee)]; _0x4f2ee3++) {
                        highlightCard($['cards'][$[_0x2c81d9(0x3fe)][gameData[_0x2c81d9(0x359)]][_0x2c81d9(0x103)][_0x4f2ee3]], ![]);
                    }
                    highlightCard($[_0x2c81d9(0x103)][gameData[_0x2c81d9(0x1f9)][0x0]], ![]), TweenMax['to'](cardsContainer, 2.5, {
                        'overwrite': !![],
                        'onComplete': function() {
                            checkRoundEnd();
                        }
                    });
                }
            }
        }
    }
    statusTxt['getMeasuredWidth']() > 0x104 && (itemStatus[_0x2c81d9(0x3ab)] = ![], itemStatusLong[_0x2c81d9(0x3ab)] = !![]);
    for (var _0x4f2ee3 = 0x19; _0x4f2ee3 >= 0x0; _0x4f2ee3--) {
        statusTxt['font'] = _0x4f2ee3 + _0x2c81d9(0x29c), statusTxt[_0x2c81d9(0x342)]() < 0x168 && (_0x4f2ee3 = -0x1);
    }
    statusContainer[_0x2c81d9(0x1ff)] = 0x0, TweenMax['to'](statusContainer, 0.5, {
        'delay': _0x3cbf7c,
        'alpha': 0x1,
        'overwrite': !![],
        'onStart': function() {
            playSound(_0x3bbadd);
        },
        'onComplete': function() {
            TweenMax['to'](statusContainer, 0.5, {
                'delay': _0x4989fc,
                'alpha': 0x0,
                'overwrite': !![]
            });
        }
    });
}

function findCardText(_0x5aa0e7) {
    var _0x1588da = a0_0x45d961,
        _0x13c421, _0x330a51;
    guideTxt[_0x1588da(0x15c)] = _0x1588da(0x1e0);
    for (var _0x4d8b8a = 0x0; _0x4d8b8a < cards_arr['actions'][_0x1588da(0x2ee)]; _0x4d8b8a++) {
        _0x5aa0e7 == cards_arr[_0x1588da(0x2e5)][_0x4d8b8a][_0x1588da(0x245)] && (_0x13c421 = cards_arr[_0x1588da(0x2e5)][_0x4d8b8a][_0x1588da(0x290)], _0x330a51 = _0x1588da(0x16f) + _0x4d8b8a);
    }
    for (var _0x4d8b8a = 0x0; _0x4d8b8a < cards_arr[_0x1588da(0x25c)][_0x1588da(0x2ee)]; _0x4d8b8a++) {
        _0x5aa0e7 == cards_arr['wilds'][_0x4d8b8a][_0x1588da(0x245)] && (_0x13c421 = cards_arr[_0x1588da(0x25c)][_0x4d8b8a][_0x1588da(0x290)], _0x330a51 = 'cardWilds' + _0x4d8b8a);
    }
    for (var _0x4d8b8a = 0x0; _0x4d8b8a < cards_arr['specials'][_0x1588da(0x2ee)]; _0x4d8b8a++) {
        _0x5aa0e7 == cards_arr[_0x1588da(0x37f)][_0x4d8b8a][_0x1588da(0x245)] && (_0x13c421 = cards_arr['specials'][_0x4d8b8a][_0x1588da(0x290)], _0x330a51 = 'cardSpecials' + _0x4d8b8a);
    }
    for (var _0x4d8b8a = 0x0; _0x4d8b8a < cards_arr[_0x1588da(0x258)][_0x1588da(0x2ee)]; _0x4d8b8a++) {
        _0x5aa0e7 == cards_arr[_0x1588da(0x258)][_0x4d8b8a][_0x1588da(0x245)] && (_0x13c421 = cards_arr['otherActions'][_0x4d8b8a]['text'], _0x330a51 = _0x1588da(0x3d5) + _0x4d8b8a);
    }
    for (var _0x4d8b8a = 0x14; _0x4d8b8a >= 0x0; _0x4d8b8a--) {
        guideTxt['font'] = _0x4d8b8a + 'px\x20bpreplaybold', guideTxt['getMeasuredWidth']() < 0xfa && (_0x4d8b8a = -0x1);
    }
    var _0x5d9e2e = new createjs['Bitmap'](loader['getResult'](_0x330a51));
    return centerReg(_0x5d9e2e), _0x5d9e2e[_0x1588da(0x325)] = _0x5d9e2e['image']['naturalHeight'], statusIconContainer[_0x1588da(0x27b)](_0x5d9e2e), _0x13c421;
}

function showGameGuide(_0x35fe36) {
    var _0x33ae47 = a0_0x45d961,
        _0x2cc278 = checkIsPlayer(gameData['player']);
    if (_0x35fe36 == 'targetplayer') guideTxt[_0x33ae47(0x290)] = _0x2cc278 == !![] ? textStrings[_0x33ae47(0x2b6)] : textStrings[_0x33ae47(0x363)];
    else _0x35fe36 == _0x33ae47(0x140) && (guideTxt[_0x33ae47(0x290)] = _0x2cc278 == !![] ? textStrings['selectCards'] : textStrings['selectingCards']);
    var _0x3e45d2 = _0x35fe36 == undefined ? 0x0 : 0x1;
    TweenMax['to'](guideContainer, 0.5, {
        'alpha': _0x3e45d2,
        'overwrite': !![]
    });
}

function toggleRoundScore(_0x22f287, _0x49f2ef) {
    var _0x540e82 = a0_0x45d961;
    cardScoreListContainer['removeAllChildren'](), cardScoreContainer[_0x540e82(0x3ab)] = _0x22f287, gameData['complete'] = !![];
    if (_0x22f287) {
        playSound(_0x540e82(0x301));
        var _0x3e51f3 = 0x0,
            _0x37be13 = [],
            _0x556010 = ![];
        for (var _0x50cfad = 0x0; _0x50cfad < gameData['players']; _0x50cfad++) {
            var _0x35bd2a = 0x0;
            for (var _0x2ad017 = 0x0; _0x2ad017 < $[_0x540e82(0x3fe)][_0x50cfad][_0x540e82(0x103)][_0x540e82(0x2ee)]; _0x2ad017++) {
                var _0x421612 = $[_0x540e82(0x103)][$['players'][_0x50cfad]['cards'][_0x2ad017]];
                _0x421612[_0x540e82(0x1c6)][_0x540e82(0x3ab)] = ![];
                var _0x4a91f9 = ![];
                typeof initSocket == _0x540e82(0x1a8) && multiplayerSettings[_0x540e82(0x30b)] && socketData[_0x540e82(0x3d3)] ? _0x50cfad != socketData[_0x540e82(0x368)] && (_0x4a91f9 = !![]) : _0x50cfad != 0x0 && (_0x4a91f9 = !![]), _0x4a91f9 && flipCard(_0x421612), _0x35bd2a += _0x421612[_0x540e82(0x20d)];
            }
            _0x49f2ef ? _0x3e51f3 += _0x35bd2a : _0x37be13['push']({
                'total': _0x35bd2a,
                'player': _0x50cfad
            });
        }
        if (!_0x49f2ef) {
            sortOnObject(_0x37be13, _0x540e82(0x34c), ![]), gameData[_0x540e82(0x359)] = _0x37be13[0x0][_0x540e82(0x359)], _0x3e51f3 = 0x0;
            for (var _0x50cfad = 0x1; _0x50cfad < _0x37be13[_0x540e82(0x2ee)]; _0x50cfad++) {
                _0x3e51f3 += _0x37be13[_0x50cfad]['total'];
            }
        }
        typeof initSocket == 'function' && multiplayerSettings[_0x540e82(0x30b)] && socketData[_0x540e82(0x3d3)] ? _0x49f2ef && $['players'][gameData[_0x540e82(0x359)]][_0x540e82(0x2c5)] == socketData[_0x540e82(0x368)] ? roundStatusTxt['text'] = textStrings[_0x540e82(0x189)] : roundStatusTxt[_0x540e82(0x290)] = textStrings['playerRoundLose'] : _0x49f2ef && $['players'][gameData['player']][_0x540e82(0x2c5)] == 0x0 ? roundStatusTxt['text'] = textStrings['playerRoundWin'] : roundStatusTxt['text'] = textStrings[_0x540e82(0x1ef)];
        var _0x592e98 = {
            'startY': 0x32,
            'x': -0x96,
            'y': 0x0,
            'spaceY': 0x2d,
            'scoreX': 0x12c,
            'titleSpace': 0x32
        };
        _0x592e98['y'] = _0x592e98[_0x540e82(0x1ae)] - (gameData[_0x540e82(0x3fe)] - 0x1) * _0x592e98['spaceY'], _0x592e98['y'] -= _0x592e98[_0x540e82(0x180)], itemScoreTop['y'] = _0x592e98['y'] - _0x592e98[_0x540e82(0x199)];
        var _0x5459fb = new createjs['Text']();
        _0x5459fb[_0x540e82(0x15c)] = _0x540e82(0x335), _0x5459fb[_0x540e82(0x384)] = _0x540e82(0x3ff), _0x5459fb['textAlign'] = _0x540e82(0x177), _0x5459fb[_0x540e82(0x2c4)] = _0x540e82(0x3a8), _0x5459fb[_0x540e82(0x290)] = textStrings[_0x540e82(0x2ff)][_0x540e82(0x3d4)](_0x540e82(0x1bc), gameSettings[_0x540e82(0x2aa)][gameData[_0x540e82(0x2dc)]]), _0x5459fb['y'] = _0x592e98['y'];
        var _0x3b4d7d = new createjs['Bitmap'](loader[_0x540e82(0x207)](_0x540e82(0x404)));
        centerReg(_0x3b4d7d), _0x3b4d7d['y'] = _0x592e98['y'] + 0xf, _0x592e98['y'] += _0x592e98['titleSpace'], cardScoreListContainer[_0x540e82(0x27b)](_0x5459fb, _0x3b4d7d);
        var _0x51e4c7 = null,
            _0x89953 = 0x0;
        for (var _0x50cfad = 0x0; _0x50cfad < gameData['players']; _0x50cfad++) {
            var _0x4ad211 = new createjs['Text']();
            _0x4ad211[_0x540e82(0x15c)] = _0x540e82(0x335), _0x4ad211[_0x540e82(0x384)] = _0x540e82(0x3ff), _0x4ad211[_0x540e82(0x3e2)] = _0x540e82(0x2d4), _0x4ad211['textBaseline'] = _0x540e82(0x3a8), _0x4ad211[_0x540e82(0x290)] = $[_0x540e82(0x3fe)][_0x540e82(0x39d) + _0x50cfad][_0x540e82(0x2a9)]['text'];
            var _0x37cb15 = new createjs[(_0x540e82(0x3a4))]();
            _0x37cb15[_0x540e82(0x15c)] = _0x540e82(0x335), _0x37cb15[_0x540e82(0x384)] = _0x540e82(0x3ff), _0x37cb15[_0x540e82(0x3e2)] = _0x540e82(0x321), _0x37cb15[_0x540e82(0x2c4)] = _0x540e82(0x3a8), _0x37cb15[_0x540e82(0x290)] = textStrings['playerScore']['replace']('[NUMBER]', playerData['scores'][_0x50cfad]);
            _0x50cfad == gameData[_0x540e82(0x359)] && (tweenData[_0x540e82(0x193)] = playerData[_0x540e82(0x1af)][_0x50cfad], _0x51e4c7 = _0x37cb15, playerData['scores'][_0x50cfad] += _0x3e51f3, _0x4ad211[_0x540e82(0x290)] = _0x4ad211[_0x540e82(0x290)] + textStrings[_0x540e82(0x2e1)][_0x540e82(0x3d4)]('[NUMBER]', _0x3e51f3), _0x89953 = playerData[_0x540e82(0x1af)][_0x50cfad], typeof initSocket == _0x540e82(0x1a8) && multiplayerSettings['enable'] && socketData[_0x540e82(0x3d3)] ? $[_0x540e82(0x3fe)][gameData[_0x540e82(0x359)]][_0x540e82(0x2c5)] == socketData[_0x540e82(0x368)] && (roundStatusTxt[_0x540e82(0x290)] = textStrings[_0x540e82(0x189)]) : $['players'][gameData[_0x540e82(0x359)]][_0x540e82(0x2c5)] == 0x0 && (roundStatusTxt[_0x540e82(0x290)] = textStrings[_0x540e82(0x189)]), playerData[_0x540e82(0x1af)][_0x50cfad] >= gameData[_0x540e82(0x1e1)][_0x540e82(0x320)] && (typeof initSocket == _0x540e82(0x1a8) && multiplayerSettings[_0x540e82(0x30b)] && socketData[_0x540e82(0x3d3)] ? $['players'][gameData[_0x540e82(0x359)]][_0x540e82(0x2c5)] == socketData['gameIndex'] ? roundStatusTxt[_0x540e82(0x290)] = textStrings['userWin'] : roundStatusTxt[_0x540e82(0x290)] = textStrings['playerWin'][_0x540e82(0x3d4)](_0x540e82(0x2fd), $['players'][_0x540e82(0x39d) + _0x50cfad][_0x540e82(0x2a9)]['text']) : $[_0x540e82(0x3fe)][gameData[_0x540e82(0x359)]][_0x540e82(0x2c5)] == 0x0 ? roundStatusTxt['text'] = textStrings[_0x540e82(0x235)] : roundStatusTxt['text'] = textStrings[_0x540e82(0x2a4)][_0x540e82(0x3d4)]('[NAME]', $[_0x540e82(0x3fe)]['stats' + _0x50cfad][_0x540e82(0x2a9)][_0x540e82(0x290)]), _0x556010 = !![]), _0x4ad211['color'] = _0x37cb15[_0x540e82(0x384)] = _0x540e82(0x23b), animateBlink(_0x4ad211, 0.6), animateBlink(_0x37cb15, 0.6));
            var _0x598652 = new createjs[(_0x540e82(0x228))](loader[_0x540e82(0x207)](_0x540e82(0x404)));
            centerReg(_0x598652), _0x4ad211['x'] = _0x592e98['x'], _0x4ad211['y'] = _0x592e98['y'], _0x37cb15['x'] = _0x592e98['x'] + _0x592e98[_0x540e82(0x150)], _0x37cb15['y'] = _0x592e98['y'], _0x598652['y'] = _0x592e98['y'] + _0x592e98[_0x540e82(0x199)] / 0x4, _0x598652[_0x540e82(0x3ab)] = _0x50cfad == gameData[_0x540e82(0x3fe)] - 0x1 ? ![] : !![], _0x592e98['y'] += _0x592e98['spaceY'], cardScoreListContainer[_0x540e82(0x27b)](_0x4ad211, _0x37cb15, _0x598652), $[_0x540e82(0x3fe)][_0x540e82(0x39d) + _0x50cfad][_0x540e82(0x135)][_0x540e82(0x290)] = textStrings[_0x540e82(0x135)][_0x540e82(0x3d4)]('[NUMBER]', playerData[_0x540e82(0x1af)][_0x50cfad]);
        }
        _0x51e4c7 != null && TweenMax['to'](tweenData, 0.5, {
            'delay': 0x1,
            'tweenScore': _0x89953,
            'overwrite': !![],
            'onUpdate': function() {
                var _0x519862 = _0x540e82;
                _0x51e4c7[_0x519862(0x290)] = textStrings['playerScore'][_0x519862(0x3d4)](_0x519862(0x1bc), Math[_0x519862(0x250)](tweenData['tweenScore']));
            }
        }), cardScoreContainer['alpha'] = 0x0, TweenMax['to'](cardScoreContainer, 0.5, {
            'alpha': 0x1,
            'overwrite': !![],
            'onComplete': function() {
                TweenMax['to'](cardScoreContainer, 0x4, {
                    'overwrite': !![],
                    'onComplete': function() {
                        _0x556010 ? endGame() : TweenMax['to'](cardScoreContainer, 0.5, {
                            'alpha': 0x0,
                            'overwrite': !![],
                            'onComplete': function() {
                                var _0x5a8a95 = a0_0x42f1;
                                playSound(_0x5a8a95(0x1b0));
                                for (var _0x186ae6 = 0x0; _0x186ae6 < gameData[_0x5a8a95(0x103)][_0x5a8a95(0x2ee)]; _0x186ae6++) {
                                    var _0x500a58 = gameData[_0x5a8a95(0x103)][_0x186ae6];
                                    _0x500a58[_0x5a8a95(0x1c6)][_0x5a8a95(0x3ab)] = ![], _0x500a58['contentContainer'][_0x5a8a95(0x3ab)] && flipCardCover(_0x500a58), TweenMax['to'](_0x500a58, gameSettings[_0x5a8a95(0x343)], {
                                        'x': 0x0,
                                        'y': 0x0,
                                        'rotation': 0x0,
                                        'scaleX': 0x1,
                                        'scaleY': 0x1,
                                        'overwrite': !![]
                                    });
                                }
                                itemColors[_0x5a8a95(0x1ff)] = 0x0;
                                for (var _0x186ae6 = 0x0; _0x186ae6 < gameData[_0x5a8a95(0x3fe)]; _0x186ae6++) {
                                    $[_0x5a8a95(0x3fe)][_0x186ae6][_0x5a8a95(0x1b6)] = !![], $['players'][_0x5a8a95(0x39d) + _0x186ae6][_0x5a8a95(0x3ab)] = ![], $['players']['call' + _0x186ae6]['visible'] = ![], $[_0x5a8a95(0x3fe)][_0x5a8a95(0x168) + _0x186ae6]['visible'] = ![], $[_0x5a8a95(0x3fe)][_0x5a8a95(0x1b2) + _0x186ae6]['visible'] = ![], $[_0x5a8a95(0x3fe)][_0x5a8a95(0x1c6) + _0x186ae6][_0x5a8a95(0x3ab)] = ![];
                                }
                                TweenMax['to'](cardScoreContainer, 0.5, {
                                    'alpha': 0x0,
                                    'overwrite': !![],
                                    'onComplete': function() {
                                        var _0x2a54a6 = _0x5a8a95;
                                        typeof initSocket == _0x2a54a6(0x1a8) && multiplayerSettings[_0x2a54a6(0x30b)] && socketData[_0x2a54a6(0x3d3)] ? postSocketUpdate(_0x2a54a6(0x132), socketData['gameIndex']) : startCards();
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
}

function endGame() {
    var _0x6ccb3a = a0_0x45d961;
    gameData[_0x6ccb3a(0x2d3)] = !![], TweenMax['to'](gameContainer, 0x1, {
        'overwrite': !![],
        'onComplete': function() {
            var _0x2bf18e = _0x6ccb3a;
            goPage(_0x2bf18e(0x25b));
        }
    });
}

function millisecondsToTimeGame(_0x103df4) {
    var _0x229878 = a0_0x45d961,
        _0x15b5ed = _0x103df4 % 0x3e8,
        _0x41c59f = Math[_0x229878(0x1d3)](_0x103df4 / 0x3e8 % 0x3c),
        _0x450802 = Math[_0x229878(0x1d3)](_0x103df4 / (0x3c * 0x3e8) % 0x3c);
    return _0x41c59f < 0xa && (_0x41c59f = '0' + _0x41c59f), _0x450802 < 0xa && (_0x450802 = '0' + _0x450802), _0x450802 + ':' + _0x41c59f;
}

function toggleOptions(_0x453422) {
    var _0x23ea48 = a0_0x45d961;
    optionsContainer[_0x23ea48(0x3ab)] ? optionsContainer[_0x23ea48(0x3ab)] = ![] : optionsContainer[_0x23ea48(0x3ab)] = !![], _0x453422 != undefined && (optionsContainer[_0x23ea48(0x3ab)] = _0x453422);
}

function toggleSoundMute(_0x5e94eb) {
    var _0x1dd60a = a0_0x45d961;
    buttonSoundOff[_0x1dd60a(0x3ab)] = ![], buttonSoundOn[_0x1dd60a(0x3ab)] = ![], toggleSoundInMute(_0x5e94eb), _0x5e94eb ? buttonSoundOn[_0x1dd60a(0x3ab)] = !![] : buttonSoundOff[_0x1dd60a(0x3ab)] = !![];
}

function toggleMusicMute(_0x252ef1) {
    var _0x4b3394 = a0_0x45d961;
    buttonMusicOff[_0x4b3394(0x3ab)] = ![], buttonMusicOn[_0x4b3394(0x3ab)] = ![], toggleMusicInMute(_0x252ef1), _0x252ef1 ? buttonMusicOn[_0x4b3394(0x3ab)] = !![] : buttonMusicOff['visible'] = !![];
}

function toggleFullScreen() {
    var _0x501e25 = a0_0x45d961;
    if (!document[_0x501e25(0x284)] && !document[_0x501e25(0x32a)] && !document[_0x501e25(0x33d)] && !document['msFullscreenElement']) {
        if (document['documentElement'][_0x501e25(0x128)]) document[_0x501e25(0x36f)]['requestFullscreen']();
        else {
            if (document[_0x501e25(0x36f)][_0x501e25(0x146)]) document[_0x501e25(0x36f)][_0x501e25(0x146)]();
            else {
                if (document[_0x501e25(0x36f)][_0x501e25(0x21b)]) document[_0x501e25(0x36f)][_0x501e25(0x21b)]();
                else document[_0x501e25(0x36f)]['webkitRequestFullscreen'] && document['documentElement'][_0x501e25(0x2f2)](Element[_0x501e25(0x31e)]);
            }
        }
    } else {
        if (document[_0x501e25(0x3f1)]) document['exitFullscreen']();
        else {
            if (document[_0x501e25(0x1b8)]) document[_0x501e25(0x1b8)]();
            else {
                if (document[_0x501e25(0x14e)]) document['mozCancelFullScreen']();
                else document[_0x501e25(0x191)] && document[_0x501e25(0x191)]();
            }
        }
    }
}

function shareLinks(_0x4580bc, _0x593f0f) {
    var _0x5d5c99 = a0_0x45d961;
    shareSettings[_0x5d5c99(0x295)] && gtag('event', _0x5d5c99(0x167), {
        'event_category': _0x5d5c99(0x125),
        'event_label': _0x4580bc
    });
    var _0x48422c = location[_0x5d5c99(0x17d)];
    _0x48422c = encodeURIComponent(_0x48422c[_0x5d5c99(0x362)](0x0, _0x48422c[_0x5d5c99(0x2de)]('/') + 0x1));
    var _0x5a589c = shareSettings[_0x5d5c99(0x27c)][_0x5d5c99(0x3d4)](_0x5d5c99(0x314), _0x593f0f),
        _0xb0d1f8 = shareSettings[_0x5d5c99(0x294)][_0x5d5c99(0x3d4)](_0x5d5c99(0x314), _0x593f0f),
        _0x352697 = '';
    if (_0x4580bc == _0x5d5c99(0x39f)) shareSettings[_0x5d5c99(0x23d)] ? (_0x48422c = decodeURIComponent(_0x48422c), _0x352697 = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(_0x48422c + _0x5d5c99(0x375) + _0x5a589c + _0x5d5c99(0x2cb) + _0x48422c + _0x5d5c99(0x3b6) + _0x48422c + _0x5d5c99(0x307))) : _0x352697 = 'https://www.facebook.com/sharer/sharer.php?u=' + _0x48422c;
    else {
        if (_0x4580bc == _0x5d5c99(0x37d)) _0x352697 = _0x5d5c99(0x1db) + _0xb0d1f8 + _0x5d5c99(0x2cb) + _0x48422c;
        else {
            if (_0x4580bc == _0x5d5c99(0x2f4)) _0x352697 = 'https://api.whatsapp.com/send?text=' + _0xb0d1f8 + _0x5d5c99(0x138) + _0x48422c;
            else {
                if (_0x4580bc == _0x5d5c99(0x19b)) _0x352697 = _0x5d5c99(0x1f4) + _0x48422c + _0x5d5c99(0x2f3) + _0xb0d1f8;
                else {
                    if (_0x4580bc == 'reddit') _0x352697 = _0x5d5c99(0x37a) + _0x48422c + '&title=' + _0xb0d1f8;
                    else _0x4580bc == 'linkedin' && (_0x352697 = 'https://www.linkedin.com/sharing/share-offsite/?url=' + _0x48422c);
                }
            }
        }
    }
    window[_0x5d5c99(0x387)](_0x352697);
}
var stageWidth, stageHeight = 0x0,
    isLoaded = ![];
$(function() {
    var _0x1ea576 = a0_0x45d961,
        _0x544d52 = function() {
            var _0x1a935a = a0_0x42f1;
            try {
                createjs[_0x1a935a(0x40a)]['context'][_0x1a935a(0x161)] === _0x1a935a(0x214) && (createjs['WebAudioPlugin'][_0x1a935a(0x316)][_0x1a935a(0x26a)](), window[_0x1a935a(0x282)]('click', _0x544d52));
            } catch (_0x2ac0e0) {
                console['error']('There\x20was\x20an\x20error\x20while\x20trying\x20to\x20resume\x20the\x20SoundJS\x20Web\x20Audio\x20context...'), console['error'](_0x2ac0e0);
            }
        };
    window[_0x1ea576(0x3dc)](_0x1ea576(0x167), _0x544d52), window['location'][_0x1ea576(0x15f)][_0x1ea576(0x281)](0x0, 0x4) === 'file' && alert(_0x1ea576(0x165)), $(window)[_0x1ea576(0x39b)](function() {
        resizeLoaderFunc();
    }), resizeLoaderFunc(), checkBrowser();
});

function resizeLoaderFunc() {
    var _0x28540f = a0_0x45d961;
    stageWidth = $(window)[_0x28540f(0x34f)](), stageHeight = $(window)[_0x28540f(0x3e8)](), $(_0x28540f(0x14f))[_0x28540f(0x2b4)](_0x28540f(0x2d4), checkContentWidth($(_0x28540f(0x14f)))), $(_0x28540f(0x14f))[_0x28540f(0x2b4)]('top', checkContentHeight($(_0x28540f(0x14f)))), $('#notSupportHolder')[_0x28540f(0x2b4)](_0x28540f(0x2d4), checkContentWidth($('#mainLoader'))), $(_0x28540f(0x143))['css'](_0x28540f(0x1ad), checkContentHeight($('#mainLoader')));
}
var browserSupport = ![],
    isMobile, isTablet, isDesktop;

function checkBrowser() {
    var _0x5d5e37 = a0_0x45d961;
    if (typeof MobileDetect === _0x5d5e37(0x1a8)) {
        var _0x3d69df = new MobileDetect(window[_0x5d5e37(0x1f6)][_0x5d5e37(0x3b3)]);
        isMobile = _0x3d69df[_0x5d5e37(0x134)](), isTablet = _0x3d69df[_0x5d5e37(0x3f6)](), isMobile == null && isTablet == null && (isDesktop = !![]);
    }
    var _0x237e0b = document['createElement']('canvas');
    _0x237e0b[_0x5d5e37(0x13b)] && (browserSupport = !![]), browserSupport ? !isLoaded && (isLoaded = !![], initPreload()) : $(_0x5d5e37(0x143))[_0x5d5e37(0x33f)]();
}

function initPreload() {
    var _0xfba5c6 = a0_0x45d961;
    toggleLoader(!![]), checkMobileEvent(), $(window)['resize'](function() {
        clearTimeout(resizeTimer), resizeTimer = setTimeout(checkMobileOrientation, 0x3e8);
    }), resizeGameFunc(), loader = new createjs['LoadQueue'](![]), manifest = [{
        'src': 'assets/background.png',
        'id': _0xfba5c6(0x1ac)
    }, {
        'src': _0xfba5c6(0x30a),
        'id': 'backgroundP'
    }, {
        'src': _0xfba5c6(0x118),
        'id': _0xfba5c6(0x2d6)
    }, {
        'src': _0xfba5c6(0x2ae),
        'id': _0xfba5c6(0x1bd)
    }, {
        'src': _0xfba5c6(0x285),
        'id': _0xfba5c6(0x3cf)
    }, {
        'src': 'assets/button_start.png',
        'id': 'buttonStart'
    }, {
        'src': _0xfba5c6(0x31f),
        'id': _0xfba5c6(0x2e8)
    }, {
        'src': _0xfba5c6(0x22a),
        'id': _0xfba5c6(0x126)
    }, {
        'src': _0xfba5c6(0x2a1),
        'id': _0xfba5c6(0x15e)
    }, {
        'src': _0xfba5c6(0x1e7),
        'id': _0xfba5c6(0x26d)
    }, {
        'src': 'assets/item_tutorial_1.png',
        'id': _0xfba5c6(0x289)
    }, {
        'src': _0xfba5c6(0x1df),
        'id': _0xfba5c6(0x1b1)
    }, {
        'src': _0xfba5c6(0x288),
        'id': 'itemTutorial3'
    }, {
        'src': _0xfba5c6(0x3b2),
        'id': _0xfba5c6(0x22e)
    }, {
        'src': _0xfba5c6(0x406),
        'id': _0xfba5c6(0x144)
    }, {
        'src': _0xfba5c6(0x24c),
        'id': _0xfba5c6(0x3bc)
    }, {
        'src': _0xfba5c6(0x26b),
        'id': _0xfba5c6(0x28e)
    }, {
        'src': 'assets/item_tutorial_8.png',
        'id': _0xfba5c6(0x2f8)
    }, {
        'src': 'assets/item_tutorial_9.png',
        'id': 'itemTutorial9'
    }, {
        'src': 'assets/item_tutorial_10.png',
        'id': _0xfba5c6(0x219)
    }, {
        'src': _0xfba5c6(0x233),
        'id': _0xfba5c6(0x241)
    }, {
        'src': 'assets/item_tutorial_12.png',
        'id': 'itemTutorial12'
    }, {
        'src': 'assets/item_tutorial_13.png',
        'id': _0xfba5c6(0x308)
    }, {
        'src': _0xfba5c6(0x1c9),
        'id': _0xfba5c6(0x218)
    }, {
        'src': _0xfba5c6(0x2e9),
        'id': _0xfba5c6(0x182)
    }, {
        'src': 'assets/item_options.png',
        'id': 'itemOptions'
    }, {
        'src': 'assets/button_arrow_left.png',
        'id': _0xfba5c6(0x2d2)
    }, {
        'src': 'assets/button_arrow_right.png',
        'id': _0xfba5c6(0x1e5)
    }, {
        'src': _0xfba5c6(0x408),
        'id': _0xfba5c6(0x122)
    }, {
        'src': 'assets/button_minus.png',
        'id': 'buttonMinus'
    }, {
        'src': 'assets/button_tutorial.png',
        'id': _0xfba5c6(0x39a)
    }, {
        'src': 'assets/item_number.png',
        'id': _0xfba5c6(0x26e)
    }, {
        'src': _0xfba5c6(0x1ba),
        'id': _0xfba5c6(0x123)
    }, {
        'src': _0xfba5c6(0x302),
        'id': _0xfba5c6(0x3c8)
    }, {
        'src': _0xfba5c6(0x326),
        'id': _0xfba5c6(0x3e9)
    }, {
        'src': _0xfba5c6(0x100),
        'id': 'buttonAim'
    }, {
        'src': _0xfba5c6(0x136),
        'id': _0xfba5c6(0x32f)
    }, {
        'src': _0xfba5c6(0x272),
        'id': _0xfba5c6(0x225)
    }, {
        'src': _0xfba5c6(0x305),
        'id': _0xfba5c6(0x3ac)
    }, {
        'src': 'assets/item_status_long.png',
        'id': _0xfba5c6(0x371)
    }, {
        'src': _0xfba5c6(0x1b5),
        'id': _0xfba5c6(0x260)
    }, {
        'src': _0xfba5c6(0x16a),
        'id': 'itemScoreTop'
    }, {
        'src': 'assets/item_score_divide.png',
        'id': _0xfba5c6(0x404)
    }, {
        'src': _0xfba5c6(0x3f7),
        'id': 'itemScoreDivide'
    }, {
        'src': _0xfba5c6(0x1ee),
        'id': _0xfba5c6(0x405)
    }, {
        'src': _0xfba5c6(0x2ad),
        'id': _0xfba5c6(0x12a)
    }, {
        'src': 'assets/item_instruction.png',
        'id': _0xfba5c6(0x2ab)
    }, {
        'src': _0xfba5c6(0x3bd),
        'id': _0xfba5c6(0x3eb)
    }, {
        'src': _0xfba5c6(0x33a),
        'id': _0xfba5c6(0x255)
    }, {
        'src': 'assets/item_eliminated.png',
        'id': _0xfba5c6(0x25d)
    }, {
        'src': _0xfba5c6(0x155),
        'id': 'buttonShare'
    }, {
        'src': _0xfba5c6(0x1ed),
        'id': _0xfba5c6(0x390)
    }, {
        'src': _0xfba5c6(0x3c3),
        'id': _0xfba5c6(0x234)
    }, {
        'src': 'assets/social/button_twitter.png',
        'id': _0xfba5c6(0x2ca)
    }, {
        'src': _0xfba5c6(0x15d),
        'id': 'buttonWhatsapp'
    }, {
        'src': _0xfba5c6(0x3a5),
        'id': 'buttonTelegram'
    }, {
        'src': _0xfba5c6(0x3a6),
        'id': 'buttonReddit'
    }, {
        'src': 'assets/social/button_linkedin.png',
        'id': _0xfba5c6(0x2df)
    }, {
        'src': _0xfba5c6(0x3d2),
        'id': _0xfba5c6(0x3b0)
    }, {
        'src': 'assets/item_pop.png',
        'id': _0xfba5c6(0x32d)
    }, {
        'src': _0xfba5c6(0x1e8),
        'id': 'itemPopP'
    }, {
        'src': 'assets/button_confirm.png',
        'id': 'buttonConfirm'
    }, {
        'src': 'assets/button_cancel.png',
        'id': _0xfba5c6(0x3bb)
    }, {
        'src': _0xfba5c6(0x1da),
        'id': 'buttonFullscreen'
    }, {
        'src': _0xfba5c6(0x105),
        'id': 'buttonSoundOn'
    }, {
        'src': _0xfba5c6(0x34a),
        'id': _0xfba5c6(0x263)
    }, {
        'src': _0xfba5c6(0x2e7),
        'id': _0xfba5c6(0x185)
    }, {
        'src': _0xfba5c6(0x2c2),
        'id': _0xfba5c6(0x117)
    }, {
        'src': 'assets/button_exit.png',
        'id': _0xfba5c6(0x238)
    }, {
        'src': 'assets/button_settings.png',
        'id': _0xfba5c6(0x402)
    }];
    for (var _0x2c6f7f = 0x0; _0x2c6f7f < themes_arr[_0xfba5c6(0x2ee)]; _0x2c6f7f++) {
        manifest[_0xfba5c6(0x175)]({
            'src': themes_arr[_0x2c6f7f][_0xfba5c6(0x139)],
            'id': _0xfba5c6(0x156) + _0x2c6f7f
        }), manifest[_0xfba5c6(0x175)]({
            'src': themes_arr[_0x2c6f7f][_0xfba5c6(0x2a6)],
            'id': 'cardHighlight' + _0x2c6f7f
        }), manifest[_0xfba5c6(0x175)]({
            'src': themes_arr[_0x2c6f7f][_0xfba5c6(0x28b)],
            'id': _0xfba5c6(0x344) + _0x2c6f7f
        }), manifest[_0xfba5c6(0x175)]({
            'src': themes_arr[_0x2c6f7f][_0xfba5c6(0x1c6)],
            'id': 'cardEliminated' + _0x2c6f7f
        });
        for (var _0x8ddebd = 0x0; _0x8ddebd < gameData[_0xfba5c6(0x13c)]['length']; _0x8ddebd++) {
            manifest['push']({
                'src': themes_arr[_0x2c6f7f][gameData[_0xfba5c6(0x13c)][_0x8ddebd]][_0xfba5c6(0x1ac)],
                'id': _0xfba5c6(0x2f5) + _0x2c6f7f + '_' + gameData[_0xfba5c6(0x13c)][_0x8ddebd]
            });
            for (var _0x33cc0f = 0x0; _0x33cc0f < themes_arr[_0x2c6f7f][gameData[_0xfba5c6(0x13c)][_0x8ddebd]][_0xfba5c6(0x1a3)][_0xfba5c6(0x2ee)]; _0x33cc0f++) {
                manifest[_0xfba5c6(0x175)]({
                    'src': themes_arr[_0x2c6f7f][gameData[_0xfba5c6(0x13c)][_0x8ddebd]][_0xfba5c6(0x1a3)][_0x33cc0f],
                    'id': _0xfba5c6(0x3e4) + _0x2c6f7f + '_' + gameData['colors'][_0x8ddebd] + '_' + _0x33cc0f
                });
            }
            for (var _0x33cc0f = 0x0; _0x33cc0f < themes_arr[_0x2c6f7f][gameData[_0xfba5c6(0x13c)][_0x8ddebd]][_0xfba5c6(0x2e5)][_0xfba5c6(0x2ee)]; _0x33cc0f++) {
                manifest['push']({
                    'src': themes_arr[_0x2c6f7f][gameData[_0xfba5c6(0x13c)][_0x8ddebd]]['actions'][_0x33cc0f],
                    'id': _0xfba5c6(0x16f) + _0x2c6f7f + '_' + gameData['colors'][_0x8ddebd] + '_' + _0x33cc0f
                });
            }
        }
        for (var _0x33cc0f = 0x0; _0x33cc0f < themes_arr[_0x2c6f7f][_0xfba5c6(0x25c)]['length']; _0x33cc0f++) {
            manifest[_0xfba5c6(0x175)]({
                'src': themes_arr[_0x2c6f7f][_0xfba5c6(0x25c)][_0x33cc0f],
                'id': 'cardWilds' + _0x2c6f7f + '_' + _0x33cc0f
            });
        }
        for (var _0x33cc0f = 0x0; _0x33cc0f < themes_arr[_0x2c6f7f][_0xfba5c6(0x37f)][_0xfba5c6(0x2ee)]; _0x33cc0f++) {
            manifest[_0xfba5c6(0x175)]({
                'src': themes_arr[_0x2c6f7f][_0xfba5c6(0x37f)][_0x33cc0f],
                'id': _0xfba5c6(0x296) + _0x2c6f7f + '_' + _0x33cc0f
            });
        }
    }
    for (var _0x2c6f7f = 0x0; _0x2c6f7f < cards_arr[_0xfba5c6(0x2e5)][_0xfba5c6(0x2ee)]; _0x2c6f7f++) {
        manifest[_0xfba5c6(0x175)]({
            'src': cards_arr['actions'][_0x2c6f7f][_0xfba5c6(0x16b)],
            'id': 'cardActions' + _0x2c6f7f
        });
    }
    for (var _0x2c6f7f = 0x0; _0x2c6f7f < cards_arr[_0xfba5c6(0x25c)]['length']; _0x2c6f7f++) {
        manifest[_0xfba5c6(0x175)]({
            'src': cards_arr[_0xfba5c6(0x25c)][_0x2c6f7f][_0xfba5c6(0x16b)],
            'id': _0xfba5c6(0x1cb) + _0x2c6f7f
        });
    }
    for (var _0x2c6f7f = 0x0; _0x2c6f7f < cards_arr[_0xfba5c6(0x37f)][_0xfba5c6(0x2ee)]; _0x2c6f7f++) {
        manifest[_0xfba5c6(0x175)]({
            'src': cards_arr[_0xfba5c6(0x37f)][_0x2c6f7f][_0xfba5c6(0x16b)],
            'id': _0xfba5c6(0x3af) + _0x2c6f7f
        });
    }
    for (var _0x2c6f7f = 0x0; _0x2c6f7f < cards_arr[_0xfba5c6(0x258)][_0xfba5c6(0x2ee)]; _0x2c6f7f++) {
        manifest['push']({
            'src': cards_arr[_0xfba5c6(0x258)][_0x2c6f7f][_0xfba5c6(0x16b)],
            'id': _0xfba5c6(0x3d5) + _0x2c6f7f
        });
    }
    typeof addScoreboardAssets == _0xfba5c6(0x1a8) && addScoreboardAssets(), audioOn = !![], !isDesktop ? !enableMobileAudio && (audioOn = ![]) : !enableDesktopAudio && (audioOn = ![]), audioOn && (manifest[_0xfba5c6(0x175)]({
        'src': 'assets/sounds/sound_click.ogg',
        'id': _0xfba5c6(0x3c9)
    }), manifest[_0xfba5c6(0x175)]({
        'src': _0xfba5c6(0x1e4),
        'id': _0xfba5c6(0x19e)
    }), manifest[_0xfba5c6(0x175)]({
        'src': _0xfba5c6(0x3ba),
        'id': 'soundCardFlip'
    }), manifest['push']({
        'src': _0xfba5c6(0x1fd),
        'id': _0xfba5c6(0x244)
    }), manifest[_0xfba5c6(0x175)]({
        'src': _0xfba5c6(0x205),
        'id': _0xfba5c6(0x1b0)
    }), manifest[_0xfba5c6(0x175)]({
        'src': 'assets/sounds/sound_point.ogg',
        'id': 'soundPoint'
    }), manifest[_0xfba5c6(0x175)]({
        'src': _0xfba5c6(0x1b7),
        'id': 'soundRound'
    }), manifest[_0xfba5c6(0x175)]({
        'src': _0xfba5c6(0x2dd),
        'id': _0xfba5c6(0x1d5)
    }), manifest[_0xfba5c6(0x175)]({
        'src': _0xfba5c6(0x276),
        'id': 'soundResult'
    }), manifest['push']({
        'src': _0xfba5c6(0x24b),
        'id': 'soundWarning'
    }), manifest['push']({
        'src': _0xfba5c6(0x1fe),
        'id': _0xfba5c6(0x1dc)
    }), manifest[_0xfba5c6(0x175)]({
        'src': _0xfba5c6(0x252),
        'id': _0xfba5c6(0x35a)
    }), manifest['push']({
        'src': _0xfba5c6(0x36c),
        'id': _0xfba5c6(0x360)
    }), manifest[_0xfba5c6(0x175)]({
        'src': 'assets/sounds/sound_color_pick.ogg',
        'id': _0xfba5c6(0x130)
    }), manifest[_0xfba5c6(0x175)]({
        'src': _0xfba5c6(0x262),
        'id': _0xfba5c6(0x38f)
    }), manifest[_0xfba5c6(0x175)]({
        'src': _0xfba5c6(0x28f),
        'id': _0xfba5c6(0x3ec)
    }), manifest['push']({
        'src': _0xfba5c6(0x1cf),
        'id': _0xfba5c6(0x19a)
    }), manifest[_0xfba5c6(0x175)]({
        'src': 'assets/sounds/sound_eliminated.ogg',
        'id': _0xfba5c6(0x352)
    }), manifest[_0xfba5c6(0x175)]({
        'src': _0xfba5c6(0x154),
        'id': 'soundDirection'
    }), manifest[_0xfba5c6(0x175)]({
        'src': _0xfba5c6(0x388),
        'id': _0xfba5c6(0xfc)
    }), manifest['push']({
        'src': 'assets/sounds/music_game.ogg',
        'id': _0xfba5c6(0x20e)
    }), manifest['push']({
        'src': _0xfba5c6(0x3d9),
        'id': _0xfba5c6(0x178)
    }), createjs[_0xfba5c6(0x212)][_0xfba5c6(0x16c)] = [_0xfba5c6(0x3c6)], loader['installPlugin'](createjs[_0xfba5c6(0x212)])), loader['addEventListener'](_0xfba5c6(0x3c4), handleComplete), loader[_0xfba5c6(0x3dc)](_0xfba5c6(0x3da), fileComplete), loader[_0xfba5c6(0x3dc)]('error', handleFileError), loader['on'](_0xfba5c6(0x283), handleProgress, this), loader['loadManifest'](manifest);
}

function fileComplete(_0x20ee0b) {
    var _0x281321 = a0_0x45d961,
        _0x44670c = _0x20ee0b[_0x281321(0x2a5)];
}

function handleFileError(_0x4ed415) {
    var _0x16df4f = a0_0x45d961;
    console['log'](_0x16df4f(0x286), _0x4ed415);
}

function handleProgress() {
    var _0x65161 = a0_0x45d961;
    $(_0x65161(0x2d0))[_0x65161(0x133)](Math[_0x65161(0x250)](loader[_0x65161(0x283)] / 0x1 * 0x64) + '%');
}

function handleComplete() {
    toggleLoader(![]), initMain();
};

function toggleLoader(_0xae1324) {
    var _0x477dd2 = a0_0x45d961;
    _0xae1324 ? $('#mainLoader')[_0x477dd2(0x33f)]() : $(_0x477dd2(0x14f))[_0x477dd2(0x2f9)]();
}
var stageW = 0x500,
    stageH = 0x300,
    contentW = 0x400,
    contentH = 0x240;
const viewport = {
        'isLandscape': !![]
    },
    landscapeSize = {
        'w': stageW,
        'h': stageH,
        'cW': contentW,
        'cH': contentH
    },
    portraitSize = {
        'w': 0x300,
        'h': 0x400,
        'cW': 0x240,
        'cH': 0x384
    };

function initMain() {
    var _0x35ecdd = a0_0x45d961;
    isDesktop && $(_0x35ecdd(0x1f1))[_0x35ecdd(0x33f)](), initGameCanvas(stageW, stageH), buildGameCanvas(), buildGameButton(), typeof buildScoreBoardCanvas == _0x35ecdd(0x1a8) && buildScoreBoardCanvas(), goPage('main'), typeof initSocket == 'function' && multiplayerSettings[_0x35ecdd(0x30b)] && initSocket(_0x35ecdd(0x1e1)), checkMobileOrientation(), resizeCanvas();
}
var windowW = windowH = 0x0,
    scalePercent = 0x0;
const dpr = window[a0_0x45d961(0x16e)] || 0x1,
    offset = {
        'x': 0x0,
        'y': 0x0,
        'left': 0x0,
        'top': 0x0
    };

function resizeGameFunc() {
    setTimeout(function() {
        var _0x1c0b64 = a0_0x42f1;
        $(_0x1c0b64(0xfe))[_0x1c0b64(0x2b4)](_0x1c0b64(0x2d4), checkContentWidth($(_0x1c0b64(0xfe)))), $('.mobileRotate')['css'](_0x1c0b64(0x1ad), checkContentHeight($('.mobileRotate'))), windowW = window[_0x1c0b64(0x3d0)], windowH = window['innerHeight'], scalePercent = Math[_0x1c0b64(0x2ac)](windowW / contentW, windowH / contentH), scalePercent = scalePercent > 0x1 ? 0x1 : scalePercent;
        windowW > stageW && windowH > stageH && (windowW > stageW && (scalePercent = windowW / stageW, stageH * scalePercent > windowH && (scalePercent = windowH / stageH)));
        const _0x453bbe = stageW * scalePercent,
            _0x2eecde = stageH * scalePercent;
        offset['left'] = 0x0, offset[_0x1c0b64(0x1ad)] = 0x0;
        _0x453bbe > windowW ? offset[_0x1c0b64(0x2d4)] = -(_0x453bbe - windowW) : offset[_0x1c0b64(0x2d4)] = windowW - _0x453bbe;
        _0x2eecde > windowH ? offset[_0x1c0b64(0x1ad)] = -(_0x2eecde - windowH) : offset['top'] = windowH - _0x2eecde;
        offset['x'] = 0x0, offset['y'] = 0x0;
        offset[_0x1c0b64(0x2d4)] < 0x0 && (offset['x'] = Math[_0x1c0b64(0x3e0)](offset[_0x1c0b64(0x2d4)] / scalePercent / 0x2));
        offset[_0x1c0b64(0x1ad)] < 0x0 && (offset['y'] = Math[_0x1c0b64(0x3e0)](offset[_0x1c0b64(0x1ad)] / scalePercent / 0x2));
        const _0x1652d = document['getElementById']('gameCanvas'),
            _0x50f05e = _0x1652d['getContext']('2d');
        _0x1652d['style'][_0x1c0b64(0x34f)] = _0x453bbe + 'px', _0x1652d[_0x1c0b64(0x23e)][_0x1c0b64(0x3e8)] = _0x2eecde + 'px', _0x1652d['style'][_0x1c0b64(0x2d4)] = offset[_0x1c0b64(0x2d4)] / 0x2 + 'px', _0x1652d[_0x1c0b64(0x23e)][_0x1c0b64(0x1ad)] = offset[_0x1c0b64(0x1ad)] / 0x2 + 'px', _0x1652d['width'] = stageW * dpr, _0x1652d['height'] = stageH * dpr, typeof initSocket == 'function' && multiplayerSettings[_0x1c0b64(0x30b)] && ($(_0x1c0b64(0x2f1))[_0x1c0b64(0x1c7)](function(_0x1b7acf, _0x259e3d) {
            var _0x3fc3d7 = _0x1c0b64;
            $(this)[_0x3fc3d7(0x2b4)](_0x3fc3d7(0x15b), Math['round'](Number($(this)['attr'](_0x3fc3d7(0x120))) * scalePercent));
        }), $(_0x1c0b64(0x3fb))[_0x1c0b64(0x2b4)](_0x1c0b64(0x34f), _0x453bbe), $('#roomWrapper')[_0x1c0b64(0x2b4)](_0x1c0b64(0x3e8), _0x2eecde), $(_0x1c0b64(0x3fb))['css']('left', offset[_0x1c0b64(0x2d4)] / 0x2), $(_0x1c0b64(0x3fb))['css'](_0x1c0b64(0x1ad), offset[_0x1c0b64(0x1ad)] / 0x2), $('#notificationHolder')[_0x1c0b64(0x2b4)](_0x1c0b64(0x34f), _0x453bbe), $(_0x1c0b64(0x21e))[_0x1c0b64(0x2b4)]('height', _0x2eecde), $(_0x1c0b64(0x21e))[_0x1c0b64(0x2b4)](_0x1c0b64(0x2d4), offset[_0x1c0b64(0x2d4)] / 0x2), $(_0x1c0b64(0x21e))[_0x1c0b64(0x2b4)](_0x1c0b64(0x1ad), offset[_0x1c0b64(0x1ad)] / 0x2)), $(window)[_0x1c0b64(0x40b)](0x0), resizeCanvas(), typeof resizeScore == _0x1c0b64(0x1a8) && resizeScore();
    }, 0x64);
}
var resizeTimer;

function checkMobileEvent() {
    var _0x3041fa = a0_0x45d961;
    !isDesktop && ($(window)[_0x3041fa(0x104)]('orientationchange')['on']('orientationchange', function(_0x5cd196) {
        var _0x55e8a3 = _0x3041fa;
        $(_0x55e8a3(0x1f1))[_0x55e8a3(0x2f9)](), $(_0x55e8a3(0x247))[_0x55e8a3(0x2f9)](), clearTimeout(resizeTimer), resizeTimer = setTimeout(checkMobileOrientation, 0x3e8);
    }), checkMobileOrientation());
}

function checkMobileOrientation() {
    var _0x47e674 = a0_0x45d961,
        _0x2cbe49 = ![];
    window[_0x47e674(0x3d0)] > window[_0x47e674(0x275)] && (_0x2cbe49 = !![]), $[_0x47e674(0x22f)][_0x47e674(0x30b)] ? viewport[_0x47e674(0x3ea)] = edit[_0x47e674(0x3ea)] : viewport['isLandscape'] = _0x2cbe49, changeViewport(viewport[_0x47e674(0x3ea)]), resizeGameFunc(), $(_0x47e674(0x1f1))['show']();
}

function toggleRotate(_0x1a17f8) {
    var _0x54298b = a0_0x45d961;
    _0x1a17f8 ? $(_0x54298b(0x247))[_0x54298b(0x1c5)]() : $(_0x54298b(0x247))['fadeOut'](), resizeGameFunc();
}

function checkContentHeight(_0x19d4b1) {
    var _0x584470 = a0_0x45d961,
        _0x2df3ea = $(window)[_0x584470(0x3e8)](),
        _0x25db5c = _0x2df3ea / 0x2 - _0x19d4b1[_0x584470(0x3e8)]() / 0x2;
    return _0x25db5c;
}

function checkContentWidth(_0x2b1e5f) {
    var _0x53eb27 = a0_0x45d961,
        _0x3a614f = $(window)[_0x53eb27(0x34f)](),
        _0x14b8d3 = _0x3a614f / 0x2 - _0x2b1e5f['width']() / 0x2;
    return _0x14b8d3;
}

function shuffle(_0x9a3d8c) {
    var _0x271288 = a0_0x45d961,
        _0x55314c = _0x9a3d8c[_0x271288(0x2ee)],
        _0x4dceb0, _0x2c0574;
    while (0x0 !== _0x55314c) {
        _0x2c0574 = Math[_0x271288(0x1d3)](Math[_0x271288(0x2b3)]() * _0x55314c), _0x55314c -= 0x1, _0x4dceb0 = _0x9a3d8c[_0x55314c], _0x9a3d8c[_0x55314c] = _0x9a3d8c[_0x2c0574], _0x9a3d8c[_0x2c0574] = _0x4dceb0;
    }
    return _0x9a3d8c;
}

function randomBoolean() {
    var _0x30ae86 = a0_0x45d961;
    return Math[_0x30ae86(0x2b3)]() < 0.5;
}

function getDistance(_0x427f78, _0x567294, _0x3945a3, _0x3e590d) {
    var _0x480d1f = a0_0x45d961,
        _0xd2b458 = Math[_0x480d1f(0x27d)](Math[_0x480d1f(0xff)](_0x427f78 - _0x3945a3, 0x2) + Math['pow'](_0x567294 - _0x3e590d, 0x2));
    return _0xd2b458;
}

function sortOnObject(_0x4c9d31, _0x3ff78b, _0x3709dc) {
    var _0x22c261 = a0_0x45d961;
    return _0x3709dc ? _0x4c9d31[_0x22c261(0x1a2)](function(_0x35b462, _0x39df82) {
        var _0x166adb = _0x35b462[_0x3ff78b],
            _0x3935e5 = _0x39df82[_0x3ff78b];
        if (_0x166adb == _0x3935e5) return 0x0;
        return _0x166adb < _0x3935e5 ? 0x1 : -0x1;
    }) : _0x4c9d31['sort'](function(_0xfa1cae, _0x329335) {
        var _0x46a69c = _0xfa1cae[_0x3ff78b],
            _0x1a5ace = _0x329335[_0x3ff78b];
        if (_0x46a69c == _0x1a5ace) return 0x0;
        return _0x46a69c > _0x1a5ace ? 0x1 : -0x1;
    }), _0x4c9d31;
}

function randomIntFromInterval(_0x27bc31, _0x4e1363) {
    var _0x3ae060 = a0_0x45d961;
    return Math['floor'](Math[_0x3ae060(0x2b3)]() * (_0x4e1363 - _0x27bc31 + 0x1) + _0x27bc31);
}

function addCommas(_0x244cc3) {
    var _0x473498 = a0_0x45d961;
    _0x244cc3 += '', x = _0x244cc3[_0x473498(0x3b8)]('.'), x1 = x[0x0], x2 = x[_0x473498(0x2ee)] > 0x1 ? '.' + x[0x1] : '';
    var _0x41e4a8 = /(\d+)(\d{3})/;
    while (_0x41e4a8[_0x473498(0x1cd)](x1)) {
        x1 = x1[_0x473498(0x3d4)](_0x41e4a8, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

function swapArray(_0x2f4a44, _0x21eb01, _0x4a1a50) {
    var _0x10b66f = _0x2f4a44[_0x21eb01];
    _0x2f4a44[_0x21eb01] = _0x2f4a44[_0x4a1a50], _0x2f4a44[_0x4a1a50] = _0x10b66f;
}

function getCenterPosition(_0x2fdb77, _0x597337, _0x1c5951, _0x148081) {
    var _0xbcc2a5 = {
        'x': 0x0,
        'y': 0x0
    };
    return _0xbcc2a5['x'] = (_0x2fdb77 + _0x1c5951) / 0x2, _0xbcc2a5['y'] = (_0x597337 + _0x148081) / 0x2, _0xbcc2a5;
}

function setRotation(_0x5bb0e5, _0x31c97c, _0x212f5d, _0xf3351b) {
    var _0x59484e = a0_0x45d961,
        _0x518632 = 0xb4 / Math['PI'],
        _0x8c304a = -Math[_0x59484e(0x338)](_0x212f5d - _0x5bb0e5, _0xf3351b - _0x31c97c) * _0x518632;
    return _0x8c304a - 0x5a;
}

function isEven(_0x584b6d) {
    if (_0x584b6d % 0x2 == 0x0) return !![];
    else return ![];
}

function getAnglePosition(_0xb324e1, _0xf7f302, _0x5bf61e, _0x436de7) {
    var _0x16aaf9 = a0_0x45d961,
        _0x3ff492 = {
            'x': 0x0,
            'y': 0x0
        };
    return _0x3ff492['x'] = _0xb324e1 + _0x5bf61e * Math[_0x16aaf9(0x232)](_0x436de7 * Math['PI'] / 0xb4), _0x3ff492['y'] = _0xf7f302 + _0x5bf61e * Math[_0x16aaf9(0x1a7)](_0x436de7 * Math['PI'] / 0xb4), _0x3ff492;
}

function removeDuplicates(_0xffe24) {
    var _0x3e2a74 = a0_0x45d961;
    return _0xffe24[_0x3e2a74(0x34d)]((_0x4f8647, _0x3b4d9f) => _0xffe24[_0x3e2a74(0x1c4)](_0x4f8647) === _0x3b4d9f);
}
const enableDesktopAudio = !![],
    enableMobileAudio = !![],
    muteSoundOn = ![],
    muteMusicOn = ![];
var audioOn, soundMute = ![],
    musicMute = ![];
$[a0_0x45d961(0x1b9)] = {};
var soundID = 0x0,
    soundPushArr = [],
    soundLoopPushArr = [],
    musicPushArr = [];

function playSound(_0x3832d9, _0x59146c) {
    var _0x40cc7c = a0_0x45d961;
    if (audioOn) {
        var _0x237c37 = soundID;
        soundPushArr[_0x40cc7c(0x175)](_0x237c37), soundID++;
        var _0x516aa2 = _0x59146c == undefined ? 0x1 : _0x59146c;
        $['sound'][_0x237c37] = createjs[_0x40cc7c(0x212)]['play'](_0x3832d9), $[_0x40cc7c(0x1b9)][_0x237c37][_0x40cc7c(0x195)] = _0x516aa2, setSoundVolume(_0x237c37), $[_0x40cc7c(0x1b9)][_0x237c37][_0x40cc7c(0x3fc)](), $[_0x40cc7c(0x1b9)][_0x237c37][_0x40cc7c(0x3dc)](_0x40cc7c(0x3c4), function() {
            var _0x43973e = _0x40cc7c,
                _0x15a432 = soundPushArr[_0x43973e(0x1c4)](_0x237c37);
            _0x15a432 != -0x1 && soundPushArr['splice'](_0x15a432, 0x1);
        });
    }
}

function playSoundLoop(_0x41c5bd) {
    var _0x39c436 = a0_0x45d961;
    audioOn && ($[_0x39c436(0x1b9)][_0x41c5bd] == null && (soundLoopPushArr[_0x39c436(0x175)](_0x41c5bd), $['sound'][_0x41c5bd] = createjs[_0x39c436(0x212)]['play'](_0x41c5bd), $[_0x39c436(0x1b9)][_0x41c5bd][_0x39c436(0x195)] = 0x1, setSoundLoopVolume(_0x41c5bd), $['sound'][_0x41c5bd][_0x39c436(0x3fc)](), $[_0x39c436(0x1b9)][_0x41c5bd]['addEventListener'](_0x39c436(0x3c4), function() {
        var _0x1e4d32 = _0x39c436;
        $[_0x1e4d32(0x1b9)][_0x41c5bd][_0x1e4d32(0x348)]();
    })));
}

function toggleSoundLoop(_0x4bfbab, _0x2d6327) {
    var _0x5b2801 = a0_0x45d961;
    audioOn && ($['sound'][_0x4bfbab] != null && (_0x2d6327 ? $[_0x5b2801(0x1b9)][_0x4bfbab][_0x5b2801(0x348)]() : $[_0x5b2801(0x1b9)][_0x4bfbab]['paused'] = !![]));
}

function stopSoundLoop(_0x26581b) {
    var _0x244221 = a0_0x45d961;
    if (audioOn) {
        if ($[_0x244221(0x1b9)][_0x26581b] != null) {
            $[_0x244221(0x1b9)][_0x26581b]['stop'](), $[_0x244221(0x1b9)][_0x26581b] = null;
            var _0x17005d = soundLoopPushArr['indexOf'](_0x26581b);
            _0x17005d != -0x1 && soundLoopPushArr[_0x244221(0x365)](_0x17005d, 0x1);
        }
    }
}

function playMusicLoop(_0x3c2c43) {
    var _0x24c2a8 = a0_0x45d961;
    audioOn && ($['sound'][_0x3c2c43] == null && (musicPushArr[_0x24c2a8(0x175)](_0x3c2c43), $[_0x24c2a8(0x1b9)][_0x3c2c43] = createjs[_0x24c2a8(0x212)][_0x24c2a8(0x348)](_0x3c2c43), $[_0x24c2a8(0x1b9)][_0x3c2c43][_0x24c2a8(0x195)] = 0x1, setMusicVolume(_0x3c2c43), $[_0x24c2a8(0x1b9)][_0x3c2c43][_0x24c2a8(0x3fc)](), $['sound'][_0x3c2c43][_0x24c2a8(0x3dc)](_0x24c2a8(0x3c4), function() {
        var _0x1672f1 = _0x24c2a8;
        $['sound'][_0x3c2c43][_0x1672f1(0x348)]();
    })));
}

function toggleMusicLoop(_0x108dbc, _0x5d38ae) {
    var _0x199829 = a0_0x45d961;
    audioOn && ($[_0x199829(0x1b9)][_0x108dbc] != null && (_0x5d38ae ? $[_0x199829(0x1b9)][_0x108dbc][_0x199829(0x348)]() : $[_0x199829(0x1b9)][_0x108dbc]['paused'] = !![]));
}

function stopMusicLoop(_0xf23e05) {
    var _0x50df8f = a0_0x45d961;
    if (audioOn) {
        if ($['sound'][_0xf23e05] != null) {
            $['sound'][_0xf23e05][_0x50df8f(0x3c7)](), $[_0x50df8f(0x1b9)][_0xf23e05] = null;
            var _0x241f26 = musicPushArr[_0x50df8f(0x1c4)](_0xf23e05);
            _0x241f26 != -0x1 && musicPushArr[_0x50df8f(0x365)](_0x241f26, 0x1);
        }
    }
}

function stopSound() {
    var _0x1ec69d = a0_0x45d961;
    createjs['Sound'][_0x1ec69d(0x3c7)]();
}

function toggleSoundInMute(_0x12094b) {
    if (audioOn) {
        soundMute = _0x12094b;
        for (var _0x95e28e = 0x0; _0x95e28e < soundPushArr['length']; _0x95e28e++) {
            setSoundVolume(soundPushArr[_0x95e28e]);
        }
        for (var _0x95e28e = 0x0; _0x95e28e < soundLoopPushArr['length']; _0x95e28e++) {
            setSoundLoopVolume(soundLoopPushArr[_0x95e28e]);
        }
    }
}

function toggleMusicInMute(_0x58575d) {
    var _0x196cc6 = a0_0x45d961;
    if (audioOn) {
        musicMute = _0x58575d;
        for (var _0x239b3f = 0x0; _0x239b3f < musicPushArr[_0x196cc6(0x2ee)]; _0x239b3f++) {
            setMusicVolume(musicPushArr[_0x239b3f]);
        }
    }
}

function setSoundVolume(_0x42a5e9, _0x19d576) {
    var _0x343a62 = a0_0x45d961;
    if (audioOn) {
        var _0x494bf7 = soundPushArr[_0x343a62(0x1c4)](_0x42a5e9);
        if (_0x494bf7 != -0x1) {
            var _0x3743b6 = _0x19d576 == undefined ? $['sound'][soundPushArr[_0x494bf7]]['defaultVol'] : _0x19d576,
                _0x4faefa = soundMute == ![] ? _0x3743b6 : 0x0;
            $[_0x343a62(0x1b9)][soundPushArr[_0x494bf7]][_0x343a62(0x366)] = _0x4faefa, $[_0x343a62(0x1b9)][soundPushArr[_0x494bf7]]['defaultVol'] = _0x3743b6;
        }
    }
}

function setSoundLoopVolume(_0x3f31a1, _0x56e4e5) {
    var _0x1263c9 = a0_0x45d961;
    if (audioOn) {
        var _0x5a1b1f = soundLoopPushArr[_0x1263c9(0x1c4)](_0x3f31a1);
        if (_0x5a1b1f != -0x1) {
            var _0x3af279 = _0x56e4e5 == undefined ? $[_0x1263c9(0x1b9)][soundLoopPushArr[_0x5a1b1f]][_0x1263c9(0x195)] : _0x56e4e5,
                _0x9564e6 = soundMute == ![] ? _0x3af279 : 0x0;
            $[_0x1263c9(0x1b9)][soundLoopPushArr[_0x5a1b1f]]['volume'] = _0x9564e6, $['sound'][soundLoopPushArr[_0x5a1b1f]]['defaultVol'] = _0x3af279;
        }
    }
}

function setMusicVolume(_0x2113b9, _0x313a4a) {
    var _0x4dca8e = a0_0x45d961;
    if (audioOn) {
        var _0x55fd28 = musicPushArr[_0x4dca8e(0x1c4)](_0x2113b9);
        if (_0x55fd28 != -0x1) {
            var _0x3ac0fc = _0x313a4a == undefined ? $[_0x4dca8e(0x1b9)][musicPushArr[_0x55fd28]][_0x4dca8e(0x195)] : _0x313a4a,
                _0x5f4be1 = musicMute == ![] ? _0x3ac0fc : 0x0;
            $['sound'][musicPushArr[_0x55fd28]]['volume'] = _0x5f4be1, $[_0x4dca8e(0x1b9)][musicPushArr[_0x55fd28]][_0x4dca8e(0x195)] = _0x3ac0fc;
        }
    }
}