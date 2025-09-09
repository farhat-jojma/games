var a0_0x1e1e8b = a0_0x4fe4;
(function(_0x3f1966, _0x2cf57c) {
    var _0x9faa15 = a0_0x4fe4,
        _0x329032 = _0x3f1966();
    while (!![]) {
        try {
            var _0x18a25b = -parseInt(_0x9faa15(0x2fa)) / 0x1 + -parseInt(_0x9faa15(0x26e)) / 0x2 * (-parseInt(_0x9faa15(0x297)) / 0x3) + -parseInt(_0x9faa15(0x2e8)) / 0x4 + parseInt(_0x9faa15(0x30b)) / 0x5 + parseInt(_0x9faa15(0x3d8)) / 0x6 + -parseInt(_0x9faa15(0x1c6)) / 0x7 + parseInt(_0x9faa15(0x29f)) / 0x8 * (-parseInt(_0x9faa15(0x37b)) / 0x9);
            if (_0x18a25b === _0x2cf57c) break;
            else _0x329032['push'](_0x329032['shift']());
        } catch (_0x448830) {
            _0x329032['push'](_0x329032['shift']());
        }
    }
}(a0_0x3964, 0x95707));
var stage, canvasW = 0x0,
    canvasH = 0x0;

function initGameCanvas(_0x289726, _0x34f01e) {
    var _0x3ca359 = a0_0x4fe4;
    const _0x3b404a = document[_0x3ca359(0x290)](_0x3ca359(0x3f2));
    _0x3b404a[_0x3ca359(0x331)] = _0x289726, _0x3b404a[_0x3ca359(0x1ac)] = _0x34f01e, canvasW = _0x289726, canvasH = _0x34f01e, stage = new createjs[(_0x3ca359(0x198))](_0x3ca359(0x3f2), {
        'antialias': !![]
    }), createjs[_0x3ca359(0x1d2)][_0x3ca359(0x36e)](stage), stage['enableMouseOver'](0x14), stage[_0x3ca359(0x193)] = !![], createjs[_0x3ca359(0x1e2)]['timingMode'] = createjs[_0x3ca359(0x1e2)][_0x3ca359(0x426)], createjs[_0x3ca359(0x1e2)][_0x3ca359(0x2d9)] = 0x32, createjs[_0x3ca359(0x1e2)][_0x3ca359(0x3a4)](_0x3ca359(0x35a), tick);
}
var safeZoneGuide = ![],
    canvasContainer, mainContainer, gameContainer, resultContainer, exitContainer, optionsContainer, shareContainer, shareSaveContainer, socialContainer, guideline, bg, bgP, logo, logoP, itemExit, itemExitP, popTitleTxt, popDescTxt, buttonConfirm, buttonCancel, itemResult, itemResultP, buttonContinue, resultTitleTxt, resultDescTxt, buttonShare, buttonSave, resultTitleOutlineTxt, resultDescOutlineTxt, resultShareTxt, resultShareOutlineTxt, popTitleOutlineTxt, popDescOutlineTxt, buttonSettings, buttonFullscreen, buttonSoundOn, buttonSoundOff, buttonMusicOn, buttonMusicOff, buttonExit;
$[a0_0x1e1e8b(0x3a7)] = {};
var buttonLocalContainer, sizeContainer, cardsContainer, numbersContainer, cardsWrapContainer, cardsMoveContainer, bombContainer, particlesContainer, playerStatusContainer, gameStatusContainer, buttonPlay, buttonTutorial, buttonLocal, buttonOnline, itemPopSize, buttonArrowLeft, buttonArrowRight, buttonSizePlay, sizeTitleTxt, sizePlayTxt, itemParticle1, itemParticle2, itemParticle3, itemGameStatus, gameStatusTxt, tutorialTitleTxt, tutorialDescTxt, resultKillTxt, exitTitleTxt, roomContainer, nameContainer, bgRoom, gameLogsTxt;
$['card'] = {}, $['status'] = {};

function buildGameCanvas() {
    var _0x3ee03b = a0_0x1e1e8b;
    canvasContainer = new createjs[(_0x3ee03b(0x1be))](), mainContainer = new createjs[(_0x3ee03b(0x1be))](), gameContainer = new createjs[(_0x3ee03b(0x1be))](), exitContainer = new createjs[(_0x3ee03b(0x1be))](), resultContainer = new createjs[(_0x3ee03b(0x1be))](), shareContainer = new createjs[(_0x3ee03b(0x1be))](), shareSaveContainer = new createjs[(_0x3ee03b(0x1be))](), socialContainer = new createjs[(_0x3ee03b(0x1be))](), buttonLocalContainer = new createjs[(_0x3ee03b(0x1be))](), sizeContainer = new createjs['Container'](), cardsContainer = new createjs[(_0x3ee03b(0x1be))](), numbersContainer = new createjs[(_0x3ee03b(0x1be))](), cardsWrapContainer = new createjs[(_0x3ee03b(0x1be))](), cardsMoveContainer = new createjs[(_0x3ee03b(0x1be))](), bombContainer = new createjs[(_0x3ee03b(0x1be))](), particlesContainer = new createjs[(_0x3ee03b(0x1be))](), playerStatusContainer = new createjs['Container'](), gameStatusContainer = new createjs[(_0x3ee03b(0x1be))](), bg = new createjs[(_0x3ee03b(0x423))](loader['getResult']('bg')), bgP = new createjs[(_0x3ee03b(0x423))](loader[_0x3ee03b(0x419)](_0x3ee03b(0x422))), logo = new createjs[(_0x3ee03b(0x423))](loader[_0x3ee03b(0x419)](_0x3ee03b(0x191))), logoP = new createjs[(_0x3ee03b(0x423))](loader[_0x3ee03b(0x419)](_0x3ee03b(0x194))), buttonPlay = new createjs[(_0x3ee03b(0x423))](loader['getResult']('buttonPlay')), centerReg(buttonPlay), buttonTutorial = new createjs[(_0x3ee03b(0x423))](loader['getResult'](_0x3ee03b(0x3ca))), centerReg(buttonTutorial), buttonLocal = new createjs[(_0x3ee03b(0x423))](loader[_0x3ee03b(0x419)](_0x3ee03b(0x24c))), centerReg(buttonLocal), buttonOnline = new createjs[(_0x3ee03b(0x423))](loader[_0x3ee03b(0x419)](_0x3ee03b(0x40c))), centerReg(buttonOnline), itemPopSize = new createjs[(_0x3ee03b(0x423))](loader[_0x3ee03b(0x419)](_0x3ee03b(0x302))), centerReg(itemPopSize), buttonArrowLeft = new createjs[(_0x3ee03b(0x423))](loader['getResult'](_0x3ee03b(0x367))), centerReg(buttonArrowLeft), buttonArrowRight = new createjs[(_0x3ee03b(0x423))](loader['getResult'](_0x3ee03b(0x3e9))), centerReg(buttonArrowRight), buttonSizePlay = new createjs[(_0x3ee03b(0x423))](loader[_0x3ee03b(0x419)](_0x3ee03b(0x1d3))), centerReg(buttonSizePlay), sizeTitleTxt = new createjs[(_0x3ee03b(0x270))](), sizeTitleTxt[_0x3ee03b(0x3a3)] = _0x3ee03b(0x253), sizeTitleTxt[_0x3ee03b(0x226)] = _0x3ee03b(0x3e2), sizeTitleTxt[_0x3ee03b(0x234)] = _0x3ee03b(0x361), sizeTitleTxt[_0x3ee03b(0x2ad)] = _0x3ee03b(0x26f), sizeTitleTxt[_0x3ee03b(0x3c1)] = textStrings[_0x3ee03b(0x195)], sizePlayTxt = new createjs[(_0x3ee03b(0x270))](), sizePlayTxt[_0x3ee03b(0x3a3)] = _0x3ee03b(0x280), sizePlayTxt[_0x3ee03b(0x226)] = _0x3ee03b(0x3e2), sizePlayTxt[_0x3ee03b(0x234)] = _0x3ee03b(0x361), sizePlayTxt[_0x3ee03b(0x2ad)] = 'alphabetic', sizePlayTxt['text'] = '3\x20X\x203', sizeTitleTxt['y'] = -0x64, sizePlayTxt['y'] = 0x1c, buttonArrowLeft['x'] = -0xb4, buttonArrowRight['x'] = 0xb4, buttonArrowLeft['y'] = buttonArrowRight['y'] = 0x14, buttonSizePlay['y'] = 0x8c, sizeContainer[_0x3ee03b(0x3fb)](itemPopSize, buttonArrowLeft, buttonArrowRight, buttonSizePlay, sizeTitleTxt, sizePlayTxt);
    for (var _0x115d91 = 0x0; _0x115d91 < 0x2; _0x115d91++) {
        $[_0x3ee03b(0x1ec)][_0x115d91] = new createjs[(_0x3ee03b(0x1be))](), $[_0x3ee03b(0x1ec)]['bg' + _0x115d91] = new createjs[(_0x3ee03b(0x423))](loader[_0x3ee03b(0x419)](_0x3ee03b(0x22f))), centerReg($['status']['bg' + _0x115d91]), $['status']['bg' + _0x115d91][_0x3ee03b(0x293)] = 0x0, $['status'][_0x3ee03b(0x29b) + _0x115d91] = new createjs[(_0x3ee03b(0x1be))](), $[_0x3ee03b(0x1ec)][_0x3ee03b(0x273) + _0x115d91] = new createjs[(_0x3ee03b(0x423))](loader[_0x3ee03b(0x419)]('iconCoin')), centerReg($[_0x3ee03b(0x1ec)][_0x3ee03b(0x273) + _0x115d91]), $['status'][_0x3ee03b(0x21b) + _0x115d91] = new createjs[(_0x3ee03b(0x270))](), $[_0x3ee03b(0x1ec)]['coinTxt' + _0x115d91]['font'] = '25px\x20australiatitle', $[_0x3ee03b(0x1ec)][_0x3ee03b(0x21b) + _0x115d91]['color'] = _0x3ee03b(0x3e2), $[_0x3ee03b(0x1ec)][_0x3ee03b(0x21b) + _0x115d91]['textAlign'] = 'center', $[_0x3ee03b(0x1ec)][_0x3ee03b(0x21b) + _0x115d91][_0x3ee03b(0x2ad)] = _0x3ee03b(0x26f), $[_0x3ee03b(0x1ec)]['coinTxt' + _0x115d91][_0x3ee03b(0x3c1)] = '000', $[_0x3ee03b(0x1ec)][_0x3ee03b(0x1a0) + _0x115d91] = new createjs['Bitmap'](loader[_0x3ee03b(0x419)]('iconKill')), centerReg($[_0x3ee03b(0x1ec)][_0x3ee03b(0x1a0) + _0x115d91]), $[_0x3ee03b(0x1ec)][_0x3ee03b(0x230) + _0x115d91] = new createjs['Text'](), $[_0x3ee03b(0x1ec)][_0x3ee03b(0x230) + _0x115d91][_0x3ee03b(0x3a3)] = _0x3ee03b(0x39d), $[_0x3ee03b(0x1ec)][_0x3ee03b(0x230) + _0x115d91][_0x3ee03b(0x226)] = _0x3ee03b(0x3e2), $['status']['killTxt' + _0x115d91][_0x3ee03b(0x234)] = 'center', $[_0x3ee03b(0x1ec)][_0x3ee03b(0x230) + _0x115d91][_0x3ee03b(0x2ad)] = _0x3ee03b(0x26f), $['status'][_0x3ee03b(0x230) + _0x115d91][_0x3ee03b(0x3c1)] = _0x3ee03b(0x2f6), $[_0x3ee03b(0x1ec)][_0x3ee03b(0x21a) + _0x115d91] = new createjs[(_0x3ee03b(0x270))](), $[_0x3ee03b(0x1ec)]['playerNameTxt' + _0x115d91][_0x3ee03b(0x3a3)] = '20px\x20australiatitle', $[_0x3ee03b(0x1ec)]['playerNameTxt' + _0x115d91]['color'] = '#fff', $[_0x3ee03b(0x1ec)]['playerNameTxt' + _0x115d91][_0x3ee03b(0x234)] = _0x3ee03b(0x361), $[_0x3ee03b(0x1ec)][_0x3ee03b(0x21a) + _0x115d91]['textBaseline'] = _0x3ee03b(0x26f), $[_0x3ee03b(0x1ec)]['playerNameTxt' + _0x115d91]['text'] = _0x3ee03b(0x371), $[_0x3ee03b(0x1ec)]['iconHilight' + _0x115d91] = new createjs[(_0x3ee03b(0x1cc))](), $['status'][_0x3ee03b(0x2a4) + _0x115d91]['graphics'][_0x3ee03b(0x1b3)](_0x3ee03b(0x21f))[_0x3ee03b(0x217)](0x0, 0x0, 0x21), $[_0x3ee03b(0x1ec)][_0x3ee03b(0x220) + _0x115d91] = new createjs['Bitmap'](loader[_0x3ee03b(0x419)](_0x3ee03b(0x405))), centerReg($[_0x3ee03b(0x1ec)]['statsName' + _0x115d91]);
        if (_0x115d91 == 0x0) $[_0x3ee03b(0x1ec)][_0x3ee03b(0x29b) + _0x115d91]['x'] = $[_0x3ee03b(0x1ec)]['iconHilight' + _0x115d91]['x'] = 0x2e, $[_0x3ee03b(0x1ec)]['coin' + _0x115d91]['x'] = 0x6e, $['status'][_0x3ee03b(0x21b) + _0x115d91]['x'] = $[_0x3ee03b(0x1ec)]['coin' + _0x115d91]['x'] + 0x23, $[_0x3ee03b(0x1ec)]['coinTxt' + _0x115d91]['y'] = 0x9, $[_0x3ee03b(0x1ec)]['kill' + _0x115d91]['x'] = 0xb4, $['status'][_0x3ee03b(0x230) + _0x115d91]['x'] = $[_0x3ee03b(0x1ec)]['kill' + _0x115d91]['x'] + 0x23, $[_0x3ee03b(0x1ec)]['killTxt' + _0x115d91]['y'] = 0x9, $['status'][_0x3ee03b(0x220) + _0x115d91]['x'] = 0xa0, $[_0x3ee03b(0x1ec)][_0x3ee03b(0x220) + _0x115d91]['y'] = -0x23, $[_0x3ee03b(0x1ec)][_0x3ee03b(0x21a) + _0x115d91]['x'] = $[_0x3ee03b(0x1ec)]['statsName' + _0x115d91]['x'], $[_0x3ee03b(0x1ec)][_0x3ee03b(0x21a) + _0x115d91]['y'] = $['status'][_0x3ee03b(0x220) + _0x115d91]['y'] + 0x3;
        else _0x115d91 == 0x1 && ($[_0x3ee03b(0x1ec)]['bg' + _0x115d91][_0x3ee03b(0x2b8)] = -0x1, $[_0x3ee03b(0x1ec)][_0x3ee03b(0x29b) + _0x115d91][_0x3ee03b(0x2b8)] = -0x1, $[_0x3ee03b(0x1ec)][_0x3ee03b(0x29b) + _0x115d91]['x'] = $[_0x3ee03b(0x1ec)]['iconHilight' + _0x115d91]['x'] = -0x2e, $[_0x3ee03b(0x1ec)]['coin' + _0x115d91]['x'] = -0x91, $['status']['coinTxt' + _0x115d91]['x'] = $['status'][_0x3ee03b(0x273) + _0x115d91]['x'] + 0x23, $['status']['coinTxt' + _0x115d91]['y'] = 0x9, $[_0x3ee03b(0x1ec)][_0x3ee03b(0x1a0) + _0x115d91]['x'] = -0xd7, $[_0x3ee03b(0x1ec)][_0x3ee03b(0x230) + _0x115d91]['x'] = $['status'][_0x3ee03b(0x1a0) + _0x115d91]['x'] + 0x23, $[_0x3ee03b(0x1ec)][_0x3ee03b(0x230) + _0x115d91]['y'] = 0x9, $[_0x3ee03b(0x1ec)][_0x3ee03b(0x220) + _0x115d91]['x'] = -0xa0, $['status'][_0x3ee03b(0x220) + _0x115d91]['y'] = -0x23, $[_0x3ee03b(0x1ec)][_0x3ee03b(0x21a) + _0x115d91]['x'] = $[_0x3ee03b(0x1ec)]['statsName' + _0x115d91]['x'], $['status'][_0x3ee03b(0x21a) + _0x115d91]['y'] = $[_0x3ee03b(0x1ec)][_0x3ee03b(0x220) + _0x115d91]['y'] + 0x5);
        $[_0x3ee03b(0x1ec)][_0x115d91][_0x3ee03b(0x3fb)]($[_0x3ee03b(0x1ec)]['statsName' + _0x115d91], $['status']['bg' + _0x115d91], $['status'][_0x3ee03b(0x273) + _0x115d91], $[_0x3ee03b(0x1ec)][_0x3ee03b(0x21b) + _0x115d91], $[_0x3ee03b(0x1ec)]['kill' + _0x115d91], $[_0x3ee03b(0x1ec)]['killTxt' + _0x115d91], $['status'][_0x3ee03b(0x2a4) + _0x115d91], $[_0x3ee03b(0x1ec)][_0x3ee03b(0x29b) + _0x115d91], $[_0x3ee03b(0x1ec)][_0x3ee03b(0x21a) + _0x115d91]), playerStatusContainer[_0x3ee03b(0x3fb)]($[_0x3ee03b(0x1ec)][_0x115d91]);
    }
    itemParticle1 = new createjs[(_0x3ee03b(0x423))](loader[_0x3ee03b(0x419)](_0x3ee03b(0x2c7))), centerReg(itemParticle1), itemParticle2 = new createjs['Bitmap'](loader[_0x3ee03b(0x419)](_0x3ee03b(0x36f))), centerReg(itemParticle2), itemParticle3 = new createjs[(_0x3ee03b(0x423))](loader[_0x3ee03b(0x419)](_0x3ee03b(0x2df))), centerReg(itemParticle3), itemGameStatus = new createjs[(_0x3ee03b(0x423))](loader[_0x3ee03b(0x419)](_0x3ee03b(0x1df))), centerReg(itemGameStatus), gameStatusTxt = new createjs[(_0x3ee03b(0x270))](), gameStatusTxt[_0x3ee03b(0x3a3)] = '35px\x20australiatitle', gameStatusTxt[_0x3ee03b(0x226)] = _0x3ee03b(0x3e2), gameStatusTxt[_0x3ee03b(0x234)] = _0x3ee03b(0x361), gameStatusTxt[_0x3ee03b(0x2ad)] = _0x3ee03b(0x26f), gameStatusTxt[_0x3ee03b(0x3c1)] = textStrings[_0x3ee03b(0x195)], gameStatusTxt['y'] = 0xd, gameStatusContainer[_0x3ee03b(0x3fb)](itemGameStatus, gameStatusTxt), tutorialTitleTxt = new createjs[(_0x3ee03b(0x270))](), tutorialTitleTxt[_0x3ee03b(0x3a3)] = _0x3ee03b(0x253), tutorialTitleTxt['color'] = _0x3ee03b(0x3e2), tutorialTitleTxt[_0x3ee03b(0x234)] = _0x3ee03b(0x361), tutorialTitleTxt[_0x3ee03b(0x2ad)] = _0x3ee03b(0x26f), tutorialTitleTxt[_0x3ee03b(0x3c1)] = textStrings['tutorialTitle'], tutorialDescTxt = new createjs['Text'](), tutorialDescTxt[_0x3ee03b(0x3a3)] = '30px\x20australiatitle', tutorialDescTxt[_0x3ee03b(0x298)] = 0x1e, tutorialDescTxt[_0x3ee03b(0x226)] = _0x3ee03b(0x3e2), tutorialDescTxt[_0x3ee03b(0x234)] = _0x3ee03b(0x361), tutorialDescTxt[_0x3ee03b(0x2ad)] = _0x3ee03b(0x26f), tutorialDescTxt[_0x3ee03b(0x3c1)] = textStrings[_0x3ee03b(0x3a7)], itemResult = new createjs[(_0x3ee03b(0x423))](loader['getResult'](_0x3ee03b(0x355))), itemResultP = new createjs[(_0x3ee03b(0x423))](loader[_0x3ee03b(0x419)](_0x3ee03b(0x425))), buttonContinue = new createjs[(_0x3ee03b(0x423))](loader[_0x3ee03b(0x419)](_0x3ee03b(0x29c))), centerReg(buttonContinue), resultShareTxt = new createjs[(_0x3ee03b(0x270))](), resultShareTxt[_0x3ee03b(0x3a3)] = _0x3ee03b(0x2e9), resultShareTxt['color'] = _0x3ee03b(0x3e2), resultShareTxt[_0x3ee03b(0x234)] = _0x3ee03b(0x361), resultShareTxt[_0x3ee03b(0x2ad)] = _0x3ee03b(0x26f), resultShareTxt[_0x3ee03b(0x3c1)] = textStrings[_0x3ee03b(0x3a7)], resultKillTxt = new createjs[(_0x3ee03b(0x270))](), resultKillTxt[_0x3ee03b(0x3a3)] = '35px\x20australiatitle', resultKillTxt['color'] = _0x3ee03b(0x39e), resultKillTxt['textAlign'] = _0x3ee03b(0x361), resultKillTxt[_0x3ee03b(0x2ad)] = _0x3ee03b(0x26f), resultKillTxt[_0x3ee03b(0x3c1)] = textStrings[_0x3ee03b(0x3a7)], resultDescTxt = new createjs['Text'](), resultDescTxt[_0x3ee03b(0x3a3)] = _0x3ee03b(0x20c), resultDescTxt[_0x3ee03b(0x226)] = _0x3ee03b(0x279), resultDescTxt['textAlign'] = _0x3ee03b(0x361), resultDescTxt['textBaseline'] = _0x3ee03b(0x26f), resultDescTxt[_0x3ee03b(0x3c1)] = '', resultTitleTxt = new createjs[(_0x3ee03b(0x270))](), resultTitleTxt[_0x3ee03b(0x3a3)] = '65px\x20australiatitle', resultTitleTxt[_0x3ee03b(0x226)] = '#fff', resultTitleTxt['textAlign'] = _0x3ee03b(0x361), resultTitleTxt[_0x3ee03b(0x2ad)] = _0x3ee03b(0x26f), resultTitleTxt[_0x3ee03b(0x3c1)] = textStrings[_0x3ee03b(0x407)], socialContainer[_0x3ee03b(0x23a)] = ![], socialContainer['scale'] = 0.7, shareContainer[_0x3ee03b(0x3fb)](resultShareTxt, socialContainer);
    if (shareSettings['enable']) {
        buttonShare = new createjs[(_0x3ee03b(0x423))](loader[_0x3ee03b(0x419)](_0x3ee03b(0x3d2))), centerReg(buttonShare);
        var _0x4c9d14 = {
            'x': 0x0,
            'y': 0x2d,
            'spaceX': 0x41
        };
        _0x4c9d14['x'] = -((shareSettings[_0x3ee03b(0x27e)][_0x3ee03b(0x42b)] - 0x1) * _0x4c9d14[_0x3ee03b(0x362)] / 0x2);
        for (let _0x7ca421 = 0x0; _0x7ca421 < shareSettings[_0x3ee03b(0x27e)][_0x3ee03b(0x42b)]; _0x7ca421++) {
            var _0x33d0f0 = shareSettings[_0x3ee03b(0x27e)][_0x7ca421],
                _0x1639fb = String(_0x33d0f0[0x0])[_0x3ee03b(0x424)]() + String(_0x33d0f0)[_0x3ee03b(0x39f)](0x1);
            $[_0x3ee03b(0x3a7)][_0x3ee03b(0x3ef) + _0x7ca421] = new createjs['Bitmap'](loader[_0x3ee03b(0x419)](_0x3ee03b(0x3ef) + _0x1639fb)), $['share'][_0x3ee03b(0x3ef) + _0x7ca421]['shareOption'] = _0x33d0f0, centerReg($['share'][_0x3ee03b(0x3ef) + _0x7ca421]), $[_0x3ee03b(0x3a7)][_0x3ee03b(0x3ef) + _0x7ca421]['x'] = _0x4c9d14['x'], $['share'][_0x3ee03b(0x3ef) + _0x7ca421]['y'] = _0x4c9d14['y'], socialContainer[_0x3ee03b(0x3fb)]($[_0x3ee03b(0x3a7)][_0x3ee03b(0x3ef) + _0x7ca421]), _0x4c9d14['x'] += _0x4c9d14[_0x3ee03b(0x362)];
        }
        buttonShare['y'] = buttonShare[_0x3ee03b(0x252)][_0x3ee03b(0x3ce)] / 0x2 + 0xa, shareContainer[_0x3ee03b(0x3fb)](buttonShare);
    }
    typeof toggleScoreboardSave == _0x3ee03b(0x2fc) && (buttonSave = new createjs['Bitmap'](loader[_0x3ee03b(0x419)](_0x3ee03b(0x1ee))), centerReg(buttonSave), buttonSave['y'] = buttonSave[_0x3ee03b(0x252)]['naturalHeight'] / 0x2 + 0xa, shareSaveContainer[_0x3ee03b(0x3fb)](buttonSave)), buttonFullscreen = new createjs['Bitmap'](loader[_0x3ee03b(0x419)](_0x3ee03b(0x2b0))), centerReg(buttonFullscreen), buttonSoundOn = new createjs[(_0x3ee03b(0x423))](loader[_0x3ee03b(0x419)]('buttonSoundOn')), centerReg(buttonSoundOn), buttonSoundOff = new createjs[(_0x3ee03b(0x423))](loader[_0x3ee03b(0x419)](_0x3ee03b(0x1ae))), centerReg(buttonSoundOff), buttonSoundOn[_0x3ee03b(0x23a)] = ![], buttonMusicOn = new createjs['Bitmap'](loader[_0x3ee03b(0x419)](_0x3ee03b(0x1cd))), centerReg(buttonMusicOn), buttonMusicOff = new createjs[(_0x3ee03b(0x423))](loader[_0x3ee03b(0x419)](_0x3ee03b(0x41a))), centerReg(buttonMusicOff), buttonMusicOn['visible'] = ![], buttonExit = new createjs[(_0x3ee03b(0x423))](loader[_0x3ee03b(0x419)]('buttonExit')), centerReg(buttonExit), buttonSettings = new createjs[(_0x3ee03b(0x423))](loader[_0x3ee03b(0x419)](_0x3ee03b(0x3cd))), centerReg(buttonSettings), createHitarea(buttonFullscreen), createHitarea(buttonSoundOn), createHitarea(buttonSoundOff), createHitarea(buttonMusicOn), createHitarea(buttonMusicOff), createHitarea(buttonExit), createHitarea(buttonSettings), optionsContainer = new createjs[(_0x3ee03b(0x1be))](), optionsContainer[_0x3ee03b(0x3fb)](buttonFullscreen, buttonSoundOn, buttonSoundOff, buttonMusicOn, buttonMusicOff, buttonExit), optionsContainer[_0x3ee03b(0x23a)] = ![], itemExit = new createjs['Bitmap'](loader[_0x3ee03b(0x419)](_0x3ee03b(0x355))), itemExitP = new createjs[(_0x3ee03b(0x423))](loader[_0x3ee03b(0x419)](_0x3ee03b(0x425))), buttonConfirm = new createjs[(_0x3ee03b(0x423))](loader[_0x3ee03b(0x419)](_0x3ee03b(0x38a))), centerReg(buttonConfirm), buttonCancel = new createjs[(_0x3ee03b(0x423))](loader[_0x3ee03b(0x419)]('buttonCancel')), centerReg(buttonCancel), popDescTxt = new createjs[(_0x3ee03b(0x270))](), popDescTxt[_0x3ee03b(0x3a3)] = _0x3ee03b(0x314), popDescTxt[_0x3ee03b(0x298)] = 0x28, popDescTxt[_0x3ee03b(0x226)] = _0x3ee03b(0x3e2), popDescTxt[_0x3ee03b(0x234)] = _0x3ee03b(0x361), popDescTxt[_0x3ee03b(0x2ad)] = _0x3ee03b(0x26f), popDescTxt[_0x3ee03b(0x3c1)] = textStrings[_0x3ee03b(0x3f8)], exitTitleTxt = new createjs[(_0x3ee03b(0x270))](), exitTitleTxt[_0x3ee03b(0x3a3)] = _0x3ee03b(0x253), exitTitleTxt[_0x3ee03b(0x226)] = _0x3ee03b(0x3e2), exitTitleTxt[_0x3ee03b(0x234)] = 'center', exitTitleTxt['textBaseline'] = 'alphabetic', exitTitleTxt[_0x3ee03b(0x3c1)] = textStrings['exitTitle'], exitContainer['addChild'](itemExit, itemExitP, popDescTxt, exitTitleTxt, buttonConfirm, buttonCancel), exitContainer['visible'] = ![], roomContainer = new createjs[(_0x3ee03b(0x1be))](), nameContainer = new createjs['Container'](), bgRoom = new createjs[(_0x3ee03b(0x1cc))](), bgRoom[_0x3ee03b(0x1c9)][_0x3ee03b(0x1b3)](_0x3ee03b(0x286))[_0x3ee03b(0x294)](-(landscapeSize['w'] / 0x2), -(portraitSize['h'] / 0x2), landscapeSize['w'], portraitSize['h']), bgRoom[_0x3ee03b(0x28b)] = 0.6, gameLogsTxt = new createjs[(_0x3ee03b(0x270))](), gameLogsTxt[_0x3ee03b(0x3a3)] = '25px\x20russo_oneregular', gameLogsTxt[_0x3ee03b(0x226)] = '#fff', gameLogsTxt[_0x3ee03b(0x234)] = 'center', gameLogsTxt[_0x3ee03b(0x2ad)] = 'alphabetic', gameLogsTxt[_0x3ee03b(0x3c1)] = '', guideline = new createjs[(_0x3ee03b(0x1cc))](), buttonLocalContainer['addChild'](buttonLocal, buttonOnline), mainContainer['addChild'](logo, logoP, buttonPlay, buttonTutorial, buttonLocalContainer), cardsMoveContainer[_0x3ee03b(0x3fb)](cardsContainer, particlesContainer, bombContainer, numbersContainer), cardsWrapContainer[_0x3ee03b(0x3fb)](cardsMoveContainer), gameContainer[_0x3ee03b(0x3fb)](cardsWrapContainer, playerStatusContainer, gameStatusContainer, tutorialDescTxt, tutorialTitleTxt), resultContainer[_0x3ee03b(0x3fb)](itemResult, itemResultP, buttonContinue, resultDescTxt, resultTitleTxt, resultKillTxt, shareContainer, shareSaveContainer), canvasContainer[_0x3ee03b(0x3fb)](bg, bgP, mainContainer, sizeContainer, gameContainer, gameLogsTxt, resultContainer, exitContainer, optionsContainer, buttonSettings, guideline), stage['addChild'](canvasContainer), changeViewport(viewport[_0x3ee03b(0x287)]), resizeGameFunc();
}

function changeViewport(_0x305941) {
    _0x305941 ? (stageW = landscapeSize['w'], stageH = landscapeSize['h'], contentW = landscapeSize['cW'], contentH = landscapeSize['cH']) : (stageW = portraitSize['w'], stageH = portraitSize['h'], contentW = portraitSize['cW'], contentH = portraitSize['cH']), canvasW = stageW, canvasH = stageH, changeCanvasViewport();
}

function changeCanvasViewport() {
    var _0x18fa44 = a0_0x1e1e8b;
    canvasContainer != undefined && (stage[_0x18fa44(0x2b8)] = stage[_0x18fa44(0x311)] = dpr, safeZoneGuide && guideline[_0x18fa44(0x1c9)][_0x18fa44(0x1fc)]()[_0x18fa44(0x3bf)](0x2)[_0x18fa44(0x3cf)](_0x18fa44(0x1fe))['drawRect']((stageW - contentW) / 0x2, (stageH - contentH) / 0x2, contentW, contentH), gameStatusContainer['x'] = canvasW / 0x2, gameStatusContainer['y'] = canvasH / 0x2, viewport[_0x18fa44(0x287)] ? (bg[_0x18fa44(0x23a)] = !![], bgP['visible'] = ![], logo[_0x18fa44(0x23a)] = !![], logoP[_0x18fa44(0x23a)] = ![], buttonPlay['x'] = canvasW / 0x2 - 0x6e, buttonPlay['y'] = canvasH / 0x64 * 0x50, buttonTutorial['x'] = canvasW / 0x2 + 0x6e, buttonTutorial['y'] = canvasH / 0x64 * 0x50, buttonLocal['x'] = canvasW / 0x2 - 0x6e, buttonLocal['y'] = canvasH / 0x64 * 0x50, buttonOnline['x'] = canvasW / 0x2 + 0x6e, buttonOnline['y'] = canvasH / 0x64 * 0x50, sizeContainer['x'] = canvasW / 0x2, sizeContainer['y'] = canvasH / 0x2, itemResult[_0x18fa44(0x23a)] = !![], itemResultP[_0x18fa44(0x23a)] = ![], buttonContinue['x'] = canvasW / 0x2, buttonContinue['y'] = canvasH / 0x64 * 0x47, shareContainer['x'] = shareSaveContainer['x'] = canvasW / 0x2, shareContainer['y'] = shareSaveContainer['y'] = canvasH / 0x64 * 0x36, resultDescTxt['x'] = canvasW / 0x2, resultDescTxt['y'] = canvasH / 0x64 * 0x30, resultKillTxt['x'] = canvasW / 0x2, resultKillTxt['y'] = canvasH / 0x64 * 0x27, resultTitleTxt['x'] = canvasW / 0x2, resultTitleTxt['y'] = canvasH / 0x64 * 0x21, itemExit['visible'] = !![], itemExitP['visible'] = ![], buttonConfirm['x'] = canvasW / 0x2, buttonConfirm['y'] = canvasH / 0x64 * 0x3f, buttonCancel['x'] = canvasW / 0x2, buttonCancel['y'] = canvasH / 0x64 * 0x49, popDescTxt['x'] = canvasW / 0x2, popDescTxt['y'] = canvasH / 0x64 * 0x29, exitTitleTxt['x'] = canvasW / 0x2, exitTitleTxt['y'] = canvasH / 0x64 * 0x21, $(_0x18fa44(0x3c6))[_0x18fa44(0x231)](_0x18fa44(0x24d)), $(_0x18fa44(0x2c3))[_0x18fa44(0x231)](_0x18fa44(0x24d)), $('#roomlists')[_0x18fa44(0x207)](_0x18fa44(0x2eb), 0xa), $(_0x18fa44(0x347))[_0x18fa44(0x207)](_0x18fa44(0x2eb), 0xa), $('#roomLogs')[_0x18fa44(0x207)]('rows', 0xa)) : (bg[_0x18fa44(0x23a)] = ![], bgP[_0x18fa44(0x23a)] = !![], logo[_0x18fa44(0x23a)] = ![], logoP['visible'] = !![], buttonPlay['x'] = canvasW / 0x2, buttonPlay['y'] = canvasH / 0x64 * 0x46, buttonTutorial['x'] = canvasW / 0x2, buttonTutorial['y'] = canvasH / 0x64 * 0x4e, buttonLocal['x'] = canvasW / 0x2, buttonLocal['y'] = canvasH / 0x64 * 0x46, buttonOnline['x'] = canvasW / 0x2, buttonOnline['y'] = canvasH / 0x64 * 0x4e, sizeContainer['x'] = canvasW / 0x2, sizeContainer['y'] = canvasH / 0x2, itemResult[_0x18fa44(0x23a)] = ![], itemResultP[_0x18fa44(0x23a)] = !![], buttonContinue['x'] = canvasW / 0x2, buttonContinue['y'] = canvasH / 0x64 * 0x43, shareContainer['x'] = shareSaveContainer['x'] = canvasW / 0x2, shareContainer['y'] = shareSaveContainer['y'] = canvasH / 0x64 * 0x35, resultDescTxt['x'] = canvasW / 0x2, resultDescTxt['y'] = canvasH / 0x64 * 0x31, resultKillTxt['x'] = canvasW / 0x2, resultKillTxt['y'] = canvasH / 0x64 * 0x2a, resultTitleTxt['x'] = canvasW / 0x2, resultTitleTxt['y'] = canvasH / 0x64 * 0x26, itemExit[_0x18fa44(0x23a)] = ![], itemExitP[_0x18fa44(0x23a)] = !![], buttonConfirm['x'] = canvasW / 0x2, buttonConfirm['y'] = canvasH / 0x64 * 0x3c, buttonCancel['x'] = canvasW / 0x2, buttonCancel['y'] = canvasH / 0x64 * 0x43, popDescTxt['x'] = canvasW / 0x2, popDescTxt['y'] = canvasH / 0x64 * 0x2d, exitTitleTxt['x'] = canvasW / 0x2, exitTitleTxt['y'] = canvasH / 0x64 * 0x26, $(_0x18fa44(0x3c6))[_0x18fa44(0x37d)](_0x18fa44(0x24d)), $('#notificationHolder')[_0x18fa44(0x37d)](_0x18fa44(0x24d)), $(_0x18fa44(0x1f5))['attr'](_0x18fa44(0x2eb), 0x8), $('#namelists')[_0x18fa44(0x207)](_0x18fa44(0x2eb), 0x8), $('#roomLogs')[_0x18fa44(0x207)]('rows', 0x6)));
}

