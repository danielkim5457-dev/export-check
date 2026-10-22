// 자동 생성: rules/*.yaml · data/sample/sample_products.json (가상 샘플)
export const RULES = {
  "US": [
    {
      "id": "US-FCC-15",
      "title": "FCC Part 15 · 전자파",
      "category": "certification",
      "basis": "47 CFR Part 15",
      "url": "https://www.ecfr.gov",
      "document": "fcc_report"
    },
    {
      "id": "US-UL",
      "title": "전기 안전 시험 (권장)",
      "category": "certification",
      "basis": "OSHA NRTL 인증 시험",
      "url": "https://www.osha.gov",
      "needs_review": true
    },
    {
      "id": "US-FCM",
      "title": "식품 접촉 재질",
      "category": "chemical",
      "basis": "21 CFR 174-178",
      "url": "https://www.ecfr.gov",
      "document": "fda_fcm_test",
      "when": {
        "food_contact": true
      }
    },
    {
      "id": "US-P65",
      "title": "Prop 65 경고 문구",
      "category": "labeling",
      "basis": "27 CCR §25600",
      "url": "https://oehha.ca.gov",
      "needs_review": true
    },
    {
      "id": "US-BATT",
      "title": "리튬 배터리 운송 시험 (UN38.3)",
      "category": "document",
      "basis": "49 CFR 173.185",
      "url": "https://www.ecfr.gov",
      "document": "un383_report",
      "when": {
        "battery": true
      }
    },
    {
      "id": "US-COO",
      "title": "원산지 표시",
      "category": "labeling",
      "basis": "19 CFR Part 134",
      "url": "https://www.ecfr.gov",
      "document": "label_photo"
    }
  ],
  "EU": [
    {
      "id": "EU-LVD",
      "title": "CE · 저전압",
      "category": "certification",
      "basis": "Directive 2014/35/EU",
      "url": "https://eur-lex.europa.eu",
      "document": "lvd_report"
    },
    {
      "id": "EU-EMC",
      "title": "CE · 전자파",
      "category": "certification",
      "basis": "Directive 2014/30/EU",
      "url": "https://eur-lex.europa.eu",
      "document": "emc_report"
    },
    {
      "id": "EU-ROHS",
      "title": "RoHS 유해물질",
      "category": "chemical",
      "basis": "Directive 2011/65/EU",
      "url": "https://eur-lex.europa.eu",
      "document": "rohs_report"
    },
    {
      "id": "EU-REACH",
      "title": "REACH 고우려물질",
      "category": "chemical",
      "basis": "Regulation (EC) 1907/2006",
      "url": "https://eur-lex.europa.eu",
      "needs_review": true
    },
    {
      "id": "EU-FCM",
      "title": "식품 접촉 재질",
      "category": "chemical",
      "basis": "Regulation (EU) 10/2011",
      "url": "https://eur-lex.europa.eu",
      "document": "eu_fcm_test",
      "when": {
        "food_contact": true
      }
    },
    {
      "id": "EU-BATT",
      "title": "배터리 규정",
      "category": "document",
      "basis": "Regulation (EU) 2023/1542",
      "url": "https://eur-lex.europa.eu",
      "when": {
        "battery": true
      },
      "needs_review": true
    },
    {
      "id": "EU-DOC",
      "title": "EU 적합 선언서",
      "category": "document",
      "basis": "Decision 768/2008/EC",
      "url": "https://eur-lex.europa.eu",
      "document": "eu_doc"
    },
    {
      "id": "EU-WEEE",
      "title": "WEEE 표시",
      "category": "labeling",
      "basis": "Directive 2012/19/EU",
      "url": "https://eur-lex.europa.eu",
      "document": "weee_label"
    }
  ],
  "JP": [
    {
      "id": "JP-PSE",
      "title": "PSE · 전기용품안전법",
      "category": "certification",
      "basis": "電気用品安全法",
      "url": "https://www.meti.go.jp",
      "document": "pse_report",
      "needs_review": true
    },
    {
      "id": "JP-PSE-BATT",
      "title": "PSE · 리튬이온 축전지",
      "category": "certification",
      "basis": "電気用品安全法 (特定以外)",
      "url": "https://www.meti.go.jp",
      "document": "pse_battery",
      "when": {
        "battery": true
      }
    },
    {
      "id": "JP-FOOD",
      "title": "식품위생법 재질 시험",
      "category": "chemical",
      "basis": "食品衛生法 · 器具及び容器包装",
      "url": "https://www.mhlw.go.jp",
      "document": "jp_food_test",
      "when": {
        "food_contact": true
      }
    },
    {
      "id": "JP-LABEL",
      "title": "일본어 표시",
      "category": "labeling",
      "basis": "家庭用品品質表示法",
      "url": "https://www.caa.go.jp",
      "document": "jp_label"
    }
  ],
  "CN": [
    {
      "id": "CN-CCC",
      "title": "CCC 강제 인증",
      "category": "certification",
      "basis": "CCC 目录 (SAMR)",
      "url": "https://www.samr.gov.cn",
      "document": "ccc_cert",
      "when": {
        "hs_prefix": [
          "8509",
          "8516",
          "8504"
        ]
      }
    },
    {
      "id": "CN-GB4806",
      "title": "식품 접촉 재질 (GB 4806)",
      "category": "chemical",
      "basis": "GB 4806 系列",
      "url": "https://www.samr.gov.cn",
      "document": "gb4806_test",
      "when": {
        "food_contact": true
      }
    },
    {
      "id": "CN-ROHS",
      "title": "중국 RoHS 표시",
      "category": "chemical",
      "basis": "SJ/T 11364",
      "url": "https://www.miit.gov.cn",
      "document": "cn_rohs"
    },
    {
      "id": "CN-LABEL",
      "title": "중국어 라벨",
      "category": "labeling",
      "basis": "GB 5296.2",
      "url": "https://www.samr.gov.cn",
      "document": "cn_label"
    }
  ],
  "IN": [
    {
      "id": "IN-CRS",
      "title": "BIS 강제 등록 (CRS)",
      "category": "certification",
      "basis": "BIS CRS 대상 목록",
      "url": "https://www.bis.gov.in",
      "document": "bis_crs",
      "when": {
        "hs_prefix": [
          "8504",
          "9405",
          "8509"
        ]
      }
    },
    {
      "id": "IN-ISI",
      "title": "BIS 안전 표준 (IS 302)",
      "category": "certification",
      "basis": "IS 302 시리즈",
      "url": "https://www.bis.gov.in",
      "needs_review": true
    },
    {
      "id": "IN-LM",
      "title": "포장 표시 (Legal Metrology)",
      "category": "labeling",
      "basis": "Legal Metrology (Packaged Commodities) Rules",
      "url": "https://consumeraffairs.nic.in",
      "document": "in_label"
    },
    {
      "id": "IN-EPR",
      "title": "전자폐기물 EPR 등록",
      "category": "document",
      "basis": "E-Waste (Management) Rules",
      "url": "https://cpcb.nic.in",
      "document": "in_epr"
    }
  ]
} as const

