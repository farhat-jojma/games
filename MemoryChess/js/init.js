var a0_0x55ac9f = a0_0x5853;
(function(_0xba3594, _0x38f1e9) {
    var _0x2de033 = a0_0x5853,
        _0x46659c = _0xba3594();
    while (!![]) {
        try {
            var _0x25231d = parseInt(_0x2de033(0x1ee)) / 0x1 * (-parseInt(_0x2de033(0x237)) / 0x2) + parseInt(_0x2de033(0x273)) / 0x3 * (-parseInt(_0x2de033(0x12e)) / 0x4) + -parseInt(_0x2de033(0x134)) / 0x5 * (-parseInt(_0x2de033(0x147)) / 0x6) + parseInt(_0x2de033(0x1b1)) / 0x7 * (-parseInt(_0x2de033(0x86)) / 0x8) + parseInt(_0x2de033(0x191)) / 0x9 * (-parseInt(_0x2de033(0x1d6)) / 0xa) + parseInt(_0x2de033(0x1c6)) / 0xb * (parseInt(_0x2de033(0xaf)) / 0xc) + parseInt(_0x2de033(0x25b)) / 0xd;
            if (_0x25231d === _0x38f1e9) break;
            else _0x46659c['push'](_0x46659c['shift']());
        } catch (_0x19fc9b) {
            _0x46659c['push'](_0x46659c['shift']());
        }
    }
}(a0_0x1e69, 0x5afaa));
var stage, canvasW = 0x0,
    canvasH = 0x0;

function initGameCanvas(_0x501341, _0x583600) {
    var _0x14f3b6 = a0_0x5853;
    const _0x44622f = document[_0x14f3b6(0x18f)](_0x14f3b6(0x1fd));
    _0x44622f['width'] = _0x501341, _0x44622f[_0x14f3b6(0xb6)] = _0x583600, canvasW = _0x501341, canvasH = _0x583600, stage = new createjs[(_0x14f3b6(0xa7))](_0x14f3b6(0x1fd), {
        'antialias': !![]
    }), createjs[_0x14f3b6(0x1cb)]['enable'](stage), stage['enableMouseOver'](0x14), stage['mouseMoveOutside'] = !![], createjs['Ticker']['framerate'] = 0x3c, createjs[_0x14f3b6(0x269)][_0x14f3b6(0x20e)](_0x14f3b6(0x140), tick);
}
var safeZoneGuide = ![],
    canvasContainer, mainContainer, gameContainer, resultContainer, exitContainer, optionsContainer, shareContainer, shareSaveContainer, socialContainer, guideline, bg, bgP, logo, logoP, itemExit, itemExitP, popTitleTxt, popDescTxt, buttonConfirm, buttonCancel, itemResult, itemResultP, buttonContinue, resultTitleTxt, resultDescTxt, buttonShare, buttonSave, resultTitleOutlineTxt, resultDescOutlineTxt, resultShareTxt, resultShareOutlineTxt, popTitleOutlineTxt, popDescOutlineTxt, buttonSettings, buttonFullscreen, buttonSoundOn, buttonSoundOff, buttonMusicOn, buttonMusicOff, buttonExit;
$[a0_0x55ac9f(0x1de)] = {};
var buttonLocalContainer, boardOptionsContainer, boardOptionsListContainer, boardOptionsTutorialContainer, boardContainer, boardDesignContainer, boardIconContainer, boardHighlightContainer, boardGuideContainer, diceContainer, playersContainer, statusContainer, buttonPlay, buttonLocal, buttonOnline, itemOptions, optionsTitleTxt, itemPlayerNumbers, totalPlayersTxt, buttonPlayersL, buttonPlayersR, itemVS, vsModeTxt, buttonVSL, buttonVSR, itemPoints, beadsTxt, buttonBeadsL, buttonBeadsR, itemType, typeTxt, buttonTypeL, buttonTypeR, themeContainer, buttonThemeL, buttonThemeR, buttonNext, buttonStart, buttonTutorial, buttonTutorialL, buttonTutorialR, buttonBack, tutorialTitleTxt, tutorialPageTxt, itemStatus, itemDiceShadow, statusTxt, statusWinTxt, statusWinRuleTxt, itemInstruct, instructTxt, itemInstruct2, instructTxt2, roomContainer, nameContainer, gameLogsTxt;
$[a0_0x55ac9f(0x21b)] = {}, $[a0_0x55ac9f(0x220)] = {}, $[a0_0x55ac9f(0x181)] = {};

function buildGameCanvas() {
    var _0x4914d7 = a0_0x55ac9f;
    canvasContainer = new createjs['Container'](), mainContainer = new createjs[(_0x4914d7(0x15c))](), gameContainer = new createjs[(_0x4914d7(0x15c))](), exitContainer = new createjs[(_0x4914d7(0x15c))](), resultContainer = new createjs[(_0x4914d7(0x15c))](), shareContainer = new createjs[(_0x4914d7(0x15c))](), shareSaveContainer = new createjs[(_0x4914d7(0x15c))](), socialContainer = new createjs['Container'](), buttonLocalContainer = new createjs[(_0x4914d7(0x15c))](), mainContainer = new createjs[(_0x4914d7(0x15c))](), boardOptionsContainer = new createjs[(_0x4914d7(0x15c))](), boardOptionsListContainer = new createjs[(_0x4914d7(0x15c))](), boardOptionsTutorialContainer = new createjs[(_0x4914d7(0x15c))](), boardContainer = new createjs[(_0x4914d7(0x15c))](), boardDesignContainer = new createjs[(_0x4914d7(0x15c))](), boardIconContainer = new createjs[(_0x4914d7(0x15c))](), boardHighlightContainer = new createjs[(_0x4914d7(0x15c))](), boardGuideContainer = new createjs[(_0x4914d7(0x15c))](), diceContainer = new createjs[(_0x4914d7(0x15c))](), playersContainer = new createjs[(_0x4914d7(0x15c))](), statusContainer = new createjs[(_0x4914d7(0x15c))](), instructionContainer = new createjs[(_0x4914d7(0x15c))](), bg = new createjs['Bitmap'](loader[_0x4914d7(0x1ed)](_0x4914d7(0xec))), bgP = new createjs[(_0x4914d7(0x102))](loader[_0x4914d7(0x1ed)](_0x4914d7(0x113))), logo = new createjs['Bitmap'](loader[_0x4914d7(0x1ed)](_0x4914d7(0x26f))), logoP = new createjs[(_0x4914d7(0x102))](loader[_0x4914d7(0x1ed)](_0x4914d7(0x96))), buttonPlay = new createjs[(_0x4914d7(0x102))](loader[_0x4914d7(0x1ed)]('buttonPlay')), centerReg(buttonPlay), buttonLocal = new createjs[(_0x4914d7(0x102))](loader['getResult'](_0x4914d7(0x1a1))), centerReg(buttonLocal), buttonOnline = new createjs[(_0x4914d7(0x102))](loader['getResult'](_0x4914d7(0x194))), centerReg(buttonOnline), itemOptions = new createjs[(_0x4914d7(0x102))](loader['getResult'](_0x4914d7(0x1a6))), centerReg(itemOptions), optionsTitleTxt = new createjs[(_0x4914d7(0x22e))](), optionsTitleTxt[_0x4914d7(0x209)] = '60px\x20bpreplaybold', optionsTitleTxt[_0x4914d7(0xdf)] = '#fff', optionsTitleTxt['textAlign'] = _0x4914d7(0x19a), optionsTitleTxt[_0x4914d7(0x16d)] = 'alphabetic', optionsTitleTxt[_0x4914d7(0x92)] = textStrings[_0x4914d7(0xe0)], optionsTitleTxt['y'] = -0x96, itemPlayerNumbers = new createjs[(_0x4914d7(0x102))](loader[_0x4914d7(0x1ed)]('itemNumber')), centerReg(itemPlayerNumbers), totalPlayersTxt = new createjs['Text'](), totalPlayersTxt['font'] = _0x4914d7(0x11b), totalPlayersTxt['color'] = '#18283c', totalPlayersTxt[_0x4914d7(0xe1)] = 'center', totalPlayersTxt[_0x4914d7(0x16d)] = _0x4914d7(0x148), buttonPlayersL = new createjs[(_0x4914d7(0x102))](loader[_0x4914d7(0x1ed)](_0x4914d7(0x175))), centerReg(buttonPlayersL), buttonPlayersR = new createjs[(_0x4914d7(0x102))](loader[_0x4914d7(0x1ed)](_0x4914d7(0x1c0))), centerReg(buttonPlayersR), itemVS = new createjs[(_0x4914d7(0x102))](loader['getResult']('itemNumber')), centerReg(itemVS), vsModeTxt = new createjs[(_0x4914d7(0x22e))](), vsModeTxt[_0x4914d7(0x209)] = _0x4914d7(0x11b), vsModeTxt[_0x4914d7(0xdf)] = _0x4914d7(0x167), vsModeTxt['textAlign'] = _0x4914d7(0x19a), vsModeTxt[_0x4914d7(0x16d)] = _0x4914d7(0x148), buttonVSL = new createjs[(_0x4914d7(0x102))](loader[_0x4914d7(0x1ed)]('buttonArrowLeft')), centerReg(buttonVSL), buttonVSR = new createjs['Bitmap'](loader['getResult']('buttonArrowRight')), centerReg(buttonVSR), itemPoints = new createjs[(_0x4914d7(0x102))](loader['getResult'](_0x4914d7(0x1d8))), centerReg(itemPoints), beadsTxt = new createjs[(_0x4914d7(0x22e))](), beadsTxt[_0x4914d7(0x209)] = '28px\x20bpreplaybold', beadsTxt[_0x4914d7(0xdf)] = _0x4914d7(0x167), beadsTxt[_0x4914d7(0xe1)] = _0x4914d7(0x19a), beadsTxt[_0x4914d7(0x16d)] = _0x4914d7(0x148), buttonBeadsL = new createjs['Bitmap'](loader['getResult'](_0x4914d7(0x175))), centerReg(buttonBeadsL), buttonBeadsR = new createjs['Bitmap'](loader[_0x4914d7(0x1ed)](_0x4914d7(0x1c0))), centerReg(buttonBeadsR), itemType = new createjs[(_0x4914d7(0x102))](loader[_0x4914d7(0x1ed)](_0x4914d7(0x1d8))), centerReg(itemType), typeTxt = new createjs[(_0x4914d7(0x22e))](), typeTxt[_0x4914d7(0x209)] = _0x4914d7(0x13c), typeTxt['color'] = _0x4914d7(0x167), typeTxt[_0x4914d7(0xe1)] = 'center', typeTxt['textBaseline'] = 'middle', buttonTypeL = new createjs[(_0x4914d7(0x102))](loader[_0x4914d7(0x1ed)](_0x4914d7(0x175))), centerReg(buttonTypeL), buttonTypeR = new createjs[(_0x4914d7(0x102))](loader[_0x4914d7(0x1ed)](_0x4914d7(0x1c0))), centerReg(buttonTypeR), themeContainer = new createjs['Container'](), buttonThemeL = new createjs['Bitmap'](loader[_0x4914d7(0x1ed)]('buttonArrowLeft')), centerReg(buttonThemeL), buttonThemeR = new createjs[(_0x4914d7(0x102))](loader[_0x4914d7(0x1ed)](_0x4914d7(0x1c0))), centerReg(buttonThemeR), buttonNext = new createjs[(_0x4914d7(0x102))](loader['getResult'](_0x4914d7(0x16a))), centerReg(buttonNext), buttonStart = new createjs['Bitmap'](loader[_0x4914d7(0x1ed)](_0x4914d7(0x116))), centerReg(buttonStart), buttonTutorial = new createjs[(_0x4914d7(0x102))](loader['getResult'](_0x4914d7(0x22d))), centerReg(buttonTutorial), itemPlayerNumbers['y'] = buttonPlayersL['y'] = buttonPlayersR['y'] = -0x32, totalPlayersTxt['y'] = -0x32, itemVS['y'] = buttonVSL['y'] = buttonVSR['y'] = 0x23, vsModeTxt['y'] = 0x23, themeContainer['y'] = buttonThemeL['y'] = buttonThemeR['y'] = -0x5a, itemPoints['y'] = buttonBeadsL['y'] = buttonBeadsR['y'] = -0x5, beadsTxt['y'] = -0x5, itemType['y'] = buttonTypeL['y'] = buttonTypeR['y'] = 0x50, typeTxt['y'] = 0x53, buttonPlayersL['x'] = buttonBeadsL['x'] = buttonTypeL['x'] = buttonVSL['x'] = -0xbe, buttonPlayersR['x'] = buttonBeadsR['x'] = buttonTypeR['x'] = buttonVSR['x'] = 0xbe, buttonThemeL['x'] = -0xbe, buttonThemeR['x'] = 0xbe, buttonNext['y'] = buttonStart['y'] = buttonTutorial['y'] = 0xb4, buttonNext['x'] = buttonStart['x'] = -0x32, buttonTutorial['x'] = 0x8c, buttonTutorialL = new createjs['Bitmap'](loader['getResult'](_0x4914d7(0x175))), centerReg(buttonTutorialL), buttonTutorialR = new createjs[(_0x4914d7(0x102))](loader[_0x4914d7(0x1ed)](_0x4914d7(0x1c0))), centerReg(buttonTutorialR), buttonTutorialL['x'] = -0x10e, buttonTutorialR['x'] = 0x10e, buttonBack = new createjs['Bitmap'](loader['getResult'](_0x4914d7(0x24e))), centerReg(buttonBack), buttonBack['y'] = 0xb4, tutorialTitleTxt = new createjs[(_0x4914d7(0x22e))](), tutorialTitleTxt[_0x4914d7(0x209)] = _0x4914d7(0xed), tutorialTitleTxt['color'] = _0x4914d7(0x240), tutorialTitleTxt[_0x4914d7(0xe1)] = 'left', tutorialTitleTxt['textBaseline'] = 'alphabetic', tutorialTitleTxt['text'] = textStrings['tutorialTitle'], tutorialTitleTxt['y'] = -0x96, tutorialTitleTxt['x'] = -0xdc, tutorialPageTxt = new createjs[(_0x4914d7(0x22e))](), tutorialPageTxt[_0x4914d7(0x209)] = _0x4914d7(0xed), tutorialPageTxt[_0x4914d7(0xdf)] = _0x4914d7(0x240), tutorialPageTxt[_0x4914d7(0xe1)] = _0x4914d7(0x24a), tutorialPageTxt[_0x4914d7(0x16d)] = 'alphabetic', tutorialPageTxt['y'] = -0x96, tutorialPageTxt['x'] = 0xdc, boardOptionsTutorialContainer[_0x4914d7(0x15d)](tutorialTitleTxt, tutorialPageTxt, buttonBack, buttonTutorialL, buttonTutorialR);
    for (var _0x4b2a18 = 0x0; _0x4b2a18 < 0x6; _0x4b2a18++) {
        $[_0x4914d7(0x21b)][_0x4b2a18] = new createjs[(_0x4914d7(0x102))](loader[_0x4914d7(0x1ed)](_0x4914d7(0xca) + (_0x4b2a18 + 0x1))), centerReg($[_0x4914d7(0x21b)][_0x4b2a18]), boardOptionsTutorialContainer['addChild']($[_0x4914d7(0x21b)][_0x4b2a18]);
    }
    boardOptionsListContainer[_0x4914d7(0x15d)](optionsTitleTxt, itemPlayerNumbers, itemVS, vsModeTxt, buttonVSL, buttonVSR, totalPlayersTxt, buttonPlayersL, buttonPlayersR, itemPoints, beadsTxt, buttonBeadsL, buttonBeadsR, itemType, typeTxt, buttonTypeL, buttonTypeR, themeContainer, buttonThemeL, buttonThemeR, buttonStart, buttonTutorial, buttonNext), boardOptionsContainer[_0x4914d7(0x15d)](itemOptions, boardOptionsListContainer, boardOptionsTutorialContainer), itemStatus = new createjs[(_0x4914d7(0x102))](loader[_0x4914d7(0x1ed)]('itemStatus')), centerReg(itemStatus), itemDiceShadow = new createjs[(_0x4914d7(0x102))](loader['getResult'](_0x4914d7(0x1b3))), centerReg(itemDiceShadow), statusTxt = new createjs[(_0x4914d7(0x22e))](), statusTxt[_0x4914d7(0x209)] = _0x4914d7(0xba), statusTxt['color'] = _0x4914d7(0x240), statusTxt[_0x4914d7(0xe1)] = _0x4914d7(0x19a), statusTxt[_0x4914d7(0x16d)] = 'alphabetic', statusTxt[_0x4914d7(0x92)] = textStrings[_0x4914d7(0x26c)], statusTxt['y'] = -0x17, statusWinTxt = new createjs[(_0x4914d7(0x22e))](), statusWinTxt[_0x4914d7(0x209)] = _0x4914d7(0x18c), statusWinTxt['color'] = '#fff', statusWinTxt['textAlign'] = _0x4914d7(0x19a), statusWinTxt[_0x4914d7(0x16d)] = 'alphabetic', statusWinTxt[_0x4914d7(0x92)] = textStrings[_0x4914d7(0x1de)], statusWinTxt['y'] = 0xf, statusWinRuleTxt = new createjs['Text'](), statusWinRuleTxt['font'] = _0x4914d7(0x8a), statusWinRuleTxt[_0x4914d7(0xdf)] = _0x4914d7(0x167), statusWinRuleTxt[_0x4914d7(0xe1)] = 'center', statusWinRuleTxt['textBaseline'] = 'alphabetic', statusWinRuleTxt[_0x4914d7(0x92)] = textStrings['share'], statusWinRuleTxt['y'] = 0x2e, statusContainer[_0x4914d7(0x15d)](itemStatus, statusTxt, statusWinTxt, statusWinRuleTxt), itemInstruct = new createjs[(_0x4914d7(0x102))](loader['getResult']('itemInstruct')), centerReg(itemInstruct), instructTxt = new createjs[(_0x4914d7(0x22e))](), instructTxt[_0x4914d7(0x209)] = '23px\x20bpreplaybold', instructTxt[_0x4914d7(0xdf)] = _0x4914d7(0x240), instructTxt[_0x4914d7(0xe1)] = _0x4914d7(0x19a), instructTxt['textBaseline'] = 'alphabetic', instructTxt['text'] = textStrings[_0x4914d7(0x1f9)], instructTxt['y'] = 0x8, itemInstruct2 = new createjs[(_0x4914d7(0x102))](loader[_0x4914d7(0x1ed)](_0x4914d7(0x272))), centerReg(itemInstruct2), instructTxt2 = new createjs[(_0x4914d7(0x22e))](), instructTxt2[_0x4914d7(0x209)] = _0x4914d7(0xf4), instructTxt2[_0x4914d7(0xdf)] = _0x4914d7(0x240), instructTxt2['textAlign'] = _0x4914d7(0x19a), instructTxt2[_0x4914d7(0x16d)] = _0x4914d7(0x187), instructTxt2[_0x4914d7(0x92)] = textStrings[_0x4914d7(0x114)], instructTxt2['y'] = 0x8, instructionContainer[_0x4914d7(0x15d)](itemInstruct, instructTxt, itemInstruct2, instructTxt2), itemResult = new createjs[(_0x4914d7(0x102))](loader[_0x4914d7(0x1ed)]('itemPop')), itemResultP = new createjs['Bitmap'](loader[_0x4914d7(0x1ed)](_0x4914d7(0x2a4))), buttonContinue = new createjs[(_0x4914d7(0x102))](loader[_0x4914d7(0x1ed)]('buttonContinue')), centerReg(buttonContinue), resultShareTxt = new createjs[(_0x4914d7(0x22e))](), resultShareTxt[_0x4914d7(0x209)] = _0x4914d7(0xba), resultShareTxt['color'] = _0x4914d7(0x240), resultShareTxt['textAlign'] = _0x4914d7(0x19a), resultShareTxt[_0x4914d7(0x16d)] = _0x4914d7(0x187), resultShareTxt['text'] = textStrings['share'], resultTitleTxt = new createjs['Text'](), resultTitleTxt[_0x4914d7(0x209)] = _0x4914d7(0x289), resultTitleTxt['color'] = _0x4914d7(0x240), resultTitleTxt['textAlign'] = 'center', resultTitleTxt[_0x4914d7(0x16d)] = _0x4914d7(0x187), resultTitleTxt[_0x4914d7(0x92)] = textStrings[_0x4914d7(0x8b)], resultDescTxt = new createjs['Text'](), resultDescTxt[_0x4914d7(0x209)] = _0x4914d7(0x27a), resultDescTxt[_0x4914d7(0x2a1)] = 0x23, resultDescTxt[_0x4914d7(0xdf)] = _0x4914d7(0x106), resultDescTxt[_0x4914d7(0xe1)] = _0x4914d7(0x19a), resultDescTxt[_0x4914d7(0x16d)] = _0x4914d7(0x187), resultDescTxt[_0x4914d7(0x92)] = '', socialContainer[_0x4914d7(0x1fb)] = ![], socialContainer['scale'] = 0.9, shareContainer[_0x4914d7(0x15d)](resultShareTxt, socialContainer);
    if (shareSettings[_0x4914d7(0xb9)]) {
        buttonShare = new createjs[(_0x4914d7(0x102))](loader[_0x4914d7(0x1ed)](_0x4914d7(0x219))), centerReg(buttonShare);
        var _0x1cbbf9 = {
            'x': 0x0,
            'y': 0x2d,
            'spaceX': 0x41
        };
        _0x1cbbf9['x'] = -((shareSettings[_0x4914d7(0x9f)][_0x4914d7(0x7d)] - 0x1) * _0x1cbbf9['spaceX'] / 0x2);
        for (let _0x4f3aa8 = 0x0; _0x4f3aa8 < shareSettings[_0x4914d7(0x9f)][_0x4914d7(0x7d)]; _0x4f3aa8++) {
            var _0x5ac5c7 = shareSettings[_0x4914d7(0x9f)][_0x4f3aa8],
                _0x561cd0 = String(_0x5ac5c7[0x0])[_0x4914d7(0x156)]() + String(_0x5ac5c7)[_0x4914d7(0x295)](0x1);
            $[_0x4914d7(0x1de)]['button' + _0x4f3aa8] = new createjs['Bitmap'](loader[_0x4914d7(0x1ed)](_0x4914d7(0x1a9) + _0x561cd0)), $[_0x4914d7(0x1de)][_0x4914d7(0x1a9) + _0x4f3aa8][_0x4914d7(0xd0)] = _0x5ac5c7, centerReg($[_0x4914d7(0x1de)][_0x4914d7(0x1a9) + _0x4f3aa8]), $[_0x4914d7(0x1de)][_0x4914d7(0x1a9) + _0x4f3aa8]['x'] = _0x1cbbf9['x'], $[_0x4914d7(0x1de)]['button' + _0x4f3aa8]['y'] = _0x1cbbf9['y'], socialContainer[_0x4914d7(0x15d)]($[_0x4914d7(0x1de)][_0x4914d7(0x1a9) + _0x4f3aa8]), _0x1cbbf9['x'] += _0x1cbbf9[_0x4914d7(0x1a8)];
        }
        buttonShare['y'] = buttonShare[_0x4914d7(0x1bb)]['naturalHeight'] / 0x2 + 0xa, shareContainer['addChild'](buttonShare);
    }
    typeof toggleScoreboardSave == _0x4914d7(0x103) && (buttonSave = new createjs[(_0x4914d7(0x102))](loader[_0x4914d7(0x1ed)](_0x4914d7(0x216))), centerReg(buttonSave), buttonSave['y'] = buttonSave[_0x4914d7(0x1bb)][_0x4914d7(0x242)] / 0x2 + 0xa, shareSaveContainer['addChild'](buttonSave)), buttonFullscreen = new createjs[(_0x4914d7(0x102))](loader[_0x4914d7(0x1ed)]('buttonFullscreen')), centerReg(buttonFullscreen), buttonSoundOn = new createjs[(_0x4914d7(0x102))](loader[_0x4914d7(0x1ed)](_0x4914d7(0x292))), centerReg(buttonSoundOn), buttonSoundOff = new createjs[(_0x4914d7(0x102))](loader[_0x4914d7(0x1ed)](_0x4914d7(0xdc))), centerReg(buttonSoundOff), buttonSoundOn[_0x4914d7(0x1fb)] = ![], buttonMusicOn = new createjs[(_0x4914d7(0x102))](loader['getResult']('buttonMusicOn')), centerReg(buttonMusicOn), buttonMusicOff = new createjs[(_0x4914d7(0x102))](loader[_0x4914d7(0x1ed)](_0x4914d7(0x138))), centerReg(buttonMusicOff), buttonMusicOn[_0x4914d7(0x1fb)] = ![], buttonExit = new createjs[(_0x4914d7(0x102))](loader[_0x4914d7(0x1ed)]('buttonExit')), centerReg(buttonExit), buttonSettings = new createjs['Bitmap'](loader['getResult'](_0x4914d7(0x128))), centerReg(buttonSettings), createHitarea(buttonFullscreen), createHitarea(buttonSoundOn), createHitarea(buttonSoundOff), createHitarea(buttonExit), createHitarea(buttonSettings), optionsContainer = new createjs[(_0x4914d7(0x15c))](), optionsContainer[_0x4914d7(0x15d)](buttonFullscreen, buttonSoundOn, buttonSoundOff, buttonMusicOn, buttonMusicOff, buttonExit), optionsContainer[_0x4914d7(0x1fb)] = ![], itemExit = new createjs[(_0x4914d7(0x102))](loader[_0x4914d7(0x1ed)](_0x4914d7(0x270))), itemExitP = new createjs['Bitmap'](loader['getResult'](_0x4914d7(0x2a4))), buttonConfirm = new createjs[(_0x4914d7(0x102))](loader[_0x4914d7(0x1ed)](_0x4914d7(0x1d1))), centerReg(buttonConfirm), buttonCancel = new createjs['Bitmap'](loader[_0x4914d7(0x1ed)]('buttonCancel')), centerReg(buttonCancel), popTitleTxt = new createjs['Text'](), popTitleTxt[_0x4914d7(0x209)] = _0x4914d7(0x289), popTitleTxt[_0x4914d7(0xdf)] = _0x4914d7(0x240), popTitleTxt[_0x4914d7(0xe1)] = _0x4914d7(0x19a), popTitleTxt['textBaseline'] = 'alphabetic', popTitleTxt[_0x4914d7(0x92)] = textStrings[_0x4914d7(0x1ab)], popDescTxt = new createjs[(_0x4914d7(0x22e))](), popDescTxt['font'] = _0x4914d7(0xed), popDescTxt[_0x4914d7(0x2a1)] = 0x32, popDescTxt['color'] = _0x4914d7(0x240), popDescTxt['textAlign'] = _0x4914d7(0x19a), popDescTxt['textBaseline'] = 'alphabetic', popDescTxt['text'] = textStrings[_0x4914d7(0x238)], exitContainer['addChild'](itemExit, itemExitP, popTitleTxt, popDescTxt, buttonConfirm, buttonCancel), exitContainer['visible'] = ![], guideline = new createjs[(_0x4914d7(0x14a))](), roomContainer = new createjs['Container'](), nameContainer = new createjs[(_0x4914d7(0x15c))](), gameLogsTxt = new createjs[(_0x4914d7(0x22e))](), gameLogsTxt[_0x4914d7(0x209)] = '25px\x20bpreplaybold', gameLogsTxt[_0x4914d7(0xdf)] = _0x4914d7(0x240), gameLogsTxt[_0x4914d7(0xe1)] = 'center', gameLogsTxt[_0x4914d7(0x16d)] = _0x4914d7(0x187), gameLogsTxt['text'] = '', buttonLocalContainer[_0x4914d7(0x15d)](buttonLocal, buttonOnline), mainContainer[_0x4914d7(0x15d)](logo, logoP, buttonPlay, buttonLocalContainer), boardContainer[_0x4914d7(0x15d)](boardDesignContainer, boardIconContainer, boardHighlightContainer, boardGuideContainer, itemDiceShadow, diceContainer), gameContainer[_0x4914d7(0x15d)](boardContainer, playersContainer, statusContainer, instructionContainer), resultContainer[_0x4914d7(0x15d)](itemResult, itemResultP, buttonContinue, resultTitleTxt, resultDescTxt, shareContainer, shareSaveContainer), canvasContainer[_0x4914d7(0x15d)](bg, bgP, mainContainer, nameContainer, roomContainer, boardOptionsContainer, gameContainer, gameLogsTxt, resultContainer, exitContainer, optionsContainer, buttonSettings, guideline), stage['addChild'](canvasContainer), changeViewport(viewport[_0x4914d7(0x1c4)]), resizeGameFunc();
}

