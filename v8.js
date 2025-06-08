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

const capturequeue = [data0, dataCRSP, data3, dataASSEMBLY_25, rawdata, dataOLDHANDMIXER, dataNOISE];
let captureindex = 0;


var mouse = {x:0, y:0, down:false};

//const audio = new Audio('./Mixdown_14.mp3'); // Replace with your MP3 file path or URL
const audio = new Audio('./mixdown24.mp3'); // Replace with your MP3 file path or URL


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
        this.color = "rgba(250, 250, 250, 0.5)";
    }

    update() {
        this.pos.add(this.vel);
        this.counter--;
    }

    show(dc) {
        dc.fillStyle = this.color;
        dc.beginPath();
        let r = this.counter / 10;
        r = (r < 0) ? 0 : r;
        dc.arc(this.pos.x, this.pos.y, r, 0, 2 * Math.PI);
        dc.fill();
    }

    showProgress(dc, factor) {
        dc.fillStyle = this.color;
        dc.beginPath();
        let r = factor * this.counter / 10;
        r = (r < 0) ? 0 : r;
        dc.arc(this.pos.x, this.pos.y, r, 0, 2 * Math.PI);
        dc.fill();
    }
}

// ======================================================
// Viewport Class for statistic data
// ======================================================
class PViewportStatistic {
    constructor(x, y, w, h, vpdat) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.xmax = 2500
        this.graph = []
        this.data = vpdat.data;
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

    calculate(){
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
        for (var i = 0; i < this.data.length-1; i++){
            const dt = this.data[i+1].x - this.data[i].x;
            const slot = this.graph.findIndex((s) => dt >= s.t1 && dt < s.t2);
            if (slot >= 0){
              if (this.data[i].y == 0) this.graph[slot].low++;
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

        for (var i = 0; i < this.data.length-1; i++){
            const dt = this.data[i+1].x - this.data[i].x;
            const trigger = this.triggers.find((t) => dt >= t.t1 && dt < t.t2 && this.data[i].y == t.level);
            if (trigger != null){
              this.data[i].key = trigger.key;  
            }
            else{
              this.data[i].key = "NOISE";  
            }
          }
          this.data[this.data.length - 1].key = "STOP";
        
        
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
        dc.fillText("Pulse timing statistics", 30, 290);
    }

}

// ======================================================
// Viewport Class for decoder
// ======================================================
class PViewportDecoder {
    constructor(x, y, w, h, vpdat) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.codebook = 
        [{"code":"BADCDCDABABABABC","key":"A"},{"code":"BCBADABABABABABCDABA","key":"EOL"},{"code":"BCBABADCDABCBABABA","key":"O"},{"code":"BABABCDCDABCBADABA","key":"L"},{"code":"DABABABCDABABCDABA","key":"D"},{"code":"BCBABADCDABCDABABA","key":"H"},{"code":"BCDABABCDABCBABADA","key":"N"},{"code":"BABCDABCDABCBADC","key":"M"},{"code":"BCDABABCDABCDABC","key":"!"},{"code":"BADCDCDCBADABABA","key":"X"},{"code":"DCBADCDABABCDC","key":"E"},{"code":"BABABCDCDCDABCDA","key":"R"},{"code":"DABABABCDABABABCBA","key":"C"},{"code":"BABCDABCDCDABCBA","key":"S"},{"code":"BCDABABCDCDABABABA","key":"P"},{"code":"DCBADCDABABABCDA","key":"B"},{"code":"BABADABCDCBADABC","key":"Y"},{"code":"BADABABABCDABABABABA","key":"_"},{"code":"BABCBADABCBADABCDA","key":"2"},{"code":"BABCBADABCBADCDC","key":"5"}];
        this.message = [];
        this.data = vpdat.data;
//        this.vpdat = vpdat;
        this.messagePposlow = vpdat.y + vpdat.h - 50;
    }

    set(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    decodeData(){
        let code = "";
        let xpos = -1;
        let StartIndex = 0;
        this.message = [];
      
        for (var i = 0; i < this.data.length; i++){
            switch(this.data[i].key){
            case "START":
                code = "";
                xpos = this.data[i+1].x;
                StartIndex = i;
                break;
            case "STOP":
                const k = this.codebook.find((c) => c.code == code);
                if (k != null){
                    this.message.push({ code: code, key: k.key, xpos: xpos });
                    this.data[StartIndex].code = k.key;
                } else {
                    this.codebook.push({ code: code, key: code});
                    this.message.push({ code: code, key: code, xpos: xpos });
                    this.data[StartIndex].code = code;
                }
                break;
            default:
                code += this.data[i].key;
                break;
            }
        }
//        console.log(JSON.stringify(this.message));
    }
    moveMouse(mousex, mousey) {
        this.cursorx = mousex;
        this.cursory = mousey;  
        if (this.cursorx < 30) this.cursorx = 30;
        else if (this.cursorx > this.x+this.w) this.cursorx = this.x+this.w;
    }
    render(dc, hover3){
        if (this.data.length > 0){
            let dx = this.w / this.data[this.data.length-1].x;
            dc.fillStyle = "yellow";
            dc.font = "28px Arial";
            dc.lineWidth = 2;
            for (var i = 0; i < this.data.length; i++){
              const x = Math.floor(this.data[i].x * dx + this.x);
              if (this.data[i].key == "START"){
                const xx = Math.floor(this.data[i+1].x * dx + this.x);
                dc.fillText(this.data[i].code, xx, this.messagePposlow + 30);
              } 
            }
            dc.fillStyle = "yellow";
            dc.font = "40px Arial";
            dc.fillText("Decoding sequences", 30, 540);

            dc.strokeStyle = "lightgreen";
            dc.lineWidth = 1;

            dx = 2000/this.w/25;
            let yposlow = 600;
            let yposhigh = 580;
            let xoffset = 0;
            let xmax = 0;
        
            dc.strokeStyle = "lightgreen";
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
                dc.fillStyle = (hover3 != null && hover3.key == this.data[i].key) ? "yellow" : "lightgray";
                dc.font = "16px Arial";
                dc.fillText(this.data[i].key, x-xoffset+2, yposlow-3);
              }else{
                dc.lineTo(x-xoffset, (previousy == 0) ? yposlow : yposhigh);
                if (this.data[i].key == "START"){
                    yposhigh += 40
                    yposlow += 40;
                    xmax = Math.max(xmax, x - xoffset);
                    xoffset = x - this.x;
                    previousy = this.data[i].y; 
                    dc.moveTo(x-xoffset, (previousy == 0) ? yposlow : yposhigh);
                } 
                previousy = this.data[i].y; 
                dc.lineTo(x-xoffset, (previousy == 0) ? yposlow : yposhigh);
                dc.fillStyle = (hover3 != null && hover3.key == this.data[i].key) ? "yellow" : "lightgray";
                dc.font = "16px Arial";
                dc.fillText(this.data[i].key, x-xoffset+2, yposlow-3);
              }
            }
            dc.stroke();

            // render cursor
            dc.fillStyle = dc.strokeStyle = "lightgreen";
            dc.lineWidth = 1;
            dc.beginPath();
            if (this.cursorx > xmax) this.cursorx = xmax;
            dc.moveTo(this.cursorx, this.y);
            dc.lineTo(this.cursorx, yposlow);
            dc.stroke();
            dc.font = "16px Arial";
            const text = "" + Math.floor((this.cursorx-30) / (dx)) + " us";
            const textWidth = dc.measureText(text).width;
            dc.fillText(text, this.cursorx - textWidth/2, this.y - 5);
            dc.fillText(text, this.cursorx - textWidth/2, yposlow+ 20);


        }
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
            const text2 = "Logic analyzer v8";
            const textWidth2 = dc.measureText(text2).width;
            dc.fillText(text2, this.w - textWidth2, 40);
            dc.fillText("Data capture", 30, 40);
        }
    }
}