export const PRODUCTS = [
  {
    "id": "P001",
    "name": "휴대용 블렌더 BL-200",
    "materials": [
      "스테인리스",
      "트라이탄"
    ],
    "power": "USB-C 리튬이온 7.4V",
    "food_contact": true,
    "hs_code": "8509.40"
  },
  {
    "id": "P002",
    "name": "스마트 체중계 SC-10",
    "materials": [
      "강화유리",
      "ABS"
    ],
    "power": "AAA 건전지",
    "food_contact": false,
    "hs_code": "8423.10"
  },
  {
    "id": "P003",
    "name": "무선 충전 패드 WP-3",
    "materials": [
      "알루미늄",
      "PC"
    ],
    "power": "USB-C 9V 입력",
    "food_contact": false,
    "hs_code": "8504.40"
  },
  {
    "id": "P004",
    "name": "LED 무드등 LM-7",
    "materials": [
      "PP",
      "LED"
    ],
    "power": "USB 5V",
    "food_contact": false,
    "hs_code": "9405.21"
  },
  {
    "id": "P005",
    "name": "전동 칫솔 ET-5",
    "materials": [
      "PBT",
      "실리콘"
    ],
    "power": "리튬이온 3.7V",
    "food_contact": false,
    "hs_code": "8509.80"
  },
  {
    "id": "P006",
    "name": "미니 착즙기 JX-1",
    "materials": [
      "트라이탄",
      "스테인리스"
    ],
    "power": "AC 220V",
    "food_contact": true,
    "hs_code": "8509.40"
  },
  {
    "id": "P007",
    "name": "전기 포트 KT-9",
    "materials": [
      "스테인리스",
      "PP"
    ],
    "power": "AC 220V",
    "food_contact": true,
    "hs_code": "8516.79"
  },
  {
    "id": "P008",
    "name": "탁상 램프 DL-2",
    "materials": [
      "알루미늄",
      "LED"
    ],
    "power": "AC 어댑터 12V",
    "food_contact": false,
    "hs_code": "9405.21"
  },
  {
    "id": "P009",
    "name": "휴대용 가습기 HM-4",
    "materials": [
      "PP",
      "실리콘"
    ],
    "power": "USB-C 리튬이온 3.7V",
    "food_contact": false,
    "hs_code": "8509.80"
  },
  {
    "id": "P010",
    "name": "충전 어댑터 AD-65",
    "materials": [
      "PC"
    ],
    "power": "AC 100-240V",
    "food_contact": false,
    "hs_code": "8504.40"
  },
  {
    "id": "P011",
    "name": "주방 저울 KS-3",
    "materials": [
      "강화유리"
    ],
    "power": "CR2032",
    "food_contact": false,
    "hs_code": "8423.10"
  },
  {
    "id": "P012",
    "name": "핸디 믹서 HX-6",
    "materials": [
      "스테인리스",
      "ABS"
    ],
    "power": "리튬이온 7.4V",
    "food_contact": true,
    "hs_code": "8509.40"
  },
  {
    "id": "P013",
    "name": "LED 수면등 NL-1",
    "materials": [
      "실리콘",
      "LED"
    ],
    "power": "USB 5V",
    "food_contact": false,
    "hs_code": "9405.21"
  },
  {
    "id": "P014",
    "name": "무선 충전 거치대 WS-2",
    "materials": [
      "ABS"
    ],
    "power": "USB-C 9V 입력",
    "food_contact": false,
    "hs_code": "8504.40"
  },
  {
    "id": "P015",
    "name": "커피 그라인더 CG-8",
    "materials": [
      "스테인리스",
      "PP"
    ],
    "power": "AC 220V",
    "food_contact": true,
    "hs_code": "8509.40"
  },
  {
    "id": "P016",
    "name": "전동 면도기 SV-3",
    "materials": [
      "스테인리스",
      "ABS"
    ],
    "power": "리튬이온 3.7V",
    "food_contact": false,
    "hs_code": "8510.10"
  },
  {
    "id": "P017",
    "name": "보온 텀블러 히터 TH-1",
    "materials": [
      "스테인리스"
    ],
    "power": "USB 5V",
    "food_contact": true,
    "hs_code": "8516.79"
  },
  {
    "id": "P018",
    "name": "스마트 플러그 SP-1",
    "materials": [
      "PC"
    ],
    "power": "AC 220V",
    "food_contact": false,
    "hs_code": "8536.69"
  },
  {
    "id": "P019",
    "name": "휴대용 선풍기 FN-5",
    "materials": [
      "ABS"
    ],
    "power": "리튬이온 3.7V",
    "food_contact": false,
    "hs_code": "8414.51"
  },
  {
    "id": "P020",
    "name": "전기 거품기 MF-2",
    "materials": [
      "스테인리스",
      "PP"
    ],
    "power": "AA 건전지",
    "food_contact": true,
    "hs_code": "8509.40"
  }
]
