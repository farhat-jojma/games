var a0_0x2f4ee6 = a0_0xa4a5;
(function(_0x52cbb9, _0x3c8965) {
    var _0x12c1d5 = a0_0xa4a5,
        _0x427830 = _0x52cbb9();
    while (!![]) {
        try {
            var _0xd734a = -parseInt(_0x12c1d5(0x23f)) / 0x1 * (-parseInt(_0x12c1d5(0x2c1)) / 0x2) + -parseInt(_0x12c1d5(0x190)) / 0x3 * (parseInt(_0x12c1d5(0x261)) / 0x4) + parseInt(_0x12c1d5(0x1a8)) / 0x5 * (-parseInt(_0x12c1d5(0x237)) / 0x6) + parseInt(_0x12c1d5(0x1d9)) / 0x7 + parseInt(_0x12c1d5(0x2c2)) / 0x8 + -parseInt(_0x12c1d5(0x19b)) / 0x9 * (-parseInt(_0x12c1d5(0x28a)) / 0xa) + -parseInt(_0x12c1d5(0x2c0)) / 0xb * (-parseInt(_0x12c1d5(0x210)) / 0xc);
            if (_0xd734a === _0x3c8965) break;
            else _0x427830['push'](_0x427830['shift']());
        } catch (_0x8b0b56) {
            _0x427830['push'](_0x427830['shift']());
        }
    }
}(a0_0x5a12, 0xcb8c9));
var stage, canvasW = 0x0,
    canvasH = 0x0;

function initGameCanvas(_0x184bd4, _0x48caa1) {
    var _0x56c598 = a0_0xa4a5;
    const _0x385ace = document[_0x56c598(0x1f2)](_0x56c598(0x1f6));
    _0x385ace['width'] = _0x184bd4, _0x385ace[_0x56c598(0x213)] = _0x48caa1, canvasW = _0x184bd4, canvasH = _0x48caa1, stage = new createjs[(_0x56c598(0x1b5))](_0x56c598(0x1f6), {
        'antialias': !![]
    }), createjs['Touch']['enable'](stage), stage[_0x56c598(0x243)](0x14), stage[_0x56c598(0x221)] = !![], createjs[_0x56c598(0x1cc)]['timingMode'] = createjs[_0x56c598(0x1cc)][_0x56c598(0x255)], createjs[_0x56c598(0x1cc)][_0x56c598(0x2b2)] = 0x3c, createjs[_0x56c598(0x1cc)][_0x56c598(0x1aa)](_0x56c598(0x1ae), tick);
}
var safeZoneGuide = ![],
    canvasContainer, mainContainer, gameContainer, resultContainer, exitContainer, optionsContainer, shareContainer, shareSaveContainer, socialContainer, guideline, bg, bgP, logo, logoP, itemExit, itemExitP, popTitleTxt, popDescTxt, buttonConfirm, buttonCancel, itemResult, itemResultP, buttonContinue, resultTitleTxt, resultDescTxt, buttonShare, buttonSave, resultTitleOutlineTxt, resultDescOutlineTxt, resultShareTxt, resultShareOutlineTxt, popTitleOutlineTxt, popDescOutlineTxt, buttonSettings, buttonFullscreen, buttonSoundOn, buttonSoundOff, buttonMusicOn, buttonMusicOff, buttonExit;
$[a0_0x2f4ee6(0x22e)] = {};
var selectContainer, levelContainer, editContainer, mainPointsContainer, drawingContainer, pointsContainer, buttonPrev, buttonNext, selectTitleTxt, drawingStroke;
$[a0_0x2f4ee6(0x290)] = {};

function buildGameCanvas() {
    var _0x4a9e50 = a0_0x2f4ee6;
    canvasContainer = new createjs[(_0x4a9e50(0x2af))](), mainContainer = new createjs[(_0x4a9e50(0x2af))](), gameContainer = new createjs[(_0x4a9e50(0x2af))](), exitContainer = new createjs[(_0x4a9e50(0x2af))](), resultContainer = new createjs['Container'](), shareContainer = new createjs[(_0x4a9e50(0x2af))](), shareSaveContainer = new createjs['Container'](), socialContainer = new createjs['Container'](), mainPointsContainer = new createjs[(_0x4a9e50(0x2af))](), selectContainer = new createjs[(_0x4a9e50(0x2af))](), drawingContainer = new createjs[(_0x4a9e50(0x2af))](), pointsContainer = new createjs[(_0x4a9e50(0x2af))](), levelContainer = new createjs[(_0x4a9e50(0x2af))](), editContainer = new createjs[(_0x4a9e50(0x2af))](), bg = new createjs[(_0x4a9e50(0x294))](loader[_0x4a9e50(0x1e2)](_0x4a9e50(0x22b))), logo = new createjs[(_0x4a9e50(0x294))](loader[_0x4a9e50(0x1e2)](_0x4a9e50(0x219))), buttonPrev = new createjs['Bitmap'](loader['getResult'](_0x4a9e50(0x27b))), centerReg(buttonPrev), buttonNext = new createjs[(_0x4a9e50(0x294))](loader[_0x4a9e50(0x1e2)](_0x4a9e50(0x2bb))), centerReg(buttonNext), buttonPrev['x'] = canvasW / 0x64 * 0x2e, buttonPrev['y'] = canvasH / 0x64 * 0x46, buttonNext['x'] = canvasW / 0x64 * 0x36, buttonNext['y'] = canvasH / 0x64 * 0x46, selectTitleTxt = new createjs[(_0x4a9e50(0x20e))](), selectTitleTxt[_0x4a9e50(0x198)] = _0x4a9e50(0x272), selectTitleTxt[_0x4a9e50(0x227)] = _0x4a9e50(0x1c9), selectTitleTxt[_0x4a9e50(0x1f5)] = _0x4a9e50(0x276), selectTitleTxt[_0x4a9e50(0x257)] = _0x4a9e50(0x1f3), selectTitleTxt['text'] = selectTitleText, selectTitleTxt['x'] = canvasW / 0x2, selectTitleTxt['y'] = canvasH / 0x64 * 0x1e, selectContainer[_0x4a9e50(0x203)](selectTitleTxt, buttonPrev, buttonNext);
    var _0x33cde0 = 0x1,
        _0x30f122 = 0x1,
        _0x9ca55f = canvasW / 0x64 * 0x21,
        _0x3e3667 = canvasH / 0x64 * 0x28,
        _0x3143ce = _0x9ca55f,
        _0x2bdc11 = _0x3e3667,
        _0x3b92aa = 0x6d,
        _0x1b13e6 = 0x6e;
    for (var _0x4ef3c8 = 0x0; _0x4ef3c8 < levels_arr['length']; _0x4ef3c8++) {
        $['selectStage']['icon_' + _0x4ef3c8] = new createjs['Bitmap'](loader[_0x4a9e50(0x1e2)](_0x4a9e50(0x1fb))), centerReg($[_0x4a9e50(0x290)][_0x4a9e50(0x233) + _0x4ef3c8]), createHitarea($[_0x4a9e50(0x290)]['icon_' + _0x4ef3c8]), $[_0x4a9e50(0x290)]['iconLock_' + _0x4ef3c8] = new createjs['Bitmap'](loader['getResult'](_0x4a9e50(0x1d5))), centerReg($[_0x4a9e50(0x290)][_0x4a9e50(0x247) + _0x4ef3c8]), createHitarea($[_0x4a9e50(0x290)][_0x4a9e50(0x247) + _0x4ef3c8]), $[_0x4a9e50(0x290)]['iconText_' + _0x4ef3c8] = new createjs[(_0x4a9e50(0x20e))](), $[_0x4a9e50(0x290)][_0x4a9e50(0x1d4) + _0x4ef3c8][_0x4a9e50(0x198)] = _0x4a9e50(0x1fd), $[_0x4a9e50(0x290)][_0x4a9e50(0x1d4) + _0x4ef3c8]['color'] = '#fff', $[_0x4a9e50(0x290)]['iconText_' + _0x4ef3c8][_0x4a9e50(0x1f5)] = _0x4a9e50(0x276), $['selectStage']['iconText_' + _0x4ef3c8][_0x4a9e50(0x257)] = _0x4a9e50(0x1f3), $[_0x4a9e50(0x290)][_0x4a9e50(0x1d4) + _0x4ef3c8]['text'] = _0x4ef3c8 + 0x1, $['selectStage'][_0x4a9e50(0x233) + _0x4ef3c8]['x'] = $[_0x4a9e50(0x290)]['iconLock_' + _0x4ef3c8]['x'] = $[_0x4a9e50(0x290)][_0x4a9e50(0x1d4) + _0x4ef3c8]['x'] = _0x3143ce, $['selectStage']['icon_' + _0x4ef3c8]['y'] = $['selectStage'][_0x4a9e50(0x247) + _0x4ef3c8]['y'] = _0x2bdc11, $[_0x4a9e50(0x290)][_0x4a9e50(0x1d4) + _0x4ef3c8]['y'] = _0x2bdc11 + 0xd, _0x3143ce += _0x3b92aa, _0x33cde0++, _0x33cde0 > 0x5 && (_0x33cde0 = 0x1, _0x3143ce = _0x9ca55f, _0x2bdc11 += _0x1b13e6, _0x30f122++), _0x30f122 > 0x2 && (_0x30f122 = 0x1, _0x3143ce = _0x9ca55f, _0x2bdc11 = _0x3e3667), selectContainer[_0x4a9e50(0x203)]($['selectStage'][_0x4a9e50(0x233) + _0x4ef3c8], $['selectStage']['iconText_' + _0x4ef3c8], $['selectStage']['iconLock_' + _0x4ef3c8]);
    }
    drawingStroke = new createjs['Shape'](), resultTitleTxt = new createjs[(_0x4a9e50(0x20e))](), resultTitleTxt[_0x4a9e50(0x198)] = _0x4a9e50(0x272), resultTitleTxt[_0x4a9e50(0x227)] = '#000', resultTitleTxt['textAlign'] = 'center', resultTitleTxt['textBaseline'] = _0x4a9e50(0x1f3), resultTitleTxt[_0x4a9e50(0x20c)] = _0x4a9e50(0x18e), resultTitleTxt['x'] = canvasW / 0x2, resultTitleTxt['y'] = canvasH / 0x64 * 0x2a, resultShareTxt = new createjs[(_0x4a9e50(0x20e))](), resultShareTxt[_0x4a9e50(0x198)] = '45px\x20anisa_sansregular', resultShareTxt[_0x4a9e50(0x227)] = _0x4a9e50(0x1c9), resultShareTxt[_0x4a9e50(0x1f5)] = _0x4a9e50(0x276), resultShareTxt[_0x4a9e50(0x257)] = _0x4a9e50(0x1f3), resultShareTxt['text'] = shareText, shareContainer['x'] = shareSaveContainer['x'] = canvasW / 0x2, shareContainer['y'] = shareSaveContainer['y'] = canvasH / 0x64 * 0x44, socialContainer[_0x4a9e50(0x18d)] = ![], socialContainer[_0x4a9e50(0x207)] = 0x1, shareContainer[_0x4a9e50(0x203)](resultShareTxt, socialContainer);
    if (shareSettings[_0x4a9e50(0x202)]) {
        buttonShare = new createjs['Bitmap'](loader[_0x4a9e50(0x1e2)](_0x4a9e50(0x214))), centerReg(buttonShare);
        var _0x24f823 = {
            'x': 0x0,
            'y': 0x2d,
            'spaceX': 0x41
        };
        _0x24f823['x'] = -((shareSettings['options'][_0x4a9e50(0x1a7)] - 0x1) * _0x24f823['spaceX'] / 0x2);
        for (let _0x4bf632 = 0x0; _0x4bf632 < shareSettings[_0x4a9e50(0x2c7)][_0x4a9e50(0x1a7)]; _0x4bf632++) {
            var _0x4efb41 = shareSettings['options'][_0x4bf632],
                _0x4581db = String(_0x4efb41[0x0])[_0x4a9e50(0x18f)]() + String(_0x4efb41)['slice'](0x1);
            $[_0x4a9e50(0x22e)]['button' + _0x4bf632] = new createjs[(_0x4a9e50(0x294))](loader[_0x4a9e50(0x1e2)]('button' + _0x4581db)), $[_0x4a9e50(0x22e)]['button' + _0x4bf632][_0x4a9e50(0x282)] = _0x4efb41, centerReg($[_0x4a9e50(0x22e)][_0x4a9e50(0x1bf) + _0x4bf632]), $[_0x4a9e50(0x22e)][_0x4a9e50(0x1bf) + _0x4bf632]['x'] = _0x24f823['x'], $[_0x4a9e50(0x22e)][_0x4a9e50(0x1bf) + _0x4bf632]['y'] = _0x24f823['y'], socialContainer['addChild']($['share']['button' + _0x4bf632]), _0x24f823['x'] += _0x24f823[_0x4a9e50(0x1f9)];
        }
        buttonShare['y'] = buttonShare[_0x4a9e50(0x287)]['naturalHeight'] / 0x2 + 0xa, shareContainer[_0x4a9e50(0x203)](buttonShare);
    }
    typeof toggleScoreboardSave == _0x4a9e50(0x242) && (buttonSave = new createjs['Bitmap'](loader[_0x4a9e50(0x1e2)](_0x4a9e50(0x2bf))), centerReg(buttonSave), buttonSave['y'] = buttonSave[_0x4a9e50(0x287)]['naturalHeight'] / 0x2 + 0xa, shareSaveContainer[_0x4a9e50(0x203)](buttonSave)), buttonContinue = new createjs[(_0x4a9e50(0x294))](loader['getResult'](_0x4a9e50(0x288))), centerReg(buttonContinue), createHitarea(buttonContinue), buttonContinue['x'] = canvasW / 0x2, buttonContinue['y'] = canvasH / 0x64 * 0x32, buttonFullscreen = new createjs['Bitmap'](loader[_0x4a9e50(0x1e2)](_0x4a9e50(0x284))), centerReg(buttonFullscreen), buttonSoundOn = new createjs['Bitmap'](loader[_0x4a9e50(0x1e2)]('buttonSoundOn')), centerReg(buttonSoundOn), buttonSoundOff = new createjs[(_0x4a9e50(0x294))](loader[_0x4a9e50(0x1e2)](_0x4a9e50(0x2a0))), centerReg(buttonSoundOff), buttonSoundOn['visible'] = ![], buttonExit = new createjs['Bitmap'](loader[_0x4a9e50(0x1e2)](_0x4a9e50(0x19d))), centerReg(buttonExit), buttonSettings = new createjs[(_0x4a9e50(0x294))](loader[_0x4a9e50(0x1e2)](_0x4a9e50(0x1bb))), centerReg(buttonSettings), createHitarea(buttonFullscreen), createHitarea(buttonSoundOn), createHitarea(buttonSoundOff), createHitarea(buttonExit), createHitarea(buttonSettings), optionsContainer = new createjs['Container'](), optionsContainer[_0x4a9e50(0x203)](buttonFullscreen, buttonSoundOn, buttonSoundOff, buttonExit), optionsContainer['visible'] = ![], itemExit = new createjs['Bitmap'](loader[_0x4a9e50(0x1e2)](_0x4a9e50(0x1e8))), buttonConfirm = new createjs[(_0x4a9e50(0x294))](loader[_0x4a9e50(0x1e2)]('buttonConfirm')), centerReg(buttonConfirm), buttonConfirm['x'] = canvasW / 0x64 * 0x2e, buttonConfirm['y'] = canvasH / 0x64 * 0x46, buttonCancel = new createjs[(_0x4a9e50(0x294))](loader['getResult'](_0x4a9e50(0x1d2))), centerReg(buttonCancel), buttonCancel['x'] = canvasW / 0x64 * 0x36, buttonCancel['y'] = canvasH / 0x64 * 0x46, confirmMessageTxt = new createjs[(_0x4a9e50(0x20e))](), confirmMessageTxt[_0x4a9e50(0x198)] = _0x4a9e50(0x2a6), confirmMessageTxt[_0x4a9e50(0x227)] = _0x4a9e50(0x1c9), confirmMessageTxt['textAlign'] = _0x4a9e50(0x276), confirmMessageTxt[_0x4a9e50(0x257)] = _0x4a9e50(0x1f3), confirmMessageTxt[_0x4a9e50(0x20c)] = exitMessage, confirmMessageTxt[_0x4a9e50(0x24d)] = 0x3c, confirmMessageTxt['x'] = canvasW / 0x2, confirmMessageTxt['y'] = canvasH / 0x64 * 0x2f, exitContainer['addChild'](itemExit, buttonConfirm, buttonCancel, confirmMessageTxt), exitContainer[_0x4a9e50(0x18d)] = ![], guideline = new createjs[(_0x4a9e50(0x248))](), mainContainer[_0x4a9e50(0x203)](mainPointsContainer, logo), gameContainer[_0x4a9e50(0x203)](pointsContainer, editContainer), resultContainer[_0x4a9e50(0x203)](resultTitleTxt, buttonContinue, shareContainer, shareSaveContainer), canvasContainer[_0x4a9e50(0x203)](bg, drawingStroke, drawingContainer, mainContainer, selectContainer, gameContainer, resultContainer, exitContainer, optionsContainer, buttonSettings, guideline), stage[_0x4a9e50(0x203)](canvasContainer), resizeCanvas();
}

