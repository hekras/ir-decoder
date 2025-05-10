/**
 *
 * @author Henryk Krasuski aka oldhandmixer
 * Flock of dots
 *
 */

const data0 = [{"x":0,"y":0},{"x":1504,"y":1},{"x":2133,"y":0},{"x":2363,"y":1},{"x":3414,"y":0},{"x":4062,"y":1},{"x":5121,"y":0},{"x":5771,"y":1},{"x":6829,"y":0},{"x":7060,"y":1},{"x":7683,"y":0},{"x":7914,"y":1},{"x":8536,"y":0},{"x":8766,"y":1},{"x":9389,"y":0},{"x":9621,"y":1},{"x":10243,"y":0},{"x":10890,"y":1},{"x":13051,"y":0},{"x":14555,"y":1},{"x":15614,"y":0},{"x":16261,"y":1},{"x":16893,"y":0},{"x":17122,"y":1},{"x":18174,"y":0},{"x":18821,"y":1},{"x":19881,"y":0},{"x":20113,"y":1},{"x":20735,"y":0},{"x":20967,"y":1},{"x":21589,"y":0},{"x":21822,"y":1},{"x":22442,"y":0},{"x":23085,"y":1},{"x":24149,"y":0},{"x":24380,"y":1},{"x":26093,"y":0},{"x":27592,"y":1},{"x":28655,"y":0},{"x":28884,"y":1},{"x":29509,"y":0},{"x":29765,"y":1},{"x":30363,"y":0},{"x":30589,"y":1},{"x":31216,"y":0},{"x":31864,"y":1},{"x":32923,"y":0},{"x":33152,"y":1},{"x":33777,"y":0},{"x":34033,"y":1},{"x":34631,"y":0},{"x":34862,"y":1},{"x":35487,"y":0},{"x":36129,"y":1},{"x":36764,"y":0},{"x":37018,"y":1},{"x":39140,"y":0},{"x":40641,"y":1},{"x":41702,"y":0},{"x":41924,"y":1},{"x":42555,"y":0},{"x":42813,"y":1},{"x":43409,"y":0},{"x":43635,"y":1},{"x":44262,"y":0},{"x":44913,"y":1},{"x":45970,"y":0},{"x":46190,"y":1},{"x":46823,"y":0},{"x":47077,"y":1},{"x":47677,"y":0},{"x":48347,"y":1},{"x":49384,"y":0},{"x":49605,"y":1},{"x":50237,"y":0},{"x":50493,"y":1},{"x":52181,"y":0},{"x":53709,"y":1},{"x":54743,"y":0},{"x":55415,"y":1},{"x":56023,"y":0},{"x":56246,"y":1},{"x":57303,"y":0},{"x":57977,"y":1},{"x":59011,"y":0},{"x":59230,"y":1},{"x":59865,"y":0},{"x":60110,"y":1},{"x":60718,"y":0},{"x":61390,"y":1},{"x":62426,"y":0},{"x":63101,"y":1},{"x":65231,"y":0},{"x":66331,"y":1},{"x":66940,"y":0},{"x":67611,"y":1},{"x":68220,"y":0},{"x":68468,"y":1},{"x":69500,"y":0},{"x":69719,"y":1},{"x":70354,"y":0},{"x":70601,"y":1},{"x":71208,"y":0},{"x":71427,"y":1},{"x":72060,"y":0},{"x":72307,"y":1},{"x":72915,"y":0},{"x":73133,"y":1},{"x":73768,"y":0},{"x":74439,"y":1},{"x":75476,"y":0},{"x":75693,"y":1},{"x":76330,"y":0},{"x":76575,"y":1}];
const dataCRSP = [{"x":0,"y":0},{"x":1533,"y":1},{"x":2561,"y":0},{"x":2789,"y":1},{"x":3415,"y":0},{"x":3642,"y":1},{"x":4268,"y":0},{"x":4495,"y":1},{"x":5122,"y":0},{"x":5776,"y":1},{"x":6829,"y":0},{"x":7058,"y":1},{"x":7683,"y":0},{"x":7911,"y":1},{"x":8536,"y":0},{"x":8765,"y":1},{"x":9390,"y":0},{"x":10070,"y":1},{"x":10672,"y":0},{"x":10899,"y":1},{"x":13043,"y":0},{"x":14124,"y":1},{"x":14754,"y":0},{"x":14979,"y":1},{"x":15605,"y":0},{"x":15832,"y":1},{"x":16458,"y":0},{"x":17112,"y":1},{"x":18169,"y":0},{"x":18820,"y":1},{"x":19873,"y":0},{"x":20527,"y":1},{"x":21581,"y":0},{"x":21809,"y":1},{"x":22434,"y":0},{"x":23113,"y":1},{"x":24141,"y":0},{"x":24369,"y":1},{"x":26089,"y":0},{"x":27172,"y":1},{"x":27796,"y":0},{"x":28478,"y":1},{"x":29503,"y":0},{"x":29731,"y":1},{"x":30357,"y":0},{"x":30585,"y":1},{"x":31211,"y":0},{"x":31864,"y":1},{"x":32918,"y":0},{"x":33171,"y":1},{"x":33772,"y":0},{"x":34427,"y":1},{"x":35479,"y":0},{"x":35707,"y":1},{"x":36332,"y":0},{"x":36986,"y":1},{"x":39135,"y":0},{"x":40216,"y":1},{"x":40842,"y":0},{"x":41070,"y":1},{"x":41696,"y":0},{"x":42350,"y":1},{"x":43404,"y":0},{"x":43631,"y":1},{"x":44257,"y":0},{"x":44911,"y":1},{"x":45964,"y":0},{"x":46618,"y":1},{"x":47672,"y":0},{"x":47900,"y":1},{"x":48526,"y":0},{"x":49179,"y":1},{"x":49805,"y":0},{"x":50033,"y":1},{"x":52183,"y":0},{"x":53260,"y":1},{"x":53888,"y":0},{"x":54542,"y":1},{"x":55595,"y":0},{"x":55821,"y":1},{"x":56448,"y":0},{"x":56676,"y":1},{"x":57302,"y":0},{"x":57955,"y":1},{"x":59009,"y":0},{"x":59663,"y":1},{"x":60716,"y":0},{"x":60944,"y":1},{"x":61570,"y":0},{"x":61797,"y":1},{"x":62424,"y":0},{"x":62651,"y":1},{"x":63278,"y":0},{"x":63505,"y":1},{"x":65229,"y":0},{"x":66309,"y":1},{"x":66937,"y":0},{"x":67594,"y":1},{"x":68217,"y":0},{"x":68444,"y":1},{"x":69497,"y":0},{"x":69726,"y":1},{"x":70352,"y":0},{"x":70580,"y":1},{"x":71206,"y":0},{"x":71433,"y":1},{"x":72059,"y":0},{"x":72287,"y":1},{"x":72914,"y":0},{"x":73141,"y":1},{"x":73768,"y":0},{"x":74420,"y":1},{"x":75474,"y":0},{"x":75700,"y":1},{"x":76328,"y":0},{"x":76555,"y":1}];
const dataOLDHANDMIXER = [{"x":0,"y":0},{"x":1081,"y":1},{"x":1706,"y":0},{"x":2364,"y":1},{"x":2986,"y":0},{"x":3215,"y":1},{"x":3840,"y":0},{"x":4068,"y":1},{"x":5120,"y":0},{"x":5774,"y":1},{"x":6828,"y":0},{"x":7057,"y":1},{"x":7682,"y":0},{"x":8337,"y":1},{"x":8964,"y":0},{"x":9191,"y":1},{"x":9815,"y":0},{"x":10044,"y":1},{"x":10669,"y":0},{"x":10898,"y":1},{"x":13046,"y":0},{"x":14126,"y":1},{"x":14752,"y":0},{"x":15008,"y":1},{"x":15606,"y":0},{"x":15834,"y":1},{"x":16460,"y":0},{"x":17142,"y":1},{"x":18170,"y":0},{"x":18822,"y":1},{"x":19875,"y":0},{"x":20102,"y":1},{"x":20729,"y":0},{"x":21383,"y":1},{"x":22008,"y":0},{"x":22237,"y":1},{"x":23289,"y":0},{"x":23517,"y":1},{"x":24142,"y":0},{"x":24370,"y":1},{"x":26092,"y":0},{"x":27600,"y":1},{"x":28653,"y":0},{"x":28907,"y":1},{"x":29506,"y":0},{"x":29735,"y":1},{"x":30361,"y":0},{"x":30589,"y":1},{"x":31214,"y":0},{"x":31898,"y":1},{"x":32921,"y":0},{"x":33150,"y":1},{"x":33775,"y":0},{"x":34030,"y":1},{"x":34629,"y":0},{"x":35312,"y":1},{"x":36335,"y":0},{"x":36564,"y":1},{"x":37190,"y":0},{"x":37418,"y":1},{"x":39134,"y":0},{"x":40243,"y":1},{"x":40841,"y":0},{"x":41525,"y":1},{"x":42121,"y":0},{"x":42349,"y":1},{"x":42974,"y":0},{"x":43230,"y":1},{"x":44256,"y":0},{"x":44909,"y":1},{"x":45962,"y":0},{"x":46217,"y":1},{"x":46816,"y":0},{"x":47495,"y":1},{"x":48522,"y":0},{"x":48751,"y":1},{"x":49377,"y":0},{"x":49609,"y":1},{"x":50230,"y":0},{"x":50459,"y":1},{"x":52182,"y":0},{"x":53690,"y":1},{"x":54316,"y":0},{"x":54544,"y":1},{"x":55599,"y":0},{"x":56252,"y":1},{"x":57304,"y":0},{"x":57984,"y":1},{"x":59012,"y":0},{"x":59239,"y":1},{"x":59865,"y":0},{"x":60094,"y":1},{"x":60718,"y":0},{"x":60974,"y":1},{"x":61573,"y":0},{"x":61802,"y":1},{"x":62426,"y":0},{"x":63081,"y":1},{"x":65225,"y":0},{"x":66330,"y":1},{"x":66931,"y":0},{"x":67613,"y":1},{"x":68639,"y":0},{"x":68867,"y":1},{"x":69494,"y":0},{"x":69748,"y":1},{"x":70346,"y":0},{"x":71031,"y":1},{"x":72053,"y":0},{"x":72311,"y":1},{"x":72907,"y":0},{"x":73563,"y":1},{"x":74187,"y":0},{"x":74444,"y":1},{"x":75041,"y":0},
                          {"x":75295,"y":1},{"x":76322,"y":0},{"x":76578,"y":1},{"x":78270,"y":0},{"x":79806,"y":1},{"x":80831,"y":0},{"x":81060,"y":1},{"x":81685,"y":0},{"x":81941,"y":1},{"x":82538,"y":0},{"x":82796,"y":1},{"x":83392,"y":0},{"x":84077,"y":1},{"x":85099,"y":0},{"x":85355,"y":1},{"x":85953,"y":0},{"x":86208,"y":1},{"x":86807,"y":0},{"x":87482,"y":1},{"x":88513,"y":0},{"x":88773,"y":1},{"x":89367,"y":0},{"x":89625,"y":1},{"x":91315,"y":0},{"x":92425,"y":1},{"x":93022,"y":0},{"x":93280,"y":1},{"x":93876,"y":0},{"x":94560,"y":1},{"x":95583,"y":0},{"x":95841,"y":1},{"x":96437,"y":0},{"x":97121,"y":1},{"x":98144,"y":0},{"x":98401,"y":1},{"x":98998,"y":0},{"x":99681,"y":1},{"x":100278,"y":0},{"x":100537,"y":1},{"x":101559,"y":0},{"x":102244,"y":1},{"x":104354,"y":0},{"x":105492,"y":1},{"x":106062,"y":0},{"x":106744,"y":1},{"x":107769,"y":0},{"x":108026,"y":1},{"x":108623,"y":0},{"x":108879,"y":1},{"x":109477,"y":0},{"x":110159,"y":1},{"x":111184,"y":0},{"x":111440,"y":1},{"x":112038,"y":0},{"x":112721,"y":1},{"x":113745,"y":0},{"x":113999,"y":1},{"x":114598,"y":0},{"x":115282,"y":1},{"x":117394,"y":0},{"x":118953,"y":1},{"x":119527,"y":0},{"x":119781,"y":1},{"x":120808,"y":0},{"x":121489,"y":1},{"x":122516,"y":0},{"x":123195,"y":1},{"x":124223,"y":0},{"x":124903,"y":1},{"x":125503,"y":0},{"x":125753,"y":1},{"x":126784,"y":0},{"x":127032,"y":1},{"x":127637,"y":0},{"x":127887,"y":1},{"x":128491,"y":0},{"x":128740,"y":1},{"x":130448,"y":0},{"x":131979,"y":1},{"x":133010,"y":0},{"x":133685,"y":1},{"x":134290,"y":0},{"x":134562,"y":1},{"x":135571,"y":0},{"x":136246,"y":1},{"x":137279,"y":0},{"x":137549,"y":1},{"x":138132,"y":0},{"x":138403,"y":1},{"x":138985,"y":0},{"x":139684,"y":1},{"x":140693,"y":0},{"x":141390,"y":1},{"x":143489,"y":0},{"x":144614,"y":1},{"x":145194,"y":0},{"x":145461,"y":1},{"x":146053,"y":0},{"x":146319,"y":1},{"x":146906,"y":0},{"x":147600,"y":1},{"x":148611,"y":0},{"x":149307,"y":1},{"x":150319,"y":0},{"x":151013,"y":1},{"x":152025,"y":0},{"x":152290,"y":1},{"x":152879,"y":0},{"x":153573,"y":1},{"x":154586,"y":0},
                          {"x":154849,"y":1},{"x":156562,"y":0},{"x":157651,"y":1},{"x":158241,"y":0},{"x":158929,"y":1},{"x":159520,"y":0},{"x":159756,"y":1},{"x":160800,"y":0},{"x":161037,"y":1},{"x":161653,"y":0},{"x":161890,"y":1},{"x":162508,"y":0},{"x":162746,"y":1},{"x":163361,"y":0},{"x":163598,"y":1},{"x":164215,"y":0},{"x":164452,"y":1},{"x":165069,"y":0},{"x":165733,"y":1},{"x":166775,"y":0},{"x":167012,"y":1},{"x":167629,"y":0},{"x":167867,"y":1}]
