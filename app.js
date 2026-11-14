(function(){var s=document.getElementById('seo');if(s)s.parentNode.removeChild(s);document.getElementById('views').innerHTML="\n\n<div class=\"view\" id=\"v-home\">\n<div class=\"heroX\"><div class=\"hero\"><h1>Every document. One smart place.</h1><p>Scan, OCR, edit PDFs and build resumes and cover letters in your browser. Free to use — no sign-up required.</p>\n<input type=\"text\" id=\"hsearch\" placeholder=\"Search tools: pdf, scan, resume…\" aria-label=\"Search tools\" autocomplete=\"off\"><div class=\"row\" style=\"justify-content:inherit;margin-top:14px\"><a class=\"btn p\" href=\"#/scanner\">Scan a document</a><a class=\"btn\" href=\"#/pdf-merge\">Merge PDFs</a><a class=\"btn\" href=\"#/resume\">Build a resume</a></div></div><svg viewBox=\"0 0 520 400\" role=\"img\" aria-label=\"Illustration of a scanned document, PDF and image tools\" xmlns=\"http://www.w3.org/2000/svg\"><defs><linearGradient id=\"hg\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#0a4cff\"/><stop offset=\"1\" stop-color=\"#5b21f5\"/></linearGradient><linearGradient id=\"hg2\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop offset=\"0\" stop-color=\"#dbe6ff\"/><stop offset=\"1\" stop-color=\"#e9defe\"/></linearGradient><filter id=\"sh\" x=\"-20%\" y=\"-20%\" width=\"140%\" height=\"150%\"><feDropShadow dx=\"0\" dy=\"10\" stdDeviation=\"10\" flood-color=\"#1d2a78\" flood-opacity=\".22\"/></filter></defs>\n<circle cx=\"270\" cy=\"200\" r=\"170\" fill=\"url(#hg2)\"/><circle cx=\"440\" cy=\"70\" r=\"26\" fill=\"#c9d8ff\"/><circle cx=\"60\" cy=\"330\" r=\"18\" fill=\"#e0d3ff\"/>\n<g filter=\"url(#sh)\"><rect x=\"120\" y=\"70\" width=\"210\" height=\"270\" rx=\"16\" fill=\"#fff\" transform=\"rotate(-9 225 205)\" stroke=\"#cfdaf7\"/><rect x=\"150\" y=\"60\" width=\"210\" height=\"270\" rx=\"16\" fill=\"#fff\" transform=\"rotate(5 255 195)\" stroke=\"#cfdaf7\"/></g>\n<g filter=\"url(#sh)\"><rect x=\"165\" y=\"55\" width=\"215\" height=\"285\" rx=\"16\" fill=\"#fff\"/></g>\n<rect x=\"165\" y=\"55\" width=\"215\" height=\"46\" rx=\"16\" fill=\"url(#hg)\"/><rect x=\"165\" y=\"85\" width=\"215\" height=\"16\" fill=\"url(#hg)\"/><circle cx=\"192\" cy=\"78\" r=\"9\" fill=\"#fff\" opacity=\".9\"/><rect x=\"210\" y=\"72\" width=\"90\" height=\"12\" rx=\"6\" fill=\"#fff\" opacity=\".9\"/>\n<rect x=\"188\" y=\"124\" width=\"150\" height=\"10\" rx=\"5\" fill=\"#c7d3f2\"/><rect x=\"188\" y=\"146\" width=\"168\" height=\"10\" rx=\"5\" fill=\"#dbe3f8\"/><rect x=\"188\" y=\"168\" width=\"130\" height=\"10\" rx=\"5\" fill=\"#dbe3f8\"/><rect x=\"188\" y=\"190\" width=\"160\" height=\"10\" rx=\"5\" fill=\"#dbe3f8\"/><rect x=\"188\" y=\"212\" width=\"110\" height=\"10\" rx=\"5\" fill=\"#dbe3f8\"/>\n<rect x=\"188\" y=\"244\" width=\"70\" height=\"52\" rx=\"8\" fill=\"#e8efff\"/><path d=\"M196 288l20-22 14 14 10-9 18 17z\" fill=\"#8aa7f5\"/><circle cx=\"244\" cy=\"258\" r=\"6\" fill=\"#ffd27a\"/>\n<g stroke=\"#1d4ed8\" stroke-width=\"5\" fill=\"none\" stroke-linecap=\"round\"><path d=\"M150 108v-30h30\"/><path d=\"M395 78h-30\"/><path d=\"M395 78v30\"/><path d=\"M150 320v30h30\"/><path d=\"M395 320v30h-30\"/></g>\n<rect x=\"140\" y=\"205\" width=\"260\" height=\"5\" rx=\"2.5\" fill=\"#06b6d4\" opacity=\".85\"/>\n<g filter=\"url(#sh)\"><rect x=\"372\" y=\"236\" width=\"104\" height=\"60\" rx=\"14\" fill=\"#fff\"/><rect x=\"384\" y=\"248\" width=\"40\" height=\"36\" rx=\"8\" fill=\"#e53935\"/><text x=\"404\" y=\"271\" font-family=\"Arial\" font-size=\"13\" font-weight=\"700\" fill=\"#fff\" text-anchor=\"middle\">PDF</text><rect x=\"432\" y=\"254\" width=\"32\" height=\"8\" rx=\"4\" fill=\"#c7d3f2\"/><rect x=\"432\" y=\"270\" width=\"24\" height=\"8\" rx=\"4\" fill=\"#dbe3f8\"/></g>\n<g filter=\"url(#sh)\"><circle cx=\"118\" cy=\"270\" r=\"34\" fill=\"#fff\"/><circle cx=\"118\" cy=\"270\" r=\"22\" fill=\"url(#hg)\"/><path d=\"M107 271l8 8 14-16\" stroke=\"#fff\" stroke-width=\"5\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></g>\n<g filter=\"url(#sh)\"><rect x=\"40\" y=\"110\" width=\"84\" height=\"44\" rx=\"12\" fill=\"#fff\"/><text x=\"82\" y=\"138\" font-family=\"Arial\" font-size=\"15\" font-weight=\"700\" fill=\"#1d4ed8\" text-anchor=\"middle\">OCR</text></g></svg></div>\n<div id=\"homeTools\"></div><div id=\"homeGuides\"></div>\n<h2>Why Doxlio</h2>\n<div class=\"why\"><div class=\"card\"><h3>Private by design</h3><p>Files are processed on your device and are not uploaded to a Doxlio server.</p></div><div class=\"card\"><h3>No account</h3><p>Open a tool and use it. Nothing to sign up for.</p></div><div class=\"card\"><h3>Real processing</h3><p>The scanner warps real pixels, OCR uses Tesseract, PDFs are edited with pdf-lib.</p></div></div>\n<h2>How it works</h2><div class=\"steps\"><div class=\"card\"><b class=\"n\">1</b><h3>Pick a tool</h3><p>Scan, OCR, edit PDFs, convert images or build a resume.</p></div><div class=\"card\"><b class=\"n\">2</b><h3>Add your file</h3><p>Use the camera or choose a file. It is processed in your browser.</p></div><div class=\"card\"><b class=\"n\">3</b><h3>Download</h3><p>Save the result. Closing the page discards your work; Doxlio keeps nothing.</p></div></div><h2>What is Doxlio?</h2><div class=\"card\"><p><b>Doxlio</b> is a free online toolkit for everyday documents: scan with your phone, extract text with OCR, merge, split and convert PDFs, edit text in images, and build resumes and cover letters. The name joins <b>“Dox”</b>, short for documents, with <b>“folio”</b>, an old word for a page or sheet. Free to use — no sign-up required, and your files are processed in your browser.</p></div><h2>Frequently asked questions</h2><div id=\"faq\"></div>\n</div>\n\n<div class=\"view\" id=\"v-scanner\" hidden>\n<h1>📷 Document Scanner</h1><p>Camera or upload, four-corner crop, perspective correction, filters and multi-page PDF. Free to use — no sign-up required. <span id=\"cvst\"></span></p>\n<section id=\"s-home\" class=\"card\">\n<h1>Scan a document</h1>\n<p>Everything is processed on your device. Nothing is uploaded.</p>\n<div class=\"row\">\n<button class=\"p\" id=\"bCam\">Open camera</button>\n<label class=\"btn\" style=\"display:inline-block\">Upload image<input id=\"file\" type=\"file\" accept=\"image/jpeg,image/png,image/webp\" multiple hidden></label>\n</div>\n</section>\n\n<section id=\"s-cam\" class=\"card\" hidden>\n<div class=\"stage\"><video id=\"vid\" playsinline muted autoplay></video></div>\n<div class=\"row\"><button class=\"p\" id=\"bShot\">Capture</button><button id=\"bFlip\">Switch camera</button><button id=\"bCamX\">Close</button></div>\n</section>\n\n<section id=\"s-crop\" class=\"card\" hidden>\n<h1>Adjust the crop</h1><p>Drag any of the 8 handles: 4 corners and 4 edge midpoints.</p>\n<div class=\"stage\" id=\"cropStage\"><canvas id=\"cc\"></canvas><canvas id=\"ov\"></canvas><div class=\"scan\" id=\"scanA\"><i></i></div></div>\n<div class=\"row\"><button id=\"bAuto\">Auto detect</button><button id=\"bReset\">Reset crop</button><button class=\"p\" id=\"bScan\">Scan</button><button id=\"bCropX\">Cancel</button></div>\n</section>\n\n<section id=\"s-ed\" class=\"card\" hidden>\n<div class=\"row\"><b id=\"pgl\"></b></div>\n<div class=\"stage\"><canvas id=\"pc\"></canvas></div>\n<div class=\"row\" id=\"filters\"></div>\n<div style=\"display:grid;gap:6px;max-width:480px\">\n<label class=\"sl\">Brightness<input type=\"range\" id=\"rb\" min=\"-100\" max=\"100\" value=\"0\"><span id=\"vb\">0</span></label>\n<label class=\"sl\">Contrast<input type=\"range\" id=\"rc\" min=\"-50\" max=\"100\" value=\"0\"><span id=\"vc\">0</span></label>\n<label class=\"sl\">Sharpness<input type=\"range\" id=\"rs\" min=\"0\" max=\"100\" value=\"0\"><span id=\"vs\">0</span></label>\n</div>\n<div class=\"row\">\n<button id=\"bL\">⟲ Rotate left</button><button id=\"bR\">Rotate right ⟳</button>\n<button id=\"bBA\">Hold: before</button><button id=\"bRst\">Reset filters</button>\n<button id=\"bRe\">Re-crop</button><button id=\"bMl\">◀ Move</button><button id=\"bMr\">Move ▶</button><button id=\"bDel\">Delete</button>\n</div>\n<div class=\"thumbs\" id=\"th\"></div>\n<div class=\"row\"><button id=\"bAdd\">+ Add page</button><button id=\"bPrev\">Preview document</button><button id=\"bOcr\">Extract text (OCR)</button><button id=\"bJpg\">Download JPG</button><button class=\"p\" id=\"bPdf\">Download PDF</button></div>\n</section>\n\n</div>\n\n<div class=\"view\" id=\"v-ocr\" hidden>\n<h1>🔎 Image to Text (OCR)</h1><p>Real text recognition with Tesseract. Free to use — no sign-up required. Images stay on your device; language data downloads on first use.</p>\n<div class=\"card\"><div class=\"row\"><label class=\"btn p\">Choose image<input type=\"file\" id=\"ocrFile\" accept=\"image/jpeg,image/png,image/webp\" hidden></label><select id=\"ocrLang\" aria-label=\"Language\" style=\"width:auto\"></select><button class=\"p\" id=\"ocrRun\">Extract text</button></div>\n<img id=\"ocrPrev\" alt=\"Image to read\" hidden style=\"max-width:100%;max-height:260px;border-radius:10px;margin:8px 0\">\n<label class=\"f\"><span>Extracted text (editable)</span><textarea id=\"ocrOut\" rows=\"12\" dir=\"ltr\"></textarea></label>\n<div class=\"row\"><button id=\"ocrCopy\">Copy</button><button id=\"ocrTxt\">Download TXT</button><button id=\"ocrDoc\">Export to Word (.doc)</button></div></div>\n</div>\n\n<div class=\"view\" id=\"v-resume\" hidden>\n<h1>📄 Resume / CV Builder</h1><p>Edit on the left, see the A4 page live. Free to use — no sign-up required. Sample content is filled in; replace it or press Clear.</p>\n<div class=\"two\"><div class=\"card\"><div class=\"row\"><button id=\"rvClear\">Clear sample</button><button class=\"p\" id=\"rvPrint\">Print / Save PDF</button></div><div id=\"rvForm\"></div></div><div class=\"pvbox\" id=\"rvBox\"><div id=\"rvWrap\"></div></div></div>\n</div>\n\n<div class=\"view\" id=\"v-cover\" hidden>\n<h1>✉️ Cover Letter Builder</h1><p>Fill in the details, edit the letter and print or save as PDF. Free to use — no sign-up required.</p>\n<div class=\"two\"><div class=\"card\"><div class=\"row\"><button class=\"p\" id=\"clPrint\">Print / Save PDF</button></div><div id=\"clForm\"></div></div><div class=\"pvbox\"><div id=\"clWrap\"></div></div></div>\n</div>\n\n<div class=\"view\" id=\"v-ai\" hidden><h1 id=\"aiH\"></h1><p>Runs through the Doxlio server using a server-side API key. Your text is sent to the AI provider to produce the result and is not stored by Doxlio. Free to use — no sign-up required.</p>\n<div class=\"card\"><div class=\"row\"><label class=\"btn\">Load .txt file<input type=\"file\" id=\"aiFile\" accept=\".txt,.md,text/plain\" hidden></label><span id=\"aiO\" style=\"min-width:160px\"></span></div>\n<label class=\"f\"><span>Your text (max 20,000 characters)</span><textarea id=\"aiIn\" rows=\"9\"></textarea></label>\n<label class=\"f\" id=\"aiX\"><span id=\"aiXl\"></span><textarea id=\"aiX2\" rows=\"5\"></textarea></label>\n<div class=\"row\"><button class=\"p\" id=\"aiRun\">Run</button></div>\n<label class=\"f\"><span>Result</span><textarea id=\"aiOut\" rows=\"12\"></textarea></label><div class=\"row\"><button id=\"aiCopy\">Copy</button></div></div></div>\n<div class=\"view\" id=\"v-text\" hidden><h1 id=\"txH\"></h1><p id=\"txD\"></p><div class=\"card\"><label class=\"f\"><span>Your text</span><textarea id=\"txIn\" rows=\"10\"></textarea></label>\n<div id=\"csP\" class=\"cs\"><button data-c=\"up\">UPPERCASE</button><button data-c=\"low\">lowercase</button><button data-c=\"title\">Title Case</button><button data-c=\"sent\">Sentence case</button><button data-c=\"trim\">Remove extra spaces</button><button data-c=\"copy\" class=\"p\">Copy</button><button data-c=\"clear\">Clear</button></div>\n<div id=\"wcP\"><div id=\"wcS\"></div></div></div></div>\n<div class=\"view\" id=\"v-contact\" hidden>\n<div class=\"ctBan\"><h1>Get in Touch</h1><p>Questions, feedback, tool ideas or business enquiries? Send us a message and we will reply by email. We welcome support requests, suggestions and partnership enquiries.</p></div>\n<div class=\"ctWrap\"><aside class=\"ctSide\"><svg viewBox=\"0 0 160 110\" role=\"img\" aria-label=\"Message sent illustration\"><rect x=\"12\" y=\"10\" width=\"104\" height=\"72\" rx=\"10\" fill=\"#fff\" stroke=\"#c7d3f2\"/><rect x=\"26\" y=\"26\" width=\"52\" height=\"8\" rx=\"4\" fill=\"#1d4ed8\"/><rect x=\"26\" y=\"42\" width=\"76\" height=\"6\" rx=\"3\" fill=\"#c7d3f2\"/><rect x=\"26\" y=\"54\" width=\"60\" height=\"6\" rx=\"3\" fill=\"#dbe3f8\"/><rect x=\"26\" y=\"66\" width=\"30\" height=\"8\" rx=\"4\" fill=\"#5b21f5\"/><circle cx=\"122\" cy=\"26\" r=\"14\" fill=\"#c8f0d8\"/><path d=\"M114 26l6 6 10-12\" stroke=\"#1b9a55\" stroke-width=\"4\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M100 92l18 12 32-30\" stroke=\"#1d4ed8\" stroke-width=\"6\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n<h2>We welcome useful feedback</h2><p>To help us understand an issue, include the tool name, what you expected to happen, what happened instead, and your device and browser.</p><p><b>Privacy tip:</b> do not send passwords, payment card details, ID numbers or other sensitive information in this form.</p><p><a href=\"#/privacy\">Read our Privacy Policy →</a></p><p id=\"ctMail\"></p></aside>\n<form id=\"ctForm\" class=\"ctFormBox\" novalidate autocomplete=\"on\"><h2>Send us a message</h2><p>All fields are required.</p><div id=\"ctNote\"></div>\n<div class=\"hp\" aria-hidden=\"true\"><label>Leave this field empty<input type=\"text\" name=\"_gotcha\" tabindex=\"-1\" autocomplete=\"off\"></label></div>\n<label class=\"f\" for=\"ctName\"><span>Full name</span><input type=\"text\" id=\"ctName\" name=\"name\" autocomplete=\"name\" maxlength=\"100\" required aria-describedby=\"eName\"></label><div class=\"fe\" id=\"eName\" role=\"alert\"></div>\n<label class=\"f\" for=\"ctEmail\"><span>Email address</span><input type=\"text\" id=\"ctEmail\" name=\"email\" inputmode=\"email\" autocomplete=\"email\" maxlength=\"254\" required aria-describedby=\"eEmail\"></label><div class=\"fe\" id=\"eEmail\" role=\"alert\"></div>\n<label class=\"f\" for=\"ctSubject\"><span>Subject</span><select id=\"ctSubject\" name=\"subject\" required aria-describedby=\"eSubject\"><option value=\"\">Select a subject</option><option>Tool not working (bug report)</option><option>Tool idea / feature request</option><option>General feedback</option><option>Business enquiry</option><option>Other</option></select></label><div class=\"fe\" id=\"eSubject\" role=\"alert\"></div>\n<label class=\"f\" for=\"ctMessage\"><span>Message</span><textarea id=\"ctMessage\" name=\"message\" rows=\"6\" maxlength=\"5000\" required placeholder=\"Describe your question or feedback…\" aria-describedby=\"eMessage\"></textarea></label><div class=\"fe\" id=\"eMessage\" role=\"alert\"></div>\n<button class=\"p\" id=\"ctBtn\" type=\"submit\">Submit Message</button><div id=\"ctMsg\" role=\"status\" aria-live=\"polite\" style=\"margin-top:8px\"></div>\n<div class=\"tips\"><b>What to include:</b><ul><li>Tool name and page URL</li><li>Steps to reproduce a bug</li><li>Device and browser, if relevant</li></ul></div></form></div></div>\n<div class=\"view\" id=\"v-ite\" hidden><h1>✏️ Edit Text in Image</h1>\n<p>Upload an image and Doxlio scans the text automatically. Tap any text on the image and edit it right there, then save. Font, size and colour are matched automatically. Free to use — no sign-up required. Everything runs on your device.</p>\n<p class=\"note\">Use this only on images you own or have permission to edit. Do not use it to alter IDs, certificates, receipts or other documents in order to mislead anyone.</p>\n<div class=\"card\"><div class=\"row\"><select id=\"iteLang\" style=\"width:auto\" aria-label=\"Text language\"></select><label class=\"btn p\">Choose image<input type=\"file\" id=\"iteFile\" accept=\"image/jpeg,image/png,image/webp\" hidden></label><button id=\"iteScan\" disabled>Re-scan text</button></div>\n<div class=\"row\"><select id=\"iteMode\" style=\"width:auto\" aria-label=\"Edit mode\"><option value=\"line\">Edit whole lines</option><option value=\"word\">Edit single words</option><option value=\"manual\">Draw an area manually</option></select><select id=\"iteZoom\" style=\"width:auto\" aria-label=\"Zoom\"><option value=\"1\">Zoom 100%</option><option value=\"1.5\">Zoom 150%</option><option value=\"2\">Zoom 200%</option><option value=\"3\">Zoom 300%</option></select></div>\n<div class=\"row\"><button id=\"iteUndo\">Undo</button><button id=\"iteReset\">Reset image</button><button class=\"p\" id=\"iteDlPng\">Save PNG</button><button id=\"iteDlJpg\">Save JPG</button></div>\n<div id=\"iteSt\" class=\"note\" role=\"status\"></div>\n<div class=\"pvbox\" id=\"iteBox\" style=\"overflow:auto\"><div id=\"iteStage\" style=\"position:relative;width:100%\"><canvas id=\"iteCv\" width=\"10\" height=\"10\" style=\"display:block;width:100%;height:auto\"></canvas><canvas id=\"iteOv\" width=\"10\" height=\"10\" style=\"position:absolute;left:0;top:0;width:100%;height:100%\"></canvas>\n<div id=\"iteBusy\" class=\"iteBusy\" hidden><span class=\"spin\"></span><b id=\"iteBusyT\">Doxlio is analyzing the text…</b></div>\n<input type=\"text\" id=\"iteInline\" class=\"iteInline\" hidden aria-label=\"Edit text\" autocomplete=\"off\">\n<div id=\"iteBar\" class=\"iteBar\" hidden><button class=\"p\" id=\"iteInOk\" aria-label=\"Done\">✔</button><button id=\"iteDel\" aria-label=\"Delete text\">🗑</button><button id=\"iteStyle\" aria-label=\"Font, size and colour\">⚙</button><button id=\"iteInNo\" aria-label=\"Cancel\">✕</button></div></div></div>\n<details id=\"itePanel\" hidden><summary>More options: font, size, colour, position</summary><label class=\"f\"><span>New text (shown in the chosen font)</span><textarea id=\"iteText\" rows=\"2\"></textarea></label>\n<div id=\"iteTop\" class=\"cs\"></div><label class=\"f\"><span>Font (matched automatically)</span><select id=\"iteFont\"></select></label><button id=\"iteMoreFonts\" style=\"margin:4px 0\">Find a closer font (load more fonts)</button><label class=\"btn\" style=\"margin:4px 0\">Use my own font file<input type=\"file\" id=\"iteFontFile\" accept=\".ttf,.otf,.woff,.woff2\" hidden></label>\n<div class=\"row\"><label class=\"f\" style=\"flex:1\"><span>Size (px)</span><input type=\"text\" id=\"iteSize\" inputmode=\"numeric\"></label><label class=\"f\" style=\"flex:1\"><span>Colour</span><input type=\"color\" id=\"iteColor\"></label></div>\n<div class=\"row\"><label class=\"chk\"><input type=\"checkbox\" id=\"iteBold\"> Bold</label><label class=\"chk\"><input type=\"checkbox\" id=\"iteItalic\"> Italic</label></div>\n<div class=\"row\"><label class=\"f\" style=\"flex:1\"><span>Alignment</span><select id=\"iteAlign\"><option value=\"left\">Left</option><option value=\"center\">Centre</option><option value=\"right\">Right</option></select></label><label class=\"f\" style=\"flex:1\"><span>Letter spacing</span><input type=\"text\" id=\"iteLs\" inputmode=\"decimal\" value=\"0\"></label></div>\n<div class=\"row\"><label class=\"f\" style=\"flex:1\"><span>Move X</span><input type=\"text\" id=\"iteDx\" inputmode=\"numeric\" value=\"0\"></label><label class=\"f\" style=\"flex:1\"><span>Move Y</span><input type=\"text\" id=\"iteDy\" inputmode=\"numeric\" value=\"0\"></label><label class=\"f\" style=\"flex:1\"><span>Erase margin</span><input type=\"text\" id=\"iteEp\" inputmode=\"numeric\" value=\"3\"></label></div>\n<div class=\"row\"><label class=\"f\" style=\"flex:1\"><span>Background</span><select id=\"iteBgMode\"><option value=\"auto\">Match automatically</option><option value=\"pick\">Pick a colour</option></select></label><label class=\"f\"><span>&nbsp;</span><input type=\"color\" id=\"iteBg\"></label></div>\n<div class=\"row\"><button class=\"p\" id=\"iteApply\">Apply change</button></div>\n<p class=\"note\">Fonts are matched from the fonts on your device, so the match is close but not guaranteed. If you have the original font file, use “Use my own font file”.</p></details></div></div>\n<div class=\"view\" id=\"v-app\" hidden><h1>Get the Doxlio app</h1><p>The Doxlio app opens the same Doxlio website in its own window, so every new tool and guide we add shows up in the app automatically. Free to use — no sign-up required.</p><div class=\"card\" id=\"appBtns\"></div>\n<div class=\"card\"><h2 style=\"margin-top:0\">Why use the app?</h2><p>Faster access from your home screen, full-screen scanning with your camera, and quick sharing of your PDFs and images.</p></div></div>\n<div class=\"view\" id=\"v-tool\" hidden></div>\n<div class=\"view\" id=\"v-page\" hidden></div>\n";})();
(function(){
var $=function(i){return document.getElementById(i)};
var pages=[],cur=-1,editIdx=-1,stream=null,facing='environment',cvReady=false;
var work={img:null,corners:[],sc:1};
function msg(t,c){var m=$('msg');m.textContent=t||'';m.className=c||''}
function show(id){['s-home','s-cam','s-crop','s-ed'].forEach(function(s){$(s).hidden=(s!==id)})}
function cnv(w,h){var c=document.createElement('canvas');c.width=w;c.height=h;return c}

window.loadCV=function(){if(window.__cvl)return;window.__cvl=1;$('cvst').textContent='Edge detection: built-in detector ready (OpenCV loading…)';
 var s=document.createElement('script');s.src='https://cdn.jsdelivr.net/npm/@techstark/opencv-js@4.9.0-release.3/dist/opencv.js';
 s.onerror=function(){$('cvst').textContent='Edge detection: built-in detector'};
 s.onload=function(){var n=0,t=setInterval(function(){n++;try{if(typeof cv!=='undefined'){
   if(cv.Mat){cvReady=true;$('cvst').textContent='Edge detection: OpenCV + built-in detector';clearInterval(t);return}
   if(cv instanceof Promise&&!cv.__h){cv.__h=1;cv.then(function(m){if(m&&m.Mat)window.cv=m},function(){})}
   if(!(cv instanceof Promise)&&!cv.__r){cv.__r=1;cv.onRuntimeInitialized=function(){cvReady=!!(window.cv&&window.cv.Mat)}}}}catch(e){}
  if(n>240)clearInterval(t)},250)};
 document.head.appendChild(s)};

/* Input */
var MAXIN=2400,TYPES=['image/jpeg','image/png','image/webp'];
$('file').onchange=function(e){
 var f=e.target.files[0];e.target.value='';if(!f)return;
 if(TYPES.indexOf(f.type)<0){msg('Unsupported file type. Use JPG, PNG or WebP.','err');return}
 if(f.size>25*1024*1024){msg('File is larger than 25 MB.','err');return}
 var im=new Image();im.onload=function(){startCrop(im)};im.onerror=function(){msg('Could not read this image.','err')};
 im.src=URL.createObjectURL(f);
};
$('bCam').onclick=function(){openCam()};
function openCam(){
 if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){msg('Camera is not available in this browser or context. Use Upload instead.','err');return}
 if(stream)stream.getTracks().forEach(function(t){t.stop()});
 navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:facing},width:{ideal:1920},height:{ideal:1080}},audio:false}).then(function(s){
  stream=s;$('vid').srcObject=s;show('s-cam');msg('')
 }).catch(function(e){
  var n=e&&e.name;msg(n==='NotAllowedError'?'Camera permission was denied. Allow camera access in your browser settings, or use Upload.':n==='NotFoundError'?'No camera found on this device.':'Could not open the camera: '+(e&&e.message||n),'err');
 });
}
function closeCam(){if(stream)stream.getTracks().forEach(function(t){t.stop()});stream=null;show(pages.length?'s-ed':'s-home')}
$('bCamX').onclick=closeCam;
$('bFlip').onclick=function(){facing=facing==='environment'?'user':'environment';openCam()};
$('bShot').onclick=function(){
 var v=$('vid');if(!v.videoWidth){msg('Camera is not ready yet.','err');return}
 var c=cnv(v.videoWidth,v.videoHeight);c.getContext('2d').drawImage(v,0,0);
 if(stream)stream.getTracks().forEach(function(t){t.stop()});stream=null;startCrop(c);
};