function resizeCanvas() {
    var _0x53fc4b = a0_0x2f4ee6;
    const _0x386a4c = stageW * scalePercent,
        _0x36fdbb = stageH * scalePercent,
        _0x50829c = document[_0x53fc4b(0x1f2)]('gameCanvas');
    _0x50829c[_0x53fc4b(0x279)][_0x53fc4b(0x2a2)] = _0x386a4c + 'px', _0x50829c[_0x53fc4b(0x279)][_0x53fc4b(0x213)] = _0x36fdbb + 'px', _0x50829c[_0x53fc4b(0x279)][_0x53fc4b(0x250)] = offset['left'] / 0x2 + 'px', _0x50829c[_0x53fc4b(0x279)][_0x53fc4b(0x2c6)] = offset[_0x53fc4b(0x2c6)] / 0x2 + 'px', _0x50829c[_0x53fc4b(0x2a2)] = stageW * dpr, _0x50829c[_0x53fc4b(0x213)] = stageH * dpr;
    if (canvasContainer != undefined) {
        stage['scaleX'] = stage[_0x53fc4b(0x283)] = dpr;
        safeZoneGuide && guideline[_0x53fc4b(0x249)][_0x53fc4b(0x286)]()[_0x53fc4b(0x206)](0x2)[_0x53fc4b(0x21a)](_0x53fc4b(0x1b9))[_0x53fc4b(0x1b4)]((stageW - contentW) / 0x2, (stageH - contentH) / 0x2, contentW, contentH);
        buttonSettings['x'] = canvasW - offset['x'] - 0x3c, buttonSettings['y'] = offset['y'] + 0x2d;
        var _0x590f17 = 0x46,
            _0x5ead88 = 0x0;
        buttonSoundOn['x'] = buttonSoundOff['x'] = buttonSettings['x'], buttonSoundOn['y'] = buttonSoundOff['y'] = buttonSettings['y'] + _0x590f17, buttonSoundOn['x'] = buttonSoundOff['x'], buttonSoundOn['y'] = buttonSoundOff['y'] = buttonSettings['y'] + _0x590f17, typeof buttonMusicOn != _0x53fc4b(0x1eb) ? (buttonMusicOn['x'] = buttonMusicOff['x'] = buttonSettings['x'], buttonMusicOn['y'] = buttonMusicOff['y'] = buttonSettings['y'] + _0x590f17 * 0x2, buttonMusicOn['x'] = buttonMusicOff['x'], buttonMusicOn['y'] = buttonMusicOff['y'] = buttonSettings['y'] + _0x590f17 * 0x2, _0x5ead88 = 0x2) : _0x5ead88 = 0x1, buttonFullscreen['x'] = buttonSettings['x'], buttonFullscreen['y'] = buttonSettings['y'] + _0x590f17 * (_0x5ead88 + 0x1), curPage == 'main' || curPage == 'result' ? (buttonExit[_0x53fc4b(0x18d)] = ![], buttonFullscreen['x'] = buttonSettings['x'], buttonFullscreen['y'] = buttonSettings['y'] + _0x590f17 * (_0x5ead88 + 0x1)) : (buttonExit['visible'] = !![], buttonExit['x'] = buttonSettings['x'], buttonExit['y'] = buttonSettings['y'] + _0x590f17 * (_0x5ead88 + 0x2));
    }
}

function removeGameCanvas() {
    var _0x1ee677 = a0_0x2f4ee6;
    stage[_0x1ee677(0x240)] = !![], stage[_0x1ee677(0x205)](), stage[_0x1ee677(0x27e)](), createjs[_0x1ee677(0x1cc)]['removeEventListener'](_0x1ee677(0x1ae), tick), createjs[_0x1ee677(0x1cc)][_0x1ee677(0x1a5)](_0x1ee677(0x1ae), stage);
}

function tick(_0x2e8f05) {
    updateGame(), stage['update'](_0x2e8f05);
}

function centerReg(_0x120e75) {
    var _0x48dba5 = a0_0x2f4ee6;
    _0x120e75['regX'] = _0x120e75[_0x48dba5(0x287)][_0x48dba5(0x1a3)] / 0x2, _0x120e75[_0x48dba5(0x2c9)] = _0x120e75['image'][_0x48dba5(0x212)] / 0x2;
}

function createHitarea(_0x57258e) {
    var _0x6ff64d = a0_0x2f4ee6;
    _0x57258e[_0x6ff64d(0x1b3)] = new createjs['Shape'](new createjs[(_0x6ff64d(0x191))]()[_0x6ff64d(0x2bc)](_0x6ff64d(0x1c9))['drawRect'](0x0, 0x0, _0x57258e[_0x6ff64d(0x287)]['naturalWidth'], _0x57258e[_0x6ff64d(0x287)]['naturalHeight']));
}
const dotColors_arr = ['#26ADE4', a0_0x2f4ee6(0x2d1), a0_0x2f4ee6(0x269), a0_0x2f4ee6(0x2a8)],
    blockColors_arr = [a0_0x2f4ee6(0x1c9)],
    lineColor = a0_0x2f4ee6(0x1c9),
    lineMinimumStroke = 0x8,
    lineMaxStroke = 0x1e,
    lineClearTime = 0x5dc,
    lineStayTime = 0x1f4,
    selectTitleText = a0_0x2f4ee6(0x20f),
    exitMessage = a0_0x2f4ee6(0x19a),
    resultCompleteText = 'LEVEL\x20[NUMBER]\x20COMPLETE',
    shareText = 'SHARE\x20YOUR\x20SCORE',
    shareSettings = {
        'enable': !![],
        'options': [a0_0x2f4ee6(0x295), a0_0x2f4ee6(0x298), a0_0x2f4ee6(0x229), a0_0x2f4ee6(0x1af), a0_0x2f4ee6(0x1bd), 'linkedin'],
        'shareTitle': a0_0x2f4ee6(0x1d1),
        'shareText': a0_0x2f4ee6(0x285),
        'customScore': !![],
        'gtag': !![]
    },
    gameData = {
        'paused': !![],
        'ready': ![],
        'levelNum': 0x0,
        'points_arr': [],
        'obstacles_arr': [],
        'collectPoints': 0x0,
        'stageLevelCompleted': 0x0,
        'stageComplete': ![],
        'stageUnlockNum': -0x1
    },
    strokeData = {
        'size': 0x0
    },
    moveData = {
        'x': 0x0,
        'y': 0x0,
        'time': 0x0,
        'pressed': ![],
        'pressReady': ![],
        'speed': 0x0
    },
    drawData = {
        'enable': !![],
        'completed': ![],
        'recordDate': null,
        'record': ![],
        'record_arr': [],
        'date': null,
        'clearDate': null,
        'lines': [],
        'lineNum': 0x0,
        'count': 0x0,
        'gapX': 0x0,
        'gapY': 0x0,
        'drawTime': 0x0,
        'hitCollision': ![],
        'volume': 0x0,
        'volumeMode': ![]
    };
$['editor'] = {
    'enable': ![]
};
const cookieName = a0_0x2f4ee6(0x20a);

function retrieveLevelData() {
    var _0xee9f1c = a0_0x2f4ee6,
        _0x2dbaf1 = Cookies[_0xee9f1c(0x1e0)](cookieName);
    if (_0x2dbaf1 != undefined) {
        gameData[_0xee9f1c(0x244)] = Number(_0x2dbaf1);
        for (var _0x1183a3 = 0x1; _0x1183a3 <= selectData[_0xee9f1c(0x25f)]; _0x1183a3++) {
            var _0x4a9080 = (_0x1183a3 - 0x1) * selectData[_0xee9f1c(0x26b)],
                _0xb70f59 = _0x4a9080 + (selectData[_0xee9f1c(0x26b)] - 0x1);
            gameData['stageLevelCompleted'] >= _0x4a9080 && gameData[_0xee9f1c(0x244)] <= _0xb70f59 && (selectData[_0xee9f1c(0x20d)] = _0x1183a3);
        }
    }
}

function saveLevelData() {
    var _0x2ba29d = a0_0x2f4ee6;
    Number(gameData[_0x2ba29d(0x2b1)]) + 0x1 > gameData['stageLevelCompleted'] && (gameData[_0x2ba29d(0x244)] = Number(gameData[_0x2ba29d(0x2b1)]) + 0x1, gameData[_0x2ba29d(0x21d)] = gameData['stageLevelCompleted'], gameData[_0x2ba29d(0x244)] >= levels_arr['length'] && (gameData[_0x2ba29d(0x21d)] = -0x1), Cookies['set'](cookieName, gameData[_0x2ba29d(0x244)], {
        'expires': 0x168
    }));
}

function buildGameButton() {
    var _0x1d212d = a0_0x2f4ee6;
    $(window)[_0x1d212d(0x26f)](function() {
        !buttonSoundOn['visible'] && toggleSoundInMute(![]), typeof buttonMusicOn != 'undefined' && (!buttonMusicOn['visible'] && toggleMusicInMute(![]));
    }), $(window)[_0x1d212d(0x1ea)](function() {
        var _0xd547d3 = _0x1d212d;
        !buttonSoundOn['visible'] && toggleSoundInMute(!![]), typeof buttonMusicOn != _0xd547d3(0x1eb) && (!buttonMusicOn['visible'] && toggleMusicInMute(!![]));
    });
    audioOn && (muteSoundOn && toggleSoundMute(!![]), muteMusicOn && toggleMusicMute(!![]));
    buttonContinue[_0x1d212d(0x2c8)] = _0x1d212d(0x28b), buttonContinue['addEventListener'](_0x1d212d(0x24b), function(_0x36d380) {
        var _0x3b6f4f = _0x1d212d;
        playSound(_0x3b6f4f(0x211)), goPage(_0x3b6f4f(0x2a9));
    });
    if (shareSettings[_0x1d212d(0x202)]) {
        buttonShare['cursor'] = _0x1d212d(0x28b), buttonShare[_0x1d212d(0x1aa)]('click', function(_0x296ae5) {
            var _0x3de7d2 = _0x1d212d;
            playSound(_0x3de7d2(0x253)), toggleSocialShare(!![]);
        });
        for (let _0xc8d7a7 = 0x0; _0xc8d7a7 < shareSettings[_0x1d212d(0x2c7)][_0x1d212d(0x1a7)]; _0xc8d7a7++) {
            $[_0x1d212d(0x22e)][_0x1d212d(0x1bf) + _0xc8d7a7]['cursor'] = _0x1d212d(0x28b), $[_0x1d212d(0x22e)][_0x1d212d(0x1bf) + _0xc8d7a7]['addEventListener'](_0x1d212d(0x24b), function(_0x1e6ae8) {
                var _0xb65cd6 = _0x1d212d;
                shareLinks(_0x1e6ae8[_0xb65cd6(0x1ce)][_0xb65cd6(0x282)], gameData[_0xb65cd6(0x2b1)] + 0x1);
            });
        }
    }
    buttonSoundOff[_0x1d212d(0x2c8)] = _0x1d212d(0x28b), buttonSoundOff['addEventListener'](_0x1d212d(0x24b), function(_0x366187) {
        toggleSoundMute(!![]);
    }), buttonSoundOn[_0x1d212d(0x2c8)] = _0x1d212d(0x28b), buttonSoundOn[_0x1d212d(0x1aa)](_0x1d212d(0x24b), function(_0x4a595d) {
        toggleSoundMute(![]);
    }), typeof buttonMusicOff != 'undefined' && (buttonMusicOff[_0x1d212d(0x2c8)] = _0x1d212d(0x28b), buttonMusicOff[_0x1d212d(0x1aa)](_0x1d212d(0x24b), function(_0x99291a) {
        toggleMusicMute(!![]);
    })), typeof buttonMusicOn != _0x1d212d(0x1eb) && (buttonMusicOn[_0x1d212d(0x2c8)] = _0x1d212d(0x28b), buttonMusicOn[_0x1d212d(0x1aa)](_0x1d212d(0x24b), function(_0x138c91) {
        toggleMusicMute(![]);
    })), buttonFullscreen['cursor'] = _0x1d212d(0x28b), buttonFullscreen[_0x1d212d(0x1aa)](_0x1d212d(0x24b), function(_0x3a2311) {
        toggleFullScreen();
    }), buttonExit[_0x1d212d(0x2c8)] = _0x1d212d(0x28b), buttonExit[_0x1d212d(0x1aa)](_0x1d212d(0x24b), function(_0x44ce90) {
        var _0x561eab = _0x1d212d;
        !$[_0x561eab(0x1c8)][_0x561eab(0x202)] && togglePop(!![]);
    }), buttonSettings[_0x1d212d(0x2c8)] = _0x1d212d(0x28b), buttonSettings['addEventListener']('click', function(_0x2933fd) {
        toggleOptions();
    }), buttonConfirm[_0x1d212d(0x2c8)] = _0x1d212d(0x28b), buttonConfirm[_0x1d212d(0x1aa)](_0x1d212d(0x24b), function(_0x8c00c6) {
        var _0x17d3d8 = _0x1d212d;
        togglePop(![]), stopGame(), goPage(_0x17d3d8(0x1ed));
    }), buttonCancel[_0x1d212d(0x2c8)] = _0x1d212d(0x28b), buttonCancel[_0x1d212d(0x1aa)](_0x1d212d(0x24b), function(_0x49d9cf) {
        togglePop(![]);
    });
}

function appendFocusFrame() {
    var _0x5351fc = a0_0x2f4ee6;
    $(_0x5351fc(0x2a7))[_0x5351fc(0x1dc)]('<div\x20id=\x22focus\x22\x20style=\x22position:absolute;\x20width:100%;\x20height:100%;\x20z-index:1000;\x22></div'), $(_0x5351fc(0x267))[_0x5351fc(0x24b)](function() {
        var _0x63a25b = _0x5351fc;
        $(_0x63a25b(0x267))[_0x63a25b(0x192)]();
    });
}
var selectData = {
    'page': 0x0,
    'total': 0x1,
    'max': 0xa
};

function buildSelectLevel() {
    var _0x570360 = a0_0x2f4ee6;
    selectData[_0x570360(0x25f)] = levels_arr[_0x570360(0x1a7)] / selectData[_0x570360(0x26b)];
    String(selectData[_0x570360(0x25f)])[_0x570360(0x29b)]('.') > -0x1 && (selectData[_0x570360(0x25f)] = Math['floor'](selectData[_0x570360(0x25f)]) + 0x1);
    toggleSelect(![]), buttonPrev[_0x570360(0x2c8)] = _0x570360(0x28b), buttonPrev['addEventListener']('mousedown', function(_0x4d56a0) {
        var _0x29b2e7 = _0x570360;
        playSound(_0x29b2e7(0x289)), toggleSelect(![]);
    }), buttonNext[_0x570360(0x2c8)] = _0x570360(0x28b), buttonNext[_0x570360(0x1aa)](_0x570360(0x22f), function(_0x20572a) {
        var _0x4a6ecd = _0x570360;
        playSound(_0x4a6ecd(0x289)), toggleSelect(!![]);
    });
    for (var _0x2b8248 = 0x0; _0x2b8248 < levels_arr[_0x570360(0x1a7)]; _0x2b8248++) {
        $['selectStage'][_0x570360(0x233) + _0x2b8248][_0x570360(0x1e7)] = _0x2b8248, $[_0x570360(0x290)][_0x570360(0x233) + _0x2b8248][_0x570360(0x2c8)] = 'pointer', $[_0x570360(0x290)][_0x570360(0x233) + _0x2b8248]['addEventListener']('mousedown', function(_0x122808) {
            var _0x15e781 = _0x570360;
            Number(_0x122808[_0x15e781(0x1ce)]['name']) <= gameData['stageLevelCompleted'] && (playSound(_0x15e781(0x211)), gameData[_0x15e781(0x2b1)] = Number(_0x122808[_0x15e781(0x1ce)]['name']), goPage(_0x15e781(0x25e)));
        });
    }
}

function toggleSelect(_0x100869) {
    var _0x25b850 = a0_0x2f4ee6;
    _0x100869 ? (selectData['page']++, selectData[_0x25b850(0x20d)] = selectData[_0x25b850(0x20d)] > selectData[_0x25b850(0x25f)] ? selectData['total'] : selectData['page']) : (selectData[_0x25b850(0x20d)]--, selectData[_0x25b850(0x20d)] = selectData['page'] < 0x1 ? 0x1 : selectData[_0x25b850(0x20d)]), selectPage(selectData['page']);
}

function selectPage(_0x3d7c25) {
    var _0x28ae92 = a0_0x2f4ee6;
    selectData[_0x28ae92(0x20d)] = _0x3d7c25;
    var _0x5310de = (selectData['page'] - 0x1) * selectData['max'],
        _0x50293e = _0x5310de + (selectData['max'] - 0x1);
    for (var _0x1a32c8 = 0x0; _0x1a32c8 < levels_arr[_0x28ae92(0x1a7)]; _0x1a32c8++) {
        _0x1a32c8 >= _0x5310de && _0x1a32c8 <= _0x50293e ? ($[_0x28ae92(0x290)][_0x28ae92(0x233) + _0x1a32c8]['visible'] = !![], $[_0x28ae92(0x290)][_0x28ae92(0x247) + _0x1a32c8][_0x28ae92(0x18d)] = !![], $[_0x28ae92(0x290)][_0x28ae92(0x1d4) + _0x1a32c8]['visible'] = ![], _0x1a32c8 <= gameData[_0x28ae92(0x244)] && (gameData[_0x28ae92(0x21d)] == _0x1a32c8 ? (gameData[_0x28ae92(0x21d)] = -0x1, $['selectStage'][_0x28ae92(0x1d4) + _0x1a32c8][_0x28ae92(0x2cb)] = 0x0, $[_0x28ae92(0x290)][_0x28ae92(0x1d4) + _0x1a32c8][_0x28ae92(0x18d)] = !![], TweenMax['to']($[_0x28ae92(0x290)][_0x28ae92(0x247) + _0x1a32c8], 0x0, {
            'delay': 0.5,
            'overwrite': !![],
            'onComplete': unlockTween,
            'onCompleteParams': [_0x1a32c8]
        })) : ($[_0x28ae92(0x290)]['iconText_' + _0x1a32c8]['visible'] = !![], $[_0x28ae92(0x290)][_0x28ae92(0x247) + _0x1a32c8][_0x28ae92(0x18d)] = ![]))) : ($[_0x28ae92(0x290)][_0x28ae92(0x247) + _0x1a32c8][_0x28ae92(0x18d)] = ![], $[_0x28ae92(0x290)]['icon_' + _0x1a32c8][_0x28ae92(0x18d)] = ![], $[_0x28ae92(0x290)][_0x28ae92(0x1d4) + _0x1a32c8][_0x28ae92(0x18d)] = ![]);
    }
    if (gameData[_0x28ae92(0x21d)] > 0x0) {
        toggleSelect(!![]);
        return;
    }
    selectData[_0x28ae92(0x20d)] == 0x1 ? buttonPrev[_0x28ae92(0x18d)] = ![] : buttonPrev[_0x28ae92(0x18d)] = !![], selectData[_0x28ae92(0x20d)] == selectData[_0x28ae92(0x25f)] || selectData['total'] == 0x1 ? buttonNext[_0x28ae92(0x18d)] = ![] : buttonNext[_0x28ae92(0x18d)] = !![];
}

