/* Generated from the bundled Immersive Translate CRX reference (release 1.30.2). Do not edit individual rules here. */
globalThis.LiteTranslateImmersiveRules = [
  {
    "id": "windhawk",
    "matches": "windhawk.net/mods",
    "atomicBlockSelectors.add": [
      "[data-testid=\"mod-card-title\"]",
      "[data-testid=\"mod-card-title\"] > span"
    ],
    "injectedCss.add": [
      "[data-testid=\"mod-card-title\"] + .immersive-translate-target-wrapper > br { display: none !important; }"
    ]
  },
  {
    "id": "isSubtitleBuilder",
    "pageType": "subtitleBuilder",
    "selectorMatches": [
      "meta[name='immersive-translate-subtitle-builder'][content='true']"
    ],
    "matches": [
      "https://*.immersivetranslate.*/subtitle*",
      "https://*.immersivetranslate.*/*/download-subtitle",
      "http://localhost:38001/*/download-subtitle*",
      "https://*.immersivetranslate.*/*/subtitle*",
      "https://immersivetranslate.com/*/document/subtitle/*",
      "https://immersivetranslate.com/*/document/download-subtitle/*"
    ],
    "pairs": {
      ".source-text": ".target-text"
    },
    "withAITitleBlockUrls": [
      "immersivetranslate.*/subtitle"
    ],
    "paragraphMinTextCount": 4,
    "paragraphMinWordCount": 2,
    "isTranslateTitle": false,
    "isInjectVersion": true,
    "isInjectMeta": true,
    "siteParagraphCacheFallback.add": {
      "enable": true
    },
    "advanceMergeConfig": [
      {
        "condition": "true",
        "advanceConfig": {
          "domReadyDetectTimeout": 0,
          "generalRule": {
            "aiBatchPolicy.add": {
              "sameTextFallback": true
            }
          }
        }
      }
    ],
    "allowInnerInvoke": true,
    "wrapperPrefix": "",
    "wrapperSuffix": "",
    "bodyRule.add": {
      "enable": false
    }
  },
  {
    "id": "pdf",
    "isPdf": true,
    "isTranslateTitle": false,
    "pageType": "pdfReader",
    "selectorMatches": [
      "meta[name='immersive-translate-pdf-viewer'][content='true']"
    ],
    "enableRichTranslate": false,
    "allowInnerInvoke": true,
    "toastErrorMinTimes": 5,
    "matches": [
      "https://app.immersivetranslate.*/pdf",
      "https://test-app.immersivetranslate.*/pdf",
      "https://app.immersivetranslate.*/pdf/*",
      "https://test-app.immersivetranslate.*/pdf/*",
      "https://immersivetranslate.com/*/document/pdf/*",
      "https://app.infread.com/pdf/*",
      "http://localhost:38001/pdf*"
    ],
    "advanceMergeConfig": [
      {
        "condition": "true",
        "advanceConfig": {
          "translationLanguagePattern.add": {
            "matches": []
          },
          "domReadyDetectTimeout": 0,
          "generalRule": {
            "aiBatchPolicy.add": {
              "sameTextFallback": true
            }
          }
        }
      }
    ],
    "siteParagraphCacheFallback.add": {
      "enable": true
    },
    "skipDynamicMarkSelectors": [
      ".immersive-translate-page",
      ".immersive-translate-page *"
    ],
    "additionalExcludeSelectors.remove": [
      "[contenteditable=\"true\"]"
    ],
    "detectParagraphLanguage": true,
    "isTranslateWhenServiceChanged": false,
    "mouseHoverHoldKey": "Off",
    "translationMode": "translation",
    "skipEditableCheck": true,
    "encodeHtmlTag": true,
    "selectors": [
      "#viewerContainer p"
    ],
    "bodyRule.add": {
      "enable": true,
      "bodySelector": "#viewerContainer",
      "articleSelector": "#viewerContainer"
    },
    "injectedCss": [
      ".immersive-translate-target-wrapper {display: contents!important;position:absolute;}",
      ".immersive-translate-target-wrapper br {display: none;!important;}",
      ".immersive-translate-target-wrapper span {position: relative;!important;}",
      ".immersive-translate-error-wrapper {padding:0px !important;margin:0px !important;}",
      ".immersive-translate-target-translation-block-wrapper {display: unset!important;}",
      ".immersive-translate-target-inner div div {border:unset!important;padding:0!important;}",
      ".immersive-translate-target-wrapper[dir='rtl'] {text-align: right;display: inline-block!important;position:unset;}"
    ],
    "globalAttributes.add": {
      "[class='textLayer']": {
        "translate": "no"
      }
    },
    "mutationExcludeContainsSelectors": [
      "font.immersive-translate-target-wrapper"
    ],
    "shareConfig.add": {
      "removeSelectors": [
        "noscript",
        "script",
        ".toolbar",
        "#sidebarContainer",
        "[class=\"page\"]",
        ".editorParamsToolbar",
        ".image-mode",
        ".im_db",
        ".im_cb",
        ".immersive-translate-error-modal-shadow-root"
      ]
    },
    "wrapperPrefix": "",
    "isInjectVersion": true,
    "isInjectMeta": true,
    "excludeSelectorsRegexes": {
      "p": [
        "/^$/"
      ]
    }
  },
  {
    "id": "isEbook",
    "isEbook": true,
    "pageType": "ebookReader",
    "isTranslateTitle": false,
    "urlChangeDelay": 200,
    "selectorMatches": [
      "meta[name='immersive-translate-ebook-viewer'][content='true']"
    ],
    "injectedCss": [
      ".immersive-translate-target-translation-block-wrapper {display:block!important;}"
    ],
    "preTranslateLimiter.add": {
      "side.enableTranslate": true,
      "header.enableTranslate": true
    },
    "excludeSelectors": [
      "#drop-target",
      "#drop-target h1",
      "#side-bar",
      "h1#side-bar-title"
    ],
    "extraInlineSelectors": [
      "span.dropcaps"
    ],
    "bodyRule.add": {
      "enable": false
    },
    "siteParagraphCacheFallback.add": {
      "enable": true
    },
    "paragraphMinTextCount": 4,
    "paragraphMinWordCount": 2,
    "blockMinTextCount": 1,
    "blockMinWordCount": 1,
    "containerMinTextCount": 1,
    "wrapperPrefix": "<br />",
    "advanceMergeConfig": [
      {
        "condition": "targetLanguage==zh-CN",
        "advanceConfig": {
          "sameLangTranslationTheme": "none"
        }
      },
      {
        "condition": "true",
        "advanceConfig": {
          "generalRule": {
            "aiBatchPolicy.add": {
              "sameTextFallback": true
            }
          }
        }
      }
    ],
    "targetWrapperTag": "span",
    "allowInnerInvoke": true
  },
  {
    "id": "isEbookBuilder",
    "matches": [
      "https://*.immersivetranslate.*/ebook/make*",
      "https://*.immersivetranslate.*/ebook/make/*",
      "https://app.infread.com/ebook/make*",
      "http://localhost:38001/ebook/make*",
      "http://localhost:3000/*/ebook-make*",
      "https://*.immersivetranslate.*/*/*/ebook-make*",
      "https://immersivetranslate.*/*/*/ebook-make*",
      "https://immersivetranslate.com/*/document/ebook-make/*"
    ],
    "preTranslateLimiter.add_v.[1.12.1]": {
      "side.enableTranslate": true,
      "header.enableTranslate": true
    },
    "siteParagraphCacheFallback.add": {
      "enable": true
    },
    "pageType": "ebookBuilder",
    "toastErrorMinTimes": 0,
    "isTranslateWhenServiceChanged": false,
    "detectParagraphLanguage": true,
    "isTranslateTitle": false,
    "targetWrapperTag": "span",
    "isInjectVersion": "true",
    "isInjectMeta": "true",
    "enableRichTranslate": true,
    "forceAutoTranslate": false,
    "allowInnerInvoke": true,
    "selectorMatches": [
      "meta[name='immersive-translate-ebook-builder'][content='true']"
    ],
    "injectedCss": [
      ".immersive-translate-target-translation-block-wrapper {display:block!important;}"
    ],
    "excludeSelectors": [
      "h1.notranslate",
      "#drop-target",
      "#drop-target h1",
      "#side-bar",
      "h1#side-bar-title",
      "#tool",
      ".Code",
      "[default-translate]"
    ],
    "bodyRule.add": {
      "enable": false
    },
    "paragraphMinTextCount": 1,
    "paragraphMinWordCount": 1,
    "blockMinTextCount": 1,
    "blockMinWordCount": 1,
    "containerMinTextCount": 1,
    "wrapperPrefix": "<br />",
    "advanceMergeConfig": [
      {
        "condition": "true",
        "advanceConfig": {
          "generalRule": {
            "aiBatchPolicy.add": {
              "sameTextFallback": true
            }
          }
        }
      },
      {
        "condition": "versionNumber<13101",
        "advanceConfig": {
          "defaultTranslationServicesOrder.remove": [
            "babelfast-pro"
          ]
        }
      },
      {
        "condition": "versionNumber>13100",
        "advanceConfig": {
          "translationServices": {
            "babelfast-pro.add": {
              "limit": 5,
              "concurrencyLimit": 5,
              "maxTextGroupLengthPerRequest": 10
            }
          }
        }
      }
    ],
    "stayOriginalTags.remove": [
      "SAMP"
    ]
  },
  {
    "id": "immersiveTranslateIosOnBoarding",
    "selectorMatches": [
      "meta[name=immersiveTranslateIosOnBoarding]"
    ],
    "initialGlobalAttributes": {
      "input#immersiveTranslateDetectedSlot": {
        "value": "true"
      }
    },
    "isInjectOptionsUrl": true,
    "isInjectVersion": true,
    "isInjectMeta": true
  },
  {
    "id": "immersiveTranslateIosOnBoardingStep1",
    "selectorMatches": [
      "meta[name=immersiveTranslateIosOnBoardingStep1]"
    ],
    "isOnBoardingPage": true,
    "isInjectOptionsUrl": true,
    "isInjectVersion": true,
    "isInjectMeta": true
  },
  {
    "id": "immersivePreview",
    "matches": [
      "https://immersivetranslate.*/preview*",
      "https://immersivetranslate.*/drafts*"
    ],
    "isInjectVersion": true,
    "isInjectMeta": true,
    "allowInnerInvoke": true,
    "waitForSelectorsTimeout": 1
  },
  {
    "id": "dash-immersive",
    "matches": [
      "https://dash.immersivetranslate.com/*",
      "http://localhost:8000/dist/userscript/options*"
    ],
    "selectors": [
      ".hello"
    ],
    "isInjectVersion": true,
    "isInjectMeta": true,
    "allowInnerInvoke": true,
    "waitForSelectorsTimeout": 1
  },
  {
    "id": "pro-pdf-immersive",
    "matches": [
      "https://*.immersivetranslate.*/pdf-pro*",
      "https://immersivetranslate.com/*/document/pdf-pro/*"
    ],
    "mainFrameSelector.add": [
      ".original-body"
    ],
    "pageType": "pdfProReader",
    "excludeSelectors": [
      ".mmd-context-menu",
      ".preview-original-body *",
      "#imt-navbar"
    ],
    "mutationExcludeSelectors.add": [
      "#imt-navbar"
    ],
    "siteParagraphCacheFallback.add": {
      "enable": true
    },
    "allowInnerInvoke": true,
    "skipIgnoreSelectors": [
      ".original-body"
    ],
    "advanceMergeConfig": [
      {
        "condition": "true",
        "advanceConfig": {
          "domReadyDetectTimeout": 0,
          "translationLanguagePattern.add": {
            "matches": []
          },
          "translationUrlPattern.add": {
            "excludeMatches": [
              "*"
            ]
          },
          "defaultTranslationServicesOrder.remove": [
            "babelfast-pro"
          ],
          "defaultTranslationServicesOrder.add_v.[1.31.1]": [
            "babelfast-pro"
          ],
          "translationServices": {
            "babelfast-pro.add_v.[1.31.1]": {
              "limit": 5,
              "concurrencyLimit": 5,
              "maxTextGroupLengthPerRequest": 10
            }
          },
          "generalRule": {
            "aiBatchPolicy.add": {
              "sameTextFallback": true
            }
          }
        }
      }
    ],
    "longBuildPageLength": 1000,
    "skipEditableCheck": true,
    "additionalExcludeSelectors.remove": [
      "[contenteditable=\"true\"]"
    ],
    "injectedCss.add": [
      ".immersive-translate-target-wrapper {white-space: unset;}",
      "[data-immersive-translate_rtl] .immersive-translate-target-translation-block-wrapper {width:100%}",
      "* {text-decoration:unset;}"
    ],
    "mutationConfig.add": {
      "buildTimeout": 1000,
      "consumeTimeout": 1000,
      "enableObserver": true
    },
    "excludeSelectorsRegexes": {
      "[class='inline-tabular'] > table > tbody > tr > td": [
        "/^[A-Z0-9\\-_.]+$/g",
        "^[0-9,]+\\s+tokens$",
        "^Up to [a-zA-Z]*\\s+\\d*$",
        "^(/[A-Z0-9\\-_.]+)+$"
      ]
    },
    "extraInlineSelectors.add": [
      ".sub-table",
      ".sub-table td",
      ".sub-table tr",
      "em br"
    ],
    "detectParagraphLanguage": true,
    "isInjectVersion": true,
    "isInjectMeta": true,
    "toastErrorMinTimes": 500,
    "waitForSelectorsTimeout": 1
  },
  {
    "id": "babelR-render",
    "selectorMatches": [
      ".babelR-offline-render"
    ],
    "excludeSelectors": [
      ".babelR-offline-reflow-container",
      ".babelR-offline-preserve-container"
    ]
  },
  {
    "id": "onboarding",
    "matches": [
      "https://onboarding.immersivetranslate.*",
      "https://*onboarding.immersivetranslate.*"
    ],
    "privacyProtocolVersion": "",
    "allowInnerInvoke": true,
    "isInjectVersion": true,
    "isInjectMeta": true,
    "waitForSelectorsTimeout": 1,
    "longBuildPageLength": 1000,
    "blockMinTextCount": 0,
    "blockMinWordCount": 0,
    "pageLangDetectWeight": {
      "html": 3
    },
    "enableSiteAutoTranslate": false,
    "toastErrorMinTimes": 5,
    "detectParagraphLanguage": true,
    "advanceMergeConfig": [
      {
        "condition": "true",
        "advanceConfig": {
          "domReadyDetectTimeout": 0,
          "pcFloatBall.add": {
            "enableSidePanel": false
          }
        }
      }
    ]
  },
  {
    "id": "picscheme",
    "matches": [
      "picscheme.org",
      "www.picscheme.org"
    ],
    "excludeSelectors.add": [
      "header nav",
      "#mobile_menu"
    ]
  },
  {
    "id": "immersive-word",
    "matches": [
      "https://*.immersivetranslate.*/word*",
      "https://*.immersivetranslate.*/*/word*",
      "https://immersivetranslate.com/*/document/word/*"
    ],
    "excludeSelectors.add": [
      "#imt-navbar *",
      ".preview-original-body *"
    ],
    "mutationExcludeSelectors.add": [
      "#imt-navbar"
    ],
    "injectedCss.add": [
      ".docx-wrapper *{line-height:unset!important;}"
    ],
    "skipIgnoreSelectors": [
      ".original-body"
    ],
    "mainFrameSelector.add": [
      ".original-body"
    ],
    "blockMinTextCount": 0,
    "blockMinWordCount": 0,
    "paragraphMinWordCount": 0,
    "paragraphMinTextCount": 0,
    "detectParagraphLanguage": true,
    "allowInnerInvoke": true,
    "isInjectVersion": true,
    "isInjectMeta": true,
    "siteParagraphCacheFallback.add": {
      "enable": true
    },
    "advanceMergeConfig": [
      {
        "condition": "true",
        "advanceConfig": {
          "domReadyDetectTimeout": 0,
          "defaultTranslationServicesOrder.remove": [
            "babelfast-pro"
          ],
          "defaultTranslationServicesOrder.add_v.[1.31.1]": [
            "babelfast-pro"
          ],
          "translationServices": {
            "babelfast-pro.add_v.[1.31.1]": {
              "limit": 5,
              "concurrencyLimit": 5,
              "maxTextGroupLengthPerRequest": 10
            }
          }
        }
      }
    ],
    "skipEditableCheck": true,
    "additionalExcludeSelectors.remove": [
      "[contenteditable=\"true\"]"
    ],
    "waitForSelectorsTimeout": 1,
    "longBuildPageLength": 1000,
    "excludeTags.remove": [
      "PRE"
    ],
    "buildContainerSelectors.add": [
      ".docx p"
    ]
  },
  {
    "id": "immersive",
    "matches": [
      "https://immersivetranslate.*",
      "https://*.immersivetranslate.*",
      "http://localhost:38001",
      "https://app.infread.com",
      "https://*.immersivetranslate.*/*"
    ],
    "excludeSelectors.add": [
      "#imt-navbar *",
      ".preview-original-body *"
    ],
    "mutationExcludeSelectors.add": [
      "#imt-navbar"
    ],
    "skipIgnoreSelectors": [
      ".original-body"
    ],
    "mainFrameSelector.add": [
      ".original-body"
    ],
    "withAITitleBlockUrls": [
      "immersivetranslate.*/text"
    ],
    "enableAutoTranslateByReferrer": false,
    "siteParagraphCacheFallback.add": {
      "enable": true
    },
    "blockMinTextCount": 0,
    "blockMinWordCount": 0,
    "detectParagraphLanguage": true,
    "allowInnerInvoke": true,
    "isInjectVersion": true,
    "isInjectMeta": true,
    "waitForSelectorsTimeout": 1,
    "longBuildPageLength": 1000,
    "excludeTags.remove": [
      "PRE"
    ],
    "shareConfig.add": {
      "cloneIframes": [
        "iframe.original-body"
      ],
      "removeSelectors": [
        ".immersive-translate-error-modal-shadow-root"
      ]
    },
    "injectedCss.add": [
      ".docx-wrapper p {line-height: unset!important;}"
    ],
    "advanceMergeConfig": [
      {
        "condition": "true",
        "advanceConfig": {
          "domReadyDetectTimeout": 0,
          "translationLanguagePattern.add": {
            "matches": []
          }
        }
      }
    ]
  },
  {
    "id": "simpread",
    "selectorMatches": "div.simpread-read-root.simpread-read-root-show > sr-read",
    "mainFrameSelector": "div.simpread-read-root.simpread-read-root-show > sr-read"
  },
  {
    "id": "hangejp",
    "matches": [
      "arad.hange.jp",
      "arad.nexon.co.jp",
      "oapi.dingtalk.com",
      "login.dingtalk.com"
    ],
    "useIframePostMessage": false
  },
  {
    "id": "shopee",
    "matches": [
      "seller.shopee.*",
      "shopee.*"
    ],
    "injectedCss.add": [
      ".WBVL_7,.ellipsis-content {-webkit-line-clamp:unset!important;}"
    ],
    "isTransformPreTagNewLine": true,
    "excludeTags.remove": [
      "PRE"
    ],
    "likePreSelectors.add": [
      "CODE"
    ],
    "stayOriginalTags.remove": [
      "CODE"
    ]
  },
  {
    "id": "shopee-webchat",
    "matches": "seller.shopee.*/webchat/*",
    "injectedCss.add": [
      ".ReactVirtualized__Grid__innerScrollContainer:has(> div pre) { height: auto !important; max-height: none !important; overflow: visible !important; }",
      ".ReactVirtualized__Grid__innerScrollContainer:has(> div pre) > div { position: relative !important; top: auto !important; height: auto !important; }"
    ]
  },
  {
    "id": "fanbox",
    "matches": [
      "*.fanbox.cc"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "[class^='LazyImage__ImageWrapper'] img"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid",
        "imtIOS"
      ]
    },
    "isTransformPreTagNewLine": true,
    "likePreSelectors.add": [
      "[class^='Body__PostBodyText']"
    ],
    "mutationExcludeSelectors.add": [
      "[class^='Body__PostBodyText']"
    ]
  },
  {
    "id": "fenoxo",
    "matches": "www.fenoxo.com",
    "likePreSelectors.add": [
      ".mainText"
    ],
    "isTransformPreTagNewLine": true
  },
  {
    "id": "wikipedia",
    "matches": "*.wikipedia.org",
    "paragraphMinWordCount": 2,
    "paragraphMinTextCount": 4,
    "injectedCss.add": [
      ".immersive-translate-target-translation-block-wrapper { display: block !important; }",
      ".mwe-popups-extract {max-height:unset!important;height:unset!important;}",
      ".immersive-translate-target-wrapper {content-visibility:auto;}"
    ],
    "excludeSelectors": [
      ".mw-editsection",
      ".mw-cite-backlink",
      "#p-lang-btn",
      "#right-navigation",
      "#p-associated-pages",
      ".vector-header"
    ],
    "additionalExcludeSelectors.add": [
      ".lazy-image-placeholder"
    ],
    "stayOriginalSelectors": [
      ".chemf",
      ".mwe-math-element",
      "[role=math]",
      ".nowrap"
    ],
    "extraInlineSelectors": [
      ".chemf",
      ".mwe-math-element",
      "[role=math]",
      ".nowrap"
    ],
    "globalStyles.add": {
      ".no-article-text-sister-projects li": "height:unset;"
    },
    "bodyRule.add": {
      "bodySelector": "#content",
      "articleSelector": "#bodyContent"
    }
  },
  {
    "id": "twitter",
    "matches": [
      "twitter.com",
      "mobile.twitter.com",
      "tweetdeck.twitter.com",
      "pro.twitter.com",
      "platform.twitter.com/embed*",
      "x.com",
      "mobile.x.com",
      "tweetdeck.x.com",
      "pro.x.com",
      "platform.x.com/embed*"
    ],
    "excludeMatches": [
      "twitter.com/i/premium_sign_up",
      "twitter.com/settings/subscription",
      "twitter.com/jobs/*",
      "x.com/i/premium_sign_up",
      "x.com/settings/subscription",
      "x.com/settings/account",
      "x.com/jobs/*",
      "x.com/*/tos*",
      "x.com/*/privacy*",
      "x.com/account/access*",
      "x.com/i/account_analytics*",
      "x.com/i/chat*",
      "x.com/settings*"
    ],
    "withAITitleBlockUrls": [
      "^https://x.com/home"
    ],
    "switchTranslateRestart": true,
    "enableRichTranslate": true,
    "additionalStayOriginalSelectors": [
      "[data-testid=\"tweetText\"] a",
      "[data-testid='UserDescription'] a",
      "[data-testid='HoverCard'] a",
      "[data-testid='UserCell'] a",
      "[data-testid='birdwatch-pivot'] a",
      ".DocsMarkdown--link-external-icon"
    ],
    "rich.additionalStayOriginalSelectors.remove": [
      "[data-testid='tweetText'] a",
      "[data-testid='UserDescription'] a",
      "[data-testid='HoverCard'] a",
      "[data-testid='UserCell'] a",
      "[data-testid='birdwatch-pivot'] a"
    ],
    "blockMinTextCount": 0,
    "blockMinWordCount": 0,
    "selectors": [
      "[data-testid='tweetText']",
      "[data-testid='tweet'] [class='css-175oi2r r-13awgt0 r-eqz5dr r-iphfwy r-3o4zer r-ttdzmv']",
      "[data-testid='tweet'] .css-175oi2r span",
      "[data-testid='card.layoutSmall.detail'] > div:nth-child(2)",
      "[data-testid='developerBuiltCardContainer'] > div:nth-child(2)",
      "[data-testid='card.layoutLarge.detail'] > div:nth-child(2)",
      "[data-testid='cellInnerDiv'] div[data-testid='UserCell'] > div> div:nth-child(2)",
      "[data-testid='UserDescription']",
      "[data-testid='HoverCard'] div[dir=auto]",
      "[data-testid='HoverCard'] span[dir=auto]",
      "[data-testid='HoverCard'] [role='dialog'] div[dir=ltr]",
      "[data-testid='birdwatch-pivot'] div[dir=ltr]",
      "[data-testid='twitterArticleReadView']",
      "[data-testid='UserCell'] [class='css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3']",
      "[data-testid='inlinePrompt']",
      "[data-testid=primaryColumn] [class='css-175oi2r r-kzbkwu r-3pj75a'] > div > span[class='css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3']",
      "[style*='-webkit-line-clamp']",
      ".tweet-text",
      ".js-quoted-tweet-text",
      "[aria-label='Grok']",
      "[role=dialog]",
      "[class='css-175oi2r r-1awozwy r-13awgt0 r-1rnoaur r-13qz1uu']",
      "[class='css-175oi2r r-kemksi r-1kqtdi0 r-1q9bdsx r-1phboty r-rs99b7 r-1udh08x r-13qz1uu']",
      "[class='css-175oi2r r-uef6q5 r-dnmrzs r-97e31f r-13qz1uu r-13awgt0 r-dgnwoc r-1me0s30 r-t3sqpr r-1dqxon3']",
      "[class='css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0']",
      "[class='css-g5y9jx r-16y2uox r-1wbh5a2 r-1habvwh'] .css-g5y9jx [data-testid=primaryColumn] [aria-label*='Grok'] [class='css-g5y9jx r-1awozwy r-16lk18l r-13qz1uu'] [class='css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-rjixqe r-16dba41 r-imh66m']",
      "[class='css-g5y9jx r-16y2uox r-1wbh5a2 r-1habvwh'] .css-g5y9jx [data-testid=primaryColumn] [aria-label*='Grok'] [class='css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-16dba41 r-imh66m r-1kt6imw r-dnmrzs']",
      "span[class='css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3 r-n6v787 r-1cwl3u0']",
      ".font-chirp.text-body.font-normal",
      "article h1,article .x-article-body"
    ],
    "additionalExcludeSelectors.add": [
      "[aria-describedby][role=button]",
      "header",
      "[data-testid='radioGroupplayback_rate'] div",
      "[data-testid='userFollowIndicator']",
      "[class='css-901oao r-14j79pv r-37j5jr r-n6v787 r-16dba41 r-1cwl3u0 r-bcqeeo r-qvutc0']",
      "[class='css-175oi2r r-1wbh5a2 r-dnmrzs']",
      "[aria-label=Grok] button",
      "[aria-label=Grok] [style*='rgb(89, 93, 98)']",
      "[aria-label=Grok] .r-uho16t",
      "[data-testid=User-Name],[data-testid=UserProfileHeader_Items]",
      "[data-testid=socialContext]",
      "[data-testid=tweet-text-show-more-link]",
      "[aria-label=Grok] [class='css-175oi2r r-1habvwh r-vqp9x9 r-1q9bdsx r-1loqt21 r-9njtsq r-1wtj0ep r-nsbfu8 r-xbdcod r-13c7hvr'] > div:last-child",
      "[role='tab']",
      "[data-testid=hoverCardParent] [role=menuitem]",
      "[data-testid=sidebarColumn]",
      "h2[role=heading]",
      "[class='css-175oi2r r-1awozwy r-18u37iz r-1wtj0ep r-6gpygo'],[class='css-175oi2r r-1d09ksm r-18u37iz r-1wbh5a2 r-1471scf'],[class='css-175oi2r r-1kbdv8c r-18u37iz r-1wtj0ep r-1ye8kvj r-1s2bzr4']",
      ".imt-caption-container *",
      "[data-testid=videoComponent]"
    ],
    "extraBlockSelectors.add": [
      "[data-testid=\"tweetText\"] div.r-6koalj"
    ],
    "injectedCss.add": [
      "[data-testid='card.layoutLarge.detail'] > div:nth-child(2) {-webkit-line-clamp: unset!important;}",
      "[data-testid='card.layoutSmall.detail'] > div:nth-child(2) {-webkit-line-clamp: unset!important;}",
      "[data-testid='tweetText'],[style*='-webkit-line-clamp'] {-webkit-line-clamp: unset!important;}",
      "[role=dialog] [style*='webkit-line-clamp'] {-webkit-line-clamp: unset!important;}",
      ".r-h9hxbl{width:unset;}",
      "[aria-label=Grok] [data-testid=ScrollSnap-SwipeableList] [role=presentation] > div > div { max-height: unset !important; }",
      ".css-9pa8cd.imt-img {top: 50%!important;left: 50%!important;transform: translate(-50%, -50%)!important;position:absolute!important;height:unset!important;object-fit: cover !important;}"
    ],
    "likePreSelectors.add_v.[1.11.5]": [
      "[data-testid=tweetText]",
      "[data-testid=tweetText] *",
      "[data-testid=longformRichTextComponent] .longform-unstyled span[data-text]"
    ],
    "preTranslateLimiter.add_v.[1.24.5]": {
      "header.enableTranslate": false
    },
    "excludeSelectorsRegexes.add": {
      "[data-testid=tweetText] span": [
        "^[0-9a-zA-Z]{30,}$"
      ]
    },
    "isTransformPreTagNewLine": false,
    "isTransformPreTagNewLine.add_v.[1.12.1]": true,
    "advanceTransformPreTagNewLine": true,
    "advanceTransformPreTagMinTextCount": 1000,
    "advanceTransformPreTagMinLineCount": 10,
    "extraInlineSelectors": [
      "[data-testid=\"tweetText\"] div.r-xoduu5",
      "[data-testid=\"tweetText\"] span",
      "[data-testid=\"UserDescription\"] div",
      "[data-testid='HoverCard'] div[dir=auto] div",
      "[data-testid='HoverCard'] span[dir=auto] div"
    ],
    "darkModeRule": {
      "element": "html",
      "selectors": [
        "[style*='color-scheme: dark']"
      ]
    },
    "advanceMergeConfig": [
      {
        "condition": "translationMode==translation",
        "advanceConfig": {
          "generalRule": {
            "likePreSelectors": []
          }
        }
      },
      {
        "condition": "isMobile==true",
        "advanceConfig": {
          "generalRule": {
            "subtitleRule.add": {
              "quickButtonRule": {
                "appendSelector": "div<-[data-testid*=\"cellInnerDiv-tweet\"]->[data-testid*=\"immersive-tweet-ui-content-container\"] button[role=\"button\"]<-parent",
                "insertBeforeSelector": "div<-[data-testid*=\"cellInnerDiv-tweet\"]->[data-testid*=\"immersive-tweet-ui-content-container\"] button[role=\"button\"]",
                "injectCSS": ".imt-quick-subtitle-button { margin: 0 6px !important; } .imt-quick-subtitle-pop-content { transform: unset !important; } .logo,.logo svg { height: 24px !important; width: 24px !important;}, .logo svg { margin-top: 2px !important; } "
              }
            }
          }
        }
      }
    ],
    "ignoreZhCNandZhTW": true,
    "isTranslateTitle": false,
    "useIframePostMessage": false,
    "observeUrlChange": false,
    "paragraphMinTextCount": 2,
    "paragraphMinWordCount": 1,
    "repeatTranslateNum": 0,
    "subtitleRule.add": {
      "type": "twitter",
      "isInject": false,
      "enableIOSFullScreenTextTrack": false,
      "injectedCss": [
        "#layers[style='z-index: 1;'] [style='height: 100px;'] { height: 400px !important; }",
        "video::cue {white-space: pre-line;}"
      ],
      "liveSubtitleRule": {
        "containerSelector": ".r-13awgt0.r-1pi2tsx.r-13qz1uu > [role='listbox']",
        "reportSelector": ".css-175oi2r.r-1awozwy.r-173mn98.r-1mf7evn.r-7e3msg",
        "textSelectors": [
          ".r-13awgt0.r-1pi2tsx.r-13qz1uu > [role='listbox'] .r-13awgt0.r-1lzbym2  > [dir=\"ltr\"] > span"
        ],
        "mutationChangeDelay": 1000
      },
      "videoPlayerSelector": "video",
      "enableTriggerTranslate": true,
      "loadingStyle": "bottom: unset; top: 5%;"
    },
    "shareCardRule.add": {
      "type": "x",
      "tweetContainerSelector": "article[data-testid='tweet']",
      "expandTextSelector": "[data-testid='tweet-text-show-more-link']",
      "shareButtonSelectors": [
        "article[data-testid='tweet'] button[aria-haspopup='menu']"
      ],
      "shareButtonExcludeSelectors": [
        "button[data-testid='caret']"
      ],
      "statusLinkSelectors": [
        "a[href*='/status/']"
      ],
      "textSelectors": [
        "[data-testid='tweetText']"
      ],
      "excludeSelectors": [
        "[role='link']"
      ],
      "paragraphRootSelector": "[data-imt-p='1']",
      "nameSelectors": [
        "[data-testid='User-Name'] span"
      ],
      "handleSelectors": [
        "[data-testid='User-Name'] a[href^='/']",
        "[data-testid='User-Name'] span"
      ],
      "avatarSelectors": [
        "[data-testid='Tweet-User-Avatar'] img",
        "img[src*='profile_images']"
      ],
      "mediaImageSelectors": [
        "[data-testid='tweetPhoto'] img",
        "img[src*='twimg.com/media']"
      ],
      "timeSelector": "time",
      "quickEntryRules": [
        {
          "appendSelector": "div[data-testid='Dropdown']",
          "insertBeforeSelector": "[role='menuitem']:nth-child(2)"
        },
        {
          "appendSelector": "div[data-testid='sheetDialog']",
          "insertBeforeSelector": "[role='menuitem']:nth-child(2)"
        }
      ]
    },
    "mutationConfig.add": {
      "consumeTimeout": 1000
    },
    "bodyRule.add": {
      "enable": false
    },
    "visibleObserverScreens": [
      0,
      0,
      0,
      0
    ],
    "richMoreWordPercent": "0.5",
    "subtitleRule.add_v.[1.17.3]": {
      "multipleVideoContainerSelector": "[data-testid=\"videoComponent\"]",
      "quickButtonRule": {
        "appendSelector": "button[aria-label=\"Video Settings\"],button[aria-label=\"视频设置\"]<-parent<-parent<-parent",
        "insertBeforeSelector": "button[aria-label=\"Video Settings\"],button[aria-label=\"视频设置\"]<-parent<-parent",
        "injectCSS": ":host { display: flex !important; align-items: center !important; justify-content: center !important; width: 36px !important; height: 36px !important; } .imt-quick-subtitle-button { margin: 0 !important; justify-content: center; width: 36px; } .logo,.logo svg { height: 18px !important; width: 18px !important; }",
        "injectedGlobalCSS": "[data-testid=\"videoComponent\"] [style*=\"will-change: opacity\"]:has(#immersive-translatequick-button), [data-testid=\"videoComponent\"] [style*=\"will-change:opacity\"]:has(#immersive-translatequick-button) { will-change: auto !important; }"
      },
      "aiSubtitle": {
        "enable": true,
        "urlRegex": [
          "^https://(?:[^/]+\\.)?(?:x|twitter)\\.com/(?!i/broadcasts(?:/|$)).*$"
        ],
        "maxDurationHours": 4,
        "quotedPostClosestSelector": "div[role=\"link\"]"
      },
      "videoSelector": "video",
      "attachRule": {
        "appendSelector": "video<-parent",
        "isDelay": true,
        "injectedCSS": [
          ".imt-caption-window {margin-bottom: 0; bottom: 2%; user-select:text; -webkit-user-select:text;}",
          ".imt-caption-window {width: 90%;}",
          ".imt-caption-container {z-index: unset;}"
        ],
        "injectedGlobalCSS": [
          ".r-1peqgm7 #immersive-translate-caption-window {bottom: 60px;}",
          "[data-testid=\"videoComponent\"]:hover #immersive-translate-caption-window {bottom: 60px;}",
          "[data-testid=\"videoComponent\"]:focus-within #immersive-translate-caption-window {bottom: 60px;}",
          "[data-testid=\"modalContainer\"] #immersive-translate-caption-window {bottom: unset !important; height: 180px !important;}"
        ]
      },
      "quickButtonRules": [
        {
          "appendSelector": "button[data-testid=\"captions\"]<-parent<-parent",
          "dismissOtherPlayerMenus": false,
          "injectCSS": ".imt-quick-subtitle-pop-content { transform: translateX(17px) !important; } .logo,.logo svg { height: 18px !important; width: 18px !important;}, .logo svg { margin-top: 2px !important; } .imt-quick-subtitle-ai-subtitle-tip {transform: unset !important;} ",
          "injectCSS.add_v.[1.32.3]": ".logo,.logo svg { height: 18px !important; width: 18px !important;}, .logo svg { margin-top: 2px !important; } .imt-quick-subtitle-ai-subtitle-tip {transform: unset !important;} ",
          "injectedGlobalCSS": "[data-testid=\"videoComponent\"] [style*=\"will-change: opacity\"]:has(#immersive-translatequick-button), [data-testid=\"videoComponent\"] [style*=\"will-change:opacity\"]:has(#immersive-translatequick-button) { will-change: auto !important; }"
        },
        {
          "appendSelector": "button[aria-label=\"Video Settings\"],button[aria-label=\"视频设置\"]<-parent<-parent<-parent",
          "insertBeforeSelector": "button[aria-label=\"Video Settings\"],button[aria-label=\"视频设置\"]<-parent<-parent",
          "dismissOtherPlayerMenus": false,
          "injectCSS": ":host { display: flex !important; align-items: center !important; justify-content: center !important; width: 36px !important; height: 36px !important; } .imt-quick-subtitle-button { margin: 0 !important; justify-content: center; width: 36px; } .logo,.logo svg { height: 18px !important; width: 18px !important; } .imt-quick-subtitle-ai-subtitle-tip { transform: unset !important; }",
          "injectedGlobalCSS": "[data-testid=\"videoComponent\"] [style*=\"will-change: opacity\"]:has(#immersive-translatequick-button), [data-testid=\"videoComponent\"] [style*=\"will-change:opacity\"]:has(#immersive-translatequick-button) { will-change: auto !important; }"
        },
        {
          "appendSelector": "div[style*=\"transition-property: opacity, height\"] > div.r-6koalj > div.r-1wtj0ep > div.r-18u37iz:last-child",
          "dismissOtherPlayerMenus": false,
          "injectCSS": ":host { display: flex !important; align-items: center !important; justify-content: center !important; width: 36px !important; height: 36px !important; } .imt-quick-subtitle-button { margin: 0 !important; justify-content: center; width: 36px; } .logo,.logo svg { height: 18px !important; width: 18px !important; } .imt-quick-subtitle-ai-subtitle-tip { transform: unset !important; }",
          "injectedGlobalCSS": "[data-testid=\"videoComponent\"] [style*=\"will-change: opacity\"]:has(#immersive-translatequick-button), [data-testid=\"videoComponent\"] [style*=\"will-change:opacity\"]:has(#immersive-translatequick-button) { will-change: auto !important; }"
        },
        {
          "appendSelector": "div<-[data-testid*=\"cellInnerDiv-tweet\"]->[data-testid*=\"immersive-tweet-ui-content-container\"] button[role=\"button\"]<-parent",
          "insertBeforeSelector": "div<-[data-testid*=\"cellInnerDiv-tweet\"]->[data-testid*=\"immersive-tweet-ui-content-container\"] button[role=\"button\"]",
          "dismissOtherPlayerMenus": false,
          "injectCSS": ".imt-quick-subtitle-button { margin: 0 6px !important; } .imt-quick-subtitle-pop-content { transform: translateY(calc(65%)) !important; right: 35px;  } .logo,.logo svg { height: 24px !important; width: 24px !important;}, .logo svg { margin-top: 2px !important; } .imt-quick-subtitle-ai-subtitle-tip {transform: unset !important; right: 35px; top: 0} ",
          "injectCSS.add_v.[1.32.3]": ".imt-quick-subtitle-button { margin: 0 6px !important; } .logo,.logo svg { height: 24px !important; width: 24px !important;}, .logo svg { margin-top: 2px !important; } .imt-quick-subtitle-ai-subtitle-tip {transform: unset !important; right: 35px; top: 0} ",
          "injectedGlobalCSS": "[data-testid=\"videoComponent\"] [style*=\"will-change: opacity\"]:has(#immersive-translatequick-button), [data-testid=\"videoComponent\"] [style*=\"will-change:opacity\"]:has(#immersive-translatequick-button) { will-change: auto !important; }"
        }
      ]
    },
    "inputConfig.add": {
      "autoLanguageSelectors": [
        "parentElementTo [role=dialog] [data-testid=tweetText]"
      ]
    },
    "imageRule.add": {
      "opImageType": "append",
      "imageStyle": "opacity:1;position:unset;"
    }
  },
  {
    "id": "common-vtt",
    "matches": [
      "gdc-search.github.io",
      "www.epicweb.dev",
      "www.aihero.dev",
      "www.codewithantonio.com"
    ],
    "subtitleRule.add": {
      "type": "webvtt",
      "subsrtFormat": "vtt",
      "hookType": "xhr|fetch",
      "subtitleUrlRegExp": ".vtt"
    }
  },
  {
    "id": "zoom-asu",
    "matches": [
      "*.zoom.us/rec/*"
    ],
    "excludeSelectors.add": [
      ".player-share .video-js"
    ],
    "mutationExcludeSelectors.add": [
      ".player-share .video-js *"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "subsrtFormat": "vtt",
      "hookType": "xhr",
      "injectedCss": [
        ".video-js .vjs-text-track-display .vjs-text-track-cue > div { white-space: unset !important; }"
      ],
      "subtitleUrlRegExp": "rec/play/vtt",
      "quickButtonRule": {
        "appendSelector": ".vjs-extend-control",
        "insertBeforeSelector": ".vjs-captions-control",
        "injectCSS": ".imt-quick-subtitle-pop-content { max-height: 150px !important; }"
      },
      "attachRule": {
        "appendSelector": ".video-js",
        "injectedCSS": [
          ".imt-caption-container {z-index:10;}",
          ".imt-cue {font-size: 16px !important;}",
          ".vjs-text-track-cue {display:none !important;}",
          ".imt-caption-window {width: 90%;}"
        ]
      },
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] #immersive-translate-caption-window { direction: rtl; }"
      ]
    }
  },
  {
    "id": "zoom",
    "matches": [
      "*.zoom.us"
    ],
    "excludeSelectors.add": [
      ".live-transcription-subtitle__box"
    ],
    "mutationExcludeSelectors.add": [
      ".live-transcription-subtitle__box *"
    ],
    "extraInlineSelectors.add": [
      ".live-transcription-subtitle__item"
    ],
    "toastErrorMinTimes": 2,
    "subtitleRule.add": {
      "type": "live",
      "disableLiveSubtitleParallelTranslation": true,
      "injectedCss": [
        ".live-transcription-subtitle__item { max-height: none !important; }",
        "#live-transcription-subtitle {flex-direction: column;color: white;}"
      ],
      "liveSubtitleRule": {
        "containerSelector": ".live-transcription-subtitle__box",
        "textSelectors": [
          "#live-transcription-subtitle",
          ".live-transcription-subtitle"
        ],
        "reportSelector": ".meeting-client-inner",
        "mutationChangeDelay": 1000,
        "enableTriggerTranslate": true,
        "preventRemoval": true,
        "isMeeting": true
      },
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] #live-transcription-subtitle font {direction: rtl;text-align: right;}"
      ]
    }
  },
  {
    "id": "team",
    "matches": [
      "teams.live.com",
      "teams.microsoft.com",
      "teams.cloud.microsoft"
    ],
    "excludeSelectors.add": [
      ".ui-box .ui-box[class='ui-box']",
      "[data-tid='author']",
      ".fui-ChatMessageCompact__author"
    ],
    "mutationExcludeSelectors.add": [
      ".ui-box .ui-box[class='ui-box'] *"
    ],
    "extraInlineSelectors.add": [
      "[data-tid='closed-caption-text']"
    ],
    "stayOriginalSelectors.add": [
      "span[title][style='min-width: 20px; height: 20px;']"
    ],
    "toastErrorMinTimes": 2,
    "subtitleRule.add": {
      "type": "live",
      "disableLiveSubtitleParallelTranslation": true,
      "injectedCss": [
        ".fui-Flex.___8puuoi0.f22iagw.f18w1nra.f1en88kg { flex-direction: column !important; }",
        "font.immersive-translate-target-wrapper br { display: none; }"
      ],
      "liveSubtitleRule": {
        "containerSelector": "div[data-tid=\"closed-caption-v2-virtual-list-content\"] > .ui-box",
        "textContentSelector": "[data-tid='closed-caption-text']",
        "textSelectors": [
          "[data-tid='closed-caption-text']"
        ],
        "reportSelector": "[data-tid='closed-captions-renderer']",
        "mutationChangeDelay": 1000,
        "enableTriggerTranslate": true,
        "preventRemoval": true,
        "isMeeting": true
      },
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] font.immersive-translate-target-wrapper {direction: rtl;}"
      ]
    }
  },
  {
    "id": "googleMeet",
    "matches": [
      "meet.google.com"
    ],
    "excludeSelectors.add": [
      ".iOzk7[jsname='dsyhDe']",
      ".ygicle.VbkSUe"
    ],
    "mutationExcludeSelectors.add": [
      ".iOzk7[jsname='dsyhDe'] *"
    ],
    "extraInlineSelectors.add": [
      ".ygicle.VbkSUe"
    ],
    "toastErrorMinTimes": 2,
    "subtitleRule.add": {
      "type": "live",
      "disableLiveSubtitleParallelTranslation": true,
      "injectedCss": [
        ".bh44bd.VbkSUe { font-size: 1.2rem !important; }",
        "font.immersive-translate-target-wrapper { font-size: 1.2rem; display: inline-block; }",
        "font.immersive-translate-target-wrapper br { display: none; }"
      ],
      "liveSubtitleRule": {
        "containerSelector": ".iOzk7[jsname='dsyhDe']",
        "textContentSelector": ".ygicle.VbkSUe",
        "reportSelector": ".iOzk7[jsname='dsyhDe']",
        "mutationChangeDelay": 1000,
        "findParentBlockDepth": 5,
        "enableTriggerTranslate": true,
        "preventRemoval": true,
        "isMeeting": true
      },
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] font.immersive-translate-target-wrapper {direction: rtl;}"
      ]
    }
  },
  {
    "id": "openrouter",
    "matches": "openrouter.ai",
    "excludeSelectors.add": [
      ".line-clamp-1.text-lg",
      ".text-muted-foreground.text-sm.col-span-4.text-right",
      "div[title='Tokens this week']",
      ".text-green-600.font-medium",
      ".text-xl.text-slate-11",
      "button[role='tab']",
      "[data-badge-type=http-method]",
      "div[role='region'] > div > ul"
    ],
    "globalStyles": {
      "button.text-primary-foreground": "height: 100%;white-space: normal;word-wrap: break-word;"
    }
  },
  {
    "id": "polymarket",
    "matches": "polymarket.com",
    "injectedCss.add": [
      "div[data-index] p.decoration-2 {-webkit-line-clamp:unset;}",
      "div[data-index] .items-start.relative.gap-2.px-3.flex.w-full {height:unset; max-height:unset;}",
      "div[data-index] .absolute.w-full {overflow:scroll;}"
    ],
    "mixedMode": {
      "translationOnlySelectors": [
        "div[data-index] p.decoration-2",
        "button"
      ]
    },
    "excludeSelectors.add": [
      "number-flow-react",
      "button",
      "a.inline-flex"
    ]
  },
  {
    "id": "hoyolab",
    "matches": "www.hoyolab.com",
    "excludeTags.remove": [
      "PRE"
    ],
    "excludeSelectors": [
      ".reply-card__nickname",
      ".mhy-user-card__name",
      ".mhy-account-title__name"
    ],
    "extraBlockSelectors.add": [
      ".reply-card__content__detail p:first-child",
      ".reply-card-inner-reply__content > p:first-child"
    ]
  },
  {
    "id": "cbc-gem-text-track",
    "matches": [
      "gem.cbc.ca"
    ],
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "subtitleRule.add": {
      "disabled": false,
      "type": "text_track_dynamic",
      "videoPlayerSelector": "video"
    }
  },
  {
    "id": "tv.apple",
    "matches": "tv.apple.com",
    "subtitleRule.add": {
      "type": "text_track_dynamic",
      "videoSelector": "video",
      "videoPlayerSelector": "video",
      "quickButtonRule": {
        "appendSelector": ".video-player__controls",
        "injectCSS": ".imt-quick-subtitle-pop-content {max-height: 150px !important; right: 50px !important;}",
        "injectCSS.add_v.[1.32.3]": ".imt-quick-subtitle-pop-content {max-height: 150px !important;}"
      },
      "attachRule": {
        "appendSelector": ".video-player__video-container",
        "injectedCSS": [
          ".imt-caption-container {bottom: 15%;}"
        ]
      }
    }
  },
  {
    "id": "chatter.hume.ai",
    "matches": "chatter.hume.ai",
    "extraInlineSelectors.add": [
      "[class*=' flex-wrap'] > span"
    ]
  },
  {
    "id": "threads",
    "matches": [
      "www.threads.net",
      "www.threads.com"
    ],
    "stayOriginalSelectors": [
      ".x1rg5ohu",
      ".xat24cr.xdj266r a"
    ],
    "excludeSelectors.add": [
      ".x6s0dn4.x40hh3e.xrvj5dj.xxfwaov",
      ".xpvyfi4.x1xdureb.x1agbcgv,.xqcrz7y.x1xdureb.x1agbcgv",
      ".xpvyfi4.x1npkx4u.x1ms6mhf",
      ".x6s0dn4.x78zum5.xl56j7k.xezivpi",
      ".x6s0dn4.xfex06f.x78zum5.xl56j7k",
      ".x78zum5.xdt5ytf.x1iyjqo2.xl56j7k.x1r0jzty"
    ],
    "globalStyles": {
      "span,.x569fbc": "max-height:unset;-webkit-line-clamp:unset;height:unset;white-space:unset;"
    }
  },
  {
    "id": "stackoverflow",
    "matches": [
      "stackoverflow.com",
      "*.stackexchange.com",
      "superuser.com",
      "askubuntu.com",
      "serverfault.com"
    ],
    "extraBlockSelectors.add": [
      "span.comment-copy"
    ],
    "globalStyles": {
      ".s-post-summary--content-excerpt": "-webkit-line-clamp:unset;"
    },
    "excludeSelectors.add": [
      ".votecell",
      "header",
      "#footer",
      "#question-header + div",
      "div.postcell div.mb0",
      "div[id^=comments-link-]",
      "#answers-header",
      ".new-post-login",
      ".form-submit",
      "a[href='/questions/ask']",
      "#left-sidebar",
      "a.comment-user",
      "span.comment-date",
      "div.s-prose.js-post-body + div",
      ".bottom-notice",
      "div[data-campaign-name=stk]",
      ".s-post-summary--stats",
      ".s-post-summary--meta"
    ],
    "paragraphMinTextCount": 4,
    "paragraphMinWordCount": 2
  },
  {
    "id": "appleDeveloper",
    "matches": "developer.apple.com/documentation/*",
    "selectors": [
      ".container",
      "h3.title",
      "div.content"
    ],
    "excludeSelectors.add": [
      ".vue-recycle-scroller"
    ]
  },
  {
    "id": "hackerNews",
    "matches": "news.ycombinator.com",
    "excludeMatches": [
      "https://news.ycombinator.com/submit",
      "https://news.ycombinator.com/newsfaq.html",
      "https://news.ycombinator.com/newsguidelines.html",
      "https://news.ycombinator.com/security.html"
    ],
    "selectors": [
      ".titleline > a",
      ".comment > .commtext",
      ".toptext",
      "a.hn-item-title",
      ".hn-comment-text",
      ".hn-story-title"
    ],
    "injectedCss.add": [
      ".immersive-translate-target-wrapper {content-visibility:auto;}"
    ],
    "excludeSelectors": [
      ".reply",
      ".comhead",
      ".subtext"
    ]
  },
  {
    "id": "quora",
    "matches": [
      "*.quora.com",
      "quora.com"
    ],
    "excludeSelectors": [
      ".dom_annotate_multifeed_bundle_AskQuestionPromptBundle",
      ".dom_annotate_feed_switcher",
      "[class='q-box qu-py--small qu-color--gray_light']",
      "[class='q-box spacing_log_answer_header']",
      "[class='q-box qu-flex--auto']",
      "[class='q-text qu-dynamicFontSize--small qu-mt--small qu-color--gray_light qu-passColorToLinks']",
      ".AnswerFooter___StyledFlex-sc-2xbo88-0",
      "[class='q-box qu-mb--small']",
      "button.q-click-wrapper",
      "[class='q-text qu-dynamicFontSize--tiny qu-pb--tiny qu-mt--small qu-color--gray_light qu-passColorToLinks']",
      "[class='q-text qu-dynamicFontSize--tiny qu-mt--small qu-color--gray_light qu-passColorToLinks']",
      ".qt_read_more",
      "[class='q-flex qu-alignItems--flex-start']",
      "[class='q-box qu-pl--tiny']"
    ],
    "additionalExcludeSelectors.add": [
      ".qu-zIndex--action_bar"
    ],
    "globalStyles": {
      ".qu-truncateLines--3": "-webkit-line-clamp: unset;"
    }
  },
  {
    "id": "oldReddit",
    "matches": [
      "old.reddit.com/*/.compact",
      "old.reddit.com/.compact",
      "www.reddit.com/*/.compact",
      "www.reddit.com/.compact"
    ],
    "selectors": [
      ".title > a",
      ".usertext-body"
    ],
    "detectParagraphLanguage": true
  },
  {
    "id": "otherOldReddit",
    "matches": "old.reddit.com",
    "selectors": [
      "p.title > a",
      "[role=main] .md-container",
      ".media-gallery .usertext",
      ".expando .usertext",
      ".res-expando-box .md"
    ],
    "detectParagraphLanguage": true
  },
  {
    "id": "redditList",
    "matches": [
      "https://www.reddit.com/r/*/comments/*/*",
      "https://www.reddit.com/",
      "https://www.reddit.com/hot/",
      "https://www.reddit.com/new/",
      "https://www.reddit.com/top/"
    ],
    "excludeMatches": [
      "https://www.reddit.com/r/*/wiki/*"
    ],
    "observeUrlChange": true,
    "selectors": [
      "h1",
      ".PostHeader__post-title-line",
      "[data-click-id=body] h3",
      "[data-click-id=background] h3",
      "[data-testid=comment]",
      "[data-adclicklocation='title'] h3",
      "[data-adclicklocation=media]",
      "[data-testid='post-title-text']",
      ".PostContent",
      ".post-content",
      ".Comment__body",
      "faceplate-batch .md",
      "[slot=comment]",
      ".RichTextJSON-root",
      "[slot=title]",
      "[slot=text-body]",
      "p.title > a",
      "[role=main] .md-container",
      ".room-message-text",
      ".crosspost-title",
      "div.md[id^=t3_]",
      ".pt-md"
    ],
    "excludeSelectors.add": [
      "shreddit-comment-action-row",
      "faceplate-hovercard"
    ],
    "detectParagraphLanguage": true,
    "globalStyles": {
      "div.XPromoBottomBar": "display:none",
      "[class*='line-clamp']": "-webkit-line-clamp: unset",
      "a.pointer-events-none": "pointer-events: unset",
      "a.absolute.inset-0": "inset: unset !important;"
    },
    "waitForSelectors": [
      "[data-testid=post_author_link]"
    ],
    "inputConfig.add": {
      "clearContentEnable": false,
      "autoLanguageSelectors": [
        "parentElementTo shreddit-comment [slot=comment]",
        "shreddit-post-text-body .text-neutral-content"
      ]
    },
    "bodyRule.add": {
      "enable": false
    },
    "subtitleRule.add": {
      "type": "subsrt",
      "subsrtFormat": "vtt",
      "subtitleUrlRegExp": ".*\\.(vtt)",
      "hookType": "fetch",
      "deduplicateSubtitles": true,
      "quickButtonRule": {
        "ccEnableSelector": "shreddit-player-2 -> shreddit-media-ui -> [aria-label='Toggle captions']",
        "appendSelector": "shreddit-player-2 -> shreddit-media-ui -> .disappearing-controls",
        "injectCSS": ".imt-quick-subtitle-pop-content {max-height: unset!important;width:fit-content;right:32px;}",
        "injectCSS.add_v.[1.32.3]": ".imt-quick-subtitle-pop-content {max-height: unset!important;width:fit-content;}"
      }
    }
  },
  {
    "id": "reddit",
    "matches": "www.reddit.com",
    "selectors": [
      "#search-results-tab-slot",
      "h1",
      ".PostHeader__post-title-line",
      "[data-click-id=body] h3",
      "[data-click-id=background] h3",
      "[data-testid=comment]",
      "[data-adclicklocation='title'] h3",
      "[data-testid='post-title-text']",
      "[data-testid=search-subreddit-desc-text]",
      "[slot=comment]",
      "[data-adclicklocation=media]",
      ".PostContent",
      ".post-content",
      ".Comment__body",
      "faceplate-batch .md",
      "[slot=text-body]",
      "p.title > a",
      "[role=main] .md-container",
      "#-post-rtjson-content",
      ".RichTextJSON-root",
      "[slot='title']",
      ".room-message-text",
      "[source=re_reddit] div > a.text-neutral-content-weak",
      "#response-container",
      "#streaming-response",
      "[noun='recommendation']",
      "#subgrid-container h1, #subgrid-container h2",
      ".i18n-subreddit-description",
      "#streaming-response",
      "#response-container_streaming",
      "search-telemetry-tracker > a.text-neutral-content-strong",
      "span[data-testid='guides-title']",
      ".rendererd-rtjson > p",
      "community-recommendation p"
    ],
    "excludeSelectors": [
      ".text-neutral-content-weak"
    ],
    "paragraphMinTextCount": 5,
    "paragraphMinWordCount": 2,
    "excludeMatches": [
      "https://www.reddit.com/r/*/wiki/*",
      "https://www.reddit.com/settings/*",
      "https://www.reddit.com/message/sent/*"
    ],
    "detectParagraphLanguage": true,
    "globalStyles": {
      "div.XPromoBottomBar": "display:none",
      "[class*='line-clamp']": "-webkit-line-clamp: unset"
    },
    "initialGlobalAttributes.add": {
      "a.inset-0": {
        "style": "inset: unset;"
      }
    },
    "subtitleRule.add": {
      "type": "subsrt",
      "subsrtFormat": "vtt",
      "subtitleUrlRegExp": ".*\\.(vtt)",
      "hookType": "fetch",
      "deduplicateSubtitles": true,
      "quickButtonRule": {
        "ccEnableSelector": "shreddit-player-2 -> shreddit-media-ui -> [aria-label='Toggle captions']",
        "appendSelector": "shreddit-player-2 -> shreddit-media-ui -> .disappearing-controls",
        "injectCSS": ".imt-quick-subtitle-pop-content {max-height: unset!important;width:fit-content;right:32px;}",
        "injectCSS.add_v.[1.32.3]": ".imt-quick-subtitle-pop-content {max-height: unset!important;width:fit-content;}"
      }
    }
  },
  {
    "id": "angel",
    "matches": "www.angel.com",
    "excludeSelectors.add": [
      ".bmpui-subtitle-position-vtt *"
    ],
    "mutationExcludeSelectors.add": [
      ".bmpui-subtitle-position-vtt *"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "subtitleUrlRegExp": "/subtitles/.*\\.vtt",
      "hookType": "xhr",
      "enableHookDownload": true,
      "quickButtonRule": {
        "appendSelector": ".bmpui-ui-container.bmpui-controlbar-bottom > .bmpui-container-wrapper",
        "insertBeforeSelector": ".bmpui-ui-communityviewtogglebutton",
        "ccEnableSelector": ".bmpui-ui-subtitlesettingstogglebutton"
      },
      "attachRule": {
        "appendSelector": "#bitmovin-player",
        "injectedCSS": [
          ".imt-caption-container {z-index: 10;}",
          ".imt-caption-window {margin-bottom: 0; bottom: 12%!important;top: unset!important;}",
          ".imt-caption-window {width: 90%;}"
        ],
        "injectedGlobalCSS": [
          ".bmpui-subtitle-position-vtt {display: none!important;} "
        ]
      },
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] #immersive-translate-caption-window {direction: rtl;}"
      ]
    }
  },
  {
    "id": "reuters",
    "matches": "www.reuters.com",
    "excludeSelectors": [
      "[promotext]",
      "[data-testid=Leaderboard]",
      "[data-testid=HomeTickerV2]",
      "[data-testid=SiteFooter]",
      "[class^=refinitiv-promo-bar__container]",
      "[data-testid=ResponsiveAdSlot]"
    ],
    "preTranslateLimiter.add": {
      "header.selectors": [
        "nav"
      ]
    },
    "bodyRule.add": {
      "bodySelector": "[data-testid=MainContent]",
      "articleSelector": "[data-testid=ArticleBody]"
    },
    "subtitleRule.add": {
      "type": "subsrt",
      "subtitleUrlRegExp": "/v3/caption/",
      "hookType": "xhr",
      "loadingContainerSelector": ".jw-captions",
      "enableHookDownload": true,
      "quickButtonRule": {
        "appendSelector": ".jw-button-container",
        "insertBeforeSelector": ".jw-icon-cc"
      },
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] #immersive-translate-caption-window {direction: rtl;}"
      ]
    }
  },
  {
    "id": "npmjs",
    "matches": "https://www.npmjs.com/package/*",
    "selectors": [
      "#tabpanel-readme > div:first-child"
    ]
  },
  {
    "id": "github",
    "matches": "github.com",
    "useIframePostMessage": false,
    "excludeMatches": [
      "https://github.com/*/*/settings",
      "https://github.com/*/*/settings/*",
      "https://github.com/settings/*",
      "https://github.com/sponsors/*",
      "https://github.com/readme/*",
      "https://github.com/readme/",
      "https://github.com/features/*",
      "https://github.com/codespaces",
      "https://github.com/customer-stories/*",
      "https://github.com/signup",
      "https://github.com/login",
      "https://github.com/marketplace",
      "https://github.com/github-copilot*",
      "https://github.com/collections*",
      "https://github.com/resources/events*",
      "https://github.com/pricing*"
    ],
    "mutationExcludeSelectors": [
      ".react-blob-sticky-header *"
    ],
    "selectors": [
      "h1",
      "[aria-label=Issues] .markdown-title",
      "[aria-labelledby=discussions-list] .markdown-title",
      "h3 .markdown-title",
      ".markdown-body",
      ".Layout-sidebar p",
      "div > span.search-match",
      "li.repo-list-item p",
      "#responsive-meta-container p",
      "article p",
      "feed-container article ul li a span",
      "feed-container article .FormControl-caption",
      "div.repo-description p",
      "[itemprop=description]",
      ".integrations-auth-wrapper",
      ".new-feed-onboarding-notice",
      "article section[aria-label='card content'] > div > div > div  > div:nth-child(2)",
      ".js-notice h2, .js-notice p",
      ".TimelineItem-body a span, .TimelineItem-body a div, .TimelineItem-body form span, .TimelineItem-body form div",
      "[role=\"navigation\"] p",
      "[data-testid=\"commit-row-item\"] h4",
      ".font-mktg",
      ".search-title,.search-match",
      ".pinned-item-desc",
      "#repo-content-turbo-frame .markdown-title",
      "[app-name='blackbird-search'] [data-hpc='true']",
      ".topic-box > a > p:nth-of-type(2)",
      "main a[href^='/topics/'] > p",
      "[data-testid=\"listitem-title-link\"]",
      "#repo-content-turbo-frame p",
      "#repo-content-turbo-frame h4",
      "[aria-label=\"card content\"] .flex-column > div:nth-child(2)",
      "[class*=TitleHeader]",
      ".bpDald",
      ".discussion-title",
      ".copilotPreview__footer",
      ".heading-element",
      ".js-feed-item-component h3 a[data-hovercard-type=pull_request]",
      "[aria-labelledby=outline-id] nav",
      "[data-testid='issue-pr-title-link']",
      "[data-testid='issue-listitem-title-link']",
      "div.user-profile-bio",
      "div.news > div.js-notice",
      "#memex-project-view-root a [class^='prc-Text-Text']",
      "[class^=OverviewContent] [class*=DirectoryRichtextContent]",
      "[id^=pullrequestreview]",
      "[class^='ChatMessage']",
      "a[data-hovercard-type='issue']",
      "[class*=prc-FormControl] > [class*=prc-Text], [class*=prc-FormControl] [class*=prc-FormControl-LabelContainer] [class*=prc-Text]",
      "[data-testid='beginners-playlist-section']",
      "[data-testid='getting-started-checklist-section']",
      "[data-testid='docs-section']",
      "[data-testid='recommendations-section']",
      ".Layout-main react-partial pre",
      ".feed-item-content section[data-view-component] [class='flex-1 d-flex flex-column'] div:nth-child(2)",
      "#org-new-form",
      ".trial-info-large",
      ".dfd-trial__container-form",
      "dialog-helper",
      ".blankslate-heading",
      ".activity-overview-box",
      "#spaces-list",
      "[class*='ContentView-module__serviceDescription']",
      ".BannerDescription",
      "copilot-user-settings",
      "h2:has(~ copilot-user-settings)",
      "div:has(~ copilot-user-settings)",
      "[class='f4 color-fg-muted col-md-6 mx-auto']",
      "[class='col-lg-9 position-relative pr-lg-5 mb-6 mr-lg-5']",
      "[class*='IssueIndexPage-module__middlePaneGrid'] div[class='p-4 text-center rounded-2 border color-border-muted']",
      "[class*='ModelsPlaygroundRoute-module__playgroundContainer']",
      ".markdown-body",
      "article [class='f6 color-fg-muted mt-1']"
    ],
    "excludeSelectors.add": [
      "a[data-hovercard-type]"
    ],
    "injectedCss.add": [
      ".bpDald,.discussion-title {-webkit-line-clamp:unset!important;}",
      "li>div[class*='Box-sc'],div[class*='Box-sc']>button[class*='prc-Token-TokenBase'],li[class*='card-label-module']>button[class*='prc-Token-TokenBase'] {height:unset!important;}",
      "#memex-project-view-root [class*=table-row__StyledTableRow-sc],#memex-project-view-root [class*=base-cell-module__Box] {height:unset!important;}",
      "[class*='GridCard-module__description'] {-webkit-line-clamp: unset;}"
    ],
    "atomicBlockSelectors": [
      "[itemprop=description]"
    ],
    "additionalExcludeSelectors.add": [
      "[data-test-selector='commit-tease-commit-message']",
      "[data-test-selector='create-branch.developmentForm']",
      "div.Box-header.position-relative",
      "div.blob-wrapper-embedded",
      "div.Box.Box--condensed.my-2",
      "div.jp-CodeCell",
      "[aria-label=\"Account\"] .markdown-title",
      ".js-repos-container .markdown-title",
      "a.anchor",
      "div.file-navigation + div.Box",
      "[data-testid^='breadcrumbs']",
      "[data-ga-click*=Star]",
      ".markdown-body h3",
      "div.vcard-names-container",
      "div.js-disable-context-menu",
      ".BorderGrid-cell a[role='link']",
      ".BorderGrid-cell .topic-tag-link",
      "table[class*='Table-module__Box']",
      ".author,.assignee",
      ".blob-code",
      ".timeline-comment-header",
      ".review-thread-reply",
      ".codeRepository",
      "[title='Label: Private']",
      "[aria-label*='language']:not(li:has([data-testid='issue-listitem-title-link']))",
      ".js-suggested-changes-blob.diff-view",
      "h1[data-component=PH_Title] span[class*='issueNumberText']",
      "[data-testid=list-row-repo-name-and-number]"
    ],
    "extraBlockSelectors.add": [
      "bdi"
    ],
    "extraInlineSelectors": [
      "g-emoji",
      "a.anchor"
    ],
    "stayOriginalTags": [
      "CODE",
      "TT",
      "G-EMOJI",
      "IMG",
      "SUP",
      "SUB"
    ],
    "enableRichTranslate": false,
    "enableRichTranslate.add_v.[1.12.1]": true,
    "stayOriginalSelectors.add": [
      ".issue-link"
    ],
    "detectParagraphLanguage": true,
    "globalStyles": {
      ".TimelineItem-body .Link--primary": "-webkit-line-clamp: unset;"
    },
    "preTranslateLimiter.add_v.[1.12.1]": {
      "keys": [
        "side"
      ],
      "side.selectors": [
        "aside.feed-right-sidebar",
        "aside[aria-labelledby*='copilot-navigation']",
        "[data-testid*='facets-pane']"
      ]
    },
    "isTransformPreTagNewLine": true,
    "aiWriting.add": {
      "scene": "github-issue",
      "appendSelector": "[data-testid=\"markdown-editor-footer\"] > div:last-child",
      "titleSelector": ".markdown-title",
      "contentSelector": "#issue-body-viewer .markdown-body",
      "commentSelector": ".react-issue-comment",
      "insertInputSelector": "[class*=\"prc-Textarea\"]",
      "injectDelay": 1000,
      "injectCSS": ".immersive-translate-ai-writing-button { color: #25292e; background-color: #f6f8fa; border-color: #818B981A; border-top-right-radius: 0 !important; border-bottom-right-radius: 0 !important;} .immersive-translate-ai-writing-action-wrapper { gap: 0;} .immersive-translate-ai-writing-more-action-icon { background-color: #f6f8fa; height: 29px; border: 1px solid #818B981A; border-left: none !important; border-top-right-radius: 6px !important; border-bottom-right-radius: 6px !important; display: flex; align-items: center; justify-content: center;} .dark .immersive-translate-ai-writing-button { color: #fff; background-color: #212830; border-color: #818B981A; border-top-right-radius: 0 !important; border-bottom-right-radius: 0 !important;} .dark .immersive-translate-ai-writing-more-action-icon { background-color: #212830; height: 29px; border: 1px solid #818B981A; border-left: none !important; border-top-right-radius: 6px !important; border-bottom-right-radius: 6px !important; display: flex; align-items: center; justify-content: center;} .button-logo { color: #EA4C89; }"
    }
  },
  {
    "id": "github-blog",
    "matches": [
      "github.blog"
    ],
    "injectedCss": [
      "font {word-break: break-all !important;}"
    ],
    "additionalExcludeSelectors.remove": [
      ".notranslate",
      "[translate=no]"
    ]
  },
  {
    "id": "githubNotebook",
    "matches": "notebooks.githubusercontent.com",
    "useIframePostMessage": false,
    "excludeSelectors": [
      "div.jp-CodeCell"
    ]
  },
  {
    "id": "rmit",
    "matches": [
      "www.rmit.edu.au"
    ],
    "injectedCss": [
      ".colfeature-content{height:unset!important;}"
    ]
  },
  {
    "id": "mfacebook",
    "matches": "m.facebook.com",
    "selectors": [
      "div[dir=auto][style]",
      "div[dir=auto][class]",
      "span[lang]",
      "[data-pagelet=BizInboxMessengerMessageListContainer] span",
      "[data-pagelet=BizInboxContextCardDetail] span",
      "[data-type=container][data-mcomponent=MContainer][class='m displayed'] .native-text",
      "[data-mcomponent=ServerTextArea] .native-text"
    ],
    "excludeSelectors.add": [
      "[data-ad-comet-preview=message] [role=button]",
      "[role=button]"
    ],
    "injectedCss": [
      ".native-text.rslh {line-height:unset!important;}"
    ],
    "translationMode": "translation",
    "detectParagraphLanguage": true
  },
  {
    "id": "facebook",
    "matches": "*.facebook.com",
    "excludeMatches": [
      "www.facebook.com/business/*",
      "business.facebook.com/*",
      "www.facebook.com/help*",
      "www.facebook.com/settings*",
      "www.facebook.com/ads/library/*",
      "developers.facebook.com/*",
      "www.facebook.com/v20.0/plugins/*",
      "www.facebook.com/support*",
      "www.facebook.com/terms*",
      "www.facebook.com/privacy*"
    ],
    "selectors": [
      "div[dir=auto][style]",
      "div[dir=auto][class]",
      "span[lang]",
      "[data-pagelet=BizInboxMessengerMessageListContainer] span",
      "[data-pagelet=BizInboxContextCardDetail] span",
      ".xod5an3",
      "[class='x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz x1sur9pj xkrqix3 xzsf02u x1pd3egz']",
      "#PNG_EXPORT",
      ".fb_content.clearfix",
      "[role='main']",
      "[role='region']",
      "[role='presentation']",
      "form#platformDialogForm"
    ],
    "excludeSelectors.add": [
      "[data-ad-comet-preview=message] [role=button]",
      "object[type='nested/pressable']",
      "[data-ad-rendering-role=profile_name]"
    ],
    "insertPosition": "afterend",
    "preWhitespaceDetectedTags": [
      "DIV",
      "SPAN"
    ],
    "translationClasses": [
      "immersive-translate-text"
    ],
    "injectedCss.add": [
      "._4ik4._4ik5 {max-height:unset!important;}",
      ".native-text.rslh {line-height:unset!important;}"
    ],
    "skipTrailTextRegex": "…",
    "detectParagraphLanguage": true,
    "subtitleRule.add": {
      "type": "subsrt",
      "subtitleUrlRegExp": "srt"
    }
  },
  {
    "id": "facebookV20VideoPlugin",
    "matches": "www.facebook.com/v20.0/plugins/*",
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "domCheckTimeout": 1,
    "subtitleRule.add": {
      "type": "subsrt",
      "subsrtFormat": "vtt",
      "hookType": "xhr",
      "subtitleUrlRegExp": "\\.srt",
      "quickButtonRule": {
        "appendSelector": "._1c7f._1c7h",
        "insertBeforeSelector": "._1c7f._1c7h ._2j04"
      },
      "injectedCss": [
        "#immersive-translate-quick-button-container,.immersive-translate-quick-button-container { display: inline-block; position: relative; top: 10px; }"
      ],
      "attachRule": {
        "appendSelector": "._53j5._37u6._9kkd",
        "injectedGlobalCSS": [
          "._30vn._30vp._5z68 {display: none!important;} "
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "youtubeMobile",
    "matches": [
      "m.youtube.com"
    ],
    "enableDynamicIgnore": false,
    "selectors": [
      ".comment-text",
      "#content-text",
      ".media-item-headline",
      ".slim-video-information-title",
      ".yt-spec-button-view-model",
      ".yt-core-attributed-string > span",
      ".yt-core-attributed-string",
      ".shortsLockupViewModelHostMetadataTitle",
      ".YtmCommentRendererText",
      ".ytAttributedStringHost",
      ".title"
    ],
    "skipDynamicMarkSelectors": [
      "ytm-comment-replies-renderer",
      "panel-container",
      "panel-container *"
    ],
    "shareConfig": {
      "injectCss": false,
      "removeSelectors": [
        "iron-iconset-svg",
        "iframe",
        "ytd-watch-next-secondary-results-renderer",
        ".immersive-translate-error-modal-shadow-root",
        "noscript",
        "script"
      ]
    },
    "excludeTags.remove": [
      "BUTTON"
    ],
    "additionalExcludeSelectors": [
      ".ytp-caption-window-container",
      "text",
      ".imt-caption-container",
      "ytd-live-chat-frame"
    ],
    "mutationExcludeSelectors.add": [
      ".imt-caption-container *"
    ],
    "excludeSelectors.add": [
      ".ytm-badge-and-byline-item-byline"
    ],
    "subtitleRule.add": {
      "type": "youtube",
      "filterAmbientSoundsRegexForNormalSubtitle": "\\s*\\[[^\\]]*\\]\\s*|\\s*>>\\s*",
      "hookType": "xhr_response",
      "allowFreeUserLive": true,
      "subtitleUrlRegExp": "(/api/timedtext)",
      "translateSelectors": [
        ".caption-window",
        ".caption-visual-line"
      ],
      "videoPlayerSelector": ".html5-video-player.playing-mode,.html5-video-player.paused-mode",
      "loadingContainerSelector": ".ytp-caption-window-container",
      "captionContainerSelector": "#ytp-caption-window-container",
      "captionWindowSelector": ".caption-window",
      "videoADSelector": ".ytp-ad-player-overlay",
      "injectedCss": [
        "#player-shorts-container .ytp-caption-window-bottom {top: 40px; bottom: unset!important;}",
        ".ytwPlayerTopControlsHost {position: relative; z-index: 1001;}"
      ],
      "videoSelector": ".html5-video-player.playing-mode video,.html5-video-player.paused-mode video",
      "translationOnlyPattern": [
        "m.youtube.com/live*",
        "m.youtube.com/watch*",
        "m.youtube.com/embed*",
        "m.youtube.com/shorts*"
      ],
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] #immersive-translate-caption-window {direction: rtl;}"
      ],
      "attachRule": {
        "appendSelector": "#player-container-id",
        "positionRules": [
          {
            "urlPattern": [
              "m.youtube.com/shorts*"
            ],
            "defaultPosition": "top",
            "cacheKeySuffix": "shorts-full"
          }
        ],
        "showSupportTips": false,
        "injectedCSS": [
          ".imt-caption-container {z-index:1;}",
          ".imt-caption-window {margin-bottom: 0; bottom: 2%; user-select:text; -webkit-user-select:text;}",
          ".imt-caption-window {width: 90%;}"
        ],
        "injectedGlobalCSS": [
          ".caption-window {display: none;} ",
          ".page-shorts #immersive-translate-caption-window { height: 180px;}",
          ".prevent-controls-collision {z-index: 0 !important;}",
          ".ytPlayerProgressBarDragContainer, .player-controls-middle, .player-controls-middle-core-buttons {z-index: 1000 !important;}"
        ],
        "injectedGlobalCSS.add_v.[1.33.2]": [
          ".caption-window {display: none;} ",
          ".page-shorts #immersive-translate-caption-window { height: 100%; top: 0; bottom: 0;}",
          ".prevent-controls-collision {z-index: 0 !important;}",
          ".ytPlayerProgressBarDragContainer, .player-controls-middle, .player-controls-middle-core-buttons {z-index: 1000 !important;}"
        ]
      }
    },
    "subtitleRule.add_v.[1.17.3]": {
      "quickButtonRule": {
        "appendSelector": ".player-controls-top",
        "injectCSS": ".logo,.logo svg { height: 20px !important; width: 20px !important;} .imt-quick-subtitle-pop-content {bottom: unset !important; top: 40px !important;}",
        "injectCSS.add_v.[1.32.3]": ".logo,.logo svg { height: 20px !important; width: 20px !important;} .imt-quick-subtitle-ai-subtitle-tip {top: 43px !important; bottom: unset !important;}",
        "injectedGlobalCSS": ".player-controls-top.with-video-details { z-index: 10; }"
      },
      "quickButtonRules": [
        {
          "appendSelector": ".mobile-topbar-header-content",
          "insertBeforeSelector": ".icon-button",
          "urlPattern": [
            "m.youtube.com/shorts*"
          ],
          "retryCheckMs": 5000,
          "retryIntervalMs": 250,
          "injectCSS": ".imt-quick-subtitle-pop-content { top: 44px; bottom: unset; transform: translateX(40%); } ",
          "injectCSS.add_v.[1.32.3]": ".imt-quick-subtitle-ai-subtitle-tip {top: 43px !important; bottom: unset !important;}"
        }
      ],
      "aiSubtitle": {
        "enable": true,
        "urlRegex": [
          "m.youtube.com/watch*",
          "m.youtube.com/embed*",
          "m.youtube.com/live*"
        ],
        "maxDurationHours": 4
      }
    },
    "wrapperPrefix": "",
    "wrapperSuffix": "",
    "observeUrlChange": true,
    "atomicBlockSelectors": [
      ".comment-text"
    ],
    "injectedCss": [
      ".immersive-translate-target-wrapper img { width: 16px; height: 16px }",
      ".shortsLockupViewModelHostMetadataTitle,h4.compact-media-item-headline {max-height:unset !important;line-clamp:unset !important;overflow:unset !important;-webkit-line-clamp:unset !important;}",
      ".comment-text {max-height:unset;}",
      ".details,.subhead,.video-card-title,.media-item-headline {max-height:unset!important;-webkit-line-clamp:unset!important;}",
      "truncated-text-content {max-height: unset !important;}"
    ],
    "extraBlockSelectors.add": [
      ".caption-visual-line"
    ],
    "advanceMergeConfig": [
      {
        "condition": "platform==imtAndroid",
        "advanceConfig": {
          "generalRule": {
            "subtitleRule.add": {
              "subtitleButtonSelector": ".ytmClosedCaptioningButtonButton"
            }
          }
        }
      },
      {
        "condition": "platform==imtAndroid || platform==imtIOSNew || platform==imtIOS",
        "advanceConfig": {
          "generalRule": {
            "subtitleRule.add": {
              "quickButtonRules": []
            }
          }
        }
      }
    ]
  },
  {
    "id": "twitch",
    "matches": "www.twitch.tv",
    "excludeSelectors.add": [
      ".persistent-player",
      ".chat-line__username-container",
      ".chat-line__no-background span[aria-hidden=true]",
      "[data-a-target=animated-channel-viewers-count],.live-time"
    ]
  },
  {
    "id": "kick",
    "matches": [
      "kick.com",
      "www.kick.com"
    ],
    "injectedCss": [
      "html[imt-state=dual] #predictions-panel > div > .opacity-0, html[imt-state=translation] #predictions-panel > div > .opacity-0 { display: none !important; }"
    ]
  },
  {
    "id": "youtubeeducation",
    "matches": "https://www.youtubeeducation.com/embed*",
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "domCheckTimeout": 1,
    "subtitleRule.add": {
      "type": "youtube",
      "filterAmbientSoundsRegexForNormalSubtitle": "\\s*\\[[^\\]]*\\]\\s*|\\s*>>\\s*",
      "hookType": "xhr_response",
      "subtitleUrlRegExp": "(/api/timedtext)",
      "translateSelectors": [
        ".caption-window",
        ".caption-visual-line"
      ],
      "videoPlayerSelector": ".html5-video-player",
      "loadingContainerSelector": ".ytp-caption-window-container",
      "captionContainerSelector": "#ytp-caption-window-container",
      "captionWindowSelector": ".caption-window",
      "videoADSelector": ".ytp-ad-player-overlay",
      "videoSelector": ".html5-video-player video",
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] #immersive-translate-caption-window {direction: rtl;}"
      ],
      "attachRule": {
        "appendSelector": ".html5-video-player",
        "showSupportTips": false,
        "injectedCSS": [
          ".imt-caption-container {z-index:40;}",
          ".imt-caption-window {margin-bottom: 0; bottom: 2%; user-select:text; -webkit-user-select:text;}",
          ".imt-caption-window {width: 90%;}"
        ],
        "injectedGlobalCSS": [
          ".caption-window {display: none;} ",
          "#shorts-player #immersive-translate-caption-window { height: 20%;}",
          ".html5-video-player:not(.ytp-autohide) #immersive-translate-caption-window {bottom: 60px;}"
        ]
      }
    }
  },
  {
    "id": "yotube-embed",
    "matches": "https://www.youtube.com/embed*",
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "domCheckTimeout": 1,
    "subtitleRule.add": {
      "type": "youtube",
      "filterAmbientSoundsRegexForNormalSubtitle": "\\s*\\[[^\\]]*\\]\\s*|\\s*>>\\s*",
      "hookType": "xhr_response",
      "allowFreeUserLive": true,
      "proLiveSubtitleTranslateService": "babelfast-pro",
      "subtitleUrlRegExp": "(/api/timedtext)",
      "translateSelectors": [
        ".caption-window",
        ".caption-visual-line"
      ],
      "videoPlayerSelector": ".html5-video-player.playing-mode,.html5-video-player.paused-mode",
      "loadingContainerSelector": ".ytp-caption-window-container",
      "captionContainerSelector": "#ytp-caption-window-container",
      "captionWindowSelector": ".caption-window",
      "videoADSelector": ".ytp-ad-player-overlay",
      "subtitleButtonSelector": ".html5-video-player.playing-mode .ytp-subtitles-button,.html5-video-player.paused-mode .ytp-subtitles-button",
      "languageSelector": ".ytp-menuitem-label",
      "injectedCss": [
        "#shorts-player .ytp-caption-window-bottom {top: 2%; bottom: unset!important;} #immersive-translate-quick-button-container,.immersive-translate-quick-button-container {font-size: 12px;z-index:1001;}"
      ],
      "quickButtonRule": {
        "appendSelector": ".ytp-right-controls",
        "insertBeforeSelector": ".ytp-subtitles-button",
        "injectedGlobalCSS": ".immersive-translate-quick-button-container {display: inline-block; vertical-align: top; height: 42px;}"
      },
      "videoSelector": ".html5-video-player.playing-mode video,.html5-video-player.paused-mode video",
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] #immersive-translate-caption-window {direction: rtl;}"
      ],
      "attachRule": {
        "appendSelector": ".html5-video-player.playing-mode,.html5-video-player.paused-mode",
        "showSupportTips": false,
        "injectedCSS": [
          ".imt-caption-container {z-index:40;}",
          ".imt-caption-window {margin-bottom: 0; bottom: 2%; user-select:text; -webkit-user-select:text;}",
          ".imt-caption-window {width: 90%;}"
        ],
        "injectedGlobalCSS": [
          ".caption-window {display: none;} ",
          "#shorts-player #immersive-translate-caption-window { height: 20%;}",
          ".html5-video-player:not(.ytp-autohide) #immersive-translate-caption-window {bottom: 60px;}"
        ]
      },
      "allowTempEnableSubtitle": true
    }
  },
  {
    "id": "youtube",
    "matches": "www.youtube.com",
    "excludeMatches": [
      "https://www.youtube.com/t/terms_paidservice"
    ],
    "enableDynamicIgnore": false,
    "blockMinTextCount": 0,
    "blockMinWordCount": 0,
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "domCheckTimeout": 1,
    "detectParagraphLanguage": true,
    "lineBreakMaxTextCount": 0,
    "shareConfig": {
      "injectCss": false,
      "removeSelectors": [
        "iron-iconset-svg",
        "iframe",
        "ytd-watch-next-secondary-results-renderer",
        ".immersive-translate-error-modal-shadow-root",
        "noscript",
        "script"
      ]
    },
    "bodyRule.add": {
      "enable": false
    },
    "pageLangDetectWeight.add": {
      "body": 2
    },
    "additionalExcludeSelectors.add": [
      ".ytp-caption-window-container",
      "text",
      ".imt-caption-container",
      "ytd-button-renderer",
      ".ytp-sfn-content div :last-child",
      "ytd-live-chat-frame",
      "yt-button-shape",
      "ytd-comments-header-renderer",
      "yt-content-metadata-view-model",
      "yt-description-preview-view-model button",
      ".yt-page-header-view-model__page-header-title"
    ],
    "additionalExcludeSelectors.remove.[1.14.1]": [
      "ytd-live-chat-frame"
    ],
    "injectedCss": [
      ".immersive-translate-target-wrapper img { width: 16px; height: 16px }",
      ".metadata-snippet-container {max-height: unset !important;}",
      ".immersive-translate-target-wrapper {text-align: left;}",
      ".immersive-translate-target-wrapper[dir=rtl] {text-align: right;}",
      "#commentCanvas .cmt {display:flex;flex-direction: column;}",
      "#commentCanvas .cmt font br {display: none;}",
      "#video-title,h1.ytd-watch-metadata,.ytd-video-renderer,.yt-lockup-metadata-view-model-wiz__title {-webkit-line-clamp: unset !important;max-height: unset !important;}",
      "yt-formatted-string#video-title,.ShortsLockupViewModelHostOutsideMetadataTitle {-webkit-line-clamp: unset !important;max-height: unset !important;}",
      "ytd-expander.ytd-comment-renderer {--ytd-expander-max-lines: 1000;}",
      ".page-header-view-model-wiz__page-header-title--page-header-title-large {-webkit-line-clamp: unset !important;max-height: unset !important;}",
      "#title,#video-title,.yt-lockup-metadata-view-model__title,.ytLockupMetadataViewModelTitle,.shortsLockupViewModelHostOutsideMetadataTitle,h1.ytd-watch-metadata,.ytwFeedAdMetadataViewModelHostTextsStyleStandardHeadline {-webkit-line-clamp: unset !important;max-height: unset !important;}"
    ],
    "isTranslateTitle": false,
    "observeUrlChange": true,
    "selectors": [
      "yt-formatted-string[slot=content].ytd-comment-renderer",
      "yt-formatted-string.ytd-video-renderer",
      "yt-formatted-string#content-text",
      "h1",
      "yt-formatted-string#video-title",
      ".ytLockupMetadataViewModelTitle,.shortsLockupViewModelHostOutsideMetadataTitle",
      "yt-formatted-string.span",
      "span#video-title",
      "a#video-title",
      "yt-formatted-string.ytd-transcript-segment-renderer",
      "#description-inline-expander > yt-attributed-string > span",
      "yt-attributed-string > span",
      "yt-formatted-string > span",
      "ytd-notification-renderer .message",
      "#message",
      ".yt_to_text_transcript_text",
      "video-summary-content-view-model",
      ".yt-core-attributed-string",
      "#title",
      ".product-item-title",
      ".product-item-price",
      "#commentCanvas .cmt",
      ".ytwTranscriptSegmentViewModelHost",
      "ytd-shorts ytd-structured-description-content-renderer .ytVideoTitleHeaderViewModelTitle",
      "ytd-shorts ytd-expandable-video-description-body-renderer #plain-snippet-text"
    ],
    "extraBlockSelectors.add": [
      "yt-formatted-string.ytd-transcript-segment-renderer",
      ".caption-visual-line"
    ],
    "likePreSelectors.add": [
      "#description-inline-expander .yt-core-attributed-string span",
      "#content-text span"
    ],
    "isTransformPreTagNewLine": true,
    "mutationExcludeSelectors.add": [
      ".imt-caption-container *"
    ],
    "advanceMergeConfig": [
      {
        "condition": "true",
        "advanceConfig": {
          "generalRule": {
            "subtitleRule.add": {
              "aiSubtitle": {
                "enable": true,
                "urlRegex": [
                  "www.youtube.com/live*",
                  "www.youtube.com/watch*",
                  "www.youtube.com/embed*"
                ],
                "maxDurationHours": 4
              }
            }
          }
        }
      },
      {
        "condition": "platform==imtAndroid || platform==imtIOSNew || platform==imtIOS",
        "advanceConfig": {
          "generalRule": {
            "subtitleRule.add": {
              "quickButtonRules": []
            }
          }
        }
      }
    ],
    "inputConfig.add": {
      "autoLanguageSelectors": [
        "parentElementTo #comment yt-attributed-string#content-text",
        "#description-inline-expander"
      ]
    },
    "subtitleRule.add": {
      "type": "youtube",
      "filterAmbientSoundsRegexForNormalSubtitle": "\\s*\\[[^\\]]*\\]\\s*|\\s*>>\\s*",
      "hookType": "xhr_response",
      "allowFreeUserLive": true,
      "proLiveSubtitleTranslateService": "babelfast-pro",
      "subtitleUrlRegExp": "(/api/timedtext)",
      "translateSelectors": [
        ".caption-window",
        ".caption-visual-line"
      ],
      "videoPlayerSelector": ".html5-video-player.playing-mode,.html5-video-player.paused-mode",
      "loadingContainerSelector": ".ytp-caption-window-container",
      "captionContainerSelector": "#ytp-caption-window-container",
      "captionWindowSelector": ".caption-window",
      "videoADSelector": ".ytp-ad-player-overlay",
      "translationOnlyPattern": [
        "www.youtube.com/live*",
        "www.youtube.com/watch*",
        "www.youtube.com/embed*",
        "www.youtube.com/shorts*"
      ],
      "subtitleButtonSelector": ".html5-video-player.playing-mode .ytp-subtitles-button,.html5-video-player.paused-mode .ytp-subtitles-button",
      "languageSelector": ".ytp-menuitem-label",
      "injectedCss": [
        "#shorts-player .ytp-caption-window-bottom {top: 2%; bottom: unset!important;} #immersive-translate-quick-button-container,.immersive-translate-quick-button-container {font-size: 12px;z-index:1001;}"
      ],
      "quickButtonRule": {
        "appendSelector": ".ytp-right-controls",
        "insertBeforeSelector": ".ytp-right-controls-left",
        "injectedGlobalCSS": ".ytp-chrome-controls {position: relative; z-index: 70;}"
      },
      "quickButtonRules": [
        {
          "appendSelector": ".ytdShortsPlayerControlsRightControls",
          "insertBeforeSelector": "#closed-captioning-button-container",
          "urlPattern": [
            "www.youtube.com/shorts*"
          ],
          "retryCheckMs": 5000,
          "retryIntervalMs": 250,
          "injectCSS": ".imt-quick-subtitle-pop-content { top: 44px; bottom: unset; transform: translateX(40%); } ",
          "injectCSS.add_v.[1.32.3]": ""
        }
      ],
      "videoSelector": ".html5-video-player.playing-mode video,.html5-video-player.paused-mode video",
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] #immersive-translate-caption-window {direction: rtl;}"
      ],
      "attachRule": {
        "appendSelector": ".html5-video-player.playing-mode,.html5-video-player.paused-mode",
        "positionRules": [
          {
            "urlPattern": [
              "www.youtube.com/shorts*"
            ],
            "defaultPosition": "top",
            "cacheKeySuffix": "shorts-full"
          }
        ],
        "showSupportTips": false,
        "injectedCSS": [
          ".imt-caption-container {z-index:40;}",
          ".imt-caption-window {margin-bottom: 0; bottom: 2%; user-select:text; -webkit-user-select:text;}",
          ".imt-caption-window {width: 90%;}"
        ],
        "injectedGlobalCSS": [
          ".caption-window {display: none;} ",
          "#shorts-player #immersive-translate-caption-window { height: 20%;}",
          ".html5-video-player:not(.ytp-autohide) #immersive-translate-caption-window {bottom: 60px;}"
        ],
        "injectedGlobalCSS.add_v.[1.33.2]": [
          ".caption-window {display: none;} ",
          "#shorts-player #immersive-translate-caption-window { height: 100%; top: 0; bottom: 0;}",
          ".html5-video-player:not(.ytp-autohide) #immersive-translate-caption-window {bottom: 60px;}"
        ]
      },
      "allowTempEnableSubtitle": true
    },
    "urlChangeDelay": 2000,
    "wrapperPrefix": "<br/>",
    "wrapperSuffix": ""
  },
  {
    "id": "youtubekids",
    "matches": [
      "www.youtubekids.com"
    ],
    "enableDynamicIgnore": false,
    "blockMinTextCount": 0,
    "blockMinWordCount": 0,
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "domCheckTimeout": 1,
    "detectParagraphLanguage": true,
    "lineBreakMaxTextCount": 0,
    "isTranslateTitle": false,
    "observeUrlChange": true,
    "globalStyles": {
      "#video-title": "-webkit-line-clamp: unset;max-height: unset;",
      "h1.ytd-watch-metadata": "-webkit-line-clamp: unset;max-height: unset;",
      "yt-formatted-string#video-title": "-webkit-line-clamp: unset;max-height: unset;",
      "ytd-expander.ytd-comment-renderer": "--ytd-expander-max-lines: 1000;",
      ".details.ytk-compact-video-renderer": "height: unset;",
      ".primary-text.ytk-compact-video-renderer": "-webkit-line-clamp: unset;max-height: unset;"
    },
    "subtitleRule.add": {
      "type": "youtube",
      "filterAmbientSoundsRegexForNormalSubtitle": "\\s*\\[[^\\]]*\\]\\s*|\\s*>>\\s*",
      "hookType": "xhr_response",
      "allowFreeUserLive": true,
      "proLiveSubtitleTranslateService": "babelfast-pro",
      "subtitleUrlRegExp": "(/api/timedtext)",
      "translateSelectors": [
        ".caption-window",
        ".caption-visual-line"
      ],
      "videoPlayerSelector": ".html5-video-player.playing-mode,.html5-video-player",
      "loadingContainerSelector": ".ytp-caption-window-container",
      "captionContainerSelector": "#ytp-caption-window-container",
      "captionWindowSelector": ".caption-window",
      "videoADSelector": ".ytp-ad-player-overlay",
      "translationOnlyPattern": [
        "www.youtubekids.com/live*",
        "www.youtubekids.com/watch*",
        "www.youtubekids.com/embed*",
        "www.youtubekids.com/shorts*"
      ],
      "subtitleButtonSelector": ".html5-video-player.playing-mode .ytp-subtitles-button,.html5-video-player .ytp-subtitles-button",
      "languageSelector": ".ytp-menuitem-label",
      "injectedCss": [
        "#shorts-player .ytp-caption-window-bottom {top: 2%; bottom: unset!important;} #immersive-translate-quick-button-container,.immersive-translate-quick-button-container {font-size: 12px;z-index:1001;}"
      ],
      "quickButtonRule": {
        "appendSelector": "#player-controls-right",
        "insertBeforeSelector": "#cc-button"
      },
      "videoSelector": ".html5-video-player.playing-mode video,.html5-video-player video",
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] #immersive-translate-caption-window {direction: rtl;}"
      ],
      "attachRule": {
        "appendSelector": ".html5-video-player.playing-mode,.html5-video-player",
        "injectedCSS": [
          ".imt-caption-container {z-index:40;}",
          ".imt-caption-window {margin-bottom: 0; bottom: 2%;}",
          ".imt-caption-window {width: 90%;}"
        ],
        "injectedGlobalCSS": [
          ".caption-window {display: none;} ",
          "#shorts-player #immersive-translate-caption-window { height: 20%;}",
          ".html5-video-player:not(.ytp-autohide) #immersive-translate-caption-window {bottom: 60px;}"
        ]
      },
      "allowTempEnableSubtitle": true
    }
  },
  {
    "id": "tvYoutube",
    "matches": "tv.youtube.com",
    "enableDynamicIgnore": false,
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "domCheckTimeout": 1,
    "subtitleRule.add": {
      "type": "youtube",
      "filterAmbientSoundsRegexForNormalSubtitle": "\\s*\\[[^\\]]*\\]\\s*|\\s*>>\\s*",
      "hookType": "xhr_response",
      "allowFreeUserLive": true,
      "proLiveSubtitleTranslateService": "babelfast-pro",
      "humanPreferred": false,
      "subtitleUrlRegExp": "(/api/timedtext)",
      "translateSelectors": [
        ".caption-window",
        ".caption-visual-line"
      ],
      "videoPlayerSelector": ".html5-video-player",
      "loadingContainerSelector": ".ytp-caption-window-container",
      "captionContainerSelector": "#ytp-caption-window-container",
      "captionWindowSelector": ".caption-window",
      "videoADSelector": ".ytp-ad-player-overlay",
      "translationOnlyPattern": [
        "tv.youtube.com/watch*"
      ],
      "subtitleButtonSelector": ".ytp-subtitles-button",
      "languageSelector": ".ytp-menuitem-label",
      "injectedCss": [
        "#shorts-player .ytp-caption-window-bottom {top: 2%; bottom: unset!important;} #immersive-translate-quick-button-container,.immersive-translate-quick-button-container {font-size: 12px;z-index:1001;}"
      ],
      "quickButtonRule": {
        "appendSelector": ".ypcs-control-buttons-right",
        "insertBeforeSelector": ".ypcs-control-buttons-right .ypcs-volume-control-slot"
      },
      "videoSelector": ".html5-video-player video,.html5-video-player video",
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] #immersive-translate-caption-window {direction: rtl;}"
      ],
      "attachRule": {
        "appendSelector": ".html5-video-player",
        "injectedCSS": [
          ".imt-caption-container {z-index:40;}",
          ".imt-caption-window {margin-bottom: 2%;}",
          ".imt-caption-window {width: 90%;}"
        ],
        "injectedGlobalCSS": [
          ".caption-window {display: none;} ",
          "#shorts-player #immersive-translate-caption-window { height: 20%;}",
          ".html5-video-player:not(.ytp-autohide) #immersive-translate-caption-window {bottom: 60px;}"
        ]
      }
    }
  },
  {
    "id": "youtube-subtitle",
    "matches": [
      "www.youtube-nocookie.com",
      "music.youtube.com"
    ],
    "enableDynamicIgnore": false,
    "extraBlockSelectors.add": [
      ".caption-visual-line"
    ],
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "domCheckTimeout": 1,
    "excludeSelectors.add": [
      ".captions-text",
      ".ytp-caption-segment"
    ],
    "subtitleRule.add": {
      "type": "youtube",
      "filterAmbientSoundsRegexForNormalSubtitle": "\\s*\\[[^\\]]*\\]\\s*|\\s*>>\\s*",
      "hookType": "xhr_response",
      "allowFreeUserLive": true,
      "proLiveSubtitleTranslateService": "babelfast-pro",
      "subtitleUrlRegExp": "/api/timedtext",
      "translateSelectors": [
        ".caption-window",
        ".caption-visual-line"
      ],
      "videoPlayerSelector": ".html5-video-player",
      "loadingContainerSelector": ".ytp-caption-window-container",
      "captionContainerSelector": "#ytp-caption-window-container",
      "captionWindowSelector": ".caption-window",
      "videoADSelector": ".ytp-ad-player-overlay",
      "translationOnlyPattern": [
        "www.youtube-nocookie.com/embed*",
        "music.youtube.com/watch*"
      ],
      "subtitleButtonSelector": ".ytp-subtitles-button",
      "languageSelector": ".ytp-menuitem-label",
      "injectedCss": [
        "#shorts-player .ytp-caption-window-bottom {top: 2%; bottom: unset!important;}"
      ],
      "quickButtonRule": {
        "appendSelector": ".ytp-chrome-controls",
        "insertBeforeSelector": ".ytp-right-controls"
      },
      "videoSelector": ".html5-video-player video",
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] #immersive-translate-caption-window {direction: rtl;}"
      ],
      "attachRule": {
        "appendSelector": ".html5-video-player",
        "injectedCSS": [
          ".imt-caption-container {z-index:40;}",
          ".imt-caption-window {margin-bottom: 2%;}",
          ".imt-caption-window {width: 90%;}"
        ],
        "injectedGlobalCSS": [
          ".caption-window {display: none;} ",
          "#shorts-player #immersive-translate-caption-window { height: 20%;}",
          ".html5-video-player:not(.ytp-autohide) #immersive-translate-caption-window {bottom: 60px;}"
        ]
      }
    }
  },
  {
    "id": "instagramMessage",
    "matches": [
      "https://www.instagram.com/direct/*"
    ],
    "wrapperPrefix": "<br/>",
    "selectors": [
      "div[dir=auto].html-div"
    ]
  },
  {
    "id": "instagramPost",
    "matches": [
      "https://www.instagram.com/p/*",
      "https://www.instagram.com/reels/*"
    ],
    "blockMinTextCount": 1,
    "paragraphMinTextCount": 2,
    "excludeSelectors": [
      "hr+div span[dir=auto][style] > span"
    ],
    "additionalExcludeSelectors.remove": [
      "h1 br"
    ],
    "selectors": [
      "h1",
      "ul li h3+div span[dir=auto]",
      "hr+div span[dir=auto][style]",
      "div > div[dir=auto]",
      "div:not([class]) > div > div:nth-child(2)"
    ],
    "wrapperPrefix": "<br/>",
    "injectedCss.add": "article ._aagw {position:unset !important;}",
    "immediatelyInjectedCss": [
      "article ._aagw {position:unset !important;}"
    ]
  },
  {
    "id": "otherInstagram",
    "blockMinWordCount": 1,
    "matches": "https://www.instagram.com/*",
    "excludeMatches": [
      "https://www.instagram.com/b/*"
    ],
    "paragraphMinTextCount": 2,
    "selectors": [
      "h1",
      "article span[dir=auto] > span[dir=auto]",
      "._ab1y",
      "ul li h3+div span[dir=auto]",
      "hr+div span[dir=auto][style]",
      "span[dir=auto] > div > span",
      "div > h1[dir=auto]",
      ".x1fkh5qu.x1ddbhtg.x1dlrdel",
      "a[href*='explore/locations/']"
    ],
    "wrapperSuffix": "",
    "immediatelyInjectedCss": [
      "article ._aagw {position:unset !important;}"
    ],
    "preTranslateLimiter.add_v.[1.12.1]": {
      "header.selectors": []
    }
  },
  {
    "id": "1paragraph",
    "matches": "1paragraph.app",
    "selectors": [
      "#book"
    ]
  },
  {
    "id": "poeditor",
    "matches": "https://poeditor.com/projects/*",
    "selectors": [
      ".comment-body",
      ".reference_language .source-string"
    ]
  },
  {
    "id": "substack",
    "matches": [
      "*.substack.com",
      "newsletter.rootsofprogress.org",
      "www.lennysnewsletter.com"
    ],
    "selectorMatches": [
      "link[href^='https://substackcdn.com/bundle/'][rel=preload]"
    ],
    "excludeSelectors": [
      ".publication-footer",
      ".subscribe-footer",
      ".main-menu",
      ".navbar-title-link",
      "[data-testid='navbar']",
      ".navbar-title",
      ".captioned-button-wrap",
      ".subscription-widget-wrap",
      ".tweet-header",
      ".tweet-link-bottom",
      ".expanded-link",
      ".meta-subheader",
      ".comment-meta",
      ".comment-actions"
    ],
    "globalStyles": {
      ".reader2-clamp-lines": "max-height: unset; -webkit-line-clamp: unset;",
      "[class*='clamp-']": "max-height: unset; -webkit-line-clamp:unset;",
      ".blurb-text": "max-height: unset;",
      ".comment-body": "max-height: unset;",
      "[class*='_hideSelectio']": "overflow: scroll;"
    },
    "extraBlockSelectors.add": [
      ".reader2-post-title",
      ".tweet-link-top",
      ".tweet-link-bottom",
      ".expanded-link"
    ],
    "richMoreWordPercent": 0.8,
    "subtitleRule.add": {
      "type": "general",
      "generalSetting": {
        "textKey": "text",
        "startKey": "start",
        "endKey": "end"
      },
      "hookType": "fetch",
      "subtitleUrlRegExp": "transcription\\.json(?:$|[?#])",
      "loadingContainerSelector": "div[class^=\"video-wrapper-\"]",
      "quickButtonRule": {
        "appendSelector": "div[class^=\"video-wrapper-\"]->div[class^=\"bottomInnerControlsContainer-\"] div.pencraft.pc-display-flex.pc-paddingLeft-4.pc-paddingRight-4.pc-reset > div.pencraft.pc-display-flex.pc-gap-8.pc-alignItems-center.pc-reset:last-child",
        "insertBeforeSelector": "div[class^=\"video-wrapper-\"]->div[class^=\"bottomInnerControlsContainer-\"] div.pencraft.pc-display-flex.pc-paddingLeft-4.pc-paddingRight-4.pc-reset > div.pencraft.pc-display-flex.pc-gap-8.pc-alignItems-center.pc-reset:last-child > span:nth-child(3)"
      },
      "videoSelector": "div.video-player.video-player-with-background > video",
      "attachRule": {
        "appendSelector": "div.video-player.video-player-with-background",
        "injectedGlobalCSS": [
          "div[class^=\"video-wrapper-\"] div[class^=\"captionsContainer-\"] { display: none !important; }"
        ]
      }
    }
  },
  {
    "id": "seekingalpha",
    "matches": [
      "seekingalpha.com/article/*",
      "seekingalpha.com/news/*"
    ],
    "selectors": [
      "[data-test-id=card-container]",
      "[data-test-id=comments-section]"
    ],
    "excludeSelectors": [
      "[data-test-id=post-page-meta]",
      "header > div:first-child"
    ]
  },
  {
    "id": "hnAlgolia",
    "matches": "hn.algolia.com",
    "selectors": [
      ".Story_title > a:first-child",
      ".Story_comment > span"
    ]
  },
  {
    "id": "readwise",
    "matches": "read.readwise.io",
    "selectors": [
      "div[class^='_titleRow_']",
      "#document-text-content"
    ],
    "detectParagraphLanguage": true
  },
  {
    "id": "inoreader",
    "matches": [
      "www.inoreader.com",
      "*.inoreader.com"
    ],
    "selectors": [
      ".article_header_title",
      ".article_title_link",
      ".article_content",
      ".article_magazine_title_link",
      ".blog-post-page",
      "#welcome_center",
      ".gad_overview_articles_wrapper",
      ".library_article_text h4",
      ".header_name",
      ".blog-content"
    ],
    "excludeMatches": [
      "https://www.inoreader.com/features*",
      "https://www.inoreader.com/blog*",
      "https://www.inoreader.com/discover*",
      "https://www.inoreader.com/contact*",
      "https://www.inoreader.com/pricing*",
      "https://www.inoreader.com/enterprise*"
    ],
    "observeUrlChange": false,
    "injectedCss.add": [
      ".article_title_link,.library_article_text h4,.gadget_overview_article_title,.article_magazine_title_link,.reader_pane_view_style_2 .column_view_title {-webkit-line-clamp: unset!important;max-height: unset!important;}",
      ".article_tile_content_wraper,div.article_tile {overflow:auto}",
      ".article_header_title {white-space:normal;max-height: unset!important;}",
      ".article_header_title span {display:flex !important;flex-direction: column;}",
      ".ar.article_no_thumbnail,[data-type=article] {height:unset!important;}",
      ".view_style_2 #reader_pane .ar .article_header_text .column_view_info {position:relative!important;}"
    ]
  },
  {
    "id": "aha",
    "matches": "*.ideas.aha.io",
    "excludeSelectors": [
      ".comment-header",
      ".vote-status",
      ".idea-meta",
      ".filters-title",
      ".ideas-showing-count",
      ".my-ideas-filters-wrapper",
      ".statuses-filters-wrapper",
      ".categories-filters-wrapper",
      "[class^='attachment']",
      "span[class^='attachment-name']"
    ]
  },
  {
    "id": "googleScholar",
    "matches": [
      "scholar.google.*/*",
      "scholar.google.com.*/*",
      "scholar.google.co.*/*"
    ],
    "wrapperPrefix": "\n",
    "selectors": [
      "h3 a[data-clk]",
      "div.gs_rs",
      "td a.gsc_a_at",
      "td div.gs_gray:last-of-type",
      "div.gsc_oci_value",
      "#gs_opinion",
      ".gs_rt",
      ".gsh_csp",
      ".gs_fma_wpr",
      "#gs_as_hp_main"
    ],
    "extraInlineSelectors": [
      "br"
    ],
    "atomicBlockSelectors": [
      "h3 a[data-clk]"
    ],
    "detectParagraphLanguage": true
  },
  {
    "id": "googleMail",
    "matches": "mail.google.com",
    "detectParagraphLanguage": true,
    "globalStyles": {
      "[role='listitem'] > div": "height:auto!important;white-space:unset!important;"
    },
    "aiWriting.add": {
      "scene": "email",
      "appendSelector": ".btC",
      "insertBeforeSelector": ".gU.a0z",
      "titleSelector": "h2.hP",
      "contentSelector": "",
      "commentSelector": ".gs",
      "insertInputSelector": ".editable",
      "injectCSS": ".immersive-translate-ai-writing-button {margin-left:12px; border-radius: 20px; padding: 6px 12px; color: #444746; background: #fff; border-color: #444746;} .button-logo {color: #444746}"
    }
  },
  {
    "id": "googleNews",
    "matches": "news.google.com",
    "blockMinTextCount": 26,
    "blockMinWordCount": 5,
    "injectedCss.add": [
      ".oovtQ,.MCAGUe,.To2ZZb.DbQnIe {height: unset;}",
      "h4,.IBr9hb,.gPFEn{-webkit-line-clamp: unset!important;}",
      ".cp7Yvc > h2 {display: block;}"
    ],
    "excludeSelectors": [
      ".EyERq",
      ".AOl7G.eejsDc",
      "[aria-label='Home']",
      "[aria-label='For you']",
      "[aria-label='Following']",
      "[aria-label='World']",
      "[aria-label='Local']",
      ".gb_Fc",
      ".wBQf7b",
      ".yPI8Rb",
      ".jKHa4e",
      ".u43Gd",
      ".Zgjpyb",
      "[role='button']",
      "[jsname='rymPhb']",
      ".cbz1ld",
      ".VfPpkd-P5QLlc",
      ".XvhY1d",
      "time",
      ".bInasb"
    ]
  },
  {
    "id": "outlook",
    "matches": "outlook.live.com",
    "excludeSelectors": [
      ".jHAG3.XG5Jd",
      ".OZZZK",
      ".lDdSm",
      ".ZfoST.VlT6S.azUpZ",
      ".GssDD,.xpAva,.oHwUF,.D1eg_",
      "[id=CenterRegion]",
      "[id=RibbonRoot]",
      "[role=toolbar]",
      ".qQbyL,.bkYAr,.gpJ9q,.threeColumnCirclePersonaDivWidth",
      "[class='_rWRU Ejrkd qq2gS D8iyG']"
    ]
  },
  {
    "id": "producthunt",
    "matches": "www.producthunt.com",
    "excludeMatches": "https://www.producthunt.com/stories/*",
    "excludeSelectors.add": [
      ".styles_extraInfo__Xs_5Y",
      "[data-test=\"show-more-shoutouts-button\"]",
      ".styles_buttons__kKy_S",
      ".styles_count___6_8F"
    ],
    "globalStyles": {
      "h5 + p": "height:unset;",
      ".noOfLines-1,.noOfLines-2,.noOfLines-3,.styles_noOfLines-2__k_Ta_,[data-test=\"post-name-481116\"]": "-webkit-line-clamp:unset;"
    },
    "excludeTags.remove": [
      "PRE"
    ]
  },
  {
    "id": "codeforces",
    "matches": "https://codeforces.com/*",
    "stayOriginalTags.add": [
      "[class^='MathJax']"
    ]
  },
  {
    "id": "discord",
    "matches": "https://discord.com/channels/*",
    "isTranslateTitle": false,
    "selectors": [
      "li[id^=chat-messages] div[id^=message-content]",
      "div[class^=headerText]",
      "section[aria-label='Search Results'] div[id^=message-content]",
      "div[class^=messagesPopout]",
      "[class^='embedTitle']",
      "[class^='embedDescription']",
      "[class^='promptContent']",
      "li[class^='container'] > div[class^='header']"
    ],
    "excludeSelectors.add": [
      "[class*='username']",
      "[class*='repliedMessage']"
    ],
    "extraBlockSelectors.add": [
      "[class^='embedFieldValue']",
      "li[class^='card'] div[class^='message']",
      "[data-list-item-id^='forum-channel-list'] div[class^='headerText']"
    ],
    "injectedCss.add": [
      "main div[class^=headerText],main div[class^=message],main div[class^=text] {max-height: unset;}",
      "h3[data-text-variant='heading-lg/semibold'] {-webkit-line-clamp: unset;line-height: unset;}",
      "[class*='guildDetails'] > [class*='description'] {-webkit-line-clamp: unset;}"
    ],
    "enableRichTranslate": false,
    "detectParagraphLanguage": true,
    "wrapperPrefix": "<br />",
    "wrapperSuffix": "",
    "paragraphMinTextCount": 4,
    "paragraphMinWordCount": 2,
    "enableInputDeepActive": false,
    "advanceMergeConfig": [
      {
        "condition": "true",
        "advanceConfig": {
          "immediateTranslationTextCount": 0
        }
      }
    ],
    "preTranslateLimiter.add": {
      "side.enableTranslate": false,
      "side.selectors": [
        "[class*='sidebarList']"
      ]
    },
    "inputConfig.add": {
      "tutorialsSelectors": [
        "[class*='placeholder'][aria-hidden='true']"
      ],
      "tutorialsText": "输入中文后快速连击 3 次空格键翻译，与外国人轻松对话",
      "placeholderType": "dom",
      "enableMutationObserver": true,
      "autoLanguageSelectors": [
        "[id^='message-content'] > span"
      ]
    }
  },
  {
    "id": "telegram",
    "matches": [
      "web.telegram.org/z/*",
      "web.telegram.org/a/*",
      "web.telegram.org/k/*",
      "web.telegram.org/k/"
    ],
    "isTranslateTitle": false,
    "selectors": [
      ".text-content",
      ".message",
      ".reply-markup-button-text",
      ".bot-commands-list-element-description",
      "[class*='tabs-tab page-password active']",
      "#auth-qr-form",
      ".document-message"
    ],
    "extraBlockSelectors.add": [
      ".message.spoilers-container em",
      ".message.spoilers-container strong"
    ],
    "excludeSelectors": [
      ".time",
      ".peer-title",
      ".document.ext-rar,.bubble-name-forwarded",
      ".message.spoilers-container custom-emoji-element"
    ],
    "additionalExcludeSelectors.remove": [
      ".notranslate",
      "[translate=no]"
    ],
    "detectParagraphLanguage": true,
    "advanceMergeConfig": [
      {
        "condition": "true",
        "advanceConfig": {
          "immediateTranslationTextCount": 0
        }
      }
    ],
    "inputConfig.add": {
      "tutorialsSelectors": [
        "span.input-field-placeholder"
      ],
      "tutorialsText": "输入中文后快速连击 3 次空格键翻译，与外国人轻松对话",
      "placeholderType": "dom",
      "enableMutationObserver": true,
      "autoLanguageSelectors": [
        ".message-date-group .Message .text-content",
        ".bubble-content .message .translatable-message"
      ]
    }
  },
  {
    "id": "githubGist",
    "matches": "gist.github.com",
    "selectors": [
      ".markdown-body",
      ".readme"
    ],
    "detectParagraphLanguage": true
  },
  {
    "id": "lobste",
    "matches": "lobste.rs",
    "excludeMatches": [
      "https://lobste.rs/about",
      "https://lobste.rs/chat"
    ],
    "selectors": [
      ".u-repost-of",
      ".comment_text",
      ".story_text"
    ]
  },
  {
    "id": "slack",
    "matches": "*.slack.com",
    "selectors": [
      ".p-rich_text_block",
      ".p-message_pane__foreword",
      ".c-alert__message",
      "[data-qa=message_attachment_text]"
    ],
    "additionalStayOriginalSelectors": [
      "[data-qa=emoji]"
    ],
    "detectParagraphLanguage": true
  },
  {
    "id": "artstationArtwork",
    "matches": "www.artstation.com/artwork/*",
    "excludeSelectors": ".project-description a",
    "selectors": [
      ".project-description",
      "div.project-comment-text",
      ".asset-caption"
    ],
    "detectParagraphLanguage": true
  },
  {
    "id": "sydeny",
    "domCheckTimeout": 1,
    "matches": "sydney.instructuremedia.com",
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "subtitleRule.add": {
      "type": "subsrt",
      "hookType": "fetch",
      "subtitleUrlRegExp": "caption_files",
      "attachRule": {
        "appendSelector": "[data-media-provider]",
        "injectedGlobalCSS": [
          "[data-part=captions] {display: none!important;}"
        ]
      }
    }
  },
  {
    "id": "artstationLearning",
    "matches": "www.artstation.com/learning/courses/*",
    "additionalSelectors": [
      "footer.learning-course-description.ng-star-inserted > span"
    ],
    "excludeSelectors": [
      ".learning-card-meta",
      ".vjs-text-track-display",
      "#immersive-translate-caption-window"
    ],
    "mutationExcludeSelectors.add": [
      ".vjs-text-track-display *",
      "#immersive-translate-caption-window *"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "subtitleUrlRegExp": "/subtitles/.*\\.(vtt|webvtt)$",
      "loadingContainerSelector": ".vjs-text-track-display",
      "quickButtonRule": {
        "appendSelector": ".vjs-control-bar",
        "insertBeforeSelector": ".vjs-playback-rate",
        "injectCSS": ".imt-quick-subtitle-button { font-size: 12px;} .logo,.logo svg { height: 18px !important; width: 18px !important;} .imt-quick-subtitle-pop-content {bottom: 38px !important;}",
        "injectCSS.add_v.[1.32.3]": ".imt-quick-subtitle-button { font-size: 12px;} .logo,.logo svg { height: 18px !important; width: 18px !important;}"
      },
      "videoSelector": "video",
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] #immersive-translate-caption-window {direction: rtl;}"
      ],
      "attachRule": {
        "appendSelector": ".video-js",
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ],
        "injectedGlobalCSS": [
          ".vjs-text-track-display {display: none;}",
          ".captions-text: {margin-bottom: 10%;}"
        ]
      }
    }
  },
  {
    "id": "artstationBlog",
    "matches": [
      "https://www.artstation.com/blogs",
      "https://www.artstation.com/blogs/*"
    ],
    "detectParagraphLanguage": true,
    "additionalSelectors": [
      ".comment-item-body"
    ],
    "atomicBlockSelectors": [
      ".author-headline",
      ".author-location"
    ],
    "excludeSelectors": [
      "blog-card-thumbnail",
      "blog-card-header",
      ".blog-card-author",
      ".blog-card-meta",
      ".blog-view-header",
      ".blog-grid-title",
      ".post-meta-header"
    ]
  },
  {
    "id": "figmaCommunity",
    "matches": "www.figma.com/community/*",
    "normalizeBody": "div.ql-editor[contenteditable='false']",
    "excludeSelectors": [
      "div[class*='metadataRight']",
      "div[class*='commentMetaAndOptions']"
    ],
    "globalStyles": {
      "div[class*='mini_cardBottomRowSizing']": "height: 3em;"
    },
    "additionalSelectors": [
      "div[class*='mini_cardBottomRow_Metadata']"
    ],
    "stayOriginalSelectors": [
      "[data-tooltip='tooltip-user-info']"
    ]
  },
  {
    "id": "googleIndex",
    "matches": [
      "https://www.google.com/",
      "https://www.google.com.hk/"
    ],
    "excludeSelectors": [
      "#gb",
      "#SIvCob"
    ],
    "inputConfig.add": {
      "tutorialsText": "输入中文后快速连击 3 次空格键翻译，搜索结果不同哦",
      "tutorialsSelectors": [
        "textarea#APjFqb"
      ],
      "placeholderType": "attribute"
    }
  },
  {
    "id": "googleSearch",
    "matches": "www.google.*/search*",
    "blockMinTextCount": 32,
    "blockMinWordCount": 3,
    "wrapperSuffix": "",
    "detectParagraphLanguage": true,
    "excludeSelectors": [
      "a h3 + div",
      "div#sfooter",
      ".b5ZQcf",
      ".CEMjEf",
      ".MgUUmf.NUnG9d",
      "#result-stats",
      "[role=navigation]",
      "div.sCuL3",
      "div.eFM0qc.BCF2pd",
      "div.WZ8Tjf",
      "div.adDDi",
      "#headerSection",
      "#rateChatDiv",
      ".title-D5Lgyj",
      "[data-attrid='VisualDigestVideoResult']",
      ".search-enhance-WDIEkP h4",
      ".SPZz6b h2",
      ".CtCigf",
      ".VLkRKc",
      ".EbH0bb",
      ".Wr0c6d",
      ".jleFbf",
      "#searchform",
      ".yg51vc",
      ".CbAZb",
      ".B6fmyf.byrV5b.Mg1HEd",
      "[class='SPa6uf Hqu6dd OSrXXb']",
      "[class='ZtihLe YrbPuc']",
      "[class='kb0PBd A9Y9g'] .TXwUJf,[class='kb0PBd cvP2Ce'] .TXwUJf",
      "[class='wep10b vDF3Oc jIrdcd'],[class='gqF9jc YrbPuc']",
      "span[data-ts]"
    ],
    "extraBlockSelectors.add": [
      ".MUFPAc",
      "[role=heading]"
    ],
    "additionalExcludeSelectors.add": [
      "[jscontroller='UsftYd']"
    ],
    "injectedCss.add": [
      ".V82bz,.uAKcGb,.F0FGWb,.Hdw6tb,.M1Sizc,.XVPTd,.Yt787.JGD2rd,.ITZIwc {-webkit-line-clamp: unset!important;max-height: unset!important;}",
      ".pe7FNb {-webkit-line-clamp: unset!important;}",
      ".promotion-3PDMAb {display: none!important;}",
      "div[data-content-feature='1'] > div {-webkit-line-clamp: unset!important;max-height: unset!important;}",
      "div[style='-webkit-line-clamp:*'] {-webkit-line-clamp: unset!important;max-height: unset!important;}",
      "div[role='heading'][id^='news_title_tsuid_'][data-imt-p='1'] {-webkit-line-clamp: unset!important;height: auto!important;overflow: visible!important;}",
      ".Pw4Ldf.RsCEN {height:unset!important;}",
      ".related-question-pair {overflow:auto!important;}"
    ],
    "isTranslateTitle": false,
    "darkModeRule": {
      "element": "meta",
      "selectors": [
        "[name='color-scheme'][content*='dark']"
      ]
    }
  },
  {
    "id": "lowendtalk",
    "matches": "lowendtalk.com",
    "selectors": [
      "[role=heading]",
      "h1",
      ".userContent",
      ".DismissMessage",
      ".PanelColumn",
      ".Meta-Discussion"
    ],
    "excludeSelectors": [
      ".ClearFix .Count"
    ],
    "preTranslateLimiter.add_v.[1.12.1]": {
      "header.enableTranslate": true,
      "header.selectors": [
        "#Head"
      ]
    }
  },
  {
    "id": "linkedinFeed",
    "matches": "https://linkedin.com/feed/*",
    "selectors": [
      "h1",
      ".feed-shared-update-v2__description-wrapper"
    ]
  },
  {
    "id": "indiehackers",
    "matches": "www.indiehackers.com",
    "additionalExcludeSelectors.remove": [
      ".notranslate",
      "[translate=no]"
    ],
    "additionalExcludeSelectors.add": [
      ".portal-entry__date",
      ".portal-entry__byline",
      ".firestore-post__header-metadata",
      ".story__counts",
      ".story__time-ago",
      ".story__byline",
      ".partnerships__age",
      ".job__pay",
      ".author-bio__name-link",
      ".comment__footer"
    ],
    "preTranslateLimiter.add_v.[1.12.1]": {
      "header.selectors": []
    },
    "injectedCss.add": [
      ".meetups__meetup-name,.partnerships__title { -webkit-line-clamp: unset!important;max-height: unset!important; }"
    ]
  },
  {
    "id": "deepwiki",
    "matches": "deepwiki.com",
    "excludeSelectors.add": [
      "[class*='flex items-center break-all rounded-l px-2 py-1.5 bg-[#e5e5e5] text-[#333333] dark:bg-[#252525] dark:text-[#e4e4e4] rounded-r']",
      "[class*='mb-1 mr-1 inline-flex items-stretch font-mono text-xs !no-underline transition-opacity hover:opacity-75']"
    ],
    "preTranslateLimiter.add": {
      "side.selectors": [
        "[class*='flex h-full w-full max-w-full flex-shrink-0 flex-col overflow-hidden']",
        "[class*='hidden overflow-hidden transition-[border-radius] xl:sticky xl:right-0 xl:top-20 xl:block xl:h-[calc(100vh-82px)] xl:w-64 xl:flex-shrink-0 2xl:w-72']"
      ]
    }
  },
  {
    "id": "libreddit",
    "matches": "libreddit.de",
    "selectors": [
      "h2.post_title",
      ".comment_body > .md"
    ]
  },
  {
    "id": "notionSite",
    "matches": [
      "notion.site",
      "*.notion.site"
    ],
    "selectorMatches": [
      ".notion-html body",
      ".notion-app"
    ],
    "likePreSelectors.add": [
      "#main"
    ],
    "isTransformPreTagNewLine": true,
    "forceFormatPre": true,
    "excludeSelectors": [
      ".notion-code-block"
    ],
    "injectedCss": [
      "[aria-label='Templates'] font br {display:none;}"
    ]
  },
  {
    "id": "newyorker",
    "matches": "www.newyorker.com",
    "additionalSelectors": [
      "h1",
      "[data-testid=SummaryItemHed]"
    ],
    "excludeSelectors": [
      "[data-testid=PersistentTop]",
      "[data-testid=StackedNavigationHeader]"
    ],
    "urlChangeDelay": 2000
  },
  {
    "id": "typora",
    "matches": "typora.io",
    "excludeSelectors": [
      ".tab-slider--nav"
    ]
  },
  {
    "id": "startme",
    "matches": "start.me",
    "selectors": [
      ".rss-article__title",
      ".rss-articles-list__article-link",
      ".rss-showcase__title",
      ".rss-showcase__text"
    ]
  },
  {
    "id": "scmp",
    "matches": "www.scmp.com",
    "additionalSelectors": [
      ".info__subHeadline",
      ".section-content h2"
    ],
    "globalStyles": {
      ".topic__article-list": "height: unset;",
      ".adverisers__adveriser": "height: unset;",
      ".advertiser__content": "height: unset;",
      ".content-title__link": "display:unset;overflow:unset;-webkit-line-clamp:unset;",
      ".title__text": "max-height:unset; -webkit-line-clamp:unset;",
      ".news-list-item__news-title": "max-height:unset; -webkit-line-clamp:unset;",
      "a[class*='link'] > .link__headline": "max-height:unset; -webkit-line-clamp:unset;"
    },
    "bodyRule.add": {
      "bodySelector": "[data-qa='ArticleList-Item']",
      "articleSelector": "[data-qa='GenericArticle-Content']",
      "xpathRule": [
        "datatype:p"
      ]
    }
  },
  {
    "id": "lesswrong",
    "matches": "www.lesswrong.com",
    "excludeSelectors.add": [
      ".PostsPagePostHeader-authorAndSecondaryInfo",
      ".Answer-answerHeader",
      "time",
      ".CommentsItemMeta-root",
      ".CommentsListMeta-root",
      ".CommentsTableOfContents-tocPostedAt",
      ".CommentsTableOfContents-commentAuthor",
      ".CommentBottom-bottom"
    ],
    "extraBlockSelectors.add": [
      "span.commentOnSelection"
    ]
  },
  {
    "id": "mastodon",
    "excludeMatches": [
      "www.r-project.org"
    ],
    "matches": [
      "mastodon.social",
      "mastodon.online",
      "kolektiva.social",
      "indieweb.social",
      "mastodon.world",
      "infosec.exchange"
    ],
    "isTranslateTitle": false,
    "selectorMatches": [
      "div#mastodon"
    ],
    "selectors": [
      "div.status__content__text",
      ".about__section__body",
      ".content",
      ".form-container",
      ".account__header__extra"
    ],
    "globalAttributes.add": {
      "[class='notranslate app-holder']": {
        "class": "app-holder"
      }
    },
    "detectLanguage": true
  },
  {
    "id": "cnbc",
    "matches": "www.cnbc.com",
    "urlChangeDelay": 1000,
    "globalStyles": {
      "[style*='-webkit-line-clamp']": "-webkit-line-clamp: unset!important;max-height: unset!important;"
    },
    "injectedCss.add": [
      ".Card-titleContainer > div:has(.immersive-translate-target-wrapper) {-webkit-line-clamp: unset!important;max-height: unset!important;}"
    ],
    "excludeSelectors.add": [
      "#GlobalNavigation",
      "#GlobalFooter",
      ".LiveBlogHeader-timestampAndShareBarContainer",
      ".LiveBlogHeader-liveUpdatesPill",
      ".QuoteInBody-inlineButton"
    ],
    "extraBlockSelectors.remove": [
      "button"
    ]
  },
  {
    "id": "dailyDev",
    "matches": "app.daily.dev",
    "selectors": [
      "h1",
      ".typo-body",
      "article h3",
      "[class^=markdown_markdown]"
    ],
    "globalStyles": {
      ".line-clamp-3": "-webkit-line-clamp: unset"
    }
  },
  {
    "id": "pornhub",
    "matches": [
      "*.pornhub.com",
      "pornhub.com"
    ],
    "excludeMatches": [
      "*.pornhub.com/insights/*",
      "pornhub.com/insights/*"
    ],
    "extraBlockSelectors.add": [
      ".trendingNow",
      ".searchItem",
      ".tagcloud > a"
    ],
    "detectParagraphLanguage": true,
    "wrapperPrefix": "<br/>",
    "wrapperSuffix": "\n",
    "globalStyles": {
      "span.title": "height:unset; max-height:unset;",
      ".detailedInfo": "max-height:unset;",
      ".pcVideoListItem": "max-height:unset;",
      ".wrap": "height:unset;",
      ".entry-header": "height:unset;",
      ".entry-title > a": "height:unset;-webkit-line-clamp:unset;"
    },
    "darkModeRule": {
      "element": "html",
      "selectors": [
        "[lang]"
      ]
    }
  },
  {
    "id": "missav",
    "matches": "https://missav.*/*",
    "globalStyles": {
      ".truncate": "white-space:unset;",
      ".overflow-y-hidden": "max-height:unset;overflow-y:unset;"
    },
    "excludeSelectors.add": [
      ".leading-normal",
      "[class='absolute bottom-1 right-1 rounded-lg px-2 py-1 text-xs text-nord5 bg-gray-800 bg-opacity-75']",
      "[class='absolute bottom-1 left-1 rounded-lg px-2 py-1 text-xs text-nord5 bg-blue-800 bg-opacity-75']"
    ],
    "subtitleRule.add": {
      "type": "av2",
      "avSerial": {
        "type": "url",
        "regexStr": ".+/([a-z0-9-]+)$"
      },
      "videoSelector": ".plyr__video-wrapper video",
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] #immersive-translate-caption-window {direction: rtl;}"
      ],
      "attachRule": {
        "appendSelector": ".plyr--video",
        "injectedGlobalCSS": "",
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      },
      "quickButtonRule": {
        "appendSelector": ".plyr__controls",
        "insertBeforeSelector": "[data-plyr=\"captions\"]"
      }
    }
  },
  {
    "id": "javbus",
    "matches": "https://www.javbus.com/*",
    "globalStyles": {
      ".photo-info": "height:unset;"
    },
    "excludeSelectors": [
      ".item-tag",
      "date"
    ]
  },
  {
    "id": "spankbang",
    "matches": "https://spankbang.com/*",
    "globalStyles": {
      ".video-item > a": "white-space:unset;"
    },
    "excludeSelectors": [
      ".stats",
      ".thumb"
    ],
    "extraBlockSelectors.add": [
      ".searches > a",
      ".tag > a",
      ".extra > a",
      ".positions > li"
    ]
  },
  {
    "id": "javdb",
    "matches": "https://javdb*.com/*",
    "globalStyles": {
      ".video-title": "white-space:unset;"
    },
    "excludeSelectors": [
      ".video-number",
      ".score",
      ".has-addons"
    ]
  },
  {
    "id": "jable",
    "matches": "https://jable.tv/*",
    "globalStyles": {
      ".title": "white-space:unset;max-height:unset;",
      ".img-box > a": "position:relative;"
    }
  },
  {
    "id": "netflav.player",
    "matches": [
      "https://netflavns1.com",
      "https://embedrise.com"
    ],
    "mainFrameMinTextCount": 0,
    "subtitleRule.add": {
      "type": "av2",
      "avSerial": {
        "type": "url",
        "regexStr": "code=([a-z0-9-]+)"
      },
      "videoSelector": "#vplayer video",
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] #immersive-translate-caption-window {direction: rtl;}"
      ],
      "attachRule": {
        "appendSelector": "#vplayer",
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      },
      "quickButtonRule": {
        "appendSelector": "#vplayer .jw-button-container",
        "insertBeforeSelector": "#vplayer .jw-button-container .jw-icon-cc"
      }
    }
  },
  {
    "id": "netflav",
    "matches": [
      "https://netflav*.com/*"
    ],
    "globalStyles": {
      ".grid_title": "max-height:unset;"
    },
    "extraBlockSelectors.add": [
      ".genre_filter_item",
      "button"
    ],
    "subtitleRule.add": {
      "type": "av2",
      "avSerial": {
        "type": "selector",
        "selector": ".videodetail_2_field_values",
        "serialAttachIframe": "#iframe-block"
      }
    }
  },
  {
    "id": "czechvideo",
    "matches": "https://czechvideo.co/*",
    "globalStyles": {
      ".short-story": "height:unset;",
      ".short-title": "height:unset;"
    },
    "globalAttributes.add": {
      "header": {
        "translate": "unset;"
      }
    }
  },
  {
    "id": "weibo",
    "matches": [
      "weibo.com",
      "*.weibo.*"
    ],
    "excludeMatches": [
      "passport.weibo.com/sso/signin*",
      "kefu.weibo.com"
    ],
    "selectors": [
      "div[class^='detail_wbtext']",
      ".weibo-text",
      ".m-feed",
      ".wbpro-feed-content",
      ".wbpro-list .text"
    ],
    "stayOriginalSelectors.add": [
      ".expand"
    ]
  },
  {
    "id": "uxtension",
    "matches": "www.uxento.io",
    "excludeSelectors": [
      "article div[class='flex justify-between items-center px-3']",
      "article div[class='flex items-center gap-2 mb-2']",
      "article div[class='flex justify-between items-center pr-4']",
      "article div[class='px-3 pb-3 pt-1 grid grid-cols-2 gap-4']",
      "article div[class='flex flex-wrap gap-1 mt-1']",
      "article div[class='flex items-center gap-3 pr-12']"
    ],
    "selectors": [
      "[class='px-4 pb-4 text-sm leading-relaxed break-words text-white overflow-hidden']",
      "[class='text-xs leading-relaxed break-words text-[#AAAAB9] mb-2 overflow-hidden']",
      "[class='px-4 pb-4 text-sm leading-relaxed break-words text-white']",
      "[class='text-xs leading-relaxed break-words text-[#AAAAB9] mb-2']",
      "[class='flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip'] section",
      "h2",
      "article",
      "article h2",
      "article p"
    ]
  },
  {
    "id": "j7tracker",
    "matches": "j7tracker.io",
    "excludeSelectors.add": [
      ".tweet-author",
      ".ai-suggestions-panel",
      ".following-update-content",
      "[class*='-header']",
      "button",
      ".pause-indicator"
    ]
  },
  {
    "id": "medium",
    "matches": [
      "medium.com",
      "*.medium.com"
    ],
    "selectorMatches": [
      "meta[property='al:ios:url'][content^='medium://']"
    ],
    "urlChangeDelay": 20,
    "additionalExcludeSelectors.remove": [
      "i.fa",
      "i[class^=fa-]",
      ".navmenu-container",
      ".google-symbols"
    ],
    "selectors": [
      "h1,h2,h3",
      "article section",
      "[aria-hidden='false'] pre",
      "article p",
      ".postMetaInline",
      "a .u-fontSize24",
      "pre .ha",
      "pre > div > div > div",
      "div > p > span",
      "section p,section span",
      "a div span",
      ".ppapp-form-info,.request-form"
    ],
    "excludeSelectors": [
      "[aria-label='Post Preview Reading Time']",
      ".speechify-ignore",
      "article pre"
    ],
    "selectors.replace.[1.24.5]": [],
    "excludeTags.remove": [
      "PRE"
    ],
    "additionalExcludeSelectors.add": [
      "pre > span"
    ],
    "globalStyles": {
      "h2,h3": "-webkit-line-clamp: unset;max-height:unset;",
      "article p": "-webkit-line-clamp: unset;max-height:unset;"
    },
    "injectedCss": [
      ".u-lineClamp4,.u-lineClamp3,.u-lineClamp2 {-webkit-line-clamp:unset!important;max-height:unset!important;}"
    ]
  },
  {
    "id": "nitter",
    "selectorMatches": [
      "meta[property='og:site_name'][content='Nitter']"
    ],
    "selectors": [
      ".tweet-content",
      ".quote-text"
    ]
  },
  {
    "id": "economist",
    "matches": "www.economist.com",
    "extraInlineSelectors": [
      "span[data-caps='initial']"
    ],
    "excludeSelectors": [
      "footer.ds-footer",
      ".vjs-text-track-display"
    ],
    "injectedCss": [
      "a::before {position:relative!important;}",
      "[class^=button] span font {white-space:pre-wrap;}"
    ],
    "subtitleRule.add": {
      "type": "webvtt",
      "hookType": "xhr",
      "subtitleUrlRegExp": "\\.vtt",
      "quickButtonRule": {
        "appendSelector": ".vjs-control-bar",
        "insertBeforeSelector": ".vjs-playback-rate"
      }
    }
  },
  {
    "id": "healthline",
    "matches": "www.healthline.com",
    "excludeSelectors": [
      ".icon-hl-trusted-source-after"
    ]
  },
  {
    "id": "ebay",
    "matches": "www.ebay.com",
    "excludeSelectors": [
      "headers",
      "[itemprop=offers]",
      ".dne-itemtile-original-price"
    ],
    "paragraphMinTextCount": 4,
    "paragraphMinWordCount": 2,
    "injectedCss.add": [
      ".iS4T .zgfQ .uHzw .Ep66 {-webkit-line-clamp: unset;max-height: unset;}",
      "[itemprop=name],.merch-item-title {-webkit-line-clamp: unset;max-height: unset;}"
    ]
  },
  {
    "id": "skinstore",
    "matches": "www.skinstore.com",
    "excludeSelectors": [
      ".responsiveFlyoutMenu_levelOneLink"
    ],
    "paragraphMinTextCount": 4,
    "paragraphMinWordCount": 2
  },
  {
    "id": "kelbyone",
    "matches": "members.kelbyone.com",
    "subtitleRule.add": {
      "type": "subsrt",
      "hookType": "xhr",
      "subtitleUrlRegExp": ".*\\.srt",
      "quickButtonRule": {
        "appendSelector": ".jw-button-container",
        "insertBeforeSelector": ".jw-icon-cc"
      },
      "attachRule": {
        "appendSelector": ".jw-wrapper.jw-reset",
        "injectedGlobalCSS": ".jw-text-track-display { display:none!important; }",
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "primevideo",
    "matches": [
      "www.primevideo.com",
      "https://*.amazon.co.*/*video*",
      "https://*.amazon.com/*video*",
      "https://*.amazon.*/*video*"
    ],
    "excludeSelectors.add": [
      "#dv-web-player"
    ],
    "mutationExcludeSelectors.add": [
      "#dv-web-player *"
    ],
    "subtitleRule.add": {
      "type": "ebutt",
      "hookType": "xhr|fetch",
      "enableHookDownload": true,
      "subtitleUrlRegExp": "\\.ttml2$",
      "videoSelector": "#dv-web-player video",
      "loadingContainerSelector": "#dv-web-player",
      "quickButtonRule": {
        "appendSelector": "[class*=\"infobar-container\"] > div > div:nth-child(3)"
      },
      "injectedCss": [
        "#immersive-translate-quick-button-container,.immersive-translate-quick-button-container { display: inline-block; }"
      ],
      "attachRule": {
        "appendSelector": "#dv-web-player .atvwebplayersdk-video-surface",
        "injectedGlobalCSS": "#dv-web-player .atvwebplayersdk-captions-overlay, #dv-web-player .atvwebplayersdk-captions-text { display: none !important; }"
      }
    },
    "_comment": "自托管字幕；广告前后时间轴仍需实测"
  },
  {
    "id": "amazon",
    "matches": "www.amazon.*",
    "paragraphMinTextCount": 4,
    "paragraphMinWordCount": 2,
    "repeatTranslateNum": 10,
    "repeatTranslateNum.add_v.[1.25.3]": 0,
    "extraBlockSelectors.add": [
      ".a-size-small.a-link-normal.page-banner-link.a-nowrap"
    ],
    "injectedCss.add": [
      ".a-carousel-viewport {height:unset;}",
      "[class*='clamp'] {max-height: unset!important;-webkit-line-clamp: unset!important;}",
      "[data-rows] {max-height: unset!important;-webkit-line-clamp: unset!important;}",
      "[data-a-expander-name='review_text_read_more'] { max-height: unset;}",
      ".compact.primaryText.primaryTextOnly {max-height: unset;-webkit-line-clamp: unset;}",
      ".format {-webkit-line-clamp: unset;}",
      ".dcl-truncate,[class*='textButton'],span[data-a-max-rows] {max-height:unset!important;-webkit-line-clamp: unset!important;}",
      ".a-reactive-container-transition,.a-cardui-uninitialized {height:unset!important;max-height:unset!important;}"
    ],
    "additionalExcludeSelectors.add": [
      "#navFooter",
      ".s-price-instructions-style",
      "[class*='-star ']",
      "[data-hook='acr-average-stars-rating-text']",
      ".a-color-price,.a-price",
      "[data-testid='price-section']",
      "[data-component='dui-badge']",
      "#glow-ingress-block,#nav-link-accountList,#nav-orders,#nav-cart",
      ".a-profile-content,[data-hook=product-variation-attributes],[data-hook=helpfulVoteWidget],[data-hook=reportAbuseButton],[data-hook=helpful-vote-statement]"
    ],
    "paragraphMinTextCount.replace.[1.24.5]": 1,
    "paragraphMinWordCount.replace.[1.24.5]": 1,
    "repeatTranslateNum.replace.[1.24.5]": 0,
    "bodyRule.add": {
      "enable": false
    },
    "subtitleRule.add": {
      "type": "webvtt",
      "subtitleUrlRegExp": "\\.vtt",
      "hookType": "xhr"
    },
    "preTranslateLimiter.add": {
      "header.enableTranslate": true
    }
  },
  {
    "id": "sellercentral-amazon-message",
    "matches": [
      "https://sellercentral.amazon.*/messaging/inbox*"
    ],
    "bodyRule.add": {
      "bodySelector": "#case-messages"
    }
  },
  {
    "id": "visualstudioMarketplace",
    "matches": "marketplace.visualstudio.com",
    "additionalExcludeSelectors": [
      ".core-info-second-row",
      ".core-info-third-row",
      ".meta-data-list",
      ".item-title",
      ".breadcrumb",
      ".itemDetails-right",
      ".ux-user-name",
      ".ux-updated-date",
      ".ux-item-second-row-wrapper",
      ".stats-and-offer",
      ".header-container"
    ],
    "atomicBlockSelectors": [
      ".core-info-cell > div.name"
    ],
    "globalStyles": {
      ".item-details-control-root.ux-item-shortdesc": "height: unset; overflow: visible; max-height:unset;"
    }
  },
  {
    "id": "bloomberg",
    "matches": "www.bloomberg.com",
    "excludeMatches": [
      "https://www.bloomberg.com/live/*"
    ],
    "urlChangeDelay": 2000,
    "domCheckTimeout": 1,
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "excludeSelectors": [
      ".ticker-bar",
      "nav",
      "[aria-label=Banner]",
      "aside",
      "[data-component=ticker-bar]",
      "footer.bb-global-footer",
      ".vjs-text-track-display"
    ],
    "excludeSelectors.remove_v.[1.24.5]": [
      "nav"
    ],
    "bodyRule.add": {
      "bodySelector": "main article",
      "articleSelector": ".body-content"
    },
    "mixedMode.add": {
      "translationOnlySelectors": [
        "[data-component=carousel] article span"
      ]
    },
    "subtitleRule.add": {
      "type": "subsrt",
      "contentTimeSource": "google_dai",
      "videoPlayerSelector": ".video-js",
      "videoSelector": ".vjs-tech",
      "hookType": "fetch|xhr",
      "subtitleUrlRegExp": "vtt$",
      "quickButtonRule": {
        "appendSelector": ".vjs-control-bar",
        "insertBeforeSelector": ".vjs-playback-rate"
      },
      "attachRule": {
        "appendSelector": ".video-js",
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ],
        "injectedGlobalCSS": [
          ".vjs-text-track-display {display:none!important;}"
        ]
      }
    }
  },
  {
    "id": "baiduPanVideo",
    "matches": "pan.baidu.com",
    "subtitleRule.add_v.[1.27.3]": {
      "type": "live_attach",
      "videoPlayerSelector": ".vp-video__player",
      "videoSelector": ".vjs-tech",
      "loadingContainerSelector": ".vp-video__player",
      "captionContainerSelector": ".vp-video__subtitle-text",
      "attachRule": {
        "appendSelector": ".vp-video__player",
        "injectedGlobalCSS": [
          ".vp-video__subtitle-text.show { display: none !important; }"
        ]
      }
    }
  },
  {
    "id": "baiduXueshu",
    "matches": "xueshu.baidu.com",
    "globalStyles": {
      ".abstract_wr": "height: unset; overflow: visible; max-height:unset;"
    }
  },
  {
    "id": "sciencedirect",
    "matches": "www.sciencedirect.com",
    "excludeMatches": [
      "www.sciencedirect.com/*/pdf/download/*"
    ],
    "urlChangeDelay": 2000,
    "stayOriginalSelectors": [
      "span.display figure",
      "span.formula",
      "span.math"
    ],
    "extraBlockSelectors.add": [
      "span.display",
      "span.captions",
      "span[id^=cap]"
    ],
    "excludeSelectors.add": [
      ".bibliography",
      ".author-group"
    ],
    "globalAttributes.add": {
      "#abspara0010 br": {
        "style": "display:none;"
      }
    },
    "bodyRule.add": {
      "bodySelector": "article"
    },
    "injectedCss.add": [
      "h2 {font-size:unset;}",
      ".u-clamp-2-lines {-webkit-line-clamp:unset!important;}",
      ".immersive-translate-target-wrapper {content-visibility:auto;}"
    ],
    "enableRichTranslate": true
  },
  {
    "id": "thehighestofthemountains",
    "matches": "www.thehighestofthemountains.com",
    "extraBlockSelectors.add": "div"
  },
  {
    "id": "annasArchive",
    "matches": [
      "*.annas-archive.org",
      "annas-archive.org"
    ],
    "selectors": [],
    "globalStyles": {
      "div[id^='link-index-']": "height: unset; max-height: unset;",
      "main div[class*='h-[125]']": "height:auto"
    },
    "normalizeBody": "body",
    "extraBlockSelectors.add": [
      "a.custom-a"
    ]
  },
  {
    "id": "explainshell",
    "matches": [
      "explainshell.com"
    ],
    "selectors": [
      "[class='help-box']"
    ]
  },
  {
    "id": "apnews",
    "matches": [
      "apnews.com"
    ],
    "urlChangeDelay": 2000
  },
  {
    "id": "googlePlay",
    "matches": "play.google.com",
    "excludeSelectors": [
      ".vlGucd",
      ".ubGTjb",
      ".page-nums"
    ],
    "globalStyles": {
      ".Epkrse": "-webkit-line-clamp:unset;",
      "div[data-g-id='description']": "-webkit-line-clamp:unset;max-height:unset;"
    }
  },
  {
    "id": "tumblr",
    "matches": [
      "www.tumblr.com"
    ],
    "selectors": [
      "article h1",
      "article > header + div",
      "[data-testid=notes-root] p",
      "div.k31gt",
      "p",
      "article ul",
      "article h2",
      "article h3",
      "article h4",
      "article h5",
      "article h6",
      "article blockquote",
      "article ol"
    ],
    "excludeSelectors": [
      "div.fAAi8",
      "div.wvu3V"
    ],
    "preWhitespaceDetectedTags": [
      "DIV",
      "SPAN",
      "P"
    ]
  },
  {
    "id": "tinytask",
    "matches": "https://www.tinytask.net",
    "globalStyles": {
      "table > tbody > tr > td > center > table > tbody > tr > td > ul > li": "height: 100%"
    }
  },
  {
    "id": "foxnews",
    "matches": "www.foxnews.com",
    "shadowRootSelectors": [
      "[data-spot-im-module-default-area='conversation'] > div"
    ],
    "excludeTags.add": [
      "TEXT",
      "IMG",
      "SUB",
      "SUP",
      "CODE",
      "TT",
      "ASIDE"
    ],
    "excludeSelectors": [
      ".site-footer",
      ".components-MessageDetails-index__message-details-wrapper",
      "div[class^=SlideDown__container]",
      ".components-MessageActions-index__messageActionsWrapper",
      "span[data-openweb-allow-amp]",
      "div.spcv_typing-users"
    ],
    "preTranslateLimiter.add_v.[1.12.1]": {
      "header.selectors": [
        ".site-header"
      ]
    }
  },
  {
    "id": "opennet",
    "matches": "opennet.ru",
    "excludeTags.add": [
      "LABEL",
      "IMG",
      "SUB",
      "SUP",
      "CODE",
      "TT"
    ],
    "excludeTags.remove": [
      "LINK",
      "G",
      "MATH",
      "TTS-SENTENCE",
      "AIO-CODE"
    ]
  },
  {
    "id": "construct",
    "matches": [
      "www.construct.net"
    ],
    "excludeMatches": [
      "preview.construct.net",
      "editor.construct.net"
    ],
    "additionalSelectors": [
      "aside",
      "div.manualContent"
    ],
    "atomicBlockSelectors": [],
    "stayOriginalSelectors": [
      "a.usernameReference"
    ],
    "additionalInlineSelectors": [
      "a.forumLink"
    ],
    "additionalExcludeSelectors": [
      "div.topNav",
      "div.usernameLink",
      "ul.authorDetails",
      "ul.tagViewer",
      "ul.breadCrumbNav",
      "ul.subForumForums",
      "ul.postTools",
      "li.comment ul.controls",
      "div.forumTopNavWrap",
      "div.downloadWrap",
      "div.articleLeftMenu",
      "div.usernameTextWrap",
      "div.favouriteWrap",
      "div.bannerWrapper",
      "div.viewAddonRightMenu",
      "div.extendedMenu.addonsSubMenu",
      "#BottomLinks.bottomLinks",
      "div#LeftSide.leftSide",
      "div#BottomWrap.bottomWrap",
      "div.courseListWrap div.overview",
      "div.conversationControls",
      "div.contentWrapper h1",
      "div.conversationControls",
      "td.location a#LocationLink",
      "#TopLevelComments .topBar",
      "#TopLevelComments .controls",
      ".tagViewWrap",
      ".changeCount",
      ".otherStats",
      ".FilterMenu",
      ".mobileTopicStats",
      ".forumControlsWrapper",
      ".forumsBottomNavWrap",
      ".breadCrumbNav",
      ".favouriteWrap",
      ".usernameLink",
      ".followWrapper",
      ".blogPostStats",
      ".manualContent dl dt"
    ],
    "globalStyles": {
      "td.location a#LocationLink": "padding-top: 4px;",
      "div.articleMain .tutCourseWrap": "align-items: flex-start;"
    }
  },
  {
    "id": "fandom",
    "matches": "*.fandom.com",
    "urlChangeDelay": 800,
    "globalStyles": {
      "#mw-content-text > div > div:nth-child(1)": "height:100%;"
    },
    "additionalExcludeSelectors": [
      "header.fandom-community-header",
      "div.ph-registration-buttons"
    ],
    "extraBlockSelectors.add": [
      ".mp-nav a"
    ],
    "injectedCss.add": [
      ".immersive-translate-target-translation-block-wrapper {display: unset!important;}"
    ],
    "isTransformPreTagNewLine": true
  },
  {
    "id": "huggingface",
    "matches": "huggingface.co",
    "injectedCss.add": [
      ".line-clamp-2,h2 {-webkit-line-clamp:unset;max-height:unset;}"
    ],
    "excludeSelectors.add": [
      "thead",
      "ul.text-base",
      "div.absolute.truncate",
      "nav",
      "ul[class*='dark:border-gray-800']",
      "div[class*='from-gray-100-to-white']"
    ]
  },
  {
    "id": "statista",
    "matches": "www.statista.com",
    "globalStyles": {
      ".itemContent__text": "height:unset;max-height:unset;",
      ".itemContent__subline": "height:unset;max-height:unset;"
    }
  },
  {
    "id": "epubReader",
    "matches": "epub-reader.online",
    "globalStyles": {
      "span.slide-contents-item-label": "overflow:visible;max-height:unset;white-space:normal;"
    },
    "atomicBlockSelectors": [
      "div.slide-contents-item"
    ]
  },
  {
    "id": "auth0Openai",
    "matches": "auth0.openai.com",
    "excludeSelectors": [
      "form",
      "header > h1"
    ]
  },
  {
    "id": "chatOpenai",
    "matches": [
      "chat.openai.com",
      "chatgpt.com"
    ],
    "excludeSelectors": [
      "div.absolute.bottom-0.left-0.w-full",
      "h1",
      "div#headlessui-portal-root",
      "nav",
      "ul[aria-multiselectable]",
      ".markdown *",
      "div[class='flex flex-col items-start']",
      "div[class='flex items-center justify-center gap-1 border-b border-black/10 bg-gray-50 p-3 text-gray-500 dark:border-gray-900/50 dark:bg-gray-700 dark:text-gray-300']"
    ],
    "excludeTags.remove": [
      "BUTTON"
    ],
    "isTranslateTitle": false,
    "wrapperPrefix": "",
    "globalStyles": {
      "[class*='line-clamp']": "max-height:unset;-webkit-line-clamp:unset;height:unset;white-space:unset;"
    },
    "aiRule": {
      "streamingSelector": ".result-streaming.markdown",
      "messageWrapperSelector": ".markdown",
      "streamingChange": true,
      "streamingDeepChild": true,
      "streamingDelayTime": 1000
    },
    "enableRichTranslate": false,
    "enableRichTranslate.add_v.[1.12.1]": true,
    "advanceMergeConfig": [
      {
        "condition": "true",
        "advanceConfig": {
          "immediateTranslationTextCount": 0
        }
      }
    ],
    "imageRule.add": {
      "enable": false
    },
    "inputConfig.add": {
      "tutorialsSelectors": [
        ".placeholder"
      ],
      "tutorialsText": "输入中文后快速连击 3 次空格键翻译，获得不同的 AI 回复",
      "placeholderType": "::after"
    }
  },
  {
    "id": "deepseek",
    "matches": "chat.deepseek.com",
    "inputConfig.add": {
      "tutorialsSelectors": [
        "textarea#chat-input"
      ],
      "tutorialsText": "输入中文后快速连击 3 次空格键翻译，获得不同的 AI 回复",
      "placeholderType": "attribute"
    },
    "additionalExcludeSelectors.remove": [
      ".notranslate",
      "[translate=no]"
    ]
  },
  {
    "id": "poe",
    "matches": [
      "https://poe.com/*"
    ],
    "excludeSelectors": [
      ".Markdown_markdownContainer__Tz3HQ *",
      ".MarkdownLink_linkifiedLink__KxC9G",
      "menu",
      "aside"
    ],
    "aiRule": {
      "streamingSelector": ".ChatStopMessageButton_stopButton__LWNj6",
      "messageWrapperSelector": ".Markdown_markdownContainer__Tz3HQ",
      "streamingChange": false,
      "streamingDeepChild": true,
      "streamingDelayTime": 1000
    },
    "globalStyles": {
      "[class^='BotListItem_botDescription']": "-webkit-line-clamp: unset;"
    }
  },
  {
    "id": "kindroid",
    "matches": "kindroid.ai",
    "mutationConfig.add": {
      "buildTimeout": 1000,
      "consumeTimeout": 1000
    }
  },
  {
    "id": "janitorai",
    "matches": [
      "https://janitorai.com"
    ],
    "excludeSelectors": [
      "[data-testid=virtuoso-scroller] .css-104fsj *"
    ],
    "excludeTags.remove": [
      "PRE",
      "CODE"
    ],
    "stayOriginalTags.remove": [
      "CODE"
    ],
    "aiRule": {
      "streamingSelector": "button[aria-label=Cancel]",
      "messageWrapperSelector": "[data-testid=virtuoso-scroller] .css-104fsj",
      "streamingChange": false,
      "streamingDeepChild": true,
      "streamingDelayTime": 2000
    },
    "_comment": "它的流式的段落无法变更，只能等到结束之后一起翻译"
  },
  {
    "id": "glasp",
    "matches": "glasp.co",
    "excludeSelectors": [
      ".home_overview_list_content_wrapper"
    ]
  },
  {
    "id": "nyassembly",
    "matches": "nyassembly.gov",
    "excludeTags.remove": [
      "PRE"
    ]
  },
  {
    "id": "developerChrome",
    "matches": "developer.chrome.com",
    "excludeSelectors": [
      "web-tabs",
      "ul.code-sections--summary"
    ]
  },
  {
    "id": "android",
    "matches": [
      "developer.android.google.cn",
      "developer.android.com"
    ],
    "observeUrlChange": true,
    "additionalSelectors": [
      "aside",
      "google-codelab-step"
    ]
  },
  {
    "id": "ft",
    "matches": "www.ft.com",
    "excludeSelectors": [
      "header",
      "[aria-labelledby=cookie-banner-aria-label]",
      "footer",
      "[aria-label='Primary navigation']"
    ],
    "excludeSelectors.replace.[1.24.5]": [
      "footer",
      "[aria-labelledby=cookie-banner-aria-label]"
    ]
  },
  {
    "id": "microsoft",
    "matches": "https://apps.microsoft.com/store/detail/*",
    "additionalSelectors": [
      "pre"
    ],
    "globalStyles": {
      ".line-clamp": "-webkit-line-clamp:unset;max-height:unset;"
    },
    "isTransformPreTagNewLine": true
  },
  {
    "id": "gitlab",
    "matches": "gitlab.com",
    "excludeSelectors": [
      ".tree-content-holder",
      "nav",
      ".home-panel-metadata",
      "div[data-testid=project_topic_list]",
      ".commit"
    ]
  },
  {
    "id": "tiktok",
    "matches": [
      "https://www.tiktok.com/*/video/*",
      "https://www.tiktok.com/*"
    ],
    "additionalExcludeSelectors.add": [
      "[class*='DivInfoPosition']",
      "[data-e2e*='-count']",
      "[data-e2e='nav-foryou']",
      "[data-e2e*='view-more']",
      "[data-e2e*='comment-reply']",
      "[data-e2e*='comment-username']",
      "[class*='DivCommentSubContentSplitWrapper']",
      "[class*='DivViewRepliesContainer']"
    ],
    "mutationExcludeSelectors.add": [
      "[class*='DivInfoPosition'] *"
    ],
    "subtitleRule.add": {
      "type": "live",
      "liveSubtitleRule": {
        "containerSelector": "[class*=\"DivInfoPosition\"]",
        "textSelectors": [
          "[class*=\"DivVideoClosedCaption\"]"
        ],
        "reportSelector": "[class*=\"DivLeftContainer\"]",
        "mutationChangeDelay": 10,
        "enableTriggerTranslate": true
      },
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] font.immersive-translate-target-wrapper {direction: rtl;}"
      ]
    },
    "additionalExcludeSelectors.remove": [
      ".notranslate",
      "[translate=no]"
    ]
  },
  {
    "id": "rfcEditor",
    "matches": [
      "www.rfc-editor.org",
      "docs.haproxy.org"
    ],
    "isTransformPreTagNewLine": true,
    "excludeTags.add": [
      "IMG",
      "SUB",
      "SUP",
      "CODE",
      "TT",
      "ASIDE",
      "FOOTER"
    ],
    "excludeTags.remove": [
      "LINK",
      "G",
      "PRE",
      "TTS-SENTENCE",
      "AIO-CODE"
    ]
  },
  {
    "id": "steamcommunity",
    "matches": "steamcommunity.com",
    "injectedCss.add": [
      ".forum_topic,.rightbox_list_option,.appHubShortcut {height: unset;}",
      ".forum_topic_name {white-space:normal;line-height: 1.25rem; padding: 6px 20px 0 0;}",
      ".forum_topic_op {clear: left; padding: 0 0 6px 2rem;}"
    ],
    "excludeSelectors": [
      ".forum_paging",
      ".forum_topic_reply_count",
      ".forum_topic_lastpost",
      ".forum_topic_award_count",
      ".discussion_search_pagingcontrols",
      ".found_helpful,.vote_header,.date_posted,.early_access_review,.apphub_CardContentAuthorBlock"
    ],
    "extraBlockSelectors.add": [
      ".apphub_sectionTab"
    ],
    "advanceMergeConfig": [
      {
        "condition": "isSteam==true",
        "advanceConfig": {
          "generalRule": {
            "excludeSelectors.add": [
              "#modalContentFrameContainer"
            ]
          }
        }
      }
    ]
  },
  {
    "id": "steampoweredApp",
    "matches": "store.steampowered.com/app/*",
    "selectors": [],
    "excludeSelectors": [
      "#global_actions",
      "#store_controls",
      "#foryou_tab",
      "[class*=persona]",
      "a.btn_medium",
      ".persona_name",
      ".hours.ellipsis",
      ".checkcol",
      ".postedDate",
      ".dev_row .summary",
      ".already_in_library",
      ".game_header_image_ctn .grid_content",
      ".ds_flag.ds_wishlist_flag",
      ".early_access_review.tooltip",
      ".communitylink_achievement_images",
      ".user_reviews_summary_row.summary",
      ".review_award_ctn",
      ".add_to_wishlist_area",
      ".next_in_queue_content",
      ".glance_tags.popular_tags",
      ".game_purchase_action",
      ".vote_button_ctn",
      "#VoteUpDownBtnCtn",
      "#footer",
      "#ViewAllReviewssummary",
      ".user_reviews",
      ".ReviewContentCtn .title",
      ".author_counts,.control_block,.vote_info"
    ],
    "atomicBlockSelectors": [
      ".game_area_sys_req_leftCol",
      ".game_area_sys_req_rightCol"
    ],
    "extraInlineSelectors": [
      ".pulldown"
    ],
    "additionalSelectors": [
      ".game_page_autocollapse_ctn iframe"
    ],
    "globalStyles": {
      ".game_description_snippet": "max-height:unset; overflow: scroll;",
      ".game_purchase_area_friends_want": "height: auto; padding-bottom: 6px;",
      ".div.early_access_banner": "height: 84px",
      ".franchise_notice > *": "height: 84px"
    },
    "detectParagraphLanguage": true
  },
  {
    "id": "steampowered",
    "matches": "store.steampowered.com",
    "detectParagraphLanguage": true
  },
  {
    "id": "nature",
    "matches": "https://www.nature.com/articles/*",
    "excludeMatches": "https://www.nature.com/articles/*.pdf",
    "excludeSelectors": [
      ".c-header",
      ".c-recommendations-header",
      ".c-recommendations-list-container",
      ".c-article-references__links",
      ".c-article-identifiers",
      ".c-article-author-list",
      ".c-article-metrics-bar__wrapper",
      ".c-article__pill-button",
      "#author-information-content",
      "#article-info-section",
      ".pdf-content"
    ],
    "injectedCss.add": [
      ".immersive-translate-target-wrapper {content-visibility:auto;}"
    ],
    "preTranslateLimiter.add_v.[1.12.1]": {
      "header.enableTranslate": true
    }
  },
  {
    "id": "webofscience",
    "matches": [
      "https://www.webofscience.com/*",
      "https://webofscience.clarivate.*/*",
      "www-webofscience-com-*.*",
      "webofscience-clarivate*.*",
      "*.ustc.edu.*/*wos*"
    ],
    "selectorMatches": [
      "app-wos.mat-typography"
    ],
    "globalStyles": {
      ".abstract": "height:auto !important;",
      ".show-more-lines": "height:unset !important;"
    },
    "excludeSelectors.add": [
      "app-custom-breadcrumbs",
      ".summary-left-panel",
      ".authors",
      "app-full-record-keywords mark",
      "mat-sidenav",
      "[name=pubdate]",
      "[data-ta^=Summary-]",
      "app-summary-authors",
      ".search-text",
      ".mat-drawer-inner-container",
      "[class*='sidenav-panel']"
    ],
    "mutationObserverContainerSelectors": [
      "[data-ta='summary-record-title-link']",
      "#FullRTa-fullRecordtitle-0"
    ],
    "extraBlockSelectors.add": [
      "app-summary-authors + div",
      "app-full-record-keywords span span",
      "[data-ta=summary-record-title-link]",
      "[cdxanalyticscategory=wos-recordCard_ExpandAbstract]"
    ],
    "skipTrailTextRegex": "为了绕过高亮导致脏检查跳过了",
    "observeUrlChange": true,
    "urlChangeDelay": 600,
    "mutationChangeDelay": 600
  },
  {
    "id": "science",
    "matches": "www.science.org",
    "stayOriginalSelectors.add": [
      ".open-in-viewer"
    ],
    "excludeSelectors.add": [
      ".core-self-citation",
      ".contributors"
    ],
    "initialSelectorGlobalAttributes.remove": {
      "header": {}
    },
    "preTranslateLimiter.add_v.[1.12.1]": {
      "header.enableTranslate": true
    }
  },
  {
    "id": "appleinsider",
    "matches": [
      "appleinsider.com"
    ],
    "excludeSelectors": [
      "#topic-nav"
    ],
    "preTranslateLimiter.add": {
      "header.selectors": [
        "header:not(.river-article header)",
        ".main-navbar"
      ]
    }
  },
  {
    "id": "jetbrains",
    "matches": "https://*.jetbrains.com",
    "extraBlockSelectors.add": [
      "[data-test=prompt]"
    ],
    "additionalExcludeSelectors.add": [
      ".comment__info",
      ".symbol.monospace"
    ],
    "globalStyles.add": {
      ".card p,.card h4": "-webkit-line-clamp:unset;"
    },
    "excludeSelectors": [
      ".toolbar__ee8",
      "[data-test=\"left-sidebar\"]"
    ]
  },
  {
    "id": "theverge",
    "matches": "www.theverge.com",
    "shadowRootSelectors": [
      "div#coral_thread > div"
    ],
    "additionalExcludeSelectors.add": [
      ".k8dtcj0",
      "._2xqpwjf._2xqpwj0"
    ],
    "extraBlockSelectors.add": [
      "[role='article'] p"
    ]
  },
  {
    "id": "simp",
    "matches": "https://beta.simp.red/trans*",
    "mainFrameSelector": ".simpread-read-root"
  },
  {
    "id": "lookintobitcoin",
    "matches": "https://www.lookintobitcoin.com/charts/*",
    "excludeSelectors": [
      "svg"
    ]
  },
  {
    "id": "openaiAccount",
    "matches": "https://platform.openai.com/account/api-keys*",
    "urlChangeDelay": 1500
  },
  {
    "id": "openaiDocs",
    "matches": "https://platform.openai.com/docs*",
    "excludeSelectors.add": [
      ".pheader"
    ]
  },
  {
    "id": "pkgStd",
    "matches": "https://pkg.go.dev/std",
    "selectors": [
      "td.UnitDirectories-desktopSynopsis"
    ]
  },
  {
    "id": "pkg",
    "matches": "https://pkg.go.dev/*",
    "selectors": [
      "div.UnitDetails",
      "#_nav_group_README",
      "p.SearchSnippet-infoLabel",
      ".go-Container"
    ]
  },
  {
    "id": "explainpaper",
    "matches": [
      "https://www.explainpaper.com/reader*"
    ],
    "isTranslateTitle": false,
    "selectors": [
      ".leading-relaxed",
      ".chat-messages p",
      ".text-sm"
    ]
  },
  {
    "id": "gatesnotes",
    "matches": "www.gatesnotes.com",
    "minZIndex": -1
  },
  {
    "id": "coinmarketcap",
    "matches": "coinmarketcap.com",
    "extraBlockSelectors.add": [
      "div[class='sc-3502f6cd-0 JxHqg']"
    ]
  },
  {
    "id": "wandb",
    "matches": "wandb.ai",
    "additionalSelectors": [
      ".report-page-top"
    ],
    "additionalStayOriginalSelectors": [
      "span[data-slate-inline=true]"
    ],
    "extraInlineSelectors": []
  },
  {
    "id": "paulgraham",
    "matches": "paulgraham.com",
    "additionalSelectors": [
      "font[face=verdana]"
    ],
    "extraBlockSelectors.add": "font[face=verdana]",
    "enableRichTranslate": false
  },
  {
    "id": "zendesk",
    "matches": "https://*.zendesk.com/agent/*",
    "selectors": [
      "[data-test-id*=subject]",
      "[data-test-id*=content] > span",
      ".zd-comment",
      ".title"
    ]
  },
  {
    "id": "migadu",
    "matches": "webmail.migadu.com",
    "selectors": [
      ".bodyText"
    ]
  },
  {
    "id": "thehackernews",
    "matches": "thehackernews.com",
    "excludeSelectors": [
      "span#blog-pager-older-link",
      "span.h-datetime"
    ],
    "additionalSelectors": [
      ".pop-title"
    ]
  },
  {
    "id": "brown",
    "matches": "cs.brown.edu",
    "excludeSelectors": [
      ".SCodeFlow"
    ]
  },
  {
    "id": "tass",
    "matches": "tass.ru",
    "globalStyles": {
      "#__next": "font-size: 19px;line-height:28px;"
    }
  },
  {
    "id": "fiverr",
    "matches": "https://www.fiverr.com/inbox/*",
    "selectors": [
      ".message-body",
      "article[data-testid=index-container]"
    ],
    "excludeSelectors.add": [
      "[data-testid=basic-message-header]",
      "[data-testid=message-header-timestamp]",
      "time",
      ".user-name",
      ".user-info",
      ".header"
    ]
  },
  {
    "id": "jira",
    "matches": [
      "jira.*.com/browse/*",
      "jira.*.com/projects/*"
    ],
    "selectors": [
      "[id=descriptionmodule]",
      "[id=summary-val]",
      "div.action-body",
      "td.stsummary"
    ]
  },
  {
    "id": "thehill",
    "matches": "thehill.com",
    "injectedCss": [
      ".most-popular-item { max-height: unset !important; }",
      ".most-popular-item__link { -webkit-line-clamp: unset !important; }"
    ],
    "excludeSelectors": [
      "div.featured-cards__byline",
      "div.list-item__meta",
      ".tags__item",
      "div.extended-scroll__header",
      ".submitted-by",
      ".site-header--has-alert-banner",
      ".homepage__container__opinion__item__byline",
      ".homepage__container__header",
      ".archive__item__meta"
    ]
  },
  {
    "id": "ubuntu",
    "matches": "manpages.ubuntu.com",
    "selectors": [
      "pre"
    ],
    "atomicBlockTags": [
      "pre"
    ]
  },
  {
    "id": "spiedigitallibrary",
    "matches": "www.spiedigitallibrary.org",
    "excludeTags.add": [
      "IMG",
      "SUB",
      "SUP",
      "CODE",
      "TT",
      "ASIDE",
      "FOOTER"
    ],
    "excludeTags.remove": [
      "LINK"
    ]
  },
  {
    "id": "promptingguide",
    "matches": "www.promptingguide.ai",
    "selectors": [
      "article",
      "li"
    ]
  },
  {
    "id": "ground",
    "matches": "ground.news",
    "globalStyles": {
      ".line-clamp-3": "-webkit-line-clamp: unset !important;"
    }
  },
  {
    "id": "ietf",
    "matches": "*.ietf.org/doc/html/*",
    "isTransformPreTagNewLine": true,
    "extraBlockSelectors.add": [
      "[href^='#page']"
    ],
    "excludeTags.remove": [
      "PRE"
    ]
  },
  {
    "id": "newsminimalist",
    "matches": "https://www.newsminimalist.com/",
    "extraBlockSelectors.add": [
      ".inline-flex"
    ],
    "excludeTags.remove": [
      "BUTTON"
    ]
  },
  {
    "id": "yandexIndex",
    "matches": "https://yandex.com/",
    "selectors": [
      ".tabs__item-text"
    ]
  },
  {
    "id": "yandexSearch",
    "matches": "https://yandex.com/search/*",
    "excludeSelectors": [
      ".KeyValue-Row",
      ".EntityFeedbackFooter",
      ".Organic-Subtitle",
      ".SerpFooter-Content",
      ".serp-user",
      ".Pager"
    ],
    "globalStyles": {
      ".ExtendedText-Toggle": "white-space:normal;"
    }
  },
  {
    "id": "yandex",
    "matches": "https://yandex.com/video/*",
    "selectors": [
      ".serp-item__title",
      ".serp-item__text",
      ".Keypoints-ItemTitle",
      ".bes-epmjnzm-idtktyj",
      ".OrganicTitle-LinkText",
      "h1.VideoTitle"
    ],
    "globalStyles": {
      ".serp-item__title": "-webkit-line-clamp: unset;max-height:unset;",
      ".serp-item__text": "-webkit-line-clamp: unset;max-height:unset;",
      ".OrganicTitle-LinkText": "-webkit-line-clamp: unset;max-height:unset;",
      "h1.VideoTitle": "-webkit-line-clamp: unset;max-height:unset;",
      ".link .serp-item__keypoints": "bottom:2px;",
      ".OrganicTitle": "max-height:unset;"
    }
  },
  {
    "id": "react",
    "matches": "react.dev",
    "injectedCss.add": [
      "[class*='h-\\[40px\\]'] {height: unset !important;}"
    ]
  },
  {
    "id": "perplexity",
    "matches": "https://www.perplexity.ai",
    "excludeMatches": [
      "https://www.perplexity.ai/hub/*",
      "https://www.perplexity.ai/*/hub/*",
      "https://www.perplexity.ai/onboarding",
      "https://www.perplexity.ai/enterprise*",
      "https://www.perplexity.ai/2024recap"
    ],
    "globalStyles": {
      "[class*=line-clamp]": "-webkit-line-clamp: unset !important;"
    },
    "mutationConfig.add": {
      "buildTimeout": 1000,
      "consumeTimeout": 1000
    },
    "additionalStayOriginalSelectors": [
      "a.citation",
      "[class='my-md pb-xs pt-sm']"
    ],
    "additionalExcludeSelectors.add": [
      "[data-framer-name='Desktop']"
    ]
  },
  {
    "id": "allmyfaves",
    "matches": "https://allmyfaves.com/",
    "selectors": [
      "p"
    ],
    "paragraphMinTextCount": 2,
    "paragraphMinWordCount": 1
  },
  {
    "id": "kadaza",
    "matches": "https://www.kadaza.com/",
    "selectors": [
      ".header span.title",
      ".custom-content-footer"
    ],
    "containerMinTextCount": 2,
    "containerMinWordCount": 1,
    "paragraphMinTextCount": 2,
    "paragraphMinWordCount": 1
  },
  {
    "id": "urlChangeDelay",
    "matches": [
      "https://babelnovel.com/books/*",
      "https://www.webnovel.com/book/*",
      "https://platform.openai.com/docs/*",
      "docs.oracle.com",
      "docs-cortex.paloaltonetworks.com",
      "forum.m5stack.com/topic/*",
      "community.m5stack.com/topic/*"
    ],
    "urlChangeDelay": 0,
    "_comment": "解决 url 变化重复翻译问题"
  },
  {
    "id": "genuine",
    "matches": "blog.genuine.com",
    "excludeSelectors": [
      "div.enlighter"
    ]
  },
  {
    "id": "chinadaily",
    "matches": "www.chinadaily.com.cn",
    "injectedCss": [
      "a { height: unset !important; }",
      "li { height: unset !important; }",
      "div { height: unset !important; }",
      ".immersive-translate-target-inner {color:black;}"
    ],
    "excludeSelectors": [
      ".topNav",
      ".topNav2_art > span",
      ".topNav_art2 > .dropdown",
      ".dibu-three",
      ".topBar",
      "#div_currpage"
    ]
  },
  {
    "id": "braynzarsoft",
    "matches": "www.braynzarsoft.net",
    "excludeSelectors.add": [
      "#content-header",
      ".sidebar-section"
    ],
    "additionalExcludeSelectors.add": [
      ".rating-box",
      ".tutorial-stat",
      "#bookmark-btn",
      ".question-footer",
      ".adsbygoogle",
      ".footer",
      ".type",
      ".views",
      ".questioninputcode"
    ],
    "injectedCss.add": [
      ".tutorial-desc {overflow: scroll !important;}",
      ".question-title {display:inline-flex !important;}"
    ],
    "preTranslateLimiter.add_v.[1.12.1]": {
      "header.selectors": [
        "#header"
      ],
      "side.selectors": [
        "#sidebar"
      ]
    },
    "excludeTags.remove": [
      "PRE"
    ]
  },
  {
    "globalAttributes.add": {
      "#stimulus": {
        "translate": "off",
        "class": "stimulus"
      },
      "#stem": {
        "translate": "off",
        "class": "stem"
      }
    },
    "id": "lawhub",
    "matches": "https://lawhub.lsac.org/question/*"
  },
  {
    "id": "yuque",
    "matches": "https://www.yuque.com/*",
    "excludeSelectors": [
      ".lark-virtual-tree"
    ]
  },
  {
    "id": "bearblog",
    "matches": "https://bearblog.dev/discover/*",
    "excludeTags": [
      "small"
    ]
  },
  {
    "id": "researchgate",
    "matches": "www.researchgate.net",
    "excludeSelectors": [
      ".nova-legacy-v-publication-item__meta-data",
      ".nova-legacy-v-publication-item__person-list",
      ".js-authors-list"
    ]
  },
  {
    "id": "theatlantic",
    "matches": [
      "www.theatlantic.com",
      "https://mashable.com/*"
    ],
    "excludeSelectors.add": [
      "footer:last-of-type",
      "nav",
      "header div.subtitle-2.w-full"
    ],
    "initialSelectorGlobalAttributes": {
      "footer:last-of-type": {
        "translate": "no"
      },
      "nav:last-of-type": {
        "translate": "no"
      },
      "nav": {
        "translate": "no"
      }
    }
  },
  {
    "id": "dw",
    "matches": "www.dw.com",
    "initialSelectorGlobalAttributes": {
      "footer:last-of-type": {
        "translate": "no"
      },
      "nav:last-of-type": {
        "translate": "no"
      },
      "nav": {
        "translate": "no"
      }
    },
    "excludeSelectors": [
      ".focus-menu-shown"
    ]
  },
  {
    "id": "sentry",
    "matches": "docs.sentry.io",
    "initialSelectorGlobalAttributes": {
      "footer:last-of-type": {
        "translate": "no"
      },
      ".navbar": {
        "translate": "no"
      }
    },
    "extraInlineSelectors.add": [
      ".term-wrapper",
      "span.description"
    ]
  },
  {
    "id": "openai-blog",
    "matches": "https://openai.com/blog/*",
    "stayOriginalTags.remove": [
      "CODE"
    ]
  },
  {
    "id": "urlComment",
    "selectorMatches": [
      "meta[name='generator'][content^='Discourse']"
    ],
    "additionalExcludeSelectors.add": [
      ".username",
      ".post-infos",
      ".topic-category",
      ".topic-timeline",
      ".topic-map",
      ".topic-list-header",
      ".number",
      ".activity"
    ],
    "urlChangeDelay": 0,
    "_comment": "解决 url 变化但是页面不变的问题",
    "preTranslateLimiter.add": {
      "header.enableTranslate": true
    },
    "extraBlockSelectors.add": [
      "header ol li a"
    ],
    "injectedCss.add": [
      "header.d-header {height: 6em !important;}",
      ".topic-list .main-link .raw-topic-link > font {pointer-events:unset!important;}"
    ],
    "enableSiteAutoTranslate": true
  },
  {
    "id": "feedly",
    "matches": "feedly.com",
    "globalStyles": {
      ".TitleOnlyLayout,.SelectedEntryScroller > div": "height:unset !important;",
      ".EntrySummary--u4,.EntrySummary--u5": "-webkit-line-clamp: unset;max-height:unset;",
      ".EntryTitleLink": "-webkit-line-clamp: unset;",
      ".SelectedEntryScroller > div :nth-child(2) :last-child": "-webkit-line-clamp: unset !important;"
    },
    "excludeSelectors": [
      ".Leftnav"
    ]
  },
  {
    "id": "whatsapp",
    "matches": "web.whatsapp.com",
    "selectors": [
      "._akbu",
      "[role=list]",
      ".copyable-text",
      ".quoted-mention"
    ],
    "wrapperPrefix": "\n",
    "wrapperSuffix": "<br/>",
    "additionalExcludeSelectors.add": [
      "[aria-hidden=true]"
    ],
    "extraInlineSelectors.add": [
      ".x1lliihq"
    ],
    "enableRichTranslate": false,
    "bodyRule.add": {
      "enable": false
    },
    "inputConfig.add": {
      "tutorialsSelectors": [
        "#main .lexical-rich-text-input div[aria-hidden='true'] > div"
      ],
      "tutorialsText": "输入中文后快速连击 3 次空格键翻译，与外国人轻松对话",
      "placeholderType": "dom",
      "autoLanguageSelectors": [
        "[data-testid=msg-container] [data-testid=selectable-text]",
        ".message-in.focusable-list-item [data-testid=selectable-text]",
        ".message-out span[data-testid=tail-out] + div [data-testid=selectable-text]"
      ]
    }
  },
  {
    "id": "bing",
    "matches": "https://*.bing.com/search*",
    "extraInlineSelectors": [
      "a",
      "i"
    ],
    "excludeSelectors.add": [
      ".tptxt"
    ],
    "globalStyles": {
      "[class*='lineclamp'],.b_title": "-webkit-line-clamp:unset;",
      ".b_gwaDl,.b_snipwithnsl": "height:unset !important;"
    }
  },
  {
    "id": "bingNews",
    "matches": "https://*.bing.com/news/search*",
    "globalStyles": {
      ".newsitem .title": "max-height: none; -webkit-line-clamp: 10",
      ".newsitem .snippet": "max-height: none; -webkit-line-clamp: 10"
    }
  },
  {
    "id": "drizzle",
    "matches": [
      "orm.drizzle.team"
    ],
    "mutationConfig.add": {
      "enableUrlChange": true
    },
    "excludeSelectors.add": [
      "[class^='codetabs_tab']",
      ".npm__tab"
    ],
    "preTranslateLimiter.add": {
      "side.selectors": [
        "#aside"
      ]
    }
  },
  {
    "id": "yahoo",
    "matches": "*.yahoo.*",
    "additionalExcludeSelectors.add": [
      "._ys_jiqava",
      "#Col2-5-Rmp-Proxy",
      ".readmore",
      ".ticker-item-wrapper",
      ".ticker-list",
      ".footer"
    ],
    "injectedCss.add": [
      "[class*='line-clamp'],h3.clamp {-webkit-line-clamp:unset!important;}",
      "#atomic .Mt\\(20px\\) {margin-top: 100px;}",
      "[class*='LineClamp'] {-webkit-line-clamp:unset;max-height:unset;}",
      "a[class*='js-content-viewer']> div[class*='Td\\(n\\)'] {overflow: scroll;}",
      "[class*='_ys_24482e'] {-webkit-line-clamp:unset;}",
      "#Aside > :first-child {overflow:scroll;}"
    ],
    "extraBlockSelectors.add": [
      ".SIPGg",
      ".sc-kzMCTH.pSZXj"
    ],
    "likePreSelectors.add": [
      ".highLightSearchTarget",
      ".body-wrapper",
      "body",
      ".highLightSearchTarget"
    ],
    "isTransformPreTagNewLine": true,
    "urlChangeDelay": 400,
    "preTranslateLimiter.add": {
      "header.enableTranslate": true,
      "side.enableTranslate": true
    },
    "mutationConfig.add": {
      "enableUrlChange": true,
      "buildTimeout": 1000,
      "consumeTimeout": 1000
    },
    "advanceMergeConfig": [
      {
        "condition": "true",
        "advanceConfig": {
          "immediateTranslationTextCount": 0
        }
      }
    ],
    "detectParagraphLanguage": true
  },
  {
    "id": "wsj",
    "matches": [
      "www.wsj.com",
      "cn.wsj.com"
    ],
    "excludeSelectors": [
      "header",
      "footer",
      "nav",
      "[aria-label='Markets summary']"
    ],
    "extraBlockSelectors.add": [
      ".series-nav__link-thumbnail"
    ],
    "injectedCss.add": [
      ".immersive-translate-target-wrapper br {display:none;}",
      ".spcv_list-item .immersive-translate-target-translation-block-wrapper {display:inline-block;margin-top:8px;}"
    ],
    "subtitleRule.add": {
      "type": "text_track",
      "videoPlayerSelector": "video",
      "loadingContainerSelector": ".video-inner",
      "injectedCss": [
        "#immersive-translate-quick-button-container,.immersive-translate-quick-button-container { height: 32px; margin-top: 15px; }"
      ],
      "quickButtonRule": {
        "injectCSS": ".label { display: none; }",
        "appendSelector": ".video-controls",
        "insertBeforeSelector": ".video-cc.f-r",
        "ccEnableSelector": ".video-cc.f-r"
      }
    }
  },
  {
    "id": "loom",
    "matches": "www.loom.com",
    "subtitleRule.add_v.[1.19.2]": {
      "type": "text_track",
      "videoPlayerSelector": "#LoomShakaVideoPlayer",
      "videoSelector": "#LoomShakaVideoPlayer",
      "loadingContainerSelector": ".video-container",
      "quickButtonRule": {
        "appendSelector": ".css-v8a27j",
        "insertBeforeSelector": ".css-v8a27j .css-utvy5"
      },
      "allowHideModeTextTrack": true,
      "attachRule": {
        "appendSelector": ".VideoLayersContainer",
        "injectedGlobalCSS": "[data-name=\"ClosedCaptions\"] {display:none;}",
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "businessinsider",
    "matches": "www.businessinsider.com",
    "excludeSelectors": [
      "header",
      "nav",
      "section.live-updates-module "
    ]
  },
  {
    "id": "goodreads",
    "matches": "www.goodreads.com",
    "excludeSelectors": [
      ".badgeYear",
      ".gr-mediaBox__desc",
      ".bookVotedRow",
      ".minirating",
      "div[itemprop='aggregateRating']",
      ".wtrButtonContainer",
      ".RatingsHistogram__labelTitle",
      ".FollowButton",
      ".siteHeader__topLevelLink",
      "#books > thead",
      "td[class*='rating']",
      "td[class*='shelves']",
      "td[class*='date_read']",
      "td[class*='date_added']",
      "td[class*='actions']"
    ]
  },
  {
    "id": "elektrotechnik",
    "matches": "https://www.elektrotechnik.rwth-aachen.de/*",
    "globalAttributes.add": {
      "[class='notranslate']": {
        "class": ""
      }
    }
  },
  {
    "id": "nytimes",
    "matches": "www.nytimes.com",
    "excludeSelectors": [
      "#app > div > div > header",
      "#app > div > div > div > div > header",
      "#in-story-masthead",
      "[data-testid=masthead-container]"
    ],
    "excludeSelectors.replace.[1.24.5]": [
      "#in-story-masthead"
    ],
    "injectedCss": [
      "a::after {position:relative!important;}",
      "footer {line-height: unset!important;;}"
    ],
    "preTranslateLimiter.add_v.[1.12.1]": {
      "header.enableTranslate": true
    },
    "initialSelectorGlobalAttributes.remove": {
      "header": {}
    },
    "additionalExcludeSelectors.add": [
      "[data-testid=user-header]",
      "[data-testid^='recommend-button']",
      "[data-testid=copy-link]",
      ".css-mydst6 > a"
    ]
  },
  {
    "id": "bugsKde",
    "matches": "bugs.kde.org",
    "excludeTags.remove": [
      "svg",
      "PRE"
    ],
    "additionalExcludeSelectors": [
      ".bz_first_comment_head",
      ".bz_comment_head",
      ".related_actions"
    ]
  },
  {
    "id": "eastmoney",
    "matches": "guba.eastmoney.com",
    "searchEnhancementConfig": [
      {
        "id": "eastmoney",
        "urlMatch": "guba.eastmoney.com/news,us\\w+,\\w+.html",
        "delayTime": 0,
        "selector": ".moneyFlowContainer",
        "selectorAction": "insertBefore",
        "style": {
          "container": "background:white;border:none;border-radius: 4px;box-shadow: 0 2px 4px hsla(216,5%,62%,.14);",
          "source": "font-size:12px; margin-bottom: 0px;",
          "keyword": "color:#294688",
          "title": "font-size:14px;color:#294688;",
          "enTitle": "margin-top:4px;font-size:12px;",
          "searchTitle": "margin:4px 0 16px;position:relative;padding-right:24px;font-size: 16px;",
          "time": "margin: 0px 0 16px;",
          "more": "color:#294688;margin-top:8px;"
        },
        "keyword": {
          "value": "[0]$1 stock",
          "matches": [
            {
              "source": "url",
              "matchRegex": "guba.eastmoney.com/news,us(\\w+?),\\S+.html"
            }
          ]
        },
        "showCount": 8
      },
      {
        "id": "eastmoney",
        "urlMatch": "guba.eastmoney.com/list,us\\w+.*.html",
        "delayTime": 0,
        "selector": ".qualityContentContainer",
        "selectorAction": "insertBefore",
        "style": {
          "container": "background:white;border:none;border-radius: 4px;box-shadow: 0 2px 4px hsla(216,5%,62%,.14);",
          "source": "font-size:12px; margin-bottom: 0px;",
          "keyword": "color:#294688",
          "title": "font-size:14px;color:#294688;",
          "enTitle": "margin-top:4px;font-size:12px;",
          "searchTitle": "margin:4px 0 16px;position:relative;padding-right:24px;font-size: 16px;",
          "time": "margin:0px 0 16px;",
          "more": "color:#294688;margin-top:8px;"
        },
        "keyword": {
          "value": "[0]$1:[0]$2",
          "matches": [
            {
              "source": {
                "type": "selector",
                "attribute": "href"
              },
              "matchRegex": "code=(\\w+)_(\\w+)",
              "match": "a[href*='rank/stock?code=']"
            }
          ]
        },
        "showCount": 8
      }
    ]
  },
  {
    "id": "xueqiu",
    "matches": "xueqiu.com",
    "searchEnhancementConfig": [
      {
        "id": "xueqiu",
        "urlMatch": "xueqiu.com/S/[a-zA-Z]+/?$",
        "delayTime": 0,
        "selector": ".container-side-sm.float-right.stock__side",
        "selectorAction": "appendChild",
        "style": {
          "container": "background:white;border:none;border-radius: 4px;padding:0;",
          "source": "font-size:12px; margin-bottom: 0px;",
          "keyword": "color:#06c",
          "title": "font-size:14px;color:#06c;",
          "enTitle": "margin-top:4px;font-size:12px;",
          "searchTitle": "margin:4px 0 16px;position:relative;padding-right:24px;font-size: 16px;font-weight: bold;",
          "time": "margin:0px 0 16px;",
          "more": "color:#06c;margin-top:8px;"
        },
        "showCount": 8,
        "keyword": {
          "value": "[0]$1",
          "matches": [
            {
              "source": {
                "type": "selector",
                "attribute": "text"
              },
              "matchRegex": "\\((.+)\\)",
              "match": ".stock-name"
            }
          ]
        }
      }
    ]
  },
  {
    "id": "laohu8",
    "matches": "www.laohu8.com",
    "searchEnhancementConfig": [
      {
        "id": "laohu8",
        "urlMatch": "www.laohu8.com/stock/[a-zA-Z]+/?$",
        "delayTime": 0,
        "selector": ".hot-stocks-root",
        "selectorAction": "insertBefore",
        "style": {
          "container": "background:white;border:none;border-radius: 4px;box-shadow: 0 2px 4px hsla(216,5%,62%,.14);",
          "source": "font-size:12px; margin-bottom: 0px;",
          "title": "font-size:14px;color: #007bff;",
          "enTitle": "margin-top:4px;color: #4d5156;font-size:12px;",
          "searchTitle": "margin:4px 0 16px;position:relative;padding-right:24px;font-size: 16px;",
          "time": "margin: 0px 0 16px;"
        },
        "keyword": {
          "value": "[0]$1 stock",
          "matches": [
            {
              "source": "url",
              "matchRegex": "stock/([a-zA-Z]+)"
            }
          ]
        },
        "showCount": 8
      }
    ]
  },
  {
    "id": "plati",
    "matches": "plati.market",
    "injectedCss.add": [
      ".card .custom-link{-webkit-line-clamp: unset !important;}"
    ]
  },
  {
    "id": "futunn",
    "matches": "www.futunn.com",
    "searchEnhancementConfig": [
      {
        "id": "futunn",
        "urlMatch": "www.futunn.com/stock/\\w+-US",
        "delayTime": 0,
        "selector": ".right",
        "selectorAction": "appendChild",
        "style": {
          "container": "background:white;border:none;border-radius: 4px;box-shadow: 0 2px 4px hsla(216,5%,62%,.14);",
          "source": "font-size:12px; margin-bottom: 4px;",
          "title": "font-size:14px;color: #007bff;",
          "enTitle": "margin-top:4px;color: #4d5156;font-size:12px;",
          "searchTitle": "margin:4px 0 16px;position:relative;padding-right:24px;font-size: 16px;",
          "time": "margin: 4px 0 20px;"
        },
        "keyword": {
          "value": "[0]$1 stock",
          "matches": [
            {
              "source": "url",
              "matchRegex": "stock/([a-zA-Z]+)-US"
            }
          ]
        },
        "showCount": 8
      }
    ]
  },
  {
    "id": "bmvrMarseille",
    "matches": "www.bmvr.marseille.fr",
    "globalStyles": {
      "a > div": "display:block;",
      "[style*='358px;']": "width: 33.3333%; height: auto; padding: 0px; position: relative; margin: 0px;"
    },
    "globalAttributes.add": {
      "#app": {
        "class": ""
      }
    }
  },
  {
    "id": "piAi",
    "matches": "pi.ai/talk",
    "globalStyles": {
      "[class*='text-brand-green']": "flex-direction:column;"
    }
  },
  {
    "id": "claudeAi",
    "matches": "claude.ai",
    "excludeSelectors": [
      ".contents *",
      ".code-block__code"
    ],
    "additionalExcludeSelectors.add": [
      "[data-cds='Icon']"
    ],
    "excludeTags.remove": [
      "PRE"
    ],
    "injectedCss": [
      "[data-testid='chat-menu-trigger'] br {display:none;}",
      "[data-test-render-count] {overflow: scroll;}"
    ],
    "aiRule": {
      "messageWrapperSelector": ".contents",
      "messageContainerSelector": ".ReactMarkdown",
      "messageStreamEndSelector": ".contents > button",
      "streamingChange": true,
      "streamingDeepChild": false,
      "streamingDelayTime": 1000
    },
    "advanceMergeConfig": [
      {
        "condition": "true",
        "advanceConfig": {
          "immediateTranslationTextCount": 0
        }
      }
    ]
  },
  {
    "id": "feishu",
    "matches": [
      "*.feishu.cn",
      "*.larkoffice.com",
      "*.larksuite.com"
    ],
    "additionalExcludeSelectors.remove": [
      ".notranslate",
      "[translate=no]"
    ],
    "mutationObserverLimitTargetSelectors": [
      ".maindocbody",
      "div[class*='render']",
      "div[class*='block']"
    ],
    "excludeSelectors.add": [
      ".catalogue__list"
    ],
    "richMoreWordPercent": "0.8"
  },
  {
    "id": "gitbook",
    "selectorMatches": [
      ".gitbook-root"
    ],
    "additionalExcludeSelectors.remove": [
      ".notranslate",
      "[translate=no]"
    ],
    "additionalExcludeSelectors.add": [
      "[spellcheck='false']"
    ]
  },
  {
    "id": "mitre",
    "matches": "cwe.mitre.org",
    "globalStyles": {
      "span.list_entry": "height: unset;"
    }
  },
  {
    "id": "kaggle",
    "excludeTags": [
      "i",
      "button"
    ],
    "matches": "www.kaggle.com",
    "excludeSelectors.add": [
      ".sc-kHItYk.kCjSZT",
      ".sc-hagvSa.guBIfV",
      ".sc-jhZTHU.btgPPn",
      "#editor-sidebar-scroll-container"
    ],
    "injectedCss.add": [
      ".km-listitem--large {height:unset !important;}",
      ".km-listitem--large .jWyUHl {height:unset !important;}",
      "[role=listitem] {overflow:scroll;}",
      "[role=listitem] div {-webkit-line-clamp:unset;}",
      "[class*='km-listitem--medium'] {height:unset !important;}",
      ".MuiListItem-root a > div :nth-child(2) {height:unset !important;}"
    ]
  },
  {
    "id": "ieee",
    "matches": "spectrum.ieee.org",
    "extraBlockSelectors.add": [
      "small"
    ]
  },
  {
    "id": "ieeexplore",
    "matches": "ieeexplore.ieee.org",
    "excludeMatches": [
      "ieeexplore.ieee.org/*/getPDF.jsp*"
    ],
    "stayOriginalSelectors": [
      "a[ref-type]",
      ".inline-formula",
      ".display-formula"
    ]
  },
  {
    "id": "cnn",
    "matches": "*.cnn.com",
    "excludeSelectors.add": [
      ".ad-slot-header__wrapper",
      "#pageFooter"
    ],
    "preTranslateLimiter.add_v.[1.12.1]": {
      "header.selectors": [
        ".header__wrapper-outer"
      ]
    },
    "bodyRule.add": {
      "bodySelector": ".layout__content-wrapper",
      "articleSelector": ".article__content-container"
    },
    "subtitleRule.add_v.[1.23.2]": {
      "type": "subsrt",
      "subsrtFormat": "vtt",
      "formatAsrSubtitles": true,
      "subtitleUrlRegExp": "/global/(.*)/t/.*\\.vtt$",
      "urlRootSelector": "[data-bolt-id='$1']",
      "hookType": "fetch|xhr",
      "quickButtonRule": {
        "appendSelector": "[class='sc-irCjQH eHfgKW']",
        "insertBeforeSelector": "[data-testid=\"player-ux-track-selector-button\"]",
        "injectCSS": ".imt-quick-subtitle-button {top:20%;align-items:unset;}"
      },
      "attachRule": {
        "realCurrentTimeSelector": "[data-testid='player-ux-scrubber-timestamp']",
        "realCurrentTimeRegex": "-((?:\\d+:)?(?:\\d+:)?\\d+)",
        "realCurrentType": "-",
        "appendSelector": "#overlay-root",
        "injectedCSS": [
          ".imt-caption-window {bottom:unset!important;top:5%;}",
          ".imt-caption-window {width: 90%;}"
        ],
        "injectedGlobalCSS": "[data-testid=caption_renderer_overlay] {display:none!important;}"
      }
    },
    "_comment": "多视频页面不好处理，暂时不支持"
  },
  {
    "id": "githubBlog",
    "matches": "github.blog",
    "globalStyles": {
      ".font-mktg": "word-break:normal;"
    }
  },
  {
    "id": "uni-trier",
    "matches": "dblp.uni-trier.de",
    "selectors": [
      "h1",
      "h2",
      ".title",
      ".external",
      "dd p"
    ],
    "excludeSelectors": [
      ".side-column"
    ]
  },
  {
    "id": "bilibili",
    "matches": "www.bilibili.com",
    "excludeSelectors.add": [
      ".bpx-player-subtitle-panel-text",
      ".bili-video-card__info--author, .bili-video-card__info--date",
      "#pictures,#note,#info,#footer,#expander-footer,.playinfo,.upname,#bilibili-player"
    ],
    "mouseHoverExcludeSelectors.add": [
      "#user-name",
      ".view-more"
    ],
    "enableInputDeepActive": true,
    "inputConfig.add": {
      "enableRangeDeleteContent": true
    },
    "selectionTranslation.add": {
      "ignoreSelectionCollapsed": true
    },
    "subtitleRule.add": {
      "type": "general",
      "subtitleUrlRegExp": "aisubtitle.hdslb.com/bfs",
      "loadingContainerSelector": ".bpx-player-subtitle-wrap",
      "generalSetting": {
        "itemsPath": "body",
        "textKey": "content",
        "startKey": "from",
        "endKey": "to"
      },
      "injectedCss": [
        "div[data-screen=full] #immersive-translate-quick-button-container,.immersive-translate-quick-button-container { margin-top: 4.5px !important;}"
      ],
      "quickButtonRule": {
        "appendSelector": "#bilibili-player .bpx-player-control-bottom-right",
        "injectCSS": ".imt-quick-subtitle-button { height: 60%; } .label { display: none; } .logo,.logo svg { width: 70%; } .imt-quick-subtitle-button { margin: 0 8px;}",
        "insertBeforeSelector": "#bilibili-player .bpx-player-ctrl-quality",
        "ccEnableSelector": "#bilibili-player .bpx-player-ctrl-subtitle"
      }
    }
  },
  {
    "id": "docs-swift",
    "matches": "docs.swift.org",
    "selectors": [
      ".content",
      "#menu"
    ]
  },
  {
    "id": "forums.zotero",
    "matches": "forums.zotero.org",
    "selectors": [
      ".page-sidebar",
      ".page-content"
    ]
  },
  {
    "id": "pubmed",
    "matches": [
      "pubmed.ncbi.nlm.nih.gov",
      "pubmed*.pubmed*",
      "*.ncbi.nlm.nih.gov"
    ],
    "excludeMatches": [
      "*.ncbi.nlm.nih.gov/*.pdf",
      "pubmed*.pubmed*/*.pdf"
    ],
    "urlChangeDelay": 0,
    "excludeSelectors": [
      ".docsum-journal-citation",
      ".citation-part",
      ".docsum-authors",
      ".top-wrapper",
      ".article-source",
      ".citation-doi",
      ".identifiers",
      ".cite",
      ".share",
      ".arrow-link",
      ".multiple-results-actions",
      ".sort-dropdown .option-label",
      ".display-options .button-label",
      ".actions-buttons.sidebar",
      ".title-copy"
    ],
    "enableRichTranslate": true,
    "extraBlockSelectors.add": [
      ".mixed-citation"
    ],
    "advanceMergeConfig": [
      {
        "condition": "true",
        "advanceConfig": {
          "domReadyDetectTimeout": 5000
        }
      }
    ],
    "globalAttributes.add": {
      "#Scholarscope_HighlightContent": {
        "class": ""
      },
      "#Scholarscope_HighlightOrigin": {
        "class": "Scholarscope_HighlightContents"
      }
    },
    "mutationExcludeContainsSelectors": [
      "#Scholarscope_HighlightContent highlight"
    ],
    "mutationExcludeSelectors": [
      "#Scholarscope_HighlightContent",
      "#Scholarscope_HighlightContent span"
    ],
    "injectedCss": [
      "#Scholarscope_HighlightOrigin > p font,#Scholarscope_HighlightContent > p font {display: inline!important;}",
      "#Scholarscope_HighlightOrigin > p font br,#Scholarscope_HighlightContent > p font br {display: none!important;}",
      ".title-translate {display:block;}",
      ".immersive-translate-target-inner br{display:none;}",
      ".immersive-translate-target-wrapper {content-visibility:auto;}"
    ],
    "preTranslateLimiter.add_v.[1.12.1]": {
      "header.enableTranslate": true
    }
  },
  {
    "id": "chosun",
    "matches": "www.chosun.com",
    "injectedCss": "body {word-break: unset!important;}"
  },
  {
    "id": "yna",
    "matches": "*.yna*",
    "injectedCss": [
      "font > br {display:none}"
    ],
    "globalStyles": {
      "a,strong": "max-height:unset;-webkit-line-clamp:unset;height:unset;white-space:unset;",
      "div,p,li,.item-box01,.news-con": "height:unset;max-height:unset;-webkit-line-clamp:unset;"
    },
    "additionalExcludeSelectors.remove": [
      ".notranslate",
      "[translate=no]"
    ]
  },
  {
    "id": "digitimes",
    "matches": "www.digitimes.com",
    "globalStyles": {
      "a,.title,.abstract,.display-5,.top": "max-height:unset;-webkit-line-clamp:unset;height:unset;white-space:unset;"
    },
    "excludeSelectors.add": [
      ".main-nav-frame",
      ".sub-header-wrapper",
      ".footer",
      ".date"
    ],
    "additionalExcludeSelectors.remove": [
      ".notranslate",
      "[translate=no]"
    ]
  },
  {
    "id": "vdi-nachrichten",
    "matches": "www.vdi-nachrichten.com",
    "excludeSelectors.add": [
      ".header-menu__item > a",
      ".linkbar__item",
      ".header__button-group"
    ]
  },
  {
    "id": "htdp",
    "matches": "htdp.org",
    "excludeTags": [
      "blockquote"
    ],
    "stayOriginalSelectors": [
      ".RktIn"
    ]
  },
  {
    "id": "newsletterss",
    "matches": "newsletterss.com",
    "initialGlobalAttributes": {
      "iframe": {
        "scrolling": "auto"
      }
    }
  },
  {
    "id": "docusaurus",
    "selectorMatches": [
      "#__docusaurus"
    ],
    "excludeSelectors.add": [
      ".DocSearch-Modal"
    ],
    "extraBlockSelectors.add": [
      ".hash-link"
    ],
    "preTranslateLimiter.add": {
      "side.selectors": [
        "aside"
      ]
    }
  },
  {
    "id": "mercari",
    "matches": "*.mercari.com",
    "excludeTags.remove": [
      "PRE"
    ]
  },
  {
    "id": "qqMail",
    "matches": "*.mail.qq.com",
    "useIframePostMessage": false,
    "excludeSelectors.add": [
      ".xmail-cmp-account"
    ],
    "globalStyles": {
      ".mail-list-page-wide-item": "height:unset;"
    }
  },
  {
    "id": "pubs.rsc.org",
    "matches": "pubs.rsc.org",
    "excludeMatches": [
      "https://pubs.rsc.org/*/articlepdf/*"
    ],
    "stayOriginalSelectors.add": [
      "[class*='eqn']"
    ]
  },
  {
    "id": "indeed",
    "matches": "*.indeed.com",
    "globalStyles": {
      "span,.css-19rjr9w.e1wnkr790": "max-height:unset;-webkit-line-clamp:unset;height:unset;white-space:unset;"
    },
    "excludeTags.remove": [
      "BUTTON"
    ]
  },
  {
    "id": "brutalist",
    "matches": "brutalist.report",
    "selectors": [
      "li > a:first-child",
      "aside",
      "nav > a",
      "h1 > a",
      "h3 > a",
      "h2 >a"
    ],
    "additionalExcludeSelectors.remove": [
      ".notranslate",
      "[translate=no]"
    ]
  },
  {
    "id": "maxroll",
    "matches": [
      "maxroll.gg"
    ],
    "extraInlineSelectors": [
      ".d4t-sprite-icon",
      ".d4t-icon"
    ],
    "likePreSelectors.add": [
      ".poe-content"
    ],
    "forceFormatPre": true,
    "isTransformPreTagNewLine": true,
    "buildContainerSelectors.add": [
      ".poe-content"
    ],
    "injectedCss": [
      "font {font-family: sans-serif !important;}",
      ".d4t-sprite-icon {display: unset !important;}"
    ],
    "additionalExcludeSelectors.add": [
      "span[class^='text-opac'] + span[class^='text-']"
    ]
  },
  {
    "id": "gradioappdocs",
    "matches": "www.gradio.app/docs/*",
    "selectors": [
      "div.obj"
    ],
    "excludeSelectors": [
      "div#examples"
    ]
  },
  {
    "id": "arca",
    "matches": "arca.live",
    "excludeTags.remove": [
      "PRE"
    ],
    "globalStyles": {
      ".vrow.column": "height:unset !important;",
      ".body .board-article .article-list .list-table .vrow.column .vcol": "width:unset !important;"
    },
    "additionalExcludeSelectors.add": [
      "span.user-info"
    ]
  },
  {
    "id": "chatpdf",
    "matches": [
      "www.chatpdf.com"
    ],
    "additionalExcludeSelectors.remove": [
      ".notranslate"
    ],
    "excludeSelectors": [
      ".chat-message-row.ai *",
      ".pdf-viewer"
    ],
    "aiRule": {
      "streamingSelector": "",
      "messageWrapperSelector": ".chat-message-row.ai",
      "streamingChange": false,
      "streamingDeepChild": true,
      "streamingDelayTime": 1000
    }
  },
  {
    "id": "inciteful",
    "matches": [
      "inciteful.xyz"
    ],
    "excludeTags.remove": [
      "BUTTON"
    ]
  },
  {
    "id": "app.element.io",
    "matches": [
      "app.element.io"
    ],
    "additionalExcludeSelectors.remove": [
      ".notranslate"
    ],
    "excludeSelectors.add": [
      ".mx_DisambiguatedProfile",
      ".mx_ReplyChain_wrapper",
      ".mx_ThreadSummary_replies_amount"
    ]
  },
  {
    "id": "mkdocs-material",
    "selectorMatches": [
      ".md-container[data-md-component]"
    ],
    "excludeSelectors": [
      ".dstack-termy-has-copy"
    ],
    "selectors": [
      "article",
      ".md-sidebar__inner"
    ],
    "injectedCss.add": [
      ".md-sidebar__inner .immersive-translate-target-wrapper {display: inline-flex;}"
    ],
    "advanceMergeConfig": [
      {
        "condition": "platform==safari",
        "advanceConfig": {
          "generalRule": {
            "preTranslateLimiter": {}
          }
        }
      }
    ]
  },
  {
    "id": "termynal",
    "selectorMatches": [
      "link[href*='termynal.css']"
    ],
    "stayOriginalSelectors.add": [
      ".termy"
    ]
  },
  {
    "id": "cpb-nl",
    "matches": [
      "www.cpb.nl"
    ],
    "bodyRule.add": {
      "enable": false
    }
  },
  {
    "id": "hub.logseq",
    "matches": [
      "hub.logseq.com"
    ],
    "globalStyles": {
      "[class*=':h-[']": "height:unset;"
    }
  },
  {
    "id": "chat.zalo",
    "matches": [
      "chat.zalo.me"
    ],
    "additionalExcludeSelectors.remove": [
      ".notranslate"
    ],
    "inputConfig.add": {
      "execCommandDeleteEnable": true
    }
  },
  {
    "id": "epam",
    "matches": "*.epam.com",
    "globalStyles": {
      "[class*='ContentAnchorLinkList']": "word-break:unset;"
    },
    "excludeSelectors.add": [
      "#blog-page-sidebar-wrapper"
    ],
    "excludeTags.remove": [
      "BUTTON"
    ]
  },
  {
    "id": "discussions.apple",
    "matches": "discussions.apple.com",
    "excludeSelectors.add": [
      ".page-number"
    ]
  },
  {
    "id": "www.sixthtone.com",
    "matches": [
      "www.sixthtone.com"
    ],
    "excludeSelectors.add": [
      "#footer",
      "[class^=index_time]",
      "[class^=index_anthorList]",
      "[class^=index_node]",
      "[class^=index_popupWrapper]"
    ]
  },
  {
    "id": "forum.unity",
    "matches": [
      "forum.unity.com"
    ],
    "excludeSelectors.add": [
      ".bbCodeCode"
    ]
  },
  {
    "id": "wattpad",
    "matches": [
      "www.wattpad.com"
    ],
    "excludeTags.remove": [
      "PRE"
    ],
    "globalAttributes.add": {
      "header": {
        "translate": "unset;"
      }
    },
    "globalStyles": {
      ".story-info .item-description": "overflow: scroll;"
    }
  },
  {
    "id": "netflix",
    "matches": [
      "www.netflix.com"
    ],
    "excludeSelectors.add": [
      ".player-timedtext"
    ],
    "mutationExcludeSelectors.add": [
      ".player-timedtext *"
    ],
    "additionalExcludeSelectors.add": [
      ".source-cue"
    ],
    "subtitleRule.add": {
      "type": "netflix",
      "supportedDisplayModes": [
        "attach",
        "native"
      ],
      "defaultDisplayMode": "attach",
      "loadingContainerSelector": ".watch-video",
      "hookType": "fetch|xhr",
      "subtitleUrlRegExp": "^https://.+?.oca.nflxvideo.net/\\?([ovet]=[^=]+){4}$",
      "loadingStyle": "bottom: 15%;",
      "quickButtonRule": {
        "appendSelector": "[data-uia=\"control-audio-subtitle\"]<-parent<-parent",
        "insertBeforeSelector": "[data-uia=\"control-audio-subtitle\"]<-parent",
        "injectCSS": ".imt-quick-subtitle-button {height: 60%; margin-right: 50px; font-size: 20px; } .logo,.logo svg { height: 36px; width: 36px} .label { display: none; } .imt-quick-subtitle-pop-content {transform: translateX(50%); right: 0}",
        "injectCSS.add_v.[1.32.3]": ".imt-quick-subtitle-button {height: 60%; margin-top: 5px; margin-left: -25px; margin-right: 40px; font-size: 20px; } .logo,.logo svg { height: 36px; width: 36px} .label { display: none; }"
      },
      "attachRule": {
        "appendSelector": ".watch-video--player-view > div",
        "injectedGlobalCSS": ".player-timedtext {display:none!important;}",
        "injectedCSS": [
          ".imt-caption-window {margin-bottom: 0; bottom: 10%;}",
          ".imt-caption-window {width: 90%;}"
        ],
        "isDelay": true
      },
      "videoSelector": "video",
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] #immersive-translate-caption-window {direction: rtl;}"
      ],
      "enableHookDownload": true
    }
  },
  {
    "id": "udemy",
    "matches": [
      "*.udemy.com"
    ],
    "excludeSelectors.add": [
      "[data-purpose='captions-cue-text']",
      ".shaka-text-container"
    ],
    "mutationExcludeSelectors.add": [
      "[data-purpose='captions-cue-text'] *",
      ".shaka-text-container *"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "subtitleUrlRegExp": "^https://vtt.*\\.udemycdn\\.com/.*\\.vtt",
      "videoPlayerSelector": "video.shaka-video",
      "humanTrust": 85,
      "hookType": "fetch|xhr",
      "loadingContainerSelector": ".shaka-video-container",
      "loadingStyle": "bottom: 15%;",
      "injectedCss": [
        "[class^='well-module--text'] {white-space: pre;max-width: 100%;}"
      ],
      "enableHookDownload": true,
      "quickButtonRule": {
        "appendSelector": "[data-purpose=\"video-controls\"]"
      }
    }
  },
  {
    "id": "iview",
    "matches": [
      "iview.abc.net.au"
    ],
    "excludeSelectors": [
      ".jwplayer",
      ".shaka-text-container"
    ],
    "mutationExcludeSelectors.add": [
      ".jwplayer *",
      ".shaka-text-container *"
    ],
    "subtitleRule.add": {
      "type": "live_attach",
      "videoPlayerSelector": "[data-component=\"MediaPlayerContainer\"]",
      "videoSelector": "video[data-component=\"MediaPlayerElement\"]",
      "captionContainerSelector": ".shaka-text-container",
      "loadingContainerSelector": "[data-component=\"MediaPlayerContainer\"]",
      "quickButtonRule": {
        "appendSelector": "[data-component=\"MediaPlayerContainer\"] [aria-label=\"Media Display Controls\"]",
        "insertBeforeSelector": "[data-component=\"MediaPlayerContainer\"] [aria-label=\"Closed Captions\"]"
      },
      "attachRule": {
        "appendSelector": "[data-component=\"MediaPlayerContainer\"]",
        "injectedGlobalCSS": [
          ".shaka-text-container {opacity: 0 !important; pointer-events: none !important;}"
        ]
      }
    }
  },
  {
    "id": "marketsurge",
    "matches": [
      "marketsurge.investors.com"
    ],
    "excludeSelectors": [
      ".jwplayer"
    ],
    "mutationExcludeSelectors.add": [
      ".jwplayer *"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "subtitleUrlRegExp": ".*\\.srt",
      "loadingContainerSelector": ".jwplayer",
      "quickButtonRule": {
        "appendSelector": ".jw-reset.jw-button-container",
        "insertBeforeSelector": ".jw-settings-submenu-button",
        "injectCSS": ".imt-quick-subtitle-pop-content {z-index: 999999;}"
      },
      "attachRule": {
        "appendSelector": ".jwplayer",
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ],
        "injectedGlobalCSS": [
          ".jw-text-track-container {display:none!important;}"
        ]
      }
    }
  },
  {
    "id": "nmaart",
    "matches": "www.nma.art",
    "excludeSelectors": [
      ".video-container"
    ],
    "mutationExcludeSelectors.add": [
      ".video-container *"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "subtitleUrlRegExp": "/texttrack/.*\\.(vtt|webvtt)",
      "loadingContainerSelector": ".video-container",
      "quickButtonRule": {
        "appendSelector": ".vjs-control-bar",
        "insertBeforeSelector": ".vjs-playback-rate"
      },
      "attachRule": {
        "appendSelector": "video-js[id^='vjs_video']",
        "injectedGlobalCSS": [
          ".vjs-text-track-display { display: none !important; }"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "wiley",
    "matches": "*.wiley.com",
    "excludeMatches": [
      "onlinelibrary.wiley.com/action/downloadSupplement*",
      "onlinelibrary.wiley.com/doi/pdf/*",
      "onlinelibrary.wiley.com/doi/am-pdf/*"
    ],
    "excludeSelectors.add": [
      ".loa-authors",
      ".MuiBox-root > .MuiTypography-root.MuiTypography-body2"
    ]
  },
  {
    "id": "investors",
    "matches": "www.investors.com",
    "subtitleRule.add": {
      "type": "subsrt",
      "subtitleUrlRegExp": ".*\\.srt",
      "hookType": "xhr",
      "quickButtonRule": {
        "appendSelector": ".jw-button-container",
        "insertBeforeSelector": ".jw-icon-cc",
        "ccEnableSelector": ".jw-icon-cc"
      },
      "injectedCss": ".jw-reset-text {font-size: 0.8em !important;}"
    }
  },
  {
    "id": "abc.net",
    "matches": "www.abc.net.au",
    "subtitleRule.add": {
      "type": "webvtt",
      "subsrtFormat": "srt",
      "subtitleUrlRegExp": ".*\\.vtt",
      "hookType": "xhr",
      "quickButtonRule": {
        "appendSelector": ".jw-button-container",
        "insertBeforeSelector": ".jw-icon-cc",
        "ccEnableSelector": ".jw-icon-cc"
      }
    }
  },
  {
    "id": "patreon",
    "matches": "www.patreon.com",
    "excludeSelectors": [
      ".video-container"
    ],
    "mutationExcludeSelectors.add": [
      ".video-container *"
    ],
    "subtitleRule.add": {
      "type": "webvtt",
      "subtitleUrlRegExp": ".*\\.vtt",
      "hookType": "xhr",
      "enableHookDownload": true,
      "quickButtonRule": {
        "appendSelector": ".sc-m5ts00-1.ejfyrG > div:last-child",
        "insertBeforeSelector": ".sc-m5ts00-1.ejfyrG > div:last-child > button",
        "injectCSS": ".label { display: none; } .logo,.logo svg { width: 70%; } .imt-quick-subtitle-button { margin: 0 8px;}"
      }
    },
    "likePreSelectors.add": [
      "[elevation='subtle'] .sc-brSvTw > :first-child > :first-child",
      ".cm-gBCCZY",
      "[data-tag='comment-body']"
    ],
    "isTransformPreTagNewLine": true,
    "forceFormatPre": true
  },
  {
    "id": "thaipbs",
    "matches": [
      "www.thaipbs.*",
      "players.brightcove.net"
    ],
    "excludeSelectors": [
      ".video-container"
    ],
    "mutationExcludeSelectors.add": [
      ".video-container *"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "subtitleUrlRegExp": ".*\\.vtt.*",
      "enableHookDownload": true,
      "quickButtonRule": {
        "appendSelector": ".vjs-control-bar",
        "insertBeforeSelector": "div.vjs-subs-caps-button",
        "injectCSS": ".imt-quick-subtitle-button { height: 60%; } .label { display: none; } .logo,.logo svg { width: 70%; } .imt-quick-subtitle-button { margin: 6px 8px 0;}"
      }
    }
  },
  {
    "id": "matlabacademy",
    "matches": [
      "matlabacademy.mathworks.com"
    ],
    "subtitleRule.add": {
      "type": "webvtt",
      "subsrtFormat": "srt",
      "subtitleUrlRegExp": ".*\\.vtt",
      "hookType": "xhr",
      "quickButtonRule": {
        "appendSelector": ".vjs-control-bar",
        "insertBeforeSelector": "div.vjs-subs-caps-button"
      }
    }
  },
  {
    "id": "hstream",
    "matches": "hstream.moe",
    "excludeSelectors": [
      ".video-container"
    ],
    "mutationExcludeSelectors.add": [
      ".video-container *"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "subtitleUrlRegExp": "/texttrack/.*\\.(vtt|webvtt)",
      "loadingContainerSelector": ".video-container",
      "quickButtonRule": {
        "appendSelector": ".vjs-control-bar",
        "insertBeforeSelector": ".vjs-playback-rate"
      },
      "attachRule": {
        "appendSelector": "video-js[id^='vjs_video']",
        "injectedGlobalCSS": [
          ".vjs-text-track-display { display: none !important; }"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "zenva",
    "matches": "academy.zenva.com",
    "excludeSelectors": [
      ".video-container"
    ],
    "mutationExcludeSelectors.add": [
      ".video-container *"
    ],
    "subtitleRule.add": {
      "type": "multi_attach_vtt",
      "subtitleUrlRegExp": "\\.vtt$",
      "quickButtonRule": {
        "appendSelector": ".vjs-control-bar",
        "insertBeforeSelector": ".vjs-playback-rate"
      },
      "activeLangSelector": "li.vjs-menu-item.vjs-captions-menu-item.vjs-selected > span",
      "langTextRegex": "(\\S+)\\s+Captions",
      "attachRule": {
        "appendSelector": ".video-js",
        "injectedGlobalCSS": [
          ".vjs-text-track-display { display: none !important; }"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "lowstresshandling",
    "matches": "university.lowstresshandling.com",
    "excludeSelectors": [
      "div[data-vjs-player]"
    ],
    "mutationExcludeSelectors.add": [
      "div[data-vjs-player] *"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "subtitleUrlRegExp": "\\.vtt$",
      "quickButtonRule": {
        "appendSelector": ".vjs-control-bar",
        "insertBeforeSelector": "div.vjs-subs-caps-button "
      },
      "attachRule": {
        "appendSelector": "div[data-vjs-player]",
        "injectedGlobalCSS": [
          ".vjs-text-track-display { display: none !important; }"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "apple",
    "matches": "developer.apple.com",
    "excludeSelectors.add": [
      ".developer-video-player",
      ".vue-recycle-scroller"
    ],
    "mutationExcludeSelectors.add": [
      ".developer-video-player *"
    ],
    "subtitleRule.add": {
      "type": "webvtt",
      "subtitleUrlRegExp": "\\.(vtt|webvtt)"
    }
  },
  {
    "id": "khanacademy",
    "matches": [
      "*.khanacademy.org"
    ],
    "subtitleRule.add": {
      "type": "text_track",
      "videoPlayerSelector": "video",
      "loadingContainerSelector": ".ka-video-player-container"
    },
    "stayOriginalSelectors.add": [
      ".mathjax-wrapper"
    ]
  },
  {
    "id": "nebula",
    "matches": "nebula.tv",
    "excludeSelectors.add": [
      "[data-subtitles-container='true']"
    ],
    "mutationExcludeSelectors.add": [
      "[data-subtitles-container='true'] *"
    ],
    "subtitleRule.add": {
      "type": "webvtt",
      "subtitleUrlRegExp": "\\.vtt$",
      "loadingContainerSelector": ".video-poster",
      "quickButtonRule": {
        "appendSelector": ".icon-spacing.css-4yh7a0",
        "insertBeforeSelector": "[aria-label=Subtitles]",
        "ccEnableSelector": "[aria-label=Subtitles]"
      },
      "attachRule": {
        "appendSelector": "#video-player",
        "injectedGlobalCSS": [
          "div[data-subtitles-container='true'] { display: none !important; }"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "ko-comic",
    "matches": [
      "*comic.naver.com"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".toon_view_lst img",
        ".wt_viewer img",
        ".swiper-slide img"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid",
        "imtIOSNew"
      ],
      "inValidSrcRegex": [
        "bg_transparency.png"
      ]
    }
  },
  {
    "id": "ko-commic",
    "matches": [
      "funbe*.com",
      "happytoon01.com",
      "tkor*.com",
      "toonkor*.org",
      "www.twmanga.com",
      "www.mgeko.cc",
      "greentoon.net",
      "dynasty-scans.com",
      "mangaoi.net"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "#toon_content_imgs img",
        "#toon_img img",
        ".webtoon-read-section img",
        "img.i-amphtml-fill-content",
        "#chapter-reader img",
        ".toon_content img",
        "#image img",
        ".item-chapter img"
      ],
      "inValidSrcRegex": [
        "loading.svg"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid",
        "imtIOS"
      ]
    },
    "_comment": "通用韩漫配置项"
  },
  {
    "id": "fawesome",
    "matches": [
      "fawesome.tv"
    ],
    "subtitleRule.add": {
      "type": "text_track",
      "videoPlayerSelector": "video",
      "quickButtonRule": {
        "appendSelector": ".video-controls > .options.right",
        "insertBeforeSelector": ".cc-on-off"
      }
    }
  },
  {
    "id": "mangaplus-shueisha",
    "matches": [
      "mangaplus.shueisha.*"
    ],
    "excludeSelectors.add": [
      ".zao-surface"
    ],
    "injectedCss": {
      ".zao-image-container": "position: relative;"
    },
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".zao-surface .zao-image",
        ".story-see-content img"
      ]
    },
    "_comment": "all"
  },
  {
    "id": "zebrack-shueisha",
    "matches": [
      "zebrack-comic.shueisha.*",
      "mangamillion.shueisha.co.jp"
    ],
    "excludeSelectors.add": [
      ".eAvsta_root"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".eAvsta_root img.G54Y0W_page"
      ],
      "loadingStyle": "z-index: 9999;",
      "loadingSelectors": [
        "[data-testid='placeholder']"
      ]
    },
    "_comment": "all"
  },
  {
    "id": "rawlazy",
    "matches": [
      "rawlazy.io"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".z_content img"
      ],
      "inValidSrcRegex": [
        "load.gif"
      ],
      "enableImageSrcObserver": true,
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ]
    }
  },
  {
    "id": "klz9",
    "matches": [
      "klz9.com"
    ],
    "imageRule.add_v.[1.13.2]": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".chapter-img",
        "main img"
      ],
      "intersectionRootMargin": "0px 0px 200% 0px",
      "platforms": [
        "chrome"
      ]
    }
  },
  {
    "id": "nyxscans",
    "matches": "nyxscans.com",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "figure img[src*=nyxscans]"
      ]
    }
  },
  {
    "id": "toptoon",
    "matches": "toptoon.com",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "opImageType": "append",
      "urlFetchType": "canvasArgs",
      "imageSelectors": [
        ".comic_img img",
        ".comic_img canvas[data]"
      ]
    }
  },
  {
    "id": "hentairox.com",
    "matches": "hentairox.com",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".container img[class*='image']"
      ],
      "enableImageSrcObserver": true,
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "safari",
        "imtAndroid",
        "imtIOSNew"
      ]
    }
  },
  {
    "id": "comemh8",
    "matches": [
      "www.comemh8.com"
    ],
    "imageRule.add_v.[1.13.2]": {
      "type": "manga",
      "imageSelectors": [
        ".img-box img"
      ],
      "platforms": [
        "chrome"
      ]
    }
  },
  {
    "id": "fhentai",
    "matches": "fhentai.net",
    "imageRule.add": {
      "type": "manga",
      "imageSelectors": [
        "img[loading='lazy']"
      ],
      "loadingSelectors": [
        "div"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari"
      ]
    }
  },
  {
    "id": "scholar.cnki.net",
    "matches": "scholar.cnki.net",
    "injectedCss.add": [
      ".result .searchItem {height: auto!important;}"
    ]
  },
  {
    "id": "baramangaonline",
    "matches": [
      "baramangaonline.com"
    ],
    "imageRule.add": {
      "type": "manga",
      "imageSelectors": [
        ".entry-inner > div > a > img"
      ],
      "loadingSelectors": [
        "div"
      ]
    }
  },
  {
    "id": "visortmo",
    "matches": [
      "visortmo_notranslate.com"
    ],
    "imageRule.add": {
      "type": "manga",
      "imageSelectors": [
        ".img-container img"
      ],
      "loadingSelectors": [
        "div"
      ]
    }
  },
  {
    "id": "hitomi",
    "matches": [
      "hitomi.la",
      "hitomi.si"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "opImageType": "insertFirst",
      "imageSelectors": [
        "#comicImages img",
        "#mobileImages img",
        ".chapter-img > img"
      ],
      "imageStyle": "margin:auto;",
      "injectedCss": "#comicImages.fitVertical img {margin:auto;}",
      "urlFetchType": "img",
      "loadingSelectors": [
        "picture"
      ]
    },
    "_comment": "插入图片闪动"
  },
  {
    "id": "acgmhh",
    "matches": "acgmhh.com",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "opImageType": "insertFirst",
      "imageSelectors": [
        ".manga-picture img"
      ],
      "imageStyle": "margin:auto;",
      "loadingSelectors": [
        "picture"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ]
    }
  },
  {
    "id": "ideastatica",
    "matches": "www.ideastatica.com",
    "additionalStayOriginalSelectors.remove": [
      ".math-container"
    ]
  },
  {
    "id": "jmanga",
    "matches": [
      "jmanga.*",
      "*.jmanga.*"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".container-reader-chapter img"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ],
      "injectedCss": ".imt-image-status {animation: immersiveTranslateShadowRolling 1.5s linear infinite!important;z-index:9;}",
      "inValidSrcRegex": [
        "data:image/gif"
      ],
      "loadingSelectors": [
        "div"
      ],
      "intersectionRootMargin": "0px 0px 200% 0px"
    }
  },
  {
    "id": "news.talos-web",
    "matches": "news.talos-web.com",
    "excludeTags.remove": [
      "PRE"
    ]
  },
  {
    "id": "twicomi",
    "matches": "https://twicomi.com/manga*",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".image img"
      ],
      "urlFetchType": "img",
      "loadingSelectors": [
        "div"
      ],
      "intersectionRootMargin": "0px 0px 200% 0px",
      "_comment": "all"
    }
  },
  {
    "id": "wnacg",
    "matches": [
      "wnacg.com",
      "www.wnacg.com",
      "www.wn02.cc",
      "www.wnacg.ru",
      "www.wnacg*.cc"
    ],
    "imageRule.add": {
      "enable": true,
      "enableAutoTranslateByReferrer": true,
      "type": "manga",
      "imageSelectors": [
        "#imgarea img",
        "#img_list img",
        "#content img"
      ],
      "loadingSelectors": [
        "a",
        "div"
      ],
      "intersectionRootMargin": "0px 0px 200% 0px",
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ]
    }
  },
  {
    "id": "readcomicsonline",
    "matches": [
      "readcomicsonline.ru"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "#all img.img-responsive",
        "#ppp img.img-responsive",
        "img#reader-img"
      ],
      "enableAutoTranslateByReferrer": true,
      "loadingStyle": "z-index: 9999;",
      "inValidSrcRegex": [
        "data:image/gif"
      ]
    },
    "platforms": [
      "chrome",
      "firefox",
      "imtIOSNew",
      "safari",
      "imtAndroid"
    ]
  },
  {
    "id": "nhentai",
    "matches": [
      "nhentai.net",
      "6hentai.net",
      "nhentai.com",
      "vortexscans.org"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "#image-container img",
        ".image-container img",
        "div[id^=page] img"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtIOS"
      ],
      "loadingSelectors": [
        "section"
      ],
      "intersectionRootMargin": "0px 0px 200% 0px"
    }
  },
  {
    "id": "kemono",
    "matches": [
      "kemono.su",
      "kemono.cr",
      "pawchive.pw"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".post__thumbnail figure img"
      ],
      "intersectionRootMargin": "0px 0px 200% 0px"
    },
    "excludeTags.remove": [
      "PRE"
    ]
  },
  {
    "id": "iframe-manga",
    "matches": [
      "freeonlinehd.site",
      "weebrook.com"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".page-break img[class*='lazyloaded']"
      ],
      "inValidSrcRegex": [
        "blank.gif"
      ],
      "injectedCss": ".imt-image-status {top:10%!important;}",
      "intersectionRootMargin": "0px 0px 200% 0px",
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ]
    }
  },
  {
    "id": "toonily",
    "matches": "toonily.com",
    "imageRule.add": {
      "type": "manga",
      "imageSelectors": [
        ".page-break.no-gaps img"
      ],
      "inValidSrcRegex": [
        "blank.gif"
      ],
      "injectedCss": ".imt-image-status {top:10%!important;}",
      "intersectionRootMargin": "0px 0px 200% 0px",
      "platforms": [
        "chrome"
      ]
    }
  },
  {
    "id": "mangadistrict-manhwaclan",
    "matches": [
      "mangadistrict2.com",
      "manhwaclan.com",
      "manhuaread.com",
      "www.mangaread.org",
      "mangaforfree.net",
      "bakamh.com",
      "yakshascans.com",
      "topcomicporno.com",
      "toonclash.com",
      "rawdex.net",
      "reset-scans.org",
      "cultivationmanhua.com",
      "freeonlinehd.site",
      "weebrook.com"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".page-break.no-gaps img",
        ".page-break img[class*='lazyloaded']"
      ],
      "loadingSelectors": [
        "div"
      ],
      "inValidSrcRegex": [
        "blank.gif"
      ],
      "injectedCss": ".imt-image-status {top:10%!important;}",
      "intersectionRootMargin": "0px 0px 200% 0px",
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid",
        "imtIOS"
      ]
    }
  },
  {
    "id": "wn01",
    "matches": "www.wn01.*",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "#img_list img",
        "#content img[id*=img]"
      ],
      "loadingSelectors": [
        "div"
      ],
      "intersectionRootMargin": "0px 0px 200% 0px",
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ]
    }
  },
  {
    "id": "pixhentai.com",
    "matches": [
      "pixhentai.com",
      "kaynscan.org"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".thumbnail img",
        "figure img"
      ],
      "loadingSelectors": [
        "div"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari"
      ]
    }
  },
  {
    "id": "manhwaclub",
    "matches": "manhwaclub.net",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".reading-content .page-break.no-gaps img.wp-manga-chapter-img"
      ],
      "intersectionRootMargin": "0px 0px 200% 0px",
      "platforms": [
        "other",
        "chrome",
        "imtIOSNew",
        "imtAndroid",
        "safari"
      ]
    }
  },
  {
    "id": "jinmangas",
    "matches": "jinmangas.com",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".reading-content .page-break.no-gaps img.wp-manga-chapter-img"
      ],
      "intersectionRootMargin": "0px 0px 200% 0px",
      "platforms": [
        "other",
        "chrome",
        "safari",
        "imtAndroid",
        "imtIOSNew"
      ]
    }
  },
  {
    "id": "manhwaread",
    "matches": [
      "manhwaread.com",
      "www.manhwaread.com"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "#imagesList img.reading-image",
        "#imagesList .reading-page img",
        "#imagesList img"
      ],
      "inValidSrcRegex": [
        "data:,"
      ],
      "intersectionRootMargin": "0px 0px 200% 0px",
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ]
    }
  },
  {
    "id": "manhwabuddy",
    "matches": "manhwabuddy.com",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".reading-content img"
      ]
    },
    "platforms": [
      "chrome",
      "firefox",
      "safari",
      "imtIOSNew"
    ]
  },
  {
    "id": "fantia",
    "matches": "fantia_notranslate.*",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "picture.article__atomic-block img"
      ],
      "loadingSelectors": [
        "div"
      ],
      "intersectionRootMargin": "0px 0px 200% 0px"
    }
  },
  {
    "id": "wto.to",
    "matches": "wto.to",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "div[name='image-item'] > div > img"
      ],
      "loadingStyle": "z-index: 9999;",
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ]
    }
  },
  {
    "id": "pash-up",
    "matches": "pash-up.jp",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "opImageType": "append",
      "imageSelectors": [
        "#canvasCluster canvas[data]",
        "#viewport1 canvas[data]"
      ],
      "loadingSelectors": [
        "div"
      ],
      "intersectionRootMargin": "0px 0px 200% 0px",
      "platforms": [
        "chrome"
      ]
    }
  },
  {
    "id": "bookwalker",
    "matches": "*.bookwalker.jp",
    "imageRule.add_v.[1.32.3]": {
      "enable": true,
      "type": "manga",
      "opImageType": "append",
      "imageSelectors": [
        "#renderer .currentScreen canvas:not(.imt-img)"
      ],
      "mangaRefreshSelectors": [
        "#pageSliderCounter"
      ],
      "platforms": [
        "chrome"
      ]
    }
  },
  {
    "id": "h-comic-canvas",
    "matches": [
      "www.sukima.me",
      "piccoma.com",
      "jmcomic-zzz.one",
      "comix.to",
      "comix.ws",
      "pocket.shonenmagazine.com",
      "youngchampion.jp",
      "manga-one.com",
      "book.dmm.com"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "opImageType": "append",
      "urlFetchType": "canvasArgs",
      "intersectionRootMargin": "0px 0px 200% 0px",
      "loadingStyle": "z-index: 999",
      "imageSelectors": [
        ".slick-track canvas[data]",
        ".PCM-viewer2_canvas_wrap canvas[data]",
        ".scramble-page canvas[data]",
        ".center img ",
        ".rpage-main__inner img",
        ".rpage-page__img[data]",
        ".c-viewer__comic canvas[data]",
        ".-cv-page-canvas canvas[data]",
        "[class*='slide_container'] img",
        ".page canvas[data]"
      ],
      "injectedCss": "canvas.imt-img {display: block!important;}",
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "imtAndroid",
        "safari",
        "userscript"
      ]
    }
  },
  {
    "id": "manhwaweb",
    "matches": "manhwaweb.com/leer/*",
    "imageRule.add_v.[1.33.2]": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "img[src^='https://img2mw.xyz/manhwas/']",
        ".flex.flex-col.items-center.w-full img.w-full"
      ],
      "injectedCss": ".imt-image-status { top:20% !important; }",
      "intersectionRootMargin": "0px 0px 200% 0px",
      "platforms": [
        "chrome"
      ]
    }
  },
  {
    "id": "kencomics.com",
    "matches": "kencomics.com/series/*/chapter-*",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".comic-images-wrapper .image-container img"
      ],
      "platforms": [
        "other",
        "chrome",
        "imtIOSNew",
        "imtAndroid",
        "safari"
      ]
    }
  },
  {
    "id": "wmanhua",
    "matches": "www.wmanhua.com/chapter/*",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "#comicContainer .images img.comic-image"
      ],
      "inValidSrcRegex": [
        "/resource/image/loading\\.svg(?:[?#]|$)"
      ],
      "platforms": [
        "other",
        "chrome",
        "imtIOSNew",
        "imtAndroid",
        "safari"
      ]
    }
  },
  {
    "id": "18mh",
    "matches": "18mh.net/comic/chapter/*",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "main[data-comic-info] > section > img"
      ],
      "inValidSrcRegex": [
        "/static/frontend/images/loading\\.svg(?:[?#]|$)"
      ],
      "platforms": [
        "other",
        "chrome",
        "imtIOSNew",
        "imtAndroid",
        "safari"
      ]
    }
  },
  {
    "id": "v-comic",
    "matches": [
      "newmanhwa.com",
      "ex.fangliding.*",
      "fxfx302.com",
      "comic-meteor.jp",
      "omegascans.org",
      "klmanga.*",
      "readallcomics.com",
      "e-hentai.org",
      "nhentai.xxx",
      "globalcomix.com",
      "mangatoto.com",
      "batotoo.com",
      "mangatoto.net",
      "ranfren.neocities.org",
      "readmanga18.com",
      "manga18.club",
      "utoon.net",
      "nyxscans.com",
      "manhuapica.com",
      "m.ac.qq.com",
      "rawdevart.art",
      "manga-shinchan.com",
      "cn.twbzmg.com",
      "mangalib.org",
      "yaoimangaonline.com",
      "nhentaiyaoi.net",
      "www.orchisasia.org",
      "novelcrow.com",
      "www.comic-ryu.jp",
      "www.177picyy.com",
      "yymanhua.com",
      "www.antbyw.com",
      "www.ctccomic.com",
      "nyaa.fan",
      "www.mangago.me",
      "rinkocomics.com",
      "rokaricomics.com",
      "hanimeone.me",
      "roliascan.com",
      "novelpia.com",
      "manhwaraw18.com",
      "nhentai.to",
      "www.zerobywai.com",
      "toongod.cc",
      "kingofshojo.com",
      "weebcentral.com",
      "*.mrblue.com",
      "jumptoon-next.com",
      "www.mangasincensura.com",
      "lrr.tvc-16.science",
      "mangarawad.org",
      "mangarawad.blog",
      "mangarawad.buzz",
      "manga-park.com",
      "mangaflame.org",
      "manhwa404.com",
      "manhwahentai.io",
      "beehentai.com",
      "xmanga.org",
      "rokuhentai.com",
      "rawkuma.net",
      "florascans.net",
      "comic.mf-fleur.jp",
      "wfwf395.com",
      "wfwf399.com",
      "komiic.com",
      "manhwaus.org",
      "manga18.me",
      "www.tichct.org",
      "manhuaplus.org",
      "www.manhuazhan.com",
      "momon-ga.com",
      "blossommanga.com",
      "w226.npdn.top",
      "www.hmttmh.com",
      "rawkuma.com",
      "komiku.com",
      "komiku.one",
      "manga18fx.cc",
      "rule34.xxx",
      "webtoonraw.com",
      "sololevelingfree.vip",
      "topreadmanga.com",
      "kissmanga.in",
      "revengeoftheiron-bloodedswordhound.one",
      "www.wn03.ru",
      "02.ikiru.wtf",
      "mangahub.ru",
      "ezmanga.org",
      "magustoon.org",
      "manhwa18.net",
      "violetscans.org",
      "www.publicdiplomacymagazine.com",
      "raw1001.net",
      "mkissa.to",
      "syosetu.si",
      "www.iqiyi.com/manhua/*",
      "mangarawjp.me",
      "cartoonporn.to",
      "e621.net",
      "jcomic.net",
      "tapas.io",
      "kagane.to",
      "soraraw.com",
      "qimanga.com",
      "gomuraw.biz",
      "atsu.moe",
      "webtoonscan.com",
      "www.zipcomic.com",
      "batcave.biz",
      "www.twbzmg.com",
      "demonicscans.org",
      "18comic.vip",
      "www.wn09.shop",
      "nyraxmanga.com",
      "tiamanhwa.net",
      "www.yinmh.com",
      "www.manhwas.men",
      "*.uzakichanmanga.com",
      "book18.fans",
      "mangayun.com",
      "violetmanga.com",
      "m.fanfox.net"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "#reader figure img.is-loaded",
        "#img",
        ".image-view img",
        "#content img",
        ".render .z_content img",
        ".render img",
        ".z_content img",
        "center img.bgimglazy-load",
        "#i3 #img",
        "#sd img",
        "#readerContainer img",
        "#p2pReader [data-sentry-component='BouncyImage'] img",
        "div[name='image-item'] img",
        "img.page-img",
        "#viewer img",
        "center img",
        ".image_story img",
        ".read-content img",
        ".reading-content .page-break img",
        "figure img[src*=nyxscans]",
        "#chapter-images-id img",
        "#chapter-images img",
        ".comic-pic",
        ".chapter-img img",
        ".tiup_body div p img",
        ".item__list-lists figure img",
        ".comic-contain div amp-img img",
        ".xo_ct img",
        ".row div div p img",
        ".post-fotos li a img",
        ".page-break.no-gaps img",
        ".page-break img",
        ".swiper-slide img[class*='comic-img']",
        ".single-content img",
        "#cp_img img",
        "#jameson_manhua img",
        "#jamesonreadtouch img",
        "img#cc-comic",
        ".chapter-img img.loaded",
        "#pic_container img[style='']",
        ".chapter-image.loaded",
        "#current-page-image",
        "#chapter-images-container .comic-image[src^=http]",
        ".comic-content img",
        ".img-wrap img",
        "#image-container img",
        ".reading-content img",
        ".page-break > img",
        "#readerarea img",
        "[class*='flex-1 flex flex-col pb-4 cursor-pointer gap-4'] img",
        "#root img",
        "section img[data-nimg]",
        ".cc-imagewrapper img",
        "img.reader-image",
        ".page-chapter img",
        ".manga-image",
        ".chapter-image img",
        "div > img[alt='preview']",
        "img.site-reader__image[src]",
        "img.ts-main-image",
        "section[data-image-data] img",
        ".manga-content__image img",
        "img.v-img",
        "img.comicImage",
        ".gallery-item img",
        ".readImg img",
        "p.chapter>img.lazy",
        "#post-hentai img",
        "img[ng-img='true']",
        "#comicContain img",
        "#fit-to-screen > .flexi img",
        "#chapter_boxImages img.image-chapter",
        "div.relative img.object-contain",
        "div.page-break img.wp-manga-chapter-img",
        "div.entry-content p img",
        "div#img_list img",
        "[data-chapter-type='manga'] section[oncontextmenu] img",
        ".reader-viewer-scan img[src]",
        ".r-page-img[src*='jpg']",
        ".image-container img",
        ".m18-reading img[src*=jpg]",
        "#readerarea img.ts-main-image",
        "img#fimg",
        ".readImg img",
        "img.reader-page__img",
        ".render img",
        ".main-container img",
        ".MainContainer .ng-scope img",
        ".images-list img",
        "img#image",
        "img.comic-thumb",
        "img.content__img",
        ".blob-image-page img",
        ".swiper-horizontal-reader .swiper-slide img",
        ".r-page img",
        "data-reader-page img",
        ".viewer-canvas img",
        ".reader__item-wrap img",
        "amp-img img",
        "img.imgholder",
        "img.lazy_img",
        "#v-container img",
        "img.ts-main-image",
        "img.wp-manga-chapter-img",
        ".left .image img",
        "#chapter_imgs img",
        "img.aligncenter",
        "#post-hentai img",
        ".reader-page-wrap > img",
        "img.ts-main-image"
      ],
      "credentialUrlMatches": [
        "https://images.jcomic.net/*"
      ],
      "loadingStyle": "z-index: 999; top: 10%;",
      "intersectionRootMargin": "0px 0px 200% 0px",
      "inValidSrcRegex": [
        "loading.gif",
        "load.gif",
        "preloader.gif",
        "ajax-loader.gif",
        "readerarea.svg",
        "image/gif",
        "/static/loading.gif"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "imtAndroid",
        "safari"
      ]
    }
  },
  {
    "id": "colamanga",
    "matches": "www.colamanga.com",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".mh_comicpic img"
      ],
      "loadingSelectors": [
        "div"
      ],
      "intersectionRootMargin": "0px 0px 200% 0px"
    },
    "_comment": "all"
  },
  {
    "id": "ganganonline",
    "matches": "*.ganganonline.com",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "img[decoding='async']"
      ],
      "loadingSelectors": [
        "div"
      ],
      "intersectionRootMargin": "0px 0px 200% 0px"
    },
    "_comment": "all"
  },
  {
    "id": "bato",
    "matches": [
      "bato.to",
      "battwo.com",
      "bato.si",
      "mto.to"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "#viewer img",
        "div[name='image-item'] > div > img",
        "[data-name='image-item'] img"
      ],
      "loadingSelectors": [
        "div"
      ],
      "injectedCss": ".imt-image-status {z-index:2147483647 !important;}",
      "intersectionRootMargin": "0px 0px 200% 0px",
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ]
    }
  },
  {
    "id": "asuracomic",
    "matches": "asuracomic.net",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "img[alt^='chapter page']"
      ],
      "loadingSelectors": [
        "div"
      ],
      "injectedCss": ".imt-image-status {top:5%!important;}",
      "intersectionRootMargin": "0px 0px 200% 0px",
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari"
      ]
    }
  },
  {
    "id": "asurascanz",
    "matches": "asurascanz.com",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "#readerarea img[loading='lazy'][alt*=' - PAGE ']"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari"
      ]
    }
  },
  {
    "id": "asurascans",
    "matches": "asurascans.com",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "[data-page] img"
      ],
      "loadingSelectors": [
        "[data-page]"
      ],
      "injectedCss": "#immersiveTranslateImgLoading { z-index:999 !important; }",
      "intersectionRootMargin": "0px 0px 200% 0px",
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari"
      ]
    }
  },
  {
    "id": "lezhinus-virtual-reader",
    "matches": [
      "https://www.lezhinus.com/*/comic/incomplete_combustion/*",
      "https://www.lezhinus.com/comic/incomplete_combustion/*",
      "https://www.lezhinus.com/*/comic/maneater/*",
      "https://www.lezhinus.com/comic/maneater/*"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".scroll-view [data-cut-index] > img[src^='blob:']:not(.imt-img)"
      ],
      "opImageType": "replace",
      "intersectionRootMargin": "0px",
      "platforms": [
        "other",
        "chrome",
        "safari",
        "userscript",
        "imtAndroid",
        "imtIOS",
        "imtIOSNew"
      ]
    }
  },
  {
    "id": "lezhinus",
    "matches": "www.lezhinus.com",
    "imageRule.add.[1.13.8]": {
      "enable": true,
      "type": "manga",
      "urlFetchType": "canvasArgs",
      "imageSelectors": [
        "#scroll-list img",
        "[class^='scrollView'] img",
        "[class^='scrollView'] canvas[data]",
        "#banner-section .img-desktop",
        ".scroll-view [data-cut-index] > img[src*='/contents/scrolls/']:not(.imt-img)"
      ],
      "opImageType": "append",
      "injectedCss": "#banner-section .main-banner.img-desktop[style*='display: none']:not(.imt-img) {display: none !important;}",
      "intersectionRootMargin": "0px 0px 200% 0px"
    }
  },
  {
    "id": "allmanga",
    "matches": "allmanga.to",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "#pictureViewer img"
      ],
      "loadingSelectors": [
        "div"
      ],
      "inValidSrcRegex": [
        "data:image/gif"
      ],
      "intersectionRootMargin": "0px 0px 200% 0px",
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ]
    }
  },
  {
    "id": "allporncomic",
    "matches": "allporncomic.com",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".read-container img"
      ],
      "loadingSelectors": [
        "div"
      ],
      "intersectionRootMargin": "0px 0px 200% 0px",
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "imtAndroid"
      ]
    }
  },
  {
    "id": "mangaz",
    "matches": "*.mangaz.com",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "opImageType": "append",
      "imageSelectors": [
        ".page_image canvas[data]",
        ".page_image img"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox"
      ]
    }
  },
  {
    "id": "girls-h-comics",
    "matches": "girls-h-comics.com",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".moviebese img"
      ],
      "inValidSrcRegex": [
        "data:image/gif"
      ],
      "loadingSelectors": [
        "p"
      ]
    }
  },
  {
    "id": "futabanet",
    "matches": [
      "gaugau.futabanet_block_too_much.jp"
    ],
    "imageRule.add": {
      "type": "manga",
      "imageSelectors": [
        ".works_tateyomi__wrap img",
        ".pt-img img"
      ],
      "urlFetchType": "img",
      "loadingSelectors": [
        "div"
      ],
      "intersectionRootMargin": "0px 0px 200% 0px"
    }
  },
  {
    "id": "web-ace",
    "matches": [
      "web-ace.*"
    ],
    "imageRule.add": {
      "type": "manga",
      "imageSelectors": [
        "img.viewerFixedImage"
      ],
      "urlFetchType": "img",
      "loadingSelectors": [
        "div"
      ],
      "intersectionRootMargin": "0px 0px 200% 0px"
    }
  },
  {
    "id": "toonily",
    "matches": [
      "toonily_notranslate.me"
    ],
    "imageRule.add": {
      "type": "manga",
      "imageSelectors": [
        "#chapter-images img"
      ],
      "loadingSelectors": [
        "div"
      ],
      "intersectionRootMargin": "0px 0px 200% 0px"
    }
  },
  {
    "id": "omegascans",
    "matches": [
      "omegascans_notranslate.org",
      "reaperscans.com",
      "www.omegascans.org"
    ],
    "imageRule.add": {
      "type": "manga",
      "urlFetchType": "img",
      "imageSelectors": [
        "main #content .container .flex-col img[data-src]",
        "main #content .container .flex-col img[src]"
      ],
      "injectedCss": ".imt-image-status {top:5%!important;}",
      "loadingSelectors": [
        "div"
      ],
      "intersectionRootMargin": "0px 0px 200% 0px",
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ]
    }
  },
  {
    "id": "zerobywzz",
    "matches": "www.zerobywzz.com",
    "imageRule.add": {
      "type": "manga",
      "imageSelectors": [
        ".uk-text-center img"
      ],
      "loadingSelectors": [
        "div"
      ],
      "intersectionRootMargin": "0px 0px 200% 0px"
    }
  },
  {
    "id": "dokusho-ojikan.jp",
    "matches": "dokusho-ojikan.jp",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "urlFetchType": "canvasArgs",
      "imageSelectors": [
        ".content.zoomable canvas[data]"
      ],
      "opImageType": "append"
    },
    "platforms": [
      "chrome",
      "firefox",
      "imtIOSNew",
      "safari",
      "imtAndroid"
    ]
  },
  {
    "id": "newtoki468",
    "matches": [
      "newtoki*.com"
    ],
    "imageRule.add": {
      "type": "manga",
      "imageSelectors": [
        "p>img"
      ],
      "inValidSrcRegex": [
        "loading-image.gif"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ]
    }
  },
  {
    "id": "smokingbehindthesupermarket.com",
    "matches": "smokingbehindthesupermarket.com",
    "selectorMatches": [
      "div.post-single-content#content"
    ],
    "imageRule.add": {
      "type": "manga",
      "imageSelectors": [
        "#content img"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ]
    }
  },
  {
    "id": "idmzj",
    "matches": [
      "m.idmzj.com"
    ],
    "imageRule.add": {
      "type": "manga",
      "imageSelectors": [
        ".scrollbar-demo-item img",
        "#commicBox div img"
      ],
      "loadingSelectors": [
        "div"
      ],
      "intersectionRootMargin": "0px 0px 200% 0px",
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari"
      ]
    }
  },
  {
    "id": "bomtoon",
    "matches": [
      "www.bomtoon.com"
    ],
    "imageRule.add": {
      "type": "manga",
      "urlFetchType": "canvasArgs",
      "imageSelectors": [
        "img[src*=bomtoon]",
        ".printView canvas[data]"
      ],
      "opImageType": "append",
      "loadingSelectors": [
        "div"
      ],
      "intersectionRootMargin": "0px 0px 100% 0px",
      "inValidSrcRegex": [
        ".svg"
      ]
    }
  },
  {
    "id": "yamibo",
    "matches": [
      "www.yamibo.com"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".img-responsive",
        ".needsclick img"
      ],
      "urlFetchType": "img",
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "imtAndroid"
      ],
      "loadingSelectors": [
        "div"
      ]
    }
  },
  {
    "id": "datalab.naver",
    "matches": "datalab.naver.com",
    "injectedCss.add": [
      ".tab_list_area .list_itm {height: unset !important;}",
      ".section.main_tab_opt .select {height: unset !important;}"
    ]
  },
  {
    "id": "copymanga",
    "matches": [
      "www.copymanga.site"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".comicContent-list img",
        ".van-image img"
      ],
      "inValidSrcRegex": [
        "loading.jpg"
      ],
      "loadingSelectors": [
        "li"
      ]
    }
  },
  {
    "id": "readcomiconline",
    "matches": [
      "readcomiconline.li",
      "rcostation.xyz"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "#divImage img",
        ".page-chapter img",
        "div[style*='images/loading.gif'] img"
      ],
      "loadingSelectors": [
        "p",
        "div"
      ],
      "inValidSrcRegex": [
        "blank.gif"
      ],
      "intersectionRootMargin": "0px 0px 200% 0px",
      "platforms": [
        "chrome"
      ]
    }
  },
  {
    "id": "comic-earthstar.com",
    "matches": "comic-earthstar.com/episode/*",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".js-page-area canvas.page-image.js-page-image"
      ],
      "urlFetchType": "canvasArgs",
      "opImageType": "append",
      "platforms": [
        "other",
        "chrome",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ]
    }
  },
  {
    "id": "championcross.jp",
    "matches": "https://championcross.jp",
    "imageRule.add": {
      "type": "manga",
      "imageSelectors": [
        ".js-page-area canvas[data]",
        "img.page-image.js-page-image",
        "img[class$=\"_page\"]",
        "[class='-cv-page-canvas'] canvas[data]"
      ],
      "urlFetchType": "canvasArgs",
      "opImageType": "append",
      "platforms": [
        "chrome"
      ],
      "loadingSelectors": [
        "p"
      ]
    },
    "injectedCss.add": [
      "[class^='Original_section_title'] {overflow:hidden!important;}"
    ]
  },
  {
    "id": "comic-zenon",
    "matches": [
      "comic-zenon.com"
    ],
    "imageRule.add": {
      "type": "manga",
      "imageSelectors": [
        "canvas.page-image.js-page-image",
        ".link-slot img",
        ".page-area img"
      ],
      "urlFetchType": "canvasArgs",
      "opImageType": "append"
    },
    "_comment": "all"
  },
  {
    "id": "mechacomic.jp",
    "matches": "mechacomic.jp",
    "imageRule.add": {
      "type": "manga",
      "imageSelectors": [
        "img[class*='PageContainer__Image']"
      ],
      "inValidSrcRegex": [
        "data:image/gif",
        "data:image/png"
      ],
      "loadingStyle": "z-index: 9999;",
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ]
    }
  },
  {
    "id": "shonenjumpplus",
    "matches": [
      "shonenjumpplus.com",
      "viewer.heros-web.com",
      "comic-days.com",
      "www.corocoro.jp",
      "tonarinoyj.jp",
      "rimacomiplus.jp",
      "kuragebunch.com",
      "comic-gardo.com",
      "ichicomi.com",
      "rookie.shonenjump.com"
    ],
    "selectorMatches": [
      "img.page-image.js-page-image"
    ],
    "imageRule.add": {
      "type": "manga",
      "imageSelectors": [
        ".js-page-area canvas[data]",
        "img.page-image.js-page-image",
        "img[class$=\"_page\"]",
        "[class='-cv-page-canvas'] canvas[data]",
        ".link-slot img",
        ".c-viewer__comic img",
        ".c-viewer__comic canvas[data]",
        "img.js-page-image"
      ],
      "urlFetchType": "canvasArgs",
      "opImageType": "append",
      "loadingSelectors": [
        "[data-testid=\"viewer-action-area\"]",
        ".min-h-init-viewer",
        ".js-page-area",
        ".c-viewer__comic",
        "p"
      ],
      "loadingStyle": "z-index: 9999;"
    },
    "injectedCss.add": [
      "[class^='Original_section_title'] {overflow:hidden!important;}"
    ],
    "_comment": "all"
  },
  {
    "id": "comic-top",
    "matches": "comic-top.com",
    "imageRule.add": {
      "type": "manga",
      "imageSelectors": [
        ".page-wrapper img",
        ".reader-area img"
      ],
      "urlFetchType": "img",
      "loadingSelectors": [
        "div"
      ]
    }
  },
  {
    "id": "mangafire",
    "matches": [
      "mangafire.to"
    ],
    "imageRule.add": {
      "type": "manga",
      "imageSelectors": [
        "#page-wrapper img",
        ".reader__page img.reader-img",
        ".swiper-slide-active .reader-img"
      ],
      "inValidSrcRegex": [
        "data:,"
      ]
    }
  },
  {
    "id": "jumptoon",
    "matches": [
      "jumptoon_tiaoman.com",
      "jumptoon.com"
    ],
    "imageRule.add": {
      "type": "manga",
      "imageSelectors": [
        "#viewer-scroller canvas[data]",
        "body canvas[data]"
      ],
      "urlFetchType": "canvasArgs",
      "opImageType": "append",
      "loadingSelectors": [
        "div"
      ],
      "intersectionRootMargin": "0px 0px 200% 0px",
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ]
    }
  },
  {
    "id": "comic-trail",
    "matches": [
      "comic-trail.com"
    ],
    "imageRule.add": {
      "type": "manga",
      "imageSelectors": [
        "p.js-page-area"
      ],
      "urlFetchType": "canvasArgs",
      "opImageType": "append",
      "intersectionRootMargin": "0px 0px 200% 0px",
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "userscript",
        "imtAndroid",
        "imtIOS"
      ]
    }
  },
  {
    "id": "comic-walker",
    "matches": [
      "comic-walker.com"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "[class^='_mainScreen'] canvas[data]"
      ],
      "injectedCss": ".imt-image-status {direction:ltr;}",
      "opImageType": "append",
      "loadingSelectors": [
        "div"
      ]
    }
  },
  {
    "id": "comick",
    "matches": [
      "comick.io",
      "comick.art"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".reader-container div[id*=\"page\"] img",
        ".overflow-auto.select-none > img"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari"
      ]
    }
  },
  {
    "id": "manga18fx",
    "matches": [
      "manga18fx.com",
      "bakamh.ru"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".page-break img"
      ],
      "injectedCss": ".imt-image-status {top:10%!important;}",
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ]
    }
  },
  {
    "id": "manhwa-raw",
    "matches": [
      "manhwa-raw.com",
      "ero18x.com",
      "mangaforfree.com"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".reading-content img"
      ],
      "urlFetchType": "img",
      "loadingSelectors": [
        "div"
      ],
      "intersectionRootMargin": "0px 0px 200% 0px",
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ]
    }
  },
  {
    "id": "managall",
    "matches": [
      "s1.managall.com"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "#viewContent img"
      ],
      "inValidSrcRegex": [
        "data:image/gif"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "safari",
        "imtIOSNew",
        "imtAndroid"
      ]
    }
  },
  {
    "id": "runoob",
    "matches": "www.runoob.com",
    "excludeSelectors.add": [
      ".example_code"
    ]
  },
  {
    "id": "manhwato",
    "matches": [
      "manhwato.com"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".page-chapter img"
      ],
      "loadingSelectors": [
        "div"
      ],
      "injectedCss": ".imt-image-status {top:5%!important;}",
      "intersectionRootMargin": "0px 0px 200% 0px",
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "imtAndroid"
      ]
    }
  },
  {
    "id": "manhwatop",
    "matches": [
      "manhwatop.com"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".page-break img:not(.lazyloading)[src*=\"https://\"]"
      ],
      "loadingSelectors": [
        ".page-break"
      ],
      "inValidSrcRegex": [
        "loading6.svg"
      ],
      "injectedCss": ".imt-image-status {top:5%!important;}",
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "imtAndroid"
      ]
    }
  },
  {
    "id": "pixiv",
    "matches": [
      "www.pixiv.net"
    ],
    "injectedCss": "[id*='expandable-paragraph'] {max-height:unset!important;}",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "[data-page] > img[src]",
        "[dir='vert'] > div > div:first-child img",
        "[dir='vert'] > div > div:nth-child(2) img",
        ".img-wrapper img[class='page']",
        ".work-thumb",
        "[role=\"presentation\"] img",
        ".manga-page img[src*=\"webp\"]",
        ".manga-page .c-relative img[src*=\"jpg\"]",
        ".zoomable-area img",
        ".manga-page img",
        "[class*='style_manga-pages__'] > [class*='style_manga-page__'] > a > img[src]"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtAndroid",
        "imtIOSNew"
      ],
      "loadingSelectors": [
        "[data-page]",
        ".gtm-manga-viewer-open-button",
        "[role=\"presentation\"]",
        "div"
      ],
      "opImageType": "append",
      "inValidSrcRegex": [
        "/100x100/",
        "/user-profile/"
      ]
    },
    "pageLangDetectWeight": {
      "html": 1,
      "body": 4,
      "tab": 1
    },
    "buildContainerSelectors.add": [
      "main"
    ]
  },
  {
    "id": "newtoki341.com",
    "matches": [
      "newtoki_notranslate*.com"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".view-padding p > img",
        ".view-padding div > img",
        ".view-img img"
      ],
      "loadingSelectors": [
        ".view-padding p",
        ".view-img a"
      ],
      "inValidSrcRegex": [
        "loading-image.gif"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox"
      ],
      "intersectionRootMargin": "0px 0px 200% 0px"
    }
  },
  {
    "id": "nicovideo",
    "matches": [
      "seiga.nicovideo.*/watch/mg*"
    ],
    "excludeSelectors.add": [
      ".page"
    ],
    "mutationExcludeSelectors.add": [
      ".stream_comment"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".page .note canvas:first-child",
        ".page .note > img:first-child"
      ],
      "inValidSrcRegex": [
        "placeholder.png"
      ],
      "loadingSelectors": [
        ".note"
      ],
      "opImageType": "append",
      "imageStyle": "position:absolute;z-index:99;width:100%;height:100%;"
    }
  },
  {
    "id": "h5_nicovideo",
    "matches": [
      "sp.*.nicovideo.*/watch/mg*"
    ],
    "mutationExcludeSelectors.add": [
      ".stream_comment"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".react-swipe-container  canvas[data]",
        "[role=\"presentation\"] canvas[data]"
      ],
      "opImageType": "append",
      "inValidSrcRegex": [
        "placeholder.png"
      ],
      "loadingSelectors": [
        "[data-index]",
        "[id]"
      ],
      "imageStyle": "position:absolute;z-index:1;width:100%;height:100%;",
      "disableMarkSelector": ".react-swipe-container",
      "intersectionRootMargin": "0px 0px 200% 0px"
    }
  },
  {
    "id": "writing.com",
    "matches": "writing.com",
    "excludeTags.remove": [
      "PRE"
    ]
  },
  {
    "id": "comic-fuz",
    "matches": [
      "comic-fuz.com"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "opImageType": "append",
      "imageSelectors": [
        "[class*='viewer_wrapper'] img",
        "[class*='InternalViewer_viewer'] img",
        "[class*='InternalViewer_verticalViewer'] img"
      ],
      "loadingSelectors": [
        "[data-testid=\"placeholder\"]"
      ],
      "loadingStyle": "z-index: 9999;",
      "inValidSrcRegex": [
        ".svg"
      ]
    },
    "_comment": "all"
  },
  {
    "id": "mangadex",
    "matches": [
      "mangadex.org"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "[class*='reader-pages'] img",
        "img[class*='img sp limit-width limit-height mx-auto']"
      ],
      "loadingSelectors": [
        "div"
      ],
      "intersectionRootMargin": "0px 0px 200% 0px"
    },
    "_comment": "all"
  },
  {
    "id": "atsu-moe",
    "matches": "atsu.moe/read/*",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "img[src*='/static/pages/']"
      ],
      "intersectionRootMargin": "0px 0px 200% 0px",
      "platforms": [
        "other",
        "chrome",
        "imtIOSNew",
        "imtAndroid",
        "safari"
      ]
    }
  },
  {
    "id": "kuaikanmanhua",
    "matches": [
      "*.kuaikanmanhua_notranslate.com",
      "www.kuaikanmanhua.com"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".img-box img",
        ".comic-pics img"
      ],
      "inValidSrcRegex": [
        "^data:image/gif;",
        "/image/141224/90rfivtqc\\.jpg-t\\.w1280\\.jpg\\.h(?:\\?|$)"
      ],
      "loadingSelectors": [
        "div"
      ],
      "intersectionRootMargin": "0px 0px 200% 0px"
    }
  },
  {
    "id": "sexkomix2",
    "matches": [
      "sexkomix2.com"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".fancybox img"
      ],
      "loadingSelectors": [
        "li"
      ]
    }
  },
  {
    "id": "mangapark",
    "matches": [
      "mangapark.net",
      "mangapark.to",
      "mangapark.org"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "div[data-name='image-show'] img"
      ],
      "injectedCss": ".imt-image-status {top:5%!important;}",
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ]
    }
  },
  {
    "id": "templetoons",
    "matches": [
      "templetoons.com"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "img[alt^='Chapter']"
      ],
      "injectedCss": ".imt-image-status {top:5%!important;}",
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari"
      ]
    }
  },
  {
    "id": "poipiku",
    "matches": [
      "poipiku.com"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".IllustItemThumb img"
      ],
      "loadingSelectors": [
        ".IllustItemThumb"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ]
    }
  },
  {
    "id": "batocomic",
    "matches": [
      "batocomic.net",
      "zbato.org"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "div[name='image-item'] img",
        "div[class*='item'] img"
      ],
      "loadingSelectors": [
        "div"
      ],
      "injectedCss": ".imt-image-status {z-index:999 !important;}",
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ]
    }
  },
  {
    "id": "mangasuika",
    "matches": [
      "www.mangasuika.com"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".box_doc img"
      ],
      "injectedCss": ".imt-loading {z-index:999 !important;}",
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari"
      ]
    }
  },
  {
    "id": "firemanga",
    "matches": [
      "www.firemanga.com"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".imageChap img"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari"
      ]
    }
  },
  {
    "id": "lmanga",
    "matches": [
      "www.lmanga.com"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".ng-scope img"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari"
      ]
    }
  },
  {
    "id": "ganma",
    "matches": [
      "share.ganma.jp",
      "ganma.jp"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "div[data-testid*=\"ReaderFrameForHorizontal\"] div.flex.flex-row-reverse div img",
        "div > img"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari"
      ]
    }
  },
  {
    "id": "manhwahub",
    "matches": [
      "manhwahub.net",
      "manhuatop.org",
      "aedexnox.vxviral.xyz"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".page-break img"
      ],
      "injectedCss": ".imt-image-status {top:10%!important;}",
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ]
    }
  },
  {
    "id": "hentaizap",
    "matches": [
      "hentaizap.com"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "opImageType": "insertFirst",
      "imageSelectors": [
        ".fw_img img#fimg:first-of-type"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari"
      ]
    }
  },
  {
    "id": "younganimal",
    "matches": [
      "younganimal.com"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "opImageType": "insertFirst",
      "imageSelectors": [
        "#xCVPages img",
        "#xCVPages canvas[data]"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtIOS"
      ]
    }
  },
  {
    "id": "bilibili-manga",
    "matches": [
      "manga.bilibili.com"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "opImageType": "insertFirst",
      "imageSelectors": [
        ".image-container canvas[data]",
        "canvas#aniber-reader.aniber-reader-stage"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari"
      ]
    }
  },
  {
    "id": "comic-growl",
    "matches": [
      "comic-growl.com"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "urlFetchType": "canvasArgs",
      "opImageType": "append",
      "imageSelectors": [
        ".-cv-page-content img",
        ".-cv-page-content canvas[data]"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ]
    }
  },
  {
    "id": "manhuabika",
    "matches": [
      "manhuabika.com"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "#chapter-images-id img[class*=\"lazyloaded\"]",
        "img.vw-image"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari"
      ]
    }
  },
  {
    "id": "comic-action",
    "matches": [
      "comic-action.com"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "opImageType": "append",
      "imageSelectors": [
        "canvas.page-image"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ]
    }
  },
  {
    "id": "animatebookstore",
    "matches": [
      "www.animatebookstore.com"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "opImageType": "append",
      "urlFetchType": "canvasArgs",
      "imageSelectors": [
        ".view-sheet-container canvas[data]",
        ".viewport canvas[data]"
      ],
      "loadingStyle": "z-index: 9999;",
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari"
      ]
    }
  },
  {
    "id": "hanime1",
    "matches": [
      "hanime1.me"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "#comic-content-wrapper img"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari"
      ]
    }
  },
  {
    "id": "rawotaku",
    "matches": [
      "rawotaku.com"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".iv-card.loader.shuffled.active img",
        ".iv-card.loader.shuffled img"
      ],
      "loadingStyle": "z-index: 9999;",
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ]
    }
  },
  {
    "id": "pixiv.app",
    "matches": [
      "pixiv.app"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".relative > img[data-nimg]"
      ]
    },
    "platforms": [
      "chrome",
      "firefox",
      "safari",
      "imtAndroid",
      "imtIOSNew"
    ]
  },
  {
    "id": "speed-manga",
    "matches": [
      "speed-manga.com"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "#readerarea img"
      ],
      "intersectionRootMargin": "0px 0px 200% 0px",
      "inValidSrcRegex": [
        ".svg"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ]
    }
  },
  {
    "id": "cmoa",
    "matches": [
      "booklive.jp",
      "www.yomonga.com",
      "www.cmoa.jp"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".pt-img img",
        ".slick-slide img",
        "img[id*='r-bannerImg-after_viewer']"
      ],
      "enableImageSrcObserver": true
    },
    "platforms": [
      "chrome",
      "firefox",
      "safari",
      "imtAndroid",
      "imtIOSNew"
    ],
    "_comment": "www.cmoa.jp 这个站点适配有点问题"
  },
  {
    "id": "televikun-super-hero-comics",
    "matches": "televikun-super-hero-comics.com",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".pt-img img"
      ],
      "enableImageSrcObserver": true,
      "platforms": [
        "other",
        "chrome",
        "safari",
        "imtAndroid",
        "imtIOSNew"
      ]
    }
  },
  {
    "id": "global.manga",
    "matches": "global.manga-up.com",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "[class*='page_container'] img"
      ],
      "loadingStyle": "z-index: 9999;"
    },
    "platforms": [
      "chrome",
      "firefox",
      "safari",
      "imtAndroid",
      "imtIOSNew"
    ]
  },
  {
    "id": "mangaball",
    "matches": "mangaball.net",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "#mangaPages img"
      ],
      "inValidSrcRegex": [
        "data:image/svg"
      ],
      "loadingStyle": "top: 10%"
    },
    "platforms": [
      "chrome",
      "firefox",
      "safari",
      "imtAndroid",
      "imtIOSNew"
    ]
  },
  {
    "id": "mangadna",
    "matches": "mangadna.com",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".read-content img.loading.myx01[data-src][alt*=' Page ']"
      ],
      "loadingSelectors": [
        "div"
      ],
      "intersectionRootMargin": "0px 0px 200% 0px"
    },
    "platforms": [
      "chrome",
      "safari",
      "imtAndroid",
      "imtIOSNew"
    ]
  },
  {
    "id": "yanmaga.jp",
    "matches": [
      "yanmaga.jp",
      "viewer.bookhodai.jp"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".pt-img img",
        ".slick-slide img",
        "img[id*='r-bannerImg-after_viewer']"
      ]
    },
    "platforms": [
      "chrome",
      "firefox",
      "safari",
      "imtAndroid",
      "imtIOSNew"
    ]
  },
  {
    "id": "tkr-manga",
    "matches": [
      "tkr*.com"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "#tnimg img",
        "div#tnimg img.lazyload-img"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari"
      ]
    }
  },
  {
    "id": "mgread.io",
    "matches": [
      "mgread.io"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "div#chapter-content img"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari"
      ]
    }
  },
  {
    "id": "manhwa18.com",
    "matches": [
      "manhwa18.com"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "div#chapter-content img[data-src]"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari"
      ]
    }
  },
  {
    "id": "play.comipo.app",
    "matches": [
      "play.comipo.app"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "div[data-testid*=\"placeholder\"] > img",
        "div[class*=\"_placeholder_\"] > img[class*=\"_page_\"]"
      ],
      "loadingStyle": "z-index: 9999;",
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ]
    }
  },
  {
    "id": "mangafreak",
    "matches": [
      "ww2.mangafreak.me"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "img#gohere"
      ],
      "loadingStyle": "z-index: 9999;",
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ]
    }
  },
  {
    "id": "page.kakao",
    "matches": [
      "page.kakao.com"
    ],
    "shadowRootSelectors": [
      "div[style^='visibility: visible'"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".image-container img[loading='lazy']"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ]
    }
  },
  {
    "id": "frontendmasters",
    "matches": [
      "frontendmasters.com"
    ],
    "excludeSelectors.add": [
      ".vjs-text-track-display"
    ],
    "mutationExcludeSelectors.add": [
      ".vjs-text-track-display *"
    ],
    "subtitleRule.add": {
      "type": "webvtt",
      "subtitleUrlRegExp": ".vtt$",
      "loadingContainerSelector": ".vjs-text-track-display",
      "injectedCss": [
        "#immersive-translate-quick-button-container,.immersive-translate-quick-button-container { order: 2; position: absolute; right: 0; bottom: 35%; } .imt-quick-subtitle-pop-content {z-index: 2147483647}"
      ],
      "quickButtonRule": {
        "appendSelector": ".vjs-control-bar",
        "injectCSS": ".imt-quick-subtitle-pop-content { max-height: 150px !important; }"
      },
      "videoSelector": ".PromoPlayer video"
    }
  },
  {
    "id": "udacity",
    "matches": [
      "*.udacity.com"
    ],
    "excludeSelectors.add": [
      ".vjs-text-track-display"
    ],
    "mutationExcludeSelectors.add": [
      ".vjs-text-track-display *"
    ],
    "subtitleRule.add": {
      "type": "webvtt",
      "subtitleUrlRegExp": ".vtt$",
      "loadingContainerSelector": ".vjs-text-track-display"
    }
  },
  {
    "id": "skillshare",
    "matches": [
      "www.skillshare.com"
    ],
    "excludeSelectors.add": [
      ".vjs-text-track-display"
    ],
    "mutationExcludeSelectors.add": [
      ".vjs-text-track-display *"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "subtitleUrlRegExp": "\\.vtt\\?",
      "loadingContainerSelector": ".vjs-text-track-display",
      "injectedCss": [
        "#immersive-translate-quick-button-container,.immersive-translate-quick-button-container {order: 13}"
      ],
      "quickButtonRule": {
        "appendSelector": ".vjs-control-bar",
        "insertBeforeSelector": ".vjs-volume-panel",
        "injectCSS": " .label { display: none; } .imt-quick-subtitle-pop-content {transform: translateX(43%); right: 0; z-index: 2147483647 } ",
        "injectCSS.add_v.[1.32.3]": ".label { display: none; } .imt-quick-subtitle-pop-content {z-index: 2147483647;}"
      },
      "attachRule": {
        "appendSelector": "div[id^='vjs_video']",
        "injectedGlobalCSS": [
          ".vjs-text-track-display { display: none !important; }"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "tubitv",
    "matches": [
      "tubitv.com"
    ],
    "excludeSelectors.add": [
      ".vjs-text-track-display"
    ],
    "mutationExcludeSelectors.add": [
      ".vjs-text-track-display *"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "subtitleUrlRegExp": "\\.srt(?:$|[?#])",
      "hookType": "fetch|xhr",
      "loadingContainerSelector": "div[data-id=\"hls\"]",
      "quickButtonRule": {
        "appendSelector": ".T8nOy",
        "insertBeforeSelector": "#languageArea"
      },
      "attachRule": {
        "appendSelector": "div[data-id=\"hls\"]",
        "injectedGlobalCSS": [
          "div[data-id=\"captionsComponent\"] { display: none !important; }"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "iaabcfoundation",
    "matches": [
      "learning.iaabcfoundation.org"
    ],
    "excludeSelectors.add": [
      "[data-testid=\"video-player\"]"
    ],
    "mutationExcludeSelectors.add": [
      "[data-testid=\"video-player\"] *"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "subtitleUrlRegExp": "\\.srt$",
      "hookType": "xhr",
      "loadingContainerSelector": ".videoWrapper",
      "injectedCss": [
        "#immersive-translate-quick-button-container,.immersive-translate-quick-button-container{ position: absolute; top: -30px; right: 0; }"
      ],
      "enableHookDownload": true,
      "quickButtonRule": {
        "appendSelector": ".jw-controlbar-right-group",
        "injectCSS": ".label { display: none; }"
      }
    }
  },
  {
    "id": "domestika",
    "matches": [
      "www.domestika.org"
    ],
    "excludeSelectors.add": [
      ".vjs-text-track-display"
    ],
    "mutationExcludeSelectors.add": [
      ".vjs-text-track-display *"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "enableHookDownload": true,
      "subtitleUrlRegExp": ".*subtitles.*\\.vtt",
      "videoPlayerSelector": "video",
      "quickButtonRule": {
        "appendSelector": ".controlBar-wrapper .right-wrapper",
        "insertBeforeSelector": ".vjs-volume-panel"
      }
    }
  },
  {
    "id": "svtplay",
    "matches": [
      "www.svtplay.se"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "subtitleUrlRegExp": ".*\\.vtt",
      "videoPlayerSelector": "video",
      "loadingContainerSelector": "[data-rt=\"video-player-container\"]",
      "quickButtonRule": {
        "appendSelector": "[class^='_ui-container__right']",
        "insertBeforeSelector": "[data-testid=\"volume-control\"]"
      },
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] #immersive-translate-caption-window {direction: rtl;}"
      ],
      "attachRule": {
        "appendSelector": "[data-rt=\"video-player-container\"]",
        "injectedGlobalCSS": [
          "[class^='_video-player__text-tracks'] {display: none !important; }",
          "[data-rt=\"subtitles-container\"] {display: none !important; }"
        ],
        "injectedCSS": [
          ".imt-caption-window {bottom: 60px;}",
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "unity-learn",
    "matches": [
      "learn.unity.com"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "subtitleUrlRegExp": "\\.vtt$",
      "videoPlayerSelector": "video",
      "quickButtonRule": {
        "appendSelector": ".vjs-control-bar",
        "insertBeforeSelector": "div.vjs-subs-caps-button"
      }
    }
  },
  {
    "id": "hbogo",
    "matches": [
      "www.hbogoasia.*"
    ],
    "subtitleRule.add": {
      "type": "text_track_dynamic",
      "videoPlayerSelector": "video",
      "loadingContainerSelector": ".shakaplayer-container",
      "quickButtonRule": {
        "appendSelector": ".control_buttons_right",
        "insertBeforeSelector": ".control_buttons_volume"
      }
    }
  },
  {
    "id": "barrons",
    "matches": "www.barrons.com",
    "extraInlineSelectors.add": [
      "article p span"
    ],
    "injectedCss.add": [
      "font.immersive-translate-target-wrapper > br {display:none;}"
    ]
  },
  {
    "id": "scrimba",
    "matches": "scrimba.com",
    "injectedCss": [
      "[class*='trunc'] {-webkit-line-clamp: unset !important;}",
      ".tile {overflow: scroll;}"
    ]
  },
  {
    "id": "video-barrons",
    "matches": [
      "video-api.wsj.com"
    ],
    "subtitleRule.add": {
      "type": "text_track",
      "videoPlayerSelector": "video",
      "loadingContainerSelector": "#wrapper-videoplayer",
      "quickButtonRule": {
        "appendSelector": "#video-controls-videoplayer",
        "insertBeforeSelector": "#video-cc-videoplayer"
      }
    }
  },
  {
    "id": "hbomax",
    "matches": [
      "play.max.com",
      "play.hbomax.com"
    ],
    "excludeSelectors.add": [
      "[data-testid='playerContainer']",
      "[data-testid='CueBoxContainer']"
    ],
    "mutationExcludeSelectors.add": [
      "[data-testid='playerContainer'] *",
      "[data-testid='CueBoxContainer'] *"
    ],
    "subtitleRule.add": {
      "type": "webvtt",
      "enableHookDownload": true,
      "subtitleUrlRegExp": "\\.vtt",
      "injectedCss": [
        "#immersive-translate-quick-button-container,.immersive-translate-quick-button-container {max-height: 60px}"
      ],
      "quickButtonRule": {
        "appendSelector": "[data-testid=\"playback_controls\"] [class*=\"ControlsFooterBottomRight\"]"
      }
    },
    "_comment": "自托管会导致时间轴对应不上"
  },
  {
    "id": "mindvalley",
    "matches": [
      "home.mindvalley.com"
    ],
    "excludeSelectors.add": [
      ".vjs-text-track-display"
    ],
    "mutationExcludeSelectors.add": [
      ".vjs-text-track-display *"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "subtitleUrlRegExp": "\\.webvtt$",
      "loadingContainerSelector": ".vjs-text-track-display",
      "injectedCss": [
        "#immersive-translate-quick-button-container,.immersive-translate-quick-button-container {order: 6}"
      ],
      "quickButtonRule": {
        "appendSelector": "[data-testid=\"video-section\"]  .vjs-control-bar",
        "insertBeforeSelector": "[data-testid=\"video-section\"] .vjs-volume-panel",
        "injectCSS": ".imt-quick-subtitle-pop-content { z-index: 999999; max-height: 150px !important; }"
      },
      "videoSelector": "div[id^='mv-video-item-'] > video",
      "attachRule": {
        "appendSelector": ".mv-video-item",
        "injectedGlobalCSS": [
          ".vjs-text-track-display { display: none; }"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "viki",
    "matches": [
      "www.viki.com"
    ],
    "excludeSelectors.add": [
      ".vjs-text-track-display"
    ],
    "mutationExcludeSelectors.add": [
      ".vjs-text-track-display *"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "subtitleUrlRegExp": "auth_subtitles.*\\.vtt",
      "loadingContainerSelector": "[data-testid=\"vmplayer\"]",
      "quickButtonRule": {
        "appendSelector": ".vmp-right-control",
        "insertBeforeSelector": ".vmp-right-control .vmp-player-settings"
      },
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] #immersive-translate-caption-window {direction: rtl;}"
      ],
      "attachRule": {
        "appendSelector": "[data-testid=\"vmplayer\"]",
        "injectedCSS": [
          ".imt-caption-window {margin-bottom: 0; bottom: 7%;}",
          ".imt-caption-window {width: 90%;}"
        ],
        "injectedGlobalCSS": [
          ".vjs-text-track-display {display: none;}",
          "@media (min-width: 576px) { video::cue {opacity: 0} }"
        ]
      }
    }
  },
  {
    "id": "masterclass",
    "matches": [
      "www.masterclass.com",
      "learn.microsoft.com"
    ],
    "excludeSelectors.add": [
      ".mc-video--text-track"
    ],
    "mutationExcludeSelectors.add": [
      ".mc-video--text-track *"
    ],
    "subtitleRule.add": {
      "type": "text_track_dynamic",
      "videoPlayerSelector": "video",
      "loadingContainerSelector": ".vjs-text-track-display",
      "quickButtonRule": {
        "appendSelector": ".mc-video__controls"
      }
    },
    "subtitleRule.add_v.[1.12.1]": {
      "enableHookDownload": true
    }
  },
  {
    "id": "slideslive",
    "matches": [
      "slideslive.com"
    ],
    "excludeSelectors.add": [
      ".slp__video"
    ],
    "mutationExcludeSelectors.add": [
      ".slp__video *"
    ],
    "subtitleRule.add": {
      "type": "text_track",
      "videoPlayerSelector": ".slp__video video",
      "allowHideModeTextTrack": true,
      "loadingContainerSelector": ".slp__videoPlayer__content",
      "quickButtonRule": {
        "appendSelector": ".slp__videoControls__right",
        "insertBeforeSelector": ".slp__videoControls__right > button.slp__button--playerSettings",
        "injectCSS": ".imt-quick-subtitle-pop-content { max-height: none !important; }"
      },
      "injectedCss": [
        "#immersive-translate-quick-button-container,.immersive-translate-quick-button-container { display: inline-block; height: 100%; }"
      ],
      "attachRule": {
        "appendSelector": ".slp__video",
        "injectedCSS": [
          ".imt-caption-window { width: 90%; }"
        ],
        "injectedGlobalCSS": [
          ".slp__subtitles { display: none !important; }"
        ]
      }
    }
  },
  {
    "id": "viu",
    "matches": [
      "www.viu.com"
    ],
    "excludeSelectors.add": [
      ".bmpui-ui-viu-subtitle-overlay"
    ],
    "mutationExcludeSelectors.add": [
      ".bmpui-ui-viu-subtitle-overlay *"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "hookType": "xhr",
      "subtitleUrlRegExp": "https?://(?:[^/]+\\.cloudfront\\.net/[^/]+/[^/]+|ott-resources\\.viu\\.com/[A-Za-z0-9]+)(?:[/?#]|$)",
      "loadingContainerSelector": ".bmpui-container-wrapper",
      "loadingStyle": "bottom: 20%;",
      "injectedCss": [
        ".bmpui-controls-hidden #immersive-translate-quick-button-container { display: none; }"
      ],
      "quickButtonRule": {
        "appendSelector": ".bmpui-ui-container.bmpui-ui-viu-subtitle > .bmpui-container-wrapper",
        "injectCSS": ".imt-quick-subtitle-button {margin-bottom: 8px}"
      },
      "attachRule": {
        "appendSelector": ".bmpui-ui-viu-subtitle-overlay",
        "injectedGlobalCSS": [
          ".bmpui-ui-viu-subtitle-overlay > .bmpui-container-wrapper { display: none !important; }"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "linkin",
    "matches": "*.linkedin.com",
    "excludeSelectors.add": [
      ".vjs-text-track-display"
    ],
    "mutationExcludeSelectors.add": [
      ".vjs-text-track-display *"
    ],
    "injectedCss.add": [
      ".linked-area *,.e2049567 {max-height: unset !important;-webkit-line-clamp:unset;}"
    ],
    "mutationConfig.add": {
      "paragraphStableWindow": false
    },
    "subtitleRule.add": {
      "type": "webvtt",
      "subtitleUrlRegExp": "/.*ambry/\\?x-li-ambry-ep=.*|.*video-captions-webvtt.*/",
      "hookType": "xhr",
      "loadingContainerSelector": ".video-player-container",
      "quickButtonRule": {
        "appendSelector": ".classroom-layout__media .vjs-control-bar",
        "insertBeforeSelector": ".vjs-captions-menu-toggle"
      }
    }
  },
  {
    "id": "common-stable",
    "matches": [
      "isc2.learnzapp.com"
    ],
    "mutationConfig.add": {
      "paragraphStableWindow": false
    }
  },
  {
    "id": "kanopy",
    "matches": "*.kanopy.com",
    "excludeSelectors.add": [
      ".vjs-text-track-display"
    ],
    "mutationExcludeSelectors.add": [
      ".vjs-text-track-display *"
    ],
    "subtitleRule.add": {
      "type": "webvtt",
      "subtitleUrlRegExp": ".*captioncache/webvtt.*",
      "hookType": "xhr",
      "loadingContainerSelector": ".video-player-container",
      "injectedCss": [
        "#immersive-translate-quick-button-container,.immersive-translate-quick-button-container{height: 40px;display: flex;align-items: center;align-self: flex-end;}"
      ],
      "quickButtonRule": {
        "appendSelector": ".vjs-control-bar",
        "insertBeforeSelector": ".vjs-caption-control"
      }
    }
  },
  {
    "id": "iflix",
    "matches": [
      "www.iflix.com",
      "wetv.vip"
    ],
    "excludeSelectors.add": [
      ".text-track"
    ],
    "mutationExcludeSelectors.add": [
      ".player-wrapper *"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "subtitleUrlRegExp": "\\.vtt",
      "hookType": "xhr",
      "loadingContainerSelector": "#player-wrapper",
      "loadingStyle": "bottom: 18%;",
      "quickButtonRule": {
        "appendSelector": "[data-role=\"wetv-ctrlbar-right\"]",
        "insertBeforeSelector": "[data-role=\"wetv-player-definition\"]"
      },
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] #immersive-translate-caption-window {direction: rtl;}"
      ],
      "attachRule": {
        "appendSelector": "#player-wrapper",
        "injectedGlobalCSS": [
          ".text-track { display: none !important; }"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "app.rapidlaunch.wtf",
    "matches": "app.rapidlaunch.wtf",
    "excludeSelectors.add": [
      "div.border-b.border-gray-700\\/50.flex",
      "a.text-blue-400",
      ".flex.items-center.text-xs.text-gray-400",
      ".flex.items-center.gap-1\\.5.mb-1"
    ],
    "injectedCss": [
      ".max-h-24 { max-height: unset !important; }",
      ".line-clamp-2 {-webkit-line-clamp: unset !important;}"
    ]
  },
  {
    "id": "letsjelly",
    "matches": "app.letsjelly.com",
    "aiWriting.add": {
      "scene": "email",
      "appendSelector": ".reply-button-container",
      "insertBeforeSelector": "",
      "titleSelector": ".h1-subject-button",
      "contentSelector": "",
      "commentSelector": ".conversation-list .message.seen",
      "insertInputSelector": "#ts_responder .squire-editor",
      "injectCSS": ".immersive-translate-ai-writing-button {border-radius: 20px; padding: 10px 20px;}"
    },
    "selectors": [
      ".message-content",
      ".h1-subject-button",
      ".cil-subject",
      ".cil-body-wrapper",
      ".text-body"
    ],
    "inputConfig.add": {
      "autoLanguageSelectors": [
        ".html-body -> .message-content"
      ]
    }
  },
  {
    "id": "imdb",
    "matches": [
      "www.imdb.com",
      "m.imdb.com"
    ],
    "excludeSelectors.add": [
      ".jw-text-track-container"
    ],
    "mutationExcludeSelectors.add": [
      ".jw-text-track-container *"
    ],
    "injectedCss.add": [
      "[class*=overflow] {max-height:unset!important;}"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "subtitleUrlRegExp": "\\.srt$",
      "loadingContainerSelector": "#imdbnext-vp-jw-single",
      "quickButtonRule": {
        "appendSelector": ".jw-reset.jw-button-container",
        "insertBeforeSelector": "[button=\"ttt-button\"]"
      },
      "attachRule": {
        "appendSelector": "#imdbnext-vp-jw-single",
        "injectedGlobalCSS": [
          ".jw-text-track-display { display: none !important; }"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "itv",
    "matches": [
      "*.itv.com"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "subsrtFormat": "vtt",
      "subtitleUrlRegExp": ".vtt$",
      "videoPlayerSelector": "[data-testid=video-wrapper] video",
      "quickButtonRule": {
        "appendSelector": ".fe-mrphs__controlsWrapperBottom .fe-mrphs__controls > div:last-child",
        "insertBeforeSelector": ".fe-mrphs__subtitlesButton"
      },
      "attachRule": {
        "appendSelector": "[data-testid=vod-player]",
        "injectedGlobalCSS": [
          ".fe-mrphs__subtitles {display: none !important;}"
        ],
        "injectedCSS": [
          ".imt-caption-window {margin-bottom: 0; bottom: 7%;}",
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "vk.com",
    "matches": [
      "vk.com/video*"
    ],
    "subtitleRule.add": {
      "type": "text_track",
      "videoPlayerSelector": ".videoplayer_media_provider",
      "loadingContainerSelector": "#video_player",
      "quickButtonRule": {
        "appendSelector": ".videoplayer_controls",
        "insertBeforeSelector": ".videoplayer_btn_subtitles"
      }
    }
  },
  {
    "id": "egghead",
    "matches": [
      "egghead.io"
    ],
    "subtitleRule.add": {
      "type": "text_track",
      "videoPlayerSelector": ".cueplayer-react-video",
      "loadingContainerSelector": ".cueplayer-react-video-holder",
      "loadingStyle": "bottom: unset; top: 5%;",
      "quickButtonRule": {
        "appendSelector": ".cueplayer-react-control-bar-right-part",
        "insertBeforeSelector": ".cueplayer-react-closed-caption"
      }
    }
  },
  {
    "id": "coursera1",
    "selectorMatches": [
      ".rc-MetatagsWrapper .rc-VLPContainerWrapperCds"
    ],
    "subtitleRule.add": {
      "type": "text_track",
      "videoPlayerSelector": ".vjs-tech",
      "loadingContainerSelector": ".rc-VideoControlsContainer",
      "loadingStyle": "bottom: unset; top: 5%;",
      "quickButtonRule": {
        "appendSelector": ".vjs-control-bar",
        "injectCSS": ".imt-quick-subtitle-button { font-size: 12px;margin:0 12px 0 0!important;} .logo,.logo svg { height: 18px !important; width: 18px !important;}"
      },
      "enableIOSFullScreenTextTrack": false,
      "attachRule": {
        "appendSelector": "[data-e2e='vlp-video-player']",
        "injectedGlobalCSS": [
          "video::cue {opacity: 0}"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "coursera2",
    "selectorMatches": [
      ".rc-MetatagsWrapper .rc-Course"
    ],
    "subtitleRule.add": {
      "type": "text_track",
      "videoPlayerSelector": "[data-testid=playerContainer] video",
      "loadingContainerSelector": ".rc-VideoControlsContainer",
      "loadingStyle": "bottom: unset; top: 5%;",
      "quickButtonRule": {
        "appendSelector": ".icon-container",
        "injectCSS": ".imt-quick-subtitle-button { font-size: 12px;margin:0!important;} .logo,.logo svg { height: 18px !important; width: 18px !important;}"
      },
      "enableIOSFullScreenTextTrack": false,
      "attachRule": {
        "appendSelector": "[data-testid=playerContainer]",
        "injectedGlobalCSS": [
          "video::cue {opacity: 0}"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "whop",
    "matches": [
      "courses.apps.whop.com"
    ],
    "selectorMatches": [
      "mux-player"
    ],
    "subtitleRule.add": {
      "type": "text_track_dynamic",
      "videoPlayerSelector": "mux-player -> mux-video -> video",
      "quickButtonRule": {
        "appendSelector": "mux-player -> media-theme -> media-control-bar[part='control-bar bottom']",
        "injectCSS": ".imt-quick-subtitle-pop-content {right: 92px !important; min-height: 75px} .logo,.logo svg { height: 18px !important; width: 18px !important;}",
        "injectCSS.add_v.[1.32.3]": ".imt-quick-subtitle-pop-content {min-height: 75px} .logo,.logo svg { height: 18px !important; width: 18px !important;}"
      },
      "enableIOSFullScreenTextTrack": false
    }
  },
  {
    "id": "servicenow",
    "matches": [
      "www.servicenow.com"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "subtitleUrlRegExp": "\\.vtt",
      "videoPlayerSelector": ".vjs-tech",
      "loadingContainerSelector": ".arc-video-player",
      "quickButtonRule": {
        "appendSelector": ".vjs-control-bar",
        "insertBeforeSelector": ".vjs-subs-caps-button"
      }
    },
    "_comment": "shadowrott 字幕样式什么的似乎不好插入"
  },
  {
    "id": "foxnews-video",
    "matches": [
      "https://static.foxnews.com/static/orion/html/video/iframe/vod.html*"
    ],
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "domCheckTimeout": 1,
    "excludeSelectors.add": [
      "#player"
    ],
    "mutationExcludeSelectors.add": [
      "#player *"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "subsrtFormat": "vtt",
      "subtitleUrlRegExp": "media/v1/text/vtt/.*/text\\.vtt(?:$|[?#])",
      "hookType": "fetch|xhr",
      "loadingContainerSelector": ".amp-captioning",
      "enableHookDownload": true,
      "quickButtonRule": {
        "appendSelector": ".amp-controls",
        "insertBeforeSelector": ".amp-settings",
        "ccEnableSelector": ".amp-cc",
        "injectCSS": ".label { display: none; } .logo,.logo svg { width: 18px !important; height: 18px !important; } .imt-quick-subtitle-button { margin: 0 6px; }"
      }
    }
  },
  {
    "id": "quark",
    "matches": [
      "pan.quark.*"
    ],
    "excludeSelectors.add": [
      ".video-container"
    ],
    "mutationExcludeSelectors.add": [
      ".video-container *"
    ],
    "subtitleRule.add": {
      "type": "text_track",
      "videoPlayerSelector": "video",
      "loadingContainerSelector": ".video-container",
      "quickButtonRule": {
        "appendSelector": "[class^=\"Toolbar--foot-toolba-box\"]"
      }
    }
  },
  {
    "id": "kika",
    "matches": [
      "www.kika.de"
    ],
    "subtitleRule.add": {
      "type": "text_track",
      "videoPlayerSelector": "video",
      "loadingContainerSelector": ".ardplayer-viewport",
      "loadingStyle": "bottom: unset; top: 5%; height: unset;",
      "quickButtonRule": {
        "appendSelector": ".ardplayer-button-big .ardplayer-addons-container",
        "insertBeforeSelector": ".ardplayer-button-big .ardplayer-icon-sharing",
        "injectCSS": ".label { display: none; } .logo,svg {height: 32px !important; width: 32px !important;}"
      }
    }
  },
  {
    "id": "ocrtraining",
    "matches": [
      "ocrtraining.cit.nih.gov",
      "videocast.nih.gov"
    ],
    "excludeSelectors.add": [
      "#videocastPlayer"
    ],
    "mutationExcludeSelectors.add": [
      "#videocastPlayer *"
    ],
    "subtitleRule.add": {
      "type": "webvtt",
      "subtitleUrlRegExp": "\\.srt$",
      "loadingContainerSelector": "#videocastPlayer"
    }
  },
  {
    "id": "espn",
    "matches": [
      "*.espn.com"
    ],
    "mainFrameMinTextCount": 0,
    "excludeSelectors.add": [
      "#fittPageContainer"
    ],
    "mutationExcludeSelectors.add": [
      "#fittPageContainer *"
    ],
    "subtitleRule.add": {
      "type": "webvtt",
      "subtitleUrlRegExp": "\\.vtt$",
      "injectedCss": [
        "#immersive-translate-quick-button-container,.immersive-translate-quick-button-container{margin-top:16px;}",
        ".vjs-text-track-display > div >div {font:unset!important;}"
      ],
      "quickButtonRule": {
        "appendSelector": ".vjs-control-bar",
        "insertBeforeSelector": ".vjs-captions-button"
      }
    }
  },
  {
    "id": "anthropic-course",
    "matches": "anthropic.skilljar.com",
    "excludeSelectors.add": [
      ".section-container.tabs > section > .title"
    ],
    "injectedCss.add": [
      ".lesson-modular {height:unset;}",
      "#curriculum-list .lesson-modular {height:auto!important;}",
      "#curriculum-list .lesson-modular .lesson-row {height:auto!important;width:100%;}",
      "#curriculum-list .lesson-modular .title {position:static!important;height:auto!important;width:auto!important;white-space:normal!important;margin-left:44px;}"
    ],
    "subtitleRule.add": {
      "type": "multi_attach_vtt",
      "subtitleUrlRegExp": ".*\\.srt",
      "quickButtonRule": {
        "appendSelector": ".jw-button-container",
        "insertBeforeSelector": ".jw-icon-cc"
      },
      "activeLangSelector": ".jw-settings-submenu-captions .jw-settings-submenu-items .jw-settings-item-active",
      "videoSelector": "video",
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] #immersive-translate-caption-window {direction: rtl;}"
      ],
      "attachRule": {
        "appendSelector": ".jw-wrapper",
        "injectedGlobalCSS": [
          ".jw-text-track-container {display: none;}",
          "@media (min-width: 576px) { video::cue {opacity: 0} }"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      },
      "multiSetting": {
        "activeLangSelector": ".jw-settings-submenu-captions .jw-settings-submenu-items .jw-settings-item-active"
      }
    }
  },
  {
    "id": "orchestraltools",
    "matches": "www.orchestraltools.com",
    "injectedCss": ".immersive-translate-target-wrapper *, .immersive-translate-target-wrapper {font-size: inherit !important;}"
  },
  {
    "id": "bank",
    "matches": [
      "xfb.nbcb.com.cn"
    ],
    "extraBlockSelectors.add": [
      ".ibm, .ibt",
      ".cell-box",
      "[role=tab]"
    ]
  },
  {
    "id": "fmoviesz",
    "matches": [
      "fmovies24.to",
      "*.fmovies.co",
      "vidplay.online",
      "c8365730d4.nl",
      "kerapoxy.cc",
      "vid41c.site",
      "https://*/*sub.info=*fmovies24.to*",
      "https://*/*sub.info=*bflixhd.to*",
      "mcloud.vvid30c.site",
      "rabbitstream.net",
      "kerolaunochan.*",
      "megacloud.*",
      "netusa.xyz",
      "cdnstreame.net",
      "9animetv.to",
      "hianime.to",
      "videostr.net",
      "anthropic.skilljar.com",
      "streameeeeee.site"
    ],
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "domCheckTimeout": 1,
    "excludeSelectors.add": [
      ".jw-wrapper",
      "#immersive-translate-caption-window"
    ],
    "mutationExcludeSelectors.add": [
      ".jw-wrapper *",
      "#immersive-translate-caption-window *"
    ],
    "subtitleRule.add": {
      "type": "multi_attach_vtt",
      "subtitleUrlRegExp": "^(?!.*sprite\\.vtt$).*\\.(vtt|srt)$",
      "quickButtonRule": {
        "appendSelector": ".jw-button-container",
        "insertBeforeSelector": ".jw-icon-cc"
      },
      "activeLangSelector": ".jw-settings-submenu-captions .jw-settings-submenu-items .jw-settings-item-active",
      "videoSelector": "video",
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] #immersive-translate-caption-window {direction: rtl;}"
      ],
      "attachRule": {
        "appendSelector": ".jw-wrapper",
        "injectedGlobalCSS": [
          ".jw-text-track-container {display: none;}",
          "@media (min-width: 576px) { video::cue {opacity: 0} }"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      },
      "multiSetting": {
        "activeLangSelector": ".jw-settings-submenu-captions .jw-settings-submenu-items .jw-settings-item-active"
      }
    }
  },
  {
    "id": "dailymotion",
    "matches": [
      "*.dailymotion.com"
    ],
    "excludeSelectors.add": [
      ".player"
    ],
    "mutationExcludeSelectors.add": [
      ".player *"
    ],
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "domCheckTimeout": 1,
    "subtitleRule.add": {
      "type": "webvtt",
      "subsrtFormat": "srt",
      "hookType": "xhr|fetch",
      "loadingContainerSelector": ".player",
      "subtitleUrlRegExp": "/video/.*\\.vtt",
      "injectedCss": [
        "#immersive-translate-quick-button-container,.immersive-translate-quick-button-container { position: relative; bottom: 50px; right: 60px; }"
      ],
      "enableHookDownload": true,
      "quickButtonRule": {
        "appendSelector": ".controls_bottom_right",
        "insertBeforeSelector": ".subtitles_toggle_button",
        "ccEnableSelector": "button.subtitles_toggle_button"
      }
    }
  },
  {
    "id": "crunchyroll",
    "matches": "*.crunchyroll.com",
    "excludeSelectors.add": [
      "#vilos",
      "#immersive-translate-caption-window"
    ],
    "mutationExcludeSelectors.add": [
      "#vilos *",
      "#immersive-translate-caption-window *"
    ],
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "domCheckTimeout": 1,
    "subtitleRule.add": {
      "type": "subsrt",
      "subsrtFormat": "vtt",
      "hookType": "fetch",
      "loadingContainerSelector": "#vilos",
      "subtitleUrlRegExp": ".*\\.vtt",
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] #immersive-translate-caption-window {direction: rtl;}"
      ],
      "attachRule": {
        "appendSelector": "#vilos",
        "injectedGlobalCSS": [
          ".textTrackLayer{display: none;}"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "osmosis",
    "matches": "*.osmosis.org",
    "excludeSelectors.add": [
      "#video-player-container",
      "#immersive-translate-caption-window"
    ],
    "mutationExcludeSelectors.add": [
      "#video-player-container *",
      "#immersive-translate-caption-window *"
    ],
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "domCheckTimeout": 1,
    "subtitleRule.add": {
      "type": "subsrt",
      "subsrtFormat": "vtt",
      "subtitleUrlRegExp": "\\.vtt(?:$|[?#])",
      "hookType": "fetch|xhr",
      "loadingContainerSelector": "#video-player-container",
      "injectedCss": [],
      "quickButtonRule": {
        "appendSelector": "#video-player-container > div > div:nth-child(3) > div > div:nth-child(2) > div:nth-child(2)",
        "insertBeforeSelector": "#video-player-container > div > div:nth-child(3) > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2)",
        "injectCSS": ".label { display: none; } .imt-quick-subtitle-pop-content { max-height: none !important; }"
      },
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] #immersive-translate-caption-window {direction: rtl;}"
      ],
      "attachRule": {
        "appendSelector": "#video-player-container",
        "injectedGlobalCSS": [
          "div[data-testid=video-subtitles-container] { display: none !important; }",
          "#video-player-container > div:nth-child(3) > div div[cn=gap-2] { z-index: 21474836471; }"
        ],
        "injectedCSS": [
          ".imt-caption-container {z-index:40;}",
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "pbs",
    "matches": "*.pbs.org",
    "excludeSelectors.add": [
      ".wrapper",
      "#immersive-translate-caption-window"
    ],
    "mutationExcludeSelectors.add": [
      ".wrapper *",
      "#immersive-translate-caption-window *"
    ],
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "domCheckTimeout": 1,
    "subtitleRule.add": {
      "type": "subsrt",
      "subtitleUrlRegExp": ".*captions.*\\.vtt$",
      "hookType": "xhr",
      "loadingContainerSelector": ".wrapper",
      "injectedCss": [],
      "quickButtonRule": {
        "appendSelector": ".vjs-control-bar",
        "insertBeforeSelector": "div.vjs-subs-caps-button",
        "injectCSS": ".label { display: none; } .imt-quick-subtitle-pop-content { max-height: none !important; }"
      },
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] #immersive-translate-caption-window {direction: rtl;}"
      ],
      "attachRule": {
        "appendSelector": ".page-wrap .video-js",
        "injectedGlobalCSS": [
          "div.vjs-text-track-display > div > div { display: none !important; }"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "internetfundamentals",
    "matches": "internetfundamentals.com",
    "excludeSelectors.add": [
      "#vjs_video_3",
      "#immersive-translate-caption-window"
    ],
    "mutationExcludeSelectors.add": [
      "#vjs_video_3 *",
      "#immersive-translate-caption-window *"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "subtitleUrlRegExp": "\\.vtt$",
      "hookType": "xhr",
      "loadingContainerSelector": "#vjs_video_3",
      "injectedCss": [],
      "quickButtonRule": {
        "appendSelector": ".vjs-control-bar",
        "insertBeforeSelector": "div.vjs-resolutions",
        "injectCSS": ".label { display: none; } .imt-quick-subtitle-pop-content { max-height: none !important; }"
      },
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] #immersive-translate-caption-window {direction: rtl;}"
      ],
      "attachRule": {
        "appendSelector": "#vjs_video_3",
        "injectedGlobalCSS": [
          "div.vjs-text-track-display > div > div { display: none !important; }"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "mgtv",
    "matches": "w.mgtv.com",
    "excludeSelectors.add": [
      "#immersive-translate-caption-window"
    ],
    "mutationExcludeSelectors.add": [
      "#immersive-translate-caption-window *"
    ],
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "domCheckTimeout": 1,
    "subtitleRule.add": {
      "type": "subsrt",
      "subtitleUrlRegExp": "^https://subtitle\\.hitv\\.com/c1/subtitle",
      "hookType": "fetch",
      "loadingContainerSelector": "container",
      "injectedCss": [
        "#immersive-translate-quick-button-container,.immersive-translate-quick-button-container { display: inline-block; position: relative; top: 6px; }"
      ],
      "quickButtonRule": {
        "appendSelector": "mango-control-wrap-right",
        "insertBeforeSelector": "mango-subtitle-bar",
        "injectCSS": ".label { display: none; } .imt-quick-subtitle-pop-content { max-height: none !important; }"
      },
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] #immersive-translate-caption-window {direction: rtl;}"
      ],
      "attachRule": {
        "appendSelector": "container",
        "injectedGlobalCSS": [
          "mango-subtitle { display: none !important; }"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "smartpoly.teachable.com",
    "matches": "smartpoly.teachable.com",
    "subtitleRule.add": {
      "type": "webvtt",
      "hookType": "xhr|fetch",
      "videoPlayerSelector": ".vjs-tech",
      "subtitleUrlRegExp": ".*\\.(vtt|webvtt)",
      "quickButtonRule": {
        "appendSelector": ".styles_columns__S4HQf:last-child",
        "injectCSS": ".imt-quick-subtitle-pop-content {right: 80px !important;}",
        "injectCSS.add_v.[1.32.3]": ""
      }
    }
  },
  {
    "id": "themotionmagic",
    "matches": [
      "player.hotmart.com"
    ],
    "selectorMatches": [
      "iframe[src*='player.hotmart.com']"
    ],
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "domCheckTimeout": 1,
    "excludeSelectors.add": [
      "#immersive-translate-caption-window"
    ],
    "mutationExcludeSelectors.add": [
      "#immersive-translate-caption-window *"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "videoPlayerSelector": ".vjs-tech",
      "subtitleUrlRegExp": ".*\\.(vtt|webvtt)",
      "quickButtonRule": {
        "appendSelector": ".styles_columns__S4HQf:last-child",
        "injectCSS": ".imt-quick-subtitle-pop-content {right: 80px !important;}",
        "injectCSS.add_v.[1.32.3]": ""
      },
      "enableHookDownload": true,
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] #immersive-translate-caption-window {direction: rtl;}"
      ]
    }
  },
  {
    "id": "movie-web",
    "matches": [
      "movie-web.app/media*",
      "movie-web-me.vercel.app/media*",
      "*.vidbinge.com",
      "vidsrc.xyz"
    ],
    "excludeSelectors.add": [
      "#root"
    ],
    "mutationExcludeSelectors.add": [
      "#root *"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "hookType": "fetch",
      "loadingContainerSelector": ".relative.h-screen.overflow-hidden",
      "subtitleUrlRegExp": ".*\\.(srt|vtt)",
      "quickButtonRule": {
        "appendSelector": ".hidden.justify-between .flex.items-center.space-x-3"
      },
      "videoSelector": "video",
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] #immersive-translate-caption-window {direction: rtl;}"
      ],
      "attachRule": {
        "appendSelector": ".popout-location div.h-screen.select-none",
        "injectedGlobalCSS": [
          ".popout-location .absolute p.pointer-events-none {display: none;}"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "deeplearning",
    "matches": [
      "learn.deeplearning.ai"
    ],
    "excludeSelectors.add": [
      "[data-layout=\"video\"]"
    ],
    "mutationExcludeSelectors.add": [
      "[data-layout=\"video\"] *"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "subsrtFormat": "vtt",
      "loadingContainerSelector": "[data-layout=\"video\"]",
      "subtitleUrlRegExp": ".*\\.vtt",
      "quickButtonRule": {
        "appendSelector": ".vds-controls-group:last-child",
        "insertBeforeSelector": ".vds-caption-button"
      },
      "attachRule": {
        "appendSelector": "[data-layout=\"video\"]",
        "injectedGlobalCSS": [
          ".vds-captions {display:none!important;}"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "weverse",
    "matches": [
      "weverse.io"
    ],
    "excludeSelectors.add": [
      ".pzp-pc__video"
    ],
    "mutationExcludeSelectors.add": [
      ".pzp-pc__video *"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "subsrtFormat": "vtt",
      "subtitleUrlRegExp": ".*\\.vtt",
      "quickButtonRule": {
        "appendSelector": ".pzp-pc__bottom-buttons-right",
        "insertBeforeSelector": "button.pzp-pc-subtitle-button"
      },
      "attachRule": {
        "appendSelector": ".pzp-pc__video",
        "injectedGlobalCSS": [
          ".pzp-pc-subtitle-text { display: none !important; }"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "docubay",
    "matches": [
      "www.docubay.com"
    ],
    "excludeSelectors.add": [
      "#immersive-translate-caption-window"
    ],
    "mutationExcludeSelectors.add": [
      "#immersive-translate-caption-window *"
    ],
    "subtitleRule.add": {
      "type": "webvtt",
      "subtitleUrlRegExp": "\\.vtt",
      "hookType": "xhr",
      "quickButtonRule": {
        "appendSelector": "div.vjs-subs-caps-button",
        "injectCSS": ".label { display: none; }"
      },
      "injectedCss": [
        "#immersive-translate-quick-button-container,.immersive-translate-quick-button-container { position: absolute; top: -3px; right: 0; }"
      ],
      "attachRule": {
        "appendSelector": "#vjs_video_3",
        "injectedGlobalCSS": [
          "div.vjs-text-track-cue { display: none !important; }"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "backrooms-wiki",
    "matches": "backrooms-wiki.wikidot.com",
    "stayOriginalTags.remove": [
      "TT"
    ]
  },
  {
    "id": "hubspotvideo",
    "matches": [
      "*.hubspotvideo.com"
    ],
    "excludeSelectors.add": [
      "#immersive-translate-caption-window"
    ],
    "mutationExcludeSelectors.add": [
      "#immersive-translate-caption-window *"
    ],
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "domCheckTimeout": 1,
    "subtitleRule.add": {
      "type": "webvtt",
      "subtitleUrlRegExp": "\\.vtt\\?.*",
      "hookType": "xhr",
      "quickButtonRule": {
        "appendSelector": "div.vjs-control-bar",
        "insertBeforeSelector": "div.vjs-captions-button",
        "injectCSS": ".label { display: none; }"
      },
      "attachRule": {
        "appendSelector": "div.video-js",
        "injectedGlobalCSS": [
          "div.vjs-text-track-display { display: none !important; }"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "quantinsti",
    "matches": [
      "quantra.quantinsti.com"
    ],
    "excludeSelectors.add": [
      "#vjs_video_3"
    ],
    "mutationExcludeSelectors.add": [
      "#vjs_video_3 *"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "subsrtFormat": "vtt",
      "subtitleUrlRegExp": ".*\\.vtt",
      "quickButtonRule": {
        "appendSelector": ".vjs-control-bar",
        "injectCSS": ".label { display: none; }",
        "insertBeforeSelector": "div.vjs-subs-caps-button"
      },
      "attachRule": {
        "appendSelector": "#vjs_video_3",
        "injectedGlobalCSS": [
          "div.vjs-text-track-cue { display: none !important; }"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "paramountplus",
    "matches": [
      "*.paramountplus.com"
    ],
    "excludeSelectors.add": [
      ".aa-player-skin"
    ],
    "mutationExcludeSelectors.add": [
      ".aa-player-skin *"
    ],
    "subtitleRule.add": {
      "type": "text_track_dynamic",
      "injectedCss": [
        ".tt-container {white-space: pre-line;}",
        ".timed-text-css-box-inner {display: none!important;}",
        ".timed-text-css-box-inner:last-child {display: block!important;}"
      ],
      "videoPlayerSelector": "video",
      "quickButtonRule": {
        "appendSelector": ".top-menu-container"
      }
    }
  },
  {
    "id": "plex.tv",
    "matches": [
      "watch.plex.tv"
    ],
    "subtitleRule.add": {
      "type": "text_track_dynamic",
      "injectedCss": [
        ".tt-container {white-space: pre-line;}",
        ".timed-text-css-box-inner {display: none!important;}",
        ".timed-text-css-box-inner:last-child {display: block!important;}"
      ],
      "videoPlayerSelector": "video",
      "quickButtonRule": {
        "appendSelector": "[class^='PlayerControls_bottomControls'] > div > div:last-child",
        "insertBeforeSelector": "[class^='PlayerControls_bottomControls'] > div > div:last-child > div:last-child"
      }
    }
  },
  {
    "id": "pluto",
    "matches": [
      "pluto.tv"
    ],
    "excludeSelectors.add": [
      ".video-player-layout"
    ],
    "mutationExcludeSelectors.add": [
      ".video-player-layout *"
    ],
    "subtitleRule.add": {
      "type": "text_track_dynamic",
      "videoPlayerSelector": "video",
      "quickButtonRule": {
        "appendSelector": ".endControls-0-2-85"
      }
    }
  },
  {
    "id": "ted",
    "matches": [
      "www.ted.com"
    ],
    "excludeSelectors.add": [
      "#video"
    ],
    "mutationExcludeSelectors.add": [
      "#video *"
    ],
    "domCheckTimeout": 1,
    "subtitleRule.add": {
      "id": "ted",
      "type": "multi_attach_vtt",
      "hookType": "fetch",
      "quickButtonRule": {
        "appendSelector": ".pointer-events-none #media-control-bar",
        "insertBeforeSelector": ".pointer-events-none #media-control-bar .media-volume-wrapper",
        "injectCSS": ".imt-quick-subtitle-button { font-size: 12px;} .logo,.logo svg { height: 18px !important; width: 18px !important;} .imt-quick-subtitle-pop-content {bottom: 38px !important;}",
        "injectCSS.add_v.[1.32.3]": ".imt-quick-subtitle-button { font-size: 12px;} .logo,.logo svg { height: 18px !important; width: 18px !important;}"
      },
      "activeLangSelector": "input[name=\"subtitle-language\"].after\\:visible",
      "videoPlayerSelector": "#video",
      "videoSelector": "#video",
      "subtitleUrlRegExp": "\\.vtt",
      "injectedCss": [
        "media-controller div.pointer-events-none .flex .flex span.text-textPrimary-onDark span {white-space: pre-line;}"
      ],
      "attachRule": {
        "appendSelector": "#maincontent media-controller",
        "injectedCSS": [
          ".imt-caption-container {z-index:10;}",
          ".imt-caption-window {width: 90%;}"
        ],
        "realCurrentTimeSelector": "span.text-textPrimary-onDark.font-normal.text-tui-sm.leading-tui-md.tracking-tui-tight",
        "realCurrentTimeRegex": "((?:\\d+:)?(?:\\d+:)?\\d+)\\s*[\\/|of|\\-]",
        "injectedGlobalCSS": [
          ".transition-transform { display: none !important; }",
          ".imt-caption-window { margin-bottom: 50px; }",
          "#immersive-translate-caption-window {opacity: 1 !important;}"
        ]
      },
      "multiSetting": {
        "activeLangSelector": "input[name=\"subtitle-language\"].after\\:visible",
        "langValueSelector": "input[name=subtitle-language]",
        "langValueAttribute": "value",
        "urlLangRegex": "subtitles/(\\S+)/full.vtt"
      }
    }
  },
  {
    "id": "devEpicGames",
    "matches": [
      "dev.epicgames.com"
    ],
    "excludeSelectors.add": [
      ".vjs-poster"
    ],
    "mutationExcludeSelectors.add": [
      ".vjs-poster *"
    ],
    "subtitleRule.add": {
      "type": "multi_attach_vtt",
      "hookType": "xhr",
      "quickButtonRule": {
        "appendSelector": ".vjs-control-bar",
        "injectCSS": ".label { display: none; }",
        "insertBeforeSelector": ".vjs-menu-button.vjs-settings-menu"
      },
      "activeLangSelector": "li.vjs-menu-item.vjs-captions-menu-item.vjs-selected > span",
      "subtitleUrlRegExp": "\\.vtt",
      "injectedCss": [],
      "attachRule": {
        "appendSelector": "#vjs_video_3",
        "injectedGlobalCSS": [
          ".vjs-text-track-display {display: none;}"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      },
      "multiSetting": {
        "activeLangSelector": "li.vjs-menu-item.vjs-captions-menu-item.vjs-selected > span",
        "langTextRegex": "(\\S+)\\s+Captions"
      }
    }
  },
  {
    "id": "hikaritv",
    "matches": [
      "boosterx.stream"
    ],
    "excludeSelectors.add": [
      ".jw-wrapper"
    ],
    "mutationExcludeSelectors.add": [
      ".jw-wrapper *"
    ],
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "domCheckTimeout": 1,
    "subtitleRule.add": {
      "type": "multi_attach_vtt",
      "hookType": "xhr",
      "quickButtonRule": {
        "appendSelector": ".jw-button-container",
        "insertBeforeSelector": ".jw-icon-cc"
      },
      "subtitleUrlRegExp": "\\.srt$",
      "attachRule": {
        "appendSelector": ".jw-wrapper",
        "injectedGlobalCSS": [
          ".jw-captions { display: none !important; }"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      },
      "multiSetting": {
        "activeLangSelector": ".jw-settings-submenu-captions .jw-settings-item-active"
      }
    }
  },
  {
    "id": "khflix",
    "matches": [
      "khflix.com",
      "watch.globaltv.com"
    ],
    "excludeSelectors.add": [
      "#video-playlist"
    ],
    "mutationExcludeSelectors.add": [
      "#video-playlist *"
    ],
    "subtitleRule.add": {
      "type": "multi_attach_vtt",
      "hookType": "xhr",
      "quickButtonRule": {
        "appendSelector": ".jw-button-container",
        "insertBeforeSelector": ".jw-icon-cc"
      },
      "videoPlayerSelector": "video",
      "videoSelector": "video",
      "subtitleUrlRegExp": "\\.vtt",
      "injectedCss": [],
      "attachRule": {
        "appendSelector": ".jw-wrapper",
        "injectedGlobalCSS": [
          ".jw-captions { display: none !important; }"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      },
      "multiSetting": {
        "activeLangSelector": ".jw-settings-submenu-captions .jw-settings-item-active",
        "urlLangRegex": "\\d+\\.(\\w+)\\.vtt",
        "isMapLangFromUrl": true
      }
    }
  },
  {
    "id": "donghuaworld",
    "matches": [
      "dwserver.donghuaworld.com"
    ],
    "excludeSelectors.add": [
      ".jw-media"
    ],
    "mutationExcludeSelectors.add": [
      ".jw-media *"
    ],
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "domCheckTimeout": 1,
    "subtitleRule.add": {
      "type": "multi_attach_vtt",
      "hookType": "xhr",
      "quickButtonRule": {
        "appendSelector": ".jw-button-container",
        "insertBeforeSelector": ".jw-icon-cc"
      },
      "videoPlayerSelector": "video",
      "videoSelector": "video",
      "subtitleUrlRegExp": "\\.vtt",
      "attachRule": {
        "appendSelector": ".jw-media",
        "injectedGlobalCSS": [
          ".jw-captions { display: none !important; }"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      },
      "multiSetting": {
        "activeLangSelector": ".jw-settings-submenu-captions .jw-settings-item-active",
        "urlLangRegex": "\\.English_(.*?)\\-\\.vtt",
        "isMapLangFromUrl": true
      }
    }
  },
  {
    "id": "lecturio",
    "matches": [
      "app.lecturio.com"
    ],
    "excludeSelectors.add": [
      "#vjs_video_3"
    ],
    "mutationExcludeSelectors.add": [
      "#vjs_video_3 *"
    ],
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "domCheckTimeout": 1,
    "subtitleRule.add": {
      "type": "multi_attach_vtt",
      "hookType": "xhr",
      "quickButtonRule": {
        "appendSelector": ".vjs-control-bar",
        "insertBeforeSelector": "div.vjs-subs-caps-button"
      },
      "videoPlayerSelector": "video",
      "videoSelector": "video",
      "subtitleUrlRegExp": "\\.vtt",
      "attachRule": {
        "appendSelector": "#vjs_video_3",
        "injectedGlobalCSS": [
          ".vjs-text-track-display { display: none !important; }"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      },
      "multiSetting": {
        "activeLangSelector": ".vjs-captions-menu-item.vjs-selected",
        "langTextRegex": "^(\\S+)\\s",
        "urlLangRegex": "/net/([^_]+)/",
        "isMapLangFromUrl": true
      }
    }
  },
  {
    "id": "ganjingworld",
    "matches": [
      "www.ganjingworld.com"
    ],
    "excludeSelectors.add": [
      ".vidPlayerWrap"
    ],
    "mutationExcludeSelectors.add": [
      ".vidPlayerWrap *"
    ],
    "subtitleRule.add": {
      "type": "multi_attach_vtt",
      "hookType": "fetch",
      "quickButtonRule": {
        "appendSelector": "[class*='player_controlToolbar']"
      },
      "videoPlayerSelector": "video",
      "videoSelector": "video",
      "subtitleUrlRegExp": "^(?!.*thumbnails).*\\.vtt$",
      "attachRule": {
        "appendSelector": ".vidPlayerWrap .media-player",
        "injectedGlobalCSS": [
          ".vds-captions { display: none !important; }"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      },
      "multiSetting": {
        "activeLangSelector": "[class*='player_playerMenu'] > div > div.vds-radio[aria-checked='true']",
        "langTextRegex": "^(\\S+)\\s",
        "urlLangRegex": "_(.*?)\\.",
        "isMapLangFromUrl": true
      }
    }
  },
  {
    "id": "fautv",
    "matches": [
      "www.fau.tv"
    ],
    "excludeSelectors.add": [
      ".jw-wrapper"
    ],
    "mutationExcludeSelectors.add": [
      ".jw-wrapper *"
    ],
    "subtitleRule.add": {
      "type": "text_track",
      "videoPlayerSelector": "video",
      "loadingContainerSelector": "#player",
      "quickButtonRule": {
        "appendSelector": ".jw-button-container",
        "insertBeforeSelector": ".jw-icon-cc"
      }
    }
  },
  {
    "id": "vimeo",
    "matches": [
      "vimeo.com",
      "training.leveleffect.com"
    ],
    "excludeSelectors.add": [
      ".vp-captions"
    ],
    "mutationExcludeSelectors.add": [
      ".vp-captions *"
    ],
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "domCheckTimeout": 1,
    "subtitleRule.add": {
      "type": "text_track",
      "videoPlayerSelector": "video",
      "allowHideModeTextTrack": true,
      "loadingContainerSelector": "[data-testid=\"vh-player-container\"]",
      "loadingStyle": "bottom: unset; top: 5%;",
      "injectedCss": [
        "#immersive-translateQuickButton {visibility: inherit!important;}"
      ],
      "quickButtonRule": {
        "appendSelector": "[class*='ControlBarButtonsAndMenus_module_collapsibleContent']",
        "insertBeforeSelector": "[data-volume-control-container=\"true\"]",
        "ccEnableSelector": "[data-cc-button=\"true\"]",
        "injectCSS": ".imt-quick-subtitle-button {margin-right: 0px; font-size: 12px;} .logo,.logo svg { height: 18px !important; width: 18px !important;} .imt-quick-subtitle-pop-content {bottom: 28px !important;}",
        "injectCSS.add_v.[1.32.3]": ".imt-quick-subtitle-button {margin-right: 0px; font-size: 12px;} .logo,.logo svg { height: 18px !important; width: 18px !important;}"
      }
    }
  },
  {
    "id": "player.vimeo",
    "matches": [
      "https://player.vimeo.com/video/*",
      "www.physeo.com"
    ],
    "selectorMatches": [
      "iframe[src*='player.vimeo.com']"
    ],
    "extraBlockSelectors.add": [
      "span.vp-captions-line",
      "span[class^=CaptionsRenderer_]"
    ],
    "excludeSelectors.add": [
      ".vp-captions-line"
    ],
    "mutationExcludeSelectors.add": [
      ".vp-captions *",
      ".vp-captions-line *"
    ],
    "additionalExcludeSelectors.remove": [
      ".notranslate",
      "[translate=no]"
    ],
    "preTranslateLimiter.add": {
      "header.enableTranslate": true
    },
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "domCheckTimeout": 1,
    "subtitleRule.add": {
      "type": "text_track",
      "videoPlayerSelector": "video",
      "allowHideModeTextTrack": true,
      "loadingContainerSelector": ".vp-telecine",
      "loadingStyle": "bottom: unset; top: 5%; font-size: 12px;",
      "injectedCss": [
        "#immersive-translateQuickButton {visibility: inherit!important;}",
        "[class^=ControlBarButtonsAndMenus_module_collapsibleWrapper] { overflow: unset !important }"
      ],
      "quickButtonRule": {
        "appendSelector": "[data-control-bar=\"true\"] > div > div:nth-child(2) > div",
        "insertBeforeSelector": "[data-control-bar=\"true\"] > div > div:nth-child(2) > div div[class*=\"ControlBarButtonsAndMenus\"]",
        "ccEnableSelector": "[data-cc-button=\"true\"]",
        "injectCSS": ".imt-quick-subtitle-button {margin: 0 6px; font-size: 12px;} .logo,.logo svg { height: 18px !important; width: 18px !important;} .imt-quick-subtitle-pop-content {bottom: 28px !important;}",
        "injectCSS.add_v.[1.32.3]": ".imt-quick-subtitle-button {margin: 0 6px; font-size: 12px;} .logo,.logo svg { height: 18px !important; width: 18px !important;}"
      },
      "attachRule": {
        "appendSelector": "#player,.vp-video",
        "injectedGlobalCSS": [
          ".vp-captions { display: none !important; }"
        ]
      },
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] #immersive-translate-caption-window {direction: rtl;}",
        "[class^=CaptionsRenderer_module_captionsLine]:nth-child(2) {direction:rtl;width:100%;text-align:right;}"
      ],
      "enableHookDownload": true
    }
  },
  {
    "id": "laracasts.com",
    "matches": [
      "laracasts.com"
    ],
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "domCheckTimeout": 1,
    "subtitleRule.add": {
      "type": "text_track_dynamic",
      "videoPlayerSelector": "mux-player->mux-video->video",
      "allowHideModeTextTrack": true,
      "enableHookDownload": true
    }
  },
  {
    "id": "start-dev",
    "matches": [
      "start.dev"
    ],
    "subtitleRule.add": {
      "type": "text_track_dynamic",
      "videoPlayerSelector": "mux-player -> mux-video -> video",
      "loadingContainerSelector": "mux-player",
      "quickButtonRule": {
        "appendSelector": "mux-player -> media-theme -> media-control-bar[part='control-bar bottom']",
        "insertBeforeSelector": "mux-player -> media-theme -> media-control-bar[part='control-bar bottom'] media-captions-menu-button",
        "injectCSS": ".logo,.logo svg { height: 18px !important; width: 18px !important;}"
      },
      "enableIOSFullScreenTextTrack": false,
      "enableHookDownload": true
    }
  },
  {
    "id": "tv.adobe",
    "matches": "https://*.tv.adobe.com",
    "excludeSelectors.add": [
      ".mpc-player"
    ],
    "mutationExcludeSelectors.add": [
      ".mpc-player *"
    ],
    "subtitleRule.add": {
      "type": "text_track",
      "videoPlayerSelector": "video",
      "loadingContainerSelector": ".mpc-player",
      "quickButtonRule": {
        "appendSelector": ".mpc-controls__container"
      }
    }
  },
  {
    "id": "threejs-journey",
    "matches": "threejs-journey.com",
    "excludeSelectors.add": [
      ".video-area"
    ],
    "mutationExcludeSelectors.add": [
      ".video-area *"
    ],
    "subtitleRule.add": {
      "type": "text_track",
      "videoPlayerSelector": "video",
      "loadingContainerSelector": ".video-area",
      "injectedCss": [
        ".js-tracks-text.tracks-text {white-space: pre;}"
      ],
      "quickButtonRule": {
        "appendSelector": ".js-controls .right",
        "insertBeforeSelector": ".js-subtitles",
        "injectCSS": ".imt-quick-subtitle-button { font-size: 12px;} .logo,.logo svg { height: 18px !important; width: 18px !important;} .imt-quick-subtitle-pop-content {bottom: 38px !important;}",
        "injectCSS.add_v.[1.32.3]": ".imt-quick-subtitle-button { font-size: 12px;} .logo,.logo svg { height: 18px !important; width: 18px !important;}"
      }
    }
  },
  {
    "id": "comsol",
    "matches": [
      "*.comsol.com"
    ],
    "excludeSelectors.add": [
      "#immersive-translate-caption-window"
    ],
    "mutationExcludeSelectors.add": [
      "#immersive-translate-caption-window *"
    ],
    "subtitleRule.add": {
      "type": "text_track",
      "videoPlayerSelector": "video",
      "videoSelector": "video",
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] #immersive-translate-caption-window {direction: rtl;}"
      ],
      "attachRule": {
        "appendSelector": ".w-video-wrapper",
        "injectedGlobalCSS": [
          ".w-captions-line { display: none !important; }"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "jove",
    "matches": [
      "*.jove.com"
    ],
    "subtitleRule.add": {
      "type": "text_track",
      "videoPlayerSelector": "video",
      "loadingContainerSelector": "#coreplayer",
      "quickButtonRule": {
        "injectCSS": ".imt-quick-subtitle-pop-content {right: 60px !important;}",
        "injectCSS.add_v.[1.32.3]": "",
        "appendSelector": ".fp-controls"
      }
    }
  },
  {
    "id": "rumble",
    "matches": [
      "rumble.com"
    ],
    "subtitleRule.add": {
      "type": "text_track",
      "videoPlayerSelector": "video",
      "loadingContainerSelector": ".video-player",
      "injectedCss": [
        "#immersive-translate-quick-button-container,.immersive-translate-quick-button-container { height: 18px; padding: 6px 9px; float: right; }"
      ],
      "quickButtonRule": {
        "injectCSS": ".label { display: none; }",
        "appendSelector": ".videoPlayer-Rumble-cls > div > div:nth-child(5) > div:nth-child(3)",
        "insertBeforeSelector": "[title='Playback settings']"
      }
    }
  },
  {
    "id": "shibaristudy-com",
    "matches": [
      "shibaristudy.com"
    ],
    "subtitleRule.add": {
      "allowHideModeTextTrack": true,
      "quickButtonRule": {
        "appendSelector": "video-player[data-test=\"player\"] video-controls",
        "insertBeforeSelector": "video-player[data-test=\"player\"] video-subtitles-button"
      },
      "type": "text_track_dynamic",
      "videoPlayerSelector": "video"
    }
  },
  {
    "id": "codewithchris",
    "matches": [
      "learn.codewithchris.com",
      "*.rachelsenglishacademy.com",
      "www.unrealsenseiacademy.com",
      "www.comsol.com/video/*",
      "www.comsol.com/blogs/*"
    ],
    "excludeSelectors.add": [
      ".w-captions",
      ".w-captions-line > div > span"
    ],
    "mutationExcludeSelectors.add": [
      ".w-captions *"
    ],
    "subtitleRule.add": {
      "type": "general",
      "subtitleUrlRegExp": "/embed/captions/",
      "loadingContainerSelector": ".w-ui-container",
      "hookType": "fetch",
      "generalSetting": {
        "captionsPath": "captions",
        "itemsPath": "hash.lines",
        "textKey": "text"
      }
    }
  },
  {
    "id": "panopto",
    "matches": [
      "southampton.cloud.panopto.eu_no_subitle"
    ],
    "excludeSelectors.add": [
      ".primaryPlayer"
    ],
    "mutationExcludeSelectors.add": [
      ".primaryPlayer *"
    ],
    "subtitleRule.add": {
      "type": "general",
      "subtitleUrlRegExp": "DeliveryInfo.aspx",
      "disableSubsCache": true,
      "loadingContainerSelector": "#primaryPlayer",
      "hookType": "fetch",
      "generalSetting": {
        "textKey": "Caption"
      },
      "quickButtonRule": {
        "appendSelector": "#transportControls",
        "insertBeforeSelector": "#captionsButton"
      }
    }
  },
  {
    "id": "edx",
    "matches": [
      "*.edx.org",
      "courses.mitxonline.mit.edu",
      "courses.learn.mit.edu",
      "learn.learn.nvidia.com"
    ],
    "additionalExcludeSelectors.add": [
      ".closed-captions",
      ".wrapper-video-bottom-section",
      ".secondary-controls"
    ],
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "domCheckTimeout": 1,
    "subtitleRule.add": {
      "type": "general",
      "subtitleUrlRegExp": "/transcript/translation/",
      "loadingContainerSelector": ".tc-wrapper",
      "generalSetting": {
        "itemsPath": "text"
      },
      "injectedCss": [
        ".subtitles-menu span,.closed-captions {white-space: pre-line;}",
        "#immersive-translate-quick-button-container,.immersive-translate-quick-button-container {display: inline-block; vertical-align: middle;}"
      ],
      "quickButtonRule": {
        "appendSelector": ".secondary-controls",
        "insertBeforeSelector": ".speeds.menu-container",
        "ccEnableSelector": ".toggle-captions"
      }
    },
    "subtitleRule.add_v.[1.19.4]": {
      "type": "edx",
      "showQuickButton": true,
      "multipleVideoContainerSelector": ".video[data-metadata]",
      "attachRule": {
        "appendSelector": ".tc-wrapper .video-player",
        "injectedCSS": [
          ".imt-caption-container {z-index:9;}",
          ".imt-caption-window {width: 90%;}"
        ],
        "injectedGlobalCSS": [
          ".closed-captions {display: none!important;}"
        ]
      },
      "quickButtonRule": {
        "appendSelector": ".secondary-controls"
      }
    }
  },
  {
    "id": "ardmediathek",
    "matches": [
      "www.ardmediathek.*"
    ],
    "excludeSelectors.add": [
      ".ardplayer-viewport-addon-overlays"
    ],
    "mutationExcludeSelectors.add": [
      ".ardplayer-viewport-addon-overlays *"
    ],
    "subtitleRule.add": {
      "type": "ebutt",
      "hookType": "fetch",
      "subtitleUrlRegExp": "subtitle/ebutt",
      "loadingContainerSelector": ".ardplayer-viewport-addon-overlays",
      "quickButtonRule": {
        "appendSelector": ".ardplayer-footer .ardplayer-addons-container",
        "insertBeforeSelector": ".ardplayer-footer .ardplayer-button-sharing",
        "injectCSS": ".imt-quick-subtitle-button {font-size: 20px; } .logo,.logo svg { height: 36px !important; width: 36px !important;} .imt-quick-subtitle-pop-content {z-index: 2147483647;} ",
        "ccEnableSelector": ".ardplayer-button-language"
      },
      "attachRule": {
        "appendSelector": "[data-initiator-name=\"player-container\"]",
        "injectedGlobalCSS": [
          ".ardplayer-untertitel div[lang] {display:none!important;}"
        ],
        "injectedCSS": [
          ".imt-caption-window {margin-bottom: 0; bottom: 20%;}",
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "bbc-iplayer",
    "matches": [
      "https://www.bbc.*/iplayer*"
    ],
    "excludeSelectors.add": [
      ".player"
    ],
    "mutationExcludeSelectors.add": [
      ".player *"
    ],
    "subtitleRule.add": {
      "type": "ebutt",
      "hookType": "fetch",
      "subtitleUrlRegExp": "iplayer/subtitles/.*.xml",
      "loadingContainerSelector": ".player__container",
      "appendSelector": "smp-toucan-player->smp-video-layout->smp-subtitles",
      "enableHookDownload": true,
      "quickButtonRule": {
        "appendSelector": ".player__container",
        "injectedGlobalCSS": ".player__container > .immersive-translate-quick-button-container { position: absolute; top: 16px; right: 16px; z-index: 2147483646; }",
        "injectCSS": ".imt-quick-subtitle-pop-content { top: 40px; bottom: auto; }"
      }
    }
  },
  {
    "id": "bbc-emp",
    "matches": "https://emp.bbc.*/emp/*",
    "excludeSelectors.add": [
      ".p_accessibleHitArea"
    ],
    "mutationExcludeSelectors.add": [
      ".p_accessibleHitArea *"
    ],
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "domCheckTimeout": 1,
    "subtitleRule.add": {
      "type": "xml",
      "hookType": "xhr",
      "videoSelector": "video#p_v_player_0",
      "videoPlayerSelector": "video#p_v_player_0",
      "subtitleUrlRegExp": "iplayer/subtitles",
      "xmlTextSelector": "p",
      "loadingStyle": "bottom: 10%;",
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] #immersive-translate-caption-window {direction: rtl;}"
      ],
      "injectedCss": [
        "#immersive-translate-quick-button-container,.immersive-translate-quick-button-container{ position: absolute; top: -70px; right: 0; }"
      ],
      "quickButtonRule": {
        "appendSelector": ".p_playerControlBarHolder",
        "ccEnableSelector": ".p_subtitleButton"
      },
      "attachRule": {
        "appendSelector": ".p_subtitlesContainer",
        "injectedGlobalCSS": [
          ".p_subtitlesContainer .p_paragraph {display: none !important;}"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      },
      "xmlSetting": {
        "subtitleItemSelector": "p",
        "startAttr": "begin",
        "endAttr": "end",
        "timeDivisor": 1000,
        "timePartCount": 3
      }
    }
  },
  {
    "id": "bbc",
    "matches": [
      "*.bbc.*"
    ],
    "excludeSelectors.add": [
      "section.module--languages",
      ".drop-capped",
      ".smp-toucan-player",
      "smp-subtitles",
      "#subtitle_subtitle2"
    ],
    "mutationExcludeSelectors.add": [
      "[data-testid='media-player-container-landscape'] *"
    ],
    "subtitleRule.add": {
      "type": "ebutt",
      "hookType": "fetch",
      "subtitleUrlRegExp": "iplayer/subtitles/.*.xml",
      "loadingContainerSelector": ".smp-toucan-player"
    },
    "bodyRule.add": {
      "bodySelector": "#main-content",
      "articleSelector": "article"
    },
    "preTranslateLimiter.add_v.[1.12.1]": {
      "header.selectors": [
        "#header-content"
      ]
    }
  },
  {
    "id": "zdf.de",
    "matches": [
      "www.zdf.de"
    ],
    "excludeSelectors.add": [
      ".zdfplayer-video-container",
      "#immersive-translate-caption-window"
    ],
    "mutationExcludeSelectors.add": [
      ".zdfplayer-video-container *",
      "#immersive-translate-caption-window *"
    ],
    "subtitleRule.add": {
      "type": "ebutt",
      "subtitleUrlRegExp": "(?:mtt/.*|assets\\.nexx\\.cloud/.+)\\.xml(?:$|[?#])",
      "loadingContainerSelector": ".zdfplayer-video-container",
      "hookType": "fetch|xhr",
      "responseType": "document",
      "injectedCss": [
        "#immersive-translate-quick-button-container,.immersive-translate-quick-button-container {display:inline-block;vertical-align:middle;margin-right:-16px;}"
      ],
      "quickButtonRule": {
        "appendSelector": "[class^='right-controls-']",
        "insertBeforeSelector": ".button-settings"
      },
      "attachRule": {
        "appendSelector": "[class^='subtitle-container-']",
        "injectedGlobalCSS": [
          ".zdfplayer-cue-inline { display: none !important; }",
          "[class^='subtitle-container-'] { visibility: visible; }"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "piped.video",
    "matches": "piped.video",
    "subtitleRule.add": {
      "type": "ebutt",
      "hookType": "fetch",
      "subtitleUrlRegExp": "api/timedtext",
      "loadingContainerSelector": ".shaka-video-container",
      "responseType": "document",
      "quickButtonRule": {
        "appendSelector": ".shaka-controls-button-panel",
        "insertBeforeSelector": ".shaka-mute-button"
      },
      "attachRule": {
        "appendSelector": ".shaka-video-container",
        "injectedGlobalCSS": [
          "@media (min-width: 576px) { video::cue {opacity: 0} }"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "disneyplus",
    "matches": [
      "www.disneyplus.com"
    ],
    "excludeSelectors.add": [
      ".dss-hls-subtitle-overlay"
    ],
    "mutationExcludeSelectors.add": [
      ".dss-hls-subtitle-overlay *"
    ],
    "subtitleRule.add": {
      "type": "disneyplus",
      "subtitleUrlRegExp": "\\.vtt",
      "enableHookDownload": false
    },
    "subtitleRule.add_v.[1.34.1]": {
      "enableHookDownload": true,
      "quickButtonRule": {
        "appendSelector": ".mini-player-inner",
        "injectedGlobalCSS": ".mini-player-inner > .immersive-translate-quick-button-container { position: absolute; right: 232px; bottom: 47px; z-index: 2147483646; pointer-events: auto; } .mini-player-inner > .btm-media-player-idle ~ .immersive-translate-quick-button-container:not(:hover):not(:focus-within) { visibility: hidden; pointer-events: none; } @media (max-width: 600px) { .mini-player-inner > .immersive-translate-quick-button-container { right: 16px; bottom: 96px; } }",
        "retryCheckMs": 10000
      }
    }
  },
  {
    "id": "mubi",
    "matches": [
      "https://mubi.com",
      "https://mubi.de"
    ],
    "subtitleRule.add": {
      "type": "mubi",
      "subtitleUrlRegExp": "(textstream_|viewing/secure_url)",
      "hookType": "fetch",
      "quickButtonRule": {
        "appendSelector": ".css-1k6yql2.e1b63bld4",
        "insertBeforeSelector": ".css-1ce7rqp.e7f2hfl0"
      },
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] #immersive-translate-caption-window {direction: rtl;}"
      ],
      "attachRule": {
        "appendSelector": ".video-player",
        "injectedGlobalCSS": [
          ".clpp-text-container {display: none;}"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    },
    "_comment": "2024-09-28：暂时下线，2025-12-12 恢复上线"
  },
  {
    "id": "hulu",
    "matches": [
      "https://*.hulu.com",
      "https://*.hulu.*"
    ],
    "additionalExcludeSelectors.add": [
      ".PlayerMetadata__subTitle",
      ".PlayerMetadata__subTitle",
      ".CaptionBox"
    ],
    "subtitleRule.add": {
      "type": "xml",
      "hookType": "fetch",
      "subtitleUrlRegExp": "\\.ttml$",
      "loadingContainerSelector": "#web-player-app",
      "quickButtonRule": {
        "appendSelector": ".PlayerSettingsGroup",
        "insertBeforeSelector": ".PlayerSettingsGroup .PlayerControlsButton"
      },
      "injectedCss": [
        ".CaptionBox {white-space: pre-line;}"
      ],
      "xmlTextSelector": "p",
      "xmlSetting": {
        "subtitleItemSelector": "div",
        "textSelector": "p",
        "startSelector": "div",
        "endSelector": "div",
        "startAttr": "begin",
        "endAttr": "end",
        "timeDivisor": 1000
      },
      "enableHookDownload": true
    },
    "_comment": "无法自托管，自托管字幕广告后会偏移"
  },
  {
    "id": "youku.tv",
    "matches": "www.youku.tv",
    "excludeSelectors.add": [
      "#subtitle"
    ],
    "mutationExcludeSelectors.add": [
      "#subtitle *"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "hookType": "fetch",
      "injectedCss": [
        "#immersive-translate-quick-button-container,.immersive-translate-quick-button-container {display: inline-block; vertical-align: middle;}"
      ],
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] #subtitle svg text:last-child {writing-mode: horizontal-tb !important;direction: rtl !important;unicode-bidi: bidi-override !important;text-anchor: end !important;}"
      ],
      "subtitleUrlRegExp": "\\.ass$",
      "subsrtFormat": "ass",
      "loadingContainerSelector": "#youku-advertise",
      "loadingStyle": "bottom: 10%;",
      "enableHookDownload": true,
      "quickButtonRule": {
        "appendSelector": ".kui-dashboard-dashboard-panel .kui-dashboard-rear-ctn",
        "insertBeforeSelector": ".kui-rate-control-0",
        "injectCSS": ".imt-quick-subtitle-pop-content { max-height: unset !important; }"
      }
    }
  },
  {
    "id": "starz",
    "matches": "www.starz.com",
    "excludeSelectors.add": [
      "starz-player"
    ],
    "mutationExcludeSelectors.add": [
      "starz-player *"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "subsrtFormat": "vtt",
      "subtitleUrlRegExp": "\\.vtt$",
      "loadingContainerSelector": "starz-player",
      "loadingStyle": "bottom: 10%;",
      "injectedCss": [
        "#immersive-translate-quick-button-container,.immersive-translate-quick-button-container {display: inline-block;}"
      ],
      "enableHookDownload": true,
      "quickButtonRule": {
        "appendSelector": "starz-player .button-group",
        "insertBeforeSelector": "starz-player .button-group .video-player-icon-md"
      }
    }
  },
  {
    "id": "jointherealworld",
    "matches": "app.jointherealworld.com",
    "subtitleRule.add": {
      "type": "subsrt",
      "subsrtFormat": "vtt",
      "hookType": "xhr",
      "subtitleUrlRegExp": "text/en.vtt",
      "quickButtonRule": {
        "appendSelector": ".aspect-video section >:nth-child(2) >:nth-child(2)"
      },
      "attachRule": {
        "appendSelector": ".aspect-video",
        "injectedGlobalCSS": [
          ".pointer-events-none.text-white {display: none!important;} "
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "rtve",
    "matches": "www.rtve.*",
    "injectedCss.add": [
      ".errorHead * {font-size: 3.2rem!important;}"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "subsrtFormat": "vtt",
      "hookType": "fetch",
      "subtitleUrlRegExp": "\\.vtt$",
      "loadingContainerSelector": ".striplayer",
      "injectedCss": [
        "#immersive-translate-quick-button-container,.immersive-translate-quick-button-container {order: 4}"
      ],
      "quickButtonRule": {
        "appendSelector": "[class='theo-secondary-color vjs-control-bar ']",
        "insertBeforeSelector": ".vjs-control-bar .vjs-icon-subtitles"
      },
      "attachRule": {
        "appendSelector": ".theo-player-wrapper",
        "injectedGlobalCSS": [
          ".theoplayer-texttracks {display: none!important;} "
        ],
        "injectedCSS": [
          ".imt-caption-window {bottom: 60px;}",
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "dmm",
    "matches": "tv.dmm.com",
    "subtitleRule.add": {
      "type": "subsrt",
      "subsrtFormat": "vtt",
      "hookType": "fetch",
      "subtitleUrlRegExp": "\\.vtt$",
      "loadingContainerSelector": "#vodWrapper",
      "quickButtonRule": {
        "appendSelector": "#vodWrapper .relative.flex.justify-end.items-center",
        "insertBeforeSelector": "#vodWrapper .relative.flex.justify-end.items-center > div:first-child"
      }
    }
  },
  {
    "id": "www.iq.com",
    "matches": "www.iq.com",
    "excludeSelectors.add": [
      ".iqp-subtitle"
    ],
    "mutationExcludeSelectors.add": [
      ".iqp-subtitle *"
    ],
    "subtitleRule.add": {
      "type": "xml",
      "subtitleUrlRegExp": "\\.xml\\?",
      "loadingContainerSelector": ".iqp-player-g.iqp-player.iqp-player-pc",
      "xmlTextSelector": "sub",
      "loadingStyle": "bottom: 10%;",
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] #immersive-translate-caption-window {direction: rtl;}"
      ],
      "injectedCss": [
        ".iqp-player {direction: ltr !important;}",
        "#immersive-translate-quick-button-container,.immersive-translate-quick-button-container {float: right; height: 100%;}"
      ],
      "quickButtonRule": {
        "appendSelector": ".iqp-contrls-right"
      },
      "attachRule": {
        "appendSelector": ".iqp-player-g.iqp-player.iqp-player-pc",
        "injectedGlobalCSS": [
          "iqpdiv[data-player-hook='subtitleelem'] {display: none;}"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      },
      "xmlSetting": {
        "subtitleItemSelector": "dia",
        "textSelector": "sub",
        "startSelector": "st",
        "endSelector": "et",
        "timeDivisor": 1000
      }
    }
  },
  {
    "id": "cbsnews",
    "matches": "www.cbsnews.com",
    "excludeSelectors.add": [
      ".avia-container"
    ],
    "mutationExcludeSelectors.add": [
      ".avia-container *"
    ],
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "domCheckTimeout": 1,
    "subtitleRule.add": {
      "type": "xml",
      "subtitleUrlRegExp": "\\_xml\\?",
      "xmlTextSelector": "p",
      "loadingStyle": "bottom: 10%;",
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] #immersive-translate-caption-window {direction: rtl;}"
      ],
      "injectedCss": [
        "#immersive-translate-quick-button-container,.immersive-translate-quick-button-container {float: right; height: 100%;}"
      ],
      "quickButtonRule": {
        "appendSelector": "slot-fb > .avia-control-group-right",
        "injectCSS": ".imt-quick-subtitle-pop-content {right: 65px !important;}",
        "injectCSS.add_v.[1.32.3]": ""
      },
      "attachRule": {
        "appendSelector": ".avia-container",
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      },
      "xmlSetting": {
        "subtitleItemSelector": "p",
        "startAttr": "begin",
        "endAttr": "end",
        "timeDivisor": 1000
      }
    }
  },
  {
    "id": "gaia",
    "matches": [
      "www.gaia.com"
    ],
    "excludeSelectors.add": [
      "video-js"
    ],
    "mutationExcludeSelectors.add": [
      "video-js *"
    ],
    "subtitleRule.add": {
      "type": "multi_attach_vtt",
      "subsrtFormat": "vtt",
      "subtitleUrlRegExp": "\\.vtt",
      "hookType": "xhr",
      "quickButtonRule": {
        "appendSelector": ".vjs-control-bar",
        "injectCSS": ".label { display: none; }",
        "insertBeforeSelector": "button.vjs-control.vjs-button.vjs-video-overlay-button"
      },
      "injectedCss": [
        "#immersive-translate-quick-button-container,.immersive-translate-quick-button-container { order: 6; }",
        "@media (max-width: 570px) { #immersive-translate-quick-button-container,.immersive-translate-quick-button-container { display: none !important; } }"
      ],
      "attachRule": {
        "appendSelector": "video-js",
        "injectedGlobalCSS": [
          ".vjs-text-track-display { display: none; }"
        ],
        "injectedCSS": [
          ".imt-caption-window { bottom: 5%; }",
          ".imt-caption-window {width: 90%;}"
        ]
      },
      "multiSetting": {
        "activeLangSelector": ".vjs-media-center-menu-content .vjs-menu-column:nth-of-type(2) .vjs-selected .vjs-menu-item-text",
        "langTextRegex": "^(\\S+)\\s",
        "urlLangRegex": "_F([^_]+)",
        "isMapLangFromUrl": true
      }
    }
  },
  {
    "id": "medbridge",
    "matches": [
      "www.medbridge.com"
    ],
    "excludeSelectors.add": [
      "#player-video"
    ],
    "mutationExcludeSelectors.add": [
      "#player-video *"
    ],
    "subtitleRule.add": {
      "type": "multi_attach_vtt",
      "subsrtFormat": "vtt",
      "subtitleUrlRegExp": "\\.vtt",
      "hookType": "xhr",
      "quickButtonRule": {
        "appendSelector": ".jw-button-container",
        "injectCSS": ".label { display: none; }",
        "insertBeforeSelector": ".jw-icon-cc"
      },
      "attachRule": {
        "appendSelector": "#player-video",
        "injectedCSS": [
          ".jw-text-track-display { display: none; }",
          ".imt-caption-window {width: 90%;}"
        ]
      },
      "multiSetting": {
        "activeLangSelector": ".jw-settings-submenu-active .jw-settings-item-active",
        "langTextRegex": "^(\\S+)\\s",
        "urlLangRegex": "_(.*?)\\.vtt",
        "isMapLangFromUrl": true
      }
    }
  },
  {
    "id": "urplay",
    "matches": [
      "urplay.se"
    ],
    "excludeSelectors.add": [
      ".jw-media"
    ],
    "mutationExcludeSelectors.add": [
      ".jw-media *"
    ],
    "subtitleRule.add": {
      "type": "webvtt",
      "subsrtFormat": "vtt",
      "subtitleUrlRegExp": "\\.vtt\\?",
      "hookType": "xhr",
      "quickButtonRule": {
        "appendSelector": ".jw-button-container"
      },
      "attachRule": {
        "appendSelector": ".jw-media",
        "injectedGlobalCSS": [
          ".jw-text-track-container { display: none; }"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "medici",
    "matches": [
      "www.medici.tv"
    ],
    "excludeSelectors.add": [
      "#player-movie-page"
    ],
    "mutationExcludeSelectors.add": [
      "#player-movie-page *"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "subtitleUrlRegExp": "\\.webvtt$",
      "hookType": "xhr",
      "enableHookDownload": true,
      "quickButtonRule": {
        "appendSelector": ".jw-button-container",
        "ccEnableSelector": ".jw-icon-cc"
      }
    }
  },
  {
    "id": "asu",
    "matches": [
      "api.playposit.com"
    ],
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "domCheckTimeout": 1,
    "excludeSelectors.add": [
      "#overlay-container"
    ],
    "mutationExcludeSelectors.add": [
      "#overlay-container *"
    ],
    "subtitleRule.add": {
      "type": "webvtt",
      "subsrtFormat": "vtt",
      "subtitleUrlRegExp": "\\.vtt",
      "hookType": "xhr",
      "injectedCss": [
        "#immersive-translate-quick-button-container,.immersive-translate-quick-button-container { display: inline-block; position: relative; top: 9px; }"
      ],
      "quickButtonRule": {
        "appendSelector": "#extra-actions-wrapper",
        "injectCSS": ".label { display: none; }"
      },
      "attachRule": {
        "appendSelector": "#video-container",
        "injectedGlobalCSS": [
          ".vjs-text-track-display {display: none;}"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "gagaoolala-verticals",
    "matches": [
      "https://www.gagaoolala.com/*/verticals/watch/*"
    ],
    "excludeSelectors.add": [
      "#mvHero"
    ],
    "mutationExcludeSelectors.add": [
      "#mvHero *"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "subsrtFormat": "vtt",
      "subtitleUrlRegExp": "img\\.gagaoolala\\.com\\/media\\/[^/?#]+\\.vtt(?:$|[?#])",
      "hookType": "xhr",
      "loadingContainerSelector": "#mvHero .verticals-player-stage__sdk",
      "videoSelector": "#mvHero video",
      "quickButtonRule": {
        "appendSelector": "#mvHero .verticals-player-controls__meta-row",
        "insertBeforeSelector": "#mvHero .verticals-player-controls__settings-trigger"
      },
      "attachRule": {
        "appendSelector": "#mvHero .verticals-player-stage__sdk",
        "injectedGlobalCSS": [
          ".verticals-player-subtitle {display: none;}"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "gagaoolala",
    "matches": [
      "www.gagaoolala.com"
    ],
    "excludeSelectors.add": [
      "#gl-id-video-container"
    ],
    "mutationExcludeSelectors.add": [
      "#gl-id-video-container *"
    ],
    "subtitleRule.add": {
      "type": "webvtt",
      "subsrtFormat": "vtt",
      "subtitleUrlRegExp": "\\.vtt",
      "hookType": "xhr",
      "injectedCss": [],
      "quickButtonRule": {
        "appendSelector": ".bmpui-ui-controlbar .bmpui-controlbar-bottom > div",
        "insertBeforeSelector": ".bmpui-ui-controlbar .bmpui-controlbar-bottom > div .bmpui-gl-ui-setting-subtitle"
      },
      "attachRule": {
        "appendSelector": "#gl-id-video-container",
        "injectedGlobalCSS": [
          ".bmpui-ui-subtitle-overlay {display: none;}"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "curiositystream",
    "matches": [
      "curiositystream.com"
    ],
    "excludeSelectors.add": [
      "[data-testid=\"video-player\"]"
    ],
    "mutationExcludeSelectors.add": [
      "[data-testid=\"video-player\"] *"
    ],
    "subtitleRule.add": {
      "type": "webvtt",
      "subsrtFormat": "vtt",
      "subtitleUrlRegExp": "\\.vtt",
      "hookType": "xhr",
      "quickButtonRule": {
        "appendSelector": ".vjs-control-bar > div > div > ul:last-of-type"
      },
      "attachRule": {
        "appendSelector": "[data-testid=\"video-player\"] > div",
        "injectedGlobalCSS": [
          ".vjs-text-track-display {display: none;}"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "shangpaAcademy",
    "matches": [
      "shangpa-academy.mn.co"
    ],
    "excludeSelectors.add": [
      ".mighty-video-player-container"
    ],
    "mutationExcludeSelectors.add": [
      ".mighty-video-player-container *"
    ],
    "subtitleRule.add": {
      "type": "webvtt",
      "subsrtFormat": "vtt",
      "loadingContainerSelector": ".mighty-video-player-container",
      "subtitleUrlRegExp": "\\.vtt",
      "hookType": "xhr",
      "quickButtonRule": {
        "appendSelector": ".vjs-control-bar",
        "insertBeforeSelector": ".vjs-control-bar > .vjs-subs-caps-button"
      }
    }
  },
  {
    "id": "codewithandrea",
    "matches": [
      "customer-*.cloudflarestream.com"
    ],
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "domCheckTimeout": 1,
    "subtitleRule.add": {
      "type": "webvtt",
      "subtitleUrlRegExp": "\\.vtt",
      "hookType": "fetch|xhr",
      "loadingContainerSelector": "stream > div",
      "enableHookDownload": true,
      "quickButtonRule": {
        "appendSelector": ".css-6mrf8j.css-1oxfqe2",
        "injectCSS": ".imt-quick-subtitle-pop-content {right: 75px !important;}",
        "injectCSS.add_v.[1.32.3]": ""
      },
      "attachRule": {
        "appendSelector": "body",
        "injectedCSS": [
          ".imt-caption-window {margin-bottom: 0; bottom: 7%;}",
          ".imt-caption-window {width: 90%;}"
        ],
        "injectedGlobalCSS": [
          "@media (min-width: 576px) { video::cue {opacity: 0} }"
        ]
      }
    }
  },
  {
    "id": "ucdavis",
    "matches": [
      "aggievideo.canvas.ucdavis.edu"
    ],
    "excludeSelectors.add": [
      "[data-testid=\"video-player\"]"
    ],
    "mutationExcludeSelectors.add": [
      "[data-testid=\"video-player\"] *"
    ],
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "domCheckTimeout": 1,
    "subtitleRule.add": {
      "type": "webvtt",
      "subsrtFormat": "vtt",
      "subtitleUrlRegExp": "\\.vtt",
      "hookType": "xhr",
      "loadingContainerSelector": ".playkit-subtitles",
      "quickButtonRule": {
        "appendSelector": ".playkit-bottom-bar .playkit-right-controls",
        "insertBeforeSelector": ".playkit-bottom-bar .playkit-right-controls .playkit-control-closed-captions"
      }
    }
  },
  {
    "id": "f1tv",
    "matches": [
      "f1tv.formula1.com"
    ],
    "excludeSelectors.add": [
      "#main-embeddedPlayer"
    ],
    "mutationExcludeSelectors.add": [
      "#main-embeddedPlayer *"
    ],
    "subtitleRule.add": {
      "type": "webvtt",
      "subtitleUrlRegExp": "\\.webvtt$",
      "hookType": "xhr",
      "quickButtonRule": {
        "appendSelector": ".bmpui-controlbar-bottom .bmpui-container-wrapper"
      }
    }
  },
  {
    "id": "wwwformula1",
    "matches": [
      "www.formula1.com"
    ],
    "excludeSelectors.add": [
      ".vjs-text-track-display"
    ],
    "mutationExcludeSelectors.add": [
      ".vjs-text-track-display *"
    ],
    "subtitleRule.add": {
      "type": "webvtt",
      "subtitleUrlRegExp": "segment\\d+\\.vtt(?:$|[?#])",
      "hookType": "xhr",
      "quickButtonRule": {
        "appendSelector": ".vjs-control-bar"
      }
    }
  },
  {
    "id": "datacamp",
    "matches": [
      "projector.datacamp.com"
    ],
    "excludeSelectors.add": [
      ".video"
    ],
    "mutationExcludeSelectors.add": [
      ".video *"
    ],
    "subtitleRule.add": {
      "type": "webvtt",
      "subtitleUrlRegExp": "\\.vtt$",
      "hookType": "xhr",
      "quickButtonRule": {
        "appendSelector": ".vjs-control-bar",
        "insertBeforeSelector": "div.vjs-subs-caps-button"
      }
    }
  },
  {
    "id": "imigresen-online",
    "matches": "imigresen-online.imi.gov.my",
    "excludeSelectors.remove": [
      "[default-translate]"
    ],
    "excludeSelectors.add": [
      "#clock"
    ]
  },
  {
    "id": "orvehogar",
    "matches": [
      "www.orvehogar.com"
    ],
    "injectedCss": "h3.vtex-product-summary-2-x-productNameContainer{height: unset!important;}"
  },
  {
    "id": "coindesk",
    "matches": [
      "www.coindesk.com"
    ],
    "excludeSelectors.add": [
      "[data-subtitles-container='true']"
    ],
    "mutationExcludeSelectors.add": [
      "[data-subtitles-container='true'] *"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "loadingContainerSelector": ".jw-media",
      "subtitleUrlRegExp": "\\.vtt$",
      "hookType": "xhr"
    }
  },
  {
    "id": "dr",
    "matches": "*.dr.dk",
    "excludeSelectors.add": [
      ".vjs-text-track-display > div",
      "#immersive-translate-caption-window"
    ],
    "mutationExcludeSelectors.add": [
      ".vjs-text-track-display > div *",
      "#immersive-translate-caption-window *"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "subtitleUrlRegExp": "\\.vtt$",
      "videoPlayerSelector": "video",
      "enableHookDownload": true,
      "quickButtonRule": {
        "appendSelector": ".drtv-player-controls__button-row",
        "insertBeforeSelector": ".drtv-player-button__subtitle"
      }
    }
  },
  {
    "id": "nrk",
    "matches": "tv.nrk.no",
    "excludeSelectors.add": [
      "tv-player[data-testid=\"tv-player\"]",
      "#immersive-translate-caption-window"
    ],
    "mutationExcludeSelectors.add": [
      "tv-player[data-testid=\"tv-player\"] *",
      "#immersive-translate-caption-window *"
    ],
    "subtitleRule.add": {
      "type": "webvtt",
      "subtitleUrlRegExp": "\\.webvtt$",
      "videoPlayerSelector": "video",
      "enableHookDownload": true,
      "quickButtonRule": {
        "appendSelector": "#player-controls > div",
        "insertBeforeSelector": "button[type=\"settings-button\"]"
      }
    }
  },
  {
    "id": "mediadelivery",
    "matches": "iframe.mediadelivery.net",
    "excludeSelectors.add": [
      ".plyr__captions",
      "#immersive-translate-caption-window"
    ],
    "mutationExcludeSelectors.add": [
      ".plyr__captions *",
      "#immersive-translate-caption-window *"
    ],
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "domCheckTimeout": 1,
    "subtitleRule.add": {
      "type": "subsrt",
      "subtitleUrlRegExp": "\\.vtt",
      "videoPlayerSelector": "video",
      "loadingContainerSelector": ".plyr__captions",
      "enableHookDownload": true,
      "quickButtonRule": {
        "appendSelector": ".plyr__controls",
        "insertBeforeSelector": "button[data-plyr='captions']"
      }
    }
  },
  {
    "id": "tver",
    "matches": "tver.jp",
    "excludeSelectors.add": [
      "div[class*=\"player_container\"]",
      "#immersive-translate-caption-window"
    ],
    "mutationExcludeSelectors.add": [
      "div[class*=\"player_container\"] *",
      "#immersive-translate-caption-window *"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "hookType": "xhr",
      "subtitleUrlRegExp": "track.*([0-9a-z]{12}\\.vtt|[0-9a-z-]{36}\\?ts=)",
      "videoPlayerSelector": "video",
      "quickButtonRule": {
        "appendSelector": "[class^='VodController_buttons']",
        "insertBeforeSelector": "[class*='VodController_subtitle']"
      },
      "attachRule": {
        "appendSelector": "[class^='PlayerLayout_container']",
        "injectedGlobalCSS": [
          ".vjs-text-track-cue {display:none !important;}"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "aljazeera",
    "matches": "www.aljazeera.com",
    "excludeSelectors.add": [
      "#immersive-translate-caption-window"
    ],
    "mutationExcludeSelectors.add": [
      "#immersive-translate-caption-window *"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "hookType": "xhr",
      "subtitleUrlRegExp": "\\.vtt",
      "videoPlayerSelector": "video",
      "loadingContainerSelector": ".aj-video-player",
      "injectedCss": [
        "#imt-subtitle-loading span { color: #fff !important; }"
      ],
      "quickButtonRule": {
        "appendSelector": ".vjs-control-bar",
        "insertBeforeSelector": ".aj-cc-button"
      }
    }
  },
  {
    "id": "arte",
    "matches": "www.arte.tv",
    "excludeSelectors.add": [
      "#immersive-translate-caption-window"
    ],
    "mutationExcludeSelectors.add": [
      "#immersive-translate-caption-window *"
    ],
    "subtitleRule.add": {
      "type": "webvtt",
      "hookType": "xhr",
      "subtitleUrlRegExp": "\\.vtt",
      "videoPlayerSelector": "video",
      "loadingContainerSelector": ".avp-player",
      "quickButtonRule": {
        "appendSelector": ".avp-controls > .avp-controls__right",
        "insertBeforeSelector": ".avp-language"
      }
    }
  },
  {
    "id": "updraft",
    "matches": "updraft.cyfrin.io",
    "excludeSelectors.add": [
      "#immersive-translate-caption-window"
    ],
    "mutationExcludeSelectors.add": [
      "#immersive-translate-caption-window *"
    ],
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "subtitleRule.add": {
      "type": "webvtt",
      "hookType": "xhr",
      "subtitleUrlRegExp": "\\.vtt",
      "videoPlayerSelector": "video",
      "loadingContainerSelector": "#cyfrin-video-player",
      "quickButtonRule": {
        "appendSelector": "media-control-bar > div:nth-of-type(2)",
        "insertBeforeSelector": "media-control-bar > div:nth-of-type(2) > div:nth-of-type(3)",
        "injectCSS": ".imt-quick-subtitle-pop-content { max-height: unset !important; }"
      }
    },
    "additionalExcludeSelectors.remove": [
      ".notranslate",
      "[translate=no]"
    ],
    "excludeTags.remove": [
      "PRE"
    ]
  },
  {
    "id": "learningSap",
    "matches": "learning.sap.com",
    "excludeSelectors.add": [
      ".playkit-subtitles",
      "#immersive-translate-caption-window"
    ],
    "mutationExcludeSelectors.add": [
      ".playkit-subtitles",
      "#immersive-translate-caption-window *"
    ],
    "subtitleRule.add": {
      "type": "text_track_dynamic",
      "videoPlayerSelector": "video",
      "loadingContainerSelector": ".playkit-overlay-action",
      "quickButtonRule": {
        "appendSelector": ".playkit-controls-container .playkit-right-controls",
        "insertBeforeSelector": ".playkit-controls-container .playkit-control-closed-captions"
      }
    }
  },
  {
    "id": "billboard-com",
    "matches": "www.billboard.com",
    "subtitleRule.add": {
      "type": "text_track_dynamic",
      "videoPlayerSelector": "video[aria-label=\"Connatix video player\"]",
      "loadingContainerSelector": "cnx.cnx-video-wrapper",
      "quickButtonRule": {
        "appendSelector": "cnx-lit-ui-template -> cnx-bottom-bar -> .cnx-ui-bottom-bar-container > slot",
        "insertBeforeSelector": "cnx-lit-ui-template -> cnx-bottom-bar -> cnx-settings-menu, cnx-full-screen-button",
        "ccEnableSelector": "cnx-lit-ui-template -> cnx-bottom-bar -> cnx-captions-menu -> cnx-button[data-id=\"cnx-closed-captions-button\"]"
      }
    }
  },
  {
    "id": "abema-tv",
    "matches": [
      "abema.tv"
    ],
    "subtitleRule.add": {
      "type": "live_attach",
      "videoPlayerSelector": "#fluffy-video-view video",
      "videoSelector": "#fluffy-video-view video",
      "captionContainerSelector": "#fluffy-subtitle-texts-view",
      "loadingContainerSelector": ".c-vod-EpisodePlayerContainer-wrapper",
      "quickButtonRule": {
        "appendSelector": ".com-vod-VideoControlBar__right",
        "insertBeforeSelector": ".com-vod-VideoControlBar__right > .com-vod-VODScreen__button"
      },
      "attachRule": {
        "appendSelector": ".c-vod-EpisodePlayerContainer-screen",
        "injectedGlobalCSS": [
          ".com-vod-VODScreen-subtitle-container {opacity: 0 !important; pointer-events: none !important;}"
        ]
      }
    }
  },
  {
    "id": "whop-com",
    "matches": [
      "whop.com"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "subsrtFormat": "vtt",
      "hookType": "xhr",
      "videoPlayerSelector": "mux-player -> mux-video -> video",
      "loadingContainerSelector": "mux-player",
      "subtitleUrlRegExp": "\\.vtt(?:$|[?#])",
      "quickButtonRule": {
        "appendSelector": "mux-player -> media-theme -> media-control-bar[part='control-bar bottom']",
        "injectCSS": ".imt-quick-subtitle-pop-content {right: 92px !important; min-height: 75px} .logo,.logo svg { height: 18px !important; width: 18px !important;}",
        "injectCSS.add_v.[1.32.3]": ".imt-quick-subtitle-pop-content {min-height: 75px} .logo,.logo svg { height: 18px !important; width: 18px !important;}"
      }
    }
  },
  {
    "id": "feynmanlectures",
    "matches": "www.feynmanlectures.caltech.edu",
    "excludeSelectors.add": [
      ".videoview",
      "#immersive-translate-caption-window"
    ],
    "mutationExcludeSelectors.add": [
      ".videoview",
      "#immersive-translate-caption-window *"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "hookType": "xhr",
      "subtitleUrlRegExp": "\\.vtt",
      "videoPlayerSelector": "video",
      "attachRule": {
        "appendSelector": "#vidwidthsizer > .video > div:nth-of-type(2) > div",
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ],
        "injectedGlobalCSS": [
          ".vjs-text-track-display {display: none;}"
        ]
      },
      "quickButtonRule": {
        "appendSelector": ".vjs-control-bar",
        "insertBeforeSelector": "div.vjs-subs-caps-button"
      }
    }
  },
  {
    "id": "archiveToday",
    "matches": [
      "archive.today",
      "archive.ph",
      "archive.is",
      "archive.md"
    ],
    "excludeSelectors.add": [
      "#HEADER"
    ]
  },
  {
    "id": "arxiv-vanity.com",
    "matches": [
      "www.arxiv-vanity.com"
    ],
    "excludeSelectors.add": [
      ".arxiv-vanity-wrapper"
    ]
  },
  {
    "id": "fibery",
    "matches": [
      "the.fibery.io"
    ],
    "additionalExcludeSelectors.remove": [
      "[translate=no]"
    ],
    "additionalStayOriginalSelectors.add": [
      ".entity-node-view-container"
    ]
  },
  {
    "id": "bardGoogle",
    "matches": "bard.google.com",
    "excludeSelectors": [
      "mat-sidenav",
      "div.capabilities-disclaimer",
      "#cdk-overlay-6",
      "message-actions button",
      ".mdc-button__label .ng-star-inserted",
      ".mdc-list-item__primary-text"
    ],
    "isTranslateTitle": false,
    "excludeTags.add": [
      "mat-tooltip-component"
    ],
    "excludeTags.remove": [
      "BUTTON"
    ]
  },
  {
    "id": "chatGoogle",
    "matches": "chat.google.com",
    "selectors": [
      "[jsname=bgckF]"
    ]
  },
  {
    "id": "gemini.google",
    "matches": "gemini.google.com",
    "injectedCss.add": [
      "[data-test-id=conversation] {height: unset!important;}"
    ]
  },
  {
    "id": "otherGoogle",
    "matches": [
      "*.google.com",
      "dart.dev",
      "*.google",
      "*.googleapis.com"
    ],
    "injectedCss.add": [
      ".scSearchSearch_results_listSearchresultslistsnippet { -webkit-line-clamp:unset;}"
    ],
    "extraInlineSelectors.add": [
      "ms-cmark-node > strong > ms-cmark-node",
      "p ms-cmark-node",
      "span > button"
    ],
    "atomicBlockSelectors.add": [
      "p ms-cmark-node"
    ],
    "additionalExcludeSelectors.add": [
      ".o_35",
      "[style*='Google Symbols']",
      "md-icon-button",
      ".material-symbols-outlined",
      ".cfc-result-card-table",
      ".material-symbols",
      ".gemini-large-text__overlay",
      "code",
      "view-line",
      "#modelSelector",
      ".leaderboard-content",
      "#selected-count",
      "#selected-cat",
      ".GmuOkf,.d8aLif,.JYW4cc"
    ],
    "isTransformPreTagNewLine": true,
    "forceFormatPre": true
  },
  {
    "id": "etymonline",
    "matches": "www.etymonline.com",
    "globalAttributes.add": {
      ".crossreference.notranslate": {
        "class": "crossreference"
      },
      ".foreign.notranslate": {
        "class": "foreign"
      }
    }
  },
  {
    "id": "arxiv",
    "matches": [
      "https://browse.arxiv.org",
      "https://arxiv.org/html/*"
    ],
    "excludeSelectors.add": [
      ".desktop_header",
      "[class*='ltx_lst_language_']",
      "div.package-alerts",
      ".ltx_toclist",
      ".ltx_authors",
      ".ltx_bibliography"
    ],
    "bodyRule.add": {
      "bodySelector": "article",
      "articleSelector": ".ltx_abstract"
    },
    "enableRichTranslate": false,
    "enableRichTranslate.add_v.[1.12.1]": true
  },
  {
    "id": "ar5iv",
    "matches": "ar5iv.labs.arxiv.org",
    "excludeSelectors.add": [
      ".ltx_bibliography",
      ".ltx_tag.ltx_tag_item",
      ".ltx_listing.ltx_lstlisting.ltx_listing",
      ".ltx_eqn_table"
    ],
    "stayOriginalSelectors.add": [
      ".ltx_note"
    ],
    "extraBlockSelectors.add": [
      ".ltx_p"
    ],
    "enableRichTranslate": false,
    "enableRichTranslate.add_v.[1.12.1]": true
  },
  {
    "id": "jstor",
    "matches": "www.jstor.org",
    "excludeMatches": [
      "www.jstor.org/stable/pdf*"
    ],
    "excludeSelectors.add": [
      ".audio-duration",
      "[data-qa='card-item-count']"
    ],
    "globalStyles": {
      ".card__heading": "-webkit-line-clamp:unset;",
      "search-results-vue-pharos-image-card,search-ui-pharos-image-card": "display:flex;",
      "search-results-vue-pharos-link": "display:inline;"
    }
  },
  {
    "id": "tandfonline",
    "matches": "*.tandfonline.com",
    "extraInlineSelectors.add": [
      "span.off-screen"
    ],
    "_comment": "该站点服务器对 pdf 资源做了保护，会严格要求 host 以及 cookie 才会响应 application/pdf 的请求 https://www.tandfonline.com/doi/pdf/10.1111/ajpy.12198"
  },
  {
    "id": "boringreport",
    "matches": [
      "www.boringreport.org"
    ],
    "excludeTags.remove": [
      "BUTTON"
    ]
  },
  {
    "id": "bsky.app",
    "matches": "https://bsky.app",
    "additionalExcludeSelectors.add": [
      "[data-testid^=homeScreenFeedTabs]",
      "[data-testid^=repostCount]",
      "[data-testid^=likeCount]",
      "[data-testid^=quoteCount]",
      "[data-testid^=replyBtn]",
      "[aria-label='View profile']"
    ],
    "likePreSelectors.add": [
      "[data-testid*=postThread] [data-word-wrap]",
      "[data-testid*=feedItem] [data-word-wrap]"
    ],
    "additionalInlineSelectors.add": [
      "a[role=link][href^='/hashtag/']",
      "[data-testid*=postThread] a[role=link]",
      "[data-feed-context] button",
      "[data-feed-context] a[role=link]"
    ],
    "ignoreRichSelectors.add": [
      "[data-testid*=postThread] a[role=link][href^='/hashtag/']",
      "[data-testid*=feedItem] a[role=link][href^='/hashtag/']"
    ],
    "injectedCss.add": [
      ".r-xoduu5 {display:inline!important;}",
      "[style*='-webkit-line-clamp'] {-webkit-line-clamp:unset!important;}"
    ],
    "extraBlockSelectors.remove": [
      "button"
    ],
    "isTransformPreTagNewLine": true,
    "advanceTransformPreTagNewLine": true,
    "isTranslateTitle": false
  },
  {
    "id": "peacocktv",
    "matches": [
      "*.peacocktv.com"
    ],
    "injectedCss": [
      ".video-player__subtitles__line > font,.video-player__subtitles__line:only-child{display:block;}"
    ]
  },
  {
    "id": "jmir",
    "matches": [
      "*.jmir.org"
    ],
    "additionalInlineSelectors.add": [
      ".tooltiptext"
    ],
    "stayOriginalSelectors.add": [
      ".article-content .footers"
    ]
  },
  {
    "id": "smzdm",
    "matches": [
      "www.smzdm.com"
    ],
    "excludeSelectors.add": [
      ".z-highlight",
      ".feed-block-info",
      ".z-feed-foot",
      ".feed-block-descripe",
      "#J_column_tab_box",
      ".crumbs"
    ],
    "globalStyles": {
      ".feed-block-title": "height:unset"
    }
  },
  {
    "id": "xiaohongshu.com",
    "matches": [
      "www.xiaohongshu.com"
    ],
    "blockMinTextCount": 6,
    "blockMinWordCount": 1,
    "excludeSelectors.add": [
      ".author-wrapper",
      ".info",
      ".side-bar",
      ".interactions",
      ".show-more",
      ".bottom-container",
      ".total",
      ".reds-sticky"
    ],
    "globalStyles": {
      "a.title": "-webkit-line-clamp:3"
    }
  },
  {
    "id": "learnopengl",
    "matches": [
      "learnopengl.com"
    ],
    "globalStyles": {
      "function": "position:relative;z-index:1000;"
    }
  },
  {
    "id": "notateslaapp",
    "matches": [
      "www.notateslaapp.com"
    ],
    "extraBlockSelectors.add": [
      ".nav > *"
    ]
  },
  {
    "id": "eightfold",
    "matches": [
      "*.eightfold.ai"
    ],
    "injectedCss": [
      ".flexbox{width:100%}"
    ]
  },
  {
    "id": "chub.ai",
    "matches": [
      "chub.ai"
    ],
    "stayOriginalTags.remove": [
      "CODE"
    ]
  },
  {
    "id": "soundcloud",
    "matches": "soundcloud.com",
    "injectedCss": [
      ".compactTrackListItem {height: unset !important;}"
    ],
    "excludeSelectors.add": [
      ".searchTitle__textContent",
      ".searchOptions__container",
      ".compactTrackListItem__additional",
      ".soundTitle__tagContainer",
      ".searchResultGroupHeading",
      ".sc-ministats-group",
      ".compactTrackList__moreLink",
      ".sound__soundActions"
    ]
  },
  {
    "id": "section.blog.naver.com",
    "matches": "section.blog.naver.com",
    "globalStyles": {
      ".text,.title_post,.text_post,p,strong,div": "-webkit-line-clamp:unset;max-height:unset;height:unset;"
    },
    "extraBlockSelectors.add": [
      ".item",
      ".heading a",
      ".info_find a"
    ],
    "excludeSelectors.add": [
      ".comments",
      ".time"
    ]
  },
  {
    "id": "gradio-app",
    "selectorMatches": "gradio-app",
    "excludeTags.remove": [
      "BUTTON"
    ],
    "additionalExcludeSelectors.add": [
      "[data-testid=\"block-label\"]",
      ".prose h1 + p",
      "#model_selector_md > div > div > span > h3",
      "table",
      ".tabs .md.svelte-8tpqd2.prose > p:nth-child(1)",
      ".tabs h4"
    ],
    "mutationConfig.add": {
      "buildTimeout": 1000,
      "consumeTimeout": 1000
    }
  },
  {
    "id": "hadoop.apache.org",
    "matches": "hadoop.apache.org",
    "excludeSelectors.add": [
      ".xleft",
      ".xright",
      "#navcolumn"
    ]
  },
  {
    "id": "docs.unity3d",
    "matches": "docs.unity3d.com",
    "stayOriginalSelectors": [
      ".tooltip"
    ],
    "mainFrameSelector": [
      ".tooltip > .tooltiptext",
      "body"
    ],
    "injectedCss.add": [
      ".immersive-translate-target-inner .tooltiptext {display: none;}",
      ".immersive-translate-target-inner .tooltip {cursor:pointer;border-bottom:unset;}"
    ]
  },
  {
    "id": "docs.unity.cn",
    "matches": "docs.unity.cn",
    "stayOriginalSelectors": [
      ".tooltip"
    ]
  },
  {
    "id": "pubs.acs.org",
    "matches": "pubs.acs.org",
    "excludeMatches": [
      "pubs.acs.org/doi/pdf*"
    ],
    "mainFrameSelector": [
      ".article_abstract",
      ".article_header-title",
      "[property=\"articleBody\"]"
    ],
    "excludeSelectors.add": [
      ".articleHeaderDropzone2",
      "header"
    ],
    "stayOriginalTags.remove": [
      "SUB",
      "SUP"
    ]
  },
  {
    "id": "typeset.io",
    "matches": "typeset.io",
    "additionalStayOriginalSelectors.remove": [
      "span.notranslate"
    ],
    "additionalExcludeSelectors.remove": [
      ".notranslate",
      "[translate=no]"
    ]
  },
  {
    "id": "transformer-circuits.pub",
    "matches": [
      "transformer-circuits.pub"
    ],
    "stayOriginalSelectors.add": [
      "d-cite"
    ]
  },
  {
    "id": "liquipedia",
    "matches": [
      "liquipedia.net"
    ],
    "excludeSelectors.add": [
      ".carousel-item"
    ]
  },
  {
    "id": "archiveofourown",
    "matches": [
      "archiveofourown.org",
      "ao3-cn.top"
    ],
    "advanceMergeConfig": [
      {
        "condition": "true",
        "advanceConfig": {
          "generalRule": {
            "aiBatchPolicy.add": {
              "sameTextFallback": true,
              "enableArticleTerminology": true
            }
          }
        }
      }
    ],
    "excludeSelectors.add": [
      ".meta,.navigation,.byline,.pagination,.datetime,.stats",
      "#add_comment",
      "#footer",
      ".summary > h3",
      ".notes > h3"
    ],
    "additionalExcludeSelectors.remove": [
      ".notranslate",
      "[translate=no]"
    ],
    "stayOriginalTags.remove": [
      "SUB"
    ],
    "injectedCss.add": [
      "sub {line-height: unset !important;}"
    ],
    "skipBuildContainerSelectors.remove": [
      "em"
    ],
    "longBuildPageLength": 1000
  },
  {
    "id": "bitwarden.com",
    "matches": "bitwarden.com",
    "excludeSelectors.add": [
      ".status-widget__state"
    ]
  },
  {
    "id": "www.ey.com",
    "matches": "www.ey.com",
    "injectedCss.add": [
      ".up-rich-text__container {height: unset!important;}"
    ]
  },
  {
    "id": "yodayo.chat",
    "matches": [
      "https://yodayo.com/*/chat/*"
    ],
    "extraBlockSelectors.add": [
      ".inline-flex span"
    ],
    "aiRule": {
      "messageWrapperSelector": "[class*='space-y-1.5 break-words pr-8']"
    }
  },
  {
    "id": "ipinfo",
    "matches": "ipinfo.io",
    "injectedCss.add": [
      ".text-bali-hai-primary:last-child {display:none!important;}"
    ]
  },
  {
    "id": "help.maxon.net",
    "matches": "help.maxon.net",
    "excludeSelectors.add": [
      "#contentBody"
    ]
  },
  {
    "id": "character.ai",
    "matches": "character.ai",
    "extraInlineSelectors.add": [
      ".auto-content",
      ".auto-content *",
      "#chat-messages > .group:first-child .prose *",
      "#chat-messages > .group:not(:first-child) .font-display *"
    ],
    "atomicBlockSelectors.add": [
      ".auto-content",
      ".auto-content *",
      "#chat-messages > .group:first-child .prose *",
      "#chat-messages > .group:not(:first-child) .font-display *"
    ],
    "injectedCss.add": [
      ".immersive-translate-target-wrapper br {display:none;}",
      "[imt-state=dual] .prose p {margin:0;}"
    ],
    "globalStyles.add": {
      ".swiper,.rah-static,[class*=max-h],.line-clamp-1": "overflow:scroll;-webkit-line-clamp:unset;"
    },
    "advanceMergeConfig": [
      {
        "condition": "true",
        "advanceConfig": {
          "immediateTranslationTextCount": 0
        }
      }
    ],
    "excludeTags.remove": [
      "PRE"
    ],
    "stayOriginalTags.remove": [
      "CODE"
    ],
    "noTranslateRegexp": [
      "c\\.ai"
    ]
  },
  {
    "id": "queenslibrary.org",
    "matches": "queenslibrary.org",
    "injectedCss": [
      "font.notranslate { all: unset!important;}"
    ],
    "excludeSelectors.add": [
      "#Web-QBPL-Menu"
    ],
    "excludeSelectors.replace.[1.24.5]": []
  },
  {
    "id": "ac.nowcoder",
    "matches": "ac.nowcoder.com",
    "excludeTags.remove": [
      "PRE"
    ],
    "excludeSelectors.add": [
      ".answer-module",
      ".question-intr",
      ".language-list",
      ".question-oi"
    ]
  },
  {
    "id": "trankynam",
    "matches": "www.trankynam.com",
    "initialSelectorGlobalAttributes.add": {
      "header": {}
    }
  },
  {
    "id": "chromium",
    "matches": "*.chromium.org",
    "additionalExcludeSelectors.add": [
      "ancestors-breadcrumbs",
      "depth-finder[role='tree']",
      "repository-detail",
      "issue-metadata-sidebar",
      "nav",
      ".bv2-event-user",
      ".b-description-heading",
      "b-attachment-viewer",
      "i"
    ],
    "injectedCss.add": [
      "font svg {display:none;}"
    ]
  },
  {
    "id": "noRichTranslate",
    "matches": [
      "www.omim.org",
      "*.nisanyanadlar.com",
      "www.360doc.cn"
    ],
    "enableRichTranslate": false
  },
  {
    "id": "longPage",
    "matches": [
      "neuralnetworksanddeeplearning.com",
      "www.alphapolis.co.jp",
      "sive.rs"
    ],
    "longBuildPageLength": 1000
  },
  {
    "id": "ffmpeg",
    "matches": "ffmpeg.org",
    "excludeSelectors.add": [
      ".memproto",
      ".memtitle"
    ]
  },
  {
    "id": "podcasts",
    "matches": "podcasts.apple.com",
    "injectedCss.add": [
      ".multiline-clamp { display: flex!important;flex-direction: column; }",
      ".headings__title,.powerswoosh__title,[data-testid=truncate-text] {-webkit-line-clamp:unset!important;}",
      ".show-artwork {height:fit-content!important;}",
      ".powerswoosh__lockup-details-container,.powerswoosh__chin,[data-testid=amp-review__text] {max-height:unset!important;height:unset!important;}",
      ".episode-hero__overlay {overflow:auto!important;}",
      "ul .multiline-clamp {display:unset!important;}"
    ],
    "excludeSelectors.add": [
      ".detailed-play-button-wrapper"
    ]
  },
  {
    "id": "duolingo",
    "matches": "www.duolingo.com",
    "likePreSelectors.add": [
      "._3gSoe._35mGI"
    ],
    "isTransformPreTagNewLine": true,
    "enableRichTranslate": false
  },
  {
    "id": "sp-codeSites",
    "matches": "docs.wxwidgets.org",
    "additionalExcludeSelectors.add": [
      ".doxygen-awesome-fragment-wrapper"
    ],
    "injectedCss.add": [
      ".textblock p > font{display:flex;}"
    ]
  },
  {
    "id": "wayfair",
    "matches": "www.wayfair.com",
    "injectedCss.add": [
      "[data-enzyme-id=\"Collapse-Collapsible\"] {height:unset!important;}"
    ]
  },
  {
    "id": "sphinx-rtd-theme",
    "selectorMatches": [
      ".wy-nav-side"
    ],
    "excludeSelectors": [
      "header[default-translate]",
      "footer[default-translate]",
      "dt"
    ],
    "stayOriginalSelectors.add": [
      ".math.notranslate"
    ]
  },
  {
    "id": "arenascan",
    "matches": [
      "arenascan.com",
      "luvyaa.my.id"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "#readerarea img"
      ],
      "inValidSrcRegex": [
        ".svg"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ]
    }
  },
  {
    "id": "hentai.name",
    "matches": [
      "www.hentai.name"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "#image-container img"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ],
      "loadingSelectors": [
        "#image-container"
      ]
    }
  },
  {
    "id": "dlsite",
    "matches": [
      "*.dlsite.com"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "opImageType": "append",
      "urlFetchType": "canvasArgs",
      "imageSelectors": [
        "[class*=\"_page_container\"] img",
        "[class*=\"imageViewerRender\"] canvas[data]",
        ".area-main img",
        "#main li>img",
        "ul.contents-img li > img",
        ".work_parts_multitype_item img"
      ],
      "injectedCss": "#immersiveTranslateImgLoading { z-index:999 !important; }",
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "imtAndroid",
        "imtIOS"
      ]
    }
  },
  {
    "id": "a-i-manga.com",
    "matches": [
      "a-i-manga.com"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "img.transition-opacity"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari"
      ]
    }
  },
  {
    "id": "manhuaus.com",
    "matches": [
      "manhuaus.com",
      "manhuahot.com"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "div.page-break > img"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari"
      ]
    }
  },
  {
    "id": "toondex",
    "matches": "toondex.co",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "img[id*='row']"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari"
      ]
    }
  },
  {
    "id": "jestful",
    "matches": [
      "jestful.net"
    ],
    "imageRule.add_v.[1.14.9]": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "#list-imga > p img"
      ],
      "platforms": [
        "chrome"
      ]
    }
  },
  {
    "id": "manwadd",
    "matches": [
      "manwadd.cc",
      "manwadb.cc",
      "manwadb.xyz",
      "manwath.cc",
      "manwa.me",
      "manwa*.*"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".img-content img"
      ],
      "inValidSrcRegex": [
        "imagecover3.jpg"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ]
    }
  },
  {
    "id": "saucemanhwa",
    "matches": [
      "saucemanhwa.com",
      "saucemanhwa.org"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".chapter-content img",
        ".image-item img"
      ],
      "injectedCss": ".imt-image-status {top:5%!important;}",
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari"
      ]
    }
  },
  {
    "id": "kaijimanga",
    "matches": [
      "w9.kaijimanga.com",
      "rawfree.*",
      "failurframe.com/comic/*"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".entry-content img"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari"
      ]
    }
  },
  {
    "id": "mangakoinu",
    "matches": "www.mangakoinu.com",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".more-box img"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari"
      ]
    }
  },
  {
    "id": "comicmanga",
    "matches": "comicmanga.cc",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".images-chapter img"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari"
      ]
    }
  },
  {
    "id": "mangajikan",
    "matches": "www.mangajikan.com",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".more-box img"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari"
      ]
    }
  },
  {
    "id": "manhwaden",
    "matches": "www.manhwaden.com",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".read-container p img"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari"
      ]
    }
  },
  {
    "id": "sololevelingmangafree",
    "matches": "www.sololevelingmangafree.com",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".entry-inner p img"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari"
      ]
    }
  },
  {
    "id": "dvamh-vzwp7",
    "matches": [
      "dvamh-vzwp7.top"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "#default-tab-thumbnail img"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ],
      "loadingSelectors": [
        "p"
      ]
    }
  },
  {
    "id": "followis",
    "matches": [
      "https://app.follow.is/feeds/*"
    ],
    "isTranslateTitle": false,
    "excludeSelectors.add": [
      ".bg-native",
      "main > div > div.h-full:first-child span"
    ],
    "injectedCss.add": [
      "[class*='line-clamp'] {-webkit-line-clamp:unset;}"
    ]
  },
  {
    "id": "svelte",
    "matches": [
      "svelte.dev/docs/*",
      "learn.svelte.dev"
    ],
    "selectors": [
      ".text"
    ]
  },
  {
    "id": "gitpod",
    "matches": "www.gitpod.io/docs/*",
    "selectors": [
      ".content-docs"
    ]
  },
  {
    "id": "service-now",
    "matches": "*.service-now.com",
    "selectors": [
      "article",
      ".email-content",
      "section"
    ]
  },
  {
    "id": "realpython",
    "matches": "realpython.com",
    "selectors": [
      "h1",
      "h2",
      ".my-0",
      ".my-1",
      ".article-body",
      "table-of-contents",
      "#disqus_recommendations"
    ]
  },
  {
    "id": "casino",
    "matches": "www.casino.org",
    "excludeSelectors.add": [
      ".material-symbols-outlined"
    ],
    "repeatTranslateNum": 4
  },
  {
    "id": "wisdom",
    "matches": "wisdom.nec.com",
    "injectedCss.add": [
      "a > font {width: max-content;}"
    ]
  },
  {
    "id": "palcy",
    "matches": "palcy.jp",
    "imageRule.add": {
      "enable": true,
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ],
      "type": "manga",
      "imageSelectors": [
        "ul.pages li img"
      ],
      "loadingSelectors": [
        "li"
      ]
    }
  },
  {
    "id": "xbato",
    "matches": "xbato.com",
    "imageRule.add": {
      "enable": true,
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ],
      "type": "manga",
      "injectedCss": ".imt-loading {z-index:999 !important;}",
      "imageSelectors": [
        "div[name=\"image-items\"] img",
        "#viewer div img"
      ]
    }
  },
  {
    "id": "comic.pixiv.net",
    "matches": [
      "comic.pixiv.net"
    ],
    "imageRule.add": {
      "enable": true,
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "safari",
        "imtAndroid",
        "imtIOSNew"
      ],
      "type": "manga",
      "backgroundImgSelectors": [
        "div[id*='page-']"
      ]
    }
  },
  {
    "id": "comic-store-viewer.pixiv.net",
    "matches": "comic-store-viewer.pixiv.net",
    "imageRule.add_v.[1.32.3]": {
      "enable": true,
      "type": "manga",
      "opImageType": "append",
      "imageSelectors": [
        "#renderer .currentScreen canvas:not(.imt-img)"
      ],
      "mangaRefreshSelectors": [
        "#pageSliderCounter"
      ]
    }
  },
  {
    "id": "www.comico.jp",
    "matches": "www.comico.jp",
    "imageRule.add": {
      "enable": true,
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "safari",
        "imtAndroid",
        "imtIOSNew"
      ],
      "type": "manga",
      "backgroundImgSelectors": [
        "div[id*='objectFit_viewerImg']"
      ]
    }
  },
  {
    "id": "hentaipaw",
    "matches": [
      "hentaipaw.com",
      "ja.hentaipaw.com"
    ],
    "imageRule.add": {
      "enable": true,
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari"
      ],
      "type": "manga",
      "imageSelectors": [
        ".yarl__carousel img",
        ".yarl__container .yarl__fullsize  img"
      ]
    }
  },
  {
    "id": "mn4u",
    "matches": "mn4u.net",
    "imageRule.add": {
      "enable": true,
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari"
      ],
      "type": "manga",
      "imageSelectors": [
        "#list-imga img"
      ]
    }
  },
  {
    "id": "img-ob-src",
    "matches": [
      "imhentai.xxx",
      "www.webtoons.com",
      "m.webtoons.com",
      "about.webtoon.com"
    ],
    "injectedCss.add": [
      ".immersive-translate-target-wrapper {font-size: initial;}"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".next_img img",
        ".viewer_img img"
      ],
      "enableImageSrcObserver": true,
      "inValidSrcRegex": [
        "bg_transparency.png"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ]
    }
  },
  {
    "id": "18comic",
    "matches": [
      "18comic.vip"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "urlFetchType": "canvasArgs",
      "intersectionRootMargin": "0px 0px 100% 0px",
      "imageSelectors": [
        ".scramble-page canvas[data]",
        ".scramble-page img"
      ],
      "inValidSrcRegex": [
        "blank.jpg"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari"
      ]
    }
  },
  {
    "id": "lezhin",
    "matches": [
      "lezhin.com",
      "www.lezhin.com"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "opImageType": "append",
      "urlFetchType": "canvasArgs",
      "imageSelectors": [
        "div[class*='scrollViewCut'] img:not(.imt-img)",
        "div[class*='scrollViewCut'] canvas[data]",
        "div[data-cut-index] img:not(.imt-img)",
        "div[data-cut-index] canvas[data]",
        ".scroll-view > div > img:not(.imt-img)"
      ],
      "intersectionRootMargin": "0px",
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "imtAndroid",
        "safari"
      ]
    }
  },
  {
    "id": "beltoon",
    "matches": "www.beltoon.jp/viewer/*",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "#__next .printView div[width][height] > img[alt='image']"
      ],
      "platforms": [
        "other",
        "chrome",
        "imtIOSNew",
        "imtAndroid",
        "safari"
      ]
    }
  },
  {
    "id": "ridibooks-preview",
    "matches": "ridibooks.com/books/*/preview*",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "div[role='region'] img[src^='blob:']"
      ],
      "mangaRefreshSelectors": [
        ".page_num"
      ],
      "opImageType": "replace",
      "platforms": [
        "other",
        "chrome",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ]
    }
  },
  {
    "id": "ridibooks.com",
    "matches": "ridibooks.com",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "div[role='region'] img[data-index]",
        "#viewer img[data-index]",
        ".event_detail_top img",
        "img.wv-sio22q"
      ],
      "opImageType": "append",
      "inValidSrcRegex": [
        "data:image/svg"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ]
    }
  },
  {
    "id": "www.sunday-webry.com",
    "matches": "www.sunday-webry.com",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "urlFetchType": "canvasArgs",
      "opImageType": "append",
      "imageSelectors": [
        "canvas.page-image"
      ]
    }
  },
  {
    "id": "ynjn",
    "matches": "ynjn.jp",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "urlFetchType": "canvasArgs",
      "opImageType": "append",
      "imageSelectors": [
        ".swiper-slide canvas[data]"
      ]
    },
    "platforms": [
      "chrome",
      "firefox",
      "safari",
      "imtAndroid",
      "imtIOSNew"
    ]
  },
  {
    "id": "mangalove",
    "matches": "mangalove.me",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "urlFetchType": "canvasArgs",
      "opImageType": "append",
      "imageSelectors": [
        ".imgWrap canvas[data]"
      ]
    },
    "platforms": [
      "chrome",
      "firefox",
      "safari",
      "imtAndroid",
      "imtIOSNew"
    ]
  },
  {
    "id": "www.acrobiosystems.com",
    "matches": "www.acrobiosystems.com",
    "injectedCss.add": [
      ".productDetialDetail .productLink {overflow: hidden;}",
      ".productDetialDetail .productLink .box a {display: flex; justify-content: center; white-space: nowrap;}"
    ]
  },
  {
    "id": "www.metacritic.com",
    "matches": "www.metacritic.com",
    "injectedCss.add": [
      ".c-finderProductCard_info .c-finderProductCard_meta {display: block;}"
    ]
  },
  {
    "id": "motrix.app",
    "matches": "motrix.app",
    "excludeSelectors.add": [
      ".download-section__right .el-tabs__nav"
    ],
    "additionalExcludeSelectors.add": [
      ".download-section__right .el-tabs__nav"
    ]
  },
  {
    "id": "t1.xtoon2.com",
    "matches": "t1.xtoon2.com",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "img.lazy-read"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ],
      "inValidSrcRegex": [
        "/bg_detail.png"
      ]
    }
  },
  {
    "id": "t1.xtoon365.com",
    "matches": "t1.xtoon365.com",
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        "img.lazy-read"
      ],
      "platforms": [
        "other",
        "chrome",
        "firefox",
        "imtIOSNew",
        "safari",
        "imtAndroid"
      ],
      "inValidSrcRegex": [
        "/bg_detail.png"
      ]
    }
  },
  {
    "id": "xgo",
    "matches": [
      "www.xgo.ing"
    ],
    "excludeTags.remove": [
      "PRE"
    ],
    "injectedCss.add": "[class*='line-clamp']{-webkit-line-clamp:unset !important;}"
  },
  {
    "id": "nebula.starbreeze",
    "matches": [
      "https://nebula.starbreeze.com/support"
    ],
    "injectedCss.add": [
      "main section>div {overflow-y:scroll !important;}",
      "main section>div::-webkit-scrollbar {display: none;width: 0px;background: transparent;}"
    ]
  },
  {
    "id": "app.schildi.chat",
    "matches": "app.schildi.chat",
    "additionalExcludeSelectors.remove": [
      ".notranslate",
      "[translate=no]"
    ],
    "excludeSelectors.add": [
      ".mx_DisambiguatedProfile",
      ".mx_MessageTimestamp",
      ".mx_EventTile_avatar"
    ]
  },
  {
    "id": "balthild",
    "matches": "balthild.github.io",
    "injectedCss.add": [
      ".immersive-translate-target-wrapper [aria-hidden=true] {display:none;}"
    ],
    "_comment": "暂时单独给他处理公式"
  },
  {
    "id": "csust",
    "matches": "tsgvpn2.csust.edu.cn",
    "injectedCss.add": [
      "h2 {font-size:unset;}"
    ]
  },
  {
    "id": "otter.ai",
    "matches": "otter.ai",
    "richMoreWordPercent": 0.8
  },
  {
    "id": "translation-font-size-unset",
    "matches": [
      "m.yxlady.com",
      "web3.fireverseai.com"
    ],
    "injectedCss.add": [
      ".immersive-translate-target-wrapper, .immersive-translate-target-translation-block-wrapper, .immersive-translate-target-inner { font-size: unset; }"
    ]
  },
  {
    "id": "curseforge",
    "matches": "www.curseforge.com",
    "globalStyles": {
      ".project-card": "height:unset;grid-template-rows: auto auto auto auto;",
      ".project-card .description": "height:unset;-webkit-line-clamp:unset;",
      "ul.details-list": "height:unset;",
      ".project-card .categories": "height:unset;"
    }
  },
  {
    "id": "justia",
    "matches": "supreme.justia.com",
    "longBuildPageLength": 10000
  },
  {
    "id": "ml4vis",
    "matches": "ml4vis.github.io",
    "globalStyles.add": {
      ".jss42": "height:unset;",
      ".jss44": "max-height:unset;"
    },
    "excludeSelectors.add": [
      ".jss45"
    ]
  },
  {
    "id": "www.dgl.ai",
    "matches": [
      "www.dgl.ai"
    ],
    "excludeSelectors.add": [
      "header"
    ]
  },
  {
    "id": "monmouthcoffee",
    "matches": "www.monmouthcoffee.*",
    "additionalExcludeSelectors.add": [
      "#basket"
    ]
  },
  {
    "id": "sakura",
    "matches": "www.sakura.fm",
    "injectedCss.add": [
      ".immersive-translate-target-wrapper, .immersive-translate-target-translation-block-wrapper, .immersive-translate-target-inner span { opacity: 1 !important; }"
    ]
  },
  {
    "id": "mocharymethod.com",
    "matches": "beta.mocharymethod.com",
    "additionalExcludeSelectors.remove": [
      "h4 br"
    ]
  },
  {
    "id": "bb-rich",
    "selectorMatches": [
      "bb-rich-text-editor",
      ".bb-editor-root",
      ".ql-editor"
    ],
    "likePreSelectors.add": [
      "bb-rich-text-editor",
      ".bb-editor-wrapper",
      ".bb-editor-root",
      "#content-tab-panel-content"
    ],
    "buildContainerSelectors.add": [
      "bb-rich-text-editor",
      ".bb-editor-wrapper",
      ".bb-editor-root",
      "#content-tab-panel-content"
    ],
    "repeatTranslateNum": 1,
    "isTransformPreTagNewLine": true,
    "forceFormatPre": true
  },
  {
    "id": "jddonline.com",
    "matches": "jddonline.com",
    "injectedCss.add": [
      ".article-body {column-count:unset;-webkit-column-count:unset;-moz-column-count:unset;}"
    ]
  },
  {
    "id": "novel-site",
    "matches": [
      "www.piaotia.com",
      "www.zhenhunxiaoshuo.com",
      "www.hetushu.com"
    ],
    "injectedCss.add": [
      ".centent ul { display: flex; }",
      ".centent ul li { height: unset !important; float: none !important; }",
      "article.excerpt { white-space: normal !important; overflow: visible !important; }",
      "#dir dd { white-space: normal !important; overflow: visible !important; }"
    ]
  },
  {
    "id": "xianqihaotianmi",
    "matches": "www.xianqihaotianmi.org",
    "injectedCss.add": [
      ".list-charts { display: flex; flex-wrap: wrap; }",
      ".list-charts li { white-space: normal !important; overflow: visible !important; }"
    ]
  },
  {
    "id": "sobqg",
    "matches": "www.sobqg.com/book/*",
    "injectedCss.add": [
      "#volumes { display: flex; flex-wrap: wrap; }",
      "a.ell { white-space: normal !important; overflow: visible !important; }",
      "#hot .g_book > a > h3 { white-space: normal; overflow: visible; max-height: none; -webkit-line-clamp: none; }",
      "#hot .g_book { height: 330px; }"
    ],
    "additionalExcludeSelectors.add": [
      "#hot .g_book > span"
    ]
  },
  {
    "id": "luminousfox",
    "matches": "www.luminousfox.com/book/*",
    "injectedCss.add": [
      "#detail_chapter .box_content ul li { height: unset !important; overflow: visible !important; }"
    ]
  },
  {
    "id": "doupocangqiong",
    "matches": "www.doupocangqiong.org",
    "injectedCss.add": [
      "#play_0 ul { display: grid; grid-template-columns: repeat(3, 1fr); }",
      "#play_0 ul li { height: unset !important; }"
    ]
  },
  {
    "id": "proko",
    "matches": "www.proko.com",
    "additionalExcludeSelectors.add": [
      ".proko-preview-statistic-wrap",
      ".lesson-instructors-wrap",
      ".proko-comments-item-title",
      ".proko-comments-item-vote-wrap",
      ".course-card__details .border-outline075",
      ".category-subscribe"
    ],
    "likePreSelectors.add": [
      "[prokoexpansiontextblock]"
    ],
    "isTransformPreTagNewLine": true,
    "injectedCss.add": [
      ".lesson-video-banner-skip,.lesson-title,.lesson-content,.course-card__details {height:unset!important;overflow:scroll;}",
      "[class*='clamp'],.course-card__description{-webkit-line-clamp:unset!important;overflow:unset;}",
      "proko-button{z-index:1;}",
      ".truncate {white-space:unset;}"
    ]
  },
  {
    "id": "vodtw",
    "matches": [
      "www.vodtw.com/book/*"
    ],
    "injectedCss.add": [
      "dl { display: flex; flex-wrap: wrap; }",
      "dl dd { white-space: normal !important; overflow: visible !important; }",
      "#info p { height: unset !important; }"
    ],
    "atomicBlockSelectors": [
      "dl dd a"
    ]
  },
  {
    "id": "jwxs",
    "matches": [
      "www.jwxs.org/book/*"
    ],
    "injectedCss.add": [
      "#list dd { height: 5rem !important; line-height: unset !important; }",
      ".readbtn .chapterlist { margin: unset !important; }"
    ]
  },
  {
    "id": "ceros",
    "matches": [
      "view.ceros.com"
    ],
    "injectedCss.add": [
      ".page-object.group > .page-object.text > p { height: 100% !important; overflow: auto !important; }"
    ]
  },
  {
    "id": "readthedocs",
    "matches": "*.readthedocs.*",
    "additionalExcludeSelectors.remove": [
      ".notranslate"
    ]
  },
  {
    "id": "surveymyopinion.researchnow",
    "matches": "surveymyopinion.researchnow.com",
    "globalAttributes.add": {
      "option": {
        "label": ""
      }
    }
  },
  {
    "id": "xfiction.org",
    "matches": "*.xfiction.org",
    "mainFrameSelector.add": [
      "tw-story"
    ]
  },
  {
    "id": "new.rayyan.ai",
    "matches": "new.rayyan.ai",
    "additionalExcludeSelectors.remove": [
      ".notranslate",
      "[translate=no]"
    ]
  },
  {
    "id": "aliexpress",
    "matches": "*.aliexpress.*",
    "injectedCss.add": [
      "[class*='multi--title'],.G7dOC {-webkit-line-clamp:unset;}"
    ],
    "excludeSelectors.add": [
      "[class*='multi--price']"
    ],
    "additionalExcludeSelectors.remove": [
      ".notranslate",
      "[translate=no]"
    ]
  },
  {
    "id": "journals.aps",
    "matches": "journals.aps.*",
    "enableRichTranslate": false,
    "additionalInlineSelectors.add": [
      "[class*='article'] button"
    ],
    "stayOriginalSelectors.add": [
      "button"
    ]
  },
  {
    "id": "mobalytics",
    "matches": "mobalytics.gg",
    "extraInlineSelectors.add": [
      "p.xlpi6m9.x5qbwci.xw7yly9 span span"
    ],
    "buildContainerSelectors.add": [
      ".x1n2onr6.xb3r6kr.x5yr21d"
    ],
    "likePreSelectors.add": [
      ".x1n2onr6.xb3r6kr.x5yr21d .x5yr21d"
    ],
    "isTransformPreTagNewLine": true,
    "forceFormatPre": true
  },
  {
    "id": "JeffyReader",
    "selectorMatches": [
      "br-span"
    ],
    "atomicBlockSelectors.add": [
      "br-span"
    ]
  },
  {
    "id": "batchUnlimitHeight",
    "matches": [
      "https://www.inven.co.kr/*",
      "*.grandefratello.mediaset.*"
    ],
    "injectedCss.add": [
      "li {height:unset!important;}",
      ".big_box,article .text,article .title {height:unset!important;}"
    ]
  },
  {
    "id": "codeium",
    "matches": "codeium.com",
    "excludeSelectors.add": [
      "nav a[class*=C]"
    ]
  },
  {
    "id": "book-douban",
    "matches": "book.douban.com",
    "excludeTags.remove": [
      "PRE"
    ],
    "excludeSelectors.add": [
      "a.author-name",
      "p.user > a",
      "div#collector > div > div[style^='padding-left'] > a",
      "div#info a"
    ]
  },
  {
    "id": "taobao",
    "matches": "*.taobao.com",
    "excludeSelectors.add": [
      ".text-price",
      ".ww_conversation_list",
      ".good-entershop",
      ".site-nav-bd-l"
    ],
    "excludeTags.remove": [
      "PRE"
    ]
  },
  {
    "id": "graphcore",
    "matches": "www.graphcore.ai",
    "excludeSelectors.add": [
      ".morph"
    ]
  },
  {
    "id": "next_westlaw",
    "matches": "*.next.westlaw.com",
    "stayOriginalSelectors.add": [
      ".docLinkWrapper"
    ]
  },
  {
    "id": "digitaltrends",
    "matches": "www.digitaltrends.com",
    "extraBlockSelectors.add": [
      ".b-mem-post__title"
    ],
    "injectedCss.add": [
      ".b-mem__inner .b-mem-post:first-child h3{-webkit-line-clamp: 2;}",
      ".b-mem__inner .b-mem-post:first-child .b-mem-post__excerpt{display:inline;}"
    ]
  },
  {
    "id": "jscires",
    "matches": "jscires.org",
    "extraBlockSelectors.add": [
      ".jatsauthtab_title"
    ],
    "excludeSelectors.add": [
      ".jatsa_contrib_info"
    ]
  },
  {
    "id": "vaseven",
    "matches": "www.vaseven.com",
    "excludeSelectors.add": [
      ".et_pb_main_blurb_image"
    ]
  },
  {
    "id": "qidian",
    "matches": "www.qidian.com",
    "extraBlockSelectors.add": [
      ".type-list a"
    ]
  },
  {
    "id": "alphaxiv",
    "matches": "www.alphaxiv.org",
    "likePreSelectors.add": [
      "[data-sentry-component=Response]",
      "[data-sentry-component=HTMLRenderer]"
    ],
    "injectedCss.add": [
      "[class*=line-clamp] {-webkit-line-clamp:unset;}"
    ],
    "isTransformPreTagNewLine": true,
    "forceFormatPre": true
  },
  {
    "id": "nexusmods",
    "matches": [
      "www.nexusmods.com"
    ],
    "excludeMatches": [
      "https://www.nexusmods.com/games/*"
    ],
    "skipBuildContainerSelectors.remove": [
      "em"
    ],
    "injectedCss.add": [
      "[class*='line-clamp-'] {-webkit-line-clamp: unset!important; max-height: unset!important;}"
    ],
    "_comment": "适合仅译文模式翻译"
  },
  {
    "id": "sp.nexusmods",
    "selectorMatches": ".next-container section [data-lexical-editor]",
    "likePreSelectors.add": [
      ".next-container section"
    ],
    "buildContainerSelectors.add": [
      ".next-container section"
    ],
    "injectedCss.add": [
      "[class*='line-clamp'] {-webkit-line-clamp:unset!important;}"
    ],
    "forceFormatPre": true,
    "isTransformPreTagNewLine": true,
    "_comment": "nexusmods 部分区域会自动清除译文，建议手动翻译，插件针对性做过处理。自动翻译无法翻译这部分区域"
  },
  {
    "id": "ollama",
    "matches": "ollama.com",
    "excludeSelectors.add": [
      "#file-explorer",
      "span[x-test-search-response-title]",
      "a[x-test-model-name]",
      "span[x-test-size]",
      "span[x-test-capability]"
    ]
  },
  {
    "id": "ya.ru",
    "matches": "ya.ru",
    "immediatelyInjectedCss": [
      ".MMImage-Origin {display:none;}",
      ".MMImageContainer,.MMImageContainer > img {pointer-events:unset!important;}"
    ],
    "imageRule.add": {
      "enableImageSrcObserver": true
    }
  },
  {
    "id": "swaycloud",
    "matches": "sway.cloud.microsoft",
    "injectedCss.add": [
      ".text_wrapper ul li {max-height:unset!important;}",
      ".container {overflow:scroll;}"
    ]
  },
  {
    "id": "rubyonrails",
    "matches": "api.rubyonrails.org",
    "preTranslateLimiter.add": {
      "side.selectors": [
        ".tree .content > h1"
      ]
    }
  },
  {
    "id": "teacherspayteachers",
    "matches": "www.teacherspayteachers.com/browse/*",
    "injectedCss.add": [
      ".ProductRowCard-module__cardTitleLink--YPqiC { display:unset !important; }"
    ]
  },
  {
    "id": "gothamist",
    "matches": "gothamist.com",
    "skipDynamicMarkSelectors": [
      "[data-spotim-module=conversation]"
    ]
  },
  {
    "id": "claudeartifacts",
    "matches": "claudeartifacts.com",
    "excludeSelectors": [
      "h1"
    ],
    "additionalExcludeSelectors.add": [
      "h3 + span.rounded-full",
      "[class='p-6 pt-0 flex justify-between items-center']",
      "[class='text-xs text-gray-500']"
    ],
    "globalStyles": {
      ".line-clamp-3": "-webkit-line-clamp: unset"
    }
  },
  {
    "id": "1password",
    "matches": "*.1password.com",
    "additionalExcludeSelectors.add": [
      ".secret-key"
    ]
  },
  {
    "id": "descript",
    "matches": "www.descript.com",
    "additionalExcludeSelectors.add": [
      "h1.home-hero"
    ],
    "injectedCss.add": [
      ".immersive-translate-target-wrapper, .immersive-translate-target-wrapper *{color:unset!important;}"
    ]
  },
  {
    "id": "law.mit.edu",
    "matches": "law.mit.edu",
    "injectedCss.add": [
      "@media screen and (min-width: 768px) { .pub-header-theme-light {top:-80% !important;} }"
    ],
    "additionalExcludeSelectors.remove": [
      ".notranslate",
      "[translate=no]"
    ]
  },
  {
    "id": "nextjs",
    "matches": "nextjs.org",
    "injectedCss.add": [
      "[imt-state=dual] .styled-scrollbar ul li ul li ul li ul li a {white-space:nowrap!important;}",
      "[imt-state=dual] .styled-scrollbar ul li font.immersive-translate-target-wrapper {text-align: right;width: 100%;}"
    ]
  },
  {
    "id": "noon",
    "matches": "www.noon.com",
    "injectedCss.add": [
      "[class*='ProductDetailsSection'] {-webkit-line-clamp:unset!important;}",
      "[class*='title'] {-webkit-line-clamp:unset!important;}"
    ],
    "additionalExcludeSelectors.add": [
      "[class*='priceContainer']",
      "[class*='ProductImageFooter']",
      "[class*='Nudges_nudges']"
    ]
  },
  {
    "id": "klibs",
    "matches": "klibs.io",
    "injectedCss.add": [
      "[class*='styles_card'] {height:unset!important; -webkit-line-clamp:unset!important; max-height:unset!important;}"
    ],
    "additionalExcludeSelectors.add": [
      "[class*='styles_footerWrapper']",
      "[class*='styles_searchFilterContainerWrapper']",
      "[class*='styles_headingWrapper']",
      "[class*='styles_navigation']",
      "[class*='styles_rightSideColumnWrapper']",
      ".breadcrumb"
    ]
  },
  {
    "id": "androidpolice",
    "matches": "www.androidpolice.com",
    "additionalExcludeSelectors.add": [
      ".author",
      ".w-total-info",
      ".images-header-menu-list",
      ".w-display-card-details",
      ".w-display-card-extra"
    ],
    "injectedCss.add": [
      ".display-card-title,.display-card-title * {height:unset!important;-webkit-line-clamp:unset!important;}"
    ],
    "initialSelectorGlobalAttributes": {}
  },
  {
    "id": "turboscribe",
    "matches": [
      "turboscribe.ai"
    ],
    "buildContainerSelectors.add_v.[1.15.11]": [
      "#page-root"
    ],
    "additionalExcludeSelectors.remove": [
      ".notranslate",
      "[translate=no]"
    ],
    "richMoreWordPercent": 0.5
  },
  {
    "id": "doc2x",
    "matches": [
      "doc2x.com",
      "doc2x.noedgeai.com"
    ],
    "additionalExcludeSelectors.add": [
      "#md-scroll-top-dom"
    ]
  },
  {
    "id": "mathsisfun",
    "matches": "www.mathsisfun.com",
    "stayOriginalSelectors.add": [
      ".center.large"
    ]
  },
  {
    "id": "trade",
    "matches": [
      "axiom.trade"
    ],
    "extraInlineSelectors.add": [
      "[class^=tweet-body_root]"
    ],
    "atomicBlockSelectors.add": [
      "[class^=tweet-body_root] *"
    ]
  },
  {
    "id": "trade-padre",
    "matches": [
      "trade.padre.gg"
    ],
    "richMoreWordPercent": "0.5"
  },
  {
    "id": "pytorch",
    "matches": [
      "pytorch.org"
    ],
    "additionalExcludeSelectors.add": [
      ".hello-bar",
      "[data-cta='join']"
    ],
    "excludeSelectors.add": [
      ".with-down-arrow"
    ]
  },
  {
    "id": "1688",
    "matches": [
      "www.1688.com"
    ],
    "injectedCss.add": [
      "[class^='defaultSubNav'],[class^='loginButton'] {height:unset!important;}",
      "[data-tracker='category'] > font {white-space:nowrap!important;}"
    ]
  },
  {
    "id": "seller-tiktok",
    "matches": [
      "seller.tiktok.com",
      "seller-my.tiktok.com",
      "affiliate.tiktok*.com",
      "seller.*.tiktokglobalshop.com",
      "seller.tiktokshopglobalselling.com"
    ],
    "additionalExcludeSelectors.remove": [
      ".notranslate",
      "[translate=no]"
    ],
    "excludeSelectors.add": [
      ".chatd-message-userName"
    ],
    "excludeTags.remove": [
      "PRE"
    ],
    "injectedCss.add": [
      "[data-tid=m4b_overflow_text_multiply] {height:unset!important;-webkit-line-clamp:unset!important;}",
      "[class^=replyText],[class^=productItemInfo],[class^=reviewText] {height:unset!important;-webkit-line-clamp:unset!important;}"
    ]
  },
  {
    "id": "ccfddl",
    "matches": "ccfddl.com",
    "excludeSelectors.add": [
      "div.conf-timer > span[style^='color: black']"
    ]
  },
  {
    "id": "pinboard",
    "matches": "pinboard.in",
    "injectedCss.add": [
      "div.blurb_box,div.homepage_quad,div.signup_button {height: unset !important;}",
      "h1.magazine_title {line-height: 1.2 !important;}"
    ]
  },
  {
    "id": "flutterDev",
    "matches": [
      "docs.flutter.dev",
      "docs.flutter.cn"
    ],
    "excludeSelectors.add": [
      "span.expander.material-symbols",
      "span.material-symbols"
    ]
  },
  {
    "id": "dtmstation",
    "matches": "www.dtmstation.com",
    "injectedCss.add": [
      ".entry-card-title,.entry-card-snippet { -webkit-line-clamp: unset!important; max-height: unset!important;}"
    ],
    "extraBlockSelectors.add": [
      ".entry-card-title,.entry-card-snippet"
    ]
  },
  {
    "id": "docs-tutorials",
    "matches": "docs.pytorch.org",
    "extraBlockSelectors.add": [
      ".tutorial-filter"
    ]
  },
  {
    "id": "disableAutoHeight",
    "matches": [
      "app.intercom.com"
    ],
    "mixedMode.add": {
      "enable": false
    }
  },
  {
    "id": "ru-sites",
    "matches": [
      "www.wildberries.ru",
      "www.ozon.ru"
    ],
    "injectedCss.add": [
      ".product-page,.comment-card,.comment-card__message {block-size:unset!important;}",
      "[class^=supplierName],[class^=supplierName] * {white-space:unset;}",
      "[class*=categoryLinkNav] {width:min-content;}",
      ".bq03_5_3-a6,.bq03_5_3-a5,.a2p5_6_9-a0 {-webkit-line-clamp:unset!important;height:unset!important;}"
    ],
    "excludeSelectors.add": [
      ".product-card__tip--sale",
      ".price,[class^=priceWrap]",
      ".j-big-media-placements-block",
      "[class^='priceBlock'],[class^='product-card__rating'],[class^=productLinePrice],[class^=sizesList]",
      ".c35_3_16-a0,.pdp_jb1,.b5_6_3-a3,.tsHeadline600Large,.tsHeadline500Medium"
    ],
    "mixedMode.add": {
      "dualUnlock": true,
      "dualUnlockStyle": "-webkit-line-clamp: unset; line-clamp: unset; text-overflow: unset; max-height: none; height: auto; overflow: auto;white-space:unset;flex-wrap:wrap;"
    },
    "preTranslateLimiter.add": {
      "side.selectors": [],
      "header.selectors": []
    }
  },
  {
    "id": "wistia-hook",
    "matches": [
      "agencysupremacy.io",
      "dynamous.ai",
      "dynamous.wistia.com",
      "academy.klaviyo.com"
    ],
    "excludeSelectors.add": [
      "div[data-handle='captions']"
    ],
    "mutationExcludeSelectors.add": [
      "div[data-handle='captions'] *"
    ],
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "domCheckTimeout": 1,
    "subtitleRule.add": {
      "quickButtonRule": {
        "appendSelector": ".w-bottom-bar-right-inner.w-css-reset",
        "insertBeforeSelector": ".w-bottom-bar-right-inner.w-css-reset>.w-css-reset:first-child",
        "injectCSS": ".label { display: none; } .imt-quick-subtitle-pop-content { max-height: 120px !important; bottom 30px; }"
      },
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] #immersive-translate-caption-window {direction: rtl;}"
      ],
      "type": "general",
      "subtitleUrlRegExp": "embed/captions/.*\\.json",
      "hookType": "fetch",
      "loadingContainerSelector": "div[data-handle='captions']",
      "generalSetting": {
        "captionsPath": "captions",
        "itemsPath": "hash.lines",
        "textKey": "text",
        "startKey": "start",
        "endKey": "end"
      }
    }
  },
  {
    "id": "graphpad",
    "matches": [
      "www.graphpad.com"
    ],
    "excludeSelectors.add": [
      "div[data-handle='captions']",
      "#immersive-translate-caption-window"
    ],
    "mutationExcludeSelectors.add": [
      "div[data-handle='captions'] *",
      "#immersive-translate-caption-window *"
    ],
    "preTranslateLimiter.add_v.[1.12.1]": {
      "header.enableTranslate": true,
      "side.enableTranslate": true
    },
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "domCheckTimeout": 1,
    "subtitleRule.add": {
      "type": "general",
      "subtitleUrlRegExp": "embed/captions/.*\\.json",
      "hookType": "fetch",
      "injectedCss": [
        "#immersive-translate-quick-button-container,.immersive-translate-quick-button-container { display: inline-block !important; height: 100%; position: absolute; bottom: 100%; right: 0;}"
      ],
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] #immersive-translate-caption-window {direction: rtl;}"
      ],
      "loadingContainerSelector": "div[data-handle='captions']",
      "generalSetting": {
        "captionsPath": "captions",
        "itemsPath": "hash.lines",
        "textKey": "text",
        "startKey": "start",
        "endKey": "end"
      }
    }
  },
  {
    "id": "wistia",
    "matches": [
      "ahrefs.com",
      "*.wistia.net",
      "*.thinkific.com",
      "courses.kevinpowell.co",
      "learn.ni.com",
      "cgcookie.com",
      "academy.yoast.com",
      "courses.mavenanalytics.io",
      "apclassroom.collegeboard.org",
      "learn.getdbt.com"
    ],
    "selectorMatches": [
      ".wistia_embed"
    ],
    "excludeSelectors.add": [
      "div[data-handle='captions']",
      "#immersive-translate-caption-window"
    ],
    "mutationExcludeSelectors.add": [
      "div[data-handle='captions'] *",
      "#immersive-translate-caption-window *"
    ],
    "preTranslateLimiter.add_v.[1.12.1]": {
      "header.enableTranslate": true,
      "side.enableTranslate": true
    },
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "domCheckTimeout": 1,
    "subtitleRule.add": {
      "type": "general",
      "subtitleUrlRegExp": "embed/captions/.*\\.json",
      "hookType": "fetch",
      "loadingContainerSelector": "div[data-handle='captions']",
      "videoSelector": "video",
      "injectedCss": [
        "#immersive-translate-quick-button-container,.immersive-translate-quick-button-container { display: inline-block !important; height: 100%; position: absolute; bottom: 100%; right: 0;}"
      ],
      "quickButtonRule": {
        "appendSelector": ".w-bottom-bar-right-inner.w-css-reset",
        "insertBeforeSelector": ".w-bottom-bar-right-inner.w-css-reset>.w-css-reset:first-child",
        "injectCSS": ".label { display: none; } .imt-quick-subtitle-pop-content { max-height: 120px !important; bottom 30px;right:80px !important; }",
        "injectCSS.add_v.[1.32.3]": ".label { display: none; } .imt-quick-subtitle-pop-content { max-height: 120px !important; }"
      },
      "rtlInjectedCss": [
        "[data-immersive-translate_rtl] #immersive-translate-caption-window {direction: rtl;}"
      ],
      "attachRule": {
        "appendSelector": ".w-video-wrapper.w-css-reset",
        "injectedGlobalCSS": [
          ".w-captions.w-css-reset { display: none !important; }",
          ".w-bottom-bar-right-inner.w-css-reset { z-index: 2147483647; }"
        ],
        "injectedCSS": [
          ".imt-caption-window {margin-bottom: 0;}",
          ".imt-caption-window {width: 90%;}"
        ],
        "isDelay": true
      },
      "liveAttachTimeOffsetSeconds": 0,
      "captionContainerSelector": "[data-handle='captions']",
      "generalSetting": {
        "captionsPath": "captions",
        "itemsPath": "hash.lines",
        "textKey": "text",
        "startKey": "start",
        "endKey": "end"
      }
    }
  },
  {
    "id": "sooplive",
    "matches": [
      "vod.sooplive.com"
    ],
    "subtitleRule.add": {
      "type": "general",
      "generalSetting": {
        "itemsPath": "list",
        "textKey": "msg"
      },
      "hookType": "xhr",
      "subtitleUrlRegExp": "^https://translate-api\\.sooplive\\.com/subtitle/vod/\\d+(?:[?]|$)",
      "loadingContainerSelector": "#player",
      "quickButtonRule": {
        "appendSelector": "#player .right_ctrl",
        "insertBeforeSelector": "#player .right_ctrl > .btn_caption"
      },
      "injectedCss": [
        "#player .screen_subtitle { white-space: pre-line !important; }"
      ]
    }
  },
  {
    "id": "barotem",
    "matches": "www.barotem.com",
    "injectedCss.add": [
      ".product_name {-webkit-line-clamp: unset!important;}",
      ".lists_goods_content > div {height: unset!important; min-height: 76px}",
      ".immersive-translate-target-inner {font-family: sans-serif !important;}"
    ]
  },
  {
    "id": "msn",
    "matches": "www.msn.com",
    "injectedCss.add": [
      ".root {overflow-y: scroll!important;}",
      ".heading {-webkit-line-clamp: unset!important;}",
      ".content .text {overflow-y: scroll !important;}"
    ],
    "excludeSelectors.add": [
      ".attribution",
      ".super-nav-container",
      "#follow-button",
      ".media-info-container",
      ".ad-label",
      ".provider-name",
      ".weather-container",
      ".money-info-content",
      "casual-games-card",
      ".match-data",
      ".me-stripe-container"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "subtitleUrlRegExp": ".*[?&]vtt=true(&.*)?$",
      "hookType": "xhr"
    },
    "selectionTranslation.add": {
      "ignoreSelectionCollapsed": true
    }
  },
  {
    "id": "www.ti.com.cn",
    "matches": "www.ti.com.cn",
    "subtitleRule.add": {
      "type": "subsrt",
      "subtitleUrlRegExp": ".*\\.vtt(\\?.*)?$",
      "hookType": "xhr",
      "quickButtonRule": {
        "appendSelector": ".vjs-control-bar",
        "insertBeforeSelector": "button.vjs-share-control",
        "injectedGlobalCSS": ".immersive-translate-quick-button-container {position: relative;left:24px;top:4px;}"
      }
    }
  },
  {
    "id": "edclub.com",
    "matches": "www.edclub.com",
    "excludeSelectors.add": [
      ".vjs-text-track-display"
    ],
    "mutationExcludeSelectors.add": [
      ".vjs-text-track-display *"
    ],
    "subtitleRule.add": {
      "type": "webvtt",
      "subtitleUrlRegExp": "\\.vtt$",
      "hookType": "xhr",
      "loadingContainerSelector": ".video-js",
      "injectedCss": [
        "#immersive-translate-quick-button-container,.immersive-translate-quick-button-container{height: 28px;display: flex;align-items: center;align-self: flex-end;}"
      ],
      "quickButtonRule": {
        "appendSelector": ".vjs-control-bar",
        "insertBeforeSelector": ".vjs-subs-caps-button",
        "injectCSS": ".logo svg {height: 18px; width: 18px}"
      }
    }
  },
  {
    "id": "mediaspace",
    "matches": "mediaspace.illinois.edu",
    "excludeSelectors.add": [
      ".playkit-overlay-action "
    ],
    "mutationExcludeSelectors.add": [
      ".playkit-overlay-action  *"
    ],
    "subtitleRule.add": {
      "type": "webvtt",
      "subtitleUrlRegExp": "\\.vtt$",
      "hookType": "xhr",
      "injectedCss": [
        "#immersive-translate-quick-button-container,.immersive-translate-quick-button-container{height: 28px;display: flex;align-items: center;align-self: flex-end;}"
      ],
      "quickButtonRule": {
        "appendSelector": ".playkit-bottom-bar .playkit-right-controls",
        "insertBeforeSelector": ".playkit-bottom-bar .playkit-right-controls .playkit-control-closed-captions",
        "injectCSS": ".logo svg {height: 18px; width: 18px}"
      },
      "attachRule": {
        "appendSelector": ".playkit-container",
        "injectedGlobalCSS": [
          ".playkit-subtitles { display: none !important; }"
        ],
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "nbcnews",
    "matches": "www.nbcnews.com",
    "excludeSelectors.add": [
      ".jw-wrapper.jw-reset"
    ],
    "mutationExcludeSelectors.add": [
      ".jw-wrapper.jw-reset *"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "subsrtFormat": "vtt",
      "subtitleUrlRegExp": "\\.vtt(?:$|[?#])",
      "hookType": "fetch|xhr",
      "loadingContainerSelector": ".jw-wrapper.jw-reset",
      "videoSelector": "video.jw-video.jw-reset",
      "quickButtonRule": {
        "appendSelector": ".jw-controlbar.jw-reset .jw-button-container",
        "insertBeforeSelector": ".jw-controlbar.jw-reset .jw-button-container .jw-icon-cc",
        "injectCSS": ".logo svg {height: 18px; width: 18px}",
        "ccEnableSelector": ".jw-icon-cc[aria-label='Closed Captions']"
      }
    }
  },
  {
    "id": "investopedia",
    "matches": "www.investopedia.com",
    "subtitleRule.add": {
      "type": "subsrt",
      "subtitleUrlRegExp": ".*\\.vtt(\\?.*)?$",
      "hookType": "xhr",
      "quickButtonRule": {
        "appendSelector": ".jw-button-container",
        "insertBeforeSelector": ".cc-icon",
        "ccEnableSelector": ".cc-icon"
      }
    }
  },
  {
    "id": "skool",
    "matches": [
      "www.skool.com"
    ],
    "additionalExcludeSelectors.remove": [
      ".notranslate",
      "[translate=no]"
    ],
    "excludeTags.remove": [
      "PRE"
    ],
    "additionalExcludeSelectors.add": [
      "[class^=styled__ShowMore]",
      "[class^=styled__UserNameText]",
      "[class^=styled__GroupNameWrapper]",
      "[class^=styled__ButtonWrapper]",
      "[class^=styled__LeaderboardsPreviewTitle]",
      "[class^=styled__ExpandRepliesWrapper]",
      "[class^=styled__GroupFeedLinkLabel]",
      "[class^=styled__HeaderLinks]",
      "[class^=styled__RecentActivityLabel]",
      "[class^=styled__PostedDate]",
      "[class^=styled__MemberInfo]",
      "[class^=styled__UserRoleTag]",
      "[class^=styled__DateAndLabelWrapper]",
      "[class^=styled__PinnedOverlay]",
      "[class^=styled__CommentsCount]",
      "[class^=styled__LastMessageTime]",
      "[class^=styled__LikeLabel]",
      "[class^=styled__TypographyWrapper]",
      "[class^=styled__MemberPercentage]",
      "[class^=styled__LevelBlockTitle]"
    ],
    "injectedCss.add": [
      ".erGJuk {max-height:unset!important;}"
    ],
    "skipTrailTextRegex": "\\.{3}",
    "subtitleRule.add_v.[1.20.7]": {
      "type": "subsrt",
      "subsrtFormat": "vtt",
      "hookType": "xhr",
      "subtitleUrlRegExp": "(?:subtitle|captions)/.*\\.vtt"
    }
  },
  {
    "id": "master-dev",
    "matches": [
      "master.dev"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "subsrtFormat": "vtt",
      "hookType": "fetch|xhr",
      "subtitleUrlRegExp": "\\.vtt(?:$|[?#])",
      "quickButtonRule": {
        "appendSelector": ".vjs-control-bar",
        "insertBeforeSelector": ".vjs-fullscreen-control"
      },
      "injectedCss": [
        "#immersive-translate-quick-button-container,.immersive-translate-quick-button-container { order: 2; }"
      ],
      "attachRule": {
        "appendSelector": "div#vjs_video_3",
        "injectedGlobalCSS": [
          ".vjs-text-track-display { display:none!important; }"
        ]
      }
    }
  },
  {
    "id": "futuretools",
    "matches": "www.futuretools.io",
    "globalStyles": {
      ".collection-item-6": "height: unset !important;"
    }
  },
  {
    "id": "ficbook.net",
    "matches": [
      "ficbook.net"
    ],
    "isTransformPreTagNewLine": true,
    "likePreSelectors.add": [
      "#content"
    ],
    "preTranslateLimiter.add_v.[1.12.1]": {
      "header.enableTranslate": true
    },
    "longBuildPageLength": 10000
  },
  {
    "id": "xiaosaas",
    "matches": [
      "*.xiaosaas.com"
    ],
    "stayOriginalTags.remove": [
      "CODE"
    ],
    "excludeSelectors.add": [
      "p.marginRight10",
      "p.marginLeft10"
    ]
  },
  {
    "id": "migflash",
    "matches": [
      "migflash.com"
    ],
    "additionalExcludeSelectors.remove": [
      "h1 br"
    ]
  },
  {
    "id": "jfrog",
    "matches": "jfrog.com",
    "stayOriginalSelectors.add": [
      ".readercontent-topic-codeblockcontainer"
    ]
  },
  {
    "id": "freecodecamp",
    "matches": [
      "www.freecodecamp.org"
    ],
    "additionalExcludeSelectors.remove": [
      ".notranslate",
      "[translate=no]",
      "[role=code]"
    ],
    "additionalExcludeSelectors.add": [
      ".monaco-mouse-cursor-text",
      ".challenge-preview"
    ]
  },
  {
    "id": "solidity-by-example",
    "matches": [
      "solidity-by-example.org"
    ],
    "additionalStayOriginalSelectors.remove": [
      ".code"
    ]
  },
  {
    "id": "kemono.cr",
    "matches": [
      "kemono.cr"
    ],
    "excludeTags.remove": [
      "PRE"
    ]
  },
  {
    "id": "gta5-mods",
    "matches": [
      "www.gta5-mods.com"
    ],
    "excludeSelectors.add": [
      "#main-nav"
    ]
  },
  {
    "id": "cooperativa",
    "matches": [
      "cooperativa.cl"
    ],
    "injectedCss.add": [
      "font.notranslate {display:unset!important}"
    ]
  },
  {
    "id": "spicychat.ai",
    "matches": "spicychat.ai",
    "isTranslateTitle": false
  },
  {
    "id": "sdk-cooperate",
    "matches": [
      "pandaily.com"
    ],
    "extraInlineSelectors.add": [
      "h3"
    ],
    "excludeSelectors.add": [
      "[data-discover]",
      "header"
    ]
  },
  {
    "id": "read.amazon",
    "matches": [
      "read.amazon.com",
      "read.amazon.co.jp"
    ],
    "imageRule.add": {
      "enable": true,
      "type": "manga",
      "imageSelectors": [
        ".kg-full-page-img img"
      ],
      "enableImageSrcObserver": true
    },
    "extraInlineSelectors.add": [
      "span.kg-a11y-rel[role=text]"
    ],
    "atomicBlockSelectors.add": [
      "span.kg-a11y-rel[role=text]"
    ],
    "enableRichTranslate": false,
    "injectedCss.add": [
      "font { color:#333!important; white-space: pre-wrap;}",
      "p > font { position:absolute;left:0;right:0; }",
      ".kg-a11y-rel { background:white!important; }"
    ]
  },
  {
    "id": "mckinsey",
    "matches": [
      "www.mckinsey.com"
    ],
    "likePreSelectors.add": [
      "#interactive-bespoke-tech-trends-2025"
    ],
    "buildContainerSelectors.add": [
      "#interactive-bespoke-tech-trends-2025"
    ],
    "forceFormatPre": true,
    "isTransformPreTagNewLine": true
  },
  {
    "id": "dcinside",
    "matches": [
      "*.dcinside.com"
    ],
    "additionalExcludeSelectors.add": [
      ".num",
      ".time"
    ],
    "preTranslateLimiter.add": {
      "header.enableTranslate": true
    },
    "injectedCss.add": [
      ".time_best .typet_list li a {font-size:unset !important;}",
      "font {background:unset!important;padding:unset!important;}"
    ]
  },
  {
    "id": "radix-ui",
    "matches": "www.radix-ui.com",
    "preTranslateLimiter.add": {
      "side.selectors": [
        ".rt-ScrollAreaViewport"
      ]
    }
  },
  {
    "id": "f95zone",
    "matches": "f95zone.to",
    "additionalExcludeSelectors.add": [
      ".pageNavWrapper",
      ".message-userExtras",
      ".message-name"
    ]
  },
  {
    "id": "tanstack",
    "matches": "tanstack.com",
    "mutationExcludeSelectors.add": [
      "[data-button-portal].absolute",
      "[data-button-portal].absolute *"
    ]
  },
  {
    "id": "marquee-gs",
    "matches": "marquee.gs.com",
    "additionalExcludeSelectors.add": [
      "[class*='article-header-sub-header']",
      "[role=img]"
    ]
  },
  {
    "id": "nof1.ai",
    "matches": [
      "nof1.ai"
    ],
    "excludeSelectors.add": []
  },
  {
    "id": "toneking",
    "matches": [
      "www.toneking.com"
    ],
    "injectedCss.add": [
      "ul li {text-wrap:unset!important;}"
    ],
    "_comment": "解决莫名奇妙的 ul li text-wrap: pretty 卡顿问题"
  },
  {
    "id": "folo",
    "matches": "app.folo.is",
    "excludeSelectors.add": [
      "[role=button]"
    ]
  },
  {
    "id": "fontFmaily",
    "matches": [
      "skyvipservices.com",
      "book.novelpia.com"
    ],
    "injectedCss.add": [
      "font {display:block !important;}",
      "#book-box font {font-family:unset!important;}"
    ]
  },
  {
    "id": "arena",
    "matches": [
      "lmarena.ai"
    ],
    "excludeSelectors.add": [
      "table"
    ]
  },
  {
    "id": "murlok",
    "matches": [
      "murlok.io"
    ],
    "injectedCss.add": [
      ".vi-media-object {display:flex;}"
    ]
  },
  {
    "id": "remove_em",
    "matches": [
      "git-scm.com",
      "models.com"
    ],
    "stayOriginalSelectors.add": [
      "em"
    ]
  },
  {
    "id": "vercel",
    "matches": [
      "vercel.com"
    ],
    "excludeSelectors.add": [
      "[class^=fade-in-words]"
    ],
    "preTranslateLimiter.add": {
      "header.enableTranslate": true
    }
  },
  {
    "id": "live_attach_basic",
    "selectorMatches": [
      "meta[name='immersive-translate-live-attach-basic'][content='true']"
    ],
    "subtitleRule.add": {
      "type": "live_attach",
      "videoSelector": "#live-video",
      "loadingContainerSelector": "#live-caption-container",
      "captionContainerSelector": "#live-caption-container",
      "attachRule": {
        "appendSelector": "#live-attach-stage",
        "showSupportTips": false,
        "injectedCSS": [
          ".imt-caption-window {width: 88%;}",
          ".imt-caption-window {bottom: 12%;}"
        ]
      }
    }
  },
  {
    "id": "moltbook",
    "matches": "www.moltbook.com",
    "excludeSelectors.add": [
      "[class='flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs text-[#7c7c7c] mb-1.5 sm:mb-2 flex-wrap']",
      "[class='flex items-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-[#7c7c7c]']",
      "[class='flex items-center gap-2 p-2 rounded-lg transition-all duration-200 group animate-fadeIn bg-gradient-to-r from-[#ffd700]/10 to-transparent hover:from-[#ffd700]/20']",
      "[class='flex flex-col items-center gap-0.5 sm:gap-1 text-center min-w-[32px] sm:min-w-[40px]']",
      "[class='bg-white border border-[#e0e0e0] rounded-lg overflow-hidden'] .p-2",
      "[class='text-xs text-[#818384] mb-2']",
      "[class='w-12 bg-[#161617] rounded-l-lg flex flex-col items-center py-3 text-sm']",
      "[class='bg-[#1a1a1b] px-4 py-3 flex items-center justify-between sticky top-[52px] z-40 rounded-t-lg border border-[#333] shadow-md']",
      "[class='flex items-center gap-3 text-xs text-[#818384]']",
      "a[class='text-[#d7dadc] font-medium hover:underline']"
    ],
    "injectedCss.add": [
      "[class*='line-clamp']{-webkit-line-clamp:unset !important;}"
    ]
  },
  {
    "id": "textSites",
    "matches": [
      "www.jjwxc.net"
    ],
    "mutationExcludeSelectors": [
      "#note_danmu_wrapper,#note_danmu_wrapper *"
    ],
    "_comment": "就是容器根节点直接跟着文本节点，然后子节点会不断变化"
  },
  {
    "id": "dramawave-chartdrama",
    "matches": [
      "dramawave.chartdrama.com"
    ],
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "domCheckTimeout": 1,
    "subtitleRule.add": {
      "type": "text_track",
      "allowHideModeTextTrack": true,
      "videoPlayerSelector": "video.video-sub",
      "videoSelector": "video.video-sub",
      "loadingContainerSelector": "div.player-video-frame",
      "attachRule": {
        "appendSelector": "div.player-video-frame",
        "injectedCSS": [
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "kaltura-embed",
    "matches": [
      "cdnapisec.kaltura.com"
    ],
    "subtitleRule.add": {
      "type": "text_track",
      "videoPlayerSelector": "video",
      "allowHideModeTextTrack": true,
      "loadingContainerSelector": ".playkit-container",
      "attachRule": {
        "appendSelector": ".playkit-container",
        "injectedGlobalCSS": ".playkit-container .playkit-subtitles {display:none!important;}"
      }
    }
  },
  {
    "id": "sbs",
    "matches": "www.sbs.com.au",
    "subtitleRule.add": {
      "type": "subsrt",
      "hookType": "fetch|xhr",
      "subtitleUrlRegExp": ".vtt",
      "enableHookDownload": true,
      "quickButtonRule": {
        "appendSelector": ".bmpui-ui-subtitleaudiosettingstogglebutton<-.bmpui-container-wrapper",
        "insertBeforeSelector": ".bmpui-ui-subtitleaudiosettingstogglebutton",
        "injectCSS": ".imt-quick-subtitle-button { height: 70%; }"
      },
      "attachRule": {
        "appendSelector": ".bmpui-ui-subtitle-overlay",
        "injectedCSS": [
          ".bmpui-ui-subtitle-label { display: none!important; }"
        ]
      }
    }
  },
  {
    "id": "common-text-track",
    "matches": [
      "www.typing.com",
      "*.video-stream-hosting.de",
      "*.thieme.de",
      "videos.sproutvideo.com",
      "www.ixl.com",
      "play.gumlet.io"
    ],
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "domCheckTimeout": 1,
    "additionalExcludeSelectors.remove": [
      ".notranslate",
      "[translate=no]"
    ],
    "subtitleRule.add": {
      "type": "text_track",
      "allowHideModeTextTrack": true,
      "videoPlayerSelector": "video"
    }
  },
  {
    "id": "common-vtt-jw",
    "matches": [
      "*.rottentomatoes.com",
      "megaplay.buzz",
      "www.brighttalk.com"
    ],
    "excludeSelectors.add": [
      ".jw-wrapper"
    ],
    "mutationExcludeSelectors.add": [
      ".jw-wrapper *"
    ],
    "selectionTranslation": {
      "enable": false
    },
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "domCheckTimeout": 1,
    "subtitleRule.add": {
      "type": "subsrt",
      "subsrtFormat": "vtt",
      "hookType": "fetch|xhr",
      "subtitleUrlRegExp": "\\.vtt",
      "quickButtonRule": {
        "appendSelector": ".jw-button-container",
        "insertBeforeSelector": ".jw-icon-cc",
        "ccEnableSelector": ".jw-icon-cc"
      },
      "attachRule": {
        "appendSelector": ".jw-wrapper",
        "injectedCSS": [
          ".jw-text-track-display { display: none!important; }",
          ".imt-caption-window {width: 90%;}"
        ]
      }
    }
  },
  {
    "id": "av-tib-eu",
    "matches": [
      "av.tib.eu"
    ],
    "excludeSelectors.add": [
      ".video-js",
      "#immersive-translate-caption-window"
    ],
    "mutationExcludeSelectors.add": [
      ".video-js *",
      "#immersive-translate-caption-window *"
    ],
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "domCheckTimeout": 1,
    "subtitleRule.add": {
      "type": "subsrt",
      "subsrtFormat": "vtt",
      "hookType": "xhr",
      "subtitleUrlRegExp": "^(?:https://av\\.tib\\.eu)?/api/v0/videos/\\d+/transcription/\\d+/vtt(?:[?#]|$)",
      "videoSelector": "video.vjs-tech",
      "loadingContainerSelector": ".video-js",
      "quickButtonRule": {
        "appendSelector": ".controls",
        "insertBeforeSelector": "button[aria-label$=\"subtitles\"]",
        "ccEnableSelector": "button[aria-label$=\"subtitles\"]"
      },
      "attachRule": {
        "appendSelector": ".video-js",
        "injectedCSS": [
          ".imt-caption-window { width: 90%; }"
        ],
        "injectedGlobalCSS": [
          ".video-js .vjs-text-track-display { display: none !important; }"
        ]
      }
    }
  },
  {
    "id": "epicreact-dev",
    "matches": [
      "www.epicreact.dev"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "subsrtFormat": "vtt",
      "hookType": "xhr",
      "subtitleUrlRegExp": "\\.vtt(?:$|[?#])",
      "videoPlayerSelector": "mux-player -> mux-video -> video",
      "loadingContainerSelector": "mux-player#mux-player",
      "quickButtonRule": {
        "appendSelector": "mux-player -> media-theme -> media-control-bar[part='control-bar bottom']",
        "insertBeforeSelector": "mux-player -> media-theme -> media-captions-menu-button[aria-label='closed captions']",
        "injectCSS": ".imt-quick-subtitle-pop-content {right: 92px !important; min-height: 75px} .logo,.logo svg { height: 18px !important; width: 18px !important;}"
      }
    }
  },
  {
    "id": "app-acilearning",
    "matches": [
      "app.acilearning.com"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "subsrtFormat": "vtt",
      "hookType": "xhr",
      "subtitleUrlRegExp": "\\/tracks\\/[^/?]+\\.vtt(?:$|[?#])",
      "loadingContainerSelector": "#itprotvPlayer",
      "quickButtonRule": {
        "appendSelector": "#itprotvPlayer .jw-button-container",
        "insertBeforeSelector": "#itprotvPlayer .jw-icon-cc",
        "injectCSS": ".imt-quick-subtitle-button { height: 60px; margin: 0 12px; }"
      },
      "videoSelector": "video.jw-video.jw-reset",
      "attachRule": {
        "appendSelector": "div#itprotvPlayer",
        "injectedGlobalCSS": [
          "#itprotvPlayer .jw-captions { display: none !important; }"
        ]
      }
    }
  },
  {
    "id": "app-tonebase",
    "matches": [
      "app.tonebase.co"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "subsrtFormat": "vtt",
      "hookType": "xhr",
      "subtitleUrlRegExp": "\\.vtt(?:$|[?#])",
      "loadingContainerSelector": "div.jsx-1348039502.videoWrapper.--regular.--noScores",
      "quickButtonRule": {
        "appendSelector": "div.jsx-2174343501.jsx-1145801038.jsx-3059934846.playerVolumeControlsWrapper"
      },
      "videoSelector": "video#lesson-video-player",
      "attachRule": {
        "appendSelector": "div.jsx-1348039502.videoWrapper.--regular.--noScores"
      }
    }
  },
  {
    "id": "kaltura",
    "matches": [
      "kaf.keats.kcl.ac.uk"
    ],
    "excludeSelectors.add": [
      ".playkit-subtitles, .playkit-subtitles *"
    ],
    "mutationExcludeSelectors.add": [
      ".playkit-subtitles, .playkit-subtitles *"
    ],
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "domCheckTimeout": 1,
    "subtitleRule.add": {
      "type": "text_track_dynamic",
      "videoPlayerSelector": "video",
      "hookType": "",
      "subtitleUrlRegExp": ""
    }
  },
  {
    "id": "nvidia-on-demand",
    "matches": [
      "www.nvidia.com"
    ],
    "subtitleRule.add": {
      "type": "text_track_dynamic",
      "videoPlayerSelector": ".playkit-player video",
      "allowHideModeTextTrack": true,
      "loadingContainerSelector": ".playkit-container"
    }
  },
  {
    "id": "common-vtt",
    "matches": [
      "academy.dair.ai",
      "cloudnestra.com",
      "maven.com",
      "www.peacocktv.com"
    ],
    "subtitleRule.add": {
      "type": "subsrt",
      "hookType": "fetch|xhr",
      "subtitleUrlRegExp": ".vtt"
    }
  },
  {
    "id": "common-ebutt",
    "matches": [
      "www.tagesschau.de"
    ],
    "mainFrameMinTextCount": 0,
    "mainFrameMinWordCount": 0,
    "domCheckTimeout": 1,
    "subtitleRule.add": {
      "type": "ebutt",
      "hookType": "fetch",
      "enableHookDownload": true,
      "subtitleUrlRegExp": "\\.xml$"
    }
  },
  {
    "id": "autoHeight",
    "matches": [
      "*.sooplive.*",
      "zen-browser.app",
      "message.alibaba.com",
      "erp.91miaoshou.com",
      "jddonline.com",
      "cis.vemic.com",
      "scripod.com",
      "drjoedispenza.com",
      "www.x-mol.com",
      "webvpn.bnu.*",
      "www.connectedpapers.com",
      "isappscience.org",
      "www.dtmstation.com",
      "kalshi.com",
      "engoo.com",
      "puchipurabu.com",
      "www.wildberries.ru",
      "m.163.com",
      "discord.com/discovery*",
      "zhenghedata.com",
      "yoeshop.ssweet.*",
      "sinocism.com",
      "*.z-lib.*",
      "duckduckgo.com",
      "www.postype.com",
      "rebang.today",
      "appsumo.com",
      "*.xiapibuy.*",
      "www.modelhub.com",
      "www.xvideos.com",
      "www.tripadvisor.com",
      "www.afreecatv.com",
      "getpocket.com",
      "https://you.com/search",
      "*.fiverr.com",
      "https://feeder.co/*",
      "time.com",
      "www.cnet.com",
      "www.nikkei.com",
      "dolmods.net",
      "detail.1688.com",
      "herdr.dev",
      "sysu.bohrium.com",
      "impeccable.style"
    ],
    "excludeMatches": [
      "https://followin.io/*"
    ],
    "selectorMatches": [
      "#plugin-product-comment",
      ".plugin-product-comment-collections",
      "[class*='line-clamp-']"
    ],
    "injectedCss.add": [
      ".side_list a,.title a,.tit,.item-title {-webkit-line-clamp:unset!important;height:unset!important;}",
      "details {height:unset!important;}",
      ".product-title {height:unset!important;-webkit-line-clamp:unset!important;}",
      ".plugin-product-comment-content {height:unset!important;-webkit-line-clamp:unset!important;}",
      "div.jdd-product-info-box {height:unset!important;}",
      "span.hotData-text { -webkit-line-clamp: unset !important; line-clamp: unset !important;}",
      "div.line-clamp-4 { -webkit-line-clamp: unset; max-height: unset;}",
      "[class*='titleTypography'] {-webkit-line-clamp: unset !important;}",
      ".div-text-line-three { -webkit-line-clamp: unset; max-height: unset;}",
      ".data-title { -webkit-line-clamp: unset!important; max-height: unset!important;}",
      ".paper-title,.search-result-abstract.folded,.list-group-item-mod h5 { -webkit-line-clamp: unset!important; max-height: unset!important;}",
      ".kb-advanced-heading-link,.limited-text { -webkit-line-clamp: unset!important; max-height: unset!important;}",
      ".entry-card-title,.entry-card-snippet { -webkit-line-clamp: unset!important; max-height: unset!important;}",
      "span.line-clamp-2 { -webkit-line-clamp: unset!important; max-height: unset!important;}",
      ".css-1yo0yr8 {-webkit-line-clamp: unset!important; max-height: unset!important;}",
      "[class*='line-clamp-'],[class*='line-clamp-'] font {white-space:unset!important;-webkit-line-clamp: unset!important; max-height: unset!important;}",
      ".product-card__brand-wrap {white-space:unset;}",
      ".card-recommend-oneImg article h4 {max-height:unset;-webkit-line-clamp:unset;}",
      ".description__4cb8a {max-height:unset;-webkit-line-clamp:unset;}",
      ".link-container {height:unset!important;-webkit-line-clamp:unset!important;}",
      ".plugin-desc {max-height:unset;-webkit-line-clamp:unset;}",
      "[style*='max-height'] {max-height:unset!important;}",
      "[data-hero-proof] .hero-proof-stage,[data-hero-proof] .hero-proof-panel:not([hidden]){height:auto!important;display:grid!important;}[data-hero-proof] .hero-proof-panel,[data-hero-proof] .hero-proof-layer,[data-hero-proof] .hero-proof-canvas{position:relative!important;grid-area:1/1!important;}[data-hero-proof] .hero-proof-canvas>article{height:auto!important;min-height:var(--proof-card-h);}[data-hero-proof] .proof-polish footer{flex-wrap:wrap!important;}",
      ".why-pm-lines > li > .immersive-translate-target-wrapper {grid-column:2;}"
    ],
    "excludeSelectors.add": [
      "[class*='paper-author'],[class*='paper-info']"
    ],
    "additionalExcludeSelectors.remove": [
      ".notranslate",
      "[translate=no]"
    ],
    "mixedMode.add": {
      "dualUnlock": true
    }
  },
  {
    "id": "other-chatapps",
    "matches": [
      "app.salesmartly.com"
    ],
    "selectors.add": [
      ".chat__inbox_item_text_ordinary",
      ".ivu-tooltip [title]",
      ".text-message__text"
    ],
    "injectedCss.add": [
      "._ss_2FLBr4_u {height:unset!important;}"
    ]
  },
  {
    "id": "alphasquare",
    "matches": "alphasquare.co.kr",
    "preTranslateLimiter.add": {
      "header.selectors": [
        "header:not(#main-header)",
        "#main-header > :not(.main-search)"
      ]
    }
  },
  {
    "id": "atcoder",
    "matches": "atcoder.jp",
    "excludeSelectors.add": [
      ".navbar-right > li > a:has(.glyphicon-cog)"
    ]
  },
  {
    "id": "qt-docs",
    "matches": "doc.qt.io",
    "stayOriginalSelectors.add": [
      "article p i[translate=no]"
    ]
  },
  {
    "id": "dynamic-repets",
    "matches": [
      "khovar.tj"
    ],
    "excludeSelectors.add": [
      ".slide_container [style*='position: absolute']"
    ],
    "_comment": "1.25.3 在这种情况下会导致脏段落重新翻译"
  },
  {
    "id": "windhawk",
    "matches": [
      "windhawk.net"
    ],
    "mutationExcludeContainsSelectors.add": [
      "[data-testid=\"mod-card-title\"] > .ant-typography > span:empty"
    ]
  },
  {
    "id": "floatSites",
    "matches": [
      "docs.stripe.com"
    ],
    "injectedCss.add": [
      ".immersive-translate-target-translation-block-wrapper {display: inline !important;}"
    ]
  },
  {
    "id": "preSiteColumn",
    "matches": [
      "man7.org"
    ],
    "isTransformPreTagNewLine": true,
    "formatKeepColumns": "50%",
    "excludeTags.remove": [
      "PRE"
    ],
    "buildContainerSelectors.add": [
      "pre"
    ]
  },
  {
    "id": "formatPreSites",
    "matches": [
      "macro.com",
      "silverbullet.md",
      "m.munpia.com",
      "followin.io",
      "jobs.gem.com"
    ],
    "likePreSelectors.add": [
      "[data-block-type=md] [style^=scrollbar-gutter]",
      "#sb-main",
      ".content article",
      "#article-content .whitespace-pre-wrap",
      "[class^='jobPostingContent-'] [class^='typography-']"
    ],
    "forceFormatPre": true,
    "isTransformPreTagNewLine": true,
    "additionalExcludeSelectors.remove": [
      ".notranslate",
      "[translate=no]"
    ],
    "_comment": "专门处理格式化的内容"
  },
  {
    "id": "txt",
    "matches": [
      "*://*/*.txt",
      "file://*/*.txt"
    ],
    "selectorMatches": [
      "body > pre",
      ".transcripts > pre"
    ],
    "longBuildPageLength": 1000,
    "mutationExcludeSelectors.add": [
      "body"
    ],
    "excludeSelectors.add": [
      ".api-code",
      "pre.highlight.def"
    ],
    "isTransformPreTagNewLine": true,
    "excludeTags.remove": [
      "PRE"
    ]
  },
  {
    "id": "overflow-sites",
    "matches": [
      "www.highfrequencyelectronics.com",
      "www.uzh.ch",
      "www-mail.icloud-sandbox.com",
      "*.cpaaustralia.com.*",
      "www.8du8.net/*",
      "ieltscat.xdf.*",
      "moddota.com",
      "www.nogizaka46.com"
    ],
    "injectedCss.add": [
      "#main-content {overflow:unset;}",
      ".TextImage--inner {overflow:auto !important;}",
      "body{overflow-y:scroll!important;}",
      "li.expanded > div{ overflow:scroll; }",
      ".book_list ul li { height: unset !important; overflow: visible !important; }",
      "#tabs-content-wrap {overflow:scroll;}",
      ".ReactVirtualized__Grid__innerScrollContainer {overflow:scroll!important;}",
      ".b--wrap {overflow:scroll!important;}"
    ]
  },
  {
    "id": "mailSites",
    "matches": [
      "mail.126.com"
    ],
    "injectedCss.add": [
      ".mail-list-frome {display:none;}"
    ],
    "excludeSelectors.add": [
      ".mail-list-time",
      ".mail-list-frome"
    ]
  },
  {
    "id": "preSites",
    "matches": [
      "mail.163.com",
      "mail.jabber.org",
      "mailarchive.ietf.org",
      "antirez.com",
      "patchwork.kernel.org",
      "lists.apache.org",
      "manned.org",
      "bugs.webkit.org",
      "bugzilla.mozilla.org",
      "scriptbin.works",
      "bugs.gentoo.org",
      "lwn.net/Articles/*",
      "docs.haproxy.org",
      "*.freebsd.org",
      "www.oreilly.com/openbook/opensources/book/*",
      "gamefaqs.gamespot.com",
      "bugs.java.com/bugdatabase/view_bug.do",
      "rachelsenglish.com",
      "privatter.net",
      "www.asuswrt-merlin.net",
      "tic80.com",
      "www.impo.*",
      "sotf-mods.com",
      "www.bls.gov",
      "www.sreality.cz",
      "alar.95chat.cloud",
      "novel.prcm.jp",
      "im.jinritemai.com",
      "lftp.yar.ru",
      "*.mercadolibre.com",
      "corpus-texmex.irisa.*",
      "www.imageen.com",
      "seller-id.tokopedia.com",
      "tortoisegit.org",
      "man.uex.se",
      "www.dove.com",
      "phrack.org",
      "m.munpia.com",
      "archive.cardbox.moe",
      "https://mods.factorio.com/mod/*/changelog"
    ],
    "selectorMatches": [
      "pre.changelog"
    ],
    "isTransformPreTagNewLine": true,
    "formatKeepColumns": "50%",
    "longBuildPageLength": 1000,
    "excludeTags.remove": [
      "PRE"
    ],
    "buildContainerSelectors.add": [
      "pre"
    ]
  },
  {
    "id": "preCodeSites",
    "matches": [
      "taylor.town",
      "www.flatpanelshd.com",
      "www.rarlab.com",
      "bugs.mysql.com",
      "crushon.ai"
    ],
    "isTransformPreTagNewLine": true,
    "excludeTags.remove": [
      "PRE"
    ],
    "likePreSelectors.add": [
      "CODE"
    ],
    "stayOriginalTags.remove": [
      "CODE"
    ]
  },
  {
    "id": "otherMathSites",
    "selectorMatches": [
      "math",
      "mjx-container",
      "[class*='MathJax']",
      "[class*='math-']"
    ],
    "enableRichTranslate": false,
    "advanceMergeConfig": [
      {
        "condition": "translationService==zhipu",
        "advanceConfig": {
          "rich.stayOriginalTags.remove": [
            "SUP",
            "SUB"
          ]
        }
      }
    ],
    "preTranslateLimiter.add": {
      "header.enableTranslate": true
    },
    "additionalExcludeSelectors.add": [
      ".dcg-mathitem"
    ],
    "additionalExcludeSelectors.remove": [
      ".notranslate",
      "[translate=no]"
    ],
    "bodyRule.add": {
      "bodySelector": "article"
    }
  },
  {
    "id": "htmlLangFirst",
    "selectorMatches": [
      "[lang=he-IL]",
      "[lang=nl-NL]",
      "[lang=ar-SA]",
      "[lang=fa-IR]",
      "[lang=fi]",
      "[lang=fi-FI]"
    ],
    "pageLangDetectWeight": {
      "html": 2,
      "body": 1,
      "tab": 1
    },
    "_comment": "为了处理 js 库错误检测希伯来语成其他语言的问题 "
  },
  {
    "id": "deepFrameTranslate",
    "matches": [
      "anarchothaumaturgist.itch.io",
      "darkpetal16.itch.io",
      "registry.khronos.org",
      "achieve.macmillanlearning.com",
      "mail.shanghai.*",
      "help.autodesk.com",
      "*.vitalsource.com",
      "*.sumtotal.host",
      "academy.notion.com",
      "www.unigui.com"
    ],
    "enableDeepFrameTranslatePage": true
  },
  {
    "id": "common.pdfWebPage",
    "waitForSelectorsTimeout": 1,
    "selectorMatches": [
      "embed[type='application/pdf']"
    ]
  },
  {
    "id": "finalCommon.pdfWebPage",
    "matches": [
      "https://obgyn.onlinelibrary.wiley.com/doi/pdf/*",
      "https://onlinelibrary.wiley.com/doi/pdf/*",
      "https://docs.amd.com/v/u/*/*",
      "https://arxiv.org/pdf/*",
      "https://sci-hub.kvnp.top/*",
      "https://sci-hub.*/*"
    ],
    "selectorMatches": [
      "embed[type='application/pdf']",
      "iframe[type='application/pdf']",
      "[id=myPdfIframe][src*=pdf]",
      "#article [type='application/pdf'][src*=pdf]",
      ".textFrame [type='application/pdf'][src*=pdf]",
      ".ggPdf",
      "[id=pdfCanvasContainer] > iframe[src*=pdf]",
      ".viewercontent-container  iframe[src*=documents]",
      "object[type='application/pdf']"
    ],
    "pdfUrlExtractRule": {
      "selector": "iframe[src*=pdf]",
      "attribute": "src",
      "selectors": [
        "embed[type='application/pdf']",
        "iframe[src*=pdf]",
        "iframe[src*=documents]",
        "#statements-pdf",
        "object[type='application/pdf']"
      ],
      "attributes": [
        "src",
        "data"
      ],
      "queries": [
        "file"
      ]
    }
  },
  {
    "id": "common4.pdfWebPage",
    "selectorMatches": [
      "#statements-pdf"
    ],
    "pdfUrlExtractRule": {
      "selector": "#statements-pdf",
      "attribute": "src"
    }
  },
  {
    "id": "common-query.pdfWebPage",
    "selectorMatches": [
      "[id=pdfCanvasContainer] > iframe[src*=pdf]"
    ],
    "pdfUrlExtractRule": {
      "selector": "iframe[src*=pdf]",
      "attribute": "src",
      "query": "file"
    }
  },
  {
    "id": "fix-nav2header",
    "matches": [
      "www.acea.auto",
      "news.cgtn.com"
    ],
    "preTranslateLimiter.add_v.[1.12.1]": {
      "side.selectors": [
        "aside",
        "[class*='Sidebar']",
        "#sidenav"
      ],
      "header.selectors": [
        "nav",
        "header",
        "[class^='header-v3']"
      ]
    }
  },
  {
    "id": "strict-fix-nav2header",
    "matches": [
      "www.talkclassical.com"
    ],
    "preTranslateLimiter": {
      "side.selectors": [
        "aside",
        "#sidenav"
      ],
      "header.selectors": [
        "nav",
        "header"
      ]
    },
    "_comment": "严格模式下，只翻译 header 和 side 标签"
  },
  {
    "id": "fix-header",
    "selectorMatches": [
      "article header",
      "header h1",
      "header h2",
      "header h3",
      "header p",
      "header nav"
    ],
    "matches": [
      "societyforpsychotherapy.org",
      "cbtm.manifestlao.com",
      "notefolio.net",
      "finance.sina.*",
      "andymatuschak.org"
    ],
    "injectedCss.add": [
      "[class*='line-clamp-'] {-webkit-line-clamp: unset!important; max-height: unset!important;}",
      ".top-bar {overflow:hidden;}",
      ".PageContainer * {height:unset!important;}"
    ],
    "additionalExcludeSelectors.remove": [
      ".notranslate",
      "[translate=no]"
    ],
    "preTranslateLimiter.add": {
      "header.enableTranslate": true
    },
    "excludeSelectors.add": [
      ".site-header",
      ".main-navbar"
    ],
    "initialSelectorGlobalAttributes.remove": {
      "header": {}
    },
    "extraBlockSelectors.add": [
      ".btn"
    ],
    "_comment": "给部分网页开后门翻译 header 标签"
  },
  {
    "id": "NoTranslate",
    "matches": [
      "prepful.ai",
      "playit.gg",
      "*.tiktok.com",
      "altis.world",
      "*.newthingsunderthesun.com",
      "*.gumroad.com",
      "edstem.org",
      "actions.tldrnewsletter.com",
      "community.linkingyourthinking.com",
      "winaero.com",
      "community.afforai.com",
      "www.perplexity.ai",
      "hdsr.mitpress.mit.edu",
      "rent.men",
      "*.rwth-aachen.*",
      "www.backcountry.com",
      "intranet.alxswe.com",
      "www.steepandcheap.com",
      "whoer.is",
      "community.seniorswc.com",
      "www.skool.com",
      "sfget.jp",
      "talentcentral.eu.shl.com",
      "www.crd.york.ac.*",
      "www.campo.fau.de",
      "s.hoothin.com",
      "feedback.featurebase.app",
      "typefully.com",
      "*.affine.*",
      "*.shopify.com",
      "*.marscode.com",
      "nexus.evenant.com",
      "portal.achieve3000.net",
      "triumph-cubic.com",
      "ieeeforms.wufoo.com",
      "www.midjourney.com",
      "fifakitcreator.com",
      "app.voxy.com",
      "www.zome.*",
      "electrical-engineering-portal.com",
      "www.surveymonkey.com",
      "www.rawpixel.com",
      "mail.cstnet.cn",
      "mail.nudt.edu.cn",
      "lkml.org",
      "mail.qq.com",
      "kalimat.anghami.com",
      "changewindows.org",
      "scispace.com",
      "ww2.mathworks.cn",
      "paragon-eu.amazon.com",
      "academy.openai.com",
      "www.cambodia.drivexam.com"
    ],
    "excludeMatches": [
      "eproofing.springer.com/*/journals/*"
    ],
    "selectorMatches": [
      "html[translate=no]",
      "body[translate=no]",
      "body[class=notranslate]",
      "body[class^='notranslate']",
      "#app[translate=no]",
      "#root[translate=no]",
      "#editor-core-root [translate=no]",
      ".notranslate.chrome",
      ".main-content [translate=no]",
      "body.notranslate.rtb-desktop",
      ".survey-body .notranslate",
      ".ProseMirror[translate=no]",
      "#mainWrapper[translate=no]",
      "body.notranslate"
    ],
    "additionalExcludeSelectors.remove": [
      ".notranslate",
      "[translate=no]"
    ],
    "excludeTags.remove": [
      "PRE"
    ],
    "isTransformPreTagNewLine": true
  }
];