function resizeCanvas() {
    var _0x12a0d8 = a0_0x1e1e8b;
    if (canvasContainer != undefined) {
        buttonSettings['x'] = canvasW - offset['x'] - 0x32, buttonSettings['y'] = offset['y'] + 0x2d;
        var _0x3d6792 = 0x41,
            _0x29e513 = 0x0;
        buttonSoundOn['x'] = buttonSoundOff['x'] = buttonSettings['x'], buttonSoundOn['y'] = buttonSoundOff['y'] = buttonSettings['y'] + _0x3d6792, buttonSoundOn['x'] = buttonSoundOff['x'], buttonSoundOn['y'] = buttonSoundOff['y'] = buttonSettings['y'] + _0x3d6792, typeof buttonMusicOn != 'undefined' ? (buttonMusicOn['x'] = buttonMusicOff['x'] = buttonSettings['x'], buttonMusicOn['y'] = buttonMusicOff['y'] = buttonSettings['y'] + _0x3d6792 * 0x2, buttonMusicOn['x'] = buttonMusicOff['x'], buttonMusicOn['y'] = buttonMusicOff['y'] = buttonSettings['y'] + _0x3d6792 * 0x2, _0x29e513 = 0x2) : _0x29e513 = 0x1, buttonFullscreen['x'] = buttonSettings['x'], buttonFullscreen['y'] = buttonSettings['y'] + _0x3d6792 * (_0x29e513 + 0x1), curPage == _0x12a0d8(0x3c8) || curPage == 'result' ? (buttonExit[_0x12a0d8(0x23a)] = ![], buttonFullscreen['x'] = buttonSettings['x'], buttonFullscreen['y'] = buttonSettings['y'] + _0x3d6792 * (_0x29e513 + 0x1)) : (buttonExit[_0x12a0d8(0x23a)] = !![], buttonExit['x'] = buttonSettings['x'], buttonExit['y'] = buttonSettings['y'] + _0x3d6792 * (_0x29e513 + 0x2)), resizeGameLayout(), resizeSocketLog();
    }
}

function removeGameCanvas() {
    var _0x1e1fbd = a0_0x1e1e8b;
    stage[_0x1e1fbd(0x2f5)] = !![], stage[_0x1e1fbd(0x23f)](), stage[_0x1e1fbd(0x225)](), createjs[_0x1e1fbd(0x1e2)]['removeEventListener'](_0x1e1fbd(0x35a), tick), createjs[_0x1e1fbd(0x1e2)]['removeEventListener'](_0x1e1fbd(0x35a), stage);
}

function tick(_0x109f60) {
    var _0x2f3f31 = a0_0x1e1e8b;
    updateGame(_0x109f60), stage[_0x2f3f31(0x225)](_0x109f60);
}

function centerReg(_0x366ba6) {
    var _0x10bc9f = a0_0x1e1e8b;
    _0x366ba6[_0x10bc9f(0x293)] = _0x366ba6[_0x10bc9f(0x252)][_0x10bc9f(0x204)] / 0x2, _0x366ba6[_0x10bc9f(0x1e5)] = _0x366ba6[_0x10bc9f(0x252)][_0x10bc9f(0x3ce)] / 0x2;
}

function createHitarea(_0x2a870b) {
    var _0x38bd38 = a0_0x1e1e8b;
    _0x2a870b['hitArea'] = new createjs['Shape'](new createjs['Graphics']()['beginFill'](_0x38bd38(0x286))['drawRect'](0x0, 0x0, _0x2a870b['image'][_0x38bd38(0x204)], _0x2a870b[_0x38bd38(0x252)][_0x38bd38(0x3ce)]));
}
const cardDesign = [{
        'width': 0x78,
        'height': 0xaa,
        'margin': 0xf,
        'cover': a0_0x1e1e8b(0x23d),
        'type1': a0_0x1e1e8b(0x1d8),
        'type2': a0_0x1e1e8b(0x1b6),
        'type3': a0_0x1e1e8b(0x24b),
        'type4': a0_0x1e1e8b(0x18f),
        'hit': a0_0x1e1e8b(0x1a2),
        'focus': a0_0x1e1e8b(0x2e1),
        'stroke': a0_0x1e1e8b(0x26b),
        'positions': [{
            'x': 0x0,
            'y': -0x4b
        }, {
            'x': -0x18,
            'y': 0x4b
        }, {
            'x': 0x18,
            'y': 0x4b
        }],
        'icon': {
            'x': 0x0,
            'y': -0x8
        },
        'name': {
            'fontSize': 0x12,
            'fontX': 0x0,
            'fontY': 0x32
        },
        'health': {
            'icon': a0_0x1e1e8b(0x1f4),
            'fontSize': 0xf,
            'fontX': 0x0,
            'fontY': 0x5
        },
        'coin': {
            'icon': a0_0x1e1e8b(0x1ea),
            'fontSize': 0xf,
            'fontX': 0x0,
            'fontY': 0x5
        },
        'damage': {
            'icon': 'assets/card_badge_damage.png',
            'fontSize': 0xf,
            'fontX': 0x0,
            'fontY': 0x5
        },
        'shield': {
            'icon': a0_0x1e1e8b(0x363),
            'fontSize': 0xf,
            'fontX': 0x0,
            'fontY': 0x5
        }
    }],
    cardCharacter = [{
        'body': a0_0x1e1e8b(0x348),
        'leg': 'assets/card_cha_leg_1.png',
        'icon': 'assets/item_player_icon1.png'
    }, {
        'body': 'assets/card_cha_body_2.png',
        'leg': a0_0x1e1e8b(0x3a6),
        'icon': 'assets/item_player_icon2.png'
    }],
    cardTypes = [{
        'icon': a0_0x1e1e8b(0x1fd),
        'iconSecond': '',
        'iconWeapon': '',
        'iconShield': '',
        'iconPlayer': '',
        'coin': 0x0,
        'damage': 0x0,
        'shield': 0x0,
        'health': 0x0,
        'type': 'none',
        'name': ''
    }, {
        'icon': a0_0x1e1e8b(0x3f9),
        'iconSecond': '',
        'iconWeapon': '',
        'iconShield': '',
        'iconPlayer': '',
        'coin': 0x0,
        'damage': 0x0,
        'shield': 0x0,
        'health': 0x0,
        'type': a0_0x1e1e8b(0x1f7),
        'name': ''
    }, {
        'icon': a0_0x1e1e8b(0x296),
        'iconSecond': '',
        'iconWeapon': '',
        'iconShield': '',
        'iconPlayer': '',
        'coin': 0x0,
        'damage': 0x0,
        'shield': 0x0,
        'health': 0x1,
        'type': 'health',
        'name': a0_0x1e1e8b(0x372)
    }, {
        'icon': a0_0x1e1e8b(0x296),
        'iconSecond': '',
        'iconWeapon': '',
        'iconShield': '',
        'iconPlayer': '',
        'coin': 0x0,
        'damage': 0x0,
        'shield': 0x0,
        'health': 0x2,
        'type': a0_0x1e1e8b(0x2f2),
        'name': 'HEALTH'
    }, {
        'icon': a0_0x1e1e8b(0x296),
        'iconSecond': '',
        'iconWeapon': '',
        'iconShield': '',
        'iconPlayer': '',
        'coin': 0x0,
        'damage': 0x0,
        'shield': 0x0,
        'health': 0x3,
        'type': a0_0x1e1e8b(0x2f2),
        'name': a0_0x1e1e8b(0x372)
    }, {
        'icon': a0_0x1e1e8b(0x409),
        'iconSecond': '',
        'iconWeapon': '',
        'iconShield': '',
        'iconPlayer': '',
        'coin': 0x1,
        'damage': 0x0,
        'shield': 0x0,
        'health': 0x0,
        'type': a0_0x1e1e8b(0x273),
        'name': ''
    }, {
        'icon': a0_0x1e1e8b(0x2a2),
        'iconSecond': '',
        'iconWeapon': '',
        'iconShield': '',
        'iconPlayer': '',
        'coin': 0x2,
        'damage': 0x0,
        'shield': 0x0,
        'health': 0x0,
        'type': a0_0x1e1e8b(0x273),
        'name': ''
    }, {
        'icon': a0_0x1e1e8b(0x236),
        'iconSecond': '',
        'iconWeapon': '',
        'iconShield': '',
        'iconPlayer': '',
        'coin': 0x3,
        'damage': 0x0,
        'shield': 0x0,
        'health': 0x0,
        'type': a0_0x1e1e8b(0x273),
        'name': ''
    }, {
        'icon': a0_0x1e1e8b(0x3fc),
        'iconSecond': '',
        'iconWeapon': '',
        'iconShield': '',
        'iconPlayer': '',
        'coin': 0x4,
        'damage': 0x0,
        'shield': 0x0,
        'health': 0x0,
        'type': 'coin',
        'name': ''
    }, {
        'icon': a0_0x1e1e8b(0x3b5),
        'iconSecond': '',
        'iconWeapon': '',
        'iconShield': '',
        'iconPlayer': '',
        'coin': 0x8,
        'damage': 0x0,
        'shield': 0x0,
        'health': 0x0,
        'type': a0_0x1e1e8b(0x273),
        'name': ''
    }, {
        'icon': a0_0x1e1e8b(0x1f1),
        'iconSecond': '',
        'iconWeapon': '',
        'iconShield': '',
        'iconPlayer': '',
        'coin': 0xa,
        'damage': 0x0,
        'shield': 0x0,
        'health': 0x0,
        'type': a0_0x1e1e8b(0x273),
        'name': ''
    }, {
        'icon': a0_0x1e1e8b(0x3f3),
        'iconSecond': '',
        'iconWeapon': '',
        'iconShield': '',
        'iconPlayer': '',
        'coin': 0x0,
        'damage': 0x2,
        'shield': 0x0,
        'health': 0x0,
        'type': a0_0x1e1e8b(0x1e4),
        'name': a0_0x1e1e8b(0x1ed)
    }, {
        'icon': 'assets/card_icon_spikes.png',
        'iconSecond': '',
        'iconWeapon': '',
        'iconShield': '',
        'iconPlayer': '',
        'spritesheet': {
            'width': 0x61,
            'height': 0x30,
            'count': 0x2
        },
        'coin': 0x0,
        'damage': 0x1,
        'shield': 0x0,
        'health': 0x0,
        'type': a0_0x1e1e8b(0x1e4),
        'name': ''
    }, {
        'icon': a0_0x1e1e8b(0x1d5),
        'iconSecond': '',
        'spritesheet': {
            'width': 0x33,
            'height': 0x41,
            'count': 0x2
        },
        'iconWeapon': '',
        'iconShield': '',
        'iconPlayer': '',
        'coin': 0x0,
        'damage': 0x0,
        'shield': 0x0,
        'health': 0x0,
        'type': 'barrel',
        'name': a0_0x1e1e8b(0x36b)
    }, {
        'icon': a0_0x1e1e8b(0x3dd),
        'iconSecond': '',
        'spritesheet': {
            'width': 0x54,
            'height': 0x58,
            'count': 0x2
        },
        'iconWeapon': '',
        'iconShield': '',
        'iconPlayer': '',
        'coin': 0x0,
        'damage': 0x0,
        'shield': 0x0,
        'health': 0x0,
        'type': a0_0x1e1e8b(0x40e),
        'name': a0_0x1e1e8b(0x385)
    }, {
        'icon': a0_0x1e1e8b(0x35e),
        'iconSecond': '',
        'spritesheet': {
            'width': 0x4d,
            'height': 0x4c,
            'count': 0x2
        },
        'iconWeapon': '',
        'iconShield': '',
        'iconPlayer': '',
        'coin': 0x0,
        'damage': 0x0,
        'shield': 0x0,
        'health': 0x0,
        'type': a0_0x1e1e8b(0x29e),
        'name': a0_0x1e1e8b(0x1c3)
    }, {
        'icon': a0_0x1e1e8b(0x387),
        'iconSecond': '',
        'iconWeapon': '',
        'iconShield': '',
        'iconPlayer': a0_0x1e1e8b(0x24e),
        'coin': 0x0,
        'damage': 0x0,
        'shield': 0x0,
        'health': 0x0,
        'type': a0_0x1e1e8b(0x335),
        'name': a0_0x1e1e8b(0x259)
    }, {
        'icon': 'assets/card_icon_sword.png',
        'iconSecond': '',
        'iconWeapon': '',
        'iconShield': '',
        'iconPlayer': a0_0x1e1e8b(0x351),
        'coin': 0x0,
        'damage': 0x3,
        'shield': 0x0,
        'health': 0x0,
        'type': 'weapon',
        'name': 'SWORD'
    }, {
        'icon': a0_0x1e1e8b(0x304),
        'iconSecond': '',
        'iconWeapon': '',
        'iconShield': '',
        'iconPlayer': a0_0x1e1e8b(0x351),
        'coin': 0x0,
        'damage': 0x2,
        'shield': 0x0,
        'health': 0x0,
        'type': 'weapon',
        'name': a0_0x1e1e8b(0x1cf)
    }, {
        'icon': a0_0x1e1e8b(0x28f),
        'iconSecond': '',
        'iconWeapon': '',
        'iconShield': '',
        'iconPlayer': a0_0x1e1e8b(0x26d),
        'coin': 0x0,
        'damage': 0x2,
        'shield': 0x0,
        'health': 0x0,
        'type': a0_0x1e1e8b(0x1b0),
        'name': a0_0x1e1e8b(0x41c)
    }, {
        'icon': a0_0x1e1e8b(0x28f),
        'iconSecond': '',
        'iconWeapon': '',
        'iconShield': '',
        'iconPlayer': a0_0x1e1e8b(0x26d),
        'coin': 0x0,
        'damage': 0x3,
        'shield': 0x0,
        'health': 0x0,
        'type': a0_0x1e1e8b(0x1b0),
        'name': 'SPEAR'
    }, {
        'icon': a0_0x1e1e8b(0x31a),
        'iconSecond': '',
        'iconWeapon': '',
        'iconShield': '',
        'iconPlayer': a0_0x1e1e8b(0x28e),
        'coin': 0x0,
        'damage': 0x2,
        'shield': 0x0,
        'health': 0x0,
        'type': 'weapon',
        'name': a0_0x1e1e8b(0x3b6)
    }, {
        'icon': a0_0x1e1e8b(0x31a),
        'iconSecond': '',
        'iconWeapon': '',
        'iconShield': '',
        'iconPlayer': a0_0x1e1e8b(0x28e),
        'coin': 0x0,
        'damage': 0x3,
        'shield': 0x0,
        'health': 0x0,
        'type': a0_0x1e1e8b(0x1b0),
        'name': a0_0x1e1e8b(0x3b6)
    }, {
        'icon': a0_0x1e1e8b(0x2a5),
        'iconSecond': '',
        'iconWeapon': '',
        'iconShield': '',
        'iconPlayer': a0_0x1e1e8b(0x3ac),
        'coin': 0x0,
        'damage': 0x0,
        'shield': 0x2,
        'health': 0x0,
        'type': a0_0x1e1e8b(0x378),
        'name': 'SHIELD'
    }, {
        'icon': a0_0x1e1e8b(0x2a5),
        'iconSecond': '',
        'iconWeapon': '',
        'iconShield': '',
        'iconPlayer': a0_0x1e1e8b(0x3ac),
        'coin': 0x0,
        'damage': 0x0,
        'shield': 0x3,
        'health': 0x0,
        'type': a0_0x1e1e8b(0x378),
        'name': a0_0x1e1e8b(0x3b4)
    }, {
        'icon': a0_0x1e1e8b(0x277),
        'iconSecond': '',
        'iconWeapon': '',
        'iconShield': '',
        'iconPlayer': 'assets/card_icon_shield_player2.png',
        'coin': 0x0,
        'damage': 0x0,
        'shield': 0x3,
        'health': 0x0,
        'type': a0_0x1e1e8b(0x378),
        'name': a0_0x1e1e8b(0x3b4)
    }, {
        'icon': a0_0x1e1e8b(0x277),
        'iconSecond': '',
        'iconWeapon': '',
        'iconShield': '',
        'iconPlayer': a0_0x1e1e8b(0x28a),
        'coin': 0x0,
        'damage': 0x0,
        'shield': 0x2,
        'health': 0x0,
        'type': 'shield',
        'name': a0_0x1e1e8b(0x3b4)
    }, {
        'icon': 'assets/card_icon_animal_body_1.png',
        'iconSecond': a0_0x1e1e8b(0x2bd),
        'iconWeapon': '',
        'iconShield': '',
        'iconPlayer': '',
        'coin': 0x0,
        'damage': 0x0,
        'shield': 0x0,
        'health': 0x1,
        'type': 'enemy',
        'name': a0_0x1e1e8b(0x34d)
    }, {
        'icon': a0_0x1e1e8b(0x34f),
        'iconSecond': a0_0x1e1e8b(0x2bd),
        'iconWeapon': '',
        'iconShield': '',
        'iconPlayer': '',
        'coin': 0x0,
        'damage': 0x0,
        'shield': 0x0,
        'health': 0x2,
        'type': a0_0x1e1e8b(0x393),
        'name': 'WOLF'
    }, {
        'icon': a0_0x1e1e8b(0x429),
        'iconSecond': 'assets/card_icon_animal_leg_2.png',
        'iconWeapon': '',
        'iconShield': '',
        'iconPlayer': '',
        'coin': 0x0,
        'damage': 0x0,
        'shield': 0x0,
        'health': 0x1,
        'type': a0_0x1e1e8b(0x393),
        'name': a0_0x1e1e8b(0x257)
    }, {
        'icon': a0_0x1e1e8b(0x429),
        'iconSecond': a0_0x1e1e8b(0x3a9),
        'iconWeapon': '',
        'iconShield': '',
        'iconPlayer': '',
        'coin': 0x0,
        'damage': 0x0,
        'shield': 0x0,
        'health': 0x2,
        'type': a0_0x1e1e8b(0x393),
        'name': a0_0x1e1e8b(0x257)
    }, {
        'icon': a0_0x1e1e8b(0x1e7),
        'iconSecond': 'assets/card_icon_enemy_leg.png',
        'iconWeapon': '',
        'iconShield': '',
        'iconPlayer': '',
        'coin': 0x0,
        'damage': 0x0,
        'shield': 0x0,
        'health': 0x1,
        'type': 'enemy',
        'name': a0_0x1e1e8b(0x218)
    }, {
        'icon': a0_0x1e1e8b(0x1e7),
        'iconSecond': a0_0x1e1e8b(0x376),
        'iconWeapon': '',
        'iconShield': '',
        'iconPlayer': '',
        'coin': 0x0,
        'damage': 0x0,
        'shield': 0x0,
        'health': 0x2,
        'type': a0_0x1e1e8b(0x393),
        'name': a0_0x1e1e8b(0x218)
    }, {
        'icon': a0_0x1e1e8b(0x1e7),
        'iconSecond': a0_0x1e1e8b(0x376),
        'iconWeapon': a0_0x1e1e8b(0x351),
        'iconShield': '',
        'iconPlayer': '',
        'coin': 0x0,
        'damage': 0x2,
        'shield': 0x0,
        'health': 0x2,
        'type': a0_0x1e1e8b(0x393),
        'name': a0_0x1e1e8b(0x340)
    }, {
        'icon': a0_0x1e1e8b(0x1e7),
        'iconSecond': a0_0x1e1e8b(0x376),
        'iconWeapon': a0_0x1e1e8b(0x351),
        'iconShield': '',
        'iconPlayer': '',
        'coin': 0x0,
        'damage': 0x2,
        'shield': 0x0,
        'health': 0x3,
        'type': a0_0x1e1e8b(0x393),
        'name': a0_0x1e1e8b(0x340)
    }, {
        'icon': a0_0x1e1e8b(0x1e7),
        'iconSecond': a0_0x1e1e8b(0x376),
        'iconWeapon': 'assets/card_icon_sword_player.png',
        'iconShield': a0_0x1e1e8b(0x3ac),
        'iconPlayer': '',
        'coin': 0x0,
        'damage': 0x2,
        'shield': 0x1,
        'health': 0x3,
        'type': a0_0x1e1e8b(0x393),
        'name': a0_0x1e1e8b(0x340)
    }, {
        'icon': a0_0x1e1e8b(0x1e7),
        'iconSecond': a0_0x1e1e8b(0x376),
        'iconWeapon': a0_0x1e1e8b(0x351),
        'iconShield': a0_0x1e1e8b(0x3ac),
        'iconPlayer': '',
        'coin': 0x0,
        'damage': 0x3,
        'shield': 0x2,
        'health': 0x3,
        'type': 'enemy',
        'name': a0_0x1e1e8b(0x340)
    }, {
        'icon': a0_0x1e1e8b(0x1c7),
        'iconSecond': a0_0x1e1e8b(0x376),
        'iconWeapon': a0_0x1e1e8b(0x351),
        'iconShield': 'assets/card_icon_shield_player1.png',
        'iconPlayer': '',
        'coin': 0x0,
        'damage': 0x2,
        'shield': 0x2,
        'health': 0x5,
        'type': a0_0x1e1e8b(0x393),
        'name': a0_0x1e1e8b(0x224)
    }, {
        'icon': 'assets/card_icon_enemy_body_4.png',
        'iconSecond': a0_0x1e1e8b(0x376),
        'iconWeapon': a0_0x1e1e8b(0x351),
        'iconShield': a0_0x1e1e8b(0x3ac),
        'iconPlayer': '',
        'coin': 0x0,
        'damage': 0x3,
        'shield': 0x2,
        'health': 0x5,
        'type': a0_0x1e1e8b(0x393),
        'name': a0_0x1e1e8b(0x224)
    }, {
        'icon': 'assets/card_icon_cannon.png',
        'iconSecond': '',
        'iconWeapon': '',
        'iconShield': '',
        'iconPlayer': a0_0x1e1e8b(0x27f),
        'coin': 0x0,
        'damage': 0x3,
        'shield': 0x0,
        'health': 0x0,
        'type': a0_0x1e1e8b(0x31c),
        'name': a0_0x1e1e8b(0x3f1)
    }],
    cardPlaySettings = {
        'maxHealth': 0xa,
        'layout': [{
            'row': 0x3,
            'column': 0x3,
            'player': [{
                'r': 0x1,
                'c': 0x1,
                'side': 0x1
            }]
        }, {
            'row': 0x4,
            'column': 0x4,
            'player': [{
                'r': 0x1,
                'c': 0x1,
                'side': 0x1
            }]
        }],
        'stage': [{
            'move': 0xf,
            'play': [0x0, 0x0, 0x1, 0x1, 0x2],
            'event': [0x0, 0x1, 0xc, 0xc, 0xd, 0xd],
            'items': [0x2, 0x11, 0x12, 0x19, 0x1a],
            'enemy': [0x1b, 0x1c, 0x1d, 0x1e],
            'enemyReveal': [0x5, 0x6, 0x7, 0x8],
            'chestReveal': [0x5, 0x6, 0x7, 0x8, 0xa],
            'barrelReveal': [0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0xb],
            'castleReveal': [0x9, 0xa, 0x9, 0xa, 0x9, 0xa, 0x1f, 0x20, 0x21, 0x22, 0x23, 0x24, 0x25, 0x26],
            'showChest': -0x1,
            'chest': [0xf],
            'key': [0x10]
        }, {
            'move': 0x1e,
            'play': [0x0, 0x0, 0x1, 0x1, 0x2, 0x2],
            'event': [0x0, 0x1, 0xc, 0xc, 0xd, 0xd, 0xe, 0x27],
            'items': [0x2, 0x3, 0x4, 0x11, 0x12, 0x13, 0x14, 0x17, 0x18, 0x19, 0x1a],
            'enemy': [0x1f, 0x20, 0x21, 0x22],
            'enemyReveal': [0x5, 0x6, 0x7, 0x8],
            'chestReveal': [0x5, 0x6, 0x7, 0x8, 0xa],
            'barrelReveal': [0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xb],
            'castleReveal': [0x9, 0xa, 0x9, 0xa, 0x9, 0xa, 0x1f, 0x20, 0x21, 0x22, 0x23, 0x24, 0x25, 0x26],
            'showChest': 0xf,
            'chest': [0xf],
            'key': [0x10]
        }, {
            'move': 0x32,
            'play': [0x0, 0x0, 0x1, 0x2, 0x2],
            'event': [0x0, 0x1, 0xc, 0xc, 0xd, 0xd, 0xe, 0x27],
            'items': [0x2, 0x3, 0x4, 0x2, 0x3, 0x4, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a],
            'enemy': [0x1f, 0x20, 0x21, 0x22, 0x23, 0x24, 0x25, 0x26],
            'enemyReveal': [0x5, 0x6, 0x7, 0x8],
            'chestReveal': [0x5, 0x6, 0x7, 0x8, 0xa],
            'barrelReveal': [0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xb],
            'castleReveal': [0x9, 0xa, 0x9, 0xa, 0x9, 0xa, 0x1f, 0x20, 0x21, 0x22, 0x23, 0x24, 0x25, 0x26],
            'showChest': 0x14,
            'chest': [0xf],
            'key': [0x10]
        }, {
            'move': 0x50,
            'play': [0x0, 0x0, 0x1, 0x2, 0x2, 0x2],
            'event': [0x0, 0x1, 0xc, 0xc, 0xd, 0xd, 0xe, 0x27],
            'items': [0x2, 0x3, 0x4, 0x2, 0x3, 0x4, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a],
            'enemy': [0x1f, 0x20, 0x21, 0x22, 0x23, 0x24, 0x25, 0x26],
            'enemyReveal': [0x5, 0x6, 0x7, 0x8],
            'chestReveal': [0x5, 0x6, 0x7, 0x8, 0xa],
            'barrelReveal': [0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xb],
            'castleReveal': [0x9, 0xa, 0x9, 0xa, 0x9, 0xa, 0x1f, 0x20, 0x21, 0x22, 0x23, 0x24, 0x25, 0x26],
            'showChest': 0x1e,
            'chest': [0xf],
            'key': [0x10]
        }]
    },
    cardPlayMultiplayerSettings = {
        'maxHealth': 0xa,
        'layout': [{
            'row': 0x4,
            'column': 0x4,
            'player': [{
                'r': 0x1,
                'c': 0x0,
                'side': 0x1
            }, {
                'r': 0x2,
                'c': 0x3,
                'side': -0x1
            }]
        }, {
            'row': 0x5,
            'column': 0x5,
            'player': [{
                'r': 0x2,
                'c': 0x0,
                'side': 0x1
            }, {
                'r': 0x2,
                'c': 0x4,
                'side': -0x1
            }]
        }],
        'stage': [{
            'move': 0xf,
            'play': [0x0, 0x0, 0x1, 0x1, 0x2],
            'event': [0x0, 0x1, 0xc, 0xc, 0xd, 0xd],
            'items': [0x2, 0x11, 0x12, 0x19, 0x1a],
            'enemy': [0x1b, 0x1c, 0x1d, 0x1e],
            'enemyReveal': [0x5, 0x6, 0x7, 0x8],
            'chestReveal': [0x5, 0x6, 0x7, 0x8, 0xa],
            'barrelReveal': [0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0xb],
            'castleReveal': [0x9, 0xa, 0x9, 0xa, 0x9, 0xa, 0x1f, 0x20, 0x21, 0x22, 0x23, 0x24, 0x25, 0x26],
            'showChest': -0x1,
            'chest': [0xf],
            'key': [0x10]
        }, {
            'move': 0x1e,
            'play': [0x0, 0x0, 0x1, 0x1, 0x2, 0x2],
            'event': [0x0, 0x1, 0xc, 0xc, 0xd, 0xd, 0xe, 0x27],
            'items': [0x2, 0x3, 0x4, 0x11, 0x12, 0x13, 0x14, 0x17, 0x18, 0x19, 0x1a],
            'enemy': [0x1f, 0x20, 0x21, 0x22],
            'enemyReveal': [0x5, 0x6, 0x7, 0x8],
            'chestReveal': [0x5, 0x6, 0x7, 0x8, 0xa],
            'barrelReveal': [0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xb],
            'castleReveal': [0x9, 0xa, 0x9, 0xa, 0x9, 0xa, 0x1f, 0x20, 0x21, 0x22, 0x23, 0x24, 0x25, 0x26],
            'showChest': 0xf,
            'chest': [0xf],
            'key': [0x10]
        }, {
            'move': 0x32,
            'play': [0x0, 0x0, 0x1, 0x2, 0x2],
            'event': [0x0, 0x1, 0xc, 0xc, 0xd, 0xd, 0xe, 0x27],
            'items': [0x2, 0x3, 0x4, 0x2, 0x3, 0x4, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a],
            'enemy': [0x1f, 0x20, 0x21, 0x22, 0x23, 0x24, 0x25, 0x26],
            'enemyReveal': [0x5, 0x6, 0x7, 0x8],
            'chestReveal': [0x5, 0x6, 0x7, 0x8, 0xa],
            'barrelReveal': [0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xb],
            'castleReveal': [0x9, 0xa, 0x9, 0xa, 0x9, 0xa, 0x1f, 0x20, 0x21, 0x22, 0x23, 0x24, 0x25, 0x26],
            'showChest': 0x14,
            'chest': [0xf],
            'key': [0x10]
        }, {
            'move': 0x50,
            'play': [0x0, 0x0, 0x1, 0x2, 0x2, 0x2],
            'event': [0x0, 0x1, 0xc, 0xc, 0xd, 0xd, 0xe, 0x27],
            'items': [0x2, 0x3, 0x4, 0x2, 0x3, 0x4, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a],
            'enemy': [0x1f, 0x20, 0x21, 0x22, 0x23, 0x24, 0x25, 0x26],
            'enemyReveal': [0x5, 0x6, 0x7, 0x8],
            'chestReveal': [0x5, 0x6, 0x7, 0x8, 0xa],
            'barrelReveal': [0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xb],
            'castleReveal': [0x9, 0xa, 0x9, 0xa, 0x9, 0xa, 0x1f, 0x20, 0x21, 0x22, 0x23, 0x24, 0x25, 0x26],
            'showChest': 0x1e,
            'chest': [0xf],
            'key': [0x10]
        }]
    },
    gameSettings = {
        'cardMoveSpeed': 0.5,
        'cardFlipSpeed': 0.2,
        'hitFlashSpeed': 0.1,
        'hitFlashAlpha': 0.4,
        'playerIdleSpeed': 0.2,
        'playeridleDistant': -0x3,
        'swooshSpeed': 0.2,
        'bombSpeed': 0x1,
        'numberSpeed': 0.5,
        'healtColor': '#BF1313',
        'damageColor': a0_0x1e1e8b(0x26a),
        'shieldColor': a0_0x1e1e8b(0x1c2),
        'keyboard': {
            'left': [0x25, 0x41],
            'right': [0x27, 0x44],
            'up': [0x26, 0x57],
            'down': [0x28, 0x53]
        }
    },
    textStrings = {
        'tutorialTitle': a0_0x1e1e8b(0x352),
        'tutorial': {
            'step1': a0_0x1e1e8b(0x19a),
            'step2': a0_0x1e1e8b(0x2cb),
            'step3': a0_0x1e1e8b(0x1d4),
            'step4': 'NOW\x20YOU\x20GOT\x20A\x20SWORD\x20WITH\x20DAMAGE\x20STATS\x20\x0aGO\x20KILL\x20THE\x20WOLF',
            'step5': a0_0x1e1e8b(0x3fa),
            'step6': a0_0x1e1e8b(0x389),
            'step7': a0_0x1e1e8b(0x3ae),
            'step8': a0_0x1e1e8b(0x383),
            'step9': a0_0x1e1e8b(0x291)
        },
        'mobileTutorial': {
            'step1': 'SWIPE\x20RIGHT\x20OR\x20TAP\x20THE\x20CARD\x20ON\x20THE\x20RIGHT\x20TO\x20MOVE\x20YOUR\x20CARD',
            'step2': a0_0x1e1e8b(0x2cb),
            'step3': a0_0x1e1e8b(0x1d4),
            'step4': a0_0x1e1e8b(0x3e0),
            'step5': 'REWARD\x20WILL\x20REVEAL\x20WHEN\x20YOU\x20KILL\x20ENEMY\x20WITH\x20ITEMS\x0aNOW\x20GET\x20YOUR\x20REWARD',
            'step6': a0_0x1e1e8b(0x389),
            'step7': 'YOUR\x20CARD\x20STATS\x20WILL\x20DEDUCT\x20EVERYTIME\x20YOU\x20ATTACK\x0aNOW\x20KILL\x20THE\x20KNIGHT',
            'step8': 'YOUR\x20HEALTH\x20IS\x20LOW\x0aCOLLECT\x20HEALING\x20POTION\x20TO\x20RESTORE\x20YOUR\x20HEALTH',
            'step9': a0_0x1e1e8b(0x291)
        },
        'sizeTitle': 'CHOOSE\x20SIZE',
        'playerName': a0_0x1e1e8b(0x229),
        'score': a0_0x1e1e8b(0x38c),
        'kill': a0_0x1e1e8b(0x38c),
        'gameOver': a0_0x1e1e8b(0x247),
        'yourTurn': 'YOUR\x20TURN\x20TO\x20MOVE',
        'playerTurn': a0_0x1e1e8b(0x30d),
        'yourDead': 'YOUR\x20ARE\x20DEAD',
        'playerDead': a0_0x1e1e8b(0x3c3),
        'exitTitle': a0_0x1e1e8b(0x38d),
        'exitMessage': a0_0x1e1e8b(0x244),
        'resultTitle': a0_0x1e1e8b(0x247),
        'share': a0_0x1e1e8b(0x24a),
        'resultKill': a0_0x1e1e8b(0x396),
        'resultDesc': 'COIN:\x20[NUMBER]'
    },
    shareSettings = {
        'enable': !![],
        'options': [a0_0x1e1e8b(0x34b), a0_0x1e1e8b(0x196), a0_0x1e1e8b(0x1ce), a0_0x1e1e8b(0x3b7), a0_0x1e1e8b(0x349), 'linkedin'],
        'shareTitle': a0_0x1e1e8b(0x2f1),
        'shareText': a0_0x1e1e8b(0x415),
        'customScore': !![],
        'gtag': !![]
    };
$[a0_0x1e1e8b(0x2b2)] = {
    'enable': ![]
};
const playerData = {
        'score': 0x0,
        'kill': 0x0
    },
    gameData = {
        'paused': !![],
        'player': 0x0,
        'layoutIndex': 0x0,
        'cardIndex': 0x0,
        'stageIndex': 0x0,
        'side': ![],
        'moveCard': ![],
        'playCard': ![],
        'over': ![],
        'tutorialMode': ![],
        'tutorialIndex': 0x0,
        'tutorialCardIndex': 0x0
    },
    protonData = {
        'proton': null,
        'emitter': [],
        'objects': []
    },
    tweenData = {
        'score': 0x0,
        'tweenScore': 0x0
    },
    timeData = {
        'enable': ![],
        'startDate': null,
        'nowDate': null,
        'timer': 0x0,
        'oldTimer': 0x0
    },
    gestureData = {
        'pX': '',
        'pY': '',
        'pX2': '',
        'pY2': '',
        'lastDirection': -0x1,
        'curDirection': -0x1,
        'directionArr': []
    };