const data3 = [{"x":0,"y":0},{"x":1127,"y":1},{"x":1706,"y":0},{"x":2432,"y":1},{"x":3414,"y":0},{"x":3718,"y":1},{"x":4267,"y":0},{"x":4567,"y":1},{"x":5121,"y":0},{"x":5851,"y":1},{"x":6828,"y":0},{"x":7128,"y":1},{"x":7682,"y":0},{"x":8408,"y":1},{"x":8963,"y":0},{"x":9235,"y":1},{"x":9815,"y":0},{"x":10122,"y":1},{"x":11096,"y":0},{"x":11396,"y":1},{"x":13047,"y":0},{"x":14174,"y":1},{"x":14755,"y":0},{"x":15447,"y":1},{"x":16035,"y":0},{"x":16333,"y":1},{"x":17316,"y":0},{"x":17587,"y":1},{"x":18170,"y":0},{"x":18443,"y":1},{"x":19023,"y":0},{"x":19321,"y":1},{"x":19877,"y":0},{"x":20175,"y":1},{"x":20731,"y":0},{"x":21028,"y":1},{"x":21584,"y":0},{"x":22276,"y":1},{"x":23292,"y":0},{"x":23562,"y":1},{"x":24145,"y":0},{"x":24415,"y":1}]
const dataASSEMBLY_25 = [{"x":0,"y":0},{"x":1508,"y":1},{"x":2133,"y":0},{"x":2360,"y":1},{"x":3414,"y":0},{"x":4069,"y":1},{"x":5122,"y":0},{"x":5804,"y":1},{"x":6830,"y":0},{"x":7085,"y":1},{"x":7683,"y":0},{"x":7910,"y":1},{"x":8537,"y":0},{"x":8792,"y":1},{"x":9391,"y":0},{"x":9618,"y":1},{"x":10245,"y":0},{"x":10899,"y":1},{"x":13043,"y":0},{"x":14152,"y":1},{"x":14752,"y":0},{"x":15006,"y":1},{"x":15606,"y":0},{"x":16260,"y":1},{"x":17313,"y":0},{"x":17566,"y":1},{"x":18167,"y":0},{"x":18847,"y":1},{"x":19875,"y":0},{"x":20555,"y":1},{"x":21582,"y":0},{"x":21836,"y":1},{"x":22436,"y":0},{"x":23116,"y":1},{"x":23716,"y":0},{"x":23973,"y":1},{"x":26091,"y":0},{"x":27200,"y":1},{"x":27802,"y":0},{"x":28056,"y":1},{"x":28653,"y":0},{"x":29335,"y":1},{"x":30363,"y":0},{"x":30613,"y":1},{"x":31214,"y":0},{"x":31892,"y":1},{"x":32921,"y":0},{"x":33605,"y":1},{"x":34629,"y":0},{"x":34885,"y":1},{"x":35484,"y":0},{"x":36162,"y":1},{"x":36763,"y":0},{"x":37017,"y":1},{"x":39135,"y":0},{"x":40670,"y":1},{"x":41693,"y":0},{"x":42378,"y":1},{"x":42977,"y":0},{"x":43230,"y":1},{"x":44258,"y":0},{"x":44942,"y":1},{"x":45966,"y":0},{"x":46217,"y":1},{"x":46819,"y":0},{"x":47071,"y":1},{"x":47674,"y":0},{"x":48352,"y":1},{"x":49382,"y":0},{"x":50061,"y":1},{"x":52182,"y":0},{"x":53290,"y":1},{"x":53891,"y":0},{"x":54142,"y":1},{"x":54744,"y":0},{"x":55422,"y":1},{"x":56450,"y":0},{"x":56700,"y":1},{"x":57305,"y":0},{"x":57982,"y":1},{"x":59013,"y":0},{"x":59261,"y":1},{"x":59867,"y":0},{"x":60543,"y":1},{"x":61147,"y":0},{"x":61396,"y":1},{"x":62428,"y":0},{"x":63104,"y":1},{"x":65231,"y":0},{"x":66761,"y":1},{"x":67793,"y":0},{"x":68468,"y":1},{"x":69073,"y":0},{"x":69345,"y":1},{"x":70355,"y":0},{"x":71029,"y":1},{"x":72063,"y":0},{"x":72332,"y":1},{"x":72917,"y":0},{"x":73185,"y":1},{"x":73771,"y":0},{"x":74040,"y":1},{"x":74624,"y":0},{"x":75320,"y":1},{"x":76332,"y":0},{"x":76600,"y":1},{"x":78287,"y":0},{"x":79410,"y":1},{"x":79997,"y":0},{"x":80262,"y":1},{"x":80851,"y":0},{"x":81115,"y":1},{"x":81705,"y":0},{"x":82398,"y":1},{"x":83410,"y":0},
                      {"x":84105,"y":1},{"x":85118,"y":0},{"x":85382,"y":1},{"x":85974,"y":0},{"x":86665,"y":1},{"x":87256,"y":0},{"x":87491,"y":1},{"x":88533,"y":0},{"x":88771,"y":1},{"x":89387,"y":0},{"x":89626,"y":1},{"x":91334,"y":0},{"x":92854,"y":1},{"x":93469,"y":0},{"x":93706,"y":1},{"x":94322,"y":0},{"x":94559,"y":1},{"x":95604,"y":0},{"x":95844,"y":1},{"x":96457,"y":0},{"x":97122,"y":1},{"x":98165,"y":0},{"x":98827,"y":1},{"x":99445,"y":0},{"x":99682,"y":1},{"x":100727,"y":0},{"x":100967,"y":1},{"x":101580,"y":0},{"x":102243,"y":1},{"x":104384,"y":0},{"x":105902,"y":1},{"x":106519,"y":0},{"x":106758,"y":1},{"x":107803,"y":0},{"x":108038,"y":1},{"x":108653,"y":0},{"x":108893,"y":1},{"x":109508,"y":0},{"x":109746,"y":1},{"x":110361,"y":0},{"x":111025,"y":1},{"x":112068,"y":0},{"x":112307,"y":1},{"x":112923,"y":0},{"x":113160,"y":1},{"x":113777,"y":0},{"x":114014,"y":1},{"x":114630,"y":0},{"x":114867,"y":1},{"x":115484,"y":0},{"x":115719,"y":1},{"x":117427,"y":0},{"x":118518,"y":1},{"x":119136,"y":0},{"x":119372,"y":1},{"x":119990,"y":0},{"x":120653,"y":1},{"x":121271,"y":0},{"x":121506,"y":1},{"x":122552,"y":0},{"x":122787,"y":1},{"x":123405,"y":0},{"x":124068,"y":1},{"x":124686,"y":0},{"x":124925,"y":1},{"x":125968,"y":0},{"x":126207,"y":1},{"x":126822,"y":0},{"x":127484,"y":1},{"x":128529,"y":0},{"x":128769,"y":1},{"x":130473,"y":0},{"x":131566,"y":1},{"x":132181,"y":0},{"x":132422,"y":1},{"x":133035,"y":0},{"x":133702,"y":1},{"x":134315,"y":0},{"x":134556,"y":1},{"x":135597,"y":0},{"x":135836,"y":1},{"x":136451,"y":0},{"x":137118,"y":1},{"x":137732,"y":0},{"x":137968,"y":1},{"x":139013,"y":0},{"x":139703,"y":1},{"x":140721,"y":0},{"x":141386,"y":1},{"x":143523,"y":0},{"x":144613,"y":1},{"x":145233,"y":0},{"x":145892,"y":1},{"x":146512,"y":0},{"x":146715,"y":1},{"x":147817,"y":0},{"x":147996,"y":1},{"x":148650,"y":0},{"x":148876,"y":1},{"x":149525,"y":0},{"x":149732,"y":1},{"x":150381,"y":0},{"x":150590,"y":1},{"x":151233,"y":0},{"x":151448,"y":1},{"x":152086,"y":0},{"x":152718,"y":1},{"x":153794,"y":0},{"x":154005,"y":1},{"x":154648,"y":0},{"x":154855,"y":1}]
