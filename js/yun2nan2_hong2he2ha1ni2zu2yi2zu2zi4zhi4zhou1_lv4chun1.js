(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('绿春县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"532531","properties":{"name":"绿春县","cp":[102.392463,22.993717],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@B@FADADA@A@A@A@AA@AAGAI@C@CAA@EGU[GKOSEECECAEAEAC@GBG@E@CAEACC@C@C@A@AB@@ABAB@@A@CBA@@BABCB@@@DA@@BA@AACBCAAEAC@AACAC@CACAAAGAC@GAI@A@C@AA@@@@A@C@CAC@ABA@ABABABCD@BABA@AB@BABADA@A@AB@BA@ABC@@@ABABA@CD@B@B@DADABABABAB@B@D@F@BAB@DAB@BABA@ABA@@DBBADADAB@FABAD@@@BABABCA@AAAA@@@@@A@A@AACCAAA@CAA@AAC@ABCBABABABE@ACAAABCBAB@@C@A@A@ABABCBABA@ADCDABABABABABCBA@C@ABCBC@A@A@AAC@A@@ACAAAECCCA@A@@CAAA@A@CBA@ABAB@BCBABAB@@A@ABA@A@ABABA@AB@@A@CAA@EBABABA@CBCAAAC@A@A@A@C@AAE@C@ABABA@EBCBC@ABGBA@C@EBABCBCBA@ABABCBCBA@@BC@ABABA@@@ABCBA@@@@BABA@CBC@ABA@A@ABCAABC@@@A@EBA@GBC@ABC@ABGHA@AD@B@BAB@BABABABAB@BAB@BABA@@B@D@BABA@@@ABADADABAD@B@BAD@B@D@BADAF@B@BAB@B@@@D@B@D@B@FABBB@B@B@D@B@D@@BFAD@B@B@B@BABCB@@CBABABCDABABEDADCBABA@ABA@ADABA@ABABCBAB@BAB@BA@@BABADADCBADAB@BA@@BABAB@BABAB@DAB@B@BADABABABABA@ABA@ABC@ABCBA@ABABA@ADABCDABAD@DABC@CBABC@A@A@EBA@CAA@C@CAA@AAA@EDA@C@A@ABABABABC@ABAD@BA@ABCB@BADABABA@CBABCDEBCBCBABC@C@ABC@C@ABC@CAC@AAA@AAA@@ACAAAAA@ACEAEAA@A@AEEAAAAEEC@AAC@ABABA@A@A@A@AAA@CD@BC@CBABA@A@@A@@C@ABADCDEDABA@G@ABCBABABADCFADABCDABCBCBC@ABA@A@A@A@ADC@@DCBADABABAB@@A@CBABCBAD@@AB@BADAD@DADAD@B@BAB@BA@ADCBAB@D@BEDADCBABABADABCBAD@BJJDBB@DBB@D@DDDDDDBD@@BFBBDFFDDBDHBDDBDBBBBBB@D@FAJED@FFBH@HAF@@@BEJBFNLHJ@DABAB@BAD@D@BABAF@@B@@B@DABABADAD@DABCDA@CD@B@BB@BDBBD@HCFBDBJDHNENBN@B@@@BB@@B@@@BB@@@@@@B@@BB@@@@@B@@@@@BBB@@@BB@@B@@B@@@@@@@@BB@@@@B@@@B@@@@@B@@@@A@@@@@A@@B@@@@@@@@BB@@@@@@B@@B@@@@@@B@@@@@B@@BB@@@@@BB@@@@B@@@@@B@@@B@@@B@@@@@B@@@@BB@@@@@B@@@@@B@@@@BB@@@@@B@@@B@@@B@@@@@B@@@B@@@@@B@@@B@B@@BB@@@@@@@@@B@@@@@B@@@@@@BB@@@@@@@B@@@@@B@@BB@@@@AB@@@@A@@@@@@@A@@@@@@@A@@@@@@@@@@BA@@@@@@@A@@@@@@BA@@@A@@@@@@@A@@@@@A@@@@B@@@@@B@@@@@@AB@@@@@@A@@@@@@@@@AA@@@@@@A@@B@@A@@@@B@@@@B@@@@@@@@@B@@@@@@@BB@@@@@@@@@@BB@@A@@@@@@B@@@@@@@B@DBB@B@B@B@B@B@D@H@D@B@@@JBB@D@B@B@@BB@B@DBHB@@@@@@B@@B@@B@@@@BB@@@B@@@B@@@@@B@@@@@@@B@@@@@BB@@@@B@@@BB@@@@@@BB@@@@@B@@@B@@@@@B@@@@@B@@@@B@@@@@@@BA@@@@@@B@@@@AB@@@@@@@@@@A@@@@@@@@@A@@@@@@@@B@@A@@@@@@@@AA@@@@@@@@@@@@B@@@@@@A@@A@@@@@@@@A@@@@@@@@B@@@@@@@@@@@@A@@@@B@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@@AA@@@@@@@A@@@@B@@@@AA@@@@@@@@A@@B@@@@@@@@A@@@@B@@@@@@A@@A@@@@A@@@@@A@@@@B@@A@@@@@@B@@@@@@@B@@@@@@@B@@A@@@@@@@A@@AA@@@@@@A@@A@@@@@@@A@@@@@@@A@@@@@@@A@@@A@E@@BAB@@@DAHCDAR@D@FBFADBD@D@DBB@BBHBD@D@@@BA@@BCBAB@DDBBBB@DDB@BDBDDDBBFBBDBBFBD@DDDB@BDBBB@B@H@HADBBD@FEFCF@DBBPLFFBFAHBF@BBB@FCBEDCBADADAFCFABAF@DABBDDDFDF@DBFDBBBDBBBDDBBBDBBDBD@F@BDF@@DBDBFBBFBBDDDAD@HDB@FBDBDBFDBBDDBBDBDCBEDADCBABCBABCF@D@FBD@D@D@DBDDDBD@D@D@D@B@B@AACAAA@ABC@AAA@ABA@ADAB@D@@@DBDADAB@@@BABA@A@AACCA@A@A@A@A@@F@@AD@D@DCD@BAB@DAD@D@DBD@DDDBD@DBDDBBDDBBDBDBD@DAFAF@DAD@D@FB@CBCBCBAD@D@F@D@D@DBBBBBBDF@DDDFBDBBDDBDDDDBF@FCBCBADCDAD@D@F@BAD@DCD@BADADCFADCDANB\\DNBNAH@HBNFNDN@LBF@DBB@BBBD@F@BHDB@DBD@DDBBBDDDBDBFBB@D@DBFD@BADAFCFAFABABB@@B@@@@BB@@@@@B@@@@@@A@@BA@@@@B@B@@@BA@@@@@AB@@@B@@@B@@@B@@@B@@AB@@@B@@@@AB@@@@BBA@@B@@@@@BA@A@@@@B@@A@ABB@@B@@C@AB@@ABA@A@@B@@@BB@@B@B@@@B@@@B@@@@ABAB@@@@@B@@@@A@@@@B@@@@@B@@AB@@@@B@@@B@@@@B@D@B@@@B@@@@@@A@@@@@@@A@@AA@A@AB@@AB@@@@@@@@@@A@@B@@@HA@@@@@@@@@A@@@ADADAB@@@BB@@@@B@@@B@@AB@@A@A@@BA@@B@@@B@@@BF@@@@@@B@@BB@@@B@@@BAB@@@@B@@@@@@@B@@CD@DA@@@@B@@D@@BBD@@BB@@@@BB@@B@@@BA@@@A@@B@D@B@B@@BB@@@B@@@@AB@@@B@@@B@@@@@B@@@@@@B@@B@B@BA@@@@@A@AB@BAB@BB@@@@@B@@@@@@BB@A@@@@B@@AB@@@B@@@@B@@@@@B@@B@B@@@@@@A@@@AB@B@B@BCB@@A@@@A@@@@AA@@@AB@B@@@B@@@BBB@@@@@@A@@@AA@@@@@B@@@BA@@@AB@@@B@@@@@@BB@@@@B@@BA@@@@@@AA@@@@BA@@B@@@B@@A@@AC@@B@@@@@B@@ABA@@B@@@@@B@@B@@@@BA@@@A@@BA@@BB@@@@@A@@@@@@@@@@BAB@@@BA@A@@B@@@BB@@@@B@DA@AB@@@@A@@@ABAB@BA@@@@@@@@@A@@@@@@@A@@BA@@BA@@B@@@B@@@BBB@B@@@@@@@B@@ABA@@B@@@B@B@@@BAB@@@@A@GBA@AAI@A@ABABABCLENEFADCJEDAB@BABA@CBABABE@CACCACC@GAECAACCAAACACAC@CCAA@A@A@CFCB@DAD@D@FECC@EDCBC@EBC@ECAI@A@C@C@C@G@E@A@I@E@C@A@ABEBAB@@G@C@C@E@E@CAC@E@A@CBCBC@E@C@G@@@E@E@C@CBEAA@EBA@@@C@@@@@A@A@A@@@AAA@AAACEAAAAC@C@AAC@A@@@C@AAA@A@A@ABADA@AFCFAF@DAFBH@DAF@D@DABA@A@ABABADCDAD@BABADADCBA@@BAB@FAH@B@@@D@B@D@D@D@@AFA@ADA@ADA@@D@DAD@DAD@DADADADE@ABA@ABA@A@C@ABEBAB@D@DCDCBCBCBCBCBA@ABCFAD@BABCDABABC@CAC@A@AAC@A@A@A@ABABA@ADCBCDABCF@D@F@D@F@B@DCBAB@DBDADABAD@B@B@BBD@DBBBDBD@B@B@BA@ADE@ABABABABADA@@F@D@FADBFDHDFBDADAFCAA@AACAAAC@CAC@C@CAEAEA@@AAC@A@A@I@A@A@AAAAC@C@C@@BA@ABA@CA@@A@AAA@@CC@A@AAA@@AC@AAA@AAA@A@C@CA@@@A@@@AA@@A@AB@@@@@B@@@@@BA@A@@@A@@@@@@BA@@@@@A@AA@@@@@@A@@D@@AB@@AA@@A@@@@A@@B@@@B@@AA@AA@@@@@A@@@@A@@@AB@@A@@B@A@@@@@AACA@@@A@A@@@AAA@@@ABABA@@@A@AAA@@@A@A@@@AB@@A@C@@@AB@@@@@B@@@@A@@@A@@@@@A@@@AA@@@@@@CDAACA@@@ABCD@@A@ACAAAA@@AA@@EAA@AAAAC@ACACC@A@@@AAAA@AACCAA@AAA@BA@CACECCCACA@@CAC@AAE@ABCBA@CBA@CAE@CC@@CAAAC@C@EAEA@@AAA@ABA@ABEDED@BAB@B@@ABABADCDA@ABA@EAC@ABABCBC@C@I@C@EACAA@@A@I@AAACAGBI@EAECECC@ACAEACCAAE@EAABA@@AC@G@A@A@CB@BEBABEACECGCGEA@ACAC@CBCAE@CCAACAC@CCECEIEIEEACAEACCCCA@AAAAC@A@IFCBGBE@CCECA@@ACAAA@C@ABCFKBEBGHIDADEB@@ABABC@CFEFCHE@@D@"],"encodeOffsets":[[104871,23184]]}}],"UTF8Encoding":true});}));