var a0_0x15986e = a0_0x413e;
(function(_0x5b449a, _0x2c44d1) {
    var _0x3491c0 = a0_0x413e,
        _0x108468 = _0x5b449a();
    while (!![]) {
        try {
            var _0x2f4442 = -parseInt(_0x3491c0(0x294)) / 0x1 * (-parseInt(_0x3491c0(0x1f6)) / 0x2) + -parseInt(_0x3491c0(0x2fd)) / 0x3 + -parseInt(_0x3491c0(0x216)) / 0x4 * (parseInt(_0x3491c0(0x30b)) / 0x5) + parseInt(_0x3491c0(0x2c4)) / 0x6 * (parseInt(_0x3491c0(0x188)) / 0x7) + -parseInt(_0x3491c0(0x1fe)) / 0x8 + parseInt(_0x3491c0(0x1f1)) / 0x9 * (-parseInt(_0x3491c0(0x193)) / 0xa) + parseInt(_0x3491c0(0x33e)) / 0xb;
            if (_0x2f4442 === _0x2c44d1) break;
            else _0x108468['push'](_0x108468['shift']());
        } catch (_0x45d315) {
            _0x108468['push'](_0x108468['shift']());
        }
    }
}(a0_0x4b72, 0x47664));
var stage, canvasW = 0x0,
    canvasH = 0x0;

function initGameCanvas(_0x756723, _0x1d335c) {
    var _0x41e2e5 = a0_0x413e;
    const _0x737ea3 = document[_0x41e2e5(0x2aa)](_0x41e2e5(0x27f));
    _0x737ea3['width'] = _0x756723, _0x737ea3[_0x41e2e5(0x1fc)] = _0x1d335c, canvasW = _0x756723, canvasH = _0x1d335c, stage = new createjs[(_0x41e2e5(0x347))]('gameCanvas', {
        'antialias': !![]
    }), createjs[_0x41e2e5(0x227)][_0x41e2e5(0x314)](stage), stage[_0x41e2e5(0x32d)](0x14), stage['mouseMoveOutside'] = !![], createjs['Ticker'][_0x41e2e5(0x17a)] = 0x3c, createjs[_0x41e2e5(0x201)][_0x41e2e5(0x336)](_0x41e2e5(0x2fa), tick);
}
var safeZoneGuide = ![],
    canvasContainer, mainContainer, gameContainer, resultContainer, exitContainer, optionsContainer, shareContainer, shareSaveContainer, socialContainer, guideline, bg, bgP, logo, logoP, itemExit, itemExitP, popTitleTxt, popDescTxt, buttonConfirm, buttonCancel, itemResult, itemResultP, buttonContinue, resultTitleTxt, resultDescTxt, buttonShare, buttonSave, resultTitleOutlineTxt, resultDescOutlineTxt, resultShareTxt, resultShareOutlineTxt, popTitleOutlineTxt, popDescOutlineTxt, buttonSettings, buttonFullscreen, buttonSoundOn, buttonSoundOff, buttonMusicOn, buttonMusicOff, buttonExit;
$['share'] = {};
var selectContainer, bgContainer, letterContainer, linesContainer, starsContainer, editContainer, editImageContainer, buttonPlay, categoryTitleTxt, buttonPrev, buttonNext, maxThumbPerPage, itemGame, loadingTxt, totalTxt, resultScoreTxt, shareText, confirmTitleTxt;
$[a0_0x15986e(0x1b8)] = {}, $[a0_0x15986e(0x245)] = {}, $['guides'] = {}, $['stars'] = {};

function buildGameCanvas() {
    var _0x152445 = a0_0x15986e;
    canvasContainer = new createjs[(_0x152445(0x284))](), mainContainer = new createjs['Container'](), gameContainer = new createjs[(_0x152445(0x284))](), exitContainer = new createjs['Container'](), resultContainer = new createjs[(_0x152445(0x284))](), shareContainer = new createjs[(_0x152445(0x284))](), shareSaveContainer = new createjs[(_0x152445(0x284))](), socialContainer = new createjs[(_0x152445(0x284))](), optionsContainer = new createjs[(_0x152445(0x284))](), selectContainer = new createjs[(_0x152445(0x284))](), bgContainer = new createjs['Container'](), letterContainer = new createjs[(_0x152445(0x284))](), linesContainer = new createjs[(_0x152445(0x284))](), starsContainer = new createjs[(_0x152445(0x284))](), editContainer = new createjs['Container'](), editImageContainer = new createjs[(_0x152445(0x284))](), bg = new createjs['Bitmap'](loader[_0x152445(0x2dd)]('background')), logo = new createjs[(_0x152445(0x2b5))](loader[_0x152445(0x2dd)](_0x152445(0x1f0))), buttonPlay = new createjs['Bitmap'](loader[_0x152445(0x2dd)](_0x152445(0x25f))), centerReg(buttonPlay), buttonPlay['x'] = canvasW / 0x2, buttonPlay['y'] = canvasH / 0x64 * 0x4b, categoryTitleTxt = new createjs['Text'](), categoryTitleTxt[_0x152445(0x28c)] = _0x152445(0x1a8), categoryTitleTxt[_0x152445(0x313)] = _0x152445(0x212), categoryTitleTxt[_0x152445(0x18e)] = _0x152445(0x2b8), categoryTitleTxt[_0x152445(0x34a)] = _0x152445(0x24b), categoryTitleTxt[_0x152445(0x260)] = textStrings[_0x152445(0x269)], categoryTitleTxt['x'] = canvasW / 0x2, categoryTitleTxt['y'] = canvasH / 0x64 * 0x1a, buttonPrev = new createjs['Bitmap'](loader[_0x152445(0x2dd)]('buttonPrev')), centerReg(buttonPrev), buttonPrev['x'] = canvasW / 0x2 - 0x1c2, buttonPrev['y'] = canvasH / 0x64 * 0x37, buttonNext = new createjs[(_0x152445(0x2b5))](loader[_0x152445(0x2dd)]('buttonNext')), centerReg(buttonNext), buttonNext['x'] = canvasW / 0x2 + 0x1c2, buttonNext['y'] = canvasH / 0x64 * 0x37;
    var _0x40a7aa = [{
            'x': canvasW / 0x64 * 0x1b,
            'y': canvasH / 0x64 * 0x37
        }, {
            'x': canvasW / 0x2,
            'y': canvasH / 0x64 * 0x37
        }, {
            'x': canvasW / 0x64 * 0x49,
            'y': canvasH / 0x64 * 0x37
        }],
        _0x3a8438 = 0x0;
    if (!$[_0x152445(0x335)]['enable'])
        for (_0x5d76fa = 0x0; _0x5d76fa < category_array[_0x152445(0x29a)]; _0x5d76fa++) {
            $[_0x152445(0x1b8)][_0x152445(0x2fe) + _0x5d76fa] = new createjs[(_0x152445(0x2b5))](loader[_0x152445(0x2dd)](_0x152445(0x1f7) + _0x5d76fa)), centerReg($[_0x152445(0x1b8)][_0x152445(0x2fe) + _0x5d76fa]), $[_0x152445(0x1b8)][_0x152445(0x309) + _0x5d76fa] = new createjs[(_0x152445(0x1ee))](), $[_0x152445(0x1b8)][_0x152445(0x309) + _0x5d76fa][_0x152445(0x28c)] = _0x152445(0x33a), $[_0x152445(0x1b8)][_0x152445(0x309) + _0x5d76fa]['color'] = _0x152445(0x212), $[_0x152445(0x1b8)][_0x152445(0x309) + _0x5d76fa][_0x152445(0x18e)] = _0x152445(0x2b8), $[_0x152445(0x1b8)][_0x152445(0x309) + _0x5d76fa][_0x152445(0x34a)] = _0x152445(0x24b), preloadDrawings && ($['thumb'][_0x152445(0x309) + _0x5d76fa]['text'] = textStrings[_0x152445(0x316)]), selectContainer[_0x152445(0x339)]($[_0x152445(0x1b8)][_0x152445(0x2fe) + _0x5d76fa], $['thumb'][_0x152445(0x309) + _0x5d76fa]), $[_0x152445(0x1b8)]['thumb_' + _0x5d76fa]['x'] = _0x40a7aa[_0x3a8438]['x'], $[_0x152445(0x1b8)]['thumb_' + _0x5d76fa]['y'] = _0x40a7aa[_0x3a8438]['y'], $[_0x152445(0x1b8)]['thumbloader_' + _0x5d76fa]['x'] = _0x40a7aa[_0x3a8438]['x'], $['thumb'][_0x152445(0x309) + _0x5d76fa]['y'] = _0x40a7aa[_0x3a8438]['y'] + 0xd2, _0x3a8438++, _0x3a8438 >= maxThumbPerPage && (_0x3a8438 = 0x0);
        }
    selectContainer[_0x152445(0x339)](categoryTitleTxt, buttonPrev, buttonNext), itemGame = new createjs[(_0x152445(0x2b5))](loader['getResult'](_0x152445(0x2f1)));
    if (!$[_0x152445(0x335)][_0x152445(0x314)] && !preloadDrawings)
        for (var _0x5d76fa = 0x0; _0x5d76fa < drawings_array['length']; _0x5d76fa++) {
            $[_0x152445(0x245)][_0x152445(0x202) + _0x5d76fa] = new createjs[(_0x152445(0x2b5))](loader[_0x152445(0x2dd)](_0x152445(0x25d) + _0x5d76fa)), $[_0x152445(0x245)][_0x152445(0x267) + _0x5d76fa] = new createjs['Bitmap'](loader[_0x152445(0x2dd)]('letterFinalImage' + _0x5d76fa)), bgContainer[_0x152445(0x339)]($[_0x152445(0x245)][_0x152445(0x202) + _0x5d76fa], $[_0x152445(0x245)]['finalImage_' + _0x5d76fa]);
        }
    loadingTxt = new createjs['Text'](), loadingTxt[_0x152445(0x28c)] = _0x152445(0x2da), loadingTxt[_0x152445(0x313)] = _0x152445(0x212), loadingTxt['textAlign'] = _0x152445(0x2b8), loadingTxt[_0x152445(0x34a)] = _0x152445(0x24b), loadingTxt[_0x152445(0x260)] = textStrings[_0x152445(0x255)], loadingTxt['x'] = canvasW / 0x2, loadingTxt['y'] = canvasH / 0x2, totalTxt = new createjs[(_0x152445(0x1ee))](), totalTxt[_0x152445(0x28c)] = _0x152445(0x232), totalTxt[_0x152445(0x313)] = _0x152445(0x212), totalTxt[_0x152445(0x18e)] = _0x152445(0x275), totalTxt[_0x152445(0x34a)] = _0x152445(0x24b), totalTxt['text'] = '', itemResult = new createjs[(_0x152445(0x2b5))](loader[_0x152445(0x2dd)](_0x152445(0x26e))), resultTitleTxt = new createjs[(_0x152445(0x1ee))](), resultTitleTxt[_0x152445(0x28c)] = '55px\x20bodo_amatregular', resultTitleTxt['color'] = _0x152445(0x21f), resultTitleTxt['textAlign'] = _0x152445(0x2b8), resultTitleTxt['textBaseline'] = _0x152445(0x24b), resultTitleTxt[_0x152445(0x260)] = textStrings[_0x152445(0x24d)], resultTitleTxt['x'] = canvasW / 0x2, resultTitleTxt['y'] = canvasH / 0x64 * 0x20, resultScoreTxt = new createjs[(_0x152445(0x1ee))](), resultScoreTxt[_0x152445(0x28c)] = _0x152445(0x1cd), resultScoreTxt[_0x152445(0x313)] = _0x152445(0x2ea), resultScoreTxt[_0x152445(0x18e)] = _0x152445(0x2b8), resultScoreTxt[_0x152445(0x34a)] = _0x152445(0x24b), resultScoreTxt[_0x152445(0x260)] = textStrings[_0x152445(0x194)], resultScoreTxt['x'] = canvasW / 0x64 * 0x36, resultScoreTxt['y'] = canvasH / 0x64 * 0x2a, resultShareTxt = new createjs[(_0x152445(0x1ee))](), resultShareTxt['font'] = '25px\x20bodo_amatregular', resultShareTxt['color'] = '#91181D', resultShareTxt[_0x152445(0x18e)] = _0x152445(0x2b8), resultShareTxt['textBaseline'] = _0x152445(0x24b), resultShareTxt['text'] = textStrings['share'], shareContainer['x'] = shareSaveContainer['x'] = canvasW / 0x2, shareContainer['y'] = shareSaveContainer['y'] = canvasH / 0x64 * 0x33, socialContainer[_0x152445(0x2e2)] = ![], socialContainer[_0x152445(0x1aa)] = 0x1, shareContainer[_0x152445(0x339)](resultShareTxt, socialContainer);
    if (shareSettings['enable']) {
        buttonShare = new createjs[(_0x152445(0x2b5))](loader[_0x152445(0x2dd)](_0x152445(0x1ac))), centerReg(buttonShare);
        var _0x1eac3d = {
            'x': 0x0,
            'y': 0x2d,
            'spaceX': 0x41
        };
        _0x1eac3d['x'] = -((shareSettings[_0x152445(0x180)][_0x152445(0x29a)] - 0x1) * _0x1eac3d['spaceX'] / 0x2);
        for (let _0x5d666f = 0x0; _0x5d666f < shareSettings[_0x152445(0x180)]['length']; _0x5d666f++) {
            var _0xf562c3 = shareSettings[_0x152445(0x180)][_0x5d666f],
                _0x27e5b4 = String(_0xf562c3[0x0])[_0x152445(0x21c)]() + String(_0xf562c3)['slice'](0x1);
            $[_0x152445(0x1a3)][_0x152445(0x2b2) + _0x5d666f] = new createjs[(_0x152445(0x2b5))](loader[_0x152445(0x2dd)]('button' + _0x27e5b4)), $['share'][_0x152445(0x2b2) + _0x5d666f]['shareOption'] = _0xf562c3, centerReg($['share'][_0x152445(0x2b2) + _0x5d666f]), $[_0x152445(0x1a3)][_0x152445(0x2b2) + _0x5d666f]['x'] = _0x1eac3d['x'], $[_0x152445(0x1a3)][_0x152445(0x2b2) + _0x5d666f]['y'] = _0x1eac3d['y'], socialContainer[_0x152445(0x339)]($[_0x152445(0x1a3)]['button' + _0x5d666f]), _0x1eac3d['x'] += _0x1eac3d[_0x152445(0x2a1)];
        }
        buttonShare['y'] = buttonShare['image'][_0x152445(0x343)] / 0x2 + 0xa, shareContainer[_0x152445(0x339)](buttonShare);
    }
    typeof toggleScoreboardSave == _0x152445(0x181) && (buttonSave = new createjs[(_0x152445(0x2b5))](loader[_0x152445(0x2dd)](_0x152445(0x293))), centerReg(buttonSave), buttonSave['y'] = buttonSave['image'][_0x152445(0x343)] / 0x2 + 0xa, shareSaveContainer[_0x152445(0x339)](buttonSave)), buttonContinue = new createjs[(_0x152445(0x2b5))](loader[_0x152445(0x2dd)](_0x152445(0x2ef))), centerReg(buttonContinue), createHitarea(buttonContinue), buttonContinue['x'] = canvasW / 0x2, buttonContinue['y'] = canvasH / 0x64 * 0x46, buttonFullscreen = new createjs[(_0x152445(0x2b5))](loader[_0x152445(0x2dd)](_0x152445(0x28b))), centerReg(buttonFullscreen), buttonSoundOn = new createjs[(_0x152445(0x2b5))](loader[_0x152445(0x2dd)](_0x152445(0x179))), centerReg(buttonSoundOn), buttonSoundOff = new createjs['Bitmap'](loader['getResult'](_0x152445(0x266))), centerReg(buttonSoundOff), buttonSoundOn['visible'] = ![], buttonExit = new createjs[(_0x152445(0x2b5))](loader[_0x152445(0x2dd)](_0x152445(0x1e5))), centerReg(buttonExit), buttonSettings = new createjs[(_0x152445(0x2b5))](loader[_0x152445(0x2dd)](_0x152445(0x17d))), centerReg(buttonSettings), createHitarea(buttonFullscreen), createHitarea(buttonSoundOn), createHitarea(buttonSoundOff), createHitarea(buttonExit), createHitarea(buttonSettings), itemExit = new createjs['Bitmap'](loader[_0x152445(0x2dd)](_0x152445(0x2f5))), itemExit['hitArea'] = new createjs[(_0x152445(0x2e1))](new createjs['Graphics']()[_0x152445(0x1fb)](_0x152445(0x325))['drawRect'](0x0, 0x0, itemExit[_0x152445(0x1e1)][_0x152445(0x2a2)], itemExit[_0x152445(0x1e1)][_0x152445(0x343)])), buttonConfirm = new createjs[(_0x152445(0x2b5))](loader[_0x152445(0x2dd)]('buttonConfirm')), centerReg(buttonConfirm), buttonConfirm['x'] = canvasW / 0x2 - 0x78, buttonConfirm['y'] = canvasH / 0x64 * 0x46, buttonCancel = new createjs[(_0x152445(0x2b5))](loader[_0x152445(0x2dd)]('buttonCancel')), centerReg(buttonCancel), buttonCancel['x'] = canvasW / 0x2 + 0x78, buttonCancel['y'] = canvasH / 0x64 * 0x46, confirmTitleTxt = new createjs[(_0x152445(0x1ee))](), confirmTitleTxt[_0x152445(0x28c)] = _0x152445(0x1a8), confirmTitleTxt['color'] = _0x152445(0x21f), confirmTitleTxt[_0x152445(0x18e)] = 'center', confirmTitleTxt[_0x152445(0x34a)] = _0x152445(0x24b), confirmTitleTxt['text'] = textStrings[_0x152445(0x2de)], confirmTitleTxt['x'] = canvasW / 0x2, confirmTitleTxt['y'] = canvasH / 0x64 * 0x20, confirmMessageTxt = new createjs['Text'](), confirmMessageTxt['font'] = _0x152445(0x2e7), confirmMessageTxt[_0x152445(0x313)] = _0x152445(0x21f), confirmMessageTxt[_0x152445(0x18e)] = _0x152445(0x2b8), confirmMessageTxt['textBaseline'] = _0x152445(0x24b), confirmMessageTxt[_0x152445(0x260)] = textStrings[_0x152445(0x30c)], confirmMessageTxt[_0x152445(0x2e0)] = 0x32, confirmMessageTxt['x'] = canvasW / 0x2, confirmMessageTxt['y'] = canvasH / 0x64 * 0x2b, exitContainer[_0x152445(0x339)](itemExit, buttonConfirm, buttonCancel, confirmTitleTxt, confirmMessageTxt), exitContainer[_0x152445(0x2e2)] = ![], guideline = new createjs['Shape'](), fpsLabel = new createjs['Text'](_0x152445(0x291), 'bold\x2018px\x20Arial', _0x152445(0x174)), fpsLabel['x'] = 0x8c, fpsLabel['y'] = 0x64, fpsLabel[_0x152445(0x2e2)] = ![], safeZoneGuide && (fpsLabel[_0x152445(0x2e2)] = !![]), mainContainer['addChild'](bg, logo, buttonPlay), gameContainer[_0x152445(0x339)](bgContainer, loadingTxt, linesContainer, letterContainer, totalTxt), resultContainer[_0x152445(0x339)](itemResult, resultTitleTxt, resultScoreTxt, buttonContinue, shareContainer, shareSaveContainer), optionsContainer[_0x152445(0x339)](buttonFullscreen, buttonSoundOn, buttonSoundOff, buttonExit), optionsContainer[_0x152445(0x2e2)] = ![], canvasContainer['addChild'](bg, itemGame, mainContainer, selectContainer, editImageContainer, gameContainer, editContainer, resultContainer, starsContainer, exitContainer, optionsContainer, buttonSettings, guideline, fpsLabel), stage[_0x152445(0x339)](canvasContainer), resizeCanvas();
}

function resizeCanvas() {
    var _0x5bde03 = a0_0x15986e;
    const _0x31cb58 = stageW * scalePercent,
        _0x5a4a40 = stageH * scalePercent,
        _0x15e71a = document[_0x5bde03(0x2aa)](_0x5bde03(0x27f));
    _0x15e71a['style'][_0x5bde03(0x304)] = _0x31cb58 + 'px', _0x15e71a[_0x5bde03(0x195)]['height'] = _0x5a4a40 + 'px', _0x15e71a['style'][_0x5bde03(0x275)] = offset[_0x5bde03(0x275)] / 0x2 + 'px', _0x15e71a['style']['top'] = offset['top'] / 0x2 + 'px', _0x15e71a[_0x5bde03(0x304)] = stageW * dpr, _0x15e71a[_0x5bde03(0x1fc)] = stageH * dpr;
    if (canvasContainer != undefined) {
        stage[_0x5bde03(0x24e)] = stage[_0x5bde03(0x2cb)] = dpr;
        safeZoneGuide && guideline['graphics'][_0x5bde03(0x308)](0x2)[_0x5bde03(0x256)](_0x5bde03(0x1b7))[_0x5bde03(0x219)]((stageW - contentW) / 0x2, (stageH - contentH) / 0x2, contentW, contentH);
        buttonSettings['x'] = canvasW - offset['x'] - 0x3c, buttonSettings['y'] = offset['y'] + 0x2d, totalTxt['x'] = offset['x'] + 0x64, totalTxt['y'] = offset['y'] + 0x28;
        var _0x3ea9cb = 0x4b,
            _0x28d14a = 0x0;
        buttonSoundOn['x'] = buttonSoundOff['x'] = buttonSettings['x'], buttonSoundOn['y'] = buttonSoundOff['y'] = buttonSettings['y'] + _0x3ea9cb, buttonSoundOn['x'] = buttonSoundOff['x'], buttonSoundOn['y'] = buttonSoundOff['y'] = buttonSettings['y'] + _0x3ea9cb, typeof buttonMusicOn != 'undefined' ? (buttonMusicOn['x'] = buttonMusicOff['x'] = buttonSettings['x'], buttonMusicOn['y'] = buttonMusicOff['y'] = buttonSettings['y'] + _0x3ea9cb * 0x2, buttonMusicOn['x'] = buttonMusicOff['x'], buttonMusicOn['y'] = buttonMusicOff['y'] = buttonSettings['y'] + _0x3ea9cb * 0x2, _0x28d14a = 0x2) : _0x28d14a = 0x1, buttonFullscreen['x'] = buttonSettings['x'], buttonFullscreen['y'] = buttonSettings['y'] + _0x3ea9cb * (_0x28d14a + 0x1), curPage == _0x5bde03(0x285) || curPage == _0x5bde03(0x344) ? (buttonExit[_0x5bde03(0x2e2)] = ![], buttonFullscreen['x'] = buttonSettings['x'], buttonFullscreen['y'] = buttonSettings['y'] + _0x3ea9cb * (_0x28d14a + 0x1)) : (buttonExit['visible'] = !![], buttonExit['x'] = buttonSettings['x'], buttonExit['y'] = buttonSettings['y'] + _0x3ea9cb * (_0x28d14a + 0x2)), curPage == _0x5bde03(0x2ec) && adjustScalePercent();
    }
}

function removeGameCanvas() {
    var _0x4a1f5e = a0_0x15986e;
    stage[_0x4a1f5e(0x32e)] = !![], stage[_0x4a1f5e(0x22b)](), stage[_0x4a1f5e(0x2b6)](), createjs[_0x4a1f5e(0x201)]['removeEventListener']('tick', tick), createjs['Ticker'][_0x4a1f5e(0x1ab)]('tick', stage);
}

function tick(_0x1e7a7c) {
    var _0x240dc9 = a0_0x15986e;
    updateGame(), stage[_0x240dc9(0x2b6)](_0x1e7a7c);
}

function centerReg(_0x3d1f2d) {
    var _0x23c12d = a0_0x15986e;
    _0x3d1f2d['regX'] = _0x3d1f2d[_0x23c12d(0x1e1)][_0x23c12d(0x2a2)] / 0x2, _0x3d1f2d[_0x23c12d(0x2bb)] = _0x3d1f2d[_0x23c12d(0x1e1)][_0x23c12d(0x343)] / 0x2;
}