// ======================================================
// FX section - Glitch, Noise, Pixeling
// ======================================================
function glitch(buffer) {
    const sliceCount = 20;
    const dc = buffer.getContext('2d', {
        willReadFrequently: true
    });
    for (let i = 0; i < sliceCount; i++) {
        const x = 0;
        const y = Math.random() * buffer.height;
        const width = buffer.width;
        const height = Math.random() * 10 + 5;
    
        const dx = Math.random() * 50 - 25; // horizontal shift
        const imageData = dc.getImageData(x, y, width, height);
        dc.putImageData(imageData, dx, y);
    }
}

function drawNoise(dc, width, height, alpha = 40) {
    const imageData = dc.createImageData(width, height);
    const buffer = imageData.data;
    for (let i = 0; i < buffer.length; i += 16) {
        const val = (64 * Math.floor(Math.random() * 4)); 
        buffer[i] = val;     // R
        buffer[i + 1] = val; // G
        buffer[i + 2] = val; // B
        buffer[i + 3] = 255; // Alpha (0-255)
    }
    dc.putImageData(imageData, 0, 0);
}

function drawPixelate(dc, canvas, pixelSize = 8) {
    const off = document.createElement('canvas');
    off.width = Math.ceil(canvas.width / pixelSize);
    off.height = Math.ceil(canvas.height / pixelSize);
    const offCtx = off.getContext('2d');
    offCtx.drawImage(canvas, 0, 0, off.width, off.height);
    dc.imageSmoothingEnabled = false;
    dc.drawImage(off, 0, 0, off.width, off.height, 0, 0, canvas.width, canvas.height);
    dc.imageSmoothingEnabled = true;
}

// ======================================================
// ScrollerChar and Path classes
// ======================================================
class ScrollerChar{
    constructor(char, xoffset, width){
        this.char = char;
        this.xoffset = xoffset;
        this.width = width; 
    }
}

class Path{
    constructor(x, y, ang, color){
        this.x = x;
        this.y = y;
        this.ang = ang;
        this.color = color;
    }
    draw(dc){
        dc.fillStyle = this.color;
        dc.fillRect(this.x, this.y, 5, 5);
    }
}

// ======================================================
// Scroller class
// ======================================================
class Scroller{
    constructor(text, font, dc, x, width, y, height, dx, dy, color){
        this.text = text;
        this.font = font;
        this.width = width;
        this.x = x;
        this.x0 = x;
        dc.font = font;
        const temp = text.split("");
        this.chars = [];
        let xoffset = 0;
        dc.font = this.font;
        for (let i = 0; i < temp.length; i++) {
            this.chars.push(new ScrollerChar(temp[i], xoffset, dc.measureText(temp[i]).width));
            xoffset += dc.measureText(temp[i]).width;
        }
        this.xmax = xoffset + width;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
        this.ticks = 0;
        this.path = [];
        for (let i = 0; i < this.width; i++) {
            let x = i - width*0.25;
            this.path.push(new Path(x, height*0.8, 0, color));
        }
        let x0 = width*0.75;
        let y0 = height*(0.5+0.15);
        for (let a = -Math.PI/2; a < Math.PI/2; a+=0.005) {
            let x = x0 + 0.15*height*Math.cos(a);
            let y = y0 - 0.15*height*Math.sin(a);
            this.path.push(new Path(x, y, -Math.PI/2 - a, "orange"));
        }
        for (let i = width*0.75; i > width*0.25; i--) {
            this.path.push(new Path(i, height*0.5, Math.PI,color));
        }
        x0 = width*0.25;
        y0 = height*(0.5-0.15);
        for (let a = 1.5*Math.PI; a > 0.5*Math.PI; a-=0.005) {
            let x = x0 + 0.15*height*Math.cos(a);
            let y = y0 - 0.15*height*Math.sin(a);
            this.path.push(new Path(x, y, 0.5*Math.PI - a, "brown"));
        }
        for (let i = 0; i < this.width; i++) {
            let x = i + width*0.25;
            this.path.push(new Path(x, height*0.2, 0, "white"));
        }
        this.x = this.x0 = this.path.length;
        this.xmax = xoffset + this.path.length;
        
    }
    draw(dc){
        var x = this.x;
        dc.fillStyle = this.color;
        dc.font = this.font;

        this.chars.forEach(element => {
            if ((x > 0)&&(x < this.path.length)){
                const i = Math.floor(x);    
                const xx = this.path[i].x;
                const yy = this.path[i].y + 50*Math.sin(x/100 - this.ticks/25);
                dc.save();
                dc.translate(xx, yy);
                dc.rotate(this.path[i].ang);
                dc.fillText(element.char, 0, 0);
                dc.restore();
            }
            x += element.width;
        });
    }
    update(){
        this.ticks++;
        this.x += this.dx;
        this.y += this.dy;
        if (this.x < -this.xmax) this.x = this.x0;
    }
}

// ======================================================
// Globals
// ======================================================


// ======================================================
// Tick - Scene Particel Intro
// ======================================================

class PTick{
    constructor() {
        this.frameBuffer = [];
        this.fps = 60;
        this.running = false;
    }
    start() {
        this.running = true;
    }
    action(dc) {
        sceneParticelIntro(dc, this); // 625 frames
    }
}