function unlockTween(_0x31f901) {
    var _0x732939 = a0_0x2f4ee6;
    playSound(_0x732939(0x1be)), TweenMax['to']($[_0x732939(0x290)][_0x732939(0x1d4) + _0x31f901], 0.5, {
        'alpha': 0x1,
        'overwrite': !![]
    }), TweenMax['to']($[_0x732939(0x290)][_0x732939(0x247) + _0x31f901], 0.5, {
        'alpha': 0x0,
        'overwrite': !![],
        'onComplete': unlockTweenComplete,
        'onCompleteParams': [_0x31f901]
    });
}

function unlockTweenComplete(_0x56098c) {
    var _0x3e917e = a0_0x2f4ee6;
    $[_0x3e917e(0x290)][_0x3e917e(0x1d4) + _0x56098c][_0x3e917e(0x18d)] = !![], $[_0x3e917e(0x290)][_0x3e917e(0x247) + _0x56098c][_0x3e917e(0x18d)] = ![];
}

function toggleSocialShare(_0x5ad43e) {
    var _0x3158a2 = a0_0x2f4ee6;
    if (!shareSettings['enable']) return;
    buttonShare[_0x3158a2(0x18d)] = _0x5ad43e == !![] ? ![] : !![], shareSaveContainer[_0x3158a2(0x18d)] = _0x5ad43e == !![] ? ![] : !![], socialContainer['visible'] = _0x5ad43e, _0x5ad43e && (typeof buttonSave !== _0x3158a2(0x1eb) && TweenMax['to'](buttonShare, 0x3, {
        'overwrite': !![],
        'onComplete': toggleSocialShare,
        'onCompleteParams': [![]]
    }));
}

function positionShareButtons() {
    var _0x5a1a23 = a0_0x2f4ee6;
    if (!shareSettings[_0x5a1a23(0x202)]) return;
    typeof buttonShare !== _0x5a1a23(0x1eb) && (typeof buttonSave !== _0x5a1a23(0x1eb) && (buttonSave[_0x5a1a23(0x18d)] ? (buttonShare['x'] = -(buttonShare[_0x5a1a23(0x287)][_0x5a1a23(0x1a3)] / 0x2 + 0x5), buttonSave['x'] = buttonShare[_0x5a1a23(0x287)][_0x5a1a23(0x1a3)] / 0x2 + 0x5) : buttonShare['x'] = 0x0));
}
var curPage = '';

function goPage(_0x3f9980) {
    var _0x501286 = a0_0x2f4ee6;
    curPage = _0x3f9980, mainContainer[_0x501286(0x18d)] = ![], selectContainer[_0x501286(0x18d)] = ![], gameContainer['visible'] = ![], resultContainer['visible'] = ![], togglePop(![]), toggleOptions(![]), stopSoundLoop(_0x501286(0x196)), stopSoundLoop('musicGame');
    var _0x41a827 = null;
    switch (_0x3f9980) {
        case _0x501286(0x1ed):
            _0x41a827 = mainContainer, createMainPoints();
            break;
        case 'select':
            _0x41a827 = selectContainer, gameData[_0x501286(0x1fe)] = [], gameData[_0x501286(0x2ce)] = [], selectPage(selectData['page']);
            break;
        case _0x501286(0x25e):
            _0x41a827 = gameContainer;
            !$['editor'][_0x501286(0x202)] && startGame();
            break;
        case _0x501286(0x1ad):
            _0x41a827 = resultContainer, toggleSocialShare(![]), resultTitleTxt['text'] = resultCompleteText[_0x501286(0x2b9)](_0x501286(0x201), gameData[_0x501286(0x2b1)] + 0x1), saveLevelData(), stopGame(), saveGame(gameData[_0x501286(0x2b1)] + 0x1);
            break;
    }
    _0x41a827 != null && (_0x41a827[_0x501286(0x18d)] = !![], _0x41a827[_0x501286(0x2cb)] = 0x0, TweenMax['to'](_0x41a827, 0.5, {
        'alpha': 0x1,
        'overwrite': !![]
    })), resizeCanvas();
}

function togglePop(_0x57b82c) {
    var _0x56f4a8 = a0_0x2f4ee6;
    exitContainer[_0x56f4a8(0x18d)] = _0x57b82c, _0x57b82c ? (TweenMax['pauseAll'](!![], !![]), gameData[_0x56f4a8(0x1c4)] = !![]) : (TweenMax[_0x56f4a8(0x25b)](!![], !![]), gameData[_0x56f4a8(0x1c4)] = ![]);
}

function startGame() {
    var _0x5b4c05 = a0_0x2f4ee6;
    resetDrawing(), gameData[_0x5b4c05(0x1c4)] = ![], gameData[_0x5b4c05(0x1bc)] = ![], gameData['stageComplete'] = ![], gameData['collectPoints'] = 0x0, gameData[_0x5b4c05(0x1fe)] = [], gameData['obstacles_arr'] = [], createPoints();
}

function stopGame() {
    var _0xa1de1c = a0_0x2f4ee6;
    gameData[_0xa1de1c(0x1bc)] = ![], gameData[_0xa1de1c(0x1c4)] = !![], TweenMax[_0xa1de1c(0x271)](), resetDrawing(), pointsContainer['removeAllChildren']();
}

function saveGame(_0x48480f) {
    var _0x4758b2 = a0_0x2f4ee6;
    typeof toggleScoreboardSave == _0x4758b2(0x242) && ($[_0x4758b2(0x1c2)][_0x4758b2(0x1f7)] = _0x48480f, typeof type != _0x4758b2(0x1eb) && ($[_0x4758b2(0x1c2)][_0x4758b2(0x220)] = type), toggleScoreboardSave(!![]));
}

function updateGame() {
    var _0x5a466c = a0_0x2f4ee6,
        _0x36fc85 = new Date();
    moveData[_0x5a466c(0x245)] && (moveData[_0x5a466c(0x1fc)] = _0x36fc85[_0x5a466c(0x232)]() - drawData['date']['getTime']());
    if (drawData[_0x5a466c(0x1c5)] != null) {
        var _0x49b907 = _0x36fc85[_0x5a466c(0x232)]() - drawData[_0x5a466c(0x1c5)]['getTime']();
        _0x49b907 > lineClearTime && startClearDrawing();
    }
    if (drawData[_0x5a466c(0x20b)]) {
        drawData[_0x5a466c(0x2bd)] == null && (drawData[_0x5a466c(0x2bd)] = new Date());
        var _0x49b907 = _0x36fc85[_0x5a466c(0x232)]() - drawData[_0x5a466c(0x2bd)]['getTime']();
        drawData['linesCount'] < drawData[_0x5a466c(0x278)][_0x5a466c(0x1a7)] && (_0x49b907 > drawData[_0x5a466c(0x278)][drawData[_0x5a466c(0x262)]]['time'] && (drawData[_0x5a466c(0x262)]++, drawData[_0x5a466c(0x262)] = drawData[_0x5a466c(0x262)] > drawData[_0x5a466c(0x278)][_0x5a466c(0x1a7)] ? drawData['lines'][_0x5a466c(0x1a7)] : drawData[_0x5a466c(0x262)], updateLine(), drawData[_0x5a466c(0x262)] == drawData[_0x5a466c(0x278)][_0x5a466c(0x1a7)] - 0x1 && !drawData[_0x5a466c(0x1d7)] && createNextRecord()));
    }
    updateRecordedDrawing();
    for (var _0x30095d = 0x0; _0x30095d < drawData[_0x5a466c(0x2b6)][_0x5a466c(0x1a7)]; _0x30095d++) {
        var _0x49b907 = _0x36fc85['getTime']() - drawData[_0x5a466c(0x2b6)][_0x30095d][_0x5a466c(0x1a4)][_0x5a466c(0x232)]();
        _0x49b907 > drawData['drawTime'] && (!drawData[_0x5a466c(0x2b6)][_0x30095d][_0x5a466c(0x2ac)] && (drawData[_0x5a466c(0x2b6)][_0x30095d][_0x5a466c(0x2ac)] = !![])), drawData[_0x5a466c(0x2b6)][_0x30095d][_0x5a466c(0x1c3)] < drawData[_0x5a466c(0x278)][_0x5a466c(0x1a7)] && (_0x49b907 > drawData[_0x5a466c(0x278)][drawData[_0x5a466c(0x2b6)][_0x30095d]['firstNum']][_0x5a466c(0x1fc)] && (drawData[_0x5a466c(0x2b6)][_0x30095d][_0x5a466c(0x1df)]++, drawData[_0x5a466c(0x2b6)][_0x30095d][_0x5a466c(0x1df)] >= drawData[_0x5a466c(0x28e)] && drawData[_0x5a466c(0x2b6)][_0x30095d][_0x5a466c(0x1c3)]++, drawData['record_arr'][_0x30095d][_0x5a466c(0x1c3)] >= drawData[_0x5a466c(0x278)][_0x5a466c(0x1a7)] && (!drawData[_0x5a466c(0x1d7)] && createNextRecord(), removeRecord(_0x30095d))));
    }
    TweenMax['to'](strokeData, 0.5, {
        'size': moveData[_0x5a466c(0x226)],
        'overwrite': !![]
    });
    if (drawData[_0x5a466c(0x262)] < drawData[_0x5a466c(0x278)][_0x5a466c(0x1a7)] && drawData['lines']['length'] > 0x0) setWindVolume(!![]);
    else drawData[_0x5a466c(0x2b6)][_0x5a466c(0x1a7)] > 0x0 ? setWindVolume(!![]) : setWindVolume(![]);
    checkWindMode();
}

function startClearDrawing() {
    var _0x358d80 = a0_0x2f4ee6;
    drawData[_0x358d80(0x1c5)] = null, drawData[_0x358d80(0x20b)] = !![], drawData[_0x358d80(0x1d8)] && !drawData[_0x358d80(0x1d7)] && createNextRecord();
}

function setupStageEvents() {
    var _0xf1f1f7 = a0_0x2f4ee6;
    stage['on'](_0xf1f1f7(0x254), function(_0x41d4b4) {
        var _0x23af1c = _0xf1f1f7;
        if (!drawData[_0x23af1c(0x202)]) return;
        moveData[_0x23af1c(0x24e)] = _0x41d4b4[_0x23af1c(0x23c)] / dpr, moveData['oldY'] = _0x41d4b4[_0x23af1c(0x1db)] / dpr, moveData['pressReady'] = !![];
    }), stage['on'](_0xf1f1f7(0x1f8), function(_0x4f1bc0) {
        var _0x2d69a9 = _0xf1f1f7;
        if (!drawData[_0x2d69a9(0x202)]) return;
        moveData[_0x2d69a9(0x218)] && startDrawing();
        moveData[_0x2d69a9(0x245)] && !drawData[_0x2d69a9(0x1d7)] && (captureLinePoint(moveData[_0x2d69a9(0x24e)], moveData[_0x2d69a9(0x291)], _0x4f1bc0[_0x2d69a9(0x23c)] / dpr, _0x4f1bc0[_0x2d69a9(0x1db)] / dpr), updateLine());
        var _0x59a9fb = getDistanceByValue(moveData[_0x2d69a9(0x24e)], moveData[_0x2d69a9(0x291)], _0x4f1bc0[_0x2d69a9(0x23c)] / dpr, _0x4f1bc0[_0x2d69a9(0x1db)] / dpr);
        moveData[_0x2d69a9(0x226)] = _0x59a9fb, moveData[_0x2d69a9(0x226)] = moveData[_0x2d69a9(0x226)] < lineMinimumStroke ? lineMinimumStroke : moveData[_0x2d69a9(0x226)], moveData[_0x2d69a9(0x226)] = moveData['speed'] > lineMaxStroke ? lineMaxStroke : moveData[_0x2d69a9(0x226)], moveData[_0x2d69a9(0x24e)] = _0x4f1bc0[_0x2d69a9(0x23c)] / dpr, moveData['oldY'] = _0x4f1bc0['stageY'] / dpr;
    }), stage['on'](_0xf1f1f7(0x23d), function(_0x267a8a) {
        if (!drawData['enable']) return;
        stopDrawing();
    });
}

function stopDrawing() {
    var _0x488c65 = a0_0x2f4ee6;
    if (moveData[_0x488c65(0x245)]) {
        if (drawData['lines']['length'] == 0x0) {} else drawComplete(), startClearDrawing();
    }
    moveData['pressed'] = ![], moveData[_0x488c65(0x218)] = ![];
}

function resetDrawing() {
    var _0x504230 = a0_0x2f4ee6;
    drawData[_0x504230(0x2b6)] = [], drawingStroke[_0x504230(0x249)]['clear'](), drawingContainer['removeAllChildren'](), drawData[_0x504230(0x20b)] = ![], drawData[_0x504230(0x262)] = 0x0, drawData[_0x504230(0x278)] = [], drawData[_0x504230(0x2b0)] = 0x0, drawData[_0x504230(0x1d8)] = ![], drawData[_0x504230(0x1d7)] = ![], resetPoints(![]), stopDrawing();
}

function resetPoints(_0x53640a) {
    var _0x2d00fc = a0_0x2f4ee6;
    if (!gameData[_0x2d00fc(0x236)]) {
        gameData[_0x2d00fc(0x2c3)] = 0x0;
        for (var _0x1d673f = 0x0; _0x1d673f < gameData['points_arr']['length']; _0x1d673f++) {
            !gameData[_0x2d00fc(0x1fe)][_0x1d673f][_0x2d00fc(0x208)][_0x2d00fc(0x228)] && _0x53640a ? (gameData[_0x2d00fc(0x1fe)][_0x1d673f]['obj'][_0x2d00fc(0x23e)] = gameData[_0x2d00fc(0x1fe)][_0x1d673f][_0x2d00fc(0x208)]['scaleY'] = 0.5, gameData[_0x2d00fc(0x1fe)][_0x1d673f][_0x2d00fc(0x208)][_0x2d00fc(0x2cb)] = 0x0, gameData['points_arr'][_0x1d673f][_0x2d00fc(0x208)][_0x2d00fc(0x216)] = !![], TweenMax['to'](gameData[_0x2d00fc(0x1fe)][_0x1d673f][_0x2d00fc(0x208)], 0.5, {
                'scaleX': 0x1,
                'scaleY': 0x1,
                'alpha': 0x1,
                'overwrite': !![],
                'onComplete': resetTween,
                'onCompleteParams': [_0x1d673f]
            })) : _0x53640a ? gameData[_0x2d00fc(0x1fe)][_0x1d673f][_0x2d00fc(0x208)][_0x2d00fc(0x216)] == ![] && (TweenMax[_0x2d00fc(0x1f4)](gameData[_0x2d00fc(0x1fe)][_0x1d673f][_0x2d00fc(0x208)]), gameData[_0x2d00fc(0x1fe)][_0x1d673f]['obj'][_0x2d00fc(0x2cb)] = 0x1, gameData[_0x2d00fc(0x1fe)][_0x1d673f][_0x2d00fc(0x208)][_0x2d00fc(0x23e)] = gameData['points_arr'][_0x1d673f][_0x2d00fc(0x208)][_0x2d00fc(0x283)] = 0x1) : (TweenMax[_0x2d00fc(0x1f4)](gameData[_0x2d00fc(0x1fe)][_0x1d673f][_0x2d00fc(0x208)]), gameData[_0x2d00fc(0x1fe)][_0x1d673f][_0x2d00fc(0x208)][_0x2d00fc(0x216)] = ![], gameData[_0x2d00fc(0x1fe)][_0x1d673f]['obj']['alpha'] = 0x1, gameData['points_arr'][_0x1d673f]['obj'][_0x2d00fc(0x23e)] = gameData[_0x2d00fc(0x1fe)][_0x1d673f][_0x2d00fc(0x208)][_0x2d00fc(0x283)] = 0x1), gameData['points_arr'][_0x1d673f][_0x2d00fc(0x208)][_0x2d00fc(0x228)] = !![];
        }
    }
}

function resetTween(_0x43cf9d) {
    var _0x57e0de = a0_0x2f4ee6;
    gameData[_0x57e0de(0x1fe)][_0x43cf9d]['obj'][_0x57e0de(0x216)] = ![];
}

function startDrawing() {
    var _0xd86673 = a0_0x2f4ee6;
    resetDrawing(), drawData[_0xd86673(0x1c5)] = new Date(), drawData[_0xd86673(0x1a4)] = new Date(), moveData['time'] = 0x0, moveData[_0xd86673(0x226)] = 0x2, moveData[_0xd86673(0x245)] = !![], moveData['pressReady'] = ![];
}

function captureLinePoint(_0x5e2dc5, _0x32e43e, _0x25a766, _0x18da31) {
    var _0x393de5 = a0_0x2f4ee6,
        _0x2456b0 = lineStayTime;
    drawData[_0x393de5(0x278)][_0x393de5(0x1a7)] == 0x0 && (_0x2456b0 = 0x64), drawData[_0x393de5(0x278)]['push']({
        'mtX': _0x5e2dc5,
        'mtY': _0x32e43e,
        'ltX': _0x25a766,
        'ltY': _0x18da31,
        'time': moveData[_0x393de5(0x1fc)] + _0x2456b0,
        'size': strokeData['size']
    });
}

function updateLine() {
    var _0x56b537 = a0_0x2f4ee6;
    drawingStroke[_0x56b537(0x249)]['clear']();
    for (var _0x80e4e9 = drawData['linesCount']; _0x80e4e9 < drawData['lines']['length']; _0x80e4e9++) {
        checkObstacleCollision(drawData[_0x56b537(0x278)][_0x80e4e9][_0x56b537(0x23a)], drawData[_0x56b537(0x278)][_0x80e4e9]['mtX'], drawData[_0x56b537(0x278)][_0x80e4e9][_0x56b537(0x1ac)]) ? !drawData[_0x56b537(0x1d7)] && (drawData['hitCollision'] = !![], playSound(_0x56b537(0x1ca)), resetPoints(!![])) : (drawingStroke[_0x56b537(0x249)][_0x56b537(0x21a)](lineColor)[_0x56b537(0x206)](drawData[_0x56b537(0x278)][_0x80e4e9][_0x56b537(0x23a)], 'round')[_0x56b537(0x1da)](drawData[_0x56b537(0x278)][_0x80e4e9][_0x56b537(0x1fa)], drawData[_0x56b537(0x278)][_0x80e4e9][_0x56b537(0x1ac)])['lineTo'](drawData['lines'][_0x80e4e9]['ltX'], drawData['lines'][_0x80e4e9][_0x56b537(0x1ef)]), !drawData[_0x56b537(0x1d7)] && checkPointCollision(drawData[_0x56b537(0x278)][_0x80e4e9][_0x56b537(0x23a)], drawData[_0x56b537(0x278)][_0x80e4e9][_0x56b537(0x1fa)], drawData[_0x56b537(0x278)][_0x80e4e9][_0x56b537(0x1ac)], ![]));
    }
}