function createHitarea(_0x1e6592) {
    var _0x4d631c = a0_0x15986e;
    _0x1e6592[_0x4d631c(0x234)] = new createjs[(_0x4d631c(0x2e1))](new createjs[(_0x4d631c(0x1ed))]()[_0x4d631c(0x1fb)](_0x4d631c(0x325))[_0x4d631c(0x219)](0x0, 0x0, _0x1e6592[_0x4d631c(0x1e1)]['naturalWidth'], _0x1e6592['image']['naturalHeight']));
}
const category_array = [{
        'thumb': a0_0x15986e(0x18f),
        'name': a0_0x15986e(0x250)
    }, {
        'thumb': a0_0x15986e(0x223),
        'name': a0_0x15986e(0x1de)
    }, {
        'thumb': 'assets/drawing/thumb_03.png',
        'name': a0_0x15986e(0x261)
    }, {
        'thumb': a0_0x15986e(0x281),
        'name': a0_0x15986e(0x2a5),
        'settings': {
            'radius': 0x5,
            'distance': 0x12,
            'strokeEnable': ![],
            'stroke': 0x2,
            'strokeColor': '#fff',
            'color': '#f3c501',
            'disabledColor': '#ccc',
            'completeColor': a0_0x15986e(0x27d),
            'number': {
                'enable': ![],
                'radius': 0xc,
                'distance': 0x1a,
                'color': a0_0x15986e(0x26b),
                'disabledColor': a0_0x15986e(0x298),
                'completeColor': a0_0x15986e(0x27d),
                'textColor': a0_0x15986e(0x212),
                'fontSize': 0xd,
                'offsetY': 0x5,
                'strokeEnable': !![],
                'stroke': 0x2,
                'strokeColor': a0_0x15986e(0x212)
            },
            'line': {
                'enable': !![],
                'stroke': 0xf,
                'strokeColor': a0_0x15986e(0x32f)
            },
            'showLoader': ![],
            'arrowAnimate': !![],
            'arrowAnimateSpeed': 0x1,
            'arrowAnimateDelay': 0x1,
            'drawDistance': 0xa,
            'drawOutDistance': 0x32,
            'sequenceLetter': ![],
            'sequenceNumber': ![],
            'scalePercent': 1.5
        }
    }, {
        'thumb': a0_0x15986e(0x243),
        'name': a0_0x15986e(0x300)
    }],
    drawings_array = [{
        'category': a0_0x15986e(0x300),
        'letters': [{
            'paths': [
                [{
                    'x': 0x213,
                    'y': 0x11a
                }, {
                    'x': 0x22b,
                    'y': 0x132
                }, {
                    'x': 0x23b,
                    'y': 0x142
                }],
                [{
                    'x': 0x202,
                    'y': 0x16f
                }, {
                    'x': 0x21b,
                    'y': 0x171
                }, {
                    'x': 0x233,
                    'y': 0x174
                }, {
                    'x': 0x232,
                    'y': 0x1b1
                }, {
                    'x': 0x231,
                    'y': 0x1f8
                }, {
                    'x': 0x24a,
                    'y': 0x1f1
                }, {
                    'x': 0x25b,
                    'y': 0x1e3
                }],
                [{
                    'x': 0x261,
                    'y': 0x129
                }, {
                    'x': 0x2a7,
                    'y': 0x127
                }, {
                    'x': 0x2ec,
                    'y': 0x129
                }],
                [{
                    'x': 0x26b,
                    'y': 0x148
                }, {
                    'x': 0x2a8,
                    'y': 0x14b
                }, {
                    'x': 0x2e1,
                    'y': 0x14a
                }],
                [{
                    'x': 0x255,
                    'y': 0x16f
                }, {
                    'x': 0x2a7,
                    'y': 0x170
                }, {
                    'x': 0x2f6,
                    'y': 0x170
                }],
                [{
                    'x': 0x2a7,
                    'y': 0x105
                }, {
                    'x': 0x2a7,
                    'y': 0x139
                }, {
                    'x': 0x2a8,
                    'y': 0x16a
                }],
                [{
                    'x': 0x272,
                    'y': 0x18a
                }, {
                    'x': 0x272,
                    'y': 0x1ba
                }, {
                    'x': 0x271,
                    'y': 0x206
                }],
                [{
                    'x': 0x288,
                    'y': 0x190
                }, {
                    'x': 0x2ae,
                    'y': 0x18f
                }, {
                    'x': 0x2db,
                    'y': 0x18e
                }, {
                    'x': 0x2db,
                    'y': 0x1c4
                }, {
                    'x': 0x2dd,
                    'y': 0x1e9
                }, {
                    'x': 0x2e0,
                    'y': 0x20f
                }, {
                    'x': 0x2b9,
                    'y': 0x200
                }],
                [{
                    'x': 0x289,
                    'y': 0x1b2
                }, {
                    'x': 0x2af,
                    'y': 0x1b2
                }, {
                    'x': 0x2d4,
                    'y': 0x1b2
                }],
                [{
                    'x': 0x286,
                    'y': 0x1d9
                }, {
                    'x': 0x2aa,
                    'y': 0x1d8
                }, {
                    'x': 0x2d3,
                    'y': 0x1da
                }]
            ]
        }],
        'image': 'assets/drawing/mandarin_01.png',
        'finalImage': a0_0x15986e(0x19b),
        'audio': a0_0x15986e(0x17f)
    }, {
        'category': a0_0x15986e(0x300),
        'letters': [{
            'paths': [
                [{
                    'x': 0x17a,
                    'y': 0x115
                }, {
                    'x': 0x1f6,
                    'y': 0x11a
                }, {
                    'x': 0x25f,
                    'y': 0x11a
                }],
                [{
                    'x': 0x193,
                    'y': 0x14c
                }, {
                    'x': 0x198,
                    'y': 0x19e
                }, {
                    'x': 0x197,
                    'y': 0x203
                }],
                [{
                    'x': 0x1b0,
                    'y': 0x14b
                }, {
                    'x': 0x1ed,
                    'y': 0x14d
                }, {
                    'x': 0x244,
                    'y': 0x14e
                }, {
                    'x': 0x245,
                    'y': 0x1a2
                }, {
                    'x': 0x245,
                    'y': 0x1de
                }, {
                    'x': 0x24e,
                    'y': 0x20e
                }, {
                    'x': 0x218,
                    'y': 0x1fd
                }],
                [{
                    'x': 0x1b3,
                    'y': 0x183
                }, {
                    'x': 0x1f2,
                    'y': 0x186
                }, {
                    'x': 0x235,
                    'y': 0x184
                }],
                [{
                    'x': 0x16e,
                    'y': 0x1bf
                }, {
                    'x': 0x1ed,
                    'y': 0x1c2
                }, {
                    'x': 0x26e,
                    'y': 0x1c1
                }],
                [{
                    'x': 0x1ee,
                    'y': 0x129
                }, {
                    'x': 0x1ed,
                    'y': 0x16e
                }, {
                    'x': 0x1ed,
                    'y': 0x1b9
                }]
            ]
        }, {
            'paths': [
                [{
                    'x': 0x2cb,
                    'y': 0x11a
                }, {
                    'x': 0x2cc,
                    'y': 0x15e
                }, {
                    'x': 0x2cd,
                    'y': 0x1b2
                }],
                [{
                    'x': 0x2e9,
                    'y': 0x11e
                }, {
                    'x': 0x316,
                    'y': 0x11d
                }, {
                    'x': 0x351,
                    'y': 0x11e
                }, {
                    'x': 0x352,
                    'y': 0x171
                }, {
                    'x': 0x352,
                    'y': 0x1b1
                }],
                [{
                    'x': 0x30b,
                    'y': 0x141
                }, {
                    'x': 0x31f,
                    'y': 0x1df
                }, {
                    'x': 0x29f,
                    'y': 0x202
                }],
                [{
                    'x': 0x31f,
                    'y': 0x18a
                }, {
                    'x': 0x31f,
                    'y': 0x1c1
                }, {
                    'x': 0x324,
                    'y': 0x1fb
                }, {
                    'x': 0x34e,
                    'y': 0x1f9
                }, {
                    'x': 0x36e,
                    'y': 0x1f5
                }, {
                    'x': 0x38d,
                    'y': 0x1f4
                }, {
                    'x': 0x38a,
                    'y': 0x1d3
                }]
            ]
        }],
        'image': 'assets/drawing/mandarin_02.png',
        'finalImage': 'assets/drawing/mandarin_02_final.png',
        'audio': a0_0x15986e(0x210)
    }, {
        'category': a0_0x15986e(0x300),
        'letters': [{
            'paths': [
                [{
                    'x': 0x1a8,
                    'y': 0xfc
                }, {
                    'x': 0x1c6,
                    'y': 0x11a
                }, {
                    'x': 0x1d0,
                    'y': 0x124
                }],
                [{
                    'x': 0x22c,
                    'y': 0x102
                }, {
                    'x': 0x219,
                    'y': 0x11a
                }, {
                    'x': 0x206,
                    'y': 0x12a
                }],
                [{
                    'x': 0x183,
                    'y': 0x12e
                }, {
                    'x': 0x1eb,
                    'y': 0x132
                }, {
                    'x': 0x24f,
                    'y': 0x12f
                }],
                [{
                    'x': 0x19c,
                    'y': 0x15d
                }, {
                    'x': 0x1ee,
                    'y': 0x15b
                }, {
                    'x': 0x23d,
                    'y': 0x15f
                }],
                [{
                    'x': 0x174,
                    'y': 0x18c
                }, {
                    'x': 0x1ee,
                    'y': 0x18c
                }, {
                    'x': 0x262,
                    'y': 0x187
                }],
                [{
                    'x': 0x186,
                    'y': 0x1bd
                }, {
                    'x': 0x1f3,
                    'y': 0x1be
                }, {
                    'x': 0x256,
                    'y': 0x1bb
                }],
                [{
                    'x': 0x1ec,
                    'y': 0x140
                }, {
                    'x': 0x201,
                    'y': 0x1ed
                }, {
                    'x': 0x175,
                    'y': 0x209
                }],
                [{
                    'x': 0x1ff,
                    'y': 0x1c6
                }, {
                    'x': 0x218,
                    'y': 0x1fe
                }, {
                    'x': 0x264,
                    'y': 0x200
                }]
            ]
        }, {
            'paths': [
                [{
                    'x': 0x2af,
                    'y': 0x116
                }, {
                    'x': 0x2af,
                    'y': 0x187
                }, {
                    'x': 0x2ae,
                    'y': 0x205
                }],
                [{
                    'x': 0x2c7,
                    'y': 0x11a
                }, {
                    'x': 0x31a,
                    'y': 0x11b
                }, {
                    'x': 0x37b,
                    'y': 0x11e
                }, {
                    'x': 0x380,
                    'y': 0x188
                }, {
                    'x': 0x380,
                    'y': 0x203
                }],
                [{
                    'x': 0x2ca,
                    'y': 0x140
                }, {
                    'x': 0x316,
                    'y': 0x146
                }, {
                    'x': 0x35f,
                    'y': 0x143
                }],
                [{
                    'x': 0x2d8,
                    'y': 0x17e
                }, {
                    'x': 0x318,
                    'y': 0x181
                }, {
                    'x': 0x35a,
                    'y': 0x17f
                }],
                [{
                    'x': 0x2c9,
                    'y': 0x1c6
                }, {
                    'x': 0x317,
                    'y': 0x1c7
                }, {
                    'x': 0x365,
                    'y': 0x1c8
                }],
                [{
                    'x': 0x314,
                    'y': 0x14f
                }, {
                    'x': 0x313,
                    'y': 0x18a
                }, {
                    'x': 0x313,
                    'y': 0x1bd
                }],
                [{
                    'x': 0x334,
                    'y': 0x193
                }, {
                    'x': 0x34b,
                    'y': 0x1aa
                }, {
                    'x': 0x35d,
                    'y': 0x1b6
                }],
                [{
                    'x': 0x2c7,
                    'y': 0x1ef
                }, {
                    'x': 0x319,
                    'y': 0x1f1
                }, {
                    'x': 0x367,
                    'y': 0x1f1
                }]
            ]
        }],
        'image': a0_0x15986e(0x302),
        'finalImage': a0_0x15986e(0x346),
        'audio': a0_0x15986e(0x28f)
    }, {
        'category': a0_0x15986e(0x261),
        'letters': [{
            'paths': [
                [{
                    'x': 0x281,
                    'y': 0xa6
                }, {
                    'x': 0x1c2,
                    'y': 0xba
                }, {
                    'x': 0x1bd,
                    'y': 0x187
                }, {
                    'x': 0x1d7,
                    'y': 0x220
                }, {
                    'x': 0x282,
                    'y': 0x22d
                }, {
                    'x': 0x32b,
                    'y': 0x21e
                }, {
                    'x': 0x345,
                    'y': 0x17a
                }, {
                    'x': 0x33e,
                    'y': 0xd3
                }, {
                    'x': 0x299,
                    'y': 0xa9
                }]
            ]
        }],
        'image': '',
        'finalImage': a0_0x15986e(0x31e),
        'audio': a0_0x15986e(0x26c)
    }, {
        'category': a0_0x15986e(0x261),
        'letters': [{
            'paths': [
                [{
                    'x': 0x282,
                    'y': 0xab
                }, {
                    'x': 0x215,
                    'y': 0x169
                }, {
                    'x': 0x1a4,
                    'y': 0x228
                }, {
                    'x': 0x27c,
                    'y': 0x22b
                }, {
                    'x': 0x35a,
                    'y': 0x22b
                }, {
                    'x': 0x2dc,
                    'y': 0x148
                }, {
                    'x': 0x28d,
                    'y': 0xc4
                }]
            ]
        }],
        'image': '',
        'finalImage': a0_0x15986e(0x1e9),
        'audio': a0_0x15986e(0x2ee)
    }, {
        'category': a0_0x15986e(0x261),
        'letters': [{
            'paths': [
                [{
                    'x': 0x15f,
                    'y': 0xbe
                }, {
                    'x': 0x287,
                    'y': 0xbc
                }, {
                    'x': 0x39e,
                    'y': 0xc1
                }, {
                    'x': 0x3a1,
                    'y': 0x156
                }, {
                    'x': 0x3a2,
                    'y': 0x216
                }, {
                    'x': 0x285,
                    'y': 0x21a
                }, {
                    'x': 0x15f,
                    'y': 0x21a
                }, {
                    'x': 0x15e,
                    'y': 0x151
                }, {
                    'x': 0x160,
                    'y': 0xd5
                }]
            ]
        }],
        'image': '',
        'finalImage': a0_0x15986e(0x1cf),
        'audio': 'assets/drawing/sounds/shape_03.ogg'
    }, {
        'category': a0_0x15986e(0x261),
        'letters': [{
            'paths': [
                [{
                    'x': 0x1c4,
                    'y': 0xaf
                }, {
                    'x': 0x282,
                    'y': 0xad
                }, {
                    'x': 0x33d,
                    'y': 0xad
                }, {
                    'x': 0x33f,
                    'y': 0x151
                }, {
                    'x': 0x342,
                    'y': 0x228
                }, {
                    'x': 0x286,
                    'y': 0x22b
                }, {
                    'x': 0x1c4,
                    'y': 0x22a
                }, {
                    'x': 0x1c1,
                    'y': 0x130
                }, {
                    'x': 0x1c2,
                    'y': 0xcd
                }]
            ]
        }],
        'image': '',
        'finalImage': a0_0x15986e(0x352),
        'audio': a0_0x15986e(0x24c)
    }, {
        'category': 'Shapes',
        'letters': [{
            'paths': [
                [{
                    'x': 0x1b8,
                    'y': 0x12e
                }, {
                    'x': 0x223,
                    'y': 0xda
                }, {
                    'x': 0x27f,
                    'y': 0x9e
                }, {
                    'x': 0x2df,
                    'y': 0xde
                }, {
                    'x': 0x349,
                    'y': 0x12b
                }, {
                    'x': 0x32d,
                    'y': 0x196
                }, {
                    'x': 0x2fb,
                    'y': 0x21c
                }, {
                    'x': 0x283,
                    'y': 0x21d
                }, {
                    'x': 0x204,
                    'y': 0x21c
                }, {
                    'x': 0x1e3,
                    'y': 0x1bf
                }, {
                    'x': 0x1bd,
                    'y': 0x145
                }]
            ]
        }],
        'image': '',
        'finalImage': a0_0x15986e(0x27a),
        'audio': 'assets/drawing/sounds/shape_05.ogg'
    }, {
        'category': a0_0x15986e(0x261),
        'letters': [{
            'paths': [
                [{
                    'x': 0x1b7,
                    'y': 0x16f
                }, {
                    'x': 0x1e6,
                    'y': 0x110
                }, {
                    'x': 0x21c,
                    'y': 0xbe
                }, {
                    'x': 0x27b,
                    'y': 0xbc
                }, {
                    'x': 0x2e7,
                    'y': 0xbc
                }, {
                    'x': 0x31f,
                    'y': 0x11b
                }, {
                    'x': 0x34b,
                    'y': 0x170
                }, {
                    'x': 0x31c,
                    'y': 0x1c4
                }, {
                    'x': 0x2e6,
                    'y': 0x21e
                }, {
                    'x': 0x289,
                    'y': 0x21b
                }, {
                    'x': 0x218,
                    'y': 0x21b
                }, {
                    'x': 0x1e3,
                    'y': 0x1b9
                }, {
                    'x': 0x1bf,
                    'y': 0x182
                }]
            ]
        }],
        'image': '',
        'finalImage': 'assets/drawing/shape_06.png',
        'audio': a0_0x15986e(0x1d3)
    }, {
        'category': a0_0x15986e(0x2a5),
        'letters': [{
            'paths': [
                [{
                    'x': 0x22d,
                    'y': 0x10b
                }, {
                    'x': 0x255,
                    'y': 0xc9
                }, {
                    'x': 0x286,
                    'y': 0xca
                }, {
                    'x': 0x2c2,
                    'y': 0xcc
                }, {
                    'x': 0x2d5,
                    'y': 0x10e
                }, {
                    'x': 0x285,
                    'y': 0x111
                }, {
                    'x': 0x246,
                    'y': 0x10d
                }],
                [{
                    'x': 0x21c,
                    'y': 0x119
                }, {
                    'x': 0x1c6,
                    'y': 0x16c
                }, {
                    'x': 0x1de,
                    'y': 0x1eb
                }, {
                    'x': 0x1ff,
                    'y': 0x245
                }, {
                    'x': 0x25f,
                    'y': 0x252
                }, {
                    'x': 0x271,
                    'y': 0x239
                }, {
                    'x': 0x281,
                    'y': 0x21e
                }, {
                    'x': 0x27f,
                    'y': 0x194
                }, {
                    'x': 0x281,
                    'y': 0x124
                }],
                [{
                    'x': 0x2e8,
                    'y': 0x120
                }, {
                    'x': 0x33a,
                    'y': 0x15c
                }, {
                    'x': 0x323,
                    'y': 0x1e7
                }, {
                    'x': 0x2f1,
                    'y': 0x24d
                }, {
                    'x': 0x29c,
                    'y': 0x256
                }, {
                    'x': 0x296,
                    'y': 0x244
                }, {
                    'x': 0x28a,
                    'y': 0x231
                }],
                [{
                    'x': 0x249,
                    'y': 0x155
                }, {
                    'x': 0x283,
                    'y': 0x174
                }, {
                    'x': 0x24e,
                    'y': 0x196
                }, {
                    'x': 0x220,
                    'y': 0x18a
                }, {
                    'x': 0x22f,
                    'y': 0x160
                }],
                [{
                    'x': 0x220,
                    'y': 0x1a8
                }, {
                    'x': 0x24d,
                    'y': 0x1b8
                }, {
                    'x': 0x239,
                    'y': 0x1de
                }, {
                    'x': 0x214,
                    'y': 0x20d
                }, {
                    'x': 0x1fe,
                    'y': 0x1d2
                }, {
                    'x': 0x200,
                    'y': 0x1c1
                }, {
                    'x': 0x20d,
                    'y': 0x1ae
                }],
                [{
                    'x': 0x2b4,
                    'y': 0x155
                }, {
                    'x': 0x2da,
                    'y': 0x162
                }, {
                    'x': 0x2cd,
                    'y': 0x185
                }, {
                    'x': 0x2ab,
                    'y': 0x1a8
                }, {
                    'x': 0x295,
                    'y': 0x17c
                }, {
                    'x': 0x294,
                    'y': 0x16b
                }, {
                    'x': 0x29f,
                    'y': 0x15d
                }],
                [{
                    'x': 0x2df,
                    'y': 0x1a6
                }, {
                    'x': 0x301,
                    'y': 0x1b7
                }, {
                    'x': 0x2f5,
                    'y': 0x1e0
                }, {
                    'x': 0x2d4,
                    'y': 0x205
                }, {
                    'x': 0x2bc,
                    'y': 0x1dc
                }, {
                    'x': 0x2b6,
                    'y': 0x1c2
                }, {
                    'x': 0x2ca,
                    'y': 0x1ad
                }]
            ]
        }],
        'image': '',
        'finalImage': 'assets/drawing/drawing_01.png',
        'audio': ''
    }, {
        'category': 'Drawings',
        'letters': [{
            'paths': [
                [{
                    'x': 0x193,
                    'y': 0x101
                }, {
                    'x': 0x1b9,
                    'y': 0x106
                }, {
                    'x': 0x1dc,
                    'y': 0xf6
                }, {
                    'x': 0x1ec,
                    'y': 0x108
                }, {
                    'x': 0x1fb,
                    'y': 0x11e
                }, {
                    'x': 0x1fb,
                    'y': 0x12e
                }, {
                    'x': 0x1f4,
                    'y': 0x13d
                }, {
                    'x': 0x1cc,
                    'y': 0x137
                }, {
                    'x': 0x1a4,
                    'y': 0x12c
                }, {
                    'x': 0x197,
                    'y': 0x128
                }, {
                    'x': 0x190,
                    'y': 0x112
                }],
                [{
                    'x': 0x1e5,
                    'y': 0xe3
                }, {
                    'x': 0x204,
                    'y': 0x96
                }, {
                    'x': 0x26d,
                    'y': 0xa4
                }, {
                    'x': 0x2bd,
                    'y': 0xc1
                }, {
                    'x': 0x2ac,
                    'y': 0x11c
                }, {
                    'x': 0x2a3,
                    'y': 0x139
                }, {
                    'x': 0x292,
                    'y': 0x14d
                }, {
                    'x': 0x280,
                    'y': 0x161
                }, {
                    'x': 0x2b0,
                    'y': 0x166
                }, {
                    'x': 0x2fd,
                    'y': 0x176
                }, {
                    'x': 0x361,
                    'y': 0x140
                }, {
                    'x': 0x399,
                    'y': 0x1d9
                }, {
                    'x': 0x334,
                    'y': 0x226
                }, {
                    'x': 0x283,
                    'y': 0x293
                }, {
                    'x': 0x208,
                    'y': 0x237
                }, {
                    'x': 0x19b,
                    'y': 0x1fe
                }, {
                    'x': 0x1c8,
                    'y': 0x1a4
                }, {
                    'x': 0x1dc,
                    'y': 0x181
                }, {
                    'x': 0x1f8,
                    'y': 0x16b
                }, {
                    'x': 0x214,
                    'y': 0x15e
                }, {
                    'x': 0x1fc,
                    'y': 0x148
                }]
            ]
        }],
        'image': '',
        'finalImage': 'assets/drawing/drawing_02.png',
        'audio': ''
    }, {
        'category': a0_0x15986e(0x2a5),
        'letters': [{
            'paths': [
                [{
                    'x': 0x19e,
                    'y': 0x156
                }, {
                    'x': 0x20f,
                    'y': 0xf1
                }, {
                    'x': 0x282,
                    'y': 0x91
                }, {
                    'x': 0x2ea,
                    'y': 0xec
                }, {
                    'x': 0x362,
                    'y': 0x157
                }, {
                    'x': 0x27b,
                    'y': 0x159
                }, {
                    'x': 0x1ca,
                    'y': 0x157
                }],
                [{
                    'x': 0x1b5,
                    'y': 0x166
                }, {
                    'x': 0x1b8,
                    'y': 0x1d1
                }, {
                    'x': 0x1b8,
                    'y': 0x270
                }, {
                    'x': 0x27e,
                    'y': 0x26f
                }, {
                    'x': 0x34b,
                    'y': 0x26d
                }, {
                    'x': 0x349,
                    'y': 0x1b8
                }, {
                    'x': 0x349,
                    'y': 0x16d
                }],
                [{
                    'x': 0x1eb,
                    'y': 0x177
                }, {
                    'x': 0x215,
                    'y': 0x17b
                }, {
                    'x': 0x23b,
                    'y': 0x17a
                }, {
                    'x': 0x23c,
                    'y': 0x1a7
                }, {
                    'x': 0x23e,
                    'y': 0x1de
                }, {
                    'x': 0x212,
                    'y': 0x1e0
                }, {
                    'x': 0x1ed,
                    'y': 0x1e0
                }, {
                    'x': 0x1f0,
                    'y': 0x1af
                }, {
                    'x': 0x1f0,
                    'y': 0x190
                }],
                [{
                    'x': 0x295,
                    'y': 0x25b
                }, {
                    'x': 0x293,
                    'y': 0x202
                }, {
                    'x': 0x294,
                    'y': 0x1af
                }, {
                    'x': 0x2c7,
                    'y': 0x1ae
                }, {
                    'x': 0x2ff,
                    'y': 0x1b0
                }, {
                    'x': 0x301,
                    'y': 0x201
                }, {
                    'x': 0x302,
                    'y': 0x256
                }]
            ]
        }],
        'image': '',
        'finalImage': a0_0x15986e(0x197),
        'audio': ''
    }, {
        'category': a0_0x15986e(0x2a5),
        'letters': [{
            'paths': [
                [{
                    'x': 0x28a,
                    'y': 0xbf
                }, {
                    'x': 0x318,
                    'y': 0xc7
                }, {
                    'x': 0x343,
                    'y': 0x174
                }, {
                    'x': 0x32c,
                    'y': 0x23a
                }, {
                    'x': 0x287,
                    'y': 0x23e
                }, {
                    'x': 0x1d5,
                    'y': 0x239
                }, {
                    'x': 0x1bf,
                    'y': 0x183
                }, {
                    'x': 0x1d1,
                    'y': 0xd1
                }, {
                    'x': 0x269,
                    'y': 0xc1
                }],
                [{
                    'x': 0x2ac,
                    'y': 0xf4
                }, {
                    'x': 0x2f5,
                    'y': 0x103
                }, {
                    'x': 0x2db,
                    'y': 0x149
                }, {
                    'x': 0x2a7,
                    'y': 0x183
                }, {
                    'x': 0x277,
                    'y': 0x14c
                }, {
                    'x': 0x25f,
                    'y': 0x110
                }, {
                    'x': 0x28f,
                    'y': 0xf8
                }],
                [{
                    'x': 0x1eb,
                    'y': 0x11d
                }, {
                    'x': 0x22c,
                    'y': 0x103
                }, {
                    'x': 0x264,
                    'y': 0x10d
                }],
                [{
                    'x': 0x201,
                    'y': 0x1ee
                }, {
                    'x': 0x212,
                    'y': 0x179
                }, {
                    'x': 0x269,
                    'y': 0x151
                }],
                [{
                    'x': 0x2af,
                    'y': 0x178
                }, {
                    'x': 0x2aa,
                    'y': 0x1be
                }, {
                    'x': 0x29a,
                    'y': 0x229
                }],
                [{
                    'x': 0x2f0,
                    'y': 0x11f
                }, {
                    'x': 0x312,
                    'y': 0x12b
                }, {
                    'x': 0x32f,
                    'y': 0x14f
                }]
            ]
        }],
        'image': '',
        'finalImage': 'assets/drawing/drawing_04.png',
        'audio': ''
    }, {
        'category': a0_0x15986e(0x2a5),
        'letters': [{
            'paths': [
                [{
                    'x': 0x24a,
                    'y': 0x137
                }, {
                    'x': 0x26a,
                    'y': 0x112
                }, {
                    'x': 0x295,
                    'y': 0x125
                }, {
                    'x': 0x2df,
                    'y': 0x13b
                }, {
                    'x': 0x2c4,
                    'y': 0x197
                }, {
                    'x': 0x2b1,
                    'y': 0x1fe
                }, {
                    'x': 0x291,
                    'y': 0x242
                }, {
                    'x': 0x279,
                    'y': 0x27a
                }, {
                    'x': 0x264,
                    'y': 0x23d
                }, {
                    'x': 0x24c,
                    'y': 0x1d4
                }, {
                    'x': 0x23f,
                    'y': 0x19b
                }, {
                    'x': 0x23f,
                    'y': 0x16c
                }, {
                    'x': 0x23f,
                    'y': 0x14e
                }],
                [{
                    'x': 0x260,
                    'y': 0x111
                }, {
                    'x': 0x229,
                    'y': 0xe1
                }, {
                    'x': 0x23c,
                    'y': 0xcb
                }, {
                    'x': 0x254,
                    'y': 0xac
                }, {
                    'x': 0x26c,
                    'y': 0xdb
                }, {
                    'x': 0x265,
                    'y': 0xab
                }, {
                    'x': 0x27f,
                    'y': 0xa9
                }, {
                    'x': 0x29d,
                    'y': 0xae
                }, {
                    'x': 0x29b,
                    'y': 0xd6
                }, {
                    'x': 0x2a9,
                    'y': 0xb4
                }, {
                    'x': 0x2c3,
                    'y': 0xbb
                }, {
                    'x': 0x2ce,
                    'y': 0xd9
                }, {
                    'x': 0x2bd,
                    'y': 0xee
                }, {
                    'x': 0x2b8,
                    'y': 0x106
                }, {
                    'x': 0x2a1,
                    'y': 0x116
                }],
                [{
                    'x': 0x258,
                    'y': 0x163
                }, {
                    'x': 0x28a,
                    'y': 0x149
                }, {
                    'x': 0x2b7,
                    'y': 0x173
                }],
                [{
                    'x': 0x25a,
                    'y': 0x1a6
                }, {
                    'x': 0x27f,
                    'y': 0x18e
                }, {
                    'x': 0x2a2,
                    'y': 0x1b5
                }],
                [{
                    'x': 0x26a,
                    'y': 0x1f8
                }, {
                    'x': 0x276,
                    'y': 0x1e6
                }, {
                    'x': 0x28e,
                    'y': 0x200
                }]
            ]
        }],
        'image': '',
        'finalImage': a0_0x15986e(0x2fc),
        'audio': ''
    }, {
        'category': 'Alphabets',
        'letters': [{
            'paths': [
                [{
                    'x': 0x211,
                    'y': 0xfa
                }, {
                    'x': 0x1d3,
                    'y': 0x170
                }, {
                    'x': 0x19c,
                    'y': 0x1e6
                }],
                [{
                    'x': 0x228,
                    'y': 0x11d
                }, {
                    'x': 0x24e,
                    'y': 0x17b
                }, {
                    'x': 0x282,
                    'y': 0x1ec
                }],
                [{
                    'x': 0x1bc,
                    'y': 0x19f
                }, {
                    'x': 0x214,
                    'y': 0x19f
                }, {
                    'x': 0x24f,
                    'y': 0x1a1
                }]
            ]
        }, {
            'paths': [
                [{
                    'x': 0x356,
                    'y': 0x145
                }, {
                    'x': 0x354,
                    'y': 0x190
                }, {
                    'x': 0x358,
                    'y': 0x1e6
                }],
                [{
                    'x': 0x332,
                    'y': 0x15d
                }, {
                    'x': 0x2e4,
                    'y': 0x12c
                }, {
                    'x': 0x2c4,
                    'y': 0x189
                }, {
                    'x': 0x2bd,
                    'y': 0x1d1
                }, {
                    'x': 0x302,
                    'y': 0x1d9
                }, {
                    'x': 0x33b,
                    'y': 0x1d5
                }, {
                    'x': 0x343,
                    'y': 0x1b6
                }]
            ]
        }],
        'image': 'assets/drawing/alphabet_a.png',
        'finalImage': a0_0x15986e(0x1b1),
        'audio': a0_0x15986e(0x2b9)
    }, {
        'category': 'Alphabets',
        'letters': [{
            'paths': [
                [{
                    'x': 0x1c2,
                    'y': 0xfb
                }, {
                    'x': 0x1c0,
                    'y': 0x168
                }, {
                    'x': 0x1bd,
                    'y': 0x1df
                }],
                [{
                    'x': 0x1e4,
                    'y': 0xfc
                }, {
                    'x': 0x253,
                    'y': 0xf4
                }, {
                    'x': 0x254,
                    'y': 0x126
                }, {
                    'x': 0x266,
                    'y': 0x159
                }, {
                    'x': 0x21b,
                    'y': 0x161
                }, {
                    'x': 0x275,
                    'y': 0x17c
                }, {
                    'x': 0x25e,
                    'y': 0x1a6
                }, {
                    'x': 0x254,
                    'y': 0x1ef
                }, {
                    'x': 0x1dc,
                    'y': 0x1dd
                }]
            ]
        }, {
            'paths': [
                [{
                    'x': 0x2c1,
                    'y': 0xe8
                }, {
                    'x': 0x2c1,
                    'y': 0x163
                }, {
                    'x': 0x2bf,
                    'y': 0x1e1
                }],
                [{
                    'x': 0x2e1,
                    'y': 0x162
                }, {
                    'x': 0x344,
                    'y': 0x137
                }, {
                    'x': 0x350,
                    'y': 0x191
                }, {
                    'x': 0x32f,
                    'y': 0x208
                }, {
                    'x': 0x2e0,
                    'y': 0x1c9
                }]
            ]
        }],
        'image': a0_0x15986e(0x2f7),
        'finalImage': a0_0x15986e(0x306),
        'audio': 'assets/drawing/sounds/alphabet_b.ogg'
    }, {
        'category': 'Alphabets',
        'letters': [{
            'paths': [
                [{
                    'x': 0x26f,
                    'y': 0x10d
                }, {
                    'x': 0x203,
                    'y': 0xd7
                }, {
                    'x': 0x1d3,
                    'y': 0x12e
                }, {
                    'x': 0x1ac,
                    'y': 0x18d
                }, {
                    'x': 0x1ec,
                    'y': 0x1c8
                }, {
                    'x': 0x23d,
                    'y': 0x1f0
                }, {
                    'x': 0x273,
                    'y': 0x1cb
                }]
            ]
        }, {
            'paths': [
                [{
                    'x': 0x340,
                    'y': 0x153
                }, {
                    'x': 0x2db,
                    'y': 0x133
                }, {
                    'x': 0x2cc,
                    'y': 0x19a
                }, {
                    'x': 0x2e5,
                    'y': 0x202
                }, {
                    'x': 0x342,
                    'y': 0x1cf
                }]
            ]
        }],
        'image': a0_0x15986e(0x23a),
        'finalImage': a0_0x15986e(0x17b),
        'audio': a0_0x15986e(0x286)
    }, {
        'category': a0_0x15986e(0x250),
        'letters': [{
            'paths': [
                [{
                    'x': 0x1bb,
                    'y': 0xfb
                }, {
                    'x': 0x1b9,
                    'y': 0x174
                }, {
                    'x': 0x1b6,
                    'y': 0x1e2
                }],
                [{
                    'x': 0x1e1,
                    'y': 0xff
                }, {
                    'x': 0x244,
                    'y': 0xfe
                }, {
                    'x': 0x263,
                    'y': 0x145
                }, {
                    'x': 0x287,
                    'y': 0x18d
                }, {
                    'x': 0x244,
                    'y': 0x1c1
                }, {
                    'x': 0x20c,
                    'y': 0x1dc
                }, {
                    'x': 0x1d9,
                    'y': 0x1da
                }]
            ]
        }, {
            'paths': [
                [{
                    'x': 0x350,
                    'y': 0xea
                }, {
                    'x': 0x354,
                    'y': 0x190
                }, {
                    'x': 0x358,
                    'y': 0x1e6
                }],
                [{
                    'x': 0x332,
                    'y': 0x15d
                }, {
                    'x': 0x2e4,
                    'y': 0x12c
                }, {
                    'x': 0x2c4,
                    'y': 0x189
                }, {
                    'x': 0x2bd,
                    'y': 0x1d1
                }, {
                    'x': 0x302,
                    'y': 0x1d9
                }, {
                    'x': 0x33b,
                    'y': 0x1d5
                }, {
                    'x': 0x343,
                    'y': 0x1b6
                }]
            ]
        }],
        'image': a0_0x15986e(0x2d7),
        'finalImage': 'assets/drawing/alphabet_d_final.png',
        'audio': a0_0x15986e(0x218)
    }, {
        'category': 'Alphabets',
        'letters': [{
            'paths': [
                [{
                    'x': 0x1d0,
                    'y': 0xf9
                }, {
                    'x': 0x1c8,
                    'y': 0x16c
                }, {
                    'x': 0x1cb,
                    'y': 0x1e1
                }],
                [{
                    'x': 0x1ec,
                    'y': 0xfa
                }, {
                    'x': 0x22f,
                    'y': 0xfc
                }, {
                    'x': 0x26d,
                    'y': 0xfc
                }],
                [{
                    'x': 0x1e5,
                    'y': 0x16c
                }, {
                    'x': 0x219,
                    'y': 0x16b
                }, {
                    'x': 0x241,
                    'y': 0x16e
                }],
                [{
                    'x': 0x1e7,
                    'y': 0x1db
                }, {
                    'x': 0x225,
                    'y': 0x1dc
                }, {
                    'x': 0x263,
                    'y': 0x1dd
                }]
            ]
        }, {
            'paths': [
                [{
                    'x': 0x2d1,
                    'y': 0x199
                }, {
                    'x': 0x317,
                    'y': 0x199
                }, {
                    'x': 0x33e,
                    'y': 0x197
                }, {
                    'x': 0x34c,
                    'y': 0x14c
                }, {
                    'x': 0x2ff,
                    'y': 0x145
                }, {
                    'x': 0x2ad,
                    'y': 0x14e
                }, {
                    'x': 0x2b3,
                    'y': 0x196
                }, {
                    'x': 0x2c3,
                    'y': 0x204
                }, {
                    'x': 0x33a,
                    'y': 0x1da
                }]
            ]
        }],
        'image': a0_0x15986e(0x29b),
        'finalImage': a0_0x15986e(0x1d8),
        'audio': 'assets/drawing/sounds/alphabet_e.ogg'
    }, {
        'category': 'Alphabets',
        'letters': [{
            'paths': [
                [{
                    'x': 0x1ee,
                    'y': 0xfd
                }, {
                    'x': 0x238,
                    'y': 0xf9
                }, {
                    'x': 0x286,
                    'y': 0xfd
                }],
                [{
                    'x': 0x1ea,
                    'y': 0x11e
                }, {
                    'x': 0x1e9,
                    'y': 0x189
                }, {
                    'x': 0x1e7,
                    'y': 0x1dc
                }],
                [{
                    'x': 0x201,
                    'y': 0x170
                }, {
                    'x': 0x233,
                    'y': 0x16d
                }, {
                    'x': 0x258,
                    'y': 0x170
                }]
            ]
        }, {
            'paths': [
                [{
                    'x': 0x325,
                    'y': 0xeb
                }, {
                    'x': 0x2e3,
                    'y': 0xe8
                }, {
                    'x': 0x2eb,
                    'y': 0x131
                }, {
                    'x': 0x2e9,
                    'y': 0x18d
                }, {
                    'x': 0x2ec,
                    'y': 0x1e3
                }],
                [{
                    'x': 0x2ba,
                    'y': 0x153
                }, {
                    'x': 0x2ed,
                    'y': 0x151
                }, {
                    'x': 0x328,
                    'y': 0x151
                }]
            ]
        }],
        'image': a0_0x15986e(0x2cd),
        'finalImage': a0_0x15986e(0x2ca),
        'audio': 'assets/drawing/sounds/alphabet_f.ogg'
    }, {
        'category': a0_0x15986e(0x250),
        'letters': [{
            'paths': [
                [{
                    'x': 0x253,
                    'y': 0x108
                }, {
                    'x': 0x1ec,
                    'y': 0xdc
                }, {
                    'x': 0x1b6,
                    'y': 0x136
                }, {
                    'x': 0x18a,
                    'y': 0x197
                }, {
                    'x': 0x1e2,
                    'y': 0x1ce
                }, {
                    'x': 0x23c,
                    'y': 0x1fb
                }, {
                    'x': 0x26a,
                    'y': 0x1bf
                }, {
                    'x': 0x269,
                    'y': 0x19e
                }, {
                    'x': 0x268,
                    'y': 0x184
                }],
                [{
                    'x': 0x223,
                    'y': 0x169
                }, {
                    'x': 0x241,
                    'y': 0x16a
                }, {
                    'x': 0x26b,
                    'y': 0x16c
                }]
            ]
        }, {
            'paths': [
                [{
                    'x': 0x332,
                    'y': 0x15d
                }, {
                    'x': 0x2e4,
                    'y': 0x12c
                }, {
                    'x': 0x2c4,
                    'y': 0x189
                }, {
                    'x': 0x2bd,
                    'y': 0x1d1
                }, {
                    'x': 0x302,
                    'y': 0x1d9
                }, {
                    'x': 0x33b,
                    'y': 0x1d5
                }, {
                    'x': 0x343,
                    'y': 0x1b6
                }],
                [{
                    'x': 0x353,
                    'y': 0x148
                }, {
                    'x': 0x356,
                    'y': 0x19d
                }, {
                    'x': 0x358,
                    'y': 0x1f6
                }, {
                    'x': 0x334,
                    'y': 0x260
                }, {
                    'x': 0x2d5,
                    'y': 0x229
                }]
            ]
        }],
        'image': a0_0x15986e(0x252),
        'finalImage': a0_0x15986e(0x1ea),
        'audio': a0_0x15986e(0x1c1)
    }, {
        'category': 'Alphabets',
        'letters': [{
            'paths': [
                [{
                    'x': 0x1ae,
                    'y': 0xf8
                }, {
                    'x': 0x1af,
                    'y': 0x16a
                }, {
                    'x': 0x1ad,
                    'y': 0x1de
                }],
                [{
                    'x': 0x1d0,
                    'y': 0x16a
                }, {
                    'x': 0x20f,
                    'y': 0x16d
                }, {
                    'x': 0x24d,
                    'y': 0x16a
                }],
                [{
                    'x': 0x261,
                    'y': 0xf7
                }, {
                    'x': 0x25e,
                    'y': 0x178
                }, {
                    'x': 0x262,
                    'y': 0x1dc
                }]
            ]
        }, {
            'paths': [
                [{
                    'x': 0x2c5,
                    'y': 0xe7
                }, {
                    'x': 0x2c4,
                    'y': 0x14d
                }, {
                    'x': 0x2c6,
                    'y': 0x1e0
                }],
                [{
                    'x': 0x2e4,
                    'y': 0x16a
                }, {
                    'x': 0x366,
                    'y': 0x11b
                }, {
                    'x': 0x359,
                    'y': 0x1dd
                }]
            ]
        }],
        'image': a0_0x15986e(0x2b0),
        'finalImage': a0_0x15986e(0x1ba),
        'audio': a0_0x15986e(0x31f)
    }, {
        'category': a0_0x15986e(0x250),
        'letters': [{
            'paths': [
                [{
                    'x': 0x24a,
                    'y': 0xf4
                }, {
                    'x': 0x24f,
                    'y': 0x174
                }, {
                    'x': 0x24f,
                    'y': 0x1e4
                }]
            ]
        }, {
            'paths': [
                [{
                    'x': 0x2aa,
                    'y': 0xde
                }, {
                    'x': 0x2b4,
                    'y': 0xef
                }, {
                    'x': 0x2bf,
                    'y': 0x100
                }],
                [{
                    'x': 0x2b3,
                    'y': 0x143
                }, {
                    'x': 0x2b4,
                    'y': 0x189
                }, {
                    'x': 0x2b4,
                    'y': 0x1e2
                }]
            ]
        }],
        'image': 'assets/drawing/alphabet_i.png',
        'finalImage': a0_0x15986e(0x1b3),
        'audio': a0_0x15986e(0x247)
    }, {
        'category': 'Alphabets',
        'letters': [{
            'paths': [
                [{
                    'x': 0x289,
                    'y': 0xfb
                }, {
                    'x': 0x289,
                    'y': 0x152
                }, {
                    'x': 0x288,
                    'y': 0x191
                }, {
                    'x': 0x286,
                    'y': 0x1d4
                }, {
                    'x': 0x24a,
                    'y': 0x1e1
                }, {
                    'x': 0x21b,
                    'y': 0x1e2
                }, {
                    'x': 0x206,
                    'y': 0x1bf
                }]
            ]
        }, {
            'paths': [
                [{
                    'x': 0x2e4,
                    'y': 0xdd
                }, {
                    'x': 0x2ef,
                    'y': 0xef
                }, {
                    'x': 0x2f9,
                    'y': 0xf8
                }],
                [{
                    'x': 0x2ed,
                    'y': 0x147
                }, {
                    'x': 0x2f1,
                    'y': 0x1a4
                }, {
                    'x': 0x2ef,
                    'y': 0x1f5
                }, {
                    'x': 0x2e9,
                    'y': 0x237
                }, {
                    'x': 0x2a1,
                    'y': 0x234
                }]
            ]
        }],
        'image': a0_0x15986e(0x2d5),
        'finalImage': a0_0x15986e(0x2bd),
        'audio': a0_0x15986e(0x329)
    }, {
        'category': a0_0x15986e(0x250),
        'letters': [{
            'paths': [
                [{
                    'x': 0x1ca,
                    'y': 0xf3
                }, {
                    'x': 0x1c8,
                    'y': 0x16f
                }, {
                    'x': 0x1c5,
                    'y': 0x1e1
                }],
                [{
                    'x': 0x25d,
                    'y': 0xfd
                }, {
                    'x': 0x229,
                    'y': 0x131
                }, {
                    'x': 0x1f1,
                    'y': 0x16d
                }, {
                    'x': 0x22f,
                    'y': 0x1aa
                }, {
                    'x': 0x262,
                    'y': 0x1e3
                }]
            ]
        }, {
            'paths': [
                [{
                    'x': 0x2c5,
                    'y': 0xea
                }, {
                    'x': 0x2ca,
                    'y': 0x155
                }, {
                    'x': 0x2cd,
                    'y': 0x1db
                }],
                [{
                    'x': 0x338,
                    'y': 0x154
                }, {
                    'x': 0x30f,
                    'y': 0x177
                }, {
                    'x': 0x2e8,
                    'y': 0x194
                }, {
                    'x': 0x319,
                    'y': 0x1b6
                }, {
                    'x': 0x342,
                    'y': 0x1df
                }]
            ]
        }],
        'image': a0_0x15986e(0x1a0),
        'finalImage': a0_0x15986e(0x323),
        'audio': 'assets/drawing/sounds/alphabet_k.ogg'
    }, {
        'category': a0_0x15986e(0x250),
        'letters': [{
            'paths': [
                [{
                    'x': 0x1fb,
                    'y': 0xf7
                }, {
                    'x': 0x1fc,
                    'y': 0x166
                }, {
                    'x': 0x1fe,
                    'y': 0x1de
                }, {
                    'x': 0x23f,
                    'y': 0x1de
                }, {
                    'x': 0x28c,
                    'y': 0x1e2
                }]
            ]
        }, {
            'paths': [
                [{
                    'x': 0x2ee,
                    'y': 0xe8
                }, {
                    'x': 0x2e9,
                    'y': 0x14c
                }, {
                    'x': 0x2e7,
                    'y': 0x1ad
                }, {
                    'x': 0x2e2,
                    'y': 0x1da
                }, {
                    'x': 0x313,
                    'y': 0x1e1
                }]
            ]
        }],
        'image': a0_0x15986e(0x32c),
        'finalImage': a0_0x15986e(0x330),
        'audio': a0_0x15986e(0x1bc)
    }, {
        'category': a0_0x15986e(0x250),
        'letters': [{
            'paths': [
                [{
                    'x': 0x15e,
                    'y': 0xfd
                }, {
                    'x': 0x15d,
                    'y': 0x167
                }, {
                    'x': 0x15e,
                    'y': 0x1dc
                }],
                [{
                    'x': 0x175,
                    'y': 0x11e
                }, {
                    'x': 0x19b,
                    'y': 0x14e
                }, {
                    'x': 0x1d0,
                    'y': 0x188
                }, {
                    'x': 0x20e,
                    'y': 0x147
                }, {
                    'x': 0x250,
                    'y': 0xfb
                }, {
                    'x': 0x252,
                    'y': 0x179
                }, {
                    'x': 0x251,
                    'y': 0x1dc
                }]
            ]
        }, {
            'paths': [
                [{
                    'x': 0x2b3,
                    'y': 0x148
                }, {
                    'x': 0x2b2,
                    'y': 0x18b
                }, {
                    'x': 0x2b5,
                    'y': 0x1e6
                }, {
                    'x': 0x2c0,
                    'y': 0x14b
                }, {
                    'x': 0x2fe,
                    'y': 0x153
                }, {
                    'x': 0x333,
                    'y': 0x14f
                }, {
                    'x': 0x32d,
                    'y': 0x1e5
                }, {
                    'x': 0x33a,
                    'y': 0x137
                }, {
                    'x': 0x386,
                    'y': 0x155
                }, {
                    'x': 0x3b5,
                    'y': 0x16a
                }, {
                    'x': 0x3a4,
                    'y': 0x1e4
                }]
            ]
        }],
        'image': a0_0x15986e(0x2ba),
        'finalImage': a0_0x15986e(0x2ff),
        'audio': a0_0x15986e(0x2a3)
    }, {
        'category': a0_0x15986e(0x250),
        'letters': [{
            'paths': [
                [{
                    'x': 0x1a6,
                    'y': 0xfb
                }, {
                    'x': 0x1a4,
                    'y': 0x171
                }, {
                    'x': 0x1a6,
                    'y': 0x1e0
                }],
                [{
                    'x': 0x1c3,
                    'y': 0x112
                }, {
                    'x': 0x207,
                    'y': 0x16d
                }, {
                    'x': 0x260,
                    'y': 0x1e2
                }, {
                    'x': 0x261,
                    'y': 0x168
                }, {
                    'x': 0x262,
                    'y': 0xf9
                }]
            ]
        }, {
            'paths': [
                [{
                    'x': 0x2c6,
                    'y': 0x148
                }, {
                    'x': 0x2c2,
                    'y': 0x18c
                }, {
                    'x': 0x2c7,
                    'y': 0x1dd
                }, {
                    'x': 0x2d1,
                    'y': 0x151
                }, {
                    'x': 0x31b,
                    'y': 0x154
                }, {
                    'x': 0x367,
                    'y': 0x156
                }, {
                    'x': 0x355,
                    'y': 0x1e6
                }]
            ]
        }],
        'image': a0_0x15986e(0x209),
        'finalImage': a0_0x15986e(0x25c),
        'audio': a0_0x15986e(0x321)
    }, {
        'category': 'Alphabets',
        'letters': [{
            'paths': [
                [{
                    'x': 0x208,
                    'y': 0xfc
                }, {
                    'x': 0x197,
                    'y': 0x10b
                }, {
                    'x': 0x199,
                    'y': 0x176
                }, {
                    'x': 0x1a2,
                    'y': 0x1d3
                }, {
                    'x': 0x20a,
                    'y': 0x1e1
                }, {
                    'x': 0x274,
                    'y': 0x1d6
                }, {
                    'x': 0x278,
                    'y': 0x175
                }, {
                    'x': 0x27a,
                    'y': 0x10c
                }, {
                    'x': 0x226,
                    'y': 0x101
                }]
            ]
        }, {
            'paths': [
                [{
                    'x': 0x31b,
                    'y': 0x148
                }, {
                    'x': 0x2c9,
                    'y': 0x150
                }, {
                    'x': 0x2cf,
                    'y': 0x192
                }, {
                    'x': 0x2ca,
                    'y': 0x1d7
                }, {
                    'x': 0x319,
                    'y': 0x1e3
                }, {
                    'x': 0x36e,
                    'y': 0x1d9
                }, {
                    'x': 0x367,
                    'y': 0x18d
                }, {
                    'x': 0x363,
                    'y': 0x150
                }, {
                    'x': 0x336,
                    'y': 0x14f
                }]
            ]
        }],
        'image': 'assets/drawing/alphabet_o.png',
        'finalImage': a0_0x15986e(0x224),
        'audio': 'assets/drawing/sounds/alphabet_o.ogg'
    }, {
        'category': 'Alphabets',
        'letters': [{
            'paths': [
                [{
                    'x': 0x1bc,
                    'y': 0xf9
                }, {
                    'x': 0x1bf,
                    'y': 0x158
                }, {
                    'x': 0x1c0,
                    'y': 0x1e0
                }],
                [{
                    'x': 0x1dd,
                    'y': 0x100
                }, {
                    'x': 0x25e,
                    'y': 0xf2
                }, {
                    'x': 0x25d,
                    'y': 0x13f
                }, {
                    'x': 0x251,
                    'y': 0x19a
                }, {
                    'x': 0x1e1,
                    'y': 0x18b
                }]
            ]
        }, {
            'paths': [
                [{
                    'x': 0x2bb,
                    'y': 0x149
                }, {
                    'x': 0x2bf,
                    'y': 0x1ac
                }, {
                    'x': 0x2bb,
                    'y': 0x234
                }],
                [{
                    'x': 0x2da,
                    'y': 0x164
                }, {
                    'x': 0x32c,
                    'y': 0x130
                }, {
                    'x': 0x343,
                    'y': 0x192
                }, {
                    'x': 0x325,
                    'y': 0x202
                }, {
                    'x': 0x2d6,
                    'y': 0x1bc
                }]
            ]
        }],
        'image': 'assets/drawing/alphabet_p.png',
        'finalImage': a0_0x15986e(0x2b4),
        'audio': a0_0x15986e(0x172)
    }, {
        'category': 'Alphabets',
        'letters': [{
            'paths': [
                [{
                    'x': 0x1fd,
                    'y': 0xf4
                }, {
                    'x': 0x18c,
                    'y': 0x11b
                }, {
                    'x': 0x196,
                    'y': 0x170
                }, {
                    'x': 0x18e,
                    'y': 0x1d5
                }, {
                    'x': 0x201,
                    'y': 0x1e1
                }, {
                    'x': 0x281,
                    'y': 0x1c9
                }, {
                    'x': 0x273,
                    'y': 0x16e
                }, {
                    'x': 0x26c,
                    'y': 0x108
                }, {
                    'x': 0x218,
                    'y': 0xfd
                }],
                [{
                    'x': 0x24e,
                    'y': 0x1a5
                }, {
                    'x': 0x26c,
                    'y': 0x1c3
                }, {
                    'x': 0x28b,
                    'y': 0x1e5
                }]
            ]
        }, {
            'paths': [
                [{
                    'x': 0x341,
                    'y': 0x15d
                }, {
                    'x': 0x2f9,
                    'y': 0x135
                }, {
                    'x': 0x2e1,
                    'y': 0x18d
                }, {
                    'x': 0x2f0,
                    'y': 0x1fd
                }, {
                    'x': 0x349,
                    'y': 0x1c2
                }],
                [{
                    'x': 0x366,
                    'y': 0x149
                }, {
                    'x': 0x366,
                    'y': 0x1b9
                }, {
                    'x': 0x366,
                    'y': 0x236
                }]
            ]
        }],
        'image': a0_0x15986e(0x31c),
        'finalImage': a0_0x15986e(0x198),
        'audio': a0_0x15986e(0x30e)
    }, {
        'category': a0_0x15986e(0x250),
        'letters': [{
            'paths': [
                [{
                    'x': 0x1dd,
                    'y': 0xfd
                }, {
                    'x': 0x1de,
                    'y': 0x166
                }, {
                    'x': 0x1dc,
                    'y': 0x1e5
                }],
                [{
                    'x': 0x1ff,
                    'y': 0xfa
                }, {
                    'x': 0x272,
                    'y': 0xf3
                }, {
                    'x': 0x274,
                    'y': 0x141
                }, {
                    'x': 0x26c,
                    'y': 0x18d
                }, {
                    'x': 0x1f0,
                    'y': 0x18c
                }, {
                    'x': 0x263,
                    'y': 0x18d
                }, {
                    'x': 0x277,
                    'y': 0x1e5
                }]
            ]
        }, {
            'paths': [
                [{
                    'x': 0x2d2,
                    'y': 0x147
                }, {
                    'x': 0x2d5,
                    'y': 0x17c
                }, {
                    'x': 0x2d5,
                    'y': 0x1e2
                }, {
                    'x': 0x2db,
                    'y': 0x140
                }, {
                    'x': 0x337,
                    'y': 0x14e
                }]
            ]
        }],
        'image': a0_0x15986e(0x1ca),
        'finalImage': 'assets/drawing/alphabet_r_final.png',
        'audio': 'assets/drawing/sounds/alphabet_r.ogg'
    }, {
        'category': a0_0x15986e(0x250),
        'letters': [{
            'paths': [
                [{
                    'x': 0x254,
                    'y': 0x10d
                }, {
                    'x': 0x1fa,
                    'y': 0xd8
                }, {
                    'x': 0x1e3,
                    'y': 0x128
                }, {
                    'x': 0x1d1,
                    'y': 0x15f
                }, {
                    'x': 0x234,
                    'y': 0x172
                }, {
                    'x': 0x285,
                    'y': 0x195
                }, {
                    'x': 0x253,
                    'y': 0x1ce
                }, {
                    'x': 0x1fd,
                    'y': 0x1fe
                }, {
                    'x': 0x1d4,
                    'y': 0x1ba
                }]
            ]
        }, {
            'paths': [
                [{
                    'x': 0x323,
                    'y': 0x14a
                }, {
                    'x': 0x2be,
                    'y': 0x12d
                }, {
                    'x': 0x2c6,
                    'y': 0x170
                }, {
                    'x': 0x2d3,
                    'y': 0x19c
                }, {
                    'x': 0x31d,
                    'y': 0x19f
                }, {
                    'x': 0x34e,
                    'y': 0x1c6
                }, {
                    'x': 0x30f,
                    'y': 0x1e3
                }, {
                    'x': 0x2dd,
                    'y': 0x1e4
                }, {
                    'x': 0x2bd,
                    'y': 0x1d5
                }]
            ]
        }],
        'image': a0_0x15986e(0x340),
        'finalImage': 'assets/drawing/alphabet_s_final.png',
        'audio': 'assets/drawing/sounds/alphabet_s.ogg'
    }, {
        'category': a0_0x15986e(0x250),
        'letters': [{
            'paths': [
                [{
                    'x': 0x1cd,
                    'y': 0xf5
                }, {
                    'x': 0x23a,
                    'y': 0xf7
                }, {
                    'x': 0x2a7,
                    'y': 0xf9
                }],
                [{
                    'x': 0x23b,
                    'y': 0x111
                }, {
                    'x': 0x239,
                    'y': 0x172
                }, {
                    'x': 0x23c,
                    'y': 0x1dd
                }]
            ]
        }, {
            'paths': [
                [{
                    'x': 0x2c2,
                    'y': 0x14e
                }, {
                    'x': 0x2f9,
                    'y': 0x152
                }, {
                    'x': 0x338,
                    'y': 0x152
                }],
                [{
                    'x': 0x2f2,
                    'y': 0xf7
                }, {
                    'x': 0x2f4,
                    'y': 0x148
                }, {
                    'x': 0x2f4,
                    'y': 0x1a7
                }, {
                    'x': 0x2f4,
                    'y': 0x1d5
                }, {
                    'x': 0x326,
                    'y': 0x1df
                }]
            ]
        }],
        'image': a0_0x15986e(0x34e),
        'finalImage': a0_0x15986e(0x2e3),
        'audio': 'assets/drawing/sounds/alphabet_t.ogg'
    }, {
        'category': a0_0x15986e(0x250),
        'letters': [{
            'paths': [
                [{
                    'x': 0x1a8,
                    'y': 0xf8
                }, {
                    'x': 0x1a3,
                    'y': 0x16b
                }, {
                    'x': 0x1b0,
                    'y': 0x1ad
                }, {
                    'x': 0x205,
                    'y': 0x224
                }, {
                    'x': 0x260,
                    'y': 0x1a8
                }, {
                    'x': 0x26b,
                    'y': 0x147
                }, {
                    'x': 0x262,
                    'y': 0xf0
                }]
            ]
        }, {
            'paths': [
                [{
                    'x': 0x2c8,
                    'y': 0x14a
                }, {
                    'x': 0x2bd,
                    'y': 0x1bf
                }, {
                    'x': 0x2ef,
                    'y': 0x1d1
                }, {
                    'x': 0x31f,
                    'y': 0x1ee
                }, {
                    'x': 0x34a,
                    'y': 0x1b2
                }, {
                    'x': 0x354,
                    'y': 0x174
                }, {
                    'x': 0x355,
                    'y': 0x147
                }, {
                    'x': 0x363,
                    'y': 0x19c
                }, {
                    'x': 0x35b,
                    'y': 0x1e0
                }]
            ]
        }],
        'image': 'assets/drawing/alphabet_u.png',
        'finalImage': a0_0x15986e(0x19e),
        'audio': a0_0x15986e(0x2b7)
    }, {
        'category': 'Alphabets',
        'letters': [{
            'paths': [
                [{
                    'x': 0x193,
                    'y': 0xfe
                }, {
                    'x': 0x1cd,
                    'y': 0x16b
                }, {
                    'x': 0x20a,
                    'y': 0x1d7
                }, {
                    'x': 0x24a,
                    'y': 0x15a
                }, {
                    'x': 0x27a,
                    'y': 0xf9
                }]
            ]
        }, {
            'paths': [
                [{
                    'x': 0x2b6,
                    'y': 0x143
                }, {
                    'x': 0x2dd,
                    'y': 0x18a
                }, {
                    'x': 0x313,
                    'y': 0x1e3
                }, {
                    'x': 0x346,
                    'y': 0x185
                }, {
                    'x': 0x366,
                    'y': 0x14a
                }]
            ]
        }],
        'image': a0_0x15986e(0x1ec),
        'finalImage': 'assets/drawing/alphabet_v_final.png',
        'audio': a0_0x15986e(0x230)
    }, {
        'category': a0_0x15986e(0x250),
        'letters': [{
            'paths': [
                [{
                    'x': 0x14d,
                    'y': 0xf8
                }, {
                    'x': 0x171,
                    'y': 0x166
                }, {
                    'x': 0x19c,
                    'y': 0x1de
                }, {
                    'x': 0x1c1,
                    'y': 0x165
                }, {
                    'x': 0x1e8,
                    'y': 0x104
                }, {
                    'x': 0x20f,
                    'y': 0x16b
                }, {
                    'x': 0x237,
                    'y': 0x1df
                }, {
                    'x': 0x265,
                    'y': 0x153
                }, {
                    'x': 0x289,
                    'y': 0xf3
                }]
            ]
        }, {
            'paths': [
                [{
                    'x': 0x2c8,
                    'y': 0x143
                }, {
                    'x': 0x2e1,
                    'y': 0x182
                }, {
                    'x': 0x303,
                    'y': 0x1e1
                }, {
                    'x': 0x323,
                    'y': 0x17a
                }, {
                    'x': 0x33b,
                    'y': 0x14c
                }, {
                    'x': 0x35b,
                    'y': 0x193
                }, {
                    'x': 0x379,
                    'y': 0x1e3
                }, {
                    'x': 0x39c,
                    'y': 0x186
                }, {
                    'x': 0x3b8,
                    'y': 0x14a
                }]
            ]
        }],
        'image': a0_0x15986e(0x2a9),
        'finalImage': a0_0x15986e(0x23e),
        'audio': a0_0x15986e(0x30f)
    }, {
        'category': 'Alphabets',
        'letters': [{
            'paths': [
                [{
                    'x': 0x1a9,
                    'y': 0xf6
                }, {
                    'x': 0x20f,
                    'y': 0x168
                }, {
                    'x': 0x272,
                    'y': 0x1dc
                }],
                [{
                    'x': 0x278,
                    'y': 0xf5
                }, {
                    'x': 0x20c,
                    'y': 0x16e
                }, {
                    'x': 0x1a4,
                    'y': 0x1da
                }]
            ]
        }, {
            'paths': [
                [{
                    'x': 0x2c9,
                    'y': 0x147
                }, {
                    'x': 0x313,
                    'y': 0x193
                }, {
                    'x': 0x35c,
                    'y': 0x1dc
                }],
                [{
                    'x': 0x359,
                    'y': 0x14e
                }, {
                    'x': 0x312,
                    'y': 0x18f
                }, {
                    'x': 0x2ce,
                    'y': 0x1d8
                }]
            ]
        }],
        'image': a0_0x15986e(0x246),
        'finalImage': a0_0x15986e(0x200),
        'audio': 'assets/drawing/sounds/alphabet_x.ogg'
    }, {
        'category': a0_0x15986e(0x250),
        'letters': [{
            'paths': [
                [{
                    'x': 0x1be,
                    'y': 0xfd
                }, {
                    'x': 0x1d9,
                    'y': 0x130
                }, {
                    'x': 0x208,
                    'y': 0x171
                }],
                [{
                    'x': 0x271,
                    'y': 0xf5
                }, {
                    'x': 0x24b,
                    'y': 0x13a
                }, {
                    'x': 0x21f,
                    'y': 0x17c
                }, {
                    'x': 0x216,
                    'y': 0x1b1
                }, {
                    'x': 0x219,
                    'y': 0x1e4
                }]
            ]
        }, {
            'paths': [
                [{
                    'x': 0x2a9,
                    'y': 0x141
                }, {
                    'x': 0x2c9,
                    'y': 0x181
                }, {
                    'x': 0x2f6,
                    'y': 0x1c5
                }],
                [{
                    'x': 0x34c,
                    'y': 0x148
                }, {
                    'x': 0x312,
                    'y': 0x1bf
                }, {
                    'x': 0x2dd,
                    'y': 0x23a
                }]
            ]
        }],
        'image': a0_0x15986e(0x26f),
        'finalImage': 'assets/drawing/alphabet_y_final.png',
        'audio': a0_0x15986e(0x1bf)
    }, {
        'category': a0_0x15986e(0x250),
        'letters': [{
            'paths': [
                [{
                    'x': 0x1b5,
                    'y': 0xf7
                }, {
                    'x': 0x1fd,
                    'y': 0xfa
                }, {
                    'x': 0x255,
                    'y': 0xfd
                }, {
                    'x': 0x207,
                    'y': 0x16c
                }, {
                    'x': 0x1b8,
                    'y': 0x1d9
                }, {
                    'x': 0x20a,
                    'y': 0x1d9
                }, {
                    'x': 0x25d,
                    'y': 0x1d9
                }]
            ]
        }, {
            'paths': [
                [{
                    'x': 0x2bd,
                    'y': 0x14b
                }, {
                    'x': 0x308,
                    'y': 0x145
                }, {
                    'x': 0x349,
                    'y': 0x14d
                }, {
                    'x': 0x2fc,
                    'y': 0x192
                }, {
                    'x': 0x2b5,
                    'y': 0x1d8
                }, {
                    'x': 0x2fd,
                    'y': 0x1d8
                }, {
                    'x': 0x349,
                    'y': 0x1da
                }]
            ]
        }],
        'image': a0_0x15986e(0x2cc),
        'finalImage': a0_0x15986e(0x319),
        'audio': a0_0x15986e(0x204)
    }, {
        'category': 'Numbers',
        'letters': [{
            'paths': [
                [{
                    'x': 0x29d,
                    'y': 0xfa
                }, {
                    'x': 0x278,
                    'y': 0x119
                }, {
                    'x': 0x255,
                    'y': 0x13a
                }],
                [{
                    'x': 0x2a1,
                    'y': 0x11a
                }, {
                    'x': 0x29f,
                    'y': 0x178
                }, {
                    'x': 0x29f,
                    'y': 0x1dc
                }]
            ]
        }],
        'image': a0_0x15986e(0x2df),
        'finalImage': a0_0x15986e(0x271),
        'audio': 'assets/drawing/sounds/number_01.ogg'
    }, {
        'category': 'Numbers',
        'letters': [{
            'paths': [
                [{
                    'x': 0x233,
                    'y': 0x142
                }, {
                    'x': 0x23d,
                    'y': 0xe2
                }, {
                    'x': 0x29f,
                    'y': 0xfe
                }, {
                    'x': 0x305,
                    'y': 0x156
                }, {
                    'x': 0x235,
                    'y': 0x1da
                }, {
                    'x': 0x283,
                    'y': 0x1d8
                }, {
                    'x': 0x2d4,
                    'y': 0x1d7
                }]
            ]
        }],
        'image': 'assets/drawing/number_2.png',
        'finalImage': 'assets/drawing/number_2_final.png',
        'audio': 'assets/drawing/sounds/number_02.ogg'
    }, {
        'category': 'Numbers',
        'letters': [{
            'paths': [
                [{
                    'x': 0x243,
                    'y': 0x116
                }, {
                    'x': 0x285,
                    'y': 0xd0
                }, {
                    'x': 0x2bf,
                    'y': 0x10f
                }, {
                    'x': 0x2dd,
                    'y': 0x14b
                }, {
                    'x': 0x281,
                    'y': 0x166
                }, {
                    'x': 0x302,
                    'y': 0x18f
                }, {
                    'x': 0x2b9,
                    'y': 0x1d7
                }, {
                    'x': 0x25e,
                    'y': 0x207
                }, {
                    'x': 0x231,
                    'y': 0x1ae
                }]
            ]
        }],
        'image': 'assets/drawing/number_3.png',
        'finalImage': a0_0x15986e(0x20d),
        'audio': a0_0x15986e(0x290)
    }, {
        'category': a0_0x15986e(0x1de),
        'letters': [{
            'paths': [
                [{
                    'x': 0x254,
                    'y': 0xfb
                }, {
                    'x': 0x246,
                    'y': 0x141
                }, {
                    'x': 0x237,
                    'y': 0x184
                }, {
                    'x': 0x27d,
                    'y': 0x185
                }, {
                    'x': 0x2c8,
                    'y': 0x185
                }],
                [{
                    'x': 0x2c2,
                    'y': 0xf7
                }, {
                    'x': 0x2c1,
                    'y': 0x164
                }, {
                    'x': 0x2c4,
                    'y': 0x1dc
                }]
            ]
        }],
        'image': a0_0x15986e(0x331),
        'finalImage': a0_0x15986e(0x1bd),
        'audio': a0_0x15986e(0x17e)
    }, {
        'category': a0_0x15986e(0x1de),
        'letters': [{
            'paths': [
                [{
                    'x': 0x254,
                    'y': 0xfb
                }, {
                    'x': 0x286,
                    'y': 0xfc
                }, {
                    'x': 0x2be,
                    'y': 0xfb
                }],
                [{
                    'x': 0x250,
                    'y': 0x120
                }, {
                    'x': 0x24c,
                    'y': 0x140
                }, {
                    'x': 0x24a,
                    'y': 0x16b
                }, {
                    'x': 0x290,
                    'y': 0x14b
                }, {
                    'x': 0x2bc,
                    'y': 0x180
                }, {
                    'x': 0x2d0,
                    'y': 0x1c1
                }, {
                    'x': 0x2a0,
                    'y': 0x1dc
                }, {
                    'x': 0x25c,
                    'y': 0x1f5
                }, {
                    'x': 0x241,
                    'y': 0x1c6
                }]
            ]
        }],
        'image': a0_0x15986e(0x1cb),
        'finalImage': 'assets/drawing/number_5_final.png',
        'audio': 'assets/drawing/sounds/number_05.ogg'
    }, {
        'category': 'Numbers',
        'letters': [{
            'paths': [
                [{
                    'x': 0x2be,
                    'y': 0xfb
                }, {
                    'x': 0x247,
                    'y': 0x101
                }, {
                    'x': 0x23b,
                    'y': 0x16e
                }, {
                    'x': 0x220,
                    'y': 0x1e4
                }, {
                    'x': 0x283,
                    'y': 0x1e6
                }, {
                    'x': 0x2dd,
                    'y': 0x1de
                }, {
                    'x': 0x2c5,
                    'y': 0x18b
                }, {
                    'x': 0x283,
                    'y': 0x157
                }, {
                    'x': 0x255,
                    'y': 0x184
                }]
            ]
        }],
        'image': a0_0x15986e(0x2c7),
        'finalImage': a0_0x15986e(0x2cf),
        'audio': a0_0x15986e(0x273)
    }, {
        'category': a0_0x15986e(0x1de),
        'letters': [{
            'paths': [
                [{
                    'x': 0x23a,
                    'y': 0xfd
                }, {
                    'x': 0x286,
                    'y': 0xfc
                }, {
                    'x': 0x2c6,
                    'y': 0xfd
                }, {
                    'x': 0x29b,
                    'y': 0x152
                }, {
                    'x': 0x261,
                    'y': 0x1e0
                }]
            ]
        }],
        'image': a0_0x15986e(0x2d9),
        'finalImage': a0_0x15986e(0x1c5),
        'audio': 'assets/drawing/sounds/number_07.ogg'
    }, {
        'category': a0_0x15986e(0x1de),
        'letters': [{
            'paths': [
                [{
                    'x': 0x27c,
                    'y': 0x161
                }, {
                    'x': 0x233,
                    'y': 0x14c
                }, {
                    'x': 0x248,
                    'y': 0x117
                }, {
                    'x': 0x27d,
                    'y': 0xcb
                }, {
                    'x': 0x2ba,
                    'y': 0x114
                }, {
                    'x': 0x2cf,
                    'y': 0x14a
                }, {
                    'x': 0x27f,
                    'y': 0x16b
                }, {
                    'x': 0x229,
                    'y': 0x174
                }, {
                    'x': 0x236,
                    'y': 0x1b0
                }, {
                    'x': 0x244,
                    'y': 0x1e1
                }, {
                    'x': 0x284,
                    'y': 0x1e5
                }, {
                    'x': 0x2d3,
                    'y': 0x1d8
                }, {
                    'x': 0x2cc,
                    'y': 0x1a6
                }, {
                    'x': 0x2d5,
                    'y': 0x179
                }, {
                    'x': 0x2a1,
                    'y': 0x172
                }]
            ]
        }],
        'image': a0_0x15986e(0x19f),
        'finalImage': 'assets/drawing/number_8_final.png',
        'audio': 'assets/drawing/sounds/number_08.ogg'
    }, {
        'category': a0_0x15986e(0x1de),
        'letters': [{
            'paths': [
                [{
                    'x': 0x2ae,
                    'y': 0x15a
                }, {
                    'x': 0x244,
                    'y': 0x188
                }, {
                    'x': 0x241,
                    'y': 0x124
                }, {
                    'x': 0x27a,
                    'y': 0xca
                }, {
                    'x': 0x2bf,
                    'y': 0x118
                }, {
                    'x': 0x2e5,
                    'y': 0x1c5
                }, {
                    'x': 0x247,
                    'y': 0x1dc
                }]
            ]
        }],
        'image': a0_0x15986e(0x2c6),
        'finalImage': 'assets/drawing/number_9_final.png',
        'audio': a0_0x15986e(0x1e0)
    }, {
        'category': a0_0x15986e(0x1de),
        'letters': [{
            'paths': [
                [{
                    'x': 0x27c,
                    'y': 0xf0
                }, {
                    'x': 0x22e,
                    'y': 0xfa
                }, {
                    'x': 0x22f,
                    'y': 0x14e
                }, {
                    'x': 0x220,
                    'y': 0x1d8
                }, {
                    'x': 0x27a,
                    'y': 0x1e4
                }, {
                    'x': 0x2da,
                    'y': 0x1dc
                }, {
                    'x': 0x2d7,
                    'y': 0x163
                }, {
                    'x': 0x2d3,
                    'y': 0x10a
                }, {
                    'x': 0x297,
                    'y': 0xf6
                }]
            ]
        }],
        'image': 'assets/drawing/number_0.png',
        'finalImage': a0_0x15986e(0x341),
        'audio': a0_0x15986e(0x333)
    }],
    preloadDrawings = !![],
    traceSettings = {
        'radius': 0x5,
        'distance': 0x12,
        'strokeEnable': ![],
        'stroke': 0x2,
        'strokeColor': a0_0x15986e(0x212),
        'color': a0_0x15986e(0x32f),
        'disabledColor': a0_0x15986e(0x298),
        'completeColor': a0_0x15986e(0x27d),
        'number': {
            'enable': !![],
            'radius': 0xc,
            'distance': 0x1a,
            'color': a0_0x15986e(0x26b),
            'disabledColor': a0_0x15986e(0x298),
            'completeColor': a0_0x15986e(0x27d),
            'textColor': a0_0x15986e(0x212),
            'fontSize': 0xd,
            'offsetY': 0x5,
            'strokeEnable': !![],
            'stroke': 0x2,
            'strokeColor': '#fff'
        },
        'line': {
            'enable': !![],
            'stroke': 0xf,
            'strokeColor': a0_0x15986e(0x32f)
        },
        'showLoader': ![],
        'arrowAnimate': !![],
        'arrowAnimateSpeed': 0x1,
        'arrowAnimateDelay': 0x1,
        'drawDistance': 0xa,
        'drawOutDistance': 0x32,
        'sequenceLetter': !![],
        'sequenceNumber': !![],
        'scalePercent': 0x2
    },
    textStrings = {
        'category': 'SELECT\x20CATEGORY',
        'categoryLoader': a0_0x15986e(0x2a8),
        'loading': a0_0x15986e(0x203),
        'total': '[NUMBER]/[TOTAL]',
        'exitTitle': a0_0x15986e(0x34f),
        'share': 'Share\x20your\x20score',
        'exitMessage': a0_0x15986e(0x287),
        'resultTitle': a0_0x15986e(0x258),
        'resultScore': a0_0x15986e(0x184)
    },
    shareSettings = {
        'enable': !![],
        'options': [a0_0x15986e(0x2e6), a0_0x15986e(0x21a), a0_0x15986e(0x2d8), 'telegram', a0_0x15986e(0x18d), 'linkedin'],
        'shareTitle': a0_0x15986e(0x199),
        'shareText': a0_0x15986e(0x1eb),
        'customScore': !![],
        'gtag': !![]
    };