/* Crop */
function fitCanvas(src){
 var m=Math.max(src.width,src.height),k=m>MAXIN?MAXIN/m:1,c=cnv(Math.round(src.width*k),Math.round(src.height*k));
 c.getContext('2d').drawImage(src,0,0,c.width,c.height);return c;
}
function startCrop(src,corners){
 var o=fitCanvas(src);work.img=o;
 var maxW=Math.min(900,window.innerWidth-60),maxH=window.innerHeight*0.65;
 work.sc=Math.min(maxW/o.width,maxH/o.height,1);
 var w=Math.round(o.width*work.sc),h=Math.round(o.height*work.sc);
 [$('cc'),$('ov')].forEach(function(c){c.width=w;c.height=h;c.style.width=w+'px';c.style.height=h+'px'});
 $('cc').getContext('2d').drawImage(o,0,0,w,h);
 work.corners=corners||defaultCorners();
 if(!corners){autoDetect(true)}
 drawOv();show('s-crop');msg('');
}
function defaultCorners(){var w=work.img.width,h=work.img.height,x=w*.06,y=h*.06;return[[x,y],[w-x,y],[w-x,h-y],[x,h-y]]}
$('bReset').onclick=function(){work.corners=defaultCorners();drawOv()};
$('bAuto').onclick=function(){autoDetect(false)};
$('bCropX').onclick=function(){editIdx=-1;show(pages.length?'s-ed':'s-home')};
function order(p){
 var s=p.map(function(a){return a[0]+a[1]}),d=p.map(function(a){return a[0]-a[1]});
 return[p[s.indexOf(Math.min.apply(0,s))],p[d.indexOf(Math.max.apply(0,d))],p[s.indexOf(Math.max.apply(0,s))],p[d.indexOf(Math.min.apply(0,d))]];
}
function cvDetect(src){var ms=[];function M(m){ms.push(m);return m}
 try{var k=Math.min(1,700/Math.max(src.width,src.height)),sm=cnv(Math.round(src.width*k),Math.round(src.height*k));sm.getContext('2d').drawImage(src,0,0,sm.width,sm.height);
  var im=M(cv.imread(sm)),g=M(new cv.Mat());cv.cvtColor(im,g,cv.COLOR_RGBA2GRAY);cv.GaussianBlur(g,g,new cv.Size(5,5),0);
  var A0=sm.width*sm.height,best=null,ba=A0*.15,full=A0*.97;
  var passes=[function(){var e=M(new cv.Mat());cv.Canny(g,e,50,150);cv.dilate(e,e,M(cv.getStructuringElement(cv.MORPH_RECT,new cv.Size(5,5))));return e},
   function(){var e=M(new cv.Mat());cv.threshold(g,e,0,255,cv.THRESH_BINARY+cv.THRESH_OTSU);cv.morphologyEx(e,e,cv.MORPH_CLOSE,M(cv.getStructuringElement(cv.MORPH_RECT,new cv.Size(7,7))));return e}];
  for(var pi=0;pi<passes.length&&!best;pi++){var e=passes[pi](),cs=M(new cv.MatVector()),hi=M(new cv.Mat());cv.findContours(e,cs,hi,cv.RETR_EXTERNAL,cv.CHAIN_APPROX_SIMPLE);
   for(var i=0;i<cs.size();i++){var c=cs.get(i),a=cv.contourArea(c);
    if(a>ba&&a<full){var hull=new cv.Mat();cv.convexHull(c,hull,false,true);var pr=cv.arcLength(hull,true),ap=new cv.Mat(),got=false;
     for(var ep=.02;ep<=.101&&!got;ep+=.01){cv.approxPolyDP(hull,ap,ep*pr,true);if(ap.rows===4)got=true}
     if(got){ba=a;best=[];for(var j=0;j<4;j++)best.push([ap.data32S[j*2]/k,ap.data32S[j*2+1]/k])}
     ap.delete();hull.delete()}c.delete()}}
  return best?order(best):null}catch(x){return null}finally{ms.forEach(function(m){try{m.delete()}catch(_){}})}}
function jsDetect(src){
 var k=Math.min(1,260/Math.max(src.width,src.height)),w=Math.max(8,Math.round(src.width*k)),h=Math.max(8,Math.round(src.height*k)),c=cnv(w,h);c.getContext('2d',{willReadFrequently:true}).drawImage(src,0,0,w,h);
 var d=c.getContext('2d').getImageData(0,0,w,h).data,N=w*h,g=new Uint8Array(N),hist=new Array(256).fill(0),i;
 for(i=0;i<N;i++){g[i]=.299*d[i*4]+.587*d[i*4+1]+.114*d[i*4+2];hist[g[i]]++}
 var sum=0;for(i=0;i<256;i++)sum+=i*hist[i];var sB=0,wB=0,mx=0,th=128;
 for(i=0;i<256;i++){wB+=hist[i];if(!wB)continue;var wF=N-wB;if(!wF)break;sB+=i*hist[i];var mB=sB/wB,mF=(sum-sB)/wF,v=wB*wF*(mB-mF)*(mB-mF);if(v>mx){mx=v;th=i}}
 var best=null;
 [1,0].forEach(function(br){var mask=new Uint8Array(N),seen=new Uint8Array(N);for(i=0;i<N;i++)mask[i]=br?(g[i]>th?1:0):(g[i]<=th?1:0);
  for(var s=0;s<N;s++){if(!mask[s]||seen[s])continue;var pts=[],st=[s];seen[s]=1;var x0=w,y0=h,x1=0,y1=0;
   while(st.length){var p=st.pop();pts.push(p);var px=p%w,py=(p/w)|0;if(px<x0)x0=px;if(px>x1)x1=px;if(py<y0)y0=py;if(py>y1)y1=py;
    if(px>0&&mask[p-1]&&!seen[p-1]){seen[p-1]=1;st.push(p-1)}if(px<w-1&&mask[p+1]&&!seen[p+1]){seen[p+1]=1;st.push(p+1)}if(py>0&&mask[p-w]&&!seen[p-w]){seen[p-w]=1;st.push(p-w)}if(py<h-1&&mask[p+w]&&!seen[p+w]){seen[p+w]=1;st.push(p+w)}}
   var area=pts.length/N,fullBox=x0<=1&&y0<=1&&x1>=w-2&&y1>=h-2;
   if(area>.15&&area<.97&&!fullBox&&(!best||area>best.area))best={area:area,pts:pts}}});
 if(!best)return null;var a=null,b=null,cc=null,dd=null,mn1=1e9,mx1=-1e9,mn2=1e9,mx2=-1e9;
 best.pts.forEach(function(p){var x=p%w,y=(p/w)|0,s1=x+y,s2=x-y;if(s1<mn1){mn1=s1;a=[x,y]}if(s1>mx1){mx1=s1;cc=[x,y]}if(s2>mx2){mx2=s2;b=[x,y]}if(s2<mn2){mn2=s2;dd=[x,y]}});
 return[a,b,cc,dd].map(function(p){return[(p[0]+.5)/k,(p[1]+.5)/k]})}

function autoDetect(silent){
 var r=null,how='';
 if(cvReady){r=cvDetect(work.img);how='OpenCV'}
 if(!r){r=jsDetect(work.img);how='built-in detector'}
 if(r){work.corners=r;drawOv();msg('Document edges detected ('+how+'). Drag any of the 8 handles to fine-tune.','ok')}
 else msg('No clear document edges found. Drag the 8 handles to the document edges.','err')
}
function handles(){var p=work.corners,m=[];for(var i=0;i<4;i++){var a=p[i],b=p[(i+1)%4];m.push([(a[0]+b[0])/2,(a[1]+b[1])/2])}return p.concat(m)}
function drawOv(){
 var c=$('ov'),x=c.getContext('2d'),s=work.sc,p=work.corners.map(function(a){return[a[0]*s,a[1]*s]});
 x.clearRect(0,0,c.width,c.height);
 x.fillStyle='rgba(0,0,0,.45)';x.beginPath();x.rect(0,0,c.width,c.height);
 x.moveTo(p[0][0],p[0][1]);for(var i=3;i>=0;i--)x.lineTo(p[i][0],p[i][1]);x.fill('evenodd');
 x.strokeStyle='#06b6d4';x.lineWidth=2;x.beginPath();p.forEach(function(a,i){i?x.lineTo(a[0],a[1]):x.moveTo(a[0],a[1])});x.closePath();x.stroke();
 handles().forEach(function(h,i){var X=h[0]*s,Y=h[1]*s;x.fillStyle='#fff';x.strokeStyle='#5b5bf0';x.lineWidth=3;x.beginPath();x.arc(X,Y,i<4?12:9,0,7);x.fill();x.stroke();if(i>=4){x.fillStyle='#5b5bf0';x.beginPath();x.arc(X,Y,3,0,7);x.fill()}})
}
var drag=-1,last=null;
function pos(e){var r=$('ov').getBoundingClientRect();return[(e.clientX-r.left)/work.sc,(e.clientY-r.top)/work.sc]}
function clp(v,m){return Math.max(0,Math.min(m,v))}
$('ov').addEventListener('pointerdown',function(e){
 var q=pos(e),H=handles(),bd=1e9;drag=-1;H.forEach(function(h,i){var d=Math.hypot(h[0]-q[0],h[1]-q[1])*work.sc;if(d<bd){bd=d;drag=i}});
 if(bd>40){drag=-1;return}$('ov').setPointerCapture(e.pointerId);e.preventDefault();last=q;
});
$('ov').addEventListener('pointermove',function(e){
 if(drag<0)return;var q=pos(e),W=work.img.width,Hh=work.img.height,p=work.corners;
 if(drag<4){p[drag]=[clp(q[0],W),clp(q[1],Hh)]}
 else{var i=drag-4,a=p[i],b=p[(i+1)%4],dx=b[0]-a[0],dy=b[1]-a[1],L=Math.hypot(dx,dy)||1,nx=-dy/L,ny=dx/L,pr=(q[0]-last[0])*nx+(q[1]-last[1])*ny;
  [i,(i+1)%4].forEach(function(k){p[k]=[clp(p[k][0]+nx*pr,W),clp(p[k][1]+ny*pr,Hh)]})}
 last=q;drawOv();
});
['pointerup','pointercancel'].forEach(function(n){$('ov').addEventListener(n,function(){drag=-1})});

/* Perspective warp on real pixels */
function solve(A,b){
 var n=8,i,j,k;for(i=0;i<n;i++)A[i].push(b[i]);
 for(i=0;i<n;i++){var m=i;for(j=i+1;j<n;j++)if(Math.abs(A[j][i])>Math.abs(A[m][i]))m=j;var t=A[i];A[i]=A[m];A[m]=t;
  for(j=i+1;j<n;j++){var f=A[j][i]/A[i][i];for(k=i;k<=n;k++)A[j][k]-=f*A[i][k]}}
 var x=new Array(n);for(i=n-1;i>=0;i--){var s=A[i][n];for(j=i+1;j<n;j++)s-=A[i][j]*x[j];x[i]=s/A[i][i]}return x;
}
function warp(img,q){
 var d=function(a,b){return Math.hypot(a[0]-b[0],a[1]-b[1])};
 var W=Math.max(d(q[0],q[1]),d(q[3],q[2])),H=Math.max(d(q[0],q[3]),d(q[1],q[2])),k=Math.min(1,1800/Math.max(W,H));
 W=Math.max(16,Math.round(W*k));H=Math.max(16,Math.round(H*k));
 var dst=[[0,0],[W,0],[W,H],[0,H]],A=[],b=[];
 for(var i=0;i<4;i++){var x=dst[i][0],y=dst[i][1],X=q[i][0],Y=q[i][1];
  A.push([x,y,1,0,0,0,-x*X,-y*X]);b.push(X);A.push([0,0,0,x,y,1,-x*Y,-y*Y]);b.push(Y)}
 var h=solve(A,b),sc=img.getContext('2d').getImageData(0,0,img.width,img.height),sd=sc.data,sw=img.width,sh=img.height;
 var out=cnv(W,H),ox=out.getContext('2d'),od=ox.createImageData(W,H),o=od.data;
 for(var y2=0;y2<H;y2++)for(var x2=0;x2<W;x2++){
  var w=h[6]*x2+h[7]*y2+1,sx=(h[0]*x2+h[1]*y2+h[2])/w,sy=(h[3]*x2+h[4]*y2+h[5])/w,p=(y2*W+x2)*4;
  if(sx<0||sy<0||sx>=sw-1||sy>=sh-1){o[p]=o[p+1]=o[p+2]=255;o[p+3]=255;continue}
  var x0=sx|0,y0=sy|0,fx=sx-x0,fy=sy-y0,i0=(y0*sw+x0)*4,i1=i0+4,i2=i0+sw*4,i3=i2+4;
  for(var c=0;c<3;c++)o[p+c]=sd[i0+c]*(1-fx)*(1-fy)+sd[i1+c]*fx*(1-fy)+sd[i2+c]*(1-fx)*fy+sd[i3+c]*fx*fy;
  o[p+3]=255;
 }
 ox.putImageData(od,0,0);return out;
}
$('bScan').onclick=function(){
 $('scanA').style.display='block';$('bScan').disabled=true;
 setTimeout(function(){
  try{
   var base=warp(work.img,work.corners);
   var pg={orig:work.img,corners:work.corners.map(function(a){return a.slice()}),base:base,mode:'auto',b:0,c:0,s:0,rot:0};
   if(editIdx>=0){pages[editIdx]=pg;cur=editIdx}else{pages.push(pg);cur=pages.length-1}
   editIdx=-1;msg('Page scanned.','ok');show('s-ed');refresh();
  }catch(e){msg('Scanning failed: '+e.message,'err')}
  $('scanA').style.display='none';$('bScan').disabled=false;
 },1100);
};

/* Image processing */
function blurBg(c){var k=Math.max(1,Math.round(Math.max(c.width,c.height)/24)),s=cnv(Math.max(1,c.width/k|0),Math.max(1,c.height/k|0)),sx=s.getContext('2d');
 sx.drawImage(c,0,0,s.width,s.height);var b=cnv(c.width,c.height),bx=b.getContext('2d');bx.imageSmoothingQuality='high';bx.drawImage(s,0,0,c.width,c.height);return bx.getImageData(0,0,c.width,c.height).data}