// ======================================================
// Scene Particel Intro
// ======================================================
async function sceneParticelIntro(ctx, t) {
    var dots = [];
    var angle = Math.random() * 2 * Math.PI;
    var angle2 = Math.random() * 2 * Math.PI;
    var angle3 = Math.random() * 2 * Math.PI;
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
    let glitchBuffer = null;
    const scrollText = "Så for 5 dage siden var jeg i DR byen og opleve Svend Brinkmann og Thomas Vinterberg sidde ved kaminen og snakke om hvordan vi kan leve med kriser. De tog udgangspunkt i nutiden og Donald Trumps behandling af Zelenskyj. Thomas fortalte hvordan han var stoppet med at se nyheder, noget som jeg kender fra mig selv og flere i min omgangskreds. Svend havde gjort det modsatte og læser flere nyheder end tidligere. Budskabet fra de to var at man skulle prøve at finde håbet og dyrke fællesskabet og kunsten. Jeg vil ikke sige at jeg blev frelst, men jeg indså at jeg finder håbet i de ting de nævner. Dog synes jeg at der manglede forholdet til naturen. Sammen med fællesskabet og kunsten er der også naturen, som giver plads til refleksion og fordybelse både derude og i vindueskarmen.";
    const scrollText2 = ".... WE ARE BACK  .... Some finish greetings to friends and all the other people who are reading this. I hope you are all doing well and enjoying the demo. This is a test of the scrolling text functionality. The text should scroll smoothly across the screen, providing a nice visual effect. Let's see how it goes!";
    const crisptext = ["█▀▀ █▀█ █ █▀ █▀█", "█▄▄ █▀▄ ▄ ▄█ █▀▀"];

    var mask = document.createElement("canvas");
    mask.width = width*1.3;
    mask.height = height*1.3;
    const maskdc = mask.getContext("2d");
    maskdc.fillStyle = "rgba(0,0,0,0.6)";
    maskdc.fillRect(0, 0, mask.width, mask.height);
    maskdc.globalCompositeOperation = "destination-out";
    maskdc.font = "100px Arial";        
    maskdc.textAlign = "center";
    maskdc.textBaseline = "middle";
    maskdc.fillText(crisptext[0], mask.width / 2, mask.height / 2 - 68);
    maskdc.fillText(crisptext[1], mask.width / 2, mask.height / 2 + 68);
    maskdc.globalCompositeOperation = "source-over";

    var scrollermask = document.createElement("canvas");
    scrollermask.width = width;
    scrollermask.height = height;
    const scrollerdc = scrollermask.getContext("2d");

    var radarcanvas = document.createElement("canvas");
    radarcanvas.width = width;
    radarcanvas.height = height;
    const radardc = scrollermask.getContext("2d");

    let vpdat1 = new PViewportData(30, 50, width-60, 200);
    vpdat1.setData(capturequeue[1]);
    vpstat1 = new PViewportStatistic(30, 300, width-60, 200, vpdat1);
    vpstat1.calculate();
    vpdecoder1 = new PViewportDecoder(30, 580, width-60, height-580, vpdat1);
    vpdecoder1.decodeData();
    let dat1buffer = document.createElement('canvas');
    dat1buffer.width = width;
    dat1buffer.height = height;
    const dat1dc = dat1buffer.getContext('2d');
    dat1dc.fillStyle = "black";
    dat1dc.fillRect(0, 0, width, height);
    vpdat1.render(dat1dc, vpstat1.hover3);
    vpstat1.render(dat1dc);
    vpdecoder1.render(dat1dc, vpstat1.hover3);

    let vpdat2 = new PViewportData(30, 50, width-60, 200);
    vpdat2.setData(capturequeue[6]);
    vpstat2 = new PViewportStatistic(30, 300, width-60, 200, vpdat2);
    vpstat2.calculate();
    vpdecoder2 = new PViewportDecoder(30, 580, width-60, height-580, vpdat2);
    vpdecoder2.decodeData();
    let dat2buffer = document.createElement('canvas');
    dat2buffer.width = width;
    dat2buffer.height = height;
    const dat2dc = dat2buffer.getContext('2d');
    dat2dc.fillStyle = "black";
    dat2dc.fillRect(0, 0, width, height);
    vpdat2.render(dat2dc, vpstat1.hover3);
    vpstat2.render(dat2dc);
    vpdecoder2.render(dat2dc, vpstat1.hover3);

    var scroller = new Scroller(scrollText, "bold 100px Arial", ctx, width, width, height/2, height, -8, 0, "white");
    var scroller2 = new Scroller(scrollText2, "bold 100px Arial", ctx, width, width, height/2, height, -10, 0, "white");


// wait for click on screen event to start the animation
    scrollerdc.font = "80px Arial";
    scrollerdc.clearRect(0,0,width,height);
    scrollerdc.fillStyle = "rgba(0,0,0,1)";
    scrollerdc.fillRect(0,0,width,height);
    scrollerdc.globalCompositeOperation = "destination-out";
    let string = "Click on window to start demo";
    let stringArray = string.split("|");
    let xtop = height / 2 - 25;
    stringArray.forEach((str, index) => {
        const xsize = scrollerdc.measureText(str).width;
        scrollerdc.fillStyle = "white";
        scrollerdc.fillText(str, (width-xsize)/2 + 25, xtop + index * 130);
    });


    while (!t.running) {
        let buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        const dc = buffer.getContext('2d');        
        drawNoise(dc, width, height, 40);
        drawPixelate(dc, buffer, 8);
        scrollerdc.globalCompositeOperation = "source-over";
        dc.drawImage(scrollermask, 0, 0);
        t.frameBuffer.push(buffer);
        while (t.frameBuffer.length > 50) {
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }

    for(var count = 0; count < t.fps; count++) {
        let buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        const dc = buffer.getContext('2d');        
        drawNoise(dc, width, height, 40);
        drawPixelate(dc, buffer, 8);
        scrollerdc.globalCompositeOperation = "source-over";
        dc.drawImage(scrollermask, 0, 0);
        dc.fillStyle = "rgba(0,0,0," + (count/t.fps) + ")";
        dc.fillRect(0, 0, buffer.width, buffer.height);
        t.frameBuffer.push(buffer);
        while (t.frameBuffer.length > 50) {
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }

    while (t.frameBuffer.length > 0) {
        await new Promise(resolve => setTimeout(resolve, 10));
    }

    // start the music
    audio.play();  
    
    const introCount = t.fps * 17; // 17 seconds
    const introFadein = Math.floor(introCount * 0.25); // 25% fade in
    const introrunning = Math.floor(introCount * 0.50); // 50% run
    const introFadeout = Math.floor(introCount * 0.1); // 12% fadeout
    const introRemove = Math.floor(introCount * 0.1); // 12% fadeout


    // add particles
    for(var count = 0; count < introFadein; count++) {
        let buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        const dc = buffer.getContext('2d');        
        dots.push(new Dot(width / 2 + 0.4 * width * Math.cos(angle), height / 2 + 0.4 * height * Math.sin(angle), PVector.direction(angle2+Math.random()), 2));
        dots.push(new Dot(width / 2 + 0.4 * width * Math.cos(angle), height / 2 + 0.4 * height * Math.sin(angle), PVector.direction(angle2+Math.random()), 2));
        dots.push(new Dot(width / 2 + 0.4 * width * Math.cos(angle), height / 2 + 0.4 * height * Math.sin(angle), PVector.direction(angle2+Math.random()), 2));
        dots.push(new Dot(width / 2 + 0.4 * width * Math.cos(angle), height / 2 + 0.4 * height * Math.sin(angle), PVector.direction(angle2+Math.random()), 2));

        dc.fillStyle = "black";
        dc.fillRect(0, 0, width, height);
        for (let i = 0; i < dots.length; i++) {
            dots[i].update();
            dots[i].showProgress(dc, count / 250);
            if (dots[i].pos.x > width || dots[i].pos.x < 0 || dots[i].pos.y > height || dots[i].pos.y < 0|| dots[i].counter < 0) {
                dots[i].pos.set(width / 2 + 0.4 * width * Math.cos(angle), height / 2 + 0.4 * height * Math.sin(angle));
                dots[i].vel = PVector.direction(angle2+Math.random());
                angle2 += 0.02;
                dots[i].counter = 50 + 100 * Math.random();
                dots[i].color = "rgba(255, 255, 255, 0.5)";
            }
        }
        angle += (0.02 * count / introFadein);
        t.frameBuffer.push(buffer);
        while (t.frameBuffer.length > 50) {
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }

    // run intro
    for(var count = 0; count < introrunning; count++) {
        let buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        const dc = buffer.getContext('2d');        
        dc.fillStyle = "black";
        dc.fillRect(0, 0, width, height);
        for (let i = 0; i < dots.length; i++) {
            dots[i].update();
            dots[i].show(dc);
            if (dots[i].pos.x > width || dots[i].pos.x < 0 || dots[i].pos.y > height || dots[i].pos.y < 0|| dots[i].counter < 0) {
                dots[i].pos.set(width / 2 + 0.4 * width * Math.cos(angle), height / 2 + 0.4 * height * Math.sin(angle));
                dots[i].vel = PVector.direction(angle2+Math.random());
                angle2 += 0.02;
                dots[i].counter = 50 + 100 * Math.random();
                dots[i].color = "rgba(255, 255, 255, 0.5)";
            }
        }
        angle += 0.02;
        t.frameBuffer.push(buffer);
        while (t.frameBuffer.length > 50) {
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }

    // fade out
    for(var count = 0; count < introFadeout; count++) {
        let buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        const dc = buffer.getContext('2d');        
        dc.fillStyle = "black";
        dc.fillRect(0, 0, width, height);
        for (let i = 0; i < dots.length; i++) {
            dots[i].update();
            dots[i].showProgress(dc, 1 - count/125);
            if (dots[i].pos.x > width || dots[i].pos.x < 0 || dots[i].pos.y > height || dots[i].pos.y < 0|| dots[i].counter < 0) {
                dots[i].pos.set(width / 2 + 0.4 * width * Math.cos(angle), height / 2 + 0.4 * height * Math.sin(angle));
                dots[i].vel = PVector.direction(angle2+Math.random());
                angle2 += 0.02;
                dots[i].counter = 50 + 100 * Math.random();
                dots[i].color = "rgba(255, 255, 255, 0.5)";
            }
        }
        angle += (0.02 * (1-count / introFadeout));
        t.frameBuffer.push(buffer);
        while (t.frameBuffer.length > 50) {
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }

    // fade out and remove particles
    for(var count = 0; count < introRemove; count++) {
        let buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        const dc = buffer.getContext('2d');        
        dc.fillStyle = "black";
        dc.fillRect(0, 0, width, height);
        let newDots = [];
        for (let i = 0; i < dots.length; i++) {
            dots[i].update();
            dots[i].showProgress(dc, 0.01);
            if ( dots[i].counter > 0) {
                newDots.push(dots[i]);
            }
        }
        dots = newDots;
        angle += (0.02 * (1-count / introRemove));
        t.frameBuffer.push(buffer);
        while (t.frameBuffer.length > 50) {
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }

    dots = [];
    const scroller1Count = t.fps * (56-17);
    const scroller1Fadein = Math.floor(scroller1Count * 0.125); 
    const scroller1firstRun = Math.floor(scroller1Count * 0.875); 
    const glitch1Count = t.fps * 8;
    const scroller1secondRun = t.fps * 2;
    const glitch2Count = t.fps * 2;
    const scroller1thirdRun = t.fps * 4;
    const glitch3Count = t.fps * 8;

    // scroller fade in
    for(var count = 0; count < scroller1Fadein; count++) {
        let buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        const dc = buffer.getContext('2d');        

        dc.fillStyle = "red";
        dc.fillRect(0,0,buffer.width,buffer.height);

        dc.strokeStyle = "cyan";
        dc.lineWidth = 240 + 200 * Math.sin(angle3);
        dc.beginPath();
        const l = width;
        const cx = width/2 + 0.4 * width * Math.cos(angle3*2);
        const cy = height/2 + 0.4 * height * Math.sin(angle3);
        dc.moveTo(cx, cy);
        dc.lineTo(cx + l * Math.cos(angle3), cy + l * Math.sin(angle3));
        dc.moveTo(cx, cy);
        dc.lineTo(cx - l * Math.cos(angle3), cy - l * Math.sin(angle3));
        dc.stroke();
        const xoff = mask.width*0.10*Math.cos(angle3/2) - mask.width*0.1;
        const yoff = mask.height*0.10*Math.sin(angle3/2) - mask.height*0.1;
        scrollerdc.clearRect(0,0,width,height);
        scrollerdc.fillStyle = "rgba(0,0,0,0.4)";
        scrollerdc.fillRect(0,0,width,height);
        scrollerdc.globalCompositeOperation = "destination-out";
        scroller.draw(scrollerdc);
        scrollerdc.globalCompositeOperation = "source-over";
        dc.drawImage(scrollermask, 0, 0);
        scroller.update();

        dc.drawImage(mask, xoff, yoff);
        angle3 += 0.01;

        dc.fillStyle = "rgba(0,0,0," + (1-count/scroller1Fadein) + ")";
        dc.fillRect(0, 0, buffer.width, buffer.height);

        t.frameBuffer.push(buffer);
        while (t.frameBuffer.length > 50) {
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }

    // scroller run for 34 seconds
    for(var count = 0; count < scroller1firstRun; count++) {
        let buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        const dc = buffer.getContext('2d');        

        dc.fillStyle = "red";
        dc.fillRect(0,0,buffer.width,buffer.height);

        dc.strokeStyle = "cyan";
        dc.lineWidth = 240 + 200 * Math.sin(angle3);
        dc.beginPath();
        const l = width;
        const cx = width/2 + 0.4 * width * Math.cos(angle3*2);
        const cy = height/2 + 0.4 * height * Math.sin(angle3);
        dc.moveTo(cx, cy);
        dc.lineTo(cx + l * Math.cos(angle3), cy + l * Math.sin(angle3));
        dc.moveTo(cx, cy);
        dc.lineTo(cx - l * Math.cos(angle3), cy - l * Math.sin(angle3));
        dc.stroke();
        const xoff = mask.width*0.10*Math.cos(angle3/2) - mask.width*0.1;
        const yoff = mask.height*0.10*Math.sin(angle3/2) - mask.height*0.1;
        scrollerdc.clearRect(0,0,width,height);
        scrollerdc.fillStyle = "rgba(0,0,0,0.4)";
        scrollerdc.fillRect(0,0,width,height);
        scrollerdc.globalCompositeOperation = "destination-out";
        scroller.draw(scrollerdc);
        scrollerdc.globalCompositeOperation = "source-over";
        dc.drawImage(scrollermask, 0, 0);
        scroller.update();

        dc.drawImage(mask, xoff, yoff);
        angle3 += 0.01;

        glitchBuffer = buffer
        t.frameBuffer.push(buffer);
        while (t.frameBuffer.length > 50) {
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }
    
    for(var count = 0; count < glitch1Count; count++) {
        let buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        const dc = buffer.getContext('2d');        

        glitch(glitchBuffer);
        drawPixelate(dc, glitchBuffer, 16);
        scroller.update();
        angle3 += 0.01;

       t.frameBuffer.push(buffer);
        while (t.frameBuffer.length > 50) {
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }

    for(var count = 0; count < scroller1secondRun; count++) {
        let buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        const dc = buffer.getContext('2d');        

        dc.fillStyle = "red";
        dc.fillRect(0,0,buffer.width,buffer.height);

        dc.strokeStyle = "cyan";
        dc.lineWidth = 240 + 200 * Math.sin(angle3);
        dc.beginPath();
        const l = width;
        const cx = width/2 + 0.4 * width * Math.cos(angle3*2);
        const cy = height/2 + 0.4 * height * Math.sin(angle3);
        dc.moveTo(cx, cy);
        dc.lineTo(cx + l * Math.cos(angle3), cy + l * Math.sin(angle3));
        dc.moveTo(cx, cy);
        dc.lineTo(cx - l * Math.cos(angle3), cy - l * Math.sin(angle3));
        dc.stroke();
        const xoff = mask.width*0.10*Math.cos(angle3/2) - mask.width*0.1;
        const yoff = mask.height*0.10*Math.sin(angle3/2) - mask.height*0.1;
        scrollerdc.clearRect(0,0,width,height);
        scrollerdc.fillStyle = "rgba(0,0,0,0.4)";
        scrollerdc.fillRect(0,0,width,height);
        scrollerdc.globalCompositeOperation = "destination-out";
        scroller.draw(scrollerdc);
        scrollerdc.globalCompositeOperation = "source-over";
        dc.drawImage(scrollermask, 0, 0);
        scroller.update();

        dc.drawImage(mask, xoff, yoff);
        angle3 += 0.01;

        glitchBuffer = buffer
        t.frameBuffer.push(buffer);
        while (t.frameBuffer.length > 50) {
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }
    
    for(var count = 0; count < glitch2Count; count++) {
        let buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        const dc = buffer.getContext('2d');        

        glitch(glitchBuffer);
        drawPixelate(dc, glitchBuffer, 16);
        scroller.update();
        angle3 += 0.01;

       t.frameBuffer.push(buffer);
        while (t.frameBuffer.length > 50) {
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }

    for(var count = 0; count < scroller1thirdRun; count++) {
        let buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        const dc = buffer.getContext('2d');        

        dc.fillStyle = "red";
        dc.fillRect(0,0,buffer.width,buffer.height);

        dc.strokeStyle = "cyan";
        dc.lineWidth = 240 + 200 * Math.sin(angle3);
        dc.beginPath();
        const l = width;
        const cx = width/2 + 0.4 * width * Math.cos(angle3*2);
        const cy = height/2 + 0.4 * height * Math.sin(angle3);
        dc.moveTo(cx, cy);
        dc.lineTo(cx + l * Math.cos(angle3), cy + l * Math.sin(angle3));
        dc.moveTo(cx, cy);
        dc.lineTo(cx - l * Math.cos(angle3), cy - l * Math.sin(angle3));
        dc.stroke();
        const xoff = mask.width*0.10*Math.cos(angle3/2) - mask.width*0.1;
        const yoff = mask.height*0.10*Math.sin(angle3/2) - mask.height*0.1;
        scrollerdc.clearRect(0,0,width,height);
        scrollerdc.fillStyle = "rgba(0,0,0,0.4)";
        scrollerdc.fillRect(0,0,width,height);
        scrollerdc.globalCompositeOperation = "destination-out";
        scroller.draw(scrollerdc);
        scrollerdc.globalCompositeOperation = "source-over";
        dc.drawImage(scrollermask, 0, 0);
        scroller.update();

        dc.drawImage(mask, xoff, yoff);
        angle3 += 0.01;

        glitchBuffer = buffer
        t.frameBuffer.push(buffer);
        while (t.frameBuffer.length > 50) {
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }
    
    for(var count = 0; count < glitch3Count; count++) {
        let buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        const dc = buffer.getContext('2d');        

        glitch(glitchBuffer);
        drawPixelate(dc, glitchBuffer, 16);
        scroller.update();
        angle3 += 0.01;

       t.frameBuffer.push(buffer);
        while (t.frameBuffer.length > 50) {
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }



    // draw logic analyzer - data 1
    const analyzerCount1 = t.fps * 16; // 16 seconds
    const analyzerFadein = 3 * t.fps; // 2 seconds fade in
    const analyzerDat1Progress = 3 * t.fps; // 2 seconds fade in
    const analyzerStat1Progress = 3 * t.fps; // 2 seconds fade in
    const analyzerDecoder1Progress = 3 * t.fps; // 2 seconds fade in
    const analyzerWait1 = analyzerCount1 - analyzerFadein - analyzerDat1Progress - analyzerStat1Progress - analyzerDecoder1Progress; // 2 seconds fade in
    
    for(var count = 0; count < analyzerFadein; count++) {
        let buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        const dc = buffer.getContext('2d');
        dc.drawImage(dat1buffer, 0, 0);
        dc.fillStyle = "black";
        dc.fillRect(vpdat1.x+2 , vpdat1.y+2, vpdat1.w-4, vpdat1.h-4);
        dc.fillRect(vpstat1.x+2, vpstat1.y+2, vpstat1.w-4, vpstat1.h-4);
        dc.fillRect(vpdecoder1.x, vpdecoder1.y-2, vpdecoder1.w-4, vpdecoder1.h );
        dc.fillStyle = "rgba(0,0,0," + (1-count/analyzerFadein) + ")";
        dc.fillRect(0, 0, buffer.width, buffer.height);

        t.frameBuffer.push(buffer);
        while (t.frameBuffer.length > 50) {
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }

    for(var count = 0; count < analyzerDat1Progress; count++) {
        let buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        const dc = buffer.getContext('2d');
        dc.drawImage(dat1buffer, 0, 0);
        const progress = count / analyzerDat1Progress;
        dc.fillStyle = "black";
        dc.fillRect(vpdat1.x+2 + vpdat1.w *progress-4, vpdat1.y+2, vpdat1.w * (1-progress), vpdat1.h-4);
        dc.fillRect(vpdat1.x+2 , vpdat1.y+vpdat1.h-45, vpdat1.w-4, 43);
        dc.fillRect(vpstat1.x+2, vpstat1.y+2, vpstat1.w-4, vpstat1.h-4);
        dc.fillRect(vpdecoder1.x, vpdecoder1.y-2, vpdecoder1.w-4, vpdecoder1.h );

        t.frameBuffer.push(buffer);
        while (t.frameBuffer.length > 50) {
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }

    for(var count = 0; count < analyzerStat1Progress; count++) {
        let buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        const dc = buffer.getContext('2d');
        dc.drawImage(dat1buffer, 0, 0);
        const progress = count / analyzerStat1Progress;
        dc.fillRect(vpdat1.x+2 , vpdat1.y+vpdat1.h-45, vpdat1.w-4, 43);
        dc.fillRect(vpstat1.x+2 + vpstat1.w *progress-4, vpstat1.y+2, vpstat1.w * (1-progress), vpstat1.h-4);
        dc.fillRect(vpdecoder1.x, vpdecoder1.y-2, vpdecoder1.w-4, vpdecoder1.h );

        t.frameBuffer.push(buffer);
        while (t.frameBuffer.length > 50) {
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }

    for(var count = 0; count < analyzerDecoder1Progress; count++) {
        let buffer = glitchBuffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        const dc = buffer.getContext('2d');
        dc.drawImage(dat1buffer, 0, 0);
        const progress = count / analyzerDecoder1Progress;
        dc.fillRect(vpdat1.x+2 + vpdat1.w *progress-4, vpdat1.y+vpdat1.h-48, vpdat1.w * (1-progress), 45);
        dc.fillRect(vpdecoder1.x, vpdecoder1.y + progress* vpdecoder1.h, vpdecoder1.w-4, vpdecoder1.h *(1-progress));
        
        t.frameBuffer.push(buffer);
        while (t.frameBuffer.length > 50) {
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }

    for(var count = 0; count < analyzerWait1; count++) {
        t.frameBuffer.push(glitchBuffer);
        while (t.frameBuffer.length > 50) {
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }

    // draw logic analyzer - data 1
    const analyzerCount2 = t.fps * 16.5; // 16 seconds
    const analyzerFadeout = 3 * t.fps; // 2 seconds fade in
    const analyzerDat2Progress = 3 * t.fps; // 2 seconds fade in
    const analyzerStat2Progress = 3 * t.fps; // 2 seconds fade in
    const analyzerDecoder2Progress = 3 * t.fps; // 2 seconds fade in
    
    for(var count = 0; count < analyzerFadeout; count++) {
        let buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        const dc = buffer.getContext('2d');
        dc.drawImage(dat1buffer, 0, 0);
        dc.fillStyle = "rgba(0,0,0," + (count/analyzerFadeout) + ")";
        dc.fillRect(vpdat1.x+2 , vpdat1.y+2, vpdat1.w-4, vpdat1.h-4);
        dc.fillRect(vpstat1.x+2, vpstat1.y+2, vpstat1.w-4, vpstat1.h-4);
        dc.fillRect(vpdecoder1.x, vpdecoder1.y-2, vpdecoder1.w-4, vpdecoder1.h );

        t.frameBuffer.push(buffer);
        while (t.frameBuffer.length > 50) {
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }

    for(var count = 0; count < analyzerDat2Progress; count++) {
        let buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        const dc = buffer.getContext('2d');
        dc.drawImage(dat2buffer, 0, 0);
        const progress = count / analyzerDat2Progress;
        dc.fillStyle = "black";
        dc.fillRect(vpdat2.x+2 + vpdat2.w *progress-4, vpdat2.y+2, vpdat2.w * (1-progress), vpdat2.h-4);
        dc.fillRect(vpdat2.x+2 , vpdat2.y+vpdat2.h-45, vpdat2.w-4, 43);
        dc.fillRect(vpstat2.x+2, vpstat2.y+2, vpstat2.w-4, vpstat2.h-4);
        dc.fillRect(vpdecoder2.x, vpdecoder2.y-2, vpdecoder2.w-4, vpdecoder2.h );

        t.frameBuffer.push(buffer);
        while (t.frameBuffer.length > 50) {
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }

    for(var count = 0; count < analyzerStat2Progress; count++) {
        let buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        const dc = buffer.getContext('2d');
        dc.drawImage(dat2buffer, 0, 0);
        const progress = count / analyzerStat2Progress;
        dc.fillRect(vpdat2.x+2 , vpdat2.y+vpdat2.h-45, vpdat2.w-4, 43);
        dc.fillRect(vpstat2.x+2 + vpstat2.w *progress-4, vpstat2.y+2, vpstat2.w * (1-progress), vpstat2.h-4);
        dc.fillRect(vpdecoder2.x, vpdecoder2.y-2, vpdecoder2.w-4, vpdecoder2.h );

        t.frameBuffer.push(buffer);
        while (t.frameBuffer.length > 50) {
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }

    for(var count = 0; count < analyzerDecoder2Progress; count++) {
        let buffer = glitchBuffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        const dc = buffer.getContext('2d');
        dc.drawImage(dat2buffer, 0, 0);
        const progress = count / analyzerDecoder2Progress;
        dc.fillRect(vpdat2.x+2 + vpdat2.w *progress-4, vpdat2.y+vpdat2.h-48, vpdat2.w * (1-progress), 45);
        dc.fillRect(vpdecoder2.x, vpdecoder2.y + progress* vpdecoder2.h, vpdecoder2.w-4, vpdecoder2.h *(1-progress));
        
        t.frameBuffer.push(buffer);
        while (t.frameBuffer.length > 50) {
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }

    for(var count = 0; count < analyzerFadeout; count++) {
        let buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        const dc = buffer.getContext('2d');
        dc.drawImage(glitchBuffer, 0, 0);
        dc.fillStyle = "rgba(0,0,0," + (count/analyzerFadeout) + ")";
        dc.fillRect(0, 0, buffer.width, buffer.height);

        t.frameBuffer.push(buffer);
        while (t.frameBuffer.length > 50) {
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }

    const scroller2Count = t.fps * 40;
    const scroller2Fadeout = t.fps * 3;

    for(var count = 0; count < scroller2Fadeout; count++) {
        let buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        const dc = buffer.getContext('2d');        

        dc.fillStyle = "blue";
        dc.fillRect(0,0,buffer.width,buffer.height);

        dc.strokeStyle = "cyan";
        dc.lineWidth = 240 + 200 * Math.sin(angle3);
        dc.beginPath();
        const l = width;
        const cx = width/2 + 0.4 * width * Math.cos(angle3*2);
        const cy = height/2 + 0.4 * height * Math.sin(angle3);
        dc.moveTo(cx, cy);
        dc.lineTo(cx + l * Math.cos(angle3), cy + l * Math.sin(angle3));
        dc.moveTo(cx, cy);
        dc.lineTo(cx - l * Math.cos(angle3), cy - l * Math.sin(angle3));
        dc.stroke();
        const xoff = mask.width*0.10*Math.cos(angle3/2) - mask.width*0.1;
        const yoff = mask.height*0.10*Math.sin(angle3/2) - mask.height*0.1;
        scrollerdc.clearRect(0,0,width,height);
        scrollerdc.fillStyle = "rgba(0,0,0,0.4)";
        scrollerdc.fillRect(0,0,width,height);
        scrollerdc.globalCompositeOperation = "destination-out";
        scroller2.draw(scrollerdc);
        scrollerdc.globalCompositeOperation = "source-over";
        dc.drawImage(scrollermask, 0, 0);
        scroller2.update();

        dc.drawImage(mask, xoff, yoff);
        angle3 += 0.01;
        dc.fillStyle = "rgba(0,0,0," + (1-count/scroller2Fadeout) + ")";
        dc.fillRect(0, 0, buffer.width, buffer.height);

        t.frameBuffer.push(buffer);
        while (t.frameBuffer.length > 50) {
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }

    for(var count = 0; count < scroller2Count; count++) {
        let buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        const dc = buffer.getContext('2d');        

        dc.fillStyle = "blue";
        dc.fillRect(0,0,buffer.width,buffer.height);

        dc.strokeStyle = "cyan";
        dc.lineWidth = 240 + 200 * Math.sin(angle3);
        dc.beginPath();
        const l = width;
        const cx = width/2 + 0.4 * width * Math.cos(angle3*2);
        const cy = height/2 + 0.4 * height * Math.sin(angle3);
        dc.moveTo(cx, cy);
        dc.lineTo(cx + l * Math.cos(angle3), cy + l * Math.sin(angle3));
        dc.moveTo(cx, cy);
        dc.lineTo(cx - l * Math.cos(angle3), cy - l * Math.sin(angle3));
        dc.stroke();
        const xoff = mask.width*0.10*Math.cos(angle3/2) - mask.width*0.1;
        const yoff = mask.height*0.10*Math.sin(angle3/2) - mask.height*0.1;
        scrollerdc.clearRect(0,0,width,height);
        scrollerdc.fillStyle = "rgba(0,0,0,0.4)";
        scrollerdc.fillRect(0,0,width,height);
        scrollerdc.globalCompositeOperation = "destination-out";
        scroller2.draw(scrollerdc);
        scrollerdc.globalCompositeOperation = "source-over";
        dc.drawImage(scrollermask, 0, 0);
        scroller2.update();

        dc.drawImage(mask, xoff, yoff);
        angle3 += 0.01;

        t.frameBuffer.push(buffer);
        while (t.frameBuffer.length > 50) {
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }

    for(var count = 0; count < scroller2Fadeout; count++) {
        let buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        const dc = buffer.getContext('2d');        

        dc.fillStyle = "blue";
        dc.fillRect(0,0,buffer.width,buffer.height);

        dc.strokeStyle = "cyan";
        dc.lineWidth = 240 + 200 * Math.sin(angle3);
        dc.beginPath();
        const l = width;
        const cx = width/2 + 0.4 * width * Math.cos(angle3*2);
        const cy = height/2 + 0.4 * height * Math.sin(angle3);
        dc.moveTo(cx, cy);
        dc.lineTo(cx + l * Math.cos(angle3), cy + l * Math.sin(angle3));
        dc.moveTo(cx, cy);
        dc.lineTo(cx - l * Math.cos(angle3), cy - l * Math.sin(angle3));
        dc.stroke();
        const xoff = mask.width*0.10*Math.cos(angle3/2) - mask.width*0.1;
        const yoff = mask.height*0.10*Math.sin(angle3/2) - mask.height*0.1;
        scrollerdc.clearRect(0,0,width,height);
        scrollerdc.fillStyle = "rgba(0,0,0,0.4)";
        scrollerdc.fillRect(0,0,width,height);
        scrollerdc.globalCompositeOperation = "destination-out";
        scroller2.draw(scrollerdc);
        scrollerdc.globalCompositeOperation = "source-over";
        dc.drawImage(scrollermask, 0, 0);
        scroller2.update();

        dc.drawImage(mask, xoff, yoff);
        angle3 += 0.01;
        dc.fillStyle = "rgba(0,0,0," + (count/scroller2Fadeout) + ")";
        dc.fillRect(0, 0, buffer.width, buffer.height);

        t.frameBuffer.push(buffer);
        while (t.frameBuffer.length > 50) {
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }

    const creditsStringArray = "Created by: Oldhandmixer|Directed by: Dipe@CR!SP|Music by: Salle@CR!SP|Special greetings to:|Jumalauta|Hedelmae|Mehu".split("|");
    const threeSecondDelay = t.fps * 3;

    for(var count = 0; count < threeSecondDelay; count++) {
        let buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        const dc = buffer.getContext('2d');        

        drawNoise(dc, width, height, 40);
        drawPixelate(dc, buffer, 8);
        scrollerdc.font = scroller2.font;
        scrollerdc.clearRect(0,0,width,height);
        scrollerdc.fillStyle = "rgba(0,0,0,1)";
        scrollerdc.fillRect(0,0,width,height);
        scrollerdc.globalCompositeOperation = "destination-out";
        let xtop = 100;
        creditsStringArray.forEach((str, index) => {
            const xsize = scrollerdc.measureText(str).width;
            scrollerdc.fillStyle = "white";
            scrollerdc.fillText(str, (width-xsize)/2 + 25, xtop + index * 130);
        });
        scrollerdc.globalCompositeOperation = "source-over";
        dc.drawImage(scrollermask, 0, 0);
        dc.fillStyle = "rgba(0,0,0," + (1-count/threeSecondDelay) + ")";
        dc.fillRect(0, 0, buffer.width, buffer.height);
        t.frameBuffer.push(buffer);
        while (t.frameBuffer.length > 50) {
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }

    for(var count = 0; count < 3*threeSecondDelay; count++) {
        let buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        const dc = buffer.getContext('2d');        

        drawNoise(dc, width, height, 40);
        drawPixelate(dc, buffer, 8);
        scrollerdc.font = scroller2.font;
        scrollerdc.clearRect(0,0,width,height);
        scrollerdc.fillStyle = "rgba(0,0,0,1)";
        scrollerdc.fillRect(0,0,width,height);
        scrollerdc.globalCompositeOperation = "destination-out";
        let xtop = 100;
        creditsStringArray.forEach((str, index) => {
            const xsize = scrollerdc.measureText(str).width;
            scrollerdc.fillStyle = "white";
            scrollerdc.fillText(str, (width-xsize)/2 + 25, xtop + index * 130);
        });
        scrollerdc.globalCompositeOperation = "source-over";
        dc.drawImage(scrollermask, 0, 0);
        t.frameBuffer.push(buffer);
        while (t.frameBuffer.length > 50) {
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }

    for(var count = 0; count < threeSecondDelay; count++) {
        let buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        const dc = buffer.getContext('2d');        

        drawNoise(dc, width, height, 40);
        drawPixelate(dc, buffer, 8);
        scrollerdc.font = scroller2.font;
        scrollerdc.clearRect(0,0,width,height);
        scrollerdc.fillStyle = "rgba(0,0,0,1)";
        scrollerdc.fillRect(0,0,width,height);
        scrollerdc.globalCompositeOperation = "destination-out";
        let xtop = 100;
        creditsStringArray.forEach((str, index) => {
            const xsize = scrollerdc.measureText(str).width;
            scrollerdc.fillStyle = "white";
            scrollerdc.fillText(str, (width-xsize)/2 + 25, xtop + index * 130);
        });
        scrollerdc.globalCompositeOperation = "source-over";
        dc.drawImage(scrollermask, 0, 0);
        dc.fillStyle = "rgba(0,0,0," + (count/threeSecondDelay) + ")";
        dc.fillRect(0, 0, buffer.width, buffer.height);
        t.frameBuffer.push(buffer);
        while (t.frameBuffer.length > 50) {
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }


}




// ======================================================
// Main - Program starts here
// ======================================================
let lastFrameTime = performance.now();
let frameCount = 0;

window.addEventListener('load', function() {
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);

    // Set internal resolution
    canvas.width = 1280; //1920;
    canvas.height = 720; //1080;

    // Function to maintain aspect ratio and center the canvas
    function resizeCanvasCSS() {
        const aspect = 1920 / 1080;
        let winW = window.innerWidth;
        let winH = window.innerHeight;
        let newW, newH;

        if (winW / winH > aspect) {
            // Window is wider than aspect ratio
            newH = winH;
            newW = winH * aspect;
        } else {
            // Window is taller than aspect ratio
            newW = winW;
            newH = winW / aspect;
        }

        canvas.style.width = newW + "px";
        canvas.style.height = newH + "px";
        canvas.style.position = "absolute";
        canvas.style.left = ((winW - newW) / 2) + "px";
        canvas.style.top = ((winH - newH) / 2) + "px";
        canvas.style.backgroundColor = "black";
    }

    let t = new PTick();
    t.action(canvas.getContext('2d'));

    window.addEventListener('resize', resizeCanvasCSS);
    // Fullscreen on user click (required by browsers)
    function goFullscreen() {
        if (canvas.requestFullscreen) {
            canvas.requestFullscreen();
        } else if (canvas.webkitRequestFullscreen) {
            canvas.webkitRequestFullscreen();
        } else if (canvas.msRequestFullscreen) {
            canvas.msRequestFullscreen();
        }
        t.start();
        audio.play();  
        audio.pause();
        window.removeEventListener('click', goFullscreen); // Remove listener after first click

    }
    window.addEventListener('click', goFullscreen);
    resizeCanvasCSS();
    let startTime = performance.now();

    function animate() {
        const ctx = canvas.getContext('2d');
        const elapsed = performance.now() - startTime;

        // FPS calculation
        frameCount++;
        const now = performance.now();
        if (now - lastFrameTime >= 1000) {
            t.fps = frameCount;
            frameCount = 0;
            lastFrameTime = now;
        }

        // Only draw if frame is available
        if (t.frameBuffer.length > 0) {
            const frame = t.frameBuffer.shift();
            ctx.drawImage(frame, 0, 0);
        }

/*        
        ctx.fillStyle = "gray";
        ctx.font = "40px Arial";
        const str = "fps: " + t.fps + " | buffers: " + t.frameBuffer.length + " | buffer time: " + Math.floor(1000 * t.frameBuffer.length / t.fps) + "ms | elapsed: " + elapsed.toFixed(2) + "ms";
        const xsize = ctx.measureText(str).width;
        ctx.fillRect((canvas.width-xsize)/2, canvas.height-80, xsize+50, 50);
        ctx.fillStyle = "white";
        ctx.fillText(str, (canvas.width-xsize)/2 + 25, canvas.height-40);
*/
        requestAnimationFrame(animate);
    }
    animate(); 

});