$[a0_0x15986e(0x335)] = {
    'enable': ![]
};
const playerData = {
        'mistake': 0x0,
        'score': 0x0
    },
    gameData = {
        'paused': !![],
        'score': 0x64,
        'tracingNum': 0x0,
        'seq': [],
        'seqIndex': 0x0,
        'guide': [],
        'drawCon': ![],
        'drawArray': [],
        'drawArrayIndex': 0x0,
        'drawArrayPathIndex': 0x0,
        'drawContinue': ![],
        'lastDrawArrayIndex': 0x0,
        'drawing': ![],
        'arrowAnimate': {
            'status': ![],
            'count': 0x0
        },
        'lineData': {
            'x': 0x0,
            'y': 0x0
        },
        'scalePercent': 0x1,
        'drawDistancePercent': 0x0,
        'drawOutDistancePercent': 0x0
    },
    gravityData = {
        'animate': ![],
        'total': 0xa,
        'gravity': 0x1,
        'drag': 0.99,
        'range': 0x64
    },
    tweenData = {
        'score': 0x0,
        'scoreTarget': 0x0,
        'resultScore': 0x0
    },
    gameSettingsData = {};

function buildGameButton() {
    var _0x1b9875 = a0_0x15986e;
    $(window)[_0x1b9875(0x264)](function() {
        var _0x3d6343 = _0x1b9875;
        !buttonSoundOn[_0x3d6343(0x2e2)] && toggleSoundInMute(![]), typeof buttonMusicOn != _0x3d6343(0x2ac) && (!buttonMusicOn[_0x3d6343(0x2e2)] && toggleMusicInMute(![]));
    }), $(window)[_0x1b9875(0x2c2)](function() {
        var _0x7c1f7e = _0x1b9875;
        !buttonSoundOn[_0x7c1f7e(0x2e2)] && toggleSoundInMute(!![]), typeof buttonMusicOn != _0x7c1f7e(0x2ac) && (!buttonMusicOn[_0x7c1f7e(0x2e2)] && toggleMusicInMute(!![]));
    });
    audioOn && (muteSoundOn && toggleSoundMute(!![]), muteMusicOn && toggleMusicMute(!![]));
    buttonPlay[_0x1b9875(0x18c)] = _0x1b9875(0x20c), buttonPlay[_0x1b9875(0x336)](_0x1b9875(0x27b), function(_0x1a44ca) {
        var _0x34894f = _0x1b9875;
        playSound(_0x34894f(0x276)), goPage('select');
    }), buttonPrev[_0x1b9875(0x18c)] = _0x1b9875(0x20c), buttonPrev[_0x1b9875(0x336)](_0x1b9875(0x27b), function(_0x39476c) {
        playSound('soundClick'), toggleSelect(![]);
    }), buttonNext[_0x1b9875(0x18c)] = 'pointer', buttonNext[_0x1b9875(0x336)]('click', function(_0x58fbf2) {
        playSound('soundClick'), toggleSelect(!![]);
    });
    if (shareSettings[_0x1b9875(0x314)]) {
        buttonShare[_0x1b9875(0x18c)] = _0x1b9875(0x20c), buttonShare[_0x1b9875(0x336)](_0x1b9875(0x27b), function(_0x249241) {
            var _0x33c957 = _0x1b9875;
            playSound(_0x33c957(0x1dc)), toggleSocialShare(!![]);
        });
        for (let _0x278440 = 0x0; _0x278440 < shareSettings[_0x1b9875(0x180)][_0x1b9875(0x29a)]; _0x278440++) {
            $['share']['button' + _0x278440][_0x1b9875(0x18c)] = 'pointer', $[_0x1b9875(0x1a3)][_0x1b9875(0x2b2) + _0x278440][_0x1b9875(0x336)]('click', function(_0x21e2c9) {
                var _0x46adcf = _0x1b9875;
                shareLinks(_0x21e2c9[_0x46adcf(0x1ff)][_0x46adcf(0x237)], addCommas(playerData[_0x46adcf(0x301)]));
            });
        }
    }
    buttonContinue['cursor'] = _0x1b9875(0x20c), buttonContinue['addEventListener']('click', function(_0x265826) {
        var _0x51549c = _0x1b9875;
        playSound(_0x51549c(0x276)), goPage(_0x51549c(0x285));
    }), buttonSoundOff[_0x1b9875(0x18c)] = _0x1b9875(0x20c), buttonSoundOff[_0x1b9875(0x336)](_0x1b9875(0x27b), function(_0x4452f5) {
        toggleSoundMute(!![]);
    }), buttonSoundOn[_0x1b9875(0x18c)] = _0x1b9875(0x20c), buttonSoundOn[_0x1b9875(0x336)](_0x1b9875(0x27b), function(_0x1be01c) {
        toggleSoundMute(![]);
    });
    typeof buttonMusicOff != _0x1b9875(0x2ac) && (buttonMusicOff[_0x1b9875(0x18c)] = 'pointer', buttonMusicOff['addEventListener'](_0x1b9875(0x27b), function(_0x1ae45a) {
        toggleMusicMute(!![]);
    }));
    typeof buttonMusicOn != _0x1b9875(0x2ac) && (buttonMusicOn['cursor'] = _0x1b9875(0x20c), buttonMusicOn[_0x1b9875(0x336)](_0x1b9875(0x27b), function(_0x37baa4) {
        toggleMusicMute(![]);
    }));
    buttonFullscreen[_0x1b9875(0x18c)] = _0x1b9875(0x20c), buttonFullscreen['addEventListener'](_0x1b9875(0x27b), function(_0x4e728f) {
        toggleFullScreen();
    }), buttonSettings[_0x1b9875(0x18c)] = _0x1b9875(0x20c), buttonSettings[_0x1b9875(0x336)](_0x1b9875(0x27b), function(_0x224abb) {
        toggleOptions();
    }), buttonExit[_0x1b9875(0x18c)] = _0x1b9875(0x20c), buttonExit['addEventListener'](_0x1b9875(0x27b), function(_0x458c45) {
        togglePop(!![]), toggleOptions();
    }), buttonConfirm[_0x1b9875(0x18c)] = _0x1b9875(0x20c), buttonConfirm[_0x1b9875(0x336)](_0x1b9875(0x27b), function(_0x490e92) {
        togglePop(![]), goPage('main');
    }), itemExit['addEventListener'](_0x1b9875(0x27b), function(_0x5f24c5) {}), buttonCancel[_0x1b9875(0x18c)] = _0x1b9875(0x20c), buttonCancel[_0x1b9875(0x336)]('click', function(_0x37bcb1) {
        togglePop(![]);
    });
    for (var _0x44f675 = 0x0; _0x44f675 < category_array[_0x1b9875(0x29a)]; _0x44f675++) {
        category_array[_0x44f675]['preload'] = ![];
    }
    buildStarGravity(), preloadDrawings && (gameData[_0x1b9875(0x297)] = 0x0, loopLoadCategory());
}
var selectPageNum = 0x1,
    selectPageTotal = 0x1,
    maxThumbPerPage = 0x3;