function levels(d,ch){
 var h=new Uint32Array(256),n=0,i;for(i=0;i<d.length;i+=4){h[d[i+ch]]++;n++}
 var lo=0,hi=255,a=0;for(i=0;i<256;i++){a+=h[i];if(a>n*.01){lo=i;break}}a=0;for(i=255;i>=0;i--){a+=h[i];if(a>n*.01){hi=i;break}}
 return[lo,Math.max(hi,lo+1)];
}
function render(pg,full){
 var rot=((pg.rot%4)+4)%4,b=pg.base,bw=rot%2?b.height:b.width,bh=rot%2?b.width:b.height;
 var c=cnv(bw,bh),x=c.getContext('2d');x.translate(bw/2,bh/2);x.rotate(rot*Math.PI/2);x.drawImage(b,-b.width/2,-b.height/2);
 if(full==='raw')return c;
 var im=x.getImageData(0,0,bw,bh),d=im.data,i,m=pg.mode;
 if(m==='doc'||m==='bw'){var bg=blurBg(c);
  for(i=0;i<d.length;i+=4){var g=.299*d[i]+.587*d[i+1]+.114*d[i+2],bb=.299*bg[i]+.587*bg[i+1]+.114*bg[i+2]+1,v=Math.min(255,g/bb*245);
   if(m==='bw')v=v>175?255:0;else v=255*Math.pow(v/255,1.6);d[i]=d[i+1]=d[i+2]=v}}
 else if(m==='gray'){for(i=0;i<d.length;i+=4){var g2=.299*d[i]+.587*d[i+1]+.114*d[i+2];d[i]=d[i+1]=d[i+2]=g2}}
 else if(m==='auto'||m==='color'){
  var L=[levels(d,0),levels(d,1),levels(d,2)];
  for(i=0;i<d.length;i+=4){for(var ch=0;ch<3;ch++)d[i+ch]=(d[i+ch]-L[ch][0])*255/(L[ch][1]-L[ch][0]);
   if(m==='color'){var a=(d[i]+d[i+1]+d[i+2])/3;for(ch=0;ch<3;ch++)d[i+ch]=a+(d[i+ch]-a)*1.45}}}
 var cf=1+pg.c/100;
 for(i=0;i<d.length;i+=4)for(var k=0;k<3;k++){var v2=(d[i+k]-128)*cf+128+pg.b;d[i+k]=v2<0?0:v2>255?255:v2}
 if(pg.s>0){var a2=pg.s/100*1.2,cp=new Uint8ClampedArray(d),W=bw,Hh=bh;
  for(var yy=1;yy<Hh-1;yy++)for(var xx=1;xx<W-1;xx++){var p=(yy*W+xx)*4;
   for(var q=0;q<3;q++){var e=4*cp[p+q]-cp[p+q-4]-cp[p+q+4]-cp[p+q-W*4]-cp[p+q+W*4];var nv=cp[p+q]+a2*e;d[p+q]=nv<0?0:nv>255?255:nv}}}
 x.putImageData(im,0,0);return c;
}

/* Editor */
var MODES=[['orig','Original'],['auto','Auto enhance'],['doc','Document'],['bw','Black & White'],['gray','Grayscale'],['color','Color boost']];
$('filters').innerHTML=MODES.map(function(m){return'<button data-m="'+m[0]+'">'+m[1]+'</button>'}).join('');
$('filters').onclick=function(e){var m=e.target.getAttribute&&e.target.getAttribute('data-m');if(!m||cur<0)return;pages[cur].mode=m;refresh()};
function bind(id,key,lab){$(id).oninput=function(){if(cur<0)return;pages[cur].b=key==='b'?+this.value:pages[cur].b;pages[cur][key]=+this.value;$(lab).textContent=this.value;drawPrev()}}
bind('rb','b','vb');bind('rc','c','vc');bind('rs','s','vs');
var raf=0;function drawPrev(raw){
 cancelAnimationFrame(raf);raf=requestAnimationFrame(function(){
  if(cur<0)return;var pg=pages[cur],r=render(pg,raw?'raw':0),pc=$('pc'),k=Math.min(1,Math.min(860,window.innerWidth-60)/r.width,window.innerHeight*.7/r.height);
  pc.width=Math.round(r.width*k);pc.height=Math.round(r.height*k);pc.getContext('2d').drawImage(r,0,0,pc.width,pc.height);
 });
}
function refresh(){
 var pg=pages[cur];if(!pg){show('s-home');return}
 $('pgl').textContent='Page '+(cur+1)+' of '+pages.length;
 $('rb').value=pg.b;$('rc').value=pg.c;$('rs').value=pg.s;$('vb').textContent=pg.b;$('vc').textContent=pg.c;$('vs').textContent=pg.s;
 [].forEach.call($('filters').children,function(b){b.className=b.getAttribute('data-m')===pg.mode?'on':''});
 drawPrev();
 $('th').innerHTML='';
 pages.forEach(function(p,i){var t=render(p,0),s=cnv(Math.round(t.width*(120/t.height)),120);s.getContext('2d').drawImage(t,0,0,s.width,s.height);
  var im=new Image();im.src=s.toDataURL('image/jpeg',.7);im.alt='Page '+(i+1);im.className=i===cur?'on':'';im.onclick=function(){cur=i;refresh()};$('th').appendChild(im)});
}
$('bL').onclick=function(){pages[cur].rot--;refresh()};
$('bR').onclick=function(){pages[cur].rot++;refresh()};
$('bRst').onclick=function(){var p=pages[cur];p.mode='auto';p.b=p.c=p.s=0;refresh()};
var ba=$('bBA');['pointerdown'].forEach(function(n){ba.addEventListener(n,function(){drawPrev(true)})});
['pointerup','pointerleave','pointercancel'].forEach(function(n){ba.addEventListener(n,function(){drawPrev()})});
$('bDel').onclick=function(){pages.splice(cur,1);cur=Math.min(cur,pages.length-1);msg('Page deleted.');pages.length?refresh():show('s-home')};
$('bMl').onclick=function(){if(cur>0){var t=pages[cur];pages[cur]=pages[cur-1];pages[cur-1]=t;cur--;refresh()}};
$('bMr').onclick=function(){if(cur<pages.length-1){var t=pages[cur];pages[cur]=pages[cur+1];pages[cur+1]=t;cur++;refresh()}};
$('bAdd').onclick=function(){editIdx=-1;show('s-home')};
$('bRe').onclick=function(){editIdx=cur;startCrop(pages[cur].orig,pages[cur].corners.map(function(a){return a.slice()}))};

/* Export */
function jpeg(p){return render(p,0).toDataURL('image/jpeg',.93)}
function dl(url,name){var a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove()}
$('bJpg').onclick=function(){if(cur>=0){dl(jpeg(pages[cur]),'doxlio-page-'+(cur+1)+'.jpg');msg('JPG downloaded.','ok')}};
$('bPdf').onclick=function(){
 if(!pages.length)return;
 if(!(window.jspdf&&window.jspdf.jsPDF)){msg('PDF library failed to load. Check your connection and reload.','err');return}
 msg('Building PDF…');
 setTimeout(function(){try{
  var J=window.jspdf.jsPDF,pdf=null;
  pages.forEach(function(p,i){var c=render(p,0),o=c.width>c.height?'l':'p',w=210,h=297;if(o==='l'){w=297;h=210}
   if(!pdf)pdf=new J({orientation:o,unit:'mm',format:'a4',compress:true});else pdf.addPage('a4',o);
   var k=Math.min(w/c.width,h/c.height),iw=c.width*k,ih=c.height*k;
   pdf.addImage(c.toDataURL('image/jpeg',.93),'JPEG',(w-iw)/2,(h-ih)/2,iw,ih,undefined,'FAST')});
  pdf.save('doxlio-scan.pdf');msg('PDF downloaded ('+pages.length+' page'+(pages.length>1?'s':'')+').','ok');
 }catch(e){msg('PDF export failed: '+e.message,'err')}},30);
};
$('bPrev').onclick=function(){$('pvi').innerHTML='';pages.forEach(function(p,i){var im=new Image();im.src=jpeg(p);im.alt='Page '+(i+1);$('pvi').appendChild(im)});$('pv').style.display='block'};
window.__scanCanvas=function(){return cur>=0?render(pages[cur],0):null};
$('pvx').onclick=function(){$('pv').style.display='none'};
})();

;
(function(){
var $=function(i){return document.getElementById(i)};
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function say(t,c){var m=$('msg');m.textContent=t||'';m.className=c||''}
var LIB={jspdf:'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',pdflib:'https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js',tess:'https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js',pdfjs:'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js',qr:'https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js'},loaded={};
function lib(k){if(loaded[k])return loaded[k];loaded[k]=new Promise(function(res,rej){var s=document.createElement('script');s.src=LIB[k];s.onload=res;s.onerror=function(){loaded[k]=null;rej(new Error('Could not load a required library. Check your internet connection and reload the page.'))};document.head.appendChild(s)});return loaded[k]}
function dl(blob,name){var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();a.remove()}
function readBuf(f){return new Promise(function(r,j){var fr=new FileReader();fr.onload=function(){r(fr.result)};fr.onerror=function(){j(new Error('Could not read '+f.name))};fr.readAsArrayBuffer(f)})}
function loadImg(f){return new Promise(function(r,j){var i=new Image();i.onload=function(){r(i)};i.onerror=function(){j(new Error('Could not read image '+f.name))};i.src=URL.createObjectURL(f)})}
var API={ai:false,convert:false};fetch('/api/health').then(function(r){return r.json()}).then(function(j){API=j}).catch(function(){});
function kb(n){return n>1048576?(n/1048576).toFixed(2)+' MB':Math.round(n/1024)+' KB'}

/* ---------- Tool catalogue ---------- */
var T=[
['scanner','Document Scanner','Camera or upload, 4-corner crop, perspective fix, filters, multi-page PDF.','Scan','📷'],
['ocr','Image to Text (OCR)','Extract real text from photos and screenshots. English, Urdu, Arabic, Hindi, French, Spanish, German.','OCR','🔎'],
['resume','Resume / CV Builder','3 professional templates, photo crop, live preview, print or save as PDF.','Career','📄'],
['cover','Cover Letter Builder','Templates matching your resume, live preview, print or save as PDF.','Career','✉️'],
['pdf-merge','Merge PDF','Combine several PDFs into one.','PDF','🔗'],
['pdf-split','Split PDF','Split by page ranges or into single pages.','PDF','✂️'],
['pdf-extract','Extract PDF pages','Keep only the pages you choose.','PDF','📑'],
['pdf-delete','Delete PDF pages','Remove unwanted pages.','PDF','🗑️'],
['pdf-rotate','Rotate PDF','Rotate all or selected pages.','PDF','🔄'],
['pdf-reorder','Reorder PDF pages','Set a new page order.','PDF','↕️'],
['pdf-watermark','Add watermark','Diagonal text watermark on every page.','PDF','💧'],
['pdf-numbers','Add page numbers','Number the pages of a PDF.','PDF','#️⃣'],
['img-pdf','JPG / PNG to PDF','Turn images into one PDF.','PDF','🖼️'],
['text-pdf','Text to PDF','Turn typed text into a PDF.','PDF','📝'],
['img-convert','Convert images','Convert between JPG, PNG and WebP.','Image','🔁'],
['img-resize','Resize image','Set exact width or height.','Image','📐'],
['img-compress','Compress image','Shrink image file size.','Image','🗜️'],
['word-pdf','Word to PDF','Convert .docx to PDF. Needs the Doxlio server.','Convert','📘'],
['pdf-word','PDF to Word','Convert PDF to .docx (basic layouts). Needs the Doxlio server.','Convert','📗'],
['excel-pdf','Excel to PDF','Convert .xlsx to PDF. Needs the Doxlio server.','Convert','📊'],
['ppt-pdf','PowerPoint to PDF','Convert .pptx to PDF. Needs the Doxlio server.','Convert','📽️'],
['ai-summarize','AI Document Summarizer','Summary and key bullets of any text.','AI','🧠'],
['ai-keypoints','AI Key Points Extractor','Pull out the key points.','AI','📌'],
['ai-notes','AI Notes Generator','Turn text into study notes.','AI','🗒️'],
['ai-rewrite','AI Text Rewriter','Rewrite in a tone you choose.','AI','✍️'],
['ai-grammar','AI Grammar Checker','Fix grammar and spelling.','AI','✅'],
['ai-translate','AI Document Translator','Translate text into another language.','AI','🌐'],
['ai-resume','AI Resume Analyzer','Strengths, gaps and improvements.','AI','🧾'],
['ai-jd','AI Job Description Analyzer','Understand a job post and tailor your application.','AI','🎯'],
['ai-bio','AI Professional Bio Generator','Short bio from your facts.','AI','👤'],
['ai-letter','AI Letter Generator','Draft a professional letter.','AI','📨'],
['img-text-edit','Edit Text in Image','Change names, dates or spelling in an image. Font, size and colour are matched automatically.','Image','✏️'],
['qr','QR code generator','Make a QR code for a link or text.','Productivity','▦'],
['pdf-jpg','PDF to JPG','Turn every PDF page into a JPG image.','PDF','🖼️'],
['pdf-text','PDF to Text (with OCR)','Copy text from a PDF. Scanned pages are read with OCR.','OCR','📃'],
['wordcount','Word & Character Counter','Count words, characters, sentences and reading time.','Text','🔢'],
['case','Text Case Converter','UPPERCASE, lowercase, Title Case and Sentence case.','Text','🔠']
];
if(window.DX_STATIC)T=T.filter(function(t){return t[3]!=='AI'&&t[3]!=='Convert'});
function inT(r){return T.some(function(t){return t[0]===r})}
var PAGES={
about:['About Doxlio','<b>Doxlio</b> is a free online toolkit for everyday documents: scan with your phone camera, extract text with OCR, merge, split and convert PDFs and images, edit text in images, and build resumes and cover letters. Files are processed in your browser on your own device, and no account is needed.</p><h2>What does “Doxlio” mean?</h2><p>The name joins <b>“Dox”</b>, a common short form of documents, with <b>“folio”</b>, an old word for a page or sheet of paper. Together: every document, one smart place.'],
privacy:['Privacy Policy','Scanner, OCR, PDF, resume and cover letter tools run locally in your browser. Your files are not uploaded to a Doxlio server and Doxlio does not store them. Closing or reloading the page discards your work, and nothing is deleted from your device automatically. If you send a message through the contact form, your name, email address and message are sent to our form provider (Formspree) and delivered to our inbox; please do not include sensitive information. Some libraries (PDF, OCR) and OCR language data are downloaded from public CDNs when you use a tool, so those hosts can see your IP address. This is not a guarantee of absolute security.'],
terms:['Terms of Service','Doxlio is provided as is, without warranty. You are responsible for the documents you process and for having the right to use them. Check results before relying on them. Do not use editing tools to alter identity documents, certificates, receipts or any other document in order to mislead or defraud anyone.']
};
var TITLE={home:'Doxlio – Free Document Scanner, PDF & OCR Tools'};
T.forEach(function(t){TITLE[t[0]]=t[1]+' – Doxlio (free, no sign-up)'});
for(var pk in PAGES)TITLE[pk]=PAGES[pk][0]+' – Doxlio';
TITLE.blog='Guides – Doxlio';TITLE.app='Get the Doxlio app – Android and iPhone';TITLE.contact='Contact Doxlio – support, feedback and business enquiries';

/* ---------- Home ---------- */
var CATS={Scan:'Document scanner',OCR:'OCR and text extraction',PDF:'PDF tools',Image:'Image tools',Text:'Text tools',Convert:'Office conversion (needs the Doxlio server)',AI:'AI tools (needs the Doxlio server and an API key)',Career:'Resume and cover letter',Productivity:'Productivity'};
function card(t){return '<a class="tc" href="#/'+t[0]+'"><span class="ic">'+t[4]+'</span><b>'+esc(t[1])+'</b><small>'+esc(t[2])+'</small></a>'}
function drawHome(q){
 q=(q||'').toLowerCase();var h='',any=false;
 Object.keys(CATS).forEach(function(c){
  var l=T.filter(function(t){return t[3]===c&&(!q||(t[1]+' '+t[2]).toLowerCase().indexOf(q)>=0)});
  if(l.length){any=true;h+='<h2>'+CATS[c]+'</h2><div class="grid">'+l.map(card).join('')+'</div>'}
 });
 $('homeTools').innerHTML=any?h:'<p>No tool matches “'+esc(q)+'”. Try “pdf”, “scan” or “resume”.</p>';
}
$('hsearch').oninput=function(){drawHome(this.value)};

/* ---------- Generic PDF / file tools ---------- */
function ranges(str,n){
 var out=[];str=(str||'').replace(/\s/g,'');if(!str)throw new Error('Enter page numbers, for example 1-3,5.');
 str.split(',').forEach(function(p){
  var m=p.match(/^(\d*)-(\d*)$/),a,b;
  if(m){a=m[1]?+m[1]:1;b=m[2]?+m[2]:n}else if(/^\d+$/.test(p)){a=b=+p}else throw new Error('Invalid page range: '+p);
  if(a<1||b>n||a>b)throw new Error('Page range '+p+' is outside 1–'+n+'.');
  for(var i=a;i<=b;i++)out.push(i-1);
 });return out;
}
async function openPdf(f){
 var PL=window.PDFLib;
 try{return await PL.PDFDocument.load(await readBuf(f))}
 catch(e){throw new Error('Could not open '+f.name+'. It may be encrypted or damaged.')}
}
async function copyTo(src,idx){var d=await PDFLib.PDFDocument.create(),p=await d.copyPages(src,idx);p.forEach(function(x){d.addPage(x)});return d}
function stem(f){return f.name.replace(/\.[^.]+$/,'')}
var PDFACC='.pdf,application/pdf',IMGACC='image/jpeg,image/png,image/webp';
var P={
'pdf-merge':{lib:'pdflib',acc:PDFACC,multi:1,min:2,opts:'',run:async function(fs){var d=await PDFLib.PDFDocument.create();for(var i=0;i<fs.length;i++){var s=await openPdf(fs[i]),p=await d.copyPages(s,s.getPageIndices());p.forEach(function(x){d.addPage(x)})}return[{name:'merged.pdf',bytes:await d.save()}]}},
'pdf-split':{lib:'pdflib',acc:PDFACC,opts:'<label class="f"><span>Ranges (optional). Comma separated parts, each becomes one file, e.g. 1-3,4,5-8. Leave empty for one file per page (max 200).</span><input type="text" id="o1"></label>',run:async function(fs,o){var s=await openPdf(fs[0]),n=s.getPageCount(),out=[],parts=o.o1.trim()?o.o1.split(','):null;if(!parts){if(n>200)throw new Error('Too many pages. Use ranges.');for(var i=0;i<n;i++)out.push({name:stem(fs[0])+'-page-'+(i+1)+'.pdf',bytes:await (await copyTo(s,[i])).save()})}else for(var j=0;j<parts.length;j++)out.push({name:stem(fs[0])+'-part-'+(j+1)+'.pdf',bytes:await (await copyTo(s,ranges(parts[j],n))).save()});return out}},
'pdf-extract':{lib:'pdflib',acc:PDFACC,opts:'<label class="f"><span>Pages to keep, e.g. 1-3,7</span><input type="text" id="o1"></label>',run:async function(fs,o){var s=await openPdf(fs[0]);return[{name:stem(fs[0])+'-extracted.pdf',bytes:await (await copyTo(s,ranges(o.o1,s.getPageCount()))).save()}]}},
'pdf-delete':{lib:'pdflib',acc:PDFACC,opts:'<label class="f"><span>Pages to delete, e.g. 2,4-6</span><input type="text" id="o1"></label>',run:async function(fs,o){var s=await openPdf(fs[0]),n=s.getPageCount(),del=ranges(o.o1,n),keep=[];for(var i=0;i<n;i++)if(del.indexOf(i)<0)keep.push(i);if(!keep.length)throw new Error('You cannot delete every page.');return[{name:stem(fs[0])+'-edited.pdf',bytes:await (await copyTo(s,keep)).save()}]}},
'pdf-reorder':{lib:'pdflib',acc:PDFACC,opts:'<label class="f"><span>New order, e.g. 3,1,2,4-6 (pages you leave out are dropped)</span><input type="text" id="o1"></label>',run:async function(fs,o){var s=await openPdf(fs[0]);return[{name:stem(fs[0])+'-reordered.pdf',bytes:await (await copyTo(s,ranges(o.o1,s.getPageCount()))).save()}]}},
'pdf-rotate':{lib:'pdflib',acc:PDFACC,opts:'<label class="f"><span>Rotate by</span><select id="o2"><option value="90">90° clockwise</option><option value="180">180°</option><option value="270">90° counter-clockwise</option></select></label><label class="f"><span>Pages (empty = all), e.g. 1-2</span><input type="text" id="o1"></label>',run:async function(fs,o){var s=await openPdf(fs[0]),n=s.getPageCount(),sel=o.o1.trim()?ranges(o.o1,n):s.getPageIndices();sel.forEach(function(i){var p=s.getPage(i);p.setRotation(PDFLib.degrees((p.getRotation().angle+ +o.o2)%360))});return[{name:stem(fs[0])+'-rotated.pdf',bytes:await s.save()}]}},
'pdf-watermark':{lib:'pdflib',acc:PDFACC,opts:'<label class="f"><span>Watermark text (Latin characters only)</span><input type="text" id="o1" value="CONFIDENTIAL"></label><label class="f"><span>Opacity (10–90 %)</span><input type="range" id="o2" min="10" max="90" value="25"></label>',run:async function(fs,o){var s=await openPdf(fs[0]),PL=PDFLib,font=await s.embedFont(PL.StandardFonts.HelveticaBold);if(!o.o1.trim())throw new Error('Enter the watermark text.');s.getPages().forEach(function(p){var w=p.getWidth(),h=p.getHeight(),size=Math.min(w,h)/Math.max(6,o.o1.length*.55),tw=font.widthOfTextAtSize(o.o1,size);try{p.drawText(o.o1,{x:w/2-tw/2*.7071,y:h/2-tw/2*.7071,size:size,font:font,color:PL.rgb(.5,.5,.5),opacity:o.o2/100,rotate:PL.degrees(45)})}catch(e){throw new Error('This font only supports Latin letters and digits.')}});return[{name:stem(fs[0])+'-watermarked.pdf',bytes:await s.save()}]}},
'pdf-numbers':{lib:'pdflib',acc:PDFACC,opts:'<label class="f"><span>Position</span><select id="o2"><option value="bc">Bottom centre</option><option value="br">Bottom right</option><option value="bl">Bottom left</option><option value="tc">Top centre</option></select></label><label class="f"><span>Start at</span><input type="text" id="o1" value="1"></label>',run:async function(fs,o){var s=await openPdf(fs[0]),PL=PDFLib,font=await s.embedFont(PL.StandardFonts.Helvetica),st=parseInt(o.o1,10);if(isNaN(st))throw new Error('Start number must be a number.');s.getPages().forEach(function(p,i){var t=String(st+i),w=p.getWidth(),h=p.getHeight(),tw=font.widthOfTextAtSize(t,10),x=o.o2.charAt(1)==='c'?w/2-tw/2:o.o2.charAt(1)==='r'?w-40-tw:40,y=o.o2.charAt(0)==='b'?24:h-30;p.drawText(t,{x:x,y:y,size:10,font:font,color:PL.rgb(.2,.2,.2)})});return[{name:stem(fs[0])+'-numbered.pdf',bytes:await s.save()}]}},
'img-pdf':{lib:'jspdf',acc:IMGACC,multi:1,min:1,opts:'<label class="f"><span>Page size</span><select id="o2"><option value="a4">A4 (fit image)</option><option value="img">Same size as image</option></select></label>',run:async function(fs,o){var J=window.jspdf.jsPDF,pdf=null;for(var i=0;i<fs.length;i++){var im=await loadImg(fs[i]),c=document.createElement('canvas');c.width=im.naturalWidth;c.height=im.naturalHeight;var x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);x.drawImage(im,0,0);var d=c.toDataURL('image/jpeg',.92),ori=c.width>c.height?'l':'p';
 if(o.o2==='img'){var f2=.264583;if(!pdf)pdf=new J({orientation:ori,unit:'mm',format:[c.width*f2,c.height*f2]});else pdf.addPage([c.width*f2,c.height*f2],ori);pdf.addImage(d,'JPEG',0,0,c.width*f2,c.height*f2)}
 else{var W=ori==='l'?297:210,H=ori==='l'?210:297,m=10,k=Math.min((W-2*m)/c.width,(H-2*m)/c.height);if(!pdf)pdf=new J({orientation:ori,unit:'mm',format:'a4'});else pdf.addPage('a4',ori);pdf.addImage(d,'JPEG',(W-c.width*k)/2,(H-c.height*k)/2,c.width*k,c.height*k)}}
 return[{name:'images.pdf',bytes:pdf.output('arraybuffer')}]}},
'text-pdf':{lib:'jspdf',nofile:1,opts:'<label class="f"><span>Your text (Latin characters; Urdu/Arabic need the OCR tool’s Word export instead)</span><textarea id="o1" rows="12"></textarea></label>',run:async function(fs,o){if(!o.o1.trim())throw new Error('Type some text first.');var pdf=new window.jspdf.jsPDF({unit:'mm',format:'a4'}),lines=pdf.splitTextToSize(o.o1,175),y=20;pdf.setFontSize(11);lines.forEach(function(l){if(y>280){pdf.addPage();y=20}pdf.text(l,18,y);y+=6});return[{name:'text.pdf',bytes:pdf.output('arraybuffer')}]}}
};

function cb(c,t,q){return new Promise(function(r){c.toBlob(function(b){r(b)},t,q)})}
async function imgCanvas(f,w,h,fill){var im=await loadImg(f),W=w||im.naturalWidth,H=h||im.naturalHeight,c=document.createElement('canvas');c.width=W;c.height=H;var x=c.getContext('2d');if(fill){x.fillStyle='#fff';x.fillRect(0,0,W,H)}x.drawImage(im,0,0,W,H);return c}
async function srv(f,to){if(!API.convert)throw new Error('This conversion needs the Doxlio server with LibreOffice. It is not available on static hosting. Deploy the included Dockerfile (see README).');
 var r;try{r=await fetch('/api/convert?to='+to,{method:'POST',headers:{'x-filename':encodeURIComponent(f.name)},body:f})}catch(e){throw new Error('Could not reach the Doxlio server.')}
 if(!r.ok){var j={};try{j=await r.json()}catch(_){}throw new Error(j.error||'Conversion failed.')}return await r.arrayBuffer()}
var DOCX='application/vnd.openxmlformats-officedocument.wordprocessingml.document';
function conv(ext,to,type){return{server:1,acc:ext,exts:new RegExp('\\'+ext.replace(',','|\\')+'$','i'),opts:'',run:async function(fs){var b=await srv(fs[0],to);return[{name:stem(fs[0])+'.'+to,bytes:b,type:type}]}}}
P['img-convert']={acc:IMGACC,multi:1,min:1,opts:'<label class="f"><span>Convert to</span><select id="o2"><option value="jpeg">JPG</option><option value="png">PNG</option><option value="webp">WebP</option></select></label><label class="f"><span>Quality (JPG/WebP)</span><input type="range" id="o3" min="50" max="100" value="90"></label>',run:async function(fs,o){var out=[],ext=o.o2==='jpeg'?'jpg':o.o2;for(var i=0;i<fs.length;i++){var c=await imgCanvas(fs[i],0,0,o.o2==='jpeg'),b=await cb(c,'image/'+o.o2,o.o3/100);if(!b||b.type!=='image/'+o.o2)throw new Error('Your browser cannot create '+o.o2.toUpperCase()+' files.');out.push({name:stem(fs[i])+'.'+ext,bytes:await b.arrayBuffer(),type:b.type})}return out}};
P['img-resize']={acc:IMGACC,multi:1,min:1,opts:'<label class="f"><span>Width in pixels (leave empty to keep ratio)</span><input type="text" id="o1"></label><label class="f"><span>Height in pixels (leave empty to keep ratio)</span><input type="text" id="o2"></label>',run:async function(fs,o){var W=parseInt(o.o1,10),H=parseInt(o.o2,10);if(!(W>0)&&!(H>0))throw new Error('Enter a width or a height.');if(W>10000||H>10000)throw new Error('Maximum size is 10000 px.');var out=[];for(var i=0;i<fs.length;i++){var im=await loadImg(fs[i]),r=im.naturalWidth/im.naturalHeight,w=W>0?W:Math.round(H*r),h=H>0?H:Math.round(W/r);if(W>0&&H>0){w=W;h=H}var png=fs[i].type==='image/png',c=await imgCanvas(fs[i],w,h,!png),b=await cb(c,png?'image/png':'image/jpeg',.92);out.push({name:stem(fs[i])+'-'+w+'x'+h+(png?'.png':'.jpg'),bytes:await b.arrayBuffer(),type:b.type})}return out}};
P['img-compress']={acc:IMGACC,multi:1,min:1,opts:'<label class="f"><span>Quality (30–95)</span><input type="range" id="o2" min="30" max="95" value="70"></label><label class="f"><span>Longest side in pixels (0 = keep)</span><input type="text" id="o1" value="2000"></label>',run:async function(fs,o){var m=parseInt(o.o1,10)||0,out=[];for(var i=0;i<fs.length;i++){var im=await loadImg(fs[i]),k=m>0?Math.min(1,m/Math.max(im.naturalWidth,im.naturalHeight)):1,c=await imgCanvas(fs[i],Math.round(im.naturalWidth*k),Math.round(im.naturalHeight*k),true),b=await cb(c,'image/jpeg',o.o2/100);out.push({name:stem(fs[i])+'-compressed.jpg',bytes:await b.arrayBuffer(),type:'image/jpeg'})}return out}};
P['word-pdf']=conv('.docx','pdf','application/pdf');P['excel-pdf']=conv('.xlsx','pdf','application/pdf');P['ppt-pdf']=conv('.pptx','pdf','application/pdf');
P['pdf-word']=conv('.pdf','docx',DOCX);
P['qr']={lib:'qr',nofile:1,opts:'<label class="f"><span>Text or link</span><input type="text" id="o1" value="https://"></label><label class="f"><span>Size</span><select id="o2"><option value="256">256 px</option><option value="512" selected>512 px</option><option value="1024">1024 px</option></select></label>',run:async function(fs,o){if(!o.o1.trim()||o.o1.length>1000)throw new Error('Enter text (up to 1000 characters).');var q=qrcode(0,'M');q.addData(o.o1);q.make();var n=q.getModuleCount(),S=+o.o2,cell=Math.max(1,Math.floor(S/(n+8))),c=document.createElement('canvas');c.width=c.height=cell*(n+8);var x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);x.fillStyle='#000';for(var r=0;r<n;r++)for(var k=0;k<n;k++)if(q.isDark(r,k))x.fillRect((k+4)*cell,(r+4)*cell,cell,cell);var b=await cb(c,'image/png');return[{name:'qr-code.png',bytes:await b.arrayBuffer(),type:'image/png'}]}};