function buildGameButton() {
    var _0x3aa7f0 = a0_0x1e1e8b;
    $(window)[_0x3aa7f0(0x21c)](function() {
        var _0x4875f4 = _0x3aa7f0;
        !buttonSoundOn[_0x4875f4(0x23a)] && toggleSoundInMute(![]), typeof buttonMusicOn != _0x4875f4(0x3f4) && (!buttonMusicOn[_0x4875f4(0x23a)] && toggleMusicInMute(![]));
    }), $(window)['blur'](function() {
        var _0x4a397c = _0x3aa7f0;
        !buttonSoundOn[_0x4a397c(0x23a)] && toggleSoundInMute(!![]), typeof buttonMusicOn != _0x4a397c(0x3f4) && (!buttonMusicOn[_0x4a397c(0x23a)] && toggleMusicInMute(!![]));
    });
    if (isDesktop) {
        var _0x5c80c7 = window[_0x3aa7f0(0x316)] != window[_0x3aa7f0(0x332)]['location'] ? !![] : ![];
        _0x5c80c7 ? (this['document']['onkeydown'] = keydown, this['document'][_0x3aa7f0(0x205)] = keyup, $(window)['blur'](function() {
            appendFocusFrame();
        }), appendFocusFrame()) : (this[_0x3aa7f0(0x1b4)]['onkeydown'] = keydown, this[_0x3aa7f0(0x1b4)][_0x3aa7f0(0x205)] = keyup);
    }
    audioOn && (muteSoundOn && toggleSoundMute(!![]), muteMusicOn && toggleMusicMute(!![]));
    buttonLocal[_0x3aa7f0(0x3c5)] = _0x3aa7f0(0x2d8), buttonLocal[_0x3aa7f0(0x3a4)](_0x3aa7f0(0x400), function(_0x3b5f64) {
        var _0x524e66 = _0x3aa7f0;
        playSound(_0x524e66(0x3ea)), socketData[_0x524e66(0x2bb)] = ![], cardPlaySettings[_0x524e66(0x2c5)][_0x524e66(0x42b)] == 0x1 ? goPage('game') : goPage(_0x524e66(0x2eb));
    }), buttonOnline[_0x3aa7f0(0x3c5)] = 'pointer', buttonOnline[_0x3aa7f0(0x3a4)](_0x3aa7f0(0x400), function(_0x3e2918) {
        var _0x551619 = _0x3aa7f0;
        playSound(_0x551619(0x3ea)), checkQuickGameMode();
    }), buttonPlay[_0x3aa7f0(0x3c5)] = 'pointer', buttonPlay['addEventListener']('click', function(_0x14e001) {
        var _0x792800 = _0x3aa7f0;
        playSound(_0x792800(0x3ea)), gameData['tutorialMode'] = ![], typeof initSocket == _0x792800(0x2fc) && multiplayerSettings[_0x792800(0x36e)] ? multiplayerSettings[_0x792800(0x248)] ? toggleMainButton(_0x792800(0x325)) : checkQuickGameMode() : cardPlaySettings[_0x792800(0x2c5)][_0x792800(0x42b)] == 0x1 ? goPage(_0x792800(0x1c0)) : goPage(_0x792800(0x2eb));
    }), buttonTutorial['cursor'] = _0x3aa7f0(0x2d8), buttonTutorial[_0x3aa7f0(0x3a4)]('click', function(_0x5223c4) {
        var _0x7255e4 = _0x3aa7f0;
        playSound(_0x7255e4(0x3ea)), gameData[_0x7255e4(0x3ee)] = !![], gameData['layout'] = {
            'row': 0x1,
            'column': 0x3,
            'player': [{
                'r': 0x0,
                'c': 0x1,
                'side': 0x1
            }]
        }, gameData['tutorialIndex'] = 0x0, gameData['tutorialCardIndex'] = 0x0, gameData[_0x7255e4(0x40a)] = [0x0, 0x1, 0x11, 0x1b, 0x26, 0x5, 0x4, 0x0, 0x1], gameData[_0x7255e4(0x2a7)] = ['', _0x7255e4(0x32f), 'left', _0x7255e4(0x20e), _0x7255e4(0x32f), _0x7255e4(0x32f), _0x7255e4(0x32f), _0x7255e4(0x32f), _0x7255e4(0x20e)], goPage(_0x7255e4(0x1c0));
    }), buttonSizePlay[_0x3aa7f0(0x3c5)] = _0x3aa7f0(0x2d8), buttonSizePlay[_0x3aa7f0(0x3a4)]('click', function(_0x30247e) {
        var _0x5e32d3 = _0x3aa7f0;
        playSound('soundButton'), typeof initSocket == _0x5e32d3(0x2fc) && multiplayerSettings[_0x5e32d3(0x36e)] && socketData[_0x5e32d3(0x2bb)] ? postSocketUpdate(_0x5e32d3(0x24f)) : goPage(_0x5e32d3(0x1c0));
    }), buttonArrowLeft['cursor'] = _0x3aa7f0(0x2d8), buttonArrowLeft[_0x3aa7f0(0x3a4)](_0x3aa7f0(0x400), function(_0x147ca6) {
        var _0x3c60d0 = _0x3aa7f0;
        playSound(_0x3c60d0(0x3ea)), toggleSize(![]);
    }), buttonArrowRight[_0x3aa7f0(0x3c5)] = _0x3aa7f0(0x2d8), buttonArrowRight[_0x3aa7f0(0x3a4)](_0x3aa7f0(0x400), function(_0x44a231) {
        var _0x58508f = _0x3aa7f0;
        playSound(_0x58508f(0x3ea)), toggleSize(!![]);
    }), itemExit['addEventListener'](_0x3aa7f0(0x400), function(_0x437b77) {});
    if (shareSettings[_0x3aa7f0(0x36e)]) {
        buttonShare[_0x3aa7f0(0x3c5)] = _0x3aa7f0(0x2d8), buttonShare[_0x3aa7f0(0x3a4)](_0x3aa7f0(0x400), function(_0xf126a3) {
            var _0x40ebf9 = _0x3aa7f0;
            playSound(_0x40ebf9(0x3ea)), toggleSocialShare(!![]);
        });
        for (let _0x3d28ca = 0x0; _0x3d28ca < shareSettings[_0x3aa7f0(0x27e)][_0x3aa7f0(0x42b)]; _0x3d28ca++) {
            $[_0x3aa7f0(0x3a7)][_0x3aa7f0(0x3ef) + _0x3d28ca][_0x3aa7f0(0x3c5)] = _0x3aa7f0(0x2d8), $['share']['button' + _0x3d28ca][_0x3aa7f0(0x3a4)](_0x3aa7f0(0x400), function(_0x433ccb) {
                var _0x289459 = _0x3aa7f0;
                shareLinks(_0x433ccb['target'][_0x289459(0x2ee)], addCommas(playerData[_0x289459(0x30a)]));
            });
        }
    }
    buttonContinue['cursor'] = _0x3aa7f0(0x2d8), buttonContinue['addEventListener'](_0x3aa7f0(0x400), function(_0x3ccb1e) {
        var _0x1f9d7c = _0x3aa7f0;
        playSound('soundButton'), stopGame(), typeof initSocket == _0x1f9d7c(0x2fc) && multiplayerSettings['enable'] && socketData[_0x1f9d7c(0x2bb)] && multiplayerSettings['rejoinRoom'] ? (goPage(_0x1f9d7c(0x1c1)), $(_0x1f9d7c(0x1f5))['val'](socketData['lastRoom']), joinSocketRoom()) : goPage(_0x1f9d7c(0x3c8));
    }), buttonSoundOff['cursor'] = _0x3aa7f0(0x2d8), buttonSoundOff[_0x3aa7f0(0x3a4)](_0x3aa7f0(0x400), function(_0xf2410) {
        toggleSoundMute(!![]);
    }), buttonSoundOn[_0x3aa7f0(0x3c5)] = _0x3aa7f0(0x2d8), buttonSoundOn[_0x3aa7f0(0x3a4)](_0x3aa7f0(0x400), function(_0x3d224f) {
        toggleSoundMute(![]);
    }), typeof buttonMusicOff != _0x3aa7f0(0x3f4) && (buttonMusicOff[_0x3aa7f0(0x3c5)] = _0x3aa7f0(0x2d8), buttonMusicOff[_0x3aa7f0(0x3a4)](_0x3aa7f0(0x400), function(_0x537b25) {
        toggleMusicMute(!![]);
    })), typeof buttonMusicOn != _0x3aa7f0(0x3f4) && (buttonMusicOn[_0x3aa7f0(0x3c5)] = _0x3aa7f0(0x2d8), buttonMusicOn[_0x3aa7f0(0x3a4)](_0x3aa7f0(0x400), function(_0x413f9d) {
        toggleMusicMute(![]);
    })), buttonFullscreen[_0x3aa7f0(0x3c5)] = _0x3aa7f0(0x2d8), buttonFullscreen[_0x3aa7f0(0x3a4)](_0x3aa7f0(0x400), function(_0x2d4123) {
        toggleFullScreen();
    }), buttonExit[_0x3aa7f0(0x3c5)] = _0x3aa7f0(0x2d8), buttonExit[_0x3aa7f0(0x3a4)](_0x3aa7f0(0x400), function(_0x5444e7) {
        togglePop(!![]), toggleOptions();
    }), buttonSettings[_0x3aa7f0(0x3c5)] = 'pointer', buttonSettings['addEventListener'](_0x3aa7f0(0x400), function(_0x5d4f93) {
        toggleOptions();
    }), buttonConfirm['cursor'] = _0x3aa7f0(0x2d8), buttonConfirm[_0x3aa7f0(0x3a4)](_0x3aa7f0(0x400), function(_0x539aa4) {
        var _0x2aa039 = _0x3aa7f0;
        playSound(_0x2aa039(0x3ea)), togglePop(![]), stopSound(), stopGame(), goPage(_0x2aa039(0x3c8));
    }), buttonCancel['cursor'] = 'pointer', buttonCancel['addEventListener'](_0x3aa7f0(0x400), function(_0x4ff7f4) {
        var _0x19007f = _0x3aa7f0;
        playSound(_0x19007f(0x3ea)), togglePop(![]);
    }), buildGameGesture(), preventScrolling();
}

function preventScrolling() {
    var _0x362268 = a0_0x1e1e8b;
    const _0xa3fe74 = window[_0x362268(0x2d2)] !== window[_0x362268(0x2c2)];
    if (_0xa3fe74) {
        var _0x493076 = [0x20, 0x26, 0x25, 0x28, 0x27];
        $(window)['on'](_0x362268(0x353), function(_0x5c1a48) {
            var _0x104534 = _0x362268;
            _0x493076[_0x104534(0x359)](_0x5c1a48[_0x104534(0x32e)]) != -0x1 && _0x5c1a48[_0x104534(0x41f)]();
        });
    }
}

function appendFocusFrame() {
    var _0xc1dd35 = a0_0x1e1e8b;
    $(_0xc1dd35(0x33f))[_0xc1dd35(0x190)](_0xc1dd35(0x1af)), $(_0xc1dd35(0x39c))['click'](function() {
        var _0x26991b = _0xc1dd35;
        $('#focus')[_0x26991b(0x313)]();
    });
}

function toggleSize(_0x380b19) {
    var _0x36bc6a = a0_0x1e1e8b,
        _0x47e271 = cardPlaySettings[_0x36bc6a(0x2c5)][_0x36bc6a(0x42b)] - 0x1;
    typeof initSocket == _0x36bc6a(0x2fc) && multiplayerSettings[_0x36bc6a(0x36e)] && socketData[_0x36bc6a(0x2bb)] && (_0x47e271 = cardPlayMultiplayerSettings[_0x36bc6a(0x2c5)][_0x36bc6a(0x42b)] - 0x1), _0x380b19 ? (gameData[_0x36bc6a(0x38b)]++, gameData['layoutIndex'] = gameData[_0x36bc6a(0x38b)] > _0x47e271 ? _0x47e271 : gameData['layoutIndex']) : (gameData[_0x36bc6a(0x38b)]--, gameData[_0x36bc6a(0x38b)] = gameData[_0x36bc6a(0x38b)] < 0x0 ? 0x0 : gameData[_0x36bc6a(0x38b)]), displayPlaySize(), typeof initSocket == _0x36bc6a(0x2fc) && multiplayerSettings[_0x36bc6a(0x36e)] && socketData['online'] && postSocketUpdate(_0x36bc6a(0x1de), {
        'index': gameData[_0x36bc6a(0x38b)]
    }, !![]);
}

function displayPlaySize() {
    var _0x58ab70 = a0_0x1e1e8b;
    typeof initSocket == 'function' && multiplayerSettings['enable'] && socketData[_0x58ab70(0x2bb)] ? gameData[_0x58ab70(0x2c5)] = {
        'row': cardPlayMultiplayerSettings['layout'][gameData[_0x58ab70(0x38b)]]['row'],
        'column': cardPlayMultiplayerSettings[_0x58ab70(0x2c5)][gameData[_0x58ab70(0x38b)]][_0x58ab70(0x30c)],
        'player': cardPlayMultiplayerSettings[_0x58ab70(0x2c5)][gameData[_0x58ab70(0x38b)]]['player']
    } : gameData['layout'] = {
        'row': cardPlaySettings[_0x58ab70(0x2c5)][gameData['layoutIndex']]['row'],
        'column': cardPlaySettings['layout'][gameData[_0x58ab70(0x38b)]][_0x58ab70(0x30c)],
        'player': cardPlaySettings['layout'][gameData['layoutIndex']][_0x58ab70(0x321)]
    }, sizePlayTxt['text'] = gameData['layout'][_0x58ab70(0x377)] + _0x58ab70(0x278) + gameData[_0x58ab70(0x2c5)][_0x58ab70(0x30c)];
}

function toggleMainButton(_0x3bc552) {
    var _0x56589b = a0_0x1e1e8b;
    typeof initSocket == _0x56589b(0x2fc) && multiplayerSettings[_0x56589b(0x36e)] && (gameLogsTxt[_0x56589b(0x23a)] = !![], gameLogsTxt[_0x56589b(0x3c1)] = '');
    buttonPlay[_0x56589b(0x23a)] = ![], buttonTutorial[_0x56589b(0x23a)] = ![], buttonLocalContainer[_0x56589b(0x23a)] = ![];
    if (_0x3bc552 == _0x56589b(0x24f)) buttonPlay[_0x56589b(0x23a)] = !![], buttonTutorial[_0x56589b(0x23a)] = !![];
    else _0x3bc552 == _0x56589b(0x325) && (buttonLocalContainer['visible'] = !![]);
}

function checkQuickGameMode() {
    var _0x4199c6 = a0_0x1e1e8b;
    socketData[_0x4199c6(0x2bb)] = !![], !multiplayerSettings[_0x4199c6(0x27d)] ? (buttonPlay['visible'] = ![], buttonTutorial[_0x4199c6(0x23a)] = ![], buttonLocalContainer[_0x4199c6(0x23a)] = ![], addSocketRandomUser()) : goPage(_0x4199c6(0x3c4));
}

function resizeSocketLog() {
    var _0x244f42 = a0_0x1e1e8b;
    if (curPage == 'main') viewport[_0x244f42(0x287)] ? (gameLogsTxt['x'] = canvasW / 0x2, gameLogsTxt['y'] = canvasH / 0x64 * 0x4d) : (gameLogsTxt['x'] = canvasW / 0x2, gameLogsTxt['y'] = canvasH / 0x64 * 0x4c);
    else curPage == _0x244f42(0x2eb) && (viewport[_0x244f42(0x287)] ? (gameLogsTxt['x'] = canvasW / 0x2, gameLogsTxt['y'] = canvasH / 0x64 * 0x46) : (gameLogsTxt['x'] = canvasW / 0x2, gameLogsTxt['y'] = canvasH / 0x64 * 0x40));
}

function keydown(_0x2c0efe) {
    var _0x201994 = a0_0x1e1e8b;
    if (curPage == _0x201994(0x1c0)) {
        if (gameData[_0x201994(0x245)]) {
            if (typeof initSocket == _0x201994(0x2fc) && multiplayerSettings[_0x201994(0x36e)] && socketData[_0x201994(0x2bb)]) {
                if (gameData[_0x201994(0x321)] != socketData[_0x201994(0x354)]) return;
            }
            var _0xd2e584 = '';
            if (gameSettings['keyboard'][_0x201994(0x20e)][_0x201994(0x359)](_0x2c0efe[_0x201994(0x32e)]) != -0x1) _0xd2e584 = 'left';
            else {
                if (gameSettings[_0x201994(0x1da)][_0x201994(0x32f)][_0x201994(0x359)](_0x2c0efe['keyCode']) != -0x1) _0xd2e584 = _0x201994(0x32f);
                else {
                    if (gameSettings[_0x201994(0x1da)]['up']['indexOf'](_0x2c0efe[_0x201994(0x32e)]) != -0x1) _0xd2e584 = 'up';
                    else gameSettings[_0x201994(0x1da)][_0x201994(0x334)][_0x201994(0x359)](_0x2c0efe[_0x201994(0x32e)]) != -0x1 && (_0xd2e584 = _0x201994(0x334));
                }
            }
            _0xd2e584 != '' && (typeof initSocket == _0x201994(0x2fc) && multiplayerSettings[_0x201994(0x36e)] && socketData[_0x201994(0x2bb)] ? gameData['moveCard'] && (socketData['loaded'] = [], moveCard(gameData[_0x201994(0x321)], _0xd2e584), postSocketUpdate(_0x201994(0x379), {
                'player': gameData[_0x201994(0x321)],
                'direction': _0xd2e584
            }, !![])) : gameData[_0x201994(0x379)] ? moveCard(gameData['player'], _0xd2e584) : gameData[_0x201994(0x1ab)] = _0xd2e584);
        }
    }
}

function keyup(_0x23c49e) {}

function buildGameGesture() {
    var _0x465fa4 = a0_0x1e1e8b;
    stage[_0x465fa4(0x3a4)](_0x465fa4(0x1bd), handleMouseDown), stage['addEventListener'](_0x465fa4(0x276), handleMouseUp);
}

function handleMouseDown(_0x34e68b) {
    var _0x49cb09 = a0_0x1e1e8b;
    if (!_0x34e68b['primary']) return;
    gestureData[_0x49cb09(0x420)] = -0x1, gestureData[_0x49cb09(0x20a)] = -0x1, gestureData['pX'] = gestureData[_0x49cb09(0x3fe)] = stage[_0x49cb09(0x2ae)], gestureData['pY'] = gestureData['pY2'] = stage['mouseY'], gestureData[_0x49cb09(0x37f)] = [], stage['addEventListener'](_0x49cb09(0x1b5), handleMouseMove);
}

function handleMouseMove(_0x37f866) {
    var _0x413ba8 = a0_0x1e1e8b;
    if (!_0x37f866[_0x413ba8(0x2bc)]) return;
    var _0x1649a7 = gestureData['pX'] - stage[_0x413ba8(0x2ae)],
        _0x202c7a = gestureData['pY'] - stage[_0x413ba8(0x228)],
        _0x3dd70f = _0x1649a7 * _0x1649a7 + _0x202c7a * _0x202c7a;
    if (_0x3dd70f > 0x190) {
        var _0x3a7f2 = Math['atan2'](_0x202c7a, _0x1649a7) * 57.2957795,
            _0x3f4d8a, _0x24e0a2;
        _0x3a7f2 >= 0x16 * -0x1 && _0x3a7f2 < 0x17 && (_0x3f4d8a = 0x0, _0x24e0a2 = 'left'), _0x3a7f2 >= 0x44 && _0x3a7f2 < 0x71 && (_0x3f4d8a = Math['PI'] / 0x2, _0x24e0a2 = 'up'), (_0x3a7f2 >= 0x9e || _0x3a7f2 < 0x9d * -0x1) && (_0x3f4d8a = Math['PI'], _0x24e0a2 = _0x413ba8(0x32f)), _0x3a7f2 >= 0x70 * -0x1 && _0x3a7f2 < 0x43 * -0x1 && (_0x3f4d8a = -Math['PI'] / 0x2, _0x24e0a2 = _0x413ba8(0x334)), gestureData[_0x413ba8(0x3fe)] -= Math[_0x413ba8(0x38e)](_0x3dd70f) * Math[_0x413ba8(0x2ed)](_0x3f4d8a), gestureData[_0x413ba8(0x2da)] -= Math[_0x413ba8(0x38e)](_0x3dd70f) * Math[_0x413ba8(0x374)](_0x3f4d8a), _0x3f4d8a != gestureData['lastDirection'] ? gestureData[_0x413ba8(0x20a)] = _0x3f4d8a : gestureData['curDirection'] != gestureData[_0x413ba8(0x20a)] && (gestureData[_0x413ba8(0x37f)][_0x413ba8(0x30e)](_0x24e0a2), gestureData[_0x413ba8(0x420)] = gestureData[_0x413ba8(0x20a)]), gestureData['pX'] = stage['mouseX'], gestureData['pY'] = stage['mouseY'];
    }
}

function handleMouseUp(_0x6d6b42) {
    var _0x28dccc = a0_0x1e1e8b;
    if (!_0x6d6b42[_0x28dccc(0x2bc)]) return;
    stage[_0x28dccc(0x306)](_0x28dccc(0x1b5), handleMouseMove);
    if (gestureData[_0x28dccc(0x37f)][_0x28dccc(0x42b)] > 0x0) {
        var _0x4bbb47 = gestureData['directionArr'][0x0];
        if (gameData['playCard']) {
            if (typeof initSocket == _0x28dccc(0x2fc) && multiplayerSettings[_0x28dccc(0x36e)] && socketData[_0x28dccc(0x2bb)]) {
                if (gameData[_0x28dccc(0x321)] != socketData[_0x28dccc(0x354)]) return;
            }
            typeof initSocket == _0x28dccc(0x2fc) && multiplayerSettings[_0x28dccc(0x36e)] && socketData[_0x28dccc(0x2bb)] ? gameData['moveCard'] && (socketData[_0x28dccc(0x3b8)] = [], moveCard(gameData['player'], _0x4bbb47), postSocketUpdate(_0x28dccc(0x379), {
                'player': gameData['player'],
                'direction': _0x4bbb47
            }, !![])) : gameData[_0x28dccc(0x379)] ? moveCard(gameData['player'], _0x4bbb47) : gameData['nextDir'] = _0x4bbb47;
        }
    }
}

function toggleSocialShare(_0xd4dfd3) {
    var _0x339196 = a0_0x1e1e8b;
    if (!shareSettings[_0x339196(0x36e)]) return;
    buttonShare[_0x339196(0x23a)] = _0xd4dfd3 == !![] ? ![] : !![], shareSaveContainer['visible'] = _0xd4dfd3 == !![] ? ![] : !![], socialContainer[_0x339196(0x23a)] = _0xd4dfd3, _0xd4dfd3 && (typeof buttonSave !== _0x339196(0x3f4) && TweenMax['to'](buttonShare, 0x3, {
        'overwrite': !![],
        'onComplete': toggleSocialShare,
        'onCompleteParams': [![]]
    }));
}

function positionShareButtons() {
    var _0x241e20 = a0_0x1e1e8b;
    if (!shareSettings[_0x241e20(0x36e)]) return;
    typeof buttonShare !== _0x241e20(0x3f4) && (typeof buttonSave !== _0x241e20(0x3f4) && (buttonSave[_0x241e20(0x23a)] ? (buttonShare['x'] = -(buttonShare['image'][_0x241e20(0x204)] / 0x2 + 0x5), buttonSave['x'] = buttonShare['image'][_0x241e20(0x204)] / 0x2 + 0x5) : buttonShare['x'] = 0x0));
}

function togglePop(_0x1fc9b0) {
    var _0xda8e99 = a0_0x1e1e8b;
    exitContainer[_0xda8e99(0x23a)] = _0x1fc9b0, typeof initSocket == _0xda8e99(0x2fc) && multiplayerSettings['enable'] && socketData[_0xda8e99(0x2bb)] && ((curPage == _0xda8e99(0x3c4) || curPage == _0xda8e99(0x1c1)) && (_0x1fc9b0 ? $(_0xda8e99(0x3c6))['hide']() : $('#roomWrapper')[_0xda8e99(0x3d5)]()));
}
var curPage = '';

function goPage(_0x3dabe8) {
    var _0x2f9d8e = a0_0x1e1e8b;
    curPage = _0x3dabe8, $(_0x2f9d8e(0x3c6))['hide'](), $(_0x2f9d8e(0x303))['hide'](), gameLogsTxt['visible'] = ![], bgRoom[_0x2f9d8e(0x23a)] = ![], mainContainer[_0x2f9d8e(0x23a)] = ![], sizeContainer['visible'] = ![], gameContainer[_0x2f9d8e(0x23a)] = ![], resultContainer[_0x2f9d8e(0x23a)] = ![], togglePop(![]), toggleOptions(![]);
    var _0x27863d = null;
    switch (_0x3dabe8) {
        case _0x2f9d8e(0x3c8):
            _0x27863d = mainContainer, toggleMainButton(_0x2f9d8e(0x24f)), stopMusicLoop('musicGame'), playMusicLoop('musicMain');
            break;
        case 'name':
            _0x27863d = nameContainer, $('#roomWrapper')[_0x2f9d8e(0x3d5)](), $('#roomWrapper\x20.nameContent')['show'](), $(_0x2f9d8e(0x25f))['html'](''), $('#enterName')[_0x2f9d8e(0x3d5)](), bgRoom['visible'] = !![];
            break;
        case _0x2f9d8e(0x1c1):
            _0x27863d = roomContainer, $(_0x2f9d8e(0x3c6))[_0x2f9d8e(0x3d5)](), $('#roomWrapper\x20.roomContent')[_0x2f9d8e(0x3d5)](), switchSocketRoomContent('lists'), bgRoom['visible'] = !![];
            break;
        case 'size':
            _0x27863d = sizeContainer;
            typeof initSocket == _0x2f9d8e(0x2fc) && multiplayerSettings[_0x2f9d8e(0x36e)] && socketData[_0x2f9d8e(0x2bb)] ? (buttonSizePlay[_0x2f9d8e(0x23a)] = ![], buttonArrowLeft[_0x2f9d8e(0x23a)] = buttonArrowRight[_0x2f9d8e(0x23a)] = ![], socketData[_0x2f9d8e(0x2a6)] && (buttonSizePlay[_0x2f9d8e(0x23a)] = !![], buttonArrowLeft[_0x2f9d8e(0x23a)] = buttonArrowRight[_0x2f9d8e(0x23a)] = !![])) : (buttonSizePlay[_0x2f9d8e(0x23a)] = !![], buttonArrowLeft['visible'] = buttonArrowRight[_0x2f9d8e(0x23a)] = !![]);
            gameData[_0x2f9d8e(0x38b)] = 0x0, displayPlaySize();
            break;
        case _0x2f9d8e(0x1c0):
            _0x27863d = gameContainer, stopMusicLoop(_0x2f9d8e(0x268)), playMusicLoop(_0x2f9d8e(0x3c9)), startGame();
            break;
        case _0x2f9d8e(0x399):
            _0x27863d = resultContainer, toggleSocialShare(![]), playSound(_0x2f9d8e(0x411));
            typeof initSocket == _0x2f9d8e(0x2fc) && multiplayerSettings[_0x2f9d8e(0x36e)] && socketData[_0x2f9d8e(0x2bb)] && (playerData[_0x2f9d8e(0x30a)] = $[_0x2f9d8e(0x1ec)][_0x2f9d8e(0x29b) + socketData[_0x2f9d8e(0x354)]][_0x2f9d8e(0x30a)], playerData[_0x2f9d8e(0x1a0)] = $[_0x2f9d8e(0x1ec)][_0x2f9d8e(0x29b) + socketData[_0x2f9d8e(0x354)]][_0x2f9d8e(0x1a0)], socketData[_0x2f9d8e(0x2a6)] ? postSocketCloseRoom() : exitSocketRoom());
            resultKillTxt[_0x2f9d8e(0x3c1)] = textStrings[_0x2f9d8e(0x42a)]['replace'](_0x2f9d8e(0x38c), playerData[_0x2f9d8e(0x1a0)]), tweenData[_0x2f9d8e(0x258)] = 0x0, TweenMax['to'](tweenData, 0.5, {
                'tweenScore': playerData[_0x2f9d8e(0x30a)],
                'overwrite': !![],
                'onUpdate': function() {
                    var _0x975c8b = _0x2f9d8e;
                    resultDescTxt[_0x975c8b(0x3c1)] = textStrings[_0x975c8b(0x364)][_0x975c8b(0x2fb)](_0x975c8b(0x38c), addCommas(Math['floor'](tweenData[_0x975c8b(0x258)])));
                }
            }), saveGame(playerData[_0x2f9d8e(0x30a)]);
            break;
    }
    _0x27863d != null && (_0x27863d[_0x2f9d8e(0x23a)] = !![], _0x27863d[_0x2f9d8e(0x28b)] = 0x0, TweenMax['to'](_0x27863d, 0.5, {
        'alpha': 0x1,
        'overwrite': !![]
    })), resizeCanvas();
}

function startGame() {
    var _0x1d04fd = a0_0x1e1e8b;
    gameStatusContainer['alpha'] = 0x0, displayPlayerIcon(), prepareSettings(), prepareStage(), gameData['tutorialMode'] ? (tutorialTitleTxt[_0x1d04fd(0x23a)] = !![], tutorialDescTxt['visible'] = !![], tutorialDescTxt[_0x1d04fd(0x3c1)] = '') : (tutorialTitleTxt['visible'] = ![], tutorialDescTxt[_0x1d04fd(0x23a)] = ![]), typeof initSocket == _0x1d04fd(0x2fc) && multiplayerSettings[_0x1d04fd(0x36e)] && socketData[_0x1d04fd(0x2bb)] ? socketData['host'] && (gameData[_0x1d04fd(0x321)] = 0x0, prepareCardContent(!![])) : prepareCardContent(!![]);
}

function stopGame() {
    var _0x1d938f = a0_0x1e1e8b;
    destoryProton(), TweenMax[_0x1d938f(0x3d9)](![], !![], ![]), gameData[_0x1d938f(0x25e)] = !![];
}

function saveGame(_0x3f6cef) {
    var _0x23b9c6 = a0_0x1e1e8b;
    typeof toggleScoreboardSave == 'function' && ($[_0x23b9c6(0x2cc)][_0x23b9c6(0x30a)] = _0x3f6cef, typeof type != _0x23b9c6(0x3f4) && ($['scoreData'][_0x23b9c6(0x31f)] = type), toggleScoreboardSave(!![]));
}

function resizeGameLayout() {
    var _0x3f0c58 = a0_0x1e1e8b;
    viewport[_0x3f0c58(0x287)] ? (cardsWrapContainer['x'] = canvasW / 0x2, cardsWrapContainer['y'] = canvasH / 0x2, $[_0x3f0c58(0x1ec)][0x0]['x'] = canvasW / 0x64 * 0xa, $['status'][0x0]['y'] = canvasH / 0x64 * 0x52, $['status'][0x1]['x'] = canvasW / 0x64 * 0x5a, $[_0x3f0c58(0x1ec)][0x1]['y'] = canvasH / 0x64 * 0x52, tutorialTitleTxt['x'] = canvasW / 0x2, tutorialTitleTxt['y'] = canvasH / 0x64 * 0x1e, tutorialDescTxt['x'] = canvasW / 0x2, tutorialDescTxt['y'] = canvasH / 0x64 * 0x46) : (cardsWrapContainer['x'] = canvasW / 0x2, cardsWrapContainer['y'] = canvasH / 0x64 * 0x2d, $[_0x3f0c58(0x1ec)][0x0]['x'] = canvasW / 0x64 * 0xc, $[_0x3f0c58(0x1ec)][0x0]['y'] = canvasH / 0x64 * 0x59, $[_0x3f0c58(0x1ec)][0x1]['x'] = canvasW / 0x64 * 0x58, $['status'][0x1]['y'] = canvasH / 0x64 * 0x59, tutorialTitleTxt['x'] = canvasW / 0x2, tutorialTitleTxt['y'] = canvasH / 0x64 * 0x23, tutorialDescTxt['x'] = canvasW / 0x2, tutorialDescTxt['y'] = canvasH / 0x64 * 0x41);
}

function displayPlayerIcon() {
    var _0x1554c9 = a0_0x1e1e8b;
    $[_0x1554c9(0x1ec)]['iconHilight' + 0x0]['alpha'] = 0x0, $['status'][_0x1554c9(0x2a4) + 0x1][_0x1554c9(0x28b)] = 0x0;
    if (typeof initSocket == _0x1554c9(0x2fc) && multiplayerSettings[_0x1554c9(0x36e)] && socketData[_0x1554c9(0x2bb)]) {
        $[_0x1554c9(0x1ec)]['icon' + 0x0][_0x1554c9(0x23f)](), $['status'][_0x1554c9(0x29b) + 0x1][_0x1554c9(0x23f)]();
        var _0x49efa1 = new createjs['Bitmap'](loader[_0x1554c9(0x419)](_0x1554c9(0x366) + 0x0));
        centerReg(_0x49efa1), $[_0x1554c9(0x1ec)]['icon' + 0x0][_0x1554c9(0x3fb)](_0x49efa1);
        var _0x49efa1 = new createjs[(_0x1554c9(0x423))](loader[_0x1554c9(0x419)]('cardChaIcon_' + 0x1));
        centerReg(_0x49efa1), $[_0x1554c9(0x1ec)][_0x1554c9(0x29b) + 0x1][_0x1554c9(0x3fb)](_0x49efa1), $[_0x1554c9(0x1ec)][_0x1554c9(0x29b) + 0x0]['score'] = 0x0, $[_0x1554c9(0x1ec)][_0x1554c9(0x29b) + 0x0][_0x1554c9(0x1a0)] = 0x0, $['status'][_0x1554c9(0x29b) + 0x1][_0x1554c9(0x30a)] = 0x0, $[_0x1554c9(0x1ec)][_0x1554c9(0x29b) + 0x1][_0x1554c9(0x1a0)] = 0x0;
    } else {
        if (gameData[_0x1554c9(0x3ee)]) $[_0x1554c9(0x1ec)][0x0][_0x1554c9(0x23a)] = ![], $[_0x1554c9(0x1ec)][0x1][_0x1554c9(0x23a)] = ![];
        else {
            $['status'][_0x1554c9(0x29b) + 0x0][_0x1554c9(0x23f)]();
            var _0x49efa1 = new createjs['Bitmap'](loader['getResult']('cardChaIcon_' + 0x0));
            centerReg(_0x49efa1), $[_0x1554c9(0x1ec)]['icon' + 0x0]['addChild'](_0x49efa1), $['status'][_0x1554c9(0x220) + 0x0]['visible'] = ![], $[_0x1554c9(0x1ec)]['playerNameTxt' + 0x0][_0x1554c9(0x23a)] = ![], $[_0x1554c9(0x1ec)][0x0][_0x1554c9(0x23a)] = !![], $[_0x1554c9(0x1ec)][0x1]['visible'] = ![];
        }
    }
}

function prepareSettings() {
    var _0x362ea1 = a0_0x1e1e8b;
    tweenData[_0x362ea1(0x258)] = 0x0, playerData['score'] = 0x0, playerData['kill'] = 0x0, updateGameDisplay(), gameData['stageIndex'] = 0x0, gameData[_0x362ea1(0x245)] = !![], gameData[_0x362ea1(0x379)] = ![], gameData[_0x362ea1(0x34e)] = 0x0, gameData[_0x362ea1(0x1ab)] = '', gameData[_0x362ea1(0x272)] = null, gameData[_0x362ea1(0x40d)] = [], gameData[_0x362ea1(0x343)] = [], gameData[_0x362ea1(0x33b)] = [], gameData[_0x362ea1(0x3e8)] = [], gameData[_0x362ea1(0x38f)] = [], gameData[_0x362ea1(0x2ce)] = [], gameData[_0x362ea1(0x1a7)] = [], gameData[_0x362ea1(0x360)] = [], gameData[_0x362ea1(0x271)] = [], gameData[_0x362ea1(0x243)] = [], gameData['chestCountArr'] = [], gameData[_0x362ea1(0x404)] = ![], gameData[_0x362ea1(0x373)] = -0x1, gameData[_0x362ea1(0x328)] = ![], gameData[_0x362ea1(0x2fd)] = {
        'movement': {
            'value': 0x0
        }
    }, gameData[_0x362ea1(0x3c7)] = [0x0, 0x1], gameData[_0x362ea1(0x2c4)] = 0x0, gameData[_0x362ea1(0x323)] = 0x0, gameData[_0x362ea1(0x2b6)] = 0x0, gameData['chestComplete'] = 0x0, shuffle(gameData[_0x362ea1(0x271)]);
}

function prepareStage() {
    var _0x798638 = a0_0x1e1e8b;
    gameData[_0x798638(0x288)] = {
        'move': cardPlaySettings['stage'][gameData[_0x798638(0x330)]]['move'],
        'play': cardPlaySettings['stage'][gameData[_0x798638(0x330)]][_0x798638(0x1f0)],
        'event': cardPlaySettings[_0x798638(0x288)][gameData[_0x798638(0x330)]][_0x798638(0x292)],
        'items': cardPlaySettings['stage'][gameData[_0x798638(0x330)]][_0x798638(0x2f4)],
        'enemy': cardPlaySettings[_0x798638(0x288)][gameData[_0x798638(0x330)]]['enemy'],
        'enemyReveal': cardPlaySettings[_0x798638(0x288)][gameData[_0x798638(0x330)]][_0x798638(0x370)],
        'chestReveal': cardPlaySettings[_0x798638(0x288)][gameData[_0x798638(0x330)]][_0x798638(0x21d)],
        'barrelReveal': cardPlaySettings[_0x798638(0x288)][gameData[_0x798638(0x330)]]['barrelReveal'],
        'castleReveal': cardPlaySettings[_0x798638(0x288)][gameData[_0x798638(0x330)]][_0x798638(0x2b1)],
        'showChest': cardPlaySettings[_0x798638(0x288)][gameData[_0x798638(0x330)]]['showChest'],
        'chest': cardPlaySettings['stage'][gameData[_0x798638(0x330)]][_0x798638(0x29e)],
        'key': cardPlaySettings['stage'][gameData['stageIndex']][_0x798638(0x335)]
    };
}

function createCards() {
    var _0x1b54d3 = a0_0x1e1e8b;
    cardsContainer[_0x1b54d3(0x23f)](), particlesContainer[_0x1b54d3(0x23f)](), bombContainer[_0x1b54d3(0x23f)](), numbersContainer['removeAllChildren']();
    var _0x4b631b = {
        'startX': 0x0,
        'startY': 0x0,
        'x': 0x0,
        'y': 0x0,
        'width': 0x0,
        'height': 0x0
    };
    _0x4b631b[_0x1b54d3(0x331)] = (gameData['layout'][_0x1b54d3(0x30c)] - 0x1) * cardDesign[gameData[_0x1b54d3(0x216)]][_0x1b54d3(0x331)], _0x4b631b[_0x1b54d3(0x331)] += (gameData['layout'][_0x1b54d3(0x30c)] - 0x1) * cardDesign[gameData[_0x1b54d3(0x216)]]['margin'], _0x4b631b[_0x1b54d3(0x1ac)] = (gameData[_0x1b54d3(0x2c5)][_0x1b54d3(0x377)] - 0x1) * cardDesign[gameData['cardIndex']][_0x1b54d3(0x1ac)], _0x4b631b['height'] += (gameData['layout']['row'] - 0x1) * cardDesign[gameData[_0x1b54d3(0x216)]][_0x1b54d3(0x2c8)], _0x4b631b[_0x1b54d3(0x2f0)] = -(_0x4b631b['width'] / 0x2), _0x4b631b[_0x1b54d3(0x1e8)] = -(_0x4b631b[_0x1b54d3(0x1ac)] / 0x2), _0x4b631b['x'] = _0x4b631b[_0x1b54d3(0x2f0)], _0x4b631b['y'] = _0x4b631b[_0x1b54d3(0x1e8)], gameData[_0x1b54d3(0x3ed)] = [];
    for (var _0x34940a = 0x0; _0x34940a < gameData[_0x1b54d3(0x2c5)][_0x1b54d3(0x377)]; _0x34940a++) {
        for (var _0x31242d = 0x0; _0x31242d < gameData['layout'][_0x1b54d3(0x30c)]; _0x31242d++) {
            var _0x433db1 = createSingleCard(_0x34940a, _0x31242d);
            $[_0x1b54d3(0x3a8)][_0x34940a + '_' + _0x31242d] = new createjs[(_0x1b54d3(0x1be))](), $[_0x1b54d3(0x3a8)][_0x34940a + '_' + _0x31242d]['row'] = _0x34940a, $[_0x1b54d3(0x3a8)][_0x34940a + '_' + _0x31242d][_0x1b54d3(0x30c)] = _0x31242d, $[_0x1b54d3(0x3a8)][_0x34940a + '_' + _0x31242d]['x'] = _0x4b631b['x'], $[_0x1b54d3(0x3a8)][_0x34940a + '_' + _0x31242d]['y'] = _0x4b631b['y'], $[_0x1b54d3(0x3a8)][_0x34940a + '_' + _0x31242d][_0x1b54d3(0x23b)] = _0x433db1, _0x433db1['x'] = _0x4b631b['x'], _0x433db1['y'] = _0x4b631b['y'], _0x4b631b['x'] += cardDesign[gameData[_0x1b54d3(0x216)]][_0x1b54d3(0x331)] + cardDesign[gameData[_0x1b54d3(0x216)]][_0x1b54d3(0x2c8)];
        }
        _0x4b631b['x'] = _0x4b631b[_0x1b54d3(0x2f0)], _0x4b631b['y'] += cardDesign[gameData[_0x1b54d3(0x216)]]['height'] + cardDesign[gameData[_0x1b54d3(0x216)]][_0x1b54d3(0x2c8)];
    }
    gameData[_0x1b54d3(0x3a0)] = gameData['layout']['column'] * cardDesign[gameData[_0x1b54d3(0x216)]][_0x1b54d3(0x331)], gameData[_0x1b54d3(0x3a0)] += (gameData[_0x1b54d3(0x2c5)][_0x1b54d3(0x30c)] - 0x1) * cardDesign[gameData[_0x1b54d3(0x216)]][_0x1b54d3(0x2c8)], gameData[_0x1b54d3(0x250)] = gameData[_0x1b54d3(0x2c5)][_0x1b54d3(0x377)] * cardDesign[gameData[_0x1b54d3(0x216)]]['height'], gameData['mapH'] += (gameData['layout'][_0x1b54d3(0x377)] - 0x1) * cardDesign[gameData[_0x1b54d3(0x216)]][_0x1b54d3(0x2c8)], animateTweenMovement();
}