function buildSelectPagination() {
    var _0x5e8fd6 = a0_0x15986e;
    for (n = 0x0; n < category_array[_0x5e8fd6(0x29a)]; n++) {
        $['thumb'][_0x5e8fd6(0x2fe) + n][_0x5e8fd6(0x33d)] = n, $['thumb'][_0x5e8fd6(0x2fe) + n][_0x5e8fd6(0x18c)] = _0x5e8fd6(0x20c), $[_0x5e8fd6(0x1b8)][_0x5e8fd6(0x2fe) + n]['addEventListener']('mousedown', function(_0x4f52ff) {
            var _0x472952 = _0x5e8fd6;
            playSound(_0x472952(0x276)), chooseCategory(Number(_0x4f52ff[_0x472952(0x1ff)][_0x472952(0x33d)]));
        });
    }
    selectPageTotal = category_array['length'] / maxThumbPerPage, String(selectPageTotal)[_0x5e8fd6(0x338)]('.') > -0x1 && (selectPageTotal = Math[_0x5e8fd6(0x30d)](selectPageTotal) + 0x1), toggleSelect(![]);
}

function toggleSelect(_0x39fb6e) {
    _0x39fb6e ? (selectPageNum++, selectPageNum = selectPageNum > selectPageTotal ? selectPageTotal : selectPageNum) : (selectPageNum--, selectPageNum = selectPageNum < 0x1 ? 0x1 : selectPageNum), selectPage(selectPageNum);
}