function drawComplete() {
    var _0xbb6088 = a0_0x2f4ee6;
    drawData[_0xbb6088(0x1d8)] = !![], drawData[_0xbb6088(0x28e)] = drawData[_0xbb6088(0x278)][_0xbb6088(0x1a7)] - drawData['linesCount'], drawData[_0xbb6088(0x19e)] = drawData[_0xbb6088(0x278)][drawData[_0xbb6088(0x278)]['length'] - 0x1][_0xbb6088(0x209)] - drawData['lines'][0x0][_0xbb6088(0x1fa)], drawData[_0xbb6088(0x1b0)] = drawData[_0xbb6088(0x278)][drawData['lines'][_0xbb6088(0x1a7)] - 0x1][_0xbb6088(0x1ef)] - drawData['lines'][0x0][_0xbb6088(0x1ac)], drawData[_0xbb6088(0x292)] = moveData[_0xbb6088(0x1fc)];
}

function createNextRecord() {
    var _0x5039ce = a0_0x2f4ee6;
    drawData[_0x5039ce(0x2b0)]++;
    if (checkWithinStage()) {
        var _0x2f9621 = new createjs[(_0x5039ce(0x248))]();
        drawData[_0x5039ce(0x2b6)][_0x5039ce(0x27c)]({
            'date': new Date(),
            'firstNum': 0x0,
            'lastNum': 0x0,
            'shape': _0x2f9621,
            'gapX': drawData[_0x5039ce(0x19e)] * drawData[_0x5039ce(0x2b0)],
            'gapY': drawData[_0x5039ce(0x1b0)] * drawData[_0x5039ce(0x2b0)],
            'nextRecord': ![],
            'totalNum': drawData[_0x5039ce(0x278)][_0x5039ce(0x1a7)],
            'size': 0x0,
            'active': !![]
        }), drawingContainer['addChild'](_0x2f9621);
    } else !gameData[_0x5039ce(0x1c4)] && !gameData['stageComplete'] && (drawData['hitCollision'] = !![], playSound(_0x5039ce(0x1ca))), resetPoints(!![]);
}

function removeRecord(_0x25efba) {
    var _0x5dba4a = a0_0x2f4ee6;
    drawingContainer[_0x5dba4a(0x239)](drawData[_0x5dba4a(0x2b6)][_0x25efba]['shape']), drawData['record_arr'][_0x5dba4a(0x1f1)](_0x25efba, 0x1), drawData[_0x5dba4a(0x2b6)]['length'] == 0x0 && resetPoints(!![]);
}

function checkWithinStage(_0x3882bf, _0x4e5950) {
    var _0x90f524 = a0_0x2f4ee6,
        _0x4d6a3b = ![],
        _0x366386 = 0xa,
        _0x509fc5 = _0x3882bf,
        _0x38848e = _0x4e5950;
    return _0x509fc5 == undefined && (_0x509fc5 = drawData[_0x90f524(0x278)][0x0][_0x90f524(0x1fa)] + drawData['gapX'] * drawData['count']), _0x38848e == undefined && (_0x38848e = drawData[_0x90f524(0x278)][0x0]['mtY'] + drawData[_0x90f524(0x1b0)] * drawData[_0x90f524(0x2b0)]), _0x509fc5 >= _0x366386 && _0x509fc5 <= canvasW - _0x366386 && (_0x38848e >= _0x366386 && _0x38848e <= canvasH - _0x366386 && (_0x4d6a3b = !![])), _0x4d6a3b;
}

function updateRecordedDrawing() {
    var _0xb5954c = a0_0x2f4ee6,
        _0x366d8c = lineMinimumStroke,
        _0x366ed1 = 0xf,
        _0x22c814 = Math['floor'](drawData['distanceNum']),
        _0x4a2401 = _0x366ed1 / _0x22c814,
        _0x703713 = !![];
    for (var _0x1d6368 = 0x0; _0x1d6368 < drawData[_0xb5954c(0x2b6)][_0xb5954c(0x1a7)]; _0x1d6368++) {
        var _0x1b46c4 = drawData[_0xb5954c(0x2b6)][_0x1d6368][_0xb5954c(0x19e)],
            _0x421ddb = drawData[_0xb5954c(0x2b6)][_0x1d6368]['gapY'];
        drawData[_0xb5954c(0x2b6)][_0x1d6368]['shape'][_0xb5954c(0x249)][_0xb5954c(0x286)]();
        for (var _0x173078 = drawData[_0xb5954c(0x2b6)][_0x1d6368]['firstNum']; _0x173078 < drawData[_0xb5954c(0x2b6)][_0x1d6368][_0xb5954c(0x27d)]; _0x173078++) {
            if (_0x173078 < drawData[_0xb5954c(0x2b6)][_0x1d6368][_0xb5954c(0x1df)]) {
                if (!checkWithinStage(drawData[_0xb5954c(0x278)][_0x173078][_0xb5954c(0x1fa)] + _0x1b46c4, drawData[_0xb5954c(0x278)][_0x173078][_0xb5954c(0x1ac)] + _0x421ddb)) !gameData[_0xb5954c(0x1c4)] && playSound(_0xb5954c(0x1ca)), drawData[_0xb5954c(0x1d7)] = !![], drawData[_0xb5954c(0x2b6)][_0x1d6368][_0xb5954c(0x228)] = ![], drawData[_0xb5954c(0x2b6)][_0x1d6368][_0xb5954c(0x2ac)] = !![], drawData[_0xb5954c(0x2b6)][_0x1d6368][_0xb5954c(0x27d)] = _0x173078, _0x1d6368 + 0x1 < drawData['record_arr'][_0xb5954c(0x1a7)] && removeRecord(_0x1d6368 + 0x1), resetPoints(!![]);
                else checkObstacleCollision(_0x366d8c, drawData[_0xb5954c(0x278)][_0x173078]['mtX'] + _0x1b46c4, drawData['lines'][_0x173078]['mtY'] + _0x421ddb) && !drawData['hitCollision'] ? (playSound('soundFail'), drawData[_0xb5954c(0x1d7)] = !![], drawData[_0xb5954c(0x2b6)][_0x1d6368][_0xb5954c(0x228)] = ![], drawData[_0xb5954c(0x2b6)][_0x1d6368][_0xb5954c(0x2ac)] = !![], drawData['record_arr'][_0x1d6368][_0xb5954c(0x27d)] = _0x173078, _0x1d6368 + 0x1 < drawData[_0xb5954c(0x2b6)][_0xb5954c(0x1a7)] && removeRecord(_0x1d6368 + 0x1), resetPoints(!![])) : (drawData['record_arr'][_0x1d6368][_0xb5954c(0x264)]['graphics'][_0xb5954c(0x21a)](lineColor)['setStrokeStyle'](_0x366d8c, 'round')[_0xb5954c(0x1da)](drawData[_0xb5954c(0x278)][_0x173078][_0xb5954c(0x1fa)] + _0x1b46c4, drawData[_0xb5954c(0x278)][_0x173078][_0xb5954c(0x1ac)] + _0x421ddb)[_0xb5954c(0x21c)](drawData['lines'][_0x173078][_0xb5954c(0x209)] + _0x1b46c4, drawData['lines'][_0x173078][_0xb5954c(0x1ef)] + _0x421ddb), _0x703713 ? _0x366d8c += _0x4a2401 : (_0x366d8c -= _0x4a2401, _0x366d8c = _0x366d8c < lineMinimumStroke ? lineMinimumStroke : _0x366d8c), _0x366d8c >= _0x366ed1 && _0x703713 && (_0x703713 = ![]), !drawData['hitCollision'] && checkPointCollision(drawData[_0xb5954c(0x278)][_0x173078]['size'], drawData[_0xb5954c(0x278)][_0x173078][_0xb5954c(0x1fa)] + _0x1b46c4, drawData['lines'][_0x173078][_0xb5954c(0x1ac)] + _0x421ddb, !![]));
            }
        }
    }
}

function createMainPoints() {
    var _0x484153 = a0_0x2f4ee6;
    gameData['collectPoints'] = 0x0, gameData[_0x484153(0x1fe)] = [], gameData['obstacles_arr'] = [];
    var _0x497af1 = {
        'dots': [{
            'x': 0x38e,
            'y': 0x258,
            's': 0x28,
            'c': _0x484153(0x1b8)
        }],
        'obstacles': [{
            'type': 0x0,
            'x': 0x280,
            'y': 0x15e,
            's': 0x96,
            'c': _0x484153(0x1c9),
            'sx': 0x0,
            'sy': 0x0,
            'column': 0x0,
            'row': 0x0
        }, {
            'type': 0x0,
            'x': 0x280,
            'y': 0x258,
            's': 0xf,
            'c': '#000',
            'sx': 0x0,
            'sy': 0x0,
            'column': 0x0,
            'row': 0x0
        }]
    };
    mainPointsContainer[_0x484153(0x205)]();
    for (var _0x54882c = 0x0; _0x54882c < _0x497af1['dots'][_0x484153(0x1a7)]; _0x54882c++) {
        var _0x48e589 = new createjs[(_0x484153(0x248))]();
        _0x48e589[_0x484153(0x249)]['beginFill'](_0x497af1[_0x484153(0x200)][_0x54882c]['c']), _0x48e589[_0x484153(0x249)][_0x484153(0x1a1)](0x0, 0x0, _0x497af1['dots'][_0x54882c]['s']), _0x48e589['x'] = _0x497af1['dots'][_0x54882c]['x'], _0x48e589['y'] = _0x497af1[_0x484153(0x200)][_0x54882c]['y'], _0x48e589[_0x484153(0x1e6)] = _0x54882c, _0x48e589[_0x484153(0x228)] = !![], mainPointsContainer[_0x484153(0x203)](_0x48e589), gameData[_0x484153(0x1fe)]['push']({
            'obj': _0x48e589,
            's': _0x497af1[_0x484153(0x200)][_0x54882c]['s'],
            'c': _0x497af1['dots'][_0x54882c]['c'],
            'tween': ![]
        });
    }
    for (var _0x54882c = 0x0; _0x54882c < _0x497af1[_0x484153(0x22d)][_0x484153(0x1a7)]; _0x54882c++) {
        if (_0x497af1[_0x484153(0x22d)][_0x54882c][_0x484153(0x220)] == 0x0) {
            var _0x39607d = new createjs[(_0x484153(0x248))]();
            _0x39607d['graphics']['beginFill'](_0x497af1[_0x484153(0x22d)][_0x54882c]['c']), _0x39607d['graphics'][_0x484153(0x1a1)](0x0, 0x0, _0x497af1[_0x484153(0x22d)][_0x54882c]['s']), _0x39607d['x'] = _0x497af1[_0x484153(0x22d)][_0x54882c]['x'], _0x39607d['y'] = _0x497af1[_0x484153(0x22d)][_0x54882c]['y'], _0x39607d[_0x484153(0x1e6)] = _0x54882c, _0x39607d[_0x484153(0x228)] = !![], mainPointsContainer[_0x484153(0x203)](_0x39607d), gameData[_0x484153(0x2ce)][_0x484153(0x27c)]({
                'obj': _0x39607d,
                's': _0x497af1[_0x484153(0x22d)][_0x54882c]['s']
            });
        }
    }
}

function createPoints() {
    var _0x558cfc = a0_0x2f4ee6;
    for (var _0x3e7f7b = 0x0; _0x3e7f7b < levels_arr[gameData['levelNum']][_0x558cfc(0x200)][_0x558cfc(0x1a7)]; _0x3e7f7b++) {
        var _0x502825 = new createjs[(_0x558cfc(0x248))]();
        _0x502825[_0x558cfc(0x249)][_0x558cfc(0x2bc)](levels_arr[gameData['levelNum']][_0x558cfc(0x200)][_0x3e7f7b]['c']), _0x502825[_0x558cfc(0x249)][_0x558cfc(0x1a1)](0x0, 0x0, levels_arr[gameData['levelNum']][_0x558cfc(0x200)][_0x3e7f7b]['s']), _0x502825['x'] = levels_arr[gameData[_0x558cfc(0x2b1)]]['dots'][_0x3e7f7b]['x'], _0x502825['y'] = levels_arr[gameData['levelNum']][_0x558cfc(0x200)][_0x3e7f7b]['y'], _0x502825[_0x558cfc(0x1e6)] = _0x3e7f7b, _0x502825[_0x558cfc(0x228)] = !![], pointsContainer[_0x558cfc(0x203)](_0x502825), gameData[_0x558cfc(0x1fe)][_0x558cfc(0x27c)]({
            'obj': _0x502825,
            's': levels_arr[gameData[_0x558cfc(0x2b1)]]['dots'][_0x3e7f7b]['s'],
            'c': levels_arr[gameData[_0x558cfc(0x2b1)]][_0x558cfc(0x200)][_0x3e7f7b]['c'],
            'tween': ![]
        });
    }
    for (var _0x3e7f7b = 0x0; _0x3e7f7b < levels_arr[gameData['levelNum']][_0x558cfc(0x22d)][_0x558cfc(0x1a7)]; _0x3e7f7b++) {
        if (levels_arr[gameData['levelNum']][_0x558cfc(0x22d)][_0x3e7f7b][_0x558cfc(0x220)] == 0x0) {
            var _0xa9cbf = new createjs['Shape']();
            _0xa9cbf[_0x558cfc(0x249)]['beginFill'](levels_arr[gameData[_0x558cfc(0x2b1)]]['obstacles'][_0x3e7f7b]['c']), _0xa9cbf[_0x558cfc(0x249)]['drawCircle'](0x0, 0x0, levels_arr[gameData[_0x558cfc(0x2b1)]][_0x558cfc(0x22d)][_0x3e7f7b]['s']), _0xa9cbf['x'] = levels_arr[gameData[_0x558cfc(0x2b1)]]['obstacles'][_0x3e7f7b]['x'], _0xa9cbf['y'] = levels_arr[gameData[_0x558cfc(0x2b1)]]['obstacles'][_0x3e7f7b]['y'], _0xa9cbf[_0x558cfc(0x1e6)] = _0x3e7f7b, _0xa9cbf[_0x558cfc(0x228)] = !![], pointsContainer['addChild'](_0xa9cbf), gameData[_0x558cfc(0x2ce)][_0x558cfc(0x27c)]({
                'obj': _0xa9cbf,
                's': levels_arr[gameData[_0x558cfc(0x2b1)]][_0x558cfc(0x22d)][_0x3e7f7b]['s']
            });
        } else {
            var _0x1ca894 = levels_arr[gameData[_0x558cfc(0x2b1)]][_0x558cfc(0x22d)][_0x3e7f7b]['x'],
                _0x1b3890 = levels_arr[gameData[_0x558cfc(0x2b1)]][_0x558cfc(0x22d)][_0x3e7f7b]['y'],
                _0x4f71c7 = _0x1ca894,
                _0x4e8179 = _0x1b3890,
                _0x205fa3 = levels_arr[gameData[_0x558cfc(0x2b1)]][_0x558cfc(0x22d)][_0x3e7f7b]['sx'],
                _0x56e571 = levels_arr[gameData['levelNum']]['obstacles'][_0x3e7f7b]['sy'],
                _0x4434a9 = levels_arr[gameData[_0x558cfc(0x2b1)]]['obstacles'][_0x3e7f7b][_0x558cfc(0x2ad)],
                _0x1d89bb = levels_arr[gameData[_0x558cfc(0x2b1)]][_0x558cfc(0x22d)][_0x3e7f7b][_0x558cfc(0x2d0)];
            for (var _0x66ffd6 = 0x0; _0x66ffd6 < _0x4434a9; _0x66ffd6++) {
                _0x4f71c7 = _0x1ca894;
                for (var _0x2ededf = 0x0; _0x2ededf < _0x1d89bb; _0x2ededf++) {
                    var _0xa9cbf = new createjs[(_0x558cfc(0x248))]();
                    _0xa9cbf['graphics']['beginFill'](levels_arr[gameData[_0x558cfc(0x2b1)]][_0x558cfc(0x22d)][_0x3e7f7b]['c']), _0xa9cbf[_0x558cfc(0x249)][_0x558cfc(0x1a1)](0x0, 0x0, levels_arr[gameData['levelNum']][_0x558cfc(0x22d)][_0x3e7f7b]['s']), _0xa9cbf['x'] = _0x4f71c7, _0xa9cbf['y'] = _0x4e8179, _0xa9cbf['active'] = !![], _0x4f71c7 += _0x205fa3, pointsContainer[_0x558cfc(0x203)](_0xa9cbf), gameData[_0x558cfc(0x2ce)]['push']({
                        'obj': _0xa9cbf,
                        's': levels_arr[gameData[_0x558cfc(0x2b1)]][_0x558cfc(0x22d)][_0x3e7f7b]['s']
                    });
                }
                _0x4e8179 += _0x56e571;
            }
        }
    }
}

function checkPointCollision(_0x2fc5f9, _0x5ccad8, _0x19cf0c, _0xe5318c) {
    var _0x3fec6d = a0_0x2f4ee6;
    for (var _0x2c8438 = 0x0; _0x2c8438 < gameData['points_arr']['length']; _0x2c8438++) {
        var _0x2f99d9 = getDistanceByValue(_0x5ccad8, _0x19cf0c, gameData[_0x3fec6d(0x1fe)][_0x2c8438][_0x3fec6d(0x208)]['x'], gameData[_0x3fec6d(0x1fe)][_0x2c8438]['obj']['y']);
        _0x2f99d9 <= gameData[_0x3fec6d(0x1fe)][_0x2c8438]['s'] + _0x2fc5f9 / 0x2 && gameData[_0x3fec6d(0x1fe)][_0x2c8438][_0x3fec6d(0x208)][_0x3fec6d(0x228)] && (!_0xe5318c ? gameData[_0x3fec6d(0x2c3)] == 0x0 ? animatePoint(_0x2c8438) : (playSound(_0x3fec6d(0x1ca)), resetDrawing()) : animatePoint(_0x2c8438));
    }
    gameData[_0x3fec6d(0x2c3)] == gameData['points_arr']['length'] && curPage == 'main' && goPage(_0x3fec6d(0x2a9));
    if (gameData[_0x3fec6d(0x1c4)]) return;
    gameData['collectPoints'] == gameData[_0x3fec6d(0x1fe)][_0x3fec6d(0x1a7)] && !gameData[_0x3fec6d(0x236)] && (gameData[_0x3fec6d(0x236)] = !![], endGame());
}

