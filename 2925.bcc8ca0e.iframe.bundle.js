"use strict";(self.webpackChunk_skatteetaten_designsystemet=self.webpackChunk_skatteetaten_designsystemet||[]).push([[2925],{"./libs/ds-overlays/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u_:()=>Modal,ck:()=>getModalDismissOnEscDefault,au:()=>getModalDismissOnOutsideClickDefault,Xw:()=>getModalPaddingDefault,XA:()=>getModalVariantDefault});var react=__webpack_require__("./node_modules/react/index.js"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),src=__webpack_require__("./libs/ds-buttons/src/index.ts"),ds_core_utils_src=__webpack_require__("./libs/ds-core-utils/src/index.ts"),ds_icons_src=__webpack_require__("./libs/ds-icons/src/index.ts"),ds_typography_src=__webpack_require__("./libs/ds-typography/src/index.ts");function cov_2qze4zv685(){var path="/var/jenkins_home/workspace/gnsystemet_designsystemet_master/libs/ds-overlays/src/Modal/defaults.ts",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"d8ab1f303dc78a172cc22d5aca2ce20be0878e2a"===coverage[path].hash||(coverage[path]={path:"/var/jenkins_home/workspace/gnsystemet_designsystemet_master/libs/ds-overlays/src/Modal/defaults.ts",statementMap:{0:{start:{line:3,column:38},end:{line:3,column:61}},1:{start:{line:3,column:58},end:{line:3,column:61}},2:{start:{line:4,column:38},end:{line:4,column:67}},3:{start:{line:4,column:58},end:{line:4,column:67}},4:{start:{line:5,column:52},end:{line:5,column:71}},5:{start:{line:5,column:67},end:{line:5,column:71}},6:{start:{line:6,column:43},end:{line:6,column:62}},7:{start:{line:6,column:58},end:{line:6,column:62}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:3,column:38},end:{line:3,column:39}},loc:{start:{line:3,column:58},end:{line:3,column:61}},line:3},1:{name:"(anonymous_1)",decl:{start:{line:4,column:38},end:{line:4,column:39}},loc:{start:{line:4,column:58},end:{line:4,column:67}},line:4},2:{name:"(anonymous_2)",decl:{start:{line:5,column:52},end:{line:5,column:53}},loc:{start:{line:5,column:67},end:{line:5,column:71}},line:5},3:{name:"(anonymous_3)",decl:{start:{line:6,column:43},end:{line:6,column:44}},loc:{start:{line:6,column:58},end:{line:6,column:62}},line:6}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0},f:{0:0,1:0,2:0,3:0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"d8ab1f303dc78a172cc22d5aca2ce20be0878e2a"});var actualCoverage=coverage[path];return cov_2qze4zv685=function(){return actualCoverage},actualCoverage}cov_2qze4zv685(),cov_2qze4zv685().s[0]++;var getModalPaddingDefault=function getModalPaddingDefault(){return cov_2qze4zv685().f[0]++,cov_2qze4zv685().s[1]++,"l"};cov_2qze4zv685().s[2]++;var getModalVariantDefault=function getModalVariantDefault(){return cov_2qze4zv685().f[1]++,cov_2qze4zv685().s[3]++,"outline"};cov_2qze4zv685().s[4]++;var getModalDismissOnOutsideClickDefault=function getModalDismissOnOutsideClickDefault(){return cov_2qze4zv685().f[2]++,cov_2qze4zv685().s[5]++,!0};cov_2qze4zv685().s[6]++;var getModalDismissOnEscDefault=function getModalDismissOnEscDefault(){return cov_2qze4zv685().f[3]++,cov_2qze4zv685().s[7]++,!0};const Modal_module={modal:"Modal_modal__JdsM-",modalContainer:"Modal_modalContainer__O6yz0",modalLogo:"Modal_modalLogo__jKJF2",modalHeading:"Modal_modalHeading__PFiZv",modalHeadingNoPadding:"Modal_modalHeadingNoPadding__uowuS",modalIllustration:"Modal_modalIllustration__Di203",modalNoBorder:"Modal_modalNoBorder__YIHxf",modalPaddingNONE:"Modal_modalPaddingNONE__hHaff",modalPaddingS:"Modal_modalPaddingS__ss-Fx",modalPaddingM:"Modal_modalPaddingM__N95cs",modalPaddingL:"Modal_modalPaddingL__TAljg",modalPaddingMEGA:"Modal_modalPaddingMEGA__qC1OI",modalNoPaddingTop:"Modal_modalNoPaddingTop__sOcSE",closeButton:"Modal_closeButton__PGrRw",srOnly:"Modal_srOnly__cHEpw"};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_2m6yfc1mgy(){var path="/var/jenkins_home/workspace/gnsystemet_designsystemet_master/libs/ds-overlays/src/Modal/Modal.tsx",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/var/jenkins_home/workspace/gnsystemet_designsystemet_master/libs/ds-overlays/src/Modal/Modal.tsx",statementMap:{0:{start:{line:30,column:21},end:{line:158,column:1}},1:{start:{line:52,column:22},end:{line:52,column:49}},2:{start:{line:53,column:18},end:{line:53,column:65}},3:{start:{line:55,column:21},end:{line:55,column:52}},4:{start:{line:56,column:4},end:{line:56,column:75}},5:{start:{line:56,column:35},end:{line:56,column:73}},6:{start:{line:58,column:4},end:{line:86,column:51}},7:{start:{line:59,column:6},end:{line:61,column:7}},8:{start:{line:60,column:8},end:{line:60,column:15}},9:{start:{line:62,column:29},end:{line:80,column:7}},10:{start:{line:63,column:24},end:{line:63,column:51}},11:{start:{line:64,column:8},end:{line:69,column:9}},12:{start:{line:68,column:10},end:{line:68,column:17}},13:{start:{line:70,column:21},end:{line:70,column:57}},14:{start:{line:71,column:8},end:{line:79,column:9}},15:{start:{line:77,column:10},end:{line:77,column:22}},16:{start:{line:78,column:10},end:{line:78,column:36}},17:{start:{line:82,column:6},end:{line:82,column:63}},18:{start:{line:83,column:6},end:{line:85,column:8}},19:{start:{line:84,column:8},end:{line:84,column:68}},20:{start:{line:88,column:31},end:{line:88,column:61}},21:{start:{line:90,column:6},end:{line:92,column:12}},22:{start:{line:94,column:6},end:{line:94,column:79}},23:{start:{line:95,column:25},end:{line:95,column:68}},24:{start:{line:97,column:6},end:{line:97,column:60}},25:{start:{line:99,column:4},end:{line:156,column:6}},26:{start:{line:111,column:10},end:{line:113,column:11}},27:{start:{line:112,column:12},end:{line:112,column:31}},28:{start:{line:114,column:10},end:{line:114,column:22}},29:{start:{line:124,column:16},end:{line:124,column:28}},30:{start:{line:125,column:16},end:{line:125,column:42}},31:{start:{line:160,column:0},end:{line:160,column:28}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:31,column:2},end:{line:31,column:3}},loc:{start:{line:51,column:20},end:{line:157,column:3}},line:51},1:{name:"(anonymous_1)",decl:{start:{line:56,column:29},end:{line:56,column:30}},loc:{start:{line:56,column:35},end:{line:56,column:73}},line:56},2:{name:"(anonymous_2)",decl:{start:{line:58,column:14},end:{line:58,column:15}},loc:{start:{line:58,column:20},end:{line:86,column:5}},line:58},3:{name:"(anonymous_3)",decl:{start:{line:62,column:29},end:{line:62,column:30}},loc:{start:{line:62,column:58},end:{line:80,column:7}},line:62},4:{name:"(anonymous_4)",decl:{start:{line:83,column:13},end:{line:83,column:14}},loc:{start:{line:83,column:19},end:{line:85,column:7}},line:83},5:{name:"(anonymous_5)",decl:{start:{line:110,column:18},end:{line:110,column:19}},loc:{start:{line:110,column:31},end:{line:115,column:9}},line:110},6:{name:"(anonymous_6)",decl:{start:{line:123,column:23},end:{line:123,column:24}},loc:{start:{line:123,column:35},end:{line:126,column:15}},line:123}},branchMap:{0:{loc:{start:{line:34,column:6},end:{line:34,column:45}},type:"default-arg",locations:[{start:{line:34,column:18},end:{line:34,column:45}}],line:34},1:{loc:{start:{line:38,column:6},end:{line:38,column:50}},type:"default-arg",locations:[{start:{line:38,column:21},end:{line:38,column:50}}],line:38},2:{loc:{start:{line:39,column:6},end:{line:39,column:68}},type:"default-arg",locations:[{start:{line:39,column:30},end:{line:39,column:68}}],line:39},3:{loc:{start:{line:44,column:6},end:{line:44,column:40}},type:"default-arg",locations:[{start:{line:44,column:16},end:{line:44,column:40}}],line:44},4:{loc:{start:{line:46,column:6},end:{line:46,column:40}},type:"default-arg",locations:[{start:{line:46,column:16},end:{line:46,column:40}}],line:46},5:{loc:{start:{line:59,column:6},end:{line:61,column:7}},type:"if",locations:[{start:{line:59,column:6},end:{line:61,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:59},6:{loc:{start:{line:64,column:8},end:{line:69,column:9}},type:"if",locations:[{start:{line:64,column:8},end:{line:69,column:9}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:64},7:{loc:{start:{line:65,column:10},end:{line:66,column:38}},type:"binary-expr",locations:[{start:{line:65,column:10},end:{line:65,column:48}},{start:{line:66,column:10},end:{line:66,column:38}}],line:65},8:{loc:{start:{line:71,column:8},end:{line:79,column:9}},type:"if",locations:[{start:{line:71,column:8},end:{line:79,column:9}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:71},9:{loc:{start:{line:72,column:10},end:{line:75,column:37}},type:"binary-expr",locations:[{start:{line:72,column:10},end:{line:72,column:35}},{start:{line:73,column:10},end:{line:73,column:36}},{start:{line:74,column:10},end:{line:74,column:34}},{start:{line:75,column:10},end:{line:75,column:37}}],line:72},10:{loc:{start:{line:88,column:31},end:{line:88,column:61}},type:"cond-expr",locations:[{start:{line:88,column:43},end:{line:88,column:56}},{start:{line:88,column:59},end:{line:88,column:61}}],line:88},11:{loc:{start:{line:90,column:6},end:{line:92,column:12}},type:"cond-expr",locations:[{start:{line:91,column:10},end:{line:91,column:30}},{start:{line:92,column:10},end:{line:92,column:12}}],line:90},12:{loc:{start:{line:90,column:6},end:{line:90,column:52}},type:"binary-expr",locations:[{start:{line:90,column:6},end:{line:90,column:25}},{start:{line:90,column:29},end:{line:90,column:52}}],line:90},13:{loc:{start:{line:95,column:25},end:{line:95,column:68}},type:"cond-expr",locations:[{start:{line:95,column:39},end:{line:95,column:63}},{start:{line:95,column:66},end:{line:95,column:68}}],line:95},14:{loc:{start:{line:97,column:6},end:{line:97,column:60}},type:"cond-expr",locations:[{start:{line:97,column:27},end:{line:97,column:55}},{start:{line:97,column:58},end:{line:97,column:60}}],line:97},15:{loc:{start:{line:104,column:10},end:{line:104,column:37}},type:"binary-expr",locations:[{start:{line:104,column:10},end:{line:104,column:31}},{start:{line:104,column:35},end:{line:104,column:37}}],line:104},16:{loc:{start:{line:111,column:10},end:{line:113,column:11}},type:"if",locations:[{start:{line:111,column:10},end:{line:113,column:11}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:111},17:{loc:{start:{line:118,column:11},end:{line:128,column:11}},type:"binary-expr",locations:[{start:{line:118,column:11},end:{line:118,column:27}},{start:{line:119,column:12},end:{line:127,column:14}}],line:118},18:{loc:{start:{line:129,column:11},end:{line:137,column:11}},type:"binary-expr",locations:[{start:{line:129,column:11},end:{line:129,column:22}},{start:{line:130,column:12},end:{line:136,column:14}}],line:129},19:{loc:{start:{line:132,column:19},end:{line:132,column:43}},type:"binary-expr",locations:[{start:{line:132,column:19},end:{line:132,column:37}},{start:{line:132,column:41},end:{line:132,column:43}}],line:132},20:{loc:{start:{line:134,column:16},end:{line:134,column:39}},type:"binary-expr",locations:[{start:{line:134,column:16},end:{line:134,column:33}},{start:{line:134,column:37},end:{line:134,column:39}}],line:134},21:{loc:{start:{line:139,column:13},end:{line:141,column:13}},type:"binary-expr",locations:[{start:{line:139,column:13},end:{line:139,column:36}},{start:{line:140,column:14},end:{line:140,column:63}}],line:139},22:{loc:{start:{line:153,column:11},end:{line:153,column:51}},type:"binary-expr",locations:[{start:{line:153,column:11},end:{line:153,column:34}},{start:{line:153,column:38},end:{line:153,column:51}}],line:153}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0,29:0,30:0,31:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0},b:{0:[0],1:[0],2:[0],3:[0],4:[0],5:[0,0],6:[0,0],7:[0,0],8:[0,0],9:[0,0,0,0],10:[0,0],11:[0,0],12:[0,0],13:[0,0],14:[0,0],15:[0,0],16:[0,0],17:[0,0],18:[0,0],19:[0,0],20:[0,0],21:[0,0],22:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"a513a2292c232103298209314e17d15cf68a9556"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"a513a2292c232103298209314e17d15cf68a9556"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_2m6yfc1mgy=function(){return actualCoverage},actualCoverage}cov_2m6yfc1mgy();var Modal=(cov_2m6yfc1mgy().s[0]++,(0,react.forwardRef)((function(_ref,ref){var _ref3,_ref4,_ref5,id=_ref.id,_ref$className=_ref.className,className=void 0===_ref$className?(cov_2m6yfc1mgy().b[0][0]++,(0,ds_core_utils_src.d9)()):_ref$className,classNames=_ref.classNames,lang=_ref.lang,dataTestId=_ref["data-testid"],_ref$dismissOnEsc=_ref.dismissOnEsc,dismissOnEsc=void 0===_ref$dismissOnEsc?(cov_2m6yfc1mgy().b[1][0]++,getModalDismissOnEscDefault()):_ref$dismissOnEsc,_ref$dismissOnOutside=_ref.dismissOnOutsideClick,dismissOnOutsideClick=void 0===_ref$dismissOnOutside?(cov_2m6yfc1mgy().b[2][0]++,getModalDismissOnOutsideClickDefault()):_ref$dismissOnOutside,hideCloseButton=_ref.hideCloseButton,hideTitle=_ref.hideTitle,imageSource=_ref.imageSource,imageSourceAltText=_ref.imageSourceAltText,_ref$padding=_ref.padding,padding=void 0===_ref$padding?(cov_2m6yfc1mgy().b[3][0]++,getModalPaddingDefault()):_ref$padding,title=_ref.title,_ref$variant=_ref.variant,variant=void 0===_ref$variant?(cov_2m6yfc1mgy().b[4][0]++,getModalVariantDefault()):_ref$variant,onClose=_ref.onClose,children=_ref.children;cov_2m6yfc1mgy().f[0]++;var headingId=(cov_2m6yfc1mgy().s[1]++,"modalHeadingId-"+(0,react.useId)()),t=(cov_2m6yfc1mgy().s[2]++,(0,es.$G)("ds_overlays",{i18n:ds_core_utils_src.g0})).t,modalRef=(cov_2m6yfc1mgy().s[3]++,(0,react.useRef)(null));cov_2m6yfc1mgy().s[4]++,(0,react.useImperativeHandle)(ref,(function(){return cov_2m6yfc1mgy().f[1]++,cov_2m6yfc1mgy().s[5]++,null==modalRef?void 0:modalRef.current})),cov_2m6yfc1mgy().s[6]++,(0,react.useEffect)((function(){if(cov_2m6yfc1mgy().f[2]++,cov_2m6yfc1mgy().s[7]++,!dismissOnOutsideClick)return cov_2m6yfc1mgy().b[5][0]++,void cov_2m6yfc1mgy().s[8]++;cov_2m6yfc1mgy().b[5][1]++,cov_2m6yfc1mgy().s[9]++;var onClickOutside=function onClickOutside(event){cov_2m6yfc1mgy().f[3]++;var element=(cov_2m6yfc1mgy().s[10]++,event.target);if(cov_2m6yfc1mgy().s[11]++,cov_2m6yfc1mgy().b[7][0]++,!(event.target instanceof HTMLElement&&(cov_2m6yfc1mgy().b[7][1]++,"DIALOG"===element.tagName)))return cov_2m6yfc1mgy().b[6][0]++,void cov_2m6yfc1mgy().s[12]++;cov_2m6yfc1mgy().b[6][1]++;var _modalRef$current,rect=(cov_2m6yfc1mgy().s[13]++,event.target.getBoundingClientRect());(cov_2m6yfc1mgy().s[14]++,cov_2m6yfc1mgy().b[9][0]++,rect.left>event.clientX||(cov_2m6yfc1mgy().b[9][1]++,rect.right<event.clientX)||(cov_2m6yfc1mgy().b[9][2]++,rect.top>event.clientY)||(cov_2m6yfc1mgy().b[9][3]++,rect.bottom<event.clientY))?(cov_2m6yfc1mgy().b[8][0]++,cov_2m6yfc1mgy().s[15]++,null==onClose||onClose(),cov_2m6yfc1mgy().s[16]++,null==(_modalRef$current=modalRef.current)||_modalRef$current.close()):cov_2m6yfc1mgy().b[8][1]++};return cov_2m6yfc1mgy().s[17]++,document.addEventListener("click",onClickOutside,!0),cov_2m6yfc1mgy().s[18]++,function(){cov_2m6yfc1mgy().f[4]++,cov_2m6yfc1mgy().s[19]++,document.removeEventListener("click",onClickOutside,!0)}}),[modalRef,dismissOnOutsideClick,onClose]);var hideTitleClassName=(cov_2m6yfc1mgy().s[20]++,hideTitle?(cov_2m6yfc1mgy().b[10][0]++,Modal_module.srOnly):(cov_2m6yfc1mgy().b[10][1]++,"")),hideOutlineClassName=(cov_2m6yfc1mgy().s[21]++,cov_2m6yfc1mgy().b[12][0]++,"plain"===variant||(cov_2m6yfc1mgy().b[12][1]++,"important"===variant)?(cov_2m6yfc1mgy().b[11][0]++,Modal_module.modalNoBorder):(cov_2m6yfc1mgy().b[11][1]++,"")),paddingClassName=(cov_2m6yfc1mgy().s[22]++,Modal_module["modalPadding"+padding.toUpperCase()]),noPaddingTop=(cov_2m6yfc1mgy().s[23]++,imageSource?(cov_2m6yfc1mgy().b[13][0]++,Modal_module.modalNoPaddingTop):(cov_2m6yfc1mgy().b[13][1]++,"")),headingNoPaddingClassName=(cov_2m6yfc1mgy().s[24]++,"mega"===padding?(cov_2m6yfc1mgy().b[14][0]++,Modal_module.modalHeadingNoPadding):(cov_2m6yfc1mgy().b[14][1]++,""));return cov_2m6yfc1mgy().s[25]++,(0,jsx_runtime.jsx)("dialog",{ref:modalRef,id,className:(Modal_module.modal+" "+hideOutlineClassName+" "+className+" "+(null!=(cov_2m6yfc1mgy().b[15][0]++,_ref3=null==classNames?void 0:classNames.container)?_ref3:(cov_2m6yfc1mgy().b[15][1]++,""))).trim(),lang,"data-testid":dataTestId,"aria-labelledby":headingId,autoFocus:!0,onCancel:function onCancel(e){cov_2m6yfc1mgy().f[5]++,cov_2m6yfc1mgy().s[26]++,dismissOnEsc?cov_2m6yfc1mgy().b[16][1]++:(cov_2m6yfc1mgy().b[16][0]++,cov_2m6yfc1mgy().s[27]++,e.preventDefault()),cov_2m6yfc1mgy().s[28]++,null==onClose||onClose()},children:(0,jsx_runtime.jsxs)("div",{tabIndex:-1,className:Modal_module.modalContainer,children:[(cov_2m6yfc1mgy().b[17][0]++,!hideCloseButton&&(cov_2m6yfc1mgy().b[17][1]++,(0,jsx_runtime.jsx)(src.hU,{className:Modal_module.closeButton,svgPath:ds_icons_src.HJ0,title:t("modal.CloseModal"),onClick:function onClick(){var _modalRef$current2;cov_2m6yfc1mgy().f[6]++,cov_2m6yfc1mgy().s[29]++,null==onClose||onClose(),cov_2m6yfc1mgy().s[30]++,null==(_modalRef$current2=modalRef.current)||_modalRef$current2.close()}}))),(cov_2m6yfc1mgy().b[18][0]++,imageSource&&(cov_2m6yfc1mgy().b[18][1]++,(0,jsx_runtime.jsx)("img",{src:imageSource,alt:null!=(cov_2m6yfc1mgy().b[19][0]++,_ref4=imageSourceAltText)?_ref4:(cov_2m6yfc1mgy().b[19][1]++,""),className:(Modal_module.modalIllustration+" "+(null!=(cov_2m6yfc1mgy().b[20][0]++,_ref5=null==classNames?void 0:classNames.image)?_ref5:(cov_2m6yfc1mgy().b[20][1]++,""))).trim()}))),(0,jsx_runtime.jsxs)("div",{className:(paddingClassName+" "+noPaddingTop).trim(),children:[(cov_2m6yfc1mgy().b[21][0]++,"important"===variant&&(cov_2m6yfc1mgy().b[21][1]++,(0,jsx_runtime.jsx)(ds_core_utils_src.i0,{className:Modal_module.modalLogo}))),(0,jsx_runtime.jsx)(ds_typography_src.X6,{className:(Modal_module.modalHeading+" "+headingNoPaddingClassName+" "+hideTitleClassName).trim(),id:headingId,as:"h1",level:3,hasSpacing:!0,children:title}),children]}),(cov_2m6yfc1mgy().b[22][0]++,"important"===variant&&(cov_2m6yfc1mgy().b[22][1]++,(0,jsx_runtime.jsx)(ds_core_utils_src.Z0,{})))]})})})));cov_2m6yfc1mgy().s[31]++,Modal.displayName="Modal";try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"{ container?: string; image?: string; }"}},children:{defaultValue:null,description:"Innhold",name:"children",required:!0,type:{name:"ReactNode"}},variant:{defaultValue:{value:"getModalVariantDefault()"},description:"Definerer stilen til Modal",name:"variant",required:!1,type:{name:'"plain" | "important" | "outline"'}},padding:{defaultValue:{value:"getModalPaddingDefault()"},description:"Padding rundt Modal",name:"padding",required:!1,type:{name:'"s" | "none" | "m" | "l" | "mega"'}},title:{defaultValue:null,description:"Overskrift",name:"title",required:!0,type:{name:"string"}},hideTitle:{defaultValue:null,description:"Skjuler overskriften, men fremdeles synlig for skjermleser",name:"hideTitle",required:!1,type:{name:"boolean"}},hideCloseButton:{defaultValue:null,description:"Om lukkekryss skal skjules",name:"hideCloseButton",required:!1,type:{name:"boolean"}},dismissOnOutsideClick:{defaultValue:{value:"getModalDismissOnOutsideClickDefault()"},description:"Om autolukking skal skrus på/av. Autolukking er skrudd på som default.",name:"dismissOnOutsideClick",required:!1,type:{name:"boolean"}},dismissOnEsc:{defaultValue:{value:"getModalDismissOnEscDefault()"},description:"Om modalen kan lukkes ved Esc-trykk. Modalen lukkes ved Esc-trykk som default.",name:"dismissOnEsc",required:!1,type:{name:"boolean"}},imageSource:{defaultValue:null,description:"Source til illustrasjonsbilde øverst i Modal",name:"imageSource",required:!1,type:{name:"string"}},imageSourceAltText:{defaultValue:null,description:"Alt tekst til illustrasjonsbilde. Hvis bildet er meningsbærende, legg på alt tekst.",name:"imageSourceAltText",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"Callback når modalen lukkes",name:"onClose",required:!1,type:{name:"() => void"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",name:"ref",required:!1,type:{name:"Ref<HTMLDialogElement>"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/ds-overlays/src/Modal/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"libs/ds-overlays/src/Modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}function cov_2lxqf8rljw(){var path="/var/jenkins_home/workspace/gnsystemet_designsystemet_master/libs/ds-overlays/src/Popover/Popover.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"69016852bb7bf3c40cad6c68249881bb147cc4c8"===coverage[path].hash||(coverage[path]={path:"/var/jenkins_home/workspace/gnsystemet_designsystemet_master/libs/ds-overlays/src/Popover/Popover.tsx",statementMap:{0:{start:{line:7,column:23},end:{line:30,column:1}},1:{start:{line:18,column:4},end:{line:28,column:6}},2:{start:{line:32,column:0},end:{line:32,column:32}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:8,column:2},end:{line:8,column:3}},loc:{start:{line:17,column:20},end:{line:29,column:3}},line:17}},branchMap:{0:{loc:{start:{line:11,column:6},end:{line:11,column:45}},type:"default-arg",locations:[{start:{line:11,column:18},end:{line:11,column:45}}],line:11}},s:{0:0,1:0,2:0},f:{0:0},b:{0:[0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"69016852bb7bf3c40cad6c68249881bb147cc4c8"});var actualCoverage=coverage[path];return cov_2lxqf8rljw=function(){return actualCoverage},actualCoverage}cov_2lxqf8rljw();var Popover=(cov_2lxqf8rljw().s[0]++,(0,react.forwardRef)((function(_ref,ref){var id=_ref.id,_ref$className=_ref.className,className=void 0===_ref$className?(cov_2lxqf8rljw().b[0][0]++,(0,ds_core_utils_src.d9)()):_ref$className,lang=_ref.lang,dataTestId=_ref["data-testid"],children=_ref.children;return cov_2lxqf8rljw().f[0]++,cov_2lxqf8rljw().s[1]++,(0,jsx_runtime.jsx)("div",{ref,id,className,lang,"data-testid":dataTestId,children})})));cov_2lxqf8rljw().s[2]++,Popover.displayName="Popover";try{Popover.displayName="Popover",Popover.__docgenInfo={description:"",displayName:"Popover",props:{children:{defaultValue:null,description:"Children",name:"children",required:!0,type:{name:"string"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/ds-overlays/src/Popover/Popover.tsx#Popover"]={docgenInfo:Popover.__docgenInfo,name:"Popover",path:"libs/ds-overlays/src/Popover/Popover.tsx#Popover"})}catch(__react_docgen_typescript_loader_error){}function cov_1soo6cssog(){var path="/var/jenkins_home/workspace/gnsystemet_designsystemet_master/libs/ds-overlays/src/index.ts",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"ea4810eb633c77199ad75e13446f99836cb9b0c9"===coverage[path].hash||(coverage[path]={path:"/var/jenkins_home/workspace/gnsystemet_designsystemet_master/libs/ds-overlays/src/index.ts",statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"ea4810eb633c77199ad75e13446f99836cb9b0c9"});var actualCoverage=coverage[path];return cov_1soo6cssog=function(){return actualCoverage},actualCoverage}cov_1soo6cssog()},"./apps/ds-playground/src/assets/farmer-illustration.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__.p+"farmer-illustration.7eebe78d220ecf48b97e4811ac2c5210.svg"},"./apps/ds-playground/src/assets/wait-alert-illustration.png":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"wait-alert-illustration.png"}}]);