function selectPage(_0x359557) {
    var _0x2104d4 = a0_0x15986e;
    selectPageNum = _0x359557;
    var _0x25b01a = (selectPageNum - 0x1) * maxThumbPerPage,
        _0x203ad5 = _0x25b01a + (maxThumbPerPage - 0x1);
    for (n = 0x0; n < category_array['length']; n++) {
        $[_0x2104d4(0x1b8)]['thumb_' + n]['selected'] = ![], n >= _0x25b01a && n <= _0x203ad5 ? ($[_0x2104d4(0x1b8)][_0x2104d4(0x2fe) + n]['visible'] = !![], $[_0x2104d4(0x1b8)][_0x2104d4(0x309) + n][_0x2104d4(0x2e2)] = !![]) : ($[_0x2104d4(0x1b8)][_0x2104d4(0x2fe) + n][_0x2104d4(0x2e2)] = ![], $[_0x2104d4(0x1b8)]['thumbloader_' + n][_0x2104d4(0x2e2)] = ![]);
    }
    selectPageNum == 0x1 ? buttonPrev['visible'] = ![] : buttonPrev['visible'] = !![], selectPageNum == selectPageTotal || selectPageTotal == 0x1 ? buttonNext[_0x2104d4(0x2e2)] = ![] : buttonNext[_0x2104d4(0x2e2)] = !![];
}

function toggleSocialShare(_0x1b6821) {
    var _0x5080a3 = a0_0x15986e;
    if (!shareSettings['enable']) return;
    buttonShare[_0x5080a3(0x2e2)] = _0x1b6821 == !![] ? ![] : !![], shareSaveContainer[_0x5080a3(0x2e2)] = _0x1b6821 == !![] ? ![] : !![], socialContainer[_0x5080a3(0x2e2)] = _0x1b6821, _0x1b6821 && (typeof buttonSave !== _0x5080a3(0x2ac) && TweenMax['to'](buttonShare, 0x3, {
        'overwrite': !![],
        'onComplete': toggleSocialShare,
        'onCompleteParams': [![]]
    }));
}

function positionShareButtons() {
    var _0x6c9392 = a0_0x15986e;
    if (!shareSettings[_0x6c9392(0x314)]) return;
    typeof buttonShare !== 'undefined' && (typeof buttonSave !== _0x6c9392(0x2ac) && (buttonSave[_0x6c9392(0x2e2)] ? (buttonShare['x'] = -(buttonShare[_0x6c9392(0x1e1)][_0x6c9392(0x2a2)] / 0x2 + 0x5), buttonSave['x'] = buttonShare['image'][_0x6c9392(0x2a2)] / 0x2 + 0x5) : buttonShare['x'] = 0x0));
}
var curPage = '';

function goPage(_0x1bb3d1) {
    var _0x11097f = a0_0x15986e;
    curPage = _0x1bb3d1, itemGame[_0x11097f(0x2e2)] = ![], mainContainer['visible'] = ![], selectContainer['visible'] = ![], gameContainer[_0x11097f(0x2e2)] = ![], editContainer[_0x11097f(0x2e2)] = ![], resultContainer[_0x11097f(0x2e2)] = ![], togglePop(![]), toggleOptions(![]), removeStageEvents();
    var _0x36cf2b = null;
    switch (_0x1bb3d1) {
        case _0x11097f(0x285):
            _0x36cf2b = mainContainer, toggleStars(!![]);
            break;
        case _0x11097f(0x251):
            _0x36cf2b = selectContainer, toggleStars(![]);
            break;
        case _0x11097f(0x2ec):
            _0x36cf2b = gameContainer, itemGame[_0x11097f(0x2e2)] = !![], startGame();
            break;
        case _0x11097f(0x2be):
            _0x36cf2b = editContainer, itemGame['visible'] = !![], buttonSettings['visible'] = ![], totalTxt[_0x11097f(0x2e2)] = ![], starsContainer[_0x11097f(0x2e2)] = ![];
            break;
        case _0x11097f(0x344):
            _0x36cf2b = resultContainer, stopGame(), playSound(_0x11097f(0x2d6)), tweenData[_0x11097f(0x194)] = 0x0, TweenMax['to'](tweenData, 0x1, {
                'resultScore': playerData[_0x11097f(0x301)],
                'overwrite': !![],
                'onUpdate': function() {
                    var _0xc82966 = _0x11097f,
                        _0x20d79a = textStrings['resultScore'][_0xc82966(0x1d6)](_0xc82966(0x1e6), addCommas(Math[_0xc82966(0x23c)](tweenData[_0xc82966(0x194)])));
                    resultScoreTxt['text'] = _0x20d79a;
                }
            }), saveGame(playerData['score']);
            break;
    }
    _0x36cf2b != null && (_0x36cf2b[_0x11097f(0x2e2)] = !![], _0x36cf2b[_0x11097f(0x262)] = 0x0, TweenMax['to'](_0x36cf2b, 0.5, {
        'alpha': 0x1,
        'overwrite': !![]
    })), resizeCanvas();
}

function togglePop(_0x5d24db) {
    var _0x279531 = a0_0x15986e;
    exitContainer[_0x279531(0x2e2)] = _0x5d24db, _0x5d24db ? (TweenMax[_0x279531(0x324)](!![], !![]), gameData[_0x279531(0x1d2)] = !![]) : (TweenMax[_0x279531(0x259)](!![], !![]), gameData['paused'] = ![]);
}

function chooseCategory(_0x397f9c) {
    var _0x3f5a97 = a0_0x15986e;
    gameData[_0x3f5a97(0x311)] = [];
    for (var _0x43c91e = 0x0; _0x43c91e < drawings_array['length']; _0x43c91e++) {
        category_array[_0x397f9c]['name'] == drawings_array[_0x43c91e]['category'] && gameData[_0x3f5a97(0x311)]['push'](_0x43c91e);
    }
    if (gameData[_0x3f5a97(0x311)][_0x3f5a97(0x29a)] > 0x0) {
        playSound(_0x3f5a97(0x276));
        if (!$['editor'][_0x3f5a97(0x314)] && preloadDrawings) {
            if (!category_array[_0x397f9c][_0x3f5a97(0x282)]) {} else goPage(_0x3f5a97(0x2ec));
        } else goPage('game');
    } else alert(_0x3f5a97(0x2eb));
}

function startGame() {
    var _0x2bce5d = a0_0x15986e;
    gameData[_0x2bce5d(0x1d2)] = ![], gameData[_0x2bce5d(0x2ad)] = 0x0, gameData[_0x2bce5d(0x20f)] = ![], gameData[_0x2bce5d(0x2c1)] = ![], gameData[_0x2bce5d(0x1f5)][_0x2bce5d(0x29f)] = ![], gameData['arrowAnimate']['count'] = 0x0, $['each'](traceSettings, function(_0xf1a204, _0x4286e3) {
        gameSettingsData[_0xf1a204] = _0x4286e3;
    });
    !$[_0x2bce5d(0x335)][_0x2bce5d(0x314)] && (gameData[_0x2bce5d(0x211)] = gameData[_0x2bce5d(0x311)][gameData[_0x2bce5d(0x2ad)]]);
    var _0x5a95d4 = category_array[_0x2bce5d(0x254)](_0x67f716 => _0x67f716[_0x2bce5d(0x33d)] === String(drawings_array[gameData[_0x2bce5d(0x211)]]['category'])),
        _0x48fa60 = category_array[_0x5a95d4][_0x2bce5d(0x2f3)];
    _0x5a95d4 != -0x1 && $[_0x2bce5d(0x28a)](_0x48fa60, function(_0x2b5c1e, _0x25732a) {
        gameSettingsData[_0x2b5c1e] = _0x25732a;
    }), buildLetters();
}

function stopGame() {
    var _0x2cccfe = a0_0x15986e;
    TweenMax[_0x2cccfe(0x357)](), gameData['paused'] = !![], gameData[_0x2cccfe(0x20f)] = ![], gameData[_0x2cccfe(0x2c1)] = ![], toggleStars(![]);
}

function saveGame(_0x24f4bd) {
    var _0x36ee71 = a0_0x15986e;
    typeof toggleScoreboardSave == 'function' && ($['scoreData'][_0x36ee71(0x301)] = _0x24f4bd, typeof type != 'undefined' && ($['scoreData'][_0x36ee71(0x18b)] = type), toggleScoreboardSave(!![]));
}

function buildLetters() {
    var _0x17cd08 = a0_0x15986e;
    toggleStars(![]);
    if (!$[_0x17cd08(0x335)][_0x17cd08(0x314)]) {
        for (var _0x5206ce = 0x0; _0x5206ce < drawings_array[_0x17cd08(0x29a)]; _0x5206ce++) {
            $[_0x17cd08(0x245)][_0x17cd08(0x202) + _0x5206ce] != undefined && ($[_0x17cd08(0x245)][_0x17cd08(0x202) + _0x5206ce]['visible'] = ![]), $['background']['finalImage_' + _0x5206ce] != undefined && ($[_0x17cd08(0x245)]['finalImage_' + _0x5206ce][_0x17cd08(0x2e2)] = ![]);
        }
        gameData[_0x17cd08(0x211)] = gameData[_0x17cd08(0x311)][gameData[_0x17cd08(0x2ad)]], $[_0x17cd08(0x245)][_0x17cd08(0x202) + gameData[_0x17cd08(0x211)]][_0x17cd08(0x2e2)] = !![], $['background'][_0x17cd08(0x267) + gameData['tracingNum']][_0x17cd08(0x2e2)] = !![], $[_0x17cd08(0x245)][_0x17cd08(0x202) + gameData[_0x17cd08(0x211)]][_0x17cd08(0x262)] = 0x0, $[_0x17cd08(0x245)][_0x17cd08(0x267) + gameData[_0x17cd08(0x211)]][_0x17cd08(0x262)] = 0x0, TweenMax['to']($[_0x17cd08(0x245)][_0x17cd08(0x202) + gameData[_0x17cd08(0x211)]], 0.5, {
            'alpha': 0x1,
            'overwrite': !![]
        });
    }
    $[_0x17cd08(0x335)][_0x17cd08(0x314)] && (bgContainer[_0x17cd08(0x2e2)] = ![]);
    gameSettingsData['showLoader'] ? (loadingTxt[_0x17cd08(0x2e2)] = !![], letterContainer[_0x17cd08(0x262)] = 0x0) : (loadingTxt[_0x17cd08(0x2e2)] = ![], letterContainer['alpha'] = 0x1);
    gameData[_0x17cd08(0x2af)][_0x17cd08(0x29a)] = 0x0, gameData[_0x17cd08(0x213)][_0x17cd08(0x29a)] = 0x0, letterContainer['removeAllChildren'](), linesContainer[_0x17cd08(0x22b)](), linesContainer[_0x17cd08(0x262)] = 0x1;
    for (var _0x440813 = 0x0; _0x440813 < drawings_array[gameData['tracingNum']][_0x17cd08(0x1bb)][_0x17cd08(0x29a)]; _0x440813++) {
        gameData['drawArray'][_0x17cd08(0x24a)]({
            'letterIndex': _0x440813,
            'paths': [],
            'complete': ![]
        });
        var _0x21ac31 = gameData['drawArray'][_0x17cd08(0x29a)] - 0x1;
        for (var _0x22cfaa = 0x0; _0x22cfaa < drawings_array[gameData['tracingNum']][_0x17cd08(0x1bb)][_0x440813][_0x17cd08(0x231)][_0x17cd08(0x29a)]; _0x22cfaa++) {
            for (var _0x505154 = 0x0; _0x505154 < drawings_array[gameData[_0x17cd08(0x211)]][_0x17cd08(0x1bb)][_0x440813][_0x17cd08(0x231)][_0x22cfaa]['length']; _0x505154++) {
                _0x505154 == 0x0 && (gameData[_0x17cd08(0x213)][_0x21ac31]['paths'][_0x17cd08(0x24a)]({
                    'index': _0x22cfaa,
                    'count': 0x0,
                    'total': 0x0,
                    'ready': ![],
                    'complete': ![]
                }), buildGuide(_0x21ac31, _0x440813, _0x22cfaa, _0x505154, drawings_array[gameData['tracingNum']][_0x17cd08(0x1bb)][_0x440813][_0x17cd08(0x231)][_0x22cfaa][_0x505154]['x'], drawings_array[gameData[_0x17cd08(0x211)]][_0x17cd08(0x1bb)][_0x440813][_0x17cd08(0x231)][_0x22cfaa][_0x505154]['y']), drawGuidePoints(_0x440813, _0x22cfaa, _0x505154, drawings_array[gameData[_0x17cd08(0x211)]][_0x17cd08(0x1bb)][_0x440813][_0x17cd08(0x231)][_0x22cfaa]));
            }
        }
    }
    gameData[_0x17cd08(0x20f)] = ![], gameData['drawing'] = ![], gameData['lastDrawArrayIndex'] = -0x1, gameData[_0x17cd08(0x2db)] = 0x0, gameData[_0x17cd08(0x27e)] = 0x0, gameData[_0x17cd08(0x1e7)] = ![], playerData[_0x17cd08(0x1a1)] = 0x0;
    var _0x434219 = textStrings[_0x17cd08(0x2f0)][_0x17cd08(0x1d6)]('[NUMBER]', gameData[_0x17cd08(0x2ad)] + 0x1);
    _0x434219 = _0x434219[_0x17cd08(0x1d6)](_0x17cd08(0x25e), gameData[_0x17cd08(0x311)]['length']), totalTxt[_0x17cd08(0x260)] = _0x434219;
}

function buildGuide(_0x480831, _0x159554, _0x563a61, _0x164d7c, _0x2228b4, _0x486719) {
    var _0x127db1 = a0_0x15986e,
        _0x2b1f27 = gameSettingsData[_0x127db1(0x313)],
        _0xb4f3dc = gameSettingsData[_0x127db1(0x217)],
        _0x30c4f4 = gameSettingsData[_0x127db1(0x31b)],
        _0x5e8a61 = gameSettingsData[_0x127db1(0x2f2)],
        _0x8e9f39 = gameSettingsData[_0x127db1(0x1ad)],
        _0xcc891f = gameSettingsData['strokeColor'],
        _0x264a50 = gameSettingsData[_0x127db1(0x187)],
        _0x1a7d21 = ![];
    _0x164d7c == 0x0 && gameSettingsData[_0x127db1(0x214)][_0x127db1(0x314)] && (_0x2b1f27 = gameSettingsData[_0x127db1(0x214)][_0x127db1(0x313)], _0xb4f3dc = gameSettingsData[_0x127db1(0x214)]['disabledColor'], _0x30c4f4 = gameSettingsData[_0x127db1(0x214)][_0x127db1(0x31b)], _0x5e8a61 = gameSettingsData[_0x127db1(0x214)][_0x127db1(0x2f2)], _0x8e9f39 = gameSettingsData['number']['stroke'], _0xcc891f = gameSettingsData[_0x127db1(0x214)][_0x127db1(0x2f8)], _0x264a50 = gameSettingsData['number'][_0x127db1(0x187)], _0x1a7d21 = !![]);
    var _0x2a1fe8 = _0x159554 + '_' + _0x563a61 + '_' + _0x164d7c;
    $[_0x127db1(0x242)][_0x2a1fe8] = new createjs[(_0x127db1(0x2e1))](), $[_0x127db1(0x242)][_0x2a1fe8][_0x127db1(0x1c7)] = {
        'arrayIndex': _0x480831,
        'letterIndex': _0x159554,
        'pathIndex': _0x563a61,
        'pathIndexNum': _0x164d7c,
        'radius': _0x30c4f4,
        'color': _0x2b1f27,
        'disabledColor': _0xb4f3dc,
        'completeColor': _0x264a50
    };
    _0x5e8a61 && $[_0x127db1(0x242)][_0x2a1fe8][_0x127db1(0x353)][_0x127db1(0x308)](_0x8e9f39)[_0x127db1(0x256)](_0xcc891f);
    $[_0x127db1(0x242)][_0x2a1fe8][_0x127db1(0x1f4)] = $['guides'][_0x2a1fe8]['graphics'][_0x127db1(0x1fb)]($[_0x127db1(0x242)][_0x2a1fe8]['defaultData'][_0x127db1(0x217)])['command'], $[_0x127db1(0x242)][_0x2a1fe8][_0x127db1(0x353)][_0x127db1(0x312)](0x0, 0x0, $[_0x127db1(0x242)][_0x2a1fe8][_0x127db1(0x1c7)][_0x127db1(0x31b)]), $[_0x127db1(0x242)][_0x2a1fe8]['x'] = _0x2228b4, $[_0x127db1(0x242)][_0x2a1fe8]['y'] = _0x486719, $[_0x127db1(0x242)][_0x2a1fe8][_0x127db1(0x21b)] = {
        'index': 0x0,
        'firstDistance': !![],
        'complete': ![],
        'pos': {
            'x': _0x2228b4,
            'y': _0x486719
        },
        'firstPos': {
            'x': _0x2228b4,
            'y': _0x486719
        }
    }, letterContainer[_0x127db1(0x339)]($[_0x127db1(0x242)][_0x2a1fe8]);
    if (_0x164d7c == 0x0) {
        var _0x2c2114 = _0x159554 + '_' + _0x563a61 + '_' + _0x164d7c + _0x127db1(0x1b0);
        $[_0x127db1(0x242)][_0x2c2114] = new createjs[(_0x127db1(0x2b5))](loader[_0x127db1(0x2dd)](_0x127db1(0x2a0))), centerReg($['guides'][_0x2c2114]), $[_0x127db1(0x242)][_0x2c2114]['x'] = _0x2228b4, $[_0x127db1(0x242)][_0x2c2114]['y'] = _0x486719, $['guides'][_0x2a1fe8][_0x127db1(0x1a2)] = $[_0x127db1(0x242)][_0x2c2114], letterContainer[_0x127db1(0x339)]($['guides'][_0x2c2114]);
    }
    var _0x5c74c5 = _0x159554 + '_' + _0x563a61 + '_' + _0x164d7c + '_number';
    $[_0x127db1(0x242)][_0x5c74c5] = new createjs[(_0x127db1(0x1ee))](), $[_0x127db1(0x242)][_0x2a1fe8]['textObj'] = $[_0x127db1(0x242)][_0x5c74c5];
    _0x1a7d21 && ($['guides'][_0x5c74c5][_0x127db1(0x28c)] = gameSettingsData[_0x127db1(0x214)][_0x127db1(0x206)] + 'px\x20granstander_cleanregular', $['guides'][_0x5c74c5][_0x127db1(0x313)] = gameSettingsData[_0x127db1(0x214)]['textColor'], $[_0x127db1(0x242)][_0x5c74c5][_0x127db1(0x18e)] = _0x127db1(0x2b8), $[_0x127db1(0x242)][_0x5c74c5][_0x127db1(0x34a)] = 'alphabetic', $[_0x127db1(0x242)][_0x5c74c5][_0x127db1(0x260)] = _0x563a61 + 0x1, $[_0x127db1(0x242)][_0x5c74c5]['x'] = _0x2228b4, $[_0x127db1(0x242)][_0x5c74c5]['y'] = _0x486719 + gameSettingsData['number'][_0x127db1(0x239)], letterContainer[_0x127db1(0x339)]($[_0x127db1(0x242)][_0x5c74c5]));
    if (_0x164d7c == 0x0 && gameSettingsData[_0x127db1(0x241)][_0x127db1(0x314)]) {
        var _0x238281 = _0x159554 + '_' + _0x563a61 + '_' + _0x164d7c + _0x127db1(0x354);
        $[_0x127db1(0x242)][_0x238281] = new createjs[(_0x127db1(0x2e1))](), linesContainer['addChild']($[_0x127db1(0x242)][_0x238281]);
    }
}

function drawGuidePoints(_0x142395, _0xa1665f, _0x1fa862, _0x57d90f) {
    var _0x59e73f = a0_0x15986e,
        _0x402df1 = _0x142395 + '_' + _0xa1665f + '_' + _0x1fa862,
        _0x66273a = getPathSpeed(_0x57d90f);
    TweenMax['to']($[_0x59e73f(0x242)][_0x402df1][_0x59e73f(0x1a2)], _0x66273a, {
        'bezier': {
            'type': _0x59e73f(0x257),
            'values': _0x57d90f,
            'autoRotate': !![]
        },
        'ease': Linear['easeNone'],
        'overwrite': !![],
        'onUpdate': onDrawGuidePointsUpdate,
        'onUpdateParams': [$[_0x59e73f(0x242)][_0x402df1]],
        'onComplete': onDrawGuidePointsComplete,
        'onCompleteParams': [$[_0x59e73f(0x242)][_0x402df1]]
    });
}

function onDrawGuidePointsUpdate(_0x79219) {
    var _0x27cc72 = a0_0x15986e,
        _0xf98d9c = getDistanceByValue(_0x79219['arrowObj']['x'], _0x79219[_0x27cc72(0x1a2)]['y'], _0x79219[_0x27cc72(0x21b)][_0x27cc72(0x177)]['x'], _0x79219[_0x27cc72(0x21b)]['pos']['y']),
        _0x33b476 = gameSettingsData['distance'];
    _0x79219['guideData'][_0x27cc72(0x20a)] && (_0x33b476 = gameSettingsData['number'][_0x27cc72(0x25b)]), _0xf98d9c > _0x33b476 && (_0x79219[_0x27cc72(0x21b)][_0x27cc72(0x20a)] && (_0x79219['guideData'][_0x27cc72(0x20a)] = ![]), _0x79219[_0x27cc72(0x21b)]['pos']['x'] = _0x79219[_0x27cc72(0x1a2)]['x'], _0x79219[_0x27cc72(0x21b)]['pos']['y'] = _0x79219[_0x27cc72(0x1a2)]['y'], _0x79219[_0x27cc72(0x21b)][_0x27cc72(0x1d0)]++, buildGuide(-0x1, _0x79219[_0x27cc72(0x1c7)][_0x27cc72(0x1ef)], _0x79219[_0x27cc72(0x1c7)][_0x27cc72(0x1fd)], _0x79219[_0x27cc72(0x21b)][_0x27cc72(0x1d0)], _0x79219['arrowObj']['x'], _0x79219[_0x27cc72(0x1a2)]['y']));
}

function onDrawGuidePointsComplete(_0x4fa494) {
    var _0x55812f = a0_0x15986e;
    _0x4fa494['guideData'][_0x55812f(0x244)] = !![], _0x4fa494[_0x55812f(0x1a2)][_0x55812f(0x1af)] = _0x4fa494[_0x55812f(0x1a2)]['x'], _0x4fa494['arrowObj'][_0x55812f(0x2d0)] = _0x4fa494[_0x55812f(0x1a2)]['y'], _0x4fa494[_0x55812f(0x1a2)][_0x55812f(0x274)] = _0x4fa494[_0x55812f(0x1a2)][_0x55812f(0x2bf)], _0x4fa494['arrowObj']['x'] = _0x4fa494[_0x55812f(0x1a2)]['x'], _0x4fa494[_0x55812f(0x1a2)]['y'] = _0x4fa494[_0x55812f(0x1a2)]['y'], _0x4fa494[_0x55812f(0x1a2)]['rotation'] = _0x4fa494[_0x55812f(0x1a2)][_0x55812f(0x2bf)], _0x4fa494['x'] = _0x4fa494[_0x55812f(0x21b)][_0x55812f(0x348)]['x'], _0x4fa494['y'] = _0x4fa494[_0x55812f(0x21b)][_0x55812f(0x348)]['y'], gameData[_0x55812f(0x213)][_0x4fa494[_0x55812f(0x1c7)][_0x55812f(0x1d5)]][_0x55812f(0x231)][_0x4fa494[_0x55812f(0x1c7)][_0x55812f(0x1fd)]][_0x55812f(0x2f0)] = _0x4fa494[_0x55812f(0x21b)][_0x55812f(0x1d0)], gameData['drawArray'][_0x4fa494[_0x55812f(0x1c7)][_0x55812f(0x1d5)]][_0x55812f(0x231)][_0x4fa494[_0x55812f(0x1c7)][_0x55812f(0x1fd)]][_0x55812f(0x328)] = !![];
    var _0xe65f0e = 0x0,
        _0x1290d5 = 0x0;
    for (var _0x51ad1e = 0x0; _0x51ad1e < gameData['drawArray'][_0x55812f(0x29a)]; _0x51ad1e++) {
        for (var _0x20c5ae = 0x0; _0x20c5ae < gameData[_0x55812f(0x213)][_0x51ad1e][_0x55812f(0x231)][_0x55812f(0x29a)]; _0x20c5ae++) {
            _0x1290d5++, gameData['drawArray'][_0x51ad1e][_0x55812f(0x231)][_0x20c5ae][_0x55812f(0x328)] && _0xe65f0e++;
        }
    }
    if (_0xe65f0e == _0x1290d5) {
        for (var _0x548813 = 0x0; _0x548813 < drawings_array[gameData[_0x55812f(0x211)]]['letters']['length']; _0x548813++) {
            for (var _0x20c5ae = 0x0; _0x20c5ae < drawings_array[gameData[_0x55812f(0x211)]][_0x55812f(0x1bb)][_0x548813]['paths']['length']; _0x20c5ae++) {
                var _0x46e744 = _0x548813 + '_' + _0x20c5ae + '_' + 0x0;
                letterContainer['setChildIndex']($[_0x55812f(0x242)][_0x46e744][_0x55812f(0x1a2)], letterContainer[_0x55812f(0x2a7)] - 0x1), letterContainer['setChildIndex']($[_0x55812f(0x242)][_0x46e744], letterContainer[_0x55812f(0x2a7)] - 0x1), letterContainer[_0x55812f(0x22a)]($['guides'][_0x46e744][_0x55812f(0x1cc)], letterContainer['numChildren'] - 0x1);
            }
        }
        for (var _0x51ad1e = 0x0; _0x51ad1e < gameData[_0x55812f(0x213)][_0x55812f(0x29a)]; _0x51ad1e++) {
            for (var _0x20c5ae = 0x0; _0x20c5ae < gameData['drawArray'][_0x51ad1e][_0x55812f(0x231)][_0x55812f(0x29a)]; _0x20c5ae++) {
                for (var _0xcabc61 = 0x0; _0xcabc61 <= gameData['drawArray'][_0x51ad1e]['paths'][_0x20c5ae][_0x55812f(0x2f0)]; _0xcabc61++) {
                    var _0x46e744 = _0x51ad1e + '_' + _0x20c5ae + '_' + _0xcabc61;
                    $[_0x55812f(0x242)][_0x46e744][_0x55812f(0x1f4)]['style'] = $[_0x55812f(0x242)][_0x46e744][_0x55812f(0x1c7)]['color'];
                }
            }
        }
        loadingTxt[_0x55812f(0x2e2)] = ![], gameData['drawCon'] = !![], gameData[_0x55812f(0x1e7)] = ![], gameData[_0x55812f(0x19d)] = -0x1, TweenMax['to'](letterContainer, 0x1, {
            'alpha': 0x1,
            'overwrite': !![]
        }), setupStageEvents();
    }
}