function changeViewport(_0x574422) {
    _0x574422 ? (stageW = landscapeSize['w'], stageH = landscapeSize['h'], contentW = landscapeSize['cW'], contentH = landscapeSize['cH']) : (stageW = portraitSize['w'], stageH = portraitSize['h'], contentW = portraitSize['cW'], contentH = portraitSize['cH']), canvasW = stageW, canvasH = stageH, changeCanvasViewport();
}

function changeCanvasViewport() {
    var _0x41e983 = a0_0x55ac9f;
    canvasContainer != undefined && (stage[_0x41e983(0x197)] = stage['scaleY'] = dpr, safeZoneGuide && guideline[_0x41e983(0x241)][_0x41e983(0x83)]()[_0x41e983(0x10b)](0x2)[_0x41e983(0x98)](_0x41e983(0x11c))[_0x41e983(0x1df)]((stageW - contentW) / 0x2, (stageH - contentH) / 0x2, contentW, contentH), boardOptionsContainer['x'] = canvasW / 0x2, boardOptionsContainer['y'] = canvasH / 0x2, viewport[_0x41e983(0x1c4)] ? (bg[_0x41e983(0x1fb)] = !![], bgP[_0x41e983(0x1fb)] = ![], logo[_0x41e983(0x1fb)] = !![], logoP['visible'] = ![], buttonPlay['x'] = canvasW / 0x2, buttonPlay['y'] = canvasH / 0x64 * 0x4b, buttonLocal['x'] = canvasW / 0x2 - 0x8c, buttonLocal['y'] = canvasH / 0x64 * 0x4b, buttonOnline['x'] = canvasW / 0x2 + 0x8c, buttonOnline['y'] = canvasH / 0x64 * 0x4b, itemResult[_0x41e983(0x1fb)] = !![], itemResultP[_0x41e983(0x1fb)] = ![], buttonContinue['x'] = canvasW / 0x2, buttonContinue['y'] = canvasH / 0x64 * 0x44, shareContainer['x'] = shareSaveContainer['x'] = canvasW / 0x2, shareContainer['y'] = shareSaveContainer['y'] = canvasH / 0x64 * 0x35, resultTitleTxt['x'] = canvasW / 0x2, resultTitleTxt['y'] = canvasH / 0x64 * 0x25, resultDescTxt['x'] = canvasW / 0x2, resultDescTxt['y'] = canvasH / 0x64 * 0x2f, itemExit[_0x41e983(0x1fb)] = !![], itemExitP[_0x41e983(0x1fb)] = ![], buttonConfirm['x'] = canvasW / 0x2, buttonConfirm['y'] = canvasH / 0x64 * 0x3c, buttonCancel['x'] = canvasW / 0x2, buttonCancel['y'] = canvasH / 0x64 * 0x48, popTitleTxt['x'] = canvasW / 0x2, popTitleTxt['y'] = canvasH / 0x64 * 0x25, popDescTxt['x'] = canvasW / 0x2, popDescTxt['y'] = canvasH / 0x64 * 0x2b, $(_0x41e983(0x1d5))['removeClass'](_0x41e983(0xf0)), $(_0x41e983(0x146))[_0x41e983(0x258)](_0x41e983(0xf0)), $('#roomlists')['attr'](_0x41e983(0x206), 0xa), $('#namelists')['attr'](_0x41e983(0x206), 0xa), $(_0x41e983(0x1f0))['attr'](_0x41e983(0xfe), 0xa)) : (bg[_0x41e983(0x1fb)] = ![], bgP['visible'] = !![], logo[_0x41e983(0x1fb)] = ![], logoP['visible'] = !![], buttonPlay['x'] = canvasW / 0x2, buttonPlay['y'] = canvasH / 0x64 * 0x4a, buttonLocal['x'] = canvasW / 0x2, buttonLocal['y'] = canvasH / 0x64 * 0x4a, buttonOnline['x'] = canvasW / 0x2, buttonOnline['y'] = canvasH / 0x64 * 0x53, itemResult['visible'] = ![], itemResultP['visible'] = !![], buttonContinue['x'] = canvasW / 0x2, buttonContinue['y'] = canvasH / 0x64 * 0x40, shareContainer['x'] = shareSaveContainer['x'] = canvasW / 0x2, shareContainer['y'] = shareSaveContainer['y'] = canvasH / 0x64 * 0x34, resultTitleTxt['x'] = canvasW / 0x2, resultTitleTxt['y'] = canvasH / 0x64 * 0x28, resultDescTxt['x'] = canvasW / 0x2, resultDescTxt['y'] = canvasH / 0x64 * 0x2f, itemExit[_0x41e983(0x1fb)] = ![], itemExitP[_0x41e983(0x1fb)] = !![], buttonConfirm['x'] = canvasW / 0x2, buttonConfirm['y'] = canvasH / 0x64 * 0x3a, buttonCancel['x'] = canvasW / 0x2, buttonCancel['y'] = canvasH / 0x64 * 0x43, popTitleTxt['x'] = canvasW / 0x2, popTitleTxt['y'] = canvasH / 0x64 * 0x28, popDescTxt['x'] = canvasW / 0x2, popDescTxt['y'] = canvasH / 0x64 * 0x2e, $(_0x41e983(0x1d5))[_0x41e983(0x159)]('forPortrait'), $('#notificationHolder')[_0x41e983(0x159)](_0x41e983(0xf0)), $(_0x41e983(0x25d))[_0x41e983(0xa3)](_0x41e983(0x206), 0x8), $(_0x41e983(0x12d))[_0x41e983(0xa3)](_0x41e983(0x206), 0x8), $(_0x41e983(0x1f0))['attr'](_0x41e983(0xfe), 0x6)));
}

function resizeCanvas() {
    var _0x969464 = a0_0x55ac9f;
    if (canvasContainer != undefined) {
        buttonSettings['x'] = canvasW - offset['x'] - 0x32, buttonSettings['y'] = offset['y'] + 0x2d;
        var _0x4d2a23 = 0x41,
            _0x19820d = 0x0;
        buttonSoundOn['x'] = buttonSoundOff['x'] = buttonSettings['x'], buttonSoundOn['y'] = buttonSoundOff['y'] = buttonSettings['y'] + _0x4d2a23, buttonSoundOn['x'] = buttonSoundOff['x'], buttonSoundOn['y'] = buttonSoundOff['y'] = buttonSettings['y'] + _0x4d2a23, typeof buttonMusicOn != _0x969464(0x22b) ? (buttonMusicOn['x'] = buttonMusicOff['x'] = buttonSettings['x'], buttonMusicOn['y'] = buttonMusicOff['y'] = buttonSettings['y'] + _0x4d2a23 * 0x2, buttonMusicOn['x'] = buttonMusicOff['x'], buttonMusicOn['y'] = buttonMusicOff['y'] = buttonSettings['y'] + _0x4d2a23 * 0x2, _0x19820d = 0x2) : _0x19820d = 0x1, buttonFullscreen['x'] = buttonSettings['x'], buttonFullscreen['y'] = buttonSettings['y'] + _0x4d2a23 * (_0x19820d + 0x1), curPage == _0x969464(0x1e5) || curPage == 'result' ? (buttonExit[_0x969464(0x1fb)] = ![], buttonFullscreen['x'] = buttonSettings['x'], buttonFullscreen['y'] = buttonSettings['y'] + _0x4d2a23 * (_0x19820d + 0x1)) : (buttonExit['visible'] = !![], buttonExit['x'] = buttonSettings['x'], buttonExit['y'] = buttonSettings['y'] + _0x4d2a23 * (_0x19820d + 0x2)), resizeGameLayout(), resizeSocketLog();
    }
}

function removeGameCanvas() {
    var _0x3776e7 = a0_0x55ac9f;
    stage[_0x3776e7(0x1dc)] = !![], stage[_0x3776e7(0x87)](), stage['update'](), createjs[_0x3776e7(0x269)][_0x3776e7(0x1e4)]('tick', tick), createjs['Ticker']['removeEventListener']('tick', stage);
}

function tick(_0x5cea75) {
    var _0x38682c = a0_0x55ac9f;
    updateGame(), stage[_0x38682c(0x1b0)](_0x5cea75);
}

function centerReg(_0x3ebbcc) {
    var _0x5bae2c = a0_0x55ac9f;
    _0x3ebbcc[_0x5bae2c(0xc2)] = _0x3ebbcc[_0x5bae2c(0x1bb)][_0x5bae2c(0x8e)] / 0x2, _0x3ebbcc['regY'] = _0x3ebbcc[_0x5bae2c(0x1bb)][_0x5bae2c(0x242)] / 0x2;
}

function createHitarea(_0x4d0945) {
    var _0xa53356 = a0_0x55ac9f;
    _0x4d0945['hitArea'] = new createjs[(_0xa53356(0x14a))](new createjs['Graphics']()[_0xa53356(0x14c)](_0xa53356(0x260))[_0xa53356(0x1df)](0x0, 0x0, _0x4d0945[_0xa53356(0x1bb)]['naturalWidth'], _0x4d0945[_0xa53356(0x1bb)][_0xa53356(0x242)]));
}
const themesSettings = [{
        'boards': [a0_0x55ac9f(0x2a3), a0_0x55ac9f(0x215)],
        'colors': [a0_0x55ac9f(0x1b2), a0_0x55ac9f(0x89), a0_0x55ac9f(0x1e7), 'BLACK', a0_0x55ac9f(0xbb), a0_0x55ac9f(0xe3)],
        'hole': a0_0x55ac9f(0x122),
        'holeHighlight': 'assets/board_hole_01_h.png',
        'dice': 'assets/item_dice_01.png',
        'diceHighlight': a0_0x55ac9f(0xd5),
        'pieceTop': [{
            'src': a0_0x55ac9f(0x1d2),
            'regX': 0x12,
            'regY': 0x14,
            'height': 0x3c
        }, {
            'src': a0_0x55ac9f(0x266),
            'regX': 0x12,
            'regY': 0x14,
            'height': 0x3c
        }, {
            'src': a0_0x55ac9f(0xcd),
            'regX': 0x12,
            'regY': 0x14,
            'height': 0x3c
        }, {
            'src': a0_0x55ac9f(0x12a),
            'regX': 0x12,
            'regY': 0x14,
            'height': 0x3c
        }, {
            'src': 'assets/chess_01_e.png',
            'regX': 0x12,
            'regY': 0x14,
            'height': 0x3c
        }, {
            'src': 'assets/chess_01_f.png',
            'regX': 0x12,
            'regY': 0x14,
            'height': 0x3c
        }],
        'pieceBottom': [{
            'src': 'assets/chess_01_a_b.png',
            'regX': 0x12,
            'regY': 0xa,
            'height': 0x3c
        }, {
            'src': 'assets/chess_01_b_b.png',
            'regX': 0x12,
            'regY': 0xa,
            'height': 0x3c
        }, {
            'src': a0_0x55ac9f(0x1db),
            'regX': 0x12,
            'regY': 0xa,
            'height': 0x3c
        }, {
            'src': a0_0x55ac9f(0x25a),
            'regX': 0x12,
            'regY': 0xa,
            'height': 0x3c
        }, {
            'src': a0_0x55ac9f(0x255),
            'regX': 0x12,
            'regY': 0xa,
            'height': 0x3c
        }, {
            'src': a0_0x55ac9f(0x1d0),
            'regX': 0x12,
            'regY': 0xa,
            'height': 0x3c
        }]
    }, {
        'boards': ['assets/board_02_a.png', 'assets/board_02_b.png'],
        'colors': ['RED', 'BLUE', a0_0x55ac9f(0x1e7), a0_0x55ac9f(0x97), 'WHITE', a0_0x55ac9f(0xe3)],
        'hole': a0_0x55ac9f(0xd3),
        'holeHighlight': a0_0x55ac9f(0x153),
        'dice': a0_0x55ac9f(0x195),
        'diceHighlight': a0_0x55ac9f(0xdd),
        'pieceTop': [{
            'src': 'assets/chess_02_a.png',
            'regX': 0x12,
            'regY': 0x14,
            'height': 0x3c
        }, {
            'src': 'assets/chess_02_b.png',
            'regX': 0x12,
            'regY': 0x14,
            'height': 0x3c
        }, {
            'src': a0_0x55ac9f(0x28d),
            'regX': 0x12,
            'regY': 0x14,
            'height': 0x3c
        }, {
            'src': a0_0x55ac9f(0x264),
            'regX': 0x12,
            'regY': 0x14,
            'height': 0x3c
        }, {
            'src': a0_0x55ac9f(0x1c7),
            'regX': 0x12,
            'regY': 0x14,
            'height': 0x3c
        }, {
            'src': a0_0x55ac9f(0x1d3),
            'regX': 0x12,
            'regY': 0x14,
            'height': 0x3c
        }],
        'pieceBottom': [{
            'src': 'assets/chess_02_a_b.png',
            'regX': 0x12,
            'regY': 0xa,
            'height': 0x3c
        }, {
            'src': a0_0x55ac9f(0xdb),
            'regX': 0x12,
            'regY': 0xa,
            'height': 0x3c
        }, {
            'src': a0_0x55ac9f(0x10a),
            'regX': 0x12,
            'regY': 0xa,
            'height': 0x3c
        }, {
            'src': a0_0x55ac9f(0xa1),
            'regX': 0x12,
            'regY': 0xa,
            'height': 0x3c
        }, {
            'src': a0_0x55ac9f(0xaa),
            'regX': 0x12,
            'regY': 0xa,
            'height': 0x3c
        }, {
            'src': a0_0x55ac9f(0x1be),
            'regX': 0x12,
            'regY': 0xa,
            'height': 0x3c
        }]
    }, {
        'boards': [a0_0x55ac9f(0x15b), a0_0x55ac9f(0xbf)],
        'colors': [a0_0x55ac9f(0x1b2), 'BLUE', 'YELLOW', 'BLACK', 'WHITE', a0_0x55ac9f(0xe3)],
        'hole': a0_0x55ac9f(0x17f),
        'holeHighlight': a0_0x55ac9f(0xc4),
        'dice': 'assets/item_dice_03.png',
        'diceHighlight': a0_0x55ac9f(0x29b),
        'pieceTop': [{
            'src': a0_0x55ac9f(0x24d),
            'regX': 0x12,
            'regY': 0x14,
            'height': 0x3c
        }, {
            'src': a0_0x55ac9f(0x144),
            'regX': 0x12,
            'regY': 0x14,
            'height': 0x3c
        }, {
            'src': a0_0x55ac9f(0x203),
            'regX': 0x12,
            'regY': 0x14,
            'height': 0x3c
        }, {
            'src': a0_0x55ac9f(0x88),
            'regX': 0x12,
            'regY': 0x14,
            'height': 0x3c
        }, {
            'src': a0_0x55ac9f(0x20a),
            'regX': 0x12,
            'regY': 0x14,
            'height': 0x3c
        }, {
            'src': a0_0x55ac9f(0x133),
            'regX': 0x12,
            'regY': 0x14,
            'height': 0x3c
        }],
        'pieceBottom': [{
            'src': a0_0x55ac9f(0x25e),
            'regX': 0x12,
            'regY': 0xa,
            'height': 0x3c
        }, {
            'src': a0_0x55ac9f(0x233),
            'regX': 0x12,
            'regY': 0xa,
            'height': 0x3c
        }, {
            'src': 'assets/chess_03_c_b.png',
            'regX': 0x12,
            'regY': 0xa,
            'height': 0x3c
        }, {
            'src': 'assets/chess_03_d_b.png',
            'regX': 0x12,
            'regY': 0xa,
            'height': 0x3c
        }, {
            'src': a0_0x55ac9f(0xac),
            'regX': 0x12,
            'regY': 0xa,
            'height': 0x3c
        }, {
            'src': a0_0x55ac9f(0x277),
            'regX': 0x12,
            'regY': 0xa,
            'height': 0x3c
        }]
    }, {
        'boards': ['assets/board_04_a.png', a0_0x55ac9f(0x1d4)],
        'colors': [a0_0x55ac9f(0x1b2), a0_0x55ac9f(0x89), a0_0x55ac9f(0x1e7), a0_0x55ac9f(0x283), a0_0x55ac9f(0xbb), a0_0x55ac9f(0xe3)],
        'hole': a0_0x55ac9f(0x94),
        'holeHighlight': a0_0x55ac9f(0x1e6),
        'dice': a0_0x55ac9f(0xc5),
        'diceHighlight': a0_0x55ac9f(0xf8),
        'pieceTop': [{
            'src': a0_0x55ac9f(0x198),
            'regX': 0x12,
            'regY': 0x14,
            'height': 0x28
        }, {
            'src': a0_0x55ac9f(0x145),
            'regX': 0x12,
            'regY': 0x14,
            'height': 0x28
        }, {
            'src': 'assets/chess_04_c.png',
            'regX': 0x12,
            'regY': 0x14,
            'height': 0x28
        }, {
            'src': 'assets/chess_04_d.png',
            'regX': 0x12,
            'regY': 0x14,
            'height': 0x28
        }, {
            'src': a0_0x55ac9f(0x118),
            'regX': 0x12,
            'regY': 0x14,
            'height': 0x28
        }, {
            'src': 'assets/chess_04_f.png',
            'regX': 0x12,
            'regY': 0x14,
            'height': 0x28
        }],
        'pieceBottom': [{
            'src': 'assets/chess_04_a_b.png',
            'regX': 0x12,
            'regY': 0xa,
            'height': 0x32
        }, {
            'src': 'assets/chess_04_b_b.png',
            'regX': 0x12,
            'regY': 0xa,
            'height': 0x32
        }, {
            'src': a0_0x55ac9f(0x245),
            'regX': 0x12,
            'regY': 0xa,
            'height': 0x32
        }, {
            'src': a0_0x55ac9f(0x105),
            'regX': 0x12,
            'regY': 0xa,
            'height': 0x32
        }, {
            'src': a0_0x55ac9f(0x281),
            'regX': 0x12,
            'regY': 0xa,
            'height': 0x32
        }, {
            'src': a0_0x55ac9f(0x1d9),
            'regX': 0x12,
            'regY': 0xa,
            'height': 0x32
        }]
    }, {
        'boards': [a0_0x55ac9f(0x1bf), a0_0x55ac9f(0x23e)],
        'colors': [a0_0x55ac9f(0x1b2), a0_0x55ac9f(0x89), 'YELLOW', a0_0x55ac9f(0x97), 'WHITE', a0_0x55ac9f(0xe3)],
        'hole': a0_0x55ac9f(0x225),
        'holeHighlight': a0_0x55ac9f(0x265),
        'dice': a0_0x55ac9f(0x195),
        'diceHighlight': a0_0x55ac9f(0x1b4),
        'pieceTop': [{
            'src': 'assets/chess_05_a.png',
            'regX': 0x12,
            'regY': 0xa,
            'height': 0x28
        }, {
            'src': 'assets/chess_05_b.png',
            'regX': 0x12,
            'regY': 0xa,
            'height': 0x28
        }, {
            'src': a0_0x55ac9f(0x27d),
            'regX': 0x12,
            'regY': 0xa,
            'height': 0x28
        }, {
            'src': a0_0x55ac9f(0x165),
            'regX': 0x12,
            'regY': 0xa,
            'height': 0x28
        }, {
            'src': a0_0x55ac9f(0xb3),
            'regX': 0x12,
            'regY': 0xa,
            'height': 0x28
        }, {
            'src': a0_0x55ac9f(0x125),
            'regX': 0x12,
            'regY': 0xa,
            'height': 0x28
        }],
        'pieceBottom': [{
            'src': 'assets/chess_05_a_b.png',
            'regX': 0x12,
            'regY': 0xa,
            'height': 0x32
        }, {
            'src': a0_0x55ac9f(0x286),
            'regX': 0x12,
            'regY': 0xa,
            'height': 0x32
        }, {
            'src': a0_0x55ac9f(0x1e2),
            'regX': 0x12,
            'regY': 0xa,
            'height': 0x32
        }, {
            'src': a0_0x55ac9f(0x179),
            'regX': 0x12,
            'regY': 0xa,
            'height': 0x32
        }, {
            'src': a0_0x55ac9f(0x126),
            'regX': 0x12,
            'regY': 0xa,
            'height': 0x32
        }, {
            'src': a0_0x55ac9f(0x11e),
            'regX': 0x12,
            'regY': 0xa,
            'height': 0x32
        }]
    }],
    gameSettings = {
        'showColorAnimation': !![],
        'showColorTime': 0x1,
        'showColorPickSpeed': 0x1,
        'showColorDownSpeed': 0.5,
        'autoRollDice': ![],
        'nextPlayer': ![],
        'aiThinkSpeed': 0x1,
        'pickSpeed': 0.2,
        'pickDelay': 0.5,
        'backDownSpeed': 0.2,
        'correctSpeed': 0.2,
        'autoEnd': !![]
    },
    textStrings = {
        'optionsTitle': a0_0x55ac9f(0x23d),
        'tutorialTitle': a0_0x55ac9f(0x99),
        'totalPlayers': a0_0x55ac9f(0x95),
        'totalPieces': '[NUMBER]\x20PIECES',
        'vs': ['VS\x20COMPUTER', 'VS\x20PLAYER'],
        'modes': [a0_0x55ac9f(0xd2), a0_0x55ac9f(0x10f), '6\x20PIECES\x20COLORS\x20WIN'],
        'instruction1': a0_0x55ac9f(0x1b5),
        'instruction2': a0_0x55ac9f(0x222),
        'playerName': a0_0x55ac9f(0x166),
        'scoreType': ['PIECES', a0_0x55ac9f(0x214), 'COLORS'],
        'userTurn': a0_0x55ac9f(0x213),
        'playerTurn': a0_0x55ac9f(0x21f),
        'gameOver': a0_0x55ac9f(0x1fe),
        'youWin': a0_0x55ac9f(0x280),
        'playerWin': a0_0x55ac9f(0x16b),
        'gameDraw': a0_0x55ac9f(0x132),
        'noPlayerWin': a0_0x55ac9f(0x178),
        'winRules': [a0_0x55ac9f(0x1e1), a0_0x55ac9f(0x13d), a0_0x55ac9f(0xef)],
        'exitTitle': 'EXIT\x20GAME',
        'exitMessage': a0_0x55ac9f(0x110),
        'share': a0_0x55ac9f(0xae),
        'resultTitle': a0_0x55ac9f(0x27f),
        'resultDesc': '[NUMBER]\x20PIECES'
    },
    shareSettings = {
        'enable': !![],
        'options': ['facebook', a0_0x55ac9f(0x139), a0_0x55ac9f(0x224), 'telegram', a0_0x55ac9f(0x19f), a0_0x55ac9f(0x15e)],
        'shareTitle': a0_0x55ac9f(0x173),
        'shareText': a0_0x55ac9f(0x235),
        'customScore': !![],
        'gtag': !![]
    };
$[a0_0x55ac9f(0x18d)] = {
    'enable': ![]
};

function a0_0x5853(_0x136739, _0x35018e) {
    var _0x1e695f = a0_0x1e69();
    return a0_0x5853 = function(_0x585312, _0x5d87e4) {
        _0x585312 = _0x585312 - 0x7c;
        var _0x5d9a42 = _0x1e695f[_0x585312];
        return _0x5d9a42;
    }, a0_0x5853(_0x136739, _0x35018e);
}
const playerData = {
        'score': 0x0,
        'scores': [],
        'colors': []
    },
    gameData = {
        'paused': !![],
        'player': 0x0,
        'lastPlayer': 0x0,
        'players': 0x0,
        'themeIndex': 0x0,
        'sizeIndex': 0x0,
        'ai': !![],
        'complete': ![],
        'names': [],
        'reveals': []
    },
    tweenData = {
        'score': 0x0,
        'tweenScore': 0x0
    },
    animateData = {
        'alpha': 0x0
    };

