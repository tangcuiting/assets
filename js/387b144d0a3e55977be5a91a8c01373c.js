(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('和平区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"210102","properties":{"name":"和平区","cp":[123.420368,41.789833],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@GEAAEAC@GA@AACEA@AA@@@AAAAAA@@@@A@@@E@@A@@A@@@@A@@@@@AA@@A@@@@@A@@A@@A@@KA@B@@@@@@@@@@A@@@A@@@@@AA@@@@A@A@@@AA@@CB@@@@@@A@@A@@@@@@@@@@@A@AA@A@@@@@A@@@@@@B@@@@@@@@A@@@@@A@@@@@C@@@@@AB@AA@@@@@@@@@AD@B@@@@@@@@@B@@@@A@A@@BCBABA@@@A@A@A@AB@BC@@@A@@ABC@@@@@A@@BK@@@@@AA@@A@@@A@@AAAC@@@@EI@@@AA@NEF@FAB@BAD@BAEEBA@AB@B@BAB@BA@@@B@@@@B@@BAB@@DDBB@BA@BBBBABBFFBB@BECCDAAE@@@@@A@@LAFAHAAA@A@@@@@@@@A@CB@@AB@@AA@@@@AA@@@@@AAB@A@@@@@@@@@AA@@@@@AB@@@@A@@@@AAB@@A@A@A@@@A@@B@@AB@@A@A@A@@AA@@A@@AA@@A@@@@@C@@@@@@@AACEEE@@@@@@GBCBCB@@A@@@@@CE@B@@A@@@@@C@ABA@IDC@@@@B@@@@A@GBABA@B@FN@@@@@B@BA@@B@@@@@B@@@@A@@@@@@B@@@BABCBC@CB@@A@AA@@@@@A@@BABA@@BA@@@@B@@@@A@@AEAA@@@A@@B@@@@@B@@A@@@@@@@@@AA@@AA@@@@@A@@AA@@@A@@@@@@@A@@@@A@C@A@@A@CAA@C@A@ABCBCDA@AB@A@@@A@AAA@AA@@@@@A@CB@@@@@BB@@@A@@BA@@@A@CC@A@@A@GD@@AAAD@BDBBDC@@@@@@BFFHHBB@B@@CBFFC@@@BB@@D@B@AB@B@BB@@B@@ABABNFDDHH@@HLFH@@DDDDDDDBD@HB^DA@@D@@@B@@@@@@AF@@@B@@@@@B@@@@@B@B@@@@@BB@@B@BBB@@@B@@@@@@B@@DBB@B@B@@B@@BBD@BBB@@@DBB@@BD@B@@BB@@@@@BB@@BDD@@BD@@B@@@BDBD@@BB@B@@BBBB@@@@@@@BDDBB@@@@@@BB@B@@B@@BB@@BBBBB@@@@@B@@B@@B@@@@BB@@@@@@BB@@B@@B@@B@DD@@B@@@@@BBB@BB@@@@@@B@BBB@@@@@@@@@B@B@@BB@@@@@B@B@BB@@@@@@B@B@B@B@@BB@@@@@@@@@B@D@@B@A@A@A@@BA@C@A@@@@@@@A@@@AAA@@AA@A@AACAEAGAA@CA@@A@@@@@@BC@@BA@C@@BC@@BCBC@@@A@@@A@A@A@BB@@@@@F@D@D@@@AK@C@@@E@@@C@@@@@@@A@@@@@@@C@A@A@A@@@ADE@@DC@A@@B@BAJG"],"encodeOffsets":[[126409,42751]]}}],"UTF8Encoding":true});}));