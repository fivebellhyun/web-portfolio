'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d8c141163d5fa62bec93980992b97d38",
"index.html": "cac37c7379f7349e78ea0e63d94fe83d",
"/": "cac37c7379f7349e78ea0e63d94fe83d",
"main.dart.js": "176f5f0be237c4a985af1432fd0d3b01",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "03f29ee59a3c492771e4178289933c0f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/icon-512.jpg": "b806cb2a19c1e73397f744d71e579e3d",
"manifest.json": "35b425349d089b7500fc9a3dad8932cf",
".git/config": "56dfbfa3a820c32d097de82ad306b193",
".git/objects/61/2bca94cc7e13763c86dc7cf967bb65dd0b617c": "69bd7ea67cde94d2b795092ea555a777",
".git/objects/92/33c3cbf3f24c7bc6c57c12f79c26f449e3a835": "767546678744c17570915f215b439619",
".git/objects/3e/fcef848787c9effe25c4d36fc457fa25b02c08": "a828c94c7fabaac7ec253380cfdb9c71",
".git/objects/50/02c7db99e0ae305a062a79143c19bea02ab9fb": "42c7628a9a45e8a71c2b9262dfebcea0",
".git/objects/68/26309a4b7fa86c9adbbb011c6884e378074b1f": "5b317c9554eab1a375b2dc81b9cedd65",
".git/objects/57/140192e3ccfe2040c67e6bb85d252df742d45c": "4971369364c91bbbd0145cba7ca18476",
".git/objects/57/fd8ec58666c7027b4158c29d7dfd3596118e5c": "48dd9fef537d82bc19d0080ee404d30f",
".git/objects/6f/79a6aee89981c6c2d5895d66e4f8fd03552f53": "2961f5d7421de44b886bcf6fe27ba7bc",
".git/objects/03/5b2eba85184b2b4e662d4158b4dd3bf3fe50c9": "68ec4e5effc9f2c2307a8d5f8f22e5ce",
".git/objects/9b/f569ad6eb2a05d87ac0fe3763e1af0d3b1c528": "7b74607d1268ee5c18a4f53fabfaea4a",
".git/objects/04/ecf98a8178b3edf357d9d3efeca78bac9dcaf4": "5097532694bc4647181fc36e0f25b350",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/56/7ac89859210f0fa5ebb4350747f89f1dbb654f": "6da9e32498a8b83b78e0c54e230fb66a",
".git/objects/56/1de5339e504f219b6a4f48fc0a4d4ba4284769": "1ebd364c009514aa4e8f6f01caa53549",
".git/objects/51/dd381c4b76c01e21d1a164bc58c7293b1514f4": "f6db93ca7613bf0eb38e699038c66630",
".git/objects/67/000d1a9cd40b169b522c6568e303447c8c198a": "3b3e1c290bc6aa7205803b660fe9548d",
".git/objects/67/61f2c9788bcaa7f3dd9e3aee4eb24abdc5ca4d": "8fa4a9124b62f130e261d3cfe8ffd409",
".git/objects/60/605aab6b715f0ecbd836179b160c7d8280fa0e": "055c397d8d119c752b7f52df0b5640a5",
".git/objects/34/7702aba4f1412ae05db86514d7c0d5eec371e7": "084b8b5d91f8df7f2a3bd07658d32fed",
".git/objects/5a/11806cadf24fbd3d64103c37726379df42e29d": "81e979f0f5e9b3bc73393805464ecf5c",
".git/objects/5a/b3f9d16f9e0c9e7c3201f11c05489cb3c41b5f": "8ae70c3b9a665c74dfb2d5bcfe9e8d75",
".git/objects/9c/e65fee69067b4be65b8d02c1cf98d6ab563cb8": "f3cfadd17ef8c488fd7a4c80b643a521",
".git/objects/a3/4117dc296b28b534adf5ab219fa430430b3dc3": "aec1e8c24ef2b70ad79733ae32de6908",
".git/objects/d9/34a9c56a1007e29d07acf4848643a1e6eb5f5f": "ec66b37c9ed27142a998a8297d893f41",
".git/objects/ac/8f5966f29b1446b31e4e18467472c209e58385": "f5b8d801049f267991e8496ff57eb609",
".git/objects/d7/e3c05ab3b3b417e94bc156f46b759f0370eeea": "1df3fcc2f4f32456185f6bf7509e52cf",
".git/objects/d0/ed8f8f5610fd05efef252699911a8571035046": "82019129f77bc259966066d386cb9c66",
".git/objects/be/8f906d8bf49e73dc5bf1fa377e4e7dbf5aa6c0": "3debe245f85c71982b2fbc701de54459",
".git/objects/bd/0d3af33c778326a6b0d1fd906a97d129a4d3ef": "6c477b6507a5a04663d987c5f8374d45",
".git/objects/d1/12add6617ca38597d4c72cfaec0d46f73d7aab": "db337e2f8c180e708ce77ae9a18ea736",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/05b03a579efdcc04f2b5c26154f632bf24106a": "3504850f3a7b0dac47535d8930a49c0d",
".git/objects/d6/42431b4571ad95cc6db6df13033166464eade9": "5f766a9617e58e5f936a3f5fdcb545b5",
".git/objects/ae/2805fd1ee99aa6151db089fc4af4edb0b10114": "ac437696f740f7b0456db0ed1e857126",
".git/objects/ab/220e87f3d09c02d2ba97eb96fc5f6f1b0d8308": "a807f7798ec0ed25d6e841bc591e7ad7",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/ff49433ff42ac14ecf05507f7423e29f01632e": "43cbb7ec6d25b6232c2ca74bc94f5d3f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/fcca282e12ae3fad8277d30936eee9e830816b": "7438b28df41f148279be48b8a5447a72",
".git/objects/eb/a22c00605c57998741b5dc8091621721116714": "d75727b21e557b989c0ee1f76ce2c459",
".git/objects/c0/4444ed661864c9ca12d57d6a591d13d4a02c5b": "101a2cd8fb89a69f9fdd61d510dd06b5",
".git/objects/fc/558251284952ff645b03a4f22bb6b09c24da28": "49fe7b3955414211c21870f395636db7",
".git/objects/f2/659c27a3c74ddb206228847c6e64e855dba644": "2793d1590e07da773853b7a0baab0777",
".git/objects/fe/595076086fca345ad2fb8431ddc366901710de": "24b337f381fc9caa6dc7c97b66b0a510",
".git/objects/fb/c3e6bf4ce87347b58d71348eae2237b54f90b2": "1be90dbf72248dcc3c8b2c617f135d9d",
".git/objects/4b/579ae371f83f7ee7c1b4bf02eb9dee84e496e7": "49dd2bbb1a24d7a12cc76012edc33825",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/7d/a06a2762529a96f5eb5c13b144141fff1055e9": "91ba242f4d4bdd47001f86a50eeb9fac",
".git/objects/7c/7da50213cbb6b168a4fe962c01acfca96ac4a5": "1056a78ca224fd9fb142d9c61908f9f7",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/42/5e05c84f457e53691678fea02fbf8d60e75350": "dcdb08f34a177d49b273d382701929c7",
".git/objects/45/aebb74ca8af7e48c7b1433682370e9b18c1c31": "d108b32b399596f8b455a70f01a27e26",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/80/6be71fef26015ea7db9983b0a1bf85f634674d": "beb87dcad498e141aee4eade29f6142f",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/7b/417d9781038585d431d37093bce6f7f5b5fc71": "02aec521974087bfd36677627ab7b7cd",
".git/objects/8f/255b757541a9b1a712f9a3a856ba9694058146": "406c9e2a8f96d04c469f3b320e8c8713",
".git/objects/10/5c8c1f3959bb4caa49c7e0abfe396449adc39c": "dd566f3a3fdbdae85c551b07007dcbf8",
".git/objects/4c/bf846ef7c29d56d592e96893fc811bcebe3ceb": "a1a3dd54bb7ce4fdf98501ca5bde4769",
".git/objects/81/457c3740066f7ece578aa36d5d240250b8b0bc": "a26cbf6d4bff9f2f5fd4dd7e65ef7bea",
".git/objects/72/f831c32089256cb9b177f5afd05484814593d4": "2116dc1f7dc46fdad69529e220cac13b",
".git/objects/72/db26cca1ff923c781eb8cb9b51e8de89a85e7d": "c68c88f93dbfa0c5d5c97196ffbcb59b",
".git/objects/72/82dd3317d76f7d5b8eed1278670c764f812317": "7b2b3465cb73c8bee8549cf6f5349198",
".git/objects/43/a4ae02f0a849047d56119e01991c9109a1c840": "2bb92b897924a959eaa161c7dfac8857",
".git/objects/88/85e4d735a4a6b2ac5f8adb56ae256be2611c99": "5c3cedcb799002003108d90f7c77a83c",
".git/objects/6b/28d17c9a39b3a67c71a2f608dc2c9b00c7e7cc": "8ed8e6a9adcf5fdcc8f3155141e50f56",
".git/objects/07/328a2e4c722fcf5fac610856e64eca59f9c86b": "eb58094e31aff3238f2b95b185ff840e",
".git/objects/00/cb93b65b54d0872c7a3f0c07b35b83023550b6": "7e7d17e8ea5634f1c272c10ed150a7fe",
".git/objects/6e/55c9091d6c5de3dffa35482e457ece6acfbc03": "4b368e6ed2a20c97f3bafb6490c23e8c",
".git/objects/5c/287d70b0e34ca6b3505b81843d5d7af09ca41c": "dbaa27962184eba7019390e8de923548",
".git/objects/09/e5d4a540cf1ab6e4589f600681ffd1737d839a": "5109d991e201f790446005d902ba0e78",
".git/objects/31/1feb94b9fc5223aa59ffdb74a02d21e84b7994": "307d83607e4005954c8236305344cbe7",
".git/objects/65/27c5ddc2384b2f57a881bf824b901ff68f2324": "f137c0a469c2194506f5bb2b6b7a0d11",
".git/objects/96/2c21aee0acdcd5503c616269a3649009ae8217": "c9b8ee951103dd8e63907da43c227042",
".git/objects/54/4de2e55f211ee1c55a66928c5c01cf7a6f2e40": "91f48944acd9ad8d13775c0811c27140",
".git/objects/3f/ffd5a7a36c0a8f7d5d583628ebed02cc18608d": "40af4fd3b28c0e97e5a9a53f9d1419cc",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/5e/09c56d86948b4427fe1707669af610d5e8a92e": "5d04622a11c08a6cfd4b75e747682128",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/6d/1e003ed30fb1b1fdc1242834fc54920f505971": "f6cc0c8c32891b5c8f249732b5525465",
".git/objects/52/f776e2ca939ccfd21af57bf2a9523ddf569b1f": "2f61b925df3ed07f776377da3651c999",
".git/objects/55/b52bfbf0259b3ac452aafee0cf08d7175e99de": "545e3968b27a6f7c1580fbef5e8f7525",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/d3/f6ea03a8427cb29c3c34acdf11dcce31873420": "162e057456fbd2011a7775e1fca38254",
".git/objects/ba/338c12564652f502fb0479f655926e860a980c": "c49f4a0b0549116f21d7019a01e42709",
".git/objects/ba/673a4ea46523b181df4cc4132a902d8a3b2546": "1762a04e6accd297c38461e1d8e7405a",
".git/objects/a7/5090428fb19045b484492bd9fe1e506284a1a0": "10ac27ed281c222b3c4ca424cd7b738a",
".git/objects/d2/50f670e4d5ba0a728553dd2f48f2138ead75cb": "71f3cbb414b7f1c62629d83eeada05b7",
".git/objects/af/5ed5a4344728afe9bf3e71940369bc3d5fd7f5": "4b9f5df479a390f03c4b768475220c8c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/3d5cfbf212b7e1352be4755ea9a819af570fc2": "14ffba937971a2675a78ca10eb2c1900",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/33726b916607bf88941f57bef0f522bf0d95c3": "b1574a55ce75942a174ff46bcfe25938",
".git/objects/ef/b9a0ac7c62803edc3a58f51a11877cde47c210": "0328c6295c3cb4b5f10339ac21ab9322",
".git/objects/c3/3fac90a877e857f12f201db6fad930a6794aff": "f24984c155546064e3f6de27a2ebb0d3",
".git/objects/c4/c3105f21bdbac1e836b5dbc25f685767962719": "7c096dc41f324498d533bd855d8042e6",
".git/objects/ea/abfadd781ab1c68259e3fc1d9dd5c5619321c3": "034ef44de5551fb41c8bc8aea280238e",
".git/objects/ea/828a840eaec0cecbe9b0f9e6a82a61e3d2eb39": "791e42d26a58599449656e1ddef31b59",
".git/objects/e1/81bddb544052bde5296780c85f6a0249e57e22": "1d9380513d00707d07f48b46201c6932",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/f9/1b9a7aa2132cfa2bce749f0db50a276a5e630c": "5e46c234a75d73566822324feb49b5b3",
".git/objects/fa/21a7cac8e7f263a40bcd185f3feeb9e73efc98": "50f1c0d924bf92d2636f80674d5ae2a7",
".git/objects/c2/25b301e82fd11c71e2dde4b3888ce6e3584645": "292dc8d2c8b86a5302959b2f53c9dab7",
".git/objects/e9/612cb7465fcd9fdd569d9270487e33df3d65d1": "e096653e52adefb19fbe11e496d32f05",
".git/objects/f1/e9d62224097a14daa48fbada40b890192df18e": "97c39502c06c80cdd79ced010cbffea2",
".git/objects/e7/b4defcbeaef5f06a63d68121138822bcea5548": "9d183fecd79ba2e02334f3203e4548a6",
".git/objects/cb/5283dbfe43f4f9b17d1617ef29b51d0a154ba6": "28e43ec34c11116bd8797df81a784493",
".git/objects/f8/1ead66df769733f63de7be91845c81dfde40e1": "af9f95c5348b013f52704a3ff077b25a",
".git/objects/e0/2834c2cb1be33fc0f4e416126ccdb4092df985": "e848f76574f32d688412ffffc7abcf74",
".git/objects/e0/3ffa5c3e82cb88abe57140c6baf994bbb18c69": "6a5e4785f0c078bebd2bf11137c8270d",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/bfee18582f636fa2c983a40c5d4db11045074d": "5f3a7fa17e4fa27cfcbf2e7b60ada071",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/e03ad61bf76c5a4924048c3e95ba5d5bdf6a6e": "7a88c584a89233daf02b451078a3b37a",
".git/objects/2d/35e26a9efb4104f9383ed3492cb28bafc32e19": "f26877868f1ec5b9d83a7c00b7329284",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/1b/6f9239238fe9dffc873cde3db2c1769439f473": "a1ed13676930431e868cdb59f8e2ef02",
".git/objects/1b/5c8198b429b63877350aa25bd735843994b165": "361481603b18ef646ce07d7fba15e67b",
".git/objects/84/e3a7928d5182cc4cbe27a208ce19f9d5a7c929": "ee557cefe1ca8270d02fbfc506de2628",
".git/objects/24/8c1a4177063e14a7c479ebc950a5c27df326e2": "a344dc9d9e6368ca672e89af1a5fe03d",
".git/objects/4f/5147b5d56f133fd79f36d3968fb912d32341ef": "87a555271ca899c70709ddceb06de549",
".git/objects/15/1ed6879d5de0ed694afe725403371c19f177a4": "81760624fc6d92a8eb08afdfc82c99d8",
".git/objects/15/c3b28ef8c6f96e382b1b91b0e20a04695e7601": "8035bc5d6455e8fb6cde9a4ee9bda1ea",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/85/59d0a081e4fcdc969685066e438010d762e7c2": "80eed0e3079228088a5e17d45bf5e52f",
".git/objects/85/f2cac7ccc5c256cc45b0c2465465f03a0d62fe": "5476f3d619712fa3d257156b404f8399",
".git/objects/85/ad88679513f3e1600e744ce8659ff3051b6165": "7c919f5ed06d952a5f717180827388d6",
".git/objects/71/27a25f4fa6b33df541a3801c951fcbb661656f": "2512d983a6e6fd2f4f66101ee8f81a90",
".git/objects/76/1125fc7cd4b0c177056613dbb04674c0b41fc1": "3d790ccf8991edd0d4dde103fea5aa56",
".git/objects/82/96738bd8e370ba363a0f97fe0cb1e5d54e98d7": "d781bf55c751020ff88d47758f4e8103",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/2e/203a3ba81e7c01d82c619fe54cda90693a0139": "fe2a3fb0ed0b0a85ba8aceb9b3b3fca2",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/13/41f48a8064aec4a89afb36b74da458239255bd": "6aa6de31e3deed9ec64b6900bdf6c643",
".git/objects/7f/8fe27daf10ff50943f8692e5d0ffbc49fd2f53": "f493f7ceece773681d221010dcd4d7f5",
".git/objects/7a/55658e00439c4abdc6da15f3755285e49a44c1": "e7c111e397ad0890c01f91512de5636d",
".git/HEAD": "643637979e7129b8c5da81ec9243ce92",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e01f93d58dac6ead3240ed539d73cdaf",
".git/logs/refs/heads/portfolio": "fb5777c5ca2e5548af7aaf3e147558f1",
".git/logs/refs/remotes/origin/portfolio": "d2accbd448a16f6a2b409735c2271aaf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/portfolio": "eb0ff6f9b0ebefc50a5eb5ad4f69f92f",
".git/refs/remotes/origin/portfolio": "0c8c2e1c62706d568152ff88ae1cea75",
".git/index": "8b770ff4959e4b0d2d671569b162e40e",
".git/COMMIT_EDITMSG": "22cab69bca05d296a2d779a52cdee643",
".git/FETCH_HEAD": "f8edc52e79a0b1084d2ca14e6fa1b619",
"assets/AssetManifest.json": "a86bd8173cce38590a4788fb7f47e6b3",
"assets/NOTICES": "76e77aa23d1a832cd89fa27db1a6f3d1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "738587205fd955816726ecf0f30cf4e5",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/repo/my_download.jpg": "054038fbb3d72de0dbbe3477dfe56d8e",
"assets/repo/github.png": "d47e91241f86cbff791dd98533ed4d06",
"assets/repo/dreamfilm.png": "852678078b9d6d10cd26fe9eb1491dc1",
"assets/repo/clubsandwich.jpg": "c006aae3966253f73bb06238eee72457",
"assets/repo/school_apk_img.png": "5b9fb87caf29f62f3e6294bccf07c017",
"assets/repo/my_profile.jpg": "01d0f0ba9f144ba5c00f114a346df466",
"assets/repo/water.png": "4d948bb9c57806dc6ab87b25a90a0e40",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