function buildGameButton() {
    var _0x64dd51 = a0_0x55ac9f;
    $(window)[_0x64dd51(0x1a3)](function() {
        var _0xda847f = _0x64dd51;
        !buttonSoundOn[_0xda847f(0x1fb)] && toggleSoundInMute(![]), typeof buttonMusicOn != _0xda847f(0x22b) && (!buttonMusicOn[_0xda847f(0x1fb)] && toggleMusicInMute(![]));
    }), $(window)[_0x64dd51(0x278)](function() {
        !buttonSoundOn['visible'] && toggleSoundInMute(!![]), typeof buttonMusicOn != 'undefined' && (!buttonMusicOn['visible'] && toggleMusicInMute(!![]));
    });
    audioOn && (muteSoundOn && toggleSoundMute(!![]), muteMusicOn && toggleMusicMute(!![]));
    buttonPlay[_0x64dd51(0x18e)] = _0x64dd51(0x25c), buttonPlay[_0x64dd51(0x20e)](_0x64dd51(0x261), function(_0xfc26ec) {
        var _0x3bf8b3 = _0x64dd51;
        playSound(_0x3bf8b3(0x252)), typeof initSocket == _0x3bf8b3(0x103) && multiplayerSettings['enable'] ? multiplayerSettings[_0x3bf8b3(0x11f)] ? toggleMainButton(_0x3bf8b3(0x189)) : checkQuickGameMode() : goPage(_0x3bf8b3(0x9f));
    }), buttonLocal[_0x64dd51(0x18e)] = _0x64dd51(0x25c), buttonLocal[_0x64dd51(0x20e)](_0x64dd51(0x261), function(_0x1c62e8) {
        var _0x379f22 = _0x64dd51;
        playSound('soundButton'), socketData[_0x379f22(0x136)] = ![], goPage(_0x379f22(0x9f));
    }), buttonOnline[_0x64dd51(0x18e)] = _0x64dd51(0x25c), buttonOnline[_0x64dd51(0x20e)](_0x64dd51(0x261), function(_0x5a0315) {
        var _0x4224b6 = _0x64dd51;
        playSound(_0x4224b6(0x252)), checkQuickGameMode();
    }), buttonPlayersL[_0x64dd51(0x18e)] = _0x64dd51(0x25c), buttonPlayersL[_0x64dd51(0x20e)](_0x64dd51(0x261), function(_0x1f4524) {
        var _0x513e0f = _0x64dd51;
        playSound(_0x513e0f(0x252)), toggleTotalPlayers(![]);
    }), buttonPlayersR[_0x64dd51(0x18e)] = _0x64dd51(0x25c), buttonPlayersR[_0x64dd51(0x20e)]('click', function(_0x13fa4b) {
        var _0x47c543 = _0x64dd51;
        playSound(_0x47c543(0x252)), toggleTotalPlayers(!![]);
    }), buttonVSL[_0x64dd51(0x18e)] = _0x64dd51(0x25c), buttonVSL[_0x64dd51(0x20e)](_0x64dd51(0x261), function(_0x501c6f) {
        playSound('soundButton'), toggleAI(!![]);
    }), buttonVSR[_0x64dd51(0x18e)] = _0x64dd51(0x25c), buttonVSR[_0x64dd51(0x20e)](_0x64dd51(0x261), function(_0x51777c) {
        var _0x42c3ad = _0x64dd51;
        playSound(_0x42c3ad(0x252)), toggleAI(![]);
    }), buttonBeadsL[_0x64dd51(0x18e)] = 'pointer', buttonBeadsL[_0x64dd51(0x20e)](_0x64dd51(0x261), function(_0x2e9e64) {
        playSound('soundButton'), toggleBeads(![]);
    }), buttonBeadsR[_0x64dd51(0x18e)] = _0x64dd51(0x25c), buttonBeadsR[_0x64dd51(0x20e)](_0x64dd51(0x261), function(_0x4dc444) {
        var _0x1040c2 = _0x64dd51;
        playSound(_0x1040c2(0x252)), toggleBeads(!![]);
    }), buttonTypeL[_0x64dd51(0x18e)] = _0x64dd51(0x25c), buttonTypeL[_0x64dd51(0x20e)]('click', function(_0x5dcf56) {
        var _0x180d27 = _0x64dd51;
        playSound(_0x180d27(0x252)), toggleGameType(![]);
    }), buttonTypeR['cursor'] = _0x64dd51(0x25c), buttonTypeR[_0x64dd51(0x20e)](_0x64dd51(0x261), function(_0x4d0383) {
        var _0x4f75f0 = _0x64dd51;
        playSound(_0x4f75f0(0x252)), toggleGameType(!![]);
    }), buttonThemeL[_0x64dd51(0x18e)] = _0x64dd51(0x25c), buttonThemeL[_0x64dd51(0x20e)](_0x64dd51(0x261), function(_0x10276b) {
        var _0x2116e6 = _0x64dd51;
        playSound(_0x2116e6(0x252)), toggleTheme(![]);
    }), buttonThemeR['cursor'] = _0x64dd51(0x25c), buttonThemeR[_0x64dd51(0x20e)]('click', function(_0x9a3611) {
        var _0xfac2e9 = _0x64dd51;
        playSound(_0xfac2e9(0x252)), toggleTheme(!![]);
    }), buttonTutorialL[_0x64dd51(0x18e)] = _0x64dd51(0x25c), buttonTutorialL[_0x64dd51(0x20e)](_0x64dd51(0x261), function(_0x541a76) {
        var _0x1e2b49 = _0x64dd51;
        playSound(_0x1e2b49(0x252)), toggleTutorial(![]);
    }), buttonTutorialR[_0x64dd51(0x18e)] = 'pointer', buttonTutorialR[_0x64dd51(0x20e)](_0x64dd51(0x261), function(_0x422d28) {
        var _0xc39221 = _0x64dd51;
        playSound(_0xc39221(0x252)), toggleTutorial(!![]);
    }), buttonNext['cursor'] = _0x64dd51(0x25c), buttonNext['addEventListener'](_0x64dd51(0x261), function(_0xaf0bc8) {
        var _0x14ced6 = _0x64dd51;
        playSound(_0x14ced6(0x252)), toggleBoardOptions(0x2);
    }), buttonTutorial[_0x64dd51(0x18e)] = 'pointer', buttonTutorial[_0x64dd51(0x20e)]('click', function(_0x5ca42f) {
        var _0x2f1f2d = _0x64dd51;
        playSound(_0x2f1f2d(0x252)), toggleBoardOptions(0x3);
    }), buttonBack['cursor'] = 'pointer', buttonBack['addEventListener'](_0x64dd51(0x261), function(_0x59e327) {
        var _0x4c4cb1 = _0x64dd51;
        playSound(_0x4c4cb1(0x252)), toggleBoardOptions(gameData[_0x4c4cb1(0xad)]);
    }), buttonStart['cursor'] = _0x64dd51(0x25c), buttonStart['addEventListener'](_0x64dd51(0x261), function(_0x2d97ae) {
        var _0x2dfcf5 = _0x64dd51;
        playSound('soundButton'), typeof initSocket == _0x2dfcf5(0x103) && multiplayerSettings[_0x2dfcf5(0xb9)] && socketData[_0x2dfcf5(0x136)] ? postSocketUpdate(_0x2dfcf5(0x1c9)) : goPage(_0x2dfcf5(0x1ca));
    }), itemExit['addEventListener']('click', function(_0x48ad96) {});
    if (shareSettings[_0x64dd51(0xb9)]) {
        buttonShare[_0x64dd51(0x18e)] = 'pointer', buttonShare[_0x64dd51(0x20e)](_0x64dd51(0x261), function(_0x5493e4) {
            playSound('soundButton'), toggleSocialShare(!![]);
        });
        for (let _0x5a4c5c = 0x0; _0x5a4c5c < shareSettings[_0x64dd51(0x9f)][_0x64dd51(0x7d)]; _0x5a4c5c++) {
            $[_0x64dd51(0x1de)][_0x64dd51(0x1a9) + _0x5a4c5c][_0x64dd51(0x18e)] = _0x64dd51(0x25c), $[_0x64dd51(0x1de)]['button' + _0x5a4c5c]['addEventListener']('click', function(_0x5acc96) {
                var _0xb93ac8 = _0x64dd51;
                shareLinks(_0x5acc96[_0xb93ac8(0x202)][_0xb93ac8(0xd0)], addCommas(playerData[_0xb93ac8(0xbe)]));
            });
        }
    }
    buttonContinue[_0x64dd51(0x18e)] = _0x64dd51(0x25c), buttonContinue[_0x64dd51(0x20e)](_0x64dd51(0x261), function(_0x293066) {
        var _0x1a487b = _0x64dd51;
        playSound(_0x1a487b(0x252)), typeof initSocket == _0x1a487b(0x103) && multiplayerSettings[_0x1a487b(0xb9)] && socketData[_0x1a487b(0x136)] && multiplayerSettings[_0x1a487b(0x2a5)] ? (goPage(_0x1a487b(0xa6)), $(_0x1a487b(0x25d))[_0x1a487b(0xea)](socketData[_0x1a487b(0x285)]), joinSocketRoom()) : goPage(_0x1a487b(0x1e5));
    }), buttonSoundOff[_0x64dd51(0x18e)] = _0x64dd51(0x25c), buttonSoundOff[_0x64dd51(0x20e)](_0x64dd51(0x261), function(_0x30cbce) {
        toggleSoundMute(!![]);
    }), buttonSoundOn[_0x64dd51(0x18e)] = _0x64dd51(0x25c), buttonSoundOn[_0x64dd51(0x20e)]('click', function(_0x4667b7) {
        toggleSoundMute(![]);
    }), typeof buttonMusicOff != _0x64dd51(0x22b) && (buttonMusicOff['cursor'] = _0x64dd51(0x25c), buttonMusicOff['addEventListener'](_0x64dd51(0x261), function(_0x4805b1) {
        toggleMusicMute(!![]);
    })), typeof buttonMusicOn != 'undefined' && (buttonMusicOn['cursor'] = _0x64dd51(0x25c), buttonMusicOn[_0x64dd51(0x20e)](_0x64dd51(0x261), function(_0x1d0880) {
        toggleMusicMute(![]);
    })), buttonFullscreen[_0x64dd51(0x18e)] = 'pointer', buttonFullscreen[_0x64dd51(0x20e)](_0x64dd51(0x261), function(_0xfe7b50) {
        toggleFullScreen();
    }), buttonExit[_0x64dd51(0x18e)] = 'pointer', buttonExit[_0x64dd51(0x20e)](_0x64dd51(0x261), function(_0x11b7f0) {
        togglePop(!![]), toggleOptions();
    }), buttonSettings[_0x64dd51(0x18e)] = _0x64dd51(0x25c), buttonSettings[_0x64dd51(0x20e)]('click', function(_0x3ad110) {
        toggleOptions();
    }), buttonConfirm[_0x64dd51(0x18e)] = _0x64dd51(0x25c), buttonConfirm['addEventListener'](_0x64dd51(0x261), function(_0x5642a3) {
        var _0x58d830 = _0x64dd51;
        playSound(_0x58d830(0x252)), togglePop(![]), stopSound();;
        stopGame(), goPage(_0x58d830(0x1e5)), typeof initSocket == _0x58d830(0x103) && multiplayerSettings[_0x58d830(0xb9)] && socketData[_0x58d830(0x136)] && exitSocketRoom();
    }), buttonCancel[_0x64dd51(0x18e)] = _0x64dd51(0x25c), buttonCancel[_0x64dd51(0x20e)](_0x64dd51(0x261), function(_0x50776d) {
        playSound('soundButton'), togglePop(![]);
    }), window[_0x64dd51(0x20e)](_0x64dd51(0x278), function() {
        var _0x42e849 = _0x64dd51;
        TweenMax[_0x42e849(0x2a8)][_0x42e849(0xeb)](![]);
    }, ![]), window['addEventListener'](_0x64dd51(0x1a3), function() {
        var _0x24e803 = _0x64dd51;
        TweenMax[_0x24e803(0x2a8)][_0x24e803(0xeb)](!![]);
    }, ![]), gameData[_0x64dd51(0x158)] = {
        'sizes': [0x18, 0x28],
        'maxPlayers': 0x6,
        'minPlayers': 0x2,
        'winMode': 0x0
    }, gameData[_0x64dd51(0x220)] = gameData[_0x64dd51(0x158)][_0x64dd51(0x1cd)], gameData[_0x64dd51(0x14e)] = 0x0, gameData[_0x64dd51(0xda)] = 0x0, gameData[_0x64dd51(0x129)] = -0x1, gameData[_0x64dd51(0x9a)] = 0x0, gameData[_0x64dd51(0xad)] = 0x1, gameData[_0x64dd51(0x21b)] = 0x1, displayBoardOptions();
}

function toggleMainButton(_0x395ee5) {
    var _0x2ba02e = a0_0x55ac9f;
    typeof initSocket == 'function' && multiplayerSettings[_0x2ba02e(0xb9)] && (gameLogsTxt[_0x2ba02e(0x1fb)] = !![], gameLogsTxt[_0x2ba02e(0x92)] = '');
    buttonPlay[_0x2ba02e(0x1fb)] = ![], buttonLocalContainer[_0x2ba02e(0x1fb)] = ![];
    if (_0x395ee5 == 'default') buttonPlay[_0x2ba02e(0x1fb)] = !![];
    else _0x395ee5 == _0x2ba02e(0x189) && (buttonLocalContainer[_0x2ba02e(0x1fb)] = !![]);
}

function checkQuickGameMode() {
    var _0x834f98 = a0_0x55ac9f;
    socketData[_0x834f98(0x136)] = !![], !multiplayerSettings[_0x834f98(0xe4)] ? (buttonPlay['visible'] = ![], buttonLocalContainer[_0x834f98(0x1fb)] = ![], addSocketRandomUser()) : goPage(_0x834f98(0x227));
}

function toggleTotalPlayers(_0x5820ef) {
    var _0x1fdb0c = a0_0x55ac9f;
    _0x5820ef ? (gameData[_0x1fdb0c(0x220)]++, gameData['players'] = gameData[_0x1fdb0c(0x220)] > gameData['memorychess']['maxPlayers'] ? gameData[_0x1fdb0c(0x158)][_0x1fdb0c(0x291)] : gameData[_0x1fdb0c(0x220)]) : (gameData[_0x1fdb0c(0x220)]--, gameData['players'] = gameData[_0x1fdb0c(0x220)] < gameData[_0x1fdb0c(0x158)][_0x1fdb0c(0x1cd)] ? gameData[_0x1fdb0c(0x158)]['minPlayers'] : gameData[_0x1fdb0c(0x220)]), updateCardsOption();
}

function toggleBeads(_0x28bfb2) {
    var _0x393509 = a0_0x55ac9f;
    _0x28bfb2 ? (gameData['sizeIndex']++, gameData[_0x393509(0x14e)] = gameData['sizeIndex'] > gameData[_0x393509(0x158)][_0x393509(0x17b)][_0x393509(0x7d)] - 0x1 ? gameData['memorychess']['sizes']['length'] - 0x1 : gameData[_0x393509(0x14e)]) : (gameData[_0x393509(0x14e)]--, gameData[_0x393509(0x14e)] = gameData[_0x393509(0x14e)] < 0x0 ? 0x0 : gameData[_0x393509(0x14e)]), updateCardsOption();
}

function toggleAI(_0x245dac) {
    gameData['ai'] = _0x245dac, updateCardsOption();
}

function toggleGameType(_0x23f1ed) {
    var _0x9957cd = a0_0x55ac9f;
    _0x23f1ed ? (gameData['winMode']++, gameData[_0x9957cd(0x9a)] = gameData[_0x9957cd(0x9a)] > 0x2 ? 0x2 : gameData[_0x9957cd(0x9a)]) : (gameData['winMode']--, gameData[_0x9957cd(0x9a)] = gameData[_0x9957cd(0x9a)] < 0x0 ? 0x0 : gameData['winMode']), updateCardsOption();
}

function toggleTheme(_0x5e0682) {
    var _0x548ca3 = a0_0x55ac9f;
    _0x5e0682 ? (gameData['themeIndex']++, gameData['themeIndex'] = gameData['themeIndex'] > themesSettings[_0x548ca3(0x7d)] - 0x1 ? themesSettings[_0x548ca3(0x7d)] - 0x1 : gameData[_0x548ca3(0xda)]) : (gameData['themeIndex']--, gameData[_0x548ca3(0xda)] = gameData[_0x548ca3(0xda)] < 0x0 ? 0x0 : gameData[_0x548ca3(0xda)]), updateCardsOption();
}

function updateCardsOption() {
    var _0x51e54b = a0_0x55ac9f;
    displayBoardOptions(), typeof initSocket == _0x51e54b(0x103) && multiplayerSettings[_0x51e54b(0xb9)] && socketData[_0x51e54b(0x136)] && (socketData[_0x51e54b(0x115)] && postSocketUpdate(_0x51e54b(0x174), {
        'sizeIndex': gameData[_0x51e54b(0x14e)],
        'winMode': gameData[_0x51e54b(0x9a)],
        'themeIndex': gameData[_0x51e54b(0xda)],
        'option': gameData[_0x51e54b(0xad)]
    }, !![]));
}

function displayBoardOptions() {
    var _0x4ba78d = a0_0x55ac9f,
        _0x52941d = gameData[_0x4ba78d(0x158)]['sizes'][gameData[_0x4ba78d(0x14e)]];
    totalPlayersTxt[_0x4ba78d(0x92)] = textStrings['totalPlayers'][_0x4ba78d(0x177)](_0x4ba78d(0x26b), gameData[_0x4ba78d(0x220)]), vsModeTxt[_0x4ba78d(0x92)] = gameData['ai'] == !![] ? textStrings['vs'][0x0] : textStrings['vs'][0x1], beadsTxt[_0x4ba78d(0x92)] = textStrings[_0x4ba78d(0x230)][_0x4ba78d(0x177)](_0x4ba78d(0x26b), _0x52941d), typeTxt[_0x4ba78d(0x92)] = textStrings['modes'][gameData['winMode']];
    if (gameData['lastThemeIndex'] != gameData[_0x4ba78d(0xda)]) {
        gameData[_0x4ba78d(0x129)] = gameData[_0x4ba78d(0xda)], themeContainer[_0x4ba78d(0x87)]();
        var _0x488fb4 = [];
        for (var _0x40cf6c = 0x0; _0x40cf6c < themesSettings[gameData[_0x4ba78d(0xda)]]['pieceTop'][_0x4ba78d(0x7d)]; _0x40cf6c++) {
            _0x488fb4[_0x4ba78d(0xf2)](_0x40cf6c);
        }
        shuffle(_0x488fb4), _0x488fb4['length'] = _0x488fb4[_0x4ba78d(0x7d)] > 0x6 ? 0x6 : _0x488fb4['length'];
        var _0x4ac495 = 0x28,
            _0x439d09 = {
                'x': 0x0,
                'y': 0x0
            };
        _0x439d09['x'] = -((_0x4ac495 * _0x488fb4[_0x4ba78d(0x7d)] - 0x1) / 0x2), _0x439d09['x'] += _0x4ac495 / 0x2;
        for (var _0x20aced = 0x0; _0x20aced < _0x488fb4[_0x4ba78d(0x7d)]; _0x20aced++) {
            var _0x3bf562 = new createjs[(_0x4ba78d(0x102))](loader['getResult'](_0x4ba78d(0x193) + gameData[_0x4ba78d(0xda)] + '_' + _0x488fb4[_0x20aced]));
            centerReg(_0x3bf562), _0x3bf562[_0x4ba78d(0x197)] = _0x3bf562[_0x4ba78d(0x221)] = 0.7, _0x3bf562['x'] = _0x439d09['x'], _0x439d09['x'] += _0x4ac495, themeContainer[_0x4ba78d(0x15d)](_0x3bf562);
        }
    }
}

function toggleBoardOptions(_0xb32977) {
    var _0x291d64 = a0_0x55ac9f;
    itemPlayerNumbers['visible'] = ![], totalPlayersTxt['visible'] = ![], buttonPlayersL[_0x291d64(0x1fb)] = ![], buttonPlayersR[_0x291d64(0x1fb)] = ![], itemVS[_0x291d64(0x1fb)] = ![], vsModeTxt[_0x291d64(0x1fb)] = ![], buttonVSL[_0x291d64(0x1fb)] = ![], buttonVSR[_0x291d64(0x1fb)] = ![], itemPoints[_0x291d64(0x1fb)] = ![], beadsTxt[_0x291d64(0x1fb)] = ![], buttonBeadsL['visible'] = ![], buttonBeadsR['visible'] = ![], itemType[_0x291d64(0x1fb)] = ![], typeTxt[_0x291d64(0x1fb)] = ![], buttonTypeL[_0x291d64(0x1fb)] = ![], buttonTypeR[_0x291d64(0x1fb)] = ![], themeContainer[_0x291d64(0x1fb)] = ![], buttonThemeL[_0x291d64(0x1fb)] = ![], buttonThemeR['visible'] = ![], buttonNext[_0x291d64(0x1fb)] = ![], buttonStart['visible'] = ![], buttonTutorial[_0x291d64(0x1fb)] = ![], boardOptionsListContainer[_0x291d64(0x1fb)] = ![], buttonTutorialL['visible'] = ![], buttonTutorialR[_0x291d64(0x1fb)] = ![], buttonBack[_0x291d64(0x1fb)] = ![], boardOptionsTutorialContainer['visible'] = ![];
    if (_0xb32977 == 0x1) gameData['lastOption'] = 0x1, boardOptionsListContainer[_0x291d64(0x1fb)] = !![], itemPlayerNumbers['visible'] = !![], totalPlayersTxt[_0x291d64(0x1fb)] = !![], buttonPlayersL['visible'] = !![], buttonPlayersR[_0x291d64(0x1fb)] = !![], itemVS[_0x291d64(0x1fb)] = !![], vsModeTxt['visible'] = !![], buttonVSL[_0x291d64(0x1fb)] = !![], buttonVSR[_0x291d64(0x1fb)] = !![], buttonNext[_0x291d64(0x1fb)] = !![], buttonTutorial['visible'] = !![];
    else {
        if (_0xb32977 == 0x2) gameData[_0x291d64(0xad)] = 0x2, boardOptionsListContainer[_0x291d64(0x1fb)] = !![], itemType[_0x291d64(0x1fb)] = !![], typeTxt['visible'] = !![], buttonTypeL[_0x291d64(0x1fb)] = !![], buttonTypeR[_0x291d64(0x1fb)] = !![], itemPoints[_0x291d64(0x1fb)] = !![], beadsTxt[_0x291d64(0x1fb)] = !![], buttonBeadsL[_0x291d64(0x1fb)] = !![], buttonBeadsR[_0x291d64(0x1fb)] = !![], themeContainer[_0x291d64(0x1fb)] = !![], buttonThemeL['visible'] = !![], buttonThemeR[_0x291d64(0x1fb)] = !![], buttonStart[_0x291d64(0x1fb)] = !![], buttonTutorial[_0x291d64(0x1fb)] = !![], typeof initSocket == _0x291d64(0x103) && multiplayerSettings[_0x291d64(0xb9)] && socketData['online'] && (!socketData[_0x291d64(0x115)] && (buttonBeadsL['visible'] = ![], buttonBeadsR[_0x291d64(0x1fb)] = ![], buttonTypeL[_0x291d64(0x1fb)] = ![], buttonTypeR[_0x291d64(0x1fb)] = ![], buttonThemeL['visible'] = ![], buttonThemeR['visible'] = ![], buttonStart[_0x291d64(0x1fb)] = ![], buttonTutorial[_0x291d64(0x1fb)] = ![]));
        else _0xb32977 == 0x3 && (boardOptionsTutorialContainer[_0x291d64(0x1fb)] = !![], buttonTutorialL[_0x291d64(0x1fb)] = !![], buttonTutorialR['visible'] = !![], buttonBack[_0x291d64(0x1fb)] = !![], displayTutorial());
    }
    updateCardsOption(), resizeGameLayout();
}

function toggleTutorial(_0x1f30b5) {
    var _0x1ba075 = a0_0x55ac9f;
    _0x1f30b5 ? (gameData['tutorial']++, gameData['tutorial'] = gameData[_0x1ba075(0x21b)] > 0x6 ? 0x6 : gameData['tutorial']) : (gameData[_0x1ba075(0x21b)]--, gameData['tutorial'] = gameData[_0x1ba075(0x21b)] < 0x1 ? 0x1 : gameData[_0x1ba075(0x21b)]), displayTutorial();
}

function displayTutorial() {
    var _0x5d2279 = a0_0x55ac9f;
    for (var _0x54e6c5 = 0x0; _0x54e6c5 < 0x6; _0x54e6c5++) {
        $['tutorial'][_0x54e6c5][_0x5d2279(0x1fb)] = ![];
    }
    $[_0x5d2279(0x21b)][gameData[_0x5d2279(0x21b)] - 0x1][_0x5d2279(0x1fb)] = !![], tutorialPageTxt['text'] = gameData['tutorial'] + '/6', buttonTutorialL['visible'] = !![], buttonTutorialR['visible'] = !![], gameData[_0x5d2279(0x21b)] == 0x1 && (buttonTutorialL['visible'] = ![]), gameData[_0x5d2279(0x21b)] == 0x6 && (buttonTutorialR[_0x5d2279(0x1fb)] = ![]);
}

function resizeSocketLog() {
    var _0x51d871 = a0_0x55ac9f;
    if (curPage == 'main') viewport[_0x51d871(0x1c4)] ? (gameLogsTxt['x'] = canvasW / 0x2, gameLogsTxt['y'] = canvasH / 0x64 * 0x4b) : (gameLogsTxt['x'] = canvasW / 0x2, gameLogsTxt['y'] = canvasH / 0x64 * 0x4b);
    else curPage == _0x51d871(0x9f) && (viewport[_0x51d871(0x1c4)] ? (gameLogsTxt['x'] = canvasW / 0x2, gameLogsTxt['y'] = canvasH / 0x64 * 0x43) : (gameLogsTxt['x'] = canvasW / 0x2, gameLogsTxt['y'] = canvasH / 0x64 * 0x41));
}

function toggleSocialShare(_0x4dc7b1) {
    var _0x56f137 = a0_0x55ac9f;
    if (!shareSettings[_0x56f137(0xb9)]) return;
    buttonShare[_0x56f137(0x1fb)] = _0x4dc7b1 == !![] ? ![] : !![], shareSaveContainer['visible'] = _0x4dc7b1 == !![] ? ![] : !![], socialContainer['visible'] = _0x4dc7b1, _0x4dc7b1 && (typeof buttonSave !== 'undefined' && TweenMax['to'](buttonShare, 0x3, {
        'overwrite': !![],
        'onComplete': toggleSocialShare,
        'onCompleteParams': [![]]
    }));
}