function animateGuide() {
    var _0x1dada6 = a0_0x15986e,
        _0x41d9f1 = ![];
    for (var _0x22bbf5 = 0x0; _0x22bbf5 < gameData['drawArray']['length']; _0x22bbf5++) {
        if (!gameData[_0x1dada6(0x213)][_0x22bbf5][_0x1dada6(0x244)] && !_0x41d9f1)
            for (var _0x279415 = 0x0; _0x279415 < gameData[_0x1dada6(0x213)][_0x22bbf5][_0x1dada6(0x231)][_0x1dada6(0x29a)]; _0x279415++) {
                if (!gameData[_0x1dada6(0x213)][_0x22bbf5][_0x1dada6(0x231)][_0x279415][_0x1dada6(0x244)] && !_0x41d9f1) {
                    _0x41d9f1 = !![];
                    var _0x5ec820 = drawings_array[gameData[_0x1dada6(0x211)]]['letters'][_0x22bbf5][_0x1dada6(0x231)][_0x279415],
                        _0x5cd21c = _0x22bbf5 + '_' + _0x279415 + '_' + 0x0 + _0x1dada6(0x1b0),
                        _0x312ed6 = getPathSpeed(_0x5ec820);
                    TweenMax['to']($[_0x1dada6(0x242)][_0x5cd21c], _0x312ed6, {
                        'bezier': {
                            'type': _0x1dada6(0x257),
                            'values': _0x5ec820,
                            'autoRotate': !![]
                        },
                        'repeat': 0x64,
                        'repeatDelay': gameSettingsData[_0x1dada6(0x21e)],
                        'ease': Linear[_0x1dada6(0x1b9)],
                        'overwrite': !![]
                    });
                }
            }
    }
}

function getPathSpeed(_0x54a8ca) {
    var _0x48c8d4 = a0_0x15986e,
        _0x1a8044 = {
            'curX': 0x0,
            'curY': 0x0,
            'nextX': 0x0,
            'nextY': 0x0,
            'distance': 0x0
        };
    _0x1a8044[_0x48c8d4(0x221)] = _0x54a8ca[0x0]['x'], _0x1a8044[_0x48c8d4(0x23f)] = _0x54a8ca[0x0]['y'];
    for (var _0x21ed62 = 0x0; _0x21ed62 < _0x54a8ca[_0x48c8d4(0x29a)]; _0x21ed62++) {
        _0x54a8ca[_0x21ed62][_0x48c8d4(0x29a)] != 0x0 && !isEven(_0x21ed62) && (_0x1a8044[_0x48c8d4(0x2d2)] = _0x54a8ca[_0x21ed62 + 0x1]['x'], _0x1a8044[_0x48c8d4(0x20e)] = _0x54a8ca[_0x21ed62 + 0x1]['y'], _0x1a8044[_0x48c8d4(0x25b)] += getDistanceByValue(_0x1a8044[_0x48c8d4(0x221)], _0x1a8044[_0x48c8d4(0x23f)], _0x1a8044[_0x48c8d4(0x2d2)], _0x1a8044[_0x48c8d4(0x20e)]), _0x1a8044[_0x48c8d4(0x221)] = _0x1a8044['nextX'], _0x1a8044[_0x48c8d4(0x23f)] = _0x1a8044['nextY']);
    }
    var _0x33eddb = _0x1a8044[_0x48c8d4(0x25b)] * (gameSettingsData[_0x48c8d4(0x2b3)] * 0.005);
    return _0x33eddb = _0x33eddb > 0x3 ? 0x3 : _0x33eddb, _0x33eddb;
}

function resetAnimateGuide() {
    var _0x45e496 = a0_0x15986e;
    for (var _0x2cbf78 = 0x0; _0x2cbf78 < drawings_array[gameData['tracingNum']]['letters'][_0x45e496(0x29a)]; _0x2cbf78++) {
        for (var _0x3e0bd2 = 0x0; _0x3e0bd2 < drawings_array[gameData['tracingNum']][_0x45e496(0x1bb)][_0x2cbf78][_0x45e496(0x231)][_0x45e496(0x29a)]; _0x3e0bd2++) {
            var _0x37ffe6 = _0x2cbf78 + '_' + _0x3e0bd2 + '_' + 0x0 + _0x45e496(0x1b0);
            TweenMax[_0x45e496(0x1b5)]($['guides'][_0x37ffe6]), $['guides'][_0x37ffe6]['x'] = $[_0x45e496(0x242)][_0x37ffe6][_0x45e496(0x1af)], $[_0x45e496(0x242)][_0x37ffe6]['y'] = $[_0x45e496(0x242)][_0x37ffe6][_0x45e496(0x2d0)], $[_0x45e496(0x242)][_0x37ffe6][_0x45e496(0x2bf)] = $[_0x45e496(0x242)][_0x37ffe6][_0x45e496(0x274)];
        }
    }
}

function setupStageEvents() {
    var _0x345376 = a0_0x15986e;
    stage[_0x345376(0x336)]('mousedown', function(_0x57dde1) {
        toggleStageEvent(_0x57dde1, 'down');
    }), stage[_0x345376(0x336)]('pressmove', function(_0x5840dd) {
        var _0x448fdb = _0x345376;
        toggleStageEvent(_0x5840dd, _0x448fdb(0x1df));
    }), stage[_0x345376(0x336)](_0x345376(0x2c0), function(_0x40dd58) {
        toggleStageEvent(_0x40dd58, 'release');
    });
}

function removeStageEvents() {
    var _0x1e0387 = a0_0x15986e;
    stage[_0x1e0387(0x1f8)](_0x1e0387(0x2e5)), stage[_0x1e0387(0x1f8)]('pressmove'), stage[_0x1e0387(0x1f8)]('pressup');
}

function toggleStageEvent(_0x12a4b0, _0x1fdf12) {
    var _0xdee561 = a0_0x15986e;
    if (!gameData[_0xdee561(0x20f)]) return;
    switch (_0x1fdf12) {
        case 'down':
            var _0x3da710 = letterContainer[_0xdee561(0x1b6)](_0x12a4b0[_0xdee561(0x226)], _0x12a4b0['stageY']);
            gameData[_0xdee561(0x220)]['x'] = _0x12a4b0['stageX'] / dpr, gameData['lineData']['y'] = _0x12a4b0['stageY'] / dpr;
            if (gameData[_0xdee561(0x19d)] == -0x1) {
                var _0x3ac212 = ![],
                    _0x5988a2 = ![];
                for (var _0xe68713 = 0x0; _0xe68713 < gameData['drawArray'][_0xdee561(0x29a)]; _0xe68713++) {
                    for (var _0x4ee8b6 = 0x0; _0x4ee8b6 < gameData[_0xdee561(0x213)][_0xe68713][_0xdee561(0x231)][_0xdee561(0x29a)]; _0x4ee8b6++) {
                        if (gameData[_0xdee561(0x213)][_0xe68713][_0xdee561(0x231)][_0x4ee8b6][_0xdee561(0x244)] == ![]) {
                            if (gameSettingsData[_0xdee561(0x1a9)] && _0x4ee8b6 == 0x0) _0x5988a2 = !![];
                            else !gameSettingsData[_0xdee561(0x1a9)] && (_0x5988a2 = !![]);
                            _0x3ac212 = !![];
                            if (_0x5988a2) {
                                var _0x2ac683 = gameData['drawArray'][_0xe68713][_0xdee561(0x1ef)] + '_' + gameData[_0xdee561(0x213)][_0xe68713][_0xdee561(0x231)][_0x4ee8b6][_0xdee561(0x1d0)] + '_' + 0x0,
                                    _0x31d471 = getDistanceByValue(_0x3da710['x'], _0x3da710['y'], $['guides'][_0x2ac683]['x'], $['guides'][_0x2ac683]['y']);
                                _0x31d471 <= gameData[_0xdee561(0x1ae)] && (gameData['drawArrayIndex'] = _0xe68713, gameData[_0xdee561(0x27e)] = _0x4ee8b6, gameData[_0xdee561(0x19d)] = _0xe68713, gameData['drawing'] = !![], followDrawingGuide(), resetAnimateGuide());
                            }
                        }
                    }
                    gameSettingsData['sequenceLetter'] && _0x3ac212 && (_0xe68713 = gameData[_0xdee561(0x213)][_0xdee561(0x29a)]);
                }
            } else
                for (var _0x4ee8b6 = 0x0; _0x4ee8b6 < gameData['drawArray'][gameData[_0xdee561(0x19d)]][_0xdee561(0x231)][_0xdee561(0x29a)]; _0x4ee8b6++) {
                    if (gameData['drawArray'][gameData[_0xdee561(0x19d)]]['paths'][_0x4ee8b6]['complete'] == ![]) {
                        var _0x2ac683 = gameData['drawArray'][gameData[_0xdee561(0x19d)]]['letterIndex'] + '_' + gameData[_0xdee561(0x213)][gameData['lastDrawArrayIndex']]['paths'][_0x4ee8b6][_0xdee561(0x1d0)] + '_' + 0x0,
                            _0x31d471 = getDistanceByValue(_0x3da710['x'], _0x3da710['y'], $[_0xdee561(0x242)][_0x2ac683]['x'], $[_0xdee561(0x242)][_0x2ac683]['y']);
                        _0x31d471 <= gameData[_0xdee561(0x1ae)] && (gameData[_0xdee561(0x2db)] = gameData[_0xdee561(0x19d)], gameData[_0xdee561(0x27e)] = _0x4ee8b6, gameData[_0xdee561(0x19d)] = gameData[_0xdee561(0x19d)], gameData[_0xdee561(0x2c1)] = !![], followDrawingGuide(), resetAnimateGuide());
                    }
                    gameData['drawArray'][gameData['lastDrawArrayIndex']][_0xdee561(0x231)][_0x4ee8b6][_0xdee561(0x244)] == ![] && (gameSettingsData['sequenceNumber'] && (_0x4ee8b6 = gameData[_0xdee561(0x213)][gameData[_0xdee561(0x19d)]][_0xdee561(0x231)][_0xdee561(0x29a)]));
                }
            break;
        case _0xdee561(0x1df):
            if (gameData[_0xdee561(0x2c1)]) {
                var _0x52ec03 = letterContainer[_0xdee561(0x1b6)](_0x12a4b0['stageX'], _0x12a4b0[_0xdee561(0x29c)]),
                    _0x34e0f8 = gameData['drawArrayIndex'],
                    _0x92d3d4 = gameData[_0xdee561(0x27e)],
                    _0x1d3031 = gameData[_0xdee561(0x213)][_0x34e0f8]['paths'][_0x92d3d4]['count'],
                    _0x2ac683 = gameData[_0xdee561(0x213)][_0x34e0f8][_0xdee561(0x1ef)] + '_' + gameData[_0xdee561(0x213)][_0x34e0f8][_0xdee561(0x231)][_0x92d3d4][_0xdee561(0x1d0)] + '_' + _0x1d3031;
                updateDrawingLine();
                var _0x31d471 = getDistanceByValue(_0x52ec03['x'], _0x52ec03['y'], $[_0xdee561(0x242)][_0x2ac683]['x'], $[_0xdee561(0x242)][_0x2ac683]['y']);
                if (_0x31d471 <= gameData[_0xdee561(0x1ae)]) followDrawingGuide();
                else _0x31d471 >= gameData[_0xdee561(0x1e2)] && (playSound(_0xdee561(0x2c9)), playerData[_0xdee561(0x1a1)]++, resetFollowDrawingGuide());
            }
            break;
        case _0xdee561(0x253):
            gameData[_0xdee561(0x2c1)] && (playSound(_0xdee561(0x2c9)), resetFollowDrawingGuide());
            break;
        case _0xdee561(0x1b2):
            break;
    }
}

function adjustScalePercent() {
    var _0x5c5945 = a0_0x15986e;
    gameData[_0x5c5945(0x183)] = scalePercent > 0x1 ? 0x1 : scalePercent;
    var _0x380b03 = 0x1 - gameData['scalePercent'],
        _0x66f415 = _0x380b03 * gameSettingsData[_0x5c5945(0x183)];
    gameData[_0x5c5945(0x1ae)] = gameSettingsData[_0x5c5945(0x228)] + gameSettingsData[_0x5c5945(0x228)] * _0x66f415, gameData[_0x5c5945(0x1e2)] = gameSettingsData[_0x5c5945(0x318)] + gameSettingsData[_0x5c5945(0x318)] * _0x66f415;
}

function followDrawingGuide() {
    var _0x4ef822 = a0_0x15986e;
    playSound(_0x4ef822(0x296));
    var _0x362d16 = gameData[_0x4ef822(0x2db)],
        _0x388f74 = gameData['drawArrayPathIndex'],
        _0x4bbf52 = gameData['drawArray'][_0x362d16][_0x4ef822(0x231)][_0x388f74]['count'],
        _0x2723d1 = gameData[_0x4ef822(0x213)][_0x362d16]['letterIndex'] + '_' + gameData[_0x4ef822(0x213)][_0x362d16]['paths'][_0x388f74][_0x4ef822(0x1d0)] + '_' + _0x4bbf52;
    $[_0x4ef822(0x242)][_0x2723d1][_0x4ef822(0x1f4)][_0x4ef822(0x195)] = $[_0x4ef822(0x242)][_0x2723d1][_0x4ef822(0x1c7)][_0x4ef822(0x187)], gameData[_0x4ef822(0x213)][_0x362d16][_0x4ef822(0x231)][_0x388f74]['count']++;
    if (gameData['drawArray'][_0x362d16]['paths'][_0x388f74][_0x4ef822(0x1a7)] > gameData[_0x4ef822(0x213)][_0x362d16][_0x4ef822(0x231)][_0x388f74][_0x4ef822(0x2f0)]) {
        gameData[_0x4ef822(0x2c1)] = ![], gameData[_0x4ef822(0x213)][_0x362d16][_0x4ef822(0x231)][_0x388f74][_0x4ef822(0x244)] = !![], gameData[_0x4ef822(0x1e7)] = !![];
        var _0x1bd7ae = 0x0;
        for (var _0x1f0a7b = 0x0; _0x1f0a7b < gameData[_0x4ef822(0x213)][_0x362d16][_0x4ef822(0x231)]['length']; _0x1f0a7b++) {
            gameData[_0x4ef822(0x213)][_0x362d16][_0x4ef822(0x231)][_0x1f0a7b][_0x4ef822(0x244)] && _0x1bd7ae++;
        }!gameSettingsData[_0x4ef822(0x270)] && (gameData[_0x4ef822(0x1e7)] = ![], gameData['lastDrawArrayIndex'] = -0x1), _0x1bd7ae == gameData[_0x4ef822(0x213)][_0x362d16][_0x4ef822(0x231)][_0x4ef822(0x29a)] && (animateFollowDrawingGuideComplete(_0x362d16), gameData[_0x4ef822(0x213)][_0x362d16]['complete'] = !![], gameData[_0x4ef822(0x1e7)] = ![], gameData[_0x4ef822(0x19d)] = -0x1);
    }
    followDrawingGuideComplete();
}

function animateFollowDrawingGuideComplete(_0x294bf0) {
    var _0x35749d = a0_0x15986e;
    playSound(_0x35749d(0x24f));
    for (var _0x47d443 = 0x0; _0x47d443 < gameData['drawArray'][_0x294bf0]['paths']['length']; _0x47d443++) {
        var _0x5d2e82 = _0x47d443;
        for (var _0x14e917 = 0x0; _0x14e917 <= gameData['drawArray'][_0x294bf0][_0x35749d(0x231)][_0x47d443][_0x35749d(0x2f0)]; _0x14e917++) {
            var _0x2f22f1 = _0x14e917,
                _0x46fd8e = _0x294bf0 + '_' + _0x5d2e82 + '_' + _0x2f22f1;
            animateGuideScale($[_0x35749d(0x242)][_0x46fd8e]);
        }
        var _0x46fd8e = _0x294bf0 + '_' + _0x5d2e82 + '_' + 0x0 + _0x35749d(0x27c);
        animateGuideScale($[_0x35749d(0x242)][_0x46fd8e]);
        var _0x46fd8e = _0x294bf0 + '_' + _0x5d2e82 + '_' + 0x0 + _0x35749d(0x1b0);
        animateGuideScale($['guides'][_0x46fd8e]);
    }
}

function animateGuideScale(_0x29a570) {
    var _0x355914 = 1.5,
        _0x9d5f5a = 0.5;
    TweenMax['to'](_0x29a570, _0x9d5f5a, {
        'scaleX': _0x355914,
        'scaleY': _0x355914,
        'overwrite': !![],
        'onComplete': function() {
            TweenMax['to'](_0x29a570, _0x9d5f5a, {
                'scaleX': 0x1,
                'scaleY': 0x1,
                'overwrite': !![],
                'onComplete': function() {}
            });
        }
    });
}

function followDrawingGuideComplete() {
    var _0x17a270 = a0_0x15986e;
    gameData['arrowAnimate'][_0x17a270(0x1a7)] = 0x0, gameData[_0x17a270(0x1f5)][_0x17a270(0x29f)] = ![];
    var _0x11b55b = 0x0;
    for (var _0x17e2ad = 0x0; _0x17e2ad < gameData[_0x17a270(0x213)][_0x17a270(0x29a)]; _0x17e2ad++) {
        gameData[_0x17a270(0x213)][_0x17e2ad][_0x17a270(0x244)] && _0x11b55b++;
    }
    _0x11b55b == gameData[_0x17a270(0x213)][_0x17a270(0x29a)] && endGame();
}

function resetFollowDrawingGuide() {
    var _0x42280e = a0_0x15986e;
    gameData[_0x42280e(0x1f5)][_0x42280e(0x1a7)] = 0x0, gameData[_0x42280e(0x1f5)]['status'] = ![], gameData[_0x42280e(0x2c1)] = ![];
    var _0xd52ccf = gameData[_0x42280e(0x2db)],
        _0x2fb422 = gameData[_0x42280e(0x27e)],
        _0x97c64a = gameData[_0x42280e(0x213)][_0xd52ccf][_0x42280e(0x1ef)] + '_' + gameData[_0x42280e(0x213)][_0xd52ccf]['paths'][_0x2fb422][_0x42280e(0x1d0)] + '_' + 0x0 + _0x42280e(0x354);
    $['guides'][_0x97c64a][_0x42280e(0x353)]['clear']();
    for (var _0x4c7ed3 = 0x0; _0x4c7ed3 <= gameData[_0x42280e(0x213)][_0xd52ccf]['paths'][_0x2fb422][_0x42280e(0x2f0)]; _0x4c7ed3++) {
        var _0x347247 = gameData['drawArray'][_0xd52ccf][_0x42280e(0x1ef)] + '_' + gameData['drawArray'][_0xd52ccf][_0x42280e(0x231)][_0x2fb422][_0x42280e(0x1d0)] + '_' + _0x4c7ed3;
        $[_0x42280e(0x242)][_0x347247][_0x42280e(0x1f4)]['style'] = $[_0x42280e(0x242)][_0x347247][_0x42280e(0x1c7)][_0x42280e(0x313)];
    }
    gameData[_0x42280e(0x213)][_0xd52ccf][_0x42280e(0x231)][_0x2fb422][_0x42280e(0x1a7)] = 0x0, !gameData[_0x42280e(0x1e7)] && (gameData['lastDrawArrayIndex'] = -0x1);
}

function updateDrawingLine() {
    var _0x57f753 = a0_0x15986e,
        _0xb123a6 = letterContainer[_0x57f753(0x1b6)](stage[_0x57f753(0x235)], stage[_0x57f753(0x1b4)]),
        _0x360837 = gameData[_0x57f753(0x2db)],
        _0x434266 = gameData['drawArrayPathIndex'],
        _0x402c62 = gameData['drawArray'][_0x360837][_0x57f753(0x1ef)] + '_' + gameData[_0x57f753(0x213)][_0x360837][_0x57f753(0x231)][_0x434266][_0x57f753(0x1d0)] + '_' + 0x0 + _0x57f753(0x354);
    $['guides'][_0x402c62]['graphics']['ss'](gameSettingsData[_0x57f753(0x241)]['stroke'], 'round')['s'](gameSettingsData[_0x57f753(0x241)]['strokeColor']), $[_0x57f753(0x242)][_0x402c62][_0x57f753(0x353)]['mt'](gameData[_0x57f753(0x220)]['x'], gameData['lineData']['y']), $[_0x57f753(0x242)][_0x402c62]['graphics']['lt'](_0xb123a6['x'], _0xb123a6['y']), gameData[_0x57f753(0x220)]['x'] = _0xb123a6['x'], gameData[_0x57f753(0x220)]['y'] = _0xb123a6['y'];
}

function buildStarGravity() {
    var _0x3d9aca = a0_0x15986e;
    for (var _0x5489b2 = 0x0; _0x5489b2 < gravityData[_0x3d9aca(0x2f0)]; _0x5489b2++) {
        $[_0x3d9aca(0x1dd)][_0x5489b2] = new createjs[(_0x3d9aca(0x2b5))](loader[_0x3d9aca(0x2dd)](_0x3d9aca(0x265))), centerReg($[_0x3d9aca(0x1dd)][_0x5489b2]), resetStar(_0x5489b2), starsContainer['addChild']($[_0x3d9aca(0x1dd)][_0x5489b2]);
    }
}

function toggleStars(_0x2bf04c) {
    var _0x1d9022 = a0_0x15986e;
    gravityData['animate'] = _0x2bf04c;
    if (gravityData[_0x1d9022(0x1e3)])
        for (var _0x1b037 = 0x0; _0x1b037 < gravityData[_0x1d9022(0x2f0)]; _0x1b037++) {
            resetStar(_0x1b037);
        }
}

function resetStar(_0x2dc2e7) {
    var _0x5bb0be = a0_0x15986e;
    $[_0x5bb0be(0x1dd)][_0x2dc2e7]['x'] = randomIntFromInterval(gravityData['range'], canvasW - gravityData[_0x5bb0be(0x305)]), $[_0x5bb0be(0x1dd)][_0x2dc2e7]['y'] = canvasH + gravityData[_0x5bb0be(0x305)], $[_0x5bb0be(0x1dd)][_0x2dc2e7][_0x5bb0be(0x208)] = randomIntFromInterval(-0x14, 0x14), $[_0x5bb0be(0x1dd)][_0x2dc2e7][_0x5bb0be(0x303)] = randomIntFromInterval(-0x14, -0x28), $[_0x5bb0be(0x1dd)][_0x2dc2e7]['scaleX'] = $[_0x5bb0be(0x1dd)][_0x2dc2e7]['scaleY'] = randomIntFromInterval(0x5, 0xa) * 0.1;
}

function loopStars() {
    var _0x115509 = a0_0x15986e;
    for (var _0x3727e7 = 0x0; _0x3727e7 < gravityData[_0x115509(0x2f0)]; _0x3727e7++) {
        $[_0x115509(0x1dd)][_0x3727e7]['y'] = $[_0x115509(0x1dd)][_0x3727e7]['y'] + $[_0x115509(0x1dd)][_0x3727e7][_0x115509(0x303)], $[_0x115509(0x1dd)][_0x3727e7]['x'] = $[_0x115509(0x1dd)][_0x3727e7]['x'] + $[_0x115509(0x1dd)][_0x3727e7][_0x115509(0x208)], $[_0x115509(0x1dd)][_0x3727e7][_0x115509(0x2bf)] = $[_0x115509(0x1dd)][_0x3727e7][_0x115509(0x2bf)] + $[_0x115509(0x1dd)][_0x3727e7][_0x115509(0x208)], $[_0x115509(0x1dd)][_0x3727e7]['yspeed'] = $[_0x115509(0x1dd)][_0x3727e7][_0x115509(0x303)] * gravityData['drag'] + gravityData[_0x115509(0x32a)], $[_0x115509(0x1dd)][_0x3727e7]['xspeed'] = $[_0x115509(0x1dd)][_0x3727e7][_0x115509(0x208)] * gravityData[_0x115509(0x1e8)], $[_0x115509(0x1dd)][_0x3727e7]['y'] > canvasH + gravityData[_0x115509(0x305)] * 0x2 && (gravityData[_0x115509(0x1e3)] && resetStar(_0x3727e7));
    }
}