const dataNOISE = [{"x":0,"y":0},{"x":1080,"y":1},{"x":1704,"y":0},{"x":2362,"y":1},{"x":3412,"y":0},{"x":3668,"y":1},{"x":4266,"y":0},{"x":4522,"y":1},{"x":5120,"y":0},{"x":5804,"y":1},{"x":6827,"y":0},{"x":7083,"y":1},{"x":7681,"y":0},{"x":8339,"y":1},{"x":8962,"y":0},{"x":9191,"y":1},{"x":9815,"y":0},{"x":10045,"y":1},{"x":11097,"y":0},{"x":11326,"y":1},{"x":13038,"y":0},{"x":14149,"y":1},{"x":14746,"y":0},{"x":15429,"y":1},{"x":16027,"y":0},{"x":16280,"y":1},{"x":16881,"y":0},{"x":17135,"y":1},{"x":18162,"y":0},{"x":18844,"y":1},{"x":19870,"y":0},{"x":20098,"y":1},{"x":20724,"y":0},{"x":21404,"y":1},{"x":22004,"y":0},{"x":22261,"y":1},{"x":22857,"y":0},{"x":23086,"y":1},{"x":23712,"y":0},{"x":23967,"y":1},{"x":26107,"y":0},{"x":27216,"y":1},{"x":27815,"y":0},{"x":28495,"y":1},{"x":29523,"y":0},{"x":29778,"y":1},{"x":30377,"y":0},{"x":30634,"y":1},{"x":31230,"y":0},{"x":31913,"y":1},{"x":32939,"y":0},{"x":33168,"y":1},{"x":33793,"y":0},{"x":34476,"y":1},{"x":35500,"y":0},{"x":35753,"y":1},{"x":36354,"y":0},{"x":37034,"y":1},{"x":39154,"y":0},{"x":40266,"y":1},{"x":40861,"y":0},{"x":41117,"y":1},{"x":41715,"y":0},{"x":42401,"y":1},{"x":43423,"y":0},{"x":43679,"y":1},{"x":44277,"y":0},{"x":44961,"y":1},{"x":45985,"y":0},{"x":46670,"y":1},{"x":47694,"y":0},{"x":47976,"y":1},{"x":48547,"y":0},{"x":49233,"y":1},{"x":49827,"y":0},{"x":50085,"y":1},{"x":52196,"y":0},{"x":53762,"y":1},{"x":54759,"y":0},{"x":55444,"y":1},{"x":56039,"y":0},{"x":56298,"y":1},{"x":57320,"y":0},{"x":58006,"y":1},{"x":59028,"y":0},{"x":59312,"y":1},{"x":59882,"y":0},{"x":60140,"y":1},{"x":60736,"y":0},{"x":61423,"y":1},{"x":62443,"y":0},{"x":63127,"y":1},{"x":65241,"y":0},{"x":66354,"y":1},{"x":66949,"y":0},{"x":67659,"y":1},{"x":68229,"y":0},{"x":68488,"y":1},{"x":69510,"y":0},{"x":69767,"y":1},{"x":70364,"y":0},{"x":70623,"y":1},{"x":71217,"y":0},{"x":71475,"y":1},{"x":72072,"y":0},{"x":72354,"y":1},{"x":72926,"y":0},{"x":73183,"y":1},{"x":73780,"y":0},{"x":74489,"y":1},{"x":75486,"y":0},{"x":75744,"y":1},{"x":76341,"y":0},{"x":76597,"y":1}]
const rawdata = [{"x":0,"y":0},{"x":1532,"y":1},{"x":2133,"y":0},{"x":2363,"y":1},{"x":3414,"y":0},{"x":4096,"y":1},{"x":5121,"y":0},{"x":5802,"y":1},{"x":6829,"y":0},{"x":7083,"y":1},{"x":7683,"y":0},{"x":7936,"y":1},{"x":8536,"y":0},{"x":8791,"y":1},{"x":9390,"y":0},{"x":9621,"y":1},{"x":10244,"y":0},{"x":10901,"y":1},{"x":13045,"y":0},{"x":14153,"y":1},{"x":14754,"y":0},{"x":15435,"y":1},{"x":16034,"y":0},{"x":16289,"y":1},{"x":17315,"y":0},{"x":17572,"y":1},{"x":18169,"y":0},{"x":18407,"y":1},{"x":19019,"y":0},{"x":19275,"y":1},{"x":19877,"y":0},{"x":20107,"y":1},{"x":20730,"y":0},{"x":20960,"y":1},{"x":21584,"y":0},{"x":22268,"y":1},{"x":23291,"y":0},{"x":23547,"y":1},{"x":24145,"y":0},{"x":24375,"y":1}]