function positionShareButtons() {
    var _0x32f35f = a0_0x55ac9f;
    if (!shareSettings[_0x32f35f(0xb9)]) return;
    typeof buttonShare !== _0x32f35f(0x22b) && (typeof buttonSave !== _0x32f35f(0x22b) && (buttonSave[_0x32f35f(0x1fb)] ? (buttonShare['x'] = -(buttonShare[_0x32f35f(0x1bb)][_0x32f35f(0x8e)] / 0x2 + 0x5), buttonSave['x'] = buttonShare[_0x32f35f(0x1bb)]['naturalWidth'] / 0x2 + 0x5) : buttonShare['x'] = 0x0));
}

function togglePop(_0x47d226) {
    var _0x57363f = a0_0x55ac9f;
    exitContainer[_0x57363f(0x1fb)] = _0x47d226, typeof initSocket == _0x57363f(0x103) && multiplayerSettings[_0x57363f(0xb9)] && socketData['online'] && ((curPage == _0x57363f(0x227) || curPage == 'room') && (_0x47d226 ? $('#roomWrapper')[_0x57363f(0x290)]() : $('#roomWrapper')[_0x57363f(0xb8)]()));
}
var curPage = '';

function goPage(_0x4c0747) {
    var _0x3f8c49 = a0_0x55ac9f;
    curPage = _0x4c0747, $(_0x3f8c49(0x1d5))[_0x3f8c49(0x290)](), $(_0x3f8c49(0x162))[_0x3f8c49(0x290)](), gameLogsTxt[_0x3f8c49(0x1fb)] = ![], mainContainer[_0x3f8c49(0x1fb)] = ![], nameContainer['visible'] = ![], roomContainer['visible'] = ![], boardOptionsContainer[_0x3f8c49(0x1fb)] = ![], gameContainer['visible'] = ![], resultContainer[_0x3f8c49(0x1fb)] = ![], togglePop(![]), toggleOptions(![]);
    var _0x1a717b = null;
    switch (_0x4c0747) {
        case _0x3f8c49(0x1e5):
            _0x1a717b = mainContainer;
            typeof initSocket == _0x3f8c49(0x103) && multiplayerSettings[_0x3f8c49(0xb9)] && (socketData['online'] = ![]);
            toggleMainButton(_0x3f8c49(0xb2)), playMusicLoop(_0x3f8c49(0x27c)), stopMusicLoop(_0x3f8c49(0x1ef));
            break;
        case _0x3f8c49(0x227):
            _0x1a717b = nameContainer, $(_0x3f8c49(0x1d5))[_0x3f8c49(0xb8)](), $(_0x3f8c49(0x276))[_0x3f8c49(0xb8)](), $(_0x3f8c49(0x23a))[_0x3f8c49(0x180)](''), $(_0x3f8c49(0x28c))[_0x3f8c49(0xb8)]();
            break;
        case 'room':
            _0x1a717b = roomContainer, $(_0x3f8c49(0x1d5))[_0x3f8c49(0xb8)](), $('#roomWrapper\x20.roomContent')[_0x3f8c49(0xb8)](), switchSocketRoomContent(_0x3f8c49(0x29e));
            break;
        case _0x3f8c49(0x9f):
            _0x1a717b = boardOptionsContainer, gameData[_0x3f8c49(0x14e)] = 0x0, gameData[_0x3f8c49(0x9a)] = 0x0, gameData[_0x3f8c49(0xda)] = 0x0;
            typeof initSocket == _0x3f8c49(0x103) && multiplayerSettings[_0x3f8c49(0xb9)] && socketData[_0x3f8c49(0x136)] ? (gameData['ai'] = ![], toggleBoardOptions(0x2)) : (gameData['ai'] = !![], toggleBoardOptions(0x1));
            break;
        case _0x3f8c49(0x1ca):
            _0x1a717b = gameContainer, playMusicLoop(_0x3f8c49(0x1ef)), stopMusicLoop(_0x3f8c49(0x27c)), startGame();
            break;
        case _0x3f8c49(0x2a7):
            _0x1a717b = resultContainer, stopGame(), toggleSocialShare(![]), playMusicLoop(_0x3f8c49(0x27c)), stopMusicLoop('musicGame'), playSound(_0x3f8c49(0x1a0)), tweenData['tweenScore'] = 0x0;
            typeof initSocket == _0x3f8c49(0x103) && multiplayerSettings['enable'] && socketData[_0x3f8c49(0x136)] ? (playerData[_0x3f8c49(0xbe)] = playerData[_0x3f8c49(0x243)][socketData['gameIndex']], socketData['host'] ? postSocketCloseRoom() : exitSocketRoom()) : playerData[_0x3f8c49(0xbe)] = playerData[_0x3f8c49(0x243)][0x0];
            tweenData[_0x3f8c49(0xd1)] = 0x0, TweenMax['to'](tweenData, 0.5, {
                'tweenScore': playerData[_0x3f8c49(0xbe)],
                'overwrite': !![],
                'onUpdate': function() {
                    var _0x376f2d = _0x3f8c49;
                    resultDescTxt['text'] = textStrings[_0x376f2d(0xde)][_0x376f2d(0x177)](_0x376f2d(0x26b), addCommas(Math[_0x376f2d(0x1fa)](tweenData[_0x376f2d(0xd1)])));
                }
            }), saveGame(playerData[_0x3f8c49(0xbe)]);
            break;
    }
    _0x1a717b != null && (_0x1a717b[_0x3f8c49(0x1fb)] = !![], _0x1a717b[_0x3f8c49(0x1ba)] = 0x0, TweenMax['to'](_0x1a717b, 0.5, {
        'alpha': 0x1,
        'overwrite': !![]
    })), resizeCanvas();
}

function startGame() {
    var _0x4e4d54 = a0_0x55ac9f;
    gameData[_0x4e4d54(0x160)] = ![], gameData[_0x4e4d54(0xe2)] = ![], gameData[_0x4e4d54(0x1cf)] = ![], gameData[_0x4e4d54(0x22f)] = [], gameData[_0x4e4d54(0x9d)] = ![], gameData['player'] = 0x0, gameData[_0x4e4d54(0x232)] = -0x1, gameData[_0x4e4d54(0x13a)] = 0x0, gameData[_0x4e4d54(0xd8)] = ![], gameData[_0x4e4d54(0x168)] = {
        'size': gameData['memorychess'][_0x4e4d54(0x17b)][gameData['sizeIndex']],
        'winMode': gameData[_0x4e4d54(0x9a)]
    }, playerData[_0x4e4d54(0x243)] = [];
    for (var _0x1fc742 = 0x0; _0x1fc742 < gameData[_0x4e4d54(0x220)]; _0x1fc742++) {
        playerData[_0x4e4d54(0x243)][_0x4e4d54(0xf2)](0x0);
    }
    playerData['colors'] = [];
    for (var _0x1fc742 = 0x0; _0x1fc742 < gameData[_0x4e4d54(0x220)]; _0x1fc742++) {
        var _0x364c0a = [];
        for (var _0x594a51 = 0x0; _0x594a51 < 0x6; _0x594a51++) {
            _0x364c0a[_0x4e4d54(0xf2)](0x0);
        }
        playerData[_0x4e4d54(0x143)][_0x4e4d54(0xf2)](_0x364c0a);
    }
    statusContainer[_0x4e4d54(0x1ba)] = 0x0, instructionContainer['alpha'] = 0x0, animateBlink(animateData), buildBoard(), showDice(), playSound(_0x4e4d54(0x275));
    if (typeof initSocket == _0x4e4d54(0x103) && multiplayerSettings['enable'] && socketData[_0x4e4d54(0x136)]) {
        var _0x1cdfe0 = socketData[_0x4e4d54(0x1bc)];
        for (var _0x1fc742 = 0x0; _0x1fc742 < gameData[_0x4e4d54(0x220)]; _0x1fc742++) {
            gameData[_0x4e4d54(0x22f)][_0x4e4d54(0xf2)](_0x1cdfe0), _0x1cdfe0++, _0x1cdfe0 = _0x1cdfe0 > gameData['players'] - 0x1 ? 0x0 : _0x1cdfe0;
        }
        postSocketUpdate('ready', socketData[_0x4e4d54(0x1bc)]);
    } else {
        for (var _0x1fc742 = 0x0; _0x1fc742 < gameData[_0x4e4d54(0x220)]; _0x1fc742++) {
            gameData[_0x4e4d54(0x22f)]['push'](_0x1fc742);
        }
        setupChess();
    }
}

function startBoard() {
    var _0x5e21bb = a0_0x55ac9f;
    gameData[_0x5e21bb(0x11d)] = 0x0, showInstruction(0x1), displayPlayerTurn();
}

function stopGame() {
    var _0x1095f1 = a0_0x55ac9f;
    gameData[_0x1095f1(0x160)] = !![], TweenMax[_0x1095f1(0x1a5)](![], !![], ![]);
}

function saveGame(_0x17a5bc) {
    var _0x17ac2e = a0_0x55ac9f;
    typeof toggleScoreboardSave == 'function' && ($[_0x17ac2e(0x28b)][_0x17ac2e(0xbe)] = _0x17a5bc, typeof type != _0x17ac2e(0x22b) && ($[_0x17ac2e(0x28b)][_0x17ac2e(0x12c)] = type), toggleScoreboardSave(!![]));
}

function resizeGameLayout() {
    var _0xefc5e2 = a0_0x55ac9f;
    if (curPage == _0xefc5e2(0x1ca)) {
        statusContainer['x'] = canvasW / 0x2, statusContainer['y'] = canvasH / 0x2, instructionContainer['x'] = canvasW / 0x2, instructionContainer['y'] = canvasH / 0x64 * 0x41, boardContainer['x'] = canvasW / 0x2, boardContainer['y'] = canvasH / 0x64 * 0x2d, boardContainer[_0xefc5e2(0x197)] = boardContainer[_0xefc5e2(0x221)] = 0x1, boardContainer[_0xefc5e2(0x282)] = 0x0;
        var _0x17d49c = 0x2ee,
            _0x1f1c3d = 0x1f4;
        !viewport[_0xefc5e2(0x1c4)] && (_0x17d49c = 0x28a, _0x1f1c3d = 0x208, gameData[_0xefc5e2(0x168)][_0xefc5e2(0xcc)] > gameData[_0xefc5e2(0x168)][_0xefc5e2(0xb6)] && (boardContainer[_0xefc5e2(0x282)] = 0x5a));
        var _0x5413ae = 0x1,
            _0x3ac6dc = 0x1;
        if (gameData[_0xefc5e2(0x168)][_0xefc5e2(0xb6)] > _0x1f1c3d) var _0x3ac6dc = _0x1f1c3d / gameData['settings'][_0xefc5e2(0xb6)];
        if (gameData['settings'][_0xefc5e2(0xcc)] > _0x17d49c) var _0x5413ae = _0x17d49c / gameData[_0xefc5e2(0x168)][_0xefc5e2(0xcc)];
        _0x5413ae < _0x3ac6dc ? boardContainer['scaleX'] = boardContainer[_0xefc5e2(0x221)] = _0x5413ae : boardContainer['scaleX'] = boardContainer[_0xefc5e2(0x221)] = _0x3ac6dc;
        if (gameData['ready']) {
            var _0x584bf6 = [{
                'x': canvasW / 0x64 * 0xf,
                'y': canvasH / 0x2,
                'horizontal': !![]
            }, {
                'x': canvasW / 0x64 * 0x55,
                'y': canvasH / 0x2,
                'horizontal': !![]
            }, {
                'x': canvasW / 0x64 * 0xf,
                'y': canvasH / 0x2,
                'horizontal': ![]
            }, {
                'x': canvasW / 0x64 * 0x55,
                'y': canvasH / 0x2,
                'horizontal': ![]
            }, {
                'x': canvasW / 0x64 * 0xf,
                'y': canvasH / 0x2,
                'horizontal': ![]
            }, {
                'x': canvasW / 0x64 * 0x55,
                'y': canvasH / 0x2,
                'horizontal': ![]
            }];
            !viewport[_0xefc5e2(0x1c4)] && (_0x584bf6 = [{
                'x': canvasW / 0x2,
                'y': canvasH / 0x64 * 0x56,
                'horizontal': !![]
            }, {
                'x': canvasW / 0x2,
                'y': canvasH / 0x64 * 0xc,
                'horizontal': !![]
            }, {
                'x': canvasW / 0x2,
                'y': canvasH / 0x64 * 0x56,
                'horizontal': ![]
            }, {
                'x': canvasW / 0x2,
                'y': canvasH / 0x64 * 0xc,
                'horizontal': ![]
            }, {
                'x': canvasW / 0x2,
                'y': canvasH / 0x64 * 0x56,
                'horizontal': ![]
            }, {
                'x': canvasW / 0x2,
                'y': canvasH / 0x64 * 0xc,
                'horizontal': ![]
            }]);
            var _0x461f67 = [];
            if (gameData[_0xefc5e2(0x220)] == 0x2) _0x461f67 = [0x0, 0x1];
            else gameData[_0xefc5e2(0x220)] >= 0x5 ? viewport[_0xefc5e2(0x1c4)] ? (_0x584bf6[0x0]['y'] = canvasH / 0x2 - 0x96, _0x584bf6[0x1]['y'] = canvasH / 0x2 - 0x96, _0x584bf6[0x2]['y'] = canvasH / 0x2, _0x584bf6[0x3]['y'] = canvasH / 0x2, _0x584bf6[0x4]['y'] = canvasH / 0x2 + 0x96, _0x584bf6[0x5]['y'] = canvasH / 0x2 + 0x96, _0x461f67 = [0x0, 0x1, 0x2, 0x3, 0x4, 0x5]) : (_0x584bf6[0x0]['x'] = canvasW / 0x2 - 0x96, _0x584bf6[0x1]['x'] = canvasW / 0x2 - 0x96, _0x584bf6[0x2]['x'] = canvasW / 0x2, _0x584bf6[0x3]['x'] = canvasW / 0x2, _0x584bf6[0x4]['x'] = canvasW / 0x2 + 0x96, _0x584bf6[0x5]['x'] = canvasW / 0x2 + 0x96, _0x461f67 = [0x0, 0x2, 0x4, 0x1, 0x3, 0x5]) : viewport['isLandscape'] ? (_0x584bf6[0x0]['y'] = canvasH / 0x2 - 0x46, _0x584bf6[0x1]['y'] = canvasH / 0x2 - 0x46, _0x584bf6[0x2]['y'] = canvasH / 0x2 + 0x46, _0x584bf6[0x3]['y'] = canvasH / 0x2 + 0x46, _0x461f67 = [0x0, 0x1, 0x2, 0x3]) : (_0x584bf6[0x0]['x'] = canvasW / 0x2 - 0x5a, _0x584bf6[0x1]['x'] = canvasW / 0x2 - 0x5a, _0x584bf6[0x2]['x'] = canvasW / 0x2 + 0x5a, _0x584bf6[0x3]['x'] = canvasW / 0x2 + 0x5a, _0x461f67 = [0x0, 0x2, 0x1, 0x3]);
            for (var _0x4a33c0 = 0x0; _0x4a33c0 < gameData[_0xefc5e2(0x220)]; _0x4a33c0++) {
                var _0x4657e6 = gameData['seq'][_0x4a33c0];
                $[_0xefc5e2(0x220)][_0x4657e6]['x'] = _0x584bf6[_0x461f67[_0x4a33c0]]['x'], $[_0xefc5e2(0x220)][_0x4657e6]['y'] = _0x584bf6[_0x461f67[_0x4a33c0]]['y'], $['players'][_0x4657e6]['horizontal'] = _0x584bf6[_0x461f67[_0x4a33c0]][_0xefc5e2(0x15a)];
            }
        }
    }
}

function preparePlayers() {
    var _0x2378eb = a0_0x55ac9f;
    playersContainer[_0x2378eb(0x87)]();
    for (var _0x27ce5c = 0x0; _0x27ce5c < gameData[_0x2378eb(0x220)]; _0x27ce5c++) {
        $[_0x2378eb(0x220)][_0x27ce5c] = new createjs[(_0x2378eb(0x15c))](), $[_0x2378eb(0x220)][_0x27ce5c]['score'] = 0x0, $[_0x2378eb(0x220)][_0x27ce5c][_0x2378eb(0xc6)] = _0x27ce5c;
        var _0x184583 = new createjs['Bitmap'](loader[_0x2378eb(0x1ed)](_0x2378eb(0x199)));
        centerReg(_0x184583);
        var _0x525434 = new createjs[(_0x2378eb(0x102))](loader[_0x2378eb(0x1ed)](_0x2378eb(0x1bd)));
        centerReg(_0x525434), _0x525434[_0x2378eb(0x1fb)] = ![];
        var _0x318d24 = new createjs[(_0x2378eb(0x22e))]();
        _0x318d24[_0x2378eb(0x209)] = _0x2378eb(0xfb), _0x318d24[_0x2378eb(0xdf)] = _0x2378eb(0x240), _0x318d24[_0x2378eb(0xe1)] = _0x2378eb(0x19a), _0x318d24[_0x2378eb(0x16d)] = 'middle', _0x318d24['text'] = textStrings[_0x2378eb(0x142)]['replace'](_0x2378eb(0x26b), _0x27ce5c + 0x1), _0x318d24['y'] = 0x1e;
        typeof initSocket == _0x2378eb(0x103) && multiplayerSettings[_0x2378eb(0xb9)] && socketData[_0x2378eb(0x136)] && (_0x318d24[_0x2378eb(0x92)] = gameData[_0x2378eb(0x1f4)][_0x27ce5c]);
        var _0x2d0385 = new createjs[(_0x2378eb(0x22e))]();
        _0x2d0385[_0x2378eb(0x209)] = '25px\x20bpreplaybold', _0x2d0385[_0x2378eb(0xdf)] = _0x2378eb(0x20f), _0x2d0385['textAlign'] = 'center', _0x2d0385[_0x2378eb(0x16d)] = _0x2378eb(0x148), _0x2d0385[_0x2378eb(0x92)] = playerData[_0x2378eb(0x243)][_0x27ce5c], _0x2d0385['y'] = -0x14;
        var _0x4b2a26 = new createjs[(_0x2378eb(0x22e))]();
        _0x4b2a26['font'] = _0x2378eb(0x294), _0x4b2a26[_0x2378eb(0xdf)] = _0x2378eb(0x240), _0x4b2a26['textAlign'] = _0x2378eb(0x19a), _0x4b2a26[_0x2378eb(0x16d)] = _0x2378eb(0x148), _0x4b2a26['y'] = -0x2;
        var _0x245394 = new createjs[(_0x2378eb(0x22e))]();
        _0x245394[_0x2378eb(0x209)] = _0x2378eb(0xfb), _0x245394[_0x2378eb(0xdf)] = _0x2378eb(0x240), _0x245394[_0x2378eb(0xe1)] = _0x2378eb(0x19a), _0x245394[_0x2378eb(0x16d)] = 'middle', _0x245394[_0x2378eb(0x92)] = '', _0x245394['y'] = 0x41, $[_0x2378eb(0x220)][_0x27ce5c]['playerName'] = _0x318d24, $['players'][_0x27ce5c]['playerScore'] = _0x2d0385, $['players'][_0x27ce5c]['playerScoreType'] = _0x4b2a26, $[_0x2378eb(0x220)][_0x27ce5c][_0x2378eb(0xb4)] = _0x245394, $[_0x2378eb(0x220)][_0x27ce5c][_0x2378eb(0x157)] = _0x525434, $['players'][_0x27ce5c][_0x2378eb(0x26a)] = [], $[_0x2378eb(0x220)][_0x27ce5c][_0x2378eb(0x20e)](_0x2378eb(0x261), function(_0x31f094) {
            var _0x29492f = _0x2378eb;
            showPlayerPieces(_0x31f094[_0x29492f(0x1eb)][_0x29492f(0xc6)]);
        }), $['players'][_0x27ce5c][_0x2378eb(0x15d)](_0x184583, _0x525434, _0x318d24, _0x2d0385, _0x4b2a26, _0x245394), updatePlayerScore(_0x27ce5c), playersContainer['addChild']($[_0x2378eb(0x220)][_0x27ce5c]);
    }
    resizeGameLayout();
}

function buildBoard() {
    var _0x3a78c3 = a0_0x55ac9f;
    boardDesignContainer[_0x3a78c3(0x87)](), diceContainer[_0x3a78c3(0x87)](), gameData[_0x3a78c3(0x26a)] = [], gameData[_0x3a78c3(0x1e8)] = [];
    var _0x2f7913 = 0x0,
        _0x34aeaf = [0x4, 0x4, 0x4, 0x4, 0x4, 0x4],
        _0x5f08d2 = {
            'regX': 0x5a / 0x2,
            'regY': 0x5a / 0x2,
            'height': 0x5a,
            'width': 0x5a,
            'count': 0xc
        },
        _0x3798e1 = {
            'animate': {
                'frames': [0x0, 0x1, 0x2, 0x3, 0x4, 0x5],
                'speed': 0x1
            }
        };
    spritesheetData = new createjs[(_0x3a78c3(0x298))]({
        'images': [loader[_0x3a78c3(0x1ed)]('dice' + gameData[_0x3a78c3(0xda)])[_0x3a78c3(0x7e)]],
        'frames': _0x5f08d2,
        'animations': _0x3798e1
    }), itemDice = new createjs[(_0x3a78c3(0xab))](spritesheetData, _0x3a78c3(0x253)), itemDice[_0x3a78c3(0xcf)] = 0x14, itemDiceH = new createjs[(_0x3a78c3(0x102))](loader[_0x3a78c3(0x1ed)](_0x3a78c3(0x25f) + gameData[_0x3a78c3(0xda)])), centerReg(itemDiceH), itemDiceH[_0x3a78c3(0x1fb)] = ![], diceContainer[_0x3a78c3(0x15d)](itemDice, itemDiceH), itemDice['cursor'] = _0x3a78c3(0x25c), itemDice['addEventListener'](_0x3a78c3(0x261), function(_0x1d42c8) {
        rollDice(!![]);
    });
    if (gameData[_0x3a78c3(0x14e)] == 0x0) {
        var _0x20a0e6 = new createjs[(_0x3a78c3(0x102))](loader[_0x3a78c3(0x1ed)]('board' + gameData[_0x3a78c3(0xda)] + '_' + 0x0));
        centerReg(_0x20a0e6), boardDesignContainer['addChild'](_0x20a0e6);
        var _0x1abbc5 = {
            'total': 0x8,
            'angle': 0x26,
            'degree': 0x0,
            'radius': 0x64
        };
        _0x1abbc5['degree'] = 0x168 / _0x1abbc5[_0x3a78c3(0x81)];
        for (var _0x343842 = 0x0; _0x343842 < _0x1abbc5[_0x3a78c3(0x81)]; _0x343842++) {
            $[_0x3a78c3(0x181)][_0x2f7913] = new createjs[(_0x3a78c3(0x102))](loader['getResult']('hole' + gameData[_0x3a78c3(0xda)])), centerReg($[_0x3a78c3(0x181)][_0x2f7913]), $[_0x3a78c3(0x181)][_0x3a78c3(0x7f) + _0x2f7913] = new createjs[(_0x3a78c3(0x102))](loader['getResult'](_0x3a78c3(0x184) + gameData[_0x3a78c3(0xda)])), centerReg($[_0x3a78c3(0x181)][_0x3a78c3(0x7f) + _0x2f7913]), $[_0x3a78c3(0x181)][_0x3a78c3(0x7f) + _0x2f7913][_0x3a78c3(0x1fb)] = ![];
            var _0x4bdfd9 = getAnglePosition(0x0, 0x0, _0x1abbc5[_0x3a78c3(0xcb)], _0x1abbc5['angle']);
            $[_0x3a78c3(0x181)][_0x2f7913]['x'] = $[_0x3a78c3(0x181)][_0x3a78c3(0x7f) + _0x2f7913]['x'] = _0x4bdfd9['x'], $[_0x3a78c3(0x181)][_0x2f7913]['y'] = $[_0x3a78c3(0x181)][_0x3a78c3(0x7f) + _0x2f7913]['y'] = _0x4bdfd9['y'] * 0.6, gameData[_0x3a78c3(0x26a)]['push']($[_0x3a78c3(0x181)][_0x2f7913]), boardDesignContainer[_0x3a78c3(0x15d)]($[_0x3a78c3(0x181)][_0x2f7913], $[_0x3a78c3(0x181)][_0x3a78c3(0x7f) + _0x2f7913]), _0x1abbc5[_0x3a78c3(0x8d)] += _0x1abbc5[_0x3a78c3(0x17c)], _0x2f7913++;
        }
        var _0x1abbc5 = {
            'total': 0x10,
            'angle': 0x23,
            'degree': 0x0,
            'radius': 0xbe
        };
        _0x1abbc5[_0x3a78c3(0x17c)] = 0x168 / _0x1abbc5['total'];
        for (var _0x343842 = 0x0; _0x343842 < _0x1abbc5['total']; _0x343842++) {
            $[_0x3a78c3(0x181)][_0x2f7913] = new createjs['Bitmap'](loader[_0x3a78c3(0x1ed)](_0x3a78c3(0x1b9) + gameData[_0x3a78c3(0xda)])), centerReg($['chess'][_0x2f7913]), $[_0x3a78c3(0x181)][_0x3a78c3(0x7f) + _0x2f7913] = new createjs[(_0x3a78c3(0x102))](loader[_0x3a78c3(0x1ed)](_0x3a78c3(0x184) + gameData['themeIndex'])), centerReg($[_0x3a78c3(0x181)][_0x3a78c3(0x7f) + _0x2f7913]), $['chess']['highlight' + _0x2f7913][_0x3a78c3(0x1fb)] = ![];
            var _0x4bdfd9 = getAnglePosition(0x0, 0x0, _0x1abbc5[_0x3a78c3(0xcb)], _0x1abbc5[_0x3a78c3(0x8d)]);
            $['chess'][_0x2f7913]['x'] = $['chess'][_0x3a78c3(0x7f) + _0x2f7913]['x'] = _0x4bdfd9['x'], $['chess'][_0x2f7913]['y'] = $[_0x3a78c3(0x181)]['highlight' + _0x2f7913]['y'] = _0x4bdfd9['y'] * 0.6, gameData[_0x3a78c3(0x26a)]['push']($[_0x3a78c3(0x181)][_0x2f7913]), boardDesignContainer[_0x3a78c3(0x15d)]($[_0x3a78c3(0x181)][_0x2f7913], $[_0x3a78c3(0x181)][_0x3a78c3(0x7f) + _0x2f7913]), _0x1abbc5[_0x3a78c3(0x8d)] += _0x1abbc5[_0x3a78c3(0x17c)], _0x2f7913++;
        }
        itemDice['x'] = itemDice[_0x3a78c3(0x8f)] = 0x0, itemDice['y'] = itemDice[_0x3a78c3(0x22a)] = 0xfa;
    } else {
        _0x34aeaf = [0x6, 0x6, 0x7, 0x7, 0x7, 0x7];
        var _0x20a0e6 = new createjs[(_0x3a78c3(0x102))](loader[_0x3a78c3(0x1ed)](_0x3a78c3(0x19c) + gameData['themeIndex'] + '_' + 0x1));
        centerReg(_0x20a0e6), boardDesignContainer[_0x3a78c3(0x15d)](_0x20a0e6);
        var _0x1abbc5 = {
            'row': 0x7,
            'column': 0x7,
            'x': 0x0,
            'y': 0x0,
            'sX': -0xa0,
            'sY': -0x78,
            'spaceX': 0x37,
            'spaceY': 0x28,
            'ratio': 0x1
        };
        _0x1abbc5['x'] = _0x1abbc5['sX'], _0x1abbc5['y'] = _0x1abbc5['sY'];
        for (var _0x4e9715 = 0x0; _0x4e9715 < _0x1abbc5[_0x3a78c3(0x1e0)]; _0x4e9715++) {
            for (var _0x413a31 = 0x0; _0x413a31 < _0x1abbc5[_0x3a78c3(0x20c)]; _0x413a31++) {
                var _0x4ae650 = ![];
                _0x4e9715 > 0x1 && _0x4e9715 < 0x5 && (_0x413a31 > 0x1 && _0x413a31 < 0x5 && (_0x4ae650 = !![])), !_0x4ae650 && ($[_0x3a78c3(0x181)][_0x2f7913] = new createjs[(_0x3a78c3(0x102))](loader[_0x3a78c3(0x1ed)]('hole' + gameData[_0x3a78c3(0xda)])), centerReg($[_0x3a78c3(0x181)][_0x2f7913]), $[_0x3a78c3(0x181)][_0x3a78c3(0x7f) + _0x2f7913] = new createjs[(_0x3a78c3(0x102))](loader[_0x3a78c3(0x1ed)](_0x3a78c3(0x184) + gameData[_0x3a78c3(0xda)])), centerReg($['chess'][_0x3a78c3(0x7f) + _0x2f7913]), $[_0x3a78c3(0x181)][_0x3a78c3(0x7f) + _0x2f7913]['visible'] = ![], $[_0x3a78c3(0x181)][_0x2f7913]['x'] = $[_0x3a78c3(0x181)][_0x3a78c3(0x7f) + _0x2f7913]['x'] = _0x1abbc5['x'], $['chess'][_0x2f7913]['y'] = $[_0x3a78c3(0x181)][_0x3a78c3(0x7f) + _0x2f7913]['y'] = _0x1abbc5['y'], gameData[_0x3a78c3(0x26a)]['push']($[_0x3a78c3(0x181)][_0x2f7913]), boardDesignContainer['addChild']($['chess'][_0x2f7913], $[_0x3a78c3(0x181)][_0x3a78c3(0x7f) + _0x2f7913]), _0x2f7913++), _0x1abbc5['x'] += _0x1abbc5['spaceX'] * _0x1abbc5[_0x3a78c3(0x210)];
            }
            _0x1abbc5[_0x3a78c3(0x210)] += 0.045, _0x1abbc5['x'] = _0x1abbc5['sX'] * _0x1abbc5[_0x3a78c3(0x210)], _0x1abbc5['y'] += _0x1abbc5['spaceY'];
        }
        itemDice['x'] = itemDice['oriX'] = 0x0, itemDice['y'] = itemDice[_0x3a78c3(0x22a)] = 0xfa;
    }
    gameData['pieceColors'] = [];
    for (var _0x343842 = 0x0; _0x343842 < themesSettings[gameData[_0x3a78c3(0xda)]][_0x3a78c3(0x193)]['length']; _0x343842++) {
        for (var _0x413a31 = 0x0; _0x413a31 < _0x34aeaf[_0x343842]; _0x413a31++) {
            gameData[_0x3a78c3(0x163)]['push'](_0x343842);
        }
    }
    shuffle(gameData[_0x3a78c3(0x163)]);
}

