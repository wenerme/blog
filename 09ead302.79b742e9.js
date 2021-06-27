(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{109:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return b})),a.d(e,"metadata",(function(){return i})),a.d(e,"toc",(function(){return c})),a.d(e,"default",(function(){return m}));var n=a(3),l=a(8),r=(a(0),a(1096)),b={id:"codec",title:"Asterisk \u7f16\u7801"},i={unversionedId:"voip/asterisk/codec",id:"voip/asterisk/codec",isDocsHomePage:!1,title:"Asterisk \u7f16\u7801",description:"Asterisk Codec",source:"@site/notes/voip/asterisk/asterisk-codec.md",slug:"/voip/asterisk/codec",permalink:"/notes/voip/asterisk/codec",editUrl:"https://github.com/wenerme/wener/edit/master/notes/voip/asterisk/asterisk-codec.md",version:"current",sidebar:"docs",previous:{title:"Asterisk \u901a\u9053",permalink:"/notes/voip/asterisk/channel"},next:{title:"Asterisk \u914d\u7f6e",permalink:"/notes/voip/asterisk/asterisk-conf"}},c=[{value:"VoIP \u5e38\u7528\u7f16\u7801",id:"voip-\u5e38\u7528\u7f16\u7801",children:[]},{value:"\u97f3\u9891\u7f16\u7801",id:"\u97f3\u9891\u7f16\u7801",children:[]},{value:"\u89c6\u9891\u7f16\u7801",id:"\u89c6\u9891\u7f16\u7801",children:[]},{value:"\u97f3\u9891\u6587\u4ef6\u8f6c\u7801",id:"\u97f3\u9891\u6587\u4ef6\u8f6c\u7801",children:[{value:"\u6279\u91cf\u8f6c\u6362",id:"\u6279\u91cf\u8f6c\u6362",children:[]}]},{value:"\u683c\u5f0f\u4e4b\u95f4\u7684\u8f6c\u7801\u65f6\u95f4",id:"\u683c\u5f0f\u4e4b\u95f4\u7684\u8f6c\u7801\u65f6\u95f4",children:[]},{value:"\u97f3\u9891\u6587\u4ef6\u7f16\u7801\u683c\u5f0f\u8bf4\u660e",id:"\u97f3\u9891\u6587\u4ef6\u7f16\u7801\u683c\u5f0f\u8bf4\u660e",children:[]},{value:"\u6587\u4ef6\u683c\u5f0f\u8bf4\u660e",id:"\u6587\u4ef6\u683c\u5f0f\u8bf4\u660e",children:[]}],p={toc:c};function m(t){var e=t.components,a=Object(l.a)(t,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"asterisk-codec"},"Asterisk Codec"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"VoIP \u5e38\u7528\u7f16\u7801\u5305\u62ec ITU-T \u7cfb\u5217\u7684 G.7xx, GSM, iLBC",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5176\u5b83\u7f16\u7801, speex \u7b49\u5df2\u7ecf\u4e0d\u63a8\u8350\u4f7f\u7528"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.voip-info.org/wiki/view/Asterisk+codecs"},"Asterisk codecs")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/G.729"},"G.729"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u9700\u8981\u7248\u6743, \u9ed8\u8ba4\u53ea\u80fd\u900f\u4f20"))),Object(r.b)("li",{parentName:"ul"},"G.711",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/%CE%9C-law_algorithm"},"ulaw"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"US"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/A-law_algorithm"},"alaw"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Europe"))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Internet_Low_Bitrate_Codec"},"iLBC"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Internet low Bitrate Codec"))),Object(r.b)("li",{parentName:"ul"},"\u683c\u5f0f - \u4f18\u5148\u9009\u62e9 slin",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"slin: 16 bit Signed Linear PCM"),Object(r.b)("li",{parentName:"ul"},"gsm: \u539f\u59cb GSM \u7f16\u7801\uff0c\u9002\u7528\u4e8e VoIP"),Object(r.b)("li",{parentName:"ul"},"wav: MS wav format, 16 bit linear"),Object(r.b)("li",{parentName:"ul"},"WAV: MS wav format, gsm encoded (wav49)"))),Object(r.b)("li",{parentName:"ul"},"\u76ee\u524d\u5f88\u591a\u573a\u666f\u4e5f\u63a8\u8350\u4f7f\u7528 ",Object(r.b)("a",{parentName:"li",href:"https://wiki.asterisk.org/wiki/display/AST/Codec+Opus"},"Opus \u7f16\u7801"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u5f00\u6e90\u3001\u9ad8\u6548\u3001\u652f\u6301\u7684\u5e73\u53f0\u591a"))),Object(r.b)("li",{parentName:"ul"},"\u53c2\u8003",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.voip-info.org/convert-wav-audio-files-for-use-in-asterisk/"},"Convert WAV audio files for use in Asterisk"))))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# \u67e5\u770b\u7f16\u7801\u3001\u8f6c\u8bd1\u3001\u6587\u4ef6\u683c\u5f0f\ncore show codecs\ncore show translation\ncore show file format\n")),Object(r.b)("h2",{id:"voip-\u5e38\u7528\u7f16\u7801"},"VoIP \u5e38\u7528\u7f16\u7801"),Object(r.b)("p",null,"\u4ee5\u4e0b\u7f16\u7801\u65f6\u949f\u9891\u7387\u5747\u4e3a 8000, \u9ed8\u8ba4\u5305\u5927\u5c0f 20"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Codec"),Object(r.b)("th",{parentName:"tr",align:null},"PT"),Object(r.b)("th",{parentName:"tr",align:null},"Note"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"PCMU"),Object(r.b)("td",{parentName:"tr",align:null},"0"),Object(r.b)("td",{parentName:"tr",align:null},"G.711/ulaw")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"GSM"),Object(r.b)("td",{parentName:"tr",align:null},"3"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"G723"),Object(r.b)("td",{parentName:"tr",align:null},"4"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"PCMA"),Object(r.b)("td",{parentName:"tr",align:null},"8"),Object(r.b)("td",{parentName:"tr",align:null},"G.711/alaw")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"G722"),Object(r.b)("td",{parentName:"tr",align:null},"9"),Object(r.b)("td",{parentName:"tr",align:null})),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"G729"),Object(r.b)("td",{parentName:"tr",align:null},"18"),Object(r.b)("td",{parentName:"tr",align:null},"G.729a")))),Object(r.b)("h2",{id:"\u97f3\u9891\u7f16\u7801"},"\u97f3\u9891\u7f16\u7801"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u6700\u4f73\u517c\u5bb9\u7f16\u7801\u662f ulaw\u3001alaw\u3001gsm",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"allow=ulaw,alaw,g722"),Object(r.b)("li",{parentName:"ul"},"disallow=all"))),Object(r.b)("li",{parentName:"ul"},"\u5f00\u542f all \u76ee\u524d\u5f97\u5230\u7684\u662f codec2|g723|ulaw|alaw|gsm|g726|g726aal2|adpcm|slin|slin|slin|slin|slin|slin|slin|slin|slin|lpc10|g729|speex|speex|speex|ilbc|g722|siren7|siren14|testlaw|g719|opus|jpeg|png|h261|h263|h263p|h264|mpeg4|vp8|vp9|red|t140|t38|silk|silk|silk|silk"),Object(r.b)("li",{parentName:"ul"},"\u5982\u679c\u4e24\u7aef\u7684\u7f16\u7801\u4e0d\u4e00\u81f4\u4f1a\u7531 asterisk \u8fdb\u884c\u8f6c\u7801 - \u6709\u4e00\u5b9a\u7684\u6027\u80fd\u5f71\u54cd"),Object(r.b)("li",{parentName:"ul"},"\u5982\u679c\u548c\u5141\u8bb8\u7684\u7f16\u7801\u4e0d\u5339\u914d\u4f1a\u5bfc\u81f4\u62d2\u7edd",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"SDP: Incompatible media format: no common codec"))),Object(r.b)("li",{parentName:"ul"},"SDP \u91cc\u7684 rtpmap \u6807\u793a\u652f\u6301\u7684\u7f16\u7801\u683c\u5f0f")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"SDP")," \u5934\u91cc\u7684\u7f16\u7801\u4fe1\u606f"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"m=audio 55560 RTP/AVP 0 101 3 8 110 97\na=rtpmap:101 telephone-event/8000\na=fmtp:101 0-16\na=rtpmap:110 speex/8000\na=rtpmap:97 iLBC/8000\na=fmtp:97 mode=30\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u7f16\u7801\u7c7b\u578b",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"u-law"),Object(r.b)("li",{parentName:"ul"},"G726"),Object(r.b)("li",{parentName:"ul"},"Speex Wide"),Object(r.b)("li",{parentName:"ul"},"Speex Ultra"),Object(r.b)("li",{parentName:"ul"},"Opus Narrow"),Object(r.b)("li",{parentName:"ul"},"Opus Super"),Object(r.b)("li",{parentName:"ul"},"Opus Full"),Object(r.b)("li",{parentName:"ul"},"Opus Wide"),Object(r.b)("li",{parentName:"ul"},"GSM"),Object(r.b)("li",{parentName:"ul"},"a-law"),Object(r.b)("li",{parentName:"ul"},"Speex Narrow"),Object(r.b)("li",{parentName:"ul"},"iLBC 30"),Object(r.b)("li",{parentName:"ul"},"G729"),Object(r.b)("li",{parentName:"ul"},"G722")))),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Coded"),Object(r.b)("th",{parentName:"tr",align:null},"Fidelity"),Object(r.b)("th",{parentName:"tr",align:null},"Bitrate"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"GSM"),Object(r.b)("td",{parentName:"tr",align:null},"8000"),Object(r.b)("td",{parentName:"tr",align:null},"13200")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"Opus"),Object(r.b)("td",{parentName:"tr",align:null},"48000"),Object(r.b)("td",{parentName:"tr",align:null},"6000 - 510000")))),Object(r.b)("h2",{id:"\u89c6\u9891\u7f16\u7801"},"\u89c6\u9891\u7f16\u7801"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"H.263 90Kbps"),Object(r.b)("li",{parentName:"ul"},"H.264"),Object(r.b)("li",{parentName:"ul"},"VP8"),Object(r.b)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u652f\u6301\u60c5\u51b5",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"XLite \u652f\u6301 H263 H263P"),Object(r.b)("li",{parentName:"ul"},"Zoiper \u514d\u8d39\u7248\u652f\u6301 VP8 \u4ed8\u8d39\u7248\u652f\u6301 H264")))),Object(r.b)("h2",{id:"\u97f3\u9891\u6587\u4ef6\u8f6c\u7801"},"\u97f3\u9891\u6587\u4ef6\u8f6c\u7801"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.sangoma.com/audio-converter/"},"\u5728\u7ebf\u8f6c\u7801"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"\u652f\u6301\u8f6c\u51fa 8K WAV\u3001GSM\u3001slin16\u3001G729"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.sangoma.com/articles/asterisk-sound-files-101/?utm_source=digium_redirect"},"Asterisk Sound Files 101!"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# \u5982\u679c\u51fa\u73b0\u8b66\u544a, \u53ef\u4ee5\u5c1d\u8bd5\u964d\u4f4e\u97f3\u91cf  -v 0.96\nsox callwait.mp3 -c 1 -r 16000 -b 16 callwait.wav\n")),Object(r.b)("h3",{id:"\u6279\u91cf\u8f6c\u6362"},"\u6279\u91cf\u8f6c\u6362"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'sox SilentCity.mp3 -t raw -r 8000 -s -2 -c 1 SilentCity.sln\ncp *.sln /var/lib/asterisk/moh\nasterisk -rx "module reload res_musiconhold.so"\n\n# exten => 664,1,NoOp()\n#     same => n,Progress()\n#     same => n,MusicOnHold()\n\nlame --decode music.mp3 music.wav\nsox -V music.wav -r 8000 -c 1 -w music.raw\nsox -V music.wav -r 8000 -c 1 -w music.gsm\n\nfor i in *.wav; do \\\nsox $i -r 8000 -c 1 $(basename $i .wav).raw; \\\nsox $i -r 8000 -c 1 $(basename $i .wav).gsm; \\\ndone\nrm *.wav\n')),Object(r.b)("h2",{id:"\u683c\u5f0f\u4e4b\u95f4\u7684\u8f6c\u7801\u65f6\u95f4"},"\u683c\u5f0f\u4e4b\u95f4\u7684\u8f6c\u7801\u65f6\u95f4"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"         Translation times between formats (in microseconds) for one second of data\n          Source Format (Rows) Destination Format (Columns)\n\n           ulaw  alaw   gsm  g726 g726aal2 adpcm  slin  slin  slin  slin  slin  slin  slin  slin  slin lpc10  ilbc  g722 testlaw\n     ulaw     -  9150 15000 15000    15000 15000  9000 17000 17000 17000 17000 17000 17000 17000 17000 15000 15000 17250   15000\n     alaw  9150     - 15000 15000    15000 15000  9000 17000 17000 17000 17000 17000 17000 17000 17000 15000 15000 17250   15000\n      gsm 15000 15000     - 15000    15000 15000  9000 17000 17000 17000 17000 17000 17000 17000 17000 15000 15000 17250   15000\n     g726 15000 15000 15000     -    15000 15000  9000 17000 17000 17000 17000 17000 17000 17000 17000 15000 15000 17250   15000\n g726aal2 15000 15000 15000 15000        - 15000  9000 17000 17000 17000 17000 17000 17000 17000 17000 15000 15000 17250   15000\n    adpcm 15000 15000 15000 15000    15000     -  9000 17000 17000 17000 17000 17000 17000 17000 17000 15000 15000 17250   15000\n     slin  6000  6000  6000  6000     6000  6000     -  8000  8000  8000  8000  8000  8000  8000  8000  6000  6000  8250    6000\n     slin 14500 14500 14500 14500    14500 14500  8500     -  8000  8000  8000  8000  8000  8000  8000 14500 14500 14000   14500\n     slin 14500 14500 14500 14500    14500 14500  8500  8500     -  8000  8000  8000  8000  8000  8000 14500 14500  6000   14500\n     slin 14500 14500 14500 14500    14500 14500  8500  8500  8500     -  8000  8000  8000  8000  8000 14500 14500 14500   14500\n     slin 14500 14500 14500 14500    14500 14500  8500  8500  8500  8500     -  8000  8000  8000  8000 14500 14500 14500   14500\n     slin 14500 14500 14500 14500    14500 14500  8500  8500  8500  8500  8500     -  8000  8000  8000 14500 14500 14500   14500\n     slin 14500 14500 14500 14500    14500 14500  8500  8500  8500  8500  8500  8500     -  8000  8000 14500 14500 14500   14500\n     slin 14500 14500 14500 14500    14500 14500  8500  8500  8500  8500  8500  8500  8500     -  8000 14500 14500 14500   14500\n     slin 14500 14500 14500 14500    14500 14500  8500  8500  8500  8500  8500  8500  8500  8500     - 14500 14500 14500   14500\n    lpc10 15000 15000 15000 15000    15000 15000  9000 17000 17000 17000 17000 17000 17000 17000 17000     - 15000 17250   15000\n     ilbc 15000 15000 15000 15000    15000 15000  9000 17000 17000 17000 17000 17000 17000 17000 17000 15000     - 17250   15000\n     g722 15600 15600 15600 15600    15600 15600  9600 17500  9000 17000 17000 17000 17000 17000 17000 15600 15600     -   15600\n  testlaw 15000 15000 15000 15000    15000 15000  9000 17000 17000 17000 17000 17000 17000 17000 17000 15000 15000 17250       -\n")),Object(r.b)("h2",{id:"\u97f3\u9891\u6587\u4ef6\u7f16\u7801\u683c\u5f0f\u8bf4\u660e"},"\u97f3\u9891\u6587\u4ef6\u7f16\u7801\u683c\u5f0f\u8bf4\u660e"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"ID"),Object(r.b)("th",{parentName:"tr",align:null},"TYPE"),Object(r.b)("th",{parentName:"tr",align:null},"NAME"),Object(r.b)("th",{parentName:"tr",align:null},"FORMAT"),Object(r.b)("th",{parentName:"tr",align:null},"DESCRIPTION"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"31"),Object(r.b)("td",{parentName:"tr",align:null},"image"),Object(r.b)("td",{parentName:"tr",align:null},"png"),Object(r.b)("td",{parentName:"tr",align:null},"png"),Object(r.b)("td",{parentName:"tr",align:null},"(PNG Image)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"6"),Object(r.b)("td",{parentName:"tr",align:null},"audio"),Object(r.b)("td",{parentName:"tr",align:null},"g726"),Object(r.b)("td",{parentName:"tr",align:null},"g726"),Object(r.b)("td",{parentName:"tr",align:null},"(G.726 RFC3551)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"4"),Object(r.b)("td",{parentName:"tr",align:null},"audio"),Object(r.b)("td",{parentName:"tr",align:null},"alaw"),Object(r.b)("td",{parentName:"tr",align:null},"alaw"),Object(r.b)("td",{parentName:"tr",align:null},"(G.711 a-law)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"2"),Object(r.b)("td",{parentName:"tr",align:null},"audio"),Object(r.b)("td",{parentName:"tr",align:null},"g723"),Object(r.b)("td",{parentName:"tr",align:null},"g723"),Object(r.b)("td",{parentName:"tr",align:null},"(G.723.1)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"20"),Object(r.b)("td",{parentName:"tr",align:null},"audio"),Object(r.b)("td",{parentName:"tr",align:null},"speex"),Object(r.b)("td",{parentName:"tr",align:null},"speex"),Object(r.b)("td",{parentName:"tr",align:null},"(SpeeX)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"21"),Object(r.b)("td",{parentName:"tr",align:null},"audio"),Object(r.b)("td",{parentName:"tr",align:null},"speex"),Object(r.b)("td",{parentName:"tr",align:null},"speex16"),Object(r.b)("td",{parentName:"tr",align:null},"(SpeeX 16khz)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"22"),Object(r.b)("td",{parentName:"tr",align:null},"audio"),Object(r.b)("td",{parentName:"tr",align:null},"speex"),Object(r.b)("td",{parentName:"tr",align:null},"speex32"),Object(r.b)("td",{parentName:"tr",align:null},"(SpeeX 32khz)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"24"),Object(r.b)("td",{parentName:"tr",align:null},"audio"),Object(r.b)("td",{parentName:"tr",align:null},"g722"),Object(r.b)("td",{parentName:"tr",align:null},"g722"),Object(r.b)("td",{parentName:"tr",align:null},"(G722)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"25"),Object(r.b)("td",{parentName:"tr",align:null},"audio"),Object(r.b)("td",{parentName:"tr",align:null},"siren7"),Object(r.b)("td",{parentName:"tr",align:null},"siren7"),Object(r.b)("td",{parentName:"tr",align:null},"(ITU G.722.1 (Siren7, licensed from Polycom))")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"32"),Object(r.b)("td",{parentName:"tr",align:null},"video"),Object(r.b)("td",{parentName:"tr",align:null},"h261"),Object(r.b)("td",{parentName:"tr",align:null},"h261"),Object(r.b)("td",{parentName:"tr",align:null},"(H.261 video)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"33"),Object(r.b)("td",{parentName:"tr",align:null},"video"),Object(r.b)("td",{parentName:"tr",align:null},"h263"),Object(r.b)("td",{parentName:"tr",align:null},"h263"),Object(r.b)("td",{parentName:"tr",align:null},"(H.263 video)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"8"),Object(r.b)("td",{parentName:"tr",align:null},"audio"),Object(r.b)("td",{parentName:"tr",align:null},"adpcm"),Object(r.b)("td",{parentName:"tr",align:null},"adpcm"),Object(r.b)("td",{parentName:"tr",align:null},"(Dialogic ADPCM)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"43"),Object(r.b)("td",{parentName:"tr",align:null},"audio"),Object(r.b)("td",{parentName:"tr",align:null},"silk"),Object(r.b)("td",{parentName:"tr",align:null},"silk8"),Object(r.b)("td",{parentName:"tr",align:null},"(SILK Codec (8 KHz))")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"44"),Object(r.b)("td",{parentName:"tr",align:null},"audio"),Object(r.b)("td",{parentName:"tr",align:null},"silk"),Object(r.b)("td",{parentName:"tr",align:null},"silk12"),Object(r.b)("td",{parentName:"tr",align:null},"(SILK Codec (12 KHz))")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"45"),Object(r.b)("td",{parentName:"tr",align:null},"audio"),Object(r.b)("td",{parentName:"tr",align:null},"silk"),Object(r.b)("td",{parentName:"tr",align:null},"silk16"),Object(r.b)("td",{parentName:"tr",align:null},"(SILK Codec (16 KHz))")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"46"),Object(r.b)("td",{parentName:"tr",align:null},"audio"),Object(r.b)("td",{parentName:"tr",align:null},"silk"),Object(r.b)("td",{parentName:"tr",align:null},"silk24"),Object(r.b)("td",{parentName:"tr",align:null},"(SILK Codec (24 KHz))")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"28"),Object(r.b)("td",{parentName:"tr",align:null},"audio"),Object(r.b)("td",{parentName:"tr",align:null},"g719"),Object(r.b)("td",{parentName:"tr",align:null},"g719"),Object(r.b)("td",{parentName:"tr",align:null},"(ITU G.719)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"34"),Object(r.b)("td",{parentName:"tr",align:null},"video"),Object(r.b)("td",{parentName:"tr",align:null},"h263p"),Object(r.b)("td",{parentName:"tr",align:null},"h263p"),Object(r.b)("td",{parentName:"tr",align:null},"(H.263+ video)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"35"),Object(r.b)("td",{parentName:"tr",align:null},"video"),Object(r.b)("td",{parentName:"tr",align:null},"h264"),Object(r.b)("td",{parentName:"tr",align:null},"h264"),Object(r.b)("td",{parentName:"tr",align:null},"(H.264 video)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"19"),Object(r.b)("td",{parentName:"tr",align:null},"audio"),Object(r.b)("td",{parentName:"tr",align:null},"g729"),Object(r.b)("td",{parentName:"tr",align:null},"g729"),Object(r.b)("td",{parentName:"tr",align:null},"(G.729A)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"9"),Object(r.b)("td",{parentName:"tr",align:null},"audio"),Object(r.b)("td",{parentName:"tr",align:null},"slin"),Object(r.b)("td",{parentName:"tr",align:null},"slin"),Object(r.b)("td",{parentName:"tr",align:null},"(16 bit Signed Linear PCM)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"10"),Object(r.b)("td",{parentName:"tr",align:null},"audio"),Object(r.b)("td",{parentName:"tr",align:null},"slin"),Object(r.b)("td",{parentName:"tr",align:null},"slin12"),Object(r.b)("td",{parentName:"tr",align:null},"(16 bit Signed Linear PCM (12kHz))")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"11"),Object(r.b)("td",{parentName:"tr",align:null},"audio"),Object(r.b)("td",{parentName:"tr",align:null},"slin"),Object(r.b)("td",{parentName:"tr",align:null},"slin16"),Object(r.b)("td",{parentName:"tr",align:null},"(16 bit Signed Linear PCM (16kHz))")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"12"),Object(r.b)("td",{parentName:"tr",align:null},"audio"),Object(r.b)("td",{parentName:"tr",align:null},"slin"),Object(r.b)("td",{parentName:"tr",align:null},"slin24"),Object(r.b)("td",{parentName:"tr",align:null},"(16 bit Signed Linear PCM (24kHz))")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"13"),Object(r.b)("td",{parentName:"tr",align:null},"audio"),Object(r.b)("td",{parentName:"tr",align:null},"slin"),Object(r.b)("td",{parentName:"tr",align:null},"slin32"),Object(r.b)("td",{parentName:"tr",align:null},"(16 bit Signed Linear PCM (32kHz))")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"14"),Object(r.b)("td",{parentName:"tr",align:null},"audio"),Object(r.b)("td",{parentName:"tr",align:null},"slin"),Object(r.b)("td",{parentName:"tr",align:null},"slin44"),Object(r.b)("td",{parentName:"tr",align:null},"(16 bit Signed Linear PCM (44kHz))")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"15"),Object(r.b)("td",{parentName:"tr",align:null},"audio"),Object(r.b)("td",{parentName:"tr",align:null},"slin"),Object(r.b)("td",{parentName:"tr",align:null},"slin48"),Object(r.b)("td",{parentName:"tr",align:null},"(16 bit Signed Linear PCM (48kHz))")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"16"),Object(r.b)("td",{parentName:"tr",align:null},"audio"),Object(r.b)("td",{parentName:"tr",align:null},"slin"),Object(r.b)("td",{parentName:"tr",align:null},"slin96"),Object(r.b)("td",{parentName:"tr",align:null},"(16 bit Signed Linear PCM (96kHz))")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"17"),Object(r.b)("td",{parentName:"tr",align:null},"audio"),Object(r.b)("td",{parentName:"tr",align:null},"slin"),Object(r.b)("td",{parentName:"tr",align:null},"slin192"),Object(r.b)("td",{parentName:"tr",align:null},"(16 bit Signed Linear PCM (192kHz))")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"3"),Object(r.b)("td",{parentName:"tr",align:null},"audio"),Object(r.b)("td",{parentName:"tr",align:null},"ulaw"),Object(r.b)("td",{parentName:"tr",align:null},"ulaw"),Object(r.b)("td",{parentName:"tr",align:null},"(G.711 u-law)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"18"),Object(r.b)("td",{parentName:"tr",align:null},"audio"),Object(r.b)("td",{parentName:"tr",align:null},"lpc10"),Object(r.b)("td",{parentName:"tr",align:null},"lpc10"),Object(r.b)("td",{parentName:"tr",align:null},"(LPC10)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"27"),Object(r.b)("td",{parentName:"tr",align:null},"audio"),Object(r.b)("td",{parentName:"tr",align:null},"testlaw"),Object(r.b)("td",{parentName:"tr",align:null},"testlaw"),Object(r.b)("td",{parentName:"tr",align:null},"(G.711 test-law)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"42"),Object(r.b)("td",{parentName:"tr",align:null},"audio"),Object(r.b)("td",{parentName:"tr",align:null},"none"),Object(r.b)("td",{parentName:"tr",align:null},"none"),Object(r.b)("td",{parentName:"tr",align:null},"(Null codec)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"41"),Object(r.b)("td",{parentName:"tr",align:null},"image"),Object(r.b)("td",{parentName:"tr",align:null},"t38"),Object(r.b)("td",{parentName:"tr",align:null},"t38"),Object(r.b)("td",{parentName:"tr",align:null},"(T.38 UDPTL Fax)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"38"),Object(r.b)("td",{parentName:"tr",align:null},"video"),Object(r.b)("td",{parentName:"tr",align:null},"vp9"),Object(r.b)("td",{parentName:"tr",align:null},"vp9"),Object(r.b)("td",{parentName:"tr",align:null},"(VP9 video)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"37"),Object(r.b)("td",{parentName:"tr",align:null},"video"),Object(r.b)("td",{parentName:"tr",align:null},"vp8"),Object(r.b)("td",{parentName:"tr",align:null},"vp8"),Object(r.b)("td",{parentName:"tr",align:null},"(VP8 video)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"5"),Object(r.b)("td",{parentName:"tr",align:null},"audio"),Object(r.b)("td",{parentName:"tr",align:null},"gsm"),Object(r.b)("td",{parentName:"tr",align:null},"gsm"),Object(r.b)("td",{parentName:"tr",align:null},"(GSM)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"36"),Object(r.b)("td",{parentName:"tr",align:null},"video"),Object(r.b)("td",{parentName:"tr",align:null},"mpeg4"),Object(r.b)("td",{parentName:"tr",align:null},"mpeg4"),Object(r.b)("td",{parentName:"tr",align:null},"(MPEG4 video)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"23"),Object(r.b)("td",{parentName:"tr",align:null},"audio"),Object(r.b)("td",{parentName:"tr",align:null},"ilbc"),Object(r.b)("td",{parentName:"tr",align:null},"ilbc"),Object(r.b)("td",{parentName:"tr",align:null},"(iLBC)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"39"),Object(r.b)("td",{parentName:"tr",align:null},"text"),Object(r.b)("td",{parentName:"tr",align:null},"red"),Object(r.b)("td",{parentName:"tr",align:null},"red"),Object(r.b)("td",{parentName:"tr",align:null},"(T.140 Realtime Text with redundancy)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"40"),Object(r.b)("td",{parentName:"tr",align:null},"text"),Object(r.b)("td",{parentName:"tr",align:null},"t140"),Object(r.b)("td",{parentName:"tr",align:null},"t140"),Object(r.b)("td",{parentName:"tr",align:null},"(Passthrough T.140 Realtime Text)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"29"),Object(r.b)("td",{parentName:"tr",align:null},"audio"),Object(r.b)("td",{parentName:"tr",align:null},"opus"),Object(r.b)("td",{parentName:"tr",align:null},"opus"),Object(r.b)("td",{parentName:"tr",align:null},"(Opus Codec)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"30"),Object(r.b)("td",{parentName:"tr",align:null},"image"),Object(r.b)("td",{parentName:"tr",align:null},"jpeg"),Object(r.b)("td",{parentName:"tr",align:null},"jpeg"),Object(r.b)("td",{parentName:"tr",align:null},"(JPEG image)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"7"),Object(r.b)("td",{parentName:"tr",align:null},"audio"),Object(r.b)("td",{parentName:"tr",align:null},"g726aal2"),Object(r.b)("td",{parentName:"tr",align:null},"g726aal2"),Object(r.b)("td",{parentName:"tr",align:null},"(G.726 AAL2)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"1"),Object(r.b)("td",{parentName:"tr",align:null},"audio"),Object(r.b)("td",{parentName:"tr",align:null},"codec2"),Object(r.b)("td",{parentName:"tr",align:null},"codec2"),Object(r.b)("td",{parentName:"tr",align:null},"(Codec 2)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"26"),Object(r.b)("td",{parentName:"tr",align:null},"audio"),Object(r.b)("td",{parentName:"tr",align:null},"siren14"),Object(r.b)("td",{parentName:"tr",align:null},"siren14"),Object(r.b)("td",{parentName:"tr",align:null},"(ITU G.722.1 Annex C, (Siren14, licensed from Polycom))")))),Object(r.b)("h2",{id:"\u6587\u4ef6\u683c\u5f0f\u8bf4\u660e"},"\u6587\u4ef6\u683c\u5f0f\u8bf4\u660e"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Format"),Object(r.b)("th",{parentName:"tr",align:null},"Name"),Object(r.b)("th",{parentName:"tr",align:null},"Extensions"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"slin192"),Object(r.b)("td",{parentName:"tr",align:null},"sln192"),Object(r.b)("td",{parentName:"tr",align:null},"sln192")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"slin96"),Object(r.b)("td",{parentName:"tr",align:null},"sln96"),Object(r.b)("td",{parentName:"tr",align:null},"sln96")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"slin48"),Object(r.b)("td",{parentName:"tr",align:null},"sln48"),Object(r.b)("td",{parentName:"tr",align:null},"sln48")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"slin44"),Object(r.b)("td",{parentName:"tr",align:null},"sln44"),Object(r.b)("td",{parentName:"tr",align:null},"sln44")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"slin32"),Object(r.b)("td",{parentName:"tr",align:null},"sln32"),Object(r.b)("td",{parentName:"tr",align:null},"sln32")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"slin24"),Object(r.b)("td",{parentName:"tr",align:null},"sln24"),Object(r.b)("td",{parentName:"tr",align:null},"sln24")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"slin16"),Object(r.b)("td",{parentName:"tr",align:null},"sln16"),Object(r.b)("td",{parentName:"tr",align:null},"sln16")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"slin12"),Object(r.b)("td",{parentName:"tr",align:null},"sln12"),Object(r.b)("td",{parentName:"tr",align:null},"sln12")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"slin"),Object(r.b)("td",{parentName:"tr",align:null},"sln"),Object(r.b)("td",{parentName:"tr",align:null},"sln")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"gsm"),Object(r.b)("td",{parentName:"tr",align:null},"gsm"),Object(r.b)("td",{parentName:"tr",align:null},"gsm")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"g719"),Object(r.b)("td",{parentName:"tr",align:null},"g719"),Object(r.b)("td",{parentName:"tr",align:null},"g719")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"g729"),Object(r.b)("td",{parentName:"tr",align:null},"g729"),Object(r.b)("td",{parentName:"tr",align:null},"g729")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"g726"),Object(r.b)("td",{parentName:"tr",align:null},"g726-16"),Object(r.b)("td",{parentName:"tr",align:null},"g726-16")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"g726"),Object(r.b)("td",{parentName:"tr",align:null},"g726-24"),Object(r.b)("td",{parentName:"tr",align:null},"g726-24")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"g726"),Object(r.b)("td",{parentName:"tr",align:null},"g726-32"),Object(r.b)("td",{parentName:"tr",align:null},"g726-32")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"g726"),Object(r.b)("td",{parentName:"tr",align:null},"g726-40"),Object(r.b)("td",{parentName:"tr",align:null},"g726-40")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"slin16"),Object(r.b)("td",{parentName:"tr",align:null},"wav16"),Object(r.b)("td",{parentName:"tr",align:null},"wav16")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"slin"),Object(r.b)("td",{parentName:"tr",align:null},"wav"),Object(r.b)("td",{parentName:"tr",align:null},"wav")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"h264"),Object(r.b)("td",{parentName:"tr",align:null},"h264"),Object(r.b)("td",{parentName:"tr",align:null},"h264")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"h263"),Object(r.b)("td",{parentName:"tr",align:null},"h263"),Object(r.b)("td",{parentName:"tr",align:null},"h263")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"siren7"),Object(r.b)("td",{parentName:"tr",align:null},"siren7"),Object(r.b)("td",{parentName:"tr",align:null},"siren7")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ilbc"),Object(r.b)("td",{parentName:"tr",align:null},"iLBC"),Object(r.b)("td",{parentName:"tr",align:null},"ilbc")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"g723"),Object(r.b)("td",{parentName:"tr",align:null},"g723sf"),Object(r.b)("td",{parentName:"tr",align:null},"g723")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"g722"),Object(r.b)("td",{parentName:"tr",align:null},"g722"),Object(r.b)("td",{parentName:"tr",align:null},"g722")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ulaw"),Object(r.b)("td",{parentName:"tr",align:null},"au"),Object(r.b)("td",{parentName:"tr",align:null},"au")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"alaw"),Object(r.b)("td",{parentName:"tr",align:null},"alaw"),Object(r.b)("td",{parentName:"tr",align:null},"alaw")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"ulaw"),Object(r.b)("td",{parentName:"tr",align:null},"pcm"),Object(r.b)("td",{parentName:"tr",align:null},"pcm")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"siren14"),Object(r.b)("td",{parentName:"tr",align:null},"siren14"),Object(r.b)("td",{parentName:"tr",align:null},"siren14")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"gsm"),Object(r.b)("td",{parentName:"tr",align:null},"wav49"),Object(r.b)("td",{parentName:"tr",align:null},"WAV")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"adpcm"),Object(r.b)("td",{parentName:"tr",align:null},"vox"),Object(r.b)("td",{parentName:"tr",align:null},"vox")))))}m.isMDXComponent=!0},1096:function(t,e,a){"use strict";a.d(e,"a",(function(){return d})),a.d(e,"b",(function(){return j}));var n=a(0),l=a.n(n);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=l.a.createContext({}),m=function(t){var e=l.a.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return l.a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return l.a.createElement(l.a.Fragment,{},e)}},O=l.a.forwardRef((function(t,e){var a=t.components,n=t.mdxType,r=t.originalType,b=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),d=m(a),O=n,j=d["".concat(b,".").concat(O)]||d[O]||u[O]||r;return a?l.a.createElement(j,i(i({ref:e},p),{},{components:a})):l.a.createElement(j,i({ref:e},p))}));function j(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=a.length,b=new Array(r);b[0]=O;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:n,b[1]=i;for(var p=2;p<r;p++)b[p]=a[p];return l.a.createElement.apply(null,b)}return l.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);