const capturequeue = [data0, data3, dataASSEMBLY_25, rawdata, dataOLDHANDMIXER, dataNOISE];
let captureindex = 0;


var mouse = {x:0, y:0, down:false};

// ======================================================
// ======================================================
class PVector {

    constructor(x_, y_) {
        this.x = x_;
        this.y = y_;
    }

    static sub(v, u) {
        return new PVector(v.x - u.x, v.y - u.y);
    }

    add(v) {
        this.x += v.x;
        this.y += v.y;
    }

    mult(f) {
        this.x *= f;
        this.y *= f;
    }

    set(x_, y_) {
        this.x = x_;
        this.y = y_;
    }

    mag() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    div(n) {
        this.x /= n;
        this.y /= n;
    }

    normalize() {
        var m = this.mag();
        if (m != 0) {
            this.div(m);
        }
    }

    angle() {
        var ang = (Math.asin(this.y) < 0) ? Math.PI / 2 - Math.acos(this.x) + Math.PI : Math.PI / 2 + Math.acos(this.x) + Math.PI;
        return ang;
    }

    static random2D() {
        var angle = 2 * Math.PI * Math.random();
        return (new PVector(Math.cos(angle), Math.sin(angle)));
    }

    static direction(angle) {
        return (new PVector(Math.cos(angle), Math.sin(angle)));
    }