var WORKER='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
async function pdfDoc(f){await lib('pdfjs');pdfjsLib.GlobalWorkerOptions.workerSrc=WORKER;try{return await pdfjsLib.getDocument({data:new Uint8Array(await readBuf(f))}).promise}catch(e){throw new Error('Could not open '+f.name+'. It may be encrypted or damaged.')}}
async function pdfCanvas(doc,i,scale){var p=await doc.getPage(i),vp=p.getViewport({scale:scale}),c=document.createElement('canvas');c.width=Math.round(vp.width);c.height=Math.round(vp.height);var x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);await p.render({canvasContext:x,viewport:vp}).promise;return c}
P['pdf-jpg']={lib:'pdfjs',acc:PDFACC,opts:'<label class="f"><span>Image quality</span><select id="o2"><option value="1.5">Standard</option><option value="2" selected>High</option><option value="3">Very high (large files)</option></select></label>',run:async function(fs,o){var doc=await pdfDoc(fs[0]),n=doc.numPages;if(n>60)throw new Error('This PDF has '+n+' pages. Split it first (maximum 60 pages).');var out=[];for(var i=1;i<=n;i++){say('Rendering page '+i+' of '+n+'…');var c=await pdfCanvas(doc,i,+o.o2),b=await cb(c,'image/jpeg',.92);out.push({name:stem(fs[0])+'-page-'+i+'.jpg',bytes:await b.arrayBuffer(),type:'image/jpeg'})}return out}};
P['pdf-text']={lib:'pdfjs',acc:PDFACC,opts:'<label class="f"><span>OCR language for scanned pages</span><select id="o2"><option value="eng">English</option><option value="urd">Urdu</option><option value="ara">Arabic</option><option value="hin">Hindi</option><option value="fra">French</option><option value="spa">Spanish</option><option value="deu">German</option></select></label>',run:async function(fs,o){var doc=await pdfDoc(fs[0]),n=doc.numPages;if(n>30)throw new Error('This PDF has '+n+' pages. Split it first (maximum 30 pages).');var out=[],w=null;
 try{for(var i=1;i<=n;i++){var pg=await doc.getPage(i),tc=await pg.getTextContent(),t=tc.items.map(function(x){return x.str}).join(' ').trim();
  if(t.length<25){say('Page '+i+' of '+n+': reading scanned text (OCR)…');if(!w){await lib('tess');w=await Tesseract.createWorker(o.o2,1,{})}var r=await w.recognize(await pdfCanvas(doc,i,2));t=r.data.text.trim()}
  out.push('--- Page '+i+' ---\n'+t)}}finally{try{if(w)await w.terminate()}catch(_){}}
 return[{name:stem(fs[0])+'.txt',bytes:new TextEncoder().encode(out.join('\n\n')).buffer,type:'text/plain;charset=utf-8'}]}};
var TF=[];
function drawTool(id){
 var t=T.filter(function(x){return x[0]===id})[0],p=P[id];TF=[];
 $('v-tool').innerHTML='<h1>'+t[4]+' '+esc(t[1])+'</h1><p>'+esc(t[2])+' Free to use — no sign-up required. '+(p.server?'Your file is sent to the Doxlio server, converted in a temporary folder and deleted straight after; it is not stored or logged.':'Files stay on your device.')+'</p><div class="card">'+
 (p.nofile?'':'<div class="drop" id="dz"><p>Drag and drop '+(p.multi?'files':'a file')+' here or</p><label class="btn p">Browse files<input type="file" id="tf" accept="'+p.acc+'"'+(p.multi?' multiple':'')+' hidden></label></div><div id="tfl"></div>')+
 '<div id="topts">'+p.opts+'</div><div class="row"><button class="p" id="trun">'+esc(t[1])+'</button></div><div id="tres"></div></div>';
 if(!p.nofile){
  var add=function(list){[].forEach.call(list,function(f){
   var okT=p.exts?p.exts.test(f.name):p.acc.indexOf('pdf')>=0?(f.type==='application/pdf'||/\.pdf$/i.test(f.name)):/^image\/(jpeg|png|webp)$/.test(f.type);
   if(!okT){say(f.name+': unsupported file type.','err');return}
   if(f.size>100*1048576){say(f.name+': larger than 100 MB.','err');return}
   if(!p.multi)TF=[];TF.push(f);say('')});drawFl()};
  $('tf').onchange=function(){add(this.files);this.value=''};
  var dz=$('dz');['dragover','dragenter'].forEach(function(n){dz.addEventListener(n,function(e){e.preventDefault();dz.classList.add('hot')})});
  ['dragleave','drop'].forEach(function(n){dz.addEventListener(n,function(e){e.preventDefault();dz.classList.remove('hot')})});
  dz.addEventListener('drop',function(e){add(e.dataTransfer.files)});
 }
 function drawFl(){var el=$('tfl');if(!el)return;el.innerHTML=TF.map(function(f,i){return'<div class="fl"><span>'+esc(f.name)+' · '+kb(f.size)+'</span>'+(p.multi?'<button data-u="'+i+'">↑</button><button data-d="'+i+'">↓</button>':'')+'<button data-x="'+i+'">✕</button></div>'}).join('')}
 $('v-tool').onclick=function(e){var b=e.target,u=b.getAttribute&&b.getAttribute('data-u'),d=b.getAttribute&&b.getAttribute('data-d'),x=b.getAttribute&&b.getAttribute('data-x'),i;
  if(u!=null){i=+u;if(i>0){var a=TF[i];TF[i]=TF[i-1];TF[i-1]=a}drawFl()}if(d!=null){i=+d;if(i<TF.length-1){var c=TF[i];TF[i]=TF[i+1];TF[i+1]=c}drawFl()}if(x!=null){TF.splice(+x,1);drawFl()}};
 $('trun').onclick=async function(){
  var btn=this;
  if(!p.nofile&&TF.length<(p.min||1)){say(p.min>1?'Add at least '+p.min+' files.':'Choose a file first.','err');return}
  var o={};[].forEach.call($('topts').querySelectorAll('input,select,textarea'),function(el){o[el.id]=el.value});
  btn.disabled=true;say('Processing…');$('tres').innerHTML='';
  try{if(p.lib)await lib(p.lib);var out=await p.run(TF,o);
   $('tres').innerHTML=out.map(function(r,i){return'<div class="fl"><span>'+esc(r.name)+' · '+kb(r.bytes.byteLength)+'</span><button class="p" data-r="'+i+'">Download</button><button data-v="'+i+'">Open</button></div>'}).join('');
   $('tres').onclick=function(e){var r=e.target.getAttribute('data-r'),v=e.target.getAttribute('data-v'),k=r!=null?r:v;if(k==null)return;var b=new Blob([out[+k].bytes],{type:out[+k].type||'application/pdf'});if(r!=null)dl(b,out[+k].name);else window.open(URL.createObjectURL(b),'_blank')};
   say('Done. '+out.length+' file'+(out.length>1?'s':'')+' ready. Nothing was uploaded.','ok');
  }catch(e){say(e.message||'Something went wrong.','err')}
  btn.disabled=false;
 };
}

/* ---------- OCR ---------- */
var OCR_SRC=null,ocrFile=null;
var LANGS=[['eng','English'],['urd','Urdu'],['ara','Arabic'],['hin','Hindi'],['fra','French'],['spa','Spanish'],['deu','German']];
$('ocrLang').innerHTML=LANGS.map(function(l){return'<option value="'+l[0]+'">'+l[1]+'</option>'}).join('');
function ocrShow(url){$('ocrPrev').src=url;$('ocrPrev').hidden=false}
$('ocrFile').onchange=function(){var f=this.files[0];this.value='';if(!f)return;
 if(!/^image\/(jpeg|png|webp)$/.test(f.type)){say('Use a JPG, PNG or WebP image.','err');return}
 if(f.size>25*1048576){say('Image is larger than 25 MB.','err');return}
 OCR_SRC=null;ocrFile=f;ocrShow(URL.createObjectURL(f));say('')};
