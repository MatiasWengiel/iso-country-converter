const codeMap = new Map([
  ["AX", 248],
  ["ZW", 716],
  ["ZM", 894],
  ["YE", 887],
  ["EH", 732],
  ["WF", 876],
  ["VI", 850],
  ["VG", 92],
  ["VN", 704],
  ["VE", 862],
  ["VU", 548],
  ["UZ", 860],
  ["UY", 858],
  ["US", 840],
  ["UM", 581],
  ["GB", 826],
  ["AE", 784],
  ["UA", 804],
  ["UG", 800],
  ["TR", 792],
  ["TV", 798],
  ["TC", 796],
  ["TM", 795],
  ["TN", 788],
  ["TT", 780],
  ["TO", 776],
  ["TK", 772],
  ["TG", 768],
  ["TL", 626],
  ["TH", 764],
  ["TZ", 834],
  ["TJ", 762],
  ["TW", 158],
  ["SY", 760],
  ["CH", 756],
  ["SE", 752],
  ["SJ", 744],
  ["SR", 740],
  ["SD", 729],
  ["LK", 144],
  ["ES", 724],
  ["SS", 728],
  ["GS", 239],
  ["ZA", 710],
  ["SO", 706],
  ["SB", 90],
  ["SI", 705],
  ["SK", 703],
  ["SX", 534],
  ["SG", 702],
  ["SL", 694],
  ["SC", 690],
  ["RS", 688],
  ["SN", 686],
  ["SA", 682],
  ["ST", 678],
  ["SM", 674],
  ["WS", 882],
  ["VC", 670],
  ["PM", 666],
  ["MF", 663],
  ["LC", 662],
  ["KN", 659],
  ["SH", 654],
  ["BL", 652],
  ["RE", 638],
  ["RW", 646],
  ["RU", 643],
  ["RO", 642],
  ["QA", 634],
  ["PR", 630],
  ["PT", 620],
  ["PL", 616],
  ["PN", 612],
  ["PH", 608],
  ["PE", 604],
  ["PY", 600],
  ["PG", 598],
  ["PA", 591],
  ["PS", 275],
  ["PW", 585],
  ["PK", 586],
  ["OM", 512],
  ["NO", 578],
  ["MP", 580],
  ["MK", 807],
  ["NF", 574],
  ["NU", 570],
  ["NG", 566],
  ["NE", 562],
  ["NI", 558],
  ["NZ", 554],
  ["NC", 540],
  ["NL", 528],
  ["NP", 524],
  ["NR", 520],
  ["NA", 516],
  ["MM", 104],
  ["MZ", 508],
  ["MA", 504],
  ["MS", 500],
  ["ME", 499],
  ["MN", 496],
  ["MC", 492],
  ["MD", 498],
  ["FM", 583],
  ["MX", 484],
  ["YT", 175],
  ["MU", 480],
  ["MR", 478],
  ["MQ", 474],
  ["MH", 584],
  ["MT", 470],
  ["ML", 466],
  ["MV", 462],
  ["MY", 458],
  ["MW", 454],
  ["MG", 450],
  ["MO", 446],
  ["LU", 442],
  ["LT", 440],
  ["LI", 438],
  ["LY", 434],
  ["LR", 430],
  ["LS", 426],
  ["LB", 422],
  ["LV", 428],
  ["LA", 418],
  ["KG", 417],
  ["KW", 414],
  ["KR", 410],
  ["KP", 408],
  ["KI", 296],
  ["KE", 404],
  ["KZ", 398],
  ["JO", 400],
  ["JE", 832],
  ["JP", 392],
  ["JM", 388],
  ["IT", 380],
  ["IL", 376],
  ["IM", 833],
  ["IE", 372],
  ["IQ", 368],
  ["IR", 364],
  ["ID", 360],
  ["IN", 356],
  ["IS", 352],
  ["HU", 348],
  ["HK", 344],
  ["HN", 340],
  ["VA", 336],
  ["HM", 334],
  ["HT", 332],
  ["GY", 328],
  ["GW", 624],
  ["GN", 324],
  ["GG", 831],
  ["GT", 320],
  ["GU", 316],
  ["GP", 312],
  ["GD", 308],
  ["GL", 304],
  ["GR", 300],
  ["GI", 292],
  ["GH", 288],
  ["DE", 276],
  ["GE", 268],
  ["GM", 270],
  ["GA", 266],
  ["TF", 260],
  ["PF", 258],
  ["GF", 254],
  ["FR", 250],
  ["FI", 246],
  ["FJ", 242],
  ["FO", 234],
  ["FK", 238],
  ["ET", 231],
  ["SZ", 748],
  ["EE", 233],
  ["ER", 232],
  ["GQ", 226],
  ["SV", 222],
  ["EG", 818],
  ["EC", 218],
  ["DO", 214],
  ["DM", 212],
  ["DJ", 262],
  ["DK", 208],
  ["CI", 384],
  ["CZ", 203],
  ["CY", 196],
  ["CW", 531],
  ["CU", 192],
  ["HR", 191],
  ["CR", 188],
  ["CK", 184],
  ["CG", 178],
  ["CD", 180],
  ["KM", 174],
  ["CO", 170],
  ["CC", 166],
  ["CX", 162],
  ["CN", 156],
  ["CL", 152],
  ["TD", 148],
  ["CF", 140],
  ["KY", 136],
  ["CA", 124],
  ["CM", 120],
  ["KH", 116],
  ["CV", 132],
  ["BI", 108],
  ["BF", 854],
  ["BG", 100],
  ["BN", 96],
  ["IO", 86],
  ["BR", 76],
  ["BV", 74],
  ["BW", 72],
  ["BA", 70],
  ["BQ", 535],
  ["BO", 68],
  ["BT", 64],
  ["BM", 60],
  ["BJ", 204],
  ["BZ", 84],
  ["BE", 56],
  ["BY", 112],
  ["BB", 52],
  ["BD", 50],
  ["BH", 48],
  ["BS", 44],
  ["AZ", 31],
  ["AT", 40],
  ["AU", 36],
  ["AW", 533],
  ["AM", 51],
  ["AR", 32],
  ["AG", 28],
  ["AQ", 10],
  ["AI", 660],
  ["AO", 24],
  ["AD", 20],
  ["AS", 16],
  ["DZ", 12],
  ["AL", 8],
  ["AF", 4],
]);

export const alpha2ToNumeric = (countryCode: string): number | undefined => {
  if (countryCode.length !== 2) return undefined;

  return codeMap.get(countryCode);
};