function setupChess() {
    var _0x563e28 = a0_0x55ac9f;
    gameData[_0x563e28(0x9d)] = !![], preparePlayers(), boardIconContainer['removeAllChildren']();
    for (var _0x130868 = 0x0; _0x130868 < gameData[_0x563e28(0x26a)][_0x563e28(0x7d)]; _0x130868++) {
        var _0x39ccf6 = new createjs[(_0x563e28(0x14a))]();
        _0x39ccf6['x'] = $[_0x563e28(0x181)][_0x130868]['x'], _0x39ccf6['y'] = $[_0x563e28(0x181)][_0x130868]['y'], _0x39ccf6[_0x563e28(0x241)]['beginFill'](_0x563e28(0x11c))['mt'](-0x13, -0xc8)['lt'](0x13, -0xc8)['lt'](0x13, 0x0)['qt'](0x0, 0x12, -0x13, 0x0);
        var _0x18f669 = gameData[_0x563e28(0x163)][_0x130868],
            _0x2d1f69 = new createjs[(_0x563e28(0x102))](loader['getResult'](_0x563e28(0x193) + gameData[_0x563e28(0xda)] + '_' + _0x18f669));
        _0x2d1f69[_0x563e28(0xc2)] = themesSettings[gameData['themeIndex']][_0x563e28(0x193)][_0x18f669][_0x563e28(0xc2)], _0x2d1f69[_0x563e28(0x24b)] = themesSettings[gameData['themeIndex']][_0x563e28(0x193)][_0x18f669]['regY'], _0x2d1f69['x'] = _0x2d1f69[_0x563e28(0x8f)] = $[_0x563e28(0x181)][_0x130868]['x'], _0x2d1f69['y'] = _0x2d1f69[_0x563e28(0x22a)] = $['chess'][_0x130868]['y'] - themesSettings[gameData[_0x563e28(0xda)]][_0x563e28(0x193)][_0x18f669]['height'], _0x2d1f69[_0x563e28(0x107)] = _0x39ccf6, _0x2d1f69['chessIndex'] = _0x130868, _0x2d1f69[_0x563e28(0xc0)] = _0x18f669, boardIconContainer[_0x563e28(0x15d)](_0x2d1f69);
        var _0x92b22b = new createjs['Bitmap'](loader[_0x563e28(0x1ed)]('pieceBottom' + gameData[_0x563e28(0xda)] + '_' + _0x18f669));
        _0x92b22b['regX'] = themesSettings[gameData[_0x563e28(0xda)]][_0x563e28(0x1e9)][_0x18f669][_0x563e28(0xc2)], _0x92b22b[_0x563e28(0x24b)] = themesSettings[gameData[_0x563e28(0xda)]][_0x563e28(0x1e9)][_0x18f669]['regY'], _0x92b22b['x'] = _0x92b22b[_0x563e28(0x8f)] = $[_0x563e28(0x181)][_0x130868]['x'], _0x92b22b['y'] = _0x92b22b[_0x563e28(0x22a)] = $['chess'][_0x130868]['y'] - themesSettings[gameData[_0x563e28(0xda)]][_0x563e28(0x1e9)][_0x18f669]['height'], _0x92b22b[_0x563e28(0x107)] = _0x39ccf6, _0x92b22b[_0x563e28(0x1fb)] = ![], boardIconContainer[_0x563e28(0x15d)](_0x92b22b);
        var _0x2fa74c = _0x2d1f69[_0x563e28(0x2a0)](),
            _0x5e80c9 = _0x92b22b[_0x563e28(0x2a0)]();
        setColorFilter(_0x2fa74c, 0xff, 0xff, 0xff), setColorFilter(_0x5e80c9, 0xff, 0xff, 0xff), _0x5e80c9[_0x563e28(0x1fb)] = _0x2fa74c[_0x563e28(0x1fb)] = ![], _0x5e80c9[_0x563e28(0x1ba)] = 0.3, boardIconContainer[_0x563e28(0x15d)](_0x5e80c9, _0x2fa74c), _0x2d1f69[_0x563e28(0x18e)] = _0x563e28(0x25c), _0x2d1f69[_0x563e28(0x20e)](_0x563e28(0x261), function(_0x5b6f44) {
            var _0xf8da17 = _0x563e28;
            if (!gameData[_0xf8da17(0x1cf)]) return;
            showPiece(_0x5b6f44['target'][_0xf8da17(0x150)], _0x5b6f44['target'][_0xf8da17(0xc0)]), typeof initSocket == 'function' && multiplayerSettings[_0xf8da17(0xb9)] && socketData[_0xf8da17(0x136)] && postSocketUpdate(_0xf8da17(0xc1), {
                'chessIndex': _0x5b6f44[_0xf8da17(0x202)][_0xf8da17(0x150)],
                'pieceIndex': _0x5b6f44[_0xf8da17(0x202)][_0xf8da17(0xc0)]
            }, !![]);
        }), $[_0x563e28(0x181)][_0x130868][_0x563e28(0x7c)] = _0x39ccf6, $[_0x563e28(0x181)][_0x130868][_0x563e28(0x193)] = _0x2d1f69, $[_0x563e28(0x181)][_0x130868][_0x563e28(0x1e9)] = _0x92b22b, $[_0x563e28(0x181)][_0x130868][_0x563e28(0x211)] = null, $[_0x563e28(0x181)][_0x130868][_0x563e28(0x207)] = ![], $['chess'][_0x130868][_0x563e28(0x293)] = _0x2fa74c, $['chess'][_0x130868]['pieceBottomH'] = _0x5e80c9, boardIconContainer[_0x563e28(0x15d)]($[_0x563e28(0x181)][_0x563e28(0x107) + _0x130868]);
    }
    boardIconContainer['sortChildren'](sortFunction), gameSettings['showColorAnimation'] ? animateChess() : startBoard();
}

function setColorFilter(_0x3c60da, _0x3e2435, _0x4936a9, _0xb3326e) {
    var _0x513eed = a0_0x55ac9f;
    _0x3c60da[_0x513eed(0x2a6)] = [new createjs[(_0x513eed(0x111))](0x0, 0x0, 0x0, 0x1, _0x3e2435, _0x4936a9, _0xb3326e, 0x0)];
    var _0x53753f = 0x64,
        _0x3f729c = 0x12c;
    _0x3c60da[_0x513eed(0x108)](-(_0x53753f / 0x2), -(_0x3f729c / 0x2), _0x53753f, _0x3f729c);
}

function animateChess() {
    var _0x31d90f = a0_0x55ac9f;
    gameData[_0x31d90f(0xfd)] = 0x0;
    var _0x4f7b3f = 0x0;
    for (var _0x387402 = 0x0; _0x387402 < gameData['pieces'][_0x31d90f(0x7d)]; _0x387402++) {
        var _0x36cdd5 = _0x387402;
        $[_0x31d90f(0x181)][_0x36cdd5][_0x31d90f(0x193)]['mask'] = null, $[_0x31d90f(0x181)][_0x36cdd5][_0x31d90f(0x1e9)]['mask'] = null, $[_0x31d90f(0x181)][_0x36cdd5][_0x31d90f(0x193)][_0x31d90f(0x1fb)] = ![], $[_0x31d90f(0x181)][_0x36cdd5][_0x31d90f(0x1e9)][_0x31d90f(0x1fb)] = ![], $[_0x31d90f(0x181)][_0x36cdd5]['pieceTarget'] = $['chess'][_0x36cdd5]['pieceBottom'], $[_0x31d90f(0x181)][_0x36cdd5][_0x31d90f(0x211)][_0x31d90f(0x1fb)] = !![], $['chess'][_0x36cdd5][_0x31d90f(0x211)][_0x31d90f(0x282)] = randomIntFromInterval(-0xb4, 0xb4), $[_0x31d90f(0x181)][_0x36cdd5][_0x31d90f(0x211)]['x'] = $[_0x31d90f(0x181)][_0x36cdd5][_0x31d90f(0x211)]['x'] + randomIntFromInterval(-0x32, 0x32), $['chess'][_0x36cdd5]['pieceTarget']['y'] = $[_0x31d90f(0x181)][_0x36cdd5][_0x31d90f(0x211)]['y'] + randomIntFromInterval(0x32, 0x64), _0x4f7b3f = randomIntFromInterval(0x3, 0x6) * 0.1, TweenMax['to']($[_0x31d90f(0x181)][_0x36cdd5]['pieceTarget'], gameSettings[_0x31d90f(0x196)], {
            'delay': _0x4f7b3f,
            'rotation': 0x0,
            'x': $[_0x31d90f(0x181)][_0x36cdd5]['x'],
            'y': $[_0x31d90f(0x181)][_0x36cdd5]['y'] - 0x78,
            'ease': _0x31d90f(0x2a2),
            'onStart': function() {
                var _0x538a2c = randomIntFromInterval(0x1, 0x3);
                playSound('soundPick' + _0x538a2c);
            },
            'onComplete': animateChessComplete,
            'onCompleteParams': [_0x36cdd5]
        });
    }
}

function animateChessComplete(_0xc5c09c) {
    var _0x26fdc3 = a0_0x55ac9f,
        _0x3b3ca1 = randomBoolean() == !![] ? 0xb4 : -0xb4,
        _0x2c8e56 = gameSettings[_0x26fdc3(0x19d)] + randomIntFromInterval(0x0, 0x3) * 0.1;
    TweenMax['to']($[_0x26fdc3(0x181)][_0xc5c09c][_0x26fdc3(0x211)], gameSettings[_0x26fdc3(0x1ec)], {
        'delay': _0x2c8e56,
        'rotation': _0x3b3ca1,
        'y': $[_0x26fdc3(0x181)][_0xc5c09c][_0x26fdc3(0x211)][_0x26fdc3(0x22a)],
        'onStart': function() {
            var _0x5db661 = _0x26fdc3;
            $[_0x5db661(0x181)][_0xc5c09c]['pieceTarget']['scaleX'] = -0x1;
        },
        'onComplete': function() {
            var _0x4f3fe3 = _0x26fdc3;
            gameData[_0x4f3fe3(0xfd)]++, $[_0x4f3fe3(0x181)][_0xc5c09c]['pieceTop']['visible'] = ![], $[_0x4f3fe3(0x181)][_0xc5c09c][_0x4f3fe3(0x1e9)][_0x4f3fe3(0x1fb)] = ![], $[_0x4f3fe3(0x181)][_0xc5c09c][_0x4f3fe3(0x193)]['x'] = $[_0x4f3fe3(0x181)][_0xc5c09c][_0x4f3fe3(0x1e9)]['x'], $[_0x4f3fe3(0x181)][_0xc5c09c][_0x4f3fe3(0x193)]['y'] = $[_0x4f3fe3(0x181)][_0xc5c09c]['pieceBottom']['y'] - 0x64, $[_0x4f3fe3(0x181)][_0xc5c09c][_0x4f3fe3(0x1e9)]['x'] = $[_0x4f3fe3(0x181)][_0xc5c09c][_0x4f3fe3(0x1e9)][_0x4f3fe3(0x8f)], $[_0x4f3fe3(0x181)][_0xc5c09c][_0x4f3fe3(0x1e9)]['y'] = $[_0x4f3fe3(0x181)][_0xc5c09c][_0x4f3fe3(0x1e9)]['oriY'], $[_0x4f3fe3(0x181)][_0xc5c09c][_0x4f3fe3(0x1e9)][_0x4f3fe3(0x197)] = 0x1, $[_0x4f3fe3(0x181)][_0xc5c09c]['pieceBottom'][_0x4f3fe3(0x282)] = 0x0, $[_0x4f3fe3(0x181)][_0xc5c09c]['pieceTarget'] = $['chess'][_0xc5c09c]['pieceTop'], $[_0x4f3fe3(0x181)][_0xc5c09c]['pieceTarget']['visible'] = !![], $['chess'][_0xc5c09c][_0x4f3fe3(0x211)][_0x4f3fe3(0x107)] = $[_0x4f3fe3(0x181)][_0xc5c09c][_0x4f3fe3(0x7c)];
            var _0x590b12 = randomIntFromInterval(0x0, 0.3) * 0.1;
            TweenMax['to']($['chess'][_0xc5c09c][_0x4f3fe3(0x211)], gameSettings['showColorDownSpeed'], {
                'delay': _0x590b12,
                'x': $[_0x4f3fe3(0x181)][_0xc5c09c]['pieceTarget']['oriX'],
                'y': $[_0x4f3fe3(0x181)][_0xc5c09c]['pieceTarget'][_0x4f3fe3(0x22a)],
                'onStart': function() {
                    playSound('soundPlace');
                }
            }), gameData[_0x4f3fe3(0xfd)] == gameData[_0x4f3fe3(0x26a)][_0x4f3fe3(0x7d)] && TweenMax['to'](boardContainer, 0x1, {
                'onComplete': startBoard
            });
        }
    });
}
var sortFunction = function(_0x4a0094, _0x4a84e7, _0x2df5f1) {
    if (_0x4a0094['y'] > _0x4a84e7['y']) return 0x1;
    if (_0x4a0094['y'] < _0x4a84e7['y']) return -0x1;
    return 0x0;
};

function showPiece(_0x3b213d, _0x6f0c5c) {
    var _0x5b55f2 = a0_0x55ac9f,
        _0x31d972 = randomIntFromInterval(0x1, 0x3);
    playSound(_0x5b55f2(0x16c) + _0x31d972), gameData[_0x5b55f2(0x1cf)] = ![];
    for (var _0x2b7553 = 0x0; _0x2b7553 < gameData[_0x5b55f2(0x26a)][_0x5b55f2(0x7d)]; _0x2b7553++) {
        $['chess'][_0x5b55f2(0x7f) + _0x2b7553][_0x5b55f2(0x1fb)] = ![], $[_0x5b55f2(0x181)][_0x2b7553][_0x5b55f2(0x293)][_0x5b55f2(0x1fb)] = ![];
    }
    $[_0x5b55f2(0x181)][_0x3b213d]['pieceTarget'] = $[_0x5b55f2(0x181)][_0x3b213d][_0x5b55f2(0x193)];
    var _0x446e93 = $[_0x5b55f2(0x181)][_0x3b213d]['pieceTarget']['y'];
    TweenMax['to']($[_0x5b55f2(0x181)][_0x3b213d][_0x5b55f2(0x211)], gameSettings[_0x5b55f2(0x1f8)], {
        'y': _0x446e93 - 0x50,
        'onComplete': function() {
            var _0x483478 = _0x5b55f2;
            TweenMax['to']($[_0x483478(0x181)][_0x3b213d][_0x483478(0x211)], gameSettings['pickDelay'], {
                'onComplete': function() {
                    var _0x424759 = _0x483478;
                    gameData[_0x424759(0x20b)] == _0x6f0c5c ? (gameData[_0x424759(0xd8)] = !![], playSound(_0x424759(0xa2)), increasePlayerScore(_0x6f0c5c), showCorrectPiece(_0x3b213d, _0x6f0c5c)) : (gameData[_0x424759(0x1e8)][_0x424759(0xf2)](_0x3b213d), gameData['reveals'] = removeDuplicates(gameData[_0x424759(0x1e8)]), playSound(_0x424759(0xf6)), TweenMax['to']($['chess'][_0x3b213d]['pieceTarget'], gameSettings[_0x424759(0xf3)], {
                        'y': _0x446e93,
                        'onComplete': function() {
                            showPieceComplete(![]);
                        }
                    }));
                }
            });
        }
    });
}

function showCorrectPiece(_0x10fe8b, _0x40e8f5) {
    var _0x1aa0bb = a0_0x55ac9f;
    $[_0x1aa0bb(0x181)][_0x10fe8b][_0x1aa0bb(0x207)] = !![], $['players'][gameData[_0x1aa0bb(0x14b)]]['pieces'][_0x1aa0bb(0xf2)](_0x10fe8b), $[_0x1aa0bb(0x181)][_0x10fe8b][_0x1aa0bb(0x211)][_0x1aa0bb(0x107)] = null;
    var _0x1a251d = $[_0x1aa0bb(0x181)][_0x10fe8b]['pieceTarget']['y'],
        _0x9efed9 = randomBoolean() == !![] ? 0xb4 : -0xb4;
    playSound('soundPlace'), TweenMax['to']($[_0x1aa0bb(0x181)][_0x10fe8b][_0x1aa0bb(0x211)], gameSettings[_0x1aa0bb(0x10d)], {
        'rotation': _0x9efed9,
        'y': _0x1a251d - 0x32,
        'onComplete': function() {
            var _0x4c2e7d = _0x1aa0bb;
            $[_0x4c2e7d(0x181)][_0x10fe8b][_0x4c2e7d(0x1e9)]['y'] = $['chess'][_0x10fe8b][_0x4c2e7d(0x193)]['y'], $[_0x4c2e7d(0x181)][_0x10fe8b][_0x4c2e7d(0x211)][_0x4c2e7d(0x1fb)] = ![], $[_0x4c2e7d(0x181)][_0x10fe8b][_0x4c2e7d(0x211)] = $[_0x4c2e7d(0x181)][_0x10fe8b][_0x4c2e7d(0x1e9)], $[_0x4c2e7d(0x181)][_0x10fe8b]['pieceTarget'][_0x4c2e7d(0x1fb)] = !![], $[_0x4c2e7d(0x181)][_0x10fe8b][_0x4c2e7d(0x211)][_0x4c2e7d(0x107)] = $['chess'][_0x10fe8b][_0x4c2e7d(0x7c)], $[_0x4c2e7d(0x181)][_0x10fe8b][_0x4c2e7d(0x207)] = ![], TweenMax['to']($[_0x4c2e7d(0x181)][_0x10fe8b][_0x4c2e7d(0x211)], gameSettings[_0x4c2e7d(0x10d)], {
                'y': $[_0x4c2e7d(0x181)][_0x10fe8b]['pieceTarget']['oriY'],
                'onComplete': function() {
                    checkBoardWin();
                }
            });
        }
    });
}

function showPieceComplete(_0x5c7d19) {
    var _0x477905 = a0_0x55ac9f;
    typeof initSocket == _0x477905(0x103) && multiplayerSettings[_0x477905(0xb9)] && socketData[_0x477905(0x136)] ? postSocketUpdate(_0x477905(0xc7), {
        'index': socketData[_0x477905(0x1bc)],
        'check': _0x5c7d19
    }) : (_0x5c7d19 ? gameSettings['nextPlayer'] && nextPlayerTurn() : nextPlayerTurn(), displayPlayerTurn());
}

function showPlayerPieces(_0x145a5f) {
    var _0x5b457d = a0_0x55ac9f;
    for (var _0x59367d = 0x0; _0x59367d < gameData[_0x5b457d(0x26a)][_0x5b457d(0x7d)]; _0x59367d++) {
        $[_0x5b457d(0x181)][_0x59367d][_0x5b457d(0x1e9)][_0x5b457d(0x1fb)] && !$[_0x5b457d(0x181)][_0x59367d][_0x5b457d(0x207)] && ($[_0x5b457d(0x181)][_0x59367d][_0x5b457d(0x257)]['visible'] = ![], TweenMax['to']($['chess'][_0x59367d][_0x5b457d(0x1e9)], 0.2, {
            'y': $[_0x5b457d(0x181)][_0x59367d]['pieceBottom'][_0x5b457d(0x22a)],
            'overwrite': !![]
        }));
    }
    for (var _0x59367d = 0x0; _0x59367d < $[_0x5b457d(0x220)][_0x145a5f]['pieces'][_0x5b457d(0x7d)]; _0x59367d++) {
        var _0x570e80 = $[_0x5b457d(0x220)][_0x145a5f][_0x5b457d(0x26a)][_0x59367d];
        $[_0x5b457d(0x181)][_0x570e80][_0x5b457d(0x1e9)]['visible'] && !$[_0x5b457d(0x181)][_0x570e80]['animating'] && ($[_0x5b457d(0x181)][_0x570e80][_0x5b457d(0x257)][_0x5b457d(0x1fb)] = ![], TweenMax['to']($[_0x5b457d(0x181)][_0x570e80][_0x5b457d(0x1e9)], 0.5, {
            'y': $['chess'][_0x570e80][_0x5b457d(0x1e9)][_0x5b457d(0x22a)] - 0x32,
            'ease': _0x5b457d(0x2a2),
            'overwrite': !![],
            'onComplete': showPlayerPiecesComplete,
            'onCompleteParams': [_0x570e80]
        }), TweenMax['to']($[_0x5b457d(0x181)][_0x570e80][_0x5b457d(0x257)], 0.5, {
            'alpha': 0.3,
            'y': $['chess'][_0x570e80][_0x5b457d(0x1e9)][_0x5b457d(0x22a)] - 0x32,
            'ease': _0x5b457d(0x2a2),
            'overwrite': !![]
        }));
    }
}

function showPlayerPiecesComplete(_0x357b61) {
    var _0x4051b6 = a0_0x55ac9f;
    TweenMax['to']($[_0x4051b6(0x181)][_0x357b61][_0x4051b6(0x1e9)], 0.5, {
        'y': $['chess'][_0x357b61][_0x4051b6(0x1e9)][_0x4051b6(0x22a)],
        'ease': _0x4051b6(0x28a),
        'overwrite': !![]
    }), TweenMax['to']($['chess'][_0x357b61]['pieceBottomH'], 0.5, {
        'alpha': 0x0,
        'y': $[_0x4051b6(0x181)][_0x357b61][_0x4051b6(0x1e9)][_0x4051b6(0x22a)],
        'ease': 'Expo.easeIn',
        'overwrite': !![],
        'onComplete': function() {
            var _0x29bfb2 = _0x4051b6;
            $[_0x29bfb2(0x181)][_0x357b61]['pieceBottomH'][_0x29bfb2(0x1fb)] = ![];
        }
    });
}