$('ocrLang').onchange=function(){$('ocrOut').dir=(this.value==='urd'||this.value==='ara')?'rtl':'ltr'};
$('ocrRun').onclick=async function(){
 var src=OCR_SRC||ocrFile;if(!src){say('Choose an image first.','err');return}
 var btn=this;btn.disabled=true;$('ocrOut').value='';var w=null;
 try{say('Loading OCR engine…');await lib('tess');
  w=await Tesseract.createWorker($('ocrLang').value,1,{logger:function(m){if(m.status)say(m.status+(m.progress?' '+Math.round(m.progress*100)+'%':'')+'…')}});
  var r=await w.recognize(OCR_SRC?OCR_SRC.toDataURL('image/png'):src);
  $('ocrOut').value=r.data.text.trim();$('ocrOut').dir=($('ocrLang').value==='urd'||$('ocrLang').value==='ara')?'rtl':'ltr';
  say($('ocrOut').value?'Done. Check and edit the text below (confidence '+Math.round(r.data.confidence)+'%).':'No text was found. Try a sharper, well-lit image.',$('ocrOut').value?'ok':'err');
 }catch(e){say('OCR failed: '+(e.message||e)+' (language data is downloaded on first use, so you must be online).','err')}
 try{if(w)await w.terminate()}catch(_){}btn.disabled=false;
};
$('ocrCopy').onclick=function(){var t=$('ocrOut').value;if(!t)return;(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(function(){say('Copied.','ok')},function(){$('ocrOut').select();document.execCommand('copy');say('Copied.','ok')})};
$('ocrTxt').onclick=function(){var t=$('ocrOut').value;if(t)dl(new Blob([t],{type:'text/plain;charset=utf-8'}),'extracted-text.txt')};
$('ocrDoc').onclick=function(){var t=$('ocrOut').value;if(!t)return;var rtl=$('ocrOut').dir==='rtl';dl(new Blob(['\ufeff<html><head><meta charset="utf-8"></head><body dir="'+(rtl?'rtl':'ltr')+'">'+t.split(/\n+/).map(function(l){return'<p>'+esc(l)+'</p>'}).join('')+'</body></html>'],{type:'application/msword'}),'extracted-text.doc')};
document.addEventListener('click',function(e){if(e.target&&e.target.id==='bOcr'){var c=window.__scanCanvas&&window.__scanCanvas();if(!c){say('Scan a page first.','err');return}OCR_SRC=c;ocrFile=null;location.hash='#/ocr'}});

/* ---------- Print helper and sheet CSS ---------- */
var SHEETCSS='.sheet{width:794px;min-height:1123px;background:#fff;color:#1b1f2a;font:13px/1.5 Calibri,Arial,sans-serif;box-sizing:border-box;text-align:left}.sheet *{box-sizing:border-box}.sheet h1{font-size:30px;margin:0;line-height:1.15}.sheet h3{font-size:12px;letter-spacing:.14em;text-transform:uppercase;margin:16px 0 6px;color:var(--ac)}.sheet p{margin:0 0 6px;white-space:pre-wrap}.sheet ul{margin:2px 0 6px 18px;padding:0}.ith{display:flex;justify-content:space-between;gap:8px}.its{color:#555;font-style:italic}.it{margin-bottom:9px}.chip{display:inline-block;border:1px solid var(--ac);color:var(--ac);border-radius:99px;padding:1px 9px;margin:0 4px 4px 0;font-size:12px}.sub{font-size:15px;margin:2px 0 8px;color:#444}.ct{font-size:12px;color:#555}.t-modern{display:grid;grid-template-columns:250px 1fr}.t-modern aside{background:var(--ac);color:#fff;padding:34px 22px}.t-modern aside h3{color:#fff;border-bottom:1px solid #fff6;padding-bottom:3px}.t-modern aside .chip{border-color:#fff;color:#fff}.t-modern aside .ct{color:#fff;word-break:break-word}.t-modern main{padding:34px 30px}.t-modern h1{color:var(--ac)}.ph{width:130px;height:130px;border-radius:50%;object-fit:cover;display:block;margin:0 auto 16px;border:3px solid #fff}.t-classic{padding:44px 52px;font-family:Georgia,"Times New Roman",serif}.t-classic .hd{text-align:center;border-bottom:2px solid #222;padding-bottom:10px;margin-bottom:6px}.t-classic h3{color:#222;border-bottom:1px solid #999;padding-bottom:2px}.t-classic .ph{margin:0 auto 8px;border-color:#222}.t-minimal{padding:44px 52px}.t-minimal h1{font-weight:300;letter-spacing:.02em}.t-minimal h3{color:#222;font-weight:700;border-left:4px solid var(--ac);padding-left:8px}.t-minimal .ph{margin:0 0 10px;border-color:var(--ac)}.lt{padding:56px 64px;line-height:1.65}.lt .sp{height:14px}';
var st=document.createElement('style');st.textContent=SHEETCSS+'.scale{transform-origin:top left}';document.head.appendChild(st);
function printSheet(el){if(!el)return;var f=document.createElement('iframe');f.style.cssText='position:fixed;right:0;bottom:0;width:0;height:0;border:0';document.body.appendChild(f);
 var d=f.contentWindow.document;d.open();d.write('<!doctype html><html><head><meta charset="utf-8"><style>@page{size:A4;margin:0}body{margin:0}*{-webkit-print-color-adjust:exact;print-color-adjust:exact}'+SHEETCSS+'</style></head><body>'+el.outerHTML+'</body></html>');d.close();
 setTimeout(function(){f.contentWindow.focus();f.contentWindow.print();setTimeout(function(){f.remove()},2000)},400)}
function fit(wrapId){var w=$(wrapId),s=w.firstChild;if(!s||!w.parentNode.clientWidth)return;var k=Math.min(1,(w.parentNode.clientWidth-4)/794);s.style.transform='scale('+k+')';w.style.height=(s.firstChild.offsetHeight*k)+'px'}
window.addEventListener('resize',function(){fit('rvWrap');fit('clWrap')});
function fld(label,k,val,type){return'<label class="f"><span>'+label+'</span>'+(type==='area'?'<textarea rows="4" data-k="'+k+'">'+esc(val)+'</textarea>':'<input type="text" data-k="'+k+'" value="'+esc(val)+'">')+'</label>'}
function tplBtns(cur,cb){return['modern|Modern Professional','classic|Classic Corporate','minimal|Minimal Clean'].map(function(s){s=s.split('|');return'<button data-tpl="'+s[0]+'" class="'+(cur===s[0]?'on':'')+'">'+s[1]+'</button>'}).join('')}

/* ---------- Resume builder ---------- */
var R={name:'Alex Morgan',title:'Product Designer',email:'alex@example.com',phone:'+44 20 7946 0000',loc:'London, UK',link:'linkedin.com/in/alexmorgan',photo:'',color:'#1d4ed8',tpl:'modern',
sum:'Product designer with 6 years of experience shipping web and mobile products used by millions of people. Strong at research, prototyping and working closely with engineers.',
skills:'Figma, Prototyping, User research, Design systems, HTML/CSS',
show:{sum:1,exp:1,edu:1,skills:1,lang:1,cert:1,proj:1,ref:0},
exp:[{a:'Senior Product Designer',b:'Northwind Labs',c:'2021 – Present',d:'• Led redesign of onboarding, raising activation by 18%\n• Built and maintained the company design system'}],
edu:[{a:'BA Graphic Design',b:'University of the Arts London',c:'2014 – 2017',d:''}],
proj:[{a:'Portfolio redesign',b:'alexmorgan.design',c:'2024',d:'Rebuilt a personal portfolio with a focus on accessibility.'}],
cert:[{a:'UX Certification',b:'Nielsen Norman Group',c:'2022',d:''}],
lang:[{a:'English',b:'Native',c:'',d:''},{a:'French',b:'Professional',c:'',d:''}],pshape:'circle',psize:'130',
ref:[{a:'Available on request',b:'',c:'',d:''}]};
var LISTS={exp:['Work experience',['Job title','Company','Dates','Details (one bullet per line)']],edu:['Education',['Degree','School','Dates','Notes']],proj:['Projects',['Project','Link','Dates','Description']],cert:['Certifications',['Certificate','Issuer','Year','']],lang:['Languages',['Language','Level','','']],ref:['References',['Name','Contact','','']]};
function rvForm(){
 var h='<div class="row">'+tplBtns(R.tpl)+'</div><label class="f"><span>Accent colour</span><input type="color" id="rvColor" value="'+R.color+'"></label>';
 h+='<h3>Personal information</h3>'+fld('Full name','name',R.name)+fld('Job title','title',R.title)+fld('Email','email',R.email)+fld('Phone','phone',R.phone)+fld('Location','loc',R.loc)+fld('Website / LinkedIn','link',R.link);
 h+='<div class="sub-card"><b>Professional photo</b><p class="note">Use a recent head-and-shoulders photo with a plain background, good light and professional clothing. Photos are common on CVs in many countries, but not expected in others (for example the US and UK), so check what employers in your target country prefer.</p><div class="row"><label class="btn p">'+(R.photo?'Change photo':'Upload photo')+'<input type="file" id="rvPhoto" accept="image/jpeg,image/png,image/webp" hidden></label><button id="rvPhotoCrop"'+(CR.img?'':' disabled')+'>Adjust crop</button><button id="rvPhotoX">Remove</button></div><label class="f"><span>Photo shape</span><select data-k="pshape"><option value="circle"'+(R.pshape==='circle'?' selected':'')+'>Circle</option><option value="round"'+(R.pshape==='round'?' selected':'')+'>Rounded square</option><option value="portrait"'+(R.pshape==='portrait'?' selected':'')+'>Passport portrait (3:4)</option></select></label><label class="f"><span>Photo size</span><input type="range" data-k="psize" min="90" max="180" value="'+R.psize+'"></label></div>';
 h+='<h3>Professional summary</h3><label class="chk"><input type="checkbox" data-show="sum"'+(R.show.sum?' checked':'')+'> Show section</label>'+fld('Summary','sum',R.sum,'area');
 h+='<h3>Skills</h3><label class="chk"><input type="checkbox" data-show="skills"'+(R.show.skills?' checked':'')+'> Show section</label>'+fld('Skills (comma separated)','skills',R.skills);
 Object.keys(LISTS).forEach(function(k){var L=LISTS[k];h+='<h3>'+L[0]+'</h3><label class="chk"><input type="checkbox" data-show="'+k+'"'+(R.show[k]?' checked':'')+'> Show section</label>';
  R[k].forEach(function(x,i){h+='<div class="sub-card">';['a','b','c','d'].forEach(function(f,j){if(L[1][j])h+='<label class="f"><span>'+L[1][j]+'</span>'+(f==='d'?'<textarea rows="3" data-l="'+k+'" data-i="'+i+'" data-f="d">'+esc(x.d)+'</textarea>':'<input type="text" data-l="'+k+'" data-i="'+i+'" data-f="'+f+'" value="'+esc(x[f])+'">')+'</label>'});h+='<button data-rm="'+k+'|'+i+'">Remove</button></div>'});
  h+='<button data-add="'+k+'">+ Add</button>'});
 return h;
}
function bul(t){var ls=String(t).split('\n').filter(Boolean),b=ls.filter(function(l){return/^\s*[•\-*]/.test(l)});return b.length===ls.length?'<ul>'+ls.map(function(l){return'<li>'+esc(l.replace(/^\s*[•\-*]\s*/,''))+'</li>'}).join('')+'</ul>':'<p>'+esc(t)+'</p>'}
function items(k){return R[k].filter(function(x){return x.a||x.b}).map(function(x){return'<div class="it"><div class="ith"><b>'+esc(x.a)+'</b><span>'+esc(x.c)+'</span></div>'+(x.b?'<div class="its">'+esc(x.b)+'</div>':'')+(x.d?bul(x.d):'')+'</div>'}).join('')}
function sec(t,b){return b?'<section><h3>'+t+'</h3>'+b+'</section>':''}
function chips(s){return s.split(',').map(function(x){return x.trim()}).filter(Boolean).map(function(x){return'<span class="chip">'+esc(x)+'</span>'}).join('')}
function rvSheet(){
 var s=R.show,ph=R.photo?'<img class="ph" style="'+phStyle()+'" alt="Profile photo" src="'+R.photo+'">':'',
 contact=[R.email,R.phone,R.loc,R.link].filter(Boolean).map(function(x){return'<div class="ct">'+esc(x)+'</div>'}).join(''),
 lang=s.lang?sec('Languages',R.lang.filter(function(x){return x.a}).map(function(x){return'<div class="it">'+esc(x.a)+(x.b?' — '+esc(x.b):'')+'</div>'}).join('')):'',
 sk=s.skills?sec('Skills',chips(R.skills)):'',
 main=(s.sum?sec('Profile','<p>'+esc(R.sum)+'</p>'):'')+(s.exp?sec('Experience',items('exp')):'')+(s.edu?sec('Education',items('edu')):'')+(s.proj?sec('Projects',items('proj')):'')+(s.cert?sec('Certifications',items('cert')):'')+(s.ref?sec('References',items('ref')):'');
 if(R.tpl==='modern')return'<div class="sheet t-modern" style="--ac:'+R.color+'"><aside>'+ph+sec('Contact',contact)+sk+lang+'</aside><main><h1>'+esc(R.name)+'</h1><div class="sub">'+esc(R.title)+'</div>'+main+'</main></div>';
 var head=ph+'<h1>'+esc(R.name)+'</h1><div class="sub">'+esc(R.title)+'</div><div class="ct">'+[R.email,R.phone,R.loc,R.link].filter(Boolean).map(esc).join(' · ')+'</div>';
 return'<div class="sheet t-'+R.tpl+'" style="--ac:'+R.color+'"><div class="hd">'+head+'</div>'+main+sk+lang+'</div>';
}
function rvDraw(){$('rvWrap').innerHTML='<div class="scale">'+rvSheet()+'</div>';fit('rvWrap')}
function rvAll(){$('rvForm').innerHTML=rvForm();rvDraw()}
var rvF=$('rvForm');
rvF.addEventListener('input',function(e){var t=e.target;
 if(t.id==='rvColor'){R.color=t.value}
 else if(t.getAttribute('data-k')){R[t.getAttribute('data-k')]=t.value}
 else if(t.getAttribute('data-l')){R[t.getAttribute('data-l')][+t.getAttribute('data-i')][t.getAttribute('data-f')]=t.value}
 else if(t.getAttribute('data-show')){R.show[t.getAttribute('data-show')]=t.checked?1:0}
 rvDraw()});
rvF.addEventListener('click',function(e){var t=e.target;
 if(t.getAttribute('data-tpl')){R.tpl=t.getAttribute('data-tpl');rvAll()}
 else if(t.getAttribute('data-add')){R[t.getAttribute('data-add')].push({a:'',b:'',c:'',d:''});rvAll()}
 else if(t.getAttribute('data-rm')){var p=t.getAttribute('data-rm').split('|');R[p[0]].splice(+p[1],1);rvAll()}
 else if(t.id==='rvPhotoX'){R.photo='';rvAll()}else if(t.id==='rvPhotoCrop'&&CR.img){showCrop()}});
rvF.addEventListener('change',function(e){if(e.target.id==='rvPhoto'){var f=e.target.files[0];e.target.value='';if(f)openCrop(f)}});
$('rvPrint').onclick=function(){printSheet($('rvWrap').querySelector('.sheet'));say('In the print dialog choose “Save as PDF” to download an A4 PDF.')};
$('rvClear').onclick=function(){R.name=R.title=R.email=R.phone=R.loc=R.link=R.sum=R.skills='';['exp','edu','proj','cert','lang','ref'].forEach(function(k){R[k]=[{a:'',b:'',c:'',d:''}]});R.photo='';rvAll()};

/* photo crop */
var CR={img:null};
function phStyle(){var s=+R.psize||130,p=R.pshape==='portrait';return'width:'+s+'px;height:'+(p?Math.round(s*1.25):s)+'px;border-radius:'+(R.pshape==='circle'?'50%':R.pshape==='round'?'18px':'6px')}
function openCrop(f){if(!/^image\/(jpeg|png|webp)$/.test(f.type)){say('Use a JPG, PNG or WebP photo.','err');return}if(f.size>15*1048576){say('Photo is larger than 15 MB.','err');return}
 loadImg(f).then(function(i){CR.img=i;showCrop()},function(e){say(e.message,'err')})}
function showCrop(){var p=R.pshape==='portrait',c=$('crC');c.width=p?240:280;c.height=p?320:280;c.style.borderRadius=R.pshape==='circle'?'50%':'8px';$('crZ').value=1;$('crX').value=0;$('crY').value=0;$('crop').style.display='flex';crDraw()}
function crDraw(){var c=$('crC'),x=c.getContext('2d'),W=c.width,H=c.height,i=CR.img,z=+$('crZ').value,k=Math.max(W/i.naturalWidth,H/i.naturalHeight)*z,w=i.naturalWidth*k,h=i.naturalHeight*k,
 dx=(W-w)/2+(+$('crX').value)*(Math.max(0,w-W)/2)/100,dy=(H-h)/2+(+$('crY').value)*(Math.max(0,h-H)/2)/100;x.fillStyle='#fff';x.fillRect(0,0,W,H);x.drawImage(i,dx,dy,w,h)}
['crZ','crX','crY'].forEach(function(id){$(id).oninput=crDraw});
$('crOk').onclick=function(){var c=$('crC'),o=document.createElement('canvas'),k=400/Math.min(c.width,c.height);o.width=Math.round(c.width*k);o.height=Math.round(c.height*k);o.getContext('2d').drawImage(c,0,0,o.width,o.height);R.photo=o.toDataURL('image/jpeg',.92);$('crop').style.display='none';rvAll()};
$('crNo').onclick=function(){$('crop').style.display='none'};

/* ---------- Cover letter ---------- */
var C={name:'Alex Morgan',email:'alex@example.com',phone:'+44 20 7946 0000',loc:'London, UK',date:new Date().toISOString().slice(0,10),mname:'Hiring Manager',mtitle:'',company:'Northwind Labs',caddr:'',job:'Product Designer',jd:'',body:'',color:'#1d4ed8',tpl:'modern'};
function clDraft(){return'Dear '+(C.mname||'Hiring Manager')+',\n\nI am excited to apply for the '+(C.job||'open')+' position at '+(C.company||'your company')+'. My background and the experience in my resume match what the role requires, and I would welcome the chance to contribute to your team.\n\nIn my previous roles I have delivered results by combining careful planning, clear communication and attention to detail. '+(C.jd?'I noted that the role asks for the following, and I would be glad to discuss how my experience applies:\n'+C.jd.split('\n').slice(0,3).join('\n')+'\n\n':'')+'I would be happy to discuss my application in more detail. Thank you for your time and consideration.\n\nSincerely,\n'+C.name}
C.body=clDraft();
function clForm(){return'<div class="row">'+tplBtns(C.tpl)+'</div><label class="f"><span>Accent colour</span><input type="color" id="clColor" value="'+C.color+'"></label><h3>Your details</h3>'+fld('Full name','name',C.name)+fld('Email','email',C.email)+fld('Phone','phone',C.phone)+fld('Location','loc',C.loc)+fld('Date','date',C.date)+'<h3>Company</h3>'+fld('Hiring manager','mname',C.mname)+fld('Manager title','mtitle',C.mtitle)+fld('Company','company',C.company)+fld('Company address','caddr',C.caddr)+fld('Job title','job',C.job)+fld('Job description (optional)','jd',C.jd,'area')+'<div class="row"><button id="clDraft">Draft from template</button><button id="clAi">Draft with AI</button></div><p class="note">AI drafting needs the Doxlio server with an API key. Without it you will see a clear message.</p><h3>Letter</h3><label class="f"><span>Editable letter text</span><textarea rows="14" id="clBody">'+esc(C.body)+'</textarea></label>'}
function clSheet(){var hd=[C.email,C.phone,C.loc].filter(Boolean).map(esc).join(' · '),rc=[C.mname,C.mtitle,C.company,C.caddr].filter(Boolean).map(esc).join('<br>'),b=esc(C.body).replace(/\n/g,'<br>');
 var head=R.tpl&&0;return'<div class="sheet t-'+C.tpl+' lt" style="--ac:'+C.color+(C.tpl==='classic'?';font-family:Georgia,serif':'')+'"><div'+(C.tpl==='modern'?' style="border-left:6px solid '+C.color+';padding-left:14px"':C.tpl==='classic'?' style="text-align:center;border-bottom:2px solid #222;padding-bottom:10px"':'')+'><h1'+(C.tpl==='modern'?' style="color:'+C.color+'"':'')+'>'+esc(C.name)+'</h1><div class="ct">'+hd+'</div></div><div class="sp"></div><div class="sp"></div><div>'+esc(C.date)+'</div><div class="sp"></div><div>'+rc+'</div><div class="sp"></div><div class="sp"></div><div>'+b+'</div></div>'}
function clDraw(){$('clWrap').innerHTML='<div class="scale">'+clSheet()+'</div>';fit('clWrap')}
function clAll(){$('clForm').innerHTML=clForm();clDraw()}
$('clForm').addEventListener('input',function(e){var t=e.target;if(t.id==='clColor')C.color=t.value;else if(t.id==='clBody')C.body=t.value;else if(t.getAttribute('data-k'))C[t.getAttribute('data-k')]=t.value;clDraw()});
$('clForm').addEventListener('click',function(e){var t=e.target;if(t.getAttribute('data-tpl')){C.tpl=t.getAttribute('data-tpl');clAll()}else if(t.id==='clDraft'){C.body=clDraft();clAll()}});
$('clPrint').onclick=function(){printSheet($('clWrap').querySelector('.sheet'));say('In the print dialog choose “Save as PDF” to download an A4 PDF.')};


/* ---------- AI tools (need server) ---------- */
var AIT={'ai-summarize':['summarize','AI Document Summarizer','Paste the text of your document.','',''],'ai-keypoints':['keypoints','AI Key Points Extractor','Paste the text.','',''],'ai-notes':['notes','AI Notes Generator','Paste the text to turn into notes.','',''],
'ai-rewrite':['rewrite','AI Text Rewriter','Paste the text to rewrite.','','tone'],'ai-grammar':['grammar','AI Grammar Checker','Paste the text to check.','',''],'ai-translate':['translate','AI Document Translator','Paste the text to translate.','','lang'],
'ai-resume':['resume','AI Resume Analyzer','Paste your resume text.','Job description (optional)',''],'ai-jd':['jd','AI Job Description Analyzer','Paste the job description.','Your resume (optional)',''],
'ai-bio':['bio','AI Professional Bio Generator','Write your role, achievements and facts.','',''],'ai-letter':['letter','AI Letter Generator','Describe the letter: type, recipient, key points.','','']};
async function aiCall(tool,text,extra,option){
 if(!API.ai)throw new Error('AI is not available here. It needs the Doxlio server with an API key (not static hosting). See the README.');
 var r;try{r=await fetch('/api/ai',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({tool:tool,text:text,extra:extra,option:option})})}catch(e){throw new Error('Could not reach the Doxlio server.')}
 var j={};try{j=await r.json()}catch(_){}if(!r.ok)throw new Error(j.error||'AI request failed.');return j.text}
function drawAi(id){var d=AIT[id];$('aiH').textContent=d[1];$('aiIn').placeholder=d[2];$('aiIn').value='';$('aiOut').value='';
 $('aiX').hidden=!d[3];$('aiXl').textContent=d[3];$('aiX2').value='';
 $('aiO').hidden=!d[4];$('aiO').innerHTML=d[4]==='tone'?'<select id="aiTone" aria-label="Tone"><option>professional</option><option>friendly</option><option>formal</option><option>concise</option><option>persuasive</option></select>':'<input type="text" id="aiLang" value="English" aria-label="Target language">';
 $('aiRun').onclick=async function(){var t=$('aiIn').value.trim();if(!t){say('Paste some text first.','err');return}
  var b=this;b.disabled=true;say('Working…');try{var opt=d[4]==='tone'?$('aiTone').value:d[4]==='lang'?$('aiLang').value:'';
   $('aiOut').value=await aiCall(d[0],t,$('aiX2').value,opt);say('Done. Review the result before using it.','ok')}catch(e){say(e.message,'err')}b.disabled=false};
 $('aiFile').onchange=function(){var f=this.files[0];this.value='';if(!f)return;if(!/\.txt$|\.md$/i.test(f.name)&&f.type!=='text/plain'){say('Only .txt files can be loaded. Paste other text.','err');return}if(f.size>1048576){say('Text file is larger than 1 MB.','err');return}var fr=new FileReader();fr.onload=function(){$('aiIn').value=String(fr.result).slice(0,20000)};fr.readAsText(f)};
 $('aiCopy').onclick=function(){var t=$('aiOut').value;if(t&&navigator.clipboard)navigator.clipboard.writeText(t).then(function(){say('Copied.','ok')})}}
$('clForm').addEventListener('click',async function(e){if(e.target.id!=='clAi')return;var b=e.target;b.disabled=true;say('Writing with AI…');
 try{C.body=await aiCall('cover','Applicant: '+C.name+'\nJob title: '+C.job+'\nCompany: '+C.company+'\nHiring manager: '+C.mname+'\nJob description: '+(C.jd||'not provided'),'','');say('Draft ready. Edit it before sending.','ok');clAll()}catch(er){say(er.message,'err');b.disabled=false}});

