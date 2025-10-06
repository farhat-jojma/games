var _0x192e21 = _0x487b;
(function(_0x1a533d, _0x152dd8) {
    var _0xb8fcc1 = _0x487b,
        _0x224d3c = _0x1a533d();
    while (!![]) {
        try {
            var _0x44fac2 = -parseInt(_0xb8fcc1(0x86f)) / 0x1 * (-parseInt(_0xb8fcc1(0x298)) / 0x2) + parseInt(_0xb8fcc1(0x882)) / 0x3 * (-parseInt(_0xb8fcc1(0x1f2)) / 0x4) + parseInt(_0xb8fcc1(0x59d)) / 0x5 * (parseInt(_0xb8fcc1(0x172)) / 0x6) + -parseInt(_0xb8fcc1(0x6a3)) / 0x7 * (parseInt(_0xb8fcc1(0x5dd)) / 0x8) + -parseInt(_0xb8fcc1(0x647)) / 0x9 * (-parseInt(_0xb8fcc1(0x363)) / 0xa) + parseInt(_0xb8fcc1(0x7d7)) / 0xb + parseInt(_0xb8fcc1(0x413)) / 0xc * (-parseInt(_0xb8fcc1(0x19c)) / 0xd);
            if (_0x44fac2 === _0x152dd8) break;
            else _0x224d3c['push'](_0x224d3c['shift']());
        } catch (_0x28cbc9) {
            _0x224d3c['push'](_0x224d3c['shift']());
        }
    }
}(_0x27c4, 0x7c2c2));
var Phaser, level = 0x1,
    pageNo = 0x0,
    firstTime = !![],
    bgmusic, isMuted = ![],
    isMuted1 = ![],
    i = 0x0,
    sno = 0x0,
    loadFinish = ![],
    soundMuted = ![],
    gameName = _0x192e21(0x5fd),
    domainName = document[_0x192e21(0x938)];

function _0x487b(_0x1e88bf, _0x3fd68a) {
    var _0x27c4c6 = _0x27c4();
    return _0x487b = function(_0x487b01, _0x36028d) {
        _0x487b01 = _0x487b01 - 0x171;
        var _0x1486d6 = _0x27c4c6[_0x487b01];
        return _0x1486d6;
    }, _0x487b(_0x1e88bf, _0x3fd68a);
}
domainName == '' && (domainName = window[_0x192e21(0x95b)]['href']);
var domain_parts = domainName[_0x192e21(0xa4e)](_0x192e21(0x907)),
    domain_subparts = domain_parts[0x1][_0x192e21(0xa4e)]('/'),
    hostNames = domain_subparts[0x0],
    mainUrl = _0x192e21(0x906),
    site = _0x192e21(0x572),
    faceUrl = _0x192e21(0x279),
    instaUrl = '//www.instagram.com/cutedressup_games/',
    youtbUrl = _0x192e21(0xa66),
    tweetUrl = '//twitter.com/Cutedressup1',
    playUrl = '//play.google.com/store/apps/dev?id=7292217053663350899',
    logoUrl = mainUrl + _0x192e21(0x319) + gameName + _0x192e21(0x7e3) + hostNames + '&utm_medium=game_referral&utm_content=logo',
    loaderlogolink = mainUrl + _0x192e21(0x319) + gameName + _0x192e21(0x7e3) + hostNames + '&utm_medium=game_referral&utm_content=preloader_logo';

function myResumeGameFunction() {
    var _0x34b909 = _0x192e21;
    game[_0x34b909(0x374)]['scenes'][pageNo][_0x34b909(0x374)][_0x34b909(0x400)](), soundstart = 0x0, !isMuted ? (music[_0x34b909(0x400)](), soundmute['setFrame'](0x0)) : (music['pause'](), soundmute['setFrame'](0x1)), !isMuted1 ? (clicksound['resume'](), clickmute['setFrame'](0x0)) : (clicksound[_0x34b909(0x3a8)](), clickmute[_0x34b909(0x254)](0x1));
}
var soundcheck = ![],
    soundstart = 0x0,
    soundcheck1 = !![];

function pauseGame() {
    var _0x4da58f = _0x192e21,
        _0x166224 = {
            'BKiqJ': _0x4da58f(0x3a8)
        };
    console[_0x4da58f(0x63a)](_0x166224[_0x4da58f(0xa0c)]), soundcheck && (soundstart = 0x1, game[_0x4da58f(0x374)][_0x4da58f(0x237)][pageNo]['scene'][_0x4da58f(0x3a8)](), soundstart = 0x1, !isMuted && (music[_0x4da58f(0x3a8)](), soundmute['setFrame'](0x1)));
}

function resumeGame() {
    var _0x187ed6 = _0x192e21,
        _0x3be84e = {
            'ZtECh': _0x187ed6(0x400)
        };
    console[_0x187ed6(0x63a)](_0x3be84e['ZtECh']), soundcheck && (soundstart = 0x0, game[_0x187ed6(0x374)]['scenes'][pageNo]['scene']['resume'](), soundstart = 0x0, !isMuted ? (music[_0x187ed6(0x400)](), soundmute['setFrame'](0x0)) : (music[_0x187ed6(0x3a8)](), soundmute[_0x187ed6(0x254)](0x1)));
}
var showad = 0x1,
    excheck = 0x1,
    bootstate = new Phaser['Class']({
        'Extends': Phaser[_0x192e21(0xabc)],
        'initialize': function bootstate() {
            var _0x3d83a4 = _0x192e21,
                _0x42046c = {
                    'QJvmw': 'bootstate'
                };
            Phaser[_0x3d83a4(0xabc)][_0x3d83a4(0x654)](this, {
                'key': _0x42046c['QJvmw']
            });
        },
        'preload': function() {
            var _0x79a397 = _0x192e21,
                _0x5f4b07 = {
                    'DepZF': _0x79a397(0x3de),
                    'IKIaG': _0x79a397(0x3f9),
                    'NRqXh': 'assets/loader/loaderbackground.png',
                    'HiPjg': _0x79a397(0x18b),
                    'hhRRm': _0x79a397(0x221),
                    'GGnBt': _0x79a397(0xa55),
                    'wByLy': _0x79a397(0x3d4),
                    'TIQpg': _0x79a397(0x3fc),
                    'vaUre': _0x79a397(0xa3d),
                    'DSFtp': _0x79a397(0x46f),
                    'lxbFi': _0x79a397(0xa5a),
                    'xcHPM': _0x79a397(0xa76),
                    'kGouV': _0x79a397(0xa20),
                    'zeBqL': _0x79a397(0x737)
                };
            pageNo = 0x0, this[_0x79a397(0x742)][_0x79a397(0x828)] = 'anonymous', this['load']['image'](_0x5f4b07[_0x79a397(0x204)], _0x79a397(0xaaf)), this[_0x79a397(0x742)][_0x79a397(0x323)](_0x5f4b07['IKIaG'], _0x5f4b07[_0x79a397(0xaa1)]), this['load'][_0x79a397(0x323)](_0x5f4b07['HiPjg'], _0x79a397(0x6d8)), this[_0x79a397(0x742)][_0x79a397(0x323)](_0x5f4b07[_0x79a397(0x444)], _0x5f4b07[_0x79a397(0x7c7)]), this[_0x79a397(0x742)]['image'](_0x5f4b07['wByLy'], _0x5f4b07[_0x79a397(0x891)]), this['load'][_0x79a397(0x323)](_0x5f4b07[_0x79a397(0xa9f)], _0x5f4b07[_0x79a397(0x6b3)]), this[_0x79a397(0x742)]['image'](_0x5f4b07[_0x79a397(0x33b)], _0x5f4b07[_0x79a397(0x450)]), this['load'][_0x79a397(0x5b1)](_0x79a397(0x6bc)), this['load']['spine'](_0x5f4b07[_0x79a397(0x211)], _0x5f4b07['zeBqL'], 'logo.atlas');
        },
        'create': function() {
            var _0xd8011d = _0x192e21,
                _0x479dda = {
                    'wIOBy': function(_0x604431) {
                        return _0x604431();
                    },
                    'PgOyN': '#FFFFFF',
                    'MdvfY': _0xd8011d(0x1c9)
                };
            _0x479dda['wIOBy'](loadFile), this[_0xd8011d(0x405)][_0xd8011d(0x70c)][_0xd8011d(0x75f)](_0x479dda[_0xd8011d(0x20e)]), this[_0xd8011d(0x374)][_0xd8011d(0x26f)](_0x479dda[_0xd8011d(0x3ba)]);
        }
    });

function saveFile() {
    var _0x20d951 = _0x192e21,
        _0x4688f6 = {
            'level': level,
            'levelstart': levelstart,
            'marr': [marr[0x0], marr[0x1], marr[0x2], marr[0x3], marr[0x4], marr[0x5], marr[0x6], marr[0x7]],
            'darr': [darr[0x0], darr[0x1], darr[0x2], darr[0x3], darr[0x4], darr[0x5], darr[0x6], darr[0x7], darr[0x8]],
            'eyeshadowarr': [eyeshadowarr[0x0], eyeshadowarr[0x1], eyeshadowarr[0x2], eyeshadowarr[0x3], eyeshadowarr[0x4], eyeshadowarr[0x5], eyeshadowarr[0x6], eyeshadowarr[0x7], eyeshadowarr[0x8]],
            'blusharr': [blusharr[0x0], blusharr[0x1], blusharr[0x2], blusharr[0x3], blusharr[0x4], blusharr[0x5], blusharr[0x6], blusharr[0x7], blusharr[0x8]],
            'liparr': [liparr[0x0], liparr[0x1], liparr[0x2], liparr[0x3], liparr[0x4], liparr[0x5], liparr[0x6], liparr[0x7], liparr[0x8]],
            'stonearr': [stonearr[0x0], stonearr[0x1], stonearr[0x2], stonearr[0x3], stonearr[0x4], stonearr[0x5], stonearr[0x6], stonearr[0x7], stonearr[0x8]],
            'eyeballarr': [eyeballarr[0x0], eyeballarr[0x1], eyeballarr[0x2], eyeballarr[0x3], eyeballarr[0x4], eyeballarr[0x5], eyeballarr[0x6], eyeballarr[0x7], eyeballarr[0x8]],
            'dressarr': [dressarr[0x0], dressarr[0x1], dressarr[0x2], dressarr[0x3], dressarr[0x4], dressarr[0x5], dressarr[0x6], dressarr[0x7], dressarr[0x8]],
            'hairarr': [hairarr[0x0], hairarr[0x1], hairarr[0x2], hairarr[0x3], hairarr[0x4], hairarr[0x5], hairarr[0x6], hairarr[0x7], hairarr[0x8]],
            'studarr': [studarr[0x0], studarr[0x1], studarr[0x2], studarr[0x3], studarr[0x4], studarr[0x5], studarr[0x6], studarr[0x7], studarr[0x8]],
            'chainarr': [chainarr[0x0], chainarr[0x1], chainarr[0x2], chainarr[0x3], chainarr[0x4], chainarr[0x5], chainarr[0x6], chainarr[0x7], chainarr[0x8]],
            'accarr': [accarr[0x0], accarr[0x1], accarr[0x2], accarr[0x3], accarr[0x4], accarr[0x5], accarr[0x6], accarr[0x7], accarr[0x8]]
        };
    localStorage[_0x20d951(0x550)]('wednesday-addams-beauty-salon', JSON['stringify'](_0x4688f6));
};
var file, level;

function loadFile() {
    var _0x3e5bc4 = _0x192e21,
        _0x59b372 = {
            'LaneZ': function(_0x3eff51, _0x5417dd) {
                return _0x3eff51 == _0x5417dd;
            },
            'QbcOx': _0x3e5bc4(0x296),
            'Finlg': function(_0x5882d2, _0x531e65) {
                return _0x5882d2(_0x531e65);
            }
        };
    file = JSON[_0x3e5bc4(0xadc)](localStorage['getItem']('wednesday-addams-beauty-salon'));
    if (_0x59b372[_0x3e5bc4(0x62c)](file, null)) level = 0x1;
    else {
        var _0x5e022f = _0x59b372['QbcOx'][_0x3e5bc4(0xa4e)]('|'),
            _0x208780 = 0x0;
        while (!![]) {
            switch (_0x5e022f[_0x208780++]) {
                case '0':
                    dressarr = [file[_0x3e5bc4(0xac2)][0x0], file[_0x3e5bc4(0xac2)][0x1], file['dressarr'][0x2], file[_0x3e5bc4(0xac2)][0x3], file[_0x3e5bc4(0xac2)][0x4], file[_0x3e5bc4(0xac2)][0x5], file[_0x3e5bc4(0xac2)][0x6], file[_0x3e5bc4(0xac2)][0x7], file[_0x3e5bc4(0xac2)][0x8]];
                    continue;
                case '1':
                    darr = [file[_0x3e5bc4(0x8a6)][0x0], file['darr'][0x1], file[_0x3e5bc4(0x8a6)][0x2], file['darr'][0x3], file[_0x3e5bc4(0x8a6)][0x4], file[_0x3e5bc4(0x8a6)][0x5], file[_0x3e5bc4(0x8a6)][0x6], file[_0x3e5bc4(0x8a6)][0x7], file[_0x3e5bc4(0x8a6)][0x8]];
                    continue;
                case '2':
                    hairarr = [file[_0x3e5bc4(0x932)][0x0], file['hairarr'][0x1], file[_0x3e5bc4(0x932)][0x2], file[_0x3e5bc4(0x932)][0x3], file[_0x3e5bc4(0x932)][0x4], file['hairarr'][0x5], file['hairarr'][0x6], file[_0x3e5bc4(0x932)][0x7], file[_0x3e5bc4(0x932)][0x8]];
                    continue;
                case '3':
                    levelstart = _0x59b372['Finlg'](parseInt, file[_0x3e5bc4(0xa60)]);
                    continue;
                case '4':
                    chainarr = [file['chainarr'][0x0], file[_0x3e5bc4(0x9de)][0x1], file['chainarr'][0x2], file['chainarr'][0x3], file[_0x3e5bc4(0x9de)][0x4], file['chainarr'][0x5], file[_0x3e5bc4(0x9de)][0x6], file[_0x3e5bc4(0x9de)][0x7], file[_0x3e5bc4(0x9de)][0x8]];
                    continue;
                case '5':
                    level = _0x59b372['Finlg'](parseInt, file[_0x3e5bc4(0x1d5)]);
                    continue;
                case '6':
                    eyeshadowarr = [file['eyeshadowarr'][0x0], file['eyeshadowarr'][0x1], file['eyeshadowarr'][0x2], file[_0x3e5bc4(0x260)][0x3], file['eyeshadowarr'][0x4], file[_0x3e5bc4(0x260)][0x5], file[_0x3e5bc4(0x260)][0x6], file[_0x3e5bc4(0x260)][0x7], file[_0x3e5bc4(0x260)][0x8]];
                    continue;
                case '7':
                    stonearr = [file[_0x3e5bc4(0x79a)][0x0], file['stonearr'][0x1], file['stonearr'][0x2], file[_0x3e5bc4(0x79a)][0x3], file[_0x3e5bc4(0x79a)][0x4], file['stonearr'][0x5], file[_0x3e5bc4(0x79a)][0x6], file[_0x3e5bc4(0x79a)][0x7], file[_0x3e5bc4(0x79a)][0x8]];
                    continue;
                case '8':
                    marr = [file['marr'][0x0], file['marr'][0x1], file[_0x3e5bc4(0x7cd)][0x2], file[_0x3e5bc4(0x7cd)][0x3], file[_0x3e5bc4(0x7cd)][0x4], file[_0x3e5bc4(0x7cd)][0x5], file[_0x3e5bc4(0x7cd)][0x6], file[_0x3e5bc4(0x7cd)][0x7]];
                    continue;
                case '9':
                    studarr = [file['studarr'][0x0], file[_0x3e5bc4(0x9f4)][0x1], file[_0x3e5bc4(0x9f4)][0x2], file[_0x3e5bc4(0x9f4)][0x3], file[_0x3e5bc4(0x9f4)][0x4], file[_0x3e5bc4(0x9f4)][0x5], file[_0x3e5bc4(0x9f4)][0x6], file[_0x3e5bc4(0x9f4)][0x7], file['studarr'][0x8]];
                    continue;
                case '10':
                    blusharr = [file['blusharr'][0x0], file[_0x3e5bc4(0x492)][0x1], file[_0x3e5bc4(0x492)][0x2], file[_0x3e5bc4(0x492)][0x3], file[_0x3e5bc4(0x492)][0x4], file[_0x3e5bc4(0x492)][0x5], file[_0x3e5bc4(0x492)][0x6], file[_0x3e5bc4(0x492)][0x7], file[_0x3e5bc4(0x492)][0x8]];
                    continue;
                case '11':
                    accarr = [file['accarr'][0x0], file[_0x3e5bc4(0x998)][0x1], file[_0x3e5bc4(0x998)][0x2], file[_0x3e5bc4(0x998)][0x3], file['accarr'][0x4], file[_0x3e5bc4(0x998)][0x5], file[_0x3e5bc4(0x998)][0x6], file['accarr'][0x7], file[_0x3e5bc4(0x998)][0x8]];
                    continue;
                case '12':
                    eyeballarr = [file[_0x3e5bc4(0x948)][0x0], file['eyeballarr'][0x1], file[_0x3e5bc4(0x948)][0x2], file[_0x3e5bc4(0x948)][0x3], file[_0x3e5bc4(0x948)][0x4], file['eyeballarr'][0x5], file['eyeballarr'][0x6], file['eyeballarr'][0x7], file[_0x3e5bc4(0x948)][0x8]];
                    continue;
                case '13':
                    liparr = [file[_0x3e5bc4(0x9b9)][0x0], file['liparr'][0x1], file['liparr'][0x2], file[_0x3e5bc4(0x9b9)][0x3], file['liparr'][0x4], file[_0x3e5bc4(0x9b9)][0x5], file[_0x3e5bc4(0x9b9)][0x6], file[_0x3e5bc4(0x9b9)][0x7], file[_0x3e5bc4(0x9b9)][0x8]];
                    continue;
            }
            break;
        }
    }
};
var baseScale = 0x1,
    speed = 0.01,
    magnitude = 0.05,
    barvalue = [0x0],
    initialloader = new Phaser[(_0x192e21(0x8eb))]({
        'Extends': Phaser[_0x192e21(0xabc)],
        'initialize': function initialloader() {
            var _0x5097e9 = _0x192e21;
            Phaser['Scene'][_0x5097e9(0x654)](this, {
                'key': _0x5097e9(0x1c9)
            });
        },
        'preload': function() {
            pageNo = 0x1;
        },
        'create': function() {
            var _0x20c8cb = _0x192e21,
                _0x42f5d1 = {
                    'drkoP': function(_0x32810d, _0x5a71e0) {
                        return _0x32810d == _0x5a71e0;
                    },
                    'AjmlZ': '_blank',
                    'RpSpb': function(_0x50eb1e, _0xace81) {
                        return _0x50eb1e + _0xace81;
                    },
                    'hqEpH': function(_0x19af3a, _0x5a33d8) {
                        return _0x19af3a(_0x5a33d8);
                    },
                    'LefXa': function(_0x231868, _0xcda801) {
                        return _0x231868 * _0xcda801;
                    },
                    'haokR': function(_0x5ebe5b, _0x20061a) {
                        return _0x5ebe5b(_0x20061a);
                    },
                    'LxlDs': function(_0xc6b6f2, _0x1ba670) {
                        return _0xc6b6f2 / _0x1ba670;
                    },
                    'iFNGL': function(_0xf8ba7c, _0x424b75) {
                        return _0xf8ba7c / _0x424b75;
                    },
                    'fOafI': function(_0x412b20, _0x3543f1) {
                        return _0x412b20 + _0x3543f1;
                    },
                    'IxDxs': _0x20c8cb(0x3ab),
                    'gAHxe': function(_0xf5283a, _0x2e3c30) {
                        return _0xf5283a == _0x2e3c30;
                    },
                    'bNdWd': _0x20c8cb(0xa51),
                    'YNwOx': _0x20c8cb(0x637),
                    'vqUXO': 'pointerover',
                    'GlTcQ': function(_0x3f7bef, _0xd5b471) {
                        return _0x3f7bef >= _0xd5b471;
                    },
                    'Wloff': _0x20c8cb(0x439),
                    'fMIcB': _0x20c8cb(0x448),
                    'ggzgW': 'doll1eyeclose',
                    'PCdLW': 'doll1eyetop',
                    'RpWWs': _0x20c8cb(0x342),
                    'gVURX': _0x20c8cb(0x92c),
                    'qYUTN': _0x20c8cb(0x289),
                    'ndnGx': _0x20c8cb(0x8b7),
                    'eJbWt': 'doll1pimple3',
                    'gDWcu': _0x20c8cb(0xa26),
                    'FcWlI': _0x20c8cb(0x3a9),
                    'PzffU': _0x20c8cb(0x6a6),
                    'xSUAg': _0x20c8cb(0x437),
                    'sairJ': 'assets/level1/doll/dress.png',
                    'SFAqK': _0x20c8cb(0x29e),
                    'kjqXh': 'assets/level1/doll/dresscap.png',
                    'jrmlG': _0x20c8cb(0x8b8),
                    'RPOfZ': _0x20c8cb(0x71e),
                    'zWqEi': _0x20c8cb(0x7b1),
                    'eNsCk': _0x20c8cb(0x4f1),
                    'pZOHp': function(_0x25e6d4, _0x3344d2) {
                        return _0x25e6d4 <= _0x3344d2;
                    },
                    'dnlxv': function(_0x4ad775, _0x83e8b8) {
                        return _0x4ad775 + _0x83e8b8;
                    },
                    'wigak': 'facewashcream',
                    'feUVz': function(_0x2e7d8c, _0x1e6c05) {
                        return _0x2e7d8c + _0x1e6c05;
                    },
                    'wQiIW': _0x20c8cb(0x574),
                    'vBDGu': '.png',
                    'dkQEk': function(_0x1a19f8, _0x471435) {
                        return _0x1a19f8 <= _0x471435;
                    },
                    'dAuSP': _0x20c8cb(0xa4d),
                    'OSowE': _0x20c8cb(0x703),
                    'jmxIF': _0x20c8cb(0xa94),
                    'qqeXk': _0x20c8cb(0x7b9),
                    'ZqIPx': _0x20c8cb(0x1d8),
                    'zFVAW': _0x20c8cb(0x7f5),
                    'rcUfv': 'assets/level1/creamhand.png',
                    'vjgfP': _0x20c8cb(0x8f6),
                    'abvXf': 'assets/level1/sprayliquid.png',
                    'SrIqG': '2|11|6|5|15|18|12|7|9|13|16|1|17|3|8|10|14|0|4',
                    'IFnWa': _0x20c8cb(0x64e),
                    'smtyB': _0x20c8cb(0xab2),
                    'wnHlZ': 'doll2dress',
                    'Yjooa': _0x20c8cb(0xa5f),
                    'NhTnV': 'doll2blush',
                    'txMNX': _0x20c8cb(0x262),
                    'fEBSU': _0x20c8cb(0x745),
                    'wkrAz': _0x20c8cb(0x871),
                    'foRnE': 'doll2eyetop',
                    'yLUgm': _0x20c8cb(0x510),
                    'RPMIo': _0x20c8cb(0xa96),
                    'nqsFM': _0x20c8cb(0x531),
                    'gWoxN': _0x20c8cb(0x797),
                    'korRr': _0x20c8cb(0x313),
                    'TbXbt': _0x20c8cb(0x9e9),
                    'tZXOQ': _0x20c8cb(0xa14),
                    'Cavjc': _0x20c8cb(0x1fc),
                    'JZQKt': _0x20c8cb(0x75e),
                    'lqegK': _0x20c8cb(0x96f),
                    'GTjvq': _0x20c8cb(0x249),
                    'RCRLR': _0x20c8cb(0x4f2),
                    'tNuDY': 'doll2lip',
                    'GiYcJ': _0x20c8cb(0x35f),
                    'Zuvmv': 'doll2lhand2',
                    'UXAeF': _0x20c8cb(0x285),
                    'TuCNi': 'level2text',
                    'WtZvq': _0x20c8cb(0x58a),
                    'sVssU': _0x20c8cb(0x698),
                    'aZXqK': _0x20c8cb(0x9e1),
                    'vwXgv': function(_0x4d9a0, _0x143b68) {
                        return _0x4d9a0 >= _0x143b68;
                    },
                    'uLmNj': _0x20c8cb(0x3e5),
                    'RAQmj': 'level3cat2',
                    'cBOYc': 'assets/level3/cat2.png',
                    'cpwsu': function(_0x2d04ba, _0x5d2c9f) {
                        return _0x2d04ba + _0x5d2c9f;
                    },
                    'DIFBc': 'level3acc',
                    'QjRFY': function(_0x1b841b, _0xa9c7e7) {
                        return _0x1b841b + _0xa9c7e7;
                    },
                    'djUAn': _0x20c8cb(0x218),
                    'CSZkz': _0x20c8cb(0x8ac),
                    'VqFJL': 'assets/level3/stud',
                    'AUtuI': _0x20c8cb(0x7e0),
                    'KKZBq': function(_0x557973, _0xd89bcb) {
                        return _0x557973 + _0xd89bcb;
                    },
                    'MReOM': function(_0x28a0bc, _0x58a815) {
                        return _0x28a0bc + _0x58a815;
                    },
                    'rXqRo': function(_0x360e42, _0x1e64fe) {
                        return _0x360e42 + _0x1e64fe;
                    },
                    'Ehqcl': 'level3hair',
                    'oEZyT': 'level3background',
                    'EwQEf': 'level3cat3',
                    'DOTiK': _0x20c8cb(0x778),
                    'AwPOm': _0x20c8cb(0x4f4),
                    'bvkVz': _0x20c8cb(0x675),
                    'sXheZ': _0x20c8cb(0x6e5),
                    'GvQEC': _0x20c8cb(0x792),
                    'MjsRy': _0x20c8cb(0x3f9),
                    'jbovS': _0x20c8cb(0x18b),
                    'OBDRo': _0x20c8cb(0xa20),
                    'kTqfi': _0x20c8cb(0xa5a),
                    'ZutyJ': _0x20c8cb(0x3de),
                    'MEgfx': _0x20c8cb(0xa3d),
                    'lWrUC': function(_0x14b0d3, _0x214dc6) {
                        return _0x14b0d3 + _0x214dc6;
                    },
                    'qhUfE': _0x20c8cb(0x8cf),
                    'vLHfZ': 'loaderpad',
                    'kpilG': _0x20c8cb(0x3d4),
                    'EdxMg': _0x20c8cb(0x265),
                    'QncnK': _0x20c8cb(0x902),
                    'rkajU': _0x20c8cb(0x51c),
                    'xxaDt': _0x20c8cb(0xaa9),
                    'dfvdi': _0x20c8cb(0x5ed),
                    'mVisT': _0x20c8cb(0xa10),
                    'baYXB': _0x20c8cb(0x4b0),
                    'keYMo': _0x20c8cb(0x4ac),
                    'arTWI': _0x20c8cb(0x687),
                    'kVZly': 'assets/audio/dollin.mp3',
                    'ontui': _0x20c8cb(0x81f),
                    'KHFGY': _0x20c8cb(0x7c5),
                    'XZvnI': _0x20c8cb(0x3d5),
                    'eLbCM': _0x20c8cb(0x7c4),
                    'ssCrA': _0x20c8cb(0x4d2),
                    'OOBAg': 'setclick',
                    'YVCjQ': _0x20c8cb(0x9a4),
                    'DyrDV': _0x20c8cb(0x682),
                    'nWisx': _0x20c8cb(0x1db),
                    'jZMWV': 'assets/audio/clock.mp3',
                    'XzBNM': _0x20c8cb(0x670),
                    'OTuIg': _0x20c8cb(0x83b),
                    'BmjgM': _0x20c8cb(0x3c7),
                    'fCpRw': _0x20c8cb(0x427),
                    'RlKin': _0x20c8cb(0x1c0),
                    'FEYXB': _0x20c8cb(0x23f),
                    'ToYuD': 'assets/audio/capopensound.mp3',
                    'QnXtU': _0x20c8cb(0x64f),
                    'EpJyA': 'capsound',
                    'tJuWR': _0x20c8cb(0xaac),
                    'ZhaRg': _0x20c8cb(0x95a),
                    'lggCL': _0x20c8cb(0x9c0),
                    'PgkSu': _0x20c8cb(0x3e6),
                    'yGjQO': _0x20c8cb(0x381),
                    'btYYm': _0x20c8cb(0x183),
                    'YeRVF': 'assets/audio/objectsound.ogg',
                    'MycBp': _0x20c8cb(0x8c5),
                    'sNCUo': _0x20c8cb(0x867),
                    'gfEnF': 'assets/audio/throwsound.ogg',
                    'GocdJ': _0x20c8cb(0x2f7),
                    'Mrdqp': 'assets/audio/dropsound.ogg',
                    'wjxZQ': 'assets/audio/dragclick.mp3',
                    'yAZsJ': _0x20c8cb(0x6b7),
                    'cFhrV': 'assets/audio/eshapersound.mp3',
                    'pFbUW': _0x20c8cb(0x617),
                    'LMdqY': _0x20c8cb(0x8db),
                    'eSFxh': _0x20c8cb(0x6f8),
                    'dZayR': 'assets/buttons/play.png',
                    'LHzAl': _0x20c8cb(0x4d9),
                    'ncBBE': _0x20c8cb(0x1e5),
                    'noOyW': 'assets/buttons/done.png',
                    'QnwqE': _0x20c8cb(0x22f),
                    'RAhMi': _0x20c8cb(0x762),
                    'Ehzrv': _0x20c8cb(0x1b7),
                    'XybwO': 'soundmute',
                    'gNRPf': 'assets/setting/soundmute.png',
                    'HxCcQ': 'levelselectbackground',
                    'YCebC': _0x20c8cb(0xa57),
                    'NCECk': _0x20c8cb(0x197),
                    'MyzMT': _0x20c8cb(0x34d),
                    'GPVGP': 'level1',
                    'cKaUN': _0x20c8cb(0xa2d),
                    'srFhj': _0x20c8cb(0x55f),
                    'jBGMj': _0x20c8cb(0xac5),
                    'WUlAe': _0x20c8cb(0x33c),
                    'oyZcy': _0x20c8cb(0x2e2),
                    'cPNZL': 'assets/levelselect/stargilter.png',
                    'TmrbF': _0x20c8cb(0x72e),
                    'lSHop': 'assets/level1/dollgliter.png',
                    'NFDTY': 'level1background',
                    'ceLKa': _0x20c8cb(0x3f4),
                    'KzVtO': _0x20c8cb(0x750),
                    'mKhtG': _0x20c8cb(0x6cd),
                    'WZNFz': _0x20c8cb(0x94a),
                    'bsRcG': _0x20c8cb(0xadb),
                    'hpKLY': 'doll1eyewhite',
                    'dLMRJ': 'assets/level1/doll/eyewhite.png',
                    'ICXWr': _0x20c8cb(0x9ab),
                    'yeUTZ': _0x20c8cb(0x2f0),
                    'SAqWW': 'assets/level1/doll/leyebrow.png',
                    'FItgO': 'doll1reyebrow',
                    'RLceu': 'assets/level1/doll/reyebrow.png',
                    'OKiHv': 'doll1facedust',
                    'PhENH': _0x20c8cb(0x179),
                    'kHwNh': _0x20c8cb(0x84a),
                    'oVNRi': 'doll1lebrow',
                    'MJGfI': _0x20c8cb(0x9af),
                    'YAIne': _0x20c8cb(0x923),
                    'fmosR': 'assets/level1/dresshit.png',
                    'ujulF': _0x20c8cb(0xa0a),
                    'nLIdU': _0x20c8cb(0x866),
                    'eiBKM': _0x20c8cb(0x783),
                    'Ifuqi': _0x20c8cb(0x61c),
                    'FGQLj': 'assets/level1/scrubbinghand.png',
                    'CuKbb': _0x20c8cb(0x30c),
                    'tfvNm': _0x20c8cb(0x78e),
                    'rCVsM': _0x20c8cb(0x18c),
                    'uqWcF': 'eshaperhit',
                    'KrhNm': _0x20c8cb(0x3f5),
                    'QJbag': _0x20c8cb(0xa43),
                    'HgClU': _0x20c8cb(0x651),
                    'heYxS': _0x20c8cb(0x3fd),
                    'Vqnwq': _0x20c8cb(0x912),
                    'onAlq': _0x20c8cb(0x716),
                    'AJOdk': _0x20c8cb(0x1ce),
                    'Hmeyo': _0x20c8cb(0x4e1),
                    'RyPKz': 'facemaskimg',
                    'vNTSM': 'assets/level1/facemaskimg.png',
                    'oGzrN': _0x20c8cb(0x755),
                    'XJolT': _0x20c8cb(0xaab),
                    'rfbWh': _0x20c8cb(0x513),
                    'QAuQF': _0x20c8cb(0x5ca),
                    'BqHWX': _0x20c8cb(0x76a),
                    'YiHgR': _0x20c8cb(0x555),
                    'xHxhV': _0x20c8cb(0x766),
                    'Mlokv': _0x20c8cb(0x7f0),
                    'CZVRl': _0x20c8cb(0x461),
                    'ptHEX': _0x20c8cb(0x8a0),
                    'MHchh': 'assets/level1/creamhandhit.png',
                    'hQeID': _0x20c8cb(0x324),
                    'kZMaa': _0x20c8cb(0x8fa),
                    'WRMJj': 'darkcirclecreamcap',
                    'RLDtk': _0x20c8cb(0x52d),
                    'CiVeS': 'darkcirclecream1',
                    'zUHNB': _0x20c8cb(0x4b4),
                    'RVKhC': _0x20c8cb(0x2af),
                    'OyGvD': _0x20c8cb(0x259),
                    'LRWDS': _0x20c8cb(0x532),
                    'dCrcu': _0x20c8cb(0x605),
                    'JQNIP': _0x20c8cb(0x786),
                    'Fnpcu': _0x20c8cb(0x618),
                    'xUrkW': 'assets/level1/foundation1.png',
                    'ufvSN': _0x20c8cb(0x176),
                    'GLpwA': _0x20c8cb(0x6ae),
                    'SVyzp': 'foundation3',
                    'TzrYb': _0x20c8cb(0x7ff),
                    'BdCNk': _0x20c8cb(0x4a6),
                    'RegKT': _0x20c8cb(0x863),
                    'ePMUV': 'level2panel',
                    'wjiWl': _0x20c8cb(0x8c6),
                    'cisIx': _0x20c8cb(0x2b8),
                    'AFgHN': 'larrow',
                    'pyazv': _0x20c8cb(0x2a7),
                    'NnlXJ': _0x20c8cb(0x3cb),
                    'XrWMW': 'assets/level2/cat2.png',
                    'gveBx': 'assets/level2/cat3.png',
                    'ibKGj': _0x20c8cb(0x4a8),
                    'LILXI': _0x20c8cb(0xa21),
                    'XPkFE': _0x20c8cb(0x833),
                    'QlXSX': _0x20c8cb(0x6da),
                    'FLhLi': _0x20c8cb(0x5a9),
                    'hEnEQ': _0x20c8cb(0x1bb),
                    'jCeYZ': _0x20c8cb(0x695),
                    'YYSun': _0x20c8cb(0x281),
                    'fLccr': function(_0x3df22f, _0x2e4061) {
                        return _0x3df22f <= _0x2e4061;
                    },
                    'ytSxM': _0x20c8cb(0x24e),
                    'pSIif': 'level2lip',
                    'xxAeQ': 'assets/level2/lipstick',
                    'hldue': 'level2blush',
                    'rZpeq': function(_0x839b01, _0x4c7560) {
                        return _0x839b01 + _0x4c7560;
                    },
                    'RQzOr': _0x20c8cb(0x680),
                    'RICRz': function(_0x23b8df, _0x423455) {
                        return _0x23b8df + _0x423455;
                    },
                    'UKxRb': _0x20c8cb(0x263),
                    'DKiKE': function(_0x123f5f, _0x1e377c) {
                        return _0x123f5f + _0x1e377c;
                    },
                    'mTRIz': function(_0x4bc1b4, _0x5969de) {
                        return _0x4bc1b4 + _0x5969de;
                    },
                    'HxuOO': 'assets/level2/eyeshadow',
                    'ERoHi': function(_0x3f9e6a, _0x3cf607) {
                        return _0x3f9e6a + _0x3cf607;
                    },
                    'iTgKG': _0x20c8cb(0x94e),
                    'jsIDE': function(_0x2b2865) {
                        return _0x2b2865();
                    },
                    'dLWWB': _0x20c8cb(0x3bc),
                    'gcOep': _0x20c8cb(0x85c),
                    'TbAEf': _0x20c8cb(0xa38),
                    'QVHzY': 'trans',
                    'ZZuJP': _0x20c8cb(0x77e),
                    'NKwZI': 'title',
                    'wxJKi': 'title-animation.json',
                    'ClWNV': 'level3doll'
                };
            loade = this[_0x20c8cb(0x85a)]['image'](0x0, 0x0, _0x42f5d1['MjsRy'])[_0x20c8cb(0x541)](0x0, 0x0), loaderbarbg = this['add'][_0x20c8cb(0x323)](530.5, 416.5, _0x42f5d1['jbovS'])[_0x20c8cb(0x541)](0.5, 0.5), Logo_animation = this[_0x20c8cb(0x85a)][_0x20c8cb(0x1dd)](528.5, 213.5, _0x42f5d1[_0x20c8cb(0x6b0)], _0x20c8cb(0x66c), !![]), logohit = this[_0x20c8cb(0x85a)][_0x20c8cb(0x323)](535.1, 0xc7, _0x42f5d1['kTqfi'])[_0x20c8cb(0x541)](0.5, 0.5), logohit['setInteractive']({
                'useHandCursor': !![],
                'pixelPerfect': !![]
            }), logohit['on'](_0x42f5d1[_0x20c8cb(0x74d)], _0x214db9);

            function _0x214db9() {
                var _0x319590 = _0x20c8cb;
                _0x42f5d1[_0x319590(0x99c)](excheck, 0x0) && window[_0x319590(0x3fb)](logoUrl, target = _0x42f5d1[_0x319590(0x3a2)]);
            }
            lpbar1 = this[_0x20c8cb(0x85a)]['sprite'](0x8c, 402.5, _0x42f5d1[_0x20c8cb(0x4a0)])[_0x20c8cb(0x541)](0.5, 0.5), loadermask = this[_0x20c8cb(0x85a)][_0x20c8cb(0x244)](533.5, 0x191, _0x42f5d1[_0x20c8cb(0x3be)])[_0x20c8cb(0x541)](0.5, 0.5)[_0x20c8cb(0x7a8)](![]), mask = loadermask['createBitmapMask'](), mask[_0x20c8cb(0x55e)] = 0x1, lpbar1[_0x20c8cb(0x6c0)](mask), barvalue1 = this[_0x20c8cb(0x85a)]['text'](0x212, 0x1ae, _0x42f5d1[_0x20c8cb(0x495)](barvalue[0x0], '%'), {
                'font': _0x20c8cb(0x55a),
                'color': _0x42f5d1[_0x20c8cb(0x8f2)]
            }), barvalue1['setOrigin'](0.5), barvalue1['x'] = 0x212, loaderpad = this[_0x20c8cb(0x85a)]['image'](529.5, 402.5, _0x42f5d1['vLHfZ'])[_0x20c8cb(0x541)](0.5, 0.5), loaderplay = this['add'][_0x20c8cb(0x323)](529.5, 402.5, _0x42f5d1[_0x20c8cb(0x20c)])[_0x20c8cb(0x541)](0.5, 0.5)[_0x20c8cb(0xa74)]({
                'useHandCursor': !![],
                'pixelPerfect': !![]
            }), loaderpad[_0x20c8cb(0xa6e)] = ![], loaderplay[_0x20c8cb(0xa6e)] = ![], this[_0x20c8cb(0x742)]['on'](_0x42f5d1[_0x20c8cb(0xa31)], function(_0x2ab12d) {
                var _0x559442 = _0x20c8cb;
                lpbar1['x'] = _0x42f5d1[_0x559442(0x9b4)](0x82, _0x42f5d1['hqEpH'](parseInt, _0x42f5d1[_0x559442(0x219)](_0x42f5d1['haokR'](parseFloat, _0x42f5d1[_0x559442(0x6fd)](_0x2ab12d, 0x1)), 0x190))), barvalue[0x0] = _0x42f5d1[_0x559442(0xa13)](parseInt, _0x42f5d1[_0x559442(0x6fd)](_0x42f5d1[_0x559442(0xa13)](parseInt, _0x42f5d1['LefXa'](_0x42f5d1[_0x559442(0xa13)](parseFloat, _0x42f5d1['iFNGL'](_0x2ab12d, 0x1)), 0x190)), 0x4)), barvalue1[_0x559442(0x4cd)](_0x42f5d1[_0x559442(0x386)](barvalue[0x0], '%'));
            }), this[_0x20c8cb(0x742)]['on'](_0x42f5d1[_0x20c8cb(0x27e)], function() {
                var _0x4604d2 = _0x20c8cb,
                    _0x3deca0 = {
                        'VSpXZ': function(_0x249f9f, _0x36d08c) {
                            return _0x249f9f !== _0x36d08c;
                        },
                        'KXUHq': _0x42f5d1['IxDxs'],
                        'NhzkH': 'initialloader',
                        'cBviD': 'titlescreen'
                    };
                loaderbarbg['visible'] = ![], lpbar1[_0x4604d2(0xa6e)] = ![], barvalue1[_0x4604d2(0xa6e)] = ![];
                if (_0x42f5d1[_0x4604d2(0x5e1)](pageNo, 0x1)) {
                    var _0x257683 = _0x42f5d1[_0x4604d2(0xa0b)][_0x4604d2(0xa4e)]('|'),
                        _0x4ed2d9 = 0x0;
                    while (!![]) {
                        switch (_0x257683[_0x4ed2d9++]) {
                            case '0':
                                loaderplay['on'](_0x4604d2(0x338), function() {
                                    loaderplay['setScale'](0x1);
                                }, this);
                                continue;
                            case '1':
                                loaderpad[_0x4604d2(0xa6e)] = !![];
                                continue;
                            case '2':
                                loaderplay[_0x4604d2(0xa6e)] = !![];
                                continue;
                            case '3':
                                loaderplay[_0x4604d2(0x253)](_0x42f5d1[_0x4604d2(0x74d)], function() {
                                    var _0x411c9d = _0x4604d2;
                                    _0x3deca0[_0x411c9d(0x60c)](typeof gdsdk, _0x3deca0[_0x411c9d(0x23e)]) && gdsdk[_0x411c9d(0x406)] !== _0x3deca0[_0x411c9d(0x23e)] && gdsdk[_0x411c9d(0x406)](), this[_0x411c9d(0x374)][_0x411c9d(0x374)][_0x411c9d(0xaa6)](_0x3deca0[_0x411c9d(0xab4)]), game[_0x411c9d(0x374)][_0x411c9d(0x26f)](_0x3deca0[_0x411c9d(0x9d5)]);
                                }, this);
                                continue;
                            case '4':
                                loaderplay['on'](_0x42f5d1[_0x4604d2(0x928)], function() {
                                    var _0x4bfb3f = _0x4604d2;
                                    loaderplay[_0x4bfb3f(0x67d)](1.05);
                                }, this);
                                continue;
                        }
                        break;
                    }
                } else loadFinish = !![];
            }), this['load']['audio'](_0x42f5d1[_0x20c8cb(0x4bb)], [_0x42f5d1[_0x20c8cb(0x7d3)], _0x42f5d1['dfvdi']]), this[_0x20c8cb(0x742)][_0x20c8cb(0x46b)](_0x20c8cb(0x51a), [_0x42f5d1['mVisT'], _0x42f5d1[_0x20c8cb(0x9ba)]]), this[_0x20c8cb(0x742)][_0x20c8cb(0x46b)](_0x42f5d1[_0x20c8cb(0x48b)], ['assets/audio/glitter.mp3', _0x20c8cb(0x873)]), this[_0x20c8cb(0x742)][_0x20c8cb(0x46b)](_0x42f5d1[_0x20c8cb(0x5a7)], [_0x42f5d1[_0x20c8cb(0x54d)], _0x42f5d1['ontui']]), this[_0x20c8cb(0x742)][_0x20c8cb(0x46b)]('itemclick', ['assets/audio/itemclick.mp3', _0x20c8cb(0x5ad)]), this[_0x20c8cb(0x742)][_0x20c8cb(0x46b)](_0x42f5d1[_0x20c8cb(0x5d8)], [_0x42f5d1[_0x20c8cb(0x4e9)], _0x20c8cb(0x301)]), this[_0x20c8cb(0x742)]['audio']('complete', [_0x42f5d1['eLbCM'], _0x42f5d1[_0x20c8cb(0xab0)]]), this[_0x20c8cb(0x742)]['audio'](_0x42f5d1[_0x20c8cb(0x7ea)], [_0x42f5d1['YVCjQ'], _0x42f5d1[_0x20c8cb(0x8ce)]]), this[_0x20c8cb(0x742)][_0x20c8cb(0x46b)](_0x42f5d1[_0x20c8cb(0x814)], [_0x42f5d1['jZMWV'], _0x42f5d1['XzBNM']]), this['load']['audio'](_0x20c8cb(0x60d), [_0x42f5d1['OTuIg'], _0x42f5d1['BmjgM']]), this[_0x20c8cb(0x742)]['audio'](_0x42f5d1[_0x20c8cb(0x60b)], [_0x42f5d1[_0x20c8cb(0x780)], _0x42f5d1[_0x20c8cb(0x645)]]), this['load'][_0x20c8cb(0x46b)](_0x20c8cb(0x7d8), [_0x42f5d1[_0x20c8cb(0x78f)], _0x42f5d1[_0x20c8cb(0x99a)]]), this['load'][_0x20c8cb(0x46b)](_0x42f5d1['EpJyA'], [_0x42f5d1[_0x20c8cb(0x974)], 'assets/audio/capopensound.ogg']), this[_0x20c8cb(0x742)]['audio']('spraybottles', [_0x42f5d1[_0x20c8cb(0x8aa)], 'assets/audio/spraybottles.ogg']), this['load'][_0x20c8cb(0x46b)](_0x42f5d1[_0x20c8cb(0x269)], [_0x20c8cb(0x9b8), _0x42f5d1[_0x20c8cb(0xa09)]]), this[_0x20c8cb(0x742)][_0x20c8cb(0x46b)](_0x42f5d1['fCpRw'], [_0x42f5d1[_0x20c8cb(0x780)], _0x20c8cb(0x23f)]), this[_0x20c8cb(0x742)][_0x20c8cb(0x46b)](_0x42f5d1[_0x20c8cb(0x2f2)], [_0x42f5d1[_0x20c8cb(0x61f)], _0x42f5d1[_0x20c8cb(0x636)]]), this['load']['audio'](_0x42f5d1[_0x20c8cb(0x2f2)], [_0x42f5d1[_0x20c8cb(0x61f)], _0x20c8cb(0x4d6)]), this[_0x20c8cb(0x742)][_0x20c8cb(0x46b)](_0x42f5d1[_0x20c8cb(0x9f5)], [_0x42f5d1[_0x20c8cb(0x88e)], _0x42f5d1['gfEnF']]), this[_0x20c8cb(0x742)][_0x20c8cb(0x46b)]('dropsound', [_0x42f5d1[_0x20c8cb(0x37e)], _0x42f5d1[_0x20c8cb(0x884)]]), this[_0x20c8cb(0x742)]['audio'](_0x20c8cb(0x7b5), [_0x42f5d1['wjxZQ'], _0x20c8cb(0x393)]), this['load'][_0x20c8cb(0x46b)](_0x42f5d1['yAZsJ'], [_0x42f5d1['cFhrV'], _0x42f5d1[_0x20c8cb(0xa22)]]), this[_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x42f5d1['LMdqY'], _0x42f5d1[_0x20c8cb(0x80e)]), this[_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x20c8cb(0x3ca), _0x42f5d1['dZayR']), this[_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x20c8cb(0x9f3), _0x20c8cb(0x8b6)), this[_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x42f5d1[_0x20c8cb(0xaa7)], 'assets/buttons/replay.png'), this[_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x42f5d1[_0x20c8cb(0x7a1)], _0x42f5d1['noOyW']), this[_0x20c8cb(0x742)]['image'](_0x20c8cb(0x4a3), _0x20c8cb(0x73e)), this[_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x20c8cb(0x611), _0x42f5d1[_0x20c8cb(0x8d7)]), this[_0x20c8cb(0x742)]['image'](_0x42f5d1[_0x20c8cb(0xa7b)], _0x20c8cb(0x24b)), this[_0x20c8cb(0x742)]['image'](_0x20c8cb(0x43d), _0x42f5d1[_0x20c8cb(0xabf)]), this[_0x20c8cb(0x742)][_0x20c8cb(0x59c)](_0x42f5d1['XybwO'], _0x42f5d1[_0x20c8cb(0x48c)], {
                'frameWidth': 0x4e,
                'frameHeight': 0x4a
            }), this[_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x42f5d1[_0x20c8cb(0x80c)], _0x42f5d1[_0x20c8cb(0x7f6)]), this[_0x20c8cb(0x742)][_0x20c8cb(0x59c)](_0x42f5d1[_0x20c8cb(0x3eb)], _0x42f5d1[_0x20c8cb(0x8c2)], {
                'frameWidth': 0x66,
                'frameHeight': 0x55
            }), this[_0x20c8cb(0x742)]['spritesheet'](_0x42f5d1[_0x20c8cb(0x6b6)], _0x42f5d1['cKaUN'], {
                'frameWidth': 0xff,
                'frameHeight': 0x16f
            }), this['load'][_0x20c8cb(0x59c)](_0x42f5d1[_0x20c8cb(0x2a4)], _0x42f5d1[_0x20c8cb(0x1c4)], {
                'frameWidth': 0xed,
                'frameHeight': 0x171
            }), this[_0x20c8cb(0x742)][_0x20c8cb(0x59c)](_0x42f5d1['WUlAe'], _0x42f5d1[_0x20c8cb(0x4c1)], {
                'frameWidth': 0xf8,
                'frameHeight': 0x16d
            }), this['load']['spritesheet']('stargilter', _0x42f5d1['cPNZL'], {
                'frameWidth': 0xf7,
                'frameHeight': 0xfb
            }), this[_0x20c8cb(0x742)]['spritesheet'](_0x42f5d1[_0x20c8cb(0x1b5)], _0x20c8cb(0xa50), {
                'frameWidth': 0xe5,
                'frameHeight': 0x230
            }), this['load'][_0x20c8cb(0x59c)]('dollgliter', _0x42f5d1['lSHop'], {
                'frameWidth': 0x11b,
                'frameHeight': 0x204
            }), game['scene'][_0x20c8cb(0x237)][pageNo][_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x42f5d1[_0x20c8cb(0x6ce)], _0x42f5d1[_0x20c8cb(0x9aa)]), game[_0x20c8cb(0x374)][_0x20c8cb(0x237)][pageNo][_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x20c8cb(0x190), _0x20c8cb(0x690)), game[_0x20c8cb(0x374)][_0x20c8cb(0x237)][pageNo][_0x20c8cb(0x742)]['image'](_0x42f5d1[_0x20c8cb(0x4ef)], _0x20c8cb(0x38f)), game[_0x20c8cb(0x374)][_0x20c8cb(0x237)][pageNo]['load'][_0x20c8cb(0x323)](_0x42f5d1['mKhtG'], _0x42f5d1['WZNFz']), game[_0x20c8cb(0x374)]['scenes'][pageNo]['load'][_0x20c8cb(0x323)](_0x42f5d1[_0x20c8cb(0x2f1)], _0x20c8cb(0xad5)), game[_0x20c8cb(0x374)][_0x20c8cb(0x237)][pageNo]['load'][_0x20c8cb(0x323)](_0x42f5d1['hpKLY'], _0x42f5d1[_0x20c8cb(0x784)]), game[_0x20c8cb(0x374)]['scenes'][pageNo][_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x20c8cb(0x74b), _0x42f5d1[_0x20c8cb(0x23c)]), game[_0x20c8cb(0x374)][_0x20c8cb(0x237)][pageNo][_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x42f5d1['yeUTZ'], _0x42f5d1[_0x20c8cb(0x445)]), game[_0x20c8cb(0x374)][_0x20c8cb(0x237)][pageNo]['load']['image'](_0x42f5d1[_0x20c8cb(0x41c)], _0x42f5d1[_0x20c8cb(0x576)]), game[_0x20c8cb(0x374)][_0x20c8cb(0x237)][pageNo][_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x42f5d1['OKiHv'], 'assets/level1/doll/facedust.png'), game[_0x20c8cb(0x374)][_0x20c8cb(0x237)][pageNo][_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x42f5d1[_0x20c8cb(0x359)], _0x42f5d1[_0x20c8cb(0x31f)]), game[_0x20c8cb(0x374)][_0x20c8cb(0x237)][pageNo][_0x20c8cb(0x742)]['image'](_0x42f5d1[_0x20c8cb(0x76b)], _0x20c8cb(0x4a1)), game[_0x20c8cb(0x374)][_0x20c8cb(0x237)][pageNo]['load'][_0x20c8cb(0x323)]('doll1darkcircle', _0x42f5d1[_0x20c8cb(0x294)]), game[_0x20c8cb(0x374)][_0x20c8cb(0x237)][pageNo][_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x42f5d1[_0x20c8cb(0x336)], _0x42f5d1[_0x20c8cb(0x17d)]), game['scene'][_0x20c8cb(0x237)][pageNo][_0x20c8cb(0x742)]['image'](_0x42f5d1[_0x20c8cb(0x292)], _0x42f5d1[_0x20c8cb(0x973)]), game[_0x20c8cb(0x374)][_0x20c8cb(0x237)][pageNo]['load'][_0x20c8cb(0x323)](_0x42f5d1[_0x20c8cb(0x9c9)], _0x42f5d1[_0x20c8cb(0x832)]), game[_0x20c8cb(0x374)][_0x20c8cb(0x237)][pageNo]['load'][_0x20c8cb(0x323)](_0x20c8cb(0x9c5), _0x42f5d1[_0x20c8cb(0x352)]), game['scene']['scenes'][pageNo][_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x20c8cb(0x984), _0x42f5d1['CuKbb']), game[_0x20c8cb(0x374)][_0x20c8cb(0x237)][pageNo][_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x42f5d1[_0x20c8cb(0x414)], _0x42f5d1[_0x20c8cb(0x6b8)]), game[_0x20c8cb(0x374)][_0x20c8cb(0x237)][pageNo][_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x20c8cb(0x6ea), _0x20c8cb(0x382)), game[_0x20c8cb(0x374)][_0x20c8cb(0x237)][pageNo][_0x20c8cb(0x742)]['image'](_0x42f5d1[_0x20c8cb(0x38e)], _0x42f5d1[_0x20c8cb(0x969)]), game[_0x20c8cb(0x374)][_0x20c8cb(0x237)][pageNo][_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x42f5d1[_0x20c8cb(0x438)], _0x20c8cb(0x177)), game[_0x20c8cb(0x374)]['scenes'][pageNo][_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x42f5d1['HgClU'], _0x42f5d1[_0x20c8cb(0x860)]), game['scene'][_0x20c8cb(0x237)][pageNo][_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x42f5d1[_0x20c8cb(0x9a6)], _0x42f5d1[_0x20c8cb(0x5cf)]), game['scene']['scenes'][pageNo][_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x42f5d1['AJOdk'], 'assets/level1/facemask.png'), game[_0x20c8cb(0x374)][_0x20c8cb(0x237)][pageNo][_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x20c8cb(0x872), _0x42f5d1['Hmeyo']), game[_0x20c8cb(0x374)][_0x20c8cb(0x237)][pageNo][_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x42f5d1[_0x20c8cb(0xa15)], _0x42f5d1['vNTSM']), game[_0x20c8cb(0x374)]['scenes'][pageNo][_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x42f5d1[_0x20c8cb(0x3e0)], _0x42f5d1[_0x20c8cb(0x224)]), game[_0x20c8cb(0x374)]['scenes'][pageNo]['load'][_0x20c8cb(0x323)](_0x42f5d1[_0x20c8cb(0x558)], _0x42f5d1[_0x20c8cb(0x6dd)]), game[_0x20c8cb(0x374)][_0x20c8cb(0x237)][pageNo][_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x42f5d1['BqHWX'], 'assets/level1/cucumberimg1.png'), game[_0x20c8cb(0x374)]['scenes'][pageNo][_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x20c8cb(0x89e), _0x42f5d1[_0x20c8cb(0x5b6)]), game[_0x20c8cb(0x374)][_0x20c8cb(0x237)][pageNo][_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x42f5d1['xHxhV'], _0x42f5d1[_0x20c8cb(0x8af)]), game[_0x20c8cb(0x374)][_0x20c8cb(0x237)][pageNo][_0x20c8cb(0x742)]['image'](_0x20c8cb(0xa36), _0x42f5d1[_0x20c8cb(0x8ef)]), game[_0x20c8cb(0x374)]['scenes'][pageNo]['load'][_0x20c8cb(0x323)](_0x42f5d1[_0x20c8cb(0xa19)], _0x42f5d1[_0x20c8cb(0x3ff)]), game['scene'][_0x20c8cb(0x237)][pageNo][_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x42f5d1[_0x20c8cb(0xa29)], _0x42f5d1[_0x20c8cb(0x7d1)]), game[_0x20c8cb(0x374)][_0x20c8cb(0x237)][pageNo]['load'][_0x20c8cb(0x323)](_0x42f5d1[_0x20c8cb(0x9ac)], _0x42f5d1['RLDtk']), game['scene'][_0x20c8cb(0x237)][pageNo]['load'][_0x20c8cb(0x323)](_0x42f5d1[_0x20c8cb(0x8f5)], _0x42f5d1[_0x20c8cb(0x1ed)]), game['scene'][_0x20c8cb(0x237)][pageNo][_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x42f5d1[_0x20c8cb(0x1c5)], _0x42f5d1[_0x20c8cb(0x587)]), game[_0x20c8cb(0x374)][_0x20c8cb(0x237)][pageNo][_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x42f5d1[_0x20c8cb(0x935)], _0x42f5d1[_0x20c8cb(0x3e3)]), game[_0x20c8cb(0x374)][_0x20c8cb(0x237)][pageNo]['load']['image'](_0x20c8cb(0x404), _0x42f5d1['JQNIP']), game['scene']['scenes'][pageNo][_0x20c8cb(0x742)]['image']('spraycap', _0x20c8cb(0x337)), game['scene'][_0x20c8cb(0x237)][pageNo][_0x20c8cb(0x742)]['image'](_0x42f5d1[_0x20c8cb(0x4de)], _0x42f5d1['xUrkW']), game[_0x20c8cb(0x374)]['scenes'][pageNo][_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x42f5d1[_0x20c8cb(0x4e7)], _0x42f5d1[_0x20c8cb(0x1cb)]), game['scene'][_0x20c8cb(0x237)][pageNo][_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x42f5d1[_0x20c8cb(0x6df)], _0x20c8cb(0x556)), game[_0x20c8cb(0x374)]['scenes'][pageNo][_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x20c8cb(0xa70), _0x42f5d1[_0x20c8cb(0x761)]), game['scene']['scenes'][pageNo][_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x42f5d1['BdCNk'], _0x42f5d1[_0x20c8cb(0x56b)]), game[_0x20c8cb(0x374)][_0x20c8cb(0x237)][pageNo]['load'][_0x20c8cb(0x323)](_0x42f5d1[_0x20c8cb(0x5dc)], _0x20c8cb(0x794)), game[_0x20c8cb(0x374)]['scenes'][pageNo]['load']['image'](_0x42f5d1[_0x20c8cb(0x2b3)], _0x42f5d1['cisIx']), game[_0x20c8cb(0x374)]['scenes'][pageNo]['load'][_0x20c8cb(0x323)](_0x42f5d1['AFgHN'], _0x42f5d1[_0x20c8cb(0x4ec)]), game[_0x20c8cb(0x374)][_0x20c8cb(0x237)][pageNo][_0x20c8cb(0x742)][_0x20c8cb(0x59c)](_0x20c8cb(0x84e), _0x42f5d1[_0x20c8cb(0xa5c)], {
                'frameWidth': 0x4e,
                'frameHeight': 0x48
            }), game[_0x20c8cb(0x374)]['scenes'][pageNo][_0x20c8cb(0x742)][_0x20c8cb(0x59c)](_0x20c8cb(0x71b), _0x42f5d1[_0x20c8cb(0x317)], {
                'frameWidth': 0x53,
                'frameHeight': 0x4a
            }), game[_0x20c8cb(0x374)][_0x20c8cb(0x237)][pageNo]['load'][_0x20c8cb(0x59c)](_0x20c8cb(0x68b), _0x42f5d1['gveBx'], {
                'frameWidth': 0x4b,
                'frameHeight': 0x49
            }), game[_0x20c8cb(0x374)][_0x20c8cb(0x237)][pageNo][_0x20c8cb(0x742)][_0x20c8cb(0x59c)](_0x42f5d1[_0x20c8cb(0x6f0)], _0x42f5d1[_0x20c8cb(0x2dd)], {
                'frameWidth': 0x51,
                'frameHeight': 0x4b
            }), game[_0x20c8cb(0x374)][_0x20c8cb(0x237)][pageNo]['load'][_0x20c8cb(0x59c)](_0x20c8cb(0x8b5), _0x20c8cb(0x5de), {
                'frameWidth': 0x51,
                'frameHeight': 0x49
            }), game[_0x20c8cb(0x374)]['scenes'][pageNo]['load']['spritesheet'](_0x42f5d1['XPkFE'], _0x42f5d1[_0x20c8cb(0x4ff)], {
                'frameWidth': 0x3c,
                'frameHeight': 0x3a
            }), game[_0x20c8cb(0x374)][_0x20c8cb(0x237)][pageNo]['load']['spritesheet'](_0x42f5d1[_0x20c8cb(0xa0d)], _0x42f5d1[_0x20c8cb(0x80a)], {
                'frameWidth': 0x3c,
                'frameHeight': 0x3a
            }), game[_0x20c8cb(0x374)]['scenes'][pageNo]['load'][_0x20c8cb(0x59c)](_0x42f5d1[_0x20c8cb(0x39a)], _0x42f5d1[_0x20c8cb(0x90d)], {
                'frameWidth': 0x3c,
                'frameHeight': 0x3a
            });
            for (i = 0x1; _0x42f5d1['fLccr'](i, 0x8); i++) {
                var _0x56a5b6 = _0x42f5d1[_0x20c8cb(0x66d)][_0x20c8cb(0xa4e)]('|'),
                    _0x509958 = 0x0;
                while (!![]) {
                    switch (_0x56a5b6[_0x509958++]) {
                        case '0':
                            game[_0x20c8cb(0x374)][_0x20c8cb(0x237)][pageNo][_0x20c8cb(0x742)]['image'](_0x42f5d1[_0x20c8cb(0x5fc)](_0x42f5d1['pSIif'], i), _0x42f5d1['cpwsu'](_0x42f5d1[_0x20c8cb(0x1c2)] + i, _0x42f5d1[_0x20c8cb(0x508)]));
                            continue;
                        case '1':
                            game['scene'][_0x20c8cb(0x237)][pageNo][_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x42f5d1['MReOM'](_0x42f5d1[_0x20c8cb(0x6a5)], i), _0x42f5d1['rZpeq'](_0x42f5d1[_0x20c8cb(0x8d2)] + i, _0x20c8cb(0x2eb)));
                            continue;
                        case '2':
                            game[_0x20c8cb(0x374)]['scenes'][pageNo][_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x42f5d1[_0x20c8cb(0x824)](_0x20c8cb(0x842), i), _0x42f5d1[_0x20c8cb(0x826)](_0x20c8cb(0x447) + i, _0x20c8cb(0x2eb)));
                            continue;
                        case '3':
                            game[_0x20c8cb(0x374)]['scenes'][pageNo][_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x42f5d1[_0x20c8cb(0x826)](_0x42f5d1[_0x20c8cb(0xa46)], i), _0x42f5d1[_0x20c8cb(0x4ad)](_0x42f5d1[_0x20c8cb(0x4af)](_0x42f5d1[_0x20c8cb(0x619)], i), _0x42f5d1[_0x20c8cb(0x508)]));
                            continue;
                        case '4':
                            game[_0x20c8cb(0x374)]['scenes'][pageNo]['load'][_0x20c8cb(0x323)](_0x42f5d1[_0x20c8cb(0x1ea)]('level2stone', i), _0x42f5d1['cpwsu'](_0x42f5d1[_0x20c8cb(0xa91)](_0x42f5d1[_0x20c8cb(0x1c7)], i), _0x42f5d1[_0x20c8cb(0x508)]));
                            continue;
                    }
                    break;
                }
            }
            _0x42f5d1['jsIDE'](_0x2d8344);

            function _0x2d8344() {
                var _0x4ae989 = _0x20c8cb;
                if (_0x42f5d1[_0x4ae989(0x9ca)](level, 0x1)) {
                    game[_0x4ae989(0x374)]['scenes'][pageNo][_0x4ae989(0x742)][_0x4ae989(0x59c)](_0x42f5d1[_0x4ae989(0x841)], _0x42f5d1[_0x4ae989(0x52e)], {
                        'frameWidth': 0x131,
                        'frameHeight': 0x188
                    }), game[_0x4ae989(0x374)][_0x4ae989(0x237)][pageNo][_0x4ae989(0x742)][_0x4ae989(0x59c)](_0x42f5d1[_0x4ae989(0x635)], _0x4ae989(0x433), {
                        'frameWidth': 0xdf,
                        'frameHeight': 0x41
                    }), game[_0x4ae989(0x374)][_0x4ae989(0x237)][pageNo][_0x4ae989(0x742)][_0x4ae989(0x59c)](_0x42f5d1[_0x4ae989(0x351)], _0x4ae989(0x41b), {
                        'frameWidth': 0xf0,
                        'frameHeight': 0x63
                    }), game[_0x4ae989(0x374)]['scenes'][pageNo]['load'][_0x4ae989(0x59c)](_0x42f5d1[_0x4ae989(0x3cf)], _0x42f5d1[_0x4ae989(0x31c)], {
                        'frameWidth': 0x32,
                        'frameHeight': 0x2b
                    }), game[_0x4ae989(0x374)][_0x4ae989(0x237)][pageNo]['load']['spritesheet'](_0x42f5d1[_0x4ae989(0x798)], _0x42f5d1['ndnGx'], {
                        'frameWidth': 0x3a,
                        'frameHeight': 0x31
                    }), game[_0x4ae989(0x374)][_0x4ae989(0x237)][pageNo][_0x4ae989(0x742)][_0x4ae989(0x59c)](_0x42f5d1['eJbWt'], _0x42f5d1['gDWcu'], {
                        'frameWidth': 0x36,
                        'frameHeight': 0x29
                    }), game[_0x4ae989(0x374)][_0x4ae989(0x237)][pageNo][_0x4ae989(0x742)]['spritesheet'](_0x42f5d1[_0x4ae989(0x340)], _0x42f5d1[_0x4ae989(0x54a)], {
                        'frameWidth': 0x36,
                        'frameHeight': 0x2e
                    }), game[_0x4ae989(0x374)][_0x4ae989(0x237)][pageNo]['load'][_0x4ae989(0x59c)](_0x42f5d1[_0x4ae989(0x843)], _0x42f5d1[_0x4ae989(0x316)], {
                        'frameWidth': 0x1ef,
                        'frameHeight': 0xef
                    }), game[_0x4ae989(0x374)][_0x4ae989(0x237)][pageNo][_0x4ae989(0x742)][_0x4ae989(0x59c)](_0x42f5d1[_0x4ae989(0x282)], _0x42f5d1['kjqXh'], {
                        'frameWidth': 0x144,
                        'frameHeight': 0x13d
                    }), game[_0x4ae989(0x374)]['scenes'][pageNo]['load'][_0x4ae989(0x59c)](_0x42f5d1[_0x4ae989(0x2d9)], _0x42f5d1[_0x4ae989(0x9c3)], {
                        'frameWidth': 0x162,
                        'frameHeight': 0x14a
                    }), game[_0x4ae989(0x374)][_0x4ae989(0x237)][pageNo][_0x4ae989(0x742)]['spritesheet'](_0x42f5d1[_0x4ae989(0x40c)], _0x42f5d1['eNsCk'], {
                        'frameWidth': 0x77,
                        'frameHeight': 0xed
                    });
                    for (i = 0x1; _0x42f5d1[_0x4ae989(0x58e)](i, 0x5); i++) {
                        game[_0x4ae989(0x374)][_0x4ae989(0x237)][pageNo]['load'][_0x4ae989(0x323)](_0x42f5d1[_0x4ae989(0x1ea)](_0x42f5d1['wigak'], i), _0x42f5d1[_0x4ae989(0x1cd)](_0x42f5d1['wQiIW'] + i, _0x42f5d1['vBDGu']));
                    }
                    for (i = 0x1; _0x42f5d1[_0x4ae989(0x931)](i, 0x7); i++) {
                        game[_0x4ae989(0x374)][_0x4ae989(0x237)][pageNo][_0x4ae989(0x742)][_0x4ae989(0x323)](_0x42f5d1[_0x4ae989(0x1ea)](_0x42f5d1[_0x4ae989(0x6ef)], i), _0x42f5d1[_0x4ae989(0x1cd)](_0x42f5d1['OSowE'] + i, _0x42f5d1[_0x4ae989(0x508)]));
                    }
                    game[_0x4ae989(0x374)]['scenes'][pageNo][_0x4ae989(0x742)][_0x4ae989(0x59c)]('eshapeani', _0x42f5d1[_0x4ae989(0x3ce)], {
                        'frameWidth': 0x5b,
                        'frameHeight': 0x61
                    }), game[_0x4ae989(0x374)][_0x4ae989(0x237)][pageNo][_0x4ae989(0x742)]['spritesheet'](_0x42f5d1[_0x4ae989(0x3e7)], _0x42f5d1['ZqIPx'], {
                        'frameWidth': 0x73,
                        'frameHeight': 0x73
                    }), game['scene'][_0x4ae989(0x237)][pageNo][_0x4ae989(0x742)][_0x4ae989(0x59c)](_0x42f5d1[_0x4ae989(0xa00)], _0x42f5d1[_0x4ae989(0x921)], {
                        'frameWidth': 0xb3,
                        'frameHeight': 0x109
                    }), game[_0x4ae989(0x374)][_0x4ae989(0x237)][pageNo][_0x4ae989(0x742)][_0x4ae989(0x59c)](_0x42f5d1[_0x4ae989(0x754)], _0x42f5d1[_0x4ae989(0x588)], {
                        'frameWidth': 0x8b,
                        'frameHeight': 0xd6
                    });
                }
                if (_0x42f5d1[_0x4ae989(0x9ca)](level, 0x2)) {
                    var _0x1a96f0 = _0x42f5d1[_0x4ae989(0x658)][_0x4ae989(0xa4e)]('|'),
                        _0x40b48b = 0x0;
                    while (!![]) {
                        switch (_0x1a96f0[_0x40b48b++]) {
                            case '0':
                                game[_0x4ae989(0x374)]['scenes'][pageNo]['load'][_0x4ae989(0x59c)](_0x42f5d1['IFnWa'], _0x42f5d1['smtyB'], {
                                    'frameWidth': 0xb7,
                                    'frameHeight': 0xde
                                });
                                continue;
                            case '1':
                                game['scene'][_0x4ae989(0x237)][pageNo][_0x4ae989(0x742)][_0x4ae989(0x323)](_0x42f5d1[_0x4ae989(0x5fe)], _0x4ae989(0x946));
                                continue;
                            case '2':
                                game[_0x4ae989(0x374)][_0x4ae989(0x237)][pageNo][_0x4ae989(0x742)]['image'](_0x42f5d1[_0x4ae989(0x8ea)], 'assets/level2/doll/doll.png');
                                continue;
                            case '3':
                                game[_0x4ae989(0x374)][_0x4ae989(0x237)][pageNo]['load'][_0x4ae989(0x59c)](_0x42f5d1[_0x4ae989(0x4b2)], _0x42f5d1['txMNX'], {
                                    'frameWidth': 0x107,
                                    'frameHeight': 0xa3
                                });
                                continue;
                            case '4':
                                game[_0x4ae989(0x374)][_0x4ae989(0x237)][pageNo][_0x4ae989(0x742)][_0x4ae989(0x59c)](_0x42f5d1[_0x4ae989(0x1be)], _0x4ae989(0x2ba), {
                                    'frameWidth': 0xb7,
                                    'frameHeight': 0x54
                                });
                                continue;
                            case '5':
                                game[_0x4ae989(0x374)]['scenes'][pageNo][_0x4ae989(0x742)][_0x4ae989(0x323)](_0x42f5d1[_0x4ae989(0x48d)], _0x4ae989(0x7d4));
                                continue;
                            case '6':
                                game['scene'][_0x4ae989(0x237)][pageNo][_0x4ae989(0x742)]['image'](_0x42f5d1['foRnE'], _0x42f5d1[_0x4ae989(0x5b0)]);
                                continue;
                            case '7':
                                game['scene'][_0x4ae989(0x237)][pageNo][_0x4ae989(0x742)][_0x4ae989(0x323)](_0x42f5d1[_0x4ae989(0xad1)], _0x42f5d1[_0x4ae989(0x3af)]);
                                continue;
                            case '8':
                                game['scene'][_0x4ae989(0x237)][pageNo][_0x4ae989(0x742)][_0x4ae989(0x59c)]('doll2eyeshadeclose', 'assets/level2/doll/eyeshadeclose.png', {
                                    'frameWidth': 0xfe,
                                    'frameHeight': 0x70
                                });
                                continue;
                            case '9':
                                game[_0x4ae989(0x374)][_0x4ae989(0x237)][pageNo]['load']['image'](_0x42f5d1[_0x4ae989(0x994)], _0x42f5d1[_0x4ae989(0xab7)]);
                                continue;
                            case '10':
                                game['scene']['scenes'][pageNo][_0x4ae989(0x742)][_0x4ae989(0x59c)](_0x4ae989(0xa2c), _0x42f5d1[_0x4ae989(0x58c)], {
                                    'frameWidth': 0x106,
                                    'frameHeight': 0x72
                                });
                                continue;
                            case '11':
                                game[_0x4ae989(0x374)]['scenes'][pageNo][_0x4ae989(0x742)]['image'](_0x42f5d1[_0x4ae989(0x92b)], _0x42f5d1[_0x4ae989(0x7c3)]);
                                continue;
                            case '12':
                                game[_0x4ae989(0x374)][_0x4ae989(0x237)][pageNo][_0x4ae989(0x742)]['image'](_0x42f5d1[_0x4ae989(0x7a2)], _0x42f5d1['lqegK']);
                                continue;
                            case '13':
                                game['scene'][_0x4ae989(0x237)][pageNo][_0x4ae989(0x742)]['image'](_0x42f5d1[_0x4ae989(0x4c3)], _0x42f5d1['RCRLR']);
                                continue;
                            case '14':
                                game['scene']['scenes'][pageNo][_0x4ae989(0x742)][_0x4ae989(0x59c)](_0x42f5d1[_0x4ae989(0x21a)], _0x4ae989(0x2c8), {
                                    'frameWidth': 0x71,
                                    'frameHeight': 0x3d
                                });
                                continue;
                            case '15':
                                game[_0x4ae989(0x374)]['scenes'][pageNo][_0x4ae989(0x742)]['image'](_0x42f5d1[_0x4ae989(0x596)], _0x4ae989(0x9d4));
                                continue;
                            case '16':
                                game[_0x4ae989(0x374)][_0x4ae989(0x237)][pageNo][_0x4ae989(0x742)][_0x4ae989(0x323)](_0x42f5d1['Zuvmv'], _0x42f5d1['UXAeF']);
                                continue;
                            case '17':
                                game[_0x4ae989(0x374)][_0x4ae989(0x237)][pageNo][_0x4ae989(0x742)][_0x4ae989(0x59c)](_0x42f5d1[_0x4ae989(0x44d)], _0x42f5d1[_0x4ae989(0x90c)], {
                                    'frameWidth': 0x68,
                                    'frameHeight': 0x31
                                });
                                continue;
                            case '18':
                                game['scene'][_0x4ae989(0x237)][pageNo][_0x4ae989(0x742)][_0x4ae989(0x323)](_0x42f5d1[_0x4ae989(0x628)], _0x42f5d1[_0x4ae989(0x5b2)]);
                                continue;
                        }
                        break;
                    }
                }
                if (_0x42f5d1[_0x4ae989(0xa3c)](level, 0x3)) {
                    var _0x32d172 = _0x42f5d1[_0x4ae989(0xa2f)]['split']('|'),
                        _0xff0ca3 = 0x0;
                    while (!![]) {
                        switch (_0x32d172[_0xff0ca3++]) {
                            case '0':
                                game[_0x4ae989(0x374)]['scenes'][pageNo][_0x4ae989(0x742)][_0x4ae989(0x59c)](_0x42f5d1[_0x4ae989(0x5c3)], _0x42f5d1[_0x4ae989(0x375)], {
                                    'frameWidth': 0x3f,
                                    'frameHeight': 0x3a
                                });
                                continue;
                            case '1':
                                game[_0x4ae989(0x374)][_0x4ae989(0x237)][pageNo][_0x4ae989(0x742)][_0x4ae989(0x59c)]('level3cat4', _0x4ae989(0x261), {
                                    'frameWidth': 0x3f,
                                    'frameHeight': 0x3a
                                });
                                continue;
                            case '2':
                                for (i = 0x1; i <= 0x8; i++) {
                                    game[_0x4ae989(0x374)]['scenes'][pageNo][_0x4ae989(0x742)][_0x4ae989(0x323)](_0x42f5d1[_0x4ae989(0x5fc)](_0x4ae989(0x4ba), i), _0x42f5d1[_0x4ae989(0x386)](_0x42f5d1[_0x4ae989(0x1cd)]('assets/level3/dress', i), _0x42f5d1[_0x4ae989(0x508)])), game[_0x4ae989(0x374)][_0x4ae989(0x237)][pageNo][_0x4ae989(0x742)][_0x4ae989(0x323)](_0x42f5d1[_0x4ae989(0x6ab)] + i, _0x42f5d1['QjRFY'](_0x42f5d1[_0x4ae989(0x824)](_0x42f5d1[_0x4ae989(0x479)], i), '.png')), game[_0x4ae989(0x374)][_0x4ae989(0x237)][pageNo]['load'][_0x4ae989(0x323)](_0x42f5d1[_0x4ae989(0x9b4)](_0x42f5d1[_0x4ae989(0x929)], i), _0x42f5d1['fOafI'](_0x42f5d1[_0x4ae989(0x1cd)](_0x42f5d1[_0x4ae989(0x309)], i), _0x42f5d1[_0x4ae989(0x508)])), game[_0x4ae989(0x374)][_0x4ae989(0x237)][pageNo][_0x4ae989(0x742)][_0x4ae989(0x323)](_0x42f5d1[_0x4ae989(0x386)](_0x42f5d1['AUtuI'], i), _0x42f5d1[_0x4ae989(0x7b8)](_0x42f5d1[_0x4ae989(0x185)](_0x4ae989(0x7fd), i), _0x4ae989(0x2eb))), game[_0x4ae989(0x374)]['scenes'][pageNo]['load']['image'](_0x42f5d1[_0x4ae989(0x8b9)](_0x42f5d1['Ehqcl'], i), _0x42f5d1[_0x4ae989(0x386)](_0x42f5d1[_0x4ae989(0x8b9)](_0x4ae989(0x220), i), _0x42f5d1[_0x4ae989(0x508)]));
                                }
                                continue;
                            case '3':
                                game['scene'][_0x4ae989(0x237)][pageNo]['load'][_0x4ae989(0x323)](_0x42f5d1[_0x4ae989(0x60f)], 'assets/level3/background.jpg');
                                continue;
                            case '4':
                                game[_0x4ae989(0x374)][_0x4ae989(0x237)][pageNo][_0x4ae989(0x742)][_0x4ae989(0x59c)](_0x42f5d1[_0x4ae989(0xac9)], _0x42f5d1[_0x4ae989(0xacd)], {
                                    'frameWidth': 0x55,
                                    'frameHeight': 0x4b
                                });
                                continue;
                            case '5':
                                game[_0x4ae989(0x374)][_0x4ae989(0x237)][pageNo][_0x4ae989(0x742)][_0x4ae989(0x59c)](_0x42f5d1[_0x4ae989(0x3d2)], _0x42f5d1[_0x4ae989(0x898)], {
                                    'frameWidth': 0x3f,
                                    'frameHeight': 0x3a
                                });
                                continue;
                            case '6':
                                game[_0x4ae989(0x374)][_0x4ae989(0x237)][pageNo][_0x4ae989(0x742)][_0x4ae989(0x59c)](_0x42f5d1[_0x4ae989(0x489)], _0x42f5d1[_0x4ae989(0x56d)], {
                                    'frameWidth': 0x3f,
                                    'frameHeight': 0x3a
                                });
                                continue;
                        }
                        break;
                    }
                }
            }
            this[_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x42f5d1[_0x20c8cb(0x51f)], _0x20c8cb(0x64a)), this[_0x20c8cb(0x742)][_0x20c8cb(0x323)](_0x42f5d1[_0x20c8cb(0x180)], _0x42f5d1['TbAEf']), this[_0x20c8cb(0x742)][_0x20c8cb(0x5b1)]('assets/titlescreen'), this[_0x20c8cb(0x742)]['spine'](_0x42f5d1[_0x20c8cb(0x19d)], _0x42f5d1[_0x20c8cb(0x258)], _0x20c8cb(0x494)), this['load'][_0x20c8cb(0x1dd)](_0x42f5d1[_0x20c8cb(0x4a2)], _0x42f5d1[_0x20c8cb(0x33a)], 'title-animation.atlas'), this[_0x20c8cb(0x742)]['setPath']('assets/titlescreen/doll'), this['load'][_0x20c8cb(0x1dd)](_0x42f5d1[_0x20c8cb(0x1b3)], 'beauty-salon.json', 'beauty-salon.atlas'), this['load'][_0x20c8cb(0x26f)]();
        },
        'update': function() {
            var _0x4b220d = _0x192e21,
                _0x4bf1e1 = {
                    'XAgTJ': function(_0x2d405d, _0x195f1f) {
                        return _0x2d405d + _0x195f1f;
                    },
                    'SfOvL': function(_0x390db8, _0x47f7ef) {
                        return _0x390db8 * _0x47f7ef;
                    },
                    'EOzvB': function(_0x5b0115, _0x2ce18f) {
                        return _0x5b0115 * _0x2ce18f;
                    }
                };
            loaderplay[_0x4b220d(0x67d)](_0x4bf1e1['XAgTJ'](baseScale, _0x4bf1e1['SfOvL'](magnitude, Math[_0x4b220d(0x711)](_0x4bf1e1[_0x4b220d(0x73f)](this[_0x4b220d(0x48f)][_0x4b220d(0xa49)], speed)))), _0x4bf1e1['XAgTJ'](baseScale, _0x4bf1e1[_0x4b220d(0x91c)](magnitude, Math['cos'](_0x4bf1e1[_0x4b220d(0x73f)](this[_0x4b220d(0x48f)][_0x4b220d(0xa49)], speed)))));
        }
    }),
    dollIn = ![],
    settingval = ![],
    startgame2 = ![],
    lcount = 0x0,
    lcount1 = 0x0,
    lcount2 = 0x0,
    lcount3 = 0x0,
    lcount4 = 0x0,
    lcount5 = 0x0,
    lcount6 = 0x0,
    lcount7 = 0x0,
    lcount8 = 0x0,
    spongestart = 0x0,
    towelstart = 0x0,
    clockstart = 0x0,
    levelfinish = ![],
    darr = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
    darr1 = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
    darr2 = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
    darr3 = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
    darr4 = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
    darr5 = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
    darr6 = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
    marr = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
    titlescreen = new Phaser[(_0x192e21(0x8eb))]({
        'Extends': Phaser[_0x192e21(0xabc)],
        'initialize': function titlescreen() {
            var _0x576b6f = _0x192e21;
            Phaser[_0x576b6f(0xabc)][_0x576b6f(0x654)](this, {
                'key': _0x576b6f(0x3ac)
            });
        },
        'preload': function() {
            var _0x1760e6 = _0x192e21,
                _0x4566a5 = {
                    'krGsB': _0x1760e6(0x7f4)
                },
                _0x4ad316 = _0x4566a5[_0x1760e6(0x327)][_0x1760e6(0xa4e)]('|'),
                _0x1b0d5c = 0x0;
            while (!![]) {
                switch (_0x4ad316[_0x1b0d5c++]) {
                    case '0':
                        lcount6 = 0x0;
                        continue;
                    case '1':
                        lcount5 = 0x0;
                        continue;
                    case '2':
                        lcount = 0x0;
                        continue;
                    case '3':
                        lcount7 = 0x0;
                        continue;
                    case '4':
                        settingval = ![];
                        continue;
                    case '5':
                        startgame2 = ![];
                        continue;
                    case '6':
                        lcount3 = 0x0;
                        continue;
                    case '7':
                        lcount8 = 0x0;
                        continue;
                    case '8':
                        lcount2 = 0x0;
                        continue;
                    case '9':
                        lcount1 = 0x0;
                        continue;
                    case '10':
                        pageNo = 0x2;
                        continue;
                    case '11':
                        loadFinish = ![];
                        continue;
                    case '12':
                        soundcheck = !![];
                        continue;
                    case '13':
                        lcount4 = 0x0;
                        continue;
                    case '14':
                        dollIn = ![];
                        continue;
                    case '15':
                        levelfinish = ![];
                        continue;
                }
                break;
            }
        },
        'create': function() {
            var _0x106ae2 = _0x192e21,
                _0x15c9d2 = {
                    'ZxkcQ': 'Eyeshadow\x20Close-04',
                    'sxZtx': _0x106ae2(0x622),
                    'YUiUb': _0x106ae2(0x6fe),
                    'zxtej': 'Eyeshadow\x20Close-03',
                    'NchzV': _0x106ae2(0x454),
                    'vlPrZ': _0x106ae2(0x18f),
                    'gCMbN': _0x106ae2(0x75d),
                    'tYdKI': _0x106ae2(0x4e5),
                    'cNKRm': function(_0x1baaad, _0x38e995) {
                        return _0x1baaad == _0x38e995;
                    },
                    'xaBVX': _0x106ae2(0x54e),
                    'TZNln': _0x106ae2(0x901),
                    'foXNW': _0x106ae2(0x88a),
                    'Nfuay': 'Dress',
                    'dsbrh': _0x106ae2(0x933),
                    'zGkEN': _0x106ae2(0x751),
                    'FhovM': _0x106ae2(0x2c7),
                    'qfTLU': _0x106ae2(0x8e3),
                    'KMQdG': _0x106ae2(0x60a),
                    'ioUNM': _0x106ae2(0x530),
                    'dUwfK': 'Head\x20Acc-00',
                    'RozVY': _0x106ae2(0x6a1),
                    'iffYx': _0x106ae2(0x55c),
                    'FrCXw': 'Blush-04',
                    'AnORn': _0x106ae2(0x4a9),
                    'joXCn': _0x106ae2(0xac8),
                    'huEju': _0x106ae2(0x366),
                    'UltQY': 'Piercing-02-00',
                    'fQMbP': _0x106ae2(0x69b),
                    'wrYkn': _0x106ae2(0x33e),
                    'gSIXm': 'Piercing-04-00',
                    'Gdjvd': _0x106ae2(0x850),
                    'icBRD': _0x106ae2(0xad8),
                    'GQbrG': _0x106ae2(0x8b0),
                    'cyGkL': _0x106ae2(0x8f0),
                    'RcNZs': _0x106ae2(0x391),
                    'sdrXH': _0x106ae2(0xa58),
                    'jWFGk': 'L\x20Hand\x20Dress',
                    'pCQeW': 'L\x20Hand\x20Dress-02',
                    'AbNPW': _0x106ae2(0x5c9),
                    'olcHp': _0x106ae2(0x6bd),
                    'jZqmg': 'Shoe',
                    'IcrrY': _0x106ae2(0x2ae),
                    'DWPtB': _0x106ae2(0x796),
                    'IUSse': _0x106ae2(0x6a4),
                    'biJVl': 'Eye\x20Ball',
                    'LaARI': 'Eye\x20Brow',
                    'luQAX': _0x106ae2(0x287),
                    'tEbEO': _0x106ae2(0x251),
                    'xyODy': _0x106ae2(0x78a),
                    'kNgNZ': 'L\x20Hand-01',
                    'MYdeB': _0x106ae2(0x615),
                    'XwDbK': _0x106ae2(0x17f),
                    'VxFKQ': _0x106ae2(0x69e),
                    'zBujX': _0x106ae2(0x478),
                    'tsCCm': _0x106ae2(0x9a2),
                    'rOkkM': _0x106ae2(0x9f2),
                    'RrRPH': 'Dress-04',
                    'NeEWD': _0x106ae2(0x91f),
                    'KZCwc': 'Necklaces-03',
                    'tATEW': _0x106ae2(0xa48),
                    'foOGi': _0x106ae2(0x76d),
                    'KOpDd': _0x106ae2(0x482),
                    'modWs': _0x106ae2(0x652),
                    'msTWX': _0x106ae2(0xa34),
                    'jrXIt': _0x106ae2(0x744),
                    'IsuCS': 'Piercing-04',
                    'EMMrE': _0x106ae2(0x188),
                    'OUHfX': _0x106ae2(0x315),
                    'bSjKB': _0x106ae2(0x2d2),
                    'FoXFJ': _0x106ae2(0x677),
                    'BwIAV': _0x106ae2(0x838),
                    'lTEfP': _0x106ae2(0x610),
                    'USumR': _0x106ae2(0xaa0),
                    'wRDmY': _0x106ae2(0x757),
                    'RmgjN': 'Necklaces-00',
                    'lMYcF': _0x106ae2(0x6f7),
                    'tpvRg': 'Blush-02',
                    'aJRXk': _0x106ae2(0x8f4),
                    'DDIjG': _0x106ae2(0x788),
                    'mwfRK': _0x106ae2(0xa08),
                    'DPwxb': _0x106ae2(0x803),
                    'siGeT': _0x106ae2(0x53d),
                    'LzMsT': _0x106ae2(0x3ca),
                    'UycDn': _0x106ae2(0x902),
                    'FtQrW': function(_0x4aa52c) {
                        return _0x4aa52c();
                    },
                    'sffmz': _0x106ae2(0xa03),
                    'AqHTh': 'boden'
                };
            titlebackground = this['add'][_0x106ae2(0x323)](533.5, 0x12c, _0x106ae2(0x762))['setOrigin'](0.5), titledoll1 = this[_0x106ae2(0x85a)][_0x106ae2(0x1dd)](0x1a4, 0x104, _0x15c9d2['foXNW']), titledoll1['setAttachment'](_0x15c9d2[_0x106ae2(0x989)], _0x15c9d2[_0x106ae2(0x71d)]), titledoll1[_0x106ae2(0x997)](_0x15c9d2['zGkEN'], _0x15c9d2['FhovM']), titledoll1[_0x106ae2(0x997)]('Necklaces', _0x15c9d2[_0x106ae2(0x44a)]), titledoll1[_0x106ae2(0x997)](_0x106ae2(0xa48), _0x15c9d2['KMQdG']), titledoll1['setAttachment'](_0x15c9d2[_0x106ae2(0x403)], _0x15c9d2[_0x106ae2(0x44e)]), titledoll1[_0x106ae2(0x997)](_0x106ae2(0x76d), _0x15c9d2[_0x106ae2(0x9dd)]), titledoll1['setAttachment'](_0x15c9d2[_0x106ae2(0x67e)], 'Face\x20Acc-03'), titledoll1[_0x106ae2(0x997)](_0x106ae2(0x652), _0x15c9d2[_0x106ae2(0x207)]), titledoll1[_0x106ae2(0x997)](_0x15c9d2['AnORn'], _0x15c9d2[_0x106ae2(0x1bc)]), titledoll1[_0x106ae2(0x997)](_0x15c9d2['huEju'], _0x15c9d2[_0x106ae2(0x87d)]), titledoll1[_0x106ae2(0x997)](_0x15c9d2[_0x106ae2(0x6c5)], _0x15c9d2[_0x106ae2(0x40a)]), titledoll1[_0x106ae2(0x997)]('Piercing-04', _0x15c9d2[_0x106ae2(0x905)]), titledoll1[_0x106ae2(0x997)](_0x15c9d2[_0x106ae2(0x355)], _0x15c9d2[_0x106ae2(0x9ed)]), titledoll1['setAttachment'](_0x15c9d2[_0x106ae2(0x2b9)], _0x15c9d2[_0x106ae2(0x518)]), titledoll1[_0x106ae2(0x997)](_0x15c9d2['RcNZs'], _0x15c9d2['sdrXH']), titledoll1[_0x106ae2(0x997)](_0x15c9d2[_0x106ae2(0x4d4)], _0x15c9d2[_0x106ae2(0x583)]), titledoll1[_0x106ae2(0x997)](_0x15c9d2[_0x106ae2(0x951)], _0x15c9d2[_0x106ae2(0x80b)]), titledoll1['setAttachment'](_0x15c9d2[_0x106ae2(0x31e)], _0x15c9d2['IcrrY']), titledoll1[_0x106ae2(0x997)](_0x15c9d2[_0x106ae2(0x604)], _0x15c9d2[_0x106ae2(0x604)]), titledoll1[_0x106ae2(0x997)](_0x15c9d2[_0x106ae2(0x3f2)], _0x15c9d2['IUSse']), titledoll1['setAttachment'](_0x15c9d2[_0x106ae2(0x2c1)], _0x15c9d2[_0x106ae2(0x8cb)]), titledoll1[_0x106ae2(0x997)](_0x15c9d2[_0x106ae2(0xa7e)], 'Eye\x20Ball-04'), titledoll1[_0x106ae2(0x997)](_0x15c9d2['LaARI'], _0x15c9d2['LaARI']), titledoll1[_0x106ae2(0x997)](_0x106ae2(0x287), _0x15c9d2[_0x106ae2(0xa6a)]), titledoll1[_0x106ae2(0x997)](_0x15c9d2['tEbEO'], _0x15c9d2[_0x106ae2(0x7af)]), titledoll1[_0x106ae2(0x997)](_0x106ae2(0x610), _0x15c9d2[_0x106ae2(0x53c)]), titledoll1[_0x106ae2(0x997)](_0x15c9d2[_0x106ae2(0x799)], _0x15c9d2[_0x106ae2(0x799)]), titledoll1['setAttachment'](_0x15c9d2[_0x106ae2(0x1f9)], _0x15c9d2[_0x106ae2(0x1f9)]), titledoll1[_0x106ae2(0x997)](_0x15c9d2['XwDbK'], _0x15c9d2['XwDbK']), titledoll1[_0x106ae2(0x997)](_0x15c9d2['VxFKQ'], _0x106ae2(0x69e)), titledoll1[_0x106ae2(0x997)]('R\x20Hand-02', _0x15c9d2[_0x106ae2(0x290)]), titledoll1[_0x106ae2(0x997)]('Leg', _0x15c9d2['tsCCm']), titledoll1['play'](_0x15c9d2[_0x106ae2(0x30d)], !![]), titledollgrp1 = this[_0x106ae2(0x85a)]['container'](), titledollgrp1['add'](titledoll1), titledollgrp1['x'] = -0x3e8, t1 = game[_0x106ae2(0x374)][_0x106ae2(0x237)][pageNo]['time']['addEvent']({
                'delay': 0x3e8,
                'callback': _0x48a540,
                'callbackScope': this
            });

            function _0x48a540() {
                var _0x168e68 = _0x106ae2;
                titledoll1[_0x168e68(0x997)](_0x168e68(0x622), _0x15c9d2[_0x168e68(0x621)]), t1 = game[_0x168e68(0x374)]['scenes'][pageNo][_0x168e68(0x48f)][_0x168e68(0x85d)]({
                    'delay': 0xc8,
                    'callback': _0x4cd990,
                    'callbackScope': this
                });
            }

            function _0x4cd990() {
                var _0x310b2b = _0x106ae2;
                titledoll1[_0x310b2b(0x997)](_0x15c9d2[_0x310b2b(0x2c1)], _0x15c9d2['YUiUb']), t1 = game[_0x310b2b(0x374)][_0x310b2b(0x237)][pageNo]['time']['addEvent']({
                    'delay': 0xbb8,
                    'callback': _0x48a540,
                    'callbackScope': this
                });
            }
            titledoll2 = this['add'][_0x106ae2(0x1dd)](0x1a4, 0x104, _0x15c9d2[_0x106ae2(0xa3b)]), titledoll2['setAttachment'](_0x15c9d2[_0x106ae2(0x989)], _0x15c9d2[_0x106ae2(0x896)]), titledoll2[_0x106ae2(0x997)](_0x15c9d2[_0x106ae2(0x22d)], _0x15c9d2[_0x106ae2(0x9d1)]), titledoll2[_0x106ae2(0x997)](_0x15c9d2[_0x106ae2(0x656)], _0x15c9d2['KZCwc']), titledoll2[_0x106ae2(0x997)](_0x15c9d2['tATEW'], _0x106ae2(0x9e6)), titledoll2[_0x106ae2(0x997)](_0x106ae2(0x530), _0x15c9d2['dUwfK']), titledoll2['setAttachment'](_0x15c9d2[_0x106ae2(0x304)], _0x15c9d2[_0x106ae2(0x9dd)]), titledoll2[_0x106ae2(0x997)](_0x106ae2(0x55c), _0x15c9d2[_0x106ae2(0x75c)]), titledoll2['setAttachment'](_0x15c9d2[_0x106ae2(0xa88)], _0x15c9d2['FrCXw']), titledoll2[_0x106ae2(0x997)](_0x15c9d2[_0x106ae2(0x9e8)], _0x15c9d2[_0x106ae2(0x50f)]), titledoll2[_0x106ae2(0x997)](_0x15c9d2['huEju'], _0x15c9d2[_0x106ae2(0x87d)]), titledoll2['setAttachment'](_0x106ae2(0x69b), _0x15c9d2[_0x106ae2(0x428)]), titledoll2[_0x106ae2(0x997)](_0x15c9d2[_0x106ae2(0x322)], _0x15c9d2['gSIXm']), titledoll2[_0x106ae2(0x997)](_0x15c9d2[_0x106ae2(0x355)], _0x15c9d2['EMMrE']), titledoll2[_0x106ae2(0x997)](_0x106ae2(0x8b0), _0x15c9d2[_0x106ae2(0x5c8)]), titledoll2[_0x106ae2(0x997)](_0x106ae2(0x391), _0x15c9d2[_0x106ae2(0x280)]), titledoll2['setAttachment'](_0x106ae2(0x5d9), 'L\x20Hand\x20Dress-04'), titledoll2['setAttachment'](_0x15c9d2['AbNPW'], _0x15c9d2['FoXFJ']), titledoll2[_0x106ae2(0x997)](_0x15c9d2[_0x106ae2(0x31e)], _0x106ae2(0x1de)), titledoll2[_0x106ae2(0x997)](_0x15c9d2[_0x106ae2(0x604)], _0x15c9d2['DWPtB']), titledoll2[_0x106ae2(0x997)](_0x106ae2(0x6a4), _0x106ae2(0x6a4)), titledoll2[_0x106ae2(0x997)](_0x106ae2(0x622), _0x106ae2(0x880)), titledoll2[_0x106ae2(0x997)](_0x106ae2(0x7b0), _0x15c9d2[_0x106ae2(0x90f)]), titledoll2[_0x106ae2(0x997)](_0x106ae2(0x48e), _0x106ae2(0x48e)), titledoll2[_0x106ae2(0x997)](_0x15c9d2[_0x106ae2(0xa6a)], _0x15c9d2[_0x106ae2(0xa6a)]), titledoll2['setAttachment'](_0x15c9d2['tEbEO'], _0x15c9d2[_0x106ae2(0x7af)]), titledoll2[_0x106ae2(0x997)](_0x15c9d2[_0x106ae2(0x6d7)], _0x15c9d2['USumR']), titledoll2[_0x106ae2(0x997)](_0x106ae2(0x2f5), _0x15c9d2['kNgNZ']), titledoll2[_0x106ae2(0x997)](_0x15c9d2[_0x106ae2(0x1f9)], _0x15c9d2[_0x106ae2(0x1f9)]), titledoll2[_0x106ae2(0x997)](_0x15c9d2[_0x106ae2(0x5bf)], _0x106ae2(0x17f)), titledoll2[_0x106ae2(0x997)](_0x15c9d2[_0x106ae2(0x818)], _0x15c9d2['VxFKQ']), titledoll2['setAttachment']('R\x20Hand-02', _0x15c9d2[_0x106ae2(0x290)]), titledoll2[_0x106ae2(0x997)]('Leg', _0x15c9d2[_0x106ae2(0x8bf)]), titledoll2[_0x106ae2(0x3ca)](_0x15c9d2[_0x106ae2(0x30d)], !![]), titledollgrp2 = this[_0x106ae2(0x85a)]['container'](), titledollgrp2['add'](titledoll2), titledollgrp2['x'] = -0x3e8, t2 = game['scene']['scenes'][pageNo][_0x106ae2(0x48f)]['addEvent']({
                'delay': 0x5dc,
                'callback': _0x4b9727,
                'callbackScope': this
            });

            function _0x4b9727() {
                var _0x57f6fe = _0x106ae2;
                titledoll2[_0x57f6fe(0x997)](_0x15c9d2['sxZtx'], _0x15c9d2['zxtej']), t2 = game[_0x57f6fe(0x374)][_0x57f6fe(0x237)][pageNo][_0x57f6fe(0x48f)][_0x57f6fe(0x85d)]({
                    'delay': 0xc8,
                    'callback': _0x3727de,
                    'callbackScope': this
                });
            }

            function _0x3727de() {
                var _0x1fbcf3 = _0x106ae2;
                titledoll2[_0x1fbcf3(0x997)](_0x1fbcf3(0x622), _0x1fbcf3(0x880)), t2 = game[_0x1fbcf3(0x374)][_0x1fbcf3(0x237)][pageNo]['time'][_0x1fbcf3(0x85d)]({
                    'delay': 0xbb8,
                    'callback': _0x4b9727,
                    'callbackScope': this
                });
            }
            titledoll3 = this[_0x106ae2(0x85a)][_0x106ae2(0x1dd)](0x1a4, 0x104, _0x15c9d2[_0x106ae2(0xa3b)]), titledoll3['setAttachment'](_0x15c9d2['Nfuay'], _0x15c9d2[_0x106ae2(0x6a8)]), titledoll3[_0x106ae2(0x997)](_0x15c9d2['zGkEN'], _0x15c9d2[_0x106ae2(0x9d1)]), titledoll3[_0x106ae2(0x997)](_0x15c9d2[_0x106ae2(0x656)], _0x15c9d2[_0x106ae2(0x914)]), titledoll3[_0x106ae2(0x997)](_0x15c9d2[_0x106ae2(0x725)], _0x15c9d2[_0x106ae2(0x538)]), titledoll3[_0x106ae2(0x997)](_0x15c9d2[_0x106ae2(0x403)], _0x15c9d2[_0x106ae2(0x8a8)]), titledoll3['setAttachment'](_0x15c9d2[_0x106ae2(0x304)], _0x15c9d2['RozVY']), titledoll3['setAttachment'](_0x15c9d2[_0x106ae2(0x67e)], _0x15c9d2['KOpDd']), titledoll3[_0x106ae2(0x997)]('Blush', _0x15c9d2[_0x106ae2(0x5a4)]), titledoll3[_0x106ae2(0x997)](_0x15c9d2[_0x106ae2(0x9e8)], _0x15c9d2[_0x106ae2(0x609)]), titledoll3[_0x106ae2(0x997)](_0x106ae2(0x366), _0x15c9d2[_0x106ae2(0x87d)]), titledoll3['setAttachment'](_0x15c9d2[_0x106ae2(0x6c5)], _0x106ae2(0x33e)), titledoll3['setAttachment'](_0x106ae2(0x198), _0x106ae2(0x1eb)), titledoll3[_0x106ae2(0x997)](_0x15c9d2[_0x106ae2(0x355)], _0x106ae2(0x7c9)), titledoll3[_0x106ae2(0x997)](_0x15c9d2['GQbrG'], _0x106ae2(0x546)), titledoll3[_0x106ae2(0x997)](_0x15c9d2[_0x106ae2(0x712)], _0x15c9d2['aJRXk']), titledoll3[_0x106ae2(0x997)](_0x106ae2(0x5d9), _0x15c9d2[_0x106ae2(0x59e)]), titledoll3[_0x106ae2(0x997)]('R\x20Hand\x20Dress', _0x106ae2(0x9f1)), titledoll3[_0x106ae2(0x997)]('Shoe', _0x106ae2(0x3da)), titledoll3[_0x106ae2(0x997)](_0x15c9d2[_0x106ae2(0x604)], _0x15c9d2[_0x106ae2(0x604)]), titledoll3[_0x106ae2(0x997)](_0x15c9d2[_0x106ae2(0x3f2)], _0x15c9d2['IUSse']), titledoll3[_0x106ae2(0x997)](_0x106ae2(0x622), _0x15c9d2['vlPrZ']), titledoll3[_0x106ae2(0x997)](_0x15c9d2[_0x106ae2(0xa7e)], _0x15c9d2[_0x106ae2(0x1c3)]), titledoll3[_0x106ae2(0x997)](_0x106ae2(0x48e), _0x15c9d2['LaARI']), titledoll3[_0x106ae2(0x997)](_0x15c9d2[_0x106ae2(0xa6a)], _0x106ae2(0x287)), titledoll3[_0x106ae2(0x997)](_0x15c9d2[_0x106ae2(0x7af)], _0x15c9d2[_0x106ae2(0x7af)]), titledoll3['setAttachment'](_0x15c9d2[_0x106ae2(0x6d7)], _0x15c9d2[_0x106ae2(0x46d)]), titledoll3[_0x106ae2(0x997)]('L\x20Hand-01', _0x15c9d2['kNgNZ']), titledoll3[_0x106ae2(0x997)](_0x15c9d2['MYdeB'], _0x15c9d2['MYdeB']), titledoll3[_0x106ae2(0x997)](_0x15c9d2[_0x106ae2(0x5bf)], _0x106ae2(0x17f)), titledoll3['setAttachment'](_0x15c9d2[_0x106ae2(0x818)], _0x15c9d2[_0x106ae2(0x818)]), titledoll3[_0x106ae2(0x997)](_0x15c9d2['zBujX'], _0x15c9d2['zBujX']), titledoll3['setAttachment']('Leg', _0x15c9d2[_0x106ae2(0x8bf)]), titledoll3[_0x106ae2(0x3ca)](_0x15c9d2[_0x106ae2(0x30d)], !![]), titledollgrp3 = this[_0x106ae2(0x85a)][_0x106ae2(0x501)](), titledollgrp3[_0x106ae2(0x85a)](titledoll3), titledollgrp3['x'] = -0x3e8, t3 = game[_0x106ae2(0x374)]['scenes'][pageNo][_0x106ae2(0x48f)][_0x106ae2(0x85d)]({
                'delay': 0x7d0,
                'callback': _0x2db6ce,
                'callbackScope': this
            });

            function _0x2db6ce() {
                var _0x46b051 = _0x106ae2;
                titledoll3[_0x46b051(0x997)](_0x46b051(0x622), _0x15c9d2[_0x46b051(0x215)]), t3 = game[_0x46b051(0x374)][_0x46b051(0x237)][pageNo][_0x46b051(0x48f)][_0x46b051(0x85d)]({
                    'delay': 0xc8,
                    'callback': _0x3aa0f2,
                    'callbackScope': this
                });
            }

            function _0x3aa0f2() {
                var _0x3b170b = _0x106ae2;
                titledoll3['setAttachment'](_0x15c9d2[_0x3b170b(0x2c1)], _0x15c9d2[_0x3b170b(0x241)]), t3 = game[_0x3b170b(0x374)]['scenes'][pageNo][_0x3b170b(0x48f)][_0x3b170b(0x85d)]({
                    'delay': 0xbb8,
                    'callback': _0x2db6ce,
                    'callbackScope': this
                });
            }
            titledollgrp1[_0x106ae2(0x67d)](1.4), titledollgrp2[_0x106ae2(0x67d)](1.4), titledollgrp3[_0x106ae2(0x67d)](1.4), t1 = game[_0x106ae2(0x374)][_0x106ae2(0x237)][pageNo]['time']['addEvent']({
                'delay': 0x1f4,
                'callback': _0x48381b,
                'callbackScope': this
            });

            function _0x48381b() {
                var _0x32ebb2 = _0x106ae2;
                game[_0x32ebb2(0x374)][_0x32ebb2(0x237)][pageNo][_0x32ebb2(0x465)][_0x32ebb2(0x85a)]({
                    'targets': titledollgrp1,
                    'x': -0x122,
                    'ease': _0x32ebb2(0x4e5),
                    'duration': 0x258,
                    'onComplete': _0x1a1c73,
                    'callbackScope': this
                });
            }

            function _0x1a1c73() {
                var _0x10e87d = _0x106ae2;
                titledollgrp1['x'] = -0x122, game[_0x10e87d(0x374)][_0x10e87d(0x237)][pageNo]['tweens']['add']({
                    'targets': titledollgrp1,
                    'x': -0x4b0,
                    'ease': _0x15c9d2[_0x10e87d(0x1a6)],
                    'duration': 0x258,
                    'delay': 0x7d0,
                    'onComplete': _0x3696e5,
                    'callbackScope': this
                });
            }

            function _0x3696e5() {
                var _0x48c52c = _0x106ae2;
                game[_0x48c52c(0x374)][_0x48c52c(0x237)][pageNo][_0x48c52c(0x465)]['add']({
                    'targets': titledollgrp2,
                    'x': -0x122,
                    'ease': _0x15c9d2[_0x48c52c(0x601)],
                    'duration': 0x258,
                    'onComplete': _0x169ef8,
                    'callbackScope': this
                });
            }

            function _0x169ef8() {
                var _0x2af628 = _0x106ae2;
                titledollgrp2['x'] = -0x122, game['scene'][_0x2af628(0x237)][pageNo][_0x2af628(0x465)][_0x2af628(0x85a)]({
                    'targets': titledollgrp2,
                    'x': -0x4b0,
                    'ease': _0x15c9d2[_0x2af628(0x1a6)],
                    'duration': 0x258,
                    'delay': 0x7d0,
                    'onComplete': _0x3f9a53,
                    'callbackScope': this
                });
            }

            function _0x3f9a53() {
                var _0xdba6f2 = _0x106ae2;
                game[_0xdba6f2(0x374)]['scenes'][pageNo][_0xdba6f2(0x465)][_0xdba6f2(0x85a)]({
                    'targets': titledollgrp3,
                    'x': -0x122,
                    'ease': _0x15c9d2[_0xdba6f2(0x601)],
                    'duration': 0x258,
                    'onComplete': _0x102155,
                    'callbackScope': this
                });
            }

            function _0x102155() {
                var _0x2fc741 = _0x106ae2;
                titledollgrp3['x'] = -0x122, game[_0x2fc741(0x374)]['scenes'][pageNo][_0x2fc741(0x465)][_0x2fc741(0x85a)]({
                    'targets': titledollgrp3,
                    'x': -0x4b0,
                    'ease': _0x15c9d2['gCMbN'],
                    'duration': 0x258,
                    'delay': 0x7d0,
                    'onComplete': _0x48381b,
                    'callbackScope': this
                });
            }
            title = game[_0x106ae2(0x374)]['scenes'][pageNo]['add'][_0x106ae2(0x1dd)](0x23a, 0x1e, _0x15c9d2[_0x106ae2(0x575)], 'in', ![]), title['state'][_0x106ae2(0x920)]({
                'event': function(_0x2bc4c2, _0x1f0a70) {
                    var _0x331e8b = _0x106ae2;
                    _0x15c9d2[_0x331e8b(0x664)](_0x1f0a70[_0x331e8b(0x67c)], 'in') && (title[_0x331e8b(0x5ac)]('in', _0x331e8b(0x54e), 0x2), title['play'](_0x15c9d2[_0x331e8b(0x89f)], !![], !![]), game['scene'][_0x331e8b(0x237)][pageNo]['tweens'][_0x331e8b(0x85a)]({
                        'targets': play,
                        'scale': 0x1,
                        'ease': _0x331e8b(0x5fb),
                        'duration': 0x320
                    }), play[_0x331e8b(0xa6e)] = !![], play[_0x331e8b(0x67d)](0x0), game[_0x331e8b(0x374)][_0x331e8b(0x237)][pageNo]['tweens'][_0x331e8b(0x85a)]({
                        'targets': play,
                        'scaleX': 0x1,
                        'scaleY': 0x1,
                        'ease': _0x15c9d2[_0x331e8b(0x8da)],
                        'duration': 0x2bc
                    }));
                }
            }), titlegrp = this[_0x106ae2(0x85a)]['container'](), titlegrp[_0x106ae2(0x85a)](title), titlegrp['setScale'](0.9), play = this['add'][_0x106ae2(0x323)](0x35c, 0x1e0, _0x15c9d2[_0x106ae2(0x456)])[_0x106ae2(0x541)](0.5, 0.5)['setInteractive']({
                'pixelPerfect': !![],
                'useHandCursor': !![]
            }), game[_0x106ae2(0x374)][_0x106ae2(0x237)][pageNo][_0x106ae2(0x465)][_0x106ae2(0x85a)]({
                'targets': play,
                'scale': 1.1,
                'ease': _0x15c9d2['TZNln'],
                'duration': 0x12c,
                'repeat': -0x1,
                'yoyo': !![]
            }), play[_0x106ae2(0xa6e)] = ![], this[_0x106ae2(0x742)]['on'](_0x15c9d2['UycDn'], function() {
                loadFinish = !![];
            }), titlegrp[_0x106ae2(0x85a)](play), _0x15c9d2['FtQrW'](logomutefun), this['load'][_0x106ae2(0x26f)]();
            if (firstTime) {
                var _0x12042e = _0x15c9d2['sffmz'][_0x106ae2(0xa4e)]('|'),
                    _0x5b6cc5 = 0x0;
                while (!![]) {
                    switch (_0x12042e[_0x5b6cc5++]) {
                        case '0':
                            music = this[_0x106ae2(0xabd)][_0x106ae2(0x85a)](_0x15c9d2[_0x106ae2(0x870)]);
                            continue;
                        case '1':
                            firstTime = ![];
                            continue;
                        case '2':
                            _0x15c9d2['cNKRm'](pageNo, 0x4) ? music['volume'] = 0.5 : music[_0x106ae2(0xa16)] = 0x1;
                            continue;
                        case '3':
                            titlescreenstart();
                            continue;
                        case '4':
                            music['play']({
                                'loop': !![]
                            });
                            continue;
                    }
                    break;
                }
            } else _0x15c9d2['FtQrW'](transitionOut);
        },
        'update': function() {}
    });

function _0x27c4() {
    var _0x581992 = ['NcKXK', 'download', 'odtsf', 'FvGOB', 'Linear', 'complete', 'SbBFt', 'YPEUd', 'gSIXm', '//playcutegames.com/', '://', 'rkUCH', 'cdvLb', 'itkEb', 'odAdK', 'WtZvq', 'YYSun', 'YHxHt', 'BwIAV', 'stargilter', 'LYLHY', 'pimpleremover', 'yMCCV', 'RmgjN', '109', 'ayjOR', 'pTHXh', 'Between', 'BMsbW', 'szZUl', 'wLZqo', 'SfOvL', 'xItqN', 'byYVY', 'Necklaces', 'addListener', 'rcUfv', 'nEvZB', 'dresshit', 'rwbzB', 'pHjaX', 'GiCQv', 'HAtHf', 'vqUXO', 'CSZkz', 'poltC', 'tZXOQ', 'assets/level1/doll/pimple1.png', 'MNwTF', 'doll2lip', 'mQmNG', 'zXsnd', 'dkQEk', 'hairarr', 'Dress-02', 'vHKmB', 'LRWDS', 'eoKsh', 'MiGjU', 'referrer', 'kqubO', 'wWaSe', 'tDokW', 'EbzXH', 'vdRLE', 'OqCsE', 'MqIIM', 'LYMmt', 'zEKpL', 'src', 'dataset', '29|14|27|0|13|5|37|6|28|36|3|2|32|35|24|25|33|31|19|11|16|34|12|8|21|4|7|20|23|22|15|30|9|26|1|10|18|17', 'efPOK', 'assets/level2/doll/dress.png', 'EHGnJ', 'eyeballarr', 'level3acc', 'assets/level1/doll/lip.png', 'RywEK', 'wxSNQ', 'SSFbp', 'assets/level2/piercings', 'Jbomf', 'vgtzZ', 'AbNPW', 'PCiZu', 'puTJU', 'GSXWH', 'PGYKB', 'IYthx', 'eIZkQ', 'pSsQB', 'Qpqwk', 'assets/audio/spraybottles.mp3', 'location', 'dDPnq', 'liaPT', 'NTPmI', 'hihHi', 'rsHmD', 'EuOYw', 'gSyTA', 'angle', 'removeInteractive', 'lknOM', 'qlQhz', 'OFoNj', '0|8|2|1|3|5|7|4|6', 'KrhNm', 'LIkgF', 'bsxcx', 'jScjL', '0|8|3|5|6|1|7|4|2', 'IMGyM', 'assets/level2/doll/bhair.png', 'QPTKH', 'remove', 'fTPAt', 'nLIdU', 'tJuWR', 'DzawC', 'Back\x20Hair-0', 'kjNWc', 'UwwsD', 'CxoiE', 'zRxqi', 'oyJXm', 'lpJwD', 'none', 'woMwJ', 'Qnynk', 'GGfRY', 'FguCW', 'TgMkq', 'IubIp', 'scrubbinghit', 'YhrGl', 'yDESb', 'vYWLO', 'JSxsC', 'Nfuay', 'ywshS', 'guLlX', 'FIT', 'IwWxd', 'iMloV', 'luUZm', '126', 'wInCU', 'dIQcg', '3|0|1|2|4|6|7|5|8', 'gWoxN', 'hAFWj', 'IYeAw', 'setAttachment', 'accarr', '8|2|1|0|7|4|6|3|5', 'QnXtU', 'zktZf', 'drkoP', 'oEfpn', 'zssja', 'ppFUv', 'sSVCW', '119', 'Leg', 'DRztl', 'assets/audio/setclick.mp3', '6|3|5|2|0|4|1', 'Vqnwq', 'LrQgt', 'sECpg', 'eshaperhit', 'ceLKa', 'assets/level1/doll/eyeopen.png', 'WRMJj', 'uVwdL', 'RgSvE', 'assets/level1/doll/darkcircle.png', 'svdRV', 'UJJwy', 'nRBYw', 'quTdX', 'RpSpb', 'setclick', '0|4|7|6|5|3|2|1', 'HGBYm', 'assets/audio/spraysound.mp3', 'liparr', 'baYXB', 'uOqPI', 'NFRep', 'THord', 'pULFz', 'urakO', 'spraysound', 'JfciP', 'hOZpY', 'RPOfZ', 'RoTzF', 'scrubbinghand', 'JjUly', 'lKiRG', 'NiOch', 'eiBKM', 'GlTcQ', 'dZqDE', 'Ebynn', 'rtLCO', 'RUYcw', 'dWREh', 'HPPqD', 'FhovM', 'APAjY', 'ddOzd', 'assets/level2/doll/bottom.png', 'cBviD', 'ilSMo', 'TxOwD', 'LUYlu', 'DKDqP', 'onjpE', 'KTjUO', 'pyOuc', 'RozVY', 'chainarr', 'aPuDU', 'ZAQJQ', 'assets/level2/doll/hair.png', 'spraybottl', 'rRSFg', 'rMIKl', 'cOuzm', 'Back\x20Acc-04', 'L\x20Hand\x20Dress-00', 'AnORn', 'assets/level2/doll/eyeshadeopen.png', 'uzjAX', 'yNUhH', 'mrhLJ', 'icBRD', 'dofuF', 'creamhan', 'eQoQN', 'R\x20Hand\x20Dress-08', 'idle-02', 'save2', 'studarr', 'MycBp', 'catch', 'cwgog', 'WLeLT', 'off', 'SBEBu', 'GncBy', 'otTjc', 'gxErz', 'TKMpl', 'oMQrs', 'zFVAW', '2|1|0|9|8|5|4|7|6|3', 'KEOCc', '1|0|4|2|3', 'Fhjzm', 'sUwxm', 'wcmbo', 'rGQKu', 'Eye\x20Ball-01', 'PgkSu', 'dressimg', 'bNdWd', 'BKiqJ', 'FLhLi', 'FhTLp', 'gXyYt', 'assets/audio/click.mp3', 'kBZry', 'CwbCh', 'hqEpH', 'doll2head', 'RyPKz', 'volume', 'IrbYQ', 'jWJhc', 'ptHEX', 'Naxxi', 'wlRwf', 'IulSz', 'cpeiN', 'xXNyV', 'LBYuN', 'Logo_animation', 'assets/level2/cat4.png', 'pFbUW', 'RsixB', 'join', 'MmaMq', 'assets/level1/doll/pimple3.png', 'JTUVV', 'VoXpu', 'hQeID', 'wbGcd', 'BzCsy', 'doll2eyeshadeopen', 'assets/levelselect/level1.png', 'JazuC', 'uLmNj', 'Dcttf', 'EdxMg', '8|2|7|6|1|5|9|4|0|3', 'BQsxL', 'Piercing-00', 'nFTce', 'cucumberimg2', 'anJXG', 'assets/titlescreen/blackscreen.png', 'kizBg', '2|1|4|3|0', 'foXNW', 'vwXgv', 'loadermask', 'znTMj', 'MgyII', 'OKmpW', 'HjbBc', 'failed', 'eshaper', 'fillRect', 'lyVyv', 'UKxRb', 'elyAd', 'Back\x20Acc', 'now', 'SLDCt', 'KowbP', 'preloadAd', 'bubble', 'split', 'level2blush', 'assets/level1/dressgliter.png', '1|2|4|0|3', 'JLeNx', 'slIAH', 'LvddK', 'assets/loader/loaderpad.png', 'input', 'assets/levelselect/background.jpg', 'Hair-04', '4|2|3|5|1|0', 'logohit', 'tiYLn', 'NnlXJ', 'sOCcc', 'JYnvV', 'doll2body', 'levelstart', 'BGNbc', 'ZSIZA', 'KdKTb', 'eRonQ', 'IWCbK', '//www.youtube.com/channel/UCgAJF2VXCcF7EBgixvVRXMQ', '5|9|6|7|2|1|3|8|0|4', 'XQxqH', 'IpzKk', 'luQAX', 'qJlbE', '127', 'mmJDM', 'visible', 'TcszT', 'dressshadow', 'uzAxw', 'QmeGD', 'lBSNB', 'setInteractive', 'Ubjrc', 'assets/loader/logohit.png', 'TghKA', 'ufbrC', 'JGxBM', 'chhzB', 'RAhMi', 'Back', 'zaPIf', 'biJVl', '3|8|2|10|0|4|5|6|7|1|9', 'width', '135', 'vvyPp', 'ncsHb', 'BKCEQ', 'level1background', 'VuRIZ', 'odoUH', 'modWs', 'XQUar', 'HKUFy', 'MtnSX', 'xTXsd', 'skcrb', 'zEnde', 'ITAEx', 'yolvc', 'ERoHi', 'BCIWN', 'uXheN', 'assets/level1/eshapeani.png', 'cUoPL', 'doll2rhand', 'ImTwE', 'Eyeshadow\x20Close-0', '5|2|0|1|3|4', 'SpinePlugin', 'ZTZDG', 'FRxPP', '4|10|7|8|3|1|6|2|9|5|0', 'TyYjy', 'vaUre', 'Lipstick-03', 'NRqXh', 'wJuGK', 'gGyiL', 'AAWME', 'mjpeh', 'stop', 'LHzAl', '3|0|2|1|4', 'assets/audio/bmusic.mp3', 'EOvnm', 'assets/level1/cucumber1.png', 'assets/audio/capsound.mp3', 'assets/level3/stud', 'lMqzi', 'assets/loader/loaderprogress.png', 'ssCrA', 'GAPXj', 'assets/level2/doll/stone.png', 'CgoUa', 'NhzkH', 'qIRmW', 'eedRi', 'korRr', 'nZnGN', 'nGKdY', 'XtvFa', 'KpySV', 'Scene', 'sound', 'uztWA', 'Ehzrv', 'puBNp', 'length', 'dressarr', 'cTpgB', 'tlzgB', 'assets/levelselect/level2.png', 'StRXe', 'bNasu', 'Piercing-01', 'EwQEf', 'ZUUop', 'uATBT', 'oPhfI', 'DOTiK', 'LNnns', 'Back\x20Hair-00', 'ewfPX', 'RPMIo', 'KKNau', 'LnvjG', 'LiiLm', 'assets/level1/doll/eyeball.png', 'lXXry', 'pSScC', 'Earrings-02', 'config', 'FpIJE', 'doll1eyeball', 'parse', 'KUgRT', '88542JVeoDC', 'generateFrameNumbers', 'NNrrs', 'ubxJc', 'foundation2', 'assets/level1/eshaper.png', 'oVqtX', 'doll1rebrow', 'facemaskim', 'dtOAb', 'KPdCn', 'fmosR', 'IuCpg', 'L\x20Hand-03', 'gcOep', 'rUmlS', '2|4|1|5|0|3', 'assets/audio/objectsound.mp3', 'kDeTN', 'MReOM', 'SwUpp', 'TrsGN', 'Earrings-04', 'vtqiH', 'HYGlz', 'loaderbarbg', 'assets/level1/towelhit.png', 'dGeja', 'QraWk', 'Eyeshadow\x20Open-01', 'doll1bhair', 'SWEAQ', 'tSxrq', 'LZiBb', 'OhGMA', 'UfpZI', 'bCnOc', 'handindication', 'Piercing-04', 'FMNEw', 'Dress-0', 'JeysJ', '4602uTmCjR', 'QVHzY', 'FbVPR', 'IiQzW', 'DkHUA', 'ptsqH', 'state', 'mgcLN', 'ekobI', 'fRvBe', 'gCMbN', 'hrsoc', 'GcTNf', 'doll1darkcircle', 'JSTbP', '3|2|0|1|4', 'dmdAq', 'Piercing-02-0', 'IwyQD', 'zJUyB', 'mxSpk', '4|1|3|0|2', 'lDCFi', 'ClWNV', 'vqQJZ', 'TmrbF', 'jliqO', 'assets/setting/background.png', 'GRZYO', 'assets/level3/cat2.png', 'bSeHj', 'assets/level2/ecat2.png', 'joXCn', 'ADyXw', 'fEBSU', 'ovWyb', 'assets/audio/spongesound.mp3', 'BieRC', 'xxAeQ', 'mwfRK', 'jBGMj', 'RVKhC', 'EnHLH', 'iTgKG', 'AxDVR', 'initialloader', 'eDMSZ', 'GLpwA', 'wvwZN', 'feUVz', 'facemask', 'XbtjD', 'leWqe', 'bloay', 'jPsut', 'oongb', 'XqUwV', 'level', 'CgQin', 'IiBck', 'assets/level1/clock.png', 'xGwVt', 'pqmMX', 'clocksound', 'IIMiV', 'spine', 'Shoe-04', 'goYIk', 'dSCHd', 'iUUlt', 'Core', 'lLykP', 'kMUJK', 'done2', 'rtVCm', 'rlgAA', 'LQIEp', 'eREkA', 'dnlxv', 'Piercing-04-00', '4|8|6|2|7|3|1|0|5', 'zUHNB', 'eCVlA', 'GabIZ', 'bfiQd', 'kCqDK', '900248cAsYFg', 'dGQWf', 'IpLRl', 'Blush-0', 'mJzwC', 'iZXmD', 'iuDBT', 'MYdeB', 'zHIdU', '14|12|24|23|21|17|5|13|7|18|3|16|22|20|25|6|8|0|19|1|2|15|9|4|10|11', 'assets/level2/doll/head.png', 'DLmSP', 'JiMOw', 'pGLno', 'xUihw', 'foundation3', 'ZMHHG', 'NWvfH', 'DepZF', 'VQesN', 'tNsmP', 'FrCXw', '1|0|3|2|4', 'diwXm', 'iYkMz', 'xatqf', 'kpilG', 'lCzxv', 'PgOyN', 'DKNii', 'osPoK', 'kGouV', 'YsSWR', 'axulx', 'vIipT', 'NchzV', '2|4|1|0|3', 'klrdV', 'assets/level3/acc', 'LefXa', 'tNuDY', 'Events', 'snapshot', 'NTdUc', 'DsMrX', 'level3hair', 'assets/level3/hair', 'loaderpad', 'IwBSk', 'gqZaT', 'XJolT', 'hfxtR', 'wMZLe', 'hkNzp', 'KxZpl', 'amhfh', 'YSReh', 'level2stone', 'UnWYj', 'zGkEN', 'TFzqq', 'assets/loader/straightlogo.png', 'qgZYy', 'QpPau', 'VaMYl', 'wzSSi', 'cxVtk', '115', 'oeSbe', 'scenes', 'oyWFL', 'jVhQi', 'EmHxw', 'xrnPt', 'ICXWr', 'oesNg', 'KXUHq', 'assets/audio/spongesound.ogg', 'R\x20Hand\x20Dress-0', 'vlPrZ', 'showRewardAd', 'GZpQB', 'sprite', 'jUWxe', 'mxeJG', 'qaOFk', 'iSSev', 'doll2lhand', 'RhKGf', 'assets/titlescreen/background.jpg', 'hiVBl', 'siiVW', '1|3|0|4|2', 'TYIYT', 'WJlJP', 'Face', 'KzXqY', 'once', 'setFrame', 'KseyA', 'bZcUl', 'BxLRN', 'ZZuJP', 'assets/level1/darkcirclecream2.png', 'vcVYU', 'BWizh', 'JmnHp', 'uHTdA', 'EwqAV', 'mIvRe', 'eyeshadowarr', 'assets/level3/cat4.png', 'assets/level2/doll/blush.png', 'level2eyeshadow', 'afxqD', 'progress', 'gDcbF', 'Dnntf', 'miffY', 'lggCL', '111', 'WDmRr', 'PzFDb', 'udxnq', 'bHuTM', 'start', 'yGuBc', 'jBYKZ', 'tevdp', '0|6|4|5|7|1|2|9|8|3|10', 'NpjAp', 'FhFdz', 'level2lip', 'qrOxk', 'kmCRY', '//www.facebook.com/Cutedressupcom-104797954428421', 'cKIND', 'itemclick', 'oFSBs', 'vcZzG', 'QncnK', 'eDcyW', 'bSjKB', 'assets/level2/ecat3.png', 'SFAqK', 'TdFjh', 'qezSm', 'assets/level2/doll/lhand2.png', 'FHIzt', 'Eye\x20Top', '7|8|9|2|0|6|5|1|4|3', 'doll1pimple2', 'lopvE', 'assets/level2/doll/eyeshadeclose.png', 'assets/level2/doll/doll.png', 'trFXq', 'ReTwK', 'towe', 'zBujX', 'dBEhj', 'ujulF', 'bwebK', 'MJGfI', 'Myuqf', '5|3|8|1|6|10|13|7|12|0|2|9|4|11', 'PWVid', '12766XYOnMI', 'eEywP', 'MwHGY', 'pccnz', 'AeNxz', 'mhXxd', 'doll1dresscap', 'CUnIE', 'grTmp', 'zcSDi', 'VgrEh', '122', 'srFhj', 'amzqp', 'ScKPG', 'assets/level2/arrow.png', 'qHfUI', 'fkoGi', 'pqHiL', 'Fblzs', 'JWpnF', 'SGLeO', 'Shoe-02', 'darkcirclecream2', 'mKrHP', 'ArrCQ', 'BlendModes', 'wjiWl', '2|4|0|1|3', 'RhNzk', 'GmRYj', 'ZlhTF', 'assets/level2/selection.png', 'GQbrG', 'assets/level2/doll/eyeball.png', 'WOvdh', 'GwubF', 'SSuJR', 'ZTnlG', 'Head\x20Acc-00', 'ODkOi', 'sxZtx', 'xBDjc', 'hEIEh', 'AGtzk', 'ucwRZ', 'GlKZN', 'Mid\x20Acc-00', 'assets/level2/doll/lip.png', 'jpolX', 'Lcxyn', 'EkZIe', 'KeHCA', 'ITzrd', 'oaoQT', 'kKsGo', 'TokQY', 'mReWJ', 'Hair-01', 'ZZuke', 'mrhyR', 'yZIWj', 'RjIcW', 'level3cat3', 'ecXVi', 'jrmlG', 'qCqWf', 'DaIwZ', 'PzBif', 'LILXI', 'dDPhl', 'aOoOo', 'DYBCn', 'height', 'assets/levelselect/level3.png', 'rmWHT', 'TueRe', 'luXyH', 'Fuucm', 'level3chainvideo', 'iHWxk', 'capsound', 'ioEsO', '.png', 'PPSqs', 'OBZfX', 'qwENH', '114', 'doll1leyebrow', 'bsRcG', 'yGjQO', 'zHBwb', 'pSZds', 'L\x20Hand-01', 'sOrNS', 'assets/audio/dropsound.mp3', 'NTrzt', 'OIgAq', 'ucrNJ', 'doll2dress', 'NcvOQ', 'yZcaD', 'Pybeq', 'Dbmdx', 'jtSkp', 'assets/audio/unlock.ogg', 'FGThx', 'level2selection', 'foOGi', 'yDeIQ', 'kjzYU', 'bJeyy', 'DKAyV', 'VqFJL', 'pzWvi', 'FqdnV', 'assets/level1/scrubbinghit.png', 'rOkkM', 'GKoxm', 'mMBEF', 'doll1reyebrow', 'MijWk', 'BepDQ', 'assets/level2/doll/leg.png', 'nuIhp', 'Back\x20Hair-01', 'sairJ', 'XrWMW', 'NrEBl', '?utm_campaign=', 'CENTER_BOTH', 'WFEkI', 'gVURX', 'JQKnz', 'jZqmg', 'kHwNh', 'wTNoU', 'xbeom', 'IsuCS', 'image', 'darkcirclecream', 'zhMKd', 'WkvWZ', 'krGsB', 'tzcYz', 'ZarUj', 'ysuoR', 'xfeAU', 'BnETH', 'UEPFr', 'qVVGY', 'MHVQT', 'TiTsa', 'FBglP', 'WZLGR', 'IOBDw', 'uVtnl', 'dragstart', 'YAIne', 'assets/level1/spraycap.png', 'pointerout', 'VjvJS', 'wxJKi', 'lxbFi', 'level3', 'vcScb', 'Piercing-03-00', 'JvKuU', 'FcWlI', 'level2blushvideo', 'doll1pimple1', 'OiCpA', 'ePeFh', 'FqMlN', 'JOFnO', 'USmop', 'jjUkN', '7|2|11|17|0|4|16|3|13|10|18|1|12|15|9|14|5|6|8', 'Lskgc', 'YNtXa', 'ADD', 'assets/levelselect/handindication.png', 'RwZbT', 'GJirT', 'create', 'PCdLW', 'FGQLj', 'GFadf', 'ondQo', 'Gdjvd', 'LWmwy', 'aFsVA', 'iSTAv', 'PhENH', 'ADDaZ', 'jBnVg', 'oPiJp', 'YCUuc', 'Orbgq', 'doll2bottom', 'EkhqN', 'cYCYk', 'lOQjg', '100ECduPx', '4|2|1|0|3', 'ZjabX', 'Piercing-02', 'VjBNc', 'VAchq', 'QIiMa', 'lRNWH', 'SBAvj', 'qLdsM', 'WXbmz', '3|0|1|2|4', 'PAwIa', 'aFzoo', 'rQFip', 'aHPmb', 'ZGlgI', 'scene', 'cBOYc', '6|5|2|1|3|0|4', 'wsrWu', 'BHXNS', 'hUOLR', 'larrow', 'NBQOC', 'HYjAr', 'ihids', 'GocdJ', 'WjIra', 'VpVTE', 'objectsound', 'assets/level1/towel.png', 'KANWl', 'lYHzm', 'IulER', 'fOafI', 'Ejdfl', 'MBOcv', 'zrhQL', 'XRNzW', 'Piercing-03-0', 'MhodU', 'mCAha', 'uqWcF', 'assets/level1/doll/doll.png', 'OLuAM', 'Hair', 'LtjoR', 'assets/audio/dragclick.ogg', 'Dress-00', 'hJSKe', '116', 'CdXIy', 'R\x20Hand\x20Dress-00', 'iPDKX', 'jCeYZ', 'KmZgw', 'lBsZw', 'cOjzO', 'meGja', '2|1|4|0|3', 'fTfYe', 'xsQyg', 'AjmlZ', 'EMghy', 'jIrJd', 'Rlwat', 'LNLaS', 'QNtyE', 'pause', 'doll1pimple4', 'doll2blush', 'undefined', 'titlescreen', 'Mid\x20Acc-0', 'jkVMR', 'nqsFM', 'fCZUW', '8|2|7|1|3|5|0|6|4', 'XdVeH', 'JjOdz', 'OwLuL', 'TJfSj', 'pointerup', 'vgCmG', '6|3|1|5|0|2|7|8|4', 'LgxWD', 'MdvfY', 'FWfRM', 'endbackground', 'IYqrh', 'MEgfx', 'sVvQP', 'kMKvR', 'doll2eyeshadeclose', 'DGqNx', 'saAYV', '5|0|3|1|2|4', 'NpQYF', 'HNgzP', 'assets/audio/towelsound.ogg', 'BCZsf', 'ILVYS', 'play', 'assets/level2/cat1.png', 'ucmqD', 'bgXiK', 'jmxIF', 'RpWWs', 'fillStyle', 'body', 'AwPOm', 'OmXcx', 'loaderplay', 'assets/audio/unlock.mp3', 'TYoli', 'HIQxc', 'Necklaces-0', 'level2text', 'Shoe-08', 'xESDD', 'EzHMn', 'DoRFJ', 'lpbar', 'sxDgd', 'oGzrN', 'EcpWs', 'DtMRE', 'dCrcu', 'Ztowb', '3|5|0|4|1|6|2', 'assets/audio/spraysound.ogg', 'qqeXk', 'NvWHf', 'Xibaa', 'hMZCb', 'NCECk', 'UhZnc', 'NCLQj', 'doll1pimple3', 'name', 'AhBRT', 'doll1eyetop', 'IUSse', 'NOlYv', 'assets/level1/background.jpg', 'assets/level1/eshaperhit.png', 'lgMSU', 'KAbcO', 'KLcPj', 'bgloader', 'Mhlqq', 'open', 'assets/loader/play.png', 'assets/level1/pimpleremoverhit.png', 'sYQAl', 'MHchh', 'resume', '8|0|1|6|5|2|7|4|3', 'bjMdy', 'ioUNM', 'spraybottle', 'cameras', 'showAd', 'UxIeF', 'PZjoZ', 'QIlbR', 'wrYkn', 'nhjDi', 'zWqEi', 'mTGLx', 'FevRd', 'ffVtC', 'HApSm', 'ThwbJ', 'XOmmW', '26952fQVOoA', 'tfvNm', 'dsIIS', 'tBAwD', 'gXlhz', '3|4|1|2|0', 'WMxja', 'level2ecat', 'assets/level1/doll/eyetop.png', 'FItgO', 'AbioF', 'eJyDi', 'FMKKn', 'DcHfG', 'uNmRu', 'KeIcw', 'htTmy', 'pDjzM', 'EbXOD', 'ioWZZ', 'spongesound', 'jrXIt', 'rUSNI', '0|6|3|1|7|5|4|2', 'QNlNt', 'Ebexm', 'meDbT', 'aVSwz', 'tCKqN', '117', 'ntomj', 'TuMiE', 'assets/level1/doll/eyeclose.png', 'espnW', 'UBsKZ', 'jKXyE', 'doll1dress', 'QJbag', 'doll1face', 'GNwkI', 'CfYnV', 'HEfGq', 'settingbackground', 'taHJS', 'bXRLA', 'BcNRS', 'izbBg', 'ernwH', 'Cbgin', 'hhRRm', 'SAqWW', 'TScPf', 'assets/level2/eyecolor', 'assets/level1/doll/face.png', 'VzfSd', 'qfTLU', 'GljSz', 'kcNmY', 'TuCNi', 'dUwfK', 'ICKav', 'xcHPM', 'iJKCT', 'geYpk', 'OWAQm', 'Eyeshadow\x20Close-01', 'Piercing-0', 'LzMsT', 'JhMqp', 'gPEsH', 'vCLPm', 'MEEqI', 'oTMpH', 'cexAx', 'DxGrf', 'GvhZu', 'qpxkC', 'oOTMS', 'assets/level1/cucumberimg2.png', 'AnXGo', 'bmrbC', 'IBPca', 'tweens', '#FFF', 'kpkaR', 'out', 'vTjJk', 'href', 'audio', '0|1|4|2|7|8|6|5|3', 'DPwxb', 'VztGF', 'assets/loader/loadermask.png', 'Back\x20Acc-0', 'KReqM', 'Head\x20Acc-0', '1|15|9|4|0|3|20|6|5|17|7|13|12|19|14|2|10|16|11|18|8', '3|2|1|4|0', '128', 'toKnC', 'RVbYX', 'R\x20Hand-02', 'djUAn', 'TfNvF', 'KrvbD', 'pPrqN', 'XJZbi', 'pXZBd', 'Kxlcz', 'MpmGN', '6|2|0|1|4|7|5|3|8', 'Face\x20Acc-00', 'fTOrv', 'Axrex', 'Hjypj', 'cQBTZ', 'level3cat', 'Dress', 'sXheZ', 'vPeHi', 'keYMo', 'gNRPf', 'wkrAz', 'Eye\x20Brow', 'time', '1|8|4|0|5|7|6|3|2', 'Eye\x20Ball-0', 'blusharr', 'ReukC', 'trans.atlas', 'lWrUC', 'wrXJN', 'aZPBn', 'DbUsy', 'mVZUL', 'JeSru', 'AUTO', 'UnztI', 'LoWXD', 'VPWTL', 'fwpKB', 'ZutyJ', 'assets/level1/doll/lebrow.png', 'NKwZI', 'next2', 'iOMui', 'Rkfzk', 'level2background', 'lyiYS', 'level2cat4', 'Piercing', 'TJnTS', 'zgXPE', 'glitter', 'DKiKE', 'Hvqaj', 'mTRIz', 'assets/audio/click.ogg', 'BLUR', 'NhTnV', 'DrCHi', 'assets/level1/darkcirclecream1.png', 'sNqup', 'xNSMA', 'SWfIe', '4|2|0|3|1', 'nfFbW', 'level3dress', 'rkajU', 'JGYBQ', 'PMjwR', 'QpsIe', 'Hair-0', 'ofukG', 'oyZcy', 'JHqBn', 'GTjvq', 'ujTec', 'dgvYO', 'pimpleremove', 'CWIPv', 'rewarded', 'dlCoW', 'Rbjsy', 'IeSrU', 'duzNr', 'setText', 'mJyvU', 'IEGaI', '1|2|3|4|0', 'YKwzi', 'assets/audio/complete.ogg', 'DMbdv', 'jWFGk', 'sCoFW', 'assets/audio/objectsound.ogg', '2|3|0|1|5|4|7|8|6', 'fTnHy', 'replay2', 'ZoiMN', 'sJzeS', 'taeSL', 'IKOze', 'Fnpcu', 'kHPxC', 'qjkZe', 'assets/level1/facemaskhit.png', 'QwMjw', 'aviXh', 'PSvJa', 'Back.easeOut', 'ZhkBD', 'ufvSN', 'hdIdo', 'XZvnI', 'SkDim', 'PVMQJ', 'pyazv', 'rmZXo', 'CtNae', 'KzVtO', 'Hand\x20Acc-0', 'assets/level1/facewashimg.png', 'assets/level2/doll/lhand.png', '113', 'level3cat1', 'HqlRa', 'YNJXS', 'JKvSr', 'vgUwT', '121', '3|4|1|0|2', 'CKqJJ', 'XouGb', 'ioSOD', 'QmQlh', 'QlXSX', 'GrDIr', 'container', 'TVPdj', 'hgXuY', 'YWBdS', 'reSpC', 'qYAIz', 'qFRsl', 'vBDGu', 'OjiwZ', 'MBFNf', 'events', 'ThNRt', 'bvtbR', 'GBrwi', 'msTWX', 'assets/level2/doll/eyetop.png', 'level1', 'tdsqr', 'cucumberhit1', 'wxVVC', 'YBRNj', 'mbRTk', 'kHVrK', 'cyGkL', 'udGIa', 'clickss', 'nKHVy', 'boden', 'GKqAV', 'BRezM', 'dLWWB', 'aysfr', 'removeChild', 'JxBcG', 'bhybw', 'RunJC', 'Blqzg', 'NgsIa', 'KHigi', 'not\x20loaded', 'QhWEi', 'AvuJp', 'wqKbN', 'YdvXL', 'assets/level1/darkcirclecreamcap.png', 'fMIcB', 'hgedF', 'Head\x20Acc', 'assets/level2/doll/rhand.png', 'sprayhit', 'RNbfO', '4|3|1|0|2', 'wDUjS', 'level2stonevideo', 'wWDIO', 'KMQdG', 'Eyeshadow\x20Open-0', 'fQhGz', 'ZXHBp', 'xyODy', 'title', 'eLfQS', 'PnNSy', 'CxygB', 'setOrigin', 'pYHnG', 'OeOOe', '133', 'gAddr', 'Back\x20Hair-06', 'getElementById', 'dollgliter', 'jCmSO', 'PzffU', 'XrUYG', 'CzAHS', 'kVZly', 'loop', 'uazTi', 'setItem', 'qNbiP', '7|4|0|2|8|5|1|3|6', 'UYIcg', 'VapAB', 'assets/level1/cucumber2.png', 'assets/level1/foundation3.png', '0|3|1|2|4', 'rfbWh', 'wJfGP', '18px\x20Nunito', 'GWmTS', 'Face\x20Acc', 'fhjPF', 'alpha', 'level2', 'GQcNa', 'fTIiY', 'qxUNF', 'oAIDF', '6|5|4|3|0|2|7|8|1', 'BsXGI', 'YoGbq', 'cucumberimg', 'darkcirclecreamcap', 'level3background', 'fEJlo', 'RegKT', 'aGwyu', 'GvQEC', 'ZXzaa', 'downloadurl', 'rqDHA', 'cMXOq', 'playcutegames', 'tVAKc', 'assets/level1/cream', 'siGeT', 'RLceu', 'ibxPR', 'doll1lebrow', 'zCcqV', 'kvLpZ', 'dmUMm', 'MzZmg', 'XxLcv', 'dressim', '0|3|1|4|2', 'adxYF', 'sAcxA', 'LggiY', 'pCQeW', 'Djsfz', 'ltYxz', 'MVjHS', 'OyGvD', 'abvXf', 'xlTZQ', 'assets/level2/text.png', 'Shoe', 'TbXbt', 'CuAdA', 'pZOHp', 'eKWGO', 'qZtyx', 'fVBQR', '1|3|0|4|2|5', 'vfteL', 'OFLRA', 'VGJVl', 'GiYcJ', 'ATsop', 'ZxZIa', 'vttks', 'eTMjZ', 'HDqVf', 'spritesheet', '55miYBfq', 'DDIjG', 'roAmv', 'IWDAf', 'IavAa', 'Lipstick-0', 'PCnlu', 'tpvRg', '132', 'DOekp', 'arTWI', 'dlBOU', 'level2ecat2', 'PuABi', 'XYDIM', 'setMix', 'assets/audio/itemclick.ogg', 'XLIbz', 'failed\x20error', 'yLUgm', 'setPath', 'aZXqK', 'tabIO', 'VioBW', 'AryQu', 'YiHgR', 'BaEFV', 'DoXpJ', '110', 'LVKmb', '7|1|3|2|8|6|5|0|4', '1|2|5|4|0|3|6', 'ZWaCf', 'zKXJH', 'XwDbK', 'WhgMz', 'level3dressvideo', 'level3selection', 'RAQmj', 'ZwKYG', 'CAEGM', 'jvPwO', 'nSSvY', 'OUHfX', 'R\x20Hand\x20Dress', 'assets/level1/cucumberhit1.png', '0|4|1|2|3', 'xFyui', 'AZKaG', 'yKbaM', 'onAlq', 'XkKbZ', 'SDMIQ', 'hDspX', 'enhJk', 'gZCXD', 'brdRi', 'sbrhC', 'JUehE', 'KHFGY', 'L\x20Hand\x20Dress', 'SJoZu', 'MluEq', 'ePMUV', '226672cSYYHF', 'assets/level2/cat5.png', 'fIYKs', 'Back.In', 'gAHxe', 'OxFVO', 'wkHnZ', 'XuxQs', 'QdJGy', 'pewNp', 'ZwcbA', 'sUTsq', 'FkqrW', 'mprOq', 'VfMUc', 'qsdGC', 'assets/audio/bmusic.ogg', 'aCBFD', 'Shoe-0', 'levelselect', 'dzTVO', 'gURSC', 'eshape', 'MerjJ', 'trans', 'cQpPf', 'slice', 'mqyuP', 'SdSpG', '106', 'Back.Out', 'cpwsu', 'wednesday-addams-beauty-salon', 'wnHlZ', 'bkuCL', 'NkEyv', 'tYdKI', 'zdBTV', 'UykAg', 'DWPtB', 'assets/level1/sprayhit.png', 'gfDll', 'rgCLn', 'KZjiz', 'huEju', 'Back\x20Acc-00', 'fCpRw', 'VSpXZ', 'towelsound', 'PWGLL', 'oEZyT', 'Lipstick', 'logo1', 'mUjau', 'PBWCj', 'CboOl', 'L\x20Hand-02', 'hVYAl', 'assets/audio/eshapersound.ogg', 'foundation1', 'HxuOO', 'GzmFW', '7|8|3|6|2|1|5|0|9|4', 'assets/level1/facewashhit.png', 'FVXXa', 'pkBbR', 'btYYm', 'appendChild', 'ZxkcQ', 'Eye', 'level3studvideo', 'YfaIv', 'nKnFF', 'gqGss', 'rzAzV', 'sVssU', 'WVnLw', 'Shoe-00', 'wQnzr', 'LaneZ', 'HsAjv', 'KgEmg', 'yEXlh', 'wElEg', 'DtDzm', 'SVVqd', 'MFvmx', 'YveXS', 'ggzgW', 'YeRVF', 'pointerdown', 'reward', 'setVolume', 'log', 'EHarK', 'WQKlM', 'zRcjE', 'WMFdC', 'assets/level3/dress', 'mKIZc', 'Earrings-00', 'Isngk', 'BvcFU', 'MnBDq', 'FEYXB', '0|4|1|3|2', '646929NMGcQP', 'sCLbu', 'whYWk', 'assets/endscreen/background.jpg', 'KnUPW', 'qENlH', 'VRRod', 'doll2stone', 'assets/audio/capopensound.ogg', 'yPXFO', 'pimpleremoverhit', 'Blush', 'vOwkG', 'call', 'LarpP', 'NeEWD', 'facewashim', 'SrIqG', 'nyaio', 'mCBhd', 'PAcPK', 'ByqxF', 'GrLyr', 'ZUsrS', 'nBHlQ', 'AEBsH', 'VHVKi', 'facewashcream', 'hQIkw', 'cNKRm', 'RmBNb', 'run', 'soundmute', 'anRiy', 'kmtEB', 'LuEsI', 'sUqEQ', 'animation_loop', 'ytSxM', 'GClAt', 'hCCKW', 'assets/audio/clock.ogg', 'PTEOj', 'XBJvz', 'UUJcs', 'YEcVe', 'assets/level3/cat1.png', 'aOXVJ', 'R\x20Hand\x20Dress-04', 'ctuSi', 'sGTNM', 'BpXDV', 'hOveV', 'stringValue', 'setScale', 'iffYx', 'fbEdh', 'assets/level2/blush', 'tAoQR', 'assets/audio/setclick.ogg', 'rAiMc', 'mwGin', 'AZnRH', 'Himvt', 'dollin', '3|4|6|1|0|2|8|5|9|7', 'eXGnY', 'YxJsR', 'level2cat3', 'tOicI', 'xKnMY', '130', 'FrstW', 'assets/level1/doll/bhair.png', 'whhrZ', 'TFsuF', 'nJZaz', '0|4|9|8|2|1|6|7|5|3', 'level2ecat3', 'success', 'tzktq', 'doll2hair', 'tEgRi', 'OOOIv', 'Piercing-03', 'kzSid', 'qGqJg', 'R\x20Hand-01', 'StBET', 'iPSXy', 'Hand\x20Acc-00', 'Earrings-0', '56kvSMCU', 'Body\x20Top', 'hldue', 'assets/level1/doll/pimple4.png', 'sSoWp', 'wRDmY', 'CdInq', '4|1|2|3|0', 'DIFBc', 'bBulu', 'QeLqi', 'assets/level1/foundation2.png', 'cElYk', 'OBDRo', 'xDNhd', 'graphics', 'DSFtp', 'pMTiS', 'VlCUQ', 'GPVGP', 'eshapersound', 'rCVsM', 'level2eyeballvideo', 'setBlendMode', 'nSDjM', 'assets/loader', 'R\x20Hand\x20Dress-02', 'rmrpJ', 'LyoDX', 'setMask', 'xkMZl', 'JzgEw', 'QjBTY', 'gBvDm', 'fQMbP', 'VHuOm', 'SCHoV', 'gJcvb', 'mJuba', 'doll1eyewhite', 'jVXzx', 'NiaKU', 'doll1lip', 'NFDTY', 'ntLkQ', '5|2|4|8|6|1|3|0|7', 'lADaf', 'oSwre', 'eshapeani', 'qwPPI', 'dRsfU', 'PiZGV', 'lTEfP', 'assets/loader/loaderbarbg.png', 'ZeySf', 'assets/level2/ecat1.png', '107', 'ZIbDG', 'QAuQF', 'biIcW', 'SVyzp', 'XsgtH', '108', 'tOTiZ', 'awuRP', 'aEpru', 'level3cat5', 'hwUCQ', '101', 'agTMH', '1|3|4|2|0', 'towel', 'PUxGY', 'LpuBD', '0|5|2|1|3|4', 'KZsHg', 'dAuSP', 'ibKGj', 'NPTIs', 'EpzIK', 'koRuG', 'ffXNC', 'FVZfW', 'NFrZi', 'Head\x20Acc-07', 'assets/adlock/video.png', 'euOxC', 'sGxHc', 'eYISf', 'HnYzV', 'LxlDs', 'Eyeshadow\x20Open-04', 'FyFwg', 'MjNed', 'gsIKO', 'level2panel', 'assets/level1/bubble', 'SSBNd', 'PeQrO', 'zpbDD', 'KBBEL', '0|7|10|3|2|1|8|11|6|4|9|5', 'aGDuM', '112', 'game', 'main', 'hXCnt', 'hoDNT', 'ZLMJe', 'EsPXV', 'sin', 'RcNZs', 'endscreen', 'XeoWY', 'EPxkR', 'assets/level1/pimpleremover.png', 'XaxhL', 'Mgynt', 'JXwoi', 'boVqF', 'level2cat2', 'ueoRC', 'dsbrh', 'assets/level1/doll/hair.png', 'doll2lhand2', 'TqMxE', 'rQdTS', 'oSDJw', 'cEvoF', 'bgYaF', 'tATEW', 'JGMOT', 'PhZOG', 'facemaskimg', '4|5|2|6|1|0|8|7|3', 'cfjEd', '2|6|1|0|5|3|7|8|4', 'CtFYh', 'tFvlb', 'dressgliter', 'RHULj', 'level3accvideo', 'xSKFu', 'HYwfj', 'level2eyeshadowvideo', 'qejDG', 'setDepth', 'UjxjS', 'logo.json', 'okZwA', 'level3ecat', 'FXcit', 'YuGlO', 'aUDHr', 'texture', 'assets/buttons/next.png', 'EOzvB', 'LOAqz', 'hvOdu', 'load', 'odRyW', 'Piercing-03-05', 'doll2eyeball', 'xvDLu', 'jLvlY', 'dhKLs', 'AMvEn', 'FrUCa', 'doll1eyeopen', 'PwehG', 'YNwOx', 'Lcgis', 'FOCUS', 'doll1body', 'Mid\x20Acc', 'PgEnh', 'createElement', 'vjgfP', 'cucumber1', 'HjKnK', 'Dress-08', 'uVDOW', '8|5|2|0|1|6|3|4|7', 'JdbaM', 'hbheG', 'KOpDd', 'Back.easeIn', 'doll2bhair', 'setBackgroundColor', 'uAtbo', 'TzrYb', 'titlebackground', 'HeXqV', 'SdMkd', '3|6|7|2|4|8|5|0|1', 'cucumberhit2', 'rKZmb', 'KSmUm', 'KynDA', 'cucumberimg1', 'oVNRi', 'XDbKc', 'Hand\x20Acc', 'UwNgr', 'bhsrF', 'CZCWn', 'VACze', 'IFIZb', 'PXZsn', 'xyJDg', 'FCNdH', 'HRCKw', 'HEspL', 'assets/level3/cat3.png', 'XLgkN', 'qlfbF', 'LwOZr', 'Hair-00', 'HoIld', 'trans.json', '2|0|3|4|1', 'RlKin', 'pDgXx', 'ZOujq', 'facewashhit', 'dLMRJ', 'vSEwb', 'assets/level1/spraybottle.png', 'ZnNWW', 'L\x20Hand\x20Dress-08', '6|3|5|4|0|1|2', 'Lipstick-04', 'LFPPs', 'ZwwJn', 'DTObx', 'towelhit', 'ToYuD', 'qTcpP', 'camerasound', 'assets/level3/cat5.png', 'FAGIZ', 'assets/level2/panel.png', 'MiGYC', 'Body\x20Bottom', 'doll2leg', 'qYUTN', 'kNgNZ', 'stonearr', 'PFPTF', 'UQiXL', 'dhMAP', 'BfYDO', 'NekMa', 'uZjUu', 'ncBBE', 'JZQKt', 'ffdyO', 'TegxG', 'XHuHR', 'NTPRZ', 'icvis', 'setVisible', 'syfRw', 'zxtRY', 'kmTff', 'MpxrU', 'oQFbw', '2|1|4|6|10|15|16|7|17|0|9|13|14|11|3|12|8|5', 'tEbEO', 'Eye\x20Ball', 'facewashimg', 'nnjhL', 'rWAOd', 'YcIDO', 'dragclick', 'KqqQG', 'wnCob', 'KKZBq', 'clock', 'Scale', 'dBxUq', 'fttcn', 'spoPQ', 'sZMxu', 'IRcuf', 'RAGSp', 'UdFcW', 'DqKuL', 'Cavjc', 'assets/audio/complete.mp3', 'unlockss', 'cWFir', 'GGnBt', 'fPpIw', 'Earrings-07', 'LwbVj', 'ktkCI', 'Rzwow', 'marr', '2|6|1|10|8|11|7|5|9|4|12|3|0', 'DlCcn', 'eobwk', 'kZMaa', 'dCOuy', 'xxaDt', 'assets/level2/doll/eyebrow.png', 'ETSEf', 'UctzP', '2806540srhVia', 'capopensound', 'jqCdi', 'kCHAb', 'eTYpE', '0|6|5|2|4|1|3', '100', 'LZnyd', 'assets/level3/background.jpg', 'level3chain', 'click', 'lZdwB', '&utm_source=', 'bmwRu', 'theGame', 'IruhM', 'bXTcP', 'DHxxU', 'eJCEp', 'OOBAg', 'nXgep', 'rANAx', 'tSlIj', 'IaYhi', 'key', 'assets/level1/cucumberhit2.png', 'lMUuX', 'setPosition', 'ztFTS', '10|11|5|14|4|15|2|9|8|6|13|1|0|3|7|12', 'creamhand', 'YCebC', 'WIQGr', 'sfDBG', 'YGGYU', 'ywCbl', 'dnhue', 'TlGFt', 'assets/level3/chain', 'kfSuV', 'assets/level1/doll/dresshadow.png', 'OLPWv', 'ZePQS', 'Ugpls', 'Lipstick-01', 'szUdU', 'cmhTv', 'IusEf', 'IKefu', 'IKWlT', 'YQfxO', 'hEnEQ', 'olcHp', 'HxCcQ', 'xtIIG', 'eSFxh', 'SJdHJ', '124', '0|2|3|4|1', 'wkwOe', 'nuAeH', 'nWisx', 'renderer', 'CJyaJ', 'zZRJC', 'VxFKQ', 'GYkNK', 'lkuIA', 'uUTjh', 'level3cat2', 'mOndH', 'VKGHj', 'assets/audio/dollin.ogg', 'YEqaH', 'lWHxx', 'nLXbc', 'dlzhM', 'QjRFY', 'scale', 'RICRz', 'wVXxa', 'crossOrigin', 'XdmlB', 'HvoAu', 'Math', 'EJjfG', 'eJyjB', 'pnBXa', 'pointerover', 'BIkIN', 'Face\x20Acc-0', 'Ifuqi', 'level2ecat1', 'eFEUK', 'oLxPu', 'OvFPG', 'levelselectbackground', 'Eye\x20Ball-04', 'LLbON', 'fqKJQ', 'assets/audio/towelsound.mp3', 'hTXNe', 'dweUe', 'L\x20Hand\x20Dress-0', 'pRybl', 'SBfwK', 'Wloff', 'level2eyeball', 'xSUAg', 'SoMVv', 'IDfQl', 'rLQqj', 'cefzv', '1|0|2|3|4', 'SGeTn', 'assets/level1/doll/rebrow.png', 'JQugd', 'pCthD', 'eLpZK', 'level2cat1', 'oEbJl', 'Earrings', 'image/png', 'YPzNY', 'vlTND', 'zcXFP', 'pointermove', 'sILPA', '1|2|3|0|4', 'BsVne', 'ZSOzj', 'add', 'fsItT', 'transitionscreen', 'addEvent', 'Necklaces-00', 'AeQIX', 'heYxS', 'KfmfF', 'EWfrL', 'assets/level2/background.jpg', 'yMATx', 'mkNdB', 'assets/level1/dressimg.png', 'assets/audio/throwsound.mp3', 'hTzgO', 'KpnGX', 'eavXA', 'frame', 'lgNvR', 'level2cat', 'anims', '97YvJQrr', 'AqHTh', 'doll2eyebrow', 'facemaskhit', 'assets/audio/glitter.ogg', 'qJtSy', 'Drwrv', 'sXDdV', 'zgEaM', 'glQWY', 'ZbwQG', 'EPylK', 'GqwKc', 'QsEuE', 'UltQY', 'rWQJo', 'mvuAF', 'Eyeshadow\x20Open-03', '8|7|4|6|5|3|1|0|2', '3vTrlTx', 'DQPHD', 'Mrdqp', 'qshxd', 'CpuPT', 'lSNcp', 'UMdHm', 'zGkel', 'level3doll', 'uUlmR', 'doll2eyetop', 'IFiPa', 'sNCUo', 'disableInteractive', 'zHKCH', 'TIQpg', 'iMBLJ', 'DGuXm', 'vwHDf', 'SNVuf', 'RrRPH', 'sJhMU', 'bvkVz', '118', 'keWYA', '120', 'ulYXa', 'mMnZT', 'cucumber2', 'xaBVX', 'creamhandhit', 'NcURS', 'fCYsZ', '1|7|6|2|5|3|0|8|4|9', 'JoUlt', 'rrWmK', 'darr', 'PmFMj', 'lMYcF', 'DVRwJ', 'ZhaRg', 'jgMYG', 'level3stud', 'hRXBw', 'IxPec', 'Mlokv', 'Back\x20Hair', 'level2lipvideo', 'ombDy', 'fHKwL', 'vnefb', 'level2cat5', 'assets/buttons/save.png', 'assets/level1/doll/pimple2.png', 'doll1hair', 'rXqRo', 'Vstrc', 'lXuNu', 'zwBeg', 'rvDMt', 'WyhpY', 'tsCCm', 'brVlU', 'gtWEc', 'MyzMT', 'PsIpz', 'ZSGdh', 'throwsound', 'selection', 'VBIPQ', 'zseJj', 'Xwolk', '8|4|0|2|1|7|3|5|6', 'YUiUb', 'daska', 'NUVBB', 'DyrDV', '#fff', 'FAnnG', 'WpiKN', 'RQzOr', 'dTAiD', 'Tlhqo', 'level3hairvideo', 'oqtOE', 'QnwqE', 'pjPUx', 'PICFP', 'TZNln', 'video', 'substr', 'SMAsR', '123', 'loaded', 'ksiRT', 'kNMcq', 'vESyx', 'Necklaces-02', 'SbcwX', 'KVFRp', 'xgBaE', 'vezoQ', 'Mfzjn', '7|2|4|5|1|8|0|3|6', 'Yjooa', 'Class', 'crSaC', 'QgYHK', 'spraycap', 'CZVRl', 'Back\x20Hair-04', 'animationcomplete', 'qhUfE', 'tTYyu', 'Hair-06', 'CiVeS', 'sprayliquid', 'AkGDK', 'sxNvk', 'level3cat4', 'assets/level1/darkcirclecream.png', 'CXKJs', 'nbzhw'];
    _0x27c4 = function() {
        return _0x581992;
    };
    return _0x27c4();
}

function titlescreenstart() {
    var _0x2f6d3b = _0x192e21,
        _0x544431 = {
            'wbGcd': function(_0x5a594b, _0xa7dfd3) {
                return _0x5a594b && _0xa7dfd3;
            },
            'TueRe': function(_0x256fda, _0x47ae71) {
                return _0x256fda(_0x47ae71);
            },
            'CwbCh': _0x2f6d3b(0x9b5),
            'GXzKr': function(_0x4fbdbf) {
                return _0x4fbdbf();
            },
            'gGyiL': _0x2f6d3b(0x82f),
            'ZwwJn': _0x2f6d3b(0x338),
            'sCoFW': _0x2f6d3b(0x637)
        };
    play['on'](_0x544431[_0x2f6d3b(0xaa3)], _0x23b73d), play['on'](_0x544431[_0x2f6d3b(0x78c)], _0x11446e), play['on'](_0x544431[_0x2f6d3b(0x4d5)], _0x463594);

    function _0x23b73d() {
        var _0x1f6df5 = _0x2f6d3b;
        play[_0x1f6df5(0x67d)](1.05);
    }

    function _0x11446e() {
        var _0x4b025c = _0x2f6d3b;
        this[_0x4b025c(0x67d)](0x1);
    }

    function _0x463594() {
        var _0x4cbdbd = _0x2f6d3b;
        _0x544431[_0x4cbdbd(0xa2a)](!startgame2, loadFinish) && (startgame2 = !![], _0x544431[_0x4cbdbd(0x2e4)](playsoundeffects, _0x544431[_0x4cbdbd(0xa12)]), game[_0x4cbdbd(0x374)]['scenes'][pageNo][_0x4cbdbd(0x465)]['add']({
            'targets': play,
            'scale': 0.9,
            'ease': _0x4cbdbd(0x901),
            'duration': 0x64,
            'yoyo': !![],
            'onComplete': _0x1f93de,
            'callbackScope': this
        }));
    }

    function _0x1f93de() {
        t1['remove'](), t2['remove'](), t3['remove'](), _0x544431['GXzKr'](transitionIn);
    }
}

function transitionIn() {
    var _0x582897 = _0x192e21,
        _0x4d8c42 = {
            'mReWJ': function(_0x24a213, _0x302a21) {
                return _0x24a213 == _0x302a21;
            },
            'zpbDD': function(_0x245091, _0x1c7596) {
                return _0x245091 == _0x1c7596;
            },
            'nhTDW': 'titlescreen',
            'mIvRe': _0x582897(0x5f0),
            'mhXxd': 'level1',
            'wInCU': function(_0x1dd96c, _0x1dd237) {
                return _0x1dd96c == _0x1dd237;
            },
            'mprOq': function(_0x500925, _0x47b198) {
                return _0x500925 == _0x47b198;
            },
            'oqtOE': function(_0xb660c5, _0x1b59fa) {
                return _0xb660c5 == _0x1b59fa;
            },
            'GYkNK': function(_0x3e3715, _0xbb6cb8) {
                return _0x3e3715 == _0xbb6cb8;
            },
            'CtNae': function(_0x288785, _0xeca159) {
                return _0x288785 == _0xeca159;
            },
            'CAEGM': _0x582897(0x33c),
            'bdJjQ': 'endscreen',
            'DzawC': _0x582897(0x5f5)
        };
    trans = game[_0x582897(0x374)][_0x582897(0x237)][pageNo][_0x582897(0x85a)][_0x582897(0x1dd)](0x215, 0x12c, _0x4d8c42[_0x582897(0x975)], 'in', ![]), trans[_0x582897(0xa74)](), trans[_0x582897(0x1a2)][_0x582897(0x920)]({
        'event': function(_0x42ac10, _0x28ac24) {
            var _0x5d7468 = _0x582897;
            if (_0x4d8c42[_0x5d7468(0x2d1)](_0x28ac24[_0x5d7468(0x67c)], 'in')) {
                if (_0x4d8c42[_0x5d7468(0x706)](pageNo, 0x2)) game['scene'][_0x5d7468(0x237)][pageNo][_0x5d7468(0x374)][_0x5d7468(0xaa6)](_0x4d8c42['nhTDW']), game[_0x5d7468(0x374)][_0x5d7468(0x666)](_0x4d8c42[_0x5d7468(0x25f)]);
                else {
                    if (pageNo == 0x3 && lcount == 0x1) game['scene'][_0x5d7468(0x237)][pageNo]['scene']['stop'](_0x4d8c42[_0x5d7468(0x25f)]), game[_0x5d7468(0x374)][_0x5d7468(0x666)](_0x4d8c42[_0x5d7468(0x29d)]);
                    else {
                        if (_0x4d8c42['wInCU'](pageNo, 0x4)) game[_0x5d7468(0x374)][_0x5d7468(0x237)][pageNo][_0x5d7468(0x374)][_0x5d7468(0xaa6)](_0x5d7468(0x511)), game[_0x5d7468(0x374)][_0x5d7468(0x666)](_0x5d7468(0x5f0));
                        else {
                            if (_0x4d8c42[_0x5d7468(0x991)](pageNo, 0x3) && _0x4d8c42[_0x5d7468(0x5ea)](lcount, 0x2)) game['scene'][_0x5d7468(0x237)][pageNo]['scene']['stop'](_0x4d8c42[_0x5d7468(0x25f)]), game[_0x5d7468(0x374)][_0x5d7468(0x666)](_0x5d7468(0x55f));
                            else {
                                if (_0x4d8c42[_0x5d7468(0x8d6)](pageNo, 0x5)) game['scene']['scenes'][pageNo][_0x5d7468(0x374)]['stop'](_0x5d7468(0x55f)), game[_0x5d7468(0x374)][_0x5d7468(0x666)](_0x4d8c42[_0x5d7468(0x25f)]);
                                else {
                                    if (_0x4d8c42[_0x5d7468(0x819)](pageNo, 0x3) && _0x4d8c42[_0x5d7468(0x4ee)](lcount, 0x3)) game[_0x5d7468(0x374)][_0x5d7468(0x237)][pageNo][_0x5d7468(0x374)]['stop'](_0x4d8c42[_0x5d7468(0x25f)]), game[_0x5d7468(0x374)]['run'](_0x4d8c42[_0x5d7468(0x5c5)]);
                                    else {
                                        if (pageNo == 0x6) game[_0x5d7468(0x374)]['scenes'][pageNo][_0x5d7468(0x374)][_0x5d7468(0xaa6)](_0x4d8c42[_0x5d7468(0x5c5)]), game[_0x5d7468(0x374)][_0x5d7468(0x666)](_0x5d7468(0x713));
                                        else _0x4d8c42[_0x5d7468(0x2d1)](pageNo, 0x7) && (game[_0x5d7468(0x374)][_0x5d7468(0x237)][pageNo][_0x5d7468(0x374)][_0x5d7468(0xaa6)](_0x4d8c42['bdJjQ']), game[_0x5d7468(0x374)][_0x5d7468(0x666)]('levelselect'));
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }, this);
}

function transitionOut() {
    var _0x171ff7 = _0x192e21,
        _0x4026d6 = {
            'sNqup': function(_0x1536af, _0x62d723) {
                return _0x1536af == _0x62d723;
            },
            'koRuG': _0x171ff7(0x468),
            'ReTwK': function(_0x5dec57) {
                return _0x5dec57();
            },
            'hbheG': function(_0x41587d, _0x40c6b8) {
                return _0x41587d == _0x40c6b8;
            },
            'ppFUv': function(_0x2b3971, _0x1c8d66) {
                return _0x2b3971 == _0x1c8d66;
            },
            'mCAha': function(_0x4627b2) {
                return _0x4627b2();
            },
            'qshxd': function(_0x411087, _0x52bd86) {
                return _0x411087 == _0x52bd86;
            },
            'dlzhM': _0x171ff7(0x5f5)
        };
    trans = game[_0x171ff7(0x374)][_0x171ff7(0x237)][pageNo][_0x171ff7(0x85a)][_0x171ff7(0x1dd)](533.5, 0x12c, _0x4026d6[_0x171ff7(0x823)], _0x4026d6[_0x171ff7(0x6f3)], ![]), trans['setInteractive'](), trans['state'][_0x171ff7(0x920)]({
        'event': function(_0x27c387, _0x4c232c) {
            var _0x4800bb = _0x171ff7;
            if (_0x4026d6[_0x4800bb(0x4b5)](_0x4c232c[_0x4800bb(0x67c)], _0x4026d6[_0x4800bb(0x6f3)])) {
                trans['disableInteractive']();
                if (pageNo == 0x2) _0x4026d6['ReTwK'](titlescreenstart);
                else {
                    if (_0x4026d6['sNqup'](pageNo, 0x3)) _0x4026d6[_0x4800bb(0x28e)](levelselectstart);
                    else {
                        if (_0x4026d6[_0x4800bb(0x75b)](pageNo, 0x4)) _0x4026d6[_0x4800bb(0x28e)](level1start);
                        else {
                            if (_0x4026d6[_0x4800bb(0x99f)](pageNo, 0x5)) level2start();
                            else {
                                if (_0x4026d6[_0x4800bb(0x4b5)](pageNo, 0x6)) _0x4026d6['mCAha'](level3start);
                                else _0x4026d6[_0x4800bb(0x885)](pageNo, 0x7) && _0x4026d6[_0x4800bb(0x38d)](endscreenstart);
                            }
                        }
                    }
                }
            }
        }
    }, this);
}

function logomutefun() {
    var _0x331a97 = _0x192e21,
        _0x5a66a7 = {
            'uKYCH': function(_0x467876, _0x475e7c) {
                return _0x467876 == _0x475e7c;
            },
            'MijWk': function(_0x29bbb7, _0x1d5766) {
                return _0x29bbb7 == _0x1d5766;
            },
            'Jbomf': function(_0x3814fc, _0xcb6b1f) {
                return _0x3814fc == _0xcb6b1f;
            },
            'oFSQi': _0x331a97(0x82f),
            'nfFbW': _0x331a97(0x338)
        };
    this[_0x331a97(0x70b)][_0x331a97(0x50b)][_0x331a97(0x920)](Phaser[_0x331a97(0x1e2)][_0x331a97(0x21b)][_0x331a97(0x74f)], _0x4ffff2, this), this[_0x331a97(0x70b)][_0x331a97(0x50b)][_0x331a97(0x920)](Phaser[_0x331a97(0x1e2)]['Events'][_0x331a97(0x4b1)], _0x331678, this);

    function _0x331678() {
        var _0x123e60 = _0x331a97;
        game[_0x123e60(0x374)]['scenes'][pageNo]['scene'][_0x123e60(0x3a8)]();
    }

    function _0x4ffff2() {
        var _0x24fbd = _0x331a97;
        game[_0x24fbd(0x374)][_0x24fbd(0x237)][pageNo]['scene'][_0x24fbd(0x400)]();
    }
    logo2 = game[_0x331a97(0x374)][_0x331a97(0x237)][pageNo][_0x331a97(0x85a)][_0x331a97(0x323)](138.5, 36.5, _0x331a97(0x611))['setOrigin'](0.5, 0.5)['setInteractive']({
        'pixelPerfect': !![],
        'useHandCursor': !![]
    }), logo2[_0x331a97(0xa6e)] = ![], soundmute = game[_0x331a97(0x374)][_0x331a97(0x237)][pageNo][_0x331a97(0x85a)][_0x331a97(0x323)](0x404, 0x24, _0x331a97(0x667))[_0x331a97(0x541)](0.5, 0.5)[_0x331a97(0xa74)]({
        'pixelPerfect': !![],
        'useHandCursor': !![]
    });

    function _0x484279() {
        var _0x5db68a = _0x331a97;
        this[_0x5db68a(0x67d)](1.05);
    }

    function _0x99dd8d() {
        var _0x263db0 = _0x331a97;
        this[_0x263db0(0x67d)](0x1);
    }
    soundmute['on'](_0x5a66a7['oFSQi'], _0x484279), soundmute['on'](_0x5a66a7[_0x331a97(0x4b9)], _0x99dd8d), soundmute['on'](_0x331a97(0x637), _0x2ddf59), soundmute['on'](_0x331a97(0x3b6), _0x4898d3);

    function _0x2ddf59() {
        var _0x381803 = _0x331a97;
        playsoundeffects(_0x381803(0x27b)), this['setScale'](0x1), !isMuted ? (isMuted = !![], soundmute[_0x381803(0x254)](0x1), music['pause'](), clicksound['volume'] = 0x0) : (clicksound[_0x381803(0xa16)] = 0x1, isMuted = ![], soundmute[_0x381803(0x254)](0x0), music[_0x381803(0x400)]()), _0x5a66a7['uKYCH'](spongestart, 0x1) && (!isMuted ? spongesound[_0x381803(0x400)]() : spongesound[_0x381803(0x3a8)]()), _0x5a66a7[_0x381803(0x311)](towelstart, 0x1) && (!isMuted ? towelsound[_0x381803(0x400)]() : towelsound['pause']()), _0x5a66a7[_0x381803(0x94f)](clockstart, 0x1) && (!isMuted ? clocksound[_0x381803(0x400)]() : clocksound['pause']());
    }

    function _0x4898d3(_0x286968) {
        isMuted ? soundmute['setFrame'](0x1) : soundmute['setFrame'](0x0);
    }
    isMuted && soundmute[_0x331a97(0x254)](0x1);
}

function playsoundeffects(_0xba323) {
    var _0x2478eb = _0x192e21,
        _0x18df4e = {
            'Mhlqq': function(_0x3ca5e9, _0x195dd0) {
                return _0x3ca5e9 == _0x195dd0;
            },
            'EvVHi': function(_0x487efb, _0x4dd595) {
                return _0x487efb == _0x4dd595;
            },
            'KReqM': _0x2478eb(0x791)
        };
    _0x18df4e[_0x2478eb(0x3fa)](soundstart, 0x0) && (!isMuted && (clicksound = game[_0x2478eb(0x374)][_0x2478eb(0x237)][pageNo]['sound']['add'](_0xba323), clicksound['play'](), _0x18df4e['EvVHi'](_0xba323, _0x18df4e[_0x2478eb(0x471)]) && clicksound[_0x2478eb(0x639)](0.3)));
}
var startgame3 = ![],
    levelstart = 0x0,
    levelselect = new Phaser[(_0x192e21(0x8eb))]({
        'Extends': Phaser[_0x192e21(0xabc)],
        'initialize': function levelselect() {
            var _0x14c2f1 = _0x192e21,
                _0x308a45 = {
                    'Ebexm': _0x14c2f1(0x5f0)
                };
            Phaser['Scene'][_0x14c2f1(0x654)](this, {
                'key': _0x308a45[_0x14c2f1(0x42c)]
            });
        },
        'preload': function() {
            loadFinish = ![], startgame3 = ![], pageNo = 0x3;
        },
        'create': function() {
            var _0x52e840 = _0x192e21,
                _0x297dc3 = {
                    'DtibX': '15|20|2|17|25|8|6|16|11|19|18|23|22|5|21|4|1|7|24|3|12|13|9|14|0|10',
                    'HYwfj': _0x52e840(0x902),
                    'Mfzjn': _0x52e840(0x1d5),
                    'nKnFF': function(_0x361027, _0x3892f6) {
                        return _0x361027 + _0x3892f6;
                    },
                    'wAeEa': 'stargilter',
                    'wzSSi': 'handindication',
                    'fGLYn': function(_0x5df7f7, _0x4a1f19) {
                        return _0x5df7f7 <= _0x4a1f19;
                    },
                    'eJyDi': function(_0x54788a) {
                        return _0x54788a();
                    },
                    'KmZgw': _0x52e840(0x837),
                    'Vstrc': function(_0x4ed55e, _0x39b954) {
                        return _0x4ed55e + _0x39b954;
                    },
                    'ksiRT': function(_0x327dcf, _0x13d017) {
                        return _0x327dcf == _0x13d017;
                    },
                    'ODkOi': function(_0x2d7554, _0x3df042) {
                        return _0x2d7554 > _0x3df042;
                    },
                    'hnnDu': function(_0x70dd50, _0x454505) {
                        return _0x70dd50 < _0x454505;
                    }
                },
                _0x16275a = _0x297dc3['DtibX'][_0x52e840(0xa4e)]('|'),
                _0x48300c = 0x0;
            while (!![]) {
                switch (_0x16275a[_0x48300c++]) {
                    case '0':
                        this[_0x52e840(0x742)]['on'](_0x297dc3[_0x52e840(0x732)], function() {
                            loadFinish = !![];
                        });
                        continue;
                    case '1':
                        stargilter[_0x52e840(0x6ba)](Phaser[_0x52e840(0x2b2)][_0x52e840(0x34c)]);
                        continue;
                    case '2':
                        var _0x4bf01f = [, 337.5, 238.5, 353.5];
                        continue;
                    case '3':
                        levelcontainer[_0x52e840(0x85a)](stargilter);
                        continue;
                    case '4':
                        anim = this[_0x52e840(0x86e)][_0x52e840(0x350)]({
                            'key': _0x52e840(0x910),
                            'frames': this[_0x52e840(0x86e)][_0x52e840(0x173)]('stargilter', {
                                'start': 0x0,
                                'end': 0x2c
                            }),
                            'frameRate': 0x1e
                        });
                        continue;
                    case '5':
                        stargilter = this[_0x52e840(0x85a)][_0x52e840(0x244)](game[_0x297dc3[_0x52e840(0x8e8)] + 0x1]['x'], game[_0x297dc3[_0x52e840(0x625)]('level', 0x1)]['y'], _0x297dc3['wAeEa'])[_0x52e840(0x541)](0.5, 0.5);
                        continue;
                    case '6':
                        handindication = this[_0x52e840(0x85a)][_0x52e840(0x244)](0xbe, 0x1ea, _0x297dc3[_0x52e840(0x233)])[_0x52e840(0x541)](0.5, 0.5);
                        continue;
                    case '7':
                        levelcontainer = this['add'][_0x52e840(0x501)]();
                        continue;
                    case '8':
                        if (levelstart == 0x0)
                            for (i = 0x1; _0x297dc3['fGLYn'](i, 0x3); i++) {
                                game[_0x297dc3[_0x52e840(0x8e8)] + i][_0x52e840(0x67d)](0x0);
                            }
                        continue;
                    case '9':
                        logomutefun();
                        continue;
                    case '10':
                        this['load'][_0x52e840(0x26f)]();
                        continue;
                    case '11':
                        anim = this[_0x52e840(0x86e)][_0x52e840(0x350)]({
                            'key': _0x297dc3['wzSSi'],
                            'frames': this[_0x52e840(0x86e)]['generateFrameNumbers'](_0x297dc3[_0x52e840(0x233)], {
                                'start': 0x0,
                                'end': 0x1
                            }),
                            'frameRate': 0x2,
                            'repeat': -0x1
                        });
                        continue;
                    case '12':
                        levelcontainer['add'](handindication);
                        continue;
                    case '13':
                        levelcontainer['x'] = 0x0;
                        continue;
                    case '14':
                        _0x297dc3[_0x52e840(0x41e)](transitionOut);
                        continue;
                    case '15':
                        levelselectbackground = this[_0x52e840(0x85a)][_0x52e840(0x244)](0x0, 0x0, _0x297dc3[_0x52e840(0x39b)])[_0x52e840(0x541)](0x0, 0x0);
                        continue;
                    case '16':
                        handindication[_0x52e840(0x67d)](-0.8, 0.8);
                        continue;
                    case '17':
                        for (i = 0x1; i <= 0x3; i++) {
                            game[_0x297dc3[_0x52e840(0x625)](_0x297dc3[_0x52e840(0x8e8)], i)] = this['add'][_0x52e840(0x244)](_0x7a08e6[i], _0x4bf01f[i], _0x297dc3[_0x52e840(0x8ba)](_0x52e840(0x1d5), i))[_0x52e840(0x541)](0.5, 0.5);
                        }
                        continue;
                    case '18':
                        handindication[_0x52e840(0x86e)]['play'](_0x297dc3[_0x52e840(0x233)]);
                        continue;
                    case '19':
                        handindication[_0x52e840(0x86e)][_0x52e840(0x742)](_0x297dc3[_0x52e840(0x233)]);
                        continue;
                    case '20':
                        var _0x7a08e6 = [, 285.5, 536.5, 0x30b];
                        continue;
                    case '21':
                        stargilter[_0x52e840(0x67d)](0x1);
                        continue;
                    case '22':
                        if (level == 0x1) handindication[_0x52e840(0x67d)](-0.8, 0.8), handindication['x'] = 0xbe, handindication['y'] = 0x1ea;
                        else {
                            if (_0x297dc3['ksiRT'](level, 0x2)) handindication[_0x52e840(0x67d)](-0.8, 0.8), handindication['x'] = 0x1a9, handindication['y'] = 0x168;
                            else _0x297dc3[_0x52e840(0x8e0)](level, 0x3) && (handindication[_0x52e840(0x67d)](-0.8, 0.8), handindication['x'] = 0x2a8, handindication['y'] = 0x1ea);
                        }
                        continue;
                    case '23':
                        handindication[_0x52e840(0xa6e)] = ![];
                        continue;
                    case '24':
                        for (i = 0x1; i <= 0x3; i++) {
                            levelcontainer[_0x52e840(0x85a)](game[_0x297dc3[_0x52e840(0x8e8)] + i]);
                        }
                        continue;
                    case '25':
                        if (_0x297dc3[_0x52e840(0x2c0)](level, 0x1))
                            for (i = 0x1; _0x297dc3['hnnDu'](i, level); i++) {
                                game[_0x297dc3[_0x52e840(0x8e8)] + i][_0x52e840(0x254)](0x1);
                            }
                        continue;
                }
                break;
            }
        },
        'update': function() {}
    });

function loadPicture4() {
    var _0x3c9ca0 = _0x192e21;
    game[_0x3c9ca0(0x742)][_0x3c9ca0(0x26f)]();
}

function levelselectstart() {
    var _0x452a2e = _0x192e21,
        _0x38f155 = {
            'yMATx': function(_0x53a4b5, _0x5122d3) {
                return _0x53a4b5 + _0x5122d3;
            },
            'kpkaR': _0x452a2e(0x1d5),
            'dRsfU': function(_0x37ed8e, _0x1f4247) {
                return _0x37ed8e + _0x1f4247;
            },
            'nhjDi': _0x452a2e(0x910),
            'VWyJB': 'animationcomplete',
            'oPhfI': function(_0x171bf7, _0x791d31) {
                return _0x171bf7(_0x791d31);
            },
            'IgDiv': _0x452a2e(0x4ac),
            'ctlXp': _0x452a2e(0x82f),
            'MBOcv': 'pointerout',
            'pYHnG': function(_0x9cd84c, _0x2b1deb) {
                return _0x9cd84c < _0x2b1deb;
            },
            'SBfwK': function(_0x53cc74, _0x840152, _0x5b476b) {
                return _0x53cc74(_0x840152, _0x5b476b);
            },
            'NTdUc': function(_0x1c1dcd, _0x475f2c) {
                return _0x1c1dcd <= _0x475f2c;
            },
            'GcTNf': function(_0x1d1c44, _0x552d54) {
                return _0x1d1c44 + _0x552d54;
            },
            'JQKnz': _0x452a2e(0x637),
            'lLykP': function(_0x5e6051, _0x4c0aa4) {
                return _0x5e6051(_0x4c0aa4);
            },
            'OOOIv': _0x452a2e(0x27b),
            'MqIIM': function(_0x23861f, _0x2c228d) {
                return _0x23861f + _0x2c228d;
            },
            'ZoiMN': _0x452a2e(0x901),
            'fTIiY': function(_0x24783d, _0x4b3cfc) {
                return _0x24783d !== _0x4b3cfc;
            },
            'SBEBu': _0x452a2e(0x3ab),
            'tevdp': function(_0x5ae1b2) {
                return _0x5ae1b2();
            },
            'pDjzM': function(_0x1313e8, _0x44061b) {
                return _0x1313e8 == _0x44061b;
            },
            'brdRi': function(_0x394eb7, _0x4ec1c6) {
                return _0x394eb7 * _0x4ec1c6;
            },
            'CgoUa': _0x452a2e(0x4e5),
            'nbzhw': function(_0x5366dc) {
                return _0x5366dc();
            }
        };
    if (_0x38f155[_0x452a2e(0x424)](levelstart, 0x0)) {
        levelstart = 0x1;
        for (i = 0x1; _0x38f155[_0x452a2e(0x21d)](i, 0x2); i++) {
            game['scene'][_0x452a2e(0x237)][pageNo]['tweens'][_0x452a2e(0x85a)]({
                'targets': game[_0x38f155[_0x452a2e(0x6d5)](_0x38f155[_0x452a2e(0x467)], i)],
                'scale': 0x1,
                'ease': 'Back.easeOut',
                'duration': 0x1f4,
                'delay': _0x38f155[_0x452a2e(0x5d5)](i, 0xc8)
            });
        }
        for (i = 0x3; _0x38f155['NTdUc'](i, 0x3); i++) {
            game[_0x452a2e(0x374)][_0x452a2e(0x237)][pageNo][_0x452a2e(0x465)]['add']({
                'targets': game[_0x38f155['kpkaR'] + i],
                'scale': 0x1,
                'ease': _0x38f155[_0x452a2e(0xab3)],
                'duration': 0x1f4,
                'delay': _0x38f155[_0x452a2e(0x5d5)](i, 0xc8),
                'onComplete': _0x524d93,
                'callbackScope': this
            });
        }
    } else _0x38f155[_0x452a2e(0x8fc)](_0x524d93);

    function _0x524d93() {
        var _0x170a43 = _0x452a2e,
            _0x42461b = {
                'THWcg': function(_0x58bee4, _0x3963b8) {
                    return _0x58bee4 <= _0x3963b8;
                },
                'PAwIa': _0x170a43(0x1d5),
                'uVDOW': _0x38f155['ctlXp'],
                'zHBwb': function(_0x30d09d, _0x5d936b) {
                    var _0x32acf9 = _0x170a43;
                    return _0x38f155[_0x32acf9(0x864)](_0x30d09d, _0x5d936b);
                },
                'PgEnh': _0x38f155[_0x170a43(0x388)]
            };
        if (_0x38f155[_0x170a43(0x542)](level, 0x4)) {
            _0x38f155[_0x170a43(0x840)](setTimeout, _0x3dfdaf, 0x64);

            function _0x3dfdaf() {
                var _0x3fc82a = _0x170a43;
                game[_0x38f155[_0x3fc82a(0x864)](_0x38f155[_0x3fc82a(0x467)], level)][_0x3fc82a(0x254)](0x1), stargilter[_0x3fc82a(0x7f2)](game[_0x38f155['yMATx'](_0x38f155[_0x3fc82a(0x467)], level)]['x'], game[_0x38f155['dRsfU'](_0x38f155[_0x3fc82a(0x467)], level)]['y']), stargilter[_0x3fc82a(0x86e)][_0x3fc82a(0x742)](_0x38f155[_0x3fc82a(0x40b)]), stargilter['anims'][_0x3fc82a(0x3ca)](_0x3fc82a(0x910)), stargilter['on'](_0x38f155['VWyJB'], _0x5a9d4f, this), _0x38f155[_0x3fc82a(0xacc)](playsoundeffects, _0x38f155['IgDiv']);

                function _0x5a9d4f() {
                    var _0x3f5f23 = _0x3fc82a;
                    handindication[_0x3f5f23(0xa6e)] = !![];
                    for (i = 0x1; _0x42461b['THWcg'](i, level); i++) {
                        game[_0x3f5f23(0x1d5) + i]['setInteractive']({
                            'pixelPerfect': !![],
                            'useHandCursor': !![]
                        }), game[_0x42461b[_0x3f5f23(0x36f)] + i]['on'](_0x42461b[_0x3f5f23(0x758)], _0x37af19), game[_0x42461b[_0x3f5f23(0x2f3)](_0x42461b['PAwIa'], i)]['on'](_0x42461b[_0x3f5f23(0x752)], _0x3eb34a), game[_0x42461b['zHBwb'](_0x3f5f23(0x1d5), i)]['on'](_0x3f5f23(0x637), _0xfd1646);
                    }
                }
            }
        } else
            for (i = 0x1; _0x38f155[_0x170a43(0x21d)](i, 0x3); i++) {
                game[_0x170a43(0x1d5) + i]['setInteractive']({
                    'pixelPerfect': !![],
                    'useHandCursor': !![]
                }), game[_0x38f155[_0x170a43(0x864)](_0x38f155[_0x170a43(0x467)], i)]['on'](_0x170a43(0x82f), _0x37af19), game[_0x38f155[_0x170a43(0x1a8)](_0x170a43(0x1d5), i)]['on'](_0x38f155[_0x170a43(0x388)], _0x3eb34a), game[_0x38f155['dRsfU'](_0x38f155[_0x170a43(0x467)], i)]['on'](_0x38f155[_0x170a43(0x31d)], _0xfd1646);
            }
    }

    function _0x37af19() {
        var _0x2fb9a9 = _0x452a2e;
        this[_0x2fb9a9(0x67d)](1.05);
    }

    function _0x3eb34a() {
        var _0x18f2e1 = _0x452a2e;
        this[_0x18f2e1(0x67d)](0x1);
    }

    function _0xfd1646() {
        var _0x4cc2ce = _0x452a2e;
        sno = this[_0x4cc2ce(0x73d)][_0x4cc2ce(0x7ef)]['substr'](0x5), lcount = _0x38f155[_0x4cc2ce(0x1e3)](parseInt, sno), _0x38f155[_0x4cc2ce(0xacc)](playsoundeffects, _0x38f155[_0x4cc2ce(0x69a)]), game[_0x4cc2ce(0x374)]['scenes'][pageNo][_0x4cc2ce(0x465)]['add']({
            'targets': game[_0x38f155[_0x4cc2ce(0x93f)](_0x38f155[_0x4cc2ce(0x467)], lcount)],
            'scale': 0.9,
            'ease': _0x38f155[_0x4cc2ce(0x4da)],
            'duration': 0x64,
            'yoyo': !![],
            'onComplete': _0x571a1e,
            'callbackScope': this
        });
    }

    function _0x571a1e() {
        var _0x2af1b3 = _0x452a2e;
        this[_0x2af1b3(0x67d)](1.05), _0x38f155[_0x2af1b3(0x561)](typeof gdsdk, _0x38f155[_0x2af1b3(0x9fa)]) && _0x38f155[_0x2af1b3(0x561)](gdsdk['showAd'], _0x38f155['SBEBu']) && gdsdk[_0x2af1b3(0x406)](), _0x38f155[_0x2af1b3(0x272)](transitionIn);
    }
}
var startgame4 = ![],
    btnstart1 = ![],
    btnstart2 = ![],
    btnstart3 = ![],
    btnstart4 = ![],
    btnstart5 = ![],
    glowarr = [0x0, 0x0, 0x0, 0x0],
    dressarr1 = [0x0, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
    hairarr1 = [0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x0, 0x0, 0x0],
    chainarr1 = [0x0, 0x0, 0x0, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0],
    studarr1 = [0x0, 0x0, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
    bagarr1 = [0x0, 0x0, 0x0, 0x0, 0x1, 0x0, 0x0, 0x0, 0x0],
    glassarr1 = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1],
    leveladcheck = 0x0,
    bagrandom = 0x0,
    hairrandom = 0x0,
    dressrandom = 0x0,
    level1 = new Phaser[(_0x192e21(0x8eb))]({
        'Extends': Phaser[_0x192e21(0xabc)],
        'initialize': function level1() {
            var _0x1a24e6 = _0x192e21;
            Phaser[_0x1a24e6(0xabc)]['call'](this, {
                'key': _0x1a24e6(0x511)
            });
        },
        'preload': function() {
            var _0x411657 = _0x192e21,
                _0x5b8d72 = {
                    'RVbYX': _0x411657(0xa7f)
                },
                _0x39c527 = _0x5b8d72[_0x411657(0x477)][_0x411657(0xa4e)]('|'),
                _0x39e1ce = 0x0;
            while (!![]) {
                switch (_0x39c527[_0x39e1ce++]) {
                    case '0':
                        btnstart1 = ![];
                        continue;
                    case '1':
                        glowarr = [0x1, 0x0, 0x0, 0x0];
                        continue;
                    case '2':
                        settingval = ![];
                        continue;
                    case '3':
                        loadFinish = ![];
                        continue;
                    case '4':
                        btnstart2 = ![];
                        continue;
                    case '5':
                        btnstart3 = ![];
                        continue;
                    case '6':
                        btnstart4 = ![];
                        continue;
                    case '7':
                        btnstart5 = ![];
                        continue;
                    case '8':
                        pageNo = 0x4;
                        continue;
                    case '9':
                        leveladcheck = 0x0;
                        continue;
                    case '10':
                        startgame4 = ![];
                        continue;
                }
                break;
            }
        },
        'create': function() {
            var _0x112f80 = _0x192e21,
                _0x2aaa5e = {
                    'FguCW': 'doll1lip',
                    'MQHPm': _0x112f80(0x6ca),
                    'chhzB': _0x112f80(0x74b),
                    'duzNr': _0x112f80(0x310),
                    'MVjHS': 'doll1facedust',
                    'dnhue': _0x112f80(0x179),
                    'rzAzV': _0x112f80(0x578),
                    'Himvt': _0x112f80(0x439),
                    'aysfr': _0x112f80(0x3f1),
                    'LVKmb': 'doll1eyeclose',
                    'FBglP': 'doll1pimple1',
                    'fPpIw': _0x112f80(0x289),
                    'NOlYv': _0x112f80(0x3ee),
                    'OxmWA': _0x112f80(0x3a9),
                    'UUaay': _0x112f80(0x29e),
                    'zrhQL': _0x112f80(0xa70),
                    'YxJsR': _0x112f80(0x662),
                    'udGIa': function(_0xa8c4c5, _0x457301) {
                        return _0xa8c4c5 + _0x457301;
                    },
                    'FVXXa': function(_0x5a590f, _0x42b9c3) {
                        return _0x5a590f >= _0x42b9c3;
                    },
                    'GabIZ': function(_0x59b35d, _0x2fd87d) {
                        return _0x59b35d + _0x2fd87d;
                    },
                    'Ugpls': _0x112f80(0xa4d),
                    'SMAsR': _0x112f80(0x901),
                    'efPOK': _0x112f80(0x1ce),
                    'MEEqI': 'cucumber2',
                    'NCqsY': 'darkcirclecream1',
                    'enhJk': _0x112f80(0x2af),
                    'YaHgQ': _0x112f80(0x618),
                    'ErjsN': _0x112f80(0x176),
                    'jCmSO': _0x112f80(0x923),
                    'kwoey': _0x112f80(0x984),
                    'StRXe': _0x112f80(0x78e),
                    'mMnZT': _0x112f80(0x9a9),
                    'mWMFw': 'pimpleremoverhit',
                    'uzjAX': _0x112f80(0x513),
                    'oSDJw': 'cucumberhit2',
                    'JSxsC': 'dressimg',
                    'Yspzn': _0x112f80(0x7b1),
                    'DKSAO': _0x112f80(0x9c5),
                    'jScjL': _0x112f80(0x6ea),
                    'MzZmg': _0x112f80(0x728),
                    'DlCcn': _0x112f80(0xa36),
                    'JoUlt': _0x112f80(0x324),
                    'dmdAq': _0x112f80(0x568),
                    'gSyTA': _0x112f80(0x7f5),
                    'luUZm': _0x112f80(0x8f6),
                    'ThwbJ': _0x112f80(0x404),
                    'BfYDO': _0x112f80(0x8ee),
                    'pTHXh': _0x112f80(0x6d3),
                    'qIRmW': _0x112f80(0x197),
                    'DcHfG': _0x112f80(0x97d),
                    'RNbfO': _0x112f80(0x7b9),
                    'grTmp': 'dressgliter',
                    'XDbKc': _0x112f80(0x548),
                    'ibxPR': _0x112f80(0x1e5),
                    'dDPhl': _0x112f80(0x910),
                    'xtIIG': function(_0x262504) {
                        return _0x262504();
                    },
                    'PvtqN': _0x112f80(0x902),
                    'zcSDi': _0x112f80(0x28c),
                    'DsMrX': _0x112f80(0xa14),
                    'yZIWj': _0x112f80(0x1fc),
                    'hUOLR': _0x112f80(0x88c),
                    'NiaKU': 'assets/level2/doll/eyetop.png',
                    'poltC': _0x112f80(0x871),
                    'PICFP': 'doll2bottom',
                    'NpQYF': _0x112f80(0x9d4),
                    'NkEyv': _0x112f80(0x75e),
                    'dLRIn': _0x112f80(0xa96),
                    'JLeNx': _0x112f80(0x531),
                    'ucwRZ': _0x112f80(0x313),
                    'ZarUj': _0x112f80(0x71f),
                    'rGQKu': _0x112f80(0x2fb),
                    'bREVz': _0x112f80(0x3d9),
                    'pCthD': 'doll2blush',
                    'EHGnJ': _0x112f80(0x262),
                    'LGMnP': _0x112f80(0x3c1),
                    'BHOuQ': _0x112f80(0x28b),
                    'qJtSy': _0x112f80(0xa2c),
                    'roAmv': _0x112f80(0x9e9),
                    'ZeySf': _0x112f80(0x92e),
                    'TYHgJ': _0x112f80(0x2c8),
                    'WdwKF': _0x112f80(0x64e),
                    'QNlNt': _0x112f80(0xab2),
                    'LYMmt': 'doll2eyeball'
                };
            level1background = this['add']['image'](0x0, 0x0, _0x112f80(0xa85))[_0x112f80(0x541)](0x0, 0x0), doll1bhair = this['add'][_0x112f80(0x323)](0x1fb, 0x1c4, _0x112f80(0x190))['setOrigin'](0.5), doll1body = this['add']['image'](489.5, 0x438, _0x112f80(0x750))[_0x112f80(0x541)](0.5), doll1lip = this[_0x112f80(0x85a)][_0x112f80(0x323)](502.5, 0x166, _0x2aaa5e[_0x112f80(0x981)])[_0x112f80(0x541)](0.5), doll1eyeball = this[_0x112f80(0x85a)]['image'](502.5, 259.5, 'doll1eyeball')['setOrigin'](0.5), doll1eyewhite = this[_0x112f80(0x85a)][_0x112f80(0x323)](502.5, 262.5, _0x2aaa5e['MQHPm'])[_0x112f80(0x541)](0.5), doll1eyeopen = this[_0x112f80(0x85a)][_0x112f80(0x323)](502.5, 0x107, _0x2aaa5e[_0x112f80(0xa7a)])[_0x112f80(0x541)](0.5), doll1leyebrow = this['add'][_0x112f80(0x323)](563.5, 221.5, 'doll1leyebrow')['setOrigin'](0.5), doll1reyebrow = this[_0x112f80(0x85a)]['image'](0x1b9, 221.5, _0x2aaa5e[_0x112f80(0x4cc)])[_0x112f80(0x541)](0.5), doll1facedust = this[_0x112f80(0x85a)][_0x112f80(0x323)](505.5, 0xf3, _0x2aaa5e[_0x112f80(0x586)])[_0x112f80(0x541)](0.5), doll1rebrow = this['add']['image'](0x1bc, 219.5, _0x2aaa5e[_0x112f80(0x7fb)])[_0x112f80(0x541)](0.5), doll1lebrow = this[_0x112f80(0x85a)][_0x112f80(0x323)](0x232, 220.5, _0x2aaa5e[_0x112f80(0x627)])[_0x112f80(0x541)](0.5), doll1face = this[_0x112f80(0x85a)]['sprite'](506.5, 0xe7, _0x2aaa5e[_0x112f80(0x686)])[_0x112f80(0x541)](0.5), doll1face1 = this[_0x112f80(0x85a)][_0x112f80(0x244)](506.5, 0xe7, 'doll1face')['setOrigin'](0.5), doll1eyetop = this['add'][_0x112f80(0x244)](0x1f8, 261.5, _0x2aaa5e[_0x112f80(0x520)])[_0x112f80(0x541)](0.5), doll1eyetop1 = this['add'][_0x112f80(0x244)](0x1f8, 261.5, _0x2aaa5e[_0x112f80(0x520)])['setOrigin'](0.5), doll1eyeclose = this[_0x112f80(0x85a)][_0x112f80(0x244)](505.5, 260.5, _0x2aaa5e['LVKmb'])[_0x112f80(0x541)](0.5), doll1eyeclose = this[_0x112f80(0x85a)][_0x112f80(0x244)](505.5, 260.5, _0x2aaa5e[_0x112f80(0x5ba)])['setOrigin'](0.5), doll1eyeclose1 = this[_0x112f80(0x85a)][_0x112f80(0x244)](505.5, 260.5, _0x2aaa5e[_0x112f80(0x5ba)])[_0x112f80(0x541)](0.5), doll1pimple1 = this[_0x112f80(0x85a)]['sprite'](0x201, 197.5, _0x2aaa5e[_0x112f80(0x331)])[_0x112f80(0x541)](0.5), doll1pimple2 = this[_0x112f80(0x85a)][_0x112f80(0x244)](0x23d, 308.5, _0x2aaa5e[_0x112f80(0x7c8)])[_0x112f80(0x541)](0.5), doll1pimple3 = this[_0x112f80(0x85a)][_0x112f80(0x244)](0x1d1, 329.5, _0x2aaa5e[_0x112f80(0x3f3)])['setOrigin'](0.5), doll1pimple4 = this[_0x112f80(0x85a)]['sprite'](0x1ed, 0x188, _0x2aaa5e['OxmWA'])[_0x112f80(0x541)](0.5), doll1darkcircle = this[_0x112f80(0x85a)]['image'](0x1f7, 265.5, _0x112f80(0x1a9))[_0x112f80(0x541)](0.5), doll1dress = this[_0x112f80(0x85a)][_0x112f80(0x323)](535.5, 480.5, 'doll1dress')[_0x112f80(0x541)](0.5), doll1hair = this[_0x112f80(0x85a)]['image'](0x1f4, 0xa8, _0x112f80(0x8b8))['setOrigin'](0.5), doll1dresscap = this[_0x112f80(0x85a)]['image'](0x1f4, 127.5, _0x2aaa5e['UUaay'])[_0x112f80(0x541)](0.5), doll1dressshadow = this[_0x112f80(0x85a)][_0x112f80(0x323)](0x1f6, 0x1f6, _0x2aaa5e[_0x112f80(0x389)])[_0x112f80(0x541)](0.5), doll1eyeclose[_0x112f80(0xa6e)] = ![], doll1dressshadow[_0x112f80(0xa6e)] = ![], doll1face[_0x112f80(0x254)](0x0), doll1face1['setFrame'](0x1), doll1eyetop1[_0x112f80(0x254)](0x1), doll1eyeclose1[_0x112f80(0x254)](0x1), level1grp = this[_0x112f80(0x85a)][_0x112f80(0x501)](), level1grp['add'](doll1bhair), level1grp['add'](doll1body), level1grp[_0x112f80(0x85a)](doll1face1), level1grp['add'](doll1face), level1grp[_0x112f80(0x85a)](doll1lip), level1grp[_0x112f80(0x85a)](doll1eyewhite), level1grp[_0x112f80(0x85a)](doll1eyeball), level1grp['add'](doll1eyetop1), level1grp[_0x112f80(0x85a)](doll1eyetop), level1grp[_0x112f80(0x85a)](doll1eyeopen), level1grp[_0x112f80(0x85a)](doll1eyeclose), level1grp[_0x112f80(0x85a)](doll1leyebrow), level1grp[_0x112f80(0x85a)](doll1reyebrow), level1grp[_0x112f80(0x85a)](doll1facedust), level1grp[_0x112f80(0x85a)](doll1rebrow), level1grp['add'](doll1lebrow), level1grp[_0x112f80(0x85a)](doll1pimple1), level1grp[_0x112f80(0x85a)](doll1pimple2), level1grp[_0x112f80(0x85a)](doll1pimple3), level1grp[_0x112f80(0x85a)](doll1pimple4), level1grp[_0x112f80(0x85a)](doll1darkcircle), level1grp[_0x112f80(0x85a)](doll1dressshadow), level1grp[_0x112f80(0x85a)](doll1dress), level1grp[_0x112f80(0x85a)](doll1hair), level1grp[_0x112f80(0x85a)](doll1dresscap);
            var _0x552212 = [, 565.5, 500.5, 0x1b6, 0x1fa, 503.5],
                _0x31ab5c = [, 315.5, 173.5, 317.5, 290.5, 389.5];
            for (i = 0x5; i >= 0x1; i--) {
                game[_0x2aaa5e[_0x112f80(0x68a)] + i] = this[_0x112f80(0x85a)][_0x112f80(0x244)](_0x552212[i], _0x31ab5c[i], _0x2aaa5e['udGIa'](_0x2aaa5e[_0x112f80(0x68a)], i))[_0x112f80(0x541)](0.5, 0.5)[_0x112f80(0xa74)]({
                    'pixelPerfect': !![],
                    'useHandCursor': !![]
                }), game[_0x2aaa5e[_0x112f80(0x519)](_0x2aaa5e[_0x112f80(0x68a)], i)][_0x112f80(0x55e)] = 0x0;
            }
            var _0xda1f8d = [, 0x212, 0x1b7, 479.5, 0x22a, 577.5, 536.5, 464.5],
                _0x1f07a0 = [, 251.5, 0xf5, 0xbe, 194.5, 273.5, 348.5, 0x14e];
            for (i = 0x7; _0x2aaa5e[_0x112f80(0x61d)](i, 0x1); i--) {
                game[_0x2aaa5e[_0x112f80(0x1ef)](_0x112f80(0xa4d), i)] = this[_0x112f80(0x85a)][_0x112f80(0x244)](_0xda1f8d[i], _0x1f07a0[i], _0x2aaa5e[_0x112f80(0x1ef)](_0x2aaa5e[_0x112f80(0x802)], i))[_0x112f80(0x541)](0.5, 0.5)[_0x112f80(0xa74)]({
                    'pixelPerfect': !![],
                    'useHandCursor': !![]
                }), game[_0x2aaa5e[_0x112f80(0x519)](_0x2aaa5e['Ugpls'], i)][_0x112f80(0x55e)] = 0x0;
            }
            for (i = 0x7; i >= 0x1; i--) {
                game[_0x112f80(0x374)][_0x112f80(0x237)][pageNo][_0x112f80(0x465)]['add']({
                    'targets': game[_0x2aaa5e[_0x112f80(0x802)] + i],
                    'scale': 0.97,
                    'ease': _0x2aaa5e[_0x112f80(0x8dd)],
                    'duration': 0x12c,
                    'repeat': -0x1,
                    'yoyo': !![]
                });
            }
            facemask = this[_0x112f80(0x85a)][_0x112f80(0x323)](503.5, 274.5, _0x2aaa5e[_0x112f80(0x945)])[_0x112f80(0x541)](0.5), facemask[_0x112f80(0xa6e)] = ![], cucumber1 = this[_0x112f80(0x85a)][_0x112f80(0x323)](0x1c0, 255.5, _0x112f80(0x755))['setOrigin'](0.5), cucumber1['visible'] = ![], cucumber2 = this[_0x112f80(0x85a)][_0x112f80(0x323)](0x232, 257.5, _0x2aaa5e[_0x112f80(0x45a)])[_0x112f80(0x541)](0.5), cucumber2['visible'] = ![], darkcirclecream1 = this['add'][_0x112f80(0x323)](0x22f, 284.5, _0x2aaa5e['NCqsY'])[_0x112f80(0x541)](0.5), darkcirclecream1[_0x112f80(0x55e)] = 0x0, darkcirclecream2 = this['add'][_0x112f80(0x323)](444.5, 284.5, _0x2aaa5e[_0x112f80(0x5d3)])[_0x112f80(0x541)](0.5), darkcirclecream2[_0x112f80(0x55e)] = 0x0, foundation1 = this['add']['image'](509.5, 163.5, _0x2aaa5e['YaHgQ'])[_0x112f80(0x541)](0.5), foundation1[_0x112f80(0x55e)] = 0x0, foundation2 = this[_0x112f80(0x85a)][_0x112f80(0x323)](500.5, 279.5, _0x2aaa5e['ErjsN'])[_0x112f80(0x541)](0.5), foundation2[_0x112f80(0x55e)] = 0x0, foundation3 = this[_0x112f80(0x85a)][_0x112f80(0x323)](443.5, 0x114, _0x112f80(0x201))[_0x112f80(0x541)](0.5), foundation3['alpha'] = 0x0, dresshit = this['add'][_0x112f80(0x323)](604.5, 408.5, _0x2aaa5e[_0x112f80(0x549)])['setOrigin'](0.5), dresshit['visible'] = ![], facewashhit = this[_0x112f80(0x85a)]['image'](0x268, 0xe8, _0x112f80(0x783))[_0x112f80(0x541)](0.5), facewashhit[_0x112f80(0xa6e)] = ![], scrubbinghit = this['add']['image'](0x1fb, 331.5, _0x2aaa5e['kwoey'])[_0x112f80(0x541)](0.5), scrubbinghit[_0x112f80(0xa6e)] = ![], towelhit = this[_0x112f80(0x85a)][_0x112f80(0x323)](573.5, 270.5, _0x2aaa5e[_0x112f80(0xac6)])[_0x112f80(0x541)](0.5), towelhit['visible'] = ![], eshaperhit = this[_0x112f80(0x85a)][_0x112f80(0x323)](0x261, 277.5, _0x2aaa5e[_0x112f80(0x89d)])[_0x112f80(0x541)](0.5), eshaperhit[_0x112f80(0xa6e)] = ![], pimpleremoverhit = this[_0x112f80(0x85a)]['image'](0x258, 0x177, _0x2aaa5e['mWMFw'])[_0x112f80(0x541)](0.5), pimpleremoverhit['visible'] = ![], facemaskhit = this[_0x112f80(0x85a)][_0x112f80(0x323)](503.5, 274.5, _0x112f80(0x872))[_0x112f80(0x541)](0.5), facemaskhit[_0x112f80(0xa6e)] = ![], cucumberhit1 = this['add'][_0x112f80(0x323)](0x1c0, 255.5, _0x2aaa5e[_0x112f80(0x9ea)])[_0x112f80(0x541)](0.5), cucumberhit1[_0x112f80(0xa6e)] = ![], cucumberhit2 = this[_0x112f80(0x85a)][_0x112f80(0x323)](0x232, 257.5, _0x2aaa5e[_0x112f80(0x722)])[_0x112f80(0x541)](0.5), cucumberhit2['visible'] = ![], creamhandhit = this['add'][_0x112f80(0x323)](573.5, 391.5, _0x112f80(0x8a0))['setOrigin'](0.5), creamhandhit[_0x112f80(0xa6e)] = ![], sprayhit = this[_0x112f80(0x85a)][_0x112f80(0x323)](582.5, 369.5, _0x112f80(0x532))[_0x112f80(0x541)](0.5), sprayhit[_0x112f80(0xa6e)] = ![], dressimg = this[_0x112f80(0x85a)]['image'](876.5, 273.5, _0x2aaa5e[_0x112f80(0x988)])['setOrigin'](0.5), dressimg['x'] = 0x4b0, facewashimg = this[_0x112f80(0x85a)][_0x112f80(0x323)](860.5, 275.5, _0x2aaa5e['Yspzn'])['setOrigin'](0.5), facewashimg['x'] = 0x4b0, scrubbinghand = this[_0x112f80(0x85a)][_0x112f80(0x323)](0x360, 273.5, _0x2aaa5e['DKSAO'])[_0x112f80(0x541)](0.5)['setInteractive']({
                'draggable': !![],
                'useHandCursor': !![]
            }), scrubbinghand['x'] = 0x4b0, towel = this['add'][_0x112f80(0x323)](862.5, 0x114, _0x2aaa5e[_0x112f80(0x96c)])['setOrigin'](0.5)[_0x112f80(0xa74)]({
                'draggable': !![],
                'useHandCursor': !![]
            }), towel['x'] = 0x4b0, eshaper = this[_0x112f80(0x85a)][_0x112f80(0x323)](0x336, 0x107, _0x112f80(0xa43))[_0x112f80(0x541)](0.5), eshaper['x'] = 0x4b0, pimpleremover = this['add'][_0x112f80(0x323)](0x35f, 0x114, _0x112f80(0x912))[_0x112f80(0x541)](0.5)[_0x112f80(0xa74)]({
                'draggable': !![],
                'useHandCursor': !![]
            }), pimpleremover['x'] = 0x4b0, facemaskimg = this[_0x112f80(0x85a)]['image'](924.5, 0x104, _0x2aaa5e[_0x112f80(0x57c)])[_0x112f80(0x541)](0.5)[_0x112f80(0xa74)]({
                'draggable': !![],
                'useHandCursor': !![]
            }), facemaskimg['x'] = 0x4b0, cucumberimg1 = this[_0x112f80(0x85a)][_0x112f80(0x323)](0x384, 284.5, _0x112f80(0x76a))[_0x112f80(0x541)](0.5)[_0x112f80(0xa74)]({
                'draggable': !![],
                'useHandCursor': !![]
            }), cucumberimg1['x'] = 0x4b0, cucumberimg2 = this[_0x112f80(0x85a)][_0x112f80(0x323)](0x384, 0x11f, _0x2aaa5e[_0x112f80(0x7cf)])[_0x112f80(0x541)](0.5)[_0x112f80(0xa74)]({
                'draggable': !![],
                'useHandCursor': !![]
            }), cucumberimg2['x'] = 0x4b0, darkcirclecream = this[_0x112f80(0x85a)][_0x112f80(0x244)](0x35f, 277.5, _0x2aaa5e[_0x112f80(0x8a4)])[_0x112f80(0x541)](0.5)[_0x112f80(0xa74)]({
                'draggable': !![],
                'useHandCursor': !![]
            }), darkcirclecream['x'] = 0x4b0, darkcirclecreamcap = this[_0x112f80(0x85a)][_0x112f80(0x244)](862.5, 0xff, _0x2aaa5e[_0x112f80(0x1ac)])[_0x112f80(0x541)](0.5)[_0x112f80(0xa74)]({
                'draggable': !![],
                'useHandCursor': !![]
            }), darkcirclecreamcap['x'] = 0x4b0, creamhand = this[_0x112f80(0x85a)][_0x112f80(0x244)](892.5, 342.5, _0x2aaa5e[_0x112f80(0x962)])['setOrigin'](0.5)[_0x112f80(0xa74)]({
                'draggable': !![],
                'useHandCursor': !![]
            }), creamhand['x'] = 0x4b0, sprayliquid = this[_0x112f80(0x85a)][_0x112f80(0x244)](0x223, 236.5, _0x2aaa5e[_0x112f80(0x98f)])[_0x112f80(0x541)](0.5), sprayliquid[_0x112f80(0xa6e)] = ![], spraybottle = this[_0x112f80(0x85a)][_0x112f80(0x244)](875.5, 0x11b, _0x2aaa5e[_0x112f80(0x411)])['setOrigin'](0.5)[_0x112f80(0xa74)]({
                'draggable': !![],
                'useHandCursor': !![]
            }), spraybottle['x'] = 0x4b0, spraycap = this[_0x112f80(0x85a)]['sprite'](0x36b, 225.5, _0x2aaa5e[_0x112f80(0x79e)])['setOrigin'](0.5), spraycap['x'] = 0x4b0, eshapeani = this[_0x112f80(0x85a)][_0x112f80(0x244)](0x230, 255.5, _0x2aaa5e[_0x112f80(0x917)])['setOrigin'](0.5, 0.5), anim = this[_0x112f80(0x86e)][_0x112f80(0x350)]({
                'key': _0x2aaa5e[_0x112f80(0x917)],
                'frames': this[_0x112f80(0x86e)]['generateFrameNumbers'](_0x112f80(0x6d3), {
                    'start': 0x1,
                    'end': 0x5
                }),
                'frameRate': 0x5
            }), eshapeani1 = this[_0x112f80(0x85a)][_0x112f80(0x244)](575.5, 255.5, _0x2aaa5e[_0x112f80(0x917)])['setOrigin'](0.5, 0.5), anim = this[_0x112f80(0x86e)][_0x112f80(0x350)]({
                'key': _0x112f80(0x6d3),
                'frames': this[_0x112f80(0x86e)]['generateFrameNumbers'](_0x2aaa5e[_0x112f80(0x917)], {
                    'start': 0x1,
                    'end': 0x5
                }),
                'frameRate': 0x5
            }), eshapeani2 = this[_0x112f80(0x85a)]['sprite'](595.5, 255.5, _0x2aaa5e[_0x112f80(0x917)])['setOrigin'](0.5, 0.5), anim = this['anims']['create']({
                'key': _0x112f80(0x6d3),
                'frames': this[_0x112f80(0x86e)][_0x112f80(0x173)](_0x112f80(0x6d3), {
                    'start': 0x1,
                    'end': 0x5
                }),
                'frameRate': 0x5
            }), handindication = this[_0x112f80(0x85a)][_0x112f80(0x244)](0xbe, 0x1ea, _0x2aaa5e['qIRmW'])['setOrigin'](0.5, 0.5), handindication[_0x112f80(0x67d)](-0.8, 0.8), anim = this['anims']['create']({
                'key': _0x112f80(0x197),
                'frames': this['anims']['generateFrameNumbers'](_0x2aaa5e['qIRmW'], {
                    'start': 0x0,
                    'end': 0x1
                }),
                'frameRate': 0x2,
                'repeat': -0x1
            }), handindication[_0x112f80(0x86e)][_0x112f80(0x742)](_0x2aaa5e[_0x112f80(0xab5)]), handindication[_0x112f80(0x86e)]['play'](_0x2aaa5e[_0x112f80(0xab5)]), handindication[_0x112f80(0xa6e)] = ![], handindication[_0x112f80(0x735)](0x1), level1handtween = game[_0x112f80(0x374)][_0x112f80(0x237)][pageNo][_0x112f80(0x465)][_0x112f80(0x85a)]({
                'targets': handindication,
                'x': -0x64,
                'y': -0x64,
                'ease': _0x2aaa5e[_0x112f80(0x420)],
                'duration': 0xa
            }), level1handtween1 = game[_0x112f80(0x374)]['scenes'][pageNo][_0x112f80(0x48f)][_0x112f80(0x85d)]({
                'delay': 0x3e8,
                'callback': _0xfec8ef,
                'callbackScope': this
            });

            function _0xfec8ef() {}
            level1t1 = game['scene'][_0x112f80(0x237)][pageNo][_0x112f80(0x48f)][_0x112f80(0x85d)]({
                'delay': 0x3e8,
                'callback': _0x47aff9,
                'callbackScope': this
            });

            function _0x47aff9() {}
            clock = this[_0x112f80(0x85a)][_0x112f80(0x244)](0x2ee, 420.7, _0x2aaa5e['RNbfO'])[_0x112f80(0x541)](0.5, 0.5), anim = game[_0x112f80(0x374)][_0x112f80(0x237)][pageNo][_0x112f80(0x86e)][_0x112f80(0x350)]({
                'key': _0x2aaa5e[_0x112f80(0x533)],
                'frames': game[_0x112f80(0x374)][_0x112f80(0x237)][pageNo][_0x112f80(0x86e)][_0x112f80(0x173)](_0x112f80(0x7b9), {
                    'start': 0x0,
                    'end': 0x2a
                }),
                'frameRate': 0x18
            }), clock[_0x112f80(0xa6e)] = ![], clock[_0x112f80(0x86e)][_0x112f80(0x742)](_0x2aaa5e[_0x112f80(0x533)]), dressgliter = this[_0x112f80(0x85a)]['sprite'](420.85, 304.9, _0x112f80(0x72e))[_0x112f80(0x541)](0.5, 0.5), anim = this[_0x112f80(0x86e)]['create']({
                'key': _0x112f80(0x72e),
                'frames': this[_0x112f80(0x86e)][_0x112f80(0x173)](_0x2aaa5e[_0x112f80(0x2a0)], {
                    'start': 0x0,
                    'end': 0x20
                }),
                'frameRate': 0x1e
            }), dressgliter[_0x112f80(0x6ba)](Phaser[_0x112f80(0x2b2)][_0x112f80(0x34c)]), dollgliter = this[_0x112f80(0x85a)][_0x112f80(0x244)](0x111, 0x48, _0x112f80(0x548)), anim = this['anims']['create']({
                'key': _0x112f80(0x548),
                'frames': this[_0x112f80(0x86e)]['generateFrameNumbers'](_0x2aaa5e[_0x112f80(0x76c)], {
                    'start': 0x0,
                    'end': 0x24
                }),
                'frameRate': 0x1e
            }), done2 = this[_0x112f80(0x85a)][_0x112f80(0x244)](0x3e8, 0x212, _0x2aaa5e[_0x112f80(0x577)])[_0x112f80(0x541)](0.5, 0.5)['setInteractive']({
                'pixelPerfect': !![],
                'useHandCursor': !![]
            }), anim = game[_0x112f80(0x374)][_0x112f80(0x237)][pageNo][_0x112f80(0x86e)]['create']({
                'key': _0x2aaa5e['ibxPR'],
                'frames': game['scene'][_0x112f80(0x237)][pageNo][_0x112f80(0x86e)][_0x112f80(0x173)](_0x2aaa5e[_0x112f80(0x577)], {
                    'start': 0x0,
                    'end': 0x9
                }),
                'frameRate': 0x18
            }), done2['visible'] = ![], stargilter = this[_0x112f80(0x85a)][_0x112f80(0x244)](0x1ef, 0x122, _0x2aaa5e[_0x112f80(0x2de)])['setOrigin'](0.5, 0.5), stargilter[_0x112f80(0x67d)](0x1), anim = this['anims'][_0x112f80(0x350)]({
                'key': _0x112f80(0x910),
                'frames': this[_0x112f80(0x86e)][_0x112f80(0x173)](_0x2aaa5e[_0x112f80(0x2de)], {
                    'start': 0x0,
                    'end': 0x2c
                }),
                'frameRate': 0x1e
            }), stargilter[_0x112f80(0x6ba)](Phaser[_0x112f80(0x2b2)][_0x112f80(0x34c)]), logomutefun(), _0x2aaa5e[_0x112f80(0x80d)](transitionOut), this[_0x112f80(0x742)]['on'](_0x2aaa5e['PvtqN'], function() {
                loadFinish = !![];
            }), game[_0x112f80(0x374)][_0x112f80(0x237)][pageNo][_0x112f80(0x742)][_0x112f80(0x323)](_0x112f80(0xa5f), _0x2aaa5e[_0x112f80(0x2a1)]), game[_0x112f80(0x374)][_0x112f80(0x237)][pageNo]['load'][_0x112f80(0x323)](_0x2aaa5e[_0x112f80(0x21e)], _0x2aaa5e[_0x112f80(0x2d5)]), game[_0x112f80(0x374)]['scenes'][pageNo][_0x112f80(0x742)][_0x112f80(0x323)](_0x2aaa5e[_0x112f80(0x379)], _0x2aaa5e[_0x112f80(0x6cc)]), game[_0x112f80(0x374)][_0x112f80(0x237)][pageNo][_0x112f80(0x742)][_0x112f80(0x323)](_0x2aaa5e[_0x112f80(0x92a)], _0x112f80(0x7d4)), game[_0x112f80(0x374)]['scenes'][pageNo][_0x112f80(0x742)][_0x112f80(0x323)](_0x2aaa5e[_0x112f80(0x8d9)], _0x2aaa5e[_0x112f80(0x3c5)]), game['scene']['scenes'][pageNo][_0x112f80(0x742)][_0x112f80(0x323)]('doll2hair', _0x112f80(0x9e1)), game[_0x112f80(0x374)][_0x112f80(0x237)][pageNo]['load'][_0x112f80(0x323)](_0x2aaa5e[_0x112f80(0x600)], _0x112f80(0x96f)), game['scene']['scenes'][pageNo]['load'][_0x112f80(0x323)](_0x2aaa5e['dLRIn'], _0x2aaa5e[_0x112f80(0xa52)]), game['scene'][_0x112f80(0x237)][pageNo]['load']['image'](_0x112f80(0x797), _0x2aaa5e[_0x112f80(0x2c5)]), game['scene'][_0x112f80(0x237)][pageNo][_0x112f80(0x742)][_0x112f80(0x323)](_0x112f80(0x249), _0x112f80(0x4f2)), game[_0x112f80(0x374)][_0x112f80(0x237)][pageNo][_0x112f80(0x742)]['image'](_0x2aaa5e[_0x112f80(0x329)], _0x112f80(0x285)), game[_0x112f80(0x374)][_0x112f80(0x237)][pageNo][_0x112f80(0x742)][_0x112f80(0x323)](_0x2aaa5e[_0x112f80(0xa07)], _0x112f80(0x946)), game[_0x112f80(0x374)][_0x112f80(0x237)][pageNo][_0x112f80(0x742)]['spritesheet'](_0x2aaa5e['bREVz'], _0x112f80(0x58a), {
                'frameWidth': 0x68,
                'frameHeight': 0x31
            }), game[_0x112f80(0x374)][_0x112f80(0x237)][pageNo][_0x112f80(0x742)]['spritesheet'](_0x2aaa5e[_0x112f80(0x84c)], _0x2aaa5e[_0x112f80(0x947)], {
                'frameWidth': 0x107,
                'frameHeight': 0xa3
            }), game[_0x112f80(0x374)][_0x112f80(0x237)][pageNo]['load']['spritesheet'](_0x2aaa5e['LGMnP'], _0x2aaa5e['BHOuQ'], {
                'frameWidth': 0xfe,
                'frameHeight': 0x70
            }), game[_0x112f80(0x374)][_0x112f80(0x237)][pageNo][_0x112f80(0x742)][_0x112f80(0x59c)](_0x2aaa5e[_0x112f80(0x874)], _0x2aaa5e[_0x112f80(0x59f)], {
                'frameWidth': 0x106,
                'frameHeight': 0x72
            }), game[_0x112f80(0x374)][_0x112f80(0x237)][pageNo][_0x112f80(0x742)][_0x112f80(0x59c)](_0x2aaa5e[_0x112f80(0x6d9)], _0x2aaa5e['TYHgJ'], {
                'frameWidth': 0x71,
                'frameHeight': 0x3d
            }), game[_0x112f80(0x374)][_0x112f80(0x237)][pageNo][_0x112f80(0x742)][_0x112f80(0x59c)](_0x2aaa5e['WdwKF'], _0x2aaa5e[_0x112f80(0x42b)], {
                'frameWidth': 0xb7,
                'frameHeight': 0xde
            }), game[_0x112f80(0x374)][_0x112f80(0x237)][pageNo][_0x112f80(0x742)]['spritesheet'](_0x2aaa5e[_0x112f80(0x940)], 'assets/level2/doll/eyeball.png', {
                'frameWidth': 0xb7,
                'frameHeight': 0x54
            }), this['load'][_0x112f80(0x26f)]();
        }
    });

function level1start() {
    var _0x5eab5f = _0x192e21,
        _0x11a58f = {
            'ztFTS': function(_0x5c9159, _0x4178af) {
                return _0x5c9159 >= _0x4178af;
            },
            'CWIPv': function(_0x3d08ee, _0x5276d7) {
                return _0x3d08ee <= _0x5276d7;
            },
            'gqZaT': function(_0x53dfda, _0xd49597) {
                return _0x53dfda + _0xd49597;
            },
            'TVPdj': function(_0x49e596, _0x524770) {
                return _0x49e596 / _0x524770;
            },
            'tNsmP': function(_0x436d41, _0x484407) {
                return _0x436d41 * _0x484407;
            },
            'yolvc': function(_0x2a3aaf, _0x1e5122) {
                return _0x2a3aaf / _0x1e5122;
            },
            'Vxblt': _0x5eab5f(0x349),
            'IavAa': function(_0x52d59b, _0x1b4080) {
                return _0x52d59b == _0x1b4080;
            },
            'rtLCO': _0x5eab5f(0x657),
            'xFyui': function(_0x1cbd9f, _0xcd8977) {
                return _0x1cbd9f == _0xcd8977;
            },
            'JjUly': _0x5eab5f(0x855),
            'KANWl': function(_0x518bbd, _0x4abf6b) {
                return _0x518bbd == _0x4abf6b;
            },
            'EbXOD': function(_0x5eef3a, _0x30645d) {
                return _0x5eef3a == _0x30645d;
            },
            'tFvlb': function(_0x427270, _0x16eb1f) {
                return _0x427270 - _0x16eb1f;
            },
            'whYWk': function(_0x10e19a, _0x4d67ad) {
                return _0x10e19a == _0x4d67ad;
            },
            'OjiwZ': _0x5eab5f(0x17a),
            'VlCUQ': 'scrubbinghan',
            'bhybw': _0x5eab5f(0x9ef),
            'bfiQd': function(_0x19bf67, _0x472056) {
                return _0x19bf67 == _0x472056;
            },
            'LvddK': 'cucumberimg',
            'jVhQi': _0x5eab5f(0x57e),
            'EcpWs': function(_0x3d0ac7, _0x1bd910) {
                return _0x3d0ac7(_0x1bd910);
            },
            'KpySV': _0x5eab5f(0x7b5),
            'AbioF': _0x5eab5f(0x5f3),
            'DYBCn': function(_0x2a2154, _0x3c9444) {
                return _0x2a2154 == _0x3c9444;
            },
            'DKDqP': _0x5eab5f(0x4c6),
            'VzfSd': function(_0x53e194, _0x185dc6) {
                return _0x53e194 == _0x185dc6;
            },
            'WMFdC': function(_0x40ca19, _0x2b1336) {
                return _0x40ca19 == _0x2b1336;
            },
            'aEpru': function(_0x46918c, _0x4171e5) {
                return _0x46918c == _0x4171e5;
            },
            'KUgRT': _0x5eab5f(0x9e2),
            'FhTLp': _0x5eab5f(0x28f),
            'Rlwat': function(_0x2df33a, _0x504076) {
                return _0x2df33a == _0x504076;
            },
            'CgQin': _0x5eab5f(0x5fb),
            'PZjoZ': _0x5eab5f(0x182),
            'osPoK': 'facewashcream',
            'YveXS': _0x5eab5f(0x901),
            'KHigi': function(_0x360a50, _0x1064da) {
                return _0x360a50 + _0x1064da;
            },
            'BzCsy': _0x5eab5f(0x3c4),
            'puTJU': _0x5eab5f(0x8c5),
            'ZUsrS': function(_0x286caa, _0x2057b4) {
                return _0x286caa <= _0x2057b4;
            },
            'RywEK': function(_0x42227f, _0x1f04d5) {
                return _0x42227f + _0x1f04d5;
            },
            'MmaMq': function(_0x1f72ad, _0x5e3c80) {
                return _0x1f72ad <= _0x5e3c80;
            },
            'sCLbu': 'bubble',
            'izbBg': function(_0xfd362e, _0x234771) {
                return _0xfd362e <= _0x234771;
            },
            'kjFxJ': function(_0x255759, _0x82d48a) {
                return _0x255759 + _0x82d48a;
            },
            'zxtRY': function(_0x1eff20, _0x3aa35d) {
                return _0x1eff20 + _0x3aa35d;
            },
            'sxDgd': _0x5eab5f(0x7dc),
            'BieRC': _0x5eab5f(0x6d3),
            'uUTjh': _0x5eab5f(0xa7c),
            'PiZGV': function(_0x278b95, _0x5b9344) {
                return _0x278b95(_0x5b9344);
            },
            'LLbON': _0x5eab5f(0xa99),
            'TyYjy': function(_0x42bf15) {
                return _0x42bf15();
            },
            'iYkMz': '1|4|5|3|0|2',
            'mmJDM': function(_0x5931bd, _0x457a78) {
                return _0x5931bd(_0x457a78);
            },
            'RDnDd': 'spraysound',
            'pJgsk': function(_0x1b5248) {
                return _0x1b5248();
            },
            'tabIO': _0x5eab5f(0x534),
            'HsAjv': function(_0x4e36bf, _0x2039cd) {
                return _0x4e36bf * _0x2039cd;
            },
            'OTABY': function(_0x1e0e70, _0x23e132) {
                return _0x1e0e70 + _0x23e132;
            },
            'ZpelX': _0x5eab5f(0x77f),
            'VapAB': function(_0x10e3a1, _0x2cecf6) {
                return _0x10e3a1(_0x2cecf6);
            },
            'lZdwB': function(_0x4013a3, _0xb4fba6) {
                return _0x4013a3 + _0xb4fba6;
            },
            'IxPec': _0x5eab5f(0x8f1),
            'vdRLE': 'spraybottles',
            'pkBbR': function(_0x5e9a53, _0x275f38) {
                return _0x5e9a53 >= _0x275f38;
            },
            'daska': function(_0x2e6007, _0x3e9732) {
                return _0x2e6007 == _0x3e9732;
            },
            'Lcxyn': 'dropsound',
            'cfjEd': function(_0x267570, _0x44dd2d) {
                return _0x267570 >= _0x44dd2d;
            },
            'xNSMA': function(_0x1a9ad0, _0x35c44c) {
                return _0x1a9ad0 >= _0x35c44c;
            },
            'UfpZI': function(_0x1b7900, _0x4e55d6) {
                return _0x1b7900 <= _0x4e55d6;
            },
            'adxYF': function(_0x1a013d, _0x2ae696) {
                return _0x1a013d == _0x2ae696;
            },
            'YsSWR': _0x5eab5f(0x427),
            'HNPEa': function(_0xfe0648, _0x3b0611) {
                return _0xfe0648 <= _0x3b0611;
            },
            'KZsHg': function(_0x36051d, _0x1515b0) {
                return _0x36051d == _0x1515b0;
            },
            'PCiZu': function(_0x301c5e, _0x80ee0d) {
                return _0x301c5e >= _0x80ee0d;
            },
            'eXGnY': function(_0x2eae47, _0x4c9202) {
                return _0x2eae47 <= _0x4c9202;
            },
            'ysUfT': _0x5eab5f(0x6b7),
            'zHKCH': function(_0x9078dd, _0xc29dbc) {
                return _0x9078dd <= _0xc29dbc;
            },
            'vVHxF': function(_0x11f5b8, _0x350ae5) {
                return _0x11f5b8 <= _0x350ae5;
            },
            'JhMqp': function(_0x248354, _0x4abaa4) {
                return _0x248354 >= _0x4abaa4;
            },
            'wrXJN': function(_0x5a098a, _0x255722) {
                return _0x5a098a(_0x255722);
            },
            'NTrzt': function(_0x27cb9a, _0xf8588e) {
                return _0x27cb9a >= _0xf8588e;
            },
            'ybFtk': function(_0x4b8489, _0xcbf1bf) {
                return _0x4b8489(_0xcbf1bf);
            },
            'udxnq': '2|6|3|1|8|10|7|11|9|0|4|5',
            'JvlFg': _0x5eab5f(0x7b9),
            'VnTpL': function(_0x143396, _0x365bf3) {
                return _0x143396 <= _0x365bf3;
            },
            'zXsnd': function(_0x428a07, _0x4db160) {
                return _0x428a07 <= _0x4db160;
            },
            'wElEg': function(_0x1e01ad, _0x7c2eb5) {
                return _0x1e01ad == _0x7c2eb5;
            },
            'KAbcO': function(_0x19e5de, _0x277ddf) {
                return _0x19e5de >= _0x277ddf;
            },
            'VjvJS': function(_0x19d415, _0x24435f) {
                return _0x19d415 <= _0x24435f;
            },
            'rMIKl': function(_0x10154a, _0x4d699a) {
                return _0x10154a == _0x4d699a;
            },
            'BsVne': function(_0x165ee0, _0x182d8e) {
                return _0x165ee0 == _0x182d8e;
            },
            'MNwTF': function(_0x4ffed7, _0x3aa6d6) {
                return _0x4ffed7 == _0x3aa6d6;
            },
            'YEqaH': function(_0x1bf0d8, _0x157170) {
                return _0x1bf0d8 == _0x157170;
            },
            'WVWPP': function(_0x151d3b, _0x2b72eb) {
                return _0x151d3b == _0x2b72eb;
            },
            'KseyA': 'capopensound',
            'qezSm': _0x5eab5f(0x4fa),
            'BKCEQ': function(_0x2f905e, _0x58aaeb) {
                return _0x2f905e + _0x58aaeb;
            },
            'wnCob': '0|2|4|5|6|7|3|1',
            'XQxqH': function(_0x214c63, _0x3ef1c2) {
                return _0x214c63(_0x3ef1c2);
            },
            'vgCmG': _0x5eab5f(0x2e9),
            'MnmAH': _0x5eab5f(0x5e0),
            'SVVqd': '3|0|2|4|1',
            'BqiTN': function(_0x4ccd5c, _0x13b4cf) {
                return _0x4ccd5c - _0x13b4cf;
            },
            'hUQkL': '5|2|1|4|0|3',
            'tdsqr': _0x5eab5f(0x376),
            'HoIld': function(_0x4362f3, _0xe1cfa) {
                return _0x4362f3 - _0xe1cfa;
            },
            'FxQWy': function(_0x125c5e, _0x1f1cf5) {
                return _0x125c5e == _0x1f1cf5;
            },
            'BNSOL': _0x5eab5f(0x9a5),
            'IWDAf': function(_0x2affa1, _0x2a8cc7) {
                return _0x2affa1 + _0x2a8cc7;
            },
            'eTMjZ': '5|1|6|4|0|2|3',
            'kfSuV': function(_0x22fec1, _0x20abf3) {
                return _0x22fec1 - _0x20abf3;
            },
            'JDNCv': function(_0x120d21, _0x93dbbd) {
                return _0x120d21 - _0x93dbbd;
            },
            'iovyQ': '5|6|0|4|3|1|2',
            'YWBdS': function(_0x5372d6, _0x4f8e9b) {
                return _0x5372d6 - _0x4f8e9b;
            },
            'YHxHt': function(_0x4ef934, _0x36e69e) {
                return _0x4ef934 == _0x36e69e;
            },
            'ovWyb': '0|2|1|3|6|4|5',
            'RbZLc': function(_0x48cd71, _0x119cce) {
                return _0x48cd71 == _0x119cce;
            },
            'wJfGP': '2|5|6|0|1|3|4',
            'uXheN': function(_0x1478d2, _0x5e4fa1) {
                return _0x1478d2 == _0x5e4fa1;
            },
            'KynDA': function(_0x16b2e6, _0x580c66) {
                return _0x16b2e6 == _0x580c66;
            },
            'TgMkq': function(_0x383066, _0x39fda5) {
                return _0x383066 - _0x39fda5;
            },
            'NrEBl': function(_0x41df88, _0x1d90fa) {
                return _0x41df88 && _0x1d90fa;
            },
            'dtOAb': function(_0x5a7062) {
                return _0x5a7062();
            },
            'NcKXK': function(_0x57bad0, _0x1f3e0c) {
                return _0x57bad0(_0x1f3e0c);
            },
            'vlTND': 'Back.easeOut',
            'DwhOe': _0x5eab5f(0x335),
            'rmrpJ': 'drag',
            'nRBYw': 'dragend',
            'nspTK': _0x5eab5f(0x82f),
            'Rugsa': _0x5eab5f(0x338),
            'xrnPt': _0x5eab5f(0x637),
            'JGMOT': _0x5eab5f(0x3b6)
        };

    function _0xf702a3() {
        var _0x38786d = _0x5eab5f;
        if (_0x11a58f[_0x38786d(0x7f3)](this[_0x38786d(0x374)][_0x38786d(0xa56)]['y'], 0x0) && _0x11a58f[_0x38786d(0x4c7)](this[_0x38786d(0x374)]['input']['y'], 0x258)) {
            var _0x43d9f8 = _0x11a58f['gqZaT'](_0x11a58f[_0x38786d(0x502)](_0x11a58f[_0x38786d(0x206)](game[_0x38786d(0x374)][_0x38786d(0x237)][pageNo][_0x38786d(0xa56)]['x'], 0xf), window[_0x38786d(0xad9)][_0x38786d(0xa80)]), 0x1f1),
                _0x4cf4d2 = _0x11a58f[_0x38786d(0x223)](_0x11a58f[_0x38786d(0xa90)](_0x11a58f[_0x38786d(0x206)](game[_0x38786d(0x374)][_0x38786d(0x237)][pageNo][_0x38786d(0xa56)]['y'], 0xf), window[_0x38786d(0xad9)][_0x38786d(0x2e1)]), 0xff);
            doll1eyeball['x'] = _0x43d9f8, doll1eyeball['y'] = _0x4cf4d2;
        }
    }
    game[_0x5eab5f(0x374)]['scenes'][pageNo][_0x5eab5f(0x465)][_0x5eab5f(0x85a)]({
        'targets': dressimg,
        'x': 876.5,
        'y': 273.5,
        'ease': _0x11a58f[_0x5eab5f(0x853)],
        'duration': 0x2bc,
        'onComplete': _0x3cad5f,
        'callbackScope': this
    }), blinktimer = game[_0x5eab5f(0x374)]['scenes'][pageNo][_0x5eab5f(0x48f)]['addEvent']({
        'delay': 0xc8,
        'callback': _0x10b1c9,
        'callbackScope': this
    });

    function _0x10b1c9() {
        var _0x4f642b = _0x5eab5f;
        doll1eyeopen[_0x4f642b(0xa6e)] = !![], doll1eyeclose[_0x4f642b(0xa6e)] = ![], doll1eyeclose1[_0x4f642b(0xa6e)] = ![], blinktimer2 = game['scene']['scenes'][pageNo][_0x4f642b(0x48f)][_0x4f642b(0x85d)]({
            'delay': 0xfa0,
            'callback': _0x526afd,
            'callbackScope': this
        });
    }

    function _0x526afd() {
        var _0x17e5dd = _0x5eab5f;
        doll1eyeopen[_0x17e5dd(0xa6e)] = ![], doll1eyeclose[_0x17e5dd(0xa6e)] = !![], doll1eyeclose1[_0x17e5dd(0xa6e)] = !![], blinktimer3 = game['scene']['scenes'][pageNo][_0x17e5dd(0x48f)]['addEvent']({
            'delay': 0xc8,
            'callback': _0x10b1c9,
            'callbackScope': this
        });
    }

    function _0x505b29() {
        var _0x3122c9 = _0x5eab5f;
        FabboxSDK['showAd'](_0x3122c9(0x638), function() {
            var _0x44c898 = _0x3122c9;
            FabboxSDK[_0x44c898(0x242)]();
        });
    }
    game[_0x5eab5f(0x374)][_0x5eab5f(0x237)][pageNo][_0x5eab5f(0xa56)]['on'](_0x11a58f['DwhOe'], function(_0x1cd14e, _0x130906, _0x1efaf6, _0x3e8f52) {
        var _0x4a0cba = _0x5eab5f,
            _0x424dc4 = _0x11a58f['Vxblt'][_0x4a0cba(0xa4e)]('|'),
            _0x1cb439 = 0x0;
        while (!![]) {
            switch (_0x424dc4[_0x1cb439++]) {
                case '0':
                    handindication[_0x4a0cba(0x7a8)](![]);
                    continue;
                case '1':
                    _0x11a58f[_0x4a0cba(0x5a1)](nupdatekey, _0x4a0cba(0x4c6)) && (pimpleremoverhit[_0x4a0cba(0xa6e)] = !![], pimpleremover['angle'] = -0x12);
                    continue;
                case '2':
                    nupdatekey = _0x130906[_0x4a0cba(0x73d)]['key'][_0x4a0cba(0x5f7)](0x0, -0x1);
                    continue;
                case '3':
                    _0x11a58f[_0x4a0cba(0x5a1)](nupdatekey, _0x11a58f[_0x4a0cba(0x9cd)]) && (facewashhit['visible'] = !![], facewashimg[_0x4a0cba(0x963)] = 0x27);
                    continue;
                case '4':
                    level1t1 && level1t1[_0x4a0cba(0x971)]();
                    continue;
                case '5':
                    _0x11a58f[_0x4a0cba(0x5cc)](nupdatekey, _0x4a0cba(0x9e2)) && (sprayhit[_0x4a0cba(0xa6e)] = !![]);
                    continue;
                case '6':
                    level1handtween[_0x4a0cba(0xaa6)]();
                    continue;
                case '7':
                    game[_0x4a0cba(0x374)]['scenes'][pageNo]['input']['on'](_0x11a58f[_0x4a0cba(0x9c6)], _0xf702a3);
                    continue;
                case '8':
                    level1handtween1[_0x4a0cba(0x971)]();
                    continue;
                case '9':
                    nupdatekey == _0x4a0cba(0x567) && _0x11a58f[_0x4a0cba(0x383)](nupdatesno, 0x2) && (cucumberhit2['visible'] = !![]);
                    continue;
                case '10':
                    _0x11a58f[_0x4a0cba(0x425)](nupdatekey, _0x4a0cba(0x28f)) && (towelhit['visible'] = !![]);
                    continue;
                case '11':
                    nupdatesno = _0x130906[_0x4a0cba(0x73d)][_0x4a0cba(0x7ef)]['charAt'](_0x11a58f[_0x4a0cba(0x72d)](_0x130906[_0x4a0cba(0x73d)][_0x4a0cba(0x7ef)][_0x4a0cba(0xac1)], 0x1));
                    continue;
                case '12':
                    _0x11a58f[_0x4a0cba(0x649)](nupdatekey, _0x11a58f['OjiwZ']) && (facemaskhit[_0x4a0cba(0xa6e)] = !![]);
                    continue;
                case '13':
                    nupdatekey == _0x11a58f[_0x4a0cba(0x6b5)] && (scrubbinghit['visible'] = !![]);
                    continue;
                case '14':
                    nupdatekey == _0x11a58f['bhybw'] && (creamhandhit[_0x4a0cba(0xa6e)] = !![]);
                    continue;
                case '15':
                    _0x11a58f[_0x4a0cba(0x1f0)](nupdatekey, _0x11a58f[_0x4a0cba(0xa54)]) && nupdatesno == 0x1 && (cucumberhit1[_0x4a0cba(0xa6e)] = !![]);
                    continue;
                case '16':
                    nupdatekey == _0x11a58f[_0x4a0cba(0x239)] && (dresshit[_0x4a0cba(0xa6e)] = !![]);
                    continue;
                case '17':
                    _0x11a58f[_0x4a0cba(0x3e1)](playsoundeffects, _0x11a58f[_0x4a0cba(0xabb)]);
                    continue;
                case '18':
                    nupdatekey == _0x11a58f[_0x4a0cba(0x41d)] && (eshaperhit['visible'] = !![], eshaper[_0x4a0cba(0x963)] = -8.5);
                    continue;
            }
            break;
        }
    }, this), game['scene'][_0x5eab5f(0x237)][pageNo][_0x5eab5f(0xa56)]['on'](_0x11a58f[_0x5eab5f(0x6be)], function(_0x1f3924, _0x8227ab, _0x51b7dc, _0x1898d7) {
        var _0x487476 = _0x5eab5f,
            _0x4ef2f7 = _0x487476(0x7ae)[_0x487476(0xa4e)]('|'),
            _0x46927b = 0x0;
        while (!![]) {
            switch (_0x4ef2f7[_0x46927b++]) {
                case '0':
                    _0x11a58f[_0x487476(0x2e0)](nupdatekey, _0x11a58f[_0x487476(0xa54)]) && nupdatesno == 0x1 && (cucumberhit1[_0x487476(0xa6e)] = !![]);
                    continue;
                case '1':
                    level1t1 && level1t1[_0x487476(0x971)]();
                    continue;
                case '2':
                    handindication[_0x487476(0x7a8)](![]);
                    continue;
                case '3':
                    _0x8227ab['y'] = _0x1898d7;
                    continue;
                case '4':
                    nupdatekey == 'dressim' && (dresshit[_0x487476(0xa6e)] = !![]);
                    continue;
                case '5':
                    level1handtween1[_0x487476(0x971)]();
                    continue;
                case '6':
                    nupdatekey == _0x487476(0x657) && (facewashhit[_0x487476(0xa6e)] = !![], facewashimg['angle'] = 0x27);
                    continue;
                case '7':
                    _0x11a58f[_0x487476(0x383)](nupdatekey, _0x11a58f[_0x487476(0x9d9)]) && (pimpleremoverhit[_0x487476(0xa6e)] = !![], pimpleremover[_0x487476(0x963)] = -0x12);
                    continue;
                case '8':
                    level1handtween[_0x487476(0xaa6)]();
                    continue;
                case '9':
                    _0x11a58f[_0x487476(0x449)](nupdatekey, _0x11a58f[_0x487476(0xa54)]) && nupdatesno == 0x2 && (cucumberhit2[_0x487476(0xa6e)] = !![]);
                    continue;
                case '10':
                    _0x11a58f['IavAa'](nupdatekey, _0x11a58f[_0x487476(0x6b5)]) && (scrubbinghit['visible'] = !![]);
                    continue;
                case '11':
                    _0x8227ab['x'] = _0x51b7dc;
                    continue;
                case '12':
                    _0x8227ab['setDepth'](0x1);
                    continue;
                case '13':
                    _0x11a58f[_0x487476(0x63e)](nupdatekey, _0x11a58f[_0x487476(0x523)]) && (creamhandhit['visible'] = !![]);
                    continue;
                case '14':
                    _0x11a58f[_0x487476(0x6e4)](nupdatekey, _0x11a58f[_0x487476(0x171)]) && (sprayhit[_0x487476(0xa6e)] = !![]);
                    continue;
                case '15':
                    nupdatekey == _0x11a58f['FhTLp'] && (towelhit[_0x487476(0xa6e)] = !![]);
                    continue;
                case '16':
                    _0x11a58f[_0x487476(0x383)](nupdatekey, _0x11a58f[_0x487476(0x41d)]) && (eshaperhit[_0x487476(0xa6e)] = !![], eshaper[_0x487476(0x963)] = -8.5);
                    continue;
                case '17':
                    _0x11a58f['Rlwat'](nupdatekey, _0x11a58f['OjiwZ']) && (facemaskhit['visible'] = !![]);
                    continue;
            }
            break;
        }
    }), game[_0x5eab5f(0x374)]['scenes'][pageNo][_0x5eab5f(0xa56)]['on'](_0x11a58f[_0x5eab5f(0x9b2)], function(_0x50d77f, _0x40f3f9) {
        var _0x2e799b = _0x5eab5f,
            _0x2f2c95 = {
                'bxGMF': function(_0xced299) {
                    return _0x11a58f['pJgsk'](_0xced299);
                },
                'saAYV': function(_0x29d261, _0x4686b6) {
                    return _0x29d261 + _0x4686b6;
                },
                'mTGLx': _0x11a58f[_0x2e799b(0x210)],
                'EHarK': _0x2e799b(0x901),
                'LKItc': _0x11a58f[_0x2e799b(0x5b3)],
                'PnNSy': _0x11a58f['CgQin'],
                'LWmwy': _0x2e799b(0x9c0),
                'NPTIs': function(_0x2d12ee, _0x39437b) {
                    var _0x6027cd = _0x2e799b;
                    return _0x11a58f[_0x6027cd(0x7aa)](_0x2d12ee, _0x39437b);
                },
                'RhKGf': _0x2e799b(0xa4d),
                'zcXFP': function(_0x143ea3, _0x176f70) {
                    var _0x2df14e = _0x2e799b;
                    return _0x11a58f[_0x2df14e(0x62d)](_0x143ea3, _0x176f70);
                },
                'xatqf': _0x11a58f[_0x2e799b(0x953)],
                'ZSGdh': function(_0x1d6886, _0x35d561) {
                    return _0x11a58f['OTABY'](_0x1d6886, _0x35d561);
                },
                'pMTiS': function(_0xb8d614, _0x5a3797) {
                    return _0xb8d614(_0x5a3797);
                },
                'hOveV': _0x11a58f[_0x2e799b(0x1c1)],
                'JvKuU': _0x11a58f['ZpelX'],
                'hoDNT': function(_0x351917, _0x43de3c) {
                    var _0x29bdbf = _0x2e799b;
                    return _0x11a58f[_0x29bdbf(0x3e1)](_0x351917, _0x43de3c);
                },
                'iHWxk': function(_0x1f7e02, _0x27f4f7) {
                    return _0x11a58f['VapAB'](_0x1f7e02, _0x27f4f7);
                },
                'JazuC': _0x2e799b(0x7b5),
                'mxSpk': function(_0x2c6944, _0x15bf8d) {
                    var _0x2a26d7 = _0x2e799b;
                    return _0x11a58f[_0x2a26d7(0x7e2)](_0x2c6944, _0x15bf8d);
                },
                'fTnHy': 'stargilter',
                'sOCcc': _0x11a58f[_0x2e799b(0x8ae)],
                'SJdHJ': _0x11a58f[_0x2e799b(0x93d)]
            };
        game[_0x2e799b(0x374)][_0x2e799b(0x237)][pageNo][_0x2e799b(0xa56)][_0x2e799b(0x9f9)]('pointermove', _0xf702a3), doll1eyeball['x'] = 502.5, doll1eyeball['y'] = 259.5, sno = _0x40f3f9[_0x2e799b(0x73d)][_0x2e799b(0x7ef)]['substr'](0x9), level1dragfinished = !![], level1handtween[_0x2e799b(0xaa6)](), level1handtween1[_0x2e799b(0x971)]();
        if (_0x11a58f['pkBbR'](this[_0x2e799b(0x374)][_0x2e799b(0xa56)]['x'], 0x11d) && _0x11a58f[_0x2e799b(0xa25)](this[_0x2e799b(0x374)]['input']['x'], 0x302) && this['scene'][_0x2e799b(0xa56)]['y'] >= 0x12c && _0x11a58f[_0x2e799b(0x65e)](this[_0x2e799b(0x374)][_0x2e799b(0xa56)]['y'], 0x258) && _0x11a58f[_0x2e799b(0x8cc)](nupdatekey, _0x11a58f[_0x2e799b(0x239)])) {
            _0x11a58f[_0x2e799b(0xa6d)](playsoundeffects, _0x11a58f[_0x2e799b(0x2ca)]), doll1bhair['visible'] = ![], dresshit[_0x2e799b(0xa6e)] = ![], dressimg[_0x2e799b(0xa6e)] = ![], dressimg[_0x2e799b(0x964)](), doll1dress[_0x2e799b(0x254)](0x1), doll1hair[_0x2e799b(0x254)](0x1), doll1dresscap[_0x2e799b(0x254)](0x1), doll1dress[_0x2e799b(0x67d)](1.1), doll1dresscap[_0x2e799b(0x67d)](1.1), game['scene'][_0x2e799b(0x237)][pageNo][_0x2e799b(0x465)][_0x2e799b(0x85a)]({
                'targets': doll1dress,
                'scale': 0x1,
                'ease': 'Linear',
                'duration': 0x12c
            }), game[_0x2e799b(0x374)][_0x2e799b(0x237)][pageNo][_0x2e799b(0x465)][_0x2e799b(0x85a)]({
                'targets': doll1dresscap,
                'scale': 0x1,
                'ease': _0x11a58f[_0x2e799b(0x634)],
                'duration': 0x12c
            }), doll1dressshadow[_0x2e799b(0xa6e)] = !![], game[_0x2e799b(0x374)][_0x2e799b(0x237)][pageNo][_0x2e799b(0x48f)]['addEvent']({
                'delay': 0x3e8,
                'callback': _0x3a8562,
                'callbackScope': this
            });

            function _0x3a8562() {
                var _0x1ea4ec = _0x2e799b;
                game[_0x1ea4ec(0x374)][_0x1ea4ec(0x237)][pageNo][_0x1ea4ec(0x48f)][_0x1ea4ec(0x85d)]({
                    'delay': 0x64,
                    'callback': _0x45034b,
                    'callbackScope': this
                }), game[_0x1ea4ec(0x374)][_0x1ea4ec(0x237)][pageNo][_0x1ea4ec(0x465)][_0x1ea4ec(0x85a)]({
                    'targets': facewashimg,
                    'x': 860.5,
                    'y': 275.5,
                    'ease': _0x11a58f['CgQin'],
                    'duration': 0x12c,
                    'callbackScope': this
                }), facewashimg[_0x1ea4ec(0xa74)]({
                    'draggable': !![],
                    'useHandCursor': !![]
                }), level1t1 && level1t1[_0x1ea4ec(0x971)](), level1t1 = game[_0x1ea4ec(0x374)][_0x1ea4ec(0x237)][pageNo]['time'][_0x1ea4ec(0x85d)]({
                    'delay': 0x3e8,
                    'callback': _0x486b1d,
                    'callbackScope': this
                });
            }
        } else {
            if (this['scene'][_0x2e799b(0xa56)]['x'] >= 0x154 && _0x11a58f[_0x2e799b(0x4c7)](this[_0x2e799b(0x374)][_0x2e799b(0xa56)]['x'], 0x2b2) && _0x11a58f[_0x2e799b(0x7f3)](this[_0x2e799b(0x374)]['input']['y'], 0x6e) && this[_0x2e799b(0x374)][_0x2e799b(0xa56)]['y'] <= 0x1b8 && _0x11a58f['daska'](nupdatekey, _0x11a58f['rtLCO'])) {
                facewashhit[_0x2e799b(0xa6e)] = ![], facewashimg[_0x2e799b(0x964)](), game[_0x2e799b(0x374)][_0x2e799b(0x237)][pageNo]['time'][_0x2e799b(0x85d)]({
                    'delay': 0xc8,
                    'callback': _0x49fdbf,
                    'callbackScope': this
                });

                function _0x49fdbf() {
                    var _0x454665 = _0x2e799b,
                        _0x15b838 = _0x11a58f[_0x454665(0x408)]['split']('|'),
                        _0x32b681 = 0x0;
                    while (!![]) {
                        switch (_0x15b838[_0x32b681++]) {
                            case '0':
                                game[_0x454665(0x374)]['scenes'][pageNo][_0x454665(0x465)][_0x454665(0x85a)]({
                                    'targets': game[_0x11a58f[_0x454665(0x223)](_0x11a58f[_0x454665(0x210)], 0x1)],
                                    'alpha': 0x1,
                                    'ease': 'Linear',
                                    'duration': 0xc8
                                });
                                continue;
                            case '1':
                                _0x3c98b5();
                                continue;
                            case '2':
                                facewashimg['x'] = 0x263;
                                continue;
                            case '3':
                                game['scene'][_0x454665(0x237)][pageNo]['time'][_0x454665(0x85d)]({
                                    'delay': 0x226,
                                    'callback': _0x17d4e6,
                                    'callbackScope': this
                                });
                                continue;
                            case '4':
                                facewashimg['y'] = 0xe9;
                                continue;
                            case '5':
                                game['scene']['scenes'][pageNo][_0x454665(0x465)][_0x454665(0x85a)]({
                                    'targets': facewashimg,
                                    'x': 654.5,
                                    'y': 0xe1,
                                    'ease': _0x11a58f[_0x454665(0x634)],
                                    'duration': 0x1f4,
                                    'callbackScope': this
                                });
                                continue;
                        }
                        break;
                    }
                }

                function _0x17d4e6() {
                    var _0x4440fd = _0x2e799b;
                    game[_0x4440fd(0x374)][_0x4440fd(0x237)][pageNo][_0x4440fd(0x465)][_0x4440fd(0x85a)]({
                        'targets': facewashimg,
                        'x': 0x23e,
                        'y': 0xe5,
                        'ease': _0x11a58f[_0x4440fd(0x634)],
                        'duration': 0x12c,
                        'onComplete': _0x309e2d
                    });
                }

                function _0x309e2d() {
                    var _0x20a2a1 = _0x2e799b,
                        _0x2705b7 = '1|4|0|3|5|2' ['split']('|'),
                        _0x22db1b = 0x0;
                    while (!![]) {
                        switch (_0x2705b7[_0x22db1b++]) {
                            case '0':
                                _0x3c98b5();
                                continue;
                            case '1':
                                facewashimg['x'] = 0x23e;
                                continue;
                            case '2':
                                game[_0x20a2a1(0x374)][_0x20a2a1(0x237)][pageNo][_0x20a2a1(0x48f)][_0x20a2a1(0x85d)]({
                                    'delay': 0x226,
                                    'callback': _0x175e57,
                                    'callbackScope': this
                                });
                                continue;
                            case '3':
                                game[_0x20a2a1(0x374)][_0x20a2a1(0x237)][pageNo][_0x20a2a1(0x465)][_0x20a2a1(0x85a)]({
                                    'targets': facewashimg,
                                    'x': 0x23c,
                                    'y': 0xc0,
                                    'ease': _0x11a58f['YveXS'],
                                    'duration': 0x1f4,
                                    'callbackScope': this
                                });
                                continue;
                            case '4':
                                facewashimg['y'] = 0xe5;
                                continue;
                            case '5':
                                game[_0x20a2a1(0x374)]['scenes'][pageNo][_0x20a2a1(0x465)][_0x20a2a1(0x85a)]({
                                    'targets': game[_0x11a58f['KHigi'](_0x20a2a1(0x662), 0x4)],
                                    'alpha': 0x1,
                                    'ease': _0x11a58f['YveXS'],
                                    'duration': 0xc8
                                });
                                continue;
                        }
                        break;
                    }
                }

                function _0x175e57() {
                    var _0x54a815 = _0x2e799b;
                    game[_0x54a815(0x374)][_0x54a815(0x237)][pageNo][_0x54a815(0x465)]['add']({
                        'targets': facewashimg,
                        'x': 0x20f,
                        'y': 0xf3,
                        'ease': _0x11a58f[_0x54a815(0x634)],
                        'duration': 0x12c,
                        'onComplete': _0x3a408a
                    });
                }

                function _0x3a408a() {
                    var _0x26368d = _0x2e799b;
                    _0x2f2c95['bxGMF'](_0x3c98b5), game['scene']['scenes'][pageNo][_0x26368d(0x465)][_0x26368d(0x85a)]({
                        'targets': facewashimg,
                        'x': 0x1e7,
                        'y': 0xe8,
                        'ease': _0x26368d(0x901),
                        'duration': 0x1f4,
                        'callbackScope': this
                    }), game[_0x26368d(0x374)][_0x26368d(0x237)][pageNo][_0x26368d(0x465)][_0x26368d(0x85a)]({
                        'targets': game[_0x2f2c95[_0x26368d(0x3c3)](_0x2f2c95[_0x26368d(0x40d)], 0x3)],
                        'alpha': 0x1,
                        'ease': _0x2f2c95['EHarK'],
                        'duration': 0xc8
                    }), game[_0x26368d(0x374)][_0x26368d(0x237)][pageNo]['time'][_0x26368d(0x85d)]({
                        'delay': 0x226,
                        'callback': _0x2cdfff,
                        'callbackScope': this
                    });
                }

                function _0x2cdfff() {
                    var _0x509a76 = _0x2e799b;
                    game['scene'][_0x509a76(0x237)][pageNo][_0x509a76(0x465)][_0x509a76(0x85a)]({
                        'targets': facewashimg,
                        'x': 594.5,
                        'y': 0x134,
                        'ease': _0x509a76(0x901),
                        'duration': 0x12c,
                        'onComplete': _0xdf02b5
                    });
                }

                function _0xdf02b5() {
                    var _0x36f103 = _0x2e799b,
                        _0x55a374 = _0x11a58f[_0x36f103(0xa2b)][_0x36f103(0xa4e)]('|'),
                        _0x263685 = 0x0;
                    while (!![]) {
                        switch (_0x55a374[_0x263685++]) {
                            case '0':
                                facewashimg['y'] = 0x134;
                                continue;
                            case '1':
                                game['scene']['scenes'][pageNo][_0x36f103(0x465)][_0x36f103(0x85a)]({
                                    'targets': facewashimg,
                                    'x': 0x22b,
                                    'y': 0x136,
                                    'ease': _0x11a58f[_0x36f103(0x634)],
                                    'duration': 0x1f4,
                                    'callbackScope': this
                                });
                                continue;
                            case '2':
                                game[_0x36f103(0x374)]['scenes'][pageNo][_0x36f103(0x465)]['add']({
                                    'targets': game[_0x11a58f[_0x36f103(0x210)] + 0x5],
                                    'alpha': 0x1,
                                    'ease': _0x11a58f[_0x36f103(0x634)],
                                    'duration': 0xc8
                                });
                                continue;
                            case '3':
                                _0x3c98b5();
                                continue;
                            case '4':
                                game[_0x36f103(0x374)][_0x36f103(0x237)][pageNo][_0x36f103(0x48f)][_0x36f103(0x85d)]({
                                    'delay': 0x226,
                                    'callback': _0x3d9bef,
                                    'callbackScope': this
                                });
                                continue;
                            case '5':
                                facewashimg['x'] = 594.5;
                                continue;
                        }
                        break;
                    }
                }

                function _0x3d9bef() {
                    var _0x2742cb = _0x2e799b;
                    game[_0x2742cb(0x374)][_0x2742cb(0x237)][pageNo][_0x2742cb(0x465)][_0x2742cb(0x85a)]({
                        'targets': facewashimg,
                        'x': 0x258,
                        'y': 0x64,
                        'ease': _0x11a58f['YveXS'],
                        'duration': 0x12c,
                        'onComplete': _0xdd20e3
                    });
                }

                function _0xdd20e3() {
                    var _0x498f09 = _0x2e799b;
                    facewashimg['x'] = 0x258, facewashimg['y'] = 0x64, _0x2f2c95['bxGMF'](_0x3c98b5), game[_0x498f09(0x374)][_0x498f09(0x237)][pageNo]['tweens'][_0x498f09(0x85a)]({
                        'targets': facewashimg,
                        'x': 547.5,
                        'y': 0x57,
                        'ease': _0x498f09(0x901),
                        'duration': 0x1f4,
                        'callbackScope': this
                    }), game['scene']['scenes'][pageNo][_0x498f09(0x465)][_0x498f09(0x85a)]({
                        'targets': game[_0x2f2c95[_0x498f09(0x40d)] + 0x2],
                        'alpha': 0x1,
                        'ease': _0x2f2c95[_0x498f09(0x63b)],
                        'duration': 0xc8
                    }), game[_0x498f09(0x374)][_0x498f09(0x237)][pageNo][_0x498f09(0x48f)][_0x498f09(0x85d)]({
                        'delay': 0x226,
                        'callback': _0xdc1c1f,
                        'callbackScope': this
                    });
                }

                function _0xdc1c1f() {
                    var _0x57e571 = _0x2e799b;
                    playsoundeffects(_0x11a58f[_0x57e571(0x953)]), facewashimg[_0x57e571(0x254)](0x0), game['scene'][_0x57e571(0x237)][pageNo]['tweens'][_0x57e571(0x85a)]({
                        'targets': facewashimg,
                        'x': 0x4b0,
                        'y': 0x1df,
                        'ease': _0x57e571(0x901),
                        'duration': 0x12c,
                        'onComplete': _0x4a3e2a
                    });
                }

                function _0x4a3e2a() {
                    var _0x5dad97 = _0x2e799b,
                        _0x3e0249 = _0x2f2c95['LKItc'][_0x5dad97(0xa4e)]('|'),
                        _0x30c774 = 0x0;
                    while (!![]) {
                        switch (_0x3e0249[_0x30c774++]) {
                            case '0':
                                level1t1 && level1t1[_0x5dad97(0x971)]();
                                continue;
                            case '1':
                                scrubbinghand[_0x5dad97(0xa74)]({
                                    'draggable': !![],
                                    'useHandCursor': !![]
                                });
                                continue;
                            case '2':
                                level1t1 = game[_0x5dad97(0x374)]['scenes'][pageNo][_0x5dad97(0x48f)]['addEvent']({
                                    'delay': 0x3e8,
                                    'callback': _0x486b1d,
                                    'callbackScope': this
                                });
                                continue;
                            case '3':
                                game['scene'][_0x5dad97(0x237)][pageNo]['tweens']['add']({
                                    'targets': scrubbinghand,
                                    'x': 0x360,
                                    'y': 273.5,
                                    'ease': _0x2f2c95[_0x5dad97(0x53f)],
                                    'duration': 0x12c,
                                    'callbackScope': this
                                });
                                continue;
                            case '4':
                                game['scene'][_0x5dad97(0x237)][pageNo][_0x5dad97(0x48f)][_0x5dad97(0x85d)]({
                                    'delay': 0x64,
                                    'callback': _0x45034b,
                                    'callbackScope': this
                                });
                                continue;
                        }
                        break;
                    }
                }

                function _0x3c98b5() {
                    var _0x30cffe = _0x2e799b;
                    playsoundeffects(_0x2f2c95[_0x30cffe(0x356)]), facewashimg[_0x30cffe(0x254)](0x2), game['scene'][_0x30cffe(0x237)][pageNo]['time']['addEvent']({
                        'delay': 0x1f4,
                        'callback': _0x3b97bc,
                        'callbackScope': this
                    });
                }

                function _0x3b97bc() {
                    var _0x170f33 = _0x2e799b;
                    facewashimg[_0x170f33(0x254)](0x1);
                }
            } else {
                if (_0x11a58f[_0x2e799b(0x72a)](this['scene']['input']['x'], 0x154) && this[_0x2e799b(0x374)][_0x2e799b(0xa56)]['x'] <= 0x2b2 && _0x11a58f[_0x2e799b(0x4b6)](this[_0x2e799b(0x374)]['input']['y'], 0x6e) && _0x11a58f[_0x2e799b(0x195)](this[_0x2e799b(0x374)][_0x2e799b(0xa56)]['y'], 0x1b8) && _0x11a58f[_0x2e799b(0x580)](nupdatekey, _0x11a58f[_0x2e799b(0x6b5)])) {
                    blinktimer[_0x2e799b(0x971)](), blinktimer2[_0x2e799b(0x971)](), blinktimer3[_0x2e799b(0x971)](), doll1eyeclose[_0x2e799b(0xa6e)] = !![], doll1eyeopen['visible'] = ![], scrubbinghit[_0x2e799b(0xa6e)] = ![], scrubbinghand[_0x2e799b(0x964)](), scrubbinghand['x'] = 514.5, scrubbinghand['y'] = 322.5, game['scene'][_0x2e799b(0x237)][pageNo]['time'][_0x2e799b(0x85d)]({
                        'delay': 0xc8,
                        'callback': _0x1766fa,
                        'callbackScope': this
                    }), spongestart = 0x1, spongesound = game[_0x2e799b(0x374)]['scenes'][pageNo]['sound']['add'](_0x11a58f[_0x2e799b(0x212)]), spongesound[_0x2e799b(0x3ca)]({
                        'loop': !![]
                    });
                    !isMuted ? spongesound[_0x2e799b(0x400)]() : spongesound[_0x2e799b(0x3a8)]();

                    function _0x1766fa() {
                        var _0x59463a = _0x2e799b;
                        game[_0x59463a(0x374)][_0x59463a(0x237)][pageNo]['tweens'][_0x59463a(0x85a)]({
                            'targets': scrubbinghand,
                            'x': 0x1ac,
                            'y': 286.5,
                            'ease': _0x11a58f[_0x59463a(0x634)],
                            'duration': 0x258,
                            'callbackScope': this
                        });
                        for (i = 0x1; _0x11a58f[_0x59463a(0x65e)](i, 0x2); i++) {
                            game[_0x59463a(0x374)][_0x59463a(0x237)][pageNo][_0x59463a(0x465)][_0x59463a(0x85a)]({
                                'targets': game[_0x59463a(0xa4d) + i],
                                'alpha': 0x1,
                                'ease': _0x11a58f[_0x59463a(0x634)],
                                'duration': 0x1f4,
                                'delay': i * 0xc8
                            });
                        }
                        game[_0x59463a(0x374)][_0x59463a(0x237)][pageNo][_0x59463a(0x48f)][_0x59463a(0x85d)]({
                            'delay': 0x226,
                            'callback': _0x448508,
                            'callbackScope': this
                        });
                    }

                    function _0x448508() {
                        var _0x1214f2 = _0x2e799b;
                        game[_0x1214f2(0x374)]['scenes'][pageNo]['tweens'][_0x1214f2(0x85a)]({
                            'targets': scrubbinghand,
                            'x': 0x220,
                            'y': 0xd1,
                            'ease': _0x2f2c95[_0x1214f2(0x63b)],
                            'duration': 0x1f4,
                            'yoyo': !![],
                            'onComplete': _0x1f2048
                        });
                        for (i = 0x3; i <= 0x4; i++) {
                            game[_0x1214f2(0x374)][_0x1214f2(0x237)][pageNo][_0x1214f2(0x465)]['add']({
                                'targets': game[_0x2f2c95[_0x1214f2(0x6f1)](_0x2f2c95[_0x1214f2(0x24a)], i)],
                                'alpha': 0x1,
                                'ease': _0x1214f2(0x901),
                                'duration': 0x12c,
                                'delay': _0x2f2c95[_0x1214f2(0x854)](i, 0xc8)
                            });
                        }
                    }

                    function _0x1f2048() {
                        var _0x1d016e = _0x2e799b;
                        scrubbinghand['x'] = 0x1ac, scrubbinghand['y'] = 286.5;
                        for (i = 0x1; i <= 0x5; i++) {
                            game[_0x1d016e(0x374)]['scenes'][pageNo][_0x1d016e(0x465)][_0x1d016e(0x85a)]({
                                'targets': game[_0x11a58f[_0x1d016e(0x94b)](_0x11a58f[_0x1d016e(0x210)], i)],
                                'alpha': 0x0,
                                'ease': _0x11a58f[_0x1d016e(0x634)],
                                'duration': 0x1f4,
                                'delay': i * 0xc8
                            });
                        }
                        game[_0x1d016e(0x374)][_0x1d016e(0x237)][pageNo][_0x1d016e(0x465)]['add']({
                            'targets': scrubbinghand,
                            'x': 0x219,
                            'y': 0x191,
                            'ease': 'Linear',
                            'yoyo': !![],
                            'duration': 0x190,
                            'onComplete': _0x13941b
                        });
                        for (i = 0x6; _0x11a58f[_0x1d016e(0xa25)](i, 0x7); i++) {
                            game['scene'][_0x1d016e(0x237)][pageNo][_0x1d016e(0x465)][_0x1d016e(0x85a)]({
                                'targets': game[_0x11a58f[_0x1d016e(0x94b)](_0x11a58f[_0x1d016e(0x648)], i)],
                                'alpha': 0x1,
                                'ease': 'Linear',
                                'duration': 0xc8,
                                'delay': i * 0x64
                            });
                        }
                    }

                    function _0x13941b() {
                        var _0x80cf6f = _0x2e799b;
                        game[_0x80cf6f(0x374)][_0x80cf6f(0x237)][pageNo]['tweens'][_0x80cf6f(0x85a)]({
                            'targets': scrubbinghand,
                            'x': 0x231,
                            'y': 0x14f,
                            'ease': _0x11a58f['YveXS'],
                            'duration': 0x1f4,
                            'callbackScope': this
                        }), game[_0x80cf6f(0x374)]['scenes'][pageNo][_0x80cf6f(0x465)][_0x80cf6f(0x85a)]({
                            'targets': game[_0x11a58f[_0x80cf6f(0x648)] + 0x5],
                            'alpha': 0x1,
                            'ease': _0x11a58f['YveXS'],
                            'duration': 0x1f4,
                            'delay': 0xc8
                        }), game[_0x80cf6f(0x374)][_0x80cf6f(0x237)][pageNo][_0x80cf6f(0x48f)][_0x80cf6f(0x85d)]({
                            'delay': 0x226,
                            'callback': _0x5d8d96,
                            'callbackScope': this
                        });
                    }

                    function _0x5d8d96() {
                        var _0x523347 = _0x2e799b;
                        spongestart = 0x0, spongesound[_0x523347(0x3a8)](), playsoundeffects(_0x2f2c95[_0x523347(0x20b)]), game[_0x523347(0x374)][_0x523347(0x237)][pageNo]['tweens'][_0x523347(0x85a)]({
                            'targets': scrubbinghand,
                            'x': 0x4b0,
                            'y': 0x1df,
                            'ease': _0x523347(0x901),
                            'duration': 0x12c,
                            'onComplete': _0x37c4b3
                        });
                    }

                    function _0x37c4b3() {
                        var _0x4fb449 = _0x2e799b;
                        game[_0x4fb449(0x374)]['scenes'][pageNo][_0x4fb449(0x48f)][_0x4fb449(0x85d)]({
                            'delay': 0x1f4,
                            'callback': _0x45034b,
                            'callbackScope': this
                        }), game[_0x4fb449(0x374)][_0x4fb449(0x237)][pageNo][_0x4fb449(0x465)]['add']({
                            'targets': towel,
                            'x': 862.5,
                            'y': 0x114,
                            'ease': _0x2f2c95[_0x4fb449(0x53f)],
                            'duration': 0x12c,
                            'delay': 0x1f4,
                            'callbackScope': this
                        }), towel['setInteractive']({
                            'draggable': !![],
                            'useHandCursor': !![]
                        }), level1t1 && level1t1[_0x4fb449(0x971)](), level1t1 = game['scene'][_0x4fb449(0x237)][pageNo][_0x4fb449(0x48f)][_0x4fb449(0x85d)]({
                            'delay': 0x3e8,
                            'callback': _0x486b1d,
                            'callbackScope': this
                        });
                    }
                } else {
                    if (_0x11a58f['ztFTS'](this[_0x2e799b(0x374)][_0x2e799b(0xa56)]['x'], 0x154) && _0x11a58f[_0x2e799b(0x195)](this[_0x2e799b(0x374)]['input']['x'], 0x2b2) && this[_0x2e799b(0x374)]['input']['y'] >= 0x6e && _0x11a58f['HNPEa'](this[_0x2e799b(0x374)][_0x2e799b(0xa56)]['y'], 0x1b8) && _0x11a58f[_0x2e799b(0x6ee)](nupdatekey, _0x11a58f[_0x2e799b(0xa0e)])) {
                        towelhit[_0x2e799b(0xa6e)] = ![], towel[_0x2e799b(0x964)](), towel['x'] = 514.5, towel['y'] = 322.5, game[_0x2e799b(0x374)][_0x2e799b(0x237)][pageNo][_0x2e799b(0x48f)][_0x2e799b(0x85d)]({
                            'delay': 0xc8,
                            'callback': _0x1daa80,
                            'callbackScope': this
                        }), towelstart = 0x1, towelsound = game['scene'][_0x2e799b(0x237)][pageNo][_0x2e799b(0xabd)][_0x2e799b(0x85a)](_0x2e799b(0x60d)), towelsound[_0x2e799b(0x3ca)]({
                            'loop': !![]
                        });
                        !isMuted ? towelsound[_0x2e799b(0x400)]() : towelsound[_0x2e799b(0x3a8)]();

                        function _0x1daa80() {
                            var _0x4cb44d = _0x2e799b;
                            game[_0x4cb44d(0x374)][_0x4cb44d(0x237)][pageNo]['tweens'][_0x4cb44d(0x85a)]({
                                'targets': towel,
                                'x': 0x1ac,
                                'y': 286.5,
                                'ease': _0x11a58f[_0x4cb44d(0x634)],
                                'duration': 0x1f4,
                                'callbackScope': this
                            });
                            for (i = 0x1; _0x11a58f[_0x4cb44d(0x441)](i, 0x2); i++) {
                                game[_0x4cb44d(0x374)][_0x4cb44d(0x237)][pageNo][_0x4cb44d(0x465)][_0x4cb44d(0x85a)]({
                                    'targets': game[_0x11a58f['kjFxJ'](_0x4cb44d(0xa4d), i)],
                                    'alpha': 0x0,
                                    'ease': _0x11a58f[_0x4cb44d(0x634)],
                                    'duration': 0x190,
                                    'delay': _0x11a58f[_0x4cb44d(0x206)](i, 0xc8)
                                });
                            }
                            game[_0x4cb44d(0x374)][_0x4cb44d(0x237)][pageNo]['time'][_0x4cb44d(0x85d)]({
                                'delay': 0x226,
                                'callback': _0x370846,
                                'callbackScope': this
                            });
                        }

                        function _0x370846() {
                            var _0x4e9e52 = _0x2e799b;
                            game[_0x4e9e52(0x374)][_0x4e9e52(0x237)][pageNo][_0x4e9e52(0x465)][_0x4e9e52(0x85a)]({
                                'targets': towel,
                                'x': 479.5,
                                'y': 232.5,
                                'ease': _0x11a58f[_0x4e9e52(0x634)],
                                'duration': 0x190,
                                'callbackScope': this
                            }), game[_0x4e9e52(0x374)][_0x4e9e52(0x237)][pageNo][_0x4e9e52(0x465)][_0x4e9e52(0x85a)]({
                                'targets': game[_0x11a58f[_0x4e9e52(0x7aa)](_0x11a58f['sCLbu'], 0x3)],
                                'alpha': 0x0,
                                'ease': _0x11a58f[_0x4e9e52(0x634)],
                                'duration': 0x1c2,
                                'delay': 0xc8
                            }), game['scene']['scenes'][pageNo]['time']['addEvent']({
                                'delay': 0x190,
                                'callback': _0x2a49a2,
                                'callbackScope': this
                            });
                        }

                        function _0x2a49a2() {
                            var _0x1deac0 = _0x2e799b;
                            game[_0x1deac0(0x374)][_0x1deac0(0x237)][pageNo][_0x1deac0(0x465)][_0x1deac0(0x85a)]({
                                'targets': towel,
                                'x': 0x235,
                                'y': 245.5,
                                'ease': _0x11a58f[_0x1deac0(0x634)],
                                'duration': 0x190
                            }), game[_0x1deac0(0x374)][_0x1deac0(0x237)][pageNo][_0x1deac0(0x465)]['add']({
                                'targets': game[_0x11a58f[_0x1deac0(0x648)] + 0x4],
                                'alpha': 0x0,
                                'ease': _0x11a58f[_0x1deac0(0x634)],
                                'duration': 0x1f4,
                                'delay': 0xc8
                            }), game['scene'][_0x1deac0(0x237)][pageNo]['time'][_0x1deac0(0x85d)]({
                                'delay': 0x190,
                                'callback': _0x2035a8,
                                'callbackScope': this
                            });
                        }

                        function _0x2035a8() {
                            var _0x179250 = _0x2e799b;
                            game[_0x179250(0x374)]['scenes'][pageNo][_0x179250(0x465)][_0x179250(0x85a)]({
                                'targets': towel,
                                'x': 0x22f,
                                'y': 302.5,
                                'ease': _0x2f2c95['EHarK'],
                                'duration': 0x190,
                                'callbackScope': this
                            }), game['scene'][_0x179250(0x237)][pageNo][_0x179250(0x465)][_0x179250(0x85a)]({
                                'targets': game[_0x2f2c95['NPTIs'](_0x2f2c95['RhKGf'], 0x5)],
                                'alpha': 0x0,
                                'ease': _0x2f2c95[_0x179250(0x63b)],
                                'duration': 0x190,
                                'delay': 0xc8
                            }), game[_0x179250(0x374)][_0x179250(0x237)][pageNo][_0x179250(0x48f)][_0x179250(0x85d)]({
                                'delay': 0x190,
                                'callback': _0x3f3ffd,
                                'callbackScope': this
                            });
                        }

                        function _0x3f3ffd() {
                            var _0x22de2a = _0x2e799b;
                            game[_0x22de2a(0x374)][_0x22de2a(0x237)][pageNo]['tweens'][_0x22de2a(0x85a)]({
                                'targets': doll1facedust,
                                'alpha': 0x0,
                                'ease': _0x2f2c95[_0x22de2a(0x63b)],
                                'duration': 0x1f4
                            }), game[_0x22de2a(0x374)][_0x22de2a(0x237)][pageNo][_0x22de2a(0x465)][_0x22de2a(0x85a)]({
                                'targets': towel,
                                'x': 0x1f6,
                                'y': 365.5,
                                'ease': _0x22de2a(0x901),
                                'duration': 0x190
                            }), game[_0x22de2a(0x374)]['scenes'][pageNo][_0x22de2a(0x465)]['add']({
                                'targets': game[_0x2f2c95[_0x22de2a(0x8c4)](_0x22de2a(0xa4d), 0x6)],
                                'alpha': 0x0,
                                'ease': 'Linear',
                                'duration': 0x190,
                                'delay': 0xc8
                            }), game[_0x22de2a(0x374)][_0x22de2a(0x237)][pageNo]['time'][_0x22de2a(0x85d)]({
                                'delay': 0x190,
                                'callback': _0x4f5e4c,
                                'callbackScope': this
                            });
                        }

                        function _0x4f5e4c() {
                            var _0x2f4a86 = _0x2e799b;
                            game[_0x2f4a86(0x374)][_0x2f4a86(0x237)][pageNo][_0x2f4a86(0x465)]['add']({
                                'targets': towel,
                                'x': 0x1a2,
                                'y': 322.5,
                                'ease': _0x11a58f[_0x2f4a86(0x634)],
                                'duration': 0x190,
                                'callbackScope': this
                            }), game[_0x2f4a86(0x374)][_0x2f4a86(0x237)][pageNo][_0x2f4a86(0x465)][_0x2f4a86(0x85a)]({
                                'targets': game[_0x11a58f[_0x2f4a86(0x223)]('bubble', 0x7)],
                                'alpha': 0x0,
                                'ease': _0x11a58f[_0x2f4a86(0x634)],
                                'duration': 0x190,
                                'delay': 0xc8
                            }), game[_0x2f4a86(0x374)][_0x2f4a86(0x237)][pageNo][_0x2f4a86(0x48f)][_0x2f4a86(0x85d)]({
                                'delay': 0x1f4,
                                'callback': _0x35d2dc,
                                'callbackScope': this
                            });
                        }

                        function _0x35d2dc() {
                            var _0x108172 = _0x2e799b;
                            towelstart = 0x0, towelsound[_0x108172(0x3a8)](), _0x2f2c95[_0x108172(0x6b4)](playsoundeffects, _0x2f2c95[_0x108172(0x20b)]), game[_0x108172(0x374)][_0x108172(0x237)][pageNo][_0x108172(0x465)]['add']({
                                'targets': towel,
                                'x': 0x4b0,
                                'y': 0x1df,
                                'ease': _0x108172(0x901),
                                'duration': 0x12c,
                                'onComplete': _0x61c6c1
                            });
                        }

                        function _0x61c6c1() {
                            var _0x3c7a6d = _0x2e799b,
                                _0x31f914 = _0x11a58f[_0x3c7a6d(0x3df)][_0x3c7a6d(0xa4e)]('|'),
                                _0x4d7199 = 0x0;
                            while (!![]) {
                                switch (_0x31f914[_0x4d7199++]) {
                                    case '0':
                                        blinktimer = game[_0x3c7a6d(0x374)][_0x3c7a6d(0x237)][pageNo][_0x3c7a6d(0x48f)]['addEvent']({
                                            'delay': 0xc8,
                                            'callback': _0x10b1c9,
                                            'callbackScope': this
                                        });
                                        continue;
                                    case '1':
                                        level1t1 && level1t1[_0x3c7a6d(0x971)]();
                                        continue;
                                    case '2':
                                        game['scene'][_0x3c7a6d(0x237)][pageNo]['tweens']['add']({
                                            'targets': eshaper,
                                            'angle': 0x168,
                                            'ease': _0x11a58f[_0x3c7a6d(0x634)],
                                            'duration': 0x12c,
                                            'delay': 0x1f4
                                        });
                                        continue;
                                    case '3':
                                        level1t1 = game[_0x3c7a6d(0x374)][_0x3c7a6d(0x237)][pageNo][_0x3c7a6d(0x48f)][_0x3c7a6d(0x85d)]({
                                            'delay': 0x3e8,
                                            'callback': _0x486b1d,
                                            'callbackScope': this
                                        });
                                        continue;
                                    case '4':
                                        eshaper[_0x3c7a6d(0xa74)]({
                                            'draggable': !![],
                                            'useHandCursor': !![]
                                        });
                                        continue;
                                    case '5':
                                        game[_0x3c7a6d(0x374)][_0x3c7a6d(0x237)][pageNo][_0x3c7a6d(0x465)]['add']({
                                            'targets': eshaper,
                                            'x': 0x336,
                                            'y': 0x107,
                                            'ease': _0x11a58f[_0x3c7a6d(0x1d6)],
                                            'duration': 0x1f4,
                                            'delay': 0x1f4
                                        });
                                        continue;
                                    case '6':
                                        game[_0x3c7a6d(0x374)][_0x3c7a6d(0x237)][pageNo][_0x3c7a6d(0x48f)][_0x3c7a6d(0x85d)]({
                                            'delay': 0x1f4,
                                            'callback': _0x45034b,
                                            'callbackScope': this
                                        });
                                        continue;
                                }
                                break;
                            }
                        }
                    } else {
                        if (_0x11a58f[_0x2e799b(0x952)](this[_0x2e799b(0x374)][_0x2e799b(0xa56)]['x'], 0x14a) && _0x11a58f[_0x2e799b(0x689)](this[_0x2e799b(0x374)][_0x2e799b(0xa56)]['x'], 0x2ee) && _0x11a58f[_0x2e799b(0x61e)](this['scene'][_0x2e799b(0xa56)]['y'], 0x64) && _0x11a58f['ZUsrS'](this[_0x2e799b(0x374)][_0x2e799b(0xa56)]['y'], 0x226) && nupdatekey == _0x11a58f[_0x2e799b(0x41d)]) {
                            eshaperhit['visible'] = ![], eshaper[_0x2e799b(0x964)](), eshaper['x'] = 0x261, eshaper['y'] = 277.5, eshapeani[_0x2e799b(0xa6e)] = !![], eshapeani1[_0x2e799b(0xa6e)] = !![], eshapeani2[_0x2e799b(0xa6e)] = !![], _0x11a58f[_0x2e799b(0xa6d)](playsoundeffects, _0x11a58f['ysUfT']), eshapeani[_0x2e799b(0x735)](0x2), eshapeani1[_0x2e799b(0x735)](0x2), eshapeani2[_0x2e799b(0x735)](0x2), eshapeani2[_0x2e799b(0x86e)][_0x2e799b(0x742)](_0x11a58f[_0x2e799b(0x1c1)]), eshapeani2[_0x2e799b(0x86e)]['play'](_0x11a58f['BieRC']), game[_0x2e799b(0x374)][_0x2e799b(0x237)][pageNo][_0x2e799b(0x48f)][_0x2e799b(0x85d)]({
                                'delay': 0x320,
                                'callback': _0x5ce27c,
                                'callbackScope': this
                            });

                            function _0x5ce27c() {
                                var _0x32ea50 = _0x2e799b;
                                eshapeani1[_0x32ea50(0x86e)][_0x32ea50(0x742)](_0x2f2c95[_0x32ea50(0x67b)]), eshapeani1[_0x32ea50(0x86e)][_0x32ea50(0x3ca)](_0x32ea50(0x6d3)), game[_0x32ea50(0x374)][_0x32ea50(0x237)][pageNo]['time'][_0x32ea50(0x85d)]({
                                    'delay': 0x1f4,
                                    'callback': _0x273a62,
                                    'callbackScope': this
                                });
                            }

                            function _0x273a62() {
                                var _0xf6adb = _0x2e799b;
                                eshapeani[_0xf6adb(0x86e)]['load'](_0x11a58f[_0xf6adb(0x1c1)]), eshapeani['anims'][_0xf6adb(0x3ca)](_0x11a58f[_0xf6adb(0x1c1)]);
                            }
                            game[_0x2e799b(0x374)][_0x2e799b(0x237)][pageNo][_0x2e799b(0x465)][_0x2e799b(0x85a)]({
                                'targets': eshaper,
                                'x': 0x228,
                                'y': 289.5,
                                'ease': _0x2e799b(0x901),
                                'duration': 0x3e8,
                                'delay': 0x1f4,
                                'onComplete': _0x290b3e
                            }), game['scene'][_0x2e799b(0x237)][pageNo]['tweens'][_0x2e799b(0x85a)]({
                                'targets': doll1lebrow,
                                'alpha': 0x0,
                                'ease': _0x11a58f['YveXS'],
                                'duration': 0x2bc,
                                'delay': 0x3e8
                            });

                            function _0x290b3e() {
                                var _0x4ba39b = _0x2e799b;
                                game[_0x4ba39b(0x374)]['scenes'][pageNo][_0x4ba39b(0x48f)][_0x4ba39b(0x85d)]({
                                    'delay': 0x258,
                                    'callback': _0x3874b1,
                                    'callbackScope': this
                                });
                            }

                            function _0x3874b1() {
                                var _0x578a4b = _0x2e799b,
                                    _0x527c77 = {
                                        'KqqQG': _0x2f2c95[_0x578a4b(0x67b)]
                                    };
                                _0x2f2c95[_0x578a4b(0x70e)](playsoundeffects, _0x578a4b(0x6b7)), eshapeani['x'] = 0x1f1, eshapeani['y'] = 0x122, game[_0x578a4b(0x374)][_0x578a4b(0x237)][pageNo]['time']['addEvent']({
                                    'delay': 0x1f4,
                                    'callback': _0x58188b,
                                    'callbackScope': this
                                });

                                function _0x58188b() {
                                    var _0x18a93b = _0x578a4b;
                                    eshapeani[_0x18a93b(0x86e)][_0x18a93b(0x742)](_0x527c77[_0x18a93b(0x7b6)]), eshapeani[_0x18a93b(0x86e)][_0x18a93b(0x3ca)](_0x527c77['KqqQG']), game[_0x18a93b(0x374)][_0x18a93b(0x237)][pageNo][_0x18a93b(0x48f)][_0x18a93b(0x85d)]({
                                        'delay': 0x320,
                                        'callback': _0x3100bb,
                                        'callbackScope': this
                                    });
                                }

                                function _0x3100bb() {
                                    var _0x579940 = _0x578a4b,
                                        _0x53f4d8 = _0x2f2c95[_0x579940(0x33f)][_0x579940(0xa4e)]('|'),
                                        _0x3fd66a = 0x0;
                                    while (!![]) {
                                        switch (_0x53f4d8[_0x3fd66a++]) {
                                            case '0':
                                                eshapeani1['y'] = 0xf5;
                                                continue;
                                            case '1':
                                                game['scene'][_0x579940(0x237)][pageNo][_0x579940(0x48f)]['addEvent']({
                                                    'delay': 0x190,
                                                    'callback': _0x2514b9,
                                                    'callbackScope': this
                                                });
                                                continue;
                                            case '2':
                                                eshapeani1['x'] = 0x1bc;
                                                continue;
                                            case '3':
                                                eshapeani1[_0x579940(0x86e)]['load'](_0x2f2c95[_0x579940(0x67b)]);
                                                continue;
                                            case '4':
                                                eshapeani1[_0x579940(0x86e)]['play'](_0x2f2c95[_0x579940(0x67b)]);
                                                continue;
                                        }
                                        break;
                                    }
                                }

                                function _0x2514b9() {
                                    var _0x427027 = _0x578a4b;
                                    eshapeani2['x'] = 0x199, eshapeani2['y'] = 0xf5, eshapeani2[_0x427027(0x86e)][_0x427027(0x742)](_0x427027(0x6d3)), eshapeani2[_0x427027(0x86e)][_0x427027(0x3ca)](_0x2f2c95[_0x427027(0x67b)]);
                                }
                                eshaper['x'] = 0x1f1, eshaper['y'] = 0x122, game[_0x578a4b(0x374)]['scenes'][pageNo][_0x578a4b(0x465)][_0x578a4b(0x85a)]({
                                    'targets': eshaper,
                                    'x': 0x1b3,
                                    'y': 0x125,
                                    'ease': _0x2f2c95['EHarK'],
                                    'duration': 0x5dc,
                                    'delay': 0x1f4,
                                    'onComplete': _0x510b31
                                }), game[_0x578a4b(0x374)][_0x578a4b(0x237)][pageNo]['tweens']['add']({
                                    'targets': doll1rebrow,
                                    'alpha': 0x0,
                                    'ease': _0x578a4b(0x901),
                                    'duration': 0x2bc,
                                    'delay': 0x47e
                                });
                            }

                            function _0x510b31() {
                                var _0x174c05 = _0x2e799b;
                                playsoundeffects(_0x11a58f[_0x174c05(0x953)]), game[_0x174c05(0x374)][_0x174c05(0x237)][pageNo][_0x174c05(0x465)][_0x174c05(0x85a)]({
                                    'targets': eshaper,
                                    'x': 0x4b0,
                                    'y': 0x190,
                                    'ease': _0x11a58f[_0x174c05(0x81b)],
                                    'duration': 0x1f4
                                }), game[_0x174c05(0x374)][_0x174c05(0x237)][pageNo][_0x174c05(0x465)][_0x174c05(0x85a)]({
                                    'targets': eshaper,
                                    'angle': 0x168,
                                    'ease': _0x11a58f[_0x174c05(0x81b)],
                                    'duration': 0x12c
                                }), game[_0x174c05(0x374)][_0x174c05(0x237)][pageNo]['time'][_0x174c05(0x85d)]({
                                    'delay': 0x3e8,
                                    'callback': _0x1d8929,
                                    'callbackScope': this
                                });
                            }

                            function _0x1d8929() {
                                var _0x49c639 = _0x2e799b;
                                game['scene'][_0x49c639(0x237)][pageNo][_0x49c639(0x48f)][_0x49c639(0x85d)]({
                                    'delay': 0xc8,
                                    'callback': _0x45034b,
                                    'callbackScope': this
                                }), game['scene'][_0x49c639(0x237)][pageNo]['tweens'][_0x49c639(0x85a)]({
                                    'targets': pimpleremover,
                                    'angle': 0x0,
                                    'ease': _0x11a58f[_0x49c639(0x634)],
                                    'repeat': 0x0,
                                    'duration': 0xc8
                                }), game[_0x49c639(0x374)][_0x49c639(0x237)][pageNo][_0x49c639(0x465)]['add']({
                                    'targets': pimpleremover,
                                    'x': 0x35f,
                                    'y': 0x114,
                                    'ease': _0x11a58f[_0x49c639(0x1d6)],
                                    'duration': 0x1f4
                                }), level1t1 && level1t1[_0x49c639(0x971)](), level1t1 = game[_0x49c639(0x374)][_0x49c639(0x237)][pageNo][_0x49c639(0x48f)][_0x49c639(0x85d)]({
                                    'delay': 0x5dc,
                                    'callback': _0x486b1d,
                                    'callbackScope': this
                                });
                            }
                        } else {
                            if (_0x11a58f[_0x2e799b(0x4b6)](this[_0x2e799b(0x374)][_0x2e799b(0xa56)]['x'], 0x1f4) && _0x11a58f[_0x2e799b(0x890)](this['scene'][_0x2e799b(0xa56)]['x'], 0x2ee) && this['scene'][_0x2e799b(0xa56)]['y'] >= 0xfa && this['scene'][_0x2e799b(0xa56)]['y'] <= 0x1f4 && nupdatekey == _0x11a58f[_0x2e799b(0x9d9)]) {
                                pimpleremoverhit['visible'] = ![], pimpleremover[_0x2e799b(0x964)](), pimpleremover['x'] = 0x256, pimpleremover['y'] = 0x176, playsoundeffects(_0x11a58f['KpySV']), doll1pimple2['setFrame'](0x1), game[_0x2e799b(0x374)][_0x2e799b(0x237)][pageNo][_0x2e799b(0x465)]['add']({
                                    'targets': doll1pimple2,
                                    'scale': 1.5,
                                    'ease': _0x2e799b(0x901),
                                    'duration': 0x190
                                }), game[_0x2e799b(0x374)][_0x2e799b(0x237)][pageNo]['tweens'][_0x2e799b(0x85a)]({
                                    'targets': pimpleremover,
                                    'y': _0x11a58f[_0x2e799b(0x527)](pimpleremover['y'], 0x5),
                                    'ease': _0x11a58f[_0x2e799b(0x634)],
                                    'duration': 0x190
                                }), game[_0x2e799b(0x374)][_0x2e799b(0x237)][pageNo][_0x2e799b(0x48f)][_0x2e799b(0x85d)]({
                                    'delay': 0x258,
                                    'callback': _0x487529,
                                    'callbackScope': this
                                });

                                function _0x487529() {
                                    var _0x24ec48 = _0x2e799b;
                                    doll1pimple2[_0x24ec48(0x254)](0x2), doll1pimple2[_0x24ec48(0x825)] = 0x1, game[_0x24ec48(0x374)][_0x24ec48(0x237)][pageNo][_0x24ec48(0x48f)][_0x24ec48(0x85d)]({
                                        'delay': 0x1f4,
                                        'callback': _0x56adfe,
                                        'callbackScope': this
                                    });
                                }

                                function _0x56adfe() {
                                    var _0x9f09cd = _0x2e799b;
                                    _0x2f2c95[_0x9f09cd(0x2e8)](playsoundeffects, _0x2f2c95[_0x9f09cd(0xa2e)]), game[_0x9f09cd(0x374)][_0x9f09cd(0x237)][pageNo][_0x9f09cd(0x465)][_0x9f09cd(0x85a)]({
                                        'targets': pimpleremover,
                                        'x': 0x216,
                                        'y': 0x10b,
                                        'ease': _0x9f09cd(0x901),
                                        'duration': 0x1f4,
                                        'onComplete': _0x1a17c0
                                    });
                                }

                                function _0x1a17c0() {
                                    var _0x3a2187 = _0x2e799b;
                                    game[_0x3a2187(0x374)][_0x3a2187(0x237)][pageNo][_0x3a2187(0x465)][_0x3a2187(0x85a)]({
                                        'targets': pimpleremover,
                                        'y': _0x2f2c95[_0x3a2187(0x1b0)](pimpleremover['y'], 0x5),
                                        'ease': _0x2f2c95[_0x3a2187(0x63b)],
                                        'duration': 0xc8
                                    }), doll1pimple1['setFrame'](0x1), game[_0x3a2187(0x374)][_0x3a2187(0x237)][pageNo][_0x3a2187(0x465)][_0x3a2187(0x85a)]({
                                        'targets': doll1pimple1,
                                        'scale': 1.5,
                                        'ease': _0x3a2187(0x901),
                                        'duration': 0x190
                                    }), game[_0x3a2187(0x374)][_0x3a2187(0x237)][pageNo][_0x3a2187(0x48f)][_0x3a2187(0x85d)]({
                                        'delay': 0x1f4,
                                        'callback': _0x17f5b3,
                                        'callbackScope': this
                                    });
                                }

                                function _0x17f5b3() {
                                    var _0xfc9502 = _0x2e799b;
                                    game[_0xfc9502(0x374)]['scenes'][pageNo][_0xfc9502(0x465)][_0xfc9502(0x85a)]({
                                        'targets': pimpleremover,
                                        'y': _0x11a58f[_0xfc9502(0x7aa)](pimpleremover['y'], 0x5),
                                        'ease': _0x11a58f[_0xfc9502(0x634)],
                                        'duration': 0xc8
                                    }), doll1pimple1['setFrame'](0x2), doll1pimple1[_0xfc9502(0x825)] = 0x1, game[_0xfc9502(0x374)][_0xfc9502(0x237)][pageNo][_0xfc9502(0x48f)][_0xfc9502(0x85d)]({
                                        'delay': 0x1f4,
                                        'callback': _0x57636b,
                                        'callbackScope': this
                                    });
                                }

                                function _0x57636b() {
                                    var _0x19444b = _0x2e799b;
                                    _0x11a58f[_0x19444b(0x3e1)](playsoundeffects, _0x11a58f['KpySV']), game[_0x19444b(0x374)]['scenes'][pageNo]['tweens']['add']({
                                        'targets': pimpleremover,
                                        'x': 0x1e4,
                                        'y': 0x18b,
                                        'ease': _0x19444b(0x901),
                                        'duration': 0x1f4,
                                        'onComplete': _0x218b82
                                    });
                                }

                                function _0x218b82() {
                                    var _0x16eee8 = _0x2e799b;
                                    game[_0x16eee8(0x374)][_0x16eee8(0x237)][pageNo]['tweens']['add']({
                                        'targets': pimpleremover,
                                        'y': pimpleremover['y'] + 0x5,
                                        'ease': _0x2f2c95[_0x16eee8(0x63b)],
                                        'duration': 0xc8
                                    }), doll1pimple3[_0x16eee8(0x254)](0x1), game[_0x16eee8(0x374)][_0x16eee8(0x237)][pageNo]['tweens'][_0x16eee8(0x85a)]({
                                        'targets': doll1pimple3,
                                        'scale': 1.5,
                                        'ease': _0x2f2c95[_0x16eee8(0x63b)],
                                        'duration': 0x190
                                    }), game[_0x16eee8(0x374)]['scenes'][pageNo][_0x16eee8(0x48f)][_0x16eee8(0x85d)]({
                                        'delay': 0x1f4,
                                        'callback': _0x4b991d,
                                        'callbackScope': this
                                    });
                                }

                                function _0x4b991d() {
                                    var _0x4099da = _0x2e799b;
                                    doll1pimple3[_0x4099da(0x254)](0x2), doll1pimple3[_0x4099da(0x825)] = 0x1, game[_0x4099da(0x374)][_0x4099da(0x237)][pageNo]['time'][_0x4099da(0x85d)]({
                                        'delay': 0x1f4,
                                        'callback': _0x6ddfa8,
                                        'callbackScope': this
                                    });
                                }

                                function _0x6ddfa8() {
                                    var _0x26ad84 = _0x2e799b;
                                    _0x2f2c95[_0x26ad84(0x2e8)](playsoundeffects, _0x2f2c95[_0x26ad84(0xa2e)]), game[_0x26ad84(0x374)][_0x26ad84(0x237)][pageNo]['tweens'][_0x26ad84(0x85a)]({
                                        'targets': pimpleremover,
                                        'x': 0x206,
                                        'y': 0x1c9,
                                        'ease': _0x2f2c95[_0x26ad84(0x63b)],
                                        'duration': 0x1f4,
                                        'onComplete': _0x16a923
                                    });
                                }

                                function _0x16a923() {
                                    var _0x558dbd = _0x2e799b;
                                    game['scene'][_0x558dbd(0x237)][pageNo][_0x558dbd(0x465)][_0x558dbd(0x85a)]({
                                        'targets': pimpleremover,
                                        'y': pimpleremover['y'] + 0x5,
                                        'ease': _0x558dbd(0x901),
                                        'duration': 0xc8
                                    }), doll1pimple4[_0x558dbd(0x254)](0x1), game[_0x558dbd(0x374)][_0x558dbd(0x237)][pageNo][_0x558dbd(0x465)][_0x558dbd(0x85a)]({
                                        'targets': doll1pimple4,
                                        'scale': 1.5,
                                        'ease': _0x11a58f[_0x558dbd(0x634)],
                                        'duration': 0x190
                                    }), game['scene'][_0x558dbd(0x237)][pageNo][_0x558dbd(0x48f)][_0x558dbd(0x85d)]({
                                        'delay': 0x1f4,
                                        'callback': _0x154a7f,
                                        'callbackScope': this
                                    });
                                }

                                function _0x154a7f() {
                                    var _0x432c35 = _0x2e799b;
                                    doll1pimple4['setFrame'](0x2), doll1pimple4[_0x432c35(0x825)] = 0x1, game[_0x432c35(0x374)][_0x432c35(0x237)][pageNo][_0x432c35(0x48f)][_0x432c35(0x85d)]({
                                        'delay': 0x1f4,
                                        'callback': _0x22a177,
                                        'callbackScope': this
                                    });
                                }

                                function _0x22a177() {
                                    var _0xb65ade = _0x2e799b;
                                    _0x11a58f[_0xb65ade(0x6d6)](playsoundeffects, _0x11a58f['puTJU']), game['scene'][_0xb65ade(0x237)][pageNo][_0xb65ade(0x465)][_0xb65ade(0x85a)]({
                                        'targets': pimpleremover,
                                        'x': 0x4b0,
                                        'y': 0x190,
                                        'ease': _0x11a58f[_0xb65ade(0x81b)],
                                        'duration': 0x1f4
                                    }), game[_0xb65ade(0x374)][_0xb65ade(0x237)][pageNo][_0xb65ade(0x465)]['add']({
                                        'targets': pimpleremover,
                                        'angle': 0x168,
                                        'ease': _0x11a58f[_0xb65ade(0x81b)],
                                        'duration': 0x12c
                                    }), game['scene'][_0xb65ade(0x237)][pageNo][_0xb65ade(0x48f)][_0xb65ade(0x85d)]({
                                        'delay': 0x3e8,
                                        'callback': _0x395e68,
                                        'callbackScope': this
                                    });
                                }

                                function _0x395e68() {
                                    var _0x5a7c4c = _0x2e799b;
                                    game[_0x5a7c4c(0x374)][_0x5a7c4c(0x237)][pageNo]['time']['addEvent']({
                                        'delay': 0xc8,
                                        'callback': _0x45034b,
                                        'callbackScope': this
                                    }), game['scene'][_0x5a7c4c(0x237)][pageNo][_0x5a7c4c(0x465)][_0x5a7c4c(0x85a)]({
                                        'targets': facemaskimg,
                                        'x': 924.5,
                                        'y': 0x104,
                                        'ease': _0x2f2c95['PnNSy'],
                                        'duration': 0x1f4
                                    }), level1t1 && level1t1[_0x5a7c4c(0x971)](), level1t1 = game[_0x5a7c4c(0x374)][_0x5a7c4c(0x237)][pageNo][_0x5a7c4c(0x48f)][_0x5a7c4c(0x85d)]({
                                        'delay': 0x5dc,
                                        'callback': _0x486b1d,
                                        'callbackScope': this
                                    });
                                }
                            } else {
                                if (this['scene'][_0x2e799b(0xa56)]['x'] >= 0x150 && _0x11a58f['vVHxF'](this[_0x2e799b(0x374)][_0x2e799b(0xa56)]['x'], 0x294) && _0x11a58f[_0x2e799b(0x457)](this[_0x2e799b(0x374)][_0x2e799b(0xa56)]['y'], 0x4b) && this[_0x2e799b(0x374)]['input']['y'] <= 0x1ae && _0x11a58f[_0x2e799b(0x3a5)](nupdatekey, _0x11a58f['OjiwZ'])) {
                                    _0x11a58f[_0x2e799b(0x496)](playsoundeffects, _0x11a58f['Lcxyn']), facemaskhit[_0x2e799b(0xa6e)] = ![], facemaskimg[_0x2e799b(0xa6e)] = ![], facemaskimg[_0x2e799b(0x964)](), facemask[_0x2e799b(0xa6e)] = !![], game[_0x2e799b(0x374)][_0x2e799b(0x237)][pageNo][_0x2e799b(0x48f)]['addEvent']({
                                        'delay': 0xc8,
                                        'callback': _0x19f3d6,
                                        'callbackScope': this
                                    });

                                    function _0x19f3d6() {
                                        var _0x4326fb = _0x2e799b;
                                        game[_0x4326fb(0x374)][_0x4326fb(0x237)][pageNo][_0x4326fb(0x48f)][_0x4326fb(0x85d)]({
                                            'delay': 0xc8,
                                            'callback': _0x45034b,
                                            'callbackScope': this
                                        }), game['scene'][_0x4326fb(0x237)][pageNo][_0x4326fb(0x465)][_0x4326fb(0x85a)]({
                                            'targets': cucumberimg1,
                                            'x': 0x384,
                                            'y': 284.5,
                                            'ease': _0x2f2c95[_0x4326fb(0x53f)],
                                            'duration': 0x1f4
                                        }), level1t1 && level1t1['remove'](), level1t1 = game[_0x4326fb(0x374)][_0x4326fb(0x237)][pageNo][_0x4326fb(0x48f)][_0x4326fb(0x85d)]({
                                            'delay': 0x5dc,
                                            'callback': _0x486b1d,
                                            'callbackScope': this
                                        });
                                    }
                                } else {
                                    if (_0x11a58f[_0x2e799b(0x2f8)](this[_0x2e799b(0x374)][_0x2e799b(0xa56)]['x'], 0x150) && _0x11a58f[_0x2e799b(0x65e)](this[_0x2e799b(0x374)][_0x2e799b(0xa56)]['x'], 0x294) && this[_0x2e799b(0x374)]['input']['y'] >= 0x4b && _0x11a58f[_0x2e799b(0xa25)](this[_0x2e799b(0x374)][_0x2e799b(0xa56)]['y'], 0x1ae) && _0x11a58f[_0x2e799b(0x6ee)](nupdatekey, _0x2e799b(0x567)) && _0x11a58f['aEpru'](nupdatesno, 0x1)) {
                                        _0x11a58f['ybFtk'](playsoundeffects, _0x11a58f['Lcxyn']), blinktimer[_0x2e799b(0x971)](), blinktimer2[_0x2e799b(0x971)](), blinktimer3[_0x2e799b(0x971)](), doll1eyeclose[_0x2e799b(0xa6e)] = !![], doll1eyeopen[_0x2e799b(0xa6e)] = ![], cucumberhit1[_0x2e799b(0xa6e)] = ![], cucumberimg1['visible'] = ![], cucumberimg1[_0x2e799b(0x964)](), cucumber1[_0x2e799b(0xa6e)] = !![], game[_0x2e799b(0x374)][_0x2e799b(0x237)][pageNo]['time']['addEvent']({
                                            'delay': 0xc8,
                                            'callback': _0x4c2402,
                                            'callbackScope': this
                                        });

                                        function _0x4c2402() {
                                            var _0x594118 = _0x2e799b;
                                            game[_0x594118(0x374)][_0x594118(0x237)][pageNo][_0x594118(0x48f)][_0x594118(0x85d)]({
                                                'delay': 0xc8,
                                                'callback': _0x45034b,
                                                'callbackScope': this
                                            }), game[_0x594118(0x374)][_0x594118(0x237)][pageNo]['tweens'][_0x594118(0x85a)]({
                                                'targets': cucumberimg2,
                                                'x': 0x384,
                                                'y': 0x11f,
                                                'ease': _0x2f2c95['PnNSy'],
                                                'duration': 0x1f4
                                            }), level1t1 && level1t1[_0x594118(0x971)](), level1t1 = game[_0x594118(0x374)][_0x594118(0x237)][pageNo]['time'][_0x594118(0x85d)]({
                                                'delay': 0x5dc,
                                                'callback': _0x486b1d,
                                                'callbackScope': this
                                            });
                                        }
                                    } else {
                                        if (_0x11a58f[_0x2e799b(0x952)](this[_0x2e799b(0x374)][_0x2e799b(0xa56)]['x'], 0x150) && _0x11a58f[_0x2e799b(0x4c7)](this['scene'][_0x2e799b(0xa56)]['x'], 0x294) && _0x11a58f[_0x2e799b(0x952)](this['scene'][_0x2e799b(0xa56)]['y'], 0x4b) && this[_0x2e799b(0x374)][_0x2e799b(0xa56)]['y'] <= 0x1ae && _0x11a58f[_0x2e799b(0x63e)](nupdatekey, _0x2e799b(0x567)) && nupdatesno == 0x2) {
                                            var _0x1733fa = _0x11a58f[_0x2e799b(0x26d)][_0x2e799b(0xa4e)]('|'),
                                                _0x15570d = 0x0;
                                            while (!![]) {
                                                switch (_0x1733fa[_0x15570d++]) {
                                                    case '0':
                                                        clock[_0x2e799b(0xa6e)] = !![];
                                                        continue;
                                                    case '1':
                                                        cucumberimg2[_0x2e799b(0x964)]();
                                                        continue;
                                                    case '2':
                                                        _0x11a58f[_0x2e799b(0x3e1)](playsoundeffects, _0x11a58f[_0x2e799b(0x2ca)]);
                                                        continue;
                                                    case '3':
                                                        cucumberimg2['visible'] = ![];
                                                        continue;
                                                    case '4':
                                                        clock['anims'][_0x2e799b(0x3ca)](_0x11a58f['JvlFg']);
                                                        continue;
                                                    case '5':
                                                        c1 = game[_0x2e799b(0x374)]['scenes'][pageNo]['time'][_0x2e799b(0x85d)]({
                                                            'delay': 0x6a4,
                                                            'callback': _0x3b95b9,
                                                            'callbackScope': this
                                                        });
                                                        continue;
                                                    case '6':
                                                        cucumberhit2['visible'] = ![];
                                                        continue;
                                                    case '7':
                                                        clocksound = game['scene'][_0x2e799b(0x237)][pageNo][_0x2e799b(0xabd)][_0x2e799b(0x85a)]('clocksound');
                                                        continue;
                                                    case '8':
                                                        cucumber2[_0x2e799b(0xa6e)] = !![];
                                                        continue;
                                                    case '9':
                                                        !isMuted1 ? clocksound['resume']() : clocksound[_0x2e799b(0x3a8)]();
                                                        continue;
                                                    case '10':
                                                        clockstart = 0x1;
                                                        continue;
                                                    case '11':
                                                        clocksound[_0x2e799b(0x3ca)]({
                                                            'loop': !![]
                                                        });
                                                        continue;
                                                }
                                                break;
                                            }
                                        } else {
                                            if (_0x11a58f[_0x2e799b(0x61e)](this[_0x2e799b(0x374)][_0x2e799b(0xa56)]['x'], 0x154) && _0x11a58f['VnTpL'](this['scene'][_0x2e799b(0xa56)]['x'], 0x2b2) && this[_0x2e799b(0x374)][_0x2e799b(0xa56)]['y'] >= 0x6e && _0x11a58f[_0x2e799b(0x930)](this['scene']['input']['y'], 0x1b8) && _0x11a58f[_0x2e799b(0x630)](nupdatekey, 'creamhan')) {
                                                creamhandhit[_0x2e799b(0xa6e)] = ![], creamhand['removeInteractive'](), game[_0x2e799b(0x374)][_0x2e799b(0x237)][pageNo][_0x2e799b(0x48f)]['addEvent']({
                                                    'delay': 0xc8,
                                                    'callback': _0x2d057d,
                                                    'callbackScope': this
                                                });

                                                function _0x2d057d() {
                                                    var _0xcf43b6 = _0x2e799b,
                                                        _0x5c630b = _0x11a58f[_0xcf43b6(0x839)][_0xcf43b6(0xa4e)]('|'),
                                                        _0x141e20 = 0x0;
                                                    while (!![]) {
                                                        switch (_0x5c630b[_0x141e20++]) {
                                                            case '0':
                                                                _0x11a58f[_0xcf43b6(0xa9e)](_0x50e87c);
                                                                continue;
                                                            case '1':
                                                                game[_0xcf43b6(0x374)][_0xcf43b6(0x237)][pageNo]['tweens'][_0xcf43b6(0x85a)]({
                                                                    'targets': creamhand,
                                                                    'x': 627.5,
                                                                    'y': 387.5,
                                                                    'ease': _0x11a58f[_0xcf43b6(0x634)],
                                                                    'duration': 0x1f4,
                                                                    'callbackScope': this
                                                                });
                                                                continue;
                                                            case '2':
                                                                creamhand['y'] = 391.5;
                                                                continue;
                                                            case '3':
                                                                game['scene'][_0xcf43b6(0x237)][pageNo]['tweens'][_0xcf43b6(0x85a)]({
                                                                    'targets': darkcirclecream1,
                                                                    'alpha': 0x1,
                                                                    'ease': _0x11a58f[_0xcf43b6(0x634)],
                                                                    'duration': 0x12c
                                                                });
                                                                continue;
                                                            case '4':
                                                                game[_0xcf43b6(0x374)][_0xcf43b6(0x237)][pageNo][_0xcf43b6(0x48f)][_0xcf43b6(0x85d)]({
                                                                    'delay': 0x226,
                                                                    'callback': _0x552cb5,
                                                                    'callbackScope': this
                                                                });
                                                                continue;
                                                            case '5':
                                                                creamhand['x'] = 573.5;
                                                                continue;
                                                        }
                                                        break;
                                                    }
                                                }

                                                function _0x552cb5() {
                                                    var _0x1e1565 = _0x2e799b;
                                                    game[_0x1e1565(0x374)]['scenes'][pageNo][_0x1e1565(0x465)][_0x1e1565(0x85a)]({
                                                        'targets': creamhand,
                                                        'x': 0x1f9,
                                                        'y': 394.5,
                                                        'ease': _0x11a58f['YveXS'],
                                                        'duration': 0x12c,
                                                        'onComplete': _0x520b6a
                                                    });
                                                }

                                                function _0x520b6a() {
                                                    var _0x5f348a = _0x2e799b,
                                                        _0x2fc911 = _0x11a58f[_0x5f348a(0x20a)][_0x5f348a(0xa4e)]('|'),
                                                        _0x17665d = 0x0;
                                                    while (!![]) {
                                                        switch (_0x2fc911[_0x17665d++]) {
                                                            case '0':
                                                                game['scene'][_0x5f348a(0x237)][pageNo][_0x5f348a(0x465)][_0x5f348a(0x85a)]({
                                                                    'targets': darkcirclecream2,
                                                                    'alpha': 0x1,
                                                                    'ease': _0x11a58f[_0x5f348a(0x634)],
                                                                    'duration': 0x12c
                                                                });
                                                                continue;
                                                            case '1':
                                                                creamhand['x'] = 0x1f9;
                                                                continue;
                                                            case '2':
                                                                game[_0x5f348a(0x374)]['scenes'][pageNo][_0x5f348a(0x48f)]['addEvent']({
                                                                    'delay': 0x226,
                                                                    'callback': _0x23df8c,
                                                                    'callbackScope': this
                                                                });
                                                                continue;
                                                            case '3':
                                                                game[_0x5f348a(0x374)][_0x5f348a(0x237)][pageNo]['tweens'][_0x5f348a(0x85a)]({
                                                                    'targets': creamhand,
                                                                    'x': 0x1c0,
                                                                    'y': 389.5,
                                                                    'ease': _0x5f348a(0x901),
                                                                    'duration': 0x1f4,
                                                                    'callbackScope': this
                                                                });
                                                                continue;
                                                            case '4':
                                                                creamhand['y'] = 394.5;
                                                                continue;
                                                            case '5':
                                                                _0x11a58f[_0x5f348a(0xa9e)](_0x50e87c);
                                                                continue;
                                                        }
                                                        break;
                                                    }
                                                }

                                                function _0x23df8c() {
                                                    var _0x5cb796 = _0x2e799b;
                                                    playsoundeffects(_0x11a58f['puTJU']), facewashimg[_0x5cb796(0x254)](0x0), game['scene'][_0x5cb796(0x237)][pageNo][_0x5cb796(0x465)][_0x5cb796(0x85a)]({
                                                        'targets': creamhand,
                                                        'x': 0x4b0,
                                                        'y': 0x1df,
                                                        'ease': _0x11a58f[_0x5cb796(0x634)],
                                                        'duration': 0x12c
                                                    }), game[_0x5cb796(0x374)][_0x5cb796(0x237)][pageNo][_0x5cb796(0x48f)]['addEvent']({
                                                        'delay': 0x3e8,
                                                        'callback': _0x3b84dc,
                                                        'callbackScope': this
                                                    });
                                                }

                                                function _0x3b84dc() {
                                                    var _0x39b07c = _0x2e799b,
                                                        _0x450058 = _0x39b07c(0x6ed)['split']('|'),
                                                        _0x14a97c = 0x0;
                                                    while (!![]) {
                                                        switch (_0x450058[_0x14a97c++]) {
                                                            case '0':
                                                                game[_0x39b07c(0x374)][_0x39b07c(0x237)][pageNo][_0x39b07c(0x465)]['add']({
                                                                    'targets': darkcirclecream1,
                                                                    'alpha': 0x0,
                                                                    'ease': _0x2f2c95[_0x39b07c(0x63b)],
                                                                    'duration': 0x12c
                                                                });
                                                                continue;
                                                            case '1':
                                                                game[_0x39b07c(0x374)][_0x39b07c(0x237)][pageNo]['time'][_0x39b07c(0x85d)]({
                                                                    'delay': 0x258,
                                                                    'callback': _0x45034b,
                                                                    'callbackScope': this
                                                                });
                                                                continue;
                                                            case '2':
                                                                game[_0x39b07c(0x374)][_0x39b07c(0x237)][pageNo][_0x39b07c(0x465)][_0x39b07c(0x85a)]({
                                                                    'targets': doll1darkcircle,
                                                                    'alpha': 0x0,
                                                                    'ease': _0x39b07c(0x901),
                                                                    'duration': 0x12c
                                                                });
                                                                continue;
                                                            case '3':
                                                                game[_0x39b07c(0x374)]['scenes'][pageNo][_0x39b07c(0x465)][_0x39b07c(0x85a)]({
                                                                    'targets': spraybottle,
                                                                    'x': 875.5,
                                                                    'y': 0x11b,
                                                                    'ease': _0x2f2c95[_0x39b07c(0x53f)],
                                                                    'duration': 0x1f4,
                                                                    'delay': 0x1f4,
                                                                    'callbackScope': this
                                                                });
                                                                continue;
                                                            case '4':
                                                                game['scene'][_0x39b07c(0x237)][pageNo][_0x39b07c(0x465)][_0x39b07c(0x85a)]({
                                                                    'targets': spraycap,
                                                                    'x': 0x36b,
                                                                    'y': 225.5,
                                                                    'ease': _0x2f2c95[_0x39b07c(0x53f)],
                                                                    'duration': 0x1f4,
                                                                    'delay': 0x1f4,
                                                                    'onComplete': _0x244b68
                                                                });
                                                                continue;
                                                            case '5':
                                                                game[_0x39b07c(0x374)][_0x39b07c(0x237)][pageNo][_0x39b07c(0x465)][_0x39b07c(0x85a)]({
                                                                    'targets': darkcirclecream2,
                                                                    'alpha': 0x0,
                                                                    'ease': _0x39b07c(0x901),
                                                                    'duration': 0x12c
                                                                });
                                                                continue;
                                                        }
                                                        break;
                                                    }
                                                }

                                                function _0x50e87c() {
                                                    var _0x21ab0b = _0x2e799b;
                                                    _0x11a58f['mmJDM'](playsoundeffects, _0x11a58f['RDnDd']), creamhand[_0x21ab0b(0x254)](0x1), game[_0x21ab0b(0x374)]['scenes'][pageNo]['time']['addEvent']({
                                                        'delay': 0x1f4,
                                                        'callback': _0x142df9,
                                                        'callbackScope': this
                                                    });
                                                }

                                                function _0x142df9() {
                                                    var _0x131733 = _0x2e799b;
                                                    creamhand[_0x131733(0x254)](0x0);
                                                }
                                            } else {
                                                if (_0x11a58f['JhMqp'](this[_0x2e799b(0x374)][_0x2e799b(0xa56)]['x'], 0x154) && _0x11a58f[_0x2e799b(0x890)](this['scene']['input']['x'], 0x2b2) && _0x11a58f[_0x2e799b(0x3f7)](this[_0x2e799b(0x374)][_0x2e799b(0xa56)]['y'], 0x6e) && _0x11a58f[_0x2e799b(0x339)](this[_0x2e799b(0x374)][_0x2e799b(0xa56)]['y'], 0x1b8) && _0x11a58f['EbXOD'](nupdatekey, _0x2e799b(0x9e2))) {
                                                    blinktimer['remove'](), blinktimer2['remove'](), blinktimer3[_0x2e799b(0x971)](), doll1eyeclose[_0x2e799b(0xa6e)] = !![], doll1eyeopen[_0x2e799b(0xa6e)] = ![], sprayliquid['x'] = 0x23b, sprayliquid['y'] = 366.5, sprayhit[_0x2e799b(0xa6e)] = ![], spraybottle[_0x2e799b(0xa6e)] = ![], sprayliquid[_0x2e799b(0xa6e)] = !![], spraybottle[_0x2e799b(0x964)](), game[_0x2e799b(0x374)][_0x2e799b(0x237)][pageNo][_0x2e799b(0x48f)][_0x2e799b(0x85d)]({
                                                        'delay': 0xc8,
                                                        'callback': _0x46bf07,
                                                        'callbackScope': this
                                                    });

                                                    function _0x46bf07() {
                                                        var _0x57e575 = _0x2e799b;
                                                        _0x11a58f[_0x57e575(0xa9e)](_0x203e21), game['scene'][_0x57e575(0x237)][pageNo][_0x57e575(0x465)][_0x57e575(0x85a)]({
                                                            'targets': foundation2,
                                                            'alpha': 0x1,
                                                            'ease': _0x11a58f[_0x57e575(0x634)],
                                                            'duration': 0x1f4
                                                        }), game[_0x57e575(0x374)]['scenes'][pageNo]['time'][_0x57e575(0x85d)]({
                                                            'delay': 0x226,
                                                            'callback': _0x3d40a9,
                                                            'callbackScope': this
                                                        });
                                                    }

                                                    function _0x3d40a9() {
                                                        var _0x7ffabb = _0x2e799b;
                                                        game[_0x7ffabb(0x374)][_0x7ffabb(0x237)][pageNo][_0x7ffabb(0x465)][_0x7ffabb(0x85a)]({
                                                            'targets': sprayliquid,
                                                            'x': 0x1e4,
                                                            'y': 0x16d,
                                                            'ease': _0x11a58f[_0x7ffabb(0x634)],
                                                            'duration': 0x12c,
                                                            'onComplete': _0x3b2632
                                                        });
                                                    }

                                                    function _0x3b2632() {
                                                        var _0x4a475c = _0x2e799b;
                                                        _0x11a58f[_0x4a475c(0xa9e)](_0x203e21), game['scene']['scenes'][pageNo][_0x4a475c(0x465)]['add']({
                                                            'targets': foundation3,
                                                            'alpha': 0x1,
                                                            'ease': _0x11a58f['YveXS'],
                                                            'duration': 0x1f4
                                                        }), game[_0x4a475c(0x374)][_0x4a475c(0x237)][pageNo][_0x4a475c(0x48f)][_0x4a475c(0x85d)]({
                                                            'delay': 0x226,
                                                            'callback': _0xffd11b,
                                                            'callbackScope': this
                                                        });
                                                    }

                                                    function _0xffd11b() {
                                                        var _0x42a56a = _0x2e799b;
                                                        game[_0x42a56a(0x374)][_0x42a56a(0x237)][pageNo][_0x42a56a(0x465)]['add']({
                                                            'targets': sprayliquid,
                                                            'x': 0x244,
                                                            'y': 0xef,
                                                            'ease': _0x2f2c95[_0x42a56a(0x63b)],
                                                            'duration': 0x12c,
                                                            'onComplete': _0x51495a
                                                        });
                                                    }

                                                    function _0x51495a() {
                                                        var _0x50124e = _0x2e799b;
                                                        _0x203e21(), game[_0x50124e(0x374)][_0x50124e(0x237)][pageNo][_0x50124e(0x465)][_0x50124e(0x85a)]({
                                                            'targets': foundation1,
                                                            'alpha': 0x1,
                                                            'ease': _0x50124e(0x901),
                                                            'duration': 0xc8
                                                        }), game[_0x50124e(0x374)][_0x50124e(0x237)][pageNo][_0x50124e(0x48f)][_0x50124e(0x85d)]({
                                                            'delay': 0x226,
                                                            'callback': _0x4fd9b6,
                                                            'callbackScope': this
                                                        }), game[_0x50124e(0x374)][_0x50124e(0x237)][pageNo][_0x50124e(0x48f)]['addEvent']({
                                                            'delay': 0x3e8,
                                                            'callback': _0x391f92,
                                                            'callbackScope': this
                                                        });
                                                    }

                                                    function _0x4fd9b6() {
                                                        var _0xa0be25 = _0x2e799b;
                                                        blinktimer = game['scene'][_0xa0be25(0x237)][pageNo]['time'][_0xa0be25(0x85d)]({
                                                            'delay': 0xc8,
                                                            'callback': _0x10b1c9,
                                                            'callbackScope': this
                                                        }), doll1eyeopen[_0xa0be25(0xa6e)] = !![], doll1eyeclose[_0xa0be25(0xa6e)] = ![], game[_0xa0be25(0x374)][_0xa0be25(0x237)][pageNo][_0xa0be25(0x465)][_0xa0be25(0x85a)]({
                                                            'targets': sprayliquid,
                                                            'x': 0x4b0,
                                                            'y': 0x134,
                                                            'ease': _0x11a58f[_0xa0be25(0x81b)],
                                                            'duration': 0x1f4
                                                        });
                                                    }

                                                    function _0x391f92() {
                                                        var _0x2d04df = _0x2e799b,
                                                            _0x49e8ec = {
                                                                'uHTdA': _0x2f2c95[_0x2d04df(0x4d8)],
                                                                'oongb': function(_0x425333, _0x4ce2d7) {
                                                                    var _0x5796f2 = _0x2d04df;
                                                                    return _0x2f2c95[_0x5796f2(0x70e)](_0x425333, _0x4ce2d7);
                                                                },
                                                                'LOAqz': _0x2f2c95[_0x2d04df(0xa5d)]
                                                            };
                                                        game[_0x2d04df(0x374)][_0x2d04df(0x237)][pageNo]['tweens']['add']({
                                                            'targets': foundation3,
                                                            'alpha': 0x0,
                                                            'ease': _0x2f2c95['EHarK'],
                                                            'duration': 0x1f4
                                                        }), game['scene']['scenes'][pageNo][_0x2d04df(0x465)][_0x2d04df(0x85a)]({
                                                            'targets': foundation1,
                                                            'alpha': 0x0,
                                                            'ease': _0x2d04df(0x901),
                                                            'duration': 0x1f4
                                                        }), game[_0x2d04df(0x374)][_0x2d04df(0x237)][pageNo][_0x2d04df(0x465)][_0x2d04df(0x85a)]({
                                                            'targets': foundation2,
                                                            'alpha': 0x0,
                                                            'ease': _0x2f2c95[_0x2d04df(0x63b)],
                                                            'duration': 0x1f4
                                                        }), game[_0x2d04df(0x374)][_0x2d04df(0x237)][pageNo][_0x2d04df(0x465)][_0x2d04df(0x85a)]({
                                                            'targets': doll1eyetop,
                                                            'alpha': 0x0,
                                                            'ease': _0x2f2c95[_0x2d04df(0x63b)],
                                                            'duration': 0x3e8
                                                        }), game[_0x2d04df(0x374)][_0x2d04df(0x237)][pageNo][_0x2d04df(0x465)]['add']({
                                                            'targets': doll1eyeclose1,
                                                            'alpha': 0x0,
                                                            'ease': 'Linear',
                                                            'duration': 0x3e8
                                                        }), game[_0x2d04df(0x374)][_0x2d04df(0x237)][pageNo][_0x2d04df(0x465)][_0x2d04df(0x85a)]({
                                                            'targets': doll1face,
                                                            'alpha': 0x0,
                                                            'ease': _0x2f2c95[_0x2d04df(0x63b)],
                                                            'duration': 0x3e8
                                                        }), game[_0x2d04df(0x374)][_0x2d04df(0x237)][pageNo][_0x2d04df(0x48f)]['addEvent']({
                                                            'delay': 0x5dc,
                                                            'callback': _0x513ea3,
                                                            'callbackScope': this
                                                        });

                                                        function _0x513ea3() {
                                                            var _0x2440df = _0x2d04df;
                                                            stargilter[_0x2440df(0x86e)][_0x2440df(0x742)](_0x49e8ec['uHTdA']), stargilter[_0x2440df(0x86e)][_0x2440df(0x3ca)](_0x49e8ec[_0x2440df(0x25d)]), _0x49e8ec[_0x2440df(0x1d3)](playsoundeffects, _0x2440df(0x4ac)), stargilter['on'](_0x49e8ec[_0x2440df(0x740)], _0x3824a7, this);
                                                        }
                                                    }

                                                    function _0x203e21() {
                                                        var _0x6d3df0 = _0x2e799b;
                                                        _0x2f2c95[_0x6d3df0(0x2e8)](playsoundeffects, _0x2f2c95[_0x6d3df0(0x80f)]), sprayliquid['setFrame'](0x1), game[_0x6d3df0(0x374)]['scenes'][pageNo][_0x6d3df0(0x48f)][_0x6d3df0(0x85d)]({
                                                            'delay': 0xc8,
                                                            'callback': _0x396e43,
                                                            'callbackScope': this
                                                        });
                                                    }

                                                    function _0x396e43() {
                                                        var _0x4ece24 = _0x2e799b;
                                                        sprayliquid[_0x4ece24(0x254)](0x0), game[_0x4ece24(0x374)][_0x4ece24(0x237)][pageNo][_0x4ece24(0x48f)][_0x4ece24(0x85d)]({
                                                            'delay': 0xc8,
                                                            'callback': _0x4fc941,
                                                            'callbackScope': this
                                                        });
                                                    }

                                                    function _0x4fc941() {
                                                        var _0x30934b = _0x2e799b;
                                                        sprayliquid['setFrame'](0x1), game[_0x30934b(0x374)][_0x30934b(0x237)][pageNo][_0x30934b(0x48f)][_0x30934b(0x85d)]({
                                                            'delay': 0xc8,
                                                            'callback': _0x39e05e,
                                                            'callbackScope': this
                                                        });
                                                    }

                                                    function _0x39e05e() {
                                                        var _0x573b2d = _0x2e799b;
                                                        sprayliquid[_0x573b2d(0x254)](0x0);
                                                    }
                                                } else {
                                                    var _0x506f58 = _0x2e799b(0x708)[_0x2e799b(0xa4e)]('|'),
                                                        _0x11f070 = 0x0;
                                                    while (!![]) {
                                                        switch (_0x506f58[_0x11f070++]) {
                                                            case '0':
                                                                nupdatekey == _0x11a58f['jVhQi'] && (dresshit[_0x2e799b(0xa6e)] = ![], dressimg['x'] = 876.5, dressimg['y'] = 273.5);
                                                                continue;
                                                            case '1':
                                                                _0x11a58f[_0x2e799b(0x9e4)](nupdatekey, _0x11a58f[_0x2e799b(0x9d9)]) && (pimpleremoverhit[_0x2e799b(0xa6e)] = ![], pimpleremover['x'] = 0x35f, pimpleremover['y'] = 0x114, pimpleremover[_0x2e799b(0x963)] = 0x0);
                                                                continue;
                                                            case '2':
                                                                nupdatekey == _0x2e799b(0x5f3) && (eshaperhit[_0x2e799b(0xa6e)] = ![], eshaper[_0x2e799b(0x963)] = 0x0, eshaper['x'] = 0x336, eshaper['y'] = 0x107);
                                                                continue;
                                                            case '3':
                                                                _0x11a58f[_0x2e799b(0x8cc)](nupdatekey, _0x11a58f['FhTLp']) && (towelhit[_0x2e799b(0xa6e)] = ![], towel['x'] = 862.5, towel['y'] = 0x114);
                                                                continue;
                                                            case '4':
                                                                nupdatekey == _0x11a58f[_0x2e799b(0x523)] && (creamhandhit[_0x2e799b(0xa6e)] = ![], creamhand['x'] = 892.5, creamhand['y'] = 342.5);
                                                                continue;
                                                            case '5':
                                                                _0x11a58f[_0x2e799b(0xa9e)](_0x486b1d);
                                                                continue;
                                                            case '6':
                                                                nupdatekey == _0x11a58f['LvddK'] && _0x11a58f['BsVne'](nupdatesno, 0x2) && (cucumberhit2[_0x2e799b(0xa6e)] = ![], cucumberimg2['x'] = 0x384, cucumberimg2['y'] = 0x11f);
                                                                continue;
                                                            case '7':
                                                                _0x11a58f[_0x2e799b(0x5a1)](nupdatekey, _0x11a58f[_0x2e799b(0x9cd)]) && (facewashhit[_0x2e799b(0xa6e)] = ![], facewashimg[_0x2e799b(0x963)] = 0x0, facewashimg['x'] = 860.5, facewashimg['y'] = 275.5);
                                                                continue;
                                                            case '8':
                                                                _0x11a58f[_0x2e799b(0x92d)](nupdatekey, _0x11a58f[_0x2e799b(0x509)]) && (facemaskhit['visible'] = ![], facemaskimg['x'] = 924.5, facemaskimg['y'] = 0x104);
                                                                continue;
                                                            case '9':
                                                                _0x11a58f[_0x2e799b(0x820)](nupdatekey, _0x11a58f['KUgRT']) && (sprayhit[_0x2e799b(0xa6e)] = ![], spraybottle['x'] = 875.5, spraybottle['y'] = 0x11b);
                                                                continue;
                                                            case '10':
                                                                _0x11a58f[_0x2e799b(0x383)](nupdatekey, _0x11a58f[_0x2e799b(0x6b5)]) && (scrubbinghit[_0x2e799b(0xa6e)] = ![], scrubbinghand['x'] = 0x360, scrubbinghand['y'] = 273.5);
                                                                continue;
                                                            case '11':
                                                                _0x11a58f['WVWPP'](nupdatekey, _0x2e799b(0x567)) && _0x11a58f[_0x2e799b(0x63e)](nupdatesno, 0x1) && (cucumberhit1[_0x2e799b(0xa6e)] = ![], cucumberimg1['x'] = 0x384, cucumberimg1['y'] = 284.5);
                                                                continue;
                                                        }
                                                        break;
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
    });

    function _0x244b68() {
        var _0x1dab75 = _0x5eab5f;
        _0x11a58f[_0x1dab75(0x554)](playsoundeffects, _0x11a58f[_0x1dab75(0x255)]), game[_0x1dab75(0x374)]['scenes'][pageNo][_0x1dab75(0x465)]['add']({
            'targets': spraycap,
            'y': _0x11a58f[_0x1dab75(0x72d)](spraycap['y'], 0x64),
            'ease': _0x11a58f[_0x1dab75(0x634)],
            'duration': 0x1f4,
            'callbackScope': this,
            'onComplete': _0x4ef4b9
        });
    }

    function _0x4ef4b9() {
        var _0x21a50b = _0x5eab5f,
            _0xea853a = _0x11a58f[_0x21a50b(0x284)][_0x21a50b(0xa4e)]('|'),
            _0x378dba = 0x0;
        while (!![]) {
            switch (_0xea853a[_0x378dba++]) {
                case '0':
                    level1t1 && level1t1[_0x21a50b(0x971)]();
                    continue;
                case '1':
                    spraybottle[_0x21a50b(0xa74)]({
                        'draggable': !![],
                        'useHandCursor': !![]
                    });
                    continue;
                case '2':
                    level1t1 = game[_0x21a50b(0x374)]['scenes'][pageNo][_0x21a50b(0x48f)][_0x21a50b(0x85d)]({
                        'delay': 0x3e8,
                        'callback': _0x486b1d,
                        'callbackScope': this
                    });
                    continue;
                case '3':
                    _0x11a58f['PiZGV'](playsoundeffects, _0x21a50b(0x2e9));
                    continue;
                case '4':
                    game['scene'][_0x21a50b(0x237)][pageNo][_0x21a50b(0x465)][_0x21a50b(0x85a)]({
                        'targets': spraycap,
                        'y': _0x11a58f[_0x21a50b(0xa84)](spraycap['y'], 0x258),
                        'ease': _0x11a58f['YveXS'],
                        'duration': 0x258,
                        'callbackScope': this
                    });
                    continue;
            }
            break;
        }
    }

    function _0x3b95b9() {
        var _0x4a5f48 = _0x5eab5f;
        clockstart = 0x0, clocksound[_0x4a5f48(0x3a8)](), game[_0x4a5f48(0x374)][_0x4a5f48(0x237)][pageNo][_0x4a5f48(0x465)][_0x4a5f48(0x85a)]({
            'targets': cucumber1,
            'y': 0x1c2,
            'alpha': 0x0,
            'ease': _0x4a5f48(0x901),
            'duration': 0x320
        }), game[_0x4a5f48(0x374)]['scenes'][pageNo][_0x4a5f48(0x465)][_0x4a5f48(0x85a)]({
            'targets': cucumber2,
            'y': 0x1c2,
            'alpha': 0x0,
            'ease': _0x11a58f[_0x4a5f48(0x634)],
            'duration': 0x320,
            'onComplete': _0x215c29
        });
    }

    function _0x215c29() {
        var _0x31b707 = _0x5eab5f,
            _0xcd03d4 = _0x11a58f[_0x31b707(0x7b7)][_0x31b707(0xa4e)]('|'),
            _0x5cbd49 = 0x0;
        while (!![]) {
            switch (_0xcd03d4[_0x5cbd49++]) {
                case '0':
                    blinktimer = game[_0x31b707(0x374)][_0x31b707(0x237)][pageNo]['time'][_0x31b707(0x85d)]({
                        'delay': 0xc8,
                        'callback': _0x10b1c9,
                        'callbackScope': this
                    });
                    continue;
                case '1':
                    game[_0x31b707(0x374)][_0x31b707(0x237)][pageNo]['tweens']['add']({
                        'targets': facemask,
                        'x': 0x15e,
                        'y': 0x352,
                        'ease': _0x11a58f[_0x31b707(0x634)],
                        'duration': 0x3e8,
                        'onComplete': _0x4c31db
                    });
                    continue;
                case '2':
                    doll1eyeopen[_0x31b707(0xa6e)] = !![];
                    continue;
                case '3':
                    doll1pimple4[_0x31b707(0xa6e)] = ![];
                    continue;
                case '4':
                    doll1eyeclose[_0x31b707(0xa6e)] = ![];
                    continue;
                case '5':
                    doll1pimple1[_0x31b707(0xa6e)] = ![];
                    continue;
                case '6':
                    doll1pimple2['visible'] = ![];
                    continue;
                case '7':
                    doll1pimple3[_0x31b707(0xa6e)] = ![];
                    continue;
            }
            break;
        }
    }

    function _0x4c31db() {
        var _0x1a3a6d = _0x5eab5f;
        game['scene'][_0x1a3a6d(0x237)][pageNo]['tweens'][_0x1a3a6d(0x85a)]({
            'targets': darkcirclecream,
            'x': 0x35f,
            'y': 277.5,
            'ease': _0x11a58f['CgQin'],
            'duration': 0x3e8
        }), game[_0x1a3a6d(0x374)][_0x1a3a6d(0x237)][pageNo][_0x1a3a6d(0x465)][_0x1a3a6d(0x85a)]({
            'targets': darkcirclecreamcap,
            'x': 862.5,
            'y': 0xff,
            'ease': _0x11a58f[_0x1a3a6d(0x1d6)],
            'duration': 0x3e8,
            'onComplete': _0xad65b5
        });
    }

    function _0xad65b5() {
        var _0x5813fd = _0x5eab5f;
        playsoundeffects(_0x11a58f[_0x5813fd(0x255)]), game[_0x5813fd(0x374)]['scenes'][pageNo][_0x5813fd(0x465)]['add']({
            'targets': darkcirclecreamcap,
            'y': _0x11a58f['tFvlb'](darkcirclecreamcap['y'], 0x64),
            'ease': _0x11a58f[_0x5813fd(0x634)],
            'duration': 0x1f4,
            'callbackScope': this,
            'onComplete': _0x46a40a
        });
    }

    function _0x46a40a() {
        var _0x28d14e = _0x5eab5f;
        _0x11a58f[_0x28d14e(0xa68)](playsoundeffects, _0x11a58f[_0x28d14e(0x3b7)]), game[_0x28d14e(0x374)][_0x28d14e(0x237)][pageNo][_0x28d14e(0x465)][_0x28d14e(0x85a)]({
            'targets': darkcirclecreamcap,
            'y': _0x11a58f[_0x28d14e(0x527)](darkcirclecreamcap['y'], 0x258),
            'ease': _0x11a58f['YveXS'],
            'duration': 0x258,
            'callbackScope': this
        }), game[_0x28d14e(0x374)][_0x28d14e(0x237)][pageNo]['tweens']['add']({
            'targets': creamhand,
            'x': 892.5,
            'y': 342.5,
            'ease': _0x11a58f[_0x28d14e(0x1d6)],
            'duration': 0x3e8,
            'delay': 0x1f4,
            'onComplete': _0x329f8d
        });
    }

    function _0x329f8d() {
        var _0x315bf2 = _0x5eab5f;
        creamhand['setFrame'](0x1), game['scene'][_0x315bf2(0x237)][pageNo][_0x315bf2(0x465)][_0x315bf2(0x85a)]({
            'targets': darkcirclecream,
            'x': 0x4b0,
            'y': 277.5,
            'ease': _0x11a58f['MnmAH'],
            'duration': 0x1f4
        }), level1t1 && level1t1[_0x315bf2(0x971)](), level1t1 = game['scene'][_0x315bf2(0x237)][pageNo][_0x315bf2(0x48f)][_0x315bf2(0x85d)]({
            'delay': 0x3e8,
            'callback': _0x486b1d,
            'callbackScope': this
        });
    }

    function _0x3cad5f() {
        var _0x292bd8 = _0x5eab5f,
            _0x154785 = _0x11a58f[_0x292bd8(0x632)][_0x292bd8(0xa4e)]('|'),
            _0x564460 = 0x0;
        while (!![]) {
            switch (_0x154785[_0x564460++]) {
                case '0':
                    handindication['x'] = _0x11a58f['BqiTN'](dressimg['x'], 0x64);
                    continue;
                case '1':
                    level1t1 = game['scene'][_0x292bd8(0x237)][pageNo]['time']['addEvent']({
                        'delay': 0x5dc,
                        'callback': _0x486b1d,
                        'callbackScope': this
                    });
                    continue;
                case '2':
                    handindication['y'] = dressimg['y'] + 0x6e;
                    continue;
                case '3':
                    dressimg[_0x292bd8(0xa74)]({
                        'draggable': !![],
                        'useHandCursor': !![]
                    });
                    continue;
                case '4':
                    handindication[_0x292bd8(0xa6e)] = !![];
                    continue;
            }
            break;
        }
    }

    function _0x486b1d() {
        var _0x3d47d6 = _0x5eab5f,
            _0x2efc08 = _0x11a58f['hUQkL'][_0x3d47d6(0xa4e)]('|'),
            _0x494aaf = 0x0;
        while (!![]) {
            switch (_0x2efc08[_0x494aaf++]) {
                case '0':
                    if (dressimg['x'] == 876.5) {
                        var _0xc0682f = _0x3d47d6(0x5bc)['split']('|'),
                            _0x4d3fc3 = 0x0;
                        while (!![]) {
                            switch (_0xc0682f[_0x4d3fc3++]) {
                                case '0':
                                    handindication[_0x3d47d6(0x254)](0x1);
                                    continue;
                                case '1':
                                    handindication[_0x3d47d6(0x55e)] = 0x1;
                                    continue;
                                case '2':
                                    handindication[_0x3d47d6(0xa6e)] = !![];
                                    continue;
                                case '3':
                                    level1handtween = game['scene']['scenes'][pageNo]['tweens'][_0x3d47d6(0x85a)]({
                                        'targets': handindication,
                                        'x': 0x205,
                                        'y': 0x17c,
                                        'ease': _0x11a58f[_0x3d47d6(0x634)],
                                        'duration': 0x258,
                                        'onComplete': _0x4e067c,
                                        'callbackScope': this
                                    });
                                    continue;
                                case '4':
                                    handindication['y'] = 273.5;
                                    continue;
                                case '5':
                                    handindication['x'] = 876.5;
                                    continue;
                                case '6':
                                    if (isDragging) return;
                                    continue;
                            }
                            break;
                        }
                    } else {
                        if (facewashimg['x'] == 860.5) {
                            var _0x2145f1 = _0x11a58f[_0x3d47d6(0x512)][_0x3d47d6(0xa4e)]('|'),
                                _0x24b2e6 = 0x0;
                            while (!![]) {
                                switch (_0x2145f1[_0x24b2e6++]) {
                                    case '0':
                                        level1handtween = game['scene']['scenes'][pageNo][_0x3d47d6(0x465)][_0x3d47d6(0x85a)]({
                                            'targets': handindication,
                                            'x': _0x11a58f[_0x3d47d6(0x77d)](facewashhit['x'], 0x3c),
                                            'y': _0x11a58f['kjFxJ'](facewashhit['y'], 0x5a),
                                            'ease': _0x3d47d6(0x901),
                                            'duration': 0x258,
                                            'onComplete': _0x4e067c,
                                            'callbackScope': this
                                        });
                                        continue;
                                    case '1':
                                        handindication['y'] = 275.5;
                                        continue;
                                    case '2':
                                        handindication['x'] = 0x348;
                                        continue;
                                    case '3':
                                        handindication[_0x3d47d6(0x254)](0x1);
                                        continue;
                                    case '4':
                                        if (isDragging) return;
                                        continue;
                                    case '5':
                                        handindication[_0x3d47d6(0xa6e)] = !![];
                                        continue;
                                    case '6':
                                        handindication['alpha'] = 0x1;
                                        continue;
                                }
                                break;
                            }
                        } else {
                            if (_0x11a58f['FxQWy'](scrubbinghand['x'], 0x360)) {
                                handindication['alpha'] = 0x1, handindication[_0x3d47d6(0xa6e)] = !![], handindication['x'] = 0x360, handindication['y'] = 273.5, handindication[_0x3d47d6(0x254)](0x1), level1handtween = game[_0x3d47d6(0x374)][_0x3d47d6(0x237)][pageNo][_0x3d47d6(0x465)][_0x3d47d6(0x85a)]({
                                    'targets': handindication,
                                    'x': scrubbinghit['x'] - 0x3c,
                                    'y': scrubbinghit['y'] + 0x1e,
                                    'ease': _0x11a58f[_0x3d47d6(0x634)],
                                    'duration': 0x258,
                                    'onComplete': _0x4e067c,
                                    'callbackScope': this
                                });
                                if (isDragging) return;
                            } else {
                                if (_0x11a58f[_0x3d47d6(0x5cc)](towel['x'], 862.5)) {
                                    var _0x4652c3 = _0x11a58f['BNSOL'][_0x3d47d6(0xa4e)]('|'),
                                        _0x2340e4 = 0x0;
                                    while (!![]) {
                                        switch (_0x4652c3[_0x2340e4++]) {
                                            case '0':
                                                handindication[_0x3d47d6(0x254)](0x1);
                                                continue;
                                            case '1':
                                                if (isDragging) return;
                                                continue;
                                            case '2':
                                                handindication['y'] = 0x114;
                                                continue;
                                            case '3':
                                                handindication[_0x3d47d6(0xa6e)] = !![];
                                                continue;
                                            case '4':
                                                level1handtween = game[_0x3d47d6(0x374)][_0x3d47d6(0x237)][pageNo][_0x3d47d6(0x465)]['add']({
                                                    'targets': handindication,
                                                    'x': _0x11a58f[_0x3d47d6(0x72d)](towelhit['x'], 0x46),
                                                    'y': _0x11a58f[_0x3d47d6(0x5a0)](towelhit['y'], 0x37),
                                                    'ease': _0x11a58f[_0x3d47d6(0x634)],
                                                    'duration': 0x258,
                                                    'onComplete': _0x4e067c,
                                                    'callbackScope': this
                                                });
                                                continue;
                                            case '5':
                                                handindication['x'] = 862.5;
                                                continue;
                                            case '6':
                                                handindication['alpha'] = 0x1;
                                                continue;
                                        }
                                        break;
                                    }
                                } else {
                                    if (_0x11a58f['xFyui'](eshaper['x'], 0x336)) {
                                        var _0x1ce229 = _0x11a58f[_0x3d47d6(0x59a)][_0x3d47d6(0xa4e)]('|'),
                                            _0x5a8e70 = 0x0;
                                        while (!![]) {
                                            switch (_0x1ce229[_0x5a8e70++]) {
                                                case '0':
                                                    handindication[_0x3d47d6(0x254)](0x1);
                                                    continue;
                                                case '1':
                                                    handindication['visible'] = !![];
                                                    continue;
                                                case '2':
                                                    level1handtween = game[_0x3d47d6(0x374)]['scenes'][pageNo][_0x3d47d6(0x465)][_0x3d47d6(0x85a)]({
                                                        'targets': handindication,
                                                        'x': _0x11a58f[_0x3d47d6(0x7fe)](eshaperhit['x'], 0x50),
                                                        'y': _0x11a58f['JDNCv'](eshaperhit['y'], 0x14),
                                                        'ease': _0x11a58f[_0x3d47d6(0x634)],
                                                        'duration': 0x258,
                                                        'onComplete': _0x4e067c,
                                                        'callbackScope': this
                                                    });
                                                    continue;
                                                case '3':
                                                    if (isDragging) return;
                                                    continue;
                                                case '4':
                                                    handindication['y'] = 263.5;
                                                    continue;
                                                case '5':
                                                    handindication['alpha'] = 0x1;
                                                    continue;
                                                case '6':
                                                    handindication['x'] = 0x336;
                                                    continue;
                                            }
                                            break;
                                        }
                                    } else {
                                        if (_0x11a58f[_0x3d47d6(0x2e0)](pimpleremover['x'], 0x35f)) {
                                            var _0x15e284 = _0x11a58f['iovyQ'][_0x3d47d6(0xa4e)]('|'),
                                                _0x1a12ac = 0x0;
                                            while (!![]) {
                                                switch (_0x15e284[_0x1a12ac++]) {
                                                    case '0':
                                                        handindication['x'] = 0x341;
                                                        continue;
                                                    case '1':
                                                        level1handtween = game['scene']['scenes'][pageNo][_0x3d47d6(0x465)][_0x3d47d6(0x85a)]({
                                                            'targets': handindication,
                                                            'x': pimpleremoverhit['x'] - 0x3c,
                                                            'y': _0x11a58f[_0x3d47d6(0x504)](pimpleremoverhit['y'], 0x14),
                                                            'ease': _0x11a58f['YveXS'],
                                                            'duration': 0x258,
                                                            'onComplete': _0x4e067c,
                                                            'callbackScope': this
                                                        });
                                                        continue;
                                                    case '2':
                                                        if (isDragging) return;
                                                        continue;
                                                    case '3':
                                                        handindication[_0x3d47d6(0x254)](0x1);
                                                        continue;
                                                    case '4':
                                                        handindication['y'] = 0x114;
                                                        continue;
                                                    case '5':
                                                        handindication[_0x3d47d6(0x55e)] = 0x1;
                                                        continue;
                                                    case '6':
                                                        handindication['visible'] = !![];
                                                        continue;
                                                }
                                                break;
                                            }
                                        } else {
                                            if (_0x11a58f[_0x3d47d6(0x858)](facemaskimg['x'], 924.5)) {
                                                var _0x300172 = '6|0|3|1|4|2|5' [_0x3d47d6(0xa4e)]('|'),
                                                    _0x4053c8 = 0x0;
                                                while (!![]) {
                                                    switch (_0x300172[_0x4053c8++]) {
                                                        case '0':
                                                            handindication['visible'] = !![];
                                                            continue;
                                                        case '1':
                                                            handindication['y'] = 0x104;
                                                            continue;
                                                        case '2':
                                                            level1handtween = game[_0x3d47d6(0x374)][_0x3d47d6(0x237)][pageNo][_0x3d47d6(0x465)][_0x3d47d6(0x85a)]({
                                                                'targets': handindication,
                                                                'x': _0x11a58f[_0x3d47d6(0x504)](facemaskhit['x'], 0x3c),
                                                                'y': _0x11a58f['tFvlb'](facemaskhit['y'], 0x14),
                                                                'ease': 'Linear',
                                                                'duration': 0x258,
                                                                'onComplete': _0x4e067c,
                                                                'callbackScope': this
                                                            });
                                                            continue;
                                                        case '3':
                                                            handindication['x'] = 0x384;
                                                            continue;
                                                        case '4':
                                                            handindication[_0x3d47d6(0x254)](0x1);
                                                            continue;
                                                        case '5':
                                                            if (isDragging) return;
                                                            continue;
                                                        case '6':
                                                            handindication['alpha'] = 0x1;
                                                            continue;
                                                    }
                                                    break;
                                                }
                                            } else {
                                                if (_0x11a58f[_0x3d47d6(0x90e)](cucumberimg1['x'], 0x384)) {
                                                    var _0x32d601 = _0x11a58f[_0x3d47d6(0x1bf)][_0x3d47d6(0xa4e)]('|'),
                                                        _0x1e9623 = 0x0;
                                                    while (!![]) {
                                                        switch (_0x32d601[_0x1e9623++]) {
                                                            case '0':
                                                                handindication['alpha'] = 0x1;
                                                                continue;
                                                            case '1':
                                                                handindication['x'] = 0x37a;
                                                                continue;
                                                            case '2':
                                                                handindication[_0x3d47d6(0xa6e)] = !![];
                                                                continue;
                                                            case '3':
                                                                handindication['y'] = 0x12c;
                                                                continue;
                                                            case '4':
                                                                level1handtween = game[_0x3d47d6(0x374)][_0x3d47d6(0x237)][pageNo][_0x3d47d6(0x465)]['add']({
                                                                    'targets': handindication,
                                                                    'x': cucumberhit1['x'],
                                                                    'y': cucumberhit1['y'],
                                                                    'ease': _0x11a58f[_0x3d47d6(0x634)],
                                                                    'duration': 0x258,
                                                                    'onComplete': _0x4e067c,
                                                                    'callbackScope': this
                                                                });
                                                                continue;
                                                            case '5':
                                                                if (isDragging) return;
                                                                continue;
                                                            case '6':
                                                                handindication[_0x3d47d6(0x254)](0x1);
                                                                continue;
                                                        }
                                                        break;
                                                    }
                                                } else {
                                                    if (_0x11a58f['RbZLc'](cucumberimg2['x'], 0x384)) {
                                                        var _0x24c11a = _0x11a58f[_0x3d47d6(0x559)][_0x3d47d6(0xa4e)]('|'),
                                                            _0x4cb129 = 0x0;
                                                        while (!![]) {
                                                            switch (_0x24c11a[_0x4cb129++]) {
                                                                case '0':
                                                                    handindication['y'] = 0x127;
                                                                    continue;
                                                                case '1':
                                                                    handindication[_0x3d47d6(0x254)](0x1);
                                                                    continue;
                                                                case '2':
                                                                    handindication[_0x3d47d6(0x55e)] = 0x1;
                                                                    continue;
                                                                case '3':
                                                                    level1handtween = game[_0x3d47d6(0x374)][_0x3d47d6(0x237)][pageNo][_0x3d47d6(0x465)]['add']({
                                                                        'targets': handindication,
                                                                        'x': cucumberhit2['x'],
                                                                        'y': cucumberhit2['y'],
                                                                        'ease': _0x11a58f['YveXS'],
                                                                        'duration': 0x258,
                                                                        'onComplete': _0x4e067c,
                                                                        'callbackScope': this
                                                                    });
                                                                    continue;
                                                                case '4':
                                                                    if (isDragging) return;
                                                                    continue;
                                                                case '5':
                                                                    handindication[_0x3d47d6(0xa6e)] = !![];
                                                                    continue;
                                                                case '6':
                                                                    handindication['x'] = 0x37a;
                                                                    continue;
                                                            }
                                                            break;
                                                        }
                                                    } else {
                                                        if (_0x11a58f['uXheN'](creamhand['x'], 892.5)) {
                                                            var _0x11d556 = _0x3d47d6(0x789)[_0x3d47d6(0xa4e)]('|'),
                                                                _0x22fbe0 = 0x0;
                                                            while (!![]) {
                                                                switch (_0x11d556[_0x22fbe0++]) {
                                                                    case '0':
                                                                        handindication['setFrame'](0x1);
                                                                        continue;
                                                                    case '1':
                                                                        level1handtween = game['scene']['scenes'][pageNo][_0x3d47d6(0x465)]['add']({
                                                                            'targets': handindication,
                                                                            'x': _0x11a58f[_0x3d47d6(0x7fe)](creamhandhit['x'], 0x14),
                                                                            'y': creamhandhit['y'] - 0x28,
                                                                            'ease': _0x11a58f[_0x3d47d6(0x634)],
                                                                            'duration': 0x258,
                                                                            'onComplete': _0x4e067c,
                                                                            'callbackScope': this
                                                                        });
                                                                        continue;
                                                                    case '2':
                                                                        if (isDragging) return;
                                                                        continue;
                                                                    case '3':
                                                                        handindication['visible'] = !![];
                                                                        continue;
                                                                    case '4':
                                                                        handindication['y'] = 342.5;
                                                                        continue;
                                                                    case '5':
                                                                        handindication['x'] = 892.5;
                                                                        continue;
                                                                    case '6':
                                                                        handindication[_0x3d47d6(0x55e)] = 0x1;
                                                                        continue;
                                                                }
                                                                break;
                                                            }
                                                        } else {
                                                            if (_0x11a58f[_0x3d47d6(0x769)](spraybottle['x'], 875.5)) {
                                                                handindication[_0x3d47d6(0x55e)] = 0x1, handindication[_0x3d47d6(0xa6e)] = !![], handindication['x'] = 875.5, handindication['y'] = 0x11b, handindication['setFrame'](0x1), level1handtween = game[_0x3d47d6(0x374)]['scenes'][pageNo][_0x3d47d6(0x465)]['add']({
                                                                    'targets': handindication,
                                                                    'x': _0x11a58f[_0x3d47d6(0x982)](sprayhit['x'], 0x14),
                                                                    'y': sprayhit['y'],
                                                                    'ease': _0x11a58f[_0x3d47d6(0x634)],
                                                                    'duration': 0x258,
                                                                    'onComplete': _0x4e067c,
                                                                    'callbackScope': this
                                                                });
                                                                if (isDragging) return;
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
                    continue;
                case '1':
                    handindication[_0x3d47d6(0x254)](0x1);
                    continue;
                case '2':
                    handindication['y'] = dressimg['y'];
                    continue;
                case '3':
                    level1handtween1 = game[_0x3d47d6(0x374)][_0x3d47d6(0x237)][pageNo][_0x3d47d6(0x48f)]['addEvent']({
                        'delay': 0x384,
                        'callback': _0xa762b6,
                        'callbackScope': this
                    });
                    continue;
                case '4':
                    isDragging = ![];
                    continue;
                case '5':
                    handindication['x'] = dressimg['x'];
                    continue;
            }
            break;
        }
    }

    function _0x4e067c() {
        var _0x23dcdf = _0x5eab5f;
        handindication[_0x23dcdf(0x254)](0x0);
    }

    function _0xa762b6() {
        var _0x42958f = _0x5eab5f;
        handindication[_0x42958f(0xa6e)] = ![], level1handtween1[_0x42958f(0x971)](), level1handtween1 = game[_0x42958f(0x374)][_0x42958f(0x237)][pageNo]['time'][_0x42958f(0x85d)]({
            'delay': 0x5dc,
            'callback': _0x486b1d,
            'callbackScope': this
        });
    }

    function _0x3824a7() {
        var _0x2cf201 = _0x5eab5f;
        loadFinish && _0x11a58f[_0x2cf201(0x3a5)](done2['visible'], ![]) && (done2['visible'] = !![], done2[_0x2cf201(0x67d)](0x0), game['scene']['scenes'][pageNo][_0x2cf201(0x465)][_0x2cf201(0x85a)]({
            'targets': done2,
            'scaleX': 0x1,
            'scaleY': 0x1,
            'ease': _0x11a58f[_0x2cf201(0x634)],
            'duration': 0x1f4
        }), game[_0x2cf201(0x374)][_0x2cf201(0x237)][pageNo][_0x2cf201(0x465)][_0x2cf201(0x85a)]({
            'targets': done2,
            'angle': -0x168,
            'ease': _0x11a58f['YveXS'],
            'duration': 0x1f4
        }));
    }
    done2['on'](_0x11a58f['nspTK'], _0x4c457f), done2['on'](_0x11a58f['Rugsa'], _0x203e8f), done2['on'](_0x11a58f[_0x5eab5f(0x23b)], _0x4eb5e4), done2['on'](_0x11a58f[_0x5eab5f(0x726)], _0x10c4a4);

    function _0x4c457f() {
        var _0x2f6484 = _0x5eab5f;
        this[_0x2f6484(0x67d)](1.05);
    }

    function _0x203e8f() {
        var _0x449ab1 = _0x5eab5f;
        this[_0x449ab1(0x67d)](0x1);
    }

    function _0x10c4a4() {
        var _0x4f1e23 = _0x5eab5f;
        this[_0x4f1e23(0x67d)](1.05);
    }

    function _0x4eb5e4() {
        var _0x205b4d = _0x5eab5f;
        if (_0x11a58f[_0x205b4d(0x318)](!startgame4, loadFinish)) {
            var _0x554b74 = _0x205b4d(0xa67)[_0x205b4d(0xa4e)]('|'),
                _0x5d3990 = 0x0;
            while (!![]) {
                switch (_0x554b74[_0x5d3990++]) {
                    case '0':
                        blinktimer3[_0x205b4d(0x971)]();
                        continue;
                    case '1':
                        done2[_0x205b4d(0xa6e)] = ![];
                        continue;
                    case '2':
                        _0x11a58f[_0x205b4d(0x17b)](saveFile);
                        continue;
                    case '3':
                        blinktimer['remove']();
                        continue;
                    case '4':
                        _0x11a58f[_0x205b4d(0xa9e)](transitionIn);
                        continue;
                    case '5':
                        startgame4 = !![];
                        continue;
                    case '6':
                        done2['setScale'](0x1);
                        continue;
                    case '7':
                        _0x11a58f[_0x205b4d(0xa93)](level, 0x1) && (level = 0x2);
                        continue;
                    case '8':
                        blinktimer2['remove']();
                        continue;
                    case '9':
                        _0x11a58f[_0x205b4d(0x8fd)](playsoundeffects, _0x205b4d(0x51a));
                        continue;
                }
                break;
            }
        }
    }

    function _0x45034b() {
        var _0x5e966f = _0x5eab5f;
        playsoundeffects(_0x5e966f(0x381));
    }
}
var startgame5 = ![],
    btnstart1 = ![],
    btnstart2 = ![],
    btnstart3 = ![],
    btnstart4 = ![],
    btnstart5 = ![],
    glowarr = [0x0, 0x0, 0x0, 0x0],
    liparr = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x0],
    eyeballarr = [0x0, 0x0, 0x0, 0x0, 0x1, 0x0, 0x0, 0x0, 0x0],
    stonearr = [0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x0, 0x0, 0x0],
    eyeshadowarr = [0x0, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
    blusharr = [0x0, 0x0, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
    leveladcheck = 0x0,
    blushrandom = 0x0,
    liprandom = 0x0,
    level2 = new Phaser[(_0x192e21(0x8eb))]({
        'Extends': Phaser[_0x192e21(0xabc)],
        'initialize': function level2() {
            var _0x1ef43c = _0x192e21,
                _0x1a9efb = {
                    'GKoxm': _0x1ef43c(0x55f)
                };
            Phaser['Scene'][_0x1ef43c(0x654)](this, {
                'key': _0x1a9efb[_0x1ef43c(0x30e)]
            });
        },
        'preload': function() {
            var _0x4b405f = _0x192e21,
                _0x4f4d4b = _0x4b405f(0xa9d)[_0x4b405f(0xa4e)]('|'),
                _0x2715a8 = 0x0;
            while (!![]) {
                switch (_0x4f4d4b[_0x2715a8++]) {
                    case '0':
                        glowarr = [0x0, 0x0, 0x0, 0x0];
                        continue;
                    case '1':
                        btnstart1 = ![];
                        continue;
                    case '2':
                        btnstart3 = ![];
                        continue;
                    case '3':
                        startgame5 = ![];
                        continue;
                    case '4':
                        loadFinish = ![];
                        continue;
                    case '5':
                        btnstart5 = ![];
                        continue;
                    case '6':
                        btnstart2 = ![];
                        continue;
                    case '7':
                        pageNo = 0x5;
                        continue;
                    case '8':
                        settingval = ![];
                        continue;
                    case '9':
                        btnstart4 = ![];
                        continue;
                    case '10':
                        leveladcheck = 0x0;
                        continue;
                }
                break;
            }
        },
        'create': function() {
            var _0x1147ea = _0x192e21,
                _0x361a4b = {
                    'LNLaS': '22|116|11|89|46|108|67|57|109|34|103|114|62|19|20|88|106|121|26|68|107|9|82|64|31|15|120|28|101|56|110|70|115|48|130|98|90|83|37|49|92|12|13|21|117|125|59|43|53|51|111|29|122|84|61|63|41|6|66|36|96|95|7|30|16|86|52|132|85|112|58|33|133|102|40|124|79|1|123|77|100|129|10|35|74|2|17|4|71|131|69|25|91|87|18|27|72|80|23|38|55|50|0|75|118|47|3|54|32|135|44|60|8|14|128|76|73|134|113|127|24|65|81|105|104|45|126|97|78|39|42|99|5|93|94|119',
                    'UMdHm': _0x1147ea(0x41a),
                    'yZcaD': _0x1147ea(0x8f9),
                    'bXRLA': _0x1147ea(0x261),
                    'rqDHA': function(_0x26589f, _0xb3313a) {
                        return _0x26589f + _0xb3313a;
                    },
                    'kMKvR': 'Linear',
                    'mMBEF': function(_0x532421, _0x892884) {
                        return _0x532421 == _0x892884;
                    },
                    'IIMiV': 'level2eyeballvideo',
                    'jvPwO': function(_0x1b2b79, _0x43cb29) {
                        return _0x1b2b79 + _0x43cb29;
                    },
                    'YBRNj': function(_0x326516, _0xd3b734) {
                        return _0x326516 + _0xd3b734;
                    },
                    'uOqPI': _0x1147ea(0x8db),
                    'mCBhd': function(_0x4198d7, _0x12e5d6) {
                        return _0x4198d7 + _0x12e5d6;
                    },
                    'lopvE': function(_0x33958a, _0x1501fb) {
                        return _0x33958a + _0x1501fb;
                    },
                    'GiCQv': _0x1147ea(0x3d9),
                    'ryBrk': _0x1147ea(0xa96),
                    'mJyvU': function(_0x5bf91d, _0xbe9095) {
                        return _0x5bf91d - _0xbe9095;
                    },
                    'ReukC': function(_0x500f84, _0x2d73f5) {
                        return _0x500f84 >= _0x2d73f5;
                    },
                    'nuAeH': function(_0x5acb01, _0x3c644c) {
                        return _0x5acb01 == _0x3c644c;
                    },
                    'elyAd': _0x1147ea(0x733),
                    'IrbYQ': function(_0x54a529, _0x38e48f) {
                        return _0x54a529 + _0x38e48f;
                    },
                    'XOmmW': function(_0x39b5f7, _0x14382f) {
                        return _0x39b5f7 + _0x14382f;
                    },
                    'rQdTS': _0x1147ea(0x22b),
                    'kHVrK': function(_0x50c8d3, _0x50c87b) {
                        return _0x50c8d3 + _0x50c87b;
                    },
                    'kmTff': 'doll2bottom',
                    'fEJlo': function(_0x188f7b, _0x2ead19) {
                        return _0x188f7b + _0x2ead19;
                    },
                    'brVlU': 'level2cat',
                    'bvtbR': _0x1147ea(0x548),
                    'oTMpH': _0x1147ea(0x3aa),
                    'ombDy': 'level2eyeshadow',
                    'IruhM': 'larrow',
                    'XmpLy': 'doll2eyeball',
                    'guLlX': function(_0x906aa4, _0x480f8a) {
                        return _0x906aa4 + _0x480f8a;
                    },
                    'LwbVj': _0x1147ea(0x303),
                    'fwpKB': 'assets/level3/cat1.png',
                    'LyoDX': _0x1147ea(0x64e),
                    'RsixB': _0x1147ea(0x1b9),
                    'ImTwE': function(_0x335e64) {
                        return _0x335e64();
                    },
                    'wlRwf': _0x1147ea(0x75e),
                    'eYISf': _0x1147ea(0x2fb),
                    'cxyfz': 'doll2eyebrow',
                    'hKnLl': function(_0x217c96, _0x162444) {
                        return _0x217c96 > _0x162444;
                    },
                    'cYCYk': function(_0x3f7186, _0x192cc8) {
                        return _0x3f7186 + _0x192cc8;
                    },
                    'lMUuX': function(_0x59a57d, _0x4c6917) {
                        return _0x59a57d + _0x4c6917;
                    },
                    'lpJwD': function(_0x15e2f4, _0x5b6221) {
                        return _0x15e2f4 == _0x5b6221;
                    },
                    'XsgtH': _0x1147ea(0x8b1),
                    'zRcjE': function(_0x1b774d, _0x5b982e) {
                        return _0x1b774d + _0x5b982e;
                    },
                    'EwqAV': _0x1147ea(0xa14),
                    'ljjYh': _0x1147ea(0x92e),
                    'IKefu': function(_0x6d42f8, _0x261127) {
                        return _0x6d42f8 + _0x261127;
                    },
                    'sbrhC': _0x1147ea(0x276),
                    'EkhqN': function(_0x2f58c9, _0xe3d8a5) {
                        return _0x2f58c9 + _0xe3d8a5;
                    },
                    'xUihw': function(_0x2e91e2, _0x5f2f25) {
                        return _0x2e91e2 + _0x5f2f25;
                    },
                    'wkwOe': function(_0x50a39b, _0x5650d4) {
                        return _0x50a39b >= _0x5650d4;
                    },
                    'dsIIS': _0x1147ea(0x418),
                    'fhjPF': 'level2blush',
                    'TqMxE': _0x1147ea(0x842),
                    'jIrJd': _0x1147ea(0x569),
                    'IhhOS': _0x1147ea(0x7df),
                    'KnUPW': _0x1147ea(0x848),
                    'rrWmK': function(_0x4d9881, _0x4f5820) {
                        return _0x4d9881 == _0x4f5820;
                    },
                    'mQmNG': _0x1147ea(0x536),
                    'ARksK': function(_0x5506df, _0x9a58e4) {
                        return _0x5506df == _0x9a58e4;
                    },
                    'gJcvb': _0x1147ea(0xa2c),
                    'MHVQT': function(_0x182bb1, _0x1005a7) {
                        return _0x182bb1 + _0x1005a7;
                    },
                    'YGGYU': function(_0x4c3145, _0x24d4db) {
                        return _0x4c3145 + _0x24d4db;
                    },
                    'PhZOG': function(_0x6d5e20, _0x5e4c6f) {
                        return _0x6d5e20 + _0x5e4c6f;
                    },
                    'ubxJc': 'doll2body',
                    'lBsZw': _0x1147ea(0x6e5),
                    'yxGUc': _0x1147ea(0x792),
                    'JGxBM': function(_0x1c9259, _0xdd7778) {
                        return _0x1c9259 <= _0xdd7778;
                    },
                    'XWiFP': function(_0x4dad6f, _0x4c750a) {
                        return _0x4dad6f + _0x4c750a;
                    },
                    'UhZnc': 'level3acc',
                    'lWHxx': function(_0x4f9d53, _0x11fdc6) {
                        return _0x4f9d53 + _0x11fdc6;
                    },
                    'zwBeg': _0x1147ea(0x218),
                    'tSxrq': _0x1147ea(0x2eb),
                    'sJzeS': _0x1147ea(0xaad),
                    'HEspL': function(_0x164991, _0x327c51) {
                        return _0x164991 + _0x327c51;
                    },
                    'XouGb': function(_0x3c61f4, _0x144326) {
                        return _0x3c61f4 + _0x144326;
                    },
                    'TdFjh': function(_0x170125, _0x2e9c2e) {
                        return _0x170125 + _0x2e9c2e;
                    },
                    'cdvLb': _0x1147ea(0x7fd),
                    'EOvnm': function(_0x119387, _0x495d9e) {
                        return _0x119387 + _0x495d9e;
                    },
                    'wMZLe': _0x1147ea(0x4ba),
                    'ioSOD': function(_0x22bd16, _0x250fb2) {
                        return _0x22bd16 + _0x250fb2;
                    },
                    'Qnynk': _0x1147ea(0x63f),
                    'eIZkQ': function(_0x1cf576, _0x6f5ac5) {
                        return _0x1cf576 + _0x6f5ac5;
                    },
                    'Ebynn': _0x1147ea(0x21f),
                    'OFLRA': _0x1147ea(0x220),
                    'AeNxz': _0x1147ea(0x902),
                    'hRXBw': _0x1147ea(0x7dd),
                    'kMUJK': function(_0x1a73a1, _0x1604bb) {
                        return _0x1a73a1 >= _0x1604bb;
                    },
                    'TlGFt': function(_0x330eba, _0x523381) {
                        return _0x330eba + _0x523381;
                    },
                    'hJSKe': function(_0x4a185b, _0x4ae7ff) {
                        return _0x4a185b + _0x4ae7ff;
                    },
                    'rmWHT': '102',
                    'VooyG': function(_0x1a633f, _0x317f05) {
                        return _0x1a633f >= _0x317f05;
                    },
                    'bhsrF': function(_0x2b4a48, _0x110e97) {
                        return _0x2b4a48 + _0x110e97;
                    },
                    'IBPca': '104',
                    'QpsIe': '105',
                    'JjOdz': 'done2',
                    'TghKA': _0x1147ea(0x5fa),
                    'KSmUm': function(_0x18ec38, _0x15caec) {
                        return _0x18ec38 + _0x15caec;
                    },
                    'MpmGN': _0x1147ea(0x6db),
                    'RHULj': function(_0x265a70, _0x4736ed) {
                        return _0x265a70 >= _0x4736ed;
                    },
                    'DZHHi': function(_0x2ceee5, _0x187ced) {
                        return _0x2ceee5 + _0x187ced;
                    },
                    'lADaf': _0x1147ea(0x915),
                    'SWfIe': _0x1147ea(0x5b9),
                    'ZurZf': _0x1147ea(0x26a),
                    'krfvC': _0x1147ea(0x698),
                    'ioEsO': _0x1147ea(0x70a),
                    'goYIk': _0x1147ea(0x72e),
                    'NUVBB': _0x1147ea(0x2ef),
                    'yMeMF': function(_0x2384fe, _0x2b7a08) {
                        return _0x2384fe >= _0x2b7a08;
                    },
                    'XLgkN': _0x1147ea(0x341),
                    'cUoPL': function(_0xd0a51a, _0x3db0be) {
                        return _0xd0a51a + _0x3db0be;
                    },
                    'OnTfF': _0x1147ea(0x235),
                    'okZwA': function(_0x4027ef, _0x256e31) {
                        return _0x4027ef >= _0x256e31;
                    },
                    'CtFYh': _0x1147ea(0x396),
                    'pZqDM': _0x1147ea(0x702),
                    'gURSC': _0x1147ea(0x430),
                    'meDbT': _0x1147ea(0x89b),
                    'XHuHR': function(_0x48b833, _0xe8115) {
                        return _0x48b833 <= _0xe8115;
                    },
                    'WyhpY': function(_0x2c3872, _0x248e45) {
                        return _0x2c3872 == _0x248e45;
                    },
                    'fAYEV': function(_0xc2f017, _0x1345fe) {
                        return _0xc2f017 + _0x1345fe;
                    },
                    'lhPGE': _0x1147ea(0x2a3),
                    'ADyXw': 'doll2eyeshadeclose',
                    'CuAdA': '125',
                    'BMsbW': _0x1147ea(0x71f),
                    'PVMQJ': _0x1147ea(0x990),
                    'MRfTT': function(_0x540a11) {
                        return _0x540a11();
                    },
                    'XJPVn': _0x1147ea(0xa6c),
                    'cHpmH': _0x1147ea(0x475),
                    'PWGLL': '129',
                    'dTAiD': '134',
                    'oSwre': _0x1147ea(0xa81)
                },
                _0x4c37d1 = _0x361a4b[_0x1147ea(0x3a6)][_0x1147ea(0xa4e)]('|'),
                _0x295d0f = 0x0;
            while (!![]) {
                switch (_0x4c37d1[_0x295d0f++]) {
                    case '0':
                        for (i = 0x3; i >= 0x1; i--) {
                            cupboardgroup1[_0x1147ea(0x85a)](game[_0x361a4b[_0x1147ea(0x888)] + i]);
                        }
                        continue;
                    case '1':
                        level2grp['add'](doll2stone);
                        continue;
                    case '2':
                        doll2eyeshadeopen['setFrame'](marr[0x0]);
                        continue;
                    case '3':
                        flashshape[_0x1147ea(0xa44)](0x0, 0x0, 0x50a, 0x356);
                        continue;
                    case '4':
                        doll2lip[_0x1147ea(0x254)](marr[0x2]);
                        continue;
                    case '5':
                        game[_0x1147ea(0x374)][_0x1147ea(0x237)][pageNo]['load']['spritesheet'](_0x361a4b[_0x1147ea(0x2fd)], _0x361a4b[_0x1147ea(0x43f)], {
                            'frameWidth': 0x3f,
                            'frameHeight': 0x3a
                        });
                        continue;
                    case '6':
                        doll2stone2 = this['add'][_0x1147ea(0x244)](453.5, 0x129, _0x1147ea(0x64e))[_0x1147ea(0x541)](0.5);
                        continue;
                    case '7':
                        level2grp[_0x1147ea(0x85a)](doll2bhair);
                        continue;
                    case '8':
                        game[_0x1147ea(0x374)][_0x1147ea(0x237)][pageNo][_0x1147ea(0x465)]['add']({
                            'targets': rarrow,
                            'x': _0x361a4b['rqDHA'](rarrow['x'], 0x4),
                            'ease': _0x361a4b[_0x1147ea(0x3c0)],
                            'duration': 0x2bc,
                            'repeat': -0x1,
                            'yoyo': !![]
                        });
                        continue;
                    case '9':
                        for (i = 0x8; i >= 0x1; i--) {
                            _0x361a4b[_0x1147ea(0x30f)](showad, 0x1) && eyeballarr[i] == 0x1 && (game[_0x361a4b[_0x1147ea(0x570)](_0x361a4b['IIMiV'], i)] = this['add'][_0x1147ea(0x244)](_0x361a4b[_0x1147ea(0x5c6)](_0x562493[i], 0x1e), _0x361a4b['YBRNj'](_0x35c5c7[i], 0x1e), _0x361a4b[_0x1147ea(0x9bb)])[_0x1147ea(0x541)](0.5, 0.5), game[_0x361a4b['mCBhd'](_0x361a4b[_0x1147ea(0x1dc)], i)]['visible'] = ![], game[_0x1147ea(0x374)][_0x1147ea(0x237)][pageNo][_0x1147ea(0x465)][_0x1147ea(0x85a)]({
                                'targets': game[_0x361a4b[_0x1147ea(0x28a)](_0x361a4b[_0x1147ea(0x1dc)], i)],
                                'scale': 1.1,
                                'ease': _0x361a4b[_0x1147ea(0x3c0)],
                                'duration': 0x12c,
                                'repeat': -0x1,
                                'yoyo': !![]
                            }));
                        }
                        continue;
                    case '10':
                        level2grp['add'](doll2hair);
                        continue;
                    case '11':
                        level2text = this['add'][_0x1147ea(0x244)](852.5, 566.5, _0x361a4b[_0x1147ea(0x926)])[_0x1147ea(0x541)](0.5);
                        continue;
                    case '12':
                        doll2rhand = this[_0x1147ea(0x85a)][_0x1147ea(0x323)](224.5, 0x351, _0x361a4b['ryBrk'])[_0x1147ea(0x541)](0.5);
                        continue;
                    case '13':
                        doll2leg = this[_0x1147ea(0x85a)]['image'](350.5, 1418.5, 'doll2leg')[_0x1147ea(0x541)](0.5);
                        continue;
                    case '14':
                        game[_0x1147ea(0x374)]['scenes'][pageNo]['tweens'][_0x1147ea(0x85a)]({
                            'targets': larrow,
                            'x': _0x361a4b[_0x1147ea(0x4ce)](larrow['x'], 0x4),
                            'ease': _0x1147ea(0x901),
                            'duration': 0x2bc,
                            'repeat': -0x1,
                            'yoyo': !![]
                        });
                        continue;
                    case '15':
                        for (i = 0x8; _0x361a4b[_0x1147ea(0x493)](i, 0x1); i--) {
                            _0x361a4b[_0x1147ea(0x813)](showad, 0x1) && eyeshadowarr[i] == 0x1 && (game[_0x361a4b[_0x1147ea(0x515)](_0x361a4b['elyAd'], i)] = this[_0x1147ea(0x85a)][_0x1147ea(0x244)](_0x361a4b[_0x1147ea(0x28a)](_0x32b02d[i], 0x1e), _0x361a4b[_0x1147ea(0xa17)](_0x8174df[i], 0x1e), _0x361a4b['uOqPI'])['setOrigin'](0.5, 0.5), game[_0x361a4b['XOmmW'](_0x361a4b['elyAd'], i)][_0x1147ea(0xa6e)] = ![], game[_0x1147ea(0x374)][_0x1147ea(0x237)][pageNo]['tweens'][_0x1147ea(0x85a)]({
                                'targets': game[_0x361a4b[_0x1147ea(0xa47)] + i],
                                'scale': 1.1,
                                'ease': _0x361a4b[_0x1147ea(0x3c0)],
                                'duration': 0x12c,
                                'repeat': -0x1,
                                'yoyo': !![]
                            }));
                        }
                        continue;
                    case '16':
                        level2grp['add'](doll2body);
                        continue;
                    case '17':
                        doll2blush[_0x1147ea(0x254)](marr[0x1]);
                        continue;
                    case '18':
                        cupboardgroup[_0x1147ea(0x85a)](level2panel);
                        continue;
                    case '19':
                        var _0x1ecd01 = [, 0x6d, 0x6d, 0xe0, 0xe0, 339.5, 339.5, 454.5, 454.5];
                        continue;
                    case '20':
                        for (i = 0x8; i >= 0x1; i--) {
                            game[_0x361a4b[_0x1147ea(0x570)](_0x1147ea(0x22b), i)] = this[_0x1147ea(0x85a)][_0x1147ea(0x244)](_0x24c688[i], _0x1ecd01[i], _0x361a4b[_0x1147ea(0x570)](_0x361a4b[_0x1147ea(0x721)], i))[_0x1147ea(0x541)](0.5, 0.5)[_0x1147ea(0xa74)]({
                                'pixelPerfect': !![],
                                'useHandCursor': !![]
                            }), game[_0x361a4b['kHVrK'](_0x361a4b['rQdTS'], i)][_0x1147ea(0xa6e)] = ![];
                        }
                        continue;
                    case '21':
                        doll2bottom = this[_0x1147ea(0x85a)][_0x1147ea(0x323)](0x1ad, 0x3cf, _0x361a4b[_0x1147ea(0x7ab)])['setOrigin'](0.5);
                        continue;
                    case '22':
                        level2background = this['add'][_0x1147ea(0x323)](0x0, 0x0, 'level2background')[_0x1147ea(0x541)](0x0, 0x0);
                        continue;
                    case '23':
                        for (i = 0x5; i >= 0x1; i--) {
                            cupboardgroup['add'](game[_0x361a4b[_0x1147ea(0x56a)](_0x361a4b[_0x1147ea(0x8c0)], i)]);
                        }
                        continue;
                    case '24':
                        dollgliter = this[_0x1147ea(0x85a)][_0x1147ea(0x244)](0x111, 0x48, _0x361a4b[_0x1147ea(0x50d)]);
                        continue;
                    case '25':
                        doll2stone3[_0x1147ea(0x254)](marr[0x7]);
                        continue;
                    case '26':
                        var _0x562493 = [, 0x317, 916.5, 0x317, 916.5, 0x317, 916.5, 0x317, 916.5];
                        continue;
                    case '27':
                        cupboardgroup['add'](level2text);
                        continue;
                    case '28':
                        var _0x5008e0 = [, 0x64, 0xab, 0xf3, 0x139, 0x184, 0x1cf, 0x184, 0x1cf];
                        continue;
                    case '29':
                        doll2blush = this[_0x1147ea(0x85a)][_0x1147ea(0x244)](413.5, 308.5, _0x361a4b[_0x1147ea(0x45b)])['setOrigin'](0.5);
                        continue;
                    case '30':
                        level2grp[_0x1147ea(0x85a)](doll2rhand);
                        continue;
                    case '31':
                        for (i = 0x8; i >= 0x1; i--) {
                            game[_0x361a4b['IrbYQ'](_0x361a4b[_0x1147ea(0x8b2)], i)] = this[_0x1147ea(0x85a)][_0x1147ea(0x244)](_0x32b02d[i], _0x8174df[i], _0x361a4b[_0x1147ea(0x412)](_0x361a4b[_0x1147ea(0x8b2)], i))['setOrigin'](0.5, 0.5)[_0x1147ea(0xa74)]({
                                'pixelPerfect': !![],
                                'useHandCursor': !![]
                            }), game[_0x361a4b[_0x1147ea(0x8b2)] + i][_0x1147ea(0xa6e)] = ![];
                        }
                        continue;
                    case '32':
                        rarrow = this[_0x1147ea(0x85a)][_0x1147ea(0x244)](0x304, 0x238, _0x361a4b[_0x1147ea(0x7e6)])[_0x1147ea(0x541)](0.5)[_0x1147ea(0xa74)]({
                            'useHandCursor': !![]
                        });
                        continue;
                    case '33':
                        level2grp[_0x1147ea(0x85a)](doll2eyetop);
                        continue;
                    case '34':
                        var _0x23db7e = [, 0x6d, 0x6d, 0xe0, 0xe0, 339.5, 339.5, 454.5, 454.5];
                        continue;
                    case '35':
                        level2grp['x'] = -0x3e8;
                        continue;
                    case '36':
                        doll2eyeball = this[_0x1147ea(0x85a)][_0x1147ea(0x244)](416.5, 0x103, _0x361a4b['XmpLy'])['setOrigin'](0.5);
                        continue;
                    case '37':
                        fillbackground['visible'] = ![];
                        continue;
                    case '38':
                        for (i = 0x8; _0x361a4b[_0x1147ea(0x493)](i, 0x1); i--) {
                            cupboardgroup[_0x1147ea(0x85a)](game[_0x361a4b[_0x1147ea(0x98b)](_0x361a4b['LwbVj'], i)]);
                        }
                        continue;
                    case '39':
                        game[_0x1147ea(0x374)][_0x1147ea(0x237)][pageNo][_0x1147ea(0x742)]['spritesheet']('level3cat1', _0x361a4b[_0x1147ea(0x49f)], {
                            'frameWidth': 0x3f,
                            'frameHeight': 0x3a
                        });
                        continue;
                    case '40':
                        level2grp[_0x1147ea(0x85a)](doll2blush);
                        continue;
                    case '41':
                        doll2stone1 = this[_0x1147ea(0x85a)]['sprite'](453.5, 0x129, _0x361a4b['LyoDX'])[_0x1147ea(0x541)](0.5);
                        continue;
                    case '42':
                        game[_0x1147ea(0x374)][_0x1147ea(0x237)][pageNo][_0x1147ea(0x742)]['spritesheet'](_0x1147ea(0x81c), _0x361a4b[_0x1147ea(0xa23)], {
                            'frameWidth': 0x3f,
                            'frameHeight': 0x3a
                        });
                        continue;
                    case '43':
                        doll2eyetop = this[_0x1147ea(0x85a)][_0x1147ea(0x323)](0x19f, 258.5, 'doll2eyetop')[_0x1147ea(0x541)](0.5);
                        continue;
                    case '44':
                        rarrow[_0x1147ea(0x67d)](0x1, 0x1);
                        continue;
                    case '45':
                        _0x361a4b[_0x1147ea(0xa97)](logomutefun);
                        continue;
                    case '46':
                        var _0xe29305 = [, 0x317, 916.5, 0x317, 916.5, 0x317, 916.5, 0x317, 916.5];
                        continue;
                    case '47':
                        flashshape['fillStyle'](0xffffff, 0x1);
                        continue;
                    case '48':
                        game[_0x361a4b['brVlU'] + 0x1][_0x1147ea(0x254)](0x1);
                        continue;
                    case '49':
                        doll2bhair = this[_0x1147ea(0x85a)]['image'](0x1a5, 0x128, _0x361a4b[_0x1147ea(0xa1b)])[_0x1147ea(0x541)](0.5);
                        continue;
                    case '50':
                        cupboardgroup1 = this['add'][_0x1147ea(0x501)]();
                        continue;
                    case '51':
                        doll2dress = this[_0x1147ea(0x85a)][_0x1147ea(0x323)](438.5, 0x351, _0x361a4b[_0x1147ea(0x6fb)])[_0x1147ea(0x541)](0.5);
                        continue;
                    case '52':
                        level2grp[_0x1147ea(0x85a)](doll2bottom);
                        continue;
                    case '53':
                        doll2eyebrow = this[_0x1147ea(0x85a)]['image'](0x19f, 219.5, _0x361a4b['cxyfz'])['setOrigin'](0.5);
                        continue;
                    case '54':
                        flashshape[_0x1147ea(0xa6e)] = ![];
                        continue;
                    case '55':
                        cupboardgroup['x'] = 0x320;
                        continue;
                    case '56':
                        _0x361a4b['hKnLl'](marr[0x2], 0x0) && (game[_0x361a4b['mCBhd'](_0x361a4b[_0x1147ea(0x7ca)], 0x1)][_0x1147ea(0xa6e)] = !![], game[_0x361a4b[_0x1147ea(0x65a)](_0x1147ea(0x303), 0x1)]['x'] = game[_0x361a4b['cYCYk'](_0x361a4b[_0x1147ea(0x721)], marr[0x2])]['x'], game[_0x361a4b[_0x1147ea(0x7f1)](_0x361a4b[_0x1147ea(0x7ca)], 0x1)]['y'] = game[_0x361a4b[_0x1147ea(0x65a)](_0x361a4b[_0x1147ea(0x721)], marr[0x2])]['y']);
                        continue;
                    case '57':
                        for (i = 0x8; i >= 0x1; i--) {
                            showad == 0x1 && _0x361a4b[_0x1147ea(0x97c)](liparr[i], 0x1) && (game[_0x361a4b[_0x1147ea(0x6e0)] + i] = this[_0x1147ea(0x85a)][_0x1147ea(0x244)](_0x361a4b[_0x1147ea(0x361)](_0xe29305[i], 0x1e), _0x2bb5ca[i] + 0x1e, _0x361a4b[_0x1147ea(0x9bb)])[_0x1147ea(0x541)](0.5, 0.5), game[_0x361a4b['zRcjE'](_0x361a4b[_0x1147ea(0x6e0)], i)]['visible'] = ![], game['scene'][_0x1147ea(0x237)][pageNo][_0x1147ea(0x465)][_0x1147ea(0x85a)]({
                                'targets': game[_0x361a4b[_0x1147ea(0x6e0)] + i],
                                'scale': 1.1,
                                'ease': _0x1147ea(0x901),
                                'duration': 0x12c,
                                'repeat': -0x1,
                                'yoyo': !![]
                            }));
                        }
                        continue;
                    case '58':
                        level2grp['add'](doll2eyeball);
                        continue;
                    case '59':
                        doll2head = this['add'][_0x1147ea(0x323)](415.5, 228.5, _0x361a4b[_0x1147ea(0x25e)])[_0x1147ea(0x541)](0.5);
                        continue;
                    case '60':
                        larrow[_0x1147ea(0x67d)](-0x1, 0x1);
                        continue;
                    case '61':
                        doll2lip = this[_0x1147ea(0x85a)][_0x1147ea(0x244)](415.5, 365.5, _0x361a4b['ljjYh'])[_0x1147ea(0x541)](0.5);
                        continue;
                    case '62':
                        var _0x24c688 = [, 0x317, 916.5, 0x317, 916.5, 0x317, 916.5, 0x317, 916.5];
                        continue;
                    case '63':
                        doll2stone = this[_0x1147ea(0x85a)][_0x1147ea(0x244)](453.5, 0x129, _0x361a4b[_0x1147ea(0x6bf)])[_0x1147ea(0x541)](0.5);
                        continue;
                    case '64':
                        var _0x8174df = [, 0x6d, 0x6d, 0xe0, 0xe0, 339.5, 339.5, 454.5, 454.5];
                        continue;
                    case '65':
                        anim = this[_0x1147ea(0x86e)]['create']({
                            'key': _0x361a4b['bvtbR'],
                            'frames': this[_0x1147ea(0x86e)][_0x1147ea(0x173)](_0x361a4b[_0x1147ea(0x50d)], {
                                'start': 0x0,
                                'end': 0x24
                            }),
                            'frameRate': 0x1e
                        });
                        continue;
                    case '66':
                        doll2stone3 = this['add'][_0x1147ea(0x244)](453.5, 0x129, _0x361a4b[_0x1147ea(0x6bf)])[_0x1147ea(0x541)](0.5);
                        continue;
                    case '67':
                        for (i = 0x8; _0x361a4b[_0x1147ea(0x493)](i, 0x1); i--) {
                            game[_0x361a4b[_0x1147ea(0x807)](_0x361a4b[_0x1147ea(0x5d6)], i)] = this['add'][_0x1147ea(0x244)](_0xe29305[i], _0x2bb5ca[i], _0x361a4b[_0x1147ea(0x360)](_0x361a4b['sbrhC'], i))[_0x1147ea(0x541)](0.5, 0.5)[_0x1147ea(0xa74)]({
                                'pixelPerfect': !![],
                                'useHandCursor': !![]
                            }), game[_0x361a4b[_0x1147ea(0x200)](_0x361a4b['sbrhC'], i)][_0x1147ea(0xa6e)] = ![];
                        }
                        continue;
                    case '68':
                        var _0x35c5c7 = [, 0x6d, 0x6d, 0xe0, 0xe0, 339.5, 339.5, 454.5, 454.5];
                        continue;
                    case '69':
                        doll2stone2['setFrame'](marr[0x6]);
                        continue;
                    case '70':
                        var _0x4a4128 = [, 0x85, 0xca, 272.5, 348.5, 424.5];
                        continue;
                    case '71':
                        doll2stone[_0x1147ea(0x254)](marr[0x3]);
                        continue;
                    case '72':
                        for (i = 0x8; _0x361a4b[_0x1147ea(0x812)](i, 0x1); i--) {
                            var _0x352662 = _0x361a4b[_0x1147ea(0x415)][_0x1147ea(0xa4e)]('|'),
                                _0x117ac4 = 0x0;
                            while (!![]) {
                                switch (_0x352662[_0x117ac4++]) {
                                    case '0':
                                        cupboardgroup[_0x1147ea(0x85a)](game[_0x361a4b[_0x1147ea(0x361)](_0x361a4b[_0x1147ea(0x8b2)], i)]);
                                        continue;
                                    case '1':
                                        cupboardgroup[_0x1147ea(0x85a)](game[_0x361a4b[_0x1147ea(0x807)](_0x361a4b[_0x1147ea(0x55d)], i)]);
                                        continue;
                                    case '2':
                                        cupboardgroup['add'](game[_0x361a4b[_0x1147ea(0xa17)](_0x361a4b[_0x1147ea(0x5d6)], i)]);
                                        continue;
                                    case '3':
                                        cupboardgroup['add'](game[_0x361a4b['IKefu'](_0x361a4b[_0x1147ea(0x721)], i)]);
                                        continue;
                                    case '4':
                                        cupboardgroup['add'](game[_0x361a4b[_0x1147ea(0xa17)](_0x361a4b[_0x1147ea(0x720)], i)]);
                                        continue;
                                }
                                break;
                            }
                        }
                        continue;
                    case '73':
                        cupboardgroup['y'] = 0xa;
                        continue;
                    case '74':
                        doll2eyeshadeclose[_0x1147ea(0x254)](marr[0x0]);
                        continue;
                    case '75':
                        cupboardgroup1['x'] = -0x320;
                        continue;
                    case '76':
                        cupboardgroup[_0x1147ea(0x85a)](larrow);
                        continue;
                    case '77':
                        level2grp[_0x1147ea(0x85a)](doll2stone2);
                        continue;
                    case '78':
                        game[_0x1147ea(0x374)][_0x1147ea(0x237)][pageNo]['load']['image'](_0x361a4b[_0x1147ea(0x3a4)], _0x361a4b['IhhOS']);
                        continue;
                    case '79':
                        level2grp['add'](doll2eyeshadeopen);
                        continue;
                    case '80':
                        if (showad == 0x1)
                            for (i = 0x8; _0x361a4b[_0x1147ea(0x493)](i, 0x1); i--) {
                                var _0x12abc9 = _0x361a4b[_0x1147ea(0x64b)][_0x1147ea(0xa4e)]('|'),
                                    _0x1e2dfb = 0x0;
                                while (!![]) {
                                    switch (_0x12abc9[_0x1e2dfb++]) {
                                        case '0':
                                            _0x361a4b[_0x1147ea(0x8a5)](stonearr[i], 0x1) && cupboardgroup[_0x1147ea(0x85a)](game[_0x361a4b['mQmNG'] + i]);
                                            continue;
                                        case '1':
                                            eyeballarr[i] == 0x1 && cupboardgroup[_0x1147ea(0x85a)](game[_0x361a4b['IIMiV'] + i]);
                                            continue;
                                        case '2':
                                            blusharr[i] == 0x1 && cupboardgroup[_0x1147ea(0x85a)](game[_0x361a4b[_0x1147ea(0x65a)](_0x1147ea(0x341), i)]);
                                            continue;
                                        case '3':
                                            _0x361a4b[_0x1147ea(0x813)](liparr[i], 0x1) && cupboardgroup[_0x1147ea(0x85a)](game[_0x361a4b['XsgtH'] + i]);
                                            continue;
                                        case '4':
                                            _0x361a4b['ARksK'](eyeshadowarr[i], 0x1) && cupboardgroup[_0x1147ea(0x85a)](game[_0x361a4b[_0x1147ea(0x98b)](_0x361a4b[_0x1147ea(0xa47)], i)]);
                                            continue;
                                    }
                                    break;
                                }
                            }
                        continue;
                    case '81':
                        done2 = this[_0x1147ea(0x85a)][_0x1147ea(0x244)](0x8c, 0x212, 'done2')['setOrigin'](0.5, 0.5)[_0x1147ea(0xa74)]({
                            'pixelPerfect': !![],
                            'useHandCursor': !![]
                        });
                        continue;
                    case '82':
                        var _0x32b02d = [, 0x317, 916.5, 0x317, 916.5, 0x317, 916.5, 0x317, 916.5];
                        continue;
                    case '83':
                        fillbackground = game[_0x1147ea(0x374)][_0x1147ea(0x237)][pageNo][_0x1147ea(0x85a)]['image'](0x0, 0x0, _0x1147ea(0x43d))['setOrigin'](0x0, 0x0)[_0x1147ea(0xa74)]({
                            'pixelPerfect': !![],
                            'useHandCursor': !![]
                        });
                        continue;
                    case '84':
                        doll2eyeshadeopen = this[_0x1147ea(0x85a)][_0x1147ea(0x244)](0x1a0, 0xff, _0x361a4b[_0x1147ea(0x6c8)])[_0x1147ea(0x541)](0.5);
                        continue;
                    case '85':
                        level2grp[_0x1147ea(0x85a)](doll2lhand2);
                        continue;
                    case '86':
                        level2grp[_0x1147ea(0x85a)](doll2leg);
                        continue;
                    case '87':
                        cupboardgroup = this['add'][_0x1147ea(0x501)]();
                        continue;
                    case '88':
                        for (i = 0x8; _0x361a4b[_0x1147ea(0x493)](i, 0x1); i--) {
                            _0x361a4b['nuAeH'](showad, 0x1) && stonearr[i] == 0x1 && (game[_0x361a4b['MHVQT'](_0x361a4b[_0x1147ea(0x92f)], i)] = this['add'][_0x1147ea(0x244)](_0x361a4b[_0x1147ea(0x7f9)](_0x24c688[i], 0x1e), _0x1ecd01[i] + 0x1e, _0x361a4b[_0x1147ea(0x9bb)])['setOrigin'](0.5, 0.5), game[_0x361a4b[_0x1147ea(0x727)](_0x361a4b[_0x1147ea(0x92f)], i)]['visible'] = ![], game['scene'][_0x1147ea(0x237)][pageNo]['tweens'][_0x1147ea(0x85a)]({
                                'targets': game[_0x361a4b[_0x1147ea(0x412)](_0x361a4b[_0x1147ea(0x92f)], i)],
                                'scale': 1.1,
                                'ease': _0x1147ea(0x901),
                                'duration': 0x12c,
                                'repeat': -0x1,
                                'yoyo': !![]
                            }));
                        }
                        continue;
                    case '89':
                        level2text[_0x1147ea(0x254)](0x1);
                        continue;
                    case '90':
                        for (i = 0x3; _0x361a4b[_0x1147ea(0x812)](i, 0x1); i--) {
                            game[_0x361a4b[_0x1147ea(0x888)] + i] = this[_0x1147ea(0x85a)][_0x1147ea(0x244)](_0x4cca7f[i], _0x48eefe[i], _0x361a4b[_0x1147ea(0x7f9)](_0x1147ea(0x41a), i))[_0x1147ea(0x541)](0.5, 0.5)[_0x1147ea(0xa74)]({
                                'pixelPerfect': !![],
                                'useHandCursor': !![]
                            });
                        }
                        continue;
                    case '91':
                        doll2eyeball[_0x1147ea(0x254)](marr[0x4]);
                        continue;
                    case '92':
                        doll2body = this[_0x1147ea(0x85a)][_0x1147ea(0x323)](404.5, 0x25e, _0x361a4b[_0x1147ea(0x175)])[_0x1147ea(0x541)](0.5);
                        continue;
                    case '93':
                        game[_0x1147ea(0x374)][_0x1147ea(0x237)][pageNo][_0x1147ea(0x742)][_0x1147ea(0x59c)](_0x361a4b[_0x1147ea(0x39c)], _0x361a4b['yxGUc'], {
                            'frameWidth': 0x3f,
                            'frameHeight': 0x3a
                        });
                        continue;
                    case '94':
                        for (i = 0x1; _0x361a4b[_0x1147ea(0xa79)](i, 0x8); i++) {
                            var _0x167ae0 = '3|0|1|2|4' [_0x1147ea(0xa4e)]('|'),
                                _0x287298 = 0x0;
                            while (!![]) {
                                switch (_0x167ae0[_0x287298++]) {
                                    case '0':
                                        game[_0x1147ea(0x374)][_0x1147ea(0x237)][pageNo][_0x1147ea(0x742)]['image'](_0x361a4b['XWiFP'](_0x361a4b[_0x1147ea(0x3ec)], i), _0x361a4b[_0x1147ea(0x821)](_0x361a4b[_0x1147ea(0x8bc)], i) + _0x361a4b['tSxrq']);
                                        continue;
                                    case '1':
                                        game[_0x1147ea(0x374)][_0x1147ea(0x237)][pageNo][_0x1147ea(0x742)][_0x1147ea(0x323)](_0x361a4b['XOmmW'](_0x1147ea(0x8ac), i), _0x361a4b[_0x1147ea(0x361)](_0x361a4b[_0x1147ea(0x63d)](_0x361a4b[_0x1147ea(0x4db)], i), _0x361a4b[_0x1147ea(0x192)]));
                                        continue;
                                    case '2':
                                        game[_0x1147ea(0x374)][_0x1147ea(0x237)][pageNo][_0x1147ea(0x742)][_0x1147ea(0x323)](_0x361a4b[_0x1147ea(0x777)](_0x1147ea(0x7e0), i), _0x361a4b[_0x1147ea(0x4fc)](_0x361a4b[_0x1147ea(0x283)](_0x361a4b[_0x1147ea(0x909)], i), _0x361a4b['tSxrq']));
                                        continue;
                                    case '3':
                                        game[_0x1147ea(0x374)][_0x1147ea(0x237)][pageNo]['load'][_0x1147ea(0x323)](_0x361a4b[_0x1147ea(0xaaa)](_0x361a4b[_0x1147ea(0x226)], i), _0x361a4b[_0x1147ea(0x4fd)](_0x361a4b[_0x1147ea(0x360)](_0x361a4b[_0x1147ea(0x97f)], i), _0x361a4b[_0x1147ea(0x192)]));
                                        continue;
                                    case '4':
                                        game[_0x1147ea(0x374)][_0x1147ea(0x237)][pageNo][_0x1147ea(0x742)][_0x1147ea(0x323)](_0x361a4b[_0x1147ea(0x957)](_0x361a4b[_0x1147ea(0x9cc)], i), _0x361a4b[_0x1147ea(0x283)](_0x361a4b[_0x1147ea(0x360)](_0x361a4b[_0x1147ea(0x594)], i), '.png'));
                                        continue;
                                }
                                break;
                            }
                        }
                        continue;
                    case '95':
                        level2grp = this[_0x1147ea(0x85a)][_0x1147ea(0x501)]();
                        continue;
                    case '96':
                        doll2eyeshadeopen['visible'] = ![];
                        continue;
                    case '97':
                        this[_0x1147ea(0x742)]['on'](_0x361a4b[_0x1147ea(0x29c)], function() {
                            loadFinish = !![];
                        });
                        continue;
                    case '98':
                        var _0x48eefe = [, 0xbf, 0x101, 0x144];
                        continue;
                    case '99':
                        game[_0x1147ea(0x374)][_0x1147ea(0x237)][pageNo][_0x1147ea(0x742)][_0x1147ea(0x59c)](_0x1147ea(0x2d7), 'assets/level3/cat3.png', {
                            'frameWidth': 0x55,
                            'frameHeight': 0x4b
                        });
                        continue;
                    case _0x361a4b[_0x1147ea(0x8ad)]:
                        level2grp[_0x1147ea(0x85a)](doll2stone3);
                        continue;
                    case _0x1147ea(0x6e7):
                        for (i = 0x8; _0x361a4b[_0x1147ea(0x1e4)](i, 0x1); i--) {
                            game[_0x361a4b[_0x1147ea(0x7fc)](_0x361a4b[_0x1147ea(0x7ca)], i)] = this[_0x1147ea(0x85a)]['sprite'](_0x5760b8[i], _0x5008e0[i], 'selection')[_0x1147ea(0x541)](0.5, 0.5), game[_0x361a4b[_0x1147ea(0x395)](_0x361a4b['LwbVj'], i)][_0x1147ea(0xa6e)] = ![];
                        }
                        continue;
                    case _0x361a4b[_0x1147ea(0x2e3)]:
                        level2grp[_0x1147ea(0x85a)](doll2lip);
                        continue;
                    case '103':
                        for (i = 0x8; _0x361a4b['VooyG'](i, 0x1); i--) {
                            game[_0x361a4b[_0x1147ea(0x515)](_0x361a4b[_0x1147ea(0x55d)], i)] = this[_0x1147ea(0x85a)][_0x1147ea(0x244)](_0x182773[i], _0x23db7e[i], _0x361a4b[_0x1147ea(0x76f)](_0x361a4b[_0x1147ea(0x55d)], i))[_0x1147ea(0x541)](0.5, 0.5)[_0x1147ea(0xa74)]({
                                'pixelPerfect': !![],
                                'useHandCursor': !![]
                            }), game[_0x361a4b[_0x1147ea(0x28a)](_0x361a4b[_0x1147ea(0x55d)], i)]['visible'] = ![];
                        }
                        continue;
                    case _0x361a4b[_0x1147ea(0x464)]:
                        done2[_0x1147ea(0xa6e)] = ![];
                        continue;
                    case _0x361a4b[_0x1147ea(0x4be)]:
                        anim = game['scene'][_0x1147ea(0x237)][pageNo]['anims']['create']({
                            'key': _0x361a4b[_0x1147ea(0x3b3)],
                            'frames': game[_0x1147ea(0x374)][_0x1147ea(0x237)][pageNo][_0x1147ea(0x86e)][_0x1147ea(0x173)](_0x1147ea(0x1e5), {
                                'start': 0x0,
                                'end': 0x9
                            }),
                            'frameRate': 0x18
                        });
                        continue;
                    case _0x361a4b[_0x1147ea(0xa77)]:
                        for (i = 0x1; _0x361a4b['JGxBM'](i, 0x8); i++) {
                            game[_0x361a4b[_0x1147ea(0x768)](_0x361a4b['rQdTS'], i)]['visible'] = !![];
                        }
                        continue;
                    case _0x361a4b[_0x1147ea(0x480)]:
                        for (i = 0x8; _0x361a4b[_0x1147ea(0x72f)](i, 0x1); i--) {
                            game['level2eyeball' + i] = this[_0x1147ea(0x85a)][_0x1147ea(0x244)](_0x562493[i], _0x35c5c7[i], _0x361a4b['DZHHi'](_0x361a4b[_0x1147ea(0x720)], i))['setOrigin'](0.5, 0.5)[_0x1147ea(0xa74)]({
                                'pixelPerfect': !![],
                                'useHandCursor': !![]
                            }), game[_0x361a4b[_0x1147ea(0x720)] + i][_0x1147ea(0xa6e)] = ![];
                        }
                        continue;
                    case _0x1147ea(0x6e1):
                        var _0x2bb5ca = [, 0x6d, 0x6d, 0xe0, 0xe0, 339.5, 339.5, 454.5, 454.5];
                        continue;
                    case _0x361a4b[_0x1147ea(0x6d1)]:
                        var _0x182773 = [, 0x317, 916.5, 0x317, 916.5, 0x317, 916.5, 0x317, 916.5];
                        continue;
                    case _0x361a4b[_0x1147ea(0x4b7)]:
                        var _0x3a1be0 = [, 0x29d, 667.5, 668.5, 668.5, 668.5];
                        continue;
                    case _0x361a4b['ZurZf']:
                        doll2hair = this[_0x1147ea(0x85a)]['image'](420.5, 365.5, _0x361a4b['krfvC'])[_0x1147ea(0x541)](0.5);
                        continue;
                    case _0x361a4b[_0x1147ea(0x2ea)]:
                        level2grp[_0x1147ea(0x85a)](doll2head);
                        continue;
                    case _0x1147ea(0x4f3):
                        anim = this[_0x1147ea(0x86e)][_0x1147ea(0x350)]({
                            'key': _0x361a4b['goYIk'],
                            'frames': this[_0x1147ea(0x86e)][_0x1147ea(0x173)](_0x361a4b[_0x1147ea(0x1df)], {
                                'start': 0x0,
                                'end': 0x20
                            }),
                            'frameRate': 0x1e
                        });
                        continue;
                    case _0x361a4b[_0x1147ea(0x8cd)]:
                        for (i = 0x8; _0x361a4b['yMeMF'](i, 0x1); i--) {
                            showad == 0x1 && _0x361a4b[_0x1147ea(0x8a5)](blusharr[i], 0x1) && (game[_0x361a4b[_0x1147ea(0x32f)](_0x361a4b['XLgkN'], i)] = this['add'][_0x1147ea(0x244)](_0x182773[i] + 0x1e, _0x361a4b[_0x1147ea(0x517)](_0x23db7e[i], 0x1e), _0x361a4b[_0x1147ea(0x9bb)])[_0x1147ea(0x541)](0.5, 0.5), game[_0x361a4b[_0x1147ea(0xa95)](_0x361a4b[_0x1147ea(0x779)], i)][_0x1147ea(0xa6e)] = ![], game[_0x1147ea(0x374)][_0x1147ea(0x237)][pageNo][_0x1147ea(0x465)][_0x1147ea(0x85a)]({
                                'targets': game[_0x361a4b[_0x1147ea(0x63d)](_0x361a4b[_0x1147ea(0x779)], i)],
                                'scale': 1.1,
                                'ease': _0x361a4b[_0x1147ea(0x3c0)],
                                'duration': 0x12c,
                                'repeat': -0x1,
                                'yoyo': !![]
                            }));
                        }
                        continue;
                    case _0x361a4b['OnTfF']:
                        for (i = 0x5; _0x361a4b[_0x1147ea(0x738)](i, 0x1); i--) {
                            game[_0x361a4b[_0x1147ea(0xa95)](_0x361a4b[_0x1147ea(0x8c0)], i)] = this[_0x1147ea(0x85a)][_0x1147ea(0x244)](_0x3a1be0[i], _0x4a4128[i], _0x361a4b[_0x1147ea(0x283)](_0x1147ea(0x86d), i))[_0x1147ea(0x541)](0.5, 0.5)['setInteractive']({
                                'pixelPerfect': !![],
                                'useHandCursor': !![]
                            });
                        }
                        continue;
                    case _0x361a4b[_0x1147ea(0x72c)]:
                        level2panel = this[_0x1147ea(0x85a)][_0x1147ea(0x244)](852.5, 280.5, _0x361a4b['pZqDM'])['setOrigin'](0.5);
                        continue;
                    case _0x361a4b[_0x1147ea(0x5f2)]:
                        doll2lhand = this[_0x1147ea(0x85a)]['image'](627.5, 0x25f, _0x1147ea(0x249))[_0x1147ea(0x541)](0.5);
                        continue;
                    case _0x1147ea(0x899):
                        flashshape = this[_0x1147ea(0x85a)][_0x1147ea(0x6b2)]();
                        continue;
                    case _0x1147ea(0x9a1):
                        this[_0x1147ea(0x742)][_0x1147ea(0x26f)]();
                        continue;
                    case _0x361a4b[_0x1147ea(0x42d)]:
                        var _0x5760b8 = [, -0x64, -0x64, -0x64, -0x64, -0x64, -0x64, -0x64, -0x64];
                        continue;
                    case _0x1147ea(0x4f9):
                        for (i = 0x1; _0x361a4b[_0x1147ea(0x7a5)](i, 0x8); i++) {
                            _0x361a4b[_0x1147ea(0x8be)](showad, 0x1) && stonearr[i] == 0x1 && (game[_0x361a4b['fAYEV']('level2stonevideo', i)]['visible'] = !![]);
                        }
                        continue;
                    case _0x361a4b['lhPGE']:
                        doll2eyeshadeclose = this['add']['sprite'](0x1a1, 0x100, _0x361a4b[_0x1147ea(0x1bd)])[_0x1147ea(0x541)](0.5);
                        continue;
                    case _0x1147ea(0x8de):
                        level2grp[_0x1147ea(0x85a)](doll2stone1);
                        continue;
                    case _0x1147ea(0x810):
                        level2grp[_0x1147ea(0x85a)](doll2eyeshadeclose);
                        continue;
                    case _0x361a4b[_0x1147ea(0x58d)]:
                        doll2lhand2 = this[_0x1147ea(0x85a)][_0x1147ea(0x323)](0x269, 792.5, _0x361a4b[_0x1147ea(0x919)])[_0x1147ea(0x541)](0.5);
                        continue;
                    case _0x361a4b[_0x1147ea(0x4eb)]:
                        _0x361a4b['MRfTT'](transitionOut);
                        continue;
                    case _0x361a4b['XJPVn']:
                        dressgliter['setBlendMode'](Phaser['BlendModes'][_0x1147ea(0x34c)]);
                        continue;
                    case _0x361a4b['cHpmH']:
                        cupboardgroup[_0x1147ea(0x85a)](rarrow);
                        continue;
                    case _0x361a4b[_0x1147ea(0x60e)]:
                        level2grp[_0x1147ea(0x85a)](doll2dress);
                        continue;
                    case _0x1147ea(0x68e):
                        var _0x4cca7f = [, 0x8a, 0x8a, 0x8a];
                        continue;
                    case '131':
                        doll2stone1[_0x1147ea(0x254)](marr[0x5]);
                        continue;
                    case _0x1147ea(0x5a5):
                        level2grp[_0x1147ea(0x85a)](doll2lhand);
                        continue;
                    case _0x1147ea(0x544):
                        level2grp[_0x1147ea(0x85a)](doll2eyebrow);
                        continue;
                    case _0x361a4b[_0x1147ea(0x8d3)]:
                        dressgliter = this[_0x1147ea(0x85a)]['sprite'](420.85, 304.9, _0x361a4b[_0x1147ea(0x1df)])[_0x1147ea(0x541)](0.5, 0.5);
                        continue;
                    case _0x361a4b[_0x1147ea(0x6d2)]:
                        larrow = this['add'][_0x1147ea(0x244)](0x3a7, 0x238, _0x361a4b[_0x1147ea(0x7e6)])[_0x1147ea(0x541)](0.5)['setInteractive']({
                            'useHandCursor': !![]
                        });
                        continue;
                }
                break;
            }
        }
    });

function level2start() {
    var _0x528510 = _0x192e21,
        _0x31cd64 = {
            'SBAvj': _0x528510(0x528),
            'dofuF': function(_0x4babbd, _0x16b1fd) {
                return _0x4babbd == _0x16b1fd;
            },
            'GmRYj': _0x528510(0x696),
            'VpVTE': function(_0x548d12, _0x1a98c5) {
                return _0x548d12 == _0x1a98c5;
            },
            'UQiXL': function(_0x400d43, _0x4d0b4f) {
                return _0x400d43(_0x4d0b4f);
            },
            'DxGrf': function(_0x35b094, _0x2ff453) {
                return _0x35b094 == _0x2ff453;
            },
            'WFEkI': function(_0x14a6fa, _0x37d603) {
                return _0x14a6fa(_0x37d603);
            },
            'LgxWD': function(_0x51b397, _0x4681dd) {
                return _0x51b397 + _0x4681dd;
            },
            'NekMa': function(_0x280538, _0x233f4e) {
                return _0x280538(_0x233f4e);
            },
            'rkUCH': function(_0x27f602, _0x53e8ea) {
                return _0x27f602 == _0x53e8ea;
            },
            'LpuBD': function(_0x45ef9d, _0x171054) {
                return _0x45ef9d + _0x171054;
            },
            'CKqJJ': _0x528510(0x341),
            'kjzYU': function(_0x4a7e45, _0xa01503) {
                return _0x4a7e45 == _0xa01503;
            },
            'bXTcP': function(_0x53326f, _0x3e8405) {
                return _0x53326f(_0x3e8405);
            },
            'wxVVC': 'level2lipvideo',
            'MFvmx': function(_0xb618da, _0x15ae2f) {
                return _0xb618da == _0x15ae2f;
            },
            'rRSFg': function(_0x1dd33b, _0x113b16) {
                return _0x1dd33b + _0x113b16;
            },
            'TKMpl': function(_0x41d278, _0x4ae354) {
                return _0x41d278 == _0x4ae354;
            },
            'nnjhL': function(_0x2022bb, _0xe7a57c) {
                return _0x2022bb(_0xe7a57c);
            },
            'whhrZ': _0x528510(0x6b9),
            'nCicf': _0x528510(0x5af),
            'KrvbD': function(_0xa957c9, _0x2b3b9e) {
                return _0xa957c9 !== _0x2b3b9e;
            },
            'ayjOR': 'undefined',
            'BsXGI': 'rewarded',
            'xDNhd': _0x528510(0x901),
            'WMxja': 'dressgliter',
            'IusEf': function(_0x288bf3, _0x5a589b) {
                return _0x288bf3(_0x5a589b);
            },
            'UJJwy': _0x528510(0x4ac),
            'rsHmD': function(_0x2f5f51, _0x2aac1f) {
                return _0x2f5f51 > _0x2aac1f;
            },
            'tDokW': function(_0x332b55, _0x8115d) {
                return _0x332b55 == _0x8115d;
            },
            'NpjAp': function(_0x3d031d, _0x672378) {
                return _0x3d031d == _0x672378;
            },
            'HPPqD': function(_0x5853c4, _0x42da0d) {
                return _0x5853c4 == _0x42da0d;
            },
            'oOTMS': function(_0x465ca6, _0x2943b4) {
                return _0x465ca6 > _0x2943b4;
            },
            'FrUCa': function(_0x1d9a3b, _0x265281) {
                return _0x1d9a3b >= _0x265281;
            },
            'pewNp': function(_0x37fa47, _0x12a7f7) {
                return _0x37fa47 <= _0x12a7f7;
            },
            'hyKVu': function(_0x43fbdf, _0x45312d) {
                return _0x43fbdf == _0x45312d;
            },
            'UBsKZ': function(_0x599d6c, _0x29b5a8) {
                return _0x599d6c == _0x29b5a8;
            },
            'OLuAM': function(_0x19c194, _0x30814e) {
                return _0x19c194 >= _0x30814e;
            },
            'sYQAl': function(_0x3c4681, _0x4c5299) {
                return _0x3c4681 >= _0x4c5299;
            },
            'ucrNJ': function(_0x17c8a9, _0x7adfff) {
                return _0x17c8a9 == _0x7adfff;
            },
            'CJyaJ': function(_0x2b1f0c) {
                return _0x2b1f0c();
            },
            'WZLGR': 'clickss',
            'EuOYw': function(_0x43a62e) {
                return _0x43a62e();
            },
            'Rkfzk': function(_0x4a9916, _0x6c1f28) {
                return _0x4a9916 == _0x6c1f28;
            },
            'lKndt': '4|0|2|3|1',
            'PeRSX': _0x528510(0x8a3),
            'bNasu': function(_0x4e3cd2, _0x3bc9fd, _0x4793d3, _0x53a5a0) {
                return _0x4e3cd2(_0x3bc9fd, _0x4793d3, _0x53a5a0);
            },
            'gtWEc': _0x528510(0x5fd),
            'LuEsI': function(_0x3fc362, _0x221ac4) {
                return _0x3fc362 + _0x221ac4;
            },
            'ADDaZ': _0x528510(0x41a),
            'gfDll': function(_0x2efcdd, _0x3c8dc2) {
                return _0x2efcdd(_0x3c8dc2);
            },
            'nuIhp': 'dollin',
            'sfDBG': _0x528510(0x4e5),
            'RAGSp': function(_0x44ae00) {
                return _0x44ae00();
            },
            'QhWEi': _0x528510(0x759),
            'ZxZIa': 'itemclick',
            'lOQjg': function(_0xe988ff, _0x3291c4) {
                return _0xe988ff == _0x3291c4;
            },
            'BWizh': function(_0x47699b, _0x4d13ea) {
                return _0x47699b(_0x4d13ea);
            },
            'dgvYO': function(_0x17bac7, _0x5d8ffa) {
                return _0x17bac7(_0x5d8ffa);
            },
            'axulx': function(_0xdad4e4, _0x44c04b) {
                return _0xdad4e4 == _0x44c04b;
            },
            'zZRJC': function(_0x5df841, _0x4e88a0) {
                return _0x5df841 == _0x4e88a0;
            },
            'tEgRi': function(_0x201ccf) {
                return _0x201ccf();
            },
            'xfeAU': _0x528510(0x96d),
            'mrhLJ': function(_0x3d97c0, _0x40a5b9) {
                return _0x3d97c0 == _0x40a5b9;
            },
            'kgTNh': function(_0x5c033, _0x491f3a) {
                return _0x5c033 == _0x491f3a;
            },
            'PeQrO': function(_0x51c0f9) {
                return _0x51c0f9();
            },
            'pULFz': function(_0x36f79d) {
                return _0x36f79d();
            },
            'hgedF': function(_0x23642d, _0xebdb27) {
                return _0x23642d == _0xebdb27;
            },
            'boVqF': function(_0x3c1c81) {
                return _0x3c1c81();
            },
            'QdNGR': _0x528510(0x552),
            'rANAx': function(_0x2629ce, _0xf9fb96) {
                return _0x2629ce == _0xf9fb96;
            },
            'DMbdv': function(_0x3cdff9, _0x7c6032) {
                return _0x3cdff9(_0x7c6032);
            },
            'BaEFV': function(_0x5cb261, _0x3b79ed) {
                return _0x5cb261(_0x3b79ed);
            },
            'wxSNQ': function(_0x109c97) {
                return _0x109c97();
            },
            'eQNsr': function(_0xef5078, _0xc20115) {
                return _0xef5078 == _0xc20115;
            },
            'uATBT': function(_0x2c386b, _0x5be55c) {
                return _0x2c386b == _0x5be55c;
            },
            'PMjwR': function(_0x1126b6, _0x18951c) {
                return _0x1126b6 == _0x18951c;
            },
            'nFTce': function(_0x3ae54a, _0x1f3af1) {
                return _0x3ae54a(_0x1f3af1);
            },
            'mKIZc': function(_0x79a2b4, _0x205bd6) {
                return _0x79a2b4(_0x205bd6);
            },
            'tVAKc': function(_0x19af45, _0x5abe0d) {
                return _0x19af45 == _0x5abe0d;
            },
            'hvOdu': function(_0x4b7377, _0x5bf6b6) {
                return _0x4b7377 == _0x5bf6b6;
            },
            'sUwxm': _0x528510(0x72b),
            'hMZCb': function(_0x2a7845) {
                return _0x2a7845();
            },
            'jkVMR': function(_0x44fa94, _0x273edf) {
                return _0x44fa94(_0x273edf);
            },
            'FXcit': _0x528510(0x3b8),
            'VAchq': function(_0x18b599, _0x244e88) {
                return _0x18b599(_0x244e88);
            },
            'GAPXj': function(_0x5e3512, _0x16cedf) {
                return _0x5e3512(_0x16cedf);
            },
            'Ejdfl': function(_0x16a79b, _0x39fd69) {
                return _0x16a79b == _0x39fd69;
            },
            'SkDim': function(_0xb6f1b5, _0x2dd4bd) {
                return _0xb6f1b5 == _0x2dd4bd;
            },
            'GBrwi': function(_0x53839e, _0x12f05c) {
                return _0x53839e == _0x12f05c;
            },
            'Fblzs': function(_0x25e407, _0xe99d42) {
                return _0x25e407 == _0xe99d42;
            },
            'MpxrU': function(_0x295119) {
                return _0x295119();
            },
            'BGNbc': function(_0x4e5e02, _0x1f95b9) {
                return _0x4e5e02 == _0x1f95b9;
            },
            'GncBy': function(_0x22f58c, _0x2097e0) {
                return _0x22f58c + _0x2097e0;
            },
            'sXDdV': _0x528510(0x263),
            'sVvQP': _0x528510(0x82f),
            'TokQY': _0x528510(0x338),
            'qlfbF': _0x528510(0x637),
            'KfmfF': _0x528510(0xa4f),
            'XqUwV': function(_0x382265, _0x354331) {
                return _0x382265 + _0x354331;
            },
            'urakO': 'level2lip',
            'aPuDU': _0x528510(0x22b),
            'QsEuE': function(_0x2e22be, _0x1e3ed2) {
                return _0x2e22be + _0x1e3ed2;
            },
            'mgcLN': function(_0x4a91b8, _0xa58a9e) {
                return _0x4a91b8 + _0xa58a9e;
            },
            'sGxHc': function(_0x463f5d, _0x8be1d) {
                return _0x463f5d + _0x8be1d;
            },
            'mKrHP': function(_0x4893de, _0x51bbd7) {
                return _0x4893de + _0x51bbd7;
            },
            'XkKbZ': function(_0x3785a9, _0x236c21) {
                return _0x3785a9 + _0x236c21;
            },
            'eLpZK': function(_0x2f6a25, _0x3bbb9d) {
                return _0x2f6a25 + _0x3bbb9d;
            },
            'UwwsD': function(_0x178fd3, _0x3ec8a8) {
                return _0x178fd3 + _0x3ec8a8;
            },
            'hCCKW': function(_0x4c7b79, _0x2b2115) {
                return _0x4c7b79 + _0x2b2115;
            },
            'rLQqj': function(_0x2cccd1, _0x822752) {
                return _0x2cccd1 >= _0x822752;
            },
            'lkuIA': _0x528510(0x842),
            'xvDLu': function(_0x466678, _0x33b2ab) {
                return _0x466678 == _0x33b2ab;
            },
            'gZCXD': _0x528510(0x1ec),
            'aGDuM': function(_0x195e3b, _0x365020) {
                return _0x195e3b == _0x365020;
            },
            'hCASW': _0x528510(0x4d0),
            'VHuOm': _0x528510(0x536),
            'tOTiZ': function(_0xa970e, _0x33fb62) {
                return _0xa970e == _0x33fb62;
            },
            'JeysJ': function(_0x545526, _0x1883b4) {
                return _0x545526 + _0x1883b4;
            },
            'lyiYS': _0x528510(0x733),
            'PUxGY': function(_0x24da17, _0xf4573b) {
                return _0x24da17 + _0xf4573b;
            },
            'SCHoV': _0x528510(0x86d),
            'pSScC': function(_0x130064, _0x54bc39) {
                return _0x130064 + _0x54bc39;
            },
            'ofukG': function(_0x3a53be, _0x24f8cb) {
                return _0x3a53be + _0x24f8cb;
            },
            'kHPxC': function(_0x194915, _0x5b9e2b) {
                return _0x194915 <= _0x5b9e2b;
            },
            'slIAH': function(_0x30f332, _0x58bf8e) {
                return _0x30f332 + _0x58bf8e;
            },
            'luXyH': _0x528510(0x993),
            'JmnHp': function(_0x41ae69, _0x5359f7) {
                return _0x41ae69 + _0x5359f7;
            },
            'sUTsq': function(_0x3ffc3b, _0x3d3037) {
                return _0x3ffc3b + _0x3d3037;
            },
            'pnBXa': function(_0x20b158, _0x355579) {
                return _0x20b158 + _0x355579;
            },
            'dBxUq': function(_0x41d228, _0x1c6676) {
                return _0x41d228 + _0x1c6676;
            },
            'IwBSk': _0x528510(0xa3a),
            'WhgMz': function(_0x1a198f, _0x28c656) {
                return _0x1a198f == _0x28c656;
            },
            'WVnLw': function(_0x25132b, _0x226f86) {
                return _0x25132b == _0x226f86;
            },
            'reSpC': function(_0x29d36b, _0x502b3c) {
                return _0x29d36b == _0x502b3c;
            },
            'VwVKr': function(_0x1c2d81, _0x5d9594) {
                return _0x1c2d81 + _0x5d9594;
            },
            'mkNdB': function(_0x33a4da, _0xfa4308) {
                return _0x33a4da == _0xfa4308;
            },
            'CAbiR': function(_0x5c6f2b, _0x2bfdd3) {
                return _0x5c6f2b + _0x2bfdd3;
            },
            'rtVCm': function(_0x1de987, _0x296615) {
                return _0x1de987 <= _0x296615;
            },
            'VGJVl': function(_0x103611, _0x3fecf5) {
                return _0x103611 <= _0x3fecf5;
            },
            'dhKLs': function(_0x34e42c, _0x4f854d) {
                return _0x34e42c + _0x4f854d;
            },
            'SWEAQ': function(_0x2a2697, _0x5bae9b) {
                return _0x2a2697 + _0x5bae9b;
            },
            'ffdyO': function(_0x271b58, _0x10aae4) {
                return _0x271b58 + _0x10aae4;
            },
            'uVtnl': '3|1|0|2|4',
            'YQfxO': function(_0x15036b, _0x4c8830) {
                return _0x15036b + _0x4c8830;
            },
            'WDmRr': function(_0x1575f2, _0x20c472) {
                return _0x1575f2 == _0x20c472;
            },
            'JQugd': function(_0x4cfcc7, _0xd2c548) {
                return _0x4cfcc7 + _0xd2c548;
            },
            'imLCi': function(_0x434668, _0x278638) {
                return _0x434668 + _0x278638;
            },
            'wPudT': function(_0x440ba9, _0x5570de) {
                return _0x440ba9 + _0x5570de;
            },
            'PGYKB': function(_0x482e2b, _0x21b599) {
                return _0x482e2b >= _0x21b599;
            },
            'GlKZN': function(_0x31dbb1, _0x34d899) {
                return _0x31dbb1 + _0x34d899;
            },
            'gXyYt': function(_0x17af68, _0x49f055) {
                return _0x17af68 + _0x49f055;
            },
            'qxUNF': '0|3|4|1|2',
            'UnWYj': function(_0x206ac9, _0xe05af2) {
                return _0x206ac9 + _0xe05af2;
            },
            'Hjypj': function(_0x56c6d4, _0x550a20) {
                return _0x56c6d4 + _0x550a20;
            },
            'JOFnO': function(_0x29d8de, _0x1d3c59) {
                return _0x29d8de + _0x1d3c59;
            },
            'xlTZQ': function(_0x2c2d05, _0x5320f7) {
                return _0x2c2d05 + _0x5320f7;
            },
            'Pybeq': function(_0x5d1e28, _0x1106bd) {
                return _0x5d1e28 + _0x1106bd;
            },
            'MtnSX': function(_0x5cd43b, _0x29cf9e) {
                return _0x5cd43b == _0x29cf9e;
            },
            'jgMYG': function(_0x556118, _0x3bc13c) {
                return _0x556118 + _0x3bc13c;
            },
            'tiYLn': function(_0x37ceb0, _0x331b73) {
                return _0x37ceb0 + _0x331b73;
            },
            'GWmTS': function(_0x4c8c5b, _0x1591ff) {
                return _0x4c8c5b <= _0x1591ff;
            },
            'VuRIZ': function(_0x1e39b2, _0x57d674) {
                return _0x1e39b2 + _0x57d674;
            },
            'LNnns': function(_0x45d169, _0x122072) {
                return _0x45d169 == _0x122072;
            },
            'VBIPQ': function(_0x4933a2, _0x262593) {
                return _0x4933a2 + _0x262593;
            },
            'cOjzO': function(_0x2fb5b6, _0x4b910e) {
                return _0x2fb5b6 + _0x4b910e;
            },
            'mvuAF': function(_0x2cdf14, _0x893fcf) {
                return _0x2cdf14 + _0x893fcf;
            },
            'sGTNM': function(_0x211abe, _0x437e2d) {
                return _0x211abe + _0x437e2d;
            },
            'RiErb': function(_0x5d6579, _0x29ac9a) {
                return _0x5d6579 + _0x29ac9a;
            },
            'IOBDw': function(_0x457cf2, _0x3063d6) {
                return _0x457cf2 >= _0x3063d6;
            },
            'UIyUz': '4|0|3|1|2',
            'DtDzm': function(_0x30f680, _0xf716f) {
                return _0x30f680 == _0xf716f;
            },
            'pzWvi': function(_0x2be8d0, _0x4d1b6c) {
                return _0x2be8d0 == _0x4d1b6c;
            },
            'jWJhc': function(_0x2af22c, _0x397e20) {
                return _0x2af22c <= _0x397e20;
            },
            'OeOOe': function(_0x1ab2e2, _0x4c3461) {
                return _0x1ab2e2 >= _0x4c3461;
            },
            'pqHiL': function(_0x22ac4f, _0x380fd4) {
                return _0x22ac4f == _0x380fd4;
            },
            'YNtXa': function(_0x3628dd, _0x28a909) {
                return _0x3628dd(_0x28a909);
            },
            'OWAQm': function(_0x3df1b3, _0x568615) {
                return _0x3df1b3 <= _0x568615;
            },
            'PTEOj': function(_0x2b0024, _0x51251f) {
                return _0x2b0024 <= _0x51251f;
            },
            'HDqVf': function(_0x3460f2, _0x1c35a9) {
                return _0x3460f2 + _0x1c35a9;
            },
            'SGeTn': function(_0x1d503d, _0x36cd00) {
                return _0x1d503d + _0x36cd00;
            },
            'anRiy': _0x528510(0x5cb),
            'LtjoR': function(_0x284f35, _0x457aed) {
                return _0x284f35 + _0x457aed;
            },
            'GZpQB': function(_0x198252, _0x2264a6) {
                return _0x198252 == _0x2264a6;
            },
            'Axrex': function(_0x1465dc, _0x332b95) {
                return _0x1465dc == _0x332b95;
            },
            'oOdKn': function(_0x3a01c3, _0x3d3b8e) {
                return _0x3a01c3 <= _0x3d3b8e;
            },
            'bmIkr': function(_0x50e7cf, _0x5de59a) {
                return _0x50e7cf + _0x5de59a;
            },
            'oQFbw': function(_0x5bd39a, _0x35b436) {
                return _0x5bd39a <= _0x35b436;
            },
            'GwubF': '3|2|4|0|1',
            'tOicI': function(_0x252965, _0x1513db) {
                return _0x252965 + _0x1513db;
            },
            'bHuTM': function(_0x2a9753, _0x2a9d22) {
                return _0x2a9753 + _0x2a9d22;
            },
            'KeIcw': function(_0x5e5069, _0x1b68ef) {
                return _0x5e5069 >= _0x1b68ef;
            },
            'DLmSP': function(_0x39ff05, _0x1b6744) {
                return _0x39ff05 == _0x1b6744;
            },
            'eavXA': function(_0x1f68c8, _0x27f2b9) {
                return _0x1f68c8 + _0x27f2b9;
            },
            'hoYck': function(_0x44421a, _0x334c4d) {
                return _0x44421a == _0x334c4d;
            },
            'vcVYU': function(_0x459d9c, _0x1306f5) {
                return _0x459d9c + _0x1306f5;
            },
            'mOndH': function(_0x5a4c7b, _0x25e84d) {
                return _0x5a4c7b + _0x25e84d;
            },
            'VioBW': function(_0x3bf89c, _0x46f9b2) {
                return _0x3bf89c <= _0x46f9b2;
            },
            'rlgAA': function(_0x175ab7, _0x4303de) {
                return _0x175ab7 + _0x4303de;
            },
            'mxeJG': function(_0x34b993, _0x51a117) {
                return _0x34b993 + _0x51a117;
            },
            'JiMOw': function(_0x5b50d7, _0x5ca0f7) {
                return _0x5b50d7 + _0x5ca0f7;
            },
            'hEIEh': function(_0x32696b, _0x1e8a24) {
                return _0x32696b + _0x1e8a24;
            },
            'vSEwb': '0|2|1|3|4',
            'eoKpb': function(_0xb9451d, _0x5f425b) {
                return _0xb9451d == _0x5f425b;
            },
            'CfYnV': function(_0x355117, _0x6fefbb) {
                return _0x355117 + _0x6fefbb;
            },
            'JvSKW': function(_0x1f542e, _0x2c5ad1) {
                return _0x1f542e == _0x2c5ad1;
            },
            'UwNgr': function(_0x29748c, _0x491f9e) {
                return _0x29748c == _0x491f9e;
            },
            'CXKJs': function(_0x2b28cb, _0xf892c2) {
                return _0x2b28cb <= _0xf892c2;
            },
            'KzXqY': function(_0x29ac2a, _0x498bf5) {
                return _0x29ac2a + _0x498bf5;
            },
            'VKGHj': function(_0xa0b206, _0x4cf0ba) {
                return _0xa0b206 <= _0x4cf0ba;
            },
            'fbEdh': function(_0x552e6c, _0xc87dc5) {
                return _0x552e6c + _0xc87dc5;
            },
            'cQBTZ': function(_0xd57eaf, _0x5ee3c9) {
                return _0xd57eaf <= _0x5ee3c9;
            },
            'YEcVe': _0x528510(0x57f),
            'ddOzd': function(_0x3945, _0x456f23) {
                return _0x3945 + _0x456f23;
            },
            'zaDQO': function(_0x26e997, _0x1befd8) {
                return _0x26e997 + _0x1befd8;
            },
            'ZSCTn': function(_0x32e6da, _0x3f9da5) {
                return _0x32e6da + _0x3f9da5;
            },
            'qENlH': function(_0x3faea5, _0x1e6808) {
                return _0x3faea5 + _0x1e6808;
            },
            'ewfPX': function(_0x3c7a66, _0x5626a7) {
                return _0x3c7a66 == _0x5626a7;
            },
            'ZSIZA': function(_0x4a4a09, _0x4b5bb6) {
                return _0x4a4a09 + _0x4b5bb6;
            },
            'CZCWn': function(_0x1d669d, _0x278f21) {
                return _0x1d669d == _0x278f21;
            },
            'aZPBn': function(_0x34f2b4, _0x56b965) {
                return _0x34f2b4 + _0x56b965;
            },
            'pDgXx': _0x528510(0x3b1),
            'uVwdL': _0x528510(0x557),
            'gqGss': function(_0x357f77, _0x3f9b29) {
                return _0x357f77 == _0x3f9b29;
            },
            'JzgEw': function(_0x139a3a, _0x56f69d) {
                return _0x139a3a + _0x56f69d;
            },
            'HNpKO': function(_0x30a895, _0x359d03) {
                return _0x30a895 <= _0x359d03;
            },
            'TxAMP': function(_0x4474c0, _0x1dd74a) {
                return _0x4474c0 + _0x1dd74a;
            },
            'ATsop': function(_0x40bfbf, _0x25a2f7) {
                return _0x40bfbf >= _0x25a2f7;
            },
            'aLWAu': function(_0x82561c, _0x482674) {
                return _0x82561c == _0x482674;
            },
            'dBEhj': function(_0x59639a, _0x181d19) {
                return _0x59639a <= _0x181d19;
            },
            'QjBTY': _0x528510(0x6aa),
            'aviXh': function(_0x2279e6, _0x1b580d) {
                return _0x2279e6 + _0x1b580d;
            },
            'hAFWj': function(_0x3532d2, _0x38dba9) {
                return _0x3532d2 + _0x38dba9;
            },
            'vcScb': function(_0x376091, _0x5ed006) {
                return _0x376091 <= _0x5ed006;
            },
            'QdJGy': function(_0x3061ca, _0xfad77) {
                return _0x3061ca + _0xfad77;
            },
            'oEbJl': function(_0x2fad11, _0xc702e) {
                return _0x2fad11 <= _0xc702e;
            },
            'PsIpz': function(_0xbcf4aa, _0x561ae9) {
                return _0xbcf4aa + _0x561ae9;
            },
            'MEmHI': _0x528510(0x42a),
            'PAcPK': function(_0x36f955, _0xae77fe) {
                return _0x36f955 + _0xae77fe;
            },
            'AeQIX': function(_0x11edca, _0x2e6837) {
                return _0x11edca + _0x2e6837;
            },
            'THord': function(_0xe3a753, _0x2eb238) {
                return _0xe3a753 >= _0x2eb238;
            },
            'euOxC': function(_0x274739, _0x55eae9) {
                return _0x274739 + _0x55eae9;
            },
            'BQsxL': function(_0x335d71, _0x5af633) {
                return _0x335d71 == _0x5af633;
            },
            'kcNmY': function(_0x2212b4, _0xeab7c) {
                return _0x2212b4 + _0xeab7c;
            },
            'SJoZu': function(_0x3b7d51, _0x52a2e8) {
                return _0x3b7d51 + _0x52a2e8;
            },
            'vttks': function(_0x1a9b82, _0x5db961) {
                return _0x1a9b82 + _0x5db961;
            },
            'fQhGz': function(_0x30f5f0, _0x3468f2) {
                return _0x30f5f0 == _0x3468f2;
            },
            'hmgZV': function(_0x5aba70, _0x452b64) {
                return _0x5aba70 == _0x452b64;
            },
            'hfxtR': '4|1|3|2|0',
            'HnmMO': function(_0x3b3598, _0xeddaf4) {
                return _0x3b3598 + _0xeddaf4;
            },
            'MjhKO': function(_0x5b52c9, _0x1830d8) {
                return _0x5b52c9 + _0x1830d8;
            },
            'SSuJR': function(_0x16bee8, _0x57482e) {
                return _0x16bee8 + _0x57482e;
            },
            'qgZYy': _0x528510(0x288),
            'KBBEL': function(_0x4ab073, _0x3efe06) {
                return _0x4ab073 >= _0x3efe06;
            },
            'XmCnR': function(_0x2853a8, _0x4dd743) {
                return _0x2853a8 + _0x4dd743;
            },
            'Lqzul': _0x528510(0x857),
            'ZUlIz': function(_0x5869e0, _0x453098) {
                return _0x5869e0 + _0x453098;
            },
            'otTjc': function(_0x2ebcad, _0x2f6c99) {
                return _0x2ebcad == _0x2f6c99;
            },
            'ZTnlG': function(_0x4b0558, _0x55c3ba) {
                return _0x4b0558 + _0x55c3ba;
            },
            'bmrbC': function(_0x56a26d, _0x2bda0c) {
                return _0x56a26d == _0x2bda0c;
            },
            'mVZUL': function(_0x1672c4, _0x2af106) {
                return _0x1672c4 == _0x2af106;
            },
            'TcszT': function(_0x4d2644, _0x40ffd6) {
                return _0x4d2644 + _0x40ffd6;
            },
            'kRart': function(_0x11f7bd, _0x31e1e1) {
                return _0x11f7bd >= _0x31e1e1;
            },
            'vHAFP': function(_0x7b938, _0x28a3e2) {
                return _0x7b938 + _0x28a3e2;
            },
            'zdBTV': function(_0x33e853, _0x5d7926) {
                return _0x33e853 <= _0x5d7926;
            },
            'ZJcXb': function(_0x2e6c1d, _0x2a4847) {
                return _0x2e6c1d + _0x2a4847;
            },
            'OmXcx': '1|0|2|4|3',
            'siiVW': function(_0x21d8d0, _0x50bb98) {
                return _0x21d8d0 + _0x50bb98;
            },
            'DGuXm': function(_0x444297, _0x284bbf) {
                return _0x444297 + _0x284bbf;
            },
            'FGThx': function(_0x5cf76c, _0x25bd87) {
                return _0x5cf76c + _0x25bd87;
            },
            'CuaKb': function(_0x407359, _0x327b82) {
                return _0x407359 <= _0x327b82;
            },
            'ernwH': function(_0x465431, _0x275b0a) {
                return _0x465431 == _0x275b0a;
            },
            'klrdV': function(_0x56e3d1, _0xf98a10) {
                return _0x56e3d1 == _0xf98a10;
            },
            'CxoiE': '3|1|2|0|4',
            'IeSrU': function(_0x3520c2, _0x4b06ee) {
                return _0x3520c2 == _0x4b06ee;
            },
            'ptsqH': function(_0x4b4d6e, _0xe6984a) {
                return _0x4b4d6e + _0xe6984a;
            },
            'QpPau': function(_0x4bd66f, _0x1f162e) {
                return _0x4bd66f == _0x1f162e;
            },
            'HvoAu': function(_0x4d7c40, _0x410780) {
                return _0x4d7c40 + _0x410780;
            },
            'HEfGq': _0x528510(0x2b4),
            'ICKav': function(_0x393315, _0x3629dd) {
                return _0x393315 + _0x3629dd;
            },
            'zQhwQ': function(_0xb4bf49, _0x7ed5ed) {
                return _0xb4bf49 + _0x7ed5ed;
            },
            'fTOrv': function(_0x40f11e, _0xdf4227) {
                return _0x40f11e == _0xdf4227;
            },
            'HyGfC': '0|7|4|8|2|5|1|6|9|3',
            'trFXq': '2|4|3|0|1',
            'leWqe': function(_0x1fbfd9, _0x311075) {
                return _0x1fbfd9 + _0x311075;
            },
            'yMCCV': function(_0x747722, _0x32f5bd) {
                return _0x747722 >= _0x32f5bd;
            },
            'FyFwg': function(_0x113278, _0x1d8b44) {
                return _0x113278 >= _0x1d8b44;
            },
            'SWfuP': function(_0x4ec0b2, _0x311ca4) {
                return _0x4ec0b2 + _0x311ca4;
            },
            'qVVGY': function(_0x3d0a07, _0x3cd035) {
                return _0x3d0a07 == _0x3cd035;
            },
            'tCKqN': function(_0xca2cb3, _0x27b516) {
                return _0xca2cb3 == _0x27b516;
            },
            'vIipT': function(_0x28d8d5, _0xd39383) {
                return _0x28d8d5 == _0xd39383;
            },
            'pHOhr': function(_0x16a77f, _0x228798) {
                return _0x16a77f + _0x228798;
            },
            'fHKwL': function(_0x4a5499, _0x424d17) {
                return _0x4a5499 + _0x424d17;
            },
            'miffY': function(_0x1f0ca1, _0xf83418) {
                return _0x1f0ca1 + _0xf83418;
            },
            'ncsHb': function(_0x316ed4, _0x327136) {
                return _0x316ed4 + _0x327136;
            },
            'TFzqq': _0x528510(0xa01),
            'FvGOB': function(_0x5b90bc, _0x9bc8b6) {
                return _0x5b90bc == _0x9bc8b6;
            },
            'FCNdH': _0x528510(0x474),
            'wqKbN': function(_0x2cb498, _0x24d9b6) {
                return _0x2cb498 + _0x24d9b6;
            },
            'IRcuf': function(_0x421844, _0x2c6ea4) {
                return _0x421844 + _0x2c6ea4;
            },
            'QwMjw': function(_0x478002, _0x4535a7) {
                return _0x478002 <= _0x4535a7;
            },
            'xyJDg': function(_0x41e72f, _0x43d33c) {
                return _0x41e72f + _0x43d33c;
            },
            'fCYsZ': function(_0x2d0c12, _0x559873) {
                return _0x2d0c12 == _0x559873;
            },
            'FhFdz': function(_0x67e6c5, _0x9fb175) {
                return _0x67e6c5 >= _0x9fb175;
            },
            'vvyPp': function(_0x322db1, _0x6085e2) {
                return _0x322db1 + _0x6085e2;
            },
            'nLXbc': function(_0x4f3c6f, _0x2cd4e7) {
                return _0x4f3c6f + _0x2cd4e7;
            },
            'PuABi': function(_0x4cee96, _0x229246) {
                return _0x4cee96 + _0x229246;
            },
            'qqtmT': function(_0x556946, _0x513299) {
                return _0x556946 >= _0x513299;
            },
            'wOjxG': function(_0x531d4d, _0x1c38ca) {
                return _0x531d4d + _0x1c38ca;
            },
            'yEXlh': function(_0xff54db, _0x54e451) {
                return _0xff54db <= _0x54e451;
            },
            'oesNg': function(_0x463edc, _0x517c23) {
                return _0x463edc(_0x517c23);
            },
            'VgrEh': _0x528510(0x694),
            'fRvBe': function(_0x30fa96, _0x1f26ea) {
                return _0x30fa96 <= _0x1f26ea;
            },
            'DKAyV': _0x528510(0x39f),
            'rcbNn': function(_0x1e59be, _0x585b01) {
                return _0x1e59be + _0x585b01;
            },
            'tDMZL': function(_0x2b88b8, _0x446ba9) {
                return _0x2b88b8 + _0x446ba9;
            },
            'pPrqN': function(_0x93471d, _0x253588) {
                return _0x93471d == _0x253588;
            },
            'cWFir': function(_0x34ad37, _0x5df7f8) {
                return _0x34ad37 + _0x5df7f8;
            },
            'CpuPT': function(_0x1d74dc) {
                return _0x1d74dc();
            },
            'Myuqf': function(_0xfd9255, _0x33a4ce) {
                return _0xfd9255 < _0x33a4ce;
            },
            'ddgBM': function(_0x1704c8, _0x9347d7) {
                return _0x1704c8 > _0x9347d7;
            },
            'oaoQT': function(_0x22d9a5, _0xc88aca) {
                return _0x22d9a5 < _0xc88aca;
            },
            'hQIkw': function(_0x342e7f, _0x87d9f4) {
                return _0x342e7f + _0x87d9f4;
            },
            'Rcrnb': function(_0x5920db, _0xb1bbca) {
                return _0x5920db < _0xb1bbca;
            },
            'YpZqz': function(_0x202e0a, _0x4edd86) {
                return _0x202e0a == _0x4edd86;
            },
            'vCLPm': function(_0x4ed4e3, _0x27f655) {
                return _0x4ed4e3 == _0x27f655;
            },
            'gXlhz': function(_0x48773e, _0x38d0e4) {
                return _0x48773e + _0x38d0e4;
            },
            'rLnuK': function(_0x553552, _0x134647) {
                return _0x553552 >= _0x134647;
            },
            'USmop': _0x528510(0x303),
            'cTpgB': function(_0x3aa80c, _0x3d998b) {
                return _0x3aa80c == _0x3d998b;
            },
            'AMvEn': function(_0x5a2e14, _0x1acf5e) {
                return _0x5a2e14 > _0x1acf5e;
            },
            'MluEq': function(_0x403980, _0xcc4481) {
                return _0x403980 + _0xcc4481;
            },
            'kZOug': function(_0x3cf8dd, _0x55a5e2) {
                return _0x3cf8dd + _0x55a5e2;
            },
            'XcTXE': function(_0xe2305d, _0x523cd8) {
                return _0xe2305d + _0x523cd8;
            },
            'zCcqV': function(_0x33f8e0, _0x4ab171) {
                return _0x33f8e0 > _0x4ab171;
            },
            'QmQlh': function(_0x3fcfa0, _0x49d2c6) {
                return _0x3fcfa0 + _0x49d2c6;
            },
            'AdfVn': function(_0x4c50f3, _0x1e4d32) {
                return _0x4c50f3 + _0x1e4d32;
            },
            'CxygB': function(_0x7e374a, _0x4ee5d8) {
                return _0x7e374a + _0x4ee5d8;
            },
            'bgYaF': function(_0x2d1785, _0x22a273) {
                return _0x2d1785 == _0x22a273;
            },
            'EzHMn': function(_0x782e8d, _0x36146c) {
                return _0x782e8d + _0x36146c;
            },
            'ZhkBD': function(_0x2659ca, _0x29a6a6) {
                return _0x2659ca + _0x29a6a6;
            },
            'QqGWe': function(_0x525a13, _0x1152c3) {
                return _0x525a13 + _0x1152c3;
            },
            'cFpWK': function(_0x3bad80, _0x5045ab) {
                return _0x3bad80 + _0x5045ab;
            },
            'TftFt': function(_0x2145f5, _0x450aeb) {
                return _0x2145f5 + _0x450aeb;
            },
            'nBHlQ': function(_0x51937d, _0x2d2643) {
                return _0x51937d + _0x2d2643;
            },
            'agTMH': function(_0x16aaae, _0x3804d1) {
                return _0x16aaae == _0x3804d1;
            },
            'BxLRN': function(_0x5ac3d6, _0x20e7c5) {
                return _0x5ac3d6 == _0x20e7c5;
            },
            'StBET': function(_0x274bc5, _0x8b545c) {
                return _0x274bc5 + _0x8b545c;
            },
            'QIlbR': function(_0x4db77e, _0x434dc4) {
                return _0x4db77e && _0x434dc4;
            },
            'LZiBb': function(_0x3f2ad2, _0xa92664) {
                return _0x3f2ad2 == _0xa92664;
            },
            'vqQJZ': _0x528510(0xa59),
            'DKNii': _0x528510(0x8f1),
            'ScKPG': _0x528510(0x548),
            'FqMlN': function(_0x331ef9, _0xa7514) {
                return _0x331ef9(_0xa7514);
            },
            'DTObx': _0x528510(0x902),
            'icvis': function(_0xa5abfb, _0x1be9d3, _0x5cc3a0) {
                return _0xa5abfb(_0x1be9d3, _0x5cc3a0);
            },
            'quTdX': function(_0x4e261d) {
                return _0x4e261d();
            },
            'HqlRa': function(_0x1550e2, _0x360000) {
                return _0x1550e2 + _0x360000;
            },
            'qjkZe': function(_0x1efbf8, _0x4231b6) {
                return _0x1efbf8 + _0x4231b6;
            },
            'NcURS': 'pointerup',
            'BHXNS': function(_0x37b02d, _0x377b5a) {
                return _0x37b02d + _0x377b5a;
            },
            'BimIq': function(_0x5132f4, _0x37458f) {
                return _0x5132f4 + _0x37458f;
            },
            'kBZry': function(_0x549e4d, _0x7a541) {
                return _0x549e4d + _0x7a541;
            },
            'aVSwz': function(_0x5b053, _0x5dc9c1) {
                return _0x5b053 + _0x5dc9c1;
            }
        };
    gdsdk !== _0x31cd64[_0x528510(0x916)] && _0x31cd64[_0x528510(0x47b)](gdsdk[_0x528510(0xa4c)], _0x31cd64[_0x528510(0x916)]) && gdsdk['preloadAd'](_0x528510(0x4c8))['then'](_0x498dbe => {
        var _0x1d61c2 = _0x528510;
        console['log'](_0x1d61c2(0x8df));
    })[_0x528510(0x9f6)](_0x19653c => {
        var _0x26dc0b = _0x528510;
        console[_0x26dc0b(0x63a)](_0x31cd64[_0x26dc0b(0x36b)]);
    });
    _0x31cd64[_0x528510(0x9b3)](_0x1ce01f), setTimeout(_0x3ebcd2, 0x64), t2 = game[_0x528510(0x374)][_0x528510(0x237)][pageNo][_0x528510(0x48f)][_0x528510(0x85d)]({
        'delay': 0xc8,
        'callback': _0x22d9d0,
        'callbackScope': this
    });

    function _0x22d9d0() {
        var _0x57bd6b = _0x528510;
        doll2eyeshadeopen['visible'] = !![], doll2eyeshadeclose['visible'] = ![], t2 = game['scene'][_0x57bd6b(0x237)][pageNo][_0x57bd6b(0x48f)]['addEvent']({
            'delay': 0xbb8,
            'callback': _0x35bc7d,
            'callbackScope': this
        });
    }

    function _0x35bc7d() {
        var _0x5373fe = _0x528510;
        doll2eyeshadeopen[_0x5373fe(0xa6e)] = ![], doll2eyeshadeclose[_0x5373fe(0xa6e)] = !![], t2 = game[_0x5373fe(0x374)][_0x5373fe(0x237)][pageNo][_0x5373fe(0x48f)][_0x5373fe(0x85d)]({
            'delay': 0x12c,
            'callback': _0x22d9d0,
            'callbackScope': this
        });
    }

    function _0x67e6c0() {
        var _0x32e988 = _0x528510;
        _0x31cd64[_0x32e988(0x47b)](gdsdk, _0x32e988(0x3ab)) && gdsdk[_0x32e988(0x406)] !== _0x31cd64[_0x32e988(0x916)] && gdsdk[_0x32e988(0x406)](_0x31cd64[_0x32e988(0x565)])['then'](_0x408ba7 => {
            var _0x9031ff = _0x32e988;
            _0x31cd64[_0x9031ff(0x9ee)](adcheck1, 0x1) ? (console[_0x9031ff(0x63a)](_0x31cd64[_0x9031ff(0x2b6)]), _0x31cd64['VpVTE'](eyeshadowarr[_0x31cd64['UQiXL'](parseInt, sno)], 0x1) && _0x31cd64[_0x9031ff(0x45d)](leveladcheck, 0x1) && (eyeshadowarr[_0x31cd64[_0x9031ff(0x31b)](parseInt, sno)] = 0x0, game[_0x31cd64[_0x9031ff(0x3b9)](_0x9031ff(0x733), _0x31cd64[_0x9031ff(0x79f)](parseInt, sno))][_0x9031ff(0xa6e)] = ![]), _0x31cd64[_0x9031ff(0x45d)](blusharr[parseInt(sno)], 0x1) && _0x31cd64[_0x9031ff(0x908)](leveladcheck, 0x2) && (blusharr[parseInt(sno)] = 0x0, game[_0x31cd64[_0x9031ff(0x6ec)](_0x31cd64[_0x9031ff(0x4fb)], parseInt(sno))][_0x9031ff(0xa6e)] = ![]), _0x31cd64[_0x9031ff(0x380)](liparr[_0x31cd64[_0x9031ff(0x79c)](parseInt, sno)], 0x1) && _0x31cd64['kjzYU'](leveladcheck, 0x3) && (liparr[_0x31cd64['bXTcP'](parseInt, sno)] = 0x0, game[_0x31cd64[_0x9031ff(0x6ec)](_0x31cd64[_0x9031ff(0x514)], parseInt(sno))]['visible'] = ![]), _0x31cd64[_0x9031ff(0x633)](stonearr[parseInt(sno)], 0x1) && _0x31cd64[_0x9031ff(0x9ee)](leveladcheck, 0x4) && (stonearr[parseInt(sno)] = 0x0, game[_0x31cd64[_0x9031ff(0x9e3)](_0x9031ff(0x536), _0x31cd64[_0x9031ff(0x79f)](parseInt, sno))]['visible'] = ![]), eyeballarr[_0x31cd64[_0x9031ff(0x31b)](parseInt, sno)] == 0x1 && _0x31cd64[_0x9031ff(0x9fe)](leveladcheck, 0x5) && (eyeballarr[_0x31cd64[_0x9031ff(0x7b2)](parseInt, sno)] = 0x0, game[_0x31cd64['rRSFg'](_0x31cd64['whhrZ'], _0x31cd64['nnjhL'](parseInt, sno))][_0x9031ff(0xa6e)] = ![])) : console[_0x9031ff(0x63a)](_0x9031ff(0xa42));
        })[_0x32e988(0x9f6)](_0x2ee029 => {
            var _0x4fa916 = _0x32e988;
            console[_0x4fa916(0x63a)](_0x31cd64['nCicf']);
        });
    }
    game[_0x31cd64[_0x528510(0x4f5)](_0x31cd64[_0x528510(0x35a)], 0x1)]['on'](_0x31cd64['sVvQP'], _0x14ca8f), game[_0x31cd64[_0x528510(0x4e0)](_0x528510(0x41a), 0x1)]['on'](_0x31cd64[_0x528510(0x2d0)], _0x5e6ee7), game[_0x31cd64['ZhkBD'](_0x31cd64[_0x528510(0x35a)], 0x1)]['on'](_0x31cd64[_0x528510(0x8a1)], _0x57d5df), game[_0x31cd64[_0x528510(0x84d)](_0x31cd64[_0x528510(0x35a)], 0x1)]['on'](_0x528510(0x637), _0x490989);

    function _0x14ca8f(_0x92ffba) {
        var _0x4952de = _0x528510;
        this[_0x4952de(0x67d)](1.05);
    }

    function _0x57d5df(_0x53db77) {
        this['setFrame'](0x0);
    }

    function _0x5e6ee7(_0x2f94ee) {
        var _0x2bb95e = _0x528510;
        this[_0x2bb95e(0x67d)](0x1);
    }

    function _0x490989() {
        var _0x36a60b = _0x528510;
        this[_0x36a60b(0x254)](0x1), game['scene'][_0x36a60b(0x237)][pageNo][_0x36a60b(0x465)][_0x36a60b(0x85a)]({
            'targets': this,
            'scale': 0.9,
            'ease': _0x31cd64[_0x36a60b(0x6b1)],
            'duration': 0x64,
            'yoyo': !![]
        }), dressgliter['anims']['load'](_0x31cd64[_0x36a60b(0x419)]), dressgliter[_0x36a60b(0x86e)][_0x36a60b(0x3ca)](_0x31cd64['WMxja']), _0x31cd64['IusEf'](playsoundeffects, _0x31cd64[_0x36a60b(0x9b1)]), blushrandom = Phaser[_0x36a60b(0x82b)]['Between'](0x1, 0x8), eyeshadowrandom = Phaser[_0x36a60b(0x82b)]['Between'](0x1, 0x8), stonerandom = Phaser[_0x36a60b(0x82b)][_0x36a60b(0x918)](0x1, 0x3), stonerandom1 = Phaser[_0x36a60b(0x82b)]['Between'](0x1, 0x6), stonerandom2 = Phaser[_0x36a60b(0x82b)][_0x36a60b(0x918)](0x1, 0x5), stonerandom3 = Phaser[_0x36a60b(0x82b)]['Between'](0x1, 0x8), liprandom = Phaser[_0x36a60b(0x82b)][_0x36a60b(0x918)](0x1, 0x8), eyeballrandom = Phaser['Math'][_0x36a60b(0x918)](0x1, 0x8);
        if (_0x31cd64['kjzYU'](showad, 0x1)) {
            while (_0x31cd64['rsHmD'](liparr[liprandom], 0x0)) {
                liparr[liprandom] == 0x1 && (liprandom = Phaser[_0x36a60b(0x82b)][_0x36a60b(0x918)](0x1, 0x8));
            }
            while (_0x31cd64[_0x36a60b(0x960)](blusharr[blushrandom], 0x0)) {
                _0x31cd64[_0x36a60b(0x93b)](blusharr[blushrandom], 0x1) && (blushrandom = Phaser[_0x36a60b(0x82b)]['Between'](0x1, 0x8));
            }
            while (_0x31cd64['rsHmD'](eyeshadowarr[eyeshadowrandom], 0x0)) {
                _0x31cd64['NpjAp'](eyeshadowarr[eyeshadowrandom], 0x1) && (eyeshadowrandom = Phaser[_0x36a60b(0x82b)][_0x36a60b(0x918)](0x1, 0x8));
            }
            while (stonearr[stonerandom] > 0x0) {
                _0x31cd64[_0x36a60b(0x9d0)](stonearr[stonerandom], 0x1) && (stonerandom = Phaser[_0x36a60b(0x82b)]['Between'](0x1, 0x3));
            }
            while (_0x31cd64[_0x36a60b(0x960)](stonearr[stonerandom1], 0x0)) {
                stonearr[stonerandom1] == 0x1 && (stonerandom1 = Phaser[_0x36a60b(0x82b)]['Between'](0x1, 0x6));
            }
            while (_0x31cd64[_0x36a60b(0x960)](stonearr[stonerandom2], 0x0)) {
                _0x31cd64['tDokW'](stonearr[stonerandom2], 0x1) && (stonerandom2 = Phaser[_0x36a60b(0x82b)][_0x36a60b(0x918)](0x1, 0x5));
            }
            while (_0x31cd64[_0x36a60b(0x460)](stonearr[stonerandom3], 0x0)) {
                _0x31cd64[_0x36a60b(0x306)](stonearr[stonerandom3], 0x1) && (stonerandom3 = Phaser[_0x36a60b(0x82b)][_0x36a60b(0x918)](0x1, 0x8));
            }
            while (eyeballarr[eyeballrandom] > 0x0) {
                eyeballarr[eyeballrandom] == 0x1 && (eyeballrandom = Phaser[_0x36a60b(0x82b)][_0x36a60b(0x918)](0x1, 0x8));
            }
        }
        doll2eyeshadeclose['setFrame'](eyeshadowrandom), doll2eyeshadeopen[_0x36a60b(0x254)](eyeshadowrandom), doll2blush[_0x36a60b(0x254)](blushrandom), doll2lip[_0x36a60b(0x254)](liprandom), doll2eyeball[_0x36a60b(0x254)](eyeballrandom), _0x31cd64[_0x36a60b(0x74a)](stonerandom, 0x1) && _0x31cd64[_0x36a60b(0x5e6)](stonerandom, 0x3) ? doll2stone[_0x36a60b(0x254)](stonerandom) : doll2stone[_0x36a60b(0x254)](0x0), stonerandom1 == 0x4 || _0x31cd64['hyKVu'](stonerandom1, 0x6) ? doll2stone1[_0x36a60b(0x254)](stonerandom1) : doll2stone1['setFrame'](0x0), _0x31cd64[_0x36a60b(0x9d0)](stonerandom2, 0x5) ? doll2stone2['setFrame'](stonerandom2) : doll2stone2[_0x36a60b(0x254)](0x0), _0x31cd64['HPPqD'](stonerandom3, 0x7) || _0x31cd64[_0x36a60b(0x435)](stonerandom3, 0x8) ? doll2stone3[_0x36a60b(0x254)](stonerandom3) : doll2stone3['setFrame'](0x0), marr[0x0] = eyeshadowrandom, marr[0x1] = blushrandom, marr[0x2] = liprandom, marr[0x4] = eyeballrandom, _0x31cd64['OLuAM'](accrandom1, 0x3) && accrandom1 <= 0x4 ? marr[0x3] = accrandom1 : marr[0x3] = 0x0, _0x31cd64[_0x36a60b(0x74a)](accrandom, 0x1) && _0x31cd64[_0x36a60b(0x5e6)](accrandom, 0x2) ? marr[0x6] = accrandom : marr[0x6] = 0x0, _0x31cd64[_0x36a60b(0x3fe)](stonerandom, 0x1) && stonerandom <= 0x3 ? marr[0x3] = stonerandom : marr[0x3] = 0x0, stonerandom1 == 0x4 || stonerandom1 == 0x6 ? marr[0x5] = stonerandom1 : marr[0x5] = 0x0, _0x31cd64[_0x36a60b(0x2fa)](stonerandom2, 0x5) ? marr[0x6] = stonerandom2 : marr[0x6] = 0x0, _0x31cd64[_0x36a60b(0x633)](stonerandom3, 0x7) || stonerandom3 == 0x8 ? marr[0x7] = stonerandom3 : marr[0x7] = 0x0, _0x31cd64[_0x36a60b(0x816)](_0x1ce01f);
    }
    game[_0x31cd64[_0x528510(0x378)](_0x31cd64[_0x528510(0x35a)], 0x2)]['on'](_0x31cd64[_0x528510(0x3bf)], _0x2bd8da), game[_0x31cd64['BimIq'](_0x528510(0x41a), 0x2)]['on'](_0x31cd64['TokQY'], _0x522756), game[_0x31cd64['cWFir'](_0x31cd64['ADDaZ'], 0x2)]['on'](_0x31cd64[_0x528510(0x8a1)], _0x36d0fd), game[_0x31cd64[_0x528510(0x252)](_0x31cd64[_0x528510(0x35a)], 0x2)]['on'](_0x528510(0x637), _0xaf3769);

    function _0x2bd8da() {
        var _0x1f5c4b = _0x528510;
        this[_0x1f5c4b(0x67d)](1.05);
    }

    function _0x522756() {
        var _0x1b4940 = _0x528510;
        this[_0x1b4940(0x67d)](0x1);
    }

    function _0x36d0fd() {
        var _0xd580a9 = _0x528510;
        this[_0xd580a9(0x254)](0x0);
    }

    function _0xaf3769() {
        var _0x336e8d = _0x528510,
            _0x1d052c = _0x336e8d(0x473)['split']('|'),
            _0x45bb1c = 0x0;
        while (!![]) {
            switch (_0x1d052c[_0x45bb1c++]) {
                case '0':
                    marr[0x1] = 0x0;
                    continue;
                case '1':
                    _0x31cd64[_0x336e8d(0x7e7)](playsoundeffects, _0x31cd64['WZLGR']);
                    continue;
                case '2':
                    doll2stone['setFrame'](0x0);
                    continue;
                case '3':
                    marr[0x2] = 0x0;
                    continue;
                case '4':
                    marr[0x0] = 0x0;
                    continue;
                case '5':
                    marr[0x5] = 0x0;
                    continue;
                case '6':
                    marr[0x4] = 0x0;
                    continue;
                case '7':
                    marr[0x7] = 0x0;
                    continue;
                case '8':
                    _0x31cd64['EuOYw'](_0x1ce01f);
                    continue;
                case '9':
                    _0x31cd64['Rkfzk'](lcount1, 0x0);
                    continue;
                case '10':
                    doll2stone1[_0x336e8d(0x254)](0x0);
                    continue;
                case '11':
                    doll2stone3[_0x336e8d(0x254)](0x0);
                    continue;
                case '12':
                    doll2eyeshadeopen[_0x336e8d(0x254)](0x0);
                    continue;
                case '13':
                    doll2eyeshadeclose['setFrame'](0x0);
                    continue;
                case '14':
                    doll2lip[_0x336e8d(0x254)](0x0);
                    continue;
                case '15':
                    this[_0x336e8d(0x254)](0x1);
                    continue;
                case '16':
                    doll2stone2['setFrame'](0x0);
                    continue;
                case '17':
                    marr[0x6] = 0x0;
                    continue;
                case '18':
                    doll2eyeball['setFrame'](0x0);
                    continue;
                case '19':
                    doll2blush[_0x336e8d(0x254)](0x0);
                    continue;
                case '20':
                    marr[0x3] = 0x0;
                    continue;
            }
            break;
        }
    }
    game[_0x31cd64[_0x528510(0x2be)](_0x31cd64[_0x528510(0x35a)], 0x3)]['on'](_0x31cd64[_0x528510(0x3bf)], _0x3941ef), game[_0x31cd64[_0x528510(0xa11)](_0x528510(0x41a), 0x3)]['on'](_0x528510(0x338), _0x1a153f), game[_0x31cd64[_0x528510(0x82a)](_0x31cd64[_0x528510(0x35a)], 0x3)]['on'](_0x528510(0x637), _0x234fb2);

    function _0x3941ef(_0x347dc0) {
        var _0x1fe93b = _0x528510;
        this[_0x1fe93b(0x67d)](1.05);
    }

    function _0x1a153f(_0x1c76fa) {
        var _0x1abb8b = _0x528510;
        this[_0x1abb8b(0x67d)](0x1);
    }

    function _0x234fb2() {
        var _0x430d61 = _0x528510;
        this['setFrame'](0x1), playsoundeffects('clickss'), game['scene']['scenes'][pageNo][_0x430d61(0x465)][_0x430d61(0x85a)]({
            'targets': this,
            'scale': 0.9,
            'ease': 'Linear',
            'duration': 0x64,
            'yoyo': !![]
        }), soundmute[_0x430d61(0xa6e)] = ![], done2[_0x430d61(0x55e)] = 0x0, _0x1ce01f(), game[_0x430d61(0x374)]['scenes'][pageNo][_0x430d61(0x465)]['add']({
            'targets': level2grp,
            'x': 0x78,
            'ease': _0x430d61(0x901),
            'duration': 0x1f4
        }), game[_0x430d61(0x374)]['scenes'][pageNo][_0x430d61(0x465)][_0x430d61(0x85a)]({
            'targets': cupboardgroup1,
            'x': -0x320,
            'ease': _0x31cd64[_0x430d61(0x6b1)],
            'duration': 0x1f4
        }), game['scene'][_0x430d61(0x237)][pageNo][_0x430d61(0x465)][_0x430d61(0x85a)]({
            'targets': cupboardgroup,
            'x': 0x320,
            'ease': _0x31cd64[_0x430d61(0x6b1)],
            'duration': 0x1f4,
            'onComplete': _0x3e7287
        });

        function _0x3e7287() {
            var _0x338cde = _0x430d61;
            flashshape[_0x338cde(0x55e)] = 0x0, flashshape[_0x338cde(0xa6e)] = !![], game['scene'][_0x338cde(0x237)][pageNo]['tweens'][_0x338cde(0x85a)]({
                'targets': flashshape,
                'alpha': 0x1,
                'ease': _0x31cd64[_0x338cde(0x6b1)],
                'duration': 0x64,
                'repeat': 0x1,
                'yoyo': !![],
                'onComplete': _0x2ede54
            });
        }

        function _0x2ede54() {
            var _0x1ea537 = _0x430d61,
                _0x329635 = {
                    'jpolX': _0x31cd64['lKndt'],
                    'qLdsM': _0x31cd64[_0x1ea537(0x6b1)],
                    'DHxxU': _0x31cd64['PeRSX'],
                    'WGUSy': function(_0x3266c9, _0x7d23ea, _0x3a719c, _0x24f71d) {
                        var _0x9ce02a = _0x1ea537;
                        return _0x31cd64[_0x9ce02a(0xac7)](_0x3266c9, _0x7d23ea, _0x3a719c, _0x24f71d);
                    },
                    'uazTi': _0x31cd64[_0x1ea537(0x8c1)]
                };
            game[_0x31cd64[_0x1ea537(0x66a)](_0x31cd64[_0x1ea537(0x35a)], 0x3)][_0x1ea537(0x254)](0x0), setTimeout(_0xa5ba92, 0x64);

            function _0xa5ba92() {
                var _0x1567d6 = _0x1ea537,
                    _0x48ac58 = _0x329635[_0x1567d6(0x2c9)][_0x1567d6(0xa4e)]('|'),
                    _0x30a495 = 0x0;
                while (!![]) {
                    switch (_0x48ac58[_0x30a495++]) {
                        case '0':
                            done2[_0x1567d6(0x55e)] = 0x1;
                            continue;
                        case '1':
                            game[_0x1567d6(0x374)][_0x1567d6(0x237)][pageNo][_0x1567d6(0x465)][_0x1567d6(0x85a)]({
                                'targets': cupboardgroup1,
                                'x': 0x0,
                                'ease': 'Linear',
                                'duration': 0x1f4
                            });
                            continue;
                        case '2':
                            game['scene'][_0x1567d6(0x237)][pageNo]['tweens'][_0x1567d6(0x85a)]({
                                'targets': level2grp,
                                'x': 0x0,
                                'ease': _0x329635[_0x1567d6(0x36c)],
                                'duration': 0x1f4
                            });
                            continue;
                        case '3':
                            game[_0x1567d6(0x374)][_0x1567d6(0x237)][pageNo]['tweens'][_0x1567d6(0x85a)]({
                                'targets': cupboardgroup,
                                'x': 0x0,
                                'ease': _0x329635[_0x1567d6(0x36c)],
                                'duration': 0x1f4
                            });
                            continue;
                        case '4':
                            soundmute[_0x1567d6(0xa6e)] = !![];
                            continue;
                    }
                    break;
                }
            }
            var _0x2fb755;

            function _0x28f385(_0x1a282a, _0x1b7151, _0x39c3ea) {
                var _0x50406b = _0x1ea537,
                    _0x293fef = _0x329635[_0x50406b(0x7e8)][_0x50406b(0xa4e)]('|'),
                    _0x3a50d4 = 0x0;
                while (!![]) {
                    switch (_0x293fef[_0x3a50d4++]) {
                        case '0':
                            _0x44bfa5['dataset'][_0x50406b(0x56f)] = [_0x2c82d3, _0x44bfa5[_0x50406b(0x8fe)], _0x44bfa5[_0x50406b(0x46a)]]['join'](':');
                            continue;
                        case '1':
                            var _0x3e1203 = document[_0x50406b(0x547)](_0x1a282a);
                            continue;
                        case '2':
                            var _0x44bfa5 = document[_0x50406b(0x753)]('a');
                            continue;
                        case '3':
                            _0x44bfa5[_0x50406b(0x46a)] = _0x21b6e7;
                            continue;
                        case '4':
                            _0x44bfa5['click']();
                            continue;
                        case '5':
                            _0x44bfa5[_0x50406b(0x8fe)] = _0x1b7151;
                            continue;
                        case '6':
                            var _0x21b6e7 = _0x39c3ea;
                            continue;
                        case '7':
                            var _0x2c82d3 = _0x50406b(0x851);
                            continue;
                        case '8':
                            document['body'][_0x50406b(0x620)](_0x44bfa5);
                            continue;
                        case '9':
                            document[_0x50406b(0x3d1)]['removeChild'](_0x44bfa5);
                            continue;
                    }
                    break;
                }
            }
            game[_0x1ea537(0x815)][_0x1ea537(0x21c)](function(_0x347223) {
                var _0x589d96 = _0x1ea537,
                    _0x561136;
                _0x561136 = _0x347223[_0x589d96(0x942)], _0x329635['WGUSy'](_0x28f385, _0x2fb755, _0x329635[_0x589d96(0x54f)], _0x561136);
            });
        }
    }

    function _0x5961cf() {
        var _0x612e4e = _0x528510;
        this[_0x612e4e(0x67d)](0x1);
    }

    function _0x3ebcd2() {
        var _0x3f0773 = _0x528510;
        _0x31cd64['gfDll'](playsoundeffects, _0x31cd64[_0x3f0773(0x314)]), game[_0x3f0773(0x374)]['scenes'][pageNo][_0x3f0773(0x465)][_0x3f0773(0x85a)]({
            'targets': level2grp,
            'x': -0x14,
            'ease': _0x31cd64[_0x3f0773(0x7f8)],
            'duration': 0x2bc,
            'onComplete': _0x1326bb,
            'callbackScope': this
        });
    }

    function _0x1326bb() {
        var _0x557ee3 = _0x528510;
        game['scene'][_0x557ee3(0x237)][pageNo][_0x557ee3(0x465)][_0x557ee3(0x85a)]({
            'targets': cupboardgroup1,
            'x': 0x0,
            'ease': _0x31cd64['xDNhd'],
            'duration': 0x1f4,
            'callbackScope': this
        }), game['scene'][_0x557ee3(0x237)][pageNo]['tweens'][_0x557ee3(0x85a)]({
            'targets': cupboardgroup,
            'x': 0x0,
            'ease': _0x31cd64[_0x557ee3(0x6b1)],
            'duration': 0x1f4,
            'onComplete': _0x12a737,
            'callbackScope': this
        });
    }

    function _0x12a737() {
        var _0x1d3a0b = _0x528510,
            _0x1937aa = {
                'XeoWY': function(_0x22f2a3, _0x570e32) {
                    var _0x1f3a7a = _0x487b;
                    return _0x31cd64[_0x1f3a7a(0x573)](_0x22f2a3, _0x570e32);
                },
                'CdInq': function(_0x911145, _0x315fd3) {
                    var _0x5535e7 = _0x487b;
                    return _0x31cd64[_0x5535e7(0x741)](_0x911145, _0x315fd3);
                },
                'UdFcW': function(_0x2e4314, _0x1e5417) {
                    return _0x2e4314 == _0x1e5417;
                },
                'aGwyu': _0x31cd64[_0x1d3a0b(0xa05)],
                'EIBvl': function(_0x24b229, _0x5b58f5) {
                    var _0x13f712 = _0x1d3a0b;
                    return _0x31cd64[_0x13f712(0x5b7)](_0x24b229, _0x5b58f5);
                },
                'ffXNC': function(_0x524aaf, _0x8fc3e2) {
                    return _0x524aaf(_0x8fc3e2);
                },
                'JRDto': function(_0x385d83, _0x343d9e) {
                    var _0x1435d5 = _0x1d3a0b;
                    return _0x31cd64[_0x1435d5(0x7e7)](_0x385d83, _0x343d9e);
                },
                'awuRP': function(_0x3e2975) {
                    var _0x9e193d = _0x1d3a0b;
                    return _0x31cd64[_0x9e193d(0x3ea)](_0x3e2975);
                },
                'UctzP': function(_0x1b7e20, _0x3d60e9) {
                    var _0x4caa73 = _0x1d3a0b;
                    return _0x31cd64[_0x4caa73(0x4bd)](_0x1b7e20, _0x3d60e9);
                },
                'SDMIQ': function(_0x4504c3, _0x260bcc) {
                    var _0x348fb4 = _0x1d3a0b;
                    return _0x31cd64[_0x348fb4(0x3ae)](_0x4504c3, _0x260bcc);
                },
                'dmUMm': _0x31cd64['WMxja'],
                'YMLao': function(_0x53e82a, _0x3cf550) {
                    return _0x53e82a(_0x3cf550);
                },
                'iUUlt': _0x31cd64[_0x1d3a0b(0x9b1)],
                'jUWxe': _0x31cd64[_0x1d3a0b(0x6b1)],
                'kCHAb': function(_0x531715) {
                    return _0x531715();
                },
                'gDcbF': _0x31cd64[_0x1d3a0b(0x73a)],
                'sOrNS': function(_0x45d2da, _0x1b8d34) {
                    return _0x45d2da == _0x1b8d34;
                },
                'rQFip': function(_0x55319b, _0x141202) {
                    var _0x5bf6cd = _0x1d3a0b;
                    return _0x31cd64[_0x5bf6cd(0x368)](_0x55319b, _0x141202);
                },
                'SNVuf': function(_0x3f8eb2, _0x182165) {
                    return _0x3f8eb2(_0x182165);
                },
                'mmxAr': function(_0x518dc6, _0x2a6668) {
                    return _0x31cd64['GAPXj'](_0x518dc6, _0x2a6668);
                },
                'kKsGo': _0x31cd64[_0x1d3a0b(0x598)],
                'AhBRT': function(_0x2237a5, _0x1cfb20) {
                    return _0x2237a5 == _0x1cfb20;
                },
                'QoNUq': function(_0x3417e7, _0xdb15b0) {
                    var _0x10855e = _0x1d3a0b;
                    return _0x31cd64[_0x10855e(0x7e7)](_0x3417e7, _0xdb15b0);
                },
                'Naxxi': function(_0x10bb5e, _0x3143a3) {
                    var _0x21b099 = _0x1d3a0b;
                    return _0x31cd64[_0x21b099(0x7e7)](_0x10bb5e, _0x3143a3);
                },
                'CdXIy': function(_0x4601f9, _0x30404d) {
                    return _0x4601f9 == _0x30404d;
                },
                'YkqRI': function(_0x4bb269, _0x224833) {
                    var _0x16c5c4 = _0x1d3a0b;
                    return _0x31cd64[_0x16c5c4(0x387)](_0x4bb269, _0x224833);
                },
                'anJXG': function(_0x5406d1, _0x4a9c48) {
                    var _0x29e384 = _0x1d3a0b;
                    return _0x31cd64[_0x29e384(0x4ea)](_0x5406d1, _0x4a9c48);
                },
                'mjpeh': function(_0x3e1c49, _0xec18ee) {
                    var _0xe33f70 = _0x1d3a0b;
                    return _0x31cd64[_0xe33f70(0x50e)](_0x3e1c49, _0xec18ee);
                },
                'VoXpu': function(_0x22727e) {
                    var _0x4e7afa = _0x1d3a0b;
                    return _0x31cd64[_0x4e7afa(0x71a)](_0x22727e);
                },
                'HKUFy': function(_0x2d3e96, _0x4f667a) {
                    var _0x76884d = _0x1d3a0b;
                    return _0x31cd64[_0x76884d(0x2ab)](_0x2d3e96, _0x4f667a);
                },
                'oeSbe': function(_0x1a120a) {
                    var _0x22dcb1 = _0x1d3a0b;
                    return _0x31cd64[_0x22dcb1(0x7ac)](_0x1a120a);
                },
                'YCUuc': function(_0x10a840, _0x4fe389) {
                    var _0x48411f = _0x1d3a0b;
                    return _0x31cd64[_0x48411f(0xa61)](_0x10a840, _0x4fe389);
                },
                'dhMAP': function(_0x57fdec, _0x99e3ed) {
                    var _0x2e5be0 = _0x1d3a0b;
                    return _0x31cd64[_0x2e5be0(0x5b7)](_0x57fdec, _0x99e3ed);
                },
                'EMghy': function(_0x18bb25, _0x299654) {
                    var _0x337200 = _0x1d3a0b;
                    return _0x31cd64[_0x337200(0x640)](_0x18bb25, _0x299654);
                }
            };
        for (i = 0x8; _0x31cd64['OLuAM'](i, 0x1); i--) {
            game[_0x31cd64[_0x1d3a0b(0x9fb)](_0x31cd64[_0x1d3a0b(0x876)], i)]['on'](_0x31cd64['sVvQP'], _0x4bf44b), game[_0x1d3a0b(0x263) + i]['on'](_0x31cd64['TokQY'], _0x2537bd), game[_0x31cd64['GncBy'](_0x31cd64[_0x1d3a0b(0x876)], i)]['on'](_0x31cd64[_0x1d3a0b(0x77a)], _0x3fc376);
        }

        function _0x4bf44b(_0x1af674) {
            var _0x7c2fbf = _0x1d3a0b;
            (_0x1937aa[_0x7c2fbf(0x714)](showad, 0x1) && _0x1937aa[_0x7c2fbf(0x6a9)](eyeshadowarr[this['texture'][_0x7c2fbf(0x7ef)]['substr'](0xf)], 0x0) || _0x1937aa[_0x7c2fbf(0x7c1)](showad, 0x2)) && this[_0x7c2fbf(0x67d)](1.05);
        }

        function _0x2537bd(_0x4ae655) {
            this['setScale'](0x1);
        }

        function _0x3fc376(_0x1c0246) {
            var _0x1b2884 = _0x1d3a0b,
                _0xaff4ff = _0x1937aa[_0x1b2884(0x56c)][_0x1b2884(0xa4e)]('|'),
                _0x3505e2 = 0x0;
            while (!![]) {
                switch (_0xaff4ff[_0x3505e2++]) {
                    case '0':
                        _0x1937aa['EIBvl'](playsoundeffects, _0x1b2884(0x27b));
                        continue;
                    case '1':
                        btnstart1 = !![];
                        continue;
                    case '2':
                        leveladcheck = 0x1;
                        continue;
                    case '3':
                        marr[0x0] == _0x1937aa[_0x1b2884(0x6f4)](parseInt, sno) ? (doll2eyeshadeclose[_0x1b2884(0x254)](0x0), doll2eyeshadeopen[_0x1b2884(0x254)](0x0), marr[0x0] = 0x0) : (showad == 0x1 && eyeshadowarr[parseInt(sno)] == 0x0 || _0x1937aa[_0x1b2884(0x7c1)](showad, 0x2)) && (marr[0x0] = _0x1937aa['JRDto'](parseInt, sno), doll2eyeshadeclose[_0x1b2884(0x254)](marr[0x0]), doll2eyeshadeopen[_0x1b2884(0x254)](marr[0x0]));
                        continue;
                    case '4':
                        _0x1937aa[_0x1b2884(0x6e3)](_0x1ce01f);
                        continue;
                    case '5':
                        sno = this[_0x1b2884(0x73d)]['key']['substr'](0xf);
                        continue;
                    case '6':
                        this[_0x1b2884(0x67d)](0x1);
                        continue;
                    case '7':
                        _0x1937aa[_0x1b2884(0x7d6)](showad, 0x1) && _0x1937aa[_0x1b2884(0x7c1)](eyeshadowarr[_0x1937aa[_0x1b2884(0x5d1)](parseInt, sno)], 0x1) ? _0x67e6c0() : (dressgliter['anims'][_0x1b2884(0x742)](_0x1937aa[_0x1b2884(0x57b)]), dressgliter[_0x1b2884(0x86e)]['play'](_0x1937aa[_0x1b2884(0x57b)]), _0x1937aa['YMLao'](playsoundeffects, _0x1937aa[_0x1b2884(0x1e1)]), game[_0x1b2884(0x374)][_0x1b2884(0x237)][pageNo][_0x1b2884(0x465)]['add']({
                            'targets': this,
                            'scale': 0.9,
                            'ease': _0x1937aa[_0x1b2884(0x245)],
                            'duration': 0x64,
                            'yoyo': !![]
                        }));
                        continue;
                    case '8':
                        _0x1937aa[_0x1b2884(0x7da)](_0x227f1d);
                        continue;
                }
                break;
            }
        }
        for (i = 0x8; _0x31cd64[_0x1d3a0b(0x390)](i, 0x1); i--) {
            game[_0x31cd64['LpuBD'](_0x31cd64[_0x1d3a0b(0x861)], i)]['on'](_0x31cd64['sVvQP'], _0x51850a), game[_0x31cd64['XqUwV'](_0x31cd64[_0x1d3a0b(0x861)], i)]['on'](_0x1d3a0b(0x338), _0x2537bd), game[_0x31cd64[_0x1d3a0b(0x861)] + i]['on'](_0x31cd64[_0x1d3a0b(0x77a)], _0x1f2c7b);
        }

        function _0x51850a(_0x1eabbe) {
            var _0x27ffc6 = _0x1d3a0b;
            (_0x1937aa[_0x27ffc6(0x7d6)](showad, 0x1) && _0x1937aa[_0x27ffc6(0x714)](blusharr[this[_0x27ffc6(0x73d)]['key'][_0x27ffc6(0x8dc)](0xb)], 0x0) || _0x1937aa[_0x27ffc6(0x6a9)](showad, 0x2)) && this[_0x27ffc6(0x67d)](1.05);
        }

        function _0x1f2c7b(_0x27cac0) {
            var _0x2f221f = _0x1d3a0b,
                _0x4c99bf = _0x1937aa[_0x2f221f(0x266)][_0x2f221f(0xa4e)]('|'),
                _0x2137f6 = 0x0;
            while (!![]) {
                switch (_0x4c99bf[_0x2137f6++]) {
                    case '0':
                        sno = this[_0x2f221f(0x73d)]['key'][_0x2f221f(0x8dc)](0xb);
                        continue;
                    case '1':
                        btnstart1 = !![];
                        continue;
                    case '2':
                        _0x1937aa[_0x2f221f(0x2f6)](marr[0x1], _0x1937aa[_0x2f221f(0x371)](parseInt, sno)) ? (doll2blush['setFrame'](0x0), marr[0x1] = 0x0) : (_0x1937aa[_0x2f221f(0x714)](showad, 0x1) && _0x1937aa['sOrNS'](blusharr[_0x1937aa[_0x2f221f(0x371)](parseInt, sno)], 0x0) || _0x1937aa[_0x2f221f(0x7d6)](showad, 0x2)) && (marr[0x1] = _0x1937aa[_0x2f221f(0x895)](parseInt, sno), doll2blush['setFrame'](marr[0x1]));
                        continue;
                    case '3':
                        this[_0x2f221f(0x67d)](0x1);
                        continue;
                    case '4':
                        _0x1ce01f();
                        continue;
                    case '5':
                        _0x1937aa['mmxAr'](playsoundeffects, _0x1937aa[_0x2f221f(0x2cf)]);
                        continue;
                    case '6':
                        leveladcheck = 0x2;
                        continue;
                    case '7':
                        _0x1937aa[_0x2f221f(0x3f0)](showad, 0x1) && blusharr[_0x1937aa['QoNUq'](parseInt, sno)] == 0x1 ? _0x1937aa[_0x2f221f(0x7da)](_0x67e6c0) : (dressgliter[_0x2f221f(0x86e)][_0x2f221f(0x742)](_0x1937aa['dmUMm']), dressgliter[_0x2f221f(0x86e)][_0x2f221f(0x3ca)](_0x1937aa[_0x2f221f(0x57b)]), _0x1937aa[_0x2f221f(0xa1a)](playsoundeffects, _0x1937aa[_0x2f221f(0x1e1)]), game['scene'][_0x2f221f(0x237)][pageNo][_0x2f221f(0x465)][_0x2f221f(0x85a)]({
                            'targets': this,
                            'scale': 0.9,
                            'ease': _0x2f221f(0x901),
                            'duration': 0x64,
                            'yoyo': !![]
                        }));
                        continue;
                    case '8':
                        _0x1937aa[_0x2f221f(0x7da)](_0x227f1d);
                        continue;
                }
                break;
            }
        }
        for (i = 0x8; i >= 0x1; i--) {
            game[_0x31cd64[_0x1d3a0b(0x9bf)] + i]['on'](_0x31cd64[_0x1d3a0b(0x3bf)], _0x33464e), game[_0x31cd64['LuEsI'](_0x31cd64[_0x1d3a0b(0x9bf)], i)]['on'](_0x31cd64[_0x1d3a0b(0x2d0)], _0x2537bd), game[_0x1d3a0b(0x276) + i]['on'](_0x1d3a0b(0x637), _0x19e7f1);
        }

        function _0x33464e(_0x12a83f) {
            var _0x215f74 = _0x1d3a0b;
            (_0x1937aa[_0x215f74(0x714)](showad, 0x1) && liparr[this[_0x215f74(0x73d)]['key'][_0x215f74(0x8dc)](0x9)] == 0x0 || _0x1937aa['XeoWY'](showad, 0x2)) && this[_0x215f74(0x67d)](1.05);
        }

        function _0x19e7f1(_0xc4cca0) {
            var _0x27b281 = _0x1d3a0b;
            leveladcheck = 0x3, this[_0x27b281(0x67d)](0x1), btnstart1 = !![], _0x31cd64[_0x27b281(0x79c)](playsoundeffects, _0x27b281(0x27b)), sno = this[_0x27b281(0x73d)]['key'][_0x27b281(0x8dc)](0x9), _0x31cd64[_0x27b281(0x633)](marr[0x2], _0x31cd64[_0x27b281(0x7e7)](parseInt, sno)) ? (marr[0x2] = 0x0, doll2lip['setFrame'](0x0)) : (showad == 0x1 && _0x31cd64[_0x27b281(0x908)](liparr[_0x31cd64[_0x27b281(0x7b2)](parseInt, sno)], 0x0) || _0x31cd64['hyKVu'](showad, 0x2)) && (marr[0x2] = parseInt(sno), doll2lip['setFrame'](marr[0x2])), _0x31cd64[_0x27b281(0x274)](showad, 0x1) && liparr[parseInt(sno)] == 0x1 ? _0x31cd64[_0x27b281(0x7c0)](_0x67e6c0) : (dressgliter[_0x27b281(0x86e)]['load'](_0x31cd64['WMxja']), dressgliter[_0x27b281(0x86e)][_0x27b281(0x3ca)](_0x31cd64['WMxja']), playsoundeffects(_0x31cd64[_0x27b281(0x9b1)]), game[_0x27b281(0x374)]['scenes'][pageNo]['tweens']['add']({
                'targets': this,
                'scale': 0.9,
                'ease': _0x27b281(0x901),
                'duration': 0x64,
                'yoyo': !![]
            })), _0x227f1d(), _0x31cd64[_0x27b281(0x7c0)](_0x1ce01f);
        }
        for (i = 0x3; _0x31cd64[_0x1d3a0b(0x74a)](i, 0x1); i--) {
            game[_0x31cd64[_0x1d3a0b(0x66a)](_0x31cd64[_0x1d3a0b(0x9df)], i)]['on'](_0x1d3a0b(0x82f), _0xba6ed8), game[_0x31cd64[_0x1d3a0b(0x9df)] + i]['on'](_0x31cd64[_0x1d3a0b(0x2d0)], _0x2537bd), game[_0x31cd64['aPuDU'] + i]['on']('pointerdown', _0xd21ac8);
        }

        function _0xba6ed8(_0x2a1580) {
            var _0x368e13 = _0x1d3a0b;
            (_0x1937aa[_0x368e13(0x397)](showad, 0x1) && _0x1937aa[_0x368e13(0x3f0)](stonearr[this[_0x368e13(0x73d)][_0x368e13(0x7ef)][_0x368e13(0x8dc)](0xb)], 0x0) || _0x1937aa[_0x368e13(0x714)](showad, 0x2)) && this[_0x368e13(0x67d)](1.05);
        }

        function _0xd21ac8(_0x408a7d) {
            var _0x2bf06d = _0x1d3a0b,
                _0x4a7276 = _0x31cd64[_0x2bf06d(0x529)]['split']('|'),
                _0x24b85f = 0x0;
            while (!![]) {
                switch (_0x4a7276[_0x24b85f++]) {
                    case '0':
                        _0x31cd64['gfDll'](playsoundeffects, _0x31cd64[_0x2bf06d(0x598)]);
                        continue;
                    case '1':
                        sno = this[_0x2bf06d(0x73d)]['key'][_0x2bf06d(0x8dc)](0xb);
                        continue;
                    case '2':
                        btnstart1 = !![];
                        continue;
                    case '3':
                        _0x31cd64[_0x2bf06d(0x362)](showad, 0x1) && _0x31cd64[_0x2bf06d(0x306)](stonearr[_0x31cd64['BWizh'](parseInt, sno)], 0x1) ? _0x31cd64[_0x2bf06d(0x961)](_0x67e6c0) : (dressgliter['anims'][_0x2bf06d(0x742)](_0x31cd64[_0x2bf06d(0x419)]), dressgliter['anims'][_0x2bf06d(0x3ca)](_0x2bf06d(0x72e)), _0x31cd64[_0x2bf06d(0x4c5)](playsoundeffects, _0x2bf06d(0x4ac)), game[_0x2bf06d(0x374)]['scenes'][pageNo][_0x2bf06d(0x465)][_0x2bf06d(0x85a)]({
                            'targets': this,
                            'scale': 0.9,
                            'ease': _0x31cd64[_0x2bf06d(0x6b1)],
                            'duration': 0x64,
                            'yoyo': !![]
                        }));
                        continue;
                    case '4':
                        _0x227f1d();
                        continue;
                    case '5':
                        this[_0x2bf06d(0x67d)](0x1);
                        continue;
                    case '6':
                        _0x31cd64[_0x2bf06d(0x9fe)](marr[0x3], parseInt(sno)) ? (doll2stone[_0x2bf06d(0x254)](0x0), marr[0x3] = 0x0) : (_0x31cd64['axulx'](showad, 0x1) && _0x31cd64[_0x2bf06d(0x817)](stonearr[parseInt(sno)], 0x0) || _0x31cd64[_0x2bf06d(0x362)](showad, 0x2)) && (marr[0x3] = _0x31cd64[_0x2bf06d(0x606)](parseInt, sno), doll2stone[_0x2bf06d(0x254)](marr[0x3]));
                        continue;
                    case '7':
                        _0x31cd64['tEgRi'](_0x1ce01f);
                        continue;
                    case '8':
                        leveladcheck = 0x4;
                        continue;
                }
                break;
            }
        }
        for (i = 0x4; _0x31cd64[_0x1d3a0b(0x390)](i, 0x4); i--) {
            game[_0x31cd64[_0x1d3a0b(0x87c)](_0x31cd64[_0x1d3a0b(0x9df)], i)]['on'](_0x31cd64['sVvQP'], _0xba6ed8), game[_0x31cd64[_0x1d3a0b(0x9df)] + i]['on'](_0x31cd64['TokQY'], _0x2537bd), game[_0x31cd64['XqUwV'](_0x31cd64['aPuDU'], i)]['on'](_0x1d3a0b(0x637), _0x55395c);
        }
        for (i = 0x6; _0x31cd64['OLuAM'](i, 0x6); i--) {
            game[_0x31cd64[_0x1d3a0b(0x3b9)]('level2stone', i)]['on'](_0x31cd64[_0x1d3a0b(0x3bf)], _0xba6ed8), game[_0x31cd64[_0x1d3a0b(0x1a3)](_0x31cd64[_0x1d3a0b(0x9df)], i)]['on'](_0x31cd64[_0x1d3a0b(0x2d0)], _0x2537bd), game[_0x31cd64['sGxHc'](_0x31cd64[_0x1d3a0b(0x9df)], i)]['on'](_0x1d3a0b(0x637), _0x55395c);
        }

        function _0xba6ed8(_0x34d68) {
            var _0x5e4e53 = _0x1d3a0b;
            (_0x1937aa['YkqRI'](showad, 0x1) && _0x1937aa[_0x5e4e53(0x2f6)](stonearr[this[_0x5e4e53(0x73d)]['key'][_0x5e4e53(0x8dc)](0xb)], 0x0) || _0x1937aa['CdInq'](showad, 0x2)) && this['setScale'](1.05);
        }

        function _0x55395c(_0x2ae48e) {
            var _0x2f82b3 = _0x1d3a0b,
                _0x3a44e9 = _0x31cd64[_0x2f82b3(0x32b)][_0x2f82b3(0xa4e)]('|'),
                _0x3eb12e = 0x0;
            while (!![]) {
                switch (_0x3a44e9[_0x3eb12e++]) {
                    case '0':
                        leveladcheck = 0x4;
                        continue;
                    case '1':
                        _0x31cd64['VpVTE'](marr[0x5], _0x31cd64['NekMa'](parseInt, sno)) ? (doll2stone1[_0x2f82b3(0x254)](0x0), marr[0x5] = 0x0) : (_0x31cd64[_0x2f82b3(0x9ec)](showad, 0x1) && _0x31cd64['kgTNh'](stonearr[_0x31cd64[_0x2f82b3(0x7e7)](parseInt, sno)], 0x0) || _0x31cd64['VpVTE'](showad, 0x2)) && (marr[0x5] = _0x31cd64['NekMa'](parseInt, sno), doll2stone1['setFrame'](marr[0x5]));
                        continue;
                    case '2':
                        _0x31cd64[_0x2f82b3(0x705)](_0x1ce01f);
                        continue;
                    case '3':
                        btnstart1 = !![];
                        continue;
                    case '4':
                        _0x31cd64[_0x2f82b3(0x9be)](_0x227f1d);
                        continue;
                    case '5':
                        _0x31cd64[_0x2f82b3(0x31b)](playsoundeffects, _0x31cd64['ZxZIa']);
                        continue;
                    case '6':
                        sno = this[_0x2f82b3(0x73d)][_0x2f82b3(0x7ef)]['substr'](0xb);
                        continue;
                    case '7':
                        _0x31cd64['Rkfzk'](showad, 0x1) && _0x31cd64['hgedF'](stonearr[_0x31cd64['IusEf'](parseInt, sno)], 0x1) ? _0x31cd64[_0x2f82b3(0x71a)](_0x67e6c0) : (dressgliter[_0x2f82b3(0x86e)][_0x2f82b3(0x742)](_0x31cd64['WMxja']), dressgliter[_0x2f82b3(0x86e)][_0x2f82b3(0x3ca)](_0x31cd64[_0x2f82b3(0x419)]), _0x31cd64['UQiXL'](playsoundeffects, _0x31cd64['UJJwy']), game[_0x2f82b3(0x374)][_0x2f82b3(0x237)][pageNo][_0x2f82b3(0x465)][_0x2f82b3(0x85a)]({
                            'targets': this,
                            'scale': 0.9,
                            'ease': _0x31cd64[_0x2f82b3(0x6b1)],
                            'duration': 0x64,
                            'yoyo': !![]
                        }));
                        continue;
                    case '8':
                        this[_0x2f82b3(0x67d)](0x1);
                        continue;
                }
                break;
            }
        }
        for (i = 0x5; i >= 0x5; i--) {
            game[_0x31cd64[_0x1d3a0b(0x2b0)](_0x31cd64['aPuDU'], i)]['on'](_0x31cd64['sVvQP'], _0xba6ed8), game[_0x31cd64[_0x1d3a0b(0x9df)] + i]['on'](_0x1d3a0b(0x338), _0x2537bd), game[_0x31cd64[_0x1d3a0b(0x5d0)](_0x1d3a0b(0x22b), i)]['on']('pointerdown', _0x449b36);
        }

        function _0xba6ed8(_0x5eb352) {
            var _0x16ea48 = _0x1d3a0b;
            (_0x31cd64['NpjAp'](showad, 0x1) && _0x31cd64['hgedF'](stonearr[this[_0x16ea48(0x73d)]['key'][_0x16ea48(0x8dc)](0xb)], 0x0) || showad == 0x2) && this[_0x16ea48(0x67d)](1.05);
        }

        function _0x449b36(_0x2e046e) {
            var _0x43d132 = _0x1d3a0b,
                _0x5059a5 = _0x31cd64['QdNGR']['split']('|'),
                _0x298d27 = 0x0;
            while (!![]) {
                switch (_0x5059a5[_0x298d27++]) {
                    case '0':
                        btnstart1 = !![];
                        continue;
                    case '1':
                        showad == 0x1 && _0x31cd64['rANAx'](stonearr[_0x31cd64[_0x43d132(0x4d3)](parseInt, sno)], 0x1) ? _0x67e6c0() : (dressgliter[_0x43d132(0x86e)]['load'](_0x31cd64['WMxja']), dressgliter[_0x43d132(0x86e)][_0x43d132(0x3ca)](_0x43d132(0x72e)), _0x31cd64['NekMa'](playsoundeffects, _0x43d132(0x4ac)), game[_0x43d132(0x374)]['scenes'][pageNo]['tweens'][_0x43d132(0x85a)]({
                            'targets': this,
                            'scale': 0.9,
                            'ease': _0x31cd64['xDNhd'],
                            'duration': 0x64,
                            'yoyo': !![]
                        }));
                        continue;
                    case '2':
                        _0x31cd64['BaEFV'](playsoundeffects, 'itemclick');
                        continue;
                    case '3':
                        _0x31cd64[_0x43d132(0x94c)](_0x227f1d);
                        continue;
                    case '4':
                        this[_0x43d132(0x67d)](0x1);
                        continue;
                    case '5':
                        marr[0x6] == parseInt(sno) ? (doll2stone2[_0x43d132(0x254)](0x0), marr[0x6] = 0x0) : (_0x31cd64['Rkfzk'](showad, 0x1) && _0x31cd64['eQNsr'](stonearr[_0x31cd64[_0x43d132(0x25b)](parseInt, sno)], 0x0) || _0x31cd64[_0x43d132(0xacb)](showad, 0x2)) && (marr[0x6] = _0x31cd64['nnjhL'](parseInt, sno), doll2stone2[_0x43d132(0x254)](marr[0x6]));
                        continue;
                    case '6':
                        _0x31cd64[_0x43d132(0x7c0)](_0x1ce01f);
                        continue;
                    case '7':
                        leveladcheck = 0x4;
                        continue;
                    case '8':
                        sno = this[_0x43d132(0x73d)][_0x43d132(0x7ef)]['substr'](0xb);
                        continue;
                }
                break;
            }
        }
        for (i = 0x8; _0x31cd64[_0x1d3a0b(0x390)](i, 0x7); i--) {
            game[_0x31cd64['eLpZK'](_0x31cd64[_0x1d3a0b(0x9df)], i)]['on']('pointerover', _0xba6ed8), game[_0x31cd64[_0x1d3a0b(0x978)](_0x31cd64[_0x1d3a0b(0x9df)], i)]['on'](_0x31cd64[_0x1d3a0b(0x2d0)], _0x2537bd), game[_0x31cd64[_0x1d3a0b(0x66f)](_0x31cd64[_0x1d3a0b(0x9df)], i)]['on'](_0x31cd64[_0x1d3a0b(0x77a)], _0x3dba49);
        }

        function _0xba6ed8(_0x6b3ad7) {
            var _0x1dea46 = _0x1d3a0b;
            (_0x31cd64['tDokW'](showad, 0x1) && _0x31cd64[_0x1dea46(0x4a5)](stonearr[this[_0x1dea46(0x73d)][_0x1dea46(0x7ef)][_0x1dea46(0x8dc)](0xb)], 0x0) || _0x31cd64[_0x1dea46(0x9ec)](showad, 0x2)) && this[_0x1dea46(0x67d)](1.05);
        }

        function _0x3dba49(_0x116706) {
            var _0x447604 = _0x1d3a0b;
            leveladcheck = 0x4, this[_0x447604(0x67d)](0x1), btnstart1 = !![], _0x31cd64['gfDll'](playsoundeffects, 'itemclick'), sno = this['texture']['key'][_0x447604(0x8dc)](0xb), marr[0x7] == parseInt(sno) ? (doll2stone3['setFrame'](0x0), marr[0x7] = 0x0) : (_0x31cd64[_0x447604(0x4bd)](showad, 0x1) && stonearr[_0x31cd64[_0x447604(0xa35)](parseInt, sno)] == 0x0 || _0x31cd64[_0x447604(0x9d0)](showad, 0x2)) && (marr[0x7] = _0x31cd64[_0x447604(0x25b)](parseInt, sno), doll2stone3[_0x447604(0x254)](marr[0x7])), showad == 0x1 && _0x31cd64[_0x447604(0x4bd)](stonearr[_0x31cd64[_0x447604(0x79c)](parseInt, sno)], 0x1) ? _0x67e6c0() : (dressgliter[_0x447604(0x86e)]['load'](_0x31cd64['WMxja']), dressgliter[_0x447604(0x86e)][_0x447604(0x3ca)](_0x31cd64['WMxja']), _0x31cd64[_0x447604(0x640)](playsoundeffects, _0x31cd64[_0x447604(0x9b1)]), game[_0x447604(0x374)][_0x447604(0x237)][pageNo][_0x447604(0x465)]['add']({
                'targets': this,
                'scale': 0.9,
                'ease': _0x31cd64[_0x447604(0x6b1)],
                'duration': 0x64,
                'yoyo': !![]
            })), _0x31cd64[_0x447604(0x961)](_0x227f1d), _0x31cd64[_0x447604(0x699)](_0x1ce01f);
        }
        for (i = 0x8; _0x31cd64[_0x1d3a0b(0x846)](i, 0x1); i--) {
            game[_0x31cd64[_0x1d3a0b(0x84d)](_0x31cd64[_0x1d3a0b(0x81a)], i)]['on'](_0x1d3a0b(0x82f), _0x224188), game[_0x31cd64[_0x1d3a0b(0x1d4)](_0x31cd64[_0x1d3a0b(0x81a)], i)]['on']('pointerout', _0x2537bd), game[_0x31cd64['lkuIA'] + i]['on'](_0x31cd64[_0x1d3a0b(0x77a)], _0x398cd5);
        }

        function _0x224188(_0x2ad67d) {
            var _0x145a50 = _0x1d3a0b;
            (_0x1937aa[_0x145a50(0xa37)](showad, 0x1) && eyeballarr[this[_0x145a50(0x73d)][_0x145a50(0x7ef)]['substr'](0xd)] == 0x0 || _0x1937aa[_0x145a50(0xaa5)](showad, 0x2)) && this[_0x145a50(0x67d)](1.05);
        }

        function _0x398cd5(_0x15ec9d) {
            var _0x28ab2d = _0x1d3a0b,
                _0x5e3333 = _0x28ab2d(0x999)[_0x28ab2d(0xa4e)]('|'),
                _0x24308f = 0x0;
            while (!![]) {
                switch (_0x5e3333[_0x24308f++]) {
                    case '0':
                        playsoundeffects(_0x1937aa[_0x28ab2d(0x2cf)]);
                        continue;
                    case '1':
                        btnstart1 = !![];
                        continue;
                    case '2':
                        this[_0x28ab2d(0x67d)](0x1);
                        continue;
                    case '3':
                        _0x1937aa[_0x28ab2d(0xa28)](_0x227f1d);
                        continue;
                    case '4':
                        _0x1937aa[_0x28ab2d(0xaa5)](marr[0x4], parseInt(sno)) ? (doll2eyeball[_0x28ab2d(0x254)](0x0), marr[0x4] = 0x0) : (_0x1937aa[_0x28ab2d(0xa8a)](showad, 0x1) && _0x1937aa['UctzP'](eyeballarr[parseInt(sno)], 0x0) || showad == 0x2) && (marr[0x4] = _0x1937aa['Naxxi'](parseInt, sno), doll2eyeball[_0x28ab2d(0x254)](marr[0x4]));
                        continue;
                    case '5':
                        _0x1937aa[_0x28ab2d(0x236)](_0x1ce01f);
                        continue;
                    case '6':
                        _0x1937aa[_0x28ab2d(0x397)](showad, 0x1) && _0x1937aa[_0x28ab2d(0x35d)](eyeballarr[_0x1937aa[_0x28ab2d(0x79d)](parseInt, sno)], 0x1) ? _0x67e6c0() : (dressgliter[_0x28ab2d(0x86e)]['load'](_0x28ab2d(0x72e)), dressgliter[_0x28ab2d(0x86e)][_0x28ab2d(0x3ca)](_0x1937aa[_0x28ab2d(0x57b)]), _0x1937aa[_0x28ab2d(0x3a3)](playsoundeffects, _0x28ab2d(0x4ac)), game[_0x28ab2d(0x374)][_0x28ab2d(0x237)][pageNo]['tweens']['add']({
                            'targets': this,
                            'scale': 0.9,
                            'ease': _0x1937aa[_0x28ab2d(0x245)],
                            'duration': 0x64,
                            'yoyo': !![]
                        }));
                        continue;
                    case '7':
                        sno = this[_0x28ab2d(0x73d)][_0x28ab2d(0x7ef)][_0x28ab2d(0x8dc)](0xd);
                        continue;
                    case '8':
                        leveladcheck = 0x5;
                        continue;
                }
                break;
            }
        }
    }

    function _0x227f1d() {
        var _0xd45baf = _0x528510;
        loadFinish && _0x31cd64[_0xd45baf(0x746)](done2['visible'], ![]) && (done2['visible'] = !![], done2[_0xd45baf(0x67d)](0x0), game['scene']['scenes'][pageNo]['tweens']['add']({
            'targets': done2,
            'scaleX': 0x1,
            'scaleY': 0x1,
            'ease': _0x31cd64[_0xd45baf(0x6b1)],
            'duration': 0x1f4
        }), game[_0xd45baf(0x374)][_0xd45baf(0x237)][pageNo]['tweens'][_0xd45baf(0x85a)]({
            'targets': done2,
            'angle': -0x168,
            'ease': _0xd45baf(0x901),
            'duration': 0x1f4
        }));
    }
    larrow['on'](_0x528510(0x637), _0x5bab5f);

    function _0x5bab5f() {
        var _0x5a0110 = _0x528510;
        playsoundeffects(_0x31cd64[_0x5a0110(0x332)]);
        if (game[_0x31cd64[_0x5a0110(0x87c)](_0x31cd64[_0x5a0110(0x9df)], 0x8)][_0x5a0110(0xa6e)]) {
            var _0x405339 = _0x31cd64[_0x5a0110(0x5d4)]['split']('|'),
                _0x22836c = 0x0;
            while (!![]) {
                switch (_0x405339[_0x22836c++]) {
                    case '0':
                        for (i = 0x1; i <= 0x8; i++) {
                            game[_0x31cd64[_0x5a0110(0x81a)] + i][_0x5a0110(0xa6e)] = !![];
                        }
                        continue;
                    case '1':
                        if (_0x31cd64[_0x5a0110(0x709)](showad, 0x1))
                            for (i = 0x8; i >= 0x1; i--) {
                                var _0x5b920c = _0x31cd64['hCASW'][_0x5a0110(0xa4e)]('|'),
                                    _0x74fa79 = 0x0;
                                while (!![]) {
                                    switch (_0x5b920c[_0x74fa79++]) {
                                        case '0':
                                            _0x31cd64['axulx'](liparr[i], 0x1) && (game[_0x31cd64[_0x5a0110(0x1d4)](_0x31cd64[_0x5a0110(0x514)], i)]['visible'] = ![]);
                                            continue;
                                        case '1':
                                            eyeballarr[i] == 0x1 && (game[_0x31cd64[_0x5a0110(0x84d)]('level2eyeballvideo', i)][_0x5a0110(0xa6e)] = ![]);
                                            continue;
                                        case '2':
                                            _0x31cd64['dofuF'](stonearr[i], 0x1) && (game[_0x31cd64['LgxWD'](_0x31cd64[_0x5a0110(0x6c6)], i)][_0x5a0110(0xa6e)] = ![]);
                                            continue;
                                        case '3':
                                            _0x31cd64[_0x5a0110(0x6e2)](eyeshadowarr[i], 0x1) && (game[_0x31cd64[_0x5a0110(0x19b)](_0x31cd64[_0x5a0110(0x4a7)], i)][_0x5a0110(0xa6e)] = ![]);
                                            continue;
                                        case '4':
                                            _0x31cd64[_0x5a0110(0x9fe)](blusharr[i], 0x1) && (game[_0x31cd64[_0x5a0110(0x6eb)](_0x5a0110(0x341), i)]['visible'] = ![]);
                                            continue;
                                    }
                                    break;
                                }
                            }
                        continue;
                    case '2':
                        game[_0x31cd64[_0x5a0110(0x6ec)](_0x31cd64[_0x5a0110(0x6c7)], 0x2)][_0x5a0110(0x88f)]();
                        continue;
                    case '3':
                        for (i = 0x1; _0x31cd64[_0x5a0110(0x5e6)](i, 0x8); i++) {
                            game[_0x31cd64[_0x5a0110(0xad7)](_0x5a0110(0x22b), i)][_0x5a0110(0xa6e)] = ![], game[_0x31cd64[_0x5a0110(0x4c0)](_0x5a0110(0x842), i)][_0x5a0110(0xa6e)] = ![], game[_0x31cd64['QsEuE'](_0x31cd64[_0x5a0110(0x861)], i)]['visible'] = ![], game[_0x31cd64[_0x5a0110(0x2b0)](_0x31cd64[_0x5a0110(0x876)], i)]['visible'] = ![], game[_0x5a0110(0x276) + i][_0x5a0110(0xa6e)] = ![];
                        }
                        continue;
                    case '4':
                        level2text[_0x5a0110(0x254)](0x2);
                        continue;
                    case '5':
                        if (showad == 0x1)
                            for (i = 0x8; i >= 0x1; i--) {
                                eyeballarr[i] == 0x1 && (game[_0x31cd64['eLpZK'](_0x31cd64[_0x5a0110(0x691)], i)][_0x5a0110(0xa6e)] = !![]);
                            }
                        continue;
                    case '6':
                        for (i = 0x1; _0x31cd64['kHPxC'](i, 0x5); i++) {
                            game[_0x31cd64[_0x5a0110(0xa53)](_0x31cd64[_0x5a0110(0x6c7)], i)]['setInteractive']({
                                'pixelPerfect': !![],
                                'useHandCursor': !![]
                            });
                        }
                        continue;
                    case '7':
                        game[_0x31cd64[_0x5a0110(0x1a3)](_0x31cd64[_0x5a0110(0x6c7)], 0x2)][_0x5a0110(0x254)](0x1);
                        continue;
                    case '8':
                        for (i = 0x1; i <= 0x5; i++) {
                            game[_0x31cd64[_0x5a0110(0x6c7)] + i]['setFrame'](0x0);
                        }
                        continue;
                }
                break;
            }
        } else {
            if (game[_0x31cd64[_0x5a0110(0x1a3)](_0x31cd64[_0x5a0110(0x81a)], 0x1)]['visible']) {
                var _0x8ccfa3 = _0x31cd64[_0x5a0110(0x2e5)][_0x5a0110(0xa4e)]('|'),
                    _0x48bb86 = 0x0;
                while (!![]) {
                    switch (_0x8ccfa3[_0x48bb86++]) {
                        case '0':
                            for (i = 0x1; _0x31cd64['kHPxC'](i, 0x5); i++) {
                                game[_0x31cd64[_0x5a0110(0x4c0)](_0x31cd64[_0x5a0110(0x6c7)], i)]['setFrame'](0x0);
                            }
                            continue;
                        case '1':
                            for (i = 0x1; _0x31cd64[_0x5a0110(0x4df)](i, 0x5); i++) {
                                game[_0x31cd64['slIAH'](_0x31cd64[_0x5a0110(0x6c7)], i)][_0x5a0110(0xa74)]({
                                    'pixelPerfect': !![],
                                    'useHandCursor': !![]
                                });
                            }
                            continue;
                        case '2':
                            game[_0x31cd64[_0x5a0110(0x25c)](_0x31cd64[_0x5a0110(0x6c7)], 0x3)][_0x5a0110(0x88f)]();
                            continue;
                        case '3':
                            level2text[_0x5a0110(0x254)](0x3);
                            continue;
                        case '4':
                            game[_0x31cd64[_0x5a0110(0x5e8)](_0x31cd64[_0x5a0110(0x6c7)], 0x3)][_0x5a0110(0x254)](0x1);
                            continue;
                        case '5':
                            for (i = 0x1; _0x31cd64['kHPxC'](i, 0x8); i++) {
                                game[_0x31cd64['sXDdV'] + i][_0x5a0110(0xa6e)] = !![];
                            }
                            continue;
                        case '6':
                            for (i = 0x1; _0x31cd64[_0x5a0110(0x5e6)](i, 0x8); i++) {
                                var _0x51a653 = _0x5a0110(0x6e9)[_0x5a0110(0xa4e)]('|'),
                                    _0x126389 = 0x0;
                                while (!![]) {
                                    switch (_0x51a653[_0x126389++]) {
                                        case '0':
                                            game[_0x31cd64['pnBXa'](_0x31cd64[_0x5a0110(0x9bf)], i)]['visible'] = ![];
                                            continue;
                                        case '1':
                                            game[_0x31cd64[_0x5a0110(0x66f)](_0x31cd64[_0x5a0110(0x9df)], i)][_0x5a0110(0xa6e)] = ![];
                                            continue;
                                        case '2':
                                            game[_0x31cd64[_0x5a0110(0xad7)](_0x5a0110(0x263), i)][_0x5a0110(0xa6e)] = ![];
                                            continue;
                                        case '3':
                                            game[_0x31cd64[_0x5a0110(0x87c)](_0x31cd64[_0x5a0110(0x81a)], i)][_0x5a0110(0xa6e)] = ![];
                                            continue;
                                        case '4':
                                            game[_0x31cd64[_0x5a0110(0x7bb)](_0x5a0110(0xa4f), i)][_0x5a0110(0xa6e)] = ![];
                                            continue;
                                    }
                                    break;
                                }
                            }
                            continue;
                        case '7':
                            if (_0x31cd64['HPPqD'](showad, 0x1))
                                for (i = 0x8; _0x31cd64[_0x5a0110(0x3fe)](i, 0x1); i--) {
                                    var _0x12d4c1 = _0x31cd64[_0x5a0110(0x222)][_0x5a0110(0xa4e)]('|'),
                                        _0x44cb21 = 0x0;
                                    while (!![]) {
                                        switch (_0x12d4c1[_0x44cb21++]) {
                                            case '0':
                                                _0x31cd64[_0x5a0110(0x213)](liparr[i], 0x1) && (game[_0x31cd64['hCCKW'](_0x31cd64['wxVVC'], i)]['visible'] = ![]);
                                                continue;
                                            case '1':
                                                _0x31cd64[_0x5a0110(0x5c0)](stonearr[i], 0x1) && (game[_0x31cd64[_0x5a0110(0x2b0)](_0x31cd64['VHuOm'], i)][_0x5a0110(0xa6e)] = ![]);
                                                continue;
                                            case '2':
                                                eyeballarr[i] == 0x1 && (game[_0x31cd64[_0x5a0110(0x1a3)](_0x31cd64['whhrZ'], i)]['visible'] = ![]);
                                                continue;
                                            case '3':
                                                _0x31cd64[_0x5a0110(0x629)](blusharr[i], 0x1) && (game[_0x31cd64[_0x5a0110(0x4fb)] + i][_0x5a0110(0xa6e)] = ![]);
                                                continue;
                                            case '4':
                                                _0x31cd64[_0x5a0110(0x505)](eyeshadowarr[i], 0x1) && (game[_0x31cd64['VwVKr'](_0x31cd64[_0x5a0110(0x4a7)], i)][_0x5a0110(0xa6e)] = ![]);
                                                continue;
                                        }
                                        break;
                                    }
                                }
                            continue;
                        case '8':
                            if (_0x31cd64[_0x5a0110(0x865)](showad, 0x1))
                                for (i = 0x8; i >= 0x1; i--) {
                                    eyeshadowarr[i] == 0x1 && (game[_0x31cd64[_0x5a0110(0x3b9)](_0x31cd64[_0x5a0110(0x4a7)], i)][_0x5a0110(0xa6e)] = !![]);
                                }
                            continue;
                    }
                    break;
                }
            } else {
                if (game[_0x31cd64['CAbiR'](_0x31cd64[_0x5a0110(0x876)], 0x1)][_0x5a0110(0xa6e)]) {
                    level2text['setFrame'](0x4);
                    for (i = 0x1; _0x31cd64['rtVCm'](i, 0x5); i++) {
                        game[_0x31cd64['PUxGY'](_0x31cd64['SCHoV'], i)][_0x5a0110(0x254)](0x0);
                    }
                    for (i = 0x1; _0x31cd64[_0x5a0110(0x595)](i, 0x5); i++) {
                        game[_0x31cd64[_0x5a0110(0x748)](_0x31cd64[_0x5a0110(0x6c7)], i)][_0x5a0110(0xa74)]({
                            'pixelPerfect': !![],
                            'useHandCursor': !![]
                        });
                    }
                    game[_0x31cd64[_0x5a0110(0x191)](_0x31cd64['SCHoV'], 0x4)][_0x5a0110(0x88f)](), game[_0x31cd64[_0x5a0110(0x25c)](_0x31cd64[_0x5a0110(0x6c7)], 0x4)][_0x5a0110(0x254)](0x1);
                    for (i = 0x1; i <= 0x8; i++) {
                        game['level2stone' + i][_0x5a0110(0xa6e)] = ![], game[_0x31cd64[_0x5a0110(0x7a3)](_0x5a0110(0x842), i)]['visible'] = ![], game[_0x5a0110(0xa4f) + i][_0x5a0110(0xa6e)] = ![], game[_0x31cd64['CAbiR'](_0x31cd64[_0x5a0110(0x876)], i)][_0x5a0110(0xa6e)] = ![], game[_0x31cd64['mKrHP'](_0x31cd64[_0x5a0110(0x9bf)], i)][_0x5a0110(0xa6e)] = ![];
                    }
                    if (showad == 0x1)
                        for (i = 0x8; i >= 0x1; i--) {
                            var _0x3ea784 = _0x31cd64[_0x5a0110(0x334)][_0x5a0110(0xa4e)]('|'),
                                _0x24367b = 0x0;
                            while (!![]) {
                                switch (_0x3ea784[_0x24367b++]) {
                                    case '0':
                                        _0x31cd64['tDokW'](eyeshadowarr[i], 0x1) && (game[_0x31cd64[_0x5a0110(0x809)](_0x31cd64['lyiYS'], i)][_0x5a0110(0xa6e)] = ![]);
                                        continue;
                                    case '1':
                                        _0x31cd64[_0x5a0110(0x26b)](stonearr[i], 0x1) && (game[_0x31cd64['JQugd'](_0x31cd64[_0x5a0110(0x6c6)], i)][_0x5a0110(0xa6e)] = ![]);
                                        continue;
                                    case '2':
                                        blusharr[i] == 0x1 && (game[_0x31cd64['imLCi'](_0x31cd64[_0x5a0110(0x4fb)], i)][_0x5a0110(0xa6e)] = ![]);
                                        continue;
                                    case '3':
                                        _0x31cd64['lOQjg'](eyeballarr[i], 0x1) && (game[_0x31cd64['JeysJ'](_0x31cd64[_0x5a0110(0x691)], i)][_0x5a0110(0xa6e)] = ![]);
                                        continue;
                                    case '4':
                                        _0x31cd64[_0x5a0110(0xa61)](liparr[i], 0x1) && (game[_0x31cd64[_0x5a0110(0x7bb)](_0x31cd64['wxVVC'], i)][_0x5a0110(0xa6e)] = ![]);
                                        continue;
                                }
                                break;
                            }
                        }
                    for (i = 0x1; _0x31cd64['VGJVl'](i, 0x8); i++) {
                        game[_0x31cd64['wPudT'](_0x31cd64[_0x5a0110(0x861)], i)][_0x5a0110(0xa6e)] = !![];
                    }
                    if (showad == 0x1)
                        for (i = 0x8; _0x31cd64[_0x5a0110(0x955)](i, 0x1); i--) {
                            blusharr[i] == 0x1 && (game[_0x31cd64[_0x5a0110(0x2c6)](_0x31cd64['CKqJJ'], i)]['visible'] = !![]);
                        }
                } else {
                    if (game[_0x5a0110(0xa4f) + 0x1][_0x5a0110(0xa6e)]) {
                        level2text[_0x5a0110(0x254)](0x5);
                        for (i = 0x1; _0x31cd64['kHPxC'](i, 0x5); i++) {
                            game[_0x31cd64[_0x5a0110(0x809)]('level2cat', i)][_0x5a0110(0x254)](0x0);
                        }
                        for (i = 0x1; _0x31cd64[_0x5a0110(0x5e6)](i, 0x5); i++) {
                            game[_0x31cd64['SCHoV'] + i][_0x5a0110(0xa74)]({
                                'pixelPerfect': !![],
                                'useHandCursor': !![]
                            });
                        }
                        game[_0x31cd64[_0x5a0110(0xa0f)](_0x31cd64[_0x5a0110(0x6c7)], 0x5)][_0x5a0110(0x88f)](), game[_0x31cd64['mgcLN'](_0x31cd64[_0x5a0110(0x6c7)], 0x5)][_0x5a0110(0x254)](0x1);
                        for (i = 0x1; i <= 0x8; i++) {
                            var _0x3d85f3 = _0x31cd64[_0x5a0110(0x562)]['split']('|'),
                                _0x56e924 = 0x0;
                            while (!![]) {
                                switch (_0x3d85f3[_0x56e924++]) {
                                    case '0':
                                        game[_0x31cd64[_0x5a0110(0x7bb)](_0x5a0110(0x22b), i)][_0x5a0110(0xa6e)] = ![];
                                        continue;
                                    case '1':
                                        game[_0x31cd64[_0x5a0110(0x82e)](_0x31cd64['sXDdV'], i)][_0x5a0110(0xa6e)] = ![];
                                        continue;
                                    case '2':
                                        game[_0x31cd64[_0x5a0110(0x22c)](_0x5a0110(0x276), i)][_0x5a0110(0xa6e)] = ![];
                                        continue;
                                    case '3':
                                        game[_0x31cd64[_0x5a0110(0x485)](_0x31cd64[_0x5a0110(0x81a)], i)][_0x5a0110(0xa6e)] = ![];
                                        continue;
                                    case '4':
                                        game[_0x31cd64['JOFnO'](_0x31cd64[_0x5a0110(0x861)], i)][_0x5a0110(0xa6e)] = ![];
                                        continue;
                                }
                                break;
                            }
                        }
                        if (_0x31cd64[_0x5a0110(0x274)](showad, 0x1))
                            for (i = 0x8; i >= 0x1; i--) {
                                var _0x40f78f = _0x5a0110(0x1ab)[_0x5a0110(0xa4e)]('|'),
                                    _0x621b78 = 0x0;
                                while (!![]) {
                                    switch (_0x40f78f[_0x621b78++]) {
                                        case '0':
                                            eyeshadowarr[i] == 0x1 && (game[_0x31cd64['hCCKW'](_0x31cd64['lyiYS'], i)][_0x5a0110(0xa6e)] = ![]);
                                            continue;
                                        case '1':
                                            _0x31cd64[_0x5a0110(0x865)](blusharr[i], 0x1) && (game[_0x31cd64[_0x5a0110(0x589)](_0x31cd64[_0x5a0110(0x4fb)], i)][_0x5a0110(0xa6e)] = ![]);
                                            continue;
                                        case '2':
                                            stonearr[i] == 0x1 && (game[_0x31cd64['Pybeq'](_0x31cd64[_0x5a0110(0x6c6)], i)][_0x5a0110(0xa6e)] = ![]);
                                            continue;
                                        case '3':
                                            _0x31cd64[_0x5a0110(0xa8b)](eyeballarr[i], 0x1) && (game[_0x31cd64[_0x5a0110(0x8ab)](_0x31cd64[_0x5a0110(0x691)], i)][_0x5a0110(0xa6e)] = ![]);
                                            continue;
                                        case '4':
                                            _0x31cd64[_0x5a0110(0x380)](liparr[i], 0x1) && (game[_0x31cd64[_0x5a0110(0xa5b)](_0x31cd64[_0x5a0110(0x514)], i)]['visible'] = ![]);
                                            continue;
                                    }
                                    break;
                                }
                            }
                        for (i = 0x1; _0x31cd64[_0x5a0110(0x55b)](i, 0x8); i++) {
                            game[_0x31cd64[_0x5a0110(0xa86)](_0x31cd64[_0x5a0110(0x9bf)], i)][_0x5a0110(0xa6e)] = !![];
                        }
                        if (_0x31cd64['axulx'](showad, 0x1))
                            for (i = 0x8; i >= 0x1; i--) {
                                _0x31cd64[_0x5a0110(0xace)](liparr[i], 0x1) && (game[_0x31cd64[_0x5a0110(0x8c7)](_0x31cd64[_0x5a0110(0x514)], i)][_0x5a0110(0xa6e)] = !![]);
                            }
                    } else {
                        if (game[_0x31cd64[_0x5a0110(0x9bf)] + 0x1]['visible']) {
                            level2text[_0x5a0110(0x254)](0x1);
                            for (i = 0x1; i <= 0x5; i++) {
                                game[_0x31cd64[_0x5a0110(0x39d)](_0x31cd64[_0x5a0110(0x6c7)], i)][_0x5a0110(0x254)](0x0);
                            }
                            for (i = 0x1; _0x31cd64['GWmTS'](i, 0x5); i++) {
                                game[_0x31cd64[_0x5a0110(0x6c7)] + i]['setInteractive']({
                                    'pixelPerfect': !![],
                                    'useHandCursor': !![]
                                });
                            }
                            game[_0x31cd64[_0x5a0110(0x6c7)] + 0x1]['disableInteractive'](), game[_0x31cd64[_0x5a0110(0x87f)](_0x31cd64[_0x5a0110(0x6c7)], 0x1)][_0x5a0110(0x254)](0x1);
                            for (i = 0x1; _0x31cd64[_0x5a0110(0x55b)](i, 0x8); i++) {
                                game[_0x31cd64[_0x5a0110(0x9df)] + i][_0x5a0110(0xa6e)] = ![], game[_0x31cd64['sGTNM'](_0x31cd64['lkuIA'], i)][_0x5a0110(0xa6e)] = ![], game[_0x5a0110(0xa4f) + i][_0x5a0110(0xa6e)] = ![], game[_0x31cd64[_0x5a0110(0x876)] + i][_0x5a0110(0xa6e)] = ![], game[_0x31cd64['RiErb'](_0x31cd64[_0x5a0110(0x9bf)], i)]['visible'] = ![];
                            }
                            if (_0x31cd64[_0x5a0110(0x865)](showad, 0x1))
                                for (i = 0x8; _0x31cd64[_0x5a0110(0x333)](i, 0x1); i--) {
                                    var _0x23e64d = _0x31cd64['UIyUz'][_0x5a0110(0xa4e)]('|'),
                                        _0x34d391 = 0x0;
                                    while (!![]) {
                                        switch (_0x23e64d[_0x34d391++]) {
                                            case '0':
                                                stonearr[i] == 0x1 && (game[_0x31cd64[_0x5a0110(0x191)](_0x31cd64[_0x5a0110(0x6c6)], i)][_0x5a0110(0xa6e)] = ![]);
                                                continue;
                                            case '1':
                                                _0x31cd64[_0x5a0110(0x631)](blusharr[i], 0x1) && (game[_0x31cd64[_0x5a0110(0x4fb)] + i][_0x5a0110(0xa6e)] = ![]);
                                                continue;
                                            case '2':
                                                _0x31cd64['mkNdB'](liparr[i], 0x1) && (game[_0x31cd64[_0x5a0110(0x87f)](_0x31cd64[_0x5a0110(0x514)], i)][_0x5a0110(0xa6e)] = ![]);
                                                continue;
                                            case '3':
                                                eyeshadowarr[i] == 0x1 && (game[_0x31cd64[_0x5a0110(0x4a7)] + i][_0x5a0110(0xa6e)] = ![]);
                                                continue;
                                            case '4':
                                                _0x31cd64[_0x5a0110(0x30a)](eyeballarr[i], 0x1) && (game[_0x31cd64[_0x5a0110(0x8ab)](_0x31cd64[_0x5a0110(0x691)], i)][_0x5a0110(0xa6e)] = ![]);
                                                continue;
                                        }
                                        break;
                                    }
                                }
                            for (i = 0x1; _0x31cd64[_0x5a0110(0xa18)](i, 0x8); i++) {
                                game[_0x31cd64['YQfxO'](_0x31cd64[_0x5a0110(0x9df)], i)]['visible'] = !![];
                            }
                            if (showad == 0x1)
                                for (i = 0x8; _0x31cd64[_0x5a0110(0x543)](i, 0x1); i--) {
                                    _0x31cd64[_0x5a0110(0x2aa)](stonearr[i], 0x1) && (game[_0x31cd64[_0x5a0110(0x6c6)] + i][_0x5a0110(0xa6e)] = !![]);
                                }
                        }
                    }
                }
            }
        }
        _0x31cd64['RAGSp'](_0xa8ba46);
    }
    rarrow['on'](_0x31cd64[_0x528510(0x77a)], _0x11f6e6);

    function _0x11f6e6() {
        var _0x4a1704 = _0x528510;
        _0x31cd64[_0x4a1704(0x34b)](playsoundeffects, _0x31cd64[_0x4a1704(0x332)]);
        if (game[_0x31cd64[_0x4a1704(0x87c)](_0x31cd64[_0x4a1704(0x9bf)], 0x1)]['visible']) {
            level2text[_0x4a1704(0x254)](0x4);
            for (i = 0x1; _0x31cd64[_0x4a1704(0x453)](i, 0x5); i++) {
                game[_0x31cd64[_0x4a1704(0x589)](_0x4a1704(0x86d), i)][_0x4a1704(0x254)](0x0);
            }
            for (i = 0x1; _0x31cd64[_0x4a1704(0x671)](i, 0x5); i++) {
                game[_0x31cd64['HDqVf'](_0x4a1704(0x86d), i)][_0x4a1704(0xa74)]({
                    'pixelPerfect': !![],
                    'useHandCursor': !![]
                });
            }
            game[_0x4a1704(0x86d) + 0x4]['disableInteractive'](), game[_0x31cd64[_0x4a1704(0x849)](_0x4a1704(0x86d), 0x4)]['setFrame'](0x1);
            for (i = 0x1; i <= 0x8; i++) {
                game['level2stone' + i]['visible'] = ![], game[_0x31cd64[_0x4a1704(0x81a)] + i][_0x4a1704(0xa6e)] = ![], game[_0x31cd64[_0x4a1704(0x39d)](_0x4a1704(0xa4f), i)]['visible'] = ![], game[_0x31cd64[_0x4a1704(0x589)](_0x31cd64[_0x4a1704(0x876)], i)][_0x4a1704(0xa6e)] = ![], game[_0x31cd64[_0x4a1704(0x5e8)](_0x31cd64[_0x4a1704(0x9bf)], i)]['visible'] = ![];
            }
            if (_0x31cd64[_0x4a1704(0x2fa)](showad, 0x1))
                for (i = 0x8; i >= 0x1; i--) {
                    var _0x1aa9ac = _0x31cd64[_0x4a1704(0x668)]['split']('|'),
                        _0x1b5092 = 0x0;
                    while (!![]) {
                        switch (_0x1aa9ac[_0x1b5092++]) {
                            case '0':
                                _0x31cd64[_0x4a1704(0x6e2)](eyeballarr[i], 0x1) && (game[_0x31cd64[_0x4a1704(0x392)](_0x31cd64[_0x4a1704(0x691)], i)][_0x4a1704(0xa6e)] = ![]);
                                continue;
                            case '1':
                                eyeshadowarr[i] == 0x1 && (game[_0x31cd64['eLpZK'](_0x4a1704(0x733), i)][_0x4a1704(0xa6e)] = ![]);
                                continue;
                            case '2':
                                _0x31cd64[_0x4a1704(0x243)](blusharr[i], 0x1) && (game[_0x31cd64['CKqJJ'] + i][_0x4a1704(0xa6e)] = ![]);
                                continue;
                            case '3':
                                liparr[i] == 0x1 && (game[_0x31cd64[_0x4a1704(0x82e)](_0x31cd64[_0x4a1704(0x514)], i)][_0x4a1704(0xa6e)] = ![]);
                                continue;
                            case '4':
                                _0x31cd64['Axrex'](stonearr[i], 0x1) && (game[_0x31cd64[_0x4a1704(0x5e8)](_0x4a1704(0x536), i)][_0x4a1704(0xa6e)] = ![]);
                                continue;
                        }
                        break;
                    }
                }
            for (i = 0x1; _0x31cd64['oOdKn'](i, 0x8); i++) {
                game[_0x31cd64['bmIkr'](_0x31cd64[_0x4a1704(0x861)], i)][_0x4a1704(0xa6e)] = !![];
            }
            if (showad == 0x1)
                for (i = 0x8; i >= 0x1; i--) {
                    _0x31cd64[_0x4a1704(0x52f)](blusharr[i], 0x1) && (game[_0x31cd64[_0x4a1704(0x4fb)] + i]['visible'] = !![]);
                }
        } else {
            if (game['level2blush' + 0x1][_0x4a1704(0xa6e)]) {
                level2text[_0x4a1704(0x254)](0x3);
                for (i = 0x1; _0x31cd64[_0x4a1704(0x1e6)](i, 0x5); i++) {
                    game[_0x31cd64[_0x4a1704(0x84b)](_0x31cd64[_0x4a1704(0x6c7)], i)][_0x4a1704(0x254)](0x0);
                }
                for (i = 0x1; _0x31cd64[_0x4a1704(0x7ad)](i, 0x5); i++) {
                    game[_0x31cd64[_0x4a1704(0x346)](_0x31cd64[_0x4a1704(0x6c7)], i)]['setInteractive']({
                        'pixelPerfect': !![],
                        'useHandCursor': !![]
                    });
                }
                game[_0x31cd64['SCHoV'] + 0x3][_0x4a1704(0x88f)](), game[_0x31cd64[_0x4a1704(0xa5b)](_0x31cd64[_0x4a1704(0x6c7)], 0x3)][_0x4a1704(0x254)](0x1);
                for (i = 0x1; i <= 0x8; i++) {
                    var _0x2b9d97 = _0x31cd64[_0x4a1704(0x2bc)][_0x4a1704(0xa4e)]('|'),
                        _0x148e5e = 0x0;
                    while (!![]) {
                        switch (_0x2b9d97[_0x148e5e++]) {
                            case '0':
                                game[_0x31cd64[_0x4a1704(0x68c)](_0x31cd64['sXDdV'], i)]['visible'] = ![];
                                continue;
                            case '1':
                                game[_0x4a1704(0x276) + i][_0x4a1704(0xa6e)] = ![];
                                continue;
                            case '2':
                                game[_0x31cd64[_0x4a1704(0x81a)] + i]['visible'] = ![];
                                continue;
                            case '3':
                                game[_0x31cd64[_0x4a1704(0x7bb)](_0x31cd64[_0x4a1704(0x9df)], i)][_0x4a1704(0xa6e)] = ![];
                                continue;
                            case '4':
                                game[_0x31cd64[_0x4a1704(0x26e)](_0x31cd64[_0x4a1704(0x861)], i)][_0x4a1704(0xa6e)] = ![];
                                continue;
                        }
                        break;
                    }
                }
                if (_0x31cd64[_0x4a1704(0x4bd)](showad, 0x1))
                    for (i = 0x8; _0x31cd64[_0x4a1704(0x422)](i, 0x1); i--) {
                        _0x31cd64[_0x4a1704(0x380)](eyeballarr[i], 0x1) && (game[_0x31cd64[_0x4a1704(0x691)] + i]['visible'] = ![]), _0x31cd64[_0x4a1704(0x633)](stonearr[i], 0x1) && (game[_0x31cd64[_0x4a1704(0x6c6)] + i][_0x4a1704(0xa6e)] = ![]), eyeshadowarr[i] == 0x1 && (game[_0x31cd64[_0x4a1704(0x392)](_0x31cd64['lyiYS'], i)][_0x4a1704(0xa6e)] = ![]), _0x31cd64[_0x4a1704(0x1fd)](blusharr[i], 0x1) && (game[_0x31cd64[_0x4a1704(0x86a)](_0x31cd64[_0x4a1704(0x4fb)], i)]['visible'] = ![]), _0x31cd64['hoYck'](liparr[i], 0x1) && (game[_0x31cd64['rRSFg'](_0x31cd64[_0x4a1704(0x514)], i)][_0x4a1704(0xa6e)] = ![]);
                    }
                for (i = 0x1; i <= 0x8; i++) {
                    game[_0x31cd64[_0x4a1704(0x25a)](_0x31cd64['sXDdV'], i)][_0x4a1704(0xa6e)] = !![];
                }
                if (_0x31cd64[_0x4a1704(0x2aa)](showad, 0x1))
                    for (i = 0x8; _0x31cd64[_0x4a1704(0x333)](i, 0x1); i--) {
                        _0x31cd64[_0x4a1704(0x45d)](eyeshadowarr[i], 0x1) && (game[_0x31cd64[_0x4a1704(0x4a7)] + i][_0x4a1704(0xa6e)] = !![]);
                    }
            } else {
                if (game[_0x31cd64[_0x4a1704(0x81d)]('level2eyeshadow', 0x1)][_0x4a1704(0xa6e)]) {
                    level2text[_0x4a1704(0x254)](0x2);
                    for (i = 0x1; _0x31cd64[_0x4a1704(0x5b4)](i, 0x5); i++) {
                        game[_0x31cd64[_0x4a1704(0x1e7)](_0x31cd64['SCHoV'], i)][_0x4a1704(0x254)](0x0);
                    }
                    for (i = 0x1; i <= 0x5; i++) {
                        game[_0x31cd64[_0x4a1704(0x589)](_0x31cd64[_0x4a1704(0x6c7)], i)][_0x4a1704(0xa74)]({
                            'pixelPerfect': !![],
                            'useHandCursor': !![]
                        });
                    }
                    game[_0x31cd64[_0x4a1704(0x2b0)](_0x31cd64[_0x4a1704(0x6c7)], 0x2)][_0x4a1704(0x88f)](), game[_0x31cd64[_0x4a1704(0x246)](_0x31cd64['SCHoV'], 0x2)][_0x4a1704(0x254)](0x1);
                    for (i = 0x1; _0x31cd64['pewNp'](i, 0x8); i++) {
                        game[_0x4a1704(0x22b) + i][_0x4a1704(0xa6e)] = ![], game[_0x31cd64[_0x4a1704(0x66a)](_0x31cd64[_0x4a1704(0x81a)], i)][_0x4a1704(0xa6e)] = ![], game[_0x31cd64[_0x4a1704(0x1fe)](_0x31cd64[_0x4a1704(0x861)], i)]['visible'] = ![], game[_0x31cd64[_0x4a1704(0x809)](_0x31cd64[_0x4a1704(0x876)], i)][_0x4a1704(0xa6e)] = ![], game[_0x31cd64[_0x4a1704(0x2c3)](_0x31cd64['urakO'], i)][_0x4a1704(0xa6e)] = ![];
                    }
                    if (_0x31cd64[_0x4a1704(0x306)](showad, 0x1))
                        for (i = 0x8; _0x31cd64[_0x4a1704(0x333)](i, 0x1); i--) {
                            var _0x550d26 = _0x31cd64[_0x4a1704(0x785)][_0x4a1704(0xa4e)]('|'),
                                _0x359e8f = 0x0;
                            while (!![]) {
                                switch (_0x550d26[_0x359e8f++]) {
                                    case '0':
                                        _0x31cd64['eoKpb'](eyeballarr[i], 0x1) && (game[_0x31cd64[_0x4a1704(0x43b)]('level2eyeballvideo', i)]['visible'] = ![]);
                                        continue;
                                    case '1':
                                        _0x31cd64[_0x4a1704(0x380)](eyeshadowarr[i], 0x1) && (game[_0x31cd64[_0x4a1704(0x4a7)] + i][_0x4a1704(0xa6e)] = ![]);
                                        continue;
                                    case '2':
                                        _0x31cd64['WDmRr'](stonearr[i], 0x1) && (game[_0x31cd64[_0x4a1704(0x1a3)](_0x31cd64[_0x4a1704(0x6c6)], i)][_0x4a1704(0xa6e)] = ![]);
                                        continue;
                                    case '3':
                                        _0x31cd64['JvSKW'](blusharr[i], 0x1) && (game[_0x31cd64[_0x4a1704(0x4fb)] + i][_0x4a1704(0xa6e)] = ![]);
                                        continue;
                                    case '4':
                                        _0x31cd64[_0x4a1704(0x76e)](liparr[i], 0x1) && (game[_0x31cd64[_0x4a1704(0x514)] + i][_0x4a1704(0xa6e)] = ![]);
                                        continue;
                                }
                                break;
                            }
                        }
                    for (i = 0x1; _0x31cd64[_0x4a1704(0x8fb)](i, 0x8); i++) {
                        game[_0x4a1704(0x842) + i]['visible'] = !![];
                    }
                    if (_0x31cd64[_0x4a1704(0xa61)](showad, 0x1))
                        for (i = 0x8; _0x31cd64[_0x4a1704(0x390)](i, 0x1); i--) {
                            _0x31cd64[_0x4a1704(0x243)](eyeballarr[i], 0x1) && (game[_0x31cd64[_0x4a1704(0x691)] + i][_0x4a1704(0xa6e)] = !![]);
                        }
                } else {
                    if (game[_0x31cd64['VuRIZ'](_0x31cd64[_0x4a1704(0x81a)], 0x1)][_0x4a1704(0xa6e)]) {
                        level2text['setFrame'](0x1);
                        for (i = 0x1; i <= 0x5; i++) {
                            game[_0x31cd64['KzXqY'](_0x4a1704(0x86d), i)][_0x4a1704(0x254)](0x0);
                        }
                        for (i = 0x1; _0x31cd64[_0x4a1704(0x81e)](i, 0x5); i++) {
                            game[_0x31cd64['SCHoV'] + i]['setInteractive']({
                                'pixelPerfect': !![],
                                'useHandCursor': !![]
                            });
                        }
                        game[_0x31cd64[_0x4a1704(0x6c7)] + 0x1]['disableInteractive'](), game[_0x31cd64[_0x4a1704(0x67f)](_0x31cd64[_0x4a1704(0x6c7)], 0x1)][_0x4a1704(0x254)](0x1);
                        for (i = 0x1; _0x31cd64[_0x4a1704(0x486)](i, 0x8); i++) {
                            var _0x5907af = _0x31cd64[_0x4a1704(0x674)]['split']('|'),
                                _0x3d3bbc = 0x0;
                            while (!![]) {
                                switch (_0x5907af[_0x3d3bbc++]) {
                                    case '0':
                                        game[_0x31cd64[_0x4a1704(0x9d3)](_0x31cd64[_0x4a1704(0x9df)], i)][_0x4a1704(0xa6e)] = ![];
                                        continue;
                                    case '1':
                                        game[_0x4a1704(0xa4f) + i][_0x4a1704(0xa6e)] = ![];
                                        continue;
                                    case '2':
                                        game[_0x31cd64[_0x4a1704(0x59b)](_0x4a1704(0x276), i)][_0x4a1704(0xa6e)] = ![];
                                        continue;
                                    case '3':
                                        game[_0x31cd64['zaDQO'](_0x31cd64[_0x4a1704(0x81a)], i)][_0x4a1704(0xa6e)] = ![];
                                        continue;
                                    case '4':
                                        game[_0x31cd64[_0x4a1704(0x876)] + i][_0x4a1704(0xa6e)] = ![];
                                        continue;
                                }
                                break;
                            }
                        }
                        if (showad == 0x1)
                            for (i = 0x8; _0x31cd64['OeOOe'](i, 0x1); i--) {
                                var _0xb6403e = _0x4a1704(0x2b4)['split']('|'),
                                    _0x41b153 = 0x0;
                                while (!![]) {
                                    switch (_0xb6403e[_0x41b153++]) {
                                        case '0':
                                            _0x31cd64['Rkfzk'](eyeshadowarr[i], 0x1) && (game[_0x31cd64['ZSCTn']('level2eyeshadowvideo', i)][_0x4a1704(0xa6e)] = ![]);
                                            continue;
                                        case '1':
                                            _0x31cd64['BGNbc'](blusharr[i], 0x1) && (game[_0x31cd64[_0x4a1704(0x64c)](_0x31cd64[_0x4a1704(0x4fb)], i)][_0x4a1704(0xa6e)] = ![]);
                                            continue;
                                        case '2':
                                            eyeballarr[i] == 0x1 && (game['level2eyeballvideo' + i][_0x4a1704(0xa6e)] = ![]);
                                            continue;
                                        case '3':
                                            _0x31cd64[_0x4a1704(0xad0)](liparr[i], 0x1) && (game[_0x31cd64[_0x4a1704(0xa62)](_0x31cd64['wxVVC'], i)]['visible'] = ![]);
                                            continue;
                                        case '4':
                                            _0x31cd64[_0x4a1704(0x770)](stonearr[i], 0x1) && (game[_0x31cd64[_0x4a1704(0x497)](_0x31cd64[_0x4a1704(0x6c6)], i)][_0x4a1704(0xa6e)] = ![]);
                                            continue;
                                    }
                                    break;
                                }
                            }
                        for (i = 0x1; i <= 0x8; i++) {
                            game[_0x31cd64[_0x4a1704(0x485)](_0x31cd64[_0x4a1704(0x9df)], i)][_0x4a1704(0xa6e)] = !![];
                        }
                        if (showad == 0x1)
                            for (i = 0x8; _0x31cd64[_0x4a1704(0x846)](i, 0x1); i--) {
                                _0x31cd64[_0x4a1704(0x1fd)](stonearr[i], 0x1) && (game[_0x4a1704(0x536) + i]['visible'] = !![]);
                            }
                    } else {
                        if (game[_0x31cd64['aPuDU'] + 0x1]['visible']) {
                            var _0x4fb852 = _0x31cd64[_0x4a1704(0x781)][_0x4a1704(0xa4e)]('|'),
                                _0xe9ccf4 = 0x0;
                            while (!![]) {
                                switch (_0x4fb852[_0xe9ccf4++]) {
                                    case '0':
                                        if (showad == 0x1)
                                            for (i = 0x8; i >= 0x1; i--) {
                                                var _0x48f23f = _0x31cd64[_0x4a1704(0x9ad)]['split']('|'),
                                                    _0x35bafc = 0x0;
                                                while (!![]) {
                                                    switch (_0x48f23f[_0x35bafc++]) {
                                                        case '0':
                                                            _0x31cd64[_0x4a1704(0x626)](eyeballarr[i], 0x1) && (game[_0x31cd64[_0x4a1704(0x6c2)](_0x31cd64['whhrZ'], i)]['visible'] = ![]);
                                                            continue;
                                                        case '1':
                                                            _0x31cd64[_0x4a1704(0x9fe)](eyeshadowarr[i], 0x1) && (game[_0x31cd64['lyiYS'] + i][_0x4a1704(0xa6e)] = ![]);
                                                            continue;
                                                        case '2':
                                                            _0x31cd64[_0x4a1704(0x213)](blusharr[i], 0x1) && (game[_0x31cd64[_0x4a1704(0xa0f)]('level2blushvideo', i)]['visible'] = ![]);
                                                            continue;
                                                        case '3':
                                                            stonearr[i] == 0x1 && (game[_0x31cd64[_0x4a1704(0x6c2)](_0x4a1704(0x536), i)][_0x4a1704(0xa6e)] = ![]);
                                                            continue;
                                                        case '4':
                                                            _0x31cd64['pzWvi'](liparr[i], 0x1) && (game[_0x31cd64[_0x4a1704(0x5d0)](_0x4a1704(0x8b1), i)]['visible'] = ![]);
                                                            continue;
                                                    }
                                                    break;
                                                }
                                            }
                                        continue;
                                    case '1':
                                        game[_0x31cd64[_0x4a1704(0x252)](_0x4a1704(0x86d), 0x5)]['disableInteractive']();
                                        continue;
                                    case '2':
                                        for (i = 0x1; _0x31cd64['HNpKO'](i, 0x5); i++) {
                                            game[_0x31cd64['mvuAF'](_0x31cd64[_0x4a1704(0x6c7)], i)][_0x4a1704(0x254)](0x0);
                                        }
                                        continue;
                                    case '3':
                                        game[_0x31cd64['TxAMP'](_0x31cd64[_0x4a1704(0x6c7)], 0x5)]['setFrame'](0x1);
                                        continue;
                                    case '4':
                                        if (_0x31cd64[_0x4a1704(0x30a)](showad, 0x1))
                                            for (i = 0x8; _0x31cd64[_0x4a1704(0x597)](i, 0x1); i--) {
                                                _0x31cd64['aLWAu'](liparr[i], 0x1) && (game[_0x31cd64[_0x4a1704(0x66a)](_0x31cd64[_0x4a1704(0x514)], i)]['visible'] = !![]);
                                            }
                                        continue;
                                    case '5':
                                        for (i = 0x1; _0x31cd64[_0x4a1704(0x291)](i, 0x8); i++) {
                                            var _0x2a6ad1 = _0x31cd64[_0x4a1704(0x6c3)][_0x4a1704(0xa4e)]('|'),
                                                _0x29c125 = 0x0;
                                            while (!![]) {
                                                switch (_0x2a6ad1[_0x29c125++]) {
                                                    case '0':
                                                        game[_0x31cd64[_0x4a1704(0x4e3)](_0x31cd64[_0x4a1704(0x9bf)], i)][_0x4a1704(0xa6e)] = ![];
                                                        continue;
                                                    case '1':
                                                        game[_0x31cd64['slIAH'](_0x31cd64[_0x4a1704(0x81a)], i)]['visible'] = ![];
                                                        continue;
                                                    case '2':
                                                        game[_0x31cd64[_0x4a1704(0x346)](_0x31cd64['KfmfF'], i)]['visible'] = ![];
                                                        continue;
                                                    case '3':
                                                        game[_0x31cd64[_0x4a1704(0x876)] + i][_0x4a1704(0xa6e)] = ![];
                                                        continue;
                                                    case '4':
                                                        game[_0x31cd64[_0x4a1704(0x995)](_0x31cd64['aPuDU'], i)][_0x4a1704(0xa6e)] = ![];
                                                        continue;
                                                }
                                                break;
                                            }
                                        }
                                        continue;
                                    case '6':
                                        for (i = 0x1; _0x31cd64[_0x4a1704(0x33d)](i, 0x8); i++) {
                                            game[_0x31cd64[_0x4a1704(0x5e5)](_0x4a1704(0x276), i)][_0x4a1704(0xa6e)] = !![];
                                        }
                                        continue;
                                    case '7':
                                        for (i = 0x1; _0x31cd64[_0x4a1704(0x84f)](i, 0x5); i++) {
                                            game[_0x31cd64[_0x4a1704(0x8c3)](_0x31cd64['SCHoV'], i)]['setInteractive']({
                                                'pixelPerfect': !![],
                                                'useHandCursor': !![]
                                            });
                                        }
                                        continue;
                                    case '8':
                                        level2text[_0x4a1704(0x254)](0x5);
                                        continue;
                                }
                                break;
                            }
                        }
                    }
                }
            }
        }
        _0x31cd64[_0x4a1704(0x9be)](_0xa8ba46);
    }
    for (i = 0x5; _0x31cd64['yMCCV'](i, 0x1); i--) {
        game[_0x31cd64['gXyYt'](_0x528510(0x86d), i)]['on']('pointerover', _0x52451b), game[_0x31cd64[_0x528510(0x42e)](_0x31cd64[_0x528510(0x6c7)], i)]['on'](_0x31cd64[_0x528510(0x2d0)], _0x16ff4d), game[_0x31cd64['pSScC'](_0x31cd64['SCHoV'], i)]['on'](_0x31cd64[_0x528510(0x77a)], _0xcdb312);
    }

    function _0x52451b(_0x4d5c45) {
        var _0x571474 = _0x528510;
        this[_0x571474(0x67d)](1.05);
    }

    function _0x16ff4d(_0xc05e1) {
        var _0x454285 = _0x528510;
        this[_0x454285(0x67d)](0x1);
    }

    function _0xcdb312(_0x4ab386) {
        var _0x5e2951 = _0x528510,
            _0x26d169 = _0x31cd64['MEmHI'][_0x5e2951(0xa4e)]('|'),
            _0x5b6585 = 0x0;
        while (!![]) {
            switch (_0x26d169[_0x5b6585++]) {
                case '0':
                    rarrow[_0x5e2951(0xa6e)] = ![];
                    continue;
                case '1':
                    sno = this[_0x5e2951(0x73d)][_0x5e2951(0x7ef)]['substr'](0x9);
                    continue;
                case '2':
                    _0xa8ba46();
                    continue;
                case '3':
                    _0x31cd64[_0x5e2951(0x34b)](playsoundeffects, _0x5e2951(0x51a));
                    continue;
                case '4':
                    if (_0x31cd64[_0x5e2951(0x9ec)](parseInt(sno), 0x1)) {
                        var _0x46f162 = _0x5e2951(0x688)[_0x5e2951(0xa4e)]('|'),
                            _0x94e85e = 0x0;
                        while (!![]) {
                            switch (_0x46f162[_0x94e85e++]) {
                                case '0':
                                    for (i = 0x5; _0x31cd64['sYQAl'](i, 0x1); i--) {
                                        game[_0x31cd64[_0x5e2951(0x65b)](_0x5e2951(0x86d), i)]['setInteractive']({
                                            'pixelPerfect': !![],
                                            'useHandCursor': !![]
                                        });
                                    }
                                    continue;
                                case '1':
                                    game[_0x31cd64[_0x5e2951(0x85f)](_0x31cd64[_0x5e2951(0x6c7)], 0x1)][_0x5e2951(0x254)](0x1);
                                    continue;
                                case '2':
                                    this[_0x5e2951(0x88f)]();
                                    continue;
                                case '3':
                                    level2text['setFrame'](0x1);
                                    continue;
                                case '4':
                                    rarrow[_0x5e2951(0xa6e)] = !![];
                                    continue;
                                case '5':
                                    if (showad == 0x1)
                                        for (i = 0x8; _0x31cd64[_0x5e2951(0x9bd)](i, 0x1); i--) {
                                            var _0x59cfba = _0x31cd64['YEcVe'][_0x5e2951(0xa4e)]('|'),
                                                _0x37d4f8 = 0x0;
                                            while (!![]) {
                                                switch (_0x59cfba[_0x37d4f8++]) {
                                                    case '0':
                                                        eyeballarr[i] == 0x1 && (game[_0x31cd64[_0x5e2951(0x6f9)](_0x31cd64['whhrZ'], i)][_0x5e2951(0xa6e)] = ![]);
                                                        continue;
                                                    case '1':
                                                        _0x31cd64[_0x5e2951(0xa33)](eyeshadowarr[i], 0x1) && (game[_0x31cd64[_0x5e2951(0x44c)](_0x31cd64[_0x5e2951(0x4a7)], i)][_0x5e2951(0xa6e)] = ![]);
                                                        continue;
                                                    case '2':
                                                        _0x31cd64[_0x5e2951(0x9fe)](liparr[i], 0x1) && (game[_0x31cd64[_0x5e2951(0x5da)](_0x31cd64[_0x5e2951(0x514)], i)][_0x5e2951(0xa6e)] = ![]);
                                                        continue;
                                                    case '3':
                                                        stonearr[i] == 0x1 && (game[_0x5e2951(0x536) + i][_0x5e2951(0xa6e)] = ![]);
                                                        continue;
                                                    case '4':
                                                        _0x31cd64[_0x5e2951(0x9ee)](blusharr[i], 0x1) && (game[_0x31cd64[_0x5e2951(0x599)](_0x31cd64[_0x5e2951(0x4fb)], i)]['visible'] = ![]);
                                                        continue;
                                                }
                                                break;
                                            }
                                        }
                                    continue;
                                case '6':
                                    larrow[_0x5e2951(0xa6e)] = !![];
                                    continue;
                                case '7':
                                    if (_0x31cd64[_0x5e2951(0x53a)](showad, 0x1))
                                        for (i = 0x8; _0x31cd64['ATsop'](i, 0x1); i--) {
                                            _0x31cd64['hmgZV'](stonearr[i], 0x1) && (game[_0x31cd64[_0x5e2951(0x7a3)](_0x31cd64['VHuOm'], i)][_0x5e2951(0xa6e)] = !![]);
                                        }
                                    continue;
                                case '8':
                                    for (i = 0x1; i <= 0x8; i++) {
                                        var _0x102c78 = _0x31cd64[_0x5e2951(0x225)]['split']('|'),
                                            _0x3db7b4 = 0x0;
                                        while (!![]) {
                                            switch (_0x102c78[_0x3db7b4++]) {
                                                case '0':
                                                    game[_0x31cd64[_0x5e2951(0x1e7)](_0x31cd64[_0x5e2951(0x9bf)], i)]['visible'] = ![];
                                                    continue;
                                                case '1':
                                                    game[_0x31cd64['HnmMO'](_0x31cd64[_0x5e2951(0x81a)], i)][_0x5e2951(0xa6e)] = ![];
                                                    continue;
                                                case '2':
                                                    game[_0x31cd64['MjhKO'](_0x31cd64['sXDdV'], i)][_0x5e2951(0xa6e)] = ![];
                                                    continue;
                                                case '3':
                                                    game[_0x31cd64['JzgEw'](_0x31cd64[_0x5e2951(0x861)], i)][_0x5e2951(0xa6e)] = ![];
                                                    continue;
                                                case '4':
                                                    game[_0x31cd64[_0x5e2951(0x2bd)](_0x5e2951(0x22b), i)][_0x5e2951(0xa6e)] = ![];
                                                    continue;
                                            }
                                            break;
                                        }
                                    }
                                    continue;
                                case '9':
                                    for (i = 0x1; _0x31cd64[_0x5e2951(0x4df)](i, 0x8); i++) {
                                        game[_0x31cd64[_0x5e2951(0x85f)](_0x31cd64[_0x5e2951(0x9df)], i)]['visible'] = !![];
                                    }
                                    continue;
                            }
                            break;
                        }
                    } else {
                        if (_0x31cd64[_0x5e2951(0x806)](parseInt, sno) == 0x2) {
                            var _0x69300b = _0x31cd64[_0x5e2951(0x230)][_0x5e2951(0xa4e)]('|'),
                                _0x4ad0cf = 0x0;
                            while (!![]) {
                                switch (_0x69300b[_0x4ad0cf++]) {
                                    case '0':
                                        for (i = 0x5; _0x31cd64[_0x5e2951(0x707)](i, 0x1); i--) {
                                            game[_0x31cd64['XmCnR'](_0x31cd64[_0x5e2951(0x6c7)], i)]['setInteractive']({
                                                'pixelPerfect': !![],
                                                'useHandCursor': !![]
                                            });
                                        }
                                        continue;
                                    case '1':
                                        if (_0x31cd64[_0x5e2951(0x243)](showad, 0x1))
                                            for (i = 0x8; _0x31cd64[_0x5e2951(0x333)](i, 0x1); i--) {
                                                var _0x5bca99 = _0x31cd64['Lqzul'][_0x5e2951(0xa4e)]('|'),
                                                    _0x3bff9e = 0x0;
                                                while (!![]) {
                                                    switch (_0x5bca99[_0x3bff9e++]) {
                                                        case '0':
                                                            blusharr[i] == 0x1 && (game[_0x31cd64['ZUlIz'](_0x31cd64[_0x5e2951(0x4fb)], i)]['visible'] = ![]);
                                                            continue;
                                                        case '1':
                                                            eyeballarr[i] == 0x1 && (game[_0x31cd64[_0x5e2951(0x2fe)](_0x31cd64[_0x5e2951(0x691)], i)][_0x5e2951(0xa6e)] = ![]);
                                                            continue;
                                                        case '2':
                                                            _0x31cd64[_0x5e2951(0x9fc)](stonearr[i], 0x1) && (game[_0x31cd64[_0x5e2951(0x2be)](_0x31cd64[_0x5e2951(0x6c6)], i)][_0x5e2951(0xa6e)] = ![]);
                                                            continue;
                                                        case '3':
                                                            _0x31cd64[_0x5e2951(0x463)](eyeshadowarr[i], 0x1) && (game[_0x31cd64[_0x5e2951(0x4a7)] + i]['visible'] = ![]);
                                                            continue;
                                                        case '4':
                                                            _0x31cd64[_0x5e2951(0x499)](liparr[i], 0x1) && (game[_0x31cd64[_0x5e2951(0xa6f)](_0x31cd64['wxVVC'], i)]['visible'] = ![]);
                                                            continue;
                                                    }
                                                    break;
                                                }
                                            }
                                        continue;
                                    case '2':
                                        game[_0x31cd64[_0x5e2951(0x5e8)](_0x31cd64[_0x5e2951(0x6c7)], 0x2)][_0x5e2951(0x254)](0x1);
                                        continue;
                                    case '3':
                                        if (_0x31cd64[_0x5e2951(0x93b)](showad, 0x1))
                                            for (i = 0x8; _0x31cd64['kRart'](i, 0x1); i--) {
                                                eyeballarr[i] == 0x1 && (game[_0x31cd64['vHAFP'](_0x31cd64[_0x5e2951(0x691)], i)][_0x5e2951(0xa6e)] = !![]);
                                            }
                                        continue;
                                    case '4':
                                        for (i = 0x1; _0x31cd64[_0x5e2951(0x602)](i, 0x8); i++) {
                                            game[_0x31cd64['ZJcXb'](_0x31cd64[_0x5e2951(0x81a)], i)]['visible'] = !![];
                                        }
                                        continue;
                                    case '5':
                                        for (i = 0x1; _0x31cd64[_0x5e2951(0x595)](i, 0x8); i++) {
                                            var _0x58f363 = _0x31cd64[_0x5e2951(0x3d3)][_0x5e2951(0xa4e)]('|'),
                                                _0x85b9ba = 0x0;
                                            while (!![]) {
                                                switch (_0x58f363[_0x85b9ba++]) {
                                                    case '0':
                                                        game[_0x31cd64[_0x5e2951(0x24d)](_0x31cd64['lkuIA'], i)]['visible'] = ![];
                                                        continue;
                                                    case '1':
                                                        game[_0x31cd64[_0x5e2951(0x9df)] + i][_0x5e2951(0xa6e)] = ![];
                                                        continue;
                                                    case '2':
                                                        game[_0x31cd64[_0x5e2951(0x1a3)](_0x5e2951(0xa4f), i)][_0x5e2951(0xa6e)] = ![];
                                                        continue;
                                                    case '3':
                                                        game[_0x31cd64[_0x5e2951(0x893)](_0x31cd64['urakO'], i)][_0x5e2951(0xa6e)] = ![];
                                                        continue;
                                                    case '4':
                                                        game[_0x31cd64[_0x5e2951(0x302)]('level2eyeshadow', i)][_0x5e2951(0xa6e)] = ![];
                                                        continue;
                                                }
                                                break;
                                            }
                                        }
                                        continue;
                                    case '6':
                                        this[_0x5e2951(0x88f)]();
                                        continue;
                                    case '7':
                                        level2text[_0x5e2951(0x254)](0x2);
                                        continue;
                                    case '8':
                                        larrow[_0x5e2951(0xa6e)] = !![];
                                        continue;
                                    case '9':
                                        rarrow[_0x5e2951(0xa6e)] = !![];
                                        continue;
                                }
                                break;
                            }
                        } else {
                            if (_0x31cd64['axulx'](_0x31cd64[_0x5e2951(0xab1)](parseInt, sno), 0x3)) {
                                var _0x525ba8 = _0x5e2951(0xa32)['split']('|'),
                                    _0x268898 = 0x0;
                                while (!![]) {
                                    switch (_0x525ba8[_0x268898++]) {
                                        case '0':
                                            for (i = 0x1; _0x31cd64['CuaKb'](i, 0x8); i++) {
                                                game[_0x31cd64['qENlH'](_0x31cd64['sXDdV'], i)][_0x5e2951(0xa6e)] = !![];
                                            }
                                            continue;
                                        case '1':
                                            for (i = 0x5; _0x31cd64['rLQqj'](i, 0x1); i--) {
                                                game[_0x31cd64[_0x5e2951(0x6ec)](_0x5e2951(0x86d), i)][_0x5e2951(0xa74)]({
                                                    'pixelPerfect': !![],
                                                    'useHandCursor': !![]
                                                });
                                            }
                                            continue;
                                        case '2':
                                            rarrow[_0x5e2951(0xa6e)] = !![];
                                            continue;
                                        case '3':
                                            if (showad == 0x1)
                                                for (i = 0x8; i >= 0x1; i--) {
                                                    _0x31cd64[_0x5e2951(0x442)](eyeshadowarr[i], 0x1) && (game[_0x31cd64['PAcPK'](_0x5e2951(0x733), i)][_0x5e2951(0xa6e)] = !![]);
                                                }
                                            continue;
                                        case '4':
                                            if (_0x31cd64[_0x5e2951(0x217)](showad, 0x1))
                                                for (i = 0x8; i >= 0x1; i--) {
                                                    var _0x1e4e6d = _0x31cd64[_0x5e2951(0x979)][_0x5e2951(0xa4e)]('|'),
                                                        _0xc723bb = 0x0;
                                                    while (!![]) {
                                                        switch (_0x1e4e6d[_0xc723bb++]) {
                                                            case '0':
                                                                _0x31cd64[_0x5e2951(0x4cb)](blusharr[i], 0x1) && (game[_0x31cd64[_0x5e2951(0x1a1)](_0x31cd64['CKqJJ'], i)][_0x5e2951(0xa6e)] = ![]);
                                                                continue;
                                                            case '1':
                                                                _0x31cd64[_0x5e2951(0x231)](stonearr[i], 0x1) && (game[_0x31cd64[_0x5e2951(0x849)](_0x31cd64['VHuOm'], i)][_0x5e2951(0xa6e)] = ![]);
                                                                continue;
                                                            case '2':
                                                                _0x31cd64[_0x5e2951(0x709)](eyeshadowarr[i], 0x1) && (game[_0x31cd64[_0x5e2951(0x2be)](_0x31cd64[_0x5e2951(0x4a7)], i)][_0x5e2951(0xa6e)] = ![]);
                                                                continue;
                                                            case '3':
                                                                _0x31cd64[_0x5e2951(0x1fd)](eyeballarr[i], 0x1) && (game[_0x31cd64[_0x5e2951(0x82a)]('level2eyeballvideo', i)][_0x5e2951(0xa6e)] = ![]);
                                                                continue;
                                                            case '4':
                                                                _0x31cd64['HPPqD'](liparr[i], 0x1) && (game[_0x31cd64['wxVVC'] + i][_0x5e2951(0xa6e)] = ![]);
                                                                continue;
                                                        }
                                                        break;
                                                    }
                                                }
                                            continue;
                                        case '5':
                                            this[_0x5e2951(0x88f)]();
                                            continue;
                                        case '6':
                                            game[_0x31cd64[_0x5e2951(0x679)](_0x5e2951(0x86d), 0x3)][_0x5e2951(0x254)](0x1);
                                            continue;
                                        case '7':
                                            larrow[_0x5e2951(0xa6e)] = !![];
                                            continue;
                                        case '8':
                                            level2text[_0x5e2951(0x254)](0x3);
                                            continue;
                                        case '9':
                                            for (i = 0x1; i <= 0x8; i++) {
                                                var _0x44aecd = _0x31cd64[_0x5e2951(0x43c)][_0x5e2951(0xa4e)]('|'),
                                                    _0x432bf1 = 0x0;
                                                while (!![]) {
                                                    switch (_0x44aecd[_0x432bf1++]) {
                                                        case '0':
                                                            game[_0x31cd64[_0x5e2951(0x44f)]('level2blush', i)]['visible'] = ![];
                                                            continue;
                                                        case '1':
                                                            game[_0x31cd64['zQhwQ'](_0x5e2951(0x263), i)][_0x5e2951(0xa6e)] = ![];
                                                            continue;
                                                        case '2':
                                                            game[_0x31cd64[_0x5e2951(0x893)](_0x5e2951(0x22b), i)][_0x5e2951(0xa6e)] = ![];
                                                            continue;
                                                        case '3':
                                                            game[_0x31cd64[_0x5e2951(0x9bf)] + i][_0x5e2951(0xa6e)] = ![];
                                                            continue;
                                                        case '4':
                                                            game[_0x31cd64[_0x5e2951(0x2be)](_0x31cd64[_0x5e2951(0x81a)], i)][_0x5e2951(0xa6e)] = ![];
                                                            continue;
                                                    }
                                                    break;
                                                }
                                            }
                                            continue;
                                    }
                                    break;
                                }
                            } else {
                                if (_0x31cd64[_0x5e2951(0x483)](parseInt(sno), 0x4)) {
                                    var _0x3944fb = _0x31cd64['HyGfC'][_0x5e2951(0xa4e)]('|'),
                                        _0x325c37 = 0x0;
                                    while (!![]) {
                                        switch (_0x3944fb[_0x325c37++]) {
                                            case '0':
                                                level2text[_0x5e2951(0x254)](0x4);
                                                continue;
                                            case '1':
                                                for (i = 0x1; _0x31cd64[_0x5e2951(0x595)](i, 0x8); i++) {
                                                    var _0x33bf20 = _0x31cd64[_0x5e2951(0x28d)][_0x5e2951(0xa4e)]('|'),
                                                        _0x141b55 = 0x0;
                                                    while (!![]) {
                                                        switch (_0x33bf20[_0x141b55++]) {
                                                            case '0':
                                                                game[_0x5e2951(0x263) + i][_0x5e2951(0xa6e)] = ![];
                                                                continue;
                                                            case '1':
                                                                game[_0x31cd64[_0x5e2951(0x9bf)] + i][_0x5e2951(0xa6e)] = ![];
                                                                continue;
                                                            case '2':
                                                                game[_0x31cd64['wPudT'](_0x5e2951(0x22b), i)][_0x5e2951(0xa6e)] = ![];
                                                                continue;
                                                            case '3':
                                                                game[_0x31cd64[_0x5e2951(0x1d0)](_0x5e2951(0xa4f), i)][_0x5e2951(0xa6e)] = ![];
                                                                continue;
                                                            case '4':
                                                                game[_0x31cd64[_0x5e2951(0x809)](_0x31cd64[_0x5e2951(0x81a)], i)][_0x5e2951(0xa6e)] = ![];
                                                                continue;
                                                        }
                                                        break;
                                                    }
                                                }
                                                continue;
                                            case '2':
                                                for (i = 0x5; _0x31cd64[_0x5e2951(0x913)](i, 0x1); i--) {
                                                    game[_0x31cd64[_0x5e2951(0x2fe)](_0x31cd64[_0x5e2951(0x6c7)], i)][_0x5e2951(0xa74)]({
                                                        'pixelPerfect': !![],
                                                        'useHandCursor': !![]
                                                    });
                                                }
                                                continue;
                                            case '3':
                                                if (_0x31cd64['GBrwi'](showad, 0x1))
                                                    for (i = 0x8; _0x31cd64[_0x5e2951(0x6ff)](i, 0x1); i--) {
                                                        _0x31cd64[_0x5e2951(0x484)](blusharr[i], 0x1) && (game[_0x31cd64['SWfuP'](_0x5e2951(0x341), i)][_0x5e2951(0xa6e)] = !![]);
                                                    }
                                                continue;
                                            case '4':
                                                larrow[_0x5e2951(0xa6e)] = !![];
                                                continue;
                                            case '5':
                                                this['disableInteractive']();
                                                continue;
                                            case '6':
                                                if (showad == 0x1)
                                                    for (i = 0x8; i >= 0x1; i--) {
                                                        _0x31cd64[_0x5e2951(0x32e)](eyeballarr[i], 0x1) && (game[_0x31cd64[_0x5e2951(0x87c)](_0x31cd64[_0x5e2951(0x691)], i)][_0x5e2951(0xa6e)] = ![]), _0x31cd64[_0x5e2951(0x42f)](stonearr[i], 0x1) && (game[_0x31cd64[_0x5e2951(0x6c6)] + i][_0x5e2951(0xa6e)] = ![]), _0x31cd64[_0x5e2951(0x2fa)](eyeshadowarr[i], 0x1) && (game[_0x31cd64[_0x5e2951(0x87c)](_0x31cd64[_0x5e2951(0x4a7)], i)][_0x5e2951(0xa6e)] = ![]), _0x31cd64[_0x5e2951(0x214)](blusharr[i], 0x1) && (game[_0x31cd64['pHOhr'](_0x31cd64['CKqJJ'], i)][_0x5e2951(0xa6e)] = ![]), _0x31cd64['NpjAp'](liparr[i], 0x1) && (game[_0x31cd64[_0x5e2951(0x8b3)](_0x31cd64[_0x5e2951(0x514)], i)][_0x5e2951(0xa6e)] = ![]);
                                                    }
                                                continue;
                                            case '7':
                                                rarrow['visible'] = !![];
                                                continue;
                                            case '8':
                                                game[_0x31cd64[_0x5e2951(0x268)]('level2cat', 0x4)][_0x5e2951(0x254)](0x1);
                                                continue;
                                            case '9':
                                                for (i = 0x1; i <= 0x8; i++) {
                                                    game[_0x31cd64[_0x5e2951(0xa83)](_0x31cd64[_0x5e2951(0x861)], i)][_0x5e2951(0xa6e)] = !![];
                                                }
                                                continue;
                                        }
                                        break;
                                    }
                                } else {
                                    if (_0x31cd64[_0x5e2951(0x817)](_0x31cd64[_0x5e2951(0xab1)](parseInt, sno), 0x5)) {
                                        var _0x340995 = _0x31cd64[_0x5e2951(0x22e)]['split']('|'),
                                            _0x31aa2f = 0x0;
                                        while (!![]) {
                                            switch (_0x340995[_0x31aa2f++]) {
                                                case '0':
                                                    larrow[_0x5e2951(0xa6e)] = !![];
                                                    continue;
                                                case '1':
                                                    rarrow['visible'] = !![];
                                                    continue;
                                                case '2':
                                                    level2text[_0x5e2951(0x254)](0x5);
                                                    continue;
                                                case '3':
                                                    if (showad == 0x1)
                                                        for (i = 0x8; i >= 0x1; i--) {
                                                            _0x31cd64[_0x5e2951(0x900)](liparr[i], 0x1) && (game[_0x31cd64['wxVVC'] + i][_0x5e2951(0xa6e)] = !![]);
                                                        }
                                                    continue;
                                                case '4':
                                                    for (i = 0x1; _0x31cd64['oOdKn'](i, 0x8); i++) {
                                                        var _0x4102cc = _0x31cd64[_0x5e2951(0x775)][_0x5e2951(0xa4e)]('|'),
                                                            _0x1f22e3 = 0x0;
                                                        while (!![]) {
                                                            switch (_0x4102cc[_0x1f22e3++]) {
                                                                case '0':
                                                                    game[_0x31cd64[_0x5e2951(0x8b3)](_0x31cd64[_0x5e2951(0x9bf)], i)][_0x5e2951(0xa6e)] = ![];
                                                                    continue;
                                                                case '1':
                                                                    game[_0x5e2951(0xa4f) + i][_0x5e2951(0xa6e)] = ![];
                                                                    continue;
                                                                case '2':
                                                                    game[_0x31cd64[_0x5e2951(0x6fa)](_0x31cd64['lkuIA'], i)][_0x5e2951(0xa6e)] = ![];
                                                                    continue;
                                                                case '3':
                                                                    game[_0x31cd64[_0x5e2951(0x52b)](_0x31cd64[_0x5e2951(0x9df)], i)][_0x5e2951(0xa6e)] = ![];
                                                                    continue;
                                                                case '4':
                                                                    game[_0x31cd64[_0x5e2951(0x7bf)](_0x31cd64[_0x5e2951(0x876)], i)][_0x5e2951(0xa6e)] = ![];
                                                                    continue;
                                                            }
                                                            break;
                                                        }
                                                    }
                                                    continue;
                                                case '5':
                                                    this[_0x5e2951(0x88f)]();
                                                    continue;
                                                case '6':
                                                    for (i = 0x1; _0x31cd64[_0x5e2951(0x4e2)](i, 0x8); i++) {
                                                        game[_0x31cd64[_0x5e2951(0x774)](_0x31cd64[_0x5e2951(0x9bf)], i)]['visible'] = !![];
                                                    }
                                                    continue;
                                                case '7':
                                                    if (_0x31cd64[_0x5e2951(0x8a2)](showad, 0x1))
                                                        for (i = 0x8; _0x31cd64[_0x5e2951(0x275)](i, 0x1); i--) {
                                                            _0x31cd64[_0x5e2951(0x442)](eyeballarr[i], 0x1) && (game[_0x31cd64['vvyPp'](_0x31cd64[_0x5e2951(0x691)], i)]['visible'] = ![]), _0x31cd64['ewfPX'](stonearr[i], 0x1) && (game[_0x31cd64[_0x5e2951(0x6c6)] + i][_0x5e2951(0xa6e)] = ![]), eyeshadowarr[i] == 0x1 && (game[_0x31cd64[_0x5e2951(0x822)](_0x31cd64[_0x5e2951(0x4a7)], i)][_0x5e2951(0xa6e)] = ![]), blusharr[i] == 0x1 && (game[_0x31cd64[_0x5e2951(0x5aa)](_0x31cd64[_0x5e2951(0x4fb)], i)][_0x5e2951(0xa6e)] = ![]), liparr[i] == 0x1 && (game[_0x31cd64[_0x5e2951(0x66f)](_0x31cd64[_0x5e2951(0x514)], i)][_0x5e2951(0xa6e)] = ![]);
                                                        }
                                                    continue;
                                                case '8':
                                                    for (i = 0x5; _0x31cd64['qqtmT'](i, 0x1); i--) {
                                                        game[_0x31cd64['wOjxG'](_0x5e2951(0x86d), i)][_0x5e2951(0xa74)]({
                                                            'pixelPerfect': !![],
                                                            'useHandCursor': !![]
                                                        });
                                                    }
                                                    continue;
                                                case '9':
                                                    game[_0x31cd64['JeysJ'](_0x31cd64[_0x5e2951(0x6c7)], 0x5)][_0x5e2951(0x254)](0x1);
                                                    continue;
                                            }
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    continue;
                case '5':
                    for (i = 0x1; _0x31cd64[_0x5e2951(0x62f)](i, 0x5); i++) {
                        game[_0x31cd64['ZJcXb'](_0x31cd64['SCHoV'], i)]['setFrame'](0x0);
                    }
                    continue;
                case '6':
                    larrow[_0x5e2951(0xa6e)] = ![];
                    continue;
                case '7':
                    glowarr[0x0] = _0x31cd64[_0x5e2951(0x23d)](parseInt, sno);
                    continue;
            }
            break;
        }
    }

    function _0x1ce01f() {
        var _0x341b30 = _0x528510,
            _0x462111 = _0x31cd64[_0x341b30(0x2a2)][_0x341b30(0xa4e)]('|'),
            _0x560054 = 0x0;
        while (!![]) {
            switch (_0x462111[_0x560054++]) {
                case '0':
                    for (i = 0x1; _0x31cd64[_0x341b30(0x1a5)](i, 0x8); i++) {
                        var _0x37fd20 = _0x31cd64[_0x341b30(0x308)][_0x341b30(0xa4e)]('|'),
                            _0x481aee = 0x0;
                        while (!![]) {
                            switch (_0x37fd20[_0x481aee++]) {
                                case '0':
                                    game[_0x31cd64['urakO'] + i][_0x341b30(0x55e)] = 0x1;
                                    continue;
                                case '1':
                                    game[_0x341b30(0x22b) + i][_0x341b30(0x55e)] = 0x1;
                                    continue;
                                case '2':
                                    game[_0x31cd64[_0x341b30(0x81a)] + i][_0x341b30(0x55e)] = 0x1;
                                    continue;
                                case '3':
                                    game[_0x31cd64['rcbNn'](_0x31cd64[_0x341b30(0x876)], i)][_0x341b30(0x55e)] = 0x1;
                                    continue;
                                case '4':
                                    game[_0x31cd64['tDMZL']('level2blush', i)]['alpha'] = 0x1;
                                    continue;
                            }
                            break;
                        }
                    }
                    continue;
                case '1':
                    (_0x31cd64['ewfPX'](marr[0x7], 0x7) || _0x31cd64[_0x341b30(0x47c)](marr[0x7], 0x8)) && (game[_0x31cd64['aPuDU'] + marr[0x7]]['alpha'] = 0.5);
                    continue;
                case '2':
                    marr[0x6] == 0x5 && (game[_0x31cd64[_0x341b30(0x7c6)](_0x341b30(0x22b), marr[0x6])][_0x341b30(0x55e)] = 0.5);
                    continue;
                case '3':
                    _0x31cd64[_0x341b30(0x886)](_0xa8ba46);
                    continue;
                case '4':
                    marr[0x2] > 0x0 && _0x31cd64['Myuqf'](marr[0x2], 0x9) && (game[_0x31cd64[_0x341b30(0x5d0)]('level2lip', marr[0x2])][_0x341b30(0x55e)] = 0.5);
                    continue;
                case '5':
                    _0x31cd64['ddgBM'](marr[0x0], 0x0) && _0x31cd64[_0x341b30(0x2ce)](marr[0x0], 0x9) && (game[_0x31cd64[_0x341b30(0x663)](_0x31cd64['sXDdV'], marr[0x0])]['alpha'] = 0.5);
                    continue;
                case '6':
                    _0x31cd64['ddgBM'](marr[0x4], 0x0) && _0x31cd64[_0x341b30(0x295)](marr[0x4], 0x9) && (game[_0x31cd64[_0x341b30(0x599)](_0x31cd64[_0x341b30(0x81a)], marr[0x4])][_0x341b30(0x55e)] = 0.5);
                    continue;
                case '7':
                    marr[0x1] > 0x0 && _0x31cd64['Rcrnb'](marr[0x1], 0x9) && (game[_0x31cd64[_0x341b30(0x861)] + marr[0x1]][_0x341b30(0x55e)] = 0.5);
                    continue;
                case '8':
                    (_0x31cd64['YpZqz'](marr[0x5], 0x4) || _0x31cd64[_0x341b30(0x459)](marr[0x5], 0x6)) && (game[_0x31cd64[_0x341b30(0x417)](_0x31cd64['aPuDU'], marr[0x5])][_0x341b30(0x55e)] = 0.5);
                    continue;
                case '9':
                    _0x31cd64['rLnuK'](marr[0x3], 0x1) && _0x31cd64[_0x341b30(0x671)](marr[0x3], 0x3) && (game[_0x31cd64[_0x341b30(0xa53)](_0x31cd64[_0x341b30(0x9df)], marr[0x3])][_0x341b30(0x55e)] = 0.5);
                    continue;
            }
            break;
        }
    }

    function _0xa8ba46() {
        var _0x4a2bf3 = _0x528510;
        for (i = 0x1; _0x31cd64[_0x4a2bf3(0x453)](i, 0x8); i++) {
            game[_0x31cd64['XkKbZ'](_0x31cd64[_0x4a2bf3(0x347)], i)][_0x4a2bf3(0xa6e)] = ![];
        }
        level2text[_0x4a2bf3(0x86b)][_0x4a2bf3(0x3ef)] == 0x1 && (_0x31cd64[_0x4a2bf3(0x275)](marr[0x3], 0x1) && _0x31cd64['dBEhj'](marr[0x3], 0x3)) && (game[_0x31cd64[_0x4a2bf3(0x7bf)](_0x31cd64[_0x4a2bf3(0x347)], 0x1)][_0x4a2bf3(0xa6e)] = !![], game[_0x31cd64[_0x4a2bf3(0x67f)](_0x31cd64[_0x4a2bf3(0x347)], 0x1)]['x'] = game[_0x31cd64[_0x4a2bf3(0x9df)] + marr[0x3]]['x'], game[_0x31cd64[_0x4a2bf3(0x347)] + 0x1]['y'] = game[_0x31cd64[_0x4a2bf3(0x66f)](_0x31cd64[_0x4a2bf3(0x9df)], marr[0x3])]['y']), _0x31cd64[_0x4a2bf3(0xac3)](level2text['frame']['name'], 0x2) && _0x31cd64[_0x4a2bf3(0x749)](marr[0x4], 0x0) && (game[_0x31cd64[_0x4a2bf3(0x392)](_0x31cd64[_0x4a2bf3(0x347)], 0x2)]['visible'] = !![], game[_0x31cd64['siiVW'](_0x31cd64[_0x4a2bf3(0x347)], 0x2)]['x'] = game[_0x31cd64[_0x4a2bf3(0x5db)](_0x4a2bf3(0x842), marr[0x4])]['x'], game[_0x31cd64['kZOug'](_0x31cd64['USmop'], 0x2)]['y'] = game[_0x31cd64['XcTXE'](_0x4a2bf3(0x842), marr[0x4])]['y']), _0x31cd64[_0x4a2bf3(0x484)](level2text[_0x4a2bf3(0x86b)][_0x4a2bf3(0x3ef)], 0x3) && _0x31cd64[_0x4a2bf3(0x749)](marr[0x0], 0x0) && (game[_0x31cd64[_0x4a2bf3(0x995)](_0x31cd64[_0x4a2bf3(0x347)], 0x3)][_0x4a2bf3(0xa6e)] = !![], game[_0x31cd64[_0x4a2bf3(0x347)] + 0x3]['x'] = game[_0x31cd64[_0x4a2bf3(0x876)] + marr[0x0]]['x'], game[_0x31cd64['QsEuE']('level2selection', 0x3)]['y'] = game[_0x31cd64[_0x4a2bf3(0x876)] + marr[0x0]]['y']), level2text[_0x4a2bf3(0x86b)][_0x4a2bf3(0x3ef)] == 0x4 && _0x31cd64[_0x4a2bf3(0x579)](marr[0x1], 0x0) && (game[_0x31cd64['tDMZL'](_0x31cd64[_0x4a2bf3(0x347)], 0x4)][_0x4a2bf3(0xa6e)] = !![], game[_0x31cd64[_0x4a2bf3(0x4fe)](_0x4a2bf3(0x303), 0x4)]['x'] = game[_0x31cd64['AdfVn'](_0x31cd64[_0x4a2bf3(0x861)], marr[0x1])]['x'], game[_0x31cd64[_0x4a2bf3(0x540)](_0x31cd64[_0x4a2bf3(0x347)], 0x4)]['y'] = game[_0x31cd64[_0x4a2bf3(0x861)] + marr[0x1]]['y']), _0x31cd64[_0x4a2bf3(0x724)](level2text[_0x4a2bf3(0x86b)]['name'], 0x5) && marr[0x2] > 0x0 && (game[_0x31cd64[_0x4a2bf3(0x346)](_0x4a2bf3(0x303), 0x5)][_0x4a2bf3(0xa6e)] = !![], game[_0x31cd64['USmop'] + 0x5]['x'] = game[_0x31cd64[_0x4a2bf3(0x3dc)]('level2lip', marr[0x2])]['x'], game[_0x31cd64[_0x4a2bf3(0xa82)](_0x31cd64['USmop'], 0x5)]['y'] = game[_0x31cd64[_0x4a2bf3(0x4e6)](_0x4a2bf3(0x276), marr[0x2])]['y']), level2text['frame'][_0x4a2bf3(0x3ef)] == 0x1 && (_0x31cd64[_0x4a2bf3(0x484)](marr[0x5], 0x4) || _0x31cd64[_0x4a2bf3(0x7ec)](marr[0x5], 0x6)) && (game[_0x31cd64['IRcuf'](_0x31cd64['USmop'], 0x6)]['visible'] = !![], game[_0x31cd64[_0x4a2bf3(0x347)] + 0x6]['x'] = game[_0x31cd64['QqGWe'](_0x31cd64[_0x4a2bf3(0x9df)], marr[0x5])]['x'], game[_0x31cd64['cFpWK'](_0x4a2bf3(0x303), 0x6)]['y'] = game[_0x31cd64['TftFt'](_0x31cd64[_0x4a2bf3(0x9df)], marr[0x5])]['y']), level2text[_0x4a2bf3(0x86b)]['name'] == 0x1 && _0x31cd64[_0x4a2bf3(0xac3)](marr[0x6], 0x5) && (game[_0x31cd64[_0x4a2bf3(0x5e5)](_0x31cd64[_0x4a2bf3(0x347)], 0x7)][_0x4a2bf3(0xa6e)] = !![], game[_0x31cd64[_0x4a2bf3(0x347)] + 0x7]['x'] = game[_0x31cd64[_0x4a2bf3(0x65f)](_0x31cd64[_0x4a2bf3(0x9df)], marr[0x6])]['x'], game[_0x31cd64[_0x4a2bf3(0x347)] + 0x7]['y'] = game[_0x31cd64['SJoZu'](_0x4a2bf3(0x22b), marr[0x6])]['y']), _0x31cd64['fTOrv'](level2text[_0x4a2bf3(0x86b)][_0x4a2bf3(0x3ef)], 0x1) && (_0x31cd64[_0x4a2bf3(0x6e8)](marr[0x7], 0x7) || _0x31cd64[_0x4a2bf3(0x257)](marr[0x7], 0x8)) && (game[_0x4a2bf3(0x303) + 0x8]['visible'] = !![], game[_0x31cd64[_0x4a2bf3(0x417)](_0x31cd64[_0x4a2bf3(0x347)], 0x8)]['x'] = game[_0x31cd64[_0x4a2bf3(0x24d)](_0x31cd64['aPuDU'], marr[0x7])]['x'], game[_0x31cd64[_0x4a2bf3(0x69f)](_0x31cd64[_0x4a2bf3(0x347)], 0x8)]['y'] = game[_0x31cd64[_0x4a2bf3(0x9df)] + marr[0x7]]['y']);
    }
    done2['on'](_0x31cd64[_0x528510(0x3bf)], _0x2e5eec), done2['on'](_0x528510(0x338), _0x514b33), done2['on'](_0x528510(0x637), _0x5bdc95), done2['on'](_0x31cd64[_0x528510(0x8a1)], _0x512747);

    function _0x2e5eec() {
        var _0xe2cd6b = _0x528510;
        this[_0xe2cd6b(0x67d)](1.05);
    }

    function _0x514b33() {
        var _0x54527f = _0x528510;
        this[_0x54527f(0x67d)](0x1);
    }

    function _0x512747() {
        var _0x3ab9e9 = _0x528510;
        this[_0x3ab9e9(0x67d)](1.05);
    }

    function _0x5bdc95() {
        var _0x432306 = _0x528510;
        if (_0x31cd64[_0x432306(0x409)](!startgame5, loadFinish)) {
            var _0x37f15c = _0x432306(0x7ce)[_0x432306(0xa4e)]('|'),
                _0x32700c = 0x0;
            while (!![]) {
                switch (_0x37f15c[_0x32700c++]) {
                    case '0':
                        game['scene'][_0x432306(0x237)][pageNo][_0x432306(0x465)][_0x432306(0x85a)]({
                            'targets': level2grp,
                            'x': 0x78,
                            'ease': _0x31cd64[_0x432306(0x7f8)],
                            'duration': 0x2bc,
                            'onComplete': _0x2adbbe,
                            'callbackScope': this
                        });
                        continue;
                    case '1':
                        done2['setScale'](0x1);
                        continue;
                    case '2':
                        startgame5 = !![];
                        continue;
                    case '3':
                        game[_0x31cd64['ADDaZ'] + 0x2][_0x432306(0xa6e)] = ![];
                        continue;
                    case '4':
                        rarrow[_0x432306(0xa6e)] = ![];
                        continue;
                    case '5':
                        cupboardgroup1[_0x432306(0xa6e)] = ![];
                        continue;
                    case '6':
                        _0x31cd64[_0x432306(0x606)](playsoundeffects, _0x31cd64['WZLGR']);
                        continue;
                    case '7':
                        cupboardgroup['visible'] = ![];
                        continue;
                    case '8':
                        saveFile();
                        continue;
                    case '9':
                        done2[_0x432306(0xa6e)] = ![];
                        continue;
                    case '10':
                        _0x31cd64[_0x432306(0x193)](level, 0x2) && (level = 0x3);
                        continue;
                    case '11':
                        fillbackground[_0x432306(0xa6e)] = !![];
                        continue;
                    case '12':
                        larrow['visible'] = ![];
                        continue;
                }
                break;
            }
        }
    }

    function _0x2adbbe() {
        var _0x193621 = _0x528510,
            _0x3dfae7 = _0x31cd64[_0x193621(0x1b4)][_0x193621(0xa4e)]('|'),
            _0x592ea6 = 0x0;
        while (!![]) {
            switch (_0x3dfae7[_0x592ea6++]) {
                case '0':
                    dollgliter['on'](_0x31cd64[_0x193621(0x20f)], _0x735d02, this);
                    continue;
                case '1':
                    dollgliter['anims']['play'](_0x31cd64[_0x193621(0x2a6)]);
                    continue;
                case '2':
                    dollgliter['y'] = 0x12c;
                    continue;
                case '3':
                    _0x31cd64[_0x193621(0x345)](playsoundeffects, _0x31cd64[_0x193621(0x78d)]);
                    continue;
                case '4':
                    dollgliter['x'] = 0x226;
                    continue;
                case '5':
                    dollgliter[_0x193621(0x86e)][_0x193621(0x742)](_0x31cd64[_0x193621(0x2a6)]);
                    continue;
            }
            break;
        }
    }

    function _0x735d02() {
        var _0x3c884f = _0x528510;
        t2[_0x3c884f(0x971)](), _0x31cd64[_0x3c884f(0x7a7)](setTimeout, _0x2bb8e7, 0x1f4);
    }

    function _0x2bb8e7() {
        var _0xfce7b2 = _0x528510;
        _0x31cd64[_0xfce7b2(0x816)](transitionIn);
    }
}
var startgame6 = ![],
    btnstart1 = ![],
    btnstart2 = ![],
    btnstart3 = ![],
    btnstart4 = ![],
    btnstart5 = ![],
    glowarr = [0x0, 0x0, 0x0, 0x0],
    dressarr = [0x0, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
    hairarr = [0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x0, 0x0, 0x0],
    chainarr = [0x0, 0x0, 0x0, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0],
    studarr = [0x0, 0x0, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0],
    accarr = [0x0, 0x0, 0x0, 0x0, 0x1, 0x0, 0x0, 0x0, 0x0],
    leveladcheck = 0x0,
    dressrandom = 0x0,
    hairrandom = 0x0,
    chainrandom = 0x0,
    studrandom = 0x0,
    accrandom = 0x0,
    accrandom1 = 0x0,
    accrandom2 = 0x0,
    accrandom3 = 0x0,
    accrandom4 = 0x0,
    level3 = new Phaser[(_0x192e21(0x8eb))]({
        'Extends': Phaser['Scene'],
        'initialize': function level3() {
            var _0x48548c = _0x192e21,
                _0x1058cf = {
                    'gBvDm': _0x48548c(0x33c)
                };
            Phaser[_0x48548c(0xabc)][_0x48548c(0x654)](this, {
                'key': _0x1058cf[_0x48548c(0x6c4)]
            });
        },
        'preload': function() {
            var _0x4b29fa = {
                    'mMcod': '6|7|0|8|1|2|4|9|5|10|3'
                },
                _0x19f0bf = _0x4b29fa['mMcod']['split']('|'),
                _0x21a0cf = 0x0;
            while (!![]) {
                switch (_0x19f0bf[_0x21a0cf++]) {
                    case '0':
                        pageNo = 0x6;
                        continue;
                    case '1':
                        startgame6 = ![];
                        continue;
                    case '2':
                        btnstart1 = ![];
                        continue;
                    case '3':
                        glowarr = [0x0, 0x0, 0x0, 0x0];
                        continue;
                    case '4':
                        btnstart2 = ![];
                        continue;
                    case '5':
                        btnstart4 = ![];
                        continue;
                    case '6':
                        loadFinish = ![];
                        continue;
                    case '7':
                        leveladcheck = 0x0;
                        continue;
                    case '8':
                        settingval = ![];
                        continue;
                    case '9':
                        btnstart3 = ![];
                        continue;
                    case '10':
                        btnstart5 = ![];
                        continue;
                }
                break;
            }
        },
        'create': function() {
            var _0x12f785 = _0x192e21,
                _0x5003cb = {
                    'eedRi': _0x12f785(0x702),
                    'ywCbl': _0x12f785(0x3d9),
                    'odtsf': function(_0x441db1, _0x290753) {
                        return _0x441db1 >= _0x290753;
                    },
                    'ZwcbA': function(_0x17935e, _0x31d28e) {
                        return _0x17935e + _0x31d28e;
                    },
                    'LNngO': _0x12f785(0x4ba),
                    'fTPAt': function(_0x2e7345, _0x28fbb6) {
                        return _0x2e7345 + _0x28fbb6;
                    },
                    'PzFDb': function(_0x370819, _0x1c658a) {
                        return _0x370819 == _0x1c658a;
                    },
                    'Rzwow': function(_0x25c8aa, _0x54c477) {
                        return _0x25c8aa == _0x54c477;
                    },
                    'onjpE': function(_0x23ff7a, _0x5799bf) {
                        return _0x23ff7a + _0x5799bf;
                    },
                    'YuGlO': _0x12f785(0x5c1),
                    'DqKuL': _0x12f785(0x8db),
                    'NTPmI': function(_0x47b08b, _0x4be5c6) {
                        return _0x47b08b >= _0x4be5c6;
                    },
                    'aOXVJ': _0x12f785(0x21f),
                    'JTUVV': function(_0x38228e, _0xd273d8) {
                        return _0x38228e == _0xd273d8;
                    },
                    'pRybl': _0x12f785(0x8d5),
                    'TScPf': function(_0x134b58, _0x4fce0c) {
                        return _0x134b58 + _0x4fce0c;
                    },
                    'ZSOzj': function(_0x26a5f8, _0x9c3665) {
                        return _0x26a5f8 + _0x9c3665;
                    },
                    'LarpP': function(_0x30a50f, _0x966110) {
                        return _0x30a50f + _0x966110;
                    },
                    'ITAEx': function(_0x43acd4, _0x519a16) {
                        return _0x43acd4 + _0x519a16;
                    },
                    'PLSku': function(_0x50571a, _0x53115f) {
                        return _0x50571a + _0x53115f;
                    },
                    'oPiJp': 'level3stud',
                    'AGtzk': function(_0x540cde, _0x4fde46) {
                        return _0x540cde + _0x4fde46;
                    },
                    'sSoWp': function(_0x2504b2, _0x3fc4e1) {
                        return _0x2504b2 >= _0x3fc4e1;
                    },
                    'jqCdi': 'level3studvideo',
                    'pGLno': function(_0x209c81, _0x3c1d6f) {
                        return _0x209c81 + _0x3c1d6f;
                    },
                    'ITzrd': _0x12f785(0x901),
                    'rmZXo': function(_0x20a252, _0x12bf48) {
                        return _0x20a252 + _0x12bf48;
                    },
                    'JGYBQ': function(_0x3adb29, _0x3ae731) {
                        return _0x3adb29 >= _0x3ae731;
                    },
                    'szUdU': _0x12f785(0x7e0),
                    'FbVPR': function(_0x2a9e03, _0x4f6222) {
                        return _0x2a9e03 >= _0x4f6222;
                    },
                    'rUSNI': function(_0x43c7ba, _0x317c65) {
                        return _0x43c7ba + _0x317c65;
                    },
                    'GJirT': function(_0x186297, _0x326408) {
                        return _0x186297 + _0x326408;
                    },
                    'Kxlcz': _0x12f785(0x2e7),
                    'TYIYT': function(_0x5e9396, _0x39e2c3) {
                        return _0x5e9396 + _0x39e2c3;
                    },
                    'IpzKk': _0x12f785(0x949),
                    'keWYA': function(_0x2f975e, _0x101263) {
                        return _0x2f975e + _0x101263;
                    },
                    'ufbrC': function(_0x1b2422, _0x22d946) {
                        return _0x1b2422 >= _0x22d946;
                    },
                    'FqdnV': function(_0x4b70ca, _0x79ad49) {
                        return _0x4b70ca == _0x79ad49;
                    },
                    'AEBsH': 'level3accvideo',
                    'Dcttf': function(_0x122c60, _0x32589b) {
                        return _0x122c60 >= _0x32589b;
                    },
                    'wTNoU': function(_0x384bab, _0xd6bea9) {
                        return _0x384bab + _0xd6bea9;
                    },
                    'Dbmdx': _0x12f785(0x5c2),
                    'mZMYn': function(_0x36edc7, _0xa277a7) {
                        return _0x36edc7 > _0xa277a7;
                    },
                    'QeLqi': function(_0x27c9e1, _0x1a05de) {
                        return _0x27c9e1 + _0x1a05de;
                    },
                    'ioWZZ': function(_0x40e80c, _0x44bde4) {
                        return _0x40e80c + _0x44bde4;
                    },
                    'ByqxF': function(_0x3de873, _0x21eef4) {
                        return _0x3de873 + _0x21eef4;
                    },
                    'QmeGD': function(_0x2b877, _0x5d2b32) {
                        return _0x2b877 + _0x5d2b32;
                    },
                    'GqwKc': _0x12f785(0x487),
                    'VACze': _0x12f785(0x739),
                    'OKmpW': 'level2ecat',
                    'tzcYz': 'level3doll',
                    'IpLRl': _0x12f785(0x488),
                    'hXCnt': 'Dress-00',
                    'NFrZi': _0x12f785(0x751),
                    'BnETH': _0x12f785(0x85e),
                    'IuCpg': _0x12f785(0x60a),
                    'ondQo': 'Head\x20Acc-00',
                    'EZIJV': _0x12f785(0x76d),
                    'NQqnK': _0x12f785(0x6a1),
                    'bgXiK': _0x12f785(0x652),
                    'tlzgB': _0x12f785(0x1f5),
                    'GzmFW': _0x12f785(0x4a9),
                    'ueoRC': _0x12f785(0x455),
                    'IxTuf': _0x12f785(0x366),
                    'taeSL': _0x12f785(0x69b),
                    'AAWME': _0x12f785(0x38b),
                    'uZjUu': 'Piercing-04',
                    'hwUCQ': 'Piercing-04-0',
                    'wLZqo': _0x12f785(0x850),
                    'PPSqs': _0x12f785(0x641),
                    'Ubjrc': 'Back\x20Hair',
                    'WkvWZ': _0x12f785(0xacf),
                    'CYvUM': _0x12f785(0x391),
                    'NTPRZ': _0x12f785(0x77c),
                    'gdwhl': 'L\x20Hand\x20Dress',
                    'zssja': 'L\x20Hand\x20Dress-00',
                    'XdmlB': _0x12f785(0x58b),
                    'UMCrS': _0x12f785(0x62a),
                    'lyVyv': _0x12f785(0x796),
                    'pccnz': _0x12f785(0x6a4),
                    'eREkA': 'Eye',
                    'dlBOU': function(_0x5b8192, _0x477c2d) {
                        return _0x5b8192 + _0x477c2d;
                    },
                    'mERYZ': _0x12f785(0xa98),
                    'OEBaU': 'Eye\x20Ball',
                    'dvOve': _0x12f785(0x491),
                    'VztGF': _0x12f785(0x48e),
                    'CboOl': 'Eye\x20Top',
                    'vvwsv': _0x12f785(0x251),
                    'sxNvk': _0x12f785(0x610),
                    'DQPHD': _0x12f785(0x5a2),
                    'XbtjD': _0x12f785(0x2f5),
                    'kgsZL': 'L\x20Hand-02',
                    'EPylK': _0x12f785(0x17f),
                    'xBDjc': _0x12f785(0x69e),
                    'lKiRG': _0x12f785(0x478),
                    'xTXsd': 'Leg',
                    'XMLKF': 'idle-02',
                    'ILVYS': function(_0x12857d, _0x45ca89) {
                        return _0x12857d + _0x45ca89;
                    },
                    'meGja': 'Dress-0',
                    'uUlmR': _0x12f785(0x91f),
                    'qJlbE': _0x12f785(0x6a2),
                    'bjMdy': function(_0x5e52e6, _0x3e09d1) {
                        return _0x5e52e6 + _0x3e09d1;
                    },
                    'WXbmz': 'Back\x20Hair-0',
                    'PFPTF': function(_0x36a686, _0x4a7050) {
                        return _0x36a686 + _0x4a7050;
                    },
                    'qwENH': 'Hair-0',
                    'jLvlY': function(_0x3f7418, _0x3a0fa5) {
                        return _0x3f7418 + _0x3a0fa5;
                    },
                    'tAoQR': _0x12f785(0x5c9),
                    'NFRep': function(_0x38b3f4, _0x4bd942) {
                        return _0x38b3f4 + _0x4bd942;
                    },
                    'XPXzB': _0x12f785(0x240),
                    'zGkel': _0x12f785(0x3ad),
                    'DOekp': _0x12f785(0x55c),
                    'iKbCS': function(_0x1f34a7, _0x4a7969) {
                        return _0x1f34a7 + _0x4a7969;
                    },
                    'GQcNa': _0x12f785(0x831),
                    'vfteL': function(_0x517b38, _0x114e71) {
                        return _0x517b38 + _0x114e71;
                    },
                    'qYAIz': _0x12f785(0x470),
                    'IYeAw': _0x12f785(0x530),
                    'EmHxw': function(_0x190d64, _0x3a2519) {
                        return _0x190d64 + _0x3a2519;
                    },
                    'Cbgin': _0x12f785(0x472),
                    'rsvTw': function(_0x5b7d3d, _0x2cf070) {
                        return _0x5b7d3d >= _0x2cf070;
                    },
                    'kAYyn': function(_0x718c92, _0x3f469a) {
                        return _0x718c92 + _0x3f469a;
                    },
                    'ihids': function(_0x52a9a9, _0x480a8a) {
                        return _0x52a9a9 == _0x480a8a;
                    },
                    'MiGYC': function(_0xca98eb, _0x2709ab) {
                        return _0xca98eb == _0x2709ab;
                    },
                    'puBNp': function(_0x57fd09, _0x4c6c49) {
                        return _0x57fd09 + _0x4c6c49;
                    },
                    'AvuJp': function(_0x1c015b, _0x4b9d07) {
                        return _0x1c015b == _0x4b9d07;
                    },
                    'jBYKZ': function(_0x50de63, _0x4d4b3c) {
                        return _0x50de63 + _0x4d4b3c;
                    },
                    'FevRd': function(_0x82de44, _0x3ec9f1) {
                        return _0x82de44 == _0x3ec9f1;
                    },
                    'cexAx': function(_0xb9c0a5, _0x51c18b) {
                        return _0xb9c0a5 + _0x51c18b;
                    },
                    'pSsQB': function(_0x820035, _0x441999) {
                        return _0x820035 >= _0x441999;
                    },
                    'UUJcs': function(_0x3f094f, _0x13a8c6) {
                        return _0x3f094f + _0x13a8c6;
                    },
                    'XYDIM': function(_0x2ee00e, _0x10dac5) {
                        return _0x2ee00e >= _0x10dac5;
                    },
                    'UxIeF': _0x12f785(0x37a),
                    'QExYj': function(_0x1bb0b4, _0x3a39e4) {
                        return _0x1bb0b4 + _0x3a39e4;
                    },
                    'JCFgb': function(_0x300e57, _0x79e684) {
                        return _0x300e57 - _0x79e684;
                    },
                    'SbcwX': _0x12f785(0x548),
                    'eoKsh': _0x12f785(0x1e5),
                    'APAjY': function(_0x494a7e) {
                        return _0x494a7e();
                    },
                    'sdaEn': _0x12f785(0x902)
                };
            level3background = this[_0x12f785(0x85a)][_0x12f785(0x323)](0x0, 0x0, 'level3background')['setOrigin'](0x0, 0x0), level3panel = this[_0x12f785(0x85a)][_0x12f785(0x244)](852.5, 280.5, _0x5003cb[_0x12f785(0xab6)])['setOrigin'](0.5), level3text = this['add'][_0x12f785(0x244)](852.5, 566.5, _0x5003cb[_0x12f785(0x7fa)])['setOrigin'](0.5), level3text[_0x12f785(0x254)](0x1);
            var _0x58c781 = [, 0x317, 916.5, 0x317, 916.5, 0x317, 916.5, 0x317, 916.5],
                _0x1c9db3 = [, 0x6d, 0x6d, 0xe0, 0xe0, 339.5, 339.5, 454.5, 454.5];
            for (i = 0x8; _0x5003cb[_0x12f785(0x8ff)](i, 0x1); i--) {
                game[_0x5003cb[_0x12f785(0x5e7)](_0x12f785(0x4ba), i)] = this[_0x12f785(0x85a)]['sprite'](_0x58c781[i], _0x1c9db3[i], _0x5003cb[_0x12f785(0x5e7)](_0x5003cb['LNngO'], i))['setOrigin'](0.5, 0.5)[_0x12f785(0xa74)]({
                    'pixelPerfect': !![],
                    'useHandCursor': !![]
                }), game[_0x5003cb[_0x12f785(0x972)](_0x5003cb['LNngO'], i)][_0x12f785(0xa6e)] = ![];
            }
            for (i = 0x8; _0x5003cb['odtsf'](i, 0x1); i--) {
                _0x5003cb[_0x12f785(0x26c)](showad, 0x1) && _0x5003cb['Rzwow'](dressarr[i], 0x1) && (game[_0x5003cb[_0x12f785(0x9da)](_0x5003cb[_0x12f785(0x73b)], i)] = this[_0x12f785(0x85a)][_0x12f785(0x244)](_0x58c781[i] + 0x1e, _0x5003cb['ZwcbA'](_0x1c9db3[i], 0x1e), _0x5003cb['DqKuL'])[_0x12f785(0x541)](0.5, 0.5), game[_0x5003cb[_0x12f785(0x73b)] + i][_0x12f785(0xa6e)] = ![], game[_0x12f785(0x374)][_0x12f785(0x237)][pageNo][_0x12f785(0x465)]['add']({
                    'targets': game[_0x5003cb[_0x12f785(0x972)](_0x12f785(0x5c1), i)],
                    'scale': 1.1,
                    'ease': _0x12f785(0x901),
                    'duration': 0x12c,
                    'repeat': -0x1,
                    'yoyo': !![]
                }));
            }
            var _0x3f2bf5 = [, 0x317, 916.5, 0x317, 916.5, 0x317, 916.5, 0x317, 916.5],
                _0xe8ab0 = [, 0x6d, 0x6d, 0xe0, 0xe0, 339.5, 339.5, 454.5, 454.5];
            for (i = 0x8; _0x5003cb[_0x12f785(0x95e)](i, 0x1); i--) {
                game[_0x5003cb[_0x12f785(0x972)](_0x5003cb[_0x12f785(0x676)], i)] = this[_0x12f785(0x85a)][_0x12f785(0x244)](_0x3f2bf5[i], _0xe8ab0[i], _0x5003cb[_0x12f785(0x972)](_0x12f785(0x21f), i))['setOrigin'](0.5, 0.5)[_0x12f785(0xa74)]({
                    'pixelPerfect': !![],
                    'useHandCursor': !![]
                }), game[_0x5003cb[_0x12f785(0x9da)](_0x5003cb[_0x12f785(0x676)], i)][_0x12f785(0xa6e)] = ![];
            }
            for (i = 0x8; i >= 0x1; i--) {
                showad == 0x1 && _0x5003cb['JTUVV'](hairarr[i], 0x1) && (game[_0x5003cb['pRybl'] + i] = this['add'][_0x12f785(0x244)](_0x5003cb[_0x12f785(0x446)](_0x3f2bf5[i], 0x1e), _0x5003cb[_0x12f785(0x859)](_0xe8ab0[i], 0x1e), _0x5003cb[_0x12f785(0x7c2)])[_0x12f785(0x541)](0.5, 0.5), game[_0x5003cb[_0x12f785(0x655)]('level3hairvideo', i)][_0x12f785(0xa6e)] = ![], game[_0x12f785(0x374)][_0x12f785(0x237)][pageNo]['tweens'][_0x12f785(0x85a)]({
                    'targets': game[_0x5003cb[_0x12f785(0xa8f)](_0x12f785(0x8d5), i)],
                    'scale': 1.1,
                    'ease': _0x12f785(0x901),
                    'duration': 0x12c,
                    'repeat': -0x1,
                    'yoyo': !![]
                }));
            }
            var _0x21aebd = [, 0x317, 916.5, 0x317, 916.5, 0x317, 916.5, 0x317, 916.5],
                _0x244437 = [, 0x6d, 0x6d, 0xe0, 0xe0, 339.5, 339.5, 454.5, 454.5];
            for (i = 0x8; _0x5003cb['NTPmI'](i, 0x1); i--) {
                game[_0x5003cb['PLSku'](_0x5003cb[_0x12f785(0x35c)], i)] = this[_0x12f785(0x85a)]['sprite'](_0x21aebd[i], _0x244437[i], _0x5003cb[_0x12f785(0x2c4)](_0x5003cb[_0x12f785(0x35c)], i))['setOrigin'](0.5, 0.5)['setInteractive']({
                    'pixelPerfect': !![],
                    'useHandCursor': !![]
                }), game[_0x5003cb['oPiJp'] + i][_0x12f785(0xa6e)] = ![];
            }
            for (i = 0x8; _0x5003cb[_0x12f785(0x6a7)](i, 0x1); i--) {
                _0x5003cb[_0x12f785(0xa27)](showad, 0x1) && studarr[i] == 0x1 && (game[_0x5003cb[_0x12f785(0x7d9)] + i] = this[_0x12f785(0x85a)][_0x12f785(0x244)](_0x5003cb[_0x12f785(0x972)](_0x21aebd[i], 0x1e), _0x5003cb[_0x12f785(0x1ff)](_0x244437[i], 0x1e), _0x12f785(0x8db))[_0x12f785(0x541)](0.5, 0.5), game[_0x5003cb[_0x12f785(0x7d9)] + i][_0x12f785(0xa6e)] = ![], game[_0x12f785(0x374)][_0x12f785(0x237)][pageNo][_0x12f785(0x465)][_0x12f785(0x85a)]({
                    'targets': game[_0x5003cb[_0x12f785(0x5e7)](_0x5003cb[_0x12f785(0x7d9)], i)],
                    'scale': 1.1,
                    'ease': _0x5003cb[_0x12f785(0x2cd)],
                    'duration': 0x12c,
                    'repeat': -0x1,
                    'yoyo': !![]
                }));
            }
            for (i = 0x1; i <= 0x8; i++) {
                game[_0x12f785(0x8ac) + i]['visible'] = !![];
            }
            for (i = 0x1; i <= 0x8; i++) {
                showad == 0x1 && _0x5003cb[_0x12f785(0x7cc)](studarr[i], 0x1) && (game[_0x5003cb[_0x12f785(0x4ed)](_0x5003cb['jqCdi'], i)][_0x12f785(0xa6e)] = !![]);
            }
            var _0x3bcadb = [, 0x317, 916.5, 0x317, 916.5, 0x317, 916.5, 0x317, 916.5],
                _0x41c049 = [, 0x6d, 0x6d, 0xe0, 0xe0, 339.5, 339.5, 454.5, 454.5];
            for (i = 0x8; _0x5003cb[_0x12f785(0x4bc)](i, 0x1); i--) {
                game[_0x5003cb[_0x12f785(0x804)] + i] = this[_0x12f785(0x85a)][_0x12f785(0x244)](_0x3bcadb[i], _0x41c049[i], _0x5003cb[_0x12f785(0x804)] + i)[_0x12f785(0x541)](0.5, 0.5)[_0x12f785(0xa74)]({
                    'pixelPerfect': !![],
                    'useHandCursor': !![]
                }), game[_0x5003cb[_0x12f785(0x446)](_0x5003cb[_0x12f785(0x804)], i)][_0x12f785(0xa6e)] = ![];
            }
            for (i = 0x8; _0x5003cb[_0x12f785(0x19e)](i, 0x1); i--) {
                _0x5003cb[_0x12f785(0xa27)](showad, 0x1) && chainarr[i] == 0x1 && (game[_0x12f785(0x2e7) + i] = this[_0x12f785(0x85a)][_0x12f785(0x244)](_0x5003cb[_0x12f785(0x429)](_0x3bcadb[i], 0x1e), _0x5003cb[_0x12f785(0x859)](_0x41c049[i], 0x1e), _0x5003cb[_0x12f785(0x7c2)])[_0x12f785(0x541)](0.5, 0.5), game[_0x5003cb[_0x12f785(0x34f)](_0x5003cb[_0x12f785(0x47f)], i)][_0x12f785(0xa6e)] = ![], game[_0x12f785(0x374)][_0x12f785(0x237)][pageNo]['tweens'][_0x12f785(0x85a)]({
                    'targets': game[_0x5003cb[_0x12f785(0x24f)](_0x5003cb[_0x12f785(0x47f)], i)],
                    'scale': 1.1,
                    'ease': _0x12f785(0x901),
                    'duration': 0x12c,
                    'repeat': -0x1,
                    'yoyo': !![]
                }));
            }
            var _0x3985d8 = [, 0x317, 916.5, 0x317, 916.5, 0x317, 916.5, 0x317, 916.5],
                _0xe8f52 = [, 0x6d, 0x6d, 0xe0, 0xe0, 339.5, 339.5, 454.5, 454.5];
            for (i = 0x8; i >= 0x1; i--) {
                game[_0x5003cb['IpzKk'] + i] = this[_0x12f785(0x85a)]['sprite'](_0x3985d8[i], _0xe8f52[i], _0x5003cb[_0x12f785(0x89a)](_0x5003cb[_0x12f785(0xa69)], i))[_0x12f785(0x541)](0.5, 0.5)['setInteractive']({
                    'pixelPerfect': !![],
                    'useHandCursor': !![]
                }), game[_0x5003cb[_0x12f785(0x859)](_0x5003cb['IpzKk'], i)][_0x12f785(0xa6e)] = ![];
            }
            for (i = 0x8; _0x5003cb[_0x12f785(0xa78)](i, 0x1); i--) {
                _0x5003cb[_0x12f785(0x26c)](showad, 0x1) && _0x5003cb[_0x12f785(0x30b)](accarr[i], 0x1) && (game[_0x12f785(0x730) + i] = this[_0x12f785(0x85a)][_0x12f785(0x244)](_0x5003cb[_0x12f785(0x24f)](_0x3985d8[i], 0x1e), _0x5003cb[_0x12f785(0xa8f)](_0xe8f52[i], 0x1e), _0x5003cb[_0x12f785(0x7c2)])['setOrigin'](0.5, 0.5), game[_0x5003cb['AEBsH'] + i][_0x12f785(0xa6e)] = ![], game[_0x12f785(0x374)]['scenes'][pageNo][_0x12f785(0x465)][_0x12f785(0x85a)]({
                    'targets': game[_0x5003cb['TYIYT'](_0x5003cb[_0x12f785(0x660)], i)],
                    'scale': 1.1,
                    'ease': _0x5003cb[_0x12f785(0x2cd)],
                    'duration': 0x12c,
                    'repeat': -0x1,
                    'yoyo': !![]
                }));
            }
            var _0x43105b = [, -0x64, -0x64, -0x64, -0x64, -0x64, -0x64, -0x64, -0x64, -0x64],
                _0x58d6d5 = [, 0x64, 0xab, 0xf3, 0x139, 0x184, 0x1cf, 0xf3, 0xf3, 0xf3];
            for (i = 0x9; _0x5003cb[_0x12f785(0xa30)](i, 0x1); i--) {
                game[_0x5003cb[_0x12f785(0x320)](_0x5003cb[_0x12f785(0x2ff)], i)] = this[_0x12f785(0x85a)]['sprite'](_0x43105b[i], _0x58d6d5[i], 'selection')[_0x12f785(0x541)](0.5, 0.5), game[_0x5003cb['rmZXo'](_0x12f785(0x5c2), i)]['visible'] = ![];
            }
            _0x5003cb['mZMYn'](marr[0x2], 0x0) && (game[_0x5003cb['QeLqi'](_0x12f785(0x5c2), 0x1)]['visible'] = !![], game[_0x5003cb[_0x12f785(0x426)](_0x5003cb[_0x12f785(0x2ff)], 0x1)]['x'] = game[_0x5003cb[_0x12f785(0x65c)](_0x5003cb[_0x12f785(0x35c)], marr[0x2])]['x'], game[_0x5003cb[_0x12f785(0x2ff)] + 0x1]['y'] = game[_0x5003cb[_0x12f785(0xa72)](_0x5003cb[_0x12f785(0x35c)], marr[0x2])]['y']);
            var _0x24e333 = [, 0x29c, 0x29c, 0x29c, 0x29c, 0x29c],
                _0x2e6e62 = [, 0x83, 0xca, 0x111, 0x15c, 0x1a7];
            for (i = 0x5; _0x5003cb[_0x12f785(0x4bc)](i, 0x1); i--) {
                game[_0x5003cb[_0x12f785(0x859)](_0x5003cb['GqwKc'], i)] = this[_0x12f785(0x85a)][_0x12f785(0x244)](_0x24e333[i], _0x2e6e62[i], _0x5003cb[_0x12f785(0x429)](_0x5003cb[_0x12f785(0x87b)], i))[_0x12f785(0x541)](0.5, 0.5)['setInteractive']({
                    'pixelPerfect': !![],
                    'useHandCursor': !![]
                });
            }
            game[_0x5003cb[_0x12f785(0x859)](_0x5003cb[_0x12f785(0x87b)], 0x1)][_0x12f785(0x254)](0x1);
            var _0x39c491 = [, 0x8a, 0x8a, 0x8a],
                _0x336f60 = [, 0xbf, 0x101, 0x144];
            for (i = 0x3; i >= 0x1; i--) {
                game[_0x5003cb[_0x12f785(0x1ff)](_0x5003cb[_0x12f785(0x771)], i)] = this[_0x12f785(0x85a)][_0x12f785(0x244)](_0x39c491[i], _0x336f60[i], _0x5003cb['QmeGD'](_0x5003cb[_0x12f785(0xa40)], i))[_0x12f785(0x541)](0.5, 0.5)['setInteractive']({
                    'pixelPerfect': !![],
                    'useHandCursor': !![]
                });
            }
            fillbackground = game['scene'][_0x12f785(0x237)][pageNo][_0x12f785(0x85a)][_0x12f785(0x323)](0x0, 0x0, _0x12f785(0x43d))['setOrigin'](0x0, 0x0)[_0x12f785(0xa74)]({
                'pixelPerfect': !![],
                'useHandCursor': !![]
            }), fillbackground[_0x12f785(0xa6e)] = ![], level3doll = this['add']['spine'](0x1a4, 0x104, _0x5003cb[_0x12f785(0x328)]), level3doll[_0x12f785(0x997)](_0x5003cb[_0x12f785(0x1f4)], _0x5003cb[_0x12f785(0x70d)]), level3doll[_0x12f785(0x997)](_0x5003cb[_0x12f785(0x6f6)], _0x12f785(0x2c7)), level3doll['setAttachment'](_0x12f785(0x91f), _0x5003cb[_0x12f785(0x32c)]), level3doll[_0x12f785(0x997)](_0x12f785(0xa48), _0x5003cb[_0x12f785(0x17e)]), level3doll['setAttachment'](_0x12f785(0x530), _0x5003cb[_0x12f785(0x354)]), level3doll[_0x12f785(0x997)](_0x5003cb['EZIJV'], _0x5003cb['NQqnK']), level3doll[_0x12f785(0x997)](_0x12f785(0x55c), 'Face\x20Acc-00'), level3doll[_0x12f785(0x997)](_0x5003cb[_0x12f785(0x3cd)], _0x5003cb[_0x12f785(0xac4)] + marr[0x1]), level3doll[_0x12f785(0x997)](_0x5003cb[_0x12f785(0x61a)], _0x5003cb['ZwcbA'](_0x5003cb[_0x12f785(0x71c)], marr[0x3])), level3doll['setAttachment'](_0x5003cb['IxTuf'], _0x12f785(0x1ad) + marr[0x5]), level3doll[_0x12f785(0x997)](_0x5003cb[_0x12f785(0x4dc)], _0x5003cb[_0x12f785(0x6ad)](_0x5003cb[_0x12f785(0xaa4)], marr[0x6])), level3doll[_0x12f785(0x997)](_0x5003cb[_0x12f785(0x7a0)], _0x5003cb[_0x12f785(0x89a)](_0x5003cb[_0x12f785(0x6e6)], marr[0x7])), level3doll[_0x12f785(0x997)](_0x5003cb[_0x12f785(0x91b)], _0x5003cb[_0x12f785(0x2ec)]), level3doll[_0x12f785(0x997)](_0x5003cb[_0x12f785(0xa75)], _0x5003cb[_0x12f785(0x326)]), level3doll[_0x12f785(0x997)](_0x5003cb['CYvUM'], _0x5003cb[_0x12f785(0x7a6)]), level3doll['setAttachment'](_0x5003cb['gdwhl'], _0x5003cb[_0x12f785(0x99e)]), level3doll[_0x12f785(0x997)](_0x12f785(0x5c9), _0x12f785(0x398)), level3doll['setAttachment'](_0x5003cb[_0x12f785(0x829)], _0x5003cb['UMCrS']), level3doll[_0x12f785(0x997)](_0x12f785(0x796), _0x5003cb[_0x12f785(0xa45)]), level3doll[_0x12f785(0x997)](_0x12f785(0x6a4), _0x5003cb[_0x12f785(0x29b)]), level3doll[_0x12f785(0x997)](_0x5003cb[_0x12f785(0x1e9)], _0x5003cb['dlBOU'](_0x5003cb['mERYZ'], marr[0x0])), level3doll[_0x12f785(0x997)](_0x5003cb['OEBaU'], _0x5003cb['dvOve'] + marr[0x4]), level3doll['setAttachment'](_0x5003cb[_0x12f785(0x46e)], _0x5003cb['VztGF']), level3doll[_0x12f785(0x997)](_0x5003cb[_0x12f785(0x614)], _0x5003cb[_0x12f785(0x614)]), level3doll[_0x12f785(0x997)](_0x12f785(0x251), _0x5003cb['vvwsv']), level3doll[_0x12f785(0x997)](_0x5003cb[_0x12f785(0x8f8)], _0x5003cb['pGLno'](_0x5003cb[_0x12f785(0x883)], marr[0x2])), level3doll[_0x12f785(0x997)](_0x12f785(0x2f5), _0x5003cb[_0x12f785(0x1cf)]), level3doll[_0x12f785(0x997)](_0x5003cb['kgsZL'], _0x5003cb['kgsZL']), level3doll[_0x12f785(0x997)](_0x5003cb['EPylK'], _0x5003cb[_0x12f785(0x87a)]), level3doll[_0x12f785(0x997)](_0x5003cb[_0x12f785(0x2c2)], _0x5003cb[_0x12f785(0x2c2)]), level3doll[_0x12f785(0x997)]('R\x20Hand-02', _0x5003cb[_0x12f785(0x9c7)]), level3doll['setAttachment'](_0x5003cb[_0x12f785(0xa8c)], _0x5003cb[_0x12f785(0xa8c)]), level3doll[_0x12f785(0x3ca)](_0x5003cb['XMLKF'], !![]), level3grp = this[_0x12f785(0x85a)]['container'](), level3grp[_0x12f785(0x85a)](level3doll), level3grp['x'] = -0x3e8, level3doll[_0x12f785(0x997)](_0x12f785(0x488), _0x5003cb[_0x12f785(0x3c9)](_0x5003cb[_0x12f785(0x39e)], darr[0x0])), level3doll[_0x12f785(0x997)](_0x5003cb[_0x12f785(0x88b)], _0x5003cb[_0x12f785(0x65c)](_0x12f785(0x3d8), darr[0x3])), level3doll['setAttachment'](_0x5003cb[_0x12f785(0x91b)], _0x5003cb[_0x12f785(0x446)](_0x5003cb[_0x12f785(0xa6b)], darr[0x2])), level3doll[_0x12f785(0x997)](_0x5003cb[_0x12f785(0xa75)], _0x5003cb[_0x12f785(0x402)](_0x5003cb[_0x12f785(0x36d)], darr[0x1])), level3doll['setAttachment'](_0x12f785(0x391), _0x5003cb[_0x12f785(0x79b)](_0x5003cb[_0x12f785(0x2ee)], darr[0x1])), level3doll[_0x12f785(0x997)](_0x12f785(0x5d9), _0x5003cb[_0x12f785(0x747)](_0x12f785(0x83e), darr[0x0])), level3doll[_0x12f785(0x997)](_0x5003cb[_0x12f785(0x681)], _0x5003cb[_0x12f785(0x9bc)](_0x5003cb['XPXzB'], darr[0x0])), level3doll[_0x12f785(0x997)](_0x12f785(0x751), _0x5003cb[_0x12f785(0x320)](_0x5003cb[_0x12f785(0x889)], darr[0x4])), level3doll[_0x12f785(0x997)](_0x5003cb[_0x12f785(0x5a6)], _0x5003cb['iKbCS'](_0x5003cb[_0x12f785(0x560)], darr[0x5])), level3doll[_0x12f785(0x997)](_0x12f785(0xa48), _0x5003cb[_0x12f785(0x593)](_0x5003cb[_0x12f785(0x506)], darr[0x6])), level3doll[_0x12f785(0x997)](_0x5003cb['EZIJV'], _0x5003cb[_0x12f785(0x5a8)]('Hand\x20Acc-0', darr[0x7])), level3doll[_0x12f785(0x997)](_0x5003cb[_0x12f785(0x996)], _0x5003cb[_0x12f785(0x23a)](_0x5003cb[_0x12f785(0x443)], darr[0x8])), level3doll[_0x12f785(0x997)](_0x12f785(0x58b), _0x5003cb['rUSNI'](_0x12f785(0x5ef), darr[0x0])), cupboardgroup = this[_0x12f785(0x85a)][_0x12f785(0x501)](), cupboardgroup[_0x12f785(0x85a)](level3panel), cupboardgroup[_0x12f785(0x85a)](level3text);
            for (i = 0x8; _0x5003cb['rsvTw'](i, 0x1); i--) {
                var _0xe8cfa3 = _0x12f785(0x1b1)['split']('|'),
                    _0x42bc9d = 0x0;
                while (!![]) {
                    switch (_0xe8cfa3[_0x42bc9d++]) {
                        case '0':
                            cupboardgroup[_0x12f785(0x85a)](game[_0x5003cb['QmeGD'](_0x12f785(0x21f), i)]);
                            continue;
                        case '1':
                            cupboardgroup[_0x12f785(0x85a)](game[_0x5003cb[_0x12f785(0x804)] + i]);
                            continue;
                        case '2':
                            cupboardgroup[_0x12f785(0x85a)](game[_0x5003cb[_0x12f785(0x23a)](_0x12f785(0x4ba), i)]);
                            continue;
                        case '3':
                            cupboardgroup['add'](game[_0x5003cb['kAYyn'](_0x5003cb[_0x12f785(0xa69)], i)]);
                            continue;
                        case '4':
                            cupboardgroup[_0x12f785(0x85a)](game[_0x5003cb[_0x12f785(0x446)](_0x5003cb[_0x12f785(0x35c)], i)]);
                            continue;
                    }
                    break;
                }
            }
            if (_0x5003cb[_0x12f785(0x37d)](showad, 0x1))
                for (i = 0x8; _0x5003cb[_0x12f785(0x4bc)](i, 0x1); i--) {
                    _0x5003cb[_0x12f785(0x30b)](chainarr[i], 0x1) && cupboardgroup[_0x12f785(0x85a)](game[_0x5003cb['Kxlcz'] + i]), _0x5003cb[_0x12f785(0x795)](studarr[i], 0x1) && cupboardgroup['add'](game[_0x5003cb[_0x12f785(0xac0)](_0x5003cb[_0x12f785(0x7d9)], i)]), _0x5003cb['JTUVV'](hairarr[i], 0x1) && cupboardgroup[_0x12f785(0x85a)](game[_0x5003cb[_0x12f785(0x429)](_0x5003cb[_0x12f785(0x83f)], i)]), _0x5003cb[_0x12f785(0x52a)](dressarr[i], 0x1) && cupboardgroup['add'](game[_0x5003cb[_0x12f785(0x271)](_0x5003cb[_0x12f785(0x73b)], i)]), _0x5003cb[_0x12f785(0x40e)](accarr[i], 0x1) && cupboardgroup[_0x12f785(0x85a)](game[_0x5003cb[_0x12f785(0x45c)](_0x5003cb[_0x12f785(0x660)], i)]);
                }
            for (i = 0x5; _0x5003cb['pSsQB'](i, 0x1); i--) {
                cupboardgroup[_0x12f785(0x85a)](game[_0x5003cb[_0x12f785(0x87b)] + i]);
            }
            for (i = 0x9; _0x5003cb[_0x12f785(0x958)](i, 0x1); i--) {
                cupboardgroup[_0x12f785(0x85a)](game[_0x5003cb[_0x12f785(0x673)](_0x5003cb[_0x12f785(0x2ff)], i)]);
            }
            cupboardgroup['x'] = 0x320, cupboardgroup1 = this['add']['container']();
            for (i = 0x3; _0x5003cb[_0x12f785(0x5ab)](i, 0x1); i--) {
                cupboardgroup1[_0x12f785(0x85a)](game[_0x5003cb[_0x12f785(0x5e7)](_0x5003cb['VACze'], i)]);
            }
            cupboardgroup1['x'] = -0x320, flashshape = this[_0x12f785(0x85a)][_0x12f785(0x6b2)](), flashshape[_0x12f785(0x3d0)](0xffffff, 0x1), flashshape[_0x12f785(0xa44)](0x0, 0x0, 0x50a, 0x356), flashshape[_0x12f785(0xa6e)] = ![], rarrow = this[_0x12f785(0x85a)][_0x12f785(0x244)](0x304, 0x238, _0x5003cb[_0x12f785(0x407)])['setOrigin'](0.5)[_0x12f785(0xa74)]({
                'useHandCursor': !![]
            }), larrow = this[_0x12f785(0x85a)][_0x12f785(0x244)](0x3a7, 0x238, _0x5003cb[_0x12f785(0x407)])[_0x12f785(0x541)](0.5)['setInteractive']({
                'useHandCursor': !![]
            }), rarrow['setScale'](0x1, 0x1), larrow[_0x12f785(0x67d)](-0x1, 0x1), game[_0x12f785(0x374)]['scenes'][pageNo][_0x12f785(0x465)][_0x12f785(0x85a)]({
                'targets': rarrow,
                'x': _0x5003cb['QExYj'](rarrow['x'], 0x4),
                'ease': _0x5003cb['ITzrd'],
                'duration': 0x2bc,
                'repeat': -0x1,
                'yoyo': !![]
            }), game['scene']['scenes'][pageNo][_0x12f785(0x465)][_0x12f785(0x85a)]({
                'targets': larrow,
                'x': _0x5003cb['JCFgb'](larrow['x'], 0x4),
                'ease': _0x5003cb[_0x12f785(0x2cd)],
                'duration': 0x2bc,
                'repeat': -0x1,
                'yoyo': !![]
            }), cupboardgroup['add'](rarrow), cupboardgroup['add'](larrow), cupboardgroup['y'] = 0xa, dressgliter = this['add'][_0x12f785(0x244)](410.85, 304.9, 'dressgliter')[_0x12f785(0x541)](0.5, 0.5), anim = this[_0x12f785(0x86e)][_0x12f785(0x350)]({
                'key': _0x12f785(0x72e),
                'frames': this['anims'][_0x12f785(0x173)](_0x12f785(0x72e), {
                    'start': 0x0,
                    'end': 0x20
                }),
                'frameRate': 0x1e
            }), dressgliter[_0x12f785(0x6ba)](Phaser[_0x12f785(0x2b2)][_0x12f785(0x34c)]), dollgliter = this[_0x12f785(0x85a)]['sprite'](0x111, 0x48, _0x12f785(0x548)), anim = this[_0x12f785(0x86e)][_0x12f785(0x350)]({
                'key': _0x12f785(0x548),
                'frames': this[_0x12f785(0x86e)]['generateFrameNumbers'](_0x5003cb[_0x12f785(0x8e4)], {
                    'start': 0x0,
                    'end': 0x24
                }),
                'frameRate': 0x1e
            }), done2 = this[_0x12f785(0x85a)][_0x12f785(0x244)](0x8c, 0x212, _0x5003cb[_0x12f785(0x936)])['setOrigin'](0.5, 0.5)[_0x12f785(0xa74)]({
                'pixelPerfect': !![],
                'useHandCursor': !![]
            }), anim = game[_0x12f785(0x374)]['scenes'][pageNo][_0x12f785(0x86e)][_0x12f785(0x350)]({
                'key': _0x12f785(0x1e5),
                'frames': game[_0x12f785(0x374)][_0x12f785(0x237)][pageNo]['anims'][_0x12f785(0x173)](_0x5003cb[_0x12f785(0x936)], {
                    'start': 0x0,
                    'end': 0x9
                }),
                'frameRate': 0x18
            }), done2[_0x12f785(0xa6e)] = ![], _0x5003cb[_0x12f785(0x9d2)](logomutefun), _0x5003cb['APAjY'](transitionOut), this[_0x12f785(0x742)]['on'](_0x5003cb['sdaEn'], function() {
                loadFinish = !![];
            }), this[_0x12f785(0x742)][_0x12f785(0x26f)]();
        }
    });

function level3start() {
    var _0x222a04 = _0x192e21,
        _0x2cc681 = {
            'XBJvz': _0x222a04(0x528),
            'MhodU': function(_0x381cd5, _0x3732a4) {
                return _0x381cd5 + _0x3732a4;
            },
            'nSSvY': _0x222a04(0x539),
            'ZGlgI': _0x222a04(0x622),
            'kuXZL': _0x222a04(0xa98),
            'LFPPs': _0x222a04(0x5af),
            'EPxkR': _0x222a04(0x592),
            'vqsAc': function(_0x24af6c, _0x578b1c) {
                return _0x24af6c + _0x578b1c;
            },
            'vcZzG': _0x222a04(0x730),
            'HjKnK': 'success',
            'zKXJH': function(_0x4d4cf3, _0x41a2d7) {
                return _0x4d4cf3(_0x41a2d7);
            },
            'opNjx': function(_0x20b23a, _0x358486) {
                return _0x20b23a(_0x358486);
            },
            'pyOuc': _0x222a04(0x2e7),
            'XdVeH': function(_0x1cc531, _0x1fc0db) {
                return _0x1cc531(_0x1fc0db);
            },
            'eKWGO': 'level3dressvideo',
            'zgXPE': function(_0x59fa93, _0x1c48ac) {
                return _0x59fa93(_0x1c48ac);
            },
            'AZnRH': function(_0x23f31e, _0x30baf0) {
                return _0x23f31e(_0x30baf0);
            },
            'ZAQJQ': _0x222a04(0x623),
            'vgtzZ': _0x222a04(0x8d5),
            'ZOujq': function(_0x107a55, _0x438b41) {
                return _0x107a55(_0x438b41);
            },
            'gPEsH': _0x222a04(0xa42),
            'pjPUx': function(_0x1c2c9a, _0x32905d) {
                return _0x1c2c9a !== _0x32905d;
            },
            'BvcFU': _0x222a04(0x3ab),
            'ctuSi': _0x222a04(0x4c8),
            'GSXWH': _0x222a04(0x76d),
            'cEvoF': function(_0x3100fd, _0xbaece8) {
                return _0x3100fd + _0xbaece8;
            },
            'cJucG': 'Hand\x20Acc-0',
            'FpIJE': _0x222a04(0x91f),
            'tTYyu': function(_0xbc71d4, _0x338478) {
                return _0xbc71d4 + _0x338478;
            },
            'kvLpZ': _0x222a04(0x850),
            'rwbzB': function(_0x3568d3, _0x50d5d9) {
                return _0x3568d3 + _0x50d5d9;
            },
            'PmFMj': _0x222a04(0x6a2),
            'ltYxz': _0x222a04(0x55c),
            'ZWaCf': _0x222a04(0x530),
            'RgSvE': function(_0x32a153, _0x2e5def) {
                return _0x32a153 + _0x2e5def;
            },
            'xSKFu': _0x222a04(0x472),
            'SSFbp': 'glitter',
            'IMGyM': 'Linear',
            'Xibaa': _0x222a04(0x5c9),
            'fttcn': function(_0x5bed0d, _0x16c93b) {
                return _0x5bed0d + _0x16c93b;
            },
            'ecHgX': _0x222a04(0x240),
            'sECpg': function(_0x499755) {
                return _0x499755();
            },
            'KKNau': _0x222a04(0x58b),
            'KJzlI': _0x222a04(0x5ef),
            'DtMRE': _0x222a04(0x8b0),
            'iZXmD': function(_0x589442, _0x5d89ba) {
                return _0x589442 + _0x5d89ba;
            },
            'TfNvF': _0x222a04(0x976),
            'gOgvB': _0x222a04(0x488),
            'VQesN': _0x222a04(0x19a),
            'dZqDE': _0x222a04(0x5d9),
            'ZIbDG': 'L\x20Hand\x20Dress-0',
            'cmhTv': function(_0x589ff2, _0x4581d6) {
                return _0x589ff2 + _0x4581d6;
            },
            'Fyetw': 'Hair-0',
            'OFoNj': function(_0x11c464, _0x1ec1c1) {
                return _0x11c464 == _0x1ec1c1;
            },
            'MBFNf': _0x222a04(0x968),
            'AkGDK': function(_0x12f051, _0x168e8a) {
                return _0x12f051 > _0x168e8a;
            },
            'sZMxu': function(_0x4ddda2, _0x45c04a) {
                return _0x4ddda2 > _0x45c04a;
            },
            'FAGIZ': function(_0x4216fb, _0x23b7be) {
                return _0x4216fb == _0x23b7be;
            },
            'AZKaG': function(_0x4e06a0, _0x47df53) {
                return _0x4e06a0 > _0x47df53;
            },
            'dzTVO': function(_0x4281da, _0x3c9f91) {
                return _0x4281da == _0x3c9f91;
            },
            'nJZaz': _0x222a04(0x751),
            'afxqD': _0x222a04(0x3ad),
            'LYLHY': _0x222a04(0x1fb),
            'kizBg': _0x222a04(0x6a1),
            'eQoQN': _0x222a04(0x641),
            'WLeLT': 'R\x20Hand\x20Dress-00',
            'RmBNb': 'Back\x20Acc',
            'uJjgw': _0x222a04(0x60a),
            'yNUhH': _0x222a04(0x2bf),
            'GrDIr': 'L\x20Hand\x20Dress-00',
            'aFsVA': _0x222a04(0x62a),
            'ETSEf': function(_0x3458de) {
                return _0x3458de();
            },
            'PWVid': _0x222a04(0x51a),
            'LoWXD': _0x222a04(0x391),
            'QVRGF': _0x222a04(0x77c),
            'SbBFt': _0x222a04(0x482),
            'bwebK': _0x222a04(0x2c7),
            'LZnyd': _0x222a04(0x394),
            'IYqrh': _0x222a04(0x85e),
            'ffVtC': '3|7|0|2|8|1|4|9|5|6',
            'uOrcq': _0x222a04(0x851),
            'dWREh': _0x222a04(0x739),
            'vgUwT': function(_0x31a9eb, _0x483863, _0x2598e7) {
                return _0x31a9eb(_0x483863, _0x2598e7);
            },
            'ntLkQ': function(_0x46fe18, _0x3d2f68) {
                return _0x46fe18(_0x3d2f68);
            },
            'ktkCI': function(_0x1e3dcd, _0x2cfbbd) {
                return _0x1e3dcd(_0x2cfbbd);
            },
            'KpnGX': _0x222a04(0x687),
            'tSlIj': _0x222a04(0x4e5),
            'bJeyy': function(_0x4078f4, _0x31d893) {
                return _0x4078f4 == _0x31d893;
            },
            'IiBck': function(_0x1fca40, _0x182b62) {
                return _0x1fca40(_0x182b62);
            },
            'mrhyR': function(_0x4b3e26, _0x1474e5) {
                return _0x4b3e26 == _0x1474e5;
            },
            'iOMui': function(_0x242d1e, _0xaaabf4) {
                return _0x242d1e(_0xaaabf4);
            },
            'XxLcv': function(_0x36885b, _0x561f2c) {
                return _0x36885b == _0x561f2c;
            },
            'MnBDq': function(_0x27a6b4, _0x1e4233) {
                return _0x27a6b4(_0x1e4233);
            },
            'nSDjM': function(_0x1d57eb, _0xdf7c70) {
                return _0x1d57eb + _0xdf7c70;
            },
            'QIiMa': function(_0x2b560d, _0x17c1bf) {
                return _0x2b560d + _0x17c1bf;
            },
            'BCZsf': _0x222a04(0x27b),
            'PBWCj': function(_0x1d9380, _0x1dda82) {
                return _0x1d9380 == _0x1dda82;
            },
            'EbzXH': function(_0x4b504e, _0x28dd0e) {
                return _0x4b504e == _0x28dd0e;
            },
            'JUehE': function(_0x39d7e3, _0x3429ab) {
                return _0x39d7e3(_0x3429ab);
            },
            'Drwrv': _0x222a04(0x72e),
            'ZXHBp': function(_0x2a3c1c, _0x3ad235) {
                return _0x2a3c1c == _0x3ad235;
            },
            'KTjUO': function(_0x109940, _0x21d754) {
                return _0x109940 == _0x21d754;
            },
            'aUDHr': _0x222a04(0x765),
            'hrsoc': function(_0x3b9d9d, _0xcbfde) {
                return _0x3b9d9d(_0xcbfde);
            },
            'BHVLq': function(_0x1eebfd, _0x450eb9) {
                return _0x1eebfd == _0x450eb9;
            },
            'vwHDf': function(_0x27f304, _0x248992) {
                return _0x27f304(_0x248992);
            },
            'vYWLO': function(_0x383d64) {
                return _0x383d64();
            },
            'OxFVO': function(_0x4675c5, _0x278d62) {
                return _0x4675c5 == _0x278d62;
            },
            'wkHnZ': _0x222a04(0x831),
            'ZLMJe': function(_0x5f0ddf, _0x433ae6) {
                return _0x5f0ddf(_0x433ae6);
            },
            'bCnOc': function(_0x556e2f, _0x47fd9a) {
                return _0x556e2f + _0x47fd9a;
            },
            'YcIDO': _0x222a04(0x4d7),
            'qrOxk': function(_0x12b969, _0x55e93c) {
                return _0x12b969(_0x55e93c);
            },
            'fIYKs': function(_0x2f1771, _0x5bddec) {
                return _0x2f1771 == _0x5bddec;
            },
            'FRxPP': function(_0x5219c5, _0x22649b) {
                return _0x5219c5(_0x22649b);
            },
            'oMQrs': function(_0x41b983, _0x135350) {
                return _0x41b983 == _0x135350;
            },
            'zNXMs': function(_0x102af8, _0x10f169) {
                return _0x102af8(_0x10f169);
            },
            'svdRV': _0x222a04(0x470),
            'wQnzr': function(_0x4f2884, _0x37d94b) {
                return _0x4f2884 == _0x37d94b;
            },
            'TrsGN': function(_0x57c2c6, _0x54e7ce) {
                return _0x57c2c6 == _0x54e7ce;
            },
            'SLDCt': function(_0x4bf0c9, _0x5011ae) {
                return _0x4bf0c9(_0x5011ae);
            },
            'Djsfz': _0x222a04(0x881),
            'ZjabX': function(_0x2abd20) {
                return _0x2abd20();
            },
            'glQWY': function(_0x5ef71d, _0x21018b) {
                return _0x5ef71d(_0x21018b);
            },
            'MwHGY': function(_0x3f3236, _0xfa7f0a) {
                return _0x3f3236(_0xfa7f0a);
            },
            'YhrGl': function(_0x41e41e, _0x189f3f) {
                return _0x41e41e(_0x189f3f);
            },
            'gsIKO': function(_0x60ccb9, _0xa454bd) {
                return _0x60ccb9 == _0xa454bd;
            },
            'ArrCQ': function(_0x54c99e, _0x207380) {
                return _0x54c99e(_0x207380);
            },
            'qZtyx': function(_0x55839b, _0x27dc66) {
                return _0x55839b(_0x27dc66);
            },
            'aQELZ': _0x222a04(0x481),
            'JHVQa': function(_0x2c3515, _0x24f5c3) {
                return _0x2c3515(_0x24f5c3);
            },
            'vPeHi': function(_0x135249) {
                return _0x135249();
            },
            'uzAxw': function(_0xeb69ca, _0x335903) {
                return _0xeb69ca == _0x335903;
            },
            'OhGMA': function(_0x44d4fa, _0xd4fde9) {
                return _0x44d4fa(_0xd4fde9);
            },
            'LIkgF': function(_0x25de2a, _0x590d26) {
                return _0x25de2a(_0x590d26);
            },
            'ZUUop': function(_0x3f5ea7, _0x17fc8a) {
                return _0x3f5ea7 == _0x17fc8a;
            },
            'szZUl': 'Back\x20Hair-00',
            'cpeiN': function(_0x586e9c, _0x4886ab) {
                return _0x586e9c == _0x4886ab;
            },
            'gZntB': function(_0xad20f, _0x591521) {
                return _0xad20f(_0x591521);
            },
            'lSNcp': function(_0x5985de, _0x39e42f) {
                return _0x5985de + _0x39e42f;
            },
            'ZTZDG': function(_0x3c059e, _0x71f975) {
                return _0x3c059e == _0x71f975;
            },
            'syfnz': _0x222a04(0x6d0),
            'EkZIe': function(_0x5abcb3, _0x45e054) {
                return _0x5abcb3 + _0x45e054;
            },
            'taHJS': function(_0x4fff6e) {
                return _0x4fff6e();
            },
            'RhNzk': function(_0x1d410c, _0x148699) {
                return _0x1d410c == _0x148699;
            },
            'pSZds': _0x222a04(0x3d8),
            'lXXry': function(_0x38be23, _0x2b3df0) {
                return _0x38be23(_0x2b3df0);
            },
            'xNqTf': function(_0x3895c7) {
                return _0x3895c7();
            },
            'LQIEp': function(_0x1926c8, _0xe9869b) {
                return _0x1926c8 == _0xe9869b;
            },
            'kzSid': function(_0x291514, _0x4e11f0) {
                return _0x291514 == _0x4e11f0;
            },
            'toKnC': function(_0x569a0d, _0x27f00a) {
                return _0x569a0d == _0x27f00a;
            },
            'amzqp': function(_0x1590e1, _0x234732) {
                return _0x1590e1 + _0x234732;
            },
            'BdEMZ': function(_0x550b4b) {
                return _0x550b4b();
            },
            'FrstW': function(_0x1c8cf8, _0x11cd95) {
                return _0x1c8cf8 == _0x11cd95;
            },
            'sILPA': function(_0x5a8e61, _0xbb91d6) {
                return _0x5a8e61 >= _0xbb91d6;
            },
            'mJuba': _0x222a04(0x4ba),
            'TJnTS': _0x222a04(0x338),
            'odAdK': _0x222a04(0x637),
            'LUYlu': function(_0x3329d9, _0x3188a7) {
                return _0x3329d9 + _0x3188a7;
            },
            'itkEb': _0x222a04(0x8ac),
            'RUYcw': _0x222a04(0x82f),
            'ZlhTF': function(_0x7b6fe7, _0x4fe35a) {
                return _0x7b6fe7 + _0x4fe35a;
            },
            'ujTec': function(_0x3298d6, _0x40c52c) {
                return _0x3298d6 >= _0x40c52c;
            },
            'YPEUd': function(_0x6dc4db, _0x23403a) {
                return _0x6dc4db + _0x23403a;
            },
            'ilSMo': _0x222a04(0x7e0),
            'JfciP': function(_0x25aed5, _0x18a109) {
                return _0x25aed5 + _0x18a109;
            },
            'xGwVt': function(_0x524627, _0x663a17) {
                return _0x524627 + _0x663a17;
            },
            'qsdGC': _0x222a04(0x949),
            'FkqrW': function(_0x25fd95, _0xfe2052) {
                return _0x25fd95 + _0xfe2052;
            },
            'BOXrZ': function(_0x1ea271, _0x434e49) {
                return _0x1ea271 + _0x434e49;
            },
            'xgBaE': function(_0xd7cb0, _0x5a6305) {
                return _0xd7cb0 + _0x5a6305;
            },
            'wDUjS': function(_0x56a328, _0x482ea7) {
                return _0x56a328 + _0x482ea7;
            },
            'eJCEp': function(_0x1d71a8, _0x5c3efd) {
                return _0x1d71a8 + _0x5c3efd;
            },
            'dGeja': function(_0x2d407a, _0x5b0b5f) {
                return _0x2d407a >= _0x5b0b5f;
            },
            'QPTKH': function(_0x44d28f, _0x29daa4) {
                return _0x44d28f + _0x29daa4;
            },
            'Zesvc': function(_0x1d0a2f, _0xa544c3) {
                return _0x1d0a2f >= _0xa544c3;
            },
            'XuxQs': function(_0x258b24, _0x5ccb71) {
                return _0x258b24 + _0x5ccb71;
            },
            'EpzIK': function(_0x29e5d9, _0x5b8b0d) {
                return _0x29e5d9 + _0x5b8b0d;
            },
            'GKqAV': function(_0x249f21, _0x2cca0b) {
                return _0x249f21 + _0x2cca0b;
            },
            'HGBYm': function(_0x2919c8, _0x3467b2) {
                return _0x2919c8 + _0x3467b2;
            },
            'lgMSU': _0x222a04(0x21f),
            'PCnlu': function(_0x514910, _0x174422) {
                return _0x514910 == _0x174422;
            },
            'qaOFk': function(_0x57d16e, _0x397b36) {
                return _0x57d16e + _0x397b36;
            },
            'LwOZr': function(_0x373aa7, _0x2e0354) {
                return _0x373aa7 <= _0x2e0354;
            },
            'lknOM': function(_0xc4b6a0, _0x3dbd09) {
                return _0xc4b6a0 + _0x3dbd09;
            },
            'IulSz': function(_0x164162, _0x25aff2) {
                return _0x164162 + _0x25aff2;
            },
            'Dnntf': _0x222a04(0x487),
            'eFEUK': function(_0x4d85e8, _0x3d7786) {
                return _0x4d85e8 >= _0x3d7786;
            },
            'ywshS': _0x222a04(0x811),
            'lXWpY': function(_0x224a30, _0x25c29f) {
                return _0x224a30 + _0x25c29f;
            },
            'Blqzg': function(_0x4e04f0, _0x22024e) {
                return _0x4e04f0 == _0x22024e;
            },
            'xbeom': function(_0x14b58a, _0x3b925e) {
                return _0x14b58a == _0x3b925e;
            },
            'diwXm': function(_0x3e21c9, _0x4eb678) {
                return _0x3e21c9 + _0x4eb678;
            },
            'ThNRt': function(_0x54ac43, _0x523d8e) {
                return _0x54ac43 + _0x523d8e;
            },
            'zEKpL': _0x222a04(0x8e9),
            'qNbiP': function(_0x3a2512, _0x87572f) {
                return _0x3a2512 >= _0x87572f;
            },
            'qFRsl': function(_0x5b6658, _0x29d479) {
                return _0x5b6658 + _0x29d479;
            },
            'Xwolk': function(_0x33de34, _0x51200c) {
                return _0x33de34 + _0x51200c;
            },
            'DGqNx': function(_0x5005a5, _0x251537) {
                return _0x5005a5 <= _0x251537;
            },
            'jBnVg': function(_0x193bf4, _0x30650c) {
                return _0x193bf4 + _0x30650c;
            },
            'zseJj': function(_0x15b8b3, _0x442e56) {
                return _0x15b8b3 <= _0x442e56;
            },
            'hkNzp': function(_0x3a35cf, _0x269950) {
                return _0x3a35cf == _0x269950;
            },
            'RjIcW': function(_0x52d150, _0x4f81fc) {
                return _0x52d150 + _0x4f81fc;
            },
            'xXNyV': function(_0x249f25, _0x2d48e2) {
                return _0x249f25 + _0x2d48e2;
            },
            'FMNEw': function(_0x5e599b, _0x4de080) {
                return _0x5e599b + _0x4de080;
            },
            'iPDKX': function(_0x43bd6a, _0x34a961) {
                return _0x43bd6a <= _0x34a961;
            },
            'SGLeO': function(_0x1dff8b, _0x1522a2) {
                return _0x1dff8b + _0x1522a2;
            },
            'eJyjB': function(_0x1fca10, _0x1f912b) {
                return _0x1fca10 + _0x1f912b;
            },
            'wvwZN': function(_0x21c676, _0x28bd86) {
                return _0x21c676 + _0x28bd86;
            },
            'EJdfo': function(_0x284392, _0x42699d) {
                return _0x284392 + _0x42699d;
            },
            'jPsut': function(_0x301e55, _0x2cfb7a) {
                return _0x301e55 + _0x2cfb7a;
            },
            'hOZpY': function(_0x3472de, _0x18ab8c) {
                return _0x3472de == _0x18ab8c;
            },
            'syfRw': function(_0x15db94, _0x2d0503) {
                return _0x15db94 == _0x2d0503;
            },
            'ZePQS': function(_0x42cd7a, _0x58d4a4) {
                return _0x42cd7a + _0x58d4a4;
            },
            'eEywP': function(_0x4c23f1, _0x30550c) {
                return _0x4c23f1 == _0x30550c;
            },
            'Isngk': function(_0x34b54b, _0x5f152a) {
                return _0x34b54b <= _0x5f152a;
            },
            'KVFRp': function(_0x4b5e1e, _0x25972a) {
                return _0x4b5e1e + _0x25972a;
            },
            'dGQWf': function(_0x408d64, _0x72a1a2) {
                return _0x408d64 >= _0x72a1a2;
            },
            'fkoGi': function(_0x3b680c, _0x469e3c) {
                return _0x3b680c == _0x469e3c;
            },
            'DoRFJ': function(_0x220957, _0x10265d) {
                return _0x220957 <= _0x10265d;
            },
            'yGuBc': function(_0x215fc7, _0x12d7a8) {
                return _0x215fc7 + _0x12d7a8;
            },
            'byYVY': '3|4|0|1|2',
            'FMKKn': function(_0x344843, _0x4edebf) {
                return _0x344843 + _0x4edebf;
            },
            'GNwkI': function(_0x1c70ab, _0x29dec1) {
                return _0x1c70ab >= _0x29dec1;
            },
            'jtSkp': function(_0x4c2615, _0x46c2da) {
                return _0x4c2615 + _0x46c2da;
            },
            'YPzNY': function(_0x4fb3d3, _0x32a554) {
                return _0x4fb3d3 == _0x32a554;
            },
            'RoTzF': _0x222a04(0x6aa),
            'gXCeO': function(_0x4192ec, _0x16b70c) {
                return _0x4192ec == _0x16b70c;
            },
            'nZnGN': function(_0x2666fb, _0x3a1e9a) {
                return _0x2666fb + _0x3a1e9a;
            },
            'OwLuL': function(_0x56b41a, _0x598871) {
                return _0x56b41a == _0x598871;
            },
            'QlgTL': function(_0x32c2b6, _0x2154c5) {
                return _0x32c2b6 == _0x2154c5;
            },
            'qlQhz': function(_0x2e9ec3, _0x2904ed) {
                return _0x2e9ec3 + _0x2904ed;
            },
            'iPSXy': _0x222a04(0x490),
            'wJuGK': function(_0x3731bd, _0xdcda6e) {
                return _0x3731bd <= _0xdcda6e;
            },
            'UykAg': function(_0x37165c, _0x2abd49) {
                return _0x37165c + _0x2abd49;
            },
            'wqeoO': function(_0x2bb52f, _0x95712d) {
                return _0x2bb52f == _0x95712d;
            },
            'BIkIN': _0x222a04(0xaa8),
            'hgXuY': function(_0xdea00c, _0x37929f) {
                return _0xdea00c == _0x37929f;
            },
            'FHIzt': function(_0x4b5b6a, _0x3bc184) {
                return _0x4b5b6a + _0x3bc184;
            },
            'hDspX': function(_0x300f94, _0x1ff3af) {
                return _0x300f94 + _0x1ff3af;
            },
            'cefzv': function(_0xc4682c, _0x476da9) {
                return _0xc4682c == _0x476da9;
            },
            'aFzoo': function(_0x397105, _0xe9ced4) {
                return _0x397105 <= _0xe9ced4;
            },
            'iJKCT': _0x222a04(0x208),
            'hVYAl': function(_0x5aca54, _0x459160) {
                return _0x5aca54 + _0x459160;
            },
            'HAtHf': function(_0x19e569, _0x3af8f3) {
                return _0x19e569 + _0x3af8f3;
            },
            'ePeFh': function(_0x4f2a20, _0x437ce9) {
                return _0x4f2a20(_0x437ce9);
            },
            'bsxcx': _0x222a04(0x5bb),
            'EnHLH': function(_0x1cf479, _0x572d8d) {
                return _0x1cf479 <= _0x572d8d;
            },
            'WOvdh': function(_0xe8a8e0, _0x437c34) {
                return _0xe8a8e0 == _0x437c34;
            },
            'GvhZu': function(_0x3e72ed, _0x4bfb77) {
                return _0x3e72ed >= _0x4bfb77;
            },
            'VaMYl': function(_0x3a8d9f, _0x27cc6a) {
                return _0x3a8d9f == _0x27cc6a;
            },
            'VjBNc': '3|2|4|0|1',
            'OqCsE': function(_0x54e3fe, _0x4fcc81) {
                return _0x54e3fe == _0x4fcc81;
            },
            'NNrrs': _0x222a04(0x364),
            'XRNzW': function(_0x2d9070, _0x5f2aac) {
                return _0x2d9070 + _0x5f2aac;
            },
            'GClAt': function(_0xb48a78, _0x5f077e) {
                return _0xb48a78 + _0x5f077e;
            },
            'UEPFr': function(_0x5735e6, _0x31becb) {
                return _0x5735e6 <= _0x31becb;
            },
            'dCOuy': function(_0x4089a6, _0x31f422) {
                return _0x4089a6 + _0x31f422;
            },
            'TxOwD': function(_0x39c011, _0x2c1503) {
                return _0x39c011 + _0x2c1503;
            },
            'Fhjzm': function(_0x1d1892, _0x36ad2c) {
                return _0x1d1892 + _0x36ad2c;
            },
            'qHfUI': function(_0x5b8c7b, _0xf05e2a) {
                return _0x5b8c7b + _0xf05e2a;
            },
            'IiQzW': _0x222a04(0x216),
            'KowbP': function(_0x39b293, _0x38eef0) {
                return _0x39b293 + _0x38eef0;
            },
            'oAIDF': function(_0x391ef5, _0x1a89a1) {
                return _0x391ef5 + _0x1a89a1;
            },
            'IulER': function(_0x4ac25d, _0x18f867) {
                return _0x4ac25d + _0x18f867;
            },
            'NWvfH': function(_0x19421b, _0x3720ad) {
                return _0x19421b + _0x3720ad;
            },
            'kosAs': function(_0x3d480c, _0x10a82c) {
                return _0x3d480c + _0x10a82c;
            },
            'HApSm': function(_0x38db54, _0x5eb3af) {
                return _0x38db54 + _0x5eb3af;
            },
            'NcvOQ': function(_0x5c1b6f, _0x590739) {
                return _0x5c1b6f + _0x590739;
            },
            'mwGin': function(_0x157f36, _0x413325) {
                return _0x157f36 <= _0x413325;
            },
            'Qpqwk': function(_0x328b9c, _0x7c487c) {
                return _0x328b9c + _0x7c487c;
            },
            'TegxG': function(_0x2e7a03, _0x21b83f) {
                return _0x2e7a03 <= _0x21b83f;
            },
            'ukBqJ': function(_0x2c48d9, _0x102d17) {
                return _0x2c48d9 + _0x102d17;
            },
            'espnW': function(_0x3c7f8d, _0x44ed48) {
                return _0x3c7f8d + _0x44ed48;
            },
            'iMBLJ': function(_0xf68a2d, _0x5abfb8) {
                return _0xf68a2d >= _0x5abfb8;
            },
            'tASCF': function(_0x3829f9, _0x43ec1a) {
                return _0x3829f9 + _0x43ec1a;
            },
            'WJlJP': function(_0x3b76e4, _0x2a573f) {
                return _0x3b76e4 == _0x2a573f;
            },
            'vtqiH': function(_0x1e8271, _0x208d54) {
                return _0x1e8271 == _0x208d54;
            },
            'jVSFd': function(_0x134345, _0x29433d) {
                return _0x134345 == _0x29433d;
            },
            'jJAys': function(_0x116d69, _0x713ef2) {
                return _0x116d69 + _0x713ef2;
            },
            'ZnNWW': function(_0x3a44c9, _0x2c0fcd) {
                return _0x3a44c9 <= _0x2c0fcd;
            },
            'oyWFL': function(_0x21e576, _0x156157) {
                return _0x21e576 + _0x156157;
            },
            'LiiLm': function(_0xc0afce, _0x34e4ac) {
                return _0xc0afce + _0x34e4ac;
            },
            'NiOch': function(_0x29eb26, _0x48970f) {
                return _0x29eb26 + _0x48970f;
            },
            'ezBmY': function(_0x6eec0f, _0xb83224) {
                return _0x6eec0f >= _0xb83224;
            },
            'XQUar': _0x222a04(0x848),
            'rWQJo': function(_0x29c31c, _0xde0418) {
                return _0x29c31c == _0xde0418;
            },
            'AYfJJ': function(_0x11049f, _0x2bf2f2) {
                return _0x11049f + _0x2bf2f2;
            },
            'rkoFd': function(_0x434fa7, _0x2aae08) {
                return _0x434fa7 == _0x2aae08;
            },
            'zJUyB': function(_0xb9b216, _0x2e04ad) {
                return _0xb9b216 + _0x2e04ad;
            },
            'bBulu': function(_0xae6423, _0x24e26c) {
                return _0xae6423 >= _0x24e26c;
            },
            'wALAr': function(_0x5e91f6, _0x5bfd41) {
                return _0x5e91f6 == _0x5bfd41;
            },
            'KxZpl': _0x222a04(0x8ca),
            'Rbjsy': function(_0x49536e, _0x1586dd) {
                return _0x49536e >= _0x1586dd;
            },
            'cQpPf': '1|3|0|4|2',
            'qpxkC': function(_0x164a91, _0x1da7cf) {
                return _0x164a91 + _0x1da7cf;
            },
            'GFadf': function(_0x4ae3bc, _0x5ee0bd) {
                return _0x4ae3bc + _0x5ee0bd;
            },
            'iMloV': function(_0x4fb28a, _0x360c6a) {
                return _0x4fb28a + _0x360c6a;
            },
            'XrUYG': function(_0xb7a7b, _0xb642eb) {
                return _0xb7a7b + _0xb642eb;
            },
            'Nioyj': function(_0x567ead, _0x891436) {
                return _0x567ead == _0x891436;
            },
            'cOuzm': function(_0x213791, _0x219077) {
                return _0x213791 + _0x219077;
            },
            'khiIZ': function(_0x492822, _0x5e656e) {
                return _0x492822 <= _0x5e656e;
            },
            'jFISf': function(_0x3256e3, _0x47144d) {
                return _0x3256e3 <= _0x47144d;
            },
            'crSaC': function(_0x2446fa, _0x5792f0) {
                return _0x2446fa + _0x5792f0;
            },
            'OLPWv': function(_0x534b13, _0x5c4ab8) {
                return _0x534b13 + _0x5c4ab8;
            },
            'YfaIv': function(_0x2f0666, _0x373c9f) {
                return _0x2f0666 + _0x373c9f;
            },
            'YoGbq': function(_0x1f7c57, _0x80ace8) {
                return _0x1f7c57 + _0x80ace8;
            },
            'dweUe': function(_0x56772e, _0x3c4c16) {
                return _0x56772e + _0x3c4c16;
            },
            'WjIra': function(_0x14d3b2, _0x4f7234) {
                return _0x14d3b2 + _0x4f7234;
            },
            'IwyQD': function(_0x16bb45) {
                return _0x16bb45();
            },
            'ZMHHG': function(_0x149cb9, _0x5d7f5a) {
                return _0x149cb9 + _0x5d7f5a;
            },
            'rvDMt': function(_0x1d249a, _0x471778) {
                return _0x1d249a == _0x471778;
            },
            'jjUkN': function(_0xb1ce9b, _0x5d29d6) {
                return _0xb1ce9b == _0x5d29d6;
            },
            'JxBcG': function(_0x118125, _0x4215d1) {
                return _0x118125 == _0x4215d1;
            },
            'VPWTL': function(_0x221ed2, _0x3082b8) {
                return _0x221ed2 + _0x3082b8;
            },
            'XtvFa': function(_0x33f81b, _0x12c42c) {
                return _0x33f81b + _0x12c42c;
            },
            'PzBif': function(_0x311bb4, _0x2d26f6) {
                return _0x311bb4 + _0x2d26f6;
            },
            'fCZUW': _0x222a04(0x36e),
            'YKwzi': function(_0x39e543, _0x4ff19f) {
                return _0x39e543 == _0x4ff19f;
            },
            'ErHRI': function(_0x31c4e6, _0x562126) {
                return _0x31c4e6 + _0x562126;
            },
            'spoPQ': function(_0x1da8f3, _0x385900) {
                return _0x1da8f3 == _0x385900;
            },
            'MerjJ': function(_0x187617, _0x4ea347) {
                return _0x187617 == _0x4ea347;
            },
            'zktZf': function(_0x2c4c7b, _0x39898d) {
                return _0x2c4c7b == _0x39898d;
            },
            'bsmiB': function(_0x55541a, _0x3f1699) {
                return _0x55541a + _0x3f1699;
            },
            'JKvSr': function(_0x24ce71, _0x169180) {
                return _0x24ce71 <= _0x169180;
            },
            'NCLQj': _0x222a04(0x2b4),
            'ucmqD': function(_0x65985, _0x3944a6) {
                return _0x65985 + _0x3944a6;
            },
            'dSCHd': function(_0x1ed883, _0x1e7bfc) {
                return _0x1ed883 + _0x1e7bfc;
            },
            'dlCoW': function(_0x5691f2, _0x19415a) {
                return _0x5691f2 >= _0x19415a;
            },
            'pzvzP': function(_0x29cb72, _0x5e6992) {
                return _0x29cb72 == _0x5e6992;
            },
            'rSAEG': function(_0x471b6f, _0x28bceb) {
                return _0x471b6f + _0x28bceb;
            },
            'XDNtC': function(_0x21ae68, _0x4b70d2) {
                return _0x21ae68(_0x4b70d2);
            },
            'eICQh': '9|6|1|8|7|0|3|4|5|2',
            'JSTbP': function(_0x5b2b40, _0xe47376) {
                return _0x5b2b40 + _0xe47376;
            },
            'IubIp': function(_0x34350b, _0x55bb87) {
                return _0x34350b + _0x55bb87;
            },
            'OiCpA': function(_0x5e391a, _0x16f694) {
                return _0x5e391a >= _0x16f694;
            },
            'IYthx': function(_0x18f779, _0x3f7f2d) {
                return _0x18f779 == _0x3f7f2d;
            },
            'ntomj': function(_0x35703f, _0x1b7825) {
                return _0x35703f == _0x1b7825;
            },
            'lYHzm': function(_0x5eb076, _0x42e5f7) {
                return _0x5eb076 + _0x42e5f7;
            },
            'qCqWf': function(_0x425f48, _0x149117) {
                return _0x425f48 + _0x149117;
            },
            'KgEmg': function(_0x1e901b, _0x3a7f79) {
                return _0x1e901b + _0x3a7f79;
            },
            'rAiMc': function(_0x891dc5, _0xffa6e0) {
                return _0x891dc5 <= _0xffa6e0;
            },
            'bqZUT': function(_0x297996, _0x5ee4cd) {
                return _0x297996 + _0x5ee4cd;
            },
            'Orbgq': function(_0x330aaf, _0x3c0a72) {
                return _0x330aaf + _0x3c0a72;
            },
            'HjbBc': function(_0x8d1186, _0x2e13f8) {
                return _0x8d1186 == _0x2e13f8;
            },
            'wcmbo': function(_0x507819, _0x24a8ad) {
                return _0x507819(_0x24a8ad);
            },
            'xItqN': function(_0x196cb6, _0x113e87) {
                return _0x196cb6 <= _0x113e87;
            },
            'IFiPa': function(_0x14cd57, _0x1d010f) {
                return _0x14cd57 + _0x1d010f;
            },
            'woMwJ': function(_0x3991bb, _0x4038d0) {
                return _0x3991bb >= _0x4038d0;
            },
            'nXgep': '1|3|4|2|0',
            'zEnde': function(_0xb35ea5, _0x4d5050) {
                return _0xb35ea5 + _0x4d5050;
            },
            'cxVtk': function(_0x5df4bc, _0x1bd663) {
                return _0x5df4bc == _0x1bd663;
            },
            'bkuCL': function(_0x24776d, _0x3ed1e1) {
                return _0x24776d + _0x3ed1e1;
            },
            'nEvZB': function(_0x34fcff, _0x4a1ad5) {
                return _0x34fcff == _0x4a1ad5;
            },
            'ZwKYG': function(_0x361d95, _0x285056) {
                return _0x361d95 + _0x285056;
            },
            'YJMHe': function(_0x528845, _0x4f5959) {
                return _0x528845 <= _0x4f5959;
            },
            'TiTsa': function(_0x54aa4a, _0x56d875) {
                return _0x54aa4a >= _0x56d875;
            },
            'TFsuF': function(_0x4580ea, _0x4f5713) {
                return _0x4580ea == _0x4f5713;
            },
            'vOwkG': function(_0x2849cd, _0x2568fe) {
                return _0x2849cd == _0x2568fe;
            },
            'htTmy': function(_0x25cb07, _0x26b292) {
                return _0x25cb07 + _0x26b292;
            },
            'KdKTb': '4|1|0|3|2',
            'xiEsv': function(_0x30a5de, _0x41b709) {
                return _0x30a5de + _0x41b709;
            },
            'TKixl': function(_0x41b8e7, _0x473b2b) {
                return _0x41b8e7 == _0x473b2b;
            },
            'bmwRu': function(_0x1ed859, _0x3e9f9c) {
                return _0x1ed859 + _0x3e9f9c;
            },
            'rWAOd': function(_0x55cf56, _0x4f53e7) {
                return _0x55cf56 == _0x4f53e7;
            },
            'FxZkD': function(_0x2681fb, _0x49982a) {
                return _0x2681fb == _0x49982a;
            },
            'BxszR': function(_0x543917, _0x375f6b) {
                return _0x543917 + _0x375f6b;
            },
            'wWaSe': function(_0xc9f8cc, _0x322bf2) {
                return _0xc9f8cc == _0x322bf2;
            },
            'iuDBT': function(_0x2811c2, _0x35c1e2) {
                return _0x2811c2 == _0x35c1e2;
            },
            'nyaio': function(_0x22bade, _0x489dce) {
                return _0x22bade <= _0x489dce;
            },
            'nKHVy': function(_0xac3212, _0x4b2c34) {
                return _0xac3212 <= _0x4b2c34;
            },
            'BcNRS': function(_0x596649, _0x3bd653) {
                return _0x596649(_0x3bd653);
            },
            'vHKmB': function(_0x4a3c58, _0x491197) {
                return _0x4a3c58 + _0x491197;
            },
            'vESyx': function(_0xc4225c, _0x2fdc2f) {
                return _0xc4225c == _0x2fdc2f;
            },
            'biIcW': function(_0x1e20d3, _0x1510ea) {
                return _0x1e20d3 == _0x1510ea;
            },
            'hiVBl': function(_0x2f149d, _0x891c31) {
                return _0x2f149d == _0x891c31;
            },
            'yDeIQ': function(_0x59f804, _0x46c03f) {
                return _0x59f804 + _0x46c03f;
            },
            'iJZMW': function(_0x1571c4, _0x3de29d) {
                return _0x1571c4 == _0x3de29d;
            },
            'UjxjS': function(_0x457ee4, _0x38b1a8) {
                return _0x457ee4 + _0x38b1a8;
            },
            'eDMSZ': function(_0xa3b011, _0x2b3c1a) {
                return _0xa3b011 > _0x2b3c1a;
            },
            'Tlhqo': function(_0x5ccd28, _0x1ba130) {
                return _0x5ccd28 < _0x1ba130;
            },
            'KeHCA': function(_0x114872, _0x26a0a2) {
                return _0x114872 < _0x26a0a2;
            },
            'iSTAv': function(_0x12ec6a, _0x334224) {
                return _0x12ec6a + _0x334224;
            },
            'XDKjo': function(_0x2c35f7, _0x4ea310) {
                return _0x2c35f7 < _0x4ea310;
            },
            'lXuNu': function(_0x29e225, _0x404033) {
                return _0x29e225 + _0x404033;
            },
            'XJZbi': function(_0x26eda6, _0x13c960) {
                return _0x26eda6 > _0x13c960;
            },
            'oVqtX': function(_0x2289cc, _0x5623d5) {
                return _0x2289cc == _0x5623d5;
            },
            'qGqJg': function(_0x2d8a4c, _0x3ea017) {
                return _0x2d8a4c == _0x3ea017;
            },
            'fTfYe': function(_0x278db9, _0x1cdba0) {
                return _0x278db9 + _0x1cdba0;
            },
            'RwZbT': function(_0x5573a6) {
                return _0x5573a6();
            },
            'IWCbK': '7|8|0|6|3|5|9|2|4|1',
            'KLcPj': function(_0x1b4e3c, _0x316be2) {
                return _0x1b4e3c == _0x316be2;
            },
            'BepDQ': function(_0x4d661f, _0x315304) {
                return _0x4d661f > _0x315304;
            },
            'sSVCW': 'level3selection',
            'EsPXV': function(_0x4a8d7e, _0x31fe77) {
                return _0x4a8d7e + _0x31fe77;
            },
            'KPdCn': function(_0x39a404, _0xa8bc35) {
                return _0x39a404 == _0xa8bc35;
            },
            'NgsIa': function(_0x348bd6, _0x17cca2) {
                return _0x348bd6 + _0x17cca2;
            },
            'sUqEQ': function(_0x3e69d5, _0x4de86b) {
                return _0x3e69d5 + _0x4de86b;
            },
            'IwWxd': function(_0x203645, _0x3725cf) {
                return _0x203645 == _0x3725cf;
            },
            'HNgzP': function(_0x4c6f2e, _0x20f1f1) {
                return _0x4c6f2e + _0x20f1f1;
            },
            'tBAwD': function(_0x53e023, _0x4d21db) {
                return _0x53e023 + _0x4d21db;
            },
            'SdMkd': function(_0x2a07b1, _0x25bc77) {
                return _0x2a07b1 + _0x25bc77;
            },
            'bZcUl': function(_0x5b259b, _0x5b70aa) {
                return _0x5b259b + _0x5b70aa;
            },
            'fqKJQ': function(_0x436ecf, _0x1517bb) {
                return _0x436ecf == _0x1517bb;
            },
            'AdRFb': function(_0x382a00, _0x25ab70) {
                return _0x382a00 > _0x25ab70;
            },
            'mUjau': function(_0x336a8b, _0x405cef) {
                return _0x336a8b + _0x405cef;
            },
            'rKZmb': function(_0x38bc30, _0x1c8f70) {
                return _0x38bc30 + _0x1c8f70;
            },
            'qwPPI': function(_0x620e4, _0x411174) {
                return _0x620e4 + _0x411174;
            },
            'EWfrL': function(_0x50a7bd, _0x4e5d33) {
                return _0x50a7bd + _0x4e5d33;
            },
            'lDCFi': function(_0x24dbb6, _0x29826f) {
                return _0x24dbb6 + _0x29826f;
            },
            'bquhl': function(_0x2c6356, _0x619a1d) {
                return _0x2c6356 + _0x619a1d;
            },
            'nGKdY': function(_0x470361, _0x3fe77f) {
                return _0x470361 + _0x3fe77f;
            },
            'DaIwZ': function(_0x4bb18d, _0x4dcd9c) {
                return _0x4bb18d + _0x4dcd9c;
            },
            'IEGaI': function(_0xfd926f, _0x4f2dc0) {
                return _0xfd926f + _0x4f2dc0;
            },
            'GRZYO': function(_0x4457b5, _0x274f68) {
                return _0x4457b5 == _0x274f68;
            },
            'GrLyr': function(_0x3f4b87, _0x7d05ed) {
                return _0x3f4b87 > _0x7d05ed;
            },
            'fICeO': function(_0x35a49b, _0x20a95f) {
                return _0x35a49b + _0x20a95f;
            },
            'amhfh': function(_0x226d49, _0x35ef2f) {
                return _0x226d49 == _0x35ef2f;
            },
            'rraoL': function(_0x490666, _0x4132fa) {
                return _0x490666 == _0x4132fa;
            },
            'zjbxU': function(_0x30ab73, _0x2db6b1) {
                return _0x30ab73 + _0x2db6b1;
            },
            'oyJXm': function(_0x43850b, _0x5742fb) {
                return _0x43850b(_0x5742fb);
            },
            'MjNed': function(_0x4b501e) {
                return _0x4b501e();
            },
            'kqubO': function(_0x1c33db, _0x4fcbd2) {
                return _0x1c33db + _0x4fcbd2;
            },
            'ZbwQG': _0x222a04(0x902),
            'xkMZl': 'dollgliter',
            'geYpk': _0x222a04(0x8f1),
            'cwgog': function(_0x3569ea) {
                return _0x3569ea();
            },
            'mgxKC': function(_0x2899f3, _0x4c159e) {
                return _0x2899f3 + _0x4c159e;
            },
            'uztWA': 'pointerup',
            'yPXFO': function(_0x21f56b, _0xe8bb78) {
                return _0x21f56b + _0xe8bb78;
            },
            'DKxkD': function(_0x29b849, _0x37c3c2) {
                return _0x29b849 + _0x37c3c2;
            }
        };
    _0x2cc681[_0x222a04(0x8d8)](gdsdk, _0x222a04(0x3ab)) && gdsdk[_0x222a04(0xa4c)] !== _0x2cc681[_0x222a04(0x643)] && gdsdk[_0x222a04(0xa4c)](_0x2cc681[_0x222a04(0x678)])['then'](_0x1cc1d8 => {
        var _0x4fe932 = _0x222a04;
        console[_0x4fe932(0x63a)](_0x4fe932(0x8df));
    })['catch'](_0x3960ac => {
        var _0x594b20 = _0x222a04;
        console[_0x594b20(0x63a)](_0x2cc681[_0x594b20(0x672)]);
    });
    _0x2cc681['vYWLO'](_0x4f306b), _0x2cc681[_0x222a04(0x4f8)](setTimeout, _0x2cc429, 0x64), t3 = game[_0x222a04(0x374)]['scenes'][pageNo][_0x222a04(0x48f)][_0x222a04(0x85d)]({
        'delay': 0xc8,
        'callback': _0x4ea8f3,
        'callbackScope': this
    });

    function _0x4ea8f3() {
        var _0x4d2b9e = _0x222a04;
        level3doll[_0x4d2b9e(0x997)]('Eye', _0x2cc681[_0x4d2b9e(0x38c)](_0x2cc681[_0x4d2b9e(0x5c7)], marr[0x0])), t3 = game[_0x4d2b9e(0x374)][_0x4d2b9e(0x237)][pageNo]['time'][_0x4d2b9e(0x85d)]({
            'delay': 0xbb8,
            'callback': _0x5cd62e,
            'callbackScope': this
        });
    }

    function _0x5cd62e() {
        var _0x5770d7 = _0x222a04;
        level3doll[_0x5770d7(0x997)](_0x2cc681[_0x5770d7(0x373)], _0x2cc681[_0x5770d7(0x38c)](_0x2cc681['kuXZL'], marr[0x0])), t3 = game['scene'][_0x5770d7(0x237)][pageNo][_0x5770d7(0x48f)][_0x5770d7(0x85d)]({
            'delay': 0x12c,
            'callback': _0x4ea8f3,
            'callbackScope': this
        });
    }

    function _0x1d63d6() {
        var _0x290e88 = _0x222a04,
            _0x30c089 = {
                'JYnvV': function(_0x4b5feb, _0x39d232) {
                    return _0x4b5feb == _0x39d232;
                },
                'DoXpJ': _0x2cc681[_0x290e88(0x715)],
                'YSReh': function(_0x4c14d8, _0x5959af) {
                    return _0x4c14d8(_0x5959af);
                },
                'lMqzi': function(_0x18c897, _0x5e9ac7) {
                    return _0x2cc681['vqsAc'](_0x18c897, _0x5e9ac7);
                },
                'skcrb': _0x2cc681['vcZzG'],
                'liaPT': function(_0x9ede, _0x109458) {
                    return _0x9ede(_0x109458);
                },
                'uNmRu': _0x2cc681[_0x290e88(0x756)],
                'mbRTk': function(_0x4ed308, _0xf18a58) {
                    var _0x3455e4 = _0x290e88;
                    return _0x2cc681[_0x3455e4(0x5be)](_0x4ed308, _0xf18a58);
                },
                'iSSev': function(_0x3a9845, _0x3dbb62) {
                    return _0x2cc681['opNjx'](_0x3a9845, _0x3dbb62);
                },
                'OBZfX': _0x2cc681[_0x290e88(0x9dc)],
                'VRRod': function(_0x373d22, _0x201e03) {
                    return _0x373d22(_0x201e03);
                },
                'OBkbt': function(_0x219706, _0x220f11) {
                    var _0x181a65 = _0x290e88;
                    return _0x2cc681[_0x181a65(0x3b2)](_0x219706, _0x220f11);
                },
                'pwKXT': _0x2cc681['eKWGO'],
                'IFIZb': function(_0x41bb22, _0x7409ab) {
                    var _0x434211 = _0x290e88;
                    return _0x2cc681[_0x434211(0x4ab)](_0x41bb22, _0x7409ab);
                },
                'DkHUA': function(_0xb159a6, _0xc685cd) {
                    return _0x2cc681['AZnRH'](_0xb159a6, _0xc685cd);
                },
                'tzktq': _0x2cc681['ZAQJQ'],
                'zaPIf': function(_0x27927d, _0x3cbaa0) {
                    return _0x27927d == _0x3cbaa0;
                },
                'HvgKY': _0x2cc681[_0x290e88(0x950)],
                'ikkkq': function(_0x1e83e0, _0x2ef980) {
                    var _0x476c54 = _0x290e88;
                    return _0x2cc681[_0x476c54(0x782)](_0x1e83e0, _0x2ef980);
                },
                'mqyuP': _0x2cc681[_0x290e88(0x458)]
            };
        _0x2cc681[_0x290e88(0x8d8)](gdsdk, _0x2cc681['BvcFU']) && _0x2cc681[_0x290e88(0x8d8)](gdsdk['showAd'], _0x2cc681[_0x290e88(0x643)]) && gdsdk[_0x290e88(0x406)](_0x2cc681[_0x290e88(0x678)])['then'](_0xc6deb5 => {
            var _0x334b9f = _0x290e88;
            if (_0x30c089[_0x334b9f(0xa5e)](adcheck2, 0x1)) {
                var _0x14e240 = _0x30c089[_0x334b9f(0x5b8)][_0x334b9f(0xa4e)]('|'),
                    _0x5488a7 = 0x0;
                while (!![]) {
                    switch (_0x14e240[_0x5488a7++]) {
                        case '0':
                            _0x30c089[_0x334b9f(0xa5e)](accarr[_0x30c089[_0x334b9f(0x22a)](parseInt, sno)], 0x1) && _0x30c089[_0x334b9f(0xa5e)](leveladcheck, 0x5) && (accarr[_0x30c089[_0x334b9f(0x22a)](parseInt, sno)] = 0x0, game[_0x30c089['lMqzi'](_0x30c089[_0x334b9f(0xa8d)], _0x30c089[_0x334b9f(0x95d)](parseInt, sno))]['visible'] = ![]);
                            continue;
                        case '1':
                            console[_0x334b9f(0x63a)](_0x30c089[_0x334b9f(0x421)]);
                            continue;
                        case '2':
                            _0x30c089[_0x334b9f(0xa5e)](chainarr[_0x30c089[_0x334b9f(0x516)](parseInt, sno)], 0x1) && _0x30c089[_0x334b9f(0xa5e)](leveladcheck, 0x4) && (chainarr[_0x30c089[_0x334b9f(0x248)](parseInt, sno)] = 0x0, game[_0x30c089[_0x334b9f(0x2ed)] + _0x30c089[_0x334b9f(0x64d)](parseInt, sno)][_0x334b9f(0xa6e)] = ![]);
                            continue;
                        case '3':
                            dressarr[_0x30c089['liaPT'](parseInt, sno)] == 0x1 && leveladcheck == 0x1 && (dressarr[_0x30c089['OBkbt'](parseInt, sno)] = 0x0, game[_0x30c089[_0x334b9f(0xaae)](_0x30c089['pwKXT'], _0x30c089[_0x334b9f(0x772)](parseInt, sno))][_0x334b9f(0xa6e)] = ![]);
                            continue;
                        case '4':
                            studarr[_0x30c089[_0x334b9f(0x1a0)](parseInt, sno)] == 0x1 && _0x30c089['JYnvV'](leveladcheck, 0x3) && (studarr[parseInt(sno)] = 0x0, game[_0x30c089[_0x334b9f(0x697)] + _0x30c089['liaPT'](parseInt, sno)]['visible'] = ![]);
                            continue;
                        case '5':
                            _0x30c089[_0x334b9f(0xa5e)](hairarr[parseInt(sno)], 0x1) && _0x30c089[_0x334b9f(0xa7d)](leveladcheck, 0x2) && (hairarr[_0x30c089[_0x334b9f(0x1a0)](parseInt, sno)] = 0x0, game[_0x30c089[_0x334b9f(0xaae)](_0x30c089['HvgKY'], _0x30c089['ikkkq'](parseInt, sno))][_0x334b9f(0xa6e)] = ![]);
                            continue;
                    }
                    break;
                }
            } else console['log'](_0x30c089[_0x334b9f(0x5f8)]);
        })[_0x290e88(0x9f6)](_0x48bdf6 => {
            var _0x3e8094 = _0x290e88;
            console[_0x3e8094(0x63a)](_0x2cc681[_0x3e8094(0x78b)]);
        });
    }
    game[_0x2cc681['mgxKC'](_0x2cc681[_0x222a04(0x9cf)], 0x1)]['on'](_0x2cc681['RUYcw'], _0x48f0e5), game[_0x2cc681[_0x222a04(0x526)](_0x2cc681['dWREh'], 0x1)]['on']('pointerout', _0x5ad3fd), game['level3ecat' + 0x1]['on'](_0x2cc681['uztWA'], _0x22a72b), game[_0x2cc681[_0x222a04(0x9cf)] + 0x1]['on'](_0x2cc681[_0x222a04(0x90b)], _0x59a43d);

    function _0x48f0e5(_0x4f27dd) {
        var _0x4d4957 = _0x222a04;
        this[_0x4d4957(0x67d)](1.05);
    }

    function _0x22a72b(_0x243115) {
        var _0x2e0025 = _0x222a04;
        this[_0x2e0025(0x254)](0x0);
    }

    function _0x5ad3fd(_0x399848) {
        var _0x4586a0 = _0x222a04;
        this[_0x4586a0(0x67d)](0x1);
    }

    function _0x59a43d() {
        var _0x43962f = _0x222a04,
            _0x3e0c11 = _0x43962f(0x944)[_0x43962f(0xa4e)]('|'),
            _0xd933c0 = 0x0;
        while (!![]) {
            switch (_0x3e0c11[_0xd933c0++]) {
                case '0':
                    dressgliter[_0x43962f(0x86e)][_0x43962f(0x3ca)]('dressgliter');
                    continue;
                case '1':
                    level3doll[_0x43962f(0x997)](_0x2cc681[_0x43962f(0x954)], _0x2cc681[_0x43962f(0x723)](_0x2cc681['cJucG'], darr[0x7]));
                    continue;
                case '2':
                    accrandom2 = Phaser[_0x43962f(0x82b)]['Between'](0x1, 0x4);
                    continue;
                case '3':
                    accrandom1 = Phaser[_0x43962f(0x82b)][_0x43962f(0x918)](0x1, 0x6);
                    continue;
                case '4':
                    level3doll[_0x43962f(0x997)](_0x2cc681['FpIJE'], _0x2cc681[_0x43962f(0x8f3)](_0x43962f(0x3d8), darr[0x3]));
                    continue;
                case '5':
                    dressrandom = Phaser[_0x43962f(0x82b)][_0x43962f(0x918)](0x1, 0x8);
                    continue;
                case '6':
                    studrandom = Phaser['Math'][_0x43962f(0x918)](0x1, 0x8);
                    continue;
                case '7':
                    level3doll['setAttachment'](_0x2cc681[_0x43962f(0x57a)], _0x2cc681[_0x43962f(0x924)](_0x2cc681['PmFMj'], darr[0x2]));
                    continue;
                case '8':
                    darr[0x8] = accrandom4;
                    continue;
                case '9':
                    level3doll[_0x43962f(0x997)](_0x2cc681[_0x43962f(0x585)], 'Face\x20Acc-0' + darr[0x5]);
                    continue;
                case '10':
                    level3doll[_0x43962f(0x997)](_0x2cc681[_0x43962f(0x5bd)], _0x2cc681['RgSvE'](_0x2cc681[_0x43962f(0x731)], darr[0x8]));
                    continue;
                case '11':
                    darr[0x4] = accrandom;
                    continue;
                case '12':
                    darr[0x7] = accrandom3;
                    continue;
                case '13':
                    playsoundeffects(_0x2cc681[_0x43962f(0x94d)]);
                    continue;
                case '14':
                    game[_0x43962f(0x374)][_0x43962f(0x237)][pageNo]['tweens'][_0x43962f(0x85a)]({
                        'targets': this,
                        'scale': 0.9,
                        'ease': _0x2cc681[_0x43962f(0x96e)],
                        'duration': 0x64,
                        'yoyo': !![]
                    });
                    continue;
                case '15':
                    level3doll[_0x43962f(0x997)](_0x2cc681['Xibaa'], _0x2cc681['fttcn'](_0x2cc681['ecHgX'], darr[0x0]));
                    continue;
                case '16':
                    darr[0x5] = accrandom1;
                    continue;
                case '17':
                    _0x2cc681[_0x43962f(0x9a8)](_0x4f306b);
                    continue;
                case '18':
                    level3doll[_0x43962f(0x997)](_0x2cc681[_0x43962f(0xad2)], _0x2cc681['KJzlI'] + darr[0x0]);
                    continue;
                case '19':
                    darr[0x3] = chainrandom;
                    continue;
                case '20':
                    level3doll[_0x43962f(0x997)](_0x2cc681[_0x43962f(0x3e2)], _0x2cc681[_0x43962f(0x1f7)](_0x2cc681[_0x43962f(0x47a)], darr[0x1]));
                    continue;
                case '21':
                    level3doll[_0x43962f(0x997)](_0x2cc681['gOgvB'], _0x2cc681[_0x43962f(0x1f7)](_0x2cc681[_0x43962f(0x205)], darr[0x0]));
                    continue;
                case '22':
                    level3doll['setAttachment'](_0x2cc681['dZqDE'], _0x2cc681[_0x43962f(0x38c)](_0x2cc681[_0x43962f(0x6dc)], darr[0x0]));
                    continue;
                case '23':
                    level3doll['setAttachment']('Hair', _0x2cc681[_0x43962f(0x805)](_0x2cc681['Fyetw'], darr[0x1]));
                    continue;
                case '24':
                    if (_0x2cc681['OFoNj'](showad, 0x1)) {
                        var _0x230e2e = _0x2cc681[_0x43962f(0x50a)][_0x43962f(0xa4e)]('|'),
                            _0x5bf6c5 = 0x0;
                        while (!![]) {
                            switch (_0x230e2e[_0x5bf6c5++]) {
                                case '0':
                                    while (_0x2cc681['AkGDK'](dressarr[dressrandom], 0x0)) {
                                        _0x2cc681[_0x43962f(0x967)](dressarr[dressrandom], 0x1) && (dressrandom = Phaser[_0x43962f(0x82b)]['Between'](0x1, 0x8));
                                    }
                                    continue;
                                case '1':
                                    while (_0x2cc681['sZMxu'](hairarr[hairrandom], 0x0)) {
                                        _0x2cc681[_0x43962f(0x793)](hairarr[hairrandom], 0x1) && (hairrandom = Phaser[_0x43962f(0x82b)][_0x43962f(0x918)](0x1, 0x8));
                                    }
                                    continue;
                                case '2':
                                    while (studarr[studrandom] > 0x0) {
                                        _0x2cc681[_0x43962f(0x793)](studarr[studrandom], 0x1) && (studrandom = Phaser[_0x43962f(0x82b)][_0x43962f(0x918)](0x1, 0x8));
                                    }
                                    continue;
                                case '3':
                                    while (_0x2cc681['sZMxu'](accarr[accrandom], 0x0)) {
                                        _0x2cc681['FAGIZ'](accarr[accrandom], 0x1) && (accrandom = Phaser[_0x43962f(0x82b)][_0x43962f(0x918)](0x1, 0x2));
                                    }
                                    continue;
                                case '4':
                                    while (_0x2cc681[_0x43962f(0x5cd)](accarr[accrandom3], 0x0)) {
                                        _0x2cc681[_0x43962f(0x793)](accarr[accrandom3], 0x1) && (accrandom3 = Phaser[_0x43962f(0x82b)][_0x43962f(0x918)](0x1, 0x8));
                                    }
                                    continue;
                                case '5':
                                    while (_0x2cc681[_0x43962f(0x7be)](accarr[accrandom1], 0x0)) {
                                        _0x2cc681['OFoNj'](accarr[accrandom1], 0x1) && (accrandom1 = Phaser[_0x43962f(0x82b)][_0x43962f(0x918)](0x1, 0x6));
                                    }
                                    continue;
                                case '6':
                                    while (_0x2cc681['AkGDK'](accarr[accrandom4], 0x0)) {
                                        _0x2cc681[_0x43962f(0x967)](accarr[accrandom4], 0x1) && (accrandom4 = Phaser[_0x43962f(0x82b)][_0x43962f(0x918)](0x1, 0x7));
                                    }
                                    continue;
                                case '7':
                                    while (_0x2cc681[_0x43962f(0x8f7)](accarr[accrandom2], 0x0)) {
                                        _0x2cc681[_0x43962f(0x5f1)](accarr[accrandom2], 0x1) && (accrandom2 = Phaser[_0x43962f(0x82b)]['Between'](0x1, 0x4));
                                    }
                                    continue;
                                case '8':
                                    while (_0x2cc681[_0x43962f(0x8f7)](chainarr[chainrandom], 0x0)) {
                                        _0x2cc681['dzTVO'](chainarr[chainrandom], 0x1) && (chainrandom = Phaser[_0x43962f(0x82b)][_0x43962f(0x918)](0x1, 0x8));
                                    }
                                    continue;
                            }
                            break;
                        }
                    }
                    continue;
                case '25':
                    darr[0x0] = dressrandom;
                    continue;
                case '26':
                    level3doll['setAttachment'](_0x43962f(0xa48), _0x2cc681[_0x43962f(0x1f7)](_0x43962f(0x470), darr[0x6]));
                    continue;
                case '27':
                    dressgliter[_0x43962f(0x86e)][_0x43962f(0x742)](_0x43962f(0x72e));
                    continue;
                case '28':
                    hairrandom = Phaser[_0x43962f(0x82b)][_0x43962f(0x918)](0x1, 0x8);
                    continue;
                case '29':
                    this['setFrame'](0x1);
                    continue;
                case '30':
                    level3doll['setAttachment'](_0x2cc681[_0x43962f(0x693)], _0x2cc681[_0x43962f(0x38c)](_0x2cc681[_0x43962f(0x264)], darr[0x4]));
                    continue;
                case '31':
                    darr[0x2] = studrandom;
                    continue;
                case '32':
                    accrandom3 = Phaser[_0x43962f(0x82b)][_0x43962f(0x918)](0x1, 0x8);
                    continue;
                case '33':
                    darr[0x1] = hairrandom;
                    continue;
                case '34':
                    darr[0x6] = accrandom2;
                    continue;
                case '35':
                    accrandom4 = Phaser['Math'][_0x43962f(0x918)](0x1, 0x7);
                    continue;
                case '36':
                    accrandom = Phaser['Math'][_0x43962f(0x918)](0x1, 0x3);
                    continue;
                case '37':
                    chainrandom = Phaser['Math'][_0x43962f(0x918)](0x1, 0x8);
                    continue;
            }
            break;
        }
    }
    game[_0x2cc681[_0x222a04(0x9cf)] + 0x2]['on'](_0x222a04(0x82f), _0x5b2c15), game[_0x2cc681[_0x222a04(0x270)](_0x222a04(0x739), 0x2)]['on'](_0x2cc681[_0x222a04(0x4aa)], _0x397f2a), game[_0x2cc681[_0x222a04(0x650)]('level3ecat', 0x2)]['on'](_0x222a04(0x3b6), _0x420598), game[_0x2cc681[_0x222a04(0x9cf)] + 0x2]['on'](_0x2cc681[_0x222a04(0x90b)], _0x4dbc26);

    function _0x5b2c15() {
        var _0x115340 = _0x222a04;
        this[_0x115340(0x67d)](1.05);
    }

    function _0x397f2a() {
        var _0x53985c = _0x222a04;
        this[_0x53985c(0x67d)](0x1);
    }

    function _0x420598() {
        var _0x24ca55 = _0x222a04;
        this[_0x24ca55(0x254)](0x0);
    }

    function _0x4dbc26() {
        var _0x2f772b = _0x222a04,
            _0x14a70f = _0x2cc681[_0x2f772b(0x911)][_0x2f772b(0xa4e)]('|'),
            _0x3bf4ba = 0x0;
        while (!![]) {
            switch (_0x14a70f[_0x3bf4ba++]) {
                case '0':
                    level3doll[_0x2f772b(0x997)](_0x2cc681['GSXWH'], _0x2cc681[_0x2f772b(0xa39)]);
                    continue;
                case '1':
                    level3doll[_0x2f772b(0x997)](_0x2cc681[_0x2f772b(0x57a)], _0x2cc681['eQoQN']);
                    continue;
                case '2':
                    level3doll[_0x2f772b(0x997)](_0x2cc681[_0x2f772b(0x3e2)], _0x2f772b(0xacf));
                    continue;
                case '3':
                    darr[0x7] = 0x0;
                    continue;
                case '4':
                    level3doll[_0x2f772b(0x997)](_0x2cc681['Xibaa'], _0x2cc681[_0x2f772b(0x9f8)]);
                    continue;
                case '5':
                    darr[0x3] = 0x0;
                    continue;
                case '6':
                    level3doll[_0x2f772b(0x997)](_0x2cc681[_0x2f772b(0x665)], _0x2cc681['uJjgw']);
                    continue;
                case '7':
                    darr[0x5] = 0x0;
                    continue;
                case '8':
                    level3doll[_0x2f772b(0x997)](_0x2cc681[_0x2f772b(0x5bd)], _0x2cc681[_0x2f772b(0x9eb)]);
                    continue;
                case '9':
                    level3doll[_0x2f772b(0x997)](_0x2cc681[_0x2f772b(0x9cb)], _0x2cc681[_0x2f772b(0x500)]);
                    continue;
                case '10':
                    level3doll[_0x2f772b(0x997)](_0x2cc681[_0x2f772b(0xad2)], _0x2cc681[_0x2f772b(0x357)]);
                    continue;
                case '11':
                    _0x2cc681[_0x2f772b(0x7d5)](_0x4f306b);
                    continue;
                case '12':
                    this[_0x2f772b(0x254)](0x1);
                    continue;
                case '13':
                    darr[0x4] = 0x0;
                    continue;
                case '14':
                    playsoundeffects(_0x2cc681[_0x2f772b(0x297)]);
                    continue;
                case '15':
                    level3doll[_0x2f772b(0x997)](_0x2cc681[_0x2f772b(0x49d)], _0x2cc681['QVRGF']);
                    continue;
                case '16':
                    darr[0x8] = 0x0;
                    continue;
                case '17':
                    darr[0x2] = 0x0;
                    continue;
                case '18':
                    darr[0x6] = 0x0;
                    continue;
                case '19':
                    level3doll[_0x2f772b(0x997)](_0x2cc681[_0x2f772b(0x585)], _0x2cc681[_0x2f772b(0x903)]);
                    continue;
                case '20':
                    level3doll[_0x2f772b(0x997)](_0x2cc681[_0x2f772b(0x693)], _0x2cc681[_0x2f772b(0x293)]);
                    continue;
                case '21':
                    darr[0x1] = 0x0;
                    continue;
                case '22':
                    level3doll['setAttachment'](_0x2f772b(0x488), _0x2cc681[_0x2f772b(0x7de)]);
                    continue;
                case '23':
                    darr[0x0] = 0x0;
                    continue;
                case '24':
                    _0x2cc681[_0x2f772b(0x5f1)](lcount1, 0x0);
                    continue;
                case '25':
                    level3doll[_0x2f772b(0x997)](_0x2cc681[_0x2f772b(0xada)], _0x2cc681['IYqrh']);
                    continue;
            }
            break;
        }
    }
    game[_0x2cc681['dWREh'] + 0x3]['on'](_0x2cc681['RUYcw'], _0x4b2534), game[_0x2cc681['DKxkD'](_0x2cc681['dWREh'], 0x3)]['on'](_0x2cc681[_0x222a04(0x4aa)], _0x29f364), game[_0x2cc681['mUjau'](_0x2cc681[_0x222a04(0x9cf)], 0x3)]['on'](_0x2cc681['odAdK'], _0x594cb6);

    function _0x4b2534(_0x41c3f2) {
        var _0xc65a0c = _0x222a04;
        this[_0xc65a0c(0x67d)](1.05);
    }

    function _0x29f364(_0x5bdd49) {
        this['setScale'](0x1);
    }

    function _0x594cb6() {
        var _0x5c3d4d = _0x222a04,
            _0x5cab96 = {
                'LnvjG': _0x5c3d4d(0x901),
                'kmCRY': _0x2cc681[_0x5c3d4d(0x40f)],
                'EJjfG': _0x2cc681['uOrcq'],
                'Fuucm': function(_0x1cb6d7, _0x486a24, _0x4923eb, _0x255ad4) {
                    return _0x1cb6d7(_0x486a24, _0x4923eb, _0x255ad4);
                },
                'hTzgO': _0x2cc681[_0x5c3d4d(0x9cf)],
                'VVyGc': function(_0x538e8b, _0x44ffb5, _0x39d718) {
                    var _0x2cba10 = _0x5c3d4d;
                    return _0x2cc681[_0x2cba10(0x4f8)](_0x538e8b, _0x44ffb5, _0x39d718);
                }
            };
        this[_0x5c3d4d(0x254)](0x1), _0x2cc681[_0x5c3d4d(0x6cf)](playsoundeffects, _0x2cc681[_0x5c3d4d(0x297)]), game['scene'][_0x5c3d4d(0x237)][pageNo][_0x5c3d4d(0x465)][_0x5c3d4d(0x85a)]({
            'targets': this,
            'scale': 0.9,
            'ease': _0x2cc681[_0x5c3d4d(0x96e)],
            'duration': 0x64,
            'yoyo': !![]
        }), soundmute[_0x5c3d4d(0xa6e)] = ![], done2[_0x5c3d4d(0x55e)] = 0x0, _0x4f306b(), game[_0x5c3d4d(0x374)][_0x5c3d4d(0x237)][pageNo][_0x5c3d4d(0x465)]['add']({
            'targets': level3grp,
            'x': 0x78,
            'ease': _0x2cc681[_0x5c3d4d(0x96e)],
            'duration': 0x1f4
        }), game['scene'][_0x5c3d4d(0x237)][pageNo]['tweens'][_0x5c3d4d(0x85a)]({
            'targets': cupboardgroup1,
            'x': -0x320,
            'ease': _0x2cc681[_0x5c3d4d(0x96e)],
            'duration': 0x1f4
        }), game[_0x5c3d4d(0x374)][_0x5c3d4d(0x237)][pageNo][_0x5c3d4d(0x465)]['add']({
            'targets': cupboardgroup,
            'x': 0x320,
            'ease': _0x2cc681['IMGyM'],
            'duration': 0x1f4,
            'onComplete': _0x1654ef
        });

        function _0x1654ef() {
            var _0x8773be = _0x5c3d4d;
            flashshape[_0x8773be(0x55e)] = 0x0, flashshape[_0x8773be(0xa6e)] = !![], game[_0x8773be(0x374)][_0x8773be(0x237)][pageNo][_0x8773be(0x465)][_0x8773be(0x85a)]({
                'targets': flashshape,
                'alpha': 0x1,
                'ease': _0x5cab96[_0x8773be(0xad3)],
                'duration': 0x64,
                'repeat': 0x1,
                'yoyo': !![],
                'onComplete': _0x5eeaf2
            });
        }

        function _0x5eeaf2() {
            var _0x579c55 = _0x5c3d4d,
                _0x3ceadf = {
                    'IBbiS': '1|0|4|2|3',
                    'WQKlM': _0x5cab96[_0x579c55(0xad3)]
                };
            game[_0x5cab96[_0x579c55(0x868)] + 0x3][_0x579c55(0x254)](0x0), _0x5cab96['VVyGc'](setTimeout, _0x2e9071, 0x64);

            function _0x2e9071() {
                var _0x566cac = _0x579c55,
                    _0xd3c880 = _0x3ceadf['IBbiS'][_0x566cac(0xa4e)]('|'),
                    _0x43438f = 0x0;
                while (!![]) {
                    switch (_0xd3c880[_0x43438f++]) {
                        case '0':
                            done2[_0x566cac(0x55e)] = 0x1;
                            continue;
                        case '1':
                            soundmute[_0x566cac(0xa6e)] = !![];
                            continue;
                        case '2':
                            game[_0x566cac(0x374)][_0x566cac(0x237)][pageNo][_0x566cac(0x465)][_0x566cac(0x85a)]({
                                'targets': cupboardgroup,
                                'x': 0x0,
                                'ease': _0x3ceadf[_0x566cac(0x63c)],
                                'duration': 0x1f4
                            });
                            continue;
                        case '3':
                            game[_0x566cac(0x374)][_0x566cac(0x237)][pageNo][_0x566cac(0x465)][_0x566cac(0x85a)]({
                                'targets': cupboardgroup1,
                                'x': 0x0,
                                'ease': _0x3ceadf['WQKlM'],
                                'duration': 0x1f4
                            });
                            continue;
                        case '4':
                            game['scene'][_0x566cac(0x237)][pageNo][_0x566cac(0x465)][_0x566cac(0x85a)]({
                                'targets': level3grp,
                                'x': 0x0,
                                'ease': _0x3ceadf[_0x566cac(0x63c)],
                                'duration': 0x1f4
                            });
                            continue;
                    }
                    break;
                }
            }
            var _0xd8ac65;

            function _0x248128(_0x43ce61, _0x36c898, _0x3fc423) {
                var _0x27c80d = _0x579c55,
                    _0x931958 = _0x5cab96[_0x27c80d(0x278)][_0x27c80d(0xa4e)]('|'),
                    _0xea25b6 = 0x0;
                while (!![]) {
                    switch (_0x931958[_0xea25b6++]) {
                        case '0':
                            var _0x5a9792 = _0x3fc423;
                            continue;
                        case '1':
                            _0x8dce74['href'] = _0x5a9792;
                            continue;
                        case '2':
                            var _0x8dce74 = document[_0x27c80d(0x753)]('a');
                            continue;
                        case '3':
                            var _0x34bbb8 = document['getElementById'](_0x43ce61);
                            continue;
                        case '4':
                            _0x8dce74[_0x27c80d(0x943)][_0x27c80d(0x56f)] = [_0x37e11b, _0x8dce74[_0x27c80d(0x8fe)], _0x8dce74[_0x27c80d(0x46a)]]['join'](':');
                            continue;
                        case '5':
                            _0x8dce74['click']();
                            continue;
                        case '6':
                            document['body'][_0x27c80d(0x521)](_0x8dce74);
                            continue;
                        case '7':
                            var _0x37e11b = _0x5cab96[_0x27c80d(0x82c)];
                            continue;
                        case '8':
                            _0x8dce74[_0x27c80d(0x8fe)] = _0x36c898;
                            continue;
                        case '9':
                            document[_0x27c80d(0x3d1)][_0x27c80d(0x620)](_0x8dce74);
                            continue;
                    }
                    break;
                }
            }
            game[_0x579c55(0x815)]['snapshot'](function(_0x190ac2) {
                var _0x42a2b8 = _0x579c55,
                    _0x19df15;
                _0x19df15 = _0x190ac2[_0x42a2b8(0x942)], _0x5cab96[_0x42a2b8(0x2e6)](_0x248128, _0xd8ac65, _0x42a2b8(0x5fd), _0x19df15);
            });
        }
    }

    function _0x408f7d() {
        this['setScale'](0x1);
    }

    function _0x2cc429() {
        var _0x310c26 = _0x222a04;
        _0x2cc681[_0x310c26(0x7cb)](playsoundeffects, _0x2cc681[_0x310c26(0x869)]), game['scene'][_0x310c26(0x237)][pageNo][_0x310c26(0x465)]['add']({
            'targets': level3grp,
            'x': -0x14,
            'ease': _0x2cc681[_0x310c26(0x7ed)],
            'duration': 0x2bc,
            'onComplete': _0x12947b,
            'callbackScope': this
        });
    }

    function _0x12947b() {
        var _0x3ee4b8 = _0x222a04;
        game[_0x3ee4b8(0x374)][_0x3ee4b8(0x237)][pageNo]['tweens'][_0x3ee4b8(0x85a)]({
            'targets': cupboardgroup1,
            'x': 0x0,
            'ease': _0x2cc681[_0x3ee4b8(0x96e)],
            'duration': 0x1f4,
            'callbackScope': this
        }), game[_0x3ee4b8(0x374)][_0x3ee4b8(0x237)][pageNo][_0x3ee4b8(0x465)][_0x3ee4b8(0x85a)]({
            'targets': cupboardgroup,
            'x': 0x0,
            'ease': _0x2cc681[_0x3ee4b8(0x96e)],
            'duration': 0x1f4,
            'onComplete': _0x2d0f2a,
            'callbackScope': this
        });
    }

    function _0x2d0f2a() {
        var _0x44742c = _0x222a04,
            _0x3b4304 = {
                'DbUsy': function(_0xd8bdf7, _0x15e4a4) {
                    return _0x2cc681['ZTZDG'](_0xd8bdf7, _0x15e4a4);
                },
                'ZZuke': function(_0x1c8b7e, _0xcd5160) {
                    return _0x2cc681['PBWCj'](_0x1c8b7e, _0xcd5160);
                },
                'oLxPu': function(_0x26c7c8, _0x1660c2) {
                    var _0x5b3e62 = _0x487b;
                    return _0x2cc681[_0x5b3e62(0x93c)](_0x26c7c8, _0x1660c2);
                },
                'eDcyW': function(_0xca76cf, _0x1a48ea) {
                    return _0x2cc681['oMQrs'](_0xca76cf, _0x1a48ea);
                },
                'oFSBs': _0x2cc681['syfnz'],
                'WIQGr': function(_0x1dbed2) {
                    var _0x210d37 = _0x487b;
                    return _0x2cc681[_0x210d37(0x7d5)](_0x1dbed2);
                },
                'xESDD': function(_0x1e0397, _0x3cf0a2) {
                    var _0x285184 = _0x487b;
                    return _0x2cc681[_0x285184(0xa1d)](_0x1e0397, _0x3cf0a2);
                },
                'eRonQ': function(_0x97e637, _0x6bfa39) {
                    return _0x97e637(_0x6bfa39);
                },
                'uAtbo': _0x2cc681[_0x44742c(0x57a)],
                'ecXVi': _0x2cc681[_0x44742c(0x9f0)],
                'VfMUc': function(_0x57f297, _0xe649d0) {
                    return _0x57f297 == _0xe649d0;
                },
                'hihHi': function(_0x4f025a, _0x45a948) {
                    return _0x4f025a == _0x45a948;
                },
                'kCqDK': function(_0x3115e6, _0xe541b3) {
                    var _0x513f82 = _0x44742c;
                    return _0x2cc681[_0x513f82(0x2cb)](_0x3115e6, _0xe541b3);
                },
                'uyRJB': _0x2cc681[_0x44742c(0x8a7)],
                'eobwk': function(_0x49ff54, _0x3fdfb9) {
                    var _0x13c49c = _0x44742c;
                    return _0x2cc681[_0x13c49c(0x5f1)](_0x49ff54, _0x3fdfb9);
                },
                'IKOze': 'dressgliter',
                'dDPnq': _0x2cc681['SSFbp'],
                'NBQOC': _0x2cc681[_0x44742c(0x96e)],
                'AryQu': function(_0x1e32ba) {
                    var _0x4cac31 = _0x44742c;
                    return _0x2cc681[_0x4cac31(0x43e)](_0x1e32ba);
                },
                'OIgAq': _0x2cc681[_0x44742c(0x3c8)],
                'odRyW': function(_0x5508ac, _0x334c49) {
                    var _0x41f60b = _0x44742c;
                    return _0x2cc681[_0x41f60b(0xaca)](_0x5508ac, _0x334c49);
                },
                'NQCVi': _0x2cc681[_0x44742c(0x3bd)],
                'DeRgl': function(_0x49b447, _0xbb7ee3) {
                    return _0x2cc681['RhNzk'](_0x49b447, _0xbb7ee3);
                },
                'XaAEt': function(_0x47e373, _0x449736) {
                    return _0x47e373(_0x449736);
                },
                'YdvXL': _0x2cc681[_0x44742c(0xada)],
                'yZolJ': _0x2cc681[_0x44742c(0x2f4)],
                'yKbaM': function(_0x3e0503, _0x22d87a) {
                    var _0x205e33 = _0x44742c;
                    return _0x2cc681[_0x205e33(0xad6)](_0x3e0503, _0x22d87a);
                },
                'HYGlz': function(_0x702e70, _0x393c1e) {
                    var _0x551d0c = _0x44742c;
                    return _0x2cc681[_0x551d0c(0x5d7)](_0x702e70, _0x393c1e);
                },
                'XwnAj': function(_0x13cd18) {
                    return _0x2cc681['vPeHi'](_0x13cd18);
                },
                'DrCHi': function(_0xdde437) {
                    return _0x2cc681['xNqTf'](_0xdde437);
                },
                'vnefb': function(_0x43eeda, _0xa9192b) {
                    return _0x43eeda == _0xa9192b;
                },
                'dIQcg': function(_0xdee25f, _0x53fcd2) {
                    return _0xdee25f == _0x53fcd2;
                },
                'Mgynt': _0x2cc681[_0x44742c(0x693)],
                'sJhMU': _0x2cc681[_0x44742c(0x264)],
                'AnXGo': function(_0x2e34c3, _0x66d8c9) {
                    return _0x2cc681['ZXHBp'](_0x2e34c3, _0x66d8c9);
                },
                'TYoli': function(_0x428e40, _0x12755b) {
                    var _0x1666b2 = _0x44742c;
                    return _0x2cc681[_0x1666b2(0x5f1)](_0x428e40, _0x12755b);
                },
                'lgNvR': function(_0x16bb66) {
                    var _0x1b535e = _0x44742c;
                    return _0x2cc681[_0x1b535e(0x43e)](_0x16bb66);
                },
                'FWfRM': function(_0x712f84) {
                    return _0x712f84();
                },
                'CzAHS': function(_0x431340, _0x275082) {
                    var _0x14503d = _0x44742c;
                    return _0x2cc681[_0x14503d(0x1e8)](_0x431340, _0x275082);
                },
                'zgEaM': function(_0x22f456, _0x2f024d) {
                    return _0x22f456 == _0x2f024d;
                },
                'kDeTN': function(_0xc534ec, _0xd9beb1) {
                    var _0x46cd2f = _0x44742c;
                    return _0x2cc681[_0x46cd2f(0x5e2)](_0xc534ec, _0xd9beb1);
                },
                'YNJXS': function(_0xa82a80, _0x2eea24) {
                    var _0x4b60f6 = _0x44742c;
                    return _0x2cc681[_0x4b60f6(0x2b5)](_0xa82a80, _0x2eea24);
                },
                'aCBFD': function(_0x2229f4, _0x29d5a7) {
                    return _0x2cc681['kzSid'](_0x2229f4, _0x29d5a7);
                },
                'JeSru': function(_0x525231, _0xfbb137) {
                    var _0x5c1bbd = _0x44742c;
                    return _0x2cc681[_0x5c1bbd(0x967)](_0x525231, _0xfbb137);
                },
                'Ztowb': function(_0x1e7bb9, _0x485834) {
                    var _0x7f3259 = _0x44742c;
                    return _0x2cc681[_0x7f3259(0x476)](_0x1e7bb9, _0x485834);
                },
                'FVZfW': '5|7|8|1|6|3|2|0|4',
                'wVXxa': function(_0x263169, _0x15b0b4) {
                    return _0x263169(_0x15b0b4);
                },
                'MrJzK': function(_0x122a1a) {
                    var _0xf10c3c = _0x44742c;
                    return _0x2cc681[_0xf10c3c(0x987)](_0x122a1a);
                },
                'eCVlA': _0x2cc681[_0x44742c(0x954)],
                'Hvqaj': function(_0x12563a, _0x298bc5) {
                    var _0x3a1859 = _0x44742c;
                    return _0x2cc681[_0x3a1859(0x2a5)](_0x12563a, _0x298bc5);
                },
                'hTXNe': 'Hand\x20Acc-0',
                'zHIdU': function(_0x46b5db) {
                    return _0x2cc681['BdEMZ'](_0x46b5db);
                },
                'HeXqV': function(_0x2774c0, _0x2affa9) {
                    var _0x30d792 = _0x44742c;
                    return _0x2cc681[_0x30d792(0x68f)](_0x2774c0, _0x2affa9);
                },
                'qejDG': function(_0x583336, _0x40268d) {
                    return _0x583336 == _0x40268d;
                },
                'rgCLn': function(_0x237b64, _0x1cfd6c) {
                    return _0x237b64 == _0x1cfd6c;
                }
            };
        for (i = 0x8; _0x2cc681[_0x44742c(0x856)](i, 0x1); i--) {
            game[_0x44742c(0x4ba) + i]['on'](_0x44742c(0x82f), _0x444ea3), game[_0x2cc681['fttcn'](_0x2cc681[_0x44742c(0x6c9)], i)]['on'](_0x2cc681[_0x44742c(0x4aa)], _0x3c2ba8), game[_0x2cc681['mJuba'] + i]['on'](_0x2cc681['odAdK'], _0x3b317b);
        }

        function _0x444ea3(_0x5e42c9) {
            var _0x580a94 = _0x44742c;
            (_0x3b4304[_0x580a94(0x498)](showad, 0x1) && dressarr[this['texture'][_0x580a94(0x7ef)][_0x580a94(0x8dc)](0xb)] == 0x0 || _0x3b4304['DbUsy'](showad, 0x2)) && this[_0x580a94(0x67d)](1.05);
        }

        function _0x3c2ba8(_0x5c380c) {
            var _0x37251f = _0x44742c;
            this[_0x37251f(0x67d)](0x1);
        }

        function _0x3b317b(_0x22511c) {
            var _0x557a88 = _0x44742c,
                _0x38da95 = _0x557a88(0x564)[_0x557a88(0xa4e)]('|'),
                _0xbfc5e4 = 0x0;
            while (!![]) {
                switch (_0x38da95[_0xbfc5e4++]) {
                    case '0':
                        sno = this[_0x557a88(0x73d)][_0x557a88(0x7ef)]['substr'](0xb);
                        continue;
                    case '1':
                        _0x4f306b();
                        continue;
                    case '2':
                        if (_0x2cc681[_0x557a88(0x307)](darr[0x0], _0x2cc681['IiBck'](parseInt, sno))) {
                            var _0x20ccbf = '4|1|0|3|2' [_0x557a88(0xa4e)]('|'),
                                _0x572337 = 0x0;
                            while (!![]) {
                                switch (_0x20ccbf[_0x572337++]) {
                                    case '0':
                                        level3doll[_0x557a88(0x997)](_0x2cc681[_0x557a88(0x3e9)], _0x2cc681[_0x557a88(0x9f8)]);
                                        continue;
                                    case '1':
                                        level3doll[_0x557a88(0x997)](_0x2cc681[_0x557a88(0x9cb)], _0x557a88(0x9e7));
                                        continue;
                                    case '2':
                                        darr[0x0] = 0x0;
                                        continue;
                                    case '3':
                                        level3doll[_0x557a88(0x997)](_0x2cc681[_0x557a88(0xad2)], 'Shoe-00');
                                        continue;
                                    case '4':
                                        level3doll[_0x557a88(0x997)]('Dress', _0x557a88(0x394));
                                        continue;
                                }
                                break;
                            }
                        } else(showad == 0x1 && _0x2cc681[_0x557a88(0x2d4)](dressarr[_0x2cc681[_0x557a88(0x4a4)](parseInt, sno)], 0x0) || _0x2cc681[_0x557a88(0x57d)](showad, 0x2)) && (darr[0x0] = _0x2cc681[_0x557a88(0x644)](parseInt, sno), level3doll[_0x557a88(0x997)](_0x557a88(0x488), _0x2cc681[_0x557a88(0x38c)](_0x557a88(0x19a), darr[0x0])), level3doll['setAttachment'](_0x2cc681[_0x557a88(0x9cb)], _0x2cc681[_0x557a88(0x6bb)](_0x2cc681[_0x557a88(0x6dc)], darr[0x0])), level3doll[_0x557a88(0x997)](_0x2cc681[_0x557a88(0x3e9)], _0x2cc681[_0x557a88(0x6bb)](_0x2cc681['ecHgX'], darr[0x0])), level3doll[_0x557a88(0x997)](_0x2cc681[_0x557a88(0xad2)], _0x2cc681[_0x557a88(0x369)](_0x557a88(0x5ef), darr[0x0])));
                        continue;
                    case '3':
                        playsoundeffects(_0x2cc681[_0x557a88(0x3c8)]);
                        continue;
                    case '4':
                        this[_0x557a88(0x67d)](0x1);
                        continue;
                    case '5':
                        btnstart1 = !![];
                        continue;
                    case '6':
                        leveladcheck = 0x1;
                        continue;
                    case '7':
                        _0x2cc681[_0x557a88(0x613)](showad, 0x1) && _0x2cc681['EbzXH'](dressarr[_0x2cc681['JUehE'](parseInt, sno)], 0x1) ? _0x1d63d6() : (dressgliter[_0x557a88(0x86e)][_0x557a88(0x742)](_0x2cc681['Drwrv']), dressgliter['anims'][_0x557a88(0x3ca)](_0x557a88(0x72e)), _0x2cc681[_0x557a88(0x1d7)](playsoundeffects, _0x2cc681[_0x557a88(0x94d)]), game[_0x557a88(0x374)][_0x557a88(0x237)][pageNo][_0x557a88(0x465)][_0x557a88(0x85a)]({
                            'targets': this,
                            'scale': 0.9,
                            'ease': _0x2cc681['IMGyM'],
                            'duration': 0x64,
                            'yoyo': !![]
                        }));
                        continue;
                    case '8':
                        _0x42b377();
                        continue;
                }
                break;
            }
        }
        for (i = 0x8; _0x2cc681[_0x44742c(0x856)](i, 0x1); i--) {
            game[_0x2cc681[_0x44742c(0x9d8)](_0x2cc681[_0x44742c(0x90a)], i)]['on'](_0x2cc681[_0x44742c(0x9ce)], _0xe24d94), game[_0x2cc681[_0x44742c(0x2b7)](_0x2cc681['itkEb'], i)]['on'](_0x2cc681[_0x44742c(0x4aa)], _0x3c2ba8), game[_0x2cc681[_0x44742c(0x723)](_0x2cc681[_0x44742c(0x90a)], i)]['on'](_0x2cc681[_0x44742c(0x90b)], _0x5453c5);
        }

        function _0xe24d94(_0x27cbce) {
            var _0x4204e3 = _0x44742c;
            (_0x3b4304[_0x4204e3(0x2d3)](showad, 0x1) && _0x3b4304[_0x4204e3(0x835)](studarr[this['texture'][_0x4204e3(0x7ef)]['substr'](0xa)], 0x0) || _0x3b4304['eDcyW'](showad, 0x2)) && this[_0x4204e3(0x67d)](1.05);
        }

        function _0x5453c5(_0x3f635e) {
            var _0x91ad29 = _0x44742c,
                _0x56de94 = _0x3b4304[_0x91ad29(0x27c)][_0x91ad29(0xa4e)]('|'),
                _0x3dfb61 = 0x0;
            while (!![]) {
                switch (_0x56de94[_0x3dfb61++]) {
                    case '0':
                        _0x3b4304[_0x91ad29(0x7f7)](_0x42b377);
                        continue;
                    case '1':
                        _0x3b4304[_0x91ad29(0x3db)](darr[0x2], _0x3b4304[_0x91ad29(0xa64)](parseInt, sno)) ? (level3doll[_0x91ad29(0x997)](_0x3b4304['uAtbo'], _0x3b4304[_0x91ad29(0x2d8)]), darr[0x2] = 0x0) : (_0x3b4304[_0x91ad29(0x27f)](showad, 0x1) && _0x3b4304[_0x91ad29(0x5eb)](studarr[_0x3b4304['eRonQ'](parseInt, sno)], 0x0) || _0x3b4304['hihHi'](showad, 0x2)) && (darr[0x2] = _0x3b4304[_0x91ad29(0xa64)](parseInt, sno), level3doll[_0x91ad29(0x997)](_0x3b4304[_0x91ad29(0x760)], _0x3b4304[_0x91ad29(0x1f1)](_0x3b4304['uyRJB'], darr[0x2])));
                        continue;
                    case '2':
                        this['setScale'](0x1);
                        continue;
                    case '3':
                        _0x3b4304['eobwk'](showad, 0x1) && _0x3b4304[_0x91ad29(0x95f)](studarr[_0x3b4304['eRonQ'](parseInt, sno)], 0x1) ? _0x3b4304['WIQGr'](_0x1d63d6) : (dressgliter[_0x91ad29(0x86e)]['load'](_0x3b4304[_0x91ad29(0x4dd)]), dressgliter['anims'][_0x91ad29(0x3ca)](_0x3b4304[_0x91ad29(0x4dd)]), _0x3b4304[_0x91ad29(0xa64)](playsoundeffects, _0x3b4304[_0x91ad29(0x95c)]), game['scene'][_0x91ad29(0x237)][pageNo]['tweens'][_0x91ad29(0x85a)]({
                            'targets': this,
                            'scale': 0.9,
                            'ease': _0x3b4304[_0x91ad29(0x37b)],
                            'duration': 0x64,
                            'yoyo': !![]
                        }));
                        continue;
                    case '4':
                        btnstart1 = !![];
                        continue;
                    case '5':
                        leveladcheck = 0x3;
                        continue;
                    case '6':
                        sno = this[_0x91ad29(0x73d)][_0x91ad29(0x7ef)][_0x91ad29(0x8dc)](0xa);
                        continue;
                    case '7':
                        _0x3b4304[_0x91ad29(0x5b5)](_0x4f306b);
                        continue;
                    case '8':
                        playsoundeffects(_0x3b4304[_0x91ad29(0x2f9)]);
                        continue;
                }
                break;
            }
        }
        for (i = 0x8; _0x2cc681[_0x44742c(0x4c4)](i, 0x1); i--) {
            game[_0x2cc681[_0x44742c(0x904)](_0x2cc681[_0x44742c(0x9d6)], i)]['on'](_0x2cc681['RUYcw'], _0x4fe471), game[_0x2cc681[_0x44742c(0x9c1)](_0x2cc681[_0x44742c(0x9d6)], i)]['on'](_0x2cc681[_0x44742c(0x4aa)], _0x3c2ba8), game[_0x2cc681[_0x44742c(0x1d9)](_0x2cc681[_0x44742c(0x9d6)], i)]['on'](_0x2cc681[_0x44742c(0x90b)], _0x54381f);
        }

        function _0x4fe471(_0x4942ca) {
            var _0x535791 = _0x44742c;
            (_0x2cc681['EbzXH'](showad, 0x1) && _0x2cc681[_0x535791(0x53b)](chainarr[this[_0x535791(0x73d)][_0x535791(0x7ef)][_0x535791(0x8dc)](0xb)], 0x0) || _0x2cc681[_0x535791(0x9db)](showad, 0x2)) && this[_0x535791(0x67d)](1.05);
        }

        function _0x54381f(_0x310a66) {
            var _0x41e66c = _0x44742c;
            leveladcheck = 0x4, this[_0x41e66c(0x67d)](0x1), btnstart1 = !![], _0x3b4304['eRonQ'](playsoundeffects, _0x3b4304['OIgAq']), sno = this[_0x41e66c(0x73d)][_0x41e66c(0x7ef)][_0x41e66c(0x8dc)](0xb), _0x3b4304[_0x41e66c(0x743)](darr[0x3], parseInt(sno)) ? (level3doll[_0x41e66c(0x997)](_0x41e66c(0x91f), _0x3b4304['NQCVi']), darr[0x3] = 0x0) : (_0x3b4304['oLxPu'](showad, 0x1) && _0x3b4304['DeRgl'](chainarr[_0x3b4304[_0x41e66c(0xa64)](parseInt, sno)], 0x0) || _0x3b4304[_0x41e66c(0x2d3)](showad, 0x2)) && (darr[0x3] = _0x3b4304['XaAEt'](parseInt, sno), level3doll[_0x41e66c(0x997)](_0x3b4304[_0x41e66c(0x52c)], _0x3b4304['kCqDK'](_0x3b4304['yZolJ'], darr[0x3]))), _0x3b4304[_0x41e66c(0x27f)](showad, 0x1) && chainarr[_0x3b4304[_0x41e66c(0x5ce)](parseInt, sno)] == 0x1 ? _0x1d63d6() : (dressgliter[_0x41e66c(0x86e)][_0x41e66c(0x742)](_0x3b4304['IKOze']), dressgliter[_0x41e66c(0x86e)][_0x41e66c(0x3ca)](_0x3b4304[_0x41e66c(0x4dd)]), _0x3b4304[_0x41e66c(0x18a)](playsoundeffects, 'glitter'), game[_0x41e66c(0x374)][_0x41e66c(0x237)][pageNo][_0x41e66c(0x465)][_0x41e66c(0x85a)]({
                'targets': this,
                'scale': 0.9,
                'ease': _0x3b4304['NBQOC'],
                'duration': 0x64,
                'yoyo': !![]
            })), _0x3b4304['XwnAj'](_0x42b377), _0x3b4304[_0x41e66c(0x4b3)](_0x4f306b);
        }
        for (i = 0x2; _0x2cc681['sILPA'](i, 0x1); i--) {
            game[_0x2cc681[_0x44742c(0x5ec)] + i]['on'](_0x2cc681[_0x44742c(0x9ce)], _0x944f89), game[_0x44742c(0x949) + i]['on'](_0x2cc681[_0x44742c(0x4aa)], _0x3c2ba8), game[_0x2cc681['FkqrW'](_0x44742c(0x949), i)]['on'](_0x44742c(0x637), _0x4fb1c2);
        }

        function _0x944f89(_0x3480f4) {
            var _0xe97b33 = _0x44742c;
            (_0x3b4304[_0xe97b33(0x8b4)](showad, 0x1) && _0x3b4304[_0xe97b33(0x27f)](accarr[this[_0xe97b33(0x73d)]['key'][_0xe97b33(0x8dc)](0x9)], 0x0) || _0x3b4304['dIQcg'](showad, 0x2)) && this[_0xe97b33(0x67d)](1.05);
        }

        function _0x4fb1c2(_0x3d71ce) {
            var _0x2f8b40 = _0x44742c;
            leveladcheck = 0x5, this[_0x2f8b40(0x67d)](0x1), btnstart1 = !![], _0x3b4304[_0x2f8b40(0x5ce)](playsoundeffects, _0x3b4304['OIgAq']), sno = this[_0x2f8b40(0x73d)][_0x2f8b40(0x7ef)][_0x2f8b40(0x8dc)](0x9), _0x3b4304[_0x2f8b40(0x498)](darr[0x4], _0x3b4304[_0x2f8b40(0x18a)](parseInt, sno)) ? (darr[0x4] = 0x0, level3doll[_0x2f8b40(0x997)](_0x3b4304[_0x2f8b40(0x718)], _0x3b4304[_0x2f8b40(0x1f1)](_0x3b4304[_0x2f8b40(0x897)], darr[0x4]))) : (_0x3b4304[_0x2f8b40(0x992)](showad, 0x1) && _0x3b4304[_0x2f8b40(0x835)](accarr[parseInt(sno)], 0x0) || _0x3b4304[_0x2f8b40(0x462)](showad, 0x2)) && (darr[0x4] = _0x3b4304[_0x2f8b40(0x18a)](parseInt, sno), level3doll[_0x2f8b40(0x997)](_0x3b4304[_0x2f8b40(0x718)], _0x3b4304[_0x2f8b40(0x1f1)](_0x3b4304['sJhMU'], darr[0x4]))), _0x3b4304[_0x2f8b40(0x992)](showad, 0x1) && _0x3b4304[_0x2f8b40(0x3d6)](accarr[parseInt(sno)], 0x1) ? _0x3b4304['lgNvR'](_0x1d63d6) : (dressgliter[_0x2f8b40(0x86e)][_0x2f8b40(0x742)](_0x3b4304['IKOze']), dressgliter[_0x2f8b40(0x86e)][_0x2f8b40(0x3ca)]('dressgliter'), _0x3b4304[_0x2f8b40(0x5ce)](playsoundeffects, _0x3b4304[_0x2f8b40(0x95c)]), game[_0x2f8b40(0x374)][_0x2f8b40(0x237)][pageNo][_0x2f8b40(0x465)][_0x2f8b40(0x85a)]({
                'targets': this,
                'scale': 0.9,
                'ease': _0x3b4304[_0x2f8b40(0x37b)],
                'duration': 0x64,
                'yoyo': !![]
            })), _0x3b4304[_0x2f8b40(0x3bb)](_0x42b377), _0x3b4304[_0x2f8b40(0x4b3)](_0x4f306b);
        }
        for (i = 0x3; _0x2cc681[_0x44742c(0x856)](i, 0x3); i--) {
            game[_0x2cc681['BOXrZ'](_0x2cc681[_0x44742c(0x5ec)], i)]['on'](_0x44742c(0x82f), _0x944f89), game[_0x2cc681[_0x44742c(0x8e6)](_0x44742c(0x949), i)]['on'](_0x2cc681[_0x44742c(0x4aa)], _0x3c2ba8), game[_0x2cc681[_0x44742c(0x535)](_0x44742c(0x949), i)]['on'](_0x2cc681['odAdK'], _0x2e2a05);
        }
        for (i = 0x6; i >= 0x6; i--) {
            game[_0x2cc681[_0x44742c(0x5ec)] + i]['on'](_0x2cc681[_0x44742c(0x9ce)], _0x944f89), game[_0x2cc681['eJCEp'](_0x2cc681[_0x44742c(0x5ec)], i)]['on'](_0x2cc681[_0x44742c(0x4aa)], _0x3c2ba8), game[_0x44742c(0x949) + i]['on'](_0x44742c(0x637), _0x2e2a05);
        }

        function _0x944f89(_0x367472) {
            var _0x251a06 = _0x44742c;
            (_0x3b4304[_0x251a06(0x54c)](showad, 0x1) && _0x3b4304[_0x251a06(0x8b4)](accarr[this[_0x251a06(0x73d)][_0x251a06(0x7ef)]['substr'](0x9)], 0x0) || _0x3b4304[_0x251a06(0x877)](showad, 0x2)) && this[_0x251a06(0x67d)](1.05);
        }

        function _0x2e2a05(_0x1cfc4c) {
            var _0x4e08b6 = _0x44742c,
                _0x3253e1 = _0x2cc681[_0x4e08b6(0x73c)][_0x4e08b6(0xa4e)]('|'),
                _0x4bfcf7 = 0x0;
            while (!![]) {
                switch (_0x3253e1[_0x4bfcf7++]) {
                    case '0':
                        _0x42b377();
                        continue;
                    case '1':
                        _0x4f306b();
                        continue;
                    case '2':
                        _0x2cc681[_0x4e08b6(0x1a7)](playsoundeffects, _0x2cc681['BCZsf']);
                        continue;
                    case '3':
                        leveladcheck = 0x5;
                        continue;
                    case '4':
                        sno = this[_0x4e08b6(0x73d)]['key'][_0x4e08b6(0x8dc)](0x9);
                        continue;
                    case '5':
                        _0x2cc681[_0x4e08b6(0x5f1)](showad, 0x1) && _0x2cc681['BHVLq'](accarr[_0x2cc681[_0x4e08b6(0x894)](parseInt, sno)], 0x1) ? _0x2cc681[_0x4e08b6(0x987)](_0x1d63d6) : (dressgliter['anims'][_0x4e08b6(0x742)](_0x2cc681[_0x4e08b6(0x875)]), dressgliter[_0x4e08b6(0x86e)][_0x4e08b6(0x3ca)](_0x2cc681[_0x4e08b6(0x875)]), _0x2cc681[_0x4e08b6(0x4ab)](playsoundeffects, _0x4e08b6(0x4ac)), game[_0x4e08b6(0x374)][_0x4e08b6(0x237)][pageNo][_0x4e08b6(0x465)][_0x4e08b6(0x85a)]({
                            'targets': this,
                            'scale': 0.9,
                            'ease': _0x2cc681[_0x4e08b6(0x96e)],
                            'duration': 0x64,
                            'yoyo': !![]
                        }));
                        continue;
                    case '6':
                        this[_0x4e08b6(0x67d)](0x1);
                        continue;
                    case '7':
                        btnstart1 = !![];
                        continue;
                    case '8':
                        _0x2cc681[_0x4e08b6(0x5e2)](darr[0x5], _0x2cc681['IiBck'](parseInt, sno)) ? (darr[0x5] = 0x0, level3doll['setAttachment'](_0x2cc681[_0x4e08b6(0x585)], _0x2cc681[_0x4e08b6(0x38c)](_0x2cc681['wkHnZ'], darr[0x5]))) : (showad == 0x1 && accarr[parseInt(sno)] == 0x0 || showad == 0x2) && (darr[0x5] = _0x2cc681['ZLMJe'](parseInt, sno), level3doll['setAttachment'](_0x2cc681[_0x4e08b6(0x585)], _0x2cc681[_0x4e08b6(0x196)](_0x2cc681[_0x4e08b6(0x5e3)], darr[0x5])));
                        continue;
                }
                break;
            }
        }
        for (i = 0x4; _0x2cc681[_0x44742c(0x18d)](i, 0x4); i--) {
            game[_0x2cc681[_0x44742c(0x6bb)](_0x44742c(0x949), i)]['on'](_0x2cc681[_0x44742c(0x9ce)], _0x944f89), game[_0x44742c(0x949) + i]['on'](_0x2cc681[_0x44742c(0x4aa)], _0x3c2ba8), game[_0x2cc681[_0x44742c(0x805)](_0x44742c(0x949), i)]['on'](_0x2cc681['odAdK'], _0x33d771);
        }

        function _0x944f89(_0x1bf958) {
            var _0x5a94fa = _0x44742c;
            (_0x3b4304[_0x5a94fa(0x184)](showad, 0x1) && _0x3b4304['YNJXS'](accarr[this['texture'][_0x5a94fa(0x7ef)][_0x5a94fa(0x8dc)](0x9)], 0x0) || _0x3b4304[_0x5a94fa(0x5ee)](showad, 0x2)) && this[_0x5a94fa(0x67d)](1.05);
        }

        function _0x33d771(_0x14bde1) {
            var _0x49b4e6 = _0x44742c,
                _0x148735 = _0x2cc681[_0x49b4e6(0x7b4)][_0x49b4e6(0xa4e)]('|'),
                _0x5a1072 = 0x0;
            while (!![]) {
                switch (_0x148735[_0x5a1072++]) {
                    case '0':
                        btnstart1 = !![];
                        continue;
                    case '1':
                        _0x2cc681[_0x49b4e6(0x70f)](playsoundeffects, 'itemclick');
                        continue;
                    case '2':
                        leveladcheck = 0x5;
                        continue;
                    case '3':
                        this[_0x49b4e6(0x67d)](0x1);
                        continue;
                    case '4':
                        _0x2cc681[_0x49b4e6(0x307)](darr[0x6], _0x2cc681[_0x49b4e6(0x277)](parseInt, sno)) ? (darr[0x6] = 0x0, level3doll[_0x49b4e6(0x997)](_0x49b4e6(0xa48), _0x49b4e6(0x470) + darr[0x6])) : (_0x2cc681[_0x49b4e6(0x5df)](showad, 0x1) && _0x2cc681[_0x49b4e6(0x57d)](accarr[_0x2cc681[_0x49b4e6(0xa9c)](parseInt, sno)], 0x0) || _0x2cc681[_0x49b4e6(0x9ff)](showad, 0x2)) && (darr[0x6] = _0x2cc681['zNXMs'](parseInt, sno), level3doll[_0x49b4e6(0x997)](_0x2cc681[_0x49b4e6(0x665)], _0x2cc681[_0x49b4e6(0x8f3)](_0x2cc681[_0x49b4e6(0x9b0)], darr[0x6])));
                        continue;
                    case '5':
                        sno = this['texture'][_0x49b4e6(0x7ef)][_0x49b4e6(0x8dc)](0x9);
                        continue;
                    case '6':
                        _0x4f306b();
                        continue;
                    case '7':
                        _0x2cc681['wQnzr'](showad, 0x1) && _0x2cc681[_0x49b4e6(0x187)](accarr[_0x2cc681['zgXPE'](parseInt, sno)], 0x1) ? _0x1d63d6() : (dressgliter[_0x49b4e6(0x86e)][_0x49b4e6(0x742)](_0x2cc681['Drwrv']), dressgliter[_0x49b4e6(0x86e)][_0x49b4e6(0x3ca)](_0x49b4e6(0x72e)), _0x2cc681[_0x49b4e6(0xa4a)](playsoundeffects, _0x49b4e6(0x4ac)), game['scene'][_0x49b4e6(0x237)][pageNo][_0x49b4e6(0x465)][_0x49b4e6(0x85a)]({
                            'targets': this,
                            'scale': 0.9,
                            'ease': _0x2cc681['IMGyM'],
                            'duration': 0x64,
                            'yoyo': !![]
                        }));
                        continue;
                    case '8':
                        _0x42b377();
                        continue;
                }
                break;
            }
        }
        for (i = 0x5; i >= 0x5; i--) {
            game[_0x2cc681[_0x44742c(0x924)](_0x2cc681[_0x44742c(0x5ec)], i)]['on'](_0x44742c(0x82f), _0x944f89), game[_0x44742c(0x949) + i]['on'](_0x2cc681['TJnTS'], _0x3c2ba8), game[_0x2cc681[_0x44742c(0x970)](_0x2cc681['qsdGC'], i)]['on'](_0x2cc681[_0x44742c(0x90b)], _0x39366a);
        }
        for (i = 0x8; i >= 0x8; i--) {
            game[_0x2cc681[_0x44742c(0x38c)](_0x2cc681[_0x44742c(0x5ec)], i)]['on'](_0x2cc681[_0x44742c(0x9ce)], _0x944f89), game[_0x2cc681[_0x44742c(0x5ec)] + i]['on'](_0x44742c(0x338), _0x3c2ba8), game[_0x2cc681[_0x44742c(0x8f3)](_0x2cc681[_0x44742c(0x5ec)], i)]['on'](_0x44742c(0x637), _0x39366a);
        }

        function _0x944f89(_0x1711d7) {
            var _0x5f4c6d = _0x44742c;
            (_0x3b4304[_0x5f4c6d(0x49a)](showad, 0x1) && _0x3b4304[_0x5f4c6d(0x3e4)](accarr[this[_0x5f4c6d(0x73d)]['key'][_0x5f4c6d(0x8dc)](0x9)], 0x0) || showad == 0x2) && this[_0x5f4c6d(0x67d)](1.05);
        }

        function _0x39366a(_0x70ccf1) {
            var _0x39ef99 = _0x44742c,
                _0xed520b = _0x3b4304[_0x39ef99(0x6f5)][_0x39ef99(0xa4e)]('|'),
                _0x435648 = 0x0;
            while (!![]) {
                switch (_0xed520b[_0x435648++]) {
                    case '0':
                        _0x3b4304[_0x39ef99(0x86c)](_0x42b377);
                        continue;
                    case '1':
                        _0x3b4304[_0x39ef99(0x827)](playsoundeffects, _0x39ef99(0x27b));
                        continue;
                    case '2':
                        _0x3b4304[_0x39ef99(0x7d0)](showad, 0x1) && _0x3b4304[_0x39ef99(0x7d0)](accarr[_0x3b4304['HYGlz'](parseInt, sno)], 0x1) ? _0x3b4304['MrJzK'](_0x1d63d6) : (dressgliter[_0x39ef99(0x86e)]['load'](_0x3b4304[_0x39ef99(0x4dd)]), dressgliter[_0x39ef99(0x86e)]['play'](_0x3b4304[_0x39ef99(0x4dd)]), _0x3b4304[_0x39ef99(0x827)](playsoundeffects, 'glitter'), game['scene']['scenes'][pageNo][_0x39ef99(0x465)][_0x39ef99(0x85a)]({
                            'targets': this,
                            'scale': 0.9,
                            'ease': _0x3b4304[_0x39ef99(0x37b)],
                            'duration': 0x64,
                            'yoyo': !![]
                        }));
                        continue;
                    case '3':
                        _0x3b4304[_0x39ef99(0x2d3)](darr[0x7], _0x3b4304['wVXxa'](parseInt, sno)) ? (darr[0x7] = 0x0, level3doll['setAttachment'](_0x3b4304['eCVlA'], 'Hand\x20Acc-0' + darr[0x7])) : (_0x3b4304[_0x39ef99(0x3db)](showad, 0x1) && _0x3b4304[_0x39ef99(0x184)](accarr[_0x3b4304[_0x39ef99(0x18a)](parseInt, sno)], 0x0) || _0x3b4304['TYoli'](showad, 0x2)) && (darr[0x7] = parseInt(sno), level3doll[_0x39ef99(0x997)](_0x3b4304[_0x39ef99(0x1ee)], _0x3b4304[_0x39ef99(0x4ae)](_0x3b4304[_0x39ef99(0x83c)], darr[0x7])));
                        continue;
                    case '4':
                        _0x3b4304[_0x39ef99(0x1fa)](_0x4f306b);
                        continue;
                    case '5':
                        leveladcheck = 0x5;
                        continue;
                    case '6':
                        sno = this[_0x39ef99(0x73d)][_0x39ef99(0x7ef)][_0x39ef99(0x8dc)](0x9);
                        continue;
                    case '7':
                        this[_0x39ef99(0x67d)](0x1);
                        continue;
                    case '8':
                        btnstart1 = !![];
                        continue;
                }
                break;
            }
        }
        for (i = 0x7; _0x2cc681['Zesvc'](i, 0x7); i--) {
            game[_0x2cc681[_0x44742c(0x5e4)](_0x2cc681[_0x44742c(0x5ec)], i)]['on'](_0x2cc681[_0x44742c(0x9ce)], _0x944f89), game[_0x2cc681[_0x44742c(0x6f2)](_0x2cc681['qsdGC'], i)]['on'](_0x44742c(0x338), _0x3c2ba8), game[_0x2cc681[_0x44742c(0x51d)](_0x44742c(0x949), i)]['on'](_0x2cc681[_0x44742c(0x90b)], _0x1a9de9);
        }

        function _0x944f89(_0x1d24d6) {
            var _0x4b07b8 = _0x44742c;
            (_0x3b4304[_0x4b07b8(0x4f6)](showad, 0x1) && _0x3b4304[_0x4b07b8(0x763)](accarr[this[_0x4b07b8(0x73d)][_0x4b07b8(0x7ef)][_0x4b07b8(0x8dc)](0x9)], 0x0) || showad == 0x2) && this[_0x4b07b8(0x67d)](1.05);
        }

        function _0x1a9de9(_0x223478) {
            var _0x7302df = _0x44742c,
                _0xedb2aa = _0x2cc681[_0x7302df(0x584)][_0x7302df(0xa4e)]('|'),
                _0x40355a = 0x0;
            while (!![]) {
                switch (_0xedb2aa[_0x40355a++]) {
                    case '0':
                        _0x2cc681[_0x7302df(0x365)](_0x42b377);
                        continue;
                    case '1':
                        showad == 0x1 && accarr[_0x2cc681[_0x7302df(0x878)](parseInt, sno)] == 0x1 ? _0x1d63d6() : (dressgliter[_0x7302df(0x86e)]['load'](_0x2cc681[_0x7302df(0x875)]), dressgliter[_0x7302df(0x86e)][_0x7302df(0x3ca)](_0x2cc681['Drwrv']), _0x2cc681[_0x7302df(0x29a)](playsoundeffects, _0x7302df(0x4ac)), game[_0x7302df(0x374)][_0x7302df(0x237)][pageNo]['tweens'][_0x7302df(0x85a)]({
                            'targets': this,
                            'scale': 0.9,
                            'ease': _0x2cc681[_0x7302df(0x96e)],
                            'duration': 0x64,
                            'yoyo': !![]
                        }));
                        continue;
                    case '2':
                        _0x4f306b();
                        continue;
                    case '3':
                        darr[0x8] == _0x2cc681[_0x7302df(0x985)](parseInt, sno) ? (darr[0x8] = 0x0, level3doll[_0x7302df(0x997)](_0x2cc681[_0x7302df(0x5bd)], _0x7302df(0x472) + darr[0x8])) : (showad == 0x1 && _0x2cc681[_0x7302df(0x701)](accarr[_0x2cc681[_0x7302df(0x2b1)](parseInt, sno)], 0x0) || showad == 0x2) && (darr[0x8] = parseInt(sno), level3doll['setAttachment'](_0x2cc681[_0x7302df(0x5bd)], 'Head\x20Acc-0' + darr[0x8]));
                        continue;
                    case '4':
                        btnstart1 = !![];
                        continue;
                    case '5':
                        sno = this[_0x7302df(0x73d)][_0x7302df(0x7ef)][_0x7302df(0x8dc)](0x9);
                        continue;
                    case '6':
                        _0x2cc681[_0x7302df(0x590)](playsoundeffects, _0x2cc681[_0x7302df(0x3c8)]);
                        continue;
                    case '7':
                        this[_0x7302df(0x67d)](0x1);
                        continue;
                    case '8':
                        leveladcheck = 0x5;
                        continue;
                }
                break;
            }
        }
        for (i = 0x8; _0x2cc681[_0x44742c(0x856)](i, 0x1); i--) {
            game[_0x2cc681[_0x44742c(0x9b7)](_0x2cc681[_0x44742c(0x3f6)], i)]['on'](_0x44742c(0x82f), _0x1eebb9), game[_0x2cc681[_0x44742c(0x7e9)](_0x44742c(0x21f), i)]['on'](_0x2cc681[_0x44742c(0x4aa)], _0x3c2ba8), game[_0x2cc681[_0x44742c(0x1d9)](_0x44742c(0x21f), i)]['on'](_0x2cc681[_0x44742c(0x90b)], _0x4676bf);
        }

        function _0x1eebb9(_0x29a6f6) {
            var _0x4bf773 = _0x44742c;
            (showad == 0x1 && _0x3b4304[_0x4bf773(0x734)](hairarr[this['texture'][_0x4bf773(0x7ef)][_0x4bf773(0x8dc)](0xa)], 0x0) || _0x3b4304[_0x4bf773(0x607)](showad, 0x2)) && this[_0x4bf773(0x67d)](1.05);
        }

        function _0x4676bf(_0x1153d1) {
            var _0x40a17c = _0x44742c,
                _0x5dd2ac = _0x2cc681['aQELZ'][_0x40a17c(0xa4e)]('|'),
                _0x21b83d = 0x0;
            while (!![]) {
                switch (_0x5dd2ac[_0x21b83d++]) {
                    case '0':
                        btnstart1 = !![];
                        continue;
                    case '1':
                        _0x2cc681['JHVQa'](playsoundeffects, _0x2cc681[_0x40a17c(0x3c8)]);
                        continue;
                    case '2':
                        this[_0x40a17c(0x67d)](0x1);
                        continue;
                    case '3':
                        _0x2cc681[_0x40a17c(0x48a)](_0x42b377);
                        continue;
                    case '4':
                        sno = this[_0x40a17c(0x73d)][_0x40a17c(0x7ef)][_0x40a17c(0x8dc)](0xa);
                        continue;
                    case '5':
                        showad == 0x1 && _0x2cc681[_0x40a17c(0xa71)](hairarr[_0x2cc681[_0x40a17c(0x194)](parseInt, sno)], 0x1) ? _0x2cc681[_0x40a17c(0x48a)](_0x1d63d6) : (dressgliter[_0x40a17c(0x86e)][_0x40a17c(0x742)](_0x2cc681[_0x40a17c(0x875)]), dressgliter[_0x40a17c(0x86e)][_0x40a17c(0x3ca)](_0x2cc681[_0x40a17c(0x875)]), _0x2cc681[_0x40a17c(0x96a)](playsoundeffects, _0x2cc681[_0x40a17c(0x94d)]), game[_0x40a17c(0x374)][_0x40a17c(0x237)][pageNo][_0x40a17c(0x465)]['add']({
                            'targets': this,
                            'scale': 0.9,
                            'ease': 'Linear',
                            'duration': 0x64,
                            'yoyo': !![]
                        }));
                        continue;
                    case '6':
                        leveladcheck = 0x2;
                        continue;
                    case '7':
                        _0x2cc681[_0x40a17c(0xaca)](darr[0x1], parseInt(sno)) ? (level3doll['setAttachment'](_0x2cc681['LoWXD'], _0x2cc681['QVRGF']), level3doll[_0x40a17c(0x997)](_0x2cc681['DtMRE'], _0x2cc681[_0x40a17c(0x91a)]), darr[0x1] = 0x0) : (showad == 0x1 && _0x2cc681[_0x40a17c(0xa71)](hairarr[parseInt(sno)], 0x0) || _0x2cc681[_0x40a17c(0xa1d)](showad, 0x2)) && (darr[0x1] = _0x2cc681['gZntB'](parseInt, sno), level3doll['setAttachment'](_0x2cc681[_0x40a17c(0x3e2)], _0x2cc681['vqsAc'](_0x2cc681[_0x40a17c(0x47a)], darr[0x1])), level3doll['setAttachment'](_0x2cc681['LoWXD'], _0x2cc681[_0x40a17c(0x887)](_0x2cc681['Fyetw'], darr[0x1])));
                        continue;
                    case '8':
                        _0x2cc681[_0x40a17c(0x7d5)](_0x4f306b);
                        continue;
                }
                break;
            }
        }
    }

    function _0x42b377() {
        var _0x1903cb = _0x222a04;
        loadFinish && _0x2cc681[_0x1903cb(0x5a3)](done2[_0x1903cb(0xa6e)], ![]) && (done2['visible'] = !![], done2[_0x1903cb(0x67d)](0x0), game['scene'][_0x1903cb(0x237)][pageNo][_0x1903cb(0x465)]['add']({
            'targets': done2,
            'scaleX': 0x1,
            'scaleY': 0x1,
            'ease': _0x1903cb(0x901),
            'duration': 0x1f4
        }), game['scene'][_0x1903cb(0x237)][pageNo][_0x1903cb(0x465)]['add']({
            'targets': done2,
            'angle': -0x168,
            'ease': _0x1903cb(0x901),
            'duration': 0x1f4
        }));
    }
    larrow['on'](_0x2cc681[_0x222a04(0x90b)], _0x353aee);

    function _0x353aee() {
        var _0x5bc138 = _0x222a04;
        _0x2cc681['glQWY'](playsoundeffects, _0x5bc138(0x51a));
        if (game[_0x2cc681['qaOFk'](_0x2cc681[_0x5bc138(0x90a)], 0x1)][_0x5bc138(0xa6e)]) {
            var _0x7bd60a = _0x5bc138(0x729)['split']('|'),
                _0x47599e = 0x0;
            while (!![]) {
                switch (_0x7bd60a[_0x47599e++]) {
                    case '0':
                        for (i = 0x1; _0x2cc681['LwOZr'](i, 0x8); i++) {
                            game[_0x2cc681[_0x5bc138(0x965)](_0x2cc681['itkEb'], i)][_0x5bc138(0xa6e)] = ![], game[_0x2cc681[_0x5bc138(0x535)](_0x5bc138(0x7e0), i)][_0x5bc138(0xa6e)] = ![], game[_0x2cc681[_0x5bc138(0x3f6)] + i][_0x5bc138(0xa6e)] = ![], game[_0x2cc681['IulSz'](_0x2cc681[_0x5bc138(0x5ec)], i)][_0x5bc138(0xa6e)] = ![];
                        }
                        continue;
                    case '1':
                        game[_0x5bc138(0x487) + 0x2][_0x5bc138(0x254)](0x1);
                        continue;
                    case '2':
                        for (i = 0x1; i <= 0x5; i++) {
                            game[_0x2cc681[_0x5bc138(0x5e9)](_0x2cc681['Dnntf'], i)][_0x5bc138(0xa74)]({
                                'pixelPerfect': !![],
                                'useHandCursor': !![]
                            });
                        }
                        continue;
                    case '3':
                        if (_0x2cc681[_0x5bc138(0xaca)](showad, 0x1))
                            for (i = 0x8; i >= 0x1; i--) {
                                _0x2cc681[_0x5bc138(0x307)](chainarr[i], 0x1) && (game[_0x2cc681[_0x5bc138(0x965)](_0x2cc681[_0x5bc138(0x9dc)], i)][_0x5bc138(0xa6e)] = !![]);
                            }
                        continue;
                    case '4':
                        level3text['setFrame'](0x2);
                        continue;
                    case '5':
                        for (i = 0x1; _0x2cc681[_0x5bc138(0x77b)](i, 0x5); i++) {
                            game[_0x2cc681[_0x5bc138(0x267)] + i][_0x5bc138(0x254)](0x0);
                        }
                        continue;
                    case '6':
                        game[_0x2cc681[_0x5bc138(0x8f3)](_0x2cc681[_0x5bc138(0x267)], 0x2)]['disableInteractive']();
                        continue;
                    case '7':
                        for (i = 0x1; i <= 0x8; i++) {
                            game[_0x2cc681[_0x5bc138(0x7e9)](_0x2cc681[_0x5bc138(0x9d6)], i)][_0x5bc138(0xa6e)] = !![];
                        }
                        continue;
                    case '8':
                        if (_0x2cc681[_0x5bc138(0x57d)](showad, 0x1))
                            for (i = 0x8; _0x2cc681[_0x5bc138(0x834)](i, 0x1); i--) {
                                var _0x36b053 = _0x2cc681[_0x5bc138(0x98a)][_0x5bc138(0xa4e)]('|'),
                                    _0x1de3b0 = 0x0;
                                while (!![]) {
                                    switch (_0x36b053[_0x1de3b0++]) {
                                        case '0':
                                            chainarr[i] == 0x1 && (game[_0x2cc681['lXWpY'](_0x5bc138(0x2e7), i)][_0x5bc138(0xa6e)] = ![]);
                                            continue;
                                        case '1':
                                            _0x2cc681['Blqzg'](dressarr[i], 0x1) && (game[_0x5bc138(0x5c1) + i]['visible'] = ![]);
                                            continue;
                                        case '2':
                                            _0x2cc681[_0x5bc138(0x321)](studarr[i], 0x1) && (game[_0x2cc681[_0x5bc138(0x209)](_0x2cc681['ZAQJQ'], i)][_0x5bc138(0xa6e)] = ![]);
                                            continue;
                                        case '3':
                                            accarr[i] == 0x1 && (game['level3accvideo' + i][_0x5bc138(0xa6e)] = ![]);
                                            continue;
                                        case '4':
                                            _0x2cc681[_0x5bc138(0x307)](hairarr[i], 0x1) && (game[_0x2cc681[_0x5bc138(0x50c)](_0x2cc681[_0x5bc138(0x950)], i)]['visible'] = ![]);
                                            continue;
                                    }
                                    break;
                                }
                            }
                        continue;
                }
                break;
            }
        } else {
            if (game[_0x2cc681[_0x5bc138(0x9d6)] + 0x1][_0x5bc138(0xa6e)]) {
                var _0x342a0b = _0x2cc681[_0x5bc138(0x941)]['split']('|'),
                    _0x4d9e5e = 0x0;
                while (!![]) {
                    switch (_0x342a0b[_0x4d9e5e++]) {
                        case '0':
                            if (showad == 0x1)
                                for (i = 0x8; _0x2cc681[_0x5bc138(0x551)](i, 0x1); i--) {
                                    chainarr[i] == 0x1 && (game[_0x2cc681[_0x5bc138(0x507)](_0x2cc681[_0x5bc138(0x9dc)], i)][_0x5bc138(0xa6e)] = ![]), _0x2cc681[_0x5bc138(0x701)](studarr[i], 0x1) && (game[_0x2cc681[_0x5bc138(0x9e0)] + i][_0x5bc138(0xa6e)] = ![]), _0x2cc681[_0x5bc138(0x2b5)](accarr[i], 0x1) && (game[_0x2cc681[_0x5bc138(0x27d)] + i]['visible'] = ![]), _0x2cc681[_0x5bc138(0x5df)](hairarr[i], 0x1) && (game[_0x2cc681[_0x5bc138(0x247)](_0x2cc681[_0x5bc138(0x950)], i)][_0x5bc138(0xa6e)] = ![]), _0x2cc681['PCnlu'](dressarr[i], 0x1) && (game[_0x2cc681[_0x5bc138(0x58f)] + i][_0x5bc138(0xa6e)] = ![]);
                                }
                            continue;
                        case '1':
                            game[_0x2cc681[_0x5bc138(0x8c9)](_0x5bc138(0x487), 0x3)][_0x5bc138(0x254)](0x1);
                            continue;
                        case '2':
                            for (i = 0x1; i <= 0x5; i++) {
                                game[_0x2cc681[_0x5bc138(0x267)] + i][_0x5bc138(0x254)](0x0);
                            }
                            continue;
                        case '3':
                            for (i = 0x1; _0x2cc681[_0x5bc138(0x3c2)](i, 0x8); i++) {
                                game[_0x2cc681[_0x5bc138(0x35b)](_0x2cc681[_0x5bc138(0x5ec)], i)][_0x5bc138(0xa6e)] = !![];
                            }
                            continue;
                        case '4':
                            for (i = 0x1; _0x2cc681[_0x5bc138(0x8c8)](i, 0x5); i++) {
                                game[_0x2cc681[_0x5bc138(0x924)](_0x5bc138(0x487), i)][_0x5bc138(0xa74)]({
                                    'pixelPerfect': !![],
                                    'useHandCursor': !![]
                                });
                            }
                            continue;
                        case '5':
                            game[_0x5bc138(0x487) + 0x3][_0x5bc138(0x88f)]();
                            continue;
                        case '6':
                            if (_0x2cc681[_0x5bc138(0x227)](showad, 0x1))
                                for (i = 0x8; _0x2cc681[_0x5bc138(0x4c4)](i, 0x1); i--) {
                                    accarr[i] == 0x1 && (game[_0x2cc681[_0x5bc138(0x27d)] + i]['visible'] = !![]);
                                }
                            continue;
                        case '7':
                            level3text['setFrame'](0x3);
                            continue;
                        case '8':
                            for (i = 0x1; _0x2cc681[_0x5bc138(0x77b)](i, 0x8); i++) {
                                game[_0x2cc681[_0x5bc138(0x2d6)](_0x5bc138(0x8ac), i)][_0x5bc138(0xa6e)] = ![], game[_0x2cc681[_0x5bc138(0x2b7)](_0x5bc138(0x7e0), i)][_0x5bc138(0xa6e)] = ![], game[_0x2cc681[_0x5bc138(0xa1e)](_0x2cc681[_0x5bc138(0x3f6)], i)][_0x5bc138(0xa6e)] = ![], game[_0x2cc681[_0x5bc138(0x5ec)] + i]['visible'] = ![];
                            }
                            continue;
                    }
                    break;
                }
            } else {
                if (game[_0x2cc681['qFRsl'](_0x2cc681[_0x5bc138(0x5ec)], 0x1)][_0x5bc138(0xa6e)]) {
                    level3text[_0x5bc138(0x254)](0x4);
                    for (i = 0x1; _0x2cc681[_0x5bc138(0x3c2)](i, 0x5); i++) {
                        game[_0x2cc681[_0x5bc138(0x199)](_0x2cc681[_0x5bc138(0x267)], i)]['setFrame'](0x0);
                    }
                    for (i = 0x1; _0x2cc681['iPDKX'](i, 0x5); i++) {
                        game[_0x2cc681['Dnntf'] + i]['setInteractive']({
                            'pixelPerfect': !![],
                            'useHandCursor': !![]
                        });
                    }
                    game[_0x2cc681[_0x5bc138(0x2ad)](_0x2cc681['Dnntf'], 0x4)][_0x5bc138(0x88f)](), game[_0x2cc681['eJyjB'](_0x2cc681[_0x5bc138(0x267)], 0x4)][_0x5bc138(0x254)](0x1);
                    for (i = 0x1; _0x2cc681['LwOZr'](i, 0x8); i++) {
                        game[_0x2cc681[_0x5bc138(0x1cc)]('level3stud', i)][_0x5bc138(0xa6e)] = ![], game[_0x2cc681['EJdfo'](_0x2cc681[_0x5bc138(0x9d6)], i)][_0x5bc138(0xa6e)] = ![], game[_0x2cc681[_0x5bc138(0x1d2)](_0x2cc681['lgMSU'], i)][_0x5bc138(0xa6e)] = ![], game[_0x2cc681['qFRsl'](_0x2cc681[_0x5bc138(0x5ec)], i)][_0x5bc138(0xa6e)] = ![];
                    }
                    if (_0x2cc681[_0x5bc138(0x9c2)](showad, 0x1))
                        for (i = 0x8; _0x2cc681['qNbiP'](i, 0x1); i--) {
                            chainarr[i] == 0x1 && (game[_0x2cc681['YPEUd'](_0x2cc681['pyOuc'], i)][_0x5bc138(0xa6e)] = ![]), _0x2cc681['syfRw'](studarr[i], 0x1) && (game[_0x2cc681['tTYyu'](_0x2cc681['ZAQJQ'], i)][_0x5bc138(0xa6e)] = ![]), _0x2cc681['KTjUO'](accarr[i], 0x1) && (game[_0x2cc681['ZePQS'](_0x2cc681[_0x5bc138(0x27d)], i)][_0x5bc138(0xa6e)] = ![]), _0x2cc681[_0x5bc138(0x613)](hairarr[i], 0x1) && (game[_0x2cc681['HGBYm'](_0x2cc681['vgtzZ'], i)][_0x5bc138(0xa6e)] = ![]), _0x2cc681[_0x5bc138(0x299)](dressarr[i], 0x1) && (game[_0x5bc138(0x5c1) + i][_0x5bc138(0xa6e)] = ![]);
                        }
                    for (i = 0x1; _0x2cc681[_0x5bc138(0x642)](i, 0x8); i++) {
                        game[_0x2cc681[_0x5bc138(0x8e5)](_0x2cc681[_0x5bc138(0x3f6)], i)][_0x5bc138(0xa6e)] = !![];
                    }
                    if (_0x2cc681[_0x5bc138(0x187)](showad, 0x1))
                        for (i = 0x8; _0x2cc681[_0x5bc138(0x1f3)](i, 0x1); i--) {
                            _0x2cc681['fkoGi'](hairarr[i], 0x1) && (game[_0x2cc681['wvwZN'](_0x5bc138(0x8d5), i)]['visible'] = !![]);
                        }
                } else {
                    if (game[_0x2cc681[_0x5bc138(0x887)](_0x2cc681[_0x5bc138(0x3f6)], 0x1)][_0x5bc138(0xa6e)]) {
                        var _0x46d211 = _0x5bc138(0x401)[_0x5bc138(0xa4e)]('|'),
                            _0x5370aa = 0x0;
                        while (!![]) {
                            switch (_0x46d211[_0x5370aa++]) {
                                case '0':
                                    for (i = 0x1; _0x2cc681[_0x5bc138(0x3dd)](i, 0x5); i++) {
                                        game[_0x2cc681[_0x5bc138(0x270)](_0x2cc681[_0x5bc138(0x267)], i)][_0x5bc138(0x254)](0x0);
                                    }
                                    continue;
                                case '1':
                                    for (i = 0x1; _0x2cc681[_0x5bc138(0x642)](i, 0x5); i++) {
                                        game[_0x2cc681[_0x5bc138(0x924)](_0x2cc681[_0x5bc138(0x267)], i)]['setInteractive']({
                                            'pixelPerfect': !![],
                                            'useHandCursor': !![]
                                        });
                                    }
                                    continue;
                                case '2':
                                    for (i = 0x1; _0x2cc681[_0x5bc138(0x3dd)](i, 0x8); i++) {
                                        var _0x3b8efb = _0x2cc681[_0x5bc138(0x91e)][_0x5bc138(0xa4e)]('|'),
                                            _0x2ca820 = 0x0;
                                        while (!![]) {
                                            switch (_0x3b8efb[_0x2ca820++]) {
                                                case '0':
                                                    game[_0x2cc681[_0x5bc138(0x723)](_0x2cc681[_0x5bc138(0x3f6)], i)][_0x5bc138(0xa6e)] = ![];
                                                    continue;
                                                case '1':
                                                    game[_0x2cc681['mJuba'] + i][_0x5bc138(0xa6e)] = ![];
                                                    continue;
                                                case '2':
                                                    game[_0x5bc138(0x949) + i][_0x5bc138(0xa6e)] = ![];
                                                    continue;
                                                case '3':
                                                    game[_0x2cc681[_0x5bc138(0x38c)](_0x5bc138(0x8ac), i)]['visible'] = ![];
                                                    continue;
                                                case '4':
                                                    game[_0x2cc681[_0x5bc138(0x41f)](_0x2cc681['ilSMo'], i)]['visible'] = ![];
                                                    continue;
                                            }
                                            break;
                                        }
                                    }
                                    continue;
                                case '3':
                                    if (_0x2cc681[_0x5bc138(0x227)](showad, 0x1))
                                        for (i = 0x8; _0x2cc681[_0x5bc138(0x43a)](i, 0x1); i--) {
                                            _0x2cc681[_0x5bc138(0x68f)](dressarr[i], 0x1) && (game[_0x5bc138(0x5c1) + i][_0x5bc138(0xa6e)] = !![]);
                                        }
                                    continue;
                                case '4':
                                    for (i = 0x1; i <= 0x8; i++) {
                                        game[_0x2cc681[_0x5bc138(0x300)](_0x5bc138(0x4ba), i)][_0x5bc138(0xa6e)] = !![];
                                    }
                                    continue;
                                case '5':
                                    game[_0x2cc681[_0x5bc138(0xa1e)](_0x2cc681[_0x5bc138(0x267)], 0x5)][_0x5bc138(0x254)](0x1);
                                    continue;
                                case '6':
                                    game[_0x2cc681[_0x5bc138(0x7e9)](_0x5bc138(0x487), 0x5)][_0x5bc138(0x88f)]();
                                    continue;
                                case '7':
                                    if (_0x2cc681[_0x5bc138(0x852)](showad, 0x1))
                                        for (i = 0x8; _0x2cc681[_0x5bc138(0x834)](i, 0x1); i--) {
                                            var _0x17f423 = _0x2cc681[_0x5bc138(0x9c4)][_0x5bc138(0xa4e)]('|'),
                                                _0x432ea8 = 0x0;
                                            while (!![]) {
                                                switch (_0x17f423[_0x432ea8++]) {
                                                    case '0':
                                                        _0x2cc681['gXCeO'](dressarr[i], 0x1) && (game[_0x2cc681[_0x5bc138(0x35b)](_0x2cc681[_0x5bc138(0x58f)], i)][_0x5bc138(0xa6e)] = ![]);
                                                        continue;
                                                    case '1':
                                                        _0x2cc681[_0x5bc138(0x613)](studarr[i], 0x1) && (game[_0x2cc681[_0x5bc138(0xab8)](_0x2cc681['ZAQJQ'], i)][_0x5bc138(0xa6e)] = ![]);
                                                        continue;
                                                    case '2':
                                                        _0x2cc681[_0x5bc138(0x3b4)](accarr[i], 0x1) && (game[_0x2cc681['nSDjM'](_0x2cc681[_0x5bc138(0x27d)], i)][_0x5bc138(0xa6e)] = ![]);
                                                        continue;
                                                    case '3':
                                                        _0x2cc681['QlgTL'](hairarr[i], 0x1) && (game[_0x2cc681[_0x5bc138(0x966)](_0x2cc681[_0x5bc138(0x950)], i)][_0x5bc138(0xa6e)] = ![]);
                                                        continue;
                                                    case '4':
                                                        chainarr[i] == 0x1 && (game[_0x2cc681[_0x5bc138(0x9dc)] + i]['visible'] = ![]);
                                                        continue;
                                                }
                                                break;
                                            }
                                        }
                                    continue;
                                case '8':
                                    level3text[_0x5bc138(0x254)](0x5);
                                    continue;
                            }
                            break;
                        }
                    } else {
                        if (game[_0x2cc681['mJuba'] + 0x1][_0x5bc138(0xa6e)]) {
                            var _0x4514c3 = _0x2cc681[_0x5bc138(0x6a0)]['split']('|'),
                                _0x1825f1 = 0x0;
                            while (!![]) {
                                switch (_0x4514c3[_0x1825f1++]) {
                                    case '0':
                                        game[_0x2cc681[_0x5bc138(0x965)](_0x2cc681[_0x5bc138(0x267)], 0x1)]['disableInteractive']();
                                        continue;
                                    case '1':
                                        level3text['setFrame'](0x1);
                                        continue;
                                    case '2':
                                        if (showad == 0x1)
                                            for (i = 0x8; i >= 0x1; i--) {
                                                studarr[i] == 0x1 && (game[_0x2cc681[_0x5bc138(0x7bc)](_0x2cc681[_0x5bc138(0x9e0)], i)][_0x5bc138(0xa6e)] = !![]);
                                            }
                                        continue;
                                    case '3':
                                        for (i = 0x1; _0x2cc681[_0x5bc138(0xaa2)](i, 0x8); i++) {
                                            game[_0x2cc681[_0x5bc138(0x50c)](_0x2cc681[_0x5bc138(0x90a)], i)][_0x5bc138(0xa6e)] = !![];
                                        }
                                        continue;
                                    case '4':
                                        for (i = 0x1; i <= 0x5; i++) {
                                            game[_0x2cc681[_0x5bc138(0x603)](_0x5bc138(0x487), i)][_0x5bc138(0xa74)]({
                                                'pixelPerfect': !![],
                                                'useHandCursor': !![]
                                            });
                                        }
                                        continue;
                                    case '5':
                                        game[_0x2cc681[_0x5bc138(0x267)] + 0x1]['setFrame'](0x1);
                                        continue;
                                    case '6':
                                        if (_0x2cc681['wqeoO'](showad, 0x1))
                                            for (i = 0x8; i >= 0x1; i--) {
                                                var _0x2d0fa6 = _0x2cc681[_0x5bc138(0x830)]['split']('|'),
                                                    _0x41be0a = 0x0;
                                                while (!![]) {
                                                    switch (_0x2d0fa6[_0x41be0a++]) {
                                                        case '0':
                                                            _0x2cc681[_0x5bc138(0x503)](studarr[i], 0x1) && (game[_0x2cc681[_0x5bc138(0x286)](_0x2cc681[_0x5bc138(0x9e0)], i)][_0x5bc138(0xa6e)] = ![]);
                                                            continue;
                                                        case '1':
                                                            hairarr[i] == 0x1 && (game[_0x2cc681[_0x5bc138(0x5d2)](_0x2cc681['vgtzZ'], i)][_0x5bc138(0xa6e)] = ![]);
                                                            continue;
                                                        case '2':
                                                            _0x2cc681[_0x5bc138(0x847)](accarr[i], 0x1) && (game[_0x2cc681[_0x5bc138(0x535)](_0x2cc681[_0x5bc138(0x27d)], i)]['visible'] = ![]);
                                                            continue;
                                                        case '3':
                                                            _0x2cc681[_0x5bc138(0x7a9)](chainarr[i], 0x1) && (game[_0x2cc681['lknOM'](_0x5bc138(0x2e7), i)][_0x5bc138(0xa6e)] = ![]);
                                                            continue;
                                                        case '4':
                                                            dressarr[i] == 0x1 && (game[_0x2cc681[_0x5bc138(0x82d)](_0x2cc681[_0x5bc138(0x58f)], i)][_0x5bc138(0xa6e)] = ![]);
                                                            continue;
                                                    }
                                                    break;
                                                }
                                            }
                                        continue;
                                    case '7':
                                        for (i = 0x1; _0x2cc681['aFzoo'](i, 0x8); i++) {
                                            var _0x5816db = _0x2cc681[_0x5bc138(0x451)]['split']('|'),
                                                _0x3c0fa2 = 0x0;
                                            while (!![]) {
                                                switch (_0x5816db[_0x3c0fa2++]) {
                                                    case '0':
                                                        game[_0x2cc681[_0x5bc138(0x1f7)](_0x2cc681['ilSMo'], i)][_0x5bc138(0xa6e)] = ![];
                                                        continue;
                                                    case '1':
                                                        game[_0x2cc681['JfciP'](_0x2cc681['itkEb'], i)][_0x5bc138(0xa6e)] = ![];
                                                        continue;
                                                    case '2':
                                                        game[_0x2cc681[_0x5bc138(0x6c9)] + i][_0x5bc138(0xa6e)] = ![];
                                                        continue;
                                                    case '3':
                                                        game[_0x2cc681[_0x5bc138(0x38c)](_0x2cc681[_0x5bc138(0x3f6)], i)]['visible'] = ![];
                                                        continue;
                                                    case '4':
                                                        game[_0x2cc681[_0x5bc138(0x616)](_0x2cc681['qsdGC'], i)][_0x5bc138(0xa6e)] = ![];
                                                        continue;
                                                }
                                                break;
                                            }
                                        }
                                        continue;
                                    case '8':
                                        for (i = 0x1; _0x2cc681[_0x5bc138(0x8c8)](i, 0x5); i++) {
                                            game[_0x2cc681[_0x5bc138(0x927)](_0x2cc681[_0x5bc138(0x267)], i)][_0x5bc138(0x254)](0x0);
                                        }
                                        continue;
                                }
                                break;
                            }
                        }
                    }
                }
            }
        }
        _0x1eef85();
    }
    rarrow['on'](_0x2cc681[_0x222a04(0x90b)], _0x2f273f);

    function _0x2f273f() {
        var _0x2d68d1 = _0x222a04;
        _0x2cc681[_0x2d68d1(0x344)](playsoundeffects, _0x2d68d1(0x51a));
        if (game[_0x2cc681[_0x2d68d1(0x38c)](_0x2cc681[_0x2d68d1(0x6c9)], 0x1)]['visible']) {
            var _0x55ee2c = _0x2cc681[_0x2d68d1(0x96b)][_0x2d68d1(0xa4e)]('|'),
                _0x467c87 = 0x0;
            while (!![]) {
                switch (_0x55ee2c[_0x467c87++]) {
                    case '0':
                        for (i = 0x1; _0x2cc681['EnHLH'](i, 0x8); i++) {
                            game[_0x2cc681[_0x2d68d1(0x3f6)] + i][_0x2d68d1(0xa6e)] = !![];
                        }
                        continue;
                    case '1':
                        for (i = 0x1; i <= 0x5; i++) {
                            game[_0x2cc681['jBnVg'](_0x2cc681['Dnntf'], i)][_0x2d68d1(0x254)](0x0);
                        }
                        continue;
                    case '2':
                        game[_0x2cc681[_0x2d68d1(0x38c)](_0x2cc681[_0x2d68d1(0x267)], 0x4)]['disableInteractive']();
                        continue;
                    case '3':
                        for (i = 0x1; _0x2cc681[_0x2d68d1(0x77b)](i, 0x5); i++) {
                            game[_0x2cc681[_0x2d68d1(0x924)](_0x2d68d1(0x487), i)][_0x2d68d1(0xa74)]({
                                'pixelPerfect': !![],
                                'useHandCursor': !![]
                            });
                        }
                        continue;
                    case '4':
                        if (_0x2cc681[_0x2d68d1(0x2bb)](showad, 0x1))
                            for (i = 0x8; _0x2cc681['GvhZu'](i, 0x1); i--) {
                                hairarr[i] == 0x1 && (game[_0x2cc681[_0x2d68d1(0xab8)](_0x2cc681[_0x2d68d1(0x950)], i)][_0x2d68d1(0xa6e)] = !![]);
                            }
                        continue;
                    case '5':
                        if (_0x2cc681[_0x2d68d1(0x232)](showad, 0x1))
                            for (i = 0x8; _0x2cc681[_0x2d68d1(0x43a)](i, 0x1); i--) {
                                var _0x30c70f = _0x2cc681[_0x2d68d1(0x367)][_0x2d68d1(0xa4e)]('|'),
                                    _0x6b2aec = 0x0;
                                while (!![]) {
                                    switch (_0x30c70f[_0x6b2aec++]) {
                                        case '0':
                                            hairarr[i] == 0x1 && (game['level3hairvideo' + i][_0x2d68d1(0xa6e)] = ![]);
                                            continue;
                                        case '1':
                                            _0x2cc681[_0x2d68d1(0xa9b)](dressarr[i], 0x1) && (game[_0x2cc681[_0x2d68d1(0x58f)] + i][_0x2d68d1(0xa6e)] = ![]);
                                            continue;
                                        case '2':
                                            _0x2cc681[_0x2d68d1(0x93e)](studarr[i], 0x1) && (game[_0x2cc681[_0x2d68d1(0x9e0)] + i][_0x2d68d1(0xa6e)] = ![]);
                                            continue;
                                        case '3':
                                            chainarr[i] == 0x1 && (game[_0x2cc681[_0x2d68d1(0x9dc)] + i]['visible'] = ![]);
                                            continue;
                                        case '4':
                                            accarr[i] == 0x1 && (game[_0x2cc681[_0x2d68d1(0xa1e)](_0x2cc681[_0x2d68d1(0x27d)], i)][_0x2d68d1(0xa6e)] = ![]);
                                            continue;
                                    }
                                    break;
                                }
                            }
                        continue;
                    case '6':
                        for (i = 0x1; _0x2cc681[_0x2d68d1(0x1c6)](i, 0x8); i++) {
                            var _0x850e83 = _0x2cc681[_0x2d68d1(0x174)][_0x2d68d1(0xa4e)]('|'),
                                _0x3fc722 = 0x0;
                            while (!![]) {
                                switch (_0x850e83[_0x3fc722++]) {
                                    case '0':
                                        game[_0x2d68d1(0x4ba) + i]['visible'] = ![];
                                        continue;
                                    case '1':
                                        game[_0x2cc681[_0x2d68d1(0x535)]('level3hair', i)][_0x2d68d1(0xa6e)] = ![];
                                        continue;
                                    case '2':
                                        game[_0x2cc681['vqsAc'](_0x2cc681[_0x2d68d1(0x9d6)], i)][_0x2d68d1(0xa6e)] = ![];
                                        continue;
                                    case '3':
                                        game[_0x2cc681[_0x2d68d1(0x38a)](_0x2cc681[_0x2d68d1(0x5ec)], i)]['visible'] = ![];
                                        continue;
                                    case '4':
                                        game[_0x2cc681[_0x2d68d1(0x805)](_0x2cc681[_0x2d68d1(0x90a)], i)]['visible'] = ![];
                                        continue;
                                }
                                break;
                            }
                        }
                        continue;
                    case '7':
                        level3text[_0x2d68d1(0x254)](0x4);
                        continue;
                    case '8':
                        game[_0x2cc681[_0x2d68d1(0x66e)](_0x2d68d1(0x487), 0x4)][_0x2d68d1(0x254)](0x1);
                        continue;
                }
                break;
            }
        } else {
            if (game[_0x2cc681['HGBYm'](_0x2cc681[_0x2d68d1(0x3f6)], 0x1)][_0x2d68d1(0xa6e)]) {
                var _0x1ac431 = _0x2d68d1(0x46c)[_0x2d68d1(0xa4e)]('|'),
                    _0x2f8e7a = 0x0;
                while (!![]) {
                    switch (_0x1ac431[_0x2f8e7a++]) {
                        case '0':
                            level3text['setFrame'](0x3);
                            continue;
                        case '1':
                            for (i = 0x1; _0x2cc681[_0x2d68d1(0x32d)](i, 0x5); i++) {
                                game[_0x2cc681[_0x2d68d1(0x7d2)](_0x2d68d1(0x487), i)][_0x2d68d1(0x254)](0x0);
                            }
                            continue;
                        case '2':
                            game[_0x2cc681[_0x2d68d1(0x267)] + 0x3]['disableInteractive']();
                            continue;
                        case '3':
                            if (showad == 0x1)
                                for (i = 0x8; _0x2cc681['dGeja'](i, 0x1); i--) {
                                    _0x2cc681[_0x2d68d1(0x5df)](accarr[i], 0x1) && (game[_0x2cc681[_0x2d68d1(0x9d7)](_0x2cc681['vcZzG'], i)][_0x2d68d1(0xa6e)] = !![]);
                                }
                            continue;
                        case '4':
                            for (i = 0x1; i <= 0x5; i++) {
                                game[_0x2cc681[_0x2d68d1(0xa04)](_0x2cc681[_0x2d68d1(0x267)], i)][_0x2d68d1(0xa74)]({
                                    'pixelPerfect': !![],
                                    'useHandCursor': !![]
                                });
                            }
                            continue;
                        case '5':
                            for (i = 0x1; _0x2cc681[_0x2d68d1(0xaa2)](i, 0x8); i++) {
                                game[_0x2cc681[_0x2d68d1(0x2a8)](_0x2cc681[_0x2d68d1(0x5ec)], i)][_0x2d68d1(0xa6e)] = !![];
                            }
                            continue;
                        case '6':
                            if (showad == 0x1)
                                for (i = 0x8; i >= 0x1; i--) {
                                    var _0x2e7c4e = _0x2cc681[_0x2d68d1(0x19f)][_0x2d68d1(0xa4e)]('|'),
                                        _0x2559ad = 0x0;
                                    while (!![]) {
                                        switch (_0x2e7c4e[_0x2559ad++]) {
                                            case '0':
                                                _0x2cc681['EbzXH'](hairarr[i], 0x1) && (game[_0x2cc681['KowbP'](_0x2cc681[_0x2d68d1(0x950)], i)]['visible'] = ![]);
                                                continue;
                                            case '1':
                                                _0x2cc681[_0x2d68d1(0x701)](accarr[i], 0x1) && (game[_0x2cc681['oAIDF'](_0x2cc681[_0x2d68d1(0x27d)], i)][_0x2d68d1(0xa6e)] = ![]);
                                                continue;
                                            case '2':
                                                chainarr[i] == 0x1 && (game[_0x2cc681[_0x2d68d1(0x385)](_0x2cc681[_0x2d68d1(0x9dc)], i)][_0x2d68d1(0xa6e)] = ![]);
                                                continue;
                                            case '3':
                                                dressarr[i] == 0x1 && (game[_0x2cc681[_0x2d68d1(0x9d7)](_0x2cc681[_0x2d68d1(0x58f)], i)][_0x2d68d1(0xa6e)] = ![]);
                                                continue;
                                            case '4':
                                                _0x2cc681['gsIKO'](studarr[i], 0x1) && (game[_0x2cc681[_0x2d68d1(0xa1c)](_0x2cc681[_0x2d68d1(0x9e0)], i)][_0x2d68d1(0xa6e)] = ![]);
                                                continue;
                                        }
                                        break;
                                    }
                                }
                            continue;
                        case '7':
                            game['level3cat' + 0x3]['setFrame'](0x1);
                            continue;
                        case '8':
                            for (i = 0x1; i <= 0x8; i++) {
                                game[_0x2cc681[_0x2d68d1(0x203)](_0x2cc681[_0x2d68d1(0x90a)], i)]['visible'] = ![], game[_0x2cc681['kosAs'](_0x2cc681[_0x2d68d1(0x9d6)], i)][_0x2d68d1(0xa6e)] = ![], game[_0x2cc681['BOXrZ'](_0x2cc681[_0x2d68d1(0x3f6)], i)]['visible'] = ![], game[_0x2cc681[_0x2d68d1(0x410)](_0x2cc681[_0x2d68d1(0x6c9)], i)]['visible'] = ![], game[_0x2cc681['xGwVt'](_0x2cc681[_0x2d68d1(0x5ec)], i)][_0x2d68d1(0xa6e)] = ![];
                            }
                            continue;
                    }
                    break;
                }
            } else {
                if (game[_0x2cc681[_0x2d68d1(0x2fc)](_0x2cc681[_0x2d68d1(0x5ec)], 0x1)][_0x2d68d1(0xa6e)]) {
                    level3text[_0x2d68d1(0x254)](0x2);
                    for (i = 0x1; _0x2cc681[_0x2d68d1(0xaa2)](i, 0x5); i++) {
                        game[_0x2cc681[_0x2d68d1(0x801)](_0x2cc681[_0x2d68d1(0x267)], i)][_0x2d68d1(0x254)](0x0);
                    }
                    for (i = 0x1; _0x2cc681[_0x2d68d1(0x684)](i, 0x5); i++) {
                        game[_0x2cc681[_0x2d68d1(0x959)](_0x2cc681['Dnntf'], i)]['setInteractive']({
                            'pixelPerfect': !![],
                            'useHandCursor': !![]
                        });
                    }
                    game[_0x2cc681['NcvOQ'](_0x2cc681[_0x2d68d1(0x267)], 0x2)]['disableInteractive'](), game[_0x2cc681[_0x2d68d1(0x196)](_0x2cc681[_0x2d68d1(0x267)], 0x2)][_0x2d68d1(0x254)](0x1);
                    for (i = 0x1; _0x2cc681[_0x2d68d1(0x7a4)](i, 0x8); i++) {
                        game[_0x2cc681[_0x2d68d1(0x8c9)](_0x2cc681[_0x2d68d1(0x90a)], i)][_0x2d68d1(0xa6e)] = ![], game[_0x2cc681['ukBqJ'](_0x2cc681[_0x2d68d1(0x9d6)], i)][_0x2d68d1(0xa6e)] = ![], game[_0x2d68d1(0x21f) + i][_0x2d68d1(0xa6e)] = ![], game[_0x2cc681[_0x2d68d1(0x434)](_0x2cc681[_0x2d68d1(0x6c9)], i)][_0x2d68d1(0xa6e)] = ![], game[_0x2cc681[_0x2d68d1(0x5ec)] + i][_0x2d68d1(0xa6e)] = ![];
                    }
                    if (_0x2cc681[_0x2d68d1(0x93e)](showad, 0x1))
                        for (i = 0x8; _0x2cc681[_0x2d68d1(0x892)](i, 0x1); i--) {
                            var _0x2b9ee8 = _0x2cc681[_0x2d68d1(0x830)][_0x2d68d1(0xa4e)]('|'),
                                _0x27ff26 = 0x0;
                            while (!![]) {
                                switch (_0x2b9ee8[_0x27ff26++]) {
                                    case '0':
                                        _0x2cc681[_0x2d68d1(0x62b)](studarr[i], 0x1) && (game[_0x2cc681['tASCF'](_0x2cc681[_0x2d68d1(0x9e0)], i)][_0x2d68d1(0xa6e)] = ![]);
                                        continue;
                                    case '1':
                                        _0x2cc681[_0x2d68d1(0x250)](hairarr[i], 0x1) && (game[_0x2cc681[_0x2d68d1(0x199)](_0x2cc681[_0x2d68d1(0x950)], i)][_0x2d68d1(0xa6e)] = ![]);
                                        continue;
                                    case '2':
                                        _0x2cc681[_0x2d68d1(0x189)](accarr[i], 0x1) && (game[_0x2cc681[_0x2d68d1(0x563)](_0x2cc681[_0x2d68d1(0x27d)], i)][_0x2d68d1(0xa6e)] = ![]);
                                        continue;
                                    case '3':
                                        _0x2cc681[_0x2d68d1(0x69c)](chainarr[i], 0x1) && (game[_0x2cc681[_0x2d68d1(0x805)](_0x2d68d1(0x2e7), i)][_0x2d68d1(0xa6e)] = ![]);
                                        continue;
                                    case '4':
                                        _0x2cc681['jVSFd'](dressarr[i], 0x1) && (game[_0x2cc681['diwXm'](_0x2cc681[_0x2d68d1(0x58f)], i)][_0x2d68d1(0xa6e)] = ![]);
                                        continue;
                                }
                                break;
                            }
                        }
                    for (i = 0x1; i <= 0x8; i++) {
                        game[_0x2cc681['jJAys'](_0x2cc681[_0x2d68d1(0x9d6)], i)][_0x2d68d1(0xa6e)] = !![];
                    }
                    if (showad == 0x1)
                        for (i = 0x8; _0x2cc681[_0x2d68d1(0x856)](i, 0x1); i--) {
                            chainarr[i] == 0x1 && (game[_0x2cc681[_0x2d68d1(0x959)](_0x2cc681[_0x2d68d1(0x9dc)], i)][_0x2d68d1(0xa6e)] = !![]);
                        }
                } else {
                    if (game[_0x2cc681['tTYyu'](_0x2cc681[_0x2d68d1(0x9d6)], 0x1)][_0x2d68d1(0xa6e)]) {
                        level3text[_0x2d68d1(0x254)](0x1);
                        for (i = 0x1; _0x2cc681[_0x2d68d1(0x787)](i, 0x5); i++) {
                            game[_0x2cc681[_0x2d68d1(0x238)](_0x2cc681[_0x2d68d1(0x267)], i)]['setFrame'](0x0);
                        }
                        for (i = 0x1; _0x2cc681[_0x2d68d1(0x642)](i, 0x5); i++) {
                            game[_0x2cc681[_0x2d68d1(0x267)] + i]['setInteractive']({
                                'pixelPerfect': !![],
                                'useHandCursor': !![]
                            });
                        }
                        game[_0x2cc681[_0x2d68d1(0x267)] + 0x1][_0x2d68d1(0x88f)](), game[_0x2cc681[_0x2d68d1(0xad4)](_0x2d68d1(0x487), 0x1)]['setFrame'](0x1);
                        for (i = 0x1; i <= 0x8; i++) {
                            var _0x355a03 = '3|0|4|1|2' ['split']('|'),
                                _0x296cc1 = 0x0;
                            while (!![]) {
                                switch (_0x355a03[_0x296cc1++]) {
                                    case '0':
                                        game[_0x2cc681['EpzIK'](_0x2cc681['ilSMo'], i)][_0x2d68d1(0xa6e)] = ![];
                                        continue;
                                    case '1':
                                        game[_0x2cc681[_0x2d68d1(0x6c9)] + i]['visible'] = ![];
                                        continue;
                                    case '2':
                                        game[_0x2cc681[_0x2d68d1(0x2ad)]('level3acc', i)][_0x2d68d1(0xa6e)] = ![];
                                        continue;
                                    case '3':
                                        game[_0x2cc681[_0x2d68d1(0x9c8)](_0x2cc681['itkEb'], i)][_0x2d68d1(0xa6e)] = ![];
                                        continue;
                                    case '4':
                                        game[_0x2cc681['xGwVt'](_0x2cc681[_0x2d68d1(0x3f6)], i)][_0x2d68d1(0xa6e)] = ![];
                                        continue;
                                }
                                break;
                            }
                        }
                        if (_0x2cc681[_0x2d68d1(0x69c)](showad, 0x1))
                            for (i = 0x8; _0x2cc681['ezBmY'](i, 0x1); i--) {
                                var _0x30662f = _0x2cc681[_0x2d68d1(0xa89)][_0x2d68d1(0xa4e)]('|'),
                                    _0x2eeb28 = 0x0;
                                while (!![]) {
                                    switch (_0x30662f[_0x2eeb28++]) {
                                        case '0':
                                            studarr[i] == 0x1 && (game[_0x2cc681['EkZIe'](_0x2cc681[_0x2d68d1(0x9e0)], i)][_0x2d68d1(0xa6e)] = ![]);
                                            continue;
                                        case '1':
                                            _0x2cc681[_0x2d68d1(0x87e)](chainarr[i], 0x1) && (game[_0x2cc681['AYfJJ'](_0x2cc681['pyOuc'], i)][_0x2d68d1(0xa6e)] = ![]);
                                            continue;
                                        case '2':
                                            _0x2cc681[_0x2d68d1(0x9c2)](accarr[i], 0x1) && (game[_0x2d68d1(0x730) + i]['visible'] = ![]);
                                            continue;
                                        case '3':
                                            _0x2cc681[_0x2d68d1(0x62b)](hairarr[i], 0x1) && (game[_0x2cc681['FMNEw'](_0x2d68d1(0x8d5), i)][_0x2d68d1(0xa6e)] = ![]);
                                            continue;
                                        case '4':
                                            _0x2cc681['rkoFd'](dressarr[i], 0x1) && (game[_0x2cc681[_0x2d68d1(0x1af)](_0x2cc681[_0x2d68d1(0x58f)], i)][_0x2d68d1(0xa6e)] = ![]);
                                            continue;
                                    }
                                    break;
                                }
                            }
                        for (i = 0x1; _0x2cc681[_0x2d68d1(0x8c8)](i, 0x8); i++) {
                            game[_0x2cc681[_0x2d68d1(0x41f)](_0x2cc681['itkEb'], i)][_0x2d68d1(0xa6e)] = !![];
                        }
                        if (showad == 0x1)
                            for (i = 0x8; _0x2cc681[_0x2d68d1(0x6ac)](i, 0x1); i--) {
                                _0x2cc681['wALAr'](studarr[i], 0x1) && (game[_0x2cc681[_0x2d68d1(0x9e0)] + i][_0x2d68d1(0xa6e)] = !![]);
                            }
                    } else {
                        if (game[_0x2cc681['XRNzW'](_0x2cc681[_0x2d68d1(0x90a)], 0x1)][_0x2d68d1(0xa6e)]) {
                            var _0x185b33 = _0x2cc681[_0x2d68d1(0x228)]['split']('|'),
                                _0x157ad3 = 0x0;
                            while (!![]) {
                                switch (_0x185b33[_0x157ad3++]) {
                                    case '0':
                                        for (i = 0x1; _0x2cc681[_0x2d68d1(0x370)](i, 0x5); i++) {
                                            game[_0x2cc681[_0x2d68d1(0xa1e)](_0x2cc681[_0x2d68d1(0x267)], i)][_0x2d68d1(0xa74)]({
                                                'pixelPerfect': !![],
                                                'useHandCursor': !![]
                                            });
                                        }
                                        continue;
                                    case '1':
                                        game[_0x2cc681[_0x2d68d1(0x267)] + 0x5][_0x2d68d1(0x254)](0x1);
                                        continue;
                                    case '2':
                                        game[_0x2cc681['kosAs'](_0x2cc681[_0x2d68d1(0x267)], 0x5)]['disableInteractive']();
                                        continue;
                                    case '3':
                                        if (showad == 0x1)
                                            for (i = 0x8; _0x2cc681[_0x2d68d1(0x4ca)](i, 0x1); i--) {
                                                var _0x13e654 = _0x2cc681[_0x2d68d1(0x5f6)]['split']('|'),
                                                    _0x347313 = 0x0;
                                                while (!![]) {
                                                    switch (_0x13e654[_0x347313++]) {
                                                        case '0':
                                                            _0x2cc681[_0x2d68d1(0x250)](accarr[i], 0x1) && (game[_0x2cc681[_0x2d68d1(0x45f)]('level3accvideo', i)]['visible'] = ![]);
                                                            continue;
                                                        case '1':
                                                            _0x2cc681[_0x2d68d1(0x476)](chainarr[i], 0x1) && (game[_0x2cc681[_0x2d68d1(0x353)](_0x2cc681[_0x2d68d1(0x9dc)], i)][_0x2d68d1(0xa6e)] = ![]);
                                                            continue;
                                                        case '2':
                                                            _0x2cc681[_0x2d68d1(0xa9b)](dressarr[i], 0x1) && (game[_0x2cc681[_0x2d68d1(0x98e)](_0x2d68d1(0x5c1), i)][_0x2d68d1(0xa6e)] = ![]);
                                                            continue;
                                                        case '3':
                                                            studarr[i] == 0x1 && (game[_0x2cc681['XrUYG'](_0x2cc681['ZAQJQ'], i)][_0x2d68d1(0xa6e)] = ![]);
                                                            continue;
                                                        case '4':
                                                            _0x2cc681['Nioyj'](hairarr[i], 0x1) && (game[_0x2cc681[_0x2d68d1(0x9e5)](_0x2d68d1(0x8d5), i)][_0x2d68d1(0xa6e)] = ![]);
                                                            continue;
                                                    }
                                                    break;
                                                }
                                            }
                                        continue;
                                    case '4':
                                        for (i = 0x1; _0x2cc681['khiIZ'](i, 0x5); i++) {
                                            game[_0x2cc681[_0x2d68d1(0x267)] + i][_0x2d68d1(0x254)](0x0);
                                        }
                                        continue;
                                    case '5':
                                        for (i = 0x1; _0x2cc681['jFISf'](i, 0x8); i++) {
                                            game[_0x2cc681[_0x2d68d1(0x8ec)](_0x2d68d1(0x4ba), i)]['visible'] = !![];
                                        }
                                        continue;
                                    case '6':
                                        if (showad == 0x1)
                                            for (i = 0x8; _0x2cc681[_0x2d68d1(0x6ac)](i, 0x1); i--) {
                                                _0x2cc681[_0x2d68d1(0x503)](dressarr[i], 0x1) && (game[_0x2cc681[_0x2d68d1(0x800)](_0x2d68d1(0x5c1), i)][_0x2d68d1(0xa6e)] = !![]);
                                            }
                                        continue;
                                    case '7':
                                        for (i = 0x1; _0x2cc681[_0x2d68d1(0x399)](i, 0x8); i++) {
                                            var _0xd58e30 = _0x2cc681[_0x2d68d1(0x451)][_0x2d68d1(0xa4e)]('|'),
                                                _0x161ced = 0x0;
                                            while (!![]) {
                                                switch (_0xd58e30[_0x161ced++]) {
                                                    case '0':
                                                        game[_0x2cc681[_0x2d68d1(0x624)](_0x2cc681[_0x2d68d1(0x9d6)], i)][_0x2d68d1(0xa6e)] = ![];
                                                        continue;
                                                    case '1':
                                                        game[_0x2cc681[_0x2d68d1(0x566)](_0x2d68d1(0x8ac), i)][_0x2d68d1(0xa6e)] = ![];
                                                        continue;
                                                    case '2':
                                                        game[_0x2cc681[_0x2d68d1(0x6c9)] + i][_0x2d68d1(0xa6e)] = ![];
                                                        continue;
                                                    case '3':
                                                        game[_0x2cc681[_0x2d68d1(0x83d)](_0x2cc681[_0x2d68d1(0x3f6)], i)][_0x2d68d1(0xa6e)] = ![];
                                                        continue;
                                                    case '4':
                                                        game[_0x2cc681[_0x2d68d1(0x37f)](_0x2cc681[_0x2d68d1(0x5ec)], i)][_0x2d68d1(0xa6e)] = ![];
                                                        continue;
                                                }
                                                break;
                                            }
                                        }
                                        continue;
                                    case '8':
                                        level3text[_0x2d68d1(0x254)](0x5);
                                        continue;
                                }
                                break;
                            }
                        }
                    }
                }
            }
        }
        _0x2cc681[_0x2d68d1(0x9a8)](_0x1eef85);
    }
    for (i = 0x5; _0x2cc681[_0x222a04(0x45e)](i, 0x1); i--) {
        game[_0x2cc681['qpxkC'](_0x2cc681[_0x222a04(0x267)], i)]['on'](_0x2cc681[_0x222a04(0x9ce)], _0x157b68), game[_0x2cc681[_0x222a04(0x267)] + i]['on'](_0x2cc681['TJnTS'], _0x4c49c0), game[_0x2cc681[_0x222a04(0x2db)](_0x2cc681[_0x222a04(0x267)], i)]['on'](_0x2cc681[_0x222a04(0x90b)], _0xa9939d);
    }

    function _0x157b68(_0x3ba4fa) {
        this['setScale'](1.05);
    }

    function _0x4c49c0(_0x40fb0c) {
        var _0x582836 = _0x222a04;
        this[_0x582836(0x67d)](0x1);
    }

    function _0xa9939d(_0x437e04) {
        var _0x49766e = _0x222a04,
            _0x21a9d1 = _0x49766e(0x9b6)[_0x49766e(0xa4e)]('|'),
            _0x362b99 = 0x0;
        while (!![]) {
            switch (_0x21a9d1[_0x362b99++]) {
                case '0':
                    rarrow[_0x49766e(0xa6e)] = ![];
                    continue;
                case '1':
                    _0x2cc681[_0x49766e(0x1ae)](_0x1eef85);
                    continue;
                case '2':
                    if (_0x2cc681[_0x49766e(0x9c2)](_0x2cc681['XdVeH'](parseInt, sno), 0x1)) {
                        var _0x59d471 = _0x49766e(0x61b)[_0x49766e(0xa4e)]('|'),
                            _0x5d830e = 0x0;
                        while (!![]) {
                            switch (_0x59d471[_0x5d830e++]) {
                                case '0':
                                    if (_0x2cc681[_0x49766e(0x232)](showad, 0x1))
                                        for (i = 0x8; i >= 0x1; i--) {
                                            _0x2cc681[_0x49766e(0x525)](chainarr[i], 0x1) && (game[_0x2cc681[_0x49766e(0x202)](_0x2cc681[_0x49766e(0x9dc)], i)][_0x49766e(0xa6e)] = ![]), studarr[i] == 0x1 && (game[_0x2cc681['cmhTv'](_0x49766e(0x623), i)][_0x49766e(0xa6e)] = ![]), accarr[i] == 0x1 && (game[_0x2cc681[_0x49766e(0x9ae)](_0x2cc681[_0x49766e(0x27d)], i)]['visible'] = ![]), _0x2cc681[_0x49766e(0x1e8)](hairarr[i], 0x1) && (game[_0x2cc681['vgtzZ'] + i][_0x49766e(0xa6e)] = ![]), _0x2cc681[_0x49766e(0x8bd)](dressarr[i], 0x1) && (game[_0x2cc681['RjIcW'](_0x2cc681[_0x49766e(0x58f)], i)][_0x49766e(0xa6e)] = ![]);
                                        }
                                    continue;
                                case '1':
                                    this['disableInteractive']();
                                    continue;
                                case '2':
                                    for (i = 0x5; _0x2cc681[_0x49766e(0x856)](i, 0x1); i--) {
                                        game[_0x2cc681[_0x49766e(0x616)](_0x2cc681[_0x49766e(0x267)], i)][_0x49766e(0xa74)]({
                                            'pixelPerfect': !![],
                                            'useHandCursor': !![]
                                        });
                                    }
                                    continue;
                                case '3':
                                    larrow[_0x49766e(0xa6e)] = !![];
                                    continue;
                                case '4':
                                    if (_0x2cc681[_0x49766e(0x348)](showad, 0x1))
                                        for (i = 0x8; i >= 0x1; i--) {
                                            _0x2cc681[_0x49766e(0x522)](studarr[i], 0x1) && (game[_0x2cc681[_0x49766e(0x9e0)] + i][_0x49766e(0xa6e)] = !![]);
                                        }
                                    continue;
                                case '5':
                                    for (i = 0x1; i <= 0x8; i++) {
                                        game[_0x2cc681[_0x49766e(0x49e)](_0x2cc681[_0x49766e(0x90a)], i)]['visible'] = ![], game[_0x2cc681[_0x49766e(0x9d6)] + i][_0x49766e(0xa6e)] = ![], game[_0x2cc681[_0x49766e(0xaba)](_0x2cc681[_0x49766e(0x3f6)], i)][_0x49766e(0xa6e)] = ![], game[_0x2cc681[_0x49766e(0x7bc)](_0x2cc681[_0x49766e(0x6c9)], i)][_0x49766e(0xa6e)] = ![], game[_0x2cc681['GKqAV'](_0x2cc681[_0x49766e(0x5ec)], i)]['visible'] = ![];
                                    }
                                    continue;
                                case '6':
                                    game[_0x2cc681[_0x49766e(0x267)] + 0x1][_0x49766e(0x254)](0x1);
                                    continue;
                                case '7':
                                    level3text[_0x49766e(0x254)](0x1);
                                    continue;
                                case '8':
                                    rarrow[_0x49766e(0xa6e)] = !![];
                                    continue;
                                case '9':
                                    for (i = 0x1; _0x2cc681[_0x49766e(0x3dd)](i, 0x8); i++) {
                                        game[_0x2cc681[_0x49766e(0xab8)]('level3stud', i)][_0x49766e(0xa6e)] = !![];
                                    }
                                    continue;
                            }
                            break;
                        }
                    } else {
                        if (_0x2cc681[_0x49766e(0x503)](parseInt(sno), 0x2)) {
                            var _0x3f5b00 = '2|3|8|5|1|4|7|6|0|9' ['split']('|'),
                                _0x32d2b2 = 0x0;
                            while (!![]) {
                                switch (_0x3f5b00[_0x32d2b2++]) {
                                    case '0':
                                        for (i = 0x1; i <= 0x8; i++) {
                                            game[_0x2cc681['dCOuy'](_0x2cc681[_0x49766e(0x9d6)], i)][_0x49766e(0xa6e)] = !![];
                                        }
                                        continue;
                                    case '1':
                                        for (i = 0x5; _0x2cc681[_0x49766e(0x834)](i, 0x1); i--) {
                                            game[_0x2cc681[_0x49766e(0x267)] + i]['setInteractive']({
                                                'pixelPerfect': !![],
                                                'useHandCursor': !![]
                                            });
                                        }
                                        continue;
                                    case '2':
                                        level3text['setFrame'](0x2);
                                        continue;
                                    case '3':
                                        larrow[_0x49766e(0xa6e)] = !![];
                                        continue;
                                    case '4':
                                        this['disableInteractive']();
                                        continue;
                                    case '5':
                                        game[_0x2cc681[_0x49766e(0x2dc)](_0x2cc681[_0x49766e(0x267)], 0x2)][_0x49766e(0x254)](0x1);
                                        continue;
                                    case '6':
                                        if (_0x2cc681['Nioyj'](showad, 0x1))
                                            for (i = 0x8; i >= 0x1; i--) {
                                                var _0x5f5828 = _0x2cc681[_0x49766e(0x3b0)][_0x49766e(0xa4e)]('|'),
                                                    _0x1b168e = 0x0;
                                                while (!![]) {
                                                    switch (_0x5f5828[_0x1b168e++]) {
                                                        case '0':
                                                            _0x2cc681[_0x49766e(0x4d1)](studarr[i], 0x1) && (game[_0x2cc681['ErHRI'](_0x2cc681[_0x49766e(0x9e0)], i)][_0x49766e(0xa6e)] = ![]);
                                                            continue;
                                                        case '1':
                                                            _0x2cc681['spoPQ'](accarr[i], 0x1) && (game[_0x2cc681[_0x49766e(0x2dc)](_0x2cc681[_0x49766e(0x27d)], i)][_0x49766e(0xa6e)] = ![]);
                                                            continue;
                                                        case '2':
                                                            _0x2cc681[_0x49766e(0x5f4)](hairarr[i], 0x1) && (game[_0x2cc681[_0x49766e(0xa04)](_0x49766e(0x8d5), i)][_0x49766e(0xa6e)] = ![]);
                                                            continue;
                                                        case '3':
                                                            _0x2cc681[_0x49766e(0x99b)](chainarr[i], 0x1) && (game[_0x2cc681[_0x49766e(0x41f)](_0x2cc681['pyOuc'], i)][_0x49766e(0xa6e)] = ![]);
                                                            continue;
                                                        case '4':
                                                            _0x2cc681[_0x49766e(0x227)](dressarr[i], 0x1) && (game[_0x2cc681['bsmiB'](_0x49766e(0x5c1), i)]['visible'] = ![]);
                                                            continue;
                                                    }
                                                    break;
                                                }
                                            }
                                        continue;
                                    case '7':
                                        for (i = 0x1; _0x2cc681[_0x49766e(0x4f7)](i, 0x8); i++) {
                                            var _0x602a2c = _0x2cc681[_0x49766e(0x3ed)]['split']('|'),
                                                _0x38eac7 = 0x0;
                                            while (!![]) {
                                                switch (_0x602a2c[_0x38eac7++]) {
                                                    case '0':
                                                        game[_0x2cc681['lgMSU'] + i]['visible'] = ![];
                                                        continue;
                                                    case '1':
                                                        game[_0x2cc681[_0x49766e(0x6c9)] + i][_0x49766e(0xa6e)] = ![];
                                                        continue;
                                                    case '2':
                                                        game[_0x2cc681[_0x49766e(0x3cc)](_0x2cc681[_0x49766e(0x90a)], i)][_0x49766e(0xa6e)] = ![];
                                                        continue;
                                                    case '3':
                                                        game[_0x2cc681[_0x49766e(0x1e0)]('level3acc', i)][_0x49766e(0xa6e)] = ![];
                                                        continue;
                                                    case '4':
                                                        game[_0x2cc681[_0x49766e(0x9d6)] + i]['visible'] = ![];
                                                        continue;
                                                }
                                                break;
                                            }
                                        }
                                        continue;
                                    case '8':
                                        rarrow['visible'] = !![];
                                        continue;
                                    case '9':
                                        if (_0x2cc681[_0x49766e(0x7bd)](showad, 0x1))
                                            for (i = 0x8; _0x2cc681[_0x49766e(0x4c9)](i, 0x1); i--) {
                                                _0x2cc681['pzvzP'](chainarr[i], 0x1) && (game[_0x2cc681['rSAEG'](_0x2cc681[_0x49766e(0x9dc)], i)][_0x49766e(0xa6e)] = !![]);
                                            }
                                        continue;
                                }
                                break;
                            }
                        } else {
                            if (_0x2cc681['mrhyR'](_0x2cc681['XDNtC'](parseInt, sno), 0x3)) {
                                var _0x15a673 = _0x2cc681['eICQh'][_0x49766e(0xa4e)]('|'),
                                    _0x23714f = 0x0;
                                while (!![]) {
                                    switch (_0x15a673[_0x23714f++]) {
                                        case '0':
                                            this['disableInteractive']();
                                            continue;
                                        case '1':
                                            larrow[_0x49766e(0xa6e)] = !![];
                                            continue;
                                        case '2':
                                            if (showad == 0x1)
                                                for (i = 0x8; _0x2cc681[_0x49766e(0x4c9)](i, 0x1); i--) {
                                                    accarr[i] == 0x1 && (game[_0x2cc681[_0x49766e(0x1aa)](_0x2cc681[_0x49766e(0x27d)], i)]['visible'] = !![]);
                                                }
                                            continue;
                                        case '3':
                                            for (i = 0x1; i <= 0x8; i++) {
                                                game['level3stud' + i][_0x49766e(0xa6e)] = ![], game[_0x49766e(0x7e0) + i]['visible'] = ![], game[_0x2cc681[_0x49766e(0xad4)](_0x2cc681[_0x49766e(0x3f6)], i)][_0x49766e(0xa6e)] = ![], game[_0x2cc681[_0x49766e(0x6c9)] + i]['visible'] = ![], game[_0x2cc681[_0x49766e(0x983)](_0x2cc681['qsdGC'], i)][_0x49766e(0xa6e)] = ![];
                                            }
                                            continue;
                                        case '4':
                                            if (_0x2cc681[_0x49766e(0x2a9)](showad, 0x1))
                                                for (i = 0x8; _0x2cc681[_0x49766e(0x343)](i, 0x1); i--) {
                                                    var _0x5b9434 = _0x49766e(0x4b8)[_0x49766e(0xa4e)]('|'),
                                                        _0x1a0ca1 = 0x0;
                                                    while (!![]) {
                                                        switch (_0x5b9434[_0x1a0ca1++]) {
                                                            case '0':
                                                                _0x2cc681[_0x49766e(0x956)](accarr[i], 0x1) && (game[_0x2cc681['qlQhz'](_0x2cc681[_0x49766e(0x27d)], i)]['visible'] = ![]);
                                                                continue;
                                                            case '1':
                                                                _0x2cc681[_0x49766e(0x431)](dressarr[i], 0x1) && (game[_0x2cc681[_0x49766e(0x2b7)](_0x2cc681[_0x49766e(0x58f)], i)][_0x49766e(0xa6e)] = ![]);
                                                                continue;
                                                            case '2':
                                                                studarr[i] == 0x1 && (game[_0x2cc681[_0x49766e(0x384)](_0x2cc681[_0x49766e(0x9e0)], i)][_0x49766e(0xa6e)] = ![]);
                                                                continue;
                                                            case '3':
                                                                hairarr[i] == 0x1 && (game[_0x2cc681[_0x49766e(0x2da)](_0x2cc681[_0x49766e(0x950)], i)][_0x49766e(0xa6e)] = ![]);
                                                                continue;
                                                            case '4':
                                                                _0x2cc681[_0x49766e(0x852)](chainarr[i], 0x1) && (game[_0x2cc681[_0x49766e(0x62e)](_0x2cc681[_0x49766e(0x9dc)], i)][_0x49766e(0xa6e)] = ![]);
                                                                continue;
                                                        }
                                                        break;
                                                    }
                                                }
                                            continue;
                                        case '5':
                                            for (i = 0x1; _0x2cc681[_0x49766e(0x683)](i, 0x8); i++) {
                                                game[_0x49766e(0x949) + i][_0x49766e(0xa6e)] = !![];
                                            }
                                            continue;
                                        case '6':
                                            rarrow[_0x49766e(0xa6e)] = !![];
                                            continue;
                                        case '7':
                                            for (i = 0x5; _0x2cc681[_0x49766e(0x892)](i, 0x1); i--) {
                                                game[_0x2cc681['bqZUT'](_0x2cc681[_0x49766e(0x267)], i)][_0x49766e(0xa74)]({
                                                    'pixelPerfect': !![],
                                                    'useHandCursor': !![]
                                                });
                                            }
                                            continue;
                                        case '8':
                                            game[_0x2cc681[_0x49766e(0x35e)](_0x2cc681[_0x49766e(0x267)], 0x3)][_0x49766e(0x254)](0x1);
                                            continue;
                                        case '9':
                                            level3text[_0x49766e(0x254)](0x3);
                                            continue;
                                    }
                                    break;
                                }
                            } else {
                                if (_0x2cc681[_0x49766e(0xa41)](_0x2cc681[_0x49766e(0xa06)](parseInt, sno), 0x4)) {
                                    level3text[_0x49766e(0x254)](0x4), rarrow[_0x49766e(0xa6e)] = !![], larrow[_0x49766e(0xa6e)] = !![], game[_0x2cc681['jJAys'](_0x2cc681['Dnntf'], 0x4)][_0x49766e(0x254)](0x1);
                                    for (i = 0x5; _0x2cc681[_0x49766e(0x343)](i, 0x1); i--) {
                                        game[_0x2cc681['cmhTv'](_0x2cc681['Dnntf'], i)]['setInteractive']({
                                            'pixelPerfect': !![],
                                            'useHandCursor': !![]
                                        });
                                    }
                                    this[_0x49766e(0x88f)]();
                                    for (i = 0x1; _0x2cc681[_0x49766e(0x91d)](i, 0x8); i++) {
                                        var _0x3889bf = _0x2cc681[_0x49766e(0x451)][_0x49766e(0xa4e)]('|'),
                                            _0x49fe3d = 0x0;
                                        while (!![]) {
                                            switch (_0x3889bf[_0x49fe3d++]) {
                                                case '0':
                                                    game['level3chain' + i][_0x49766e(0xa6e)] = ![];
                                                    continue;
                                                case '1':
                                                    game[_0x2cc681[_0x49766e(0x90a)] + i]['visible'] = ![];
                                                    continue;
                                                case '2':
                                                    game[_0x2cc681['TxOwD'](_0x2cc681[_0x49766e(0x6c9)], i)][_0x49766e(0xa6e)] = ![];
                                                    continue;
                                                case '3':
                                                    game[_0x2cc681[_0x49766e(0x8c9)](_0x2cc681[_0x49766e(0x3f6)], i)][_0x49766e(0xa6e)] = ![];
                                                    continue;
                                                case '4':
                                                    game[_0x2cc681[_0x49766e(0x88d)](_0x2cc681[_0x49766e(0x5ec)], i)][_0x49766e(0xa6e)] = ![];
                                                    continue;
                                            }
                                            break;
                                        }
                                    }
                                    if (showad == 0x1)
                                        for (i = 0x8; _0x2cc681[_0x49766e(0x97e)](i, 0x1); i--) {
                                            var _0x45619b = _0x2cc681[_0x49766e(0x7eb)][_0x49766e(0xa4e)]('|'),
                                                _0x287e20 = 0x0;
                                            while (!![]) {
                                                switch (_0x45619b[_0x287e20++]) {
                                                    case '0':
                                                        _0x2cc681[_0x49766e(0x2d4)](dressarr[i], 0x1) && (game[_0x2cc681[_0x49766e(0xa8e)](_0x2cc681[_0x49766e(0x58f)], i)][_0x49766e(0xa6e)] = ![]);
                                                        continue;
                                                    case '1':
                                                        _0x2cc681[_0x49766e(0x187)](chainarr[i], 0x1) && (game[_0x2cc681[_0x49766e(0x2dc)](_0x2cc681[_0x49766e(0x9dc)], i)]['visible'] = ![]);
                                                        continue;
                                                    case '2':
                                                        _0x2cc681[_0x49766e(0x234)](hairarr[i], 0x1) && (game[_0x2cc681[_0x49766e(0x5ff)](_0x2cc681['vgtzZ'], i)]['visible'] = ![]);
                                                        continue;
                                                    case '3':
                                                        _0x2cc681[_0x49766e(0x922)](studarr[i], 0x1) && (game[_0x2cc681[_0x49766e(0x5c4)](_0x2cc681[_0x49766e(0x9e0)], i)][_0x49766e(0xa6e)] = ![]);
                                                        continue;
                                                    case '4':
                                                        _0x2cc681[_0x49766e(0x9c2)](accarr[i], 0x1) && (game[_0x2cc681[_0x49766e(0x2ad)](_0x49766e(0x730), i)][_0x49766e(0xa6e)] = ![]);
                                                        continue;
                                                }
                                                break;
                                            }
                                        }
                                    for (i = 0x1; _0x2cc681['YJMHe'](i, 0x8); i++) {
                                        game[_0x2cc681['espnW'](_0x2cc681[_0x49766e(0x3f6)], i)][_0x49766e(0xa6e)] = !![];
                                    }
                                    if (_0x2cc681['nEvZB'](showad, 0x1))
                                        for (i = 0x8; _0x2cc681[_0x49766e(0x330)](i, 0x1); i--) {
                                            _0x2cc681[_0x49766e(0x692)](hairarr[i], 0x1) && (game[_0x2cc681[_0x49766e(0x950)] + i]['visible'] = !![]);
                                        }
                                } else {
                                    if (_0x2cc681[_0x49766e(0x653)](_0x2cc681[_0x49766e(0x590)](parseInt, sno), 0x5)) {
                                        level3text[_0x49766e(0x254)](0x5), rarrow[_0x49766e(0xa6e)] = !![], larrow['visible'] = !![], game[_0x2cc681['tASCF'](_0x2cc681[_0x49766e(0x267)], 0x5)][_0x49766e(0x254)](0x1);
                                        for (i = 0x5; _0x2cc681['GvhZu'](i, 0x1); i--) {
                                            game[_0x2cc681[_0x49766e(0x423)](_0x49766e(0x487), i)][_0x49766e(0xa74)]({
                                                'pixelPerfect': !![],
                                                'useHandCursor': !![]
                                            });
                                        }
                                        this[_0x49766e(0x88f)]();
                                        for (i = 0x1; _0x2cc681[_0x49766e(0x91d)](i, 0x8); i++) {
                                            var _0x3d5e8e = _0x2cc681[_0x49766e(0xa63)][_0x49766e(0xa4e)]('|'),
                                                _0x5b282c = 0x0;
                                            while (!![]) {
                                                switch (_0x3d5e8e[_0x5b282c++]) {
                                                    case '0':
                                                        game[_0x49766e(0x21f) + i][_0x49766e(0xa6e)] = ![];
                                                        continue;
                                                    case '1':
                                                        game[_0x2cc681['xiEsv'](_0x49766e(0x7e0), i)]['visible'] = ![];
                                                        continue;
                                                    case '2':
                                                        game[_0x2cc681['PzBif'](_0x49766e(0x949), i)][_0x49766e(0xa6e)] = ![];
                                                        continue;
                                                    case '3':
                                                        game[_0x2cc681['qpxkC'](_0x49766e(0x4ba), i)][_0x49766e(0xa6e)] = ![];
                                                        continue;
                                                    case '4':
                                                        game[_0x2cc681[_0x49766e(0x1af)](_0x49766e(0x8ac), i)]['visible'] = ![];
                                                        continue;
                                                }
                                                break;
                                            }
                                        }
                                        if (_0x2cc681['TKixl'](showad, 0x1))
                                            for (i = 0x8; i >= 0x1; i--) {
                                                chainarr[i] == 0x1 && (game[_0x2cc681[_0x49766e(0x7e4)](_0x2cc681[_0x49766e(0x9dc)], i)][_0x49766e(0xa6e)] = ![]), _0x2cc681[_0x49766e(0x7b3)](studarr[i], 0x1) && (game[_0x2cc681[_0x49766e(0x50c)](_0x49766e(0x623), i)]['visible'] = ![]), _0x2cc681['FxZkD'](accarr[i], 0x1) && (game[_0x2cc681['BxszR'](_0x2cc681['vcZzG'], i)][_0x49766e(0xa6e)] = ![]), _0x2cc681[_0x49766e(0x93a)](hairarr[i], 0x1) && (game[_0x2cc681[_0x49766e(0x950)] + i][_0x49766e(0xa6e)] = ![]), _0x2cc681[_0x49766e(0x1f8)](dressarr[i], 0x1) && (game[_0x2cc681[_0x49766e(0x2b7)](_0x2cc681[_0x49766e(0x58f)], i)]['visible'] = ![]);
                                            }
                                        for (i = 0x1; _0x2cc681[_0x49766e(0x659)](i, 0x8); i++) {
                                            game[_0x2cc681[_0x49766e(0x800)](_0x2cc681[_0x49766e(0x6c9)], i)][_0x49766e(0xa6e)] = !![];
                                        }
                                        if (_0x2cc681[_0x49766e(0x2bb)](showad, 0x1))
                                            for (i = 0x8; _0x2cc681[_0x49766e(0x6ac)](i, 0x1); i--) {
                                                dressarr[i] == 0x1 && (game[_0x2cc681[_0x49766e(0x58f)] + i][_0x49766e(0xa6e)] = !![]);
                                            }
                                    }
                                }
                            }
                        }
                    }
                    continue;
                case '3':
                    for (i = 0x1; _0x2cc681[_0x49766e(0x51b)](i, 0x5); i++) {
                        game[_0x2cc681['wvwZN'](_0x2cc681[_0x49766e(0x267)], i)]['setFrame'](0x0);
                    }
                    continue;
                case '4':
                    larrow[_0x49766e(0xa6e)] = ![];
                    continue;
                case '5':
                    glowarr[0x0] = _0x2cc681[_0x49766e(0x685)](parseInt, sno);
                    continue;
                case '6':
                    sno = this['texture'][_0x49766e(0x7ef)][_0x49766e(0x8dc)](0x9);
                    continue;
                case '7':
                    _0x2cc681[_0x49766e(0x440)](playsoundeffects, _0x2cc681['PWVid']);
                    continue;
            }
            break;
        }
    }

    function _0x4f306b() {
        var _0x326f8f = _0x222a04,
            _0xfb8c40 = _0x326f8f(0x273)[_0x326f8f(0xa4e)]('|'),
            _0x1eed78 = 0x0;
        while (!![]) {
            switch (_0xfb8c40[_0x1eed78++]) {
                case '0':
                    for (i = 0x1; i <= 0x8; i++) {
                        var _0x1b254b = '0|1|3|2|4' [_0x326f8f(0xa4e)]('|'),
                            _0x50aab6 = 0x0;
                        while (!![]) {
                            switch (_0x1b254b[_0x50aab6++]) {
                                case '0':
                                    game[_0x2cc681[_0x326f8f(0x934)]('level3chain', i)]['alpha'] = 0x1;
                                    continue;
                                case '1':
                                    game['level3stud' + i][_0x326f8f(0x55e)] = 0x1;
                                    continue;
                                case '2':
                                    game[_0x2cc681[_0x326f8f(0x5ec)] + i][_0x326f8f(0x55e)] = 0x1;
                                    continue;
                                case '3':
                                    game[_0x2cc681[_0x326f8f(0x3f6)] + i][_0x326f8f(0x55e)] = 0x1;
                                    continue;
                                case '4':
                                    game[_0x2cc681['MhodU'](_0x2cc681['mJuba'], i)][_0x326f8f(0x55e)] = 0x1;
                                    continue;
                            }
                            break;
                        }
                    }
                    continue;
                case '1':
                    (darr[0x4] == 0x1 || _0x2cc681[_0x326f8f(0x8e2)](darr[0x4], 0x2)) && (game[_0x2cc681[_0x326f8f(0x5ec)] + darr[0x4]][_0x326f8f(0x55e)] = 0.5);
                    continue;
                case '2':
                    (_0x2cc681[_0x326f8f(0x6de)](darr[0x5], 0x3) || _0x2cc681[_0x326f8f(0x24c)](darr[0x5], 0x6)) && (game[_0x2cc681[_0x326f8f(0x305)](_0x326f8f(0x949), darr[0x5])][_0x326f8f(0x55e)] = 0.5);
                    continue;
                case '3':
                    _0x2cc681['iJZMW'](darr[0x8], 0x7) && (game[_0x2cc681[_0x326f8f(0x736)](_0x326f8f(0x949), darr[0x8])][_0x326f8f(0x55e)] = 0.5);
                    continue;
                case '4':
                    _0x2cc681[_0x326f8f(0x1ca)](darr[0x2], 0x0) && _0x2cc681[_0x326f8f(0x8d4)](darr[0x2], 0x9) && (game[_0x2cc681[_0x326f8f(0x203)](_0x2cc681['itkEb'], darr[0x2])][_0x326f8f(0x55e)] = 0.5);
                    continue;
                case '5':
                    _0x2cc681[_0x326f8f(0x8f7)](darr[0x3], 0x0) && _0x2cc681[_0x326f8f(0x2cc)](darr[0x3], 0x9) && (game[_0x2cc681['iSTAv'](_0x2cc681[_0x326f8f(0x9d6)], darr[0x3])][_0x326f8f(0x55e)] = 0.5);
                    continue;
                case '6':
                    _0x2cc681[_0x326f8f(0x7be)](darr[0x0], 0x0) && _0x2cc681['XDKjo'](darr[0x0], 0x9) && (game[_0x2cc681[_0x326f8f(0x8bb)](_0x2cc681[_0x326f8f(0x6c9)], darr[0x0])][_0x326f8f(0x55e)] = 0.5);
                    continue;
                case '7':
                    _0x2cc681[_0x326f8f(0x47d)](darr[0x1], 0x0) && _0x2cc681[_0x326f8f(0x2cc)](darr[0x1], 0x9) && (game[_0x2cc681[_0x326f8f(0x616)](_0x2cc681[_0x326f8f(0x3f6)], darr[0x1])]['alpha'] = 0.5);
                    continue;
                case '8':
                    (_0x2cc681[_0x326f8f(0x178)](darr[0x7], 0x5) || darr[0x7] == 0x8) && (game[_0x2cc681['HGBYm']('level3acc', darr[0x7])][_0x326f8f(0x55e)] = 0.5);
                    continue;
                case '9':
                    _0x2cc681[_0x326f8f(0x69d)](darr[0x6], 0x4) && (game[_0x2cc681[_0x326f8f(0x3a0)](_0x2cc681[_0x326f8f(0x5ec)], darr[0x6])]['alpha'] = 0.5);
                    continue;
                case '10':
                    _0x2cc681[_0x326f8f(0x34e)](_0x1eef85);
                    continue;
            }
            break;
        }
    }

    function _0x1eef85() {
        var _0x590f9e = _0x222a04,
            _0x42d76e = _0x2cc681[_0x590f9e(0xa65)][_0x590f9e(0xa4e)]('|'),
            _0x53236d = 0x0;
        while (!![]) {
            switch (_0x42d76e[_0x53236d++]) {
                case '0':
                    _0x2cc681[_0x590f9e(0x3f8)](level3text[_0x590f9e(0x86b)]['name'], 0x2) && _0x2cc681[_0x590f9e(0x312)](darr[0x3], 0x0) && (game[_0x2cc681[_0x590f9e(0x9a0)] + 0x2][_0x590f9e(0xa6e)] = !![], game[_0x2cc681[_0x590f9e(0xa4b)]('level3selection', 0x2)]['x'] = game[_0x2cc681[_0x590f9e(0x202)](_0x590f9e(0x7e0), darr[0x3])]['x'], game[_0x2cc681[_0x590f9e(0x710)](_0x2cc681['sSVCW'], 0x2)]['y'] = game[_0x2cc681['fTfYe'](_0x2cc681[_0x590f9e(0x9d6)], darr[0x3])]['y']);
                    continue;
                case '1':
                    _0x2cc681[_0x590f9e(0x17c)](level3text[_0x590f9e(0x86b)]['name'], 0x5) && darr[0x0] > 0x0 && (game[_0x2cc681[_0x590f9e(0x526)](_0x2cc681['sSVCW'], 0x5)][_0x590f9e(0xa6e)] = !![], game[_0x2cc681[_0x590f9e(0x66b)](_0x590f9e(0x5c2), 0x5)]['x'] = game[_0x2cc681[_0x590f9e(0x8e6)](_0x590f9e(0x4ba), darr[0x0])]['x'], game[_0x2cc681[_0x590f9e(0x9a0)] + 0x5]['y'] = game[_0x2cc681[_0x590f9e(0x6c9)] + darr[0x0]]['y']);
                    continue;
                case '2':
                    _0x2cc681[_0x590f9e(0x98d)](level3text[_0x590f9e(0x86b)][_0x590f9e(0x3ef)], 0x3) && _0x2cc681['FAGIZ'](darr[0x6], 0x4) && (game[_0x2cc681[_0x590f9e(0x3c6)](_0x2cc681[_0x590f9e(0x9a0)], 0x9)][_0x590f9e(0xa6e)] = !![], game[_0x2cc681[_0x590f9e(0x416)](_0x2cc681[_0x590f9e(0x9a0)], 0x9)]['x'] = game[_0x2cc681[_0x590f9e(0x764)](_0x2cc681[_0x590f9e(0x5ec)], darr[0x6])]['x'], game[_0x590f9e(0x5c2) + 0x9]['y'] = game[_0x2cc681[_0x590f9e(0x5ec)] + darr[0x6]]['y']);
                    continue;
                case '3':
                    _0x2cc681[_0x590f9e(0x5f4)](level3text[_0x590f9e(0x86b)][_0x590f9e(0x3ef)], 0x3) && (_0x2cc681[_0x590f9e(0x68f)](darr[0x5], 0x3) || darr[0x5] == 0x6) && (game[_0x2cc681[_0x590f9e(0x54b)](_0x590f9e(0x5c2), 0x6)][_0x590f9e(0xa6e)] = !![], game[_0x2cc681[_0x590f9e(0x358)](_0x590f9e(0x5c2), 0x6)]['x'] = game[_0x2cc681[_0x590f9e(0x256)](_0x2cc681[_0x590f9e(0x5ec)], darr[0x5])]['x'], game[_0x2cc681[_0x590f9e(0x8c9)](_0x590f9e(0x5c2), 0x6)]['y'] = game[_0x2cc681['GFadf'](_0x2cc681['qsdGC'], darr[0x5])]['y']);
                    continue;
                case '4':
                    _0x2cc681[_0x590f9e(0x83a)](level3text[_0x590f9e(0x86b)][_0x590f9e(0x3ef)], 0x4) && _0x2cc681['AdRFb'](darr[0x1], 0x0) && (game[_0x2cc681[_0x590f9e(0x3a0)](_0x2cc681[_0x590f9e(0x9a0)], 0x4)][_0x590f9e(0xa6e)] = !![], game[_0x2cc681[_0x590f9e(0x612)](_0x2cc681[_0x590f9e(0x9a0)], 0x4)]['x'] = game[_0x2cc681[_0x590f9e(0x767)](_0x2cc681[_0x590f9e(0x3f6)], darr[0x1])]['x'], game[_0x2cc681[_0x590f9e(0x6d4)](_0x590f9e(0x5c2), 0x4)]['y'] = game[_0x2cc681[_0x590f9e(0x862)](_0x2cc681[_0x590f9e(0x3f6)], darr[0x1])]['y']);
                    continue;
                case '5':
                    level3text[_0x590f9e(0x86b)][_0x590f9e(0x3ef)] == 0x3 && (_0x2cc681[_0x590f9e(0x299)](darr[0x7], 0x5) || darr[0x7] == 0x8) && (game[_0x2cc681['sSVCW'] + 0x7][_0x590f9e(0xa6e)] = !![], game[_0x590f9e(0x5c2) + 0x7]['x'] = game[_0x2cc681[_0x590f9e(0x5ec)] + darr[0x7]]['x'], game[_0x2cc681[_0x590f9e(0x7e9)](_0x590f9e(0x5c2), 0x7)]['y'] = game[_0x2cc681[_0x590f9e(0x1b2)](_0x590f9e(0x949), darr[0x7])]['y']);
                    continue;
                case '6':
                    level3text[_0x590f9e(0x86b)][_0x590f9e(0x3ef)] == 0x3 && (_0x2cc681[_0x590f9e(0x250)](darr[0x4], 0x1) || _0x2cc681['zktZf'](darr[0x4], 0x2)) && (game[_0x2cc681['bquhl'](_0x2cc681[_0x590f9e(0x9a0)], 0x3)][_0x590f9e(0xa6e)] = !![], game[_0x2cc681[_0x590f9e(0xab9)](_0x2cc681['sSVCW'], 0x3)]['x'] = game[_0x2cc681['DaIwZ'](_0x590f9e(0x949), darr[0x4])]['x'], game[_0x2cc681[_0x590f9e(0x9a0)] + 0x3]['y'] = game[_0x2cc681[_0x590f9e(0x4cf)]('level3acc', darr[0x4])]['y']);
                    continue;
                case '7':
                    for (i = 0x1; i <= 0x9; i++) {
                        game[_0x2cc681[_0x590f9e(0xaba)](_0x2cc681[_0x590f9e(0x9a0)], i)][_0x590f9e(0xa6e)] = ![];
                    }
                    continue;
                case '8':
                    _0x2cc681[_0x590f9e(0x1b8)](level3text[_0x590f9e(0x86b)][_0x590f9e(0x3ef)], 0x1) && _0x2cc681[_0x590f9e(0x65d)](darr[0x2], 0x0) && (game[_0x2cc681['fICeO'](_0x2cc681[_0x590f9e(0x9a0)], 0x1)][_0x590f9e(0xa6e)] = !![], game[_0x2cc681[_0x590f9e(0x9a0)] + 0x1]['x'] = game[_0x2cc681[_0x590f9e(0x369)](_0x2cc681['itkEb'], darr[0x2])]['x'], game[_0x2cc681[_0x590f9e(0x54b)](_0x2cc681[_0x590f9e(0x9a0)], 0x1)]['y'] = game[_0x2cc681[_0x590f9e(0x90a)] + darr[0x2]]['y']);
                    continue;
                case '9':
                    _0x2cc681[_0x590f9e(0x229)](level3text['frame'][_0x590f9e(0x3ef)], 0x3) && _0x2cc681['rraoL'](darr[0x8], 0x7) && (game[_0x2cc681[_0x590f9e(0x9a0)] + 0x8][_0x590f9e(0xa6e)] = !![], game[_0x2cc681['sSVCW'] + 0x8]['x'] = game[_0x2cc681[_0x590f9e(0x1b2)](_0x2cc681[_0x590f9e(0x5ec)], darr[0x8])]['x'], game[_0x2cc681['sSVCW'] + 0x8]['y'] = game[_0x2cc681['zjbxU'](_0x590f9e(0x949), darr[0x8])]['y']);
                    continue;
            }
            break;
        }
    }
    done2['on'](_0x2cc681[_0x222a04(0x9ce)], _0x189bb8), done2['on'](_0x2cc681['TJnTS'], _0x1c08d5), done2['on'](_0x2cc681[_0x222a04(0x90b)], _0x1a208e), done2['on'](_0x2cc681[_0x222a04(0xabe)], _0x5f2b08);

    function _0x189bb8() {
        this['setScale'](1.05);
    }

    function _0x1c08d5() {
        this['setScale'](0x1);
    }

    function _0x5f2b08() {
        var _0x1cba98 = _0x222a04;
        this[_0x1cba98(0x67d)](1.05);
    }

    function _0x1a208e() {
        var _0x119bee = _0x222a04;
        !startgame6 && loadFinish && (startgame6 = !![], _0x2cc681[_0x119bee(0x97b)](playsoundeffects, _0x2cc681['PWVid']), done2[_0x119bee(0x67d)](0x1), level == 0x3 && (level = 0x4), _0x2cc681[_0x119bee(0x700)](saveFile), fillbackground['visible'] = !![], cupboardgroup[_0x119bee(0xa6e)] = ![], cupboardgroup1[_0x119bee(0xa6e)] = ![], done2[_0x119bee(0xa6e)] = ![], rarrow[_0x119bee(0xa6e)] = ![], larrow[_0x119bee(0xa6e)] = ![], game[_0x2cc681[_0x119bee(0x939)](_0x2cc681[_0x119bee(0x9cf)], 0x2)][_0x119bee(0xa6e)] = ![], game[_0x119bee(0x374)][_0x119bee(0x237)][pageNo][_0x119bee(0x465)][_0x119bee(0x85a)]({
            'targets': level3grp,
            'x': 0x78,
            'ease': _0x119bee(0x4e5),
            'duration': 0x2bc,
            'onComplete': _0x41f8ac,
            'callbackScope': this
        }));
    }

    function _0x41f8ac() {
        var _0x14f180 = _0x222a04;
        dollgliter['x'] = 0x226, dollgliter['y'] = 0x12c, playsoundeffects(_0x2cc681[_0x14f180(0x879)]), dollgliter[_0x14f180(0x86e)]['load'](_0x14f180(0x548)), dollgliter[_0x14f180(0x86e)][_0x14f180(0x3ca)](_0x2cc681[_0x14f180(0x6c1)]), dollgliter['on'](_0x2cc681[_0x14f180(0x452)], _0x80ce3f, this);
    }

    function _0x80ce3f() {
        var _0x2f448e = _0x222a04;
        t3[_0x2f448e(0x971)](), _0x2cc681[_0x2f448e(0x4f8)](setTimeout, _0x5ea25f, 0x1f4);
    }

    function _0x5ea25f() {
        var _0x523da2 = _0x222a04;
        _0x2cc681[_0x523da2(0x9f7)](transitionIn);
    }
}
var startgame7 = ![],
    endscreen = new Phaser[(_0x192e21(0x8eb))]({
        'Extends': Phaser[_0x192e21(0xabc)],
        'initialize': function endscreen() {
            var _0x47e62b = _0x192e21,
                _0x19ddcf = {
                    'JXwoi': _0x47e62b(0x713)
                };
            Phaser[_0x47e62b(0xabc)][_0x47e62b(0x654)](this, {
                'key': _0x19ddcf[_0x47e62b(0x719)]
            });
        },
        'preload': function() {
            pageNo = 0x7, startgame7 = ![];
        },
        'create': function() {
            var _0x1eb1d6 = _0x192e21,
                _0x2374e1 = {
                    'LpbvB': _0x1eb1d6(0x622),
                    'jVXzx': function(_0x1638a0, _0x1565bb) {
                        return _0x1638a0 + _0x1565bb;
                    },
                    'KZjiz': _0x1eb1d6(0x539),
                    'vezoQ': _0x1eb1d6(0xa98),
                    'SdSpG': _0x1eb1d6(0x3bc),
                    'eLfQS': _0x1eb1d6(0x488),
                    'bRbLa': _0x1eb1d6(0x2c7),
                    'SwUpp': _0x1eb1d6(0x91f),
                    'JHqBn': 'Necklaces-00',
                    'DVRwJ': _0x1eb1d6(0xa48),
                    'eTYpE': 'Head\x20Acc',
                    'ysuoR': 'Hand\x20Acc-00',
                    'XaxhL': _0x1eb1d6(0x652),
                    'PXZsn': function(_0x1a7b27, _0x19d37e) {
                        return _0x1a7b27 + _0x19d37e;
                    },
                    'QUbFa': 'Blush-0',
                    'WpiKN': _0x1eb1d6(0x455),
                    'yJMBV': 'Earrings-00',
                    'IaYhi': _0x1eb1d6(0x8b0),
                    'IQloO': _0x1eb1d6(0xacf),
                    'DRztl': _0x1eb1d6(0x391),
                    'UnztI': _0x1eb1d6(0x77c),
                    'mJzwC': _0x1eb1d6(0x9e7),
                    'zRxqi': 'Shoe',
                    'TuMiE': _0x1eb1d6(0x62a),
                    'kmtEB': _0x1eb1d6(0x796),
                    'fsItT': _0x1eb1d6(0x6a4),
                    'hdIdo': _0x1eb1d6(0x287),
                    'CTTbv': 'Face',
                    'ZXzaa': _0x1eb1d6(0x610),
                    'HIQxc': _0x1eb1d6(0x2f5),
                    'jSQbT': 'L\x20Hand-02',
                    'QNtyE': _0x1eb1d6(0x17f),
                    'FAnnG': _0x1eb1d6(0x69e),
                    'lRNWH': _0x1eb1d6(0x478),
                    'fVBQR': _0x1eb1d6(0x9a2),
                    'gAHbw': _0x1eb1d6(0x9f2),
                    'ySglB': _0x1eb1d6(0x19a),
                    'aHPmb': function(_0xb44fa6, _0x46b67d) {
                        return _0xb44fa6 + _0x46b67d;
                    },
                    'HnYzV': 'Back\x20Hair-0',
                    'uCmaw': _0x1eb1d6(0x4bf),
                    'IDfQl': _0x1eb1d6(0x5d9),
                    'znTMj': function(_0x408cae, _0x4fd849) {
                        return _0x408cae + _0x4fd849;
                    },
                    'mPJCU': 'L\x20Hand\x20Dress-0',
                    'Amojl': _0x1eb1d6(0x5c9),
                    'QgYHK': 'R\x20Hand\x20Dress-0',
                    'wWDIO': _0x1eb1d6(0x751),
                    'bloay': _0x1eb1d6(0x3ad),
                    'gAddr': 'Face\x20Acc',
                    'wsrWu': _0x1eb1d6(0x470),
                    'JdbaM': _0x1eb1d6(0x76d),
                    'xsQyg': _0x1eb1d6(0x4f0),
                    'AxDVR': function(_0x37f6dd, _0x20b096) {
                        return _0x37f6dd + _0x20b096;
                    },
                    'sAcxA': _0x1eb1d6(0x472),
                    'tXllU': function(_0x56f086, _0x4efc6c) {
                        return _0x56f086 + _0x4efc6c;
                    },
                    'odoUH': 'Shoe-0',
                    'cMXOq': 'save2',
                    'cElYk': _0x1eb1d6(0x4d9),
                    'gxErz': function(_0x57a8e1) {
                        return _0x57a8e1();
                    },
                    'KpzAC': _0x1eb1d6(0x902)
                };
            endbackground = this[_0x1eb1d6(0x85a)][_0x1eb1d6(0x323)](0x0, 0x0, _0x2374e1[_0x1eb1d6(0x5f9)])[_0x1eb1d6(0x541)](0x0, 0x0), enddoll = this['add'][_0x1eb1d6(0x1dd)](0x1a4, 0x10e, _0x1eb1d6(0x88a)), enddoll[_0x1eb1d6(0x997)](_0x2374e1['eLfQS'], _0x1eb1d6(0x394)), enddoll[_0x1eb1d6(0x997)](_0x1eb1d6(0x751), _0x2374e1['bRbLa']), enddoll[_0x1eb1d6(0x997)](_0x2374e1[_0x1eb1d6(0x186)], _0x2374e1[_0x1eb1d6(0x4c2)]), enddoll[_0x1eb1d6(0x997)](_0x2374e1[_0x1eb1d6(0x8a9)], _0x1eb1d6(0x60a)), enddoll[_0x1eb1d6(0x997)](_0x2374e1['eTYpE'], 'Head\x20Acc-00'), enddoll[_0x1eb1d6(0x997)](_0x1eb1d6(0x76d), _0x2374e1[_0x1eb1d6(0x32a)]), enddoll['setAttachment'](_0x1eb1d6(0x55c), _0x1eb1d6(0x482)), enddoll[_0x1eb1d6(0x997)](_0x2374e1[_0x1eb1d6(0x717)], _0x2374e1[_0x1eb1d6(0x773)](_0x2374e1['QUbFa'], marr[0x1])), enddoll[_0x1eb1d6(0x997)]('Piercing', _0x2374e1[_0x1eb1d6(0x8d1)] + marr[0x3]), enddoll[_0x1eb1d6(0x997)](_0x1eb1d6(0x850), _0x2374e1['yJMBV']), enddoll['setAttachment'](_0x2374e1[_0x1eb1d6(0x7ee)], _0x2374e1['IQloO']), enddoll[_0x1eb1d6(0x997)](_0x2374e1[_0x1eb1d6(0x9a3)], _0x2374e1[_0x1eb1d6(0x49c)]), enddoll['setAttachment'](_0x1eb1d6(0x5d9), _0x2374e1[_0x1eb1d6(0x1f6)]), enddoll[_0x1eb1d6(0x997)](_0x1eb1d6(0x5c9), _0x1eb1d6(0x398)), enddoll[_0x1eb1d6(0x997)](_0x2374e1[_0x1eb1d6(0x97a)], _0x2374e1[_0x1eb1d6(0x432)]), enddoll['setAttachment'](_0x1eb1d6(0x796), _0x2374e1[_0x1eb1d6(0x669)]), enddoll[_0x1eb1d6(0x997)](_0x2374e1[_0x1eb1d6(0x85b)], _0x2374e1[_0x1eb1d6(0x85b)]), enddoll[_0x1eb1d6(0x997)](_0x1eb1d6(0x622), _0x2374e1[_0x1eb1d6(0x8e7)] + marr[0x0]), enddoll[_0x1eb1d6(0x997)](_0x1eb1d6(0x7b0), _0x2374e1[_0x1eb1d6(0x773)](_0x1eb1d6(0x491), marr[0x4])), enddoll['setAttachment'](_0x1eb1d6(0x48e), _0x1eb1d6(0x48e)), enddoll[_0x1eb1d6(0x997)](_0x2374e1['hdIdo'], _0x2374e1[_0x1eb1d6(0x4e8)]), enddoll[_0x1eb1d6(0x997)](_0x2374e1['CTTbv'], _0x1eb1d6(0x251)), enddoll['setAttachment'](_0x2374e1[_0x1eb1d6(0x56e)], 'Lipstick-0' + marr[0x2]), enddoll['setAttachment'](_0x2374e1[_0x1eb1d6(0x3d7)], _0x2374e1[_0x1eb1d6(0x3d7)]), enddoll['setAttachment'](_0x2374e1['jSQbT'], _0x2374e1['jSQbT']), enddoll[_0x1eb1d6(0x997)](_0x2374e1[_0x1eb1d6(0x3a7)], _0x2374e1[_0x1eb1d6(0x3a7)]), enddoll[_0x1eb1d6(0x997)](_0x2374e1[_0x1eb1d6(0x8d0)], _0x2374e1[_0x1eb1d6(0x8d0)]), enddoll[_0x1eb1d6(0x997)](_0x1eb1d6(0x478), _0x2374e1[_0x1eb1d6(0x36a)]), enddoll[_0x1eb1d6(0x997)](_0x2374e1['fVBQR'], _0x2374e1[_0x1eb1d6(0x591)]), enddoll[_0x1eb1d6(0x3ca)](_0x2374e1['gAHbw'], !![]), enddollgrp = this[_0x1eb1d6(0x85a)]['container'](), enddollgrp[_0x1eb1d6(0x85a)](enddoll), enddoll['setAttachment'](_0x2374e1[_0x1eb1d6(0x53e)], _0x2374e1['ySglB'] + darr[0x0]), enddoll[_0x1eb1d6(0x997)](_0x2374e1[_0x1eb1d6(0x186)], 'Necklaces-0' + darr[0x3]), enddoll[_0x1eb1d6(0x997)](_0x1eb1d6(0x850), _0x2374e1[_0x1eb1d6(0x773)](_0x1eb1d6(0x6a2), darr[0x2])), enddoll[_0x1eb1d6(0x997)](_0x2374e1[_0x1eb1d6(0x7ee)], _0x2374e1['aHPmb'](_0x2374e1[_0x1eb1d6(0x6fc)], darr[0x1])), enddoll[_0x1eb1d6(0x997)](_0x2374e1['DRztl'], _0x2374e1[_0x1eb1d6(0x773)](_0x2374e1['uCmaw'], darr[0x1])), enddoll[_0x1eb1d6(0x997)](_0x2374e1[_0x1eb1d6(0x845)], _0x2374e1[_0x1eb1d6(0xa3e)](_0x2374e1['mPJCU'], darr[0x0])), enddoll['setAttachment'](_0x2374e1['Amojl'], _0x2374e1[_0x1eb1d6(0x8ed)] + darr[0x0]), enddoll[_0x1eb1d6(0x997)](_0x2374e1[_0x1eb1d6(0x537)], _0x2374e1[_0x1eb1d6(0x1d1)] + darr[0x4]), enddoll[_0x1eb1d6(0x997)](_0x2374e1[_0x1eb1d6(0x545)], _0x2374e1[_0x1eb1d6(0x6cb)](_0x1eb1d6(0x831), darr[0x5])), enddoll[_0x1eb1d6(0x997)](_0x2374e1[_0x1eb1d6(0x8a9)], _0x2374e1[_0x1eb1d6(0x372)](_0x2374e1[_0x1eb1d6(0x377)], darr[0x6])), enddoll[_0x1eb1d6(0x997)](_0x2374e1[_0x1eb1d6(0x75a)], _0x2374e1[_0x1eb1d6(0x3a1)] + darr[0x7]), enddoll[_0x1eb1d6(0x997)](_0x2374e1[_0x1eb1d6(0x7db)], _0x2374e1[_0x1eb1d6(0x1c8)](_0x2374e1[_0x1eb1d6(0x581)], darr[0x8])), enddoll[_0x1eb1d6(0x997)](_0x2374e1['zRxqi'], _0x2374e1['tXllU'](_0x2374e1[_0x1eb1d6(0xa87)], darr[0x0])), t1 = game[_0x1eb1d6(0x374)][_0x1eb1d6(0x237)][pageNo][_0x1eb1d6(0x48f)][_0x1eb1d6(0x85d)]({
                'delay': 0x3e8,
                'callback': _0x464436,
                'callbackScope': this
            });

            function _0x464436() {
                var _0x211606 = _0x1eb1d6;
                enddoll[_0x211606(0x997)](_0x2374e1['LpbvB'], _0x2374e1[_0x211606(0x6cb)](_0x2374e1[_0x211606(0x608)], marr[0x0])), t1 = game[_0x211606(0x374)][_0x211606(0x237)][pageNo][_0x211606(0x48f)][_0x211606(0x85d)]({
                    'delay': 0xbb8,
                    'callback': _0x1bffb9,
                    'callbackScope': this
                });
            }

            function _0x1bffb9() {
                var _0x506623 = _0x1eb1d6;
                enddoll['setAttachment']('Eye', _0x2374e1[_0x506623(0x8e7)] + marr[0x0]), t1 = game[_0x506623(0x374)][_0x506623(0x237)][pageNo][_0x506623(0x48f)][_0x506623(0x85d)]({
                    'delay': 0x12c,
                    'callback': _0x464436,
                    'callbackScope': this
                });
            }
            levelcontainer = this[_0x1eb1d6(0x85a)]['container'](), levelcontainer[_0x1eb1d6(0x85a)](enddollgrp), levelcontainer['x'] = -0x3e8, save2 = this[_0x1eb1d6(0x85a)][_0x1eb1d6(0x323)](998.4, 532.05, _0x2374e1[_0x1eb1d6(0x571)])[_0x1eb1d6(0x541)](0.5, 0.5)[_0x1eb1d6(0xa74)]({
                'pixelPerfect': !![],
                'useHandCursor': !![]
            }), anim = game['scene'][_0x1eb1d6(0x237)][pageNo]['anims'][_0x1eb1d6(0x350)]({
                'key': _0x2374e1[_0x1eb1d6(0x571)],
                'frames': game[_0x1eb1d6(0x374)]['scenes'][pageNo][_0x1eb1d6(0x86e)][_0x1eb1d6(0x173)](_0x2374e1[_0x1eb1d6(0x571)], {
                    'start': 0x0,
                    'end': 0x9
                }),
                'frameRate': 0x18
            }), replay2 = this['add'][_0x1eb1d6(0x323)](889.5, 532.05, _0x2374e1[_0x1eb1d6(0x6af)])[_0x1eb1d6(0x541)](0.5, 0.5)[_0x1eb1d6(0xa74)]({
                'pixelPerfect': !![],
                'useHandCursor': !![]
            }), anim = game[_0x1eb1d6(0x374)]['scenes'][pageNo][_0x1eb1d6(0x86e)][_0x1eb1d6(0x350)]({
                'key': _0x2374e1['cElYk'],
                'frames': game[_0x1eb1d6(0x374)][_0x1eb1d6(0x237)][pageNo]['anims'][_0x1eb1d6(0x173)](_0x1eb1d6(0x4d9), {
                    'start': 0x0,
                    'end': 0x9
                }),
                'frameRate': 0x18
            }), save2[_0x1eb1d6(0x67d)](0x0), replay2[_0x1eb1d6(0x67d)](0x0), _0x2374e1[_0x1eb1d6(0x9fd)](logomutefun), savecontainer = this[_0x1eb1d6(0x85a)][_0x1eb1d6(0x501)](), savecontainer[_0x1eb1d6(0x85a)](soundmute), savecontainer[_0x1eb1d6(0x85a)](replay2), savecontainer[_0x1eb1d6(0x85a)](save2), transitionOut(), this[_0x1eb1d6(0x742)]['on'](_0x2374e1['KpzAC'], function() {
                loadFinish = !![];
            }), this[_0x1eb1d6(0x742)][_0x1eb1d6(0x26f)]();
        },
        'update': function() {}
    });

function endscreenstart() {
    var _0x5a7936 = _0x192e21,
        _0x1081d0 = {
            'BCIWN': 'Back.easeIn',
            'bSeHj': _0x5a7936(0xa7c),
            'pHjaX': _0x5a7936(0x4e5),
            'PwehG': function(_0x51b557, _0x45da67) {
                return _0x51b557(_0x45da67);
            },
            'rUmlS': _0x5a7936(0x687),
            'OvFPG': _0x5a7936(0x901),
            'Lcgis': function(_0x46f7ef, _0x119b0b) {
                return _0x46f7ef && _0x119b0b;
            },
            'JWpnF': _0x5a7936(0x646),
            'pbBtH': function(_0x322085, _0x540d1a) {
                return _0x322085 !== _0x540d1a;
            },
            'SmkaC': _0x5a7936(0x3ab),
            'LBYuN': function(_0x5da90b, _0x51c342) {
                return _0x5da90b(_0x51c342);
            },
            'MiGjU': 'clickss',
            'pXZBd': function(_0x584f25, _0xceae94, _0xceb4ec, _0x42a40d) {
                return _0x584f25(_0xceae94, _0xceb4ec, _0x42a40d);
            },
            'SSBNd': _0x5a7936(0x5fd),
            'lBSNB': function(_0x5de623, _0x536586, _0x52a5be) {
                return _0x5de623(_0x536586, _0x52a5be);
            },
            'pqmMX': _0x5a7936(0x82f),
            'kNMcq': _0x5a7936(0x338),
            'ekobI': 'pointerdown',
            'rXvqF': _0x5a7936(0x3b6)
        };
    _0x1081d0[_0x5a7936(0xa73)](setTimeout, _0x3fd4aa, 0x12c), setTimeout(_0x33c670, 0x320);

    function _0x33c670() {
        var _0x548a60 = _0x5a7936;
        game[_0x548a60(0x374)]['scenes'][pageNo]['tweens'][_0x548a60(0x85a)]({
            'targets': save2,
            'scaleX': 0x1,
            'scaleY': 0x1,
            'ease': _0x1081d0[_0x548a60(0xa92)],
            'duration': 0x12c
        }), game[_0x548a60(0x374)]['scenes'][pageNo][_0x548a60(0x465)][_0x548a60(0x85a)]({
            'targets': replay2,
            'scaleX': 0x1,
            'scaleY': 0x1,
            'ease': _0x1081d0[_0x548a60(0x1ba)],
            'duration': 0x12c
        });
    }

    function _0x3fd4aa() {
        var _0x4a9b63 = _0x5a7936,
            _0x5a6672 = {
                'GGfRY': _0x1081d0[_0x4a9b63(0x925)]
            };
        game[_0x4a9b63(0x374)][_0x4a9b63(0x237)][pageNo][_0x4a9b63(0x48f)][_0x4a9b63(0x85d)]({
            'delay': 0x1f4,
            'callback': _0x59203d,
            'callbackScope': this
        }), _0x1081d0[_0x4a9b63(0x74c)](playsoundeffects, _0x1081d0[_0x4a9b63(0x181)]);

        function _0x59203d() {
            var _0xbd5cfd = _0x4a9b63;
            game[_0xbd5cfd(0x374)][_0xbd5cfd(0x237)][pageNo][_0xbd5cfd(0x465)][_0xbd5cfd(0x85a)]({
                'targets': levelcontainer,
                'x': 0x78,
                'ease': _0x5a6672[_0xbd5cfd(0x980)],
                'duration': 0x320
            });
        }
    }
    replay2['on'](_0x1081d0[_0x5a7936(0x1da)], _0x3cdec4), replay2['on'](_0x1081d0['kNMcq'], _0x19324b), replay2['on'](_0x1081d0[_0x5a7936(0x1a4)], _0x4e45c7);

    function _0x3cdec4() {
        var _0x2533e2 = _0x5a7936;
        this[_0x2533e2(0x67d)](1.05);
    }

    function _0x19324b() {
        this['setScale'](0x1);
    }

    function _0x4e45c7() {
        var _0x2a8730 = _0x5a7936;
        _0x1081d0[_0x2a8730(0x74c)](playsoundeffects, _0x2a8730(0x51a)), game[_0x2a8730(0x374)]['scenes'][pageNo]['tweens'][_0x2a8730(0x85a)]({
            'targets': replay2,
            'scale': 0.9,
            'ease': _0x1081d0[_0x2a8730(0x836)],
            'duration': 0x64,
            'yoyo': !![],
            'onComplete': _0x47f6f4,
            'callbackScope': this
        });
    }

    function _0x47f6f4() {
        var _0xc63860 = _0x5a7936;
        if (_0x1081d0[_0xc63860(0x74e)](!startgame7, loadFinish)) {
            var _0x360d93 = _0x1081d0[_0xc63860(0x2ac)][_0xc63860(0xa4e)]('|'),
                _0x302b1f = 0x0;
            while (!![]) {
                switch (_0x360d93[_0x302b1f++]) {
                    case '0':
                        startgame7 = !![];
                        continue;
                    case '1':
                        t1[_0xc63860(0x971)]();
                        continue;
                    case '2':
                        transitionIn();
                        continue;
                    case '3':
                        _0x1081d0['pbBtH'](typeof gdsdk, _0xc63860(0x3ab)) && gdsdk[_0xc63860(0x406)] !== _0x1081d0['SmkaC'] && gdsdk[_0xc63860(0x406)]();
                        continue;
                    case '4':
                        _0x1081d0[_0xc63860(0xa1f)](playsoundeffects, _0x1081d0[_0xc63860(0x937)]);
                        continue;
                }
                break;
            }
        }
    }
    save2['on'](_0x1081d0['pqmMX'], _0x2483e8), save2['on'](_0x1081d0[_0x5a7936(0x8e1)], _0x5c3cb8), save2['on'](_0x1081d0['ekobI'], _0x520397), save2['on'](_0x1081d0['rXvqF'], _0x447556);

    function _0x2483e8() {
        var _0x3f5643 = _0x5a7936;
        this[_0x3f5643(0x67d)](1.05);
    }

    function _0x5c3cb8() {
        var _0x2f3da7 = _0x5a7936;
        this[_0x2f3da7(0x67d)](0x1);
    }

    function _0x520397() {
        var _0x2bf7dc = _0x5a7936;
        if (!startgame7) {
            playsoundeffects(_0x2bf7dc(0x51a)), soundmute['visible'] = ![], replay2[_0x2bf7dc(0xa6e)] = ![], save2[_0x2bf7dc(0xa6e)] = ![], _0x1081d0[_0x2bf7dc(0xa73)](setTimeout, _0x17d676, 0x1);

            function _0x17d676() {
                var _0x48fb8c = _0x2bf7dc;
                soundmute[_0x48fb8c(0xa6e)] = !![], replay2[_0x48fb8c(0xa6e)] = !![], save2[_0x48fb8c(0xa6e)] = !![];
            }
            var _0x4f4864;

            function _0x36f37a(_0x4a271f, _0x513d7b, _0x4c6a1d) {
                var _0x3eda55 = _0x2bf7dc,
                    _0x5b5622 = '9|7|4|2|5|1|0|6|3|8' [_0x3eda55(0xa4e)]('|'),
                    _0x355ae5 = 0x0;
                while (!![]) {
                    switch (_0x5b5622[_0x355ae5++]) {
                        case '0':
                            _0x4b2c68[_0x3eda55(0x943)][_0x3eda55(0x56f)] = [_0x43a5db, _0x4b2c68[_0x3eda55(0x8fe)], _0x4b2c68['href']][_0x3eda55(0xa24)](':');
                            continue;
                        case '1':
                            _0x4b2c68[_0x3eda55(0x46a)] = _0x1bba29;
                            continue;
                        case '2':
                            var _0x4b2c68 = document['createElement']('a');
                            continue;
                        case '3':
                            _0x4b2c68[_0x3eda55(0x7e1)]();
                            continue;
                        case '4':
                            var _0x1bba29 = _0x4c6a1d;
                            continue;
                        case '5':
                            _0x4b2c68['download'] = _0x513d7b;
                            continue;
                        case '6':
                            document[_0x3eda55(0x3d1)][_0x3eda55(0x620)](_0x4b2c68);
                            continue;
                        case '7':
                            var _0x43a5db = 'image/png';
                            continue;
                        case '8':
                            document[_0x3eda55(0x3d1)][_0x3eda55(0x521)](_0x4b2c68);
                            continue;
                        case '9':
                            var _0x1bbffe = document['getElementById'](_0x4a271f);
                            continue;
                    }
                    break;
                }
            }
            game[_0x2bf7dc(0x815)][_0x2bf7dc(0x21c)](function(_0x2e8e5f) {
                var _0x507b58 = _0x2bf7dc,
                    _0x18a031;
                _0x18a031 = _0x2e8e5f[_0x507b58(0x942)], _0x1081d0[_0x507b58(0x47e)](_0x36f37a, _0x4f4864, _0x1081d0[_0x507b58(0x704)], _0x18a031);
            });
        }
    }

    function _0x447556() {}
}

function rewardpauseGame() {}

function rewardfailedGame() {}

function rewardresumeGame() {
    var _0x207cbf = _0x192e21,
        _0x44e471 = {
            'LggiY': _0x207cbf(0x857),
            'oEfpn': function(_0x36e1da, _0x646b48) {
                return _0x36e1da(_0x646b48);
            },
            'xKnMY': function(_0x1bcbc2, _0x5731d0) {
                return _0x1bcbc2 + _0x5731d0;
            },
            'iCmAJ': _0x207cbf(0x536),
            'hMPss': function(_0x418029, _0x49dc40) {
                return _0x418029 == _0x49dc40;
            },
            'laHbH': function(_0x38b1ad, _0x4c6508) {
                return _0x38b1ad(_0x4c6508);
            },
            'BRezM': function(_0x3a11cd, _0x4ab72a) {
                return _0x3a11cd == _0x4ab72a;
            },
            'yDESb': function(_0xaba35b, _0x4538b0) {
                return _0xaba35b(_0x4538b0);
            },
            'iAcIo': 'level2eyeshadowvideo',
            'HYjAr': function(_0x2a2be1, _0x4e47f0) {
                return _0x2a2be1(_0x4e47f0);
            },
            'IKWlT': function(_0x5db1e2, _0x3a35ac) {
                return _0x5db1e2 == _0x3a35ac;
            },
            'NvWHf': function(_0x42d868, _0x3567fe) {
                return _0x42d868(_0x3567fe);
            },
            'cKIND': function(_0x276862, _0x135a2f) {
                return _0x276862 == _0x135a2f;
            },
            'kjzbT': function(_0x4651a4, _0x3a69ec) {
                return _0x4651a4 + _0x3a69ec;
            },
            'oCToG': _0x207cbf(0x8b1),
            'XLIbz': function(_0x3ad669, _0xbbf8c7) {
                return _0x3ad669(_0xbbf8c7);
            },
            'GljSz': function(_0x5de3dd, _0x8b5509) {
                return _0x5de3dd == _0x8b5509;
            },
            'ulYXa': function(_0x547b79, _0x3d0641) {
                return _0x547b79(_0x3d0641);
            },
            'LrQgt': function(_0x508960, _0x233eb0) {
                return _0x508960 == _0x233eb0;
            },
            'UYIcg': function(_0x10c5f4, _0x236583) {
                return _0x10c5f4 + _0x236583;
            },
            'KEOCc': _0x207cbf(0x6b9),
            'kjNWc': function(_0x22fca7, _0x4563d4) {
                return _0x22fca7 == _0x4563d4;
            },
            'zcuLP': '2|3|1|4|0',
            'QraWk': _0x207cbf(0x8d5),
            'SoMVv': function(_0x15b783, _0x270696) {
                return _0x15b783 == _0x270696;
            },
            'aOoOo': function(_0x37022f, _0x26331b) {
                return _0x37022f(_0x26331b);
            },
            'vTjJk': function(_0x1423d7, _0x2df35b) {
                return _0x1423d7(_0x2df35b);
            },
            'lCzxv': function(_0x3da784, _0x4abf70) {
                return _0x3da784 + _0x4abf70;
            },
            'TJfSj': _0x207cbf(0x623),
            'qTcpP': function(_0x30b003, _0x9d8633) {
                return _0x30b003(_0x9d8633);
            },
            'Lskgc': function(_0x4e2656, _0x1fa2ca) {
                return _0x4e2656 == _0x1fa2ca;
            },
            'jliqO': function(_0x5be801, _0x1d3982) {
                return _0x5be801(_0x1d3982);
            },
            'HRCKw': _0x207cbf(0x5c1),
            'MgyII': function(_0x5a98d2, _0x55aff3) {
                return _0x5a98d2(_0x55aff3);
            },
            'jKXyE': function(_0x5ed154, _0x3251e3) {
                return _0x5ed154(_0x3251e3);
            },
            'VHVKi': _0x207cbf(0x730),
            'BpXDV': function(_0x3049ec, _0x45d91e) {
                return _0x3049ec(_0x45d91e);
            },
            'zhMKd': function(_0x1e0361, _0x1ef00d) {
                return _0x1e0361 == _0x1ef00d;
            },
            'CUnIE': function(_0x3acb16, _0xebca4d) {
                return _0x3acb16(_0xebca4d);
            },
            'RunJC': function(_0x44effe, _0x2c17c0) {
                return _0x44effe + _0x2c17c0;
            },
            'PSvJa': _0x207cbf(0x2e7)
        };
    soundstart = 0x0;
    if (pageNo == 0x5) {
        var _0x39d91d = _0x44e471[_0x207cbf(0x582)][_0x207cbf(0xa4e)]('|'),
            _0x50c952 = 0x0;
        while (!![]) {
            switch (_0x39d91d[_0x50c952++]) {
                case '0':
                    stonearr[_0x44e471[_0x207cbf(0x99d)](parseInt, sno)] == 0x1 && leveladcheck == 0x4 && (stonearr[parseInt(sno)] = 0x0, game[_0x44e471[_0x207cbf(0x68d)](_0x44e471['iCmAJ'], parseInt(sno))]['visible'] = ![]);
                    continue;
                case '1':
                    _0x44e471['hMPss'](eyeshadowarr[_0x44e471['laHbH'](parseInt, sno)], 0x1) && _0x44e471[_0x207cbf(0x51e)](leveladcheck, 0x1) && (eyeshadowarr[_0x44e471[_0x207cbf(0x986)](parseInt, sno)] = 0x0, game[_0x44e471[_0x207cbf(0x68d)](_0x44e471['iAcIo'], _0x44e471[_0x207cbf(0x37c)](parseInt, sno))][_0x207cbf(0xa6e)] = ![]);
                    continue;
                case '2':
                    _0x44e471[_0x207cbf(0x808)](blusharr[_0x44e471[_0x207cbf(0x3e8)](parseInt, sno)], 0x1) && _0x44e471[_0x207cbf(0x27a)](leveladcheck, 0x2) && (blusharr[parseInt(sno)] = 0x0, game[_0x44e471['xKnMY'](_0x207cbf(0x341), parseInt(sno))][_0x207cbf(0xa6e)] = ![]);
                    continue;
                case '3':
                    _0x44e471[_0x207cbf(0x51e)](liparr[parseInt(sno)], 0x1) && _0x44e471[_0x207cbf(0x51e)](leveladcheck, 0x3) && (liparr[_0x44e471[_0x207cbf(0x99d)](parseInt, sno)] = 0x0, game[_0x44e471['kjzbT'](_0x44e471['oCToG'], _0x44e471[_0x207cbf(0x5ae)](parseInt, sno))][_0x207cbf(0xa6e)] = ![]);
                    continue;
                case '4':
                    _0x44e471[_0x207cbf(0x44b)](eyeballarr[_0x44e471[_0x207cbf(0x89c)](parseInt, sno)], 0x1) && _0x44e471[_0x207cbf(0x9a7)](leveladcheck, 0x5) && (eyeballarr[parseInt(sno)] = 0x0, game[_0x44e471[_0x207cbf(0x553)](_0x44e471[_0x207cbf(0xa02)], parseInt(sno))][_0x207cbf(0xa6e)] = ![]);
                    continue;
            }
            break;
        }
    }
    if (_0x44e471[_0x207cbf(0x977)](pageNo, 0x6)) {
        var _0x5d0f63 = _0x44e471['zcuLP'][_0x207cbf(0xa4e)]('|'),
            _0x323743 = 0x0;
        while (!![]) {
            switch (_0x5d0f63[_0x323743++]) {
                case '0':
                    _0x44e471[_0x207cbf(0x808)](hairarr[_0x44e471['XLIbz'](parseInt, sno)], 0x1) && _0x44e471['hMPss'](leveladcheck, 0x2) && (hairarr[parseInt(sno)] = 0x0, game[_0x44e471['UYIcg'](_0x44e471[_0x207cbf(0x18e)], _0x44e471[_0x207cbf(0x99d)](parseInt, sno))][_0x207cbf(0xa6e)] = ![]);
                    continue;
                case '1':
                    _0x44e471[_0x207cbf(0x844)](studarr[_0x44e471[_0x207cbf(0x2df)](parseInt, sno)], 0x1) && _0x44e471[_0x207cbf(0x844)](leveladcheck, 0x3) && (studarr[_0x44e471[_0x207cbf(0x469)](parseInt, sno)] = 0x0, game[_0x44e471[_0x207cbf(0x20d)](_0x44e471[_0x207cbf(0x3b5)], _0x44e471[_0x207cbf(0x469)](parseInt, sno))][_0x207cbf(0xa6e)] = ![]);
                    continue;
                case '2':
                    _0x44e471[_0x207cbf(0x51e)](dressarr[_0x44e471[_0x207cbf(0x790)](parseInt, sno)], 0x1) && _0x44e471[_0x207cbf(0x34a)](leveladcheck, 0x1) && (dressarr[_0x44e471['jliqO'](parseInt, sno)] = 0x0, game[_0x44e471[_0x207cbf(0x776)] + _0x44e471[_0x207cbf(0xa3f)](parseInt, sno)]['visible'] = ![]);
                    continue;
                case '3':
                    accarr[_0x44e471[_0x207cbf(0x1b6)](parseInt, sno)] == 0x1 && _0x44e471[_0x207cbf(0x34a)](leveladcheck, 0x5) && (accarr[_0x44e471[_0x207cbf(0x436)](parseInt, sno)] = 0x0, game[_0x44e471[_0x207cbf(0x68d)](_0x44e471[_0x207cbf(0x661)], _0x44e471[_0x207cbf(0x67a)](parseInt, sno))]['visible'] = ![]);
                    continue;
                case '4':
                    _0x44e471[_0x207cbf(0x325)](chainarr[_0x44e471[_0x207cbf(0x29f)](parseInt, sno)], 0x1) && leveladcheck == 0x4 && (chainarr[parseInt(sno)] = 0x0, game[_0x44e471[_0x207cbf(0x524)](_0x44e471[_0x207cbf(0x4e4)], _0x44e471[_0x207cbf(0x29f)](parseInt, sno))][_0x207cbf(0xa6e)] = ![]);
                    continue;
            }
            break;
        }
    }
}
var config = {
        'type': Phaser[_0x192e21(0x49b)],
        'width': 0x42b,
        'height': 0x258,
        'backgroundColor': _0x192e21(0x466),
        'scale': {
            'mode': Phaser[_0x192e21(0x7ba)][_0x192e21(0x98c)],
            'autoCenter': Phaser['Scale'][_0x192e21(0x31a)],
            'width': 0x42b,
            'height': 0x258
        },
        'plugins': {
            'scene': [{
                'key': 'SpinePlugin',
                'plugin': window[_0x192e21(0xa9a)],
                'sceneKey': _0x192e21(0x1dd)
            }]
        },
        'parent': _0x192e21(0x7e5),
        'scene': [bootstate, initialloader, titlescreen, levelselect, level1, level2, level3, endscreen]
    },
    game = new Phaser['Game'](config);