    dist(p) {
        var dx = this.x - p.x;
        var dy = this.y - p.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    limit(max) {
        if (this.mag() > max) {
            this.normalize();
            this.mult(max);
        }
    }
}
// ======================================================
// ======================================================
class Dot {
    constructor(x, y, vel, maxSpeed) {
        this.pos = new PVector(x, y);
        this.vel = vel;
        this.maxSpeed = maxSpeed;
        this.counter = 50 + 100 * Math.random();
    }

    update() {
        this.pos.add(this.vel);
        this.counter--;
    }

    show(dc) {
        dc.beginPath();
        let r = this.counter / 10;
        r = (r < 0) ? 0 : r;
        dc.arc(this.pos.x, this.pos.y, r, 0, 2 * Math.PI);
        dc.fill();
    }
}
// ======================================================
// Viewport Class for statistic data
// ======================================================
class PViewportStatic {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.xmax = 2500
        this.graph = []
        this.triggers = [
            {key:"A", level:0, t1:100, t2:450},
            {key:"B", level:1, t1:50, t2:800},
            {key:"C", level:0, t1:550, t2:850},
            {key:"D", level:1, t1:950, t2:1300},
            {key:"START", level:0, t1:1000, t2:2490},
            {key:"STOP", level:1, t1:1600, t2:2490},
        ];
        this.calculateTriggers();
        this.hover1 = null; // hover1 is the trigger that is currently being hovered over t1
        this.hover2 = null; // hover2 is the trigger that is currently being hovered over t2
        this.hover3 = null; // hover3 is the trigger that is currently being hovered over rectangle
    }