/* ---------- Text tools ---------- */
function drawText(r){var wc=r==='wordcount';$('wcP').hidden=!wc;$('csP').hidden=wc;$('txH').textContent=wc?'🔢 Word & Character Counter':'🔠 Text Case Converter';$('txD').textContent=wc?'Paste or type text to count words, characters, sentences and paragraphs, and see the reading time. Free to use — no sign-up required. Your text never leaves your device.':'Change the case of your text in one click. Free to use — no sign-up required. Your text never leaves your device.';statsDraw()}
function statsDraw(){var t=$('txIn').value,w=(t.trim().match(/\S+/g)||[]).length,ch=t.length,nsp=t.replace(/\s/g,'').length,se=(t.match(/[^.!?۔؟]+[.!?۔؟]+/g)||[]).length||(t.trim()?1:0),pa=t.split(/\n\s*\n/).filter(function(x){return x.trim()}).length;
 $('wcS').innerHTML=[['Words',w],['Characters',ch],['No spaces',nsp],['Sentences',se],['Paragraphs',pa],['Reading time',Math.max(w?1:0,Math.ceil(w/200))+' min'],['Speaking time',Math.max(w?1:0,Math.ceil(w/130))+' min']].map(function(x){return'<div class="fl"><span>'+x[0]+'</span><b>'+x[1]+'</b></div>'}).join('')}