function createSingleCard(_0x44c378, _0x1e8566) {
    var _0x1a39a7 = a0_0x1e1e8b,
        _0x41083e = new createjs[(_0x1a39a7(0x1be))](),
        _0x8fd567 = new createjs[(_0x1a39a7(0x423))](loader[_0x1a39a7(0x419)](_0x1a39a7(0x223) + gameData[_0x1a39a7(0x216)]));
    centerReg(_0x8fd567);
    var _0x39eb78 = new createjs['Container'](),
        _0x5e4e3f = new createjs['Bitmap'](loader['getResult']('cardType1_' + gameData[_0x1a39a7(0x216)]));
    centerReg(_0x5e4e3f), newType2 = new createjs[(_0x1a39a7(0x423))](loader[_0x1a39a7(0x419)](_0x1a39a7(0x41b) + gameData[_0x1a39a7(0x216)])), centerReg(newType2), newType3 = new createjs[(_0x1a39a7(0x423))](loader[_0x1a39a7(0x419)](_0x1a39a7(0x33d) + gameData[_0x1a39a7(0x216)])), centerReg(newType3), newType4 = new createjs[(_0x1a39a7(0x423))](loader[_0x1a39a7(0x419)](_0x1a39a7(0x35d) + gameData['cardIndex'])), centerReg(newType4), newHit = new createjs[(_0x1a39a7(0x423))](loader[_0x1a39a7(0x419)](_0x1a39a7(0x3e6) + gameData[_0x1a39a7(0x216)])), centerReg(newHit), newFocus = new createjs[(_0x1a39a7(0x423))](loader[_0x1a39a7(0x419)](_0x1a39a7(0x211) + gameData[_0x1a39a7(0x216)])), centerReg(newFocus), newFocus[_0x1a39a7(0x28b)] = 0x0, newStroke = new createjs['Bitmap'](loader[_0x1a39a7(0x419)](_0x1a39a7(0x388) + gameData[_0x1a39a7(0x216)])), centerReg(newStroke), newStroke[_0x1a39a7(0x28b)] = 0x0;
    var _0x574086 = new createjs[(_0x1a39a7(0x270))]();
    return _0x574086[_0x1a39a7(0x3a3)] = cardDesign[gameData['cardIndex']]['name'][_0x1a39a7(0x317)] + _0x1a39a7(0x386), _0x574086[_0x1a39a7(0x226)] = '#fff', _0x574086[_0x1a39a7(0x234)] = 'center', _0x574086[_0x1a39a7(0x2ad)] = _0x1a39a7(0x26f), _0x574086['x'] = cardDesign[gameData[_0x1a39a7(0x216)]][_0x1a39a7(0x3c4)]['fontX'], _0x574086['y'] = cardDesign[gameData[_0x1a39a7(0x216)]]['name'][_0x1a39a7(0x21e)], newIcon = new createjs[(_0x1a39a7(0x1be))](), newIconA = new createjs[(_0x1a39a7(0x1be))](), newIconB = new createjs[(_0x1a39a7(0x1be))](), newBadges = new createjs[(_0x1a39a7(0x1be))](), newWeapon = new createjs[(_0x1a39a7(0x1be))](), newShield = new createjs[(_0x1a39a7(0x1be))](), newKey = new createjs[(_0x1a39a7(0x1be))](), newNumbers = new createjs[(_0x1a39a7(0x1be))](), newSwoosh = new createjs[(_0x1a39a7(0x1be))](), newIconA['x'] = newIconB['x'] = cardDesign[gameData[_0x1a39a7(0x216)]]['icon']['x'], newIconA['y'] = newIconB['y'] = cardDesign[gameData[_0x1a39a7(0x216)]][_0x1a39a7(0x29b)]['y'], newIcon['addChild'](newIconB, newIconA, newWeapon, newShield, newKey), _0x39eb78[_0x1a39a7(0x3fb)](_0x5e4e3f, newType2, newType3, newType4, newHit, newFocus, newBadges, newIcon, newStroke, newSwoosh, _0x574086, newNumbers), _0x41083e[_0x1a39a7(0x377)] = _0x44c378, _0x41083e[_0x1a39a7(0x30c)] = _0x1e8566, _0x41083e[_0x1a39a7(0x2d4)] = _0x8fd567, _0x41083e['inner'] = _0x39eb78, _0x41083e[_0x1a39a7(0x391)] = _0x5e4e3f, _0x41083e[_0x1a39a7(0x233)] = newType2, _0x41083e[_0x1a39a7(0x3f7)] = newType3, _0x41083e[_0x1a39a7(0x3e3)] = newType4, _0x41083e[_0x1a39a7(0x1b8)] = newHit, _0x41083e['focus'] = newFocus, _0x41083e[_0x1a39a7(0x265)] = newStroke, _0x41083e[_0x1a39a7(0x29b)] = newIcon, _0x41083e['iconA'] = newIconA, _0x41083e[_0x1a39a7(0x344)] = newIconB, _0x41083e[_0x1a39a7(0x1b0)] = newWeapon, _0x41083e['shield'] = newShield, _0x41083e[_0x1a39a7(0x1bc)] = newSwoosh, _0x41083e[_0x1a39a7(0x335)] = newKey, _0x41083e[_0x1a39a7(0x2a0)] = newNumbers, _0x41083e['name'] = _0x574086, _0x41083e[_0x1a39a7(0x412)] = newBadges, _0x41083e[_0x1a39a7(0x428)] = ![], _0x41083e[_0x1a39a7(0x3e7)] = '', _0x41083e[_0x1a39a7(0x1d9)] = !![], _0x41083e[_0x1a39a7(0x1b8)]['alpha'] = 0x0, _0x41083e['addChild'](_0x8fd567, _0x39eb78), cardsContainer[_0x1a39a7(0x3fb)](_0x41083e), _0x41083e[_0x1a39a7(0x3a4)]('click', function(_0x17461e) {
        var _0x3b3d72 = _0x1a39a7;
        if (typeof initSocket == 'function' && multiplayerSettings['enable'] && socketData[_0x3b3d72(0x2bb)]) {
            if (gameData['player'] != socketData[_0x3b3d72(0x354)]) return;
        }
        var _0x48f98f = '';
        if ($[_0x3b3d72(0x3a8)][_0x3b3d72(0x321) + gameData[_0x3b3d72(0x321)]]['x'] > _0x17461e[_0x3b3d72(0x1b2)]['x']) _0x48f98f = _0x3b3d72(0x20e);
        else {
            if ($[_0x3b3d72(0x3a8)][_0x3b3d72(0x321) + gameData[_0x3b3d72(0x321)]]['x'] < _0x17461e['currentTarget']['x']) _0x48f98f = _0x3b3d72(0x32f);
            else {
                if ($['card'][_0x3b3d72(0x321) + gameData[_0x3b3d72(0x321)]]['y'] > _0x17461e[_0x3b3d72(0x1b2)]['y']) _0x48f98f = 'up';
                else $[_0x3b3d72(0x3a8)]['player' + gameData[_0x3b3d72(0x321)]]['y'] < _0x17461e[_0x3b3d72(0x1b2)]['y'] && (_0x48f98f = _0x3b3d72(0x334));
            }
        }
        typeof initSocket == _0x3b3d72(0x2fc) && multiplayerSettings[_0x3b3d72(0x36e)] && socketData['online'] ? gameData[_0x3b3d72(0x379)] && (socketData[_0x3b3d72(0x3b8)] = [], moveCard(gameData['player'], _0x48f98f), postSocketUpdate(_0x3b3d72(0x379), {
            'player': gameData['player'],
            'direction': _0x48f98f
        }, !![])) : gameData[_0x3b3d72(0x379)] ? moveCard(gameData[_0x3b3d72(0x321)], _0x48f98f) : gameData[_0x3b3d72(0x272)] = _0x17461e[_0x3b3d72(0x1b2)];
    }), _0x41083e;
}

function shuffleCards() {
    var _0x58d7e4 = a0_0x1e1e8b,
        _0x3116ac = ![],
        _0x576100 = 0x0,
        _0x46ac93 = [{
            'type': _0x58d7e4(0x3a8),
            'index': 0xd
        }, {
            'type': _0x58d7e4(0x3a8),
            'index': 0x1b
        }, {
            'type': _0x58d7e4(0x3a8),
            'index': 0x24
        }, {
            'type': _0x58d7e4(0x3a8),
            'index': 0x25
        }, {
            'type': _0x58d7e4(0x321),
            'index': 0x0
        }, {
            'type': _0x58d7e4(0x3a8),
            'index': 0x21
        }, {
            'type': _0x58d7e4(0x3a8),
            'index': 0x18
        }, {
            'type': _0x58d7e4(0x3a8),
            'index': 0x27
        }, {
            'type': _0x58d7e4(0x3a8),
            'index': 0x1a
        }, {
            'type': _0x58d7e4(0x3a8),
            'index': 0xc
        }, {
            'type': 'card',
            'index': 0x27
        }, {
            'type': _0x58d7e4(0x3a8),
            'index': 0xc
        }, {
            'type': _0x58d7e4(0x3a8),
            'index': 0xc
        }, {
            'type': 'card',
            'index': 0x27
        }, {
            'type': 'card',
            'index': 0xc
        }, {
            'type': _0x58d7e4(0x3a8),
            'index': 0xc
        }, {
            'type': _0x58d7e4(0x3a8),
            'index': 0x27
        }, {
            'type': _0x58d7e4(0x3a8),
            'index': 0xc
        }, {
            'type': _0x58d7e4(0x3a8),
            'index': 0xc
        }, {
            'type': 'card',
            'index': 0x27
        }, {
            'type': _0x58d7e4(0x3a8),
            'index': 0xc
        }, {
            'type': _0x58d7e4(0x3a8),
            'index': 0xc
        }];
    gameData[_0x58d7e4(0x1a6)] = !![], gameData[_0x58d7e4(0x35f)] = 0x0;
    var _0x4a401a = gameData[_0x58d7e4(0x2c5)][_0x58d7e4(0x377)] * gameData[_0x58d7e4(0x2c5)][_0x58d7e4(0x30c)] * 0.2;
    for (var _0x57c6b3 = 0x0; _0x57c6b3 < gameData[_0x58d7e4(0x2c5)][_0x58d7e4(0x377)]; _0x57c6b3++) {
        for (var _0x402993 = 0x0; _0x402993 < gameData[_0x58d7e4(0x2c5)]['column']; _0x402993++) {
            if (_0x3116ac) setCardContent(_0x46ac93[_0x576100][_0x58d7e4(0x31f)], _0x46ac93[_0x576100][_0x58d7e4(0x3d4)], _0x57c6b3, _0x402993);
            else {
                var _0x46ac93 = getCardContent(_0x58d7e4(0x1f0), _0x57c6b3, _0x402993);
                setCardContent(_0x46ac93[_0x58d7e4(0x31f)], _0x46ac93[_0x58d7e4(0x3d4)], _0x57c6b3, _0x402993, _0x46ac93[_0x58d7e4(0x404)]);
            }
            animateMoveCard($[_0x58d7e4(0x3a8)][_0x57c6b3 + '_' + _0x402993]['target'], _0x4a401a, 0x0, !![]), _0x4a401a -= 0.2, _0x576100++;
        }
    }
    gameData['paused'] = ![];
}

function animateMoveCard(_0x125521, _0x471681) {
    var _0x2aca08 = a0_0x1e1e8b;
    gameData['totalFlip']++, _0x125521['lastX'] = _0x125521['x'], _0x125521['lastY'] = _0x125521['y'], _0x125521[_0x2aca08(0x23a)] = ![], _0x125521['inner'][_0x2aca08(0x23a)] = ![], _0x125521['x'] = 0x0, _0x125521['y'] = -(canvasH / 0x64 * 0x32), TweenMax['to'](_0x125521, gameSettings[_0x2aca08(0x1a8)], {
        'delay': _0x471681,
        'alpha': 0x1,
        'x': _0x125521[_0x2aca08(0x2dc)],
        'y': _0x125521['lastY'],
        'overwrite': !![],
        'onStart': function() {
            var _0x3e2e1d = _0x2aca08;
            playSound(_0x3e2e1d(0x2b3)), _0x125521[_0x3e2e1d(0x23a)] = !![];
        },
        'onComplete': function() {
            animateMoveCardComplete();
        }
    });
}

function animateMoveCardComplete() {
    var _0x3a583e = a0_0x1e1e8b;
    gameData[_0x3a583e(0x35f)]--;
    if (gameData[_0x3a583e(0x35f)] <= 0x0) {
        for (var _0x548217 = 0x0; _0x548217 < gameData[_0x3a583e(0x2c5)][_0x3a583e(0x377)]; _0x548217++) {
            for (var _0x19e450 = 0x0; _0x19e450 < gameData[_0x3a583e(0x2c5)]['column']; _0x19e450++) {
                var _0x18a101 = $[_0x3a583e(0x3a8)][_0x548217 + '_' + _0x19e450]['target'];
                _0x18a101['isNew'] && (_0x18a101[_0x3a583e(0x1d9)] = ![], animateFlipCard(_0x18a101));
            }
        }
        tryNextMove();
    }
}

function animateFlipCard(_0x131f8b) {
    var _0x35f29f = a0_0x1e1e8b;
    playSound(_0x35f29f(0x219)), _0x131f8b['inner'][_0x35f29f(0x23a)] = !![], _0x131f8b[_0x35f29f(0x427)][_0x35f29f(0x2b8)] = 0x0, TweenMax['to'](_0x131f8b[_0x35f29f(0x2d4)], gameSettings['cardFlipSpeed'], {
        'scaleX': 0x0,
        'ease': Sine[_0x35f29f(0x285)],
        'overwrite': !![],
        'onComplete': function() {
            var _0x39e939 = _0x35f29f;
            TweenMax['to'](_0x131f8b[_0x39e939(0x427)], gameSettings[_0x39e939(0x32b)], {
                'scaleX': 0x1,
                'ease': Sine[_0x39e939(0x1eb)],
                'overwrite': !![]
            });
        }
    });
}

function animateIconHit(_0x5b26e) {
    var _0x24eb84 = a0_0x1e1e8b;
    TweenMax['to'](_0x5b26e[_0x24eb84(0x1b8)], gameSettings[_0x24eb84(0x2c0)], {
        'alpha': gameSettings[_0x24eb84(0x3a5)],
        'overwrite': !![],
        'onComplete': function() {
            var _0x4ab6a7 = _0x24eb84;
            TweenMax['to'](_0x5b26e[_0x4ab6a7(0x1b8)], gameSettings[_0x4ab6a7(0x2c0)], {
                'alpha': 0x0,
                'overwrite': !![],
                'onComplete': function() {
                    var _0x3a8e9c = _0x4ab6a7;
                    TweenMax['to'](_0x5b26e[_0x3a8e9c(0x1b8)], gameSettings[_0x3a8e9c(0x2c0)], {
                        'alpha': gameSettings['hitFlashAlpha'],
                        'overwrite': !![],
                        'onComplete': function() {
                            var _0xea7cf4 = _0x3a8e9c;
                            TweenMax['to'](_0x5b26e['hit'], gameSettings[_0xea7cf4(0x2c0)], {
                                'alpha': 0x0,
                                'overwrite': !![],
                                'onComplete': function() {}
                            });
                        }
                    });
                }
            });
        }
    });
}

function animateTweenMovement() {
    var _0x579fc9 = a0_0x1e1e8b;
    TweenMax['to'](gameData[_0x579fc9(0x2fd)][_0x579fc9(0x318)], gameSettings[_0x579fc9(0x356)], {
        'value': gameSettings[_0x579fc9(0x1e1)],
        'ease': Sine[_0x579fc9(0x1eb)],
        'overwrite': !![],
        'onComplete': function() {
            var _0x5dc176 = _0x579fc9;
            TweenMax['to'](gameData['tween'][_0x5dc176(0x318)], gameSettings[_0x5dc176(0x356)], {
                'value': 0x0,
                'overwrite': !![],
                'ease': Sine['easeIn'],
                'onComplete': animateTweenMovement
            });
        }
    });
}

function animateSwoosh(_0x1a2177) {
    var _0x44c173 = a0_0x1e1e8b;
    _0x1a2177[_0x44c173(0x1bc)][_0x44c173(0x23f)]();
    var _0x5b06e4 = new createjs[(_0x44c173(0x423))](loader[_0x44c173(0x419)]('itemSwoosh'));
    centerReg(_0x5b06e4), _0x1a2177[_0x44c173(0x1bc)]['addChild'](_0x5b06e4);
    var _0x554826 = cardDesign[gameData[_0x44c173(0x216)]][_0x44c173(0x331)],
        _0xbba32d = cardDesign[gameData[_0x44c173(0x216)]][_0x44c173(0x1ac)];
    _0x5b06e4['x'] = _0x554826 / 0x6, _0x5b06e4['y'] = -(_0xbba32d / 0x6), _0x5b06e4[_0x44c173(0x28b)] = 0x1, TweenMax['to'](_0x5b06e4, gameSettings['swooshSpeed'], {
        'alpha': 0x1,
        'x': -(_0x554826 / 0x6),
        'y': _0xbba32d / 0x6,
        'overwrite': !![],
        'onComplete': function() {
            var _0x167d8a = _0x44c173;
            TweenMax['to'](_0x5b06e4, gameSettings[_0x167d8a(0x35c)], {
                'delay': 0.2,
                'alpha': 0x0,
                'overwrite': !![]
            });
        }
    });
}

function animateNumbers(_0x179e86, _0x3cf8ca, _0x194990, _0x5e6956, _0x166d6d) {
    var _0x50754b = a0_0x1e1e8b,
        _0x470b01 = '';
    if (_0x3cf8ca == _0x50754b(0x2f2)) _0x470b01 = gameSettings['healtColor'];
    else {
        if (_0x3cf8ca == _0x50754b(0x37c)) _0x470b01 = gameSettings[_0x50754b(0x2fe)];
        else _0x3cf8ca == _0x50754b(0x378) && (_0x470b01 = gameSettings[_0x50754b(0x214)]);
    }
    var _0x5ccea4 = new createjs['Container'](),
        _0x1e596b = new createjs['Text']();
    _0x1e596b[_0x50754b(0x3a3)] = _0x50754b(0x314), _0x1e596b[_0x50754b(0x226)] = _0x470b01, _0x1e596b['textAlign'] = _0x50754b(0x361), _0x1e596b['textBaseline'] = _0x50754b(0x26f), _0x1e596b['text'] = _0x166d6d;
    var _0x134032 = new createjs[(_0x50754b(0x270))]();
    _0x134032[_0x50754b(0x3a3)] = _0x50754b(0x314), _0x134032['color'] = _0x50754b(0x305), _0x134032[_0x50754b(0x234)] = _0x50754b(0x361), _0x134032[_0x50754b(0x2ad)] = _0x50754b(0x26f), _0x134032[_0x50754b(0x3c1)] = _0x166d6d, _0x134032['y'] = 0x1, _0x5ccea4[_0x50754b(0x28b)] = 0x0, _0x5ccea4[_0x50754b(0x3fb)](_0x134032, _0x1e596b), numbersContainer[_0x50754b(0x3fb)](_0x5ccea4);
    var _0x39f8eb = _0x179e86['x'],
        _0x4ea0e1 = _0x179e86['y'];
    _0x179e86[_0x50754b(0x3e7)] == _0x50754b(0x321) && (_0x39f8eb = _0x179e86[_0x50754b(0x232)], _0x4ea0e1 = _0x179e86[_0x50754b(0x3f6)]);
    var _0xa6e9ab = cardDesign[gameData[_0x50754b(0x216)]][_0x50754b(0x331)],
        _0x3c73c2 = cardDesign[gameData[_0x50754b(0x216)]][_0x50754b(0x1ac)];
    _0x5ccea4['x'] = _0x39f8eb + randomIntFromInterval(0x0, _0xa6e9ab / 0x5), _0x5ccea4['y'] = _0x4ea0e1 + -(_0x3c73c2 / 0x4);
    _0x194990 && (_0x5ccea4['x'] = _0x39f8eb + randomIntFromInterval(0x0, -(_0xa6e9ab / 0x5)));
    var _0x366273 = _0x4ea0e1 + (-(_0x3c73c2 / 0x2) + randomIntFromInterval(0x0, 0xa));
    TweenMax['to'](_0x5ccea4, gameSettings[_0x50754b(0x2a3)], {
        'delay': _0x5e6956,
        'alpha': 0x1,
        'y': _0x366273,
        'ease': Sine[_0x50754b(0x37e)],
        'overwrite': !![],
        'onComplete': function() {
            var _0x1f12af = _0x50754b;
            TweenMax['to'](_0x5ccea4, gameSettings['numberSpeed'] / 0x2, {
                'delay': 0.2,
                'alpha': 0x0,
                'ease': Sine[_0x1f12af(0x1e6)],
                'overwrite': !![],
                'onComplete': function() {
                    numbersContainer['removeChild'](_0x5ccea4);
                }
            });
        }
    });
}

function prepareCardContent(_0x27a86f) {
    var _0x410964 = a0_0x1e1e8b,
        _0x52850b = gameData['layout']['row'] * gameData[_0x410964(0x2c5)][_0x410964(0x30c)],
        _0x306b37 = 0xa,
        _0x435341 = 0x8,
        _0x8090dc = 0x0,
        _0xd50d81 = gameData[_0x410964(0x40d)]['length'];
    for (var _0x3999d9 = 0x0; _0x3999d9 < _0x306b37; _0x3999d9++) {
        _0x8090dc = 0x0;
        if (gameData[_0x410964(0x40d)][_0x410964(0x42b)] < _0x52850b * 0x2) {
            var _0x2b0e59 = [];
            shuffle(gameData[_0x410964(0x288)][_0x410964(0x1f0)]), shuffle(gameData['stage'][_0x410964(0x292)]), shuffle(gameData['stage'][_0x410964(0x2f4)]), shuffle(gameData[_0x410964(0x288)][_0x410964(0x393)]);
            for (var _0x48f2e5 = 0x0; _0x48f2e5 < gameData['stage'][_0x410964(0x1f0)][_0x410964(0x42b)]; _0x48f2e5++) {
                if (gameData[_0x410964(0x288)][_0x410964(0x1f0)][_0x48f2e5] == 0x0) {
                    if (gameData[_0x410964(0x343)][_0x410964(0x42b)] == 0x0) {
                        for (var _0x82eb32 = 0x0; _0x82eb32 < gameData[_0x410964(0x288)]['event']['length']; _0x82eb32++) {
                            gameData[_0x410964(0x343)][_0x410964(0x30e)](gameData['stage']['event'][_0x82eb32]);
                        }
                        shuffle(gameData[_0x410964(0x343)]);
                    }
                    _0x2b0e59['push']({
                        'type': _0x410964(0x3a8),
                        'index': gameData[_0x410964(0x343)][0x0]
                    }), gameData[_0x410964(0x343)][_0x410964(0x3d1)]();
                } else {
                    if (gameData['stage'][_0x410964(0x1f0)][_0x48f2e5] == 0x1) {
                        if (gameData['itemsArr'][_0x410964(0x42b)] == 0x0) {
                            for (var _0x82eb32 = 0x0; _0x82eb32 < gameData[_0x410964(0x288)][_0x410964(0x2f4)][_0x410964(0x42b)]; _0x82eb32++) {
                                gameData[_0x410964(0x33b)][_0x410964(0x30e)](gameData[_0x410964(0x288)][_0x410964(0x2f4)][_0x82eb32]);
                            }
                            shuffle(gameData['itemsArr']);
                        }
                        _0x2b0e59[_0x410964(0x30e)]({
                            'type': _0x410964(0x3a8),
                            'index': gameData['itemsArr'][0x0]
                        }), gameData[_0x410964(0x33b)][_0x410964(0x3d1)]();
                    } else {
                        if (gameData[_0x410964(0x288)][_0x410964(0x1f0)][_0x48f2e5] == 0x2) {
                            if (gameData['enemyArr'][_0x410964(0x42b)] == 0x0) {
                                for (var _0x82eb32 = 0x0; _0x82eb32 < gameData[_0x410964(0x288)]['enemy']['length']; _0x82eb32++) {
                                    gameData[_0x410964(0x3e8)][_0x410964(0x30e)](gameData[_0x410964(0x288)][_0x410964(0x393)][_0x82eb32]);
                                }
                                shuffle(gameData[_0x410964(0x3e8)]);
                            }
                            _0x2b0e59[_0x410964(0x30e)]({
                                'type': 'card',
                                'index': gameData[_0x410964(0x3e8)][0x0]
                            }), gameData[_0x410964(0x3e8)]['shift']();
                        }
                    }
                }
            }
            shuffle(_0x2b0e59), insertCardArr(gameData[_0x410964(0x40d)], _0x2b0e59);
        } else _0x8090dc++;
        if (gameData[_0x410964(0x38f)]['length'] < _0x52850b) {
            var _0x2b0e59 = [];
            for (var _0x48f2e5 = 0x0; _0x48f2e5 < gameData[_0x410964(0x288)][_0x410964(0x370)][_0x410964(0x42b)]; _0x48f2e5++) {
                _0x2b0e59[_0x410964(0x30e)]({
                    'type': _0x410964(0x3a8),
                    'index': gameData[_0x410964(0x288)]['enemyReveal'][_0x48f2e5]
                });
            }
            shuffle(_0x2b0e59), insertCardArr(gameData[_0x410964(0x38f)], _0x2b0e59);
        } else _0x8090dc++;
        if (gameData['chestRevealArr'][_0x410964(0x42b)] < _0x52850b) {
            var _0x2b0e59 = [];
            for (var _0x48f2e5 = 0x0; _0x48f2e5 < gameData[_0x410964(0x288)][_0x410964(0x21d)][_0x410964(0x42b)]; _0x48f2e5++) {
                _0x2b0e59['push']({
                    'type': _0x410964(0x3a8),
                    'index': gameData[_0x410964(0x288)]['chestReveal'][_0x48f2e5]
                });
            }
            shuffle(_0x2b0e59), insertCardArr(gameData['chestRevealArr'], _0x2b0e59);
        } else _0x8090dc++;
        if (gameData['barrelRevealArr'][_0x410964(0x42b)] < _0x52850b) {
            var _0x2b0e59 = [];
            for (var _0x48f2e5 = 0x0; _0x48f2e5 < gameData['stage'][_0x410964(0x275)]['length']; _0x48f2e5++) {
                _0x2b0e59[_0x410964(0x30e)]({
                    'type': _0x410964(0x3a8),
                    'index': gameData[_0x410964(0x288)][_0x410964(0x275)][_0x48f2e5]
                });
            }
            shuffle(_0x2b0e59), insertCardArr(gameData[_0x410964(0x1a7)], _0x2b0e59);
        } else _0x8090dc++;
        if (gameData[_0x410964(0x360)][_0x410964(0x42b)] < _0x52850b) {
            var _0x2b0e59 = [];
            for (var _0x48f2e5 = 0x0; _0x48f2e5 < gameData[_0x410964(0x288)][_0x410964(0x2b1)][_0x410964(0x42b)]; _0x48f2e5++) {
                _0x2b0e59[_0x410964(0x30e)]({
                    'type': 'card',
                    'index': gameData[_0x410964(0x288)][_0x410964(0x2b1)][_0x48f2e5]
                });
            }
            shuffle(_0x2b0e59), insertCardArr(gameData[_0x410964(0x360)], _0x2b0e59);
        } else _0x8090dc++;
        if (gameData[_0x410964(0x271)][_0x410964(0x42b)] < _0x52850b) {
            var _0x2b0e59 = [];
            for (var _0x48f2e5 = 0x0; _0x48f2e5 < gameData[_0x410964(0x288)][_0x410964(0x29e)][_0x410964(0x42b)]; _0x48f2e5++) {
                _0x2b0e59['push']({
                    'type': _0x410964(0x3a8),
                    'index': gameData[_0x410964(0x288)][_0x410964(0x29e)][_0x48f2e5]
                });
            }
            shuffle(_0x2b0e59), insertCardArr(gameData[_0x410964(0x271)], _0x2b0e59);
        } else _0x8090dc++;
        if (gameData[_0x410964(0x243)]['length'] < _0x52850b) {
            var _0x2b0e59 = [];
            for (var _0x48f2e5 = 0x0; _0x48f2e5 < gameData['stage'][_0x410964(0x335)][_0x410964(0x42b)]; _0x48f2e5++) {
                _0x2b0e59[_0x410964(0x30e)]({
                    'type': _0x410964(0x3a8),
                    'index': gameData[_0x410964(0x288)][_0x410964(0x335)][_0x48f2e5]
                });
            }
            shuffle(_0x2b0e59), insertCardArr(gameData['keyArr'], _0x2b0e59);
        } else _0x8090dc++;
        if (gameData[_0x410964(0x2aa)]['length'] < _0x52850b) {
            var _0x2b0e59 = [];
            for (var _0x48f2e5 = 0x0; _0x48f2e5 < gameData[_0x410964(0x288)][_0x410964(0x335)][_0x410964(0x42b)]; _0x48f2e5++) {
                _0x2b0e59[_0x410964(0x30e)](randomIntFromInterval(0x1, 0x3));
            }
            shuffle(_0x2b0e59), insertCardArr(gameData['chestCountArr'], _0x2b0e59);
        } else _0x8090dc++;
        _0x8090dc == _0x435341 && (_0x3999d9 = _0x306b37);
    }
    for (var _0x48f2e5 = _0xd50d81; _0x48f2e5 < gameData['playArr'][_0x410964(0x42b)]; _0x48f2e5++) {
        var _0x2e01d0 = ![];
        gameData[_0x410964(0x323)] >= gameData[_0x410964(0x288)][_0x410964(0x2ab)] && gameData[_0x410964(0x288)][_0x410964(0x2ab)] != -0x1 && (gameData[_0x410964(0x2b6)] == 0x0 ? (gameData[_0x410964(0x2b6)] = gameData[_0x410964(0x2aa)][0x0], gameData['chestCountArr'][_0x410964(0x3d1)](), gameData[_0x410964(0x2c4)] < gameData[_0x410964(0x3c7)][_0x410964(0x42b)] ? _0x2e01d0 = !![] : gameData['chestKeyArrIndex'] = 0x0) : gameData[_0x410964(0x2b6)]--);
        if (_0x2e01d0) {
            if (gameData[_0x410964(0x3c7)][gameData[_0x410964(0x2c4)]] == 0x0) gameData[_0x410964(0x40d)][_0x410964(0x2e0)](_0x48f2e5, 0x0, {
                'type': gameData['chestArr'][0x0]['type'],
                'index': gameData[_0x410964(0x271)][0x0][_0x410964(0x3d4)]
            }), gameData[_0x410964(0x271)][_0x410964(0x3d1)]();
            else gameData[_0x410964(0x3c7)][gameData[_0x410964(0x2c4)]] == 0x1 && (gameData[_0x410964(0x40d)]['splice'](_0x48f2e5, 0x0, {
                'type': gameData[_0x410964(0x243)][0x0][_0x410964(0x31f)],
                'index': gameData['keyArr'][0x0][_0x410964(0x3d4)]
            }), gameData['keyArr'][_0x410964(0x3d1)]());
            gameData[_0x410964(0x2c4)]++, gameData[_0x410964(0x2b5)]++, gameData[_0x410964(0x2b5)] == 0x2 && (gameData['chestComplete'] = 0x0, gameData[_0x410964(0x323)] = 0x0);
        }
        gameData[_0x410964(0x323)]++;
    }
    typeof initSocket == _0x410964(0x2fc) && multiplayerSettings[_0x410964(0x36e)] && socketData[_0x410964(0x2bb)] ? socketData['host'] && postSocketUpdate('updatecard', {
        'playArr': gameData[_0x410964(0x40d)],
        'enemyRevealArr': gameData['enemyRevealArr'],
        'chestRevealArr': gameData[_0x410964(0x2ce)],
        'barrelRevealArr': gameData[_0x410964(0x1a7)],
        'castleRevealArr': gameData[_0x410964(0x360)],
        'chestArr': gameData[_0x410964(0x271)],
        'keyArr': gameData['keyArr'],
        'chestCountArr': gameData[_0x410964(0x2aa)],
        'dealCard': _0x27a86f,
        'player': gameData[_0x410964(0x321)],
        'moveCount': gameData[_0x410964(0x34e)],
        'stage': gameData[_0x410964(0x288)]
    }) : _0x27a86f && (createCards(), shuffleCards());
}

function insertCardArr(_0x575150, _0x30fa17) {
    var _0x3e806a = a0_0x1e1e8b;
    for (var _0x1af3ed = 0x0; _0x1af3ed < _0x30fa17[_0x3e806a(0x42b)]; _0x1af3ed++) {
        _0x575150[_0x3e806a(0x30e)](_0x30fa17[_0x1af3ed]);
    }
}

function getCardContent(_0xafd6ef, _0x5bfbc8, _0x38133a) {
    var _0x1efce0 = a0_0x1e1e8b,
        _0x1e5939, _0x5aabb8 = ![],
        _0x5495fe = -0x1,
        _0x474d59 = -0x1;
    for (var _0x52ba0b = 0x0; _0x52ba0b < gameData[_0x1efce0(0x2c5)][_0x1efce0(0x321)][_0x1efce0(0x42b)]; _0x52ba0b++) {
        _0x5bfbc8 == gameData[_0x1efce0(0x2c5)][_0x1efce0(0x321)][_0x52ba0b]['r'] && _0x38133a == gameData[_0x1efce0(0x2c5)][_0x1efce0(0x321)][_0x52ba0b]['c'] && gameData['dealCard'] && (_0x5aabb8 = !![], _0x5495fe = _0x52ba0b, _0x474d59 = gameData[_0x1efce0(0x2c5)]['player'][_0x52ba0b]['side']);
    }
    if (_0x5aabb8) return {
        'type': 'player',
        'index': _0x5495fe,
        'side': _0x474d59
    };
    else {
        if (gameData[_0x1efce0(0x3ee)]) {
            var _0x4633b9 = gameData[_0x1efce0(0x40a)][gameData[_0x1efce0(0x39b)]];
            return gameData['tutorialCardIndex']++, {
                'type': _0x1efce0(0x3a8),
                'index': _0x4633b9
            };
        } else {
            if (_0xafd6ef == _0x1efce0(0x1f0)) return _0x1e5939 = {
                'type': gameData['playArr'][0x0][_0x1efce0(0x31f)],
                'index': gameData['playArr'][0x0][_0x1efce0(0x3d4)]
            }, gameData[_0x1efce0(0x40d)]['shift'](), _0x1e5939;
            else {
                if (_0xafd6ef == _0x1efce0(0x393)) return _0x1e5939 = {
                    'type': gameData['enemyRevealArr'][0x0]['type'],
                    'index': gameData['enemyRevealArr'][0x0][_0x1efce0(0x3d4)]
                }, gameData[_0x1efce0(0x38f)][_0x1efce0(0x3d1)](), _0x1e5939;
                else {
                    if (_0xafd6ef == _0x1efce0(0x29e)) return _0x1e5939 = {
                        'type': gameData[_0x1efce0(0x2ce)][0x0][_0x1efce0(0x31f)],
                        'index': gameData[_0x1efce0(0x2ce)][0x0][_0x1efce0(0x3d4)]
                    }, gameData[_0x1efce0(0x2ce)][_0x1efce0(0x3d1)](), _0x1e5939;
                    else {
                        if (_0xafd6ef == 'barrel') return _0x1e5939 = {
                            'type': gameData['barrelRevealArr'][0x0][_0x1efce0(0x31f)],
                            'index': gameData[_0x1efce0(0x1a7)][0x0]['index']
                        }, gameData[_0x1efce0(0x1a7)]['shift'](), _0x1e5939;
                        else {
                            if (_0xafd6ef == _0x1efce0(0x40e)) return _0x1e5939 = {
                                'type': gameData[_0x1efce0(0x360)][0x0][_0x1efce0(0x31f)],
                                'index': gameData['castleRevealArr'][0x0]['index']
                            }, gameData[_0x1efce0(0x360)][_0x1efce0(0x3d1)](), _0x1e5939;
                        }
                    }
                }
            }
        }
    }
}