function checkBoardWin() {
    var _0x362c7a = a0_0x55ac9f,
        _0x17288c = ![],
        _0x55846f = gameSettings[_0x362c7a(0xfa)] ? !![] : ![],
        _0x3e2bf4 = [],
        _0x393ed1 = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0];
    for (var _0x594b6 = 0x0; _0x594b6 < gameData['pieces'][_0x362c7a(0x7d)]; _0x594b6++) {
        $[_0x362c7a(0x181)][_0x594b6][_0x362c7a(0x193)]['visible'] && (_0x3e2bf4['push']($[_0x362c7a(0x181)][_0x594b6][_0x362c7a(0x193)]['pieceIndex']), _0x393ed1[$[_0x362c7a(0x181)][_0x594b6][_0x362c7a(0x193)]['pieceIndex']]++);
    }
    gameData[_0x362c7a(0x29a)] = -0x1;
    if (gameData[_0x362c7a(0x168)]['winMode'] == 0x0) _0x55846f = !![], _0x3e2bf4[_0x362c7a(0x7d)] == 0x0 && (_0x17288c = !![]);
    else {
        if (gameData['settings'][_0x362c7a(0x9a)] == 0x1) {
            var _0x34824a = 0x0;
            for (var _0x594b6 = 0x0; _0x594b6 < playerData[_0x362c7a(0x143)][gameData[_0x362c7a(0x14b)]][_0x362c7a(0x7d)]; _0x594b6++) {
                var _0x14864b = playerData[_0x362c7a(0x143)][gameData[_0x362c7a(0x14b)]][_0x594b6];
                _0x393ed1[_0x594b6] + _0x14864b >= 0x4 && (_0x55846f = !![]), _0x14864b > _0x34824a && (_0x34824a = playerData[_0x362c7a(0x143)][gameData['player']][_0x594b6]);
            }
            if (_0x34824a == 0x4) gameData['playerWin'] = gameData[_0x362c7a(0x14b)], _0x17288c = !![];
            else {
                if (_0x3e2bf4[_0x362c7a(0x7d)] == 0x0) _0x17288c = !![];
                else !_0x55846f && (_0x17288c = !![]);
            }
        } else {
            if (gameData[_0x362c7a(0x168)]['winMode'] == 0x2) {
                var _0x44d14e = 0x0;
                for (var _0x594b6 = 0x0; _0x594b6 < playerData['colors'][gameData[_0x362c7a(0x14b)]]['length']; _0x594b6++) {
                    var _0x14864b = playerData['colors'][gameData[_0x362c7a(0x14b)]][_0x594b6];
                    if (_0x14864b == 0x0) _0x393ed1[_0x594b6] > 0x0 && (_0x55846f = !![]);
                    else _0x14864b > 0x0 && _0x44d14e++;
                }
                if (_0x44d14e == 0x6) gameData['playerWin'] = gameData['player'], _0x17288c = !![];
                else {
                    if (_0x3e2bf4[_0x362c7a(0x7d)] == 0x0) _0x17288c = !![];
                    else !_0x55846f && (_0x17288c = !![]);
                }
            }
        }
    }
    _0x17288c ? (showEndStatus(), endGame()) : showPieceComplete(!![]);
}

function showDice(_0x15cb18) {
    var _0x1e322d = a0_0x55ac9f,
        _0x4622d6 = _0x15cb18 == undefined ? randomIntFromInterval(0x6, 0xb) : _0x15cb18 + 0x6;
    itemDice[_0x1e322d(0xb5)](_0x4622d6), itemDice[_0x1e322d(0x1ba)] = 0x1;
}

function rollDice(_0x594a36) {
    var _0x4c4392 = a0_0x55ac9f;
    gameData[_0x4c4392(0x20b)] = randomIntFromInterval(0x0, 0x5);
    if (gameData['rollTime'] > 0x5) {
        gameData[_0x4c4392(0x13a)] = 0x0;
        var _0x53521e = [];
        for (var _0x3702f8 = 0x0; _0x3702f8 < gameData[_0x4c4392(0x26a)]['length']; _0x3702f8++) {
            $[_0x4c4392(0x181)][_0x3702f8][_0x4c4392(0x193)]['visible'] && _0x53521e[_0x4c4392(0xf2)]($[_0x4c4392(0x181)][_0x3702f8][_0x4c4392(0x193)][_0x4c4392(0xc0)]);
        }
        shuffle(_0x53521e), gameData[_0x4c4392(0x20b)] = _0x53521e[0x0];
    }
    var _0x5ef40d = checkIsPlayer(gameData[_0x4c4392(0x14b)]);
    if (typeof initSocket == _0x4c4392(0x103) && multiplayerSettings['enable'] && socketData[_0x4c4392(0x136)]) _0x5ef40d && (gameData[_0x4c4392(0xe2)] && (itemDiceH[_0x4c4392(0x1fb)] = ![], gameData[_0x4c4392(0xe2)] = ![], proceedRollDice(), postSocketUpdate(_0x4c4392(0x155), {
        'diceIndex': gameData[_0x4c4392(0x20b)]
    }, !![])));
    else {
        var _0x5ef40d = checkIsPlayer(gameData[_0x4c4392(0x14b)]);
        if (_0x5ef40d) gameData[_0x4c4392(0xe2)] && (itemDiceH[_0x4c4392(0x1fb)] = ![], gameData['rollCon'] = ![], proceedRollDice());
        else !_0x594a36 && proceedRollDice();
    }
}

function proceedRollDice() {
    var _0x19ee50 = a0_0x55ac9f;
    gameData[_0x19ee50(0xd8)] ? gameData[_0x19ee50(0x13a)] = 0x0 : gameData[_0x19ee50(0x13a)]++;
    playSound('soundDice'), itemDice[_0x19ee50(0x100)]('animate');
    var _0x470c6b = [],
        _0x3e7dd1 = {
            'x': itemDice[_0x19ee50(0x8f)],
            'y': itemDice[_0x19ee50(0x22a)],
            'startX': itemDice[_0x19ee50(0x8f)],
            'startY': itemDice[_0x19ee50(0x22a)],
            'radiusX': 0x0,
            'radiusY': 0x0
        },
        _0x22e27a = 0x14,
        _0x561d89 = 0x14 / 1.5,
        _0x28532f = 0x258,
        _0x1bf145 = 0x64;
    for (var _0x4ba3f1 = 0x0; _0x4ba3f1 < 0x2; _0x4ba3f1++) {
        for (var _0x24def5 = 0x0; _0x24def5 < 0x4; _0x24def5++) {
            _0x3e7dd1['radiusX'] = _0x22e27a * (_0x4ba3f1 + 0x1), _0x3e7dd1[_0x19ee50(0x188)] = _0x561d89 * (_0x4ba3f1 + 0x1);
            _0x3e7dd1[_0x19ee50(0x190)] >= _0x28532f && (_0x3e7dd1[_0x19ee50(0x190)] = _0x28532f);
            _0x3e7dd1['radiusY'] >= _0x1bf145 && (_0x3e7dd1[_0x19ee50(0x188)] = _0x1bf145);
            if (_0x24def5 == 0x0) _0x3e7dd1['x'] = _0x3e7dd1[_0x19ee50(0x28e)] - _0x3e7dd1[_0x19ee50(0x190)], _0x3e7dd1['y'] = _0x3e7dd1[_0x19ee50(0x9c)];
            else {
                if (_0x24def5 == 0x1) _0x3e7dd1['x'] = _0x3e7dd1[_0x19ee50(0x28e)], _0x3e7dd1['y'] = _0x3e7dd1[_0x19ee50(0x9c)] - _0x3e7dd1[_0x19ee50(0x188)];
                else {
                    if (_0x24def5 == 0x2) _0x3e7dd1['x'] = _0x3e7dd1[_0x19ee50(0x28e)] + _0x3e7dd1[_0x19ee50(0x190)], _0x3e7dd1['y'] = _0x3e7dd1['startY'];
                    else _0x24def5 == 0x3 && (_0x3e7dd1['x'] = _0x3e7dd1[_0x19ee50(0x28e)], _0x3e7dd1['y'] = _0x3e7dd1['startY'] + _0x3e7dd1[_0x19ee50(0x188)]);
                }
            }
            _0x470c6b[_0x19ee50(0xf2)]({
                'x': _0x3e7dd1['x'],
                'y': _0x3e7dd1['y']
            });
        }
    }
    var _0x119f86 = itemDice['oriX'] + randomIntFromInterval(-0x64, 0x64),
        _0x1ff2f6 = itemDice[_0x19ee50(0x22a)] + randomIntFromInterval(-0x32, 0x32);
    shuffle(_0x470c6b), _0x470c6b[_0x19ee50(0xf2)]({
        'x': _0x119f86,
        'y': _0x1ff2f6
    }), TweenMax['to'](itemDice, 0x1, {
        'bezier': {
            'type': _0x19ee50(0xe7),
            'values': _0x470c6b,
            'curviness': 0x2,
            'autoRotate': ![]
        },
        'ease': Linear[_0x19ee50(0x127)],
        'overwrite': !![],
        'onComplete': rollDiceComplete
    });
}

function rollDiceComplete() {
    var _0x5cfee7 = a0_0x55ac9f;
    showDice(gameData[_0x5cfee7(0x20b)]), typeof initSocket == _0x5cfee7(0x103) && multiplayerSettings['enable'] && socketData[_0x5cfee7(0x136)] ? postSocketUpdate(_0x5cfee7(0x152), {
        'index': socketData['gameIndex']
    }) : rollDiceNext();
}

function rollDiceNext() {
    var _0x5d042b = a0_0x55ac9f,
        _0x3b7e3c = checkIsPlayer(gameData[_0x5d042b(0x14b)]);
    _0x3b7e3c ? (gameData[_0x5d042b(0xe2)] = ![], gameData[_0x5d042b(0x1cf)] = !![], showInstruction(0x2)) : typeof initSocket == _0x5d042b(0x103) && multiplayerSettings[_0x5d042b(0xb9)] && socketData[_0x5d042b(0x136)] ? postSocketUpdate(_0x5d042b(0x152), {
        'index': socketData[_0x5d042b(0x1bc)]
    }) : TweenMax['to'](boardContainer, gameSettings[_0x5d042b(0x171)], {
        'onComplete': function() {
            aiMove();
        }
    });
}

function aiMove() {
    var _0x1e6dcd = a0_0x55ac9f,
        _0x2f1d1f = -0x1;
    if (gameData[_0x1e6dcd(0x1e8)][_0x1e6dcd(0x7d)] > 0x0)
        for (var _0x3853a5 = 0x0; _0x3853a5 < gameData[_0x1e6dcd(0x1e8)][_0x1e6dcd(0x7d)]; _0x3853a5++) {
            var _0x4bc749 = gameData[_0x1e6dcd(0x1e8)][_0x3853a5];
            $[_0x1e6dcd(0x181)][_0x4bc749][_0x1e6dcd(0x193)][_0x1e6dcd(0x1fb)] && $[_0x1e6dcd(0x181)][_0x4bc749][_0x1e6dcd(0x193)][_0x1e6dcd(0xc0)] == gameData[_0x1e6dcd(0x20b)] && (_0x2f1d1f = _0x4bc749, gameData[_0x1e6dcd(0x1e8)][_0x1e6dcd(0x1a2)](_0x3853a5, 0x1), _0x3853a5 = gameData[_0x1e6dcd(0x1e8)][_0x1e6dcd(0x7d)]);
        }
    if (_0x2f1d1f == -0x1) {
        var _0x2057cf = [];
        for (var _0x3853a5 = 0x0; _0x3853a5 < gameData[_0x1e6dcd(0x26a)][_0x1e6dcd(0x7d)]; _0x3853a5++) {
            $['chess'][_0x3853a5]['pieceTop'][_0x1e6dcd(0x1fb)] && gameData['reveals'][_0x1e6dcd(0x26d)](_0x3853a5) == -0x1 && _0x2057cf[_0x1e6dcd(0xf2)](_0x3853a5);
        }
        if (_0x2057cf[_0x1e6dcd(0x7d)] == 0x0)
            for (var _0x3853a5 = 0x0; _0x3853a5 < gameData[_0x1e6dcd(0x26a)][_0x1e6dcd(0x7d)]; _0x3853a5++) {
                $[_0x1e6dcd(0x181)][_0x3853a5][_0x1e6dcd(0x193)][_0x1e6dcd(0x1fb)] && _0x2057cf[_0x1e6dcd(0xf2)](_0x3853a5);
            }
        shuffle(_0x2057cf), _0x2f1d1f = _0x2057cf[0x0];
    }
    showPiece(_0x2f1d1f, $[_0x1e6dcd(0x181)][_0x2f1d1f][_0x1e6dcd(0x193)][_0x1e6dcd(0xc0)]);
}

function nextPlayerTurn() {
    var _0x301b55 = a0_0x55ac9f;
    gameData['player']++, gameData[_0x301b55(0x14b)] = gameData[_0x301b55(0x14b)] > gameData[_0x301b55(0x220)] - 0x1 ? 0x0 : gameData[_0x301b55(0x14b)];
}

function checkIsPlayer(_0x20b52d) {
    var _0x233627 = a0_0x55ac9f,
        _0x5c2fbb = ![];
    if (typeof initSocket == _0x233627(0x103) && multiplayerSettings[_0x233627(0xb9)] && socketData[_0x233627(0x136)]) _0x20b52d == socketData['gameIndex'] && (_0x5c2fbb = !![]);
    else {
        if (gameData['ai']) {
            if (_0x20b52d == 0x0) _0x5c2fbb = !![];
        } else _0x5c2fbb = !![];
    }
    return _0x5c2fbb;
}

function displayPlayerTurn() {
    var _0x225864 = a0_0x55ac9f,
        _0x1def76 = checkIsPlayer(gameData[_0x225864(0x14b)]);
    for (var _0x3736d0 = 0x0; _0x3736d0 < gameData[_0x225864(0x220)]; _0x3736d0++) {
        $[_0x225864(0x220)][_0x3736d0][_0x225864(0xb4)][_0x225864(0x92)] = '', $[_0x225864(0x220)][_0x3736d0][_0x225864(0x157)][_0x225864(0x1fb)] = ![], TweenMax['killTweensOf']($[_0x225864(0x220)][_0x3736d0]['bgPlayerH']);
    }
    $[_0x225864(0x220)][gameData[_0x225864(0x14b)]][_0x225864(0x157)][_0x225864(0x1fb)] = !![], animateBlink($[_0x225864(0x220)][gameData[_0x225864(0x14b)]][_0x225864(0x157)]), _0x1def76 ? $[_0x225864(0x220)][gameData[_0x225864(0x14b)]][_0x225864(0xb4)][_0x225864(0x92)] = textStrings[_0x225864(0x149)] : $[_0x225864(0x220)][gameData[_0x225864(0x14b)]][_0x225864(0xb4)][_0x225864(0x92)] = textStrings[_0x225864(0xd4)], gameData[_0x225864(0x232)] != gameData['player'] && (playSound(_0x225864(0x287)), aniamtePlayerFocus($[_0x225864(0x220)][gameData[_0x225864(0x14b)]])), gameData[_0x225864(0x232)] = gameData[_0x225864(0x14b)], gameData['ai'] && gameData[_0x225864(0x14b)] != 0x0 ? TweenMax['to'](boardContainer, 0.5, {
        'onComplete': function() {
            rollDice(![]);
        }
    }) : _0x1def76 && (gameData['rollCon'] = !![], itemDiceH[_0x225864(0x1fb)] = !![], gameSettings['autoRollDice'] && rollDice(!![]));
}

function animateBlink(_0xd5eaae) {
    var _0x385513 = a0_0x55ac9f;
    _0xd5eaae[_0x385513(0x1ba)] = 0.5;
    var _0x5bf948 = 0.2;
    TweenMax['to'](_0xd5eaae, _0x5bf948, {
        'alpha': 0x1,
        'overwrite': !![],
        'onComplete': function() {
            TweenMax['to'](_0xd5eaae, _0x5bf948, {
                'alpha': 0.5,
                'overwrite': !![],
                'onComplete': animateBlink,
                'onCompleteParams': [_0xd5eaae]
            });
        }
    });
}

function aniamtePlayerFocus(_0x1fcc67) {
    var _0x1a52f9 = a0_0x55ac9f;
    TweenMax['to'](_0x1fcc67, 0.2, {
        'scaleX': 1.3,
        'scaleY': 1.3,
        'ease': Sine[_0x1a52f9(0xee)],
        'overwrite': !![],
        'onComplete': function() {
            var _0x5919ce = _0x1a52f9;
            TweenMax['to'](_0x1fcc67, 0.2, {
                'scaleX': 0x1,
                'scaleY': 0x1,
                'ease': Sine[_0x5919ce(0x297)],
                'overwrite': !![]
            });
        }
    });
}

function getDuration(_0x44e6dd, _0x6b8513) {
    var _0x8a6280 = _0x44e6dd / _0x6b8513;
    return _0x8a6280;
}

function increasePlayerScore(_0x465b48) {
    var _0x3f0810 = a0_0x55ac9f;
    playerData[_0x3f0810(0x243)][gameData[_0x3f0810(0x14b)]]++, playerData[_0x3f0810(0x143)][gameData[_0x3f0810(0x14b)]][_0x465b48]++, updatePlayerScore(gameData[_0x3f0810(0x14b)]);
}

function updatePlayerScore(_0x520f44) {
    var _0x4d0355 = a0_0x55ac9f;
    if (gameData[_0x4d0355(0x168)]['winMode'] == 0x0) $['players'][_0x520f44]['playerScore']['text'] = playerData['scores'][_0x520f44], $[_0x4d0355(0x220)][_0x520f44][_0x4d0355(0x19b)]['text'] = textStrings['scoreType'][gameData[_0x4d0355(0x168)][_0x4d0355(0x9a)]];
    else {
        if (gameData[_0x4d0355(0x168)][_0x4d0355(0x9a)] == 0x1) {
            $[_0x4d0355(0x220)][_0x520f44][_0x4d0355(0x250)]['text'] = 'x' + playerData[_0x4d0355(0x243)][_0x520f44];
            if (playerData['scores'][_0x520f44] == 0x0) $['players'][_0x520f44][_0x4d0355(0x19b)]['text'] = textStrings[_0x4d0355(0x1ae)][gameData[_0x4d0355(0x168)]['winMode']];
            else {
                var _0x52bce1 = 0x0,
                    _0x1dc883 = -0x1;
                for (var _0x38872e = 0x0; _0x38872e < playerData[_0x4d0355(0x143)][_0x520f44][_0x4d0355(0x7d)]; _0x38872e++) {
                    playerData[_0x4d0355(0x143)][_0x520f44][_0x38872e] > _0x52bce1 && (_0x52bce1 = playerData[_0x4d0355(0x143)][_0x520f44][_0x38872e], _0x1dc883 = _0x38872e);
                }
                $['players'][_0x520f44][_0x4d0355(0x250)][_0x4d0355(0x92)] = 'x' + _0x52bce1, $[_0x4d0355(0x220)][_0x520f44]['playerScoreType']['text'] = themesSettings[gameData[_0x4d0355(0xda)]]['colors'][_0x1dc883];
            }
        } else {
            if (gameData[_0x4d0355(0x168)][_0x4d0355(0x9a)] == 0x2) {
                $[_0x4d0355(0x220)][_0x520f44][_0x4d0355(0x250)][_0x4d0355(0x92)] = 'x' + playerData[_0x4d0355(0x243)][_0x520f44];
                if (playerData['scores'][_0x520f44] == 0x0) $[_0x4d0355(0x220)][_0x520f44][_0x4d0355(0x19b)][_0x4d0355(0x92)] = textStrings['scoreType'][gameData[_0x4d0355(0x168)][_0x4d0355(0x9a)]];
                else {
                    var _0x29a413 = 0x0;
                    for (var _0x38872e = 0x0; _0x38872e < playerData['colors'][_0x520f44][_0x4d0355(0x7d)]; _0x38872e++) {
                        playerData[_0x4d0355(0x143)][_0x520f44][_0x38872e] > 0x0 && _0x29a413++;
                    }
                    $[_0x4d0355(0x220)][_0x520f44][_0x4d0355(0x250)][_0x4d0355(0x92)] = 'x' + _0x29a413;
                }
            }
        }
    }
}

function showInstruction(_0x2fdff4) {
    var _0x5c76f8 = a0_0x55ac9f;
    if (gameData[_0x5c76f8(0x11d)] >= 0x2) return;
    var _0x4a857c = checkIsPlayer(gameData['player']);
    if (!_0x4a857c) return;
    gameData[_0x5c76f8(0x11d)]++, itemInstruct['visible'] = ![], instructTxt[_0x5c76f8(0x1fb)] = ![], itemInstruct2[_0x5c76f8(0x1fb)] = ![], instructTxt2['visible'] = ![];
    var _0x309c09 = 1.5;
    _0x2fdff4 == 0x1 ? (itemInstruct['visible'] = !![], instructTxt[_0x5c76f8(0x1fb)] = !![]) : (_0x309c09 = 0x2, itemInstruct2[_0x5c76f8(0x1fb)] = !![], instructTxt2[_0x5c76f8(0x1fb)] = !![]), instructionContainer[_0x5c76f8(0x1ba)] = 0x0, TweenMax['to'](instructionContainer, 0.5, {
        'alpha': 0x1,
        'overwrite': !![],
        'onComplete': function() {
            TweenMax['to'](instructionContainer, 0.5, {
                'delay': _0x309c09,
                'alpha': 0x0,
                'overwrite': !![],
                'onComplete': function() {}
            });
        }
    });
}

function showEndStatus() {
    var _0x2efa59 = a0_0x55ac9f;
    playSound(_0x2efa59(0x15f));
    var _0x3184a2 = ![],
        _0x33f4a6 = 0x0,
        _0x4b842f = 0x0;
    for (var _0x9eaaa1 = 0x0; _0x9eaaa1 < gameData['players']; _0x9eaaa1++) {
        _0x4b842f < playerData[_0x2efa59(0x243)][_0x9eaaa1] && (_0x4b842f = playerData[_0x2efa59(0x243)][_0x9eaaa1], _0x33f4a6 = _0x9eaaa1);
    }
    var _0x277a6e = ![];
    if (typeof initSocket == _0x2efa59(0x103) && multiplayerSettings[_0x2efa59(0xb9)] && socketData[_0x2efa59(0x136)]) gameData['settings'][_0x2efa59(0x9a)] == 0x0 ? _0x33f4a6 == socketData[_0x2efa59(0x1bc)] && (_0x277a6e = !![]) : gameData[_0x2efa59(0x29a)] == socketData[_0x2efa59(0x1bc)] && (_0x277a6e = !![]);
    else {
        if (gameData[_0x2efa59(0x168)][_0x2efa59(0x9a)] == 0x0) {
            if (gameData['ai']) {
                if (_0x33f4a6 == 0x0) _0x277a6e = !![];
            }
        } else {
            if (gameData['ai']) {
                if (gameData[_0x2efa59(0x29a)] == 0x0) _0x277a6e = !![];
            }
        }
    }
    if (gameData['settings'][_0x2efa59(0x9a)] == 0x0) {
        if (_0x277a6e) var _0x3dd1ce = textStrings[_0x2efa59(0x135)];
        else var _0x3dd1ce = textStrings[_0x2efa59(0x29a)][_0x2efa59(0x177)]('[NAME]', $[_0x2efa59(0x220)][_0x33f4a6]['playerName'][_0x2efa59(0x92)]);
    } else {
        if (gameData['playerWin'] == -0x1) _0x3184a2 = !![];
        else {
            if (_0x277a6e) var _0x3dd1ce = textStrings['youWin'];
            else var _0x3dd1ce = textStrings[_0x2efa59(0x29a)][_0x2efa59(0x177)]('[NAME]', $[_0x2efa59(0x220)][_0x33f4a6]['playerName'][_0x2efa59(0x92)]);
        }
    }
    _0x3184a2 ? (statusTxt[_0x2efa59(0x92)] = textStrings['gameDraw'], statusWinTxt[_0x2efa59(0x92)] = textStrings[_0x2efa59(0x17e)]) : (statusTxt['text'] = textStrings[_0x2efa59(0x26c)], statusWinTxt[_0x2efa59(0x92)] = _0x3dd1ce), statusWinRuleTxt[_0x2efa59(0x92)] = textStrings['winRules'][gameData[_0x2efa59(0x168)][_0x2efa59(0x9a)]], TweenMax['to'](statusContainer, 0x1, {
        'alpha': 0x1,
        'overwrite': !![]
    });
}

function updateGame() {
    var _0x1dcdfc = a0_0x55ac9f;
    if (!gameData[_0x1dcdfc(0x160)]) {
        gameData[_0x1dcdfc(0xe2)] && (itemDiceH[_0x1dcdfc(0x1ba)] = animateData[_0x1dcdfc(0x1ba)]);
        if (gameData[_0x1dcdfc(0x1cf)])
            for (var _0x104e36 = 0x0; _0x104e36 < gameData['pieces'][_0x1dcdfc(0x7d)]; _0x104e36++) {
                $['chess'][_0x104e36][_0x1dcdfc(0x193)]['visible'] && ($[_0x1dcdfc(0x181)][_0x1dcdfc(0x7f) + _0x104e36]['visible'] = !![], $[_0x1dcdfc(0x181)][_0x1dcdfc(0x7f) + _0x104e36][_0x1dcdfc(0x1ba)] = animateData['alpha'], $[_0x1dcdfc(0x181)][_0x104e36][_0x1dcdfc(0x293)][_0x1dcdfc(0x1fb)] = !![], $['chess'][_0x104e36][_0x1dcdfc(0x293)][_0x1dcdfc(0x1ba)] = 0x0);
            }
        itemDiceShadow['x'] = itemDiceH['x'] = itemDice['x'], itemDiceShadow['y'] = itemDiceH['y'] = itemDice['y'];
    }
}

function endGame() {
    var _0x5b3b30 = a0_0x55ac9f;
    gameData[_0x5b3b30(0x160)] = !![], TweenMax['to'](gameContainer, 0x4, {
        'overwrite': !![],
        'onComplete': function() {
            var _0x437865 = _0x5b3b30;
            goPage(_0x437865(0x2a7));
        }
    });
}

function millisecondsToTimeGame(_0x307a9e) {
    var _0x3d7cb0 = a0_0x55ac9f,
        _0x5c81e3 = _0x307a9e % 0x3e8,
        _0x1a41ba = Math[_0x3d7cb0(0x1fa)](_0x307a9e / 0x3e8 % 0x3c),
        _0x12d392 = Math['floor'](_0x307a9e / (0x3c * 0x3e8) % 0x3c);
    return _0x1a41ba < 0xa && (_0x1a41ba = '0' + _0x1a41ba), _0x12d392 < 0xa && (_0x12d392 = '0' + _0x12d392), _0x12d392 + ':' + _0x1a41ba;
}