    set(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        const dx = this.w / 25;
        for (var i = 0; i < 250; i++){
            this.graph[i].x = this.x+i*dx;
            this.graph[i].w = dx;
        }        
        this.calculateTriggers();
    }

    moveMouse(mousex, mousey) {
        this.cursorx = mousex;
        this.cursory = mousey;  
        if (this.cursorx < 30) this.cursorx = 30;
        else if (this.cursorx > this.x+this.w) this.cursorx = this.x+this.w;
    }

    dragMouse(mousex, mousey) {
        this.moveMouse(mousex, mousey);
        if (this.hover1 != null){
            this.hover1.t1 = Math.floor((this.cursorx-30) * this.xmax / this.w);
            if (this.hover1.t1 < 0) this.hover1.t1 = 0;
            if (this.hover1.t1 > this.hover1.t2-20) this.hover1.t1 = this.hover1.t2-20;
        }
        else if (this.hover2 != null){
            this.hover2.t2 = Math.floor((this.cursorx-30) * this.xmax / this.w);
            if (this.hover2.t2 > this.xmax) this.hover1.t2 = this.xmax;
            if (this.hover2.t2 < this.hover2.t1+20) this.hover1.t2 = this.hover1.t1+20;
        }
        this.calculateTriggers();
    }

    calculateTriggers(){
        this.hover1 = this.hover2 = this.hover3 = null;
        this.triggers.forEach((t) => {
            t.x1 = this.x + t.t1 * this.w / this.xmax;
            t.x2 = this.x + t.t2 * this.w / this.xmax;
            t.y = (t.level == 0) ? this.y + this.h/2+10 : this.y + 20;
            const y2 = t.y + this.h/2 - 30;
            const insideY = (this.cursory > t.y) && (this.cursory < y2);
            if ((Math.abs(this.cursorx - t.x1) < 10)&&(insideY)) this.hover1 = t;
            if ((Math.abs(this.cursorx - t.x2) < 10)&&(insideY)) this.hover2 = t;
            if ((this.cursorx > t.x1) && (this.cursorx < t.x2) && (insideY)) this.hover3 = t;
        });
    }

    calculateGraph(){
        this.graph.forEach((s) => {
            s.h = (s.high < this.h/2) ? s.high : this.h/2;
            s.l = (s.low < this.h/2) ? s.low : this.h/2;
        });
    }

    calculate(data){
        this.graph = [];
        const dx = this.w / 250;
        const dt = this.xmax / 250;
        for (var i = 0; i < 250; i++){
            this.graph.push({
              t1: dt*i,
              t2: dt*(i+1),
              x: this.x + i*dx,
              w: dx,
              low: 0,
              high:0
            });
        }        
        for (var i = 0; i < data.length-1; i++){
            const dt = data[i+1].x - data[i].x;
            const slot = this.graph.findIndex((s) => dt >= s.t1 && dt < s.t2);
            if (slot >= 0){
              if (data[i].y == 0) this.graph[slot].low++;
              else this.graph[slot].high++;
            }
        }

        var newGraph = [];
        for (var i = 0; i < this.graph.length; i++){
            if (this.graph[i].high > 0 || this.graph[i].low > 0){
                newGraph.push(this.graph[i]);
            }
        }
        this.graph = newGraph;

        this.graph.forEach((s) => {
            s.high = s.high*100;
            s.low = s.low*100;
        });

        for (var i = 0; i < data.length-1; i++){
            const dt = data[i+1].x - data[i].x;
            const trigger = this.triggers.find((t) => dt >= t.t1 && dt < t.t2 && data[i].y == t.level);
            if (trigger != null){
              data[i].key = trigger.key;  
            }
            else{
              data[i].key = "NOISE";  
            }
          }
          data[data.length - 1].key = "STOP";
        
        
        this.calculateGraph();
    }

    render(dc) {
        dc.strokeStyle = "white";

        // trigger areas
        dc.fillStyle = "purple";
        this.triggers.forEach((t) => {
            dc.fillRect(t.x1, t.y, t.x2-t.x1, this.h/2-30);
        });
        this.calculateTriggers()
        if (this.hover3 != null){
            dc.fillStyle = "brown"
            dc.fillRect(this.hover3.x1, this.hover3.y, this.hover3.x2-this.hover3.x1, this.h/2-30);
        }

        // static graph
        this.graph.forEach((s) => {
            dc.fillStyle = "green";
            dc.fillRect(s.x, this.y + this.h/2 - s.h, s.w, s.h);
            dc.fillStyle = "red";
            dc.fillRect(s.x, this.y + this.h/2, s.w, s.l);
        });

        // trigger labels
        dc.fillStyle = "pink";
        dc.font = "16px Arial";
        this.triggers.forEach((t) => {
            dc.fillText(t.key, t.x1 + 20, t.y + 20);
        });

        // trigger border lines
        dc.strokeStyle = "red"; 
        dc.lineWidth = 14;
        this.triggers.forEach((t) => {
            dc.beginPath();
            dc.moveTo(t.x1, t.y);
            dc.lineTo(t.x1, t.y + this.h/2 - 30);
            dc.stroke();
            dc.beginPath();
            dc.moveTo(t.x2, t.y);
            dc.lineTo(t.x2, t.y + this.h/2 - 30);
            dc.stroke();
        });
        if (this.hover1 != null){
            dc.strokeStyle = "yellow";   
            dc.beginPath();
            dc.moveTo(this.hover1.x1, this.hover1.y);
            dc.lineTo(this.hover1.x1, this.hover1.y + this.h/2 - 30);
            dc.stroke();
        }
        if (this.hover2 != null){
            dc.strokeStyle = "yellow";   
            dc.beginPath();
            dc.moveTo(this.hover2.x2, this.hover2.y);
            dc.lineTo(this.hover2.x2, this.hover2.y + this.h/2 - 30);
            dc.stroke();
        }

        // x axis
        dc.lineWidth = 1;
        const dx = this.w / 25;
        const dt = this.xmax / 25;
        let graphx = dt;
        dc.strokeStyle = "white";
        dc.fillStyle = "lightgreen";
        dc.font = "16px Arial";
        dc.beginPath();
        dc.moveTo(this.x, this.y + this.h/2);
        dc.lineTo(this.x + this.w, this.y + this.h/2);
        dc.stroke();
        for (var i = dx; i < this.w-dx; i += dx){
            dc.beginPath();
            dc.moveTo(this.x + i, this.y+this.h/2 - 5);
            dc.lineTo(this.x + i, this.y+this.h/2 + 5);
            dc.stroke();

            const text = "" + Math.floor(graphx); 
            const textWidth = dc.measureText(text).width;
            dc.fillText(text, this.x + i - textWidth/2, this.y + this.h/2 - 10);
            graphx += dt;
        }

        // render cursor
        dc.fillStyle = dc.strokeStyle = "lightgreen";
        dc.lineWidth = 1;
        dc.beginPath();
        dc.moveTo(this.cursorx, this.y);
        dc.lineTo(this.cursorx, this.y+this.h);
        dc.stroke();
        const text = "" + Math.floor((this.cursorx-30) * this.xmax / (this.w)) + " us";
        const textWidth = dc.measureText(text).width;
        dc.fillText(text, this.cursorx - textWidth/2, this.y + this.h - 10);

        // border
        dc.strokeStyle = "white";
        dc.lineWidth = 3;
        dc.strokeRect(this.x, this.y, this.w, this.h);

        dc.fillStyle = "yellow";
        dc.font = "40px Arial";
        dc.fillText("Statistics", 30, 290);
    }

}

