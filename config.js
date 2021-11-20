var CONFIG = {
 "data": {
  "_lastModified": 1637408469037,
  "hasNameColumn": false,
  "lastModified": 1637408469037,
  "nameColumnPosition": 0,
  "noCache": true,
  "path": "./data/Book5.csv",
  "reader": "ext-csv",
  "sheet": "",
  "timeInColumns": true,
  "ddfPath": "./data/Book5.csv"
 },
 "locale": {
  "filePath": "assets/translation/",
  "id": "en"
 },
 "state": {
  "entities": {
   "autoconfig": {
    "excludeIDs": [
     "tag"
    ],
    "type": "entity_domain"
   },
   "dim": "group",
   "filter": {},
   "show": {},
   "showFallback": {},
   "showItemsMaxCount": null,
   "skipFilter": false
  },
  "entities_colorlegend": {
   "autoconfig": {
    "excludeIDs": [
     "tag"
    ],
    "type": "entity_domain"
   },
   "dim": "group",
   "filter": {},
   "show": {},
   "showFallback": {},
   "showItemsMaxCount": null,
   "skipFilter": false
  },
  "marker": {
   "allowSelectMultiple": true,
   "axis_x": {
    "allow": {
     "scales": [
      "linear",
      "log"
     ]
    },
    "autoconfig": {
     "type": "measure"
    },
    "data": "data",
    "domainMax": null,
    "domainMin": null,
    "fixBaseline": null,
    "scaleType": "linear",
    "syncModels": [],
    "use": "indicator",
    "which": "CPU 2018 Usage",
    "zoomedMax": null,
    "zoomedMin": null
   },
   "color": {
    "allow": {
     "scales": [
      "linear",
      "log",
      "genericLog",
      "time",
      "pow",
      "ordinal"
     ]
    },
    "autoconfig": {},
    "data": "data",
    "palette": {
     "0": "#4cd843",
     "1": "#e83739",
     "2": "#ff7f00",
     "3": "#c027d4",
     "4": "#d66425",
     "5": "#0ab8d8",
     "6": "#bcfa83",
     "7": "#ff8684",
     "8": "#ffb04b",
     "9": "#f599f5",
     "10": "#f4f459",
     "11": "#7fb5ed",
     "_default": "#ffb600"
    },
    "paletteHiddenKeys": [],
    "paletteLabels": null,
    "scaleType": "ordinal",
    "spaceRef": "entities",
    "syncModels": [
     "marker_colorlegend"
    ],
    "use": "property",
    "which": "group"
   },
   "highlight": [],
   "label": {
    "autoconfig": {
     "includeOnlyIDs": [
      "name"
     ],
     "type": "string"
    },
    "data": "data",
    "scaleType": "ordinal",
    "syncModels": [],
    "use": "property",
    "which": "group"
   },
   "limit": 1000,
   "opacityHighlightDim": 0.1,
   "opacityRegular": 1,
   "opacitySelectDim": 0.3,
   "select": [],
   "space": [
    "entities",
    "time"
   ],
   "superHighlight": []
  },
  "marker_colorlegend": {
   "allowSelectMultiple": true,
   "highlight": [],
   "hook_geoshape": {
    "data": "data",
    "syncModels": [],
    "use": "property",
    "which": "shape_lores_svg"
   },
   "hook_rank": {
    "data": "data",
    "syncModels": [],
    "use": "property",
    "which": "rank"
   },
   "label": {
    "data": "data",
    "syncModels": [],
    "use": "property",
    "which": "name"
   },
   "limit": 1000,
   "opacityHighlightDim": 0.1,
   "opacityRegular": 1,
   "opacitySelectDim": 0.3,
   "select": [],
   "space": [
    "entities_colorlegend"
   ],
   "superHighlight": []
  },
  "time": {
   "autoconfig": {
    "type": "time"
   },
   "delay": 150,
   "delayThresholdX2": 90,
   "delayThresholdX4": 45,
   "dim": "time",
   "end": "2021-10",
   "endBeforeForecast": "2021-10",
   "endOrigin": null,
   "endSelected": "2021-10",
   "format": {
    "data": null,
    "ui": null
   },
   "immediatePlay": true,
   "loop": false,
   "offset": 0,
   "pauseBeforeForecast": true,
   "playable": true,
   "playing": false,
   "record": false,
   "round": "round",
   "showForecast": true,
   "start": "2019-01",
   "startOrigin": null,
   "startSelected": "2019-01",
   "step": 1,
   "unit": "month",
   "value": "2021-10"
  }
 },
 "ui": {
  "buttons": [
   "colors",
   "find",
   "moreoptions",
   "presentation",
   "sidebarcollapse",
   "fullscreen"
  ],
  "chart": {
   "showForecastOverlay": false
  },
  "datawarning": {
   "doubtDomain": [],
   "doubtRange": []
  },
  "dialogs": {
   "dialog": {
    "find": {
     "enableSelectShowSwitch": true
    }
   },
   "moreoptions": [
    "opacity",
    "speed",
    "colors",
    "presentation",
    "technical",
    "about"
   ],
   "popup": [
    "timedisplay",
    "colors",
    "find",
    "moreoptions"
   ],
   "sidebar": [
    "timedisplay",
    "colors",
    "find"
   ]
  },
  "presentation": true,
  "sidebarCollapse": false,
  "splash": false
 },
 "chartType": "BarRankChart"
};