function toggleOptions(_0x3c5e90) {
    var _0x2046c5 = a0_0x55ac9f;
    optionsContainer[_0x2046c5(0x1fb)] ? optionsContainer[_0x2046c5(0x1fb)] = ![] : optionsContainer[_0x2046c5(0x1fb)] = !![], _0x3c5e90 != undefined && (optionsContainer[_0x2046c5(0x1fb)] = _0x3c5e90);
}

function toggleSoundMute(_0x5e401c) {
    var _0x5d4b3a = a0_0x55ac9f;
    buttonSoundOff[_0x5d4b3a(0x1fb)] = ![], buttonSoundOn[_0x5d4b3a(0x1fb)] = ![], toggleSoundInMute(_0x5e401c), _0x5e401c ? buttonSoundOn[_0x5d4b3a(0x1fb)] = !![] : buttonSoundOff[_0x5d4b3a(0x1fb)] = !![];
}

function toggleMusicMute(_0x5071cf) {
    var _0x545d8b = a0_0x55ac9f;
    buttonMusicOff['visible'] = ![], buttonMusicOn['visible'] = ![], toggleMusicInMute(_0x5071cf), _0x5071cf ? buttonMusicOn[_0x545d8b(0x1fb)] = !![] : buttonMusicOff['visible'] = !![];
}

function toggleFullScreen() {
    var _0x48d417 = a0_0x55ac9f;
    if (!document['fullscreenElement'] && !document[_0x48d417(0x141)] && !document[_0x48d417(0x21e)] && !document[_0x48d417(0x1da)]) {
        if (document[_0x48d417(0xe8)][_0x48d417(0x182)]) document[_0x48d417(0xe8)][_0x48d417(0x182)]();
        else {
            if (document[_0x48d417(0xe8)][_0x48d417(0x8c)]) document[_0x48d417(0xe8)][_0x48d417(0x8c)]();
            else {
                if (document[_0x48d417(0xe8)][_0x48d417(0x16f)]) document['documentElement'][_0x48d417(0x16f)]();
                else document[_0x48d417(0xe8)][_0x48d417(0x1f7)] && document['documentElement'][_0x48d417(0x1f7)](Element[_0x48d417(0xe6)]);
            }
        }
    } else {
        if (document[_0x48d417(0x11a)]) document[_0x48d417(0x11a)]();
        else {
            if (document[_0x48d417(0x29f)]) document[_0x48d417(0x29f)]();
            else {
                if (document[_0x48d417(0x1d7)]) document['mozCancelFullScreen']();
                else document['webkitExitFullscreen'] && document[_0x48d417(0x137)]();
            }
        }
    }
}

function shareLinks(_0x290f3f, _0x1728b5) {
    var _0x267aad = a0_0x55ac9f;
    shareSettings[_0x267aad(0xa8)] && gtag(_0x267aad(0xd9), _0x267aad(0x261), {
        'event_category': _0x267aad(0x1de),
        'event_label': _0x290f3f
    });
    var _0x2e07f6 = location[_0x267aad(0x267)];
    _0x2e07f6 = encodeURIComponent(_0x2e07f6[_0x267aad(0xf1)](0x0, _0x2e07f6[_0x267aad(0x29d)]('/') + 0x1));
    var _0x2f55e6 = shareSettings[_0x267aad(0x228)]['replace'](_0x267aad(0x229), _0x1728b5),
        _0x3354af = shareSettings[_0x267aad(0xf9)][_0x267aad(0x177)]('[SCORE]', _0x1728b5),
        _0x13f494 = '';
    if (_0x290f3f == 'facebook') shareSettings[_0x267aad(0x21d)] ? (_0x2e07f6 = decodeURIComponent(_0x2e07f6), _0x13f494 = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(_0x2e07f6 + _0x267aad(0xc8) + _0x2f55e6 + _0x267aad(0x14d) + _0x2e07f6 + _0x267aad(0x1aa) + _0x2e07f6 + _0x267aad(0x9b))) : _0x13f494 = 'https://www.facebook.com/sharer/sharer.php?u=' + _0x2e07f6;
    else {
        if (_0x290f3f == 'twitter') _0x13f494 = 'https://twitter.com/intent/tweet?text=' + _0x3354af + '&url=' + _0x2e07f6;
        else {
            if (_0x290f3f == _0x267aad(0x224)) _0x13f494 = _0x267aad(0x218) + _0x3354af + '%20' + _0x2e07f6;
            else {
                if (_0x290f3f == _0x267aad(0x10c)) _0x13f494 = _0x267aad(0x256) + _0x2e07f6 + _0x267aad(0x18a) + _0x3354af;
                else {
                    if (_0x290f3f == _0x267aad(0x19f)) _0x13f494 = _0x267aad(0x172) + _0x2e07f6 + _0x267aad(0xbd) + _0x3354af;
                    else _0x290f3f == _0x267aad(0x15e) && (_0x13f494 = _0x267aad(0x183) + _0x2e07f6);
                }
            }
        }
    }
    window[_0x267aad(0x12b)](_0x13f494);
}
var stageWidth, stageHeight = 0x0,
    isLoaded = ![];
$(function() {
    var _0x2021dd = a0_0x55ac9f,
        _0xfa4545 = function() {
            var _0x223c32 = a0_0x5853;
            try {
                createjs['WebAudioPlugin'][_0x223c32(0x23c)][_0x223c32(0x246)] === 'suspended' && (createjs[_0x223c32(0x9e)][_0x223c32(0x23c)][_0x223c32(0x1fc)](), window[_0x223c32(0x1e4)]('click', _0xfa4545));
            } catch (_0x5a5586) {
                console[_0x223c32(0x161)](_0x223c32(0x12f)), console['error'](_0x5a5586);
            }
        };
    window[_0x2021dd(0x20e)](_0x2021dd(0x261), _0xfa4545), window[_0x2021dd(0xce)][_0x2021dd(0x192)][_0x2021dd(0x1c1)](0x0, 0x4) === _0x2021dd(0x249) && alert('To\x20install\x20the\x20game\x20just\x20upload\x20folder\x20\x27game\x27\x20to\x20your\x20server.\x20The\x20game\x20won\x27t\x20run\x20locally\x20with\x20some\x20browser\x20like\x20Chrome\x20due\x20to\x20some\x20security\x20mode.'), $(window)[_0x2021dd(0x22c)](function() {
        resizeLoaderFunc();
    }), resizeLoaderFunc(), checkBrowser();
});

function resizeLoaderFunc() {
    var _0x4b33ec = a0_0x55ac9f;
    stageWidth = $(window)[_0x4b33ec(0xcc)](), stageHeight = $(window)['height'](), $(_0x4b33ec(0x296))[_0x4b33ec(0x204)]('left', checkContentWidth($(_0x4b33ec(0x296)))), $(_0x4b33ec(0x296))['css'](_0x4b33ec(0x186), checkContentHeight($(_0x4b33ec(0x296)))), $(_0x4b33ec(0x23b))[_0x4b33ec(0x204)](_0x4b33ec(0x1ac), checkContentWidth($(_0x4b33ec(0x296)))), $(_0x4b33ec(0x23b))['css'](_0x4b33ec(0x186), checkContentHeight($(_0x4b33ec(0x296))));
}
var browserSupport = ![],
    isMobile, isTablet, isDesktop;

function checkBrowser() {
    var _0x22681e = a0_0x55ac9f;
    if (typeof MobileDetect === _0x22681e(0x103)) {
        var _0x14d8b4 = new MobileDetect(window['navigator']['userAgent']);
        isMobile = _0x14d8b4['mobile'](), isTablet = _0x14d8b4['tablet'](), isMobile == null && isTablet == null && (isDesktop = !![]);
    }
    var _0x5e5d15 = document[_0x22681e(0x223)](_0x22681e(0x27e));
    _0x5e5d15[_0x22681e(0x1c8)] && (browserSupport = !![]), browserSupport ? !isLoaded && (isLoaded = !![], initPreload()) : $(_0x22681e(0x23b))['show']();
}

function initPreload() {
    var _0x34a407 = a0_0x55ac9f;
    toggleLoader(!![]), checkMobileEvent(), $(window)[_0x34a407(0x22c)](function() {
        clearTimeout(resizeTimer), resizeTimer = setTimeout(checkMobileOrientation, 0x3e8);
    }), resizeGameFunc(), loader = new createjs[(_0x34a407(0x27b))](![]), manifest = [{
        'src': _0x34a407(0xfc),
        'id': _0x34a407(0xec)
    }, {
        'src': _0x34a407(0x117),
        'id': _0x34a407(0x113)
    }, {
        'src': _0x34a407(0x10e),
        'id': 'logo'
    }, {
        'src': _0x34a407(0xa0),
        'id': 'logoP'
    }, {
        'src': _0x34a407(0x13f),
        'id': 'buttonPlay'
    }, {
        'src': _0x34a407(0x19e),
        'id': _0x34a407(0x116)
    }, {
        'src': _0x34a407(0x13e),
        'id': _0x34a407(0x16a)
    }, {
        'src': _0x34a407(0x84),
        'id': 'buttonOnline'
    }, {
        'src': _0x34a407(0x1c2),
        'id': _0x34a407(0x1a1)
    }, {
        'src': _0x34a407(0xc9),
        'id': _0x34a407(0x24e)
    }, {
        'src': _0x34a407(0xa9),
        'id': _0x34a407(0x29c)
    }, {
        'src': 'assets/item_tutorial_2.png',
        'id': _0x34a407(0x1b6)
    }, {
        'src': _0x34a407(0x1ce),
        'id': 'itemTutorial3'
    }, {
        'src': _0x34a407(0x1f6),
        'id': _0x34a407(0x274)
    }, {
        'src': _0x34a407(0x201),
        'id': 'itemTutorial5'
    }, {
        'src': 'assets/item_tutorial_6.png',
        'id': 'itemTutorial6'
    }, {
        'src': 'assets/item_options.png',
        'id': 'itemOptions'
    }, {
        'src': _0x34a407(0x1ad),
        'id': _0x34a407(0x175)
    }, {
        'src': 'assets/button_arrow_right.png',
        'id': 'buttonArrowRight'
    }, {
        'src': _0x34a407(0xbc),
        'id': _0x34a407(0x22d)
    }, {
        'src': _0x34a407(0x26e),
        'id': _0x34a407(0x1d8)
    }, {
        'src': _0x34a407(0xd7),
        'id': _0x34a407(0x1b3)
    }, {
        'src': _0x34a407(0x259),
        'id': _0x34a407(0x199)
    }, {
        'src': _0x34a407(0x18b),
        'id': _0x34a407(0x1bd)
    }, {
        'src': _0x34a407(0x13b),
        'id': _0x34a407(0x279)
    }, {
        'src': 'assets/item_instruct.png',
        'id': _0x34a407(0x212)
    }, {
        'src': 'assets/item_instruct2.png',
        'id': _0x34a407(0x272)
    }, {
        'src': 'assets/button_share.png',
        'id': _0x34a407(0x219)
    }, {
        'src': 'assets/button_save.png',
        'id': 'buttonSave'
    }, {
        'src': _0x34a407(0x231),
        'id': _0x34a407(0x284)
    }, {
        'src': _0x34a407(0x90),
        'id': _0x34a407(0xb0)
    }, {
        'src': _0x34a407(0x217),
        'id': 'buttonWhatsapp'
    }, {
        'src': _0x34a407(0x271),
        'id': _0x34a407(0x154)
    }, {
        'src': _0x34a407(0x21a),
        'id': _0x34a407(0x28f)
    }, {
        'src': _0x34a407(0x85),
        'id': _0x34a407(0x254)
    }, {
        'src': _0x34a407(0x268),
        'id': _0x34a407(0x20d)
    }, {
        'src': _0x34a407(0xd6),
        'id': _0x34a407(0x270)
    }, {
        'src': _0x34a407(0x263),
        'id': _0x34a407(0x2a4)
    }, {
        'src': _0x34a407(0x120),
        'id': 'buttonConfirm'
    }, {
        'src': 'assets/button_cancel.png',
        'id': 'buttonCancel'
    }, {
        'src': 'assets/button_fullscreen.png',
        'id': _0x34a407(0x236)
    }, {
        'src': 'assets/button_sound_on.png',
        'id': _0x34a407(0x292)
    }, {
        'src': _0x34a407(0x299),
        'id': _0x34a407(0xdc)
    }, {
        'src': _0x34a407(0x151),
        'id': _0x34a407(0x112)
    }, {
        'src': _0x34a407(0x130),
        'id': _0x34a407(0x138)
    }, {
        'src': 'assets/button_exit.png',
        'id': _0x34a407(0xb7)
    }, {
        'src': _0x34a407(0x1c3),
        'id': _0x34a407(0x128)
    }];
    for (var _0x45936e = 0x0; _0x45936e < themesSettings[_0x34a407(0x7d)]; _0x45936e++) {
        manifest[_0x34a407(0xf2)]({
            'src': themesSettings[_0x45936e][_0x34a407(0x1b9)],
            'id': _0x34a407(0x1b9) + _0x45936e
        }), manifest[_0x34a407(0xf2)]({
            'src': themesSettings[_0x45936e][_0x34a407(0x184)],
            'id': _0x34a407(0x184) + _0x45936e
        }), manifest['push']({
            'src': themesSettings[_0x45936e][_0x34a407(0x1dd)],
            'id': _0x34a407(0x1dd) + _0x45936e
        }), manifest[_0x34a407(0xf2)]({
            'src': themesSettings[_0x45936e]['diceHighlight'],
            'id': _0x34a407(0x25f) + _0x45936e
        });
        for (var _0x486c15 = 0x0; _0x486c15 < themesSettings[_0x45936e][_0x34a407(0x1c5)]['length']; _0x486c15++) {
            manifest['push']({
                'src': themesSettings[_0x45936e][_0x34a407(0x1c5)][_0x486c15],
                'id': 'board' + _0x45936e + '_' + _0x486c15
            });
        }
        for (var _0x486c15 = 0x0; _0x486c15 < themesSettings[_0x45936e]['pieceTop'][_0x34a407(0x7d)]; _0x486c15++) {
            manifest[_0x34a407(0xf2)]({
                'src': themesSettings[_0x45936e][_0x34a407(0x193)][_0x486c15]['src'],
                'id': 'pieceTop' + _0x45936e + '_' + _0x486c15
            });
        }
        for (var _0x486c15 = 0x0; _0x486c15 < themesSettings[_0x45936e]['pieceBottom'][_0x34a407(0x7d)]; _0x486c15++) {
            manifest['push']({
                'src': themesSettings[_0x45936e][_0x34a407(0x1e9)][_0x486c15][_0x34a407(0x7e)],
                'id': _0x34a407(0x1e9) + _0x45936e + '_' + _0x486c15
            });
        }
    }
    typeof addScoreboardAssets == _0x34a407(0x103) && addScoreboardAssets(), audioOn = !![], !isDesktop ? !enableMobileAudio && (audioOn = ![]) : !enableDesktopAudio && (audioOn = ![]), audioOn && (manifest[_0x34a407(0xf2)]({
        'src': 'assets/sounds/sound_click.ogg',
        'id': _0x34a407(0x252)
    }), manifest[_0x34a407(0xf2)]({
        'src': _0x34a407(0x239),
        'id': 'soundDice'
    }), manifest[_0x34a407(0xf2)]({
        'src': 'assets/sounds/sound_result.ogg',
        'id': _0x34a407(0x1a0)
    }), manifest['push']({
        'src': _0x34a407(0x16e),
        'id': _0x34a407(0x275)
    }), manifest['push']({
        'src': _0x34a407(0xff),
        'id': 'soundWin'
    }), manifest[_0x34a407(0xf2)]({
        'src': _0x34a407(0x248),
        'id': _0x34a407(0xa2)
    }), manifest[_0x34a407(0xf2)]({
        'src': _0x34a407(0x17a),
        'id': _0x34a407(0x1ea)
    }), manifest[_0x34a407(0xf2)]({
        'src': _0x34a407(0x251),
        'id': _0x34a407(0x287)
    }), manifest['push']({
        'src': _0x34a407(0xf5),
        'id': _0x34a407(0xf6)
    }), manifest['push']({
        'src': _0x34a407(0x1a7),
        'id': _0x34a407(0x170)
    }), manifest[_0x34a407(0xf2)]({
        'src': _0x34a407(0x169),
        'id': _0x34a407(0x124)
    }), manifest[_0x34a407(0xf2)]({
        'src': _0x34a407(0x1a4),
        'id': _0x34a407(0x1e3)
    }), manifest[_0x34a407(0xf2)]({
        'src': _0x34a407(0x109),
        'id': _0x34a407(0x1ef)
    }), manifest[_0x34a407(0xf2)]({
        'src': _0x34a407(0x101),
        'id': _0x34a407(0x27c)
    }), createjs[_0x34a407(0x121)]['alternateExtensions'] = [_0x34a407(0xa5)], loader[_0x34a407(0x24f)](createjs[_0x34a407(0x121)])), loader['addEventListener']('complete', handleComplete), loader[_0x34a407(0x20e)](_0x34a407(0x104), fileComplete), loader[_0x34a407(0x20e)]('error', handleFileError), loader['on'](_0x34a407(0x23f), handleProgress, this), loader[_0x34a407(0xc3)](manifest);
}

function fileComplete(_0x5b7d36) {
    var _0x3145e6 = a0_0x55ac9f,
        _0x2dc5d0 = _0x5b7d36[_0x3145e6(0x1f5)];
}

function handleFileError(_0xeb03a6) {
    var _0x48d567 = a0_0x55ac9f;
    console[_0x48d567(0x205)](_0x48d567(0x176), _0xeb03a6);
}

function handleProgress() {
    var _0x1d707c = a0_0x55ac9f;
    $(_0x1d707c(0xe5))[_0x1d707c(0x180)](Math['round'](loader[_0x1d707c(0x23f)] / 0x1 * 0x64) + '%');
}

function handleComplete() {
    toggleLoader(![]), initMain();
};

function toggleLoader(_0x38eded) {
    var _0x1b4589 = a0_0x55ac9f;
    _0x38eded ? $('#mainLoader')[_0x1b4589(0xb8)]() : $(_0x1b4589(0x296))[_0x1b4589(0x290)]();
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
    var _0x26080e = a0_0x55ac9f;
    isDesktop && $(_0x26080e(0x1b7))[_0x26080e(0xb8)](), initGameCanvas(stageW, stageH), buildGameCanvas(), buildGameButton(), typeof buildScoreBoardCanvas == _0x26080e(0x103) && buildScoreBoardCanvas(), goPage(_0x26080e(0x1e5)), typeof initSocket == 'function' && multiplayerSettings[_0x26080e(0xb9)] && initSocket('memorychess'), checkMobileOrientation(), resizeCanvas();
}
var windowW = windowH = 0x0,
    scalePercent = 0x0;
const dpr = window[a0_0x55ac9f(0xe9)] || 0x1,
    offset = {
        'x': 0x0,
        'y': 0x0,
        'left': 0x0,
        'top': 0x0
    };

function resizeGameFunc() {
    setTimeout(function() {
        var _0x2a6403 = a0_0x5853;
        $(_0x2a6403(0x234))['css'](_0x2a6403(0x1ac), checkContentWidth($(_0x2a6403(0x234)))), $(_0x2a6403(0x234))[_0x2a6403(0x204)](_0x2a6403(0x186), checkContentHeight($(_0x2a6403(0x234)))), windowW = window[_0x2a6403(0x164)], windowH = window[_0x2a6403(0x1f1)], scalePercent = Math['min'](windowW / contentW, windowH / contentH), scalePercent = scalePercent > 0x1 ? 0x1 : scalePercent;
        windowW > stageW && windowH > stageH && (windowW > stageW && (scalePercent = windowW / stageW, stageH * scalePercent > windowH && (scalePercent = windowH / stageH)));
        const _0x3229d1 = stageW * scalePercent,
            _0xc957d6 = stageH * scalePercent;
        offset['left'] = 0x0, offset[_0x2a6403(0x186)] = 0x0;
        _0x3229d1 > windowW ? offset[_0x2a6403(0x1ac)] = -(_0x3229d1 - windowW) : offset[_0x2a6403(0x1ac)] = windowW - _0x3229d1;
        _0xc957d6 > windowH ? offset[_0x2a6403(0x186)] = -(_0xc957d6 - windowH) : offset['top'] = windowH - _0xc957d6;
        offset['x'] = 0x0, offset['y'] = 0x0;
        offset[_0x2a6403(0x1ac)] < 0x0 && (offset['x'] = Math[_0x2a6403(0x1af)](offset[_0x2a6403(0x1ac)] / scalePercent / 0x2));
        offset[_0x2a6403(0x186)] < 0x0 && (offset['y'] = Math[_0x2a6403(0x1af)](offset[_0x2a6403(0x186)] / scalePercent / 0x2));
        const _0x3479ea = document[_0x2a6403(0x18f)]('gameCanvas'),
            _0x2d1e89 = _0x3479ea[_0x2a6403(0x1c8)]('2d');
        _0x3479ea[_0x2a6403(0x80)]['width'] = _0x3229d1 + 'px', _0x3479ea[_0x2a6403(0x80)][_0x2a6403(0xb6)] = _0xc957d6 + 'px', _0x3479ea[_0x2a6403(0x80)][_0x2a6403(0x1ac)] = offset[_0x2a6403(0x1ac)] / 0x2 + 'px', _0x3479ea[_0x2a6403(0x80)][_0x2a6403(0x186)] = offset['top'] / 0x2 + 'px', _0x3479ea[_0x2a6403(0xcc)] = stageW * dpr, _0x3479ea[_0x2a6403(0xb6)] = stageH * dpr, typeof initSocket == _0x2a6403(0x103) && multiplayerSettings[_0x2a6403(0xb9)] && ($(_0x2a6403(0x288))[_0x2a6403(0x262)](function(_0x151137, _0x30617b) {
            var _0x19783a = _0x2a6403;
            $(this)[_0x19783a(0x204)](_0x19783a(0x1f3), Math[_0x19783a(0xb1)](Number($(this)[_0x19783a(0xa3)](_0x19783a(0x21c))) * scalePercent));
        }), $(_0x2a6403(0x1d5))[_0x2a6403(0x204)](_0x2a6403(0xcc), _0x3229d1), $(_0x2a6403(0x1d5))[_0x2a6403(0x204)](_0x2a6403(0xb6), _0xc957d6), $(_0x2a6403(0x1d5))['css']('left', offset[_0x2a6403(0x1ac)] / 0x2), $(_0x2a6403(0x1d5))[_0x2a6403(0x204)]('top', offset[_0x2a6403(0x186)] / 0x2), $('#notificationHolder')['css'](_0x2a6403(0xcc), _0x3229d1), $(_0x2a6403(0x146))[_0x2a6403(0x204)](_0x2a6403(0xb6), _0xc957d6), $(_0x2a6403(0x146))[_0x2a6403(0x204)](_0x2a6403(0x1ac), offset[_0x2a6403(0x1ac)] / 0x2), $(_0x2a6403(0x146))['css'](_0x2a6403(0x186), offset[_0x2a6403(0x186)] / 0x2)), $(window)[_0x2a6403(0x119)](0x0), resizeCanvas(), typeof resizeScore == _0x2a6403(0x103) && resizeScore();
    }, 0x64);
}
var resizeTimer;

function checkMobileEvent() {
    var _0x4346e4 = a0_0x55ac9f;
    !isDesktop && ($(window)[_0x4346e4(0x123)](_0x4346e4(0xa4))['on']('orientationchange', function(_0x2706c0) {
        var _0x5ae9b0 = _0x4346e4;
        $(_0x5ae9b0(0x1b7))[_0x5ae9b0(0x290)](), $(_0x5ae9b0(0x244))['hide'](), clearTimeout(resizeTimer), resizeTimer = setTimeout(checkMobileOrientation, 0x3e8);
    }), checkMobileOrientation());
}

function checkMobileOrientation() {
    var _0xc99b8c = a0_0x55ac9f,
        _0x381b86 = ![];
    window['innerWidth'] > window['innerHeight'] && (_0x381b86 = !![]), $[_0xc99b8c(0x18d)][_0xc99b8c(0xb9)] ? viewport[_0xc99b8c(0x1c4)] = edit[_0xc99b8c(0x1c4)] : viewport[_0xc99b8c(0x1c4)] = _0x381b86, changeViewport(viewport[_0xc99b8c(0x1c4)]), resizeGameFunc(), $(_0xc99b8c(0x1b7))[_0xc99b8c(0xb8)]();
}

function toggleRotate(_0x3a9db5) {
    var _0x520e70 = a0_0x55ac9f;
    _0x3a9db5 ? $(_0x520e70(0x244))[_0x520e70(0x226)]() : $('#rotateHolder')['fadeOut'](), resizeGameFunc();
}

function checkContentHeight(_0x1610a3) {
    var _0x3e0b99 = a0_0x55ac9f,
        _0x302fcc = $(window)[_0x3e0b99(0xb6)](),
        _0x5aa8b5 = _0x302fcc / 0x2 - _0x1610a3['height']() / 0x2;
    return _0x5aa8b5;
}