function animatePoint(_0xc4e286) {
    var _0x2715f2 = a0_0x2f4ee6;
    playSound(_0x2715f2(0x1de)), gameData[_0x2715f2(0x1fe)][_0xc4e286][_0x2715f2(0x208)]['active'] = ![], TweenMax['to'](gameData[_0x2715f2(0x1fe)][_0xc4e286]['obj'], 0.5, {
        'scaleX': 0x1,
        'scaleY': 0x1,
        'alpha': 0x0,
        'overwrite': !![]
    }), gameData[_0x2715f2(0x2c3)]++;
    var _0x172ef2 = new createjs[(_0x2715f2(0x248))]();
    _0x172ef2[_0x2715f2(0x249)][_0x2715f2(0x2bc)](gameData[_0x2715f2(0x1fe)][_0xc4e286]['c']), _0x172ef2[_0x2715f2(0x249)][_0x2715f2(0x1a1)](0x0, 0x0, 0x12c), _0x172ef2['x'] = gameData[_0x2715f2(0x1fe)][_0xc4e286][_0x2715f2(0x208)]['x'], _0x172ef2['y'] = gameData[_0x2715f2(0x1fe)][_0xc4e286]['obj']['y'], _0x172ef2[_0x2715f2(0x23e)] = _0x172ef2[_0x2715f2(0x283)] = 0x0, _0x172ef2[_0x2715f2(0x2cb)] = 0.3, pointsContainer[_0x2715f2(0x203)](_0x172ef2), TweenMax['to'](_0x172ef2, 0x1, {
        'scaleX': 0x1,
        'scaleY': 0x1,
        'alpha': 0x0,
        'overwrite': !![],
        'onComplete': animateBgComplete,
        'onCompleteParams': [_0x172ef2]
    });
}

function animateBgComplete(_0x4deca5) {
    var _0x135b31 = a0_0x2f4ee6;
    pointsContainer[_0x135b31(0x239)](_0x4deca5);
}

function checkObstacleCollision(_0xde52dc, _0x5b098b, _0x28c608) {
    var _0xada00d = a0_0x2f4ee6,
        _0x3faada = ![];
    for (var _0x2d14ea = 0x0; _0x2d14ea < gameData[_0xada00d(0x2ce)][_0xada00d(0x1a7)]; _0x2d14ea++) {
        var _0x1a9d88 = getDistanceByValue(_0x5b098b, _0x28c608, gameData[_0xada00d(0x2ce)][_0x2d14ea][_0xada00d(0x208)]['x'], gameData[_0xada00d(0x2ce)][_0x2d14ea][_0xada00d(0x208)]['y']);
        _0x1a9d88 <= gameData[_0xada00d(0x2ce)][_0x2d14ea]['s'] + _0xde52dc / 0x2 && gameData[_0xada00d(0x2ce)][_0x2d14ea][_0xada00d(0x208)][_0xada00d(0x228)] && (_0x3faada = !![]);
    }
    return _0x3faada;
}

function endGame() {
    var _0x2ddc7a = a0_0x2f4ee6;
    playSound(_0x2ddc7a(0x1c1));
    for (var _0x5d105e = 0x0; _0x5d105e < gameData[_0x2ddc7a(0x2ce)][_0x2ddc7a(0x1a7)]; _0x5d105e++) {
        gameData[_0x2ddc7a(0x2ce)][_0x5d105e][_0x2ddc7a(0x208)][_0x2ddc7a(0x228)] = ![], TweenMax['to'](gameData[_0x2ddc7a(0x2ce)][_0x5d105e]['obj'], 0.5, {
            'scaleX': 0x0,
            'scaleY': 0x0,
            'overwrite': !![]
        });
    }
    TweenMax['to'](gameContainer, 0x2, {
        'overwrite': !![],
        'onComplete': function() {
            var _0x6170d = _0x2ddc7a;
            $[_0x6170d(0x1c8)][_0x6170d(0x202)] ? toggleGameStatus('Game\x20complete:') : goPage(_0x6170d(0x1ad));
        }
    });
}

function setWindVolume(_0x1380ee) {
    var _0x1dbf1c = a0_0x2f4ee6,
        _0x34e735 = 0x0,
        _0x3ca5b9 = ![];
    if (!drawData[_0x1dbf1c(0x1b1)] && _0x1380ee) drawData[_0x1dbf1c(0x1b1)] = !![], _0x34e735 = 0.5, _0x3ca5b9 = !![];
    else drawData['volumeMode'] && !_0x1380ee && (drawData[_0x1dbf1c(0x1b1)] = ![], _0x34e735 = 0x0, _0x3ca5b9 = !![]);
    _0x3ca5b9 && TweenMax['to'](drawData, 0.5, {
        'volume': _0x34e735,
        'overwrite': !![],
        'onUpdate': updateWindVolume
    });
}

function a0_0xa4a5(_0x1196d2, _0x23107a) {
    var _0x5a12a8 = a0_0x5a12();
    return a0_0xa4a5 = function(_0xa4a560, _0x2b6b9f) {
        _0xa4a560 = _0xa4a560 - 0x18c;
        var _0x249601 = _0x5a12a8[_0xa4a560];
        return _0x249601;
    }, a0_0xa4a5(_0x1196d2, _0x23107a);
}

function updateWindVolume() {
    var _0x3d4c0a = a0_0x2f4ee6;
    setSoundLoopVolume(_0x3d4c0a(0x2b4), drawData[_0x3d4c0a(0x2b8)]);
}

function checkWindMode() {
    var _0x28d84b = a0_0x2f4ee6;
    drawData[_0x28d84b(0x2b8)] == 0x0 ? toggleSoundLoop(_0x28d84b(0x2b4), ![]) : toggleSoundLoop(_0x28d84b(0x2b4), !![]);
}

function toggleOptions(_0x3c3c24) {
    var _0xfae210 = a0_0x2f4ee6;
    optionsContainer[_0xfae210(0x18d)] ? optionsContainer[_0xfae210(0x18d)] = ![] : optionsContainer['visible'] = !![], _0x3c3c24 != undefined && (optionsContainer['visible'] = _0x3c3c24);
}

function toggleSoundMute(_0x4148be) {
    var _0x4f9e84 = a0_0x2f4ee6;
    buttonSoundOff[_0x4f9e84(0x18d)] = ![], buttonSoundOn[_0x4f9e84(0x18d)] = ![], toggleSoundInMute(_0x4148be), _0x4148be ? buttonSoundOn[_0x4f9e84(0x18d)] = !![] : buttonSoundOff['visible'] = !![];
}

function toggleMusicMute(_0xb82fa6) {
    var _0x484218 = a0_0x2f4ee6;
    buttonMusicOff['visible'] = ![], buttonMusicOn[_0x484218(0x18d)] = ![], toggleMusicInMute(_0xb82fa6), _0xb82fa6 ? buttonMusicOn['visible'] = !![] : buttonMusicOff[_0x484218(0x18d)] = !![];
}

function toggleFullScreen() {
    var _0x3edfda = a0_0x2f4ee6;
    if (!document[_0x3edfda(0x280)] && !document['mozFullScreenElement'] && !document[_0x3edfda(0x26c)] && !document[_0x3edfda(0x235)]) {
        if (document[_0x3edfda(0x1ff)][_0x3edfda(0x2cd)]) document[_0x3edfda(0x1ff)][_0x3edfda(0x2cd)]();
        else {
            if (document[_0x3edfda(0x1ff)][_0x3edfda(0x246)]) document[_0x3edfda(0x1ff)][_0x3edfda(0x246)]();
            else {
                if (document[_0x3edfda(0x1ff)][_0x3edfda(0x293)]) document['documentElement'][_0x3edfda(0x293)]();
                else document[_0x3edfda(0x1ff)][_0x3edfda(0x27f)] && document[_0x3edfda(0x1ff)][_0x3edfda(0x27f)](Element[_0x3edfda(0x29e)]);
            }
        }
    } else {
        if (document[_0x3edfda(0x1cd)]) document[_0x3edfda(0x1cd)]();
        else {
            if (document[_0x3edfda(0x1ee)]) document[_0x3edfda(0x1ee)]();
            else {
                if (document[_0x3edfda(0x297)]) document[_0x3edfda(0x297)]();
                else document[_0x3edfda(0x268)] && document[_0x3edfda(0x268)]();
            }
        }
    }
}

function shareLinks(_0x4bd2e5, _0x199fa4) {
    var _0x793f71 = a0_0x2f4ee6;
    shareSettings['gtag'] && gtag(_0x793f71(0x21b), _0x793f71(0x24b), {
        'event_category': _0x793f71(0x22e),
        'event_label': _0x4bd2e5
    });
    var _0xc57042 = location[_0x793f71(0x1a6)];
    _0xc57042 = encodeURIComponent(_0xc57042[_0x793f71(0x2a3)](0x0, _0xc57042['lastIndexOf']('/') + 0x1));
    var _0x4980a2 = shareSettings[_0x793f71(0x19f)][_0x793f71(0x2b9)]('[SCORE]', _0x199fa4),
        _0x23f33e = shareSettings[_0x793f71(0x1f0)][_0x793f71(0x2b9)](_0x793f71(0x234), _0x199fa4),
        _0x27ff51 = '';
    if (_0x4bd2e5 == _0x793f71(0x295)) shareSettings['customScore'] ? (_0xc57042 = decodeURIComponent(_0xc57042), _0x27ff51 = _0x793f71(0x1c0) + encodeURIComponent(_0xc57042 + 'share.php?title=' + _0x4980a2 + _0x793f71(0x1c7) + _0xc57042 + _0x793f71(0x19c) + _0xc57042 + _0x793f71(0x1e5))) : _0x27ff51 = _0x793f71(0x1c0) + _0xc57042;
    else {
        if (_0x4bd2e5 == _0x793f71(0x298)) _0x27ff51 = _0x793f71(0x1e3) + _0x23f33e + '&url=' + _0xc57042;
        else {
            if (_0x4bd2e5 == 'whatsapp') _0x27ff51 = _0x793f71(0x24c) + _0x23f33e + _0x793f71(0x241) + _0xc57042;
            else {
                if (_0x4bd2e5 == 'telegram') _0x27ff51 = _0x793f71(0x252) + _0xc57042 + _0x793f71(0x204) + _0x23f33e;
                else {
                    if (_0x4bd2e5 == 'reddit') _0x27ff51 = 'https://www.reddit.com/submit?url=' + _0xc57042 + _0x793f71(0x2b7) + _0x23f33e;
                    else _0x4bd2e5 == _0x793f71(0x24a) && (_0x27ff51 = _0x793f71(0x1d6) + _0xc57042);
                }
            }
        }
    }
    window[_0x793f71(0x1c6)](_0x27ff51);
}
var stageWidth, stageHeight = 0x0,
    isLoaded = ![];
$(function() {
    var _0x2f3e4f = a0_0x2f4ee6,
        _0x3c2cc6 = function() {
            var _0x3d43ce = a0_0xa4a5;
            try {
                createjs[_0x3d43ce(0x28f)][_0x3d43ce(0x1b7)]['state'] === _0x3d43ce(0x2aa) && (createjs[_0x3d43ce(0x28f)]['context'][_0x3d43ce(0x23b)](), window['removeEventListener']('click', _0x3c2cc6));
            } catch (_0x1ffc1e) {
                console[_0x3d43ce(0x1dd)](_0x3d43ce(0x277)), console['error'](_0x1ffc1e);
            }
        };
    window[_0x2f3e4f(0x1aa)]('click', _0x3c2cc6), window['location']['protocol'][_0x2f3e4f(0x230)](0x0, 0x4) === 'file' && alert(_0x2f3e4f(0x25d)), $(window)[_0x2f3e4f(0x1ba)](function() {
        resizeLoaderFunc();
    }), resizeLoaderFunc(), checkBrowser();
});

function resizeLoaderFunc() {
    var _0x585f98 = a0_0x2f4ee6;
    stageWidth = $(window)[_0x585f98(0x2a2)](), stageHeight = $(window)[_0x585f98(0x213)](), $(_0x585f98(0x238))[_0x585f98(0x231)]('left', checkContentWidth($('#mainLoader'))), $(_0x585f98(0x238))[_0x585f98(0x231)]('top', checkContentHeight($('#mainLoader'))), $(_0x585f98(0x281))[_0x585f98(0x231)](_0x585f98(0x250), checkContentWidth($(_0x585f98(0x238)))), $(_0x585f98(0x281))[_0x585f98(0x231)](_0x585f98(0x2c6), checkContentHeight($(_0x585f98(0x238))));
}
var browserSupport = ![],
    isMobile, isTablet, isDesktop;