function setCardContent(_0x5d5d65, _0x326344, _0x8a451f, _0x1a8a65, _0x2e6c56) {
    var _0x56fb35 = a0_0x1e1e8b,
        _0x4ea285 = $[_0x56fb35(0x3a8)][_0x8a451f + '_' + _0x1a8a65]['target'];
    _0x4ea285[_0x56fb35(0x255)][_0x56fb35(0x23f)](), _0x4ea285[_0x56fb35(0x344)][_0x56fb35(0x23f)](), _0x4ea285['badgesArr'] = [], _0x4ea285[_0x56fb35(0x255)][_0x56fb35(0x25a)] = null, _0x4ea285[_0x56fb35(0x344)][_0x56fb35(0x25a)] = null, _0x4ea285['cardType'] = _0x5d5d65, _0x4ea285['cardIndex'] = _0x326344;
    if (_0x5d5d65 == _0x56fb35(0x321)) {
        var _0x39a7fd = getSpritesheet(_0x56fb35(0x321), _0x326344, _0x56fb35(0x289) + _0x326344);
        _0x4ea285[_0x56fb35(0x255)][_0x56fb35(0x25a)] = _0x39a7fd, _0x4ea285[_0x56fb35(0x255)][_0x56fb35(0x3fb)](_0x39a7fd);
        var _0x41a10c = getSpritesheet('player', _0x326344, _0x56fb35(0x1e9) + _0x326344);
        _0x4ea285[_0x56fb35(0x344)]['spritesheet'] = _0x41a10c, _0x4ea285[_0x56fb35(0x344)][_0x56fb35(0x3fb)](_0x41a10c), _0x4ea285[_0x56fb35(0x1d7)][_0x56fb35(0x30e)]({
            'type': _0x56fb35(0x2f2),
            'value': 0xa,
            'max': cardPlaySettings[_0x56fb35(0x421)]
        }), typeof initSocket == _0x56fb35(0x2fc) && multiplayerSettings[_0x56fb35(0x36e)] && socketData['online'] ? _0x4ea285[_0x56fb35(0x3c4)][_0x56fb35(0x3c1)] = $['status'][_0x56fb35(0x21a) + _0x326344][_0x56fb35(0x321)] : _0x4ea285[_0x56fb35(0x3c4)][_0x56fb35(0x3c1)] = textStrings[_0x56fb35(0x3ff)][_0x56fb35(0x2fb)](_0x56fb35(0x38c), _0x326344 + 0x1), _0x4ea285[_0x56fb35(0x3e7)] = _0x56fb35(0x321), _0x4ea285[_0x56fb35(0x243)] = [], _0x2e6c56 != undefined && (_0x4ea285[_0x56fb35(0x29b)][_0x56fb35(0x2b8)] = _0x2e6c56), $[_0x56fb35(0x3a8)][_0x56fb35(0x321) + _0x326344] = _0x4ea285;
    } else {
        if (cardTypes[_0x326344][_0x56fb35(0x29b)] != '') {
            var _0xf5a68e = getSpritesheet(_0x56fb35(0x3a8), _0x326344, _0x56fb35(0x22e) + _0x326344);
            _0x4ea285[_0x56fb35(0x255)][_0x56fb35(0x25a)] = _0xf5a68e, _0x4ea285['iconA'][_0x56fb35(0x3fb)](_0xf5a68e);
        }
        if (cardTypes[_0x326344]['iconSecond'] != '') {
            var _0x370298 = getSpritesheet(_0x56fb35(0x3a8), _0x326344, 'cardTypesIconSecond_' + _0x326344);
            _0x4ea285[_0x56fb35(0x344)]['spritesheet'] = _0x370298, _0x4ea285['iconB']['addChild'](_0x370298);
        }
        if (cardTypes[_0x326344][_0x56fb35(0x299)] != '') {
            var _0x22017d = getSpritesheet(_0x56fb35(0x3a8), _0x326344, _0x56fb35(0x210) + _0x326344);
            _0x4ea285[_0x56fb35(0x1b0)]['addChild'](_0x22017d);
        }
        if (cardTypes[_0x326344][_0x56fb35(0x310)] != '') {
            var _0x479419 = getSpritesheet(_0x56fb35(0x3a8), _0x326344, _0x56fb35(0x3cb) + _0x326344);
            _0x4ea285['shield'][_0x56fb35(0x3fb)](_0x479419);
        }
        var _0x5e082a = ![],
            _0x10ff24 = ![],
            _0x320ccf = ![],
            _0xe5796e = ![];
        if (cardTypes[_0x326344]['type'] == _0x56fb35(0x393)) {
            cardTypes[_0x326344][_0x56fb35(0x2f2)] > 0x0 && (_0x5e082a = !![]);
            cardTypes[_0x326344][_0x56fb35(0x37c)] > 0x0 && (_0x10ff24 = !![]);
            cardTypes[_0x326344][_0x56fb35(0x378)] > 0x0 && (_0x320ccf = !![]);
            if (cardTypes[_0x326344][_0x56fb35(0x273)] > 0x0) {}
        } else {
            if (cardTypes[_0x326344][_0x56fb35(0x31f)] == _0x56fb35(0x273)) cardTypes[_0x326344][_0x56fb35(0x273)] > 0x0 && (_0xe5796e = !![]);
            else {
                if (cardTypes[_0x326344]['type'] == _0x56fb35(0x2f2)) cardTypes[_0x326344][_0x56fb35(0x2f2)] > 0x0 && (_0x5e082a = !![]);
                else {
                    if (cardTypes[_0x326344]['type'] == 'weapon') cardTypes[_0x326344][_0x56fb35(0x37c)] > 0x0 && (_0x10ff24 = !![]);
                    else {
                        if (cardTypes[_0x326344][_0x56fb35(0x31f)] == _0x56fb35(0x378)) cardTypes[_0x326344]['shield'] > 0x0 && (_0x320ccf = !![]);
                        else {
                            if (cardTypes[_0x326344][_0x56fb35(0x31f)] == 'trap') cardTypes[_0x326344][_0x56fb35(0x37c)] > 0x0 && (_0x10ff24 = !![]), cardTypes[_0x326344][_0x56fb35(0x25a)] != undefined && (_0x4ea285[_0x56fb35(0x428)] = !![]);
                            else {
                                if (cardTypes[_0x326344][_0x56fb35(0x31f)] == 'chest') _0x4ea285[_0x56fb35(0x3b9)] = ![];
                                else cardTypes[_0x326344]['type'] == 'cannon' && (cardTypes[_0x326344][_0x56fb35(0x37c)] > 0x0 && (_0x10ff24 = !![]));
                            }
                        }
                    }
                }
            }
        }
        _0x5e082a && _0x4ea285[_0x56fb35(0x1d7)][_0x56fb35(0x30e)]({
            'type': _0x56fb35(0x2f2),
            'value': cardTypes[_0x326344][_0x56fb35(0x2f2)],
            'max': -0x1
        }), _0x10ff24 && _0x4ea285[_0x56fb35(0x1d7)][_0x56fb35(0x30e)]({
            'type': _0x56fb35(0x37c),
            'value': cardTypes[_0x326344][_0x56fb35(0x37c)],
            'max': -0x1
        }), _0x320ccf && _0x4ea285[_0x56fb35(0x1d7)][_0x56fb35(0x30e)]({
            'type': _0x56fb35(0x378),
            'value': cardTypes[_0x326344][_0x56fb35(0x378)],
            'max': -0x1
        }), _0xe5796e && _0x4ea285[_0x56fb35(0x1d7)][_0x56fb35(0x30e)]({
            'type': _0x56fb35(0x273),
            'value': cardTypes[_0x326344][_0x56fb35(0x273)],
            'max': -0x1
        }), _0x4ea285[_0x56fb35(0x3c4)][_0x56fb35(0x3c1)] = cardTypes[_0x326344][_0x56fb35(0x3c4)], _0x4ea285['cardType'] = cardTypes[_0x326344][_0x56fb35(0x31f)];
    }
    updateBadgeDisplay(_0x4ea285), updateNumbersDisplay(_0x4ea285);
}

function updateNumbersDisplay(_0x2887c5) {
    var _0x3adbda = a0_0x1e1e8b;
    if (_0x2887c5['badges'][_0x3adbda(0x307)] != undefined) {
        var _0x359564 = 0x0,
            _0x113100 = randomBoolean();
        if (_0x2887c5['cardType'] == 'enemy' || _0x2887c5[_0x3adbda(0x3e7)] == _0x3adbda(0x321)) {
            for (var _0xcd2b29 = 0x0; _0xcd2b29 < _0x2887c5[_0x3adbda(0x412)]['lastBadgesArr'][_0x3adbda(0x42b)]; _0xcd2b29++) {
                for (var _0x55e313 = 0x0; _0x55e313 < _0x2887c5[_0x3adbda(0x1d7)][_0x3adbda(0x42b)]; _0x55e313++) {
                    if (_0x2887c5[_0x3adbda(0x412)][_0x3adbda(0x307)][_0xcd2b29]['type'] == _0x2887c5[_0x3adbda(0x1d7)][_0x55e313][_0x3adbda(0x31f)]) {
                        var _0x47b0fc = _0x2887c5[_0x3adbda(0x412)][_0x3adbda(0x307)][_0xcd2b29][_0x3adbda(0x3e1)] - _0x2887c5[_0x3adbda(0x1d7)][_0x55e313]['value'];
                        if (_0x47b0fc > 0x0) animateNumbers(_0x2887c5, _0x2887c5['badgesArr'][_0x55e313][_0x3adbda(0x31f)], _0x113100, _0x359564, '-' + _0x47b0fc);
                        else _0x47b0fc < 0x0 && animateNumbers(_0x2887c5, _0x2887c5[_0x3adbda(0x1d7)][_0x55e313][_0x3adbda(0x31f)], _0x113100, _0x359564, '+' + Math[_0x3adbda(0x30f)](_0x47b0fc));
                        _0x359564 += 0.2, _0x113100 = _0x113100 == !![] ? ![] : !![];
                    }
                }
            }
            for (var _0xcd2b29 = 0x0; _0xcd2b29 < _0x2887c5['badges'][_0x3adbda(0x307)][_0x3adbda(0x42b)]; _0xcd2b29++) {
                var _0x19b9d0 = ![];
                for (var _0x55e313 = 0x0; _0x55e313 < _0x2887c5[_0x3adbda(0x1d7)][_0x3adbda(0x42b)]; _0x55e313++) {
                    _0x2887c5[_0x3adbda(0x412)][_0x3adbda(0x307)][_0xcd2b29][_0x3adbda(0x31f)] == _0x2887c5[_0x3adbda(0x1d7)][_0x55e313][_0x3adbda(0x31f)] && (_0x19b9d0 = !![]);
                }!_0x19b9d0 && (animateNumbers(_0x2887c5, _0x2887c5[_0x3adbda(0x412)][_0x3adbda(0x307)][_0xcd2b29][_0x3adbda(0x31f)], _0x113100, _0x359564, '-' + _0x2887c5[_0x3adbda(0x412)]['lastBadgesArr'][_0xcd2b29]['value']), _0x359564 += 0.2, _0x113100 = _0x113100 == !![] ? ![] : !![]);
            }
            for (var _0x55e313 = 0x0; _0x55e313 < _0x2887c5[_0x3adbda(0x1d7)][_0x3adbda(0x42b)]; _0x55e313++) {
                var _0xd5bf60 = ![];
                for (var _0xcd2b29 = 0x0; _0xcd2b29 < _0x2887c5[_0x3adbda(0x412)][_0x3adbda(0x307)][_0x3adbda(0x42b)]; _0xcd2b29++) {
                    _0x2887c5[_0x3adbda(0x412)][_0x3adbda(0x307)][_0xcd2b29][_0x3adbda(0x31f)] == _0x2887c5['badgesArr'][_0x55e313]['type'] && (_0xd5bf60 = !![]);
                }!_0xd5bf60 && (animateNumbers(_0x2887c5, _0x2887c5[_0x3adbda(0x1d7)][_0x55e313][_0x3adbda(0x31f)], _0x113100, _0x359564, '+' + _0x2887c5[_0x3adbda(0x1d7)][_0x55e313]['value']), _0x359564 += 0.2, _0x113100 = _0x113100 == !![] ? ![] : !![]);
            }
        }
    }
    _0x2887c5['badges']['lastBadgesArr'] = [];
    for (var _0x55e313 = 0x0; _0x55e313 < _0x2887c5[_0x3adbda(0x1d7)][_0x3adbda(0x42b)]; _0x55e313++) {
        _0x2887c5[_0x3adbda(0x412)]['lastBadgesArr'][_0x3adbda(0x30e)]({
            'type': _0x2887c5[_0x3adbda(0x1d7)][_0x55e313][_0x3adbda(0x31f)],
            'value': _0x2887c5[_0x3adbda(0x1d7)][_0x55e313][_0x3adbda(0x3e1)]
        });
    }
}

function createBadge(_0x396079) {
    var _0x19babd = a0_0x1e1e8b;
    _0x396079['badges'][_0x19babd(0x23f)]();
    if (_0x396079['toggleSide'] && !gameData[_0x19babd(0x404)]) return;
    sortOnObject(_0x396079[_0x19babd(0x1d7)], 'type');
    if (_0x396079[_0x19babd(0x1d7)][_0x19babd(0x42b)] > 0x2) {
        var _0x1202de = _0x396079[_0x19babd(0x1d7)][0x0];
        _0x396079[_0x19babd(0x1d7)][0x0] = _0x396079[_0x19babd(0x1d7)][0x1], _0x396079[_0x19babd(0x1d7)][0x1] = _0x1202de;
    } else {
        if (_0x396079[_0x19babd(0x1d7)][_0x19babd(0x42b)] == 0x2 && _0x396079[_0x19babd(0x1d7)][0x0]['type'] == _0x19babd(0x37c) && _0x396079[_0x19babd(0x1d7)][0x1]['type'] == 'health') {
            var _0x1202de = _0x396079[_0x19babd(0x1d7)][0x0];
            _0x396079['badgesArr'][0x0] = _0x396079[_0x19babd(0x1d7)][0x1], _0x396079[_0x19babd(0x1d7)][0x1] = _0x1202de;
        }
    }
    for (var _0x367c5b = 0x0; _0x367c5b < _0x396079[_0x19babd(0x1d7)][_0x19babd(0x42b)]; _0x367c5b++) {
        var _0x2e0334 = '',
            _0x38be40 = '';
        if (_0x396079[_0x19babd(0x1d7)][_0x367c5b][_0x19babd(0x31f)] == _0x19babd(0x2f2)) _0x2e0334 = _0x19babd(0x1c5), _0x38be40 = _0x19babd(0x2f2), _0x396079['badgesArr'][_0x367c5b][_0x19babd(0x3e1)] <= 0x0 && (_0x396079[_0x19babd(0x265)][_0x19babd(0x28b)] = 0x1);
        else {
            if (_0x396079[_0x19babd(0x1d7)][_0x367c5b]['type'] == _0x19babd(0x37c)) _0x2e0334 = _0x19babd(0x350), _0x38be40 = _0x19babd(0x37c);
            else {
                if (_0x396079[_0x19babd(0x1d7)][_0x367c5b]['type'] == _0x19babd(0x378)) _0x2e0334 = _0x19babd(0x31d), _0x38be40 = 'shield';
                else _0x396079[_0x19babd(0x1d7)][_0x367c5b][_0x19babd(0x31f)] == 'coin' && (_0x2e0334 = 'Coin', _0x38be40 = _0x19babd(0x273));
            }
        }
        var _0x35c98d = new createjs[(_0x19babd(0x423))](loader[_0x19babd(0x419)]('cardIcon' + _0x2e0334 + '_' + gameData[_0x19babd(0x216)]));
        centerReg(_0x35c98d), _0x35c98d['x'] = cardDesign[gameData['cardIndex']][_0x19babd(0x221)][_0x367c5b]['x'], _0x35c98d['y'] = cardDesign[gameData[_0x19babd(0x216)]][_0x19babd(0x221)][_0x367c5b]['y'];
        var _0x4c0175 = new createjs[(_0x19babd(0x270))]();
        _0x4c0175[_0x19babd(0x3a3)] = cardDesign[gameData[_0x19babd(0x216)]][_0x38be40][_0x19babd(0x317)] + _0x19babd(0x386), _0x4c0175[_0x19babd(0x226)] = '#fff', _0x4c0175[_0x19babd(0x234)] = 'center', _0x4c0175['textBaseline'] = _0x19babd(0x26f), _0x396079[_0x19babd(0x1d7)][_0x367c5b][_0x19babd(0x2b4)] == -0x1 ? _0x4c0175[_0x19babd(0x3c1)] = _0x396079['badgesArr'][_0x367c5b][_0x19babd(0x3e1)] : _0x4c0175[_0x19babd(0x3c1)] = _0x396079[_0x19babd(0x1d7)][_0x367c5b]['value'] + '/' + _0x396079[_0x19babd(0x1d7)][_0x367c5b][_0x19babd(0x2b4)], _0x4c0175['x'] = _0x35c98d['x'] + cardDesign[gameData['cardIndex']][_0x38be40][_0x19babd(0x3dc)], _0x4c0175['y'] = _0x35c98d['y'] + cardDesign[gameData['cardIndex']][_0x38be40][_0x19babd(0x21e)], _0x396079[_0x19babd(0x412)][_0x19babd(0x3fb)](_0x35c98d, _0x4c0175);
    }
}

function toggleCardBg(_0x50264f) {
    var _0x3c341a = a0_0x1e1e8b;
    _0x50264f[_0x3c341a(0x391)][_0x3c341a(0x23a)] = ![], _0x50264f[_0x3c341a(0x233)][_0x3c341a(0x23a)] = ![], _0x50264f[_0x3c341a(0x3f7)][_0x3c341a(0x23a)] = ![], _0x50264f[_0x3c341a(0x3e3)][_0x3c341a(0x23a)] = ![];
    if (_0x50264f[_0x3c341a(0x428)] && !gameData['side']) {
        _0x50264f[_0x3c341a(0x391)][_0x3c341a(0x23a)] = !![];
        return;
    }
    if (_0x50264f[_0x3c341a(0x1d7)][_0x3c341a(0x42b)] == 0x0) _0x50264f[_0x3c341a(0x391)][_0x3c341a(0x23a)] = !![];
    else {
        if (_0x50264f[_0x3c341a(0x1d7)][_0x3c341a(0x42b)] == 0x1) _0x50264f['type2'][_0x3c341a(0x23a)] = !![];
        else {
            if (_0x50264f[_0x3c341a(0x1d7)]['length'] == 0x2) _0x50264f[_0x3c341a(0x3f7)][_0x3c341a(0x23a)] = !![];
            else _0x50264f[_0x3c341a(0x1d7)][_0x3c341a(0x42b)] == 0x3 && (_0x50264f[_0x3c341a(0x3e3)][_0x3c341a(0x23a)] = !![]);
        }
    }
}

function createPlayerItem(_0x47d603, _0x3203f2, _0x20591e) {
    var _0x59bc63 = a0_0x1e1e8b,
        _0x3d1177 = new createjs[(_0x59bc63(0x423))](loader['getResult'](_0x59bc63(0x401) + _0x20591e));
    centerReg(_0x3d1177);
    if (_0x3203f2 == _0x59bc63(0x1b0)) _0x47d603[_0x59bc63(0x1b0)][_0x59bc63(0x23f)](), _0x47d603['weapon'][_0x59bc63(0x3fb)](_0x3d1177);
    else {
        if (_0x3203f2 == 'shield') _0x47d603['shield']['removeAllChildren'](), _0x47d603[_0x59bc63(0x378)]['addChild'](_0x3d1177);
        else _0x3203f2 == _0x59bc63(0x335) && (_0x47d603[_0x59bc63(0x335)][_0x59bc63(0x23f)](), _0x47d603['key']['addChild'](_0x3d1177));
    }
}

function removePlayerItem(_0x4c56d9, _0xdd1aab) {
    var _0x1d8a5e = a0_0x1e1e8b;
    if (_0xdd1aab == _0x1d8a5e(0x1b0)) _0x4c56d9[_0x1d8a5e(0x1b0)]['removeAllChildren']();
    else {
        if (_0xdd1aab == 'shield') _0x4c56d9[_0x1d8a5e(0x378)][_0x1d8a5e(0x23f)]();
        else _0xdd1aab == _0x1d8a5e(0x335) && _0x4c56d9['key'][_0x1d8a5e(0x23f)]();
    }
}

function getSpritesheet(_0x5cc8fc, _0x4a7cc7, _0x3e9713) {
    var _0x4b6396 = a0_0x1e1e8b,
        _0x5b9d8a = 0x1,
        _0x431fbd = 0x0,
        _0xbb606a = 0x0,
        _0x1f6bec = 0x0,
        _0x2023dc = 0x0,
        _0x4b06af = 0x0,
        _0xb62fce, _0x3071d7;
    if (_0x5cc8fc == 'player') {
        if (cardCharacter[_0x4a7cc7][_0x4b6396(0x25a)] == undefined) _0x203890 = new createjs['Bitmap'](loader[_0x4b6396(0x419)](_0x3e9713)), _0x203890[_0x4b6396(0x381)] = ![], centerReg(_0x203890);
        else {
            _0x431fbd = cardCharacter[_0x4a7cc7][_0x4b6396(0x25a)][_0x4b6396(0x331)], _0xbb606a = cardCharacter[_0x4a7cc7][_0x4b6396(0x25a)]['height'], _0x1f6bec = _0x431fbd / 0x2, _0x2023dc = _0xbb606a / 0x2, _0x4b06af = cardCharacter[_0x4a7cc7][_0x4b6396(0x25a)][_0x4b6396(0x345)];
            var _0x1baa90 = [],
                _0x5149f8 = [];
            for (var _0x5aed6e = 0x0; _0x5aed6e < _0x4b06af; _0x5aed6e++) {
                _0x1baa90[_0x4b6396(0x30e)](_0x5aed6e), _0x5149f8[_0x4b6396(0x30e)](_0x5aed6e);
            }
            _0x5149f8[_0x4b6396(0x2b9)](), _0xb62fce = {
                'on': {
                    'frames': _0x1baa90,
                    'speed': _0x5b9d8a,
                    'next': 'onIdle'
                },
                'onIdle': {
                    'frames': [_0x4b06af - 0x1],
                    'speed': _0x5b9d8a
                },
                'off': {
                    'frames': _0x5149f8,
                    'speed': _0x5b9d8a,
                    'next': _0x4b6396(0x2d3)
                },
                'offIdle': {
                    'frames': [0x0],
                    'speed': _0x5b9d8a
                }
            }, _0x3071d7 = _0x4b6396(0x2d3);
            var _0x3c3e60 = {
                'regX': _0x1f6bec,
                'regY': _0x2023dc,
                'height': _0xbb606a,
                'width': _0x431fbd,
                'count': _0x4b06af
            };
            spritesheetData = new createjs[(_0x4b6396(0x2c9))]({
                'images': [loader[_0x4b6396(0x419)](_0x3e9713)[_0x4b6396(0x20d)]],
                'frames': _0x3c3e60,
                'animations': _0xb62fce
            });
            var _0x203890 = new createjs[(_0x4b6396(0x197))](spritesheetData, _0x3071d7);
            _0x203890[_0x4b6396(0x2d9)] = 0x14, _0x203890[_0x4b6396(0x381)] = !![];
        }
    } else {
        if (_0x5cc8fc == _0x4b6396(0x3a8)) {
            if (cardTypes[_0x4a7cc7][_0x4b6396(0x25a)] == undefined) _0x203890 = new createjs['Bitmap'](loader[_0x4b6396(0x419)](_0x3e9713)), _0x203890['isSprite'] = ![], centerReg(_0x203890);
            else {
                _0x431fbd = cardTypes[_0x4a7cc7][_0x4b6396(0x25a)][_0x4b6396(0x331)], _0xbb606a = cardTypes[_0x4a7cc7][_0x4b6396(0x25a)][_0x4b6396(0x1ac)], _0x1f6bec = _0x431fbd / 0x2, _0x2023dc = _0xbb606a / 0x2, _0x4b06af = cardTypes[_0x4a7cc7]['spritesheet'][_0x4b6396(0x345)];
                var _0x1baa90 = [],
                    _0x5149f8 = [];
                for (var _0x5aed6e = 0x0; _0x5aed6e < _0x4b06af; _0x5aed6e++) {
                    _0x1baa90[_0x4b6396(0x30e)](_0x5aed6e), _0x5149f8[_0x4b6396(0x30e)](_0x5aed6e);
                }
                _0x5149f8[_0x4b6396(0x2b9)](), _0xb62fce = {
                    'on': {
                        'frames': _0x1baa90,
                        'speed': _0x5b9d8a,
                        'next': _0x4b6396(0x3aa)
                    },
                    'onIdle': {
                        'frames': [_0x4b06af - 0x1],
                        'speed': _0x5b9d8a
                    },
                    'off': {
                        'frames': _0x5149f8,
                        'speed': _0x5b9d8a,
                        'next': _0x4b6396(0x2d3)
                    },
                    'offIdle': {
                        'frames': [0x0],
                        'speed': _0x5b9d8a
                    }
                }, _0x3071d7 = _0x4b6396(0x2d3);
                var _0x3c3e60 = {
                    'regX': _0x1f6bec,
                    'regY': _0x2023dc,
                    'height': _0xbb606a,
                    'width': _0x431fbd,
                    'count': _0x4b06af
                };
                spritesheetData = new createjs[(_0x4b6396(0x2c9))]({
                    'images': [loader['getResult'](_0x3e9713)[_0x4b6396(0x20d)]],
                    'frames': _0x3c3e60,
                    'animations': _0xb62fce
                });
                var _0x203890 = new createjs[(_0x4b6396(0x197))](spritesheetData, _0x3071d7);
                _0x203890[_0x4b6396(0x2d9)] = 0x14, _0x203890[_0x4b6396(0x381)] = !![];
            }
        }
    }
    return _0x203890;
}

function moveCard(_0x999648, _0x26d474) {
    var _0x3de3ed = a0_0x1e1e8b;
    if (gameData['tutorialMode']) {
        if (_0x26d474 != gameData[_0x3de3ed(0x2a7)][gameData[_0x3de3ed(0x1b1)]]) return;
    }
    gameData[_0x3de3ed(0x20a)] = _0x26d474, gameData[_0x3de3ed(0x1ab)] = '', gameData[_0x3de3ed(0x272)] = null;
    var _0x5e4519 = $[_0x3de3ed(0x3a8)][_0x3de3ed(0x321) + _0x999648],
        _0x39a5ea = _0x5e4519[_0x3de3ed(0x377)],
        _0x11504e = _0x5e4519[_0x3de3ed(0x30c)],
        _0x1fae07 = _0x39a5ea,
        _0x5909a5 = _0x11504e;
    if (_0x26d474 == _0x3de3ed(0x20e)) _0x5909a5--, _0x5909a5 = _0x5909a5 < 0x0 ? 0x0 : _0x5909a5;
    else {
        if (_0x26d474 == 'right') _0x5909a5++, _0x5909a5 = _0x5909a5 > gameData[_0x3de3ed(0x2c5)][_0x3de3ed(0x30c)] - 0x1 ? gameData[_0x3de3ed(0x2c5)][_0x3de3ed(0x30c)] - 0x1 : _0x5909a5;
        else {
            if (_0x26d474 == 'up') _0x1fae07--, _0x1fae07 = _0x1fae07 < 0x0 ? 0x0 : _0x1fae07;
            else _0x26d474 == _0x3de3ed(0x334) && (_0x1fae07++, _0x1fae07 = _0x1fae07 > gameData[_0x3de3ed(0x2c5)][_0x3de3ed(0x377)] - 0x1 ? gameData[_0x3de3ed(0x2c5)][_0x3de3ed(0x377)] - 0x1 : _0x1fae07);
        }
    }
    if (_0x39a5ea == _0x1fae07 && _0x11504e == _0x5909a5) {
        playSound(_0x3de3ed(0x3b3));
        typeof initSocket == _0x3de3ed(0x2fc) && multiplayerSettings[_0x3de3ed(0x36e)] && socketData[_0x3de3ed(0x2bb)] ? postSocketUpdate(_0x3de3ed(0x246), {
            'index': socketData[_0x3de3ed(0x354)],
            'con': ![]
        }) : checkNextStage();
        return;
    } else {
        var _0x2b8e07 = $[_0x3de3ed(0x3a8)][_0x1fae07 + '_' + _0x5909a5][_0x3de3ed(0x23b)],
            _0x1a5dff = ![],
            _0x5f4724 = ![];
        if (_0x26d474 == 'left') _0x5e4519['icon'][_0x3de3ed(0x2b8)] = -0x1;
        else _0x26d474 == _0x3de3ed(0x32f) && (_0x5e4519[_0x3de3ed(0x29b)][_0x3de3ed(0x2b8)] = 0x1);
        gameData['moveCard'] = ![], _0x5e4519['lastX'] = _0x5e4519['x'], _0x5e4519[_0x3de3ed(0x25b)] = _0x5e4519['y'], _0x5e4519['nextX'] = _0x5e4519['x'], _0x5e4519['nextY'] = _0x5e4519['y'], cardsContainer[_0x3de3ed(0x3e4)](_0x5e4519, cardsContainer[_0x3de3ed(0x368)] - 0x1);
        updateCardBounce(_0x5e4519, _0x2b8e07) ? _0x5f4724 = !![] : _0x1a5dff = !![];
        if (_0x5f4724) {
            var _0x2607d3 = getCenterPosition(_0x5e4519['x'], _0x5e4519['y'], _0x2b8e07['x'], _0x2b8e07['y']);
            TweenMax['to'](_0x5e4519, gameSettings['cardMoveSpeed'] / 0x4, {
                'x': _0x2607d3['x'],
                'y': _0x2607d3['y'],
                'ease': Sine[_0x3de3ed(0x1eb)],
                'overwrite': !![],
                'onComplete': function() {
                    var _0x45ff21 = _0x3de3ed;
                    TweenMax['to'](_0x5e4519, gameSettings[_0x45ff21(0x1a8)], {
                        'x': _0x5e4519[_0x45ff21(0x2dc)],
                        'y': _0x5e4519[_0x45ff21(0x25b)],
                        'ease': Bounce['easeOut'],
                        'overwrite': !![],
                        'onComplete': function() {
                            bounceCardComplete(_0x5e4519, _0x2b8e07);
                        }
                    });
                }
            });
        } else _0x1a5dff && (playSound(_0x3de3ed(0x19f)), moveCards(_0x5e4519, _0x26d474), TweenMax['to'](_0x2b8e07, gameSettings[_0x3de3ed(0x1a8)] / 0x2, {
            'delay': gameSettings[_0x3de3ed(0x1a8)] / 0x2,
            'alpha': 0x0,
            'overwrite': !![],
            'onStart': function() {
                var _0x5d0bc0 = _0x3de3ed;
                _0x5e4519[_0x5d0bc0(0x377)] = _0x2b8e07[_0x5d0bc0(0x377)], _0x5e4519[_0x5d0bc0(0x30c)] = _0x2b8e07['column'], $['card'][_0x5e4519[_0x5d0bc0(0x377)] + '_' + _0x5e4519[_0x5d0bc0(0x30c)]]['target'] = _0x5e4519, updateCardBadge(_0x5e4519, _0x2b8e07);
            }
        }), _0x5e4519[_0x3de3ed(0x232)] = _0x2b8e07['x'], _0x5e4519['nextY'] = _0x2b8e07['y'], TweenMax['to'](_0x5e4519, gameSettings['cardMoveSpeed'], {
            'x': _0x2b8e07['x'],
            'y': _0x2b8e07['y'],
            'overwrite': !![],
            'onComplete': function() {
                moveCardComplete(_0x5e4519, _0x2b8e07), updateNumbersDisplay(_0x5e4519);
            }
        }));
    }
}

function moveCards(_0x2e5382, _0x5ea4ba) {
    var _0x576a38 = a0_0x1e1e8b,
        _0x5327e1 = _0x2e5382['row'],
        _0x358f13 = _0x2e5382['column'];
    gameData[_0x576a38(0x2dc)] = _0x2e5382[_0x576a38(0x2dc)], gameData[_0x576a38(0x25b)] = _0x2e5382[_0x576a38(0x25b)];
    var _0x2bea24, _0x1e7c04;
    gameData[_0x576a38(0x2db)] = _0x5327e1, gameData[_0x576a38(0x284)] = _0x358f13;
    if (_0x5ea4ba == 'up' || _0x5ea4ba == _0x576a38(0x334))
        for (var _0x21313f = 0x0; _0x21313f < gameData[_0x576a38(0x2c5)][_0x576a38(0x377)]; _0x21313f++) {
            var _0x3ec13b = ![];
            if (_0x5ea4ba == 'up') _0x5327e1++, _0x5327e1 > gameData[_0x576a38(0x2c5)][_0x576a38(0x377)] - 0x1 ? gameData[_0x576a38(0x2db)] = gameData['layout'][_0x576a38(0x377)] - 0x1 : _0x3ec13b = !![];
            else _0x5ea4ba == 'down' && (_0x5327e1--, _0x5327e1 < 0x0 ? gameData['lastR'] = 0x0 : _0x3ec13b = !![]);
            if (_0x3ec13b) {
                _0x2bea24 = gameData['lastX'], _0x1e7c04 = gameData[_0x576a38(0x25b)];
                var _0x3acc50 = $['card'][_0x5327e1 + '_' + _0x358f13][_0x576a38(0x23b)];
                if (_0x5ea4ba == _0x576a38(0x334)) _0x3acc50[_0x576a38(0x377)] = _0x5327e1 + 0x1, _0x3acc50[_0x576a38(0x30c)] = _0x358f13;
                else _0x5ea4ba == 'up' && (_0x3acc50[_0x576a38(0x377)] = _0x5327e1 - 0x1, _0x3acc50[_0x576a38(0x30c)] = _0x358f13);
                $['card'][_0x3acc50[_0x576a38(0x377)] + '_' + _0x3acc50[_0x576a38(0x30c)]][_0x576a38(0x23b)] = _0x3acc50, gameData[_0x576a38(0x2dc)] = _0x3acc50['x'], gameData['lastY'] = _0x3acc50['y'], TweenMax['to'](_0x3acc50, gameSettings['cardMoveSpeed'], {
                    'x': _0x2bea24,
                    'y': _0x1e7c04,
                    'overwrite': !![]
                });
            }
        } else {
            if (_0x5ea4ba == _0x576a38(0x20e) || _0x5ea4ba == _0x576a38(0x32f))
                for (var _0x21313f = 0x0; _0x21313f < gameData[_0x576a38(0x2c5)][_0x576a38(0x30c)]; _0x21313f++) {
                    var _0x3ec13b = ![];
                    if (_0x5ea4ba == _0x576a38(0x20e)) _0x358f13++, _0x358f13 > gameData[_0x576a38(0x2c5)][_0x576a38(0x30c)] - 0x1 ? gameData[_0x576a38(0x284)] = gameData[_0x576a38(0x2c5)][_0x576a38(0x30c)] - 0x1 : _0x3ec13b = !![];
                    else _0x5ea4ba == _0x576a38(0x32f) && (_0x358f13--, _0x358f13 < 0x0 ? gameData[_0x576a38(0x284)] = 0x0 : _0x3ec13b = !![]);
                    if (_0x3ec13b) {
                        _0x2bea24 = gameData['lastX'], _0x1e7c04 = gameData[_0x576a38(0x25b)];
                        var _0x3acc50 = $[_0x576a38(0x3a8)][_0x5327e1 + '_' + _0x358f13][_0x576a38(0x23b)];
                        if (_0x5ea4ba == _0x576a38(0x20e)) _0x3acc50[_0x576a38(0x377)] = _0x5327e1, _0x3acc50[_0x576a38(0x30c)] = _0x358f13 - 0x1;
                        else _0x5ea4ba == _0x576a38(0x32f) && (_0x3acc50[_0x576a38(0x377)] = _0x5327e1, _0x3acc50['column'] = _0x358f13 + 0x1);
                        $[_0x576a38(0x3a8)][_0x3acc50['row'] + '_' + _0x3acc50[_0x576a38(0x30c)]][_0x576a38(0x23b)] = _0x3acc50, _0x3acc50[_0x576a38(0x3e7)] == 'enemy' && (_0x5ea4ba == 'left' ? _0x3acc50[_0x576a38(0x29b)][_0x576a38(0x2b8)] = -0x1 : _0x3acc50[_0x576a38(0x29b)][_0x576a38(0x2b8)] = 0x1), gameData[_0x576a38(0x2dc)] = _0x3acc50['x'], gameData['lastY'] = _0x3acc50['y'], TweenMax['to'](_0x3acc50, gameSettings[_0x576a38(0x1a8)], {
                            'x': _0x2bea24,
                            'y': _0x1e7c04,
                            'overwrite': !![]
                        });
                    }
                }
        }
}

function moveCardComplete(_0x1fe620, _0xf7a04d) {
    var _0x217697 = a0_0x1e1e8b,
        _0x547791 = gameData['lastR'],
        _0x49c114 = gameData[_0x217697(0x284)];
    cardsContainer[_0x217697(0x413)](_0xf7a04d);
    var _0x53b995 = createSingleCard(_0x547791, _0x49c114);
    $[_0x217697(0x3a8)][_0x547791 + '_' + _0x49c114][_0x217697(0x23b)] = _0x53b995;
    var _0x1e2970 = getCardContent('play', _0x547791, _0x49c114);
    setCardContent(_0x1e2970[_0x217697(0x31f)], _0x1e2970['index'], _0x547791, _0x49c114), _0x53b995['x'] = gameData[_0x217697(0x2dc)], _0x53b995['y'] = gameData[_0x217697(0x25b)], animateMoveCard(_0x53b995, 0x0), checkGameTurn();
}

function bounceCardComplete(_0x42ed10, _0x1b1d77) {
    var _0x25fe2c = a0_0x1e1e8b,
        _0x26b468 = ![];
    if (_0x1b1d77[_0x25fe2c(0x3e7)] == _0x25fe2c(0x393)) {
        var _0x4dee53 = findBadgeValue(_0x1b1d77, _0x25fe2c(0x2f2));
        _0x4dee53 <= 0x0 && (_0x26b468 = !![]);
    } else {
        if (_0x1b1d77['cardType'] == 'chest') _0x1b1d77[_0x25fe2c(0x3b9)] && (_0x26b468 = !![]);
        else {
            if (_0x1b1d77[_0x25fe2c(0x3e7)] == 'barrel') _0x26b468 = !![];
            else _0x1b1d77[_0x25fe2c(0x3e7)] == _0x25fe2c(0x40e) && (_0x26b468 = !![]);
        }
    }
    _0x26b468 ? revealCardReward(_0x42ed10, _0x1b1d77, !![]) : (checkGameTurn(), endPlayerTurn());
}

