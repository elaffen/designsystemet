"use strict";(self.webpackChunk_skatteetaten_designsystemet=self.webpackChunk_skatteetaten_designsystemet||[]).push([[6909],{"./libs/ds-collections/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q6:()=>OpenClose,y$:()=>StepList,fB:()=>getOpenCloseIconPositionDefault,P4:()=>getOpenCloseVariantDefault,Ue:()=>getStepListStepTitleAsDefault,m5:()=>getStepListStepVariantDefault,J:()=>stepVariantArr});var react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./libs/ds-core-utils/src/index.ts"),ds_icons_src=__webpack_require__("./libs/ds-icons/src/index.ts");function cov_11127bvw9w(){var path="/var/jenkins_home/workspace/gnsystemet_designsystemet_master/libs/ds-collections/src/OpenClose/defaults.ts",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"2406e02c8b76c9e40f3e87dc1519f1793d0a8143"===coverage[path].hash||(coverage[path]={path:"/var/jenkins_home/workspace/gnsystemet_designsystemet_master/libs/ds-collections/src/OpenClose/defaults.ts",statementMap:{0:{start:{line:3,column:47},end:{line:3,column:69}},1:{start:{line:3,column:63},end:{line:3,column:69}},2:{start:{line:4,column:42},end:{line:4,column:67}},3:{start:{line:4,column:57},end:{line:4,column:67}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:3,column:47},end:{line:3,column:48}},loc:{start:{line:3,column:63},end:{line:3,column:69}},line:3},1:{name:"(anonymous_1)",decl:{start:{line:4,column:42},end:{line:4,column:43}},loc:{start:{line:4,column:57},end:{line:4,column:67}},line:4}},branchMap:{},s:{0:0,1:0,2:0,3:0},f:{0:0,1:0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"2406e02c8b76c9e40f3e87dc1519f1793d0a8143"});var actualCoverage=coverage[path];return cov_11127bvw9w=function(){return actualCoverage},actualCoverage}cov_11127bvw9w(),cov_11127bvw9w().s[0]++;var getOpenCloseIconPositionDefault=function getOpenCloseIconPositionDefault(){return cov_11127bvw9w().f[0]++,cov_11127bvw9w().s[1]++,"left"};cov_11127bvw9w().s[2]++;var getOpenCloseVariantDefault=function getOpenCloseVariantDefault(){return cov_11127bvw9w().f[1]++,cov_11127bvw9w().s[3]++,"standard"};const OpenClose_module_tag="OpenClose_tag__hWZ8z",OpenClose_module_openClose="OpenClose_openClose__HxKKD",OpenClose_module_openClose_compact="OpenClose_openClose_compact__TuMGQ",OpenClose_module_openClose_hasIconRight="OpenClose_openClose_hasIconRight__3rsup",OpenClose_module_icon_active="OpenClose_icon_active__ZZeR8",OpenClose_module_icon="OpenClose_icon__aE-c6",OpenClose_module_icon_open="OpenClose_icon_open__3ueiR",OpenClose_module_icon_closed="OpenClose_icon_closed__ubP4N",OpenClose_module_icon_compact="OpenClose_icon_compact__Nl-IS",OpenClose_module_title="OpenClose_title__tWrXz",OpenClose_module_title_underline="OpenClose_title_underline__WLqQJ",OpenClose_module_title_compact="OpenClose_title_compact__8rSWt",OpenClose_module_content="OpenClose_content__SuoX1",OpenClose_module_content_compact="OpenClose_content_compact__Hh-8S",OpenClose_module_content_hasIconRight="OpenClose_content_hasIconRight__YULhj";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_10rfwf8m6g(){var path="/var/jenkins_home/workspace/gnsystemet_designsystemet_master/libs/ds-collections/src/OpenClose/OpenClose.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"fa7ccaf17d35f84b97d512eb7920a9dba3ebf750"===coverage[path].hash||(coverage[path]={path:"/var/jenkins_home/workspace/gnsystemet_designsystemet_master/libs/ds-collections/src/OpenClose/OpenClose.tsx",statementMap:{0:{start:{line:14,column:25},end:{line:95,column:1}},1:{start:{line:34,column:6},end:{line:34,column:30}},2:{start:{line:37,column:6},end:{line:39,column:28}},3:{start:{line:41,column:16},end:{line:41,column:35}},4:{start:{line:42,column:25},end:{line:42,column:49}},5:{start:{line:43,column:22},end:{line:43,column:43}},6:{start:{line:45,column:24},end:{line:52,column:5}},7:{start:{line:46,column:6},end:{line:50,column:7}},8:{start:{line:47,column:8},end:{line:47,column:36}},9:{start:{line:49,column:8},end:{line:49,column:21}},10:{start:{line:51,column:6},end:{line:51,column:41}},11:{start:{line:54,column:31},end:{line:56,column:10}},12:{start:{line:57,column:29},end:{line:57,column:70}},13:{start:{line:58,column:31},end:{line:58,column:107}},14:{start:{line:59,column:26},end:{line:61,column:46}},15:{start:{line:62,column:27},end:{line:64,column:53}},16:{start:{line:65,column:29},end:{line:67,column:57}},17:{start:{line:69,column:4},end:{line:93,column:6}},18:{start:{line:97,column:0},end:{line:97,column:36}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:15,column:2},end:{line:15,column:3}},loc:{start:{line:32,column:7},end:{line:94,column:3}},line:32},1:{name:"(anonymous_1)",decl:{start:{line:45,column:24},end:{line:45,column:25}},loc:{start:{line:45,column:68},end:{line:52,column:5}},line:45}},branchMap:{0:{loc:{start:{line:18,column:6},end:{line:18,column:45}},type:"default-arg",locations:[{start:{line:18,column:18},end:{line:18,column:45}}],line:18},1:{loc:{start:{line:23,column:6},end:{line:23,column:44}},type:"default-arg",locations:[{start:{line:23,column:16},end:{line:23,column:44}}],line:23},2:{loc:{start:{line:24,column:6},end:{line:24,column:54}},type:"default-arg",locations:[{start:{line:24,column:21},end:{line:24,column:54}}],line:24},3:{loc:{start:{line:37,column:6},end:{line:39,column:28}},type:"cond-expr",locations:[{start:{line:38,column:10},end:{line:38,column:28}},{start:{line:39,column:10},end:{line:39,column:28}}],line:37},4:{loc:{start:{line:41,column:16},end:{line:41,column:35}},type:"binary-expr",locations:[{start:{line:41,column:16},end:{line:41,column:26}},{start:{line:41,column:30},end:{line:41,column:35}}],line:41},5:{loc:{start:{line:46,column:6},end:{line:50,column:7}},type:"if",locations:[{start:{line:46,column:6},end:{line:50,column:7}},{start:{line:48,column:13},end:{line:50,column:7}}],line:46},6:{loc:{start:{line:47,column:8},end:{line:47,column:35}},type:"binary-expr",locations:[{start:{line:47,column:8},end:{line:47,column:19}},{start:{line:47,column:23},end:{line:47,column:35}}],line:47},7:{loc:{start:{line:54,column:31},end:{line:56,column:10}},type:"cond-expr",locations:[{start:{line:55,column:8},end:{line:55,column:37}},{start:{line:56,column:8},end:{line:56,column:10}}],line:54},8:{loc:{start:{line:57,column:29},end:{line:57,column:70}},type:"cond-expr",locations:[{start:{line:57,column:41},end:{line:57,column:65}},{start:{line:57,column:68},end:{line:57,column:70}}],line:57},9:{loc:{start:{line:60,column:6},end:{line:60,column:56}},type:"cond-expr",locations:[{start:{line:60,column:19},end:{line:60,column:35}},{start:{line:60,column:38},end:{line:60,column:56}}],line:60},10:{loc:{start:{line:61,column:8},end:{line:61,column:44}},type:"cond-expr",locations:[{start:{line:61,column:20},end:{line:61,column:39}},{start:{line:61,column:42},end:{line:61,column:44}}],line:61},11:{loc:{start:{line:63,column:6},end:{line:63,column:43}},type:"cond-expr",locations:[{start:{line:63,column:18},end:{line:63,column:38}},{start:{line:63,column:41},end:{line:63,column:43}}],line:63},12:{loc:{start:{line:64,column:8},end:{line:64,column:51}},type:"cond-expr",locations:[{start:{line:64,column:24},end:{line:64,column:46}},{start:{line:64,column:49},end:{line:64,column:51}}],line:64},13:{loc:{start:{line:66,column:6},end:{line:66,column:45}},type:"cond-expr",locations:[{start:{line:66,column:18},end:{line:66,column:40}},{start:{line:66,column:43},end:{line:66,column:45}}],line:66},14:{loc:{start:{line:67,column:8},end:{line:67,column:55}},type:"cond-expr",locations:[{start:{line:67,column:23},end:{line:67,column:50}},{start:{line:67,column:53},end:{line:67,column:55}}],line:67},15:{loc:{start:{line:85,column:20},end:{line:85,column:50}},type:"cond-expr",locations:[{start:{line:85,column:32},end:{line:85,column:40}},{start:{line:85,column:43},end:{line:85,column:50}}],line:85},16:{loc:{start:{line:91,column:9},end:{line:91,column:73}},type:"binary-expr",locations:[{start:{line:91,column:9},end:{line:91,column:19}},{start:{line:91,column:23},end:{line:91,column:73}}],line:91}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0},f:{0:0,1:0},b:{0:[0],1:[0],2:[0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0],9:[0,0],10:[0,0],11:[0,0],12:[0,0],13:[0,0],14:[0,0],15:[0,0],16:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"fa7ccaf17d35f84b97d512eb7920a9dba3ebf750"});var actualCoverage=coverage[path];return cov_10rfwf8m6g=function(){return actualCoverage},actualCoverage}cov_10rfwf8m6g();var OpenClose=(cov_10rfwf8m6g().s[0]++,(0,react.forwardRef)((function(_ref,ref){var _ref3,id=_ref.id,_ref$className=_ref.className,className=void 0===_ref$className?(cov_10rfwf8m6g().b[0][0]++,(0,src.d9)()):_ref$className,lang=_ref.lang,dataTestId=_ref["data-testid"],title=_ref.title,HeadingTag=_ref.titleAs,_ref$variant=_ref.variant,variant=void 0===_ref$variant?(cov_10rfwf8m6g().b[1][0]++,getOpenCloseVariantDefault()):_ref$variant,_ref$iconPosition=_ref.iconPosition,iconPosition=void 0===_ref$iconPosition?(cov_10rfwf8m6g().b[2][0]++,getOpenCloseIconPositionDefault()):_ref$iconPosition,isExpandedExternal=_ref.isExpanded,isOnClickOnlyFiredOnOpen=_ref.isOnClickOnlyFiredOnOpen,showUnderline=_ref.showUnderline,onClick=_ref.onClick,children=_ref.children;cov_10rfwf8m6g().f[0]++;var _ref2=(cov_10rfwf8m6g().s[1]++,(0,react.useState)(!1)),isExpandedInternal=_ref2[0],setIsExpandedInternal=_ref2[1],isExpanded=(cov_10rfwf8m6g().s[2]++,void 0!==isExpandedExternal?(cov_10rfwf8m6g().b[3][0]++,isExpandedExternal):(cov_10rfwf8m6g().b[3][1]++,isExpandedInternal)),Tag=(cov_10rfwf8m6g().s[3]++,null!=(cov_10rfwf8m6g().b[4][0]++,_ref3=HeadingTag)?_ref3:(cov_10rfwf8m6g().b[4][1]++,"div")),hasIconRight=(cov_10rfwf8m6g().s[4]++,"right"===iconPosition),isCompact=(cov_10rfwf8m6g().s[5]++,"compact"===variant);cov_10rfwf8m6g().s[6]++;var iconRightClassName=(cov_10rfwf8m6g().s[11]++,hasIconRight?(cov_10rfwf8m6g().b[7][0]++,OpenClose_module_openClose_hasIconRight):(cov_10rfwf8m6g().b[7][1]++,"")),compactClassName=(cov_10rfwf8m6g().s[12]++,isCompact?(cov_10rfwf8m6g().b[8][0]++,OpenClose_module_openClose_compact):(cov_10rfwf8m6g().b[8][1]++,"")),openCloseClassName=(cov_10rfwf8m6g().s[13]++,OpenClose_module_openClose+" "+compactClassName+" "+iconRightClassName+" "+className),iconClassName=(cov_10rfwf8m6g().s[14]++,OpenClose_module_icon+" "+OpenClose_module_icon_active+" "+(isExpanded?(cov_10rfwf8m6g().b[9][0]++,OpenClose_module_icon_open):(cov_10rfwf8m6g().b[9][1]++,OpenClose_module_icon_closed))+" "+(isCompact?(cov_10rfwf8m6g().b[10][0]++,OpenClose_module_icon_compact):(cov_10rfwf8m6g().b[10][1]++,""))),titleClassName=(cov_10rfwf8m6g().s[15]++,OpenClose_module_title+" "+(isCompact?(cov_10rfwf8m6g().b[11][0]++,OpenClose_module_title_compact):(cov_10rfwf8m6g().b[11][1]++,""))+" "+(showUnderline?(cov_10rfwf8m6g().b[12][0]++,OpenClose_module_title_underline):(cov_10rfwf8m6g().b[12][1]++,""))),contentClassName=(cov_10rfwf8m6g().s[16]++,OpenClose_module_content+" "+(isCompact?(cov_10rfwf8m6g().b[13][0]++,OpenClose_module_content_compact):(cov_10rfwf8m6g().b[13][1]++,""))+" "+(hasIconRight?(cov_10rfwf8m6g().b[14][0]++,OpenClose_module_content_hasIconRight):(cov_10rfwf8m6g().b[14][1]++,"")));return cov_10rfwf8m6g().s[17]++,(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Tag,{className:OpenClose_module_tag,children:(0,jsx_runtime.jsxs)("button",{ref,id,className:openCloseClassName,lang,"data-testid":dataTestId,"aria-expanded":isExpanded,type:"button",onClick:function handleClick(e){cov_10rfwf8m6g().f[1]++,cov_10rfwf8m6g().s[7]++,isOnClickOnlyFiredOnOpen?(cov_10rfwf8m6g().b[5][0]++,cov_10rfwf8m6g().s[8]++,cov_10rfwf8m6g().b[6][0]++,!isExpanded&&(cov_10rfwf8m6g().b[6][1]++,null==onClick||onClick(e))):(cov_10rfwf8m6g().b[5][1]++,cov_10rfwf8m6g().s[9]++,null==onClick||onClick(e)),cov_10rfwf8m6g().s[10]++,setIsExpandedInternal(!isExpanded)},children:[(0,jsx_runtime.jsx)(ds_icons_src.JO$,{svgPath:ds_icons_src.WIU,className:iconClassName,size:isCompact?(cov_10rfwf8m6g().b[15][0]++,"medium"):(cov_10rfwf8m6g().b[15][1]++,"large")}),(0,jsx_runtime.jsx)("span",{className:titleClassName,children:title})]})}),(cov_10rfwf8m6g().b[16][0]++,isExpanded&&(cov_10rfwf8m6g().b[16][1]++,(0,jsx_runtime.jsx)("div",{className:contentClassName,children})))]})})));cov_10rfwf8m6g().s[18]++,OpenClose.displayName="OpenClose";try{OpenClose.displayName="OpenClose",OpenClose.__docgenInfo={description:"",displayName:"OpenClose",props:{iconPosition:{defaultValue:{value:"getOpenCloseIconPositionDefault()"},description:"Posisjonen til ikonet",name:"iconPosition",required:!1,type:{name:"Position"}},title:{defaultValue:null,description:"Tekst på knappen",name:"title",required:!0,type:{name:"string"}},titleAs:{defaultValue:null,description:"Rendrer knappen som heading på gitt nivå",name:"titleAs",required:!1,type:{name:"HeadingAs"}},variant:{defaultValue:{value:"getOpenCloseVariantDefault()"},description:"Viser en kompakt versjon med mindre tekst og avstander",name:"variant",required:!1,type:{name:"Density"}},isExpanded:{defaultValue:null,description:"Om innholdet skal vises",name:"isExpanded",required:!1,type:{name:"boolean"}},isOnClickOnlyFiredOnOpen:{defaultValue:null,description:"Om onClick bare skal kalles når innholdet åpnes",name:"isOnClickOnlyFiredOnOpen",required:!1,type:{name:"boolean"}},showUnderline:{defaultValue:null,description:"Om teksten på knappen skal ha understrek",name:"showUnderline",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Callback når knappen OpenClose trykkes på",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},children:{defaultValue:null,description:"Tekst eller markup som vises/skjules.",name:"children",required:!1,type:{name:"ReactNode"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/ds-collections/src/OpenClose/OpenClose.tsx#OpenClose"]={docgenInfo:OpenClose.__docgenInfo,name:"OpenClose",path:"libs/ds-collections/src/OpenClose/OpenClose.tsx#OpenClose"})}catch(__react_docgen_typescript_loader_error){}function cov_2kzsgkpn1e(){var path="/var/jenkins_home/workspace/gnsystemet_designsystemet_master/libs/ds-collections/src/StepListStep/defaults.ts",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"5edd173ea2110c9feac5486119cd49233374fa09"===coverage[path].hash||(coverage[path]={path:"/var/jenkins_home/workspace/gnsystemet_designsystemet_master/libs/ds-collections/src/StepListStep/defaults.ts",statementMap:{0:{start:{line:5,column:45},end:{line:5,column:66}},1:{start:{line:5,column:62},end:{line:5,column:66}},2:{start:{line:6,column:45},end:{line:6,column:73}},3:{start:{line:6,column:64},end:{line:6,column:73}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:5,column:45},end:{line:5,column:46}},loc:{start:{line:5,column:62},end:{line:5,column:66}},line:5},1:{name:"(anonymous_1)",decl:{start:{line:6,column:45},end:{line:6,column:46}},loc:{start:{line:6,column:64},end:{line:6,column:73}},line:6}},branchMap:{},s:{0:0,1:0,2:0,3:0},f:{0:0,1:0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"5edd173ea2110c9feac5486119cd49233374fa09"});var actualCoverage=coverage[path];return cov_2kzsgkpn1e=function(){return actualCoverage},actualCoverage}cov_2kzsgkpn1e(),cov_2kzsgkpn1e().s[0]++;var getStepListStepTitleAsDefault=function getStepListStepTitleAsDefault(){return cov_2kzsgkpn1e().f[0]++,cov_2kzsgkpn1e().s[1]++,"h3"};cov_2kzsgkpn1e().s[2]++;var getStepListStepVariantDefault=function getStepListStepVariantDefault(){return cov_2kzsgkpn1e().f[1]++,cov_2kzsgkpn1e().s[3]++,"passive"},es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),ds_buttons_src=__webpack_require__("./libs/ds-buttons/src/index.ts"),ds_content_src=__webpack_require__("./libs/ds-content/src/index.ts"),ds_typography_src=__webpack_require__("./libs/ds-typography/src/index.ts");const StepListStep_module={stepLine_positiveResult:"StepListStep_stepLine_positiveResult__EkfJp",stepLine_neutralResult:"StepListStep_stepLine_neutralResult__s7I7X",step:"StepListStep_step__js1fz",stepEditButton:"StepListStep_stepEditButton__4I4jx",step_active:"StepListStep_step_active__Pthdd",step_passive:"StepListStep_step_passive__MQSNI",step_neutralResult:"StepListStep_step_neutralResult__2WfLh",step_positiveResult:"StepListStep_step_positiveResult__iIy3H",stepHeading:"StepListStep_stepHeading__Jg3rf",stepContent:"StepListStep_stepContent__1uagT",stepContent_noButton:"StepListStep_stepContent_noButton__JAD3l",stepContent_positiveResult:"StepListStep_stepContent_positiveResult__yObTM",stepContent_neutralResult:"StepListStep_stepContent_neutralResult__cWoyS",stepContent_fullWidth:"StepListStep_stepContent_fullWidth__ExysN",stepSideWrapper:"StepListStep_stepSideWrapper__Mshb7",stepSideWrapper_result:"StepListStep_stepSideWrapper_result__yMOyt",stepLine:"StepListStep_stepLine__BOJMv",stepCircle:"StepListStep_stepCircle__wWmPq",stepCircle_passive:"StepListStep_stepCircle_passive__dU8i1",stepCircle_active:"StepListStep_stepCircle_active__44uNJ",stepCircle_positiveResult:"StepListStep_stepCircle_positiveResult__UJmXI",stepCircle_neutralResult:"StepListStep_stepCircle_neutralResult__FtI1x",stepCircleIcon:"StepListStep_stepCircleIcon__ceFIe",resultIntro:"StepListStep_resultIntro__Ok83p",buttonWrapper:"StepListStep_buttonWrapper__mewkO",nextLine:"StepListStep_nextLine__hWgXS"};function cov_7p25vr5bd(){var path="/var/jenkins_home/workspace/gnsystemet_designsystemet_master/libs/ds-collections/src/StepListStep/StepListStep.tsx",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/var/jenkins_home/workspace/gnsystemet_designsystemet_master/libs/ds-collections/src/StepListStep/StepListStep.tsx",statementMap:{0:{start:{line:19,column:28},end:{line:169,column:1}},1:{start:{line:45,column:18},end:{line:45,column:68}},2:{start:{line:46,column:21},end:{line:46,column:49}},3:{start:{line:47,column:24},end:{line:47,column:31}},4:{start:{line:48,column:20},end:{line:48,column:52}},5:{start:{line:50,column:28},end:{line:51,column:43}},6:{start:{line:53,column:33},end:{line:53,column:58}},7:{start:{line:56,column:6},end:{line:63,column:18}},8:{start:{line:64,column:34},end:{line:64,column:87}},9:{start:{line:66,column:29},end:{line:84,column:5}},10:{start:{line:67,column:6},end:{line:82,column:7}},11:{start:{line:68,column:8},end:{line:74,column:10}},12:{start:{line:75,column:13},end:{line:82,column:7}},13:{start:{line:76,column:8},end:{line:81,column:10}},14:{start:{line:83,column:6},end:{line:83,column:24}},15:{start:{line:86,column:25},end:{line:88,column:36}},16:{start:{line:87,column:6},end:{line:88,column:36}},17:{start:{line:90,column:4},end:{line:167,column:6}},18:{start:{line:145,column:16},end:{line:145,column:25}},19:{start:{line:146,column:16},end:{line:148,column:19}},20:{start:{line:147,column:18},end:{line:147,column:45}},21:{start:{line:171,column:0},end:{line:171,column:42}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:20,column:2},end:{line:20,column:3}},loc:{start:{line:44,column:20},end:{line:168,column:3}},line:44},1:{name:"(anonymous_1)",decl:{start:{line:66,column:29},end:{line:66,column:30}},loc:{start:{line:66,column:57},end:{line:84,column:5}},line:66},2:{name:"(anonymous_2)",decl:{start:{line:86,column:25},end:{line:86,column:26}},loc:{start:{line:87,column:6},end:{line:88,column:36}},line:87},3:{name:"(anonymous_3)",decl:{start:{line:144,column:23},end:{line:144,column:24}},loc:{start:{line:144,column:35},end:{line:149,column:15}},line:144},4:{name:"(anonymous_4)",decl:{start:{line:146,column:27},end:{line:146,column:28}},loc:{start:{line:146,column:33},end:{line:148,column:17}},line:146}},branchMap:{0:{loc:{start:{line:23,column:6},end:{line:23,column:45}},type:"default-arg",locations:[{start:{line:23,column:18},end:{line:23,column:45}}],line:23},1:{loc:{start:{line:35,column:6},end:{line:35,column:47}},type:"default-arg",locations:[{start:{line:35,column:16},end:{line:35,column:47}}],line:35},2:{loc:{start:{line:36,column:6},end:{line:36,column:47}},type:"default-arg",locations:[{start:{line:36,column:16},end:{line:36,column:47}}],line:36},3:{loc:{start:{line:48,column:33},end:{line:48,column:50}},type:"binary-expr",locations:[{start:{line:48,column:33},end:{line:48,column:35}},{start:{line:48,column:39},end:{line:48,column:50}}],line:48},4:{loc:{start:{line:56,column:6},end:{line:63,column:18}},type:"cond-expr",locations:[{start:{line:57,column:10},end:{line:62,column:11}},{start:{line:63,column:10},end:{line:63,column:18}}],line:56},5:{loc:{start:{line:56,column:6},end:{line:56,column:65}},type:"binary-expr",locations:[{start:{line:56,column:6},end:{line:56,column:34}},{start:{line:56,column:38},end:{line:56,column:65}}],line:56},6:{loc:{start:{line:60,column:14},end:{line:60,column:75}},type:"cond-expr",locations:[{start:{line:60,column:42},end:{line:60,column:70}},{start:{line:60,column:73},end:{line:60,column:75}}],line:60},7:{loc:{start:{line:67,column:6},end:{line:82,column:7}},type:"if",locations:[{start:{line:67,column:6},end:{line:82,column:7}},{start:{line:75,column:13},end:{line:82,column:7}}],line:67},8:{loc:{start:{line:75,column:13},end:{line:82,column:7}},type:"if",locations:[{start:{line:75,column:13},end:{line:82,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:75},9:{loc:{start:{line:75,column:17},end:{line:75,column:76}},type:"binary-expr",locations:[{start:{line:75,column:17},end:{line:75,column:45}},{start:{line:75,column:49},end:{line:75,column:76}}],line:75},10:{loc:{start:{line:87,column:6},end:{line:88,column:36}},type:"binary-expr",locations:[{start:{line:87,column:6},end:{line:87,column:59}},{start:{line:88,column:6},end:{line:88,column:36}}],line:87},11:{loc:{start:{line:88,column:9},end:{line:88,column:35}},type:"binary-expr",locations:[{start:{line:88,column:9},end:{line:88,column:19}},{start:{line:88,column:23},end:{line:88,column:35}}],line:88},12:{loc:{start:{line:101,column:12},end:{line:103,column:18}},type:"cond-expr",locations:[{start:{line:102,column:16},end:{line:102,column:45}},{start:{line:103,column:16},end:{line:103,column:18}}],line:101},13:{loc:{start:{line:105,column:14},end:{line:105,column:51}},type:"cond-expr",locations:[{start:{line:105,column:19},end:{line:105,column:39}},{start:{line:105,column:42},end:{line:105,column:51}}],line:105},14:{loc:{start:{line:107,column:24},end:{line:107,column:66}},type:"cond-expr",locations:[{start:{line:107,column:48},end:{line:107,column:54}},{start:{line:107,column:57},end:{line:107,column:66}}],line:107},15:{loc:{start:{line:120,column:9},end:{line:130,column:9}},type:"binary-expr",locations:[{start:{line:120,column:9},end:{line:120,column:23}},{start:{line:121,column:10},end:{line:129,column:18}}],line:120},16:{loc:{start:{line:123,column:19},end:{line:123,column:67}},type:"cond-expr",locations:[{start:{line:123,column:49},end:{line:123,column:56}},{start:{line:123,column:59},end:{line:123,column:67}}],line:123},17:{loc:{start:{line:134,column:12},end:{line:134,column:53}},type:"cond-expr",locations:[{start:{line:134,column:21},end:{line:134,column:23}},{start:{line:134,column:26},end:{line:134,column:53}}],line:134},18:{loc:{start:{line:139,column:11},end:{line:153,column:11}},type:"binary-expr",locations:[{start:{line:139,column:11},end:{line:139,column:17}},{start:{line:140,column:12},end:{line:152,column:27}}],line:139},19:{loc:{start:{line:151,column:15},end:{line:151,column:51}},type:"binary-expr",locations:[{start:{line:151,column:15},end:{line:151,column:29}},{start:{line:151,column:33},end:{line:151,column:51}}],line:151},20:{loc:{start:{line:156,column:9},end:{line:165,column:9}},type:"binary-expr",locations:[{start:{line:156,column:9},end:{line:156,column:29}},{start:{line:156,column:33},end:{line:156,column:39}},{start:{line:157,column:10},end:{line:164,column:13}}],line:156},21:{loc:{start:{line:161,column:17},end:{line:161,column:53}},type:"binary-expr",locations:[{start:{line:161,column:17},end:{line:161,column:31}},{start:{line:161,column:35},end:{line:161,column:53}}],line:161}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0},f:{0:0,1:0,2:0,3:0,4:0},b:{0:[0],1:[0],2:[0],3:[0,0],4:[0,0],5:[0,0],6:[0,0],7:[0,0],8:[0,0],9:[0,0],10:[0,0],11:[0,0],12:[0,0],13:[0,0],14:[0,0],15:[0,0],16:[0,0],17:[0,0],18:[0,0],19:[0,0],20:[0,0,0],21:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"d10a07fee008b1447845da12422cbb447a9574e6"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"d10a07fee008b1447845da12422cbb447a9574e6"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_7p25vr5bd=function(){return actualCoverage},actualCoverage}cov_7p25vr5bd();var StepListStep=(cov_7p25vr5bd().s[0]++,(0,react.forwardRef)((function(_ref,ref){var _ref3,_ref5,_ref6,id=_ref.id,_ref$className=_ref.className,className=void 0===_ref$className?(cov_7p25vr5bd().b[0][0]++,(0,src.d9)()):_ref$className,lang=_ref.lang,dataTestId=_ref["data-testid"],editButtonText=_ref.editButtonText,introContent=_ref.introContent,introTitle=_ref.introTitle,introTitleAs=_ref.introTitleAs,nextButtonText=_ref.nextButtonText,stepNumber=_ref.stepNumber,svgPath=_ref.svgPath,svgTitle=_ref.svgTitle,title=_ref.title,_ref$titleAs=_ref.titleAs,titleAs=void 0===_ref$titleAs?(cov_7p25vr5bd().b[1][0]++,getStepListStepTitleAsDefault()):_ref$titleAs,_ref$variant=_ref.variant,variant=void 0===_ref$variant?(cov_7p25vr5bd().b[2][0]++,getStepListStepVariantDefault()):_ref$variant,onEdit=_ref.onEdit,onNext=_ref.onNext,hasResultContentFullWidth=_ref.hasResultContentFullWidth,children=_ref.children;cov_7p25vr5bd().f[0]++;var t=(cov_7p25vr5bd().s[1]++,(0,es.$G)("ds_collections",{i18n:src.g0})).t,innerRef=(cov_7p25vr5bd().s[2]++,(0,react.useRef)(null)),generatedId=(cov_7p25vr5bd().s[3]++,(0,react.useId)()),titleId=(cov_7p25vr5bd().s[4]++,"steptitle-"+(null!=(cov_7p25vr5bd().b[3][0]++,_ref3=id)?_ref3:(cov_7p25vr5bd().b[3][1]++,generatedId))),circleClassName=(cov_7p25vr5bd().s[5]++,StepListStep_module.stepCircle+" \n        "+StepListStep_module["stepCircle_"+variant]),stepVariantClassName=(cov_7p25vr5bd().s[6]++,StepListStep_module["step_"+variant]),_ref4=(cov_7p25vr5bd().s[7]++,cov_7p25vr5bd().b[5][0]++,"positiveResult"===variant||(cov_7p25vr5bd().b[5][1]++,"neutralResult"===variant)?(cov_7p25vr5bd().b[4][0]++,[StepListStep_module["stepLine_"+variant],StepListStep_module["stepContent_"+variant]+" "+(hasResultContentFullWidth?(cov_7p25vr5bd().b[6][0]++,StepListStep_module.stepContent_fullWidth):(cov_7p25vr5bd().b[6][1]++,""))]):(cov_7p25vr5bd().b[4][1]++,["",""])),stepLineVariantClassName=_ref4[0],stepContentVariantClassName=_ref4[1],concatenatedClassName=(cov_7p25vr5bd().s[8]++,StepListStep_module.step+" "+stepVariantClassName+" "+className);cov_7p25vr5bd().s[9]++;cov_7p25vr5bd().s[15]++;return cov_7p25vr5bd().s[17]++,(0,jsx_runtime.jsxs)("li",{ref,id,className:concatenatedClassName,lang,"data-testid":dataTestId,children:[(0,jsx_runtime.jsxs)("div",{ref:innerRef,className:StepListStep_module.stepSideWrapper+" "+(["neutralResult","positiveResult"].includes(variant)?(cov_7p25vr5bd().b[12][0]++,StepListStep_module.stepSideWrapper_result):(cov_7p25vr5bd().b[12][1]++,"")),id:id?(cov_7p25vr5bd().b[13][0]++,id+"-focus-target"):void cov_7p25vr5bd().b[13][1]++,tabIndex:-1,"aria-current":"passive"!==variant?(cov_7p25vr5bd().b[14][0]++,"step"):void cov_7p25vr5bd().b[14][1]++,children:[(0,jsx_runtime.jsx)("span",{className:circleClassName,children:function getCircleContent(){return cov_7p25vr5bd().f[1]++,cov_7p25vr5bd().s[10]++,svgPath?(cov_7p25vr5bd().b[7][0]++,cov_7p25vr5bd().s[11]++,(0,jsx_runtime.jsx)(ds_icons_src.JO$,{title:svgTitle,className:StepListStep_module.stepCircleIcon,svgPath})):(cov_7p25vr5bd().b[7][1]++,cov_7p25vr5bd().s[12]++,cov_7p25vr5bd().b[9][0]++,"positiveResult"===variant||(cov_7p25vr5bd().b[9][1]++,"neutralResult"===variant)?(cov_7p25vr5bd().b[8][0]++,cov_7p25vr5bd().s[13]++,(0,jsx_runtime.jsx)(ds_icons_src.nQG,{title:t("steplist.ResultStepIconText"),className:StepListStep_module.stepCircleIcon})):(cov_7p25vr5bd().b[8][1]++,cov_7p25vr5bd().s[14]++,stepNumber))}()}),(0,jsx_runtime.jsx)("div",{className:StepListStep_module.stepLine+" "+stepLineVariantClassName})]}),(0,jsx_runtime.jsx)(ds_typography_src.X6,{id:titleId,className:StepListStep_module.stepHeading,as:titleAs,level:5,children:title}),(cov_7p25vr5bd().b[15][0]++,function hasStepIntro(){return cov_7p25vr5bd().f[2]++,cov_7p25vr5bd().s[16]++,cov_7p25vr5bd().b[10][0]++,["neutralResult","positiveResult"].includes(variant)&&(cov_7p25vr5bd().b[10][1]++,cov_7p25vr5bd().b[11][0]++,!(!introTitle&&(cov_7p25vr5bd().b[11][1]++,!introContent)))}()&&(cov_7p25vr5bd().b[15][1]++,(0,jsx_runtime.jsx)(ds_content_src.s_,{className:StepListStep_module.resultIntro,color:"neutralResult"===variant?(cov_7p25vr5bd().b[16][0]++,"ochre"):(cov_7p25vr5bd().b[16][1]++,"forest"),variant:"filled",title:introTitle,titleAs:introTitleAs,children:introContent}))),(0,jsx_runtime.jsxs)("div",{className:StepListStep_module.stepContent+" "+(onEdit?(cov_7p25vr5bd().b[17][0]++,""):(cov_7p25vr5bd().b[17][1]++,StepListStep_module.stepContent_noButton))+" "+stepContentVariantClassName+" \n          ",children:[(0,jsx_runtime.jsx)("div",{children}),(cov_7p25vr5bd().b[18][0]++,onEdit&&(cov_7p25vr5bd().b[18][1]++,(0,jsx_runtime.jsx)(ds_buttons_src.CE,{className:StepListStep_module.stepEditButton,svgPath:ds_icons_src.bhi,ariaDescribedby:titleId,onClick:function onClick(){cov_7p25vr5bd().f[3]++,cov_7p25vr5bd().s[18]++,onEdit(),cov_7p25vr5bd().s[19]++,setTimeout((function(){var _innerRef$current;cov_7p25vr5bd().f[4]++,cov_7p25vr5bd().s[20]++,null==innerRef||null==(_innerRef$current=innerRef.current)||_innerRef$current.focus()}))},children:null!=(cov_7p25vr5bd().b[19][0]++,_ref5=editButtonText)?_ref5:(cov_7p25vr5bd().b[19][1]++,t("steplist.Edit"))})))]}),(cov_7p25vr5bd().b[20][0]++,"active"===variant&&(cov_7p25vr5bd().b[20][1]++,onNext)&&(cov_7p25vr5bd().b[20][2]++,(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:StepListStep_module.nextLine}),(0,jsx_runtime.jsx)("span",{className:StepListStep_module.buttonWrapper,children:(0,jsx_runtime.jsx)(ds_buttons_src.zx,{onClick:onNext,children:null!=(cov_7p25vr5bd().b[21][0]++,_ref6=nextButtonText)?_ref6:(cov_7p25vr5bd().b[21][1]++,t("steplist.Next"))})})]})))]})})));cov_7p25vr5bd().s[21]++,StepListStep.displayName="StepListStep";try{StepListStep.displayName="StepListStep",StepListStep.__docgenInfo={description:"",displayName:"StepListStep",props:{editButtonText:{defaultValue:null,description:"Overskriver default tekst på edit-knapp",name:"editButtonText",required:!1,type:{name:"string"}},nextButtonText:{defaultValue:null,description:"Overskriver default tekst på next-knapp",name:"nextButtonText",required:!1,type:{name:"string"}},stepNumber:{defaultValue:null,description:"Angir nummer på steget.",name:"stepNumber",required:!0,type:{name:"number"}},svgPath:{defaultValue:null,description:"HTML-path node. Forhåndsdefinerte paths kan importeres fra ds-icons pakke. Alternativt kan custom path sendes.",name:"svgPath",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},svgTitle:{defaultValue:null,description:"Dersom steget har et ikon som vises i stedet for stegnummer må det gjøres en vundering på om ikonet er meningsbærende og trenger en alternativ tekst.",name:"svgTitle",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"Tittel på steget.",name:"title",required:!0,type:{name:"string"}},titleAs:{defaultValue:{value:"getStepListStepTitleAsDefault()"},description:"Heading tag h1-6",name:"titleAs",required:!1,type:{name:"HeadingProps"}},variant:{defaultValue:{value:"getStepListStepVariantDefault()"},description:"Definerer stilen til steget.",name:"variant",required:!1,type:{name:'"active" | "neutralResult" | "passive" | "positiveResult"'}},onEdit:{defaultValue:null,description:"Kalles når endre knappen klikkes. Knappen fjernes når onEdit er undefined.",name:"onEdit",required:!1,type:{name:"() => void"}},onNext:{defaultValue:null,description:"Kalles når neste knappen klikkes. Knappen fjernes når onNext er undefined.",name:"onNext",required:!1,type:{name:"() => void"}},introTitle:{defaultValue:null,description:"Tittel på intro til resultatsteg",name:"introTitle",required:!1,type:{name:"PanelProps"}},introTitleAs:{defaultValue:null,description:"Heading tag h1-6 på intro til resultatsteg",name:"introTitleAs",required:!1,type:{name:"PanelProps"}},introContent:{defaultValue:null,description:"Innhold i intro til resultatsteg",name:"introContent",required:!1,type:{name:"PanelProps"}},hasResultContentFullWidth:{defaultValue:null,description:"Styrer om innholdet i stegene skal ha maks bredde container-article eller skal ta plassen som\ner tilgjengelig.",name:"hasResultContentFullWidth",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Innholdet i steget",name:"children",required:!0,type:{name:"ReactNode"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",name:"ref",required:!1,type:{name:"Ref<HTMLLIElement>"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/ds-collections/src/StepListStep/StepListStep.tsx#StepListStep"]={docgenInfo:StepListStep.__docgenInfo,name:"StepListStep",path:"libs/ds-collections/src/StepListStep/StepListStep.tsx#StepListStep"})}catch(__react_docgen_typescript_loader_error){}const StepList_module_stepList="StepList_stepList__XjLpY";function cov_1lvwoo6zlg(){var path="/var/jenkins_home/workspace/gnsystemet_designsystemet_master/libs/ds-collections/src/StepList/StepList.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"9fb897b84a8b3f5268b801c5e47c700fe0d94c00"===coverage[path].hash||(coverage[path]={path:"/var/jenkins_home/workspace/gnsystemet_designsystemet_master/libs/ds-collections/src/StepList/StepList.tsx",statementMap:{0:{start:{line:14,column:24},end:{line:37,column:22}},1:{start:{line:25,column:4},end:{line:35,column:6}},2:{start:{line:39,column:0},end:{line:39,column:34}},3:{start:{line:40,column:0},end:{line:40,column:29}},4:{start:{line:41,column:0},end:{line:41,column:44}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:15,column:2},end:{line:15,column:3}},loc:{start:{line:24,column:20},end:{line:36,column:3}},line:24}},branchMap:{0:{loc:{start:{line:18,column:6},end:{line:18,column:45}},type:"default-arg",locations:[{start:{line:18,column:18},end:{line:18,column:45}}],line:18}},s:{0:0,1:0,2:0,3:0,4:0},f:{0:0},b:{0:[0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"9fb897b84a8b3f5268b801c5e47c700fe0d94c00"});var actualCoverage=coverage[path];return cov_1lvwoo6zlg=function(){return actualCoverage},actualCoverage}cov_1lvwoo6zlg();var StepList=(cov_1lvwoo6zlg().s[0]++,(0,react.forwardRef)((function(_ref,ref){var id=_ref.id,_ref$className=_ref.className,className=void 0===_ref$className?(cov_1lvwoo6zlg().b[0][0]++,(0,src.d9)()):_ref$className,lang=_ref.lang,dataTestId=_ref["data-testid"],children=_ref.children;return cov_1lvwoo6zlg().f[0]++,cov_1lvwoo6zlg().s[1]++,(0,jsx_runtime.jsx)("ol",{ref,id,className:StepList_module_stepList+" "+className,lang,"data-testid":dataTestId,children})})));cov_1lvwoo6zlg().s[2]++,StepList.displayName="StepList",cov_1lvwoo6zlg().s[3]++,StepList.Step=StepListStep,cov_1lvwoo6zlg().s[4]++,StepList.Step.displayName="StepList.Step";try{StepList.displayName="StepList",StepList.__docgenInfo={description:"",displayName:"StepList",props:{children:{defaultValue:null,description:"Stegene i lista.",name:"children",required:!1,type:{name:"ReactNode"}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).\n@see https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom",name:"ref",required:!1,type:{name:"Ref<HTMLOListElement>"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"Key"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/ds-collections/src/StepList/StepList.tsx#StepList"]={docgenInfo:StepList.__docgenInfo,name:"StepList",path:"libs/ds-collections/src/StepList/StepList.tsx#StepList"})}catch(__react_docgen_typescript_loader_error){}var stepVariantArr=["active","passive","positiveResult","neutralResult"];function cov_22rp51srgq(){var path="/var/jenkins_home/workspace/gnsystemet_designsystemet_master/libs/ds-collections/src/index.ts",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"f867a19a253f4fbabe2de16548ef0056079c1f77"===coverage[path].hash||(coverage[path]={path:"/var/jenkins_home/workspace/gnsystemet_designsystemet_master/libs/ds-collections/src/index.ts",statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"f867a19a253f4fbabe2de16548ef0056079c1f77"});var actualCoverage=coverage[path];return cov_22rp51srgq=function(){return actualCoverage},actualCoverage}cov_22rp51srgq()}}]);