function endGame() {
    var _0x155883 = a0_0x15986e;
    removeStageEvents(), gameData[_0x155883(0x20f)] = ![], gameData[_0x155883(0x2c1)] = ![];
    var _0x434daa = $[_0x155883(0x245)]['image_' + gameData[_0x155883(0x211)]],
        _0x15d42a = $[_0x155883(0x245)][_0x155883(0x267) + gameData['tracingNum']];
    $[_0x155883(0x335)]['enable'] && (_0x434daa = letterImage, _0x15d42a = letterFinalImage);
    var _0x3e8158 = 0x3 * drawings_array[gameData[_0x155883(0x211)]]['letters']['length'],
        _0x5e6812 = _0x3e8158 - playerData[_0x155883(0x1a1)];
    _0x5e6812 = _0x5e6812 < 0x0 ? 0x0 : _0x5e6812, playerData[_0x155883(0x301)] += _0x5e6812 * gameData['score'], toggleStars(!![]), TweenMax['to'](letterContainer, 0.5, {
        'delay': 0.3,
        'overwrite': !![],
        'onComplete': function() {
            var _0x2c0c28 = _0x155883;
            drawings_array[gameData[_0x2c0c28(0x211)]][_0x2c0c28(0x1ce)] != '' && ($[_0x2c0c28(0x335)][_0x2c0c28(0x314)] ? playSound('letterAudio') : playSound(_0x2c0c28(0x2ab) + gameData[_0x2c0c28(0x211)])), letterContainer['alpha'] = 0x0, TweenMax['to'](linesContainer, 0.5, {
                'delay': 0x1,
                'alpha': 0x0,
                'overwrite': !![]
            }), TweenMax['to'](_0x434daa, 0.5, {
                'alpha': 0x0,
                'overwrite': !![]
            }), TweenMax['to'](_0x15d42a, 0.5, {
                'alpha': 0x1,
                'overwrite': !![],
                'onComplete': function() {
                    TweenMax['to'](_0x15d42a, 0x1, {
                        'overwrite': !![],
                        'onComplete': function() {
                            var _0x3becaf = a0_0x413e;
                            playSound(_0x3becaf(0x326)), !$['editor'][_0x3becaf(0x314)] && TweenMax['to'](gameContainer, 0x3, {
                                'overwrite': !![],
                                'onComplete': function() {
                                    var _0xc03ef9 = _0x3becaf;
                                    gameData['seqIndex']++, gameData[_0xc03ef9(0x2ad)] > gameData[_0xc03ef9(0x311)][_0xc03ef9(0x29a)] - 0x1 ? goPage(_0xc03ef9(0x344)) : buildLetters();
                                }
                            });
                        }
                    });
                }
            });
        }
    });
}

function updateGame() {
    var _0x4280b4 = a0_0x15986e;
    !gameData[_0x4280b4(0x1d2)] && (gameData[_0x4280b4(0x20f)] && !gameData[_0x4280b4(0x2c1)] && gameSettingsData['arrowAnimate'] && (gameData[_0x4280b4(0x1f5)][_0x4280b4(0x1a7)]++, gameData[_0x4280b4(0x1f5)]['count'] > 0x32 && (!gameData['arrowAnimate'][_0x4280b4(0x29f)] && (gameData[_0x4280b4(0x1f5)]['status'] = !![], animateGuide())))), loopStars();
}
var categoryLoader, categoryFileFest;

function loopLoadCategory() {
    var _0x425dec = a0_0x15986e;
    gameData[_0x425dec(0x2ce)] = [];
    for (var _0x2e6c2b = 0x0; _0x2e6c2b < drawings_array[_0x425dec(0x29a)]; _0x2e6c2b++) {
        category_array[gameData[_0x425dec(0x297)]][_0x425dec(0x33d)] == drawings_array[_0x2e6c2b][_0x425dec(0x269)] && gameData[_0x425dec(0x2ce)][_0x425dec(0x24a)](_0x2e6c2b);
    }
    loadCategoryAssets();
}

function loadCategoryAssets() {
    var _0x2e0d79 = a0_0x15986e;
    categoryFileFest = [];
    for (var _0x170f94 = 0x0; _0x170f94 < gameData['preloadSeq']['length']; _0x170f94++) {
        var _0x472691 = gameData['preloadSeq'][_0x170f94];
        drawings_array[_0x472691][_0x2e0d79(0x1e1)] != '' && categoryFileFest[_0x2e0d79(0x24a)]({
            'src': drawings_array[_0x472691][_0x2e0d79(0x1e1)],
            'id': 'letterImage' + _0x472691
        }), drawings_array[_0x472691]['finalImage'] != '' && categoryFileFest['push']({
            'src': drawings_array[_0x472691][_0x2e0d79(0x17c)],
            'id': _0x2e0d79(0x2ae) + _0x472691
        });
    }
    categoryLoader = new createjs[(_0x2e0d79(0x2c5))](![]);
    if (audioOn) {
        for (var _0x170f94 = 0x0; _0x170f94 < gameData[_0x2e0d79(0x2ce)][_0x2e0d79(0x29a)]; _0x170f94++) {
            var _0x472691 = gameData[_0x2e0d79(0x2ce)][_0x170f94];
            drawings_array[_0x472691][_0x2e0d79(0x1ce)] != '' && categoryFileFest['push']({
                'src': drawings_array[_0x472691][_0x2e0d79(0x1ce)],
                'id': _0x2e0d79(0x2ab) + _0x472691
            });
        }
        createjs['Sound'][_0x2e0d79(0x205)] = [_0x2e0d79(0x272)], categoryLoader[_0x2e0d79(0x26d)](createjs['Sound']);
    }
    categoryLoader[_0x2e0d79(0x336)](_0x2e0d79(0x244), categoryFileComplete), categoryLoader[_0x2e0d79(0x1d4)](categoryFileFest);
}

function categoryFileComplete() {
    var _0x50a48f = a0_0x15986e;
    for (var _0x139eaf = 0x0; _0x139eaf < gameData[_0x50a48f(0x2ce)]['length']; _0x139eaf++) {
        var _0x34b662 = gameData[_0x50a48f(0x2ce)][_0x139eaf];
        $['background'][_0x50a48f(0x202) + _0x34b662] = new createjs[(_0x50a48f(0x2b5))](categoryLoader[_0x50a48f(0x2dd)](_0x50a48f(0x25d) + _0x34b662)), $[_0x50a48f(0x245)][_0x50a48f(0x267) + _0x34b662] = new createjs['Bitmap'](categoryLoader[_0x50a48f(0x2dd)]('letterFinalImage' + _0x34b662)), $[_0x50a48f(0x245)][_0x50a48f(0x202) + _0x34b662][_0x50a48f(0x2e2)] = ![], $['background'][_0x50a48f(0x267) + _0x34b662][_0x50a48f(0x2e2)] = ![], bgContainer[_0x50a48f(0x339)]($['background'][_0x50a48f(0x202) + _0x34b662], $[_0x50a48f(0x245)][_0x50a48f(0x267) + _0x34b662]);
    }
    category_array[gameData['preloadCategoryIndex']][_0x50a48f(0x282)] = !![], $[_0x50a48f(0x1b8)][_0x50a48f(0x309) + gameData[_0x50a48f(0x297)]]['text'] = '', gameData[_0x50a48f(0x297)]++, gameData['preloadCategoryIndex'] < category_array[_0x50a48f(0x29a)] && loopLoadCategory();
}

function toggleOptions(_0x31c06d) {
    var _0x3abd61 = a0_0x15986e;
    optionsContainer[_0x3abd61(0x2e2)] ? optionsContainer['visible'] = ![] : optionsContainer[_0x3abd61(0x2e2)] = !![], _0x31c06d != undefined && (optionsContainer[_0x3abd61(0x2e2)] = _0x31c06d);
}

function toggleSoundMute(_0x444e2c) {
    var _0x6806c1 = a0_0x15986e;
    buttonSoundOff['visible'] = ![], buttonSoundOn['visible'] = ![], toggleSoundInMute(_0x444e2c), _0x444e2c ? buttonSoundOn[_0x6806c1(0x2e2)] = !![] : buttonSoundOff[_0x6806c1(0x2e2)] = !![];
}

function toggleMusicMute(_0x31e57a) {
    var _0x4fba68 = a0_0x15986e;
    buttonMusicOff[_0x4fba68(0x2e2)] = ![], buttonMusicOn[_0x4fba68(0x2e2)] = ![], toggleMusicInMute(_0x31e57a), _0x31e57a ? buttonMusicOn[_0x4fba68(0x2e2)] = !![] : buttonMusicOff[_0x4fba68(0x2e2)] = !![];
}

function toggleFullScreen() {
    var _0x1e3cf9 = a0_0x15986e;
    if (!document['fullscreenElement'] && !document[_0x1e3cf9(0x1f2)] && !document[_0x1e3cf9(0x29d)] && !document['msFullscreenElement']) {
        if (document[_0x1e3cf9(0x283)]['requestFullscreen']) document[_0x1e3cf9(0x283)][_0x1e3cf9(0x1a4)]();
        else {
            if (document['documentElement'][_0x1e3cf9(0x196)]) document[_0x1e3cf9(0x283)][_0x1e3cf9(0x196)]();
            else {
                if (document['documentElement'][_0x1e3cf9(0x1c8)]) document['documentElement'][_0x1e3cf9(0x1c8)]();
                else document[_0x1e3cf9(0x283)][_0x1e3cf9(0x317)] && document[_0x1e3cf9(0x283)][_0x1e3cf9(0x317)](Element[_0x1e3cf9(0x2ed)]);
            }
        }
    } else {
        if (document[_0x1e3cf9(0x289)]) document[_0x1e3cf9(0x289)]();
        else {
            if (document[_0x1e3cf9(0x1c9)]) document[_0x1e3cf9(0x1c9)]();
            else {
                if (document['mozCancelFullScreen']) document[_0x1e3cf9(0x1e4)]();
                else document['webkitExitFullscreen'] && document[_0x1e3cf9(0x182)]();
            }
        }
    }
}

function shareLinks(_0x1503aa, _0x150158) {
    var _0x34cc09 = a0_0x15986e;
    shareSettings[_0x34cc09(0x2fb)] && gtag(_0x34cc09(0x31a), _0x34cc09(0x27b), {
        'event_category': _0x34cc09(0x1a3),
        'event_label': _0x1503aa
    });
    var _0x37205c = location[_0x34cc09(0x1c0)];
    _0x37205c = encodeURIComponent(_0x37205c[_0x34cc09(0x1f3)](0x0, _0x37205c[_0x34cc09(0x356)]('/') + 0x1));
    var _0x1300db = shareSettings[_0x34cc09(0x22f)][_0x34cc09(0x1d6)](_0x34cc09(0x2bc), _0x150158),
        _0x32af06 = shareSettings[_0x34cc09(0x299)]['replace'](_0x34cc09(0x2bc), _0x150158),
        _0x182678 = '';
    if (_0x1503aa == _0x34cc09(0x2e6)) shareSettings[_0x34cc09(0x2f4)] ? (_0x37205c = decodeURIComponent(_0x37205c), _0x182678 = _0x34cc09(0x1c3) + encodeURIComponent(_0x37205c + _0x34cc09(0x307) + _0x1300db + _0x34cc09(0x19a) + _0x37205c + _0x34cc09(0x327) + _0x37205c + 'share.jpg')) : _0x182678 = _0x34cc09(0x1c3) + _0x37205c;
    else {
        if (_0x1503aa == _0x34cc09(0x21a)) _0x182678 = _0x34cc09(0x1f9) + _0x32af06 + _0x34cc09(0x19a) + _0x37205c;
        else {
            if (_0x1503aa == 'whatsapp') _0x182678 = _0x34cc09(0x2a4) + _0x32af06 + _0x34cc09(0x248) + _0x37205c;
            else {
                if (_0x1503aa == _0x34cc09(0x2d3)) _0x182678 = _0x34cc09(0x34c) + _0x37205c + '&text=' + _0x32af06;
                else {
                    if (_0x1503aa == _0x34cc09(0x18d)) _0x182678 = 'https://www.reddit.com/submit?url=' + _0x37205c + _0x34cc09(0x229) + _0x32af06;
                    else _0x1503aa == _0x34cc09(0x349) && (_0x182678 = _0x34cc09(0x29e) + _0x37205c);
                }
            }
        }
    }
    window['open'](_0x182678);
}
var sortFunction = function(_0x38917b, _0x172f2c, _0x5200cf) {
        if (_0x38917b['y'] > _0x172f2c['y']) return 0x1;
        if (_0x38917b['y'] < _0x172f2c['y']) return -0x1;
        return 0x0;
    },
    stageWidth, stageHeight = 0x0,
    isLoaded = ![];
$(function() {
    var _0xb264fc = a0_0x15986e,
        _0x4568f5 = function() {
            var _0x409174 = a0_0x413e;
            try {
                createjs[_0x409174(0x295)]['context'][_0x409174(0x315)] === _0x409174(0x23b) && (createjs[_0x409174(0x295)][_0x409174(0x2a6)][_0x409174(0x350)](), window[_0x409174(0x1ab)](_0x409174(0x27b), _0x4568f5));
            } catch (_0x207ac6) {
                console['error'](_0x409174(0x322)), console[_0x409174(0x173)](_0x207ac6);
            }
        };
    window[_0xb264fc(0x336)]('click', _0x4568f5), window['location']['protocol'][_0xb264fc(0x310)](0x0, 0x4) === _0xb264fc(0x292) && alert(_0xb264fc(0x1d9)), $(window)[_0xb264fc(0x263)](function() {
        resizeLoaderFunc();
    }), resizeLoaderFunc(), checkBrowser();
});

function resizeLoaderFunc() {
    var _0xaa4b4e = a0_0x15986e;
    stageWidth = $(window)['width'](), stageHeight = $(window)[_0xaa4b4e(0x1fc)](), $(_0xaa4b4e(0x2e9))[_0xaa4b4e(0x332)]('left', checkContentWidth($(_0xaa4b4e(0x2e9)))), $(_0xaa4b4e(0x2e9))['css'](_0xaa4b4e(0x176), checkContentHeight($(_0xaa4b4e(0x2e9)))), $('#notSupportHolder')[_0xaa4b4e(0x332)](_0xaa4b4e(0x275), checkContentWidth($(_0xaa4b4e(0x2e9)))), $(_0xaa4b4e(0x178))[_0xaa4b4e(0x332)](_0xaa4b4e(0x176), checkContentHeight($(_0xaa4b4e(0x2e9))));
}
var browserSupport = ![],
    isMobile, isTablet, isDesktop;

function checkBrowser() {
    var _0x16d4b7 = a0_0x15986e;
    if (typeof MobileDetect === 'function') {
        var _0x462ffb = new MobileDetect(window['navigator'][_0x16d4b7(0x26a)]);
        isMobile = _0x462ffb[_0x16d4b7(0x33b)](), isTablet = _0x462ffb[_0x16d4b7(0x288)](), isMobile == null && isTablet == null && (isDesktop = !![]);
    }
    var _0x4a4be7 = document[_0x16d4b7(0x22d)]('canvas');
    _0x4a4be7['getContext'] && (browserSupport = !![]), browserSupport ? !isLoaded && (isLoaded = !![], initPreload()) : $(_0x16d4b7(0x178))[_0x16d4b7(0x2d1)]();
}

function initPreload() {
    var _0x297154 = a0_0x15986e;
    toggleLoader(!![]), checkMobileEvent(), $(window)['resize'](function() {
        resizeGameFunc();
    }), resizeGameFunc(), loader = new createjs[(_0x297154(0x2c5))](![]), manifest = [{
        'src': 'assets/background.png',
        'id': _0x297154(0x245)
    }, {
        'src': 'assets/logo.png',
        'id': _0x297154(0x1f0)
    }, {
        'src': _0x297154(0x2e8),
        'id': 'buttonPlay'
    }, {
        'src': _0x297154(0x1a6),
        'id': _0x297154(0x2dc)
    }, {
        'src': _0x297154(0x236),
        'id': 'buttonNext'
    }, {
        'src': _0x297154(0x278),
        'id': _0x297154(0x2f1)
    }, {
        'src': 'assets/item_arrow.png',
        'id': _0x297154(0x2a0)
    }, {
        'src': _0x297154(0x32b),
        'id': 'itemStar'
    }, {
        'src': 'assets/button_yes.png',
        'id': _0x297154(0x2c3)
    }, {
        'src': _0x297154(0x18a),
        'id': 'buttonCancel'
    }, {
        'src': _0x297154(0x320),
        'id': _0x297154(0x2f5)
    }, {
        'src': _0x297154(0x21d),
        'id': 'buttonContinue'
    }, {
        'src': _0x297154(0x225),
        'id': _0x297154(0x26e)
    }, {
        'src': _0x297154(0x334),
        'id': _0x297154(0x1ac)
    }, {
        'src': _0x297154(0x191),
        'id': _0x297154(0x293)
    }, {
        'src': _0x297154(0x2e4),
        'id': _0x297154(0x22c)
    }, {
        'src': _0x297154(0x1db),
        'id': 'buttonTwitter'
    }, {
        'src': _0x297154(0x186),
        'id': _0x297154(0x2c8)
    }, {
        'src': _0x297154(0x34b),
        'id': _0x297154(0x1c4)
    }, {
        'src': _0x297154(0x1c6),
        'id': _0x297154(0x342)
    }, {
        'src': _0x297154(0x2d4),
        'id': _0x297154(0x1a5)
    }, {
        'src': _0x297154(0x33c),
        'id': 'buttonFullscreen'
    }, {
        'src': _0x297154(0x20b),
        'id': _0x297154(0x179)
    }, {
        'src': _0x297154(0x35a),
        'id': _0x297154(0x266)
    }, {
        'src': _0x297154(0x238),
        'id': 'buttonExit'
    }, {
        'src': _0x297154(0x1da),
        'id': _0x297154(0x17d)
    }];
    if (!$['editor'][_0x297154(0x314)]) {
        for (var _0x30aeff = 0x0; _0x30aeff < category_array[_0x297154(0x29a)]; _0x30aeff++) {
            manifest[_0x297154(0x24a)]({
                'src': category_array[_0x30aeff][_0x297154(0x1b8)],
                'id': _0x297154(0x1f7) + _0x30aeff
            });
        }
        if (!preloadDrawings)
            for (var _0x30aeff = 0x0; _0x30aeff < drawings_array[_0x297154(0x29a)]; _0x30aeff++) {
                drawings_array[_0x30aeff][_0x297154(0x1e1)] != '' && manifest[_0x297154(0x24a)]({
                    'src': drawings_array[_0x30aeff][_0x297154(0x1e1)],
                    'id': _0x297154(0x25d) + _0x30aeff
                }), drawings_array[_0x30aeff][_0x297154(0x17c)] != '' && manifest[_0x297154(0x24a)]({
                    'src': drawings_array[_0x30aeff][_0x297154(0x17c)],
                    'id': 'letterFinalImage' + _0x30aeff
                });
            }
    }
    typeof addScoreboardAssets == _0x297154(0x181) && addScoreboardAssets();
    audioOn = !![];
    !isDesktop ? !enableMobileAudio && (audioOn = ![]) : !enableDesktopAudio && (audioOn = ![]);
    if (audioOn) {
        manifest[_0x297154(0x24a)]({
            'src': 'assets/sounds/click.ogg',
            'id': _0x297154(0x276)
        }), manifest[_0x297154(0x24a)]({
            'src': _0x297154(0x1be),
            'id': 'soundComplete'
        }), manifest['push']({
            'src': _0x297154(0x1c2),
            'id': _0x297154(0x2d6)
        }), manifest['push']({
            'src': _0x297154(0x22e),
            'id': _0x297154(0x296)
        }), manifest[_0x297154(0x24a)]({
            'src': _0x297154(0x355),
            'id': _0x297154(0x24f)
        }), manifest[_0x297154(0x24a)]({
            'src': 'assets/sounds/cheers.ogg',
            'id': _0x297154(0x326)
        }), manifest[_0x297154(0x24a)]({
            'src': _0x297154(0x1fa),
            'id': _0x297154(0x2c9)
        });
        if (!$[_0x297154(0x335)][_0x297154(0x314)] && !preloadDrawings)
            for (var _0x30aeff = 0x0; _0x30aeff < drawings_array[_0x297154(0x29a)]; _0x30aeff++) {
                drawings_array[_0x30aeff][_0x297154(0x1ce)] != '' && manifest[_0x297154(0x24a)]({
                    'src': drawings_array[_0x30aeff]['audio'],
                    'id': _0x297154(0x2ab) + _0x30aeff
                });
            }
        createjs[_0x297154(0x30a)]['alternateExtensions'] = [_0x297154(0x272)], loader[_0x297154(0x26d)](createjs[_0x297154(0x30a)]);
    }
    loader[_0x297154(0x336)](_0x297154(0x244), handleComplete), loader[_0x297154(0x336)](_0x297154(0x192), fileComplete), loader['addEventListener'](_0x297154(0x173), handleFileError), loader['on'](_0x297154(0x190), handleProgress, this), loader[_0x297154(0x1d4)](manifest);
}

function fileComplete(_0x119861) {
    var _0x2aad68 = _0x119861['item'];
}

function handleFileError(_0x1d9991) {
    var _0x155815 = a0_0x15986e;
    console[_0x155815(0x215)](_0x155815(0x28d), _0x1d9991);
}

function handleProgress() {
    var _0xddf0 = a0_0x15986e;
    $(_0xddf0(0x1d1))[_0xddf0(0x31d)](Math['round'](loader['progress'] / 0x1 * 0x64) + '%');
}

function handleComplete() {
    toggleLoader(![]), initMain();
};

function toggleLoader(_0xce04fa) {
    var _0x1aecb3 = a0_0x15986e;
    _0xce04fa ? $(_0x1aecb3(0x2e9))[_0x1aecb3(0x2d1)]() : $(_0x1aecb3(0x2e9))[_0x1aecb3(0x2f6)]();
}
var stageW = 0x500,
    stageH = 0x300,
    contentW = 0x400,
    contentH = 0x240;

function initMain() {
    var _0x25143f = a0_0x15986e;
    isDesktop && $('#canvasHolder')[_0x25143f(0x2d1)](), initGameCanvas(stageW, stageH), buildGameCanvas(), buildGameButton(), typeof buildScoreBoardCanvas == _0x25143f(0x181) && buildScoreBoardCanvas(), $[_0x25143f(0x335)][_0x25143f(0x314)] ? (loadEditPage(), goPage(_0x25143f(0x2be))) : (buildSelectPagination(), goPage(_0x25143f(0x285))), resizeCanvas();
}
var windowW = windowH = 0x0,
    scalePercent = 0x0;
const dpr = window[a0_0x15986e(0x185)] || 0x1,
    offset = {
        'x': 0x0,
        'y': 0x0,
        'left': 0x0,
        'top': 0x0
    };

function resizeGameFunc() {
    setTimeout(function() {
        var _0x8cbe7a = a0_0x413e;
        $(_0x8cbe7a(0x249))['css'](_0x8cbe7a(0x275), checkContentWidth($(_0x8cbe7a(0x249)))), $(_0x8cbe7a(0x249))[_0x8cbe7a(0x332)]('top', checkContentHeight($(_0x8cbe7a(0x249)))), windowW = window['innerWidth'], windowH = window[_0x8cbe7a(0x2b1)], scalePercent = Math['min'](windowW / contentW, windowH / contentH), scalePercent = scalePercent > 0x1 ? 0x1 : scalePercent;
        windowW > stageW && windowH > stageH && (windowW > stageW && (scalePercent = windowW / stageW, stageH * scalePercent > windowH && (scalePercent = windowH / stageH)));
        const _0x3deccb = stageW * scalePercent,
            _0x1f271b = stageH * scalePercent;
        offset[_0x8cbe7a(0x275)] = 0x0, offset[_0x8cbe7a(0x176)] = 0x0, _0x3deccb > windowW ? offset[_0x8cbe7a(0x275)] = -(_0x3deccb - windowW) : offset['left'] = windowW - _0x3deccb, _0x1f271b > windowH ? offset[_0x8cbe7a(0x176)] = -(_0x1f271b - windowH) : offset[_0x8cbe7a(0x176)] = windowH - _0x1f271b, offset['x'] = 0x0, offset['y'] = 0x0, offset[_0x8cbe7a(0x275)] < 0x0 && (offset['x'] = Math[_0x8cbe7a(0x359)](offset[_0x8cbe7a(0x275)] / scalePercent / 0x2)), offset[_0x8cbe7a(0x176)] < 0x0 && (offset['y'] = Math[_0x8cbe7a(0x359)](offset[_0x8cbe7a(0x176)] / scalePercent / 0x2)), $(window)[_0x8cbe7a(0x337)](0x0), resizeCanvas();
    }, 0x64);
}
var rotateInstruction = !![],
    forPortrait = ![];

function checkMobileEvent() {
    var _0xe95a2d = a0_0x15986e;
    if (!isDesktop) {
        if (!rotateInstruction) {
            $(_0xe95a2d(0x345))[_0xe95a2d(0x2d1)](), $(_0xe95a2d(0x28e))['hide']();
            return;
        }
        $(window)[_0xe95a2d(0x34d)](_0xe95a2d(0x25a))['on'](_0xe95a2d(0x25a), function(_0x15ee78) {
            var _0x3c8c30 = _0xe95a2d;
            $(_0x3c8c30(0x345))[_0x3c8c30(0x2f6)](), $(_0x3c8c30(0x28e))[_0x3c8c30(0x2f6)](), setTimeout(function() {
                checkMobileOrientation();
            }, 0x3e8);
        }), checkMobileOrientation();
    }
}

function checkMobileOrientation() {
    var _0x3c2a97 = a0_0x15986e,
        _0x244d36 = ![];
    window[_0x3c2a97(0x279)] > window[_0x3c2a97(0x2b1)] && (_0x244d36 = !![]);
    var _0x2c38f4 = ![];
    !_0x244d36 ? forPortrait && (_0x2c38f4 = !![]) : !forPortrait && (_0x2c38f4 = !![]), !_0x2c38f4 ? toggleRotate(!![]) : (toggleRotate(![]), $('#canvasHolder')[_0x3c2a97(0x2d1)]());
}

function toggleRotate(_0x364e82) {
    var _0x262b0a = a0_0x15986e;
    _0x364e82 ? $(_0x262b0a(0x28e))[_0x262b0a(0x268)]() : $('#rotateHolder')[_0x262b0a(0x1d7)](), resizeGameFunc();
}

function checkContentHeight(_0x424e2a) {
    var _0x2aaccd = a0_0x15986e,
        _0x69b4df = $(window)[_0x2aaccd(0x1fc)](),
        _0x2aedd5 = _0x69b4df / 0x2 - _0x424e2a['height']() / 0x2;
    return _0x2aedd5;
}

function checkContentWidth(_0x2fab7a) {
    var _0x8ecbfe = a0_0x15986e,
        _0x53f778 = $(window)[_0x8ecbfe(0x304)](),
        _0x86c066 = _0x53f778 / 0x2 - _0x2fab7a[_0x8ecbfe(0x304)]() / 0x2;
    return _0x86c066;
}

function shuffle(_0x202669) {
    var _0x48ecde = a0_0x15986e,
        _0x509395 = _0x202669[_0x48ecde(0x29a)],
        _0x26115f, _0x4a8d7d;
    while (0x0 !== _0x509395) {
        _0x4a8d7d = Math[_0x48ecde(0x30d)](Math['random']() * _0x509395), _0x509395 -= 0x1, _0x26115f = _0x202669[_0x509395], _0x202669[_0x509395] = _0x202669[_0x4a8d7d], _0x202669[_0x4a8d7d] = _0x26115f;
    }
    return _0x202669;
}

function randomBoolean() {
    return Math['random']() < 0.5;
}

function sortOnObject(_0x492a66, _0x4f4bd4, _0x4c24d3) {
    var _0x3c9e94 = a0_0x15986e;
    return _0x4c24d3 ? _0x492a66[_0x3c9e94(0x358)](function(_0x519a42, _0x4009c1) {
        var _0x54d823 = _0x519a42[_0x4f4bd4],
            _0x38d93b = _0x4009c1[_0x4f4bd4];
        if (_0x54d823 == _0x38d93b) return 0x0;
        return _0x54d823 < _0x38d93b ? 0x1 : -0x1;
    }) : _0x492a66[_0x3c9e94(0x358)](function(_0x180770, _0x408945) {
        var _0x355cd2 = _0x180770[_0x4f4bd4],
            _0x2e3671 = _0x408945[_0x4f4bd4];
        if (_0x355cd2 == _0x2e3671) return 0x0;
        return _0x355cd2 > _0x2e3671 ? 0x1 : -0x1;
    }), _0x492a66;
}