function revealCardReward(_0x5e8006, _0x4323f8) {
    var _0x18f22d = a0_0x1e1e8b,
        _0x2f79df = _0x4323f8[_0x18f22d(0x377)],
        _0x25d421 = _0x4323f8['column'];
    playSound(_0x18f22d(0x219)), TweenMax['to'](_0x4323f8[_0x18f22d(0x427)], gameSettings[_0x18f22d(0x32b)], {
        'scaleX': 0x0,
        'ease': Sine[_0x18f22d(0x285)],
        'overwrite': !![],
        'onComplete': function() {
            var _0x49db61 = _0x18f22d;
            TweenMax['to'](_0x4323f8[_0x49db61(0x2d4)], gameSettings['cardFlipSpeed'], {
                'scaleX': 0x1,
                'ease': Sine[_0x49db61(0x1eb)],
                'overwrite': !![],
                'onComplete': function() {
                    var _0x58f510 = _0x49db61,
                        _0x19df69 = createSingleCard(_0x2f79df, _0x25d421);
                    $[_0x58f510(0x3a8)][_0x2f79df + '_' + _0x25d421]['target'] = _0x19df69;
                    var _0x2b7609 = getCardContent(_0x4323f8['cardType'], _0x2f79df, _0x25d421);
                    setCardContent(_0x2b7609[_0x58f510(0x31f)], _0x2b7609[_0x58f510(0x3d4)], _0x2f79df, _0x25d421), _0x19df69[_0x58f510(0x1d9)] = ![], _0x19df69['x'] = _0x4323f8['x'], _0x19df69['y'] = _0x4323f8['y'];
                    if (gameData[_0x58f510(0x20a)] == 'right') _0x19df69[_0x58f510(0x29b)][_0x58f510(0x2b8)] = -0x1;
                    else gameData[_0x58f510(0x20a)] == _0x58f510(0x20e) && (_0x19df69['icon'][_0x58f510(0x2b8)] = 0x1);
                    cardsContainer[_0x58f510(0x413)](_0x4323f8), playSound('soundCardFlip'), _0x19df69[_0x58f510(0x427)][_0x58f510(0x2b8)] = 0x0, TweenMax['to'](_0x19df69['cover'], gameSettings[_0x58f510(0x32b)], {
                        'scaleX': 0x0,
                        'ease': Sine[_0x58f510(0x285)],
                        'overwrite': !![],
                        'onComplete': function() {
                            var _0x516fc4 = _0x58f510;
                            _0x19df69[_0x516fc4(0x3e7)] == _0x516fc4(0x393) ? playSound(_0x516fc4(0x395)) : playSound(_0x516fc4(0x418)), TweenMax['to'](_0x19df69['inner'], gameSettings[_0x516fc4(0x32b)], {
                                'scaleX': 0x1,
                                'ease': Sine['easeOut'],
                                'overwrite': !![],
                                'onComplete': function() {
                                    tryNextMove();
                                }
                            });
                        }
                    });
                }
            });
        }
    });
}

function startBombAnimation() {
    var _0xce4d67 = a0_0x1e1e8b;
    gameData[_0xce4d67(0x379)] = ![], bombContainer[_0xce4d67(0x23f)]();
    var _0x4212eb = [_0xce4d67(0x20e), _0xce4d67(0x32f), 'up', 'down'],
        _0x4d330d = $[_0xce4d67(0x3a8)][_0xce4d67(0x321) + gameData[_0xce4d67(0x321)]],
        _0x5b1f7c = _0x4d330d[_0xce4d67(0x377)],
        _0x319a0e = _0x4d330d[_0xce4d67(0x30c)];
    gameData[_0xce4d67(0x23c)] = [];
    var _0x469e14 = gameData[_0xce4d67(0x2c5)]['row'] * gameData[_0xce4d67(0x2c5)][_0xce4d67(0x30c)];
    for (var _0x4357d4 = 0x0; _0x4357d4 < _0x4212eb['length']; _0x4357d4++) {
        var _0xd32ed8 = _0x5b1f7c,
            _0x571069 = _0x319a0e;
        for (var _0x4162bc = 0x0; _0x4162bc < _0x469e14; _0x4162bc++) {
            if (_0x4212eb[_0x4357d4] == _0xce4d67(0x20e)) _0x571069--, _0x571069 = _0x571069 < 0x0 ? 0x0 : _0x571069;
            else {
                if (_0x4212eb[_0x4357d4] == _0xce4d67(0x32f)) _0x571069++, _0x571069 = _0x571069 > gameData[_0xce4d67(0x2c5)]['column'] - 0x1 ? gameData['layout'][_0xce4d67(0x30c)] - 0x1 : _0x571069;
                else {
                    if (_0x4212eb[_0x4357d4] == 'up') _0xd32ed8--, _0xd32ed8 = _0xd32ed8 < 0x0 ? 0x0 : _0xd32ed8;
                    else _0x4212eb[_0x4357d4] == _0xce4d67(0x334) && (_0xd32ed8++, _0xd32ed8 = _0xd32ed8 > gameData['layout']['row'] - 0x1 ? gameData[_0xce4d67(0x2c5)][_0xce4d67(0x377)] - 0x1 : _0xd32ed8);
                }
            }
            if (_0xd32ed8 == _0x5b1f7c && _0x571069 == _0x319a0e) _0x4162bc = _0x469e14;
            else {
                var _0xf8b4fe = $[_0xce4d67(0x3a8)][_0xd32ed8 + '_' + _0x571069]['target'];
                (_0xf8b4fe[_0xce4d67(0x3e7)] == _0xce4d67(0x393) || _0xf8b4fe[_0xce4d67(0x3e7)] == _0xce4d67(0x321)) && (_0x4162bc = _0x469e14, gameData[_0xce4d67(0x23c)][_0xce4d67(0x30e)](_0xf8b4fe));
            }
        }
    }
    gameData[_0xce4d67(0x213)] = 0x0, protonData['objects'] = [], protonData[_0xce4d67(0x209)] = [];
    if (gameData[_0xce4d67(0x23c)][_0xce4d67(0x42b)] > 0x0) {
        playSound('soundCannon');
        for (var _0x4357d4 = 0x0; _0x4357d4 < gameData[_0xce4d67(0x23c)]['length']; _0x4357d4++) {
            var _0xf8b4fe = gameData[_0xce4d67(0x23c)][_0x4357d4];
            gameData[_0xce4d67(0x213)]++;
            var _0x3b4ec8 = new createjs['Bitmap'](loader[_0xce4d67(0x419)](_0xce4d67(0x401) + gameData[_0xce4d67(0x373)]));
            centerReg(_0x3b4ec8), _0x3b4ec8['x'] = _0x4d330d['x'], _0x3b4ec8['y'] = _0x4d330d['y'], bombContainer[_0xce4d67(0x3fb)](_0x3b4ec8), protonData[_0xce4d67(0x1ef)][_0xce4d67(0x30e)](_0x3b4ec8), TweenMax['to'](_0x3b4ec8, gameSettings[_0xce4d67(0x2be)], {
                'x': _0xf8b4fe['x'],
                'y': _0xf8b4fe['y'],
                'ease': Sine[_0xce4d67(0x285)],
                'overwrite': !![],
                'onComplete': bombAnimationComplete,
                'onCompleteParams': [_0x4d330d, _0xf8b4fe]
            });
        }
        createProton(_0x4d330d);
    } else endPlayerTurn(), gameData[_0xce4d67(0x373)] = -0x1;
}

function bombAnimationComplete(_0x9b8c7f, _0x543bde) {
    var _0x19e258 = a0_0x1e1e8b;
    bombContainer[_0x19e258(0x23f)]();
    var _0x3763fa = findBadgeValue(_0x543bde, 'health'),
        _0x160fc8 = findBadgeValue(_0x543bde, _0x19e258(0x378)),
        _0x179fc1 = cardTypes[gameData[_0x19e258(0x373)]][_0x19e258(0x37c)];
    _0x160fc8 > 0x0 && (playSoundHit(), animateIconHit(_0x543bde), _0x160fc8 -= _0x179fc1, _0x160fc8 > 0x0 ? (_0x179fc1 = 0x0, updateBadgeValue(_0x543bde, _0x19e258(0x378), _0x160fc8)) : (_0x179fc1 = Math[_0x19e258(0x30f)](_0x160fc8), removeBadge(_0x543bde, _0x19e258(0x378)), removePlayerItem(_0x543bde, _0x19e258(0x378))));
    if (_0x3763fa > 0x0) {
        playSoundHit(), animateIconHit(_0x543bde), _0x3763fa -= _0x179fc1;
        if (_0x3763fa > 0x0) _0x179fc1 = 0x0, updateBadgeValue(_0x543bde, _0x19e258(0x2f2), _0x3763fa);
        else {
            _0x179fc1 = Math[_0x19e258(0x30f)](_0x3763fa);
            if (typeof initSocket == _0x19e258(0x2fc) && multiplayerSettings['enable'] && socketData[_0x19e258(0x2bb)]) {
                var _0x477d90 = gameData[_0x19e258(0x321)] == 0x0 ? 0x1 : 0x0;
                $['status'][_0x19e258(0x29b) + _0x477d90]['kill']++;
            } else playerData['kill']++;
            updateGameDisplay(), _0x3763fa = 0x0, updateBadgeValue(_0x543bde, 'health', _0x3763fa);
        }
    }
    gameData['totalBomb']--;
    if (gameData[_0x19e258(0x213)] <= 0x0) {
        var _0x460265 = ![];
        for (var _0xafa6b = 0x0; _0xafa6b < gameData[_0x19e258(0x23c)][_0x19e258(0x42b)]; _0xafa6b++) {
            var _0x212b2d = gameData[_0x19e258(0x23c)][_0xafa6b],
                _0x3763fa = findBadgeValue(_0x212b2d, _0x19e258(0x2f2));
            _0x3763fa <= 0x0 && (_0x460265 = !![], revealCardReward(_0x9b8c7f, _0x212b2d, ![])), updateNumbersDisplay(_0x212b2d);
        }
        gameData[_0x19e258(0x373)] = -0x1, !_0x460265 && endPlayerTurn();
    }
}

function createProton(_0x5270f9) {
    var _0x999a7d = a0_0x1e1e8b;
    if (protonData['proton'] == null) {
        protonData[_0x999a7d(0x2f8)] = new Proton();
        var _0x3a6797 = new Proton[(_0x999a7d(0x25d))](particlesContainer);
        protonData[_0x999a7d(0x2f8)][_0x999a7d(0x1bb)](_0x3a6797);
    }
    for (var _0x421633 = 0x0; _0x421633 < protonData[_0x999a7d(0x1ef)][_0x999a7d(0x42b)]; _0x421633++) {
        protonData[_0x999a7d(0x209)][_0x421633] = new Proton[(_0x999a7d(0x2de))](), protonData['emitter'][_0x421633][_0x999a7d(0x33a)] = new Proton['Rate'](new Proton[(_0x999a7d(0x1db))](0x5, 0xa), new Proton[(_0x999a7d(0x1db))](0.01, 0.015));
        var _0x345dd4 = [];
        _0x345dd4[_0x999a7d(0x30e)](itemParticle1), _0x345dd4[_0x999a7d(0x30e)](itemParticle2), _0x345dd4[_0x999a7d(0x30e)](itemParticle3), protonData[_0x999a7d(0x209)][_0x421633][_0x999a7d(0x267)](new Proton[(_0x999a7d(0x301))](0x1)), protonData[_0x999a7d(0x209)][_0x421633][_0x999a7d(0x267)](new Proton[(_0x999a7d(0x2c1))](0x0, 0.5)), protonData[_0x999a7d(0x209)][_0x421633]['addInitialize'](new Proton[(_0x999a7d(0x261))](_0x345dd4)), protonData[_0x999a7d(0x209)][_0x421633][_0x999a7d(0x212)](new Proton[(_0x999a7d(0x2d7))](0x1, 0x0)), protonData[_0x999a7d(0x209)][_0x421633]['addBehaviour'](new Proton[(_0x999a7d(0x3de))](1.2, 0x1)), protonData[_0x999a7d(0x209)][_0x421633]['p']['x'] = _0x5270f9['x'], protonData[_0x999a7d(0x209)][_0x421633]['p']['y'] = _0x5270f9['y'], protonData[_0x999a7d(0x209)][_0x421633]['emit'](gameSettings['bombSpeed'] / 1.2), protonData[_0x999a7d(0x2f8)][_0x999a7d(0x203)](protonData['emitter'][_0x421633]);
    }
}

function loopProton() {
    var _0x19d47b = a0_0x1e1e8b;
    if (protonData['proton']) {
        protonData[_0x19d47b(0x2f8)][_0x19d47b(0x225)]();
        for (var _0x21ae18 = 0x0; _0x21ae18 < protonData[_0x19d47b(0x209)][_0x19d47b(0x42b)]; _0x21ae18++) {
            var _0x25a8fa = protonData['objects'][_0x21ae18];
            protonData['emitter'][_0x21ae18]['p']['x'] = _0x25a8fa['x'], protonData[_0x19d47b(0x209)][_0x21ae18]['p']['y'] = _0x25a8fa['y'];
        }
    }
}

function destoryProton() {
    var _0x2a5514 = a0_0x1e1e8b;
    protonData[_0x2a5514(0x2f8)] && (protonData['proton'][_0x2a5514(0x341)](), protonData[_0x2a5514(0x2f8)] = null);
}

function tryNextMove() {
    var _0x5d65d7 = a0_0x1e1e8b;
    !gameData[_0x5d65d7(0x328)] && (gameData['dealCard'] ? (gameData[_0x5d65d7(0x1a6)] = ![], gameData[_0x5d65d7(0x379)] = !![], focusPlayerCard(), showTutorialText()) : gameData[_0x5d65d7(0x373)] != -0x1 ? startBombAnimation() : endPlayerTurn());
}

function checkGameTurn() {
    var _0x5c090 = a0_0x1e1e8b;
    gameData[_0x5c090(0x404)] = gameData[_0x5c090(0x404)] == !![] ? ![] : !![];
    var _0x22f3b6 = ![],
        _0x1ee3c4 = ![];
    for (var _0x49524d = 0x0; _0x49524d < gameData['layout'][_0x5c090(0x377)]; _0x49524d++) {
        for (var _0x15c5aa = 0x0; _0x15c5aa < gameData['layout'][_0x5c090(0x30c)]; _0x15c5aa++) {
            var _0x40a995 = $[_0x5c090(0x3a8)][_0x49524d + '_' + _0x15c5aa][_0x5c090(0x23b)];
            if (_0x40a995['toggleSide']) {
                _0x22f3b6 = !![];
                var _0x5c8432 = _0x5c090(0x3bc);
                gameData[_0x5c090(0x404)] && (_0x1ee3c4 = !![], _0x5c8432 = 'on'), updateBadgeDisplay(_0x40a995), _0x40a995[_0x5c090(0x255)][_0x5c090(0x25a)] != null && _0x40a995[_0x5c090(0x255)][_0x5c090(0x25a)][_0x5c090(0x381)] && _0x40a995[_0x5c090(0x255)]['spritesheet'][_0x5c090(0x2af)](_0x5c8432), _0x40a995[_0x5c090(0x344)][_0x5c090(0x25a)] != null && _0x40a995[_0x5c090(0x344)][_0x5c090(0x25a)][_0x5c090(0x381)] && _0x40a995['iconB'][_0x5c090(0x25a)]['gotoAndPlay'](_0x5c8432);
            }
        }
    }
    _0x22f3b6 && playSound(_0x5c090(0x222)), _0x1ee3c4 && playSound('soundTrapSpike');
}

function endPlayerTurn() {
    var _0x1a455c = a0_0x1e1e8b;
    if (typeof initSocket == 'function' && multiplayerSettings['enable'] && socketData['online']) postSocketUpdate(_0x1a455c(0x246), {
        'index': socketData[_0x1a455c(0x354)],
        'con': ![]
    });
    else {
        var _0x22e7fd = findBadgeValue($[_0x1a455c(0x3a8)]['player' + gameData[_0x1a455c(0x321)]], _0x1a455c(0x2f2));
        if (_0x22e7fd <= 0x0) !gameData[_0x1a455c(0x328)] && (showGameStatus('gameover', 0x3), endGame());
        else {
            if (gameData[_0x1a455c(0x1ab)] != '') moveCard(gameData['player'], gameData[_0x1a455c(0x1ab)]);
            else {
                if (gameData['nextCard'] != null) {
                    var _0x22c95d = '';
                    if ($[_0x1a455c(0x3a8)][_0x1a455c(0x321) + gameData[_0x1a455c(0x321)]]['x'] > gameData['nextCard']['x']) _0x22c95d = 'left';
                    else {
                        if ($['card'][_0x1a455c(0x321) + gameData['player']]['x'] < gameData['nextCard']['x']) _0x22c95d = 'right';
                        else {
                            if ($['card'][_0x1a455c(0x321) + gameData[_0x1a455c(0x321)]]['y'] > gameData['nextCard']['y']) _0x22c95d = 'up';
                            else $[_0x1a455c(0x3a8)][_0x1a455c(0x321) + gameData[_0x1a455c(0x321)]]['y'] < gameData[_0x1a455c(0x272)]['y'] && (_0x22c95d = _0x1a455c(0x334));
                        }
                    }
                    moveCard(gameData[_0x1a455c(0x321)], _0x22c95d);
                } else showTutorialText(), checkNextStage();
            }
        }
    }
}

function focusPlayerCard() {
    var _0x5d7324 = a0_0x1e1e8b;
    if (typeof initSocket == _0x5d7324(0x2fc) && multiplayerSettings[_0x5d7324(0x36e)] && socketData[_0x5d7324(0x2bb)]) {
        var _0x108639 = $['card']['player' + 0x0],
            _0x55addc = $['card'][_0x5d7324(0x321) + 0x1];
        TweenMax[_0x5d7324(0x36d)](_0x108639[_0x5d7324(0x21c)]), TweenMax[_0x5d7324(0x36d)](_0x55addc[_0x5d7324(0x21c)]), TweenMax[_0x5d7324(0x36d)]($[_0x5d7324(0x1ec)][_0x5d7324(0x2a4) + 0x0]), TweenMax[_0x5d7324(0x36d)]($['status'][_0x5d7324(0x2a4) + 0x1]), _0x108639['focus'][_0x5d7324(0x28b)] = _0x55addc[_0x5d7324(0x21c)]['alpha'] = 0x0, $[_0x5d7324(0x1ec)]['iconHilight' + 0x0][_0x5d7324(0x28b)] = $[_0x5d7324(0x1ec)][_0x5d7324(0x2a4) + 0x0]['alpha'] = 0x0, !gameData[_0x5d7324(0x328)] && (animateFocusBlink($[_0x5d7324(0x3a8)][_0x5d7324(0x321) + gameData['player']][_0x5d7324(0x21c)]), animateFocusBlink($[_0x5d7324(0x1ec)][_0x5d7324(0x2a4) + gameData[_0x5d7324(0x321)]]), showGameStatus('turn', 0x1));
    }
}

function animateFocusBlink(_0x226959) {
    var _0x178f71 = a0_0x1e1e8b;
    _0x226959[_0x178f71(0x28b)] = 0x1, TweenMax['to'](_0x226959, 0.3, {
        'alpha': 0.5,
        'overwrite': !![],
        'onComplete': function() {
            TweenMax['to'](_0x226959, 0.3, {
                'alpha': 0x1,
                'overwrite': !![],
                'onComplete': animateFocusBlink,
                'onCompleteParams': [_0x226959]
            });
        }
    });
}