function checkBrowser() {
    var _0x765ddb = a0_0x2f4ee6;
    if (typeof MobileDetect === _0x765ddb(0x242)) {
        var _0x53b2ba = new MobileDetect(window[_0x765ddb(0x25c)][_0x765ddb(0x260)]);
        isMobile = _0x53b2ba['mobile'](), isTablet = _0x53b2ba['tablet'](), isMobile == null && isTablet == null && (isDesktop = !![]);
    }
    var _0x5ae585 = document['createElement'](_0x765ddb(0x2be));
    _0x5ae585['getContext'] && (browserSupport = !![]), browserSupport ? !isLoaded && (isLoaded = !![], initPreload()) : $(_0x765ddb(0x281))[_0x765ddb(0x1a9)]();
}
const levels_arr = [{
    'dots': [{
        'x': 0x33e,
        'y': 0x180,
        's': 0x28,
        'c': '#26ADE4'
    }, {
        'x': 0x3d4,
        'y': 0x180,
        's': 0x3c,
        'c': a0_0x2f4ee6(0x1b8)
    }],
    'obstacles': []
}, {
    'dots': [{
        'x': 0x320,
        'y': 0x17c,
        's': 0x1e,
        'c': '#F02475'
    }, {
        'x': 0x384,
        'y': 0x12c,
        's': 0x1e,
        'c': '#F02475'
    }, {
        'x': 0x3e8,
        'y': 0xe6,
        's': 0x1e,
        'c': a0_0x2f4ee6(0x2d1)
    }],
    'obstacles': []
}, {
    'dots': [{
        'x': 0x212,
        'y': 0x180,
        's': 0x1e,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x2ee,
        'y': 0x180,
        's': 0x1e,
        'c': a0_0x2f4ee6(0x1b8)
    }],
    'obstacles': [{
        'type': 0x0,
        'x': 0x280,
        'y': 0x180,
        's': 0x1e,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }]
}, {
    'dots': [{
        'x': 0x24e,
        'y': 0x158,
        's': 0x1e,
        'c': a0_0x2f4ee6(0x269)
    }, {
        'x': 0x2b2,
        'y': 0x158,
        's': 0x1e,
        'c': a0_0x2f4ee6(0x269)
    }, {
        'x': 0x24e,
        'y': 0x1b2,
        's': 0x1e,
        'c': a0_0x2f4ee6(0x269)
    }],
    'obstacles': [{
        'type': 0x0,
        'x': 0x2b2,
        'y': 0x1b2,
        's': 0x1e,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }]
}, {
    'dots': [{
        'x': 0x212,
        'y': 0x180,
        's': 0x1e,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x2ee,
        'y': 0x180,
        's': 0x1e,
        'c': '#26ADE4'
    }, {
        'x': 0x280,
        'y': 0x118,
        's': 0x1e,
        'c': a0_0x2f4ee6(0x1b8)
    }],
    'obstacles': [{
        'type': 0x0,
        'x': 0x280,
        'y': 0x180,
        's': 0x1e,
        'c': '#000',
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }]
}, {
    'dots': [{
        'x': 0x280,
        'y': 0x180,
        's': 0x19,
        'c': '#26ADE4'
    }, {
        'x': 0x334,
        'y': 0x180,
        's': 0x19,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x1cc,
        'y': 0x180,
        's': 0x19,
        'c': a0_0x2f4ee6(0x1b8)
    }],
    'obstacles': [{
        'type': 0x0,
        'x': 0x226,
        'y': 0x180,
        's': 0xf,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x2da,
        'y': 0x180,
        's': 0xf,
        'c': '#000',
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }]
}, {
    'dots': [{
        'x': 0x280,
        'y': 0x180,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x2bd,
        'y': 0x180,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x243,
        'y': 0x180,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x280,
        'y': 0x146,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }],
    'obstacles': [{
        'type': 0x1,
        'x': 0x46,
        'y': 0x37,
        's': 0x8,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x3c,
        'sy': 0x3c,
        'column': 0x14,
        'row': 0xc
    }]
}, {
    'dots': [{
        'x': 0x280,
        'y': 0x180,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x2bc,
        'y': 0x146,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x2bc,
        'y': 0x109,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x280,
        'y': 0x145,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }],
    'obstacles': [{
        'type': 0x1,
        'x': 0x46,
        'y': 0x37,
        's': 0x8,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x3c,
        'sy': 0x3c,
        'column': 0x14,
        'row': 0xc
    }]
}, {
    'dots': [{
        'x': 0x280,
        'y': 0x180,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2a8)
    }, {
        'x': 0x2d9,
        'y': 0x180,
        's': 0x14,
        'c': '#AD2BAD'
    }, {
        'x': 0x226,
        'y': 0x180,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2a8)
    }, {
        'x': 0x226,
        'y': 0x1d1,
        's': 0x14,
        'c': '#AD2BAD'
    }, {
        'x': 0x280,
        'y': 0x1d1,
        's': 0x14,
        'c': '#AD2BAD'
    }, {
        'x': 0x2d9,
        'y': 0x1d1,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2a8)
    }],
    'obstacles': [{
        'type': 0x1,
        'x': 0x19f,
        'y': 0x163,
        's': 0xa,
        'c': '#000',
        'sx': 0x5a,
        'sy': 0x3c,
        'column': 0x6,
        'row': 0x2
    }]
}, {
    'dots': [{
        'x': 0x2bb,
        'y': 0x215,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2d1)
    }, {
        'x': 0x2f8,
        'y': 0x213,
        's': 0x14,
        'c': '#F02475'
    }, {
        'x': 0x2bb,
        'y': 0x1d6,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2d1)
    }, {
        'x': 0x2f7,
        'y': 0x24e,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2d1)
    }],
    'obstacles': [{
        'type': 0x1,
        'x': 0x29d,
        'y': 0x1f4,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x3c,
        'sy': 0x3c,
        'column': 0x3,
        'row': 0x2
    }, {
        'type': 0x1,
        'x': 0x29d,
        'y': 0x1b8,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x3c,
        'sy': 0x3c,
        'column': 0x2,
        'row': 0x1
    }, {
        'type': 0x1,
        'x': 0x2da,
        'y': 0x26c,
        's': 0xa,
        'c': '#000',
        'sx': 0x3c,
        'sy': 0x3c,
        'column': 0x2,
        'row': 0x1
    }, {
        'type': 0x1,
        'x': 0x1ea,
        'y': 0x104,
        's': 0xa,
        'c': '#000',
        'sx': 0x3c,
        'sy': 0x3c,
        'column': 0x3,
        'row': 0x2
    }, {
        'type': 0x1,
        'x': 0x1ea,
        'y': 0xc8,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x3c,
        'sy': 0x3c,
        'column': 0x2,
        'row': 0x1
    }, {
        'type': 0x1,
        'x': 0x226,
        'y': 0x17c,
        's': 0xa,
        'c': '#000',
        'sx': 0x3c,
        'sy': 0x3c,
        'column': 0x2,
        'row': 0x1
    }]
}, {
    'dots': [{
        'x': 0x236,
        'y': 0x180,
        's': 0x14,
        'c': '#26ADE4'
    }, {
        'x': 0x2ca,
        'y': 0x180,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x243,
        'y': 0x154,
        's': 0x14,
        'c': '#26ADE4'
    }, {
        'x': 0x268,
        'y': 0x13a,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x298,
        'y': 0x13a,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x2bb,
        'y': 0x154,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }],
    'obstacles': [{
        'type': 0x0,
        'x': 0x280,
        'y': 0x180,
        's': 0x2d,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x35c,
        'y': 0x180,
        's': 0x2d,
        'c': '#000',
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x1a4,
        'y': 0x180,
        's': 0x2d,
        'c': '#000',
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }]
}, {
    'dots': [{
        'x': 0x384,
        'y': 0x169,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x384,
        'y': 0x1e0,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x347,
        'y': 0x167,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x3c0,
        'y': 0x168,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x384,
        'y': 0x12b,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x385,
        'y': 0x1a5,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }],
    'obstacles': [{
        'type': 0x1,
        'x': 0x15e,
        'y': 0x10e,
        's': 0xa,
        'c': '#000',
        'sx': 0x3c,
        'sy': 0x3c,
        'column': 0x2,
        'row': 0x5
    }, {
        'type': 0x1,
        'x': 0x122,
        'y': 0x14a,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x3c,
        'sy': 0x3c,
        'column': 0x4,
        'row': 0x2
    }, {
        'type': 0x1,
        'x': 0x348,
        'y': 0x1a4,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x78,
        'sy': 0x3c,
        'column': 0x2,
        'row': 0x2
    }, {
        'type': 0x1,
        'x': 0x348,
        'y': 0x12c,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x78,
        'sy': 0x3c,
        'column': 0x2,
        'row': 0x1
    }]
}, {
    'dots': [{
        'x': 0x2d3,
        'y': 0x180,
        's': 0x14,
        'c': a0_0x2f4ee6(0x269)
    }, {
        'x': 0x335,
        'y': 0x180,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2d1)
    }, {
        'x': 0x3fb,
        'y': 0x180,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2d1)
    }],
    'obstacles': [{
        'type': 0x1,
        'x': 0x172,
        'y': 0x180,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x64,
        'sy': 0x3c,
        'column': 0x7,
        'row': 0x1
    }, {
        'type': 0x0,
        'x': 0x26d,
        'y': 0x182,
        's': 0x14,
        'c': '#000',
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x39a,
        'y': 0x180,
        's': 0x14,
        'c': '#000',
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }]
}, {
    'dots': [{
        'x': 0x248,
        'y': 0x1a3,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x2b8,
        'y': 0x162,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x330,
        'y': 0x11c,
        's': 0x1e,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x3a7,
        'y': 0xdd,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }],
    'obstacles': [{
        'type': 0x0,
        'x': 0x280,
        'y': 0x180,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x2f3,
        'y': 0x141,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x212,
        'y': 0x1c2,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x36f,
        'y': 0xfd,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x1a7,
        'y': 0x205,
        's': 0xa,
        'c': '#000',
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }]
}, {
    'dots': [{
        'x': 0x28a,
        'y': 0x181,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2a8)
    }, {
        'x': 0x31c,
        'y': 0xdc,
        's': 0x14,
        'c': a0_0x2f4ee6(0x269)
    }, {
        'x': 0x320,
        'y': 0x229,
        's': 0x14,
        'c': a0_0x2f4ee6(0x269)
    }, {
        'x': 0x41d,
        'y': 0x17f,
        's': 0x14,
        'c': a0_0x2f4ee6(0x269)
    }],
    'obstacles': [{
        'type': 0x1,
        'x': 0xc8,
        'y': 0x180,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x64,
        'sy': 0xa,
        'column': 0x8,
        'row': 0x1
    }, {
        'type': 0x1,
        'x': 0x190,
        'y': 0x109,
        's': 0xa,
        'c': '#000',
        'sx': 0x64,
        'sy': 0x3c,
        'column': 0x1,
        'row': 0x5
    }, {
        'type': 0x1,
        'x': 0x1f4,
        'y': 0x145,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x64,
        'sy': 0x3c,
        'column': 0x1,
        'row': 0x3
    }]
}, {
    'dots': [{
        'x': 0x24a,
        'y': 0x180,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2a8)
    }, {
        'x': 0x2b3,
        'y': 0x182,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2a8)
    }, {
        'x': 0x280,
        'y': 0x115,
        's': 0x1e,
        'c': a0_0x2f4ee6(0x269)
    }, {
        'x': 0x1b7,
        'y': 0x13f,
        's': 0x14,
        'c': a0_0x2f4ee6(0x269)
    }, {
        'x': 0x345,
        'y': 0x13f,
        's': 0x14,
        'c': '#FA2A00'
    }],
    'obstacles': [{
        'type': 0x1,
        'x': 0x8a,
        'y': 0x180,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x64,
        'sy': 0x3c,
        'column': 0xb,
        'row': 0x1
    }, {
        'type': 0x0,
        'x': 0xef,
        'y': 0x140,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x40d,
        'y': 0x140,
        's': 0xa,
        'c': '#000',
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x21a,
        'y': 0x117,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x2e3,
        'y': 0x116,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x155,
        'y': 0xdc,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x3aa,
        'y': 0xdc,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }]
}, {
    'dots': [{
        'x': 0x281,
        'y': 0x181,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2a8)
    }, {
        'x': 0x21d,
        'y': 0x1d4,
        's': 0x14,
        'c': '#FA2A00'
    }, {
        'x': 0x2e6,
        'y': 0x12e,
        's': 0x14,
        'c': a0_0x2f4ee6(0x269)
    }, {
        'x': 0x21f,
        'y': 0x130,
        's': 0x14,
        'c': a0_0x2f4ee6(0x269)
    }, {
        'x': 0x2e8,
        'y': 0x1d6,
        's': 0x14,
        'c': '#FA2A00'
    }],
    'obstacles': [{
        'type': 0x1,
        'x': 0xbe,
        'y': 0x180,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x64,
        'sy': 0x3c,
        'column': 0xa,
        'row': 0x1
    }, {
        'type': 0x0,
        'x': 0x21e,
        'y': 0x180,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x2e8,
        'y': 0x180,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x280,
        'y': 0x13c,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x280,
        'y': 0x1c1,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x156,
        'y': 0x17e,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x3ae,
        'y': 0x180,
        's': 0x14,
        'c': '#000',
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }]
}, {
    'dots': [{
        'x': 0x21d,
        'y': 0x14d,
        's': 0x14,
        'c': '#AD2BAD'
    }, {
        'x': 0x2e8,
        'y': 0x148,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2a8)
    }, {
        'x': 0x21c,
        'y': 0x1df,
        's': 0x1e,
        'c': '#AD2BAD'
    }, {
        'x': 0x280,
        'y': 0x181,
        's': 0x14,
        'c': a0_0x2f4ee6(0x269)
    }, {
        'x': 0x2e9,
        'y': 0x1e0,
        's': 0x1e,
        'c': a0_0x2f4ee6(0x2a8)
    }, {
        'x': 0x21c,
        'y': 0x227,
        's': 0x14,
        'c': a0_0x2f4ee6(0x269)
    }, {
        'x': 0x21c,
        'y': 0x265,
        's': 0x14,
        'c': a0_0x2f4ee6(0x269)
    }, {
        'x': 0x2eb,
        'y': 0x226,
        's': 0x14,
        'c': a0_0x2f4ee6(0x269)
    }, {
        'x': 0x2eb,
        'y': 0x266,
        's': 0x14,
        'c': a0_0x2f4ee6(0x269)
    }],
    'obstacles': [{
        'type': 0x1,
        'x': 0xbe,
        'y': 0x180,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x64,
        'sy': 0x3c,
        'column': 0xa,
        'row': 0x1
    }, {
        'type': 0x0,
        'x': 0x1b2,
        'y': 0x1c2,
        's': 0x14,
        'c': '#000',
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x34b,
        'y': 0x1c2,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x280,
        'y': 0x123,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x280,
        'y': 0x1c2,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x280,
        'y': 0xdb,
        's': 0x1e,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }]
}, {
    'dots': [{
        'x': 0x1ea,
        'y': 0x18f,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x1ea,
        'y': 0x211,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x30b,
        'y': 0xef,
        's': 0x14,
        'c': '#26ADE4'
    }, {
        'x': 0x30e,
        'y': 0x16f,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x27f,
        'y': 0x13f,
        's': 0x14,
        'c': '#AD2BAD'
    }, {
        'x': 0x281,
        'y': 0x1c2,
        's': 0x14,
        'c': '#AD2BAD'
    }],
    'obstacles': [{
        'type': 0x0,
        'x': 0x280,
        'y': 0x180,
        's': 0x1e,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x1ea,
        'y': 0x1d0,
        's': 0x1e,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x14c,
        'y': 0x22e,
        's': 0x28,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x30c,
        'y': 0x12f,
        's': 0x1e,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x399,
        'y': 0xd6,
        's': 0x28,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }]
}, {
    'dots': [{
        'x': 0x280,
        'y': 0x180,
        's': 0x14,
        'c': a0_0x2f4ee6(0x269)
    }, {
        'x': 0x3ac,
        'y': 0xea,
        's': 0x14,
        'c': a0_0x2f4ee6(0x269)
    }, {
        'x': 0x231,
        'y': 0x1cd,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x232,
        'y': 0x134,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x2d1,
        'y': 0x1c9,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x2d0,
        'y': 0x138,
        's': 0x14,
        'c': '#26ADE4'
    }, {
        'x': 0x35d,
        'y': 0x131,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2a8)
    }, {
        'x': 0x3fb,
        'y': 0x131,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2a8)
    }, {
        'x': 0x3fd,
        'y': 0xa8,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2a8)
    }, {
        'x': 0x35f,
        'y': 0xa4,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2a8)
    }],
    'obstacles': [{
        'type': 0x1,
        'x': 0x230,
        'y': 0x180,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0xa0,
        'sy': 0x0,
        'column': 0x2,
        'row': 0x1
    }, {
        'type': 0x0,
        'x': 0x280,
        'y': 0x1c8,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x1,
        'x': 0x35c,
        'y': 0xea,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0xa0,
        'sy': 0x0,
        'column': 0x2,
        'row': 0x1
    }, {
        'type': 0x0,
        'x': 0x3ac,
        'y': 0x132,
        's': 0xa,
        'c': '#000',
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x1,
        'x': 0x104,
        'y': 0x216,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0xa0,
        'sy': 0x0,
        'column': 0x2,
        'row': 0x1
    }, {
        'type': 0x0,
        'x': 0x154,
        'y': 0x25e,
        's': 0xa,
        'c': '#000',
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }]
}, {
    'dots': [{
        'x': 0x24d,
        'y': 0x12b,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x24d,
        'y': 0x1a3,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x288,
        'y': 0x168,
        's': 0x14,
        'c': '#26ADE4'
    }, {
        'x': 0x211,
        'y': 0x167,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x24e,
        'y': 0x1e3,
        's': 0x14,
        'c': a0_0x2f4ee6(0x269)
    }, {
        'x': 0x2f7,
        'y': 0x1a7,
        's': 0x14,
        'c': '#AD2BAD'
    }, {
        'x': 0x2bc,
        'y': 0x1e2,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2a8)
    }, {
        'x': 0x332,
        'y': 0x1e3,
        's': 0x14,
        'c': '#AD2BAD'
    }, {
        'x': 0x2f9,
        'y': 0x21d,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2a8)
    }, {
        'x': 0x2f8,
        'y': 0x263,
        's': 0x14,
        'c': '#FA2A00'
    }, {
        'x': 0x367,
        'y': 0x262,
        's': 0x14,
        'c': '#26ADE4'
    }, {
        'x': 0x3a2,
        'y': 0x224,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x3de,
        'y': 0x260,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x1a9,
        'y': 0x168,
        's': 0x14,
        'c': '#FA2A00'
    }],
    'obstacles': [{
        'type': 0x0,
        'x': 0x2f8,
        'y': 0x1e2,
        's': 0x1e,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x24e,
        'y': 0x167,
        's': 0x1e,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x1a4,
        'y': 0xf0,
        's': 0x1e,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x3a2,
        'y': 0x260,
        's': 0x1e,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }]
}, {
    'dots': [{
        'x': 0x1f3,
        'y': 0x142,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x2e1,
        'y': 0x18f,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x294,
        'y': 0x1dd,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x1a9,
        'y': 0x231,
        's': 0x14,
        'c': '#AD2BAD'
    }, {
        'x': 0x1f5,
        'y': 0x27a,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2a8)
    }, {
        'x': 0x240,
        'y': 0x232,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2a8)
    }, {
        'x': 0x1a8,
        'y': 0x193,
        's': 0x14,
        'c': a0_0x2f4ee6(0x269)
    }],
    'obstacles': [{
        'type': 0x1,
        'x': 0x1f4,
        'y': 0xf0,
        's': 0x2d,
        'c': '#000',
        'sx': 0xa0,
        'sy': 0xa0,
        'column': 0x1,
        'row': 0x3
    }, {
        'type': 0x1,
        'x': 0x294,
        'y': 0xf0,
        's': 0x2d,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0xa0,
        'sy': 0xa0,
        'column': 0x1,
        'row': 0x2
    }]
}, {
    'dots': [{
        'x': 0x260,
        'y': 0x116,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x2c9,
        'y': 0x115,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x25d,
        'y': 0x17e,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x2cc,
        'y': 0x17a,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x25c,
        'y': 0x1ba,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2a8)
    }, {
        'x': 0x2cf,
        'y': 0x1bd,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2a8)
    }, {
        'x': 0x25d,
        'y': 0x220,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2a8)
    }, {
        'x': 0x2cd,
        'y': 0x21c,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2a8)
    }, {
        'x': 0x385,
        'y': 0x19e,
        's': 0x28,
        'c': a0_0x2f4ee6(0x2d1)
    }, {
        'x': 0x41f,
        'y': 0x14b,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x41d,
        'y': 0x1ec,
        's': 0x14,
        'c': '#AD2BAD'
    }],
    'obstacles': [{
        'type': 0x1,
        'x': 0x1f4,
        'y': 0x14a,
        's': 0x2d,
        'c': '#000',
        'sx': 0xa0,
        'sy': 0xa0,
        'column': 0x2,
        'row': 0x2
    }]
}, {
    'dots': [{
        'x': 0x281,
        'y': 0x119,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x208,
        'y': 0x17d,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x209,
        'y': 0x244,
        's': 0x14,
        'c': '#26ADE4'
    }, {
        'x': 0x2f9,
        'y': 0x244,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x27f,
        'y': 0x17d,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x370,
        'y': 0x17d,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2a8)
    }, {
        'x': 0x2f9,
        'y': 0x17d,
        's': 0x14,
        'c': '#26ADE4'
    }, {
        'x': 0x280,
        'y': 0x1e0,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x371,
        'y': 0x245,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2a8)
    }, {
        'x': 0x460,
        'y': 0x17c,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2a8)
    }, {
        'x': 0x3e9,
        'y': 0x11a,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2a8)
    }, {
        'x': 0x3e8,
        'y': 0x17d,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2a8)
    }, {
        'x': 0x461,
        'y': 0x244,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2a8)
    }, {
        'x': 0x3e9,
        'y': 0x1df,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2a8)
    }],
    'obstacles': [{
        'type': 0x0,
        'x': 0x208,
        'y': 0x118,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x245,
        'y': 0x118,
        's': 0xa,
        'c': '#000',
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x2bd,
        'y': 0x118,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x2f8,
        'y': 0x118,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x281,
        'y': 0x244,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x208,
        'y': 0x14a,
        's': 0xa,
        'c': '#000',
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x2f8,
        'y': 0x14a,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x208,
        'y': 0x1ae,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x208,
        'y': 0x1e0,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x2f8,
        'y': 0x1ae,
        's': 0xa,
        'c': '#000',
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x2f8,
        'y': 0x1e0,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x190,
        'y': 0x118,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x153,
        'y': 0x118,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0xdc,
        'y': 0x118,
        's': 0xa,
        'c': '#000',
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0xa1,
        'y': 0x118,
        's': 0xa,
        'c': '#000',
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x190,
        'y': 0x14a,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x190,
        'y': 0x1ae,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x190,
        'y': 0x1e0,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x118,
        'y': 0x244,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0xa1,
        'y': 0x149,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0xa1,
        'y': 0x1ae,
        's': 0xa,
        'c': '#000',
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0xa1,
        'y': 0x1df,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x372,
        'y': 0x118,
        's': 0xa,
        'c': '#000',
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x3ad,
        'y': 0x118,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x426,
        'y': 0x118,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x461,
        'y': 0x118,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x372,
        'y': 0x148,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x461,
        'y': 0x14b,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x3e8,
        'y': 0x244,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x36f,
        'y': 0x1af,
        's': 0xa,
        'c': '#000',
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x370,
        'y': 0x1e0,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x460,
        'y': 0x1af,
        's': 0xa,
        'c': '#000',
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x461,
        'y': 0x1e0,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }]
}, {
    'dots': [{
        'x': 0x372,
        'y': 0xaa,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x2fa,
        'y': 0xf1,
        's': 0x14,
        'c': '#26ADE4'
    }, {
        'x': 0x370,
        'y': 0x139,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x3e8,
        'y': 0xf1,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x2f9,
        'y': 0x1c4,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2a8)
    }, {
        'x': 0x2f9,
        'y': 0x17e,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x27e,
        'y': 0x207,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2a8)
    }, {
        'x': 0x2f8,
        'y': 0x208,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2a8)
    }, {
        'x': 0x2bc,
        'y': 0xf0,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2d1)
    }, {
        'x': 0x372,
        'y': 0xf2,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x3e9,
        'y': 0x17c,
        's': 0x14,
        'c': a0_0x2f4ee6(0x1b8)
    }, {
        'x': 0x36f,
        'y': 0x207,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2a8)
    }, {
        'x': 0x2f7,
        'y': 0x24f,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2a8)
    }, {
        'x': 0x27e,
        'y': 0x296,
        's': 0x14,
        'c': '#AD2BAD'
    }, {
        'x': 0x371,
        'y': 0x297,
        's': 0x14,
        'c': a0_0x2f4ee6(0x2a8)
    }],
    'obstacles': [{
        'type': 0x1,
        'x': 0x2f8,
        'y': 0x115,
        's': 0xa,
        'c': '#000',
        'sx': 0x3c,
        'sy': 0x23,
        'column': 0x1,
        'row': 0x2
    }, {
        'type': 0x1,
        'x': 0x3e8,
        'y': 0x115,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x3c,
        'sy': 0x23,
        'column': 0x1,
        'row': 0x2
    }, {
        'type': 0x1,
        'x': 0x2f8,
        'y': 0xaa,
        's': 0xa,
        'c': '#000',
        'sx': 0x3c,
        'sy': 0x23,
        'column': 0x1,
        'row': 0x2
    }, {
        'type': 0x1,
        'x': 0x3e8,
        'y': 0xaa,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x3c,
        'sy': 0x23,
        'column': 0x1,
        'row': 0x2
    }, {
        'type': 0x1,
        'x': 0x190,
        'y': 0xaa,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x3c,
        'sy': 0x23,
        'column': 0x1,
        'row': 0x2
    }, {
        'type': 0x1,
        'x': 0x280,
        'y': 0xaa,
        's': 0xa,
        'c': '#000',
        'sx': 0x3c,
        'sy': 0x23,
        'column': 0x1,
        'row': 0x2
    }, {
        'type': 0x1,
        'x': 0x190,
        'y': 0x115,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x3c,
        'sy': 0x23,
        'column': 0x1,
        'row': 0x3
    }, {
        'type': 0x1,
        'x': 0x280,
        'y': 0x115,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x3c,
        'sy': 0x23,
        'column': 0x1,
        'row': 0x3
    }, {
        'type': 0x0,
        'x': 0x333,
        'y': 0xaa,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x3ad,
        'y': 0xaa,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x371,
        'y': 0x17c,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x281,
        'y': 0x24e,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x371,
        'y': 0x24e,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x244,
        'y': 0xaa,
        's': 0xa,
        'c': '#000',
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x1cd,
        'y': 0xa9,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x208,
        'y': 0xcc,
        's': 0xa,
        'c': '#000',
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x208,
        'y': 0x113,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x0,
        'x': 0x209,
        'y': 0x15b,
        's': 0xa,
        'c': '#000',
        'sx': 0x0,
        'sy': 0x0,
        'column': 0x0,
        'row': 0x0
    }, {
        'type': 0x1,
        'x': 0x280,
        'y': 0x1c4,
        's': 0xa,
        'c': '#000',
        'sx': 0x3c,
        'sy': 0x23,
        'column': 0x2,
        'row': 0x1
    }, {
        'type': 0x1,
        'x': 0x334,
        'y': 0x1c4,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x3c,
        'sy': 0x23,
        'column': 0x2,
        'row': 0x1
    }, {
        'type': 0x1,
        'x': 0x1cc,
        'y': 0x17b,
        's': 0xa,
        'c': '#000',
        'sx': 0x3c,
        'sy': 0x23,
        'column': 0x3,
        'row': 0x1
    }, {
        'type': 0x1,
        'x': 0x118,
        'y': 0x1c2,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x3c,
        'sy': 0x23,
        'column': 0x2,
        'row': 0x1
    }, {
        'type': 0x1,
        'x': 0x1cc,
        'y': 0x1c2,
        's': 0xa,
        'c': a0_0x2f4ee6(0x1c9),
        'sx': 0x3c,
        'sy': 0x23,
        'column': 0x2,
        'row': 0x1
    }]
}];