function randomIntFromInterval(_0x573574, _0x3bf233) {
    var _0x31c7b4 = a0_0x15986e;
    return Math[_0x31c7b4(0x30d)](Math[_0x31c7b4(0x23d)]() * (_0x3bf233 - _0x573574 + 0x1) + _0x573574);
}

function a0_0x4b72() {
    var _0x213841 = ['WebAudioPlugin', 'soundPath', 'preloadCategoryIndex', '#ccc', 'shareText', 'length', 'assets/drawing/alphabet_e.png', 'stageY', 'webkitFullscreenElement', 'https://www.linkedin.com/sharing/share-offsite/?url=', 'status', 'itemArrow', 'spaceX', 'naturalWidth', 'assets/drawing/sounds/alphabet_m.ogg', 'https://api.whatsapp.com/send?text=', 'Drawings', 'context', 'numChildren', 'Loading...', 'assets/drawing/alphabet_w.png', 'getElementById', 'letterAudio', 'undefined', 'seqIndex', 'letterFinalImage', 'guide', 'assets/drawing/alphabet_h.png', 'innerHeight', 'button', 'arrowAnimateSpeed', 'assets/drawing/alphabet_p_final.png', 'Bitmap', 'update', 'assets/drawing/sounds/alphabet_u.ogg', 'center', 'assets/drawing/sounds/alphabet_a.ogg', 'assets/drawing/alphabet_m.png', 'regY', '[SCORE]', 'assets/drawing/alphabet_j_final.png', 'edit', 'rotation', 'pressup', 'drawing', 'blur', 'buttonConfirm', '2910354OLTdmN', 'LoadQueue', 'assets/drawing/number_9.png', 'assets/drawing/number_6.png', 'buttonWhatsapp', 'soundError', 'assets/drawing/alphabet_f_final.png', 'scaleY', 'assets/drawing/alphabet_z.png', 'assets/drawing/alphabet_f.png', 'preloadSeq', 'assets/drawing/number_6_final.png', 'oriY', 'show', 'nextX', 'telegram', 'assets/social/button_linkedin.png', 'assets/drawing/alphabet_j.png', 'soundResult', 'assets/drawing/alphabet_d.png', 'whatsapp', 'assets/drawing/number_7.png', '35px\x20bodo_amatregular', 'drawArrayIndex', 'buttonPrev', 'getResult', 'exitTitle', 'assets/drawing/number_1.png', 'lineHeight', 'Shape', 'visible', 'assets/drawing/alphabet_t_final.png', 'assets/social/button_facebook.png', 'mousedown', 'facebook', '40px\x20bodo_amatregular', 'assets/button_play.png', '#mainLoader', '#F4B331', 'There\x20are\x20no\x20drawing\x20in\x20this\x20category.', 'game', 'ALLOW_KEYBOARD_INPUT', 'assets/drawing/sounds/shape_02.ogg', 'buttonContinue', 'total', 'itemGame', 'strokeEnable', 'settings', 'customScore', 'itemExit', 'hide', 'assets/drawing/alphabet_b.png', 'strokeColor', 'test', 'tick', 'gtag', 'assets/drawing/drawing_05.png', '1704732omWhbA', 'thumb_', 'assets/drawing/alphabet_m_final.png', 'Chinese', 'score', 'assets/drawing/mandarin_03.png', 'yspeed', 'width', 'range', 'assets/drawing/alphabet_b_final.png', 'share.php?title=', 'setStrokeStyle', 'thumbloader_', 'Sound', '65rfGzES', 'exitMessage', 'floor', 'assets/drawing/sounds/alphabet_q.ogg', 'assets/drawing/sounds/alphabet_w.ogg', 'substr', 'seq', 'drawCircle', 'color', 'enable', 'state', 'categoryLoader', 'webkitRequestFullscreen', 'drawOutDistance', 'assets/drawing/alphabet_z_final.png', 'event', 'radius', 'assets/drawing/alphabet_q.png', 'html', 'assets/drawing/shape_01.png', 'assets/drawing/sounds/alphabet_h.ogg', 'assets/item_confirm.png', 'assets/drawing/sounds/alphabet_n.ogg', 'There\x20was\x20an\x20error\x20while\x20trying\x20to\x20resume\x20the\x20SoundJS\x20Web\x20Audio\x20context...', 'assets/drawing/alphabet_k_final.png', 'pauseAll', '#000', 'soundCheers', '&thumb=', 'ready', 'assets/drawing/sounds/alphabet_j.ogg', 'gravity', 'assets/item_star.png', 'assets/drawing/alphabet_l.png', 'enableMouseOver', 'autoClear', '#f3c501', 'assets/drawing/alphabet_l_final.png', 'assets/drawing/number_4.png', 'css', 'assets/drawing/sounds/number_10.ogg', 'assets/button_share.png', 'editor', 'addEventListener', 'scrollTop', 'indexOf', 'addChild', '30px\x20bodo_amatregular', 'mobile', 'assets/button_fullscreen.png', 'name', '12247158UwCwjU', 'sin', 'assets/drawing/alphabet_s.png', 'assets/drawing/number_0_final.png', 'buttonReddit', 'naturalHeight', 'result', '#canvasHolder', 'assets/drawing/mandarin_03_final.png', 'Stage', 'firstPos', 'linkedin', 'textBaseline', 'assets/social/button_telegram.png', 'https://t.me/share/url?url=', 'off', 'assets/drawing/alphabet_t.png', 'EXIT', 'resume', 'play', 'assets/drawing/shape_04.png', 'graphics', '_shape', 'assets/sounds/path_complete.ogg', 'lastIndexOf', 'killAll', 'sort', 'abs', 'assets/button_sound_off.png', 'assets/drawing/sounds/alphabet_p.ogg', 'error', '#FFF', 'stop', 'top', 'pos', '#notSupportHolder', 'buttonSoundOn', 'framerate', 'assets/drawing/alphabet_c_final.png', 'finalImage', 'buttonSettings', 'assets/drawing/sounds/number_04.ogg', 'assets/drawing/sounds/mandarin_01.ogg', 'options', 'function', 'webkitExitFullscreen', 'scalePercent', 'SCORE:\x20[NUMBER]pts', 'devicePixelRatio', 'assets/social/button_whatsapp.png', 'completeColor', '7QHxEWI', 'volume', 'assets/button_no.png', 'type', 'cursor', 'reddit', 'textAlign', 'assets/drawing/thumb_01.png', 'progress', 'assets/button_save.png', 'fileload', '190zxMNTU', 'resultScore', 'style', 'msRequestFullscreen', 'assets/drawing/drawing_03.png', 'assets/drawing/alphabet_q_final.png', 'My\x20final\x20score\x20on\x20Learn\x20Drawing\x20Game\x20is\x20[SCORE]PTS.', '&url=', 'assets/drawing/mandarin_01_final.png', 'sound', 'lastDrawArrayIndex', 'assets/drawing/alphabet_u_final.png', 'assets/drawing/number_8.png', 'assets/drawing/alphabet_k.png', 'mistake', 'arrowObj', 'share', 'requestFullscreen', 'buttonLinkedin', 'assets/button_prev.png', 'count', '55px\x20bodo_amatregular', 'sequenceNumber', 'scale', 'removeEventListener', 'buttonShare', 'stroke', 'drawDistancePercent', 'oriX', '_arrow', 'assets/drawing/alphabet_a_final.png', 'out', 'assets/drawing/alphabet_i_final.png', 'mouseY', 'killTweensOf', 'globalToLocal', 'red', 'thumb', 'easeNone', 'assets/drawing/alphabet_h_final.png', 'letters', 'assets/drawing/sounds/alphabet_l.ogg', 'assets/drawing/number_4_final.png', 'assets/sounds/complete.ogg', 'assets/drawing/sounds/alphabet_y.ogg', 'href', 'assets/drawing/sounds/alphabet_g.ogg', 'assets/sounds/result.ogg', 'https://www.facebook.com/sharer/sharer.php?u=', 'buttonTelegram', 'assets/drawing/number_7_final.png', 'assets/social/button_reddit.png', 'defaultData', 'mozRequestFullScreen', 'msExitFullscreen', 'assets/drawing/alphabet_r.png', 'assets/drawing/number_5.png', 'textObj', '47px\x20granstander_cleanregular', 'audio', 'assets/drawing/shape_03.png', 'index', '#mainLoader\x20span', 'paused', 'assets/drawing/sounds/shape_06.ogg', 'loadManifest', 'arrayIndex', 'replace', 'fadeOut', 'assets/drawing/alphabet_e_final.png', 'To\x20install\x20the\x20game\x20just\x20upload\x20folder\x20\x27game\x27\x20to\x20your\x20server.\x20The\x20game\x20won\x27t\x20run\x20locally\x20with\x20some\x20browser\x20like\x20Chrome\x20due\x20to\x20some\x20security\x20mode.', 'assets/button_settings.png', 'assets/social/button_twitter.png', 'soundButton', 'stars', 'Numbers', 'move', 'assets/drawing/sounds/number_09.ogg', 'image', 'drawOutDistancePercent', 'animate', 'mozCancelFullScreen', 'buttonExit', '[NUMBER]', 'drawContinue', 'drag', 'assets/drawing/shape_02.png', 'assets/drawing/alphabet_g_final.png', '[SCORE]PTS\x20is\x20mine\x20new\x20highscore\x20on\x20Learn\x20Drawing\x20game!\x20Try\x20it\x20now!', 'assets/drawing/alphabet_v.png', 'Graphics', 'Text', 'letterIndex', 'logo', '137835jrdimG', 'mozFullScreenElement', 'substring', 'fillCommand', 'arrowAnimate', '116990EqIGkU', 'categoryThumb', 'removeAllEventListeners', 'https://twitter.com/intent/tweet?text=', 'assets/sounds/error.ogg', 'beginFill', 'height', 'pathIndex', '853680qFXJkR', 'target', 'assets/drawing/alphabet_x_final.png', 'Ticker', 'image_', 'Preparing...', 'assets/drawing/sounds/alphabet_z.ogg', 'alternateExtensions', 'fontSize', 'defaultVol', 'xspeed', 'assets/drawing/alphabet_n.png', 'firstDistance', 'assets/button_sound_on.png', 'pointer', 'assets/drawing/number_3_final.png', 'nextY', 'drawCon', 'assets/drawing/sounds/mandarin_02.ogg', 'tracingNum', '#fff', 'drawArray', 'number', 'log', '122628gcXRPe', 'disabledColor', 'assets/drawing/sounds/alphabet_d.ogg', 'drawRect', 'twitter', 'guideData', 'toUpperCase', 'assets/button_continue.png', 'arrowAnimateDelay', '#91181D', 'lineData', 'curX', 'split', 'assets/drawing/thumb_02.png', 'assets/drawing/alphabet_o_final.png', 'assets/item_result.png', 'stageX', 'Touch', 'drawDistance', '&title=', 'setChildIndex', 'removeAllChildren', 'buttonFacebook', 'createElement', 'assets/sounds/path.ogg', 'shareTitle', 'assets/drawing/sounds/alphabet_v.ogg', 'paths', '35px\x20granstander_cleanregular', 'cos', 'hitArea', 'mouseX', 'assets/button_next.png', 'shareOption', 'assets/button_exit.png', 'offsetY', 'assets/drawing/alphabet_c.png', 'suspended', 'round', 'random', 'assets/drawing/alphabet_w_final.png', 'curY', 'splice', 'line', 'guides', 'assets/drawing/thumb_05.png', 'complete', 'background', 'assets/drawing/alphabet_x.png', 'assets/drawing/sounds/alphabet_i.ogg', '%20', '.mobileRotate', 'push', 'alphabetic', 'assets/drawing/sounds/shape_04.ogg', 'resultTitle', 'scaleX', 'soundPathComplete', 'Alphabets', 'select', 'assets/drawing/alphabet_g.png', 'release', 'findIndex', 'loading', 'beginStroke', 'quadratic', 'RESULT', 'resumeAll', 'orientationchange', 'distance', 'assets/drawing/alphabet_n_final.png', 'letterImage', '[TOTAL]', 'buttonPlay', 'text', 'Shapes', 'alpha', 'resize', 'focus', 'itemStar', 'buttonSoundOff', 'finalImage_', 'fadeIn', 'category', 'userAgent', '#f69e00', 'assets/drawing/sounds/shape_01.ogg', 'installPlugin', 'itemResult', 'assets/drawing/alphabet_y.png', 'sequenceLetter', 'assets/drawing/number_1_final.png', 'mp3', 'assets/drawing/sounds/number_06.ogg', 'oriRotation', 'left', 'soundClick', 'sqrt', 'assets/item_game.png', 'innerWidth', 'assets/drawing/shape_05.png', 'click', '_number', '#e87f05', 'drawArrayPathIndex', 'gameCanvas', 'atan2', 'assets/drawing/thumb_04.png', 'preload', 'documentElement', 'Container', 'main', 'assets/drawing/sounds/alphabet_c.ogg', 'Are\x20you\x20sure\x20you\x0awant\x20to\x20go\x20back\x20to\x20menu?', 'tablet', 'exitFullscreen', 'each', 'buttonFullscreen', 'font', 'error\x20', '#rotateHolder', 'assets/drawing/sounds/mandarin_03.ogg', 'assets/drawing/sounds/number_03.ogg', '--\x20fps', 'file', 'buttonSave', '1ojoWnd'];
    a0_0x4b72 = function() {
        return _0x213841;
    };
    return a0_0x4b72();
}

function getDistance(_0x435bd4, _0x26927e) {
    var _0x8e1d59 = a0_0x15986e,
        _0x14f9d = _0x435bd4['x'] - _0x26927e['x'],
        _0x5c997c = _0x435bd4['y'] - _0x26927e['y'],
        _0x521171 = Math['floor'](Math[_0x8e1d59(0x277)](_0x14f9d * _0x14f9d + _0x5c997c * _0x5c997c));
    return _0x521171;
}

function getDistanceByValue(_0x528094, _0x1979a8, _0x4d8504, _0xebc589) {
    var _0x439875 = a0_0x15986e,
        _0x169b80 = _0x528094 - _0x4d8504,
        _0x67706c = _0x1979a8 - _0xebc589,
        _0x450134 = Math[_0x439875(0x30d)](Math[_0x439875(0x277)](_0x169b80 * _0x169b80 + _0x67706c * _0x67706c));
    return _0x450134;
}

function getDistancePos(_0x562bf4, _0x1826fb, _0x4d1118, _0x2d8fbd) {
    var _0xc9a4dd = a0_0x15986e,
        _0x4066e3 = _0x562bf4 - _0x4d1118,
        _0x20647b = _0x1826fb - _0x2d8fbd,
        _0x4c2d57 = Math['floor'](Math[_0xc9a4dd(0x277)](_0x4066e3 * _0x4066e3 + _0x20647b * _0x20647b));
    return _0x4c2d57;
}

function getAnglePosition(_0x1afa9a, _0x5729d2, _0x5d0608, _0x349431) {
    var _0xf7c815 = a0_0x15986e,
        _0x1e6b6a = {
            'x': 0x0,
            'y': 0x0
        };
    return _0x1e6b6a['x'] = _0x1afa9a + _0x5d0608 * Math[_0xf7c815(0x233)](_0x349431 * Math['PI'] / 0xb4), _0x1e6b6a['y'] = _0x5729d2 + _0x5d0608 * Math[_0xf7c815(0x33f)](_0x349431 * Math['PI'] / 0xb4), _0x1e6b6a;
}

function getCenterPosition(_0x4e17bb, _0x40bc8b, _0x1ac9dd, _0x149ef9) {
    var _0x3d55a0 = {
        'x': 0x0,
        'y': 0x0
    };
    return _0x3d55a0['x'] = (_0x4e17bb + _0x1ac9dd) / 0x2, _0x3d55a0['y'] = (_0x40bc8b + _0x149ef9) / 0x2, _0x3d55a0;
}

function getDirection(_0x44747f, _0x232f9e, _0x526190, _0x1ce04d) {
    var _0x5e5e99 = a0_0x15986e,
        _0x486554 = 0xb4 / Math['PI'],
        _0x489d66 = -Math[_0x5e5e99(0x280)](_0x526190 - _0x44747f, _0x1ce04d - _0x232f9e) * _0x486554;
    return _0x489d66;
}

function sortNumber(_0x2a5dda, _0x1b2017) {
    return _0x2a5dda - _0x1b2017;
}

function isEven(_0x4a3107) {
    return _0x4a3107 = Number(_0x4a3107), _0x4a3107 === 0x0 || !!(_0x4a3107 && !(_0x4a3107 % 0x2));
}

function getDegrees(_0x528e4a) {
    return Math['floor'](_0x528e4a / (Math['PI'] / 0xb4));
}

function getRadians(_0x53b605, _0x3d92a4) {
    var _0x17d1cc = a0_0x15986e,
        _0x2719d9 = Math[_0x17d1cc(0x280)](_0x3d92a4, _0x53b605);
    return _0x3d92a4 < 0x0 && (_0x2719d9 += 0x2 * Math['PI']), _0x2719d9;
}

function addCommas(_0x1496fd) {
    var _0x1be249 = a0_0x15986e;
    _0x1496fd += '', x = _0x1496fd[_0x1be249(0x222)]('.'), x1 = x[0x0], x2 = x[_0x1be249(0x29a)] > 0x1 ? '.' + x[0x1] : '';
    var _0x28fb4f = /(\d+)(\d{3})/;
    while (_0x28fb4f[_0x1be249(0x2f9)](x1)) {
        x1 = x1[_0x1be249(0x1d6)](_0x28fb4f, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

function swapArray(_0x4947f1, _0x4cf583, _0x3e2829) {
    var _0x3a93b2 = _0x4947f1[_0x4cf583];
    _0x4947f1[_0x4cf583] = _0x4947f1[_0x3e2829], _0x4947f1[_0x3e2829] = _0x3a93b2;
}
const enableDesktopAudio = !![],
    enableMobileAudio = !![],
    muteSoundOn = ![],
    muteMusicOn = ![];
var audioOn, soundMute = ![],
    musicMute = ![];
$['sound'] = {};
var soundID = 0x0,
    soundPushArr = [],
    soundLoopPushArr = [],
    musicPushArr = [];

function playSound(_0x18d25d, _0x5ea7da) {
    var _0x38a045 = a0_0x15986e;
    if (audioOn) {
        var _0x4895e7 = soundID;
        soundPushArr[_0x38a045(0x24a)](_0x4895e7), soundID++;
        var _0x2d52c2 = _0x5ea7da == undefined ? 0x1 : _0x5ea7da;
        $[_0x38a045(0x19c)][_0x4895e7] = createjs['Sound'][_0x38a045(0x351)](_0x18d25d), $[_0x38a045(0x19c)][_0x4895e7]['defaultVol'] = _0x2d52c2, setSoundVolume(_0x4895e7), $['sound'][_0x4895e7][_0x38a045(0x1f8)](), $[_0x38a045(0x19c)][_0x4895e7][_0x38a045(0x336)](_0x38a045(0x244), function() {
            var _0x1a395c = _0x38a045,
                _0x38e720 = soundPushArr[_0x1a395c(0x338)](_0x4895e7);
            _0x38e720 != -0x1 && soundPushArr[_0x1a395c(0x240)](_0x38e720, 0x1);
        });
    }
}

function playSoundLoop(_0x2d38cb) {
    var _0x1a1faa = a0_0x15986e;
    audioOn && ($['sound'][_0x2d38cb] == null && (soundLoopPushArr[_0x1a1faa(0x24a)](_0x2d38cb), $[_0x1a1faa(0x19c)][_0x2d38cb] = createjs['Sound'][_0x1a1faa(0x351)](_0x2d38cb), $[_0x1a1faa(0x19c)][_0x2d38cb][_0x1a1faa(0x207)] = 0x1, setSoundLoopVolume(_0x2d38cb), $[_0x1a1faa(0x19c)][_0x2d38cb][_0x1a1faa(0x1f8)](), $[_0x1a1faa(0x19c)][_0x2d38cb]['addEventListener']('complete', function() {
        var _0x46cc48 = _0x1a1faa;
        $[_0x46cc48(0x19c)][_0x2d38cb][_0x46cc48(0x351)]();
    })));
}

function toggleSoundLoop(_0x4702ac, _0x1f0f40) {
    var _0x36a2b7 = a0_0x15986e;
    audioOn && ($[_0x36a2b7(0x19c)][_0x4702ac] != null && (_0x1f0f40 ? $[_0x36a2b7(0x19c)][_0x4702ac][_0x36a2b7(0x351)]() : $[_0x36a2b7(0x19c)][_0x4702ac]['paused'] = !![]));
}

function stopSoundLoop(_0x2f1d39) {
    var _0x5551fe = a0_0x15986e;
    if (audioOn) {
        if ($[_0x5551fe(0x19c)][_0x2f1d39] != null) {
            $[_0x5551fe(0x19c)][_0x2f1d39]['stop'](), $[_0x5551fe(0x19c)][_0x2f1d39] = null;
            var _0x369997 = soundLoopPushArr['indexOf'](_0x2f1d39);
            _0x369997 != -0x1 && soundLoopPushArr[_0x5551fe(0x240)](_0x369997, 0x1);
        }
    }
}

function playMusicLoop(_0x2eddcc) {
    var _0x5b5a45 = a0_0x15986e;
    audioOn && ($['sound'][_0x2eddcc] == null && (musicPushArr[_0x5b5a45(0x24a)](_0x2eddcc), $[_0x5b5a45(0x19c)][_0x2eddcc] = createjs[_0x5b5a45(0x30a)][_0x5b5a45(0x351)](_0x2eddcc), $['sound'][_0x2eddcc][_0x5b5a45(0x207)] = 0x1, setMusicVolume(_0x2eddcc), $[_0x5b5a45(0x19c)][_0x2eddcc][_0x5b5a45(0x1f8)](), $['sound'][_0x2eddcc][_0x5b5a45(0x336)](_0x5b5a45(0x244), function() {
        var _0x947f77 = _0x5b5a45;
        $[_0x947f77(0x19c)][_0x2eddcc]['play']();
    })));
}

function toggleMusicLoop(_0x50c8e7, _0x3ec564) {
    var _0x571090 = a0_0x15986e;
    audioOn && ($['sound'][_0x50c8e7] != null && (_0x3ec564 ? $[_0x571090(0x19c)][_0x50c8e7][_0x571090(0x351)]() : $[_0x571090(0x19c)][_0x50c8e7][_0x571090(0x1d2)] = !![]));
}

function stopMusicLoop(_0x4a4cff) {
    var _0x368ea2 = a0_0x15986e;
    if (audioOn) {
        if ($[_0x368ea2(0x19c)][_0x4a4cff] != null) {
            $[_0x368ea2(0x19c)][_0x4a4cff][_0x368ea2(0x175)](), $[_0x368ea2(0x19c)][_0x4a4cff] = null;
            var _0x85e819 = musicPushArr[_0x368ea2(0x338)](_0x4a4cff);
            _0x85e819 != -0x1 && musicPushArr['splice'](_0x85e819, 0x1);
        }
    }
}

function a0_0x413e(_0x585e97, _0x15936a) {
    var _0x4b727c = a0_0x4b72();
    return a0_0x413e = function(_0x413ec4, _0x37a9ea) {
        _0x413ec4 = _0x413ec4 - 0x172;
        var _0x1de143 = _0x4b727c[_0x413ec4];
        return _0x1de143;
    }, a0_0x413e(_0x585e97, _0x15936a);
}

function stopSound() {
    var _0x312e3f = a0_0x15986e;
    createjs[_0x312e3f(0x30a)][_0x312e3f(0x175)]();
}

function toggleSoundInMute(_0x3a647b) {
    var _0x40bc3a = a0_0x15986e;
    if (audioOn) {
        soundMute = _0x3a647b;
        for (var _0x11e320 = 0x0; _0x11e320 < soundPushArr[_0x40bc3a(0x29a)]; _0x11e320++) {
            setSoundVolume(soundPushArr[_0x11e320]);
        }
        for (var _0x11e320 = 0x0; _0x11e320 < soundLoopPushArr[_0x40bc3a(0x29a)]; _0x11e320++) {
            setSoundLoopVolume(soundLoopPushArr[_0x11e320]);
        }
    }
}

function toggleMusicInMute(_0x245ee1) {
    var _0x23a2fa = a0_0x15986e;
    if (audioOn) {
        musicMute = _0x245ee1;
        for (var _0x158859 = 0x0; _0x158859 < musicPushArr[_0x23a2fa(0x29a)]; _0x158859++) {
            setMusicVolume(musicPushArr[_0x158859]);
        }
    }
}

function setSoundVolume(_0x29a16a, _0x1cf29d) {
    var _0x49af0d = a0_0x15986e;
    if (audioOn) {
        var _0x20e568 = soundPushArr[_0x49af0d(0x338)](_0x29a16a);
        if (_0x20e568 != -0x1) {
            var _0x364982 = _0x1cf29d == undefined ? $[_0x49af0d(0x19c)][soundPushArr[_0x20e568]][_0x49af0d(0x207)] : _0x1cf29d,
                _0x31bb98 = soundMute == ![] ? _0x364982 : 0x0;
            $[_0x49af0d(0x19c)][soundPushArr[_0x20e568]][_0x49af0d(0x189)] = _0x31bb98, $[_0x49af0d(0x19c)][soundPushArr[_0x20e568]][_0x49af0d(0x207)] = _0x364982;
        }
    }
}

function setSoundLoopVolume(_0x969a1b, _0x363252) {
    var _0x5f5c2a = a0_0x15986e;
    if (audioOn) {
        var _0x21528d = soundLoopPushArr[_0x5f5c2a(0x338)](_0x969a1b);
        if (_0x21528d != -0x1) {
            var _0x1a4956 = _0x363252 == undefined ? $['sound'][soundLoopPushArr[_0x21528d]][_0x5f5c2a(0x207)] : _0x363252,
                _0x33e2cf = soundMute == ![] ? _0x1a4956 : 0x0;
            $['sound'][soundLoopPushArr[_0x21528d]][_0x5f5c2a(0x189)] = _0x33e2cf, $[_0x5f5c2a(0x19c)][soundLoopPushArr[_0x21528d]][_0x5f5c2a(0x207)] = _0x1a4956;
        }
    }
}

function setMusicVolume(_0x3619d6, _0x2004e7) {
    var _0x123fb2 = a0_0x15986e;
    if (audioOn) {
        var _0x3280f0 = musicPushArr[_0x123fb2(0x338)](_0x3619d6);
        if (_0x3280f0 != -0x1) {
            var _0x37296b = _0x2004e7 == undefined ? $['sound'][musicPushArr[_0x3280f0]][_0x123fb2(0x207)] : _0x2004e7,
                _0x40555f = musicMute == ![] ? _0x37296b : 0x0;
            $[_0x123fb2(0x19c)][musicPushArr[_0x3280f0]][_0x123fb2(0x189)] = _0x40555f, $['sound'][musicPushArr[_0x3280f0]][_0x123fb2(0x207)] = _0x37296b;
        }
    }
}