function a0_0x1e69() {
    var _0x37ade5 = ['lastThemeIndex', 'assets/chess_01_d.png', 'open', 'type', '#namelists', '399220EVWoed', 'There\x20was\x20an\x20error\x20while\x20trying\x20to\x20resume\x20the\x20SoundJS\x20Web\x20Audio\x20context...', 'assets/button_music_off.png', 'test', 'GAME\x20DRAW', 'assets/chess_03_f.png', '785GiGeMo', 'youWin', 'online', 'webkitExitFullscreen', 'buttonMusicOff', 'twitter', 'rollTime', 'assets/item_status.png', '22px\x20bpreplaybold', '4\x20same\x20color\x20pieces', 'assets/button_next.png', 'assets/button_play.png', 'tick', 'mozFullScreenElement', 'playerName', 'colors', 'assets/chess_03_b.png', 'assets/chess_04_b.png', '#notificationHolder', '21438nEpzUY', 'middle', 'userTurn', 'Shape', 'player', 'beginFill', '&url=', 'sizeIndex', 'volume', 'chessIndex', 'assets/button_music_on.png', 'rolldicecomplete', 'assets/board_hole_02_h.png', 'buttonTelegram', 'proceedrolldice', 'toUpperCase', 'bgPlayerH', 'memorychess', 'addClass', 'horizontal', 'assets/board_03_a.png', 'Container', 'addChild', 'linkedin', 'soundWin', 'paused', 'error', '#roomWrapper\x20.innerContent', 'pieceColors', 'innerWidth', 'assets/chess_05_d.png', 'PLAYER\x20[NUMBER]', '#18283c', 'settings', 'assets/sounds/sound_pick2.ogg', 'buttonNext', '[NAME]\x20WIN', 'soundPick', 'textBaseline', 'assets/sounds/sound_start.ogg', 'mozRequestFullScreen', 'soundPick1', 'aiThinkSpeed', 'https://www.reddit.com/submit?url=', 'Highscore\x20on\x20Memory\x20Chess\x20is\x20[SCORE]\x20pieces', 'updateoptions', 'buttonArrowLeft', 'error\x20', 'replace', 'NO\x20PLAYER\x20WIN', 'assets/chess_05_d_b.png', 'assets/sounds/sound_incorrect.ogg', 'sizes', 'degree', 'defaultVol', 'noPlayerWin', 'assets/board_hole_03.png', 'html', 'chess', 'requestFullscreen', 'https://www.linkedin.com/sharing/share-offsite/?url=', 'holeHighlight', 'split', 'top', 'alphabetic', 'radiusY', 'local', '&text=', 'assets/item_player_h.png', '23px\x20bpreplaybold', 'editor', 'cursor', 'getElementById', 'radiusX', '18aoFQmj', 'protocol', 'pieceTop', 'buttonOnline', 'assets/item_dice_02.png', 'showColorPickSpeed', 'scaleX', 'assets/chess_04_a.png', 'itemPlayer', 'center', 'playerScoreType', 'board', 'showColorTime', 'assets/button_start.png', 'reddit', 'soundResult', 'buttonLocal', 'splice', 'focus', 'assets/sounds/sound_pick3.ogg', 'killAll', 'itemOptions', 'assets/sounds/sound_pick1.ogg', 'spaceX', 'button', '&thumb=', 'exitTitle', 'left', 'assets/button_arrow_left.png', 'scoreType', 'abs', 'update', '105yylYmh', 'RED', 'itemDiceShadow', 'assets/item_dice_05_h.png', 'ROLL\x20DICE\x20TO\x20BEGIN', 'itemTutorial2', '#canvasHolder', 'removeAllEventListeners', 'hole', 'alpha', 'image', 'gameIndex', 'itemPlayerH', 'assets/chess_02_f_b.png', 'assets/board_05_a.png', 'buttonArrowRight', 'substr', 'assets/button_local.png', 'assets/button_settings.png', 'isLandscape', 'boards', '127930gzhEqY', 'assets/chess_02_e.png', 'getContext', 'start', 'game', 'Touch', 'random', 'minPlayers', 'assets/item_tutorial_3.png', 'piecesCon', 'assets/chess_01_f_b.png', 'buttonConfirm', 'assets/chess_01_a.png', 'assets/chess_02_f.png', 'assets/board_04_b.png', '#roomWrapper', '1107650TWPiOh', 'mozCancelFullScreen', 'itemNumber', 'assets/chess_04_f_b.png', 'msFullscreenElement', 'assets/chess_01_c_b.png', 'autoClear', 'dice', 'share', 'drawRect', 'row', 'Largest\x20number\x20of\x20pieces', 'assets/chess_05_c_b.png', 'soundPick3', 'removeEventListener', 'main', 'assets/board_hole_04_h.png', 'YELLOW', 'reveals', 'pieceBottom', 'soundIncorrect', 'currentTarget', 'showColorDownSpeed', 'getResult', '2PSEGaJ', 'musicGame', '#roomLogs', 'innerHeight', 'complete', 'font-size', 'names', 'item', 'assets/item_tutorial_4.png', 'webkitRequestFullscreen', 'pickSpeed', 'instruction1', 'floor', 'visible', 'resume', 'gameCanvas', 'GAME\x20OVER', 'stop', 'cos', 'assets/item_tutorial_5.png', 'target', 'assets/chess_03_c.png', 'css', 'log', 'size', 'animating', 'pow', 'font', 'assets/chess_03_e.png', 'diceIndex', 'column', 'buttonContinue', 'addEventListener', '#64F8FF', 'ratio', 'pieceTarget', 'itemInstruct', 'YOUR\x20TURN', 'PIECES', 'assets/board_01_b.png', 'buttonSave', 'assets/social/button_whatsapp.png', 'https://api.whatsapp.com/send?text=', 'buttonShare', 'assets/social/button_reddit.png', 'tutorial', 'data-fontsize', 'customScore', 'webkitFullscreenElement', 'PLAYING...', 'players', 'scaleY', 'PICK\x20PIECES\x20THAT\x20MATCH\x20THE\x20DICE\x20COLOR', 'createElement', 'whatsapp', 'assets/board_hole_05.png', 'fadeIn', 'name', 'shareTitle', '[SCORE]', 'oriY', 'undefined', 'resize', 'buttonTutorial', 'Text', 'seq', 'totalPieces', 'assets/social/button_facebook.png', 'lastPlayer', 'assets/chess_03_b_b.png', '.mobileRotate', '[SCORE]\x20pieces\x20is\x20mine\x20new\x20highscore\x20on\x20Memory\x20Chess\x20game!\x20Try\x20it\x20now!', 'buttonFullscreen', '225470iyAfXx', 'exitMessage', 'assets/sounds/sound_dice.ogg', '#roomWrapper\x20.fontNameError', '#notSupportHolder', 'context', 'OPTIONS', 'assets/board_05_b.png', 'progress', '#fff', 'graphics', 'naturalHeight', 'scores', '#rotateHolder', 'assets/chess_04_c_b.png', 'state', 'play', 'assets/sounds/sound_correct.ogg', 'file', 'right', 'regY', 'sort', 'assets/chess_03_a.png', 'buttonBack', 'installPlugin', 'playerScore', 'assets/sounds/sound_turn.ogg', 'soundButton', 'animate', 'buttonLinkedin', 'assets/chess_01_e_b.png', 'https://t.me/share/url?url=', 'pieceBottomH', 'removeClass', 'assets/item_player.png', 'assets/chess_01_d_b.png', '5468892khdOeY', 'pointer', '#roomlists', 'assets/chess_03_a_b.png', 'diceHighlight', '#000', 'click', 'each', 'assets/item_pop_p.png', 'assets/chess_02_d.png', 'assets/board_hole_05_h.png', 'assets/chess_01_b.png', 'href', 'assets/button_continue.png', 'Ticker', 'pieces', '[NUMBER]', 'gameOver', 'indexOf', 'assets/item_number.png', 'logo', 'itemPop', 'assets/social/button_telegram.png', 'itemInstruct2', '6aauvIP', 'itemTutorial4', 'soundStart', '#roomWrapper\x20.nameContent', 'assets/chess_03_f_b.png', 'blur', 'itemStatus', '75px\x20bpreplaybold', 'LoadQueue', 'musicMain', 'assets/chess_05_c.png', 'canvas', 'BEST\x20SCORE', 'YOU\x20WIN', 'assets/chess_04_e_b.png', 'rotation', 'BLACK', 'buttonFacebook', 'lastRoom', 'assets/chess_05_b_b.png', 'soundTurn', '.resizeFont', '60px\x20bpreplaybold', 'Expo.easeIn', 'scoreData', '#enterName', 'assets/chess_02_c.png', 'startX', 'buttonReddit', 'hide', 'maxPlayers', 'buttonSoundOn', 'pieceTopH', '12px\x20bpreplaybold', 'slice', '#mainLoader', 'easeOut', 'SpriteSheet', 'assets/button_sound_off.png', 'playerWin', 'assets/item_dice_03_h.png', 'itemTutorial1', 'lastIndexOf', 'lists', 'msExitFullscreen', 'clone', 'lineHeight', 'Expo.easeOut', 'assets/board_01_a.png', 'itemPopP', 'rejoinRoom', 'filters', 'result', 'ticker', 'maskShape', 'length', 'src', 'highlight', 'style', 'total', 'sin', 'clear', 'assets/button_online.png', 'assets/social/button_linkedin.png', '308680SdPTxH', 'removeAllChildren', 'assets/chess_03_d.png', 'BLUE', '15px\x20bpreplaybold', 'resultTitle', 'msRequestFullscreen', 'angle', 'naturalWidth', 'oriX', 'assets/social/button_twitter.png', 'sqrt', 'text', 'sound', 'assets/board_hole_04.png', '[NUMBER]\x20PLAYERS', 'logoP', 'PURPLE', 'beginStroke', 'HOW\x20TO\x20PLAY?', 'winMode', 'share.jpg', 'startY', 'ready', 'WebAudioPlugin', 'options', 'assets/logo_p.png', 'assets/chess_02_d_b.png', 'soundCorrect', 'attr', 'orientationchange', 'mp3', 'room', 'Stage', 'gtag', 'assets/item_tutorial_1.png', 'assets/chess_02_e_b.png', 'Sprite', 'assets/chess_03_e_b.png', 'lastOption', 'SHARE\x20YOUR\x20SCORE:', '636cartXe', 'buttonTwitter', 'round', 'default', 'assets/chess_05_e.png', 'playerStatus', 'gotoAndStop', 'height', 'buttonExit', 'show', 'enable', '25px\x20bpreplaybold', 'WHITE', 'assets/button_tutorial.png', '&title=', 'score', 'assets/board_03_b.png', 'pieceIndex', 'showpiece', 'regX', 'loadManifest', 'assets/board_hole_03_h.png', 'assets/item_dice_01.png', 'playerIndex', 'showpiececomplete', 'share.php?title=', 'assets/button_back.png', 'itemTutorial', 'radius', 'width', 'assets/chess_01_c.png', 'location', 'framerate', 'shareOption', 'tweenScore', 'LARGEST\x20NUMBER\x20WIN', 'assets/board_hole_02.png', 'playerTurn', 'assets/item_dice_01_h.png', 'assets/item_pop.png', 'assets/item_dice_shadow.png', 'rollCorrect', 'event', 'themeIndex', 'assets/chess_02_b_b.png', 'buttonSoundOff', 'assets/item_dice_02_h.png', 'resultDesc', 'color', 'optionsTitle', 'textAlign', 'rollCon', 'GREEN', 'enterName', '#mainLoader\x20span', 'ALLOW_KEYBOARD_INPUT', 'thru', 'documentElement', 'devicePixelRatio', 'val', 'useRAF', 'background', '40px\x20bpreplaybold', 'easeIn', '6\x20piece\x20of\x20each\x20colors', 'forPortrait', 'substring', 'push', 'backDownSpeed', '19px\x20bpreplaybold', 'assets/sounds/sound_place.ogg', 'soundPlace', 'filter', 'assets/item_dice_04_h.png', 'shareText', 'autoEnd', '18px\x20bpreplaybold', 'assets/background.png', 'animateCount', 'rows', 'assets/sounds/sound_win.ogg', 'gotoAndPlay', 'assets/sounds/music_main.ogg', 'Bitmap', 'function', 'fileload', 'assets/chess_04_d_b.png', '#ff9912', 'mask', 'cache', 'assets/sounds/music_game.ogg', 'assets/chess_02_c_b.png', 'setStrokeStyle', 'telegram', 'correctSpeed', 'assets/logo.png', '4\x20SAME\x20COLORS\x20WIN', 'Are\x20you\x20sure\x20you\x20want\x0ato\x20quit\x20game?', 'ColorFilter', 'buttonMusicOn', 'backgroundP', 'instruction2', 'host', 'buttonStart', 'assets/background_p.png', 'assets/chess_04_e.png', 'scrollTop', 'exitFullscreen', '28px\x20bpreplaybold', 'red', 'instructCount', 'assets/chess_05_f_b.png', 'localPlay', 'assets/button_confirm.png', 'Sound', 'assets/board_hole_01.png', 'off', 'soundPick2', 'assets/chess_05_f.png', 'assets/chess_05_e_b.png', 'easeNone', 'buttonSettings'];
    a0_0x1e69 = function() {
        return _0x37ade5;
    };
    return a0_0x1e69();
}

function checkContentWidth(_0x321cdc) {
    var _0x5625c0 = a0_0x55ac9f,
        _0xf80b54 = $(window)[_0x5625c0(0xcc)](),
        _0x191f80 = _0xf80b54 / 0x2 - _0x321cdc[_0x5625c0(0xcc)]() / 0x2;
    return _0x191f80;
}

function shuffle(_0x386ec4) {
    var _0x4a1749 = a0_0x55ac9f,
        _0x5d28f4 = _0x386ec4[_0x4a1749(0x7d)],
        _0x583402, _0x3730a7;
    while (0x0 !== _0x5d28f4) {
        _0x3730a7 = Math['floor'](Math[_0x4a1749(0x1cc)]() * _0x5d28f4), _0x5d28f4 -= 0x1, _0x583402 = _0x386ec4[_0x5d28f4], _0x386ec4[_0x5d28f4] = _0x386ec4[_0x3730a7], _0x386ec4[_0x3730a7] = _0x583402;
    }
    return _0x386ec4;
}

function randomBoolean() {
    var _0x6fb079 = a0_0x55ac9f;
    return Math[_0x6fb079(0x1cc)]() < 0.5;
}

function getDistance(_0x141350, _0x168a18, _0x2c4615, _0x12aac8) {
    var _0x55dfe4 = a0_0x55ac9f,
        _0x462c79 = Math[_0x55dfe4(0x91)](Math[_0x55dfe4(0x208)](_0x141350 - _0x2c4615, 0x2) + Math[_0x55dfe4(0x208)](_0x168a18 - _0x12aac8, 0x2));
    return _0x462c79;
}

function sortOnObject(_0x1c559e, _0x2be50d, _0x37e041) {
    var _0x2ea9a8 = a0_0x55ac9f;
    return _0x37e041 ? _0x1c559e[_0x2ea9a8(0x24c)](function(_0x10a7d4, _0x50d97d) {
        var _0xa96874 = _0x10a7d4[_0x2be50d],
            _0x278607 = _0x50d97d[_0x2be50d];
        if (_0xa96874 == _0x278607) return 0x0;
        return _0xa96874 < _0x278607 ? 0x1 : -0x1;
    }) : _0x1c559e['sort'](function(_0x36389a, _0x5bb2c4) {
        var _0x4d7b1d = _0x36389a[_0x2be50d],
            _0x2d682d = _0x5bb2c4[_0x2be50d];
        if (_0x4d7b1d == _0x2d682d) return 0x0;
        return _0x4d7b1d > _0x2d682d ? 0x1 : -0x1;
    }), _0x1c559e;
}

function randomIntFromInterval(_0x3f97c8, _0x34fe52) {
    var _0xf3157 = a0_0x55ac9f;
    return Math[_0xf3157(0x1fa)](Math[_0xf3157(0x1cc)]() * (_0x34fe52 - _0x3f97c8 + 0x1) + _0x3f97c8);
}

function addCommas(_0x1a5840) {
    var _0x218319 = a0_0x55ac9f;
    _0x1a5840 += '', x = _0x1a5840[_0x218319(0x185)]('.'), x1 = x[0x0], x2 = x[_0x218319(0x7d)] > 0x1 ? '.' + x[0x1] : '';
    var _0x46fc9d = /(\d+)(\d{3})/;
    while (_0x46fc9d[_0x218319(0x131)](x1)) {
        x1 = x1[_0x218319(0x177)](_0x46fc9d, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

function swapArray(_0x46252c, _0x2bfde9, _0x28b55e) {
    var _0x4c4147 = _0x46252c[_0x2bfde9];
    _0x46252c[_0x2bfde9] = _0x46252c[_0x28b55e], _0x46252c[_0x28b55e] = _0x4c4147;
}

function getCenterPosition(_0x4c053b, _0x5729c8, _0x585c00, _0x58ccfe) {
    var _0x32f81f = {
        'x': 0x0,
        'y': 0x0
    };
    return _0x32f81f['x'] = (_0x4c053b + _0x585c00) / 0x2, _0x32f81f['y'] = (_0x5729c8 + _0x58ccfe) / 0x2, _0x32f81f;
}

function setRotation(_0x377e26, _0x4c1132, _0x583a4d, _0x5efef7) {
    var _0x2f5de1 = 0xb4 / Math['PI'],
        _0x3050b3 = -Math['atan2'](_0x583a4d - _0x377e26, _0x5efef7 - _0x4c1132) * _0x2f5de1;
    return _0x3050b3 - 0x5a;
}

function isEven(_0x27b907) {
    if (_0x27b907 % 0x2 == 0x0) return !![];
    else return ![];
}

function getAnglePosition(_0x17735c, _0x443697, _0x14eb1d, _0x16f6ca) {
    var _0x3b2f97 = a0_0x55ac9f,
        _0x4a282e = {
            'x': 0x0,
            'y': 0x0
        };
    return _0x4a282e['x'] = _0x17735c + _0x14eb1d * Math[_0x3b2f97(0x200)](_0x16f6ca * Math['PI'] / 0xb4), _0x4a282e['y'] = _0x443697 + _0x14eb1d * Math[_0x3b2f97(0x82)](_0x16f6ca * Math['PI'] / 0xb4), _0x4a282e;
}

function removeDuplicates(_0x376991) {
    var _0x3d12d5 = a0_0x55ac9f;
    return _0x376991[_0x3d12d5(0xf7)]((_0x17d335, _0x59165e) => _0x376991['indexOf'](_0x17d335) === _0x59165e);
}
const enableDesktopAudio = !![],
    enableMobileAudio = !![],
    muteSoundOn = ![],
    muteMusicOn = ![];
var audioOn, soundMute = ![],
    musicMute = ![];
$[a0_0x55ac9f(0x93)] = {};
var soundID = 0x0,
    soundPushArr = [],
    soundLoopPushArr = [],
    musicPushArr = [];

function playSound(_0x496f32, _0x518c9c) {
    var _0x3a6849 = a0_0x55ac9f;
    if (audioOn) {
        var _0x4bc2b3 = soundID;
        soundPushArr[_0x3a6849(0xf2)](_0x4bc2b3), soundID++;
        var _0x421cc0 = _0x518c9c == undefined ? 0x1 : _0x518c9c;
        $['sound'][_0x4bc2b3] = createjs[_0x3a6849(0x121)][_0x3a6849(0x247)](_0x496f32), $['sound'][_0x4bc2b3]['defaultVol'] = _0x421cc0, setSoundVolume(_0x4bc2b3), $['sound'][_0x4bc2b3]['removeAllEventListeners'](), $[_0x3a6849(0x93)][_0x4bc2b3][_0x3a6849(0x20e)]('complete', function() {
            var _0x469c30 = _0x3a6849,
                _0x2733ab = soundPushArr[_0x469c30(0x26d)](_0x4bc2b3);
            _0x2733ab != -0x1 && soundPushArr[_0x469c30(0x1a2)](_0x2733ab, 0x1);
        });
    }
}

function playSoundLoop(_0x45e415) {
    var _0x103683 = a0_0x55ac9f;
    audioOn && ($[_0x103683(0x93)][_0x45e415] == null && (soundLoopPushArr['push'](_0x45e415), $[_0x103683(0x93)][_0x45e415] = createjs[_0x103683(0x121)][_0x103683(0x247)](_0x45e415), $[_0x103683(0x93)][_0x45e415]['defaultVol'] = 0x1, setSoundLoopVolume(_0x45e415), $[_0x103683(0x93)][_0x45e415]['removeAllEventListeners'](), $[_0x103683(0x93)][_0x45e415][_0x103683(0x20e)](_0x103683(0x1f2), function() {
        var _0x1447ba = _0x103683;
        $[_0x1447ba(0x93)][_0x45e415][_0x1447ba(0x247)]();
    })));
}

function toggleSoundLoop(_0xd484cb, _0x2302b6) {
    var _0x5488bf = a0_0x55ac9f;
    audioOn && ($[_0x5488bf(0x93)][_0xd484cb] != null && (_0x2302b6 ? $['sound'][_0xd484cb][_0x5488bf(0x247)]() : $[_0x5488bf(0x93)][_0xd484cb][_0x5488bf(0x160)] = !![]));
}

function stopSoundLoop(_0x4aff38) {
    var _0xb89ca6 = a0_0x55ac9f;
    if (audioOn) {
        if ($['sound'][_0x4aff38] != null) {
            $['sound'][_0x4aff38][_0xb89ca6(0x1ff)](), $['sound'][_0x4aff38] = null;
            var _0x2b9523 = soundLoopPushArr[_0xb89ca6(0x26d)](_0x4aff38);
            _0x2b9523 != -0x1 && soundLoopPushArr[_0xb89ca6(0x1a2)](_0x2b9523, 0x1);
        }
    }
}

function playMusicLoop(_0x17c585) {
    var _0x2d215d = a0_0x55ac9f;
    audioOn && ($[_0x2d215d(0x93)][_0x17c585] == null && (musicPushArr[_0x2d215d(0xf2)](_0x17c585), $[_0x2d215d(0x93)][_0x17c585] = createjs[_0x2d215d(0x121)][_0x2d215d(0x247)](_0x17c585), $[_0x2d215d(0x93)][_0x17c585]['defaultVol'] = 0x1, setMusicVolume(_0x17c585), $['sound'][_0x17c585][_0x2d215d(0x1b8)](), $['sound'][_0x17c585][_0x2d215d(0x20e)](_0x2d215d(0x1f2), function() {
        var _0x5322be = _0x2d215d;
        $[_0x5322be(0x93)][_0x17c585][_0x5322be(0x247)]();
    })));
}

function toggleMusicLoop(_0x10919b, _0x2abefa) {
    var _0x2f3d45 = a0_0x55ac9f;
    audioOn && ($['sound'][_0x10919b] != null && (_0x2abefa ? $[_0x2f3d45(0x93)][_0x10919b]['play']() : $[_0x2f3d45(0x93)][_0x10919b][_0x2f3d45(0x160)] = !![]));
}

function stopMusicLoop(_0x5974d9) {
    var _0x5ea093 = a0_0x55ac9f;
    if (audioOn) {
        if ($[_0x5ea093(0x93)][_0x5974d9] != null) {
            $['sound'][_0x5974d9][_0x5ea093(0x1ff)](), $[_0x5ea093(0x93)][_0x5974d9] = null;
            var _0x5ecb89 = musicPushArr['indexOf'](_0x5974d9);
            _0x5ecb89 != -0x1 && musicPushArr[_0x5ea093(0x1a2)](_0x5ecb89, 0x1);
        }
    }
}

function stopSound() {
    var _0x5c147b = a0_0x55ac9f;
    createjs[_0x5c147b(0x121)][_0x5c147b(0x1ff)]();
}

function toggleSoundInMute(_0x284f47) {
    var _0x928d8e = a0_0x55ac9f;
    if (audioOn) {
        soundMute = _0x284f47;
        for (var _0x374252 = 0x0; _0x374252 < soundPushArr[_0x928d8e(0x7d)]; _0x374252++) {
            setSoundVolume(soundPushArr[_0x374252]);
        }
        for (var _0x374252 = 0x0; _0x374252 < soundLoopPushArr[_0x928d8e(0x7d)]; _0x374252++) {
            setSoundLoopVolume(soundLoopPushArr[_0x374252]);
        }
    }
}

function toggleMusicInMute(_0x13bd5e) {
    var _0x4d4f39 = a0_0x55ac9f;
    if (audioOn) {
        musicMute = _0x13bd5e;
        for (var _0x4c1556 = 0x0; _0x4c1556 < musicPushArr[_0x4d4f39(0x7d)]; _0x4c1556++) {
            setMusicVolume(musicPushArr[_0x4c1556]);
        }
    }
}

function setSoundVolume(_0x21e549, _0x5413f1) {
    var _0xf89eb4 = a0_0x55ac9f;
    if (audioOn) {
        var _0x48dc6c = soundPushArr[_0xf89eb4(0x26d)](_0x21e549);
        if (_0x48dc6c != -0x1) {
            var _0xe0c9bb = _0x5413f1 == undefined ? $[_0xf89eb4(0x93)][soundPushArr[_0x48dc6c]][_0xf89eb4(0x17d)] : _0x5413f1,
                _0x2115a7 = soundMute == ![] ? _0xe0c9bb : 0x0;
            $[_0xf89eb4(0x93)][soundPushArr[_0x48dc6c]][_0xf89eb4(0x14f)] = _0x2115a7, $[_0xf89eb4(0x93)][soundPushArr[_0x48dc6c]][_0xf89eb4(0x17d)] = _0xe0c9bb;
        }
    }
}

function setSoundLoopVolume(_0xf928a2, _0x320732) {
    var _0x109d9d = a0_0x55ac9f;
    if (audioOn) {
        var _0x2a2ebe = soundLoopPushArr[_0x109d9d(0x26d)](_0xf928a2);
        if (_0x2a2ebe != -0x1) {
            var _0x2e1a1d = _0x320732 == undefined ? $[_0x109d9d(0x93)][soundLoopPushArr[_0x2a2ebe]][_0x109d9d(0x17d)] : _0x320732,
                _0x1b91d0 = soundMute == ![] ? _0x2e1a1d : 0x0;
            $[_0x109d9d(0x93)][soundLoopPushArr[_0x2a2ebe]]['volume'] = _0x1b91d0, $[_0x109d9d(0x93)][soundLoopPushArr[_0x2a2ebe]][_0x109d9d(0x17d)] = _0x2e1a1d;
        }
    }
}

function setMusicVolume(_0x4b0694, _0x29d62b) {
    var _0x662ac2 = a0_0x55ac9f;
    if (audioOn) {
        var _0x1f6eb6 = musicPushArr[_0x662ac2(0x26d)](_0x4b0694);
        if (_0x1f6eb6 != -0x1) {
            var _0x1cc1f0 = _0x29d62b == undefined ? $[_0x662ac2(0x93)][musicPushArr[_0x1f6eb6]][_0x662ac2(0x17d)] : _0x29d62b,
                _0x18dc9f = musicMute == ![] ? _0x1cc1f0 : 0x0;
            $[_0x662ac2(0x93)][musicPushArr[_0x1f6eb6]][_0x662ac2(0x14f)] = _0x18dc9f, $[_0x662ac2(0x93)][musicPushArr[_0x1f6eb6]]['defaultVol'] = _0x1cc1f0;
        }
    }
}