if (typeof T === 'undefined') require('../setup');

T('cosh', function () {

  function t(n, pr, rm, expected) {
    Decimal.precision = pr;
    Decimal.rounding = rm;
    T.assertEqual(expected, new Decimal(n).cosh().valueOf());
  }

  Decimal.config({
    precision: 40,
    rounding: 4,
    toExpNeg: -9e15,
    toExpPos: 9e15,
    minE: -9e15,
    maxE: 9e15
  });

  t('NaN', 40, 4, 'NaN');
  t('0', 20, 4, '1');
  t('-0', 20, 4, '1');
  t('Infinity', 40, 4, 'Infinity');
  t('-Infinity', 40, 4, 'Infinity');

  t('0.7356369431260767888795717715533948998814', 4, 2, '1.284');
  t('0.32350325607614', 8, 2, '1.0527852');
  t('0.39', 10, 3, '1.077018834');
  t('-0.4085', 1, 3, '1');
  t('-0.8353225329554414512103907831003554564', 10, 1, '1.369646055');
  t('0.822765764301886756212368544717371789849053470184', 1, 2, '2');
  t('-0.608417', 2, 3, '1.1');
  t('-0.3135167132332845', 4, 1, '1.049');
  t('-0.3872949', 5, 6, '1.0759');
  t('-0.69', 5, 2, '1.2477');
  t('-0.6767082617749', 8, 6, '1.2378392');
  t('-0.8808', 8, 5, '1.4136402');
  t('0.49600945701356094984359748395247735156888479861846043140472804537060894678', 6, 5, '1.12556');
  t('0.046', 8, 6, '1.0010582');
  t('0.9873815', 5, 3, '1.5283');
  t('0.8784', 10, 5, '1.411246223');
  t('0.7', 7, 3, '1.255169');
  t('-0.503676971304', 2, 4, '1.1');
  t('-0.52', 9, 0, '1.1382741');
  t('0.335', 5, 3, '1.0566');
  t('0.54503134222707683066822814099005615624557424312284166822346112986570184867578297341372133058', 8, 4, '1.152243');
  t('0.140170026295214447428649742547694034916', 3, 3, '1');
  t('0.9749', 8, 1, '1.514066');
  t('0.45175', 1, 6, '1');
  t('-0.519253467128781061573541633704', 2, 4, '1.1');
  t('-0.406127947', 8, 4, '1.0836098');
  t('0.9879237062663941347586862695316948803970665245072293680153692819868', 1, 6, '2');
  t('0.93872862', 6, 2, '1.47393');
  t('-0.3444', 2, 1, '1');
  t('0.08916117467145186539045806046188938916876705938558151882', 3, 4, '1');
  t('-0.416', 5, 0, '1.0878');
  t('0.96395116729510741473428', 7, 2, '1.50171');
  t('0.99122709843935', 6, 6, '1.53283');
  t('-0.982458257490853554631770530367962387675296749498661808', 4, 2, '1.523');
  t('-0.499', 9, 1, '1.12710543');
  t('0.2', 10, 4, '1.020066756');
  t('0.32898510410686170443107121609290058087988034054', 1, 2, '2');
  t('-0.5054805141', 4, 0, '1.131');
  t('0.905453421072444252766729099661770268735489121', 5, 2, '1.4388');
  t('0.8', 8, 4, '1.3374349');
  t('-0.92256', 9, 6, '1.45661127');
  t('-0.3', 3, 1, '1.04');
  t('-0.8022', 6, 0, '1.3394');
  t('0.280279125313444767164013539810445145153395088331', 9, 6, '1.039536');
  t('0.922', 9, 0, '1.4560184');
  t('-0.3831639', 2, 3, '1');
  t('-0.116822455409380771652804478024770757014', 9, 2, '1.00683151');
  t('-0.6271139128871161107740496', 6, 6, '1.20317');
  t('-0.365006', 6, 4, '1.06736');
  t('0.2851921', 4, 0, '1.041');
  t('0.8341406563142720368', 9, 6, '1.36854088');
  t('0.91', 4, 3, '1.443');
  t('-0.578095765576', 3, 2, '1.18');
  t('-0.5523113', 1, 2, '2');
  t('0.8820775602347211771265107133401152251168847255764663', 3, 1, '1.41');
  t('0.6', 6, 6, '1.18547');
  t('0.9519214874557153045994771268316705218216663716829234702503703405', 4, 4, '1.488');
  t('-0.3218817', 3, 2, '1.06');
  t('0.44351821336668159678862896314345092', 3, 4, '1.1');
  t('0.3049381299213785', 53, 1, '1.0468550263953477301259281776879206575932575051887101');
  t('0.26099', 10, 5, '1.034251653');
  t('-0.144401442746890126', 19, 4, '1.010444017455030066');
  t('-0.5714572371177476181814955346898484074259146899385956872902543373645059', 73, 5, '1.167773824213016730263000463935976580681778400516250742892039174797873742');
  t('-0.86979236712642165283', 49, 1, '1.402726925102945094675128817370785304534247058512');
  t('-0.9152145856049272208', 69, 0, '1.44887088581511840041990778954419353285403899090899859306282037305997');
  t('0.387335806024227799329046192853758455983606', 5, 2, '1.076');
  t('0.388975556466', 66, 5, '1.07660966083264696675091150003451244766269524553188412387790834976');
  t('0.33160669064983873525', 31, 6, '1.055487176550956129534144973298');
  t('-0.28019', 70, 5, '1.039510693535834131464819444254660971197184738177259681537805828091364');
  t('0.0343866155482285230161896002936333091757205795137', 120, 5, '1.0005912779235089895769422420654318600732389756527372429232171774523704748559241986434711131587505267979139253999862614');
  t('-0.75527206899549804249272338314789674457252085843936589751993516463961504230583153756146668708760395655590486810061', 106, 2, '1.29903660802276993760774110068399331119553878155671711944963582837840404664230951744751300716828764841588');
  t('-0.83084942449681844413114311598350904971957', 93, 6, '1.36547331079818409968059488018604532655176218338970363279898668882713647242007579671435739185');
  t('-0.98844124605395210760378949114', 131, 2, '1.5295995535325468391822464280546813045893064120694053640627522765165675183539459515034055077956555297594529493277522750037125717944');
  t('-0.229408429422973', 52, 2, '1.026429721818672220645820449684681483193384767884207');
  t('-0.8795273546479571', 109, 6, '1.412369739179125250038557346407853960447139468646550916478036613726909366980231455652343138412407973670167567');
  t('0.08734', 48, 3, '1.00381656302446278617584212015393654314148839114');
  t('-0.62885554240228925749059660488815716811800585603869', 110, 5, '1.2043323206984141503358874585487300913633309056345327254563876032684247394072689488447245272709777045418471248');
  t('0.736352757166802915869146657898488678037', 144, 5, '1.28358114765511064759744597771942942566178143747193954192893000446178314298730052934993653082205769261457701471805410675980773447720532092970925');
  t('-0.03585', 71, 4, '1.000642680077818347803829459573033542748786958454887675462988399590914');
  t('-0.0688528', 140, 6, '1.0023712906116182102872252559253654170023868298415419690478795554725602053890197559688480320707763057478441774639116768661635006893735054584');
  t('0.0168267352', 5, 2, '1.0002');
  t('-0.29337986744607176495268228205202618529507623296114708105478490669140318050037567584175308798414405821808486964207338344736952978297599188171', 6, 0, '1.04335');
  t('0.86878215121864496587492106526718403062818412998115479876941611922436896770420563647660680761', 75, 0, '1.40173390305230312316107861896321531639504128694271018346467019916830918736');
  t('0.2', 13, 5, '1.020066755619');
  t('0.7186693973416109381775823439368505900019443708610142063266365964635806721', 64, 2, '1.269550877565823873829899249395373137692396168326956113337601496');
  t('-0.6081', 33, 3, '1.19066105804760103593649377284751');
  t('0.33638979922638509091106475953810395641998150066065089020973699789581749159274904445966819915958672238151012655263653519891140163', 56, 0, '1.0571145964853011640156635194135243640222120068086141542');
  t('-0.528693621225218634808351766034027', 14, 0, '1.1430443609004');
  t('-0.143173097658174034133478578859895', 139, 6, '1.01026678782935959075629127133465981817550372382865818357596044596268912805753877412874535411755367732759740274249043367842083642626220661');
  t('0.2', 26, 6, '1.0200667556190758462955038');
  t('-0.888665339961', 143, 6, '1.4215429767257970529790075871798024719315334083688503048535857341028009449476701044589860625229223409387411810670578448660839797632491579578644');
  t('-0.8927373765563130228171556137613812', 76, 4, '1.425668910210701385640797102156834965294078876259114606262240531040574444596');
  t('0.9', 103, 1, '1.433086385448774387841790401624048341627737841305230594247417192533449635356864305114609711796244033432');
  t('-0.833291445811118155331699076307265315671094768698998', 48, 2, '1.36774796193155903463660933986762434999452033326');
  t('-0.7', 66, 6, '1.25516900563094301816467474099029711586260477992884178681185039895');
});