function initPreload() {
    var _0x4ca531 = a0_0x2f4ee6;
    toggleLoader(!![]), checkMobileEvent(), $(window)[_0x4ca531(0x1ba)](function() {
        resizeGameFunc();
    }), resizeGameFunc(), loader = new createjs[(_0x4ca531(0x2a1))](![]), manifest = [{
        'src': _0x4ca531(0x2ca),
        'id': _0x4ca531(0x22b)
    }, {
        'src': 'assets/logo.png',
        'id': 'logo'
    }, {
        'src': _0x4ca531(0x217),
        'id': _0x4ca531(0x27b)
    }, {
        'src': 'assets/button_next.png',
        'id': _0x4ca531(0x2bb)
    }, {
        'src': _0x4ca531(0x2ba),
        'id': _0x4ca531(0x1fb)
    }, {
        'src': _0x4ca531(0x258),
        'id': _0x4ca531(0x1d5)
    }, {
        'src': _0x4ca531(0x21e),
        'id': _0x4ca531(0x2ab)
    }, {
        'src': _0x4ca531(0x2b3),
        'id': 'buttonCancel'
    }, {
        'src': _0x4ca531(0x22a),
        'id': 'itemExit'
    }, {
        'src': 'assets/button_continue.png',
        'id': 'buttonContinue'
    }, {
        'src': _0x4ca531(0x2cf),
        'id': _0x4ca531(0x214)
    }, {
        'src': 'assets/button_save.png',
        'id': 'buttonSave'
    }, {
        'src': _0x4ca531(0x1a0),
        'id': _0x4ca531(0x296)
    }, {
        'src': 'assets/social/button_twitter.png',
        'id': _0x4ca531(0x1e1)
    }, {
        'src': _0x4ca531(0x270),
        'id': _0x4ca531(0x29f)
    }, {
        'src': _0x4ca531(0x26e),
        'id': _0x4ca531(0x29c)
    }, {
        'src': _0x4ca531(0x275),
        'id': _0x4ca531(0x2a5)
    }, {
        'src': 'assets/social/button_linkedin.png',
        'id': _0x4ca531(0x29a)
    }, {
        'src': _0x4ca531(0x259),
        'id': 'buttonFullscreen'
    }, {
        'src': 'assets/button_sound_on.png',
        'id': _0x4ca531(0x274)
    }, {
        'src': 'assets/button_sound_off.png',
        'id': _0x4ca531(0x2a0)
    }, {
        'src': _0x4ca531(0x1d0),
        'id': _0x4ca531(0x19d)
    }, {
        'src': _0x4ca531(0x18c),
        'id': _0x4ca531(0x1bb)
    }], typeof addScoreboardAssets == _0x4ca531(0x242) && addScoreboardAssets(), audioOn = !![], !isDesktop ? !enableMobileAudio && (audioOn = ![]) : !enableDesktopAudio && (audioOn = ![]), audioOn && (manifest['push']({
        'src': _0x4ca531(0x2a4),
        'id': _0x4ca531(0x211)
    }), manifest[_0x4ca531(0x27c)]({
        'src': _0x4ca531(0x265),
        'id': _0x4ca531(0x1c1)
    }), manifest['push']({
        'src': _0x4ca531(0x2c4),
        'id': 'soundFail'
    }), manifest[_0x4ca531(0x27c)]({
        'src': _0x4ca531(0x215),
        'id': _0x4ca531(0x1de)
    }), manifest['push']({
        'src': _0x4ca531(0x24f),
        'id': _0x4ca531(0x1be)
    }), manifest[_0x4ca531(0x27c)]({
        'src': 'assets/sounds/wind.ogg',
        'id': _0x4ca531(0x2b4)
    }), createjs[_0x4ca531(0x256)]['alternateExtensions'] = [_0x4ca531(0x29d)], loader[_0x4ca531(0x266)](createjs[_0x4ca531(0x256)])), loader[_0x4ca531(0x1aa)]('complete', handleComplete), loader[_0x4ca531(0x1aa)]('fileload', fileComplete), loader[_0x4ca531(0x1aa)]('error', handleFileError), loader['on']('progress', handleProgress, this), loader[_0x4ca531(0x28d)](manifest);
}

function fileComplete(_0x25eda4) {
    var _0x2b6152 = a0_0x2f4ee6,
        _0x1e41c2 = _0x25eda4[_0x2b6152(0x194)];
}

function handleFileError(_0x322393) {
    var _0x28561c = a0_0x2f4ee6;
    console['log'](_0x28561c(0x26a), _0x322393);
}

function handleProgress() {
    var _0x4935d8 = a0_0x2f4ee6;
    $(_0x4935d8(0x27a))['html'](Math[_0x4935d8(0x199)](loader[_0x4935d8(0x2c5)] / 0x1 * 0x64) + '%');
}

function handleComplete() {
    toggleLoader(![]), initMain();
};

function toggleLoader(_0x42a399) {
    var _0x22886d = a0_0x2f4ee6;
    _0x42a399 ? $(_0x22886d(0x238))[_0x22886d(0x1a9)]() : $(_0x22886d(0x238))[_0x22886d(0x1e9)]();
}
var stageW = 0x500,
    stageH = 0x300,
    contentW = 0x400,
    contentH = 0x240;

function initMain() {
    var _0x21d3b1 = a0_0x2f4ee6;
    isDesktop && $(_0x21d3b1(0x224))[_0x21d3b1(0x1a9)](), initGameCanvas(stageW, stageH), buildGameCanvas(), buildGameButton(), typeof buildScoreBoardCanvas == _0x21d3b1(0x242) && buildScoreBoardCanvas(), buildSelectLevel(), retrieveLevelData(), setupStageEvents(), !$[_0x21d3b1(0x1c8)]['enable'] ? (playSoundLoop(_0x21d3b1(0x2b4)), setSoundLoopVolume('soundWind', 0x0), goPage('main')) : (goPage(_0x21d3b1(0x25e)), loadEditPage()), resizeCanvas();
}
var windowW = windowH = 0x0,
    scalePercent = 0x0;
const dpr = window['devicePixelRatio'] || 0x1,
    offset = {
        'x': 0x0,
        'y': 0x0,
        'left': 0x0,
        'top': 0x0
    };

function resizeGameFunc() {
    setTimeout(function() {
        var _0x22b8df = a0_0xa4a5;
        $(_0x22b8df(0x225))[_0x22b8df(0x231)]('left', checkContentWidth($(_0x22b8df(0x225)))), $(_0x22b8df(0x225))['css'](_0x22b8df(0x2c6), checkContentHeight($(_0x22b8df(0x225)))), windowW = window[_0x22b8df(0x195)], windowH = window[_0x22b8df(0x1b6)], scalePercent = Math[_0x22b8df(0x263)](windowW / contentW, windowH / contentH), scalePercent = scalePercent > 0x1 ? 0x1 : scalePercent;
        windowW > stageW && windowH > stageH && (windowW > stageW && (scalePercent = windowW / stageW, stageH * scalePercent > windowH && (scalePercent = windowH / stageH)));
        const _0x1901b8 = stageW * scalePercent,
            _0x2e3830 = stageH * scalePercent;
        offset[_0x22b8df(0x250)] = 0x0, offset['top'] = 0x0, _0x1901b8 > windowW ? offset[_0x22b8df(0x250)] = -(_0x1901b8 - windowW) : offset[_0x22b8df(0x250)] = windowW - _0x1901b8, _0x2e3830 > windowH ? offset['top'] = -(_0x2e3830 - windowH) : offset['top'] = windowH - _0x2e3830, offset['x'] = 0x0, offset['y'] = 0x0, offset[_0x22b8df(0x250)] < 0x0 && (offset['x'] = Math[_0x22b8df(0x1cf)](offset['left'] / scalePercent / 0x2)), offset['top'] < 0x0 && (offset['y'] = Math[_0x22b8df(0x1cf)](offset[_0x22b8df(0x2c6)] / scalePercent / 0x2)), $(window)[_0x22b8df(0x1ab)](0x0), resizeCanvas(), typeof resizeScore == _0x22b8df(0x242) && resizeScore();
    }, 0x64);
}
var rotateInstruction = !![],
    forPortrait = ![];

function checkMobileEvent() {
    var _0x463ef8 = a0_0x2f4ee6;
    if (!isDesktop) {
        if (!rotateInstruction) {
            $(_0x463ef8(0x224))[_0x463ef8(0x1a9)](), $(_0x463ef8(0x1b2))[_0x463ef8(0x1e9)]();
            return;
        }
        $(window)['focus'](function() {
            checkMobileOrientation();
        }), $(window)[_0x463ef8(0x193)](_0x463ef8(0x222))['on'](_0x463ef8(0x222), function(_0x40be55) {
            var _0x5e6c73 = _0x463ef8;
            $(_0x5e6c73(0x224))[_0x5e6c73(0x1e9)](), $(_0x5e6c73(0x1b2))[_0x5e6c73(0x1e9)](), setTimeout(function() {
                checkMobileOrientation();
            }, 0x3e8);
        }), checkMobileOrientation();
    }
}

function checkMobileOrientation() {
    var _0x288577 = a0_0x2f4ee6,
        _0x2f2655 = ![];
    window[_0x288577(0x195)] > window['innerHeight'] && (_0x2f2655 = !![]);
    var _0x1d904c = ![];
    !_0x2f2655 ? forPortrait && (_0x1d904c = !![]) : !forPortrait && (_0x1d904c = !![]), !_0x1d904c ? toggleRotate(!![]) : (toggleRotate(![]), $(_0x288577(0x224))['show']());
}

function toggleRotate(_0x45c860) {
    var _0x4ff47e = a0_0x2f4ee6;
    _0x45c860 ? $('#rotateHolder')[_0x4ff47e(0x2b5)]() : $('#rotateHolder')[_0x4ff47e(0x223)](), resizeGameFunc();
}

function checkContentHeight(_0x6a3287) {
    var _0x333ffa = a0_0x2f4ee6,
        _0x52690c = $(window)['height'](),
        _0x3b7937 = _0x52690c / 0x2 - _0x6a3287[_0x333ffa(0x213)]() / 0x2;
    return _0x3b7937;
}

function checkContentWidth(_0x5f9ee7) {
    var _0x2ba376 = a0_0x2f4ee6,
        _0x2d51eb = $(window)[_0x2ba376(0x2a2)](),
        _0x5e3961 = _0x2d51eb / 0x2 - _0x5f9ee7[_0x2ba376(0x2a2)]() / 0x2;
    return _0x5e3961;
}

function shuffle(_0x111960) {
    var _0x11a825 = a0_0x2f4ee6,
        _0x3805fe = _0x111960[_0x11a825(0x1a7)],
        _0x31c126, _0x57cbba;
    while (0x0 !== _0x3805fe) {
        _0x57cbba = Math['floor'](Math[_0x11a825(0x299)]() * _0x3805fe), _0x3805fe -= 0x1, _0x31c126 = _0x111960[_0x3805fe], _0x111960[_0x3805fe] = _0x111960[_0x57cbba], _0x111960[_0x57cbba] = _0x31c126;
    }
    return _0x111960;
}