function updateCardBadge(_0x3817d4, _0x37e76f) {
    var _0x1dd442 = a0_0x1e1e8b,
        _0x3d5e1c = findBadgeValue(_0x3817d4, 'health'),
        _0x120ac0 = findBadgeValue(_0x3817d4, _0x1dd442(0x37c)),
        _0x47e20a = findBadgeValue(_0x3817d4, _0x1dd442(0x378));
    if (_0x37e76f[_0x1dd442(0x3e7)] == 'coin') {
        playSound('soundCoin');
        var _0x4dc565 = findBadgeValue(_0x37e76f, _0x1dd442(0x273));
        typeof initSocket == _0x1dd442(0x2fc) && multiplayerSettings['enable'] && socketData[_0x1dd442(0x2bb)] ? $[_0x1dd442(0x1ec)]['icon' + gameData['player']]['score'] += _0x4dc565 : playerData[_0x1dd442(0x30a)] += _0x4dc565, updateGameDisplay();
    } else {
        if (_0x37e76f[_0x1dd442(0x3e7)] == _0x1dd442(0x1e4)) {
            var _0x41b976 = findBadgeValue(_0x37e76f, _0x1dd442(0x37c));
            _0x37e76f[_0x1dd442(0x428)] ? gameData[_0x1dd442(0x404)] && (playSoundHit(), animateIconHit(_0x3817d4), _0x3d5e1c -= _0x41b976) : (_0x3d5e1c -= _0x41b976, playSoundHit(), animateIconHit(_0x3817d4)), updateBadgeValue(_0x3817d4, _0x1dd442(0x2f2), _0x3d5e1c);
        } else {
            if (_0x37e76f[_0x1dd442(0x3e7)] == _0x1dd442(0x2f2)) {
                playSound(_0x1dd442(0x251));
                var _0x4295bc = findBadgeValue(_0x37e76f, 'health');
                _0x3d5e1c += _0x4295bc, _0x3d5e1c = _0x3d5e1c > cardPlaySettings['maxHealth'] ? cardPlaySettings['maxHealth'] : _0x3d5e1c, updateBadgeValue(_0x3817d4, _0x1dd442(0x2f2), _0x3d5e1c);
            } else {
                if (_0x37e76f[_0x1dd442(0x3e7)] == 'weapon') {
                    playSound(_0x1dd442(0x1bf));
                    var _0x189c00 = findBadgeValue(_0x37e76f, _0x1dd442(0x37c));
                    _0x120ac0 < _0x189c00 && (removeBadge(_0x3817d4, _0x1dd442(0x37c)), _0x3817d4[_0x1dd442(0x1d7)]['push']({
                        'type': 'damage',
                        'value': _0x189c00,
                        'max': -0x1
                    }), updateBadgeDisplay(_0x3817d4), createPlayerItem(_0x3817d4, _0x1dd442(0x1b0), _0x37e76f[_0x1dd442(0x216)]));
                } else {
                    if (_0x37e76f[_0x1dd442(0x3e7)] == _0x1dd442(0x378)) {
                        playSound(_0x1dd442(0x1bf));
                        var _0x189c00 = findBadgeValue(_0x37e76f, _0x1dd442(0x378));
                        _0x47e20a < _0x189c00 && (removeBadge(_0x3817d4, _0x1dd442(0x378)), _0x3817d4[_0x1dd442(0x1d7)][_0x1dd442(0x30e)]({
                            'type': _0x1dd442(0x378),
                            'value': _0x189c00,
                            'max': -0x1
                        }), updateBadgeDisplay(_0x3817d4), createPlayerItem(_0x3817d4, _0x1dd442(0x378), _0x37e76f[_0x1dd442(0x216)]));
                    } else {
                        if (_0x37e76f['cardType'] == 'key') playSound(_0x1dd442(0x1bf)), _0x3817d4[_0x1dd442(0x243)]['push'](_0x37e76f[_0x1dd442(0x216)]), createPlayerItem(_0x3817d4, _0x1dd442(0x335), _0x37e76f['cardIndex']);
                        else {
                            if (_0x37e76f[_0x1dd442(0x3e7)] == _0x1dd442(0x31c)) gameData['cannonIndex'] = _0x37e76f[_0x1dd442(0x216)];
                            else {
                                if (_0x37e76f[_0x1dd442(0x3e7)] == _0x1dd442(0x393) || _0x37e76f['cardType'] == _0x1dd442(0x321)) {
                                    var _0x4295bc = findBadgeValue(_0x37e76f, 'health'),
                                        _0x41b976 = findBadgeValue(_0x37e76f, 'damage'),
                                        _0x2a2654 = findBadgeValue(_0x37e76f, _0x1dd442(0x378)),
                                        _0x3defbc = _0x4295bc + _0x41b976 + _0x2a2654;
                                    _0x47e20a > 0x0 && (playSoundHit(), _0x47e20a -= _0x3defbc, _0x47e20a > 0x0 ? (_0x3defbc = 0x0, updateBadgeValue(_0x3817d4, _0x1dd442(0x378), _0x47e20a)) : (_0x3defbc = Math[_0x1dd442(0x30f)](_0x47e20a), removeBadge(_0x3817d4, _0x1dd442(0x378)), removePlayerItem(_0x3817d4, _0x1dd442(0x378)))), _0x120ac0 > 0x0 && (playSoundHit(), _0x120ac0 -= _0x3defbc, _0x120ac0 > 0x0 ? (_0x3defbc = 0x0, updateBadgeValue(_0x3817d4, _0x1dd442(0x37c), _0x120ac0)) : (_0x3defbc = Math['abs'](_0x120ac0), _0x120ac0 = 0x0, removeBadge(_0x3817d4, _0x1dd442(0x37c)), removePlayerItem(_0x3817d4, _0x1dd442(0x1b0)))), _0x3d5e1c > 0x0 && (playSoundHit(), animateIconHit(_0x3817d4), _0x3d5e1c -= _0x3defbc, _0x3d5e1c > 0x0 ? (typeof initSocket == _0x1dd442(0x2fc) && multiplayerSettings['enable'] && socketData[_0x1dd442(0x2bb)] ? $[_0x1dd442(0x1ec)][_0x1dd442(0x29b) + gameData[_0x1dd442(0x321)]]['kill']++ : playerData[_0x1dd442(0x1a0)]++, updateGameDisplay(), _0x3defbc = 0x0, updateBadgeValue(_0x3817d4, _0x1dd442(0x2f2), _0x3d5e1c)) : (_0x3defbc = Math['abs'](_0x3d5e1c), _0x3d5e1c = 0x0, updateBadgeValue(_0x3817d4, _0x1dd442(0x2f2), _0x3d5e1c)));
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function playSoundHit() {
    var _0x3792a4 = a0_0x1e1e8b,
        _0x2a7b8b = Math[_0x3792a4(0x338)](Math[_0x3792a4(0x2ea)]() * 0x3) + 0x1;
    playSound(_0x3792a4(0x1f2) + _0x2a7b8b);
}

function updateCardBounce(_0x358946, _0x4a52dc) {
    var _0x1ff48a = a0_0x1e1e8b,
        _0x3d6c07 = findBadgeValue(_0x358946, _0x1ff48a(0x2f2)),
        _0x5ee118 = findBadgeValue(_0x358946, _0x1ff48a(0x37c)),
        _0xbea056 = findBadgeValue(_0x358946, 'shield');
    if (_0x4a52dc[_0x1ff48a(0x3e7)] == _0x1ff48a(0x29e)) return _0x358946['keyArr'][_0x1ff48a(0x42b)] == 0x0 ? (playSound(_0x1ff48a(0x1a3)), !![]) : (_0x4a52dc[_0x1ff48a(0x255)][_0x1ff48a(0x25a)] != null && _0x4a52dc[_0x1ff48a(0x255)]['spritesheet']['isSprite'] && _0x4a52dc[_0x1ff48a(0x255)]['spritesheet'][_0x1ff48a(0x2af)]('on'), _0x4a52dc['iconB'][_0x1ff48a(0x25a)] != null && _0x4a52dc[_0x1ff48a(0x344)][_0x1ff48a(0x25a)][_0x1ff48a(0x381)] && _0x4a52dc[_0x1ff48a(0x344)][_0x1ff48a(0x25a)][_0x1ff48a(0x2af)]('on'), playSound(_0x1ff48a(0x320)), _0x358946[_0x1ff48a(0x243)][_0x1ff48a(0x42b)] = 0x0, removePlayerItem(_0x358946, 'key'), _0x4a52dc[_0x1ff48a(0x3b9)] = !![], !![]);
    else {
        if (_0x4a52dc[_0x1ff48a(0x3e7)] == _0x1ff48a(0x308)) return _0x4a52dc[_0x1ff48a(0x255)][_0x1ff48a(0x25a)] != null && _0x4a52dc[_0x1ff48a(0x255)][_0x1ff48a(0x25a)]['isSprite'] && _0x4a52dc['iconA']['spritesheet'][_0x1ff48a(0x2af)]('on'), _0x4a52dc['iconB'][_0x1ff48a(0x25a)] != null && _0x4a52dc[_0x1ff48a(0x344)][_0x1ff48a(0x25a)][_0x1ff48a(0x381)] && _0x4a52dc[_0x1ff48a(0x344)][_0x1ff48a(0x25a)]['gotoAndPlay']('on'), playSound(_0x1ff48a(0x380)), !![];
        else {
            if (_0x4a52dc['cardType'] == 'castle') return _0x4a52dc[_0x1ff48a(0x255)][_0x1ff48a(0x25a)] != null && _0x4a52dc[_0x1ff48a(0x255)][_0x1ff48a(0x25a)][_0x1ff48a(0x381)] && _0x4a52dc['iconA'][_0x1ff48a(0x25a)][_0x1ff48a(0x2af)]('on'), _0x4a52dc[_0x1ff48a(0x344)][_0x1ff48a(0x25a)] != null && _0x4a52dc[_0x1ff48a(0x344)]['spritesheet'][_0x1ff48a(0x381)] && _0x4a52dc[_0x1ff48a(0x344)][_0x1ff48a(0x25a)][_0x1ff48a(0x2af)]('on'), playSound(_0x1ff48a(0x20f)), !![];
            else {
                if (_0x4a52dc['cardType'] == _0x1ff48a(0x393) || _0x4a52dc[_0x1ff48a(0x3e7)] == _0x1ff48a(0x321)) {
                    var _0x46191b = ![],
                        _0x4a942d = [{
                            'type': 'shield',
                            'item': _0x1ff48a(0x378),
                            'value': _0xbea056,
                            'sound': _0x1ff48a(0x283)
                        }, {
                            'type': _0x1ff48a(0x37c),
                            'item': _0x1ff48a(0x1b0),
                            'value': _0x5ee118,
                            'sound': _0x1ff48a(0x27c)
                        }];
                    for (var _0x19201a = 0x0; _0x19201a < _0x4a942d[_0x1ff48a(0x42b)]; _0x19201a++) {
                        var _0x3b9118 = ![],
                            _0x250f18 = findBadgeValue(_0x4a52dc, _0x1ff48a(0x2f2)),
                            _0x4e1b9e = findBadgeValue(_0x4a52dc, _0x1ff48a(0x37c)),
                            _0xb63ee3 = findBadgeValue(_0x4a52dc, 'shield');
                        if (_0x4a942d[_0x19201a][_0x1ff48a(0x3e1)] > 0x0) {
                            if (_0xb63ee3 > 0x0) animateSwoosh(_0x4a52dc), playSound(_0x4a942d[_0x19201a][_0x1ff48a(0x408)]), _0x4a942d[_0x19201a][_0x1ff48a(0x3e1)] -= _0xb63ee3, _0x4a942d[_0x19201a][_0x1ff48a(0x3e1)] > 0x0 ? (_0xb63ee3 = 0x0, updateBadgeValue(_0x358946, _0x4a942d[_0x19201a][_0x1ff48a(0x31f)], _0x4a942d[_0x19201a][_0x1ff48a(0x3e1)]), updateBadgeValue(_0x4a52dc, _0x1ff48a(0x378), 0x0), removeBadge(_0x4a52dc, 'shield'), removePlayerItem(_0x4a52dc, 'shield'), _0x4a942d[_0x19201a]['value'] > 0x0 ? _0x3b9118 = !![] : removePlayerItem(_0x358946, _0x4a942d[_0x19201a]['item'])) : (_0x4a942d[_0x19201a]['value'] < 0x0 ? (_0xb63ee3 = Math['abs'](_0x4a942d[_0x19201a][_0x1ff48a(0x3e1)]), updateBadgeValue(_0x4a52dc, _0x1ff48a(0x378), _0xb63ee3)) : (_0xb63ee3 = 0x0, removeBadge(_0x4a52dc, _0x1ff48a(0x378)), updateBadgeValue(_0x4a52dc, 'shield', _0xb63ee3), removePlayerItem(_0x4a52dc, _0x1ff48a(0x378))), removeBadge(_0x358946, _0x4a942d[_0x19201a][_0x1ff48a(0x31f)]), removePlayerItem(_0x358946, _0x4a942d[_0x19201a]['item'])), _0x46191b = !![];
                            else {
                                if (_0x4e1b9e > 0x0) animateSwoosh(_0x4a52dc), playSound(_0x4a942d[_0x19201a]['sound']), _0x4a942d[_0x19201a]['value'] -= _0x4e1b9e, _0x4a942d[_0x19201a][_0x1ff48a(0x3e1)] > 0x0 ? (_0x4e1b9e = 0x0, updateBadgeValue(_0x358946, _0x4a942d[_0x19201a][_0x1ff48a(0x31f)], _0x4a942d[_0x19201a][_0x1ff48a(0x3e1)]), updateBadgeValue(_0x4a52dc, _0x1ff48a(0x37c), 0x0), removeBadge(_0x4a52dc, _0x1ff48a(0x37c)), removePlayerItem(_0x4a52dc, _0x1ff48a(0x1b0)), _0x4a942d[_0x19201a][_0x1ff48a(0x3e1)] > 0x0 ? _0x3b9118 = !![] : removePlayerItem(_0x358946, _0x4a942d[_0x19201a]['item'])) : (_0x4a942d[_0x19201a]['value'] < 0x0 ? (_0x4e1b9e = Math[_0x1ff48a(0x30f)](_0x4a942d[_0x19201a][_0x1ff48a(0x3e1)]), updateBadgeValue(_0x4a52dc, _0x1ff48a(0x37c), _0x4e1b9e)) : (_0x4e1b9e = 0x0, removeBadge(_0x4a52dc, _0x1ff48a(0x37c)), updateBadgeValue(_0x4a52dc, _0x1ff48a(0x37c), _0x4e1b9e), removePlayerItem(_0x4a52dc, _0x1ff48a(0x1b0))), removeBadge(_0x358946, _0x4a942d[_0x19201a][_0x1ff48a(0x31f)]), removePlayerItem(_0x358946, _0x4a942d[_0x19201a][_0x1ff48a(0x263)])), _0x46191b = !![];
                                else {
                                    if (_0x250f18 > 0x0) {
                                        animateSwoosh(_0x4a52dc), playSound(_0x4a942d[_0x19201a][_0x1ff48a(0x408)]), _0x4a942d[_0x19201a][_0x1ff48a(0x3e1)] -= _0x250f18;
                                        if (_0x4a942d[_0x19201a][_0x1ff48a(0x3e1)] > 0x0) {
                                            if (typeof initSocket == 'function' && multiplayerSettings[_0x1ff48a(0x36e)] && socketData['online']) {
                                                var _0x4d3073 = gameData[_0x1ff48a(0x321)] == 0x0 ? 0x1 : 0x0;
                                                $['status'][_0x1ff48a(0x29b) + _0x4d3073][_0x1ff48a(0x1a0)]++;
                                            } else playerData['kill']++;
                                            updateGameDisplay(), _0x250f18 = 0x0, updateBadgeValue(_0x358946, _0x4a942d[_0x19201a]['type'], _0x4a942d[_0x19201a][_0x1ff48a(0x3e1)]), updateBadgeValue(_0x4a52dc, _0x1ff48a(0x2f2), 0x0), playSoundHit(), animateIconHit(_0x4a52dc), _0x4a942d[_0x19201a][_0x1ff48a(0x3e1)] > 0x0 ? _0x3b9118 = !![] : removePlayerItem(_0x358946, _0x4a942d[_0x19201a]['item']);
                                        } else {
                                            if (_0x4a942d[_0x19201a][_0x1ff48a(0x3e1)] < 0x0) _0x250f18 = Math[_0x1ff48a(0x30f)](_0x4a942d[_0x19201a]['value']), updateBadgeValue(_0x4a52dc, _0x1ff48a(0x2f2), _0x250f18);
                                            else {
                                                if (typeof initSocket == 'function' && multiplayerSettings[_0x1ff48a(0x36e)] && socketData[_0x1ff48a(0x2bb)]) {
                                                    var _0x4d3073 = gameData[_0x1ff48a(0x321)] == 0x0 ? 0x1 : 0x0;
                                                    $[_0x1ff48a(0x1ec)][_0x1ff48a(0x29b) + _0x4d3073][_0x1ff48a(0x1a0)]++;
                                                } else playerData['kill']++;
                                                updateGameDisplay(), _0x250f18 = 0x0, updateBadgeValue(_0x4a52dc, _0x1ff48a(0x2f2), _0x250f18);
                                            }
                                            removeBadge(_0x358946, _0x4a942d[_0x19201a][_0x1ff48a(0x31f)]), removePlayerItem(_0x358946, _0x4a942d[_0x19201a][_0x1ff48a(0x263)]), playSoundHit(), animateIconHit(_0x4a52dc);
                                        }
                                        _0x46191b = !![];
                                    }
                                }
                            }
                            _0x3b9118 && _0x19201a--;
                        }
                    }
                    if (_0x4a52dc[_0x1ff48a(0x3e7)] == _0x1ff48a(0x321) && !_0x46191b) {
                        var _0x15cc89 = _0x3d6c07 + _0x5ee118 + _0xbea056;
                        _0xb63ee3 > 0x0 && (playSoundHit(), _0xb63ee3 -= _0x15cc89, _0xb63ee3 > 0x0 ? (_0x15cc89 = 0x0, updateBadgeValue(_0x4a52dc, _0x1ff48a(0x378), _0xb63ee3)) : (_0x15cc89 = Math[_0x1ff48a(0x30f)](_0xb63ee3), removeBadge(_0x4a52dc, _0x1ff48a(0x378)), removePlayerItem(_0x4a52dc, _0x1ff48a(0x378))), _0x46191b = !![]);
                        _0x4e1b9e > 0x0 && (playSoundHit(), _0x4e1b9e -= _0x15cc89, _0x4e1b9e > 0x0 ? (_0x15cc89 = 0x0, updateBadgeValue(_0x4a52dc, _0x1ff48a(0x37c), _0x4e1b9e)) : (_0x15cc89 = Math[_0x1ff48a(0x30f)](_0x4e1b9e), _0x4e1b9e = 0x0, removeBadge(_0x4a52dc, _0x1ff48a(0x37c)), removePlayerItem(_0x4a52dc, _0x1ff48a(0x1b0))), _0x46191b = !![]);
                        if (_0x250f18 > 0x0) {
                            playSoundHit(), animateIconHit(_0x4a52dc), _0x250f18 -= _0x15cc89;
                            if (_0x250f18 > 0x0) {
                                if (typeof initSocket == _0x1ff48a(0x2fc) && multiplayerSettings['enable'] && socketData['online']) {
                                    var _0x4d3073 = gameData[_0x1ff48a(0x321)] == 0x0 ? 0x1 : 0x0;
                                    $[_0x1ff48a(0x1ec)][_0x1ff48a(0x29b) + _0x4d3073][_0x1ff48a(0x1a0)]++;
                                } else playerData['kill']++;
                                updateGameDisplay(), _0x15cc89 = 0x0, updateBadgeValue(_0x4a52dc, 'health', _0x250f18), updateBadgeValue(_0x358946, _0x1ff48a(0x2f2), _0x15cc89);
                            } else typeof initSocket == _0x1ff48a(0x2fc) && multiplayerSettings[_0x1ff48a(0x36e)] && socketData[_0x1ff48a(0x2bb)] ? $['status'][_0x1ff48a(0x29b) + gameData[_0x1ff48a(0x321)]]['kill']++ : playerData['kill']++, _0x15cc89 = Math['abs'](_0x250f18), _0x250f18 = 0x0, updateBadgeValue(_0x4a52dc, _0x1ff48a(0x2f2), _0x250f18), updateBadgeValue(_0x358946, _0x1ff48a(0x2f2), _0x15cc89);
                            _0x46191b = !![];
                        }
                    }
                    return updateNumbersDisplay(_0x358946), updateNumbersDisplay(_0x4a52dc), _0x46191b;
                }
            }
        }
    }
    return ![];
}

function findBadgeValue(_0x3ececb, _0x10b3d1) {
    var _0x556696 = a0_0x1e1e8b,
        _0x3be8ab = _0x3ececb['badgesArr']['findIndex'](_0x462dd1 => _0x462dd1[_0x556696(0x31f)] === _0x10b3d1);
    return _0x3be8ab != -0x1 ? _0x3ececb['badgesArr'][_0x3be8ab][_0x556696(0x3e1)] : 0x0;
}

function updateBadgeValue(_0x329946, _0x89e52, _0x51fdb0) {
    var _0x137468 = a0_0x1e1e8b,
        _0x540617 = _0x329946['badgesArr'][_0x137468(0x264)](_0x2b1b90 => _0x2b1b90['type'] === _0x89e52);
    _0x540617 != -0x1 && (_0x329946[_0x137468(0x1d7)][_0x540617][_0x137468(0x3e1)] = _0x51fdb0);
    var _0x159abb = $[_0x137468(0x3a8)][_0x329946[_0x137468(0x377)] + '_' + _0x329946[_0x137468(0x30c)]]['target'];
    _0x159abb['badges']['removeAllChildren'](), updateBadgeDisplay(_0x329946);
}

function removeBadge(_0x328fd3, _0x2e0744) {
    var _0xce4bda = a0_0x1e1e8b,
        _0x3a4243 = _0x328fd3['badgesArr']['findIndex'](_0x2e7b77 => _0x2e7b77[_0xce4bda(0x31f)] === _0x2e0744);
    _0x3a4243 != -0x1 && _0x328fd3[_0xce4bda(0x1d7)]['splice'](_0x3a4243, 0x1), updateBadgeDisplay(_0x328fd3);
}

function updateBadgeDisplay(_0x57b74c) {
    createBadge(_0x57b74c), toggleCardBg(_0x57b74c);
}

function checkNextStage() {
    var _0x5afa8e = a0_0x1e1e8b;
    gameData[_0x5afa8e(0x34e)]++;
    var _0x545b59 = gameData[_0x5afa8e(0x330)];
    gameData[_0x5afa8e(0x34e)] > gameData[_0x5afa8e(0x288)]['move'] && (gameData[_0x5afa8e(0x330)]++, gameData[_0x5afa8e(0x330)] = gameData[_0x5afa8e(0x330)] > cardPlaySettings[_0x5afa8e(0x288)][_0x5afa8e(0x42b)] - 0x1 ? cardPlaySettings[_0x5afa8e(0x288)][_0x5afa8e(0x42b)] - 0x1 : gameData[_0x5afa8e(0x330)]), _0x545b59 != gameData[_0x5afa8e(0x330)] && (prepareStage(), gameData[_0x5afa8e(0x40d)] = [], gameData[_0x5afa8e(0x343)] = [], gameData[_0x5afa8e(0x33b)] = [], gameData[_0x5afa8e(0x3e8)] = [], gameData[_0x5afa8e(0x38f)] = [], gameData[_0x5afa8e(0x2ce)] = [], gameData[_0x5afa8e(0x1a7)] = [], gameData[_0x5afa8e(0x360)] = [], gameData[_0x5afa8e(0x271)] = [], gameData[_0x5afa8e(0x243)] = [], gameData[_0x5afa8e(0x2aa)] = []), typeof initSocket == _0x5afa8e(0x2fc) && multiplayerSettings[_0x5afa8e(0x36e)] && socketData[_0x5afa8e(0x2bb)] ? prepareCardContent(![]) : (prepareCardContent(![]), gameData[_0x5afa8e(0x379)] = !![]);
}

function updateGame(_0x1cadb6) {
    var _0x4edf87 = a0_0x1e1e8b;
    if (!gameData[_0x4edf87(0x25e)]) {
        var _0x121b31 = _0x1cadb6[_0x4edf87(0x19b)] / 0x3e8;
        loopPlayerMovement(), loopProton(), focusPlayerCamera();
    }
}

function loopPlayerMovement() {
    var _0x474b20 = a0_0x1e1e8b;
    for (var _0x522aa9 = 0x0; _0x522aa9 < gameData['layout']['row']; _0x522aa9++) {
        for (var _0x562e0a = 0x0; _0x562e0a < gameData[_0x474b20(0x2c5)][_0x474b20(0x30c)]; _0x562e0a++) {
            var _0x5c85d1 = $[_0x474b20(0x3a8)][_0x522aa9 + '_' + _0x562e0a][_0x474b20(0x23b)];
            (_0x5c85d1[_0x474b20(0x3e7)] == _0x474b20(0x321) || _0x5c85d1[_0x474b20(0x3e7)] == 'enemy') && (_0x5c85d1[_0x474b20(0x255)]['y'] = gameData[_0x474b20(0x2fd)][_0x474b20(0x318)][_0x474b20(0x3e1)], _0x5c85d1[_0x474b20(0x1b0)]['y'] = gameData[_0x474b20(0x2fd)]['movement']['value'], _0x5c85d1[_0x474b20(0x378)]['y'] = gameData[_0x474b20(0x2fd)][_0x474b20(0x318)][_0x474b20(0x3e1)]);
        }
    }
}

function focusPlayerCamera() {
    var _0x2136f3 = a0_0x1e1e8b;
    if (gameData['dealCard']) cardsMoveContainer['x'] = 0x0, cardsMoveContainer['y'] = 0x0;
    else {
        viewport['isLandscape'] ? gameData['mask'] = {
            'row': 0x3,
            'column': 0x6
        } : gameData[_0x2136f3(0x309)] = {
            'row': 0x4,
            'column': 0x4
        };
        gameData[_0x2136f3(0x22c)] = gameData[_0x2136f3(0x309)][_0x2136f3(0x30c)] * cardDesign[gameData[_0x2136f3(0x216)]][_0x2136f3(0x331)], gameData[_0x2136f3(0x22c)] += (gameData[_0x2136f3(0x309)][_0x2136f3(0x30c)] - 0x1) * cardDesign[gameData[_0x2136f3(0x216)]][_0x2136f3(0x2c8)], gameData[_0x2136f3(0x1f6)] = gameData[_0x2136f3(0x309)]['row'] * cardDesign[gameData[_0x2136f3(0x216)]][_0x2136f3(0x1ac)], gameData[_0x2136f3(0x1f6)] += (gameData[_0x2136f3(0x309)][_0x2136f3(0x377)] - 0x1) * cardDesign[gameData[_0x2136f3(0x216)]]['margin'];
        var _0x2c3c68 = $[_0x2136f3(0x3a8)][_0x2136f3(0x321) + gameData['player']],
            _0x4882f7 = 0x0 - _0x2c3c68['x'],
            _0x498dab = 0x0 - _0x2c3c68['y'],
            _0x3f1331 = (gameData[_0x2136f3(0x3a0)] - gameData[_0x2136f3(0x22c)]) / 0x2,
            _0x224fc9 = -_0x3f1331,
            _0x312298 = (gameData[_0x2136f3(0x250)] - gameData[_0x2136f3(0x1f6)]) / 0x2,
            _0x5dbd4c = -_0x312298;
        gameData[_0x2136f3(0x3a0)] > gameData[_0x2136f3(0x22c)] ? (_0x4882f7 = _0x4882f7 > _0x3f1331 ? _0x3f1331 : _0x4882f7, _0x4882f7 = _0x4882f7 < _0x224fc9 ? _0x224fc9 : _0x4882f7) : _0x4882f7 = 0x0;
        gameData[_0x2136f3(0x250)] > gameData['maskH'] ? (_0x498dab = _0x498dab > _0x312298 ? _0x312298 : _0x498dab, _0x498dab = _0x498dab < _0x5dbd4c ? _0x5dbd4c : _0x498dab) : _0x498dab = 0x0;
        var _0x3dd66b = 0.2;
        TweenMax['to'](cardsMoveContainer, _0x3dd66b, {
            'x': _0x4882f7,
            'y': _0x498dab,
            'overwrite': !![]
        });
    }
}

function a0_0x4fe4(_0x377681, _0x5a0560) {
    var _0x3964f2 = a0_0x3964();
    return a0_0x4fe4 = function(_0x4fe454, _0x44a616) {
        _0x4fe454 = _0x4fe454 - 0x18f;
        var _0x28a440 = _0x3964f2[_0x4fe454];
        return _0x28a440;
    }, a0_0x4fe4(_0x377681, _0x5a0560);
}

function updateGameDisplay() {
    var _0x38766a = a0_0x1e1e8b;
    typeof initSocket == _0x38766a(0x2fc) && multiplayerSettings[_0x38766a(0x36e)] && socketData[_0x38766a(0x2bb)] ? ($[_0x38766a(0x1ec)][_0x38766a(0x21b) + 0x0][_0x38766a(0x3c1)] = textStrings['kill'][_0x38766a(0x2fb)](_0x38766a(0x38c), $[_0x38766a(0x1ec)]['icon' + 0x0][_0x38766a(0x30a)]), $[_0x38766a(0x1ec)]['coinTxt' + 0x1][_0x38766a(0x3c1)] = textStrings[_0x38766a(0x1a0)][_0x38766a(0x2fb)](_0x38766a(0x38c), $['status'][_0x38766a(0x29b) + 0x1][_0x38766a(0x30a)]), $[_0x38766a(0x1ec)][_0x38766a(0x230) + 0x0][_0x38766a(0x3c1)] = textStrings['kill'][_0x38766a(0x2fb)](_0x38766a(0x38c), $['status'][_0x38766a(0x29b) + 0x0][_0x38766a(0x1a0)]), $[_0x38766a(0x1ec)][_0x38766a(0x230) + 0x1][_0x38766a(0x3c1)] = textStrings['kill'][_0x38766a(0x2fb)](_0x38766a(0x38c), $['status']['icon' + 0x1]['kill'])) : (TweenMax['to'](tweenData, 0.5, {
        'tweenScore': playerData[_0x38766a(0x30a)],
        'overwrite': !![],
        'onUpdate': function() {
            var _0x38ff1c = _0x38766a;
            $[_0x38ff1c(0x1ec)][_0x38ff1c(0x21b) + 0x0][_0x38ff1c(0x3c1)] = textStrings[_0x38ff1c(0x30a)][_0x38ff1c(0x2fb)](_0x38ff1c(0x38c), Math['floor'](tweenData[_0x38ff1c(0x258)]));
        }
    }), $['status'][_0x38766a(0x230) + 0x0][_0x38766a(0x3c1)] = textStrings[_0x38766a(0x1a0)][_0x38766a(0x2fb)](_0x38766a(0x38c), playerData['kill']));
}

function showGameStatus(_0x5b4a25, _0x2653e2, _0x224051) {
    var _0xa41411 = a0_0x1e1e8b,
        _0x16d611 = '';
    if (_0x5b4a25 == 'gameover') _0x16d611 = textStrings[_0xa41411(0x208)];
    else {
        if (_0x5b4a25 == _0xa41411(0x1e0)) gameData[_0xa41411(0x321)] == socketData['gameIndex'] ? _0x16d611 = textStrings['yourTurn'] : _0x16d611 = textStrings[_0xa41411(0x31b)]['replace'](_0xa41411(0x22a), $[_0xa41411(0x1ec)][_0xa41411(0x21a) + gameData[_0xa41411(0x321)]][_0xa41411(0x321)]);
        else {
            if (_0x5b4a25 == _0xa41411(0x39a)) _0x16d611 = textStrings[_0xa41411(0x262)];
            else _0x5b4a25 == 'playerdead' && (_0x16d611 = textStrings[_0xa41411(0x3d3)]['replace']('[PLAYER]', $[_0xa41411(0x1ec)][_0xa41411(0x21a) + _0x224051][_0xa41411(0x321)]));
        }
    }
    gameStatusTxt[_0xa41411(0x3c1)] = _0x16d611, TweenMax['to'](gameStatusContainer, 0.5, {
        'alpha': 0x1,
        'overwrite': !![],
        'onComplete': function() {
            TweenMax['to'](gameStatusContainer, 0.5, {
                'delay': _0x2653e2,
                'alpha': 0x0,
                'overwrite': !![]
            });
        }
    });
}

function showTutorialText() {
    var _0x37e08a = a0_0x1e1e8b;
    if (!gameData[_0x37e08a(0x3ee)]) return;
    tutorialDescTxt[_0x37e08a(0x3c1)] = textStrings['tutorial'][_0x37e08a(0x2d0) + (gameData[_0x37e08a(0x1b1)] + 0x1)], gameData[_0x37e08a(0x1b1)]++, gameData[_0x37e08a(0x1b1)] >= gameData[_0x37e08a(0x2a7)]['length'] && (gameData[_0x37e08a(0x379)] = ![], TweenMax['to'](gameContainer, 0x4, {
        'overwrite': !![],
        'onComplete': function() {
            var _0x328a1f = _0x37e08a;
            stopGame(), goPage(_0x328a1f(0x3c8));
        }
    }));
}

function endGame() {
    var _0x58f0a5 = a0_0x1e1e8b;
    gameData[_0x58f0a5(0x328)] = !![], gameData[_0x58f0a5(0x379)] = ![], focusPlayerCard(), playSound(_0x58f0a5(0x1ca)), TweenMax['to'](gameContainer, 0x4, {
        'overwrite': !![],
        'onComplete': function() {
            goPage('result');
        }
    });
}

function millisecondsToTimeGame(_0xec09e0) {
    var _0x5cb457 = a0_0x1e1e8b,
        _0x2c6a0d = _0xec09e0 % 0x3e8,
        _0x14f57e = Math[_0x5cb457(0x338)](_0xec09e0 / 0x3e8 % 0x3c),
        _0x5771b4 = Math[_0x5cb457(0x338)](_0xec09e0 / (0x3c * 0x3e8) % 0x3c);
    return _0x14f57e < 0xa && (_0x14f57e = '0' + _0x14f57e), _0x5771b4 < 0xa && (_0x5771b4 = '0' + _0x5771b4), _0x14f57e;
}

function toggleOptions(_0x4dff4) {
    var _0x35ef33 = a0_0x1e1e8b;
    optionsContainer['visible'] ? optionsContainer[_0x35ef33(0x23a)] = ![] : optionsContainer['visible'] = !![], _0x4dff4 != undefined && (optionsContainer[_0x35ef33(0x23a)] = _0x4dff4);
}

function toggleSoundMute(_0x13216b) {
    var _0x5b57ea = a0_0x1e1e8b;
    buttonSoundOff['visible'] = ![], buttonSoundOn[_0x5b57ea(0x23a)] = ![], toggleSoundInMute(_0x13216b), _0x13216b ? buttonSoundOn[_0x5b57ea(0x23a)] = !![] : buttonSoundOff[_0x5b57ea(0x23a)] = !![];
}

function toggleMusicMute(_0x41a3a0) {
    var _0x3a8fb0 = a0_0x1e1e8b;
    buttonMusicOff[_0x3a8fb0(0x23a)] = ![], buttonMusicOn[_0x3a8fb0(0x23a)] = ![], toggleMusicInMute(_0x41a3a0), _0x41a3a0 ? buttonMusicOn[_0x3a8fb0(0x23a)] = !![] : buttonMusicOff[_0x3a8fb0(0x23a)] = !![];
}

function toggleFullScreen() {
    var _0x2229e5 = a0_0x1e1e8b;
    if (!document[_0x2229e5(0x32c)] && !document[_0x2229e5(0x1e3)] && !document[_0x2229e5(0x3b1)] && !document[_0x2229e5(0x2f3)]) {
        if (document[_0x2229e5(0x2c6)]['requestFullscreen']) document[_0x2229e5(0x2c6)][_0x2229e5(0x2ac)]();
        else {
            if (document['documentElement'][_0x2229e5(0x3fd)]) document['documentElement']['msRequestFullscreen']();
            else {
                if (document[_0x2229e5(0x2c6)][_0x2229e5(0x326)]) document[_0x2229e5(0x2c6)][_0x2229e5(0x326)]();
                else document[_0x2229e5(0x2c6)][_0x2229e5(0x398)] && document['documentElement'][_0x2229e5(0x398)](Element['ALLOW_KEYBOARD_INPUT']);
            }
        }
    } else {
        if (document[_0x2229e5(0x3ad)]) document['exitFullscreen']();
        else {
            if (document[_0x2229e5(0x2f7)]) document['msExitFullscreen']();
            else {
                if (document['mozCancelFullScreen']) document['mozCancelFullScreen']();
                else document[_0x2229e5(0x410)] && document[_0x2229e5(0x410)]();
            }
        }
    }
}

function shareLinks(_0x27f069, _0x33513f) {
    var _0x288203 = a0_0x1e1e8b;
    shareSettings['gtag'] && gtag(_0x288203(0x292), 'click', {
        'event_category': _0x288203(0x3a7),
        'event_label': _0x27f069
    });
    var _0x2e15a4 = location[_0x288203(0x414)];
    _0x2e15a4 = encodeURIComponent(_0x2e15a4[_0x288203(0x416)](0x0, _0x2e15a4['lastIndexOf']('/') + 0x1));
    var _0x2dbb93 = shareSettings[_0x288203(0x274)][_0x288203(0x2fb)](_0x288203(0x2f9), _0x33513f),
        _0x44228b = shareSettings[_0x288203(0x2d6)]['replace'](_0x288203(0x2f9), _0x33513f),
        _0x5de99e = '';
    if (_0x27f069 == _0x288203(0x34b)) shareSettings[_0x288203(0x215)] ? (_0x2e15a4 = decodeURIComponent(_0x2e15a4), _0x5de99e = _0x288203(0x3f5) + encodeURIComponent(_0x2e15a4 + 'share.php?title=' + _0x2dbb93 + '&url=' + _0x2e15a4 + _0x288203(0x37a) + _0x2e15a4 + 'share.jpg')) : _0x5de99e = _0x288203(0x3f5) + _0x2e15a4;
    else {
        if (_0x27f069 == 'twitter') _0x5de99e = _0x288203(0x1c8) + _0x44228b + '&url=' + _0x2e15a4;
        else {
            if (_0x27f069 == _0x288203(0x1ce)) _0x5de99e = _0x288203(0x339) + _0x44228b + '%20' + _0x2e15a4;
            else {
                if (_0x27f069 == _0x288203(0x3b7)) _0x5de99e = _0x288203(0x1aa) + _0x2e15a4 + _0x288203(0x1f3) + _0x44228b;
                else {
                    if (_0x27f069 == _0x288203(0x349)) _0x5de99e = _0x288203(0x3ba) + _0x2e15a4 + _0x288203(0x2cf) + _0x44228b;
                    else _0x27f069 == _0x288203(0x227) && (_0x5de99e = _0x288203(0x327) + _0x2e15a4);
                }
            }
        }
    }
    window[_0x288203(0x32d)](_0x5de99e);
}
var stageWidth, stageHeight = 0x0,
    isLoaded = ![];
$(function() {
    var _0x568f4c = a0_0x1e1e8b,
        _0x2d3eb7 = function() {
            var _0x37a3ce = a0_0x4fe4;
            try {
                createjs['WebAudioPlugin'][_0x37a3ce(0x3d6)][_0x37a3ce(0x3a1)] === _0x37a3ce(0x329) && (createjs[_0x37a3ce(0x1b7)]['context'][_0x37a3ce(0x27a)](), window[_0x37a3ce(0x306)](_0x37a3ce(0x400), _0x2d3eb7));
            } catch (_0x31da87) {
                console[_0x37a3ce(0x33c)](_0x37a3ce(0x3af)), console[_0x37a3ce(0x33c)](_0x31da87);
            }
        };
    window[_0x568f4c(0x3a4)](_0x568f4c(0x400), _0x2d3eb7), window[_0x568f4c(0x316)][_0x568f4c(0x3da)][_0x568f4c(0x2ef)](0x0, 0x4) === _0x568f4c(0x29d) && alert(_0x568f4c(0x242)), $(window)[_0x568f4c(0x2e6)](function() {
        resizeLoaderFunc();
    }), resizeLoaderFunc(), checkBrowser();
});

function resizeLoaderFunc() {
    var _0x21d756 = a0_0x1e1e8b;
    stageWidth = $(window)['width'](), stageHeight = $(window)[_0x21d756(0x1ac)](), $(_0x21d756(0x406))[_0x21d756(0x2a8)]('left', checkContentWidth($(_0x21d756(0x406)))), $(_0x21d756(0x406))[_0x21d756(0x2a8)](_0x21d756(0x2c2), checkContentHeight($(_0x21d756(0x406)))), $('#notSupportHolder')[_0x21d756(0x2a8)](_0x21d756(0x20e), checkContentWidth($('#mainLoader'))), $('#notSupportHolder')['css'](_0x21d756(0x2c2), checkContentHeight($(_0x21d756(0x406))));
}
var browserSupport = ![],
    isMobile, isTablet, isDesktop;

function checkBrowser() {
    var _0x5cbbf3 = a0_0x1e1e8b;
    if (typeof MobileDetect === _0x5cbbf3(0x2fc)) {
        var _0x50ecf1 = new MobileDetect(window[_0x5cbbf3(0x3b0)][_0x5cbbf3(0x249)]);
        isMobile = _0x50ecf1[_0x5cbbf3(0x3a2)](), isTablet = _0x50ecf1[_0x5cbbf3(0x41d)](), isMobile == null && isTablet == null && (isDesktop = !![]);
    }
    var _0x14ea80 = document[_0x5cbbf3(0x27b)](_0x5cbbf3(0x1dd));
    _0x14ea80[_0x5cbbf3(0x2d1)] && (browserSupport = !![]), browserSupport ? !isLoaded && (isLoaded = !![], initPreload()) : $(_0x5cbbf3(0x241))[_0x5cbbf3(0x3d5)]();
}

function initPreload() {
    var _0x107266 = a0_0x1e1e8b;
    toggleLoader(!![]), checkMobileEvent(), $(window)[_0x107266(0x2e6)](function() {
        clearTimeout(resizeTimer), resizeTimer = setTimeout(checkMobileOrientation, 0x3e8);
    }), resizeGameFunc(), loader = new createjs[(_0x107266(0x29a))](![]), manifest = [{
        'src': _0x107266(0x342),
        'id': 'bg'
    }, {
        'src': _0x107266(0x3eb),
        'id': _0x107266(0x422)
    }, {
        'src': _0x107266(0x260),
        'id': _0x107266(0x191)
    }, {
        'src': _0x107266(0x36c),
        'id': _0x107266(0x194)
    }, {
        'src': _0x107266(0x2e4),
        'id': _0x107266(0x1d3)
    }, {
        'src': _0x107266(0x34c),
        'id': 'buttonLocal'
    }, {
        'src': _0x107266(0x1dc),
        'id': _0x107266(0x40c)
    }, {
        'src': _0x107266(0x3bb),
        'id': _0x107266(0x3ca)
    }, {
        'src': _0x107266(0x239),
        'id': _0x107266(0x302)
    }, {
        'src': _0x107266(0x2d5),
        'id': _0x107266(0x367)
    }, {
        'src': _0x107266(0x3d0),
        'id': _0x107266(0x3e9)
    }, {
        'src': 'assets/item_stats.png',
        'id': 'itemStats'
    }, {
        'src': _0x107266(0x1f8),
        'id': _0x107266(0x405)
    }, {
        'src': _0x107266(0x26c),
        'id': _0x107266(0x1df)
    }, {
        'src': _0x107266(0x365),
        'id': _0x107266(0x25c)
    }, {
        'src': _0x107266(0x1ba),
        'id': _0x107266(0x3c0)
    }, {
        'src': _0x107266(0x3c2),
        'id': _0x107266(0x2c7)
    }, {
        'src': _0x107266(0x2a9),
        'id': 'itemParticle2'
    }, {
        'src': _0x107266(0x337),
        'id': 'itemParticle3'
    }, {
        'src': 'assets/item_game_status.png',
        'id': _0x107266(0x1df)
    }, {
        'src': _0x107266(0x1cb),
        'id': _0x107266(0x201)
    }, {
        'src': _0x107266(0x238),
        'id': 'buttonShare'
    }, {
        'src': _0x107266(0x312),
        'id': _0x107266(0x1ee)
    }, {
        'src': _0x107266(0x19d),
        'id': _0x107266(0x28d)
    }, {
        'src': _0x107266(0x40f),
        'id': _0x107266(0x417)
    }, {
        'src': _0x107266(0x237),
        'id': 'buttonWhatsapp'
    }, {
        'src': _0x107266(0x295),
        'id': _0x107266(0x1fb)
    }, {
        'src': _0x107266(0x20b),
        'id': _0x107266(0x1c4)
    }, {
        'src': 'assets/social/button_linkedin.png',
        'id': _0x107266(0x1a1)
    }, {
        'src': _0x107266(0x3d7),
        'id': _0x107266(0x29c)
    }, {
        'src': _0x107266(0x200),
        'id': 'itemPop'
    }, {
        'src': _0x107266(0x333),
        'id': 'itemPopP'
    }, {
        'src': _0x107266(0x2ba),
        'id': _0x107266(0x38a)
    }, {
        'src': 'assets/button_cancel.png',
        'id': _0x107266(0x192)
    }, {
        'src': 'assets/button_fullscreen.png',
        'id': _0x107266(0x2b0)
    }, {
        'src': _0x107266(0x346),
        'id': _0x107266(0x19e)
    }, {
        'src': _0x107266(0x266),
        'id': 'buttonSoundOff'
    }, {
        'src': _0x107266(0x382),
        'id': 'buttonMusicOn'
    }, {
        'src': _0x107266(0x369),
        'id': _0x107266(0x41a)
    }, {
        'src': 'assets/button_exit.png',
        'id': _0x107266(0x336)
    }, {
        'src': _0x107266(0x269),
        'id': _0x107266(0x3cd)
    }];
    for (var _0x573457 = 0x0; _0x573457 < cardDesign[_0x107266(0x42b)]; _0x573457++) {
        manifest[_0x107266(0x30e)]({
            'src': cardDesign[_0x573457][_0x107266(0x2d4)],
            'id': 'cardCover_' + _0x573457
        }), manifest[_0x107266(0x30e)]({
            'src': cardDesign[_0x573457][_0x107266(0x391)],
            'id': _0x107266(0x40b) + _0x573457
        }), manifest['push']({
            'src': cardDesign[_0x573457][_0x107266(0x233)],
            'id': 'cardType2_' + _0x573457
        }), manifest[_0x107266(0x30e)]({
            'src': cardDesign[_0x573457][_0x107266(0x3f7)],
            'id': _0x107266(0x33d) + _0x573457
        }), manifest[_0x107266(0x30e)]({
            'src': cardDesign[_0x573457]['type4'],
            'id': 'cardType4_' + _0x573457
        }), manifest[_0x107266(0x30e)]({
            'src': cardDesign[_0x573457]['hit'],
            'id': _0x107266(0x3e6) + _0x573457
        }), manifest[_0x107266(0x30e)]({
            'src': cardDesign[_0x573457][_0x107266(0x21c)],
            'id': 'cardFocus_' + _0x573457
        }), manifest[_0x107266(0x30e)]({
            'src': cardDesign[_0x573457][_0x107266(0x265)],
            'id': _0x107266(0x388) + _0x573457
        }), manifest[_0x107266(0x30e)]({
            'src': cardDesign[_0x573457][_0x107266(0x2f2)][_0x107266(0x29b)],
            'id': _0x107266(0x2e2) + _0x573457
        }), manifest[_0x107266(0x30e)]({
            'src': cardDesign[_0x573457]['coin'][_0x107266(0x29b)],
            'id': _0x107266(0x392) + _0x573457
        }), manifest[_0x107266(0x30e)]({
            'src': cardDesign[_0x573457][_0x107266(0x37c)]['icon'],
            'id': _0x107266(0x375) + _0x573457
        }), manifest[_0x107266(0x30e)]({
            'src': cardDesign[_0x573457][_0x107266(0x378)]['icon'],
            'id': _0x107266(0x3bd) + _0x573457
        });
    }
    for (var _0x573457 = 0x0; _0x573457 < cardCharacter['length']; _0x573457++) {
        manifest[_0x107266(0x30e)]({
            'src': cardCharacter[_0x573457][_0x107266(0x2dd)],
            'id': _0x107266(0x289) + _0x573457
        }), manifest[_0x107266(0x30e)]({
            'src': cardCharacter[_0x573457][_0x107266(0x319)],
            'id': _0x107266(0x1e9) + _0x573457
        }), manifest['push']({
            'src': cardCharacter[_0x573457][_0x107266(0x29b)],
            'id': 'cardChaIcon_' + _0x573457
        });
    }
    for (var _0x573457 = 0x0; _0x573457 < cardTypes['length']; _0x573457++) {
        manifest[_0x107266(0x30e)]({
            'src': cardTypes[_0x573457][_0x107266(0x29b)],
            'id': _0x107266(0x22e) + _0x573457
        }), cardTypes[_0x573457][_0x107266(0x2ff)] != '' && manifest[_0x107266(0x30e)]({
            'src': cardTypes[_0x573457][_0x107266(0x2ff)],
            'id': _0x107266(0x390) + _0x573457
        }), cardTypes[_0x573457][_0x107266(0x299)] != '' && manifest[_0x107266(0x30e)]({
            'src': cardTypes[_0x573457]['iconWeapon'],
            'id': _0x107266(0x210) + _0x573457
        }), cardTypes[_0x573457][_0x107266(0x310)] != '' && manifest[_0x107266(0x30e)]({
            'src': cardTypes[_0x573457][_0x107266(0x310)],
            'id': _0x107266(0x3cb) + _0x573457
        }), cardTypes[_0x573457][_0x107266(0x322)] != '' && manifest[_0x107266(0x30e)]({
            'src': cardTypes[_0x573457][_0x107266(0x322)],
            'id': _0x107266(0x401) + _0x573457
        });
    }
    typeof addScoreboardAssets == 'function' && addScoreboardAssets(), audioOn = !![], !isDesktop ? !enableMobileAudio && (audioOn = ![]) : !enableDesktopAudio && (audioOn = ![]), audioOn && (manifest[_0x107266(0x30e)]({
        'src': 'assets/sounds/sound_click.ogg',
        'id': 'soundButton'
    }), manifest[_0x107266(0x30e)]({
        'src': _0x107266(0x1d6),
        'id': _0x107266(0x2b3)
    }), manifest[_0x107266(0x30e)]({
        'src': 'assets/sounds/sound_card_flip.ogg',
        'id': _0x107266(0x219)
    }), manifest[_0x107266(0x30e)]({
        'src': _0x107266(0x357),
        'id': _0x107266(0x3b3)
    }), manifest[_0x107266(0x30e)]({
        'src': 'assets/sounds/sound_card_cancel.ogg',
        'id': _0x107266(0x1a3)
    }), manifest[_0x107266(0x30e)]({
        'src': _0x107266(0x256),
        'id': _0x107266(0x19f)
    }), manifest[_0x107266(0x30e)]({
        'src': _0x107266(0x397),
        'id': 'soundCoin'
    }), manifest[_0x107266(0x30e)]({
        'src': _0x107266(0x3b2),
        'id': 'soundEquip'
    }), manifest[_0x107266(0x30e)]({
        'src': _0x107266(0x1d0),
        'id': _0x107266(0x1ca)
    }), manifest['push']({
        'src': 'assets/sounds/sound_result.ogg',
        'id': _0x107266(0x411)
    }), manifest['push']({
        'src': _0x107266(0x23e),
        'id': 'soundUnlock'
    }), manifest[_0x107266(0x30e)]({
        'src': _0x107266(0x324),
        'id': _0x107266(0x418)
    }), manifest[_0x107266(0x30e)]({
        'src': 'assets/sounds/sound_reveal_bad.ogg',
        'id': _0x107266(0x395)
    }), manifest['push']({
        'src': _0x107266(0x32a),
        'id': 'soundHit1'
    }), manifest['push']({
        'src': _0x107266(0x2e3),
        'id': _0x107266(0x31e)
    }), manifest[_0x107266(0x30e)]({
        'src': _0x107266(0x300),
        'id': _0x107266(0x240)
    }), manifest['push']({
        'src': _0x107266(0x1b9),
        'id': 'soundSword'
    }), manifest[_0x107266(0x30e)]({
        'src': _0x107266(0x3cc),
        'id': _0x107266(0x283)
    }), manifest['push']({
        'src': _0x107266(0x394),
        'id': _0x107266(0x251)
    }), manifest[_0x107266(0x30e)]({
        'src': _0x107266(0x2ca),
        'id': _0x107266(0x1d1)
    }), manifest['push']({
        'src': _0x107266(0x1a9),
        'id': _0x107266(0x222)
    }), manifest[_0x107266(0x30e)]({
        'src': _0x107266(0x3ec),
        'id': _0x107266(0x380)
    }), manifest[_0x107266(0x30e)]({
        'src': _0x107266(0x2e7),
        'id': _0x107266(0x20f)
    }), manifest[_0x107266(0x30e)]({
        'src': _0x107266(0x202),
        'id': 'soundCannon'
    }), manifest[_0x107266(0x30e)]({
        'src': _0x107266(0x199),
        'id': _0x107266(0x268)
    }), manifest[_0x107266(0x30e)]({
        'src': 'assets/sounds/music_game.ogg',
        'id': _0x107266(0x3c9)
    }), createjs[_0x107266(0x282)][_0x107266(0x3df)] = [_0x107266(0x3e5)], loader[_0x107266(0x33e)](createjs[_0x107266(0x282)])), loader['addEventListener'](_0x107266(0x1f9), handleComplete), loader[_0x107266(0x3a4)](_0x107266(0x2cd), fileComplete), loader[_0x107266(0x3a4)](_0x107266(0x33c), handleFileError), loader['on']('progress', handleProgress, this), loader['loadManifest'](manifest);
}

function fileComplete(_0x1bdf06) {
    var _0x3e5d27 = a0_0x1e1e8b,
        _0x3d279c = _0x1bdf06[_0x3e5d27(0x263)];
}

function handleFileError(_0x589bbd) {
    var _0x408c67 = a0_0x1e1e8b;
    console[_0x408c67(0x206)](_0x408c67(0x19c), _0x589bbd);
}

function handleProgress() {
    var _0x32508f = a0_0x1e1e8b;
    $(_0x32508f(0x3be))[_0x32508f(0x41e)](Math[_0x32508f(0x1a5)](loader[_0x32508f(0x28c)] / 0x1 * 0x64) + '%');
}

function handleComplete() {
    toggleLoader(![]), initMain();
};

function toggleLoader(_0x38baf) {
    var _0x3cfca1 = a0_0x1e1e8b;
    _0x38baf ? $(_0x3cfca1(0x406))[_0x3cfca1(0x3d5)]() : $(_0x3cfca1(0x406))[_0x3cfca1(0x1ff)]();
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
    var _0xc8092a = a0_0x1e1e8b;
    isDesktop && $('#canvasHolder')[_0xc8092a(0x3d5)](), initGameCanvas(stageW, stageH), buildGameCanvas(), buildGameButton(), typeof buildScoreBoardCanvas == _0xc8092a(0x2fc) && buildScoreBoardCanvas(), goPage(_0xc8092a(0x3c8)), typeof initSocket == 'function' && multiplayerSettings[_0xc8092a(0x36e)] && initSocket(_0xc8092a(0x402)), checkMobileOrientation(), resizeCanvas();
}
var windowW = windowH = 0x0,
    scalePercent = 0x0;
const dpr = window[a0_0x1e1e8b(0x22d)] || 0x1,
    offset = {
        'x': 0x0,
        'y': 0x0,
        'left': 0x0,
        'top': 0x0
    };

function resizeGameFunc() {
    setTimeout(function() {
        var _0x1b291f = a0_0x4fe4;
        $(_0x1b291f(0x3db))[_0x1b291f(0x2a8)](_0x1b291f(0x20e), checkContentWidth($(_0x1b291f(0x3db)))), $(_0x1b291f(0x3db))[_0x1b291f(0x2a8)](_0x1b291f(0x2c2), checkContentHeight($(_0x1b291f(0x3db)))), windowW = window[_0x1b291f(0x235)], windowH = window['innerHeight'], scalePercent = Math[_0x1b291f(0x3ab)](windowW / contentW, windowH / contentH), scalePercent = scalePercent > 0x1 ? 0x1 : scalePercent;
        windowW > stageW && windowH > stageH && (windowW > stageW && (scalePercent = windowW / stageW, stageH * scalePercent > windowH && (scalePercent = windowH / stageH)));
        const _0x4355b6 = stageW * scalePercent,
            _0x2a7ba9 = stageH * scalePercent;
        offset[_0x1b291f(0x20e)] = 0x0, offset[_0x1b291f(0x2c2)] = 0x0;
        _0x4355b6 > windowW ? offset[_0x1b291f(0x20e)] = -(_0x4355b6 - windowW) : offset[_0x1b291f(0x20e)] = windowW - _0x4355b6;
        _0x2a7ba9 > windowH ? offset[_0x1b291f(0x2c2)] = -(_0x2a7ba9 - windowH) : offset['top'] = windowH - _0x2a7ba9;
        offset['x'] = 0x0, offset['y'] = 0x0;
        offset[_0x1b291f(0x20e)] < 0x0 && (offset['x'] = Math[_0x1b291f(0x30f)](offset['left'] / scalePercent / 0x2));
        offset['top'] < 0x0 && (offset['y'] = Math[_0x1b291f(0x30f)](offset[_0x1b291f(0x2c2)] / scalePercent / 0x2));
        const _0x272ccb = document[_0x1b291f(0x290)](_0x1b291f(0x3f2)),
            _0x2e33b0 = _0x272ccb[_0x1b291f(0x2d1)]('2d');
        _0x272ccb[_0x1b291f(0x2a1)][_0x1b291f(0x331)] = _0x4355b6 + 'px', _0x272ccb['style'][_0x1b291f(0x1ac)] = _0x2a7ba9 + 'px', _0x272ccb[_0x1b291f(0x2a1)][_0x1b291f(0x20e)] = offset[_0x1b291f(0x20e)] / 0x2 + 'px', _0x272ccb[_0x1b291f(0x2a1)]['top'] = offset[_0x1b291f(0x2c2)] / 0x2 + 'px', _0x272ccb[_0x1b291f(0x331)] = stageW * dpr, _0x272ccb[_0x1b291f(0x1ac)] = stageH * dpr, typeof initSocket == _0x1b291f(0x2fc) && multiplayerSettings[_0x1b291f(0x36e)] && ($(_0x1b291f(0x281))[_0x1b291f(0x315)](function(_0x489cc3, _0x56736b) {
            var _0x3ff06d = _0x1b291f;
            $(this)[_0x3ff06d(0x2a8)](_0x3ff06d(0x1fa), Math[_0x3ff06d(0x1a5)](Number($(this)['attr'](_0x3ff06d(0x1a4))) * scalePercent));
        }), $(_0x1b291f(0x3c6))[_0x1b291f(0x2a8)]('width', _0x4355b6), $(_0x1b291f(0x3c6))['css'](_0x1b291f(0x1ac), _0x2a7ba9), $(_0x1b291f(0x3c6))[_0x1b291f(0x2a8)](_0x1b291f(0x20e), offset['left'] / 0x2), $('#roomWrapper')[_0x1b291f(0x2a8)](_0x1b291f(0x2c2), offset[_0x1b291f(0x2c2)] / 0x2), $(_0x1b291f(0x2c3))[_0x1b291f(0x2a8)](_0x1b291f(0x331), _0x4355b6), $(_0x1b291f(0x2c3))[_0x1b291f(0x2a8)](_0x1b291f(0x1ac), _0x2a7ba9), $(_0x1b291f(0x2c3))[_0x1b291f(0x2a8)](_0x1b291f(0x20e), offset[_0x1b291f(0x20e)] / 0x2), $(_0x1b291f(0x2c3))[_0x1b291f(0x2a8)]('top', offset['top'] / 0x2)), $(window)['scrollTop'](0x0), resizeCanvas(), typeof resizeScore == _0x1b291f(0x2fc) && resizeScore();
    }, 0x64);
}
var resizeTimer;

function checkMobileEvent() {
    var _0x264cdd = a0_0x1e1e8b;
    !isDesktop && ($(window)[_0x264cdd(0x3bc)]('orientationchange')['on'](_0x264cdd(0x2bf), function(_0x130dbb) {
        var _0x5a388c = _0x264cdd;
        $(_0x5a388c(0x2b7))[_0x5a388c(0x1ff)](), $(_0x5a388c(0x35b))[_0x5a388c(0x1ff)](), clearTimeout(resizeTimer), resizeTimer = setTimeout(checkMobileOrientation, 0x3e8);
    }), checkMobileOrientation());
}

function checkMobileOrientation() {
    var _0x2da870 = a0_0x1e1e8b,
        _0xf3ba7f = ![];
    window['innerWidth'] > window[_0x2da870(0x36a)] && (_0xf3ba7f = !![]), $['editor']['enable'] ? viewport['isLandscape'] = edit[_0x2da870(0x287)] : viewport[_0x2da870(0x287)] = _0xf3ba7f, changeViewport(viewport[_0x2da870(0x287)]), resizeGameFunc(), $(_0x2da870(0x2b7))[_0x2da870(0x3d5)]();
}

function toggleRotate(_0x3529e1) {
    var _0x901c44 = a0_0x1e1e8b;
    _0x3529e1 ? $('#rotateHolder')['fadeIn']() : $(_0x901c44(0x35b))[_0x901c44(0x2ec)](), resizeGameFunc();
}

function checkContentHeight(_0x3b1942) {
    var _0x2f4570 = $(window)['height'](),
        _0x10270d = _0x2f4570 / 0x2 - _0x3b1942['height']() / 0x2;
    return _0x10270d;
}

function checkContentWidth(_0x20de2c) {
    var _0x316d38 = a0_0x1e1e8b,
        _0x2bd556 = $(window)[_0x316d38(0x331)](),
        _0x209da3 = _0x2bd556 / 0x2 - _0x20de2c[_0x316d38(0x331)]() / 0x2;
    return _0x209da3;
}

function shuffle(_0x5b53b5) {
    var _0x5aaf02 = a0_0x1e1e8b,
        _0xebb371 = _0x5b53b5[_0x5aaf02(0x42b)],
        _0x462f20, _0x17f9b5;
    while (0x0 !== _0xebb371) {
        _0x17f9b5 = Math[_0x5aaf02(0x338)](Math[_0x5aaf02(0x2ea)]() * _0xebb371), _0xebb371 -= 0x1, _0x462f20 = _0x5b53b5[_0xebb371], _0x5b53b5[_0xebb371] = _0x5b53b5[_0x17f9b5], _0x5b53b5[_0x17f9b5] = _0x462f20;
    }
    return _0x5b53b5;
}

function randomBoolean() {
    var _0x4f9568 = a0_0x1e1e8b;
    return Math[_0x4f9568(0x2ea)]() < 0.5;
}

function getDistance(_0x5628c4, _0x2fe904, _0xbb3999, _0x3a3f29) {
    var _0x6cff5 = a0_0x1e1e8b,
        _0x3ca0a6 = Math['sqrt'](Math[_0x6cff5(0x1ad)](_0x5628c4 - _0xbb3999, 0x2) + Math[_0x6cff5(0x1ad)](_0x2fe904 - _0x3a3f29, 0x2));
    return _0x3ca0a6;
}

function sortOnObject(_0x582b54, _0x1ace71, _0x218902) {
    var _0x3628d0 = a0_0x1e1e8b;
    return _0x218902 ? _0x582b54[_0x3628d0(0x34a)](function(_0x2aa7c3, _0x2f14ca) {
        var _0x33f64e = _0x2aa7c3[_0x1ace71],
            _0x45afef = _0x2f14ca[_0x1ace71];
        if (_0x33f64e == _0x45afef) return 0x0;
        return _0x33f64e < _0x45afef ? 0x1 : -0x1;
    }) : _0x582b54[_0x3628d0(0x34a)](function(_0x5b6305, _0x567933) {
        var _0x496f18 = _0x5b6305[_0x1ace71],
            _0x2813eb = _0x567933[_0x1ace71];
        if (_0x496f18 == _0x2813eb) return 0x0;
        return _0x496f18 > _0x2813eb ? 0x1 : -0x1;
    }), _0x582b54;
}

function randomIntFromInterval(_0x372f24, _0x18c10) {
    var _0x490f03 = a0_0x1e1e8b;
    return Math[_0x490f03(0x338)](Math[_0x490f03(0x2ea)]() * (_0x18c10 - _0x372f24 + 0x1) + _0x372f24);
}

function addCommas(_0x5b6465) {
    var _0x3e33af = a0_0x1e1e8b;
    _0x5b6465 += '', x = _0x5b6465[_0x3e33af(0x358)]('.'), x1 = x[0x0], x2 = x[_0x3e33af(0x42b)] > 0x1 ? '.' + x[0x1] : '';
    var _0x1eb2d3 = /(\d+)(\d{3})/;
    while (_0x1eb2d3[_0x3e33af(0x254)](x1)) {
        x1 = x1['replace'](_0x1eb2d3, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

function swapArray(_0x312410, _0xc2b62, _0xed828e) {
    var _0x3312bd = _0x312410[_0xc2b62];
    _0x312410[_0xc2b62] = _0x312410[_0xed828e], _0x312410[_0xed828e] = _0x3312bd;
}

function getCenterPosition(_0x18e4c4, _0x4373f4, _0x29b406, _0x454916) {
    var _0x2ab5fd = {
        'x': 0x0,
        'y': 0x0
    };
    return _0x2ab5fd['x'] = (_0x18e4c4 + _0x29b406) / 0x2, _0x2ab5fd['y'] = (_0x4373f4 + _0x454916) / 0x2, _0x2ab5fd;
}

function getAnglePosition(_0x205424, _0x57d02f, _0x35137a, _0x1ca097) {
    var _0x31a71c = a0_0x1e1e8b,
        _0x144917 = {
            'x': 0x0,
            'y': 0x0
        };
    return _0x144917['x'] = _0x205424 + _0x35137a * Math[_0x31a71c(0x2ed)](_0x1ca097 * Math['PI'] / 0xb4), _0x144917['y'] = _0x57d02f + _0x35137a * Math[_0x31a71c(0x374)](_0x1ca097 * Math['PI'] / 0xb4), _0x144917;
}

function getDirection(_0x1f0496, _0x5a0f60, _0xdd7915, _0xb1737c) {
    var _0x1ce396 = 0xb4 / Math['PI'],
        _0x279d5f = -Math['atan2'](_0xdd7915 - _0x1f0496, _0xb1737c - _0x5a0f60) * _0x1ce396;
    return Math['round'](_0x279d5f + 0xb4);
}
var degreeToRadiansFactor = Math['PI'] / 0xb4,
    radianToDegreesFactor = 0xb4 / Math['PI'];

function radToDeg(_0x283497) {
    return _0x283497 * radianToDegreesFactor;
};

function degToRad(_0x5287eb) {
    return _0x5287eb * degreeToRadiansFactor;
};

function angleBetween(_0x509282, _0x31fa7b, _0x2d759f, _0x484201) {
    var _0x7100cb = a0_0x1e1e8b;
    return Math[_0x7100cb(0x2e5)](_0x484201 - _0x31fa7b, _0x2d759f - _0x509282);
}

function setMagnitude(_0x34d2e1, _0x28b5ef) {
    return multiplySpeed(normalize(_0x34d2e1), _0x28b5ef, _0x28b5ef);
}

function multiplySpeed(_0xed9863, _0x5d2ba0, _0x3b5a6c) {
    return _0xed9863['x'] *= _0x5d2ba0, _0xed9863['y'] *= _0x3b5a6c, _0xed9863;
}

function normalize(_0x3a6798) {
    if (!isZero(_0x3a6798)) {
        var _0x48cd4f = getMagnitude(_0x3a6798);
        _0x3a6798['x'] /= _0x48cd4f, _0x3a6798['y'] /= _0x48cd4f;
    }
    return _0x3a6798;
}

function isZero(_0x344afc) {
    return _0x344afc['x'] === 0x0 && _0x344afc['y'] === 0x0;
}

function getMagnitude(_0xec03a3) {
    var _0x45969b = a0_0x1e1e8b;
    return Math[_0x45969b(0x38e)](_0xec03a3['x'] * _0xec03a3['x'] + _0xec03a3['y'] * _0xec03a3['y']);
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

function playSound(_0x30f0a9, _0x35f503) {
    var _0x30da2d = a0_0x1e1e8b;
    if (audioOn) {
        var _0x21e2f2 = soundID;
        soundPushArr[_0x30da2d(0x30e)](_0x21e2f2), soundID++;
        var _0x122c80 = _0x35f503 == undefined ? 0x1 : _0x35f503;
        $[_0x30da2d(0x408)][_0x21e2f2] = createjs[_0x30da2d(0x282)][_0x30da2d(0x1f0)](_0x30f0a9), $[_0x30da2d(0x408)][_0x21e2f2][_0x30da2d(0x3f0)] = _0x122c80, setSoundVolume(_0x21e2f2), $[_0x30da2d(0x408)][_0x21e2f2][_0x30da2d(0x403)](), $[_0x30da2d(0x408)][_0x21e2f2]['addEventListener'](_0x30da2d(0x1f9), function() {
            var _0x102c76 = _0x30da2d,
                _0x530a28 = soundPushArr[_0x102c76(0x359)](_0x21e2f2);
            _0x530a28 != -0x1 && soundPushArr[_0x102c76(0x2e0)](_0x530a28, 0x1);
        });
    }
}

function playSoundLoop(_0x1fe328) {
    var _0x1af8a6 = a0_0x1e1e8b;
    audioOn && ($[_0x1af8a6(0x408)][_0x1fe328] == null && (soundLoopPushArr[_0x1af8a6(0x30e)](_0x1fe328), $[_0x1af8a6(0x408)][_0x1fe328] = createjs[_0x1af8a6(0x282)]['play'](_0x1fe328), $['sound'][_0x1fe328][_0x1af8a6(0x3f0)] = 0x1, setSoundLoopVolume(_0x1fe328), $[_0x1af8a6(0x408)][_0x1fe328][_0x1af8a6(0x403)](), $['sound'][_0x1fe328][_0x1af8a6(0x3a4)](_0x1af8a6(0x1f9), function() {
        var _0x4fb7a6 = _0x1af8a6;
        $[_0x4fb7a6(0x408)][_0x1fe328]['play']();
    })));
}

function toggleSoundLoop(_0x55baa3, _0x2c1800) {
    var _0x2070c5 = a0_0x1e1e8b;
    audioOn && ($[_0x2070c5(0x408)][_0x55baa3] != null && (_0x2c1800 ? $[_0x2070c5(0x408)][_0x55baa3][_0x2070c5(0x1f0)]() : $['sound'][_0x55baa3]['paused'] = !![]));
}

function stopSoundLoop(_0x5c061f) {
    var _0x1042ff = a0_0x1e1e8b;
    if (audioOn) {
        if ($[_0x1042ff(0x408)][_0x5c061f] != null) {
            $[_0x1042ff(0x408)][_0x5c061f][_0x1042ff(0x384)](), $[_0x1042ff(0x408)][_0x5c061f] = null;
            var _0x373377 = soundLoopPushArr[_0x1042ff(0x359)](_0x5c061f);
            _0x373377 != -0x1 && soundLoopPushArr[_0x1042ff(0x2e0)](_0x373377, 0x1);
        }
    }
}

function playMusicLoop(_0x4269f1) {
    var _0x3557ea = a0_0x1e1e8b;
    audioOn && ($[_0x3557ea(0x408)][_0x4269f1] == null && (musicPushArr[_0x3557ea(0x30e)](_0x4269f1), $[_0x3557ea(0x408)][_0x4269f1] = createjs[_0x3557ea(0x282)]['play'](_0x4269f1), $[_0x3557ea(0x408)][_0x4269f1][_0x3557ea(0x3f0)] = 0x1, setMusicVolume(_0x4269f1), $[_0x3557ea(0x408)][_0x4269f1]['removeAllEventListeners'](), $[_0x3557ea(0x408)][_0x4269f1][_0x3557ea(0x3a4)](_0x3557ea(0x1f9), function() {
        var _0x100b9e = _0x3557ea;
        $[_0x100b9e(0x408)][_0x4269f1][_0x100b9e(0x1f0)]();
    })));
}

function toggleMusicLoop(_0xf06ba2, _0x1015fb) {
    var _0x2328dc = a0_0x1e1e8b;
    audioOn && ($[_0x2328dc(0x408)][_0xf06ba2] != null && (_0x1015fb ? $[_0x2328dc(0x408)][_0xf06ba2][_0x2328dc(0x1f0)]() : $[_0x2328dc(0x408)][_0xf06ba2]['paused'] = !![]));
}

function stopMusicLoop(_0x36cc00) {
    var _0x440dbf = a0_0x1e1e8b;
    if (audioOn) {
        if ($[_0x440dbf(0x408)][_0x36cc00] != null) {
            $[_0x440dbf(0x408)][_0x36cc00][_0x440dbf(0x384)](), $[_0x440dbf(0x408)][_0x36cc00] = null;
            var _0x55b09a = musicPushArr['indexOf'](_0x36cc00);
            _0x55b09a != -0x1 && musicPushArr[_0x440dbf(0x2e0)](_0x55b09a, 0x1);
        }
    }
}

function stopSound() {
    var _0x5a9f62 = a0_0x1e1e8b;
    createjs[_0x5a9f62(0x282)][_0x5a9f62(0x384)]();
}

function toggleSoundInMute(_0x300380) {
    var _0x284217 = a0_0x1e1e8b;
    if (audioOn) {
        soundMute = _0x300380;
        for (var _0x5afa22 = 0x0; _0x5afa22 < soundPushArr['length']; _0x5afa22++) {
            setSoundVolume(soundPushArr[_0x5afa22]);
        }
        for (var _0x5afa22 = 0x0; _0x5afa22 < soundLoopPushArr[_0x284217(0x42b)]; _0x5afa22++) {
            setSoundLoopVolume(soundLoopPushArr[_0x5afa22]);
        }
    }
}

function toggleMusicInMute(_0x41bc76) {
    if (audioOn) {
        musicMute = _0x41bc76;
        for (var _0x552e6a = 0x0; _0x552e6a < musicPushArr['length']; _0x552e6a++) {
            setMusicVolume(musicPushArr[_0x552e6a]);
        }
    }
}

function setSoundVolume(_0x58e0fd, _0x5d36a4) {
    var _0x2aeee4 = a0_0x1e1e8b;
    if (audioOn) {
        var _0x12fddb = soundPushArr['indexOf'](_0x58e0fd);
        if (_0x12fddb != -0x1) {
            var _0x132dd9 = _0x5d36a4 == undefined ? $[_0x2aeee4(0x408)][soundPushArr[_0x12fddb]]['defaultVol'] : _0x5d36a4,
                _0x33dfa7 = soundMute == ![] ? _0x132dd9 : 0x0;
            $[_0x2aeee4(0x408)][soundPushArr[_0x12fddb]][_0x2aeee4(0x22b)] = _0x33dfa7, $[_0x2aeee4(0x408)][soundPushArr[_0x12fddb]][_0x2aeee4(0x3f0)] = _0x132dd9;
        }
    }
}

function a0_0x3964() {
    var _0x122838 = ['stagemouseup', 'assets/card_icon_shield2.png', '\x20X\x20', '#e48524', 'resume', 'createElement', 'soundSword', 'enterName', 'options', 'assets/card_icon_cannon_player.png', '55px\x20australiatitle', '.resizeFont', 'Sound', 'soundShield', 'lastC', 'easeIn', '#000', 'isLandscape', 'stage', 'cardChaBody_', 'assets/card_icon_shield_player2.png', 'alpha', 'progress', 'buttonFacebook', 'assets/card_icon_axe_player.png', 'assets/card_icon_spear.png', 'getElementById', 'THAT\x27S\x20IT\x0aYOU\x27RE\x20READY\x20TO\x20PLAY\x20THE\x20GAME', 'event', 'regX', 'drawRect', 'assets/social/button_telegram.png', 'assets/card_icon_health.png', '15sULawq', 'lineHeight', 'iconWeapon', 'LoadQueue', 'icon', 'buttonContinue', 'file', 'chest', '5321144PjPGyO', 'numbers', 'style', 'assets/card_icon_coin2.png', 'numberSpeed', 'iconHilight', 'assets/card_icon_shield1.png', 'host', 'tutorialDirectionArr', 'css', 'assets/item_particle1_2.png', 'chestCountArr', 'showChest', 'requestFullscreen', 'textBaseline', 'mouseX', 'gotoAndPlay', 'buttonFullscreen', 'castleReveal', 'editor', 'soundCardDeal', 'max', 'chestComplete', 'chestNextCount', '#canvasHolder', 'scaleX', 'reverse', 'assets/button_confirm.png', 'online', 'primary', 'assets/card_icon_animal_leg_1.png', 'bombSpeed', 'orientationchange', 'hitFlashSpeed', 'Life', 'top', '#notificationHolder', 'chestKeyArrIndex', 'layout', 'documentElement', 'itemParticle1', 'margin', 'SpriteSheet', 'assets/sounds/sound_trap_spike.ogg', 'THERE\x20ARE\x20MANY\x20ITEMS\x20LIKE\x20SWORD\x20CAN\x20HELP\x20YOU\x20SURVIVE\x0aNOW\x20GO\x20LEFT', 'scoreData', 'fileload', 'chestRevealArr', '&title=', 'step', 'getContext', 'self', 'offIdle', 'cover', 'assets/button_arrow_left.png', 'shareText', 'Alpha', 'pointer', 'framerate', 'pY2', 'lastR', 'lastX', 'body', 'Emitter', 'itemParticle3', 'splice', 'assets/card_focus.png', 'cardIconHealth_', 'assets/sounds/sound_hit2.ogg', 'assets/button_play.png', 'atan2', 'resize', 'assets/sounds/sound_castle.ogg', '479652dQeeyr', '30px\x20australiatitle', 'random', 'size', 'fadeOut', 'cos', 'shareOption', 'substr', 'startX', 'Highscore\x20on\x20Card\x20Attack\x20is\x20[SCORE]', 'health', 'msFullscreenElement', 'items', 'autoClear', '000', 'msExitFullscreen', 'proton', '[SCORE]', '801906BwHrDC', 'replace', 'function', 'tween', 'damageColor', 'iconSecond', 'assets/sounds/sound_hit3.ogg', 'Mass', 'itemPopSize', '#roomWrapper\x20.innerContent', 'assets/card_icon_sword.png', '#EDECD1', 'removeEventListener', 'lastBadgesArr', 'barrel', 'mask', 'score', '5196025deSUPM', 'column', '[PLAYER]\x20TURN\x20TO\x20MOVE', 'push', 'abs', 'iconShield', 'scaleY', 'assets/button_save.png', 'remove', '35px\x20australiatitle', 'each', 'location', 'fontSize', 'movement', 'leg', 'assets/card_icon_axe.png', 'playerTurn', 'cannon', 'Shield', 'soundHit2', 'type', 'soundUnlock', 'player', 'iconPlayer', 'chestCount', 'assets/sounds/sound_reveal_good.ogg', 'local', 'mozRequestFullScreen', 'https://www.linkedin.com/sharing/share-offsite/?url=', 'over', 'suspended', 'assets/sounds/sound_hit1.ogg', 'cardFlipSpeed', 'fullscreenElement', 'open', 'keyCode', 'right', 'stageIndex', 'width', 'parent', 'assets/item_pop_p.png', 'down', 'key', 'buttonExit', 'assets/item_particle1_3.png', 'floor', 'https://api.whatsapp.com/send?text=', 'rate', 'itemsArr', 'error', 'cardType3_', 'installPlugin', '#mainHolder', 'KNIGHT2', 'destroy', 'assets/background.png', 'eventArr', 'iconB', 'count', 'assets/button_sound_on.png', '#namelists', 'assets/card_cha_body_1.png', 'reddit', 'sort', 'facebook', 'assets/button_local.png', 'WOLF', 'moveCount', 'assets/card_icon_animal_body_1.png', 'Damage', 'assets/card_icon_sword_player.png', 'HOW\x20TO\x20PLAY?', 'keydown', 'gameIndex', 'itemPop', 'playerIdleSpeed', 'assets/sounds/sound_card_error.ogg', 'split', 'indexOf', 'tick', '#rotateHolder', 'swooshSpeed', 'cardType4_', 'assets/card_icon_chest.png', 'totalFlip', 'castleRevealArr', 'center', 'spaceX', 'assets/card_badge_shield.png', 'resultDesc', 'assets/icon_coin.png', 'cardChaIcon_', 'buttonArrowLeft', 'numChildren', 'assets/button_music_off.png', 'innerHeight', 'BARREL', 'assets/logo_p.png', 'killTweensOf', 'enable', 'itemParticle2', 'enemyReveal', 'PLAYER1', 'HEALTH', 'cannonIndex', 'sin', 'cardIconDamage_', 'assets/card_icon_enemy_leg.png', 'row', 'shield', 'moveCard', '&thumb=', '9JlHPum', 'damage', 'addClass', 'easeeIn', 'directionArr', 'soundBarrel', 'isSprite', 'assets/button_music_on.png', 'YOUR\x20HEALTH\x20IS\x20LOW\x0aCOLLECT\x20HEALING\x20POTION\x20TO\x20RESTORE\x20YOUR\x20HEALTH', 'stop', 'CASTLE', 'px\x20australiatitle', 'assets/card_icon_key1.png', 'cardStroke_', 'SOME\x20ENEMY\x20COME\x20WITH\x20DAMAGE\x20AND\x20SHIELD\x20STATS\x0aMOVE\x20RIGHT\x20TO\x20ATTACK\x20THE\x20KNIGHT', 'buttonConfirm', 'layoutIndex', '[NUMBER]', 'EXIT\x20GAME', 'sqrt', 'enemyRevealArr', 'cardTypesIconSecond_', 'type1', 'cardIconCoin_', 'enemy', 'assets/sounds/sound_heal.ogg', 'soundRevealBad', 'TOTAL\x20KILL:\x20[NUMBER]', 'assets/sounds/sound_coin.ogg', 'webkitRequestFullscreen', 'result', 'youdead', 'tutorialCardIndex', '#focus', '25px\x20australiatitle', '#ea4946', 'slice', 'mapW', 'state', 'mobile', 'font', 'addEventListener', 'hitFlashAlpha', 'assets/card_cha_leg_2.png', 'share', 'card', 'assets/card_icon_animal_leg_2.png', 'onIdle', 'min', 'assets/card_icon_shield_player1.png', 'exitFullscreen', 'YOUR\x20CARD\x20STATS\x20WILL\x20DEDUCT\x20EVERYTIME\x20YOU\x20ATTACK\x0aNOW\x20KILL\x20THE\x20KNIGHT', 'There\x20was\x20an\x20error\x20while\x20trying\x20to\x20resume\x20the\x20SoundJS\x20Web\x20Audio\x20context...', 'navigator', 'webkitFullscreenElement', 'assets/sounds/sound_equip.ogg', 'soundCardError', 'SHIELD', 'assets/card_icon_coin5.png', 'AXE', 'telegram', 'loaded', 'unlock', 'https://www.reddit.com/submit?url=', 'assets/button_tutorial.png', 'off', 'cardIconShield_', '#mainLoader\x20span', 'setStrokeStyle', 'iconKill', 'text', 'assets/item_particle1_1.png', '[PLAYER]\x20IS\x20DEAD', 'name', 'cursor', '#roomWrapper', 'chestKeyArr', 'main', 'musicGame', 'buttonTutorial', 'cardTypesIconShield_', 'assets/sounds/sound_shield.ogg', 'buttonSettings', 'naturalHeight', 'beginStroke', 'assets/button_arrow_right.png', 'shift', 'buttonShare', 'playerDead', 'index', 'show', 'context', 'assets/button_continue.png', '4822992GiORRy', 'killAll', 'protocol', '.mobileRotate', 'fontX', 'assets/card_icon_castle.png', 'Scale', 'alternateExtensions', 'NOW\x20YOU\x20GOT\x20A\x20SWORD\x20WITH\x20DAMAGE\x20STATS\x20\x0aGO\x20KILL\x20THE\x20WOLF', 'value', '#fff', 'type4', 'setChildIndex', 'mp3', 'cardHit_', 'cardType', 'enemyArr', 'buttonArrowRight', 'soundButton', 'assets/background_p.png', 'assets/sounds/sound_barrel.ogg', 'pos', 'tutorialMode', 'button', 'defaultVol', 'CANNON', 'gameCanvas', 'assets/card_icon_trap.png', 'undefined', 'https://www.facebook.com/sharer/sharer.php?u=', 'nextY', 'type3', 'exitMessage', 'assets/card_icon_grass2.png', 'REWARD\x20WILL\x20REVEAL\x20WHEN\x20YOU\x20KILL\x20ENEMY\x20WITH\x20ITEMS\x0aNOW\x20GET\x20YOUR\x20REWARD', 'addChild', 'assets/card_icon_coin4.png', 'msRequestFullscreen', 'pX2', 'playerName', 'click', 'cardTypesIconPlayer_', 'cardattack', 'removeAllEventListeners', 'side', 'itemStatsName', '#mainLoader', 'resultTitle', 'sound', 'assets/card_icon_coin1.png', 'tutorialArr', 'cardType1_', 'buttonOnline', 'playArr', 'castle', 'assets/social/button_twitter.png', 'webkitExitFullscreen', 'soundResult', 'badges', 'removeChild', 'href', '[SCORE]\x20is\x20mine\x20new\x20highscore\x20on\x20Card\x20Attack\x20game!\x20Try\x20it\x20now!', 'substring', 'buttonTwitter', 'soundRevealGood', 'getResult', 'buttonMusicOff', 'cardType2_', 'SPEAR', 'tablet', 'html', 'preventDefault', 'curDirection', 'maxHealth', 'bgP', 'Bitmap', 'toUpperCase', 'itemPopP', 'RAF_SYNCHED', 'inner', 'toggleSide', 'assets/card_icon_animal_body_2.png', 'resultKill', 'length', 'assets/card_type4.png', 'prepend', 'logo', 'buttonCancel', 'mouseMoveOutside', 'logoP', 'sizeTitle', 'twitter', 'Sprite', 'Stage', 'assets/sounds/music_main.ogg', 'PRESS\x20RIGHT\x20KEY\x20OR\x20SWIPE\x20RIGHT\x20TO\x20MOVE\x20YOUR\x20CARD\x0a(OPTIONALLY\x20CAN\x20CLICK\x20ANY\x20CARDS\x20FOR\x20DIRECTION)', 'delta', 'error\x20', 'assets/social/button_facebook.png', 'buttonSoundOn', 'soundCardMove', 'kill', 'buttonLinkedin', 'assets/card_hit.png', 'soundCardCancel', 'data-fontsize', 'round', 'dealCard', 'barrelRevealArr', 'cardMoveSpeed', 'assets/sounds/sound_trap.ogg', 'https://t.me/share/url?url=', 'nextDir', 'height', 'pow', 'buttonSoundOff', '<div\x20id=\x22focus\x22\x20style=\x22position:absolute;\x20width:100%;\x20height:100%;\x20z-index:1000;\x22></div', 'weapon', 'tutorialIndex', 'currentTarget', 'beginFill', 'document', 'stagemousemove', 'assets/card_type2.png', 'WebAudioPlugin', 'hit', 'assets/sounds/sound_sword.ogg', 'assets/icon_kill.png', 'addRenderer', 'swoosh', 'stagemousedown', 'Container', 'soundEquip', 'game', 'room', '#133F7F', 'CHEST', 'buttonReddit', 'Health', '5112849WfBxcE', 'assets/card_icon_enemy_body_4.png', 'https://twitter.com/intent/tweet?text=', 'graphics', 'soundFail', 'assets/item_swoosh.png', 'Shape', 'buttonMusicOn', 'whatsapp', 'SWORD', 'assets/sounds/sound_fail.ogg', 'soundTrapSpike', 'Touch', 'buttonPlay', 'AND\x20ALSO\x20THERE\x20ARE\x20ENEMY\x20LIKE\x20WOLF\x20COULD\x20KILL\x20YOU,\x0aGO\x20GET\x20YOUR\x20SWORD', 'assets/card_icon_barrel.png', 'assets/sounds/sound_card_deal.ogg', 'badgesArr', 'assets/card_type1.png', 'isNew', 'keyboard', 'Span', 'assets/button_online.png', 'canvas', 'updatesize', 'itemGameStatus', 'turn', 'playeridleDistant', 'Ticker', 'mozFullScreenElement', 'trap', 'regY', 'easeeOut', 'assets/card_icon_enemy_body_1.png', 'startY', 'cardChaLeg_', 'assets/card_badge_coin.png', 'easeOut', 'status', 'TRAP', 'buttonSave', 'objects', 'play', 'assets/card_icon_coin6.png', 'soundHit', '&text=', 'assets/card_badge_health.png', '#roomlists', 'maskH', 'none', 'assets/item_stats_name.png', 'complete', 'font-size', 'buttonTelegram', 'clear', 'assets/card_icon_grass1.png', 'red', 'hide', 'assets/item_pop.png', 'itemSwoosh', 'assets/sounds/sound_cannon.ogg', 'addEmitter', 'naturalWidth', 'onkeyup', 'log', 'attr', 'gameOver', 'emitter', 'lastDirection', 'assets/social/button_reddit.png', '75px\x20australiatitle', 'src', 'left', 'soundCastle', 'cardTypesIconWeapon_', 'cardFocus_', 'addBehaviour', 'totalBomb', 'shieldColor', 'customScore', 'cardIndex', 'drawCircle', 'KNIGHT1', 'soundCardFlip', 'playerNameTxt', 'coinTxt', 'focus', 'chestReveal', 'fontY', '#FF9700', 'statsName', 'positions', 'soundTrap', 'cardCover_', 'KNIGHT3', 'update', 'color', 'linkedin', 'mouseY', 'PLAYER[NUMBER]', '[PLAYER]', 'volume', 'maskW', 'devicePixelRatio', 'cardTypesIcon_', 'itemStats', 'killTxt', 'removeClass', 'nextX', 'type2', 'textAlign', 'innerWidth', 'assets/card_icon_coin3.png', 'assets/social/button_whatsapp.png', 'assets/button_share.png', 'assets/item_pop_size.png', 'visible', 'target', 'bombCardArr', 'assets/card_cover.png', 'assets/sounds/sound_unlock.ogg', 'removeAllChildren', 'soundHit3', '#notSupportHolder', 'To\x20install\x20the\x20game\x20just\x20upload\x20folder\x20\x27game\x27\x20to\x20your\x20server.\x20The\x20game\x20won\x27t\x20run\x20locally\x20with\x20some\x20browser\x20like\x20Chrome\x20due\x20to\x20some\x20security\x20mode.', 'keyArr', 'ARE\x20YOU\x20SURE\x0aYOU\x20WANT\x20TO\x0aQUIT\x20THE\x20GAME?', 'playCard', 'movecomplete', 'GAME\x20OVER', 'localPlay', 'userAgent', 'SHARE\x20YOUR\x20SCORE', 'assets/card_type3.png', 'buttonLocal', 'forPortrait', 'assets/card_icon_key_player1.png', 'start', 'mapH', 'soundHeal', 'image', '65px\x20australiatitle', 'test', 'iconA', 'assets/sounds/sound_card_move.ogg', 'BOAR', 'tweenScore', 'KEY', 'spritesheet', 'lastY', 'iconCoin', 'EaselRenderer', 'paused', '#roomWrapper\x20.fontNameError', 'assets/logo.png', 'Body', 'yourDead', 'item', 'findIndex', 'stroke', 'assets/button_sound_off.png', 'addInitialize', 'musicMain', 'assets/button_settings.png', '#DB7112', 'assets/card_stroke.png', 'assets/item_game_status.png', 'assets/card_icon_spear_player.png', '434574hIBFjR', 'alphabetic', 'Text', 'chestArr', 'nextCard', 'coin', 'shareTitle', 'barrelReveal'];
    a0_0x3964 = function() {
        return _0x122838;
    };
    return a0_0x3964();
}

function setSoundLoopVolume(_0x2844f1, _0x4a0f7b) {
    var _0x4fb5ac = a0_0x1e1e8b;
    if (audioOn) {
        var _0x31b7d4 = soundLoopPushArr[_0x4fb5ac(0x359)](_0x2844f1);
        if (_0x31b7d4 != -0x1) {
            var _0x2e7d0d = _0x4a0f7b == undefined ? $[_0x4fb5ac(0x408)][soundLoopPushArr[_0x31b7d4]][_0x4fb5ac(0x3f0)] : _0x4a0f7b,
                _0x2d2817 = soundMute == ![] ? _0x2e7d0d : 0x0;
            $['sound'][soundLoopPushArr[_0x31b7d4]][_0x4fb5ac(0x22b)] = _0x2d2817, $['sound'][soundLoopPushArr[_0x31b7d4]][_0x4fb5ac(0x3f0)] = _0x2e7d0d;
        }
    }
}

function setMusicVolume(_0xdd6abf, _0x1d7f93) {
    var _0x236662 = a0_0x1e1e8b;
    if (audioOn) {
        var _0x1c450c = musicPushArr[_0x236662(0x359)](_0xdd6abf);
        if (_0x1c450c != -0x1) {
            var _0x4a9ae1 = _0x1d7f93 == undefined ? $[_0x236662(0x408)][musicPushArr[_0x1c450c]][_0x236662(0x3f0)] : _0x1d7f93,
                _0x153fbe = musicMute == ![] ? _0x4a9ae1 : 0x0;
            $[_0x236662(0x408)][musicPushArr[_0x1c450c]][_0x236662(0x22b)] = _0x153fbe, $[_0x236662(0x408)][musicPushArr[_0x1c450c]]['defaultVol'] = _0x4a9ae1;
        }
    }
}