// ======================================================
// Viewport Class for decoder
// ======================================================
class PViewportDecoder {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.codebook = 
        [{"code":"BADCDCDABABABABC","key":"A"},{"code":"BCBADABABABABABCDABA","key":"EOL"},{"code":"BCBABADCDABCBABABA","key":"O"},{"code":"BABABCDCDABCBADABA","key":"L"},{"code":"DABABABCDABABCDABA","key":"D"},{"code":"BCBABADCDABCDABABA","key":"H"},{"code":"BCDABABCDABCBABADA","key":"N"},{"code":"BABCDABCDABCBADC","key":"M"},{"code":"BCDABABCDABCDABC","key":"!"},{"code":"BADCDCDCBADABABA","key":"X"},{"code":"DCBADCDABABCDC","key":"E"},{"code":"BABABCDCDCDABCDA","key":"R"},{"code":"DABABABCDABABABCBA","key":"C"},{"code":"BABCDABCDCDABCBA","key":"S"},{"code":"BCDABABCDCDABABABA","key":"P"},{"code":"DCBADCDABABABCDA","key":"B"},{"code":"BABADABCDCBADABC","key":"Y"},{"code":"BADABABABCDABABABABA","key":"_"},{"code":"BABCBADABCBADABCDA","key":"2"},{"code":"BABCBADABCBADCDC","key":"5"}];
        this.message = [];
    }

    set(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    decodeData(data){
        let code = "";
        let xpos = -1;
        let StartIndex = 0;
        this.message = [];
      
        for (var i = 0; i < data.length; i++){
            switch(data[i].key){
            case "START":
                code = "";
                xpos = data[i+1].x;
                StartIndex = i;
                break;
            case "STOP":
                const k = this.codebook.find((c) => c.code == code);
                if (k != null){
                    this.message.push({ code: code, key: k.key, xpos: xpos });
                    data[StartIndex].code = k.key;
                } else {
                    this.codebook.push({ code: code, key: code});
                    this.message.push({ code: code, key: code, xpos: xpos });
                    data[StartIndex].code = code;
                }
                break;
            default:
                code += data[i].key;
                break;
            }
        }
        console.log(JSON.stringify(this.message));
    }
}

// ======================================================
// Viewport Class for data
// ======================================================
class PViewportData {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.data = [];
    }

    set(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    moveMouse(mousex, mousey) {
        this.cursorx = mousex;
        this.cursory = mousey;  
        if (this.cursorx < this.x0) this.cursorx = this.x;
        else if (this.cursorx > this.x+this.w) this.cursorx = this.x+this.w;
    }

    setData(data) {
        this.data = data;
        this.xmax = data[data.length-1].x;
    }

/*    static getMaxX() {
        return this.data[this.data.length-1].x;
    }
*/
    render(dc, hover3) {
        dc.strokeStyle = "white";
        dc.lineWidth = 3;
        dc.strokeRect(this.x, this.y, this.w, this.h);

        dc.strokeStyle = "lightgreen";
        dc.lineWidth = 1;
        if (this.data.length > 0){
            const dx = this.w / this.data[this.data.length-1].x;
            const yposlow = 200;
            const yposhigh = 100;
        
            dc.strokeStyle = "lightgreen";
            dc.fillStyle = "yellow";
            dc.font = "28px Arial";
            dc.lineWidth = 2;
            dc.beginPath();
            var first = true;
            var previousy = 0;
            for (var i = 0; i < this.data.length; i++){
              const x = Math.floor(this.data[i].x * dx + this.x);
              if (first){
                previousy = this.data[i].y; 
                first = false;
                dc.moveTo(x, (previousy == 0) ? yposlow : yposhigh);
              }else{
                dc.lineTo(x, (previousy == 0) ? yposlow : yposhigh);
                previousy = this.data[i].y; 
                dc.lineTo(x, (previousy == 0) ? yposlow : yposhigh);
              }
              if (this.data[i].key == "START"){
                const xx = Math.floor(this.data[i+1].x * dx + this.x);
                dc.fillText(this.data[i].code, xx, yposlow + 30);
              } 
            }
            dc.stroke();

            if (hover3 != null){
                let dataxmax = this.data[this.data.length-1].x;
                const dx = this.w / dataxmax;
                const yposlow = 200;
                const yposhigh = 100;
            
                dc.strokeStyle = "yellow";
                dc.lineWidth = 6;
                dc.beginPath();
                for (var i = 0; i < this.data.length-1; i++){
                  const dt = this.data[i+1].x - this.data[i].x;
                  if (dt < hover3.t1 || dt > hover3.t2 || this.data[i].y != hover3.level) continue;
                  const x1 = Math.floor((this.data[i].x) * dx + this.x);
                  const x2 = Math.floor((this.data[i+1].x) * dx + this.x);
                  dc.moveTo(x1, (this.data[i].y == 0) ? yposlow : yposhigh);
                  dc.lineTo(x2, (this.data[i].y == 0) ? yposlow : yposhigh);
                }
                dc.stroke();
            }         

            // render cursor
            dc.fillStyle = dc.strokeStyle = "lightgreen";
            dc.lineWidth = 1;
            dc.font = "16px Arial";
            dc.beginPath();
            dc.moveTo(this.cursorx, this.y);
            dc.lineTo(this.cursorx, this.y+this.h);
            dc.stroke();
            const text = "" + Math.floor((this.cursorx-30) * this.xmax / (this.w)) + " us";
            const textWidth = dc.measureText(text).width;

            dc.fillText(text, this.cursorx - textWidth/2, this.y + this.h - 10);
            dc.fillStyle = "yellow";
            dc.font = "40px Arial";
            dc.fillText("Analyzer v7", 30, 35);
        }
    }
}