function a0_0x5a12() {
    var _0x1c727b = ['linesCount', 'min', 'shape', 'assets/sounds/complete.ogg', 'installPlugin', '#focus', 'webkitExitFullscreen', '#FA2A00', 'error\x20', 'max', 'webkitFullscreenElement', 'floor', 'assets/social/button_telegram.png', 'focus', 'assets/social/button_whatsapp.png', 'killAll', '80px\x20anisa_sansregular', 'each', 'buttonSoundOn', 'assets/social/button_reddit.png', 'center', 'There\x20was\x20an\x20error\x20while\x20trying\x20to\x20resume\x20the\x20SoundJS\x20Web\x20Audio\x20context...', 'lines', 'style', '#mainLoader\x20span', 'buttonPrev', 'push', 'totalNum', 'update', 'webkitRequestFullscreen', 'fullscreenElement', '#notSupportHolder', 'shareOption', 'scaleY', 'buttonFullscreen', 'Level\x20[SCORE]\x20is\x20mine\x20new\x20highscore\x20on\x20Draw\x20A\x20Line\x20Game!\x20Try\x20it\x20now!', 'clear', 'image', 'buttonContinue', 'soundSelect', '355690jBXJVx', 'pointer', 'stop', 'loadManifest', 'distanceNum', 'WebAudioPlugin', 'selectStage', 'oldY', 'drawTime', 'mozRequestFullScreen', 'Bitmap', 'facebook', 'buttonFacebook', 'mozCancelFullScreen', 'twitter', 'random', 'buttonLinkedin', 'indexOf', 'buttonTelegram', 'mp3', 'ALLOW_KEYBOARD_INPUT', 'buttonWhatsapp', 'buttonSoundOff', 'LoadQueue', 'width', 'substring', 'assets/sounds/click.ogg', 'buttonReddit', '60px\x20anisa_sansregular', '#mainHolder', '#AD2BAD', 'select', 'suspended', 'buttonConfirm', 'nextRecord', 'row', 'test', 'Container', 'count', 'levelNum', 'framerate', 'assets/button_cancel.png', 'soundWind', 'fadeIn', 'record_arr', '&title=', 'volume', 'replace', 'assets/icon_level.png', 'buttonNext', 'beginFill', 'clearDate', 'canvas', 'buttonSave', '3707cJTWDh', '50506cIsBNK', '566968lpOwHu', 'collectPoints', 'assets/sounds/fail.ogg', 'progress', 'top', 'options', 'cursor', 'regY', 'assets/background.png', 'alpha', 'split', 'requestFullscreen', 'obstacles_arr', 'assets/button_share.png', 'column', '#F02475', 'assets/button_settings.png', 'visible', 'STAGE\x201\x20COMPLETE', 'toUpperCase', '9JuYfBz', 'Graphics', 'remove', 'off', 'item', 'innerWidth', 'musicMain', 'sound', 'font', 'round', 'Are\x20you\x20sure\x20you\x0awant\x20to\x20quit\x20the\x20game?', '45IcuJgn', '&thumb=', 'buttonExit', 'gapX', 'shareTitle', 'assets/social/button_facebook.png', 'drawCircle', 'inArray', 'naturalWidth', 'date', 'removeEventListener', 'href', 'length', '230FmhyIc', 'show', 'addEventListener', 'scrollTop', 'mtY', 'result', 'tick', 'telegram', 'gapY', 'volumeMode', '#rotateHolder', 'hitArea', 'drawRect', 'Stage', 'innerHeight', 'context', '#26ADE4', 'red', 'resize', 'buttonSettings', 'ready', 'reddit', 'soundUnlock', 'button', 'https://www.facebook.com/sharer/sharer.php?u=', 'soundComplete', 'scoreData', 'firstNum', 'paused', 'recordDate', 'open', '&url=', 'editor', '#000', 'soundFail', 'atan2', 'Ticker', 'exitFullscreen', 'target', 'abs', 'assets/button_exit.png', 'Highscore\x20on\x20Draw\x20A\x20Line\x20Game\x20at\x20Level\x20[SCORE].', 'buttonCancel', 'sort', 'iconText_', 'iconLevelLock', 'https://www.linkedin.com/sharing/share-offsite/?url=', 'hitCollision', 'completed', '3124562DtohRF', 'moveTo', 'stageY', 'prepend', 'error', 'soundScore', 'lastNum', 'get', 'buttonTwitter', 'getResult', 'https://twitter.com/intent/tweet?text=', 'sin', 'share.jpg', 'num', 'name', 'itemExit', 'hide', 'blur', 'undefined', 'play', 'main', 'msExitFullscreen', 'ltY', 'shareText', 'splice', 'getElementById', 'alphabetic', 'killTweensOf', 'textAlign', 'gameCanvas', 'score', 'stagemousemove', 'spaceX', 'mtX', 'iconLevel', 'time', '40px\x20anisa_sansregular', 'points_arr', 'documentElement', 'dots', '[NUMBER]', 'enable', 'addChild', '&text=', 'removeAllChildren', 'setStrokeStyle', 'scale', 'obj', 'ltX', 'drawaline2017', 'record', 'text', 'page', 'Text', 'Select\x20Levels', '20388GWOMzP', 'soundClick', 'naturalHeight', 'height', 'buttonShare', 'assets/sounds/score.ogg', 'tween', 'assets/button_prev.png', 'pressReady', 'logo', 'beginStroke', 'event', 'lineTo', 'stageUnlockNum', 'assets/button_confirm.png', 'defaultVol', 'type', 'mouseMoveOutside', 'orientationchange', 'fadeOut', '#canvasHolder', '.mobileRotate', 'speed', 'color', 'active', 'whatsapp', 'assets/item_exit.png', 'background', 'removeAllEventListeners', 'obstacles', 'share', 'mousedown', 'substr', 'css', 'getTime', 'icon_', '[SCORE]', 'msFullscreenElement', 'stageComplete', '74046CwhfwQ', '#mainLoader', 'removeChild', 'size', 'resume', 'stageX', 'stagemouseup', 'scaleX', '64ndDHUe', 'autoClear', '%20', 'function', 'enableMouseOver', 'stageLevelCompleted', 'pressed', 'msRequestFullscreen', 'iconLock_', 'Shape', 'graphics', 'linkedin', 'click', 'https://api.whatsapp.com/send?text=', 'lineHeight', 'oldX', 'assets/sounds/unlock.ogg', 'left', 'sqrt', 'https://t.me/share/url?url=', 'soundButton', 'stagemousedown', 'RAF_SYNCHED', 'Sound', 'textBaseline', 'assets/icon_level_lock.png', 'assets/button_fullscreen.png', 'complete', 'resumeAll', 'navigator', 'To\x20install\x20the\x20game\x20just\x20upload\x20folder\x20\x27game\x27\x20to\x20your\x20server.\x20The\x20game\x20won\x27t\x20run\x20locally\x20with\x20some\x20browser\x20like\x20Chrome\x20due\x20to\x20some\x20security\x20mode.', 'game', 'total', 'userAgent', '1976552OoCIHc'];
    a0_0x5a12 = function() {
        return _0x1c727b;
    };
    return a0_0x5a12();
}

function randomBoolean() {
    var _0x277644 = a0_0x2f4ee6;
    return Math[_0x277644(0x299)]() < 0.5;
}

function sortOnObject(_0x3b433a, _0x5251f5, _0x4308a7) {
    var _0x2daf2f = a0_0x2f4ee6;
    return _0x4308a7 ? _0x3b433a[_0x2daf2f(0x1d3)](function(_0x5e47d8, _0x2e4e34) {
        var _0x5f11df = _0x5e47d8[_0x5251f5],
            _0x3d9137 = _0x2e4e34[_0x5251f5];
        if (_0x5f11df == _0x3d9137) return 0x0;
        return _0x5f11df < _0x3d9137 ? 0x1 : -0x1;
    }) : _0x3b433a[_0x2daf2f(0x1d3)](function(_0x3df300, _0x5337ba) {
        var _0x1f259c = _0x3df300[_0x5251f5],
            _0x3c805d = _0x5337ba[_0x5251f5];
        if (_0x1f259c == _0x3c805d) return 0x0;
        return _0x1f259c > _0x3c805d ? 0x1 : -0x1;
    }), _0x3b433a;
}

function randomIntFromInterval(_0x54230c, _0x1df381) {
    var _0x386e38 = a0_0x2f4ee6;
    return Math[_0x386e38(0x26d)](Math[_0x386e38(0x299)]() * (_0x1df381 - _0x54230c + 0x1) + _0x54230c);
}

function isEven(_0x15171d) {
    return !(_0x15171d % 0x2);
}

function getDistance(_0x4fa9a2, _0x583924) {
    var _0x2edc7b = a0_0x2f4ee6,
        _0x28ccb4 = _0x4fa9a2['x'] - _0x583924['x'],
        _0x49db0b = _0x4fa9a2['y'] - _0x583924['y'],
        _0x2705b1 = Math[_0x2edc7b(0x26d)](Math[_0x2edc7b(0x251)](_0x28ccb4 * _0x28ccb4 + _0x49db0b * _0x49db0b));
    return _0x2705b1;
}

function getDistanceByValue(_0x1cc449, _0x4511f1, _0x16c24d, _0x503ce5) {
    var _0x27e4c8 = a0_0x2f4ee6,
        _0x12994c = _0x1cc449 - _0x16c24d,
        _0x2cd494 = _0x4511f1 - _0x503ce5,
        _0x3c1e39 = Math[_0x27e4c8(0x26d)](Math['sqrt'](_0x12994c * _0x12994c + _0x2cd494 * _0x2cd494));
    return _0x3c1e39;
}

function addCommas(_0x2d8070) {
    var _0x221b8e = a0_0x2f4ee6;
    _0x2d8070 += '', x = _0x2d8070[_0x221b8e(0x2cc)]('.'), x1 = x[0x0], x2 = x[_0x221b8e(0x1a7)] > 0x1 ? '.' + x[0x1] : '';
    var _0x434862 = /(\d+)(\d{3})/;
    while (_0x434862[_0x221b8e(0x2ae)](x1)) {
        x1 = x1['replace'](_0x434862, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

function unique(_0x2101eb) {
    var _0x456473 = a0_0x2f4ee6,
        _0x3cb66d = [];
    return $[_0x456473(0x273)](_0x2101eb, function(_0x4f5670, _0x4af386) {
        var _0x4a350e = _0x456473;
        if ($[_0x4a350e(0x1a2)](_0x4af386, _0x3cb66d) == -0x1) _0x3cb66d['push'](_0x4af386);
    }), _0x3cb66d;
}

function getCenterPosition(_0x8cbed, _0x1ee625, _0x5dfc9e, _0x4e8e11) {
    var _0x192e11 = {
        'x': 0x0,
        'y': 0x0
    };
    return _0x192e11['x'] = (_0x8cbed + _0x5dfc9e) / 0x2, _0x192e11['y'] = (_0x1ee625 + _0x4e8e11) / 0x2, _0x192e11;
}

function getAnglePosition(_0x4ae9c0, _0x4a7afd, _0x5f2ef4) {
    var _0x754e9 = a0_0x2f4ee6,
        _0x341ff0 = {
            'x': 0x0,
            'y': 0x0
        };
    return _0x341ff0['x'] = _0x4ae9c0['x'] + _0x4a7afd * Math['cos'](_0x5f2ef4 * Math['PI'] / 0xb4), _0x341ff0['y'] = _0x4ae9c0['y'] + _0x4a7afd * Math[_0x754e9(0x1e4)](_0x5f2ef4 * Math['PI'] / 0xb4), _0x341ff0;
}

function getAnglePositionByValue(_0x331565, _0x1d0122, _0x2975a7, _0x293655) {
    var _0x32260c = a0_0x2f4ee6,
        _0x120252 = {
            'x': 0x0,
            'y': 0x0
        };
    return _0x120252['x'] = _0x331565 + _0x2975a7 * Math['cos'](_0x293655 * Math['PI'] / 0xb4), _0x120252['y'] = _0x1d0122 + _0x2975a7 * Math[_0x32260c(0x1e4)](_0x293655 * Math['PI'] / 0xb4), _0x120252;
}

function getDirection(_0xc2fdbe, _0x470ad5, _0x5c70d7, _0x1d9ef6) {
    var _0x2f0400 = a0_0x2f4ee6,
        _0x1a5630 = 0xb4 / Math['PI'],
        _0x5230be = -Math[_0x2f0400(0x1cb)](_0x5c70d7 - _0xc2fdbe, _0x1d9ef6 - _0x470ad5) * _0x1a5630;
    return _0x5230be + 0xb4;
}
const enableDesktopAudio = !![],
    enableMobileAudio = !![],
    muteSoundOn = ![],
    muteMusicOn = ![];
var audioOn, soundMute = ![],
    musicMute = ![];
$[a0_0x2f4ee6(0x197)] = {};
var soundID = 0x0,
    soundPushArr = [],
    soundLoopPushArr = [],
    musicPushArr = [];

function playSound(_0x38d4bc, _0x13d92f) {
    var _0x44eadf = a0_0x2f4ee6;
    if (audioOn) {
        var _0x16be9b = soundID;
        soundPushArr[_0x44eadf(0x27c)](_0x16be9b), soundID++;
        var _0x24c751 = _0x13d92f == undefined ? 0x1 : _0x13d92f;
        $['sound'][_0x16be9b] = createjs['Sound'][_0x44eadf(0x1ec)](_0x38d4bc), $[_0x44eadf(0x197)][_0x16be9b][_0x44eadf(0x21f)] = _0x24c751, setSoundVolume(_0x16be9b), $[_0x44eadf(0x197)][_0x16be9b][_0x44eadf(0x22c)](), $['sound'][_0x16be9b]['addEventListener'](_0x44eadf(0x25a), function() {
            var _0x3035ec = _0x44eadf,
                _0x49472d = soundPushArr[_0x3035ec(0x29b)](_0x16be9b);
            _0x49472d != -0x1 && soundPushArr[_0x3035ec(0x1f1)](_0x49472d, 0x1);
        });
    }
}

function playSoundLoop(_0x24402a) {
    var _0x207996 = a0_0x2f4ee6;
    audioOn && ($[_0x207996(0x197)][_0x24402a] == null && (soundLoopPushArr[_0x207996(0x27c)](_0x24402a), $[_0x207996(0x197)][_0x24402a] = createjs[_0x207996(0x256)][_0x207996(0x1ec)](_0x24402a), $['sound'][_0x24402a][_0x207996(0x21f)] = 0x1, setSoundLoopVolume(_0x24402a), $[_0x207996(0x197)][_0x24402a]['removeAllEventListeners'](), $['sound'][_0x24402a][_0x207996(0x1aa)](_0x207996(0x25a), function() {
        var _0x3af54f = _0x207996;
        $['sound'][_0x24402a][_0x3af54f(0x1ec)]();
    })));
}

function toggleSoundLoop(_0x260a10, _0x461c92) {
    var _0x40bad8 = a0_0x2f4ee6;
    audioOn && ($['sound'][_0x260a10] != null && (_0x461c92 ? $[_0x40bad8(0x197)][_0x260a10][_0x40bad8(0x1ec)]() : $[_0x40bad8(0x197)][_0x260a10]['paused'] = !![]));
}

function stopSoundLoop(_0x32b36c) {
    var _0x547475 = a0_0x2f4ee6;
    if (audioOn) {
        if ($[_0x547475(0x197)][_0x32b36c] != null) {
            $[_0x547475(0x197)][_0x32b36c][_0x547475(0x28c)](), $[_0x547475(0x197)][_0x32b36c] = null;
            var _0x462adb = soundLoopPushArr[_0x547475(0x29b)](_0x32b36c);
            _0x462adb != -0x1 && soundLoopPushArr[_0x547475(0x1f1)](_0x462adb, 0x1);
        }
    }
}

function playMusicLoop(_0x2b0165) {
    var _0x2556db = a0_0x2f4ee6;
    audioOn && ($[_0x2556db(0x197)][_0x2b0165] == null && (musicPushArr['push'](_0x2b0165), $['sound'][_0x2b0165] = createjs['Sound'][_0x2556db(0x1ec)](_0x2b0165), $['sound'][_0x2b0165][_0x2556db(0x21f)] = 0x1, setMusicVolume(_0x2b0165), $['sound'][_0x2b0165]['removeAllEventListeners'](), $[_0x2556db(0x197)][_0x2b0165][_0x2556db(0x1aa)](_0x2556db(0x25a), function() {
        var _0x146d35 = _0x2556db;
        $[_0x146d35(0x197)][_0x2b0165]['play']();
    })));
}

function toggleMusicLoop(_0x48676e, _0x2ee5a1) {
    var _0x38efdd = a0_0x2f4ee6;
    audioOn && ($[_0x38efdd(0x197)][_0x48676e] != null && (_0x2ee5a1 ? $['sound'][_0x48676e][_0x38efdd(0x1ec)]() : $[_0x38efdd(0x197)][_0x48676e][_0x38efdd(0x1c4)] = !![]));
}

function stopMusicLoop(_0x377ddd) {
    var _0x499666 = a0_0x2f4ee6;
    if (audioOn) {
        if ($['sound'][_0x377ddd] != null) {
            $[_0x499666(0x197)][_0x377ddd][_0x499666(0x28c)](), $[_0x499666(0x197)][_0x377ddd] = null;
            var _0x44b97c = musicPushArr[_0x499666(0x29b)](_0x377ddd);
            _0x44b97c != -0x1 && musicPushArr[_0x499666(0x1f1)](_0x44b97c, 0x1);
        }
    }
}

function stopSound() {
    var _0x23cca5 = a0_0x2f4ee6;
    createjs[_0x23cca5(0x256)]['stop']();
}

function toggleSoundInMute(_0x39133b) {
    var _0x4ff4e7 = a0_0x2f4ee6;
    if (audioOn) {
        soundMute = _0x39133b;
        for (var _0x41a599 = 0x0; _0x41a599 < soundPushArr['length']; _0x41a599++) {
            setSoundVolume(soundPushArr[_0x41a599]);
        }
        for (var _0x41a599 = 0x0; _0x41a599 < soundLoopPushArr[_0x4ff4e7(0x1a7)]; _0x41a599++) {
            setSoundLoopVolume(soundLoopPushArr[_0x41a599]);
        }
    }
}

function toggleMusicInMute(_0x302a1d) {
    var _0x4fe288 = a0_0x2f4ee6;
    if (audioOn) {
        musicMute = _0x302a1d;
        for (var _0x369391 = 0x0; _0x369391 < musicPushArr[_0x4fe288(0x1a7)]; _0x369391++) {
            setMusicVolume(musicPushArr[_0x369391]);
        }
    }
}

function setSoundVolume(_0x3c1779, _0x4c40eb) {
    var _0x3aeff2 = a0_0x2f4ee6;
    if (audioOn) {
        var _0x11645f = soundPushArr[_0x3aeff2(0x29b)](_0x3c1779);
        if (_0x11645f != -0x1) {
            var _0x131dca = _0x4c40eb == undefined ? $[_0x3aeff2(0x197)][soundPushArr[_0x11645f]]['defaultVol'] : _0x4c40eb,
                _0x167e4a = soundMute == ![] ? _0x131dca : 0x0;
            $[_0x3aeff2(0x197)][soundPushArr[_0x11645f]]['volume'] = _0x167e4a, $['sound'][soundPushArr[_0x11645f]]['defaultVol'] = _0x131dca;
        }
    }
}

function setSoundLoopVolume(_0x41b502, _0x6c5440) {
    var _0x4cb350 = a0_0x2f4ee6;
    if (audioOn) {
        var _0x34053a = soundLoopPushArr['indexOf'](_0x41b502);
        if (_0x34053a != -0x1) {
            var _0x415859 = _0x6c5440 == undefined ? $[_0x4cb350(0x197)][soundLoopPushArr[_0x34053a]][_0x4cb350(0x21f)] : _0x6c5440,
                _0x1675e6 = soundMute == ![] ? _0x415859 : 0x0;
            $['sound'][soundLoopPushArr[_0x34053a]][_0x4cb350(0x2b8)] = _0x1675e6, $[_0x4cb350(0x197)][soundLoopPushArr[_0x34053a]][_0x4cb350(0x21f)] = _0x415859;
        }
    }
}

function setMusicVolume(_0x3e2fe7, _0x167d8e) {
    var _0x4dec91 = a0_0x2f4ee6;
    if (audioOn) {
        var _0x338804 = musicPushArr[_0x4dec91(0x29b)](_0x3e2fe7);
        if (_0x338804 != -0x1) {
            var _0x3282b1 = _0x167d8e == undefined ? $[_0x4dec91(0x197)][musicPushArr[_0x338804]]['defaultVol'] : _0x167d8e,
                _0x3ff3d5 = musicMute == ![] ? _0x3282b1 : 0x0;
            $['sound'][musicPushArr[_0x338804]][_0x4dec91(0x2b8)] = _0x3ff3d5, $[_0x4dec91(0x197)][musicPushArr[_0x338804]][_0x4dec91(0x21f)] = _0x3282b1;
        }
    }
}