$('txIn').oninput=statsDraw;
function cap(s){return s.toLowerCase().replace(/(^|[\s\-(\[“"'])([a-zà-ÿ])/g,function(m,p,c){return p+c.toUpperCase()})}
$('csP').onclick=function(e){var k=e.target.getAttribute('data-c');if(!k)return;var t=$('txIn').value;
 var f={up:function(s){return s.toUpperCase()},low:function(s){return s.toLowerCase()},title:cap,sent:function(s){return s.toLowerCase().replace(/(^\s*|[.!?]\s+|\n\s*)([a-zà-ÿ])/g,function(m,p,c){return p+c.toUpperCase()})},trim:function(s){return s.replace(/[ \t]+/g,' ').replace(/\n{3,}/g,'\n\n').trim()}}[k];
 if(f){$('txIn').value=f(t);statsDraw()}else if(k==='copy'){if(navigator.clipboard)navigator.clipboard.writeText(t).then(function(){say('Copied.','ok')})}else if(k==='clear'){$('txIn').value='';statsDraw()}};

/* ---------- Guides ---------- */
var ART=[['how-to-scan-a-document-with-your-phone','How to scan a document with your phone','Get a clean, straight scan with your phone camera and save it as a PDF.','scanner'],
['how-to-merge-pdf-files','How to merge PDF files for free','Combine several PDFs into one file in a few steps, without installing software.','pdf-merge'],
['how-to-convert-images-to-pdf','How to convert JPG and PNG images to PDF','Turn photos and screenshots into a single, tidy PDF.','img-pdf'],
['how-to-extract-text-from-an-image','How to extract text from an image (OCR)','Copy text from photos, screenshots and scanned pages, and what affects accuracy.','ocr'],
['how-to-write-a-professional-resume','How to write a professional resume or CV','Structure, wording and photo advice for a resume that gets read.','resume'],
['how-to-write-a-cover-letter','How to write a cover letter that works','A simple structure for a short, specific cover letter.','cover'],
['how-to-split-and-extract-pdf-pages','How to split a PDF and extract pages','Pull out just the pages you need or divide a large PDF.','pdf-split'],
['how-to-compress-images','How to compress images without ruining them','Make image files smaller for email, forms and websites.','img-compress']];
var ARTB={
'how-to-scan-a-document-with-your-phone':{i:'A phone camera can replace a flatbed scanner if you take the photo carefully and clean it up afterwards. These steps give readable scans for forms, receipts and contracts.',s:[['Prepare the page','Put the document on a flat, dark surface so its edges stand out. Remove creases where you can, and avoid shadows from your hand or phone.'],['Take the photo','Hold the phone parallel to the page so it fills most of the frame. Use bright, even light, and turn on the flash only if it does not create glare.'],['Crop and straighten','A good scanner finds the four corners of the page and corrects the perspective so the page looks rectangular. Check the corners and drag any that are off.'],['Choose a filter','Document or Black &amp; White filters make text sharp for printing. Colour filters suit photos, stamps and signatures. Brightness and contrast can rescue dim photos.'],['Save as PDF','Add all pages, put them in order, then export one PDF. Name it clearly, and check that the text is readable before you send it.']]},
'how-to-merge-pdf-files':{i:'Merging PDFs is useful for applications, invoices and reports that must be sent as one file. You can do it in your browser, so the files stay on your device.',s:[['Collect your files','Gather the PDFs and give them names that show the order you want, such as 01-cover and 02-report.'],['Add them to the merge tool','Select all files. Use the arrow buttons to change the order before you merge, because the result follows that list.'],['Merge and check','Download the merged PDF and scroll through it. Make sure every page is present, in order and the right way up.'],['Fix problems','If a page is sideways, rotate it. If a page is missing or unwanted, extract or delete pages and merge again. Password-protected files must be unlocked by their owner first.']]},
'how-to-convert-images-to-pdf':{i:'Many forms accept only PDF, while your documents may be photos or screenshots. Combining images into one PDF is quick.',s:[['Pick the right images','JPG, PNG and WebP images work. Use clear pictures; if they are photos of paper, scan them with perspective correction first.'],['Order the pages','Put the images in reading order. Each image becomes one page.'],['Choose a page size','A4 fits images onto standard pages with margins. Matching the image size keeps every pixel, which suits screenshots and drawings.'],['Download and review','Open the PDF and check orientation, order and readability before sending it.']]},
'how-to-extract-text-from-an-image':{i:'OCR (optical character recognition) reads letters in a picture and turns them into text you can copy and edit. It is useful for scanned pages, screenshots and photos of printed documents.',s:[['What affects accuracy','Sharp focus, good lighting, straight text and high contrast matter most. Handwriting, decorative fonts and very small text are much harder and will contain mistakes.'],['Choose the correct language','Pick the language of the text before you start. Urdu and Arabic are read right to left, so use the matching language setting.'],['Run OCR and proofread','Always read the result. Numbers, names and punctuation are the most common errors. Edit the text, then copy it or save it as a TXT or Word-compatible file.'],['For scanned PDFs','Render each page as an image, run OCR on every page, and combine the text. PDFs that already contain real text do not need OCR.']]},
'how-to-write-a-professional-resume':{i:'A resume has a few seconds to show that you fit the job. Clear structure and specific results matter more than design tricks.',s:[['Keep it focused','One or two pages. Put the most relevant experience first, and remove old or unrelated jobs.'],['Write results, not duties','Use short bullets that start with an action and show an outcome, such as “Reduced support response time by 30%”. Use numbers only when they are true.'],['Use a clean layout','Readable fonts, consistent dates and clear headings help both people and applicant tracking systems. Avoid text inside images and complex columns if the employer uses an online form.'],['Should you add a photo?','Photos are common on CVs in many countries, and not expected in others, such as the US and UK, where they can be discouraged. If you add one, use a recent head-and-shoulders photo, plain background, good light and professional clothing.'],['Proofread','Check spelling, dates and contact details, then save as PDF so the layout stays fixed.']]},
'how-to-write-a-cover-letter':{i:'A cover letter explains why you are a good match in your own words. Keep it short and specific to the job.',s:[['Address a real person','Use the hiring manager’s name when you can find it. Otherwise “Dear Hiring Manager” is fine.'],['Open with the role and your strongest reason','Name the job and give one sentence about why you fit it.'],['Give two or three proofs','Pick achievements that match the job description and explain the result. Do not repeat your whole resume.'],['Close politely','Say you would welcome an interview, thank the reader and sign off. Aim for 250–350 words and one page, and proofread before sending.']]},
'how-to-split-and-extract-pdf-pages':{i:'Sometimes you only need a few pages from a large PDF, or you want to cut it into smaller files.',s:[['Know your page numbers','Open the PDF in a viewer and note the pages you want, for example 3-5 and 9.'],['Extract or split','Use extract to keep only the pages you choose in one new file. Use split to produce separate files for each range you list.'],['Check the result','Open every new file to confirm the right pages are included.']]},
'how-to-compress-images':{i:'Large images slow websites and exceed upload limits. You can usually cut the size a lot with little visible loss.',s:[['Resize first','Photos from phones are often 4000 pixels wide. If it will be shown at 1200 pixels, resizing saves more space than anything else.'],['Pick the right format','JPG suits photos. PNG suits screenshots and logos with sharp edges. WebP is often smaller than both.'],['Lower the quality a little','Quality around 70–85 is usually a good balance for JPG. Compare the result with the original before you replace it.']]}};
function blogHtml(r){
 function cards(ex){return'<div class="grid">'+ART.filter(function(x){return x[0]!==ex}).map(function(x){return'<a class="tc" href="#/blog-'+x[0]+'"><b>'+esc(x[1])+'</b><small>'+esc(x[2])+'</small></a>'}).join('')+'</div>'}
 if(r==='blog')return'<h1>Guides</h1><p>Practical how-to articles for scanning, PDFs, images and job documents. Free to use — no sign-up required.</p>'+cards('');
 var s=r.slice(5),m=ART.filter(function(x){return x[0]===s})[0],b=ARTB[s],tl=T.filter(function(t){return t[0]===m[3]})[0];
 return'<article class="card"><h1>'+esc(m[1])+'</h1><p>'+b.i+'</p>'+b.s.map(function(x){return'<h2>'+x[0]+'</h2><p>'+x[1]+'</p>'}).join('')+(tl?'<p><a class="btn p" href="#/'+tl[0]+'">Try the free '+esc(tl[1])+' tool</a></p>':'')+'</article><h2>More guides</h2>'+cards(s)}
function drawGuides(){$('homeGuides').innerHTML='<h2>Guides</h2><div class="grid">'+ART.slice(0,4).map(function(x){return'<a class="tc" href="#/blog-'+x[0]+'"><b>'+esc(x[1])+'</b><small>'+esc(x[2])+'</small></a>'}).join('')+'</div><p><a href="#/blog">See all guides →</a></p>'}
ART.forEach(function(x){TITLE['blog-'+x[0]]=x[1]+' – Doxlio'});


/* ---------- Contact (Formspree) ---------- */
var CFG=window.DX_CONFIG||{},EP=/^https:\/\/formspree\.io\/f\/[A-Za-z0-9]+$/.test(CFG.formspreeEndpoint||'')?CFG.formspreeEndpoint:'';
var EMAILRE=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,ctBusy=false;
function clean(s,max){return String(s==null?'':s).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g,'').trim().slice(0,max)}
function ctValidate(v){var e={};
 if(!v.name)e.name='Please enter your full name.';else if(v.name.length<2)e.name='Your name looks too short.';
 if(!v.email)e.email='Please enter your email address.';else if(!EMAILRE.test(v.email))e.email='Please enter a valid email address, for example name@example.com.';
 if(!v.subject)e.subject='Please choose a subject.';
 if(!v.message)e.message='Please write a message.';else if(v.message.length<10)e.message='Your message is too short. Please write at least 10 characters.';
 return e}
async function ctSend(v,hp){
 if(!EP)return{ok:false,error:'The contact form is not set up yet. The site owner needs to add a Formspree endpoint in config.js.'};
 var ctl=typeof AbortController!=='undefined'?new AbortController():null,timer=ctl?setTimeout(function(){ctl.abort()},20000):0;
 try{
  var fd=new FormData();fd.append('name',v.name);fd.append('email',v.email);fd.append('subject',v.subject);fd.append('message',v.message);fd.append('_subject','Doxlio contact: '+v.subject);fd.append('_gotcha',hp||'');
  var r=await fetch(EP,{method:'POST',body:fd,headers:{'Accept':'application/json'},signal:ctl?ctl.signal:undefined}),j={};try{j=await r.json()}catch(_){}
  if(r.ok)return{ok:true};
  var m=j&&j.errors&&j.errors.length?j.errors.map(function(x){return x.message}).join(' '):'';
  return{ok:false,error:m||'The message could not be sent (error '+r.status+'). Please try again in a moment.'}
 }catch(e){return{ok:false,error:e&&e.name==='AbortError'?'The request took too long. Check your connection and try again.':'Could not reach the mail service. Check your internet connection and try again.'}}
 finally{clearTimeout(timer)}}
function ctShow(errs){['name','email','subject','message'].forEach(function(k){var el=$('e'+k.charAt(0).toUpperCase()+k.slice(1)),inp=$('ct'+k.charAt(0).toUpperCase()+k.slice(1));el.textContent=errs[k]||'';inp.setAttribute('aria-invalid',errs[k]?'true':'false')})}
function ctInit(){
 if(!EP){$('ctNote').innerHTML='<div class="warn"><b>Contact form not configured yet.</b> The site owner must add a Formspree endpoint to <code>config.js</code>. Until then messages cannot be sent.'+(CFG.contactEmail?' You can email <a href="mailto:'+esc(CFG.contactEmail)+'">'+esc(CFG.contactEmail)+'</a> instead.':'')+'</div>';$('ctBtn').disabled=true}
 else{$('ctNote').innerHTML='';$('ctBtn').disabled=false}
 $('ctMail').innerHTML=CFG.contactEmail?'Prefer email? <a href="mailto:'+esc(CFG.contactEmail)+'">'+esc(CFG.contactEmail)+'</a>':''}
$('ctForm').addEventListener('submit',async function(e){
 e.preventDefault();if(ctBusy||!EP)return;
 var v={name:clean($('ctName').value,100),email:clean($('ctEmail').value,254),subject:clean($('ctSubject').value,80),message:clean($('ctMessage').value,5000)},er=ctValidate(v);ctShow(er);
 var M=$('ctMsg');M.className='';M.textContent='';
 if(Object.keys(er).length){M.className='err';M.textContent='Please fix the highlighted fields.';var f=['name','email','subject','message'].filter(function(k){return er[k]})[0];$('ct'+f.charAt(0).toUpperCase()+f.slice(1)).focus();return}
 ctBusy=true;var b=$('ctBtn');b.disabled=true;b.textContent='Sending…';M.textContent='Sending your message…';
 var res=await ctSend(v,$('ctForm').elements['_gotcha'].value);
 ctBusy=false;b.disabled=false;b.textContent='Submit Message';
 if(res.ok){M.className='ok';M.textContent='Thank you! Your message has been sent successfully. We will get back to you soon.';$('ctForm').reset();ctShow({})}
 else{M.className='err';M.textContent=res.error}});
window.__ct={validate:ctValidate,send:ctSend,endpoint:EP};


/* ---------- Edit text in image (in-place, CamScanner style) ---------- */
function isay(t,c){say(t,c);var s=$('iteSt');if(s){s.textContent=t||'';s.className='note '+(c||'')}}
var IT={orig:null,work:null,hist:[],L:{line:[],word:[]},mode:'line',sel:null,rtl:false,prev:null,drag:null,name:'image',zoom:1,dw:1};
var FONTS=[];(function(){var mc=document.createElement('canvas').getContext('2d');function w(fam){mc.font='100px '+fam;return mc.measureText('mmmmmmmmmmlliWWgq').width}
 function has(n){var p=w('"'+n+'", monospace'),q=w('"'+n+'", serif');return Math.abs(p-q)<.01}
 [['Arial','sans-serif'],['Helvetica','sans-serif'],['Roboto','sans-serif'],['Noto Sans','sans-serif'],['Open Sans','sans-serif'],['Lato','sans-serif'],['Montserrat','sans-serif'],['Segoe UI','sans-serif'],['Calibri','sans-serif'],['Verdana','sans-serif'],['Tahoma','sans-serif'],['Trebuchet MS','sans-serif'],['Times New Roman','serif'],['Georgia','serif'],['Palatino Linotype','serif'],['Noto Serif','serif'],['Courier New','monospace'],['Consolas','monospace'],['Impact','sans-serif']].forEach(function(n){try{if(has(n[0]))FONTS.push([n[0],'"'+n[0]+'", '+n[1],n[1]==='serif'?'serif':n[1]==='monospace'?'mono':'sans',null])}catch(e){}});
 FONTS.push(['Default sans-serif','sans-serif','sans',null],['Default serif','serif','serif',null],['Default monospace','monospace','mono',null],['System UI','system-ui, sans-serif','sans',null])})();
/* extra fonts, downloaded only when needed (jsDelivr @fontsource): [label,id,subset,weights,class,group,core] */
var WEBF=[
['Roboto','roboto','latin',[400,700],'sans','Sans-serif',1],['Open Sans','open-sans','latin',[400,700],'sans','Sans-serif',1],['Lato','lato','latin',[400,700],'sans','Sans-serif',1],['Montserrat','montserrat','latin',[400,700],'sans','Sans-serif',1],['Poppins','poppins','latin',[400,700],'sans','Sans-serif',1],['Nunito','nunito','latin',[400,700],'sans','Sans-serif',1],['Inter','inter','latin',[400,700],'sans','Sans-serif',0],['Raleway','raleway','latin',[400,700],'sans','Sans-serif',0],['Oswald','oswald','latin',[400,700],'sans','Sans-serif',0],['Ubuntu','ubuntu','latin',[400,700],'sans','Sans-serif',0],['Noto Sans','noto-sans','latin',[400,700],'sans','Sans-serif',0],['Source Sans 3','source-sans-3','latin',[400,700],'sans','Sans-serif',0],['Work Sans','work-sans','latin',[400,700],'sans','Sans-serif',0],['Rubik','rubik','latin',[400,700],'sans','Sans-serif',0],['PT Sans','pt-sans','latin',[400,700],'sans','Sans-serif',0],['Mulish','mulish','latin',[400,700],'sans','Sans-serif',0],['Fira Sans','fira-sans','latin',[400,700],'sans','Sans-serif',0],['Quicksand','quicksand','latin',[400,700],'sans','Sans-serif',0],['DM Sans','dm-sans','latin',[400,700],'sans','Sans-serif',0],['Barlow','barlow','latin',[400,700],'sans','Sans-serif',0],['Karla','karla','latin',[400,700],'sans','Sans-serif',0],
['Playfair Display','playfair-display','latin',[400,700],'serif','Serif',1],['Merriweather','merriweather','latin',[400,700],'serif','Serif',1],['Lora','lora','latin',[400,700],'serif','Serif',1],['PT Serif','pt-serif','latin',[400,700],'serif','Serif',0],['Libre Baskerville','libre-baskerville','latin',[400,700],'serif','Serif',0],['Crimson Text','crimson-text','latin',[400,700],'serif','Serif',0],['EB Garamond','eb-garamond','latin',[400,700],'serif','Serif',0],
['Roboto Mono','roboto-mono','latin',[400,700],'mono','Monospace',1],['Source Code Pro','source-code-pro','latin',[400,700],'mono','Monospace',0],
['Bebas Neue','bebas-neue','latin',[400],'sans','Display / bold',1],['Anton','anton','latin',[400],'sans','Display / bold',1],['Archivo Black','archivo-black','latin',[400],'sans','Display / bold',0],['Abril Fatface','abril-fatface','latin',[400],'serif','Display / bold',0],['Righteous','righteous','latin',[400],'sans','Display / bold',0],
['Dancing Script','dancing-script','latin',[400,700],'sans','Script / handwriting',1],['Pacifico','pacifico','latin',[400],'sans','Script / handwriting',1],['Lobster','lobster','latin',[400],'sans','Script / handwriting',1],['Caveat','caveat','latin',[400,700],'sans','Script / handwriting',1],['Great Vibes','great-vibes','latin',[400],'sans','Script / handwriting',0],['Satisfy','satisfy','latin',[400],'sans','Script / handwriting',0],['Kaushan Script','kaushan-script','latin',[400],'sans','Script / handwriting',0],['Sacramento','sacramento','latin',[400],'sans','Script / handwriting',0],['Allura','allura','latin',[400],'sans','Script / handwriting',0],['Yellowtail','yellowtail','latin',[400],'sans','Script / handwriting',0],['Shadows Into Light','shadows-into-light','latin',[400],'sans','Script / handwriting',0],['Indie Flower','indie-flower','latin',[400],'sans','Script / handwriting',0],['Permanent Marker','permanent-marker','latin',[400],'sans','Script / handwriting',0],['Courgette','courgette','latin',[400],'sans','Script / handwriting',0],['Parisienne','parisienne','latin',[400],'sans','Script / handwriting',0],['Cookie','cookie','latin',[400],'sans','Script / handwriting',0],['Handlee','handlee','latin',[400],'sans','Script / handwriting',0],['Amatic SC','amatic-sc','latin',[400,700],'sans','Script / handwriting',0],
['Noto Naskh Arabic','noto-naskh-arabic','arabic',[400,700],'serif','Urdu / Arabic',0],['Noto Nastaliq Urdu','noto-nastaliq-urdu','arabic',[400,700],'serif','Urdu / Arabic',0],['Amiri','amiri','arabic',[400,700],'serif','Urdu / Arabic',0],['Cairo','cairo','arabic',[400,700],'sans','Urdu / Arabic',0],['Tajawal','tajawal','arabic',[400,700],'sans','Urdu / Arabic',0],['Lateef','lateef','arabic',[400],'serif','Urdu / Arabic',0],
['Noto Sans Devanagari','noto-sans-devanagari','devanagari',[400,700],'sans','Hindi',0],['Hind','hind','devanagari',[400,700],'sans','Hindi',0],['Mukta','mukta','devanagari',[400,700],'sans','Hindi',0]];
WEBF.forEach(function(f){var g=f[5]==='Script / handwriting'?'cursive':f[4]==='serif'?'serif':f[4]==='mono'?'monospace':'sans-serif';FONTS.push([f[0],'"'+f[0]+'", '+g,f[4],{id:f[1],subset:f[2],weights:f[3],group:f[5],core:f[6],loaded:false,failed:false,p:null}])});
var mctx=document.createElement('canvas').getContext('2d');
function iteFontOpts(){var groups={},order=[];FONTS.forEach(function(f,i){var g=f[3]?f[3].group:'On this device';if(!groups[g]){groups[g]=[];order.push(g)}groups[g].push('<option value="'+i+'">'+esc(f[0])+(f[3]&&!f[3].loaded?' ↓':'')+'</option>')});
 var cur=$('iteFont').value;$('iteFont').innerHTML=order.map(function(g){return'<optgroup label="'+esc(g)+'">'+groups[g].join('')+'</optgroup>'}).join('');if(cur)$('iteFont').value=cur}
iteFontOpts();$('iteLang').innerHTML=LANGS.map(function(l){return'<option value="'+l[0]+'">'+l[1]+'</option>'}).join('');
function iteMeas(t,fam,b,i,s){mctx.font=(i?'italic ':'')+(b?'bold ':'')+s+'px '+fam;var m=mctx.measureText(t);return{w:m.width,a:m.actualBoundingBoxAscent||s*.75,d:m.actualBoundingBoxDescent||0}}
function hex2rgb(h){var m=/^#?([0-9a-f]{6})$/i.exec(h||'');if(!m)return[0,0,0];var n=parseInt(m[1],16);return[n>>16&255,n>>8&255,n&255]}
function rgb2hex(c){return'#'+c.map(function(v){v=Math.max(0,Math.min(255,Math.round(v)));return(v<16?'0':'')+v.toString(16)}).join('')}
function iteCopy(c){var o=document.createElement('canvas');o.width=c.width;o.height=c.height;o.getContext('2d',{willReadFrequently:true}).drawImage(c,0,0);return o}
/* CSS pixels per image pixel (the canvas is scaled by CSS, so measure it) */
function iteS(){var r=$('iteCv').getBoundingClientRect();return IT.work&&r.width?r.width/IT.work.width:1}
function iteLayout(){if(!IT.work)return;var wd=Math.min(IT.work.width,2000);IT.dw=wd/IT.work.width;var hd=Math.max(1,Math.round(IT.work.height*IT.dw));[$('iteCv'),$('iteOv')].forEach(function(c){c.width=wd;c.height=hd});$('iteStage').style.width=(IT.zoom*100)+'%'}
function iteBgCss(p){var sel=IT.sel;if(p.bgMode==='pick')return p.bg;var g=sel.bgs||(sel.bgs=iteBgSample(sel.b,p.ep));return rgb2hex([0,1,2].map(function(c){return(g.T[c]+g.B[c]+g.L[c]+g.R[c])/4}))}
/* in-place editor: an input drawn exactly over the selected text, styled like it */
function iteEd(){var inp=$('iteInline'),bar=$('iteBar'),sel=IT.sel;if(!sel){inp.hidden=true;bar.hidden=true;return}
 var b=sel.b,s=iteS(),p=iteP(),fam=FONTS[p.fi]?FONTS[p.fi][1]:FONTS[0][1],pad=4,sw=$('iteStage').clientWidth||$('iteCv').clientWidth;
 inp.hidden=!!$('itePanel').open;bar.hidden=false;
 var tw=iteMeas(inp.value||' ',fam,p.bold,p.italic,p.size).w*s;
 inp.style.left=(b.x0*s-pad)+'px';inp.style.top=(b.y0*s-pad)+'px';inp.style.height=((b.y1-b.y0)*s+2*pad)+'px';
 inp.style.width=Math.max((b.x1-b.x0)*s+2*pad,tw+2*pad+14)+'px';
 inp.style.font=(p.italic?'italic ':'')+(p.bold?'bold ':'')+Math.max(10,p.size*s)+'px '+fam;inp.style.color=p.color;inp.style.background=iteBgCss(p);inp.style.direction=IT.rtl?'rtl':'ltr';
 var bw=bar.offsetWidth||190,top=b.y0*s-pad-46;if(top<0)top=b.y1*s+pad+6;
 bar.style.left=Math.max(0,Math.min(b.x0*s-pad,sw-bw))+'px';bar.style.top=top+'px'}
function iteDraw(prev){if(!IT.work)return;var cv=$('iteCv'),x=cv.getContext('2d'),d=IT.dw;x.drawImage(IT.work,0,0,cv.width,cv.height);if(prev)x.drawImage(prev.cv,prev.x*d,prev.y*d,prev.w*d,prev.h*d);
 var ov=$('iteOv'),o=ov.getContext('2d'),rw=cv.getBoundingClientRect().width||cv.width,k=cv.width/rw;o.clearRect(0,0,ov.width,ov.height);
 if(IT.mode!=='manual')IT.L[IT.mode].forEach(function(it){var b=it.b,on=IT.sel===it;o.lineWidth=(on?2.5:1.2)*k;o.strokeStyle=on?'#5b21f5':'rgba(29,78,216,.45)';if(on){o.fillStyle='rgba(91,33,245,.12)';o.fillRect(b.x0*d,b.y0*d,(b.x1-b.x0)*d,(b.y1-b.y0)*d)}o.strokeRect(b.x0*d,b.y0*d,(b.x1-b.x0)*d,(b.y1-b.y0)*d)});
 else{var r=IT.drag||(IT.sel&&IT.sel.manual?{x:IT.sel.b.x0,y:IT.sel.b.y0,x2:IT.sel.b.x1,y2:IT.sel.b.y1}:null);if(r){o.strokeStyle='#5b21f5';o.lineWidth=2.5*k;o.setLineDash([6*k,4*k]);o.strokeRect(Math.min(r.x,r.x2)*d,Math.min(r.y,r.y2)*d,Math.abs(r.x2-r.x)*d,Math.abs(r.y2-r.y)*d);o.setLineDash([])}}
 iteEd()}
function iteShow(){if(IT.work){iteLayout();iteDraw(IT.prev)}}
window.addEventListener('resize',function(){if(!$('v-ite').hidden)iteShow()});
$('iteFile').onchange=async function(){var f=this.files[0];this.value='';if(!f)return;
 if(!/^image\/(jpeg|png|webp)$/.test(f.type)){isay('Use a JPG, PNG or WebP image.','err');return}if(f.size>25*1048576){isay('Image is larger than 25 MB.','err');return}
 try{var b=window.createImageBitmap?await createImageBitmap(f,{imageOrientation:'from-image'}):await loadImg(f),bw=b.width||b.naturalWidth,bh=b.height||b.naturalHeight,k=Math.min(1,4000/Math.max(bw,bh)),c=document.createElement('canvas');c.width=Math.round(bw*k);c.height=Math.round(bh*k);c.getContext('2d',{willReadFrequently:true}).drawImage(b,0,0,c.width,c.height);
  IT.orig=c;IT.dom=null;IT.work=iteCopy(c);IT.hist=[];IT.L={line:[],word:[]};IT.sel=null;IT.prev=null;IT.name=f.name.replace(/\.[^.]+$/,'');$('iteScan').disabled=false;iteLayout();iteDraw();IT.fontsP=iteLoadMany(iteGroupIdx(function(d){return d.core}),function(n,t){var s=$('iteSt');if(s&&$('iteBusy').hidden)s.textContent='Loading fonts for better matching… '+n+'/'+t});iteScanRun()}catch(e){isay('Could not read this image.','err')}};
async function iteScanRun(){if(!IT.work)return;var btn=$('iteScan'),w=null,bz=$('iteBusy');btn.disabled=true;bz.hidden=false;$('iteBusyT').textContent='Doxlio is analyzing the text…';IT.sel=null;iteDraw();
 try{await lib('tess');var lang=$('iteLang').value;IT.rtl=(lang==='urd'||lang==='ara');
  if(IT.rtl)IT.fontsP=Promise.all([IT.fontsP,iteLoadMany(iteGroupIdx(function(d){return d.group==='Urdu / Arabic'}))]);else if(lang==='hin')IT.fontsP=Promise.all([IT.fontsP,iteLoadMany(iteGroupIdx(function(d){return d.group==='Hindi'}))]);
  w=await Tesseract.createWorker(lang,1,{logger:function(m){if(m.status)$('iteBusyT').textContent='Analyzing text… '+m.status+(m.progress?' '+Math.round(m.progress*100)+'%':'')}});
  var r=await w.recognize(IT.work),d=r.data,ws=d.words,ls=d.lines;
  if(!ws||!ls){ws=[];ls=[];(d.blocks||[]).forEach(function(bl){(bl.paragraphs||[]).forEach(function(p){(p.lines||[]).forEach(function(l){ls.push(l);(l.words||[]).forEach(function(x){ws.push(x)})})})})}
  var norm=function(a2){return a2.filter(function(x){return x.text&&x.text.trim()&&x.bbox&&x.bbox.x1-x.bbox.x0>3&&x.bbox.y1-x.bbox.y0>3}).map(function(x){var t=x.text.trim(),b={x0:x.bbox.x0,y0:x.bbox.y0,x1:x.bbox.x1,y1:x.bbox.y1};return{t:t,t0:t,b:b,b0:{x0:b.x0,y0:b.y0,x1:b.x1,y1:b.y1}}})};
  IT.L={line:norm(ls),word:norm(ws)};IT.sel=null;IT.prev=null;$('iteBusyT').textContent='Matching fonts…';try{await IT.fontsP}catch(_){}iteDominant();
  isay(IT.L.line.length?'Found '+IT.L.line.length+' lines. Tap any text on the image to edit it right there.':'No text was found. Choose “Draw an area manually” and draw a box around the text.',IT.L.line.length?'ok':'err');
 }catch(e){isay('Text recognition failed: '+(e.message||e)+' (language data downloads on first use, so you must be online).','err')}
 try{if(w)await w.terminate()}catch(_){}bz.hidden=true;btn.disabled=false;iteDraw()}
$('iteScan').onclick=iteScanRun;
$('iteMode').onchange=function(){IT.mode=this.value;IT.sel=null;IT.prev=null;$('iteOv').style.touchAction=IT.mode==='manual'?'none':'auto';iteDraw();isay(IT.mode==='manual'?'Drag a rectangle around the text you want to replace.':'')};
$('iteZoom').onchange=function(){IT.zoom=+this.value||1;iteLayout();iteDraw(IT.prev)};
function ipt(e){var r=$('iteCv').getBoundingClientRect();return[(e.clientX-r.left)/r.width*IT.work.width,(e.clientY-r.top)/r.height*IT.work.height]}
$('iteOv').addEventListener('pointerdown',function(e){if(!IT.work)return;var q=ipt(e);
 if(IT.sel&&$('iteInline').value!==IT.sel.t)iteDoApply();
 if(IT.mode==='manual'){IT.drag={x:q[0],y:q[1],x2:q[0],y2:q[1]};IT.sel=null;IT.prev=null;try{$('iteOv').setPointerCapture(e.pointerId)}catch(_){}e.preventDefault();return}
 var best=null,ba=1e18;IT.L[IT.mode].forEach(function(it){var b=it.b;if(q[0]>=b.x0&&q[0]<=b.x1&&q[1]>=b.y0&&q[1]<=b.y1){var ar=(b.x1-b.x0)*(b.y1-b.y0);if(ar<ba){ba=ar;best=it}}});
 if(best)iteSelect(best);else{IT.sel=null;IT.prev=null;iteDraw();isay('No detected text at this spot. Try “Edit single words”, or draw an area manually.')}});
$('iteOv').addEventListener('pointermove',function(e){if(!IT.drag)return;var q=ipt(e);IT.drag.x2=Math.max(0,Math.min(IT.work.width,q[0]));IT.drag.y2=Math.max(0,Math.min(IT.work.height,q[1]));iteDraw()});
['pointerup','pointercancel'].forEach(function(n){$('iteOv').addEventListener(n,function(){var d=IT.drag;if(!d)return;IT.drag=null;var b={x0:Math.min(d.x,d.x2),y0:Math.min(d.y,d.y2),x1:Math.max(d.x,d.x2),y1:Math.max(d.y,d.y2)};if(b.x1-b.x0>6&&b.y1-b.y0>6)iteSelect({t:'',t0:'',b:b,b0:b,manual:1,tmp:1});else iteDraw()})});
function iteStyleText(){var p=iteP(),f=FONTS[p.fi]?FONTS[p.fi][1]:FONTS[0][1],t=$('iteText');t.style.fontFamily=f;t.style.fontWeight=p.bold?'700':'400';t.style.fontStyle=p.italic?'italic':'normal';t.style.fontSize='22px';t.style.color=p.color;t.style.direction=IT.rtl?'rtl':'ltr'}
function iteTopChips(){var el=$('iteTop'),t=(IT.sel&&IT.sel._top)||[];el.innerHTML=t.length?'<span class="note">Closest fonts:</span> '+t.map(function(x){return'<button data-fi="'+x.fi+'" data-b="'+(x.bold?1:0)+'" data-i="'+(x.italic?1:0)+'">'+esc(FONTS[x.fi][0])+(x.bold?' Bold':'')+(x.italic?' Italic':'')+'</button>'}).join(''):''}
$('iteTop').onclick=function(e){var b=e.target;if(!b.getAttribute||b.getAttribute('data-fi')==null)return;$('iteFont').value=b.getAttribute('data-fi');$('iteBold').checked=b.getAttribute('data-b')==='1';$('iteItalic').checked=b.getAttribute('data-i')==='1';itePrev()};
function iteSelect(it){IT.sel=it;var m=iteAuto(it),st=it._style;it.bgs=m.bgs;$('iteText').value=it.t;
 if(st){$('iteFont').value=st.fi;$('iteBold').checked=!!st.bold;$('iteItalic').checked=!!st.italic;$('iteSize').value=st.size;$('iteColor').value=st.color}
 else{$('iteFont').value=m.fi;$('iteBold').checked=!!m.bold;$('iteItalic').checked=!!m.italic;$('iteSize').value=m.size;$('iteColor').value=m.color}
 $('iteLs').value=0;$('iteAlign').value=IT.rtl?'right':'left';$('iteDx').value=0;$('iteDy').value=0;$('iteEp').value=3;$('iteBgMode').value='auto';$('iteBg').value=rgb2hex([0,1,2].map(function(c){return(m.bgs.T[c]+m.bgs.B[c]+m.bgs.L[c]+m.bgs.R[c])/4}));
 it._top=m.top;iteTopChips();$('itePanel').hidden=false;$('iteInline').value=it.t;IT.prev=null;iteStyleText();iteDraw();isay('Edit the text right on the image, then tap ✔. Pick another font under ⚙ and the text changes instantly.');try{$('iteInline').focus({preventScroll:true});$('iteInline').select()}catch(_){}}
function imed(x,y,w,h){var W=IT.work.width,H=IT.work.height;x=Math.max(0,Math.round(x));y=Math.max(0,Math.round(y));w=Math.min(W-x,Math.round(w));h=Math.min(H-y,Math.round(h));if(w<1||h<1)return null;
 var d=IT.work.getContext('2d').getImageData(x,y,w,h).data,R=[],G=[],B=[];for(var i=0;i<d.length;i+=4){R.push(d[i]);G.push(d[i+1]);B.push(d[i+2])}var m=function(a){a.sort(function(p,q){return p-q});return a[a.length>>1]};return[m(R),m(G),m(B)]}
function iteBgSample(b,pad){var x0=b.x0-pad,x1=b.x1+pad,y0=b.y0-pad,y1=b.y1+pad,s=3,w=x1-x0,h=y1-y0,T=imed(x0,y0-s,w,s),B=imed(x0,y1,w,s),L=imed(x0-s,y0,s,h),R=imed(x1,y0,s,h),all=[T,B,L,R].filter(Boolean);
 if(!all.length){var wh=[255,255,255];return{T:wh,B:wh,L:wh,R:wh,pad:pad}}var av=[0,1,2].map(function(c){return all.reduce(function(s2,q){return s2+q[c]},0)/all.length});
 return{T:T||av,B:B||av,L:L||av,R:R||av,pad:pad}}
function iteColorOf(b,bgs){var W=IT.work.width,H=IT.work.height,x=Math.max(0,Math.round(b.x0)),y=Math.max(0,Math.round(b.y0)),w=Math.min(W-x,Math.round(b.x1-b.x0)),h=Math.min(H-y,Math.round(b.y1-b.y0));if(w<1||h<1)return[0,0,0];
 var d=IT.work.getContext('2d').getImageData(x,y,w,h).data,bg=[0,1,2].map(function(c){return(bgs.T[c]+bgs.B[c]+bgs.L[c]+bgs.R[c])/4}),mx=0,i;
 for(i=0;i<d.length;i+=4){var e=Math.abs(d[i]-bg[0])+Math.abs(d[i+1]-bg[1])+Math.abs(d[i+2]-bg[2]);if(e>mx)mx=e}
 if(mx<45)return bg[0]+bg[1]+bg[2]>384?[20,20,20]:[240,240,240];
 var s=[0,0,0],n=0;for(i=0;i<d.length;i+=4){var e2=Math.abs(d[i]-bg[0])+Math.abs(d[i+1]-bg[1])+Math.abs(d[i+2]-bg[2]);if(e2>=mx*.7){s[0]+=d[i];s[1]+=d[i+1];s[2]+=d[i+2];n++}}return n?[s[0]/n,s[1]/n,s[2]/n]:[0,0,0]}
function idil(m,w,h){var o=new Uint8Array(m.length);for(var y=0;y<h;y++)for(var x=0;x<w;x++){var v=0;for(var dy=-1;dy<=1&&!v;dy++)for(var dx=-1;dx<=1;dx++){var X=x+dx,Y=y+dy;if(X>=0&&Y>=0&&X<w&&Y<h&&m[Y*w+X]){v=1;break}}o[y*w+x]=v}return o}
/* ink mask of the original text (small, for shape comparison) */
function iteRef(it){var b=it.b,key=[b.x0,b.y0,b.x1,b.y1].join();if(it._ref&&it._ref.key===key)return it._ref;
 var W=Math.max(2,Math.round(b.x1-b.x0)),H=Math.max(2,Math.round(b.y1-b.y0)),k=Math.min(1,160/W),cw=Math.max(8,Math.round(W*k)),ch=Math.max(6,Math.round(H*k)),c=document.createElement('canvas');c.width=cw;c.height=ch;
 var x=c.getContext('2d',{willReadFrequently:true});x.drawImage(IT.work,Math.round(b.x0),Math.round(b.y0),W,H,0,0,cw,ch);var d=x.getImageData(0,0,cw,ch).data,g=new Float32Array(cw*ch),i,br=[];
 for(i=0;i<g.length;i++)g[i]=.299*d[i*4]+.587*d[i*4+1]+.114*d[i*4+2];
 var bs=iteBgSample(b,3),bg=[0,1,2].reduce(function(s,c2){return s+[.299,.587,.114][c2]*(bs.T[c2]+bs.B[c2]+bs.L[c2]+bs.R[c2])/4},0),mx=0;
 for(i=0;i<g.length;i++){var e=Math.abs(g[i]-bg);if(e>mx)mx=e}var m=new Uint8Array(g.length);if(mx>=30)for(i=0;i<g.length;i++)m[i]=Math.abs(g[i]-bg)>mx*.45?1:0;
 var r={key:key,W:W,H:H,cw:cw,ch:ch,mask:m,dm:idil(m,cw,ch),ok:mx>=30};it._ref=r;return r}
/* render the same text in one candidate font, squeeze to the original box and compare shapes */
function iteLoadFont(fi){var f=FONTS[fi],d=f&&f[3];if(!d||d.loaded)return Promise.resolve(true);if(d.failed)return Promise.resolve(false);if(d.p)return d.p;
 d.p=Promise.all(d.weights.map(function(wt){var u='https://cdn.jsdelivr.net/npm/@fontsource/'+d.id+'@5/files/'+d.id+'-'+d.subset+'-'+wt+'-normal.woff2',ff=new FontFace(f[0],'url('+u+') format("woff2")',{weight:String(wt),style:'normal'});return ff.load().then(function(){document.fonts.add(ff);return true},function(){return false})})).then(function(r){d.loaded=r[0]===true||r.some(Boolean);d.failed=!d.loaded;d.p=null;return d.loaded});return d.p}
function iteLoadMany(list,cb){var n=0,tot=list.length,run=function(k){if(k>=list.length)return Promise.resolve();var batch=list.slice(k,k+4);return Promise.all(batch.map(function(fi){return iteLoadFont(fi).then(function(){n++;if(cb)cb(n,tot)})})).then(function(){return run(k+4)})};return run(0).then(function(){iteFontOpts()})}
function iteGroupIdx(pred){var o=[];FONTS.forEach(function(f,i){if(f[3]&&pred(f[3]))o.push(i)});return o}
function iteAvail(f){return !f[3]||f[3].loaded}
function icorr(p,q){var n=p.length,mp=0,mq=0,i;for(i=0;i<n;i++){mp+=p[i];mq+=q[i]}mp/=n;mq/=n;var s=0,sp=0,sq=0;for(i=0;i<n;i++){var x=p[i]-mp,y=q[i]-mq;s+=x*y;sp+=x*x;sq+=y*y}var d=Math.sqrt(sp*sq);return d>0?s/d:0}
function iprof(m,w,h,ax){var p=new Float32Array(ax?h:w),x,y;for(y=0;y<h;y++)for(x=0;x<w;x++)if(m[y*w+x])p[ax?y:x]++;return p}
function iteScore(t,fam,bold,ref,cls,ital){mctx.font=(ital?'italic ':'')+(bold?'bold ':'')+'100px '+fam;var mm=mctx.measureText(t),l=mm.actualBoundingBoxLeft||0,rr=mm.actualBoundingBoxRight||mm.width,a=mm.actualBoundingBoxAscent||0,dd=mm.actualBoundingBoxDescent||0,iw=l+rr,ih=a+dd;if(!(iw>0&&ih>0))return null;
 var c=document.createElement('canvas');c.width=ref.cw;c.height=ref.ch;var x=c.getContext('2d',{willReadFrequently:true});x.scale(ref.cw/iw,ref.ch/ih);x.translate(l,a);x.font=(ital?'italic ':'')+(bold?'bold ':'')+'100px '+fam;x.textBaseline='alphabetic';x.textAlign='left';x.fillStyle='#000';x.fillText(t,0,0);
 var al=x.getImageData(0,0,ref.cw,ref.ch).data,cm=new Uint8Array(ref.cw*ref.ch),i;for(i=0;i<cm.length;i++)cm[i]=al[i*4+3]>110?1:0;
 var cd=idil(cm,ref.cw,ref.ch),A=0,B=0,ia=0,ib=0,inter=0,uni=0;for(i=0;i<cm.length;i++){var r=ref.mask[i],q=cm[i];if(r&&q)inter++;if(r||q)uni++;if(q){B++;if(ref.dm[i])ib++}if(r){A++;if(cd[i])ia++}}
 var ov=(ia+ib)/Math.max(1,A+B),iou=inter/Math.max(1,uni),pen=Math.min(1.5,Math.abs(Math.log((iw/ih)/(ref.W/ref.H)))),cov=Math.abs(Math.log(Math.max(1,B)/Math.max(1,A))),
 cc=icorr(iprof(ref.mask,ref.cw,ref.ch,0),iprof(cm,ref.cw,ref.ch,0)),rc=icorr(iprof(ref.mask,ref.cw,ref.ch,1),iprof(cm,ref.cw,ref.ch,1)),sc=ov-.45*pen-cov+iou+cc+.5*rc;
 if(cls==='serif')sc-=.1;return{score:sc,iw:iw,ih:ih}}
/* the most common font among the longest lines: default for every edit, but only when the page really uses one font */
function iteDominant(){IT.dom=null;try{var L=IT.L.line.filter(function(it){return it.t.replace(/\s/g,'').length>=6&&iteRef(it).ok}).sort(function(p,q){return q.t.length-p.t.length}).slice(0,8);if(L.length<3)return;var sum={};
 L.forEach(function(it){var ref=iteRef(it),bf=null;FONTS.forEach(function(f,fi){if(!iteAvail(f))return;[false,true].forEach(function(bd){var s=iteScore(it.t,f[1],bd,ref,f[2],false);if(s&&(!bf||s.score>bf.s))bf={s:s.score,fi:fi}})});if(bf)sum[bf.fi]=(sum[bf.fi]||0)+1});
 var bi=-1,bv=0;for(var k in sum)if(sum[k]>bv){bv=sum[k];bi=+k}if(bv>=Math.ceil(L.length*.6))IT.dom=bi}catch(e){IT.dom=null}}
function iteAuto(it){var b=it.b,W=b.x1-b.x0,H=b.y1-b.y0,bgs=iteBgSample(b,3),col=iteColorOf(b,bgs),di=IT.dom!=null?IT.dom:-1;
 if(!it.t.trim()||!iteRef(it).ok)return{fi:di>=0?di:0,bold:false,italic:false,size:Math.max(6,Math.round(H/1.15)),color:rgb2hex(col),bgs:bgs,top:[]};
 var ref=iteRef(it),best=null,domBest=null,per={};
 FONTS.forEach(function(f,fi){if(!iteAvail(f))return;[false,true].forEach(function(bd){[false,true].forEach(function(it2){var s=iteScore(it.t,f[1],bd,ref,f[2],it2);if(!s)return;s.fi=fi;s.bold=bd;s.italic=it2;if(!best||s.score>best.score)best=s;if(fi===di&&(!domBest||s.score>domBest.score))domBest=s;if(!per[fi]||s.score>per[fi].score)per[fi]=s})})});
 var pick=best;if(domBest&&best&&domBest.score>=best.score-.08)pick=domBest;
 if(!pick)return{fi:0,bold:false,italic:false,size:Math.max(6,Math.round(H/1.15)),color:rgb2hex(col),bgs:bgs,top:[]};
 var top=Object.keys(per).map(function(k){return per[k]}).sort(function(p,q){return q.score-p.score}).slice(0,5).map(function(s){return{fi:s.fi,bold:s.bold,italic:s.italic}});
 var size=it.t.trim().length>=3?100*W/pick.iw:100*H/pick.ih;return{fi:pick.fi,bold:pick.bold,italic:pick.italic,size:Math.max(6,Math.round(size)),color:rgb2hex(col),bgs:bgs,top:top}}
function iteP(){return{text:$('iteText').value,fi:+$('iteFont').value||0,size:Math.max(4,+$('iteSize').value||12),bold:$('iteBold').checked,italic:$('iteItalic').checked,color:$('iteColor').value,ls:IT.rtl?0:(+$('iteLs').value||0),align:$('iteAlign').value,dx:+$('iteDx').value||0,dy:+$('iteDy').value||0,ep:Math.max(0,Math.min(30,Math.round(+$('iteEp').value||0))),bgMode:$('iteBgMode').value,bg:$('iteBg').value}}
function iteRender(p){var sel=IT.sel,b=sel.b,W=IT.work.width,H=IT.work.height,fam=FONTS[p.fi]?FONTS[p.fi][1]:FONTS[0][1],pad=p.ep;
 var bx0=Math.round(b.x0)-pad,by0=Math.round(b.y0)-pad,bx1=Math.round(b.x1)+pad,by1=Math.round(b.y1)+pad;
 var om=sel.t?iteMeas(sel.t,fam,p.bold,p.italic,p.size):{w:0,a:p.size*.75,d:0},base=Math.round(b.y1)-Math.round(om.d)+p.dy;
 var nm=iteMeas(p.text||' ',fam,p.bold,p.italic,p.size),nw=nm.w+p.ls*(p.text||'').length;
 var left=p.align==='left'?b.x0+p.dx:p.align==='right'?b.x1+p.dx-nw:(b.x0+b.x1)/2+p.dx-nw/2;
 var rx0=Math.max(0,Math.min(bx0,Math.floor(left)-2)),rx1=Math.min(W,Math.max(bx1,Math.ceil(left+nw)+2)),ry0=Math.max(0,Math.min(by0,Math.floor(base-nm.a)-2)),ry1=Math.min(H,Math.max(by1,Math.ceil(base+nm.d)+2)),rw=rx1-rx0,rh=ry1-ry0;if(rw<2||rh<2)return null;
 var c=document.createElement('canvas');c.width=rw;c.height=rh;var x=c.getContext('2d');x.drawImage(IT.work,rx0,ry0,rw,rh,0,0,rw,rh);
 var ex0=Math.max(0,bx0),ey0=Math.max(0,by0),ex1=Math.min(W,bx1),ey1=Math.min(H,by1),ew=ex1-ex0,eh=ey1-ey0;
 if(ew>0&&eh>0){if(!sel.bgs||sel.bgs.pad!==pad)sel.bgs=iteBgSample(b,pad);var g=sel.bgs,pc=p.bgMode==='pick'?hex2rgb(p.bg):null,id=x.createImageData(ew,eh),d=id.data;
  for(var yy=0;yy<eh;yy++){var v=eh>1?yy/(eh-1):0;for(var xx=0;xx<ew;xx++){var u=ew>1?xx/(ew-1):0,o=(yy*ew+xx)*4;for(var k=0;k<3;k++)d[o+k]=pc?pc[k]:Math.round(.5*((1-u)*g.L[k]+u*g.R[k])+.5*((1-v)*g.T[k]+v*g.B[k]));d[o+3]=255}}
  x.putImageData(id,ex0-rx0,ey0-ry0)}
 x.font=(p.italic?'italic ':'')+(p.bold?'bold ':'')+p.size+'px '+fam;x.fillStyle=p.color;x.textBaseline='alphabetic';x.textAlign='left';if('direction' in x)x.direction=IT.rtl?'rtl':'ltr';if('letterSpacing' in x)x.letterSpacing=p.ls+'px';
 if(p.text)x.fillText(p.text,left-rx0,base-ry0);
 return{x:rx0,y:ry0,w:rw,h:rh,cv:c,left:left,base:base,nm:nm,nw:nw}}
var iteRaf=0;function itePrev(){if(!IT.sel)return;iteStyleText();cancelAnimationFrame(iteRaf);iteRaf=requestAnimationFrame(function(){if(!IT.sel)return;IT.prev=iteRender(iteP());iteDraw(IT.prev)})}
$('itePanel').addEventListener('input',function(e){if(e.target&&e.target.id==='iteText')$('iteInline').value=e.target.value;itePrev()});$('itePanel').addEventListener('change',function(e){if(e.target&&e.target.id==='iteFont'){var fi=+e.target.value,f=FONTS[fi];if(f&&f[3]&&!f[3].loaded){isay('Loading font '+f[0]+'…');iteLoadFont(fi).then(function(ok){iteFontOpts();$('iteFont').value=String(fi);isay(ok?'Font ready.':'Could not load this font (it needs internet).',ok?'ok':'err');itePrev()});return}}itePrev()});
$('itePanel').addEventListener('toggle',function(){if(IT.sel){IT.prev=null;itePrev();iteDraw(IT.prev)}});
$('iteMoreFonts').onclick=function(){var b=this,idx=iteGroupIdx(function(d){return!d.loaded&&!d.failed&&(d.group!=='Urdu / Arabic'||IT.rtl)&&(d.group!=='Hindi'||$('iteLang').value==='hin')});b.disabled=true;
 iteLoadMany(idx,function(n,t){b.textContent='Loading fonts… '+n+'/'+t}).then(function(){b.disabled=false;b.textContent='Find a closer font (load more fonts)';iteDominant();if(IT.sel){var m=iteAuto(IT.sel);IT.sel._top=m.top;$('iteFont').value=m.fi;$('iteBold').checked=!!m.bold;$('iteItalic').checked=!!m.italic;iteTopChips();itePrev()}isay('More fonts loaded. The closest match was selected; see “Closest fonts” for other options.','ok')})};
function iteDoApply(){if(!IT.sel)return;var p=iteP(),r=iteRender(p);if(!r)return;
 var wx=IT.work.getContext('2d');IT.hist.push({x:r.x,y:r.y,img:wx.getImageData(r.x,r.y,r.w,r.h)});if(IT.hist.length>30)IT.hist.shift();wx.drawImage(r.cv,r.x,r.y);
 var it=IT.sel;it._style={fi:p.fi,bold:p.bold,italic:p.italic,size:p.size,color:p.color};it.t=p.text;it.b={x0:r.left,x1:r.left+r.nw,y0:r.base-r.nm.a,y1:r.base+r.nm.d};it.bgs=null;it._ref=null;IT.sel=null;IT.prev=null;iteDraw();isay('Change applied. Tap more text to edit, or save the image.','ok')}
$('iteApply').onclick=iteDoApply;$('iteInOk').onclick=iteDoApply;
$('iteInNo').onclick=function(){IT.sel=null;IT.prev=null;iteDraw();isay('')};
$('iteDel').onclick=function(){if(!IT.sel)return;$('iteInline').value='';$('iteText').value='';iteDoApply();isay('Text deleted. Use Undo to bring it back.','ok')};
$('iteStyle').onclick=function(){var d=$('itePanel');d.hidden=false;d.open=!d.open;if(d.open&&d.scrollIntoView)d.scrollIntoView({block:'nearest'})};
$('iteInline').oninput=function(){$('iteText').value=this.value;iteEd()};
$('iteInline').onkeydown=function(e){if(e.key==='Enter'){e.preventDefault();iteDoApply()}else if(e.key==='Escape'){$('iteInNo').onclick()}};
$('iteUndo').onclick=function(){var h=IT.hist.pop();if(!h){isay('Nothing to undo.');return}IT.work.getContext('2d').putImageData(h.img,h.x,h.y);IT.sel=null;IT.prev=null;iteDraw();isay('Undone.')};
$('iteReset').onclick=function(){if(!IT.orig)return;IT.work=iteCopy(IT.orig);IT.hist=[];['line','word'].forEach(function(k){IT.L[k].forEach(function(it){it.t=it.t0;it.b={x0:it.b0.x0,y0:it.b0.y0,x1:it.b0.x1,y1:it.b0.y1};it.bgs=null;it._ref=null;it._style=null})});IT.sel=null;IT.prev=null;iteDraw();isay('Image reset to the original.')};
$('iteDlPng').onclick=function(){if(!IT.work)return;if(IT.sel&&$('iteInline').value!==IT.sel.t)iteDoApply();IT.work.toBlob(function(b){dl(b,'edited-'+IT.name+'.png')},'image/png')};
$('iteDlJpg').onclick=function(){if(!IT.work)return;if(IT.sel&&$('iteInline').value!==IT.sel.t)iteDoApply();IT.work.toBlob(function(b){dl(b,'edited-'+IT.name+'.jpg')},'image/jpeg',.95)};
$('iteFontFile').onchange=async function(){var f=this.files[0];this.value='';if(!f)return;if(!/\.(ttf|otf|woff2?)$/i.test(f.name)){isay('Use a .ttf, .otf, .woff or .woff2 font file.','err');return}if(f.size>10*1048576){isay('Font file is larger than 10 MB.','err');return}
 try{var nmf='DXUser'+FONTS.length,ff=new FontFace(nmf,await readBuf(f));await ff.load();document.fonts.add(ff);FONTS.push([f.name.replace(/\.[^.]+$/,''),'"'+nmf+'"']);iteFontOpts();$('iteFont').value=FONTS.length-1;isay('Font added: '+f.name,'ok');itePrev()}catch(e){isay('Could not load this font file.','err')}};
window.__ite={IT:IT,select:iteSelect,render:iteRender,P:iteP,auto:iteAuto,ed:iteEd,apply:iteDoApply,loadFont:iteLoadFont,FONTS:FONTS,opts:iteFontOpts};

/* ---------- Get the app (PWA install / Google Play) ---------- */
var APPCFG=window.DX_CONFIG||{},deferredInstall=null,UA=navigator.userAgent||'',IS_AND=/Android/i.test(UA),IS_IOS=/iPhone|iPad|iPod/i.test(UA);
function isApp(){try{return(window.matchMedia&&window.matchMedia('(display-mode: standalone)').matches)||navigator.standalone===true||/[?&]source=pwa/.test(location.search)||(document.referrer||'').indexOf('android-app://')===0}catch(e){return false}}
function appDismissed(){try{return(+localStorage.getItem('dx_app_dismiss')||0)>Date.now()}catch(e){return false}}
function appInstallNow(){if(!deferredInstall)return;var d=deferredInstall;deferredInstall=null;d.prompt();if(d.userChoice)d.userChoice.then(function(c){if(c&&c.outcome==='accepted'){var b=$('appBanner');if(b)b.remove()}appPage()})}
function appBanner(){if(isApp()||appDismissed()||$('appBanner'))return;var play=APPCFG.playStoreUrl,apk=APPCFG.apkUrl,act='';
 if(IS_AND&&play)act='<a class="btn p" href="'+esc(play)+'" rel="noopener">Get on Google Play</a>';
 else if(deferredInstall)act='<button class="p" id="appInstall">Install app</button>';
 else if(IS_AND&&apk)act='<a class="btn p" href="'+esc(apk)+'">Download app</a>';
 else if(IS_IOS)act='<a class="btn p" href="#/app">How to install</a>';
 else return;
 var d=document.createElement('div');d.id='appBanner';d.className='appBanner';d.setAttribute('role','region');d.setAttribute('aria-label','Get the Doxlio app');
 d.innerHTML='<img src="/icon-192.png" width="40" height="40" alt="">'+'<div class="abT"><b>Get the Doxlio app</b>Scan, edit PDFs and more, faster in the app.</div>'+act+'<button class="x" id="appX" aria-label="Dismiss">✕</button>';
 document.body.appendChild(d);
 var ins=$('appInstall');if(ins)ins.onclick=appInstallNow;
 $('appX').onclick=function(){try{localStorage.setItem('dx_app_dismiss',String(Date.now()+14*864e5))}catch(e){}d.remove()}}
function appPage(){var box=$('appBtns');if(!box)return;var h='',play=APPCFG.playStoreUrl,apk=APPCFG.apkUrl;
 if(isApp())h='<p class="ok">You are already using the Doxlio app.</p>';
 else{if(play)h+='<p><a class="btn p" href="'+esc(play)+'" rel="noopener">Get it on Google Play</a></p>';
  if(deferredInstall)h+='<p><button class="p" id="appInstall2">Install the Doxlio app</button></p>';
  if(apk)h+='<p><a class="btn" href="'+esc(apk)+'">Download the Android app (APK)</a></p>';
  if(IS_IOS)h+='<p><b>iPhone / iPad:</b> open this page in Safari, tap the Share button, then choose <b>Add to Home Screen</b>.</p>';
  else if(!play&&!deferredInstall&&!apk)h+='<p><b>Android:</b> open <b>doxlio.com</b> in Chrome, tap the ⋮ menu and choose <b>Install app</b> (or <b>Add to Home screen</b>).</p><p><b>Computer:</b> in Chrome or Edge, click the install icon at the right end of the address bar.</p>'}
 box.innerHTML=h;var i2=$('appInstall2');if(i2)i2.onclick=appInstallNow}
window.addEventListener('beforeinstallprompt',function(e){e.preventDefault();deferredInstall=e;appBanner();appPage()});
window.addEventListener('appinstalled',function(){var b=$('appBanner');if(b)b.remove();deferredInstall=null;appPage()});
if('serviceWorker' in navigator&&location.protocol==='https:')navigator.serviceWorker.register('/sw.js').catch(function(){});
setTimeout(appBanner,4000);

/* ---------- Router ---------- */
var inited={};
function route(){
 var r=(location.hash.replace(/^#\/?/,'')||window.DX_ROUTE||'home').split('?')[0],view='v-home';
 if($('s-cam')&&!$('s-cam').hidden&&$('bCamX'))$('bCamX').click();
 if(r==='home')view='v-home';else if(r==='scanner')view='v-scanner';else if(r==='ocr')view='v-ocr';else if(r==='resume')view='v-resume';else if(r==='cover')view='v-cover';
 else if(r==='contact')view='v-contact';else if(r==='app')view='v-app';else if(r==='img-text-edit')view='v-ite';else if(r==='wordcount'||r==='case')view='v-text';else if(r==='blog'||(r.indexOf('blog-')===0&&ARTB[r.slice(5)]))view='v-page';else if(AIT[r]&&inT(r))view='v-ai';else if(P[r]&&inT(r))view='v-tool';else if(PAGES[r])view='v-page';else{view='v-page';r='404'}
 [].forEach.call(document.querySelectorAll('.view'),function(v){v.hidden=v.id!==view});
 say('');
 if(view==='v-tool')drawTool(r);if(view==='v-ai')drawAi(r);
 if(view==='v-text')drawText(r);if(view==='v-contact')ctInit();if(view==='v-app')appPage();if(view==='v-ite')iteShow();
 if(view==='v-page'&&(r==='blog'||r.indexOf('blog-')===0)){$('v-page').innerHTML=blogHtml(r)}else if(view==='v-page'){var pg=PAGES[r]||['Page not found','This page does not exist. <a href="#/">Go to all tools</a>.'];$('v-page').innerHTML='<h1>'+pg[0]+'</h1><div class="card"><p>'+pg[1]+'</p></div>'}
 if(view==='v-scanner'){lib('jspdf').catch(function(e){say(e.message,'err')});if(window.loadCV)window.loadCV()}
 if(view==='v-ocr'){if(OCR_SRC)ocrShow(OCR_SRC.toDataURL('image/jpeg',.6))}
 if(view==='v-resume'){if(!inited.r){inited.r=1;rvAll()}else fit('rvWrap');setTimeout(function(){fit('rvWrap')},50)}
 if(view==='v-cover'){if(!inited.c){inited.c=1;clAll()}else fit('clWrap');setTimeout(function(){fit('clWrap')},50)}
 document.title=TITLE[r]||'Doxlio';window.scrollTo(0,0);
 [].forEach.call(document.querySelectorAll('nav a'),function(a){a.className=a.getAttribute('href')==='#/'+r?'on':''});
}
window.addEventListener('hashchange',route);
drawHome('');drawGuides();
$('faq').innerHTML=[['Is Doxlio free?','Yes. All tools are free to use — no sign-up required.'],['Are my files uploaded?','No. Processing happens in your browser. OCR language data and some libraries are downloaded from public CDNs the first time you use a tool.'],['Does it delete my files?','Doxlio never stores them. Work disappears when you close or reload the page; files on your device are not touched.'],['Why no AI tools?','AI features need a server holding an API key, and this is a static site, so they are not included.']].map(function(q){return'<details><summary>'+q[0]+'</summary><p>'+q[1]+'</p></details>'}).join('');
route();
})();