// ======================================================
// Tick class
// ======================================================
const sequence = [
    { tick: 200, cls: 1, vpdat: 1, vpstat: 1, cool: 1},
    { tick: 250, glitch: 1},
];

class PTick{
    constructor(){
        this.c = 0; // the counter
        this.pc = 0; // srquence program counter
    }

    t(){
        this.c++
        if (this.c >= sequence[this.pc].tick){
            this.pc = (this.pc == sequence.length-1) ? 0 : this.pc+1;
            if (this.pc == 0) this.c = 0;
        }
    }

    static progress(){
        return (sequence[this.pc].tick - this.c)/seq.tick;
    }
}

// ======================================================
// ======================================================
window.addEventListener('load', function() {
    // canvas setup
    const canvas = document.querySelector("canvas");
    canvas.style.backgroundColor = "black";
    const width = canvas.width = window.innerWidth - 10;
    const height = canvas.height = window.innerHeight - 10;
    const vpdat = new PViewportData(30, 50, width-60, 200);
    vpdat.setData(data0);

    const vpstat = new PViewportStatic(30, 300, width-60, 200);
    vpstat.calculate(data0);

    const vpdecoder = new PViewportDecoder(30, 600, width-60, 200);
    vpdecoder.decodeData(vpdat.data);

    let dots = [];
    for (let i = 0; i < 1000; i++) {
        dots.push(new Dot(width / 2, height / 2, PVector.random2D(), 2));
    }
    
    const dc = canvas.getContext('2d', {
        willReadFrequently: true
    });

    canvas.oncontextmenu = function (e) {
        e.preventDefault();
    };
    
    let angle = 0;
    let angle2 = 0;
    const tick = new PTick();
    
    function animate() {
        if (sequence[tick.pc].cls !== undefined) dc.clearRect(0,0,canvas.width,canvas.height);
        if (sequence[tick.pc].vpdat !== undefined) vpdat.render(dc, vpstat.hover3);
        if (sequence[tick.pc].vpstat !== undefined) vpstat.render(dc);
        if (sequence[tick.pc].cool !== undefined){
            dc.clearRect(vpdat.x+2, vpdat.y+2, 100, vpdat.h-4);
        }
        if (sequence[tick.pc].glitch !== undefined) glitch();
        if (sequence[tick.pc].particle !== undefined) {
            dc.fillStyle = "rgba(255,255,255,1.0)";
            for (let i = 0; i < dots.length; i++) {
                dots[i].update();
                dots[i].show(dc);
                if (dots[i].pos.x > width || dots[i].pos.x < 0 || dots[i].pos.y > height || dots[i].pos.y < 0|| dots[i].counter < 0) {
                    dots[i].pos.set(width / 2 + 0.4 * width * Math.cos(angle), height / 2 + 0.4 * height * Math.sin(angle));
                    dots[i].vel = PVector.direction(angle2+Math.random());
                    angle2 += 0.01;
                    dots[i].counter = 50 + 100 * Math.random();
                }
            }
            angle += 0.01;
        }
        tick.t(sequence);
        requestAnimationFrame(animate);
    }

    animate();
  
    window.addEventListener('resize', function(){
        canvas.width = window.innerWidth-10;
        canvas.height = window.innerHeight-10;
        vpdat.set(30, 50, canvas.width-60, 200);
    });

    canvas.addEventListener('mousemove', function(evt){
        var rect = canvas.getBoundingClientRect();
        mouse.x = evt.clientX - rect.left;
        mouse.y = evt.clientY - rect.top;
        if (!mouse.down) {
            vpstat.moveMouse(mouse.x, mouse.y);
            vpdat.moveMouse(mouse.x, mouse.y);
        } else {
            vpstat.dragMouse(mouse.x, mouse.y);
        }
    });
      
      canvas.addEventListener('mousedown', function(evt){
        mouse.down = true;
      });
      
      canvas.addEventListener('mouseup', function(evt){
        mouse.down = false;
      });
      
      function glitch() {

        const sliceCount = 10;
        for (let i = 0; i < sliceCount; i++) {
          const x = 0;
          const y = Math.random() * canvas.height;
          const width = canvas.width;
          const height = Math.random() * 10 + 5;
      
          const dx = Math.random() * 20 - 10; // horizontal shift
          const imageData = dc.getImageData(x, y, width, height);
          dc.putImageData(imageData, dx, y);
        }
      
        // Optional: Add RGB channel separation
        const imgData = dc.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < imgData.data.length; i += 4) {
          imgData.data[i] = imgData.data[i + 1];     // Red
          imgData.data[i + 2] = imgData.data[i];     // Blue
        }
        dc.putImageData(imgData, 0, 0);
      
      }
});
